import { utf8 } from './bytes'
import type { GpsPoint, MetaField, MetaGroup, MetaRisk } from './types'

/**
 * EXIF: l'estructura TIFF que porten les fotos (JPEG, HEIC, WebP i PNG).
 *
 * La lectura recorre IFD0, la subdirectori EXIF, la de GPS, la
 * d'interoperabilitat i IFD1 (la miniatura). La neteja es fa AL LLOC: no
 * s'esborra cap directori ni es mou cap byte, només s'omplen de zeros els
 * valors que poden identificar algú i es buida la directori de GPS. Així
 * l'estructura continua sent vàlida, qualsevol visor l'obre, i es conserven
 * les etiquetes que calen per veure bé la foto (sobretot l'orientació: sense
 * ella, una foto feta amb el mòbil dret surt tombada).
 */

const TYPE_SIZES = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 4]

type IfdName = 'ifd0' | 'ifd1' | 'exif' | 'gps' | 'interop'

interface Entry {
  ifd: IfdName
  tag: number
  type: number
  count: number
  /** Posició absoluta de l'entrada de 12 bytes. */
  entryAt: number
  /** Posició absoluta del valor (dins de l'entrada si hi cap). */
  valueAt: number
  size: number
}

interface Tiff {
  little: boolean
  start: number
  end: number
  entries: Entry[]
  /** Posició absoluta de cada directori (el comptador de dos bytes). */
  ifds: Partial<Record<IfdName, number>>
  /** On és escrit el punter a IFD1, per poder-lo posar a zero. */
  nextIfdPointerAt: number | null
}

const POINTERS: Record<number, IfdName> = { 0x8769: 'exif', 0x8825: 'gps', 0xa005: 'interop' }

function readTiff(bytes: Uint8Array, start: number, length: number): Tiff | null {
  const end = Math.min(bytes.length, start + length)
  if (end - start < 8) return null
  const order = String.fromCharCode(bytes[start], bytes[start + 1])
  if (order !== 'II' && order !== 'MM') return null
  const little = order === 'II'
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  const u16 = (at: number) => view.getUint16(at, little)
  const u32 = (at: number) => view.getUint32(at, little)
  if (u16(start + 2) !== 42) return null

  const tiff: Tiff = { little, start, end, entries: [], ifds: {}, nextIfdPointerAt: null }
  const visited = new Set<number>()

  const walk = (relative: number, name: IfdName) => {
    const at = start + relative
    if (relative < 8 || at + 2 > end || visited.has(at)) return
    visited.add(at)
    tiff.ifds[name] = at
    const count = u16(at)
    if (count > 1000 || at + 2 + count * 12 + 4 > end) return
    for (let i = 0; i < count; i += 1) {
      const entryAt = at + 2 + i * 12
      const tag = u16(entryAt)
      const type = u16(entryAt + 2)
      const n = u32(entryAt + 4)
      const unit = TYPE_SIZES[type] ?? 0
      const size = unit * n
      if (unit === 0 || size > end - start) continue
      const valueAt = size <= 4 ? entryAt + 8 : start + u32(entryAt + 8)
      if (valueAt + size > end) continue
      tiff.entries.push({ ifd: name, tag, type, count: n, entryAt, valueAt, size })
      const child = POINTERS[tag]
      if (child && (name === 'ifd0' || name === 'exif')) walk(u32(entryAt + 8), child)
    }
    if (name === 'ifd0') {
      const pointerAt = at + 2 + count * 12
      tiff.nextIfdPointerAt = pointerAt
      const next = u32(pointerAt)
      if (next !== 0) walk(next, 'ifd1')
    }
  }

  walk(u32(start + 4), 'ifd0')
  return tiff
}

/* ─────────────────────────────── lectura ───────────────────────────────── */

interface TagInfo {
  label: string
  group: MetaGroup
  risk: MetaRisk
  why?: string
}

const TAGS: Record<number, TagInfo> = {
  0x010e: { label: 'Descripció', group: 'content', risk: 'medium' },
  0x010f: { label: 'Fabricant', group: 'device', risk: 'low' },
  0x0110: { label: 'Model', group: 'device', risk: 'low', why: 'Diu amb quin aparell s’ha fet.' },
  0x0131: { label: 'Programari', group: 'software', risk: 'low' },
  0x0132: { label: 'Data de modificació', group: 'time', risk: 'low' },
  0x013b: { label: 'Autor', group: 'identity', risk: 'high', why: 'Un nom de persona.' },
  0x013c: { label: 'Ordinador', group: 'device', risk: 'medium', why: 'Sovint porta el nom de l’ordinador o de la persona.' },
  0x8298: { label: 'Drets d’autor', group: 'identity', risk: 'medium' },
  0x9003: { label: 'Data i hora de la foto', group: 'time', risk: 'medium', why: 'Diu quan eres on es va fer.' },
  0x9004: { label: 'Data de digitalització', group: 'time', risk: 'low' },
  0x9010: { label: 'Zona horària', group: 'time', risk: 'low' },
  0x9011: { label: 'Zona horària de la foto', group: 'time', risk: 'low', why: 'Revela en quina zona horària eres.' },
  0x9286: { label: 'Comentari', group: 'content', risk: 'medium' },
  0x927c: { label: 'Dades internes del fabricant', group: 'device', risk: 'medium', why: 'Bloc opac que sovint inclou el número de sèrie de l’aparell.' },
  0xa420: { label: 'Identificador únic de la imatge', group: 'device', risk: 'medium' },
  0xa430: { label: 'Propietari de la càmera', group: 'identity', risk: 'high', why: 'Un nom de persona.' },
  0xa431: { label: 'Número de sèrie de la càmera', group: 'device', risk: 'high', why: 'Lliga totes les fotos fetes amb el mateix aparell, publicades on sigui.' },
  0xa433: { label: 'Fabricant de l’objectiu', group: 'device', risk: 'low' },
  0xa434: { label: 'Objectiu', group: 'device', risk: 'low' },
  0xa435: { label: 'Número de sèrie de l’objectiu', group: 'device', risk: 'high', why: 'Lliga totes les fotos fetes amb el mateix objectiu.' },
  0x9c9b: { label: 'Títol (Windows)', group: 'content', risk: 'medium' },
  0x9c9c: { label: 'Comentari (Windows)', group: 'content', risk: 'medium' },
  0x9c9d: { label: 'Autor (Windows)', group: 'identity', risk: 'high', why: 'Un nom de persona.' },
  0x9c9e: { label: 'Paraules clau (Windows)', group: 'content', risk: 'low' },
  0x9c9f: { label: 'Tema (Windows)', group: 'content', risk: 'low' },
}

/**
 * Etiquetes que es conserven en netejar: només les que calen per mostrar bé la
 * imatge o per mantenir l'estructura. Tota la resta s'omple de zeros.
 */
const KEEP = new Set([
  0x0100, 0x0101, 0x0102, 0x0103, 0x0106, 0x0112, 0x0115, 0x011a, 0x011b, 0x011c, 0x0128, 0x0213,
  0x8769, 0x8825, 0xa005, 0x9000, 0xa000, 0x9101, 0xa001, 0xa002, 0xa003, 0x0001, 0x0002,
])

const ORIENTATIONS: Record<number, string> = {
  1: 'normal',
  3: 'girada 180°',
  6: 'girada 90° a la dreta',
  8: 'girada 90° a l’esquerra',
}

function readers(bytes: Uint8Array, tiff: Tiff) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  const u16 = (at: number) => view.getUint16(at, tiff.little)
  const u32 = (at: number) => view.getUint32(at, tiff.little)
  const text = (entry: Entry): string => {
    const raw = bytes.subarray(entry.valueAt, entry.valueAt + entry.size)
    if (entry.tag >= 0x9c9b && entry.tag <= 0x9c9f) {
      // Etiquetes XP: UCS-2 little endian, sempre.
      return new TextDecoder('utf-16le').decode(raw).replace(/\0+$/, '')
    }
    if (entry.tag === 0x9286) {
      const code = String.fromCharCode(...raw.subarray(0, 8)).replace(/\0/g, '')
      const body = raw.subarray(8)
      if (code === 'UNICODE') return new TextDecoder(tiff.little ? 'utf-16le' : 'utf-16be').decode(body).replace(/\0+$/, '')
      return utf8(body).replace(/\0+$/, '')
    }
    const nul = raw.indexOf(0)
    return utf8(nul === -1 ? raw : raw.subarray(0, nul))
  }
  const rational = (at: number) => {
    const den = u32(at + 4)
    return den === 0 ? 0 : u32(at) / den
  }
  return { u16, u32, text, rational }
}

export interface ExifReading {
  fields: MetaField[]
  gps: GpsPoint | null
  orientation: number | null
  thumbnail: boolean
}

export function readExif(bytes: Uint8Array, start: number, length: number, source = 'EXIF'): ExifReading | null {
  const tiff = readTiff(bytes, start, length)
  if (!tiff) return null
  const { u16, text, rational } = readers(bytes, tiff)
  const fields: MetaField[] = []
  let orientation: number | null = null

  for (const entry of tiff.entries) {
    if (entry.ifd === 'gps' || entry.ifd === 'ifd1' || entry.ifd === 'interop') continue
    if (entry.tag === 0x0112 && entry.type === 3) orientation = u16(entry.valueAt)
    const info = TAGS[entry.tag]
    if (!info) continue
    let value: string
    if (isZero(bytes, entry)) continue
    if (entry.tag === 0x927c) value = `${entry.size} bytes`
    else if (entry.type === 2 || entry.type === 7 || entry.type === 1) value = text(entry)
    else continue
    value = value.trim()
    if (value.length === 0 || /^\0*$/.test(value)) continue
    fields.push({ key: `exif:${entry.tag.toString(16)}`, label: info.label, value, group: info.group, risk: info.risk, why: info.why })
  }

  if (orientation !== null && orientation !== 1) {
    fields.push({
      key: 'exif:orientation',
      label: 'Orientació',
      value: ORIENTATIONS[orientation] ?? `codi ${orientation}`,
      group: 'other',
      risk: 'low',
      why: 'Es conserva en netejar: sense ella la foto es veuria tombada.',
    })
  }

  /* GPS. */
  const gpsEntries = new Map(tiff.entries.filter((entry) => entry.ifd === 'gps').map((entry) => [entry.tag, entry]))
  let gps: GpsPoint | null = null
  const coordinate = (valueTag: number, refTag: number, negative: string): number | null => {
    const entry = gpsEntries.get(valueTag)
    const ref = gpsEntries.get(refTag)
    if (!entry || entry.type !== 5 || entry.count < 3) return null
    const value = rational(entry.valueAt) + rational(entry.valueAt + 8) / 60 + rational(entry.valueAt + 16) / 3600
    const sign = ref && String.fromCharCode(bytes[ref.valueAt]).toUpperCase() === negative ? -1 : 1
    return Number.isFinite(value) ? sign * value : null
  }
  const lat = coordinate(2, 1, 'S')
  const lon = coordinate(4, 3, 'W')
  if (lat !== null && lon !== null && Math.abs(lat) <= 90 && Math.abs(lon) <= 180 && !(lat === 0 && lon === 0)) {
    const altEntry = gpsEntries.get(6)
    const altRef = gpsEntries.get(5)
    const altitude = altEntry && altEntry.type === 5 ? rational(altEntry.valueAt) * (altRef && bytes[altRef.valueAt] === 1 ? -1 : 1) : null
    gps = { lat, lon, altitude: altitude !== null && Number.isFinite(altitude) ? altitude : null }
    fields.push({
      key: 'exif:gps',
      label: 'Coordenades GPS',
      value: `${lat.toFixed(6)}, ${lon.toFixed(6)}${gps.altitude !== null ? ` · ${Math.round(gps.altitude)} m` : ''}`,
      group: 'location',
      risk: 'high',
      why: 'El punt exacte on es va fer la foto, sovint a pocs metres: casa teva, la feina, l’escola.',
    })
  }
  const gpsDate = gpsEntries.get(29)
  if (gpsDate && gpsDate.type === 2) {
    const value = text(gpsDate).trim()
    if (value) fields.push({ key: 'exif:gpsdate', label: 'Data del GPS', value, group: 'time', risk: 'low' })
  }
  if (!gps && gpsEntries.size > 0 && [...gpsEntries.keys()].some((tag) => tag > 0)) {
    // Hi ha directori de GPS però sense coordenades llegibles (o a zero).
    const meaningful = [...gpsEntries.values()].some((entry) => entry.tag !== 0 && !isZero(bytes, entry))
    if (meaningful) {
      fields.push({ key: 'exif:gps-partial', label: 'Dades de GPS', value: 'presents, però sense coordenades completes', group: 'location', risk: 'medium' })
    }
  }

  const thumbnail = tiff.entries.some((entry) => entry.ifd === 'ifd1' && entry.tag === 0x0201)
  if (thumbnail) {
    fields.push({
      key: 'exif:thumbnail',
      label: 'Miniatura incrustada',
      value: 'sí',
      group: 'content',
      risk: 'medium',
      why: 'Una còpia petita de la foto que no sempre s’actualitza en retallar-la: pot ensenyar el que has tallat.',
    })
  }

  for (const field of fields) field.key = field.key.replace('exif:', `${source.toLowerCase()}:`)
  return { fields, gps, orientation, thumbnail }
}

const isZero = (bytes: Uint8Array, entry: Entry) => {
  for (let i = 0; i < entry.size; i += 1) if (bytes[entry.valueAt + i] !== 0) return false
  return true
}

/* ─────────────────────────────── neteja ────────────────────────────────── */

export interface ExifScrub {
  removed: string[]
  keptOrientation: boolean
}

/**
 * Neteja al lloc. Modifica `bytes` directament i en conserva la mida exacta.
 * Retorna què ha tret, amb etiquetes llegibles.
 */
export function scrubExif(bytes: Uint8Array, start: number, length: number): ExifScrub | null {
  const tiff = readTiff(bytes, start, length)
  if (!tiff) return null
  const { u16, u32 } = readers(bytes, tiff)
  const removed = new Set<string>()
  const zero = (at: number, size: number) => bytes.fill(0, Math.max(at, tiff.start), Math.min(at + size, tiff.end))

  for (const entry of tiff.entries) {
    if (entry.ifd === 'gps') {
      if (entry.tag !== 0 && !isZero(bytes, entry)) removed.add('ubicació GPS')
      zero(entry.valueAt, entry.size)
      continue
    }
    if (entry.ifd === 'ifd1') continue
    if (entry.ifd === 'interop') continue
    if (KEEP.has(entry.tag)) continue
    if (!isZero(bytes, entry)) removed.add(TAGS[entry.tag]?.label.toLowerCase() ?? 'altres camps')
    zero(entry.valueAt, entry.size)
  }

  /* La directori de GPS queda buida: comptador a zero i entrades esborrades. */
  const gpsAt = tiff.ifds.gps
  if (gpsAt !== undefined) {
    const count = u16(gpsAt)
    zero(gpsAt, 2 + count * 12)
  }

  /* IFD1: la miniatura. Se n'esborren les dades i es desenganxa de IFD0. */
  const ifd1 = tiff.ifds.ifd1
  if (ifd1 !== undefined) {
    const offset = tiff.entries.find((entry) => entry.ifd === 'ifd1' && entry.tag === 0x0201)
    const size = tiff.entries.find((entry) => entry.ifd === 'ifd1' && entry.tag === 0x0202)
    if (offset && size) {
      zero(tiff.start + u32(offset.valueAt), u32(size.valueAt))
      removed.add('miniatura incrustada')
    }
    const count = u16(ifd1)
    zero(ifd1, 2 + count * 12 + 4)
    if (tiff.nextIfdPointerAt !== null) zero(tiff.nextIfdPointerAt, 4)
  }

  const orientation = tiff.entries.find((entry) => entry.ifd === 'ifd0' && entry.tag === 0x0112)
  return { removed: [...removed], keptOrientation: orientation !== undefined && u16(orientation.valueAt) !== 1 }
}
