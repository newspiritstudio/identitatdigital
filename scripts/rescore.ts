import 'dotenv/config'
import { getPayload } from 'payload'

import config from '@/payload.config'
import { METHODOLOGY_VERSION } from '@/lib/scoring/methodology'
import { rescoreApp } from '@/lib/scoring/rescore'

/**
 * Recalcula totes les puntuacions.
 *
 * Cal executar-lo després de qualsevol canvi al motor de càlcul: les
 * puntuacions es desen a la fitxa i no es refarien soles fins que algú la
 * tornés a desar. Cada canvi real queda registrat com a instantània.
 */
async function rescore() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'apps', limit: 0, pagination: false, depth: 0, overrideAccess: true })

  console.log(`\n🔄 Recalculant ${docs.length} fitxes amb la metodologia ${METHODOLOGY_VERSION}\n`)

  // Una fitxa publicada amb un esborrany pendent no es toca: es recalcularà
  // quan es publiqui (vegeu `rescoreApp`).
  const trigger = process.argv.includes('--methodology') ? 'methodology-change' : 'bulk-recalculation'
  let skipped = 0
  for (const app of docs) {
    const result = await rescoreApp(payload, String(app.id), { trigger })
    const name = String(app.name).padEnd(24)
    if (result.status !== 'updated') {
      skipped += 1
      console.log(`  · ${name}omesa (${result.status === 'skipped-draft' ? 'esborrany pendent' : 'no trobada'})`)
      continue
    }
    const before = app.scores?.overall ?? null
    const after = result.overall
    const change = before === after ? '' : `  ${before ?? '—'} → ${after ?? '—'}`
    console.log(`  · ${name}${after ?? '—'}${change}`)
  }
  if (skipped > 0) console.log(`\n  ${skipped} fitxa/es omesa/es.`)

  console.log('\n✅ Recàlcul completat\n')
  process.exit(0)
}

await rescore().catch((error) => {
  console.error('❌ Error durant el recàlcul:', error)
  process.exit(1)
})
