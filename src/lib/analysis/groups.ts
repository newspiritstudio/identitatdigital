import type { Company } from '@/payload-types'

import {
  at,
  compareText,
  companyRef,
  localizedText,
  relationId,
  type AppRef,
  type CompanyRef,
  type Corpus,
} from './corpus'

/**
 * Grups empresarials: qui hi ha realment darrere de cada fitxa.
 *
 * La pregunta que respon aquest mòdul no és «de quina empresa és aquesta app?»
 * —això ja ho diu la fitxa— sinó «quantes de les aplicacions que faig servir
 * acaben a la mateixa taula?». És la pregunta que no es pot respondre mirant
 * fitxes d'una en una i la que fa evident la concentració del sector.
 */

/** Resultat de pujar per la cadena de matrius d'una empresa. */
export type OwnershipChain = {
  /** Empresa de partida. */
  companyId: string
  /** Matriu última: la primera empresa de la cadena que ja no en té cap. */
  rootId: string
  /** Cadena completa, de l'empresa de partida fins a la matriu última. */
  chain: string[]
  /**
   * `true` si la cadena es mossega la cua. Passa quan algú declara A com a
   * matriu de B i B com a matriu d'A, que és un error de dades però que no pot
   * penjar el lloc web.
   */
  cyclic: boolean
}

/**
 * Puja per `parent` fins a la matriu última.
 *
 * Dues decisions:
 *
 *  - Una empresa sense matriu declarada és la seva pròpia matriu. No inventem
 *    un grup per damunt d'ella: «no té matriu» és una afirmació legítima (Signal
 *    Foundation no en té) i confondre-la amb «no ho sabem» falsejaria el
 *    recompte de grups. Si el que passa és que la matriu no s'ha documentat, el
 *    que cal és documentar-la, no que l'anàlisi ho endevini.
 *  - Davant d'un cicle, ens aturem i marquem la cadena com a cíclica, prenent
 *    com a arrel l'última empresa visitada abans de tornar a passar pel mateix
 *    lloc. Ordre estable i sense recursió infinita.
 */
export const resolveOwnershipChain = (
  companyId: string,
  companyById: ReadonlyMap<string, Company>,
): OwnershipChain => {
  const chain: string[] = []
  const seen = new Set<string>()
  let current: string | null = companyId
  let cyclic = false

  while (current !== null) {
    if (seen.has(current)) {
      cyclic = true
      break
    }
    seen.add(current)
    chain.push(current)
    const company = companyById.get(current)
    if (!company) break
    const parent = relationId(company.parent)
    // Una empresa declarada matriu d'ella mateixa també és un cicle.
    if (parent === null) break
    if (parent === current) {
      cyclic = true
      break
    }
    current = parent
  }

  return {
    companyId,
    rootId: chain.length > 0 ? chain[chain.length - 1] : companyId,
    chain,
    cyclic,
  }
}

/** Matriu última d'una empresa, quan només interessa l'arrel. */
export const ultimateParentId = (
  companyId: string,
  companyById: ReadonlyMap<string, Company>,
): string => resolveOwnershipChain(companyId, companyById).rootId

/* ────────────────────────── volum de persones ────────────────────────────── */

const SCALES: ReadonlyArray<{ pattern: RegExp; factor: number }> = [
  { pattern: /^\s*(?:mil\s+milions|milers\s+de\s+milions)\b/i, factor: 1_000_000_000 },
  { pattern: /^\s*milions\b/i, factor: 1_000_000 },
  { pattern: /^\s*milers\b/i, factor: 1_000 },
]

/** Substantius que indiquen que la xifra compta persones o comptes. */
const PEOPLE_NOUNS =
  /^(?:de\s+)?(?:persones|usuaris|usu[aà]ries|comptes|perfils|subscripcions|subscriptors|clients|clientela)/i

/**
 * Converteix el text lliure de `userBase` en una xifra comparable.
 *
 * `userBase` és deliberadament text lliure —«Més de 2.000 milions de persones
 * usuàries mensuals»— perquè una fitxa ha de poder dir d'on surt l'estimació.
 * Per sumar-les cal interpretar-les, i aquí som conservadors a propòsit:
 *
 *  - Si el text conté un percentatge, no retornem res. «Al voltant del 90 % de
 *    les cerques mundials» és una quota de mercat, no una base d'usuaris, i
 *    sumar-la seria inventar-se una xifra.
 *  - Exigim una escala explícita («milions», «mil milions») o un nombre de
 *    quatre xifres. Així «present a més de 20 països» no es converteix en vint
 *    persones usuàries.
 *  - Exigim que la xifra compti persones, comptes, perfils o subscripcions. «3.000
 *    milions de cerques mensuals» són cerques, no persones.
 *
 * Tot el que no passa aquests filtres compta com a desconegut, mai com a zero.
 */
export const parseUserBase = (value: unknown): number | null => {
  const text = localizedText(value)
  if (text === null) return null
  if (text.includes('%')) return null

  const match = /(\d[\d.,]*)\s*/.exec(text)
  if (!match) return null

  const rawNumber = match[1]
  // Format català: el punt separa milers i la coma separa decimals.
  const normalised = rawNumber.replace(/\./g, '').replace(',', '.')
  const amount = Number(normalised)
  if (!Number.isFinite(amount) || amount <= 0) return null

  const rest = text.slice(match.index + match[0].length)
  let factor: number | null = null
  for (const scale of SCALES) {
    const scaleMatch = scale.pattern.exec(rest)
    if (scaleMatch) {
      factor = scale.factor
      const tail = rest.slice(scaleMatch[0].length).trimStart()
      if (!PEOPLE_NOUNS.test(tail)) return null
      break
    }
  }

  if (factor === null) {
    // Sense escala, només acceptem xifres que ja siguin grans per si soles i
    // que vagin seguides d'un substantiu de persones.
    if (amount < 1000) return null
    if (!PEOPLE_NOUNS.test(rest.trimStart())) return null
    factor = 1
  }

  return Math.round(amount * factor)
}

/* ─────────────────────────────── anàlisi ─────────────────────────────────── */

export type GroupDataType = {
  dataTypeId: string
  name: string
  sensitivity: number
  specialCategory: boolean
  /** Nombre d'aplicacions del grup que recullen aquest tipus de dada. */
  apps: number
}

export type GroupProfile = {
  /** Identificador de la matriu última: és la clau del grup. */
  rootId: string
  rootName: string
  rootSlug: string
  headquartersCountry: string | null
  ownership: Company['ownership'] | null
  primaryRevenueModel: Company['primaryRevenueModel'] | null
  /** Totes les empreses del corpus que pengen d'aquesta arrel. */
  companies: CompanyRef[]
  apps: AppRef[]
  appCount: number
  /**
   * Suma de les bases d'usuaris conegudes. És una suma de comptes, no de
   * persones: qui té Instagram i WhatsApp hi surt dues vegades.
   */
  knownUserBase: number | null
  appsWithKnownUserBase: number
  appsWithUnknownUserBase: number
  /** Tipus de dada que el grup sencer acumula, ordenats per abast. */
  dataTypes: GroupDataType[]
  dataTypeCount: number
  specialCategoryCount: number
  /** Sensibilitat màxima entre els tipus de dada acumulats. */
  maxSensitivity: number
  /** `true` si alguna empresa del grup té una cadena de matrius cíclica. */
  hasCyclicOwnership: boolean
}

export type GroupsAnalysis = {
  groups: GroupProfile[]
  /** Fitxes amb `company` buida o que apunta a una empresa inexistent. */
  appsWithUnresolvedCompany: number
  /** Empreses implicades en una cadena de matrius cíclica. */
  cyclicCompanyIds: string[]
  /** Nombre d'aplicacions que pertanyen als tres grups més grans. */
  appsInTopThreeGroups: number
}

/**
 * Agrupa el directori per matriu última.
 *
 * Una fitxa compta una sola vegada, al grup de la seva empresa responsable. Els
 * tipus de dada del grup són la unió dels que recullen les seves aplicacions
 * (estat «sí» o «només si s'activa»): l'interessant d'un conglomerat és
 * justament que el perfil que en surt és la suma, no el màxim.
 */
export const analyseGroups = (corpus: Corpus): GroupsAnalysis => {
  const cyclic = new Set<string>()
  const byRoot = new Map<
    string,
    {
      companies: Set<string>
      apps: AppRef[]
      userBase: number
      knownUserBase: number
      unknownUserBase: number
      dataTypes: Map<string, number>
      cyclic: boolean
    }
  >()

  // Primer, cada empresa del corpus cap al seu grup: un grup existeix encara
  // que cap de les seves empreses tingui fitxa publicada.
  const rootOf = new Map<string, string>()
  for (const company of corpus.companies) {
    const id = relationId(company)
    if (id === null) continue
    const resolved = resolveOwnershipChain(id, corpus.companyById)
    rootOf.set(id, resolved.rootId)
    if (resolved.cyclic) for (const link of resolved.chain) cyclic.add(link)
  }

  let appsWithUnresolvedCompany = 0

  for (const app of corpus.apps) {
    const companyId = relationId(app.company)
    if (companyId === null || !corpus.companyById.has(companyId)) {
      appsWithUnresolvedCompany += 1
      continue
    }
    const rootId = rootOf.get(companyId) ?? companyId
    let bucket = byRoot.get(rootId)
    if (!bucket) {
      bucket = {
        companies: new Set<string>(),
        apps: [],
        userBase: 0,
        knownUserBase: 0,
        unknownUserBase: 0,
        dataTypes: new Map<string, number>(),
        cyclic: false,
      }
      byRoot.set(rootId, bucket)
    }
    bucket.companies.add(companyId)
    bucket.apps.push({
      id: relationId(app) ?? '',
      name: localizedText(app.name) ?? '(sense nom)',
      slug: typeof app.slug === 'string' ? app.slug : '',
    })
    if (cyclic.has(companyId)) bucket.cyclic = true

    const users = parseUserBase(app.userBase)
    if (users === null) bucket.unknownUserBase += 1
    else {
      bucket.knownUserBase += 1
      bucket.userBase += users
    }

    // Un tipus de dada compta una vegada per aplicació encara que la fitxa el
    // reculli en dues files.
    const seenHere = new Set<string>()
    const rows = Array.isArray(app.dataCollection) ? app.dataCollection : []
    for (const row of rows) {
      const status = at(row, 'status')
      if (status !== 'yes' && status !== 'optional') continue
      const dataTypeId = relationId(at(row, 'dataType'))
      if (dataTypeId === null || seenHere.has(dataTypeId)) continue
      seenHere.add(dataTypeId)
      bucket.dataTypes.set(dataTypeId, (bucket.dataTypes.get(dataTypeId) ?? 0) + 1)
    }
  }

  // Totes les empreses del grup, encara que no tinguin fitxa: és el que fa
  // visible que «Meta Platforms Ireland» i «WhatsApp Ireland» són la mateixa casa.
  for (const [companyId, rootId] of rootOf) {
    const bucket = byRoot.get(rootId)
    if (bucket) bucket.companies.add(companyId)
  }

  const groups: GroupProfile[] = []
  for (const [rootId, bucket] of byRoot) {
    const root = corpus.companyById.get(rootId)
    const dataTypes: GroupDataType[] = []
    let specialCategoryCount = 0
    let maxSensitivity = 0
    for (const [dataTypeId, apps] of bucket.dataTypes) {
      const meta = corpus.dataTypeById.get(dataTypeId)
      const sensitivity = typeof meta?.sensitivity === 'number' ? meta.sensitivity : 0
      const specialCategory = meta?.specialCategory === true
      if (specialCategory) specialCategoryCount += 1
      if (sensitivity > maxSensitivity) maxSensitivity = sensitivity
      dataTypes.push({
        dataTypeId,
        name: localizedText(meta?.name) ?? '(tipus de dada no resolt)',
        sensitivity,
        specialCategory,
        apps,
      })
    }
    dataTypes.sort(
      (a, b) =>
        b.apps - a.apps ||
        b.sensitivity - a.sensitivity ||
        compareText(a.name, b.name) ||
        compareText(a.dataTypeId, b.dataTypeId),
    )

    const companies = [...bucket.companies]
      .map((id) => {
        const company = corpus.companyById.get(id)
        return company
          ? companyRef(company)
          : { id, name: '(empresa no resolta)', slug: '' }
      })
      .sort((a, b) => compareText(a.name, b.name) || compareText(a.id, b.id))

    const apps = [...bucket.apps].sort(
      (a, b) => compareText(a.name, b.name) || compareText(a.id, b.id),
    )

    groups.push({
      rootId,
      rootName: localizedText(root?.name) ?? '(empresa no resolta)',
      rootSlug: typeof root?.slug === 'string' ? root.slug : '',
      headquartersCountry:
        typeof root?.headquartersCountry === 'string' && root.headquartersCountry.length > 0
          ? root.headquartersCountry
          : null,
      ownership: root?.ownership ?? null,
      primaryRevenueModel: root?.primaryRevenueModel ?? null,
      companies,
      apps,
      appCount: apps.length,
      knownUserBase: bucket.knownUserBase > 0 ? bucket.userBase : null,
      appsWithKnownUserBase: bucket.knownUserBase,
      appsWithUnknownUserBase: bucket.unknownUserBase,
      dataTypes,
      dataTypeCount: dataTypes.length,
      specialCategoryCount,
      maxSensitivity,
      hasCyclicOwnership: bucket.cyclic,
    })
  }

  groups.sort(
    (a, b) =>
      b.appCount - a.appCount ||
      b.dataTypeCount - a.dataTypeCount ||
      compareText(a.rootName, b.rootName) ||
      compareText(a.rootId, b.rootId),
  )

  return {
    groups,
    appsWithUnresolvedCompany,
    cyclicCompanyIds: [...cyclic].sort(compareText),
    appsInTopThreeGroups: groups.slice(0, 3).reduce((sum, group) => sum + group.appCount, 0),
  }
}
