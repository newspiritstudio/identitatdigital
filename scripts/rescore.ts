import 'dotenv/config'
import { getPayload } from 'payload'

import config from '@/payload.config'
import { METHODOLOGY_VERSION } from '@/lib/scoring/methodology'

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

  for (const app of docs) {
    const updated = await payload.update({
      collection: 'apps',
      id: app.id,
      data: {},
      overrideAccess: true,
    })
    const before = app.scores?.overall ?? null
    const after = updated.scores?.overall ?? null
    const change = before === after ? '' : `  ${before ?? '—'} → ${after ?? '—'}`
    console.log(`  · ${String(app.name).padEnd(24)}${after ?? '—'}${change}`)
  }

  console.log('\n✅ Recàlcul completat\n')
  process.exit(0)
}

await rescore().catch((error) => {
  console.error('❌ Error durant el recàlcul:', error)
  process.exit(1)
})
