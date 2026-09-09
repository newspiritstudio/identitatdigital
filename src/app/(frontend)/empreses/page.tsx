import Link from 'next/link'
import type { Metadata } from 'next'

import { getClient } from '../lib'
import type { App, Company } from '@/payload-types'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Empreses' }

const idOf = (value: unknown): string | null => {
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (value && typeof value === 'object' && 'id' in value) return String((value as Company).id)
  return null
}

export default async function CompaniesPage() {
  const payload = await getClient()
  const [{ docs: companies }, { docs: apps }] = await Promise.all([
    payload.find({ collection: 'companies', limit: 200, depth: 0, sort: 'name' }),
    payload.find({ collection: 'apps', limit: 200, depth: 0, sort: 'name', where: { _status: { equals: 'published' } } }),
  ])

  const byParent = new Map<string | null, Company[]>()
  for (const company of companies as Company[]) {
    const parent = idOf(company.parent)
    byParent.set(parent, [...(byParent.get(parent) ?? []), company])
  }

  const appsByCompany = new Map<string, App[]>()
  for (const app of apps as App[]) {
    const company = idOf(app.company)
    if (company) appsByCompany.set(company, [...(appsByCompany.get(company) ?? []), app])
  }

  /** Compta les aplicacions de tot el subarbre: la pregunta interessant és la del grup. */
  const countDeep = (company: Company): number => {
    const own = appsByCompany.get(String(company.id))?.length ?? 0
    const children = byParent.get(String(company.id)) ?? []
    return own + children.reduce((total, child) => total + countDeep(child), 0)
  }

  const renderTree = (parent: string | null): React.ReactNode => {
    const children = byParent.get(parent) ?? []
    if (children.length === 0) return null
    return (
      <ul>
        {children.map((company) => {
          const own = appsByCompany.get(String(company.id)) ?? []
          const deep = countDeep(company)
          return (
            <li key={company.id}>
              <strong>{company.name}</strong>{' '}
              <span className="meta">
                {company.headquartersCountry ?? '—'}
                {deep > 0 ? ` · ${deep} ${deep === 1 ? 'aplicació' : 'aplicacions'} al directori` : ''}
              </span>
              {own.length > 0 ? (
                <div className="meta">
                  {own.map((app, index) => (
                    <span key={app.id}>
                      {index > 0 ? ' · ' : ''}
                      <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>
                    </span>
                  ))}
                </div>
              ) : null}
              {renderTree(String(company.id))}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <>
      <h1>Empreses i grups</h1>
      <p className="lede">
        L’arbre mostra qui és propietari de qui. La xifra d’aplicacions inclou les de tot el
        subarbre, que és la manera de veure quanta part del que fem servir acaba al mateix lloc.
      </p>
      {renderTree(null)}
    </>
  )
}
