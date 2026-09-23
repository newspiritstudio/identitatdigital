import type { CollectionConfig } from 'payload'

import { isAdmin, isEditor, isPublic } from '@/lib/access'

/**
 * Versions publicades de la metodologia de puntuació.
 *
 * El càlcul viu al codi (`src/lib/scoring/`); aquesta col·lecció n'és la
 * publicació llegible. Es genera des del codi amb `pnpm seed`, així que el
 * document i el motor no poden divergir.
 */
export const ScoringMethodologies: CollectionConfig = {
  slug: 'scoring-methodologies',
  labels: { singular: 'Metodologia', plural: 'Metodologies de puntuació' },
  admin: {
    group: 'Marc d’anàlisi',
    useAsTitle: 'version',
    defaultColumns: ['version', 'effectiveFrom', 'status'],
    description:
      'Cada canvi de pesos o d’indicadors exigeix una versió nova: les puntuacions antigues han de continuar sent explicables.',
  },
  versions: { drafts: { autosave: false }, maxPerDoc: 20 },
  access: {
    read: isPublic,
    create: isAdmin,
    update: isEditor,
    delete: isAdmin,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'version',
          label: 'Versió',
          type: 'text',
          required: true,
          unique: true,
          index: true,
          admin: { width: '33%', description: 'Exemple: 1.0' },
        },
        {
          name: 'effectiveFrom',
          label: 'Vigent des de',
          type: 'date',
          required: true,
          admin: { width: '33%', date: { pickerAppearance: 'dayOnly', displayFormat: 'dd/MM/yyyy' } },
        },
        {
          name: 'status',
          label: 'Estat',
          type: 'select',
          defaultValue: 'current',
          admin: { width: '34%' },
          options: [
            { label: 'Vigent', value: 'current' },
            { label: 'Retirada', value: 'superseded' },
            { label: 'Esborrany de treball', value: 'draft' },
          ],
        },
      ],
    },
    {
      name: 'summary',
      label: 'Resum',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'principles',
      label: 'Principis',
      labels: { singular: 'Principi', plural: 'Principis' },
      type: 'array',
      fields: [
        { name: 'title', label: 'Títol', type: 'text', localized: true, required: true },
        { name: 'body', label: 'Explicació', type: 'textarea', localized: true, required: true },
      ],
    },
    {
      name: 'dimensions',
      label: 'Dimensions',
      labels: { singular: 'Dimensió', plural: 'Dimensions' },
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'key', label: 'Clau', type: 'text', required: true, admin: { width: '33%' } },
            { name: 'label', label: 'Nom', type: 'text', localized: true, required: true, admin: { width: '33%' } },
            { name: 'weight', label: 'Pes', type: 'number', required: true, admin: { width: '34%' } },
          ],
        },
      ],
    },
    {
      name: 'indicators',
      label: 'Indicadors',
      labels: { singular: 'Indicador', plural: 'Indicadors' },
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'key', label: 'Clau', type: 'text', required: true, admin: { width: '30%' } },
            { name: 'dimension', label: 'Dimensió', type: 'text', required: true, admin: { width: '25%' } },
            { name: 'weight', label: 'Pes', type: 'number', required: true, admin: { width: '15%' } },
            { name: 'label', label: 'Nom', type: 'text', localized: true, required: true, admin: { width: '30%' } },
          ],
        },
        {
          name: 'scope',
          label: 'Àmbit',
          type: 'select',
          defaultValue: 'all',
          options: [
            { label: 'Tots els serveis', value: 'all' },
            { label: 'Només serveis públics', value: 'public-service' },
          ],
        },
        { name: 'description', label: 'Descripció', type: 'textarea', localized: true },
      ],
    },
    {
      name: 'unknownPolicy',
      label: 'Tractament de la informació desconeguda',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'confidenceFormula',
      label: 'Càlcul del Confidence Score',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'changelog',
      label: 'Canvis respecte de la versió anterior',
      type: 'textarea',
      localized: true,
    },
  ],
}
