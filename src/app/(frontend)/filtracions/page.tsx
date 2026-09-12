import Link from 'next/link'
import type { Metadata } from 'next'

import { getClient } from '../lib'
import type { Breach, Company, DataType } from '@/payload-types'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Filtracions' }

/**
 * Catàleg de filtracions de dades.
 *
 * Aquestes dades no són nostres: venen de Have I Been Pwned i les mostrem tal
 * com les publica, amb l'atribució que la seva llicència exigeix. Per això
 * aquesta pàgina no en dona cap puntuació ni cap valoració. Una filtració
 * documentada per un tercer és una evidència; convertir-la en judici sobre una
 * empresa demana feina editorial nostra, i això té un lloc propi que són els
 * incidents.
 *
 * El que sí que aporta el projecte és la traducció: les categories de HIBP,
 * escrites en anglès i amb el seu propi vocabulari, queden mapades als tipus de
 * dada del projecte, de manera que una filtració es pot llegir amb les mateixes
 * paraules que una fitxa d'aplicació.
 */

const MILIO = 1_000_000

const formatAccounts = (value?: number | null): string => {
  if (typeof value !== 'number' || value <= 0) return '—'
  if (value >= MILIO)
    return `${(value / MILIO).toLocaleString('ca-ES', { maximumFractionDigits: 1 })} M`
  return value.toLocaleString('ca-ES')
}

const formatYear = (value?: string | null): string => {
  if (!value) return '—'
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? '—' : String(parsed.getUTCFullYear())
}

const companyOf = (breach: Breach): Company | null =>
  typeof breach.company === 'object' && breach.company !== null ? (breach.company as Company) : null

const dataTypeNames = (breach: Breach, limit: number): string[] =>
  (breach.dataTypes ?? [])
    .filter((entry): entry is DataType => typeof entry === 'object' && entry !== null)
    .map((entry) => String(entry.name))
    .slice(0, limit)

export default async function BreachesPage() {
  const payload = await getClient()

  const { docs, totalDocs } = await payload.find({
    collection: 'breaches',
    limit: 150,
    depth: 1,
    sort: '-pwnCount',
  })

  const breaches = docs as Breach[]

  const { docs: linkedDocs, totalDocs: linkedTotal } = await payload.find({
    collection: 'breaches',
    limit: 50,
    depth: 1,
    sort: '-breachDate',
    where: { company: { exists: true } },
  })

  const linked = linkedDocs as Breach[]

  const totalAccounts = breaches.reduce((sum, breach) => sum + (breach.pwnCount ?? 0), 0)

  return (
    <>
      <h1>Filtracions de dades</h1>
      <p className="lede">
        {totalDocs.toLocaleString('ca-ES')} filtracions documentades per Have I Been Pwned. No són
        anàlisis nostres i no mouen cap puntuació: són evidència de tercers que incorporem perquè
        expliquen una part de la història que una política de privadesa no explica mai, què passa
        quan les dades que una empresa ha recollit se li escapen.
      </p>

      <div
        className="scroller"
        role="region"
        tabIndex={0}
        aria-label="Resum del catàleg de filtracions importat de Have I Been Pwned"
      >
        <table>
          <caption className="visually-hidden">
            Resum del catàleg de filtracions importat de Have I Been Pwned
          </caption>
          <tbody>
            <tr>
              <th scope="row">Filtracions al catàleg</th>
              <td>{totalDocs.toLocaleString('ca-ES')}</td>
            </tr>
            <tr>
              <th scope="row">Lligades a una empresa documentada</th>
              <td>{linkedTotal.toLocaleString('ca-ES')}</td>
            </tr>
            <tr>
              <th scope="row">Comptes afectats a les 150 més grans</th>
              <td>{formatAccounts(totalAccounts)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Empreses que documentem</h2>
      <p>
        Les filtracions que hem pogut lligar amb una empresa del directori. El lligam es dedueix del
        domini i el revisa l’equip: quan dues societats del mateix grup hi encaixen igual de bé, la
        filtració es deixa sense lligar en comptes d’endevinar quina en respon.
      </p>

      {linked.length === 0 ? (
        <p className="unknown">
          Cap filtració lligada encara. Executeu <code>pnpm import-breaches</code> per omplir el
          catàleg.
        </p>
      ) : (
        <div
          className="scroller"
          role="region"
          tabIndex={0}
          aria-label="Filtracions lligades a empreses del directori, amb any, comptes exposats i dades exposades"
        >
          <table>
            <caption className="visually-hidden">
              Filtracions lligades a empreses del directori, amb any, comptes exposats i dades
              exposades
            </caption>
            <thead>
              <tr>
                <th scope="col">Filtració</th>
                <th scope="col">Empresa</th>
                <th scope="col">Any</th>
                <th scope="col">Comptes</th>
                <th scope="col">Dades exposades</th>
              </tr>
            </thead>
            <tbody>
              {linked.map((breach) => {
                const company = companyOf(breach)
                const types = dataTypeNames(breach, 4)
                return (
                  <tr key={breach.id}>
                    <td>{breach.title}</td>
                    <td>
                      {company ? (
                        <Link href={`/empreses#${company.slug ?? ''}`}>{company.name}</Link>
                      ) : (
                        <span className="unknown">—</span>
                      )}
                    </td>
                    <td>{formatYear(breach.breachDate)}</td>
                    <td>{formatAccounts(breach.pwnCount)}</td>
                    <td>
                      {types.length > 0 ? types.join(', ') : <span className="unknown">—</span>}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      <h2>Les cent cinquanta més grans</h2>
      <p>
        Ordenades per nombre de comptes afectats. Compte amb llegir-ho com un rànquing de mala
        praxi: les primeres posicions les ocupen sovint agregadors, és a dir, plataformes que van
        acumular dades robades a altres, i no empreses que patissin una filtració pròpia.
      </p>

      <div
        className="scroller"
        role="region"
        tabIndex={0}
        aria-label="Les cent cinquanta filtracions més grans del catàleg, amb domini, any, comptes i dades exposades"
      >
        <table>
          <caption className="visually-hidden">
            Les cent cinquanta filtracions més grans del catàleg, amb domini, any, comptes i dades
            exposades
          </caption>
          <thead>
            <tr>
              <th scope="col">Filtració</th>
              <th scope="col">Domini</th>
              <th scope="col">Any</th>
              <th scope="col">Comptes</th>
              <th scope="col">Dades exposades</th>
            </tr>
          </thead>
          <tbody>
            {breaches.map((breach) => {
              const types = dataTypeNames(breach, 3)
              const company = companyOf(breach)
              return (
                <tr key={breach.id}>
                  <td>
                    {breach.title}
                    {breach.isSensitive ? <span className="badge">sensible</span> : null}
                    {company ? <span className="badge">documentada</span> : null}
                  </td>
                  <td>{breach.domain || <span className="unknown">—</span>}</td>
                  <td>{formatYear(breach.breachDate)}</td>
                  <td>{formatAccounts(breach.pwnCount)}</td>
                  <td>
                    {types.length > 0 ? types.join(', ') : <span className="unknown">—</span>}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <h2>D’on surten aquestes dades</h2>
      <p className="meta">
        Font: <a href="https://haveibeenpwned.com">Have I Been Pwned</a>, de Troy Hunt, sota
        llicència Creative Commons Reconeixement 4.0 Internacional. El projecte n’importa el catàleg
        públic de filtracions i n’hi afegeix la correspondència amb el seu propi vocabulari de tipus
        de dada. Les descripcions originals es desen en text pla i els enllaços que contenien es
        conserven a part.
      </p>
      <p className="meta">
        Aquesta pàgina no permet comprovar si una adreça concreta apareix en cap filtració. Aquesta
        consulta exigeix enviar l’adreça a un tercer, i el projecte no vol ser l’intermediari que
        recull adreces de correu de qui ve a informar-se sobre privadesa. Qui ho vulgui comprovar ho
        pot fer directament al lloc de Have I Been Pwned.
      </p>
    </>
  )
}
