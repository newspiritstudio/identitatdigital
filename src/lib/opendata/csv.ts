/**
 * Serialització CSV conforme a l'RFC 4180.
 *
 * Decisions, perquè un CSV mal fet és pitjor que no publicar-ne cap:
 *
 *  - **Separador coma.** És el que diu l'RFC. El punt i coma és una convenció
 *    d'Excel en configuracions regionals europees, no un estàndard.
 *  - **Marca d'ordre de bytes al davant.** Sense ella, Excel obre el fitxer
 *    com a Latin-1 i tots els accents queden trencats. Qui reutilitzi aquestes
 *    dades ho farà sovint amb un full de càlcul: publicar un CSV que es veu
 *    malament al programa que farà servir la majoria de gent no és publicar-lo.
 *    Les biblioteques serioses (`pandas`, `csv` de Python amb `utf-8-sig`, R)
 *    la salten sense dir res.
 *  - **Fi de línia CRLF.** També és el que diu l'RFC.
 *  - **Llistes separades per barra vertical.** Un camp amb diversos valors
 *    (categories, plataformes, fonts) es representa `a|b|c`. La barra vertical
 *    no apareix a cap valor del corpus i no obliga a niar cometes.
 *  - **Buit vol dir buit, no zero.** Un valor absent surt com a camp buit i mai
 *    com a `0`, `false` o `«desconegut»`: aquest projecte no pot permetre's
 *    que una exportació confongui «no ho sabem» amb «no».
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
