import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed, CompanySeed, IncidentSeed, SourceSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 14 de la segona onada: esport, resultats i apostes (DRUNI, LALIGA
 * Fantasy, Federació Catalana de Futbol, FUT.GG, FUTBIN, Playtomic, Winamax,
 * bet365 i BeSoccer).
 *
 * El fil que uneix el lot és el contrast entre dos models. D’una banda, els
 * serveis regulats de joc, que recullen document d’identitat, dades bancàries
 * i patrons de joc perquè la llei els hi obliga i els conserven una dècada.
 * De l’altra, les aplicacions gratuïtes de resultats i de cartes de
 * videojoc, que viuen de la subhasta publicitària en temps real i declaren a
 * l’App Store identificadors i ubicació utilitzats per rastrejar. Enmig hi ha
 * LALIGA, amb un identificador únic que travessa tot el seu ecosistema, i dues
 * entitats —la federació catalana i una cadena de perfumeria— amb documents
 * legals molt per sota del que tracten.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/* ═══════════════════════════ DRUNI ═══════════════════════════ */
const druni: AppSeed = {
  slug: 'druni',
  name: 'DRUNI',
  company: 'druni',
  categories: ['comerc-electronic'],
  tagline:
    'Baixa del compte en quatre passos dins de l’aplicació, amb una política de privadesa que no explica el rastreig que sí que declara a l’App Store',
  summary:
    'DRUNI és una cadena valenciana de perfumeria i parafarmàcia amb botiga en línia. L’aplicació permet eliminar el compte des del menú «Compte», sense passar per atenció al client, i això la situa per damunt de bona part del comerç electrònic espanyol. En canvi, la política de privadesa és un text breu que diu que «les dades no se cediran a tercers llevat d’obligació legal», mentre l’etiqueta de l’App Store declara identificador de dispositiu i dades d’ús i de publicitat utilitzats per rastrejar. El juliol del 2025 el grup de ransomware Akira va publicar l’empresa com a víctima i va dir tenir-ne més de 40 GB de documents.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.druni.es/',
    privacyPolicy: 'https://www.druni.es/politica-privacidad',
    appStore: appStore('1592321069'),
  },
  accountRequired: f('no', 'official', ['druni-privacy-policy'], 'Es pot navegar pel catàleg sense compte; per comprar i per fer el seguiment de comandes cal registrar-s’hi.'),
  openSource: f('no', 'editorial', [], 'Aplicació comercial tancada; no consta cap codi publicat.', { licence: 'Privativa' }),
  dataSummary:
    'Les compres de perfumeria i parafarmàcia poden revelar l’estat de salut i moments vitals: tractaments dermatològics, productes d’higiene íntima, tests d’embaràs o complements alimentaris. L’historial de cerca hi afegeix el que s’ha mirat sense comprar, i l’adreça de lliurament vincula aquestes dades a un domicili.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['druni-app-store', 'druni-privacy-policy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['druni-app-store', 'druni-privacy-policy'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['druni-app-store'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['druni-app-store'], note: 'L’etiqueta la declara com a «adreça física» vinculada a la persona, per a la funcionalitat de l’aplicació.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['druni-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['druni-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['druni-app-store'] }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['druni-app-store'], note: 'Declarada per a la funcionalitat de l’aplicació, presumiblement per localitzar botigues; la política no l’esmenta.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['druni-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'personalitzacio-de-continguts'], sources: ['druni-app-store'], note: 'L’etiqueta hi inclou les «dades de publicitat», utilitzades per rastrejar.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['atencio-a-lusuari'], sources: ['druni-privacy-policy'], note: 'La política explica que l’aplicació demana permís per adjuntar fotos o vídeos en obrir una incidència.' }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['druni-privacy-policy'], note: 'La política de galetes parla de galetes pròpies i de tercers amb finalitats analítiques i de perfil de navegació, però no en publica la llista.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['druni-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['druni-app-store'], 'L’etiqueta declara identificador de dispositiu, interacció amb el producte i dades de publicitat «utilitzats per rastrejar-te».'),
    advertisingIdentifiers: f('yes', 'official', ['druni-app-store']),
    thirdPartyTrackersPresent: f('partial', 'official', ['druni-privacy-policy'], 'La política de galetes reconeix galetes de tercers amb finalitats analítiques i de perfil, però no n’identifica els proveïdors.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['druni-app-store', 'druni-privacy-policy'], 'L’etiqueta declara dades de publicitat per a màrqueting propi i l’avís de galetes parla de publicitat segons els hàbits de navegació.'),
    profiling: f('partial', 'official', ['druni-privacy-policy'], 'La política de galetes esmenta «el teu perfil» i l’anàlisi d’hàbits de navegació, però no descriu cap perfilat de compres ni ofereix cap oposició específica.'),
    aiTraining: unknown('La política no diu res sobre l’ús de dades per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['druni-privacy-policy'], 'La política afirma que «les dades no se cediran a tercers llevat d’obligació legal», cosa difícil de conciliar amb les galetes de tercers i amb el reCAPTCHA de Google que protegeix els formularis.'),
    intraGroupSharing: unknown('No consta cap estructura de grup ni cap compartició interna a la política.'),
    dataBrokerSales: unknown('No hi ha cap referència a la venda de dades.'),
    internationalTransfers: unknown('La política no esmenta transferències internacionals, tot i incrustar serveis de Google i vídeos de YouTube.'),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['druni-privacy-policy'], 'La política només diu que les dades es conserven «mentre es mantingui la vinculació» i després durant els terminis legals de prescripció, sense cap termini concret.'),
    dataAfterDeletion: f('partial', 'official', ['druni-privacy-policy'], 'Es conserven les dades quan hi ha una obligació legal de manteniment o un termini de prescripció d’accions judicials.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['druni-delete-guide', 'druni-privacy-policy']),
    selfService: f('yes', 'official', ['druni-delete-guide'], 'La pàgina oficial descriu quatre passos dins de l’aplicació, sense contactar amb ningú.'),
    directUrl: 'https://www.druni.es/eliminar-cuenta-app',
    difficulty: 'easy',
    steps: [
      'Obre l’aplicació i entra a «Cuenta» des del menú inferior.',
      'Dins de «Cuenta», obre l’apartat «Datos personales».',
      'Tria l’opció «Eliminar cuenta».',
      'Confirma prement el botó «Eliminar cuenta».',
    ],
    dataRetained: 'Dades de facturació i comandes durant els terminis legals de prescripció.',
    sources: ['druni-delete-guide', 'druni-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['druni-privacy-policy'], 'Es reconeix el dret de portabilitat «en determinats supòsits», amb lliurament en format estructurat, però no hi ha cap eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['druni-privacy-policy'], 'Els drets s’exerceixen per escrit adreçat al delegat de protecció de dades, adjuntant fotocòpia del DNI i enviant-ho a una adreça postal de Carlet; la política no dona cap adreça electrònica de protecció de dades.', {
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['druni-privacy-policy'], 'Hi ha un tauler de configuració de galetes al web, però la política no descriu cap control equivalent per als identificadors de l’aplicació més enllà del permís de rastreig d’iOS.'),
    telemetryOptOut: unknown('No consta cap manera de desactivar l’analítica dins de l’aplicació.'),
    granularControls: f('no', 'official', ['druni-privacy-policy'], 'No hi ha cap panell de privadesa per finalitat; només la baixa del butlletí i la configuració de galetes del web.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', [], 'L’avís de galetes ofereix «Acceptar totes» i «Rebutjar» al mateix nivell. El problema és que per exercir drets cal una fotocòpia del DNI i una carta postal, mentre que la baixa del compte es resol amb un botó a l’aplicació.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description:
          'La política assegura que no hi ha cessions a tercers llevat d’obligació legal, mentre l’etiqueta de l’App Store declara dades utilitzades per rastrejar i el web incrusta serveis de Google.',
        sources: ['druni-privacy-policy', 'druni-app-store'],
      },
    ],
  },
  security: {
    e2ee: na('L’aplicació no transporta comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'editorial', [], 'El web i l’aplicació es publiquen exclusivament sobre HTTPS; comprovat en consultar les pàgines legals el setembre del 2026.'),
    atRestEncryption: unknown('No hi ha informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No consta cap opció de verificació en dos passos per al compte.'),
    independentAudits: unknown('No consten auditories de seguretat publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses ni pàgina de seguretat; el fitxer /.well-known/security.txt de druni.es retorna un error 404.'),
    vulnerabilityDisclosure: unknown('No hi ha cap canal públic documentat per notificar vulnerabilitats.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'DRUNI mostra un desajust habitual al comerç espanyol: l’aplicació permet donar-se de baixa fàcilment, però la política de privadesa és breu i antiquada. La política no explica el rastreig que declara l’etiqueta de l’App Store.',
    openQuestions: [
      'Quins proveïdors publicitaris hi ha darrere dels identificadors declarats per rastrejar? La política de galetes no en publica la llista.',
      'Va afectar l’atac d’Akira del juliol del 2025 dades de clients de la botiga en línia? DRUNI no ha publicat cap comunicació al respecte.',
    ],
  },
}

/* ═══════════════════════════ LALIGA Fantasy ═══════════════════════════ */
const laligaFantasy: AppSeed = {
  slug: 'laliga-fantasy',
  name: 'LALIGA Fantasy',
  company: 'laliga-group-international',
  categories: ['esports-i-resultats'],
  tagline:
    'Un identificador únic de LALIGA Ecosistema que segueix la persona per totes les aplicacions de la lliga i dels clubs',
  summary:
    'Per jugar a LALIGA Fantasy cal registrar-se a LALIGA Ecosistema, un inici de sessió únic compartit per les webs i aplicacions de la lliga i dels clubs afiliats. La política és detallada: enumera els identificadors (IDFA, IDFV, ID d’usuari), descriu «perfils exhaustius» amb consentiment i explica que, si et registres amb Facebook, la lliga infereix valors d’«engagement», «social», «promotion» i «fan value» a partir de les teves publicacions i els teus «m’agrada». La baixa és autoservei i esborra el compte de tot l’ecosistema alhora.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Espanya',
  userBase: 'Milions de participants a Espanya i Amèrica Llatina',
  links: {
    website: 'https://fantasy.laliga.com/',
    privacyPolicy: 'https://www.laliga.com/informacion-legal-fantasy',
    appStore: appStore('968915185'),
  },
  accountRequired: f('yes', 'official', ['laliga-fantasy-privacy-policy'], 'Cal registrar-se a LALIGA Ecosistema amb correu electrònic, àlies, regió i país, o bé amb Facebook, Google o Apple.'),
  openSource: f('no', 'editorial', [], 'Producte comercial tancat.', { licence: 'Privativa' }),
  dataSummary:
    'L’equip favorit, la regió i les lligues privades en què participes indiquen d’on ets i amb qui et relaciones. Si et registres amb Facebook, s’hi afegeixen les publicacions del mur, els «m’agrada» i les puntuacions que LALIGA en dedueix. El resultat és un perfil d’afició i d’influència compartit per totes les aplicacions de la lliga i dels clubs.',
  dataCollection: [
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['laliga-fantasy-privacy-policy', 'laliga-fantasy-app-store'], note: 'Amb consentiment es comunica a l’equip favorit i a tercers amb acord amb LALIGA, i als patrocinadors de les lligues patrocinades.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['laliga-fantasy-privacy-policy'], note: 'L’ID únic de LALIGA Ecosistema segueix la persona per totes les aplicacions i webs de la lliga i dels clubs.' }),
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['laliga-fantasy-privacy-policy'], note: 'Opcional a MyAccount; obligatori si es guanya un concurs, amb DNI i adreça postal per lliurar el premi.' }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['laliga-fantasy-app-store', 'laliga-fantasy-privacy-policy'] }),
    row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['elaboracio-de-perfils', 'mesura-i-analisi-dus'], sources: ['laliga-fantasy-privacy-policy'], note: 'Dada opcional de MyAccount, utilitzada per segmentar comunicacions comercials.' }),
    row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['elaboracio-de-perfils', 'mesura-i-analisi-dus'], sources: ['laliga-fantasy-privacy-policy'] }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['laliga-fantasy-privacy-policy'], note: 'Adreça i codi postal opcionals a MyAccount; obligatoris per rebre un premi.' }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['laliga-fantasy-privacy-policy'], note: 'El DNI és una dada opcional de MyAccount i es demana als guanyadors de concursos.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['laliga-fantasy-app-store', 'laliga-fantasy-privacy-policy'], note: 'Fotografia de perfil opcional.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'elaboracio-de-perfils'], sources: ['laliga-fantasy-privacy-policy', 'laliga-fantasy-app-store'], note: 'IDFV per seguir l’activitat dins de l’ecosistema de LALIGA i IDFA per seguir-la entre aplicacions de tercers.' }),
    row('identificador-publicitari', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['laliga-fantasy-privacy-policy'], note: 'L’IDFA requereix el permís de rastreig d’iOS; si es denega, LALIGA fa servir l’IDFV per a la mateixa finalitat de reportes interns.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'elaboracio-de-perfils', 'publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['laliga-fantasy-privacy-policy', 'laliga-fantasy-app-store'], note: 'Telemetria: clics, temps de permanència i interaccions amb cada comunicació rebuda.' }),
    row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada', 'recomanacions-algoritmiques'], sources: ['laliga-fantasy-privacy-policy'], note: 'Amb consentiment: perfils exhaustius, retargeting fora de LALIGA i audiències xifrades compartides dins de cada xarxa social.' }),
    row('xarxa-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['elaboracio-de-perfils'], sources: ['laliga-fantasy-privacy-policy'], note: 'Amb el registre per Facebook: «m’agrada» de pàgines i publicacions del mur, dels quals LALIGA infereix valors d’engagement, social, promotion i fan value.' }),
    row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['elaboracio-de-perfils'], sources: ['laliga-fantasy-privacy-policy'], note: 'Publicacions públiques i privades del mur de Facebook, si s’autoritza en el registre social.' }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['laliga-fantasy-app-store'], note: 'Les compres dins del joc les tramiten Apple i Google; LALIGA no tracta les dades de pagament.' }),
    row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['laliga-fantasy-privacy-policy'], note: 'Model de dispositiu i sistema operatiu.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['laliga-fantasy-privacy-policy', 'laliga-fantasy-app-store'], 'La política descriu l’IDFA com l’identificador «que permet identificar el teu dispositiu per poder seguir la teva activitat entre aplicacions de LALIGA Ecosistema i terceres aplicacions», i l’etiqueta declara ID d’usuari, ID de dispositiu i dades de publicitat utilitzats per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['laliga-fantasy-privacy-policy']),
    thirdPartyTrackersPresent: f('yes', 'official', ['laliga-fantasy-privacy-policy'], 'Xarxes de publicitat programàtica amb consentiment, Salesforce per al correu i els SMS i Pushologies per a les notificacions.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['laliga-fantasy-privacy-policy'], 'Publicitat programàtica i comunicacions comercials personalitzades, totes dues amb consentiment i revocables des del Centre de Preferències de Publicitat Programàtica del perfil.', {
      optOutUrl: 'https://www.laliga.com/informacion-legal-fantasy',
    }),
    profiling: f('yes', 'official', ['laliga-fantasy-privacy-policy'], 'Tres nivells: segmentacions senzilles per interès legítim, perfils exhaustius amb consentiment i «valoració d’usuaris» per identificar qui té més propensió a contractar productes de LALIGA.'),
    aiTraining: unknown('La política no esmenta l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['laliga-fantasy-privacy-policy'], 'Amb consentiment, les dades van als patrocinadors de les lligues patrocinades, a l’equip favorit i a la llista d’entitats i clubs amb acord amb LALIGA.'),
    intraGroupSharing: f('yes', 'official', ['laliga-fantasy-privacy-policy'], 'LALIGA Ecosistema comparteix el perfil amb els clubs afiliats dels quals siguis usuari registrat, per tenir un mateix perfil a tot l’entorn.'),
    dataBrokerSales: unknown('No consta la venda de dades a intermediaris; sí la comunicació a tercers amb consentiment.'),
    internationalTransfers: f('yes', 'official', ['laliga-fantasy-privacy-policy'], 'Salesforce EMEA als Estats Units sota el Data Privacy Framework, Pushologies a l’Illa de Man i verificació de correu amb Neverbounce als Estats Units amb clàusules contractuals tipus.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('LALIGA publica informació de transparència institucional i econòmica, però no cap informe sobre peticions de dades d’autoritats.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['laliga-fantasy-privacy-policy'], 'La política desglossa la conservació per finalitat, però totes remeten al mateix criteri: mentre persisteixi la finalitat i, després, el termini de prescripció d’accions legals, sense xifres.'),
    dataAfterDeletion: f('partial', 'official', ['laliga-fantasy-privacy-policy'], 'Un cop acabat el termini, les dades queden «degudament bloquejades» per atendre possibles responsabilitats abans de suprimir-se.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['laliga-fantasy-privacy-policy']),
    selfService: f('yes', 'official', ['laliga-fantasy-privacy-policy'], 'La política indica que a les aplicacions d’Android i iOS es pot donar de baixa i eliminar el compte directament des de la secció «Perfil», apartat «Gestió de consentiments».'),
    difficulty: 'easy',
    steps: [
      'Obre l’aplicació i ves a la secció «Perfil».',
      'Entra a l’apartat «Gestió de consentiments».',
      'Tria l’opció de donar-te de baixa i eliminar el compte.',
      'Si et vas registrar amb una xarxa social, revoca a més el servei «LALIGA Ecosistema» des dels serveis connectats del teu perfil de Google, Facebook o Apple.',
      'Com a alternativa, escriu a derechos@laliga.es exercint el dret de supressió.',
    ],
    obstacles:
      'La supressió afecta tot LALIGA Ecosistema alhora: esborrar el compte de Fantasy vol dir perdre també l’accés als altres actius de la lliga i dels clubs que hi estiguin connectats.',
    dataRetained: 'Dades bloquejades durant el termini de prescripció d’accions legals.',
    sources: ['laliga-fantasy-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['laliga-fantasy-privacy-policy'], 'El dret de portabilitat es reconeix «si el Joc ho permet», una condició que la política no aclareix, i no hi ha cap eina d’exportació.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['laliga-fantasy-privacy-policy'], 'Adreça específica de drets i delegat de protecció de dades propi.', {
      url: 'mailto:derechos@laliga.es',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['laliga-fantasy-privacy-policy'], 'Centre de Preferències de Publicitat Programàtica dins del perfil del joc i Centre de Subscripcions al menú, tots dos amb revocació immediata.'),
    telemetryOptOut: f('partial', 'official', ['laliga-fantasy-privacy-policy'], 'Els reportes interns i la seguretat es basen en interès legítim: no hi ha cap interruptor i cal exercir el dret d’oposició per correu electrònic. Denegar el permís de rastreig d’iOS només fa que LALIGA canviï l’IDFA per l’IDFV.'),
    granularControls: f('yes', 'official', ['laliga-fantasy-privacy-policy'], 'Centre de notificacions, centre de subscripcions, centre de preferències de publicitat programàtica i MyAccount per a les dades declarades.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', [], 'Els consentiments són granulars i revocables, però quan la persona denega el permís de rastreig d’Apple, LALIGA substitueix l’IDFA per l’IDFV emparant-se en l’interès legítim, i la decisió presa al sistema operatiu queda sense efecte pràctic dins de l’ecosistema.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description:
          'La política diu que, si no es dona permís per a l’IDFA, LALIGA «podrà dur a terme aquesta finalitat utilitzant l’IDFV del dispositiu». Per tant, la negativa al rastreig no atura el seguiment dins de l’ecosistema.',
        sources: ['laliga-fantasy-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: na('El joc no transporta comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'editorial', [], 'Els actius de LALIGA es publiquen exclusivament sobre HTTPS; comprovat el setembre del 2026.'),
    atRestEncryption: unknown('No hi ha informació pública sobre el xifratge en repòs.'),
    mfa: f('partial', 'official', ['laliga-fantasy-privacy-policy'], 'El registre inclou un codi de verificació per correu electrònic per validar el compte, però la política no descriu cap segon factor per als inicis de sessió posteriors.', {
      methods: ['email'],
    }),
    independentAudits: unknown('No consten auditories de seguretat publicades.'),
    bugBounty: f('no', 'official', ['laliga-cvd'], 'La política de reporte de vulnerabilitats no ofereix cap recompensa: només el compromís de no emprendre accions legals contra qui la compleixi.'),
    vulnerabilityDisclosure: f('yes', 'official', ['laliga-cvd'], 'Política pública de divulgació coordinada per a totes les aplicacions web i mòbils de LALIGA, amb canal a cvd@laliga.es i possibilitat de notificar també a l’INCIBE-CERT.', {
      url: 'https://www.laliga.com/informacion-legal-reporte-vulnerabilidades',
    }),
  },
  alternatives: [
    {
      app: 'flashscore',
      comparability: 'complementary',
      rationale: 'Si el que es busca és seguir els partits i els resultats sense entrar a l’ecosistema d’identificació única de LALIGA, un marcador en directe funciona sense compte.',
      tradeOffs: 'No hi ha joc de fantasia ni lligues amb amics, que és el que LALIGA fa servir per construir el perfil.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política de LALIGA Fantasy és tècnicament bona: diu els noms dels identificadors, dels proveïdors i dels països. El que destaca és l’abast del tractament: un sol identificador reuneix l’activitat a la lliga, als clubs i als patrocinadors, i el registre social converteix el mur de Facebook en puntuacions de valor d’aficionat.',
    openQuestions: [
      'Quines xarxes de publicitat programàtica concretes hi participen? La política remet a un enllaç extern que no reprodueix la llista dins del document.',
      'Quin és el proveïdor tercer que estructura la informació obtinguda de Facebook i Google?',
    ],
  },
}

/* ═══════════════════════════ Federació Catalana de Futbol ═══════════════════════════ */
const fcf: AppSeed = {
  slug: 'federacio-catalana-de-futbol',
  name: 'Federació Catalana de Futbol',
  company: 'federacio-catalana-de-futbol',
  categories: ['esports-i-resultats'],
  tagline:
    'Una federació que tracta dades de salut i de menors amb un text legal que encara parla de «fitxers automatitzats» i de la desapareguda agpd.es',
  summary:
    'L’aplicació de la Federació Catalana de Futbol dona resultats i classificacions i integra el Portal del Federat. El document legal reconeix que es tracten categories especials de dades (de salut, biomètriques i altres) i que hi pot haver transferències internacionals a països sense decisió d’adequació ni garanties adequades, que la persona federada «assumeix i consent» en signar la sol·licitud de llicència. La redacció és antiga: parla de fitxers automatitzats, remet a l’adreça agpd.es i reprodueix un text de Google Analytics anterior al RGPD.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Catalunya',
  userBase: 'Més de 200.000 persones federades a Catalunya',
  links: {
    website: 'https://www.fcf.cat/',
    privacyPolicy: 'https://www.fcf.cat/pdf/app-avis-legal',
    appStore: appStore('6738349239'),
  },
  accountRequired: f('no', 'official', ['fcf-legal'], 'Els resultats i les classificacions són d’accés lliure; el Portal del Federat i altres serveis demanen emplenar el formulari corresponent.'),
  openSource: f('no', 'editorial', [], 'Aplicació institucional tancada.', { licence: 'Privativa' }),
  dataSummary:
    'La llicència federativa inclou el nom, la data de naixement, el club, la categoria i l’aptitud mèdica. Com que una part important de les persones federades són menors d’edat, aquestes dades indiquen on juga cada infant, quin dia i amb quin equip.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['fcf-legal', 'fcf-app-store'], note: 'Dades identificatives dels federats i usuaris dels serveis de la federació.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['fcf-legal', 'fcf-app-store'], note: 'La finalitat declarada inclou l’enviament de comunicacions comercials sobre productes, serveis i esdeveniments de la federació.' }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fcf-legal'], note: 'La política declara «adreces postals i electròniques» entre les categories tractades.' }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'prestacio-del-servei'], sources: ['fcf-legal'], note: 'El document afirma explícitament que es tracten categories especials de dades, incloent-hi dades relatives a la salut i dades biomètriques.' }),
    row('dades-biometriques', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['fcf-legal'], note: 'Incloses a la llista de categories especials que la federació declara tractar, sense concretar-ne l’ús.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['fcf-app-store'], note: 'L’etiqueta declara fotos o vídeos vinculats a la persona per a la funcionalitat de l’aplicació.' }),
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['fcf-app-store'], note: 'Declarada com a no vinculada a la persona; el document legal no l’esmenta.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['fcf-app-store', 'fcf-legal'], note: 'L’etiqueta declara dades de publicitat utilitzades per rastrejar; la política de galetes reconeix galetes de publicitat i d’analítica (AT Internet, Google Analytics).' }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['fcf-legal'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'prestacio-del-servei'], sources: ['fcf-legal'], note: 'Implícita a la llicència federativa i al consentiment «del pare o tutor legal» que preveu la informació bàsica.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['fcf-app-store'], 'L’etiqueta declara dades de publicitat utilitzades per rastrejar, malgrat que el document legal no esmenta cap publicitat a l’aplicació.'),
    advertisingIdentifiers: f('partial', 'official', ['fcf-app-store', 'fcf-legal'], 'L’etiqueta declara dades de publicitat; el document legal només parla de galetes de publicitat al web.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['fcf-legal'], 'AT Internet per a l’analítica i Google Analytics, amb un text que descriu el servei en termes anteriors al RGPD.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['fcf-legal', 'fcf-app-store'], 'La política de galetes admet galetes de publicitat per mostrar «la publicitat més adequada a cada moment»; l’etiqueta declara dades de publicitat per rastrejar.'),
    profiling: unknown('El document legal no descriu cap elaboració de perfils.'),
    aiTraining: unknown('No s’hi esmenta cap ús per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['fcf-legal'], 'La informació bàsica diu que no se cediran dades excepte obligació legal, però la informació completa amplia els destinataris a «tots aquells que hagin de ser-ho» com a conseqüència de l’activitat federativa.'),
    intraGroupSharing: unknown('No es descriu cap estructura de grup.'),
    dataBrokerSales: unknown('No hi ha cap referència a la venda de dades.'),
    internationalTransfers: f('yes', 'official', ['fcf-legal'], 'El document preveu transferències a països sense decisió d’adequació ni garanties adequades de l’article 46, per participar en competicions internacionals; els riscos els «assumeixen i consenten» les persones interessades en signar la sol·licitud de llicència.', {
      mechanism: 'derogation',
    }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No consta cap informe de transparència sobre peticions de dades.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['fcf-legal'], 'Cinc anys, o fins que les dades deixin de ser necessàries per a la finalitat per la qual es van recollir.'),
    dataAfterDeletion: unknown('El document no diu què es conserva després d’una supressió.'),
    periods: [
      { period: '5 anys des de la recollida, o fins que deixin de ser necessàries', sources: ['fcf-legal'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['fcf-legal'], 'Es reconeix el dret de supressió, però no hi ha cap procediment de baixa del compte descrit ni al document legal ni a l’aplicació.'),
    selfService: unknown('No hem trobat cap opció d’eliminació del compte dins de l’aplicació ni cap pàgina d’ajuda que l’expliqui.'),
    difficulty: 'unknown',
    requiresSupportContact: true,
    steps: [
      'Escriu a legal@fcf.cat indicant nom, cognoms, usuari i correu electrònic de registre, i adjunta-hi una fotocòpia del DNI.',
      'Com a alternativa, envia la sol·licitud signada per correu postal a C/ Sicília 93-97, 1r pis, 08013 Barcelona.',
      'Si no obtens resposta, reclama davant de l’Autoritat Catalana de Protecció de Dades o de l’Agència Espanyola de Protecció de Dades.',
    ],
    obstacles:
      'L’exercici de drets exigeix escrit signat i fotocòpia del DNI, un requisit que el RGPD no imposa i que complica el tràmit.',
    sources: ['fcf-legal'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['fcf-legal'], 'La portabilitat es reconeix, però no hi ha cap eina d’exportació.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['fcf-legal'], 'Adreça del delegat de protecció de dades a legal@fcf.cat, amb requisit de fotocòpia del DNI. El document remet encara a www.agpd.es, un domini que ja no és el de l’autoritat espanyola.', {
      url: 'mailto:legal@fcf.cat',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('no', 'official', ['fcf-legal'], 'L’únic mecanisme que proposa el document és configurar el navegador o instal·lar el complement d’exclusió de Google Analytics; no hi ha cap tauler de consentiment descrit.'),
    telemetryOptOut: f('no', 'official', ['fcf-legal'], 'No es descriu cap manera de desactivar l’analítica dins de l’aplicació.'),
    granularControls: f('no', 'official', ['fcf-legal'], 'L’aplicació permet configurar notificacions per equip, però no hi ha cap control de privadesa per finalitat.'),
    defaultPosture: 'permissive',
    darkPatterns: f('yes', 'editorial', ['fcf-legal'], 'El consentiment a transferències internacionals sense garanties s’obté agrupat amb la signatura de la llicència federativa, de manera que qui vol jugar no té cap alternativa pràctica a acceptar-lo.'),
    darkPatternList: [
      {
        type: 'unbalanced-consent',
        severity: 'high',
        description:
          'La transferència de dades a països sense nivell de protecció equiparable es dona per consentida en signar la sol·licitud de llicència, sense una casella separada ni una alternativa per a qui no hi participi.',
        sources: ['fcf-legal'],
      },
      {
        type: 'confusing-language',
        severity: 'medium',
        description:
          'La informació bàsica assegura que «no se cediran dades a tercers, excepte obligació legal» mentre la informació completa obre els destinataris a tothom que hi hagi d’accedir per l’activitat federativa.',
        sources: ['fcf-legal'],
      },
    ],
  },
  security: {
    e2ee: na('L’aplicació no transporta comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'editorial', [], 'Els llocs de la federació es publiquen sobre HTTPS; comprovat el setembre del 2026.'),
    atRestEncryption: unknown('No hi ha informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No consta cap segon factor per al Portal del Federat.'),
    independentAudits: unknown('No consten auditories publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses ni canal de seguretat.'),
    vulnerabilityDisclosure: unknown('No hi ha cap política pública de divulgació de vulnerabilitats.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El document legal de l’aplicació combina un avís legal, una política de privadesa i una política de galetes que semblen de generacions normatives diferents. La clàusula que dona per consentides les transferències internacionals sense garanties amb la signatura de la llicència hauria de revisar-la l’autoritat catalana.',
    openQuestions: [
      'Com s’articula el consentiment de mares, pares i tutors per als milers de federats menors d’edat?',
      'Quines dades biomètriques i de salut tracta realment la federació, i amb quina base jurídica de l’article 9 del RGPD?',
      'Hi ha alguna manera d’eliminar el compte del Portal del Federat sense escriure a legal@fcf.cat?',
    ],
  },
}

/* ═══════════════════════════ FUT.GG ═══════════════════════════ */
const futGg: AppSeed = {
  slug: 'fut-gg',
  name: 'FUT.GG',
  company: 'stormstrike',
  categories: ['esports-i-resultats'],
  tagline:
    'Base de dades de cartes d’EA FC finançada amb subhastes publicitàries en temps real i sense representant a la UE',
  summary:
    'FUT.GG és una de les grans bases de dades de preus i d’evolucions d’EA Sports FC. La seva política, signada per Stormstrike Inc. des de Las Vegas, explica com es finança: publicitat programàtica dins de l’aplicació, amb identificadors compartits amb plataformes de compra i de venda que competeixen en temps real, i socis que fan seguiment entre dispositius i fingerprinting quan no hi ha ni galetes ni identificador publicitari. Reconeix el RGPD, però no designa cap representant a la Unió Europea.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Estats Units',
  links: {
    website: 'https://www.fut.gg/',
    privacyPolicy: 'https://www.fut.gg/privacy/',
    appStore: appStore('6470957382'),
  },
  accountRequired: f('no', 'official', ['futgg-privacy-policy'], 'Consultar preus i cartes no demana compte; el compte, opcional, es crea amb correu electrònic o amb Google, Apple, Discord o Twitch.'),
  openSource: f('no', 'editorial', [], 'Servei comercial tancat.', { licence: 'Privativa' }),
  dataSummary:
    'Les consultes de cartes mostren què busca cada persona, quin equip munta i quant s’hi vol gastar. Lligades a l’identificador publicitari i a la ubicació aproximada, permeten a la subhasta publicitària identificar un públic jove, que juga sovint i que tendeix a comprar dins del joc.',
  dataCollection: [
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['futgg-privacy-policy'], note: 'Només si es crea compte; també arriba des del proveïdor OAuth escollit.' }),
    row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['futgg-app-store', 'futgg-privacy-policy'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['futgg-app-store', 'futgg-privacy-policy'], note: 'Identificadors propis de l’aplicació i identificadors publicitaris (IDFA i GAID).' }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['futgg-privacy-policy'], note: 'Compartits amb serveis de mediació, plataformes de venda i de compra i licitadors que competeixen en temps real.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['futgg-app-store', 'futgg-privacy-policy'], note: 'Derivada de l’adreça IP; l’etiqueta la declara utilitzada per rastrejar.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['futgg-privacy-policy'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['futgg-app-store', 'futgg-privacy-policy'], note: 'Pàgines visitades, temps de permanència i dades de publicitat, declarades com a utilitzades per rastrejar.' }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['futgg-app-store', 'futgg-privacy-policy'], note: 'Subscripcions premium tramitades per Apple o Google; FUT.GG no guarda el número de targeta.' }),
    row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['futgg-privacy-policy'], note: 'Els continguts publicats poden quedar accessibles fins i tot després d’eliminar el compte; la política diu que només es dissociaran «quan sigui raonable».' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['futgg-privacy-policy'], note: 'La notificació de recollida per a Califòrnia declara «inferències, com ara informació sobre els teus interessos, preferències i favorits».' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['futgg-app-store', 'futgg-privacy-policy'], note: 'Les dades de rendiment consten entre les utilitzades per rastrejar.' }),
    row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['futgg-privacy-policy'], note: 'Tipus de dispositiu, sistema operatiu, navegador i versions; els socis poden fer fingerprinting amb aquests senyals passius.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['futgg-privacy-policy', 'futgg-app-store'], 'La política reconeix que els socis publicitaris fan seguiment entre dispositius i identificació passiva per empremta digital quan no hi ha galetes ni identificadors disponibles.'),
    advertisingIdentifiers: f('yes', 'official', ['futgg-privacy-policy']),
    thirdPartyTrackersPresent: f('yes', 'official', ['futgg-privacy-policy'], 'Serveis publicitaris de Google (AdSense, Ad Manager, AdMob) i Raptive (CMI Marketing), més els SDK d’anàlisi i de notificació d’errors integrats a l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['futgg-privacy-policy'], 'Els serveis «es monetitzen principalment amb publicitat»; la subhasta programàtica dins de l’aplicació és el model.'),
    profiling: f('yes', 'official', ['futgg-privacy-policy'], 'S’hi declaren inferències sobre interessos i preferències, i la compartició amb socis publicitaris que la llei californiana considera «venda».'),
    aiTraining: unknown('La política no esmenta l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['futgg-privacy-policy'], 'Xarxes i plataformes publicitàries, analítica, registre d’errors, allotjament i passarel·les de pagament, a més de patrocinadors dels sortejos.'),
    intraGroupSharing: f('partial', 'official', ['futgg-privacy-policy'], 'Es preveu la compartició amb matrius, filials i afiliades, però no se n’identifica cap.'),
    dataBrokerSales: f('partial', 'official', ['futgg-privacy-policy'], 'La política admet que la compartició amb socis publicitaris «pot constituir una venda o cessió» segons la llei de Califòrnia, i es respecta el senyal Global Privacy Control només on la llei ho exigeix.'),
    internationalTransfers: f('yes', 'official', ['futgg-privacy-policy'], 'El responsable és una societat dels Estats Units; per a les transferències des de l’EEE es diu que s’apliquen clàusules contractuals tipus o altres mecanismes.', {
      mechanism: 'sccs',
    }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['futgg-privacy-policy'], 'Criteri general de «mentre calgui», amb una única xifra concreta: set anys per als registres financers.'),
    dataAfterDeletion: f('yes', 'official', ['futgg-privacy-policy'], 'Els continguts publicats poden romandre visibles després d’eliminar el compte, i la política adverteix que els cercadors en poden conservar còpies.'),
    periods: [
      { period: '7 anys per als registres financers', sources: ['futgg-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['futgg-privacy-policy']),
    selfService: unknown('La política parla de «sol·licitar» l’eliminació, però no documenta cap botó dins de l’aplicació; no hem pogut verificar-ne l’existència.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Escriu a privacy@stormstrike.gg demanant l’eliminació del compte i de les dades associades.',
      'Indica el correu electrònic i el nom d’usuari amb què et vas registrar.',
      'Tingues present que els comentaris i continguts publicats poden continuar sent visibles.',
    ],
    dataRetained: 'Contingut públic publicat i registres financers durant set anys.',
    obstacles:
      'L’eliminació comporta perdre els elements associats al compte (punts, insígnies, títols), cosa que la política adverteix expressament.',
    sources: ['futgg-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['futgg-privacy-policy'], 'Es reconeix la portabilitat, «per exemple com a fitxer CSV», però només per a dades facilitades directament i sense eina d’autoservei.'),
    exportFormatQuality: 'open',
    rightsExercise: f('partial', 'official', ['futgg-privacy-policy'], 'Els drets s’exerceixen escrivint a privacy@stormstrike.gg. La política no designa cap representant a la Unió Europea en el sentit de l’article 27 del RGPD i remet a «la teva autoritat local».', {
      url: 'mailto:privacy@stormstrike.gg',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['futgg-privacy-policy'], 'Hi ha una plataforma de consentiment conforme al TCF d’IAB Europe i opcions dins de l’aplicació, però la política remet sobretot als programes d’autoregulació i a reiniciar l’identificador publicitari del dispositiu.'),
    telemetryOptOut: unknown('No es descriu cap manera de desactivar l’analítica ni la notificació d’errors.'),
    granularControls: f('partial', 'official', ['futgg-privacy-policy'], 'Els ajustos de privadesa i de consentiment dins de l’aplicació permeten veure la llista de socis publicitaris i modificar-ne les preferències.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', [], 'No s’hi han detectat patrons agressius, però la política admet el fingerprinting com a alternativa quan la persona bloqueja els identificadors, cosa que permet continuar identificant-la malgrat aquesta decisió.'),
    darkPatternList: [
      {
        type: 'other',
        severity: 'medium',
        description:
          'Els socis publicitaris poden identificar el dispositiu amb senyals passius del navegador i del terminal «especialment quan les galetes o els identificadors publicitaris no estan disponibles».',
        sources: ['futgg-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'editorial', [], 'El lloc i l’API es publiquen sobre HTTPS; comprovat el setembre del 2026.'),
    atRestEncryption: unknown('No hi ha informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No consta cap segon factor; l’inici de sessió delegat a Google, Apple, Discord o Twitch n’hereta el que tinguin configurat.'),
    independentAudits: unknown('No consten auditories publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: f('partial', 'official', ['futgg-privacy-policy'], 'No hi ha una política de divulgació pròpia; l’únic canal documentat és l’adreça de privadesa, i la política es compromet a notificar les bretxes a les persones i als reguladors quan la llei ho exigeixi.'),
  },
  alternatives: [
    {
      app: 'futbin',
      comparability: 'equivalent',
      rationale: 'Cobreix la mateixa necessitat (preus, cartes i evolucions d’EA FC) i, a diferència de FUT.GG, el responsable és una societat europea amb delegat de protecció de dades designat.',
      tradeOffs: 'A diferència de FUT.GG, FUTBIN declara a l’App Store la ubicació exacta com a dada utilitzada per rastrejar.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política explica amb detall la cadena publicitària, incloent-hi el fingerprinting. El principal buit és que el responsable, establert als Estats Units, tracta dades de persones de la Unió sense haver-hi designat cap representant.',
    openQuestions: [
      'Hi ha una opció d’eliminació del compte dins de l’aplicació, o cal escriure sempre a l’adreça de privadesa?',
      'Quins són els socis concrets de la subhasta programàtica? La llista només és accessible des dels ajustos de l’aplicació.',
    ],
  },
}

/* ═══════════════════════════ FUTBIN ═══════════════════════════ */
const futbin: AppSeed = {
  slug: 'futbin',
  name: 'FUTBIN',
  company: 'better-collective',
  categories: ['esports-i-resultats'],
  tagline:
    'Correu electrònic convertit en identificador xifrat i enviat a LiveRamp, amb ubicació exacta declarada per rastrejar',
  summary:
    'FUTBIN, propietat del grup danès Better Collective, és la base de dades de cartes d’EA FC més veterana. La política del juny del 2026 explica que el correu electrònic o altres identificadors de compte es converteixen en un identificador xifrat i es comparteixen amb socis de resolució d’identitat com LiveRamp per creuar el perfil amb campanyes publicitàries. L’etiqueta de l’App Store declara, a més, la ubicació exacta entre les dades utilitzades per rastrejar, cosa que la política no esmenta. Aquest ús es pot desactivar amb un interruptor als ajustos del compte, i els comptes inactius s’esborren als dotze mesos.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Dinamarca',
  links: {
    website: 'https://www.futbin.com/',
    privacyPolicy: 'https://www.futbin.com/privacy',
    appStore: appStore('1080465358'),
  },
  accountRequired: f('no', 'official', ['futbin-privacy-policy'], 'La consulta de preus i cartes no demana compte; el compte desbloqueja fòrums, perfil i subscripcions sense publicitat.'),
  openSource: f('no', 'editorial', [], 'Servei comercial tancat.', { licence: 'Privativa' }),
  dataSummary:
    'El correu electrònic xifrat, els segments d’audiència i la ubicació permeten incorporar les consultes sobre cartes de futbol a un gràfic d’identitat publicitari, que les associa amb el mateix perfil en altres webs i aplicacions.',
  dataCollection: [
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['futbin-privacy-policy'], note: 'Convertida en identificador xifrat i compartida amb socis de resolució d’identitat com LiveRamp; la política precisa que no es lliura en text pla.' }),
    row('contrasenya', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['futbin-privacy-policy'] }),
    row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['futbin-app-store', 'futbin-privacy-policy'] }),
    row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal', 'prestacio-del-servei'], sources: ['futbin-privacy-policy'], note: 'Serveix per comprovar l’edat mínima i quines comunicacions es poden enviar.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['futbin-app-store', 'futbin-privacy-policy'] }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['futbin-app-store'], note: 'L’etiqueta de l’App Store la declara utilitzada per rastrejar i vinculada a la persona; la política escrita només parla de «ubicació aproximada».' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus', 'compliment-legal'], sources: ['futbin-app-store', 'futbin-privacy-policy'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['futbin-privacy-policy'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['futbin-app-store', 'futbin-privacy-policy'], note: 'Pàgines vistes, clics, impressions i clics d’anunci, marques de temps i esdeveniments d’analítica.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada', 'recomanacions-algoritmiques'], sources: ['futbin-privacy-policy'], note: 'Segments d’audiència creats a la plataforma de dades de clients a partir de preferències, activitat i interessos inferits.' }),
    row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['futbin-privacy-policy'], note: 'Fòrums, comentaris i la secció «about me» del perfil.' }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['futbin-privacy-policy'], note: 'Subscripcions, punts, codis de joc i botigues associades; el número complet de targeta no arriba a FUTBIN.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte', 'mesura-i-analisi-dus'], sources: ['futbin-app-store'], note: 'Les dades de rendiment consten entre les utilitzades per rastrejar; les d’errors, no vinculades.' }),
    row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['futbin-privacy-policy'], note: 'Tipus i versió de navegador i sistema operatiu, país, esdeveniments d’autenticació i registres de seguretat.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['futbin-app-store', 'futbin-privacy-policy'], 'L’etiqueta declara ubicació exacta i aproximada, ID d’usuari, ID de dispositiu i dades de rendiment utilitzats per rastrejar; la política ho lliga a la resolució d’identitat entre webs, aplicacions i entorns programàtics.'),
    advertisingIdentifiers: f('yes', 'official', ['futbin-privacy-policy']),
    thirdPartyTrackersPresent: f('yes', 'official', ['futbin-privacy-policy'], 'LiveRamp, Livewire Group, Google Ad Manager i plataformes de dades de clients i de gestió de dades.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['futbin-privacy-policy'], 'Publicitat personalitzada i programàtica amb base jurídica de consentiment i interruptor als ajustos del compte.', {
      optOutUrl: 'https://www.futbin.com/privacy',
    }),
    profiling: f('yes', 'official', ['futbin-privacy-policy'], 'Segments d’audiència elaborats amb l’activitat combinada de les propietats del grup, utilitzats per a publicitat directa i programàtica.'),
    aiTraining: unknown('La política no esmenta l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['futbin-privacy-policy'], 'Socis publicitaris i de resolució d’identitat, proveïdors d’analítica i de comunicacions, botigues associades i autoritats públiques quan la llei ho exigeix.'),
    intraGroupSharing: f('yes', 'official', ['futbin-privacy-policy'], 'Amb els membres del grup empresarial de Better Collective, sota acords de tractament.'),
    dataBrokerSales: f('partial', 'official', ['futbin-privacy-policy'], 'La política no parla de venda, però comparteix identificadors xifrats amb LiveRamp i amb plataformes de dades, i a la pràctica això alimenta un gràfic d’identitat publicitari de tercers.'),
    internationalTransfers: f('yes', 'official', ['futbin-privacy-policy'], 'Transferències fora de l’EEE amb decisions d’adequació o clàusules contractuals tipus.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['futbin-privacy-policy'], 'Les dades personals dels comptes inactius s’esborren automàticament als dotze mesos; la resta, per finalitat.'),
    dataAfterDeletion: f('partial', 'official', ['futbin-privacy-policy'], 'Es poden conservar dades d’identificació electrònica per interès legítim: millora del producte, prevenció d’abusos i defensa de drets.'),
    periods: [
      { period: '12 mesos d’inactivitat abans de la supressió automàtica', sources: ['futbin-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['futbin-privacy-policy']),
    selfService: f('yes', 'official', ['futbin-privacy-policy'], 'La política indica que es pot sol·licitar l’eliminació del compte «mitjançant l’opció disponible als ajustos del compte».'),
    difficulty: 'easy',
    steps: [
      'Inicia sessió a FUTBIN i obre els ajustos del compte («Account Settings»).',
      'Fes servir l’opció d’eliminació del compte que hi ha en aquesta pantalla.',
      'Si vols aturar abans la compartició publicitària, desactiva-hi també l’opció de publicitat personalitzada i perfilat d’audiències.',
    ],
    dataRetained: 'Dades d’identificació electrònica conservades per interès legítim i registres exigits per llei.',
    sources: ['futbin-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['futbin-privacy-policy'], 'Es reconeix la portabilitat en format estructurat i llegible per màquina, però no hi ha cap eina d’autoservei descrita.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['futbin-privacy-policy'], 'Delegat de protecció de dades extern (Bech-Bruun, Copenhaguen) amb canal de missatges xifrats, i autoritat de control de referència a Dinamarca.'),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['futbin-privacy-policy'], 'Interruptor als ajustos del compte: en desactivar-lo, FUTBIN deixa de fer servir el perfil per segmentar anuncis i de compartir l’identificador xifrat amb els socis publicitaris.'),
    telemetryOptOut: f('partial', 'official', ['futbin-privacy-policy'], 'El centre de preferències de galetes cobreix l’analítica del web; per a l’aplicació la política no descriu un control equivalent.'),
    granularControls: f('yes', 'official', ['futbin-privacy-policy'], 'Ajustos del compte, enllaços de baixa a cada comunicació i centre de preferències de galetes.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['futbin-app-store', 'futbin-privacy-policy'], 'Els controls són clars, però la política parla d’«ubicació aproximada» i l’etiqueta de l’App Store declara ubicació exacta utilitzada per rastrejar.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description:
          'La política només esmenta la ubicació aproximada derivada de l’adreça IP, mentre l’etiqueta de l’App Store declara ubicació exacta vinculada a la persona i utilitzada per rastrejar.',
        sources: ['futbin-privacy-policy', 'futbin-app-store'],
      },
    ],
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'editorial', [], 'El lloc es publica sobre HTTPS; comprovat el setembre del 2026.'),
    atRestEncryption: unknown('No hi ha informació pública sobre el xifratge en repòs.'),
    mfa: unknown('La política parla de registres d’autenticació però no documenta cap segon factor.'),
    independentAudits: unknown('No consten auditories publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses del grup aplicable a FUTBIN.'),
    vulnerabilityDisclosure: f('partial', 'official', ['futbin-privacy-policy'], 'No hi ha una política de divulgació pròpia; el delegat de protecció de dades ofereix un canal de missatges xifrats per a comunicacions sensibles.'),
  },
  alternatives: [
    {
      app: 'fut-gg',
      comparability: 'equivalent',
      rationale: 'Mateixa funció de base de dades de cartes i preus, i la seva política no declara ubicació exacta.',
      tradeOffs: 'El responsable és una societat dels Estats Units sense representant designat a la Unió Europea.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'FUTBIN té una política ben escrita, un delegat de protecció de dades designat i un interruptor efectiu per aturar la compartició publicitària, cosa poc habitual. Queda per aclarir la contradicció amb l’etiqueta de l’App Store sobre la ubicació exacta.',
    openQuestions: [
      'Per què l’etiqueta de l’App Store declara ubicació exacta si la política només parla d’ubicació aproximada?',
      'L’interruptor dels ajustos del compte atura també la compartició des de l’aplicació mòbil, o només des del web?',
    ],
  },
}

/* ═══════════════════════════ Playtomic ═══════════════════════════ */
const playtomic: AppSeed = {
  slug: 'playtomic',
  name: 'Playtomic',
  company: 'playtomic',
  categories: ['esports-i-resultats'],
  tagline: 'Deu anys de conservació des de l’últim accés, agenda de contactes opcional i baixa en quatre tocs',
  summary:
    'Playtomic reserva pistes de pàdel i organitza partides obertes. La política, redactada com una taula d’activitats de tractament, fixa un termini concret i llarg: deu anys des de l’últim accés per a la major part de les dades del compte. L’aplicació pot sincronitzar la llista de contactes del telèfon per trobar-hi amistats, i el nom, els cognoms i les estadístiques queden visibles per a la resta de participants a les partides públiques. L’eliminació del compte és autoservei, en quatre tocs, i és irreversible.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Espanya',
  userBase: 'Present a una vintena de països, amb milions de reserves anuals',
  links: {
    website: 'https://playtomic.io/',
    privacyPolicy: 'https://playtomic.io/privacy-policy',
    appStore: appStore('1242321076'),
  },
  accountRequired: f('yes', 'official', ['playtomic-privacy-policy'], 'Cal compte per reservar pista, apuntar-se a partides i accedir al xat; es pot crear amb correu, Google o Facebook.'),
  openSource: f('no', 'editorial', [], 'Servei comercial tancat.', { licence: 'Privativa' }),
  dataSummary:
    'Les reserves mostren amb qui jugues, a quina hora i en quin club cada setmana, i per tant els teus hàbits i les teves relacions. L’avaluació de la condició física i el nivell de joc són dades properes a la salut, i la sincronització de l’agenda hi afegeix persones que no hi han donat cap consentiment.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['playtomic-privacy-policy', 'playtomic-app-store'], note: 'A les partides públiques, el nom, els cognoms i les estadístiques són visibles per a la resta de participants.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['playtomic-privacy-policy', 'playtomic-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['playtomic-privacy-policy', 'playtomic-app-store'], note: 'A les activitats públiques, el telèfon de qui organitza es comparteix amb les persones inscrites.' }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['playtomic-privacy-policy', 'playtomic-app-store'], note: 'Playtomic «recull, transmet, sincronitza i emmagatzema» correus, telèfons i identificadors de l’agenda; el permís es pot revocar des del sistema operatiu.' }),
    row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['playtomic-privacy-policy'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['playtomic-privacy-policy', 'playtomic-app-store'], note: 'Imatge de perfil i continguts compartits a la part social de l’aplicació.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['playtomic-privacy-policy', 'playtomic-app-store'], note: 'La taula de tractaments inclou explícitament «Credit Card information».' }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts', 'mesura-i-analisi-dus'], sources: ['playtomic-app-store'], note: 'L’etiqueta la declara vinculada a la persona per a analítica, personalització i funcionalitat.' }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['playtomic-privacy-policy'], note: 'La taula inclou una «fitness evaluation» i el nivell de joc; no es tracta d’una dada clínica, però descriu la condició física de la persona.' }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['playtomic-privacy-policy'], note: 'Xat de grup de cada partida i xat privat entre jugadors; els gestors del club hi poden accedir «per motius organitzatius».' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['playtomic-app-store', 'playtomic-privacy-policy'], note: 'Les dades de publicitat consten a l’etiqueta com a utilitzades per rastrejar, encara que no vinculades a la persona.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['playtomic-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['playtomic-privacy-policy'] }),
    row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['playtomic-privacy-policy'], note: 'Comentaris, «m’agrada» i etiquetes de la plataforma social, conservats fins que la persona demana la supressió del compte.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['playtomic-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['playtomic-app-store'], 'L’etiqueta declara dades de publicitat utilitzades per rastrejar; és l’únic apartat de rastreig i no és vinculat a la persona.'),
    advertisingIdentifiers: f('partial', 'official', ['playtomic-app-store', 'playtomic-privacy-policy'], 'L’etiqueta declara dades de publicitat; la política parla de transferència de dades a xarxes socials per enviar comunicacions comercials en nom de Playtomic.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['playtomic-privacy-policy'], 'La política identifica Facebook i Instagram, i reconeix la corresponsabilitat amb Facebook Ireland per a les estadístiques de la pàgina.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['playtomic-privacy-policy'], 'Transferència de nom, correu i dades de comportament a xarxes socials per enviar comunicacions comercials o publicitàries en nom de Playtomic, amb base de consentiment.'),
    profiling: f('partial', 'official', ['playtomic-privacy-policy'], 'S’hi declara l’anàlisi del comportament dels usuaris amb consentiment, i la política afirma que no hi ha decisions automatitzades.'),
    aiTraining: unknown('La política no esmenta l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['playtomic-privacy-policy'], 'Gestors dels clubs on es reserva, proveïdors d’allotjament i de programari, i xarxes socials.'),
    intraGroupSharing: f('yes', 'official', ['playtomic-privacy-policy'], 'Amb filials i empreses afiliades, com ara PrenotaUnCampo.'),
    dataBrokerSales: unknown('No consta la venda de dades.'),
    internationalTransfers: f('partial', 'official', ['playtomic-privacy-policy'], 'La política adverteix que alguns encarregats poden transferir dades a servidors fora de la UE i que, «en donar el consentiment al tractament, també consents la transferència». No identifica els països ni el mecanisme de garantia.', {
      mechanism: 'unknown',
    }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['playtomic-privacy-policy'], 'La taula fixa terminis explícits: deu anys des de l’últim accés per a la major part del compte, fins a la retirada del consentiment per a les finalitats que s’hi basen.'),
    dataAfterDeletion: unknown('La política no detalla què es conserva després d’eliminar el compte.'),
    periods: [
      { period: '10 anys des de l’últim accés (compte, reserves, partides i pagaments)', sources: ['playtomic-privacy-policy'] },
      { period: 'Fins a la retirada del consentiment (rànquing, agenda, màrqueting)', sources: ['playtomic-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['playtomic-delete-guide', 'playtomic-privacy-policy']),
    selfService: f('yes', 'official', ['playtomic-delete-guide'], 'Opció «Borrar mi cuenta y mis datos» dins dels ajustos de l’aplicació, sense passar per atenció al client.'),
    directUrl: 'https://playerhelp.playtomic.com/hc/es/articles/19832128764305',
    difficulty: 'easy',
    steps: [
      'Obre l’aplicació de Playtomic i ves a la pàgina del teu perfil.',
      'Toca les tres barres horitzontals de l’angle superior dret.',
      'Tria «Ajustes» al menú que apareix.',
      'Prem «Borrar mi cuenta y mis datos» i confirma amb «Continuar».',
    ],
    obstacles:
      'L’acció és irreversible: s’esborren el compte, les dades personals, els resultats i el nivell de joc acumulat, que és el que costa més de reconstruir.',
    sources: ['playtomic-delete-guide', 'playtomic-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['playtomic-privacy-policy'], 'El dret de portabilitat es reconeix i el dret d’accés preveu lliurar una còpia en format electrònic d’ús comú, però no hi ha eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['playtomic-privacy-policy'], 'Adreça de privadesa i delegat de protecció de dades designat.', {
      url: 'mailto:dpo@playtomic.io',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['playtomic-privacy-policy'], 'Les finalitats de màrqueting es basen en consentiment revocable, però la política no descriu cap panell dins de l’aplicació per gestionar-les.'),
    telemetryOptOut: f('no', 'official', ['playtomic-privacy-policy'], 'El manteniment i la seguretat dels serveis informàtics es basen en interès legítim i obligació legal, sense opció de desactivació.'),
    granularControls: f('partial', 'official', ['playtomic-privacy-policy', 'playtomic-delete-guide'], 'Es poden revocar permisos del sistema operatiu (agenda), modificar les dades personals des del perfil i donar-se de baixa de les comunicacions.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['playtomic-privacy-policy'], 'En acceptar la sincronització de l’agenda, la persona «confirma tenir l’autorització dels seus amics per compartir-ne les dades». La responsabilitat recau en l’usuari i els contactes no hi intervenen.'),
    darkPatternList: [
      {
        type: 'unbalanced-consent',
        severity: 'medium',
        description:
          'La sincronització de l’agenda es legitima amb una declaració de l’usuari segons la qual té permís dels seus contactes, tot i que aquests no participen en cap moment de la decisió.',
        sources: ['playtomic-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: unknown('La política no descriu cap xifratge d’extrem a extrem per als xats de partida ni per als xats privats entre jugadors.'),
    transportEncryption: f('yes', 'editorial', [], 'El web i l’API es publiquen sobre HTTPS; comprovat el setembre del 2026.'),
    atRestEncryption: unknown('No hi ha informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No consta cap segon factor per al compte.'),
    independentAudits: unknown('No consten auditories publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hi ha cap política pública de divulgació de vulnerabilitats.'),
  },
  alternatives: [
    {
      app: 'sporttia',
      comparability: 'partial',
      rationale: 'Cobreix la reserva d’instal·lacions esportives, sovint municipals, sense la capa social ni la sincronització de l’agenda.',
      tradeOffs: 'No té la xarxa de clubs privats de pàdel ni el sistema de partides obertes i de nivell.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política de Playtomic dona terminis numèrics per a cada tractament. La baixa és senzilla (quatre tocs, sense escriure a suport), però les dades de qui no la fa es conserven deu anys des de l’últim accés.',
    openQuestions: [
      'A quins països es transfereixen les dades i amb quines garanties? La política no ho concreta.',
      'Quant temps queden accessibles per als gestors dels clubs els xats de les partides ja jugades?',
    ],
  },
}

/* ═══════════════════════════ Winamax ═══════════════════════════ */
const winamax: AppSeed = {
  slug: 'winamax',
  name: 'Winamax',
  company: 'winamax',
  categories: ['apostes'],
  tagline:
    'Etiqueta de l’App Store que només declara interacció amb el producte, i una política que recull DNI, dades bancàries i patrons de joc durant deu anys',
  summary:
    'Winamax és un operador francès de pòquer i apostes amb llicència de la Direcció General d’Ordenació del Joc. La seva política descriu amb detall el que la llei espanyola del joc obliga a recollir: document d’identitat, residència fiscal, dades bancàries, geolocalització del dispositiu i categories especials de dades relatives a una possible addicció, si consta al Registre General d’Interdiccions. Tot plegat es conserva sis anys després de tancar el compte, deu si aplica la normativa de blanqueig i tres més bloquejat. L’etiqueta de l’App Store, en canvi, només declara interacció amb el producte i errors, molt menys del que descriu la política.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'França',
  userBase: 'Operador amb llicència de la DGOJ a Espanya',
  links: {
    website: 'https://www.winamax.es/',
    privacyPolicy: 'https://www.winamax.es/terminos-y-condiciones_politica-de-privacidad',
    appStore: appStore('385720307'),
  },
  accountRequired: f('yes', 'official', ['winamax-privacy-policy'], 'El joc amb diners reals exigeix registre, verificació d’identitat i comprovació al Registre General d’Interdiccions d’Accés al Joc.'),
  openSource: f('no', 'editorial', [], 'Programari de joc tancat i certificat.', { licence: 'Privativa' }),
  dataSummary:
    'Un compte de joc en línia inclou la identitat oficial, la solvència, el patró horari de connexió i les quantitats jugades, guanyades i perdudes. La normativa de joc segur hi afegeix una classificació de la persona com a jugadora jove, intensiva o vulnerable, que és una inferència sobre el seu comportament i la seva salut.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['winamax-privacy-policy'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['winamax-privacy-policy'], note: 'DNI, NIE o passaport, i també permís de conduir o targeta de la seguretat social per a la verificació.' }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['winamax-privacy-policy'] }),
    row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal', 'mesura-i-analisi-dus'], sources: ['winamax-privacy-policy'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'publicitat-personalitzada'], sources: ['winamax-privacy-policy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['winamax-privacy-policy'], note: 'Es verifica amb un proveïdor tercer abans de l’activació del compte.' }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['winamax-privacy-policy'] }),
    row('origen-etnic-o-nacionalitat', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['winamax-privacy-policy'], note: 'Nacionalitat i país de residència, exigits per la normativa de joc; no hi ha cap tractament d’origen ètnic.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['winamax-privacy-policy'], note: 'Dades bancàries i mètodes de pagament, comunicades a entitats financeres i agències d’informació creditícia.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['winamax-privacy-policy'], note: 'Quantitats jugades, premis, pèrdues i retirades: el patró de joc és la dada central del servei.' }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['winamax-privacy-policy'], note: 'La política les classifica com a categories especials: dades relacionades amb una possible addicció al joc si la persona figura al Registre General d’Interdiccions o s’ha autoprohibit.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['winamax-privacy-policy'], note: 'La política adverteix que, si no es permet conèixer la localització, no es pot prestar el servei.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['winamax-privacy-policy'] }),
    row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['winamax-privacy-policy'] }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari', 'compliment-legal'], sources: ['winamax-privacy-policy'], note: 'Les trucades del servei d’atenció i de lluita contra el joc excessiu es poden gravar amb l’aprovació de la persona.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'millora-del-producte', 'publicitat-personalitzada'], sources: ['winamax-app-store', 'winamax-privacy-policy'], note: 'És l’única dada que l’etiqueta de l’App Store declara utilitzada per rastrejar.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['winamax-privacy-policy'], note: 'Perfils de màrqueting elaborats per interès legítim a partir del patró de joc, les hores de connexió i l’edat.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['winamax-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('partial', 'official', ['winamax-app-store'], 'L’etiqueta declara només la interacció amb el producte com a dada utilitzada per rastrejar; no hi consten identificadors publicitaris.'),
    advertisingIdentifiers: unknown('L’etiqueta no declara identificadors i la política no esmenta cap identificador publicitari del dispositiu.'),
    thirdPartyTrackersPresent: f('partial', 'official', ['winamax-privacy-policy'], 'La política remet a una política de galetes pròpia i esmenta proveïdors financers, tecnològics i de suport, però no publica cap llista de rastrejadors.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['winamax-privacy-policy'], 'Comunicacions comercials i promocions basades en perfils elaborats amb el patró de joc, amb interès legítim per als usuaris registrats.'),
    profiling: f('yes', 'official', ['winamax-privacy-policy'], 'Perfils de màrqueting i, per obligació legal, classificació com a participant jove, de joc intensiu, vulnerable o de grup de risc.'),
    aiTraining: unknown('La política no esmenta l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['winamax-privacy-policy'], 'Reguladors i autoritats, entitats financeres, agències de verificació d’identitat i d’informació creditícia, empreses de cobrament i, amb consentiment, tercers amb finalitats de màrqueting.'),
    intraGroupSharing: f('yes', 'official', ['winamax-privacy-policy'], 'Amb treballadors d’altres societats del grup i amb els seus agents.'),
    dataBrokerSales: unknown('No consta la venda de dades; sí la cessió a tercers amb consentiment per a màrqueting.'),
    internationalTransfers: f('partial', 'official', ['winamax-privacy-policy'], 'La política afirma que les dades es tracten i s’emmagatzemen dins de la Unió Europea i que, excepcionalment, algunes podrien sortir-ne amb mesures contractuals i tècniques, sense concretar quines ni cap a on.', {
      mechanism: 'sccs',
    }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No consta cap informe de transparència sobre peticions d’autoritats, tot i que la política reconeix comunicacions obligatòries a reguladors.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['winamax-privacy-policy', 'winamax-faq-account'], 'Sis anys des del tancament del compte, deu en total per a les dades subjectes a la normativa de blanqueig i tres anys addicionals amb les dades bloquejades.'),
    dataAfterDeletion: f('yes', 'official', ['winamax-privacy-policy'], 'Tancar el compte no esborra res immediatament: la política detalla la conservació completa per obligacions legals i regulatòries.'),
    periods: [
      { period: '6 anys des del tancament del compte', sources: ['winamax-privacy-policy', 'winamax-faq-account'] },
      { period: '10 anys per a les dades de prevenció del blanqueig de capitals', sources: ['winamax-privacy-policy'] },
      { period: '3 anys addicionals amb les dades bloquejades', sources: ['winamax-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['winamax-faq-account', 'winamax-privacy-policy'], 'Es pot tancar el compte, però no suprimir-ne les dades: la normativa de joc i de blanqueig obliga a conservar-les una dècada.'),
    selfService: f('yes', 'official', ['winamax-faq-account'], 'El tancament es fa des del perfil de Winamax, sense contactar amb atenció al client.'),
    difficulty: 'medium',
    steps: [
      'Inicia sessió a Winamax i obre el teu perfil.',
      'Tria l’opció de tancar el compte; perdràs milles, tiquets i bons acumulats.',
      'Si el que vols és aturar el joc i no marxar del servei, considera l’autoexclusió temporal (màxim sis mesos) o la inscripció al Registre General d’Interdiccions d’Accés al Joc.',
      'Per exercir drets sobre les dades conservades, escriu al servei d’atenció al client de winamax.es.',
    ],
    obstacles:
      'Les dades es conserven sis anys com a mínim i fins a deu per obligació legal; el tancament comporta perdre els saldos promocionals.',
    dataRetained: 'Identitat, moviments econòmics i patró de joc durant 6 a 10 anys, i 3 anys més bloquejats.',
    sources: ['winamax-faq-account', 'winamax-privacy-policy'],
  },
  userRights: {
    dataExport: unknown('La política no descriu cap procediment ni eina de portabilitat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['winamax-privacy-policy'], 'El canal indicat és el servei d’atenció al client; la política no publica cap adreça de protecció de dades ni identifica un delegat.'),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['winamax-privacy-policy', 'winamax-faq-account'], 'La baixa del butlletí es fa desmarcant la casella corresponent a les preferències de correu; per a la resta de perfils de màrqueting cal exercir el dret d’oposició.'),
    telemetryOptOut: f('no', 'official', ['winamax-privacy-policy'], 'L’anàlisi estadística i la prevenció del frau es basen en interès legítim i obligació legal, sense opció de desactivació.'),
    granularControls: f('partial', 'official', ['winamax-faq-account'], 'Els controls de joc responsable són granulars i ben documentats (límits de dipòsit, autoexclusió, RGIAJ), però no hi ha un panell de privadesa equivalent.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['winamax-faq-account'], 'Augmentar els límits de dipòsit exigeix esperar tres mesos, superar un test i passar una revisió del departament de joc responsable, una fricció que protegeix la persona jugadora. En sentit contrari, el tancament del compte fa perdre les milles i els bons acumulats.'),
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'official', ['winamax-security'], 'TLS amb certificats de clau RSA de 2.048 bits i xifratge AES-256 entre el client de joc i la plataforma.'),
    atRestEncryption: unknown('La pàgina de seguretat parla de tallafocs, còpies i xifratge, però no concreta el xifratge de la base de dades.'),
    mfa: unknown('No consta cap segon factor per al compte de jugador.'),
    independentAudits: f('yes', 'official', ['winamax-security'], 'El generador de nombres aleatoris i el codi font han estat auditats i certificats per la societat HSC, amb tests estadístics Dieharder i FIPS PUB 140-1, segons les exigències de la DGOJ.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hi ha cap política pública de divulgació de vulnerabilitats.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política de Winamax és completa perquè la normativa del joc l’obliga a ser-ho. En canvi, un servei que exigeix el DNI, les dades bancàries i la geolocalització només declara a l’etiqueta de l’App Store «interacció amb el producte» i «dades d’errors».',
    openQuestions: [
      'Per què l’etiqueta de privadesa de l’App Store no declara les dades de contacte, financeres ni d’identitat que la política descriu com a obligatòries?',
      'Hi ha un delegat de protecció de dades designat i una adreça específica per exercir drets?',
    ],
  },
}

/* ═══════════════════════════ bet365 ═══════════════════════════ */
const bet365: AppSeed = {
  slug: 'bet365',
  name: 'bet365',
  company: 'hillside-uk-sports',
  categories: ['apostes'],
  tagline:
    'Dades compartides amb agències de solvència, empreses d’anàlisi de comportament i serveis de vulnerabilitat, i conservades entre cinc i deu anys',
  summary:
    'bet365 és el major operador d’apostes en línia del món, gestionat per societats constituïdes a Malta. La política enumera una llista de destinataris poc habitual: agències d’informació creditícia per a les comprovacions d’assequibilitat, agències de prevenció del frau, organismes rectors de l’esport, «empreses d’anàlisi de comportament», «serveis de vulnerabilitat del consumidor» i agències de recobrament. La conservació és d’un mínim de cinc anys (deu segons el país) des de l’última interacció, i és indefinida si s’hi ha aplicat una autoexclusió permanent, per poder impedir-ne l’accés.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Malta',
  userBase: 'Desenes de milions de comptes a tot el món',
  links: {
    website: 'https://www.bet365.es/',
    privacyPolicy: 'https://help.bet365.com/s/en-gb/privacy-policy',
    appStore: appStore('519684662'),
  },
  accountRequired: f('yes', 'official', ['bet365-privacy-policy'], 'Cal obrir un compte i superar la verificació d’identitat per apostar.'),
  openSource: f('no', 'editorial', [], 'Plataforma de joc tancada.', { licence: 'Privativa' }),
  dataSummary:
    'Un compte d’apostes reuneix identitat verificada, capacitat econòmica i comportament de joc. bet365 hi afegeix una anàlisi de conducta per detectar el risc de joc problemàtic, una finalitat legítima que implica fer inferències sobre la salut de la persona a partir de com aposta.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'prestacio-del-servei'], sources: ['bet365-privacy-policy', 'bet365-app-store'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'prestacio-del-servei'], sources: ['bet365-app-store', 'bet365-privacy-policy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['bet365-app-store', 'bet365-privacy-policy'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['bet365-app-store'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['bet365-privacy-policy'], note: 'La política parla de «dades de verificació i compliment» i de compartició amb agències de verificació d’identitat.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['bet365-app-store', 'bet365-privacy-policy'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau', 'compliment-legal'], sources: ['bet365-app-store', 'bet365-privacy-policy'], note: 'Dades financeres i de transaccions: dipòsits, apostes i retirades.' }),
    row('nivell-d-ingressos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['bet365-privacy-policy'], note: 'Les comprovacions d’assequibilitat es fan amb agències d’informació creditícia.' }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'prestacio-del-servei'], sources: ['bet365-app-store', 'bet365-privacy-policy'], note: 'L’etiqueta la declara vinculada a la persona per a la funcionalitat de l’aplicació; la política té una categoria específica de «dades d’ubicació».' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bet365-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['bet365-app-store'], note: 'És l’única dada que l’etiqueta declara utilitzada per rastrejar.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'elaboracio-de-perfils'], sources: ['bet365-app-store', 'bet365-privacy-policy'], note: 'La política té una categoria de «dades de compte i d’ús del servei» i comparteix informació amb «empreses d’anàlisi de comportament».' }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['bet365-privacy-policy'], note: 'L’autoexclusió, el joc responsable i la participació en el programa GamProtect impliquen identificar conductes de risc de dany relacionat amb el joc.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['bet365-app-store'] }),
    row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari', 'compliment-legal'], sources: ['bet365-privacy-policy', 'bet365-app-store'], note: 'La política declara «dades de comunicació i interacció» i l’etiqueta inclou el contingut d’atenció al client.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['bet365-app-store'], 'L’etiqueta declara l’identificador de dispositiu com a dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['bet365-app-store']),
    thirdPartyTrackersPresent: f('yes', 'official', ['bet365-privacy-policy'], 'La política de galetes distingeix galetes estrictament necessàries, de rendiment i de màrqueting de tercers, i la llista de destinataris inclou agències de publicitat i plataformes de xarxes socials.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['bet365-privacy-policy'], 'El tractament inclou expressament «fer màrqueting», amb galetes de tercers per mostrar anuncis rellevants i mesurar-ne l’eficàcia.'),
    profiling: f('yes', 'official', ['bet365-privacy-policy'], 'S’hi reconeix el dret a no ser objecte de decisions automatitzades «en determinades circumstàncies», i es comparteixen dades amb empreses d’anàlisi de comportament i, al Regne Unit, amb el programa GamProtect de visió única del client.'),
    aiTraining: unknown('La política no esmenta l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['bet365-privacy-policy'], 'Llista llarga i explícita: forces de seguretat i reguladors, agències d’informació creditícia, de prevenció del frau i de verificació d’identitat, organismes rectors de l’esport, agències de publicitat, xarxes socials, proveïdors de pagament, registres públics, empreses d’anàlisi de comportament, serveis de vulnerabilitat del consumidor, agències de recobrament i organitzacions d’integritat esportiva.'),
    intraGroupSharing: f('yes', 'official', ['bet365-privacy-policy'], 'Compartició dins del grup bet365.'),
    dataBrokerSales: f('no', 'official', ['bet365-privacy-policy'], 'La política diu que només es comuniquen dades anonimitzades i agregades a socis potencials, anunciants i inversors, i que aquestes estadístiques no contenen dades personals.'),
    internationalTransfers: f('yes', 'official', ['bet365-privacy-policy'], 'Transferències fora de l’EEE i del Regne Unit amb consentiment explícit, necessitat contractual, obligació legal, decisió d’adequació o clàusules contractuals tipus i normes corporatives vinculants.', {
      mechanism: 'sccs',
    }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No consta cap informe de transparència sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['bet365-privacy-policy'], 'Mínim de cinc anys des de l’última interacció, i mínim de deu segons el país, amb reserva expressa d’ampliar-ho.'),
    dataAfterDeletion: f('yes', 'official', ['bet365-privacy-policy'], 'Les dades es conserven després de tancar el compte i, si s’hi ha aplicat una exclusió permanent, durant tot el període de l’exclusió, per poder impedir l’accés al servei.'),
    periods: [
      { period: 'Mínim 5 anys des de l’última interacció', sources: ['bet365-privacy-policy'] },
      { period: 'Mínim 10 anys segons el país de residència', sources: ['bet365-privacy-policy'] },
      { period: 'Durada de l’exclusió, també si és permanent', sources: ['bet365-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['bet365-privacy-policy'], 'Es reconeix el dret de supressió, però la política avisa que els drets «no són absoluts» i que la conservació mínima de cinc a deu anys s’imposa per obligació legal i regulatòria.'),
    selfService: unknown('No hem pogut verificar si hi ha una opció de tancament del compte dins de l’aplicació: el centre d’ajuda de bet365 bloqueja l’accés automatitzat.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Escriu a data.protection@bet365.com exercint el dret de supressió, o adreça la petició al servei d’atenció al client, que la política indica com a via vàlida.',
      'Si el que vols és aturar el joc, demana una exclusió: bet365 la mantindrà i conservarà les teves dades durant tot el període per impedir-te l’accés.',
      'Guarda la resposta com a prova; si no és satisfactòria, reclama davant de l’autoritat de control competent.',
    ],
    obstacles:
      'Mentre duri la conservació mínima legal, el dret de supressió no té efecte pràctic, i l’exclusió permanent obliga bet365 a mantenir les dades indefinidament.',
    dataRetained: 'Identitat, transaccions, verificacions i registres d’exclusió durant 5 a 10 anys o més.',
    sources: ['bet365-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['bet365-privacy-policy'], 'Es reconeix la portabilitat de «determinats aspectes» de les dades, sense eina d’autoservei ni format especificat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['bet365-privacy-policy'], 'Canal de protecció de dades explícit i possibilitat d’adreçar la petició al servei d’atenció al client.', {
      url: 'mailto:data.protection@bet365.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['bet365-privacy-policy'], 'El gestor de galetes permet limitar les de màrqueting de tercers al web; la política no descriu un control equivalent per a l’identificador de dispositiu de l’aplicació més enllà del permís de rastreig d’iOS.'),
    telemetryOptOut: f('no', 'official', ['bet365-privacy-policy'], 'Les galetes de rendiment es descriuen com a necessàries per mesurar i millorar el servei, i l’anàlisi de comportament respon a obligacions de joc segur.'),
    granularControls: f('partial', 'official', ['bet365-privacy-policy'], 'Gestor de galetes amb tres categories i eines de joc segur; no hi ha un panell de privadesa per finalitat.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['bet365-privacy-policy'], 'La política es compromet a no aplicar canvis materials sense consentiment exprés, però afegeix que, si no s’accepten, pot deixar de prestar part o la totalitat dels serveis, de manera que l’única opció per continuar fent-los servir és acceptar-los.'),
    darkPatternList: [
      {
        type: 'unbalanced-consent',
        severity: 'medium',
        description:
          'Els canvis materials de la política s’accepten o es perd l’accés als serveis, malgrat presentar-se com un consentiment exprés.',
        sources: ['bet365-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'editorial', [], 'Tots els dominis de bet365 es publiquen sobre HTTPS; comprovat el setembre del 2026.'),
    atRestEncryption: unknown('La política parla de mesures tècniques i organitzatives, sense concretar el xifratge en repòs.'),
    mfa: unknown('bet365 publica una aplicació d’autenticació pròpia, però no hem pogut verificar-ne la disponibilitat ni l’abast al mercat espanyol.'),
    independentAudits: f('partial', 'official', ['bet365-privacy-policy'], 'La política declara avaluacions d’impacte, avaluacions d’interès legítim i marcs de governança de seguretat de la informació, però no en publica cap auditoria externa.'),
    bugBounty: unknown('No hem trobat cap programa públic de recompenses.'),
    vulnerabilityDisclosure: unknown('No hem trobat cap política pública de divulgació de vulnerabilitats.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política de bet365 és breu, però la llista de destinataris és inusual: poques aplicacions de consum comparteixen dades alhora amb agències de solvència, organismes rectors de l’esport i serveis de vulnerabilitat del consumidor. La conservació lligada a l’exclusió permanent enfronta el dret de supressió amb la protecció de la persona.',
    openQuestions: [
      'Quina societat és exactament responsable del tractament per als comptes espanyols amb llicència de la DGOJ? La política general només identifica les societats malteses Hillside (UK Sports) ENC i Hillside (UK Gaming) ENC.',
      'Hi ha verificació en dos passos disponible per als comptes espanyols?',
      'El centre d’ajuda bloqueja l’accés automatitzat: la política es va llegir a la còpia arxivada a l’Internet Archive.',
    ],
  },
}

/* ═══════════════════════════ BeSoccer ═══════════════════════════ */
const besoccer: AppSeed = {
  slug: 'besoccer',
  name: 'BeSoccer',
  company: 'besoccer',
  categories: ['esports-i-resultats'],
  tagline:
    'Resultats en directe amb desactivació i eliminació del compte separades, i una política que publica la llista de socis publicitaris',
  summary:
    'BeSoccer, abans Resultados de Fútbol, és una aplicació malaguenya de resultats en directe. La política identifica els socis que fan el seguiment (Google Analytics i Ad Manager, Facebook, Criteo, Smartadserver, AppNexus i comScore) i situa els servidors a OVH dins de la Unió Europea. A l’App Store declara ubicació aproximada, identificador de dispositiu, dades d’ús i de publicitat i dades de diagnòstic com a utilitzats per rastrejar. El perfil ofereix dues opcions: desactivar el compte, que es pot recuperar durant un any, o eliminar-lo definitivament.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.besoccer.com/',
    privacyPolicy: 'https://www.besoccer.com/legal/privacidad',
    appStore: appStore('550928207'),
  },
  accountRequired: f('no', 'official', ['besoccer-privacy-policy'], 'Els resultats i les classificacions es consulten sense compte; el registre amb usuari, correu i contrasenya serveix per als continguts personalitzats.'),
  openSource: f('no', 'editorial', [], 'Servei comercial tancat.', { licence: 'Privativa' }),
  dataSummary:
    'Una aplicació de resultats sap quins equips segueixes, a quina hora consultes els partits i des d’on. Per separat són poques dades, però juntes donen a la subhasta publicitària un perfil d’interès estable, amb una ubicació aproximada i lligat a l’identificador del dispositiu.',
  dataCollection: [
    row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['besoccer-privacy-policy'], note: 'Nom d’usuari escollit al registre.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['besoccer-privacy-policy'] }),
    row('contrasenya', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['besoccer-privacy-policy'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['besoccer-app-store', 'besoccer-privacy-policy'], note: 'L’etiqueta la declara utilitzada per rastrejar i la política reconeix galetes de geolocalització.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['besoccer-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['besoccer-app-store', 'besoccer-privacy-policy'], note: 'Inclou les dades de publicitat; la política parla de galetes de comportament i de publicitat adaptada a l’ús del lloc.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte', 'mesura-i-analisi-dus'], sources: ['besoccer-app-store'], note: 'Les dades d’errors i de rendiment consten entre les utilitzades per rastrejar.' }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['besoccer-privacy-policy'], note: 'Google Analytics i Ad Manager, Facebook, Criteo, Smartadserver, AppNexus, StatCounter, comScore i Pingdom.' }),
    row('interessos-inferits', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['besoccer-privacy-policy'], note: 'Les galetes de publicitat permeten mostrar anuncis «relacionats amb el teu perfil de navegació».' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['besoccer-privacy-policy'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['besoccer-app-store'], 'L’etiqueta declara ubicació aproximada, identificador de dispositiu, interacció amb el producte, dades de publicitat i diagnòstics «utilitzats per rastrejar-te».'),
    advertisingIdentifiers: f('yes', 'official', ['besoccer-app-store']),
    thirdPartyTrackersPresent: f('yes', 'official', ['besoccer-privacy-policy'], 'La política publica la llista: Google (Analytics, DFP/ADX, Ads), Facebook, Criteo, Smartadserver, AppNexus, StatCounter, comScore i Pingdom.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['besoccer-privacy-policy', 'besoccer-app-store'], 'Galetes de publicitat i de comportament per mostrar anuncis segons el perfil de navegació.'),
    profiling: f('partial', 'official', ['besoccer-privacy-policy'], 'Es parla de perfil de navegació per a la publicitat, però no es descriu cap perfilat de compte ni decisions automatitzades.'),
    aiTraining: unknown('La política no esmenta l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['besoccer-privacy-policy'], 'Proveïdors de publicitat i d’analítica identificats a la política, i OVH Hispano com a proveïdor d’allotjament.'),
    intraGroupSharing: f('partial', 'official', ['besoccer-privacy-policy'], 'La política invoca l’«interès legítim del grup empresarial» per tractar dades de jugadors i de personal tècnic obtingudes de fonts públiques.'),
    dataBrokerSales: unknown('No consta la venda de dades.'),
    internationalTransfers: f('partial', 'official', ['besoccer-privacy-policy'], 'La política diu que les dades s’emmagatzemen a servidors d’OVH Hispano dins de la Unió Europea, però no explica les transferències que impliquen els socis publicitaris nord-americans que ella mateixa enumera.'),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['besoccer-privacy-policy'], 'Per als comptes, «fins que revoquis el consentiment»; hi ha terminis concrets només per a les candidatures de feina (dos anys).'),
    dataAfterDeletion: f('partial', 'official', ['besoccer-privacy-policy'], 'La desactivació manté les dades recuperables durant un any; l’eliminació es descriu com a definitiva i irrecuperable.'),
    periods: [
      { period: '1 any de recuperació després de desactivar el compte', sources: ['besoccer-privacy-policy'] },
      { period: '2 anys per a les candidatures de feina no seleccionades', sources: ['besoccer-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['besoccer-privacy-policy']),
    selfService: f('yes', 'official', ['besoccer-privacy-policy'], 'Des de la configuració del perfil, amb dues opcions diferenciades: desactivar o eliminar.'),
    difficulty: 'easy',
    steps: [
      'Obre l’aplicació o el web i entra a la configuració del teu perfil.',
      'Tria «Desactivar compte» si només vols aturar-lo: es podrà recuperar durant un any.',
      'Tria «Eliminar compte» per a una supressió definitiva i irrecuperable.',
      'Per a qualsevol dubte o per exercir la resta de drets, escriu a protecciondedatos@besoccer.com.',
    ],
    dataRetained: 'Després de l’eliminació, la política no declara cap conservació més enllà de les obligacions legals.',
    sources: ['besoccer-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['besoccer-privacy-policy'], 'La portabilitat es reconeix entre els drets, però no hi ha cap eina d’exportació.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['besoccer-privacy-policy'], 'Adreça específica de protecció de dades i referència expressa a la reclamació davant de l’AEPD.', {
      url: 'mailto:protecciondedatos@besoccer.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['besoccer-privacy-policy'], 'Hi ha un tauler de galetes al web; per a l’aplicació, la política no descriu cap control més enllà del permís de rastreig del sistema operatiu.'),
    telemetryOptOut: unknown('No consta cap manera de desactivar l’analítica dins de l’aplicació.'),
    granularControls: f('partial', 'official', ['besoccer-privacy-policy'], 'La distinció entre desactivar i eliminar el compte és un control ben pensat; en canvi, no hi ha un panell de privadesa per finalitat.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', ['besoccer-privacy-policy', 'besoccer-app-store'], 'La política publica els socis de seguiment, cosa poc habitual, però descriu el tractament com si només hi hagués el web i no explica que l’aplicació declara a Apple cinc categories de dades utilitzades per rastrejar.'),
  },
  security: {
    e2ee: na('L’aplicació no transporta comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'editorial', [], 'El web i l’API es publiquen sobre HTTPS; comprovat el setembre del 2026.'),
    atRestEncryption: unknown('No hi ha informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No consta cap segon factor per al compte.'),
    independentAudits: unknown('No consten auditories publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hi ha cap política pública de divulgació de vulnerabilitats.'),
  },
  alternatives: [
    {
      app: 'flashscore',
      comparability: 'equivalent',
      rationale: 'Ofereix el mateix servei de resultats en directe i notificacions sense necessitat de compte.',
      tradeOffs: 'Cal comprovar-ne l’etiqueta de privadesa, perquè el model publicitari del sector és el mateix.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'BeSoccer publica els noms dels socis de seguiment. En canvi, la política descriu només el web, mentre que l’aplicació declara a Apple cinc categories de dades utilitzades per rastrejar, entre elles els diagnòstics.',
    openQuestions: [
      'Com es concilia l’afirmació que les dades es guarden a servidors europeus amb els socis publicitaris nord-americans que la mateixa política enumera?',
      'Per què les dades de diagnòstic figuren entre les utilitzades per rastrejar?',
    ],
  },
}

/* ═══════════════════════════ Empreses ═══════════════════════════ */
const companies: CompanySeed[] = [
  {
    slug: 'druni',
    name: 'DRUNI',
    legalName: 'DRUNI, S.A.',
    description:
      'Cadena valenciana de perfumeria, cosmètica i parafarmàcia, amb centenars de botigues a Espanya i Portugal i botiga en línia pròpia.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'aepd',
    ownership: 'private',
    primaryRevenueModel: 'commerce',
    website: 'https://www.druni.es/',
    productDomains: ['druni.es', 'druni.pt'],
  },
  {
    slug: 'laliga',
    name: 'LALIGA',
    legalName: 'Liga Nacional de Fútbol Profesional',
    description:
      'Associació esportiva que integra els clubs de primera i segona divisió del futbol professional espanyol, amb funcions delegades per la legislació esportiva.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'aepd',
    ownership: 'nonprofit',
    foundedYear: 1984,
    primaryRevenueModel: 'mixed',
    website: 'https://www.laliga.com/',
    productDomains: ['laliga.com'],
    privacyContact: 'dpo@laliga.es',
  },
  {
    slug: 'laliga-group-international',
    name: 'LALIGA Group International',
    legalName: 'LALIGA Group International, S.L.',
    parent: 'laliga',
    description:
      'Societat del grup LALIGA responsable dels productes digitals de la competició, entre ells LALIGA Fantasy i l’inici de sessió únic LALIGA Ecosistema.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'aepd',
    ownership: 'subsidiary',
    primaryRevenueModel: 'mixed',
    website: 'https://www.laliga.com/',
    productDomains: ['fantasy.laliga.com', 'laliga.com'],
    privacyContact: 'dpo@laliga.es',
  },
  {
    slug: 'federacio-catalana-de-futbol',
    name: 'Federació Catalana de Futbol',
    legalName: 'Federació Catalana de Futbol',
    description:
      'Federació esportiva catalana que organitza les competicions de futbol a Catalunya i gestiona les llicències de les persones federades, amb funcions públiques delegades per la Generalitat.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'apdcat',
    ownership: 'nonprofit',
    foundedYear: 1900,
    primaryRevenueModel: 'mixed',
    website: 'https://www.fcf.cat/',
    productDomains: ['fcf.cat', 'futbol.cat', 'futbolfemeni.com', 'fcf.tv'],
    privacyContact: 'legal@fcf.cat',
  },
  {
    slug: 'stormstrike',
    name: 'Stormstrike',
    legalName: 'Stormstrike Inc.',
    description:
      'Empresa nord-americana de mitjans de videojocs, amb seu a Las Vegas, propietària de FUT.GG i d’altres bases de dades per a jugadors.',
    headquartersCountry: 'US',
    ownership: 'private',
    primaryRevenueModel: 'advertising',
    website: 'https://www.fut.gg/',
    productDomains: ['fut.gg', 'stormstrike.gg'],
    privacyContact: 'privacy@stormstrike.gg',
  },
  {
    slug: 'better-collective',
    name: 'Better Collective',
    legalName: 'Better Collective A/S',
    description:
      'Grup danès de mitjans esportius i d’afiliació d’apostes, cotitzat a Nasdaq Copenhagen. Va comprar FUTBIN el 2021 i també és propietari de HLTV.',
    headquartersCountry: 'DK',
    euEstablishment: 'DK',
    leadSupervisoryAuthority: 'datatilsynet-dk',
    ownership: 'public',
    foundedYear: 2004,
    primaryRevenueModel: 'advertising',
    website: 'https://bettercollective.com/',
    productDomains: ['futbin.com', 'hltv.org', 'bettercollective.com'],
  },
  {
    slug: 'playtomic',
    name: 'Playtomic',
    legalName: 'Playtomic, S.L.',
    description:
      'Empresa madrilenya de reserva de pistes de pàdel i tennis i de gestió de clubs, present a una vintena de països.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'aepd',
    ownership: 'private',
    foundedYear: 2017,
    primaryRevenueModel: 'freemium',
    website: 'https://playtomic.io/',
    productDomains: ['playtomic.io', 'playtomic.com'],
    privacyContact: 'dpo@playtomic.io',
  },
  {
    slug: 'winamax',
    name: 'Winamax',
    legalName: 'Winamax, S.A.',
    description:
      'Operador francès de pòquer i apostes esportives en línia, amb seu a París i llicències de la DGOJ per operar a Espanya.',
    headquartersCountry: 'FR',
    euEstablishment: 'FR',
    leadSupervisoryAuthority: 'cnil',
    ownership: 'private',
    foundedYear: 1999,
    primaryRevenueModel: 'commerce',
    website: 'https://www.winamax.es/',
    productDomains: ['winamax.es', 'winamax.fr'],
  },
  {
    slug: 'bet365-group',
    name: 'bet365 Group',
    legalName: 'bet365 Group Limited',
    description:
      'Grup britànic d’apostes i joc en línia amb seu a Stoke-on-Trent, un dels majors operadors del món.',
    headquartersCountry: 'GB',
    ownership: 'private',
    foundedYear: 2000,
    primaryRevenueModel: 'commerce',
    website: 'https://www.bet365.com/',
    productDomains: ['bet365.com', 'bet365.es'],
  },
  {
    slug: 'hillside-uk-sports',
    name: 'Hillside (UK Sports)',
    legalName: 'Hillside (UK Sports) ENC',
    parent: 'bet365-group',
    description:
      'Societat constituïda a Malta que actua com a responsable del tractament dels productes d’apostes esportives de bet365, juntament amb Hillside (UK Gaming) ENC per als productes de casino.',
    headquartersCountry: 'MT',
    euEstablishment: 'MT',
    leadSupervisoryAuthority: 'idpc-mt',
    ownership: 'subsidiary',
    primaryRevenueModel: 'commerce',
    website: 'https://www.bet365.com/',
    productDomains: ['bet365.com', 'bet365.es'],
    privacyContact: 'data.protection@bet365.com',
  },
  {
    slug: 'besoccer',
    name: 'BeSoccer',
    legalName: 'BeSoccer Solutions, S.L.',
    description:
      'Empresa malaguenya de dades i resultats de futbol, coneguda abans com a Resultados de Fútbol, que també ven dades esportives a tercers.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'aepd',
    ownership: 'private',
    primaryRevenueModel: 'advertising',
    website: 'https://www.besoccer.com/',
    productDomains: ['besoccer.com', 'resultados-futbol.com'],
    privacyContact: 'protecciondedatos@besoccer.com',
  },
]

/* ═══════════════════════════ Fonts ═══════════════════════════ */
const sources: SourceSeed[] = [
  s('druni-privacy-policy', 'Política de privacidad — Druni', 'https://www.druni.es/politica-privacidad', 'DRUNI, S.A.', 'privacy-policy', 'primary', {
    language: 'es',
    summary:
      'Política vigent el setembre del 2026: responsable a Carlet, finalitats genèriques, cap cessió a tercers llevat d’obligació legal, drets per escrit amb fotocòpia del DNI i enllaç a la pàgina d’eliminació del compte de l’aplicació.',
  }),
  s('druni-app-store', 'DRUNI - Perfumería online — App Store (España)', 'https://apps.apple.com/es/app/id1592321069', 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary:
      'Etiqueta de privadesa: identificador de dispositiu, interacció amb el producte i dades de publicitat utilitzats per rastrejar; compres, historial de cerca, adreça física, correu, nom i telèfon vinculats a la persona.',
  }),
  s('druni-delete-guide', 'Cómo eliminar mi cuenta de la app de Druni', 'https://www.druni.es/eliminar-cuenta-app', 'DRUNI, S.A.', 'support-doc', 'primary', {
    language: 'es',
    summary: 'Pàgina oficial amb els quatre passos per eliminar el compte des de l’aplicació: Cuenta, Datos personales, Eliminar cuenta i confirmació.',
  }),
  s('druni-ransomware-live', 'Victim: Druni — akira', 'https://www.ransomware.live/id/RHJ1bmlAYWtpcmE', 'Ransomware.live', 'other', 'independent', {
    summary:
      'Fitxa del rastrejador independent de filtracions de ransomware: publicació d’Akira el 29 de juliol de 2025, atac estimat el 23 de juliol, amb reclamació de més de 40 GB de documents corporatius.',
  }),
  s('laliga-fantasy-privacy-policy', 'Información legal Fantasy — LALIGA', 'https://www.laliga.com/informacion-legal-fantasy', 'LALIGA Group International, S.L.', 'privacy-policy', 'primary', {
    language: 'es',
    summary:
      'Política de LALIGA Fantasy: registre a LALIGA Ecosistema amb identificador únic, IDFA i IDFV, importació de dades de Facebook amb valors inferits, perfils exhaustius amb consentiment, publicitat programàtica, transferències a Salesforce i Pushologies, i baixa des de Perfil i Gestió de consentiments.',
  }),
  s('laliga-fantasy-app-store', 'LALIGA FANTASY: Manager Fútbol — App Store (España)', 'https://apps.apple.com/es/app/id968915185', 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary:
      'Etiqueta de privadesa: ID d’usuari, ID de dispositiu i dades de publicitat utilitzats per rastrejar; correu, telèfon, fotos, activitat de joc i compres vinculats a la persona.',
  }),
  s('laliga-cvd', 'Información legal Reporte de Vulnerabilidades — LALIGA', 'https://www.laliga.com/informacion-legal-reporte-vulnerabilidades', 'LALIGA Group International, S.L.', 'technical-doc', 'primary', {
    language: 'es',
    summary:
      'Política de divulgació coordinada de vulnerabilitats per a totes les aplicacions web i mòbils de LALIGA: canal cvd@laliga.es, compromís de no emprendre accions legals i alternativa de notificació a l’INCIBE-CERT. No ofereix recompenses.',
  }),
  s('laliga-aepd-microfon', 'Resolución del procedimiento sancionador PS/00326/2018 (LIGA NACIONAL DE FÚTBOL PROFESIONAL)', 'https://www.aepd.es/documento/ps-00326-2018.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
    language: 'es',
    publishedAt: '2019-06-11',
    summary:
      'L’AEPD multa LALIGA amb 250.000 euros per infracció del principi de transparència de l’article 5.1.a del RGPD per l’ús del micròfon i la ubicació dels dispositius a la seva aplicació, i li ordena adequar-hi la informació en el termini d’un mes.',
  }),
  s('laliga-aepd-biometria', 'Advertencia AI/00394/2023 a LALIGA sobre reconocimiento facial en estadios', 'https://www.aepd.es/documento/ai-00394-2023-advertencia.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
    language: 'es',
    publishedAt: '2024-05-21',
    summary:
      'Advertència formal de l’AEPD a LALIGA en conèixer una licitació de solucions biomètriques de reconeixement facial per a l’accés als estadis: abans de qualsevol implantació cal gestió del risc, avaluació d’impacte i una base de licitud de l’article 9 del RGPD.',
  }),
  s('fcf-legal', 'APP. Avís legal, política de privadesa i política de cookies — Federació Catalana de Futbol', 'https://www.fcf.cat/pdf/app-avis-legal', 'Federació Catalana de Futbol', 'privacy-policy', 'primary', {
    language: 'ca',
    summary:
      'Document legal de l’aplicació de la FCF: finalitats de gestió de contacte i comunicacions comercials, conservació de cinc anys, tractament declarat de categories especials de dades, transferències internacionals sense garanties consentides amb la llicència, exercici de drets amb fotocòpia del DNI i política de galetes amb AT Internet i Google Analytics.',
  }),
  s('fcf-app-store', 'Federació Catalana de Futbol — App Store (España)', 'https://apps.apple.com/es/app/id6738349239', 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary:
      'Etiqueta de privadesa: dades de publicitat utilitzades per rastrejar; correu, nom i fotos o vídeos vinculats a la persona; ubicació exacta i interacció amb el producte no vinculades.',
  }),
  s('futgg-privacy-policy', 'Privacy Policy — Stormstrike Inc.', 'https://www.fut.gg/privacy/', 'Stormstrike Inc.', 'privacy-policy', 'primary', {
    summary:
      'Política de FUT.GG: SDK publicitaris i subhastes programàtiques dins de l’aplicació, seguiment entre dispositius i fingerprinting dels socis, Google i Raptive com a proveïdors, set anys de registres financers i drets del RGPD sense representant designat a la Unió Europea.',
  }),
  s('futgg-app-store', 'FUT.GG - FC 27 Evos & Prices — App Store (España)', 'https://apps.apple.com/es/app/id6470957382', 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary:
      'Etiqueta de privadesa: ubicació aproximada, identificador de dispositiu, interacció amb el producte, dades de publicitat i diagnòstics utilitzats per rastrejar.',
  }),
  s('futbin-privacy-policy', 'EA FC 26 Privacy Policy — FUTBIN', 'https://www.futbin.com/privacy', 'Better Collective A/S', 'privacy-policy', 'primary', {
    summary:
      'Política revisada el juny del 2026: identificadors de compte convertits en hash i compartits amb LiveRamp i altres socis de resolució d’identitat, segments d’audiència a la plataforma de dades de clients, supressió automàtica dels comptes inactius als dotze mesos, interruptor de publicitat personalitzada als ajustos i delegat de protecció de dades a Dinamarca.',
  }),
  s('futbin-app-store', 'FUTBIN FC 26 Evolutions & More — App Store (España)', 'https://apps.apple.com/es/app/id1080465358', 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary:
      'Etiqueta de privadesa: ubicació exacta i aproximada, ID d’usuari, ID de dispositiu i dades de rendiment utilitzats per rastrejar, amb publicitat de tercers com a finalitat principal.',
  }),
  s('playtomic-privacy-policy', 'Privacy Policy — Playtomic', 'https://playtomic.io/privacy-policy', 'Playtomic, S.L.', 'privacy-policy', 'primary', {
    summary:
      'Política en forma de registre d’activitats de tractament: deu anys des de l’últim accés per al compte, sincronització opcional de l’agenda, avaluació de condició física i nivell, xats de partida accessibles als gestors dels clubs, dades de targeta i corresponsabilitat amb Facebook Ireland.',
  }),
  s('playtomic-app-store', 'Playtomic - Jugar a padel — App Store (España)', 'https://apps.apple.com/es/app/id1242321076', 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary:
      'Etiqueta de privadesa: dades de publicitat utilitzades per rastrejar; ubicació exacta, contactes, fotos o vídeos, informació de pagament, correu, nom i telèfon vinculats a la persona.',
  }),
  s('playtomic-delete-guide', 'Cómo eliminar mi cuenta y mis datos — Playtomic Help', 'https://playerhelp.playtomic.com/hc/es/articles/19832128764305', 'Playtomic, S.L.', 'support-doc', 'primary', {
    language: 'es',
    archiveUrl: 'http://web.archive.org/web/20251018205943/https://playerhelp.playtomic.com/hc/es/articles/19832128764305-C%C3%B3mo-eliminar-mi-cuenta-y-mis-datos',
    summary:
      'Article d’ajuda amb els quatre passos per esborrar el compte des de l’aplicació i l’advertiment que l’acció és irreversible i elimina resultats i nivell. Consultat a la còpia de l’Internet Archive perquè el centre d’ajuda bloqueja l’accés automatitzat.',
  }),
  s('winamax-privacy-policy', 'Términos y condiciones: política de privacidad y de confidencialidad — Winamax', 'https://www.winamax.es/terminos-y-condiciones_politica-de-privacidad', 'Winamax, S.A.', 'privacy-policy', 'primary', {
    language: 'es',
    summary:
      'Política de Winamax Espanya: taula de tractaments amb bases jurídiques i referències a la Llei 13/2011 i al Reial decret 176/2023, categories especials per addicció al joc, geolocalització obligatòria, gravació de trucades, conservació de sis a deu anys i tres més bloquejada.',
  }),
  s('winamax-app-store', 'Winamax Apuestas y Poker — App Store (España)', 'https://apps.apple.com/es/app/id385720307', 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary:
      'Etiqueta de privadesa mínima: només interacció amb el producte utilitzada per rastrejar i dades d’errors; no s’hi declara cap dada de contacte, financera ni d’identitat.',
  }),
  s('winamax-faq-account', 'Preguntas frecuentes: gestión de tu cuenta — Winamax', 'https://www.winamax.es/preguntas-frecuentes_gestion-de-tu-cuenta', 'Winamax, S.A.', 'support-doc', 'primary', {
    language: 'es',
    summary:
      'Ajuda oficial: el tancament del compte es fa des del perfil i fa perdre milles, tiquets i bons; confirma la conservació de sis anys des del tancament i descriu l’autoexclusió i els límits de dipòsit.',
  }),
  s('winamax-security', 'Protección de los jugadores: seguridad y protección — Winamax', 'https://www.winamax.es/proteccion-de-los-jugadores_seguridad-y-proteccion', 'Winamax, S.A.', 'technical-doc', 'primary', {
    language: 'es',
    summary:
      'Pàgina tècnica de seguretat: fons dels jugadors separats i controlats per la DGOJ, generador de nombres aleatoris quàntic, auditoria i certificació del codi per la societat HSC i xifratge TLS amb RSA de 2.048 bits i AES-256.',
  }),
  s('bet365-privacy-policy', 'Privacy Policy — bet365 Help Centre', 'https://help.bet365.com/s/en-gb/privacy-policy', 'Hillside (UK Sports) ENC', 'privacy-policy', 'primary', {
    archiveUrl: 'http://web.archive.org/web/20260120190157/https://help.bet365.com/s/en-gb/privacy-policy',
    summary:
      'Política de bet365: responsables Hillside (UK Sports) ENC i Hillside (UK Gaming) ENC a Malta, vuit categories de dades, llista de destinataris amb agències de solvència i de prevenció del frau, empreses d’anàlisi de comportament i serveis de vulnerabilitat del consumidor, conservació mínima de cinc a deu anys i indefinida en cas d’exclusió permanent. Consultada a la còpia de l’Internet Archive perquè el centre d’ajuda bloqueja l’accés automatitzat.',
  }),
  s('bet365-app-store', 'bet365 - Apuestas y Casino — App Store (España)', 'https://apps.apple.com/es/app/id519684662', 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary:
      'Etiqueta de privadesa: identificador de dispositiu utilitzat per rastrejar; compres, informació de pagament, ubicació exacta, adreça física, correu, nom, telèfon i atenció al client vinculats a la persona.',
  }),
  s('besoccer-privacy-policy', 'Política de privacidad — BeSoccer', 'https://www.besoccer.com/legal/privacidad', 'BeSoccer Solutions, S.L.', 'privacy-policy', 'primary', {
    language: 'es',
    summary:
      'Política de BeSoccer: responsable a Màlaga, dades de registre mínimes, llista explícita de socis publicitaris i d’analítica (Google, Facebook, Criteo, Smartadserver, AppNexus, comScore), allotjament a OVH Hispano dins de la UE i distinció entre desactivar el compte (recuperable un any) i eliminar-lo definitivament.',
  }),
  s('besoccer-app-store', 'BeSoccer: Resultados de Fútbol — App Store (España)', 'https://apps.apple.com/es/app/id550928207', 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary:
      'Etiqueta de privadesa: ubicació aproximada, identificador de dispositiu, interacció amb el producte, dades de publicitat i diagnòstics d’errors i de rendiment utilitzats per rastrejar.',
  }),
]

/* ═══════════════════════════ Incidents ═══════════════════════════ */
const incidents: IncidentSeed[] = [
  {
    slug: 'laliga-aepd-microfon-2019',
    title: 'L’AEPD multa LALIGA amb 250.000 euros pel micròfon de la seva aplicació',
    type: 'regulatory-fine',
    severity: 'high',
    company: 'laliga',
    occurredAt: '2018-06-08',
    disclosedAt: '2019-06-11',
    description:
      'L’aplicació oficial de LALIGA activava el micròfon i la ubicació dels telèfons per detectar bars que emetien partits sense llicència. L’AEPD va concloure que la informació donada a les persones usuàries no complia el principi de transparència de l’article 5.1.a del RGPD: el consentiment es demanava una sola vegada en instal·lar l’aplicació i després no hi havia cap avís en el moment de l’activació. Va imposar una multa de 250.000 euros i va ordenar a la lliga adequar la informació en el termini d’un mes. LALIGA va retirar la funcionalitat.',
    affectedPeople: 'Més de deu milions de persones que tenien instal·lada l’aplicació de LALIGA a Espanya.',
    regulatory: {
      authority: 'Agencia Española de Protección de Datos',
      fineAmountEur: 250000,
      legalBasis: 'Article 5.1.a del RGPD',
      status: 'final',
    },
    sources: ['laliga-aepd-microfon'],
  },
  {
    slug: 'laliga-aepd-advertencia-biometria-2024',
    title: 'L’AEPD adverteix LALIGA abans d’implantar reconeixement facial als estadis',
    type: 'regulatory-order',
    severity: 'medium',
    company: 'laliga',
    occurredAt: '2023-10-17',
    disclosedAt: '2024-05-21',
    description:
      'Arran d’una licitació pública de «Biometric solutions for facial recognition» per a l’accés dels aficionats als estadis, l’AEPD va dirigir una advertència formal a LALIGA recordant-li que, abans de qualsevol decisió d’implantació d’un tractament de dades biomètriques, cal una gestió del risc, mesures des del disseny i per defecte i, en cas d’alt risc, una avaluació d’impacte que superi el triple judici d’idoneïtat, necessitat i proporcionalitat, a més d’una excepció de l’article 9.2 del RGPD. No és una sanció, però fixa les condicions d’un tractament que la lliga ja estava contractant.',
    affectedPeople: 'Persones assistents als estadis de primera i segona divisió.',
    regulatory: {
      authority: 'Agencia Española de Protección de Datos',
      legalBasis: 'Articles 9, 24, 25 i 35 del RGPD',
      status: 'final',
    },
    sources: ['laliga-aepd-biometria'],
  },
  {
    slug: 'druni-akira-2025',
    title: 'El grup Akira publica DRUNI com a víctima i reclama tenir-ne 40 GB de documents',
    type: 'breach',
    severity: 'high',
    company: 'druni',
    occurredAt: '2025-07-23',
    disclosedAt: '2025-07-29',
    description:
      'El grup de ransomware Akira va publicar DRUNI al seu lloc de filtracions el 29 de juliol de 2025, afirmant tenir més de 40 GB de documents corporatius, entre els quals fitxers de personal amb números de DNI, informes financers, dades de projectes i contractes amb marques. Les xifres provenen exclusivament de l’atacant i no han estat confirmades per l’empresa, que no ha publicat cap comunicació sobre l’incident; no consta que afectessin dades de clients de la botiga en línia.',
    affectedPeople: 'Dades de personal i documentació corporativa, segons la reclamació de l’atacant; abast no confirmat.',
    sources: ['druni-ransomware-live'],
  },
]

export const lot: SeedLot = {
  companies,
  sources,
  apps: [druni, laligaFantasy, fcf, futGg, futbin, playtomic, winamax, bet365, besoccer],
  incidents,
  storeIds: {
    druni: 'es.druni.druniapp',
    'laliga-fantasy': 'com.lfp.laligafantasy',
    'federacio-catalana-de-futbol': 'com.example.resultados',
    'fut-gg': 'com.futgg.futgg',
    futbin: 'com.futbin',
    playtomic: 'com.playtomic',
    winamax: 'com.winamax.WinaClient',
    bet365: 'com.bet365.bet365Wrapper',
    besoccer: 'com.resultadosfutbol.resultadosfutboliphone',
  },
}
