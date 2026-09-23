/**
 * Metodologia de puntuació d'Identitat.digital.
 *
 * Aquest fitxer és la font de veritat: el document de metodologia que es
 * publica al CMS i la documentació de `docs/metodologia-scoring.md` es generen
 * a partir d'aquí. Si canvia un pes, canvia la versió.
 *
 * Regles del càlcul:
 *
 *  1. Un indicador desconegut surt del denominador. Baixa el Confidence Score,
 *     no el Privacy Score.
 *  2. Un indicador que no aplica tampoc no compta. Exigir xifratge d'extrem a
 *     extrem a un navegador mesuraria una cosa que no hi és.
 *  3. Tot indicador que puntua ve d'un `evidencedFact` amb fonts, i la qualitat
 *     d'aquestes fonts entra al Confidence Score.
 *  4. Hi ha indicadors que només s'apliquen als serveis públics (`scope:
 *     'public-service'`). Un servei que presta una administració no es mesura
 *     amb les mateixes garanties que un servei comercial: no fa programes de
 *     recompenses ni informes de transparència, però ha de declarar la base
 *     jurídica, publicar el registre d'activitats de tractament i conformar-se
 *     a l'Esquema Nacional de Seguretat. Els indicadors d'un àmbit queden fora
 *     del càlcul de l'altre, de manera que el denominador s'ajusta sol i les
 *     puntuacions continuen sent comparables.
 */

export const METHODOLOGY_VERSION = '1.1'

export const DIMENSIONS = ['privacy', 'security', 'agency'] as const
export type Dimension = (typeof DIMENSIONS)[number]

export const DIMENSION_LABELS: Record<Dimension, string> = {
  privacy: 'Privadesa',
  security: 'Seguretat',
  agency: 'Control de la persona usuària',
}

/** Pes de cada dimensió dins de la puntuació global. */
export const DIMENSION_WEIGHTS: Record<Dimension, number> = {
  privacy: 0.45,
  security: 0.3,
  agency: 0.25,
}

/** Composició del Confidence Score. */
export const CONFIDENCE_WEIGHTS = {
  coverage: 0.55,
  quality: 0.3,
  recency: 0.15,
}

/**
 * Per sota d'aquest llindar la puntuació es marca com a provisional: no diem
 * que el servei sigui bo o dolent, diem que encara no en sabem prou.
 */
export const PROVISIONAL_CONFIDENCE_THRESHOLD = 50

/**
 * Sostre de volum de dades. La suma de sensibilitats de les dades recollides es
 * normalitza contra aquest valor; un servei que hi arriba puntua 0 en
 * minimització. Calibrat perquè les grans plataformes publicitàries s'hi
 * acostin i un servei de missatgeria xifrada quedi molt per sota.
 */
export const DATA_VOLUME_CAP = 34

/**
 * Àmbit d'un indicador. `all` s'aplica a tots els serveis; `public-service`
 * només als que presta una administració pública.
 */
export type IndicatorScope = 'all' | 'public-service'

export type IndicatorSpec = {
  key: string
  dimension: Dimension
  weight: number
  label: string
  description: string
  scope?: IndicatorScope
}

export const INDICATORS: IndicatorSpec[] = [
  // ─── Privadesa ────────────────────────────────────────────────────────────
  {
    key: 'data-volume',
    dimension: 'privacy',
    weight: 14,
    label: 'Minimització de dades',
    description:
      'Suma de la sensibilitat de les dades personals recollides, normalitzada contra un sostre fix. Les dades opcionals compten la meitat.',
  },
  {
    key: 'data-sensitivity',
    dimension: 'privacy',
    weight: 8,
    label: 'Sensibilitat de les dades',
    description:
      'Penalitza recollir dades de sensibilitat màxima i categories especials de l’article 9 del RGPD.',
  },
  {
    key: 'identity-linkage',
    dimension: 'privacy',
    weight: 8,
    label: 'Vinculació a la identitat',
    description:
      'Proporció de dades recollides que queden associades a una identitat concreta en lloc de tractar-se de manera agregada.',
  },
  {
    key: 'targeted-advertising',
    dimension: 'privacy',
    weight: 13,
    label: 'Publicitat personalitzada',
    description: 'Ús de dades personals per seleccionar quins anuncis veu cada persona.',
  },
  {
    key: 'profiling',
    dimension: 'privacy',
    weight: 9,
    label: 'Elaboració de perfils',
    description:
      'Inferència d’interessos, característiques o comportaments futurs a partir de l’activitat.',
  },
  {
    key: 'cross-app-tracking',
    dimension: 'privacy',
    weight: 12,
    label: 'Seguiment entre aplicacions i webs',
    description: 'Seguiment de l’activitat fora del propi servei.',
  },
  {
    key: 'third-party-trackers',
    dimension: 'privacy',
    weight: 6,
    label: 'Rastrejadors de tercers',
    description: 'Presència de SDK o rastrejadors d’altres empreses dins de l’aplicació.',
  },
  {
    key: 'third-party-sharing',
    dimension: 'privacy',
    weight: 10,
    label: 'Cessió a tercers',
    description: 'Comunicació de dades personals a empreses alienes al grup.',
  },
  {
    key: 'intra-group-sharing',
    dimension: 'privacy',
    weight: 6,
    label: 'Compartició dins del grup',
    description:
      'Circulació de dades entre les empreses del mateix conglomerat, que concentra perfils encara que no surtin de l’organització.',
  },
  {
    key: 'data-broker-sales',
    dimension: 'privacy',
    weight: 8,
    label: 'Venda o cessió a intermediaris de dades',
    description: 'Venda de dades personals o cessió a data brokers.',
  },
  {
    key: 'ai-training',
    dimension: 'privacy',
    weight: 6,
    label: 'Entrenament de models amb contingut de les persones usuàries',
    description:
      'Ús del contingut generat per les persones usuàries per entrenar models. Compta com a parcial si hi ha oposició efectiva.',
  },
  {
    key: 'retention-limits',
    dimension: 'privacy',
    weight: 6,
    label: 'Terminis de conservació documentats',
    description: 'Existència de terminis concrets i publicats, no de fórmules obertes.',
  },
  {
    key: 'data-after-deletion',
    dimension: 'privacy',
    weight: 6,
    label: 'Dades retingudes després d’eliminar el compte',
    description: 'Dades que el servei declara que conserva un cop suprimit el compte.',
  },
  {
    key: 'policy-clarity',
    dimension: 'privacy',
    weight: 5,
    label: 'Claredat de la política',
    description:
      'Si la política permet saber quines dades concretes es recullen i per a què, o si es queda en categories genèriques.',
  },

  // ─── Seguretat ────────────────────────────────────────────────────────────
  {
    key: 'e2ee',
    dimension: 'security',
    weight: 24,
    label: 'Xifratge d’extrem a extrem',
    description:
      'Xifratge que impedeix al propi proveïdor llegir el contingut. Puntua el màxim només si és el comportament per defecte.',
  },
  {
    key: 'transport-encryption',
    dimension: 'security',
    weight: 10,
    label: 'Xifratge en trànsit',
    description: 'Protecció de les comunicacions entre el dispositiu i el servidor.',
  },
  {
    key: 'at-rest-encryption',
    dimension: 'security',
    weight: 9,
    label: 'Xifratge en repòs',
    description: 'Xifratge de les dades emmagatzemades als servidors.',
  },
  {
    key: 'mfa',
    dimension: 'security',
    weight: 16,
    label: 'Verificació en dos passos',
    description:
      'Disponibilitat i qualitat del segon factor. Les claus de seguretat i les passkeys puntuen més que l’SMS.',
  },
  {
    key: 'independent-audits',
    dimension: 'security',
    weight: 10,
    label: 'Auditories independents',
    description: 'Auditories externes de seguretat amb resultats publicats.',
  },
  {
    key: 'bug-bounty',
    dimension: 'security',
    weight: 7,
    label: 'Programa de recompenses per errors',
    description: 'Canal remunerat i públic per reportar vulnerabilitats.',
  },
  {
    key: 'vulnerability-disclosure',
    dimension: 'security',
    weight: 4,
    label: 'Política de divulgació de vulnerabilitats',
    description: 'Procediment públic per comunicar problemes de seguretat.',
  },
  {
    key: 'open-source',
    dimension: 'security',
    weight: 8,
    label: 'Codi obert',
    description:
      'Possibilitat de verificar les afirmacions de seguretat. El codi tancat és la norma del sector i no es tracta com una vulnerabilitat: puntua baix, no zero.',
  },
  {
    key: 'transparency-report',
    dimension: 'security',
    weight: 6,
    label: 'Informe de transparència',
    description: 'Publicació periòdica de peticions governamentals i retirades de contingut.',
  },
  {
    key: 'incident-history',
    dimension: 'security',
    weight: 14,
    label: 'Historial d’incidents',
    description:
      'Bretxes i incidents documentats dels darrers cinc anys, ponderats per gravetat i antiguitat.',
  },

  // ─── Control de la persona usuària ────────────────────────────────────────
  {
    key: 'deletion-possible',
    dimension: 'agency',
    weight: 12,
    label: 'Es pot eliminar el compte',
    description: 'Existeix una via documentada per suprimir el compte.',
  },
  {
    key: 'deletion-self-service',
    dimension: 'agency',
    weight: 9,
    label: 'Eliminació autònoma',
    description: 'Es pot fer sense escriure a suport ni justificar-se.',
  },
  {
    key: 'deletion-direct-url',
    dimension: 'agency',
    weight: 4,
    label: 'Enllaç directe d’eliminació',
    description: 'Existeix una adreça que porta directament al procés.',
  },
  {
    key: 'deletion-difficulty',
    dimension: 'agency',
    weight: 9,
    label: 'Dificultat del procés',
    description: 'Nombre de passos, obstacles i friccions deliberades.',
  },
  {
    key: 'deletion-waiting',
    dimension: 'agency',
    weight: 4,
    label: 'Temps d’espera',
    description: 'Dies entre la sol·licitud i la supressió efectiva.',
  },
  {
    key: 'data-export',
    dimension: 'agency',
    weight: 12,
    label: 'Exportació de les dades',
    description: 'Possibilitat d’obtenir una còpia de les pròpies dades.',
  },
  {
    key: 'export-formats',
    dimension: 'agency',
    weight: 4,
    label: 'Format de l’exportació',
    description: 'Formats oberts i llegibles per màquina enfront de formats propietaris.',
  },
  {
    key: 'ads-optout',
    dimension: 'agency',
    weight: 9,
    label: 'Desactivació de la publicitat personalitzada',
    description:
      'Controls per deixar de rebre publicitat basada en el perfil. No aplica als serveis sense publicitat.',
  },
  {
    key: 'telemetry-optout',
    dimension: 'agency',
    weight: 6,
    label: 'Desactivació de la telemetria',
    description: 'Control sobre l’enviament de dades d’ús i diagnòstic.',
  },
  {
    key: 'granular-controls',
    dimension: 'agency',
    weight: 10,
    label: 'Controls granulars de privadesa',
    description: 'Configuració detallada de visibilitat, permisos i recollida de dades.',
  },
  {
    key: 'privacy-by-default',
    dimension: 'agency',
    weight: 7,
    label: 'Privadesa per defecte',
    description: 'Configuració inicial protectora sense haver de tocar res.',
  },
  {
    key: 'rights-exercise',
    dimension: 'agency',
    weight: 5,
    label: 'Exercici dels drets RGPD',
    description: 'Canal accessible per exercir accés, rectificació, oposició i portabilitat.',
  },
  {
    key: 'dark-patterns',
    dimension: 'agency',
    weight: 9,
    label: 'Absència de patrons enganyosos',
    description:
      'Interfícies que dificulten deliberadament les opcions protectores de la privadesa.',
  },
  {
    key: 'no-account-required',
    dimension: 'agency',
    weight: 4,
    label: 'Ús sense compte',
    description: 'Possibilitat d’utilitzar el servei sense identificar-se.',
  },

  // ─── Serveis públics ──────────────────────────────────────────────────────
  {
    key: 'legal-basis',
    dimension: 'privacy',
    weight: 10,
    scope: 'public-service',
    label: 'Base jurídica declarada',
    description:
      'Norma amb rang suficient que empara el tractament, citada article per article. En un servei públic el consentiment no és la base habitual: l’obligació legal o la missió d’interès públic han de constar.',
  },
  {
    key: 'processing-registry',
    dimension: 'privacy',
    weight: 6,
    scope: 'public-service',
    label: 'Registre d’activitats de tractament públic',
    description:
      'Publicació del registre que exigeix l’article 31 de la LOPDGDD, amb l’activitat concreta del servei localitzable.',
  },
  {
    key: 'dpia',
    dimension: 'privacy',
    weight: 6,
    scope: 'public-service',
    label: 'Avaluació d’impacte publicada',
    description:
      'Avaluació d’impacte relativa a la protecció de dades accessible, obligatòria en tractaments a gran escala de dades sensibles.',
  },
  {
    key: 'ens-conformity',
    dimension: 'security',
    weight: 12,
    scope: 'public-service',
    label: 'Conformitat amb l’Esquema Nacional de Seguretat',
    description:
      'Declaració o certificació de conformitat vigent amb la categoria del sistema. És l’equivalent públic de les auditories i els programes de recompenses del sector privat.',
  },
  {
    key: 'dpo',
    dimension: 'agency',
    weight: 5,
    scope: 'public-service',
    label: 'Delegat de protecció de dades identificat',
    description:
      'Persona o unitat delegada de protecció de dades amb contacte directe publicat, obligatòria a tota administració.',
  },
  {
    key: 'offline-alternative',
    dimension: 'agency',
    weight: 8,
    scope: 'public-service',
    label: 'Alternativa no digital',
    description:
      'Possibilitat de fer el mateix tràmit sense l’aplicació. Quan el servei és obligatori i no en té, el poder de decisió de la persona és nul.',
  },
  {
    key: 'accessibility-statement',
    dimension: 'agency',
    weight: 5,
    scope: 'public-service',
    label: 'Declaració d’accessibilitat',
    description:
      'Declaració vigent i localitzable segons el Reial decret 1112/2018, amb el grau de conformitat i el mecanisme de queixa.',
  },
]

export const INDICATORS_BY_KEY = new Map(INDICATORS.map((indicator) => [indicator.key, indicator]))

export const indicatorsFor = (dimension: Dimension) =>
  INDICATORS.filter((indicator) => indicator.dimension === dimension)

export const indicatorsInScope = (scope: IndicatorScope) =>
  INDICATORS.filter((indicator) => (indicator.scope ?? 'all') === scope)

/**
 * Indicadors que un servei públic no pot complir amb la forma que tenen al
 * sector privat i que el bloc públic substitueix: el programa de recompenses i
 * l'informe de transparència els cobreixen la conformitat amb l'ENS i el
 * registre d'activitats de tractament.
 */
export const REPLACED_FOR_PUBLIC_SERVICE = ['bug-bounty', 'transparency-report'] as const

/**
 * Indicadors d'eliminació que deixen d'aplicar quan la conservació de les dades
 * és una obligació legal documentada. No poder esborrar una història clínica no
 * és una mala pràctica del servei: és el que mana la llei.
 */
export const EXCLUDED_BY_MANDATORY_RETENTION = [
  'deletion-possible',
  'deletion-self-service',
  'deletion-direct-url',
  'deletion-difficulty',
  'deletion-waiting',
  'data-after-deletion',
] as const
