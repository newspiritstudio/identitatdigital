import Link from 'next/link'
import type { Metadata } from 'next'

import { Score, getClient } from '../lib'
import type { Category, Company } from '@/payload-types'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Aplicacions' }

const name = (value: unknown) =>
  typeof value === 'object' && value !== null && 'name' in value ? String((value as Company).name) : '—'

export default async function AppsPage() {
  const payload = await getClient()
  const { docs } = await payload.find({
    collection: 'apps',
    limit: 200,
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

      <table>
        <thead>
          <tr>
            <th>Servei</th>
            <th>Empresa</th>
            <th>Categoria</th>
            <th>Privadesa</th>
            <th>Seguretat</th>
            <th>Control</th>
            <th>Global</th>
            <th>Confiança</th>
          </tr>
        </thead>
        <tbody>
          {docs.map((app) => (
            <tr key={app.id}>
              <td>
                <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>
                {app.scores?.provisional ? <> <span className="badge">provisional</span></> : null}
              </td>
              <td>{name(app.company)}</td>
              <td>
                {(app.categories ?? [])
                  .map((category) => name(category as Category))
                  .join(', ')}
              </td>
              <td><Score value={app.scores?.privacy} /></td>
              <td><Score value={app.scores?.security} /></td>
              <td><Score value={app.scores?.agency} /></td>
              <td><Score value={app.scores?.overall} /></td>
              <td><Score value={app.scores?.confidence} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
