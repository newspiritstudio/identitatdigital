/**
 * Comprovació del dataset editorial sense base de dades.
 *
 * Verifica que cada referència per `slug` (categories, tipus de dada,
 * finalitats, fonts, empreses, aplicacions) existeix, que no hi ha slugs
 * repetits i que els valors tancats són dels que accepta Payload. El seed
 * només avisa quan no troba una referència; aquí és un error.
 *
 *   pnpm check-seed                                   # tot el dataset
 *   pnpm check-seed src/seed/onada2/lot-07.ts         # el dataset més un lot concret
 */
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

import { apps as baseApps } from '../src/seed/apps'
import { companies as baseCompanies } from '../src/seed/companies'
import { incidents as baseIncidents } from '../src/seed/incidents'
import { sources as baseSources } from '../src/seed/sources'
import { countryCodes } from '../src/lib/countries'
import { supervisoryAuthorities } from '../src/lib/supervisory-authorities'
import { appStoreBundleIds } from '../src/seed/store-ids'
import { categories, dataTypes, purposes } from '../src/seed/taxonomies'
import { wave2 } from '../src/seed/onada2'
import type { SeedLot } from '../src/seed/onada2/types'
import type { AppSeed, FactSeed } from '../src/seed/types'

const extraPath = process.argv[2]
let extra: SeedLot | undefined
if (extraPath) {
  const imported = (await import(pathToFileURL(resolve(extraPath)).href)) as { lot?: SeedLot }
  if (!imported.lot) throw new Error(`${extraPath} no exporta \`lot\``)
  extra = imported.lot
}

const lots = extra ? [wave2, extra] : [wave2]
const apps = [...baseApps, ...lots.flatMap((lot) => lot.apps)]
const companies = [...baseCompanies, ...lots.flatMap((lot) => lot.companies)]
const sources = [...baseSources, ...lots.flatMap((lot) => lot.sources)]
const incidents = [...baseIncidents, ...lots.flatMap((lot) => lot.incidents)]
const storeIds = { ...appStoreBundleIds, ...Object.assign({}, ...lots.map((lot) => lot.storeIds)) }

/**
 * Mentre es documenta una onada en paral·lel, una fitxa pot proposar com a
 * alternativa una altra que encara és en un lot pendent. CHECK_SEED_PLANNED
 * apunta a un JSON amb els slugs previstos i els accepta com a alternatives.
 */
const planned = new Set<string>(
  process.env.CHECK_SEED_PLANNED
    ? (JSON.parse(readFileSync(process.env.CHECK_SEED_PLANNED, 'utf8')) as string[])
    : [],
)

const errors: string[] = []
/** Alternatives que apunten a fitxes encara no escrites. El seed les omet; aquí només s'avisa. */
const pending = new Set<string>()
const err = (where: string, message: string) => errors.push(`${where}: ${message}`)

const set = (items: { slug: string }[], label: string) => {
  const seen = new Set<string>()
  for (const { slug } of items) {
    if (seen.has(slug)) err(label, `slug repetit «${slug}»`)
    seen.add(slug)
  }
  return seen
}

const S = {
  categories: set(categories, 'categories'),
  dataTypes: set(dataTypes, 'data-types'),
  purposes: set(purposes, 'purposes'),
  sources: set(sources, 'sources'),
  companies: set(companies, 'companies'),
  apps: set(apps, 'apps'),
}
set(incidents, 'incidents')

const ref = (where: string, kind: keyof typeof S, slug: string | undefined) => {
  if (slug && !S[kind].has(slug)) err(where, `${kind} «${slug}» no existeix`)
}
const refs = (where: string, kind: keyof typeof S, slugs: string[] = []) =>
  slugs.forEach((slug) => ref(where, kind, slug))

const oneOf = (where: string, value: unknown, allowed: readonly string[]) => {
  if (value !== undefined && !allowed.includes(String(value)))
    err(where, `valor «${String(value)}» no vàlid (${allowed.join(', ')})`)
}

const STATUS = ['yes', 'partial', 'no', 'unknown', 'na']
const LEVEL = ['official', 'regulator', 'independent', 'press', 'editorial', 'unknown']
const TRI = ['yes', 'no', 'unknown']

const checkFact = (where: string, fact: unknown, required = true) => {
  if (fact === undefined) {
    if (required) err(where, 'falta l’afirmació')
    return
  }
  const value = fact as FactSeed
  oneOf(`${where}.status`, value.status, STATUS)
  oneOf(`${where}.level`, value.level, LEVEL)
  refs(where, 'sources', value.sources)
  const documented = ['yes', 'partial', 'no'].includes(value.status)
  if (documented && value.level !== 'editorial' && !(value.sources ?? []).length)
    err(where, `afirmació «${value.status}» sense cap font`)
  if (value.status === 'unknown' && value.level !== 'unknown') err(where, 'unknown amb nivell d’evidència')
  const mechanism = (value as Record<string, unknown>).mechanism
  oneOf(`${where}.mechanism`, mechanism, ['adequacy', 'sccs', 'bcrs', 'derogation', 'none', 'unknown'])
  const methods = (value as Record<string, unknown>).methods
  if (Array.isArray(methods))
    methods.forEach((m) => oneOf(`${where}.methods`, m, ['passkey', 'hardware-key', 'totp', 'app-push', 'email', 'sms']))
  const scope = (value as Record<string, unknown>).scope
  oneOf(`${where}.scope`, scope, ['all-default', 'all-optin', 'partial-default', 'partial-optin', 'metadata-excluded', 'none'])
}

const checkApp = (app: AppSeed) => {
  const w = `app ${app.slug}`
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(app.slug)) err(w, 'slug amb caràcters no vàlids')
  ref(w, 'companies', app.company)
  if (!app.categories?.length) err(w, 'sense categoria')
  refs(w, 'categories', app.categories)
  if (!app.tagline || !app.summary) err(w, 'falta tagline o summary')
  app.platforms?.forEach((p) => oneOf(`${w}.platforms`, p, ['ios', 'android', 'web', 'windows', 'macos', 'linux', 'other']))
  oneOf(`${w}.businessModel`, app.businessModel, ['advertising', 'subscription', 'freemium', 'paid', 'commerce', 'donations', 'public-service', 'unknown'])
  for (const [key, url] of Object.entries(app.links ?? {})) {
    oneOf(`${w}.links`, key, [
      'website',
      'privacyPolicy',
      'terms',
      'privacyCenter',
      'appStore',
      'playStore',
      'deleteAccount',
      'dataExport',
      'rightsRequest',
      'adSettings',
      'subprocessors',
      'security',
      'transparencyReport',
      'statusOrChangelog',
    ])
    if (url && !/^https?:\/\//.test(url)) err(`${w}.links.${key}`, 'adreça sense protocol')
  }
  if (app.brandColor && !/^#[0-9a-fA-F]{6}$/.test(app.brandColor))
    err(`${w}.brandColor`, 'el color ha de ser hexadecimal de sis dígits')
  checkFact(`${w}.accountRequired`, app.accountRequired)
  checkFact(`${w}.openSource`, app.openSource)

  const ps = app.publicService
  if (ps) {
    if (ps.isPublicService !== true) err(`${w}.publicService`, 'el bloc existeix però isPublicService no és true')
    oneOf(`${w}.publicService.administrationLevel`, ps.administrationLevel, ['european', 'state', 'regional', 'local', 'other'])
    for (const key of ['legalBasis', 'processingRegistry', 'dpia', 'ensConformity', 'dpo', 'offlineAlternative', 'accessibilityStatement', 'mandatoryRetention'] as const)
      checkFact(`${w}.publicService.${key}`, ps[key])
    oneOf(`${w}.publicService.ensConformity.category`, (ps.ensConformity as Record<string, unknown>)?.category, ['high', 'medium', 'basic'])
  }

  if (!app.dataCollection?.length) err(w, 'matriu de dades buida')
  for (const row of app.dataCollection ?? []) {
    const rw = `${w}.dataCollection[${row.type}]`
    ref(rw, 'dataTypes', row.type)
    oneOf(`${rw}.status`, row.status, ['yes', 'optional', 'no', 'unknown'])
    oneOf(`${rw}.linked`, row.linked, TRI)
    oneOf(`${rw}.tracking`, row.tracking, TRI)
    oneOf(`${rw}.shared`, row.shared, ['none', 'group', 'third-parties', 'brokers', 'unknown'])
    oneOf(`${rw}.level`, row.level, LEVEL)
    refs(rw, 'purposes', row.purposes)
    refs(rw, 'sources', row.sources)
  }

  for (const key of ['crossAppTracking', 'advertisingIdentifiers', 'thirdPartyTrackersPresent'])
    checkFact(`${w}.tracking.${key}`, app.tracking?.[key])
  for (const key of ['targetedAdvertising', 'profiling', 'aiTraining']) checkFact(`${w}.dataUses.${key}`, app.dataUses?.[key])
  for (const key of ['thirdPartySharing', 'intraGroupSharing', 'dataBrokerSales', 'internationalTransfers'])
    checkFact(`${w}.sharing.${key}`, app.sharing?.[key])
  oneOf(`${w}.transparency.policyClarity`, app.transparency?.policyClarity, ['high', 'medium', 'low', 'unknown'])
  checkFact(`${w}.transparency.transparencyReport`, app.transparency?.transparencyReport)
  checkFact(`${w}.retention.definedPeriods`, app.retention?.definedPeriods)
  checkFact(`${w}.retention.dataAfterDeletion`, app.retention?.dataAfterDeletion)
  for (const period of app.retention?.periods ?? []) {
    ref(`${w}.retention.periods`, 'dataTypes', period.dataType)
    refs(`${w}.retention.periods`, 'sources', period.sources)
  }

  const del = app.accountDeletion
  checkFact(`${w}.accountDeletion.possible`, del?.possible)
  checkFact(`${w}.accountDeletion.selfService`, del?.selfService)
  oneOf(`${w}.accountDeletion.difficulty`, del?.difficulty, ['easy', 'medium', 'hard', 'impossible', 'unknown'])
  refs(`${w}.accountDeletion`, 'sources', del?.sources)

  checkFact(`${w}.userRights.dataExport`, app.userRights?.dataExport)
  checkFact(`${w}.userRights.rightsExercise`, app.userRights?.rightsExercise)
  oneOf(`${w}.userRights.exportFormatQuality`, app.userRights?.exportFormatQuality, ['open', 'mixed', 'proprietary', 'unknown'])

  const c = app.controls
  for (const key of ['adPersonalizationOptOut', 'telemetryOptOut', 'granularControls', 'darkPatterns'] as const)
    checkFact(`${w}.controls.${key}`, c?.[key])
  oneOf(`${w}.controls.defaultPosture`, c?.defaultPosture, ['protective', 'mixed', 'permissive', 'unknown'])
  for (const pattern of c?.darkPatternList ?? []) {
    oneOf(`${w}.darkPatternList.type`, pattern.type, ['unbalanced-consent', 'hidden-exit', 'nagging', 'confusing-language', 'preselected', 'confirmshaming', 'other'])
    oneOf(`${w}.darkPatternList.severity`, pattern.severity, ['low', 'medium', 'high'])
    refs(`${w}.darkPatternList`, 'sources', pattern.sources)
  }

  for (const key of ['e2ee', 'transportEncryption', 'atRestEncryption', 'mfa', 'independentAudits', 'bugBounty', 'vulnerabilityDisclosure'] as const)
    checkFact(`${w}.security.${key}`, app.security?.[key])

  for (const alt of app.alternatives ?? []) {
    if (!S.apps.has(alt.app) && !planned.has(alt.app)) pending.add(alt.app)
    oneOf(`${w}.alternatives.comparability`, alt.comparability, ['equivalent', 'partial', 'complementary'])
  }

  oneOf(`${w}.review.researchStatus`, app.review?.researchStatus, ['initial', 'documented', 'in-depth'])
  if (!app.review?.lastReviewedAt) err(w, 'falta review.lastReviewedAt')
}

apps.forEach(checkApp)

for (const company of companies) {
  const w = `company ${company.slug}`
  ref(w, 'companies', company.parent)
  oneOf(`${w}.ownership`, company.ownership, ['public', 'private', 'subsidiary', 'nonprofit', 'community', 'state', 'unknown'])
  oneOf(`${w}.primaryRevenueModel`, company.primaryRevenueModel, ['advertising', 'subscription', 'freemium', 'mixed', 'commerce', 'cloud', 'hardware', 'donations', 'unknown'])
  oneOf(`${w}.headquartersCountry`, company.headquartersCountry, countryCodes)
  oneOf(`${w}.leadSupervisoryAuthority`, company.leadSupervisoryAuthority, supervisoryAuthorities.map(({ value }) => value))
  if (company.ownership === 'subsidiary' && !company.parent && !company.parentGroup)
    err(w, 'filial sense matriu ni parentGroup')
  if (company.parent && company.parentGroup) err(w, 'parentGroup sobra quan hi ha matriu')
}

for (const source of sources) {
  const w = `source ${source.slug}`
  oneOf(`${w}.type`, source.type, ['privacy-policy', 'terms', 'privacy-center', 'support-doc', 'technical-doc', 'transparency-report', 'app-store', 'regulator', 'legislation', 'academic', 'ngo', 'audit', 'press', 'repository', 'other'])
  oneOf(`${w}.reliability`, source.reliability, ['primary', 'authority', 'independent', 'secondary'])
  oneOf(`${w}.language`, source.language, ['ca', 'es', 'en', 'fr', 'de', 'other'])
  if (!/^https?:\/\//.test(source.url)) err(w, `URL no vàlida «${source.url}»`)
}

for (const incident of incidents) {
  const w = `incident ${incident.slug}`
  refs(w, 'apps', incident.apps)
  ref(w, 'companies', incident.company)
  refs(w, 'sources', incident.sources)
  oneOf(`${w}.type`, incident.type, ['breach', 'leak', 'scraping', 'regulatory-fine', 'regulatory-order', 'misuse', 'vulnerability', 'other'])
  oneOf(`${w}.severity`, incident.severity, ['low', 'medium', 'high', 'critical'])
  oneOf(`${w}.regulatory.status`, incident.regulatory?.status, ['final', 'appealed', 'overturned', 'ongoing'])
}

for (const slug of Object.keys(storeIds)) if (!S.apps.has(slug)) err('storeIds', `«${slug}» no és cap fitxa`)

const unused = sources.filter(
  (source) => !JSON.stringify([apps, incidents]).includes(`"${source.slug}"`),
)
for (const source of unused) err(`source ${source.slug}`, 'font que no cita cap fitxa ni incident')

if (pending.size) console.warn(`⚠️  Alternatives pendents de fitxa (s'ometen al seed): ${[...pending].sort().join(', ')}`)

if (errors.length) {
  console.error(`❌ ${errors.length} errors\n`)
  for (const line of errors) console.error(`  · ${line}`)
  process.exit(1)
}
console.log(`✅ Dataset correcte: ${apps.length} fitxes, ${companies.length} empreses, ${sources.length} fonts, ${incidents.length} incidents`)
