import Link from 'next/link'
import type { Metadata } from 'next'
import './company-page.css'

import {
  analyseDataTypes,
  analyseGroups,
  buildSharingGraph,
  compareText,
  loadCorpus,
} from '@/lib/analysis'
import { Bar, SharingDiagram, num, pct } from '../analisi/parts'
import { getClient } from '../lib'
import { CompanyDirectoryExplorer } from './CompanyDirectoryExplorer'
import { countryName } from '@/lib/countries'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Empreses' }

export default async function CompaniesPage() {
  const payload = await getClient()
  const corpus = await loadCorpus(payload)
  const groups = analyseGroups(corpus)
  const data = analyseDataTypes(corpus)
  const incidents = await import('@/lib/analysis').then((mod) => mod.analyseIncidents(corpus))
  const graph = buildSharingGraph(corpus)

  const topGroups = groups.groups.slice(0, 5)
  const biggestGroup = topGroups[0]
  const mostCollected = data.rows[0]
  const totalApps = corpus.apps.length
  const topGroupShare = biggestGroup ? Math.round((biggestGroup.appCount / totalApps) * 100) : 0
  const biggestGroupDataTypes = biggestGroup?.dataTypes.slice(0, 6) ?? []

  const servicePowerGroups = [...groups.groups]
    .sort((a, b) => b.appCount - a.appCount || compareText(a.rootName, b.rootName))
    .slice(0, 8)

  const dataTypeGroups = [...groups.groups]
    .sort((a, b) => b.dataTypeCount - a.dataTypeCount || compareText(a.rootName, b.rootName))
    .slice(0, 8)

  const topDataTypes = [...data.rows]
    .sort((a, b) => b.reach - a.reach || compareText(a.name, b.name))
    .slice(0, 8)

  const sensitiveDataTypes = [...data.rows]
    .filter((row) => row.sensitivity >= 3 || row.specialCategory)
    .sort((a, b) => b.reach - a.reach || b.sensitivity - a.sensitivity)
    .slice(0, 8)

  const incidentGroups = [...incidents.byGroup]
    .sort((a, b) => b.incidents - a.incidents || b.finesEur - a.finesEur)
    .slice(0, 8)

  const fineGroups = [...incidents.byGroup]
    .sort((a, b) => b.finesEur - a.finesEur || b.incidents - a.incidents)
    .slice(0, 8)

  const controlledGroups = [...groups.groups]
    .sort(
      (a, b) =>
        b.companies.length - a.companies.length ||
        b.appCount - a.appCount ||
        compareText(a.rootName, b.rootName),
    )
    .slice(0, 8)

  const stats = [
    { title: 'Grups', value: num(groups.groups.length), description: 'matrius i holdings documentats' },
    { title: 'Empreses', value: num(corpus.companies.length), description: 'entitats dins l’arbre' },
    { title: 'Aplicacions', value: num(totalApps), description: 'fitxes publicades al directori' },
    {
      title: 'Dada més estesa',
      value: mostCollected ? mostCollected.name : '—',
      description: mostCollected ? `${num(mostCollected.reach)} fitxes la recullen` : 'sense dades',
    },
  ]

  return (
    <div className="content-wrapper text-page">
      <header className="company-page-header">
        <div>
          <h1>Empreses i grups</h1>
        </div>
        <p className="lede">
          Els principals grups digitals del directori. La pàgina combina l’arbre de propietat, el
          nombre d’aplicacions de cada grup i les dades que recullen més sovint, per veure quins grups
          concentren més fitxes i quina empresa respon de cada servei.
        </p>
      </header>

      <div className="company-page-stats" aria-label="Resum del directori d’empreses">
        {stats.map((item) => (
          <article key={item.title} className="company-stat-card">
            <span className="meta">{item.title}</span>
            <strong>{item.value}</strong>
            <small>{item.description}</small>
          </article>
        ))}
      </div>

      <section className="company-summary-section" aria-label="Taules resum del panell general d’empreses">
        <div className="company-summary-grid">
          <article className="company-panel company-summary-card">
            <div className="company-panel-header">
              <h2>Grups empresarials amb més serveis digitals</h2>
            </div>
            <div className="company-group-table-wrap">
              <table className="company-group-table compact-table">
                <thead>
                  <tr>
                    <th scope="col">Grup</th>
                    <th scope="col">Nombre de serveis</th>
                    <th scope="col">Principals serveis</th>
                  </tr>
                </thead>
                <tbody>
                  {servicePowerGroups.map((group) => (
                    <tr key={group.rootId}>
                      <td><Link href={`/empreses/${group.rootSlug}`}>{group.rootName}</Link></td>
                      <td>{num(group.appCount)}</td>
                      <td>{group.apps.slice(0, 3).map((app) => app.name).join(', ') || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="company-panel company-summary-card">
            <div className="company-panel-header">
              <h2>Grups que recullen més tipus de dades</h2>
            </div>
            <div className="company-group-table-wrap">
              <table className="company-group-table compact-table">
                <thead>
                  <tr>
                    <th scope="col">Grup</th>
                    <th scope="col">Nombre de categories</th>
                    <th scope="col">Principals categories</th>
                  </tr>
                </thead>
                <tbody>
                  {dataTypeGroups.map((group) => (
                    <tr key={group.rootId}>
                      <td><Link href={`/empreses/${group.rootSlug}`}>{group.rootName}</Link></td>
                      <td>{num(group.dataTypeCount)}</td>
                      <td>{group.dataTypes.slice(0, 3).map((row) => row.name).join(', ') || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="company-panel company-summary-card">
            <div className="company-panel-header">
              <h2>Tipus de dades més recollides</h2>
            </div>
            <div className="company-group-table-wrap">
              <table className="company-group-table compact-table">
                <thead>
                  <tr>
                    <th scope="col">Categoria de dada</th>
                    <th scope="col">Nombre de serveis</th>
                    <th scope="col">Percentatge</th>
                  </tr>
                </thead>
                <tbody>
                  {topDataTypes.map((row) => (
                    <tr key={row.dataTypeId}>
                      <td>{row.name}</td>
                      <td>{num(row.reach)}</td>
                      <td>{pct(Math.round((row.reach / totalApps) * 100))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="company-panel company-summary-card">
            <div className="company-panel-header">
              <h2>Dades més sensibles recollides</h2>
            </div>
            <div className="company-group-table-wrap">
              <table className="company-group-table compact-table">
                <thead>
                  <tr>
                    <th scope="col">Categoria</th>
                    <th scope="col">Nombre de serveis</th>
                    <th scope="col">Exemples</th>
                  </tr>
                </thead>
                <tbody>
                  {sensitiveDataTypes.map((row) => (
                    <tr key={row.dataTypeId}>
                      <td>{row.name}</td>
                      <td>{num(row.reach)}</td>
                      <td>{row.collectedBy.slice(0, 3).map((app) => app.name).join(', ') || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="company-panel company-summary-card">
            <div className="company-panel-header">
              <h2>Grups amb més incidències de seguretat</h2>
            </div>
            <div className="company-group-table-wrap">
              <table className="company-group-table compact-table">
                <thead>
                  <tr>
                    <th scope="col">Grup</th>
                    <th scope="col">Bretxes/incidents</th>
                    <th scope="col">Usuaris afectats</th>
                  </tr>
                </thead>
                <tbody>
                  {incidentGroups.map((group) => (
                    <tr key={group.groupId}>
                      <td>{group.groupName}</td>
                      <td>{num(group.incidents)}</td>
                      <td>—</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="company-panel company-summary-card">
            <div className="company-panel-header">
              <h2>Grups amb més sancions en matèria de protecció de dades</h2>
            </div>
            <div className="company-group-table-wrap">
              <table className="company-group-table compact-table">
                <thead>
                  <tr>
                    <th scope="col">Grup</th>
                    <th scope="col">Nombre de sancions</th>
                    <th scope="col">Import acumulat</th>
                    <th scope="col">Principals motius</th>
                  </tr>
                </thead>
                <tbody>
                  {fineGroups.map((group) => (
                    <tr key={group.groupId}>
                      <td>{group.groupName}</td>
                      <td>{num(group.incidents)}</td>
                      <td>{group.finesEur > 0 ? `${num(group.finesEur)} €` : '—'}</td>
                      <td>—</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="company-panel company-summary-card company-summary-card--wide">
            <div className="company-panel-header">
              <h2>Grups amb més empreses o serveis sota el seu control</h2>
            </div>
            <div className="company-group-table-wrap">
              <table className="company-group-table compact-table">
                <thead>
                  <tr>
                    <th scope="col">Grup</th>
                    <th scope="col">Empreses</th>
                    <th scope="col">Serveis</th>
                    <th scope="col">Observació</th>
                  </tr>
                </thead>
                <tbody>
                  {controlledGroups.map((group) => (
                    <tr key={group.rootId}>
                      <td><Link href={`/empreses/${group.rootSlug}`}>{group.rootName}</Link></td>
                      <td>{num(group.companies.length)}</td>
                      <td>{num(group.appCount)}</td>
                      <td>{group.appCount > 0 ? `${num(group.dataTypeCount)} categories documentades` : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </section>

      <section className="company-dashboard" aria-label="Panell general d’empreses">
        <div className="company-panel company-panel--wide">
          <div className="company-panel-header">
            <h2>Grups principals</h2>
            <span className="company-panel-kicker">Concentració</span>
          </div>

          <div className="company-rank-list">
            {topGroups.map((group, index) => {
              const maxApps = biggestGroup?.appCount ?? 1
              const width = Math.max(18, (group.appCount / maxApps) * 100)

              return (
                <article key={group.rootId} className="company-rank-card">
                  <div className="company-rank-topline">
                    <span className="company-rank">#{index + 1}</span>
                    <Link href={`/empreses/${group.rootSlug}`}>{group.rootName}</Link>
                  </div>

                  <div className="company-rank-metrics">
                    <span>{num(group.appCount)} apps</span>
                    <span>{num(group.companies.length)} empreses</span>
                    <span>{num(group.dataTypeCount)} tipus de dada</span>
                  </div>

                  <div className="company-mini-bar" aria-hidden="true">
                    <span style={{ width: `${width}%` }} />
                  </div>

                  <ul className="company-mini-list">
                    {group.companies.slice(0, 4).map((company) => (
                      <li key={company.id}>
                        <Link href={`/empreses/${company.slug || company.id}`}>{company.name}</Link>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>

        <aside className="company-panel">
          <div className="company-panel-header">
            <h2>Comparativa</h2>
            <span className="company-panel-kicker">Resum</span>
          </div>

          <dl className="company-comparison-list">
            <div>
              <dt>Grup més gran</dt>
              <dd>{biggestGroup ? biggestGroup.rootName : '—'}</dd>
            </div>
            <div>
              <dt>Quota del líder</dt>
              <dd>{pct(topGroupShare)}</dd>
            </div>
            <div>
              <dt>Dada més freqüent</dt>
              <dd>{mostCollected ? mostCollected.name : '—'}</dd>
            </div>
            <div>
              <dt>Tipus de dades</dt>
              <dd>{num(data.totalRows)}</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="company-panel company-panel--table">
        <div className="company-panel-header">
          <h2>Grups del corpus</h2>
          <span className="company-panel-kicker">Llistat</span>
        </div>

        <div className="company-group-table-wrap">
          <table className="company-group-table">
            <caption className="visually-hidden">
              Grups empresarials del corpus, amb les fitxes, els tipus de dada, les empreses i la seu
            </caption>
            <thead>
              <tr>
                <th scope="col">Grup</th>
                <th scope="col">Fitxes</th>
                <th scope="col">Tipus de dada</th>
                <th scope="col">Empreses</th>
                <th scope="col">Seu</th>
              </tr>
            </thead>
            <tbody>
              {groups.groups.map((group) => (
                <tr key={group.rootId}>
                  <td>
                    <Link href={`/empreses/${group.rootSlug}`}>{group.rootName}</Link>
                  </td>
                  <td>
                    <Bar value={group.appCount} total={totalApps} unit="fitxes" />
                  </td>
                  <td>
                    <Bar value={group.dataTypeCount} total={data.totalRows} faint />
                  </td>
                  <td>{num(group.companies.length)}</td>
                  <td>{countryName(group.headquartersCountry) ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="company-dashboard company-dashboard--lower" aria-label="Dades i fluxos dels grups">
        <div className="company-panel company-panel--wide">
          <div className="company-panel-header">
            <h2>Dades més recollides pel grup principal</h2>
            <span className="company-panel-kicker">Dades</span>
          </div>

          <div className="company-top-data-list">
            {biggestGroupDataTypes.length === 0 ? (
              <p className="company-empty-state">Encara no hi ha dades documentades d’aquest grup.</p>
            ) : (
              biggestGroupDataTypes.map((row) => (
                <div key={row.dataTypeId} className="company-top-data-row">
                  <div className="company-top-data-row__label">
                    <strong>{row.name}</strong>
                    <span>{num(row.apps)} aplicacions</span>
                  </div>
                  <Bar value={row.apps} total={biggestGroup?.appCount ?? 0} unit="aplicacions" />
                </div>
              ))
            )}
          </div>
        </div>

        <aside className="company-panel">
          <div className="company-panel-header">
            <h2>Flux de dades</h2>
            <span className="company-panel-kicker">Graf</span>
          </div>

          {graph.edges.length > 0 ? (
            <div className="company-sharing-graph">
              <SharingDiagram edges={graph.edges} />
            </div>
          ) : (
            <p className="company-empty-state">No hi ha fluxos documentats per mostrar.</p>
          )}
        </aside>
      </section>

      <section className="company-panel company-panel--search">
        <div className="company-panel-header">
          <h2>Mapa de grups i empreses</h2>
          <span className="company-panel-kicker">Cerca</span>
        </div>
        <CompanyDirectoryExplorer
          groups={groups.groups.map((group) => ({
            rootId: group.rootId,
            rootName: group.rootName,
            rootSlug: group.rootSlug,
            appCount: group.appCount,
            dataTypeCount: group.dataTypeCount,
            companies: group.companies.map((company) => ({
              id: company.id,
              name: company.name,
              slug: company.slug,
            })),
          }))}
        />
      </section>
    </div>
  )
}
