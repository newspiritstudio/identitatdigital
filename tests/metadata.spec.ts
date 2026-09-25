import { describe, expect, it } from 'vitest'

import { ascii, concat, crc32, latin1, utf8, writeU16le, writeU32le } from '@/lib/metadata/bytes'
import { clean, cleanFileName, detectFormat, inspect } from '@/lib/metadata'
import { readZip, readEntry, findEntry } from '@/lib/metadata/zip'

/* ─────────────────────────── constructors de fitxers ─────────────────────────── */

interface TiffEntry {
  tag: number
  type: number
  count: number
  data: Uint8Array
}

const text = (tag: number, value: string): TiffEntry => {
  const data = ascii(`${value}\0`)
  return { tag, type: 2, count: data.length, data }
}
const short = (tag: number, value: number): TiffEntry => {
  const data = new Uint8Array(2)
  writeU16le(data, 0, value)
  return { tag, type: 3, count: 1, data }
}
const rationals = (tag: number, values: [number, number][]): TiffEntry => {
  const data = new Uint8Array(values.length * 8)
  values.forEach(([num, den], index) => {
    writeU32le(data, index * 8, num)
    writeU32le(data, index * 8 + 4, den)
  })
  return { tag, type: 5, count: values.length, data }
}

/** TIFF little endian amb IFD0 i, si cal, una directori de GPS. */
function tiff(ifd0: TiffEntry[], gps: TiffEntry[] = []): Uint8Array {
  const withPointer = gps.length > 0 ? [...ifd0, { tag: 0x8825, type: 4, count: 1, data: new Uint8Array(4) }] : ifd0
  const sorted = withPointer.sort((a, b) => a.tag - b.tag)
  const ifd0Size = 2 + sorted.length * 12 + 4
  const gpsAt = 8 + ifd0Size
  const gpsSize = gps.length > 0 ? 2 + gps.length * 12 + 4 : 0
  let dataAt = gpsAt + gpsSize
  const out = new Uint8Array(4096)
  out.set(ascii('II'), 0)
  writeU16le(out, 2, 42)
  writeU32le(out, 4, 8)
  const writeIfd = (at: number, entries: TiffEntry[]) => {
    writeU16le(out, at, entries.length)
    entries.forEach((entry, index) => {
      const entryAt = at + 2 + index * 12
      writeU16le(out, entryAt, entry.tag)
      writeU16le(out, entryAt + 2, entry.type)
      writeU32le(out, entryAt + 4, entry.count)
      if (entry.tag === 0x8825) writeU32le(out, entryAt + 8, gpsAt)
      else if (entry.data.length <= 4) out.set(entry.data, entryAt + 8)
      else {
        writeU32le(out, entryAt + 8, dataAt)
        out.set(entry.data, dataAt)
        dataAt += entry.data.length + (entry.data.length % 2)
      }
    })
  }
  writeIfd(8, sorted)
  if (gps.length > 0) writeIfd(gpsAt, gps)
  return out.slice(0, dataAt)
}

const GPS = [
  text(1, 'N'),
  rationals(2, [
    [41, 1],
    [23, 1],
    [2400, 100],
  ]),
  text(3, 'E'),
  rationals(4, [
    [2, 1],
    [10, 1],
    [0, 1],
  ]),
]

const EXIF = tiff([text(0x010f, 'Canon'), text(0x0110, 'EOS R6'), short(0x0112, 6), text(0x013b, 'Joana Puig')], GPS)

const XMP = `<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF><rdf:Description xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/" photoshop:City="Girona"><dc:creator><rdf:Seq><rdf:li>Joana Puig</rdf:li></rdf:Seq></dc:creator></rdf:Description></rdf:RDF></x:xmpmeta>`

const segment = (marker: number, payload: Uint8Array) => {
  const head = new Uint8Array(4)
  head[0] = 0xff
  head[1] = marker
  head[2] = (payload.length + 2) >> 8
  head[3] = (payload.length + 2) & 0xff
  return concat([head, payload])
}

/** Els «píxels» són un escaneig fals: només cal que no es toquin. */
const SCAN = new Uint8Array([0xff, 0xda, 0x00, 0x02, 1, 2, 3, 4, 5, 0xff, 0xd9])

function jpeg(): Uint8Array {
  return concat([
    new Uint8Array([0xff, 0xd8]),
    segment(0xe1, concat([ascii('Exif\0\0'), EXIF])),
    segment(0xe1, concat([ascii('http://ns.adobe.com/xap/1.0/\0'), new TextEncoder().encode(XMP)])),
    segment(0xfe, ascii('Fet a casa')),
    segment(0xdb, new Uint8Array(65)),
    SCAN,
  ])
}

const pngChunk = (type: string, data: Uint8Array) => {
  const out = new Uint8Array(12 + data.length)
  const view = new DataView(out.buffer)
  view.setUint32(0, data.length)
  out.set(ascii(type), 4)
  out.set(data, 8)
  view.setUint32(8 + data.length, crc32(out.subarray(4, 8 + data.length)))
  return out
}

function png(): Uint8Array {
  return concat([
    new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    pngChunk('IHDR', new Uint8Array([0, 0, 0, 1, 0, 0, 0, 1, 8, 2, 0, 0, 0])),
    pngChunk('tEXt', ascii('parameters\0una casa a la platja, Steps: 20')),
    pngChunk('tEXt', ascii('Author\0Joana Puig')),
    pngChunk('eXIf', EXIF),
    pngChunk('IDAT', new Uint8Array([1, 2, 3])),
    pngChunk('IEND', new Uint8Array()),
  ])
}

const riffChunk = (type: string, data: Uint8Array) => {
  const out = new Uint8Array(8 + data.length + (data.length % 2))
  out.set(ascii(type), 0)
  writeU32le(out, 4, data.length)
  out.set(data, 8)
  return out
}

function webp(): Uint8Array {
  const vp8x = new Uint8Array(10)
  vp8x[0] = 0x08 | 0x04 // EXIF i XMP
  const body = concat([
    ascii('WEBP'),
    riffChunk('VP8X', vp8x),
    riffChunk('VP8 ', new Uint8Array([9, 9, 9, 9])),
    riffChunk('EXIF', EXIF),
    riffChunk('XMP ', new TextEncoder().encode(XMP)),
  ])
  const head = new Uint8Array(8)
  head.set(ascii('RIFF'))
  writeU32le(head, 4, body.length)
  return concat([head, body])
}

async function deflateRaw(data: Uint8Array): Promise<Uint8Array> {
  const stream = new Blob([data as BlobPart]).stream().pipeThrough(new CompressionStream('deflate-raw'))
  return new Uint8Array(await new Response(stream).arrayBuffer())
}

/** ZIP amb les entrades comprimides (com els fa Word). */
async function zip(files: Record<string, string | Uint8Array>): Promise<Uint8Array> {
  const locals: Uint8Array[] = []
  const centrals: Uint8Array[] = []
  let offset = 0
  for (const [name, content] of Object.entries(files)) {
    const data = typeof content === 'string' ? new TextEncoder().encode(content) : content
    const compressed = await deflateRaw(data)
    const nameBytes = new TextEncoder().encode(name)
    const local = new Uint8Array(30 + nameBytes.length)
    writeU32le(local, 0, 0x04034b50)
    writeU16le(local, 4, 20)
    writeU16le(local, 8, 8)
    writeU32le(local, 14, crc32(data))
    writeU32le(local, 18, compressed.length)
    writeU32le(local, 22, data.length)
    writeU16le(local, 26, nameBytes.length)
    local.set(nameBytes, 30)
    const central = new Uint8Array(46 + nameBytes.length)
    writeU32le(central, 0, 0x02014b50)
    writeU16le(central, 4, 20)
    writeU16le(central, 6, 20)
    writeU16le(central, 10, 8)
    writeU32le(central, 16, crc32(data))
    writeU32le(central, 20, compressed.length)
    writeU32le(central, 24, data.length)
    writeU16le(central, 28, nameBytes.length)
    writeU32le(central, 42, offset)
    central.set(nameBytes, 46)
    locals.push(local, compressed)
    centrals.push(central)
    offset += local.length + compressed.length
  }
  const centralBytes = concat(centrals)
  const end = new Uint8Array(22)
  writeU32le(end, 0, 0x06054b50)
  writeU16le(end, 8, centrals.length)
  writeU16le(end, 10, centrals.length)
  writeU32le(end, 12, centralBytes.length)
  writeU32le(end, 16, offset)
  return concat([...locals, centralBytes, end])
}

const CORE = `<?xml version="1.0"?><cp:coreProperties xmlns:cp="c" xmlns:dc="d" xmlns:dcterms="t"><dc:title>Pressupost</dc:title><dc:creator>Joana Puig</dc:creator><cp:lastModifiedBy>Pere Soler</cp:lastModifiedBy><cp:revision>7</cp:revision><dcterms:created>2025-03-01T10:00:00Z</dcterms:created></cp:coreProperties>`
const APP = `<?xml version="1.0"?><Properties><Template>C:\\Users\\joana.puig\\Normal.dotm</Template><TotalTime>94</TotalTime><Application>Microsoft Office Word</Application><Company>Fusteria Puig SL</Company></Properties>`
const DOCUMENT = `<w:document><w:body><w:p><w:ins w:id="1" w:author="Pere Soler" w:date="2025-03-02T00:00:00Z"><w:r><w:t>afegit</w:t></w:r></w:ins></w:p></w:body></w:document>`
const COMMENTS = `<w:comments><w:comment w:id="0" w:author="Pere Soler" w:initials="PS"><w:p/></w:comment></w:comments>`

const docx = () =>
  zip({
    '[Content_Types].xml': '<Types/>',
    'docProps/core.xml': CORE,
    'docProps/app.xml': APP,
    'word/document.xml': DOCUMENT,
    'word/comments.xml': COMMENTS,
    'word/media/image1.jpeg': jpeg(),
  })

function pdf(): Uint8Array {
  const body = [
    '%PDF-1.7',
    '1 0 obj << /Type /Catalog /Metadata 3 0 R >> endobj',
    `2 0 obj << /Author (Joana Puig) /Producer (Writer \\(LibreOffice\\)) /CreationDate (D:20250301100000+01'00') /Title <FEFF00500072006500730073> >> endobj`,
    `3 0 obj << /Type /Metadata /Length ${XMP.length} >> stream`,
    XMP,
    'endstream endobj',
    'trailer << /Root 1 0 R /Info 2 0 R >>',
    '%%EOF',
  ].join('\n')
  return ascii(body)
}

const values = (fields: { label: string; value: string }[]) => Object.fromEntries(fields.map((field) => [field.label, field.value]))

/* ──────────────────────────────────── proves ──────────────────────────────────── */

describe('detectFormat', () => {
  it('reconeix el format pel contingut', async () => {
    expect(await detectFormat(jpeg())).toBe('jpeg')
    expect(await detectFormat(png())).toBe('png')
    expect(await detectFormat(webp())).toBe('webp')
    expect(await detectFormat(pdf())).toBe('pdf')
    expect(await detectFormat(await docx())).toBe('docx')
    expect(await detectFormat(await zip({ 'xl/workbook.xml': '<w/>' }))).toBe('xlsx')
    expect(await detectFormat(await zip({ mimetype: 'application/vnd.oasis.opendocument.text' }))).toBe('odf')
    expect(await detectFormat(await zip({ 'altres.txt': 'x' }))).toBe('unknown')
    expect(await detectFormat(ascii('hola'))).toBe('unknown')
    const heic = concat([new Uint8Array([0, 0, 0, 24]), ascii('ftypheic'), new Uint8Array(12)])
    expect(await detectFormat(heic)).toBe('heic')
  })
})

describe('JPEG', () => {
  it('llegeix EXIF, GPS, XMP i comentari', async () => {
    const result = await inspect(jpeg())
    const read = values(result.fields)
    expect(result.format).toBe('jpeg')
    expect(read['Autor']).toContain('Joana Puig')
    expect(read['Model']).toBe('EOS R6')
    expect(read['Lloc']).toBe('Girona')
    expect(result.gps?.lat).toBeCloseTo(41 + 23 / 60 + 24 / 3600, 5)
    expect(result.gps?.lon).toBeCloseTo(2 + 10 / 60, 5)
    expect(result.fields[0].risk).toBe('high')
  })

  it('neteja sense tocar la imatge i conserva l’orientació', async () => {
    const original = jpeg()
    const result = await clean(original)
    expect(result.verification.gps).toBeNull()
    const left = values(result.verification.fields)
    expect(left['Autor']).toBeUndefined()
    expect(left['Model']).toBeUndefined()
    expect(left['Lloc']).toBeUndefined()
    expect(left['Orientació']).toBeDefined()
    expect(latin1(result.bytes)).not.toContain('Joana')
    expect(latin1(result.bytes)).not.toContain('Fet a casa')
    expect(latin1(result.bytes).endsWith(latin1(SCAN))).toBe(true)
    expect(result.remaining.join(' ')).toContain('Orientació')
  })
})

describe('PNG', () => {
  it('llegeix textos (inclòs el prompt d’IA) i EXIF', async () => {
    const result = await inspect(png())
    const read = values(result.fields)
    expect(read['Instruccions d’IA (prompt)']).toContain('platja')
    expect(result.gps).not.toBeNull()
  })

  it('treu els textos i deixa un PNG amb CRC vàlids', async () => {
    const result = await clean(png())
    expect(latin1(result.bytes)).not.toContain('platja')
    expect(result.verification.gps).toBeNull()
    // Cada bloc ha de tenir el CRC correcte.
    const bytes = result.bytes
    const view = new DataView(bytes.buffer, bytes.byteOffset)
    for (let at = 8; at < bytes.length; ) {
      const length = view.getUint32(at)
      expect(view.getUint32(at + 8 + length)).toBe(crc32(bytes.subarray(at + 4, at + 8 + length)))
      at += 12 + length
    }
  })
})

describe('WebP', () => {
  it('neteja EXIF, treu XMP i ajusta la capçalera', async () => {
    const before = await inspect(webp())
    expect(values(before.fields)['Lloc']).toBe('Girona')
    const result = await clean(webp())
    expect(result.verification.gps).toBeNull()
    expect(values(result.verification.fields)['Lloc']).toBeUndefined()
    const view = new DataView(result.bytes.buffer, result.bytes.byteOffset)
    expect(view.getUint32(4, true)).toBe(result.bytes.length - 8)
    expect(latin1(result.bytes)).toContain('VP8 ')
  })
})

describe('PDF', () => {
  it('llegeix el diccionari Info (text i UTF-16) i l’XMP', async () => {
    const result = await inspect(pdf())
    const read = values(result.fields)
    expect(read['Autor']).toContain('Joana Puig')
    expect(read['Programa que el va generar']).toBe('Writer (LibreOffice)')
    expect(read['Data de creació']).toBe('2025-03-01 10:00')
    expect(read['Títol']).toBe('Press')
    expect(read['Lloc']).toBe('Girona')
  })

  it('neteja al lloc sense canviar la mida', async () => {
    const original = pdf()
    const result = await clean(original)
    expect(result.bytes.length).toBe(original.length)
    expect(latin1(result.bytes)).not.toContain('Joana')
    expect(result.verification.fields).toHaveLength(0)
    expect(latin1(result.bytes)).toContain('/Author (')
  })

  it('avisa de les versions acumulades', async () => {
    const twice = concat([pdf(), ascii('\n2 0 obj << /Author (Pere) >> endobj\n%%EOF')])
    const result = await inspect(twice)
    expect(values(result.fields)['Versions desades una sobre l’altra']).toBe('2')
    expect(values(result.fields)['Autor']).toBe('Joana Puig · Pere')
  })
})

describe('Office', () => {
  it('llegeix propietats, autors de comentaris, canvis i fotos amb ubicació', async () => {
    const result = await inspect(await docx())
    const read = values(result.fields)
    expect(read['Autor']).toBe('Joana Puig')
    expect(read['Modificat per última vegada per']).toBe('Pere Soler')
    expect(read['Empresa']).toBe('Fusteria Puig SL')
    expect(read['Plantilla']).toContain('joana.puig')
    expect(read['Autors de comentaris i canvis']).toBe('Pere Soler')
    expect(read['Comentaris']).toBe('1')
    expect(read['Canvis controlats pendents']).toBe('1')
    expect(read['Imatges incrustades amb ubicació']).toBe('1')
  })

  it('neteja identitat, anonimitza autors i neteja les imatges', async () => {
    const result = await clean(await docx())
    const left = values(result.verification.fields)
    expect(left['Autor']).toBeUndefined()
    expect(left['Empresa']).toBeUndefined()
    expect(left['Plantilla']).toBeUndefined()
    expect(left['Autors de comentaris i canvis']).toBeUndefined()
    expect(left['Imatges incrustades amb ubicació']).toBeUndefined()
    expect(left['Títol']).toBe('Pressupost')
    expect(result.remaining.join(' ')).toMatch(/Canvis controlats/)

    const archive = readZip(result.bytes)!
    expect(archive.entries.map((entry) => entry.name)).toContain('word/media/image1.jpeg')
    const core = utf8(await readEntry(archive, findEntry(archive, 'docProps/core.xml')!))
    expect(core).not.toContain('Joana')
    expect(core).toContain('<dc:title>Pressupost</dc:title>')
    // Les entrades no tocades es copien tal qual i continuen comprimides.
    expect(findEntry(archive, '[Content_Types].xml')!.method).toBe(8)
  })

  it('neteja el meta.xml d’OpenDocument', async () => {
    const odt = await zip({
      mimetype: 'application/vnd.oasis.opendocument.text',
      'meta.xml': '<office:meta><meta:initial-creator>Joana Puig</meta:initial-creator><dc:creator>Pere Soler</dc:creator><meta:generator>LibreOffice/7.6</meta:generator></office:meta>',
    })
    const before = values((await inspect(odt)).fields)
    expect(before['Autor inicial']).toBe('Joana Puig')
    const result = await clean(odt)
    const left = values(result.verification.fields)
    expect(left['Autor inicial']).toBeUndefined()
    expect(left['Modificat per última vegada per']).toBeUndefined()
    expect(left['Programa']).toBe('LibreOffice/7.6')
  })
})

describe('casos límit', () => {
  it('un fitxer malmès no peta', async () => {
    const broken = jpeg().slice(0, 30)
    const result = await inspect(broken)
    expect(result.format).toBe('jpeg')
    const unknown = await inspect(ascii('no sóc res'))
    expect(unknown.cleanable).toBe(false)
    await expect(clean(ascii('no sóc res'))).rejects.toThrow()
  })

  it('posa nom a la còpia neta', () => {
    expect(cleanFileName('foto.jpg')).toBe('foto-net.jpg')
    expect(cleanFileName('informe.final.pdf')).toBe('informe.final-net.pdf')
    expect(cleanFileName('sense')).toBe('sense-net')
  })
})
