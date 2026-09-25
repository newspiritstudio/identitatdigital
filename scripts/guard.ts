/**
 * Els scripts que sobreescriuen contingut editorial (seed, importacions) són
 * per a la base de dades local. Contra producció desfarien el que la redacció
 * ha corregit al panell, així que s'hi neguen si no se'ls ho demana
 * explícitament amb `--production`.
 */
export const refuseOutsideLocal = (script: string): void => {
  if (process.argv.includes('--production')) return

  let host = ''
  try {
    host = new URL(process.env.APP_URL ?? '').hostname
  } catch {
    // Sense APP_URL vàlida no es pot saber on som: millor aturar-se.
  }
  const local = ['localhost', '127.0.0.1', '::1'].includes(host)
  if (local && process.env.NODE_ENV !== 'production') return

  console.error(
    `✋ ${script} sobreescriu dades editorials i només s'executa en local ` +
      `(APP_URL=${host || 'buida'}). Si de debò és el que vols, afegeix --production.`,
  )
  process.exit(1)
}
