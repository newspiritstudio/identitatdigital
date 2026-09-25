import 'dotenv/config'
import { getPayload } from 'payload'
import type { Payload } from 'payload'

import config from '@/payload.config'

/**
 * Importació del catàleg públic de filtracions de Have I Been Pwned.
 *
 * HIBP publica l'índex de filtracions sense clau ni cost, amb l'única condició
 * d'identificar-se amb un `User-Agent`. Aquí se'n fa un mirall perquè les
 * filtracions són evidència de tercers: no es redacten, es copien, i el valor
 * que hi afegim és el lligam amb el model del projecte (quina empresa, quins
 * tipus de dada del nostre vocabulari).
 *
 * La clau és `Name`, l'identificador estable de la font: mentre es mantingui,
 * reexecutar l'importador refà el mirall sense duplicar res. Un document que no
 * ha canviat no es torna a escriure, de manera que la segona execució seguida
 * no toca la base de dades i `importedAt` conserva la data de la darrera
 * importació que va portar alguna cosa nova.
 *
 * Mai no trepitja feina editorial: un lligam amb empresa marcat com a
 * `editorial` es respecta, i els tipus de dada que hagi afegit una persona
 * editora es conserven, perquè la deducció automàtica només sap sumar.
 */

const HIBP_ENDPOINT = 'https://haveibeenpwned.com/api/v3/breaches'

/** HIBP demana identificar-se; `HIBP_USER_AGENT` permet fer-ho amb un contacte propi. */
const USER_AGENT =
  process.env.HIBP_USER_AGENT ?? 'identitat.digital-importer (+https://identitat.digital)'

/** La resposta són uns quants megabytes: prou marge, però no una espera infinita. */
const REQUEST_TIMEOUT_MS = 60_000

/** Un miler d'escriptures simultànies tomba la connexió a Mongo; de deu en deu no. */
const BATCH_SIZE = 10

type HibpBreach = {
  Name: string
  Title?: string | null
  Domain?: string | null
  BreachDate?: string | null
  AddedDate?: string | null
  ModifiedDate?: string | null
  PwnCount?: number | null
  Description?: string | null
  LogoPath?: string | null
  DataClasses?: string[] | null
  IsVerified?: boolean | null
  IsFabricated?: boolean | null
  IsSensitive?: boolean | null
  IsRetired?: boolean | null
  IsSpamList?: boolean | null
  IsMalware?: boolean | null
}

/**
 * Correspondència entre el vocabulari de HIBP i el del projecte.
 *
 * És explícita i cobreix totes les categories que el catàleg fa servir avui.
 * Un `null` no és un oblit: vol dir que s'ha mirat i que el projecte no té cap
 * tipus de dada equivalent, cosa que és una decisió de vocabulari i no de
 * l'importador. Aquestes categories acaben a `unmappedDataClasses` i es
 * llisten al final de l'execució, que és com es detecten els buits reals del
 * catàleg en comptes d'inventar-ne d'hipotètics.
 *
 * Les categories que HIBP afegeixi més endavant no seran ni aquí ni al
 * vocabulari: es tracten com a no mapades i es reporten a part, marcades com a
 * desconegudes, perquè algú decideixi on van.
 */
const DATA_CLASS_MAP: Record<string, string | null> = {
  // Identificadors i contacte.
  'Email addresses': 'adreca-electronica',
  'Recovery email addresses': 'adreca-electronica',
  Names: 'nom-i-cognoms',
  'Display names': 'nom-i-cognoms',
  Nicknames: 'nom-i-cognoms',
  Usernames: 'identificador-de-compte',
  'Instant messenger identities': 'identificador-de-compte',
  'Social media profiles': 'identificador-de-compte',
  'User statuses': 'identificador-de-compte',
  'Phone numbers': 'numero-de-telefon',
  'Partial phone numbers': 'numero-de-telefon',
  'Physical addresses': 'adreca-postal',
  'Delivery instructions': 'adreca-postal',
  'Address book contacts': 'llista-de-contactes',
  'Social connections': 'xarxa-de-contactes',
  'Spoken languages': 'llengua',
  'Language preferences': 'llengua',

  // Dispositiu i xarxa. Els identificadors de maquinari (IMEI, MAC, número de
  // sèrie) van tots a «identificador de dispositiu» perquè fan la mateixa
  // funció: assenyalar un aparell concret de manera persistent.
  'IP addresses': 'adreca-ip',
  'MAC addresses': 'identificador-de-dispositiu',
  'IMEI numbers': 'identificador-de-dispositiu',
  'IMSI numbers': 'identificador-de-dispositiu',
  'Device serial numbers': 'identificador-de-dispositiu',
  'Device information': 'informacio-del-dispositiu',
  'Browser user agent details': 'informacio-del-dispositiu',
  'Time zones': 'informacio-del-dispositiu',
  'Telecommunications carrier': 'xarxa-i-connectivitat',
  'Cellular network names': 'xarxa-i-connectivitat',
  'Apps installed on devices': 'aplicacions-instal-lades',

  // Ubicació. HIBP distingeix la població del parell de coordenades, i el
  // projecte també: la diferència entre les dues és tota la sensibilitat.
  'Geographic locations': 'ubicacio-aproximada',
  'Latitude and longitude pairs': 'ubicacio-precisa',

  // Comportament.
  'Website activity': 'interaccions-i-us',
  'Device usage tracking data': 'interaccions-i-us',
  'Login histories': 'interaccions-i-us',
  'Profile statistics': 'interaccions-i-us',
  'Customer interactions': 'interaccions-i-us',
  'Browsing histories': 'historial-de-navegacio',

  // Contingut de la persona usuària. Els tiquets d'atenció i els registres de
  // servei són converses privades amb el servei, i per això entren aquí.
  'Private messages': 'contingut-de-missatges',
  'Email messages': 'contingut-de-missatges',
  'Chat logs': 'contingut-de-missatges',
  'SMS messages': 'contingut-de-missatges',
  'Support tickets': 'contingut-de-missatges',
  'Customer service records': 'contingut-de-missatges',
  'AI prompts': 'contingut-de-missatges',
  'Forum posts': 'publicacions-i-comentaris',
  Comments: 'publicacions-i-comentaris',
  Bios: 'publicacions-i-comentaris',
  'Personal descriptions': 'publicacions-i-comentaris',
  'Customer feedback': 'publicacions-i-comentaris',
  'Survey results': 'publicacions-i-comentaris',
  'Profile photos': 'fotografies-i-videos',
  Avatars: 'fotografies-i-videos',
  Photos: 'fotografies-i-videos',
  'Audio recordings': 'veu-i-audio',

  // Diners. «Dades de pagament» cobreix el mitjà de pagament i «historial de
  // compres» el rastre del que s'ha comprat; són coses diferents i revelen
  // coses diferents.
  'Partial credit card data': 'dades-de-pagament',
  'Credit cards': 'dades-de-pagament',
  'Credit card CVV': 'dades-de-pagament',
  'Bank account numbers': 'dades-de-pagament',
  'Payment methods': 'dades-de-pagament',
  'Financial transactions': 'dades-de-pagament',
  'Cryptocurrency wallet addresses': 'dades-de-pagament',
  Purchases: 'historial-de-compres',
  'Purchasing habits': 'historial-de-compres',
  'Payment histories': 'historial-de-compres',
  // Tot això només existeix perquè hi ha hagut una compra al darrere: el
  // programa de punts, el paquet que s'envia i la garantia que es reclama.
  'Loyalty program details': 'historial-de-compres',
  'Reward program balances': 'historial-de-compres',
  'Shipment tracking numbers': 'historial-de-compres',
  'Warranty claims': 'historial-de-compres',

  // Categories especials i salut. Els hàbits de consum (alcohol, tabac,
  // drogues, alimentació) s'hi inclouen perquè permeten deduir estat de salut,
  // que és el que els fa perillosos en una filtració.
  'Biometric data': 'dades-biometriques',
  'Personal health data': 'dades-de-salut',
  'HIV statuses': 'dades-de-salut',
  'Health insurance information': 'dades-de-salut',
  Disabilities: 'dades-de-salut',
  'Fitness levels': 'dades-de-salut',
  'Drinking habits': 'dades-de-salut',
  'Smoking habits': 'dades-de-salut',
  'Drug habits': 'dades-de-salut',
  'Eating habits': 'dades-de-salut',
  'Sexual orientations': 'orientacio-sexual',
  'Sexual fetishes': 'orientacio-sexual',
  Religions: 'conviccions-i-opinions',
  'Political views': 'conviccions-i-opinions',
  // Una donació diu a qui dónes suport, que és el mateix que dir què penses.
  'Political donations': 'conviccions-i-opinions',
  'Charitable donations': 'conviccions-i-opinions',

  // Credencials. La família «credentials» del vocabulari es va obrir arran de
  // la primera importació: les contrasenyes surten a dues de cada tres
  // filtracions i abans no tenien on anar. Es distingeix el que la persona
  // sap (contrasenya, PIN, pista, pregunta de recuperació) del que el servei
  // li lliura per no haver-l'hi de tornar a demanar (galetes de sessió,
  // testimonis, claus), perquè el risc no és el mateix: la primera es canvia
  // en un minut i sovint es reutilitza en vint serveis més.
  Passwords: 'contrasenya',
  'Historical passwords': 'contrasenya',
  'Password hints': 'contrasenya',
  'Password strengths': 'contrasenya',
  PINs: 'contrasenya',
  'Security questions and answers': 'pregunta-de-seguretat',
  // El cognom de soltera de la mare no és una dada familiar qualsevol: és la
  // pregunta de recuperació de tota la banca del segle passat.
  'Mothers maiden names': 'pregunta-de-seguretat',
  'Auth tokens': 'testimoni-d-autenticacio',
  'Encrypted keys': 'testimoni-d-autenticacio',
  'Mnemonic phrases': 'testimoni-d-autenticacio',

  // Atributs declarats al perfil.
  'Dates of birth': 'data-de-naixement',
  'Partial dates of birth': 'data-de-naixement',
  Ages: 'data-de-naixement',
  'Age groups': 'data-de-naixement',
  Genders: 'genere',
  // El tractament («Sr.», «Sra.») no és res més que el gènere dit de manera
  // educada, i en una filtració revela el mateix.
  Salutations: 'genere',

  // Identificació oficial: documents emesos per un estat, que són la matèria
  // primera de la suplantació d'identitat.
  'Government issued IDs': 'document-identificatiu-oficial',
  'Partial government issued IDs': 'document-identificatiu-oficial',
  'Passport numbers': 'document-identificatiu-oficial',
  'Social security numbers': 'document-identificatiu-oficial',
  "Driver's licenses": 'document-identificatiu-oficial',

  // Origen i ciutadania, categoria especial de l'article 9.
  Ethnicities: 'origen-etnic-o-nacionalitat',
  Races: 'origen-etnic-o-nacionalitat',
  Nationalities: 'origen-etnic-o-nacionalitat',
  'Citizenship statuses': 'origen-etnic-o-nacionalitat',
  'Places of birth': 'origen-etnic-o-nacionalitat',

  // Situació familiar, inclosos els noms de familiars: són dades de terceres
  // persones que no s'han registrat enlloc.
  'Marital statuses': 'situacio-familiar',
  'Relationship statuses': 'situacio-familiar',
  'Family structure': 'situacio-familiar',
  'Spouses names': 'situacio-familiar',
  "Family members' names": 'situacio-familiar',
  'Parenting plans': 'situacio-familiar',

  // Vida laboral i formativa.
  'Job titles': 'ocupacio-i-carrec',
  Occupations: 'ocupacio-i-carrec',
  Employers: 'ocupacio-i-carrec',
  'Company names': 'ocupacio-i-carrec',
  'Employment statuses': 'ocupacio-i-carrec',
  'Career levels': 'ocupacio-i-carrec',
  'Professional skills': 'ocupacio-i-carrec',
  'Years of professional experience': 'ocupacio-i-carrec',
  'Job applications': 'ocupacio-i-carrec',
  'Education levels': 'nivell-formatiu',
  'Academic records': 'nivell-formatiu',
  'School grades (class levels)': 'nivell-formatiu',

  // Situació econòmica, que és una cosa diferent del mitjà de pagament: no és
  // com pagues, és quant pots pagar i quant et fien.
  'Income levels': 'nivell-d-ingressos',
  Earnings: 'nivell-d-ingressos',
  'Account balances': 'nivell-d-ingressos',
  'Credit status information': 'nivell-d-ingressos',
  'Credit scores': 'nivell-d-ingressos',
  'Net worths': 'nivell-d-ingressos',
  'Socioeconomic levels': 'nivell-d-ingressos',
  'Loan information': 'nivell-d-ingressos',
  'Financial investments': 'nivell-d-ingressos',
  'Living costs': 'nivell-d-ingressos',
  'Utility bills': 'nivell-d-ingressos',
  'Home ownership statuses': 'nivell-d-ingressos',
  'Taxation records': 'nivell-d-ingressos',

  // El que continua sense equivalent. Són categories de cua llarga —cap no
  // arriba a deu filtracions— i totes descriuen coses que el projecte no
  // pregunta a cap fitxa: el cotxe que tens, els viatges que fas, el teu
  // aspecte o el teu signe del zodíac. Mentre ningú no les necessiti per
  // respondre una pregunta del directori, val més deixar-les fora del
  // vocabulari que inflar-lo amb tipus que no es faran servir mai.
  'Vehicle details': null,
  'Vehicle identification numbers (VINs)': null,
  'Vehicle registration plates': null,
  'Licence plates': null,
  'Car ownership statuses': null,
  'Travel habits': null,
  'Travel plans': null,
  'Flights taken': null,
  'Work habits': null,
  Appointments: null,
  'VIP statuses': null,
  'Buying preferences': null,
  'Personal interests': null,
  'Physical attributes': null,
  'Clothing sizes': null,
  'Tattoo status': null,
  'Beauty ratings': null,
  'Astrological signs': null,
  'IQ levels': null,
  'Deceased date': null,
  'Deceased statuses': null,
  'Homepage URLs': null,
  'User website URLs': null,
}

/** Entitats HTML que apareixen a les descripcions de HIBP. */
const NAMED_ENTITIES: Record<string, string> = {
  '&quot;': '"',
  '&apos;': "'",
  '&lt;': '<',
  '&gt;': '>',
  '&nbsp;': ' ',
  '&amp;': '&',
}

/**
 * Descodifica entitats. `&amp;` es deixa per al final perquè, si es fes
 * primer, una seqüència com `&amp;lt;` acabaria convertida en `<` i el text
 * diria una cosa que l'original no deia.
 */
function decodeEntities(input: string): string {
  let output = input.replace(/&#x([0-9a-f]+);/gi, (_match, hex: string) =>
    String.fromCodePoint(Number.parseInt(hex, 16)),
  )
  output = output.replace(/&#(\d+);/g, (_match, code: string) =>
    String.fromCodePoint(Number.parseInt(code, 10)),
  )
  for (const [entity, character] of Object.entries(NAMED_ENTITIES)) {
    if (entity === '&amp;') continue
    output = output.split(entity).join(character)
  }
  return output.split('&amp;').join('&')
}

/**
 * La descripció es desa en text pla i els enllaços a part.
 *
 * Desar l'HTML de HIBP tal qual obligaria a sanejar-lo cada vegada que es
 * pinta (és text de tercers dins del nostre lloc), impediria cercar-hi i
 * portaria enllaços amb `target` i `rel` aliens a la maquetació del projecte.
 * Amb el text net i les URL desades a `referenceUrls` no es perd informació i
 * el risc desapareix.
 */
function toPlainText(html: string): string {
  return decodeEntities(html.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim()
}

/** Enllaços citats per la descripció, sense repetits i en l'ordre original. */
function extractLinks(html: string): string[] {
  const found = new Set<string>()
  const pattern = /<a\b[^>]*\bhref\s*=\s*["']([^"']+)["']/gi
  let match: RegExpExecArray | null
  while ((match = pattern.exec(html)) !== null) {
    const url = decodeEntities(match[1]).trim()
    if (/^https?:\/\//i.test(url)) found.add(url)
  }
  return [...found]
}

/** Domini net, sense protocol, sense `www.` i sense barra final. */
function toHost(value: string | null | undefined): string | undefined {
  const raw = (value ?? '').trim().toLowerCase()
  if (!raw) return undefined
  const candidate = /^[a-z][a-z0-9+.-]*:\/\//.test(raw) ? raw : `https://${raw}`
  try {
    const host = new URL(candidate).hostname.replace(/^www\./, '')
    return host.includes('.') ? host : undefined
  } catch {
    return undefined
  }
}

/**
 * Força de la coincidència entre el domini filtrat i el d'una empresa.
 *
 * El sufix es compara sempre amb el punt davant (`.meta.com`, no `meta.com`)
 * perquè altrament `carmax.com` semblaria una filtració de `x.com`. Els tres
 * graus no valen igual: que el domini sigui idèntic és una certesa, que la
 * filtració pengi del domini de l'empresa (`accounts.instagram.com` sota
 * `instagram.com`) és gairebé tan bo, i que passi al revés —l'empresa consta
 * amb `about.meta.com` i la filtració és de `meta.com`— és només un indici,
 * perquè d'un domini en pengen filials que no tenen res a veure.
 */
const MATCH_NONE = 0
const MATCH_PARENT = 1
const MATCH_SUBDOMAIN = 2
const MATCH_EXACT = 3

function matchStrength(breachHost: string, companyHost: string): number {
  if (breachHost === companyHost) return MATCH_EXACT
  if (breachHost.endsWith(`.${companyHost}`)) return MATCH_SUBDOMAIN
  if (companyHost.endsWith(`.${breachHost}`)) return MATCH_PARENT
  return MATCH_NONE
}

/**
 * Un domini per fila: el corporatiu de `website` i cadascun dels
 * `productDomains`. La gent es troba els productes pel seu domini
 * (`snapchat.com`), no pel de la societat que els signa (`snap.com`), i HIBP
 * indexa les filtracions pel primer.
 */
type CompanyIndexEntry = { id: string; name: string; host: string }

/** Data en ISO per comparar i per desar, o `null` si la font no la porta. */
function toIsoDate(value: string | null | undefined): string | null {
  if (!value) return null
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? null : date.toISOString()
}

type BreachData = {
  name: string
  title: string
  domain: string | null
  pwnCount: number | null
  breachDate: string | null
  addedDate: string | null
  modifiedDate: string | null
  description: string | null
  referenceUrls: { url: string }[]
  logoPath: string | null
  dataClasses: { value: string }[]
  dataTypes: string[]
  unmappedDataClasses: { value: string }[]
  isVerified: boolean
  isFabricated: boolean
  isSensitive: boolean
  isRetired: boolean
  isSpamList: boolean
  isMalware: boolean
  company: string | null
  companyLinkSource: 'domain' | 'editorial' | null
}

/** Forma d'un document tal com el retorna Payload amb `depth: 0`. */
type StoredBreach = {
  id: string | number
  name: string
  title?: string | null
  domain?: string | null
  pwnCount?: number | null
  breachDate?: string | null
  addedDate?: string | null
  modifiedDate?: string | null
  description?: string | null
  referenceUrls?: ({ url?: string | null } | null)[] | null
  logoPath?: string | null
  dataClasses?: ({ value?: string | null } | null)[] | null
  dataTypes?: (string | number | { id: string | number })[] | null
  unmappedDataClasses?: ({ value?: string | null } | null)[] | null
  isVerified?: boolean | null
  isFabricated?: boolean | null
  isSensitive?: boolean | null
  isRetired?: boolean | null
  isSpamList?: boolean | null
  isMalware?: boolean | null
  company?: string | number | { id: string | number } | null
  companyLinkSource?: string | null
}

/** Identificador d'una relació, tant si ve resolta com si ve en cru. */
function toId(value: string | number | { id: string | number } | null | undefined): string | null {
  if (value === null || value === undefined) return null
  if (typeof value === 'object') return String(value.id)
  return String(value)
}

/**
 * Empremta comparable d'una filtració, per decidir si cal escriure.
 *
 * `importedAt` en queda fora a posta: si hi entrés, cada execució veuria
 * diferències a mil documents i la idempotència seria només aparent.
 */
function fingerprint(data: BreachData): string {
  return JSON.stringify([
    data.title,
    data.domain,
    data.pwnCount,
    data.breachDate,
    data.addedDate,
    data.modifiedDate,
    data.description,
    data.referenceUrls.map((entry) => entry.url),
    data.logoPath,
    data.dataClasses.map((entry) => entry.value),
    data.dataTypes,
    data.unmappedDataClasses.map((entry) => entry.value),
    data.isVerified,
    data.isFabricated,
    data.isSensitive,
    data.isRetired,
    data.isSpamList,
    data.isMalware,
    data.company,
    data.companyLinkSource,
  ])
}

/** La mateixa empremta, calculada sobre el que ja hi ha desat. */
function storedFingerprint(doc: StoredBreach): string {
  const values = (entries: ({ value?: string | null } | null)[] | null | undefined): string[] =>
    (entries ?? []).map((entry) => entry?.value ?? '').filter(Boolean)

  return JSON.stringify([
    doc.title ?? '',
    doc.domain ?? null,
    doc.pwnCount ?? null,
    toIsoDate(doc.breachDate),
    toIsoDate(doc.addedDate),
    toIsoDate(doc.modifiedDate),
    doc.description ?? null,
    (doc.referenceUrls ?? []).map((entry) => entry?.url ?? '').filter(Boolean),
    doc.logoPath ?? null,
    values(doc.dataClasses),
    (doc.dataTypes ?? []).map((entry) => toId(entry)).filter((id): id is string => Boolean(id)),
    values(doc.unmappedDataClasses),
    Boolean(doc.isVerified),
    Boolean(doc.isFabricated),
    Boolean(doc.isSensitive),
    Boolean(doc.isRetired),
    Boolean(doc.isSpamList),
    Boolean(doc.isMalware),
    toId(doc.company),
    (doc.companyLinkSource as 'domain' | 'editorial' | null) ?? null,
  ])
}

async function fetchBreaches(): Promise<HibpBreach[]> {
  const response = await fetch(HIBP_ENDPOINT, {
    headers: { 'User-Agent': USER_AGENT, Accept: 'application/json' },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })

  if (!response.ok) {
    throw new Error(
      `Have I Been Pwned ha respost ${response.status} ${response.statusText}. ` +
        'Si és un 403, revisa la capçalera «User-Agent» (variable HIBP_USER_AGENT).',
    )
  }

  const body: unknown = await response.json()
  if (!Array.isArray(body)) throw new Error('La resposta de HIBP no és la llista esperada.')
  return body as HibpBreach[]
}

/** Totes les empreses, amb una fila per cada domini que se'ls coneix. */
async function loadCompanyIndex(payload: Payload): Promise<CompanyIndexEntry[]> {
  const companies = await payload.find({
    collection: 'companies',
    joins: false,
    limit: 0,
    pagination: false,
    depth: 0,
    overrideAccess: true,
    sort: 'name',
  })

  const index: CompanyIndexEntry[] = []
  for (const company of companies.docs) {
    const id = String(company.id)
    const name = String(company.name)
    const hosts = new Set<string>()

    const corporate = toHost(company.website)
    if (corporate) hosts.add(corporate)
    for (const entry of company.productDomains ?? []) {
      const host = toHost(entry.domain)
      if (host) hosts.add(host)
    }

    for (const host of hosts) index.push({ id, name, host })
  }
  return index
}

type CompanyMatch = { entry?: CompanyIndexEntry; tied?: string[] }

/**
 * Empresa que correspon a un domini filtrat.
 *
 * Criteri de desempat, en aquest ordre: guanya la coincidència més forta
 * (idèntica abans que subdomini, i subdomini abans que domini pare) i, a
 * igualtat de força, el domini d'empresa més llarg, que és el més concret.
 *
 * Si després d'això encara empaten dues empreses diferents —passa amb els
 * grups que tenen societat i filial apuntant al mateix domini, com ByteDance i
 * TikTok Technology Limited— la filtració es deixa sense lligar. Endevinar-ho
 * escriuria una atribució falsa amb aparença de dada verificada, i entre les
 * dues fitxes l'única que pot decidir és una persona.
 */
function matchCompany(domain: string | null, index: CompanyIndexEntry[]): CompanyMatch {
  if (!domain) return {}

  let best = MATCH_NONE
  let bestLength = 0
  let winners: CompanyIndexEntry[] = []

  for (const entry of index) {
    const strength = matchStrength(domain, entry.host)
    if (strength === MATCH_NONE) continue

    if (strength > best || (strength === best && entry.host.length > bestLength)) {
      best = strength
      bestLength = entry.host.length
      winners = [entry]
      continue
    }

    if (strength === best && entry.host.length === bestLength && !winners.some((w) => w.id === entry.id)) {
      winners.push(entry)
    }
  }

  if (winners.length === 1) return { entry: winners[0] }
  if (winners.length > 1) return { tied: winners.map((entry) => entry.name) }
  return {}
}

type Outcome = 'created' | 'updated' | 'unchanged'

async function importBreaches(): Promise<void> {
  const payload = await getPayload({ config })

  console.log('\n🛡️  Filtracions des de Have I Been Pwned\n')

  const breaches = await fetchBreaches()
  console.log(`  ↓  ${breaches.length} filtracions descarregades del catàleg públic`)

  /**
   * El mapatge es valida contra els tipus de dada que hi ha de debò. Si algú
   * reanomena un slug al vocabulari, val més que la categoria surti com a no
   * mapada i es vegi a l'informe que no pas que desaparegui en silenci.
   */
  const dataTypeDocs = await payload.find({
    collection: 'data-types',
    limit: 0,
    pagination: false,
    depth: 0,
    overrideAccess: true,
  })
  const dataTypeIds = new Map<string, string>()
  for (const doc of dataTypeDocs.docs) dataTypeIds.set(String(doc.slug), String(doc.id))

  const brokenMappings = [...new Set(Object.values(DATA_CLASS_MAP))]
    .filter((slug): slug is string => Boolean(slug))
    .filter((slug) => !dataTypeIds.has(slug))

  const companyIndex = await loadCompanyIndex(payload)
  const companiesWithDomain = new Set(companyIndex.map((entry) => entry.id)).size
  console.log(
    `  ·  ${dataTypeIds.size} tipus de dada i ${companyIndex.length} dominis de ${companiesWithDomain} empreses al projecte`,
  )

  const existingDocs = await payload.find({
    collection: 'breaches',
    limit: 0,
    pagination: false,
    depth: 0,
    overrideAccess: true,
  })
  const existingByName = new Map<string, StoredBreach>()
  for (const doc of existingDocs.docs) existingByName.set(String(doc.name), doc as StoredBreach)

  const importedAt = new Date().toISOString()
  const counters: Record<Outcome, number> = { created: 0, updated: 0, unchanged: 0 }
  const unmappedCounts = new Map<string, number>()
  const unknownClasses = new Set<string>()
  const linked: string[] = []
  const tiedLinks: string[] = []
  const failures: string[] = []

  const importOne = async (breach: HibpBreach): Promise<void> => {
    const name = String(breach.Name)
    const existing = existingByName.get(name)
    const html = breach.Description ?? ''
    const domain = toHost(breach.Domain) ?? null

    const dataClasses = (breach.DataClasses ?? []).map(String)
    const mapped: string[] = []
    const unmapped: string[] = []
    for (const dataClass of dataClasses) {
      const slug = DATA_CLASS_MAP[dataClass]
      const id = slug ? dataTypeIds.get(slug) : undefined
      if (id) {
        if (!mapped.includes(id)) mapped.push(id)
        continue
      }
      unmapped.push(dataClass)
      unmappedCounts.set(dataClass, (unmappedCounts.get(dataClass) ?? 0) + 1)
      if (!(dataClass in DATA_CLASS_MAP)) unknownClasses.add(dataClass)
    }

    /**
     * Els tipus de dada es fusionen, no es reemplacen: una persona editora pot
     * haver-ne afegit després de llegir la descripció, i l'importador no té cap
     * manera de saber-ho ni cap dret a desfer-ho.
     */
    const previousTypes = (existing?.dataTypes ?? [])
      .map((entry) => toId(entry))
      .filter((id): id is string => Boolean(id))
    const dataTypes = [...previousTypes, ...mapped.filter((id) => !previousTypes.includes(id))]

    /**
     * El lligam amb empresa només és nostre quan el vam deduir nosaltres. Si
     * porta la marca `editorial` —o si hi ha empresa sense marca, cosa que
     * només pot ser obra d'una persona— es deixa tal com està.
     */
    const previousCompany = toId(existing?.company)
    const previousSource = (existing?.companyLinkSource as 'domain' | 'editorial' | null) ?? null
    const protectedLink = previousSource === 'editorial' || (previousCompany !== null && previousSource === null)

    const match = protectedLink ? {} : matchCompany(domain, companyIndex)
    const company = protectedLink ? previousCompany : (match.entry?.id ?? null)
    const companyLinkSource: 'domain' | 'editorial' | null = protectedLink
      ? previousSource
      : match.entry
        ? 'domain'
        : null

    const data: BreachData = {
      name,
      title: String(breach.Title ?? name),
      domain,
      pwnCount: typeof breach.PwnCount === 'number' ? breach.PwnCount : null,
      breachDate: toIsoDate(breach.BreachDate),
      addedDate: toIsoDate(breach.AddedDate),
      modifiedDate: toIsoDate(breach.ModifiedDate),
      description: toPlainText(html) || null,
      referenceUrls: extractLinks(html).map((url) => ({ url })),
      logoPath: breach.LogoPath ?? null,
      dataClasses: dataClasses.map((value) => ({ value })),
      dataTypes,
      unmappedDataClasses: unmapped.map((value) => ({ value })),
      isVerified: Boolean(breach.IsVerified),
      isFabricated: Boolean(breach.IsFabricated),
      isSensitive: Boolean(breach.IsSensitive),
      isRetired: Boolean(breach.IsRetired),
      isSpamList: Boolean(breach.IsSpamList),
      isMalware: Boolean(breach.IsMalware),
      company,
      companyLinkSource,
    }

    if (match.entry) linked.push(`${data.title} (${domain}) → ${match.entry.name}`)
    if (match.tied) tiedLinks.push(`${data.title} (${domain}) → ${match.tied.join(' / ')}`)

    if (!existing) {
      await payload.create({
        collection: 'breaches',
        data: { ...data, importedAt },
        overrideAccess: true,
      })
      counters.created += 1
      return
    }

    if (fingerprint(data) === storedFingerprint(existing)) {
      counters.unchanged += 1
      return
    }

    await payload.update({
      collection: 'breaches',
      id: existing.id,
      data: { ...data, importedAt },
      overrideAccess: true,
    })
    counters.updated += 1
  }

  for (let index = 0; index < breaches.length; index += BATCH_SIZE) {
    const batch = breaches.slice(index, index + BATCH_SIZE)
    await Promise.all(
      batch.map(async (breach) => {
        try {
          await importOne(breach)
        } catch (error) {
          failures.push(`${breach.Name}: ${(error as Error).message}`)
        }
      }),
    )

    const done = Math.min(index + BATCH_SIZE, breaches.length)
    if (done % 200 === 0 || done === breaches.length) {
      console.log(`  ·  ${String(done).padStart(4)}/${breaches.length} processades`)
    }
  }

  console.log(
    `\n  ${counters.created} creades · ${counters.updated} actualitzades · ${counters.unchanged} sense canvis`,
  )

  console.log(`\n🔗 Filtracions lligades a una empresa del directori: ${linked.length}`)
  for (const line of linked.slice(0, 30)) console.log(`    ·  ${line}`)
  if (linked.length > 30) console.log(`    ·  … i ${linked.length - 30} més`)

  if (tiedLinks.length) {
    console.log(
      `\n🤷 Filtracions amb més d'una empresa igual de possible, deixades sense lligar: ${tiedLinks.length}`,
    )
    for (const line of tiedLinks) console.log(`    ·  ${line}`)
  }

  const unmappedSorted = [...unmappedCounts.entries()].sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]),
  )
  console.log(
    `\n📋 Categories de HIBP sense tipus de dada equivalent: ${unmappedSorted.length} (buits del vocabulari)`,
  )
  for (const [dataClass, count] of unmappedSorted) {
    const flag = unknownClasses.has(dataClass) ? '  ⚠️  nova a HIBP, sense revisar' : ''
    console.log(`    ${String(count).padStart(4)}  ${dataClass}${flag}`)
  }

  if (brokenMappings.length) {
    console.log('\n⚠️  Slugs del mapatge que no existeixen al vocabulari:')
    for (const slug of brokenMappings) console.log(`    ·  ${slug}`)
  }

  if (failures.length) {
    console.log(`\n❌ ${failures.length} filtracions no s'han pogut desar:`)
    for (const line of failures.slice(0, 20)) console.log(`    ·  ${line}`)
    console.log('')
    process.exit(1)
  }

  console.log('')
  process.exit(0)
}

await importBreaches().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error)
  const cause =
    error instanceof Error && (error.name === 'TimeoutError' || error.name === 'AbortError')
      ? `La petició a HIBP ha superat els ${REQUEST_TIMEOUT_MS / 1000} segons d'espera.`
      : message
  console.error(`\n❌ La importació de filtracions ha fallat: ${cause}\n`)
  process.exit(1)
})
