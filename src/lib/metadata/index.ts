import { latin1, startsWith } from './bytes'
import { cleanDocument, inspectDocument, zipKind } from './documents'
import { cleanImage, inspectImage } from './images'
import type { CleanResult, FileFormat, Inspection, MetaField } from './types'

export * from './types'

/** Límit per fitxer: tot es llegeix a la memòria del navegador. */
export const MAX_FILE_BYTES = 50 * 1024 * 1024

const HEIF_BRANDS = /^(heic|heix|heim|heis|hevc|hevx|mif1|msf1|avif|avis)$/

/** El format es reconeix pel contingut, no per l'extensió, que pot mentir. */
export async function detectFormat(bytes: Uint8Array): Promise<FileFormat> {
  if (startsWith(bytes, [0xff, 0xd8, 0xff])) return 'jpeg'
  if (startsWith(bytes, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])) return 'png'
  if (startsWith(bytes, 'RIFF') && startsWith(bytes, 'WEBP', 8)) return 'webp'
  if (startsWith(bytes, 'ftyp', 4) && HEIF_BRANDS.test(latin1(bytes, 8, 12))) return 'heic'
  if (latin1(bytes, 0, Math.min(bytes.length, 1024)).includes('%PDF-')) return 'pdf'
  if (startsWith(bytes, [0x50, 0x4b, 0x03, 0x04])) return (await zipKind(bytes)) ?? 'unknown'
  return 'unknown'
}

const isImage = (format: FileFormat): format is 'jpeg' | 'png' | 'webp' | 'heic' =>
  format === 'jpeg' || format === 'png' || format === 'webp' || format === 'heic'

const RISK_ORDER = { high: 0, medium: 1, low: 2 } as const

/** Un mateix camp pot sortir de l'EXIF i de l'XMP alhora: s'ajunten sota una sola etiqueta. */
const mergeFields = (fields: MetaField[]) => {
  const out: MetaField[] = []
  for (const field of fields) {
    const existing = out.find((candidate) => candidate.label === field.label && candidate.group === field.group)
    if (!existing) out.push({ ...field })
    else if (!existing.value.split(' · ').includes(field.value)) existing.value += ` · ${field.value}`
  }
  return out
}

const sortFields = (fields: MetaField[]) =>
  mergeFields(fields)
    .map((field, index) => ({ field, index }))
    .sort((a, b) => RISK_ORDER[a.field.risk] - RISK_ORDER[b.field.risk] || a.index - b.index)
    .map((item) => item.field)

export async function inspect(bytes: Uint8Array): Promise<Inspection> {
  const format = await detectFormat(bytes)
  if (format === 'unknown') {
    return {
      format,
      fields: [],
      gps: null,
      notes: ['Aquest format no el sabem llegir. Admet fotos (JPEG, PNG, WebP, HEIC), PDF i documents de Word, Excel, PowerPoint i LibreOffice.'],
      cleanable: false,
    }
  }
  try {
    const inspection = isImage(format) ? await inspectImage(format, bytes) : await inspectDocument(format, bytes)
    return { ...inspection, fields: sortFields(inspection.fields) }
  } catch {
    return {
      format,
      fields: [],
      gps: null,
      notes: ['El fitxer sembla malmès o té una estructura que no sabem llegir. No se n’ha tret res.'],
      cleanable: false,
    }
  }
}

export interface Cleaning extends CleanResult {
  /** La còpia neta, tornada a revisar amb el mateix inspector. */
  verification: Inspection
}

/** Fa la còpia neta i la torna a inspeccionar per comprovar què hi queda. */
export async function clean(bytes: Uint8Array): Promise<Cleaning> {
  const format = await detectFormat(bytes)
  if (format === 'unknown') throw new Error('Aquest format no el sabem netejar.')
  const result = isImage(format) ? cleanImage(format, bytes) : await cleanDocument(format, bytes)
  const verification = await inspect(result.bytes)
  if (verification.format !== format) throw new Error('La còpia neta no ha sortit bé. No la descarreguis.')
  return { ...result, verification }
}

/** Nom del fitxer net: «foto.jpg» → «foto-net.jpg». */
export const cleanFileName = (name: string) => {
  const dot = name.lastIndexOf('.')
  return dot > 0 ? `${name.slice(0, dot)}-net${name.slice(dot)}` : `${name}-net`
}

export const MIME_TYPES: Record<FileFormat, string> = {
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
  heic: 'image/heic',
  pdf: 'application/pdf',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  odf: 'application/octet-stream',
  unknown: 'application/octet-stream',
}
