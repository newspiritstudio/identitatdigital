import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 01 de la segona onada: serveis de Google (Classroom, Gemini, Drive,
 * Documents, Authenticator, Fulls de càlcul, Calendar, Traductor, Fotos i
 * YouTube Music).
 *
 * Comparteixen política de privadesa, compte i controls amb les fitxes de
 * Google de la primera onada, i en reutilitzen les fonts generals. Cada fitxa
 * afegeix l’etiqueta de privadesa de l’App Store i les pàgines d’ajuda
 * pròpies del servei, que és on hi ha les diferències que importen.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const GOOGLE_LINKS = {
  privacyPolicy: 'https://policies.google.com/privacy',
  privacyCenter: 'https://myaccount.google.com/data-and-privacy',
}

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

const googleRights = {
  dataExport: f('yes', 'official', ['google-takeout-help'], 'Google Takeout permet exportar les dades de cada servei per separat en formats estàndard.', {
    url: 'https://takeout.google.com/',
  }),
  exportFormatQuality: 'open' as const,
  rightsExercise: f('yes', 'official', ['google-privacy-policy'], 'La política preveu els drets del RGPD i un formulari per exercir-los.', {
    url: 'https://support.google.com/policies/troubleshooter/9009584',
    responseTimeDays: 30,
  }),
}

const googleSecurity = {
  e2ee: f('no', 'official', ['google-privacy-policy'], 'Google pot accedir tècnicament al contingut allotjat als seus servidors; no hi ha xifratge d’extrem a extrem als comptes personals.', { scope: 'none' }),
  transportEncryption: f('yes', 'official', ['google-safety-center']),
  atRestEncryption: f('yes', 'official', ['google-safety-center'], 'Xifratge en repòs amb claus gestionades per Google.'),
  mfa: f('yes', 'official', ['google-safety-center'], 'Verificació en dos passos del compte de Google amb claus d’accés, claus físiques, aplicació d’autenticació, notificació i SMS.', {
    methods: ['passkey', 'hardware-key', 'totp', 'app-push', 'sms'],
  }),
  independentAudits: f('yes', 'official', ['google-safety-center'], 'Certificacions ISO 27001, ISO 27701 i informes SOC auditats per tercers.', {
    url: 'https://safety.google/',
  }),
  bugBounty: f('yes', 'official', ['google-safety-center'], 'Els serveis de Google entren al programa de recompenses per vulnerabilitats de Google.', {
    url: 'https://bughunters.google.com/',
  }),
  vulnerabilityDisclosure: f('yes', 'official', ['google-safety-center'], 'Canal públic de notificació de vulnerabilitats a través de Google Bug Hunters.'),
}

const googleSharing = {
  thirdPartySharing: f('partial', 'official', ['google-privacy-policy'], 'Amb proveïdors que tracten dades per compte de Google, amb aplicacions de tercers que la persona autoritza i per requeriment legal.'),
  intraGroupSharing: f('yes', 'official', ['google-privacy-policy'], 'Política única i un sol compte per a tots els serveis de Google.'),
  dataBrokerSales: f('no', 'official', ['google-privacy-policy'], 'Google declara que no ven informació personal.'),
  internationalTransfers: f('yes', 'official', ['google-privacy-policy'], 'Les dades es poden tractar en servidors de fora de l’Espai Econòmic Europeu sota els marcs de transferència que Google declara.', { mechanism: 'adequacy' }),
}

const googleTransparency = {
  transparencyReport: f('yes', 'official', ['google-transparency-report'], 'Informe de transparència amb les peticions governamentals de dades.', {
    url: 'https://transparencyreport.google.com/',
  }),
}

const googleDeletionSteps = [
  'Entra a myaccount.google.com i obre «Dades i privadesa».',
  'A «Més opcions», tria «Suprimeix un servei de Google» o «Suprimeix el teu compte de Google».',
  'Si vols conservar les dades, descarrega-les abans amb Google Takeout.',
  'Revisa què es perdrà, confirma amb la contrasenya i accepta l’eliminació.',
]

const accountObstacle =
  'Eliminar el compte de Google fa perdre alhora Gmail, Drive, Fotos, YouTube i les compres digitals. Aquest acoblament fa difícil marxar d’un sol servei sense tocar la resta.'

const labelNote = 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar entre aplicacions i llocs d’altres empreses.'

/* ═══════════════════════ Google Classroom ═══════════════════════ */
const classroom: AppSeed = {
  slug: 'google-classroom',
  name: 'Google Classroom',
  company: 'google-ireland',
  categories: ['educacio'],
  tagline: 'Aula digital sense publicitat als comptes escolars, però amb dades d’infants gestionades per l’escola i per Google',
  summary:
    'Amb un compte de Google Workspace for Education, Classroom és un «servei principal»: no mostra anuncis i Google es compromet a no fer servir les dades amb finalitats publicitàries. Qui decideix sobre les dades és el centre educatiu, que pot veure l’activitat de l’alumnat i controla els comptes. L’autoritat danesa va concloure que Google no podia fer servir les dades escolars per millorar els seus productes sense una base legal clara.',
  platforms: ['web', 'ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu; als comptes escolars, el centre és el responsable del tractament',
  links: { website: 'https://classroom.google.com/', ...GOOGLE_LINKS, appStore: appStore('924620788') },
  accountRequired: f('yes', 'official', ['google-classroom-edu-privacy'], 'Cal un compte de Google, normalment el que proporciona el centre educatiu.'),
  openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Classroom concentra treballs, qualificacions, comentaris del professorat i patrons d’activitat de menors. En conjunt, dibuixa el rendiment acadèmic i el comportament d’una persona durant anys, amb un nivell de detall que cap altre servei d’aquest lot recull sobre infants.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-classroom-app-store', 'google-classroom-edu-privacy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-classroom-app-store'] }),
    row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-classroom-app-store', 'google-classroom-edu-privacy'], note: 'Treballs, lliuraments i comentaris; l’etiqueta ho declara com a «altre contingut de l’usuari».' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-classroom-app-store'] }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-classroom-app-store'] }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-classroom-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-classroom-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-classroom-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-classroom-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['google-classroom-app-store', 'google-classroom-datatilsynet-2024'], note: 'L’administració del centre pot consultar l’activitat de l’alumnat.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['google-classroom-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['google-classroom-app-store'], labelNote),
    advertisingIdentifiers: f('no', 'official', ['google-classroom-edu-privacy'], 'Els serveis principals de Workspace for Education no mostren anuncis.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['google-classroom-edu-privacy'], 'La política de Workspace for Education diu que als serveis principals no hi ha anuncis i que la informació personal no es fa servir amb finalitats publicitàries. Amb un compte personal s’aplica la política general de Google.'),
    profiling: f('partial', 'regulator', ['google-classroom-datatilsynet-2024'], 'L’autoritat danesa va constatar que Google feia servir dades de l’alumnat per mantenir, mesurar i desenvolupar Workspace for Education, ChromeOS i Chrome.'),
    aiTraining: f('no', 'official', ['google-classroom-genai-privacy'], 'Als comptes de Workspace, Google diu que el contingut no el revisen persones ni s’usa per entrenar models fora del domini sense permís.'),
  },
  sharing: {
    ...googleSharing,
    thirdPartySharing: f('partial', 'official', ['google-classroom-edu-privacy'], 'L’administració del centre i els revenedors que gestionen el compte hi tenen accés.'),
  },
  transparency: { policyClarity: 'medium', ...googleTransparency },
  retention: {
    definedPeriods: f('partial', 'official', ['google-classroom-edu-privacy'], 'Els terminis els decideix el centre com a responsable del tractament; la política no fixa terminis propis de Classroom.'),
    dataAfterDeletion: f('partial', 'official', ['google-classroom-archive-delete'], 'Quan s’elimina una classe, els fitxers continuen a la carpeta de Drive i cal esborrar-los a part.'),
  },
  accountDeletion: {
    possible: f('partial', 'official', ['google-classroom-edu-privacy', 'google-delete-account'], 'Amb un compte escolar, només l’administració del centre pot eliminar-lo. Amb un compte personal, s’elimina amb el compte de Google.'),
    selfService: f('partial', 'official', ['google-classroom-edu-privacy', 'google-classroom-archive-delete'], 'L’alumnat no pot eliminar el compte escolar pel seu compte. El professorat principal pot arxivar i eliminar les classes.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Amb un compte escolar, demana al centre que elimini el compte o les dades.',
      'Per eliminar una classe, el professorat principal l’ha d’arxivar primer i després triar «Suprimeix».',
      'Esborra a part la carpeta de la classe a Google Drive, que no s’elimina amb la classe.',
      'Amb un compte personal, segueix el procés general d’eliminació del compte de Google.',
    ],
    obstacles: 'L’alumnat depèn del centre per eliminar el compte i les dades. Els fitxers de la classe queden a Drive si no s’esborren expressament.',
    dataRetained: 'Els fitxers de Drive associats a la classe i el que decideixi conservar el centre.',
    sources: ['google-classroom-edu-privacy', 'google-classroom-archive-delete'],
  },
  userRights: {
    ...googleRights,
    rightsExercise: f('partial', 'official', ['google-classroom-edu-privacy'], 'Als comptes escolars, els drets s’exerceixen primer davant del centre, que és el responsable del tractament.'),
  },
  controls: {
    adPersonalizationOptOut: na('Els serveis principals de Workspace for Education no mostren anuncis.'),
    telemetryOptOut: unknown('No hem trobat cap opció per desactivar la recollida de dades d’ús dins de Classroom.'),
    granularControls: f('partial', 'official', ['google-classroom-edu-privacy'], 'Els controls són sobretot de l’administració del centre, que pot limitar serveis i accessos.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a Classroom.'),
  },
  security: googleSecurity,
  alternatives: [
    {
      app: 'moodle',
      comparability: 'partial',
      rationale: 'Moodle és programari lliure i el centre o l’administració educativa el pot allotjar en servidors propis, de manera que les dades de l’alumnat no passen per una empresa publicitària.',
      tradeOffs: 'Cal manteniment tècnic i no s’integra de manera nativa amb Documents ni Drive.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La fitxa descriu sobretot l’ús amb un compte escolar, que és el majoritari. Amb un compte personal, Classroom queda sota la política general de Google i sense les garanties contractuals de Workspace for Education.',
    openQuestions: [
      'Google ha deixat de fer servir a tota la UE les dades escolars per millorar productes, o només als municipis danesos que ho van exigir?',
    ],
  },
}

/* ═══════════════════════ Google Gemini ═══════════════════════ */
const gemini: AppSeed = {
  slug: 'google-gemini',
  name: 'Google Gemini',
  company: 'google-ireland',
  categories: ['assistents-d-ia'],
  tagline: 'Les converses s’usen per entrenar models i una part la revisen persones, que la conserven fins a tres anys',
  summary:
    'Gemini és l’assistent d’IA de Google i, per defecte, desa les converses 18 mesos i les fa servir per millorar els models. Persones revisores, també d’empreses externes, llegeixen una part de les converses, que es desvinculen del compte i es poden conservar fins a tres anys encara que s’esborri l’activitat. Es pot desactivar l’opció «Conserva l’activitat», però Google continua desant les converses 72 hores.',
  platforms: ['web', 'ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: { website: 'https://gemini.google.com/', ...GOOGLE_LINKS, privacyCenter: 'https://support.google.com/gemini/answer/13594961', appStore: appStore('6477489729') },
  accountRequired: f('yes', 'official', ['google-gemini-privacy-hub'], 'L’aplicació funciona amb el compte de Google.'),
  openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'A un assistent s’hi expliquen coses que no es cercarien enlloc: salut, relacions, feina, dubtes legals. Si s’hi connecten altres aplicacions, Gemini hi afegeix correus, documents, ubicació i contactes. L’etiqueta de l’App Store declara fins i tot «dades sensibles» per personalitzar el producte.',
  dataCollection: [
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'millora-del-producte', 'entrenament-de-models-dia'], sources: ['google-gemini-privacy-hub', 'google-gemini-app-store'], note: 'Les peticions i les respostes. Una part la revisen persones.' }),
    row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['google-gemini-privacy-hub'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-gemini-privacy-hub', 'google-gemini-app-store'] }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['google-gemini-privacy-hub', 'google-gemini-app-store'], note: 'Gemini Live desa transcripcions i enregistraments.' }),
    row('dades-de-salut', 'unknown', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts'], sources: ['google-gemini-app-store'], note: 'L’etiqueta declara «dades sensibles» per personalitzar el producte sense concretar-ne el tipus.' }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-gemini-privacy-hub', 'google-gemini-app-store'], note: 'Només amb permís; es desa reduïda a una zona general.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-gemini-privacy-hub', 'google-gemini-app-store'], note: 'L’etiqueta la declara també per a publicitat o màrqueting del desenvolupador.' }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-gemini-privacy-hub', 'google-gemini-app-store'] }),
    row('metadades-de-comunicacio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-gemini-privacy-hub'], note: 'Registres de trucades i missatges, si es connecten.' }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['google-gemini-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['google-gemini-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-gemini-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-gemini-app-store'], note: 'Declarada també per a publicitat o màrqueting del desenvolupador.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-gemini-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['google-gemini-privacy-hub', 'google-gemini-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['google-gemini-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['google-gemini-app-store'], labelNote),
    advertisingIdentifiers: unknown('No hem trobat cap declaració sobre l’ús de l’identificador publicitari del dispositiu.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['google-gemini-privacy-hub'], 'Google diu que les converses de Gemini no s’utilitzen per mostrar anuncis i que avisarà si això canvia. L’etiqueta, però, declara ubicació, correu, nom i identificador per a màrqueting propi.'),
    profiling: f('partial', 'official', ['google-gemini-privacy-hub', 'google-gemini-app-store'], 'Gemini pot personalitzar les respostes amb dades d’altres serveis de Google i de les aplicacions connectades.'),
    aiTraining: f('yes', 'official', ['google-gemini-privacy-hub'], 'Amb «Conserva l’activitat» activada, que és l’opció per defecte, les converses s’utilitzen per millorar els models generatius. Si es desactiva, deixen de fer-s’hi servir, excepte si s’envien comentaris.', {
      optOutUrl: 'https://myactivity.google.com/product/gemini',
    }),
  },
  sharing: {
    ...googleSharing,
    thirdPartySharing: f('partial', 'official', ['google-gemini-privacy-hub'], 'Persones revisores d’empreses proveïdores llegeixen una part de les converses. Les aplicacions connectades intercanvien dades amb Gemini.'),
  },
  transparency: { policyClarity: 'medium', ...googleTransparency },
  retention: {
    definedPeriods: f('yes', 'official', ['google-gemini-privacy-hub'], 'Esborrat automàtic als 18 mesos per defecte, configurable a 3 o 36 mesos o sense límit.'),
    dataAfterDeletion: f('partial', 'official', ['google-gemini-privacy-hub'], 'Les converses revisades per persones es conserven fins a tres anys, desvinculades del compte, encara que s’esborri l’activitat.'),
    periods: [
      { dataType: 'contingut-de-missatges', period: '18 mesos per defecte; configurable a 3 o 36 mesos', sources: ['google-gemini-privacy-hub'] },
      { dataType: 'contingut-de-missatges', period: '72 hores amb «Conserva l’activitat» desactivada', sources: ['google-gemini-privacy-hub'] },
      { dataType: 'contingut-de-missatges', period: 'Fins a 3 anys per a les converses revisades per persones', sources: ['google-gemini-privacy-hub'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['google-gemini-privacy-hub', 'google-delete-account'], 'L’activitat de Gemini es pot esborrar sense tocar el compte; el compte s’elimina amb el procés general de Google.'),
    selfService: f('yes', 'official', ['google-delete-account']),
    directUrl: 'https://myactivity.google.com/product/gemini',
    difficulty: 'easy',
    waitingPeriodDays: 0,
    requiresSupportContact: false,
    steps: [
      'Obre myactivity.google.com/product/gemini o, a l’aplicació, el menú d’activitat de Gemini.',
      'Desactiva «Conserva l’activitat» si no vols que es desin les converses futures.',
      'Esborra l’activitat desada per interval de temps o tota.',
      'Per eliminar el compte sencer, segueix el procés general del compte de Google.',
    ],
    obstacles: 'Esborrar l’activitat no elimina les converses que ja han revisat persones, que es poden conservar fins a tres anys.',
    dataRetained: 'Converses revisades per persones, desvinculades del compte, fins a tres anys.',
    sources: ['google-gemini-privacy-hub', 'google-delete-account'],
  },
  userRights: googleRights,
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['google-ad-center'], 'La personalització dels anuncis del compte es gestiona al Centre d’anuncis.', { url: 'https://myadcenter.google.com/' }),
    telemetryOptOut: f('partial', 'official', ['google-gemini-privacy-hub'], 'Es pot desactivar «Conserva l’activitat», però les converses es desen igualment 72 hores.'),
    granularControls: f('yes', 'official', ['google-gemini-privacy-hub'], 'Control de l’activitat, esborrat automàtic i connexió aplicació per aplicació.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'press', ['google-gemini-malwarebytes-apps-2025'], 'El juliol de 2025, Google va avisar per correu que Gemini podria fer servir Telèfon, Missatges i WhatsApp a Android tant si l’activitat estava activada com si no, amb missatges contradictoris sobre com desactivar-ho.'),
    darkPatternList: [
      {
        type: 'preselected',
        severity: 'medium',
        description: 'L’ús de les converses per entrenar models ve activat per defecte i cal desactivar «Conserva l’activitat» per evitar-ho.',
        sources: ['google-gemini-privacy-hub'],
      },
      {
        type: 'confusing-language',
        severity: 'medium',
        description: 'L’avís sobre l’accés de Gemini a les aplicacions d’Android deia alhora que s’activaria independentment de l’activitat i que el que ja estava desactivat continuaria desactivat.',
        sources: ['google-gemini-malwarebytes-apps-2025'],
      },
    ],
  },
  security: googleSecurity,
  alternatives: [
    {
      app: 'duckduckgo',
      comparability: 'partial',
      rationale: 'Duck.ai, dins de DuckDuckGo, dona accés a diversos models d’IA sense compte i fent d’intermediari perquè el proveïdor del model no rebi l’adreça IP de la persona.',
      tradeOffs: 'No té accés a correus, documents ni aplicacions, ni les funcions multimodals avançades de Gemini.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La combinació de revisió humana, entrenament activat per defecte i conservació de tres anys de les converses revisades és el punt clau de la fitxa. Amb un compte de Workspace o de Workspace for Education les condicions són molt diferents: no hi ha revisió humana ni entrenament.',
    openQuestions: [
      'Quin resultat tindrà la investigació de l’autoritat irlandesa sobre l’entrenament de PaLM 2 amb dades europees?',
      'Quines «dades sensibles» declara l’etiqueta de l’App Store i per a què es fan servir exactament?',
    ],
  },
}

/* ═══════════════════════ Google Drive ═══════════════════════ */
const drive: AppSeed = {
  slug: 'google-drive',
  name: 'Google Drive',
  company: 'google-ireland',
  categories: ['emmagatzematge-al-nuvol'],
  tagline: 'Emmagatzematge sense ús publicitari del contingut, però sense xifratge d’extrem a extrem',
  summary:
    'Google es compromet a no fer servir el contingut de Drive per a publicitat ni per entrenar els seus models d’IA. Els fitxers es xifren en trànsit i en repòs amb claus de Google, que els analitza per detectar brossa, programari maliciós i abusos. El xifratge del costat del client només existeix per a clients empresarials, de manera que als comptes personals Google hi té accés tècnic.',
  platforms: ['web', 'ios', 'android', 'windows', 'macos'],
  businessModel: 'freemium',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: { website: 'https://drive.google.com/', ...GOOGLE_LINKS, appStore: appStore('507874739') },
  accountRequired: f('yes', 'official', ['google-privacy-policy'], 'Cal un compte de Google.'),
  openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Drive sol contenir el més delicat que té una persona en format digital: documents d’identitat, contractes, informes mèdics, declaracions de la renda i còpies de seguretat. La confidencialitat depèn de les garanties de Google, no de la criptografia.',
  dataCollection: [
    row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['google-drive-privacy', 'google-drive-app-store'], note: 'Google els analitza per detectar brossa, programari maliciós i abusos; no per a publicitat.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-drive-app-store'] }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-drive-app-store'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-drive-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-drive-app-store'] }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-drive-app-store'], note: 'Per compartir fitxers amb altres persones.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-drive-app-store'] }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-drive-app-store'], note: 'Subscripcions d’emmagatzematge de Google One.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-drive-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-drive-app-store'], note: 'L’etiqueta declara l’identificador d’usuari i de dispositiu per a publicitat o màrqueting del desenvolupador.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['google-drive-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['google-drive-app-store', 'google-drive-privacy'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['google-drive-app-store'], labelNote),
    advertisingIdentifiers: unknown('No hem trobat cap declaració sobre l’ús de l’identificador publicitari del dispositiu.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['google-drive-privacy', 'google-drive-ads-data'], 'Google diu que no fa servir el contingut de Drive per a publicitat. L’etiqueta declara, però, identificadors per a màrqueting propi.'),
    profiling: f('partial', 'official', ['google-drive-app-store'], 'Contactes, cerques i contingut es fan servir per personalitzar el producte, no per a perfils publicitaris.'),
    aiTraining: f('no', 'official', ['google-docs-privacy-basics', 'google-docs-gemini-data'], 'Google diu que no analitza els fitxers privats de Drive per entrenar els seus models fundacionals, com Gemini.'),
  },
  sharing: googleSharing,
  transparency: { policyClarity: 'medium', ...googleTransparency },
  retention: {
    definedPeriods: f('yes', 'official', ['google-drive-trash', 'google-drive-inactive-accounts'], 'Els fitxers es conserven fins que s’esborren; la paperera es buida als 30 dies i un compte personal inactiu durant dos anys es pot eliminar.'),
    dataAfterDeletion: f('partial', 'official', ['google-drive-trash', 'google-delete-account'], 'Els fitxers esborrats definitivament no es poden recuperar, però els que eren d’altres persones i s’havien compartit continuen existint.'),
    periods: [
      { dataType: 'fitxers-i-documents', period: '30 dies a la paperera abans de l’eliminació definitiva', sources: ['google-drive-trash'] },
      { dataType: 'fitxers-i-documents', period: 'Compte personal inactiu durant 2 anys: Google es reserva el dret d’eliminar-lo', sources: ['google-drive-inactive-accounts'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['google-delete-account', 'google-drive-trash'], 'Es poden esborrar els fitxers i buidar la paperera sense eliminar el compte, o eliminar el compte sencer.'),
    selfService: f('yes', 'official', ['google-delete-account']),
    directUrl: 'https://myaccount.google.com/deleteservices',
    difficulty: 'easy',
    waitingPeriodDays: 0,
    requiresSupportContact: false,
    steps: googleDeletionSteps,
    obstacles: accountObstacle,
    dataRetained: 'Els fitxers que altres persones han copiat o que pertanyen a altres comptes. Registres de seguretat i dades requerides per obligacions legals.',
    sources: ['google-delete-account', 'google-drive-trash'],
  },
  userRights: googleRights,
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['google-ad-center'], undefined, { url: 'https://myadcenter.google.com/' }),
    telemetryOptOut: unknown('No hem trobat cap opció per desactivar les dades de rendiment i d’errors de l’aplicació.'),
    granularControls: f('yes', 'official', ['google-docs-privacy-basics'], 'Cada fitxer és restringit per defecte i es pot compartir amb persones concretes o per enllaç.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a Drive.'),
  },
  security: {
    ...googleSecurity,
    e2ee: f('no', 'official', ['google-drive-privacy'], 'Els fitxers es xifren en trànsit i en repòs amb claus de Google. El xifratge del costat del client només és per a determinades llicències de Workspace.', { scope: 'none' }),
    atRestEncryption: f('yes', 'official', ['google-drive-privacy'], 'Xifratge en repòs als centres de dades de Google.'),
    transportEncryption: f('yes', 'official', ['google-drive-privacy']),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Hi ha una contradicció aparent entre el compromís de no fer servir Drive per a publicitat i l’etiqueta de l’App Store, que declara identificadors per a publicitat o màrqueting del desenvolupador. Probablement es refereix a promocions de Google One, però no ho hem pogut confirmar.',
    openQuestions: [
      'A què es refereix exactament l’ús d’identificadors per a màrqueting propi que declara l’etiqueta de l’App Store?',
    ],
  },
}

/* ═══════════════════════ Documents de Google ═══════════════════════ */
const docs: AppSeed = {
  slug: 'google-docs',
  name: 'Documents de Google',
  company: 'google-ireland',
  categories: ['ofimatica-i-productivitat'],
  tagline: 'Editor de textos al núvol amb compromís de no fer servir el contingut per a anuncis ni per entrenar IA',
  summary:
    'Documents desa cada text als servidors de Google, amb tot l’historial de versions i els comentaris. Google diu que no fa servir aquest contingut per a publicitat ni per entrenar els seus models fundacionals i que només hi accedeix amb permís o per obligació legal. No hi ha xifratge d’extrem a extrem als comptes personals.',
  platforms: ['web', 'ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: { website: 'https://docs.google.com/', ...GOOGLE_LINKS, appStore: appStore('842842640') },
  accountRequired: f('yes', 'official', ['google-privacy-policy'], 'Cal un compte de Google per crear i editar documents.'),
  openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Els documents poden contenir qualsevol cosa, des d’un currículum fins a un diari personal. L’historial de versions guarda també el que s’ha esborrat i qui ho ha escrit, i els comentaris revelen col·laboracions i relacions de feina.',
  dataCollection: [
    row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['google-docs-privacy-basics', 'google-docs-app-store'], note: 'S’analitzen per detectar brossa, programari maliciós i abusos.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-docs-app-store'] }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-docs-app-store'], note: 'Dictat per veu.' }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-docs-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-docs-app-store'] }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-docs-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-docs-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-docs-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-docs-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['google-docs-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['google-docs-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['google-docs-app-store'], labelNote),
    advertisingIdentifiers: unknown('No hem trobat cap declaració sobre l’ús de l’identificador publicitari del dispositiu.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['google-docs-privacy-basics'], 'Google diu que no fa servir la informació de Documents, Fulls de càlcul i Presentacions amb finalitats publicitàries.'),
    profiling: f('no', 'official', ['google-docs-app-store'], 'L’etiqueta no declara cap ús publicitari; el contingut es fa servir per personalitzar el producte.'),
    aiTraining: f('no', 'official', ['google-docs-privacy-basics', 'google-docs-gemini-data'], 'Google diu que no analitza el contingut privat de Documents per entrenar models fundacionals. Si s’envia contingut a l’aplicació Gemini, s’hi apliquen les condicions de Gemini.'),
  },
  sharing: {
    ...googleSharing,
    thirdPartySharing: f('partial', 'official', ['google-docs-privacy-basics'], 'Google hi accedeix només amb permís o per obligació legal. Els complements de tercers accedeixen als documents si la persona els autoritza.'),
  },
  transparency: { policyClarity: 'high', ...googleTransparency },
  retention: {
    definedPeriods: f('partial', 'official', ['google-drive-trash'], 'Els documents es conserven fins que s’esborren; la paperera de Drive es buida als 30 dies.'),
    dataAfterDeletion: f('partial', 'official', ['google-drive-trash'], 'Les còpies i els documents compartits que són d’altres persones no s’eliminen.'),
    periods: [
      { dataType: 'fitxers-i-documents', period: '30 dies a la paperera abans de l’eliminació definitiva', sources: ['google-drive-trash'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['google-delete-account', 'google-drive-trash'], 'Els documents s’esborren des de Drive; el compte s’elimina amb el procés general.'),
    selfService: f('yes', 'official', ['google-delete-account']),
    directUrl: 'https://myaccount.google.com/deleteservices',
    difficulty: 'easy',
    waitingPeriodDays: 0,
    requiresSupportContact: false,
    steps: googleDeletionSteps,
    obstacles: accountObstacle,
    dataRetained: 'Els documents de què altres persones són propietàries i les còpies que n’hagin fet.',
    sources: ['google-delete-account'],
  },
  userRights: googleRights,
  controls: {
    adPersonalizationOptOut: na('Google diu que el contingut de Documents no es fa servir per a publicitat.'),
    telemetryOptOut: unknown('No hem trobat cap opció per desactivar les dades d’ús i de diagnòstic de l’aplicació.'),
    granularControls: f('yes', 'official', ['google-docs-privacy-basics'], 'Els documents són restringits per defecte; es poden compartir amb persones concretes, per enllaç o amb permisos de lectura, comentari o edició.'),
    defaultPosture: 'protective',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a Documents.'),
  },
  security: {
    ...googleSecurity,
    e2ee: f('no', 'official', ['google-docs-privacy-basics'], 'Xifratge en trànsit i en repòs amb claus de Google; no d’extrem a extrem als comptes personals.', { scope: 'none' }),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'L’incident del 2017 mostra un risc propi dels serveis de col·laboració: un enllaç que imita una invitació a editar un document i demana permisos amplis al compte.',
  },
}

/* ═══════════════════════ Google Authenticator ═══════════════════════ */
const authenticator: AppSeed = {
  slug: 'google-authenticator',
  name: 'Google Authenticator',
  company: 'google-ireland',
  categories: ['autenticacio-i-seguretat'],
  tagline: 'Codis de verificació que es poden fer servir sense compte, però que se sincronitzen sense xifratge d’extrem a extrem',
  summary:
    'Authenticator genera els codis d’un sol ús de la verificació en dos passos. Es pot fer servir sense compte i amb els codis només al dispositiu, però si s’inicia sessió els secrets es copien al compte de Google. El 2023 es va demostrar que aquesta sincronització no era d’extrem a extrem, i un atac a Retool va aprofitar aquest disseny per obtenir tots els codis d’un empleat. Google va anunciar que hi afegiria xifratge d’extrem a extrem, però no hem pogut confirmar que ho hagi fet.',
  platforms: ['ios', 'android'],
  businessModel: 'unknown',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: { website: 'https://support.google.com/accounts/answer/1066447', ...GOOGLE_LINKS, appStore: appStore('388497605') },
  accountRequired: f('no', 'official', ['google-authenticator-help'], 'Es pot fer servir sense compte; en aquest cas els codis no es copien a altres dispositius.'),
  openSource: f('no', 'official', ['google-authenticator-github'], 'El repositori públic, arxivat el 2021, no correspon a les aplicacions actuals de les botigues, que han divergit del codi publicat.', {
    repositoryUrl: 'https://github.com/google/google-authenticator',
    licence: 'Privativa (el codi antic publicat era Apache 2.0)',
  }),
  dataSummary:
    'Els secrets dels codis donen accés, juntament amb la contrasenya, a tots els comptes protegits. Si se sincronitzen amb el compte de Google, qui controli aquest compte controla també el segon factor de tota la resta.',
  dataCollection: [
    row('testimoni-d-autenticacio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-authenticator-help', 'google-authenticator-mysk-2023'], level: 'official', note: 'Els secrets dels codis s’envien al compte de Google només si s’hi inicia sessió.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-authenticator-app-store'] }),
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-authenticator-app-store'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-authenticator-app-store'], note: 'Escaneig de codis QR amb la càmera.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-authenticator-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['google-authenticator-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['google-authenticator-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['google-authenticator-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['google-authenticator-app-store'], labelNote),
    advertisingIdentifiers: f('no', 'official', ['google-authenticator-app-store'], 'L’etiqueta no declara cap ús publicitari.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['google-authenticator-app-store'], 'L’etiqueta no declara cap finalitat publicitària.'),
    profiling: f('no', 'official', ['google-authenticator-app-store'], 'L’etiqueta només declara identificadors i dades d’ús per personalitzar el producte.'),
    aiTraining: unknown('No hi ha cap informació sobre aquest punt.'),
  },
  sharing: googleSharing,
  transparency: { policyClarity: 'medium', ...googleTransparency },
  retention: {
    definedPeriods: unknown('No hem trobat terminis específics per als codis sincronitzats.'),
    dataAfterDeletion: unknown('No consta què passa amb els secrets sincronitzats quan es tanca la sessió o s’esborra l’aplicació.'),
  },
  accountDeletion: {
    possible: na('L’aplicació no té compte propi; els codis sincronitzats pertanyen al compte de Google.'),
    selfService: na('No hi ha compte propi de l’aplicació.'),
    difficulty: 'unknown',
    requiresSupportContact: false,
    dataRetained: 'Els codis sincronitzats formen part del compte de Google i s’eliminen amb aquest.',
    sources: ['google-authenticator-help'],
  },
  userRights: {
    ...googleRights,
    dataExport: f('yes', 'official', ['google-authenticator-help'], 'Els codis es poden transferir a un altre dispositiu amb un codi QR des de «Transfereix comptes».'),
    exportFormatQuality: 'mixed',
  },
  controls: {
    adPersonalizationOptOut: na('L’aplicació no mostra publicitat.'),
    telemetryOptOut: unknown('No hem trobat cap opció per desactivar les dades d’ús i de diagnòstic.'),
    granularControls: f('yes', 'official', ['google-authenticator-help'], 'Es pot triar entre sincronitzar amb el compte de Google o conservar els codis només al dispositiu.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'press', ['google-authenticator-mysk-2023'], 'Quan va arribar la sincronització, l’aplicació convidava a iniciar sessió per desar els codis al compte sense explicar que no eren xifrats d’extrem a extrem.'),
  },
  security: {
    ...googleSecurity,
    e2ee: f('no', 'press', ['google-authenticator-mysk-2023', 'google-authenticator-e2ee-2023'], 'Els secrets sincronitzats viatgen i es desen xifrats amb claus de Google, no d’extrem a extrem. Google va anunciar el 2023 que hi afegiria xifratge d’extrem a extrem opcional; no n’hem trobat cap confirmació oficial.', { scope: 'none' }),
    atRestEncryption: f('yes', 'official', ['google-authenticator-help'], 'Google diu que els codis es xifren en trànsit i en repòs.'),
    transportEncryption: f('yes', 'official', ['google-authenticator-help']),
    mfa: na('L’aplicació és, en si mateixa, un segon factor.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La sincronització és una comoditat real contra la pèrdua del mòbil, però concentra tots els segons factors en el compte de Google. Qui la vulgui fer servir hauria de protegir aquest compte amb una clau d’accés o una clau física.',
    openQuestions: [
      'Google ha activat finalment el xifratge d’extrem a extrem de la sincronització a totes les plataformes?',
      'Per què l’etiqueta declara nom, adreça postal i telèfon per a la funcionalitat d’una aplicació de codis?',
    ],
  },
}

/* ═══════════════════════ Fulls de càlcul de Google ═══════════════════════ */
const sheets: AppSeed = {
  slug: 'google-sheets',
  name: 'Fulls de càlcul de Google',
  company: 'google-ireland',
  categories: ['ofimatica-i-productivitat'],
  tagline: 'Fulls de càlcul al núvol sense ús publicitari del contingut i restringits per defecte',
  summary:
    'Fulls de càlcul comparteix política i garanties amb Documents: Google diu que no en fa servir el contingut per a publicitat ni per entrenar models fundacionals, i els fitxers són restringits per defecte. El risc habitual és la compartició per enllaç, que pot deixar a la vista bases de dades personals senceres. No hi ha xifratge d’extrem a extrem als comptes personals.',
  platforms: ['web', 'ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: { website: 'https://sheets.google.com/', ...GOOGLE_LINKS, appStore: appStore('842849113') },
  accountRequired: f('yes', 'official', ['google-privacy-policy'], 'Cal un compte de Google.'),
  openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Els fulls de càlcul sovint contenen llistes de persones, pressupostos familiars o registres de clients. Com que es fan servir per organitzar dades d’altres persones, un error de compartició afecta també qui no fa servir el servei.',
  dataCollection: [
    row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['google-docs-privacy-basics', 'google-sheets-app-store'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-sheets-app-store'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-sheets-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-sheets-app-store'] }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-sheets-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-sheets-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-sheets-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-sheets-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['google-sheets-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['google-sheets-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['google-sheets-app-store'], labelNote),
    advertisingIdentifiers: unknown('No hem trobat cap declaració sobre l’ús de l’identificador publicitari del dispositiu.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['google-docs-privacy-basics'], 'Google diu que no fa servir la informació de Fulls de càlcul amb finalitats publicitàries.'),
    profiling: f('no', 'official', ['google-sheets-app-store'], 'L’etiqueta no declara cap ús publicitari.'),
    aiTraining: f('no', 'official', ['google-docs-privacy-basics', 'google-docs-gemini-data'], 'Google diu que no analitza el contingut privat per entrenar models fundacionals.'),
  },
  sharing: {
    ...googleSharing,
    thirdPartySharing: f('partial', 'official', ['google-docs-privacy-basics'], 'Accés de Google només amb permís o per obligació legal; complements de tercers només si s’autoritzen.'),
  },
  transparency: { policyClarity: 'high', ...googleTransparency },
  retention: {
    definedPeriods: f('partial', 'official', ['google-drive-trash'], 'Es conserven fins que s’esborren; la paperera es buida als 30 dies.'),
    dataAfterDeletion: f('partial', 'official', ['google-drive-trash'], 'Les còpies i els fitxers d’altres persones no s’eliminen.'),
    periods: [
      { dataType: 'fitxers-i-documents', period: '30 dies a la paperera abans de l’eliminació definitiva', sources: ['google-drive-trash'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['google-delete-account', 'google-drive-trash']),
    selfService: f('yes', 'official', ['google-delete-account']),
    directUrl: 'https://myaccount.google.com/deleteservices',
    difficulty: 'easy',
    waitingPeriodDays: 0,
    requiresSupportContact: false,
    steps: googleDeletionSteps,
    obstacles: accountObstacle,
    dataRetained: 'Els fulls de què altres persones són propietàries i les còpies que n’hagin fet.',
    sources: ['google-delete-account'],
  },
  userRights: googleRights,
  controls: {
    adPersonalizationOptOut: na('Google diu que el contingut de Fulls de càlcul no es fa servir per a publicitat.'),
    telemetryOptOut: unknown('No hem trobat cap opció per desactivar les dades d’ús i de diagnòstic de l’aplicació.'),
    granularControls: f('yes', 'official', ['google-docs-privacy-basics'], 'Restringits per defecte, amb permisos per persona o per enllaç.'),
    defaultPosture: 'protective',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a Fulls de càlcul.'),
  },
  security: {
    ...googleSecurity,
    e2ee: f('no', 'official', ['google-docs-privacy-basics'], 'Xifratge en trànsit i en repòs amb claus de Google.', { scope: 'none' }),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
  },
}

/* ═══════════════════════ Google Calendar ═══════════════════════ */
const calendar: AppSeed = {
  slug: 'google-calendar',
  name: 'Google Calendar',
  company: 'google-ireland',
  categories: ['ofimatica-i-productivitat'],
  tagline: 'Agenda privada per defecte i sense ús publicitari del contingut, però sense xifratge d’extrem a extrem',
  summary:
    'Google diu que no fa servir el contingut de Calendar per a publicitat i que el calendari d’un compte personal és privat fins que es comparteix. Els esdeveniments es xifren en trànsit i en repòs amb claus de Google, que hi pot accedir tècnicament. Amb un compte de feina o d’escola, l’administració pot veure’l.',
  platforms: ['web', 'ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: { website: 'https://calendar.google.com/', ...GOOGLE_LINKS, appStore: appStore('909319292') },
  accountRequired: f('yes', 'official', ['google-privacy-policy'], 'Cal un compte de Google.'),
  openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Una agenda diu on serà una persona, amb qui i quan: visites mèdiques, reunions, viatges, rutines familiars. Les invitacions afegeixen dades de terceres persones que no han triat el servei.',
  dataCollection: [
    row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-calendar-privacy-basics', 'google-calendar-app-store'], note: 'Esdeveniments, descripcions i adjunts; l’etiqueta ho declara com a «altre contingut de l’usuari».' }),
    row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-calendar-privacy-basics'], note: 'Qui convida qui i quan, a través de les invitacions.' }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-calendar-app-store'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-calendar-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-calendar-app-store'] }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-calendar-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-calendar-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-calendar-app-store'] }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-calendar-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-calendar-app-store'], note: 'L’etiqueta declara identificadors per a publicitat o màrqueting del desenvolupador.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['google-calendar-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['google-calendar-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['google-calendar-app-store'], labelNote),
    advertisingIdentifiers: unknown('No hem trobat cap declaració sobre l’ús de l’identificador publicitari del dispositiu.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['google-calendar-privacy-basics'], 'Google diu que Calendar no fa servir el contingut per a publicitat. L’etiqueta declara identificadors per a màrqueting propi.'),
    profiling: f('partial', 'official', ['google-calendar-app-store'], 'Ubicació, contactes i cerques es fan servir per personalitzar el producte.'),
    aiTraining: f('no', 'official', ['google-docs-gemini-data'], 'Google diu que no fa servir les dades de Workspace, Calendar inclòs, per entrenar els models de Gemini.'),
  },
  sharing: {
    ...googleSharing,
    thirdPartySharing: f('partial', 'official', ['google-calendar-privacy-basics'], 'Google accedeix al contingut privat només amb permís o per obligació legal. Les aplicacions de tercers autoritzades poden llegir el calendari.'),
  },
  transparency: { policyClarity: 'high', ...googleTransparency },
  retention: {
    definedPeriods: unknown('No hem trobat terminis específics de conservació dels esdeveniments més enllà de la política general.'),
    dataAfterDeletion: f('partial', 'official', ['google-delete-account'], 'Les invitacions enviades continuen als calendaris de les persones convidades.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['google-delete-account']),
    selfService: f('yes', 'official', ['google-delete-account']),
    directUrl: 'https://myaccount.google.com/deleteservices',
    difficulty: 'easy',
    waitingPeriodDays: 0,
    requiresSupportContact: false,
    steps: googleDeletionSteps,
    obstacles: accountObstacle,
    dataRetained: 'Les invitacions i els esdeveniments compartits que consten als calendaris d’altres persones.',
    sources: ['google-delete-account'],
  },
  userRights: googleRights,
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['google-ad-center'], undefined, { url: 'https://myadcenter.google.com/' }),
    telemetryOptOut: unknown('No hem trobat cap opció per desactivar les dades d’ús i de diagnòstic de l’aplicació.'),
    granularControls: f('yes', 'official', ['google-calendar-privacy-basics'], 'El calendari és privat per defecte i es pot compartir calendari per calendari i esdeveniment per esdeveniment.'),
    defaultPosture: 'protective',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a Calendar.'),
  },
  security: {
    ...googleSecurity,
    e2ee: f('no', 'official', ['google-calendar-privacy-basics'], 'Xifratge en trànsit i en repòs amb claus de Google.', { scope: 'none' }),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    openQuestions: ['Quins terminis de conservació s’apliquen als esdeveniments i a les invitacions rebudes?'],
  },
}

/* ═══════════════════════ Traductor de Google ═══════════════════════ */
const translate: AppSeed = {
  slug: 'google-translate',
  name: 'Traductor de Google',
  company: 'google-ireland',
  categories: ['traduccio-i-referencia'],
  tagline: 'Traductor que es pot fer servir sense compte, però que envia els textos a Google i desa l’historial al compte si s’hi entra',
  summary:
    'El Traductor funciona sense compte i té traducció sense connexió per a molts idiomes. Els textos, les imatges i la veu que es tradueixen en línia arriben als servidors de Google. Amb la sessió iniciada i l’activitat web i d’aplicacions activada, l’historial de traduccions es desa al compte.',
  platforms: ['web', 'ios', 'android'],
  businessModel: 'advertising',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: { website: 'https://translate.google.com/', ...GOOGLE_LINKS, appStore: appStore('414706506') },
  accountRequired: f('no', 'official', ['google-translate-history'], 'Es pot fer servir sense sessió; en aquest cas l’historial queda només al dispositiu.'),
  openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Es tradueixen cartes mèdiques, contractes, missatges personals i documents oficials. Tot el que es tradueix en línia passa pels servidors de Google i, amb sessió iniciada, queda vinculat al compte.',
  dataCollection: [
    row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-translate-app-store', 'google-translate-history'], note: 'Els textos traduïts; l’etiqueta ho declara com a «altre contingut de l’usuari».' }),
    row('historial-de-cerca', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-translate-history', 'google-translate-app-store'], note: 'L’historial de traduccions es desa al compte només amb sessió iniciada i l’activitat web i d’aplicacions activada.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-translate-app-store'], note: 'Traducció amb la càmera.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-translate-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-translate-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-translate-app-store'], note: 'L’etiqueta declara identificadors i dades d’ús per a publicitat o màrqueting del desenvolupador.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['google-translate-app-store'] }),
    row('historial-de-navegacio', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-translate-app-store'], note: 'Declarat com a no vinculat a la identitat.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['google-translate-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['google-translate-app-store'], labelNote),
    advertisingIdentifiers: unknown('No hem trobat cap declaració sobre l’ús de l’identificador publicitari del dispositiu.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['google-translate-app-store', 'google-drive-ads-data'], 'L’aplicació no mostra anuncis, però l’etiqueta declara identificadors i dades d’ús per a màrqueting de Google, i l’activitat en serveis de Google alimenta la publicitat del compte.'),
    profiling: f('partial', 'official', ['google-drive-ads-data'], 'Amb sessió iniciada, l’activitat al Traductor forma part de l’activitat del compte de Google.'),
    aiTraining: unknown('La política diu que Google entrena models amb informació pública per construir el Traductor, però no aclareix si fa servir els textos de les persones usuàries.'),
  },
  sharing: googleSharing,
  transparency: { policyClarity: 'medium', ...googleTransparency },
  retention: {
    definedPeriods: f('partial', 'official', ['google-translate-history', 'google-my-activity'], 'L’historial del compte segueix l’esborrat automàtic de l’activitat web i d’aplicacions.'),
    dataAfterDeletion: f('partial', 'official', ['google-translate-history'], 'L’historial es pot esborrar des de l’aplicació o des de La meva activitat.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['google-translate-history', 'google-delete-account'], 'L’historial es pot esborrar sense tocar el compte.'),
    selfService: f('yes', 'official', ['google-translate-history']),
    directUrl: 'https://myactivity.google.com/product/translate',
    difficulty: 'easy',
    waitingPeriodDays: 0,
    requiresSupportContact: false,
    steps: [
      'A l’aplicació, obre l’historial i esborra les traduccions o tot l’historial.',
      'També es pot esborrar des de myactivity.google.com, filtrant pel Traductor.',
      'Si no vols que es desin traduccions noves al compte, tanca la sessió a l’aplicació o desactiva l’activitat web i d’aplicacions.',
    ],
    obstacles: 'Per no desar l’historial al núvol cal tancar la sessió; no hi ha cap mode intermedi a l’aplicació.',
    sources: ['google-translate-history'],
  },
  userRights: googleRights,
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['google-ad-center'], undefined, { url: 'https://myadcenter.google.com/' }),
    telemetryOptOut: f('partial', 'official', ['google-translate-history'], 'Es pot deixar de desar l’historial al compte, però no aturar l’enviament de dades d’ús i de diagnòstic.'),
    granularControls: f('partial', 'official', ['google-translate-history'], 'Historial esborrable i traducció sense connexió.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos al Traductor.'),
  },
  security: {
    ...googleSecurity,
    e2ee: na('El servei tradueix textos als servidors de Google; no hi ha comunicació entre persones que calgui xifrar d’extrem a extrem.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    openQuestions: ['Google fa servir els textos traduïts per les persones usuàries per entrenar o millorar els models del Traductor?'],
  },
}

/* ═══════════════════════ Google Fotos ═══════════════════════ */
const photos: AppSeed = {
  slug: 'google-photos',
  name: 'Google Fotos',
  company: 'google-ireland',
  categories: ['emmagatzematge-al-nuvol', 'edicio-de-foto-i-video'],
  tagline: 'Arxiu de fotos amb reconeixement facial i anàlisi automàtica del contingut',
  summary:
    'Google Fotos analitza cada imatge per reconèixer cares, llocs i objectes, i agrupa les cares si l’opció està activada. Google diu que no ven les fotos ni les fa servir per a publicitat, però l’etiqueta de l’App Store declara fotos i vídeos per a publicitat de tercers. El reconeixement facial li ha costat acords de 100 milions de dòlars a Illinois i de 1.375 milions a Texas, i l’anàlisi automàtica per detectar abusos ha tancat comptes per error.',
  platforms: ['web', 'ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: { website: 'https://photos.google.com/', ...GOOGLE_LINKS, appStore: appStore('962194608') },
  accountRequired: f('yes', 'official', ['google-photos-privacy'], 'La còpia al núvol requereix un compte de Google.'),
  openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Una galeria completa documenta la vida d’una persona i de les del seu voltant: cares, cossos, llocs, dates, documents fotografiats. Els models facials identifiquen també persones que no fan servir el servei, i les metadades de les fotos reconstrueixen on s’ha estat.',
  dataCollection: [
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts', 'seguretat-i-prevencio-del-frau'], sources: ['google-photos-privacy', 'google-photos-app-store'], note: 'L’etiqueta les declara també per a publicitat de tercers, cosa que contradiu el compromís públic de Google.' }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['google-photos-privacy', 'google-photos-face-groups'], note: 'Models facials de l’agrupació de cares, visibles només per a la persona titular del compte.' }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-photos-app-store', 'google-photos-privacy'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-photos-app-store'], note: 'Declarada també per a màrqueting propi.' }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-photos-app-store'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-photos-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-photos-app-store'] }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-photos-app-store'], note: 'Per a les comandes d’impressions.' }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-photos-app-store'] }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-photos-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-photos-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-photos-app-store'], note: 'L’etiqueta declara l’identificador d’usuari per a publicitat de tercers i per a màrqueting propi.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-photos-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['google-photos-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['google-photos-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['google-photos-app-store'], labelNote),
    advertisingIdentifiers: unknown('No hem trobat cap declaració sobre l’ús de l’identificador publicitari del dispositiu.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['google-photos-privacy', 'google-photos-app-store'], 'Google diu que no fa servir les fotos i els vídeos per a publicitat. L’etiqueta de l’App Store declara, en canvi, fotos o vídeos i l’identificador d’usuari per a publicitat de tercers, i compres, ubicació i ús per a màrqueting propi.'),
    profiling: f('yes', 'official', ['google-photos-privacy', 'google-photos-gemini-privacy'], 'El servei reconeix cares, llocs i objectes i en genera resums i inferències sobre la biblioteca.'),
    aiTraining: f('partial', 'official', ['google-photos-gemini-privacy'], 'Google diu que no entrena models generatius de fora de Fotos amb les dades personals de Fotos. Sí que les fa servir dins del servei, i les consultes a Ask Photos que es revisen per millorar-lo es desvinculen del compte.'),
  },
  sharing: {
    ...googleSharing,
    thirdPartySharing: f('partial', 'official', ['google-photos-privacy'], 'Els àlbums es comparteixen per compte o per enllaç segons el que triï la persona. Google diu que no ven les fotos.'),
  },
  transparency: { policyClarity: 'medium', ...googleTransparency },
  retention: {
    definedPeriods: f('yes', 'official', ['google-photos-face-groups', 'google-drive-inactive-accounts'], 'Les agrupacions de cares s’esborren si no s’obre Fotos durant dos anys; un compte personal inactiu durant dos anys es pot eliminar.'),
    dataAfterDeletion: f('partial', 'official', ['google-photos-face-groups', 'google-delete-account'], 'Desactivar l’agrupació de cares elimina els models facials. Les fotos compartides que altres persones han desat no s’eliminen.'),
    periods: [
      { dataType: 'dades-biometriques', period: 'S’esborren si es desactiva l’agrupació de cares o després de 2 anys sense fer servir Fotos', sources: ['google-photos-face-groups'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['google-delete-account'], 'Es poden esborrar les fotos i les agrupacions de cares sense eliminar el compte, o eliminar el compte sencer.'),
    selfService: f('yes', 'official', ['google-delete-account']),
    directUrl: 'https://myaccount.google.com/deleteservices',
    difficulty: 'easy',
    waitingPeriodDays: 0,
    requiresSupportContact: false,
    steps: googleDeletionSteps,
    obstacles: `${accountObstacle} L’emmagatzematge es comparteix amb Gmail i Drive.`,
    dataRetained: 'Les fotos compartides que altres persones han desat a la seva biblioteca.',
    sources: ['google-delete-account'],
  },
  userRights: googleRights,
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['google-ad-center'], undefined, { url: 'https://myadcenter.google.com/' }),
    telemetryOptOut: unknown('No hem trobat cap opció per desactivar les dades d’ús i de diagnòstic de l’aplicació.'),
    granularControls: f('yes', 'official', ['google-photos-privacy', 'google-photos-face-groups'], 'Agrupació de cares activable, eliminació de la ubicació de les fotos i control de compartició per àlbum.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a Fotos.'),
  },
  security: {
    ...googleSecurity,
    e2ee: f('no', 'official', ['google-photos-privacy'], 'Xifratge en trànsit i en repòs amb claus de Google; Google analitza el contingut.', { scope: 'none' }),
    atRestEncryption: f('yes', 'official', ['google-photos-privacy']),
    transportEncryption: f('yes', 'official', ['google-photos-privacy']),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'L’etiqueta de l’App Store i el compromís públic de Google no coincideixen pel que fa a la publicitat. Ho recollim tal com consta i ho deixem com a pregunta oberta.',
    openQuestions: [
      'Per què l’etiqueta de l’App Store declara fotos o vídeos per a publicitat de tercers si Google diu que no les fa servir per a anuncis?',
      'L’agrupació de cares ve activada per defecte als comptes de l’Espai Econòmic Europeu?',
    ],
  },
}

/* ═══════════════════════ YouTube Music ═══════════════════════ */
const youtubeMusic: AppSeed = {
  slug: 'youtube-music',
  name: 'YouTube Music',
  company: 'google-ireland',
  categories: ['musica-i-audio'],
  tagline: 'Música en reproducció contínua amb un historial d’escolta que alimenta la publicitat del compte',
  summary:
    'YouTube Music comparteix historial i recomanacions amb YouTube. La versió gratuïta té anuncis, i l’etiqueta de l’App Store declara ubicació, cerques, navegació i identificadors per a publicitat de tercers, tot i que no les declara per rastrejar entre aplicacions. L’historial es pot pausar i té esborrat automàtic configurable.',
  platforms: ['web', 'ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: { website: 'https://music.youtube.com/', ...GOOGLE_LINKS, appStore: appStore('1017492454') },
  accountRequired: f('yes', 'official', ['youtube-music-app-store', 'google-privacy-policy'], 'L’aplicació funciona amb el compte de Google.'),
  openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'El que s’escolta, quan i on revela estats d’ànim, rutines, creences i gustos. Com que l’historial es comparteix amb YouTube, forma part del mateix perfil que alimenta les recomanacions i la publicitat.',
  dataCollection: [
    row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['google-my-activity', 'youtube-music-app-store'], note: 'L’historial d’escolta forma part de l’historial de YouTube.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['youtube-music-app-store'], note: 'Declarat per a publicitat de tercers.' }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['youtube-music-app-store'], note: 'Declarat per a publicitat de tercers i màrqueting propi.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['youtube-music-app-store'] }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['youtube-music-app-store'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['youtube-music-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['youtube-music-app-store'] }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['youtube-music-app-store'] }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['youtube-music-app-store'] }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['youtube-music-app-store'], note: 'Subscripció Premium.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['youtube-music-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada', 'mesura-publicitaria'], sources: ['youtube-music-app-store'], note: 'Inclou «dades de publicitat».' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['google-ad-center'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['youtube-music-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['youtube-music-app-store'], `${labelNote} Sí que declara dades per a publicitat de tercers dins del servei.`),
    advertisingIdentifiers: unknown('No hem trobat cap declaració concreta sobre l’identificador publicitari del dispositiu a l’aplicació.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['youtube-music-app-store', 'google-ad-center'], 'La versió gratuïta té anuncis personalitzats amb dades del compte. Premium elimina els anuncis, però no la recollida.', {
      optOutUrl: 'https://myadcenter.google.com/',
    }),
    profiling: f('yes', 'official', ['google-ad-center', 'youtube-music-app-store'], 'Les recomanacions i els interessos publicitaris es basen en l’historial d’escolta i de cerca.'),
    aiTraining: unknown('No hem trobat cap informació específica sobre l’ús de l’historial d’escolta per entrenar models.'),
  },
  sharing: googleSharing,
  transparency: { policyClarity: 'medium', ...googleTransparency },
  retention: {
    definedPeriods: f('yes', 'official', ['google-my-activity'], 'L’historial de YouTube té esborrat automàtic configurable a 3 o 36 mesos.'),
    dataAfterDeletion: f('partial', 'official', ['google-delete-account'], 'Es conserva informació per a obligacions legals i de seguretat.'),
    periods: [
      { dataType: 'historial-de-visualitzacio', period: 'Esborrat automàtic configurable a 3 o 36 mesos', sources: ['google-my-activity'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['google-delete-account'], 'Es pot esborrar l’historial o eliminar el servei de YouTube del compte.'),
    selfService: f('yes', 'official', ['google-delete-account']),
    directUrl: 'https://myaccount.google.com/deleteservices',
    difficulty: 'easy',
    waitingPeriodDays: 0,
    requiresSupportContact: false,
    steps: googleDeletionSteps,
    obstacles: 'Esborrar YouTube del compte elimina també el canal, les llistes i l’historial de YouTube. Si hi ha subscripció Premium, cal cancel·lar-la a part.',
    dataRetained: 'Registres de seguretat i informació necessària per obligacions legals o fiscals.',
    sources: ['google-delete-account'],
  },
  userRights: googleRights,
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['google-ad-center'], undefined, { url: 'https://myadcenter.google.com/' }),
    telemetryOptOut: f('partial', 'official', ['google-my-activity'], 'Es pot pausar l’historial de YouTube, cosa que empitjora les recomanacions.'),
    granularControls: f('yes', 'official', ['google-my-activity'], 'Historial pausable, esborrable i amb caducitat automàtica.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a YouTube Music.'),
  },
  security: {
    ...googleSecurity,
    e2ee: na('És un servei de reproducció de música; no hi ha comunicació privada entre persones.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'No hem trobat sancions ni incidents específics de YouTube Music. Les sancions sobre YouTube (galetes a França, per exemple) afecten el web de YouTube i consten a la fitxa corresponent.',
  },
}

export const lot: SeedLot = {
  companies: [],
  sources: [
    /* ── Etiquetes de l’App Store ── */
    s('google-classroom-app-store', 'Google Classroom — App Store (Privacidad de la app)', appStore('924620788'), 'Apple / Google', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa declarada per Google: dades vinculades per a analítica, personalització i funcionalitat; cap dada per rastrejar.',
    }),
    s('google-gemini-app-store', 'Google Gemini — App Store (Privacidad de la app)', appStore('6477489729'), 'Apple / Google', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara ubicació exacta, historial de navegació, contactes, «dades sensibles» i dades per a màrqueting propi; cap dada per rastrejar.',
    }),
    s('google-drive-app-store', 'Google Drive — App Store (Privacidad de la app)', appStore('507874739'), 'Apple / Google', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: dades vinculades per a funcionalitat i analítica, identificadors per a màrqueting propi; cap dada per rastrejar.',
    }),
    s('google-docs-app-store', 'Documentos de Google — App Store (Privacidad de la app)', appStore('842842640'), 'Apple / Google', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: dades vinculades per a funcionalitat, analítica i personalització; cap finalitat publicitària ni rastreig.',
    }),
    s('google-authenticator-app-store', 'Google Authenticator — App Store (Privacidad de la app)', appStore('388497605'), 'Apple / Google', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: dades vinculades per a funcionalitat i analítica; cap finalitat publicitària ni rastreig.',
    }),
    s('google-sheets-app-store', 'Hojas de cálculo de Google — App Store (Privacidad de la app)', appStore('842849113'), 'Apple / Google', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: dades vinculades per a funcionalitat, analítica i personalització; cap finalitat publicitària ni rastreig.',
    }),
    s('google-calendar-app-store', 'Google Calendar — App Store (Privacidad de la app)', appStore('909319292'), 'Apple / Google', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: dades vinculades per a funcionalitat i analítica, identificadors per a màrqueting propi; cap dada per rastrejar.',
    }),
    s('google-translate-app-store', 'Traductor de Google — App Store (Privacidad de la app)', appStore('414706506'), 'Apple / Google', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors i dades d’ús per a màrqueting propi, historial de navegació no vinculat; cap dada per rastrejar.',
    }),
    s('google-photos-app-store', 'Google Fotos — App Store (Privacidad de la app)', appStore('962194608'), 'Apple / Google', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara fotos o vídeos i l’identificador d’usuari per a publicitat de tercers, i ubicació exacta, informació de pagament i compres; cap dada per rastrejar.',
    }),
    s('youtube-music-app-store', 'YouTube Music — App Store (Privacidad de la app)', appStore('1017492454'), 'Apple / Google', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: ubicació, nom, cerques, navegació, identificadors i dades de publicitat per a publicitat de tercers; cap dada per rastrejar.',
    }),

    /* ── Classroom i Workspace for Education ── */
    s('google-classroom-edu-privacy', 'Google Workspace for Education Privacy Notice', 'https://workspace.google.com/terms/education_privacy/', 'Google', 'privacy-policy', 'primary', {
      summary: 'Avís de privadesa dels comptes escolars: Classroom és servei principal, sense anuncis ni ús publicitari de les dades; el centre administra els comptes i hi té accés.',
    }),
    s('google-classroom-archive-delete', 'Archive or delete a class — Classroom Help', 'https://support.google.com/edu/classroom/answer/6149813?hl=en&co=GENIE.Platform%3DiOS', 'Google', 'support-doc', 'primary', {
      summary: 'Només el professorat principal pot eliminar una classe, cal arxivar-la abans i els fitxers queden a la carpeta de Drive.',
    }),
    s('google-classroom-genai-privacy', 'Generative AI in Google Workspace Privacy Hub', 'https://knowledge.workspace.google.com/admin/generative-ai/generative-ai-in-google-workspace-privacy-hub', 'Google', 'privacy-center', 'primary', {
      summary: 'Als comptes de Workspace i Workspace for Education, el contingut no el revisen persones ni s’usa per entrenar models fora del domini sense permís.',
    }),
    s('google-classroom-datatilsynet-2024', 'Datatilsynet giver påbud i Chromebook-sag', 'https://www.datatilsynet.dk/afgoerelser/afgoerelser/2024/jan/datatilsynet-giver-paabud-i-chromebook-sag', 'Datatilsynet (Dinamarca)', 'regulator', 'authority', {
      language: 'other',
      publishedAt: '2024-01-30',
      summary: 'Ordre a 53 municipis danesos: no hi ha base legal per cedir a Google dades de l’alumnat perquè millori i desenvolupi Workspace for Education, ChromeOS i Chrome.',
    }),
    s('google-classroom-datatilsynet-2026', 'Datatilsynet giver 51 kommuner alvorlig kritik i Chromebook-sag', 'https://www.datatilsynet.dk/afgoerelser/afgoerelser/2026/jan/datatilsynet-giver-51-kommuner-alvorlig-kritik-i-chromebook-sag', 'Datatilsynet (Dinamarca)', 'regulator', 'authority', {
      language: 'other',
      publishedAt: '2026-01-29',
      summary: 'Crítica greu a 51 municipis per no haver documentat la cadena de subencarregats ni les transferències de dades de l’alumnat a tercers països.',
    }),

    /* ── Gemini ── */
    s('google-gemini-privacy-hub', 'Gemini Apps Privacy Hub', 'https://support.google.com/gemini/answer/13594961?hl=en', 'Google', 'privacy-center', 'primary', {
      summary: 'Dades que recull Gemini, revisió humana, ús per entrenar models, conservació (18 mesos per defecte, 72 hores sense activitat, 3 anys per a les converses revisades) i compromís de no fer servir les converses per a anuncis.',
    }),
    s('google-gemini-dpc-palm2-2024', 'Data Protection Commission launches inquiry into Google AI model', 'https://www.dataprotection.ie/en/news-media/press-releases/data-protection-commission-launches-inquiry-google-ai-model', 'Data Protection Commission (Irlanda)', 'regulator', 'authority', {
      publishedAt: '2024-09-12',
      summary: 'Investigació sobre si Google va fer l’avaluació d’impacte obligatòria abans d’entrenar PaLM 2 amb dades personals europees.',
    }),
    s('google-gemini-malwarebytes-apps-2025', 'No thanks: Google lets its Gemini AI access your apps, including messages', 'https://www.malwarebytes.com/blog/news/2025/07/no-thanks-google-lets-its-gemini-ai-access-your-apps-including-messages', 'Malwarebytes', 'press', 'secondary', {
      summary: 'Explica l’avís de Google que Gemini podria fer servir Telèfon, Missatges i WhatsApp a Android independentment de l’activitat, i les contradiccions del missatge.',
    }),

    /* ── Drive, Documents, Fulls de càlcul i Calendar ── */
    s('google-drive-privacy', 'How Drive protects your privacy & keeps you in control', 'https://support.google.com/drive/answer/10375054?hl=en', 'Google', 'support-doc', 'primary', {
      summary: 'Drive no fa servir el contingut per a publicitat; xifratge en trànsit i en repòs; anàlisi per detectar brossa, virus i abusos.',
    }),
    s('google-drive-trash', 'Delete & restore files in Google Drive', 'https://support.google.com/drive/answer/2375102?hl=en', 'Google', 'support-doc', 'primary', {
      summary: 'Els fitxers de la paperera s’eliminen definitivament als 30 dies; els fitxers d’altres persones només es poden treure del propi Drive.',
    }),
    s('google-drive-inactive-accounts', 'Google Account Inactivity Policy', 'https://support.google.com/accounts/answer/12418290?hl=en', 'Google', 'support-doc', 'primary', {
      summary: 'Google es reserva el dret d’eliminar els comptes personals inactius durant dos anys, amb avís previ.',
    }),
    s('google-drive-ads-data', 'How ads work — Google Safety Center', 'https://safety.google/privacy/ads-and-data/', 'Google', 'privacy-center', 'primary', {
      summary: 'Google no fa servir les dades de Drive, Gmail i Fotos per a anuncis, però sí l’activitat en altres serveis i la ubicació associada.',
    }),
    s('google-docs-privacy-basics', 'Understand the basics of privacy in Google Docs, Sheets, Slides & Vids', 'https://support.google.com/docs/answer/10381817?hl=en', 'Google', 'support-doc', 'primary', {
      summary: 'Sense ús publicitari del contingut, sense entrenar models fundacionals amb fitxers privats, accés només amb permís o per llei i fitxers restringits per defecte.',
    }),
    s('google-docs-gemini-data', 'Learn how Gemini in Gmail, Calendar, Chat, Docs, Drive, Sheets, Slides, Meet & Vids protects your data', 'https://support.google.com/docs/answer/14615114?hl=en', 'Google', 'support-doc', 'primary', {
      summary: 'Google diu que no fa servir les dades de Workspace per entrenar els models de Gemini ni per a publicitat, també als comptes personals.',
    }),
    s('google-docs-phishing-2017', '1 Million Gmail Users Impacted by Google Docs Phishing Attack', 'https://threatpost.com/1-million-gmail-users-impacted-by-google-docs-phishing-attack/125436/', 'Threatpost', 'press', 'secondary', {
      summary: 'Una aplicació falsa anomenada «Google Docs» va obtenir accés a correus i contactes de fins a un milió de comptes a través de la pantalla d’autorització legítima de Google.',
    }),
    s('google-calendar-privacy-basics', 'Understand the basics of privacy in Google Calendar', 'https://support.google.com/calendar/answer/10366125?hl=en', 'Google', 'support-doc', 'primary', {
      summary: 'Calendar no fa servir el contingut per a publicitat; xifratge en trànsit i en repòs; calendaris privats per defecte als comptes personals.',
    }),

    /* ── Authenticator ── */
    s('google-authenticator-help', 'Get verification codes with Google Authenticator', 'https://support.google.com/accounts/answer/1066447?hl=en', 'Google', 'support-doc', 'primary', {
      summary: 'Ús amb o sense compte de Google, sincronització dels codis, xifratge en trànsit i en repòs i transferència amb codi QR.',
    }),
    s('google-authenticator-github', 'google/google-authenticator (arxivat)', 'https://github.com/google/google-authenticator', 'Google', 'repository', 'primary', {
      summary: 'Repositori arxivat el 2021; adverteix que el codi ha divergit de les aplicacions de les botigues.',
    }),
    s('google-authenticator-mysk-2023', 'PSA: Google Authenticator’s Cloud-Synced 2FA Codes Aren’t End-to-End Encrypted', 'https://www.macrumors.com/2023/04/27/google-authenticator-cloud-sync-no-e2e/', 'MacRumors', 'press', 'secondary', {
      publishedAt: '2023-04-27',
      summary: 'Recull l’anàlisi de Mysk: els secrets sincronitzats amb el compte de Google no estan xifrats d’extrem a extrem.',
    }),
    s('google-authenticator-e2ee-2023', 'Google will add End-to-End encryption to Google Authenticator', 'https://www.bleepingcomputer.com/news/google/google-will-add-end-to-end-encryption-to-google-authenticator/', 'BleepingComputer', 'press', 'secondary', {
      summary: 'Google anuncia que afegirà xifratge d’extrem a extrem opcional a la sincronització, sense data.',
    }),
    s('google-authenticator-retool-2023', 'When MFA isn’t actually MFA', 'https://retool.com/blog/mfa-isnt-mfa', 'Retool', 'other', 'secondary', {
      summary: 'Explicació de Retool sobre l’atac: el control del compte de Google d’un empleat va donar accés a tots els codis sincronitzats d’Authenticator.',
    }),

    /* ── Traductor ── */
    s('google-translate-history', 'Find & manage Translate history', 'https://support.google.com/translate/answer/6142480?hl=en&co=GENIE.Platform%3DiOS', 'Google', 'support-doc', 'primary', {
      summary: 'Amb sessió iniciada i l’activitat web i d’aplicacions activada, les traduccions es desen al compte; sense sessió, només al dispositiu.',
    }),

    /* ── Fotos ── */
    s('google-photos-privacy', 'Google Photos Safety & Privacy Features', 'https://safety.google/photos/', 'Google', 'privacy-center', 'primary', {
      summary: 'Xifratge en trànsit i en repòs, agrupació de cares visible només per a la persona titular, eliminació de la ubicació i compromís de no vendre ni fer servir les fotos per a publicitat.',
    }),
    s('google-photos-face-groups', 'Face Groups retention policy — Google Photos Help', 'https://support.google.com/photos/answer/11965565?hl=en', 'Google', 'support-doc', 'primary', {
      summary: 'Els models facials s’esborren en desactivar l’agrupació, en eliminar el compte o després de dos anys sense fer servir Fotos.',
    }),
    s('google-photos-gemini-privacy', 'Gemini features in Photos privacy hub', 'https://support.google.com/photos/answer/15344015?hl=en', 'Google', 'privacy-center', 'primary', {
      summary: 'Google no entrena models generatius de fora de Fotos amb les dades personals de Fotos; revisió humana d’Ask Photos només amb comentaris o per abusos.',
    }),
    s('google-photos-takeout-2020', 'Google accidentally sent people’s private videos to strangers', 'https://www.technologyreview.com/2020/02/05/349136/google-accidentally-sent-peoples-private-videos-to-strangers/', 'MIT Technology Review', 'press', 'secondary', {
      publishedAt: '2020-02-05',
      summary: 'Un error de Google Takeout va incloure vídeos d’altres persones a les exportacions de Fotos fetes entre el 21 i el 25 de novembre de 2019.',
    }),
    s('google-photos-bipa-2022', '$100 Million Google Photos Settlement Approved', 'https://www.bursor.com/100-million-google-photos-settlement-approved/', 'Bursor & Fisher', 'other', 'secondary', {
      summary: 'Aprovació de l’acord de 100 milions de dòlars del cas Rivera contra Google per l’agrupació de cares sense consentiment a Illinois.',
    }),
    s('google-photos-texas-2025', 'Attorney General Ken Paxton Secures Historic $1.375 Billion Settlement with Google Related to Texans’ Data Privacy Rights', 'https://www.texasattorneygeneral.gov/news/releases/attorney-general-ken-paxton-secures-historic-1375-billion-settlement-google-related-texans-data', 'Fiscalia General de Texas', 'regulator', 'authority', {
      publishedAt: '2025-05-09',
      summary: 'Acord de 1.375 milions de dòlars per la ubicació, el mode d’incògnit i la recollida d’identificadors biomètrics a Google Fotos, l’Assistent i Nest Hub Max.',
    }),
    s('google-photos-csam-2022', 'A Dad Took Photos of His Naked Toddler for the Doctor. Google Flagged Him as a Criminal.', 'https://www.seattletimes.com/business/a-dad-took-photos-of-his-naked-toddler-for-the-doctor-google-flagged-him-as-a-criminal/', 'The New York Times (reproduït a The Seattle Times)', 'press', 'secondary', {
      publishedAt: '2022-08-21',
      summary: 'L’anàlisi automàtica de les fotos copiades al núvol va marcar com a abús unes imatges mèdiques; Google va tancar el compte i no el va restablir tot i que la policia no va veure delicte.',
    }),
  ],
  apps: [classroom, gemini, drive, docs, authenticator, sheets, calendar, translate, photos, youtubeMusic],
  incidents: [
    {
      slug: 'google-classroom-datatilsynet-2024',
      title: 'L’autoritat danesa prohibeix cedir a Google dades escolars per millorar els seus productes',
      type: 'regulatory-order',
      severity: 'medium',
      apps: ['google-classroom'],
      company: 'google-ireland',
      occurredAt: '2024-01-30',
      disclosedAt: '2024-01-30',
      description:
        'Datatilsynet va ordenar a 53 municipis danesos que deixessin de cedir a Google dades de l’alumnat que la companyia feia servir per mantenir, mesurar i desenvolupar Workspace for Education, ChromeOS i Chrome, perquè la llei escolar no en donava base legal. Els municipis van ajustar els contractes l’agost de 2024 i, el gener de 2026, l’autoritat en va criticar greument 51 per no haver documentat els subencarregats ni les transferències a tercers països.',
      affectedPeople: 'Alumnat de les escoles públiques de 53 municipis de Dinamarca.',
      regulatory: {
        authority: 'Datatilsynet (Dinamarca)',
        legalBasis: 'Articles 5, 6 i 28 del RGPD',
        status: 'final',
      },
      sources: ['google-classroom-datatilsynet-2024', 'google-classroom-datatilsynet-2026'],
    },
    {
      slug: 'google-gemini-dpc-palm2-2024',
      title: 'Investigació de l’autoritat irlandesa sobre l’entrenament de PaLM 2 amb dades europees',
      type: 'other',
      severity: 'medium',
      apps: ['google-gemini'],
      company: 'google-ireland',
      occurredAt: '2024-09-12',
      disclosedAt: '2024-09-12',
      description:
        'La Data Protection Commission va obrir una investigació transfronterera per determinar si Google havia fet l’avaluació d’impacte obligatòria abans de tractar dades personals de persones de l’Espai Econòmic Europeu per desenvolupar PaLM 2, un dels models precursors de Gemini. No ens consta cap decisió final.',
      affectedPeople: 'Persones de l’Espai Econòmic Europeu les dades de les quals es van fer servir per entrenar el model.',
      regulatory: {
        authority: 'Data Protection Commission (Irlanda)',
        legalBasis: 'Article 35 del RGPD',
        status: 'ongoing',
      },
      sources: ['google-gemini-dpc-palm2-2024'],
    },
    {
      slug: 'google-authenticator-retool-2023',
      title: 'Atac a Retool facilitat per la sincronització de Google Authenticator',
      type: 'breach',
      severity: 'medium',
      apps: ['google-authenticator'],
      company: 'google',
      occurredAt: '2023-08-27',
      description:
        'Uns atacants van enganyar un empleat de Retool amb un SMS i una trucada, i en van obtenir el compte corporatiu. Com que els codis de Google Authenticator estaven sincronitzats amb el compte de Google, van accedir a tots els segons factors alhora i van entrar als comptes de 27 clients al núvol. Retool va criticar que la sincronització convertia la verificació en dos passos en un únic punt de fallada.',
      affectedPeople: '27 clients de Retool al núvol.',
      sources: ['google-authenticator-retool-2023'],
    },
    {
      slug: 'google-docs-phishing-2017',
      title: 'Pesca de credencials amb una aplicació falsa de Documents de Google',
      type: 'other',
      severity: 'high',
      apps: ['google-docs', 'gmail'],
      company: 'google',
      occurredAt: '2017-05-03',
      disclosedAt: '2017-05-03',
      description:
        'Un correu que simulava una invitació a editar un document portava a la pantalla d’autorització real de Google, on una aplicació de tercers anomenada «Google Docs» demanava accés al correu i als contactes. Es propagava sola als contactes de cada víctima. Google la va aturar en una hora i va dir que havia afectat menys del 0,1 % dels comptes de Gmail, fins a un milió de persones.',
      affectedPeople: 'Fins a un milió de comptes de Gmail.',
      sources: ['google-docs-phishing-2017'],
    },
    {
      slug: 'google-photos-takeout-2019',
      title: 'Vídeos privats de Google Fotos enviats a persones desconegudes',
      type: 'leak',
      severity: 'medium',
      apps: ['google-photos'],
      company: 'google',
      occurredAt: '2019-11-21',
      disclosedAt: '2020-02-05',
      description:
        'Entre el 21 i el 25 de novembre de 2019, un error de Google Takeout va fer que algunes exportacions de Google Fotos incloguessin vídeos d’altres persones o quedessin incompletes. Google va dir que afectava el 0,01 % de les persones que van fer servir Takeout per a Fotos en aquells dies.',
      affectedPeople: 'El 0,01 % de les persones que van exportar Fotos amb Takeout entre el 21 i el 25 de novembre de 2019.',
      sources: ['google-photos-takeout-2020'],
    },
    {
      slug: 'google-photos-bipa-2022',
      title: 'Acord de 100 milions de dòlars per l’agrupació de cares de Google Fotos a Illinois',
      type: 'other',
      severity: 'high',
      apps: ['google-photos'],
      company: 'google',
      occurredAt: '2015-05-01',
      disclosedAt: '2022-09-28',
      description:
        'Una demanda col·lectiva va acusar Google d’extreure i desar la geometria facial de persones que apareixien a Google Fotos sense el consentiment que exigeix la llei biomètrica d’Illinois, fins i tot de persones que no feien servir el servei. Google va acordar pagar 100 milions de dòlars sense reconèixer cap infracció.',
      affectedPeople: 'Residents d’Illinois que van aparèixer en fotos de Google Fotos entre el maig de 2015 i l’abril de 2022.',
      sources: ['google-photos-bipa-2022'],
    },
    {
      slug: 'google-photos-texas-2025',
      title: 'Acord de 1.375 milions de dòlars amb Texas per dades biomètriques, ubicació i mode d’incògnit',
      type: 'misuse',
      severity: 'high',
      apps: ['google-photos', 'google-maps', 'chrome'],
      company: 'google',
      occurredAt: '2025-05-09',
      disclosedAt: '2025-05-09',
      description:
        'La fiscalia general de Texas va tancar dues demandes que acusaven Google de recollir identificadors biomètrics, com la geometria facial a Google Fotos i les empremtes de veu a l’Assistent, sense consentiment, i d’enganyar sobre el seguiment de la ubicació i el mode d’incògnit. Google va acordar pagar 1.375 milions de dòlars sense reconèixer cap infracció.',
      affectedPeople: 'Persones usuàries de serveis de Google a Texas.',
      regulatory: {
        authority: 'Fiscalia General de Texas',
        legalBasis: 'Capture or Use of Biometric Identifier Act i Deceptive Trade Practices Act de Texas',
        status: 'final',
      },
      sources: ['google-photos-texas-2025'],
    },
    {
      slug: 'google-photos-csam-2022',
      title: 'Compte tancat per l’anàlisi automàtica d’unes fotos mèdiques',
      type: 'other',
      severity: 'medium',
      apps: ['google-photos'],
      company: 'google',
      occurredAt: '2021-02-01',
      disclosedAt: '2022-08-21',
      description:
        'Un pare de San Francisco va fotografiar la inflamació genital del seu fill per enviar-la al metge. La còpia automàtica al núvol va fer que els sistemes de Google marquessin les imatges com a abús infantil, desactivessin el compte sencer i ho comuniquessin a la policia. La policia va concloure que no hi havia delicte, però Google no va restablir el compte.',
      affectedPeople: 'La persona afectada i la seva família, als Estats Units.',
      sources: ['google-photos-csam-2022'],
    },
  ],
  storeIds: {
    'google-classroom': 'com.google.Classroom',
    'google-gemini': 'com.google.gemini',
    'google-drive': 'com.google.Drive',
    'google-docs': 'com.google.Docs',
    'google-authenticator': 'com.google.Authenticator',
    'google-sheets': 'com.google.Sheets',
    'google-calendar': 'com.google.calendar',
    'google-translate': 'com.google.Translate',
    'google-photos': 'com.google.photos',
    'youtube-music': 'com.google.ios.youtubemusic',
  },
}
