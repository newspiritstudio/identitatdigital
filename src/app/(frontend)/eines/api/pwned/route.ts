import { normalisePrefix } from '@/lib/passwords/pwned'

/**
 * Procurador cap a l'API de contrasenyes filtrades de Have I Been Pwned.
 *
 * QUÈ HI PASSA PER AQUÍ. Cinc caràcters hexadecimals. Res més. El navegador
 * calcula el resum SHA-1 de la contrasenya, n'agafa els cinc primers caràcters i
 * ens els envia; nosaltres els reenviem a `api.pwnedpasswords.com/range/{prefix}`
 * i tornem la llista de sufixos tal com arriba, sense tocar-la. El navegador hi
 * busca el seu sufix localment. Ni aquest servidor ni Have I Been Pwned veuen
 * mai la contrasenya ni el resum sencer: el calaix de vint bits que demanem
 * conté unes vuit-centes contrasenyes diferents i no es pot saber per quina
 * preguntàvem.
 *
 * PER QUÈ HI HA UN PROCURADOR I NO ES CRIDA HIBP DIRECTAMENT DES DEL NAVEGADOR.
 * Perquè així el navegador de qui fa servir l'eina no obre cap connexió a un
 * tercer: l'adreça IP i les capçaleres que arriben a Have I Been Pwned són les
 * del nostre servidor, no les seves. És una capa més de separació, no una
 * capa d'observació: vegeu el punt següent.
 *
 * NO ES REGISTRA MAI EL PREFIX. Ni amb `console.log`, ni en cap sistema de
 * registre, ni en cap mètrica, ni transformat, ni agregat. Aquesta ruta no
 * escriu enlloc res que vingui de la petició; els errors que registra parlen de
 * l'estat de la connexió amb Have I Been Pwned i mai del que ens han demanat.
 * Ho diem a la pàgina i s'ha de poder comprovar llegint aquestes trenta línies.
 * Si algú hi afegeix una traça amb el prefix, trenca la promesa.
 *
 * L'API de contrasenyes filtrades és pública, no demana cap clau i no té límit
 * de peticions. No cal, doncs, cap gestió de credencials.
 */

// Cap resposta d'aquí no s'ha de desar ni prerenderitzar.
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0

const UPSTREAM = 'https://api.pwnedpasswords.com/range/'
const TIMEOUT_MS = 6000
const USER_AGENT = 'identitat.digital-password-tool (+https://identitat.digital/eines/contrasenyes)'

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
         * totes les respostes. Sense això, la LONGITUD de la resposta —visible
         * per a qualsevol que miri el trànsit xifrat sense poder-lo llegir—
         * identificaria el calaix consultat. És exactament la mena de detall
         * que aquest projecte reclama a les altres empreses, i per tant se
         * l'ha d'aplicar.
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
