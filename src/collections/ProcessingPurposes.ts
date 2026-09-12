import type { CollectionConfig } from 'payload'

import { isEditor, isPublic } from '@/lib/access'
import { slugField } from '@/fields/slug'

/**
 * Finalitats del tractament.
 *
 * La quantitat de dades recollides diu poc per si sola; el que canvia la
 * valoració és per a què s'utilitzen. `privacyImpact` fa que «prevenció del
 * frau» i «publicitat personalitzada» no pesin igual.
 */
export const ProcessingPurposes: CollectionConfig = {
  slug: 'processing-purposes',
  labels: { singular: 'Finalitat del tractament', plural: 'Finalitats del tractament' },
  admin: {
    group: 'Marc d’anàlisi',
    useAsTitle: 'name',
    defaultColumns: ['name', 'privacyImpact', 'necessaryForService'],
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
      type: 'row',
      fields: [
        {
          name: 'privacyImpact',
          label: 'Impacte sobre la privadesa',
          type: 'select',
          required: true,
          index: true,
          defaultValue: 'neutral',
          admin: { width: '50%' },
          options: [
            { label: 'Necessari — sense això el servei no funciona', value: 'necessary' },
            { label: 'Neutre', value: 'neutral' },
            { label: 'Intrusiu', value: 'intrusive' },
            { label: 'Molt intrusiu', value: 'highly-intrusive' },
          ],
        },
        {
          name: 'necessaryForService',
          label: 'Compatible amb el servei bàsic',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            width: '50%',
            description: 'Marca-ho si la finalitat és inherent a la funció que la persona busca.',
          },
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
      name: 'typicalLegalBasis',
      label: 'Base jurídica habitual (RGPD)',
      type: 'select',
      options: [
        { label: 'Execució del contracte', value: 'contract' },
        { label: 'Consentiment', value: 'consent' },
        { label: 'Interès legítim', value: 'legitimate-interest' },
        { label: 'Obligació legal', value: 'legal-obligation' },
        { label: 'Diverses o no determinada', value: 'mixed' },
      ],
      admin: {
        description:
          'Base que invoca habitualment el sector per a aquesta finalitat. No és una afirmació sobre cap servei concret.',
      },
    },
  ],
}
