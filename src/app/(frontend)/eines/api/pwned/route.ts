import { normalisePrefix } from '@/lib/passwords/pwned'

/**
 * Pont cap a l'API de contrasenyes filtrades de Have I Been Pwned.
 *
 * Hi passen cinc caràcters hexadecimals i res més. El procediment sencer està
 * explicat a `src/lib/passwords/pwned.ts`; aquí el prefix es reenvia a
 * `api.pwnedpasswords.com/range/{prefix}` i la llista de sufixos torna tal com
 * arriba.
 *
 * El pont hi és perquè el navegador de qui fa servir l'eina no obri cap
 * connexió a un tercer: l'adreça IP que arriba a Have I Been Pwned és la del
 * servidor. A canvi, la ruta no escriu enlloc res que vingui de la petició. No
 * hi ha cap `console.log` amb el prefix, ni mètrica, ni agregat; els errors que
 * registra parlen de la connexió amb Have I Been Pwned. Qui hi afegeixi una
 * traça amb el prefix trenca la promesa que fa la pàgina.
 *
 * L'API és pública, no demana clau i no té límit de peticions.
 */

// Cap resposta d'aquí no s'ha de desar ni prerenderitzar.
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0

const UPSTREAM = 'https://api.pwnedpasswords.com/range/'
const TIMEOUT_MS = 6000
const USER_AGENT = 'identitat.digital-password-tool (+https://identitat.digital/eines/credencials)'

/*
 * Capçaleres de resposta. `no-store` perquè cap intermediari, cap CDN i cap
 * memòria cau del navegador no es quedin ni tan sols la parella prefix-resposta:
 * una memòria cau compartida convertiria una consulta anònima en un rastre.
 */
const NO_STORE = {
  'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
  Pragma: 'no-cache',
  Expires: '0',
  // Cap intermediari no pot servir una resposta desada per a una altra petició.
  Vary: '*',
} as const

const fail = (status: number, message: string) =>
  new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...NO_STORE },
  })

export async function GET(request: Request): Promise<Response> {
  const raw = new URL(request.url).searchParams.get('prefix')
  const prefix = normalisePrefix(raw)

  // Validació estricta i primer de tot: si no són exactament cinc caràcters
  // hexadecimals, no es reenvia absolutament res a ningú.
  if (prefix === null) {
    return fail(400, 'El prefix ha de ser exactament cinc caràcters hexadecimals.')
  }

  try {
    const upstream = await fetch(`${UPSTREAM}${prefix}`, {
      method: 'GET',
      headers: {
        /*
         * Encoixinament. Amb `Add-Padding: true`, Have I Been Pwned afegeix
         * entrades falses amb el comptador a zero fins a igualar la mida de
         * totes les respostes. Sense això, la longitud de la resposta, visible
         * per a qui miri el trànsit xifrat encara que no el pugui llegir,
         * identificaria el calaix consultat.
         */
        'Add-Padding': 'true',
        Accept: 'text/plain',
        'User-Agent': USER_AGENT,
      },
      cache: 'no-store',
      // Degradació neta: si HIBP no respon a temps, val més dir que no ho sabem.
      signal: AbortSignal.timeout(TIMEOUT_MS),
    })

    if (!upstream.ok) {
      return fail(
        502,
        'Have I Been Pwned ha respost amb un error. La comprovació no s’ha pogut fer.',
      )
    }

    const body = await upstream.text()
    return new Response(body, {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', ...NO_STORE },
    })
  } catch {
    /*
     * Aquí hi cauen el temps màxim d'espera i qualsevol fallada de xarxa. No
     * s'inspecciona ni es registra res de la petició. La resposta ha de deixar
     * clar que la comprovació NO s'ha fet: no poder comprovar i estar net són
     * coses diferents, i confondre-les seria dir a algú que la seva contrasenya
     * està bé quan no en sabem res.
     */
    return fail(
      504,
      'No s’ha pogut contactar amb Have I Been Pwned. La comprovació no s’ha fet: això no vol dir que la contrasenya sigui segura.',
    )
  }
}
