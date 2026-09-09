import type { Field, GroupField } from 'payload'

/**
 * Vocabulari compartit de l'«evidence first».
 *
 * `status` diu QUÈ afirmem, `evidenceLevel` diu AMB QUIN SUPORT ho afirmem i
 * `sources` diu D'ON surt. Els tres viatgen sempre junts: cap afirmació
 * rellevant del projecte pot existir sense aquesta tripleta.
 *
 * La distinció entre `unknown` i `na` és deliberada i té conseqüències al
 * càlcul de puntuacions:
 *
 *   - `unknown` = no ho hem pogut documentar. No penalitza la puntuació, però
 *     sí que baixa el Confidence Score. UNKNOWN ≠ NO.
 *   - `na`      = l'indicador no aplica a aquest servei (per exemple, xifratge
 *     d'extrem a extrem en un navegador). Surt del càlcul sense castigar ni la
 *     puntuació ni la confiança.
 */
export const EVIDENCE_STATUSES = ['yes', 'partial', 'no', 'unknown', 'na'] as const
export type EvidenceStatus = (typeof EVIDENCE_STATUSES)[number]

export const evidenceStatusOptions = [
  { label: 'Sí — documentat', value: 'yes' },
  { label: 'Parcialment', value: 'partial' },
  { label: 'No — documentat', value: 'no' },
  { label: 'Desconegut (no hem trobat evidència)', value: 'unknown' },
  { label: 'No aplica a aquest servei', value: 'na' },
]

export const EVIDENCE_LEVELS = [
  'official',
  'regulator',
  'independent',
  'press',
  'editorial',
  'unknown',
] as const
export type EvidenceLevel = (typeof EVIDENCE_LEVELS)[number]

export const evidenceLevelOptions = [
  { label: 'Document oficial del servei (fet documentat)', value: 'official' },
  { label: 'Resolució o document d’un regulador (fet documentat)', value: 'regulator' },
  { label: 'Anàlisi independent: acadèmia, ONG, auditoria (fet documentat)', value: 'independent' },
  { label: 'Mitjà especialitzat (fet documentat amb menys garanties)', value: 'press' },
  { label: 'Interpretació editorial a partir d’indicis', value: 'editorial' },
  { label: 'Desconegut', value: 'unknown' },
]

/**
 * Pes de cada nivell d'evidència dins del Confidence Score. Una interpretació
 * editorial val, però val menys que una política de privadesa citada.
 */
export const EVIDENCE_LEVEL_QUALITY: Record<EvidenceLevel, number> = {
  official: 1,
  regulator: 1,
  independent: 0.9,
  press: 0.7,
  editorial: 0.45,
  unknown: 0,
}

type EvidencedFactArgs = {
  name: string
  label: string
  description?: string
  /** Camps addicionals específics del fet (URL d'exercici del dret, abast, etc.). */
  extraFields?: Field[]
}

/**
 * Grup reutilitzable que converteix qualsevol afirmació en una afirmació
 * traçable. S'utilitza a totes les caselles que alimenten les puntuacions.
 */
export const evidencedFact = ({
  name,
  label,
  description,
  extraFields = [],
}: EvidencedFactArgs): GroupField => ({
  name,
  label,
  type: 'group',
  admin: { description },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'status',
          label: 'Afirmació',
          type: 'select',
          options: evidenceStatusOptions,
          defaultValue: 'unknown',
          required: true,
          index: true,
          admin: { width: '50%' },
        },
        {
          name: 'evidenceLevel',
          label: 'Nivell d’evidència',
          type: 'select',
          options: evidenceLevelOptions,
          defaultValue: 'unknown',
          required: true,
          admin: { width: '50%' },
        },
      ],
    },
    ...extraFields,
    {
      name: 'detail',
      label: 'Explicació',
      type: 'textarea',
      localized: true,
      admin: {
        description:
          'Redacta en català què hem comprovat exactament. Si és una interpretació, digues en què et bases.',
      },
    },
    {
      name: 'sources',
      label: 'Fonts',
      type: 'relationship',
      relationTo: 'sources',
      hasMany: true,
      admin: {
        description: 'Obligatòries per a qualsevol afirmació que no sigui «Desconegut».',
      },
    },
    {
      name: 'verifiedAt',
      label: 'Data de comprovació',
      type: 'date',
      admin: { date: { pickerAppearance: 'dayOnly', displayFormat: 'dd/MM/yyyy' } },
    },
  ],
})

/** Forma que pren un `evidencedFact` un cop llegit de la base de dades. */
export type EvidencedFactValue = {
  status?: EvidenceStatus | null
  evidenceLevel?: EvidenceLevel | null
  detail?: string | null
  sources?: unknown[] | null
  verifiedAt?: string | null
  [key: string]: unknown
}
