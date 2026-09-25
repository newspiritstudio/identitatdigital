import {
  DIFFICULTY_LABELS,
  MFA_METHOD_LABELS,
  MFA_METHOD_RANK,
  type AppDetails,
  type AppLite,
  type BreachLite,
  type DataTypeLite,
  type DetailsBundle,
  type FactStatus,
  type IncidentLite,
  type MfaMethod,
  type Snapshot,
} from './types'

/**
 * Pla d'acció personalitzat i senyals de risc.
 *
 * Funcions pures que s'executen al navegador. Reben la instantània i la tria, i
 * retornen una llista d'accions concretes —amb l'adreça oficial on es fa cada
 * una— ordenada per una prioritat que es pot desmuntar peça a peça.
 *
 * La prioritat NO és una nota sobre la persona ni sobre el servei. És la suma
 * de punts de factors escrits: cada acció parteix d'un valor de base segons el
 * que protegeix i hi suma punts per circumstàncies documentades a la fitxa
 * (filtracions, dades sensibles, venda a intermediaris…). La interfície ensenya
 * la suma sencera, de manera que qualsevol pot discutir-ne un pes, però ningú
 * no ha d'endevinar d'on surt una xifra.
 */

export type ActionKind =
  | 'password'
  | 'mfa'
  | 'e2ee'
  | 'ads'
  | 'ai'
  | 'telemetry'
  | 'defaults'
  | 'delete'
  | 'switch'
  | 'export'
  | 'password-audit'
  | 'password-manager'

export type PriorityFactor = { label: string; points: number }

export type Tier = 'now' | 'soon' | 'later'

export type Action = {
  /** Estable entre visites: és la clau amb què es recorda si s'ha fet. */
  id: string
  kind: ActionKind
  /** `null` per a les accions que no són d'un servei concret. */
  app: AppLite | null
  title: string
  /** Què s'hi guanya, en una frase. */
  benefit: string
  /** Detall editorial de la fitxa o instruccions, si n'hi ha. */
  detail: string | null
  steps: string[]
  /** Advertiments: obstacles documentats, dades que es queden, esperes. */
  cautions: string[]
  url: string | null
  urlLabel: string | null
  /** Enllaç intern (fitxa, comparador, altra eina). */
  internalHref: string | null
  internalLabel: string | null
  /** 1 = cinc minuts, 2 = una estona, 3 = un canvi d'hàbits. */
  effort: 1 | 2 | 3
  factors: PriorityFactor[]
  priority: number
  tier: Tier
}

export const TIER_LABELS: Record<Tier, string> = {
  now: 'Ara mateix',
  soon: 'Aquesta setmana',
  later: 'Quan hi puguis dedicar una estona',
}

export const EFFORT_LABELS: Record<Action['effort'], string> = {
  1: 'uns minuts',
  2: 'una estona',
  3: 'un canvi d’hàbits',
}

/** Llindars de prioritat. Es publiquen a la pàgina amb la resta de pesos. */
export const TIER_THRESHOLDS = { now: 45, soon: 25 } as const

export const tierOf = (priority: number): Tier =>
  priority >= TIER_THRESHOLDS.now ? 'now' : priority >= TIER_THRESHOLDS.soon ? 'soon' : 'later'

/* ─────────────────────────────── ajudes ─────────────────────────────────── */

const available = (status: FactStatus): boolean => status === 'yes' || status === 'partial'

const plural = (count: number, one: string, many: string) => `${count} ${count === 1 ? one : many}`

/** Tipus de dada que l'aplicació acaba recollint (sempre o si s'activa). */
export const collectedTypes = (app: AppLite, snapshot: Snapshot): DataTypeLite[] => {
  const seen = new Set<number>()
  const out: DataTypeLite[] = []
  for (const [index, status] of app.rows) {
    if (status !== 'yes' && status !== 'optional') continue
    if (seen.has(index)) continue
    seen.add(index)
    const meta = snapshot.dataTypes[index]
    if (meta) out.push(meta)
  }
  return out
}

const CONTENT_SLUGS = new Set([
  'contingut-de-missatges',
  'fotografies-i-videos',
  'publicacions-i-comentaris',
  'veu-i-audio',
])

export const bestMfaMethod = (methods: MfaMethod[]): MfaMethod | null =>
  MFA_METHOD_RANK.find((method) => methods.includes(method)) ?? null

export const appBreaches = (app: AppLite, snapshot: Snapshot): BreachLite[] =>
  app.breaches
    .map((link) => snapshot.breaches[link.index])
    .filter((breach): breach is BreachLite => breach !== undefined)

export const appIncidents = (app: AppLite, snapshot: Snapshot): IncidentLite[] =>
  app.incidents
    .map((index) => snapshot.incidents[index])
    .filter((incident): incident is IncidentLite => incident !== undefined)

const yearOf = (date: string | null) => (date === null ? null : Number(date.slice(0, 4)))

/* ─────────────────────────── context de risc ────────────────────────────── */

type Context = {
  breaches: BreachLite[]
  passwordBreaches: BreachLite[]
  sensitive: DataTypeLite[]
  special: DataTypeLite[]
  content: boolean
  brokers: boolean
  tracking: number
}

const contextOf = (app: AppLite, snapshot: Snapshot): Context => {
  const types = collectedTypes(app, snapshot)
  const breaches = appBreaches(app, snapshot)
  return {
    breaches,
    passwordBreaches: breaches.filter((breach) => breach.passwords),
    sensitive: types.filter((type) => type.sensitivity >= 4),
    special: types.filter((type) => type.special),
    content: types.some((type) => CONTENT_SLUGS.has(type.slug)),
    brokers:
      available(app.dataBrokerSales) || app.rows.some((row) => row[1] !== 'no' && row[4] === 'brokers'),
    tracking: app.rows.filter((row) => (row[1] === 'yes' || row[1] === 'optional') && row[3] === 'yes')
      .length,
  }
}

/** Punts per dades sensibles: 3 per tipus de sensibilitat ≥ 4, fins a 15. */
const sensitivityFactor = (context: Context): PriorityFactor | null =>
  context.sensitive.length === 0
    ? null
    : {
        label: `Hi dones ${plural(context.sensitive.length, 'tipus de dada', 'tipus de dada')} de sensibilitat alta (${context.sensitive
          .slice(0, 3)
          .map((type) => type.name.toLocaleLowerCase('ca'))
          .join(', ')}${context.sensitive.length > 3 ? '…' : ''})`,
        points: Math.min(15, context.sensitive.length * 3),
      }

const breachFactor = (context: Context): PriorityFactor | null =>
  context.breaches.length === 0
    ? null
    : {
        label: `El servei té ${plural(context.breaches.length, 'filtració coneguda', 'filtracions conegudes')} al catàleg de Have I Been Pwned`,
        points: 15,
      }

const finish = (
  action: Omit<Action, 'priority' | 'tier' | 'factors'>,
  factors: (PriorityFactor | null)[],
): Action => {
  const kept = factors.filter((factor): factor is PriorityFactor => factor !== null)
  const priority = kept.reduce((sum, factor) => sum + factor.points, 0)
  return { ...action, factors: kept, priority, tier: tierOf(priority) }
}

const base = {
  detail: null,
  steps: [] as string[],
  cautions: [] as string[],
  url: null,
  urlLabel: null,
  internalHref: null,
  internalLabel: null,
}

/* ────────────────────────── accions per servei ─────────────────────────── */

const actionsForApp = (
  app: AppLite,
  snapshot: Snapshot,
  details: AppDetails | undefined,
): Action[] => {
  const context = contextOf(app, snapshot)
  const { controls } = app
  const actions: Action[] = []
  const ficha = `/aplicacions/${app.slug}`

  /* Contrasenya exposada en una filtració del servei. */
  if (context.passwordBreaches.length > 0) {
    const latest = context.passwordBreaches[0]
    const year = yearOf(latest.date)
    actions.push(
      finish(
        {
          ...base,
          id: `password:${app.slug}`,
          kind: 'password',
          app,
          title: `Canvia la contrasenya de ${app.name} si el compte és anterior a ${year ?? 'la filtració'}`,
          benefit:
            'Una contrasenya que ha sortit en una filtració ja és a les llistes que es proven automàticament contra tots els serveis.',
          detail: `${latest.title}${year ? ` (${year})` : ''} va exposar contrasenyes de comptes del servei. Si la vas fer servir també en un altre lloc, canvia-la allà primer.`,
          url: controls.mfa.url,
          urlLabel: controls.mfa.url ? 'Configuració de seguretat del servei' : null,
          internalHref: '/eines/credencials#auditoria',
          internalLabel: 'Comprova si la teva contrasenya és a les llistes',
          effort: 1,
        },
        [
          { label: 'Base: una contrasenya filtrada és la via d’entrada més habitual', points: 35 },
          {
            label: `${plural(context.passwordBreaches.length, 'filtració', 'filtracions')} del servei amb contrasenyes exposades`,
            points: Math.min(20, context.passwordBreaches.length * 10),
          },
          year !== null && year >= new Date().getFullYear() - 3
            ? { label: `La darrera és recent (${year})`, points: 10 }
            : null,
        ],
      ),
    )
  }

  /* Verificació en dos passos. */
  if (available(controls.mfa.status)) {
    const best = bestMfaMethod(controls.mfa.methods)
    const methods = controls.mfa.methods
    actions.push(
      finish(
        {
          ...base,
          id: `mfa:${app.slug}`,
          kind: 'mfa',
          app,
          title: `Activa la verificació en dos passos a ${app.name}${best ? ` amb ${MFA_METHOD_LABELS[best]}` : ''}`,
          benefit:
            'Encara que algú aconsegueixi la contrasenya, sense el segon factor no pot entrar.',
          detail:
            details?.controls.mfa ??
            (methods.length > 0
              ? `Mètodes disponibles: ${methods.map((method) => MFA_METHOD_LABELS[method]).join(', ')}.`
              : null),
          cautions:
            best === 'sms'
              ? [
                  'L’únic mètode documentat és l’SMS: és millor que res, però es pot interceptar amb un duplicat de la targeta SIM.',
                ]
              : methods.includes('sms') && best !== null
                ? [`Si pots triar, evita l’SMS i fes servir ${MFA_METHOD_LABELS[best]}.`]
                : [],
          url: controls.mfa.url,
          urlLabel: controls.mfa.url ? 'Pàgina de seguretat del servei' : null,
          internalHref: ficha,
          internalLabel: 'Fitxa del servei',
          effort: 2,
        },
        [
          { label: 'Base: el segon factor atura la majoria d’accessos no autoritzats', points: 25 },
          breachFactor(context),
          sensitivityFactor(context),
          context.special.length > 0
            ? { label: 'Hi ha dades de categoria especial de l’article 9 del RGPD', points: 5 }
            : null,
        ],
      ),
    )
  }

  /* Xifratge d'extrem a extrem que cal activar. */
  if (
    (controls.e2ee.scope === 'all-optin' || controls.e2ee.scope === 'partial-optin') &&
    available(controls.e2ee.status)
  ) {
    actions.push(
      finish(
        {
          ...base,
          id: `e2ee:${app.slug}`,
          kind: 'e2ee',
          app,
          title: `Activa el xifratge d’extrem a extrem a ${app.name}`,
          benefit:
            'Sense activar-lo, el servei pot llegir el contingut de les converses; activat, només les persones que hi participen.',
          detail: details?.controls.e2ee ?? null,
          internalHref: ficha,
          internalLabel: 'Fitxa del servei',
          effort: 1,
        },
        [
          { label: 'Base: el servei té el xifratge però no per defecte', points: 25 },
          context.content ? { label: 'Hi comparteixes missatges, fotos o àudio', points: 10 } : null,
        ],
      ),
    )
  }

  /* Publicitat personalitzada. */
  if (available(controls.adOptOut.status) || (available(controls.targetedAdvertising.status) && controls.targetedAdvertising.url)) {
    const url = controls.adOptOut.url ?? controls.targetedAdvertising.url
    actions.push(
      finish(
        {
          ...base,
          id: `ads:${app.slug}`,
          kind: 'ads',
          app,
          title: `Limita la publicitat personalitzada a ${app.name}`,
          benefit:
            'Menys perfilat: el servei deixa de fer servir (o fa servir menys) el que sap de tu per decidir què et mostra.',
          detail: details?.controls.adOptOut ?? details?.controls.targetedAdvertising ?? null,
          cautions:
            controls.adOptOut.status === 'partial'
              ? ['La fitxa documenta que l’opció només ho limita en part.']
              : [],
          url,
          urlLabel: url ? 'Configuració de publicitat' : null,
          internalHref: ficha,
          internalLabel: 'Fitxa del servei',
          effort: 1,
        },
        [
          { label: 'Base: reduir el perfilat publicitari', points: 12 },
          controls.targetedAdvertising.status === 'yes'
            ? { label: 'La fitxa documenta publicitat personalitzada', points: 8 }
            : null,
          context.brokers ? { label: 'Consta cessió o venda a intermediaris de dades', points: 8 } : null,
          context.tracking > 0
            ? {
                label: `${plural(context.tracking, 'dada serveix', 'dades serveixen')} per seguir-te fora del servei`,
                points: Math.min(8, context.tracking * 2),
              }
            : null,
        ],
      ),
    )
  }

  /* Entrenament d'intel·ligència artificial. */
  if (available(controls.aiTraining.status) && controls.aiTraining.url) {
    actions.push(
      finish(
        {
          ...base,
          id: `ai:${app.slug}`,
          kind: 'ai',
          app,
          title: `Oposa’t a l’ús del teu contingut per entrenar la IA de ${app.name}`,
          benefit:
            'El que s’incorpora a un model no se’n pot treure després: l’oposició només té efecte cap endavant.',
          detail: details?.controls.aiTraining ?? null,
          url: controls.aiTraining.url,
          urlLabel: 'Formulari d’oposició',
          internalHref: ficha,
          internalLabel: 'Fitxa del servei',
          effort: 1,
        },
        [
          { label: 'Base: exercir l’oposició a un tractament', points: 15 },
          context.content ? { label: 'Hi publiques o hi envies contingut propi', points: 10 } : null,
        ],
      ),
    )
  }

  /* Telemetria. */
  if (available(controls.telemetryOptOut.status)) {
    actions.push(
      finish(
        {
          ...base,
          id: `telemetry:${app.slug}`,
          kind: 'telemetry',
          app,
          title: `Desactiva la telemetria de ${app.name}`,
          benefit: 'Menys dades d’ús i del dispositiu que surten cap al fabricant.',
          detail: details?.controls.telemetryOptOut ?? null,
          url: controls.telemetryOptOut.url,
          urlLabel: controls.telemetryOptOut.url ? 'On es desactiva' : null,
          internalHref: ficha,
          internalLabel: 'Fitxa del servei',
          effort: 1,
        },
        [{ label: 'Base: reduir dades d’ús que s’envien', points: 8 }],
      ),
    )
  }

  /* Configuració per defecte permissiva. */
  if (app.controls.defaultPosture === 'permissive' && app.controls.privacyCenter) {
    actions.push(
      finish(
        {
          ...base,
          id: `defaults:${app.slug}`,
          kind: 'defaults',
          app,
          title: `Revisa la configuració de privadesa de ${app.name}`,
          benefit:
            'La fitxa documenta que el servei ve configurat per compartir tant com pot: el que no canviïs tu queda així.',
          url: app.controls.privacyCenter,
          urlLabel: 'Centre de privadesa',
          internalHref: ficha,
          internalLabel: 'Fitxa del servei',
          cautions:
            app.controls.severeDarkPatterns > 0
              ? [
                  `La fitxa documenta ${plural(app.controls.severeDarkPatterns, 'patró fosc greu', 'patrons foscos greus')}: llegeix cada opció abans d’acceptar.`,
                ]
              : [],
          effort: 2,
        },
        [
          { label: 'Base: configuració per defecte permissiva', points: 15 },
          app.controls.severeDarkPatterns > 0
            ? { label: 'Patrons foscos greus documentats', points: 5 }
            : null,
        ],
      ),
    )
  }

  /* Alternatives amb una diferència clara. */
  for (const alternative of app.alternatives) {
    if (alternative.comparability === 'complementary') continue
    if (app.overall === null || alternative.overall === null) continue
    const delta = Math.round(alternative.overall - app.overall)
    if (delta < 10) continue
    const shared = app.categorySlugs[0]
    actions.push(
      finish(
        {
          ...base,
          id: `switch:${app.slug}:${alternative.slug}`,
          kind: 'switch',
          app,
          title: `Valora canviar ${app.name} per ${alternative.name}`,
          benefit: `+${delta} punts de puntuació global (${app.overall} → ${alternative.overall}).`,
          detail: alternative.rationale || null,
          cautions: alternative.tradeOffs ? [`Què s’hi perd: ${alternative.tradeOffs}`] : [],
          internalHref: `/eines/comparador?a=${encodeURIComponent(app.slug)}&b=${encodeURIComponent(alternative.slug)}${shared ? `&cat=${encodeURIComponent(shared)}` : ''}`,
          internalLabel: 'Compara-les indicador per indicador',
          effort: 3,
        },
        [
          { label: 'Base: canviar un servei és la mesura més eficaç i la més cara', points: 5 },
          { label: `Diferència de ${delta} punts a la puntuació global`, points: Math.min(25, Math.round(delta / 2)) },
          alternative.comparability === 'equivalent'
            ? { label: 'Cobreix la mateixa necessitat', points: 5 }
            : null,
        ],
      ),
    )
  }

  /* Descarregar les dades: saber què en saben. */
  if (available(controls.dataExport.status) && controls.dataExport.url) {
    actions.push(
      finish(
        {
          ...base,
          id: `export:${app.slug}`,
          kind: 'export',
          app,
          title: `Descarrega el que ${app.name} té de tu`,
          benefit:
            'És el dret d’accés de l’article 15 del RGPD, i la manera més directa de veure el teu perfil tal com el veu el servei.',
          detail: details?.controls.dataExport ?? null,
          url: controls.dataExport.url,
          urlLabel: 'Sol·licitud de còpia',
          internalHref: ficha,
          internalLabel: 'Fitxa del servei',
          effort: 1,
        },
        [
          { label: 'Base: exercir el dret d’accés', points: 5 },
          context.sensitive.length > 0 ? { label: 'Hi ha dades de sensibilitat alta', points: 5 } : null,
        ],
      ),
    )
  }

  return actions
}

/** Pla d'eliminació per a una aplicació que la persona ja no fa servir. */
const deletionAction = (
  app: AppLite,
  snapshot: Snapshot,
  details: AppDetails | undefined,
): Action => {
  const context = contextOf(app, snapshot)
  const { deletion } = app
  const cautions: string[] = []
  if (deletion.possible === 'no') {
    cautions.push('La fitxa documenta que el compte no es pot esborrar. Pots demanar la supressió per l’article 17 del RGPD.')
  }
  if (deletion.requiresSupportContact) cautions.push('Cal contactar amb el servei d’atenció: no es pot fer sol.')
  if (deletion.waitingPeriodDays !== null && deletion.waitingPeriodDays > 0) {
    cautions.push(
      `Durant ${deletion.waitingPeriodDays} dies el compte es pot recuperar. Si hi tornes a entrar en aquest període, l’eliminació pot quedar anul·lada.`,
    )
  }
  if (details?.deletionObstacles) cautions.push(details.deletionObstacles)
  if (details?.deletionDataRetained) {
    cautions.push(`Què es queden igualment: ${details.deletionDataRetained}`)
  }

  const steps = [...(details?.deletionSteps ?? [])]
  if (available(app.controls.dataExport.status)) {
    steps.unshift('Abans de res, descarrega una còpia de les teves dades si les vols conservar.')
  }

  const effort: Action['effort'] =
    deletion.difficulty === 'easy' ? 1 : deletion.difficulty === 'medium' ? 2 : 3

  return finish(
    {
      ...base,
      id: `delete:${app.slug}`,
      kind: 'delete',
      app,
      title: `Esborra el compte de ${app.name}`,
      benefit:
        'Un compte que no fas servir continua acumulant dades i continua sent a les properes filtracions.',
      detail: `Dificultat documentada: ${DIFFICULTY_LABELS[deletion.difficulty]}.`,
      steps,
      cautions,
      url: deletion.url ?? app.controls.rightsRequest,
      urlLabel: deletion.url ? 'Començar l’eliminació' : app.controls.rightsRequest ? 'Formulari de drets' : null,
      internalHref: `/aplicacions/${app.slug}`,
      internalLabel: 'Fitxa del servei',
      effort,
    },
    [
      { label: 'Base: ja no el fas servir', points: 30 },
      breachFactor(context),
      sensitivityFactor(context),
      context.brokers ? { label: 'Consta cessió o venda a intermediaris de dades', points: 5 } : null,
    ],
  )
}

export type Plan = {
  actions: Action[]
  /** Aplicacions triades sense cap acció documentable: no vol dir que no n'hi hagi. */
  appsWithoutActions: AppLite[]
}

/**
 * Pla complet per a una tria.
 *
 * Una aplicació marcada com a «ja no la faig servir» només genera l'acció
 * d'esborrar-la: configurar-ne la privadesa seria feina perduda.
 */
export const buildPlan = (
  snapshot: Snapshot,
  selected: string[],
  leaving: string[],
  details: DetailsBundle | null = null,
): Plan => {
  const chosen = new Set(selected)
  const leavingSet = new Set(leaving)
  const apps = snapshot.apps.filter((app) => chosen.has(app.slug))
  const actions: Action[] = []
  const appsWithoutActions: AppLite[] = []

  for (const app of apps) {
    if (leavingSet.has(app.slug)) {
      actions.push(deletionAction(app, snapshot, details?.[app.slug]))
      continue
    }
    const own = actionsForApp(app, snapshot, details?.[app.slug])
    if (own.length === 0) appsWithoutActions.push(app)
    actions.push(...own)
  }

  const passwordActions = actions.filter((action) => action.kind === 'password').length
  if (apps.length > 0) {
    actions.push(
      finish(
        {
          ...base,
          id: 'global:password-audit',
          kind: 'password-audit',
          app: null,
          title: 'Comprova si el teu correu i les teves contrasenyes surten en filtracions',
          benefit:
            'Les filtracions de les fitxes són les del servei; aquesta comprovació mira si hi ha les teves dades, en qualsevol servei.',
          internalHref: '/eines/credencials',
          internalLabel: 'Revisió de credencials',
          effort: 1,
        },
        [
          { label: 'Base: saber si ja formes part d’una filtració', points: 20 },
          passwordActions > 0
            ? {
                label: `${plural(passwordActions, 'servei teu ha', 'serveis teus han')} filtrat contrasenyes`,
                points: Math.min(20, passwordActions * 10),
              }
            : null,
        ],
      ),
    )
  }
  if (apps.length >= 5) {
    actions.push(
      finish(
        {
          ...base,
          id: 'global:password-manager',
          kind: 'password-manager',
          app: null,
          title: 'Fes servir un gestor de contrasenyes',
          benefit: `Amb ${apps.length} serveis, és l’única manera realista de tenir una contrasenya diferent a cadascun.`,
          internalHref: '/eines/credencials#gestors',
          internalLabel: 'Com triar-ne un',
          effort: 3,
        },
        [
          { label: 'Base: evitar la reutilització de contrasenyes', points: 20 },
          { label: `Fas servir ${apps.length} serveis amb compte`, points: Math.min(15, apps.length) },
        ],
      ),
    )
  }

  actions.sort(
    (a, b) =>
      b.priority - a.priority ||
      a.effort - b.effort ||
      (a.app?.name ?? '').localeCompare(b.app?.name ?? '', 'ca') ||
      a.id.localeCompare(b.id),
  )
  return { actions, appsWithoutActions }
}

/* ─────────────────────────────── mapa de risc ───────────────────────────── */

export type SignalKey =
  | 'breaches'
  | 'incidents'
  | 'special'
  | 'tracking'
  | 'brokers'
  | 'noMfa'
  | 'lowScore'
  | 'darkPatterns'

/**
 * Tres estats, com a tot el projecte: `on` (documentat que sí), `off`
 * (documentat que no) i `unknown` (no ho sabem). Un desconegut no compta mai
 * com un senyal.
 */
export type SignalState = 'on' | 'off' | 'unknown'

export type Signal = { key: SignalKey; state: SignalState; text: string }

export const SIGNAL_LABELS: Record<SignalKey, string> = {
  breaches: 'Filtracions',
  incidents: 'Incidents i sancions',
  special: 'Dades de l’article 9',
  tracking: 'Seguiment fora del servei',
  brokers: 'Intermediaris de dades',
  noMfa: 'Sense doble factor',
  lowScore: 'Puntuació baixa',
  darkPatterns: 'Patrons foscos greus',
}

export const SIGNAL_KEYS = Object.keys(SIGNAL_LABELS) as SignalKey[]

export type AppRisk = { app: AppLite; signals: Signal[]; count: number; unknown: number }

export const riskOf = (app: AppLite, snapshot: Snapshot): AppRisk => {
  const context = contextOf(app, snapshot)
  const incidents = appIncidents(app, snapshot)
  const hasMatrix = app.rows.length > 0
  const trackingUnknown = app.rows.some(
    (row) => (row[1] === 'yes' || row[1] === 'optional') && row[3] === 'unknown',
  )
  const signals: Signal[] = [
    {
      key: 'breaches',
      state: context.breaches.length > 0 ? 'on' : 'off',
      text:
        context.breaches.length > 0
          ? `${plural(context.breaches.length, 'filtració', 'filtracions')}${context.passwordBreaches.length > 0 ? ', amb contrasenyes' : ''}`
          : 'cap al catàleg',
    },
    {
      key: 'incidents',
      state: incidents.length > 0 ? 'on' : 'off',
      text: incidents.length > 0 ? plural(incidents.length, 'incident', 'incidents') : 'cap documentat',
    },
    {
      key: 'special',
      state: context.special.length > 0 ? 'on' : hasMatrix ? 'off' : 'unknown',
      text:
        context.special.length > 0
          ? context.special.map((type) => type.name).join(', ')
          : hasMatrix
            ? 'no en recull'
            : 'no documentat',
    },
    {
      key: 'tracking',
      state: context.tracking > 0 ? 'on' : trackingUnknown || !hasMatrix ? 'unknown' : 'off',
      text:
        context.tracking > 0
          ? plural(context.tracking, 'tipus de dada', 'tipus de dada')
          : trackingUnknown || !hasMatrix
            ? 'no documentat'
            : 'no',
    },
    {
      key: 'brokers',
      state: context.brokers ? 'on' : app.dataBrokerSales === 'no' ? 'off' : 'unknown',
      text: context.brokers ? 'sí' : app.dataBrokerSales === 'no' ? 'no' : 'no documentat',
    },
    {
      key: 'noMfa',
      state:
        app.controls.mfa.status === 'no'
          ? 'on'
          : available(app.controls.mfa.status) || app.controls.mfa.status === 'na'
            ? 'off'
            : 'unknown',
      text:
        app.controls.mfa.status === 'no'
          ? 'no n’ofereix'
          : available(app.controls.mfa.status)
            ? 'n’ofereix'
            : app.controls.mfa.status === 'na'
              ? 'no aplica'
              : 'no documentat',
    },
    {
      key: 'lowScore',
      state: app.overall === null ? 'unknown' : app.overall < 45 ? 'on' : 'off',
      text: app.overall === null ? 'sense puntuació' : `${app.overall} sobre 100`,
    },
    {
      key: 'darkPatterns',
      state: app.controls.severeDarkPatterns > 0 ? 'on' : 'off',
      text:
        app.controls.severeDarkPatterns > 0
          ? plural(app.controls.severeDarkPatterns, 'documentat', 'documentats')
          : 'cap de greu documentat',
    },
  ]
  return {
    app,
    signals,
    count: signals.filter((signal) => signal.state === 'on').length,
    unknown: signals.filter((signal) => signal.state === 'unknown').length,
  }
}

export const riskMap = (snapshot: Snapshot, selected: string[]): AppRisk[] => {
  const chosen = new Set(selected)
  return snapshot.apps
    .filter((app) => chosen.has(app.slug))
    .map((app) => riskOf(app, snapshot))
    .sort((a, b) => b.count - a.count || a.unknown - b.unknown || a.app.name.localeCompare(b.app.name, 'ca'))
}

/* ─────────────────────────── filtracions agregades ─────────────────────── */

export type BreachExposure = {
  breach: BreachLite
  apps: { app: AppLite; match: 'editorial' | 'domain' }[]
}

export type BreachSummary = {
  items: BreachExposure[]
  /** Suma de comptes afectats. Una persona pot sortir en diverses. */
  accounts: number
  withPasswords: number
  /** Tipus de dada del catàleg exposats en alguna filtració, per sensibilitat. */
  dataTypes: { type: DataTypeLite; breaches: number }[]
  firstYear: number | null
  lastYear: number | null
}

export const breachSummary = (snapshot: Snapshot, selected: string[]): BreachSummary => {
  const chosen = new Set(selected)
  const byIndex = new Map<number, BreachExposure>()
  for (const app of snapshot.apps) {
    if (!chosen.has(app.slug)) continue
    for (const link of app.breaches) {
      const breach = snapshot.breaches[link.index]
      if (!breach) continue
      const entry = byIndex.get(link.index) ?? { breach, apps: [] }
      entry.apps.push({ app, match: link.match })
      byIndex.set(link.index, entry)
    }
  }
  const items = [...byIndex.values()].sort((a, b) =>
    (b.breach.date ?? '').localeCompare(a.breach.date ?? ''),
  )
  const typeCounts = new Map<number, number>()
  for (const item of items) {
    for (const index of item.breach.dataTypes) typeCounts.set(index, (typeCounts.get(index) ?? 0) + 1)
  }
  const years = items.map((item) => yearOf(item.breach.date)).filter((year): year is number => year !== null)
  return {
    items,
    accounts: items.reduce((sum, item) => sum + (item.breach.pwnCount ?? 0), 0),
    withPasswords: items.filter((item) => item.breach.passwords).length,
    dataTypes: [...typeCounts.entries()]
      .map(([index, breaches]) => ({ type: snapshot.dataTypes[index], breaches }))
      .filter((entry): entry is { type: DataTypeLite; breaches: number } => entry.type !== undefined)
      .sort((a, b) => b.type.sensitivity - a.type.sensitivity || b.breaches - a.breaches),
    firstYear: years.length > 0 ? Math.min(...years) : null,
    lastYear: years.length > 0 ? Math.max(...years) : null,
  }
}
