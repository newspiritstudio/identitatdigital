import 'dotenv/config'
import { getPayload } from 'payload'
import type { Payload } from 'payload'

import config from '@/payload.config'
import { appStoreBundleIds } from '@/seed/store-ids'

/**
 * Comprovació de la disponibilitat en català des de l'App Store.
 *
 * La fitxa pública de cada aplicació a l'App Store declara els idiomes
 * d'interfície de la versió publicada. Ho declara l'empresa, qualsevol persona
 * ho pot tornar a llegir i respon la pregunta que ens interessa: aquest servei
 * es pot fer servir en català o no.
 *
 * No diu res de la qualitat de la traducció, ni del web, ni de si l'atenció al
 * client respon en català. Això es documenta a mà als camps `support` i `note`,
 * i el que no s'hagi mirat es queda com a desconegut.
 *
 * Els serveis sense aplicació mòbil no hi surten. Marcar-los `no` seria
 * afirmar una cosa que no hem comprovat, així que queden com a desconeguts
 * fins que algú ho miri.
 *
 * L'script és idempotent: reescriu l'estat, la data de comprovació i la font,
 * i no duplica res.
 */

const STORE_COUNTRY = 'ES'
const CATALAN_CODE = 'CA'

type Lookup = {
  trackId: number
  trackName: string
  sellerName: string
  trackViewUrl: string
  languageCodesISO2A?: string[]
  currentVersionReleaseDate?: string
  version?: string
}

async function lookup(bundleId: string): Promise<Lookup | undefined> {
  const url = `https://itunes.apple.com/lookup?bundleId=${encodeURIComponent(bundleId)}&country=${STORE_COUNTRY}`
  const response = await fetch(url)
  if (!response.ok) throw new Error(`L'API de l'App Store ha respost ${response.status}`)
  const body = (await response.json()) as { results?: Lookup[] }
  return body.results?.[0]
}

/**
 * Font documental de la comprovació.
 *
 * Una per aplicació, reutilitzada entre execucions a partir del seu `slug`.
 * La data de consulta s'actualitza cada vegada: el que fa útil aquesta font no
 * és l'adreça, que no canvia, sinó saber quin dia hi deia el que hi deia.
 */
async function upsertSource(
  payload: Payload,
  app: { slug: string; name: string },
  result: Lookup,
  consultedAt: string,
): Promise<string> {
  const slug = `app-store-idiomes-${app.slug}`
  const data = {
    title: `Fitxa de ${app.name} a l’App Store: idiomes d’interfície`,
    slug,
    url: result.trackViewUrl,
    publisher: 'Apple',
    // La fitxa de la botiga espanyola es publica en castellà; el que llegim
    // d'aquí és la llista de codis d'idioma, que no depèn de la llengua del
    // document.
    language: 'es' as const,
    type: 'app-store' as const,
    reliability: 'primary' as const,
    consultedAt,
    summary:
      'La fitxa pública de l’App Store declara la llista completa d’idiomes d’interfície de la versió publicada. És la declaració de la mateixa empresa i es pot tornar a consultar en qualsevol moment.',
  }

  const existing = await payload.find({
    collection: 'sources',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
    overrideAccess: true,
  })

  if (existing.docs.length > 0) {
    const id = existing.docs[0]!.id
    await payload.update({ collection: 'sources', id, data, overrideAccess: true })
    return String(id)
  }

  const created = await payload.create({ collection: 'sources', data, overrideAccess: true })
  return String(created.id)
}

async function run(payload: Payload): Promise<void> {
  const consultedAt = new Date().toISOString()
  const apps = await payload.find({
    collection: 'apps',
    limit: 0,
    pagination: false,
    depth: 0,
    draft: false,
    overrideAccess: true,
    sort: 'slug',
  })

  let checked = 0
  let withCatalan = 0
  let skipped = 0

  for (const app of apps.docs) {
    const bundleId = appStoreBundleIds[app.slug]
    if (bundleId === undefined) {
      skipped += 1
      console.log(`— ${app.slug}: sense aplicació a l’App Store, es deixa com a desconegut`)
      continue
    }

    const result = await lookup(bundleId)
    if (result === undefined) {
      skipped += 1
      console.log(`— ${app.slug}: l’App Store no retorna cap fitxa per a ${bundleId}`)
      continue
    }

    const languages = result.languageCodesISO2A ?? []
    const hasCatalan = languages.includes(CATALAN_CODE)
    const sourceId = await upsertSource(payload, { slug: app.slug, name: result.trackName }, result, consultedAt)

    const detail = hasCatalan
      ? `La fitxa de l’App Store declara el català entre els ${languages.length} idiomes d’interfície de la versió publicada.`
      : `La fitxa de l’App Store declara ${languages.length} idiomes d’interfície i el català no hi és.`

    await payload.update({
      collection: 'apps',
      id: app.id,
      overrideAccess: true,
      data: {
        catalan: {
          interfaceAvailable: {
            status: hasCatalan ? 'yes' : 'no',
            evidenceLevel: 'official',
            detail,
            sources: [sourceId],
            verifiedAt: consultedAt,
          },
          interfaceLanguages: languages.length,
          checkedAt: consultedAt,
        },
      },
    })

    checked += 1
    if (hasCatalan) withCatalan += 1
    console.log(`${hasCatalan ? '✓' : '✗'} ${app.slug}: ${languages.length} idiomes`)
  }

  console.log(
    `\nComprovades ${checked} fitxes: ${withCatalan} amb català, ${checked - withCatalan} sense. ${skipped} sense fitxa a l’App Store.`,
  )
}

const payload = await getPayload({ config })
await run(payload)
process.exit(0)
