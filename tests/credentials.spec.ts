import { describe, expect, it, vi } from 'vitest'

import { dataClassToSlug } from '@/lib/breaches/dataClasses'
import { hostOf, registrableDomain } from '@/lib/breaches/domains'
import {
  checkEmail,
  normaliseEmail,
  parseXonAnalytics,
  parseXonBreach,
  type XonBreach,
} from '@/lib/breaches/xposedornot'
import {
  editDistance,
  findSimilarities,
  mapWithLimit,
  similarityGroups,
  skeleton,
  variantReason,
} from '@/lib/passwords/audit'
import { buildEmailActions, matchBreaches, summarise } from '@/app/(frontend)/eines/credencials/match'
import type { CredApp, CredIndex } from '@/app/(frontend)/eines/credencials/types'

/* ─────────────────────────────── dominis ────────────────────────────────── */

describe('dominis registrables', () => {
  it('treu esquema, www, port i camí', () => {
    expect(hostOf('https://www.LinkedIn.com:443/in/algu')).toBe('linkedin.com')
    expect(hostOf('mail.google.com/path')).toBe('mail.google.com')
  })

  it('respecta els sufixos de segon nivell coneguts', () => {
    expect(registrableDomain('https://shop.example.co.uk/')).toBe('example.co.uk')
    expect(registrableDomain('accounts.google.com')).toBe('google.com')
  })

  it('rebutja el que no és un domini', () => {
    expect(registrableDomain('')).toBeNull()
    expect(registrableDomain('no és un domini')).toBeNull()
    expect(registrableDomain(null)).toBeNull()
  })
})

describe('vocabulari de categories de filtració', () => {
  it('distingeix mapat, descartat a posta i desconegut', () => {
    expect(dataClassToSlug('passwords')).toBe('contrasenya')
    expect(dataClassToSlug(' Email addresses ')).toBe('adreca-electronica')
    expect(dataClassToSlug('Licence plates')).toBeNull()
    expect(dataClassToSlug('Una categoria nova')).toBeUndefined()
  })

  it('reconeix les variants de XposedOrNot', () => {
    expect(dataClassToSlug('Credit card details')).toBe('dades-de-pagament')
    expect(dataClassToSlug('Government IDs')).toBe('document-identificatiu-oficial')
  })
})

/* ───────────────────────────── XposedOrNot ──────────────────────────────── */

const rawBreach = (overrides: Record<string, unknown> = {}) => ({
  breach: 'LinkedIn',
  details: 'Descripció',
  domain: 'linkedin.com',
  industry: 'Information Technology',
  logo: 'https://xposedornot.com/static/logos/LinkedIn.png',
  password_risk: 'easytocrack',
  verified: 'Yes',
  xposed_data: 'Email addresses;Passwords;;Email addresses',
  xposed_date: '2012',
  xposed_records: 164611595,
  ...overrides,
})

describe('adreces electròniques', () => {
  it('normalitza i valida', () => {
    expect(normaliseEmail('  Algu@Example.ORG ')).toBe('algu@example.org')
    expect(normaliseEmail('noarroba')).toBeNull()
    expect(normaliseEmail('a@b')).toBeNull()
    expect(normaliseEmail('a@b.c')).toBeNull()
    expect(normaliseEmail('dos@@exemple.cat')).toBeNull()
    expect(normaliseEmail(`${'a'.repeat(250)}@x.cat`)).toBeNull()
    expect(normaliseEmail(42)).toBeNull()
  })
})

describe('interpretació de la resposta de XposedOrNot', () => {
  it('neteja una filtració i no en conserva el logotip', () => {
    const breach = parseXonBreach(rawBreach())
    expect(breach).toEqual({
      id: 'LinkedIn',
      domain: 'linkedin.com',
      industry: 'Information Technology',
      year: 2012,
      records: 164611595,
      dataClasses: ['Email addresses', 'Passwords'],
      passwordRisk: 'easytocrack',
      verified: true,
      description: 'Descripció',
    })
    expect(JSON.stringify(breach)).not.toContain('logo')
  })

  it('descarta valors estranys en lloc d’inventar-los', () => {
    const breach = parseXonBreach(
      rawBreach({ domain: 'javascript:alert(1)', xposed_date: 'mai', xposed_records: -3, password_risk: 'rar' }),
    )
    expect(breach?.domain).toBeNull()
    expect(breach?.year).toBeNull()
    expect(breach?.records).toBeNull()
    expect(breach?.passwordRisk).toBe('unknown')
    expect(parseXonBreach({ details: 'sense nom' })).toBeNull()
    expect(parseXonBreach('text')).toBeNull()
  })

  it('«ExposedBreaches: null» vol dir que no surt enlloc', () => {
    expect(parseXonAnalytics({ ExposedBreaches: null })).toEqual({ status: 'none' })
    expect(parseXonAnalytics({ ExposedBreaches: { breaches_details: [] } })).toEqual({ status: 'none' })
  })

  it('ordena de la més recent a la més antiga i treu repetides', () => {
    const outcome = parseXonAnalytics({
      ExposedBreaches: {
        breaches_details: [
          rawBreach({ breach: 'Vella', xposed_date: '2010' }),
          rawBreach({ breach: 'Nova', xposed_date: '2024' }),
          rawBreach({ breach: 'Nova', xposed_date: '2024' }),
        ],
      },
    })
    expect(outcome.status).toBe('found')
    if (outcome.status === 'found') expect(outcome.breaches.map((b) => b.id)).toEqual(['Nova', 'Vella'])
  })

  it('una resposta que no és un objecte és un error, no un «net»', () => {
    expect(parseXonAnalytics('<html>').status).toBe('unavailable')
  })
})

describe('consulta a XposedOrNot', () => {
  const respond = (status: number, body: unknown, headers: Record<string, string> = {}) =>
    vi.fn(async () => new Response(JSON.stringify(body), { status, headers })) as unknown as typeof fetch

  it('no fa cap petició amb una adreça invàlida', async () => {
    const fetchImpl = respond(200, {})
    expect(await checkEmail('noarroba', { fetchImpl })).toEqual({ status: 'invalid' })
    expect(fetchImpl).not.toHaveBeenCalled()
  })

  it('envia l’adreça normalitzada, sense galetes ni referent', async () => {
    const fetchImpl = respond(200, { ExposedBreaches: null })
    await checkEmail(' Algu+test@Example.org', { fetchImpl })
    const [url, init] = (fetchImpl as unknown as ReturnType<typeof vi.fn>).mock.calls[0]
    expect(url).toBe('https://api.xposedornot.com/v1/breach-analytics?email=algu%2Btest%40example.org')
    expect(init).toMatchObject({ credentials: 'omit', referrerPolicy: 'no-referrer', cache: 'no-store' })
  })

  it('tradueix els estats de la resposta', async () => {
    expect(await checkEmail('a@b.cat', { fetchImpl: respond(404, { detail: 'Not found' }) })).toEqual({
      status: 'invalid',
    })
    expect(
      await checkEmail('a@b.cat', { fetchImpl: respond(429, {}, { 'Retry-After': '7' }) }),
    ).toEqual({ status: 'rate-limited', retryAfterSeconds: 7 })
    expect(
      await checkEmail('a@b.cat', { fetchImpl: respond(429, { detail: { retry_after: 3 } }) }),
    ).toEqual({ status: 'rate-limited', retryAfterSeconds: 3 })
    expect((await checkEmail('a@b.cat', { fetchImpl: respond(500, {}) })).status).toBe('unavailable')
  })

  it('una xarxa caiguda o lenta és «no s’ha pogut», mai «net»', async () => {
    const broken = vi.fn(async () => {
      throw new TypeError('Failed to fetch')
    }) as unknown as typeof fetch
    expect((await checkEmail('a@b.cat', { fetchImpl: broken })).status).toBe('unavailable')

    const slow = vi.fn(
      (_url: string, init: RequestInit) =>
        new Promise<Response>((_resolve, reject) => {
          init.signal?.addEventListener('abort', () => reject(new DOMException('aborted', 'AbortError')))
        }),
    ) as unknown as typeof fetch
    const outcome = await checkEmail('a@b.cat', { fetchImpl: slow, timeoutMs: 10 })
    expect(outcome).toEqual({ status: 'unavailable', reason: 'XposedOrNot no ha respost a temps.' })
  })
})

/* ───────────────────────── creuament amb el directori ───────────────────── */

const app = (slug: string, name: string, overrides: Partial<CredApp> = {}): CredApp => ({
  slug,
  name,
  company: 'Empresa',
  overall: 50,
  mfa: { status: 'yes', methods: ['sms', 'totp'], url: `https://${slug}.example/seguretat` },
  securityUrl: null,
  deletion: { url: null, possible: 'yes' },
  ...overrides,
})

const index: CredIndex = {
  apps: [app('linkedin', 'LinkedIn'), app('gmail', 'Gmail', { mfa: { status: 'unknown', methods: [], url: null } })],
  byBreachName: { linkedin: [0] },
  byDomain: { 'linkedin.com': [0], 'google.com': [1] },
  dataTypes: {
    contrasenya: { name: 'Contrasenya', sensitivity: 5, special: false },
    'adreca-electronica': { name: 'Adreça electrònica', sensitivity: 2, special: false },
    'numero-de-telefon': { name: 'Número de telèfon', sensitivity: 3, special: false },
    'dades-de-salut': { name: 'Dades de salut', sensitivity: 5, special: true },
  },
  authenticators: [{ slug: 'google-authenticator', name: 'Google Authenticator', overall: 69 }],
}

const breach = (overrides: Partial<XonBreach>): XonBreach => ({
  id: 'X',
  domain: null,
  industry: null,
  year: 2020,
  records: 10,
  dataClasses: ['Email addresses'],
  passwordRisk: 'unknown',
  verified: true,
  description: null,
  ...overrides,
})

describe('creuament de filtracions amb el directori', () => {
  const breaches = [
    breach({ id: 'LinkedIn', year: 2012, dataClasses: ['Email addresses', 'Passwords'], passwordRisk: 'easytocrack' }),
    breach({ id: 'GoogleThing', domain: 'mail.google.com', year: 2024, dataClasses: ['Phone numbers'] }),
    breach({ id: 'Clinica', year: 2023, dataClasses: ['Health insurance information', 'Licence plates'] }),
    breach({ id: 'Hashes', year: 2024, dataClasses: ['Email addresses'], passwordRisk: 'hardtocrack' }),
  ]
  const matched = matchBreaches(index, breaches)

  it('lliga pel nom del catàleg abans que pel domini', () => {
    expect(matched[0].apps).toEqual([{ slug: 'linkedin', name: 'LinkedIn', match: 'name' }])
    expect(matched[1].apps).toEqual([{ slug: 'gmail', name: 'Gmail', match: 'domain' }])
    expect(matched[2].apps).toEqual([])
  })

  it('tradueix les dades i separa les que no tenen equivalent', () => {
    expect(matched[0].dataTypes).toEqual(['adreca-electronica', 'contrasenya'])
    expect(matched[2].dataTypes).toEqual(['dades-de-salut'])
    expect(matched[2].otherClasses).toEqual(['Licence plates'])
  })

  it('classifica l’estat de les contrasenyes', () => {
    expect(matched.map((entry) => entry.passwords)).toEqual(['known', null, null, 'hashed'])
  })

  it('resumeix amb anys buits i marca el que ja és al diagnòstic', () => {
    const summary = summarise(index, matched, ['linkedin'])
    expect(summary.total).toBe(4)
    expect(summary.withPasswords).toBe(2)
    expect(summary.passwordsKnown).toBe(1)
    expect(summary.byYear).toHaveLength(2024 - 2012 + 1)
    expect(summary.byYear.find((entry) => entry.year === 2024)?.count).toBe(2)
    expect(summary.directoryApps).toEqual(['linkedin', 'gmail'])
    expect(summary.selectedApps).toEqual(['linkedin'])
    expect(summary.dataTypes[0].slug).toMatch(/contrasenya|dades-de-salut/)
  })

  it('fa accions explicables a partir de les dades', () => {
    const actions = buildEmailActions(index, matched, 2026)
    const ids = actions.map((entry) => entry.id)
    expect(ids[0]).toBe('passwords')
    expect(ids).toContain('mfa:linkedin')
    // Gmail no té el segon factor documentat: no s'hi inventa cap acció.
    expect(ids).not.toContain('mfa:gmail')
    expect(ids).toContain('phone')
    expect(ids).toContain('special')
    for (const entry of actions) {
      expect(entry.priority).toBe(entry.factors.reduce((total, factor) => total + factor.points, 0))
    }
    expect(actions.find((entry) => entry.id === 'passwords')?.because[0]).toBe('LinkedIn')
  })

  it('sense filtracions no hi ha cap acció', () => {
    expect(buildEmailActions(index, [], 2026)).toEqual([])
  })
})

/* ─────────────────────────── auditoria local ────────────────────────────── */

describe('auditoria de contrasenyes', () => {
  it('l’esquelet desfà xifres, símbols i substitucions', () => {
    expect(skeleton('Barcelona2023!')).toBe('barcelona')
    expect(skeleton('b4rc3lona24')).toBe('barcelona')
    expect(skeleton('123456')).toBe('')
  })

  it('distància d’edició amb sostre', () => {
    expect(editDistance('kitten', 'sitting')).toBe(3)
    expect(editDistance('abc', 'abc')).toBe(0)
    expect(editDistance('a', 'abcdef', 2)).toBe(3)
  })

  it('reconeix les variants que proven els atacs', () => {
    expect(variantReason('Password1', 'password1')).toMatch(/majúscules/)
    expect(variantReason('Barcelona2023!', 'barcelona24')).toMatch(/mateixa base/)
    expect(variantReason('correcthorse7', 'correcthorse8')).not.toBeNull()
    expect(variantReason('gat', 'gos')).toBeNull()
    expect(variantReason('xT9#qL2v!Rm8wZp4', 'Hq3$zP8n@Lw5Ty1v')).toBeNull()
  })

  it('agrupa repeticions encadenades', () => {
    const entries = [
      { id: 'a', label: '', value: 'Barcelona2023!' },
      { id: 'b', label: '', value: 'barcelona24' },
      { id: 'c', label: '', value: 'barcelona24' },
      { id: 'd', label: '', value: 'res-a-veure-amb-cap' },
      { id: 'e', label: '', value: '' },
    ]
    const pairs = findSimilarities(entries)
    expect(pairs.find((pair) => pair.a === 'b' && pair.b === 'c')?.kind).toBe('same')
    expect(similarityGroups(entries, pairs)).toEqual([['a', 'b', 'c']])
  })

  it('limita la concurrència i conserva l’ordre', async () => {
    let active = 0
    let peak = 0
    const results = await mapWithLimit([5, 1, 3, 2], 2, async (value) => {
      active += 1
      peak = Math.max(peak, active)
      await new Promise((resolve) => setTimeout(resolve, value))
      active -= 1
      return value * 10
    })
    expect(results).toEqual([50, 10, 30, 20])
    expect(peak).toBe(2)
  })
})
