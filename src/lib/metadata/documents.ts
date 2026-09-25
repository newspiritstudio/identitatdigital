import { ascii, displayText, latin1, utf8 } from './bytes'
import { cleanImage, inspectImage, type ImageFormat } from './images'
import type { CleanResult, FileFormat, Inspection, MetaField } from './types'
import { readXmp, xmpValues } from './xmp'
import { findEntry, readEntry, readZip, rewriteZip, type ZipArchive } from './zip'

/**
 * Documents: PDF, Office (.docx, .xlsx, .pptx) i OpenDocument (.odt, .ods, .odp).
 *
 * El que delata un document no és tant la data com les persones: l'autor, qui
 * l'ha tocat per última vegada, l'empresa, la ruta de la plantilla (que sovint
 * porta el nom d'usuari de l'ordinador), els autors dels comentaris i dels
 * canvis controlats.
 */

const encoder = new TextEncoder()

/* ───────────────────────────────── PDF ─────────────────────────────────── */

const PDF_INFO_KEYS: Record<string, { label: string; group: MetaField['group']; risk: MetaField['risk'] }> = {
  Author: { label: 'Autor', group: 'identity', risk: 'high' },
  Creator: { label: 'Programa d’origen', group: 'software', risk: 'low' },
  Producer: { label: 'Programa que el va generar', group: 'software', risk: 'low' },
  Title: { label: 'Títol', group: 'content', risk: 'low' },
  Subject: { label: 'Tema', group: 'content', risk: 'low' },
  Keywords: { label: 'Paraules clau', group: 'content', risk: 'low' },
  CreationDate: { label: 'Data de creació', group: 'time', risk: 'low' },
  ModDate: { label: 'Data de modificació', group: 'time', risk: 'low' },
}

interface PdfString {
  key: string
  /** Posició del primer caràcter del contingut (dins dels delimitadors). */
  from: number
  to: number
  hex: boolean
}

/** Troba tots els valors de text de les claus de metadades, a tot el fitxer. */
function pdfInfoStrings(text: string): PdfString[] {
  const out: PdfString[] = []
  const pattern = new RegExp(`/(${Object.keys(PDF_INFO_KEYS).join('|')})\\s*([(<])`, 'g')
  for (const match of text.matchAll(pattern)) {
    const open = (match.index ?? 0) + match[0].length - 1
    if (match[2] === '<') {
      if (text[open + 1] === '<') continue // és un diccionari, no una cadena
      const close = text.indexOf('>', open)
      if (close === -1 || close - open > 20000) continue
      out.push({ key: match[1], from: open + 1, to: close, hex: true })
      continue
    }
    let depth = 0
    let at = open
    for (; at < text.length && at - open < 20000; at += 1) {
      const ch = text[at]
      if (ch === '\\') {
        at += 1
        continue
      }
      if (ch === '(') depth += 1
      else if (ch === ')') {
        depth -= 1
        if (depth === 0) break
      }
    }
    if (depth === 0) out.push({ key: match[1], from: open + 1, to: at, hex: false })
  }
  return out
}

const decodePdfString = (raw: string, hex: boolean): string => {
  let bytes: number[]
  if (hex) {
    const digits = raw.replace(/[^0-9a-f]/gi, '')
    bytes = []
    for (let i = 0; i < digits.length; i += 2) bytes.push(Number.parseInt(digits.slice(i, i + 2).padEnd(2, '0'), 16))
  } else {
    bytes = []
    for (let i = 0; i < raw.length; i += 1) {
      const ch = raw[i]
      if (ch !== '\\') {
        bytes.push(ch.charCodeAt(0) & 0xff)
        continue
      }
      const next = raw[i + 1]
      i += 1
      const escapes: Record<string, number> = { n: 10, r: 13, t: 9, b: 8, f: 12, '(': 40, ')': 41, '\\': 92 }
      if (next in escapes) bytes.push(escapes[next])
      else if (/[0-7]/.test(next)) {
        let octal = next
        while (octal.length < 3 && /[0-7]/.test(raw[i + 1] ?? '')) octal += raw[(i += 1)]
        bytes.push(Number.parseInt(octal, 8) & 0xff)
      }
    }
  }
  const array = new Uint8Array(bytes)
  if (array[0] === 0xfe && array[1] === 0xff) return new TextDecoder('utf-16be').decode(array.subarray(2))
  if (array[0] === 0xef && array[1] === 0xbb && array[2] === 0xbf) return utf8(array.subarray(3))
  return latin1(array)
}

/** «D:20240131120000+01'00'» → «2024-01-31 12:00». */
const pdfDate = (value: string) => {
  const match = value.match(/^D:(\d{4})(\d{2})?(\d{2})?(\d{2})?(\d{2})?/)
  if (!match) return value
  return `${match[1]}-${match[2] ?? '01'}-${match[3] ?? '01'}${match[4] ? ` ${match[4]}:${match[5] ?? '00'}` : ''}`
}

function inspectPdf(bytes: Uint8Array): Inspection {
  const text = latin1(bytes)
  const fields: MetaField[] = []
  const notes: string[] = []
  const seen = new Map<string, Set<string>>()
  for (const entry of pdfInfoStrings(text)) {
    let value = displayText(decodePdfString(text.slice(entry.from, entry.to), entry.hex))
    if (!value) continue
    if (entry.key.endsWith('Date')) value = pdfDate(value)
    const set = seen.get(entry.key) ?? new Set<string>()
    set.add(value)
    seen.set(entry.key, set)
  }
  for (const [key, values] of seen) {
    const info = PDF_INFO_KEYS[key]
    fields.push({ key: `pdf:${key}`, label: info.label, value: [...values].join(' · '), group: info.group, risk: info.risk })
  }
  let gps = null
  for (const match of text.matchAll(/<x:xmpmeta[\s\S]{0,2000000}?<\/x:xmpmeta>/g)) {
    const reading = readXmp(utf8(ascii(match[0])))
    for (const field of reading.fields) {
      // L'XMP sovint repeteix el diccionari Info: s'uneixen els valors sota la mateixa etiqueta.
      const existing = fields.find((candidate) => candidate.label === field.label)
      if (!existing) fields.push(field)
      else if (!existing.value.split(' · ').includes(field.value)) existing.value += ` · ${field.value}`
    }
    gps ??= reading.gps
  }

  const revisions = (text.match(/%%EOF/g) ?? []).length
  if (revisions > 1) {
    fields.push({
      key: 'pdf:revisions',
      label: 'Versions desades una sobre l’altra',
      value: `${revisions}`,
      group: 'content',
      risk: 'medium',
      why: 'El PDF s’ha modificat afegint canvis al final: les versions anteriors del contingut i de les metadades hi poden continuar.',
    })
  }
  if (/\/ObjStm\b/.test(text)) {
    notes.push(
      'Aquest PDF desa part de la seva estructura comprimida. Si hi ha metadades dins d’aquesta part, aquí no es veuen ni es poden netejar: per a una neteja completa, torna’l a exportar o imprimeix-lo a PDF.',
    )
  }
  if (/\/Encrypt\b/.test(text)) notes.push('El PDF està xifrat: les metadades xifrades no es poden llegir.')
  return { format: 'pdf', fields, gps, notes, cleanable: !/\/Encrypt\b/.test(text) }
}

/**
 * Neteja al lloc: el contingut de cada cadena de metadades s'omple d'espais i
 * el bloc XMP es buida, sense canviar cap posició. Així la taula de
 * referències del PDF continua apuntant on ha d'apuntar i el document s'obre
 * exactament igual.
 */
function cleanPdf(input: Uint8Array): CleanResult {
  const bytes = input.slice()
  const text = latin1(bytes)
  const done = new Set<string>()
  for (const entry of pdfInfoStrings(text)) {
    if (entry.to <= entry.from) continue
    const value = decodePdfString(text.slice(entry.from, entry.to), entry.hex).trim()
    bytes.fill(entry.hex ? 0x30 : 0x20, entry.from, entry.to)
    if (value) done.add(PDF_INFO_KEYS[entry.key].label.toLowerCase())
  }
  for (const match of text.matchAll(/(<x:xmpmeta[^>]{0,2000}>)([\s\S]{0,2000000}?)(<\/x:xmpmeta>)/g)) {
    const from = (match.index ?? 0) + match[1].length
    bytes.fill(0x20, from, from + match[2].length)
    if (match[2].trim()) done.add('bloc XMP')
  }
  const remaining: string[] = []
  if (/\/ObjStm\b/.test(text)) remaining.push('Les metadades que hi pugui haver dins de l’estructura comprimida del PDF.')
  if ((text.match(/%%EOF/g) ?? []).length > 1) {
    remaining.push('El contingut de les versions anteriors: les metadades s’han buidat a totes, però el text o les imatges antigues hi poden continuar. Per treure-les, torna’l a exportar.')
  }
  return { bytes, done: [...done], remaining }
}

/* ─────────────────────────────── Office ────────────────────────────────── */

const firstText = (xml: string, tag: string): string | null => {
  const values = xmpValues(xml, tag)
  return values[0] ?? null
}

const CORE: { tag: string; label: string; group: MetaField['group']; risk: MetaField['risk']; clean: boolean; why?: string }[] = [
  { tag: 'dc:creator', label: 'Autor', group: 'identity', risk: 'high', clean: true, why: 'Qui el va crear, tal com consta a l’ordinador.' },
  { tag: 'cp:lastModifiedBy', label: 'Modificat per última vegada per', group: 'identity', risk: 'high', clean: true },
  { tag: 'cp:lastPrinted', label: 'Imprès per última vegada', group: 'time', risk: 'low', clean: true },
  { tag: 'dcterms:created', label: 'Data de creació', group: 'time', risk: 'low', clean: true },
  { tag: 'dcterms:modified', label: 'Data de modificació', group: 'time', risk: 'low', clean: true },
  { tag: 'cp:revision', label: 'Nombre de revisions', group: 'content', risk: 'low', clean: true },
  { tag: 'dc:title', label: 'Títol', group: 'content', risk: 'low', clean: false },
  { tag: 'dc:subject', label: 'Tema', group: 'content', risk: 'low', clean: false },
  { tag: 'cp:keywords', label: 'Paraules clau', group: 'content', risk: 'low', clean: false },
  { tag: 'dc:description', label: 'Comentaris de les propietats', group: 'content', risk: 'medium', clean: false },
  { tag: 'cp:category', label: 'Categoria', group: 'content', risk: 'low', clean: false },
]

const APP: { tag: string; label: string; group: MetaField['group']; risk: MetaField['risk']; clean: boolean; why?: string }[] = [
  { tag: 'Company', label: 'Empresa', group: 'identity', risk: 'high', clean: true },
  { tag: 'Manager', label: 'Responsable', group: 'identity', risk: 'high', clean: true },
  { tag: 'Template', label: 'Plantilla', group: 'identity', risk: 'medium', clean: true, why: 'La ruta de la plantilla sovint porta el nom d’usuari de l’ordinador.' },
  { tag: 'HyperlinkBase', label: 'Adreça base dels enllaços', group: 'other', risk: 'medium', clean: true },
  { tag: 'TotalTime', label: 'Minuts d’edició', group: 'time', risk: 'low', clean: true },
  { tag: 'Application', label: 'Programa', group: 'software', risk: 'low', clean: false },
  { tag: 'AppVersion', label: 'Versió del programa', group: 'software', risk: 'low', clean: true },
]

const removeElement = (xml: string, tag: string) =>
  xml
    .replace(new RegExp(`<${tag}(?:\\s[^>]*)?>[\\s\\S]*?</${tag}>`, 'g'), '')
    .replace(new RegExp(`<${tag}(?:\\s[^>]*)?/>`, 'g'), '')

/** Fitxers on apareixen noms d'autors de comentaris i canvis, i com anonimitzar-los. */
const AUTHOR_FILES: { test: RegExp; replace: (xml: string) => string; names: (xml: string) => string[] }[] = [
  {
    // Word: comentaris, canvis controlats, persones.
    test: /^word\/(document|comments[^/]*|people|footnotes|endnotes|header\d*|footer\d*)\.xml$/,
    replace: (xml) =>
      xml
        .replace(/\bw:author="[^"]*"/g, 'w:author="Autor"')
        .replace(/\bw:initials="[^"]*"/g, 'w:initials="A"')
        .replace(/\bw15:author="[^"]*"/g, 'w15:author="Autor"')
        .replace(/\bw15:userId="[^"]*"/g, 'w15:userId=""')
        .replace(/\bw15:providerId="[^"]*"/g, 'w15:providerId="None"'),
    names: (xml) => [...xml.matchAll(/\bw(?:15)?:author="([^"]*)"/g)].map((match) => match[1]),
  },
  {
    test: /^ppt\/commentAuthors\.xml$|^ppt\/authors\.xml$/,
    replace: (xml) =>
      xml
        .replace(/(<p:cmAuthor\b[^>]*?)\bname="[^"]*"/g, '$1name="Autor"')
        .replace(/(<p:cmAuthor\b[^>]*?)\binitials="[^"]*"/g, '$1initials="A"')
        .replace(/(<p188:author\b[^>]*?)\bname="[^"]*"/g, '$1name="Autor"')
        .replace(/(<p188:author\b[^>]*?)\binitials="[^"]*"/g, '$1initials="A"')
        .replace(/\buserId="[^"]*"/g, 'userId=""'),
    names: (xml) => [...xml.matchAll(/<(?:p:cmAuthor|p188:author)\b[^>]*?\bname="([^"]*)"/g)].map((match) => match[1]),
  },
  {
    test: /^xl\/comments\d*\.xml$/,
    replace: (xml) => xml.replace(/<author>[^<]*<\/author>/g, '<author>Autor</author>'),
    names: (xml) => [...xml.matchAll(/<author>([^<]*)<\/author>/g)].map((match) => match[1]),
  },
  {
    test: /^xl\/persons\/person\.xml$/,
    replace: (xml) => xml.replace(/\bdisplayName="[^"]*"/g, 'displayName="Autor"').replace(/\buserId="[^"]*"/g, 'userId=""'),
    names: (xml) => [...xml.matchAll(/\bdisplayName="([^"]*)"/g)].map((match) => match[1]),
  },
]

const MEDIA = /^(word|xl|ppt)\/media\/[^/]+\.(jpe?g|png)$/i

const mediaFormat = (name: string): ImageFormat => (/\.png$/i.test(name) ? 'png' : 'jpeg')

async function inspectOffice(format: FileFormat, zip: ZipArchive): Promise<Inspection> {
  const fields: MetaField[] = []
  const notes: string[] = []
  const decode = async (name: string) => {
    const entry = findEntry(zip, name)
    return entry ? utf8(await readEntry(zip, entry)) : null
  }

  const core = await decode('docProps/core.xml')
  if (core) {
    for (const item of CORE) {
      const value = firstText(core, item.tag)
      if (value) fields.push({ key: `office:${item.tag}`, label: item.label, value, group: item.group, risk: item.risk, why: item.why })
    }
  }
  const app = await decode('docProps/app.xml')
  if (app) {
    for (const item of APP) {
      const value = firstText(app, item.tag)
      if (value && !(item.tag === 'TotalTime' && value === '0')) {
        fields.push({ key: `office:${item.tag}`, label: item.label, value, group: item.group, risk: item.risk, why: item.why })
      }
    }
  }
  const custom = await decode('docProps/custom.xml')
  if (custom) {
    const names = [...custom.matchAll(/<property\b[^>]*\bname="([^"]*)"/g)].map((match) => match[1])
    if (names.length > 0) {
      fields.push({
        key: 'office:custom',
        label: 'Propietats personalitzades',
        value: names.slice(0, 8).join(', ') + (names.length > 8 ? '…' : ''),
        group: 'other',
        risk: 'medium',
        why: 'Sovint les hi afegeixen els sistemes de gestió documental de l’empresa: codis interns, classificacions, noms.',
      })
    }
  }

  const authors = new Set<string>()
  let comments = 0
  let tracked = 0
  for (const entry of zip.entries) {
    const rule = AUTHOR_FILES.find((candidate) => candidate.test.test(entry.name))
    if (!rule) continue
    const xml = utf8(await readEntry(zip, entry))
    rule.names(xml).filter((name) => name && name !== 'Autor').forEach((name) => authors.add(name))
    if (/comments/i.test(entry.name)) comments += (xml.match(/<(w:comment|comment|p:cm|p188:cm)\b/g) ?? []).length
    if (entry.name === 'word/document.xml') tracked += (xml.match(/<w:(ins|del)\b/g) ?? []).length
  }
  if (authors.size > 0) {
    fields.push({
      key: 'office:authors',
      label: 'Autors de comentaris i canvis',
      value: [...authors].slice(0, 10).join(', '),
      group: 'identity',
      risk: 'high',
      why: 'Els noms de totes les persones que hi han comentat o fet canvis controlats.',
    })
  }
  if (comments > 0) fields.push({ key: 'office:comments', label: 'Comentaris', value: `${comments}`, group: 'content', risk: 'medium', why: 'Els comentaris viatgen amb el document encara que no es vegin en imprimir-lo.' })
  if (tracked > 0) fields.push({ key: 'office:tracked', label: 'Canvis controlats pendents', value: `${tracked}`, group: 'content', risk: 'high', why: 'El text esborrat continua dins del document i qualsevol el pot recuperar.' })

  if (findEntry(zip, 'docProps/thumbnail.jpeg') || findEntry(zip, 'Thumbnails/thumbnail.png')) {
    fields.push({ key: 'office:thumbnail', label: 'Miniatura de la primera pàgina', value: 'sí', group: 'content', risk: 'low' })
  }

  /* Fotos incrustades: poden portar les coordenades de quan es van fer. */
  let mediaWithGps = 0
  let gps = null
  for (const entry of zip.entries.filter((candidate) => MEDIA.test(candidate.name))) {
    try {
      const inspection = await inspectImage(mediaFormat(entry.name), await readEntry(zip, entry))
      if (inspection.gps) {
        mediaWithGps += 1
        gps ??= inspection.gps
      }
    } catch {
      // Una imatge il·legible no impedeix revisar la resta.
    }
  }
  if (mediaWithGps > 0) {
    fields.push({
      key: 'office:media-gps',
      label: 'Imatges incrustades amb ubicació',
      value: `${mediaWithGps}`,
      group: 'location',
      risk: 'high',
      why: 'Les fotos enganxades al document conserven les coordenades de quan es van fer.',
    })
  }

  /* OpenDocument: meta.xml. */
  const meta = await decode('meta.xml')
  if (meta) {
    const odf: [string, string, MetaField['group'], MetaField['risk']][] = [
      ['meta:initial-creator', 'Autor inicial', 'identity', 'high'],
      ['dc:creator', 'Modificat per última vegada per', 'identity', 'high'],
      ['meta:creation-date', 'Data de creació', 'time', 'low'],
      ['dc:date', 'Data de modificació', 'time', 'low'],
      ['meta:editing-duration', 'Temps d’edició', 'time', 'low'],
      ['meta:editing-cycles', 'Nombre de revisions', 'content', 'low'],
      ['meta:generator', 'Programa', 'software', 'low'],
      ['meta:printed-by', 'Imprès per', 'identity', 'high'],
    ]
    for (const [tag, label, group, risk] of odf) {
      const value = firstText(meta, tag)
      if (value) fields.push({ key: `odf:${tag}`, label, value, group, risk })
    }
    const userDefined = [...meta.matchAll(/<meta:user-defined\b[^>]*meta:name="([^"]*)"/g)].map((match) => match[1])
    if (userDefined.length > 0) {
      fields.push({ key: 'odf:user-defined', label: 'Propietats personalitzades', value: userDefined.join(', '), group: 'other', risk: 'medium' })
    }
    if (format === 'odf') notes.push('Els comentaris i els canvis controlats d’un document OpenDocument no es netegen: revisa’ls al programa abans d’enviar-lo.')
  }

  return { format, fields, gps, notes, cleanable: true }
}

async function cleanOffice(zip: ZipArchive): Promise<CleanResult> {
  const replacements = new Map<string, Uint8Array>()
  const done = new Set<string>()
  const remaining: string[] = []
  const decode = async (name: string) => {
    const entry = findEntry(zip, name)
    return entry ? utf8(await readEntry(zip, entry)) : null
  }

  const core = await decode('docProps/core.xml')
  if (core) {
    let next = core
    for (const item of CORE) {
      if (!item.clean || !firstText(next, item.tag)) continue
      next = removeElement(next, item.tag)
      done.add(item.label.toLowerCase())
    }
    for (const item of CORE.filter((candidate) => !candidate.clean)) {
      const value = firstText(core, item.tag)
      if (value) remaining.push(`${item.label}: «${value}». Forma part del document; si no el vols, esborra’l a les propietats.`)
    }
    if (next !== core) replacements.set('docProps/core.xml', encoder.encode(next))
  }
  const app = await decode('docProps/app.xml')
  if (app) {
    let next = app
    for (const item of APP) {
      if (!item.clean || !firstText(next, item.tag)) continue
      next = removeElement(next, item.tag)
      if (item.tag !== 'TotalTime' && item.tag !== 'AppVersion') done.add(item.label.toLowerCase())
    }
    if (next !== app) replacements.set('docProps/app.xml', encoder.encode(next))
  }
  const custom = await decode('docProps/custom.xml')
  if (custom && /<property\b/.test(custom)) {
    replacements.set('docProps/custom.xml', encoder.encode(removeElement(custom, 'property')))
    done.add('propietats personalitzades')
  }
  const meta = await decode('meta.xml')
  if (meta) {
    let next = meta
    for (const tag of ['meta:initial-creator', 'dc:creator', 'meta:printed-by', 'meta:creation-date', 'dc:date', 'meta:print-date', 'meta:editing-duration', 'meta:editing-cycles', 'meta:user-defined']) {
      if (new RegExp(`<${tag}\\b`).test(next)) {
        next = removeElement(next, tag)
        done.add(tag.includes('creator') || tag.includes('printed') ? 'autor' : tag.includes('user-defined') ? 'propietats personalitzades' : 'dates i temps d’edició')
      }
    }
    if (next !== meta) replacements.set('meta.xml', encoder.encode(next))
  }

  for (const entry of zip.entries) {
    const rule = AUTHOR_FILES.find((candidate) => candidate.test.test(entry.name))
    if (!rule) continue
    const xml = utf8(await readEntry(zip, entry))
    const next = rule.replace(xml)
    if (next !== xml) {
      replacements.set(entry.name, encoder.encode(next))
      done.add('noms dels autors de comentaris i canvis (ara «Autor»)')
    }
    if (entry.name === 'word/document.xml' && /<w:(ins|del)\b/.test(xml)) {
      remaining.push('Canvis controlats pendents: el text esborrat continua dins del document. A Word: Revisa › Accepta tots els canvis.')
    }
    if (/comments/i.test(entry.name) && /<(w:comment|comment|p:cm)\b/.test(xml)) {
      remaining.push('Comentaris: s’han anonimitzat, però el text continua. Si no els vols enviar, elimina’ls al programa.')
    }
  }

  for (const entry of zip.entries.filter((candidate) => MEDIA.test(candidate.name))) {
    try {
      const format = mediaFormat(entry.name)
      const original = await readEntry(zip, entry)
      const inspection = await inspectImage(format, original)
      if (inspection.fields.length === 0) continue
      const cleaned = cleanImage(format, original)
      replacements.set(entry.name, cleaned.bytes)
      done.add('metadades de les imatges incrustades')
    } catch {
      remaining.push(`No s’ha pogut netejar la imatge incrustada ${entry.name}.`)
    }
  }

  return { bytes: rewriteZip(zip, replacements), done: [...done], remaining: [...new Set(remaining)] }
}

/* ──────────────────────────────── entrada ──────────────────────────────── */

export type DocumentFormat = 'pdf' | 'docx' | 'xlsx' | 'pptx' | 'odf'

export async function inspectDocument(format: DocumentFormat, bytes: Uint8Array): Promise<Inspection> {
  if (format === 'pdf') return inspectPdf(bytes)
  const zip = readZip(bytes)
  if (!zip) {
    return { format, fields: [], gps: null, notes: ['No s’ha pogut obrir el contingut del document (potser és massa gran o està malmès).'], cleanable: false }
  }
  return inspectOffice(format, zip)
}

export async function cleanDocument(format: DocumentFormat, bytes: Uint8Array): Promise<CleanResult> {
  if (format === 'pdf') return cleanPdf(bytes)
  const zip = readZip(bytes)
  if (!zip) throw new Error('No s’ha pogut obrir el contingut del document.')
  return cleanOffice(zip)
}

/** Distingeix els tipus de document dins d'un ZIP. */
export async function zipKind(bytes: Uint8Array): Promise<DocumentFormat | null> {
  const zip = readZip(bytes)
  if (!zip) return null
  const names = new Set(zip.entries.map((entry) => entry.name))
  if (names.has('word/document.xml')) return 'docx'
  if (names.has('xl/workbook.xml')) return 'xlsx'
  if (names.has('ppt/presentation.xml')) return 'pptx'
  const mimetype = findEntry(zip, 'mimetype')
  if (mimetype && /opendocument/.test(utf8(await readEntry(zip, mimetype)))) return 'odf'
  return null
}
