import { at, compareText, localizedText, relationId, relationIds, type Corpus } from '@/lib/analysis'
import { DATA_CLASS_MAP } from '@/lib/breaches/dataClasses'
import { registrableDomain } from '@/lib/breaches/domains'

import { buildSnapshot } from '../diagnostic/snapshot'
import type { CredApp, CredDataType, CredIndex } from './types'

/**
 * Índex de l'eina de credencials. S'executa només al servidor.
 *
 * Fa servir la mateixa instantània que el diagnòstic perquè els lligams entre
 * filtracions i fitxes siguin exactament els mateixos a les dues eines: si el
 * diagnòstic diu que Canva té una filtració, la consulta per adreça ha de
 * reconèixer aquella mateixa filtració com la de Canva.
 */

const AUTH_CATEGORY = 'autenticacio-i-seguretat'

const safeUrl = (value: unknown): string | null => {
  if (typeof value !== 'string' || !/^https?:\/\//i.test(value.trim())) return null
  try {
    return new URL(value.trim()).toString()
  } catch {
    return null
  }
}

export const buildCredentialsIndex = (corpus: Corpus): CredIndex => {
  const snapshot = buildSnapshot(corpus)
  const bySlug = new Map(corpus.apps.map((app) => [app.slug, app]))

  const apps: CredApp[] = []
  const byBreachName: Record<string, number[]> = {}
  const byDomain: Record<string, number[]> = {}
  const add = (map: Record<string, number[]>, key: string, index: number) => {
    const list = (map[key] ??= [])
    if (!list.includes(index)) list.push(index)
  }

  for (const lite of snapshot.apps) {
    const index = apps.length
    const raw = bySlug.get(lite.slug)
    apps.push({
      slug: lite.slug,
      name: lite.name,
      company: lite.company.name,
      overall: lite.overall,
      mfa: {
        status: lite.controls.mfa.status,
        methods: lite.controls.mfa.methods,
        url: lite.controls.mfa.url,
      },
      securityUrl: safeUrl(at(raw, 'links.security')) ?? lite.controls.mfa.url,
      deletion: { url: lite.deletion.url, possible: lite.deletion.possible },
    })
    // Només els lligams editorials: el domini ja es compara a part, i així
    // la interfície pot dir de quina manera s'ha reconegut el servei.
    for (const link of lite.breaches) {
      if (link.match !== 'editorial') continue
      const breach = snapshot.breaches[link.index]
      if (!breach) continue
      add(byBreachName, breach.name.toLowerCase(), index)
      add(byBreachName, breach.title.toLowerCase(), index)
    }
    const website = at(raw, 'links.website')
    const domain = registrableDomain(typeof website === 'string' ? website : null)
    if (domain !== null) add(byDomain, domain, index)
  }

  const wanted = new Set(Object.values(DATA_CLASS_MAP).filter((slug): slug is string => slug !== null))
  const dataTypes: Record<string, CredDataType> = {}
  for (const dataType of corpus.dataTypes) {
    if (typeof dataType.slug !== 'string' || !wanted.has(dataType.slug)) continue
    dataTypes[dataType.slug] = {
      name: localizedText(dataType.name) ?? dataType.slug,
      sensitivity: typeof dataType.sensitivity === 'number' ? dataType.sensitivity : 0,
      special: dataType.specialCategory === true,
    }
  }

  const authCategory = corpus.categories.find((category) => category.slug === AUTH_CATEGORY)
  const authCategoryId = authCategory ? relationId(authCategory) : null
  const authenticators = corpus.apps
    .filter((app) => {
      if (authCategoryId === null || !relationIds(app.categories).includes(authCategoryId)) return false
      // Les aplicacions de codis temporals són les que serveixen de segon factor
      // per a qualsevol servei; la resta de la categoria (certificats, VPN) no.
      return /authenticator|autenticador/i.test(app.slug)
    })
    .map((app) => ({
      slug: app.slug,
      name: localizedText(app.name) ?? app.slug,
      overall: typeof at(app, 'scores.overall') === 'number' ? (at(app, 'scores.overall') as number) : null,
    }))
    .sort((a, b) => (b.overall ?? -1) - (a.overall ?? -1) || compareText(a.name, b.name))

  return { apps, byBreachName, byDomain, dataTypes, authenticators }
}
