'use client'

import Link from 'next/link'

import styles from './exposicio.module.css'
import { appIncidents, SIGNAL_KEYS, SIGNAL_LABELS, type AppRisk, type BreachSummary, type SignalState } from './plan'
import { INCIDENT_TYPE_LABELS, SEVERITY_LABELS, type AppLite, type Snapshot } from './types'

/**
 * Mapa de risc i filtracions dels serveis triats.
 *
 * El mapa no suma res en una nota: cada casella és un fet documentat (o un
 * desconegut dit com a tal), i la columna de recompte només diu quants dels
 * vuit senyals estan encesos.
 */

const plain = new Intl.NumberFormat('ca-ES')

const STATE_MARKS: Record<SignalState, string> = { on: '●', off: '○', unknown: '?' }
const STATE_NAMES: Record<SignalState, string> = {
  on: 'senyal present',
  off: 'senyal absent',
  unknown: 'no documentat',
}

export function RiskMap({ risks }: { risks: AppRisk[] }) {
  return (
    <section aria-labelledby="mapa" className="diagnostic-risk">
      <h2 id="mapa">Mapa de risc</h2>
      <p>
        Vuit senyals documentats per a cada servei que has triat. Un punt ple vol dir que la fitxa
        documenta el senyal; un de buit, que documenta que no hi és; un interrogant, que no ho sabem.
        Els serveis amb més senyals encesos van primer. No hi ha cap nota global: els senyals no són
        comparables entre ells i sumar-los en una xifra amagaria quin pesa més per a tu.
      </p>
      <div className={styles.wide}>
        <table className="risk-map">
          <caption className="visually-hidden">
            Senyals de risc documentats per a cada servei triat
          </caption>
          <thead>
            <tr>
              <th scope="col">Servei</th>
              {SIGNAL_KEYS.map((key) => (
                <th key={key} scope="col" data-signal={key}>
                  {SIGNAL_LABELS[key]}
                </th>
              ))}
              <th scope="col">Senyals</th>
            </tr>
          </thead>
          <tbody>
            {risks.map((risk) => (
              <tr key={risk.app.slug} data-signals={risk.count}>
                <th scope="row">
                  <Link href={`/aplicacions/${risk.app.slug}`}>{risk.app.name}</Link>
                </th>
                {risk.signals.map((signal) => (
                  <td
                    key={signal.key}
                    data-signal={signal.key}
                    data-state={signal.state}
                    className={signal.state === 'unknown' ? 'unknown' : undefined}
                  >
                    <span aria-hidden="true">{STATE_MARKS[signal.state]}</span>{' '}
                    <span className="visually-hidden">{STATE_NAMES[signal.state]}: </span>
                    <span className="meta">{signal.text}</span>
                  </td>
                ))}
                <td className={styles.numeric}>
                  {risk.count} de {SIGNAL_KEYS.length}
                  {risk.unknown > 0 ? <div className="unknown">{risk.unknown} sense dada</div> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export function BreachesSection({
  summary,
  apps,
  snapshot,
}: {
  summary: BreachSummary
  apps: AppLite[]
  snapshot: Snapshot
}) {
  const total = apps.length
  const incidents = apps
    .map((app) => ({ app, incidents: appIncidents(app, snapshot) }))
    .filter((entry) => entry.incidents.length > 0)

  return (
    <section aria-labelledby="filtracions" className="diagnostic-breaches">
      <h2 id="filtracions">Filtracions i incidents dels teus serveis</h2>
      {snapshot.breachCatalogSize === 0 ? (
        <p className="unknown">
          El catàleg de filtracions encara no s’ha importat, de manera que no en podem dir res.
        </p>
      ) : summary.items.length === 0 ? (
        <p>
          Cap dels {total} serveis que has triat no apareix a les{' '}
          {plain.format(snapshot.breachCatalogSize)} filtracions del catàleg de Have I Been Pwned.
          Vol dir que no hi ha cap filtració pública verificada d’aquests serveis al catàleg, no que
          no n’hagin patit cap.
        </p>
      ) : (
        <>
          <p role="note">
            <strong>{summary.items.length}</strong>{' '}
            {summary.items.length === 1 ? 'filtració coneguda afecta' : 'filtracions conegudes afecten'}{' '}
            serveis que fas servir
            {summary.firstYear !== null && summary.lastYear !== null
              ? summary.firstYear === summary.lastYear
                ? `, el ${summary.firstYear}`
                : `, entre el ${summary.firstYear} i el ${summary.lastYear}`
              : ''}
            . Sumen {plain.format(summary.accounts)} comptes exposats
            {summary.withPasswords > 0
              ? `, i ${summary.withPasswords} ${summary.withPasswords === 1 ? 'va exposar' : 'van exposar'} contrasenyes`
              : ''}
            . Que un servei s’hagi filtrat no vol dir que hi fossis tu: per saber-ho, fes la{' '}
            <Link href="/eines/credencials">comprovació del teu correu</Link>.
          </p>

          {summary.dataTypes.length > 0 ? (
            <>
              <h3>Quines dades van quedar exposades</h3>
              <p className={styles.tags}>
                {summary.dataTypes.map(({ type, breaches }) => (
                  <span key={type.slug} className="badge" data-sensitivity={type.sensitivity}>
                    {type.name}
                    {breaches > 1 ? ` ×${breaches}` : ''}
                  </span>
                ))}
              </p>
            </>
          ) : null}

          <h3>Una per una</h3>
          <ol className="plain breach-list">
            {summary.items.map(({ breach, apps: affected }) => (
              <li key={breach.name} className="card" data-passwords={breach.passwords ? 'true' : 'false'}>
                <strong>{breach.title}</strong>
                {breach.date ? <span className="meta"> · {breach.date.slice(0, 4)}</span> : null}
                {breach.pwnCount !== null ? (
                  <span className="meta"> · {plain.format(breach.pwnCount)} comptes</span>
                ) : null}
                {breach.passwords ? (
                  <>
                    {' '}
                    <span className="badge">contrasenyes</span>
                  </>
                ) : null}
                {!breach.verified ? (
                  <>
                    {' '}
                    <span className="badge">no verificada</span>
                  </>
                ) : null}
                <div className="meta">
                  Servei:{' '}
                  {affected.map(({ app, match }, index) => (
                    <span key={app.slug}>
                      {index > 0 ? ', ' : ''}
                      <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>
                      {match === 'domain' ? ` (per domini: ${breach.domain ?? ''})` : ''}
                    </span>
                  ))}
                </div>
                {breach.dataTypes.length > 0 || breach.otherClasses.length > 0 ? (
                  <div className="meta">
                    Dades:{' '}
                    {[
                      ...breach.dataTypes.map((index) => snapshot.dataTypes[index]?.name ?? ''),
                      ...breach.otherClasses,
                    ]
                      .filter(Boolean)
                      .join(', ')}
                    .
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="meta">
            Font: catàleg públic de{' '}
            <a href="https://haveibeenpwned.com/PwnedWebsites" target="_blank" rel="noopener noreferrer">
              Have I Been Pwned
              <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
            </a>
            , sota llicència CC BY 4.0. «Per domini» vol dir que la filtració és del mateix domini web
            que el servei, però la redacció encara no l’hi ha assignat a mà.
          </p>
        </>
      )}

      <h3>Incidents i sancions documentats</h3>
      {incidents.length === 0 ? (
        <p>
          Cap dels serveis triats no té incidents documentats a les fitxes. Només hi consten els que
          la redacció ha contrastat.
        </p>
      ) : (
        <ul className="plain incident-list">
          {incidents.map(({ app, incidents: list }) => (
            <li key={app.slug}>
              <strong>
                <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>
              </strong>
              <ul>
                {list.map((incident) => (
                  <li key={incident.slug || incident.title} data-severity={incident.severity}>
                    {incident.title}{' '}
                    <span className="meta">
                      ({INCIDENT_TYPE_LABELS[incident.type] ?? incident.type}, gravetat{' '}
                      {SEVERITY_LABELS[incident.severity]}
                      {incident.date ? `, ${incident.date.slice(0, 4)}` : ''}
                      {incident.fine ? `, ${incident.fine}` : ''})
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
