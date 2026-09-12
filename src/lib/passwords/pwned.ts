/**
 * Comprovació de contrasenyes filtrades per k-anonimat.
 *
 * El procediment, sencer:
 *
 *  1. El navegador calcula el resum SHA-1 de la contrasenya. Això passa dins del
 *     dispositiu, amb `crypto.subtle`, i no surt d'allà.
 *  2. Se'n prenen els CINC primers caràcters hexadecimals. Cinc caràcters són
 *     vint bits: identifiquen un calaix d'entre 1.048.576, i a cada calaix hi ha
 *     unes vuit-centes contrasenyes de les més de vuit-cents milions que té Have
 *     I Been Pwned.
 *  3. Només aquests cinc caràcters viatgen. El nostre servidor els reenvia i
 *     rep la llista de sufixos del calaix.
 *  4. El navegador busca el seu sufix dins de la llista, localment.
 *
 * Ni el nostre servidor ni Have I Been Pwned arriben a veure mai la contrasenya
 * ni el resum sencer. El que saben, com a molt, és que algú ha preguntat per un
 * calaix on hi ha vuit-centes contrasenyes diferents, i això no els permet dir
 * quina.
 *
 * El resum SHA-1 aquí no s'usa com a mesura de seguretat —SHA-1 està trencat per
 * a col·lisions— sinó com a identificador: és el que fa servir l'índex de Have I
 * Been Pwned i per tant és el que cal calcular per consultar-lo.
 */

/** Exactament cinc caràcters hexadecimals. Res més. */
const PREFIX_PATTERN = /^[0-9a-fA-F]{5}$/

/**
 * Valida i normalitza un prefix.
 *
 * Retorna el prefix en majúscules si és vàlid i `null` si no ho és. Qualsevol
 * cosa que no siguin cinc caràcters hexadecimals s'ha de rebutjar abans de
 * reenviar res enlloc: és l'única frontera entre «demanem un calaix de vint
 * bits» i «reenviem a un tercer allò que ens hagin passat».
 */
export function normalisePrefix(raw: unknown): string | null {
  if (typeof raw !== 'string') return null
  if (raw.length !== 5) return null
  if (!PREFIX_PATTERN.test(raw)) return null
  return raw.toUpperCase()
}

export function isValidPrefix(raw: unknown): raw is string {
  return normalisePrefix(raw) !== null
}

/** Resum SHA-1 en hexadecimal i en majúscules, tal com el vol l'índex de HIBP. */
export async function sha1Hex(text: string): Promise<string> {
  const bytes = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-1', bytes)
  let out = ''
  for (const byte of new Uint8Array(digest)) {
    out += byte.toString(16).padStart(2, '0')
  }
  return out.toUpperCase()
}

export interface HashParts {
  hash: string
  prefix: string
  suffix: string
}

/** Parteix el resum en els cinc caràcters que viatgen i els trenta-cinc que no. */
export function splitHash(hash: string): HashParts {
  return { hash, prefix: hash.slice(0, 5), suffix: hash.slice(5) }
}

export async function hashParts(password: string): Promise<HashParts> {
  return splitHash(await sha1Hex(password))
}

/**
 * Busca el sufix dins de la resposta del calaix i en retorna el nombre
 * d'aparicions. Zero vol dir que no hi és.
 *
 * Cada línia és `SUFIX:NOMBRE`. Amb `Add-Padding: true`, Have I Been Pwned hi
 * afegeix entrades falses amb el nombre a zero perquè la MIDA de la resposta no
 * delati res; per això les entrades amb comptador zero s'ignoren sempre.
 */
export function countInRange(body: string, suffix: string): number {
  const wanted = suffix.toUpperCase()
  for (const line of body.split('\n')) {
    const separator = line.indexOf(':')
    if (separator === -1) continue
    if (line.slice(0, separator).trim().toUpperCase() !== wanted) continue
    const count = Number.parseInt(line.slice(separator + 1).trim(), 10)
    if (!Number.isFinite(count) || count <= 0) return 0 // encoixinat
    return count
  }
  return 0
}

/** Camí de la nostra ruta procuradora. La contrasenya no hi arriba mai. */
export const PWNED_ENDPOINT = '/eines/api/pwned'

export type PwnedOutcome =
  | { status: 'pwned'; count: number }
  | { status: 'absent' }
  /**
   * No s'ha pogut comprovar. És un estat PROPI i diferent de «absent»: no poder
   * comprovar i estar net no són la mateixa cosa, i la interfície no els pot
   * confondre mai.
   */
  | { status: 'unavailable'; reason: string }

/**
 * Comprova una contrasenya des del navegador.
 *
 * Fixa't en què s'envia: `?prefix=` i cinc caràcters. El sufix no surt d'aquesta
 * funció. Es pot verificar obrint la pestanya de xarxa del navegador.
 */
export async function checkPassword(
  password: string,
  fetchImpl: typeof fetch = fetch,
): Promise<PwnedOutcome> {
  if (password.length === 0) return { status: 'unavailable', reason: 'No hi ha res a comprovar.' }

  let parts: HashParts
  try {
    parts = await hashParts(password)
  } catch {
    return {
      status: 'unavailable',
      reason:
        'Aquest navegador no permet calcular el resum dins del dispositiu (cal una connexió segura).',
    }
  }

  let response: Response
  try {
    response = await fetchImpl(`${PWNED_ENDPOINT}?prefix=${parts.prefix}`, {
      method: 'GET',
      cache: 'no-store',
      headers: { Accept: 'text/plain' },
    })
  } catch {
    return { status: 'unavailable', reason: 'No s’ha pogut connectar amb el servei de consulta.' }
  }

  if (!response.ok) {
    return {
      status: 'unavailable',
      reason:
        response.status === 504
          ? 'Have I Been Pwned no ha respost a temps.'
          : `El servei de consulta ha respost amb un error (${response.status}).`,
    }
  }

  const body = await response.text()
  const count = countInRange(body, parts.suffix)
  return count > 0 ? { status: 'pwned', count } : { status: 'absent' }
}
