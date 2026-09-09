import type { CollectionConfig } from 'payload'

import { isEditor, isPublic } from '@/lib/access'
import { slugField } from '@/fields/slug'

/**
 * Bretxes, sancions i usos indeguts documentats.
 *
 * Viuen fora de la fitxa perquè un mateix incident afecta sovint diverses
 * aplicacions del mateix grup —una sanció a Meta toca Facebook, Instagram i
 * WhatsApp alhora— i perquè són contingut editorial per si mateixos.
 */
export const Incidents: CollectionConfig = {
  slug: 'incidents',
  labels: { singular: 'Incident', plural: 'Incidents' },
  admin: {
    group: 'Directori',
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'severity', 'occurredAt'],
  },
  access: {
    read: isPublic,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  hooks: {
    afterChange: [
      /**
       * Un incident nou canvia la puntuació de seguretat de les aplicacions
       * afectades. Es tornen a desar perquè el hook de càlcul s'executi amb el
       * nou historial.
       */
      async ({ doc, req }) => {
        const apps = Array.isArray(doc.apps) ? doc.apps : []
        for (const app of apps) {
          const id = typeof app === 'object' && app !== null ? (app as { id?: string }).id : app
          if (!id) continue
          try {
            await req.payload.update({
              collection: 'apps',
              id: String(id),
              data: {},
              req,
            })
          } catch (error) {
            req.payload.logger.error(
              { err: error, app: id },
              'No s’han pogut recalcular les puntuacions després d’un incident',
            )
          }
        }
        return doc
      },
    ],
  },
  fields: [
    { name: 'title', label: 'Títol', type: 'text', required: true, localized: true },
    slugField('title'),
    {
      type: 'row',
      fields: [
        {
          name: 'type',
          label: 'Tipus',
          type: 'select',
          required: true,
          index: true,
          admin: { width: '50%' },
          options: [
            { label: 'Bretxa de seguretat', value: 'breach' },
            { label: 'Exposició o filtració de dades', value: 'leak' },
            { label: 'Recol·lecció massiva de dades públiques (scraping)', value: 'scraping' },
            { label: 'Sanció d’un regulador', value: 'regulatory-fine' },
            { label: 'Resolució o requeriment d’un regulador', value: 'regulatory-order' },
            { label: 'Ús indegut de dades', value: 'misuse' },
            { label: 'Vulnerabilitat greu', value: 'vulnerability' },
            { label: 'Altres', value: 'other' },
          ],
        },
        {
          name: 'severity',
          label: 'Gravetat',
          type: 'select',
          required: true,
          defaultValue: 'medium',
          index: true,
          admin: {
            width: '50%',
            description:
              'Baixa: sense dades personals afectades. Mitjana: dades de contacte. Alta: dades sensibles o milions de persones. Crítica: dades sensibles a gran escala o incompliment sistèmic.',
          },
          options: [
            { label: 'Baixa', value: 'low' },
            { label: 'Mitjana', value: 'medium' },
            { label: 'Alta', value: 'high' },
            { label: 'Crítica', value: 'critical' },
          ],
        },
      ],
    },
    {
      name: 'apps',
      label: 'Aplicacions afectades',
      type: 'relationship',
      relationTo: 'apps',
      hasMany: true,
      index: true,
    },
    {
      name: 'company',
      label: 'Empresa',
      type: 'relationship',
      relationTo: 'companies',
      index: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'occurredAt',
          label: 'Data dels fets',
          type: 'date',
          required: true,
          index: true,
          admin: { width: '50%', date: { pickerAppearance: 'dayOnly', displayFormat: 'dd/MM/yyyy' } },
        },
        {
          name: 'disclosedAt',
          label: 'Data de coneixement públic',
          type: 'date',
          admin: { width: '50%', date: { pickerAppearance: 'dayOnly', displayFormat: 'dd/MM/yyyy' } },
        },
      ],
    },
    {
      name: 'description',
      label: 'Descripció',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'affectedPeople',
      label: 'Persones afectades',
      type: 'text',
      admin: { description: 'Xifra documentada o estimació amb origen.' },
    },
    {
      name: 'regulatory',
      label: 'Actuació administrativa',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'authority', label: 'Autoritat', type: 'text', admin: { width: '50%' } },
            {
              name: 'fineAmountEur',
              label: 'Import de la sanció (€)',
              type: 'number',
              admin: { width: '50%' },
            },
          ],
        },
        { name: 'legalBasis', label: 'Precepte infringit', type: 'text' },
        {
          name: 'status',
          label: 'Estat',
          type: 'select',
          options: [
            { label: 'Ferma', value: 'final' },
            { label: 'Recorreguda', value: 'appealed' },
            { label: 'Anul·lada o reduïda', value: 'overturned' },
            { label: 'En tramitació', value: 'ongoing' },
          ],
        },
      ],
    },
    {
      name: 'sources',
      label: 'Fonts',
      type: 'relationship',
      relationTo: 'sources',
      hasMany: true,
      required: true,
      admin: { description: 'Un incident sense font no es publica.' },
    },
  ],
}
