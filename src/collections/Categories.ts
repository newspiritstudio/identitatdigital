import type { CollectionConfig } from 'payload'

import { isEditor, isPublic } from '@/lib/access'
import { slugField } from '@/fields/slug'

/**
 * Categories de servei. `functionalNeed` descriu la necessitat que cobreix cada
 * categoria, i és el que evita proposar un gestor de contrasenyes com a
 * alternativa a una missatgeria.
 */
export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: { singular: 'Categoria', plural: 'Categories' },
  admin: {
    group: 'Directori',
    useAsTitle: 'name',
    defaultColumns: ['name', 'parent', 'slug'],
  },
  access: {
    read: isPublic,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    { name: 'name', label: 'Nom', type: 'text', required: true, localized: true },
    slugField('name'),
    {
      name: 'parent',
      label: 'Categoria superior',
      type: 'relationship',
      relationTo: 'categories',
      index: true,
    },
    {
      name: 'functionalNeed',
      label: 'Necessitat que cobreix',
      type: 'textarea',
      localized: true,
      required: true,
      admin: {
        description:
          'Què vol fer una persona quan utilitza un servei d’aquesta categoria. És el criteri que fa que dues aplicacions siguin comparables.',
      },
    },
    {
      name: 'description',
      label: 'Descripció',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'privacyContext',
      label: 'Context de privadesa de la categoria',
      type: 'textarea',
      localized: true,
      admin: {
        description:
          'Quines dades són inevitables en aquesta categoria i quines no. Evita penalitzar un servei per dades que la seva funció exigeix.',
      },
    },
  ],
}
