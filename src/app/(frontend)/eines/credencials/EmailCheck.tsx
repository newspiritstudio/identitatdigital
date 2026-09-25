'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

import { checkEmail, normaliseEmail, type XonOutcome } from '@/lib/breaches/xposedornot'
import { selectionStore, useLocalStore } from '@/lib/tools/localStore'
import { downloadText, useHydrated } from '@/lib/tools/useCopy'

import styles from './contrasenyes.module.css'
import {
  buildEmailActions,
  matchBreaches,
  summarise,
  type EmailAction,
  type MatchedBreach,
} from './match'
import type { CredIndex } from './types'

/**
 * Consulta de filtracions per adreça electrònica.
 *
 * La petició va del navegador a XposedOrNot directament: el nostre servidor no
 * veu mai l'adreça. El resultat es creua amb el directori aquí mateix i no es
 * desa enlloc; en sortir de la pàgina desapareix.
 */

const plain = new Intl.NumberFormat('ca-ES')
const compact = new Intl.NumberFormat('ca-ES', { notation: 'compact', maximumFractionDigits: 1 })

const PASSWORD_STATE_LABELS = {
  known: 'Contrasenyes en clar o amb un resum fàcil de trencar',
  hashed: 'Contrasenyes amb un resum robust',
  unknown: 'Contrasenyes, sense saber com es guardaven',
} as const

type Phase =
  | { kind: 'idle' }
  | { kind: 'checking'; email: string }
  | { kind: 'done'; email: string; outcome: XonOutcome; at: number }

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
    </a>
  )
}

/** Adreça amb la part local tapada, per a l'informe descarregat. */
const maskEmail = (email: string) => {
  const [local, domain] = email.split('@')
  return `${local.slice(0, 1)}${'•'.repeat(Math.max(local.length - 1, 2))}@${domain}`
}

function ActionItem({ item }: { item: EmailAction }) {
  return (
    <li className="card plan-action" data-action={item.id}>
      <p>
        <strong>{item.title}</strong>
      </p>
      <p>{item.detail}</p>
      {item.steps.length > 0 ? (
        <ol className="plan-action-steps">
          {item.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      ) : null}
      {item.because.length > 0 ? (
        <p className="meta">
          Per: {item.because.slice(0, 8).join(', ')}
          {item.because.length > 8 ? ` i ${item.because.length - 8} més` : ''}.
        </p>
      ) : null}
      {item.url || item.internalHref ? (
        <p className="plan-action-links">
          {item.url && item.urlLabel ? <ExternalLink href={item.url}>{item.urlLabel}</ExternalLink> : null}
          {item.url && item.internalHref ? ' · ' : null}
          {item.internalHref && item.internalLabel ? (
            item.internalHref.startsWith('#') ? (
              <a href={item.internalHref}>{item.internalLabel}</a>
            ) : (
              <Link href={item.internalHref}>{item.internalLabel}</Link>
            )
          ) : null}
        </p>
      ) : null}
      <details className="plan-action-why">
        <summary>Prioritat {item.priority}</summary>
        <ul>
          {item.factors.map((factor) => (
            <li key={factor.label}>
              {factor.points > 0 ? '+' : ''}
              {factor.points} {factor.label}
            </li>
          ))}
        </ul>
      </details>
    </li>
  )
}

function BreachItem({ entry, index, selected }: { entry: MatchedBreach; index: CredIndex; selected: Set<string> }) {
  const { breach } = entry
  return (
    <li className="card credentials-breach" data-passwords={entry.passwords ?? 'none'}>
      <p>
        <strong>{breach.id}</strong>
        {breach.domain ? <span className="meta"> · {breach.domain}</span> : null}
        {breach.year ? <span className="meta"> · {breach.year}</span> : null}
        {breach.records !== null ? (
          <span className="meta"> · {compact.format(breach.records)} comptes</span>
        ) : null}
        {!breach.verified ? <span className="badge">No verificada</span> : null}
      </p>
      {entry.passwords ? <p>{PASSWORD_STATE_LABELS[entry.passwords]}.</p> : null}
      {entry.dataTypes.length > 0 || entry.otherClasses.length > 0 ? (
        <p className="tags">
          {entry.dataTypes.map((slug) => (
            <span key={slug} className="badge" data-sensitivity={index.dataTypes[slug]?.sensitivity}>
              {index.dataTypes[slug]?.name ?? slug}
            </span>
          ))}
          {entry.otherClasses.map((name) => (
            <span key={name} className="badge" lang="en">
              {name}
            </span>
          ))}
        </p>
      ) : null}
      {entry.apps.length > 0 ? (
        <p>
          Al directori:{' '}
          {entry.apps.map((app, position) => (
            <span key={app.slug}>
              {position > 0 ? ', ' : ''}
              <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>
              {selected.has(app.slug) ? ' (la tens al diagnòstic)' : ''}
            </span>
          ))}
          {entry.apps.some((app) => app.match === 'domain') ? (
            <span className="meta"> — reconegut pel domini</span>
          ) : null}
        </p>
      ) : null}
      {breach.description ? (
        <details>
          <summary>Descripció de XposedOrNot</summary>
          <p lang="en">{breach.description}</p>
        </details>
      ) : null}
    </li>
  )
}

const reportMarkdown = (
  email: string,
  matched: MatchedBreach[],
  actions: EmailAction[],
  index: CredIndex,
  date: Date,
): string => {
  const lines = [
    '# Filtracions d’una adreça electrònica',
    '',
    `Adreça: ${maskEmail(email)} · consulta del ${date.toLocaleDateString('ca-ES', { dateStyle: 'long' })} a XposedOrNot (xposedornot.com), creuada amb el directori d’Identitat Digital. Aquest fitxer s’ha creat al teu navegador.`,
    '',
    '## Què has de fer',
    '',
  ]
  for (const item of actions) {
    lines.push(`- [ ] **${item.title}** (prioritat ${item.priority}). ${item.detail}`)
    for (const step of item.steps) lines.push(`  - ${step}`)
    if (item.url) lines.push(`  - ${item.urlLabel ?? 'Enllaç'}: ${item.url}`)
  }
  lines.push('', `## Filtracions (${matched.length})`, '')
  for (const entry of matched) {
    const data = [
      ...entry.dataTypes.map((slug) => index.dataTypes[slug]?.name ?? slug),
      ...entry.otherClasses,
    ].join(', ')
    const apps = entry.apps.map((app) => app.name).join(', ')
    lines.push(
      `- **${entry.breach.id}**${entry.breach.year ? ` (${entry.breach.year})` : ''}${entry.breach.domain ? ` · ${entry.breach.domain}` : ''}${entry.passwords ? ` · ${PASSWORD_STATE_LABELS[entry.passwords].toLowerCase()}` : ''}${apps ? ` · al directori: ${apps}` : ''}`,
    )
    if (data) lines.push(`  - Dades: ${data}`)
  }
  lines.push('', 'Font de les filtracions: XposedOrNot (https://xposedornot.com).', '')
  return lines.join('\n')
}

export default function EmailCheck({ index }: { index: CredIndex }) {
  const [input, setInput] = useState('')
  const [touched, setTouched] = useState(false)
  const [phase, setPhase] = useState<Phase>({ kind: 'idle' })
  const [now, setNow] = useState(() => Date.now())
  const [selection, setSelection] = useLocalStore(selectionStore)
  const hydrated = useHydrated()
  const controller = useRef<AbortController | null>(null)

  useEffect(() => () => controller.current?.abort(), [])

  const normalised = normaliseEmail(input)
  const showInvalid = touched && input.trim().length > 0 && normalised === null

  // Compte enrere del límit de peticions de XposedOrNot.
  const retryAt =
    phase.kind === 'done' && phase.outcome.status === 'rate-limited'
      ? phase.at + (phase.outcome.retryAfterSeconds ?? 60) * 1000
      : null
  const waitSeconds = retryAt !== null ? Math.max(0, Math.ceil((retryAt - now) / 1000)) : 0
  useEffect(() => {
    if (retryAt === null) return
    const timer = setInterval(() => {
      setNow(Date.now())
      if (Date.now() >= retryAt) clearInterval(timer)
    }, 1000)
    return () => clearInterval(timer)
  }, [retryAt])

  const submit = async (event: React.FormEvent) => {
    event.preventDefault()
    setTouched(true)
    if (normalised === null || phase.kind === 'checking' || waitSeconds > 0) return
    controller.current?.abort()
    const ctrl = new AbortController()
    controller.current = ctrl
    setPhase({ kind: 'checking', email: normalised })
    const outcome = await checkEmail(normalised, { signal: ctrl.signal })
    if (ctrl.signal.aborted) return
    const at = Date.now()
    setNow(at)
    setPhase({ kind: 'done', email: normalised, outcome, at })
  }

  const forget = () => {
    controller.current?.abort()
    setPhase({ kind: 'idle' })
    setInput('')
    setTouched(false)
  }

  // Només es mostra el resultat de l'adreça que hi ha escrita ara mateix.
  const result = phase.kind === 'done' && phase.email === normalised ? phase : null
  const found = result?.outcome.status === 'found' ? result.outcome : null

  const matched = useMemo(() => (found ? matchBreaches(index, found.breaches) : []), [found, index])
  const selected = useMemo(() => new Set(hydrated ? selection : []), [hydrated, selection])
  const summary = useMemo(
    () => (found ? summarise(index, matched, hydrated ? selection : []) : null),
    [found, index, matched, hydrated, selection],
  )
  const actions = useMemo(
    () => (found && result ? buildEmailActions(index, matched, new Date(result.at).getFullYear()) : []),
    [found, index, matched, result],
  )
  const missingFromDiagnostic = summary ? summary.directoryApps.filter((slug) => !selected.has(slug)) : []
  const appName = (slug: string) => index.apps.find((app) => app.slug === slug)?.name ?? slug
  const maxPerYear = summary ? Math.max(1, ...summary.byYear.map((entry) => entry.count)) : 1

  return (
    <section className={`card ${styles.tool} credentials-email`} aria-labelledby="correu">
      <h2 id="correu">En quines filtracions surt la teva adreça</h2>
      <p>
        Escriu la teva adreça de correu i sabràs en quines filtracions conegudes apareix, què s’hi va
        exposar, quins d’aquests serveis són al directori i què has de fer, per ordre.
      </p>

      <form onSubmit={submit} noValidate>
        <div className={styles.controls}>
          <label className={styles.field} htmlFor="correu-adreca">
            <span>Adreça electrònica</span>
            <input
              id="correu-adreca"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={input}
              maxLength={254}
              aria-invalid={showInvalid}
              aria-describedby="correu-avis correu-error"
              onChange={(event) => setInput(event.target.value)}
              onBlur={() => setTouched(true)}
            />
          </label>
        </div>
        <p id="correu-error" role="alert" className={showInvalid ? styles.note : 'visually-hidden'}>
          {showInvalid ? 'Això no sembla una adreça electrònica (nom@domini.cat).' : ''}
        </p>
        <p id="correu-avis" className="meta">
          En prémer el botó, el teu navegador envia l’adreça a{' '}
          <ExternalLink href="https://xposedornot.com">XposedOrNot</ExternalLink>, un servei obert
          de consulta de filtracions, i a ningú més: la petició no passa pel nostre servidor.
          XposedOrNot declara que no desa les adreces consultades. Nosaltres tampoc: el resultat
          desapareix quan tanques la pàgina.
        </p>
        <div className={styles.actions}>
          <button
            type="submit"
            className={styles.buttonPrimary}
            disabled={phase.kind === 'checking' || waitSeconds > 0 || input.trim().length === 0}
          >
            {phase.kind === 'checking'
              ? 'Consultant…'
              : waitSeconds > 0
                ? `Espera ${waitSeconds} s`
                : 'Consulta les filtracions'}
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={forget}
            disabled={phase.kind === 'idle' && input.length === 0}
          >
            Oblida l’adreça i el resultat
          </button>
        </div>
      </form>

      <div aria-live="polite" aria-busy={phase.kind === 'checking'} className="credentials-email-result">
        {phase.kind === 'checking' ? <p className={styles.note}>Consultant XposedOrNot…</p> : null}

        {result?.outcome.status === 'invalid' ? (
          <p className={`${styles.result} ${styles.resultUnknown}`}>
            XposedOrNot no reconeix aquest text com una adreça electrònica. Revisa-la.
          </p>
        ) : null}

        {result?.outcome.status === 'rate-limited' ? (
          <div className={`${styles.result} ${styles.resultUnknown}`}>
            <p>
              <strong>XposedOrNot demana esperar una mica.</strong> Limita les consultes a unes
              quantes per hora des de cada connexió, perquè el servei sigui gratuït per a tothom.
              {waitSeconds > 0 ? ` Ho podràs tornar a provar d’aquí a ${waitSeconds} segons.` : ' Ja ho pots tornar a provar.'}
            </p>
            <p className={styles.note}>
              Mentrestant, pots fer l’auditoria de contrasenyes d’aquí sota, que no hi depèn.
            </p>
          </div>
        ) : null}

        {result?.outcome.status === 'unavailable' ? (
          <div className={`${styles.result} ${styles.resultUnknown}`}>
            <p>
              <strong>No s’ha pogut fer la consulta.</strong> {result.outcome.reason}
            </p>
            <p className={styles.note}>
              No sabem si l’adreça surt en cap filtració: no ho hem pogut mirar. Pots tornar-ho a
              provar, o consultar-la directament a{' '}
              <ExternalLink href="https://haveibeenpwned.com/">Have I Been Pwned</ExternalLink>.
            </p>
          </div>
        ) : null}

        {result?.outcome.status === 'none' ? (
          <div className={`${styles.result} ${styles.resultOk}`}>
            <p>
              <strong>Aquesta adreça no surt a cap filtració del catàleg de XposedOrNot.</strong>
            </p>
            <p className={styles.note}>
              Vol dir que no és a les filtracions que aquest catàleg ha recollit, no que no s’hagi
              filtrat mai: moltes no es fan públiques. Les contrasenyes, comprova-les igualment a
              l’auditoria d’aquí sota.
            </p>
          </div>
        ) : null}

        {found && summary ? (
          <>
            <dl className="credentials-email-headline">
              <div>
                <dt>Filtracions</dt>
                <dd className={styles.count}>{summary.total}</dd>
              </div>
              <div>
                <dt>Amb contrasenyes</dt>
                <dd className={styles.count}>{summary.withPasswords}</dd>
              </div>
              <div>
                <dt>Contrasenyes en clar o fàcils de trencar</dt>
                <dd className={styles.count}>{summary.passwordsKnown}</dd>
              </div>
              <div>
                <dt>Serveis del directori</dt>
                <dd className={styles.count}>{summary.directoryApps.length}</dd>
              </div>
              {summary.firstYear !== null ? (
                <div>
                  <dt>Període</dt>
                  <dd>
                    {summary.firstYear === summary.lastYear
                      ? summary.firstYear
                      : `${summary.firstYear}–${summary.lastYear}`}
                  </dd>
                </div>
              ) : null}
            </dl>

            <h3 id="correu-pla">Què has de fer, per ordre</h3>
            <ol className="plain plan-actions">
              {actions.map((item) => (
                <ActionItem key={item.id} item={item} />
              ))}
            </ol>

            {summary.directoryApps.length > 0 ? (
              <div className="credentials-email-directory">
                <h3 id="correu-directori">Els serveis filtrats que són al directori</h3>
                <p>
                  {summary.directoryApps.map(appName).join(', ')}.{' '}
                  {summary.selectedApps.length > 0
                    ? `${summary.selectedApps.length === 1 ? 'Un ja és' : `${summary.selectedApps.length} ja són`} a la tria del teu diagnòstic.`
                    : ''}
                </p>
                {hydrated && missingFromDiagnostic.length > 0 ? (
                  <p>
                    <button
                      type="button"
                      onClick={() =>
                        setSelection((current) => [...new Set([...current, ...missingFromDiagnostic])])
                      }
                    >
                      Afegeix-ne {missingFromDiagnostic.length === 1 ? 'el que falta' : `els ${missingFromDiagnostic.length} que falten`} al diagnòstic
                    </button>{' '}
                    <span className="meta">
                      Es desa només en aquest dispositiu. El diagnòstic et farà el pla complet de
                      cada servei: segon factor, publicitat, entrenament d’IA, esborrar el compte…
                    </span>
                  </p>
                ) : null}
                <p>
                  <Link href="/eines/diagnostic">Obre el diagnòstic</Link>
                </p>
              </div>
            ) : null}

            {summary.dataTypes.length > 0 || summary.otherClasses.length > 0 ? (
              <>
                <h3 id="correu-dades">Què s’ha exposat</h3>
                <ul className="plain credentials-email-data">
                  {summary.dataTypes.map((type) => (
                    <li key={type.slug} data-sensitivity={type.sensitivity} data-special={type.special}>
                      <strong>{type.name}</strong>: a {type.count} de {summary.total}{' '}
                      {summary.total === 1 ? 'filtració' : 'filtracions'}
                      {type.special ? ' · categoria especial (article 9 del RGPD)' : ''}
                    </li>
                  ))}
                  {summary.otherClasses.map((other) => (
                    <li key={other.name} data-sensitivity="unknown">
                      <span lang="en">{other.name}</span>: a {other.count}{' '}
                      <span className="meta">(categoria de la font sense equivalent al nostre vocabulari)</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {summary.byYear.length > 1 ? (
              <>
                <h3 id="correu-cronologia">Quan</h3>
                <table className="credentials-email-timeline">
                  <caption className="visually-hidden">Filtracions per any</caption>
                  <thead>
                    <tr>
                      <th scope="col">Any</th>
                      <th scope="col">Filtracions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summary.byYear.map((entry) => (
                      <tr key={entry.year} data-count={entry.count} style={{ ['--share' as string]: entry.count / maxPerYear }}>
                        <th scope="row">{entry.year}</th>
                        <td>{entry.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : null}

            <h3 id="correu-filtracions">Les filtracions, una per una</h3>
            <ol className="plain credentials-breaches">
              {matched.map((entry) => (
                <BreachItem key={entry.breach.id} entry={entry} index={index} selected={selected} />
              ))}
            </ol>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.button}
                onClick={() =>
                  downloadText(
                    `filtracions-${new Date(result!.at).toISOString().slice(0, 10)}.md`,
                    reportMarkdown(result!.email, matched, actions, index, new Date(result!.at)),
                  )
                }
              >
                Descarrega el resultat i el pla
              </button>
              <span className="meta">
                L’informe tapa l’adreça (només en deixa la primera lletra i el domini).
              </span>
            </div>

            <p className="meta">
              Dades de les filtracions:{' '}
              <ExternalLink href="https://xposedornot.com">XposedOrNot</ExternalLink>, consultat en
              directe. El lligam amb les fitxes és nostre: pel nom de la filtració al catàleg de Have
              I Been Pwned o, si no n’hi ha, pel domini del servei. Comptes afectats:{' '}
              {plain.format(
                matched.reduce((total, entry) => total + (entry.breach.records ?? 0), 0),
              )}{' '}
              en total entre totes les filtracions.
            </p>
          </>
        ) : null}
      </div>
    </section>
  )
}
