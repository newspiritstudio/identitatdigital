import type { CollectionConfig } from 'payload'

import { isEditor, isPublic } from '@/lib/access'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Fitxer', plural: 'Biblioteca multimèdia' },
  admin: { group: 'Sistema' },
  access: {
    read: isPublic,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  upload: {
    mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'application/pdf'],
    imageSizes: [
      { name: 'thumbnail', width: 128, height: 128, position: 'centre' },
      { name: 'card', width: 512, height: 512, position: 'centre' },
    ],
    /*
     * Sense capçalera de memòria cau, cada visita a la graella tornava a
     * demanar els quatre-cents logotips a Payload i saturava el servidor. Un
     * dia de validesa i una setmana de marge: substituir un logotip és rar.
     */
    modifyResponseHeaders: ({ headers }) => {
      headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800')
      // Un SVG és un document que pot portar scripts, i aquí se serveix des del
      // mateix origen que el panell. Obert directament, el navegador el tracta
      // com una pàgina aïllada i sense permís per executar res; dins d'un
      // <img> no canvia res.
      headers.set('Content-Security-Policy', "default-src 'none'; style-src 'unsafe-inline'; sandbox")
      return headers
    },
  },
  fields: [
    {
      name: 'alt',
      label: 'Text alternatiu',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'credit',
      label: 'Crèdit o llicència',
      type: 'text',
      admin: { description: 'Autoria i condicions d’ús del fitxer, quan calgui citar-les.' },
    },
  ],
}
