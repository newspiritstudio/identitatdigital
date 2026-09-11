import type { CollectionConfig } from 'payload'

import { isEditor, isPublic } from '@/lib/access'
import { slugField } from '@/fields/slug'

/**
 * Catàleg normalitzat de tipus de dades personals.
 *
 * És la peça que fa possible la consulta creuada: «quines aplicacions recullen
 * ubicació precisa?» és una cerca per relació, no una cerca de text lliure dins
 * de vint redaccions diferents de la mateixa idea.
 *
 * `sensitivity` alimenta directament la dimensió de minimització de dades del
 * Privacy Score: no és el mateix recollir el fus horari que la orientació
 * sexual.
 */
export const DataTypes: CollectionConfig = {
  slug: 'data-types',
  labels: { singular: 'Tipus de dada personal', plural: 'Tipus de dades personals' },
  admin: {
    group: 'Marc d’anàlisi',
    useAsTitle: 'name',
    defaultColumns: ['name', 'family', 'sensitivity', 'specialCategory'],
    description:
      'Vocabulari tancat de dades personals. Afegir-hi entrades canvia el que podem preguntar a tot el directori.',
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
          name: 'family',
          label: 'Família',
          type: 'select',
          required: true,
          index: true,
          admin: { width: '50%' },
          options: [
            { label: 'Identificadors', value: 'identifiers' },
            { label: 'Credencials i secrets', value: 'credentials' },
            { label: 'Dades de contacte', value: 'contact' },
            { label: 'Ubicació', value: 'location' },
            { label: 'Contingut de la persona usuària', value: 'content' },
            { label: 'Comportament i ús', value: 'behaviour' },
            { label: 'Xarxa social i contactes', value: 'social' },
            { label: 'Dispositiu i xarxa', value: 'device' },
            { label: 'Dades financeres', value: 'financial' },
            { label: 'Biometria', value: 'biometric' },
            { label: 'Salut i benestar', value: 'health' },
            { label: 'Categories especials (art. 9 RGPD)', value: 'special' },
            { label: 'Diagnòstic i rendiment', value: 'diagnostics' },
          ],
        },
        {
          name: 'sensitivity',
          label: 'Sensibilitat',
          type: 'number',
          required: true,
          min: 1,
          max: 5,
          defaultValue: 3,
          admin: {
            width: '50%',
            description:
              '1 = poc revelador (fus horari). 3 = revelador (historial de cerca). 5 = pot causar dany greu (biometria, ideologia, salut).',
          },
        },
      ],
    },
    {
      name: 'specialCategory',
      label: 'Categoria especial de l’article 9 del RGPD',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description:
          'Origen ètnic, opinions polítiques, religió, afiliació sindical, genètica, biometria identificativa, salut, vida i orientació sexual.',
      },
    },
    {
      name: 'description',
      label: 'Descripció',
      type: 'textarea',
      localized: true,
      required: true,
      admin: { description: 'Què inclou exactament aquest tipus de dada i què no.' },
    },
    {
      name: 'whyItMatters',
      label: 'Per què importa',
      type: 'textarea',
      localized: true,
      admin: { description: 'Text divulgatiu: què es pot deduir d’una persona a partir d’aquesta dada.' },
    },
    {
      name: 'appleLabel',
      label: 'Equivalent a l’etiqueta de l’App Store',
      type: 'text',
      admin: {
        description:
          'Nom que fa servir Apple per a aquesta categoria, quan n’hi ha. Permet traçar d’on surt la dada quan la font és una fitxa de l’App Store.',
      },
    },
  ],
}
