import Link from 'next/link'

import { getClient } from './lib'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const payload = await getClient()
  const [apps, companies, sources, incidents, breaches] = await Promise.all([
    payload.count({ collection: 'apps' }),
    payload.count({ collection: 'companies' }),
    payload.count({ collection: 'sources' }),
    payload.count({ collection: 'incidents' }),
    payload.count({ collection: 'breaches' }),
  ])

  return (
    <>
      <h1>Identitat.digital</h1>
      <p className="lede">
        Què fan amb les teves dades les aplicacions que tens al telèfon. Quatre-centes fitxes
        documentades una per una, amb la font de cada afirmació i amb els buits marcats com a
        buits.
      </p>

      <h2>Estat de la base de dades</h2>
      <div
        className="scroller"
        role="region"
        tabIndex={0}
        aria-label="Recompte de documents publicats a cada col·lecció"
      >
        <table>
          <caption className="visually-hidden">
            Recompte de documents publicats a cada col·lecció
          </caption>
          <tbody>
            <tr>
              <th scope="row">Fitxes d’aplicacions</th>
              <td>{apps.totalDocs}</td>
            </tr>
            <tr>
              <th scope="row">Empreses i grups</th>
              <td>{companies.totalDocs}</td>
            </tr>
            <tr>
              <th scope="row">Fonts documentals</th>
              <td>{sources.totalDocs}</td>
            </tr>
            <tr>
              <th scope="row">Incidents registrats</th>
              <td>{incidents.totalDocs}</td>
            </tr>
            <tr>
              <th scope="row">Filtracions al catàleg</th>
              <td>{breaches.totalDocs.toLocaleString('ca-ES')}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Per on començar</h2>
      <ul>
        <li>
          <Link href="/aplicacions">Directori d’aplicacions</Link>, amb les puntuacions de
          privadesa, seguretat i control.
        </li>
        <li>
          <Link href="/empreses">Empreses i grups</Link>, per veure quantes aplicacions acaben al
          mateix lloc.
        </li>
        <li>
          <Link href="/analisi">Anàlisi transversal</Link>, que mira les 400 fitxes alhora: quines
          dades demana tothom, qui acumula més i què costa marxar.
        </li>
        <li>
          <Link href="/eines">Eines</Link>: generador de contrasenyes, calculadora d’exposició i
          comparador de fitxes. Calculen al navegador i no envien res a cap servidor.
        </li>
        <li>
          <Link href="/filtracions">Filtracions</Link>, el catàleg de Have I Been Pwned traduït al
          vocabulari del projecte.
        </li>
        <li>
          <Link href="/institucions">Escoles i ajuntaments</Link>, amb una fitxa de contractació per
          aplicació: els punts que la normativa obliga a valorar abans d’adoptar una eina, i el
          precepte que fa rellevant cadascun.
        </li>
        <li>
          <Link href="/dades">Dades obertes</Link>, el corpus sencer en JSON i CSV, sense registre i
          amb diccionari de dades.
        </li>
        <li>
          <Link href="/metodologia">Metodologia</Link>, que explica com es calcula cada xifra i què
          passa quan no sabem una cosa.
        </li>
        <li>
          <Link href="/consultes">Consultes creuades</Link>: preguntes que travessen diverses
          col·leccions alhora, com ara quines aplicacions de salut comparteixen dades amb tercers.
        </li>
      </ul>
    </>
  )
}
