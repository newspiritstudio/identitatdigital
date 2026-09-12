import type {
  AlternativeLite,
  AppLite,
  CompanyLite,
  DataRow,
  DataTypeLite,
  RowStatus,
  Snapshot,
} from './types'

/**
 * El càlcul de la calculadora d'exposició.
 *
 * Tot el que hi ha aquí són funcions pures que s'executen al navegador: reben
 * la instantània i la llista d'aplicacions triades, i retornen nombres. No fan
 * cap petició, no llegeixen ni escriuen res i no depenen de React.
 *
 * Per què no es reutilitza `src/lib/analysis` tal com és: aquelles funcions
 * responen preguntes sobre el directori sencer —quantes fitxes del corpus
 * recullen ubicació precisa, quin grup n'acumula més— i el denominador hi és
 * sempre el corpus. Aquí el denominador és «les que has triat», que és una
 * pregunta diferent i que, a més, canvia a cada clic. El que sí que es respecta
 * és la seva manera de comptar: desconegut no és mai zero, i cap xifra surt
 * sense el seu denominador al costat.
 */

/* ──────────────────────────── ordre estable ──────────────────────────────── */

/** Mateixa comparació que el mòdul d'anàlisi: per punt de codi, no per locale. */
const compareText = (a: string, b: string): number => (a < b ? -1 : a > b ? 1 : 0)

/** Sí > només si s'activa > no > desconegut, per fusionar files repetides. */
const STATUS_RANK: Record<RowStatus, number> = { yes: 3, optional: 2, no: 1, unknown: 0 }

/* ──────────────────────────────── resultats ──────────────────────────────── */

export type DataTypeReach = DataTypeLite & {
  /** Aplicacions triades que la recullen sempre. */
  always: number
  /** Aplicacions triades que la recullen només si s'activa. */
  optional: number
  /** Suma de les dues anteriors: les que l'acaben tenint. */
  collectedBy: number
  /** Aplicacions triades que documenten que NO la recullen. */
  notCollected: number
  /** Aplicacions triades que la mencionen sense poder-ho respondre. */
  statusUnknown: number
  /** De les que la recullen, quantes la vinculen a la identitat. */
  linked: number
  linkedUnknown: number
  /** De les que la recullen, quantes l'usen per seguir la persona fora del servei. */
  tracking: number
  trackingUnknown: number
  /** Noms de les aplicacions triades que la recullen, per poder-les llistar. */
  apps: string[]
}

export type GroupReach = {
  company: CompanyLite
  /** Aplicacions triades que acaben en aquest grup. */
  apps: AppLite[]
  /** Empreses responsables diferents dins del grup, entre les triades. */
  companies: CompanyLite[]
  /** Tipus de dada diferents que li arriben sumant totes les seves aplicacions. */
  dataTypes: number
  /** D'aquests, quants són categoria especial de l'article 9. */
  specialDataTypes: number
  /** Tipus de dada que li arriben per més d'una de les aplicacions triades. */
  sharedAcrossApps: number
}

export type AlternativeOffer = {
  from: AppLite
  to: AlternativeLite
  /** Diferència de puntuació global. `null` si a alguna de les dues li'n falta. */
  delta: number | null
}

export type Unknowns = {
  /** Files de matriu de dades de les aplicacions triades. */
  rows: number
  /** Files que mencionen una dada sense poder dir si es recull. */
  status: number
  /** Files recollides on no sabem si queda vinculada a la identitat. */
  linkage: number
  /** Files recollides on no sabem si serveix per seguir la persona. */
  tracking: number
  /** Files recollides on no sabem amb qui es comparteix. */
  sharing: number
  /** Aplicacions triades sense cap fila de matriu de dades. */
  appsWithoutMatrix: number
  /** Indicadors de puntuació aplicables que no s'han pogut documentar. */
  indicators: number
  /** Proporció de caselles no documentades sobre les que es podrien documentar. */
  share: number
}

export type Exposure = {
  apps: AppLite[]
  /** Denominador de tota la pàgina: quantes n'has triat. */
  selected: number

  dataTypes: DataTypeReach[]
  /** Aplicacions triades que recullen alguna dada de l'article 9 del RGPD. */
  specialCategories: DataTypeReach[]

  /** Empreses responsables de les aplicacions triades. */
  controllers: CompanyLite[]
  /** Empreses amb nom que hi apareixen com a destinatàries i no són responsables. */
  recipients: CompanyLite[]
  /** Empreses diferents en total: responsables i destinatàries sense repetir. */
  namedCompanies: number
  /** Files cedides a tercers sense dir a qui. */
  rowsToUnnamedThirdParties: number
  /** Files cedides a intermediaris de dades sense dir a qui. */
  rowsToUnnamedBrokers: number
  /** Rastrejadors documentats a les fitxes triades sense empresa assignada. */
  unnamedTrackers: number

  groups: GroupReach[]
  /** Aplicacions triades que acaben en un grup compartit amb alguna altra. */
  appsInSharedGroups: number

  /** Fitxa triada amb la puntuació global més baixa. */
  weakest: AppLite | null
  /** Aplicacions triades sense puntuació global calculada. */
  appsWithoutScore: number
  /** Aplicacions triades amb la puntuació marcada com a provisional. */
  provisionalScores: number

  alternatives: AlternativeOffer[]
  /** Aplicacions triades sense cap alternativa documentada a la fitxa. */
  appsWithoutAlternatives: number

  unknowns: Unknowns
}

/* ──────────────────────────────── càlcul ─────────────────────────────────── */

const EMPTY_UNKNOWNS: Unknowns = {
  rows: 0,
  status: 0,
  linkage: 0,
  tracking: 0,
  sharing: 0,
  appsWithoutMatrix: 0,
  indicators: 0,
  share: 0,
}

export const emptyExposure = (): Exposure => ({
  apps: [],
  selected: 0,
  dataTypes: [],
  specialCategories: [],
  controllers: [],
  recipients: [],
  namedCompanies: 0,
  rowsToUnnamedThirdParties: 0,
  rowsToUnnamedBrokers: 0,
  unnamedTrackers: 0,
  groups: [],
  appsInSharedGroups: 0,
  weakest: null,
  appsWithoutScore: 0,
  provisionalScores: 0,
  alternatives: [],
  appsWithoutAlternatives: 0,
  unknowns: EMPTY_UNKNOWNS,
})

/**
 * Analitza una selecció d'aplicacions.
 *
 * Decisions que val la pena deixar escrites:
 *
 *  - «Es recull» inclou les dades opcionals. Una dada que la persona activa
 *    acaba igualment als servidors de qui la demana; el que canvia és qui ha
 *    pres la decisió, i això es diu a part en comptes de amagar-ho dins d'un
 *    sol recompte.
 *  - Les preguntes sobre vinculació a la identitat i sobre seguiment només es
 *    compten sobre les fitxes que recullen la dada. Preguntar si una dada que no
 *    es recull queda vinculada a la identitat no té resposta possible.
 *  - Un tipus de dada compta una vegada per aplicació encara que la fitxa el
 *    reculli en dues files. Si no, una fitxa detallada semblaria més invasiva
 *    que una de sumària només per estar més ben escrita.
 *  - No es calcula cap puntuació d'exposició global. Seria una xifra sense
 *    metodologia publicada, i el projecte no en té cap de no publicada.
 */
export const analyseSelection = (snapshot: Snapshot, selected: string[]): Exposure => {
  const chosen = new Set(selected)
  const apps = snapshot.apps.filter((app) => chosen.has(app.slug))
  if (apps.length === 0) return emptyExposure()

  type Accumulator = {
    always: number
    optional: number
    notCollected: number
    statusUnknown: number
    linked: number
    linkedUnknown: number
    tracking: number
    trackingUnknown: number
    apps: string[]
  }

  const reach = new Map<number, Accumulator>()
  const touch = (index: number): Accumulator => {
    let accumulator = reach.get(index)
    if (!accumulator) {
      accumulator = {
        always: 0,
        optional: 0,
        notCollected: 0,
        statusUnknown: 0,
        linked: 0,
        linkedUnknown: 0,
        tracking: 0,
        trackingUnknown: 0,
        apps: [],
      }
      reach.set(index, accumulator)
    }
    return accumulator
  }

  const unknowns: Unknowns = { ...EMPTY_UNKNOWNS }
  /* Files on la dada s'acaba recollint: són les úniques on té sentit preguntar
   * per la vinculació, el seguiment i el destinatari. */
  let collectedRows = 0
  let rowsToUnnamedThirdParties = 0
  let rowsToUnnamedBrokers = 0
  let unnamedTrackers = 0

  const controllers = new Map<string, CompanyLite>()
  const recipients = new Map<string, CompanyLite>()
  const groups = new Map<
    string,
    {
      company: CompanyLite
      apps: AppLite[]
      companies: Map<string, CompanyLite>
      dataTypes: Map<number, number>
    }
  >()

  for (const app of apps) {
    if (app.company.id.length > 0) controllers.set(app.company.id, app.company)
    for (const recipient of app.recipients) recipients.set(recipient.id, recipient)
    unnamedTrackers += app.unnamedTrackers
    unknowns.indicators += app.unknownIndicators

    const groupKey = app.group.id.length > 0 ? app.group.id : `sense-grup:${app.slug}`
    let group = groups.get(groupKey)
    if (!group) {
      group = { company: app.group, apps: [], companies: new Map(), dataTypes: new Map() }
      groups.set(groupKey, group)
    }
    group.apps.push(app)
    if (app.company.id.length > 0) group.companies.set(app.company.id, app.company)

    if (app.rows.length === 0) unknowns.appsWithoutMatrix += 1

    /* Fusió de files repetides dins d'una mateixa fitxa, amb el mateix criteri
     * que el mòdul d'anàlisi: es conserva la més afirmativa. Així cap recompte
     * per aplicació no pot superar el nombre d'aplicacions triades, que és el
     * denominador que es mostra al costat de cada xifra. */
    const merged = new Map<number, DataRow>()
    for (const row of app.rows) {
      const existing = merged.get(row[0])
      if (existing === undefined || STATUS_RANK[row[1]] > STATUS_RANK[existing[1]]) {
        merged.set(row[0], row)
      }
    }

    for (const [index, status, linkage, tracking, sharing] of merged.values()) {
      unknowns.rows += 1
      const accumulator = touch(index)

      if (status === 'no') {
        accumulator.notCollected += 1
        continue
      }
      if (status === 'unknown') {
        accumulator.statusUnknown += 1
        unknowns.status += 1
        continue
      }

      collectedRows += 1
      if (sharing === 'third-parties') rowsToUnnamedThirdParties += 1
      else if (sharing === 'brokers') rowsToUnnamedBrokers += 1
      else if (sharing === 'unknown') unknowns.sharing += 1

      if (linkage === 'unknown') unknowns.linkage += 1
      if (tracking === 'unknown') unknowns.tracking += 1

      if (status === 'yes') accumulator.always += 1
      else accumulator.optional += 1
      accumulator.apps.push(app.name)
      if (linkage === 'yes') accumulator.linked += 1
      else if (linkage === 'unknown') accumulator.linkedUnknown += 1
      if (tracking === 'yes') accumulator.tracking += 1
      else if (tracking === 'unknown') accumulator.trackingUnknown += 1

      group.dataTypes.set(index, (group.dataTypes.get(index) ?? 0) + 1)
    }
  }

  // Denominador honest per a l'avís de desconeguts: només les caselles que es
  // podrien haver documentat. Cada fila pregunta si la dada es recull; les que
  // es recullen en pregunten tres més (vinculació, seguiment i destinatari). Les
  // files on consta que la dada NO es recull no en pregunten cap més: no hi ha
  // res a vincular ni a cedir.
  const answerable = unknowns.rows + collectedRows * 3
  unknowns.share =
    answerable === 0
      ? 0
      : Math.round(
          ((unknowns.status + unknowns.linkage + unknowns.tracking + unknowns.sharing) /
            answerable) *
            1000,
        ) / 10

  const dataTypes: DataTypeReach[] = []
  for (const [index, accumulator] of reach) {
    const meta = snapshot.dataTypes[index]
    if (!meta) continue
    const collectedBy = accumulator.always + accumulator.optional
    if (collectedBy === 0 && accumulator.statusUnknown === 0) continue
    dataTypes.push({
      ...meta,
      always: accumulator.always,
      optional: accumulator.optional,
      collectedBy,
      notCollected: accumulator.notCollected,
      statusUnknown: accumulator.statusUnknown,
      linked: accumulator.linked,
      linkedUnknown: accumulator.linkedUnknown,
      tracking: accumulator.tracking,
      trackingUnknown: accumulator.trackingUnknown,
      apps: accumulator.apps.sort(compareText),
    })
  }

  // Sensibilitat primer i abast després, tal com demana la lectura: la dada que
  // més revela de tu encapçala la llista encara que només la reculli un servei.
  dataTypes.sort(
    (a, b) =>
      b.sensitivity - a.sensitivity || b.collectedBy - a.collectedBy || compareText(a.name, b.name),
  )

  const groupList: GroupReach[] = [...groups.values()]
    .map((group) => {
      let specialDataTypes = 0
      let sharedAcrossApps = 0
      for (const [index, count] of group.dataTypes) {
        if (snapshot.dataTypes[index]?.special === true) specialDataTypes += 1
        if (count > 1) sharedAcrossApps += 1
      }
      return {
        company: group.company,
        apps: [...group.apps].sort((a, b) => compareText(a.name, b.name)),
        companies: [...group.companies.values()].sort((a, b) => compareText(a.name, b.name)),
        dataTypes: group.dataTypes.size,
        specialDataTypes,
        sharedAcrossApps,
      }
    })
    .sort(
      (a, b) =>
        b.apps.length - a.apps.length ||
        b.dataTypes - a.dataTypes ||
        compareText(a.company.name, b.company.name),
    )

  // Les empreses que ja són responsables d'alguna aplicació triada no es
  // repeteixen a la llista de destinatàries: és la mateixa empresa.
  const recipientList = [...recipients.values()]
    .filter((company) => !controllers.has(company.id))
    .sort((a, b) => compareText(a.name, b.name))

  let weakest: AppLite | null = null
  let appsWithoutScore = 0
  let provisionalScores = 0
  for (const app of apps) {
    if (app.provisional) provisionalScores += 1
    if (app.overall === null) {
      appsWithoutScore += 1
      continue
    }
    if (
      weakest === null ||
      weakest.overall === null ||
      app.overall < weakest.overall ||
      (app.overall === weakest.overall && compareText(app.name, weakest.name) < 0)
    ) {
      weakest = app
    }
  }

  const alternatives: AlternativeOffer[] = []
  let appsWithoutAlternatives = 0
  for (const app of apps) {
    if (app.alternatives.length === 0) {
      appsWithoutAlternatives += 1
      continue
    }
    for (const alternative of app.alternatives) {
      alternatives.push({
        from: app,
        to: alternative,
        delta:
          app.overall !== null && alternative.overall !== null
            ? Math.round((alternative.overall - app.overall) * 10) / 10
            : null,
      })
    }
  }
  // Les que més diferència de puntuació ofereixen, primer. Les que no es poden
  // comparar perquè falta una puntuació van al final, però no desapareixen.
  alternatives.sort(
    (a, b) =>
      (b.delta ?? Number.NEGATIVE_INFINITY) - (a.delta ?? Number.NEGATIVE_INFINITY) ||
      compareText(a.from.name, b.from.name) ||
      compareText(a.to.name, b.to.name),
  )

  const namedCompanies = new Set<string>([...controllers.keys(), ...recipients.keys()]).size

  return {
    apps,
    selected: apps.length,
    dataTypes,
    specialCategories: dataTypes.filter((dataType) => dataType.special),
    controllers: [...controllers.values()].sort((a, b) => compareText(a.name, b.name)),
    recipients: recipientList,
    namedCompanies,
    rowsToUnnamedThirdParties,
    rowsToUnnamedBrokers,
    unnamedTrackers,
    groups: groupList,
    appsInSharedGroups: groupList
      .filter((group) => group.apps.length > 1)
      .reduce((sum, group) => sum + group.apps.length, 0),
    weakest,
    appsWithoutScore,
    provisionalScores,
    alternatives,
    appsWithoutAlternatives,
    unknowns,
  }
}

/* ─────────────────────────── utilitats de format ─────────────────────────── */

/**
 * Classe de color d'una puntuació.
 *
 * Repeteix els llindars de `src/app/(frontend)/lib.tsx` en comptes d'importar-la
 * perquè aquell mòdul arrossega Payload i `next/image` i no es pot carregar dins
 * d'un component de client. Són quatre línies i els llindars són els de la
 * metodologia publicada; si canvien, canvien als dos llocs.
 */
export const scoreClass = (value: number | null): string => {
  if (value === null) return 'unknown'
  if (value >= 70) return 'score score-good'
  if (value >= 45) return 'score score-mid'
  return 'score score-bad'
}

/** «7 de les 9 que has triat», mai «la majoria». */
export const outOf = (part: number, total: number): string =>
  `${part} de les ${total} que has triat`
