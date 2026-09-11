import 'dotenv/config'
import { getPayload } from 'payload'
import type { Payload } from 'payload'

import config from '@/payload.config'
import { apps } from '@/seed/apps'
import { companies } from '@/seed/companies'
import { incidents } from '@/seed/incidents'
import { methodologyDoc } from '@/seed/methodology'
import { sources } from '@/seed/sources'
import { categories, dataTypes, purposes } from '@/seed/taxonomies'
import type { AppSeed, DataRowSeed, FactSeed } from '@/seed/types'

/**
 * Càrrega del dataset editorial.
 *
 * És idempotent: cada document es busca pel seu `slug` i s'actualitza si ja hi
 * és. Això permet reexecutar-lo tantes vegades com calgui mentre s'edita el
 * contingut sense duplicar res ni perdre els identificadors, que és el que fa
 * que els historials de puntuació segueixin tenint sentit entre càrregues.
 *
 * L'ordre no és arbitrari. Les taxonomies primer, perquè les fitxes hi
 * apunten; les aplicacions sense alternatives, perquè s'apunten entre elles;
 * els incidents al final, perquè en desar-se forcen el recàlcul de les
 * puntuacions de les aplicacions afectades.
 */

type IdMap = Map<string, string>

const registry: Record<string, IdMap> = {
  sources: new Map(),
  companies: new Map(),
  categories: new Map(),
  'data-types': new Map(),
  'processing-purposes': new Map(),
  apps: new Map(),
}

const id = (collection: string, slug: string | undefined): string | undefined => {
  if (!slug) return undefined
  const found = registry[collection]?.get(slug)
  if (!found) console.warn(`  ⚠️  ${collection}: no s'ha trobat «${slug}»`)
  return found
}

const ids = (collection: string, slugs: string[] = []): string[] =>
  slugs.map((slug) => id(collection, slug)).filter((value): value is string => Boolean(value))

/** Cerca per slug i crea o actualitza. Retorna l'identificador resultant. */
async function upsert(
  payload: Payload,
  collection: string,
  slug: string,
  data: Record<string, unknown>,
): Promise<string> {
  const existing = await payload.find({
    collection: collection as never,
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
    overrideAccess: true,
  })

  const found = existing.docs[0] as { id: string | number } | undefined

  const doc = found
    ? await payload.update({
        collection: collection as never,
        id: found.id,
        data: data as never,
        overrideAccess: true,
        context: { seeding: true },
      })
    : await payload.create({
        collection: collection as never,
        data: { ...data, slug } as never,
        overrideAccess: true,
        context: { seeding: true },
      })

  const value = String((doc as { id: string | number }).id)
  registry[collection]?.set(slug, value)
  return value
}

/** Converteix una afirmació del dataset a l'estructura del grup `evidencedFact`. */
const fact = (input?: FactSeed): Record<string, unknown> | undefined => {
  if (!input) return undefined
  const { status, level, sources: sourceSlugs, detail, verifiedAt, ...extra } = input
  return {
    status,
    evidenceLevel: level,
    detail,
    verifiedAt,
    sources: ids('sources', sourceSlugs as string[] | undefined),
    ...extra,
  }
}

/** Converteix un mapa d'afirmacions (grups com `sharing` o `security`). */
const facts = (input: Record<string, unknown>): Record<string, unknown> => {
  const out: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(input)) {
    out[key] = value && typeof value === 'object' && 'status' in value ? fact(value as FactSeed) : value
  }
  return out
}

const dataRow = (input: DataRowSeed) => ({
  dataType: id('data-types', input.type),
  status: input.status,
  linkedToIdentity: input.linked ?? 'unknown',
  usedForTracking: input.tracking ?? 'unknown',
  sharedWith: input.shared ?? 'unknown',
  purposes: ids('processing-purposes', input.purposes),
  evidenceLevel: input.level ?? 'unknown',
  sources: ids('sources', input.sources),
  note: input.note,
})

/** Cos d'una fitxa, sense les alternatives: apunten a fitxes que potser encara no existeixen. */
const appData = (app: AppSeed) => ({
  name: app.name,
  company: id('companies', app.company),
  categories: ids('categories', app.categories),
  tagline: app.tagline,
  summary: app.summary,
  platforms: app.platforms,
  businessModel: app.businessModel,
  jurisdiction: app.jurisdiction,
  userBase: app.userBase,
  serviceStatus: app.serviceStatus ?? 'active',
  links: app.links,
  accountRequired: fact(app.accountRequired),
  openSource: fact(app.openSource),
  dataSummary: app.dataSummary,
  dataCollection: app.dataCollection.map(dataRow),
  tracking: facts(app.tracking),
  dataUses: facts(app.dataUses),
  sharing: facts(app.sharing),
  transparency: {
    policyClarity: app.transparency.policyClarity,
    transparencyReport: fact(app.transparency.transparencyReport),
  },
  retention: {
    definedPeriods: fact(app.retention.definedPeriods),
    dataAfterDeletion: fact(app.retention.dataAfterDeletion),
    periods: (app.retention.periods ?? []).map((period) => ({
      dataType: id('data-types', period.dataType),
      period: period.period,
      sources: ids('sources', period.sources),
    })),
  },
  accountDeletion: {
    possible: fact(app.accountDeletion.possible),
    selfService: fact(app.accountDeletion.selfService),
    directUrl: app.accountDeletion.directUrl,
    difficulty: app.accountDeletion.difficulty,
    waitingPeriodDays: app.accountDeletion.waitingPeriodDays,
    requiresSupportContact: app.accountDeletion.requiresSupportContact ?? false,
    steps: (app.accountDeletion.steps ?? []).map((step) => ({ step })),
    obstacles: app.accountDeletion.obstacles,
    dataRetained: app.accountDeletion.dataRetained,
    sources: ids('sources', app.accountDeletion.sources),
  },
  userRights: {
    dataExport: fact(app.userRights.dataExport),
    exportFormatQuality: app.userRights.exportFormatQuality ?? 'unknown',
    rightsExercise: fact(app.userRights.rightsExercise),
  },
  controls: {
    adPersonalizationOptOut: fact(app.controls.adPersonalizationOptOut),
    telemetryOptOut: fact(app.controls.telemetryOptOut),
    granularControls: fact(app.controls.granularControls),
    defaultPosture: app.controls.defaultPosture ?? 'unknown',
    darkPatterns: fact(app.controls.darkPatterns),
    darkPatternList: (app.controls.darkPatternList ?? []).map((pattern) => ({
      type: pattern.type,
      severity: pattern.severity,
      description: pattern.description,
      sources: ids('sources', pattern.sources),
    })),
  },
  security: facts(app.security),
  review: {
    researchStatus: app.review.researchStatus,
    lastReviewedAt: app.review.lastReviewedAt,
    incidentsReviewed: app.review.incidentsReviewed,
    editorialNotes: app.review.editorialNotes,
    openQuestions: (app.review.openQuestions ?? []).map((question) => ({ question })),
  },
  _status: 'published',
})

async function seed() {
  const payload = await getPayload({ config })

  console.log('\n🌱 Càrrega del dataset d’Identitat.digital\n')

  console.log(`Fonts (${sources.length})…`)
  for (const source of sources) {
    const { slug, ...data } = source
    await upsert(payload, 'sources', slug, data)
  }

  console.log(`Tipus de dades (${dataTypes.length})…`)
  for (const dataType of dataTypes) {
    const { slug, ...data } = dataType
    await upsert(payload, 'data-types', slug, data)
  }

  console.log(`Finalitats (${purposes.length})…`)
  for (const purpose of purposes) {
    const { slug, ...data } = purpose
    await upsert(payload, 'processing-purposes', slug, data)
  }

  console.log(`Categories (${categories.length})…`)
  for (const category of categories) {
    const { slug, parent: _parent, ...data } = category
    await upsert(payload, 'categories', slug, data)
  }
  for (const category of categories.filter((entry) => entry.parent)) {
    await upsert(payload, 'categories', category.slug, { parent: id('categories', category.parent) })
  }

  console.log(`Empreses (${companies.length})…`)
  for (const company of companies) {
    const { slug, parent: _parent, productDomains, ...data } = company
    await upsert(payload, 'companies', slug, {
      ...data,
      // El camp és un array d'objectes a Payload, però al seed s'escriu com a
      // llista plana de dominis perquè llegir-ho i mantenir-ho sigui barat.
      ...(productDomains ? { productDomains: productDomains.map((domain) => ({ domain })) } : {}),
    })
  }
  for (const company of companies.filter((entry) => entry.parent)) {
    await upsert(payload, 'companies', company.slug, { parent: id('companies', company.parent) })
  }

  console.log('Metodologia de puntuació…')
  const existingMethodology = await payload.find({
    collection: 'scoring-methodologies',
    where: { version: { equals: methodologyDoc.version } },
    limit: 1,
    depth: 0,
    overrideAccess: true,
  })
  const methodologyData = { ...methodologyDoc, _status: 'published' as const }
  if (existingMethodology.docs[0]) {
    await payload.update({
      collection: 'scoring-methodologies',
      id: existingMethodology.docs[0].id,
      data: methodologyData,
      overrideAccess: true,
    })
  } else {
    await payload.create({
      collection: 'scoring-methodologies',
      data: methodologyData,
      overrideAccess: true,
    })
  }

  console.log(`Aplicacions (${apps.length})…`)
  for (const app of apps) {
    await upsert(payload, 'apps', app.slug, appData(app))
    console.log(`  · ${app.name}`)
  }

  console.log('Alternatives entre aplicacions…')
  for (const app of apps.filter((entry) => entry.alternatives?.length)) {
    await upsert(payload, 'apps', app.slug, {
      alternatives: (app.alternatives ?? []).map((alternative) => ({
        app: id('apps', alternative.app),
        comparability: alternative.comparability,
        rationale: alternative.rationale,
        tradeOffs: alternative.tradeOffs,
      })),
      _status: 'published',
    })
  }

  console.log(`Incidents (${incidents.length})…`)
  for (const incident of incidents) {
    const { slug, apps: appSlugs, company, sources: sourceSlugs, ...data } = incident
    await upsert(payload, 'incidents', slug, {
      ...data,
      apps: ids('apps', appSlugs),
      company: id('companies', company),
      sources: ids('sources', sourceSlugs),
    })
  }

  const scored = await payload.find({
    collection: 'apps',
    limit: 100,
    depth: 0,
    sort: '-scores.overall',
    overrideAccess: true,
  })

  console.log('\n📊 Puntuacions calculades\n')
  console.log('  Servei                    Priv.  Seg.  Ctrl.  Global  Conf.')
  for (const app of scored.docs) {
    const s = app.scores ?? {}
    const cell = (value: number | null | undefined) => String(value ?? '—').padStart(5)
    console.log(
      `  ${String(app.name).padEnd(24)}${cell(s.privacy)}${cell(s.security)}${cell(s.agency)}${cell(
        s.overall,
      )}${cell(s.confidence)}${s.provisional ? '  (provisional)' : ''}`,
    )
  }

  console.log('\n✅ Càrrega completada\n')
  process.exit(0)
}

await seed().catch((error) => {
  console.error('❌ Error durant la càrrega:', error)
  process.exit(1)
})
