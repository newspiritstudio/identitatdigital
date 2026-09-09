import { EVIDENCE_LEVEL_QUALITY, type EvidenceLevel } from '@/fields/evidence'
import {
  CONFIDENCE_WEIGHTS,
  DATA_VOLUME_CAP,
  DIMENSIONS,
  DIMENSION_WEIGHTS,
  INDICATORS_BY_KEY,
  METHODOLOGY_VERSION,
  PROVISIONAL_CONFIDENCE_THRESHOLD,
  type Dimension,
} from './methodology'
import type {
  DataCollectionRow,
  FactLike,
  IndicatorOutcome,
  ScoreResult,
  ScoringContext,
} from './types'

/* ────────────────────────────── utilitats ────────────────────────────────── */

const relationId = (value: unknown): string | null => {
  if (!value) return null
  if (typeof value === 'string') return value
  if (typeof value === 'object' && value !== null) {
    const candidate = (value as { id?: unknown }).id
    if (typeof candidate === 'string') return candidate
    if (typeof candidate === 'number') return String(candidate)
  }
  if (typeof value === 'number') return String(value)
  return null
}

const level = (fact: FactLike): EvidenceLevel => {
  const raw = fact?.evidenceLevel
  if (typeof raw === 'string' && raw in EVIDENCE_LEVEL_QUALITY) return raw as EvidenceLevel
  return 'unknown'
}

const clamp01 = (value: number) => Math.min(1, Math.max(0, value))

/**
 * Converteix una afirmació amb evidència en un valor 0–1.
 *
 * `unknown` retorna `null` (l'indicador surt del numerador i del denominador de
 * la puntuació, però compta com a no cobert a la confiança) i `na` retorna
 * `applicable: false` (surt de tot, també de la confiança).
 */
const fromFact = (
  key: string,
  fact: FactLike,
  mapping: Record<string, number>,
): IndicatorOutcome => {
  const spec = INDICATORS_BY_KEY.get(key)
  if (!spec) throw new Error(`Indicador desconegut: ${key}`)
  const status = typeof fact?.status === 'string' ? fact.status : 'unknown'
  const base = {
    key,
    label: spec.label,
    dimension: spec.dimension,
    weight: spec.weight,
    evidenceLevel: level(fact),
  }
  if (status === 'na') return { ...base, value: null, applicable: false }
  if (status === 'unknown' || !(status in mapping)) {
    return { ...base, value: null, applicable: true }
  }
  return { ...base, value: clamp01(mapping[status]), applicable: true }
}

/** Indicador calculat a mà, sense provenir directament d'un `evidencedFact`. */
const custom = (
  key: string,
  value: number | null,
  applicable: boolean,
  evidenceLevel: EvidenceLevel,
  note?: string,
): IndicatorOutcome => {
  const spec = INDICATORS_BY_KEY.get(key)
  if (!spec) throw new Error(`Indicador desconegut: ${key}`)
  return {
    key,
    label: spec.label,
    dimension: spec.dimension,
    weight: spec.weight,
    value: value === null ? null : clamp01(value),
    applicable,
    evidenceLevel,
    note,
  }
}

/** Polaritats habituals. */
const GOOD_IF_YES = { yes: 1, partial: 0.6, no: 0 }
const GOOD_IF_NO = { yes: 0, partial: 0.4, no: 1 }

/**
 * Lectura per camí dins de la fitxa. Torna `FactLike` per defecte perquè és el
 * que llegeix la immensa majoria d'indicadors; els que llegeixen un valor
 * simple ho indiquen amb el paràmetre de tipus.
 */
const get = <T = FactLike>(source: unknown, path: string): T =>
  path.split('.').reduce<unknown>((acc, key) => {
    if (acc === null || acc === undefined) return undefined
    return (acc as Record<string, unknown>)[key]
  }, source) as T

/* ──────────────────────── indicadors calculats ───────────────────────────── */

const dataRows = (app: unknown): DataCollectionRow[] => {
  const rows = get(app, 'dataCollection')
  return Array.isArray(rows) ? (rows as DataCollectionRow[]) : []
}

/**
 * Minimització: la suma de sensibilitats de les dades recollides es normalitza
 * contra un sostre. Les dades marcades com a opcionals pesen la meitat, perquè
 * la persona pot decidir no aportar-les.
 */
const dataVolumeIndicator = (app: unknown, ctx: ScoringContext): IndicatorOutcome => {
  const rows = dataRows(app)
  const scored = rows.filter((row) => row.status === 'yes' || row.status === 'optional')
  if (rows.length === 0) return custom('data-volume', null, true, 'unknown')

  let total = 0
  for (const row of scored) {
    const meta = ctx.dataTypes.get(relationId(row.dataType) ?? '')
    const sensitivity = meta?.sensitivity ?? 3
    total += row.status === 'optional' ? sensitivity / 2 : sensitivity
  }
  const value = 1 - Math.min(1, total / DATA_VOLUME_CAP)
  const evidenceLevel = bestLevel(rows.map((row) => (row.evidenceLevel as EvidenceLevel) ?? 'unknown'))
  return custom(
    'data-volume',
    value,
    true,
    evidenceLevel,
    `Sensibilitat acumulada ${total.toFixed(1)} sobre un sostre de ${DATA_VOLUME_CAP}.`,
  )
}

const dataSensitivityIndicator = (app: unknown, ctx: ScoringContext): IndicatorOutcome => {
  const rows = dataRows(app).filter((row) => row.status === 'yes' || row.status === 'optional')
  if (dataRows(app).length === 0) return custom('data-sensitivity', null, true, 'unknown')

  let maxSensitivity = 0
  let specialCount = 0
  for (const row of rows) {
    const meta = ctx.dataTypes.get(relationId(row.dataType) ?? '')
    if (!meta) continue
    maxSensitivity = Math.max(maxSensitivity, meta.sensitivity)
    if (meta.specialCategory) specialCount += 1
  }
  // Sense dades sensibles el valor és 1; cada categoria especial resta.
  const base = 1 - Math.max(0, maxSensitivity - 2) / 3
  const value = base - specialCount * 0.15
  return custom(
    'data-sensitivity',
    value,
    true,
    bestLevel(rows.map((row) => (row.evidenceLevel as EvidenceLevel) ?? 'unknown')),
    specialCount > 0
      ? `${specialCount} categoria/es especials de l’article 9 entre les dades recollides.`
      : undefined,
  )
}

const identityLinkageIndicator = (app: unknown): IndicatorOutcome => {
  const rows = dataRows(app).filter((row) => row.status === 'yes' || row.status === 'optional')
  const known = rows.filter((row) => row.linkedToIdentity && row.linkedToIdentity !== 'unknown')
  if (known.length === 0) return custom('identity-linkage', null, true, 'unknown')
  const linked = known.filter((row) => row.linkedToIdentity === 'yes').length
  return custom(
    'identity-linkage',
    1 - linked / known.length,
    true,
    bestLevel(known.map((row) => (row.evidenceLevel as EvidenceLevel) ?? 'unknown')),
    `${linked} de ${known.length} tipus de dada documentats queden vinculats a la identitat.`,
  )
}

const bestLevel = (levels: EvidenceLevel[]): EvidenceLevel => {
  let best: EvidenceLevel = 'unknown'
  let bestQuality = -1
  for (const candidate of levels) {
    const quality = EVIDENCE_LEVEL_QUALITY[candidate] ?? 0
    if (quality > bestQuality) {
      bestQuality = quality
      best = candidate
    }
  }
  return best
}

const E2EE_SCOPE_VALUES: Record<string, number> = {
  'all-default': 1,
  'all-optin': 0.5,
  'partial-default': 0.65,
  'partial-optin': 0.35,
  'metadata-excluded': 0.8,
  none: 0,
}

const e2eeIndicator = (app: unknown): IndicatorOutcome => {
  const fact = get(app, 'security.e2ee') as FactLike
  const status = typeof fact?.status === 'string' ? fact.status : 'unknown'
  if (status === 'na') return custom('e2ee', null, false, level(fact))
  if (status === 'unknown') return custom('e2ee', null, true, level(fact))
  if (status === 'no') return custom('e2ee', 0, true, level(fact))
  const scope = typeof fact?.scope === 'string' ? fact.scope : null
  const value = scope && scope in E2EE_SCOPE_VALUES ? E2EE_SCOPE_VALUES[scope] : status === 'yes' ? 0.8 : 0.5
  return custom('e2ee', value, true, level(fact), scope ?? undefined)
}

const MFA_METHOD_VALUES: Record<string, number> = {
  passkey: 1,
  'hardware-key': 1,
  totp: 0.8,
  'app-push': 0.7,
  email: 0.5,
  sms: 0.4,
}

const mfaIndicator = (app: unknown): IndicatorOutcome => {
  const fact = get(app, 'security.mfa') as FactLike
  const status = typeof fact?.status === 'string' ? fact.status : 'unknown'
  if (status === 'na') return custom('mfa', null, false, level(fact))
  if (status === 'unknown') return custom('mfa', null, true, level(fact))
  if (status === 'no') return custom('mfa', 0, true, level(fact))
  const methods = Array.isArray(fact?.methods) ? (fact.methods as string[]) : []
  if (methods.length === 0) return custom('mfa', status === 'yes' ? 0.6 : 0.4, true, level(fact))
  const best = Math.max(...methods.map((method) => MFA_METHOD_VALUES[method] ?? 0.4))
  return custom('mfa', best, true, level(fact), methods.join(', '))
}

const SEVERITY_PENALTY: Record<string, number> = {
  low: 0.05,
  medium: 0.12,
  high: 0.25,
  critical: 0.4,
}

/**
 * Historial d'incidents: cada incident resta segons gravetat, i el pes decau
 * amb el temps. Un incident de fa cinc anys ja no diu gaire de l'estat actual.
 */
const incidentIndicator = (app: unknown, ctx: ScoringContext): IndicatorOutcome => {
  const reviewed = get(app, 'review.incidentsReviewed')
  if (!reviewed) return custom('incident-history', null, true, 'unknown')
  const now = ctx.now ?? new Date()
  let penalty = 0
  for (const incident of ctx.incidents) {
    const severity = SEVERITY_PENALTY[incident.severity ?? 'medium'] ?? 0.12
    const occurred = incident.occurredAt ? new Date(incident.occurredAt) : null
    const years = occurred ? (now.getTime() - occurred.getTime()) / (365.25 * 24 * 3600 * 1000) : 0
    const decay = years <= 2 ? 1 : years <= 5 ? 0.6 : 0.25
    penalty += severity * decay
  }
  return custom(
    'incident-history',
    1 - penalty,
    true,
    ctx.incidents.length > 0 ? 'regulator' : 'editorial',
    `${ctx.incidents.length} incident(s) documentat(s).`,
  )
}

const OPEN_SOURCE_VALUES: Record<string, number> = {
  yes: 1,
  partial: 0.55,
  no: 0.2,
}

const DIFFICULTY_VALUES: Record<string, number> = {
  easy: 1,
  medium: 0.6,
  hard: 0.25,
  impossible: 0,
}

const CLARITY_VALUES: Record<string, number> = {
  high: 1,
  medium: 0.6,
  low: 0.2,
}

const DEFAULT_POSTURE_VALUES: Record<string, number> = {
  protective: 1,
  mixed: 0.5,
  permissive: 0,
}

const EXPORT_FORMAT_VALUES: Record<string, number> = {
  open: 1,
  mixed: 0.6,
  proprietary: 0.3,
}

const deletionUrlIndicator = (app: unknown): IndicatorOutcome => {
  const possible = get(app, 'accountDeletion.possible') as FactLike
  const status = typeof possible?.status === 'string' ? possible.status : 'unknown'
  if (status === 'unknown') return custom('deletion-direct-url', null, true, level(possible))
  const url = get(app, 'accountDeletion.directUrl')
  return custom('deletion-direct-url', url ? 1 : 0.35, true, level(possible))
}

const deletionDifficultyIndicator = (app: unknown): IndicatorOutcome => {
  const difficulty = get(app, 'accountDeletion.difficulty')
  if (typeof difficulty !== 'string' || !(difficulty in DIFFICULTY_VALUES)) {
    return custom('deletion-difficulty', null, true, 'unknown')
  }
  return custom(
    'deletion-difficulty',
    DIFFICULTY_VALUES[difficulty],
    true,
    level(get(app, 'accountDeletion.possible') as FactLike),
  )
}

const deletionWaitingIndicator = (app: unknown): IndicatorOutcome => {
  const days = get(app, 'accountDeletion.waitingPeriodDays')
  if (typeof days !== 'number') return custom('deletion-waiting', null, true, 'unknown')
  const value = days <= 7 ? 1 : days <= 30 ? 0.75 : days <= 90 ? 0.45 : 0.2
  return custom(
    'deletion-waiting',
    value,
    true,
    level(get(app, 'accountDeletion.possible') as FactLike),
    `${days} dies.`,
  )
}

const selectIndicator = (
  key: string,
  app: unknown,
  path: string,
  values: Record<string, number>,
  evidencePath?: string,
): IndicatorOutcome => {
  const raw = get(app, path)
  const evidence = evidencePath ? (get(app, evidencePath) as FactLike) : null
  if (typeof raw !== 'string' || !(raw in values)) return custom(key, null, true, 'unknown')
  return custom(key, values[raw], true, evidence ? level(evidence) : 'editorial')
}

/**
 * Patrons enganyosos: l'absència d'evidència no és evidència d'absència, així
 * que cal una afirmació explícita. La llista documentada només modula el valor.
 */
const darkPatternsIndicator = (app: unknown): IndicatorOutcome => {
  const fact = get(app, 'controls.darkPatterns') as FactLike
  const status = typeof fact?.status === 'string' ? fact.status : 'unknown'
  if (status === 'unknown') return custom('dark-patterns', null, true, level(fact))
  if (status === 'no') return custom('dark-patterns', 1, true, level(fact))
  const documented = get(app, 'controls.darkPatternList')
  const count = Array.isArray(documented) ? documented.length : 0
  const severe = Array.isArray(documented)
    ? documented.filter((item: { severity?: string }) => item?.severity === 'high').length
    : 0
  const value = Math.max(0, (status === 'partial' ? 0.6 : 0.45) - count * 0.08 - severe * 0.08)
  return custom('dark-patterns', value, true, level(fact), `${count} patró/ns documentat(s).`)
}

const exportFormatIndicator = (app: unknown): IndicatorOutcome => {
  const exportFact = get(app, 'userRights.dataExport') as FactLike
  const status = typeof exportFact?.status === 'string' ? exportFact.status : 'unknown'
  if (status === 'unknown') return custom('export-formats', null, true, level(exportFact))
  if (status === 'no') return custom('export-formats', 0, true, level(exportFact))
  const quality = get(app, 'userRights.exportFormatQuality')
  if (typeof quality !== 'string' || !(quality in EXPORT_FORMAT_VALUES)) {
    return custom('export-formats', null, true, level(exportFact))
  }
  return custom('export-formats', EXPORT_FORMAT_VALUES[quality], true, level(exportFact))
}

/* ─────────────────────────── càlcul principal ────────────────────────────── */

const collectIndicators = (app: unknown, ctx: ScoringContext): IndicatorOutcome[] => [
  // Privadesa
  dataVolumeIndicator(app, ctx),
  dataSensitivityIndicator(app, ctx),
  identityLinkageIndicator(app),
  fromFact('targeted-advertising', get(app, 'dataUses.targetedAdvertising'), GOOD_IF_NO),
  fromFact('profiling', get(app, 'dataUses.profiling'), GOOD_IF_NO),
  fromFact('cross-app-tracking', get(app, 'tracking.crossAppTracking'), GOOD_IF_NO),
  fromFact('third-party-trackers', get(app, 'tracking.thirdPartyTrackersPresent'), GOOD_IF_NO),
  fromFact('third-party-sharing', get(app, 'sharing.thirdPartySharing'), GOOD_IF_NO),
  fromFact('intra-group-sharing', get(app, 'sharing.intraGroupSharing'), GOOD_IF_NO),
  fromFact('data-broker-sales', get(app, 'sharing.dataBrokerSales'), GOOD_IF_NO),
  fromFact('ai-training', get(app, 'dataUses.aiTraining'), GOOD_IF_NO),
  fromFact('retention-limits', get(app, 'retention.definedPeriods'), GOOD_IF_YES),
  fromFact('data-after-deletion', get(app, 'retention.dataAfterDeletion'), GOOD_IF_NO),
  selectIndicator('policy-clarity', app, 'transparency.policyClarity', CLARITY_VALUES),

  // Seguretat
  e2eeIndicator(app),
  fromFact('transport-encryption', get(app, 'security.transportEncryption'), GOOD_IF_YES),
  fromFact('at-rest-encryption', get(app, 'security.atRestEncryption'), GOOD_IF_YES),
  mfaIndicator(app),
  fromFact('independent-audits', get(app, 'security.independentAudits'), GOOD_IF_YES),
  fromFact('bug-bounty', get(app, 'security.bugBounty'), GOOD_IF_YES),
  fromFact('vulnerability-disclosure', get(app, 'security.vulnerabilityDisclosure'), GOOD_IF_YES),
  fromFact('open-source', get(app, 'openSource'), OPEN_SOURCE_VALUES),
  fromFact('transparency-report', get(app, 'transparency.transparencyReport'), GOOD_IF_YES),
  incidentIndicator(app, ctx),

  // Control
  fromFact('deletion-possible', get(app, 'accountDeletion.possible'), GOOD_IF_YES),
  fromFact('deletion-self-service', get(app, 'accountDeletion.selfService'), GOOD_IF_YES),
  deletionUrlIndicator(app),
  deletionDifficultyIndicator(app),
  deletionWaitingIndicator(app),
  fromFact('data-export', get(app, 'userRights.dataExport'), GOOD_IF_YES),
  exportFormatIndicator(app),
  fromFact('ads-optout', get(app, 'controls.adPersonalizationOptOut'), GOOD_IF_YES),
  fromFact('telemetry-optout', get(app, 'controls.telemetryOptOut'), GOOD_IF_YES),
  fromFact('granular-controls', get(app, 'controls.granularControls'), GOOD_IF_YES),
  selectIndicator('privacy-by-default', app, 'controls.defaultPosture', DEFAULT_POSTURE_VALUES),
  fromFact('rights-exercise', get(app, 'userRights.rightsExercise'), GOOD_IF_YES),
  darkPatternsIndicator(app),
  fromFact('no-account-required', get(app, 'accountRequired'), GOOD_IF_NO),
]

const recencyFactor = (app: unknown, indicators: IndicatorOutcome[], now: Date): number => {
  const dates: number[] = []
  const walk = (value: unknown, depth = 0) => {
    if (depth > 4 || !value || typeof value !== 'object') return
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      if (key === 'verifiedAt' && typeof child === 'string') {
        const parsed = Date.parse(child)
        if (!Number.isNaN(parsed)) dates.push(parsed)
      } else if (child && typeof child === 'object') {
        walk(child, depth + 1)
      }
    }
  }
  walk(app)
  const reviewed = get(app, 'review.lastReviewedAt')
  if (typeof reviewed === 'string') {
    const parsed = Date.parse(reviewed)
    if (!Number.isNaN(parsed)) dates.push(parsed)
  }
  if (dates.length === 0 || indicators.length === 0) return 0.4
  const median = dates.sort((a, b) => a - b)[Math.floor(dates.length / 2)]
  const months = (now.getTime() - median) / (30.44 * 24 * 3600 * 1000)
  if (months <= 6) return 1
  if (months <= 12) return 0.85
  if (months <= 24) return 0.6
  return 0.4
}

export const computeScores = (app: unknown, ctx: ScoringContext): ScoreResult => {
  const now = ctx.now ?? new Date()
  const indicators = collectIndicators(app, ctx)

  const dimensions = DIMENSIONS.map((dimension) => {
    const relevant = indicators.filter((i) => i.dimension === dimension && i.applicable)
    const known = relevant.filter((i) => i.value !== null)
    const applicableWeight = relevant.reduce((sum, i) => sum + i.weight, 0)
    const knownWeight = known.reduce((sum, i) => sum + i.weight, 0)
    const score =
      knownWeight === 0
        ? null
        : Math.round(
            (known.reduce((sum, i) => sum + i.weight * (i.value as number), 0) / knownWeight) * 100,
          )
    return { dimension: dimension as Dimension, score, knownWeight, applicableWeight }
  })

  const scoreOf = (dimension: Dimension) =>
    dimensions.find((d) => d.dimension === dimension)?.score ?? null

  const scoredDimensions = dimensions.filter((d) => d.score !== null)
  const overallWeight = scoredDimensions.reduce(
    (sum, d) => sum + DIMENSION_WEIGHTS[d.dimension],
    0,
  )
  const overall =
    overallWeight === 0
      ? null
      : Math.round(
          scoredDimensions.reduce(
            (sum, d) => sum + DIMENSION_WEIGHTS[d.dimension] * (d.score as number),
            0,
          ) / overallWeight,
        )

  const applicable = indicators.filter((i) => i.applicable)
  const known = applicable.filter((i) => i.value !== null)
  const applicableWeight = applicable.reduce((sum, i) => sum + i.weight, 0)
  const knownWeight = known.reduce((sum, i) => sum + i.weight, 0)
  const coverage = applicableWeight === 0 ? 0 : knownWeight / applicableWeight
  const sourceQuality =
    knownWeight === 0
      ? 0
      : known.reduce((sum, i) => sum + i.weight * (EVIDENCE_LEVEL_QUALITY[i.evidenceLevel] ?? 0), 0) /
        knownWeight
  const recency = recencyFactor(app, indicators, now)

  const confidence = Math.round(
    100 *
      (CONFIDENCE_WEIGHTS.coverage * coverage +
        CONFIDENCE_WEIGHTS.quality * sourceQuality +
        CONFIDENCE_WEIGHTS.recency * recency),
  )

  return {
    methodologyVersion: METHODOLOGY_VERSION,
    computedAt: now.toISOString(),
    privacy: scoreOf('privacy'),
    security: scoreOf('security'),
    agency: scoreOf('agency'),
    overall,
    confidence,
    provisional: confidence < PROVISIONAL_CONFIDENCE_THRESHOLD,
    coverage: Math.round(coverage * 100) / 100,
    sourceQuality: Math.round(sourceQuality * 100) / 100,
    recency,
    dimensions,
    indicators,
  }
}
