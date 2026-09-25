/**
 * Tipus de la instantània que viatja del servidor al navegador.
 *
 * El fitxer no importa res, ni Payload ni el mòdul d'anàlisi ni React. El
 * component de client l'importa amb `import type`, així que la frontera entre
 * servidor i client la garanteix el sistema de tipus.
 *
 * Tot ha de ser serialitzable: cadenes, nombres, booleans, matrius i objectes
 * plans. Cap `Map`, cap `Date`, cap funció.
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

/** Estat d'una afirmació amb evidència, tal com el defineix `fields/evidence`. */
export type FactStatus = 'yes' | 'partial' | 'no' | 'unknown' | 'na'

/** Una afirmació retallada: l'estat i, si n'hi ha, l'adreça on s'actua. */
export type FactLite = {
  status: FactStatus
  /** Adreça oficial on la persona pot fer l'acció (configuració, formulari…). */
  url: string | null
}

export type MfaMethod = 'passkey' | 'hardware-key' | 'totp' | 'app-push' | 'email' | 'sms'

export type E2eeScope =
  | 'all-default'
  | 'all-optin'
  | 'partial-default'
  | 'partial-optin'
  | 'metadata-excluded'
  | 'none'

export type Difficulty = 'easy' | 'medium' | 'hard' | 'impossible' | 'unknown'

/** Com s'esborra el compte, tal com ho documenta la fitxa. */
export type DeletionLite = {
  possible: FactStatus
  selfService: FactStatus
  /** Adreça directa per començar l'eliminació. */
  url: string | null
  difficulty: Difficulty
  waitingPeriodDays: number | null
  requiresSupportContact: boolean
}

/**
 * Textos editorials de les fitxes que fa servir el pla d'acció.
 *
 * No van a la instantània inicial: són la meitat del pes i només calen quan hi
 * ha resultats. Es baixen d'una vegada, sencers i iguals per a tothom, de
 * manera que la petició no diu res de la tria.
 */
export type ControlKey =
  | 'mfa'
  | 'e2ee'
  | 'targetedAdvertising'
  | 'adOptOut'
  | 'aiTraining'
  | 'telemetryOptOut'
  | 'dataExport'

export type AppDetails = {
  controls: Partial<Record<ControlKey, string>>
  deletionSteps: string[]
  deletionObstacles: string | null
  deletionDataRetained: string | null
}

export type DetailsBundle = Record<string, AppDetails>

/** Tot el que la persona pot fer dins del servei, amb l'adreça per fer-ho. */
export type ControlsLite = {
  mfa: FactLite & { methods: MfaMethod[] }
  e2ee: FactLite & { scope: E2eeScope | null }
  targetedAdvertising: FactLite
  /** Es pot desactivar la publicitat personalitzada. */
  adOptOut: FactLite
  aiTraining: FactLite
  telemetryOptOut: FactLite
  dataExport: FactLite
  rightsRequest: string | null
  privacyCenter: string | null
  /** Patrons foscos d'alta gravetat documentats. */
  severeDarkPatterns: number
  /** Configuració per defecte: `permissive` vol dir que cal anar a canviar-la. */
  defaultPosture: 'protective' | 'balanced' | 'permissive' | 'unknown'
}

/**
 * Filtració del catàleg de Have I Been Pwned lligada a una o més fitxes.
 *
 * `match` diu com s'ha fet el lligam: `editorial` quan la redacció l'ha assignat
 * a la fitxa o a l'empresa, `domain` quan coincideix el domini del servei. La
 * distinció s'ensenya, perquè no és el mateix grau de certesa.
 */
export type BreachLite = {
  name: string
  title: string
  domain: string | null
  /** AAAA-MM-DD. */
  date: string | null
  pwnCount: number | null
  /** Índexs a `Snapshot.dataTypes`. */
  dataTypes: number[]
  /** Categories originals que el catàleg no pot traduir. */
  otherClasses: string[]
  passwords: boolean
  verified: boolean
  sensitive: boolean
}

export type IncidentLite = {
  slug: string
  title: string
  type: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  /** AAAA-MM-DD. */
  date: string | null
  fine: string | null
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
  /** Slugs de les categories, per enllaçar el comparador. */
  categorySlugs: string[]
  /** Entre les de més persones usuàries del directori: surt a la tria ràpida. */
  popular: boolean
  controls: ControlsLite
  deletion: DeletionLite
  /** Índexs a `Snapshot.breaches`, amb com s'ha fet el lligam. */
  breaches: { index: number; match: 'editorial' | 'domain' }[]
  /** Índexs a `Snapshot.incidents`. */
  incidents: number[]
  /** Dada comprada o venuda a intermediaris, segons la fitxa. */
  dataBrokerSales: FactStatus
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
  breaches: BreachLite[]
  incidents: IncidentLite[]
  /** Filtracions importades al catàleg, per dir de quantes s'ha buscat. */
  breachCatalogSize: number
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

export const MFA_METHOD_LABELS: Record<MfaMethod, string> = {
  passkey: 'claus d’accés (passkeys)',
  'hardware-key': 'clau de seguretat física',
  totp: 'aplicació d’autenticació',
  'app-push': 'notificació a l’aplicació',
  email: 'codi per correu',
  sms: 'SMS',
}

/**
 * De més a menys resistent a la suplantació. Les claus d'accés i les físiques
 * no es poden introduir en un lloc fals; un codi d'aplicació sí, però no depèn
 * de la companyia telefònica; l'SMS es pot interceptar amb un duplicat de SIM.
 */
export const MFA_METHOD_RANK: readonly MfaMethod[] = [
  'passkey',
  'hardware-key',
  'totp',
  'app-push',
  'email',
  'sms',
]

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  easy: 'fàcil',
  medium: 'dificultat mitjana',
  hard: 'difícil',
  impossible: 'no es pot fer',
  unknown: 'dificultat no documentada',
}

export const INCIDENT_TYPE_LABELS: Record<string, string> = {
  breach: 'bretxa de seguretat',
  leak: 'exposició de dades',
  scraping: 'recol·lecció massiva',
  'regulatory-fine': 'sanció',
  'regulatory-order': 'resolució d’un regulador',
  misuse: 'ús indegut de dades',
  vulnerability: 'vulnerabilitat greu',
  other: 'altres',
}

export const SEVERITY_LABELS: Record<IncidentLite['severity'], string> = {
  low: 'baixa',
  medium: 'mitjana',
  high: 'alta',
  critical: 'crítica',
}
