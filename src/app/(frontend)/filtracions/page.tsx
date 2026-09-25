import Link from 'next/link'
import type { Metadata } from 'next'

import { getClient } from '../lib'
import { loadCorpus, relationId, relationIds } from '@/lib/analysis'
import type { Breach, Company } from '@/payload-types'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Filtracions' }

/**
 * Catàleg de filtracions de dades.
 *
 * Les dades venen de Have I Been Pwned i es mostren tal com les publica, amb
 * l'atribució que demana la seva llicència. La pàgina no en dona cap puntuació:
 * convertir una filtració en judici sobre una empresa demana feina editorial i
 * això viu als incidents.
 *
 * El que hi posa el projecte és la traducció. Les categories de HIBP, en anglès
 * i amb vocabulari propi, queden mapades als tipus de dada d'aquí.
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


export default async function BreachesPage() {
  const payload = await getClient()

  /*
   * El catàleg sencer ja forma part del corpus que es desa a la memòria del
   * procés, i les relacions es resolen contra els seus índexs. Demanar-lo amb
   * profunditat 1 volia dir resoldre l'empresa i els tipus de dada filtració
   * per filtració.
   */
  const corpus = await loadCorpus(payload)
  const totalDocs = corpus.breaches.length

  const companyOf = (breach: Breach): Company | null =>
    corpus.companyById.get(relationId(breach.company) ?? '') ?? null

  const dataTypeNames = (breach: Breach, limit: number): string[] =>
    relationIds(breach.dataTypes)
      .map((id) => corpus.dataTypeById.get(id)?.name)
      .filter((name): name is string => Boolean(name))
      .slice(0, limit)

  const breaches = [...corpus.breaches]
    .sort((a, b) => (b.pwnCount ?? 0) - (a.pwnCount ?? 0))
    .slice(0, 150)

  const linkedAll = corpus.breaches.filter((breach) => relationId(breach.company) !== null)
  const linkedTotal = linkedAll.length
  const linked = [...linkedAll]
    .sort((a, b) => String(b.breachDate ?? '').localeCompare(String(a.breachDate ?? '')))
    .slice(0, 50)

  const totalAccounts = breaches.reduce((sum, breach) => sum + (breach.pwnCount ?? 0), 0)

  return (
    <div className="content-wrapper">
      <h1>Filtracions de dades</h1>
      <p className="lede">
        {totalDocs.toLocaleString('ca-ES')} filtracions documentades per Have I Been Pwned. No són
        anàlisis nostres i no mouen cap puntuació. Les incorporem perquè mostren què va passar quan
        les dades que una empresa havia recollit se li van escapar.
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
        Aquesta pàgina no rep cap adreça de correu. Per saber si la teva surt en alguna filtració,
        l’eina de <Link href="/eines/credencials">credencials</Link> fa la consulta des del teu
        navegador directament a XposedOrNot, un servei obert: el projecte no vol ser
        l’intermediari que recull adreces de qui ve a informar-se sobre privadesa, i així no ho
        és. També la pots fer al lloc de Have I Been Pwned.
      </p>
    </div>
  )
}
