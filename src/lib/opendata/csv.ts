/**
 * Serialització CSV conforme a l'RFC 4180.
 *
 * Decisions de format:
 *
 *  - Separador coma i fi de línia CRLF, que és el que diu l'RFC. El punt i
 *    coma és una convenció d'Excel en configuracions europees.
 *  - Marca d'ordre de bytes al davant. Sense ella l'Excel obre el fitxer com a
 *    Latin-1 i trenca tots els accents; `pandas`, el `csv` de Python amb
 *    `utf-8-sig` i R la salten sense dir res.
 *  - Els camps amb diversos valors (categories, plataformes, fonts) es
 *    representen `a|b|c`. La barra vertical no apareix a cap valor del corpus.
 *  - Un valor absent surt com a camp buit, mai com a `0`, `false` o
 *    «desconegut».
 */

const CRLF = '\r\n'
const BOM = '﻿'

/** Un valor de cel·la abans de convertir-lo a text. */
export type CellValue = string | number | boolean | null | undefined | readonly string[]

export const cellToText = (value: CellValue): string => {
  if (value === null || value === undefined) return ''
  if (Array.isArray(value)) return value.join('|')
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  if (typeof value === 'number') return Number.isFinite(value) ? String(value) : ''
  return String(value)
}

/** Encotilla un camp només quan cal, tal com demana l'RFC. */
const quote = (text: string): string =>
  /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text

export const toCsv = (
  columns: readonly string[],
  rows: ReadonlyArray<Record<string, CellValue>>,
): string => {
  const lines = [columns.map(quote).join(',')]
  for (const row of rows) {
    lines.push(columns.map((column) => quote(cellToText(row[column]))).join(','))
  }
  return BOM + lines.join(CRLF) + CRLF
}
