import type { CollectionConfig, PayloadRequest } from 'payload'

import { isEditor, isPublic } from '@/lib/access'
import { slugField } from '@/fields/slug'
import { incidentSeverityOptions, regulatoryStatusOptions } from '@/lib/labels'
import { rescoreApp } from '@/lib/scoring/rescore'

const relationIds = (value: unknown): string[] =>
  Array.isArray(value)
    ? value
        .map((entry) =>
          typeof entry === 'object' && entry !== null ? (entry as { id?: unknown }).id : entry,
        )
        .filter((id): id is string | number => typeof id === 'string' || typeof id === 'number')
        .map(String)
    : []

const rescoreAffected = async (req: PayloadRequest, ids: string[]) => {
  for (const id of new Set(ids)) {
    try {
      await rescoreApp(req.payload, id, { req })
    } catch (error) {
      req.payload.logger.error(
        { err: error, app: id },
        'No s’han pogut recalcular les puntuacions després d’un incident',
      )
    }
  }
}

/**
 * Bretxes, sancions i usos indeguts documentats.
 *
 * Viuen fora de la fitxa perquè un mateix incident sovint afecta diverses
 * aplicacions del mateix grup: una sanció a Meta toca Facebook, Instagram i
 * WhatsApp alhora.
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
    /**
     * Un incident canvia la puntuació de seguretat de les aplicacions que
     * toca. Es recalculen les que hi són ara, les que se n'han tret i, si
     * s'esborra, totes les que hi eren.
     */
    afterChange: [
      async ({ doc, previousDoc, req }) => {
        await rescoreAffected(req, [...relationIds(doc.apps), ...relationIds(previousDoc?.apps)])
        return doc
      },
    ],
    afterDelete: [
      async ({ doc, req }) => {
        await rescoreAffected(req, relationIds(doc.apps))
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
          options: incidentSeverityOptions,
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
          options: regulatoryStatusOptions,
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
