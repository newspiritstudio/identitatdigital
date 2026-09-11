import type { CollectionConfig } from 'payload'

import { isEditor, isPublic } from '@/lib/access'

/**
 * Filtracions de dades importades de Have I Been Pwned.
 *
 * Aquesta col·lecció és un mirall d'una font externa, no contingut editorial:
 * els camps que venen de HIBP són de només lectura al panell i els reescriu
 * cada importació. El que sí que és nostre és el lligam amb el model del
 * projecte, és a dir, a quina empresa i a quines aplicacions correspon la
 * filtració i quins tipus de dada del nostre vocabulari hi van quedar exposats.
 *
 * Una filtració NO és un incident. Els incidents són fitxes redactades i
 * contrastades per l'equip; una filtració és una dada de tercers que serveix
 * d'evidència i que, si mereix anàlisi pròpia, es promou a incident amb el camp
 * `incident`. Per això les filtracions no toquen cap puntuació: entrarien al
 * càlcul sense passar pel filtre de fonts del projecte.
 */
export const Breaches: CollectionConfig = {
  slug: 'breaches',
  labels: { singular: 'Filtració', plural: 'Filtracions' },
  admin: {
    group: 'Evidència',
    useAsTitle: 'title',
    defaultColumns: ['title', 'domain', 'breachDate', 'pwnCount', 'company'],
    description:
      'Mirall del catàleg públic de Have I Been Pwned. Els camps importats es refan a cada execució de «pnpm import-breaches»; només els lligams amb empreses, aplicacions i tipus de dada són editorials.',
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
          label: 'Filtració',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'name',
                  label: 'Identificador a HIBP',
                  type: 'text',
                  required: true,
                  unique: true,
                  index: true,
                  admin: {
                    width: '50%',
                    readOnly: true,
                    description: 'Clau estable de la font. És el que fa idempotent la importació.',
                  },
                },
                {
                  name: 'title',
                  label: 'Títol',
                  type: 'text',
                  required: true,
                  admin: { width: '50%', readOnly: true },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'domain',
                  label: 'Domini',
                  type: 'text',
                  index: true,
                  admin: {
                    width: '50%',
                    readOnly: true,
                    description: 'Per aquest camp s’intenta lligar la filtració amb una empresa.',
                  },
                },
                {
                  name: 'pwnCount',
                  label: 'Comptes afectats',
                  type: 'number',
                  index: true,
                  admin: { width: '50%', readOnly: true },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'breachDate',
                  label: 'Data de la filtració',
                  type: 'date',
                  index: true,
                  admin: { width: '33%', readOnly: true, date: { pickerAppearance: 'dayOnly' } },
                },
                {
                  name: 'addedDate',
                  label: 'Alta a HIBP',
                  type: 'date',
                  admin: { width: '33%', readOnly: true },
                },
                {
                  name: 'modifiedDate',
                  label: 'Última modificació a HIBP',
                  type: 'date',
                  admin: { width: '33%', readOnly: true },
                },
              ],
            },
            {
              name: 'description',
              label: 'Descripció',
              type: 'textarea',
              admin: {
                readOnly: true,
                description:
                  'Text pla. L’HTML original de HIBP s’esborra a la importació i els enllaços que contenia es desen a part.',
              },
            },
            {
              name: 'referenceUrls',
              label: 'Enllaços citats per HIBP',
              type: 'array',
              admin: { readOnly: true },
              fields: [{ name: 'url', label: 'Enllaç', type: 'text' }],
            },
            {
              name: 'logoPath',
              label: 'Logotip a HIBP',
              type: 'text',
              admin: { readOnly: true },
            },
          ],
        },
        {
          label: 'Dades exposades',
          fields: [
            {
              name: 'dataClasses',
              label: 'Categories originals de HIBP',
              type: 'array',
              admin: {
                readOnly: true,
                description: 'Vocabulari de la font, en anglès, tal com el publica HIBP.',
              },
              fields: [{ name: 'value', label: 'Categoria', type: 'text' }],
            },
            {
              name: 'dataTypes',
              label: 'Tipus de dada del projecte',
              type: 'relationship',
              relationTo: 'data-types',
              hasMany: true,
              index: true,
              admin: {
                description:
                  'Traducció de les categories de HIBP al nostre vocabulari. La importació omple les que sap mapar i deixa la resta a criteri editorial.',
              },
            },
            {
              name: 'unmappedDataClasses',
              label: 'Categories sense equivalència',
              type: 'array',
              admin: {
                readOnly: true,
                description:
                  'Categories de HIBP que no tenen tipus de dada equivalent al projecte. Serveixen per detectar buits del vocabulari.',
              },
              fields: [{ name: 'value', label: 'Categoria', type: 'text' }],
            },
          ],
        },
        {
          label: 'Qualificadors',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'isVerified',
                  label: 'Verificada',
                  type: 'checkbox',
                  index: true,
                  admin: { width: '33%', readOnly: true },
                },
                {
                  name: 'isFabricated',
                  label: 'Possiblement fabricada',
                  type: 'checkbox',
                  admin: { width: '33%', readOnly: true },
                },
                {
                  name: 'isSensitive',
                  label: 'Sensible',
                  type: 'checkbox',
                  admin: { width: '33%', readOnly: true },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'isRetired',
                  label: 'Retirada',
                  type: 'checkbox',
                  admin: { width: '33%', readOnly: true },
                },
                {
                  name: 'isSpamList',
                  label: 'Llista de correu brossa',
                  type: 'checkbox',
                  admin: { width: '33%', readOnly: true },
                },
                {
                  name: 'isMalware',
                  label: 'Programari maliciós',
                  type: 'checkbox',
                  admin: { width: '33%', readOnly: true },
                },
              ],
            },
          ],
        },
        {
          label: 'Lligams del projecte',
          fields: [
            {
              name: 'company',
              label: 'Empresa',
              type: 'relationship',
              relationTo: 'companies',
              index: true,
              admin: {
                description:
                  'La importació la dedueix del domini quan coincideix amb el lloc web d’una empresa documentada. Es pot corregir a mà i no es torna a tocar.',
              },
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
              name: 'incident',
              label: 'Incident documentat',
              type: 'relationship',
              relationTo: 'incidents',
              admin: {
                description:
                  'Ompliu-lo quan la filtració mereixi fitxa pròpia amb fonts contrastades. Només els incidents, mai les filtracions, entren al càlcul de puntuacions.',
              },
            },
            {
              name: 'companyLinkSource',
              label: 'Origen del lligam amb l’empresa',
              type: 'select',
              options: [
                { label: 'Deduït del domini', value: 'domain' },
                { label: 'Assignat per l’equip', value: 'editorial' },
              ],
              admin: {
                readOnly: true,
                description:
                  'Un lligam editorial mai no el sobreescriu una importació posterior.',
              },
            },
            {
              name: 'importedAt',
              label: 'Última importació',
              type: 'date',
              admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
            },
          ],
        },
      ],
    },
  ],
}
