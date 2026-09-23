import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

import { Fact, Logo, STATUS_LABELS, Score, getClient } from '../../lib'
import type { App, Category, DataType, Incident, ProcessingPurpose } from '@/payload-types'

export const dynamic = 'force-dynamic'

/** Etiquetes de l'atenció en català. */
const CATALAN_SUPPORT: Record<string, string> = {
  yes: 'sí, atenció i ajuda en català',
  'help-only': 'només l’ajuda, no l’atenció',
  no: 'no',
  unknown: 'desconegut',
}

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

/*
 * Una administració no té grup empresarial ni empresa responsable. Les
 * etiquetes que parlen d'empreses es canvien per les del sector públic quan la
 * fitxa és d'un servei públic; la resta són iguals per a tothom.
 */
const PUBLIC_SHARED_WITH: Record<string, string> = {
  ...SHARED_WITH,
  group: 'Altres òrgans de la mateixa administració',
}

const DIFFICULTY: Record<string, string> = {
  easy: 'Fàcil',
  medium: 'Mitjana',
  hard: 'Difícil',
  impossible: 'No és possible',
  unknown: 'No documentada',
}

const BUSINESS_MODEL: Record<string, string> = {
  advertising: 'Publicitat',
  subscription: 'Subscripció',
  freemium: 'Freemium',
  paid: 'Pagament únic',
  commerce: 'Comerç o comissions',
  donations: 'Donacions o finançament sense ànim de lucre',
  'public-service': 'Servei públic finançat amb impostos',
  unknown: 'No documentat',
}

const ADMINISTRATION_LEVEL: Record<string, string> = {
  european: 'Administració europea',
  state: 'Administració estatal',
  regional: 'Administració autonòmica',
  local: 'Administració local',
  other: 'Altres organismes públics',
}

const COMPARABILITY: Record<string, string> = {
  equivalent: 'Cobreix la mateixa necessitat',
  partial: 'La cobreix parcialment',
  complementary: 'És complementària',
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getClient()
  const { docs } = await payload.find({
    collection: 'apps',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })
  return { title: docs[0]?.name ?? 'Aplicació' }
}

export default async function AppPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payload = await getClient()

  /*
   * Profunditat 1: n'hi ha prou per tenir les fonts de cada afirmació, les
   * categories i les alternatives. A profunditat 2, cada alternativa arrossega
   * la seva pròpia fitxa sencera amb totes les fonts, i la pàgina passava de
   * mig segon a mig minut.
   */
  const { docs } = await payload.find({
    collection: 'apps',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
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
  const isPublic = app.publicService?.isPublicService === true
  const sharedWith = isPublic ? PUBLIC_SHARED_WITH : SHARED_WITH

  /*
   * Enllaços oficials. Es dibuixen només els que existeixen, i l'ordre és el de
   * la utilitat per a qui llegeix: primer què fan amb les dades, després com
   * te'n vas. L'adreça d'eliminació ja es documenta a la pestanya d'eliminació,
   * així que el camp d'enllaços només cal omplir-lo si cal una altra adreça.
   */
  type LinkKind = 'action' | 'reference'
  const links: [string, string | null | undefined, LinkKind][] = [
    ['Esborrar el compte', app.links?.deleteAccount ?? deletion?.directUrl, 'action'],
    ['Descarregar les teves dades', app.links?.dataExport, 'action'],
    ['Exercir els drets', app.links?.rightsRequest, 'action'],
    ['Configuració de privadesa', app.links?.privacyCenter, 'action'],
    ['Configuració de publicitat', app.links?.adSettings, 'action'],
    ['Política de privadesa', app.links?.privacyPolicy, 'reference'],
    ['Condicions', app.links?.terms, 'reference'],
    ['Subencarregats', app.links?.subprocessors, 'reference'],
    ['Seguretat', app.links?.security, 'reference'],
    ['Informe de transparència', app.links?.transparencyReport, 'reference'],
    ['Canvis de la política', app.links?.statusOrChangelog, 'reference'],
    ['Lloc web', app.links?.website, 'reference'],
    ['App Store', app.links?.appStore, 'reference'],
    ['Google Play', app.links?.playStore, 'reference'],
  ]
  const visibleLinks = links.filter(
    (entry): entry is [string, string, LinkKind] => Boolean(entry[1]),
  )

  // El color de marca és decoratiu i opcional: viatja com a variable CSS als
  // elements que l'utilitzen, i si la fitxa no en té, tot es veu com la resta
  // del lloc.
  const brand = app.brandColor
    ? ({ '--brand': app.brandColor } as React.CSSProperties)
    : undefined

  return (
    <>
      <h1
        className={app.brandColor ? 'with-logo branded' : 'with-logo'}
        style={brand}
      >
        <Logo logo={app.logo} name={app.name} size={40} />
        {app.name}
      </h1>
      <p className="lede">{app.tagline}</p>

      <div
        className="scroller"
        role="region"
        tabIndex={0}
        aria-label={`Puntuacions publicades de ${app.name}`}
      >
        <table>
          <caption className="visually-hidden">{`Puntuacions publicades de ${app.name}`}</caption>
          <thead>
            <tr>
              <th scope="col">Privadesa</th>
              <th scope="col">Seguretat</th>
              <th scope="col">Control</th>
              <th scope="col">Global</th>
              <th scope="col">Confiança</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Score value={scores?.privacy} />
              </td>
              <td>
                <Score value={scores?.security} />
              </td>
              <td>
                <Score value={scores?.agency} />
              </td>
              <td>
                <Score value={scores?.overall} />
              </td>
              <td>
                <Score value={scores?.confidence} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="meta">
        Metodologia {scores?.methodologyVersion ?? '—'}. Cobertura documentada del{' '}
        {typeof scores?.coverage === 'number' ? Math.round(scores.coverage * 100) : '—'} % dels
        indicadors aplicables.
        {scores?.provisional ? ' Puntuació provisional: encara no en sabem prou.' : ''}{' '}
        <Link href="/metodologia">Com es calcula</Link>
      </p>

      <p>{app.summary}</p>

      {visibleLinks.length > 0 ? (
        <nav className="applinks" aria-label={`Enllaços oficials de ${app.name}`} style={brand}>
          <ul>
            {visibleLinks.map(([text, href, kind]) => (
              <li key={text}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={kind === 'action' ? 'applink action' : 'applink'}
                >
                  {text}
                  <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <h2>Identificació</h2>
      <div
        className="scroller"
        role="region"
        tabIndex={0}
        aria-label={`Dades identificatives de ${app.name}`}
      >
        <table>
          <caption className="visually-hidden">{`Dades identificatives de ${app.name}`}</caption>
          <tbody>
            <tr>
              <th scope="row">{isPublic ? 'Organisme responsable' : 'Empresa'}</th>
              <td>{label(app.company)}</td>
            </tr>
            <tr>
              <th scope="row">Categories</th>
              <td>
                {(app.categories ?? []).map((category) => label(category as Category)).join(', ') ||
                  '—'}
              </td>
            </tr>
            <tr>
              <th scope="row">Model de negoci</th>
              <td>
                {app.publicService?.isPublicService
                  ? BUSINESS_MODEL['public-service']
                  : (BUSINESS_MODEL[app.businessModel ?? 'unknown'] ?? '—')}
              </td>
            </tr>
            <tr>
              <th scope="row">Jurisdicció</th>
              <td>{app.jurisdiction ?? '—'}</td>
            </tr>
            <tr>
              <th scope="row">Volum</th>
              <td>{app.userBase ?? '—'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <dl>
        <Fact label="Cal un compte" fact={app.accountRequired} />
        <Fact label="Codi obert" fact={app.openSource} />
      </dl>

      {app.publicService?.isPublicService ? (
        <>
          <h2>Servei públic</h2>
          <p className="meta">
            {ADMINISTRATION_LEVEL[app.publicService.administrationLevel ?? 'other'] ??
              'Administració pública'}
            . Aquest servei no es mesura amb la vara del sector privat: no té model de negoci ni
            programa de recompenses, però ha de declarar la base jurídica, publicar el registre
            d’activitats de tractament i conformar-se a l’Esquema Nacional de Seguretat. Aquests
            indicadors substitueixen els comercials dins del càlcul.{' '}
            <Link href="/metodologia">Com es calcula</Link>
          </p>
          <dl>
            <Fact label="Base jurídica declarada" fact={app.publicService.legalBasis} />
            <Fact
              label="Registre d’activitats de tractament"
              fact={app.publicService.processingRegistry}
            />
            <Fact label="Avaluació d’impacte" fact={app.publicService.dpia} />
            <Fact label="Conformitat amb l’ENS" fact={app.publicService.ensConformity} />
            <Fact label="Delegat de protecció de dades" fact={app.publicService.dpo} />
            <Fact label="Alternativa no digital" fact={app.publicService.offlineAlternative} />
            <Fact
              label="Declaració d’accessibilitat"
              fact={app.publicService.accessibilityStatement}
            />
            <Fact
              label="Conservació obligada per llei"
              fact={app.publicService.mandatoryRetention}
            />
          </dl>
        </>
      ) : null}

      <h2>Disponibilitat en català</h2>
      <p className="meta">
        Aquesta dimensió és informativa i <strong>no entra a cap de les puntuacions</strong>. Tenir
        interfície en català no fa una empresa més respectuosa amb les dades, i barrejar-ho premiaria
        les plataformes que tradueixen a seixanta idiomes perquè poden i castigaria eines petites i
        molt bones. Es publica al costat de la nota, mai a dins.{' '}
        <Link href="/analisi/catala">Veure-ho per a tot el directori</Link>
      </p>
      <dl>
        <Fact
          label="Interfície en català"
          fact={app.catalan?.interfaceAvailable}
          extra={
            typeof app.catalan?.interfaceLanguages === 'number' ? (
              <> Idiomes d’interfície declarats a la botiga: {app.catalan.interfaceLanguages}.</>
            ) : null
          }
        />
      </dl>
      {app.catalan?.support && app.catalan.support !== 'unknown' ? (
        <p>Atenció i documentació en català: {CATALAN_SUPPORT[app.catalan.support]}.</p>
      ) : null}
      {app.catalan?.note ? <p>{app.catalan.note}</p> : null}

      <h2>Dades recollides</h2>
      {app.dataSummary ? <p>{app.dataSummary}</p> : null}
      <div
        className="scroller"
        role="region"
        tabIndex={0}
        aria-label={`Dades que recull ${app.name}, amb si són identificables, si serveixen per al seguiment, amb qui es comparteixen i per a quines finalitats`}
      >
        <table>
          <caption className="visually-hidden">{`Dades que recull ${app.name}, amb si són identificables, si serveixen per al seguiment, amb qui es comparteixen i per a quines finalitats`}</caption>
          <thead>
            <tr>
              <th scope="col">Tipus de dada</th>
              <th scope="col">Es recull</th>
              <th scope="col">Identificable</th>
              <th scope="col">Seguiment</th>
              <th scope="col">Es comparteix amb</th>
              <th scope="col">Finalitats</th>
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
                <td>{sharedWith[row.sharedWith ?? 'unknown']}</td>
                <td className="meta">
                  {(row.purposes ?? [])
                    .map((purpose) => label(purpose as ProcessingPurpose))
                    .join(', ') || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Seguiment i usos</h2>
      <dl>
        <Fact label="Seguiment entre aplicacions i llocs" fact={app.tracking?.crossAppTracking} />
        <Fact label="Identificadors publicitaris" fact={app.tracking?.advertisingIdentifiers} />
        <Fact label="Rastrejadors de tercers" fact={app.tracking?.thirdPartyTrackersPresent} />
        <Fact label="Publicitat dirigida" fact={app.dataUses?.targetedAdvertising} />
        <Fact label="Elaboració de perfils" fact={app.dataUses?.profiling} />
        <Fact label="Entrenament de models d’IA" fact={app.dataUses?.aiTraining} />
        <Fact label="Cessió a tercers" fact={app.sharing?.thirdPartySharing} />
        <Fact
          label={isPublic ? 'Cessions dins de l’administració' : 'Compartició dins del grup'}
          fact={app.sharing?.intraGroupSharing}
        />
        <Fact label="Venda a intermediaris de dades" fact={app.sharing?.dataBrokerSales} />
        <Fact label="Transferències internacionals" fact={app.sharing?.internationalTransfers} />
      </dl>

      <h2>Eliminació del compte</h2>
      <dl>
        <Fact label="Es pot eliminar" fact={deletion?.possible} />
        <Fact label="Es pot fer sol" fact={deletion?.selfService} />
      </dl>
      <div
        className="scroller"
        role="region"
        tabIndex={0}
        aria-label={`Com s’elimina el compte de ${app.name}`}
      >
        <table>
          <caption className="visually-hidden">{`Com s’elimina el compte de ${app.name}`}</caption>
          <tbody>
            <tr>
              <th scope="row">Dificultat</th>
              <td>{DIFFICULTY[deletion?.difficulty ?? 'unknown']}</td>
            </tr>
            <tr>
              <th scope="row">Espera</th>
              <td>
                {deletion?.waitingPeriodDays === null || deletion?.waitingPeriodDays === undefined
                  ? '—'
                  : `${deletion.waitingPeriodDays} dies`}
              </td>
            </tr>
            <tr>
              <th scope="row">Cal contactar amb suport</th>
              <td>{deletion?.requiresSupportContact ? 'Sí' : 'No'}</td>
            </tr>
            {deletion?.directUrl ? (
              <tr>
                <th scope="row">Enllaç directe</th>
                <td>
                  <a href={deletion.directUrl} target="_blank" rel="noreferrer">
                    {deletion.directUrl}
                    <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
                  </a>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
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
        <Fact
          label="Desactivar la publicitat personalitzada"
          fact={app.controls?.adPersonalizationOptOut}
        />
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
        <div
          className="scroller"
          role="region"
          tabIndex={0}
          aria-label={`Incidents registrats de ${app.name}, amb any, gravetat, sanció i estat`}
        >
          <table>
            <caption className="visually-hidden">{`Incidents registrats de ${app.name}, amb any, gravetat, sanció i estat`}</caption>
            <thead>
              <tr>
                <th scope="col">Any</th>
                <th scope="col">Incident</th>
                <th scope="col">Gravetat</th>
                <th scope="col">Sanció</th>
                <th scope="col">Estat</th>
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
        </div>
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
                  <span className="badge">
                    {COMPARABILITY[alternative.comparability ?? 'partial']}
                  </span>
                </h3>
                <p>{alternative.rationale}</p>
                {alternative.tradeOffs ? (
                  <p className="meta">A canvi: {alternative.tradeOffs}</p>
                ) : null}
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
