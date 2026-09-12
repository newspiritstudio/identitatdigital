/**
 * Tipus de la instantània que viatja del servidor al navegador.
 *
 * Aquest fitxer no importa res: ni Payload, ni el mòdul d'anàlisi, ni React.
 * És a propòsit. El component de client l'importa amb `import type`, i així la
 * frontera entre servidor i client queda garantida pel sistema de tipus i no
 * per la disciplina de qui hi escrigui després.
 *
 * Tot el que hi ha aquí ha de ser serialitzable: cadenes, nombres, booleans,
 * matrius i objectes plans. Cap `Map`, cap `Date`, cap funció.
 */

/* ─────────────────────────── vocabularis tancats ─────────────────────────── */

/** Valors de `dataCollection[].status` a la col·lecció d'aplicacions. */
export type RowStatus = 'yes' | 'optional' | 'no' | 'unknown'

/** Valors de `linkedToIdentity` i `usedForTracking`. */
export type Ternary = 'yes' | 'no' | 'unknown'

/** Valors de `sharedWith`. */
export type SharedWith = 'none' | 'group' | 'third-parties' | 'brokers' | 'unknown'

/** Valors de `alternatives[].comparability`. */
export type Comparability = 'equivalent' | 'partial' | 'complementary'

/* ──────────────────────────── peces de la instantània ────────────────────── */

/** Referència mínima a una empresa. Prou per anomenar-la i enllaçar-la. */
export type CompanyLite = {
  id: string
  name: string
  slug: string
}

/** Categoria funcional. Serveix per agrupar les caselles de selecció. */
export type CategoryLite = {
  slug: string
  name: string
}

/**
 * Tipus de dada del catàleg, retallat al que l'eina fa servir.
 *
 * `sensitivity` ordena la taula de dades, `special` separa les categories de
 * l'article 9 del RGPD i `slug` enllaça amb el catàleg públic. La descripció,
 * el «per què importa» i l'equivalència amb les etiquetes de l'App Store —que
 * són els camps llargs— es queden al servidor: l'eina no els mostra.
 */
export type DataTypeLite = {
  slug: string
  name: string
  /** 1–5, tal com el defineix la col·lecció de tipus de dada. */
  sensitivity: number
  /** Categoria especial de l'article 9 del RGPD. */
  special: boolean
}

/**
 * Una fila de la matriu de dades, en forma de tupla.
 *
 * Són unes tres-centes files en total i és, de bon tros, la part més gran de la
 * instantània. Amb objectes de claus repetides («dataType», «status»,
 * «linkedToIdentity»…) el pes es multiplicava per tres sense afegir cap
 * informació: el que viatja són sempre els mateixos cinc camps en el mateix
 * ordre. La tupla està tipada, de manera que el desavantatge habitual —que
 * ningú recordi què és la posició 3— el resol el compilador.
 *
 * Ordre: [índex a `dataTypes`, es recull, vinculada a la identitat, s'usa per
 * seguir la persona fora del servei, amb qui es comparteix].
 */
export type DataRow = readonly [number, RowStatus, Ternary, Ternary, SharedWith]

/**
 * Un indicador que fa baixar la puntuació d'una fitxa.
 *
 * Ve de `scores.breakdown`, que és el detall reproduïble del càlcul. Només es
 * conserven els pitjors de cada fitxa: l'eina n'ha d'explicar el motiu, no
 * reproduir la metodologia sencera, que ja té pàgina pròpia.
 */
export type WeakIndicator = {
  key: string
  label: string
  dimension: string
  /** 0–1. Com més baix, més estira la puntuació cap avall. */
  value: number
  /** Pes de l'indicador dins de la seva dimensió. */
  weight: number
}

/** Alternativa documentada a la fitxa, amb la puntuació de destí ja resolta. */
export type AlternativeLite = {
  slug: string
  name: string
  overall: number | null
  comparability: Comparability
  rationale: string
  /** `null` quan la fitxa no documenta cap contrapartida. */
  tradeOffs: string | null
}

/** Una aplicació publicada, retallada al que l'eina calcula. */
export type AppLite = {
  slug: string
  name: string
  /** Índexs dins de `Snapshot.categories`. El primer mana a l'hora d'agrupar. */
  categories: number[]
  company: CompanyLite
  /** Matriu última de l'empresa responsable: la clau del grup. */
  group: CompanyLite
  /** Puntuació global publicada. `null` vol dir que encara no se'n pot calcular. */
  overall: number | null
  confidence: number | null
  /** La confiança encara és massa baixa per comparar la fitxa amb altres. */
  provisional: boolean
  /** Indicadors que més estiren la puntuació cap avall, de pitjor a menys pitjor. */
  weakIndicators: WeakIndicator[]
  /** Indicadors aplicables que no s'han pogut documentar. */
  unknownIndicators: number
  rows: DataRow[]
  /** Empreses amb nom que reben dades d'aquesta fitxa (rastrejadors documentats). */
  recipients: CompanyLite[]
  /** Rastrejadors documentats sense empresa assignada. */
  unnamedTrackers: number
  alternatives: AlternativeLite[]
}

/**
 * Tot el que el navegador necessita per calcular, i res més.
 *
 * No hi ha resums, ni fonts, ni polítiques, ni incidents, ni text editorial de
 * les fitxes: l'eina no els ensenya i, si hi fossin, multiplicarien per deu el
 * que es baixa cada persona que obre la pàgina per acabar mostrant el mateix.
 */
export type Snapshot = {
  apps: AppLite[]
  dataTypes: DataTypeLite[]
  categories: CategoryLite[]
  /** Fitxes publicades al directori: el denominador de «de quantes tries». */
  publishedApps: number
  /** Alternatives descartades perquè la fitxa de destí encara no és pública. */
  unresolvedAlternatives: number
}

/* ──────────────────────────────── etiquetes ──────────────────────────────── */

export const SHARED_WITH_LABELS: Record<SharedWith, string> = {
  none: 'amb ningú fora del servei',
  group: 'amb empreses del mateix grup',
  'third-parties': 'amb tercers',
  brokers: 'amb intermediaris de dades',
  unknown: 'no documentat',
}

export const COMPARABILITY_LABELS: Record<Comparability, string> = {
  equivalent: 'cobreix la mateixa necessitat',
  partial: 'cobreix la part principal de la necessitat',
  complementary: 'resol una part concreta de la necessitat',
}

export const DIMENSION_LABELS: Record<string, string> = {
  privacy: 'privadesa',
  security: 'seguretat',
  agency: 'control de la persona usuària',
}
