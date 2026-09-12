import {
  at,
  compareText,
  localizedText,
  relationId,
  ultimateParentId,
  type Corpus,
} from '@/lib/analysis'

import type {
  AlternativeLite,
  AppLite,
  CategoryLite,
  CompanyLite,
  Comparability,
  DataRow,
  DataTypeLite,
  RowStatus,
  SharedWith,
  Snapshot,
  Ternary,
  WeakIndicator,
} from './types'

/**
 * Construcció de la instantània que es baixa el navegador.
 *
 * Aquest fitxer només s'executa al servidor. Rep el `Corpus` sencer —vint-i-cinc
 * fitxes amb desenes de camps cadascuna, més empreses, tipus de dada i
 * categories— i en destil·la l'estricte mínim que la calculadora necessita.
 *
 * La regla per decidir què hi entra ha estat una sola: si l'eina no ho calcula
 * ni ho mostra, no viatja. Per això no hi ha resums editorials, ni fonts, ni
 * polítiques de privadesa, ni indicadors de seguretat un per un, ni incidents,
 * ni logotips. Són els camps que fan gran una fitxa i cap d'ells no entra en
 * cap de les sis preguntes que respon la calculadora.
 *
 * La segona decisió és que el càlcul viu al navegador i, per tant, la
 * instantània ha d'estar preparada per ser recombinada: les relacions ja venen
 * resoltes (l'empresa amb nom, la matriu última amb nom, l'alternativa amb la
 * seva puntuació) perquè el client no hagi de recórrer cap graf ni conservar
 * índexs auxiliars.
 */

const ROW_STATUSES: readonly RowStatus[] = ['yes', 'optional', 'no', 'unknown']
const TERNARIES: readonly Ternary[] = ['yes', 'no', 'unknown']
const SHARED_WITHS: readonly SharedWith[] = ['none', 'group', 'third-parties', 'brokers', 'unknown']
const COMPARABILITIES: readonly Comparability[] = ['equivalent', 'partial', 'complementary']

const oneOf = <T extends string>(value: unknown, allowed: readonly T[], fallback: T): T =>
  typeof value === 'string' && (allowed as readonly string[]).includes(value)
    ? (value as T)
    : fallback

const text = (value: unknown): string | null => {
  const resolved = localizedText(value)
  return resolved !== null && resolved.trim().length > 0 ? resolved : null
}

const numberOrNull = (value: unknown): number | null =>
  typeof value === 'number' && Number.isFinite(value) ? value : null

/**
 * Indicadors que més estiren la puntuació d'una fitxa cap avall.
 *
 * `scores.breakdown` és un camp JSON i, per tant, el sistema de tipus no en
 * garanteix res: es llegeix amb totes les comprovacions fetes a mà i, si no hi
 * és o té una forma inesperada, es retorna una llista buida. Una fitxa sense
 * detall d'indicadors ha de poder sortir igualment a l'eina.
 *
 * Criteri de selecció: només indicadors aplicables i documentats, amb valor per
 * sota de 0,5 —és a dir, els que realment fan baixar la nota— ordenats pel que
 * aporten a la caiguda, que és el pes multiplicat pel que els falta per arribar
 * a 1. Es conserven els cinc primers: n'hi ha prou per explicar el motiu i
 * evita arrossegar la metodologia sencera fins al navegador.
 *
 * Els indicadors aplicables sense evidència es compten a part i NO es presenten
 * com a punts febles: un indicador desconegut no puntua ni amunt ni avall.
 */
const readWeakIndicators = (breakdown: unknown): { weak: WeakIndicator[]; unknown: number } => {
  const raw = at(breakdown, 'indicators')
  if (!Array.isArray(raw)) return { weak: [], unknown: 0 }

  const weak: WeakIndicator[] = []
  let unknownCount = 0

  for (const indicator of raw) {
    if (at(indicator, 'applicable') === false) continue
    const value = numberOrNull(at(indicator, 'value'))
    if (value === null) {
      unknownCount += 1
      continue
    }
    if (value >= 0.5) continue
    const key = at(indicator, 'key')
    const label = at(indicator, 'label')
    const dimension = at(indicator, 'dimension')
    weak.push({
      key: typeof key === 'string' ? key : '',
      label: typeof label === 'string' ? label : '(indicador sense etiqueta)',
      dimension: typeof dimension === 'string' ? dimension : '',
      value,
      weight: numberOrNull(at(indicator, 'weight')) ?? 0,
    })
  }

  weak.sort(
    (a, b) =>
      b.weight * (1 - b.value) - a.weight * (1 - a.value) ||
      a.value - b.value ||
      compareText(a.label, b.label),
  )

  return { weak: weak.slice(0, 5), unknown: unknownCount }
}

export const buildSnapshot = (corpus: Corpus): Snapshot => {
  /* Catàleg de tipus de dada, retallat als que alguna fitxa publicada menciona.
   * Els que no menciona ningú són informació sobre la nostra feina —i per això
   * surten a l'anàlisi del directori— però aquí no poden aparèixer mai a cap
   * resultat, de manera que viatjarien per res. Cal una primera passada per
   * saber quins són, perquè les files de la matriu hi apunten per índex i els
   * índexs s'han d'assignar abans de recórrer les fitxes. */
  const mentioned = new Set<string>()
  for (const app of corpus.apps) {
    const rows = Array.isArray(app.dataCollection) ? app.dataCollection : []
    for (const row of rows) {
      const id = relationId(at(row, 'dataType'))
      if (id !== null) mentioned.add(id)
    }
  }

  const dataTypes: DataTypeLite[] = []
  const dataTypeIndex = new Map<string, number>()
  for (const dataType of corpus.dataTypes) {
    const id = relationId(dataType)
    if (id === null || !mentioned.has(id)) continue
    dataTypeIndex.set(id, dataTypes.length)
    dataTypes.push({
      slug: typeof dataType.slug === 'string' ? dataType.slug : '',
      name: text(dataType.name) ?? '(tipus de dada sense nom)',
      sensitivity: typeof dataType.sensitivity === 'number' ? dataType.sensitivity : 0,
      special: dataType.specialCategory === true,
    })
  }

  const categories: CategoryLite[] = []
  const categoryIndex = new Map<string, number>()
  for (const category of corpus.categories) {
    const id = relationId(category)
    if (id === null) continue
    categoryIndex.set(id, categories.length)
    categories.push({
      slug: typeof category.slug === 'string' ? category.slug : '',
      name: text(category.name) ?? '(categoria sense nom)',
    })
  }

  const companyLite = (companyId: string | null): CompanyLite => {
    const company = companyId !== null ? corpus.companyById.get(companyId) : undefined
    if (!company || companyId === null) {
      return { id: '', name: '(empresa no documentada)', slug: '' }
    }
    return {
      id: companyId,
      name: text(company.name) ?? '(empresa sense nom)',
      slug: typeof company.slug === 'string' ? company.slug : '',
    }
  }

  /* Puntuació global per identificador de fitxa: la necessiten les alternatives
   * per poder dir quina diferència hi ha, i cal tenir-les totes resoltes abans
   * de recórrer les fitxes una per una. */
  const overallById = new Map<string, number | null>()
  for (const app of corpus.apps) {
    const id = relationId(app)
    if (id !== null) overallById.set(id, numberOrNull(at(app, 'scores.overall')))
  }

  let unresolvedAlternatives = 0
  const apps: AppLite[] = []

  for (const app of corpus.apps) {
    const companyId = relationId(app.company)
    const company = companyLite(companyId)
    const groupId =
      companyId !== null && corpus.companyById.has(companyId)
        ? ultimateParentId(companyId, corpus.companyById)
        : null
    const group = companyLite(groupId)

    /* Matriu de dades. Les files que apunten a un tipus de dada que no és al
     * catàleg es descarten: sense metadades no es poden ordenar per
     * sensibilitat ni dir si són categoria especial, i inventar-les seria pitjor
     * que no mostrar-les. */
    const rows: DataRow[] = []
    const rawRows = Array.isArray(app.dataCollection) ? app.dataCollection : []
    for (const row of rawRows) {
      const dataTypeId = relationId(at(row, 'dataType'))
      if (dataTypeId === null) continue
      const index = dataTypeIndex.get(dataTypeId)
      if (index === undefined) continue
      rows.push([
        index,
        oneOf(at(row, 'status'), ROW_STATUSES, 'unknown'),
        oneOf(at(row, 'linkedToIdentity'), TERNARIES, 'unknown'),
        oneOf(at(row, 'usedForTracking'), TERNARIES, 'unknown'),
        oneOf(at(row, 'sharedWith'), SHARED_WITHS, 'unknown'),
      ])
    }

    /* Destinataris amb nom. Al model, l'únic lloc on un destinatari té identitat
     * és el rastrejador de tercers amb empresa assignada: les cessions «a
     * tercers» i «a intermediaris de dades» de la matriu no diuen mai a qui. La
     * calculadora manté aquesta distinció perquè és la diferència entre una
     * empresa que podem anomenar i un forat de documentació. */
    const recipients: CompanyLite[] = []
    const seenRecipients = new Set<string>()
    let unnamedTrackers = 0
    const trackers = at(app, 'tracking.thirdPartyTrackers')
    if (Array.isArray(trackers)) {
      for (const tracker of trackers) {
        const trackerCompanyId = relationId(at(tracker, 'company'))
        if (trackerCompanyId === null || !corpus.companyById.has(trackerCompanyId)) {
          unnamedTrackers += 1
          continue
        }
        if (seenRecipients.has(trackerCompanyId)) continue
        seenRecipients.add(trackerCompanyId)
        recipients.push(companyLite(trackerCompanyId))
      }
    }

    const alternatives: AlternativeLite[] = []
    const rawAlternatives = Array.isArray(app.alternatives) ? app.alternatives : []
    for (const alternative of rawAlternatives) {
      const targetId = relationId(at(alternative, 'app'))
      const target = targetId !== null ? corpus.appById.get(targetId) : undefined
      if (!target) {
        // La fitxa de destí no és publicada (o ja no existeix). No la
        // mencionem: no hi hauria on enllaçar ni cap puntuació a comparar.
        unresolvedAlternatives += 1
        continue
      }
      const rationale = text(at(alternative, 'rationale'))
      alternatives.push({
        slug: typeof target.slug === 'string' ? target.slug : '',
        name: text(target.name) ?? '(sense nom)',
        overall: overallById.get(targetId ?? '') ?? null,
        comparability: oneOf(at(alternative, 'comparability'), COMPARABILITIES, 'partial'),
        rationale: rationale ?? '',
        tradeOffs: text(at(alternative, 'tradeOffs')),
      })
    }

    const { weak, unknown } = readWeakIndicators(at(app, 'scores.breakdown'))

    const categoryIndices: number[] = []
    const rawCategories = Array.isArray(app.categories) ? app.categories : []
    for (const category of rawCategories) {
      const id = relationId(category)
      if (id === null) continue
      const index = categoryIndex.get(id)
      if (index !== undefined && !categoryIndices.includes(index)) categoryIndices.push(index)
    }

    apps.push({
      slug: typeof app.slug === 'string' ? app.slug : '',
      name: text(app.name) ?? '(sense nom)',
      categories: categoryIndices,
      company,
      group,
      overall: numberOrNull(at(app, 'scores.overall')),
      confidence: numberOrNull(at(app, 'scores.confidence')),
      provisional: at(app, 'scores.provisional') === true,
      weakIndicators: weak,
      unknownIndicators: unknown,
      rows,
      recipients,
      unnamedTrackers,
      alternatives,
    })
  }

  apps.sort((a, b) => compareText(a.name, b.name) || compareText(a.slug, b.slug))

  return {
    apps,
    dataTypes,
    categories,
    publishedApps: corpus.apps.length,
    unresolvedAlternatives,
  }
}
