import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { ca } from '@payloadcms/translations/languages/ca'
import { en } from '@payloadcms/translations/languages/en'
import { es } from '@payloadcms/translations/languages/es'
import path from 'path'
import { buildConfig, type CollectionConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { defaultLocale, localeLabels, locales } from './i18n/config'
import { markContentChanged } from './lib/analysis/corpus'
import { env } from './lib/env'

import { Apps } from './collections/Apps'
import { Breaches } from './collections/Breaches'
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

/*
 * Una variable buida o mal escrita no pot acabar en `maxPoolSize: 0`, que per
 * al controlador de MongoDB vol dir «sense límit».
 */
const configuredPool = Number.parseInt(process.env.MONGODB_MAX_POOL_SIZE ?? '', 10)
const maxPoolSize = Number.isInteger(configuredPool) && configuredPool > 0 ? configuredPool : 25

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/**
 * Algunes cadenes del paquet català són incorrectes (majúscules, accents,
 * ordre) i surten a l'entrada i a la barra d'eines dels llistats, que és el
 * primer que veu qualsevol persona editora. El panell porta la marca del lloc,
 * no la del CMS: `payloadSettings` és l'única cadena que l'esmentava.
 */
const catalan: typeof ca = {
  ...ca,
  translations: {
    ...ca.translations,
    general: {
      ...ca.translations.general,
      email: 'Correu electrònic',
      isEditing: 'està editant',
      payloadSettings: 'Configuració del panell',
      perPage: 'Per pàgina: {{limit}}',
      previous: 'Anterior',
    },
  },
}

const spanish: typeof es = {
  ...es,
  translations: {
    ...es.translations,
    general: { ...es.translations.general, payloadSettings: 'Configuración del panel' },
  },
}

const english: typeof en = {
  ...en,
  translations: {
    ...en.translations,
    general: { ...en.translations.general, payloadSettings: 'Panel settings' },
  },
}

/**
 * Qualsevol escriptura avisa la memòria del corpus perquè la petició següent
 * torni a comprovar si el contingut ha canviat, sense esperar el marge de 30 s.
 * S'afegeix als hooks que ja tingui cada col·lecció, no els substitueix.
 */
const withContentInvalidation = (collection: CollectionConfig): CollectionConfig => ({
  ...collection,
  hooks: {
    ...collection.hooks,
    afterChange: [
      ...(collection.hooks?.afterChange ?? []),
      ({ doc }) => {
        markContentChanged()
        return doc
      },
    ],
    afterDelete: [
      ...(collection.hooks?.afterDelete ?? []),
      ({ doc }) => {
        markContentChanged()
        return doc
      },
    ],
  },
})

export default buildConfig({
  i18n: {
    fallbackLanguage: 'ca',
    supportedLanguages: { ca: catalan, es: spanish, en: english },
  },
  admin: {
    user: 'users',
    // Format català numèric: el de sèrie escriu «setembre 26è 2026, 12:45 PM».
    dateFormat: 'dd/MM/yyyy HH:mm',
    meta: {
      title: 'Panell d’edició',
      titleSuffix: '· identitat.digital',
      metadataBase: new URL(env.publicAppUrl || 'http://localhost:3000'),
      description: 'Base de coneixement sobre privadesa digital',
      // Les icones i la imatge social són les del web, no les de sèrie del CMS.
      icons: [
        { rel: 'icon', type: 'image/svg+xml', url: '/icon.svg' },
        { rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' },
        { rel: 'apple-touch-icon', url: '/apple-icon.png' },
      ],
      defaultOGImageType: 'off',
      openGraph: {
        siteName: 'identitat.digital',
        images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
      },
      robots: { index: false, follow: false },
    },
    components: {
      graphics: {
        Icon: '@/brand/AdminGraphics#AdminIcon',
        Logo: '@/brand/AdminGraphics#AdminLogo',
      },
    },
    importMap: { baseDir: path.resolve(dirname) },
  },
  collections: [
    Apps,
    Companies,
    Categories,
    Incidents,
    Sources,
    Breaches,
    DataTypes,
    ProcessingPurposes,
    ScoringMethodologies,
    ScoreSnapshots,
    PolicySnapshots,
    Media,
    Users,
  ].map(withContentInvalidation),
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
  // Les galetes de sessió porten el nom del lloc. Canviar-lo tanca les sessions obertes.
  cookiePrefix: 'identitat',
  /*
   * Sense llista, Payload accepta la galeta de sessió vingui de l'origen que
   * vingui. Amb el domini públic, una petició d'un altre lloc amb la galeta
   * de qui té la sessió oberta al panell no s'autentica. No es fa amb
   * `serverURL` perquè aquest també faria absolutes les URL dels fitxers.
   */
  csrf: env.appUrl ? [new URL(env.appUrl).origin] : [],
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: mongooseAdapter({
    url: env.databaseUri || '',
    connectOptions: {
      maxPoolSize,
      minPoolSize: Math.min(5, maxPoolSize),
      maxIdleTimeMS: 30000,
      serverSelectionTimeoutMS: 5000,
    },
  }),
  sharp,
})
