import type { Metadata } from 'next'

import { getClient } from '../lib'
import AppsGrid from './AppsGrid'
import DataFlowAnimation from './DataFlowAnimation'
import { loadCorpus, relationId } from '@/lib/analysis'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Aplicacions' }

export default async function AppsPage() {
  const payload = await getClient()

  /*
   * La graella surt del corpus, que ja viu a la memòria del procés, i el
   * logotip es resol contra un índex de la biblioteca multimèdia. Demanar les
   * fitxes amb profunditat 1 volia dir resoldre empresa, categories, fonts i
   * logotip fitxa per fitxa: milers de consultes per dibuixar una llista de
   * noms.
   */
  const [corpus, media] = await Promise.all([
    loadCorpus(payload),
    payload.find({
      collection: 'media',
      limit: 0,
      pagination: false,
      depth: 0,
      overrideAccess: true,
      select: { alt: true, url: true, sizes: true },
    }),
  ])

  const mediaById = new Map(media.docs.map((file) => [String(file.id), file]))

  const apps = corpus.apps.map((app) => {
    const logo = mediaById.get(relationId(app.logo) ?? '')
    return {
      id: app.id,
      name: app.name,
      slug: app.slug,
      logo: logo ? { url: logo.sizes?.thumbnail?.url ?? logo.url, alt: logo.alt } : null,
    }
  })

  return (
    <>
      <header className="apps-page-hero apps-search-page">
        <DataFlowAnimation />
        {/*<p className="meta">Directori</p>*/}
        <h1 className="site-title"><strong>identitat</strong>.digital</h1>
        <p className="lede">
          {apps.length} fitxes documentades, ordenades per nom. Cada fitxa diu quines dades recull el
          servei, amb qui les comparteix i com te’n pots anar.
        </p>
      </header>
      {/* La graella és la secció principal de la pàgina i ha de tenir el seu
          títol a l'arbre d'encapçalaments, encara que visualment no calgui. */}
      <h2 className="visually-hidden">Totes les aplicacions</h2>
      <AppsGrid apps={apps} />
    </>
  )
}
