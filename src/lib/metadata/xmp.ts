import { displayText } from './bytes'
import type { GpsPoint, MetaField, MetaGroup, MetaRisk } from './types'

/**
 * XMP: metadades en XML que hi posen Adobe, els mòbils i molts programes. Pot
 * repetir tot el que diu l'EXIF (coordenades incloses) i hi afegeix coses que
 * l'EXIF no té: l'historial d'edició, la ciutat, l'autor.
 *
 * No es fa servir cap analitzador XML: amb expressions regulars acotades n'hi
 * ha prou per llegir els camps que importen, i no hi ha risc d'entitats
 * externes ni d'altres sorpreses d'un analitzador complet.
 */

interface Property {
  names: string[]
  label: string
  group: MetaGroup
  risk: MetaRisk
  why?: string
}

const PROPERTIES: Property[] = [
  { names: ['dc:creator'], label: 'Autor', group: 'identity', risk: 'high', why: 'Un nom de persona.' },
  { names: ['photoshop:AuthorsPosition'], label: 'Càrrec de l’autor', group: 'identity', risk: 'medium' },
  { names: ['dc:rights', 'xmpRights:Owner'], label: 'Drets', group: 'identity', risk: 'medium' },
  { names: ['photoshop:City', 'Iptc4xmpCore:Location', 'photoshop:State', 'photoshop:Country', 'Iptc4xmpCore:CountryCode'], label: 'Lloc', group: 'location', risk: 'high', why: 'El nom del lloc on es va fer.' },
  { names: ['aux:SerialNumber', 'exifEX:BodySerialNumber'], label: 'Número de sèrie', group: 'device', risk: 'high', why: 'Lliga totes les fotos fetes amb el mateix aparell.' },
  { names: ['aux:LensSerialNumber', 'exifEX:LensSerialNumber'], label: 'Número de sèrie de l’objectiu', group: 'device', risk: 'high' },
  { names: ['aux:OwnerName', 'exifEX:CameraOwnerName'], label: 'Propietari de la càmera', group: 'identity', risk: 'high' },
  { names: ['tiff:Make', 'tiff:Model'], label: 'Aparell', group: 'device', risk: 'low' },
  { names: ['xmp:CreatorTool', 'pdf:Producer'], label: 'Programa', group: 'software', risk: 'low' },
  { names: ['xmp:CreateDate', 'photoshop:DateCreated', 'exif:DateTimeOriginal'], label: 'Data de creació', group: 'time', risk: 'medium' },
  { names: ['xmp:ModifyDate', 'xmp:MetadataDate'], label: 'Data de modificació', group: 'time', risk: 'low' },
  { names: ['dc:title'], label: 'Títol', group: 'content', risk: 'low' },
  { names: ['dc:description', 'exif:UserComment'], label: 'Descripció', group: 'content', risk: 'medium' },
  { names: ['dc:subject'], label: 'Paraules clau', group: 'content', risk: 'low' },
  { names: ['xmpMM:DocumentID', 'xmpMM:OriginalDocumentID'], label: 'Identificador del document original', group: 'other', risk: 'low', why: 'Permet lligar aquest fitxer amb altres versions del mateix original.' },
]

// Una entitat fora de rang (`&#99999999;`) no pot fer caure tota la lectura:
// es descarta aquell caràcter i prou.
const codePoint = (code: number) => (code >= 0 && code <= 0x10ffff ? String.fromCodePoint(code) : '')

const decodeEntities = (value: string) =>
  value
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code: string) => codePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) => codePoint(Number.parseInt(code, 16)))
    .replace(/&amp;/g, '&')

const escapeName = (name: string) => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Valors d'una propietat, tant en forma d'atribut com d'element (amb rdf:li). */
export function xmpValues(xml: string, name: string): string[] {
  const out: string[] = []
  const escaped = escapeName(name)
  const attribute = new RegExp(`\\s${escaped}\\s*=\\s*"([^"]{0,2000})"`, 'g')
  for (const match of xml.matchAll(attribute)) out.push(decodeEntities(match[1]))
  const element = new RegExp(`<${escaped}(?:\\s[^>]{0,500})?>([\\s\\S]{0,20000}?)</${escaped}>`, 'g')
  for (const match of xml.matchAll(element)) {
    const inner = match[1]
    const items = [...inner.matchAll(/<rdf:li(?:\s[^>]{0,200})?>([\s\S]{0,2000}?)<\/rdf:li>/g)].map((item) => item[1])
    const values = items.length > 0 ? items : [inner]
    for (const value of values) {
      const text = decodeEntities(value.replace(/<[^>]{0,500}>/g, '')).trim()
      if (text) out.push(text)
    }
  }
  return [...new Set(out.map((value) => displayText(value)).filter(Boolean))]
}

/** «41,23.4567N» o «41.3909» → graus decimals. */
const xmpCoordinate = (value: string): number | null => {
  const match = value.trim().match(/^(-?\d+(?:\.\d+)?)(?:,(\d+(?:\.\d+)?))?(?:,(\d+(?:\.\d+)?))?([NSEW])?$/i)
  if (!match) return null
  let result = Number(match[1])
  if (match[2]) result += Number(match[2]) / 60
  if (match[3]) result += Number(match[3]) / 3600
  if (match[4] && /[SW]/i.test(match[4])) result = -result
  return Number.isFinite(result) ? result : null
}

export interface XmpReading {
  fields: MetaField[]
  gps: GpsPoint | null
}

export function readXmp(xml: string): XmpReading {
  const fields: MetaField[] = []
  for (const property of PROPERTIES) {
    const values = property.names.flatMap((name) => xmpValues(xml, name))
    const unique = [...new Set(values)]
    if (unique.length === 0) continue
    fields.push({
      key: `xmp:${property.names[0]}`,
      label: property.label,
      value: unique.join(' · '),
      group: property.group,
      risk: property.risk,
      why: property.why,
    })
  }

  const history = (xml.match(/<rdf:li[^>]{0,200}stEvt:action=|<stEvt:action>/g) ?? []).length
  if (history > 0) {
    const agents = [...new Set(xmpValues(xml, 'stEvt:softwareAgent'))]
    fields.push({
      key: 'xmp:history',
      label: 'Historial d’edició',
      value: `${history} passos${agents.length > 0 ? ` (${agents.slice(0, 3).join(', ')})` : ''}`,
      group: 'content',
      risk: 'medium',
      why: 'Registra cada vegada que s’ha obert i desat, amb quin programa i quan.',
    })
  }

  let gps: GpsPoint | null = null
  const lat = xmpValues(xml, 'exif:GPSLatitude')[0]
  const lon = xmpValues(xml, 'exif:GPSLongitude')[0]
  if (lat && lon) {
    const latitude = xmpCoordinate(lat)
    const longitude = xmpCoordinate(lon)
    if (latitude !== null && longitude !== null && Math.abs(latitude) <= 90 && Math.abs(longitude) <= 180) {
      gps = { lat: latitude, lon: longitude, altitude: null }
      fields.push({
        key: 'xmp:gps',
        label: 'Coordenades GPS',
        value: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
        group: 'location',
        risk: 'high',
        why: 'El punt exacte on es va fer la foto.',
      })
    }
  }
  return { fields, gps }
}
