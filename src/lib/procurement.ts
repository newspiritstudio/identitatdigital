import type { EvidenceStatus } from '@/fields/evidence'

import {
  at,
  compareText,
  factStatus,
  localizedText,
  relationId,
  relationIds,
  resolveOwnershipChain,
  type Corpus,
} from '@/lib/analysis'
import type { App } from '@/payload-types'

/**
 * Fitxa de contractació per a escoles i ajuntaments.
 *
 * Una escola que tria una eina per parlar amb les famílies decideix sobre les
 * dades de milers de persones que no han triat res, i sovint ho fa sense cap
 * expedient. El corpus ja conté la informació que caldria; això la reordena
 * com la necessita qui ha de signar.
 *
 * És una preparació d'expedient: els punts que la normativa obliga a valorar,
 * amb el que en sabem i les fonts. No és un dictamen jurídic, no substitueix
 * l'avaluació d'impacte quan cal fer-la i no diu si s'ha de contractar.
 *
 * Cada alerta porta el precepte que la fa rellevant. Una alerta no vol dir que
 * l'eina sigui il·legal, sinó que l'expedient ha de dir alguna cosa sobre
 * aquest punt.
 */

export type FlagLevel = 'stop' | 'check' | 'ok' | 'unknown'

export type ProcurementFlag = {
  key: string
  /** Títol curt, el que es llegeix a la taula. */
  title: string
  level: FlagLevel
  /** Precepte o norma que fa rellevant aquest punt. */
  basis: string
  /** Què en sabem, en català pla. */
  finding: string
  /** Què ha de fer l'òrgan de contractació. */
  action: string
}

export type ProcurementSheet = {
  slug: string
  name: string
  companyName: string | null
  groupName: string | null
  jurisdiction: string | null
  overall: number | null
  confidence: number | null
  flags: ProcurementFlag[]
  stops: number
  checks: number
  unknowns: number
  /** Alternatives documentades a la fitxa, per si la resposta és «millor una altra». */
  alternatives: { slug: string; name: string; comparability: string | null }[]
}

/* ────────────────────────────── utilitats ───────────────────────────────── */

const yesish = (status: EvidenceStatus): boolean => status === 'yes' || status === 'partial'

// Les constatacions es llegeixen a l'expedient: cap codi intern («yes», «hard») a la vista.
const STATUS_TEXT: Record<EvidenceStatus, string> = {
  yes: 'sí',
  partial: 'parcialment',
  no: 'no',
  unknown: 'no documentat',
  na: 'no aplica',
}
const DIFFICULTY_TEXT: Record<string, string> = {
  easy: 'fàcil',
  medium: 'mitjana',
  hard: 'difícil',
  impossible: 'impossible',
}
const said = (status: EvidenceStatus): string => STATUS_TEXT[status]

const level = (
  bad: boolean,
  good: boolean,
  unknown: boolean,
): FlagLevel => (bad ? 'stop' : unknown ? 'unknown' : good ? 'ok' : 'check')

/* ───────────────────────────── construcció ──────────────────────────────── */

export const buildProcurementSheet = (corpus: Corpus, app: App): ProcurementSheet => {
  const flags: ProcurementFlag[] = []
  const companyId = relationId(app.company)
  const company = companyId === null ? undefined : corpus.companyById.get(companyId)
  const groupId =
    companyId === null ? null : resolveOwnershipChain(companyId, corpus.companyById).rootId
  const group = groupId === null ? undefined : corpus.companyById.get(groupId)

  /* 1. Categories especials de dades. El disparador més clar d'una avaluació
   * d'impacte quan el tractament és a gran escala, que és el cas de qualsevol
   * eina desplegada a tot un centre o a tot un municipi. */
  const rows = Array.isArray(app.dataCollection) ? app.dataCollection : []
  const specialTypes: string[] = []
  for (const row of rows) {
    if (at(row, 'status') === 'no') continue
    const id = relationId(at(row, 'dataType'))
    const dataType = id === null ? undefined : corpus.dataTypeById.get(id)
    if (dataType?.specialCategory === true) {
      const name = localizedText(dataType.name)
      if (name !== null) specialTypes.push(name)
    }
  }
  flags.push({
    key: 'special-categories',
    title: 'Categories especials de dades',
    level: specialTypes.length > 0 ? 'stop' : 'ok',
    basis: 'Arts. 9 i 35.3.b del RGPD; Llista de l’AEPD de tractaments subjectes a avaluació d’impacte',
    finding:
      specialTypes.length > 0
        ? `La fitxa documenta recollida de ${specialTypes.sort(compareText).join(', ')}.`
        : 'No hi ha documentada recollida de categories especials de dades.',
    action:
      specialTypes.length > 0
        ? 'Cal avaluació d’impacte abans de desplegar-ho, i identificar la base jurídica de l’art. 9.2 que empara el tractament. El consentiment de l’alumnat no serveix, perquè en una relació d’autoritat no és lliure.'
        : 'No cal per aquest motiu. Comproveu igualment si concorre algun altre supòsit de l’art. 35.3.',
  })

  /* 2. Transferències internacionals. */
  const transfers = factStatus(at(app, 'sharing.internationalTransfers'))
  const mechanism = at(app, 'sharing.internationalTransfers.mechanism')
  flags.push({
    key: 'transfers',
    title: 'Transferències fora de l’Espai Econòmic Europeu',
    level: level(false, transfers === 'no', transfers === 'unknown'),
    basis: 'Arts. 44 a 49 del RGPD',
    finding:
      transfers === 'unknown'
        ? 'No hem pogut documentar si hi ha transferències internacionals.'
        : transfers === 'no'
          ? 'La fitxa no documenta transferències fora de l’Espai Econòmic Europeu.'
          : `La fitxa documenta transferències internacionals${typeof mechanism === 'string' && mechanism.length > 0 ? ` amb mecanisme declarat: ${mechanism}.` : '.'}`,
    action:
      yesish(transfers)
        ? 'L’expedient ha de recollir el mecanisme (decisió d’adequació, clàusules tipus o norma corporativa vinculant) i, si són clàusules tipus, l’avaluació de l’impacte de la transferència.'
        : 'Demaneu-ho per escrit al proveïdor i deixeu-ne constància a l’expedient.',
  })

  /* 3. Publicitat personalitzada i elaboració de perfils. La línia vermella
   * quan al darrere hi ha menors o hi ha una relació d'autoritat. */
  const ads = factStatus(at(app, 'dataUses.targetedAdvertising'))
  const profiling = factStatus(at(app, 'dataUses.profiling'))
  flags.push({
    key: 'advertising',
    title: 'Publicitat personalitzada i perfils',
    level: yesish(ads) ? 'stop' : ads === 'unknown' && profiling === 'unknown' ? 'unknown' : 'ok',
    basis: 'Considerant 38 i art. 22 del RGPD; art. 28.2 del Reglament (UE) 2022/2065 de serveis digitals',
    finding: `Publicitat personalitzada: ${said(ads)}. Elaboració de perfils: ${said(profiling)}.`,
    action: yesish(ads)
      ? 'El Reglament de serveis digitals prohibeix la publicitat basada en perfils a persones menors d’edat. Si l’eina s’adreça a alumnat, cal justificar per escrit com s’hi impedeix, o descartar-la.'
      : 'Deixeu constància de la comprovació a l’expedient.',
  })

  /* 4. Entrenament de models amb el contingut. */
  const ai = factStatus(at(app, 'dataUses.aiTraining'))
  flags.push({
    key: 'ai-training',
    title: 'Entrenament de models amb el contingut',
    level: yesish(ai) ? 'stop' : ai === 'unknown' ? 'unknown' : 'ok',
    basis: 'Arts. 5.1.b i 6 del RGPD (limitació de la finalitat)',
    finding:
      ai === 'unknown'
        ? 'No hem pogut documentar si el contingut s’utilitza per entrenar models.'
        : yesish(ai)
          ? 'La fitxa documenta que el contingut s’utilitza per entrenar models.'
          : 'La fitxa no documenta ús del contingut per entrenar models.',
    action: yesish(ai)
      ? 'Cal pactar per contracte l’exclusió del contingut de l’entitat, o descartar l’eina, perquè el proveïdor no pot fer un tractament que l’entitat no ha decidit.'
      : 'Feu-ho constar al contracte encara que avui no passi, perquè el que no està escrit pot canviar amb una actualització de les condicions.',
  })

  /* 5. Cessió a tercers i venda a intermediaris de dades. */
  const brokers = factStatus(at(app, 'sharing.dataBrokerSales'))
  const sharing = factStatus(at(app, 'sharing.thirdPartySharing'))
  flags.push({
    key: 'sharing',
    title: 'Cessió a tercers',
    level: yesish(brokers) ? 'stop' : yesish(sharing) ? 'check' : sharing === 'unknown' ? 'unknown' : 'ok',
    basis: 'Art. 28 del RGPD (encarregat del tractament) i art. 44 del RGPD',
    finding: `Cessió a tercers: ${said(sharing)}. Venda a intermediaris de dades: ${said(brokers)}.`,
    action:
      'El contracte d’encarregat ha de llistar els subencarregats i el procediment per oposar-se a un de nou. Sense aquesta llista, l’entitat no pot saber on van les dades de les quals respon.',
  })

  /* 6. Seguretat mínima exigible. */
  const transport = factStatus(at(app, 'security.transportEncryption'))
  const mfa = factStatus(at(app, 'security.mfa'))
  const audits = factStatus(at(app, 'security.independentAudits'))
  const securityUnknown = transport === 'unknown' || mfa === 'unknown'
  flags.push({
    key: 'security',
    title: 'Mesures de seguretat',
    level: securityUnknown ? 'unknown' : yesish(transport) && yesish(mfa) ? 'ok' : 'check',
    basis: 'Art. 32 del RGPD i Reial decret 311/2022, de l’Esquema Nacional de Seguretat',
    finding: `Xifratge en trànsit: ${said(transport)}. Verificació en dos passos: ${said(mfa)}. Auditories independents: ${said(audits)}.`,
    action:
      'Per a una entitat del sector públic cal declarar la categoria del sistema segons l’Esquema Nacional de Seguretat i comprovar que el proveïdor acredita les mesures del nivell corresponent.',
  })

  /* 7. Portabilitat i sortida. Contractar sense saber com se surt és
   * contractar per sempre. */
  const exportFact = factStatus(at(app, 'userRights.dataExport'))
  const difficulty = at(app, 'deletion.difficulty')
  flags.push({
    key: 'exit',
    title: 'Sortida i portabilitat',
    level:
      exportFact === 'unknown'
        ? 'unknown'
        : yesish(exportFact) && difficulty !== 'hard' && difficulty !== 'impossible'
          ? 'ok'
          : 'check',
    basis: 'Art. 20 del RGPD i art. 28.3.g (retorn o supressió en acabar el servei)',
    finding: `Exportació de dades: ${said(exportFact)}. Dificultat declarada d’eliminar el compte: ${(typeof difficulty === 'string' ? DIFFICULTY_TEXT[difficulty] : undefined) ?? 'desconeguda'}.`,
    action:
      'El contracte ha de fixar el format i el termini de retorn de les dades en acabar, i la supressió posterior amb certificat. Sense aquestes condicions, l’entitat queda lligada al proveïdor.',
  })

  /* 8. Patrons enganyosos. Rellevants en contractació pública perquè
   * condicionen el consentiment de les famílies, no el de l'entitat. */
  const patterns = at(app, 'controls.darkPatternList')
  const patternCount = Array.isArray(patterns) ? patterns.length : 0
  flags.push({
    key: 'dark-patterns',
    title: 'Patrons enganyosos documentats',
    level: patternCount >= 3 ? 'stop' : patternCount > 0 ? 'check' : 'ok',
    basis: 'Art. 25 del Reglament (UE) 2022/2065 i art. 7.4 del RGPD',
    finding:
      patternCount === 0
        ? 'No n’hi ha cap de documentat a la fitxa.'
        : `${patternCount} ${patternCount === 1 ? 'patró documentat' : 'patrons documentats'} a la fitxa.`,
    action:
      patternCount > 0
        ? 'Si l’eina demana consentiments a les famílies amb aquests patrons, el consentiment obtingut és discutible i l’entitat no s’hi pot emparar.'
        : 'Deixeu constància de la comprovació.',
  })

  /* 9. Incidents i sancions del grup. */
  const appIncidents = corpus.incidents.filter((incident) => {
    const apps = relationIds(incident.apps)
    if (apps.includes(String(app.id))) return true
    const incidentCompany = relationId(incident.company)
    return incidentCompany !== null && incidentCompany === companyId
  })
  flags.push({
    key: 'incidents',
    title: 'Incidents i sancions documentats',
    level: appIncidents.length >= 2 ? 'check' : 'ok',
    basis: 'Art. 71 de la Llei 9/2017 de contractes del sector públic (prohibicions de contractar) i art. 28.1 del RGPD (garanties suficients)',
    finding:
      appIncidents.length === 0
        ? 'No n’hi ha cap de documentat al directori.'
        : `${appIncidents.length} ${appIncidents.length === 1 ? 'incident documentat' : 'incidents documentats'} associats a aquesta fitxa o a la seva empresa.`,
    action:
      'L’art. 28.1 del RGPD exigeix triar un encarregat que ofereixi garanties suficients. Un historial de sancions no ho impedeix, però obliga a raonar-ho a l’expedient.',
  })

  /* 10. Llengua. Obligació pròpia de l'administració catalana. */
  const catalan = factStatus(at(app, 'catalan.interfaceAvailable'))
  flags.push({
    key: 'catalan',
    title: 'Disponibilitat en català',
    level: yesish(catalan) ? 'ok' : catalan === 'unknown' ? 'unknown' : 'check',
    basis: 'Arts. 9 i 30 de la Llei 1/1998 de política lingüística i art. 50.1 de l’Estatut d’autonomia',
    finding:
      catalan === 'unknown'
        ? 'No comprovat.'
        : yesish(catalan)
          ? 'La botiga declara el català entre els idiomes d’interfície.'
          : 'La botiga no declara el català entre els idiomes d’interfície.',
    action:
      'Les administracions catalanes han d’emprar el català en les seves actuacions. Si l’eina no hi és disponible, cal justificar-ho o incloure la disponibilitat en català com a criteri o com a condició especial d’execució.',
  })

  const alternatives: ProcurementSheet['alternatives'] = []
  const altList = Array.isArray(app.alternatives) ? app.alternatives : []
  for (const entry of altList) {
    const id = relationId(at(entry, 'app'))
    const alt = id === null ? undefined : corpus.appById.get(id)
    if (alt === undefined) continue
    const name = localizedText(alt.name)
    if (alt.slug === undefined || alt.slug === null || name === null) continue
    const comparability = at(entry, 'comparability')
    alternatives.push({
      slug: alt.slug,
      name,
      comparability: typeof comparability === 'string' ? comparability : null,
    })
  }

  const overall = at(app, 'scores.overall')
  const confidence = at(app, 'scores.confidence')

  return {
    slug: app.slug ?? '',
    name: localizedText(app.name) ?? '',
    companyName: company === undefined ? null : localizedText(company.name),
    groupName: group === undefined ? null : localizedText(group.name),
    jurisdiction: typeof app.jurisdiction === 'string' ? app.jurisdiction : null,
    overall: typeof overall === 'number' ? overall : null,
    confidence: typeof confidence === 'number' ? confidence : null,
    flags,
    stops: flags.filter((flag) => flag.level === 'stop').length,
    checks: flags.filter((flag) => flag.level === 'check').length,
    unknowns: flags.filter((flag) => flag.level === 'unknown').length,
    alternatives,
  }
}

export const FLAG_LABELS: Record<FlagLevel, string> = {
  stop: 'Atenció',
  check: 'A comprovar',
  ok: 'Sense alerta',
  unknown: 'No comprovat',
}
