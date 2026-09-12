import type { EvidenceLevel, EvidenceStatus } from '@/fields/evidence'
import type { Dimension } from '@/lib/scoring/methodology'

/**
 * Frontera entre el servidor i el navegador.
 *
 * Tot són estructures planes: cadenes, nombres, booleans, llistes i objectes
 * literals. Cap `Date`, cap `Map`, cap classe i cap funció. La pàgina és un
 * component de servidor que prepara una instantània i la passa a un component
 * de client, i el que no es pot serialitzar falla en temps d'execució.
 *
 * La instantània es calcula sencera al servidor i viatja una sola vegada.
 * Triar categoria, triar fitxes i filtrar indicadors són operacions locals del
 * navegador, de manera que cap petició no diu al servidor què s'està mirant.
 */

/** Font citable, ja resolta a enllaç. */
export type SourceLink = {
  id: string
  publisher: string
  title: string
  url: string
}

/**
 * D'on surt el valor d'un indicador.
 *
 *  - `fact`: una afirmació amb evidència de la fitxa (sí / parcial / no…).
 *  - `select`: un camp de vocabulari tancat (claredat, dificultat, format…).
 *  - `computed`: un indicador calculat a partir de la matriu de dades o dels
 *    incidents, que no té una afirmació de sí o no al darrere.
 */
export type CellKind = 'fact' | 'select' | 'computed'

/**
 * Estat visual d'una casella.
 *
 * Els tres estats que el projecte no pot confondre mai són `yes` (documentat
 * que sí), `no` (documentat que no) i `unknown` (no documentat). `graded` és el
 * cas dels indicadors que no responen sí o no sinó amb un grau, i `na` el dels
 * que no apliquen al servei.
 */
export type CellState = EvidenceStatus | 'graded'

export type IndicatorCell = {
  kind: CellKind
  state: CellState
  /** Text de l'afirmació, ja redactat al servidor. */
  claim: string
  /** Valor de l'indicador dins la metodologia, de 0 a 100. `null` = no documentat. */
  value: number | null
  /** `false` quan l'indicador no aplica al servei. */
  applicable: boolean
  evidenceLevel: EvidenceLevel
  evidenceLabel: string
  /** Explicació editorial de la fitxa. */
  detail: string | null
  /** Nota del càlcul, amb els denominadors que expliquen la xifra. */
  note: string | null
  sourceIds: string[]
  /**
   * Clau de comparació entre fitxes. Dues caselles «diuen el mateix» quan
   * tenen la mateixa clau; és el que decideix si una fila és una diferència.
   */
  answer: string
}

export type AlternativeSnapshot = {
  /** `null` quan la fitxa de l'alternativa encara no és publicada. */
  slug: string | null
  name: string
  comparability: 'equivalent' | 'partial' | 'complementary'
  comparabilityLabel: string
  rationale: string
  /** `null` vol dir «no n'hi ha de documentades», i s'ha de dir així. */
  tradeOffs: string | null
  overall: number | null
  confidence: number | null
  /** L'alternativa és al directori publicat i es pot afegir a la comparació. */
  inCorpus: boolean
}

export type AppScores = {
  privacy: number | null
  security: number | null
  agency: number | null
  overall: number | null
  confidence: number | null
  /** Proporció d'indicadors aplicables documentats, de 0 a 1. */
  coverage: number | null
  provisional: boolean
  methodologyVersion: string | null
}

export type AppSnapshot = {
  id: string
  slug: string
  name: string
  tagline: string
  company: string | null
  categoryIds: string[]
  scores: AppScores
  /** Una casella per clau d'indicador de la metodologia. */
  cells: Record<string, IndicatorCell>
  alternatives: AlternativeSnapshot[]
}

export type CategorySnapshot = {
  id: string
  slug: string
  name: string
  /** El criteri que fa comparables dues fitxes. Es publica, no s'amaga. */
  functionalNeed: string
  privacyContext: string | null
  /** Identificadors de les fitxes publicades d'aquesta categoria. */
  appIds: string[]
}

export type IndicatorSnapshot = {
  key: string
  label: string
  description: string
  weight: number
}

export type DimensionSnapshot = {
  key: Dimension
  label: string
  /** Pes de la dimensió dins la puntuació global, en tant per cent. */
  weight: number
  indicators: IndicatorSnapshot[]
}

export type ComparatorSnapshot = {
  methodologyVersion: string
  /** Només categories amb dues fitxes publicades o més: amb una no hi ha comparació. */
  categories: CategorySnapshot[]
  apps: AppSnapshot[]
  dimensions: DimensionSnapshot[]
  /** Fonts citades a les caselles, indexades per identificador per no repetir-les. */
  sources: Record<string, SourceLink>
  indicatorCount: number
  /** Fitxes publicades que encara no tenen cap altra fitxa de la seva categoria. */
  appsOutsideComparison: number
  /** Diferència de confiança a partir de la qual avisem que no són comparables. */
  confidenceGapThreshold: number
  /** Per sota d'aquesta confiança, la puntuació és provisional. */
  provisionalThreshold: number
}

/** Selecció inicial, ja validada contra el corpus. */
export type InitialSelection = {
  categorySlug: string | null
  appSlugs: string[]
}

/** Nombre màxim de fitxes comparables alhora. Amb quatre la taula deixa de llegir-se. */
export const MAX_APPS = 3

/** Noms dels paràmetres de consulta, en ordre de columna. */
export const SLOT_PARAMS = ['a', 'b', 'c'] as const
