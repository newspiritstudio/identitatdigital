import type { Payload } from 'payload'

import {
  EVIDENCE_LEVELS,
  EVIDENCE_STATUSES,
  type EvidenceLevel,
  type EvidenceStatus,
} from '@/fields/evidence'
import type { App, Breach, Category, Company, DataType, Incident } from '@/payload-types'

/**
 * Corpus: tot el directori carregat en un sol objecte.
 *
 * `loadCorpus` és l'única funció del mòdul que parla amb Payload. La resta
 * reben el corpus ja carregat, cosa que permet provar-les amb fixtures
 * escrites a mà.
 *
 * Cap funció d'aquí no llança excepcions quan falten dades. El corpus real
 * sempre té camps buits i relacions que no resolen; els comptem i seguim.
 */
export type Corpus = {
  /** Només fitxes publicades: els esborranys són feina en curs, no coneixement. */
  apps: App[]
  companies: Company[]
  dataTypes: DataType[]
  categories: Category[]
  incidents: Incident[]
  /** Filtracions importades de HIBP. Pot estar buida: la col·lecció és nova. */
  breaches: Breach[]
  appById: ReadonlyMap<string, App>
  companyById: ReadonlyMap<string, Company>
  dataTypeById: ReadonlyMap<string, DataType>
  categoryById: ReadonlyMap<string, Category>
  /** Moment de la càrrega, injectable perquè les proves siguin deterministes. */
  loadedAt: string
}

/* ─────────────────────────── utilitats de lectura ────────────────────────── */

/**
 * Identificador d'una relació, vingui com a cadena o com a document resolt.
 *
 * `loadCorpus` carrega amb profunditat 0 justament perquè les relacions
 * arribin ja com a identificadors, però aquesta funció també accepta documents
 * sencers perquè un `Corpus` construït a mà (proves, seeds) no hagi de
 * normalitzar res.
 */
export const relationId = (value: unknown): string | null => {
  if (value === null || value === undefined) return null
  if (typeof value === 'string') return value.length > 0 ? value : null
  if (typeof value === 'number') return String(value)
  if (typeof value === 'object') {
    const candidate = (value as { id?: unknown }).id
    if (typeof candidate === 'string') return candidate
    if (typeof candidate === 'number') return String(candidate)
  }
  return null
}

/** Identificadors d'una relació múltiple, descartant els que no resolen. */
export const relationIds = (value: unknown): string[] => {
  if (!Array.isArray(value)) return []
  const ids: string[] = []
  for (const item of value) {
    const id = relationId(item)
    if (id !== null) ids.push(id)
  }
  return ids
}

/**
 * Lectura per camí. Els documents reals tenen grups sencers absents (una fitxa
 * antiga sense la pestanya de seguretat, per exemple), i `app.security.e2ee`
 * petaria. Aquí un camí que no existeix val `undefined`, igual que «no ho hem
 * documentat».
 */
export const at = (source: unknown, path: string): unknown =>
  path.split('.').reduce<unknown>((acc, key) => {
    if (acc === null || acc === undefined || typeof acc !== 'object') return undefined
    return (acc as Record<string, unknown>)[key]
  }, source)

/**
 * Text d'un camp localitzat. Segons com s'hagi llegit el document, un camp
 * localitzat arriba com a cadena (API local amb locale) o com a diccionari de
 * locales (lectura crua de la base de dades). Les anàlisis no s'han de
 * preocupar de la diferència.
 */
export const localizedText = (value: unknown, locale = 'ca'): string | null => {
  if (typeof value === 'string') return value.length > 0 ? value : null
  if (value && typeof value === 'object') {
    const dictionary = value as Record<string, unknown>
    const preferred = dictionary[locale]
    if (typeof preferred === 'string' && preferred.length > 0) return preferred
    for (const candidate of Object.values(dictionary)) {
      if (typeof candidate === 'string' && candidate.length > 0) return candidate
    }
  }
  return null
}

const STATUS_SET: ReadonlySet<string> = new Set(EVIDENCE_STATUSES)
const LEVEL_SET: ReadonlySet<string> = new Set(EVIDENCE_LEVELS)

/**
 * Estat d'una afirmació. Un fet absent val `unknown`, mai `no`: la diferència
 * entre «hem comprovat que no» i «no ho hem mirat» és tot el projecte.
 */
export const factStatus = (fact: unknown): EvidenceStatus => {
  const raw = at(fact, 'status')
  return typeof raw === 'string' && STATUS_SET.has(raw) ? (raw as EvidenceStatus) : 'unknown'
}

/** Nivell d'evidència d'una afirmació, amb `unknown` per defecte. */
export const factLevel = (fact: unknown): EvidenceLevel => {
  const raw = at(fact, 'evidenceLevel')
  return typeof raw === 'string' && LEVEL_SET.has(raw) ? (raw as EvidenceLevel) : 'unknown'
}

/** Identificadors de les fonts que sustenten una afirmació. */
export const factSources = (fact: unknown): string[] => relationIds(at(fact, 'sources'))

/**
 * Valor d'un camp de selecció amb vocabulari tancat. Si el valor no és cap de
 * les opcions previstes (o és la literal `unknown`), retorna `null`, que les
 * anàlisis compten com a no documentat.
 */
export const selectValue = <T extends string>(
  value: unknown,
  allowed: readonly T[],
): T | null => {
  if (typeof value !== 'string') return null
  return (allowed as readonly string[]).includes(value) ? (value as T) : null
}

/* ──────────────────────────── recomptes comuns ───────────────────────────── */

/**
 * Recompte dels cinc estats possibles d'una afirmació.
 *
 * `documented` suma sí, parcial i no: són les tres respostes que impliquen que
 * algú ha mirat la documentació. `unknown` queda fora expressament, i `na`
 * també, perquè un indicador que no aplica no és un buit de recerca.
 */
export type StatusTally = Record<EvidenceStatus, number> & {
  total: number
  documented: number
}

export const emptyStatusTally = (): StatusTally => ({
  yes: 0,
  partial: 0,
  no: 0,
  unknown: 0,
  na: 0,
  total: 0,
  documented: 0,
})

export const addStatus = (tally: StatusTally, status: EvidenceStatus): StatusTally => {
  tally[status] += 1
  tally.total += 1
  if (status === 'yes' || status === 'partial' || status === 'no') tally.documented += 1
  return tally
}

export const tallyStatuses = (statuses: Iterable<EvidenceStatus>): StatusTally => {
  const tally = emptyStatusTally()
  for (const status of statuses) addStatus(tally, status)
  return tally
}

/** Percentatge amb un decimal. Amb denominador zero val 0, no `NaN`. */
export const percentage = (part: number, total: number): number =>
  total === 0 ? 0 : Math.round((part / total) * 1000) / 10

/**
 * Comparació de cadenes per punt de codi.
 *
 * No fem servir `localeCompare` a propòsit: depèn de l'ICU de cada entorn i
 * faria que l'ordre d'una taula canviés entre el servidor i les proves. Aquí
 * l'ordre alfabètic és només el criteri de desempat, i el que necessitem d'ell
 * és que sigui sempre el mateix.
 */
export const compareText = (a: string, b: string): number => (a < b ? -1 : a > b ? 1 : 0)

/** Mediana d'una llista de nombres, amb un decimal. `null` si no n'hi ha cap. */
export const median = (values: number[]): number | null => {
  if (values.length === 0) return null
  const sorted = [...values].sort((a, b) => a - b)
  const middle = Math.floor(sorted.length / 2)
  const value =
    sorted.length % 2 === 1 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2
  return Math.round(value * 10) / 10
}

/* ──────────────────────── referències lleugeres ──────────────────────────── */

/** Referència mínima a una fitxa: prou per enllaçar-la des d'una taula. */
export type AppRef = {
  id: string
  name: string
  slug: string
}

export const appRef = (app: App): AppRef => ({
  id: relationId(app) ?? '',
  name: localizedText(app.name) ?? '(sense nom)',
  slug: typeof app.slug === 'string' ? app.slug : '',
})

/** Referència mínima a una empresa. */
export type CompanyRef = {
  id: string
  name: string
  slug: string
}

export const companyRef = (company: Company): CompanyRef => ({
  id: relationId(company) ?? '',
  name: localizedText(company.name) ?? '(empresa sense nom)',
  slug: typeof company.slug === 'string' ? company.slug : '',
})

/* ────────────────────────────── càrrega ──────────────────────────────────── */

const indexById = <T>(docs: T[]): Map<string, T> => {
  const map = new Map<string, T>()
  for (const doc of docs) {
    const id = relationId(doc)
    if (id !== null) map.set(id, doc)
  }
  return map
}

/** Corpus buit. Serveix de valor per defecte i de cas límit a les proves. */
export const emptyCorpus = (loadedAt = new Date(0).toISOString()): Corpus => ({
  apps: [],
  companies: [],
  dataTypes: [],
  categories: [],
  incidents: [],
  breaches: [],
  appById: new Map(),
  companyById: new Map(),
  dataTypeById: new Map(),
  categoryById: new Map(),
  loadedAt,
})

/**
 * Construeix un `Corpus` a partir de col·leccions ja carregades.
 *
 * És la porta d'entrada de les proves i de qualsevol procés que ja tingui els
 * documents a la mà: garanteix que els índexs per identificador es construeixen
 * sempre igual, vinguin les dades d'on vinguin.
 */
export const buildCorpus = (input: {
  apps?: App[]
  companies?: Company[]
  dataTypes?: DataType[]
  categories?: Category[]
  incidents?: Incident[]
  breaches?: Breach[]
  loadedAt?: string
}): Corpus => {
  const apps = input.apps ?? []
  const companies = input.companies ?? []
  const dataTypes = input.dataTypes ?? []
  const categories = input.categories ?? []
  return {
    apps,
    companies,
    dataTypes,
    categories,
    incidents: input.incidents ?? [],
    breaches: input.breaches ?? [],
    appById: indexById(apps),
    companyById: indexById(companies),
    dataTypeById: indexById(dataTypes),
    categoryById: indexById(categories),
    loadedAt: input.loadedAt ?? new Date(0).toISOString(),
  }
}

/**
 * Carrega tot el corpus d'una sola passada.
 *
 * Decisions de càrrega:
 *
 *  - `depth: 0`. No volem documents niats: totes les relacions arriben com a
 *    identificadors i es resolen contra els índexs del corpus. Amb profunditat
 *    més gran, una fitxa portaria a sobre l'empresa, l'empresa la matriu i cada
 *    tipus de dada el seu document, multiplicant per deu el pes de la consulta
 *    per tenir tres vegades el mateix objecte.
 *  - `pagination: false` i `limit: 0`. Són vint-i-cinc fitxes i un centenar de
 *    documents auxiliars: paginar-ho seria fer vint consultes per no estalviar
 *    res i obligar cada anàlisi a saber-ne.
 *  - Només fitxes publicades. Un esborrany és una fitxa a mitges i faria
 *    trontollar qualsevol estadística de cobertura.
 *  - Les filtracions es carreguen dins d'un `try`: la col·lecció és nova i el
 *    corpus ha de continuar sent vàlid encara que no hi hagi cap document o
 *    encara que la col·lecció no hi sigui.
 */
export const loadCorpus = async (
  payload: Payload,
  options: { now?: Date } = {},
): Promise<Corpus> => {
  const common = { depth: 0, limit: 0, pagination: false, overrideAccess: true } as const

  const [apps, companies, dataTypes, categories, incidents] = await Promise.all([
    payload.find({
      collection: 'apps',
      ...common,
      draft: false,
      where: { _status: { equals: 'published' } },
      sort: 'name',
    }),
    payload.find({ collection: 'companies', ...common, sort: 'name' }),
    payload.find({ collection: 'data-types', ...common, sort: 'slug' }),
    payload.find({ collection: 'categories', ...common, sort: 'slug' }),
    payload.find({ collection: 'incidents', ...common, sort: 'occurredAt' }),
  ])

  let breaches: Breach[] = []
  try {
    const found = await payload.find({ collection: 'breaches', ...common, sort: 'name' })
    breaches = found.docs
  } catch {
    // La col·lecció encara s'està omplint (o encara no existeix). Un corpus
    // sense filtracions és un corpus vàlid: el mòdul d'incidents ho compta com
    // a «cap filtració importada», no com a «cap filtració».
    breaches = []
  }

  return buildCorpus({
    apps: apps.docs,
    companies: companies.docs,
    dataTypes: dataTypes.docs,
    categories: categories.docs,
    incidents: incidents.docs,
    breaches,
    loadedAt: (options.now ?? new Date()).toISOString(),
  })
}
