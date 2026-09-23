import {
  at,
  compareText,
  factStatus,
  localizedText,
  median,
  percentage,
  relationId,
  tallyStatuses,
  type AppRef,
  type Corpus,
  type StatusTally,
} from './corpus'

/**
 * Com se surt de cada servei: dificultat declarada, passos, període d'espera i
 * què es conserva després.
 */

export const DELETION_DIFFICULTIES = ['easy', 'medium', 'hard', 'impossible'] as const
export type DeletionDifficulty = (typeof DELETION_DIFFICULTIES)[number]

export const DELETION_DIFFICULTY_LABELS: Record<DeletionDifficulty, string> = {
  easy: 'Fàcil',
  medium: 'Mitjana',
  hard: 'Difícil',
  impossible: 'Impossible',
}

/**
 * Trams del període d'espera. El tall dels trenta dies no és arbitrari: és el
 * que fan servir la majoria de plataformes com a «període de gràcia» i el que
 * marca la frontera entre un tràmit i una espera.
 */
export const WAITING_BUCKETS = [
  { key: 'immediate', label: 'Immediata', min: 0, max: 0 },
  { key: 'week', label: 'Fins a 7 dies', min: 1, max: 7 },
  { key: 'month', label: 'De 8 a 30 dies', min: 8, max: 30 },
  { key: 'quarter', label: 'De 31 a 90 dies', min: 31, max: 90 },
  { key: 'long', label: 'Més de 90 dies', min: 91, max: Number.POSITIVE_INFINITY },
] as const
export type WaitingBucketKey = (typeof WAITING_BUCKETS)[number]['key']

export type WaitingBucketCount = {
  key: WaitingBucketKey
  label: string
  apps: number
}

export type DeletionAnalysis = {
  appsConsidered: number

  /** Tres estats de «es pot eliminar el compte». */
  possible: StatusTally
  /** Tres estats de «es pot fer sense contactar amb suport». */
  selfService: StatusTally

  /** Repartiment de la dificultat declarada. */
  byDifficulty: { difficulty: DeletionDifficulty; label: string; apps: number; share: number }[]
  /** Fitxes sense dificultat declarada. */
  difficultyUnknown: number

  /**
   * Fitxes que declaren que cal escriure a suport.
   *
   * El camp és una casella de verificació i, per tant, no té estat
   * «desconegut»: una casella desmarcada pot voler dir «no cal» o «no ho hem
   * mirat». Per això el senyal honest és `selfService`, que sí que distingeix
   * els tres estats, i aquest recompte s'ha de llegir com a mínim documentat.
   */
  requiresSupportContact: number
  /** Fitxes on la casella de suport està marcada però `selfService` diu «sí». */
  supportContradictions: number

  /** Fitxes amb enllaç directe al procés d'eliminació. */
  withDirectUrl: number
  /** Fitxes amb passos documentats. */
  withDocumentedSteps: number
  /** Mitjana de passos documentats, entre les fitxes que en tenen. */
  medianSteps: number | null

  waiting: WaitingBucketCount[]
  waitingUnknown: number
  medianWaitingDays: number | null
  maxWaitingDays: number | null

  /** Tres estats de «conserva dades després d'eliminar el compte». */
  dataAfterDeletion: StatusTally
  /** Fitxes que expliquen per escrit què es queden. */
  withRetainedDataDescription: number

  /** Les fitxes on marxar costa més, per ordre de dificultat. */
  hardestToLeave: (AppRef & {
    difficulty: DeletionDifficulty | null
    waitingPeriodDays: number | null
    requiresSupportContact: boolean
    steps: number
  })[]
}

const difficultyOf = (value: unknown): DeletionDifficulty | null =>
  typeof value === 'string' && (DELETION_DIFFICULTIES as readonly string[]).includes(value)
    ? (value as DeletionDifficulty)
    : null

/** Ordre de duresa per ordenar les fitxes de més costosa a menys. */
const DIFFICULTY_RANK: Record<DeletionDifficulty, number> = {
  impossible: 4,
  hard: 3,
  medium: 2,
  easy: 1,
}

export const analyseDeletion = (corpus: Corpus): DeletionAnalysis => {
  const byDifficulty = new Map<DeletionDifficulty, number>()
  const waitingCounts = new Map<WaitingBucketKey, number>()
  const waitingValues: number[] = []
  const stepCounts: number[] = []

  let difficultyUnknown = 0
  let waitingUnknown = 0
  let requiresSupportContact = 0
  let supportContradictions = 0
  let withDirectUrl = 0
  let withDocumentedSteps = 0
  let withRetainedDataDescription = 0

  const hardestToLeave: DeletionAnalysis['hardestToLeave'] = []

  for (const app of corpus.apps) {
    const deletion = at(app, 'accountDeletion')

    const difficulty = difficultyOf(at(deletion, 'difficulty'))
    if (difficulty === null) difficultyUnknown += 1
    else byDifficulty.set(difficulty, (byDifficulty.get(difficulty) ?? 0) + 1)

    const days = at(deletion, 'waitingPeriodDays')
    let waitingPeriodDays: number | null = null
    if (typeof days === 'number' && Number.isFinite(days) && days >= 0) {
      waitingPeriodDays = days
      waitingValues.push(days)
      const bucket = WAITING_BUCKETS.find((candidate) => days >= candidate.min && days <= candidate.max)
      if (bucket) waitingCounts.set(bucket.key, (waitingCounts.get(bucket.key) ?? 0) + 1)
    } else {
      waitingUnknown += 1
    }

    const support = at(deletion, 'requiresSupportContact') === true
    if (support) {
      requiresSupportContact += 1
      if (factStatus(at(deletion, 'selfService')) === 'yes') supportContradictions += 1
    }

    const directUrl = at(deletion, 'directUrl') ?? at(app, 'links.deleteAccount')
    if (typeof directUrl === 'string' && directUrl.trim().length > 0) withDirectUrl += 1

    const steps = at(deletion, 'steps')
    const stepCount = Array.isArray(steps) ? steps.length : 0
    if (stepCount > 0) {
      withDocumentedSteps += 1
      stepCounts.push(stepCount)
    }

    if (localizedText(at(deletion, 'dataRetained')) !== null) withRetainedDataDescription += 1

    hardestToLeave.push({
      id: relationId(app) ?? '',
      name: localizedText(app.name) ?? '(sense nom)',
      slug: typeof app.slug === 'string' ? app.slug : '',
      difficulty,
      waitingPeriodDays,
      requiresSupportContact: support,
      steps: stepCount,
    })
  }

  // Les fitxes sense dificultat declarada queden al final: no sabem si costa o
  // no, i posar-les al mig seria donar-los una posició que no ens consta.
  hardestToLeave.sort((a, b) => {
    const rankA = a.difficulty === null ? 0 : DIFFICULTY_RANK[a.difficulty]
    const rankB = b.difficulty === null ? 0 : DIFFICULTY_RANK[b.difficulty]
    return (
      rankB - rankA ||
      (b.waitingPeriodDays ?? -1) - (a.waitingPeriodDays ?? -1) ||
      Number(b.requiresSupportContact) - Number(a.requiresSupportContact) ||
      compareText(a.name, b.name) ||
      compareText(a.id, b.id)
    )
  })

  return {
    appsConsidered: corpus.apps.length,
    possible: tallyStatuses(
      corpus.apps.map((app) => factStatus(at(app, 'accountDeletion.possible'))),
    ),
    selfService: tallyStatuses(
      corpus.apps.map((app) => factStatus(at(app, 'accountDeletion.selfService'))),
    ),
    byDifficulty: DELETION_DIFFICULTIES.map((difficulty) => ({
      difficulty,
      label: DELETION_DIFFICULTY_LABELS[difficulty],
      apps: byDifficulty.get(difficulty) ?? 0,
      share: percentage(byDifficulty.get(difficulty) ?? 0, corpus.apps.length),
    })),
    difficultyUnknown,
    requiresSupportContact,
    supportContradictions,
    withDirectUrl,
    withDocumentedSteps,
    medianSteps: median(stepCounts),
    waiting: WAITING_BUCKETS.map((bucket) => ({
      key: bucket.key,
      label: bucket.label,
      apps: waitingCounts.get(bucket.key) ?? 0,
    })),
    waitingUnknown,
    medianWaitingDays: median(waitingValues),
    maxWaitingDays: waitingValues.length > 0 ? Math.max(...waitingValues) : null,
    dataAfterDeletion: tallyStatuses(
      corpus.apps.map((app) => factStatus(at(app, 'retention.dataAfterDeletion'))),
    ),
    withRetainedDataDescription,
    hardestToLeave,
  }
}
