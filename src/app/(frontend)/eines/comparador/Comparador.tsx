'use client'

import Link from 'next/link'
import { useCallback, useEffect, useId, useMemo, useState } from 'react'

import styles from './comparador.module.css'
import {
  MAX_APPS,
  SLOT_PARAMS,
  type AppSnapshot,
  type CategorySnapshot,
  type CellState,
  type ComparatorSnapshot,
  type DimensionSnapshot,
  type IndicatorCell,
  type InitialSelection,
  type SourceLink,
} from './types'

/**
 * Interacció del comparador.
 *
 * Rep la instantània sencera i no torna a parlar mai amb el servidor. Tota la
 * feina d'aquest component és triar què s'ensenya d'una estructura que ja ve
 * calculada: quines fitxes, quins indicadors i quan dues fitxes diuen coses
 * diferents.
 */

/* ─────────────────────────── utilitats visuals ───────────────────────────── */

/**
 * Mateixos talls que la resta del lloc (`scoreClass` a `lib.tsx`). Es repeteix
 * aquí perquè aquell mòdul obre el client de Payload i no pot travessar la
 * frontera cap al navegador; el que es comparteix són les classes de
 * `styles.css`, no el codi.
 */
const scoreClass = (value: number | null): string => {
  if (value === null) return 'unknown'
  if (value >= 70) return 'score score-good'
  if (value >= 45) return 'score score-mid'
  return 'score score-bad'
}

function ScoreValue({ value }: { value: number | null }) {
  if (value === null) return <span className="unknown">Sense dada</span>
  return (
    <span className={styles.scoreBlock}>
      <span className={scoreClass(value)}>{value}</span>
      <span className="meta"> sobre 100</span>
    </span>
  )
}

/**
 * Marques de cada estat.
 *
 * El text de la casella ja diu què s'afirma; aquestes marques hi afegeixen una
 * segona senyal que no depèn del color, perquè «documentat que no» i «no
 * documentat» s'han de poder distingir en blanc i negre, amb un daltonisme o
 * amb el full imprès.
 */
const STATE_MARKS: Record<CellState, string> = {
  yes: '✓',
  partial: '≈',
  no: '✗',
  unknown: '?',
  na: '–',
  graded: '•',
}

const STATE_CLASSES: Record<CellState, string> = {
  yes: styles.yes,
  partial: styles.partial,
  no: styles.no,
  unknown: `unknown ${styles.unknownCell}`,
  na: styles.na,
  graded: styles.graded,
}

const STATE_NAMES: Record<CellState, string> = {
  yes: 'documentat que sí',
  partial: 'documentat parcialment',
  no: 'documentat que no',
  unknown: 'no documentat',
  na: 'no aplica',
  graded: 'valor documentat',
}

/* ───────────────────────────── casella ───────────────────────────────────── */

function Cell({
  cell,
  sources,
  appName,
  indicatorLabel,
}: {
  cell: IndicatorCell
  sources: Record<string, SourceLink>
  appName: string
  indicatorLabel: string
}) {
  const links = cell.sourceIds.map((id) => sources[id]).filter((source) => Boolean(source))

  return (
    <td>
      <p className={styles.claim}>
        <span className={STATE_CLASSES[cell.state]}>
          <span aria-hidden="true" className={styles.mark}>
            {STATE_MARKS[cell.state]}
          </span>
          {cell.claim}
        </span>
        <span className={styles.sr}> ({STATE_NAMES[cell.state]})</span>{' '}
        {cell.applicable && cell.value !== null ? <ScoreValue value={cell.value} /> : null}
      </p>

      {cell.note ? <p className="meta">{cell.note}</p> : null}

      <p className="meta">Evidència: {cell.evidenceLabel}</p>

      <details className={styles.evidence}>
        <summary>
          Explicació i fonts
          <span className={styles.sr}>
            {' '}
            de «{indicatorLabel}» a {appName}
          </span>
        </summary>
        {cell.detail ? (
          <p className={styles.detail}>{cell.detail}</p>
        ) : (
          <p className="unknown">Sense explicació redactada a la fitxa.</p>
        )}
        {links.length > 0 ? (
          <p className="sources">
            Fonts:{' '}
            {links.map((source, index) => (
              <span key={source.id}>
                {index > 0 ? ' · ' : ''}
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.publisher}
                  <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
                </a>
              </span>
            ))}
          </p>
        ) : (
          <p className="sources unknown">Cap font citada per a aquesta casella.</p>
        )}
      </details>
    </td>
  )
}

/* ─────────────────────────── component principal ─────────────────────────── */

type Row = {
  key: string
  label: string
  description: string
  /** Pes de l'indicador dins de la seva dimensió, en tant per cent. */
  share: number
  cells: IndicatorCell[]
  differs: boolean
  allNotApplicable: boolean
}

const EMPTY_CELL: IndicatorCell = {
  kind: 'computed',
  state: 'unknown',
  claim: 'Sense documentar',
  value: null,
  applicable: true,
  evidenceLevel: 'unknown',
  evidenceLabel: 'Sense nivell declarat',
  detail: null,
  note: null,
  sourceIds: [],
  answer: 'unknown:x',
}

export default function Comparador({
  snapshot,
  initial,
}: {
  snapshot: ComparatorSnapshot
  initial: InitialSelection
}) {
  const [categorySlug, setCategorySlug] = useState(initial.categorySlug ?? '')
  const [selection, setSelection] = useState<string[]>(initial.appSlugs)
  const [onlyDifferences, setOnlyDifferences] = useState(false)
  const ids = useId()

  const appBySlug = useMemo(
    () => new Map(snapshot.apps.map((app) => [app.slug, app])),
    [snapshot.apps],
  )
  const appById = useMemo(() => new Map(snapshot.apps.map((app) => [app.id, app])), [snapshot.apps])

  const category: CategorySnapshot | null = useMemo(
    () => snapshot.categories.find((entry) => entry.slug === categorySlug) ?? null,
    [snapshot.categories, categorySlug],
  )

  const candidates: AppSnapshot[] = useMemo(() => {
    if (!category) return []
    return category.appIds
      .map((id) => appById.get(id))
      .filter((app): app is AppSnapshot => Boolean(app))
      .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
  }, [category, appById])

  const chosen: AppSnapshot[] = useMemo(
    () =>
      selection
        .map((slug) => appBySlug.get(slug))
        .filter((app): app is AppSnapshot => Boolean(app))
        .filter((app) => (category ? app.categoryIds.includes(category.id) : false)),
    [selection, appBySlug, category],
  )

  /**
   * L'adreça sempre reflecteix la selecció.
   *
   * Es fa amb `replaceState` i no amb una navegació: canviar de fitxa no és un
   * pas nou de l'historial —tornar enrere ha de sortir de l'eina, no desfer
   * l'última casella— i sobretot no ha de provocar cap petició al servidor.
   * L'estat de l'historial es conserva tal com està perquè l'encaminador de
   * Next continuï funcionant.
   */
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams()
    if (categorySlug) params.set('cat', categorySlug)
    selection.slice(0, MAX_APPS).forEach((slug, index) => {
      params.set(SLOT_PARAMS[index], slug)
    })
    const query = params.toString()
    const url = query ? `${window.location.pathname}?${query}` : window.location.pathname
    window.history.replaceState(window.history.state, '', url)
  }, [categorySlug, selection])

  const toggleApp = useCallback((slug: string) => {
    setSelection((current) => {
      if (current.includes(slug)) return current.filter((entry) => entry !== slug)
      if (current.length >= MAX_APPS) return current
      return [...current, slug]
    })
  }, [])

  const changeCategory = useCallback((slug: string) => {
    setCategorySlug(slug)
    // Canviar de categoria buida la selecció: les fitxes anteriors cobreixen
    // una altra necessitat i posar-les en aquesta taula seria comparar peres
    // amb pomes, que és el que l'eina existeix per evitar.
    setSelection([])
  }, [])

  const dimensionRows = useMemo(() => {
    if (chosen.length < 2) return []
    return snapshot.dimensions.map((dimension: DimensionSnapshot) => {
      const total = dimension.indicators.reduce((sum, indicator) => sum + indicator.weight, 0)
      const rows: Row[] = dimension.indicators.map((indicator) => {
        const cells = chosen.map((app) => app.cells[indicator.key] ?? EMPTY_CELL)
        const answers = new Set(cells.map((cell) => cell.answer))
        return {
          key: indicator.key,
          label: indicator.label,
          description: indicator.description,
          share: total === 0 ? 0 : Math.round((indicator.weight / total) * 100),
          cells,
          differs: answers.size > 1,
          allNotApplicable: cells.every((cell) => !cell.applicable),
        }
      })
      return { dimension, rows }
    })
  }, [snapshot.dimensions, chosen])

  const tally = useMemo(() => {
    let differing = 0
    let identical = 0
    let notApplicable = 0
    for (const group of dimensionRows) {
      for (const row of group.rows) {
        if (row.allNotApplicable) notApplicable += 1
        else if (row.differs) differing += 1
        else identical += 1
      }
    }
    return { differing, identical, notApplicable }
  }, [dimensionRows])

  const confidences = chosen
    .map((app) => app.scores.confidence)
    .filter((value): value is number => value !== null)
  const confidenceGap =
    confidences.length > 1 ? Math.max(...confidences) - Math.min(...confidences) : 0
  const provisional = chosen.filter((app) => app.scores.provisional)

  return (
    <div className={styles.tool}>
      {/* ─────────────────── Pas 1: la necessitat funcional ─────────────────── */}
      <h2>1. Tria la categoria</h2>
      <p>
        Dues aplicacions només es poden comparar si cobreixen la mateixa necessitat. El directori la
        té escrita per a cada categoria, i és el criteri que impedeix comparar un servei de
        missatgeria amb un cercador.
      </p>

      <div className="filters">
        <label htmlFor={`${ids}-cat`}>Categoria</label>
        <select
          id={`${ids}-cat`}
          value={categorySlug}
          onChange={(event) => changeCategory(event.target.value)}
        >
          <option value="">Tria una categoria…</option>
          {snapshot.categories.map((entry) => (
            <option key={entry.slug} value={entry.slug}>
              {entry.name} ({entry.appIds.length} fitxes)
            </option>
          ))}
        </select>
      </div>

      {snapshot.appsOutsideComparison > 0 ? (
        <p className="meta">
          Només hi surten les categories amb dues fitxes publicades o més. Ara mateix queden{' '}
          {snapshot.appsOutsideComparison} fitxes fora del comparador perquè encara no tenen cap
          altra fitxa de la seva categoria amb qui comparar-se.
        </p>
      ) : null}

      {category ? (
        <div className="card">
          <p>
            <strong>Necessitat que cobreix:</strong> {category.functionalNeed}
          </p>
          {category.privacyContext ? <p className="meta">{category.privacyContext}</p> : null}
        </div>
      ) : null}

      {/* ─────────────────── Pas 2: les fitxes ─────────────────────────────── */}
      {category ? (
        <>
          <h2>2. Tria les fitxes</h2>
          <fieldset className={styles.picker}>
            <legend>Fitxes de {category.name}</legend>
            <p className="meta" id={`${ids}-limit`}>
              De dues a {MAX_APPS} alhora. El màxim és {MAX_APPS} perquè amb quatre columnes la
              taula deixa de ser llegible i la comparació deixa de servir de res.
            </p>
            <div className="grid">
              {candidates.map((app) => {
                const checked = selection.includes(app.slug)
                return (
                  <div key={app.id} className={styles.option}>
                    <input
                      type="checkbox"
                      id={`${ids}-${app.slug}`}
                      checked={checked}
                      disabled={!checked && selection.length >= MAX_APPS}
                      aria-describedby={`${ids}-limit`}
                      onChange={() => toggleApp(app.slug)}
                    />
                    <label htmlFor={`${ids}-${app.slug}`}>
                      {app.name}
                      {app.company ? <span className="meta"> · {app.company}</span> : null}
                    </label>
                  </div>
                )
              })}
            </div>
            {selection.length > 0 ? (
              <p>
                <button
                  type="button"
                  className={styles.linkButton}
                  onClick={() => setSelection([])}
                >
                  Buida la selecció
                </button>
              </p>
            ) : null}
          </fieldset>
        </>
      ) : null}

      {/* ─────────────────── Pas 3: la comparació ──────────────────────────── */}
      {chosen.length < 2 ? (
        <p className="unknown">
          {category
            ? 'Tria almenys dues fitxes d’aquesta categoria per veure la comparació.'
            : 'Tria una categoria per començar.'}
        </p>
      ) : (
        <>
          <h2>3. Comparació</h2>

          {confidenceGap >= snapshot.confidenceGapThreshold ? (
            <p className={styles.warning}>
              <strong>Avís:</strong> les fitxes comparades no estan documentades amb la mateixa
              profunditat. La confiança va de {Math.min(...confidences)} a{' '}
              {Math.max(...confidences)} sobre 100. Entre una fitxa molt documentada i una que ho
              està poc, la diferència de puntuació mesura el que en sabem, no els serveis.
            </p>
          ) : null}

          {provisional.length > 0 ? (
            <p className={styles.warning}>
              <strong>Avís:</strong> {provisional.map((app) => app.name).join(', ')}{' '}
              {provisional.length === 1 ? 'té' : 'tenen'} una puntuació provisional: per sota de{' '}
              {snapshot.provisionalThreshold} punts de confiança encara no en sabem prou per
              sostenir-la.
            </p>
          ) : null}

          <div
            className={styles.scroller}
            role="region"
            tabIndex={0}
            aria-label="Taula de puntuacions publicades"
          >
            <table className={styles.matrix}>
              <caption>Puntuacions publicades, metodologia {snapshot.methodologyVersion}</caption>
              <thead>
                <tr>
                  <th scope="col" className={styles.rowHead}>
                    Puntuació
                  </th>
                  {chosen.map((app) => (
                    <th scope="col" key={app.id}>
                      <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={styles.rowHead}>
                    Global
                  </th>
                  {chosen.map((app) => (
                    <td key={app.id}>
                      <ScoreValue value={app.scores.overall} />
                    </td>
                  ))}
                </tr>
                {snapshot.dimensions.map((dimension) => (
                  <tr key={dimension.key}>
                    <th scope="row" className={styles.rowHead}>
                      {dimension.label}
                      <span className="meta"> · {dimension.weight} % del global</span>
                    </th>
                    {chosen.map((app) => (
                      <td key={app.id}>
                        <ScoreValue value={app.scores[dimension.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th scope="row" className={styles.rowHead}>
                    Confiança
                  </th>
                  {chosen.map((app) => (
                    <td key={app.id}>
                      <ScoreValue value={app.scores.confidence} />
                      {app.scores.provisional ? (
                        <div className="meta">Puntuació provisional</div>
                      ) : null}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th scope="row" className={styles.rowHead}>
                    Cobertura
                  </th>
                  {chosen.map((app) => (
                    <td key={app.id}>
                      {app.scores.coverage === null ? (
                        <span className="unknown">Sense dada</span>
                      ) : (
                        <span className="meta">
                          {Math.round(app.scores.coverage * 100)} % dels indicadors aplicables estan
                          documentats
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <p className="meta">
            Les puntuacions només es poden llegir juntes amb la seva confiança: una xifra alta amb
            una confiança baixa vol dir que encara hem mirat poc, no que el servei sigui bo.
          </p>

          {/* ─────────────── Diferències primer ─────────────── */}
          <h3>Indicador per indicador</h3>
          <p>
            De {snapshot.indicatorCount} indicadors de la metodologia,{' '}
            <strong>{tally.differing}</strong> mostren alguna diferència entre les {chosen.length}{' '}
            fitxes triades, {tally.identical} diuen el mateix i {tally.notApplicable} no apliquen a
            cap.
          </p>

          <div className="filters">
            <span className={styles.option}>
              <input
                type="checkbox"
                id={`${ids}-diff`}
                checked={onlyDifferences}
                onChange={(event) => setOnlyDifferences(event.target.checked)}
              />
              <label htmlFor={`${ids}-diff`}>
                Amaga els indicadors on totes les fitxes diuen el mateix
              </label>
            </span>
          </div>

          <p className="meta">
            Dues caselles «diuen el mateix» quan coincideixen en l’afirmació i en el tram de deu
            punts de l’indicador. Les files amb diferència es marquen amb l’etiqueta{' '}
            <span className="badge">Difereix</span>, no només amb el color.
          </p>

          {dimensionRows.map(({ dimension, rows }) => {
            const visible = onlyDifferences ? rows.filter((row) => row.differs) : rows
            return (
              <section key={dimension.key}>
                <h4 className={styles.dimensionTitle}>
                  {dimension.label}{' '}
                  <span className="meta">· {dimension.weight} % de la puntuació global</span>
                </h4>
                {visible.length === 0 ? (
                  <p className="unknown">
                    Cap indicador d’aquesta dimensió amb diferència entre les fitxes triades.
                  </p>
                ) : (
                  <div
                    className={styles.scroller}
                    role="region"
                    tabIndex={0}
                    aria-label={`Indicadors de ${dimension.label}`}
                  >
                    <table className={styles.matrix}>
                      <caption className={styles.sr}>
                        Indicadors de {dimension.label} per a {chosen.map((a) => a.name).join(', ')}
                      </caption>
                      <thead>
                        <tr>
                          <th scope="col" className={styles.rowHead}>
                            Indicador
                          </th>
                          {chosen.map((app) => (
                            <th scope="col" key={app.id}>
                              {app.name}
                              <span className="meta">
                                {' '}
                                · confiança{' '}
                                {app.scores.confidence === null
                                  ? 'sense dada'
                                  : `${app.scores.confidence}/100`}
                              </span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {visible.map((row) => (
                          <tr key={row.key} className={row.differs ? styles.diffRow : undefined}>
                            <th scope="row" className={styles.rowHead}>
                              {row.label}
                              {row.differs ? (
                                <>
                                  {' '}
                                  <span className="badge">Difereix</span>
                                </>
                              ) : null}
                              <span className="meta"> · pes {row.share} % de la dimensió</span>
                              <span className={styles.sr}>. {row.description}</span>
                            </th>
                            {row.cells.map((cell, index) => (
                              <Cell
                                key={chosen[index].id}
                                cell={cell}
                                sources={snapshot.sources}
                                appName={chosen[index].name}
                                indicatorLabel={row.label}
                              />
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            )
          })}

          {/* ─────────────── Alternatives documentades ─────────────── */}
          <h2>Alternatives documentades</h2>
          <p>
            Les que la redacció ha comprovat que cobreixen raonablement la mateixa necessitat, amb
            el que s’hi guanya i el que s’hi perd. Una alternativa presentada sense les
            contrapartides no és informació.
          </p>

          {chosen.map((app) => (
            <section key={app.id}>
              <h3>Alternatives a {app.name}</h3>
              {app.alternatives.length === 0 ? (
                <p className="unknown">
                  Encara no hem documentat cap alternativa a {app.name} que cobreixi raonablement la
                  mateixa necessitat.
                </p>
              ) : (
                <ul className="plain">
                  {app.alternatives.map((alternative) => {
                    const target = alternative.slug ? appBySlug.get(alternative.slug) : undefined
                    // Només es pot afegir a la taula si cobreix la mateixa
                    // necessitat que s'està comparant i encara hi ha columna.
                    const addable =
                      target &&
                      category &&
                      target.categoryIds.includes(category.id) &&
                      !selection.includes(target.slug) &&
                      selection.length < MAX_APPS
                        ? target
                        : null
                    return (
                      <li
                        key={`${app.id}-${alternative.name}`}
                        className={`card ${styles.altCard}`}
                      >
                        <h4>
                          {alternative.slug ? (
                            <Link href={`/aplicacions/${alternative.slug}`}>
                              {alternative.name}
                            </Link>
                          ) : (
                            alternative.name
                          )}{' '}
                          <span className="badge">{alternative.comparabilityLabel}</span>
                        </h4>
                        <p className="meta">
                          {alternative.overall === null ? (
                            'Sense puntuació publicada.'
                          ) : (
                            <>
                              Puntuació global {alternative.overall} sobre 100, amb una confiança de{' '}
                              {alternative.confidence === null
                                ? 'sense dada'
                                : `${alternative.confidence} sobre 100`}
                              .
                            </>
                          )}
                        </p>
                        <p>
                          <strong>Què s’hi guanya:</strong> {alternative.rationale}
                        </p>
                        <p>
                          <strong>Què s’hi perd:</strong>{' '}
                          {alternative.tradeOffs ? (
                            alternative.tradeOffs
                          ) : (
                            <span className="unknown">
                              No n’hi ha de documentades. Que no les hàgim escrit no vol dir que no
                              n’hi hagi.
                            </span>
                          )}
                        </p>
                        {addable ? (
                          <p>
                            <button
                              type="button"
                              className={styles.linkButton}
                              onClick={() => toggleApp(addable.slug)}
                            >
                              Afegeix {alternative.name} a la comparació
                            </button>
                          </p>
                        ) : null}
                        {!alternative.inCorpus ? (
                          <p className="meta">
                            La fitxa d’aquesta alternativa encara no és publicada, de manera que no
                            es pot comparar indicador per indicador.
                          </p>
                        ) : null}
                      </li>
                    )
                  })}
                </ul>
              )}
            </section>
          ))}

          <p className="meta">
            El comparador no diu quin servei has de fer servir. Ensenya les diferències
            documentades, el que costa cada canvi i quanta part de tot plegat encara no sabem; la
            decisió depèn del que necessitis fer i de qui hi ha a l’altra banda.
          </p>
        </>
      )}
    </div>
  )
}
