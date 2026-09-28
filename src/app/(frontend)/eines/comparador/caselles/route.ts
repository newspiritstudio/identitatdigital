import { getClient } from '../../../lib'
import { loadComparator } from '../snapshot'

/**
 * Caselles de totes les fitxes del comparador, d'un sol cop.
 *
 * El navegador les baixa senceres i tria localment, de manera que la petició no
 * diu quines fitxes s'estan comparant. La versió de l'adreça (`?v=`) és un
 * resum del contingut: amb la versió vigent la resposta es pot guardar per
 * sempre; amb una altra (una pàgina oberta fa estona) es respon el contingut
 * actual sense guardar-lo.
 */
export const dynamic = 'force-dynamic'

export async function GET(request: Request): Promise<Response> {
  const data = await loadComparator(await getClient())
  const requested = new URL(request.url).searchParams.get('v')
  return new Response(data.bundleJson, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control':
        requested === data.version ? 'public, max-age=31536000, immutable' : 'no-cache',
      ETag: `"${data.version}"`,
    },
  })
}
