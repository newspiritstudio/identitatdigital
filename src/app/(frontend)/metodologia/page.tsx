import type { Metadata } from 'next'

import { getClient } from '../lib'
import { DIMENSION_LABELS } from '@/lib/scoring/methodology'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Metodologia' }

export default async function MethodologyPage() {
  const payload = await getClient()
  const { docs } = await payload.find({
    collection: 'scoring-methodologies',
    where: { status: { equals: 'current' } },
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

  const byDimension = (key: string) => (methodology.indicators ?? []).filter((indicator) => indicator.dimension === key)

  return (
    <>
      <h1>Metodologia de puntuació</h1>
      <p className="lede">
        Versió {methodology.version}, vigent des del{' '}
        {String(methodology.effectiveFrom).slice(0, 10)}.
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
      <table>
        <thead>
          <tr>
            <th>Dimensió</th>
            <th>Pes a la puntuació global</th>
            <th>Indicadors</th>
          </tr>
        </thead>
        <tbody>
          {(methodology.dimensions ?? []).map((dimension) => (
            <tr key={dimension.id}>
              <td>{dimension.label}</td>
              <td>{Math.round((dimension.weight ?? 0) * 100)} %</td>
              <td>{byDimension(dimension.key).length}</td>
            </tr>
          ))}
        </tbody>
      </table>

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
          <h3>{DIMENSION_LABELS[dimension.key as keyof typeof DIMENSION_LABELS] ?? dimension.label}</h3>
          <table>
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Pes</th>
                <th>Què mesura</th>
              </tr>
            </thead>
            <tbody>
              {byDimension(dimension.key).map((indicator) => (
                <tr key={indicator.id}>
                  <td>{indicator.label}</td>
                  <td>{indicator.weight}</td>
                  <td className="meta">{indicator.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      {methodology.changelog ? (
        <>
          <h2>Canvis</h2>
          <p>{methodology.changelog}</p>
        </>
      ) : null}
    </>
  )
}
