import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 05 de la segona onada: els antics portals d’Adevinta a Espanya
 * (InfoJobs, Milanuncios, Fotocasa i coches.net) i quatre aplicacions de la
 * Junta de Andalucía (iPasen, Salud Responde, Servicio Andaluz de Empleo i
 * Salud Andalucía).
 *
 * Els quatre portals comparteixen plantilla de política de privadesa, i per
 * això les fitxes s’assemblen: perfil comercial amb consentiment, identificadors
 * publicitaris compartits amb LiveRamp i conservació «mentre duri la relació».
 * El 2025 Adevinta els va vendre al fons EQT X, i Scout24 va comprar després
 * Fotocasa. Les aplicacions andaluses declaren a l’App Store que no recullen
 * cap dada, cosa que no casa amb el que tracten: la contradicció és la troballa
 * principal d’aquest bloc.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/* ───────────── Fragments compartits pels portals d’Adevinta ───────────── */

const adevintaDeletionRetained =
  'Les dades queden bloquejades durant els terminis de prescripció de cada finalitat, a disposició només de jutges, tribunals i autoritats, abans de l’esborrat definitiu.'

const liveRampDetail =
  'La política preveu compartir el correu en format hash, l’identificador publicitari del mòbil i l’adreça IP amb LiveRamp, com a corresponsable, per crear un identificador que es pot compartir amb anunciants de tot el món. No parla de venda de dades.'

const labelTracking =
  'L’etiqueta de l’App Store declara identificadors i dades d’ús «utilitzats per rastrejar-te» en aplicacions i webs d’altres empreses.'

const noRepo = 'No hem trobat cap repositori públic del codi de l’aplicació; ho considerem programari privatiu.'

/* ═══════════════════════════ InfoJobs ═══════════════════════════ */
const infojobs: AppSeed = {
  slug: 'infojobs',
  name: 'InfoJobs',
  company: 'adevinta-jobs',
  categories: ['feina-i-ocupacio'],
  tagline: 'Currículums visibles per a les empreses per defecte i una filtració de perfils el 2025',
  summary:
    'InfoJobs guarda el currículum complet de milions de persones i, per defecte, el deixa consultar a les empreses que cerquen candidats, amb base en l’interès legítim. El 2025 uns atacants van entrar amb credencials robades a comptes del servei i en van extreure dades de contacte i, en alguns casos, experiència laboral, número d’identificació i data de naixement. El perfil comercial per a publicitat depèn del consentiment, i la baixa es pot fer des de l’aplicació.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.infojobs.net/',
    privacyPolicy: 'https://www.infojobs.net/privacy-policy/extended.xhtml',
    appStore: appStore('382581206'),
  },
  accountRequired: f('partial', 'official', ['infojobs-privacy-policy'], 'Les ofertes es poden consultar sense compte; cal registrar-se per inscriure’s, desar el currículum o rebre alertes.'),
  openSource: f('no', 'editorial', [], noRepo, { licence: 'Privativa' }),
  dataSummary:
    'Un currículum a InfoJobs recull la trajectòria laboral, la formació, les competències, la data de naixement i sovint el document d’identitat. Afegit a les inscripcions i les cerques, mostra quan i on una persona busca feina, i és el tipus de dada que la filtració del 2025 va posar en mans d’estafadors d’ofertes falses.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['infojobs-privacy-policy', 'infojobs-app-store'], note: 'Es comunica a l’empresa de cada oferta on t’inscrius.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['infojobs-privacy-policy', 'infojobs-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['infojobs-privacy-policy', 'infojobs-app-store'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['infojobs-privacy-policy'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['infojobs-app-store', 'infojobs-breach-2025-data'], note: 'L’etiqueta la declara per a publicitat pròpia; la filtració va exposar el codi postal i la ciutat.' }),
    row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['infojobs-privacy-policy'], note: 'El currículum, visible per a les empreses de les ofertes i, per defecte, per a les que cerquen a la base de dades de candidats.' }),
    row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['infojobs-privacy-policy', 'infojobs-breach-2025-data'] }),
    row('nivell-formatiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['infojobs-privacy-policy'], note: 'Inclòs a les «dades curriculars», juntament amb competències i habilitats.' }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['infojobs-breach-2025-data'], note: 'Només si s’afegeix al perfil; la filtració del 2025 el va poder exposar.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['infojobs-privacy-policy', 'infojobs-profile-visibility'], note: 'Fotografia de perfil, que pot quedar indexada a Google si el perfil és públic.' }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['infojobs-privacy-policy'], note: 'Xat amb les empreses que inicien una conversa.' }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['infojobs-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'recomanacions-algoritmiques'], sources: ['infojobs-app-store', 'infojobs-privacy-policy'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['infojobs-app-store'], note: 'L’etiqueta declara dades d’interacció amb el producte per a publicitat de tercers.' }),
    row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['infojobs-privacy-policy'], note: 'Perfil comercial amb consentiment, que altres webs del grup o tercers poden fer servir per mostrar publicitat.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['infojobs-app-store'] }),
    row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['infojobs-privacy-policy'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['infojobs-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['infojobs-app-store'], 'L’etiqueta de l’App Store declara identificadors utilitzats per rastrejar entre aplicacions i webs d’altres empreses.'),
    advertisingIdentifiers: f('yes', 'official', ['infojobs-app-store'], 'L’identificador del dispositiu es declara per a publicitat de tercers.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['infojobs-privacy-policy', 'infojobs-app-store'], 'La política esmenta proveïdors de serveis publicitaris i l’etiqueta, publicitat de tercers.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['infojobs-privacy-policy'], 'Amb consentiment, el perfil comercial serveix per mostrar publicitat personalitzada a InfoJobs, a altres webs del grup i a webs de tercers, també amb audiències similars.'),
    profiling: f('yes', 'official', ['infojobs-privacy-policy'], 'Perfil comercial amb dades de navegació i hàbits d’accés, i alertes d’ofertes calculades amb el currículum i les cerques. La política diu que no hi ha decisions automatitzades amb efectes jurídics.'),
    aiTraining: unknown('La política parla de xatbot i de desenvolupar funcionalitats «mitjançant l’estudi de les dades», però no diu si s’entrenen models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['infojobs-privacy-policy'], 'Empreses de les ofertes (també les de «perfil cec», que no revelen la seva identitat), empreses que cerquen a la base de candidats, proveïdors i autoritats.'),
    intraGroupSharing: f('yes', 'official', ['infojobs-privacy-policy'], 'Accés d’empreses del grup per a suport i comunicació de dades a Adevinta Motor, que gestiona Milanuncios i coches.net.'),
    dataBrokerSales: unknown('La política no esmenta cap venda de dades ni cap acord amb intermediaris.'),
    internationalTransfers: f('yes', 'official', ['infojobs-privacy-policy'], 'Proveïdors de fora de l’Espai Econòmic Europeu amb clàusules contractuals tipus.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('La política preveu informes de transparència sobre moderació de contingut, però no n’hem trobat cap sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['infojobs-privacy-policy'], 'Hi ha dos terminis concrets: el test de competències (dos anys) i els comptes inactius, que es poden eliminar al cap de set anys. La resta es conserva mentre duri la relació.'),
    dataAfterDeletion: f('partial', 'official', ['infojobs-privacy-policy'], adevintaDeletionRetained),
    periods: [
      { period: 'Set anys sense activitat: el compte es considera inactiu i es pot eliminar', sources: ['infojobs-privacy-policy'] },
      { period: 'Dos anys per al resultat del test de competències', sources: ['infojobs-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['infojobs-delete-account']),
    selfService: f('yes', 'official', ['infojobs-delete-account'], 'L’opció «Tancar compte» és als ajustos del web i de l’aplicació.'),
    directUrl: 'https://ayuda.infojobs.net/hc/es/articles/40722361925393',
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'A l’aplicació, obre «CV» i toca la icona d’ajustos (a baix a la dreta a l’iPhone, a dalt a la dreta a Android).',
      'Tria «Tancar compte» i indica’n un motiu.',
      'Confirma la contrasenya i toca «Tancar compte». Al web, el camí és menú del compte, «Ajustos» i «Tancar compte».',
      'L’esborrat pot trigar uns quants dies a completar-se.',
    ],
    obstacles: 'L’ajuda d’InfoJobs respon «No cal!» a qui pregunta si s’ha de donar de baja quan troba feina, i proposa amagar el currículum en lloc d’eliminar-lo.',
    dataRetained: adevintaDeletionRetained,
    sources: ['infojobs-delete-account', 'infojobs-found-job', 'infojobs-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['infojobs-privacy-policy'], 'La portabilitat es reconeix, però no hem trobat cap eina d’exportació; cal demanar-la per correu o des del perfil.', {
      url: 'mailto:privacidad@infojobs.net',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['infojobs-privacy-policy'], 'Delegat de protecció de dades a privacidad@infojobs.net, enllaços als correus i accés des del perfil.', {
      url: 'mailto:privacidad@infojobs.net',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['infojobs-privacy-policy'], 'El perfil comercial i la publicitat personalitzada depenen del consentiment, que es pot retirar.'),
    telemetryOptOut: f('partial', 'official', ['infojobs-privacy-policy'], 'Les estadístiques d’ús es basen en l’interès legítim; només s’hi pot oposar exercint el dret d’oposició.'),
    granularControls: f('partial', 'official', ['infojobs-found-job', 'infojobs-profile-visibility'], 'Als ajustos es pot amagar el currículum a les empreses que cerquen candidats, fer invisible el perfil a Internet i desactivar els correus d’ofertes.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['infojobs-found-job'], 'L’ajuda desaconsella la baixa a qui ha trobat feina i recorda que el currículum continuarà visible per a les empreses. No hem analitzat el bàner de consentiment.'),
    darkPatternList: [
      {
        type: 'other',
        severity: 'low',
        description: 'L’article d’ajuda sobre la baixa respon «No cal!» i empeny a mantenir el compte i el currículum visibles en lloc d’eliminar-los.',
        sources: ['infojobs-found-job'],
      },
    ],
  },
  security: {
    e2ee: f('no', 'official', ['infojobs-privacy-policy'], 'El xat amb les empreses passa pels servidors d’InfoJobs, que poden revisar-lo.', { scope: 'none' }),
    transportEncryption: f('yes', 'editorial', [], 'Comprovació pròpia del web: redirigeix a HTTPS i envia la capçalera HSTS. No hem analitzat el trànsit de l’aplicació.'),
    atRestEncryption: unknown('No hi ha informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos; l’ajuda de seguretat només dona consells de contrasenyes.'),
    independentAudits: f('partial', 'official', ['infojobs-security-measures'], 'InfoJobs diu que cada any contracta proves d’intrusió externes; no en publica els resultats ni certificacions.'),
    bugBounty: f('yes', 'official', ['infojobs-security-measures'], 'Diu que participa en programes on persones expertes detecten vulnerabilitats a canvi de recompenses. No n’hem trobat la pàgina pública.'),
    vulnerabilityDisclosure: f('yes', 'official', ['infojobs-security-txt', 'adevinta-vulnerability-disclosure'], 'Fitxer security.txt amb adreça de contacte i política de divulgació responsable d’Adevinta a HackerOne.', {
      url: 'https://adevinta.com/security-vulnerability/',
    }),
  },
  alternatives: [
    { app: 'linkedin', comparability: 'partial', rationale: 'També permet que les empreses trobin candidats pel perfil, amb més pes de xarxa professional.', tradeOffs: 'El perfil és públic per defecte i LinkedIn fa servir les dades per a publicitat i IA.' },
    { app: 'indeed', comparability: 'equivalent', rationale: 'Cercador d’ofertes amb currículum i candidatures en línia.' },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política és del setembre del 2024, anterior a la venda a EQT, i encara parla del «grup Adevinta» i de comunicar dades a Adevinta Motor. Hem cercat sancions a la base de resolucions de l’AEPD i no n’hem trobat cap contra Adevinta Jobs.',
    openQuestions: [
      'Quantes persones va afectar la filtració del 2025 i què en va concloure l’AEPD?',
      'Quin programa de recompenses fa servir InfoJobs i on es publica?',
    ],
  },
}

/* ═══════════════════════════ Milanuncios ═══════════════════════════ */
const milanuncios: AppSeed = {
  slug: 'milanuncios',
  name: 'Milanuncios',
  company: 'adevinta-motor',
  categories: ['compravenda-entre-particulars'],
  tagline: 'Anuncis de segona mà amb xats revisats, identificadors per a LiveRamp i ID5 i dades fiscals per a Hisenda',
  summary:
    'Milanuncios revisa els xats i els anuncis amb processos manuals i automàtics per detectar frau, i ho diu a la política. Amb consentiment, comparteix el correu en format hash i l’identificador publicitari amb LiveRamp i ID5 per crear identificadors que viatgen entre anunciants. A qui ven molt, li demana el NIF, la data de naixement i el compte bancari, que ha de comunicar a Hisenda per la directiva DAC7. La baixa és immediata i es fa des dels ajustos.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.milanuncios.com/',
    privacyPolicy: 'https://www.milanuncios.com/legal/politica-privacidad',
    terms: 'https://www.milanuncios.com/legal/condiciones-uso',
    appStore: appStore('967185651'),
  },
  accountRequired: f('partial', 'official', ['milanuncios-privacy-policy'], 'Els anuncis es poden consultar sense compte; cal per publicar, xatejar o fer servir Milanuncios Express.'),
  openSource: f('no', 'editorial', [], noRepo, { licence: 'Privativa' }),
  dataSummary:
    'El que una persona compra i ven a Milanuncios, amb l’adreça, la ubicació precisa i els missatges, dibuixa la seva economia domèstica i els seus moviments. Qui ven sovint hi deixa també el NIF, el compte bancari i els imports cobrats, i els identificadors publicitaris permeten reconèixer-la fora del portal.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['milanuncios-privacy-policy', 'milanuncios-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['milanuncios-privacy-policy', 'milanuncios-app-store'], note: 'Es comparteix en format hash amb LiveRamp i ID5 si s’hi dona consentiment.' }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['milanuncios-privacy-policy', 'milanuncios-app-store'], note: 'Si es posa com a contacte a l’anunci, és visible per a tothom.' }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['milanuncios-privacy-policy', 'milanuncios-app-store'], note: 'Es comparteix amb Correos o SEUR als enviaments de Milanuncios Express.' }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['milanuncios-privacy-policy', 'milanuncios-app-store'], note: 'Amb consentiment, per ordenar els anuncis per distància.' }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'prestacio-del-servei'], sources: ['milanuncios-privacy-policy'], note: 'NIF de venedors que superen els llindars de la DAC7 i DNI als enviaments d’Express.' }),
    row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['milanuncios-privacy-policy'], note: 'Es comunica a l’administració tributària per la DAC7.' }),
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['milanuncios-app-store'], note: 'Fotos dels anuncis, incloses les matrícules dels vehicles.' }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau', 'moderacio-de-continguts'], sources: ['milanuncios-privacy-policy'], note: 'Els missatges es poden revisar amb processos manuals i automàtics.' }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['milanuncios-privacy-policy'], note: 'Pagaments d’Express a través de Mangopay; el compte o la targeta on es cobra es comunica a Hisenda per la DAC7.' }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['milanuncios-privacy-policy'], note: 'Transaccions d’Express i import total cobrat per cada venedor.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['milanuncios-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['milanuncios-app-store'] }),
    row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['milanuncios-privacy-policy'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['milanuncios-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['milanuncios-app-store'] }),
    row('identificador-publicitari', 'optional', { linked: 'yes', tracking: 'yes', shared: 'brokers', purposes: ['publicitat-personalitzada'], sources: ['milanuncios-privacy-policy'], note: 'Compartit amb LiveRamp per crear un identificador publicitari entre dispositius.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'brokers', purposes: ['publicitat-personalitzada'], sources: ['milanuncios-privacy-policy'], note: 'Compartida amb ID5 i LiveRamp si s’hi dona consentiment.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['milanuncios-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['milanuncios-app-store'], labelTracking),
    advertisingIdentifiers: f('yes', 'official', ['milanuncios-privacy-policy', 'milanuncios-app-store'], 'La política esmenta l’identificador de publicitat mòbil que es comparteix amb LiveRamp.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['milanuncios-privacy-policy'], 'ID5 i LiveRamp, a més de proveïdors publicitaris i galetes de tercers.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['milanuncios-privacy-policy'], 'Amb consentiment, el perfil comercial serveix per mostrar publicitat a Milanuncios, a altres webs del grup i a webs de tercers.'),
    profiling: f('yes', 'official', ['milanuncios-privacy-policy'], 'Perfil comercial amb dades de navegació i hàbits d’accés; la política també preveu detectar qui encaixa com a usuari professional per oferir-li plans de pagament.'),
    aiTraining: unknown('La política no diu res de l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['milanuncios-privacy-policy'], 'Anunciants, compradors professionals de vehicles, Correos, SEUR, Mangopay, portals de multipublicació, proveïdors i l’administració tributària.'),
    intraGroupSharing: f('yes', 'official', ['milanuncios-privacy-policy'], 'Altres portals d’Adevinta Motor, com coches.net, i accés d’empreses del grup per a suport.'),
    dataBrokerSales: f('partial', 'official', ['milanuncios-privacy-policy'], `${liveRampDetail} ID5 rep les mateixes dades amb la mateixa finalitat.`),
    internationalTransfers: f('yes', 'official', ['milanuncios-privacy-policy'], 'Proveïdors de fora de l’Espai Econòmic Europeu amb clàusules contractuals tipus.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('La política preveu informes de transparència sobre moderació, però no n’hem trobat cap sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['milanuncios-privacy-policy'], 'Només Milanuncios Express té terminis concrets: sis anys per a les dades de contracte i dotze mesos per a les de navegació.'),
    dataAfterDeletion: f('partial', 'official', ['milanuncios-privacy-policy'], adevintaDeletionRetained),
    periods: [
      { period: 'Sis anys per a les dades identificatives dels enviaments de Milanuncios Express', sources: ['milanuncios-privacy-policy'] },
      { dataType: 'galetes-i-identificadors-web', period: 'Dotze mesos per a les dades de navegació i galetes a Express', sources: ['milanuncios-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['milanuncios-delete-account']),
    selfService: f('yes', 'official', ['milanuncios-delete-account'], 'L’eliminació és immediata des dels ajustos del compte.'),
    directUrl: 'https://ayuda.milanuncios.com/hc/es/articles/12012862940050-Eliminar-una-cuenta',
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Inicia la sessió amb el correu i la contrasenya.',
      'Als ajustos del compte, obre l’opció sobre les teves dades.',
      'Tria «Eliminar cuenta» i, si vols, explica per què te’n vas.',
    ],
    obstacles: 'S’esborren tots els anuncis i es perden els crèdits no gastats.',
    dataRetained: `${adevintaDeletionRetained} Les dades d’Express es conserven sis anys.`,
    sources: ['milanuncios-delete-account', 'milanuncios-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['milanuncios-privacy-policy'], 'La portabilitat es reconeix, però no hem trobat cap eina d’exportació documentada.', { url: 'mailto:privacidad@milanuncios.com' }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['milanuncios-privacy-policy'], 'Delegat de protecció de dades a privacidad@milanuncios.com, accés des del perfil o correu postal.', {
      url: 'mailto:privacidad@milanuncios.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['milanuncios-privacy-policy'], 'El perfil comercial, ID5 i LiveRamp depenen del consentiment, que es pot retirar.'),
    telemetryOptOut: f('partial', 'official', ['milanuncios-privacy-policy'], 'Les estadístiques d’ús es basen en l’interès legítim o en el consentiment, segons la política de galetes.'),
    granularControls: f('partial', 'official', ['milanuncios-privacy-policy'], 'La política separa per consentiment la ubicació, el perfil comercial, les comunicacions de tercers i les alertes. No hem verificat els controls dins de l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem analitzat el bàner de consentiment ni el flux de registre.'),
  },
  security: {
    e2ee: f('no', 'official', ['milanuncios-privacy-policy'], 'Els missatges es poden revisar manualment i automàticament, cosa que exclou el xifratge d’extrem a extrem.', { scope: 'none' }),
    transportEncryption: f('yes', 'editorial', [], 'Comprovació pròpia del web: redirigeix a HTTPS. No hem analitzat el trànsit de l’aplicació.'),
    atRestEncryption: unknown('No hi ha informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos; la verificació telefònica serveix per contactar amb anunciants.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: f('partial', 'official', ['adevinta-vulnerability-disclosure'], 'Hi ha un canal de divulgació responsable a HackerOne, sense recompenses anunciades.'),
    vulnerabilityDisclosure: f('partial', 'official', ['adevinta-vulnerability-disclosure'], 'La política de divulgació responsable d’Adevinta cobreix els seus serveis, però milanuncios.com no publica security.txt.', {
      url: 'https://adevinta.com/security-vulnerability/',
    }),
  },
  alternatives: [
    { app: 'wallapop', comparability: 'equivalent', rationale: 'Compravenda de segona mà entre particulars amb xat i enviaments.' },
    { app: 'vinted', comparability: 'partial', rationale: 'Segona mà centrada en roba i objectes personals.' },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política és de l’octubre del 2024 i preveu comunicar dades a Fotocasa Group, que des del 2025 és de Scout24 i ja no forma part del mateix grup. A l’AEPD, Milanuncios surt en expedients contra anunciants, no com a sancionada.',
    openQuestions: ['Quins controls de privadesa ofereix l’aplicació per retirar el consentiment a LiveRamp i ID5?'],
  },
}

/* ═══════════════════════════ Fotocasa ═══════════════════════════ */
const fotocasa: AppSeed = {
  slug: 'fotocasa',
  name: 'Fotocasa',
  company: 'fotocasa-group',
  categories: ['habitatge'],
  tagline: 'Cerca d’habitatge amb ubicació precisa, xats revisats i identificadors compartits amb LiveRamp',
  summary:
    'Fotocasa declara a l’App Store que fa servir identificadors i dades d’ús per rastrejar entre aplicacions, i la política preveu compartir el correu en hash i l’identificador publicitari amb LiveRamp. Els missatges entre usuaris es revisen amb processos manuals i automàtics. La política no fixa cap termini de conservació concret. Des del 2025 és de l’alemanya Scout24, però la política encara preveu cedir dades a Adevinta Motor.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.fotocasa.es/',
    privacyPolicy: 'https://www.fotocasa.es/es/politica-privacidad/p',
    appStore: appStore('332699841'),
  },
  accountRequired: f('partial', 'official', ['fotocasa-privacy-policy'], 'Es pot cercar sense compte; cal per desar cerques, crear alertes, publicar o xatejar.'),
  openSource: f('no', 'editorial', [], noRepo, { licence: 'Privativa' }),
  dataSummary:
    'Les cerques d’habitatge revelen on vol viure una persona, amb quin pressupost i en quin moment vital: una mudança, una separació, un fill. Amb la ubicació precisa i els contactes amb agències, el conjunt diu molt de la seva situació econòmica i familiar.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['fotocasa-privacy-policy', 'fotocasa-app-store'], note: 'Es comunica a l’anunciant quan el contactes.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['fotocasa-privacy-policy', 'fotocasa-app-store'], note: 'Es comparteix en format hash amb LiveRamp si s’hi dona consentiment.' }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fotocasa-privacy-policy', 'fotocasa-app-store'] }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['fotocasa-privacy-policy'], note: 'L’adreça dels immobles que es publiquen.' }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['fotocasa-privacy-policy', 'fotocasa-app-store'], note: 'Amb consentiment i només amb l’aplicació en primer pla, segons la política.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['fotocasa-app-store', 'fotocasa-privacy-policy'], note: 'Fotos dels anuncis i foto de perfil.' }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau', 'moderacio-de-continguts'], sources: ['fotocasa-privacy-policy'], note: 'Els missatges es revisen amb processos manuals i automàtics.' }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['fotocasa-privacy-policy'], note: 'Informació bancària o de facturació quan es contracten productes de visibilitat.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['fotocasa-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['fotocasa-app-store'] }),
    row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['fotocasa-privacy-policy'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['fotocasa-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'prestacio-del-servei'], sources: ['fotocasa-app-store'], note: 'L’etiqueta el declara vinculat a la identitat per a publicitat de tercers.' }),
    row('identificador-publicitari', 'optional', { linked: 'yes', tracking: 'yes', shared: 'brokers', purposes: ['publicitat-personalitzada'], sources: ['fotocasa-privacy-policy'], note: 'Compartit amb LiveRamp.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['fotocasa-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['fotocasa-app-store'], labelTracking),
    advertisingIdentifiers: f('yes', 'official', ['fotocasa-app-store', 'fotocasa-privacy-policy'], 'L’identificador del dispositiu es declara per a publicitat de tercers i l’identificador publicitari es comparteix amb LiveRamp.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['fotocasa-privacy-policy'], 'LiveRamp i proveïdors de serveis publicitaris.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['fotocasa-privacy-policy'], 'Amb consentiment, el perfil comercial serveix per mostrar publicitat a Fotocasa, a altres webs del grup i a webs de tercers.'),
    profiling: f('yes', 'official', ['fotocasa-privacy-policy'], 'Perfil comercial amb dades de navegació i hàbits d’accés. La política diu que no hi ha decisions automatitzades amb efectes jurídics.'),
    aiTraining: unknown('La política esmenta un xatbot, però no diu si s’entrenen models amb les dades.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['fotocasa-privacy-policy'], 'Anunciants, agències i experts immobiliaris (amb consentiment), portals de tercers, proveïdors i autoritats.'),
    intraGroupSharing: f('yes', 'official', ['fotocasa-privacy-policy'], 'Accés d’empreses del grup per a suport i comunicació de dades a Adevinta Motor, titular de Milanuncios.'),
    dataBrokerSales: f('partial', 'official', ['fotocasa-privacy-policy'], liveRampDetail),
    internationalTransfers: f('yes', 'official', ['fotocasa-privacy-policy'], 'Proveïdors de fora de l’Espai Econòmic Europeu amb clàusules contractuals tipus.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('La política preveu informes de transparència sobre moderació, però no n’hem trobat cap sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['fotocasa-privacy-policy'], 'La política no concreta cap termini: les dades es guarden mentre duri la relació o fins que es retiri el consentiment.'),
    dataAfterDeletion: f('partial', 'official', ['fotocasa-privacy-policy'], adevintaDeletionRetained),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['fotocasa-delete-account']),
    selfService: f('yes', 'official', ['fotocasa-delete-account'], 'La baixa se sol·licita des de «Mi perfil», sense passar per atenció al client.'),
    directUrl: 'https://ayuda.fotocasa.es/hc/es/articles/31569923744285-Dar-de-baja-mi-cuenta',
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Inicia la sessió amb el correu i la contrasenya.',
      'A «Mi perfil», tria «Darme de baja de Fotocasa».',
      'Marca la casella que confirma que perdràs els anuncis, les alertes i els favorits.',
      'Toca «Solicitar la baja del servicio».',
    ],
    dataRetained: adevintaDeletionRetained,
    sources: ['fotocasa-delete-account', 'fotocasa-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['fotocasa-privacy-policy'], 'La portabilitat es reconeix, però no hem trobat cap eina d’exportació documentada.', { url: 'mailto:privacidad@fotocasa.es' }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['fotocasa-privacy-policy'], 'Delegat de protecció de dades a privacidad@fotocasa.es, accés des del perfil o correu postal.', {
      url: 'mailto:privacidad@fotocasa.es',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['fotocasa-privacy-policy'], 'El perfil comercial i LiveRamp depenen del consentiment, que es pot retirar.'),
    telemetryOptOut: f('partial', 'official', ['fotocasa-privacy-policy'], 'Les estadístiques d’ús es basen en l’interès legítim o en el consentiment, segons la política de galetes.'),
    granularControls: f('partial', 'official', ['fotocasa-privacy-policy'], 'La política separa per consentiment la ubicació, el perfil comercial i les comunicacions de tercers. No hem verificat els controls dins de l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem analitzat el bàner de consentiment ni el flux de registre.'),
  },
  security: {
    e2ee: f('no', 'official', ['fotocasa-privacy-policy'], 'Els missatges es revisen manualment i automàticament.', { scope: 'none' }),
    transportEncryption: f('yes', 'editorial', [], 'Comprovació pròpia del web: redirigeix a HTTPS i envia la capçalera HSTS. No hem analitzat el trànsit de l’aplicació.'),
    atRestEncryption: unknown('No hi ha informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: f('partial', 'official', ['fotocasa-security-txt', 'adevinta-vulnerability-disclosure'], 'Canal de divulgació responsable a HackerOne, sense recompenses anunciades.'),
    vulnerabilityDisclosure: f('yes', 'official', ['fotocasa-security-txt'], 'Fitxer security.txt i pàgina pròpia per informar de vulnerabilitats.', {
      url: 'https://www.fotocasa.es/.well-known/security.txt',
    }),
  },
  alternatives: [
    { app: 'idealista', comparability: 'equivalent', rationale: 'L’altre gran portal immobiliari, amb la mateixa funció de cerca i contacte amb anunciants.' },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política és del gener del 2025, anterior a la compra per Scout24, i encara preveu comunicar dades a Adevinta Motor, que ara és d’un altre grup. La pàgina de divulgació responsable encara parla d’«Adevinta Real Estate». Cap expedient de l’AEPD té Fotocasa com a part sancionada.',
    openQuestions: [
      'Scout24 actualitzarà la política i deixarà de cedir dades a Adevinta Motor?',
      'Quant de temps conserva Fotocasa les cerques i els contactes amb anunciants?',
    ],
  },
}

/* ═══════════════════════════ coches.net ═══════════════════════════ */
const cochesNet: AppSeed = {
  slug: 'coches-net',
  name: 'coches.net',
  company: 'adevinta-motor',
  categories: ['compravenda-entre-particulars', 'mobilitat-i-transport'],
  tagline: 'Compravenda de cotxes amb exportació de dades en JSON i xat d’IA que s’esborra en 48 hores',
  summary:
    'coches.net és l’únic portal del lot amb una eina d’exportació documentada: des de l’àrea d’usuari s’obté un fitxer JSON en un termini de 30 dies. L’assistent de cerca Net AI esborra les converses al cap de 48 hores i, segons la política, no s’entrenen models propis amb aquestes converses. En canvi, les dades de contacte arriben a concessionaris, marques i entitats de finançament, i l’App Store declara rastreig entre aplicacions.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.coches.net/',
    privacyPolicy: 'https://www.coches.net/condiciones-de-uso/',
    terms: 'https://www.coches.net/condiciones-de-uso/',
    appStore: appStore('333895109'),
  },
  accountRequired: f('partial', 'official', ['coches-net-privacy-policy'], 'Els anuncis es poden consultar sense compte; cal per publicar, desar favorits o crear alertes.'),
  openSource: f('no', 'editorial', [], noRepo, { licence: 'Privativa' }),
  dataSummary:
    'Qui busca cotxe deixa rastre del pressupost, la zona on viu i, si demana finançament, la seva capacitat de pagament. Qui ven hi posa la matrícula i fotos del vehicle. Aquestes dades arriben a concessionaris i marques, que poden trucar per oferir-te altres cotxes.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['coches-net-privacy-policy', 'coches-net-app-store'], note: 'Es comunica a l’anunciant, al concessionari o a la marca que contactes.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['coches-net-privacy-policy', 'coches-net-app-store'], note: 'Es comparteix en format hash amb LiveRamp si s’hi dona consentiment.' }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['coches-net-privacy-policy', 'coches-net-app-store'] }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['coches-net-privacy-policy'], note: 'El codi postal serveix per passar les dades al concessionari més proper.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['coches-net-app-store', 'coches-net-privacy-policy'], note: 'Fotos dels anuncis, amb la matrícula del vehicle.' }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau', 'moderacio-de-continguts'], sources: ['coches-net-privacy-policy', 'coches-net-app-store'], note: 'Els xats es poden revisar manualment i automàticament. Les converses amb Net AI s’esborren al cap de 48 hores.' }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['coches-net-privacy-policy'], note: 'Facturació i, si es demana finançament, dades que es passen a l’entitat que el concedeix.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['coches-net-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['coches-net-app-store'] }),
    row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['coches-net-privacy-policy'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['coches-net-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['publicitat-personalitzada'], sources: ['coches-net-app-store'] }),
    row('identificador-publicitari', 'optional', { linked: 'yes', tracking: 'yes', shared: 'brokers', purposes: ['publicitat-personalitzada'], sources: ['coches-net-privacy-policy'], note: 'Compartit amb LiveRamp.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['coches-net-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['coches-net-app-store'], labelTracking),
    advertisingIdentifiers: f('yes', 'official', ['coches-net-privacy-policy', 'coches-net-app-store'], 'L’identificador publicitari del mòbil es comparteix amb LiveRamp.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['coches-net-privacy-policy'], 'LiveRamp i galetes publicitàries de tercers, com les d’AppNexus que descriu la política de galetes.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['coches-net-privacy-policy'], 'Amb consentiment, el perfil comercial serveix per mostrar publicitat a coches.net, a altres webs del grup i a webs de tercers.'),
    profiling: f('yes', 'official', ['coches-net-privacy-policy'], 'Perfil comercial amb dades de navegació i hàbits d’accés. La política diu que no hi ha decisions automatitzades amb efectes jurídics.'),
    aiTraining: f('no', 'official', ['coches-net-privacy-policy'], 'La política diu que el contingut de les converses amb el xatbot no s’utilitza per entrenar models d’IA de desenvolupament propi. No diu res dels proveïdors externs del model.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['coches-net-privacy-policy'], 'Anunciants, concessionaris (també el més proper al teu codi postal), marques fabricants i la seva xarxa, entitats de finançament, compradors de «venda ràpida», proveïdors i autoritats.'),
    intraGroupSharing: f('yes', 'official', ['coches-net-privacy-policy'], 'Multipublicació a Milanuncios i accés d’empreses del grup per a suport.'),
    dataBrokerSales: f('partial', 'official', ['coches-net-privacy-policy'], liveRampDetail),
    internationalTransfers: f('yes', 'official', ['coches-net-privacy-policy'], 'Proveïdors de fora de l’Espai Econòmic Europeu amb clàusules contractuals tipus.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('La política preveu informes de transparència sobre moderació, però no n’hem trobat cap sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['coches-net-privacy-policy', 'coches-net-data-retention'], 'Hi ha terminis concrets per al xat d’IA (48 hores), les dades de navegació (12 mesos) i els comptes inactius (tres anys). La resta es conserva mentre duri la relació.'),
    dataAfterDeletion: f('partial', 'official', ['coches-net-data-rights'], adevintaDeletionRetained),
    periods: [
      { dataType: 'contingut-de-missatges', period: '48 hores per a les converses amb l’assistent Net AI', sources: ['coches-net-privacy-policy'] },
      { dataType: 'historial-de-navegacio', period: '12 mesos per a les dades de navegació', sources: ['coches-net-data-retention'] },
      { period: 'El compte es pot eliminar, amb avís previ, després de tres anys sense iniciar sessió', sources: ['coches-net-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['coches-net-data-rights']),
    selfService: f('yes', 'official', ['coches-net-data-rights'], 'La supressió es demana des de l’àrea d’usuari; el procés és el mateix a Android, iPhone i web.'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Entra a l’àrea d’usuari de coches.net.',
      'Si vols conservar les dades, fes servir primer l’opció «Exportar».',
      'Sol·licita la supressió del compte des de la mateixa àrea d’usuari.',
      'Si també tens compte a Milanuncios, cal eliminar-lo a part.',
    ],
    obstacles: 'Esborrar el compte de coches.net no afecta els altres portals del grup, on cal repetir el procés.',
    dataRetained: adevintaDeletionRetained,
    sources: ['coches-net-data-rights'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['coches-net-data-rights'], 'Des de l’àrea d’usuari: en un termini de 30 dies arriba un correu amb un enllaç a un fitxer ZIP amb les dades en JSON.'),
    exportFormatQuality: 'open',
    rightsExercise: f('yes', 'official', ['coches-net-privacy-policy'], 'Delegat de protecció de dades a privacidad@coches.net i drets d’accés, portabilitat i supressió des de l’àrea d’usuari.', {
      url: 'mailto:privacidad@coches.net',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['coches-net-privacy-policy'], 'El perfil comercial i LiveRamp depenen del consentiment, que es pot retirar.'),
    telemetryOptOut: f('partial', 'official', ['coches-net-privacy-policy'], 'Les estadístiques d’ús es basen en l’interès legítim o en el consentiment, segons la política de galetes.'),
    granularControls: f('partial', 'official', ['coches-net-privacy-policy'], 'La política separa per consentiment el perfil comercial, el finançament, les alertes i les comunicacions de tercers. No hem verificat els controls dins de l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem analitzat el bàner de consentiment ni el flux de registre.'),
  },
  security: {
    e2ee: f('no', 'official', ['coches-net-privacy-policy'], 'Els xats es poden revisar manualment i automàticament.', { scope: 'none' }),
    transportEncryption: f('yes', 'editorial', [], 'Comprovació pròpia del web: redirigeix a HTTPS i envia la capçalera HSTS. No hem analitzat el trànsit de l’aplicació.'),
    atRestEncryption: unknown('No hi ha informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: f('partial', 'official', ['coches-net-security-txt', 'adevinta-vulnerability-disclosure'], 'Canal de divulgació responsable a HackerOne, sense recompenses anunciades.'),
    vulnerabilityDisclosure: f('yes', 'official', ['coches-net-security-txt', 'adevinta-vulnerability-disclosure'], 'Fitxer security.txt amb adreça de contacte i política de divulgació responsable.', {
      url: 'https://www.coches.net/.well-known/security.txt',
    }),
  },
  alternatives: [
    { app: 'wallapop', comparability: 'partial', rationale: 'També s’hi venen cotxes entre particulars, amb xat i sense cedir les dades a concessionaris.' },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'És la política més recent del lot (19 de febrer de 2026) i l’única que regula l’ús de l’IA. L’ajuda encara parla del grup «Adevinta Spain». Els expedients de l’AEPD que la citen són contra tercers.',
    openQuestions: ['Quin proveïdor fa funcionar Net AI i quines dades de la conversa rep?'],
  },
}

/* ────────── Fragments compartits per les aplicacions andaluses ────────── */

const labelNoData =
  'L’etiqueta de l’App Store diu que el desenvolupador no recull cap dada, tot i que l’aplicació serveix per consultar informació personal guardada als servidors de la Junta.'

const noAds = 'No hi ha cap finalitat publicitària ni a la política ni a l’etiqueta de l’App Store.'

/* ═══════════════════════════ iPasen ═══════════════════════════ */
const ipasen: AppSeed = {
  slug: 'ipasen',
  name: 'iPasen',
  company: 'consejeria-desarrollo-educativo-andalucia',
  categories: ['educacio', 'administracio-publica'],
  tagline: 'Notes, faltes i missatges de l’alumnat andalús amb una política de privadesa anterior al RGPD',
  summary:
    'iPasen és la finestra mòbil de Séneca, el sistema de gestió escolar de la Junta: famílies i alumnat hi veuen notes, faltes d’assistència i missatges del professorat, i hi signen documents. La política de privadesa es limita a dir que l’aplicació no afegeix dades a les que ja té la Conselleria i remet a drets de l’antiga llei (accés, rectificació, cancel·lació i oposició). L’App Store diu que no recull cap dada.',
  platforms: ['ios', 'android'],
  jurisdiction: 'Espanya (Andalusia); autoritat de control: Consejo de Transparencia y Protección de Datos de Andalucía',
  links: {
    website: 'https://www.juntadeandalucia.es/educacion/portales/web/educacion/ipasen',
    privacyPolicy: 'https://www.juntadeandalucia.es/educacion/portales/web/educacion/ipasen/politica-privacidad',
    appStore: appStore('511127024'),
  },
  accountRequired: f('yes', 'official', ['ipasen-privacy-policy'], 'Només hi poden entrar tutors legals i alumnat matriculat en centres de la Conselleria.'),
  openSource: unknown('No hem trobat cap repositori públic del codi.'),
  dataSummary:
    'iPasen recull la vida escolar d’infants i adolescents: qualificacions, absències, incidències, comunicacions amb el professorat i documents signats. Són dades de menors que acompanyen tota l’escolarització i que el centre i les famílies consulten en temps real.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['ipasen-privacy-policy'], note: 'Dades de l’alumnat i de les famílies que ja són a Séneca.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['ipasen-privacy-policy'] }),
    row('nivell-formatiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['ipasen-app-store'], note: 'Qualificacions i faltes d’assistència; és el tipus més proper del catàleg per al rendiment escolar.' }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['ipasen-app-store'], note: 'Missatgeria amb el tutor o la tutora i sol·licitud de tutories.' }),
    row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['ipasen-app-store'], note: 'Documents adjunts, escàner amb la càmera i safata de signatures, amb signatura manuscrita.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['ipasen-app-store'], 'L’etiqueta de l’App Store no declara cap dada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['ipasen-app-store'], labelNoData),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['ipasen-app-store', 'ipasen-privacy-policy'], noAds),
    profiling: unknown('La política no ho diu.'),
    aiTraining: unknown('La política no ho diu.'),
  },
  sharing: {
    thirdPartySharing: unknown('La política no detalla destinataris; remet a l’inventari d’activitats de tractament de la Junta.'),
    intraGroupSharing: f('yes', 'official', ['ipasen-privacy-policy'], 'Les dades són les de Séneca, compartides entre la Conselleria i els centres educatius.'),
    dataBrokerSales: unknown('La política no ho diu.'),
    internationalTransfers: unknown('La política no ho diu.'),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre l’accés a les dades.'),
  },
  retention: {
    definedPeriods: unknown('La política no indica terminis.'),
    dataAfterDeletion: unknown('La política no ho diu.'),
  },
  accountDeletion: {
    possible: f('partial', 'official', ['ipasen-privacy-policy'], 'Es poden exercir els drets per escrit davant la Conselleria, però les dades formen part de l’expedient escolar que gestiona l’administració.'),
    selfService: unknown('No hem trobat cap opció per eliminar el compte des de l’aplicació.'),
    difficulty: 'unknown',
    steps: [
      'Desinstal·la l’aplicació per deixar de fer-la servir.',
      'Per exercir els drets sobre les dades, escriu a la Consejería de Desarrollo Educativo y Formación Profesional (C/ Juan Antonio de Vizarrón s/n, Edificio Torretriana, 41092 Sevilla) amb la referència «Protección de Datos», o fes servir la sol·licitud en línia de la Junta.',
    ],
    obstacles: 'Les dades escolars no desapareixen en deixar d’usar l’aplicació perquè pertanyen a l’expedient del centre.',
    sources: ['ipasen-privacy-policy'],
  },
  userRights: {
    dataExport: unknown('La política no esmenta la portabilitat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['ipasen-privacy-policy'], 'Sol·licitud en línia amb certificat digital, formulari en PDF o escrit a la Conselleria; reclamació davant el Consejo de Transparencia y Protección de Datos de Andalucía.'),
  },
  controls: {
    adPersonalizationOptOut: na('L’aplicació no mostra publicitat.'),
    telemetryOptOut: unknown('No hem trobat informació sobre analítica d’ús.'),
    granularControls: unknown('No hem verificat els ajustos de l’aplicació.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown('No hem analitzat l’aplicació.'),
  },
  security: {
    e2ee: f('no', 'editorial', [], 'La missatgeria és un canal del centre dins de Séneca, no una comunicació xifrada d’extrem a extrem.', { scope: 'none' }),
    transportEncryption: unknown('No hi ha informació pública específica de l’aplicació.'),
    atRestEncryption: unknown('No hi ha informació pública.'),
    mfa: unknown('No hem trobat informació sobre els mètodes d’accés.'),
    independentAudits: unknown('No consten auditories publicades de l’aplicació.'),
    bugBounty: unknown('No consta cap programa de recompenses.'),
    vulnerabilityDisclosure: f('partial', 'official', ['junta-andalucia-security-txt'], 'El domini de la Junta publica un security.txt que remet a AndalucíaCERT; no és específic de l’aplicació.'),
  },
  review: {
    researchStatus: 'initial',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'La pàgina de la política no responia el 22 de setembre de 2026 (servei en manteniment) i l’hem consultada a l’arxiu d’Internet (còpia del 15 de novembre de 2025). Encara parla de «ficheros declarados» i drets ARCO, terminologia anterior al RGPD.',
    openQuestions: [
      'Per què l’etiqueta de l’App Store diu que no es recull cap dada si l’aplicació tracta notes, faltes i missatges de menors?',
      'Hi ha resolucions del Consejo de Transparencia y Protección de Datos de Andalucía sobre Séneca o iPasen? No hem pogut consultar-ne el cercador.',
    ],
  },
}

/* ═══════════════════════════ Salud Responde ═══════════════════════════ */
const saludResponde: AppSeed = {
  slug: 'salud-responde',
  name: 'Salud Responde',
  company: 'servicio-andaluz-de-salud',
  categories: ['salut-i-assistencia-sanitaria', 'administracio-publica'],
  tagline: 'Cita prèvia d’atenció primària sense actualitzacions des del 2023 i amb l’enllaç de privadesa trencat',
  summary:
    'Salud Responde serveix per demanar i canviar cites d’atenció primària del Servei Andalús de Salut. L’última versió és del gener del 2023 i l’enllaç a la política de privadesa de l’App Store porta a una pàgina que ja no existeix. L’etiqueta declara que no es recull cap dada, tot i que demanar cita implica identificar-se davant el sistema sanitari. Queda coberta per la política general del SAS.',
  platforms: ['ios', 'android'],
  jurisdiction: 'Espanya (Andalusia); autoritat de control: Consejo de Transparencia y Protección de Datos de Andalucía',
  links: {
    privacyPolicy: 'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/politica-de-privacidad',
    appStore: appStore('681103926'),
  },
  accountRequired: unknown('No hem pogut verificar com s’identifica la persona per demanar cita.'),
  openSource: unknown('No hem trobat cap repositori públic del codi.'),
  dataSummary:
    'Les cites mèdiques diuen quan i amb quina freqüència una persona va al metge o a infermeria, i en quin centre. Són dades de salut encara que no incloguin el diagnòstic.',
  dataCollection: [
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['salud-responde-app-store', 'sas-privacy-policy'], note: 'Les cites d’atenció primària i d’infermeria formen part de la història de salut.' }),
    row('contingut-de-missatges', 'optional', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['atencio-a-lusuari'], sources: ['salud-responde-app-store'], note: 'Les versions del 2014 i el 2016 van afegir un xat amb un operador; no sabem si encara funciona.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['sas-privacy-policy'], note: 'La política del SAS preveu tractar identificadors del dispositiu a les aplicacions que tracten informació de salut, i esmenta el servei de notificacions de Salud Responde.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['salud-responde-app-store'], 'L’etiqueta de l’App Store no declara cap dada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['salud-responde-app-store'], labelNoData),
    thirdPartyTrackersPresent: unknown('La política del SAS diu que alguns dels seus sistemes fan servir Google Analytics, sense concretar quins.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['sas-privacy-policy', 'salud-responde-app-store'], noAds),
    profiling: unknown('La política general del SAS no concreta res per a aquesta aplicació.'),
    aiTraining: unknown('La política no ho diu.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['sas-privacy-policy'], 'Només per obligació legal o amb consentiment, a més dels proveïdors que actuen com a encarregats del tractament.'),
    intraGroupSharing: unknown('La política no concreta res per a aquesta aplicació.'),
    dataBrokerSales: f('no', 'official', ['sas-privacy-policy'], 'La política diu que les dades mai no es vendran ni es compartiran amb tercers.'),
    internationalTransfers: unknown('La política no ho diu.'),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['sas-privacy-policy'], 'Les dades de salut segueixen la Llei 41/2002 i la normativa d’arxius; les de les aplicacions es guarden mentre s’utilitzen.'),
    dataAfterDeletion: f('partial', 'official', ['sas-privacy-policy'], 'Les cites queden a la història de salut, que es conserva pels terminis legals.'),
  },
  accountDeletion: {
    possible: na('No hi ha compte propi: l’aplicació identifica la persona com a usuària del sistema sanitari públic.'),
    selfService: na('No hi ha compte que eliminar; les dades de salut formen part de la història clínica.'),
    difficulty: 'unknown',
    steps: [
      'Desinstal·la l’aplicació.',
      'Per exercir drets sobre les dades de salut, fes servir la sol·licitud electrònica del SAS o els formularis de les unitats d’atenció a la ciutadania.',
    ],
    sources: ['sas-privacy-policy'],
  },
  userRights: {
    dataExport: unknown('La política no concreta com es poden obtenir les dades d’aquesta aplicació.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['sas-privacy-policy'], 'Sol·licitud electrònica o presencial; si no hi ha resposta en un mes, delegat de protecció de dades a dpd.sspa@juntadeandalucia.es.', {
      url: 'mailto:dpd.sspa@juntadeandalucia.es',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: na('L’aplicació no mostra publicitat.'),
    telemetryOptOut: unknown('No sabem si aquesta aplicació fa servir Google Analytics.'),
    granularControls: unknown('No hem verificat els ajustos de l’aplicació.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown('No hem analitzat l’aplicació.'),
  },
  security: {
    e2ee: na('L’aplicació gestiona cites; no transporta comunicacions privades entre persones.'),
    transportEncryption: unknown('No hi ha informació pública específica de l’aplicació.'),
    atRestEncryption: unknown('No hi ha informació pública.'),
    mfa: unknown('No hem trobat informació sobre els mètodes d’identificació.'),
    independentAudits: unknown('No consten auditories publicades de l’aplicació.'),
    bugBounty: unknown('No consta cap programa de recompenses.'),
    vulnerabilityDisclosure: f('partial', 'official', ['junta-andalucia-security-txt'], 'El domini de la Junta publica un security.txt que remet a AndalucíaCERT; no és específic de l’aplicació.'),
  },
  alternatives: [
    { app: 'salud-andalucia', comparability: 'equivalent', rationale: 'L’aplicació actual del SAS també gestiona cites, amb una política de privadesa pròpia i actualitzada.' },
  ],
  review: {
    researchStatus: 'initial',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'L’enllaç de privadesa de l’App Store (juntadeandalucia.es/SaludResponde/AppMovil/calidad.html) torna un error 404. Fem servir la política general del SAS, que esmenta el servei de notificacions de Salud Responde però no té un apartat propi per a l’aplicació.',
    openQuestions: [
      'Quines dades demana l’aplicació per identificar la persona abans de donar-li cita?',
      'L’aplicació continua mantinguda o l’ha substituïda Salud Andalucía?',
    ],
  },
}

/* ═══════════════════════ Servicio Andaluz de Empleo ═══════════════════════ */
const sae: AppSeed = {
  slug: 'servicio-andaluz-de-empleo',
  name: 'Servicio Andaluz de Empleo',
  company: 'sae-andalucia',
  categories: ['feina-i-ocupacio', 'administracio-publica'],
  tagline: 'Demanda d’ocupació al mòbil sense perfilat i sense transferències fora de l’Espai Econòmic Europeu',
  summary:
    'L’aplicació del Servei Andalús d’Ocupació permet renovar la demanda d’ocupació, demanar cita, consultar ofertes i enviar el currículum. La política diu expressament que no es fan decisions automatitzades ni perfils i que les dades no surten de l’Espai Econòmic Europeu. És l’única aplicació andalusa del lot que declara dades a l’App Store: dades d’ús i errors vinculats a la identitat.',
  platforms: ['ios', 'android'],
  jurisdiction: 'Espanya (Andalusia); autoritat de control: Consejo de Transparencia y Protección de Datos de Andalucía',
  links: {
    privacyPolicy: 'https://ws054.juntadeandalucia.es/comun/aviso-legal.html',
    appStore: appStore('1470032437'),
  },
  accountRequired: f('yes', 'official', ['sae-app-store'], 'Cal identificar-se amb les credencials (clau i PIN) que facilita el SAE.'),
  openSource: unknown('No hem trobat cap repositori públic del codi.'),
  dataSummary:
    'La demanda d’ocupació diu que una persona està a l’atur o en busca de feina, amb la seva formació, experiència, cites a l’oficina i candidatures. Són dades que poden afectar prestacions i subvencions i que l’administració conserva segons la normativa d’arxius.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['sae-privacy-policy'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sae-app-store'], note: 'Les credencials d’accés estan lligades a la identitat confirmada pel SAE.' }),
    row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sae-app-store'], note: 'Clau i PIN.' }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sae-app-store'], note: 'La signatura de documents per SMS requereix un telèfon.' }),
    row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['sae-privacy-policy', 'sae-app-store'], note: 'Demanda d’ocupació, candidatures i currículum per a la intermediació laboral.' }),
    row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['sae-app-store'], note: 'Currículum enviat a les ofertes i informes de la demanda.' }),
    row('ubicacio-precisa', 'optional', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sae-app-store'], note: 'Geolocalització per trobar l’oficina i els punts d’ocupació més propers.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sae-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sae-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['sae-app-store'], 'L’etiqueta de l’App Store no declara cap dada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['sae-app-store'], 'L’etiqueta només declara dades d’ús i d’errors per al funcionament de l’aplicació.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['sae-privacy-policy', 'sae-app-store'], noAds),
    profiling: f('no', 'official', ['sae-privacy-policy'], 'La política diu que el SAE no recull dades per prendre decisions automatitzades ni per elaborar perfils.'),
    aiTraining: unknown('La política no ho diu.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['sae-privacy-policy'], 'Només per obligació legal (forces de seguretat, jutjats, altres administracions) i als organismes que preveu el registre d’activitats de tractament. Les candidatures arriben a les empreses que publiquen ofertes.'),
    intraGroupSharing: f('partial', 'official', ['sae-privacy-policy'], 'Comunicacions a altres organismes i administracions amb competència, segons el registre d’activitats de tractament.'),
    dataBrokerSales: f('no', 'official', ['sae-privacy-policy'], 'El SAE diu que no facilita dades a terceres parts fora dels supòsits legals.'),
    internationalTransfers: f('no', 'official', ['sae-privacy-policy'], 'El SAE diu que no transmet dades fora de l’Espai Econòmic Europeu; només ho contempla excepcionalment per a proveïdors, amb garanties.', { mechanism: 'none' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre l’accés a les dades.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['sae-privacy-policy'], 'El temps necessari per a la finalitat i, després, els terminis de la normativa d’arxius d’Andalusia, sense xifres concretes.'),
    dataAfterDeletion: f('partial', 'official', ['sae-privacy-policy'], 'Les dades es conserven segons la normativa d’arxiu documental abans de suprimir-les.'),
  },
  accountDeletion: {
    possible: f('partial', 'official', ['sae-privacy-policy'], 'Es pot demanar la supressió, però la demanda d’ocupació és un registre públic que el SAE ha de mantenir.'),
    selfService: unknown('No hem trobat cap opció per eliminar el compte des de l’aplicació.'),
    difficulty: 'unknown',
    steps: [
      'Desinstal·la l’aplicació per deixar de fer-la servir.',
      'Per exercir els drets sobre les dades, segueix el procediment de juntadeandalucia.es/protecciondedatos.html o escriu al delegat de protecció de dades a dpd.sae.ceeta@juntadeandalucia.es.',
    ],
    obstacles: 'Donar-se de baixa de l’aplicació no dona de baixa la demanda d’ocupació ni esborra l’expedient.',
    sources: ['sae-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['sae-privacy-policy'], 'La política reconeix la portabilitat, però no hi ha cap eina d’exportació.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['sae-privacy-policy'], 'Delegat de protecció de dades a dpd.sae.ceeta@juntadeandalucia.es; resposta en un mes, prorrogable dos més.', {
      url: 'mailto:dpd.sae.ceeta@juntadeandalucia.es',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: na('L’aplicació no mostra publicitat.'),
    telemetryOptOut: unknown('No hem trobat cap control sobre les dades d’ús que declara l’etiqueta.'),
    granularControls: unknown('No hem verificat els ajustos de l’aplicació.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown('No hem analitzat l’aplicació.'),
  },
  security: {
    e2ee: na('L’aplicació gestiona tràmits; no transporta comunicacions privades entre persones.'),
    transportEncryption: unknown('No hi ha informació pública específica de l’aplicació.'),
    atRestEncryption: unknown('La política remet a les mesures de l’Esquema Nacional de Seguretat sense detallar el xifratge.'),
    mfa: f('no', 'official', ['sae-app-store'], 'L’accés es fa amb clau i PIN; l’SMS serveix per signar documents, no com a segon factor d’accés.'),
    independentAudits: f('partial', 'official', ['sae-privacy-policy'], 'La política diu que aplica les mesures de l’annex II de l’Esquema Nacional de Seguretat, però no esmenta cap certificació ni auditoria publicada.'),
    bugBounty: unknown('No consta cap programa de recompenses.'),
    vulnerabilityDisclosure: f('partial', 'official', ['junta-andalucia-security-txt'], 'El domini de la Junta publica un security.txt que remet a AndalucíaCERT; no és específic de l’aplicació.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'L’enllaç de privadesa de l’App Store porta a una política general del SAE, no a una d’específica de l’aplicació.',
    openQuestions: [
      'Hi ha resolucions del Consejo de Transparencia y Protección de Datos de Andalucía sobre el SAE? No hem pogut consultar-ne el cercador.',
    ],
  },
}

/* ═══════════════════════════ Salud Andalucía ═══════════════════════════ */
const saludAndalucia: AppSeed = {
  slug: 'salud-andalucia',
  name: 'Salud Andalucía',
  company: 'servicio-andaluz-de-salud',
  categories: ['salut-i-assistencia-sanitaria', 'administracio-publica'],
  tagline: 'Història de salut i targeta sanitària al mòbil, amb una etiqueta que diu que no recull cap dada',
  summary:
    'Salud Andalucía dona accés a la targeta sanitària virtual, cites, medicació, informes, proves i vacunes de la història de salut andalusa, i fins i tot a videotrucades amb professionals. La política del SAS ho detalla i diu que no es venen dades ni es fan perfils, però l’App Store declara que l’aplicació no recull cap dada. Per retirar-se’n, la política diu que n’hi ha prou de desinstal·lar-la; les dades clíniques queden a la història de salut.',
  platforms: ['ios', 'android'],
  jurisdiction: 'Espanya (Andalusia); autoritat de control: Consejo de Transparencia y Protección de Datos de Andalucía',
  links: {
    website: 'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/ciudadania/app-salud-andalucia',
    privacyPolicy: 'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/politica-de-privacidad',
    appStore: appStore('1490126792'),
  },
  accountRequired: f('partial', 'official', ['sas-privacy-policy'], 'La informació pública és oberta; els tràmits i la història de salut requereixen identificar-se amb Cl@ve, certificat digital, codi QR o dades conegudes.'),
  openSource: unknown('No hem trobat cap repositori públic del codi.'),
  dataSummary:
    'L’aplicació dona accés a la història clínica: medicació, informes, resultats de proves, vacunes, baixes laborals i llista d’espera quirúrgica. És la categoria de dades més sensible del RGPD, lligada al número d’usuari del sistema sanitari i al DNI.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sas-privacy-policy'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sas-privacy-policy'], note: 'DNI i número d’usuari del sistema sanitari (NUHSA).' }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sas-privacy-policy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sas-privacy-policy'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sas-privacy-policy'], note: 'Telèfon per a les notificacions. A Android, l’aplicació pot llegir els SMS per capturar els codis d’un sol ús.' }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sas-privacy-policy'], note: 'Cites, medicació, informes, proves, vacunes, incapacitat temporal i llista d’espera quirúrgica.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sas-privacy-policy'], note: 'Imatge de les videotrucades amb professionals; la política diu que no es guarda.' }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sas-privacy-policy'], note: 'Àudio de les videotrucades, que no es guarda.' }),
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sas-privacy-policy'], note: 'Per mostrar els centres propers; la política diu que no es guarda ni al dispositiu ni als servidors.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['sas-privacy-policy'] }),
    row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sas-privacy-policy'], note: 'Sistema operatiu i versió.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sas-privacy-policy'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['salud-andalucia-app-store'], 'L’etiqueta de l’App Store no declara cap dada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['salud-andalucia-app-store', 'sas-privacy-policy'], 'Ni l’etiqueta ni la política esmenten identificadors publicitaris.'),
    thirdPartyTrackersPresent: unknown('La política del SAS diu que alguns dels seus sistemes fan servir Google Analytics, sense concretar quins.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['sas-privacy-policy', 'salud-andalucia-app-store'], noAds),
    profiling: f('no', 'official', ['sas-privacy-policy'], 'La política diu que les decisions automatitzades i els perfils no estan previstos a l’aplicació.'),
    aiTraining: unknown('La política no ho diu.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['sas-privacy-policy'], 'Només per obligació legal o amb consentiment, a més dels proveïdors que actuen com a encarregats del tractament.'),
    intraGroupSharing: f('yes', 'official', ['sas-privacy-policy'], 'Les dades provenen de la història de salut i de la base de dades de persones usuàries del sistema sanitari públic andalús.'),
    dataBrokerSales: f('no', 'official', ['sas-privacy-policy'], 'La política diu que les dades mai no es vendran ni es compartiran amb tercers.'),
    internationalTransfers: unknown('La política no ho diu.'),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['sas-privacy-policy'], 'Les dades de salut segueixen la Llei 41/2002; les que recull l’aplicació s’esborren automàticament si no s’usa durant un any.'),
    dataAfterDeletion: f('partial', 'official', ['sas-privacy-policy'], 'En desinstal·lar l’aplicació o deixar-la d’usar un any, s’esborren les dades recollides per l’aplicació; les de la història de salut es conserven pels terminis legals.'),
    periods: [
      { period: 'Un any sense usar l’aplicació: el SAS n’esborra les dades no subjectes a conservació', sources: ['sas-privacy-policy'] },
      { dataType: 'dades-de-salut', period: 'Terminis de la Llei 41/2002 i de la normativa d’arxius', sources: ['sas-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['sas-privacy-policy'], 'La supressió i l’oposició s’aconsegueixen desinstal·lant l’aplicació; la història de salut no s’esborra.'),
    selfService: f('yes', 'official', ['sas-privacy-policy'], 'La política diu que els drets es poden exercir des de la mateixa aplicació i que desinstal·lar-la equival a la supressió.'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Desinstal·la l’aplicació del dispositiu.',
      'Per a les dades de la història de salut, fes servir la sol·licitud electrònica del SAS o els formularis de rectificació i supressió de les unitats d’atenció a la ciutadania.',
    ],
    obstacles: 'Les dades clíniques no depenen de l’aplicació i es conserven pels terminis legals.',
    dataRetained: 'La història de salut i les dades subjectes als terminis de conservació legals.',
    sources: ['sas-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['sas-privacy-policy'], 'La portabilitat de les dades tècniques de l’aplicació no s’aplica; l’accés als informes i documents clínics es fa des de la mateixa aplicació.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['sas-privacy-policy'], 'Sol·licitud electrònica o presencial; si no hi ha resposta en un mes, delegat de protecció de dades a dpd.sspa@juntadeandalucia.es.', {
      url: 'mailto:dpd.sspa@juntadeandalucia.es',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: na('L’aplicació no mostra publicitat.'),
    telemetryOptOut: unknown('No sabem si l’aplicació fa servir Google Analytics.'),
    granularControls: f('yes', 'official', ['sas-privacy-policy'], 'L’aplicació té una pantalla per veure l’ús de cada permís i concedir-lo o revocar-lo.'),
    defaultPosture: 'protective',
    darkPatterns: unknown('No hem analitzat l’aplicació.'),
  },
  security: {
    e2ee: na('L’aplicació consulta la història de salut; no transporta comunicacions privades entre persones, fora de les videotrucades amb professionals.'),
    transportEncryption: f('yes', 'official', ['sas-privacy-policy'], 'La política de ClicSalud+, que alimenta l’aplicació, indica comunicacions segures per HTTPS.'),
    atRestEncryption: unknown('No hi ha informació pública.'),
    mfa: f('partial', 'official', ['sas-privacy-policy'], 'El mètode d’identificació depèn de la sensibilitat de les dades: dades conegudes, Cl@ve o certificat electrònic. Les dades conegudes no són un segon factor.', {
      methods: ['sms'],
    }),
    independentAudits: unknown('No consten auditories publicades de l’aplicació.'),
    bugBounty: unknown('No consta cap programa de recompenses.'),
    vulnerabilityDisclosure: f('partial', 'official', ['junta-andalucia-security-txt'], 'El domini de la Junta publica un security.txt que remet a AndalucíaCERT; no és específic de l’aplicació.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'La contradicció entre l’etiqueta de l’App Store («no es recullen dades») i la política del SAS, que enumera dades de salut, d’identitat i del dispositiu, és la dada més rellevant de la fitxa. El mètode «sms» reflecteix Cl@ve PIN, que envia codis per SMS.',
    openQuestions: [
      'Hi ha resolucions del Consejo de Transparencia y Protección de Datos de Andalucía sobre ClicSalud+ o Salud Andalucía? No hem pogut consultar-ne el cercador.',
      'L’aplicació fa servir Google Analytics?',
    ],
  },
}

export const lot: SeedLot = {
  companies: [
    {
      slug: 'eqt',
      name: 'EQT',
      legalName: 'EQT AB',
      description: 'Gestora de fons de capital privat sueca. El seu fons EQT X va comprar el 2025 els portals d’Adevinta a Espanya.',
      headquartersCountry: 'Suècia',
      ownership: 'public',
      website: 'https://eqtgroup.com/',
    },
    {
      slug: 'adevinta-jobs',
      name: 'Adevinta Jobs',
      legalName: 'Adevinta Jobs, S.L.U.',
      parent: 'eqt',
      description: 'Societat titular d’InfoJobs. Formava part d’Adevinta fins a la venda del negoci espanyol al fons EQT X.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'C/ Hernani 59, 28020 Madrid',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'subsidiary',
      primaryRevenueModel: 'mixed',
      website: 'https://www.infojobs.net/',
      productDomains: ['infojobs.net'],
      privacyContact: 'privacidad@infojobs.net',
    },
    {
      slug: 'adevinta-motor',
      name: 'Adevinta Motor',
      legalName: 'Adevinta Motor, S.L.U.',
      parent: 'eqt',
      description: 'Societat titular de Milanuncios, coches.net i motos.net. Formava part d’Adevinta fins a la venda del negoci espanyol al fons EQT X.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'C/ Hernani 59, 28020 Madrid',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'subsidiary',
      primaryRevenueModel: 'mixed',
      website: 'https://www.milanuncios.com/',
      productDomains: ['milanuncios.com', 'coches.net', 'motos.net'],
      privacyContact: 'privacidad@milanuncios.com',
    },
    {
      slug: 'scout24',
      name: 'Scout24',
      legalName: 'Scout24 SE',
      description: 'Grup alemany de portals immobiliaris, propietari d’ImmoScout24. El setembre del 2025 va comprar Fotocasa i Habitaclia a EQT.',
      headquartersCountry: 'Alemanya',
      ownership: 'public',
      website: 'https://www.scout24.com/',
      productDomains: ['immobilienscout24.de'],
    },
    {
      slug: 'fotocasa-group',
      name: 'Fotocasa Group',
      legalName: 'Fotocasa Group, S.L.U.',
      parent: 'scout24',
      description: 'Societat titular de Fotocasa i Habitaclia, abans d’Adevinta i des del 2025 de Scout24.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'Calle Rosario Pino 14-16, planta 10, 28020 Madrid',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'subsidiary',
      website: 'https://www.fotocasa.es/',
      productDomains: ['fotocasa.es', 'habitaclia.com'],
      privacyContact: 'privacidad@fotocasa.es',
    },
    {
      slug: 'junta-de-andalucia',
      name: 'Junta de Andalucía',
      description: 'Govern autonòmic d’Andalusia. Les seves conselleries i agències són responsables del tractament de les dades dels serveis públics andalusos.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'Sevilla',
      leadSupervisoryAuthority: 'Consejo de Transparencia y Protección de Datos de Andalucía',
      ownership: 'state',
      website: 'https://www.juntadeandalucia.es/',
      productDomains: ['juntadeandalucia.es'],
    },
    {
      slug: 'consejeria-desarrollo-educativo-andalucia',
      name: 'Consejería de Desarrollo Educativo y Formación Profesional',
      parent: 'junta-de-andalucia',
      description: 'Conselleria d’educació de la Junta de Andalucía, responsable de Séneca i d’iPasen.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'C/ Juan Antonio de Vizarrón s/n, Edificio Torretriana, 41092 Sevilla',
      leadSupervisoryAuthority: 'Consejo de Transparencia y Protección de Datos de Andalucía',
      ownership: 'state',
      website: 'https://www.juntadeandalucia.es/educacion/portales/web/educacion',
    },
    {
      slug: 'servicio-andaluz-de-salud',
      name: 'Servicio Andaluz de Salud',
      parent: 'junta-de-andalucia',
      description: 'Servei públic de salut d’Andalusia, responsable de ClicSalud+, Salud Andalucía i Salud Responde.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'Avenida de la Constitución 18, 41071 Sevilla',
      leadSupervisoryAuthority: 'Consejo de Transparencia y Protección de Datos de Andalucía',
      ownership: 'state',
      website: 'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/',
      productDomains: ['sspa.juntadeandalucia.es'],
      privacyContact: 'dpd.sspa@juntadeandalucia.es',
    },
    {
      slug: 'sae-andalucia',
      name: 'Servicio Andaluz de Empleo',
      parent: 'junta-de-andalucia',
      description: 'Agència d’ocupació de la Junta de Andalucía: registre de demandants, intermediació laboral i formació per a l’ocupació.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'C/ Leonardo da Vinci 19B, 41092 Sevilla',
      leadSupervisoryAuthority: 'Consejo de Transparencia y Protección de Datos de Andalucía',
      ownership: 'state',
      website: 'https://www.juntadeandalucia.es/servicioandaluzdeempleo/',
      privacyContact: 'dpd.sae.ceeta@juntadeandalucia.es',
    },
  ],
  sources: [
    /* Adevinta i propietat */
    s('adevinta-vulnerability-disclosure', 'Reporting a Security Vulnerability', 'https://adevinta.com/security-vulnerability/', 'Adevinta', 'technical-doc', 'primary', {
      summary: 'Política de divulgació responsable d’Adevinta: formulari de HackerOne, compromís de no emprendre accions legals i cap llista pública de vulnerabilitats. No anuncia recompenses.',
    }),

    /* InfoJobs */
    s('infojobs-privacy-policy', 'Política de Privacidad Infojobs', 'https://www.infojobs.net/privacy-policy/extended.xhtml', 'Adevinta Jobs', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2024-09-01',
      summary: 'Política de setembre del 2024: currículum visible per a empreses per interès legítim, perfil comercial amb consentiment, comunicació de dades a Adevinta Motor, comptes inactius eliminables al cap de set anys i clàusules tipus per a transferències.',
    }),
    s('infojobs-app-store', 'InfoJobs - Trabajo y Empleo (App Store)', 'https://apps.apple.com/es/app/id382581206', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors per rastrejar; ubicació, contacte, cerques i ús vinculats; identificador del dispositiu per a publicitat de tercers.',
    }),
    s('infojobs-delete-account', '¿Cómo puedo darme de baja de InfoJobs?', 'https://ayuda.infojobs.net/hc/es/articles/40722361925393', 'Adevinta Jobs', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Passos per tancar el compte al web i a l’aplicació, amb confirmació de contrasenya; l’esborrat triga uns quants dies.',
    }),
    s('infojobs-found-job', 'He encontrado trabajo, ¿me doy de baja?', 'https://ayuda.infojobs.net/hc/es/articles/40722344184337', 'Adevinta Jobs', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Article que desaconsella la baixa i proposa, en canvi, amagar el currículum, eliminar candidatures o desactivar correus.',
    }),
    s('infojobs-profile-visibility', 'Quiero que mi perfil/foto no aparezca en Internet', 'https://ayuda.infojobs.net/hc/es/articles/40722346427025', 'Adevinta Jobs', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Com desactivar el perfil públic, que apareix als cercadors, i avís que la foto pot quedar indexada a Google un temps.',
    }),
    s('infojobs-breach-2025', 'Actualización Importante: Incidente de Seguridad de Datos en InfoJobs', 'https://ayuda.infojobs.net/hc/es/articles/40722364647825', 'Adevinta Jobs', 'support-doc', 'primary', {
      language: 'es',
      publishedAt: '2025-06-04',
      summary: 'Comunicat d’InfoJobs: la setmana del 26 de maig de 2025 va detectar accessos amb credencials robades que van extreure dades de perfils de candidats; va informar les autoritats.',
    }),
    s('infojobs-breach-2025-data', '¿Qué datos se han visto afectados?', 'https://ayuda.infojobs.net/hc/es/articles/40722409065105', 'Adevinta Jobs', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Dades afectades per l’incident del 2025: correu, telèfon, nom, codi postal i ciutat, i potser experiència laboral, número d’identificació i data de naixement. Accessos entre el 24 de març i el 29 de maig de 2025.',
    }),
    s('infojobs-security-measures', '¿Qué medidas de seguridad tiene InfoJobs para prevenir y detectar este tipo de incidentes?', 'https://ayuda.infojobs.net/hc/es/articles/40722376922897', 'Adevinta Jobs', 'support-doc', 'primary', {
      language: 'es',
      summary: 'InfoJobs diu que té vigilància contínua, proves d’intrusió anuals amb hackers ètics, programes de recompenses i monitoratge de la web fosca.',
    }),
    s('infojobs-security-txt', 'security.txt (infojobs.net)', 'https://www.infojobs.net/.well-known/security.txt', 'Adevinta Jobs', 'technical-doc', 'primary', {
      summary: 'Contacte de seguretat (responsibledisclosure+jobs@adevinta.com) i enllaç a la política de divulgació responsable d’Adevinta.',
    }),

    /* Milanuncios */
    s('milanuncios-privacy-policy', 'Milanuncios: Política de privacidad', 'https://www.milanuncios.com/legal/politica-privacidad', 'Adevinta Motor', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2024-10-07',
      summary: 'Política d’octubre del 2024: revisió de xats, perfil comercial amb consentiment, dades a LiveRamp i ID5, comunicació a Hisenda per la DAC7, Correos, SEUR i Mangopay a Milanuncios Express, i terminis de sis anys i dotze mesos per a Express.',
    }),
    s('milanuncios-app-store', 'Milanuncios: Segunda mano (App Store)', 'https://apps.apple.com/es/app/id967185651', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors i dades d’ús per rastrejar; ubicació, contacte, fotos, cerques, identificadors i ús vinculats a la identitat.',
    }),
    s('milanuncios-delete-account', 'Eliminar una cuenta', 'https://ayuda.milanuncios.com/hc/es/articles/12012862940050-Eliminar-una-cuenta', 'Adevinta Motor', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Passos per eliminar el compte des dels ajustos; s’esborren els anuncis i es perden els crèdits.',
    }),

    /* Fotocasa */
    s('fotocasa-privacy-policy', 'Política de Privacidad General (Fotocasa)', 'https://www.fotocasa.es/es/politica-privacidad/p', 'Fotocasa Group', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2025-01-20',
      summary: 'Política del gener del 2025: revisió de missatges, ubicació només en primer pla, perfil comercial amb consentiment, LiveRamp, comunicació a Adevinta Motor i conservació sense terminis concrets.',
    }),
    s('fotocasa-app-store', 'Fotocasa - Casas y pisos (App Store)', 'https://apps.apple.com/es/app/id332699841', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors i dades d’ús per rastrejar; identificador del dispositiu vinculat per a publicitat de tercers; ubicació, contacte, cerques i ús vinculats.',
    }),
    s('fotocasa-delete-account', 'Dar de baja mi cuenta', 'https://ayuda.fotocasa.es/hc/es/articles/31569923744285-Dar-de-baja-mi-cuenta', 'Fotocasa Group', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Passos per sol·licitar la baixa des de «Mi perfil».',
    }),
    s('fotocasa-security-txt', 'security.txt (fotocasa.es)', 'https://www.fotocasa.es/.well-known/security.txt', 'Fotocasa Group', 'technical-doc', 'primary', {
      summary: 'Contacte de seguretat (responsibledisclosure+fotocasa@adevinta.com) i enllaç a la política de divulgació responsable.',
    }),

    /* coches.net */
    s('coches-net-privacy-policy', 'Condiciones de uso y Política de Privacidad General (coches.net)', 'https://www.coches.net/condiciones-de-uso/', 'Adevinta Motor', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-02-19',
      summary: 'Condicions d’ús amb la política de privadesa del 19 de febrer de 2026: dades a concessionaris, marques i finançadores, xat d’IA esborrat en 48 hores i sense entrenar models propis, LiveRamp i eliminació de comptes inactius tres anys.',
    }),
    s('coches-net-app-store', 'Coches.net Coches Segunda Mano (App Store)', 'https://apps.apple.com/es/app/id333895109', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors i dades d’ús per rastrejar; contacte, fotos, cerques, identificadors i ús vinculats a la identitat.',
    }),
    s('coches-net-data-rights', '¿Qué derechos tienes sobre tus datos personales?', 'https://ayuda.coches.net/hc/es/articles/7489620302482', 'Adevinta Motor', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Exportació en JSON des de l’àrea d’usuari en 30 dies, supressió des de la mateixa àrea i bloqueig legal de les dades abans de l’esborrat.',
    }),
    s('coches-net-data-retention', '¿Durante cuánto tiempo conservamos tus datos personales?', 'https://ayuda.coches.net/hc/es/articles/7489576639890', 'Adevinta Motor', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Les dades del compte es guarden mentre existeix i les de navegació, 12 mesos.',
    }),
    s('coches-net-security-txt', 'security.txt (coches.net)', 'https://www.coches.net/.well-known/security.txt', 'Adevinta Motor', 'technical-doc', 'primary', {
      summary: 'Contacte de seguretat (responsibledisclosure+motor@adevinta.com) i enllaç a la política de divulgació responsable d’Adevinta.',
    }),

    /* Junta de Andalucía */
    s('ipasen-privacy-policy', 'iPasen: Política de privacidad', 'https://www.juntadeandalucia.es/educacion/portales/web/educacion/ipasen/politica-privacidad', 'Junta de Andalucía', 'privacy-policy', 'primary', {
      language: 'es',
      archiveUrl: 'https://web.archive.org/web/20251115110134/https://www.juntadeandalucia.es/educacion/portales/web/educacion/ipasen/politica-privacidad',
      summary: 'Condicions i política d’iPasen: l’aplicació no afegeix dades a les dels fitxers de la Conselleria, que en és la titular; drets per escrit i remissió a l’inventari de tractaments de la Junta.',
    }),
    s('ipasen-app-store', 'iPasen (App Store)', 'https://apps.apple.com/es/app/id511127024', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta «no es recullen dades». La descripció i l’historial de versions esmenten notes, faltes, missatgeria, adjunts, escàner i signatura de documents.',
    }),
    s('salud-responde-app-store', 'Salud Responde (App Store)', 'https://apps.apple.com/es/app/id681103926', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta «no es recullen dades». Aplicació per demanar i canviar cites d’atenció primària; última versió del 27 de gener de 2023.',
    }),
    s('sas-privacy-policy', 'Política de privacidad para sus sistemas de información en línea', 'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/politica-de-privacidad', 'Servicio Andaluz de Salud', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política unificada del SAS, amb un apartat propi per a Salud Andalucía: dades tractades, permisos, drets, esborrat automàtic en un any sense ús, Google Analytics en alguns sistemes i cap venda de dades.',
    }),
    s('salud-andalucia-app-store', 'Salud Andalucía (App Store)', 'https://apps.apple.com/es/app/id1490126792', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta «no es recullen dades». Targeta sanitària virtual, tràmits i documentació de la història de salut.',
    }),
    s('sae-privacy-policy', 'Política de Privacidad (Servicio Andaluz de Empleo)', 'https://ws054.juntadeandalucia.es/comun/aviso-legal.html', 'Junta de Andalucía', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política del SAE: interès públic i obligació legal, sense perfils ni decisions automatitzades, sense transferències fora de l’EEE i mesures de l’Esquema Nacional de Seguretat.',
    }),
    s('sae-app-store', 'Servicio Andaluz de Empleo (App Store)', 'https://apps.apple.com/es/app/id1470032437', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta: dades d’ús i d’errors vinculades a la identitat. Accés amb clau i PIN del SAE, geolocalització d’oficines i signatura per SMS.',
    }),
    s('junta-andalucia-security-txt', 'security.txt (juntadeandalucia.es)', 'https://www.juntadeandalucia.es/.well-known/security.txt', 'Junta de Andalucía', 'technical-doc', 'primary', {
      summary: 'Contacte de seguretat de la Junta: atencion.cert@juntadeandalucia.es i AndalucíaCERT.',
    }),
  ],
  apps: [infojobs, milanuncios, fotocasa, cochesNet, ipasen, saludResponde, sae, saludAndalucia],
  incidents: [
    {
      slug: 'infojobs-credencials-robades-2025',
      title: 'Extracció de dades de perfils d’InfoJobs amb credencials robades',
      type: 'breach',
      severity: 'high',
      apps: ['infojobs'],
      company: 'adevinta-jobs',
      occurredAt: '2025-03-24',
      disclosedAt: '2025-06-04',
      description:
        'Entre el 24 de març i el 29 de maig de 2025, uns atacants van fer servir credencials d’usuari robades en altres llocs per entrar a InfoJobs i obtenir «una quantitat significativa» de dades de perfils de candidats: correu, telèfon, nom, codi postal i ciutat, i en alguns casos experiència laboral, número d’identificació i data de naixement. InfoJobs diu que els seus sistemes no es van veure compromesos directament, que va informar les autoritats i que va reforçar la monitorització. Va avisar les persones afectades per correu i va alertar del risc d’estafes amb ofertes de feina falses.',
      affectedPeople: 'Persones candidates avisades per correu; InfoJobs no n’ha publicat la xifra.',
      sources: ['infojobs-breach-2025', 'infojobs-breach-2025-data'],
    },
  ],
  storeIds: {
    infojobs: 'net.infojobs.ijiphone',
    milanuncios: 'com.muba.anuncios',
    fotocasa: 'com.fotocasa.app',
    'coches-net': 'com.cochesnet.app',
    ipasen: 'JA.CED.iPASEN',
    'salud-responde': 'es.juntadeandalucia.saludresponde.citamovil',
    'servicio-andaluz-de-empleo': 'es.juntadeandalucia.sae',
    'salud-andalucia': 'es.juntadeandalucia.msspa.saludandalucia',
  },
}
