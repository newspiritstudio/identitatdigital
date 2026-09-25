'use client'

import { useImperativeHandle, useMemo, useRef, useState } from 'react'

import {
  findSimilarities,
  mapWithLimit,
  similarityGroups,
  type AuditEntry,
  type Similarity,
} from '@/lib/passwords/audit'
import { checkPassword, type PwnedOutcome } from '@/lib/passwords/pwned'
import { evaluateTypedPassword } from '@/lib/passwords/strength'

import styles from './contrasenyes.module.css'

/**
 * Auditoria de contrasenyes: les que fas servir, totes alhora.
 *
 * Tres preguntes per cada una: si ja és a les filtracions (k-anonimat contra
 * Have I Been Pwned, cinc caràcters del resum per contrasenya), si la repeteixes
 * o en fas variants, i si té algun patró que els atacs proven primer. Les dues
 * últimes es responen sense xarxa.
 *
 * Res no es desa: les contrasenyes viuen a l'estat del component i desapareixen
 * en tancar la pestanya o en prémer «Buida-ho tot».
 */

const MAX_ENTRIES = 20
const INITIAL_ROWS = 3
const CONCURRENCY = 3

const plain = new Intl.NumberFormat('ca-ES')

let counter = 0
const newEntry = (value = '', label = ''): AuditEntry => {
  counter += 1
  return { id: `c${counter}`, label, value }
}

type Verdict = 'pwned' | 'reused' | 'weak' | 'ok' | 'unchecked'

interface EntryResult {
  entry: AuditEntry
  outcome: PwnedOutcome
  observations: string[]
  similar: Similarity[]
  verdict: Verdict
}

interface AuditRun {
  /** Còpia de la llista en el moment d'auditar, per no barrejar resultats aliens. */
  audited: AuditEntry[]
  phase: 'checking' | 'done'
  outcomes: Map<string, PwnedOutcome>
  progress: number
  total: number
}

const VERDICT_LABELS: Record<Verdict, string> = {
  pwned: 'Filtrada: canvia-la',
  reused: 'Repetida o variant d’una altra',
  weak: 'Amb patrons que els atacs proven primer',
  ok: 'Cap problema detectat',
  unchecked: 'No s’ha pogut comprovar',
}

const VERDICT_ORDER: Verdict[] = ['pwned', 'reused', 'weak', 'unchecked', 'ok']

/** Etiquetes del resum, on els recomptes se sumen per separat. */
const COUNT_LABELS: Record<Verdict, string> = {
  pwned: 'Filtrades',
  reused: 'Repetides o variants d’una altra',
  weak: 'Amb patrons que els atacs proven primer',
  ok: 'Sense cap problema detectat',
  unchecked: 'No comprovades',
}

export interface PasswordAuditHandle {
  /** Afegeix una contrasenya a la llista (des del generador) i hi porta el focus. */
  add: (value: string, label: string) => void
}

export default function PasswordAudit({ ref }: { ref?: React.Ref<PasswordAuditHandle> }) {
  // Les files inicials tenen identificadors fixos perquè coincideixin amb els
  // del servidor; les que s'afegeixen després ja només existeixen al navegador.
  const [entries, setEntries] = useState<AuditEntry[]>(() =>
    Array.from({ length: INITIAL_ROWS }, (_, position) => ({ id: `inicial-${position}`, label: '', value: '' })),
  )
  const [reveal, setReveal] = useState(false)
  const [run, setRun] = useState<AuditRun | null>(null)
  const runId = useRef(0)

  useImperativeHandle(ref, () => ({
    add(value, label) {
      let targetId = ''
      setEntries((current) => {
        const empty = current.find((entry) => entry.value.length === 0)
        if (empty) {
          targetId = empty.id
          return current.map((entry) => (entry.id === empty.id ? { ...entry, value, label: entry.label || label } : entry))
        }
        if (current.length >= MAX_ENTRIES) return current
        const created = newEntry(value, label)
        targetId = created.id
        return [...current, created]
      })
      requestAnimationFrame(() => {
        const input = document.getElementById(`auditoria-valor-${targetId}`)
        input?.scrollIntoView({ block: 'center', behavior: 'smooth' })
        input?.focus()
      })
    },
  }))

  const filled = entries.filter((entry) => entry.value.length > 0)

  /*
   * El resultat només es mostra si la llista és exactament la que s'ha
   * auditat. Si algú hi toca res, el resultat anterior desapareix: un «cap
   * problema» al costat d'una contrasenya diferent de la comprovada seria
   * l'error més greu que pot fer aquesta pantalla.
   */
  const current =
    run &&
    run.audited.length === filled.length &&
    run.audited.every((entry, index) => entry.id === filled[index]?.id && entry.value === filled[index]?.value)
      ? run
      : null

  const results = useMemo((): EntryResult[] | null => {
    if (!current || current.phase !== 'done') return null
    const similarities = findSimilarities(current.audited)
    return current.audited.map((entry) => {
      const outcome = current.outcomes.get(entry.value) ?? { status: 'unavailable', reason: 'Sense resposta.' }
      const observations = evaluateTypedPassword(entry.value).observations
      const similar = similarities.filter((pair) => pair.a === entry.id || pair.b === entry.id)
      const verdict: Verdict =
        outcome.status === 'pwned'
          ? 'pwned'
          : similar.length > 0
            ? 'reused'
            : observations.length > 0
              ? 'weak'
              : outcome.status === 'unavailable'
                ? 'unchecked'
                : 'ok'
      return { entry, outcome, observations, similar, verdict }
    })
  }, [current])

  const groups = useMemo(() => {
    if (!current || current.phase !== 'done') return []
    return similarityGroups(current.audited, findSimilarities(current.audited))
  }, [current])

  const nameOf = (entry: AuditEntry | undefined, position: number) =>
    entry?.label.trim() ? entry.label.trim() : `Contrasenya ${position + 1}`
  const positionOf = (id: string) => entries.findIndex((entry) => entry.id === id)
  const labelFor = (id: string) => nameOf(entries.find((entry) => entry.id === id), positionOf(id))

  const update = (id: string, patch: Partial<AuditEntry>) =>
    setEntries((list) => list.map((entry) => (entry.id === id ? { ...entry, ...patch } : entry)))

  const audit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (filled.length === 0) return
    runId.current += 1
    const id = runId.current
    const audited = filled.map((entry) => ({ ...entry }))
    const distinct = [...new Set(audited.map((entry) => entry.value))]
    const outcomes = new Map<string, PwnedOutcome>()
    setRun({ audited, phase: 'checking', outcomes, progress: 0, total: distinct.length })
    let done = 0
    await mapWithLimit(distinct, CONCURRENCY, async (value) => {
      const outcome = await checkPassword(value)
      outcomes.set(value, outcome)
      done += 1
      if (runId.current === id) setRun((previous) => (previous ? { ...previous, progress: done } : previous))
    })
    if (runId.current !== id) return
    setRun({ audited, phase: 'done', outcomes: new Map(outcomes), progress: done, total: distinct.length })
  }

  const clearAll = () => {
    runId.current += 1
    setRun(null)
    setEntries(Array.from({ length: INITIAL_ROWS }, () => newEntry()))
  }

  // Els recomptes no són exclusius: una contrasenya pot estar filtrada i, a
  // més, repetida. El veredicte de cada una és el problema més greu.
  const counts = useMemo(() => {
    const out: Record<Verdict, number> = { pwned: 0, reused: 0, weak: 0, ok: 0, unchecked: 0 }
    for (const result of results ?? []) {
      if (result.outcome.status === 'pwned') out.pwned += 1
      if (result.outcome.status === 'unavailable') out.unchecked += 1
      if (result.similar.length > 0) out.reused += 1
      if (result.observations.length > 0) out.weak += 1
      if (result.verdict === 'ok') out.ok += 1
    }
    return out
  }, [results])

  // L'ordre de la llista auditada és el de les files, i `sort` és estable.
  const sorted = useMemo(
    () =>
      results
        ? [...results].sort((a, b) => VERDICT_ORDER.indexOf(a.verdict) - VERDICT_ORDER.indexOf(b.verdict))
        : [],
    [results],
  )

  return (
    <section className={`card ${styles.tool} credentials-audit`} aria-labelledby="auditoria">
      <h2 id="auditoria">Audita les contrasenyes que fas servir</h2>
      <p>
        Escriu les contrasenyes dels serveis que més t’importen (el correu, el banc, les xarxes) i,
        si vols, a quin servei és cadascuna. L’eina mira si ja són a les filtracions, si en repeteixes
        alguna o en fas variants (canviar-ne el número del final no compta com una de nova) i si
        segueixen patrons que els atacs proven primer. Cap contrasenya surt del dispositiu ni es desa.
      </p>

      <form onSubmit={audit}>
        <ol className="plain credentials-audit-list">
          {entries.map((entry, position) => (
            <li key={entry.id} className={styles.controls} data-filled={entry.value ? 'true' : 'false'}>
              <label className={styles.field} htmlFor={`auditoria-servei-${entry.id}`}>
                <span>Servei (opcional)</span>
                <input
                  id={`auditoria-servei-${entry.id}`}
                  type="text"
                  value={entry.label}
                  maxLength={60}
                  placeholder={`Contrasenya ${position + 1}`}
                  autoComplete="off"
                  onChange={(event) => update(entry.id, { label: event.target.value })}
                />
              </label>
              <label className={styles.field} htmlFor={`auditoria-valor-${entry.id}`}>
                <span>Contrasenya</span>
                <input
                  id={`auditoria-valor-${entry.id}`}
                  type={reveal ? 'text' : 'password'}
                  value={entry.value}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  data-1p-ignore
                  data-lpignore="true"
                  onChange={(event) => update(entry.id, { value: event.target.value })}
                />
              </label>
              <button
                type="button"
                className={styles.button}
                onClick={() =>
                  setEntries((list) => (list.length > 1 ? list.filter((item) => item.id !== entry.id) : [newEntry()]))
                }
                aria-label={`Treu ${nameOf(entry, position)}`}
              >
                Treu
              </button>
            </li>
          ))}
        </ol>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.button}
            onClick={() => setEntries((list) => (list.length < MAX_ENTRIES ? [...list, newEntry()] : list))}
            disabled={entries.length >= MAX_ENTRIES}
          >
            Afegeix-ne una altra
          </button>
          <label className={styles.check}>
            <input type="checkbox" checked={reveal} onChange={(event) => setReveal(event.target.checked)} />
            Mostra el que escric
          </label>
          {entries.length >= MAX_ENTRIES ? (
            <span className="meta">Màxim {MAX_ENTRIES} alhora.</span>
          ) : null}
        </div>

        <div className={styles.actions}>
          <button
            type="submit"
            className={styles.buttonPrimary}
            disabled={filled.length === 0 || current?.phase === 'checking'}
          >
            {current?.phase === 'checking'
              ? `Comprovant… (${current.progress} de ${current.total})`
              : filled.length > 1
                ? `Audita les ${filled.length} contrasenyes`
                : 'Audita la contrasenya'}
          </button>
          <button type="button" className={styles.button} onClick={clearAll} disabled={filled.length === 0 && !run}>
            Buida-ho tot
          </button>
        </div>
      </form>

      <div aria-live="polite" className="credentials-audit-results">
        {run && !current && filled.length > 0 ? (
          <p className={styles.note}>Has canviat la llista des de l’última auditoria. Torna-la a passar.</p>
        ) : null}

        {current?.phase === 'checking' ? (
          <p className={styles.note}>
            Consultant els calaixos de resums ({current.progress} de {current.total})…
          </p>
        ) : null}

        {results ? (
          <>
            <dl className="credentials-audit-summary">
              {(['pwned', 'reused', 'weak', 'unchecked', 'ok'] as Verdict[]).map((verdict) =>
                counts[verdict] > 0 || verdict === 'pwned' || verdict === 'reused' ? (
                  <div key={verdict} data-verdict={verdict}>
                    <dt>{COUNT_LABELS[verdict]}</dt>
                    <dd className={styles.count}>{counts[verdict]}</dd>
                  </div>
                ) : null,
              )}
            </dl>

            <p className="meta">
              De {results.length} {results.length === 1 ? 'contrasenya' : 'contrasenyes'}. Una mateixa
              pot tenir més d’un problema.
            </p>

            {counts.pwned === 0 && counts.reused === 0 && counts.weak === 0 && counts.unchecked === 0 ? (
              <p className={`${styles.result} ${styles.resultOk}`}>
                <strong>Cap de les {results.length} té problemes detectables.</strong> No surten a
                l’índex de filtracions, no se’n repeteix cap i no segueixen els patrons típics. No
                vol dir que siguin inexpugnables, sinó que no tenen cap dels defectes que es poden
                veure des de fora.
              </p>
            ) : null}

            {groups.length > 0 ? (
              <div className={`${styles.result} ${styles.resultAlert}`}>
                <p>
                  <strong>
                    {groups.length === 1
                      ? 'Hi ha un grup de contrasenyes que, a efectes pràctics, són la mateixa:'
                      : `Hi ha ${groups.length} grups de contrasenyes que, a efectes pràctics, són la mateixa:`}
                  </strong>
                </p>
                <ul>
                  {groups.map((group) => (
                    <li key={group.join('-')}>{group.map(labelFor).join(', ')}</li>
                  ))}
                </ul>
                <p className={styles.note}>
                  Si una d’aquestes es filtra, qui ataca prova la resta amb les mateixes variacions i
                  entra a tots aquests serveis alhora. Fes-ne una de diferent i aleatòria per a cada
                  un; el generador d’aquí sota les fa.
                </p>
              </div>
            ) : null}

            <ol className="plain credentials-audit-verdicts">
              {sorted.map((result) => (
                <li key={result.entry.id} className="card" data-verdict={result.verdict}>
                  <p>
                    <strong>{labelFor(result.entry.id)}</strong>: {VERDICT_LABELS[result.verdict]}
                  </p>
                  {result.outcome.status === 'pwned' ? (
                    <p>
                      Consta <span className={styles.count}>{plain.format(result.outcome.count)}</span>{' '}
                      {result.outcome.count === 1 ? 'vegada' : 'vegades'} a l’índex de Have I Been
                      Pwned. Ja és a les llistes que es proven automàticament contra qualsevol servei.
                    </p>
                  ) : result.outcome.status === 'absent' ? (
                    <p className="meta">No apareix a l’índex de filtracions de Have I Been Pwned.</p>
                  ) : (
                    <p className="unknown">
                      No s’ha pogut mirar si està filtrada: {result.outcome.reason} No saber-ho no és
                      el mateix que estar neta.
                    </p>
                  )}
                  {result.similar.length > 0 ? (
                    <ul>
                      {result.similar.map((pair) => (
                        <li key={`${pair.a}-${pair.b}`}>
                          Amb {labelFor(pair.a === result.entry.id ? pair.b : pair.a)}: {pair.reason}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {result.observations.length > 0 ? (
                    <ul className="plain">
                      {result.observations.map((observation) => (
                        <li key={observation} className={styles.note}>
                          — {observation}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ol>

            <p className="meta">
              Per canviar-les amb criteri: primer les filtrades, després les repetides, i començant
              pel correu, que és on arriben tots els enllaços de «he oblidat la contrasenya». De la
              força d’una contrasenya pensada per una persona no en donem cap xifra: l’entropia
              depèn de com s’ha triat, no de quin aspecte té.
            </p>
          </>
        ) : null}
      </div>
    </section>
  )
}
