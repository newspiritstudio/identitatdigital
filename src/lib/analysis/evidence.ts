import {
  EVIDENCE_LEVELS,
  EVIDENCE_LEVEL_QUALITY,
  type EvidenceLevel,
  type EvidenceStatus,
} from '@/fields/evidence'

import {
  at,
  compareText,
  factLevel,
  factSources,
  factStatus,
  localizedText,
  percentage,
  relationId,
  tallyStatuses,
  type AppRef,
  type Corpus,
  type StatusTally,
} from './corpus'

/**
 * La mètrica d'honestedat del projecte.
 *
 * Aquest mòdul no mesura les aplicacions: ens mesura a nosaltres. Diu quina
 * part del que afirmem està documentada, amb quina qualitat de font i què ens
 * queda per mirar. És la peça que fa creïbles totes les altres, perquè un
 * directori que no sap dir quant no sap acaba fent passar el silenci per
 * conclusió.
 *
 * Regla que governa tot el fitxer: `unknown` no és una nota dolenta. És una
 * tasca pendent. El que compta com a incompliment no és un desconegut sinó una
 * afirmació sense font.
 */

export const EVIDENCE_LEVEL_LABELS: Record<EvidenceLevel, string> = {
  official: 'Document oficial del servei',
  regulator: 'Resolució d’un regulador',
  independent: 'Anàlisi independent',
  press: 'Mitjà especialitzat',
  editorial: 'Interpretació editorial',
  unknown: 'Sense nivell declarat',
}

/**
 * Afirmacions amb evidència d'una fitxa.
 *
 * La llista és explícita i no es dedueix de la metodologia de puntuació a
 * propòsit: no tots els indicadors que puntuen són afirmacions amb evidència
 * (n'hi ha de calculats) i no totes les afirmacions amb evidència puntuen. El
 * que mesurem aquí és la documentació, no la nota.
 */
export const EVIDENCED_FACTS: ReadonlyArray<{ key: string; label: string; path: string }> = [
  { key: 'account-required', label: 'Cal un compte', path: 'accountRequired' },
  { key: 'open-source', label: 'Codi obert', path: 'openSource' },
  {
    key: 'cross-app-tracking',
    label: 'Seguiment entre aplicacions i webs',
    path: 'tracking.crossAppTracking',
  },
  {
    key: 'advertising-identifiers',
    label: 'Identificadors publicitaris',
    path: 'tracking.advertisingIdentifiers',
  },
  {
    key: 'third-party-trackers',
    label: 'Rastrejadors de tercers integrats',
    path: 'tracking.thirdPartyTrackersPresent',
  },
  {
    key: 'targeted-advertising',
    label: 'Publicitat personalitzada',
    path: 'dataUses.targetedAdvertising',
  },
  { key: 'profiling', label: 'Elaboració de perfils', path: 'dataUses.profiling' },
  { key: 'ai-training', label: 'Entrenament de models', path: 'dataUses.aiTraining' },
  { key: 'third-party-sharing', label: 'Cessió a tercers', path: 'sharing.thirdPartySharing' },
  {
    key: 'intra-group-sharing',
    label: 'Compartició dins del grup',
    path: 'sharing.intraGroupSharing',
  },
  {
    key: 'data-broker-sales',
    label: 'Venda a intermediaris de dades',
    path: 'sharing.dataBrokerSales',
  },
  {
    key: 'international-transfers',
    label: 'Transferències internacionals',
    path: 'sharing.internationalTransfers',
  },
  {
    key: 'transparency-report',
    label: 'Informe de transparència',
    path: 'transparency.transparencyReport',
  },
  {
    key: 'retention-limits',
    label: 'Terminis de conservació',
    path: 'retention.definedPeriods',
  },
  {
    key: 'data-after-deletion',
    label: 'Dades retingudes després d’esborrar',
    path: 'retention.dataAfterDeletion',
  },
  {
    key: 'deletion-possible',
    label: 'Es pot eliminar el compte',
    path: 'accountDeletion.possible',
  },
  {
    key: 'deletion-self-service',
    label: 'Eliminació sense suport',
    path: 'accountDeletion.selfService',
  },
  { key: 'data-export', label: 'Exportació de les dades', path: 'userRights.dataExport' },
  { key: 'rights-exercise', label: 'Exercici dels drets RGPD', path: 'userRights.rightsExercise' },
  {
    key: 'ads-optout',
    label: 'Desactivació de la publicitat personalitzada',
    path: 'controls.adPersonalizationOptOut',
  },
  { key: 'telemetry-optout', label: 'Desactivació de la telemetria', path: 'controls.telemetryOptOut' },
  { key: 'granular-controls', label: 'Controls granulars', path: 'controls.granularControls' },
  { key: 'dark-patterns', label: 'Patrons enganyosos', path: 'controls.darkPatterns' },
  { key: 'e2ee', label: 'Xifratge d’extrem a extrem', path: 'security.e2ee' },
  { key: 'transport-encryption', label: 'Xifratge en trànsit', path: 'security.transportEncryption' },
  { key: 'at-rest-encryption', label: 'Xifratge en repòs', path: 'security.atRestEncryption' },
  { key: 'mfa', label: 'Verificació en dos passos', path: 'security.mfa' },
  {
    key: 'independent-audits',
    label: 'Auditories independents',
    path: 'security.independentAudits',
  },
  { key: 'bug-bounty', label: 'Programa de recompenses', path: 'security.bugBounty' },
  {
    key: 'vulnerability-disclosure',
    label: 'Divulgació de vulnerabilitats',
    path: 'security.vulnerabilityDisclosure',
  },
]

/**
 * Camps de selecció amb vocabulari tancat que també poden quedar en
 * «desconegut». No porten fonts ni nivell d'evidència, però un buit aquí és
 * exactament el mateix tipus de deute que un `unknown` d'una afirmació, i
 * deixar-los fora inflaria artificialment la cobertura.
 */
export const SELECT_INDICATORS: ReadonlyArray<{ key: string; label: string; path: string }> = [
  { key: 'business-model', label: 'Model de negoci', path: 'businessModel' },
  { key: 'policy-clarity', label: 'Claredat de la política', path: 'transparency.policyClarity' },
  { key: 'default-posture', label: 'Configuració per defecte', path: 'controls.defaultPosture' },
  { key: 'export-format', label: 'Format de l’exportació', path: 'userRights.exportFormatQuality' },
  {
    key: 'deletion-difficulty',
    label: 'Dificultat d’eliminació',
    path: 'accountDeletion.difficulty',
  },
]

export type IndicatorCoverage = {
  key: string
  label: string
  /** `fact` porta fonts i nivell d'evidència; `select` és un camp de vocabulari tancat. */
  kind: 'fact' | 'select'
  /** Fitxes on l'indicador aplica. */
  applicable: number
  documented: number
  unknown: number
  /** Percentatge de desconegut sobre les fitxes on aplica. */
  unknownShare: number
  /** Afirmacions documentades sense cap font. Només per als `fact`. */
  withoutSources: number
  /** Qualitat mitjana de les fonts de les afirmacions documentades (0–1). */
  sourceQuality: number | null
}

export type AppCoverage = AppRef & {
  applicable: number
  documented: number
  unknown: number
  unknownShare: number
  withoutSources: number
  sourceQuality: number | null
  /** Estat de la recerca declarat a la fitxa. */
  researchStatus: string | null
  /** Confiança calculada pel mòdul de puntuació, si n'hi ha. */
  confidence: number | null
}

export type EvidenceAnalysis = {
  appsConsidered: number
  /**
   * Afirmacions amb evidència considerades (fitxes × indicadors aplicables).
   * Compta només els `EVIDENCED_FACTS`: els camps de selecció no són
   * afirmacions amb font i es comptabilitzen a `byIndicator`, no aquí.
   */
  totalClaims: number
  /** Repartiment de les afirmacions amb evidència pels cinc estats. */
  claims: StatusTally
  /** Percentatge d'afirmacions que no hem pogut documentar. */
  unknownShare: number
  /** Percentatge d'afirmacions documentades sobre les aplicables. */
  documentedShare: number

  /** Distribució de nivells d'evidència entre les afirmacions documentades. */
  byLevel: { level: EvidenceLevel; label: string; claims: number; share: number }[]
  /** Qualitat mitjana de la font, de 0 a 1, seguint els pesos del Confidence Score. */
  sourceQuality: number

  /**
   * Afirmacions documentades sense cap font. És l'única xifra d'aquest mòdul
   * que assenyala un incompliment de la regla del projecte, i per tant l'única
   * que hauria de ser zero.
   */
  claimsWithoutSources: number

  /** Indicadors pitjor documentats primer: és la llista de feina pendent. */
  worstDocumented: IndicatorCoverage[]
  /** Els mateixos indicadors, per ordre de clau, per si cal buscar-ne un. */
  byIndicator: IndicatorCoverage[]
  /** Fitxes ordenades de menys a més documentades. */
  byApp: AppCoverage[]

  /** Files de la matriu de dades sense nivell d'evidència declarat. */
  dataRowsWithoutEvidenceLevel: number
  /** Files de la matriu de dades sense cap font. */
  dataRowsWithoutSources: number
  /** Files totals de la matriu. */
  dataRows: number
}

const averageQuality = (levels: EvidenceLevel[]): number | null => {
  if (levels.length === 0) return null
  const total = levels.reduce((sum, level) => sum + (EVIDENCE_LEVEL_QUALITY[level] ?? 0), 0)
  return Math.round((total / levels.length) * 100) / 100
}

export const analyseEvidence = (corpus: Corpus): EvidenceAnalysis => {
  const indicatorState = new Map<
    string,
    {
      label: string
      kind: 'fact' | 'select'
      applicable: number
      documented: number
      unknown: number
      withoutSources: number
      levels: EvidenceLevel[]
    }
  >()

  const ensure = (key: string, label: string, kind: 'fact' | 'select') => {
    let state = indicatorState.get(key)
    if (!state) {
      state = { label, kind, applicable: 0, documented: 0, unknown: 0, withoutSources: 0, levels: [] }
      indicatorState.set(key, state)
    }
    return state
  }

  const levelCounts = new Map<EvidenceLevel, number>()
  const allLevels: EvidenceLevel[] = []
  const statuses: EvidenceStatus[] = []
  const byApp: AppCoverage[] = []

  let claimsWithoutSources = 0
  let dataRows = 0
  let dataRowsWithoutEvidenceLevel = 0
  let dataRowsWithoutSources = 0

  for (const app of corpus.apps) {
    let applicable = 0
    let documented = 0
    let unknown = 0
    let withoutSources = 0
    const appLevels: EvidenceLevel[] = []

    for (const indicator of EVIDENCED_FACTS) {
      const fact = at(app, indicator.path)
      const status = factStatus(fact)
      statuses.push(status)
      const state = ensure(indicator.key, indicator.label, 'fact')

      // «No aplica» surt del denominador: no és un buit de recerca.
      if (status === 'na') continue
      state.applicable += 1
      applicable += 1

      if (status === 'unknown') {
        state.unknown += 1
        unknown += 1
        continue
      }

      state.documented += 1
      documented += 1
      const level = factLevel(fact)
      state.levels.push(level)
      appLevels.push(level)
      allLevels.push(level)
      levelCounts.set(level, (levelCounts.get(level) ?? 0) + 1)

      if (factSources(fact).length === 0) {
        state.withoutSources += 1
        withoutSources += 1
        claimsWithoutSources += 1
      }
    }

    for (const indicator of SELECT_INDICATORS) {
      const state = ensure(indicator.key, indicator.label, 'select')
      state.applicable += 1
      applicable += 1
      const value = at(app, indicator.path)
      if (typeof value === 'string' && value.length > 0 && value !== 'unknown') {
        state.documented += 1
        documented += 1
      } else {
        state.unknown += 1
        unknown += 1
      }
    }

    const rows = Array.isArray(app.dataCollection) ? app.dataCollection : []
    for (const row of rows) {
      dataRows += 1
      const level = at(row, 'evidenceLevel')
      if (typeof level !== 'string' || level === 'unknown') dataRowsWithoutEvidenceLevel += 1
      const sources = at(row, 'sources')
      if (!Array.isArray(sources) || sources.length === 0) dataRowsWithoutSources += 1
    }

    const confidence = at(app, 'scores.confidence')
    const researchStatus = at(app, 'review.researchStatus')
    byApp.push({
      id: relationId(app) ?? '',
      name: localizedText(app.name) ?? '(sense nom)',
      slug: typeof app.slug === 'string' ? app.slug : '',
      applicable,
      documented,
      unknown,
      unknownShare: percentage(unknown, applicable),
      withoutSources,
      sourceQuality: averageQuality(appLevels),
      researchStatus: typeof researchStatus === 'string' ? researchStatus : null,
      confidence: typeof confidence === 'number' ? confidence : null,
    })
  }

  const claims = tallyStatuses(statuses)
  const applicableClaims = claims.total - claims.na

  const byIndicator: IndicatorCoverage[] = [...indicatorState.entries()]
    .map(([key, state]) => ({
      key,
      label: state.label,
      kind: state.kind,
      applicable: state.applicable,
      documented: state.documented,
      unknown: state.unknown,
      unknownShare: percentage(state.unknown, state.applicable),
      withoutSources: state.withoutSources,
      sourceQuality: averageQuality(state.levels),
    }))
    .sort((a, b) => compareText(a.key, b.key))

  const worstDocumented = [...byIndicator].sort(
    (a, b) =>
      b.unknownShare - a.unknownShare ||
      b.unknown - a.unknown ||
      compareText(a.label, b.label) ||
      compareText(a.key, b.key),
  )

  byApp.sort(
    (a, b) =>
      b.unknownShare - a.unknownShare ||
      b.unknown - a.unknown ||
      compareText(a.name, b.name) ||
      compareText(a.id, b.id),
  )

  const byLevel = EVIDENCE_LEVELS.map((level) => {
    const count = levelCounts.get(level) ?? 0
    return {
      level,
      label: EVIDENCE_LEVEL_LABELS[level],
      claims: count,
      share: percentage(count, allLevels.length),
    }
  }).sort((a, b) => b.claims - a.claims || compareText(a.level, b.level))

  return {
    appsConsidered: corpus.apps.length,
    totalClaims: applicableClaims,
    claims,
    unknownShare: percentage(claims.unknown, applicableClaims),
    documentedShare: percentage(claims.documented, applicableClaims),
    byLevel,
    sourceQuality: averageQuality(allLevels) ?? 0,
    claimsWithoutSources,
    worstDocumented,
    byIndicator,
    byApp,
    dataRowsWithoutEvidenceLevel,
    dataRowsWithoutSources,
    dataRows,
  }
}
