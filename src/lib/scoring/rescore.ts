import type { Payload, PayloadRequest } from 'payload'

export type ScoringTrigger = 'data-update' | 'methodology-change' | 'bulk-recalculation'

export type RescoreResult =
  | { status: 'updated'; overall: number | null }
  | { status: 'skipped-draft' }
  | { status: 'missing' }

/**
 * Torna a desar una fitxa perquè el hook de càlcul refaci les puntuacions.
 *
 * No es pot fer amb un `update` pelat. Payload parteix de la darrera versió de
 * la fitxa, i si és un esborrany a mig fer, desar sense `draft` en publica el
 * contingut. En desar-lo amb `draft`, en canvi, la fitxa sortiria del web.
 * Per això:
 *
 *  - Si mai no s'ha publicat, es desa com a esborrany i continua sent-ho.
 *  - Si està publicada i té un esborrany pendent, no es toca. Quan es publiqui
 *    l'esborrany, el càlcul es farà llavors, amb les dades d'aquell moment.
 *  - Si no, es desa normalment i queda publicada com estava.
 */
export const rescoreApp = async (
  payload: Payload,
  id: string,
  { req, trigger = 'data-update' }: { req?: Partial<PayloadRequest>; trigger?: ScoringTrigger } = {},
): Promise<RescoreResult> => {
  const main = await payload
    .findByID({ collection: 'apps', id, depth: 0, draft: false, overrideAccess: true, req, disableErrors: true })
    .catch(() => null)
  if (!main) return { status: 'missing' }

  const { docs } = await payload.findVersions({
    collection: 'apps',
    where: { and: [{ parent: { equals: id } }, { latest: { equals: true } }] },
    sort: '-updatedAt',
    limit: 1,
    depth: 0,
    overrideAccess: true,
    req,
  })
  const latestStatus = docs[0]?.version?._status
  const neverPublished = main._status !== 'published'

  if (!neverPublished && latestStatus === 'draft') return { status: 'skipped-draft' }

  const updated = await payload.update({
    collection: 'apps',
    id,
    data: {},
    draft: neverPublished,
    depth: 0,
    overrideAccess: true,
    context: { scoringTrigger: trigger },
    req,
  })
  return { status: 'updated', overall: updated.scores?.overall ?? null }
}
