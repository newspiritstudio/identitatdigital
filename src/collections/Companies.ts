import type { CollectionConfig } from 'payload'

import { isEditor, isPublic } from '@/lib/access'
import { OWNERSHIPS_IMPLYING_SUBSIDIARY, ownershipOptions, revenueModelOptions } from '@/lib/companies'
import { countryOptions } from '@/lib/countries'
import { supervisoryAuthorityOptions } from '@/lib/supervisory-authorities'
import { slugField } from '@/fields/slug'

type CompanyData = { ownership?: string | null; parent?: unknown; parentGroup?: string | null }

/** Les administracions no tenen model d'ingressos ni filial europea: aquests camps no s'hi mostren. */
const notPublicBody = (data: CompanyData | undefined) => data?.ownership !== 'state'

/**
 * Una sola col·lecció per a empreses i grups, amb una relació a si mateixa.
 *
 * Separar «grup empresarial» d'«empresa» obligaria a fixar quantes capes té
 * cada conglomerat, i n'hi ha de dues i de tres (Alphabet, Google LLC, YouTube
 * LLC). Amb `parent` la jerarquia és tan profunda com calgui.
 *
 * Les administracions públiques hi conviuen amb la titularitat «Administració
 * o organisme públic»: comparteixen la relació amb les fitxes, la jerarquia
 * (EMT Madrid → Ajuntament de Madrid) i els dominis, i els camps que només
 * tenen sentit per a una empresa s'hi amaguen.
 */
export const Companies: CollectionConfig = {
  slug: 'companies',
  labels: { singular: 'Empresa o organisme', plural: 'Empreses i organismes' },
  admin: {
    group: 'Directori',
    useAsTitle: 'name',
    defaultColumns: ['name', 'ownership', 'parent', 'headquartersCountry', 'apps'],
    listSearchableFields: ['name', 'legalName', 'slug', 'productDomains.domain'],
    description:
      'Empreses, grups i administracions. Filtra per «Titularitat» per veure només els organismes públics o els cims de grup.',
  },
  access: {
    read: isPublic,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  hooks: {
    beforeValidate: [
      /*
       * Tenir matriu i no ser filial era la incoherència més repetida. Quan hi
       * ha matriu, una empresa privada, cotitzada o desconeguda passa a filial;
       * les administracions i les entitats sense ànim de lucre conserven la
       * seva titularitat, perquè un organisme que depèn d'un altre continua
       * sent públic. El nom lliure del grup deixa de servir quan hi ha matriu.
       */
      ({ data, originalDoc }) => {
        if (!data) return data
        const parent = 'parent' in data ? data.parent : originalDoc?.parent
        const ownership = data.ownership ?? originalDoc?.ownership
        if (parent && OWNERSHIPS_IMPLYING_SUBSIDIARY.includes(ownership)) data.ownership = 'subsidiary'
        if (parent) data.parentGroup = null
        return data
      },
    ],
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
              type: 'row',
              fields: [
                {
                  name: 'ownership',
                  label: 'Titularitat',
                  type: 'select',
                  options: ownershipOptions,
                  defaultValue: 'unknown',
                  index: true,
                  admin: {
                    width: '50%',
                    description: 'Amb una matriu assignada, les empreses passen a «Filial» automàticament.',
                  },
                  validate: (value: unknown, { data }: { data: Partial<CompanyData> }) =>
                    value === 'subsidiary' && !data?.parent && !data?.parentGroup?.trim()
                      ? 'Una filial necessita la matriu o, si el grup no és al directori, el nom del grup.'
                      : true,
                },
                {
                  name: 'parent',
                  label: 'Matriu o organisme del qual depèn',
                  type: 'relationship',
                  relationTo: 'companies',
                  index: true,
                  admin: {
                    width: '50%',
                    description: 'Buit si és el cim del grup. Exemple: Instagram → Meta Platforms.',
                  },
                },
              ],
            },
            {
              name: 'parentGroup',
              label: 'Grup (quan no és al directori)',
              type: 'text',
              admin: {
                condition: (data) => data?.ownership === 'subsidiary' && !data?.parent,
                description:
                  'Nom del grup propietari quan encara no té fitxa pròpia. Exemple: International Airlines Group (IAG).',
              },
            },
            {
              name: 'description',
              label: 'Descripció',
              type: 'textarea',
              localized: true,
              admin: { description: 'Qui és i per què importa des del punt de vista de les dades.' },
            },
          ],
        },
        {
          label: 'Seu i RGPD',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'headquartersCountry',
                  label: 'País de la seu',
                  type: 'select',
                  options: countryOptions,
                  index: true,
                  admin: { width: '50%', isClearable: true },
                },
                {
                  name: 'euEstablishment',
                  label: 'Establiment a la UE',
                  type: 'text',
                  admin: {
                    width: '50%',
                    condition: notPublicBody,
                    description:
                      'Filial europea que actua com a responsable davant del RGPD. El codi del país (IE) o la societat i la ciutat.',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'leadSupervisoryAuthority',
                  label: 'Autoritat de control principal',
                  type: 'select',
                  options: supervisoryAuthorityOptions,
                  index: true,
                  admin: { width: '50%', isClearable: true },
                },
                {
                  name: 'supervisoryNote',
                  label: 'Matís sobre l’autoritat',
                  type: 'text',
                  admin: {
                    width: '50%',
                    description: 'Opcional. Per exemple, qui actua com a representant a la UE quan no hi ha autoritat principal.',
                  },
                },
              ],
            },
            {
              name: 'privacyContact',
              label: 'Contacte de privadesa o DPD',
              type: 'text',
              admin: { description: 'Adreça o formulari per exercir drets.' },
            },
          ],
        },
        {
          label: 'Activitat',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'primaryRevenueModel',
                  label: 'Font d’ingressos principal',
                  type: 'select',
                  options: revenueModelOptions,
                  defaultValue: 'unknown',
                  admin: {
                    width: '50%',
                    condition: notPublicBody,
                    description:
                      'Explica bona part del comportament d’un servei: qui viu de la publicitat necessita perfilar.',
                  },
                },
                {
                  name: 'foundedYear',
                  label: 'Any de fundació',
                  type: 'number',
                  admin: { width: '50%' },
                },
              ],
            },
            { name: 'website', label: 'Lloc web', type: 'text' },
            {
              name: 'productDomains',
              label: 'Dominis dels seus serveis',
              type: 'array',
              admin: {
                description:
                  'Dominis amb què la gent es troba els serveis, no el domini corporatiu. Lliguen automàticament les filtracions de Have I Been Pwned: sense «snapchat.com» aquí, una filtració de Snapchat no troba mai Snap Inc.',
              },
              fields: [
                {
                  name: 'domain',
                  label: 'Domini',
                  type: 'text',
                  required: true,
                  index: true,
                  admin: { description: 'Sense protocol ni «www.». Per exemple: instagram.com' },
                },
              ],
            },
          ],
        },
        {
          label: 'Relacions',
          description: 'Es calculen soles a partir de les fitxes. Per canviar-les, edita la fitxa corresponent.',
          fields: [
            {
              name: 'apps',
              label: 'Aplicacions',
              type: 'join',
              collection: 'apps',
              on: 'company',
              defaultLimit: 50,
              admin: { defaultColumns: ['name', '_status'] },
            },
            {
              name: 'subsidiaries',
              label: 'Filials i organismes dependents',
              type: 'join',
              collection: 'companies',
              on: 'parent',
              defaultLimit: 50,
              admin: { defaultColumns: ['name', 'ownership', 'headquartersCountry'] },
            },
            {
              name: 'incidents',
              label: 'Incidents',
              type: 'join',
              collection: 'incidents',
              on: 'company',
              defaultLimit: 50,
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
