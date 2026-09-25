import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 02 de la segona onada: quatre serveis de Google (Meet, Notícies, Play
 * Llibres i Home) i cinc aplicacions de viatges (Wizz Air, Skyscanner, Iberia,
 * Omio i GetYourGuide).
 *
 * Els serveis de Google comparteixen compte, política i controls amb les
 * fitxes de Google de la primera onada i del lot 01, i en reutilitzen les fonts
 * generals; cada fitxa hi afegeix l’etiqueta de l’App Store i les pàgines
 * pròpies. Les cinc aplicacions de viatges tenen un patró comú que les separa
 * clarament del grup anterior: totes declaren dades per rastrejar la persona
 * entre aplicacions i llocs d’altres empreses, i totes traslladen part de les
 * dades de la reserva a tercers que actuen com a responsables independents.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/* ═══════════════════════ Blocs compartits de Google ═══════════════════════ */

const GOOGLE_LINKS = {
  privacyPolicy: 'https://policies.google.com/privacy',
  privacyCenter: 'https://myaccount.google.com/data-and-privacy',
}

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

const googleSecurityBase = {
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

const googleAccountObstacle =
  'Eliminar el compte de Google fa perdre alhora Gmail, Drive, Fotos, YouTube i les compres digitals. Aquest acoblament fa difícil marxar d’un sol servei sense tocar la resta.'

const noTrackingLabel = 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar entre aplicacions i llocs d’altres empreses.'

/* ═══════════════════════ Google Meet ═══════════════════════ */
const meet: AppSeed = {
  slug: 'google-meet',
  name: 'Google Meet',
  company: 'google-ireland',
  categories: ['videoconferencia-i-feina'],
  tagline: 'Google no desa les reunions si ningú no les grava, però el xifratge és seu i no d’extrem a extrem',
  summary:
    'Meet xifra les trucades en trànsit per defecte i Google diu que no desa cap enregistrament de vídeo ni d’àudio tret que algú activi la gravació, la transcripció o les notes automàtiques. També declara que no fa servir les dades de client de Meet per a publicitat i que no hi ha cap funció de seguiment de l’atenció. El que queda fora de la promesa són les metadades: qui es connecta, amb qui, quan i des d’on, que entren al compte de Google com la resta de serveis. L’etiqueta de l’App Store és, de fet, la de l’ecosistema sencer, amb contactes, fotos, àudio i historial de cerca vinculats al compte.',
  platforms: ['web', 'ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: { website: 'https://meet.google.com/', ...GOOGLE_LINKS, appStore: appStore('1096918571') },
  accountRequired: f('yes', 'official', ['google-privacy-policy'], 'Cal un compte de Google per crear reunions; per unir-s’hi, l’amfitrió pot admetre convidats sense compte.'),
  openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Una reunió revela amb qui treballes, amb qui estudies o a qui visites per motius de salut, i a quines hores. Encara que el contingut no es desi, el graf de participants i els horaris són una radiografia de la vida professional i personal, i queden lligats al mateix compte que la resta de serveis de Google.',
  dataCollection: [
    row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-meet-app-store', 'google-meet-security'], note: 'Qui participa a cada reunió, quan i durant quanta estona. El contingut només es desa si s’activa la gravació.' }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-meet-app-store', 'google-meet-security'], note: 'Només amb la gravació, la transcripció o les notes activades.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-meet-app-store'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-meet-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-meet-app-store'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-meet-app-store'], note: 'Per unir-se per telèfon o per rebre trucades.' }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-meet-app-store'], note: 'L’etiqueta declara l’adreça física dins de la categoria de funcionalitat.' }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-meet-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['google-meet-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['google-meet-app-store'] }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['google-meet-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-meet-app-store'], note: 'L’etiqueta declara l’identificador d’usuari per a publicitat o màrqueting del desenvolupador.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-meet-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['google-meet-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['google-meet-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['google-meet-app-store'], noTrackingLabel),
    advertisingIdentifiers: unknown('No hem trobat cap declaració sobre l’ús de l’identificador publicitari del dispositiu a Meet.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['google-meet-security'], 'Google diu que Google Cloud, que ofereix Meet, no fa servir les dades de client per a publicitat ni les ven a tercers. L’etiqueta, però, declara l’identificador d’usuari per a màrqueting propi.'),
    profiling: f('partial', 'official', ['google-meet-app-store'], 'L’etiqueta declara ubicació aproximada, contactes, contingut d’usuari i historial de cerca per personalitzar el producte.'),
    aiTraining: unknown('No hem trobat cap declaració específica sobre l’ús de les reunions de comptes personals per entrenar models.'),
  },
  sharing: googleSharing,
  transparency: { policyClarity: 'medium', ...googleTransparency },
  retention: {
    definedPeriods: f('partial', 'official', ['google-meet-security'], 'Google diu que no desa vídeo ni àudio de la reunió si no s’activa la gravació, però no publica terminis per als registres de connexió.'),
    dataAfterDeletion: f('partial', 'official', ['google-meet-security', 'google-privacy-policy'], 'Les gravacions es desen a Google Drive i s’han d’esborrar allà; els registres segueixen els terminis generals del compte.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['google-delete-account'], 'Meet s’elimina amb el compte de Google o deixant de fer-lo servir; no té compte propi.'),
    selfService: f('yes', 'official', ['google-delete-account']),
    directUrl: 'https://myaccount.google.com/deleteservices',
    difficulty: 'medium',
    waitingPeriodDays: 0,
    requiresSupportContact: false,
    steps: googleDeletionSteps,
    obstacles: googleAccountObstacle,
    dataRetained: 'Les gravacions desades a Drive i les còpies que hagin descarregat altres participants.',
    sources: ['google-delete-account'],
  },
  userRights: googleRights,
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['google-ad-center'], 'La personalització dels anuncis del compte es gestiona al Centre d’anuncis.', { url: 'https://myadcenter.google.com/' }),
    telemetryOptOut: unknown('No hem trobat cap opció per desactivar la recollida de dades d’ús dins de Meet.'),
    granularControls: f('partial', 'official', ['google-meet-security'], 'Els controls són sobretot de la reunió (sala d’espera, qui pot presentar, gravació), no de la recollida de dades.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a Meet.'),
  },
  security: {
    e2ee: f('no', 'official', ['google-meet-security'], 'Google descriu xifratge en trànsit per defecte i xifratge en repòs de les gravacions a Drive, no pas xifratge d’extrem a extrem als comptes personals.', { scope: 'none' }),
    ...googleSecurityBase,
  },
  alternatives: [
    {
      app: 'signal',
      comparability: 'partial',
      rationale: 'Les trucades de grup de Signal van xifrades d’extrem a extrem i el servei no conserva ni el contingut ni el graf de contactes.',
      tradeOffs: 'Cal número de telèfon, el nombre de participants és menor i no hi ha enllaç per unir-s’hi des del navegador ni integració amb el calendari.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El compromís de no fer servir dades de client per a publicitat prové de la documentació de Google Cloud i s’aplica sobretot al context de Workspace. Amb un compte personal gratuït, Meet queda sota la política general de Google i l’etiqueta de l’App Store declara l’identificador d’usuari per a màrqueting propi.',
    openQuestions: [
      'Quant de temps conserva Google els registres de participants i de durada de les reunions als comptes personals?',
      'El compromís de no fer servir les dades de Meet per a publicitat cobreix també els comptes gratuïts, o només els de Google Cloud i Workspace?',
    ],
  },
}

/* ═══════════════════════ Google Notícies ═══════════════════════ */
const news: AppSeed = {
  slug: 'google-news',
  name: 'Google News',
  company: 'google-ireland',
  categories: ['noticies-i-mitjans'],
  tagline: 'L’única aplicació de Google d’aquest lot que declara dades per a publicitat de tercers',
  summary:
    'Google News construeix una portada personalitzada a partir de l’activitat del compte: què cerques, què llegeixes i des d’on. L’etiqueta de l’App Store és la més exposada dels quatre serveis de Google del lot: declara ubicació aproximada, identificador de dispositiu, interacció amb el producte i dades publicitàries per a publicitat de tercers, a més de l’historial de navegació i de cerca per a analítica i personalització. El que llegeixes és una dada d’opinió, i aquí alimenta la personalització i el negoci publicitari alhora.',
  platforms: ['web', 'ios', 'android'],
  businessModel: 'advertising',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: { website: 'https://news.google.com/', ...GOOGLE_LINKS, appStore: appStore('459182288') },
  accountRequired: f('partial', 'official', ['google-news-customise'], 'Es pot llegir sense iniciar sessió, però la personalització, el seguiment de temes i la sincronització necessiten el compte de Google.'),
  openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'L’historial de lectura de notícies deixa veure la ideologia, la salut, la situació econòmica i les preocupacions d’una persona amb molta més precisió que la majoria de dades declarades. Aquí, a més, aquest historial es combina amb la ubicació i amb identificadors que l’etiqueta declara per a publicitat de tercers.',
  dataCollection: [
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['google-news-app-store'], note: 'Els articles oberts i les fonts visitades.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['google-news-app-store', 'google-news-customise'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts', 'recomanacions-algoritmiques'], sources: ['google-news-customise'], note: 'Els temes i les fonts que es segueixen i els que l’algorisme dedueix de l’activitat.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts', 'publicitat-personalitzada', 'cessio-a-tercers'], sources: ['google-news-app-store'], note: 'L’etiqueta la declara també per a publicitat de tercers.' }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-news-app-store'], note: 'Per a les notícies locals, si es dona el permís.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-news-app-store'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-news-app-store'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-news-app-store'] }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-news-app-store'] }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['google-news-app-store'], note: 'Subscripcions a mitjans comprades des de l’aplicació.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['google-news-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'cessio-a-tercers'], sources: ['google-news-app-store'], note: 'Declarat per a publicitat de tercers.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus', 'cessio-a-tercers'], sources: ['google-news-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['google-news-app-store'], note: 'Les dades d’error es declaren també sense vincular al compte.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['google-news-app-store'], noTrackingLabel),
    advertisingIdentifiers: f('partial', 'official', ['google-news-app-store'], 'L’etiqueta declara identificadors i dades publicitàries per a publicitat de tercers, tot i no declarar rastreig entre empreses.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['google-news-app-store'], 'L’etiqueta declara ubicació aproximada, identificador de dispositiu, interacció i dades publicitàries per a publicitat de tercers, i un bloc equivalent per a màrqueting propi.'),
    profiling: f('yes', 'official', ['google-news-customise', 'google-news-app-store'], 'La portada es personalitza amb l’activitat del compte i amb els temes i les fonts que se segueixen.'),
    aiTraining: unknown('No hem trobat cap declaració sobre l’ús de l’activitat de Google News per entrenar models.'),
  },
  sharing: {
    ...googleSharing,
    thirdPartySharing: f('yes', 'official', ['google-news-app-store', 'google-privacy-policy'], 'A més dels proveïdors habituals de Google, l’etiqueta declara dades cedides per a publicitat de tercers.'),
  },
  transparency: { policyClarity: 'medium', ...googleTransparency },
  retention: {
    definedPeriods: f('partial', 'official', ['google-my-activity'], 'L’activitat del compte té esborrat automàtic configurable, però la política no fixa terminis propis de Google News.'),
    dataAfterDeletion: unknown('No hem trobat cap termini publicat per a l’historial de lectura després d’esborrar-lo.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['google-delete-account', 'google-my-activity'], 'L’activitat es pot esborrar sense tocar el compte; el compte s’elimina amb el procés general de Google.'),
    selfService: f('yes', 'official', ['google-delete-account']),
    directUrl: 'https://myactivity.google.com/',
    difficulty: 'medium',
    waitingPeriodDays: 0,
    requiresSupportContact: false,
    steps: googleDeletionSteps,
    obstacles: googleAccountObstacle,
    dataRetained: 'El que Google conservi per motius legals o de seguretat segons la política general.',
    sources: ['google-delete-account', 'google-my-activity'],
  },
  userRights: googleRights,
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['google-ad-center'], 'La personalització dels anuncis es desactiva al Centre d’anuncis del compte.', { url: 'https://myadcenter.google.com/' }),
    telemetryOptOut: f('partial', 'official', ['google-my-activity'], 'Es pot aturar i esborrar l’activitat web i d’aplicacions, que és la que alimenta la personalització de la portada.'),
    granularControls: f('yes', 'official', ['google-news-customise'], 'Es poden seguir i amagar temes i fonts, i ajustar les preferències des de la configuració de l’aplicació.'),
    defaultPosture: 'permissive',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a Google News.'),
  },
  security: {
    e2ee: na('És un lector de notícies: no hi ha contingut privat entre persones que es pugui xifrar d’extrem a extrem.'),
    ...googleSecurityBase,
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La diferència amb la resta de serveis de Google d’aquest lot és la publicitat de tercers declarada a l’etiqueta: aquí el que es llegeix té valor publicitari directe. Les pàgines d’ajuda de Google News remeten sempre als controls generals del compte i no documenten cap tractament propi.',
    openQuestions: [
      'Quins tercers reben les dades publicitàries declarades a l’etiqueta: només els mitjans editors, o també intermediaris publicitaris?',
      'Es conserva l’historial de lectura de Google News en algun registre diferent de l’activitat web i d’aplicacions?',
    ],
  },
}

/* ═══════════════════════ Google Play Llibres ═══════════════════════ */
const books: AppSeed = {
  slug: 'google-play-books',
  name: 'Google Play Libros',
  company: 'google-ireland',
  categories: ['llibres-i-lectura'],
  tagline: 'Google desa les últimes cinc pàgines llegides de cada llibre i l’historial de compres no es pot esborrar',
  summary:
    'La política específica de Llibres diu que Google desa les últimes cinc pàgines que s’han vist de cada llibre amb el compte, per sincronitzar la posició de lectura entre dispositius i per vigilància de seguretat. Els editors reben informació de vendes, no dades personals. El límit clar és el registre de compra: Google diu que no es pot esborrar de l’historial del compte, amb el títol inclòs, encara que el llibre es tregui de la biblioteca. L’etiqueta de l’App Store declara correu, nom i identificadors per a màrqueting del mateix desenvolupador.',
  platforms: ['web', 'ios', 'android'],
  businessModel: 'commerce',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: { website: 'https://play.google.com/books', ...GOOGLE_LINKS, appStore: appStore('400989007') },
  accountRequired: f('yes', 'official', ['google-play-books-privacy'], 'Cal un compte de Google per comprar, desar i sincronitzar llibres.'),
  openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Què llegeix una persona, i per on va de cada llibre, diu coses que no diu cap altra dada d’aquest lot: creences, salut, orientació, situació familiar. Google no ho tracta com a categoria especial, però l’historial de compres de llibres és permanent i el ritme de lectura queda registrat.',
  dataCollection: [
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['google-play-books-privacy', 'google-play-books-app-store'], note: 'Google diu que el registre de la transacció, amb el títol del llibre, no es pot esborrar del compte.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-play-books-privacy', 'google-play-books-app-store'], note: 'S’hi inclouen les últimes cinc pàgines vistes de cada llibre, per sincronitzar la posició de lectura i per vigilància de seguretat.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-play-books-app-store'], note: 'Declarada també per a màrqueting del desenvolupador.' }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-play-books-app-store'] }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['google-play-books-app-store', 'google-play-books-privacy'], note: 'Quan Google actua com a agent de l’editor, comparteix la província, la ciutat i el codi postal de facturació per calcular els impostos.' }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-play-books-app-store'] }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-play-books-app-store'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-play-books-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['google-play-books-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['google-play-books-privacy'], note: 'Registres de servidor amb adreça IP, navegador i hora.' }),
    row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['google-play-books-app-store'], note: 'L’etiqueta el declara sense vincular al compte.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-play-books-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-play-books-app-store', 'google-play-books-privacy'], note: 'La política diu que els números d’identificació de dispositiu associats als llibres es poden esborrar.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['google-play-books-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['google-play-books-app-store'], noTrackingLabel),
    advertisingIdentifiers: f('partial', 'official', ['google-play-books-app-store'], 'L’etiqueta declara correu, nom i identificadors per a publicitat o màrqueting del mateix desenvolupador, no per a tercers.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['google-play-books-app-store'], 'L’etiqueta declara dades per a màrqueting del desenvolupador; no hi ha publicitat de tercers declarada.'),
    profiling: f('yes', 'official', ['google-play-personalisation'], 'Google Play personalitza recomanacions i ofertes a partir de l’activitat web i d’aplicacions del compte.'),
    aiTraining: unknown('No hem trobat cap declaració sobre l’ús de l’activitat de lectura per entrenar models.'),
  },
  sharing: {
    ...googleSharing,
    thirdPartySharing: f('partial', 'official', ['google-play-books-privacy'], 'Als editors se’ls dona informació de vendes, no dades personals; quan Google actua com a agent de l’editor, sí que li comunica les dades fiscals de facturació.'),
  },
  transparency: { policyClarity: 'medium', ...googleTransparency },
  retention: {
    definedPeriods: f('partial', 'official', ['google-play-books-privacy', 'google-play-personalisation'], 'Google concreta que desa les últimes cinc pàgines vistes de cada llibre i permet esborrat automàtic de l’historial de Play, però no fixa terminis generals.'),
    dataAfterDeletion: f('partial', 'official', ['google-play-books-privacy'], 'El registre de la compra, amb el títol del llibre, es conserva a l’historial del compte encara que s’esborri la resta.'),
    periods: [
      { dataType: 'interaccions-i-us', period: 'Últimes cinc pàgines vistes de cada llibre, mentre el llibre sigui al compte', sources: ['google-play-books-privacy'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['google-play-books-privacy', 'google-delete-account'], 'El compte s’elimina amb el procés general de Google, però l’historial de compres no es pot esborrar per separat.'),
    selfService: f('yes', 'official', ['google-play-personalisation', 'google-delete-account'], 'L’historial de Play i la personalització es gestionen des de l’aplicació de Play Store.'),
    directUrl: 'https://myactivity.google.com/',
    difficulty: 'medium',
    waitingPeriodDays: 0,
    requiresSupportContact: false,
    steps: [
      'A Play Store, obre la foto de perfil i tria «Personalització a Play» i després «Personalització i historial de Play».',
      'Desactiva l’activitat web i d’aplicacions si no vols que es desi l’activitat, o configura l’esborrat automàtic de l’historial.',
      'Treu de la biblioteca els llibres que no vulguis que hi constin.',
      'Per eliminar-ho tot, segueix el procés general d’eliminació del compte de Google.',
    ],
    obstacles: 'Google diu expressament que el registre de la transacció, amb el títol del llibre comprat, no es pot esborrar de l’historial del compte. Desactivar l’activitat web i d’aplicacions fa perdre la resta de controls de personalització de Play.',
    dataRetained: 'L’historial de compres i el que calgui conservar per obligacions fiscals i comptables.',
    sources: ['google-play-books-privacy', 'google-play-personalisation', 'google-delete-account'],
  },
  userRights: googleRights,
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['google-ad-center'], 'La personalització dels anuncis del compte es gestiona al Centre d’anuncis.', { url: 'https://myadcenter.google.com/' }),
    telemetryOptOut: f('partial', 'official', ['google-play-personalisation'], 'Es pot desactivar l’activitat web i d’aplicacions, però llavors es perden també els controls individuals de personalització de Play.'),
    granularControls: f('partial', 'official', ['google-play-personalisation'], 'Es pot excloure aplicacions o continguts concrets de la personalització i triar un període d’esborrat automàtic.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', [], 'Interpretació pròpia a partir de la documentació de Google: el control fi de la personalització de Play només funciona si l’activitat web i d’aplicacions està activada, de manera que desactivar la recollida de dades costa la resta d’opcions.'),
    darkPatternList: [
      {
        type: 'unbalanced-consent',
        severity: 'low',
        description: 'Desactivar l’activitat web i d’aplicacions deshabilita alhora les opcions individuals de personalització de Play, de manera que la tria és tot o res.',
        sources: ['google-play-personalisation'],
      },
    ],
  },
  security: {
    e2ee: na('És una botiga i un lector de llibres: no hi ha contingut privat entre persones que es pugui xifrar d’extrem a extrem.'),
    ...googleSecurityBase,
  },
  alternatives: [
    {
      app: 'ebiblio',
      comparability: 'partial',
      rationale: 'eBiblio és el servei públic de préstec de llibres electrònics de les biblioteques, amb un catàleg gratuït i sense model publicitari al darrere.',
      tradeOffs: 'El catàleg és més limitat, els préstecs tenen data de caducitat i les còpies disponibles són comptades.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política específica de Llibres és antiga i breu, i conviu amb la política general de Google i amb els controls de Play. La combinació que fa la fitxa —posició de lectura desada, historial de compres permanent i etiqueta amb màrqueting propi— surt de tres documents oficials diferents.',
    openQuestions: [
      'Les anotacions, els subratllats i les notes dels llibres es desen al compte i entren a Takeout?',
      'Quant de temps conserva Google les últimes cinc pàgines vistes després de treure un llibre de la biblioteca?',
    ],
  },
}

/* ═══════════════════════ Google Home ═══════════════════════ */
const home: AppSeed = {
  slug: 'google-home',
  name: 'Google Home',
  company: 'google-ireland',
  categories: ['llar-connectada'],
  tagline: 'Google promet no fer servir àudio, vídeo ni sensors per a publicitat, però el text del que li dius a l’Assistent sí que hi pot anar',
  summary:
    'Els compromisos de seguretat i privadesa de Google Nest són explícits: els dispositius només envien àudio quan detecten una interacció amb l’Assistent, les càmeres només transmeten si algú les ha activat, hi ha indicadors visuals i les dades dels sensors d’ambient i d’activitat no es fan servir per personalitzar anuncis. El matís important és que el text de les interaccions amb l’Assistent de veu sí que pot alimentar la personalització publicitària. A sobre, l’etiqueta de l’App Store declara historial de cerca i de navegació per a publicitat de tercers, cosa que els compromisos no expliquen.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: { website: 'https://home.google.com/', ...GOOGLE_LINKS, privacyCenter: 'https://safety.google/nest/', appStore: appStore('680819774') },
  accountRequired: f('yes', 'official', ['google-home-nest-help'], 'Els compromisos s’apliquen als dispositius fets servir amb un compte de Google, que és el que gestiona la casa i els dispositius.'),
  openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'És l’aplicació del lot que recull dades de dins de casa: qui hi és i a quina hora, què es diu en veu alta, què veuen les càmeres, quina temperatura hi fa. Google en separa una part del negoci publicitari, però l’adreça física, la ubicació exacta, les dades de pagament i l’historial de navegació queden vinculats al mateix compte.',
  dataCollection: [
    row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-home-nest-commitments', 'google-home-app-store'], note: 'Google diu que el dispositiu només envia àudio quan detecta una interacció amb l’Assistent o una funció que el necessita, amb indicador visual.' }),
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-home-nest-commitments', 'google-home-app-store'], note: 'Les càmeres només transmeten si algú les ha activat, amb un indicador lluminós visible.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'entrenament-de-models-dia'], sources: ['google-home-history'], note: 'L’historial de la casa desa l’activitat dels dispositius i les consultes de veu; Google diu que el fa servir també per desenvolupar serveis i entrenar models.' }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-home-app-store'], note: 'L’adreça de la casa, per a rutines, automatitzacions i serveis locals.' }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-home-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-home-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-home-app-store'], note: 'Declarada també per a màrqueting del desenvolupador.' }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-home-app-store'] }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-home-app-store'], note: 'Per compartir la casa amb altres persones i per a trucades i missatges per veu.' }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-home-app-store'], note: 'Subscripcions de Nest Aware i compres associades.' }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-home-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts', 'cessio-a-tercers'], sources: ['google-home-app-store'], note: 'L’etiqueta declara historial de cerca i de navegació per a publicitat de tercers.' }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['cessio-a-tercers', 'publicitat-personalitzada'], sources: ['google-home-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-home-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['google-home-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['google-home-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['google-home-app-store'], noTrackingLabel),
    advertisingIdentifiers: f('partial', 'official', ['google-home-app-store'], 'L’etiqueta declara identificadors i dades de contacte per a màrqueting propi, i historial de cerca i de navegació per a publicitat de tercers.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['google-home-nest-commitments', 'google-home-app-store'], 'Google es compromet a mantenir el vídeo, l’àudio i les lectures dels sensors separats de la publicitat, però admet que el text de les interaccions de veu amb l’Assistent pot alimentar la personalització dels anuncis. L’etiqueta declara, a més, historial de cerca i de navegació per a publicitat de tercers.'),
    profiling: f('yes', 'official', ['google-home-nest-commitments'], 'Les dades dels sensors d’ambient i d’activitat es fan servir per millorar el funcionament dels dispositius i dels serveis.'),
    aiTraining: f('yes', 'official', ['google-home-history'], 'Google diu que fa servir l’historial de la casa per desenvolupar els seus serveis i entrenar models d’IA.'),
  },
  sharing: {
    ...googleSharing,
    thirdPartySharing: f('partial', 'official', ['google-home-nest-commitments'], 'Google diu que el vídeo i les dades dels sensors només es comparteixen amb tercers amb permís explícit d’un membre de la casa, per exemple amb una companyia elèctrica en programes d’eficiència energètica.'),
  },
  transparency: { policyClarity: 'medium', ...googleTransparency },
  retention: {
    definedPeriods: f('yes', 'official', ['google-home-history'], 'L’historial de la casa s’esborra automàticament als 18 mesos per defecte, i es pot configurar a 3 o 36 mesos o desactivar l’esborrat automàtic.'),
    dataAfterDeletion: f('partial', 'official', ['google-home-history'], 'Google diu que l’esborrat comença immediatament, primer treient l’activitat de la vista i després dels sistemes d’emmagatzematge, sense donar un termini final.'),
    periods: [
      { dataType: 'interaccions-i-us', period: '18 mesos per defecte; configurable a 3 o 36 mesos o sense esborrat automàtic', sources: ['google-home-history'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['google-home-history', 'google-delete-account'], 'L’historial de la casa s’esborra des de l’aplicació o des de My Activity; el compte s’elimina amb el procés general de Google.'),
    selfService: f('yes', 'official', ['google-home-history']),
    directUrl: 'https://myactivity.google.com/product/home',
    difficulty: 'medium',
    waitingPeriodDays: 0,
    requiresSupportContact: false,
    steps: [
      'A l’aplicació Google Home, toca la foto de perfil i obre «Configuració de la casa».',
      'A «Privadesa», entra a «Historial de la casa» i tria «Desactiva» o «Desactiva i esborra l’activitat».',
      'També pots esborrar l’activitat per interval de temps o element a element des de myactivity.google.com/product/home.',
      'Per marxar del tot, elimina els dispositius de la casa i després segueix el procés general d’eliminació del compte de Google.',
    ],
    obstacles: googleAccountObstacle,
    dataRetained: 'Les gravacions de càmera desades a subscripcions de vídeo i el que Google conservi per motius legals o de seguretat.',
    sources: ['google-home-history', 'google-delete-account'],
  },
  userRights: googleRights,
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['google-home-nest-commitments', 'google-ad-center'], 'Google diu que la personalització dels anuncis, inclosa la que es pot nodrir del text de les interaccions amb l’Assistent, es pot desactivar del tot a la configuració d’anuncis del compte.', { url: 'https://myadcenter.google.com/' }),
    telemetryOptOut: f('partial', 'official', ['google-home-history'], 'Es pot desactivar l’historial de la casa, però la política no diu quines dades de funcionament continuen recollint-se.'),
    granularControls: f('yes', 'official', ['google-home-nest-commitments', 'google-home-history'], 'Es pot consultar i esborrar l’àudio i el vídeo desats, configurar l’esborrat automàtic i revisar la guia de sensors de cada dispositiu.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a l’aplicació Google Home.'),
  },
  security: {
    e2ee: f('no', 'official', ['google-home-nest-commitments'], 'Google conserva i pot accedir a l’àudio i al vídeo desats al compte; els compromisos de Nest parlen d’actualitzacions i d’avaluacions de seguretat, no de xifratge d’extrem a extrem.', { scope: 'none' }),
    transportEncryption: f('yes', 'official', ['google-safety-center']),
    atRestEncryption: f('yes', 'official', ['google-safety-center'], 'Xifratge en repòs amb claus gestionades per Google.'),
    mfa: googleSecurityBase.mfa,
    independentAudits: f('yes', 'official', ['google-home-nest-commitments'], 'Google diu que sotmet els dispositius Nest a avaluacions de seguretat de tercers independents i que garanteix actualitzacions de seguretat durant almenys cinc anys.'),
    bugBounty: f('yes', 'official', ['google-home-nest-commitments', 'google-home-kunze-2022'], 'Els dispositius Nest entren al programa de recompenses de Google; el 2022 es va pagar una recompensa de 107.500 dòlars per una cadena d’errors a l’altaveu Google Home.'),
    vulnerabilityDisclosure: googleSecurityBase.vulnerabilityDisclosure,
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Els compromisos de Nest són dels documents més concrets que publica Google, però conviuen amb una etiqueta de l’App Store que declara historial de cerca i de navegació per a publicitat de tercers. La fitxa deixa la contradicció a la vista perquè totes dues fonts són oficials.',
    openQuestions: [
      'Què hi ha exactament darrere de l’historial de cerca i de navegació que l’etiqueta declara per a publicitat de tercers?',
      'Des de l’ordre de l’autoritat d’Hamburg del 2019, quin és el règim de revisió humana dels enregistraments de l’Assistent a la Unió Europea?',
    ],
  },
}

/* ═══════════════════════ Wizz Air ═══════════════════════ */
const wizzair: AppSeed = {
  slug: 'wizz-air',
  name: 'Wizz Air',
  company: 'wizz-air-hungary',
  categories: ['viatges-i-allotjament'],
  tagline: 'Publicitat de retorn a Google i Meta amb consentiment, i un compte que no deixa canviar el correu tu sol',
  summary:
    'L’avís de privadesa de Wizz Air és dels més detallats del lot: llista els terminis de conservació purpose a purpose, distingeix els tres responsables del grup (Hongria, Malta i el Regne Unit) i reconeix que tracta dades de salut quan es demana assistència especial o s’informa de l’aptitud per volar. La publicitat de retorn a Google i a les xarxes de Meta es fa amb consentiment, sobre un perfil construït amb les cerques i les reserves que no s’han acabat. El punt feble és operatiu: el correu electrònic del compte no es pot canviar des del perfil i cal passar pel xat o el centre de trucades, que és justament el que va motivar una reclamació de noyb el 2020.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Hongria: l’autoritat principal és la NAIH; Wizz Air Malta i Wizz Air UK actuen com a responsables separats i, en màrqueting i fidelització, com a responsables conjunts',
  links: {
    website: 'https://www.wizzair.com/',
    privacyPolicy: 'https://www.wizzair.com/en-gb/legal/privacy-notice',
    appStore: appStore('583348801'),
  },
  accountRequired: f('partial', 'official', ['wizz-air-privacy-notice'], 'Es pot reservar sense compte, però el compte WIZZ és el que gestiona els Wizz Credits, les reserves i les preferències.'),
  openSource: f('no', 'editorial', [], 'Aplicació privativa; no hi ha cap repositori públic ni cap declaració de codi obert.', { licence: 'Privativa' }),
  dataSummary:
    'Una reserva d’avió no és només un bitllet: conté el document d’identitat, la nacionalitat, amb qui viatges i quan no seràs a casa. Wizz Air hi afegeix un perfil comercial molt ric (historial de vols, despesa anual, valoracions de l’atenció al client, companys de viatge) i, en alguns casos, dades de salut per a l’assistència a bord.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['wizz-air-privacy-notice'], note: 'Ha de coincidir exactament amb el document de viatge.' }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['wizz-air-privacy-notice'] }),
    row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['wizz-air-privacy-notice'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'prestacio-del-servei'], sources: ['wizz-air-privacy-notice'], note: 'Número i caducitat del document de viatge, dins del registre de nom del passatger (PNR).' }),
    row('origen-etnic-o-nacionalitat', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['wizz-air-privacy-notice'], note: 'La nacionalitat i el país de residència formen part del PNR i es comuniquen a les autoritats que ho exigeixen.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['wizz-air-privacy-notice', 'wizz-air-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['wizz-air-privacy-notice'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['wizz-air-privacy-notice'], note: 'Adreça de facturació del compte.' }),
    row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['wizz-air-privacy-notice'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['wizz-air-privacy-notice'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['wizz-air-privacy-notice'], note: 'Historial de reserves, rutes, classe, equipatge, serveis addicionals i despesa anual.' }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['wizz-air-privacy-notice'], note: 'Categoria especial: assistència especial, oxigen, embaràs, al·lèrgies o aptitud per volar, amb consentiment explícit.' }),
    row('situacio-familiar', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['wizz-air-privacy-notice'], note: 'L’avís cita l’estat civil i la informació sobre els companys de viatge dins del perfil de màrqueting.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['wizz-air-privacy-notice'], note: 'Les destinacions cercades i no comprades passen a formar part del perfil d’interessos presumptes.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['wizz-air-privacy-notice'] }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['atencio-a-lusuari', 'seguretat-i-prevencio-del-frau'], sources: ['wizz-air-privacy-notice'], note: 'Gravació de les trucades amb atenció al client, amb consentiment i conservada tres anys.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['wizz-air-app-store', 'wizz-air-privacy-notice'], note: 'L’etiqueta de l’App Store declara identificadors per rastrejar entre aplicacions i llocs d’altres empreses.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['wizz-air-app-store'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['wizz-air-privacy-notice'], note: 'Identificadors de galeta i de dispositiu enviats a les API de Google Ads i de Meta.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['wizz-air-app-store', 'wizz-air-privacy-notice'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['wizz-air-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['wizz-air-app-store'], 'L’etiqueta de l’App Store declara identificadors utilitzats per rastrejar la persona entre aplicacions i llocs web d’altres empreses.'),
    advertisingIdentifiers: f('yes', 'official', ['wizz-air-app-store', 'wizz-air-privacy-notice'], 'L’avís descriu l’ús d’identificadors de galeta i de dispositiu per a la publicitat de retorn.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['wizz-air-privacy-notice'], 'L’avís documenta la integració de l’API de Google Ads i de l’API de màrqueting de Meta per a Facebook i Instagram.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['wizz-air-privacy-notice'], 'Missatges personalitzats i publicitat de retorn a Google, Facebook i Instagram, amb consentiment segons els articles 6.1.a i 22.2.c del RGPD.'),
    profiling: f('yes', 'official', ['wizz-air-privacy-notice'], 'L’avís descriu explícitament l’elaboració de perfils amb l’historial de vols, la despesa, el comportament de navegació, la fidelització i les valoracions de l’atenció rebuda.'),
    aiTraining: unknown('No hem trobat cap declaració sobre l’ús de les dades de clients per entrenar models, ni tan sols a l’avís de l’assistent virtual.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['wizz-air-privacy-notice'], 'Amb agents de terra i serveis aeroportuaris, agències de màrqueting, proveïdors de productes de tercers (hotels, lloguer de cotxes, aparcament) i autoritats d’immigració i seguretat.'),
    intraGroupSharing: f('yes', 'official', ['wizz-air-privacy-notice'], 'Les societats del grup Wizz Air intercanvien dades i actuen com a responsables conjuntes en màrqueting i en el programa de fidelització.'),
    dataBrokerSales: unknown('L’avís no diu expressament si ven o no dades personals.'),
    internationalTransfers: f('yes', 'official', ['wizz-air-privacy-notice'], 'Transferències fora de l’Espai Econòmic Europeu amb clàusules contractuals tipus o decisió d’adequació; l’avís llista els països de destinació, entre els quals Egipte, l’Aràbia Saudita, Israel, el Kazakhstan i Turquia.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència de peticions governamentals de dades de Wizz Air.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['wizz-air-privacy-notice'], 'L’avís fixa terminis concrets per a cada finalitat: sis anys per al compte, un any i mig per al PNR, tres anys per a l’atenció al client i les gravacions de trucades, i cinc o sis anys per a la defensa de reclamacions.'),
    dataAfterDeletion: f('partial', 'official', ['wizz-air-privacy-notice'], 'Després d’eliminar el compte, les dades de gestió del compte es conserven sis anys per complir les obligacions legals de conservació.'),
    periods: [
      { dataType: 'identificador-de-compte', period: '6 anys des del compliment del contracte (eliminació del compte WIZZ)', sources: ['wizz-air-privacy-notice'] },
      { dataType: 'document-identificatiu-oficial', period: '1,5 anys per a les dades del viatge concret (PNR)', sources: ['wizz-air-privacy-notice'] },
      { dataType: 'veu-i-audio', period: '3 anys; un mes per esborrar-les si es retira el consentiment', sources: ['wizz-air-privacy-notice'] },
      { dataType: 'historial-de-compres', period: '6 anys per als serveis de tercers contractats', sources: ['wizz-air-privacy-notice'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['wizz-air-account-help'], 'El centre d’ajuda documenta l’eliminació permanent del compte WIZZ.'),
    selfService: f('yes', 'official', ['wizz-air-account-help'], 'Des de l’aplicació mòbil, al menú d’edició del perfil, o des del web amb la sessió iniciada.'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'A l’aplicació WIZZ d’iOS o Android, obre el menú «Edita el teu perfil».',
      'Tria l’opció d’eliminar el compte i confirma-ho.',
      'Alternativament, inicia la sessió al web i fes servir l’enllaç «Delete Account» que hi ha al final de la pàgina de felicitacions i reclamacions.',
      'Si tens diversos comptes WIZZ i els vols fusionar en lloc d’esborrar-los, cal contactar amb l’empresa.',
    ],
    obstacles: 'El correu electrònic del compte no es pot canviar des del perfil: cal passar pel xat en directe o pel centre de trucades. Els Wizz Credits associats al compte es perden en eliminar-lo.',
    dataRetained: 'Les dades de gestió del compte es conserven sis anys, i les de les reserves i les reclamacions segons els terminis legals aplicables.',
    sources: ['wizz-air-account-help', 'wizz-air-privacy-notice'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['wizz-air-privacy-notice'], 'Dret de portabilitat en format estructurat i llegible per màquina, a sol·licitud a data.protection@wizzair.com o des del compte.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['wizz-air-privacy-notice'], 'Sol·licituds a data.protection@wizzair.com o des de la secció corresponent del compte WIZZ; l’autoritat principal és la NAIH hongaresa.', {
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['wizz-air-privacy-notice'], 'La publicitat personalitzada i la de retorn es basen en el consentiment i es poden retirar en qualsevol moment, sense justificació i de manera gratuïta.'),
    telemetryOptOut: f('partial', 'official', ['wizz-air-privacy-notice'], 'Les dades d’ús de l’aplicació es tracten per contracte o per interès legítim; només les galetes no necessàries depenen del consentiment.'),
    granularControls: f('partial', 'official', ['wizz-air-privacy-notice'], 'Hi ha control sobre el màrqueting, les galetes i la gravació de trucades, però no sobre el perfil comercial que es construeix amb les reserves.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'independent', ['wizz-air-noyb-2020'], 'noyb va documentar que exercir el dret de rectificació obligava a trucar a una línia de pagament: 35,67 euros per una trucada de 32 minuts, i amb la correcció feta a mitges.'),
    darkPatternList: [
      {
        type: 'hidden-exit',
        severity: 'medium',
        description: 'El correu electrònic del compte no es pot corregir des del perfil i cal passar pel xat o pel centre de trucades, que és el cor de la reclamació de noyb del 2020.',
        sources: ['wizz-air-account-help', 'wizz-air-noyb-2020'],
      },
    ],
  },
  security: {
    e2ee: na('És una aplicació de reserves: no hi ha comunicacions privades entre persones que es puguin xifrar d’extrem a extrem.'),
    transportEncryption: f('yes', 'editorial', [], 'Comprovació pròpia: el web i l’API de Wizz Air es serveixen exclusivament per HTTPS.'),
    atRestEncryption: unknown('L’avís de privadesa no descriu les mesures tècniques de xifratge en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre verificació en dos passos del compte WIZZ.'),
    independentAudits: unknown('No hem trobat cap auditoria ni certificació de seguretat publicada.'),
    bugBounty: unknown('No hem trobat cap programa públic de recompenses per vulnerabilitats.'),
    vulnerabilityDisclosure: f('no', 'editorial', [], 'Comprovació pròpia: wizzair.com no publica cap fitxer /.well-known/security.txt ni cap política de divulgació de vulnerabilitats visible.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'L’avís per a clients i viatgers és molt complet i és la base de gairebé tota la fitxa. La part de seguretat, en canvi, és pràcticament opaca: no hi ha pàgina de seguretat, ni security.txt, ni informe de transparència.',
    openQuestions: [
      'La reclamació de noyb davant de l’autoritat austríaca del 2020 va acabar amb alguna resolució?',
      'Quines mesures de seguretat del compte WIZZ hi ha, més enllà de la contrasenya?',
    ],
  },
}

/* ═══════════════════════ Skyscanner ═══════════════════════ */
const skyscanner: AppSeed = {
  slug: 'skyscanner',
  name: 'Skyscanner',
  company: 'skyscanner-limited',
  categories: ['viatges-i-allotjament'],
  tagline: 'Un cercador que perfila els teus viatges i comparteix dades amb el grup Trip.com i amb socis publicitaris',
  summary:
    'Skyscanner no ven bitllets: et passa a l’aerolínia o a l’agència, que passa a ser responsable independent de les teves dades. Mentrestant, la política reconeix que combina el que li dones amb el que observa per deduir preferències i interessos, i personalitzar plataforma, serveis i publicitat. L’etiqueta de l’App Store declara identificadors i dades d’ús per rastrejar entre empreses, i publicitat de tercers amb ubicació precisa a l’analítica. A favor seu té la seguretat: és l’única aplicació de viatges del lot amb security.txt i programa de recompenses actiu a Bugcrowd.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Regne Unit, amb delegat de protecció de dades a Edimburg; forma part del grup Trip.com',
  links: {
    website: 'https://www.skyscanner.es/',
    privacyPolicy: 'https://www.skyscanner.net/media/privacy-policy',
    appStore: appStore('415458524'),
  },
  accountRequired: f('no', 'official', ['skyscanner-privacy-policy'], 'Es pot cercar i comparar sense compte; el compte serveix per desar cerques, alertes de preu i preferències.'),
  openSource: f('no', 'editorial', [], 'Aplicació privativa; no hi ha cap repositori públic del client.', { licence: 'Privativa' }),
  dataSummary:
    'Les cerques de vols revelen plans que encara no s’han pres: on aniràs, amb qui, quan marxaràs de casa i quant pots gastar. Skyscanner ho combina amb la ubicació i amb els identificadors del dispositiu per deduir interessos, i ho fa servir tant per personalitzar la plataforma com per a la publicitat.',
  dataCollection: [
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['skyscanner-privacy-policy', 'skyscanner-app-store'], note: 'Les cerques i les alertes de preu alimenten el perfil d’interessos.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada', 'recomanacions-algoritmiques'], sources: ['skyscanner-privacy-policy'], note: 'La política parla obertament d’«informació de perfilat»: dedueixen preferències i interessos de les dades combinades.' }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['skyscanner-app-store', 'skyscanner-privacy-policy'], note: 'Ubicació del dispositiu, només si es dona el permís; l’etiqueta la declara també per a analítica.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['skyscanner-privacy-policy'], note: 'Deduïda de l’adreça IP, per endevinar l’aeroport de sortida.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['skyscanner-privacy-policy'] }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['skyscanner-app-store', 'skyscanner-privacy-policy'] }),
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['skyscanner-privacy-policy'], note: 'Només si es crea un compte o es completa una reserva a la plataforma.' }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['skyscanner-privacy-policy'], note: 'Les gestionen processadors de pagament contractats, per a les reserves fetes dins de la plataforma.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['skyscanner-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'cessio-a-tercers'], sources: ['skyscanner-app-store'], note: 'Declarat per a publicitat de tercers i per rastrejar entre empreses.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'cessio-a-tercers'], sources: ['skyscanner-app-store'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['skyscanner-privacy-policy'], note: 'Anunciants, xarxes de màrqueting i afiliats hi poden recollir informació amb galetes i tecnologies similars.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['skyscanner-app-store', 'skyscanner-privacy-policy'] }),
    row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['skyscanner-privacy-policy'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['skyscanner-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['skyscanner-app-store'], 'L’etiqueta declara identificadors i dades d’ús utilitzats per rastrejar la persona entre aplicacions i llocs d’altres empreses.'),
    advertisingIdentifiers: f('yes', 'official', ['skyscanner-app-store', 'skyscanner-privacy-policy'], 'Identificadors d’usuari i de dispositiu declarats per a publicitat de tercers; la política descriu la creació d’audiències amb solucions publicitàries externes.'),
    thirdPartyTrackersPresent: f('yes', 'independent', ['skyscanner-pi-facebook-2019', 'skyscanner-privacy-policy'], 'Privacy International va documentar el 2018 que l’aplicació d’Android enviava dades a Facebook en obrir-se; en la comprovació del febrer de 2019 encara contactava amb Facebook, però ja sense enviar l’identificador publicitari.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['skyscanner-privacy-policy', 'skyscanner-app-store'], 'La política dedica un apartat a com es fan servir les dades personals per a publicitat, amb audiències similars i audiències personalitzades a plataformes de tercers.'),
    profiling: f('yes', 'official', ['skyscanner-privacy-policy'], 'Skyscanner combina el que recull, genera i rep per deduir preferències i interessos i personalitzar plataforma, serveis i publicitat; diu que aquest perfilat no té efectes jurídics significatius.'),
    aiTraining: unknown('La política parla d’aprenentatge automàtic per a la personalització, però no diu si les dades s’utilitzen per entrenar models més enllà d’aquesta finalitat.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['skyscanner-privacy-policy'], 'Amb els proveïdors de viatge amb qui es reserva, que actuen com a responsables independents, i amb socis publicitaris, de prevenció del frau i de col·laboracions de marca.'),
    intraGroupSharing: f('yes', 'official', ['skyscanner-privacy-policy'], 'Amb la resta d’entitats del grup, incloses Trip.com, Beijing Skyscanner Technology, Shenzhen Skyscanner Technology i ExperienceOn Ventures.'),
    dataBrokerSales: unknown('La política no diu expressament si ven o no dades personals.'),
    internationalTransfers: f('yes', 'official', ['skyscanner-privacy-policy'], 'Servidors a Irlanda, Frankfurt, Tòquio, el Canadà i Singapur; les transferències fora del Regne Unit i de l’Espai Econòmic Europeu es fan amb clàusules contractuals tipus o normes corporatives vinculants.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència de peticions governamentals de dades.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['skyscanner-privacy-policy'], 'La política diu que conserva les dades «només mentre calgui» i remet a un formulari de contacte per saber-ne els terminis, sense publicar-ne cap.'),
    dataAfterDeletion: unknown('No hi ha cap termini publicat per a les dades que resten després d’eliminar el perfil.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['skyscanner-privacy-policy'], 'Es poden consultar, modificar, descarregar i esborrar les dades principals del perfil en qualsevol moment.'),
    selfService: f('yes', 'official', ['skyscanner-privacy-policy'], 'Des del perfil del compte; els altres drets s’exerceixen amb el formulari de sol·licitud de privadesa o escrivint al delegat de protecció de dades.'),
    directUrl: 'https://www.skyscanner.net/trust/privacy-request',
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Inicia la sessió i obre el teu perfil de Skyscanner.',
      'Revisa-hi les dades del compte i les preferències de màrqueting, i esborra les que vulguis.',
      'Per a la resta de drets, fes servir la pàgina «Make a Data Privacy Request» o escriu a dpo@skyscanner.net.',
    ],
    obstacles: 'Les dades ja transmeses a l’aerolínia o a l’agència on s’ha fet la reserva queden en mans d’aquesta empresa, que n’és responsable independent.',
    dataRetained: 'La política no publica cap termini concret de conservació després de la supressió.',
    sources: ['skyscanner-privacy-policy'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['skyscanner-privacy-policy'], 'Dret a obtenir les dades facilitades en format estructurat i llegible per màquina, i descàrrega directa des del perfil.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['skyscanner-privacy-policy'], 'Formulari de sol·licitud de privadesa, correu a dpo@skyscanner.net o carta al delegat de protecció de dades a Edimburg.', {
      url: 'https://www.skyscanner.net/trust/privacy-request',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['skyscanner-privacy-policy'], 'Hi ha preferències de privadesa i de galetes i es pot gestionar el màrqueting des del perfil, però el perfilat per personalitzar la plataforma es basa en l’interès legítim i només s’hi pot oposar cas per cas.'),
    telemetryOptOut: f('partial', 'official', ['skyscanner-privacy-policy'], 'Les galetes i tecnologies similars depenen del consentiment quan cal; la recollida bàsica d’ús i de diagnòstic no és opcional.'),
    granularControls: f('partial', 'official', ['skyscanner-privacy-policy'], 'Configuració de privadesa i de galetes, preferències de màrqueting i edició del perfil.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('És un cercador de viatges: no hi ha comunicacions privades entre persones que es puguin xifrar d’extrem a extrem.'),
    transportEncryption: f('yes', 'editorial', [], 'Comprovació pròpia: el web i el fitxer security.txt es serveixen per HTTPS amb redirecció forçada.'),
    atRestEncryption: unknown('La política parla de servidors segurs, però no descriu el xifratge en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre verificació en dos passos del compte.'),
    independentAudits: unknown('No hem trobat cap auditoria ni certificació de seguretat publicada.'),
    bugBounty: f('yes', 'official', ['skyscanner-security-txt'], 'El fitxer security.txt remet a un programa actiu a Bugcrowd, amb saló de la fama públic.', {
      url: 'https://bugcrowd.com/engagements/skyscanner',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['skyscanner-security-txt'], 'security.txt amb contacte a security@skyscanner.net, política de divulgació pròpia i data de caducitat declarada.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El lloc de Skyscanner bloqueja la lectura automatitzada de la política; hem consultat la versió arxivada a la Wayback Machine (agost de 2024) i hem verificat el fitxer security.txt directament al domini. És possible que la política vigent hagi canviat en detalls menors.',
    openQuestions: [
      'Quins terminis de conservació aplica realment Skyscanner? La política remet a un formulari i no en publica cap.',
      'Quin paper té Trip.com Group, propietari de Skyscanner, en el tractament de les dades europees?',
    ],
  },
}

/* ═══════════════════════ Iberia ═══════════════════════ */
const iberia: AppSeed = {
  slug: 'iberia',
  name: 'Iberia',
  company: 'iberia-lineas-aereas',
  categories: ['viatges-i-allotjament'],
  tagline: 'Reconeixement facial voluntari als aeroports d’Aena i una filtració del 2025 a través d’un proveïdor',
  summary:
    'La política d’Iberia és la d’una aerolínia gran: dades compartides amb tot el grup IAG, cessions obligatòries a duanes i immigració (fins i tot per sobrevolar els Estats Units), i categories especials de dades quan hi ha assistència mèdica, menús o reconeixement facial. La identificació biomètrica als aeroports gestionats per Aena és voluntària i el responsable n’és Aena, amb Iberia com a encarregada. Iberia declara que no ven dades personals, però no publica cap termini de conservació. El novembre de 2025 va notificar una filtració de dades de clients originada als sistemes d’un proveïdor.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Espanya; responsable: Iberia Líneas Aéreas de España S.A. Operadora, amb responsabilitat conjunta amb Avios Group per a Iberia Club',
  links: {
    website: 'https://www.iberia.com/',
    privacyPolicy: 'https://www.iberia.com/es/privacy-information/',
    appStore: appStore('434825954'),
  },
  accountRequired: f('partial', 'official', ['iberia-privacy-policy'], 'Es pot reservar sense registre, però la gestió de les reserves, Iberia Club i la majoria de drets s’exerceixen des de l’àrea privada.'),
  openSource: f('no', 'editorial', [], 'Aplicació privativa; no hi ha cap repositori públic del client.', { licence: 'Privativa' }),
  dataSummary:
    'Iberia acumula el conjunt complet del que és viatjar: document d’identitat, itineraris, targeta de fidelització, despesa i, si s’hi accedeix, la cara. Una part important d’aquestes dades no es queda a l’empresa: va a les autoritats de frontera dels països de l’itinerari i als socis del grup IAG i de l’aliança oneworld.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['iberia-privacy-policy'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'prestacio-del-servei'], sources: ['iberia-privacy-policy'], note: 'Comunicat a duanes i immigració dels països d’origen, trànsit, destinació i sobrevol.' }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['iberia-privacy-policy'], note: 'Categoria especial. Reconeixement facial a la xarxa d’aeroports d’Aena: voluntari, amb consentiment, i amb Aena com a responsable i Iberia com a encarregada.' }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['iberia-privacy-policy'], note: 'Categoria especial: proves mèdiques, assistència especial i comunicacions a autoritats sanitàries en cas de malaltia contagiosa a bord.' }),
    row('conviccions-i-opinions', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['iberia-privacy-policy'], note: 'La política admet que un menú especial pot revelar la religió o l’estat de salut sense ser, en si, una dada sensible.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['iberia-privacy-policy', 'iberia-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['iberia-app-store'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['iberia-app-store', 'iberia-privacy-policy'], note: 'Es comparteixen amb Riskified, empresa israeliana de prevenció del frau que hi fa tractament automatitzat com a responsable independent.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils', 'personalitzacio-de-continguts'], sources: ['iberia-privacy-policy', 'iberia-app-store'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['iberia-privacy-policy'], note: 'La política parla d’enriquir el perfilat de la base de clients amb segments de mercat i graus de vinculació, per interès legítim i amb dret d’oposició.' }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['personalitzacio-de-continguts', 'mesura-publicitaria'], sources: ['iberia-privacy-policy'], note: 'Galetes i tecnologies similars, inclosos els bàners i enllaços dels socis de màrqueting.' }),
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['iberia-app-store'], note: 'L’etiqueta la declara sense vincular al compte.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['iberia-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['iberia-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['iberia-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['iberia-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['iberia-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['iberia-app-store'], 'L’etiqueta declara dades de contacte, identificadors i dades d’ús utilitzats per rastrejar la persona entre aplicacions i llocs d’altres empreses.'),
    advertisingIdentifiers: f('yes', 'official', ['iberia-app-store'], 'Identificador d’usuari i de dispositiu declarats per a publicitat o màrqueting del desenvolupador.'),
    thirdPartyTrackersPresent: f('partial', 'official', ['iberia-privacy-policy'], 'La política descriu galetes i tecnologies similars i la recollida d’informació sobre bàners i enllaços de socis de màrqueting, sense enumerar-ne els proveïdors.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['iberia-privacy-policy', 'iberia-app-store'], 'Comunicacions comercials personalitzades segons les preferències deduïdes; l’etiqueta declara correu i identificadors per a màrqueting del desenvolupador.'),
    profiling: f('yes', 'official', ['iberia-privacy-policy'], 'Iberia elabora segments de mercat i graus de vinculació dels clients per interès legítim, amb dret d’oposició expressa.'),
    aiTraining: unknown('No hem trobat cap declaració sobre l’ús de dades de clients per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['iberia-privacy-policy'], 'Amb autoritats de duanes i immigració, aerolínies i operadors de transport de l’itinerari, agències, entitats financeres, Riskified per al control del frau, Aena per al reconeixement facial i proveïdors de màrqueting i enquestes.'),
    intraGroupSharing: f('yes', 'official', ['iberia-privacy-policy'], 'Amb les aerolínies del grup IAG (British Airways, Iberia Express, Vueling, Aer Lingus, LEVEL, Avios Group i altres) per conèixer millor les preferències de viatge.'),
    dataBrokerSales: f('no', 'official', ['iberia-privacy-policy'], 'La política diu expressament que Iberia no ven dades personals a tercers i que només permet comunicacions comercials de tercers amb consentiment.'),
    internationalTransfers: f('yes', 'official', ['iberia-privacy-policy'], 'Transferències habituals fora de l’Espai Econòmic Europeu per prestar el servei i complir obligacions legals com a aerolínia, incloses les autoritats de frontera dels països de destinació i de sobrevol.', { mechanism: 'derogation' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència de peticions governamentals de dades.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['iberia-privacy-policy'], 'La política diu que conserva les dades «tant de temps com calgui» per a la finalitat, amb exemples però sense cap termini concret.'),
    dataAfterDeletion: f('partial', 'official', ['iberia-privacy-policy'], 'En exercir el dret de supressió o retirar el consentiment, la informació pot quedar bloquejada a disposició de jutjats, tribunals i autoritats durant el termini mínim que fixi la llei.'),
  },
  accountDeletion: {
    possible: f('partial', 'official', ['iberia-privacy-policy'], 'Es pot exercir el dret de supressió, però la política no documenta cap botó d’eliminació del compte ni d’Iberia Club.'),
    selfService: f('partial', 'official', ['iberia-privacy-policy'], 'Els clients registrats i els membres d’Iberia Club poden exercir la majoria de drets des de l’àrea privada; la resta, amb un formulari de gestió de drets.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Inicia la sessió a iberia.com i obre l’àrea privada o «El meu perfil / Preferències» d’Iberia Club.',
      'Revisa-hi i modifica les dades i les preferències de comunicacions comercials.',
      'Per a la supressió i la resta de drets, omple el formulari de gestió de drets individuals del web.',
      'Si no ets client registrat ni membre d’Iberia Club, escriu a OficinaDPO@iberia.es.',
    ],
    obstacles: 'Iberia Club és de responsabilitat compartida amb Avios Group, i les dades del programa poden dependre també de British Airways i d’American Airlines a On Business. Les cessions a autoritats de frontera no es poden revocar.',
    dataRetained: 'Dades bloquejades a disposició de jutjats i autoritats pel termini mínim legal, i el que calgui per a obligacions fiscals i de transport aeri.',
    sources: ['iberia-privacy-policy'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['iberia-privacy-policy'], 'Dret de portabilitat previst a la política i exercible pels mateixos canals que la resta de drets.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['iberia-privacy-policy'], 'Des de l’àrea privada, amb el formulari de gestió de drets individuals o escrivint a l’Oficina de Protecció de Dades d’Iberia.', {
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['iberia-privacy-policy'], 'Es pot deixar de rebre comunicacions comercials en qualsevol moment; Iberia diu que tramita les baixes en un màxim de 30 dies i que continuarà enviant les comunicacions operatives de la reserva.'),
    telemetryOptOut: f('partial', 'official', ['iberia-privacy-policy'], 'Hi ha gestió de galetes, però la recollida d’ús i de diagnòstic de l’aplicació no és opcional.'),
    granularControls: f('partial', 'official', ['iberia-privacy-policy'], 'Preferències de comunicacions i de galetes, i consentiment revocable per al reconeixement facial amb Aena.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('És una aplicació de reserves i de fidelització: no hi ha comunicacions privades entre persones que es puguin xifrar d’extrem a extrem.'),
    transportEncryption: f('yes', 'editorial', [], 'Comprovació pròpia: iberia.com es serveix exclusivament per HTTPS.'),
    atRestEncryption: unknown('La política no descriu les mesures tècniques de xifratge en repòs.'),
    mfa: f('partial', 'press', ['iberia-filtracio-bleeping-2025'], 'Arran de la filtració del 2025, Iberia va afegir codis de verificació per als canvis de compte lligats al correu electrònic.'),
    independentAudits: unknown('No hem trobat cap auditoria ni certificació de seguretat publicada.'),
    bugBounty: unknown('No hem trobat cap programa públic de recompenses per vulnerabilitats.'),
    vulnerabilityDisclosure: f('no', 'editorial', [], 'Comprovació pròpia: iberia.com no publica cap fitxer /.well-known/security.txt ni cap política de divulgació de vulnerabilitats visible.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política vigent des del 26 de juny de 2026 és molt extensa i explícita en les cessions, però evita qualsevol termini de conservació. La responsabilitat conjunta amb Avios Group i amb British Airways fa que el programa de fidelització tingui un règim diferent del de la reserva.',
    openQuestions: [
      'Quants clients va afectar la filtració del proveïdor notificada el novembre de 2025 i quin proveïdor era?',
      'Iberia aplica algun termini màxim de conservació de l’historial de vols i del perfil comercial?',
    ],
  },
}

/* ═══════════════════════ Omio ═══════════════════════ */
const omio: AppSeed = {
  slug: 'omio',
  name: 'Omio',
  company: 'omio-corp',
  categories: ['viatges-i-allotjament', 'mobilitat-i-transport'],
  tagline: 'Empresa de Delaware amb seu operativa a Berlín que declara terminis concrets i deixa desactivar l’analítica de l’aplicació',
  summary:
    'Omio compara i ven bitllets de tren, autobús i avió a Europa. La política és alemanya de fet: l’autoritat de control és la de Berlín, els registres del web s’esborren automàticament als dos anys i les dades associades a identificadors publicitaris, als catorze mesos. L’aplicació fa perfils d’ús pseudònims entre dispositius, però es poden desactivar des de les preferències. La ubicació GPS, diu la política, només omple el formulari de cerca i no es desa. El que sí que surt de l’empresa són les dades de reserva: van al transportista i, en alguns països, a Amadeus, que les tracta com a responsable independent.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Alemanya: Omio Corp. és una societat de Delaware amb seu operativa a Berlín i l’autoritat de control és la de Berlín',
  links: {
    website: 'https://www.omio.es/',
    privacyPolicy: 'https://www.omio.es/politica-de-privacidad',
    appStore: appStore('885372509'),
  },
  accountRequired: f('no', 'official', ['omio-privacy-policy'], 'La política diu expressament que es poden fer servir els serveis sense crear cap compte; el perfil serveix per desar dades per a reserves futures.'),
  openSource: f('no', 'editorial', [], 'Aplicació privativa; no hi ha cap repositori públic del client.', { licence: 'Privativa' }),
  dataSummary:
    'Les dades d’Omio dibuixen els desplaçaments quotidians i els viatges: d’on surts, on vas, amb qui i quan. A diferència d’altres aplicacions del lot, bona part d’aquestes dades tenen un termini publicat, però la reserva acaba en mans del transportista i, en alguns casos, d’Amadeus, que ja no depenen d’Omio.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['omio-privacy-policy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['omio-privacy-policy'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['omio-privacy-policy'] }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['omio-privacy-policy'], note: 'Números d’identificació emesos per l’administració, quan el transportista els exigeix.' }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['omio-privacy-policy'], note: 'Adreça de facturació.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['omio-privacy-policy'], note: 'Les dades de targeta van directament al processador de pagaments; Omio només en desa la versió truncada per a informes i anàlisi de frau.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['omio-privacy-policy'] }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['atencio-a-lusuari', 'seguretat-i-prevencio-del-frau'], sources: ['omio-privacy-policy'], note: 'Gravació de les trucades amb atenció al client, amb possibilitat d’oposar-s’hi durant la conversa.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['omio-privacy-policy'], note: 'Els registres automàtics del web es conserven dos anys i s’esborren tot seguit.' }),
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['omio-privacy-policy', 'omio-app-store'], note: 'Amb permís, el GPS omple el formulari de cerca; la política diu que aquestes dades no es desen d’altra manera.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['omio-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['omio-app-store', 'omio-privacy-policy'], note: 'L’aplicació pot llegir el nom, el fabricant, el model, l’IMEI i els identificadors publicitaris d’Android i d’iOS.' }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['omio-privacy-policy'], note: 'Les dades personals associades a identificadors publicitaris s’esborren automàticament al cap de 14 mesos.' }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['omio-privacy-policy'] }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['omio-app-store', 'omio-privacy-policy'], note: 'Amb Google Analytics, Firebase i Amplitude; la política reconeix perfils d’ús pseudònims entre dispositius.' }),
    row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['omio-privacy-policy'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['omio-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['omio-app-store'], 'L’etiqueta declara identificadors i dades d’ús utilitzats per rastrejar la persona entre aplicacions i llocs d’altres empreses.'),
    advertisingIdentifiers: f('yes', 'official', ['omio-privacy-policy'], 'La política cita l’identificador publicitari d’Android i el d’Apple entre les dades que l’aplicació pot llegir.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['omio-privacy-policy'], 'Google Analytics, Firebase Analytics, Amplitude i proveïdors de seguiment de conversions i de publicitat de retorn.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['omio-privacy-policy'], 'Galetes de màrqueting i seguiment de conversions, amb enviament d’identificadors a plataformes de socis publicitaris i possibilitat d’exclusió.'),
    profiling: f('yes', 'official', ['omio-privacy-policy'], 'Perfils d’ús pseudònims entre dispositius i personalització de les ofertes per interès legítim; es pot desactivar l’analítica des de les preferències de l’aplicació.'),
    aiTraining: unknown('No hem trobat cap declaració sobre l’ús de les dades per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['omio-privacy-policy'], 'Amb els transportistes de la reserva, amb Amadeus IT Group per a les reserves d’alguns països (responsable independent), amb processadors de pagament i amb proveïdors tècnics i d’atenció al client.'),
    intraGroupSharing: f('partial', 'official', ['omio-privacy-policy'], 'Les reserves amb SNCF, Ouigo i Oui España les pot gestionar la filial francesa Omio Voyages SASU per compte d’Omio.'),
    dataBrokerSales: unknown('La política no diu expressament si ven o no dades personals; sí que diu que pot compartir informació agregada o anònima amb anunciants i inversors.'),
    internationalTransfers: f('yes', 'official', ['omio-privacy-policy'], 'Transferències fora de la Unió Europea amb contractes model de la Comissió i, per a les dades de la reserva enviades a transportistes de tercers països, empara en els articles 49.1.b i 49.1.c del RGPD.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència de peticions governamentals de dades.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['omio-privacy-policy'], 'Hi ha terminis concrets per als registres del web (dos anys) i per a les dades associades a identificadors publicitaris (catorze mesos); la resta es guarda «mentre hi hagi una necessitat comercial legítima».'),
    dataAfterDeletion: f('partial', 'official', ['omio-privacy-policy'], 'Un cop desapareguda la finalitat o l’obligació legal, Omio diu que esborra o anonimitza les dades, sense fixar-ne el termini.'),
    periods: [
      { dataType: 'adreca-ip', period: '2 anys per als registres automàtics del web, amb esborrat automàtic posterior', sources: ['omio-privacy-policy'] },
      { dataType: 'identificador-publicitari', period: '14 mesos per a les dades personals associades a galetes i identificadors publicitaris', sources: ['omio-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['omio-privacy-policy'], 'La política reconeix el dret de supressió de l’article 17 del RGPD i el dret a l’oblit, exercibles davant de l’equip de protecció de dades.'),
    selfService: unknown('No hem trobat cap documentació d’una opció d’eliminar el compte des de l’aplicació o del web.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Escriu a l’equip de protecció de dades d’Omio des de l’adreça de contacte que hi ha a la política de privadesa.',
      'Demana-hi la supressió de les dades i del perfil d’usuari, tot citant l’article 17 del RGPD.',
      'Si només vols deixar de rebre correus, fes servir l’enllaç de baixa de qualsevol butlletí.',
      'Per aturar el seguiment publicitari, fes servir l’exclusió de l’aplicació i la de les galetes del web.',
    ],
    obstacles: 'Les dades de la reserva ja transmeses al transportista o a Amadeus les tracten aquestes empreses com a responsables independents i no depenen d’Omio. Les cookies d’exclusió s’han de tornar a configurar en cada navegador i dispositiu.',
    dataRetained: 'El que calgui per a obligacions fiscals, comptables i d’investigació del frau.',
    sources: ['omio-privacy-policy'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['omio-privacy-policy'], 'Dret de portabilitat de l’article 20 del RGPD, exercible davant de l’equip de protecció de dades.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['omio-privacy-policy'], 'Per correu a l’equip de protecció de dades; l’autoritat de control competent és la de Berlín.', {
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['omio-privacy-policy'], 'Exclusió del seguiment publicitari amb una galeta d’exclusió, gestor de preferències de Your Online Choices i funció d’exclusió dins de l’aplicació.'),
    telemetryOptOut: f('yes', 'official', ['omio-privacy-policy'], 'La política diu que l’analítica es pot desactivar en qualsevol moment des de les preferències de l’aplicació, i que Google Analytics es pot desactivar al web.'),
    granularControls: f('yes', 'official', ['omio-privacy-policy'], 'Categories de galetes separades, exclusió publicitària, baixa del butlletí, oposició a la gravació de trucades i desactivació de l’analítica de l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', [], 'Interpretació pròpia a partir de la política: l’exclusió publicitària es desa en una galeta, de manera que s’esborra en netejar el navegador i s’ha de repetir en cada dispositiu, navegador i domini d’Omio.'),
    darkPatternList: [
      {
        type: 'nagging',
        severity: 'low',
        description: 'L’exclusió del seguiment publicitari es desa com a galeta persistent i cal tornar-la a activar cada vegada que s’esborren les galetes o es canvia de navegador, de dispositiu o de domini nacional d’Omio.',
        sources: ['omio-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: na('És una aplicació de reserves: no hi ha comunicacions privades entre persones que es puguin xifrar d’extrem a extrem.'),
    transportEncryption: f('yes', 'official', ['omio-privacy-policy'], 'La política diu que les dades de localització es transmeten per una connexió encriptada i que les dades de targeta es xifren, normalment amb SSL, abans d’enviar-les al processador de pagaments.'),
    atRestEncryption: unknown('La política no descriu el xifratge en repòs de les dades desades.'),
    mfa: unknown('No hem trobat cap documentació sobre verificació en dos passos del compte.'),
    independentAudits: unknown('No hem trobat cap auditoria ni certificació de seguretat publicada.'),
    bugBounty: unknown('No hem trobat cap programa públic de recompenses per vulnerabilitats.'),
    vulnerabilityDisclosure: f('no', 'editorial', [], 'Comprovació pròpia: omio.com i omio.es no publiquen cap fitxer /.well-known/security.txt accessible.'),
  },
  alternatives: [
    {
      app: 'renfe',
      comparability: 'partial',
      rationale: 'Comprar el bitllet directament a l’operador ferroviari estalvia l’intermediari: les dades de la reserva no passen per una tercera empresa amb model publicitari.',
      tradeOffs: 'Es perd la comparació entre tren, autobús i avió i entre operadors de països diferents.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El lloc d’Omio bloqueja la lectura automatitzada; hem consultat la versió en castellà arxivada a la Wayback Machine (gener de 2026) del document actualitzat el 27 de maig de 2024. És de les poques polítiques del lot que fixa terminis concrets i que ofereix desactivar l’analítica de l’aplicació.',
    openQuestions: [
      'Omio permet eliminar el compte des de l’aplicació, o només per correu a l’equip de protecció de dades?',
      'Quin és el règim de protecció de dades aplicable a Omio Corp. com a societat de Delaware amb seu operativa a Berlín?',
    ],
  },
}

/* ═══════════════════════ GetYourGuide ═══════════════════════ */
const getyourguide: AppSeed = {
  slug: 'getyourguide',
  name: 'GetYourGuide',
  company: 'getyourguide-deutschland',
  categories: ['viatges-i-allotjament'],
  tagline: 'Política alemanya detallada, servidors a la UE i, tot i això, correu i identificador de dispositiu per a publicitat de tercers',
  summary:
    'GetYourGuide ven entrades i activitats i documenta el tractament amb molt de detall: el proveïdor de cada eina, on és i amb quina garantia de transferència. L’adreça IP es desa xifrada i s’esborra als trenta dies, i els servidors d’AWS són a la Unió Europea. La cara menys visible és la comercial: la llista de desitjos serveix per fer recomanacions i publicitat dirigida per interès legítim, l’etiqueta de l’App Store declara correu i identificador de dispositiu per a publicitat de tercers, i les dades de la reserva —que poden incloure passaport, edat, dieta o necessitats d’accessibilitat— van al proveïdor de l’activitat, que n’és responsable independent.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Alemanya: responsable GetYourGuide Deutschland GmbH, amb seu a Berlín',
  links: {
    website: 'https://www.getyourguide.es/',
    privacyPolicy: 'https://www.getyourguide.com/c/privacy-policy/',
    appStore: appStore('705079381'),
  },
  accountRequired: f('no', 'official', ['getyourguide-privacy-policy'], 'La política diu expressament que no cal registrar-se per fer servir el servei; el compte permet desar llistes de desitjos, gestionar reserves i configurar notificacions.'),
  openSource: f('no', 'editorial', [], 'Aplicació privativa; no hi ha cap repositori públic del client.', { licence: 'Privativa' }),
  dataSummary:
    'Reservar una activitat diu on seràs, quin dia i a quina hora, amb quanta gent i, sovint, dades que el RGPD tracta com a categoria especial: al·lèrgies, dieta o necessitats d’accessibilitat. Aquestes dades no es queden a Berlín: arriben al guia o a l’empresa que fa l’activitat, sovint fora de la Unió Europea.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['getyourguide-privacy-policy', 'getyourguide-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'cessio-a-tercers'], sources: ['getyourguide-privacy-policy', 'getyourguide-app-store'], note: 'L’etiqueta la declara també per a publicitat de tercers.' }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['getyourguide-privacy-policy'], note: 'Per als avisos de reserva per SMS, enviats amb Twilio.' }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['getyourguide-privacy-policy'], note: 'Adreça de facturació.' }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['getyourguide-privacy-policy'], note: 'Número de passaport, quan l’activitat ho exigeix.' }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['getyourguide-privacy-policy'], note: 'Categoria especial: requisits dietètics o necessitats d’accessibilitat, amb consentiment explícit segons l’article 9.2.a del RGPD.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['getyourguide-privacy-policy', 'getyourguide-app-store'], note: 'Amb proveïdors de pagament que actuen com a responsables, i amb Forter i Ethoca per al control del frau; si es paga per factura, Klarna fa una avaluació creditícia amb valors de puntuació.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['getyourguide-privacy-policy', 'getyourguide-app-store'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['getyourguide-privacy-policy'], note: 'Les llistes de desitjos, l’historial de cerca i de reserves i la ubicació ordenen els resultats i alimenten la publicitat dirigida, per interès legítim.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts', 'recomanacions-algoritmiques'], sources: ['getyourguide-app-store', 'getyourguide-privacy-policy'] }),
    row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['getyourguide-privacy-policy'], note: 'Les valoracions poden mostrar el nom, la franja d’edat, el país i fotos, i es poden publicar en webs d’empreses afiliades i en material promocional; es poden enviar de manera anònima.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['getyourguide-privacy-policy'], note: 'Es desa xifrada i s’esborra al cap de 30 dies.' }),
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['getyourguide-app-store'], note: 'L’etiqueta la declara sense vincular al compte.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['getyourguide-app-store', 'getyourguide-privacy-policy'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'cessio-a-tercers'], sources: ['getyourguide-app-store', 'getyourguide-privacy-policy'], note: 'Els SDK de l’aplicació registren identificadors de dispositiu, adreça IP, activitat dins de l’aplicació i ubicació de xarxa.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['getyourguide-app-store'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['getyourguide-privacy-policy'], note: 'Amb Google i Meta per a analítica i publicitat de retorn, amb consentiment.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['getyourguide-app-store', 'getyourguide-privacy-policy'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['getyourguide-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['getyourguide-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar la persona entre aplicacions i llocs d’altres empreses.'),
    advertisingIdentifiers: f('yes', 'official', ['getyourguide-privacy-policy', 'getyourguide-app-store'], 'Els SDK de l’aplicació registren identificadors únics del dispositiu i l’etiqueta els declara per a publicitat de tercers.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['getyourguide-privacy-policy'], 'Google Ireland per a analítica i publicitat de retorn, Meta, Smartly.io per avaluar els anuncis i Braze per a notificacions personalitzades.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['getyourguide-privacy-policy', 'getyourguide-app-store'], 'Publicitat i remàrqueting amb Google i Meta amb consentiment, i llistes de desitjos utilitzades per mostrar anuncis dirigits per interès legítim.'),
    profiling: f('yes', 'official', ['getyourguide-privacy-policy'], 'La política descriu la personalització del contingut i l’ordenació dels resultats de cerca segons l’historial de cerca i de reserves, la ubicació i les interaccions.'),
    aiTraining: unknown('La política descriu un xatbot amb tecnologia d’IA de Voiceflow i una eina d’Assembled per a l’atenció al client, però no diu si les converses s’utilitzen per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['getyourguide-privacy-policy'], 'Amb el proveïdor de l’activitat reservada, que actua com a responsable independent, i amb encarregats com Zendesk, Assembled, Sprout Social, Braze, Twilio, Datadog i AWS.'),
    intraGroupSharing: f('yes', 'official', ['getyourguide-privacy-policy'], 'Les consultes d’atenció al client les pot tractar la filial GetYourGuide Global Services GmbH.'),
    dataBrokerSales: unknown('La política no diu expressament si ven o no dades personals.'),
    internationalTransfers: f('yes', 'official', ['getyourguide-privacy-policy'], 'Amb clàusules contractuals tipus o el marc de privadesa de dades UE–EUA segons el proveïdor; les dades de la reserva enviades a proveïdors d’activitats de fora de l’Espai Econòmic Europeu s’emparen en els articles 49.1.b i 49.1.c del RGPD.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència de peticions governamentals de dades.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['getyourguide-privacy-policy'], 'Hi ha un termini explícit per a l’adreça IP (30 dies); la resta s’esborra o s’anonimitza «tan aviat com deixi de ser necessària», sense terminis publicats.'),
    dataAfterDeletion: f('partial', 'official', ['getyourguide-privacy-policy'], 'En eliminar el compte, el perfil s’esborra de manera completa i permanent, però es conserven còpies de seguretat mentre calguin per motius legals o per defensar reclamacions.'),
    periods: [
      { dataType: 'adreca-ip', period: '30 dies, desada xifrada', sources: ['getyourguide-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['getyourguide-privacy-policy'], 'La política diu que, en eliminar el compte, el perfil s’esborra de manera completa i permanent.'),
    selfService: unknown('La política remet al formulari de sol·licitud de drets i no documenta cap botó d’eliminació dins de l’aplicació.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Obre el formulari de sol·licitud de drets que enllaça la política de privadesa, o escriu a l’equip de privadesa de GetYourGuide.',
      'Demana-hi la supressió del compte i de les dades personals.',
      'Si només vols deixar de rebre avisos, canvia-ho a «Configuració» i «Notificacions» del perfil.',
      'Revisa també les preferències de galetes i de màrqueting del web i del menú de privadesa de l’aplicació.',
    ],
    obstacles: 'Les dades enviades al proveïdor de l’activitat les tracta aquesta empresa com a responsable independent i no depenen de GetYourGuide. Les còpies de seguretat es conserven mentre siguin necessàries per a reclamacions.',
    dataRetained: 'Còpies de seguretat conservades per motius legals o per assegurar i defensar reclamacions.',
    sources: ['getyourguide-privacy-policy'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['getyourguide-privacy-policy'], 'Dret d’accés i de portabilitat previstos a la política, exercibles amb el formulari de sol·licitud o per correu.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['getyourguide-privacy-policy'], 'Formulari de sol·licitud de drets, correu postal o correu electrònic a l’equip de privadesa; hi ha delegat de protecció de dades extern.', {
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['getyourguide-privacy-policy'], 'Les galetes i els SDK de publicitat es poden desactivar per categories, però l’ús de la llista de desitjos per a publicitat dirigida es basa en l’interès legítim i només s’hi pot oposar.'),
    telemetryOptOut: f('partial', 'official', ['getyourguide-privacy-policy'], 'L’eina de preferències permet activar i desactivar categories de tecnologies, excepte les estrictament necessàries.'),
    granularControls: f('yes', 'official', ['getyourguide-privacy-policy'], 'Preferències de galetes i de màrqueting per categories al web i al menú de privadesa de l’aplicació, i preferències de notificacions al perfil.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('És una aplicació de reserva d’activitats: no hi ha comunicacions privades entre persones que es puguin xifrar d’extrem a extrem.'),
    transportEncryption: f('yes', 'official', ['getyourguide-privacy-policy'], 'La política diu que les dades personals tractades pel xatbot es xifren en trànsit i en repòs, i que l’adreça IP es desa xifrada.'),
    atRestEncryption: f('partial', 'official', ['getyourguide-privacy-policy'], 'Hi ha xifratge en repòs documentat per a l’adreça IP i per a les dades del xatbot; la política no ho generalitza a la resta de dades.'),
    mfa: unknown('No hem trobat cap documentació sobre verificació en dos passos del compte.'),
    independentAudits: unknown('No hem trobat cap auditoria ni certificació de seguretat publicada.'),
    bugBounty: unknown('No hem trobat cap programa públic de recompenses per vulnerabilitats.'),
    vulnerabilityDisclosure: f('no', 'editorial', [], 'Comprovació pròpia: getyourguide.com no publica cap fitxer /.well-known/security.txt accessible.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política de GetYourGuide és la més detallada del lot pel que fa a encarregats i a garanties de transferència: identifica cada proveïdor i la base jurídica de cada tractament. El lloc bloqueja la lectura automatitzada i n’hem consultat la versió arxivada a la Wayback Machine (setembre de 2026).',
    openQuestions: [
      'Es pot eliminar el compte des de l’aplicació, o només per sol·licitud a l’equip de privadesa?',
      'Les converses amb el xatbot d’IA s’utilitzen per entrenar o ajustar models?',
    ],
  },
}

export const lot: SeedLot = {
  companies: [
    {
      slug: 'wizz-air-hungary',
      name: 'Wizz Air',
      legalName: 'WIZZ Air Hungary Ltd.',
      description:
        'Aerolínia de baix cost hongaresa, amb societats germanes a Malta i al Regne Unit. Les tres actuen com a responsables separades i, en màrqueting i fidelització, com a responsables conjuntes.',
      headquartersCountry: 'HU',
      euEstablishment: 'WIZZ Air Hungary Ltd., Lechner Ödön fasor 6, H-1095 Budapest (Hongria)',
      leadSupervisoryAuthority: 'naih-hu',
      ownership: 'public',
      foundedYear: 2003,
      primaryRevenueModel: 'commerce',
      website: 'https://www.wizzair.com/',
      productDomains: ['wizzair.com'],
      privacyContact: 'data.protection@wizzair.com',
    },
    {
      slug: 'skyscanner-limited',
      name: 'Skyscanner',
      legalName: 'Skyscanner Limited',
      description:
        'Cercador i comparador de vols, hotels i lloguer de cotxes fundat a Edimburg. Des del 2016 forma part del grup xinès Trip.com, amb qui comparteix dades segons la seva política.',
      headquartersCountry: 'GB',
      euEstablishment: 'Sense establiment principal a la Unió Europea; la seu i el delegat de protecció de dades són al Regne Unit',
      leadSupervisoryAuthority: 'ico-gb',
      ownership: 'subsidiary',
      parentGroup: 'Trip.com Group',
      foundedYear: 2003,
      primaryRevenueModel: 'advertising',
      website: 'https://www.skyscanner.net/',
      productDomains: ['skyscanner.net', 'skyscanner.es', 'skyscanner.com'],
      privacyContact: 'dpo@skyscanner.net',
    },
    {
      slug: 'iberia-lineas-aereas',
      name: 'Iberia',
      legalName: 'Iberia Líneas Aéreas de España S.A. Operadora, Sociedad Unipersonal',
      description:
        'Aerolínia espanyola del grup International Consolidated Airlines Group (IAG), al qual pertanyen també British Airways, Vueling, Aer Lingus, Iberia Express i LEVEL. Comparteix la responsabilitat del programa Iberia Club amb Avios Group Limited.',
      headquartersCountry: 'ES',
      euEstablishment: 'Iberia Líneas Aéreas de España S.A. Operadora, Calle Martínez Villergas 49, 28027 Madrid',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      parentGroup: 'International Airlines Group (IAG)',
      foundedYear: 1927,
      primaryRevenueModel: 'commerce',
      website: 'https://www.iberia.com/',
      productDomains: ['iberia.com'],
      privacyContact: 'OficinaDPO@iberia.es',
    },
    {
      slug: 'omio-corp',
      name: 'Omio',
      legalName: 'Omio Corp.',
      description:
        'Cercador i venedor de bitllets de tren, autobús i avió a Europa, nascut com a GoEuro. És una societat de Delaware amb la seu operativa a Berlín, des d’on actua com a responsable segons el RGPD i la llei alemanya de protecció de dades.',
      headquartersCountry: 'DE',
      euEstablishment: 'Omio Corp., Warschauer Platz 12, 10245 Berlín (Alemanya)',
      leadSupervisoryAuthority: 'berlin',
      ownership: 'private',
      foundedYear: 2012,
      primaryRevenueModel: 'commerce',
      website: 'https://www.omio.es/',
      productDomains: ['omio.com', 'omio.es', 'goeuro.com'],
    },
    {
      slug: 'getyourguide-deutschland',
      name: 'GetYourGuide',
      legalName: 'GetYourGuide Deutschland GmbH',
      description:
        'Plataforma de reserva d’activitats, visites guiades i entrades a atraccions. La societat alemanya és la responsable del tractament; la filial GetYourGuide Global Services GmbH gestiona part de l’atenció al client.',
      headquartersCountry: 'DE',
      euEstablishment: 'GetYourGuide Deutschland GmbH, Sonnenburger Strasse 73, 10437 Berlín (Alemanya)',
      leadSupervisoryAuthority: 'berlin',
      ownership: 'private',
      foundedYear: 2009,
      primaryRevenueModel: 'commerce',
      website: 'https://www.getyourguide.es/',
      productDomains: ['getyourguide.com', 'getyourguide.es'],
    },
  ],
  sources: [
    /* ── Etiquetes de l’App Store ── */
    s('google-meet-app-store', 'Google Meet — App Store (Privacidad de la app)', appStore('1096918571'), 'Apple / Google', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: dades vinculades per a funcionalitat, analítica i personalització, i identificador d’usuari per a màrqueting propi; cap dada per rastrejar.',
    }),
    s('google-news-app-store', 'Google News — App Store (Privacidad de la app)', appStore('459182288'), 'Apple / Google', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: ubicació aproximada, identificador de dispositiu, interacció i dades publicitàries declarades per a publicitat de tercers; cap dada per rastrejar.',
    }),
    s('google-play-books-app-store', 'Google Play Libros — App Store (Privacidad de la app)', appStore('400989007'), 'Apple / Google', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: correu, nom i identificadors per a màrqueting del desenvolupador; historial de cerca i dades d’error sense vincular al compte.',
    }),
    s('google-home-app-store', 'Google Home — App Store (Privacidad de la app)', appStore('680819774'), 'Apple / Google', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: adreça física, ubicació exacta, àudio, fotos o vídeos, informació de pagament i identificadors vinculats, amb historial de cerca i de navegació per a publicitat de tercers.',
    }),
    s('wizz-air-app-store', 'Wizz Air - Reservar Vuelos — App Store (Privacidad de la app)', appStore('583348801'), 'Apple / Wizz Air Hungary', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors declarats per rastrejar entre aplicacions i llocs d’altres empreses; correu i identificadors vinculats per a personalització i funcionalitat.',
    }),
    s('skyscanner-app-store', 'Skyscanner - Vuelos y hoteles — App Store (Privacidad de la app)', appStore('415458524'), 'Apple / Skyscanner', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors i dades d’ús per rastrejar entre empreses, i identificadors i dades publicitàries declarats per a publicitat de tercers.',
    }),
    s('iberia-app-store', 'Iberia — App Store (Privacidad de la app)', appStore('434825954'), 'Apple / Iberia', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: dades de contacte, identificadors i dades d’ús declarats per rastrejar entre empreses; ubicació exacta i dades de diagnòstic sense vincular al compte.',
    }),
    s('omio-app-store', 'Omio: Reserva tren, bus, vuelo — App Store (Privacidad de la app)', appStore('885372509'), 'Apple / Omio', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors i dades d’ús per rastrejar entre empreses; ubicació exacta i aproximada declarades sense vincular al compte.',
    }),
    s('getyourguide-app-store', 'GetYourGuide: planea y reserva — App Store (Privacidad de la app)', appStore('705079381'), 'Apple / GetYourGuide', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors per rastrejar entre empreses, i correu i identificador de dispositiu declarats per a publicitat de tercers.',
    }),

    /* ── Google ── */
    s('google-meet-security', 'Google Meet security and privacy for users', 'https://support.google.com/meet/answer/9852160?hl=en', 'Google', 'support-doc', 'primary', {
      summary: 'Pàgina oficial: xifratge en trànsit per defecte, gravacions xifrades en repòs a Drive, cap enregistrament si no s’activa la gravació i compromís de no fer servir dades de client per a publicitat.',
    }),
    s('google-news-customise', 'Customize what you find on Google News', 'https://support.google.com/news/answer/9245525?hl=en', 'Google', 'support-doc', 'primary', {
      summary: 'Ajuda oficial sobre la personalització de Google News i la remissió als controls d’activitat del compte de Google.',
    }),
    s('google-play-books-privacy', 'Google Play — Privacy Policy for Books', 'https://books.google.com/googlebooks/privacy.html', 'Google', 'privacy-policy', 'primary', {
      summary: 'Política específica de Llibres: desa les últimes cinc pàgines vistes de cada llibre, registres de servidor, informació de vendes als editors i impossibilitat d’esborrar el registre de compra.',
    }),
    s('google-play-personalisation', 'Manage personalisation and history on Google Play', 'https://support.google.com/googleplay/answer/16693200?hl=en', 'Google', 'support-doc', 'primary', {
      summary: 'Com desactivar l’activitat web i d’aplicacions a Play, excloure continguts concrets de la personalització i configurar l’esborrat automàtic de l’historial.',
    }),
    s('google-home-nest-commitments', 'Google Nest Security & Privacy Commitments', 'https://safety.google/nest/', 'Google', 'privacy-center', 'primary', {
      summary: 'Compromisos oficials de Nest: àudio només en interactuar amb l’Assistent, indicadors visuals, dades de sensors fora de la personalització publicitària i text de les interaccions de veu que sí que hi pot entrar.',
    }),
    s('google-home-history', 'Manage & delete your Gemini for Home activity', 'https://support.google.com/googlehome/answer/16613583?hl=en', 'Google', 'support-doc', 'primary', {
      summary: 'Historial de la casa: 18 mesos per defecte, configurable a 3 o 36 mesos, ús per desenvolupar serveis i entrenar models, i passos per desactivar-lo i esborrar-lo.',
    }),
    s('google-home-nest-help', 'Google Nest and Google Home app privacy resources', 'https://support.google.com/googlenest/answer/9327662?hl=en', 'Google', 'support-doc', 'primary', {
      summary: 'Pàgina índex de l’ajuda de Nest, que remet als compromisos de seguretat i privadesa i a les guies de sensors, càmeres i accés convidat.',
    }),
    s('google-home-kunze-2022', 'Researcher Says Google Paid $100k Bug Bounty for Smart Speaker Vulnerabilities', 'https://www.securityweek.com/researcher-says-google-paid-100k-bug-bounty-smart-speaker-vulnerabilities/', 'SecurityWeek', 'press', 'secondary', {
      publishedAt: '2022-12-30',
      summary: 'Recompensa de 107.500 dòlars a Matt Kunze per una cadena d’errors que permetia crear un compte fantasma a l’altaveu Google Home i escoltar-ne el micròfon.',
    }),
    s('google-home-hamburg-2019', 'Google ordered to halt human review of voice AI recordings over privacy risks', 'https://techcrunch.com/2019/08/02/google-ordered-to-halt-human-review-of-voice-ai-recordings-over-privacy-risks/', 'TechCrunch', 'press', 'secondary', {
      publishedAt: '2019-08-02',
      summary: 'L’autoritat d’Hamburg obre un procediment d’urgència de l’article 66 del RGPD després de la filtració de gravacions de l’Assistent; Google atura tres mesos les transcripcions a la Unió Europea.',
    }),

    /* ── Wizz Air ── */
    s('wizz-air-privacy-notice', 'Privacy Notice for Customers and Travellers', 'https://www.wizzair.com/cms/api/docs/default-source/downloadable-documents/privacy-notices/wizz-air---customer-privacy-notice---20251001.pdf', 'Wizz Air', 'privacy-policy', 'primary', {
      publishedAt: '2025-10-01',
      summary: 'Avís vigent per a clients: responsables del grup, finalitats i bases jurídiques, terminis concrets de conservació, dades de salut, publicitat de retorn amb Google i Meta i transferències internacionals.',
    }),
    s('wizz-air-account-help', 'Account modifications — WIZZ Account Information', 'https://www.wizzair.com/en-gb/help-centre/my-wizz-account/wizz-account/account-modifications', 'Wizz Air', 'support-doc', 'primary', {
      summary: 'Centre d’ajuda oficial: com eliminar el compte WIZZ des de l’aplicació o del web, i per què el correu electrònic només es pot canviar per xat o per telèfon.',
    }),
    s('wizz-air-noyb-2020', 'Wizz Air: €1 for a flight, €35 for your GDPR right', 'https://noyb.eu/en/wizz-air-eu1-flight-eu35-your-gdpr-right', 'noyb', 'ngo', 'independent', {
      publishedAt: '2020-10-21',
      summary: 'Reclamació de noyb davant de l’autoritat austríaca: Wizz Air obligava a trucar a una línia de pagament per rectificar dades, amb un cost de 35,67 euros, i no va corregir el correu electrònic.',
    }),

    /* ── Skyscanner ── */
    s('skyscanner-privacy-policy', 'Skyscanner privacy policy', 'https://www.skyscanner.net/media/privacy-policy', 'Skyscanner', 'privacy-policy', 'primary', {
      summary: 'Política oficial: perfilat d’interessos, publicitat amb audiències de tercers, compartició amb proveïdors de viatge i amb el grup Trip.com, ubicació dels servidors i drets. Consultada a la Wayback Machine perquè el lloc bloqueja la lectura automatitzada.',
      archiveUrl: 'https://web.archive.org/web/20240826214313/https://www.skyscanner.net/media/privacy-policy?locale=en-GB&market=UK',
    }),
    s('skyscanner-security-txt', 'Skyscanner security.txt', 'https://www.skyscanner.es/.well-known/security.txt', 'Skyscanner', 'technical-doc', 'primary', {
      summary: 'Fitxer security.txt amb contacte de seguretat, programa de recompenses a Bugcrowd, saló de la fama i política de divulgació de vulnerabilitats.',
    }),
    s('skyscanner-pi-facebook-2019', 'Guess what? Facebook still tracks you on Android apps (even if you don’t have a Facebook account)', 'https://privacyinternational.org/blog/2758/appdata-update', 'Privacy International', 'ngo', 'independent', {
      publishedAt: '2019-03-06',
      summary: 'Segona comprovació de Privacy International: l’aplicació de Skyscanner encara contactava amb Facebook en obrir-se, però ja sense enviar l’identificador publicitari de Google.',
    }),

    /* ── Iberia ── */
    s('iberia-privacy-policy', 'Personal data protection policy — Iberia', 'https://www.iberia.com/es/privacy-information/', 'Iberia', 'privacy-policy', 'primary', {
      publishedAt: '2026-06-26',
      summary: 'Política vigent: responsable i responsables conjunts, categories especials (salut, biometria), reconeixement facial amb Aena, cessions al grup IAG i a autoritats de frontera, Riskified, absència de terminis i canals d’exercici de drets.',
    }),
    s('iberia-filtracio-bleeping-2025', 'Iberia discloses customer data leak after vendor security breach', 'https://www.bleepingcomputer.com/news/security/iberia-discloses-customer-data-leak-after-vendor-security-breach/', 'BleepingComputer', 'press', 'secondary', {
      publishedAt: '2025-11-24',
      summary: 'Iberia notifica els clients d’un accés no autoritzat als sistemes d’un proveïdor, amb noms, adreces de correu i números d’Iberia Club exposats, i afegeix codis de verificació als canvis de compte.',
    }),

    /* ── Omio ── */
    s('omio-privacy-policy', 'Política de privacidad de Omio', 'https://www.omio.es/politica-de-privacidad', 'Omio', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2024-05-27',
      summary: 'Política oficial: responsable, terminis de dos anys per als registres i catorze mesos per als identificadors publicitaris, analítica desactivable, publicitat de retorn amb exclusió, Amadeus com a responsable independent i transferències amb contractes model. Consultada a la Wayback Machine perquè el lloc bloqueja la lectura automatitzada.',
      archiveUrl: 'https://web.archive.org/web/20260109004412/https://www.omio.es/politica-de-privacidad',
    }),

    /* ── GetYourGuide ── */
    s('getyourguide-privacy-policy', 'GetYourGuide Privacy Policy', 'https://www.getyourguide.com/c/privacy-policy/', 'GetYourGuide', 'privacy-policy', 'primary', {
      summary: 'Política oficial: responsable a Berlín, adreça IP xifrada i esborrada als 30 dies, servidors d’AWS a la Unió Europea, encarregats i garanties de transferència detallats, dades especials de reserva i eliminació del compte per sol·licitud. Consultada a la Wayback Machine perquè el lloc bloqueja la lectura automatitzada.',
      archiveUrl: 'https://web.archive.org/web/20260909182814/https://www.getyourguide.com/c/privacy-policy?referrer_source=site_footer',
    }),
  ],
  apps: [meet, news, books, home, wizzair, skyscanner, iberia, omio, getyourguide],
  incidents: [
    {
      slug: 'google-home-ordre-hamburg-assistent-2019',
      title: 'Ordre de l’autoritat d’Hamburg per aturar la revisió humana de les gravacions de l’Assistent',
      type: 'regulatory-order',
      severity: 'medium',
      apps: ['google-home'],
      company: 'google',
      occurredAt: '2019-07-01',
      disclosedAt: '2019-08-01',
      description:
        'Després que un col·laborador filtrés més de mil fragments d’àudio de l’Assistent de Google al mitjà belga VRT NWS, en què s’identificaven persones i s’hi sentien adreces i converses sobre salut, l’autoritat de protecció de dades d’Hamburg va obrir un procediment d’urgència a l’empara de l’article 66 del RGPD, el primer que es feia servir des de l’entrada en vigor del reglament. Google va comunicar a l’autoritat que aturava les transcripcions de gravacions de veu a la Unió Europea durant almenys tres mesos a partir de l’1 d’agost de 2019.',
      affectedPeople: 'Persones usuàries de l’Assistent de Google a la Unió Europea; la filtració concreta afectava més de mil gravacions en neerlandès.',
      regulatory: {
        authority: 'Hamburgische Beauftragte für Datenschutz und Informationsfreiheit',
        legalBasis: 'Article 66 del RGPD (procediment d’urgència)',
        status: 'final',
      },
      sources: ['google-home-hamburg-2019'],
    },
    {
      slug: 'google-home-vulnerabilitat-escolta-2022',
      title: 'Cadena d’errors que convertia un altaveu Google Home en un micròfon remot',
      type: 'vulnerability',
      severity: 'medium',
      apps: ['google-home'],
      company: 'google',
      occurredAt: '2021-01-08',
      disclosedAt: '2022-12-28',
      description:
        'L’investigador Matt Kunze va descobrir que una persona dins de l’abast de la xarxa sense fil podia enllaçar un compte propi a un altaveu Google Home i, a partir d’aquí, enviar-hi ordres per internet, accedir al flux del micròfon i fer peticions HTTP dins de la xarxa local. Google va tancar el primer informe dient que era el comportament previst, el va reobrir el març de 2021 amb informació addicional i va acabar pagant 107.500 dòlars de recompensa. La correcció es va desplegar el 2021.',
      affectedPeople: 'Persones amb altaveus Google Home a l’abast d’un atacant dins de la xarxa sense fil.',
      sources: ['google-home-kunze-2022'],
    },
    {
      slug: 'wizz-air-reclamacio-noyb-rectificacio-2020',
      title: 'Reclamació de noyb per cobrar el dret de rectificació a través d’una línia de pagament',
      type: 'other',
      severity: 'low',
      apps: ['wizz-air'],
      company: 'wizz-air-hungary',
      occurredAt: '2020-10-21',
      disclosedAt: '2020-10-21',
      description:
        'Una passatgera austríaca que havia canviat legalment de cognom va voler actualitzar el cognom i el correu electrònic del compte. El sistema en línia de Wizz Air només permetia canvis de nom per matrimoni, i la va obligar a trucar a una línia de pagament: 35,67 euros per una trucada de 32 minuts. A sobre, Wizz Air va corregir el cognom però no el correu, i per això la dona no va rebre els avisos de cancel·lació del vol. noyb va presentar una reclamació davant de l’autoritat austríaca de protecció de dades per infracció dels articles 12.5 i 16 del RGPD.',
      affectedPeople: 'Una passatgera identificada; noyb assenyala que hi havia altres reclamacions equivalents.',
      regulatory: {
        authority: 'Österreichische Datenschutzbehörde',
        legalBasis: 'Articles 12.5 i 16 del RGPD',
        status: 'ongoing',
      },
      sources: ['wizz-air-noyb-2020'],
    },
    {
      slug: 'skyscanner-enviament-dades-facebook-2019',
      title: 'L’aplicació d’Android enviava dades a Facebook en obrir-se',
      type: 'misuse',
      severity: 'low',
      apps: ['skyscanner'],
      company: 'skyscanner-limited',
      occurredAt: '2018-12-29',
      disclosedAt: '2019-03-06',
      description:
        'Privacy International va analitzar 34 aplicacions populars d’Android i va constatar que la de Skyscanner enviava dades al SDK de Facebook tan bon punt s’obria, abans que la persona pogués decidir res, també si no tenia compte de Facebook. Skyscanner va publicar una actualització i es va comprometre a auditar el seguiment del consentiment. En la nova comprovació del 17 de febrer de 2019, l’aplicació encara contactava amb Facebook en obrir-se, però ja no hi enviava l’identificador publicitari de Google.',
      affectedPeople: 'Persones usuàries de l’aplicació d’Android de Skyscanner abans de l’actualització.',
      sources: ['skyscanner-pi-facebook-2019'],
    },
    {
      slug: 'iberia-filtracio-proveidor-2025',
      title: 'Filtració de dades de clients d’Iberia a través d’un proveïdor',
      type: 'breach',
      severity: 'high',
      apps: ['iberia'],
      company: 'iberia-lineas-aereas',
      occurredAt: '2025-11-16',
      disclosedAt: '2025-11-23',
      description:
        'Iberia va notificar els clients afectats que un accés no autoritzat als sistemes d’un dels seus proveïdors havia exposat noms i cognoms, adreces de correu electrònic i números de la targeta d’Iberia Club. L’aerolínia va dir que no s’hi havien vist compromeses les credencials d’accés, les contrasenyes ni les dades bancàries, i que no tenia constància d’un ús fraudulent de la informació. Una setmana abans, un actor havia ofert públicament 77 GB de dades d’Iberia per 150.000 dòlars. Iberia va activar els protocols de seguretat, va afegir codis de verificació per als canvis lligats al correu electrònic i va comunicar l’incident a les autoritats.',
      affectedPeople: 'Clients d’Iberia i membres d’Iberia Club; l’empresa no n’ha publicat la xifra.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos (AEPD)',
        status: 'ongoing',
      },
      sources: ['iberia-filtracio-bleeping-2025'],
    },
  ],
  storeIds: {
    'google-meet': 'com.google.Tachyon',
    'google-news': 'com.google.GoogleDigitalEditions',
    'google-play-books': 'com.google.GoogleBooks',
    'google-home': 'com.google.Chromecast',
    'wizz-air': 'com.wizzair.WizzAirApp',
    skyscanner: 'net.skyscanner.iphone',
    iberia: 'mobi.iberia',
    omio: 'com.goeuro.ios.ronald',
    getyourguide: 'com.getyourguide.mobile.GetYourGuide',
  },
}
