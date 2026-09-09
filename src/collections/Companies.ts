import type { CollectionConfig } from 'payload'

import { isEditor, isPublic } from '@/lib/access'
import { slugField } from '@/fields/slug'

/**
 * Una sola col·lecció per a empreses i grups, amb una relació a si mateixa.
 *
 * Separar «grup empresarial» d'«empresa» obligaria a decidir a priori quantes
 * capes té cada conglomerat, i n'hi ha de tres (Alphabet → Google LLC →
 * YouTube LLC) i de dues. Amb `parent` la jerarquia és tan profunda com calgui
 * i la pregunta «quines aplicacions són de Meta?» es respon pujant per l'arbre.
 */
export const Companies: CollectionConfig = {
  slug: 'companies',
  labels: { singular: 'Empresa', plural: 'Empreses' },
  admin: {
    group: 'Directori',
    useAsTitle: 'name',
    defaultColumns: ['name', 'parent', 'headquartersCountry', 'ownership'],
    description: 'Empreses i grups empresarials. Una empresa sense «matriu» és el cim del grup.',
  },
  access: {
    read: isPublic,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Identificació',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'name', label: 'Nom', type: 'text', required: true, admin: { width: '50%' } },
                {
                  name: 'legalName',
                  label: 'Denominació legal',
                  type: 'text',
                  admin: { width: '50%', description: 'Raó social completa, si difereix del nom comercial.' },
                },
              ],
            },
            {
              name: 'parent',
              label: 'Empresa matriu',
              type: 'relationship',
              relationTo: 'companies',
              index: true,
              admin: {
                description:
                  'Deixa-ho buit si aquesta empresa és el cim del grup. Exemple: Instagram → Meta Platforms.',
              },
            },
            {
              name: 'description',
              label: 'Descripció',
              type: 'textarea',
              localized: true,
              admin: { description: 'Qui és aquesta empresa i per què importa des del punt de vista de les dades.' },
            },
          ],
        },
        {
          label: 'Dades corporatives',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'headquartersCountry',
                  label: 'País de la seu',
                  type: 'text',
                  index: true,
                  admin: { width: '33%' },
                },
                {
                  name: 'euEstablishment',
                  label: 'Establiment a la UE',
                  type: 'text',
                  admin: {
                    width: '33%',
                    description: 'Filial europea que actua com a responsable del tractament davant del RGPD.',
                  },
                },
                {
                  name: 'leadSupervisoryAuthority',
                  label: 'Autoritat de control principal',
                  type: 'text',
                  admin: { width: '34%', description: 'Per exemple: DPC (Irlanda), CNIL (França).' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'ownership',
                  label: 'Titularitat',
                  type: 'select',
                  options: [
                    { label: 'Cotitzada en borsa', value: 'public' },
                    { label: 'Privada', value: 'private' },
                    { label: 'Filial d’un grup', value: 'subsidiary' },
                    { label: 'Fundació o entitat sense ànim de lucre', value: 'nonprofit' },
                    { label: 'Cooperativa o comunitat', value: 'community' },
                    { label: 'Estatal', value: 'state' },
                    { label: 'Desconeguda', value: 'unknown' },
                  ],
                  defaultValue: 'unknown',
                  admin: { width: '50%' },
                },
                {
                  name: 'foundedYear',
                  label: 'Any de fundació',
                  type: 'number',
                  admin: { width: '50%' },
                },
              ],
            },
            {
              name: 'primaryRevenueModel',
              label: 'Font d’ingressos principal',
              type: 'select',
              options: [
                { label: 'Publicitat', value: 'advertising' },
                { label: 'Subscripcions', value: 'subscription' },
                { label: 'Model mixt (gratuït i de pagament)', value: 'freemium' },
                { label: 'Diverses fonts combinades', value: 'mixed' },
                { label: 'Venda de productes o comissions', value: 'commerce' },
                { label: 'Serveis al núvol i empresa', value: 'cloud' },
                { label: 'Maquinari', value: 'hardware' },
                { label: 'Donacions i finançament públic', value: 'donations' },
                { label: 'Desconeguda', value: 'unknown' },
              ],
              defaultValue: 'unknown',
              admin: {
                description:
                  'Explica bona part del comportament d’un servei: qui viu de la publicitat necessita perfilar.',
              },
            },
            { name: 'website', label: 'Lloc web', type: 'text' },
            {
              name: 'privacyContact',
              label: 'Contacte de privadesa o DPD',
              type: 'text',
              admin: { description: 'Adreça o formulari per exercir drets davant del grup.' },
            },
          ],
        },
      ],
    },
    slugField('name'),
    {
      name: 'logo',
      label: 'Logotip',
      type: 'upload',
      relationTo: 'media',
      admin: { position: 'sidebar' },
    },
  ],
}
