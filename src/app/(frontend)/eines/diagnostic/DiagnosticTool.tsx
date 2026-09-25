'use client'

import { useCallback, useMemo, useState } from 'react'

import { planStore, selectionStore, useLocalStore } from '@/lib/tools/localStore'
import { downloadText, useCopy, useHydrated } from '@/lib/tools/useCopy'

import styles from './exposicio.module.css'
import { analyseSelection } from './compute'
import { ExposureSections } from './ExposureSections'
import { useDetails } from './details'
import { breachSummary, buildPlan, riskMap } from './plan'
import { PlanSection } from './PlanSection'
import { buildReport } from './report'
import { BreachesSection, RiskMap } from './RiskSections'
import type { AppLite, Snapshot } from './types'

/**
 * El diagnòstic, sencer, dins del navegador.
 *
 * No hi ha cap `fetch` ni cap `action`. La tria i l'estat del pla es desen al
 * dispositiu (`localStorage`) perquè les altres eines els puguin aprofitar i
 * perquè la persona pugui tornar-hi; no viatgen mai amb cap petició.
 *
 * L'enllaç per compartir porta la tria al fragment (`#apps=…`), que els
 * navegadors no envien mai al servidor. En obrir-lo no se sobreescriu res: la
 * pàgina ofereix carregar-la i la persona decideix.
 */

const NO_SELECTION: string[] = []
const MAX_SHARED = 200

const readSharedSelection = (valid: Set<string>): string[] => {
  if (typeof window === 'undefined') return []
  const match = /(?:^#|&)apps=([^&]*)/.exec(window.location.hash)
  if (!match) return []
  let decoded = ''
  try {
    decoded = decodeURIComponent(match[1] ?? '')
  } catch {
    return []
  }
  return [...new Set(decoded.split(',').map((slug) => slug.trim()))]
    .filter((slug) => valid.has(slug))
    .slice(0, MAX_SHARED)
}

const clearHash = () => {
  try {
    window.history.replaceState(null, '', window.location.pathname + window.location.search)
  } catch {
    /* Sense conseqüències: només queda el fragment a la barra d'adreces. */
  }
}

export default function DiagnosticTool({ snapshot }: { snapshot: Snapshot }) {
  const hydrated = useHydrated()
  const [storedSelection, setSelection] = useLocalStore(selectionStore)
  const [planState, setPlanState] = useLocalStore(planStore)
  const [query, setQuery] = useState('')
  const validSlugs = useMemo(() => new Set(snapshot.apps.map((app) => app.slug)), [snapshot])
  const [shared, setShared] = useState<string[]>(() => readSharedSelection(validSlugs))
  const { message: copyMessage, copy } = useCopy('Enllaç copiat. La tria va al fragment de l’adreça, que no arriba mai al servidor.')

  const selection = useMemo(
    () => (hydrated ? storedSelection.filter((slug) => validSlugs.has(slug)) : NO_SELECTION),
    [hydrated, storedSelection, validSlugs],
  )

  const toggle = useCallback(
    (slug: string) =>
      setSelection((current) =>
        current.includes(slug) ? current.filter((entry) => entry !== slug) : [...current, slug],
      ),
    [setSelection],
  )

  const addMany = useCallback(
    (slugs: string[]) => setSelection((current) => [...new Set([...current, ...slugs])]),
    [setSelection],
  )

  const exposure = useMemo(() => analyseSelection(snapshot, selection), [snapshot, selection])
  const details = useDetails(selection.length > 0)
  const plan = useMemo(
    () => buildPlan(snapshot, selection, planState.leaving, details.data),
    [snapshot, selection, planState.leaving, details.data],
  )
  const risks = useMemo(() => riskMap(snapshot, selection), [snapshot, selection])
  const breaches = useMemo(() => breachSummary(snapshot, selection), [snapshot, selection])

  const popular = useMemo(() => snapshot.apps.filter((app) => app.popular), [snapshot])

  /* Caselles agrupades per la primera categoria de cada fitxa: una aplicació
   * surt una sola vegada, perquè dues caselles de la mateixa semblarien una
   * errada quan se'n marca una. */
  const groups = useMemo(() => {
    const normalised = query.trim().toLocaleLowerCase('ca')
    const buckets = new Map<number, AppLite[]>()
    const loose: AppLite[] = []
    for (const app of snapshot.apps) {
      if (
        normalised.length > 0 &&
        !app.name.toLocaleLowerCase('ca').includes(normalised) &&
        !app.company.name.toLocaleLowerCase('ca').includes(normalised) &&
        !app.group.name.toLocaleLowerCase('ca').includes(normalised)
      ) {
        continue
      }
      if (app.categories.length === 0) {
        loose.push(app)
        continue
      }
      const first = app.categories[0]
      const bucket = buckets.get(first)
      if (bucket) bucket.push(app)
      else buckets.set(first, [app])
    }
    const ordered = [...buckets.entries()]
      .map(([index, apps]) => ({ name: snapshot.categories[index]?.name ?? '(sense categoria)', apps }))
      .sort((a, b) => a.name.localeCompare(b.name, 'ca'))
    if (loose.length > 0) ordered.push({ name: 'Sense categoria', apps: loose })
    return ordered
  }, [snapshot, query])

  const visible = groups.reduce((sum, group) => sum + group.apps.length, 0)
  const searching = query.trim().length > 0

  const toggleDone = useCallback(
    (id: string) =>
      setPlanState((current) => ({
        ...current,
        done: current.done.includes(id)
          ? current.done.filter((entry) => entry !== id)
          : [...current.done, id],
      })),
    [setPlanState],
  )

  const toggleLeaving = useCallback(
    (slug: string) =>
      setPlanState((current) => ({
        ...current,
        leaving: current.leaving.includes(slug)
          ? current.leaving.filter((entry) => entry !== slug)
          : [...current.leaving, slug],
      })),
    [setPlanState],
  )

  const resetPlan = useCallback(() => setPlanState({ done: [], leaving: [] }), [setPlanState])

  const clearAll = useCallback(() => {
    setSelection([])
    setPlanState({ done: [], leaving: [] })
  }, [setSelection, setPlanState])

  const shareLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#apps=${selection.map(encodeURIComponent).join(',')}`
    void copy(url)
  }

  const download = () => {
    const report = buildReport({
      exposure,
      plan,
      risks,
      breaches,
      done: planState.done,
      date: new Date(),
    })
    downloadText(`diagnostic-identitat-digital-${new Date().toISOString().slice(0, 10)}.md`, report)
  }

  const pendingShared = hydrated && shared.length > 0
  const sharedIsSame =
    shared.length === selection.length && shared.every((slug) => selection.includes(slug))

  return (
    <div className="diagnostic" data-selected={selection.length} data-hydrated={hydrated ? 'true' : 'false'}>
      {pendingShared && !sharedIsSame ? (
        <aside className={`card ${styles.warning}`} aria-labelledby="compartit">
          <h2 id="compartit" style={{ marginTop: 0 }}>
            T’han compartit un diagnòstic
          </h2>
          <p>
            L’enllaç porta una tria de {shared.length}{' '}
            {shared.length === 1 ? 'servei' : 'serveis'}:{' '}
            {shared
              .map((slug) => snapshot.apps.find((app) => app.slug === slug)?.name ?? slug)
              .join(', ')}
            .{' '}
            {selection.length > 0
              ? `Ara en tens ${selection.length} de triats en aquest dispositiu.`
              : 'Ara no en tens cap de triat en aquest dispositiu.'}
          </p>
          <div className={styles.actions}>
            <button
              type="button"
              onClick={() => {
                setSelection(shared)
                setShared([])
                clearHash()
              }}
            >
              Substitueix la meva tria
            </button>
            {selection.length > 0 ? (
              <button
                type="button"
                onClick={() => {
                  addMany(shared)
                  setShared([])
                  clearHash()
                }}
              >
                Afegeix-los a la meva tria
              </button>
            ) : null}
            <button
              type="button"
              onClick={() => {
                setShared([])
                clearHash()
              }}
            >
              Ignora’l
            </button>
          </div>
        </aside>
      ) : null}

      <section className={styles.picker} aria-labelledby="tria">
        <h2 id="tria" style={{ marginTop: 0 }}>
          1. Tria els serveis que fas servir
        </h2>

        {popular.length > 0 ? (
          <div className="diagnostic-quick" role="group" aria-labelledby="rapida">
            <p id="rapida">
              <strong>Tria ràpida.</strong> Els serveis del directori amb més persones usuàries.
              Marca els que tinguis:
            </p>
            <p className={styles.tags}>
              {popular.map((app) => {
                const active = selection.includes(app.slug)
                return (
                  <button
                    key={app.slug}
                    type="button"
                    aria-pressed={active}
                    data-active={active ? 'true' : 'false'}
                    onClick={() => toggle(app.slug)}
                    className="diagnostic-chip"
                  >
                    {active ? '✓ ' : ''}
                    {app.name}
                  </button>
                )
              })}
            </p>
          </div>
        ) : null}

        <div className={styles.search}>
          <label htmlFor="cerca">Cerca per servei, empresa o grup</label>
          <input
            id="cerca"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
            placeholder="Per exemple: Instagram, Google o Meta"
          />
          <p className="meta" aria-live="polite">
            {searching
              ? `${visible} de les ${snapshot.apps.length} fitxes coincideixen amb la cerca.`
              : `${snapshot.apps.length} fitxes publicades, per categories. La cerca només filtra la llista: les que ja has marcat continuen comptant.`}
          </p>
        </div>

        {groups.map((group) => {
          const selectedHere = group.apps.filter((app) => selection.includes(app.slug)).length
          return (
            <details
              key={group.name}
              className={styles.group}
              open={searching || undefined}
              data-selected={selectedHere}
            >
              <summary>
                {group.name}{' '}
                <span className="meta">
                  ({group.apps.length}
                  {selectedHere > 0 ? `, ${selectedHere} triades` : ''})
                </span>
              </summary>
              <div className={styles.options}>
                {group.apps.map((app) => (
                  <label key={app.slug} className={styles.option} htmlFor={`app-${app.slug}`}>
                    <input
                      type="checkbox"
                      id={`app-${app.slug}`}
                      checked={selection.includes(app.slug)}
                      onChange={() => toggle(app.slug)}
                    />
                    <span>
                      <span className={styles.optionName}>{app.name}</span>{' '}
                      <span className={styles.optionMeta}>{app.company.name}</span>
                    </span>
                  </label>
                ))}
              </div>
            </details>
          )
        })}

        <div className={styles.actions}>
          <span className={styles.count} role="status">
            {selection.length === 0
              ? 'Cap servei triat.'
              : `${selection.length} ${selection.length === 1 ? 'servei triat' : 'serveis triats'} de ${snapshot.publishedApps}.`}
          </span>
          <button type="button" onClick={clearAll} disabled={selection.length === 0 && planState.done.length === 0}>
            Esborra-ho tot d’aquest dispositiu
          </button>
        </div>
        {selection.length > 0 ? (
          <p className={styles.tags} aria-label="Serveis triats">
            {exposure.apps.map((app) => (
              <button
                key={app.slug}
                type="button"
                className="diagnostic-chip"
                data-active="true"
                onClick={() => toggle(app.slug)}
                aria-label={`Treu ${app.name} de la tria`}
              >
                {app.name} ×
              </button>
            ))}
          </p>
        ) : null}
      </section>

      <section aria-label="Resultat del diagnòstic" className="diagnostic-results">
        {exposure.selected === 0 ? (
          <EmptyState />
        ) : (
          <>
            <h2 id="resultat">2. El teu diagnòstic</h2>
            <Headline
              exposure={exposure}
              breaches={breaches.items.length}
              breachesWithPasswords={breaches.withPasswords}
              pending={plan.actions.filter((action) => !planState.done.includes(action.id)).length}
              actions={plan.actions.length}
              topRisk={risks[0] ?? null}
            />

            <nav aria-label="Seccions del diagnòstic" className="diagnostic-nav">
              <ul className="plain">
                <li><a href="#pla">Pla d’acció</a></li>
                <li><a href="#mapa">Mapa de risc</a></li>
                <li><a href="#filtracions">Filtracions</a></li>
                <li><a href="#dades">Dades</a></li>
                <li><a href="#empreses">Empreses</a></li>
                <li><a href="#grups">Grups</a></li>
                <li><a href="#alternatives">Alternatives</a></li>
                <li><a href="#informe">Informe</a></li>
              </ul>
            </nav>

            {details.status === 'error' ? (
              <p className={styles.warning} role="alert">
                No s’han pogut carregar les explicacions i els passos detallats de les fitxes. El pla
                funciona igual, amb els enllaços oficials, però sense aquests textos.{' '}
                <button type="button" onClick={details.retry}>
                  Torna-ho a provar
                </button>
              </p>
            ) : null}

            <PlanSection
              plan={plan}
              detailsLoading={details.status === 'loading'}
              apps={exposure.apps}
              done={planState.done}
              leaving={planState.leaving}
              onToggleDone={toggleDone}
              onToggleLeaving={toggleLeaving}
              onResetPlan={resetPlan}
            />

            <RiskMap risks={risks} />

            <BreachesSection summary={breaches} apps={exposure.apps} snapshot={snapshot} />

            <ExposureSections exposure={exposure} />

            <section aria-labelledby="informe" className="diagnostic-report">
              <h2 id="informe">Endú-te’l</h2>
              <p>
                L’informe és un fitxer de text (Markdown) amb el pla, el mapa de risc, les filtracions
                i les dades. Es genera dins del navegador: no passa per cap servidor. L’enllaç per
                compartir porta només la llista de serveis, sense el pla ni res del que has marcat.
              </p>
              <div className={styles.actions}>
                <button type="button" onClick={download}>
                  Descarrega l’informe
                </button>
                <button type="button" onClick={() => window.print()}>
                  Imprimeix
                </button>
                <button type="button" onClick={shareLink}>
                  Copia l’enllaç per compartir la tria
                </button>
                <span role="status" className="meta">
                  {copyMessage}
                </span>
              </div>
            </section>
          </>
        )}
      </section>
    </div>
  )
}

function Headline({
  exposure,
  breaches,
  breachesWithPasswords,
  pending,
  actions,
  topRisk,
}: {
  exposure: ReturnType<typeof analyseSelection>
  breaches: number
  breachesWithPasswords: number
  pending: number
  actions: number
  topRisk: ReturnType<typeof riskMap>[number] | null
}) {
  const total = exposure.selected
  const collected = exposure.dataTypes.filter((type) => type.collectedBy > 0)
  const special = exposure.specialCategories.filter((type) => type.collectedBy > 0).length
  const topGroup = exposure.groups[0]
  return (
    <div className="diagnostic-headline">
      <dl className="diagnostic-figures">
        <div data-figure="data-types">
          <dt>Tipus de dada teus que circulen</dt>
          <dd>
            <strong>{collected.length}</strong>
            {special > 0 ? <span className="meta"> · {special} de l’article 9</span> : null}
          </dd>
        </div>
        <div data-figure="companies">
          <dt>Empreses amb nom que hi accedeixen</dt>
          <dd>
            <strong>{exposure.namedCompanies}</strong>
            <span className="meta"> · com a mínim</span>
          </dd>
        </div>
        <div data-figure="groups">
          <dt>Serveis en un grup compartit</dt>
          <dd>
            <strong>{exposure.appsInSharedGroups}</strong>
            <span className="meta"> de {total}</span>
          </dd>
        </div>
        <div data-figure="breaches">
          <dt>Filtracions conegudes</dt>
          <dd>
            <strong>{breaches}</strong>
            {breachesWithPasswords > 0 ? (
              <span className="meta"> · {breachesWithPasswords} amb contrasenyes</span>
            ) : null}
          </dd>
        </div>
        <div data-figure="actions">
          <dt>Accions pendents</dt>
          <dd>
            <strong>{pending}</strong>
            <span className="meta"> de {actions}</span>
          </dd>
        </div>
      </dl>
      <p role="status" className={styles.summary}>
        {topGroup && topGroup.apps.length > 1 ? (
          <>
            <strong>{topGroup.company.name}</strong> concentra {topGroup.apps.length} dels {total}{' '}
            serveis que has triat i hi arriben {topGroup.dataTypes} tipus de dada teus sumant-los.{' '}
          </>
        ) : null}
        {topRisk && topRisk.count > 0 ? (
          <>
            El servei amb més senyals de risc documentats és <strong>{topRisk.app.name}</strong> (
            {topRisk.count} de {topRisk.signals.length}).{' '}
          </>
        ) : null}
        {pending > 0
          ? `Tens ${pending} ${pending === 1 ? 'acció concreta' : 'accions concretes'} per fer, començant per les de dalt del pla.`
          : 'No tens cap acció pendent.'}
      </p>
    </div>
  )
}

function EmptyState() {
  return (
    <div className={styles.empty}>
      <h2 style={{ marginTop: 0 }}>Què obtindràs</h2>
      <p>
        Cada fitxa del directori explica un servei. El diagnòstic les creua amb el catàleg de
        filtracions i els incidents documentats i en treu el que cap fitxa no pot dir tota sola:
      </p>
      <ul>
        <li>
          <strong>Un pla d’acció personal</strong>, ordenat per prioritat, amb l’enllaç oficial on es
          fa cada cosa: activar el doble factor amb el millor mètode disponible, desactivar la
          publicitat personalitzada, oposar-te a l’entrenament d’IA, esborrar els comptes que ja no
          fas servir… i marcar el que ja has fet.
        </li>
        <li>
          <strong>Un mapa de risc</strong> amb vuit senyals documentats per servei.
        </li>
        <li>
          <strong>Les filtracions i sancions</strong> dels serveis que fas servir, i quines dades hi
          van quedar exposades.
        </li>
        <li>
          <strong>Quines dades teves circulen</strong>, quantes empreses hi tenen accés i quins
          grups empresarials t’acumulen sense que se’n vegi la relació.
        </li>
        <li>
          <strong>Alternatives</strong> amb la diferència de puntuació i el que s’hi perd.
        </li>
        <li>
          <strong>Un informe</strong> per descarregar i un enllaç per compartir la tria.
        </li>
      </ul>
      <p className="meta">
        La tria es desa en aquest dispositiu perquè hi puguis tornar i perquè la revisió de
        credencials sàpiga quins serveis fas servir. No surt del navegador.
      </p>
    </div>
  )
}
