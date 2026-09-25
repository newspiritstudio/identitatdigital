import {
  at,
  compareText,
  localizedText,
  parseUserBase,
  relationId,
  relationIds,
  ultimateParentId,
  type Corpus,
} from '@/lib/analysis'
import { registrableDomain } from '@/lib/breaches/domains'

import type {
  AlternativeLite,
  AppDetails,
  AppLite,
  BreachLite,
  CategoryLite,
  CompanyLite,
  Comparability,
  ControlKey,
  ControlsLite,
  DataRow,
  DataTypeLite,
  DeletionLite,
  DetailsBundle,
  Difficulty,
  E2eeScope,
  FactLite,
  FactStatus,
  IncidentLite,
  MfaMethod,
  RowStatus,
  SharedWith,
  Snapshot,
  Ternary,
  WeakIndicator,
} from './types'

/**
 * Construcció de la instantània que es baixa el navegador.
 *
 * S'executa només al servidor. Rep el corpus sencer i en deixa el mínim que la
 * calculadora necessita: si l'eina no ho calcula ni ho mostra, no viatja. Fora
 * queden els resums editorials, les fonts, les polítiques, els indicadors de
 * seguretat un per un, els incidents i els logotips.
 *
 * El càlcul viu al navegador, així que les relacions ja venen resoltes
 * (l'empresa amb nom, la matriu última amb nom, l'alternativa amb la seva
 * puntuació) i el client no ha de recórrer cap graf.
 */

const ROW_STATUSES: readonly RowStatus[] = ['yes', 'optional', 'no', 'unknown']
const TERNARIES: readonly Ternary[] = ['yes', 'no', 'unknown']
const SHARED_WITHS: readonly SharedWith[] = ['none', 'group', 'third-parties', 'brokers', 'unknown']
const COMPARABILITIES: readonly Comparability[] = ['equivalent', 'partial', 'complementary']

const oneOf = <T extends string>(value: unknown, allowed: readonly T[], fallback: T): T =>
  typeof value === 'string' && (allowed as readonly string[]).includes(value)
    ? (value as T)
    : fallback

const text = (value: unknown): string | null => {
  const resolved = localizedText(value)
  return resolved !== null && resolved.trim().length > 0 ? resolved : null
}

const numberOrNull = (value: unknown): number | null =>
  typeof value === 'number' && Number.isFinite(value) ? value : null

/**
 * Indicadors que més estiren la puntuació d'una fitxa cap avall.
 *
 * `scores.breakdown` és un camp JSON i, per tant, el sistema de tipus no en
 * garanteix res: es llegeix amb totes les comprovacions fetes a mà i, si no hi
 * és o té una forma inesperada, es retorna una llista buida. Una fitxa sense
 * detall d'indicadors ha de poder sortir igualment a l'eina.
 *
 * Criteri de selecció: només indicadors aplicables i documentats, amb valor per
 * sota de 0,5 —és a dir, els que realment fan baixar la nota— ordenats pel que
 * aporten a la caiguda, que és el pes multiplicat pel que els falta per arribar
 * a 1. Es conserven els cinc primers: n'hi ha prou per explicar el motiu i
 * evita arrossegar la metodologia sencera fins al navegador.
 *
 * Els indicadors aplicables sense evidència es compten a part i NO es presenten
 * com a punts febles: un indicador desconegut no puntua ni amunt ni avall.
 */
const readWeakIndicators = (breakdown: unknown): { weak: WeakIndicator[]; unknown: number } => {
  const raw = at(breakdown, 'indicators')
  if (!Array.isArray(raw)) return { weak: [], unknown: 0 }

  const weak: WeakIndicator[] = []
  let unknownCount = 0

  for (const indicator of raw) {
    if (at(indicator, 'applicable') === false) continue
    const value = numberOrNull(at(indicator, 'value'))
    if (value === null) {
      unknownCount += 1
      continue
    }
    if (value >= 0.5) continue
    const key = at(indicator, 'key')
    const label = at(indicator, 'label')
    const dimension = at(indicator, 'dimension')
    weak.push({
      key: typeof key === 'string' ? key : '',
      label: typeof label === 'string' ? label : '(indicador sense etiqueta)',
      dimension: typeof dimension === 'string' ? dimension : '',
      value,
      weight: numberOrNull(at(indicator, 'weight')) ?? 0,
    })
  }

  weak.sort(
    (a, b) =>
      b.weight * (1 - b.value) - a.weight * (1 - a.value) ||
      a.value - b.value ||
      compareText(a.label, b.label),
  )

  return { weak: weak.slice(0, 5), unknown: unknownCount }
}


const FACT_STATUSES: readonly FactStatus[] = ['yes', 'partial', 'no', 'unknown', 'na']
const MFA_METHODS: readonly MfaMethod[] = ['passkey', 'hardware-key', 'totp', 'app-push', 'email', 'sms']
const E2EE_SCOPES: readonly E2eeScope[] = [
  'all-default',
  'all-optin',
  'partial-default',
  'partial-optin',
  'metadata-excluded',
  'none',
]
const DIFFICULTIES: readonly Difficulty[] = ['easy', 'medium', 'hard', 'impossible', 'unknown']
const SEVERITIES: readonly IncidentLite['severity'][] = ['low', 'medium', 'high', 'critical']
const POSTURES: readonly ControlsLite['defaultPosture'][] = [
  'protective',
  'balanced',
  'permissive',
  'unknown',
]

/** Nombre d'aplicacions que surten a la tria ràpida. */
const POPULAR_COUNT = 24

/**
 * Només adreces web absolutes i segures. Els enllaços de les fitxes els escriu
 * la redacció, però l'eina els converteix en botons d'acció i un `javascript:`
 * o una adreça relativa mal escrita no hi poden arribar.
 */
const safeUrl = (value: unknown): string | null => {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  if (!/^https?:\/\//i.test(trimmed)) return null
  try {
    return new URL(trimmed).toString()
  } catch {
    return null
  }
}

const fact = (source: unknown, urlKeys: string[] = ['url'], fallbackUrl: unknown = null): FactLite => {
  let url: string | null = null
  for (const key of urlKeys) {
    url = safeUrl(at(source, key))
    if (url !== null) break
  }
  return {
    status: oneOf(at(source, 'status'), FACT_STATUSES, 'unknown'),
    url: url ?? safeUrl(fallbackUrl),
  }
}

const isoDay = (value: unknown): string | null => {
  if (typeof value !== 'string' || value.length < 10) return null
  const day = value.slice(0, 10)
  return /^\d{4}-\d{2}-\d{2}$/.test(day) ? day : null
}

const readControls = (app: unknown): ControlsLite => {
  const methodsRaw = at(app, 'security.mfa.methods')
  const methods = Array.isArray(methodsRaw)
    ? MFA_METHODS.filter((method) => methodsRaw.includes(method))
    : []
  const scope = at(app, 'security.e2ee.scope')
  const darkPatterns = at(app, 'controls.darkPatternList')
  return {
    mfa: { ...fact(at(app, 'security.mfa'), [], at(app, 'links.security')), methods },
    e2ee: {
      ...fact(at(app, 'security.e2ee')),
      scope: typeof scope === 'string' && (E2EE_SCOPES as readonly string[]).includes(scope)
        ? (scope as E2eeScope)
        : null,
    },
    targetedAdvertising: fact(at(app, 'dataUses.targetedAdvertising'), ['optOutUrl', 'url']),
    adOptOut: fact(at(app, 'controls.adPersonalizationOptOut'), ['url'], at(app, 'links.adSettings')),
    aiTraining: fact(at(app, 'dataUses.aiTraining'), ['optOutUrl', 'url']),
    telemetryOptOut: fact(at(app, 'controls.telemetryOptOut')),
    dataExport: fact(at(app, 'userRights.dataExport'), ['url'], at(app, 'links.dataExport')),
    rightsRequest:
      safeUrl(at(app, 'userRights.rightsExercise.url')) ?? safeUrl(at(app, 'links.rightsRequest')),
    privacyCenter: safeUrl(at(app, 'links.privacyCenter')),
    severeDarkPatterns: Array.isArray(darkPatterns)
      ? darkPatterns.filter((entry) => at(entry, 'severity') === 'high').length
      : 0,
    defaultPosture: oneOf(at(app, 'controls.defaultPosture'), POSTURES, 'unknown'),
  }
}

const readDeletion = (app: unknown): DeletionLite => ({
  possible: oneOf(at(app, 'accountDeletion.possible.status'), FACT_STATUSES, 'unknown'),
  selfService: oneOf(at(app, 'accountDeletion.selfService.status'), FACT_STATUSES, 'unknown'),
  url: safeUrl(at(app, 'links.deleteAccount')) ?? safeUrl(at(app, 'accountDeletion.directUrl')),
  difficulty: oneOf(at(app, 'accountDeletion.difficulty'), DIFFICULTIES, 'unknown'),
  waitingPeriodDays: numberOrNull(at(app, 'accountDeletion.waitingPeriodDays')),
  requiresSupportContact: at(app, 'accountDeletion.requiresSupportContact') === true,
})

const DETAIL_PATHS: Record<ControlKey, string> = {
  mfa: 'security.mfa.detail',
  e2ee: 'security.e2ee.detail',
  targetedAdvertising: 'dataUses.targetedAdvertising.detail',
  adOptOut: 'controls.adPersonalizationOptOut.detail',
  aiTraining: 'dataUses.aiTraining.detail',
  telemetryOptOut: 'controls.telemetryOptOut.detail',
  dataExport: 'userRights.dataExport.detail',
}

/**
 * Textos editorials del pla d'acció, per a totes les fitxes publicades.
 *
 * Es serveixen a part (vegeu `detalls/route.ts`) i sencers: si la pàgina en
 * demanés només els de les aplicacions triades, la petició delataria la tria.
 */
export const buildDetails = (corpus: Corpus): DetailsBundle => {
  const bundle: DetailsBundle = {}
  for (const app of corpus.apps) {
    if (typeof app.slug !== 'string' || app.slug.length === 0) continue
    const controls: AppDetails['controls'] = {}
    for (const [key, path] of Object.entries(DETAIL_PATHS) as [ControlKey, string][]) {
      const value = text(at(app, path))
      if (value !== null) controls[key] = value
    }
    const stepsRaw = at(app, 'accountDeletion.steps')
    const deletionSteps: string[] = []
    if (Array.isArray(stepsRaw)) {
      for (const entry of stepsRaw) {
        const step = text(at(entry, 'step'))
        if (step !== null) deletionSteps.push(step)
      }
    }
    bundle[app.slug] = {
      controls,
      deletionSteps,
      deletionObstacles: text(at(app, 'accountDeletion.obstacles')),
      deletionDataRetained: text(at(app, 'accountDeletion.dataRetained')),
    }
  }
  return bundle
}

export const buildSnapshot = (corpus: Corpus): Snapshot => {
  /* Catàleg de tipus de dada, retallat als que alguna fitxa publicada menciona.
   * Els que no menciona ningú són informació sobre la nostra feina —i per això
   * surten a l'anàlisi del directori— però aquí no poden aparèixer mai a cap
   * resultat, de manera que viatjarien per res. Cal una primera passada per
   * saber quins són, perquè les files de la matriu hi apunten per índex i els
   * índexs s'han d'assignar abans de recórrer les fitxes. */
  const mentioned = new Set<string>()
  for (const app of corpus.apps) {
    const rows = Array.isArray(app.dataCollection) ? app.dataCollection : []
    for (const row of rows) {
      const id = relationId(at(row, 'dataType'))
      if (id !== null) mentioned.add(id)
    }
  }
  // Les filtracions també apunten al catàleg, i el diagnòstic en diu quines
  // dades van quedar exposades.
  for (const breach of corpus.breaches) {
    for (const id of relationIds(breach.dataTypes)) mentioned.add(id)
  }

  const dataTypes: DataTypeLite[] = []
  const dataTypeIndex = new Map<string, number>()
  for (const dataType of corpus.dataTypes) {
    const id = relationId(dataType)
    if (id === null || !mentioned.has(id)) continue
    dataTypeIndex.set(id, dataTypes.length)
    dataTypes.push({
      slug: typeof dataType.slug === 'string' ? dataType.slug : '',
      name: text(dataType.name) ?? '(tipus de dada sense nom)',
      sensitivity: typeof dataType.sensitivity === 'number' ? dataType.sensitivity : 0,
      special: dataType.specialCategory === true,
    })
  }

  const categories: CategoryLite[] = []
  const categoryIndex = new Map<string, number>()
  for (const category of corpus.categories) {
    const id = relationId(category)
    if (id === null) continue
    categoryIndex.set(id, categories.length)
    categories.push({
      slug: typeof category.slug === 'string' ? category.slug : '',
      name: text(category.name) ?? '(categoria sense nom)',
    })
  }

  const companyLite = (companyId: string | null): CompanyLite => {
    const company = companyId !== null ? corpus.companyById.get(companyId) : undefined
    if (!company || companyId === null) {
      return { id: '', name: '(empresa no documentada)', slug: '' }
    }
    return {
      id: companyId,
      name: text(company.name) ?? '(empresa sense nom)',
      slug: typeof company.slug === 'string' ? company.slug : '',
    }
  }

  /* Puntuació global per identificador de fitxa: la necessiten les alternatives
   * per poder dir quina diferència hi ha, i cal tenir-les totes resoltes abans
   * de recórrer les fitxes una per una. */
  const overallById = new Map<string, number | null>()
  for (const app of corpus.apps) {
    const id = relationId(app)
    if (id !== null) overallById.set(id, numberOrNull(at(app, 'scores.overall')))
  }

  /* Filtracions del catàleg de HIBP. Es lliguen a una fitxa per tres camins, de
   * més a menys cert: la relació editorial amb l'aplicació, la relació amb
   * l'empresa responsable i, si no n'hi ha cap, el domini del servei. Les
   * marcades com a fabricades o com a llistes de correu brossa no són
   * filtracions del servei i no hi entren. */
  const breaches: BreachLite[] = []
  const breachesByApp = new Map<string, number[]>()
  const breachesByCompany = new Map<string, number[]>()
  const breachesByDomain = new Map<string, number[]>()
  const push = (map: Map<string, number[]>, key: string, index: number) => {
    const list = map.get(key)
    if (list) list.push(index)
    else map.set(key, [index])
  }
  for (const breach of corpus.breaches) {
    if (breach.isFabricated === true || breach.isSpamList === true) continue
    const typeIndices: number[] = []
    for (const id of relationIds(breach.dataTypes)) {
      const index = dataTypeIndex.get(id)
      if (index !== undefined && !typeIndices.includes(index)) typeIndices.push(index)
    }
    const classes = Array.isArray(breach.dataClasses)
      ? breach.dataClasses
          .map((entry) => (typeof entry?.value === 'string' ? entry.value : ''))
          .filter((value) => value.length > 0)
      : []
    const unmapped = Array.isArray(breach.unmappedDataClasses)
      ? breach.unmappedDataClasses
          .map((entry) => (typeof entry?.value === 'string' ? entry.value : ''))
          .filter((value) => value.length > 0)
      : []
    const index = breaches.length
    breaches.push({
      name: breach.name,
      title: breach.title,
      domain: typeof breach.domain === 'string' && breach.domain.length > 0 ? breach.domain : null,
      date: isoDay(breach.breachDate),
      pwnCount: numberOrNull(breach.pwnCount),
      dataTypes: typeIndices,
      otherClasses: unmapped,
      passwords: classes.some((value) => /password|pins?$/i.test(value)),
      verified: breach.isVerified !== false,
      sensitive: breach.isSensitive === true,
    })
    for (const appId of relationIds(breach.apps)) push(breachesByApp, appId, index)
    const companyId = relationId(breach.company)
    if (companyId !== null) push(breachesByCompany, companyId, index)
    const domain = registrableDomain(breach.domain)
    if (domain !== null) push(breachesByDomain, domain, index)
  }

  const incidents: IncidentLite[] = []
  const incidentsByApp = new Map<string, number[]>()
  const incidentsByCompany = new Map<string, number[]>()
  for (const incident of corpus.incidents) {
    const slug = typeof incident.slug === 'string' ? incident.slug : ''
    const fine = numberOrNull(at(incident, 'regulatory.fineAmountEur'))
    const index = incidents.length
    incidents.push({
      slug,
      title: text(incident.title) ?? '(incident sense títol)',
      type: typeof incident.type === 'string' ? incident.type : 'other',
      severity: oneOf(incident.severity, SEVERITIES, 'medium'),
      date: isoDay(incident.occurredAt) ?? isoDay(incident.disclosedAt),
      fine:
        fine !== null && fine > 0
          ? `${new Intl.NumberFormat('ca-ES', { maximumFractionDigits: 0 }).format(fine)} €`
          : null,
    })
    const appIds = relationIds(incident.apps)
    for (const appId of appIds) push(incidentsByApp, appId, index)
    const companyId = relationId(incident.company)
    // Un incident d'empresa sense aplicacions concretes afecta totes les seves.
    if (appIds.length === 0 && companyId !== null) push(incidentsByCompany, companyId, index)
  }

  /* Tria ràpida: les fitxes amb més persones usuàries declarades. */
  const popularIds = new Set(
    corpus.apps
      .map((app) => ({ id: relationId(app), users: parseUserBase(app.userBase) }))
      .filter((entry): entry is { id: string; users: number } => entry.id !== null && entry.users !== null)
      .sort((a, b) => b.users - a.users)
      .slice(0, POPULAR_COUNT)
      .map((entry) => entry.id),
  )

  let unresolvedAlternatives = 0
  const apps: AppLite[] = []

  for (const app of corpus.apps) {
    const companyId = relationId(app.company)
    const company = companyLite(companyId)
    const groupId =
      companyId !== null && corpus.companyById.has(companyId)
        ? ultimateParentId(companyId, corpus.companyById)
        : null
    const group = companyLite(groupId)

    /* Matriu de dades. Les files que apunten a un tipus de dada que no és al
     * catàleg es descarten: sense metadades no es poden ordenar per
     * sensibilitat ni dir si són categoria especial, i inventar-les seria pitjor
     * que no mostrar-les. */
    const rows: DataRow[] = []
    const rawRows = Array.isArray(app.dataCollection) ? app.dataCollection : []
    for (const row of rawRows) {
      const dataTypeId = relationId(at(row, 'dataType'))
      if (dataTypeId === null) continue
      const index = dataTypeIndex.get(dataTypeId)
      if (index === undefined) continue
      rows.push([
        index,
        oneOf(at(row, 'status'), ROW_STATUSES, 'unknown'),
        oneOf(at(row, 'linkedToIdentity'), TERNARIES, 'unknown'),
        oneOf(at(row, 'usedForTracking'), TERNARIES, 'unknown'),
        oneOf(at(row, 'sharedWith'), SHARED_WITHS, 'unknown'),
      ])
    }

    /* Destinataris amb nom. Al model, l'únic lloc on un destinatari té identitat
     * és el rastrejador de tercers amb empresa assignada: les cessions «a
     * tercers» i «a intermediaris de dades» de la matriu no diuen mai a qui. La
     * calculadora manté aquesta distinció perquè és la diferència entre una
     * empresa que podem anomenar i un forat de documentació. */
    const recipients: CompanyLite[] = []
    const seenRecipients = new Set<string>()
    let unnamedTrackers = 0
    const trackers = at(app, 'tracking.thirdPartyTrackers')
    if (Array.isArray(trackers)) {
      for (const tracker of trackers) {
        const trackerCompanyId = relationId(at(tracker, 'company'))
        if (trackerCompanyId === null || !corpus.companyById.has(trackerCompanyId)) {
          unnamedTrackers += 1
          continue
        }
        if (seenRecipients.has(trackerCompanyId)) continue
        seenRecipients.add(trackerCompanyId)
        recipients.push(companyLite(trackerCompanyId))
      }
    }

    const alternatives: AlternativeLite[] = []
    const rawAlternatives = Array.isArray(app.alternatives) ? app.alternatives : []
    for (const alternative of rawAlternatives) {
      const targetId = relationId(at(alternative, 'app'))
      const target = targetId !== null ? corpus.appById.get(targetId) : undefined
      if (!target) {
        // La fitxa de destí no és publicada (o ja no existeix). No la
        // mencionem: no hi hauria on enllaçar ni cap puntuació a comparar.
        unresolvedAlternatives += 1
        continue
      }
      const rationale = text(at(alternative, 'rationale'))
      alternatives.push({
        slug: typeof target.slug === 'string' ? target.slug : '',
        name: text(target.name) ?? '(sense nom)',
        overall: overallById.get(targetId ?? '') ?? null,
        comparability: oneOf(at(alternative, 'comparability'), COMPARABILITIES, 'partial'),
        rationale: rationale ?? '',
        tradeOffs: text(at(alternative, 'tradeOffs')),
      })
    }

    const { weak, unknown } = readWeakIndicators(at(app, 'scores.breakdown'))

    const categoryIndices: number[] = []
    const rawCategories = Array.isArray(app.categories) ? app.categories : []
    for (const category of rawCategories) {
      const id = relationId(category)
      if (id === null) continue
      const index = categoryIndex.get(id)
      if (index !== undefined && !categoryIndices.includes(index)) categoryIndices.push(index)
    }

    const appId = relationId(app) ?? ''
    const breachLinks: AppLite['breaches'] = []
    const linked = new Set<number>()
    for (const index of [
      ...(breachesByApp.get(appId) ?? []),
      ...(companyId !== null ? (breachesByCompany.get(companyId) ?? []) : []),
    ]) {
      if (linked.has(index)) continue
      linked.add(index)
      breachLinks.push({ index, match: 'editorial' })
    }
    const website = registrableDomain(
      typeof at(app, 'links.website') === 'string' ? (at(app, 'links.website') as string) : null,
    )
    if (website !== null) {
      for (const index of breachesByDomain.get(website) ?? []) {
        if (linked.has(index)) continue
        linked.add(index)
        breachLinks.push({ index, match: 'domain' })
      }
    }
    breachLinks.sort((a, b) =>
      compareText(breaches[b.index]?.date ?? '', breaches[a.index]?.date ?? ''),
    )

    const incidentIndices = [
      ...new Set([
        ...(incidentsByApp.get(appId) ?? []),
        ...(companyId !== null ? (incidentsByCompany.get(companyId) ?? []) : []),
      ]),
    ].sort((a, b) => compareText(incidents[b]?.date ?? '', incidents[a]?.date ?? ''))

    apps.push({
      categorySlugs: categoryIndices.map((index) => categories[index]?.slug ?? '').filter(Boolean),
      popular: popularIds.has(appId),
      controls: readControls(app),
      deletion: readDeletion(app),
      breaches: breachLinks,
      incidents: incidentIndices,
      dataBrokerSales: oneOf(at(app, 'sharing.dataBrokerSales.status'), FACT_STATUSES, 'unknown'),
      slug: typeof app.slug === 'string' ? app.slug : '',
      name: text(app.name) ?? '(sense nom)',
      categories: categoryIndices,
      company,
      group,
      overall: numberOrNull(at(app, 'scores.overall')),
      confidence: numberOrNull(at(app, 'scores.confidence')),
      provisional: at(app, 'scores.provisional') === true,
      weakIndicators: weak,
      unknownIndicators: unknown,
      rows,
      recipients,
      unnamedTrackers,
      alternatives,
    })
  }

  apps.sort((a, b) => compareText(a.name, b.name) || compareText(a.slug, b.slug))

  /* Només viatgen les filtracions i els incidents que alguna fitxa fa servir:
   * la resta del catàleg (un miler de filtracions) no sortiria mai a cap
   * resultat. Els índexs es renumeren en conseqüència. */
  const breachRemap = new Map<number, number>()
  const usedBreaches: BreachLite[] = []
  const incidentRemap = new Map<number, number>()
  const usedIncidents: IncidentLite[] = []
  for (const app of apps) {
    app.breaches = app.breaches.map((link) => {
      let next = breachRemap.get(link.index)
      if (next === undefined) {
        next = usedBreaches.length
        breachRemap.set(link.index, next)
        usedBreaches.push(breaches[link.index])
      }
      return { ...link, index: next }
    })
    app.incidents = app.incidents.map((index) => {
      let next = incidentRemap.get(index)
      if (next === undefined) {
        next = usedIncidents.length
        incidentRemap.set(index, next)
        usedIncidents.push(incidents[index])
      }
      return next
    })
  }

  return {
    apps,
    dataTypes,
    categories,
    publishedApps: corpus.apps.length,
    unresolvedAlternatives,
    breaches: usedBreaches,
    incidents: usedIncidents,
    breachCatalogSize: corpus.breaches.length,
  }
}
