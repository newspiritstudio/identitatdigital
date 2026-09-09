import type { CollectionConfig } from 'payload'

import { isEditor, isPublic } from '@/lib/access'
import { slugField } from '@/fields/slug'

/**
 * Les fonts són una col·lecció independent, no un camp dins de cada fitxa.
 *
 * Una mateixa política de privadesa sosté desenes d'afirmacions d'una app i, a
 * vegades, de diverses apps del mateix grup. Tenir-la una sola vegada permet
 * actualitzar-la en un únic lloc, saber quantes afirmacions depenen d'un
 * document i, més endavant, detectar automàticament quan una font ha canviat.
 */
export const Sources: CollectionConfig = {
  slug: 'sources',
  labels: { singular: 'Font', plural: 'Fonts' },
  admin: {
    group: 'Evidència',
    useAsTitle: 'title',
    defaultColumns: ['title', 'publisher', 'type', 'consultedAt'],
    description:
      'Documents citables. Cada afirmació rellevant del projecte ha d’apuntar a una o més entrades d’aquí.',
  },
  access: {
    read: isPublic,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  fields: [
    {
      name: 'title',
      label: 'Títol',
      type: 'text',
      required: true,
      admin: {
        description:
          'Títol original del document. Si és en un altre idioma, conserva’l tal com és i explica’l al resum.',
      },
    },
    slugField('title'),
    {
      name: 'url',
      label: 'URL',
      type: 'text',
      required: true,
      admin: { description: 'Enllaç directe al document consultat.' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'publisher',
          label: 'Editor o organisme',
          type: 'text',
          required: true,
          admin: { width: '50%', description: 'Qui publica el document: Meta, CNIL, EDPB, Mozilla…' },
        },
        {
          name: 'language',
          label: 'Idioma de la font',
          type: 'select',
          defaultValue: 'en',
          options: [
            { label: 'Català', value: 'ca' },
            { label: 'Castellà', value: 'es' },
            { label: 'Anglès', value: 'en' },
            { label: 'Francès', value: 'fr' },
            { label: 'Alemany', value: 'de' },
            { label: 'Altres', value: 'other' },
          ],
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'type',
          label: 'Tipus de font',
          type: 'select',
          required: true,
          index: true,
          options: [
            { label: 'Política de privadesa', value: 'privacy-policy' },
            { label: 'Condicions del servei', value: 'terms' },
            { label: 'Centre de privadesa o de seguretat', value: 'privacy-center' },
            { label: 'Documentació de suport o ajuda', value: 'support-doc' },
            { label: 'Documentació tècnica', value: 'technical-doc' },
            { label: 'Informe de transparència', value: 'transparency-report' },
            { label: 'Fitxa d’App Store o Google Play', value: 'app-store' },
            { label: 'Resolució o sanció d’un regulador', value: 'regulator' },
            { label: 'Legislació o directriu', value: 'legislation' },
            { label: 'Estudi acadèmic', value: 'academic' },
            { label: 'Informe d’una ONG o entitat de defensa de drets', value: 'ngo' },
            { label: 'Auditoria independent', value: 'audit' },
            { label: 'Mitjà especialitzat', value: 'press' },
            { label: 'Repositori de codi', value: 'repository' },
            { label: 'Altres fonts secundàries', value: 'other' },
          ],
          admin: { width: '50%' },
        },
        {
          name: 'reliability',
          label: 'Fiabilitat',
          type: 'select',
          required: true,
          defaultValue: 'primary',
          options: [
            { label: 'Primària oficial — ho diu el mateix servei', value: 'primary' },
            { label: 'Autoritat — regulador, tribunal, legislació', value: 'authority' },
            { label: 'Independent — acadèmia, ONG, auditoria', value: 'independent' },
            { label: 'Secundària — mitjans i recopilacions de tercers', value: 'secondary' },
          ],
          admin: {
            width: '50%',
            description:
              'Determina el pes de la font dins del Confidence Score. No confonguis «oficial» amb «cert»: una política diu què declara l’empresa.',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'publishedAt',
          label: 'Data del document',
          type: 'date',
          admin: {
            width: '50%',
            date: { pickerAppearance: 'dayOnly', displayFormat: 'dd/MM/yyyy' },
            description: 'Data de publicació o darrera actualització que declara el document.',
          },
        },
        {
          name: 'consultedAt',
          label: 'Data de consulta',
          type: 'date',
          required: true,
          index: true,
          admin: {
            width: '50%',
            date: { pickerAppearance: 'dayOnly', displayFormat: 'dd/MM/yyyy' },
            description: 'Quan vam llegir aquest document nosaltres. És el que fa reproduïble l’anàlisi.',
          },
        },
      ],
    },
    {
      name: 'archiveUrl',
      label: 'Còpia arxivada',
      type: 'text',
      admin: {
        description:
          'Enllaç a Wayback Machine o equivalent. Les polítiques canvien sense avís; la còpia és el que sosté l’afirmació d’aquí a dos anys.',
      },
    },
    {
      name: 'excerpt',
      label: 'Fragment citat',
      type: 'textarea',
      admin: {
        description:
          'Cita literal del passatge rellevant, en l’idioma original. No el tradueixis aquí.',
      },
    },
    {
      name: 'summary',
      label: 'Resum en català',
      type: 'textarea',
      localized: true,
      admin: { description: 'Què aporta aquesta font al projecte, redactat en català.' },
    },
  ],
}
