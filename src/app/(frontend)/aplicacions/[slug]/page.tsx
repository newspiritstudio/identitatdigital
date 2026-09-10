import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

import { Fact, Logo, STATUS_LABELS, Score, getClient } from '../../lib'
import type { App, Category, DataType, Incident, ProcessingPurpose } from '@/payload-types'

export const dynamic = 'force-dynamic'

const label = (value: unknown, fallback = '—') =>
  typeof value === 'object' && value !== null && 'name' in value
    ? String((value as { name: unknown }).name)
    : fallback

const COLLECTION_STATUS: Record<string, string> = {
  yes: 'Sí',
  optional: 'Si s’activa',
  no: 'No',
  unknown: 'No documentat',
}

const SHARED_WITH: Record<string, string> = {
  none: 'Ningú fora del servei',
  group: 'Empreses del grup',
  'third-parties': 'Tercers',
  brokers: 'Intermediaris de dades',
  unknown: 'No documentat',
}

const DIFFICULTY: Record<string, string> = {
  easy: 'Fàcil',
  medium: 'Mitjana',
  hard: 'Difícil',
  impossible: 'No és possible',
  unknown: 'No documentada',
}

const COMPARABILITY: Record<string, string> = {
  equivalent: 'Cobreix la mateixa necessitat',
  partial: 'La cobreix parcialment',
  complementary: 'És complementària',
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getClient()
  const { docs } = await payload.find({ collection: 'apps', where: { slug: { equals: slug } }, limit: 1, depth: 0 })
  return { title: docs[0]?.name ?? 'Aplicació' }
}

export default async function AppPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getClient()

  const { docs } = await payload.find({
    collection: 'apps',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  })
  const app = docs[0] as App | undefined
  if (!app) notFound()

  const { docs: incidents } = await payload.find({
    collection: 'incidents',
    where: { apps: { in: [app.id] } },
    sort: '-occurredAt',
    limit: 50,
    depth: 1,
  })

  const deletion = app.accountDeletion
  const scores = app.scores

  return (
    <>
      <h1 className="with-logo">
        <Logo logo={app.logo} name={app.name} size={40} />
        {app.name}
      </h1>
      <p className="lede">{app.tagline}</p>

      <table>
        <thead>
          <tr>
            <th>Privadesa</th>
            <th>Seguretat</th>
            <th>Control</th>
            <th>Global</th>
            <th>Confiança</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Score value={scores?.privacy} /></td>
            <td><Score value={scores?.security} /></td>
            <td><Score value={scores?.agency} /></td>
            <td><Score value={scores?.overall} /></td>
            <td><Score value={scores?.confidence} /></td>
          </tr>
        </tbody>
      </table>
      <p className="meta">
        Metodologia {scores?.methodologyVersion ?? '—'}. Cobertura documentada del{' '}
        {typeof scores?.coverage === 'number' ? Math.round(scores.coverage * 100) : '—'} % dels
        indicadors aplicables.
        {scores?.provisional ? ' Puntuació provisional: encara no en sabem prou.' : ''}{' '}
        <Link href="/metodologia">Com es calcula</Link>
      </p>

      <p>{app.summary}</p>

      <h2>Identificació</h2>
      <table>
        <tbody>
          <tr>
            <th>Empresa</th>
            <td>{label(app.company)}</td>
          </tr>
          <tr>
            <th>Categories</th>
            <td>{(app.categories ?? []).map((category) => label(category as Category)).join(', ') || '—'}</td>
          </tr>
          <tr>
            <th>Model de negoci</th>
            <td>{app.businessModel ?? '—'}</td>
          </tr>
          <tr>
            <th>Jurisdicció</th>
            <td>{app.jurisdiction ?? '—'}</td>
          </tr>
          <tr>
            <th>Volum</th>
            <td>{app.userBase ?? '—'}</td>
          </tr>
          <tr>
            <th>Enllaços</th>
            <td>
              {[
                ['Lloc web', app.links?.website],
                ['Política de privadesa', app.links?.privacyPolicy],
                ['Condicions', app.links?.terms],
                ['Centre de privadesa', app.links?.privacyCenter],
                ['App Store', app.links?.appStore],
                ['Google Play', app.links?.playStore],
              ]
                .filter(([, href]) => Boolean(href))
                .map(([text, href], index) => (
                  <React.Fragment key={String(text)}>
                    {index > 0 ? ' · ' : ''}
                    <a href={String(href)} target="_blank" rel="noreferrer">
                      {String(text)}
                    </a>
                  </React.Fragment>
                ))}
            </td>
          </tr>
        </tbody>
      </table>

      <dl>
        <Fact label="Cal un compte" fact={app.accountRequired} />
        <Fact label="Codi obert" fact={app.openSource} />
      </dl>

      <h2>Dades recollides</h2>
      {app.dataSummary ? <p>{app.dataSummary}</p> : null}
      <table>
        <thead>
          <tr>
            <th>Tipus de dada</th>
            <th>Es recull</th>
            <th>Identificable</th>
            <th>Seguiment</th>
            <th>Es comparteix amb</th>
            <th>Finalitats</th>
          </tr>
        </thead>
        <tbody>
          {(app.dataCollection ?? []).map((row) => (
            <tr key={row.id}>
              <td>
                {label(row.dataType as DataType)}
                {row.note ? <div className="meta">{row.note}</div> : null}
              </td>
              <td>{COLLECTION_STATUS[row.status ?? 'unknown']}</td>
              <td>{STATUS_LABELS[row.linkedToIdentity ?? 'unknown']}</td>
              <td>{STATUS_LABELS[row.usedForTracking ?? 'unknown']}</td>
              <td>{SHARED_WITH[row.sharedWith ?? 'unknown']}</td>
              <td className="meta">
                {(row.purposes ?? []).map((purpose) => label(purpose as ProcessingPurpose)).join(', ') || '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Seguiment i usos</h2>
      <dl>
        <Fact label="Seguiment entre aplicacions i llocs" fact={app.tracking?.crossAppTracking} />
        <Fact label="Identificadors publicitaris" fact={app.tracking?.advertisingIdentifiers} />
        <Fact label="Rastrejadors de tercers" fact={app.tracking?.thirdPartyTrackersPresent} />
        <Fact label="Publicitat dirigida" fact={app.dataUses?.targetedAdvertising} />
        <Fact label="Elaboració de perfils" fact={app.dataUses?.profiling} />
        <Fact label="Entrenament de models d’IA" fact={app.dataUses?.aiTraining} />
        <Fact label="Cessió a tercers" fact={app.sharing?.thirdPartySharing} />
        <Fact label="Compartició dins del grup" fact={app.sharing?.intraGroupSharing} />
        <Fact label="Venda a intermediaris de dades" fact={app.sharing?.dataBrokerSales} />
        <Fact label="Transferències internacionals" fact={app.sharing?.internationalTransfers} />
      </dl>

      <h2>Eliminació del compte</h2>
      <dl>
        <Fact label="Es pot eliminar" fact={deletion?.possible} />
        <Fact label="Es pot fer sol" fact={deletion?.selfService} />
      </dl>
      <table>
        <tbody>
          <tr>
            <th>Dificultat</th>
            <td>{DIFFICULTY[deletion?.difficulty ?? 'unknown']}</td>
          </tr>
          <tr>
            <th>Espera</th>
            <td>
              {deletion?.waitingPeriodDays === null || deletion?.waitingPeriodDays === undefined
                ? '—'
                : `${deletion.waitingPeriodDays} dies`}
            </td>
          </tr>
          <tr>
            <th>Cal contactar amb suport</th>
            <td>{deletion?.requiresSupportContact ? 'Sí' : 'No'}</td>
          </tr>
          {deletion?.directUrl ? (
            <tr>
              <th>Enllaç directe</th>
              <td>
                <a href={deletion.directUrl} target="_blank" rel="noreferrer">
                  {deletion.directUrl}
                </a>
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      {(deletion?.steps ?? []).length > 0 ? (
        <>
          <h3>Passos</h3>
          <ol>
            {(deletion?.steps ?? []).map((step) => (
              <li key={step.id}>{step.step}</li>
            ))}
          </ol>
        </>
      ) : null}
      {deletion?.obstacles ? (
        <>
          <h3>Obstacles</h3>
          <p>{deletion.obstacles}</p>
        </>
      ) : null}
      {deletion?.dataRetained ? (
        <>
          <h3>Què es conserva després</h3>
          <p>{deletion.dataRetained}</p>
        </>
      ) : null}

      <h2>Drets i control</h2>
      <dl>
        <Fact label="Exportació de dades" fact={app.userRights?.dataExport} />
        <Fact label="Exercici de drets" fact={app.userRights?.rightsExercise} />
        <Fact label="Desactivar la publicitat personalitzada" fact={app.controls?.adPersonalizationOptOut} />
        <Fact label="Desactivar la telemetria" fact={app.controls?.telemetryOptOut} />
        <Fact label="Controls detallats" fact={app.controls?.granularControls} />
        <Fact label="Patrons enganyosos" fact={app.controls?.darkPatterns} />
      </dl>
      {(app.controls?.darkPatternList ?? []).length > 0 ? (
        <ul>
          {(app.controls?.darkPatternList ?? []).map((pattern) => (
            <li key={pattern.id}>
              <strong>{pattern.type}</strong> ({pattern.severity}): {pattern.description}
            </li>
          ))}
        </ul>
      ) : null}

      <h2>Seguretat</h2>
      <dl>
        <Fact
          label="Xifratge d’extrem a extrem"
          fact={app.security?.e2ee}
          extra={
            app.security?.e2ee?.protocol ? (
              <p className="meta">Protocol: {app.security.e2ee.protocol}</p>
            ) : null
          }
        />
        <Fact label="Xifratge en trànsit" fact={app.security?.transportEncryption} />
        <Fact label="Xifratge en repòs" fact={app.security?.atRestEncryption} />
        <Fact label="Verificació en dos passos" fact={app.security?.mfa} />
        <Fact label="Auditories independents" fact={app.security?.independentAudits} />
        <Fact label="Programa de recompenses" fact={app.security?.bugBounty} />
        <Fact label="Divulgació de vulnerabilitats" fact={app.security?.vulnerabilityDisclosure} />
      </dl>

      <h2>Incidents registrats</h2>
      {incidents.length === 0 ? (
        <p className="unknown">
          {app.review?.incidentsReviewed
            ? 'No hi ha incidents documentats en el període revisat.'
            : 'Encara no s’ha fet la revisió d’incidents d’aquesta fitxa.'}
        </p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Any</th>
              <th>Incident</th>
              <th>Gravetat</th>
              <th>Sanció</th>
              <th>Estat</th>
            </tr>
          </thead>
          <tbody>
            {(incidents as Incident[]).map((incident) => (
              <tr key={incident.id}>
                <td>{String(incident.occurredAt).slice(0, 4)}</td>
                <td>{incident.title}</td>
                <td>{incident.severity}</td>
                <td>
                  {incident.regulatory?.fineAmountEur
                    ? `${incident.regulatory.fineAmountEur.toLocaleString('ca-ES')} €`
                    : '—'}
                </td>
                <td>{incident.regulatory?.status ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h2>Alternatives</h2>
      {(app.alternatives ?? []).length === 0 ? (
        <p className="unknown">
          Encara no hem documentat cap alternativa que cobreixi raonablement la mateixa necessitat.
        </p>
      ) : (
        <ul className="plain">
          {(app.alternatives ?? []).map((alternative) => {
            const target = alternative.app as App
            return (
              <li key={alternative.id} className="card" style={{ marginBottom: '0.5rem' }}>
                <h3>
                  <Link href={`/aplicacions/${target?.slug}`}>{target?.name}</Link>{' '}
                  <span className="badge">{COMPARABILITY[alternative.comparability ?? 'partial']}</span>
                </h3>
                <p>{alternative.rationale}</p>
                {alternative.tradeOffs ? <p className="meta">A canvi: {alternative.tradeOffs}</p> : null}
              </li>
            )
          })}
        </ul>
      )}

      <h2>Revisió editorial</h2>
      <p className="meta">
        Estat de la recerca: {app.review?.researchStatus ?? '—'}. Darrera revisió:{' '}
        {app.review?.lastReviewedAt ? String(app.review.lastReviewedAt).slice(0, 10) : '—'}.
      </p>
      {app.review?.editorialNotes ? <p>{app.review.editorialNotes}</p> : null}
      {(app.review?.openQuestions ?? []).length > 0 ? (
        <>
          <h3>Preguntes obertes</h3>
          <ul>
            {(app.review?.openQuestions ?? []).map((question) => (
              <li key={question.id}>{question.question}</li>
            ))}
          </ul>
        </>
      ) : null}
    </>
  )
}
