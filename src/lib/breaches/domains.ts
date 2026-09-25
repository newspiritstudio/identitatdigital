/**
 * Dominis registrables, per lligar una filtració amb un servei.
 *
 * Les filtracions arriben amb un domini (`linkedin.com`) i les fitxes del
 * directori amb una adreça web (`https://www.linkedin.com/`). Es comparen pel
 * domini registrable: el que una persona pot registrar, sense subdominis.
 *
 * No s'inclou la llista pública de sufixos sencera (són centenars de kB); en
 * lloc d'això hi ha els sufixos de segon nivell que apareixen de debò als
 * catàlegs de filtracions. Un sufix que falti aquí fa que dos serveis diferents
 * d'un mateix `.co.xx` semblin el mateix; per això la coincidència per domini
 * es presenta sempre com a tal («per domini»), i no com una relació editorial.
 */

const SECOND_LEVEL_SUFFIXES = new Set([
  'co.uk',
  'org.uk',
  'ac.uk',
  'gov.uk',
  'com.au',
  'net.au',
  'org.au',
  'com.br',
  'com.mx',
  'com.ar',
  'com.tr',
  'com.cn',
  'com.tw',
  'com.hk',
  'com.sg',
  'com.my',
  'com.ph',
  'com.vn',
  'com.pk',
  'com.ua',
  'co.jp',
  'co.kr',
  'co.in',
  'co.id',
  'co.nz',
  'co.za',
  'co.il',
  'co.th',
  'gob.es',
  'com.es',
  'org.es',
  'cat.es',
])

/** Nom d'amfitrió en minúscules, sense `www.` ni port. `null` si no n'és un. */
export const hostOf = (value: string | null | undefined): string | null => {
  if (typeof value !== 'string') return null
  const trimmed = value.trim().toLowerCase()
  if (trimmed.length === 0) return null
  let host = trimmed
  if (/^[a-z][a-z0-9+.-]*:\/\//.test(trimmed)) {
    try {
      host = new URL(trimmed).hostname
    } catch {
      return null
    }
  } else {
    host = trimmed.split(/[/?#:]/)[0] ?? ''
  }
  host = host.replace(/^www\d*\./, '').replace(/\.$/, '')
  if (!/^[a-z0-9.-]+\.[a-z0-9-]{2,}$/.test(host)) return null
  return host
}

/** Domini registrable: `mail.google.co.uk` → `google.co.uk`. */
export const registrableDomain = (value: string | null | undefined): string | null => {
  const host = hostOf(value)
  if (host === null) return null
  const parts = host.split('.')
  if (parts.length <= 2) return host
  const lastTwo = parts.slice(-2).join('.')
  return SECOND_LEVEL_SUFFIXES.has(lastTwo) ? parts.slice(-3).join('.') : lastTwo
}
