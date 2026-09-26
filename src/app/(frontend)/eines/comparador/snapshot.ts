import type { Payload } from 'payload'

import { EVIDENCE_LEVELS, type EvidenceLevel, type EvidenceStatus } from '@/fields/evidence'
import {
  DELETION_DIFFICULTY_LABELS,
  E2EE_SCOPES,
  E2EE_SCOPE_LABELS,
  EVIDENCE_LEVEL_LABELS,
  MFA_METHODS,
  MFA_METHOD_LABELS,
  at,
  compareText,
  factLevel,
  factSources,
  factStatus,
  loadCorpus,
  localizedText,
  relationId,
  relationIds,
  selectValue,
  type Corpus,
} from '@/lib/analysis'
import {
  DIMENSIONS,
  DIMENSION_LABELS,
  DIMENSION_WEIGHTS,
  INDICATORS,
  METHODOLOGY_VERSION,
  PROVISIONAL_CONFIDENCE_THRESHOLD,
  indicatorsFor,
} from '@/lib/scoring/methodology'
import { computeScores } from '@/lib/scoring/score'
import type { DataTypeMeta, IncidentLike } from '@/lib/scoring/types'
import type { App, Source } from '@/payload-types'

import {
  MAX_APPS,
  SLOT_PARAMS,
  type AlternativeSnapshot,
  type AppSnapshot,
  type CategorySnapshot,
  type CellState,
  type ComparatorSnapshot,
  type IndicatorCell,
  type InitialSelection,
  type SourceLink,
} from './types'

/**
 * Construcció de la instantània del comparador.
 *
 * Aquest mòdul no reimplementa res: llegeix el corpus amb `loadCorpus`, parla
 * el vocabulari d'indicadors de `@/lib/scoring/methodology` i reaprofita els
 * valors que ja va calcular `computeScores` en desar cada fitxa. L'única feina
 * pròpia és traduir tot això a caselles comparables i decidir quan dues fitxes
 * «diuen el mateix».
 */

/* ───────────────────── vocabulari visible a la taula ─────────────────────── */

/**
 * Etiquetes de les afirmacions.
 *
 * «No» i «Sense documentar» s'escriuen diferents des de la primera lletra. En
 * una taula densa, «No» i «No documentat» es confonen d'un cop d'ull.
 */
const CLAIM_LABELS: Record<EvidenceStatus, string> = {
  yes: 'Sí',
  partial: 'Parcialment',
  no: 'No',
  unknown: 'Sense documentar',
  na: 'No aplica',
}

const COMPARABILITY_LABELS: Record<AlternativeSnapshot['comparability'], string> = {
  equivalent: 'Cobreix la mateixa necessitat',
  partial: 'La cobreix parcialment',
  complementary: 'És complementària',
}

/* ─────────────── d'on surt cada indicador dins de la fitxa ───────────────── */

/**
 * Indicadors que surten directament d'una afirmació amb evidència.
 *
 * La llista és el mirall de `collectIndicators` a `@/lib/scoring/score`: si allà
 * canvia un camí, aquí la casella mostraria una afirmació que no és la que ha
 * puntuat. No es dedueix automàticament perquè no hi ha res d'on deduir-la; el
 * que sí que fem és comprovar al final que tota clau d'indicador de la
 * metodologia tingui casella.
 */
const FACT_PATHS: Record<string, string> = {
  'targeted-advertising': 'dataUses.targetedAdvertising',
  profiling: 'dataUses.profiling',
  'cross-app-tracking': 'tracking.crossAppTracking',
  'third-party-trackers': 'tracking.thirdPartyTrackersPresent',
  'third-party-sharing': 'sharing.thirdPartySharing',
  'intra-group-sharing': 'sharing.intraGroupSharing',
  'data-broker-sales': 'sharing.dataBrokerSales',
  'ai-training': 'dataUses.aiTraining',
  'retention-limits': 'retention.definedPeriods',
  'data-after-deletion': 'retention.dataAfterDeletion',
  e2ee: 'security.e2ee',
  'transport-encryption': 'security.transportEncryption',
  'at-rest-encryption': 'security.atRestEncryption',
  mfa: 'security.mfa',
  'independent-audits': 'security.independentAudits',
  'bug-bounty': 'security.bugBounty',
  'vulnerability-disclosure': 'security.vulnerabilityDisclosure',
  'open-source': 'openSource',
  'transparency-report': 'transparency.transparencyReport',
  'deletion-possible': 'accountDeletion.possible',
  'deletion-self-service': 'accountDeletion.selfService',
  'data-export': 'userRights.dataExport',
  'ads-optout': 'controls.adPersonalizationOptOut',
  'telemetry-optout': 'controls.telemetryOptOut',
  'granular-controls': 'controls.granularControls',
  'rights-exercise': 'userRights.rightsExercise',
  'dark-patterns': 'controls.darkPatterns',
  'no-account-required': 'accountRequired',
}

/** Indicadors que surten d'un camp de selecció amb vocabulari tancat. */
const SELECT_PATHS: Record<
  string,
  { path: string; labels: Record<string, string>; evidencePath?: string }
> = {
  'policy-clarity': {
    path: 'transparency.policyClarity',
    labels: {
      high: 'Alta: dades i finalitats concretes',
      medium: 'Mitjana: categories àmplies',
      low: 'Baixa: genèrica o dispersa',
    },
  },
  'privacy-by-default': {
    path: 'controls.defaultPosture',
    labels: {
      protective: 'Protectora',
      mixed: 'Mixta',
      permissive: 'Permissiva',
    },
  },
  'export-formats': {
    path: 'userRights.exportFormatQuality',
    labels: {
      open: 'Obert i llegible per màquina',
      mixed: 'Mixt',
      proprietary: 'Propietari o poc reutilitzable',
    },
    evidencePath: 'userRights.dataExport',
  },
  'deletion-difficulty': {
    path: 'accountDeletion.difficulty',
    labels: { ...DELETION_DIFFICULTY_LABELS },
    evidencePath: 'accountDeletion.possible',
  },
}

/**
 * Indicadors calculats que, tot i no tenir afirmació pròpia, poden heretar el
 * nivell d'evidència d'una afirmació relacionada, tal com fa el càlcul.
 */
const COMPUTED_EVIDENCE_PATHS: Record<string, string> = {
  'deletion-direct-url': 'accountDeletion.possible',
  'deletion-waiting': 'accountDeletion.possible',
}

/** Indicadors que llegeixen la matriu de dades sencera. */
const DATA_MATRIX_INDICATORS = new Set(['data-volume', 'data-sensitivity', 'identity-linkage'])

/* ──────────────────────── resultats per indicador ────────────────────────── */

type OutcomeLite = {
  value: number | null
  applicable: boolean
  evidenceLevel: EvidenceLevel
  note: string | null
}

type KeyedOutcome = OutcomeLite & { key: string }

const asLevel = (value: unknown): EvidenceLevel => selectValue(value, EVIDENCE_LEVELS) ?? 'unknown'

/**
 * Llegeix el detall per indicador que la fitxa ja porta desat.
 *
 * Les puntuacions es calculen en desar i queden emmagatzemades amb el seu
 * desglossament. Fer servir aquest desglossament, i no recalcular-lo aquí, és
 * el que garanteix que el comparador ensenyi exactament els mateixos números
 * que la fitxa i que el rànquing. Si el desglossament falta o està incomplet
 * —una fitxa desada abans d'un canvi de metodologia—, recalculem, que és
 * preferible a mostrar una taula amb forats.
 */
const outcomesOf = (app: App, recompute: () => KeyedOutcome[]): Map<string, OutcomeLite> => {
  const stored = at(app, 'scores.breakdown.indicators')
  const map = new Map<string, OutcomeLite>()

  if (Array.isArray(stored)) {
    for (const entry of stored) {
      const key = at(entry, 'key')
      if (typeof key !== 'string') continue
      const value = at(entry, 'value')
      const note = at(entry, 'note')
      map.set(key, {
        value: typeof value === 'number' ? value : null,
        applicable: at(entry, 'applicable') !== false,
        evidenceLevel: asLevel(at(entry, 'evidenceLevel')),
        note: typeof note === 'string' && note.length > 0 ? note : null,
      })
    }
  }

  if (INDICATORS.every((indicator) => map.has(indicator.key))) return map

  map.clear()
  for (const outcome of recompute()) map.set(outcome.key, outcome)
  return map
}

const recomputeOutcomes = (
  app: App,
  dataTypes: Map<string, DataTypeMeta>,
  incidents: IncidentLike[],
): KeyedOutcome[] =>
  computeScores(app, { dataTypes, incidents }).indicators.map((indicator) => ({
    key: indicator.key,
    value: indicator.value,
    applicable: indicator.applicable,
    evidenceLevel: indicator.evidenceLevel,
    note: indicator.note ?? null,
  }))

/* ─────────────────────────── caselles de la taula ────────────────────────── */

/** Valor de l'indicador a l'escala 0–100 de la metodologia. */
const toScale = (value: number | null): number | null =>
  value === null ? null : Math.round(value * 100)

/**
 * Tram de deu punts al qual pertany un valor.
 *
 * La comparació entre fitxes es fa per trams i no per valor exacte a propòsit:
 * dos serveis que puntuen 63 i 64 en minimització de dades no diuen coses
 * diferents, diuen la mateixa cosa amb decimals diferents, i marcar-ho com una
 * diferència real ompliria la taula de soroll. El valor exacte continua visible
 * a cada casella perquè qui vulgui el detall el tingui.
 */
const band = (value: number | null): string =>
  value === null ? 'x' : String(Math.round(value / 10))

const sourcesOfDataMatrix = (app: App): string[] => {
  const rows = Array.isArray(app.dataCollection) ? app.dataCollection : []
  const ids = new Set<string>()
  for (const row of rows) for (const id of relationIds(at(row, 'sources'))) ids.add(id)
  return [...ids]
}

/**
 * Sensibilitat màxima i categories especials entre les dades que es recullen.
 *
 * El càlcul només deixa nota quan hi ha categories de l'article 9, però el
 * valor de l'indicador també depèn de la sensibilitat màxima. Sense aquesta
 * xifra, dues fitxes amb el mateix text i valors de 0 i de 67 semblarien una
 * incoherència, i no ho són.
 */
const sensitivityProfile = (
  app: App,
  dataTypes: Map<string, DataTypeMeta> | undefined,
): { max: number; special: number } | null => {
  if (!dataTypes) return null
  const rows = Array.isArray(app.dataCollection) ? app.dataCollection : []
  let max = 0
  let special = 0
  let seen = 0
  for (const row of rows) {
    const status = at(row, 'status')
    if (status !== 'yes' && status !== 'optional') continue
    const meta = dataTypes.get(relationId(at(row, 'dataType')) ?? '')
    if (!meta) continue
    seen += 1
    max = Math.max(max, meta.sensitivity)
    if (meta.specialCategory) special += 1
  }
  return seen === 0 ? null : { max, special }
}

/** Text de l'afirmació d'una casella calculada, amb el seu denominador. */
const computedClaim = (
  key: string,
  app: App,
  outcome: OutcomeLite,
  dataTypes?: Map<string, DataTypeMeta>,
): string => {
  if (key === 'deletion-direct-url') {
    const url = at(app, 'accountDeletion.directUrl')
    if (outcome.value === null) return CLAIM_LABELS.unknown
    return typeof url === 'string' && url.length > 0
      ? 'Sí, hi ha una adreça directa'
      : 'No n’hi ha cap de documentada'
  }
  if (outcome.value === null) {
    if (key === 'incident-history') return 'Historial d’incidents encara no revisat'
    return CLAIM_LABELS.unknown
  }
  if (key === 'deletion-waiting') {
    const days = at(app, 'accountDeletion.waitingPeriodDays')
    if (typeof days === 'number') {
      return days === 0 ? 'Supressió immediata, sense espera' : `${days} dies d’espera`
    }
  }
  if (key === 'data-sensitivity') {
    const profile = sensitivityProfile(app, dataTypes)
    const special =
      profile && profile.special > 0
        ? `${profile.special} categoria/es especials de l’article 9`
        : 'cap categoria especial de l’article 9'
    if (profile) return `Sensibilitat màxima ${profile.max} sobre 5; ${special}`
    return outcome.note ?? `Sensibilitat de les dades recollides: ${special}`
  }
  return outcome.note ?? `${toScale(outcome.value)} sobre 100`
}

/** Matisos que la metodologia fa servir per puntuar i que la taula ha de dir. */
const factNuance = (key: string, app: App): string | null => {
  if (key === 'e2ee') {
    const scope = selectValue(at(app, 'security.e2ee.scope'), E2EE_SCOPES)
    return scope ? E2EE_SCOPE_LABELS[scope] : null
  }
  if (key === 'mfa') {
    const raw = at(app, 'security.mfa.methods')
    const labels: string[] = []
    if (Array.isArray(raw)) {
      for (const candidate of raw) {
        const method = selectValue(candidate, MFA_METHODS)
        if (method) labels.push(MFA_METHOD_LABELS[method])
      }
    }
    return labels.length > 0 ? labels.join(', ') : null
  }
  return null
}

/**
 * Casella de la taula: una fitxa, un indicador.
 *
 * És la unitat que decideix tota la resta —què s'ensenya, com es marca i quan
 * dues fitxes diuen coses diferents— i per això s'exporta: ha de poder-se
 * comprovar i mesurar amb una fitxa a la mà, sense muntar mitja pàgina.
 */
export const buildCell = (
  key: string,
  app: App,
  outcome: OutcomeLite,
  dataTypes?: Map<string, DataTypeMeta>,
): IndicatorCell => {
  const value = toScale(outcome.value)
  const factPath = FACT_PATHS[key]
  const select = SELECT_PATHS[key]

  let kind: IndicatorCell['kind'] = 'computed'
  let state: CellState = 'graded'
  let claim = ''
  let evidencePath: string | undefined
  let sourceIds: string[] = []
  let note = outcome.note
  let detail: string | null = null

  if (factPath) {
    kind = 'fact'
    evidencePath = factPath
    const fact = at(app, factPath)
    const status = factStatus(fact)
    state = status
    // «Ús sense compte» és l'únic indicador que inverteix l'afirmació que
    // llegeix: el camp diu si cal un compte i l'etiqueta diu si se'n pot
    // prescindir. Ensenyar-hi un «Sí» cru voldria dir el contrari del que diu
    // la fitxa.
    if (key === 'no-account-required') {
      claim =
        status === 'yes'
          ? 'No, cal un compte'
          : status === 'no'
            ? 'Sí, es pot fer servir sense compte'
            : CLAIM_LABELS[status]
      // La marca visual ha de seguir l'etiqueta, no el camp: si no s'invertís,
      // una fitxa que exigeix compte sortiria amb la marca d'afirmació positiva.
      state = status === 'yes' ? 'no' : status === 'no' ? 'yes' : status
    } else {
      claim = CLAIM_LABELS[status]
    }
    // El càlcul desa l'abast del xifratge i els mètodes de segon factor en
    // brut («metadata-excluded», «totp, sms»). A la taula hi ha d'anar
    // l'etiqueta publicada, no la clau interna.
    const nuance = factNuance(key, app)
    if (nuance) note = nuance
    detail = localizedText(at(fact, 'detail'))
    sourceIds = factSources(fact)
  } else if (select) {
    kind = 'select'
    evidencePath = select.evidencePath
    const raw = at(app, select.path)
    const label = typeof raw === 'string' ? select.labels[raw] : undefined
    if (label) {
      claim = label
      state = 'graded'
    } else if (key === 'export-formats' && factStatus(at(app, 'userRights.dataExport')) === 'no') {
      // Sense exportació no hi ha format: la casella ha de dir això i no
      // «sense documentar», perquè el zero de l'indicador sí que està documentat.
      claim = 'No hi ha exportació de dades'
      state = 'no'
    } else {
      claim = CLAIM_LABELS.unknown
      state = 'unknown'
    }
    if (evidencePath) {
      const fact = at(app, evidencePath)
      detail = localizedText(at(fact, 'detail'))
      sourceIds = factSources(fact)
    }
  } else {
    kind = 'computed'
    evidencePath = COMPUTED_EVIDENCE_PATHS[key]
    claim = computedClaim(key, app, outcome, dataTypes)
    state = outcome.value === null ? 'unknown' : 'graded'
    if (DATA_MATRIX_INDICATORS.has(key)) {
      sourceIds = sourcesOfDataMatrix(app)
    } else if (evidencePath) {
      const fact = at(app, evidencePath)
      sourceIds = factSources(fact)
    }
    // Quan l'afirmació ja incorpora la nota del càlcul —o la reescriu amb més
    // context— repetir-la a sota només afegeix soroll.
    if (note === claim || key === 'deletion-waiting' || key === 'data-sensitivity') note = null
  }

  if (!outcome.applicable) state = 'na'

  const evidenceLevel =
    outcome.evidenceLevel !== 'unknown'
      ? outcome.evidenceLevel
      : evidencePath
        ? factLevel(at(app, evidencePath))
        : 'unknown'

  return {
    kind,
    state,
    claim,
    value,
    applicable: outcome.applicable,
    evidenceLevel,
    evidenceLabel: EVIDENCE_LEVEL_LABELS[evidenceLevel],
    detail,
    note,
    sourceIds,
    answer: outcome.applicable ? `${state}:${band(value)}` : 'na',
  }
}

/** Casella de reserva per si mai falta un indicador al desglossament. */
const missingCell = (): IndicatorCell => ({
  kind: 'computed',
  state: 'unknown',
  claim: CLAIM_LABELS.unknown,
  value: null,
  applicable: true,
  evidenceLevel: 'unknown',
  evidenceLabel: EVIDENCE_LEVEL_LABELS.unknown,
  detail: null,
  note: null,
  sourceIds: [],
  answer: 'unknown:x',
})

/* ──────────────────────────── alternatives ───────────────────────────────── */

const alternativesOf = (app: App, corpus: Corpus): AlternativeSnapshot[] => {
  const rows = Array.isArray(app.alternatives) ? app.alternatives : []
  const out: AlternativeSnapshot[] = []

  for (const row of rows) {
    const targetId = relationId(at(row, 'app'))
    const target = targetId ? corpus.appById.get(targetId) : undefined
    const rawComparability = at(row, 'comparability')
    const comparability: AlternativeSnapshot['comparability'] =
      rawComparability === 'equivalent' || rawComparability === 'complementary'
        ? rawComparability
        : 'partial'
    const rationale = localizedText(at(row, 'rationale'))
    if (!rationale) continue

    const overall = target ? at(target, 'scores.overall') : null
    const confidence = target ? at(target, 'scores.confidence') : null

    out.push({
      slug: target && typeof target.slug === 'string' ? target.slug : null,
      name: target
        ? (localizedText(target.name) ?? 'Fitxa sense nom')
        : 'Fitxa encara no publicada',
      comparability,
      comparabilityLabel: COMPARABILITY_LABELS[comparability],
      rationale,
      tradeOffs: localizedText(at(row, 'tradeOffs')),
      overall: typeof overall === 'number' ? overall : null,
      confidence: typeof confidence === 'number' ? confidence : null,
      inCorpus: Boolean(target),
    })
  }

  return out
}

/* ───────────────────────────── instantània ───────────────────────────────── */

export const buildComparatorSnapshot = async (payload: Payload): Promise<ComparatorSnapshot> => {
  const corpus = await loadCorpus(payload)

  // Les fonts no formen part del corpus i les necessitem per poder enllaçar
  // l'evidència de cada casella. Es carreguen un cop i s'indexen per
  // identificador: una mateixa política de privadesa sustenta desenes
  // d'afirmacions i seria absurd repetir-la a cada casella.
  const sourceById = new Map<string, SourceLink>()
  try {
    const found = await payload.find({
      collection: 'sources',
      depth: 0,
      limit: 0,
      pagination: false,
      overrideAccess: true,
    })
    for (const source of found.docs as Source[]) {
      const id = relationId(source)
      if (!id) continue
      sourceById.set(id, {
        id,
        publisher: typeof source.publisher === 'string' ? source.publisher : 'Font',
        title: localizedText(source.title) ?? 'Document',
        url: typeof source.url === 'string' ? source.url : '',
      })
    }
  } catch {
    // Sense fonts el comparador continua sent útil: cada casella mostrarà
    // l'afirmació i el nivell d'evidència, i només perdrà l'enllaç.
  }

  const dataTypeMeta = new Map<string, DataTypeMeta>()
  for (const dataType of corpus.dataTypes) {
    const id = relationId(dataType)
    if (!id) continue
    dataTypeMeta.set(id, {
      sensitivity: typeof dataType.sensitivity === 'number' ? dataType.sensitivity : 3,
      specialCategory: Boolean(dataType.specialCategory),
      family: typeof dataType.family === 'string' ? dataType.family : undefined,
    })
  }

  const incidentsByApp = new Map<string, IncidentLike[]>()
  for (const incident of corpus.incidents) {
    const entry: IncidentLike = {
      occurredAt: typeof incident.occurredAt === 'string' ? incident.occurredAt : null,
      severity: typeof incident.severity === 'string' ? incident.severity : null,
      type: typeof incident.type === 'string' ? incident.type : null,
    }
    for (const appId of relationIds(at(incident, 'apps'))) {
      const list = incidentsByApp.get(appId)
      if (list) list.push(entry)
      else incidentsByApp.set(appId, [entry])
    }
  }

  /* Categories: només serveixen per comparar si hi ha amb qui comparar. */
  const appsByCategory = new Map<string, string[]>()
  for (const app of corpus.apps) {
    const appId = relationId(app)
    if (!appId) continue
    for (const categoryId of relationIds(at(app, 'categories'))) {
      const list = appsByCategory.get(categoryId)
      if (list) list.push(appId)
      else appsByCategory.set(categoryId, [appId])
    }
  }

  const categories: CategorySnapshot[] = []
  const comparableAppIds = new Set<string>()
  for (const category of corpus.categories) {
    const categoryId = relationId(category)
    if (!categoryId) continue
    const appIds = appsByCategory.get(categoryId) ?? []
    if (appIds.length < 2) continue
    const functionalNeed = localizedText(at(category, 'functionalNeed'))
    categories.push({
      id: categoryId,
      slug: typeof category.slug === 'string' ? category.slug : categoryId,
      name: localizedText(category.name) ?? '(categoria sense nom)',
      functionalNeed: functionalNeed ?? 'Aquesta categoria encara no té la necessitat descrita.',
      privacyContext: localizedText(at(category, 'privacyContext')),
      appIds,
    })
    for (const appId of appIds) comparableAppIds.add(appId)
  }
  categories.sort((a, b) => compareText(a.name, b.name) || compareText(a.slug, b.slug))

  /* Fitxes. */
  const usedSourceIds = new Set<string>()
  const apps: AppSnapshot[] = []

  for (const app of corpus.apps) {
    const appId = relationId(app)
    if (!appId || !comparableAppIds.has(appId)) continue

    const outcomes = outcomesOf(app, () =>
      recomputeOutcomes(app, dataTypeMeta, incidentsByApp.get(appId) ?? []),
    )

    const cells: Record<string, IndicatorCell> = {}
    for (const indicator of INDICATORS) {
      const outcome = outcomes.get(indicator.key)
      const cell = outcome ? buildCell(indicator.key, app, outcome, dataTypeMeta) : missingCell()
      for (const sourceId of cell.sourceIds) {
        if (sourceById.has(sourceId)) usedSourceIds.add(sourceId)
      }
      cell.sourceIds = cell.sourceIds.filter((sourceId) => sourceById.has(sourceId))
      cells[indicator.key] = cell
    }

    const companyId = relationId(at(app, 'company'))
    const company = companyId ? corpus.companyById.get(companyId) : undefined
    const scores = at(app, 'scores')
    const numberAt = (key: string): number | null => {
      const value = at(scores, key)
      return typeof value === 'number' ? value : null
    }
    const methodologyVersion = at(scores, 'methodologyVersion')

    apps.push({
      id: appId,
      slug: typeof app.slug === 'string' ? app.slug : appId,
      name: localizedText(app.name) ?? '(sense nom)',
      tagline: localizedText(at(app, 'tagline')) ?? '',
      company: company ? localizedText(company.name) : null,
      categoryIds: relationIds(at(app, 'categories')),
      scores: {
        privacy: numberAt('privacy'),
        security: numberAt('security'),
        agency: numberAt('agency'),
        overall: numberAt('overall'),
        confidence: numberAt('confidence'),
        coverage: numberAt('coverage'),
        provisional: at(scores, 'provisional') === true,
        methodologyVersion: typeof methodologyVersion === 'string' ? methodologyVersion : null,
      },
      cells,
      alternatives: alternativesOf(app, corpus),
    })
  }

  apps.sort((a, b) => compareText(a.name, b.name) || compareText(a.slug, b.slug))

  const sources: Record<string, SourceLink> = {}
  for (const sourceId of usedSourceIds) {
    const source = sourceById.get(sourceId)
    if (source) sources[sourceId] = source
  }

  const dimensions = DIMENSIONS.map((dimension) => ({
    key: dimension,
    label: DIMENSION_LABELS[dimension],
    weight: Math.round(DIMENSION_WEIGHTS[dimension] * 100),
    indicators: indicatorsFor(dimension).map((indicator) => ({
      key: indicator.key,
      label: indicator.label,
      description: indicator.description,
      weight: indicator.weight,
    })),
  }))

  return {
    methodologyVersion: METHODOLOGY_VERSION,
    categories,
    apps,
    dimensions,
    sources,
    indicatorCount: INDICATORS.length,
    // Quinze punts de confiança és, a la pràctica, la distància entre una fitxa
    // revisada en profunditat i una que encara té apartats sencers per mirar.
    // A partir d'aquí comparar les puntuacions com si fossin equivalents
    // enganya, i l'eina ho ha de dir abans que ningú es faci una idea.
    confidenceGapThreshold: 15,
    provisionalThreshold: PROVISIONAL_CONFIDENCE_THRESHOLD,
    appsOutsideComparison: corpus.apps.length - apps.length,
  }
}

/* ──────────────────── selecció que arriba per l'URL ──────────────────────── */

const firstParam = (value: string | string[] | undefined): string | null => {
  if (Array.isArray(value)) return value.length > 0 ? value[0] : null
  return typeof value === 'string' && value.length > 0 ? value : null
}

/**
 * Tradueix els paràmetres de consulta en una selecció vàlida.
 *
 * Es resol al servidor perquè la primera pantalla que veu qui obre un enllaç
 * compartit ja sigui la comparació, sense un instant de pàgina buida. Les
 * regles són tres: només fitxes que existeixen, com a màxim tres, i totes de la
 * mateixa categoria. L'última no és una comoditat tècnica: comparar fitxes que
 * no cobreixen la mateixa necessitat és precisament el que l'eina no ha de
 * deixar fer, encara que algú ho escrigui a mà a la barra d'adreces.
 */
export const resolveSelection = (
  snapshot: ComparatorSnapshot,
  params: Record<string, string | string[] | undefined>,
): InitialSelection => {
  const appBySlug = new Map(snapshot.apps.map((app) => [app.slug, app]))
  const requested: AppSnapshot[] = []
  for (const slot of SLOT_PARAMS) {
    const slug = firstParam(params[slot])
    if (!slug) continue
    const app = appBySlug.get(slug)
    if (app && !requested.some((entry) => entry.id === app.id)) requested.push(app)
  }

  const requestedCategory = firstParam(params.cat)
  const byCategorySlug = new Map(snapshot.categories.map((category) => [category.slug, category]))

  let candidate: CategorySnapshot | null = requestedCategory
    ? (byCategorySlug.get(requestedCategory) ?? null)
    : null

  if (requested.length > 0) {
    // Si la categoria demanada no conté les fitxes demanades, mana la que
    // comparteixen les fitxes: l'enllaç s'ha escrit pensant en elles.
    const asked = candidate
    const holdsAll = asked !== null && requested.every((app) => app.categoryIds.includes(asked.id))
    if (!holdsAll) {
      candidate =
        snapshot.categories.find((entry) =>
          requested.every((app) => app.categoryIds.includes(entry.id)),
        ) ??
        snapshot.categories.find((entry) => requested[0].categoryIds.includes(entry.id)) ??
        null
    }
  }

  const category = candidate
  const selected = category
    ? requested.filter((app) => app.categoryIds.includes(category.id)).slice(0, MAX_APPS)
    : []

  return {
    categorySlug: category ? category.slug : null,
    appSlugs: selected.map((app) => app.slug),
  }
}
