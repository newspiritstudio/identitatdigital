import type { EvidenceLevel, EvidenceStatus } from '@/fields/evidence'
import type { Dimension } from './methodology'

export type FactLike = {
  status?: EvidenceStatus | string | null
  evidenceLevel?: EvidenceLevel | string | null
  sources?: unknown[] | null
  verifiedAt?: string | null
  [key: string]: unknown
} | null | undefined

export type DataCollectionRow = {
  dataType?: unknown
  status?: string | null
  linkedToIdentity?: string | null
  usedForTracking?: string | null
  purposes?: unknown[] | null
  sharedWith?: string | null
  evidenceLevel?: string | null
  sources?: unknown[] | null
}

export type DataTypeMeta = {
  sensitivity: number
  specialCategory: boolean
  family?: string
}

export type IncidentLike = {
  occurredAt?: string | null
  severity?: string | null
  type?: string | null
}

export type ScoringContext = {
  /** Metadades dels tipus de dada, indexades per identificador. */
  dataTypes: Map<string, DataTypeMeta>
  /** Incidents ja associats a l'aplicació o al seu grup. */
  incidents: IncidentLike[]
  /** Data de referència del càlcul; injectable per fer els tests deterministes. */
  now?: Date
}

export type IndicatorOutcome = {
  key: string
  label: string
  dimension: Dimension
  weight: number
  /** 0–1, o `null` quan no hi ha evidència. */
  value: number | null
  /** `false` quan l'indicador no aplica al servei. */
  applicable: boolean
  evidenceLevel: EvidenceLevel
  note?: string
}

export type DimensionScore = {
  dimension: Dimension
  score: number | null
  knownWeight: number
  applicableWeight: number
}

export type ScoreResult = {
  methodologyVersion: string
  computedAt: string
  privacy: number | null
  security: number | null
  agency: number | null
  overall: number | null
  confidence: number
  provisional: boolean
  coverage: number
  sourceQuality: number
  recency: number
  dimensions: DimensionScore[]
  indicators: IndicatorOutcome[]
}
