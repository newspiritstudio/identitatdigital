import type { CollectionConfig } from 'payload'

import { isAdmin, isEditor, isPublic } from '@/lib/access'

/**
 * Sèrie temporal de puntuacions.
 *
 * Es crea automàticament des del hook de l'aplicació quan una puntuació
 * publicada canvia. Permet respondre «quan va baixar?» i «per què?» sense haver
 * de reconstruir versions senceres de la fitxa.
 */
export const ScoreSnapshots: CollectionConfig = {
  slug: 'score-snapshots',
  labels: { singular: 'Instantània de puntuació', plural: 'Historial de puntuacions' },
  admin: {
    group: 'Historial',
    useAsTitle: 'capturedAt',
    defaultColumns: ['app', 'capturedAt', 'overall', 'confidence', 'trigger'],
    description: 'Registre automàtic. No cal editar-hi res a mà.',
  },
  access: {
    read: isPublic,
    create: isEditor,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'app',
      label: 'Aplicació',
      type: 'relationship',
      relationTo: 'apps',
      required: true,
      index: true,
    },
    {
      name: 'capturedAt',
      label: 'Data',
      type: 'date',
      required: true,
      index: true,
      admin: { date: { displayFormat: 'dd/MM/yyyy HH:mm' } },
    },
    {
      type: 'row',
      fields: [
        { name: 'privacy', label: 'Privadesa', type: 'number', admin: { width: '20%' } },
        { name: 'security', label: 'Seguretat', type: 'number', admin: { width: '20%' } },
        { name: 'agency', label: 'Control', type: 'number', admin: { width: '20%' } },
        { name: 'overall', label: 'Global', type: 'number', admin: { width: '20%' } },
        { name: 'confidence', label: 'Confiança', type: 'number', admin: { width: '20%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'methodologyVersion',
          label: 'Versió de la metodologia',
          type: 'text',
          index: true,
          admin: { width: '50%' },
        },
        {
          name: 'trigger',
          label: 'Motiu',
          type: 'select',
          admin: { width: '50%' },
          options: [
            { label: 'Fitxa creada', value: 'created' },
            { label: 'Actualització de dades', value: 'data-update' },
            { label: 'Canvi de metodologia', value: 'methodology-change' },
            { label: 'Recàlcul massiu', value: 'bulk-recalculation' },
          ],
        },
      ],
    },
    {
      name: 'reason',
      label: 'Explicació del canvi',
      type: 'textarea',
      localized: true,
      admin: { description: 'Opcional, per als canvis que mereixen una nota editorial.' },
    },
    { name: 'breakdown', label: 'Detall per indicador', type: 'json', admin: { readOnly: true } },
  ],
}
