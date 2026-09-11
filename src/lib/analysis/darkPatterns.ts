import type { EvidenceStatus } from '@/fields/evidence'

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

/**
 * Patrons enganyosos documentats a tot el directori.
 *
 * Aquest mòdul té una trampa fàcil d'evitar i fàcil de caure-hi: comptar les
 * fitxes sense patrons documentats com a fitxes netes. La majoria de vegades el
 * que vol dir una llista buida és que ningú no ha mirat la interfície amb prou
 * atenció. Per això el recompte per tipus i el recompte d'estats van sempre
 * junts: el primer diu què hem trobat, el segon diu on hem mirat.
 */

export const DARK_PATTERN_TYPES = [
  'unbalanced-consent',
  'hidden-exit',
  'nagging',
  'confusing-language',
  'preselected',
  'confirmshaming',
  'other',
] as const
export type DarkPatternType = (typeof DARK_PATTERN_TYPES)[number]

export const DARK_PATTERN_TYPE_LABELS: Record<DarkPatternType, string> = {
  'unbalanced-consent': 'Consentiment desequilibrat',
  'hidden-exit': 'Camí de sortida amagat',
  nagging: 'Insistència repetida',
  'confusing-language': 'Llenguatge confús',
  preselected: 'Opcions preseleccionades',
  confirmshaming: 'Culpabilització',
  other: 'Altres',
}

export const DARK_PATTERN_SEVERITIES = ['low', 'medium', 'high'] as const
export type DarkPatternSeverity = (typeof DARK_PATTERN_SEVERITIES)[number]

export const DARK_PATTERN_SEVERITY_LABELS: Record<DarkPatternSeverity, string> = {
  low: 'Baixa',
  medium: 'Mitjana',
  high: 'Alta',
}

/** Pes de cada gravetat per ordenar les fitxes. Tres patrons lleus no són un de greu. */
const SEVERITY_WEIGHT: Record<DarkPatternSeverity, number> = { low: 1, medium: 2, high: 3 }

export type DarkPatternTypeCount = {
  type: DarkPatternType | 'unspecified'
  label: string
  /** Patrons documentats d'aquest tipus. */
  occurrences: number
  /** Fitxes diferents on apareix. */
  apps: number
  high: number
  medium: number
  low: number
  /** Patrons d'aquest tipus sense gravetat declarada. */
  unspecifiedSeverity: number
}

export type DarkPatternApp = AppRef & {
  patterns: number
  high: number
  medium: number
  low: number
  unspecifiedSeverity: number
  /** Suma ponderada per gravetat; és el criteri d'ordenació. */
  weighted: number
  /** Estat de l'afirmació «aquesta fitxa té patrons enganyosos». */
  claim: EvidenceStatus
}

export type DarkPatternsAnalysis = {
  /** Tres estats de l'afirmació a tot el corpus: en té, no en té, no ho sabem. */
  claims: StatusTally
  /** Fitxes que afirmen tenir-ne (sí o parcialment). */
  appsWithPatterns: number
  /** Fitxes on hem comprovat que no n'hi ha. */
  appsWithoutPatterns: number
  /** Fitxes on no ho hem mirat. Ni bones ni dolentes: pendents. */
  appsUnknown: number
  /** Fitxes on l'indicador no aplica. */
  appsNotApplicable: number
  /**
   * Fitxes que afirmen tenir patrons però no en documenten cap. És el deute de
   * documentació que aquest mòdul serveix per detectar.
   */
  appsClaimingWithoutList: number
  totalPatterns: number
  byType: DarkPatternTypeCount[]
  bySeverity: Record<DarkPatternSeverity | 'unspecified', number>
  /** Fitxes ordenades per concentració de patrons. */
  topApps: DarkPatternApp[]
  /** Percentatge de fitxes amb patrons documentats sobre el total publicat. */
  shareWithPatterns: number
}

const patternType = (value: unknown): DarkPatternType | 'unspecified' =>
  typeof value === 'string' && (DARK_PATTERN_TYPES as readonly string[]).includes(value)
    ? (value as DarkPatternType)
    : 'unspecified'

const patternSeverity = (value: unknown): DarkPatternSeverity | 'unspecified' =>
  value === 'low' || value === 'medium' || value === 'high' ? value : 'unspecified'

export const analyseDarkPatterns = (corpus: Corpus): DarkPatternsAnalysis => {
  const claims = tallyStatuses(
    corpus.apps.map((app) => factStatus(at(app, 'controls.darkPatterns'))),
  )

  const byType = new Map<
    DarkPatternType | 'unspecified',
    { occurrences: number; apps: Set<string>; high: number; medium: number; low: number; unspecified: number }
  >()
  const bySeverity: Record<DarkPatternSeverity | 'unspecified', number> = {
    low: 0,
    medium: 0,
    high: 0,
    unspecified: 0,
  }

  const topApps: DarkPatternApp[] = []
  let totalPatterns = 0
  let appsClaimingWithoutList = 0

  for (const app of corpus.apps) {
    const appId = relationId(app) ?? ''
    const claim = factStatus(at(app, 'controls.darkPatterns'))
    const list = at(app, 'controls.darkPatternList')
    const patterns = Array.isArray(list) ? list : []

    if ((claim === 'yes' || claim === 'partial') && patterns.length === 0) {
      appsClaimingWithoutList += 1
    }
    if (patterns.length === 0) continue

    let high = 0
    let medium = 0
    let low = 0
    let unspecified = 0

    for (const pattern of patterns) {
      totalPatterns += 1
      const type = patternType(at(pattern, 'type'))
      const severity = patternSeverity(at(pattern, 'severity'))
      bySeverity[severity] += 1
      if (severity === 'high') high += 1
      else if (severity === 'medium') medium += 1
      else if (severity === 'low') low += 1
      else unspecified += 1

      let bucket = byType.get(type)
      if (!bucket) {
        bucket = { occurrences: 0, apps: new Set<string>(), high: 0, medium: 0, low: 0, unspecified: 0 }
        byType.set(type, bucket)
      }
      bucket.occurrences += 1
      bucket.apps.add(appId)
      if (severity === 'high') bucket.high += 1
      else if (severity === 'medium') bucket.medium += 1
      else if (severity === 'low') bucket.low += 1
      else bucket.unspecified += 1
    }

    topApps.push({
      id: appId,
      name: localizedText(app.name) ?? '(sense nom)',
      slug: typeof app.slug === 'string' ? app.slug : '',
      patterns: patterns.length,
      high,
      medium,
      low,
      unspecifiedSeverity: unspecified,
      weighted:
        high * SEVERITY_WEIGHT.high + medium * SEVERITY_WEIGHT.medium + low * SEVERITY_WEIGHT.low,
      claim,
    })
  }

  const typeRows: DarkPatternTypeCount[] = [...byType.entries()]
    .map(([type, bucket]) => ({
      type,
      label:
        type === 'unspecified'
          ? 'Sense tipus declarat'
          : DARK_PATTERN_TYPE_LABELS[type],
      occurrences: bucket.occurrences,
      apps: bucket.apps.size,
      high: bucket.high,
      medium: bucket.medium,
      low: bucket.low,
      unspecifiedSeverity: bucket.unspecified,
    }))
    .sort(
      (a, b) =>
        b.occurrences - a.occurrences ||
        b.apps - a.apps ||
        b.high - a.high ||
        compareText(a.label, b.label),
    )

  topApps.sort(
    (a, b) =>
      b.weighted - a.weighted ||
      b.patterns - a.patterns ||
      compareText(a.name, b.name) ||
      compareText(a.id, b.id),
  )

  const appsWithPatterns = claims.yes + claims.partial
  return {
    claims,
    appsWithPatterns,
    appsWithoutPatterns: claims.no,
    appsUnknown: claims.unknown,
    appsNotApplicable: claims.na,
    appsClaimingWithoutList,
    totalPatterns,
    byType: typeRows,
    bySeverity,
    topApps,
    shareWithPatterns: percentage(appsWithPatterns, corpus.apps.length),
  }
}
