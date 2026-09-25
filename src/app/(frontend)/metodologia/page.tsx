import type { Metadata } from 'next'

import { getClient } from '../lib'
import { DIMENSION_LABELS } from '@/lib/scoring/methodology'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Metodologia' }

const DATA = new Intl.DateTimeFormat('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })

export default async function MethodologyPage() {
  const payload = await getClient()
  const { docs } = await payload.find({
    collection: 'scoring-methodologies',
    where: { and: [{ status: { equals: 'current' } }, { _status: { equals: 'published' } }] },
    draft: false,
    // Si mai n'hi ha dues de vigents, mana la més recent.
    sort: '-effectiveFrom',
    limit: 1,
    depth: 0,
  })
  const methodology = docs[0]

  if (!methodology) {
    return (
      <>
        <h1>Metodologia</h1>
        <p className="unknown">Encara no s’ha publicat cap versió de la metodologia.</p>
      </>
    )
  }

  const byDimension = (key: string, scope: string) =>
    (methodology.indicators ?? []).filter(
      (indicator) => indicator.dimension === key && (indicator.scope ?? 'all') === scope,
    )

  return (
    <div className="content-wrapper">
      <div className="text-page">
        <h1>Metodologia de puntuació</h1>
        <p className="lede">
          Versió {methodology.version}, vigent des del{' '}
          {DATA.format(new Date(methodology.effectiveFrom))}.
        </p>

        <p>{methodology.summary}</p>

        <h2>Principis</h2>
        {(methodology.principles ?? []).map((principle) => (
          <div key={principle.id}>
            <h3>{principle.title}</h3>
            <p>{principle.body}</p>
          </div>
        ))}

        <h2>Dimensions</h2>
        <div
          className="scroller"
          role="region"
          tabIndex={0}
          aria-label="Dimensions de la puntuació, el seu pes a la nota global i quants indicadors té cadascuna"
        >
          <table>
            <caption className="visually-hidden">
              Dimensions de la puntuació, el seu pes a la nota global i quants indicadors té cadascuna
            </caption>
            <thead>
              <tr>
                <th scope="col">Dimensió</th>
                <th scope="col">Pes a la puntuació global</th>
                <th scope="col">Indicadors</th>
              </tr>
            </thead>
            <tbody>
              {(methodology.dimensions ?? []).map((dimension) => (
                <tr key={dimension.id}>
                  <td>{dimension.label}</td>
                  <td>{Math.round((dimension.weight ?? 0) * 100)} %</td>
                  <td>{byDimension(dimension.key, 'all').length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Informació desconeguda</h2>
        {methodology.unknownPolicy.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <h2>Grau de confiança</h2>
        {methodology.confidenceFormula.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <h2>Indicadors</h2>
        {(methodology.dimensions ?? []).map((dimension) => (
          <div key={dimension.id}>
            <h3>
              {DIMENSION_LABELS[dimension.key as keyof typeof DIMENSION_LABELS] ?? dimension.label}
            </h3>
            <div
              className="scroller"
              role="region"
              tabIndex={0}
              aria-label={`Indicadors de la dimensió ${DIMENSION_LABELS[dimension.key as keyof typeof DIMENSION_LABELS] ?? dimension.label}, amb el seu pes i què mesuren`}
            >
              <table>
                <caption className="visually-hidden">{`Indicadors de la dimensió ${DIMENSION_LABELS[dimension.key as keyof typeof DIMENSION_LABELS] ?? dimension.label}, amb el seu pes i què mesuren`}</caption>
                <thead>
                  <tr>
                    <th scope="col">Indicador</th>
                    <th scope="col">Pes</th>
                    <th scope="col">Què mesura</th>
                  </tr>
                </thead>
                <tbody>
                  {byDimension(dimension.key, 'all').map((indicator) => (
                    <tr key={indicator.id}>
                      <td>{indicator.label}</td>
                      <td>{indicator.weight}</td>
                      <td className="meta">{indicator.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {(methodology.indicators ?? []).some((indicator) => indicator.scope === 'public-service') ? (
          <>
            <h2>Indicadors de servei públic</h2>
            <p>
              Les fitxes marcades com a servei públic es puntuen amb set indicadors més, que
              substitueixen el programa de recompenses i l’informe de transparència. Un ajuntament no
              té cap d’aquestes dues coses i no té sentit restar-li punts per això; el que sí que ha de
              tenir és una base legal publicada, un registre d’activitats de tractament i un delegat de
              protecció de dades.
            </p>
            {(methodology.dimensions ?? [])
              .filter((dimension) => byDimension(dimension.key, 'public-service').length > 0)
              .map((dimension) => (
                <div key={dimension.id}>
                  <h3>
                    {DIMENSION_LABELS[dimension.key as keyof typeof DIMENSION_LABELS] ??
                      dimension.label}
                  </h3>
                  <div
                    className="scroller"
                    role="region"
                    tabIndex={0}
                    aria-label={`Indicadors de servei públic de la dimensió ${DIMENSION_LABELS[dimension.key as keyof typeof DIMENSION_LABELS] ?? dimension.label}`}
                  >
                    <table>
                      <caption className="visually-hidden">{`Indicadors de servei públic de la dimensió ${DIMENSION_LABELS[dimension.key as keyof typeof DIMENSION_LABELS] ?? dimension.label}`}</caption>
                      <thead>
                        <tr>
                          <th scope="col">Indicador</th>
                          <th scope="col">Pes</th>
                          <th scope="col">Què mesura</th>
                        </tr>
                      </thead>
                      <tbody>
                        {byDimension(dimension.key, 'public-service').map((indicator) => (
                          <tr key={indicator.id}>
                            <td>{indicator.label}</td>
                            <td>{indicator.weight}</td>
                            <td className="meta">{indicator.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
          </>
        ) : null}

        {methodology.changelog ? (
          <>
            <h2>Canvis</h2>
            <p>{methodology.changelog}</p>
          </>
        ) : null}
      </div>
    </div>
  )
}

