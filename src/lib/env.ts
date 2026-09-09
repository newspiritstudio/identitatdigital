/**
 * Lectura centralitzada de la configuració d'entorn.
 *
 * El projecte falla d'hora i amb un missatge clar quan falta una variable
 * imprescindible: una base de coneixement que arrenca contra una base de dades
 * equivocada és pitjor que una que no arrenca.
 */

const REQUIRED_VARS = ['DATABASE_URI', 'PAYLOAD_SECRET', 'APP_URL'] as const

type RequiredVar = (typeof REQUIRED_VARS)[number]

const missing = REQUIRED_VARS.filter((key) => !process.env[key])

if (missing.length > 0 && process.env.NODE_ENV !== 'test') {
  const message = `Falten variables d'entorn obligatòries: ${missing.join(', ')}`
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn(`Avís: ${message}`)
  } else {
    throw new Error(message)
  }
}

const get = (key: RequiredVar): string => {
  const value = process.env[key]
  if (!value) {
    if (process.env.NODE_ENV === 'test') return ''
    throw new Error(`La variable d'entorn ${key} és obligatòria i està buida.`)
  }
  return value
}

const payloadSecret = get('PAYLOAD_SECRET')
if (payloadSecret && payloadSecret.length < 32 && process.env.NODE_ENV !== 'test') {
  throw new Error('PAYLOAD_SECRET ha de tenir com a mínim 32 caràcters.')
}

const appUrl = get('APP_URL')
if (appUrl) {
  const parsed = new URL(appUrl)
  if (!['http:', 'https:'].includes(parsed.protocol)) {
    throw new Error("APP_URL ha d'utilitzar el protocol http o https.")
  }
  const isLocal = ['localhost', '127.0.0.1', '::1'].includes(parsed.hostname)
  if (process.env.NODE_ENV === 'production' && parsed.protocol !== 'https:' && !isLocal) {
    throw new Error("APP_URL ha d'utilitzar https en producció.")
  }
}

export const env = {
  databaseUri: get('DATABASE_URI'),
  payloadSecret,
  appUrl,
  publicAppUrl: process.env.NEXT_PUBLIC_APP_URL || appUrl,
}
