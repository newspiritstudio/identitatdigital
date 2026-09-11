import type { DataType } from '@/payload-types'

import {
  at,
  compareText,
  localizedText,
  percentage,
  relationId,
  type AppRef,
  type Corpus,
} from './corpus'

/**
 * Abast de cada tipus de dada a tot el directori.
 *
 * És la pregunta inversa de la fitxa: en comptes de «què recull aquesta app?»,
 * «qui recull això?». La resposta canvia la conversa, perquè fa evident que
 * certes dades —la ubicació precisa, la llista de contactes— no són una
 * particularitat d'un servei sinó la norma del sector.
 */

/** Estat d'una fila de la matriu de dades. */
type RowStatus = 'yes' | 'optional' | 'no' | 'unknown'

const ROW_STATUS_RANK: Record<RowStatus, number> = {
  yes: 3,
  optional: 2,
  no: 1,
  unknown: 0,
}

const rowStatus = (value: unknown): RowStatus =>
  value === 'yes' || value === 'optional' || value === 'no' ? value : 'unknown'

const ternary = (value: unknown): 'yes' | 'no' | 'unknown' =>
  value === 'yes' || value === 'no' ? value : 'unknown'

type SharedWith = 'none' | 'group' | 'third-parties' | 'brokers' | 'unknown'

const sharedWith = (value: unknown): SharedWith =>
  value === 'none' || value === 'group' || value === 'third-parties' || value === 'brokers'
    ? value
    : 'unknown'

export type DataTypeReach = {
  dataTypeId: string
  name: string
  slug: string
  family: DataType['family'] | null
  sensitivity: number
  specialCategory: boolean

  /** Fitxes que diuen alguna cosa d'aquest tipus de dada, sigui el que sigui. */
  documentedBy: number
  /** Fitxes que ni el mencionen. Silenci, no negativa. */
  notMentioned: number

  /** Documentat que sí: es recull sempre. */
  collected: number
  /** Documentat que sí, però només si la persona ho activa. */
  optional: number
  /** Documentat que NO es recull. */
  notCollected: number
  /** Mencionat però sense resposta: no ho hem pogut documentar. */
  collectionUnknown: number
  /** Abast: fitxes on la dada s'acaba recollint (sempre o opcionalment). */
  reach: number
  /** Percentatge d'abast sobre el total de fitxes publicades. */
  reachShare: number

  /* Els tres recomptes següents només es calculen sobre les fitxes que
   * recullen la dada: preguntar si una dada que no es recull queda vinculada a
   * la identitat no té resposta possible. */
  linkedToIdentity: number
  notLinkedToIdentity: number
  linkageUnknown: number

  usedForTracking: number
  notUsedForTracking: number
  trackingUnknown: number

  sharedWithThirdParties: number
  sharedWithBrokers: number
  sharedWithinGroup: number
  sharedWithNobody: number
  sharingUnknown: number

  /** Fitxes on la dada es recull, per si cal enllaçar-les. */
  collectedBy: AppRef[]
}

export type DataTypesAnalysis = {
  rows: DataTypeReach[]
  /** Fitxes publicades considerades. */
  appsConsidered: number
  /** Fitxes sense cap fila a la matriu de dades. */
  appsWithoutDataMatrix: number
  /** Files totals de la matriu a tot el corpus. */
  totalRows: number
  /** Files que apunten a un tipus de dada que no existeix al catàleg. */
  rowsWithUnresolvedDataType: number
  /** Files duplicades (mateixa fitxa, mateix tipus de dada) que s'han fusionat. */
  duplicateRows: number
  /** Tipus de dada del catàleg que no apareixen a cap fitxa. */
  unusedDataTypes: number
}

/**
 * Recompte per tipus de dada.
 *
 * Decisions:
 *
 *  - Si una fitxa repeteix el mateix tipus de dada en dues files, es fusionen i
 *    es conserva la fila més afirmativa (sí > opcional > no > desconegut). El
 *    contrari faria que una fitxa detallada pesés més que una de sumària només
 *    per haver separat dos usos de la mateixa dada.
 *  - «Opcional» no se suma a «es recull» al recompte principal, però sí a
 *    l'abast: és una dada que acaba als servidors de qui la demana, encara que
 *    la persona ho hagi triat.
 *  - Els tipus de dada del catàleg que no apareixen enlloc surten igualment a la
 *    taula amb tots els recomptes a zero i `notMentioned` igual al total de
 *    fitxes. Un catàleg amb entrades que ningú no ha documentat és informació
 *    sobre la nostra feina, no una fila a amagar.
 */
export const analyseDataTypes = (corpus: Corpus): DataTypesAnalysis => {
  type Accumulator = {
    documentedBy: number
    collected: number
    optional: number
    notCollected: number
    collectionUnknown: number
    linkedToIdentity: number
    notLinkedToIdentity: number
    linkageUnknown: number
    usedForTracking: number
    notUsedForTracking: number
    trackingUnknown: number
    sharedWithThirdParties: number
    sharedWithBrokers: number
    sharedWithinGroup: number
    sharedWithNobody: number
    sharingUnknown: number
    collectedBy: AppRef[]
  }

  const emptyAccumulator = (): Accumulator => ({
    documentedBy: 0,
    collected: 0,
    optional: 0,
    notCollected: 0,
    collectionUnknown: 0,
    linkedToIdentity: 0,
    notLinkedToIdentity: 0,
    linkageUnknown: 0,
    usedForTracking: 0,
    notUsedForTracking: 0,
    trackingUnknown: 0,
    sharedWithThirdParties: 0,
    sharedWithBrokers: 0,
    sharedWithinGroup: 0,
    sharedWithNobody: 0,
    sharingUnknown: 0,
    collectedBy: [],
  })

  const accumulators = new Map<string, Accumulator>()
  let totalRows = 0
  let rowsWithUnresolvedDataType = 0
  let duplicateRows = 0
  let appsWithoutDataMatrix = 0

  for (const app of corpus.apps) {
    const rows = Array.isArray(app.dataCollection) ? app.dataCollection : []
    if (rows.length === 0) appsWithoutDataMatrix += 1

    // Fusió de files repetides dins d'una mateixa fitxa.
    const merged = new Map<string, unknown>()
    for (const row of rows) {
      totalRows += 1
      const dataTypeId = relationId(at(row, 'dataType'))
      if (dataTypeId === null || !corpus.dataTypeById.has(dataTypeId)) {
        rowsWithUnresolvedDataType += 1
        continue
      }
      const existing = merged.get(dataTypeId)
      if (existing === undefined) {
        merged.set(dataTypeId, row)
        continue
      }
      duplicateRows += 1
      const currentRank = ROW_STATUS_RANK[rowStatus(at(row, 'status'))]
      const existingRank = ROW_STATUS_RANK[rowStatus(at(existing, 'status'))]
      if (currentRank > existingRank) merged.set(dataTypeId, row)
    }

    const reference: AppRef = {
      id: relationId(app) ?? '',
      name: localizedText(app.name) ?? '(sense nom)',
      slug: typeof app.slug === 'string' ? app.slug : '',
    }

    for (const [dataTypeId, row] of merged) {
      let accumulator = accumulators.get(dataTypeId)
      if (!accumulator) {
        accumulator = emptyAccumulator()
        accumulators.set(dataTypeId, accumulator)
      }
      accumulator.documentedBy += 1

      const status = rowStatus(at(row, 'status'))
      if (status === 'yes') accumulator.collected += 1
      else if (status === 'optional') accumulator.optional += 1
      else if (status === 'no') accumulator.notCollected += 1
      else accumulator.collectionUnknown += 1

      if (status !== 'yes' && status !== 'optional') continue
      accumulator.collectedBy.push(reference)

      const linkage = ternary(at(row, 'linkedToIdentity'))
      if (linkage === 'yes') accumulator.linkedToIdentity += 1
      else if (linkage === 'no') accumulator.notLinkedToIdentity += 1
      else accumulator.linkageUnknown += 1

      const tracking = ternary(at(row, 'usedForTracking'))
      if (tracking === 'yes') accumulator.usedForTracking += 1
      else if (tracking === 'no') accumulator.notUsedForTracking += 1
      else accumulator.trackingUnknown += 1

      const sharing = sharedWith(at(row, 'sharedWith'))
      if (sharing === 'third-parties') accumulator.sharedWithThirdParties += 1
      else if (sharing === 'brokers') accumulator.sharedWithBrokers += 1
      else if (sharing === 'group') accumulator.sharedWithinGroup += 1
      else if (sharing === 'none') accumulator.sharedWithNobody += 1
      else accumulator.sharingUnknown += 1
    }
  }

  const appsConsidered = corpus.apps.length
  const rows: DataTypeReach[] = []
  let unusedDataTypes = 0

  for (const dataType of corpus.dataTypes) {
    const dataTypeId = relationId(dataType)
    if (dataTypeId === null) continue
    const accumulator = accumulators.get(dataTypeId) ?? emptyAccumulator()
    if (accumulator.documentedBy === 0) unusedDataTypes += 1
    const reach = accumulator.collected + accumulator.optional
    rows.push({
      dataTypeId,
      name: localizedText(dataType.name) ?? '(sense nom)',
      slug: typeof dataType.slug === 'string' ? dataType.slug : '',
      family: dataType.family ?? null,
      sensitivity: typeof dataType.sensitivity === 'number' ? dataType.sensitivity : 0,
      specialCategory: dataType.specialCategory === true,
      documentedBy: accumulator.documentedBy,
      notMentioned: appsConsidered - accumulator.documentedBy,
      collected: accumulator.collected,
      optional: accumulator.optional,
      notCollected: accumulator.notCollected,
      collectionUnknown: accumulator.collectionUnknown,
      reach,
      reachShare: percentage(reach, appsConsidered),
      linkedToIdentity: accumulator.linkedToIdentity,
      notLinkedToIdentity: accumulator.notLinkedToIdentity,
      linkageUnknown: accumulator.linkageUnknown,
      usedForTracking: accumulator.usedForTracking,
      notUsedForTracking: accumulator.notUsedForTracking,
      trackingUnknown: accumulator.trackingUnknown,
      sharedWithThirdParties: accumulator.sharedWithThirdParties,
      sharedWithBrokers: accumulator.sharedWithBrokers,
      sharedWithinGroup: accumulator.sharedWithinGroup,
      sharedWithNobody: accumulator.sharedWithNobody,
      sharingUnknown: accumulator.sharingUnknown,
      collectedBy: accumulator.collectedBy.sort(
        (a, b) => compareText(a.name, b.name) || compareText(a.id, b.id),
      ),
    })
  }

  // Abast primer; a igualtat d'abast, la dada més sensible amunt, i el nom com
  // a últim desempat perquè l'ordre no balli entre recàrregues.
  rows.sort(
    (a, b) =>
      b.reach - a.reach ||
      b.collected - a.collected ||
      b.sensitivity - a.sensitivity ||
      compareText(a.name, b.name) ||
      compareText(a.dataTypeId, b.dataTypeId),
  )

  return {
    rows,
    appsConsidered,
    appsWithoutDataMatrix,
    totalRows,
    rowsWithUnresolvedDataType,
    duplicateRows,
    unusedDataTypes,
  }
}
