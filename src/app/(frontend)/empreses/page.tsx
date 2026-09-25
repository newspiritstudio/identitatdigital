import Link from 'next/link'
import type { Metadata } from 'next'
import './company-page.css'

import { analyseDataTypes, analyseGroups, buildSharingGraph, loadCorpus } from '@/lib/analysis'
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
  const graph = buildSharingGraph(corpus)

  const topGroups = groups.groups.slice(0, 5)
  const biggestGroup = topGroups[0]
  const mostCollected = data.rows[0]
  const totalApps = corpus.apps.length
  const topGroupShare = biggestGroup ? Math.round((biggestGroup.appCount / totalApps) * 100) : 0
  const biggestGroupDataTypes = biggestGroup?.dataTypes.slice(0, 6) ?? []

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
          El mapa dels principals grups digitals. La vista combina l’arbre de propietat, la
          concentració d’aplicacions i les dades més habituals per mostrar qui domina el panorama i
          quina responsabilitat real té cada empresa.
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
              <dt>Dada més frequent</dt>
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
            <h2>Què acumula el grup principal</h2>
            <span className="company-panel-kicker">Dades</span>
          </div>

          <div className="company-top-data-list">
            {biggestGroupDataTypes.length === 0 ? (
              <p className="company-empty-state">Aquest grup encara no té dades acumulades.</p>
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
