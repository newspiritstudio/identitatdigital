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

export function TableWrap({ children }: { children: React.ReactNode }) {
  return <div className={styles.tableWrap}>{children}</div>
}

export function Resum({ children }: { children: React.ReactNode }) {
  return <div className={styles.resum}>{children}</div>
}

export function Avis({ children }: { children: React.ReactNode }) {
  return <div className={styles.avis}>{children}</div>
}
