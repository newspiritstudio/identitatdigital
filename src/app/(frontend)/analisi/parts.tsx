import Link from 'next/link'
import React from 'react'

import type { StatusTally } from '@/lib/analysis'

import styles from './analisi.module.css'

/**
 * Peces compartides de la secció d'anàlisi.
 *
 * Cap d'aquests components no calcula res: reben xifres ja calculades per
 * `src/lib/analysis` i es limiten a dibuixar-les. La regla que compleixen tots
 * és la mateixa: al costat de qualsevol representació gràfica hi va sempre la
 * xifra escrita amb el seu denominador.
 */

const CA = new Intl.NumberFormat('ca-ES')

/** Nombre amb el format català (punt de milers, coma decimal). */
export const num = (value: number): string => CA.format(value)

/** Percentatge escrit, amb l'espai fi abans del signe. */
export const pct = (value: number): string => `${CA.format(value)} %`

/** Imports grans, arrodonits a milions: mil milions d'euros no es llegeixen. */
export const millions = (value: number): string => CA.format(Math.round(value / 1_000_000))

/** Xifra destacada amb el seu peu. */
export function KeyNumber({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <li className={styles.number}>
      <strong>{value}</strong>
      <span>{label}</span>
    </li>
  )
}

export function KeyNumbers({ children }: { children: React.ReactNode }) {
  return <ul className={styles.numbers}>{children}</ul>
}

/**
 * Barra horitzontal proporcional amb la fracció escrita al costat.
 *
 * `unit` permet dir de què són les dues xifres quan la taula no ho deixa clar
 * («7 de 25 fitxes»), i `faint` serveix per a les barres secundàries d'una
 * mateixa taula, perquè no competeixin amb la principal.
 */
export function Bar({
  value,
  total,
  unit,
  faint,
}: {
  value: number
  total: number
  unit?: string
  faint?: boolean
}) {
  const width = total > 0 ? Math.round((value / total) * 1000) / 10 : 0
  return (
    <span className={styles.bar}>
      <span className={styles.track} aria-hidden="true">
        <span
          className={faint ? `${styles.fill} ${styles.faint}` : styles.fill}
          style={{ width: `${width}%` }}
        />
      </span>
      <span className={styles.value}>
        {num(value)} de {num(total)}
        {unit ? ` ${unit}` : ''}
      </span>
    </span>
  )
}

const STACK_SEGMENTS = [
  { key: 'yes', label: 'sí', className: styles.segYes },
  { key: 'partial', label: 'parcialment', className: styles.segPartial },
  { key: 'no', label: 'no', className: styles.segNo },
  { key: 'unknown', label: 'no documentat', className: styles.segUnknown },
  { key: 'na', label: 'no aplica', className: styles.segNa },
] as const

/**
 * Repartiment dels cinc estats d'una afirmació.
 *
 * La llegenda sempre escriu els recomptes: la barra és una ajuda visual, no la
 * informació. «No documentat» té textura en comptes de color perquè es distingeixi
 * dels altres estats sense suggerir que sigui una mala nota.
 */
export function StatusStack({ tally, unit = 'fitxes' }: { tally: StatusTally; unit?: string }) {
  const total = tally.total
  const present = STACK_SEGMENTS.filter((segment) => tally[segment.key] > 0)
  return (
    <div>
      <div className={styles.stack} aria-hidden="true">
        {present.map((segment) => (
          <span
            key={segment.key}
            className={segment.className}
            style={{ width: `${total > 0 ? (tally[segment.key] / total) * 100 : 0}%` }}
          />
        ))}
      </div>
      <p className={styles.legend}>
        {present.map((segment, index) => (
          <React.Fragment key={segment.key}>
            {index > 0 ? ' · ' : ''}
            <b>{num(tally[segment.key])}</b> {segment.label}
          </React.Fragment>
        ))}
        {' · '}
        <b>{num(total)}</b> {unit} en total
      </p>
    </div>
  )
}

/** Advertiment sobre el que la xifra del costat no diu. */
export function Note({ children }: { children: React.ReactNode }) {
  return <p className={styles.note}>{children}</p>
}

export function Scroller({ children }: { children: React.ReactNode }) {
  return <div className={styles.scroller}>{children}</div>
}

type DiagramEdge = {
  fromName: string
  toName: string
  weight: number
}

/**
 * Diagrama bipartit de les cessions amb destinatari identificat.
 *
 * A l'esquerra qui envia, a la dreta qui rep, i el gruix del traç proporcional
 * al nombre de files de la matriu de dades que sustenten l'aresta. El diagrama
 * no substitueix mai la taula que ve a continuació: és la taula la que porta
 * les xifres.
 */
export function SharingDiagram({ edges }: { edges: readonly DiagramEdge[] }) {
  if (edges.length === 0) return null

  const senders = [...new Set(edges.map((edge) => edge.fromName))]
  const receivers = [...new Set(edges.map((edge) => edge.toName))]
  const rows = Math.max(senders.length, receivers.length)
  const rowHeight = 34
  const height = rows * rowHeight + 20
  const maxWeight = Math.max(...edges.map((edge) => edge.weight))

  const yOf = (list: string[], name: string): number => {
    const offset = ((rows - list.length) * rowHeight) / 2
    return offset + list.indexOf(name) * rowHeight + rowHeight / 2 + 10
  }

  return (
    <Scroller>
      <svg
        className={styles.diagram}
        viewBox={`0 0 620 ${height}`}
        width="620"
        height={height}
        role="img"
        aria-label={`Diagrama de ${edges.length} cessions entre empreses amb destinatari identificat. Les xifres són a la taula següent.`}
      >
        {edges.map((edge) => (
          <line
            key={`${edge.fromName}-${edge.toName}`}
            x1={198}
            y1={yOf(senders, edge.fromName)}
            x2={382}
            y2={yOf(receivers, edge.toName)}
            stroke="#5b86ae"
            strokeWidth={1 + (edge.weight / maxWeight) * 7}
            strokeLinecap="round"
            opacity={0.75}
          >
            <title>
              {edge.fromName} cedeix dades a {edge.toName}: {num(edge.weight)} files
            </title>
          </line>
        ))}
        {senders.map((name) => (
          <React.Fragment key={`from-${name}`}>
            <circle cx={198} cy={yOf(senders, name)} r={3.5} fill="#14508c" />
            <text
              x={188}
              y={yOf(senders, name) + 4}
              textAnchor="end"
              fontSize="11.5"
              fill="#1a1a1a"
            >
              {name}
            </text>
          </React.Fragment>
        ))}
        {receivers.map((name) => (
          <React.Fragment key={`to-${name}`}>
            <circle cx={382} cy={yOf(receivers, name)} r={3.5} fill="#14508c" />
            <text
              x={392}
              y={yOf(receivers, name) + 4}
              textAnchor="start"
              fontSize="11.5"
              fill="#1a1a1a"
            >
              {name}
            </text>
          </React.Fragment>
        ))}
        <text x={188} y={14} textAnchor="end" fontSize="10.5" fill="#5c5c5c">
          qui cedeix
        </text>
        <text x={392} y={14} textAnchor="start" fontSize="10.5" fill="#5c5c5c">
          qui rep
        </text>
      </svg>
    </Scroller>
  )
}

/** Peu de pàgina de cada pàgina de detall. */
export function BackToIndex() {
  return (
    <p className={styles.next}>
      <Link href="/analisi">Torna a l’índex de l’anàlisi</Link>
    </p>
  )
}
