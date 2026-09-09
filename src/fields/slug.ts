import type { TextField } from 'payload'

const slugify = (value: string): string =>
  value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[·']/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

/**
 * Identificador estable per a URLs i per a les referències creuades del seed.
 * Es genera a partir del camp indicat quan l'editor no l'omple, però un cop
 * desat no es torna a tocar: canviar-lo trencaria enllaços publicats.
 */
export const slugField = (from = 'name'): TextField => ({
  name: 'slug',
  label: 'Identificador URL',
  type: 'text',
  required: true,
  unique: true,
  index: true,
  admin: {
    position: 'sidebar',
    description: 'Es genera automàticament a partir del nom si el deixes buit.',
  },
  hooks: {
    beforeValidate: [
      ({ value, data }) => {
        if (typeof value === 'string' && value.length > 0) return slugify(value)
        const source = (data as Record<string, unknown> | undefined)?.[from]
        if (typeof source === 'string' && source.length > 0) return slugify(source)
        return value
      },
    ],
  },
})

export { slugify }
