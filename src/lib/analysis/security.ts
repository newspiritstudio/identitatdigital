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
 * Mesures de seguretat a tot el directori.
 *
 * Aquí la temptació és fer un rànquing. No ho fem: el mòdul compta pràctiques,
 * no reparteix notes —això ja ho fa `src/lib/scoring`— i separa sempre el «no
 * ho té» del «no ho sabem», perquè la diferència entre les dues coses és,
 * precisament, la meitat de la feina que ens queda per fer.
 */

export const E2EE_SCOPES = [
  'all-default',
  'all-optin',
  'partial-default',
  'partial-optin',
  'metadata-excluded',
  'none',
] as const
export type E2eeScope = (typeof E2EE_SCOPES)[number]

export const E2EE_SCOPE_LABELS: Record<E2eeScope, string> = {
  'all-default': 'Tot el contingut, per defecte',
  'all-optin': 'Tot el contingut, però cal activar-ho',
  'partial-default': 'Part del contingut, per defecte',
  'partial-optin': 'Part del contingut, i cal activar-ho',
  'metadata-excluded': 'Contingut sí, metadades no',
  none: 'Cap',
}

export const MFA_METHODS = ['passkey', 'hardware-key', 'totp', 'app-push', 'email', 'sms'] as const
export type MfaMethod = (typeof MFA_METHODS)[number]

export const MFA_METHOD_LABELS: Record<MfaMethod, string> = {
  passkey: 'Passkeys',
  'hardware-key': 'Clau de seguretat física',
  totp: 'Aplicació d’autenticació (TOTP)',
  'app-push': 'Notificació a l’aplicació',
  email: 'Correu electrònic',
  sms: 'SMS',
}

export type SecurityMeasure = {
  key: string
  label: string
  tally: StatusTally
  /** Percentatge de «sí» sobre les fitxes on l'indicador aplica. */
  yesShare: number
  /** Percentatge de fitxes on no ho hem pogut documentar. */
  unknownShare: number
}

export type SecurityAnalysis = {
  appsConsidered: number
  measures: SecurityMeasure[]

  /** Xifratge d'extrem a extrem. */
  e2ee: StatusTally
  /** Abast declarat, només entre les fitxes que en tenen (sí o parcialment). */
  e2eeByScope: { scope: E2eeScope; label: string; apps: number }[]
  /** Fitxes amb xifratge d'extrem a extrem però sense abast declarat. */
  e2eeWithoutScope: number
  /** Fitxes que el xifren tot per defecte: l'únic cas plenament protector. */
  e2eeEverythingByDefault: AppRef[]
  /** Fitxes on l'indicador no aplica (un navegador no transporta contingut privat). */
  e2eeNotApplicable: number

  /** Verificació en dos passos. */
  mfa: StatusTally
  byMfaMethod: { method: MfaMethod; label: string; apps: number }[]
  /** Fitxes amb verificació en dos passos però sense mètodes declarats. */
  mfaWithoutMethods: number
  /** Fitxes on l'únic segon factor documentat és l'SMS. */
  mfaOnlySms: number

  /** Auditories independents publicades. */
  independentAudits: StatusTally
  /** Programa de recompenses per errors. */
  bugBounty: StatusTally
  /** Fitxes amb auditoria i recompenses alhora. */
  auditedAndBountied: number
  /** Fitxes sense cap de les dues coses documentades com a existents. */
  neitherAuditedNorBountied: number
}

const MEASURES: ReadonlyArray<{ key: string; label: string; path: string }> = [
  { key: 'e2ee', label: 'Xifratge d’extrem a extrem', path: 'security.e2ee' },
  { key: 'transport-encryption', label: 'Xifratge en trànsit', path: 'security.transportEncryption' },
  { key: 'at-rest-encryption', label: 'Xifratge en repòs', path: 'security.atRestEncryption' },
  { key: 'mfa', label: 'Verificació en dos passos', path: 'security.mfa' },
  { key: 'independent-audits', label: 'Auditories independents', path: 'security.independentAudits' },
  { key: 'bug-bounty', label: 'Programa de recompenses', path: 'security.bugBounty' },
  {
    key: 'vulnerability-disclosure',
    label: 'Política de divulgació de vulnerabilitats',
    path: 'security.vulnerabilityDisclosure',
  },
  { key: 'open-source', label: 'Codi obert', path: 'openSource' },
]

const scopeOf = (value: unknown): E2eeScope | null =>
  typeof value === 'string' && (E2EE_SCOPES as readonly string[]).includes(value)
    ? (value as E2eeScope)
    : null

const methodsOf = (value: unknown): MfaMethod[] => {
  if (!Array.isArray(value)) return []
  const methods: MfaMethod[] = []
  for (const candidate of value) {
    if (typeof candidate === 'string' && (MFA_METHODS as readonly string[]).includes(candidate)) {
      methods.push(candidate as MfaMethod)
    }
  }
  return methods
}

export const analyseSecurity = (corpus: Corpus): SecurityAnalysis => {
  const measures: SecurityMeasure[] = MEASURES.map((measure) => {
    const tally = tallyStatuses(corpus.apps.map((app) => factStatus(at(app, measure.path))))
    // El denominador exclou les fitxes on l'indicador no aplica: exigir
    // xifratge d'extrem a extrem a un navegador seria mesurar el no-res.
    const applicable = tally.total - tally.na
    return {
      key: measure.key,
      label: measure.label,
      tally,
      yesShare: percentage(tally.yes, applicable),
      unknownShare: percentage(tally.unknown, applicable),
    }
  })

  const e2eeScopes = new Map<E2eeScope, number>()
  const mfaMethods = new Map<MfaMethod, number>()
  const e2eeEverythingByDefault: AppRef[] = []

  let e2eeWithoutScope = 0
  let mfaWithoutMethods = 0
  let mfaOnlySms = 0
  let auditedAndBountied = 0
  let neitherAuditedNorBountied = 0

  for (const app of corpus.apps) {
    const reference: AppRef = {
      id: relationId(app) ?? '',
      name: localizedText(app.name) ?? '(sense nom)',
      slug: typeof app.slug === 'string' ? app.slug : '',
    }

    const e2eeFact = at(app, 'security.e2ee')
    const e2eeStatus = factStatus(e2eeFact)
    if (e2eeStatus === 'yes' || e2eeStatus === 'partial') {
      const scope = scopeOf(at(e2eeFact, 'scope'))
      if (scope === null) e2eeWithoutScope += 1
      else {
        e2eeScopes.set(scope, (e2eeScopes.get(scope) ?? 0) + 1)
        if (scope === 'all-default') e2eeEverythingByDefault.push(reference)
      }
    }

    const mfaFact = at(app, 'security.mfa')
    const mfaStatus = factStatus(mfaFact)
    if (mfaStatus === 'yes' || mfaStatus === 'partial') {
      const methods = methodsOf(at(mfaFact, 'methods'))
      if (methods.length === 0) mfaWithoutMethods += 1
      if (methods.length === 1 && methods[0] === 'sms') mfaOnlySms += 1
      for (const method of new Set(methods)) {
        mfaMethods.set(method, (mfaMethods.get(method) ?? 0) + 1)
      }
    }

    const audits = factStatus(at(app, 'security.independentAudits'))
    const bounty = factStatus(at(app, 'security.bugBounty'))
    const hasAudits = audits === 'yes' || audits === 'partial'
    const hasBounty = bounty === 'yes' || bounty === 'partial'
    if (hasAudits && hasBounty) auditedAndBountied += 1
    // «Cap de les dues» només compta si l'hem documentat: un parell de
    // desconeguts no és una absència de mesures.
    if (audits === 'no' && bounty === 'no') neitherAuditedNorBountied += 1
  }

  const e2ee = tallyStatuses(corpus.apps.map((app) => factStatus(at(app, 'security.e2ee'))))
  const mfa = tallyStatuses(corpus.apps.map((app) => factStatus(at(app, 'security.mfa'))))

  return {
    appsConsidered: corpus.apps.length,
    measures,
    e2ee,
    e2eeByScope: [...e2eeScopes.entries()]
      .map(([scope, apps]) => ({ scope, label: E2EE_SCOPE_LABELS[scope], apps }))
      .sort((a, b) => b.apps - a.apps || compareText(a.scope, b.scope)),
    e2eeWithoutScope,
    e2eeEverythingByDefault: e2eeEverythingByDefault.sort(
      (a, b) => compareText(a.name, b.name) || compareText(a.id, b.id),
    ),
    e2eeNotApplicable: e2ee.na,
    mfa,
    byMfaMethod: [...mfaMethods.entries()]
      .map(([method, apps]) => ({ method, label: MFA_METHOD_LABELS[method], apps }))
      .sort((a, b) => b.apps - a.apps || compareText(a.method, b.method)),
    mfaWithoutMethods,
    mfaOnlySms,
    independentAudits: tallyStatuses(
      corpus.apps.map((app) => factStatus(at(app, 'security.independentAudits'))),
    ),
    bugBounty: tallyStatuses(corpus.apps.map((app) => factStatus(at(app, 'security.bugBounty')))),
    auditedAndBountied,
    neitherAuditedNorBountied,
  }
}
