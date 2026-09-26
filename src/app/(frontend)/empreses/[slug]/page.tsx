import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import '../company-page.css'

import { Logo, getClient } from '../../lib'
import { CompanyGraph, type GraphCompany } from './CompanyGraph'
import { loadCorpus, relationId } from '@/lib/analysis'
import type { Company, Media } from '@/payload-types'
import { de } from '@/lib/apostrof'

export const dynamic = 'force-dynamic'

const idOf = (value: unknown): string | null => {
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (value && typeof value === 'object' && 'id' in value) return String((value as { id?: unknown }).id ?? '')
  return null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const corpus = await loadCorpus(await getClient())
  const company = corpus.companies.find((item) => item.slug === slug)
  return { title: company?.name ?? 'Empresa' }
}

/*
 * Camps de l'empresa que el gràfic mostra. El gràfic és un component de client:
 * tot el que rep viatja dins la pàgina, i passar-li les empreses i les fitxes
 * senceres feia pàgines de desenes de megabytes.
 */
const graphCompany = (item: Company): GraphCompany => ({
  id: item.id,
  name: item.name,
  slug: item.slug,
  parent: relationId(item.parent),
  parentGroup: item.parentGroup,
  legalName: item.legalName,
  website: item.website,
  headquartersCountry: item.headquartersCountry,
  euEstablishment: item.euEstablishment,
  leadSupervisoryAuthority: item.leadSupervisoryAuthority,
  supervisoryNote: item.supervisoryNote,
  foundedYear: item.foundedYear,
  ownership: item.ownership,
  primaryRevenueModel: item.primaryRevenueModel,
  privacyContact: item.privacyContact,
})

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getClient()

  /*
   * Empreses i fitxes surten del corpus, que viu a la memòria del procés amb
   * profunditat 0. Abans es llegien totes dues col·leccions senceres amb
   * profunditat 1 a cada visita.
   */
  const corpus = await loadCorpus(payload)
  const companies = corpus.companies
  const apps = corpus.apps
  const company = companies.find((item) => item.slug === slug)
  if (!company) notFound()

  const companyApps = apps.filter((app) => idOf(app.company) === String(company.id))
  const descendantIds = new Set<string>()
  const walkChildren = (currentId: string): void => {
    descendantIds.add(currentId)
    for (const candidate of companies) {
      if (idOf(candidate.parent) === currentId) walkChildren(String(candidate.id))
    }
  }
  walkChildren(String(company.id))

  const groupApps = apps.filter((app) => {
    const companyId = idOf(app.company)
    if (!companyId) return false
    return descendantIds.has(companyId)
  })

  const logoIds = groupApps.map((app) => relationId(app.logo)).filter((id): id is string => Boolean(id))
  const { docs: logos } = logoIds.length
    ? await payload.find({
        collection: 'media',
        where: { id: { in: logoIds } },
        limit: 0,
        pagination: false,
        depth: 0,
        overrideAccess: true,
        select: { alt: true, url: true, sizes: true },
      })
    : { docs: [] as Media[] }
  const logoById = new Map(logos.map((file) => [String(file.id), file as Media]))

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
      cursor = companies.find((item) => String(item.id) === String(parentValue)) ?? null
    } else {
      cursor = null
    }
  }

  const rootCompany = lineage[0] ?? company

  return (

    <>
      <div className="company-page-header content-wrapper">
          {/* <p className="meta">
           <Link href="/empreses">Empreses i grups</Link>
          </p>*/}

          <div className="company-page-body">
            {rootCompany && rootCompany.id !== company.id ? (
              <p className="company-page-group-meta">
                Pertany al grup <Link href={`/empreses/${rootCompany.slug}`}>{rootCompany.name}</Link> {/*via{' '}
                <Link href={`/empreses/${company.slug}`}>{company.name}</Link>*/}
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
        <CompanyGraph
          company={graphCompany(company)}
          companies={companies.map(graphCompany)}
          apps={apps.map((app) => ({ id: String(app.id), company: relationId(app.company) }))}
        />

        <section style={{ gridColumn: '1 / -1' }}>
          <h2>Aplicacions del grup</h2>
          {groupApps.length > 0 ? (
            <ul className="company-group-apps-list">
              {groupApps.map((app) => {
                const score = Math.max(0, Math.min(100, Math.round(app.scores?.overall ?? 0)))
                const scoreColor =
                  score >= 70 ? 'var(--good)' : score >= 40 ? 'var(--mid)' : 'var(--bad)'

                const companyName = corpus.companyById.get(relationId(app.company) ?? '')?.name ?? null

                return (
                  <li key={app.id} className="card company-group-app-item">
                    <div className="company-group-app-header">
                      <Logo logo={logoById.get(relationId(app.logo) ?? '') ?? null} name={app.name} size={120} />

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
          <div className="scroller" role="region" tabIndex={0} aria-label={`Informació addicional ${de(company.name)}`}>
            <table>
              <caption className="visually-hidden">{`Informació addicional ${de(company.name)}`}</caption>
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
