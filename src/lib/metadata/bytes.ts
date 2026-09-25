/** Utilitats de bytes per als analitzadors de formats. */

export const latin1 = (bytes: Uint8Array, start = 0, end = bytes.length): string => {
  let out = ''
  const stop = Math.min(end, bytes.length)
  for (let i = start; i < stop; i += 1) out += String.fromCharCode(bytes[i])
  return out
}

export const utf8 = (bytes: Uint8Array): string => new TextDecoder('utf-8', { fatal: false }).decode(bytes)

export const ascii = (text: string): Uint8Array => {
  const out = new Uint8Array(text.length)
  for (let i = 0; i < text.length; i += 1) out[i] = text.charCodeAt(i) & 0xff
  return out
}

export const startsWith = (bytes: Uint8Array, signature: ArrayLike<number> | string, at = 0): boolean => {
  const sig = typeof signature === 'string' ? [...ascii(signature)] : signature
  if (bytes.length < at + sig.length) return false
  for (let i = 0; i < sig.length; i += 1) if (bytes[at + i] !== sig[i]) return false
  return true
}

export const indexOf = (bytes: Uint8Array, needle: Uint8Array, from = 0, to = bytes.length): number => {
  const last = Math.min(to, bytes.length) - needle.length
  outer: for (let i = from; i <= last; i += 1) {
    for (let j = 0; j < needle.length; j += 1) if (bytes[i + j] !== needle[j]) continue outer
    return i
  }
  return -1
}

export const concat = (parts: Uint8Array[]): Uint8Array => {
  const total = parts.reduce((sum, part) => sum + part.length, 0)
  const out = new Uint8Array(total)
  let offset = 0
  for (const part of parts) {
    out.set(part, offset)
    offset += part.length
  }
  return out
}

export const u16be = (b: Uint8Array, o: number) => (b[o] << 8) | b[o + 1]
export const u32be = (b: Uint8Array, o: number) => ((b[o] << 24) >>> 0) + ((b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3])
export const u16le = (b: Uint8Array, o: number) => b[o] | (b[o + 1] << 8)
export const u32le = (b: Uint8Array, o: number) => (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16)) + ((b[o + 3] << 24) >>> 0)

export const writeU32le = (b: Uint8Array, o: number, value: number) => {
  b[o] = value & 0xff
  b[o + 1] = (value >>> 8) & 0xff
  b[o + 2] = (value >>> 16) & 0xff
  b[o + 3] = (value >>> 24) & 0xff
}
export const writeU16le = (b: Uint8Array, o: number, value: number) => {
  b[o] = value & 0xff
  b[o + 1] = (value >>> 8) & 0xff
}

let crcTable: Uint32Array | null = null

/** CRC-32 (el de zip i PNG). */
export const crc32 = (bytes: Uint8Array): number => {
  if (!crcTable) {
    crcTable = new Uint32Array(256)
    for (let n = 0; n < 256; n += 1) {
      let c = n
      for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
      crcTable[n] = c >>> 0
    }
  }
  let crc = 0xffffffff
  for (let i = 0; i < bytes.length; i += 1) crc = crcTable[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

/** Descomprimeix amb l'API del navegador (també disponible a Node 18+). */
export const inflate = async (bytes: Uint8Array, format: 'deflate' | 'deflate-raw'): Promise<Uint8Array> => {
  const stream = new Blob([bytes as BlobPart]).stream().pipeThrough(new DecompressionStream(format))
  return new Uint8Array(await new Response(stream).arrayBuffer())
}

/** Text curt per mostrar: sense caràcters de control i amb límit de llargada. */
export const displayText = (value: string, max = 300): string => {
  const clean = value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '').trim()
  return clean.length > max ? `${clean.slice(0, max)}…` : clean
}
