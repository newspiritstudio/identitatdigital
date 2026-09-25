/**
 * Consulta d'una adreça electrònica a XposedOrNot.
 *
 * XposedOrNot (https://xposedornot.com) és un projecte obert que manté un
 * catàleg de filtracions i una API gratuïta i sense clau per saber en quines
 * apareix una adreça. Have I Been Pwned fa el mateix però aquesta consulta en
 * concret és de pagament; per això aquí es fa servir XposedOrNot.
 *
 * Decisions que no s'han de desfer:
 *
 *  - La consulta la fa el NAVEGADOR directament contra XposedOrNot, no el
 *    nostre servidor. L'adreça no passa per cap màquina nostra, i el límit de
 *    peticions (per adreça IP) és el de cada persona i no un de compartit que
 *    s'esgotaria de seguida. Per això la política de seguretat de contingut
 *    permet `connect-src https://api.xposedornot.com` i res més.
 *  - No es carreguen els logotips que retorna l'API: cada imatge seria una
 *    petició a un tercer que diria, filtració per filtració, on surt l'adreça.
 *  - Ni l'adreça ni el resultat es desen enlloc. Viuen a la memòria de la
 *    pestanya i desapareixen en tancar-la.
 *  - Les condicions d'ús demanen atribució visible, i la pàgina la fa.
 *
 * La part pura (validar, interpretar la resposta) està separada de la de xarxa
 * perquè es pugui provar sense tocar el servei.
 */

export const XON_ORIGIN = 'https://api.xposedornot.com'
export const XON_ANALYTICS = `${XON_ORIGIN}/v1/breach-analytics`
export const XON_TIMEOUT_MS = 15_000

/** Longitud màxima d'una adreça segons l'RFC 5321. */
const MAX_EMAIL_LENGTH = 254

/**
 * Validació deliberadament permissiva: una part local, una arrova, un domini
 * amb almenys un punt i un domini de primer nivell de dues lletres o més. No
 * intenta reproduir l'RFC sencer; només evita enviar coses que no poden ser
 * una adreça.
 */
const EMAIL_PATTERN = /^[^\s@]{1,64}@[^\s@.]+(?:\.[^\s@.]+)*\.[^\s@.]{2,}$/

/** Adreça normalitzada (sense espais, en minúscules) o `null` si no n'és una. */
export function normaliseEmail(raw: unknown): string | null {
  if (typeof raw !== 'string') return null
  const trimmed = raw.trim().toLowerCase()
  if (trimmed.length === 0 || trimmed.length > MAX_EMAIL_LENGTH) return null
  return EMAIL_PATTERN.test(trimmed) ? trimmed : null
}

/**
 * Com estaven guardades les contrasenyes al servei filtrat, segons
 * XposedOrNot. `plaintext` i `easytocrack` volen dir, a efectes pràctics, que
 * la contrasenya s'ha de donar per coneguda.
 */
export type PasswordRisk = 'plaintext' | 'easytocrack' | 'hardtocrack' | 'unknown'

export interface XonBreach {
  /** Identificador de XposedOrNot. Sovint coincideix amb el nom de HIBP. */
  id: string
  domain: string | null
  industry: string | null
  /** Any de la filtració. XposedOrNot no en publica el dia. */
  year: number | null
  records: number | null
  /** Categories de dades en el vocabulari de HIBP, sense buits ni repetits. */
  dataClasses: string[]
  passwordRisk: PasswordRisk
  verified: boolean
  description: string | null
}

export type XonOutcome =
  | { status: 'found'; breaches: XonBreach[] }
  | { status: 'none' }
  | { status: 'invalid' }
  | { status: 'rate-limited'; retryAfterSeconds: number | null }
  | { status: 'unavailable'; reason: string }

const PASSWORD_RISKS: readonly PasswordRisk[] = ['plaintext', 'easytocrack', 'hardtocrack', 'unknown']

const record = (value: unknown): Record<string, unknown> | null =>
  typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null

const cleanString = (value: unknown, max = 2000): string | null => {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed.slice(0, max) : null
}

/**
 * Una entrada de `breaches_details`. Tot es valida camp per camp: és una
 * resposta d'un tercer i el que no té la forma esperada es descarta en lloc
 * d'arribar a la pantalla.
 */
export function parseXonBreach(raw: unknown): XonBreach | null {
  const entry = record(raw)
  if (!entry) return null
  const id = cleanString(entry.breach, 200)
  if (id === null) return null

  const year = Number.parseInt(String(entry.xposed_date ?? ''), 10)
  const records = typeof entry.xposed_records === 'number' ? entry.xposed_records : Number.NaN
  const classes = typeof entry.xposed_data === 'string' ? entry.xposed_data.split(';') : []
  const seen = new Set<string>()
  const dataClasses: string[] = []
  for (const value of classes) {
    const trimmed = value.trim()
    const key = trimmed.toLowerCase()
    if (trimmed.length === 0 || seen.has(key)) continue
    seen.add(key)
    dataClasses.push(trimmed)
  }
  const risk = String(entry.password_risk ?? '').toLowerCase()
  const domain = cleanString(entry.domain, 253)?.toLowerCase() ?? null

  return {
    id,
    domain: domain !== null && /^[a-z0-9.-]+\.[a-z]{2,}$/.test(domain) ? domain : null,
    industry: cleanString(entry.industry, 100),
    year: Number.isFinite(year) && year > 1990 && year < 2100 ? year : null,
    records: Number.isFinite(records) && records >= 0 ? records : null,
    dataClasses,
    passwordRisk: (PASSWORD_RISKS as readonly string[]).includes(risk)
      ? (risk as PasswordRisk)
      : 'unknown',
    verified: String(entry.verified ?? '').toLowerCase() === 'yes' || entry.verified === true,
    description: cleanString(entry.details),
  }
}

/**
 * Interpreta el cos d'una resposta 200 de `breach-analytics`.
 *
 * Quan l'adreça no apareix enlloc, XposedOrNot respon igualment 200 però amb
 * `ExposedBreaches: null`. Les filtracions es tornen de la més recent a la més
 * antiga, que és l'ordre en què convé actuar.
 */
export function parseXonAnalytics(body: unknown): XonOutcome {
  const root = record(body)
  if (!root) return { status: 'unavailable', reason: 'XposedOrNot ha tornat una resposta que no s’entén.' }
  const exposed = record(root.ExposedBreaches)
  if (!exposed) return { status: 'none' }
  const details = Array.isArray(exposed.breaches_details) ? exposed.breaches_details : []
  const breaches: XonBreach[] = []
  const ids = new Set<string>()
  for (const raw of details) {
    const breach = parseXonBreach(raw)
    if (!breach || ids.has(breach.id)) continue
    ids.add(breach.id)
    breaches.push(breach)
  }
  if (breaches.length === 0) return { status: 'none' }
  breaches.sort((a, b) => (b.year ?? 0) - (a.year ?? 0) || a.id.localeCompare(b.id))
  return { status: 'found', breaches }
}

const retryAfter = (response: Response, body: unknown): number | null => {
  const header = Number.parseInt(response.headers.get('Retry-After') ?? '', 10)
  if (Number.isFinite(header) && header >= 0) return header
  const fromBody = record(record(body)?.detail)?.retry_after
  return typeof fromBody === 'number' && Number.isFinite(fromBody) ? fromBody : null
}

/**
 * Consulta XposedOrNot des del navegador.
 *
 * La petició és «simple» (un GET sense capçaleres pròpies), de manera que no hi
 * ha consulta prèvia CORS; no porta galetes ni `Referer`, perquè XposedOrNot no
 * ha de saber des de quina pàgina es pregunta.
 */
export async function checkEmail(
  rawEmail: string,
  options: { fetchImpl?: typeof fetch; signal?: AbortSignal; timeoutMs?: number } = {},
): Promise<XonOutcome> {
  const email = normaliseEmail(rawEmail)
  if (email === null) return { status: 'invalid' }

  const { fetchImpl = fetch, signal, timeoutMs = XON_TIMEOUT_MS } = options
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  const onAbort = () => controller.abort()
  signal?.addEventListener('abort', onAbort, { once: true })

  try {
    let response: Response
    try {
      response = await fetchImpl(`${XON_ANALYTICS}?email=${encodeURIComponent(email)}`, {
        method: 'GET',
        cache: 'no-store',
        credentials: 'omit',
        referrerPolicy: 'no-referrer',
        signal: controller.signal,
      })
    } catch {
      if (signal?.aborted) return { status: 'unavailable', reason: 'S’ha cancel·lat la consulta.' }
      if (controller.signal.aborted) {
        return { status: 'unavailable', reason: 'XposedOrNot no ha respost a temps.' }
      }
      return {
        status: 'unavailable',
        reason:
          'No s’ha pogut connectar amb XposedOrNot. Pot ser la connexió, o un blocador de contingut que no deixa sortir la petició.',
      }
    }

    let body: unknown = null
    try {
      body = await response.json()
    } catch {
      body = null
    }

    if (response.status === 429) return { status: 'rate-limited', retryAfterSeconds: retryAfter(response, body) }
    // XposedOrNot respon 404 quan no reconeix el text com una adreça.
    if (response.status === 404) return { status: 'invalid' }
    if (!response.ok) {
      return {
        status: 'unavailable',
        reason: `XposedOrNot ha respost amb un error (${response.status}).`,
      }
    }
    return parseXonAnalytics(body)
  } finally {
    clearTimeout(timer)
    signal?.removeEventListener('abort', onAbort)
  }
}
