import {
  ascii,
  concat,
  crc32,
  displayText,
  indexOf,
  inflate,
  latin1,
  startsWith,
  u16be,
  u32be,
  u32le,
  utf8,
  writeU32le,
} from './bytes'
import { readExif, scrubExif } from './exif'
import type { CleanResult, GpsPoint, Inspection, MetaField } from './types'
import { readXmp } from './xmp'

/**
 * Formats d'imatge: JPEG, PNG, WebP i HEIC/HEIF/AVIF.
 *
 * Criteri de neteja comú: l'EXIF es neteja al lloc (vegeu `exif.ts`) per
 * conservar l'orientació, i la resta de blocs de metadades (XMP, IPTC,
 * comentaris, textos) es treuen sencers si el format ho permet sense tocar la
 * imatge, o s'omplen d'espais si treure'ls mouria posicions que altres parts
 * del fitxer fan servir. En cap cas no es torna a codificar la imatge: la
 * còpia neta té exactament els mateixos píxels.
 */

const EXIF_ID = ascii('Exif\0\0')
const XMP_ID = 'http://ns.adobe.com/xap/1.0/\0'
const XMP_EXT_ID = 'http://ns.adobe.com/xmp/extension/\0'

interface Collected {
  fields: MetaField[]
  gps: GpsPoint | null
  notes: string[]
}

const collector = (): Collected => ({ fields: [], gps: null, notes: [] })

const addExif = (into: Collected, bytes: Uint8Array, start: number, length: number) => {
  const reading = readExif(bytes, start, length)
  if (!reading) return
  into.fields.push(...reading.fields)
  into.gps ??= reading.gps
}

const addXmp = (into: Collected, xml: string) => {
  const reading = readXmp(xml)
  into.fields.push(...reading.fields)
  into.gps ??= reading.gps
}

/**
 * Busca blocs EXIF en qualsevol lloc del fitxer. Les fotos de mòbil sovint
 * porten imatges secundàries enganxades al final (mapes de profunditat,
 * mapes de guany HDR), cadascuna amb el seu EXIF.
 */
const exifBlocksAfter = (bytes: Uint8Array, from: number): number[] => {
  const found: number[] = []
  let at = indexOf(bytes, EXIF_ID, from)
  while (at !== -1) {
    const tiff = at + EXIF_ID.length
    if (startsWith(bytes, 'II*\0', tiff) || startsWith(bytes, 'MM\0*', tiff)) found.push(tiff)
    at = indexOf(bytes, EXIF_ID, at + 1)
  }
  return found
}

/* ──────────────────────────────── JPEG ─────────────────────────────────── */

interface Segment {
  marker: number
  /** Posició del 0xFF. */
  at: number
  /** Posició just després del segment. */
  end: number
  payloadAt: number
}

function jpegSegments(bytes: Uint8Array): { segments: Segment[]; scanAt: number } | null {
  if (!startsWith(bytes, [0xff, 0xd8])) return null
  const segments: Segment[] = []
  let at = 2
  while (at + 4 <= bytes.length) {
    if (bytes[at] !== 0xff) return null
    const marker = bytes[at + 1]
    if (marker === 0xff) {
      at += 1
      continue
    }
    if (marker === 0xda) return { segments, scanAt: at }
    if (marker === 0xd9) return { segments, scanAt: at }
    if ((marker >= 0xd0 && marker <= 0xd7) || marker === 0x01) {
      at += 2
      continue
    }
    const length = u16be(bytes, at + 2)
    if (length < 2 || at + 2 + length > bytes.length) return null
    segments.push({ marker, at, end: at + 2 + length, payloadAt: at + 4 })
    at += 2 + length
  }
  return { segments, scanAt: bytes.length }
}

/** Camps IPTC més habituals dins del bloc de Photoshop. */
const IPTC: Record<number, { label: string; group: MetaField['group']; risk: MetaField['risk'] }> = {
  80: { label: 'Autor (IPTC)', group: 'identity', risk: 'high' },
  90: { label: 'Ciutat (IPTC)', group: 'location', risk: 'high' },
  95: { label: 'Província (IPTC)', group: 'location', risk: 'medium' },
  101: { label: 'País (IPTC)', group: 'location', risk: 'medium' },
  116: { label: 'Drets (IPTC)', group: 'identity', risk: 'medium' },
  120: { label: 'Peu de foto (IPTC)', group: 'content', risk: 'medium' },
  122: { label: 'Redactor (IPTC)', group: 'identity', risk: 'high' },
}

const readIptc = (bytes: Uint8Array, from: number, to: number, into: Collected) => {
  const values = new Map<number, string[]>()
  for (let at = from; at + 5 <= to; ) {
    if (bytes[at] !== 0x1c) {
      at += 1
      continue
    }
    const record = bytes[at + 1]
    const dataset = bytes[at + 2]
    const length = u16be(bytes, at + 3)
    if (length & 0x8000 || at + 5 + length > to) break
    if (record === 2 && IPTC[dataset]) {
      const text = displayText(utf8(bytes.subarray(at + 5, at + 5 + length)))
      if (text) values.set(dataset, [...(values.get(dataset) ?? []), text])
    }
    at += 5 + length
  }
  for (const [dataset, list] of values) {
    const info = IPTC[dataset]
    into.fields.push({ key: `iptc:${dataset}`, label: info.label, value: [...new Set(list)].join(' · '), group: info.group, risk: info.risk })
  }
}

function inspectJpeg(bytes: Uint8Array): Collected {
  const out = collector()
  const parsed = jpegSegments(bytes)
  if (!parsed) {
    out.notes.push('L’estructura del JPEG no és la que s’esperava: pot ser que no s’hagi llegit tot.')
    return out
  }
  let firstExif = -1
  for (const segment of parsed.segments) {
    const { marker, payloadAt, end } = segment
    if (marker === 0xe1 && startsWith(bytes, EXIF_ID, payloadAt)) {
      if (firstExif === -1) firstExif = payloadAt
      addExif(out, bytes, payloadAt + 6, end - payloadAt - 6)
    } else if (marker === 0xe1 && startsWith(bytes, XMP_ID, payloadAt)) {
      addXmp(out, utf8(bytes.subarray(payloadAt + XMP_ID.length, end)))
    } else if (marker === 0xe1 && startsWith(bytes, XMP_EXT_ID, payloadAt)) {
      addXmp(out, utf8(bytes.subarray(payloadAt + XMP_EXT_ID.length + 40, end)))
    } else if (marker === 0xed) {
      readIptc(bytes, payloadAt, end, out)
    } else if (marker === 0xfe) {
      const text = displayText(utf8(bytes.subarray(payloadAt, end)))
      if (text) out.fields.push({ key: 'jpeg:comment', label: 'Comentari', value: text, group: 'content', risk: 'medium' })
    }
  }
  const extra = exifBlocksAfter(bytes, parsed.scanAt)
  if (extra.length > 0) {
    out.fields.push({
      key: 'jpeg:secondary',
      label: 'Imatges secundàries incrustades',
      value: `${extra.length}, amb metadades pròpies`,
      group: 'content',
      risk: 'low',
      why: 'Mapes de profunditat o d’HDR que el mòbil hi afegeix. Es netegen igual que la principal.',
    })
    for (const tiff of extra) {
      const reading = readExif(bytes, tiff, bytes.length - tiff)
      if (reading?.gps && !out.gps) {
        out.gps = reading.gps
        out.fields.push(...reading.fields.filter((field) => field.group === 'location'))
      }
    }
  }
  return out
}

function cleanJpeg(input: Uint8Array): CleanResult {
  const bytes = input.slice()
  const parsed = jpegSegments(bytes)
  if (!parsed) throw new Error('L’estructura del JPEG no és la que s’esperava.')
  const done = new Set<string>()
  const mpfIndex = parsed.segments.findIndex((segment) => segment.marker === 0xe2 && startsWith(bytes, 'MPF\0', segment.payloadAt))
  const parts: Uint8Array[] = [bytes.subarray(0, 2)]
  let keptOrientation = false

  parsed.segments.forEach((segment, index) => {
    const { marker, payloadAt, at, end } = segment
    const isExif = marker === 0xe1 && startsWith(bytes, EXIF_ID, payloadAt)
    const drop =
      !isExif &&
      (marker === 0xe1 || marker === 0xed || marker === 0xfe || (marker >= 0xe3 && marker <= 0xef && marker !== 0xee))
    if (isExif) {
      const scrub = scrubExif(bytes, payloadAt + 6, end - payloadAt - 6)
      scrub?.removed.forEach((item) => done.add(item))
      keptOrientation ||= scrub?.keptOrientation ?? false
      parts.push(bytes.subarray(at, end))
      return
    }
    if (!drop) {
      parts.push(bytes.subarray(at, end))
      return
    }
    done.add(marker === 0xe1 ? 'bloc XMP' : marker === 0xed ? 'bloc IPTC de Photoshop' : marker === 0xfe ? 'comentari' : 'bloc de dades del fabricant')
    if (mpfIndex !== -1 && index > mpfIndex) {
      // Treure'l mouria les imatges secundàries respecte de l'índex MPF: s'omple
      // d'espais, conservant la mida i l'identificador.
      const identifier = marker === 0xe1 && startsWith(bytes, XMP_ID, payloadAt) ? XMP_ID.length : 0
      bytes.fill(0x20, payloadAt + identifier, end)
      parts.push(bytes.subarray(at, end))
    }
  })

  const tail = bytes.subarray(parsed.scanAt)
  for (const tiff of exifBlocksAfter(tail, 0)) {
    const scrub = scrubExif(tail, tiff, tail.length - tiff)
    scrub?.removed.forEach((item) => done.add(`${item} (imatge secundària)`))
  }
  parts.push(tail)

  const remaining = keptOrientation ? ['Orientació de la foto (cal per veure-la dreta).'] : []
  return { bytes: concat(parts), done: [...done], remaining }
}

/* ──────────────────────────────── PNG ──────────────────────────────────── */

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]

interface Chunk {
  type: string
  at: number
  dataAt: number
  length: number
  end: number
}

function pngChunks(bytes: Uint8Array): Chunk[] | null {
  if (!startsWith(bytes, PNG_SIGNATURE)) return null
  const chunks: Chunk[] = []
  let at = 8
  while (at + 12 <= bytes.length) {
    const length = u32be(bytes, at)
    const end = at + 12 + length
    if (end > bytes.length) return null
    const type = latin1(bytes, at + 4, at + 8)
    chunks.push({ type, at, dataAt: at + 8, length, end })
    at = end
    if (type === 'IEND') break
  }
  return chunks
}

const PNG_TEXT_KEYS: Record<string, { label: string; group: MetaField['group']; risk: MetaField['risk']; why?: string }> = {
  author: { label: 'Autor', group: 'identity', risk: 'high' },
  copyright: { label: 'Drets', group: 'identity', risk: 'medium' },
  comment: { label: 'Comentari', group: 'content', risk: 'medium' },
  description: { label: 'Descripció', group: 'content', risk: 'medium' },
  title: { label: 'Títol', group: 'content', risk: 'low' },
  software: { label: 'Programari', group: 'software', risk: 'low' },
  source: { label: 'Aparell d’origen', group: 'device', risk: 'low' },
  'creation time': { label: 'Data de creació', group: 'time', risk: 'low' },
  parameters: { label: 'Instruccions d’IA (prompt)', group: 'content', risk: 'high', why: 'El text exacte i els paràmetres amb què s’ha generat la imatge.' },
  prompt: { label: 'Flux de generació d’IA', group: 'content', risk: 'high', why: 'El flux complet de generació, amb les instruccions.' },
  workflow: { label: 'Flux de generació d’IA', group: 'content', risk: 'medium' },
}

async function pngText(bytes: Uint8Array, chunk: Chunk): Promise<{ key: string; text: string } | null> {
  const data = bytes.subarray(chunk.dataAt, chunk.dataAt + chunk.length)
  const nul = data.indexOf(0)
  if (nul <= 0) return null
  const key = latin1(data, 0, nul)
  try {
    if (chunk.type === 'tEXt') return { key, text: latin1(data, nul + 1) }
    if (chunk.type === 'zTXt') return { key, text: latin1(await inflate(data.subarray(nul + 2), 'deflate')) }
    // iTXt: paraula\0 comprimit mètode idioma\0 traducció\0 text
    const compressed = data[nul + 1] === 1
    let at = nul + 3
    at = data.indexOf(0, at) + 1
    at = data.indexOf(0, at) + 1
    if (at <= 0) return null
    const body = data.subarray(at)
    return { key, text: utf8(compressed ? await inflate(body, 'deflate') : body) }
  } catch {
    return { key, text: '(comprimit, no s’ha pogut llegir)' }
  }
}

async function inspectPng(bytes: Uint8Array): Promise<Collected> {
  const out = collector()
  const chunks = pngChunks(bytes)
  if (!chunks) {
    out.notes.push('L’estructura del PNG no és la que s’esperava.')
    return out
  }
  for (const chunk of chunks) {
    if (chunk.type === 'eXIf') addExif(out, bytes, chunk.dataAt, chunk.length)
    else if (chunk.type === 'tIME') {
      const d = bytes.subarray(chunk.dataAt, chunk.dataAt + 7)
      out.fields.push({ key: 'png:time', label: 'Data de modificació', value: `${u16be(d, 0)}-${String(d[2]).padStart(2, '0')}-${String(d[3]).padStart(2, '0')}`, group: 'time', risk: 'low' })
    } else if (chunk.type === 'tEXt' || chunk.type === 'zTXt' || chunk.type === 'iTXt') {
      const entry = await pngText(bytes, chunk)
      if (!entry) continue
      if (entry.key === 'XML:com.adobe.xmp') {
        addXmp(out, entry.text)
        continue
      }
      const info = PNG_TEXT_KEYS[entry.key.toLowerCase()] ?? { label: `Text «${displayText(entry.key, 40)}»`, group: 'other' as const, risk: 'low' as const }
      const value = displayText(entry.text)
      if (value) out.fields.push({ key: `png:${entry.key.toLowerCase()}`, label: info.label, value, group: info.group, risk: info.risk, why: info.why })
    }
  }
  return out
}

const PNG_DROP = new Set(['tEXt', 'zTXt', 'iTXt', 'tIME'])

function cleanPng(input: Uint8Array): CleanResult {
  const bytes = input.slice()
  const chunks = pngChunks(bytes)
  if (!chunks) throw new Error('L’estructura del PNG no és la que s’esperava.')
  const parts: Uint8Array[] = [bytes.subarray(0, 8)]
  const done = new Set<string>()
  let keptOrientation = false
  for (const chunk of chunks) {
    if (PNG_DROP.has(chunk.type)) {
      done.add(chunk.type === 'tIME' ? 'data de modificació' : 'textos incrustats')
      continue
    }
    if (chunk.type === 'eXIf') {
      const scrub = scrubExif(bytes, chunk.dataAt, chunk.length)
      scrub?.removed.forEach((item) => done.add(item))
      keptOrientation ||= scrub?.keptOrientation ?? false
      const crc = crc32(bytes.subarray(chunk.at + 4, chunk.dataAt + chunk.length))
      const view = new DataView(bytes.buffer, bytes.byteOffset)
      view.setUint32(chunk.dataAt + chunk.length, crc)
    }
    parts.push(bytes.subarray(chunk.at, chunk.end))
  }
  return {
    bytes: concat(parts),
    done: [...done],
    remaining: keptOrientation ? ['Orientació de la foto (cal per veure-la dreta).'] : [],
  }
}

/* ──────────────────────────────── WebP ─────────────────────────────────── */

function webpChunks(bytes: Uint8Array): Chunk[] | null {
  if (!startsWith(bytes, 'RIFF') || !startsWith(bytes, 'WEBP', 8)) return null
  const chunks: Chunk[] = []
  let at = 12
  while (at + 8 <= bytes.length) {
    const type = latin1(bytes, at, at + 4)
    const length = u32le(bytes, at + 4)
    const end = at + 8 + length + (length % 2)
    if (at + 8 + length > bytes.length) return null
    chunks.push({ type, at, dataAt: at + 8, length, end: Math.min(end, bytes.length) })
    at = end
  }
  return chunks
}

function inspectWebp(bytes: Uint8Array): Collected {
  const out = collector()
  const chunks = webpChunks(bytes)
  if (!chunks) {
    out.notes.push('L’estructura del WebP no és la que s’esperava.')
    return out
  }
  for (const chunk of chunks) {
    if (chunk.type === 'EXIF') {
      const skip = startsWith(bytes, EXIF_ID, chunk.dataAt) ? 6 : 0
      addExif(out, bytes, chunk.dataAt + skip, chunk.length - skip)
    } else if (chunk.type === 'XMP ') {
      addXmp(out, utf8(bytes.subarray(chunk.dataAt, chunk.dataAt + chunk.length)))
    }
  }
  return out
}

function cleanWebp(input: Uint8Array): CleanResult {
  const bytes = input.slice()
  const chunks = webpChunks(bytes)
  if (!chunks) throw new Error('L’estructura del WebP no és la que s’esperava.')
  const done = new Set<string>()
  const parts: Uint8Array[] = [bytes.subarray(0, 12)]
  for (const chunk of chunks) {
    if (chunk.type === 'XMP ') {
      done.add('bloc XMP')
      continue
    }
    if (chunk.type === 'EXIF') {
      const skip = startsWith(bytes, EXIF_ID, chunk.dataAt) ? 6 : 0
      scrubExif(bytes, chunk.dataAt + skip, chunk.length - skip)?.removed.forEach((item) => done.add(item))
    }
    if (chunk.type === 'VP8X') bytes[chunk.dataAt] &= ~0x04 // ja no hi ha XMP
    parts.push(bytes.subarray(chunk.at, chunk.end))
  }
  const out = concat(parts)
  writeU32le(out, 4, out.length - 8)
  return { bytes: out, done: [...done], remaining: [] }
}

/* ─────────────────────────── HEIC, HEIF i AVIF ─────────────────────────── */

interface Box {
  type: string
  at: number
  dataAt: number
  end: number
}

function boxes(bytes: Uint8Array, from: number, to: number): Box[] {
  const out: Box[] = []
  let at = from
  while (at + 8 <= to) {
    let size = u32be(bytes, at)
    const type = latin1(bytes, at + 4, at + 8)
    let header = 8
    if (size === 1) {
      if (at + 16 > to) break
      size = u32be(bytes, at + 8) * 2 ** 32 + u32be(bytes, at + 12)
      header = 16
    } else if (size === 0) size = to - at
    if (size < header || at + size > to) break
    out.push({ type, at, dataAt: at + header, end: at + size })
    at += size
  }
  return out
}

const readSized = (bytes: Uint8Array, at: number, size: number): number =>
  size === 0 ? 0 : size === 2 ? u16be(bytes, at) : size === 4 ? u32be(bytes, at) : u32be(bytes, at) * 2 ** 32 + u32be(bytes, at + 4)

interface HeifItem {
  id: number
  type: string
  contentType: string
  /** Trams absoluts dins del fitxer. */
  extents: { at: number; length: number }[]
}

function heifItems(bytes: Uint8Array): HeifItem[] | null {
  const top = boxes(bytes, 0, bytes.length)
  const meta = top.find((box) => box.type === 'meta')
  if (!meta) return null
  const children = boxes(bytes, meta.dataAt + 4, meta.end)
  const items = new Map<number, HeifItem>()

  const iinf = children.find((box) => box.type === 'iinf')
  if (iinf) {
    const version = bytes[iinf.dataAt]
    const start = iinf.dataAt + 4 + (version === 0 ? 2 : 4)
    for (const infe of boxes(bytes, start, iinf.end).filter((box) => box.type === 'infe')) {
      const v = bytes[infe.dataAt]
      if (v < 2) continue
      let at = infe.dataAt + 4
      const id = v === 2 ? u16be(bytes, at) : u32be(bytes, at)
      at += v === 2 ? 2 : 4
      at += 2 // protecció
      const type = latin1(bytes, at, at + 4)
      at += 4
      let contentType = ''
      if (type === 'mime') {
        at = bytes.indexOf(0, at) + 1 // nom
        const end = bytes.indexOf(0, at)
        contentType = latin1(bytes, at, end === -1 ? infe.end : Math.min(end, infe.end))
      }
      items.set(id, { id, type, contentType, extents: [] })
    }
  }

  const iloc = children.find((box) => box.type === 'iloc')
  const idat = children.find((box) => box.type === 'idat')
  if (iloc) {
    const version = bytes[iloc.dataAt]
    let at = iloc.dataAt + 4
    const offsetSize = bytes[at] >> 4
    const lengthSize = bytes[at] & 0x0f
    const baseSize = bytes[at + 1] >> 4
    const indexSize = version === 1 || version === 2 ? bytes[at + 1] & 0x0f : 0
    at += 2
    const count = version < 2 ? u16be(bytes, at) : u32be(bytes, at)
    at += version < 2 ? 2 : 4
    for (let i = 0; i < count && at < iloc.end; i += 1) {
      const id = version < 2 ? u16be(bytes, at) : u32be(bytes, at)
      at += version < 2 ? 2 : 4
      let method = 0
      if (version === 1 || version === 2) {
        method = u16be(bytes, at) & 0x0f
        at += 2
      }
      at += 2 // data_reference_index
      const base = readSized(bytes, at, baseSize)
      at += baseSize
      const extentCount = u16be(bytes, at)
      at += 2
      const item = items.get(id)
      for (let e = 0; e < extentCount; e += 1) {
        at += indexSize
        const offset = readSized(bytes, at, offsetSize)
        at += offsetSize
        const length = readSized(bytes, at, lengthSize)
        at += lengthSize
        const origin = method === 1 && idat ? idat.dataAt : 0
        if (item && (method === 0 || method === 1)) item.extents.push({ at: origin + base + offset, length })
      }
    }
  }
  return [...items.values()]
}

const isXmpItem = (item: HeifItem) => item.type === 'mime' && /rdf\+xml|xmp/i.test(item.contentType)

function inspectHeic(bytes: Uint8Array): Collected {
  const out = collector()
  const items = heifItems(bytes)
  if (!items) {
    out.notes.push('No s’ha trobat la taula d’elements del fitxer HEIF.')
    return out
  }
  for (const item of items) {
    const extent = item.extents[0]
    if (!extent || extent.at + extent.length > bytes.length) continue
    if (item.type === 'Exif') {
      const tiffOffset = u32be(bytes, extent.at)
      const tiff = extent.at + 4 + tiffOffset
      addExif(out, bytes, tiff, extent.at + extent.length - tiff)
    } else if (isXmpItem(item)) {
      addXmp(out, utf8(bytes.subarray(extent.at, extent.at + extent.length)))
    }
  }
  return out
}

function cleanHeic(input: Uint8Array): CleanResult {
  const bytes = input.slice()
  const items = heifItems(bytes)
  if (!items) throw new Error('No s’ha trobat la taula d’elements del fitxer HEIF.')
  const done = new Set<string>()
  let keptOrientation = false
  for (const item of items) {
    const extent = item.extents[0]
    if (!extent || extent.at + extent.length > bytes.length) continue
    if (item.type === 'Exif') {
      const tiff = extent.at + 4 + u32be(bytes, extent.at)
      const scrub = scrubExif(bytes, tiff, extent.at + extent.length - tiff)
      scrub?.removed.forEach((entry) => done.add(entry))
      keptOrientation ||= scrub?.keptOrientation ?? false
    } else if (isXmpItem(item)) {
      for (const part of item.extents) bytes.fill(0x20, part.at, Math.min(part.at + part.length, bytes.length))
      done.add('bloc XMP')
    }
  }
  return {
    bytes,
    done: [...done],
    remaining: keptOrientation ? ['Orientació de la foto (cal per veure-la dreta).'] : [],
  }
}

/* ──────────────────────────────── entrada ──────────────────────────────── */

export type ImageFormat = 'jpeg' | 'png' | 'webp' | 'heic'

const toInspection = (format: ImageFormat, collected: Collected): Inspection => ({
  format,
  fields: collected.fields,
  gps: collected.gps,
  notes: collected.notes,
  cleanable: true,
})

export async function inspectImage(format: ImageFormat, bytes: Uint8Array): Promise<Inspection> {
  if (format === 'jpeg') return toInspection(format, inspectJpeg(bytes))
  if (format === 'png') return toInspection(format, await inspectPng(bytes))
  if (format === 'webp') return toInspection(format, inspectWebp(bytes))
  return toInspection(format, inspectHeic(bytes))
}

export function cleanImage(format: ImageFormat, bytes: Uint8Array): CleanResult {
  if (format === 'jpeg') return cleanJpeg(bytes)
  if (format === 'png') return cleanPng(bytes)
  if (format === 'webp') return cleanWebp(bytes)
  return cleanHeic(bytes)
}
