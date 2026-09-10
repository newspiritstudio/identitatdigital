import 'dotenv/config'
import { getPayload } from 'payload'
import type { Payload } from 'payload'

import config from '@/payload.config'
import { appStoreBundleIds } from '@/seed/store-ids'

/**
 * Importació dels logotips des de l'App Store.
 *
 * Les icones s'obtenen de l'API de consulta pública d'Apple a partir de
 * l'identificador de paquet de cada aplicació, que és estable; les URL de les
 * imatges no ho són, i per això no es desen enlloc.
 *
 * Cada fitxer que entra a la biblioteca porta escrit d'on ve, de qui és i quan
 * es va descarregar. Els logotips són marques registrades de tercers: aquí
 * s'utilitzen únicament per identificar el servei del qual es parla, que és
 * exactament la funció que fa una marca.
 *
 * És idempotent: una aplicació que ja té logotip no es torna a baixar. Amb
 * `FORCE_LOGOS=1` es refà la importació, útil quan una empresa canvia la icona.
 */

const STORE_COUNTRY = 'ES'
const ARTWORK_SIZE = 512

type Lookup = {
  trackId: number
  trackName: string
  sellerName: string
  trackViewUrl: string
  artworkUrl512?: string
  artworkUrl100?: string
}

/** Data de descàrrega, en el format que llegeix una persona editora. */
const today = (): string =>
  new Date().toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })

async function lookup(bundleId: string): Promise<Lookup | undefined> {
  const url = `https://itunes.apple.com/lookup?bundleId=${encodeURIComponent(bundleId)}&country=${STORE_COUNTRY}`
  const response = await fetch(url)
  if (!response.ok) throw new Error(`L'API de l'App Store ha respost ${response.status}`)
  const body = (await response.json()) as { results?: Lookup[] }
  return body.results?.[0]
}

/**
 * L'API només ofereix miniatures en JPEG. El servidor d'imatges accepta
 * qualsevol mida i format a l'últim segment de la ruta, i el PNG conserva la
 * transparència i les vores netes de les icones.
 */
function artworkUrl(result: Lookup): string | undefined {
  const source = result.artworkUrl512 ?? result.artworkUrl100
  if (!source) return undefined
  return source.replace(/\/\d+x\d+bb\.(jpg|png)$/, `/${ARTWORK_SIZE}x${ARTWORK_SIZE}bb.png`)
}

async function download(url: string): Promise<Buffer> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`La descàrrega de la icona ha respost ${response.status}`)
  return Buffer.from(await response.arrayBuffer())
}

/**
 * Desa la icona a la biblioteca.
 *
 * Si la fitxa ja en tenia una, primer s'esborra. Substituir el fitxer d'un
 * document existent faria que Payload evités la col·lisió afegint un sufix al
 * nom, i al cap de tres importacions la biblioteca quedaria plena de versions
 * antigues que no mira ningú.
 */
async function replaceLogo(
  payload: Payload,
  slug: string,
  name: string,
  buffer: Buffer,
  credit: string,
  previous?: string | number,
): Promise<string> {
  if (previous) {
    try {
      await payload.delete({ collection: 'media', id: previous, overrideAccess: true })
    } catch {
      /* Si el document ja no hi és, no hi ha res a netejar. */
    }
  }

  const doc = await payload.create({
    collection: 'media',
    data: { alt: `Logotip de ${name}`, credit },
    file: {
      data: buffer,
      mimetype: 'image/png',
      name: `logotip-${slug}.png`,
      size: buffer.byteLength,
    },
    overrideAccess: true,
  })

  return String((doc as { id: string | number }).id)
}

async function importLogos(): Promise<void> {
  const force = process.env.FORCE_LOGOS === '1' || process.argv.includes('--force')
  const payload = await getPayload({ config })

  const apps = await payload.find({
    collection: 'apps',
    limit: 500,
    depth: 0,
    draft: true,
    overrideAccess: true,
    sort: 'name',
  })

  console.log(`\n🖼️  Logotips des de l'App Store (${apps.docs.length} fitxes)\n`)

  let imported = 0
  let skipped = 0
  const missing: string[] = []

  for (const app of apps.docs) {
    const slug = String(app.slug)
    const name = String(app.name)
    const bundleId = appStoreBundleIds[slug]

    if (!bundleId) {
      missing.push(`${name}: no consta a l'App Store`)
      continue
    }

    if (app.logo && !force) {
      console.log(`  ·  ${name.padEnd(18)} ja té logotip`)
      skipped += 1
      continue
    }

    try {
      const result = await lookup(bundleId)
      if (!result) {
        missing.push(`${name}: «${bundleId}» no retorna cap resultat`)
        continue
      }

      const url = artworkUrl(result)
      if (!url) {
        missing.push(`${name}: la fitxa de la botiga no porta icona`)
        continue
      }

      const buffer = await download(url)
      const credit = [
        `Logotip de ${result.trackName}, marca de ${result.sellerName}.`,
        `Obtingut de l'App Store el ${today()} (identificador ${result.trackId}).`,
        'S’utilitza únicament per identificar el servei analitzat.',
      ].join(' ')

      const previous =
        typeof app.logo === 'object' && app.logo !== null
          ? (app.logo as { id: string | number }).id
          : (app.logo as string | number | undefined)
      const logoId = await replaceLogo(payload, slug, name, buffer, credit, previous ?? undefined)

      /**
       * S'hi desa la forma curta de l'enllaç, amb l'identificador i sense el
       * nom comercial: no caduca quan l'aplicació es rebateja i no arrossega la
       * traducció castellana del títol a un projecte escrit en català.
       */
      const links = (app.links ?? {}) as Record<string, unknown>
      const appStore = `https://apps.apple.com/${STORE_COUNTRY.toLowerCase()}/app/id${result.trackId}`

      await payload.update({
        collection: 'apps',
        id: app.id,
        data: { logo: logoId, links: { ...links, appStore } },
        draft: false,
        overrideAccess: true,
      })

      const kb = Math.round(buffer.byteLength / 1024)
      console.log(`  ✓  ${name.padEnd(18)} ${String(kb).padStart(4)} kB  ${result.sellerName}`)
      imported += 1
    } catch (error) {
      missing.push(`${name}: ${(error as Error).message}`)
    }

    /** L'API d'Apple limita les peticions per minut. */
    await new Promise((resolve) => setTimeout(resolve, 400))
  }

  console.log(`\n  ${imported} importats · ${skipped} ja en tenien · ${missing.length} pendents`)
  if (missing.length) {
    console.log('\n  Pendents:')
    for (const line of missing) console.log(`    ⚠️  ${line}`)
  }
  console.log('')
  process.exit(0)
}

await importLogos().catch((error) => {
  console.error('❌ La importació de logotips ha fallat:', error)
  process.exit(1)
})
