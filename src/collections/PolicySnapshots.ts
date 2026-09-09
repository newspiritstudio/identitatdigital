import type { CollectionConfig } from 'payload'

import { isEditor, isPublic } from '@/lib/access'

/**
 * Instantànies de polítiques i condicions.
 *
 * Les plataformes reescriuen les seves polítiques sense avisar i sense deixar
 * rastre del text anterior. Sense aquesta col·lecció, una afirmació nostra de
 * 2026 esdevé indefensable el dia que el document canvia. Amb ella podem dir
 * què deia el document, quan ho deia i quan el vam llegir.
 */
export const PolicySnapshots: CollectionConfig = {
  slug: 'policy-snapshots',
  labels: { singular: 'Instantània de política', plural: 'Historial de polítiques' },
  admin: {
    group: 'Historial',
    useAsTitle: 'label',
    defaultColumns: ['label', 'app', 'documentType', 'effectiveDate', 'retrievedAt'],
  },
  access: {
    read: isPublic,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    {
      name: 'label',
      label: 'Etiqueta',
      type: 'text',
      required: true,
      admin: { description: 'Exemple: «Política de privadesa de WhatsApp — versió de gener de 2026».' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'app',
          label: 'Aplicació',
          type: 'relationship',
          relationTo: 'apps',
          index: true,
          admin: { width: '50%' },
        },
        {
          name: 'company',
          label: 'Empresa',
          type: 'relationship',
          relationTo: 'companies',
          index: true,
          admin: { width: '50%', description: 'Per a documents que cobreixen tot un grup.' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'documentType',
          label: 'Tipus de document',
          type: 'select',
          required: true,
          admin: { width: '50%' },
          options: [
            { label: 'Política de privadesa', value: 'privacy-policy' },
            { label: 'Condicions del servei', value: 'terms' },
            { label: 'Política de cookies', value: 'cookies' },
            { label: 'Política de dades', value: 'data-policy' },
            { label: 'Altres', value: 'other' },
          ],
        },
        {
          name: 'versionLabel',
          label: 'Versió declarada',
          type: 'text',
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'effectiveDate',
          label: 'En vigor des de',
          type: 'date',
          admin: { width: '50%', date: { pickerAppearance: 'dayOnly', displayFormat: 'dd/MM/yyyy' } },
        },
        {
          name: 'retrievedAt',
          label: 'Consultada el',
          type: 'date',
          required: true,
          admin: { width: '50%', date: { pickerAppearance: 'dayOnly', displayFormat: 'dd/MM/yyyy' } },
        },
      ],
    },
    { name: 'url', label: 'URL', type: 'text', required: true },
    { name: 'archiveUrl', label: 'Còpia arxivada', type: 'text' },
    {
      name: 'keyPoints',
      label: 'Punts rellevants',
      type: 'textarea',
      localized: true,
      admin: { description: 'Què diu aquest document que afecta l’anàlisi, en català.' },
    },
    {
      name: 'changesFromPrevious',
      label: 'Canvis respecte de la versió anterior',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'source',
      label: 'Font associada',
      type: 'relationship',
      relationTo: 'sources',
    },
  ],
}
