import React from 'react'

import styles from './legal.module.css'

/**
 * Peces compartides pels documents legals.
 *
 * No són components de disseny: són la manera d'aconseguir que tots els
 * documents datin igual, marquin igual el que encara no sabem i deixin les
 * taules amples utilitzables en una pantalla estreta.
 */

export function DocMeta({ version, updated }: { version: string; updated: string }) {
  return (
    <p className={styles.docMeta}>
      Versió {version} · Darrera actualització: {updated}
    </p>
  )
}

/**
 * Informació que encara no tenim confirmada. Es marca sempre igual perquè es
 * pugui trobar amb una cerca i perquè qui llegeix sàpiga que hi ha un buit.
 */
export function Pendent({ children }: { children: React.ReactNode }) {
  return <mark className={styles.pendent}>[PENDENT: {children}]</mark>
}

/**
 * Contenidor desplaçable per a les taules dels documents legals. Focalitzable
 * amb teclat (WCAG 2.1.1) i amb nom de regió quan se li dona, perquè el lector
 * de pantalla pugui dir on ha entrat el focus.
 */
export function TableWrap({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div
      aria-label={label}
      className={styles.tableWrap}
      role={label === undefined ? undefined : 'region'}
      tabIndex={0}
    >
      {children}
    </div>
  )
}

export function Resum({ children }: { children: React.ReactNode }) {
  return <div className={styles.resum}>{children}</div>
}

export function Avis({ children }: { children: React.ReactNode }) {
  return <div className={styles.avis}>{children}</div>
}
