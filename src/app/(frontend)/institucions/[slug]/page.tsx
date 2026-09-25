import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { loadCorpus, localizedText } from '@/lib/analysis'
import { FLAG_LABELS, buildProcurementSheet, type FlagLevel } from '@/lib/procurement'

import { getClient } from '../../lib'
import { comparabilityLabel } from '@/lib/labels'

export const dynamic = 'force-dynamic'

const CA = new Intl.NumberFormat('ca-ES')

/** Ordre de lectura: primer el que atura, després el que s'ha de comprovar. */
const ORDER: Record<FlagLevel, number> = { stop: 0, check: 1, unknown: 2, ok: 3 }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const payload = await getClient()
  const found = await payload.find({
    collection: 'apps',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })
  const app = found.docs[0]
  if (app === undefined) return { title: 'Fitxa de contractació' }
  return {
    title: `Contractar ${localizedText(app.name)}`,
    description: `Els punts que una escola o un ajuntament ha de valorar abans d’adoptar ${localizedText(app.name)}, amb el precepte que fa rellevant cadascun.`,
  }
}

/**
 * Fitxa de contractació d'una aplicació.
 *
 * Es genera sencera del corpus: no hi ha cap text escrit a mà per a cap
 * aplicació concreta. Això té dues conseqüències bones. La primera és que una
 * fitxa nova al directori genera la seva fitxa de contractació tot sola. La
 * segona, més important, és que no es pot ser més dur amb una empresa que amb
 * una altra: les alertes surten de les mateixes regles aplicades a les mateixes
 * dades.
 */
export default async function ProcurementPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const payload = await getClient()
  const corpus = await loadCorpus(payload)
  const app = corpus.apps.find((candidate) => candidate.slug === slug)
  if (app === undefined) notFound()

  const sheet = buildProcurementSheet(corpus, app)
  const flags = sheet.flags.slice().sort((a, b) => ORDER[a.level] - ORDER[b.level])

  return (
    <>
      <p className="meta">
        <Link href="/institucions">Escoles i ajuntaments</Link>
      </p>
      <h1>Contractar {sheet.name}</h1>
      <p className="lede">
        Els deu punts que una escola o un ajuntament ha de poder respondre abans d’adoptar aquesta
        eina, amb el precepte que fa rellevant cadascun i el que en sabem. No és un dictamen jurídic
        ni substitueix l’avaluació d’impacte: és la preparació de l’expedient.
      </p>

      <div
        className="scroller"
        role="region"
        tabIndex={0}
        aria-label={`Resum de la fitxa de contractació de ${sheet.name}`}
      >
        <table>
          <caption className="visually-hidden">{`Resum de la fitxa de contractació de ${sheet.name}`}</caption>
          <tbody>
            <tr>
              <th scope="row">Servei</th>
              <td>
                <Link href={`/aplicacions/${sheet.slug}`}>{sheet.name}</Link>
              </td>
            </tr>
            <tr>
              <th scope="row">Empresa</th>
              <td>{sheet.companyName ?? '—'}</td>
            </tr>
            <tr>
              <th scope="row">Grup</th>
              <td>{sheet.groupName ?? '—'}</td>
            </tr>
            <tr>
              <th scope="row">Jurisdicció declarada</th>
              <td>{sheet.jurisdiction ?? '—'}</td>
            </tr>
            <tr>
              <th scope="row">Puntuació global</th>
              <td>{sheet.overall === null ? '—' : CA.format(sheet.overall)}</td>
            </tr>
            <tr>
              <th scope="row">Confiança de l’anàlisi</th>
              <td>{sheet.confidence === null ? '—' : CA.format(sheet.confidence)}</td>
            </tr>
            <tr>
              <th scope="row">Punts d’atenció</th>
              <td>
                {CA.format(sheet.stops)} d’atenció, {CA.format(sheet.checks)} a comprovar,{' '}
                {CA.format(sheet.unknowns)} sense comprovar
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Els punts, un per un</h2>
      {flags.map((flag) => (
        <section key={flag.key}>
          <h3>
            {flag.title} <span className="badge">{FLAG_LABELS[flag.level]}</span>
          </h3>
          <p>{flag.finding}</p>
          <p>
            <strong>Què cal fer:</strong> {flag.action}
          </p>
          <p className="meta">Fonament: {flag.basis}</p>
        </section>
      ))}

      {sheet.alternatives.length > 0 ? (
        <>
          <h2>Alternatives documentades</h2>
          <p>
            Si algun punt no es pot resoldre, la resposta no ha de ser necessàriament renunciar a la
            funció. Aquestes alternatives estan documentades a la fitxa amb el mateix mètode.
          </p>
          <ul>
            {sheet.alternatives.map((alternative) => (
              <li key={alternative.slug}>
                <Link href={`/institucions/${alternative.slug}`}>{alternative.name}</Link>
                {alternative.comparability === null
                  ? null
                  : ` — ${comparabilityLabel(alternative.comparability)?.toLowerCase()}`}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <h2>D’on surt tot això</h2>
      <p>
        Aquesta fitxa es genera sencera de la{' '}
        <Link href={`/aplicacions/${sheet.slug}`}>fitxa del directori</Link>, aplicant les mateixes
        regles a totes les aplicacions. No hi ha cap text escrit a mà per a cap empresa concreta, de
        manera que no es pot ser més dur amb una que amb una altra. Les dades es poden descarregar a{' '}
        <Link href="/dades">dades obertes</Link> i el criteri de cada xifra és a la{' '}
        <Link href="/metodologia">metodologia</Link>.
      </p>
    </>
  )
}
