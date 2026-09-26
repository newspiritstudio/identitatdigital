import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import type { App, Media, Source } from '@/payload-types'
import { de } from '@/lib/apostrof'

/**
 * Utilitats compartides de la interfície de validació.
 *
 * La fase 1 no dissenya el frontend: només l'ha de fer prou llegible per
 * comprovar que el model de dades respon les preguntes que ha de respondre.
 */

export const getClient = async () => getPayload({ config })

export const STATUS_LABELS: Record<string, string> = {
  yes: 'Sí',
  partial: 'Parcialment',
  no: 'No',
  unknown: 'No documentat',
  na: 'No aplica',
}

export const LEVEL_LABELS: Record<string, string> = {
  official: 'documentació oficial',
  regulator: 'autoritat de control',
  independent: 'anàlisi independent',
  press: 'premsa',
  editorial: 'valoració editorial',
  unknown: 'sense evidència',
}

export const scoreClass = (value?: number | null) => {
  if (value === null || value === undefined) return 'unknown'
  if (value >= 70) return 'score score-good'
  if (value >= 45) return 'score score-mid'
  return 'score score-bad'
}

export function Score({ value }: { value?: number | null }) {
  if (value === null || value === undefined) return <span className="unknown">—</span>
  return <span className={scoreClass(value)}>{value}</span>
}

type FactLike =
  | {
      status?: string | null
      evidenceLevel?: string | null
      detail?: string | null
      verifiedAt?: string | null
      sources?: unknown
    }
  | null
  | undefined

const asSources = (value: unknown): Source[] =>
  Array.isArray(value)
    ? value.filter((entry): entry is Source => typeof entry === 'object' && entry !== null)
    : []

/** Mostra una afirmació amb el seu estat, el seu nivell d'evidència i les seves fonts. */
export function Fact({
  label,
  fact,
  extra,
}: {
  label: string
  fact: FactLike
  extra?: React.ReactNode
}) {
  if (!fact) return null
  const sources = asSources(fact.sources)
  return (
    <div className="fact">
      <dt>
        {label}:{' '}
        <span className={fact.status === 'unknown' ? 'unknown' : undefined}>
          {STATUS_LABELS[fact.status ?? 'unknown']}
        </span>{' '}
        <span className="badge">{LEVEL_LABELS[fact.evidenceLevel ?? 'unknown']}</span>
      </dt>
      <dd>
        {fact.detail ? <p style={{ margin: '0.15rem 0' }}>{fact.detail}</p> : null}
        {extra}
        {sources.length > 0 ? (
          <p className="sources">
            Fonts:{' '}
            {sources.map((source, index) => (
              <React.Fragment key={source.id}>
                {index > 0 ? ' · ' : ''}
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.publisher}
                  <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
                </a>
              </React.Fragment>
            ))}
          </p>
        ) : null}
      </dd>
    </div>
  )
}

/**
 * Logotip del servei. Les icones venen de l'App Store i es fan servir per
 * identificar l'aplicació de què es parla; el crèdit i la data de descàrrega
 * consten a la biblioteca multimèdia. Si una fitxa encara no en té, no es
 * dibuixa cap marcador de posició: una fitxa sense icona s'ha de veure.
 */
export function Logo({
  logo,
  name,
  size = 24,
}: {
  logo: App['logo']
  name: string
  size?: number
}) {
  if (!logo || typeof logo !== 'object') return null
  const media = logo as Media
  const src = media.sizes?.thumbnail?.url ?? media.url
  if (!src) return null
  return (
    <Image
      src={src}
      alt={media.alt ?? `Logotip ${de(name)}`}
      width={size}
      height={size}
      className="logo"
      unoptimized
    />
  )
}

export const appHref = (app: Pick<App, 'slug'>) => `/aplicacions/${app.slug}`
