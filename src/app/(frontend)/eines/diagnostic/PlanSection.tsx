'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

import styles from './exposicio.module.css'
import {
  EFFORT_LABELS,
  TIER_LABELS,
  TIER_THRESHOLDS,
  type Action,
  type Plan,
  type Tier,
} from './plan'
import type { AppLite } from './types'

/**
 * Pla d'acció: la part del diagnòstic que es fa servir, no només es llegeix.
 *
 * Cada acció porta l'adreça oficial on es fa, es pot marcar com a feta i
 * explica la seva prioritat factor per factor. L'estat (fetes i serveis que la
 * persona vol deixar) viu al dispositiu i el gestiona el component pare.
 */

const TIERS: Tier[] = ['now', 'soon', 'later']

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="action-link">
      {children}
      <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
    </a>
  )
}

function ActionCard({
  action,
  done,
  onToggle,
}: {
  action: Action
  done: boolean
  onToggle: (id: string) => void
}) {
  const checkboxId = `fet-${action.id.replace(/[^a-z0-9-]/gi, '-')}`
  return (
    <li
      className={`card plan-action${done ? ' plan-action-done' : ''}`}
      data-kind={action.kind}
      data-tier={action.tier}
      data-done={done ? 'true' : 'false'}
    >
      <div className="plan-action-head">
        <input
          type="checkbox"
          id={checkboxId}
          checked={done}
          onChange={() => onToggle(action.id)}
        />{' '}
        <label htmlFor={checkboxId}>
          <strong>{action.title}</strong>
        </label>
      </div>
      <p>{action.benefit}</p>
      {action.detail ? <p className="meta">{action.detail}</p> : null}
      {action.steps.length > 0 ? (
        <ol className="plan-action-steps">
          {action.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      ) : null}
      {action.cautions.length > 0 ? (
        <ul className={`plain ${styles.warning}`}>
          {action.cautions.map((caution) => (
            <li key={caution}>{caution}</li>
          ))}
        </ul>
      ) : null}
      <p className="plan-action-links">
        {action.url && action.urlLabel ? (
          <ExternalLink href={action.url}>{action.urlLabel}</ExternalLink>
        ) : null}
        {action.url && action.internalHref ? ' · ' : null}
        {action.internalHref && action.internalLabel ? (
          <Link href={action.internalHref}>{action.internalLabel}</Link>
        ) : null}
      </p>
      {!action.url && action.app && action.kind !== 'switch' ? (
        <p className="unknown">
          La fitxa no documenta l’adreça directa: es fa des de la configuració del servei.
        </p>
      ) : null}
      <details className="plan-action-why">
        <summary>
          Prioritat {action.priority} · esforç: {EFFORT_LABELS[action.effort]}
        </summary>
        <ul>
          {action.factors.map((factor) => (
            <li key={factor.label}>
              <span className={styles.numeric}>+{factor.points}</span> {factor.label}
            </li>
          ))}
        </ul>
      </details>
    </li>
  )
}

export function PlanSection({
  plan,
  apps,
  done,
  leaving,
  onToggleDone,
  onToggleLeaving,
  onResetPlan,
  detailsLoading,
}: {
  plan: Plan
  detailsLoading: boolean
  apps: AppLite[]
  done: string[]
  leaving: string[]
  onToggleDone: (id: string) => void
  onToggleLeaving: (slug: string) => void
  onResetPlan: () => void
}) {
  const [showDone, setShowDone] = useState(false)
  const doneSet = useMemo(() => new Set(done), [done])
  const completed = plan.actions.filter((action) => doneSet.has(action.id)).length
  const total = plan.actions.length

  const byTier = useMemo(() => {
    const groups: Record<Tier, Action[]> = { now: [], soon: [], later: [] }
    for (const action of plan.actions) {
      if (!showDone && doneSet.has(action.id)) continue
      groups[action.tier].push(action)
    }
    return groups
  }, [plan.actions, doneSet, showDone])

  return (
    <section
      aria-labelledby="pla"
      className="diagnostic-plan"
      data-completed={completed}
      data-total={total}
      aria-busy={detailsLoading}
    >
      <h2 id="pla">El teu pla d’acció</h2>
      <p>
        Accions concretes sobre els serveis que has triat, amb l’enllaç oficial on es fa cadascuna.
        Estan ordenades per prioritat, i la prioritat es pot desmuntar: obre «Prioritat» a qualsevol
        acció i hi veuràs els punts de cada factor. És una manera d’ordenar la feina, no una nota
        sobre tu ni sobre el servei.
      </p>

      {detailsLoading ? (
        <p className="meta" aria-live="polite">
          Carregant les explicacions de les fitxes…
        </p>
      ) : null}

      <p role="status" className="plan-progress">
        <strong>
          {completed} de {total}
        </strong>{' '}
        {total === 1 ? 'acció feta' : 'accions fetes'}.{' '}
        <progress max={total} value={completed} aria-hidden="true" />
        {completed === total && total > 0 ? ' Pla completat.' : ''}
      </p>

      <details className="plan-leaving">
        <summary>
          Serveis que ja no fas servir ({leaving.filter((slug) => apps.some((app) => app.slug === slug)).length})
        </summary>
        <p className="meta">
          Marca els que vols deixar i el pla canvia les accions de configurar-los per les
          d’esborrar-ne el compte, amb els passos, les esperes i el que el servei es queda igualment.
        </p>
        <fieldset className={styles.group}>
          <legend className="visually-hidden">Serveis que vols deixar</legend>
          <div className={styles.options}>
            {apps.map((app) => (
              <label key={app.slug} className={styles.option} htmlFor={`deixar-${app.slug}`}>
                <input
                  type="checkbox"
                  id={`deixar-${app.slug}`}
                  checked={leaving.includes(app.slug)}
                  onChange={() => onToggleLeaving(app.slug)}
                />
                <span className={styles.optionName}>{app.name}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </details>

      <div className={styles.actions}>
        <label htmlFor="mostra-fetes">
          <input
            id="mostra-fetes"
            type="checkbox"
            checked={showDone}
            onChange={(event) => setShowDone(event.target.checked)}
          />{' '}
          Mostra també les accions fetes
        </label>
        <button type="button" onClick={onResetPlan} disabled={done.length === 0 && leaving.length === 0}>
          Reinicia el pla
        </button>
      </div>

      {TIERS.map((tier) => {
        const actions = byTier[tier]
        if (actions.length === 0) return null
        const list = (
          <ol className="plain plan-actions">
            {actions.map((action) => (
              <ActionCard
                key={action.id}
                action={action}
                done={doneSet.has(action.id)}
                onToggle={onToggleDone}
              />
            ))}
          </ol>
        )
        /* El darrer tram es plega: amb deu serveis el pla passa de quaranta
         * accions, i les de prioritat baixa no han de tapar les urgents. */
        if (tier === 'later') {
          return (
            <details key={tier} data-tier={tier} className="plan-tier">
              <summary>
                <strong>{TIER_LABELS[tier]}</strong> ({actions.length})
              </summary>
              {list}
            </details>
          )
        }
        return (
          <section key={tier} aria-labelledby={`tram-${tier}`} data-tier={tier} className="plan-tier">
            <h3 id={`tram-${tier}`}>
              {TIER_LABELS[tier]} ({actions.length})
            </h3>
            {list}
          </section>
        )
      })}

      {total > 0 && completed === total && !showDone ? (
        <p>
          Totes les accions del pla estan fetes. Si afegeixes serveis a la tria o en marques algun
          per deixar, el pla s’amplia.
        </p>
      ) : null}

      {plan.appsWithoutActions.length > 0 ? (
        <p className="unknown">
          {plan.appsWithoutActions.map((app) => app.name).join(', ')}{' '}
          {plan.appsWithoutActions.length === 1 ? 'no té' : 'no tenen'} cap control documentat a la
          fitxa que es pugui convertir en una acció. No vol dir que no n’hi hagi.
        </p>
      ) : null}

      <details className="meta">
        <summary>Com es calcula la prioritat</summary>
        <p>
          Cada acció parteix d’uns punts de base segons el que protegeix (una contrasenya filtrada,
          35; el segon factor, 25; oposar-se a l’entrenament d’IA, 15; descarregar les dades, 5…) i
          hi suma punts per circumstàncies documentades a la fitxa: filtracions conegudes del
          servei (+15), dades de sensibilitat alta (+3 per tipus, fins a 15), dades de l’article 9
          (+5), cessió a intermediaris (+5 o +8) o una alternativa amb més puntuació (la meitat de
          la diferència, fins a 25). A partir de {TIER_THRESHOLDS.now} punts va a «{TIER_LABELS.now}»; a
          partir de {TIER_THRESHOLDS.soon}, a «{TIER_LABELS.soon}». Els desconeguts no sumen mai.
        </p>
      </details>
    </section>
  )
}
