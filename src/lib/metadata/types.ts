/**
 * Tipus comuns de l'inspector de metadades.
 *
 * Tot el que hi ha a `src/lib/metadata` és pur: rep bytes i torna bytes o
 * descripcions. No toca la xarxa ni el DOM, i per això s'executa igual al
 * navegador que a les proves.
 */

export type MetaGroup = 'location' | 'identity' | 'device' | 'time' | 'software' | 'content' | 'other'

export type MetaRisk = 'high' | 'medium' | 'low'

export interface MetaField {
  /** Identificador estable (per exemple `exif:Make`), per a proves i dades de disseny. */
  key: string
  label: string
  value: string
  group: MetaGroup
  risk: MetaRisk
  /** Per què importa, en una frase. */
  why?: string
}

export interface GpsPoint {
  lat: number
  lon: number
  altitude: number | null
}

export type FileFormat = 'jpeg' | 'png' | 'webp' | 'heic' | 'pdf' | 'docx' | 'xlsx' | 'pptx' | 'odf' | 'unknown'

export interface Inspection {
  format: FileFormat
  fields: MetaField[]
  gps: GpsPoint | null
  /** Advertiments sobre el que l'eina no ha pogut llegir o no pot netejar. */
  notes: string[]
  /** Si l'eina en sap fer una còpia neta. */
  cleanable: boolean
}

export interface CleanResult {
  bytes: Uint8Array
  /** Què s'ha fet, en frases curtes. */
  done: string[]
  /** El que queda i per què. */
  remaining: string[]
}

export const GROUP_LABELS: Record<MetaGroup, string> = {
  location: 'Ubicació',
  identity: 'Qui',
  device: 'Aparell',
  time: 'Quan',
  software: 'Programari',
  content: 'Contingut amagat',
  other: 'Altres',
}

export const RISK_LABELS: Record<MetaRisk, string> = {
  high: 'Risc alt',
  medium: 'Risc mitjà',
  low: 'Risc baix',
}

export const FORMAT_LABELS: Record<FileFormat, string> = {
  jpeg: 'Imatge JPEG',
  png: 'Imatge PNG',
  webp: 'Imatge WebP',
  heic: 'Imatge HEIC/HEIF (iPhone)',
  pdf: 'Document PDF',
  docx: 'Document de Word',
  xlsx: 'Full de càlcul d’Excel',
  pptx: 'Presentació de PowerPoint',
  odf: 'Document d’OpenDocument (LibreOffice)',
  unknown: 'Format no reconegut',
}
