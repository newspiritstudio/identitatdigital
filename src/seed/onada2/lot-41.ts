import { CATALAN_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed, FactSeed, PublicServiceSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 41: les cinc aplicacions de la Corporació Catalana de Mitjans
 * Audiovisuals (3Cat, 3CatInfo, Catalunya Ràdio, SX3 i iCat).
 *
 * Són serveis públics de comunicació audiovisual, però no es comporten com els
 * altres serveis públics del bloc català: porten publicitat, declaren a l’App
 * Store ubicació, identificadors, dades d’ús i diagnòstics com a dades per
 * rastrejar, i fan servir l’analítica d’Adobe com a «essencial i no
 * refusable». La política de privadesa, en canvi, diu que les dades no es
 * comuniquen a tercers. L’SX3, adreçada a infants, també declara rastreig.
 * La Sindicatura de Comptes va constatar el 2025 que la CCMA no tenia
 * l’auditoria de l’Esquema Nacional de Seguretat.
 */

const { f, unknown, na, row } = evidenceAt(CATALAN_DATE)
const s = sourceAt(CATALAN_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

const POLICY_URL = 'https://www.3cat.cat/avis-legal/privacitat/registre/'
const TERMS_URL = 'https://www.3cat.cat/avis-legal/condicions-utilitzacio-del-portal/'
const ACCOUNT_URL = 'https://www.3cat.cat/usuaris/registre/'

/** Les tres pàgines arxivades que llisten els SDK de les aplicacions de la CCMA. */
const SDK_PAGES = ['3cat-cookies-app-324', '3cat-cookies-app-catalunya-radio', '3cat-cookies-app-icat']

/** Etiqueta idèntica a 3Cat, 3CatInfo i Catalunya Ràdio. */
const LABEL_NOTE =
  'L’etiqueta de l’App Store és idèntica a la de 3Cat, 3CatInfo i Catalunya Ràdio: ubicació, identificadors, dades d’ús i diagnòstics per rastrejar.'

/* ─────────────────────────── Peces compartides ─────────────────────────── */

const legalBasis: FactSeed = f(
  'partial',
  'official',
  ['3cat-privacitat-registre', 'ccma-llei-11-2007'],
  'La política del registre 3Cat assigna una base a cada finalitat: execució de la relació contractual per al compte, consentiment per als butlletins, interès legítim per a la personalització, l’analítica i les proves A/B, i obligació legal per al bloqueig geogràfic dels continguts sense drets. Per a l’analítica invoca la Llei 11/2007 de la CCMA i el contracte programa. No cita cap article del RGPD ni la missió de servei públic de l’article 6.1.e), i una empresa pública que presta un servei encomanat per llei s’empara en l’interès legítim.',
  { norm: 'Llei 11/2007, d’11 d’octubre, de la Corporació Catalana de Mitjans Audiovisuals (invocada per a l’analítica); la política no cita articles del RGPD' },
)

const processingRegistry: FactSeed = f(
  'partial',
  'official',
  ['3cat-transparencia-normativa', '3cat-politica-privacitat'],
  'El portal de transparència enllaça un «Inventari d’activitats de tractament de dades personals», però l’enllaç porta a la política de privadesa: una vintena de fitxes informatives per tractament, amb responsable, finalitats, base, destinataris i conservació. No hi ha un registre amb el contingut de l’article 30 del RGPD, com ara les mesures de seguretat o les categories d’interessats.',
  { url: 'https://www.3cat.cat/avis-legal/privacitat/dades/' },
)

const dpia: FactSeed = unknown(
  'No hem trobat publicada cap avaluació d’impacte relativa a la protecció de dades, ni a la política de privadesa ni al portal de transparència de la CCMA.',
)

const ensConformity: FactSeed = f(
  'no',
  'regulator',
  ['ccma-sindicatura-informe-2-2025'],
  'L’informe 2/2025 de la Sindicatura de Comptes (exercicis 2021 i 2022, publicat el març del 2025) constata que la CCMA no disposa de l’auditoria de compliment de l’Esquema Nacional de Seguretat que exigeix l’article 31 del Reial decret 311/2022, ni de l’auditoria biennal de les mesures de seguretat del tractament de dades personals. No hem trobat cap declaració de conformitat posterior.',
)

const dpo: FactSeed = f(
  'yes',
  'official',
  ['3cat-dpd', '3cat-privacitat-registre'],
  'La CCMA publica el nom del delegat de protecció de dades, l’adreça postal, el telèfon i el correu. La política el designa com a canal per exercir els drets.',
  { contact: 'dpd@3cat.cat' },
)

const noMandatoryRetention = (sources: string[], detail: string): FactSeed => f('no', 'official', sources, detail)

const publicService = (overrides: Pick<PublicServiceSeed, 'offlineAlternative' | 'accessibilityStatement' | 'mandatoryRetention'>): PublicServiceSeed => ({
  isPublicService: true,
  administrationLevel: 'regional',
  legalBasis,
  processingRegistry,
  dpia,
  ensConformity,
  dpo,
  ...overrides,
})

const rightsExercise: FactSeed = f(
  'yes',
  'official',
  ['3cat-privacitat-registre', '3cat-dpd'],
  'Accés, rectificació, supressió, oposició, limitació i portabilitat per correu al delegat de protecció de dades o per correu postal a Sant Joan Despí. L’autoritat de control indicada és l’Autoritat Catalana de Protecció de Dades.',
  { url: 'mailto:dpd@3cat.cat' },
)

const dataExport: FactSeed = f(
  'partial',
  'official',
  ['3cat-privacitat-registre'],
  'La política reconeix el dret de portabilitat, però no hi ha cap eina de descàrrega: s’ha de demanar per correu.',
)

const internationalTransfers: FactSeed = f(
  'yes',
  'official',
  ['3cat-privacitat-registre', '3cat-privacitat-publicitat'],
  'La política preveu proveïdors fora de l’Espai Econòmic Europeu amb clàusules contractuals tipus quan no hi ha decisió d’adequació. Els butlletins s’envien amb Mailchimp, en servidors de fora de la Unió Europea.',
  { mechanism: 'sccs' },
)

const dataBrokerSales: FactSeed = unknown(
  'La política no esmenta la venda de dades, però tampoc no la descarta de manera expressa; només diu que no es comuniquen dades a tercers fora dels encarregats i dels requeriments legals.',
)

const retentionPeriods: FactSeed = f(
  'partial',
  'official',
  ['3cat-privacitat-registre', '3cat-condicions-us'],
  'Les dades del compte es conserven mentre la persona sigui usuària registrada; un compte sense cap accés durant dos anys es cancel·la automàticament. Després, les dades es bloquegen fins a la prescripció de les responsabilitats. No hi ha terminis per a les dades que recullen els SDK sense compte.',
)

const dataAfterDeletion: FactSeed = f(
  'partial',
  'official',
  ['3cat-privacitat-registre'],
  'En esborrar el compte, les dades es bloquegen fins a la prescripció de les responsabilitats legals i se’n conserva un historial anonimitzat amb finalitats estadístiques. La política no diu durant quant de temps queden bloquejades.',
)

const accountPeriods = [
  { dataType: 'identificador-de-compte', period: 'Mentre es mantingui el compte; cancel·lació automàtica després de dos anys sense cap accés', sources: ['3cat-privacitat-registre', '3cat-condicions-us'] },
]

const adOptOut: FactSeed = f(
  'yes',
  'official',
  ['3cat-politica-cookies', ...SDK_PAGES],
  'Cada aplicació té un gestor de consentiments (Didomi) a Configuració > Condicions legals > Gestió de cookies, on es pot refusar la publicitat personalitzada per soci. La publicitat continua, però menys personalitzada.',
)

const telemetryOptOut: FactSeed = f(
  'no',
  'official',
  ['3cat-politica-cookies', ...SDK_PAGES],
  'La política de galetes declara l’analítica d’audiència (Adobe Analytics) «essencial i no refusable» perquè serveix per avaluar la missió de servei públic. Les notificacions d’Airship sí que es poden desactivar des del gestor de consentiments.',
)

const granularControls: FactSeed = f(
  'partial',
  'official',
  ['3cat-politica-cookies', ...SDK_PAGES],
  'El gestor de consentiments permet decidir soci per soci en publicitat i notificacions, però no en analítica.',
)

const darkPatternList = [
  {
    type: 'other',
    severity: 'medium',
    description:
      'L’analítica d’audiència es presenta com a «essencial i no refusable» al costat de les galetes tècniques, de manera que el gestor de consentiments no permet refusar-la. L’argument és que serveix per avaluar la missió de servei públic.',
    sources: ['3cat-politica-cookies'],
  },
]

const darkPatterns: FactSeed = f(
  'partial',
  'official',
  ['3cat-politica-cookies'],
  'El gestor de consentiments no permet refusar l’analítica, que la CCMA considera essencial. No hem analitzat la resta de la interfície.',
)

const security = (mfaDetail: string) => ({
  e2ee: na('És un servei de difusió de continguts; no hi ha comunicació privada entre persones.'),
  transportEncryption: unknown('La política no descriu el xifratge de les comunicacions. A més, l’enllaç a la política de privadesa de la fitxa de l’App Store fa servir HTTP.'),
  atRestEncryption: unknown('La política no diu res sobre el xifratge de les dades en repòs.'),
  mfa: unknown(mfaDetail),
  independentAudits: f('no', 'regulator', ['ccma-sindicatura-informe-2-2025'], 'La Sindicatura de Comptes va constatar que la CCMA no tenia l’auditoria de l’Esquema Nacional de Seguretat ni l’auditoria biennal de seguretat del tractament de dades. L’únic document aportat era un esborrany sense signar de juny del 2022 limitat a recursos humans.'),
  bugBounty: unknown('No hem trobat cap programa de recompenses.'),
  vulnerabilityDisclosure: f('no', 'editorial', [], 'No hi ha fitxer security.txt a 3cat.cat ni a ccma.cat, que hi redirigeix, ni cap canal publicat per notificar vulnerabilitats. Comprovat el 25 de setembre de 2026.'),
})

const trackingShared = {
  crossAppTracking: (source: string): FactSeed => f('yes', 'official', [source], 'L’etiqueta de l’App Store declara ubicació, identificadors, dades d’ús i diagnòstics com a dades utilitzades per rastrejar en aplicacions i webs d’altres empreses.'),
  advertisingIdentifiers: f(
    'yes',
    'official',
    SDK_PAGES,
    'Les pàgines d’SDK de les aplicacions de la CCMA avisaven que, des d’iOS 14.5, l’aplicació demana permís per rastrejar, i que l’antic SDK de notificacions (Accengage) recollia l’identificador de publicitat. La publicitat la gestionen Smart AdServer i Google DBM.',
  ),
}

const incidentsNote =
  'Cerca d’incidents feta a l’APDCAT, a la Sindicatura de Comptes i a la premsa. L’índex de l’APDCAT mostra un procediment sancionador PS 33/2017 contra la CCMA, SA, obert el 28 de juliol de 2017 per una presumpta infracció greu, però el document ja no és accessible des que l’Autoritat va canviar de web i no n’hem pogut verificar el contingut ni el resultat.'

/* ═══════════════════════ 3Cat ═══════════════════════ */
const tresCat: AppSeed = {
  slug: '3cat',
  name: '3Cat',
  company: 'ccma',
  categories: ['video-i-streaming', 'noticies-i-mitjans'],
  tagline: 'La plataforma pública obliga a crear un compte per fer servir l’aplicació, porta publicitat i declara a l’App Store dades per rastrejar',
  summary:
    'L’aplicació que va substituir la de TV3 aplega els directes i la carta de TV3, Catalunya Ràdio i l’SX3. A diferència del web i del botó vermell, l’aplicació no es pot fer servir sense compte: nom, correu i contrasenya són obligatoris, i el consum de continguts s’associa al perfil per personalitzar la portada. La política diu que les dades no es comuniquen a tercers, però l’etiqueta de l’App Store declara ubicació, identificadors, dades d’ús i diagnòstics per rastrejar i per a publicitat de tercers. La CCMA és una empresa pública, però l’aplicació no és un servei sense publicitat.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'public-service',
  jurisdiction: 'Catalunya; servei públic de comunicació audiovisual de la Generalitat',
  serviceStatus: 'active',
  links: {
    website: 'https://www.3cat.cat/',
    privacyPolicy: POLICY_URL,
    terms: TERMS_URL,
    appStore: appStore('364615121'),
    deleteAccount: ACCOUNT_URL,
    adSettings: 'https://www.3cat.cat/avis-legal/cookies/',
  },
  accountRequired: f('yes', 'official', ['3cat-privacitat-registre', '3cat-ajuda-compte'], 'La política diu que a les aplicacions de 3Cat, de mòbil i de televisor, cal registrar-se per accedir-hi, mentre que el web i el botó vermell (HbbTV) s’obren sense registre. Cal tenir com a mínim 14 anys.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  publicService: publicService({
    offlineAlternative: f(
      'yes',
      'official',
      ['3cat-privacitat-registre', '3cat-com-veure-tdt'],
      'Els canals de 3Cat es veuen per TDT sense cap registre, i el web 3cat.cat i el botó vermell dels televisors connectats donen accés sense compte. El que exigeix compte és l’aplicació.',
    ),
    accessibilityStatement: f(
      'partial',
      'official',
      ['3cat-declaracio-accessibilitat'],
      'Hi ha declaració d’accessibilitat, preparada el 9 d’octubre de 2024 a partir d’una auditoria externa i revisada per última vegada el 17 de juliol de 2025. Declara l’aplicació per a iOS «no conforme» amb el Reial decret 1112/2018: subtítols que no se sincronitzen ni es poden adaptar, imatges sense text alternatiu i contrast insuficient, entre altres.',
      { url: 'https://www.3cat.cat/atencio/accessibilitat/' },
    ),
    mandatoryRetention: noMandatoryRetention(['3cat-privacitat-registre'], 'Cap norma no obliga a conservar les dades del compte: es guarden mentre la persona sigui usuària registrada i després només es bloquegen fins a la prescripció de les responsabilitats.'),
  }),
  dataSummary:
    'Una plataforma de vídeo amb compte obligatori sap què mires, quan i des d’on, i ho lliga a un nom i un correu. Aquí aquest historial alimenta la personalització per interès legítim i conviu amb SDK publicitaris que l’etiqueta declara per rastrejar.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['3cat-privacitat-registre'], note: 'Obligatori per registrar-se. L’etiqueta de l’App Store no declara cap dada de contacte, tot i que sense compte l’aplicació no funciona.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['3cat-privacitat-registre'], note: 'Obligatòria. Si es dona el consentiment, serveix també per als butlletins i les comunicacions comercials.' }),
    row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['3cat-privacitat-registre'] }),
    row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['personalitzacio-de-continguts', 'investigacio-i-estadistica'], sources: ['3cat-privacitat-registre'], note: 'Opcional; la política diu que serveix per destacar continguts segons l’edat.' }),
    row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['personalitzacio-de-continguts', 'investigacio-i-estadistica'], sources: ['3cat-privacitat-registre'] }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['personalitzacio-de-continguts'], sources: ['3cat-privacitat-registre'], note: 'Només el codi postal, per informar d’actes a prop.' }),
    row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'none', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts', 'recomanacions-algoritmiques', 'mesura-i-analisi-dus'], sources: ['3cat-privacitat-registre', '3cat-ajuda-compte'], note: '«Segueix veient», la meva llista i recomanacions a partir dels continguts vistos o escoltats.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada', 'mesura-publicitaria', 'personalitzacio-de-continguts', 'millora-del-producte'], sources: ['3cat-app-store', '3cat-privacitat-registre'], note: 'Declarades per a publicitat de tercers, màrqueting propi, analítica i personalització. La política hi afegeix proves A/B.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['3cat-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['3cat-app-store'], note: 'L’etiqueta declara la categoria «Identificadores» per rastrejar sense precisar si inclou l’identificador d’usuari.' }),
    row('identificador-publicitari', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: SDK_PAGES, note: 'Depèn del permís de rastreig d’iOS, que les aplicacions de la CCMA demanen des d’iOS 14.5.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['compliment-legal', 'publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['3cat-app-store', '3cat-privacitat-registre'], note: 'La política la justifica pel bloqueig geogràfic dels continguts sense drets; l’etiqueta la declara també per a publicitat de tercers.' }),
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts', 'mesura-i-analisi-dus'], sources: ['3cat-app-store'], note: 'Declarada no vinculada a la identitat. Depèn del permís de localització.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte', 'mesura-i-analisi-dus'], sources: ['3cat-app-store'], note: 'Errors i rendiment, declarats vinculats a la identitat i dins de les categories per rastrejar.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', sources: ['3cat-app-store'], note: 'L’etiqueta les declara sota «Otros fines», sense concretar-ne l’ús.' }),
  ],
  tracking: {
    crossAppTracking: trackingShared.crossAppTracking('3cat-app-store'),
    advertisingIdentifiers: trackingShared.advertisingIdentifiers,
    thirdPartyTrackersPresent: f('yes', 'official', ['3cat-app-store', '3cat-politica-cookies', ...SDK_PAGES], 'La política de galetes preveu galetes publicitàries i analítiques de tercers. Les pàgines d’SDK de les aplicacions germanes anomenaven comScore, Adobe Analytics, Smart AdServer, Google DBM, Firebase Crashlytics, Airship i Didomi; la de 3Cat ja no es publica.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['3cat-app-store', '3cat-politica-cookies'], 'La fitxa de l’App Store avisa que l’aplicació conté publicitat i l’etiqueta declara dades per a publicitat de tercers. La política de galetes preveu mostrar publicitat personalitzada segons la navegació.'),
    profiling: f('yes', 'official', ['3cat-privacitat-registre'], 'La política personalitza la portada i les comunicacions amb l’edat, el codi postal i els continguts consumits, per interès legítim, i fa proves A/B segmentades.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models amb les dades d’audiència.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['3cat-app-store', '3cat-privacitat-registre'], 'La política diu que les dades del registre no es comuniquen a tercers llevat de requeriment legal, però l’etiqueta de l’App Store declara ubicació, identificadors i dades d’ús per a publicitat de tercers.'),
    intraGroupSharing: f('yes', 'official', ['3cat-privacitat-registre'], 'Un sol registre 3Cat serveix per a totes les marques del grup (3Cat, 3CatInfo, Esport3, Catalunya Ràdio), amb la CCMA, SA com a responsable.'),
    dataBrokerSales,
    internationalTransfers,
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe sobre peticions d’autoritats. El portal de transparència diu que no hi ha resolucions administratives ni judicials de rellevància pública.'),
  },
  retention: {
    definedPeriods: retentionPeriods,
    dataAfterDeletion,
    periods: accountPeriods,
  },
  accountDeletion: {
    possible: f('yes', 'official', ['3cat-privacitat-registre', '3cat-espai-usuari']),
    selfService: f('yes', 'official', ['3cat-privacitat-registre', '3cat-espai-usuari'], 'L’espai d’usuari té l’opció «Dona’t de baixa» o «Esborra el compte».'),
    directUrl: ACCOUNT_URL,
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Inicia sessió a 3cat.cat i obre l’espai d’usuari (Gestiona el teu compte).',
      'Tria «Dona’t de baixa» (o «Esborra el compte») i confirma-ho.',
      'Per retirar el consentiment de publicitat sense esborrar el compte, obre a l’aplicació Configuració > Condicions legals > Gestió de cookies.',
    ],
    obstacles: 'El compte és únic per a totes les aplicacions de la CCMA: esborrar-lo treu l’accés a l’aplicació de 3Cat, que no funciona sense compte. Les dades recollides pels SDK de tercers no depenen d’aquesta baixa.',
    dataRetained: 'Dades bloquejades fins a la prescripció de les responsabilitats legals i un historial anonimitzat amb finalitats estadístiques.',
    sources: ['3cat-privacitat-registre', '3cat-espai-usuari'],
  },
  userRights: { dataExport, exportFormatQuality: 'unknown', rightsExercise },
  controls: {
    adPersonalizationOptOut: adOptOut,
    telemetryOptOut,
    granularControls,
    defaultPosture: 'mixed',
    darkPatterns,
    darkPatternList,
  },
  security: security('No hem trobat cap opció de verificació en dos passos al compte 3Cat ni a l’ajuda.'),
  review: {
    researchStatus: 'documented',
    lastReviewedAt: CATALAN_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La contradicció central és entre la política, que diu que les dades del registre no es comuniquen a tercers, i l’etiqueta de l’App Store, que declara ubicació, identificadors i dades d’ús per a publicitat de tercers i per rastrejar. També és remarcable que l’etiqueta no declari nom ni correu quan l’aplicació exigeix compte. La responsable és la Corporació Catalana de Mitjans Audiovisuals, SA (NIF A08849622), empresa pública de l’ens públic CCMA; la mateixa societat consta com a proveïdor a l’App Store. La pàgina pública que llistava els SDK de l’aplicació de TV3 ja no existeix: les dades d’SDK vénen de les aplicacions germanes, arxivades el 2024 i el 2025. ' + incidentsNote,
    openQuestions: [
      'Quins SDK publicitaris i analítics incorpora avui l’aplicació 3Cat, ara que la CCMA ha retirat les pàgines d’SDK per aplicació?',
      'Per què l’etiqueta de l’App Store no declara nom ni correu si el compte és obligatori?',
      'Com es compatibilitza l’interès legítim amb la condició d’empresa pública que presta un servei encomanat per llei?',
      'Quin va ser el resultat del procediment sancionador PS 33/2017 de l’APDCAT?',
    ],
  },
}

/* ═══════════════════════ 3CatInfo ═══════════════════════ */
const tresCatInfo: AppSeed = {
  slug: '3catinfo',
  name: '3CatInfo',
  company: 'ccma',
  categories: ['noticies-i-mitjans'],
  tagline: 'Les notícies del servei públic es llegeixen sense compte, però amb la mateixa etiqueta de rastreig i publicitat de tercers que 3Cat',
  summary:
    'L’antiga aplicació del 324 dona les notícies i el canal 3CatInfo en directe. Es pot fer servir sense registre; el compte 3Cat només cal per seguir temes i autors, desar notícies o comentar. L’etiqueta de l’App Store és la mateixa que la de 3Cat: ubicació, identificadors, dades d’ús i diagnòstics per rastrejar, i dades per a publicitat de tercers. La pàgina d’SDK arxivada el gener del 2025 hi anomenava comScore, Adobe Analytics, Smart AdServer, Google DBM, Firebase Crashlytics, Airship, AppsFlyer i Didomi.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'public-service',
  jurisdiction: 'Catalunya; servei públic de comunicació audiovisual de la Generalitat',
  serviceStatus: 'active',
  links: {
    website: 'https://www.3catinfo.cat/',
    privacyPolicy: POLICY_URL,
    terms: TERMS_URL,
    appStore: appStore('457034636'),
    deleteAccount: ACCOUNT_URL,
    adSettings: 'https://www.3cat.cat/avis-legal/cookies/',
  },
  accountRequired: f('partial', 'official', ['3cat-privacitat-registre'], 'Es pot llegir sense registre. Seguir temes, autors i notícies, i participar en concursos, exigeix el compte 3Cat.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  publicService: publicService({
    offlineAlternative: f('yes', 'official', ['3cat-com-veure-tdt', '3cat-com-veure-fm'], 'El canal 3CatInfo s’emet per TDT i l’emissora 3CatInfo per FM, i el web es consulta sense registre.'),
    accessibilityStatement: f(
      'partial',
      'official',
      ['3cat-declaracio-accessibilitat'],
      'La declaració d’accessibilitat de la CCMA considera l’aplicació per a iOS «parcialment conforme» amb el Reial decret 1112/2018 i n’enumera els incompliments.',
      { url: 'https://www.3cat.cat/atencio/accessibilitat/' },
    ),
    mandatoryRetention: noMandatoryRetention(['3cat-privacitat-registre'], 'Cap norma no obliga a conservar les dades del compte opcional: es guarden mentre la persona sigui usuària registrada.'),
  }),
  dataSummary:
    'El que llegeix una persona diu molt de la seva ideologia, la seva salut o les seves preocupacions. Aquí aquesta lectura queda associada a identificadors que l’etiqueta declara per rastrejar, encara que no s’hagi creat cap compte.',
  dataCollection: [
    row('historial-de-navegacio', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['3cat-cookies-app-324'], note: 'La pàgina d’SDK arxivada diu que l’aplicació recull les pàgines visitades per conèixer els hàbits de navegació, personalitzar continguts i mostrar publicitat segons els interessos.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada', 'mesura-publicitaria', 'personalitzacio-de-continguts'], sources: ['3cat-3catinfo-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['3cat-3catinfo-app-store'] }),
    row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['3cat-3catinfo-app-store', '3cat-privacitat-registre'], note: 'Només amb compte 3Cat.' }),
    row('identificador-publicitari', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['3cat-cookies-app-324'], note: 'Depèn del permís de rastreig d’iOS. AppsFlyer, associat a Adobe, mesura les descàrregues atribuïbles a campanyes.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['3cat-cookies-app-324'], note: 'Recollida per comScore i per Firebase Crashlytics, segons la pàgina d’SDK arxivada.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus', 'compliment-legal'], sources: ['3cat-3catinfo-app-store', '3cat-privacitat-registre'] }),
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['3cat-3catinfo-app-store', '3cat-cookies-app-324'], note: 'Amb permís de localització, per a notificacions de la zona on s’és.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['3cat-3catinfo-app-store', '3cat-cookies-app-324'] }),
    row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['3cat-3catinfo-app-store', '3cat-condicions-us'], note: 'La fitxa avisa de contingut generat per les persones usuàries; les condicions permeten retirar comentaris i suspendre comptes.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', sources: ['3cat-3catinfo-app-store'], note: 'Declarades sota «Otros fines»; la pàgina d’SDK arxivada esmenta l’accés a la càmera i al rodet.' }),
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['3cat-privacitat-registre'], note: 'Només si es crea el compte 3Cat.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['3cat-privacitat-registre'], note: 'Només si es crea el compte 3Cat.' }),
  ],
  tracking: {
    crossAppTracking: trackingShared.crossAppTracking('3cat-3catinfo-app-store'),
    advertisingIdentifiers: trackingShared.advertisingIdentifiers,
    thirdPartyTrackersPresent: f('yes', 'official', ['3cat-cookies-app-324'], 'comScore, Adobe Analytics, Smart AdServer, Google DBM, Firebase Crashlytics, Airship, AppsFlyer i Didomi, segons la pàgina d’SDK de l’aplicació arxivada el gener del 2025.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['3cat-3catinfo-app-store', '3cat-cookies-app-324'], 'La fitxa avisa de publicitat i la pàgina d’SDK diu que les dades es fan servir per mostrar publicitat segons els interessos.'),
    profiling: f('partial', 'official', ['3cat-cookies-app-324', '3cat-privacitat-registre'], 'Personalització de continguts segons el consum; amb compte, seguiment de temes i autors.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models amb les dades d’audiència.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['3cat-3catinfo-app-store', '3cat-cookies-app-324'], 'L’etiqueta declara dades per a publicitat de tercers, i la pàgina d’SDK anomena les empreses de publicitat i mesura que les reben.'),
    intraGroupSharing: f('yes', 'official', ['3cat-privacitat-registre'], 'El compte és el mateix registre 3Cat de totes les marques del grup.'),
    dataBrokerSales,
    internationalTransfers,
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: retentionPeriods,
    dataAfterDeletion,
    periods: accountPeriods,
  },
  accountDeletion: {
    possible: f('yes', 'official', ['3cat-privacitat-registre', '3cat-espai-usuari'], 'Si s’ha creat el compte 3Cat, es pot esborrar; sense compte, les dades queden associades al dispositiu.'),
    selfService: f('yes', 'official', ['3cat-privacitat-registre', '3cat-espai-usuari'], 'Opció «Dona’t de baixa» a l’espai d’usuari.'),
    directUrl: ACCOUNT_URL,
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Si tens compte, inicia sessió a 3cat.cat, obre Gestiona el teu compte i tria «Dona’t de baixa».',
      'Sense compte, refusa els socis publicitaris a Configuració > Condicions legals > Gestió de cookies i desactiva el permís de rastreig d’iOS.',
      'Per demanar la supressió de les dades associades al dispositiu, escriu a dpd@3cat.cat.',
    ],
    obstacles: 'Esborrar el compte no esborra el que ja han recollit els SDK de publicitat i mesura.',
    dataRetained: 'Dades bloquejades fins a la prescripció de les responsabilitats i un historial anonimitzat.',
    sources: ['3cat-privacitat-registre', '3cat-espai-usuari'],
  },
  userRights: { dataExport, exportFormatQuality: 'unknown', rightsExercise },
  controls: {
    adPersonalizationOptOut: adOptOut,
    telemetryOptOut,
    granularControls,
    defaultPosture: 'mixed',
    darkPatterns,
    darkPatternList,
  },
  security: security('No hem trobat cap opció de verificació en dos passos al compte 3Cat.'),
  review: {
    researchStatus: 'documented',
    lastReviewedAt: CATALAN_DATE,
    incidentsReviewed: true,
    editorialNotes: LABEL_NOTE + ' És l’única aplicació del lot on la pàgina d’SDK arxivada anomena AppsFlyer, per atribuir descàrregues a campanyes de màrqueting. ' + incidentsNote,
    openQuestions: [
      'La CCMA ha retirat les pàgines d’SDK per aplicació: quins SDK hi ha a la versió actual?',
      'Quin va ser el resultat del procediment sancionador PS 33/2017 de l’APDCAT?',
    ],
  },
}

/* ═══════════════════════ Catalunya Ràdio ═══════════════════════ */
const catalunyaRadio: AppSeed = {
  slug: 'catalunya-radio',
  name: 'Catalunya Ràdio',
  company: 'ccma',
  categories: ['musica-i-audio', 'noticies-i-mitjans'],
  tagline: 'Escoltar la ràdio pública no exigeix compte, però l’aplicació declara ubicació, identificadors i dades d’ús per rastrejar',
  summary:
    'L’aplicació dona els directes de Catalunya Ràdio, Catalunya Música, iCat i 3CatInfo, i els podcasts. Funciona sense registre i conviu amb l’aplicació 3Cat, que ofereix els mateixos directes. L’etiqueta de l’App Store és idèntica a la de 3Cat: dades per rastrejar i per a publicitat de tercers. La pàgina d’SDK arxivada el novembre del 2024 anomenava comScore, Adobe Analytics, Smart AdServer, Google DBM, Firebase Crashlytics, Airship i Didomi.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'public-service',
  jurisdiction: 'Catalunya; servei públic de comunicació audiovisual de la Generalitat',
  serviceStatus: 'active',
  links: {
    website: 'https://www.3cat.cat/app-catalunya-radio/mobils-i-tauletes/',
    privacyPolicy: POLICY_URL,
    terms: TERMS_URL,
    appStore: appStore('318047072'),
    adSettings: 'https://www.3cat.cat/avis-legal/cookies/',
  },
  accountRequired: f('no', 'official', ['3cat-privacitat-registre', '3cat-ajuda-catalunya-radio'], 'La política només exigeix registre a les aplicacions de 3Cat; la resta d’aplicacions del grup s’obren sense compte.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  publicService: publicService({
    offlineAlternative: f('yes', 'official', ['3cat-com-veure-fm'], 'Totes les emissores s’escolten per FM i per TDT sense cap registre.'),
    accessibilityStatement: f(
      'no',
      'official',
      ['3cat-declaracio-accessibilitat'],
      'La declaració d’accessibilitat de la CCMA no inclou l’aplicació de Catalunya Ràdio; només el web 3cat.cat/catradio, que declara «no conforme».',
      { url: 'https://www.3cat.cat/atencio/accessibilitat/' },
    ),
    mandatoryRetention: noMandatoryRetention(['3cat-privacitat-registre'], 'No hi ha cap obligació legal de conservar les dades de l’aplicació ni del compte opcional.'),
  }),
  dataSummary:
    'Escoltar la ràdio en un aparell no deixa rastre. Escoltar-la amb aquesta aplicació genera identificadors, ubicació aproximada i dades d’ús que l’etiqueta declara per rastrejar i per a publicitat de tercers.',
  dataCollection: [
    row('historial-de-visualitzacio', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['3cat-cookies-app-catalunya-radio'], note: 'Emissores i podcasts escoltats. La pàgina d’SDK arxivada diu que les dades serveixen per recomanar continguts i mostrar publicitat segons els interessos.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada', 'mesura-publicitaria', 'personalitzacio-de-continguts'], sources: ['3cat-catalunya-radio-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['3cat-catalunya-radio-app-store'] }),
    row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['3cat-catalunya-radio-app-store'], note: 'L’etiqueta declara «ID de usuario»; el compte 3Cat és opcional.' }),
    row('identificador-publicitari', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['3cat-cookies-app-catalunya-radio'], note: 'Depèn del permís de rastreig d’iOS.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['3cat-cookies-app-catalunya-radio'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['3cat-catalunya-radio-app-store'] }),
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['3cat-catalunya-radio-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['3cat-catalunya-radio-app-store', '3cat-cookies-app-catalunya-radio'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', sources: ['3cat-catalunya-radio-app-store', '3cat-cookies-app-catalunya-radio'], note: 'Declarades sota «Otros fines»; l’aplicació demana accés a fotos, multimèdia i fitxers.' }),
  ],
  tracking: {
    crossAppTracking: trackingShared.crossAppTracking('3cat-catalunya-radio-app-store'),
    advertisingIdentifiers: trackingShared.advertisingIdentifiers,
    thirdPartyTrackersPresent: f('yes', 'official', ['3cat-cookies-app-catalunya-radio'], 'comScore, Adobe Analytics, Smart AdServer, Google DBM, Firebase Crashlytics, Airship i Didomi, segons la pàgina d’SDK arxivada el novembre del 2024.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['3cat-catalunya-radio-app-store', '3cat-cookies-app-catalunya-radio'], 'La fitxa avisa de publicitat i l’etiqueta declara dades per a publicitat de tercers.'),
    profiling: f('partial', 'official', ['3cat-cookies-app-catalunya-radio'], 'Recomanacions de programes segons el consum i publicitat segons els interessos.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models amb les dades d’audiència.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['3cat-catalunya-radio-app-store', '3cat-cookies-app-catalunya-radio'], 'Dades per a publicitat de tercers declarades a l’etiqueta; empreses de publicitat i de mesura anomenades a la pàgina d’SDK.'),
    intraGroupSharing: f('yes', 'official', ['3cat-privacitat-registre'], 'El compte opcional és el registre 3Cat comú a tot el grup.'),
    dataBrokerSales,
    internationalTransfers,
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: retentionPeriods,
    dataAfterDeletion,
    periods: accountPeriods,
  },
  accountDeletion: {
    possible: f('yes', 'official', ['3cat-privacitat-registre', '3cat-espai-usuari'], 'No cal compte. Si se n’ha creat un de 3Cat, es pot esborrar.'),
    selfService: f('yes', 'official', ['3cat-privacitat-registre', '3cat-espai-usuari']),
    directUrl: ACCOUNT_URL,
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Refusa els socis publicitaris a Configuració > Condicions legals > Gestió de cookies i desactiva el permís de rastreig d’iOS.',
      'Si tens compte 3Cat, esborra’l des de Gestiona el teu compte > «Dona’t de baixa» a 3cat.cat.',
      'Per demanar la supressió de les dades associades al dispositiu, escriu a dpd@3cat.cat.',
    ],
    dataRetained: 'Dades bloquejades fins a la prescripció de les responsabilitats i un historial anonimitzat.',
    sources: ['3cat-privacitat-registre', '3cat-espai-usuari'],
  },
  userRights: { dataExport, exportFormatQuality: 'unknown', rightsExercise },
  controls: {
    adPersonalizationOptOut: adOptOut,
    telemetryOptOut,
    granularControls,
    defaultPosture: 'mixed',
    darkPatterns,
    darkPatternList,
  },
  security: security('No hem trobat cap opció de verificació en dos passos al compte 3Cat.'),
  review: {
    researchStatus: 'documented',
    lastReviewedAt: CATALAN_DATE,
    incidentsReviewed: true,
    editorialNotes:
      LABEL_NOTE + ' L’enllaç de la política de privadesa de la fitxa de l’App Store apunta per HTTP a l’avís legal general de ccma.cat. ' + incidentsNote,
    openQuestions: [
      'Es mantindrà l’aplicació ara que 3Cat ofereix els mateixos directes? L’ajuda diu que continua funcionant.',
      'Per què no hi ha declaració d’accessibilitat per a l’aplicació?',
    ],
  },
}

/* ═══════════════════════ SX3 ═══════════════════════ */
const sx3: AppSeed = {
  slug: 'sx3',
  name: 'SX3',
  company: 'ccma',
  categories: ['video-i-streaming', 'educacio'],
  tagline: 'L’aplicació infantil no porta publicitat ni vincula dades a la identitat, però declara identificadors i dades d’ús per rastrejar',
  summary:
    'L’aplicació del canal infantil ofereix les sèries del S3 (0 a 6 anys) i de l’X3 (7 a 14 anys), un control de temps d’ús per a les famílies i el carnet virtual del club SX3. S’hi pot entrar sense registre; el carnet necessita l’autorització dels pares. L’etiqueta de l’App Store és molt més continguda que la de les aplicacions per a adults: no declara cap dada vinculada a la identitat ni cap publicitat. Però sí que declara identificadors i dades d’ús com a dades per rastrejar, una declaració difícil d’entendre en una aplicació adreçada a infants.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'public-service',
  jurisdiction: 'Catalunya; servei públic de comunicació audiovisual de la Generalitat',
  serviceStatus: 'active',
  links: {
    website: 'https://www.3cat.cat/tv3/sx3/',
    privacyPolicy: 'https://www.3cat.cat/avis-legal/menors/dades/',
    terms: TERMS_URL,
    appStore: appStore('468414356'),
  },
  accountRequired: f('no', 'official', ['3cat-privacitat-menors', '3cat-sx3-app-store'], 'L’aplicació es fa servir sense registre. El carnet del club SX3, per a concursos i activitats, exigeix el registre amb autorització dels pares o tutors.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  publicService: publicService({
    offlineAlternative: f('yes', 'official', ['3cat-com-veure-tdt'], 'El canal SX3 s’emet per TDT i el web sx3.cat es pot fer servir sense registre.'),
    accessibilityStatement: f(
      'partial',
      'official',
      ['3cat-declaracio-accessibilitat'],
      'Hi ha declaració d’accessibilitat, però declara l’aplicació per a iOS «no conforme» amb el Reial decret 1112/2018.',
      { url: 'https://www.3cat.cat/atencio/accessibilitat/' },
    ),
    mandatoryRetention: noMandatoryRetention(['3cat-sx3-carnet-dades'], 'Cap norma no obliga a conservar les dades del carnet: es guarden fins que l’infant es dona de baixa, i als 15 anys es dissocien.'),
  }),
  dataSummary:
    'Les dades d’un infant mereixen la protecció més alta. L’aplicació no declara cap dada vinculada a la identitat, però sí identificadors i dades d’ús per rastrejar; el carnet, a més, porta una fotografia de l’infant.',
  dataCollection: [
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['3cat-sx3-app-store'], note: 'Declarat no vinculat a la identitat però utilitzat per rastrejar.' }),
    row('identificador-de-compte', 'optional', { linked: 'no', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['3cat-sx3-app-store'], note: 'L’etiqueta declara «ID de usuario» no vinculat; correspon al carnet del club.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['3cat-sx3-app-store', '3cat-sx3-carnet-dades'], note: 'La política del club diu que la navegació genera dades de temps de connexió i pàgines visitades, que queden associades a l’usuari si ha iniciat sessió.' }),
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['3cat-sx3-carnet-dades'], note: 'Del carnet: noms de l’infant i dels representants legals.' }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['3cat-sx3-carnet-dades'], note: 'El NIF del pare, la mare o el tutor, per validar canvis al carnet.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['3cat-sx3-carnet-dades'], note: 'La fotografia del carnet identifica l’infant. Només es publica si es dona el consentiment en una acció de participació.' }),
    row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['3cat-sx3-carnet-dades'], note: 'La política preveu felicitacions d’aniversari i canvis de servei segons l’edat.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['3cat-sx3-carnet-dades'], note: 'Per als butlletins, enviats amb Mailchimp.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['3cat-sx3-app-store'], 'L’etiqueta declara identificadors i dades d’ús com a dades utilitzades per rastrejar en aplicacions i webs d’altres empreses, tot i que cap dada no es declara vinculada a la identitat.'),
    advertisingIdentifiers: unknown('No hem trobat cap pàgina actual que llisti els SDK de l’aplicació SX3.'),
    thirdPartyTrackersPresent: unknown('No hem pogut documentar quins SDK incorpora l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['3cat-sx3-app-store'], 'L’etiqueta no declara cap finalitat publicitària i la fitxa, a diferència de les altres aplicacions de la CCMA, no avisa de publicitat.'),
    profiling: f('partial', 'official', ['3cat-sx3-carnet-dades'], 'La política del club preveu informació personalitzada sobre continguts per als infants amb carnet.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['3cat-sx3-carnet-dades'], 'La política del club diu que no es comuniquen dades a tercers, però en concursos les dades de l’infant o dels tutors es poden cedir a les entitats col·laboradores.'),
    intraGroupSharing: unknown('La política del club no diu si les dades del carnet es creuen amb el registre 3Cat.'),
    dataBrokerSales: f('no', 'official', ['3cat-sx3-carnet-dades'], 'La política diu que la informació no es cedirà a tercers sense el consentiment previ i exprés dels representants legals.'),
    internationalTransfers: f('yes', 'official', ['3cat-sx3-carnet-dades'], 'Els butlletins del club s’envien amb Mailchimp, en servidors de fora de la Unió Europea.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['3cat-sx3-carnet-dades'], 'Les dades del carnet es conserven fins que l’infant es dona de baixa; si continua sent membre, als 15 anys es dissocien i només se’n guarden dades estadístiques.'),
    dataAfterDeletion: unknown('La política del club no descriu què passa amb les dades després de la baixa.'),
    periods: [
      { dataType: 'nom-i-cognoms', period: 'Fins a la baixa del carnet; dissociació automàtica als 15 anys', sources: ['3cat-sx3-carnet-dades'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['3cat-privacitat-menors', '3cat-sx3-carnet-dades']),
    selfService: f('partial', 'official', ['3cat-privacitat-menors', '3cat-sx3-carnet-dades'], 'La política de menors diu que l’infant es pot donar de baixa per web, però els canvis al carnet exigeixen les dades de l’infant i les del representant legal, amb el NIF. Els drets s’exerceixen per escrit al SX3 o al servei d’atenció a l’audiència.'),
    difficulty: 'medium',
    requiresSupportContact: false,
    steps: [
      'L’aplicació es pot fer servir sense carnet: per deixar de generar dades, n’hi ha prou de desinstal·lar-la.',
      'Dona de baixa el carnet des del web del SX3; els canvis al carnet es validen amb el número de carnet i la clau de l’infant i amb el nom i el NIF del representant legal.',
      'Si no funciona, envia la petició amb còpia del DNI del representant legal a SX3, carrer Oriol Martorell, 1, 08970 Sant Joan Despí, o pel servei d’atenció a l’audiència.',
    ],
    dataRetained: 'La política no ho concreta.',
    sources: ['3cat-privacitat-menors', '3cat-sx3-carnet-dades'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['3cat-sx3-carnet-dades'], 'La portabilitat es pot demanar per mitjà del representant legal; no hi ha cap eina.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['3cat-sx3-carnet-dades'], 'Els representants legals poden exercir tots els drets per escrit al SX3 o pel servei d’atenció a l’audiència, amb còpia del DNI o signatura electrònica.', { url: 'https://www.3cat.cat/atencio/' }),
  },
  controls: {
    adPersonalizationOptOut: na('La fitxa de l’App Store no declara publicitat a l’aplicació.'),
    telemetryOptOut: unknown('No hem pogut comprovar si l’aplicació té el mateix gestor de consentiments que les altres de la CCMA.'),
    granularControls: f('partial', 'official', ['3cat-sx3-app-store'], 'Les famílies poden limitar el temps d’ús de l’aplicació; no hem trobat controls de privadesa específics.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown('No hem analitzat la interfície de l’aplicació.'),
  },
  security: security('El carnet es protegeix amb un número i una clau secreta; no hem trobat cap segon factor.'),
  review: {
    researchStatus: 'documented',
    lastReviewedAt: CATALAN_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La declaració de rastreig és el punt que cal aclarir: l’etiqueta no declara cap dada vinculada a la identitat ni cap publicitat, però sí identificadors i dades d’ús per rastrejar, en una aplicació que es dirigeix a infants de 0 a 14 anys. La fitxa de l’App Store diu que l’aplicació té controls parentals i verificació d’edat. L’última actualització de l’aplicació és de l’agost del 2025. ' + incidentsNote,
    openQuestions: [
      'Per què l’etiqueta declara identificadors i dades d’ús per rastrejar en una aplicació infantil sense publicitat?',
      'Quins SDK incorpora l’aplicació?',
      'Les dades del carnet del SX3 es creuen amb el registre 3Cat?',
    ],
  },
}

/* ═══════════════════════ iCat ═══════════════════════ */
const iCat: AppSeed = {
  slug: 'icat',
  name: 'iCat.cat',
  company: 'ccma',
  categories: ['musica-i-audio'],
  tagline: 'L’emissora musical declara la ubicació exacta vinculada a la identitat i per a publicitat de tercers',
  summary:
    'L’aplicació de l’emissora musical iCat té l’etiqueta més exposada del lot. A més del que declaren 3Cat i Catalunya Ràdio, hi afegeix la ubicació exacta vinculada a la identitat i per a publicitat de tercers, analítica i personalització. Es fa servir sense compte. La pàgina d’SDK arxivada el gener del 2025 anomenava comScore, Adobe Analytics, Smart AdServer, Google DBM, Firebase Crashlytics, Airship i Didomi.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'public-service',
  jurisdiction: 'Catalunya; servei públic de comunicació audiovisual de la Generalitat',
  serviceStatus: 'active',
  links: {
    website: 'https://www.ccma.cat/catradio/icat/',
    privacyPolicy: POLICY_URL,
    terms: TERMS_URL,
    appStore: appStore('318053420'),
    adSettings: 'https://www.3cat.cat/avis-legal/cookies/',
  },
  accountRequired: f('no', 'official', ['3cat-privacitat-registre'], 'La política només exigeix registre a les aplicacions de 3Cat.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  publicService: publicService({
    offlineAlternative: f('yes', 'official', ['3cat-com-veure-fm', '3cat-com-veure-tdt'], 'iCat s’escolta per FM i per TDT sense cap registre.'),
    accessibilityStatement: f(
      'no',
      'official',
      ['3cat-declaracio-accessibilitat'],
      'La declaració d’accessibilitat de la CCMA no inclou l’aplicació d’iCat.',
      { url: 'https://www.3cat.cat/atencio/accessibilitat/' },
    ),
    mandatoryRetention: noMandatoryRetention(['3cat-privacitat-registre'], 'No hi ha cap obligació legal de conservar les dades de l’aplicació.'),
  }),
  dataSummary:
    'La ubicació exacta revela on vius, on treballes i per on et mous. En una aplicació per escoltar música, declarar-la vinculada a la identitat i per a publicitat de tercers és difícil de justificar.',
  dataCollection: [
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'prestacio-del-servei'], sources: ['3cat-icat-app-store'], note: 'Declarada vinculada a la identitat per a publicitat de tercers, analítica, personalització i funcionalitat. Depèn del permís de localització.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['3cat-icat-app-store'] }),
    row('historial-de-visualitzacio', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['3cat-cookies-app-icat'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada', 'mesura-publicitaria', 'personalitzacio-de-continguts'], sources: ['3cat-icat-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['3cat-icat-app-store'] }),
    row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['3cat-icat-app-store'] }),
    row('identificador-publicitari', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['3cat-cookies-app-icat'], note: 'Depèn del permís de rastreig d’iOS.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['3cat-cookies-app-icat'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['3cat-icat-app-store', '3cat-cookies-app-icat'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', sources: ['3cat-icat-app-store'], note: 'Declarades sota «Otros fines».' }),
  ],
  tracking: {
    crossAppTracking: trackingShared.crossAppTracking('3cat-icat-app-store'),
    advertisingIdentifiers: trackingShared.advertisingIdentifiers,
    thirdPartyTrackersPresent: f('yes', 'official', ['3cat-cookies-app-icat'], 'comScore, Adobe Analytics, Smart AdServer, Google DBM, Firebase Crashlytics, Airship i Didomi, segons la pàgina d’SDK arxivada el gener del 2025.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['3cat-icat-app-store', '3cat-cookies-app-icat'], 'La fitxa avisa de publicitat i l’etiqueta declara la ubicació exacta i aproximada, identificadors i dades d’ús per a publicitat de tercers.'),
    profiling: f('partial', 'official', ['3cat-cookies-app-icat'], 'Personalització de continguts i publicitat segons els interessos.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['3cat-icat-app-store', '3cat-cookies-app-icat'], 'Ubicació, identificadors i dades d’ús declarats per a publicitat de tercers.'),
    intraGroupSharing: f('yes', 'official', ['3cat-privacitat-registre'], 'El compte opcional és el registre 3Cat comú a tot el grup.'),
    dataBrokerSales,
    internationalTransfers,
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: retentionPeriods,
    dataAfterDeletion,
  },
  accountDeletion: {
    possible: f('yes', 'official', ['3cat-privacitat-registre', '3cat-espai-usuari'], 'No cal compte. Si se n’ha creat un de 3Cat, es pot esborrar.'),
    selfService: f('yes', 'official', ['3cat-privacitat-registre', '3cat-espai-usuari']),
    directUrl: ACCOUNT_URL,
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Nega o retira el permís de localització a Configuració > iCat.cat > Ubicació.',
      'Refusa els socis publicitaris a Configuració > Condicions legals > Gestió de cookies de l’aplicació i desactiva el permís de rastreig d’iOS.',
      'Per demanar la supressió de les dades associades al dispositiu, escriu a dpd@3cat.cat.',
    ],
    sources: ['3cat-privacitat-registre', '3cat-espai-usuari'],
  },
  userRights: { dataExport, exportFormatQuality: 'unknown', rightsExercise },
  controls: {
    adPersonalizationOptOut: adOptOut,
    telemetryOptOut,
    granularControls,
    defaultPosture: 'mixed',
    darkPatterns,
    darkPatternList,
  },
  security: security('No hem trobat cap opció de verificació en dos passos al compte 3Cat.'),
  review: {
    researchStatus: 'documented',
    lastReviewedAt: CATALAN_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'És l’única aplicació de la CCMA que declara la ubicació exacta vinculada a la identitat i per a publicitat de tercers. L’enllaç de la política de privadesa de la fitxa de l’App Store porta a l’antiga adreça de galetes de ccma.cat, que ara redirigeix a la política de 3Cat. ' + incidentsNote,
    openQuestions: [
      'Per a què necessita la ubicació exacta una aplicació de música, i per què es declara per a publicitat de tercers?',
      'Per què no hi ha declaració d’accessibilitat per a l’aplicació?',
    ],
  },
}

export const lot: SeedLot = {
  companies: [
    {
      slug: 'ccma',
      name: 'Corporació Catalana de Mitjans Audiovisuals (3Cat)',
      legalName: 'Corporació Catalana de Mitjans Audiovisuals, SA',
      parent: 'generalitat-de-catalunya',
      description:
        'Grup públic de ràdio i televisió de la Generalitat de Catalunya, amb la marca 3Cat: TV3, Catalunya Ràdio, 3CatInfo, SX3 i les seves plataformes digitals. El format per l’ens públic Corporació Catalana de Mitjans Audiovisuals (NIF Q0891001J) i l’empresa pública Corporació Catalana de Mitjans Audiovisuals, SA (NIF A08849622), que gestiona els serveis audiovisuals i és la responsable del tractament de les dades de les aplicacions. Es finança amb aportacions de la Generalitat i amb publicitat.',
      headquartersCountry: 'ES',
      leadSupervisoryAuthority: 'apdcat',
      supervisoryNote: 'La política de privadesa remet les reclamacions a l’Autoritat Catalana de Protecció de Dades.',
      ownership: 'state',
      primaryRevenueModel: 'mixed',
      website: 'https://www.3cat.cat/',
      productDomains: ['3cat.cat', 'ccma.cat', '3catinfo.cat'],
      privacyContact: 'dpd@3cat.cat',
    },
  ],
  sources: [
    /* Fitxes de l’App Store */
    s('3cat-app-store', '3Cat en App Store (Privacidad de la app)', appStore('364615121'), 'Apple / Corporacio Catalana de Mitjans Audiovisuals, SA', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: ubicació, identificadors, dades d’ús i diagnòstics per rastrejar; ubicació aproximada, identificadors, dades d’ús i de publicitat vinculats a la identitat per a publicitat de tercers; fotos o vídeos per a altres finalitats; ubicació exacta no vinculada. La fitxa avisa que conté publicitat.',
    }),
    s('3cat-3catinfo-app-store', '3CatInfo en App Store (Privacidad de la app)', appStore('457034636'), 'Apple / Corporacio Catalana de Mitjans Audiovisuals, SA', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta idèntica a la de 3Cat. La fitxa avisa de publicitat i de contingut generat per les persones usuàries.',
    }),
    s('3cat-catalunya-radio-app-store', 'Catalunya Ràdio en App Store (Privacidad de la app)', appStore('318047072'), 'Apple / Corporacio Catalana de Mitjans Audiovisuals, SA', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta idèntica a la de 3Cat. La fitxa avisa de publicitat i l’enllaç de política de privadesa apunta per HTTP a l’avís legal de ccma.cat.',
    }),
    s('3cat-sx3-app-store', 'SX3 en App Store (Privacidad de la app)', appStore('468414356'), 'Apple / Corporacio Catalana de Mitjans Audiovisuals, SA', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors i dades d’ús per rastrejar; identificadors i dades d’ús no vinculats per a analítica i funcionalitat. Cap dada vinculada a la identitat i cap avís de publicitat. Classificació 9+, amb controls parentals i control de temps d’ús.',
    }),
    s('3cat-icat-app-store', 'iCat.cat en App Store (Privacidad de la app)', appStore('318053420'), 'Apple / Corporacio Catalana de Mitjans Audiovisuals, SA', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta com la de 3Cat, però amb la ubicació exacta vinculada a la identitat per a publicitat de tercers, analítica, personalització i funcionalitat. La fitxa avisa de publicitat.',
    }),
    /* Política de privadesa, galetes i condicions */
    s('3cat-privacitat-registre', 'Privacitat: Registre de 3Cat', POLICY_URL, 'Corporació Catalana de Mitjans Audiovisuals, SA', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Política del registre 3Cat: compte obligatori a les aplicacions de 3Cat i opcional a la resta; nom, correu i contrasenya obligatoris; bases per finalitat (contracte, consentiment, interès legítim i obligació legal); cap comunicació a tercers llevat d’encarregats i requeriments; clàusules tipus per a transferències; baixa des de l’espai d’usuari i cancel·lació automàtica després de dos anys d’inactivitat.',
    }),
    s('3cat-politica-privacitat', 'Política de privacitat — 3Cat', 'https://www.3cat.cat/avis-legal/privacitat/dades/', 'Corporació Catalana de Mitjans Audiovisuals, SA', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Índex de la política de privadesa: una vintena de fitxes informatives per tractament (registre, menors, publicitat, atenció a l’audiència, transparència…). És la pàgina a què porta l’«Inventari d’activitats de tractament» del portal de transparència.',
    }),
    s('3cat-politica-cookies', 'Política de cookies — 3Cat', 'https://www.3cat.cat/avis-legal/cookies/', 'Corporació Catalana de Mitjans Audiovisuals, SA', 'privacy-center', 'primary', {
      language: 'ca',
      summary: 'Galetes tècniques, de preferències, analítiques i publicitàries als webs i a les aplicacions. Considera «essencials i no refusables» les tècniques i les analítiques d’audiència. A les aplicacions, el gestor de consentiments és a Configuració > Condicions legals > Gestió de cookies.',
    }),
    s('3cat-condicions-us', 'Condicions d’utilització del portal — 3Cat', TERMS_URL, 'Corporació Catalana de Mitjans Audiovisuals, SA', 'terms', 'primary', {
      language: 'ca',
      summary: 'Condicions d’ús: cancel·lació automàtica dels comptes sense cap accés durant dos anys, retirada de comentaris i suspensió de comptes, prohibició d’adreces de correu temporals.',
    }),
    s('3cat-dpd', 'Delegat de protecció de dades — 3Cat', 'https://www.3cat.cat/avis-legal/privacitat/delegat-de-proteccio-de-dades/', 'Corporació Catalana de Mitjans Audiovisuals, SA', 'privacy-center', 'primary', {
      language: 'ca',
      summary: 'Nom del delegat de protecció de dades, adreça postal a Sant Joan Despí, telèfon i correu dpd@3cat.cat.',
    }),
    s('3cat-privacitat-publicitat', 'Privacitat: Anunciants i publicitat — 3Cat', 'https://www.3cat.cat/avis-legal/privacitat/publicitat/', 'Corporació Catalana de Mitjans Audiovisuals, SA', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Fitxa del tractament de dades d’anunciants. Declara que els butlletins de la CCMA s’envien amb Mailchimp, en servidors de fora de la Comunitat Europea.',
    }),
    s('3cat-privacitat-menors', 'Privacitat: Menors — 3Cat', 'https://www.3cat.cat/avis-legal/privacitat/menors/', 'Corporació Catalana de Mitjans Audiovisuals, SA', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'El web i les aplicacions del SX3 s’obren sense registre; el carnet del club exigeix l’autorització dels pares o tutors, i l’infant es pot donar de baixa per web.',
    }),
    s('3cat-sx3-carnet-dades', 'Menors: com gestionem les dades del carnet SX3', 'https://www.3cat.cat/avis-legal/menors/dades/', 'Corporació Catalana de Mitjans Audiovisuals, SA', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Tractament del carnet del SX3: consentiment dels representants legals, fotografia de l’infant, NIF del tutor per validar canvis, butlletins amb Mailchimp, cessió a entitats col·laboradores en concursos, conservació fins a la baixa i dissociació als 15 anys.',
    }),
    s('3cat-espai-usuari', 'Espai Registre Usuaris — 3Cat', ACCOUNT_URL, 'Corporació Catalana de Mitjans Audiovisuals, SA', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Espai d’usuari del compte 3Cat, amb les opcions d’editar el perfil, canviar la contrasenya i el correu, configurar les comunicacions i «Dona’t de baixa» o «Esborra el compte».',
    }),
    s('3cat-ajuda-compte', 'Crea el teu compte gratuït — Ajuda 3Cat', 'https://www.3cat.cat/ajuda/3cat/crea-compte-gratuit.html', 'Corporació Catalana de Mitjans Audiovisuals, SA', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'L’aplicació 3Cat demana crear un compte en obrir-la; el compte serveix per a recomanacions personalitzades, desar programes i continuar on s’havia deixat.',
    }),
    s('3cat-ajuda-catalunya-radio', 'Tinc l’app de Catalunya Ràdio instal·lada. Què he de fer? — Ajuda 3Cat', 'https://www.3cat.cat/ajuda/3cat/tinc-app-catalunya-radio.html', 'Corporació Catalana de Mitjans Audiovisuals, SA', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'L’aplicació de Catalunya Ràdio continua funcionant com fins ara, i els directes i els podcasts també són a l’aplicació 3Cat.',
    }),
    /* Pàgines d’SDK arxivades */
    s('3cat-cookies-app-324', 'Quines cookies, SDK i permisos fem servir a les aplicacions mòbils: App de 324', 'https://www.3cat.cat/avis-legal/cookies/aplicacions-mobils/324/', 'Corporació Catalana de Mitjans Audiovisuals, SA', 'privacy-center', 'primary', {
      language: 'ca',
      publishedAt: '2025-01-15',
      archiveUrl: 'http://web.archive.org/web/20250115210640/https://www.3cat.cat/avis-legal/cookies/aplicacions-mobils/324/',
      summary: 'Pàgina retirada, consultada a l’arxiu del gener del 2025. Permisos de l’aplicació (ubicació, càmera, identificador del dispositiu) i SDK: comScore, Adobe Analytics («essencial i no refusable»), Smart AdServer i Google DBM per a publicitat, Firebase Crashlytics, Airship, AppsFlyer i Didomi. Avisa que des d’iOS 14.5 l’aplicació demana permís per rastrejar.',
    }),
    s('3cat-cookies-app-catalunya-radio', 'Quines cookies, SDK i permisos fem servir a les aplicacions mòbils: App de Catalunya Ràdio', 'https://www.3cat.cat/avis-legal/cookies/aplicacions-mobils/catalunya-radio/', 'Corporació Catalana de Mitjans Audiovisuals, SA', 'privacy-center', 'primary', {
      language: 'ca',
      publishedAt: '2024-11-24',
      archiveUrl: 'http://web.archive.org/web/20241124060012/https://www.3cat.cat/avis-legal/cookies/aplicacions-mobils/catalunya-radio/',
      summary: 'Pàgina retirada, consultada a l’arxiu del novembre del 2024. SDK: comScore, Adobe Analytics, Smart AdServer, Google DBM, Firebase Crashlytics, Airship i Didomi; publicitat inserida als àudios i personalitzada segons la navegació i la ubicació.',
    }),
    s('3cat-cookies-app-icat', 'Quines cookies, SDK i permisos fem servir a les aplicacions mòbils: App d’iCat', 'https://www.3cat.cat/avis-legal/cookies/aplicacions-mobils/icat/', 'Corporació Catalana de Mitjans Audiovisuals, SA', 'privacy-center', 'primary', {
      language: 'ca',
      publishedAt: '2025-01-20',
      archiveUrl: 'http://web.archive.org/web/20250120121132/https://www.3cat.cat/avis-legal/cookies/aplicacions-mobils/icat/',
      summary: 'Pàgina retirada, consultada a l’arxiu del gener del 2025. Mateixos SDK que l’aplicació de Catalunya Ràdio.',
    }),
    /* Servei públic */
    s('3cat-declaracio-accessibilitat', 'Declaració d’accessibilitat — 3Cat', 'https://www.3cat.cat/atencio/accessibilitat/', 'Corporació Catalana de Mitjans Audiovisuals, SA', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Declaracions preparades el 9 d’octubre de 2024 amb una auditoria externa de TOTHOMweb i revisades el 17 de juliol de 2025. Les aplicacions 3Cat i SX3 per a iOS hi consten «no conformes» i 3CatInfo «parcialment conforme»; les de Catalunya Ràdio i iCat no hi són.',
    }),
    s('3cat-transparencia-normativa', 'Normativa i informació d’interès jurídic — Transparència 3Cat', 'https://www.3cat.cat/corporatiu/transparencia/normativa-i-informacio-dinteres-juridic/document/175/', 'Corporació Catalana de Mitjans Audiovisuals', 'other', 'primary', {
      language: 'ca',
      summary: 'Pàgina del portal de transparència, actualitzada l’1 de juny de 2026. L’enllaç «Inventari d’activitats de tractament de dades personals» porta a la política de privadesa. Diu que no hi ha resolucions administratives ni judicials de rellevància pública.',
    }),
    s('3cat-com-veure-tdt', 'Per TDT — Com veure’ns i escoltar-nos', 'https://www.3cat.cat/atencio/com-veure-i-escoltar/tdt/', 'Corporació Catalana de Mitjans Audiovisuals, SA', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Canals de 3Cat a la TDT (TV3, 3CatInfo, Esport3, SX3/33 i les emissores de Catalunya Ràdio) i freqüències.',
    }),
    s('3cat-com-veure-fm', 'Com escoltar Catalunya Ràdio des de la FM', 'https://www.3cat.cat/atencio/com-veure-i-escoltar/fm/', 'Corporació Catalana de Mitjans Audiovisuals, SA', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Freqüències i cobertura de Catalunya Ràdio, 3CatInfo, Catalunya Música i iCat a la FM.',
    }),
    s('ccma-sindicatura-informe-2-2025', 'Informe 2/2025. Corporació Catalana de Mitjans Audiovisuals: contractació i despeses de personal, exercicis 2021 i 2022', 'https://www.sindicatura.cat/documents/36414/85841/2025_02_ca.pdf/3a6f84a7-57dc-3f67-f4d3-0ed7ef67e8cb?version=1.0&t=1742293242643', 'Sindicatura de Comptes de Catalunya', 'audit', 'authority', {
      language: 'ca',
      publishedAt: '2025-03-18',
      summary: 'Fiscalització de la CCMA. Conclusió 22 i apartats 4.5.1 i 4.5.2: la CCMA no disposa de l’auditoria de compliment de l’Esquema Nacional de Seguretat (article 31 del Reial decret 311/2022) ni de l’auditoria biennal de les mesures de seguretat del tractament de dades; només va aportar un esborrany sense signar de juny del 2022 limitat a recursos humans.',
    }),
    s('ccma-llei-11-2007', 'Ley 11/2007, de 11 de octubre, de la Corporación Catalana de Medios Audiovisuales', 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-19188', 'Agència Estatal Butlletí Oficial de l’Estat', 'legislation', 'authority', {
      language: 'es',
      publishedAt: '2007-10-11',
      summary: 'Text consolidat de la llei de la CCMA: regula el servei públic de comunicació audiovisual de la Generalitat i el contracte programa, que concreta l’emissió de publicitat i els criteris per obtenir-ne ingressos (article 21).',
    }),
    /* Incident */
    s('3cat-3catinfo-ciberatac-2021', 'Un ciberatac afecta les webs i aplicacions de la Generalitat durant unes tres hores', 'https://www.3cat.cat/3catinfo/un-ciberatac-afecta-les-webs-i-aplicacions-de-la-generalitat/noticia/3133633/', '3CatInfo', 'press', 'secondary', {
      language: 'ca',
      publishedAt: '2021-12-03',
      summary: 'Notícia dels mateixos mitjans de la CCMA: un atac de denegació de servei va deixar sense servei les webs i aplicacions de TV3 i Catalunya Ràdio, el 324.cat i l’Esport3.cat, a més de les de la Generalitat.',
    }),
    s('ccma-beteve-ciberatac-2021', 'Controlat el ciberatac que va afectar els webs de la Generalitat i la CCMA', 'https://beteve.cat/ciencia-i-tecnologia/ciberatac-generalitat-afecta-webs-apps-tv3-ccma/', 'betevé', 'press', 'independent', {
      language: 'ca',
      publishedAt: '2021-12-03',
      summary: 'L’atac va afectar les webs i aplicacions de la CCMA, que es van anar restablint abans de les deu de la nit.',
    }),
  ],
  apps: [tresCat, tresCatInfo, catalunyaRadio, sx3, iCat],
  incidents: [
    {
      slug: 'ccma-ciberatac-ddos-2021',
      title: 'Un atac de denegació de servei deixa sense servei les webs i aplicacions de TV3 i Catalunya Ràdio',
      type: 'other',
      severity: 'low',
      apps: ['3cat', '3catinfo', 'catalunya-radio'],
      company: 'ccma',
      occurredAt: '2021-12-03',
      disclosedAt: '2021-12-03',
      description:
        'El 3 de desembre de 2021, un atac de denegació de servei contra els sistemes de la Generalitat va deixar sense servei durant unes hores les webs i les aplicacions de TV3 i Catalunya Ràdio, el portal 324.cat i l’Esport3.cat. Les fonts no descriuen cap accés a dades personals: un atac de denegació de servei satura els servidors, no n’extreu informació.',
      affectedPeople: 'Persones usuàries de les webs i aplicacions de la CCMA durant la interrupció; no consta cap exposició de dades.',
      sources: ['3cat-3catinfo-ciberatac-2021', 'ccma-beteve-ciberatac-2021'],
    },
  ],
  storeIds: {
    '3cat': 'cat.tv3.tv3',
    '3catinfo': 'cat.324.noticies',
    'catalunya-radio': 'com.catradio.CatRadio',
    sx3: 'cat.tv3.iphone.Super3',
    icat: 'com.catradio.iCatFM',
  },
}
