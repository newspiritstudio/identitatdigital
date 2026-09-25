import { concat, crc32, inflate, latin1, u16le, u32le, utf8, writeU16le, writeU32le } from './bytes'

/**
 * Lectura i reescriptura mínimes de fitxers ZIP, que és el que són per dins
 * els documents d'Office (.docx, .xlsx, .pptx) i d'OpenDocument (.odt…).
 *
 * En reescriure, les entrades que no canvien es copien byte a byte (comprimides
 * tal com eren) i les que canvien es desen sense comprimir, amb el CRC nou. No
 * es fa servir ZIP64: si el fitxer el necessita, s'avisa i no es toca.
 */

export interface ZipEntry {
  name: string
  method: number
  flags: number
  crc: number
  compressedSize: number
  size: number
  localOffset: number
  /** Registre original del directori central, per copiar-ne els camps. */
  central: Uint8Array
}

export interface ZipArchive {
  bytes: Uint8Array
  entries: ZipEntry[]
  centralOffset: number
}

export function readZip(bytes: Uint8Array): ZipArchive | null {
  // El registre final és als últims 22 bytes, més un comentari de fins a 64 kB.
  let eocd = -1
  for (let at = bytes.length - 22; at >= Math.max(0, bytes.length - 22 - 65535); at -= 1) {
    if (u32le(bytes, at) === 0x06054b50) {
      eocd = at
      break
    }
  }
  if (eocd === -1) return null
  const count = u16le(bytes, eocd + 10)
  const centralOffset = u32le(bytes, eocd + 16)
  if (count === 0xffff || centralOffset === 0xffffffff) return null // ZIP64
  const entries: ZipEntry[] = []
  let at = centralOffset
  for (let i = 0; i < count; i += 1) {
    if (at + 46 > bytes.length || u32le(bytes, at) !== 0x02014b50) return null
    const nameLength = u16le(bytes, at + 28)
    const extraLength = u16le(bytes, at + 30)
    const commentLength = u16le(bytes, at + 32)
    const flags = u16le(bytes, at + 8)
    const rawName = bytes.subarray(at + 46, at + 46 + nameLength)
    const end = at + 46 + nameLength + extraLength + commentLength
    entries.push({
      name: flags & 0x800 ? utf8(rawName) : latin1(rawName),
      method: u16le(bytes, at + 10),
      flags,
      crc: u32le(bytes, at + 16),
      compressedSize: u32le(bytes, at + 20),
      size: u32le(bytes, at + 24),
      localOffset: u32le(bytes, at + 42),
      central: bytes.slice(at, end),
    })
    at = end
  }
  return { bytes, entries, centralOffset }
}

const dataStart = (zip: ZipArchive, entry: ZipEntry) => {
  const at = entry.localOffset
  if (u32le(zip.bytes, at) !== 0x04034b50) throw new Error(`Capçalera local malmesa a ${entry.name}.`)
  return at + 30 + u16le(zip.bytes, at + 26) + u16le(zip.bytes, at + 28)
}

/** Contingut descomprimit d'una entrada. */
export async function readEntry(zip: ZipArchive, entry: ZipEntry): Promise<Uint8Array> {
  const start = dataStart(zip, entry)
  const data = zip.bytes.subarray(start, start + entry.compressedSize)
  if (entry.method === 0) return data
  if (entry.method === 8) return inflate(data, 'deflate-raw')
  throw new Error(`Mètode de compressió no admès (${entry.method}) a ${entry.name}.`)
}

export const findEntry = (zip: ZipArchive, name: string) => zip.entries.find((entry) => entry.name === name)

/** Nou ZIP amb algunes entrades substituïdes. L'ordre es conserva. */
export function rewriteZip(zip: ZipArchive, replacements: Map<string, Uint8Array>): Uint8Array {
  const byOffset = [...zip.entries].sort((a, b) => a.localOffset - b.localOffset)
  const nextOffset = new Map<ZipEntry, number>()
  byOffset.forEach((entry, index) => nextOffset.set(entry, byOffset[index + 1]?.localOffset ?? zip.centralOffset))

  const locals: Uint8Array[] = []
  const centrals: Uint8Array[] = []
  let offset = 0
  for (const entry of zip.entries) {
    const replacement = replacements.get(entry.name)
    const central = entry.central.slice()
    if (!replacement) {
      const raw = zip.bytes.subarray(entry.localOffset, nextOffset.get(entry))
      locals.push(raw)
      writeU32le(central, 42, offset)
      centrals.push(central)
      offset += raw.length
      continue
    }
    const name = entry.central.subarray(46, 46 + u16le(entry.central, 28))
    const crc = crc32(replacement)
    const flags = entry.flags & 0x800 // només es conserva la marca d'UTF-8
    const header = new Uint8Array(30 + name.length)
    writeU32le(header, 0, 0x04034b50)
    writeU16le(header, 4, 20)
    writeU16le(header, 6, flags)
    writeU16le(header, 8, 0)
    header.set(entry.central.subarray(12, 16), 10) // data i hora originals
    writeU32le(header, 14, crc)
    writeU32le(header, 18, replacement.length)
    writeU32le(header, 22, replacement.length)
    writeU16le(header, 26, name.length)
    writeU16le(header, 28, 0)
    header.set(name, 30)
    locals.push(header, replacement)
    writeU16le(central, 8, flags)
    writeU16le(central, 10, 0)
    writeU32le(central, 16, crc)
    writeU32le(central, 20, replacement.length)
    writeU32le(central, 24, replacement.length)
    writeU32le(central, 42, offset)
    centrals.push(central)
    offset += header.length + replacement.length
  }
  const centralBytes = concat(centrals)
  const end = new Uint8Array(22)
  writeU32le(end, 0, 0x06054b50)
  writeU16le(end, 8, zip.entries.length)
  writeU16le(end, 10, zip.entries.length)
  writeU32le(end, 12, centralBytes.length)
  writeU32le(end, 16, offset)
  return concat([...locals, centralBytes, end])
}
