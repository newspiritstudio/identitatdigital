import Link from 'next/link'
import type { Metadata } from 'next'

import { getClient } from '../lib'
import { at, factStatus, loadCorpus } from '@/lib/analysis'
import type { App, Company, DataType } from '@/payload-types'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Consultes' }

const idOf = (value: unknown): string | null => {
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (value && typeof value === 'object' && 'id' in value)
    return String((value as { id: unknown }).id)
  return null
}

const AppLink = ({ app }: { app: App }) => <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>

/**
 * Consultes creuades. Serveixen per comprovar que el model permet preguntar
 * coses que travessen les fitxes sense haver de llegir text lliure.
 */
export default async function QueriesPage() {
  const payload = await getClient()

  /*
   * Tot surt del mateix corpus que les pàgines d'anàlisi, que es desa a la
   * memòria del procés: fer-ho amb set consultes pròpies volia dir llegir les
   * quatre-centes fitxes senceres a cada visita.
   */
  const corpus = await loadCorpus(payload)
  const allApps = corpus.apps
  const noSelfService = allApps.filter((app) =>
    ['no', 'partial'].includes(factStatus(at(app, 'accountDeletion.selfService'))),
  )
  const aiTraining = allApps.filter((app) => factStatus(at(app, 'dataUses.aiTraining')) === 'yes')
  const noE2ee = allApps.filter((app) => ['no', 'partial'].includes(factStatus(at(app, 'security.e2ee'))))

  const dataTypeById = corpus.dataTypeById
  const companyById = corpus.companyById

  /** Puja per l'arbre fins al grup del cim: la pregunta interessant és a qui pertany, de veritat. */
  const rootCompany = (companyId: string | null): Company | undefined => {
    let current = companyId ? companyById.get(companyId) : undefined
    while (current?.parent) {
      const parentId = idOf(current.parent)
      const parent = parentId ? companyById.get(parentId) : undefined
      if (!parent) break
      current = parent
    }
    return current
  }

  // Quins tipus de dades es recullen més sovint a tot el directori.
  const collectionCount = new Map<string, number>()
  for (const app of allApps) {
    for (const row of app.dataCollection ?? []) {
      if (row.status !== 'yes') continue
      const key = idOf(row.dataType)
      if (key) collectionCount.set(key, (collectionCount.get(key) ?? 0) + 1)
    }
  }
  const mostCollected = [...collectionCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12)

  // Categories especials de l'article 9 presents al directori.
  const specialByApp = allApps
    .map((app) => ({
      app,
      types: (app.dataCollection ?? [])
        .filter((row) => row.status === 'yes' || row.status === 'optional')
        .map((row) => dataTypeById.get(idOf(row.dataType) ?? ''))
        .filter((type): type is DataType => Boolean(type?.specialCategory)),
    }))
    .filter((entry) => entry.types.length > 0)
    .sort((a, b) => b.types.length - a.types.length)

  // Sancions fermes acumulades per grup empresarial.
  const finesByGroup = new Map<string, number>()
  for (const incident of corpus.incidents) {
    const amount = incident.regulatory?.fineAmountEur
    if (!amount || incident.regulatory?.status === 'overturned') continue
    const root = rootCompany(idOf(incident.company))
    if (!root) continue
    finesByGroup.set(root.name, (finesByGroup.get(root.name) ?? 0) + amount)
  }
  const fines = [...finesByGroup.entries()].sort((a, b) => b[1] - a[1])

  return (
    <div className="content-wrapper">
      <h1>Consultes creuades</h1>
      <p className="lede">
        Preguntes que només es poden respondre si les fitxes estan estructurades. Cap d’aquestes
        llistes s’ha escrit a mà: totes surten de consultar la base de dades.
      </p>

      <h2>On no et pots donar de baixa tot sol</h2>
      <p className="meta">
        Serveis on l’eliminació del compte no és completament autoservei, o on hi ha condicions.
      </p>
      <ul>
        {noSelfService.map((app) => (
          <li key={app.id}>
            <AppLink app={app} />
          </li>
        ))}
      </ul>

      <h2>Qui fa servir el que hi publiques per entrenar models</h2>
      <ul>
        {aiTraining.map((app) => (
          <li key={app.id}>
            <AppLink app={app} />
          </li>
        ))}
      </ul>

      <h2>Serveis sense xifratge d’extrem a extrem complet</h2>
      <p className="meta">
        Només compta els serveis on el xifratge d’extrem a extrem té sentit; als altres l’indicador
        està marcat com a no aplicable i no apareixen aquí.
      </p>
      <ul>
        {noE2ee.map((app) => (
          <li key={app.id}>
            <AppLink app={app} /> <span className="badge">{app.security?.e2ee?.status}</span>
          </li>
        ))}
      </ul>

      <h2>Les dades que més es recullen</h2>
      <div
        className="scroller"
        role="region"
        tabIndex={0}
        aria-label="Tipus de dada més recollits, amb la seva sensibilitat i el nombre de serveis que els recullen"
      >
        <table>
          <caption className="visually-hidden">
            Tipus de dada més recollits, amb la seva sensibilitat i el nombre de serveis que els
            recullen
          </caption>
          <thead>
            <tr>
              <th scope="col">Tipus de dada</th>
              <th scope="col">Sensibilitat</th>
              <th scope="col">Serveis que la recullen</th>
            </tr>
          </thead>
          <tbody>
            {mostCollected.map(([key, count]) => (
              <tr key={key}>
                <td>{dataTypeById.get(key)?.name ?? key}</td>
                <td>{dataTypeById.get(key)?.sensitivity ?? '—'}</td>
                <td>
                  {count} de {allApps.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Categories especials de l’article 9</h2>
      <p className="meta">
        Dades que el RGPD protegeix de manera reforçada, recollides o inferibles pels serveis del
        directori.
      </p>
      <div
        className="scroller"
        role="region"
        tabIndex={0}
        aria-label="Serveis que recullen categories especials de l’article 9 del RGPD"
      >
        <table>
          <caption className="visually-hidden">
            Serveis que recullen categories especials de l’article 9 del RGPD
          </caption>
          <thead>
            <tr>
              <th scope="col">Servei</th>
              <th scope="col">Categories especials</th>
            </tr>
          </thead>
          <tbody>
            {specialByApp.map((entry) => (
              <tr key={entry.app.id}>
                <td>
                  <AppLink app={entry.app} />
                </td>
                <td>{entry.types.map((type) => type.name).join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Sancions fermes acumulades per grup</h2>
      <p className="meta">
        Suma de les sancions registrades al directori, agrupades pujant fins al cim de cada grup
        empresarial. No inclou les anul·lades en apel·lació.
      </p>
      <div
        className="scroller"
        role="region"
        tabIndex={0}
        aria-label="Import acumulat de les sancions fermes per grup empresarial"
      >
        <table>
          <caption className="visually-hidden">
            Import acumulat de les sancions fermes per grup empresarial
          </caption>
          <thead>
            <tr>
              <th scope="col">Grup</th>
              <th scope="col">Import acumulat</th>
            </tr>
          </thead>
          <tbody>
            {fines.map(([name, amount]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{amount.toLocaleString('ca-ES')} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
