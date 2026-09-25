import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import '../company-page.css'

import { Logo, getClient } from '../../lib'
import { CompanyGraph } from './CompanyGraph'
import type { App, Company } from '@/payload-types'

export const dynamic = 'force-dynamic'

const idOf = (value: unknown): string | null => {
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (value && typeof value === 'object' && 'id' in value) return String((value as { id?: unknown }).id ?? '')
  return null
}

const maybeUrl = (value: string | null | undefined): string | null => {
  if (!value) return null
  try {
    const parsed = new URL(value)
    return parsed.href
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const payload = await getClient()
  const { docs } = await payload.find({
    collection: 'companies',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
    overrideAccess: true,
  })
  const company = docs[0] as Company | undefined
  return { title: company?.name ?? 'Empresa' }
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getClient()

  const [{ docs: companyDocs }, { docs: companies }, { docs: apps }] = await Promise.all([
    payload.find({
      collection: 'companies',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 1,
      overrideAccess: true,
    }),
    payload.find({
      collection: 'companies',
      limit: 0,
      pagination: false,
      depth: 1,
      sort: 'name',
      overrideAccess: true,
    }),
    payload.find({
      collection: 'apps',
      limit: 0,
      pagination: false,
      depth: 1,
      sort: 'name',
      overrideAccess: true,
      where: { _status: { equals: 'published' } },
    }),
  ])

  const company = companyDocs[0] as Company | undefined
  if (!company) notFound()

  const companyApps = (apps as App[]).filter((app) => idOf(app.company) === String(company.id))
  const descendantIds = new Set<string>()
  const walkChildren = (currentId: string): void => {
    descendantIds.add(currentId)
    for (const candidate of companies as Company[]) {
      if (idOf(candidate.parent) === currentId) walkChildren(String(candidate.id))
    }
  }
  walkChildren(String(company.id))

  const groupApps = (apps as App[]).filter((app) => {
    const companyId = idOf(app.company)
    if (!companyId) return false
    return descendantIds.has(companyId)
  })

  const parentCompany = company.parent ? (companies as Company[]).find((item) => String(item.id) === idOf(company.parent)) : null

  const lineage: Company[] = []
  const seen = new Set<string>()
  let cursor: Company | null = company
  while (cursor) {
    const cursorId = String(cursor.id ?? '')
    if (!cursorId || seen.has(cursorId)) break
    seen.add(cursorId)
    lineage.unshift(cursor)

    const parentValue: Company['parent'] | undefined = cursor.parent
    if (parentValue && typeof parentValue === 'object' && 'id' in parentValue && parentValue.id) {
      cursor = parentValue as Company
    } else if (parentValue && typeof parentValue === 'string') {
      cursor = (companies as Company[]).find((item) => String(item.id) === String(parentValue)) ?? null
    } else {
      cursor = null
    }
  }

  const rootCompany = lineage[0] ?? company
  const viaLabel = lineage.length > 1 ? lineage.slice(1).map((entry) => entry.name).join(' → ') : '—'

  return (

    <>
      <div className="company-page-header content-wrapper">
          {/* <p className="meta">
           <Link href="/empreses">Empreses i grups</Link>
          </p>*/}

          <div className="company-page-body">
            {rootCompany && rootCompany.id !== company.id ? (
              <p className="company-page-group-meta">
                Pertany al grup <Link href={`/empreses/${rootCompany.slug}`}>{rootCompany.name}</Link> via{' '}
                <Link href={`/empreses/${company.slug}`}>{company.name}</Link>
              </p>
            ) : null}

            <div className="company-page-body-content">
              <h1>{company.name}</h1>
              <p className="lede">{company.description ?? 'Sense descripció editorial disponible.'}</p>
            </div>
          </div>
        </div>
    <div className="content-wrapper">
      <div className="company-page-shell">
        <CompanyGraph company={company} companies={companies as Company[]} apps={apps as App[]} />

        <section style={{ gridColumn: '1 / -1' }}>
          <h2>Aplicacions del grup</h2>
          {groupApps.length > 0 ? (
            <ul className="company-group-apps-list">
              {groupApps.map((app) => {
                const score = Math.max(0, Math.min(100, Math.round(app.scores?.overall ?? 0)))
                const scoreColor =
                  score >= 70 ? '#16a34a' : score >= 40 ? '#f59e0b' : '#dc2626'

                const companyName =
                  app.company && typeof app.company === 'object' && 'name' in app.company
                    ? String((app.company as Company).name)
                    : null

                return (
                  <li key={app.id} className="card company-group-app-item">
                    <div className="company-group-app-header">
                      <Logo logo={app.logo} name={app.name} size={120} />

                      {app.scores?.overall != null ? (
                        <span
                          className="company-group-app-score"
                          style={{ backgroundColor: scoreColor }}
                          aria-label={`Puntuació global: ${score} sobre 100`}
                        >
                          {score}
                        </span>
                      ) : null}

                      <div className="company-group-app-title-wrap">
                        <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>
                        {companyName ? <span className="company-group-app-company"> {companyName}</span> : null}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          ) : (
            <p className="unknown">No hi ha aplicacions documentades en aquest grup.</p>
          )}
        </section>

        {company.productDomains && company.productDomains.length > 0 ? (
          <section>
            <h2>Dominis dels serveis</h2>
            <ul>
              {company.productDomains.map((entry) => (
                <li key={String(entry.id ?? entry.domain)}>{entry.domain}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section>
          <h2>Informació addicional</h2>
          <div className="scroller" role="region" tabIndex={0} aria-label={`Informació addicional de ${company.name}`}>
            <table>
              <caption className="visually-hidden">Informació addicional de {company.name}</caption>
              <tbody>
                {companyApps.length > 0 ? (
                  <tr>
                    <th scope="row">Aplicacions directes documentades</th>
                    <td>{companyApps.length}</td>
                  </tr>
                ) : null}
                <tr>
                  <th scope="row">Aplicacions del grup</th>
                  <td>{groupApps.length}</td>
                </tr>
                {company.productDomains?.length ? (
                  <tr>
                    <th scope="row">Dominis de producte</th>
                    <td>{company.productDomains.length}</td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}
