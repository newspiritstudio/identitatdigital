/**
 * El català és l'única llengua editorial de la fase 1, però la localització de
 * Payload ja està activada amb els codis previstos. Afegir castellà o anglès
 * més endavant és omplir traduccions, no reconstruir el model de dades.
 */
export const locales = ['ca', 'es', 'en'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'ca'

export const localeLabels: Record<Locale, string> = {
  ca: 'Català',
  es: 'Español',
  en: 'English',
}

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)
