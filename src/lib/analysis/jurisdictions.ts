import {
  at,
  compareText,
  factStatus,
  localizedText,
  percentage,
  relationId,
  tallyStatuses,
  type AppRef,
  type Corpus,
  type StatusTally,
} from './corpus'
import { resolveOwnershipChain } from './groups'

/**
 * Jurisdiccions, seus i transferències internacionals.
 *
 * La jurisdicció decideix quins drets es poden exercir de veritat i davant de
 * qui. Mirada fitxa a fitxa sembla un tecnicisme del peu de pàgina; mirada de
 * cop explica per què tants procediments acaben sempre a la mateixa autoritat.
 */

export const TRANSFER_MECHANISMS = [
  'adequacy',
  'sccs',
  'bcrs',
  'derogation',
  'none',
  'unknown',
] as const
export type TransferMechanism = (typeof TRANSFER_MECHANISMS)[number]

export const TRANSFER_MECHANISM_LABELS: Record<TransferMechanism, string> = {
  adequacy: 'Decisió d’adequació',
  sccs: 'Clàusules contractuals tipus',
  bcrs: 'Normes corporatives vinculants',
  derogation: 'Consentiment o excepció',
  none: 'Sense transferències',
  unknown: 'Desconegut',
}

export type JurisdictionCount = {
  /** Jurisdicció normalitzada: la part principal de la declaració. */
  jurisdiction: string
  apps: number
  share: number
  /** Redaccions completes que s'han agrupat sota aquesta jurisdicció. */
  variants: string[]
  appList: AppRef[]
}

export type CountryCount = {
  /** Codi o nom del país tal com el declara l'empresa. */
  country: string
  apps: number
  share: number
  /** Fitxes on el país surt de la matriu perquè l'empresa responsable no el declara. */
  fromParent: number
}

export type JurisdictionsAnalysis = {
  byJurisdiction: JurisdictionCount[]
  /** Fitxes sense jurisdicció declarada. */
  jurisdictionUnknown: number
  byHeadquartersCountry: CountryCount[]
  /** Fitxes on no hem pogut esbrinar el país de la seu, ni pujant per la matriu. */
  headquartersUnknown: number
  /** Tres estats de l'afirmació sobre transferències internacionals. */
  transfers: StatusTally
  /** Fitxes amb transferències documentades (sí o parcialment). */
  appsWithTransfers: number
  /** Percentatge sobre el total publicat. */
  transferShare: number
  /** Mecanisme declarat, només per a les fitxes amb transferències documentades. */
  byMechanism: { mechanism: TransferMechanism; label: string; apps: number }[]
  /**
   * Fitxes amb transferències documentades però sense mecanisme declarat. És un
   * buit de documentació, no una absència de mecanisme.
   */
  transfersWithoutMechanism: number
}

/**
 * Part principal d'una jurisdicció declarada.
 *
 * El camp és text lliure i les fitxes hi escriuen coses com «Irlanda, per a
 * persones usuàries de l'Espai Econòmic Europeu». Agrupem per la part anterior
 * a la primera coma, que és el que identifica el fur, i guardem les redaccions
 * senceres a `variants` perquè el matís no es perdi. Agrupar per la cadena
 * completa donaria vint grups d'un element i cap conclusió.
 */
export const primaryJurisdiction = (value: unknown): string | null => {
  const text = localizedText(value)
  if (text === null) return null
  const head = text.split(',')[0].replace(/\s+/g, ' ').trim()
  return head.length > 0 ? head : null
}

const mechanismOf = (value: unknown): TransferMechanism | null =>
  typeof value === 'string' && (TRANSFER_MECHANISMS as readonly string[]).includes(value)
    ? (value as TransferMechanism)
    : null

export const analyseJurisdictions = (corpus: Corpus): JurisdictionsAnalysis => {
  const jurisdictions = new Map<string, { apps: AppRef[]; variants: Set<string> }>()
  const countries = new Map<string, { apps: number; fromParent: number }>()
  const mechanisms = new Map<TransferMechanism, number>()

  let jurisdictionUnknown = 0
  let headquartersUnknown = 0
  let transfersWithoutMechanism = 0

  for (const app of corpus.apps) {
    const reference: AppRef = {
      id: relationId(app) ?? '',
      name: localizedText(app.name) ?? '(sense nom)',
      slug: typeof app.slug === 'string' ? app.slug : '',
    }

    /* Jurisdicció declarada a la fitxa. */
    const jurisdiction = primaryJurisdiction(app.jurisdiction)
    if (jurisdiction === null) jurisdictionUnknown += 1
    else {
      let bucket = jurisdictions.get(jurisdiction)
      if (!bucket) {
        bucket = { apps: [], variants: new Set<string>() }
        jurisdictions.set(jurisdiction, bucket)
      }
      bucket.apps.push(reference)
      const full = localizedText(app.jurisdiction)
      if (full !== null) bucket.variants.add(full.replace(/\s+/g, ' ').trim())
    }

    /* País de la seu.
     *
     * Moltes fitxes pengen d'una filial europea creada per fer de responsable
     * del tractament, i el país que hi consta és el de la filial. Quan la filial
     * no declara país, pugem per la cadena de matrius fins a trobar-ne un i ho
     * marquem a `fromParent`: és una dada derivada, no declarada. */
    const companyId = relationId(app.company)
    let country: string | null = null
    let fromParent = false
    if (companyId !== null) {
      const chain = resolveOwnershipChain(companyId, corpus.companyById).chain
      for (let index = 0; index < chain.length; index += 1) {
        const company = corpus.companyById.get(chain[index])
        const declared = company?.headquartersCountry
        if (typeof declared === 'string' && declared.trim().length > 0) {
          country = declared.trim()
          fromParent = index > 0
          break
        }
      }
    }
    if (country === null) headquartersUnknown += 1
    else {
      const bucket = countries.get(country) ?? { apps: 0, fromParent: 0 }
      bucket.apps += 1
      if (fromParent) bucket.fromParent += 1
      countries.set(country, bucket)
    }

    /* Transferències internacionals. */
    const fact = at(app, 'sharing.internationalTransfers')
    const status = factStatus(fact)
    if (status === 'yes' || status === 'partial') {
      const mechanism = mechanismOf(at(fact, 'mechanism'))
      if (mechanism === null || mechanism === 'unknown') transfersWithoutMechanism += 1
      if (mechanism !== null) mechanisms.set(mechanism, (mechanisms.get(mechanism) ?? 0) + 1)
    }
  }

  const transfers = tallyStatuses(
    corpus.apps.map((app) => factStatus(at(app, 'sharing.internationalTransfers'))),
  )
  const appsWithTransfers = transfers.yes + transfers.partial

  const byJurisdiction: JurisdictionCount[] = [...jurisdictions.entries()]
    .map(([jurisdiction, bucket]) => ({
      jurisdiction,
      apps: bucket.apps.length,
      share: percentage(bucket.apps.length, corpus.apps.length),
      variants: [...bucket.variants].sort(compareText),
      appList: [...bucket.apps].sort(
        (a, b) => compareText(a.name, b.name) || compareText(a.id, b.id),
      ),
    }))
    .sort((a, b) => b.apps - a.apps || compareText(a.jurisdiction, b.jurisdiction))

  const byHeadquartersCountry: CountryCount[] = [...countries.entries()]
    .map(([country, bucket]) => ({
      country,
      apps: bucket.apps,
      share: percentage(bucket.apps, corpus.apps.length),
      fromParent: bucket.fromParent,
    }))
    .sort((a, b) => b.apps - a.apps || compareText(a.country, b.country))

  const byMechanism = [...mechanisms.entries()]
    .map(([mechanism, apps]) => ({
      mechanism,
      label: TRANSFER_MECHANISM_LABELS[mechanism],
      apps,
    }))
    .sort((a, b) => b.apps - a.apps || compareText(a.mechanism, b.mechanism))

  return {
    byJurisdiction,
    jurisdictionUnknown,
    byHeadquartersCountry,
    headquartersUnknown,
    transfers,
    appsWithTransfers,
    transferShare: percentage(appsWithTransfers, corpus.apps.length),
    byMechanism,
    transfersWithoutMechanism,
  }
}
