import 'dotenv/config'
import { getPayload } from 'payload'

import config from '@/payload.config'

/** Crea la primera persona administradora a partir de les variables d'entorn. */
async function createAdmin() {
  const email = process.env.SEED_ADMIN_EMAIL
  const password = process.env.SEED_ADMIN_PASSWORD

  if (!email || !password) {
    console.error('❌ Falten SEED_ADMIN_EMAIL o SEED_ADMIN_PASSWORD a l’entorn.')
    process.exit(1)
  }

  const payload = await getPayload({ config })
  const existing = await payload.find({
    collection: 'users',
    where: { email: { equals: email } },
    limit: 1,
    overrideAccess: true,
  })

  if (existing.docs[0]) {
    console.log(`ℹ️  Ja existeix un compte per a ${email}.`)
    process.exit(0)
  }

  await payload.create({
    collection: 'users',
    data: { email, password, name: 'Administració', role: 'admin' },
    overrideAccess: true,
  })

  console.log(`✅ Compte d’administració creat: ${email}`)
  process.exit(0)
}

await createAdmin().catch((error) => {
  console.error('❌ Error creant el compte:', error)
  process.exit(1)
})
