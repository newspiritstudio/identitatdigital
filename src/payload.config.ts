import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { ca } from '@payloadcms/translations/languages/ca'
import { en } from '@payloadcms/translations/languages/en'
import { es } from '@payloadcms/translations/languages/es'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { defaultLocale, localeLabels, locales } from './i18n/config'
import { env } from './lib/env'

import { Apps } from './collections/Apps'
import { Categories } from './collections/Categories'
import { Companies } from './collections/Companies'
import { DataTypes } from './collections/DataTypes'
import { Incidents } from './collections/Incidents'
import { Media } from './collections/Media'
import { PolicySnapshots } from './collections/PolicySnapshots'
import { ProcessingPurposes } from './collections/ProcessingPurposes'
import { ScoreSnapshots } from './collections/ScoreSnapshots'
import { ScoringMethodologies } from './collections/ScoringMethodologies'
import { Sources } from './collections/Sources'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/**
 * Tres cadenes del paquet català de Payload són incorrectes a la barra d'eines
 * dels llistats, que és la primera cosa que veu qualsevol persona editora.
 */
const catalan: typeof ca = {
  ...ca,
  translations: {
    ...ca.translations,
    general: {
      ...ca.translations.general,
      payloadSettings: 'Configuració de Payload',
      perPage: 'Per pàgina: {{limit}}',
      previous: 'Anterior',
    },
  },
}

export default buildConfig({
  i18n: {
    fallbackLanguage: 'ca',
    supportedLanguages: { ca: catalan, es, en },
  },
  admin: {
    user: 'users',
    meta: {
      title: 'Identitat.digital',
      description: 'Base de coneixement sobre privadesa digital',
    },
    importMap: { baseDir: path.resolve(dirname) },
  },
  collections: [
    Apps,
    Companies,
    Categories,
    Incidents,
    Sources,
    DataTypes,
    ProcessingPurposes,
    ScoringMethodologies,
    ScoreSnapshots,
    PolicySnapshots,
    Media,
    Users,
  ],
  /**
   * El català és l'única llengua editorial de la fase 1. Els altres codis hi
   * són perquè activar-los més endavant sigui omplir traduccions i no migrar
   * el model de dades.
   */
  localization: {
    locales: locales.map((locale) => ({ label: localeLabels[locale], code: locale })),
    defaultLocale,
    fallback: true,
  },
  editor: lexicalEditor(),
  graphQL: {
    disablePlaygroundInProduction: true,
    disable: process.env.ENABLE_GRAPHQL !== 'true',
  },
  secret: env.payloadSecret || '',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: mongooseAdapter({
    url: env.databaseUri || '',
    connectOptions: {
      maxPoolSize: Number(process.env.MONGODB_MAX_POOL_SIZE ?? '25'),
      minPoolSize: 5,
      maxIdleTimeMS: 30000,
      serverSelectionTimeoutMS: 5000,
    },
  }),
  sharp,
})
