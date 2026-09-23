import Link from 'next/link'
import type { Metadata } from 'next'

import { Logo, Score, getClient } from '../lib'
import type { Category, Company } from '@/payload-types'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Aplicacions' }

const name = (value: unknown) =>
  typeof value === 'object' && value !== null && 'name' in value
    ? String((value as Company).name)
    : '—'

export default async function AppsPage() {
  const payload = await getClient()
  const { docs } = await payload.find({
    collection: 'apps',
    limit: 0,
    pagination: false,
    depth: 1,
    sort: '-scores.overall',
    where: { _status: { equals: 'published' } },
  })

  return (
    <>
      <h1>Aplicacions</h1>
      <p className="lede">
        {docs.length} fitxes ordenades per puntuació global. La columna de confiança diu fins a quin
        punt hem pogut documentar cada anàlisi: una puntuació amb confiança baixa és una anàlisi
        oberta, no un veredicte.
      </p>

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
                    <Logo logo={app.logo} name={app.name} />
                    <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>
                  </span>
                  {app.scores?.provisional ? (
                    <>
                      {' '}
                      <span className="badge">provisional</span>
                    </>
                  ) : null}
                </td>
                <td>{name(app.company)}</td>
                <td>
                  {(app.categories ?? []).map((category) => name(category as Category)).join(', ')}
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
    </>
  )
}
