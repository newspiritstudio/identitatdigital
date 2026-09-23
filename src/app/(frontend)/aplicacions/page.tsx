import type { Metadata } from 'next'

<<<<<<< Updated upstream
import { Logo, Score, getClient } from '../lib'
import { loadCorpus, relationId, relationIds } from '@/lib/analysis'
import type { Media } from '@/payload-types'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Aplicacions' }
=======
import { getClient } from '../lib'
import AppsGrid from './AppsGrid'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Aplicacions',
}
>>>>>>> Stashed changes

export default async function AppsPage() {
  const payload = await getClient()

<<<<<<< Updated upstream
  /*
   * La taula surt del corpus, que ja viu a la memòria del procés, i les
   * relacions es resolen contra els seus índexs. Demanar-ho amb profunditat 1
   * volia dir resoldre empresa, categories i logotip fitxa per fitxa: mil sis
   * centes consultes per dibuixar una taula.
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

  const mediaById = new Map(media.docs.map((file) => [String(file.id), file as Media]))
  const docs = [...corpus.apps].sort(
    (a, b) => (b.scores?.overall ?? -1) - (a.scores?.overall ?? -1),
  )
=======
  const { docs } = await payload.find({
    collection: 'apps',
    limit: 200,
    depth: 1,
    sort: 'name',
    where: {
      _status: {
        equals: 'published',
      },
    },
  })
>>>>>>> Stashed changes

  return (
    <>
      <h1>Aplicacions</h1>

<<<<<<< Updated upstream
      <div
        className="scroller"
        role="region"
        tabIndex={0}
        aria-label="Directori d’aplicacions amb empresa, categoria i les quatre puntuacions publicades"
      >
        <table>
          <caption className="visually-hidden">
            Directori d’aplicacions amb empresa, categoria i les quatre puntuacions publicades
          </caption>
          <thead>
            <tr>
              <th scope="col">Servei</th>
              <th scope="col">Empresa</th>
              <th scope="col">Categoria</th>
              <th scope="col">Privadesa</th>
              <th scope="col">Seguretat</th>
              <th scope="col">Control</th>
              <th scope="col">Global</th>
              <th scope="col">Confiança</th>
            </tr>
          </thead>
          <tbody>
            {docs.map((app) => (
              <tr key={app.id}>
                <td>
                  <span className="with-logo">
                    <Logo logo={mediaById.get(relationId(app.logo) ?? '') ?? null} name={app.name} />
                    <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>
                  </span>
                  {app.scores?.provisional ? (
                    <>
                      {' '}
                      <span className="badge">provisional</span>
                    </>
                  ) : null}
                </td>
                <td>{corpus.companyById.get(relationId(app.company) ?? '')?.name ?? '—'}</td>
                <td>
                  {relationIds(app.categories)
                    .map((id) => corpus.categoryById.get(id)?.name)
                    .filter(Boolean)
                    .join(', ')}
                </td>
                <td>
                  <Score value={app.scores?.privacy} />
                </td>
                <td>
                  <Score value={app.scores?.security} />
                </td>
                <td>
                  <Score value={app.scores?.agency} />
                </td>
                <td>
                  <Score value={app.scores?.overall} />
                </td>
                <td>
                  <Score value={app.scores?.confidence} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
=======
      <AppsGrid
        apps={docs.map((app) => ({
          id: app.id,
          name: app.name,
          slug: app.slug,
          logo: app.logo,
        }))}
      />
>>>>>>> Stashed changes
    </>
  )
}