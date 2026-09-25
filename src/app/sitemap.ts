import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'

import config from '@/payload.config'
import { loadCorpus } from '@/lib/analysis'
import { env } from '@/lib/env'

// Es llegeix a cada petició: al build no hi ha base de dades, i les fitxes
// canvien sense tornar a desplegar.
export const dynamic = 'force-dynamic'

const STATIC_PATHS = [
  '/',
  '/aplicacions',
  '/empreses',
  '/analisi',
  '/analisi/catala',
  '/analisi/dades',
  '/analisi/evidencia',
  '/analisi/grups',
  '/analisi/patrons',
  '/analisi/sortir',
  '/filtracions',
  '/institucions',
  '/eines',
  '/eines/diagnostic',
  '/eines/credencials',
  '/eines/metadades',
  '/eines/comparador',
  '/dades',
  '/metodologia',
  '/consultes',
  '/legal',
  '/legal/avis-legal',
  '/legal/privadesa',
  '/legal/galetes',
  '/legal/condicions',
  '/legal/accessibilitat',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = env.publicAppUrl.replace(/\/$/, '')
  // Només fitxes publicades: el corpus ja descarta els esborranys.
  const corpus = await loadCorpus(await getPayload({ config }))

  return [
    ...STATIC_PATHS.map((path) => ({ url: `${base}${path === '/' ? '' : path}` })),
    ...corpus.apps.map((app) => ({
      url: `${base}/aplicacions/${encodeURIComponent(app.slug)}`,
      lastModified: app.updatedAt,
    })),
    ...corpus.companies.map((company) => ({
      url: `${base}/empreses/${encodeURIComponent(company.slug)}`,
      lastModified: company.updatedAt,
    })),
  ]
}
