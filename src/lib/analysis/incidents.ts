import type { Incident } from '@/payload-types'

import {
  at,
  compareText,
  localizedText,
  relationId,
  type Corpus,
} from './corpus'
import { ultimateParentId } from './groups'

/**
 * Incidents, sancions i filtracions.
 *
 * Vist fitxa a fitxa, un incident és una anècdota amb data. Vist de conjunt,
 * el que apareix és un patró de reincidència i una concentració de sancions en
 * molt poques cases. Aquest mòdul no puntua res —de la puntuació se'n cuida
 * `src/lib/scoring`— i es limita a comptar.
 */

export const INCIDENT_TYPES = [
  'breach',
  'leak',
  'scraping',
  'regulatory-fine',
  'regulatory-order',
  'misuse',
  'vulnerability',
  'other',
] as const
export type IncidentType = (typeof INCIDENT_TYPES)[number]

export const INCIDENT_TYPE_LABELS: Record<IncidentType, string> = {
  breach: 'Bretxa de seguretat',
  leak: 'Exposició o filtració',
  scraping: 'Recol·lecció massiva',
  'regulatory-fine': 'Sanció d’un regulador',
  'regulatory-order': 'Resolució o requeriment',
  misuse: 'Ús indegut de dades',
  vulnerability: 'Vulnerabilitat greu',
  other: 'Altres',
}

export const INCIDENT_SEVERITIES = ['low', 'medium', 'high', 'critical'] as const
export type IncidentSeverity = (typeof INCIDENT_SEVERITIES)[number]

export const INCIDENT_SEVERITY_LABELS: Record<IncidentSeverity, string> = {
  low: 'Baixa',
  medium: 'Mitjana',
  high: 'Alta',
  critical: 'Crítica',
}

export const FINE_STATUSES = ['final', 'appealed', 'overturned', 'ongoing'] as const
export type FineStatus = (typeof FINE_STATUSES)[number]

export const FINE_STATUS_LABELS: Record<FineStatus, string> = {
  final: 'Ferma',
  appealed: 'Recorreguda',
  overturned: 'Anul·lada o reduïda',
  ongoing: 'En tramitació',
}

export type IncidentCompanyRow = {
  companyId: string
  name: string
  /** Matriu última: permet llegir la taula per grup en comptes de per filial. */
  groupId: string
  groupName: string
  incidents: number
  /** Import anunciat de les sancions, sumant només les xifres conegudes. */
  finesEur: number
  /** Incidents amb sanció però sense import documentat. */
  finesWithoutAmount: number
  bySeverity: Record<IncidentSeverity, number>
}

export type IncidentGroupRow = {
  groupId: string
  groupName: string
  incidents: number
  finesEur: number
  companies: number
}

export type IncidentYearRow = {
  year: number
  incidents: number
  finesEur: number
}

export type BreachSummary = {
  /** Filtracions importades. Zero vol dir «encara no n'hem importat cap». */
  total: number
  /** Comptes afectats sumats, quan la font en dona xifra. */
  accountsAffected: number
  /** Filtracions sense xifra de comptes afectats. */
  withoutAccountCount: number
  /** Filtracions lligades a una empresa del directori. */
  linkedToCompany: number
  /** Filtracions lligades a alguna fitxa. */
  linkedToApp: number
  /** Filtracions promogudes a incident editorial. */
  promotedToIncident: number
  /** Filtracions marcades com a verificades per la font. */
  verified: number
  byYear: { year: number; breaches: number; accountsAffected: number }[]
}

export type IncidentsAnalysis = {
  total: number
  byType: { type: IncidentType | 'unspecified'; label: string; incidents: number; finesEur: number }[]
  bySeverity: { severity: IncidentSeverity | 'unspecified'; label: string; incidents: number }[]
  byCompany: IncidentCompanyRow[]
  byGroup: IncidentGroupRow[]
  byYear: IncidentYearRow[]
  /** Incidents sense data vàlida, fora de la sèrie temporal. */
  undated: number
  /** Incidents que no hem pogut atribuir a cap empresa del directori. */
  withoutCompany: number
  /** Incidents que no toquen cap fitxa publicada. */
  withoutApps: number

  /** Import total anunciat, sumant tots els estats. */
  totalFinesEur: number
  /** Import de les sancions fermes. */
  finalFinesEur: number
  /** Import de les sancions anul·lades o reduïdes, que no s'han de sumar al total efectiu. */
  overturnedFinesEur: number
  byFineStatus: { status: FineStatus | 'unspecified'; label: string; incidents: number; finesEur: number }[]
  /** Incidents amb actuació administrativa però sense import documentat. */
  finesWithoutAmount: number

  breaches: BreachSummary
}

const typeOf = (value: unknown): IncidentType | 'unspecified' =>
  typeof value === 'string' && (INCIDENT_TYPES as readonly string[]).includes(value)
    ? (value as IncidentType)
    : 'unspecified'

const severityOf = (value: unknown): IncidentSeverity | 'unspecified' =>
  typeof value === 'string' && (INCIDENT_SEVERITIES as readonly string[]).includes(value)
    ? (value as IncidentSeverity)
    : 'unspecified'

const fineStatusOf = (value: unknown): FineStatus | 'unspecified' =>
  typeof value === 'string' && (FINE_STATUSES as readonly string[]).includes(value)
    ? (value as FineStatus)
    : 'unspecified'

const yearOf = (value: unknown): number | null => {
  if (typeof value !== 'string' && !(value instanceof Date)) return null
  const parsed = value instanceof Date ? value.getTime() : Date.parse(value)
  if (Number.isNaN(parsed)) return null
  return new Date(parsed).getUTCFullYear()
}

/**
 * Empresa a qui s'atribueix un incident.
 *
 * Si la fitxa de l'incident declara empresa, aquella. Si no, prenem la de la
 * primera aplicació afectada: un incident que toca Facebook és de qui explota
 * Facebook, encara que qui l'hagi redactat no ho hagi tornat a escriure. Si no
 * hi ha ni una cosa ni l'altra, l'incident queda sense atribuir i es compta a
 * `withoutCompany` en comptes de repartir-se per algun criteri inventat.
 */
const attributedCompany = (incident: Incident, corpus: Corpus): string | null => {
  const declared = relationId(incident.company)
  if (declared !== null && corpus.companyById.has(declared)) return declared
  const apps = Array.isArray(incident.apps) ? incident.apps : []
  for (const app of apps) {
    const appId = relationId(app)
    if (appId === null) continue
    const companyId = relationId(corpus.appById.get(appId)?.company)
    if (companyId !== null && corpus.companyById.has(companyId)) return companyId
  }
  return null
}

export const analyseIncidents = (corpus: Corpus): IncidentsAnalysis => {
  const byType = new Map<IncidentType | 'unspecified', { incidents: number; finesEur: number }>()
  const bySeverity = new Map<IncidentSeverity | 'unspecified', number>()
  const byYear = new Map<number, { incidents: number; finesEur: number }>()
  const byFineStatus = new Map<FineStatus | 'unspecified', { incidents: number; finesEur: number }>()
  const byCompany = new Map<
    string,
    {
      incidents: number
      finesEur: number
      finesWithoutAmount: number
      bySeverity: Record<IncidentSeverity, number>
    }
  >()

  let totalFinesEur = 0
  let finalFinesEur = 0
  let overturnedFinesEur = 0
  let finesWithoutAmount = 0
  let undated = 0
  let withoutCompany = 0
  let withoutApps = 0

  for (const incident of corpus.incidents) {
    const type = typeOf(incident.type)
    const severity = severityOf(incident.severity)
    const regulatory = at(incident, 'regulatory')
    const rawAmount = at(regulatory, 'fineAmountEur')
    const amount = typeof rawAmount === 'number' && Number.isFinite(rawAmount) ? rawAmount : null
    const status = fineStatusOf(at(regulatory, 'status'))
    const authority = at(regulatory, 'authority')
    const hasProceeding =
      status !== 'unspecified' || (typeof authority === 'string' && authority.trim().length > 0)

    if (amount !== null) {
      totalFinesEur += amount
      if (status === 'final') finalFinesEur += amount
      if (status === 'overturned') overturnedFinesEur += amount
    } else if (hasProceeding) {
      finesWithoutAmount += 1
    }

    const typeBucket = byType.get(type) ?? { incidents: 0, finesEur: 0 }
    typeBucket.incidents += 1
    typeBucket.finesEur += amount ?? 0
    byType.set(type, typeBucket)

    bySeverity.set(severity, (bySeverity.get(severity) ?? 0) + 1)

    const statusBucket = byFineStatus.get(status) ?? { incidents: 0, finesEur: 0 }
    statusBucket.incidents += 1
    statusBucket.finesEur += amount ?? 0
    byFineStatus.set(status, statusBucket)

    const year = yearOf(incident.occurredAt)
    if (year === null) undated += 1
    else {
      const yearBucket = byYear.get(year) ?? { incidents: 0, finesEur: 0 }
      yearBucket.incidents += 1
      yearBucket.finesEur += amount ?? 0
      byYear.set(year, yearBucket)
    }

    const apps = Array.isArray(incident.apps) ? incident.apps : []
    if (apps.length === 0) withoutApps += 1

    const companyId = attributedCompany(incident, corpus)
    if (companyId === null) {
      withoutCompany += 1
      continue
    }
    let companyBucket = byCompany.get(companyId)
    if (!companyBucket) {
      companyBucket = {
        incidents: 0,
        finesEur: 0,
        finesWithoutAmount: 0,
        bySeverity: { low: 0, medium: 0, high: 0, critical: 0 },
      }
      byCompany.set(companyId, companyBucket)
    }
    companyBucket.incidents += 1
    companyBucket.finesEur += amount ?? 0
    if (amount === null && hasProceeding) companyBucket.finesWithoutAmount += 1
    if (severity !== 'unspecified') companyBucket.bySeverity[severity] += 1
  }

  const groupState = new Map<string, { incidents: number; finesEur: number; companies: Set<string> }>()

  const companyRows: IncidentCompanyRow[] = [...byCompany.entries()]
    .map(([companyId, bucket]) => {
      const groupId = ultimateParentId(companyId, corpus.companyById)
      const group = groupState.get(groupId) ?? {
        incidents: 0,
        finesEur: 0,
        companies: new Set<string>(),
      }
      group.incidents += bucket.incidents
      group.finesEur += bucket.finesEur
      group.companies.add(companyId)
      groupState.set(groupId, group)
      return {
        companyId,
        name: localizedText(corpus.companyById.get(companyId)?.name) ?? '(empresa no resolta)',
        groupId,
        groupName: localizedText(corpus.companyById.get(groupId)?.name) ?? '(empresa no resolta)',
        incidents: bucket.incidents,
        finesEur: bucket.finesEur,
        finesWithoutAmount: bucket.finesWithoutAmount,
        bySeverity: bucket.bySeverity,
      }
    })
    .sort(
      (a, b) =>
        b.finesEur - a.finesEur ||
        b.incidents - a.incidents ||
        compareText(a.name, b.name) ||
        compareText(a.companyId, b.companyId),
    )

  const groupRows: IncidentGroupRow[] = [...groupState.entries()]
    .map(([groupId, bucket]) => ({
      groupId,
      groupName: localizedText(corpus.companyById.get(groupId)?.name) ?? '(empresa no resolta)',
      incidents: bucket.incidents,
      finesEur: bucket.finesEur,
      companies: bucket.companies.size,
    }))
    .sort(
      (a, b) =>
        b.finesEur - a.finesEur ||
        b.incidents - a.incidents ||
        compareText(a.groupName, b.groupName) ||
        compareText(a.groupId, b.groupId),
    )

  /* ─────────────────────────── filtracions ──────────────────────────────── */

  const breachYears = new Map<number, { breaches: number; accountsAffected: number }>()
  let accountsAffected = 0
  let withoutAccountCount = 0
  let linkedToCompany = 0
  let linkedToApp = 0
  let promotedToIncident = 0
  let verified = 0

  for (const breach of corpus.breaches) {
    const count = breach.pwnCount
    if (typeof count === 'number' && Number.isFinite(count) && count > 0) {
      accountsAffected += count
    } else {
      withoutAccountCount += 1
    }
    if (relationId(breach.company) !== null) linkedToCompany += 1
    if (Array.isArray(breach.apps) && breach.apps.length > 0) linkedToApp += 1
    if (relationId(breach.incident) !== null) promotedToIncident += 1
    if (breach.isVerified === true) verified += 1

    const year = yearOf(breach.breachDate)
    if (year !== null) {
      const bucket = breachYears.get(year) ?? { breaches: 0, accountsAffected: 0 }
      bucket.breaches += 1
      bucket.accountsAffected +=
        typeof count === 'number' && Number.isFinite(count) && count > 0 ? count : 0
      breachYears.set(year, bucket)
    }
  }

  return {
    total: corpus.incidents.length,
    byType: [...byType.entries()]
      .map(([type, bucket]) => ({
        type,
        label: type === 'unspecified' ? 'Sense tipus declarat' : INCIDENT_TYPE_LABELS[type],
        incidents: bucket.incidents,
        finesEur: bucket.finesEur,
      }))
      .sort(
        (a, b) => b.incidents - a.incidents || b.finesEur - a.finesEur || compareText(a.type, b.type),
      ),
    bySeverity: [...bySeverity.entries()]
      .map(([severity, incidents]) => ({
        severity,
        label:
          severity === 'unspecified' ? 'Sense gravetat declarada' : INCIDENT_SEVERITY_LABELS[severity],
        incidents,
      }))
      .sort((a, b) => b.incidents - a.incidents || compareText(a.severity, b.severity)),
    byCompany: companyRows,
    byGroup: groupRows,
    byYear: [...byYear.entries()]
      .map(([year, bucket]) => ({ year, incidents: bucket.incidents, finesEur: bucket.finesEur }))
      .sort((a, b) => a.year - b.year),
    undated,
    withoutCompany,
    withoutApps,
    totalFinesEur,
    finalFinesEur,
    overturnedFinesEur,
    byFineStatus: [...byFineStatus.entries()]
      .map(([status, bucket]) => ({
        status,
        label: status === 'unspecified' ? 'Sense actuació declarada' : FINE_STATUS_LABELS[status],
        incidents: bucket.incidents,
        finesEur: bucket.finesEur,
      }))
      .sort(
        (a, b) =>
          b.finesEur - a.finesEur || b.incidents - a.incidents || compareText(a.status, b.status),
      ),
    finesWithoutAmount,
    breaches: {
      total: corpus.breaches.length,
      accountsAffected,
      withoutAccountCount,
      linkedToCompany,
      linkedToApp,
      promotedToIncident,
      verified,
      byYear: [...breachYears.entries()]
        .map(([year, bucket]) => ({
          year,
          breaches: bucket.breaches,
          accountsAffected: bucket.accountsAffected,
        }))
        .sort((a, b) => a.year - b.year),
    },
  }
}
