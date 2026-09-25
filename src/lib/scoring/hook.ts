import { deepMergeWithSourceArrays } from 'payload'
import type { CollectionAfterChangeHook, CollectionBeforeChangeHook } from 'payload'

import type { ScoreSnapshot } from '@/payload-types'

import { computeScores } from './score'
import type { DataTypeMeta, IncidentLike } from './types'

const relationId = (value: unknown): string | null => {
  if (!value) return null
  if (typeof value === 'string') return value
  if (typeof value === 'number') return String(value)
  if (typeof value === 'object') {
    const id = (value as { id?: unknown }).id
    if (typeof id === 'string' || typeof id === 'number') return String(id)
  }
  return null
}

/**
 * Recalcula les puntuacions cada vegada que es desa una fitxa.
 *
 * Es fa a `beforeChange` i no a la lectura perquè així queden desades i es
 * poden ordenar i filtrar des de l'API, el frontend no ha de recalcular res i
 * l'historial guarda el mateix valor que es publica.
 *
 * Els pesos de sensibilitat viuen a `data-types`, de manera que la funció pura
 * de càlcul necessita aquestes metadades. Es resolen amb una sola consulta per
 * desat.
 */
export const recalculateScores: CollectionBeforeChangeHook = async ({
  data,
  originalDoc,
  req,
  operation,
}) => {
  // `data` només porta el que canvia: una actualització parcial per l'API
  // (`{ security: { mfa } }`) no pot deixar la resta de `security` en blanc
  // per al càlcul. Les llistes, en canvi, se substitueixen senceres.
  const merged = deepMergeWithSourceArrays(originalDoc ?? {}, data ?? {}) as Record<string, unknown>

  const dataTypeIds = Array.isArray(merged.dataCollection)
    ? (merged.dataCollection as { dataType?: unknown }[])
        .map((row) => relationId(row?.dataType))
        .filter((id): id is string => Boolean(id))
    : []

  const dataTypes = new Map<string, DataTypeMeta>()
  if (dataTypeIds.length > 0) {
    const found = await req.payload.find({
      collection: 'data-types',
      where: { id: { in: Array.from(new Set(dataTypeIds)) } },
      limit: 200,
      depth: 0,
      pagination: false,
      req,
    })
    for (const doc of found.docs) {
      dataTypes.set(String(doc.id), {
        sensitivity: typeof doc.sensitivity === 'number' ? doc.sensitivity : 3,
        specialCategory: Boolean(doc.specialCategory),
        family: typeof doc.family === 'string' ? doc.family : undefined,
      })
    }
  }

  let incidents: IncidentLike[] = []
  const appId = operation === 'update' ? relationId(originalDoc?.id ?? (data as { id?: unknown }).id) : null
  if (appId) {
    const found = await req.payload.find({
      collection: 'incidents',
      where: { apps: { in: [appId] } },
      limit: 200,
      depth: 0,
      pagination: false,
      req,
    })
    incidents = found.docs.map((doc) => ({
      occurredAt: typeof doc.occurredAt === 'string' ? doc.occurredAt : null,
      severity: typeof doc.severity === 'string' ? doc.severity : null,
      type: typeof doc.type === 'string' ? doc.type : null,
    }))
  }

  const result = computeScores(merged, { dataTypes, incidents })

  return {
    ...data,
    scores: {
      privacy: result.privacy,
      security: result.security,
      agency: result.agency,
      overall: result.overall,
      confidence: result.confidence,
      provisional: result.provisional,
      coverage: result.coverage,
      methodologyVersion: result.methodologyVersion,
      computedAt: result.computedAt,
      breakdown: {
        coverage: result.coverage,
        sourceQuality: result.sourceQuality,
        recency: result.recency,
        dimensions: result.dimensions,
        indicators: result.indicators.map((indicator) => ({
          key: indicator.key,
          label: indicator.label,
          dimension: indicator.dimension,
          weight: indicator.weight,
          value: indicator.value,
          applicable: indicator.applicable,
          evidenceLevel: indicator.evidenceLevel,
          note: indicator.note ?? null,
        })),
      },
    },
  }
}

const SNAPSHOT_KEYS = [
  'privacy',
  'security',
  'agency',
  'overall',
  'confidence',
  'methodologyVersion',
] as const

const TRIGGERS = ['data-update', 'methodology-change', 'bulk-recalculation'] as const

/**
 * Desa una instantània quan una puntuació publicada canvia de valor.
 *
 * Les versions de Payload ja guarden l'estat complet de la fitxa, però són
 * pesades i no es poden consultar en sèrie. L'historial de puntuacions és una
 * sèrie temporal petita i consultable: serveix per dibuixar l'evolució d'un
 * servei i per respondre «per què ha baixat?».
 */
export const recordScoreSnapshot: CollectionAfterChangeHook = async ({
  doc,
  req,
  context,
}) => {
  if (doc._status === 'draft') return doc

  const current = (doc.scores ?? {}) as Record<string, unknown>
  if (current.overall === null || current.overall === undefined) return doc

  try {
    /*
     * Es compara amb la darrera instantània i no amb `previousDoc`. En publicar
     * un esborrany, `previousDoc` és l'esborrany mateix, que ja portava les
     * puntuacions noves, i el canvi no quedava mai registrat.
     */
    const { docs: last } = await req.payload.find({
      collection: 'score-snapshots',
      where: { app: { equals: doc.id } },
      sort: '-capturedAt',
      limit: 1,
      depth: 0,
      overrideAccess: true,
      req,
    })
    const previous = last[0]
    if (previous && SNAPSHOT_KEYS.every((key) => current[key] === previous[key])) return doc

    const requested: unknown = context?.scoringTrigger
    const trigger: ScoreSnapshot['trigger'] = !previous
      ? 'created'
      : TRIGGERS.find((value) => value === requested) ?? 'data-update'

    await req.payload.create({
      collection: 'score-snapshots',
      data: {
        app: doc.id,
        capturedAt: new Date().toISOString(),
        privacy: current.privacy as number,
        security: current.security as number,
        agency: current.agency as number,
        overall: current.overall as number,
        confidence: current.confidence as number,
        methodologyVersion: current.methodologyVersion as string,
        trigger,
        breakdown: (current.breakdown ?? null) as Record<string, unknown> | null,
      },
      req,
    })
  } catch (error) {
    req.payload.logger.error(
      { err: error, app: doc.id },
      'No s’ha pogut desar la instantània de puntuació',
    )
  }

  return doc
}
