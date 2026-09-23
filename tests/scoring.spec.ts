import { describe, expect, it } from 'vitest'

import { computeScores } from '@/lib/scoring/score'
import type { ScoringContext } from '@/lib/scoring/types'

const ctx = (overrides: Partial<ScoringContext> = {}): ScoringContext => ({
  dataTypes: new Map([
    ['loc', { sensitivity: 5, specialCategory: false }],
    ['email', { sensitivity: 2, specialCategory: false }],
    ['ideology', { sensitivity: 5, specialCategory: true }],
  ]),
  incidents: [],
  now: new Date('2026-09-01T00:00:00.000Z'),
  ...overrides,
})

const fact = (status: string, evidenceLevel = 'official', extra: Record<string, unknown> = {}) => ({
  status,
  evidenceLevel,
  verifiedAt: '2026-08-01T00:00:00.000Z',
  ...extra,
})

describe('computeScores', () => {
  it('deixa fora del càlcul els indicadors desconeguts en lloc de penalitzar-los', () => {
    const known = {
      dataUses: { targetedAdvertising: fact('no'), profiling: fact('no') },
      tracking: { crossAppTracking: fact('no') },
    }
    const withUnknown = {
      ...known,
      sharing: { thirdPartySharing: fact('unknown', 'unknown') },
    }

    const a = computeScores(known, ctx())
    const b = computeScores(withUnknown, ctx())

    expect(b.privacy).toBe(a.privacy)
    // El desconegut no mou la puntuació, però sí que baixa la confiança.
    expect(b.confidence).toBeLessThanOrEqual(a.confidence)
  })

  it('«no aplica» no compta ni a la puntuació ni a la cobertura', () => {
    const base = { security: { transportEncryption: fact('yes') } }
    const withNa = {
      security: { ...base.security, e2ee: fact('na', 'official') },
    }

    const a = computeScores(base, ctx())
    const b = computeScores(withNa, ctx())

    expect(b.security).toBe(a.security)
    expect(b.coverage).toBeGreaterThanOrEqual(a.coverage)
  })

  it('penalitza la publicitat personalitzada i el seguiment entre aplicacions', () => {
    const respectful = {
      dataUses: { targetedAdvertising: fact('no'), profiling: fact('no') },
      tracking: { crossAppTracking: fact('no'), thirdPartyTrackersPresent: fact('no') },
    }
    const invasive = {
      dataUses: { targetedAdvertising: fact('yes'), profiling: fact('yes') },
      tracking: { crossAppTracking: fact('yes'), thirdPartyTrackersPresent: fact('yes') },
    }

    expect(computeScores(respectful, ctx()).privacy).toBe(100)
    expect(computeScores(invasive, ctx()).privacy).toBe(0)
  })

  it('la sensibilitat de les dades recollides mou la minimització', () => {
    const light = {
      dataCollection: [
        { dataType: 'email', status: 'yes', linkedToIdentity: 'yes', evidenceLevel: 'official' },
      ],
    }
    const heavy = {
      dataCollection: [
        { dataType: 'email', status: 'yes', linkedToIdentity: 'yes', evidenceLevel: 'official' },
        { dataType: 'loc', status: 'yes', linkedToIdentity: 'yes', evidenceLevel: 'official' },
        { dataType: 'ideology', status: 'yes', linkedToIdentity: 'yes', evidenceLevel: 'official' },
      ],
    }

    const lightVolume = computeScores(light, ctx()).indicators.find((i) => i.key === 'data-volume')
    const heavyVolume = computeScores(heavy, ctx()).indicators.find((i) => i.key === 'data-volume')

    expect(lightVolume?.value).toBeGreaterThan(heavyVolume?.value as number)
    const heavySensitivity = computeScores(heavy, ctx()).indicators.find(
      (i) => i.key === 'data-sensitivity',
    )
    expect(heavySensitivity?.value).toBeLessThan(0.5)
  })

  it('l’historial d’incidents només puntua si s’ha revisat', () => {
    const app = { review: { incidentsReviewed: false } }
    const reviewed = { review: { incidentsReviewed: true } }

    const unreviewed = computeScores(app, ctx()).indicators.find((i) => i.key === 'incident-history')
    expect(unreviewed?.value).toBeNull()

    const clean = computeScores(reviewed, ctx()).indicators.find((i) => i.key === 'incident-history')
    expect(clean?.value).toBe(1)

    const withIncident = computeScores(
      reviewed,
      ctx({ incidents: [{ occurredAt: '2025-01-01', severity: 'critical' }] }),
    ).indicators.find((i) => i.key === 'incident-history')
    expect(withIncident?.value).toBeLessThan(0.7)
  })

  it('marca com a provisional una fitxa amb poca evidència', () => {
    const thin = { dataUses: { targetedAdvertising: fact('yes', 'editorial') } }
    const result = computeScores(thin, ctx())
    expect(result.provisional).toBe(true)
    expect(result.confidence).toBeLessThan(50)
  })

  it('el global pondera privadesa, seguretat i control', () => {
    const app = {
      dataUses: { targetedAdvertising: fact('no'), profiling: fact('no') },
      security: { transportEncryption: fact('yes') },
      accountDeletion: {
        possible: fact('yes'),
        difficulty: 'easy',
        directUrl: 'https://example.com/eliminar',
        waitingPeriodDays: 0,
      },
    }
    const result = computeScores(app, ctx())
    expect(result.privacy).toBe(100)
    expect(result.security).toBe(100)
    expect(result.agency).toBe(100)
    expect(result.overall).toBe(100)
  })
})

describe('serveis públics', () => {
  const publicApp = (overrides: Record<string, unknown> = {}) => ({
    security: { bugBounty: fact('no'), transportEncryption: fact('yes') },
    transparency: { transparencyReport: fact('no') },
    accountDeletion: { possible: fact('no'), selfService: fact('no'), difficulty: 'impossible' },
    retention: { dataAfterDeletion: fact('yes') },
    publicService: {
      isPublicService: true,
      legalBasis: fact('yes'),
      processingRegistry: fact('yes'),
      dpia: fact('unknown', 'unknown'),
      ensConformity: fact('yes', 'official', { category: 'high' }),
      dpo: fact('yes'),
      offlineAlternative: fact('yes'),
      accessibilityStatement: fact('partial'),
      mandatoryRetention: fact('no'),
      ...overrides,
    },
  })

  it('no aplica el bloc públic a un servei comercial', () => {
    const commercial = { security: { bugBounty: fact('no') } }
    const keys = computeScores(commercial, ctx()).indicators.map((i) => i.key)
    expect(keys).not.toContain('ens-conformity')
    expect(keys).not.toContain('legal-basis')
  })

  it('substitueix el programa de recompenses i l’informe de transparència', () => {
    const result = computeScores(publicApp(), ctx())
    const bugBounty = result.indicators.find((i) => i.key === 'bug-bounty')
    const report = result.indicators.find((i) => i.key === 'transparency-report')
    const ens = result.indicators.find((i) => i.key === 'ens-conformity')

    expect(bugBounty?.applicable).toBe(false)
    expect(report?.applicable).toBe(false)
    expect(ens?.value).toBe(1)
  })

  it('treu del càlcul l’eliminació del compte quan la conservació és obligació legal', () => {
    const sense = computeScores(publicApp(), ctx())
    const amb = computeScores(publicApp({ mandatoryRetention: fact('yes') }), ctx())

    const deletion = (result: ReturnType<typeof computeScores>) =>
      result.indicators.find((i) => i.key === 'deletion-possible')

    expect(deletion(sense)?.applicable).toBe(true)
    expect(deletion(amb)?.applicable).toBe(false)
    // Deixar de penalitzar un impossible legal ha de millorar la dimensió de control.
    expect(amb.agency as number).toBeGreaterThan(sense.agency as number)
  })
})
