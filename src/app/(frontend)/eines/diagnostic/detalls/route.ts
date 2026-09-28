import { getPayload } from 'payload'

import config from '@payload-config'
import { loadCorpus, memoizeOnCorpus } from '@/lib/analysis'

import { buildDetails } from '../snapshot'

/**
 * Textos editorials del pla d'acció del diagnòstic.
 *
 * Es baixen sencers —els de totes les fitxes publicades— i són iguals per a
 * tothom. La petició no porta cap paràmetre: no hi ha manera que digui quins
 * serveis ha triat qui la fa. Per això es poden desar a la memòria cau de
 * qualsevol intermediari sense cap problema.
 */
export const dynamic = 'force-dynamic'

export async function GET(): Promise<Response> {
  try {
    const payload = await getPayload({ config })
    const corpus = await loadCorpus(payload)
    // Serialitzat un sol cop per corpus: és igual per a tothom.
    const body = memoizeOnCorpus(corpus, 'diagnostic:details', () =>
      JSON.stringify(buildDetails(corpus)),
    )
    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=600, stale-while-revalidate=86400',
      },
    })
  } catch {
    return new Response(JSON.stringify({ error: 'No s’han pogut carregar els detalls.' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
    })
  }
}
