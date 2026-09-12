import type { Payload } from 'payload'

import {
  at,
  factStatus,
  loadCorpus,
  localizedText,
  relationId,
  relationIds,
  resolveOwnershipChain,
  type Corpus,
} from '@/lib/analysis'
import type { Source } from '@/payload-types'

import type { CellValue } from './csv'

/**
 * Exportació oberta del corpus.
 *
 * Per què existeix aquest mòdul. El projecte demana a les empreses que deixin
 * emportar-se les dades en un format que serveixi per a alguna cosa. Publicar
 * només pàgines HTML seria fer exactament el que retreiem: ensenyar-ho tot i no
 * deixar-ne agafar res. Aquí hi ha el corpus sencer, en JSON i en CSV, sense
 * registre, sense clau i sense límit d'ús.
 *
 * Tres regles governen tot el fitxer:
 *
 *  1. **Cap dada personal.** No hi ha res de cap persona usuària perquè el lloc
 *     no en recull. Les úniques persones que hi poden aparèixer són càrrecs
 *     públics esmentats en incidents, i ho fan dins de textos ja publicats.
 *  2. **`unknown` viatja sencer.** L'estat d'una afirmació s'exporta tal com
 *     és, amb els cinc valors possibles. Qui reutilitzi això ha de poder
 *     distingir «no» de «no ho sabem», que és tota la gràcia del projecte.
 *  3. **Els identificadors interns hi són.** Sense `id` i `slug` no es poden
 *     creuar els conjunts entre si, i llavors són vuit fitxers solts en comptes
 *     d'una base de dades.
 */

export type Row = Record<string, CellValue>

export type Column = {
  name: string
  type: 'text' | 'number' | 'boolean' | 'data' | 'llista'
  description: string
}

export type ExportInput = {
  corpus: Corpus
  sources: Source[]
}

export type DatasetSpec = {
  key: string
  title: string
  /** Una frase: què hi ha a cada fila. */
  unit: string
  description: string
  columns: Column[]
  build: (input: ExportInput) => Row[]
}

/* ────────────────────────────── utilitats ───────────────────────────────── */

const text = (value: unknown): string | null => {
  const resolved = localizedText(value)
  return resolved === null || resolved.length === 0 ? null : resolved
}

const str = (value: unknown): string | null =>
  typeof value === 'string' && value.length > 0 ? value : null

const num = (value: unknown): number | null =>
  typeof value === 'number' && Number.isFinite(value) ? value : null

const bool = (value: unknown): boolean | null => (typeof value === 'boolean' ? value : null)

/** Data en format ISO 8601 retallada al dia: les hores no aporten res aquí. */
const day = (value: unknown): string | null => {
  const raw = str(value)
  if (raw === null) return null
  const parsed = new Date(raw)
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString().slice(0, 10)
}

const nameOf = (map: ReadonlyMap<string, { name?: unknown }>, id: string | null): string | null =>
  id === null ? null : text(map.get(id)?.name)

const slugOf = (map: ReadonlyMap<string, { slug?: unknown }>, id: string | null): string | null =>
  id === null ? null : str(map.get(id)?.slug)

/* ─────────────────────────────── aplicacions ────────────────────────────── */

const appsDataset: DatasetSpec = {
  key: 'aplicacions',
  title: 'Aplicacions',
  unit: 'Una fila per fitxa publicada.',
  description:
    'El directori sencer amb les quatre puntuacions, la confiança, la cobertura i la versió de metodologia amb què s’han calculat. És el punt d’entrada: la columna «slug» enllaça amb tots els altres conjunts.',
  columns: [
    {
      name: 'slug',
      type: 'text',
      description: 'Identificador estable de la fitxa. Clau primària.',
    },
    { name: 'nom', type: 'text', description: 'Nom comercial del servei.' },
    {
      name: 'empresa_slug',
      type: 'text',
      description: 'Empresa que el publica. Clau cap a «empreses».',
    },
    { name: 'empresa', type: 'text', description: 'Nom de l’empresa que el publica.' },
    {
      name: 'grup_slug',
      type: 'text',
      description: 'Matriu última del grup, seguint la cadena de propietat.',
    },
    { name: 'categories', type: 'llista', description: 'Categories funcionals.' },
    { name: 'plataformes', type: 'llista', description: 'Plataformes on és disponible.' },
    { name: 'jurisdiccio', type: 'text', description: 'Jurisdicció declarada a les condicions.' },
    { name: 'model_negoci', type: 'text', description: 'Com guanya diners el servei.' },
    {
      name: 'cal_compte',
      type: 'text',
      description: 'Estat de l’afirmació «cal un compte»: yes, partial, no, unknown o na.',
    },
    { name: 'codi_obert', type: 'text', description: 'Estat de l’afirmació «codi obert».' },
    {
      name: 'puntuacio_privadesa',
      type: 'number',
      description: '0–100. Buit si no s’ha pogut calcular.',
    },
    { name: 'puntuacio_seguretat', type: 'number', description: '0–100.' },
    { name: 'puntuacio_control', type: 'number', description: '0–100.' },
    {
      name: 'puntuacio_global',
      type: 'number',
      description: '0–100. Privadesa 0,45 · seguretat 0,30 · control 0,25.',
    },
    { name: 'confianca', type: 'number', description: '0–100. Quant sabem, no com de bé ho fan.' },
    {
      name: 'cobertura',
      type: 'number',
      description: '0–1. Proporció d’indicadors aplicables amb valor conegut.',
    },
    {
      name: 'provisional',
      type: 'boolean',
      description: 'Cert quan la cobertura encara és massa baixa per tancar la nota.',
    },
    {
      name: 'versio_metodologia',
      type: 'text',
      description: 'Versió amb què s’ha calculat la fila.',
    },
    { name: 'calculat_el', type: 'data', description: 'Data del càlcul.' },
    { name: 'estat_recerca', type: 'text', description: 'Estat editorial de la fitxa.' },
    { name: 'revisat_el', type: 'data', description: 'Darrera revisió editorial.' },
    { name: 'lloc_web', type: 'text', description: 'Lloc web oficial.' },
    {
      name: 'politica_privadesa',
      type: 'text',
      description: 'Enllaç a la política de privadesa citada.',
    },
    { name: 'fitxa', type: 'text', description: 'Camí de la fitxa dins del lloc.' },
  ],
  build: ({ corpus }) =>
    corpus.apps.map((app) => {
      const companyId = relationId(app.company)
      const groupId =
        companyId === null ? null : resolveOwnershipChain(companyId, corpus.companyById).rootId
      return {
        slug: str(app.slug),
        nom: text(app.name),
        empresa_slug: slugOf(corpus.companyById, companyId),
        empresa: nameOf(corpus.companyById, companyId),
        grup_slug: slugOf(corpus.companyById, groupId),
        categories: relationIds(app.categories)
          .map((id) => slugOf(corpus.categoryById, id))
          .filter((value): value is string => value !== null),
        plataformes: Array.isArray(app.platforms) ? (app.platforms as string[]) : [],
        jurisdiccio: str(app.jurisdiction),
        model_negoci: str(app.businessModel),
        cal_compte: factStatus(at(app, 'accountRequired')),
        codi_obert: factStatus(at(app, 'openSource')),
        puntuacio_privadesa: num(at(app, 'scores.privacy')),
        puntuacio_seguretat: num(at(app, 'scores.security')),
        puntuacio_control: num(at(app, 'scores.agency')),
        puntuacio_global: num(at(app, 'scores.overall')),
        confianca: num(at(app, 'scores.confidence')),
        cobertura: num(at(app, 'scores.coverage')),
        provisional: bool(at(app, 'scores.provisional')),
        versio_metodologia: str(at(app, 'scores.methodologyVersion')),
        calculat_el: day(at(app, 'scores.computedAt')),
        estat_recerca: str(at(app, 'review.researchStatus')),
        revisat_el: day(at(app, 'review.lastReviewedAt')),
        lloc_web: str(at(app, 'links.website')),
        politica_privadesa: str(at(app, 'links.privacyPolicy')),
        fitxa: `/aplicacions/${str(app.slug) ?? ''}`,
      }
    }),
}

/* ─────────────────────── matriu de recollida de dades ───────────────────── */

const collectionDataset: DatasetSpec = {
  key: 'recollida-de-dades',
  title: 'Recollida de dades',
  unit: 'Una fila per parella aplicació × tipus de dada documentada.',
  description:
    'La matriu que sosté bona part de l’anàlisi transversal: quina aplicació recull quin tipus de dada, si queda vinculada a la identitat, si s’utilitza per fer seguiment i amb qui es comparteix. És el conjunt més útil per fer-hi preguntes noves.',
  columns: [
    { name: 'aplicacio_slug', type: 'text', description: 'Clau cap a «aplicacions».' },
    { name: 'aplicacio', type: 'text', description: 'Nom del servei.' },
    { name: 'tipus_dada_slug', type: 'text', description: 'Clau cap a «tipus-de-dada».' },
    { name: 'tipus_dada', type: 'text', description: 'Nom del tipus de dada.' },
    { name: 'familia', type: 'text', description: 'Família del vocabulari.' },
    {
      name: 'sensibilitat',
      type: 'number',
      description: '1–5. Escala del projecte, documentada a la metodologia.',
    },
    {
      name: 'categoria_especial',
      type: 'boolean',
      description: 'Cert si és categoria especial de l’art. 9 RGPD.',
    },
    { name: 'estat', type: 'text', description: 'yes, partial, no, unknown o na.' },
    {
      name: 'vinculat_a_identitat',
      type: 'text',
      description: 'Si la dada queda lligada a la identitat de la persona.',
    },
    { name: 'us_per_a_seguiment', type: 'text', description: 'Si s’utilitza per fer seguiment.' },
    { name: 'compartit_amb', type: 'text', description: 'Abast de la cessió declarada.' },
    {
      name: 'nivell_evidencia',
      type: 'text',
      description: 'official, regulator, independent, press, editorial o unknown.',
    },
    { name: 'fonts', type: 'llista', description: 'Slugs de «fonts» que sostenen la fila.' },
    { name: 'nombre_fonts', type: 'number', description: 'Quantes fonts hi ha.' },
    {
      name: 'matis',
      type: 'text',
      description: 'Aclariment editorial quan la casella sola enganyaria.',
    },
  ],
  build: ({ corpus }) => {
    const rows: Row[] = []
    for (const app of corpus.apps) {
      const entries = Array.isArray(app.dataCollection) ? app.dataCollection : []
      for (const entry of entries) {
        const dataTypeId = relationId(at(entry, 'dataType'))
        const dataType = dataTypeId === null ? undefined : corpus.dataTypeById.get(dataTypeId)
        const sourceIds = relationIds(at(entry, 'sources'))
        rows.push({
          aplicacio_slug: str(app.slug),
          aplicacio: text(app.name),
          tipus_dada_slug: str(dataType?.slug),
          tipus_dada: text(dataType?.name),
          familia: str(dataType?.family),
          sensibilitat: num(dataType?.sensitivity),
          categoria_especial: bool(dataType?.specialCategory) ?? false,
          estat: str(at(entry, 'status')) ?? 'unknown',
          vinculat_a_identitat: str(at(entry, 'linkedToIdentity')),
          us_per_a_seguiment: str(at(entry, 'usedForTracking')),
          compartit_amb: str(at(entry, 'sharedWith')),
          nivell_evidencia: str(at(entry, 'evidenceLevel')) ?? 'unknown',
          fonts: sourceIds,
          nombre_fonts: sourceIds.length,
          matis: text(at(entry, 'note')),
        })
      }
    }
    return rows
  },
}

/* ───────────────────────────── indicadors ───────────────────────────────── */

const indicatorsDataset: DatasetSpec = {
  key: 'indicadors',
  title: 'Indicadors de puntuació',
  unit: 'Una fila per indicador de cada fitxa.',
  description:
    'El desglossament complet de cada nota, tal com el desa el càlcul. Amb aquest conjunt i la metodologia publicada, qualsevol persona pot refer les puntuacions des de zero i comprovar si li surten les mateixes. Aquesta és la comprovació que fa que la resta del projecte sigui verificable i no només llegible.',
  columns: [
    { name: 'aplicacio_slug', type: 'text', description: 'Clau cap a «aplicacions».' },
    { name: 'indicador', type: 'text', description: 'Clau estable de l’indicador.' },
    { name: 'etiqueta', type: 'text', description: 'Nom llegible de l’indicador.' },
    { name: 'dimensio', type: 'text', description: 'privacy, security o agency.' },
    { name: 'pes', type: 'number', description: 'Pes dins de la seva dimensió.' },
    {
      name: 'valor',
      type: 'number',
      description: '0–1. Buit quan no hi ha evidència: buit no és zero.',
    },
    {
      name: 'aplicable',
      type: 'boolean',
      description: 'Fals quan l’indicador no té sentit per a aquest servei.',
    },
    {
      name: 'nivell_evidencia',
      type: 'text',
      description: 'Qualitat de la font darrere del valor.',
    },
    { name: 'nota', type: 'text', description: 'Aclariment del càlcul quan n’hi ha.' },
    { name: 'versio_metodologia', type: 'text', description: 'Versió amb què s’ha calculat.' },
  ],
  build: ({ corpus }) => {
    const rows: Row[] = []
    for (const app of corpus.apps) {
      const indicators = at(app, 'scores.breakdown.indicators')
      if (!Array.isArray(indicators)) continue
      const version = str(at(app, 'scores.methodologyVersion'))
      for (const indicator of indicators) {
        rows.push({
          aplicacio_slug: str(app.slug),
          indicador: str(at(indicator, 'key')),
          etiqueta: str(at(indicator, 'label')),
          dimensio: str(at(indicator, 'dimension')),
          pes: num(at(indicator, 'weight')),
          valor: num(at(indicator, 'value')),
          aplicable: bool(at(indicator, 'applicable')) ?? true,
          nivell_evidencia: str(at(indicator, 'evidenceLevel')) ?? 'unknown',
          nota: str(at(indicator, 'note')),
          versio_metodologia: version,
        })
      }
    }
    return rows
  },
}

/* ──────────────────────────────── empreses ──────────────────────────────── */

const companiesDataset: DatasetSpec = {
  key: 'empreses',
  title: 'Empreses i grups',
  unit: 'Una fila per empresa del catàleg.',
  description:
    'Qui hi ha darrere de cada aplicació, amb la cadena de propietat fins a la matriu última. Serveix per veure quantes aplicacions aparentment independents acaben al mateix lloc.',
  columns: [
    { name: 'slug', type: 'text', description: 'Clau primària.' },
    { name: 'nom', type: 'text', description: 'Nom comercial.' },
    { name: 'nom_legal', type: 'text', description: 'Denominació social quan la sabem.' },
    { name: 'matriu_slug', type: 'text', description: 'Empresa matriu directa.' },
    { name: 'grup_slug', type: 'text', description: 'Matriu última de la cadena.' },
    { name: 'pais_seu', type: 'text', description: 'Codi ISO del país de la seu.' },
    {
      name: 'establiment_ue',
      type: 'text',
      description: 'Estat de l’afirmació sobre establiment a la Unió Europea.',
    },
    {
      name: 'autoritat_principal',
      type: 'text',
      description: 'Autoritat de control principal, si n’hi ha.',
    },
    { name: 'propietat', type: 'text', description: 'Cotitzada, privada, fundació…' },
    { name: 'any_fundacio', type: 'number', description: 'Any de fundació.' },
    { name: 'model_ingressos', type: 'text', description: 'Font principal d’ingressos.' },
    { name: 'lloc_web', type: 'text', description: 'Lloc web corporatiu.' },
    {
      name: 'aplicacions',
      type: 'llista',
      description: 'Slugs de les fitxes publicades del catàleg.',
    },
    {
      name: 'nombre_aplicacions',
      type: 'number',
      description: 'Quantes fitxes del catàleg li pertanyen.',
    },
  ],
  build: ({ corpus }) => {
    const appsByCompany = new Map<string, string[]>()
    for (const app of corpus.apps) {
      const id = relationId(app.company)
      const slug = str(app.slug)
      if (id === null || slug === null) continue
      const list = appsByCompany.get(id) ?? []
      list.push(slug)
      appsByCompany.set(id, list)
    }

    return corpus.companies.map((company) => {
      const id = String(company.id)
      const chain = resolveOwnershipChain(id, corpus.companyById)
      const owned = appsByCompany.get(id) ?? []
      return {
        slug: str(company.slug),
        nom: text(company.name),
        nom_legal: str(company.legalName),
        matriu_slug: slugOf(corpus.companyById, relationId(company.parent)),
        grup_slug: slugOf(corpus.companyById, chain.rootId),
        pais_seu: str(company.headquartersCountry),
        establiment_ue: factStatus(at(company, 'euEstablishment')),
        autoritat_principal: str(company.leadSupervisoryAuthority),
        propietat: str(company.ownership),
        any_fundacio: num(company.foundedYear),
        model_ingressos: str(company.primaryRevenueModel),
        lloc_web: str(company.website),
        aplicacions: owned.slice().sort(),
        nombre_aplicacions: owned.length,
      }
    })
  },
}

/* ────────────────────────────── tipus de dada ───────────────────────────── */

const dataTypesDataset: DatasetSpec = {
  key: 'tipus-de-dada',
  title: 'Vocabulari de tipus de dada',
  unit: 'Una fila per tipus de dada del vocabulari.',
  description:
    'El vocabulari controlat amb què es descriu tota la recollida. Inclou l’escala de sensibilitat, si és categoria especial de l’article 9 del RGPD i l’equivalència amb les etiquetes de privadesa de l’App Store.',
  columns: [
    { name: 'slug', type: 'text', description: 'Clau primària.' },
    { name: 'nom', type: 'text', description: 'Nom en català.' },
    { name: 'familia', type: 'text', description: 'Família a què pertany.' },
    { name: 'sensibilitat', type: 'number', description: '1–5.' },
    {
      name: 'categoria_especial',
      type: 'boolean',
      description: 'Categoria especial de l’art. 9 RGPD.',
    },
    {
      name: 'etiqueta_apple',
      type: 'text',
      description: 'Etiqueta equivalent de l’App Store, quan n’hi ha.',
    },
    { name: 'descripcio', type: 'text', description: 'Què inclou exactament.' },
    {
      name: 'per_que_importa',
      type: 'text',
      description: 'Per què aquesta dada té la sensibilitat que té.',
    },
  ],
  build: ({ corpus }) =>
    corpus.dataTypes.map((dataType) => ({
      slug: str(dataType.slug),
      nom: text(dataType.name),
      familia: str(dataType.family),
      sensibilitat: num(dataType.sensitivity),
      categoria_especial: bool(dataType.specialCategory) ?? false,
      etiqueta_apple: str(dataType.appleLabel),
      descripcio: text(dataType.description),
      per_que_importa: text(dataType.whyItMatters),
    })),
}

/* ──────────────────────────────── incidents ─────────────────────────────── */

const incidentsDataset: DatasetSpec = {
  key: 'incidents',
  title: 'Incidents i sancions',
  unit: 'Una fila per incident documentat.',
  description:
    'Sancions de reguladors, filtracions, canvis unilaterals de condicions i altres fets documentats que afecten les empreses del catàleg, amb l’import de la multa quan n’hi ha i el seu estat processal.',
  columns: [
    { name: 'slug', type: 'text', description: 'Clau primària.' },
    { name: 'titol', type: 'text', description: 'Títol de l’incident.' },
    { name: 'tipus', type: 'text', description: 'Tipus d’incident.' },
    { name: 'gravetat', type: 'text', description: 'Gravetat assignada.' },
    { name: 'empresa_slug', type: 'text', description: 'Empresa afectada.' },
    { name: 'aplicacions', type: 'llista', description: 'Fitxes afectades.' },
    { name: 'ocorregut_el', type: 'data', description: 'Data dels fets.' },
    { name: 'divulgat_el', type: 'data', description: 'Data en què es va fer públic.' },
    {
      name: 'persones_afectades',
      type: 'number',
      description: 'Nombre de persones afectades, quan consta.',
    },
    { name: 'autoritat', type: 'text', description: 'Autoritat que va resoldre.' },
    { name: 'multa_eur', type: 'number', description: 'Import en euros.' },
    { name: 'estat_sancio', type: 'text', description: 'Ferma, recorreguda, anul·lada…' },
    { name: 'precepte', type: 'text', description: 'Precepte infringit.' },
    { name: 'fonts', type: 'llista', description: 'Slugs de «fonts».' },
  ],
  build: ({ corpus }) => {
    const appSlugById = new Map<string, string>()
    for (const app of corpus.apps) {
      const slug = str(app.slug)
      if (slug !== null) appSlugById.set(String(app.id), slug)
    }

    return corpus.incidents.map((incident) => ({
      slug: str(incident.slug),
      titol: text(incident.title),
      tipus: str(incident.type),
      gravetat: str(incident.severity),
      empresa_slug: slugOf(corpus.companyById, relationId(incident.company)),
      aplicacions: relationIds(incident.apps)
        .map((id) => appSlugById.get(id))
        .filter((value): value is string => value !== undefined),
      ocorregut_el: day(incident.occurredAt),
      divulgat_el: day(incident.disclosedAt),
      persones_afectades: num(incident.affectedPeople),
      autoritat: str(at(incident, 'regulatory.authority')),
      multa_eur: num(at(incident, 'regulatory.fineAmountEur')),
      estat_sancio: str(at(incident, 'regulatory.status')),
      precepte: str(at(incident, 'regulatory.legalBasis')),
      fonts: relationIds(incident.sources),
    }))
  },
}

/* ─────────────────────────────── filtracions ────────────────────────────── */

const breachesDataset: DatasetSpec = {
  key: 'filtracions',
  title: 'Filtracions',
  unit: 'Una fila per filtració del catàleg.',
  description:
    'El catàleg de Have I Been Pwned traduït al vocabulari del projecte i lligat, quan es pot documentar, a l’empresa i a les aplicacions del directori. Les dades de partida són de Have I Been Pwned amb llicència CC BY 4.0; el lligam editorial i l’equivalència de categories són nostres.',
  columns: [
    {
      name: 'nom',
      type: 'text',
      description: 'Identificador de Have I Been Pwned. Clau primària.',
    },
    { name: 'titol', type: 'text', description: 'Nom del servei afectat.' },
    { name: 'domini', type: 'text', description: 'Domini afectat.' },
    { name: 'comptes', type: 'number', description: 'Comptes exposats segons Have I Been Pwned.' },
    { name: 'data_filtracio', type: 'data', description: 'Data atribuïda a la filtració.' },
    { name: 'data_publicacio', type: 'data', description: 'Data en què es va afegir al catàleg.' },
    { name: 'verificada', type: 'boolean', description: 'Verificada per Have I Been Pwned.' },
    { name: 'fabricada', type: 'boolean', description: 'Marcada com a possiblement fabricada.' },
    { name: 'sensible', type: 'boolean', description: 'Marcada com a sensible.' },
    { name: 'retirada', type: 'boolean', description: 'Retirada del catàleg d’origen.' },
    {
      name: 'categories_origen',
      type: 'llista',
      description: 'Categories de dada tal com les dona l’origen.',
    },
    {
      name: 'tipus_dada',
      type: 'llista',
      description: 'Equivalència al nostre vocabulari. Clau cap a «tipus-de-dada».',
    },
    {
      name: 'categories_sense_equivalencia',
      type: 'llista',
      description: 'Categories d’origen que encara no tenen equivalent.',
    },
    {
      name: 'empresa_slug',
      type: 'text',
      description: 'Empresa del catàleg, quan el lligam està documentat.',
    },
    { name: 'aplicacions', type: 'llista', description: 'Fitxes del catàleg afectades.' },
  ],
  build: ({ corpus }) => {
    const appSlugById = new Map<string, string>()
    for (const app of corpus.apps) {
      const slug = str(app.slug)
      if (slug !== null) appSlugById.set(String(app.id), slug)
    }
    const values = (value: unknown): string[] =>
      Array.isArray(value)
        ? value
            .map((item) => str(at(item, 'value')))
            .filter((item): item is string => item !== null)
        : []

    return corpus.breaches.map((breach) => ({
      nom: str(breach.name),
      titol: str(breach.title),
      domini: str(breach.domain),
      comptes: num(breach.pwnCount),
      data_filtracio: day(breach.breachDate),
      data_publicacio: day(breach.addedDate),
      verificada: bool(at(breach, 'flags.isVerified')) ?? false,
      fabricada: bool(at(breach, 'flags.isFabricated')) ?? false,
      sensible: bool(at(breach, 'flags.isSensitive')) ?? false,
      retirada: bool(at(breach, 'flags.isRetired')) ?? false,
      categories_origen: values(breach.dataClasses),
      tipus_dada: relationIds(breach.dataTypes)
        .map((id) => slugOf(corpus.dataTypeById, id))
        .filter((value): value is string => value !== null),
      categories_sense_equivalencia: values(breach.unmappedDataClasses),
      empresa_slug: slugOf(corpus.companyById, relationId(breach.company)),
      aplicacions: relationIds(breach.apps)
        .map((id) => appSlugById.get(id))
        .filter((value): value is string => value !== undefined),
    }))
  },
}

/* ─────────────────────────── patrons enganyosos ─────────────────────────── */

const darkPatternsDataset: DatasetSpec = {
  key: 'patrons-enganyosos',
  title: 'Patrons enganyosos',
  unit: 'Una fila per patró documentat a una fitxa.',
  description:
    'Els patrons de disseny que empenyen cap a la decisió que convé al servei i no a la persona, documentats un per un amb la seva gravetat i les seves fonts. És el conjunt que fa servir l’anàlisi de patrons i el que més directament interessa a qui fa formació o inspecció.',
  columns: [
    { name: 'aplicacio_slug', type: 'text', description: 'Clau cap a «aplicacions».' },
    { name: 'tipus', type: 'text', description: 'Tipus de patró.' },
    { name: 'gravetat', type: 'text', description: 'Gravetat assignada.' },
    { name: 'descripcio', type: 'text', description: 'Què s’ha observat exactament.' },
    { name: 'fonts', type: 'llista', description: 'Slugs de «fonts».' },
  ],
  build: ({ corpus }) => {
    const rows: Row[] = []
    for (const app of corpus.apps) {
      const list = at(app, 'controls.darkPatternList')
      if (!Array.isArray(list)) continue
      for (const entry of list) {
        rows.push({
          aplicacio_slug: str(app.slug),
          tipus: str(at(entry, 'type')),
          gravetat: str(at(entry, 'severity')),
          descripcio: text(at(entry, 'description')),
          fonts: relationIds(at(entry, 'sources')),
        })
      }
    }
    return rows
  },
}

/* ─────────────────────────────────── fonts ──────────────────────────────── */

const sourcesDataset: DatasetSpec = {
  key: 'fonts',
  title: 'Catàleg de fonts',
  unit: 'Una fila per font documental.',
  description:
    'Tots els documents que sostenen les afirmacions del projecte, amb el seu tipus, la seva fiabilitat, la data de publicació, la data en què els vam consultar i l’enllaç a la còpia arxivada quan n’hi ha. Sense aquest conjunt, la resta són opinions.',
  columns: [
    {
      name: 'id',
      type: 'text',
      description:
        'Identificador intern. És el que apareix a la columna «fonts» dels altres conjunts.',
    },
    { name: 'slug', type: 'text', description: 'Clau llegible.' },
    { name: 'titol', type: 'text', description: 'Títol del document.' },
    { name: 'url', type: 'text', description: 'Adreça original.' },
    { name: 'arxiu_url', type: 'text', description: 'Còpia arxivada, quan n’hi ha.' },
    { name: 'editor', type: 'text', description: 'Qui l’ha publicat.' },
    { name: 'idioma', type: 'text', description: 'Idioma del document.' },
    {
      name: 'tipus',
      type: 'text',
      description: 'Política, condicions, resolució, informe, notícia…',
    },
    {
      name: 'fiabilitat',
      type: 'text',
      description: 'Fiabilitat assignada segons la jerarquia d’evidència.',
    },
    { name: 'publicat_el', type: 'data', description: 'Data de publicació del document.' },
    { name: 'consultat_el', type: 'data', description: 'Data en què el vam consultar.' },
  ],
  build: ({ sources }) =>
    sources.map((source) => ({
      id: String(source.id),
      slug: str(source.slug),
      titol: text(source.title),
      url: str(source.url),
      arxiu_url: str(source.archiveUrl),
      editor: str(source.publisher),
      idioma: str(source.language),
      tipus: str(source.type),
      fiabilitat: str(source.reliability),
      publicat_el: day(source.publishedAt),
      consultat_el: day(source.consultedAt),
    })),
}

/* ───────────────────────────────── registre ─────────────────────────────── */

export const DATASETS: readonly DatasetSpec[] = [
  appsDataset,
  collectionDataset,
  indicatorsDataset,
  companiesDataset,
  dataTypesDataset,
  incidentsDataset,
  breachesDataset,
  darkPatternsDataset,
  sourcesDataset,
]

export const datasetByKey = (key: string): DatasetSpec | undefined =>
  DATASETS.find((dataset) => dataset.key === key)

/**
 * Carrega tot el que necessiten els conjunts. El corpus ja exclou esborranys;
 * les fonts es carreguen a part perquè no formen part del corpus d'anàlisi.
 */
export const loadExportInput = async (payload: Payload): Promise<ExportInput> => {
  const [corpus, sources] = await Promise.all([
    loadCorpus(payload),
    payload.find({
      collection: 'sources',
      depth: 0,
      limit: 0,
      pagination: false,
      overrideAccess: true,
      sort: 'slug',
    }),
  ])
  return { corpus, sources: sources.docs }
}
