import { describe, expect, it } from 'vitest'

import { buildCorpus } from '@/lib/analysis'
import { ascii, concat, latin1 } from '@/lib/metadata/bytes'
import { inflate } from '@/lib/metadata/bytes'
import { clean, inspect } from '@/lib/metadata'
import { datasetByKey } from '@/lib/opendata/datasets'
import { checkPassword, isRangeBody } from '@/lib/passwords/pwned'
import { computeScores } from '@/lib/scoring/score'
import type { ScoringContext } from '@/lib/scoring/types'
import type { Breach, Company, Incident } from '@/payload-types'

/*
 * Proves de regressió de l'auditoria de producció. Cada bloc correspon a un
 * error que va arribar a existir; si una d'aquestes proves falla, l'error ha
 * tornat.
 */

const ctx = (overrides: Partial<ScoringContext> = {}): ScoringContext => ({
  dataTypes: new Map([['loc', { sensitivity: 5, specialCategory: false }]]),
  incidents: [],
  now: new Date('2026-09-01T00:00:00.000Z'),
  ...overrides,
})

const indicator = (app: unknown, key: string, context = ctx()) =>
  computeScores(app, context).indicators.find((entry) => entry.key === key)

describe('puntuació: desconeguts i «no aplica»', () => {
  it('una recollida de dades tota «desconeguda» no puntua com «no recull res»', () => {
    const app = { dataCollection: [{ dataType: 'loc', status: 'unknown' }] }
    expect(indicator(app, 'data-volume')?.value).toBeNull()
    expect(indicator(app, 'data-sensitivity')?.value).toBeNull()
  })

  it('si alguna fila és coneguda, es continua puntuant', () => {
    const app = { dataCollection: [{ dataType: 'loc', status: 'no' }] }
    expect(indicator(app, 'data-volume')?.value).toBe(1)
  })

  it('«no aplica» als patrons enganyosos i a l’exportació surt del càlcul', () => {
    const app = {
      controls: { darkPatterns: { status: 'na', evidenceLevel: 'official' } },
      userRights: { dataExport: { status: 'na', evidenceLevel: 'official' } },
    }
    expect(indicator(app, 'dark-patterns')?.applicable).toBe(false)
    expect(indicator(app, 'export-formats')?.applicable).toBe(false)
  })

  it('si esborrar el compte no aplica, tampoc no n’apliquen la dificultat ni l’espera', () => {
    const app = {
      accountDeletion: {
        possible: { status: 'na', evidenceLevel: 'official' },
        difficulty: 'hard',
        waitingPeriodDays: 120,
      },
    }
    for (const key of ['deletion-direct-url', 'deletion-difficulty', 'deletion-waiting']) {
      expect(indicator(app, key)?.applicable).toBe(false)
    }
  })

  it('una data d’incident il·legible pesa com una data absent, no com una d’antiga', () => {
    const app = { review: { incidentsReviewed: true } }
    const undated = indicator(app, 'incident-history', ctx({ incidents: [{ severity: 'high' }] }))
    const invalid = indicator(
      app,
      'incident-history',
      ctx({ incidents: [{ severity: 'high', occurredAt: 'no és una data' }] }),
    )
    expect(invalid?.value).toBe(undated?.value)
  })
})

describe('dades obertes', () => {
  const rows = (key: string, corpus: Parameters<typeof buildCorpus>[0]) => {
    const spec = datasetByKey(key)
    if (!spec) throw new Error(`No existeix el conjunt ${key}`)
    return spec.build({ corpus: buildCorpus(corpus), sources: [] })
  }

  it('els qualificadors de filtracions es llegeixen del nivell superior', () => {
    const breach = {
      id: 'b1',
      name: 'Exemple',
      title: 'Exemple',
      isVerified: true,
      isSensitive: true,
    } as Breach
    const [row] = rows('filtracions', { breaches: [breach] })
    expect(row.verificada).toBe(true)
    expect(row.sensible).toBe(true)
    expect(row.fabricada).toBe(false)
  })

  it('l’establiment a la UE és el text de la fitxa', () => {
    const company = { id: 'c1', name: 'Exemple', slug: 'exemple', euEstablishment: 'IE' } as Company
    const [row] = rows('empreses', { companies: [company] })
    expect(row.establiment_ue).toBe('IE')
  })

  it('les persones afectades es publiquen tal com consten', () => {
    const incident = {
      id: 'i1',
      title: 'Exemple',
      slug: 'exemple',
      affectedPeople: '533 milions',
    } as Incident
    const [row] = rows('incidents', { incidents: [incident] })
    expect(row.persones_afectades).toBe('533 milions')
  })
})

describe('Have I Been Pwned', () => {
  const suffixLine = 'A'.repeat(35)

  it('reconeix una resposta de rang i en rebutja qualsevol altra cosa', () => {
    expect(isRangeBody(`${suffixLine}:3\r\n${'B'.repeat(35)}:0`)).toBe(true)
    expect(isRangeBody('')).toBe(false)
    expect(isRangeBody('<html><body>Portal captiu</body></html>')).toBe(false)
  })

  it('un 200 que no és una resposta de rang no diu «no filtrada»', async () => {
    const fakeFetch = (async () => new Response('<html>Wi-Fi de l’hotel</html>', { status: 200 })) as typeof fetch
    const outcome = await checkPassword('una contrasenya qualsevol', fakeFetch)
    expect(outcome.status).toBe('unavailable')
  })
})

describe('metadades', () => {
  it('troba i neteja les metadades PDF desades com a referència', async () => {
    const pdf = ascii(
      [
        '%PDF-1.7',
        '1 0 obj << /Type /Catalog >> endobj',
        '2 0 obj << /Author 4 0 R /Producer (Writer) >> endobj',
        '4 0 obj (Joana Puig) endobj',
        'trailer << /Root 1 0 R /Info 2 0 R >>',
        '%%EOF',
      ].join('\n'),
    )
    const found = await inspect(pdf)
    expect(found.fields.map((field) => field.value)).toContain('Joana Puig')

    const cleaned = await clean(pdf)
    expect(latin1(cleaned.bytes)).not.toContain('Joana')
    expect(cleaned.verification.fields).toHaveLength(0)
  })

  it('una entitat XML fora de rang no esborra la resta de l’XMP', async () => {
    const xmp =
      '<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF><rdf:Description dc:creator="Joana &#99999999; Puig"/></rdf:RDF></x:xmpmeta>'
    const pdf = concat([ascii('%PDF-1.7\n1 0 obj << /Type /Metadata >> stream\n'), ascii(xmp), ascii('\nendstream endobj\n%%EOF')])
    const found = await inspect(pdf)
    expect(found.notes.join(' ')).not.toContain('malmès')
  })

  it('una bomba de compressió s’atura abans d’esgotar la memòria', async () => {
    const zeros = new Uint8Array(2 * 1024 * 1024)
    const compressed = new Uint8Array(
      await new Response(new Blob([zeros]).stream().pipeThrough(new CompressionStream('deflate'))).arrayBuffer(),
    )
    await expect(inflate(compressed, 'deflate', 1024 * 1024)).rejects.toThrow()
    expect((await inflate(compressed, 'deflate')).byteLength).toBe(zeros.byteLength)
  })
})
