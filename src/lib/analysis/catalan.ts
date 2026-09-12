import type { EvidenceStatus } from '@/fields/evidence'

import {
  appRef,
  at,
  compareText,
  factStatus,
  localizedText,
  percentage,
  relationId,
  type AppRef,
  type Corpus,
} from './corpus'

/**
 * Disponibilitat en català del directori.
 *
 * És l'única dimensió del projecte que es publica **fora** de la puntuació, i
 * la raó és metodològica, no política: que un servei tingui interfície en
 * català no diu res de com tracta les dades. Si sumés a la nota global,
 * premiaria les plataformes més grans —que tradueixen a seixanta idiomes
 * perquè tenen equips per fer-ho— i castigaria eines petites i molt
 * respectuoses fetes per cinc persones. Barrejar accés i qualitat espatllaria
 * totes dues mesures alhora.
 *
 * Publicar-la al costat, en canvi, respon una pregunta que la nota no respon i
 * que aquí importa: dels serveis que valen la pena, quins es poden fer servir
 * en la llengua pròpia?
 *
 * La font és sempre la mateixa i és verificable: la llista d'idiomes
 * d'interfície que cada empresa declara a la seva fitxa de l'App Store.
 */

export type CatalanApp = AppRef & {
  status: EvidenceStatus
  /** Idiomes d'interfície declarats a la botiga. `null` si no s'ha comprovat. */
  languages: number | null
  /** Nom del grup empresarial, per veure si la decisió es pren per grups. */
  groupName: string | null
  /** Puntuació global, per creuar llengua i qualitat. */
  overall: number | null
}

export type CatalanGroupRow = {
  groupName: string
  apps: number
  withCatalan: number
}

export type CatalanAnalysis = {
  appsConsidered: number
  /** Fitxes comprovades: les que tenen una afirmació documentada. */
  checked: number
  withCatalan: number
  withoutCatalan: number
  unknown: number
  /** Percentatge sobre les comprovades, no sobre el total. */
  share: number

  /**
   * Mitjana d'idiomes d'interfície de les que sí que el tenen i de les que no.
   * És la xifra que desmunta l'excusa habitual: si una aplicació tradueix a
   * trenta-cinc idiomes i el català no hi és, el problema no és la capacitat.
   */
  averageLanguagesWith: number | null
  averageLanguagesWithout: number | null

  /** Les que no el tenen tot i traduir a molts idiomes, de més a menys. */
  withoutDespiteMany: CatalanApp[]
  /** Totes les fitxes, ordenades: primer les que el tenen, després per nom. */
  rows: CatalanApp[]
  /** Repartiment per grup empresarial. */
  groups: CatalanGroupRow[]

  /** Mitjana de puntuació global de cada meitat. Pot no dir res, i això també. */
  averageOverallWith: number | null
  averageOverallWithout: number | null
}

const mean = (values: number[]): number | null =>
  values.length === 0 ? null : Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 10) / 10

export const analyseCatalan = (corpus: Corpus): CatalanAnalysis => {
  const rows: CatalanApp[] = []

  for (const app of corpus.apps) {
    const status = factStatus(at(app, 'catalan.interfaceAvailable'))
    const languagesRaw = at(app, 'catalan.interfaceLanguages')
    const overallRaw = at(app, 'scores.overall')
    const companyId = relationId(app.company)
    const company = companyId === null ? undefined : corpus.companyById.get(companyId)

    rows.push({
      ...appRef(app),
      status,
      languages: typeof languagesRaw === 'number' ? languagesRaw : null,
      groupName: company === undefined ? null : localizedText(company.name),
      overall: typeof overallRaw === 'number' ? overallRaw : null,
    })
  }

  const withCatalan = rows.filter((row) => row.status === 'yes' || row.status === 'partial')
  const withoutCatalan = rows.filter((row) => row.status === 'no')
  const unknown = rows.filter((row) => row.status === 'unknown' || row.status === 'na')
  const checked = withCatalan.length + withoutCatalan.length

  const groupMap = new Map<string, CatalanGroupRow>()
  for (const row of rows) {
    const name = row.groupName ?? 'Sense empresa documentada'
    const entry = groupMap.get(name) ?? { groupName: name, apps: 0, withCatalan: 0 }
    entry.apps += 1
    if (row.status === 'yes' || row.status === 'partial') entry.withCatalan += 1
    groupMap.set(name, entry)
  }

  return {
    appsConsidered: rows.length,
    checked,
    withCatalan: withCatalan.length,
    withoutCatalan: withoutCatalan.length,
    unknown: unknown.length,
    share: percentage(withCatalan.length, checked),
    averageLanguagesWith: mean(
      withCatalan.map((row) => row.languages).filter((value): value is number => value !== null),
    ),
    averageLanguagesWithout: mean(
      withoutCatalan.map((row) => row.languages).filter((value): value is number => value !== null),
    ),
    withoutDespiteMany: withoutCatalan
      .slice()
      .sort((a, b) => (b.languages ?? 0) - (a.languages ?? 0) || compareText(a.name, b.name)),
    rows: rows
      .slice()
      .sort(
        (a, b) =>
          Number(b.status === 'yes' || b.status === 'partial') -
            Number(a.status === 'yes' || a.status === 'partial') || compareText(a.name, b.name),
      ),
    groups: [...groupMap.values()].sort(
      (a, b) => b.apps - a.apps || compareText(a.groupName, b.groupName),
    ),
    averageOverallWith: mean(
      withCatalan.map((row) => row.overall).filter((value): value is number => value !== null),
    ),
    averageOverallWithout: mean(
      withoutCatalan.map((row) => row.overall).filter((value): value is number => value !== null),
    ),
  }
}
