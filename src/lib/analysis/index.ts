/**
 * Biblioteca d'anàlisi transversal.
 *
 * El projecte ja sap explicar molt bé una aplicació. Això és el que permet
 * explicar-les totes alhora: llegir el corpus sencer i respondre preguntes que
 * cap fitxa no pot respondre tota sola —qui recull què, qui acaba tenint-ho,
 * com se surt, i quanta part de tot plegat encara no sabem.
 *
 * Ús habitual:
 *
 * ```ts
 * const corpus = await loadCorpus(payload)
 * const dades = analyseDataTypes(corpus)
 * const grups = analyseGroups(corpus)
 * ```
 *
 * `loadCorpus` és l'única funció d'aquest mòdul que toca la base de dades.
 * Totes les altres són pures: mateix corpus, mateix resultat, sempre, amb un
 * ordre estable per als llistats.
 */

export {
  addStatus,
  appRef,
  at,
  buildCorpus,
  companyRef,
  compareText,
  emptyCorpus,
  emptyStatusTally,
  factLevel,
  factSources,
  factStatus,
  loadCorpus,
  localizedText,
  median,
  percentage,
  relationId,
  relationIds,
  selectValue,
  tallyStatuses,
  type AppRef,
  type CompanyRef,
  type Corpus,
  type StatusTally,
} from './corpus'

export {
  analyseCatalan,
  type CatalanAnalysis,
  type CatalanApp,
  type CatalanGroupRow,
} from './catalan'

export {
  analyseDataTypes,
  type DataTypeReach,
  type DataTypesAnalysis,
} from './dataTypes'

export {
  analyseGroups,
  parseUserBase,
  resolveOwnershipChain,
  ultimateParentId,
  type GroupDataType,
  type GroupProfile,
  type GroupsAnalysis,
  type OwnershipChain,
} from './groups'

export {
  buildSharingGraph,
  type SharingEdge,
  type SharingGraph,
  type SharingNode,
} from './sharing'

export {
  analyseDarkPatterns,
  DARK_PATTERN_SEVERITIES,
  DARK_PATTERN_SEVERITY_LABELS,
  DARK_PATTERN_TYPE_LABELS,
  DARK_PATTERN_TYPES,
  type DarkPatternApp,
  type DarkPatternSeverity,
  type DarkPatternsAnalysis,
  type DarkPatternType,
  type DarkPatternTypeCount,
} from './darkPatterns'

export {
  analyseJurisdictions,
  primaryJurisdiction,
  TRANSFER_MECHANISM_LABELS,
  TRANSFER_MECHANISMS,
  type CountryCount,
  type JurisdictionCount,
  type JurisdictionsAnalysis,
  type TransferMechanism,
} from './jurisdictions'

export {
  analyseDeletion,
  DELETION_DIFFICULTIES,
  DELETION_DIFFICULTY_LABELS,
  WAITING_BUCKETS,
  type DeletionAnalysis,
  type DeletionDifficulty,
  type WaitingBucketCount,
  type WaitingBucketKey,
} from './deletion'

export {
  analyseSecurity,
  E2EE_SCOPE_LABELS,
  E2EE_SCOPES,
  MFA_METHOD_LABELS,
  MFA_METHODS,
  type E2eeScope,
  type MfaMethod,
  type SecurityAnalysis,
  type SecurityMeasure,
} from './security'

export {
  analyseEvidence,
  EVIDENCE_LEVEL_LABELS,
  EVIDENCED_FACTS,
  SELECT_INDICATORS,
  type AppCoverage,
  type EvidenceAnalysis,
  type IndicatorCoverage,
} from './evidence'

export {
  analyseIncidents,
  FINE_STATUS_LABELS,
  FINE_STATUSES,
  INCIDENT_SEVERITIES,
  INCIDENT_SEVERITY_LABELS,
  INCIDENT_TYPE_LABELS,
  INCIDENT_TYPES,
  type BreachSummary,
  type FineStatus,
  type IncidentCompanyRow,
  type IncidentGroupRow,
  type IncidentSeverity,
  type IncidentsAnalysis,
  type IncidentType,
  type IncidentYearRow,
} from './incidents'
