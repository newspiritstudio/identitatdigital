import { dataClassToSlug } from '@/lib/breaches/dataClasses'
import { registrableDomain } from '@/lib/breaches/domains'
import type { XonBreach } from '@/lib/breaches/xposedornot'

import { MFA_METHOD_LABELS, MFA_METHOD_RANK, type MfaMethod } from '../diagnostic/types'
import type { CredApp, CredIndex } from './types'

/**
 * Creuament del resultat de XposedOrNot amb el directori. Tot pur: rep el
 * resultat i l'índex i en fa el resum i les accions, sense tocar la xarxa ni
 * l'emmagatzematge. S'executa al navegador, que és l'únic lloc on hi ha el
 * resultat.
 */

export type PasswordState = 'known' | 'hashed' | 'unknown'

export interface MatchedApp {
  slug: string
  name: string
  /** `name`: el catàleg de HIBP ja lliga aquella filtració amb la fitxa. `domain`: només coincideix el domini. */
  match: 'name' | 'domain'
}

export interface MatchedBreach {
  breach: XonBreach
  apps: MatchedApp[]
  /** Tipus de dada del projecte, sense repetits. */
  dataTypes: string[]
  /** Categories que el projecte no té al vocabulari, tal com les publica la font. */
  otherClasses: string[]
  /** `null` si la filtració no inclou contrasenyes. */
  passwords: PasswordState | null
}

const normaliseName = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '')

export function matchBreaches(index: CredIndex, breaches: readonly XonBreach[]): MatchedBreach[] {
  const byName = new Map<string, number[]>()
  for (const [name, apps] of Object.entries(index.byBreachName)) {
    const key = normaliseName(name)
    if (key.length === 0) continue
    byName.set(key, [...new Set([...(byName.get(key) ?? []), ...apps])])
  }

  return breaches.map((breach) => {
    let apps: MatchedApp[] = (byName.get(normaliseName(breach.id)) ?? []).map((appIndex) => ({
      slug: index.apps[appIndex]?.slug ?? '',
      name: index.apps[appIndex]?.name ?? '',
      match: 'name' as const,
    }))
    if (apps.length === 0) {
      const domain = registrableDomain(breach.domain)
      apps = (domain !== null ? (index.byDomain[domain] ?? []) : []).map((appIndex) => ({
        slug: index.apps[appIndex]?.slug ?? '',
        name: index.apps[appIndex]?.name ?? '',
        match: 'domain' as const,
      }))
    }
    apps = apps.filter((app) => app.slug.length > 0)

    const dataTypes: string[] = []
    const otherClasses: string[] = []
    let hasPasswords = false
    for (const dataClass of breach.dataClasses) {
      const slug = dataClassToSlug(dataClass)
      if (slug === 'contrasenya') hasPasswords = true
      if (typeof slug === 'string' && index.dataTypes[slug]) {
        if (!dataTypes.includes(slug)) dataTypes.push(slug)
      } else if (!otherClasses.includes(dataClass)) {
        otherClasses.push(dataClass)
      }
    }
    // XposedOrNot pot saber com es guardaven les contrasenyes encara que no
    // posi «Passwords» a la llista de dades: si en qualifica el risc, n'hi havia.
    if (breach.passwordRisk !== 'unknown') hasPasswords = true

    return {
      breach,
      apps,
      dataTypes,
      otherClasses,
      passwords: !hasPasswords
        ? null
        : breach.passwordRisk === 'plaintext' || breach.passwordRisk === 'easytocrack'
          ? 'known'
          : breach.passwordRisk === 'hardtocrack'
            ? 'hashed'
            : 'unknown',
    }
  })
}

/* ─────────────────────────────── resum ──────────────────────────────────── */

export interface DataTypeCount {
  slug: string
  name: string
  count: number
  sensitivity: number
  special: boolean
}

export interface EmailSummary {
  total: number
  withPasswords: number
  passwordsKnown: number
  firstYear: number | null
  lastYear: number | null
  /** Filtracions per any, de la més antiga a la més recent, amb els anys buits inclosos. */
  byYear: { year: number; count: number }[]
  dataTypes: DataTypeCount[]
  otherClasses: { name: string; count: number }[]
  /** Fitxes del directori que surten al resultat. */
  directoryApps: string[]
  /** D'aquestes, les que ja són a la tria del diagnòstic. */
  selectedApps: string[]
}

export function summarise(
  index: CredIndex,
  matched: readonly MatchedBreach[],
  selection: readonly string[],
): EmailSummary {
  const years = matched.map((entry) => entry.breach.year).filter((year): year is number => year !== null)
  const firstYear = years.length > 0 ? Math.min(...years) : null
  const lastYear = years.length > 0 ? Math.max(...years) : null
  const byYear: EmailSummary['byYear'] = []
  if (firstYear !== null && lastYear !== null) {
    for (let year = firstYear; year <= lastYear; year += 1) {
      byYear.push({ year, count: years.filter((value) => value === year).length })
    }
  }

  const typeCounts = new Map<string, number>()
  const otherCounts = new Map<string, number>()
  for (const entry of matched) {
    for (const slug of entry.dataTypes) typeCounts.set(slug, (typeCounts.get(slug) ?? 0) + 1)
    for (const name of entry.otherClasses) otherCounts.set(name, (otherCounts.get(name) ?? 0) + 1)
  }
  const dataTypes: DataTypeCount[] = [...typeCounts.entries()]
    .map(([slug, count]) => ({ slug, count, ...index.dataTypes[slug] }))
    .sort((a, b) => b.sensitivity - a.sensitivity || b.count - a.count || a.name.localeCompare(b.name, 'ca'))

  const directoryApps = [...new Set(matched.flatMap((entry) => entry.apps.map((app) => app.slug)))]
  const chosen = new Set(selection)

  return {
    total: matched.length,
    withPasswords: matched.filter((entry) => entry.passwords !== null).length,
    passwordsKnown: matched.filter((entry) => entry.passwords === 'known').length,
    firstYear,
    lastYear,
    byYear,
    dataTypes,
    otherClasses: [...otherCounts.entries()]
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name)),
    directoryApps,
    selectedApps: directoryApps.filter((slug) => chosen.has(slug)),
  }
}

/* ────────────────────────────── accions ─────────────────────────────────── */

export interface EmailAction {
  id: string
  title: string
  detail: string
  steps: string[]
  /** Filtracions o serveis que motiven l'acció, per dir-los pel nom. */
  because: string[]
  url: string | null
  urlLabel: string | null
  internalHref: string | null
  internalLabel: string | null
  priority: number
  factors: { label: string; points: number }[]
}

const bestMethod = (methods: MfaMethod[]): MfaMethod | null =>
  MFA_METHOD_RANK.find((method) => methods.includes(method)) ?? null

const action = (partial: Partial<EmailAction> & Pick<EmailAction, 'id' | 'title' | 'detail' | 'factors'>): EmailAction => ({
  steps: [],
  because: [],
  url: null,
  urlLabel: null,
  internalHref: null,
  internalLabel: null,
  ...partial,
  priority: partial.factors.reduce((total, factor) => total + factor.points, 0),
})

const names = (entries: readonly MatchedBreach[]) => entries.map((entry) => entry.breach.id)

const withType = (matched: readonly MatchedBreach[], ...slugs: string[]) =>
  matched.filter((entry) => slugs.some((slug) => entry.dataTypes.includes(slug)))

/**
 * Pla d'acció a partir del resultat. Cada acció surt d'una dada concreta del
 * resultat i ho diu («perquè surt a …»). La prioritat és la suma dels factors,
 * que la interfície ensenya: no hi ha cap nota inventada.
 */
export function buildEmailActions(
  index: CredIndex,
  matched: readonly MatchedBreach[],
  currentYear: number,
): EmailAction[] {
  const actions: EmailAction[] = []
  const appBySlug = new Map(index.apps.map((app) => [app.slug, app]))

  /* 1. Contrasenyes. És el que més urgeix: les llistes de credencials filtrades
   * es proven automàticament contra altres serveis. */
  const withPasswords = matched.filter((entry) => entry.passwords !== null)
  if (withPasswords.length > 0) {
    const known = withPasswords.filter((entry) => entry.passwords === 'known')
    const recent = withPasswords.filter(
      (entry) => entry.breach.year !== null && currentYear - entry.breach.year <= 3,
    )
    const factors = [{ label: 'Hi ha contrasenyes teves en filtracions', points: 40 }]
    if (known.length > 0) {
      factors.push({ label: `${known.length} les guardaven en clar o amb un resum fàcil de trencar`, points: 20 })
    }
    if (recent.length > 0) factors.push({ label: 'Alguna és dels últims tres anys', points: 10 })
    actions.push(
      action({
        id: 'passwords',
        title: 'Canvia les contrasenyes que han quedat exposades',
        detail:
          'Qualsevol contrasenya que fessis servir en aquests serveis s’ha de donar per coneguda, i també allà on la repeteixis: és el primer que proven els atacs automàtics. Si ja no recordes quina hi tenies, canvia-la igualment als serveis que encara facis servir.',
        steps: [
          'Canvia-la als serveis de la llista que encara facis servir (començant pels que la guardaven en clar).',
          'Canvia-la també a tots els altres llocs on fessis servir la mateixa o una de semblant, començant pel correu: qui controla el correu pot restablir la resta.',
          'Fes-ne una de diferent per a cada servei. Un gestor de contrasenyes ho fa per tu.',
        ],
        because: names([...known, ...withPasswords.filter((entry) => entry.passwords !== 'known')]),
        internalHref: '#auditoria',
        internalLabel: 'Comprova si les que fas servir ara estan filtrades o repetides',
        factors,
      }),
    )
  }

  /* 2. Serveis del directori: segon factor on la fitxa diu que n'hi ha. */
  const seen = new Set<string>()
  for (const entry of matched) {
    for (const matchedApp of entry.apps) {
      if (seen.has(matchedApp.slug)) continue
      const app = appBySlug.get(matchedApp.slug)
      if (!app || (app.mfa.status !== 'yes' && app.mfa.status !== 'partial')) continue
      seen.add(matchedApp.slug)
      const best = bestMethod(app.mfa.methods)
      const factors = [{ label: `${app.name} surt a una filtració amb la teva adreça`, points: 20 }]
      if (entry.passwords !== null) factors.push({ label: 'La filtració incloïa contrasenyes', points: 15 })
      if (matchedApp.match === 'domain') {
        factors.push({ label: 'Reconegut només pel domini: comprova que sigui el mateix servei', points: -5 })
      }
      actions.push(
        action({
          id: `mfa:${app.slug}`,
          title: `Activa la verificació en dos passos a ${app.name}`,
          detail: best
            ? `Amb el segon factor, la contrasenya sola ja no obre el compte. La fitxa documenta ${MFA_METHOD_LABELS[best]}${best === 'sms' ? ', que és el mètode més feble però molt millor que res' : ''}.`
            : 'Amb el segon factor, la contrasenya sola ja no obre el compte.',
          because: [entry.breach.id],
          url: app.mfa.url ?? app.securityUrl,
          urlLabel: app.mfa.url ?? app.securityUrl ? `Configuració de seguretat de ${app.name}` : null,
          internalHref: `/aplicacions/${app.slug}`,
          internalLabel: `Fitxa de ${app.name}`,
          factors,
        }),
      )
    }
  }

  /* 3. Dades que no es poden canviar com una contrasenya. */
  const questions = withType(matched, 'pregunta-de-seguretat')
  if (questions.length > 0) {
    actions.push(
      action({
        id: 'security-questions',
        title: 'Canvia les preguntes de seguretat',
        detail:
          'Les respostes a les preguntes de recuperació (el cognom de la mare, la primera mascota) no caduquen i serveixen per a molts serveis alhora. Si ja circulen, qualsevol pot fer-les servir per recuperar-te un compte.',
        steps: [
          'Als serveis que encara te les demanin, canvia-les per respostes inventades que no tinguin res a veure amb la pregunta.',
          'Desa-les al gestor de contrasenyes, com si fossin una contrasenya més.',
        ],
        because: names(questions),
        factors: [{ label: 'Preguntes de seguretat exposades', points: 30 }],
      }),
    )
  }

  const tokens = withType(matched, 'testimoni-d-autenticacio')
  if (tokens.length > 0) {
    actions.push(
      action({
        id: 'sessions',
        title: 'Tanca les sessions obertes dels serveis afectats',
        detail:
          'La filtració incloïa testimonis de sessió o claus: permeten entrar al compte sense contrasenya fins que la sessió es tanca.',
        steps: ['A la configuració de seguretat del servei, tanca totes les sessions obertes i torna a entrar.'],
        because: names(tokens),
        factors: [{ label: 'Testimonis d’autenticació exposats', points: 30 }],
      }),
    )
  }

  const payment = withType(matched, 'dades-de-pagament')
  if (payment.length > 0) {
    actions.push(
      action({
        id: 'payment',
        title: 'Revisa els moviments de les targetes i avisa l’entitat',
        detail:
          'Hi ha dades de pagament a les filtracions. Si la targeta que hi tenies encara és vigent, l’entitat la pot anul·lar i emetre’n una de nova sense cost en cas de frau.',
        steps: [
          'Mira els moviments dels últims mesos i qualsevol càrrec petit que no reconeguis: sovint és una prova abans del frau gran.',
          'Si la targeta encara és vigent, truca a l’entitat i explica-ho: poden bloquejar-la i fer-ne una de nova.',
        ],
        because: names(payment),
        factors: [{ label: 'Dades de pagament exposades', points: 30 }],
      }),
    )
  }

  const ids = withType(matched, 'document-identificatiu-oficial')
  if (ids.length > 0) {
    actions.push(
      action({
        id: 'identity',
        title: 'Vigila que ningú no faci contractes al teu nom',
        detail:
          'Amb un número de document d’identitat es poden intentar contractar préstecs, línies de telèfon o subministraments al teu nom. El Banc d’Espanya permet consultar de franc els préstecs que hi ha registrats a nom teu.',
        steps: [
          'Demana l’informe de la Central d’Informació de Riscos (CIRBE) del Banc d’Espanya i comprova que no hi hagi cap préstec que no reconeguis.',
          'Si trobes un contracte que no has fet, denuncia-ho a la policia i conserva la denúncia: és el que et demanaran per anul·lar-lo.',
        ],
        because: names(ids),
        url: 'https://sedeelectronica.bde.es/sede/es/menu/tramites/central-de-infor/solicitud-informes-riesgos-cirbe-p58.html',
        urlLabel: 'Sol·licitud de l’informe CIRBE (Banc d’Espanya)',
        factors: [{ label: 'Document d’identitat exposat', points: 30 }],
      }),
    )
  }

  const phones = withType(matched, 'numero-de-telefon')
  if (phones.length > 0) {
    actions.push(
      action({
        id: 'phone',
        title: 'Desconfia dels SMS i les trucades que semblin d’aquests serveis',
        detail:
          'El teu número de telèfon és a les filtracions al costat del teu nom i dels serveis que fas servir: és exactament el que cal per a un SMS o una trucada falsa creïble. A més, on puguis, no facis servir l’SMS com a segon factor, perquè el número es pot duplicar.',
        steps: [
          'Si un missatge et demana que entris a un enllaç o que diguis un codi, no ho facis: entra al servei pel teu compte.',
          'On el servei ho permeti, canvia l’SMS de verificació per una aplicació d’autenticació o una clau d’accés.',
        ],
        because: names(phones),
        internalHref: index.authenticators[0] ? `/aplicacions/${index.authenticators[0].slug}` : null,
        internalLabel: index.authenticators[0] ? `Fitxa de ${index.authenticators[0].name}` : null,
        factors: [{ label: 'Número de telèfon exposat', points: 20 }],
      }),
    )
  }

  const personal = withType(matched, 'adreca-postal', 'data-de-naixement')
  if (personal.length > 0) {
    actions.push(
      action({
        id: 'phishing',
        title: 'Compta que et poden escriure fent-se passar per algú que et coneix',
        detail:
          'L’adreça postal o la data de naixement no es poden canviar. Serveixen per fer creïble un correu o una carta que cita dades teves de debò. Que un missatge sàpiga coses de tu no el fa legítim.',
        steps: [
          'Davant d’un missatge urgent que et demana diners, dades o un codi, verifica-ho per un altre canal abans de fer res.',
          'No facis servir la data de naixement com a PIN ni com a resposta de seguretat.',
        ],
        because: names(personal),
        factors: [{ label: 'Adreça o data de naixement exposades', points: 15 }],
      }),
    )
  }

  const special = matched.filter((entry) => entry.dataTypes.some((slug) => index.dataTypes[slug]?.special))
  if (special.length > 0) {
    actions.push(
      action({
        id: 'special',
        title: 'Si algú et fa xantatge amb aquestes dades, no paguis i denuncia-ho',
        detail:
          'Hi ha dades de categoria especial (salut, orientació, creences…) en alguna filtració. De vegades s’usen per fer xantatge. Pagar no fa desaparèixer les dades i marca qui paga com a objectiu.',
        steps: [
          'Guarda els missatges i denuncia-ho als Mossos d’Esquadra.',
          'Pots reclamar a l’Agència Espanyola de Protecció de Dades contra l’empresa que les va perdre (a l’Autoritat Catalana, si era una administració catalana).',
        ],
        because: names(special),
        url: 'https://www.aepd.es/',
        urlLabel: 'Agència Espanyola de Protecció de Dades',
        factors: [{ label: 'Dades de categoria especial exposades', points: 25 }],
      }),
    )
  }

  /* 4. Comptes vells: com menys comptes, menys filtracions futures. */
  const old = matched.filter((entry) => entry.breach.year !== null && currentYear - entry.breach.year >= 5)
  if (old.length >= 3) {
    const deletable = [
      ...new Set(
        old.flatMap((entry) =>
          entry.apps
            .map((matchedApp) => appBySlug.get(matchedApp.slug))
            .filter((app): app is CredApp => app !== undefined && app.deletion.possible !== 'no')
            .map((app) => app.name),
        ),
      ),
    ]
    actions.push(
      action({
        id: 'old-accounts',
        title: 'Tanca els comptes que ja no fas servir',
        detail: `${old.length} de les filtracions són de fa cinc anys o més. Un compte oblidat continua acumulant dades i continua sent un lloc per on poden entrar. ${deletable.length > 0 ? `Del directori, es poden esborrar: ${deletable.join(', ')}.` : ''}`.trim(),
        steps: [
          'Repassa la llista i esborra el compte dels serveis que ja no facis servir.',
          'Per als serveis que no tenen opció d’esborrar, demana-ho per escrit exercint el dret de supressió.',
        ],
        because: names(old),
        internalHref: '/eines/diagnostic',
        internalLabel: 'El diagnòstic et dona els passos per esborrar cada compte',
        factors: [{ label: `${old.length} filtracions de fa cinc anys o més`, points: 10 }],
      }),
    )
  }

  if (matched.length >= 5) {
    actions.push(
      action({
        id: 'aliases',
        title: 'Fes servir àlies de correu per als serveis poc importants',
        detail:
          'Un àlies és una adreça que reenvia al teu correu. Si un servei el filtra, l’esborres i aquell servei deixa d’arribar-te. A més, les filtracions deixen de lligar tots els teus comptes a una sola adreça.',
        steps: [
          'Molts proveïdors de correu permeten crear àlies o adreces amb un sufix (nom+botiga@…).',
          'Fes servir la teva adreça principal només per als serveis importants (banc, administració, correu de recuperació).',
        ],
        because: [],
        factors: [{ label: `La teva adreça surt a ${matched.length} filtracions`, points: 5 }],
      }),
    )
  }

  return actions.sort((a, b) => b.priority - a.priority || a.title.localeCompare(b.title, 'ca'))
}
