import type { EvidenceLevel, EvidenceStatus } from '@/fields/evidence'
import type { DataRowSeed, FactSeed, SourceSeed } from './types'

/** Data de treball de la primera onada d'anàlisi. */
export const REVIEW_DATE = '2026-09-09'

/** Data de treball de la segona onada: les 400 aplicacions més descarregades. */
export const WAVE2_DATE = '2026-09-22'

/**
 * Constructor curt d'afirmacions amb evidència. El dataset en fa servir
 * centenars; escriure-les enteres el faria il·legible.
 */
export const f = (
  status: EvidenceStatus,
  level: EvidenceLevel,
  sources: string[] = [],
  detail?: string,
  extra: Record<string, unknown> = {},
): FactSeed => ({
  status,
  level,
  sources,
  detail,
  verifiedAt: REVIEW_DATE,
  ...extra,
})

/** Afirmació explícitament desconeguda. Es fa servir; no és un descuit. */
export const unknown = (detail?: string): FactSeed => ({
  status: 'unknown',
  level: 'unknown',
  sources: [],
  detail,
})

/** Indicador que no aplica al servei. */
export const na = (detail: string): FactSeed => ({
  status: 'na',
  level: 'official',
  sources: [],
  detail,
  verifiedAt: REVIEW_DATE,
})

/** Fila de la matriu de dades. */
export const row = (
  type: string,
  status: DataRowSeed['status'],
  options: Omit<DataRowSeed, 'type' | 'status'> = {},
): DataRowSeed => ({
  type,
  status,
  linked: 'unknown',
  tracking: 'unknown',
  shared: 'unknown',
  level: 'official',
  ...options,
})

/**
 * Els mateixos constructors, lligats a una altra data de verificació. Cada onada
 * d'anàlisi els crida amb la seva data perquè quedi constància de quan es va
 * comprovar cada afirmació.
 */
export const evidenceAt = (verifiedAt: string) => ({
  f: (
    status: EvidenceStatus,
    level: EvidenceLevel,
    sources: string[] = [],
    detail?: string,
    extra: Record<string, unknown> = {},
  ): FactSeed => ({ status, level, sources, detail, verifiedAt, ...extra }),
  unknown,
  na: (detail: string): FactSeed => ({ status: 'na', level: 'official', sources: [], detail, verifiedAt }),
  row,
})

/** Constructor de fonts amb data de consulta fixada. */
export const sourceAt =
  (consultedAt: string) =>
  (
    slug: string,
    title: string,
    url: string,
    publisher: string,
    type: string,
    reliability: SourceSeed['reliability'],
    extra: Partial<SourceSeed> = {},
  ): SourceSeed => ({ slug, title, url, publisher, type, reliability, language: 'en', consultedAt, ...extra })
