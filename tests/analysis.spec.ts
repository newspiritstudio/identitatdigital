import { describe, expect, it } from 'vitest'

import {
  analyseCatalan,
  analyseDarkPatterns,
  analyseDataTypes,
  analyseDeletion,
  analyseEvidence,
  analyseGroups,
  analyseIncidents,
  analyseJurisdictions,
  analyseSecurity,
  buildCorpus,
  buildSharingGraph,
  emptyCorpus,
  parseUserBase,
  resolveOwnershipChain,
  type Corpus,
} from '@/lib/analysis'
import type { App, Company, DataType, Incident } from '@/payload-types'

/**
 * Fixtures escrites a mà. Són deliberadament incompletes: el corpus real també
 * ho és, i el que aquestes proves han de garantir és justament que una fitxa a
 * mitges no trenca res ni es compta com si diguéssim que no.
 *
 * Els `as unknown as` són l'única manera d'escriure una fitxa parcial contra un
 * tipus generat que exigeix quaranta grups obligatoris. Els documents reals
 * tenen tots aquests camps; les fixtures només els que la prova mira.
 */
const app = (value: Record<string, unknown>): App => value as unknown as App
const company = (value: Record<string, unknown>): Company => value as unknown as Company
const dataType = (value: Record<string, unknown>): DataType => value as unknown as DataType
const incident = (value: Record<string, unknown>): Incident => value as unknown as Incident

const fact = (status: string, extra: Record<string, unknown> = {}) => ({
  status,
  evidenceLevel: 'official',
  sources: ['font-1'],
  ...extra,
})

/* ────────────────────────────── empreses ─────────────────────────────────── */

const companies: Company[] = [
  company({ id: 'matriu', name: 'Grup Alfa', slug: 'grup-alfa', headquartersCountry: 'US', ownership: 'public' }),
  company({ id: 'filial', name: 'Alfa Filial', slug: 'alfa-filial', parent: 'matriu', headquartersCountry: 'IE' }),
  company({ id: 'tercer', name: 'Beta', slug: 'beta', headquartersCountry: 'SE' }),
  // Empresa sense país declarat: el país ha de sortir de la matriu.
  company({ id: 'sense-pais', name: 'Alfa Nòrdica', slug: 'alfa-nordica', parent: 'matriu' }),
  // Cicle deliberat: A diu que la seva matriu és B i B diu que és A.
  company({ id: 'cicle-a', name: 'Cicle A', slug: 'cicle-a', parent: 'cicle-b' }),
  company({ id: 'cicle-b', name: 'Cicle B', slug: 'cicle-b', parent: 'cicle-a' }),
]

const dataTypes: DataType[] = [
  dataType({ id: 'dt-ubicacio', name: 'Ubicació precisa', slug: 'ubicacio', family: 'location', sensitivity: 5 }),
  dataType({ id: 'dt-salut', name: 'Dades de salut', slug: 'salut', family: 'health', sensitivity: 5, specialCategory: true }),
  dataType({ id: 'dt-correu', name: 'Adreça electrònica', slug: 'correu', family: 'contact', sensitivity: 2 }),
  // Tipus del catàleg que no apareix a cap fitxa.
  dataType({ id: 'dt-biometria', name: 'Biometria', slug: 'biometria', family: 'biometric', sensitivity: 5, specialCategory: true }),
]

/* ─────────────────────────────── fitxes ──────────────────────────────────── */

const alfaSocial = app({
  id: 'app-alfa',
  name: 'Alfa Social',
  slug: 'alfa-social',
  company: 'filial',
  userBase: 'Més de 2.000 milions de persones usuàries mensuals',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  businessModel: 'advertising',
  dataCollection: [
    {
      dataType: 'dt-ubicacio',
      status: 'yes',
      linkedToIdentity: 'yes',
      usedForTracking: 'yes',
      sharedWith: 'group',
      evidenceLevel: 'official',
      sources: ['font-1'],
    },
    // Segona fila del mateix tipus de dada: s'ha de fusionar amb l'anterior.
    { dataType: 'dt-ubicacio', status: 'no', linkedToIdentity: 'no' },
    {
      dataType: 'dt-correu',
      status: 'yes',
      linkedToIdentity: 'yes',
      usedForTracking: 'unknown',
      sharedWith: 'third-parties',
      evidenceLevel: 'official',
      sources: ['font-1'],
    },
    { dataType: 'dt-salut', status: 'no', linkedToIdentity: 'unknown', sharedWith: 'none' },
  ],
  tracking: {
    crossAppTracking: fact('yes'),
    advertisingIdentifiers: fact('yes'),
    thirdPartyTrackersPresent: fact('yes'),
    thirdPartyTrackers: [],
  },
  sharing: {
    thirdPartySharing: fact('yes'),
    intraGroupSharing: fact('yes'),
    dataBrokerSales: fact('unknown', { evidenceLevel: 'unknown', sources: [] }),
    internationalTransfers: fact('yes', { mechanism: 'sccs' }),
  },
  controls: {
    darkPatterns: fact('yes'),
    darkPatternList: [
      { type: 'hidden-exit', severity: 'high' },
      { type: 'preselected', severity: 'medium' },
    ],
    defaultPosture: 'permissive',
  },
  accountDeletion: {
    possible: fact('yes'),
    selfService: fact('no'),
    difficulty: 'hard',
    waitingPeriodDays: 90,
    requiresSupportContact: true,
    steps: [{ step: 'Escriu a suport' }],
    dataRetained: 'Còpies de seguretat durant 90 dies',
  },
  retention: { definedPeriods: fact('no'), dataAfterDeletion: fact('yes') },
  security: {
    e2ee: fact('no'),
    transportEncryption: fact('yes'),
    mfa: fact('yes', { methods: ['sms'] }),
    independentAudits: fact('unknown', { evidenceLevel: 'unknown', sources: [] }),
    bugBounty: fact('no'),
  },
  scores: { confidence: 80 },
  review: { researchStatus: 'documented' },
})

const betaXat = app({
  id: 'app-beta',
  name: 'Beta Xat',
  slug: 'beta-xat',
  company: 'tercer',
  userBase: 'Present a més de 20 països',
  jurisdiction: 'Suècia',
  dataCollection: [
    // Documentat que NO es recull: no és el mateix que no saber-ho.
    { dataType: 'dt-ubicacio', status: 'no', evidenceLevel: 'official', sources: ['font-1'] },
    { dataType: 'dt-correu', status: 'unknown' },
  ],
  tracking: {
    crossAppTracking: fact('no'),
    thirdPartyTrackersPresent: fact('yes'),
    // Rastrejador d'una empresa que, alhora, cedeix dades a la seva matriu.
    thirdPartyTrackers: [
      { name: 'Alfa Ads', company: 'filial' },
      { name: 'Rastrejador sense empresa' },
    ],
  },
  sharing: { internationalTransfers: fact('no') },
  controls: { darkPatterns: fact('no') },
  accountDeletion: {
    possible: fact('yes'),
    selfService: fact('yes'),
    difficulty: 'easy',
    waitingPeriodDays: 0,
    directUrl: 'https://example.org/esborrar',
  },
  security: {
    e2ee: fact('yes', { scope: 'all-default' }),
    mfa: fact('yes', { methods: ['totp', 'passkey'] }),
    independentAudits: fact('yes'),
    bugBounty: fact('yes'),
  },
})

/** Fitxa d'una empresa amb la cadena de matrius trencada per un cicle. */
const gammaBucle = app({
  id: 'app-gamma',
  name: 'Gamma Bucle',
  slug: 'gamma-bucle',
  company: 'cicle-a',
  dataCollection: [{ dataType: 'dt-ubicacio', status: 'optional', sharedWith: 'group' }],
})

const incidents: Incident[] = [
  incident({
    id: 'inc-1',
    title: 'Sanció per transferències',
    type: 'regulatory-fine',
    severity: 'critical',
    company: 'filial',
    apps: ['app-alfa'],
    occurredAt: '2023-05-22T00:00:00.000Z',
    regulatory: { authority: 'DPC', fineAmountEur: 1_000_000, status: 'final' },
  }),
  incident({
    id: 'inc-2',
    title: 'Sanció anul·lada',
    type: 'regulatory-fine',
    severity: 'high',
    company: 'filial',
    occurredAt: '2021-07-16T00:00:00.000Z',
    regulatory: { authority: 'CNPD', fineAmountEur: 400_000, status: 'overturned' },
  }),
  incident({
    // Sense empresa declarada: s'ha d'atribuir per l'aplicació afectada.
    id: 'inc-3',
    title: 'Intrusió',
    type: 'breach',
    severity: 'medium',
    apps: ['app-beta'],
    occurredAt: '2024-02-05T00:00:00.000Z',
  }),
]

const corpus: Corpus = buildCorpus({
  apps: [alfaSocial, betaXat, gammaBucle],
  companies,
  dataTypes,
  incidents,
  breaches: [],
})

/* ─────────────────────────────── proves ──────────────────────────────────── */

describe('resolució de la cadena de matrius', () => {
  it('puja fins a la matriu última', () => {
    const chain = resolveOwnershipChain('filial', corpus.companyById)
    expect(chain.rootId).toBe('matriu')
    expect(chain.chain).toEqual(['filial', 'matriu'])
    expect(chain.cyclic).toBe(false)
  })

  it('una empresa sense matriu és la seva pròpia arrel', () => {
    const chain = resolveOwnershipChain('tercer', corpus.companyById)
    expect(chain.rootId).toBe('tercer')
    expect(chain.cyclic).toBe(false)
  })

  it('no es penja amb un cicle i el marca', () => {
    const chain = resolveOwnershipChain('cicle-a', corpus.companyById)
    expect(chain.cyclic).toBe(true)
    expect(chain.chain).toEqual(['cicle-a', 'cicle-b'])
    expect(chain.rootId).toBe('cicle-b')
  })

  it('una empresa que no existeix al corpus es resol a si mateixa', () => {
    const chain = resolveOwnershipChain('fantasma', corpus.companyById)
    expect(chain.rootId).toBe('fantasma')
    expect(chain.cyclic).toBe(false)
  })
})

describe('analyseGroups', () => {
  const result = analyseGroups(corpus)

  it('agrupa les fitxes per matriu última', () => {
    const alfa = result.groups.find((group) => group.rootId === 'matriu')
    expect(alfa?.appCount).toBe(1)
    expect(alfa?.apps.map((entry) => entry.name)).toEqual(['Alfa Social'])
    // Totes les empreses del grup hi consten, tinguin fitxa o no.
    expect(alfa?.companies.map((entry) => entry.id).sort()).toEqual(['filial', 'matriu', 'sense-pais'])
  })

  it('acumula els tipus de dada del grup sencer i n’assenyala els especials', () => {
    const alfa = result.groups.find((group) => group.rootId === 'matriu')
    // Només les dades que es recullen: la salut hi és amb estat «no».
    expect(alfa?.dataTypes.map((entry) => entry.dataTypeId)).toEqual(['dt-ubicacio', 'dt-correu'])
    expect(alfa?.specialCategoryCount).toBe(0)
    expect(alfa?.maxSensitivity).toBe(5)
  })

  it('suma la base d’usuaris coneguda i compta a part la desconeguda', () => {
    const alfa = result.groups.find((group) => group.rootId === 'matriu')
    expect(alfa?.knownUserBase).toBe(2_000_000_000)
    const beta = result.groups.find((group) => group.rootId === 'tercer')
    expect(beta?.knownUserBase).toBeNull()
    expect(beta?.appsWithUnknownUserBase).toBe(1)
  })

  it('marca els grups amb cadena cíclica i els llista', () => {
    expect(result.cyclicCompanyIds).toEqual(['cicle-a', 'cicle-b'])
    const cicle = result.groups.find((group) => group.hasCyclicOwnership)
    expect(cicle?.appCount).toBe(1)
  })
})

describe('parseUserBase', () => {
  it('interpreta les xifres en milions i milers de milions', () => {
    expect(parseUserBase('Més de 2.000 milions de persones usuàries mensuals')).toBe(2_000_000_000)
    expect(parseUserBase('Al voltant de 550 milions de comptes')).toBe(550_000_000)
    expect(parseUserBase('1,5 milions de subscripcions')).toBe(1_500_000)
  })

  it('no inventa xifres quan el text no en dona cap de comparable', () => {
    expect(parseUserBase('Al voltant del 90 % de les cerques web mundials')).toBeNull()
    expect(parseUserBase('Al voltant de 3.000 milions de cerques mensuals')).toBeNull()
    expect(parseUserBase('Present a més de 20 països, amb desenes de milions de comptes')).toBeNull()
    expect(parseUserBase(undefined)).toBeNull()
  })
})

describe('analyseDataTypes', () => {
  const result = analyseDataTypes(corpus)
  const row = (id: string) => result.rows.find((entry) => entry.dataTypeId === id)

  it('separa recollit, no recollit, desconegut i ni mencionat', () => {
    const ubicacio = row('dt-ubicacio')
    expect(ubicacio?.collected).toBe(1)
    expect(ubicacio?.optional).toBe(1)
    expect(ubicacio?.notCollected).toBe(1)
    expect(ubicacio?.collectionUnknown).toBe(0)
    expect(ubicacio?.notMentioned).toBe(0)

    const correu = row('dt-correu')
    // Una fitxa diu que sí i una altra diu que no ho sap: no són el mateix.
    expect(correu?.collected).toBe(1)
    expect(correu?.notCollected).toBe(0)
    expect(correu?.collectionUnknown).toBe(1)
    expect(correu?.notMentioned).toBe(1)
  })

  it('un tipus de dada que no apareix enlloc no desapareix de la taula', () => {
    const biometria = row('dt-biometria')
    expect(biometria?.documentedBy).toBe(0)
    expect(biometria?.notMentioned).toBe(3)
    expect(result.unusedDataTypes).toBe(1)
  })

  it('fusiona les files repetides d’una mateixa fitxa i conserva la més afirmativa', () => {
    expect(result.duplicateRows).toBe(1)
    expect(row('dt-ubicacio')?.documentedBy).toBe(3)
    expect(row('dt-ubicacio')?.linkedToIdentity).toBe(1)
  })

  it('no pregunta per la vinculació de dades que no es recullen', () => {
    const salut = row('dt-salut')
    expect(salut?.notCollected).toBe(1)
    expect(
      (salut?.linkedToIdentity ?? 0) +
        (salut?.notLinkedToIdentity ?? 0) +
        (salut?.linkageUnknown ?? 0),
    ).toBe(0)
  })

  it('ordena per abast amb desempat estable', () => {
    expect(result.rows.map((entry) => entry.dataTypeId)).toEqual([
      'dt-ubicacio',
      'dt-correu',
      // Cap de les dues es recull enlloc: desempaten per sensibilitat i, a
      // igualtat, pel nom.
      'dt-biometria',
      'dt-salut',
    ])
  })
})

describe('buildSharingGraph', () => {
  const graph = buildSharingGraph(corpus)

  it('crea arestes cap a la matriu per la compartició intragrup', () => {
    const edge = graph.edges.find(
      (candidate) => candidate.fromCompanyId === 'filial' && candidate.toCompanyId === 'matriu',
    )
    expect(edge?.viaGroup).toBe(1)
    expect(edge?.appIds).toEqual(['app-alfa'])
  })

  it('crea arestes pels rastrejadors documentats', () => {
    const edge = graph.edges.find(
      (candidate) => candidate.fromCompanyId === 'tercer' && candidate.toCompanyId === 'filial',
    )
    expect(edge?.viaTrackers).toBe(1)
    expect(graph.documentedTrackers).toBe(2)
    expect(graph.trackersWithoutCompany).toBe(1)
  })

  it('una mateixa empresa pot ser origen i destí alhora', () => {
    const node = graph.nodes.find((candidate) => candidate.companyId === 'filial')
    expect(node?.inDegree).toBe(1)
    expect(node?.outDegree).toBe(1)
    expect(node?.received).toBe(1)
    expect(node?.sent).toBe(1)
    expect(graph.topReceivers.map((entry) => entry.companyId)).toContain('filial')
  })

  it('no inventa nodes per als tercers sense identificar', () => {
    expect(graph.nodes.every((node) => corpus.companyById.has(node.companyId))).toBe(true)
    expect(graph.rowsToThirdParties).toBe(1)
    const source = graph.nodes.find((node) => node.companyId === 'filial')
    expect(source?.toUnidentifiedThirdParties).toBe(1)
  })

  it('no crea bucles quan l’empresa ja és la matriu', () => {
    // Gamma penja d'una cadena cíclica; el seu «grup» no pot generar una aresta
    // cap a si mateixa ni fer que el graf es pengi.
    expect(graph.edges.every((edge) => edge.fromCompanyId !== edge.toCompanyId)).toBe(true)
    expect(graph.rowsWithinGroup).toBe(2)
  })
})

describe('analyseDarkPatterns', () => {
  const result = analyseDarkPatterns(corpus)

  it('distingeix «no en té» de «no ho hem mirat»', () => {
    expect(result.appsWithPatterns).toBe(1)
    expect(result.appsWithoutPatterns).toBe(1)
    expect(result.appsUnknown).toBe(1)
  })

  it('compta els patrons per tipus i per gravetat', () => {
    expect(result.totalPatterns).toBe(2)
    expect(result.bySeverity.high).toBe(1)
    expect(result.bySeverity.medium).toBe(1)
    expect(result.byType.map((entry) => entry.type)).toEqual(['hidden-exit', 'preselected'])
  })

  it('ordena les fitxes per concentració ponderada', () => {
    expect(result.topApps[0]?.name).toBe('Alfa Social')
    expect(result.topApps[0]?.weighted).toBe(5)
  })
})

describe('analyseJurisdictions', () => {
  const result = analyseJurisdictions(corpus)

  it('agrupa per la part principal de la jurisdicció declarada', () => {
    expect(result.byJurisdiction[0]?.jurisdiction).toBe('Irlanda')
    expect(result.byJurisdiction[0]?.variants[0]).toContain('Espai Econòmic Europeu')
    expect(result.jurisdictionUnknown).toBe(1)
  })

  it('puja per la cadena de matrius per trobar el país de la seu', () => {
    const irlanda = result.byHeadquartersCountry.find((entry) => entry.country === 'IE')
    expect(irlanda?.apps).toBe(1)
    expect(irlanda?.fromParent).toBe(0)
    // Gamma penja d'una empresa cíclica sense país: ha de quedar com a desconegut.
    expect(result.headquartersUnknown).toBe(1)
  })

  it('separa les transferències documentades del mecanisme declarat', () => {
    expect(result.appsWithTransfers).toBe(1)
    expect(result.transfers.no).toBe(1)
    expect(result.transfers.unknown).toBe(1)
    expect(result.byMechanism[0]?.mechanism).toBe('sccs')
    expect(result.transfersWithoutMechanism).toBe(0)
  })
})

describe('analyseDeletion', () => {
  const result = analyseDeletion(corpus)

  it('reparteix la dificultat i deixa el desconegut a part', () => {
    const hard = result.byDifficulty.find((entry) => entry.difficulty === 'hard')
    expect(hard?.apps).toBe(1)
    expect(result.difficultyUnknown).toBe(1)
  })

  it('compta els períodes d’espera i en dona la mediana', () => {
    expect(result.medianWaitingDays).toBe(45)
    expect(result.maxWaitingDays).toBe(90)
    expect(result.waitingUnknown).toBe(1)
  })

  it('assenyala qui exigeix contactar amb suport', () => {
    expect(result.requiresSupportContact).toBe(1)
    expect(result.supportContradictions).toBe(0)
    expect(result.selfService.no).toBe(1)
    expect(result.selfService.yes).toBe(1)
    expect(result.selfService.unknown).toBe(1)
  })

  it('compta què queda després d’esborrar', () => {
    expect(result.dataAfterDeletion.yes).toBe(1)
    expect(result.dataAfterDeletion.unknown).toBe(2)
    expect(result.withRetainedDataDescription).toBe(1)
  })
})

describe('analyseSecurity', () => {
  const result = analyseSecurity(corpus)

  it('no confon l’absència d’evidència amb l’absència de mesura', () => {
    const audits = result.measures.find((entry) => entry.key === 'independent-audits')
    expect(audits?.tally.yes).toBe(1)
    expect(audits?.tally.no).toBe(0)
    expect(audits?.tally.unknown).toBe(2)
    expect(audits?.unknownShare).toBeCloseTo(66.7, 1)
  })

  it('detalla l’abast del xifratge d’extrem a extrem', () => {
    expect(result.e2ee.yes).toBe(1)
    expect(result.e2ee.no).toBe(1)
    expect(result.e2eeByScope[0]?.scope).toBe('all-default')
    expect(result.e2eeEverythingByDefault.map((entry) => entry.name)).toEqual(['Beta Xat'])
  })

  it('compta els mètodes de verificació en dos passos', () => {
    expect(result.byMfaMethod.map((entry) => entry.method).sort()).toEqual([
      'passkey',
      'sms',
      'totp',
    ])
    expect(result.mfaOnlySms).toBe(1)
  })
})

describe('analyseEvidence', () => {
  const result = analyseEvidence(corpus)

  it('no compta els desconeguts com a negatives', () => {
    expect(result.claims.no).toBeGreaterThan(0)
    expect(result.claims.unknown).toBeGreaterThan(result.claims.no)
    expect(result.unknownShare + result.documentedShare).toBeCloseTo(100, 1)
  })

  it('assenyala els indicadors pitjor documentats', () => {
    const worst = result.worstDocumented[0]
    expect(worst?.unknownShare).toBe(100)
    // La fitxa més buida ha de sortir primer a la llista de feina pendent.
    expect(result.byApp[0]?.name).toBe('Gamma Bucle')
    expect(result.byApp[0]?.unknownShare).toBe(100)
  })

  it('compta les afirmacions documentades sense cap font', () => {
    // Totes les afirmacions documentades de les fixtures porten font.
    expect(result.claimsWithoutSources).toBe(0)
    // Files de la matriu sense nivell d’evidència ni fonts.
    expect(result.dataRows).toBe(7)
    expect(result.dataRowsWithoutSources).toBe(4)
  })

  it('reparteix els nivells d’evidència de les afirmacions documentades', () => {
    const official = result.byLevel.find((entry) => entry.level === 'official')
    expect(official?.claims).toBe(result.claims.documented)
    expect(result.sourceQuality).toBe(1)
  })
})

describe('analyseIncidents', () => {
  const result = analyseIncidents(corpus)

  it('atribueix els incidents sense empresa a partir de l’aplicació afectada', () => {
    const beta = result.byCompany.find((entry) => entry.companyId === 'tercer')
    expect(beta?.incidents).toBe(1)
    expect(result.withoutCompany).toBe(0)
  })

  it('agrega per grup i separa les sancions anul·lades', () => {
    const alfa = result.byGroup.find((entry) => entry.groupId === 'matriu')
    expect(alfa?.incidents).toBe(2)
    expect(alfa?.finesEur).toBe(1_400_000)
    expect(result.totalFinesEur).toBe(1_400_000)
    expect(result.finalFinesEur).toBe(1_000_000)
    expect(result.overturnedFinesEur).toBe(400_000)
  })

  it('dona la sèrie temporal ordenada per any', () => {
    expect(result.byYear.map((entry) => entry.year)).toEqual([2021, 2023, 2024])
  })

  it('funciona sense cap filtració importada', () => {
    expect(result.breaches.total).toBe(0)
    expect(result.breaches.accountsAffected).toBe(0)
    expect(result.breaches.byYear).toEqual([])
  })
})

describe('corpus buit', () => {
  const buit = emptyCorpus()

  it('cap anàlisi no llança ni inventa xifres', () => {
    expect(analyseDataTypes(buit).rows).toEqual([])
    expect(analyseDataTypes(buit).appsConsidered).toBe(0)
    expect(analyseGroups(buit).groups).toEqual([])
    expect(analyseGroups(buit).appsInTopThreeGroups).toBe(0)
    expect(buildSharingGraph(buit).edges).toEqual([])
    expect(buildSharingGraph(buit).topReceivers).toEqual([])
    expect(analyseDarkPatterns(buit).totalPatterns).toBe(0)
    expect(analyseDarkPatterns(buit).shareWithPatterns).toBe(0)
    expect(analyseJurisdictions(buit).byJurisdiction).toEqual([])
    expect(analyseDeletion(buit).medianWaitingDays).toBeNull()
    expect(analyseDeletion(buit).maxWaitingDays).toBeNull()
    expect(analyseSecurity(buit).measures.every((measure) => measure.yesShare === 0)).toBe(true)
    expect(analyseEvidence(buit).unknownShare).toBe(0)
    expect(analyseEvidence(buit).totalClaims).toBe(0)
    expect(analyseIncidents(buit).totalFinesEur).toBe(0)
    expect(analyseIncidents(buit).breaches.total).toBe(0)
  })

  it('un corpus sense empreses tampoc no trenca les fitxes', () => {
    const orfe = buildCorpus({ apps: [alfaSocial] })
    expect(analyseGroups(orfe).appsWithUnresolvedCompany).toBe(1)
    expect(analyseGroups(orfe).groups).toEqual([])
    expect(buildSharingGraph(orfe).edges).toEqual([])
    expect(analyseJurisdictions(orfe).headquartersUnknown).toBe(1)
    // Sense catàleg de tipus de dada, les files no es poden resoldre.
    expect(analyseDataTypes(orfe).rowsWithUnresolvedDataType).toBe(4)
  })
})

describe('determinisme', () => {
  it('dues execucions donen exactament el mateix resultat', () => {
    expect(JSON.stringify(analyseDataTypes(corpus))).toBe(JSON.stringify(analyseDataTypes(corpus)))
    expect(JSON.stringify(analyseGroups(corpus))).toBe(JSON.stringify(analyseGroups(corpus)))
    expect(JSON.stringify(buildSharingGraph(corpus))).toBe(JSON.stringify(buildSharingGraph(corpus)))
    expect(JSON.stringify(analyseIncidents(corpus))).toBe(JSON.stringify(analyseIncidents(corpus)))
  })
})

/* ────────────────────────── disponibilitat en català ─────────────────────── */

describe('analyseCatalan', () => {
  const catalanCorpus = buildCorpus({
    apps: [
      app({
        id: 'a1',
        name: 'Amb català',
        slug: 'amb-catala',
        company: 'matriu',
        catalan: { interfaceAvailable: fact('yes'), interfaceLanguages: 40 },
        scores: { overall: 60 },
      }),
      app({
        id: 'a2',
        name: 'Sense català',
        slug: 'sense-catala',
        company: 'matriu',
        catalan: { interfaceAvailable: fact('no'), interfaceLanguages: 30 },
        scores: { overall: 40 },
      }),
      // Fitxa sense comprovar: no pot comptar com un «no».
      app({ id: 'a3', name: 'Sense comprovar', slug: 'sense-comprovar', company: 'tercer' }),
    ],
    companies,
  })

  const analysis = analyseCatalan(catalanCorpus)

  it('no compta les fitxes sense comprovar com un no', () => {
    expect(analysis.appsConsidered).toBe(3)
    expect(analysis.checked).toBe(2)
    expect(analysis.withCatalan).toBe(1)
    expect(analysis.withoutCatalan).toBe(1)
    expect(analysis.unknown).toBe(1)
  })

  it('calcula el percentatge sobre les comprovades, no sobre el total', () => {
    expect(analysis.share).toBe(50)
  })

  it('compara els idiomes de les que el tenen i les que no', () => {
    expect(analysis.averageLanguagesWith).toBe(40)
    expect(analysis.averageLanguagesWithout).toBe(30)
  })

  it('agrupa per empresa', () => {
    const alfa = analysis.groups.find((group) => group.groupName === 'Grup Alfa')
    expect(alfa).toEqual({ groupName: 'Grup Alfa', apps: 2, withCatalan: 1 })
  })

  it('no peta amb un corpus buit', () => {
    const empty = analyseCatalan(emptyCorpus())
    expect(empty.appsConsidered).toBe(0)
    expect(empty.share).toBe(0)
    expect(empty.averageLanguagesWith).toBeNull()
  })
})
