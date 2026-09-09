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
