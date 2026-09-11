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
  'Address book contacts': 'llista-de-contactes',
  'Social connections': 'xarxa-de-contactes',

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
  'Language preferences': 'informacio-del-dispositiu',
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
  Purchases: 'historial-de-compres',
  'Purchasing habits': 'historial-de-compres',
  'Payment histories': 'historial-de-compres',

  // Categories especials i salut. Els hàbits de consum (alcohol, tabac,
  // drogues, alimentació) s'hi inclouen perquè permeten deduir estat de salut,
  // que és exactament el que els fa perillosos en una filtració.
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
  'Political donations': 'conviccions-i-opinions',

  // Credencials. El vocabulari del projecte descriu dades personals que un
  // servei recull, no secrets d'autenticació, i per això no hi ha cap tipus on
  // encaixin. És el buit més gran que destapa aquesta importació: apareixen a
  // dues de cada tres filtracions.
  Passwords: null,
  'Historical passwords': null,
  'Password hints': null,
  'Password strengths': null,
  'Security questions and answers': null,
  'Auth tokens': null,
  PINs: null,
  'Encrypted keys': null,
  'Mnemonic phrases': null,
  'Mothers maiden names': null,

  // Atributs de la persona que el projecte encara no nomena.
  'Dates of birth': null,
  'Partial dates of birth': null,
  Ages: null,
  'Age groups': null,
  Genders: null,
  Salutations: null,
  'Physical attributes': null,
  'Clothing sizes': null,
  'Tattoo status': null,
  'Beauty ratings': null,
  'Astrological signs': null,
  'IQ levels': null,
  'Spoken languages': null,
  'Deceased date': null,
  'Deceased statuses': null,

  // Identificació oficial: documents emesos per un estat, que són la matèria
  // primera de la suplantació d'identitat.
  'Government issued IDs': null,
  'Partial government issued IDs': null,
  'Passport numbers': null,
  'Social security numbers': null,
  "Driver's licenses": null,
  'Taxation records': null,

  // Origen i ciutadania (categories de l'article 9 que el projecte només
  // cobreix parcialment amb «conviccions i opinions»).
  Nationalities: null,
  'Citizenship statuses': null,
  'Places of birth': null,
  Ethnicities: null,
  Races: null,

  // Situació familiar.
  'Marital statuses': null,
  'Relationship statuses': null,
  'Family structure': null,
  'Spouses names': null,
  "Family members' names": null,
  'Parenting plans': null,

  // Vida laboral i formativa.
  'Job titles': null,
  Occupations: null,
  Employers: null,
  'Employment statuses': null,
  'Career levels': null,
  'Professional skills': null,
  'Years of professional experience': null,
  'Job applications': null,
  'Company names': null,
  'Education levels': null,
  'Academic records': null,
  'School grades (class levels)': null,
  'Work habits': null,

  // Situació econòmica, més enllà del mitjà de pagament.
  'Income levels': null,
  Earnings: null,
  'Account balances': null,
  'Credit status information': null,
  'Credit scores': null,
  'Net worths': null,
  'Socioeconomic levels': null,
  'Loan information': null,
  'Financial investments': null,
  'Living costs': null,
  'Charitable donations': null,
  'Utility bills': null,
  'Home ownership statuses': null,
  'Cryptocurrency wallet addresses': null,

  // Béns, desplaçaments i relació comercial.
  'Vehicle details': null,
  'Vehicle identification numbers (VINs)': null,
  'Vehicle registration plates': null,
  'Licence plates': null,
  'Car ownership statuses': null,
  'Travel habits': null,
  'Travel plans': null,
  'Flights taken': null,
  Appointments: null,
  'Delivery instructions': null,
  'Shipment tracking numbers': null,
  'Warranty claims': null,
  'Loyalty program details': null,
  'Reward program balances': null,
  'VIP statuses': null,
  'Buying preferences': null,
  'Personal interests': null,
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
 * Dos dominis són el mateix lloc si coincideixen o si l'un penja de l'altre.
 * El sufix es compara amb el punt davant (`.meta.com`, no `meta.com`) perquè
 * altrament `carmax.com` semblaria una filtració de `x.com`.
 */
function isSameSite(a: string, b: string): boolean {
  return a === b || a.endsWith(`.${b}`) || b.endsWith(`.${a}`)
}

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

/** Totes les empreses amb lloc web, indexades pel domini que s'hi pot llegir. */
async function loadCompanyIndex(payload: Payload): Promise<CompanyIndexEntry[]> {
  const companies = await payload.find({
    collection: 'companies',
    limit: 0,
    pagination: false,
    depth: 0,
    overrideAccess: true,
    sort: 'name',
  })

  const index: CompanyIndexEntry[] = []
  for (const company of companies.docs) {
    const host = toHost(company.website)
    if (host) index.push({ id: String(company.id), name: String(company.name), host })
  }
  return index
}

/**
 * Empresa que correspon a un domini filtrat.
 *
 * Si més d'una fitxa hi encaixa (els grups solen compartir lloc web: Meta i
 * Meta Platforms Ireland apunten al mateix), guanya la coincidència exacta i,
 * si no n'hi ha, la primera per ordre alfabètic. La decisió fina és editorial i
 * un cop presa ja no la torna a tocar ningú.
 */
function matchCompany(domain: string | null, index: CompanyIndexEntry[]): CompanyIndexEntry | undefined {
  if (!domain) return undefined
  const candidates = index.filter((entry) => isSameSite(domain, entry.host))
  return candidates.find((entry) => entry.host === domain) ?? candidates[0]
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
  console.log(
    `  ·  ${dataTypeIds.size} tipus de dada i ${companyIndex.length} empreses amb domini al projecte`,
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

    const match = protectedLink ? undefined : matchCompany(domain, companyIndex)
    const company = protectedLink ? previousCompany : (match?.id ?? null)
    const companyLinkSource: 'domain' | 'editorial' | null = protectedLink
      ? previousSource
      : match
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

    if (match && !protectedLink) linked.push(`${data.title} (${domain}) → ${match.name}`)

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
