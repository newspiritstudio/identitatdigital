import { describe, expect, it } from 'vitest'

import {
  TIER_THRESHOLDS,
  breachSummary,
  buildPlan,
  riskOf,
  tierOf,
} from '@/app/(frontend)/eines/diagnostic/plan'
import { analyseSelection } from '@/app/(frontend)/eines/diagnostic/compute'
import { buildReport } from '@/app/(frontend)/eines/diagnostic/report'
import type { AppLite, ControlsLite, Snapshot } from '@/app/(frontend)/eines/diagnostic/types'

/**
 * Proves del pla d'acció del diagnòstic amb una instantània mínima feta a mà.
 * Cap prova no depèn del corpus: la lògica s'ha de poder demostrar amb
 * qualsevol directori.
 */

const unknownFact = { status: 'unknown' as const, url: null }

const controls = (overrides: Partial<ControlsLite> = {}): ControlsLite => ({
  mfa: { ...unknownFact, methods: [] },
  e2ee: { ...unknownFact, scope: null },
  targetedAdvertising: unknownFact,
  adOptOut: unknownFact,
  aiTraining: unknownFact,
  telemetryOptOut: unknownFact,
  dataExport: unknownFact,
  rightsRequest: null,
  privacyCenter: null,
  severeDarkPatterns: 0,
  defaultPosture: 'unknown',
  ...overrides,
})

const company = { id: 'c1', name: 'Empresa', slug: 'empresa' }

const app = (slug: string, overrides: Partial<AppLite> = {}): AppLite => ({
  slug,
  name: slug.toUpperCase(),
  categories: [],
  company,
  group: company,
  overall: 50,
  confidence: 0.8,
  provisional: false,
  weakIndicators: [],
  unknownIndicators: 0,
  rows: [],
  recipients: [],
  unnamedTrackers: 0,
  alternatives: [],
  categorySlugs: [],
  popular: false,
  controls: controls(),
  deletion: {
    possible: 'yes',
    selfService: 'yes',
    url: 'https://exemple.cat/esborra',
    difficulty: 'easy',
    waitingPeriodDays: 30,
    requiresSupportContact: false,
  },
  breaches: [],
  incidents: [],
  dataBrokerSales: 'unknown',
  ...overrides,
})

const snapshot: Snapshot = {
  apps: [
    app('filtrada', {
      breaches: [{ index: 0, match: 'editorial' }],
      controls: controls({
        mfa: { status: 'yes', url: 'https://filtrada.example/2fa', methods: ['sms', 'passkey'] },
      }),
    }),
    app('neta'),
    app('sense-res', { deletion: { ...app('x').deletion, possible: 'unknown', url: null } }),
    app('a'),
    app('b'),
  ],
  dataTypes: [{ slug: 'contrasenya', name: 'Contrasenya', sensitivity: 5, special: false }],
  categories: [],
  publishedApps: 5,
  unresolvedAlternatives: 0,
  breaches: [
    {
      name: 'Filtrada',
      title: 'Filtrada',
      domain: 'filtrada.example',
      date: '2015-06-01',
      pwnCount: 1000,
      dataTypes: [0],
      otherClasses: [],
      passwords: true,
      verified: true,
      sensitive: false,
    },
  ],
  incidents: [],
  breachCatalogSize: 1,
}

describe('pla d’acció del diagnòstic', () => {
  const plan = buildPlan(snapshot, ['filtrada', 'neta'], [])

  it('fa accions només del que està documentat', () => {
    const ids = plan.actions.map((action) => action.id)
    expect(ids).toContain('password:filtrada')
    expect(ids).toContain('mfa:filtrada')
    expect(ids.some((id) => id.endsWith(':neta'))).toBe(false)
    expect(plan.appsWithoutActions.map((entry) => entry.slug)).toEqual(['neta'])
  })

  it('la prioritat és la suma dels factors que s’ensenyen', () => {
    for (const action of plan.actions) {
      expect(action.priority).toBe(action.factors.reduce((total, factor) => total + factor.points, 0))
      expect(action.tier).toBe(tierOf(action.priority))
    }
    expect(plan.actions[0].id).toBe('password:filtrada')
  })

  it('recomana el millor mètode i avisa de l’SMS', () => {
    const mfa = plan.actions.find((action) => action.id === 'mfa:filtrada')
    expect(mfa?.title).toMatch(/passkeys/)
    expect(mfa?.cautions.join(' ')).toMatch(/SMS/)
  })

  it('un servei que es deixa passa a acció d’esborrar', () => {
    const leaving = buildPlan(snapshot, ['filtrada', 'neta'], ['filtrada'])
    const ids = leaving.actions.map((action) => action.id)
    expect(ids).toContain('delete:filtrada')
    expect(ids).not.toContain('mfa:filtrada')
  })

  it('el gestor de contrasenyes surt a partir de cinc serveis', () => {
    const few = buildPlan(snapshot, ['a', 'b'], []).actions.map((action) => action.id)
    const many = buildPlan(snapshot, ['filtrada', 'neta', 'sense-res', 'a', 'b'], []).actions.map(
      (action) => action.id,
    )
    expect(few).not.toContain('global:password-manager')
    expect(many).toContain('global:password-manager')
    expect(many).toContain('global:password-audit')
  })

  it('sense tria no hi ha pla', () => {
    expect(buildPlan(snapshot, [], []).actions).toEqual([])
  })

  it('els trams segueixen els llindars publicats', () => {
    expect(tierOf(TIER_THRESHOLDS.now)).toBe('now')
    expect(tierOf(TIER_THRESHOLDS.soon)).toBe('soon')
    expect(tierOf(TIER_THRESHOLDS.soon - 1)).toBe('later')
  })
})

describe('mapa de risc i filtracions', () => {
  it('els desconeguts són desconeguts, no negatius', () => {
    const risk = riskOf(snapshot.apps[1], snapshot)
    const special = risk.signals.find((signal) => signal.key === 'special')
    expect(special?.state).toBe('unknown')
    expect(risk.signals.find((signal) => signal.key === 'breaches')?.state).toBe('off')
  })

  it('resumeix les filtracions dels serveis triats', () => {
    const summary = breachSummary(snapshot, ['filtrada', 'neta'])
    expect(summary.items).toHaveLength(1)
    expect(summary.withPasswords).toBe(1)
    expect(summary.firstYear).toBe(2015)
  })

  it('l’informe porta les accions i els serveis', () => {
    const plan = buildPlan(snapshot, ['filtrada'], [])
    const report = buildReport({
      exposure: analyseSelection(snapshot, ['filtrada']),
      plan,
      risks: [riskOf(snapshot.apps[0], snapshot)],
      breaches: breachSummary(snapshot, ['filtrada']),
      done: ['mfa:filtrada'],
      date: new Date('2026-09-25T12:00:00Z'),
    })
    expect(report).toContain('FILTRADA')
    expect(report).toContain('- [x]')
  })
})
