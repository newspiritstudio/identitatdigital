import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 15 de la segona onada: esport i feina (Matchapp, Fanalysis, Sporttia,
 * Flashscore, RunnerPro, bwin, Indeed, Zoom Workplace i JOB TODAY).
 *
 * És un lot desigual a propòsit: al costat de multinacionals amb informe de
 * transparència i programa de recompenses (Zoom, Indeed) hi ha aplicacions
 * espanyoles molt petites on la política de privadesa és l'única font
 * disponible i on sovint no n'hi ha prou. L'aposta esportiva hi afegeix el cas
 * contrari: bwin no pot esborrar el que la llei del joc l'obliga a conservar.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/* ═══════════════════════════ Flashscore ═══════════════════════════ */
const flashscore: AppSeed = {
  slug: 'flashscore',
  name: 'Flashscore',
  company: 'livesport',
  categories: ['esports-i-resultats'],
  tagline: 'Resultats en directe finançats per dinou socis publicitaris, amb terminis de conservació insòlitament concrets',
  summary:
    'Flashscore es pot fer servir sense compte i la política de Livesport és de les poques d’aquesta onada que posa números a cada termini de conservació: un mes per a les dades tècniques, quatre anys per al consentiment de màrqueting, cinc per a les enquestes. La contrapartida és el finançament: una llista pública de dinou socis publicitaris i una etiqueta de l’App Store que declara identificadors utilitzats per rastrejar.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'República Txeca',
  userBase: 'Una de les aplicacions de resultats esportius més descarregades d’Europa',
  links: {
    website: 'https://www.flashscore.es/',
    privacyPolicy: 'https://www.livesport.eu/privacy-policy/es/',
    appStore: appStore('766443283'),
  },
  accountRequired: f('no', 'official', ['flashscore-privacy-policy'], 'Els resultats i les notificacions funcionen sense compte; el compte només cal per sincronitzar favorits entre dispositius i es pot obrir amb Google, Apple o Meta.'),
  openSource: f('no', 'official', ['flashscore-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Els equips i les competicions que se segueixen, i a quines hores es consulten, dibuixen un perfil d’aficionat prou definit per al mercat publicitari esportiu, que és exactament el que compra la llista de socis programàtics. Si el compte s’ha obert amb Google, Apple o Meta, aquest perfil queda a més lligat a una identitat real.',
  dataCollection: [
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['flashscore-privacy-policy', 'flashscore-app-store'], note: 'Només si s’obre compte; el registre es pot fer amb Google, Apple o Meta, que en reben constància.' }),
    row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['compliment-legal'], sources: ['flashscore-privacy-policy'], note: 'La política parla de l’edat, per complir els límits d’edat del servei.' }),
    row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['flashscore-app-store'] }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['flashscore-app-store', 'flashscore-third-parties'], note: 'L’etiqueta declara identificadors utilitzats per rastrejar. Els socis inclouen Google, Criteo, Index Exchange, Magnite, Xandr, OpenX, PubMatic, Teads, InMobi, Smaato i A9 (Amazon).' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['flashscore-privacy-policy', 'flashscore-third-parties'], note: 'L’analítica d’atribució es fa amb AppsFlyer.' }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['flashscore-privacy-policy'], note: 'El consentiment es gestiona amb la plataforma OneTrust.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'prestacio-del-servei'], sources: ['flashscore-privacy-policy'], note: 'Les dades tècniques es conserven un mes si no hi ha compte.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['flashscore-app-store'], note: 'L’etiqueta la declara com a dada no vinculada, utilitzada per publicitat de tercers.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['flashscore-app-store', 'flashscore-privacy-policy'] }),
    row('historial-de-cerca', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['flashscore-privacy-policy'], note: 'Els equips i les competicions seguits configuren el contingut de l’aplicació.' }),
    row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['investigacio-i-estadistica', 'millora-del-producte'], sources: ['flashscore-privacy-policy'], note: 'Respostes a enquestes, fetes amb Alchemer i conservades cinc anys.' }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['flashscore-app-store'], note: 'Subscripció per treure la publicitat.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['flashscore-app-store'] }),
    row('dades-de-salut', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['flashscore-privacy-policy'] }),
    row('ubicacio-precisa', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['flashscore-app-store'], note: 'L’etiqueta només declara ubicació aproximada.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['flashscore-app-store'], 'L’etiqueta de l’App Store declara identificadors utilitzats per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['flashscore-third-parties'], 'La llista pública de tercers inclou intercanvis programàtics que treballen amb l’identificador publicitari.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['flashscore-third-parties'], 'Dinou socis declarats, entre ells Google Ireland, Criteo, Index Exchange, Magnite, Xandr, Teads, OpenX, PubMatic, Smaato, Verve, InMobi i A9.com (Amazon), més AppsFlyer per a l’atribució.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['flashscore-privacy-policy', 'flashscore-third-parties'], 'La publicitat programàtica personalitzada depèn del consentiment recollit amb OneTrust.'),
    profiling: f('partial', 'official', ['flashscore-privacy-policy'], 'La política descriu personalització de contingut i de màrqueting, però no reconeix explícitament l’elaboració de perfils com a tal.'),
    aiTraining: unknown('La política no diu res sobre l’ús de dades per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['flashscore-privacy-policy', 'flashscore-third-parties'], 'Socis publicitaris i d’analítica, proveïdors d’allotjament, serveis de registre de Google, Apple i Meta, autoritats i assessors.'),
    intraGroupSharing: f('yes', 'official', ['flashscore-privacy-policy'], 'Compartició amb altres entitats del grup Livesport.'),
    dataBrokerSales: unknown('La política no diu explícitament si ven dades personals a intermediaris.'),
    internationalTransfers: f('yes', 'official', ['flashscore-privacy-policy'], 'Només a països amb decisió d’adequació o amb clàusules contractuals tipus.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['flashscore-privacy-policy'], 'La política dona terminis concrets per a gairebé totes les categories, cosa poc habitual.'),
    dataAfterDeletion: f('partial', 'official', ['flashscore-privacy-policy'], 'Després de cancel·lar el compte es conserven dades per a la defensa de drets durant un mínim de tres anys.'),
    periods: [
      { dataType: 'adreca-ip', period: 'Un mes si no hi ha compte; mentre el compte sigui actiu, si n’hi ha', sources: ['flashscore-privacy-policy'] },
      { dataType: 'adreca-electronica', period: 'Quatre anys des del consentiment, per al màrqueting', sources: ['flashscore-privacy-policy'] },
      { dataType: 'publicacions-i-comentaris', period: 'Cinc anys per a les respostes a enquestes', sources: ['flashscore-privacy-policy'] },
      { dataType: 'identificador-de-compte', period: 'Esborrat automàtic després de tres anys d’inactivitat', sources: ['flashscore-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['flashscore-privacy-policy'], 'El dret de supressió s’exerceix escrivint a privacy@livesport.eu, i hi ha esborrat automàtic per inactivitat de tres anys.'),
    selfService: unknown('No hem pogut verificar amb una font oficial que hi hagi un botó d’eliminació dins de l’aplicació.'),
    difficulty: 'unknown',
    requiresSupportContact: true,
    steps: [
      'Escriu a privacy@livesport.eu invocant el dret de supressió de l’article 17 del RGPD.',
      'Si no en tens resposta, adreça’t al delegat de protecció de dades a dpo@livesport.eu.',
      'Com a alternativa passiva, deixa d’utilitzar el compte: a partir de tres anys d’inactivitat les dades personals s’esborren.',
    ],
    dataRetained: 'Dades necessàries per a la defensa de drets durant un mínim de tres anys des de la cancel·lació, i el que exigeixin les obligacions legals.',
    sources: ['flashscore-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['flashscore-privacy-policy'], 'La portabilitat es reconeix a la política, però no hi ha cap eina d’autoservei documentada.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['flashscore-privacy-policy'], 'Delegat de protecció de dades designat i identificat a la política.', {
      url: 'mailto:dpo@livesport.eu',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['flashscore-privacy-policy'], 'Hi ha una «Configuración de privacidad» al web i a l’aplicació, gestionada amb OneTrust, que permet retirar el consentiment publicitari.'),
    telemetryOptOut: f('partial', 'official', ['flashscore-privacy-policy'], 'L’analítica es pot rebutjar al tauler de consentiment, però el funcionament bàsic i la seguretat es tracten per interès legítim.'),
    granularControls: f('yes', 'official', ['flashscore-privacy-policy'], 'El tauler de consentiment separa les finalitats i els socis.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi independent de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('L’aplicació no transporta comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'official', ['flashscore-privacy-policy'], 'El servei i la política s’ofereixen exclusivament sobre HTTPS.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos documentada.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses públic.'),
    vulnerabilityDisclosure: unknown('Ni flashscore.es ni livesport.eu publiquen un fitxer security.txt; tots dos retornen 404.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política de Livesport és un bon exemple del que hauria de ser normal: terminis numèrics per categoria i una llista pública i nominal dels socis publicitaris. Això no la fa protectora (l’etiqueta declara rastreig), però sí comprovable.',
    openQuestions: [
      'Hi ha un botó d’eliminació del compte dins de l’aplicació o cal escriure sempre a privacy@livesport.eu?',
      'Quines mesures tècniques de seguretat aplica Livesport? No en publica cap documentació.',
    ],
  },
}

/* ═══════════════════════════ RunnerPro ═══════════════════════════ */
const runnerpro: AppSeed = {
  slug: 'runnerpro',
  name: 'RunnerPro',
  company: 'runnerwellness',
  categories: ['benestar-i-activitat-fisica'],
  tagline: 'Entrenament de running amb dades de salut d’Apple, Garmin i Strava, i una política que no diu ni qui és el responsable',
  summary:
    'RunnerPro connecta amb Apple Health, Health Connect, Garmin i Strava per llegir passes, freqüència cardíaca, son i entrenaments, és a dir, dades de salut de categoria especial. La política ho reconeix i hi aplica el consentiment explícit de l’article 9.2.a del RGPD, però no identifica la raó social responsable, dona una adreça que no coincideix amb el registre mercantil i l’enllaç de privadesa declarat a la fitxa de l’App Store retorna un error. L’etiqueta de l’App Store, a més, només declara dades d’ús i diagnòstics.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://runnerpro.app/',
    privacyPolicy: 'https://runnerpro.app/policies/privacy-policy',
    appStore: appStore('6474573887'),
  },
  accountRequired: f('yes', 'official', ['runnerpro-privacy-policy'], 'El servei es basa en plans d’entrenament personalitzats amb entrenador, amb subscripció i prova gratuïta.'),
  openSource: f('no', 'official', ['runnerpro-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'La freqüència cardíaca, el son, el pes i el rastre dels entrenaments són dades de salut: revelen l’estat físic, les lesions, els períodes de malaltia i fins i tot els horaris i els recorreguts habituals de cada dia. Aquí, a més, hi conviuen amb dades de pagament i amb un entrenador humà que llegeix el registre.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['runnerpro-privacy-policy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['runnerpro-privacy-policy'] }),
    row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['runnerpro-privacy-policy'], note: 'La política parla de credencials del compte.' }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['runnerpro-privacy-policy'], note: 'Passes, freqüència cardíaca, son, pes i entrenaments, llegits d’Apple HealthKit, Health Connect, Garmin i Strava o introduïts a mà. Consentiment explícit de l’article 9.2.a del RGPD.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['runnerpro-privacy-policy'], note: 'La botiga funciona sobre Shopify, amb passarel·les de pagament externes.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['runnerpro-privacy-policy'] }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['runnerpro-privacy-policy'] }),
    row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['runnerpro-privacy-policy'] }),
    row('historial-de-navegacio', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['runnerpro-privacy-policy'], note: 'La política esmenta dades de navegació i publicitat personalitzada a través de Shopify.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['runnerpro-app-store'], note: 'L’etiqueta les declara com a dades no vinculades.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['runnerpro-app-store'] }),
    row('ubicacio-precisa', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', sources: ['runnerpro-privacy-policy'], note: 'Els entrenaments importats de Garmin i Strava solen portar el traçat GPS, però ni la política ni l’etiqueta ho diuen.' }),
    row('identificador-publicitari', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', sources: ['runnerpro-app-store'], note: 'L’etiqueta no declara cap dada utilitzada per rastrejar.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['runnerpro-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: unknown('No hem trobat cap referència a l’identificador publicitari.'),
    thirdPartyTrackersPresent: f('partial', 'official', ['runnerpro-privacy-policy'], 'La política preveu compartir dades amb socis comercials i de màrqueting per a publicitat personalitzada a través de Shopify.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['runnerpro-privacy-policy'], 'La política reconeix el compartiment de dades per a publicitat personalitzada mitjançant Shopify i el dret a oposar-s’hi segons la residència.'),
    profiling: f('partial', 'official', ['runnerpro-privacy-policy'], 'El servei personalitza el pla d’entrenament a partir de les dades de salut; la política no parla de perfilat publicitari propi.'),
    aiTraining: unknown('La política no diu si les dades s’utilitzen per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['runnerpro-privacy-policy'], 'Shopify, passarel·les de pagament, proveïdors de TI, núvol, analítica i atenció, integracions de Garmin i Strava, i els entrenadors.'),
    intraGroupSharing: na('RUNNERWELLNESS és una empresa sense grup ni filials conegudes.'),
    dataBrokerSales: unknown('La política no diu explícitament si ven dades personals.'),
    internationalTransfers: f('yes', 'official', ['runnerpro-privacy-policy'], 'Fora de l’EEE i del Regne Unit amb clàusules contractuals tipus de la Comissió Europea o un contracte equivalent.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No n’hi ha cap; és una empresa petita i no se li ha de suposar.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['runnerpro-privacy-policy'], 'La política diu que la conservació «depèn de diversos factors» i només concreta que les dades de salut es guarden mentre el compte estigui actiu.'),
    dataAfterDeletion: f('partial', 'official', ['runnerpro-privacy-policy'], 'En eliminar el compte, les dades de salut s’esborren o s’anonimitzen; no es diu què passa amb la facturació.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['runnerpro-privacy-policy']),
    selfService: f('yes', 'official', ['runnerpro-privacy-policy'], 'La política diu textualment que el compte es pot eliminar des de l’aplicació, però no en documenta els passos ni hi ha cap pàgina d’ajuda que els expliqui.'),
    difficulty: 'unknown',
    requiresSupportContact: false,
    steps: [
      'Elimina el compte des de la mateixa aplicació, segons indica la política de privadesa.',
      'Si no trobes l’opció, escriu a hola@runnerpro.app demanant la supressió de les dades.',
      'Revoca també, des dels ajustos del telèfon, els permisos d’Apple Health o Health Connect, i la connexió amb Garmin i Strava.',
    ],
    obstacles:
      'La política no identifica la raó social responsable ni designa cap delegat de protecció de dades, i l’adreça postal que hi consta no coincideix amb la del registre mercantil. Si cal reclamar, s’ha de fer davant de l’AEPD contra RUNNERWELLNESS, S.L.',
    dataRetained: 'No es concreta. Les obligacions fiscals obliguen a conservar la facturació encara que la política no ho digui.',
    sources: ['runnerpro-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['runnerpro-privacy-policy'], 'El dret de portabilitat es reconeix, però no hi ha cap eina d’exportació documentada.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['runnerpro-privacy-policy'], 'Hi ha adreces de contacte, però cap delegat de protecció de dades ni cap procediment descrit; per a les dades tractades per Shopify la política remet a Shopify.', {
      url: 'mailto:hola@runnerpro.app',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['runnerpro-privacy-policy'], 'La política reconeix el dret a oposar-se al compartiment per a publicitat personalitzada, però el condiciona al lloc de residència i no dona cap control dins de l’aplicació.'),
    telemetryOptOut: unknown('No hem trobat cap control de telemetria.'),
    granularControls: f('partial', 'official', ['runnerpro-privacy-policy'], 'El consentiment de les fonts de dades de salut és granular i revocable des del sistema operatiu; el web té un gestor de galetes de Shopify.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('L’aplicació no ofereix comunicacions privades xifrades entre persones.'),
    transportEncryption: f('yes', 'official', ['runnerpro-privacy-policy'], 'El servei s’ofereix sobre HTTPS, servit per la infraestructura de Shopify.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
  },
  alternatives: [
    {
      app: 'strava',
      comparability: 'partial',
      rationale:
        'Strava registra els mateixos entrenaments amb una política molt més detallada i amb controls de visibilitat i zones privades.',
      tradeOffs: 'No ofereix plans d’entrenament amb entrenador humà i és una xarxa social, amb l’exposició pública que això comporta.',
    },
    {
      app: 'wikiloc',
      comparability: 'complementary',
      rationale: 'Per a qui només vulgui registrar el recorregut sense cedir dades de salut a un servei de subscripció.',
      tradeOffs: 'No fa seguiment fisiològic ni planificació d’entrenaments.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Cas il·lustratiu del desajust entre l’etiqueta de l’App Store i la política: l’etiqueta només declara dades d’ús i diagnòstics no vinculades, mentre que la política descriu dades de salut, de contacte i de pagament associades al compte. A més, l’enllaç de privadesa declarat a la fitxa de l’App Store (runnerpro.app/aviso-privacidad) retorna un error 404, i la política no identifica la raó social responsable.',
    openQuestions: [
      'Per què l’etiqueta de privadesa no declara les dades de salut que la política descriu?',
      'Es conserva el traçat GPS dels entrenaments importats de Garmin i Strava?',
      'Quins són els terminis reals de conservació i d’esborrat?',
    ],
  },
}

/* ═══════════════════════════ bwin ═══════════════════════════ */
const bwin: AppSeed = {
  slug: 'bwin',
  name: 'bwin',
  company: 'electraworks-ceuta',
  categories: ['apostes'],
  tagline: 'Deu anys de conservació obligatòria i una sanció de l’AEPD per com es va explicar',
  summary:
    'A bwin no hi ha manera de marxar del tot: la llicència de joc espanyola obliga a conservar les dades del client deu anys des del tancament del compte, i l’operador ho aplica com a resposta estàndard a qualsevol sol·licitud de supressió. L’AEPD el va sancionar precisament per la informació que donava sobre això. A l’altre costat, el mateix marc legal imposa verificació d’identitat, contrast amb el registre d’autoexclosos i control de patrons de joc, un tractament molt invasiu que aquí té una justificació de protecció.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Espanya',
  userBase: 'Un dels operadors amb llicència general de la DGOJ amb més quota a Espanya',
  links: {
    website: 'https://sports.bwin.es/',
    privacyPolicy: 'https://help.bwin.es/es/general-information/security/privacy-policy',
    appStore: appStore('803817777'),
  },
  accountRequired: f('yes', 'official', ['bwin-privacy-policy'], 'Cal compte verificat amb document d’identitat: la llei del joc no permet jugar de manera anònima.'),
  openSource: f('no', 'official', ['bwin-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'L’historial d’apostes és un dels registres més sensibles que pot generar una persona: diu quant guanya, quant perd, a quines hores juga i si el patró s’està deteriorant. Aquí conviu amb el document d’identitat, els extractes bancaris i les gravacions de trucades, i es conserva deu anys des que es tanca el compte.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['bwin-privacy-policy', 'bwin-app-store'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['bwin-privacy-policy'], note: 'Verificació d’identitat i d’edat amb captura documental, feta amb el proveïdor Jumio.' }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['bwin-privacy-policy'] }),
    row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal'], sources: ['bwin-privacy-policy'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['bwin-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['bwin-privacy-policy', 'bwin-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bwin-app-store'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['bwin-privacy-policy', 'bwin-app-store'], note: 'Inclou extractes bancaris i documentació financera per a la diligència antiblanqueig.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'elaboracio-de-perfils'], sources: ['bwin-privacy-policy'], note: 'L’historial de joc i d’apostes es conserva deu anys des del tancament del compte.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada', 'compliment-legal'], sources: ['bwin-privacy-policy'], note: 'Els patrons de comportament de joc s’analitzen per obligació legal de joc segur i també per a màrqueting.' }),
    row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['atencio-a-lusuari', 'compliment-legal'], sources: ['bwin-privacy-policy'], note: 'Gravacions de trucades conservades tres anys.' }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['atencio-a-lusuari'], sources: ['bwin-app-store'], note: 'L’etiqueta declara «contingut de l’usuari» (atenció al client) com a dada utilitzada per rastrejar.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['bwin-privacy-policy', 'bwin-app-store'], note: 'IP, adreça MAC i tipus de dispositiu.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'compliment-legal'], sources: ['bwin-privacy-policy'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'compliment-legal'], sources: ['bwin-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['bwin-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['bwin-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['bwin-app-store'] }),
    row('dades-de-salut', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['bwin-privacy-policy'], note: 'No es demanen, però el monitoratge de joc segur infereix indicis de joc problemàtic, que és una condició de salut.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['bwin-app-store'], 'L’etiqueta declara «contingut de l’usuari» com a dada utilitzada per rastrejar.'),
    advertisingIdentifiers: unknown('Ni la política ni l’etiqueta concreten l’ús de l’identificador publicitari d’Apple.'),
    thirdPartyTrackersPresent: f('partial', 'official', ['bwin-privacy-policy'], 'La política preveu proveïdors de màrqueting, però no en publica la llista.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['bwin-privacy-policy'], 'Màrqueting amb base de consentiment o interès legítim, amb preferències per canal al compte. La publicitat del joc està a més restringida pel Reial decret 958/2020.'),
    profiling: f('yes', 'official', ['bwin-privacy-policy'], 'S’analitzen patrons de comportament de joc, per obligació legal de joc segur i per a màrqueting. La política reconeix el dret d’oposició a decisions automatitzades.'),
    aiTraining: unknown('La política no diu si les dades s’utilitzen per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['bwin-privacy-policy'], 'DGOJ, entitats financeres i processadors de pagament, Jumio per a la verificació d’identitat, forces de seguretat, organismes esportius i antifrau, i les bases de dades d’autoexclusió dels reguladors.'),
    intraGroupSharing: f('yes', 'official', ['bwin-privacy-policy'], 'Compartició amb entitats del grup Entain, amb corresponsabilitat del tractament en alguns supòsits.'),
    dataBrokerSales: unknown('La política no diu explícitament si ven dades personals a intermediaris.'),
    internationalTransfers: f('yes', 'official', ['bwin-privacy-policy'], 'Transferències fora de l’EEE amb clàusules contractuals tipus implementades pels proveïdors; el detall per país no es publica.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: f('no', 'official', ['bwin-entain-sustainability-2025'], 'Entain no publica cap informe de peticions d’autoritats; el que publica és l’apartat de sostenibilitat de l’informe anual, amb mètriques de seguretat de la informació.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['bwin-privacy-policy'], 'Deu anys des del tancament del compte per a les dades de client i tres anys per a les gravacions de trucades.'),
    dataAfterDeletion: f('yes', 'official', ['bwin-privacy-policy', 'bwin-aepd-2023'], 'El tancament del compte no esborra res: l’operador manté les dades els deu anys del període mínim de garantia legal de la llicència i la normativa antiblanqueig.'),
    periods: [
      { dataType: 'historial-de-compres', period: 'Deu anys des del tancament del compte', sources: ['bwin-privacy-policy', 'bwin-aepd-2023'] },
      { dataType: 'veu-i-audio', period: 'Tres anys per a les gravacions de trucades', sources: ['bwin-privacy-policy'] },
      { dataType: 'document-identificatiu-oficial', period: 'Deu anys, per obligació antiblanqueig', sources: ['bwin-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['bwin-privacy-policy', 'bwin-aepd-2023'], 'Es pot tancar el compte, però no obtenir-ne la supressió fins que passin els deu anys de conservació obligatòria.'),
    selfService: f('partial', 'official', ['bwin-privacy-policy'], 'El tancament, la pausa de joc i l’autoexclusió es poden activar des de la configuració del compte; la supressió de les dades s’ha de demanar per escrit.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Entra a la configuració del compte i tria la pausa de joc o el tancament, segons el que vulguis.',
      'Si vols l’autoexclusió, tingues present que el termini mínim és de sis mesos i que és irrevocable mentre dura.',
      'Per demanar la supressió de les dades, escriu a privacy@bwin.es o al delegat de protecció de dades del grup, dataprotectionofficer@entaingroup.com.',
      'Espera una resposta que, molt probablement, invocarà el termini de deu anys de conservació obligatòria; si no hi estàs d’acord, reclama davant de l’AEPD.',
    ],
    obstacles:
      'La conservació decennal és real i deriva dels requisits de llicència i de la normativa antiblanqueig, però l’AEPD va sancionar l’operador per la manera com informava d’aquesta limitació.',
    dataRetained: 'Identitat, historial de joc i documentació financera durant deu anys des del tancament, i les dades d’autoexclusió mentre calgui per garantir l’eficàcia de l’exclusió.',
    sources: ['bwin-privacy-policy', 'bwin-aepd-2023'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['bwin-privacy-policy'], 'La portabilitat es reconeix; no hi ha eina d’autoservei documentada.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['bwin-privacy-policy'], 'Delegat de protecció de dades del grup i canal específic per a Espanya.', {
      url: 'mailto:privacy@bwin.es',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['bwin-privacy-policy'], 'Preferències de comunicacions comercials per canal a la configuració del compte.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica d’ús.'),
    granularControls: f('yes', 'official', ['bwin-privacy-policy'], 'Límits de dipòsit, límits de temps de sessió, pausa de joc i autoexclusió, a més del gestor de galetes del web. Són controls de joc, no de dades, però limiten el que es registra.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi independent de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('L’operador ha de poder llegir l’historial de joc per obligació legal; el xifratge d’extrem a extrem no hi és aplicable.'),
    transportEncryption: f('yes', 'official', ['bwin-privacy-policy'], 'El servei s’ofereix exclusivament sobre HTTPS.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('Hem vist referències a una verificació en dos passos amb codi al mòbil, però no hem trobat cap documentació oficial de bwin.es que ho confirmi.'),
    independentAudits: f('partial', 'official', ['bwin-entain-sustainability-2025'], 'Entain declara la certificació ISO 27001 amb una cobertura del 78,5 % de la plantilla el 2025, però no consta que l’abast inclogui ElectraWorks (Ceuta). Els sistemes tècnics de joc, a més, han d’estar homologats per laboratoris acreditats davant de la DGOJ.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses públic d’Entain ni de bwin.'),
    vulnerabilityDisclosure: unknown('Ni bwin.es ni entaingroup.com publiquen un fitxer security.txt.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La fitxa distingeix dues coses que és fàcil confondre. El termini de deu anys no és una decisió de l’empresa, sinó una obligació del marc del joc; el que l’AEPD va sancionar és com s’informava l’interessat. En canvi, la sanció de la DGOJ de novembre de 2025 sí que afecta directament el tractament: una de les tres infraccions és haver permès jugar a persones que ho tenien prohibit, cosa que implica una fallida en el contrast contra el registre d’autoexclosos. L’expedient sancionador de l’AEPD va acabar per pagament voluntari, amb les reduccions corresponents.',
    openQuestions: [
      'La certificació ISO 27001 d’Entain cobreix ElectraWorks (Ceuta)?',
      'Existeix una documentació oficial de la verificació en dos passos a bwin.es?',
    ],
  },
}

/* ═══════════════════════════ Matchapp ═══════════════════════════ */
const matchapp: AppSeed = {
  slug: 'matchapp',
  name: 'Matchapp',
  company: 'match-app',
  categories: ['esports-i-resultats'],
  tagline: 'No té política de privadesa de l’aplicació i les etiquetes d’Apple i de Google es contradiuen',
  summary:
    'Matchapp organitza partits de futbol entre amics, però l’enllaç de privadesa que declara a les botigues porta a un avís legal del web que només parla del formulari de contacte. L’etiqueta de l’App Store declara dades de contacte, identificadors i dades d’ús utilitzades per rastrejar, mentre que la fitxa de Google Play afirma que no comparteix res amb tercers. Les dues declaracions són del mateix producte i no poden ser certes alhora.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://matchapp.es/',
    privacyPolicy: 'https://matchapp.es/terms/',
    terms: 'https://matchapp.es/conditions/',
    appStore: appStore('907431871'),
  },
  accountRequired: f('yes', 'official', ['matchapp-play-data-safety'], 'La fitxa de Google Play declara nom i correu per a la gestió del compte.'),
  openSource: f('no', 'official', ['matchapp-terms'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Saber amb qui juga cada persona, on i cada quan és una radiografia del cercle d’amistats i de la rutina setmanal. Aquí no hi ha cap document que expliqui què se’n fa: l’única descripció del tractament és la llista de l’etiqueta de l’App Store.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['matchapp-app-store', 'matchapp-play-data-safety'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['matchapp-app-store'], note: 'L’etiqueta declara les dades de contacte com a utilitzades per rastrejar.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['matchapp-app-store'], note: 'Declarat sota «Publicidad de terceros».' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['matchapp-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['matchapp-app-store'] }),
    row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['matchapp-app-store'], note: 'Les «dades de publicitat» es declaren com a no vinculades però sí utilitzades per rastrejar.' }),
    row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['matchapp-play-data-safety'], note: 'El servei consisteix a convocar partits amb un grup de persones conegudes.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['matchapp-app-store'] }),
    row('historial-de-compres', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['matchapp-app-store'], note: 'Subscripció Matchapp Premium per treure els bàners.' }),
    row('ubicacio-precisa', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', sources: ['matchapp-app-store'], note: 'Cap de les dues etiquetes declara ubicació, tot i que l’aplicació convoca partits en camps concrets.' }),
    row('dades-de-pagament', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', sources: ['matchapp-terms'], note: 'No hi ha cap document que expliqui com es tracten els pagaments de la subscripció.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['matchapp-app-store'], 'L’etiqueta declara dades de contacte, identificadors i dades d’ús utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['matchapp-app-store'], 'Hi ha una categoria «Publicidad de terceros» amb identificadors i dades de publicitat.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['matchapp-app-store'], 'L’aplicació gratuïta mostra bàners i declara publicitat de tercers; la llista de socis no es publica enlloc.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['matchapp-app-store'], 'L’etiqueta declara publicitat de tercers i màrqueting del desenvolupador amb dades vinculades a la persona.'),
    profiling: f('partial', 'official', ['matchapp-app-store'], 'Hi ha una finalitat de «personalització del producte» amb correu, nom i identificador d’usuari, però cap document que l’expliqui.'),
    aiTraining: unknown('No hi ha cap document que en parli.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['matchapp-app-store'], 'L’etiqueta de l’App Store declara publicitat de tercers, mentre que l’avís legal diu que les dades «no es comunicaran a tercers excepte obligació legal» i la fitxa de Google Play afirma que no se’n comparteix cap.'),
    intraGroupSharing: unknown('No consta cap grup empresarial.'),
    dataBrokerSales: unknown('No hi ha cap document que en parli.'),
    internationalTransfers: unknown('Cap document esmenta transferències internacionals ni el seu mecanisme.'),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No n’hi ha cap.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['matchapp-terms'], 'L’avís legal només parla del «temps necessari per atendre la petició» del formulari de contacte, i no diu res del compte de l’aplicació.'),
    dataAfterDeletion: unknown('Cap document diu què es conserva després de tancar el compte.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['matchapp-conditions']),
    selfService: f('no', 'official', ['matchapp-conditions'], 'Les condicions diuen textualment que per cancel·lar el compte cal escriure a soporte@matchapp.es. Google Play només ofereix «sol·licitar que s’eliminin les dades».'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Escriu a soporte@matchapp.es des de l’adreça amb què vas obrir el compte i demana’n la cancel·lació.',
      'Invoca el dret de supressió de l’article 17 del RGPD perquè no es limitin a desactivar el compte.',
      'Si no en reps resposta en un mes, reclama davant de l’AEPD.',
    ],
    obstacles:
      'No hi ha cap pàgina d’ajuda amb el procediment, cap termini publicat i cap indicació de què es conserva. L’entitat responsable, a més, apareix amb tres noms diferents segons la font.',
    sources: ['matchapp-conditions', 'matchapp-play-data-safety'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['matchapp-terms'], 'L’avís legal enumera el dret de portabilitat, però no hi ha cap eina d’exportació.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['matchapp-terms'], 'Els drets s’exerceixen per correu electrònic o postal. No hi ha delegat de protecció de dades.', {
      url: 'mailto:soporte@matchapp.es',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('no', 'official', ['matchapp-conditions'], 'L’única manera de treure els bàners és pagar la subscripció, i les condicions adverteixen que així i tot es continuen rebent notificacions i correus comercials.'),
    telemetryOptOut: unknown('No hem trobat cap control de telemetria.'),
    granularControls: f('no', 'official', ['matchapp-terms'], 'No hi ha cap panell de privadesa; el bàner de galetes del web és del tipus «si continues, acceptes», amb un sol botó.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', [], 'El bàner de galetes del web amb un sol botó d’acceptació i l’absència d’eliminació autoservei són dos indicis, però no hem trobat cap anàlisi independent de l’aplicació.'),
  },
  security: {
    e2ee: na('L’aplicació no ofereix comunicacions privades xifrades entre persones.'),
    transportEncryption: f('yes', 'official', ['matchapp-play-data-safety'], 'Google Play confirma el xifratge de les dades en trànsit.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt i les condicions declaren expressament que no garanteixen la invulnerabilitat de l’aplicació.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La troballa útil d’aquesta fitxa és documental: no hi ha política de privadesa de l’aplicació, l’enllaç que la substitueix és un avís legal sobre el formulari del web, i l’entitat responsable apareix com a «just team up SL» a l’App Store, «NVDO SMART TECH SL» a Google Play i «MATCH APP, S.L.» als documents legals, totes tres amb el mateix telèfon. La matriu de dades s’ha hagut de construir gairebé sencera a partir de les etiquetes de les botigues.',
    openQuestions: [
      'Quina és l’entitat que realment tracta les dades de l’aplicació?',
      'Hi ha botó d’eliminació del compte dins de l’aplicació, tal com exigeix Apple?',
      'Quins són els socis publicitaris que reben els identificadors?',
    ],
  },
}

/* ═══════════════════════════ Fanalysis ═══════════════════════════ */
const fanalysis: AppSeed = {
  slug: 'fanalysis',
  name: 'Fanalysis',
  company: 'fanalysis-limited',
  categories: ['esports-i-resultats'],
  tagline: 'Estima l’edat amb reconeixement facial i esborra la imatge en set dies, però l’etiqueta de la botiga no ho declara',
  summary:
    'Fanalysis recull valoracions de jugadors fetes per aficionats i les cedeix a Sky Sports. La seva política és, de llarg, la més detallada d’aquest lot: llista nominal d’encarregats, terminis per categoria i mecanismes de transferència explicats un per un. El que no explica cap etiqueta de botiga és que l’aplicació estima l’edat amb AWS Rekognition a partir d’una fotografia i genera l’avatar amb OpenAI.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Regne Unit',
  links: {
    website: 'https://www.fanalysis.com/',
    privacyPolicy: 'https://www.fanalysis.com/es/politica-de-privacidad',
    appStore: appStore('6749045838'),
  },
  accountRequired: f('yes', 'official', ['fanalysis-privacy-policy'], 'Cal compte per valorar jugadors i publicar; l’edat es verifica o s’estima en el registre.'),
  openSource: f('no', 'official', ['fanalysis-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Les valoracions, les ressenyes i el club que se segueix formen un perfil d’afició que acaba en un magatzem analític de Snowflake juntament amb el correu, el nom i la nacionalitat. Per sobre hi ha una capa biomètrica: una fotografia que serveix per estimar l’edat i per generar un avatar amb un model de tercers.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fanalysis-privacy-policy', 'fanalysis-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['fanalysis-privacy-policy', 'fanalysis-app-store'], note: 'Arriba a Snowflake juntament amb el nom, la nacionalitat, el club i les valoracions.' }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['fanalysis-app-store'] }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['fanalysis-privacy-policy'], note: 'Fotografia i representació matemàtica facial per estimar l’edat amb AWS Rekognition a Irlanda, esborrades automàticament al cap de set dies. Verificació documental d’edat amb Yoti. Cap etiqueta de botiga declara aquesta categoria.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fanalysis-privacy-policy'], note: 'La fotografia per a l’avatar és opcional i té alternativa; l’avatar el genera OpenAI.' }),
    row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts', 'investigacio-i-estadistica'], sources: ['fanalysis-privacy-policy', 'fanalysis-app-store'], note: 'El feed d’activitat es gestiona amb GetStream i la detecció de contingut nociu amb AWS Rekognition.' }),
    row('origen-etnic-o-nacionalitat', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'investigacio-i-estadistica'], sources: ['fanalysis-privacy-policy'], note: 'La política inclou la nacionalitat entre les dades que arriben a Snowflake.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'mesura-publicitaria'], sources: ['fanalysis-app-store', 'fanalysis-privacy-policy'], note: 'L’atribució es fa amb AppsFlyer i només amb consentiment ATT.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['fanalysis-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['fanalysis-privacy-policy'], note: 'Dades tècniques recollides amb Google Analytics, conservades dos anys.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['fanalysis-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['fanalysis-app-store'] }),
    row('ocupacio-i-carrec', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['fanalysis-privacy-policy'], note: 'Dades d’ocupació i, per a les candidatures a «Starting XI Fanalyst», antecedents penals que s’esborren just després de la decisió.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['fanalysis-app-store'] }),
    row('llista-de-contactes', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['fanalysis-privacy-policy'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['fanalysis-app-store'], 'L’etiqueta declara identificadors i dades d’ús utilitzats per rastrejar; la política ho lliga al consentiment per a l’atribució d’AppsFlyer.'),
    advertisingIdentifiers: f('yes', 'official', ['fanalysis-privacy-policy'], 'Seguiment d’atribució amb l’SDK d’AppsFlyer, subjecte a consentiment.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['fanalysis-privacy-policy'], 'AppsFlyer i Google Analytics; la política els identifica pel nom.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['fanalysis-privacy-policy'], 'La política declara que no venen dades ni les comparteixen per a publicitat conductual entre contextos; el màrqueting electrònic propi depèn del consentiment.'),
    profiling: f('yes', 'official', ['fanalysis-privacy-policy'], 'Hi ha valoració automatitzada de les candidatures a «Fanalyst», amb dret a intervenció humana i a impugnació.'),
    aiTraining: f('partial', 'official', ['fanalysis-privacy-policy'], 'Les fotografies es processen amb OpenAI per generar l’avatar i amb AWS Rekognition per estimar l’edat i detectar contingut nociu; la política no diu que les dades serveixin per entrenar models propis.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['fanalysis-privacy-policy'], 'Llista nominal: OpenAI, Amazon Web Services EMEA, AppsFlyer, Google, GetStream, Snowflake, OneSignal i Yoti, a més d’assessors i reguladors. La llista completa de subencarregats només s’obté sota petició.'),
    intraGroupSharing: na('Fanalysis Limited no té grup ni filials conegudes.'),
    dataBrokerSales: f('no', 'official', ['fanalysis-privacy-policy'], 'La política declara expressament que no venen dades personals.'),
    internationalTransfers: f('yes', 'official', ['fanalysis-privacy-policy'], 'Clàusules contractuals tipus de la UE i l’addenda britànica de transferències internacionals per als proveïdors dels Estats Units i d’Israel; el Regne Unit està cobert per la decisió d’adequació.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['fanalysis-privacy-policy'], 'Terminis concrets per a cada categoria, inclosa l’eliminació de la imatge facial en set dies.'),
    dataAfterDeletion: f('partial', 'official', ['fanalysis-privacy-policy'], 'Les dades de compte i perfil es conserven fins a sis anys després de tancar el compte.'),
    periods: [
      { dataType: 'identificador-de-compte', period: 'Vigència del compte i sis anys més', sources: ['fanalysis-privacy-policy'] },
      { dataType: 'dades-biometriques', period: 'Set dies per a la imatge i la representació matemàtica facial', sources: ['fanalysis-privacy-policy'] },
      { dataType: 'adreca-ip', period: 'Dos anys per a les dades tècniques i d’ús', sources: ['fanalysis-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['fanalysis-faq']),
    selfService: f('no', 'official', ['fanalysis-faq'], 'La pàgina de preguntes freqüents diu que el compte s’elimina escrivint a l’equip de suport des de l’adreça amb què es va crear, i amb el número antic a mà per verificar la identitat. Sí que són autoservei l’esborrat de l’avatar i de les publicacions pròpies.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Escriu a hello@fanalysis.com des de l’adreça amb què vas crear el compte.',
      'Tingues a mà el número de telèfon associat, que serveix per verificar la identitat.',
      'Si vols, esborra abans l’avatar i les publicacions pròpies des del menú de tres punts.',
    ],
    obstacles: 'L’eliminació no és immediata ni automàtica: les dades de compte i perfil es conserven fins a sis anys.',
    dataRetained: 'Dades de compte i perfil fins a sis anys després del tancament, per a la defensa de possibles reclamacions.',
    sources: ['fanalysis-faq', 'fanalysis-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['fanalysis-privacy-policy'], 'La portabilitat es reconeix i s’exerceix per correu en el termini d’un mes, sense eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['fanalysis-privacy-policy'], 'Coordinador de protecció de dades a hello@fanalysis.com i representant a la UE segons l’article 27 del RGPD: DP-Dock GmbH, a Hamburg.', {
      url: 'mailto:hello@fanalysis.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['fanalysis-privacy-policy'], 'El seguiment d’atribució depèn del consentiment ATT, retirable des dels ajustos del dispositiu, i el màrqueting té enllaç de baixa.'),
    telemetryOptOut: f('partial', 'official', ['fanalysis-privacy-policy'], 'L’analítica de Google es tracta per interès legítim i no consta un interruptor propi dins de l’aplicació.'),
    granularControls: f('yes', 'official', ['fanalysis-privacy-policy'], 'La fotografia per a l’avatar és opcional i té alternativa, i l’aplicació no utilitza galetes.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi independent de patrons foscos.'),
  },
  security: {
    e2ee: na('El servei és de contingut públic, no de comunicacions privades.'),
    transportEncryption: f('yes', 'official', ['fanalysis-privacy-policy'], 'HTTPS amb HSTS al web.'),
    atRestEncryption: unknown('La política només parla de «salvaguardes físiques i electròniques raonables», sense concretar.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos documentada.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: f('partial', 'official', ['fanalysis-privacy-policy'], 'La política declara procediments de resposta a bretxes i de notificació a les persones afectades i al regulador, però no publica cap canal de divulgació ni fitxer security.txt.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política de Fanalysis és molt superior a la mitjana d’aquest lot: identifica cada encarregat pel nom, dona terminis per categoria i explica el mecanisme de transferència de cadascun. El contrast és amb les etiquetes de les botigues, que no declaren ni la fotografia ni la representació facial que la política sí que descriu. L’aplicació és nova (abril de 2026) i no té historial.',
    openQuestions: [
      'Per què ni l’App Store ni Google Play declaren les dades biomètriques que la política descriu?',
      'Quina és la llista completa de subencarregats? Només s’obté sota petició.',
    ],
  },
}

/* ═══════════════════════════ Sporttia ═══════════════════════════ */
const sporttia: AppSeed = {
  slug: 'sporttia',
  name: 'Sporttia',
  company: 'social-cloud',
  categories: ['esports-i-resultats'],
  tagline: 'Reserva d’instal·lacions municipals amb esborrat de compte autoservei i una política que no parla de l’aplicació',
  summary:
    'Sporttia és el programari amb què molts ajuntaments i patronats gestionen les pistes esportives, de manera que sovint no es tria: si vols reservar, hi has de passar. És l’única aplicació d’aquest lot amb esborrat de compte autoservei verificable i declara la certificació ENS de nivell mitjà, però la política de privadesa és la genèrica del web corporatiu i no descriu ni les reserves, ni els pagaments, ni la ubicació, ni el control d’accés.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Espanya',
  userBase: 'Més de 400 centres esportius, molts d’ells municipals',
  links: {
    website: 'https://sporttia.com/',
    privacyPolicy: 'https://sporttia.com/politica-de-privacidad',
    terms: 'https://sporttia.com/terminos-y-condiciones',
    appStore: appStore('6744922343'),
  },
  accountRequired: f('yes', 'official', ['sporttia-app-store'], 'Cal compte amb nom, correu i telèfon per reservar i per accedir a la instal·lació.'),
  openSource: f('no', 'official', ['sporttia-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Un calendari de reserves de pista diu on és una persona, a quina hora i amb quina regularitat, i a més amb qui. Quan la instal·lació és municipal, aquesta agenda es reparteix entre una empresa privada i l’ajuntament, i cap de les dues parts no ho explica a la política.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['sporttia-app-store', 'sporttia-play-data-safety'], note: 'El centre esportiu, sovint municipal, també tracta aquestes dades.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['sporttia-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['sporttia-app-store'] }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['sporttia-play-data-safety'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['sporttia-app-store'] }),
    row('dades-de-pagament', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['sporttia-app-store', 'sporttia-integracions'], note: 'L’etiqueta la declara com a dada no vinculada. El cobrament es fa amb Redsys, Stripe, Paycomet, CECA, Sipay o ZityCard, segons el centre.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['sporttia-play-data-safety'], note: 'Reserves, quotes, bons i moneder virtual.' }),
    row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['sporttia-app-store'], note: 'L’etiqueta de l’App Store declara ubicació exacta i aproximada per a la personalització del producte; la fitxa de Google Play no recull cap ubicació i la política tampoc no en parla.' }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari', 'prestacio-del-servei'], sources: ['sporttia-play-data-safety'], note: 'Google Play declara la categoria «Missatges»; l’etiqueta de l’App Store no la reflecteix.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['sporttia-play-data-safety'] }),
    row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['sporttia-app-store'], note: 'L’etiqueta no declara cap dada utilitzada per rastrejar.' }),
    row('galetes-i-identificadors-web', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['sporttia-cookies'], note: 'Només al web corporatiu: galetes de Google AdSense i de Stripe, amb consentiment.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['sporttia-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['sporttia-app-store'], 'No es declara cap identificador publicitari a l’aplicació.'),
    thirdPartyTrackersPresent: f('partial', 'official', ['sporttia-cookies'], 'El web corporatiu incorpora Google AdSense i Google Ads; l’aplicació no declara seguiment.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['sporttia-cookies'], 'Hi ha publicitat personalitzada al web corporatiu, amb consentiment; l’aplicació no en declara.'),
    profiling: f('partial', 'official', ['sporttia-play-data-safety'], 'Google Play declara la personalització com a finalitat, però cap document explica en què consisteix.'),
    aiTraining: unknown('Cap document en parla.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['sporttia-integracions', 'sporttia-privacy-policy'], 'La política diu que «únicament es cediran les dades per complir obligacions legals», però el servei integra sis passarel·les de pagament i és el centre esportiu qui gestiona l’activitat. No es publica cap llista d’encarregats.'),
    intraGroupSharing: na('Social Cloud S.L. no té grup ni filials conegudes.'),
    dataBrokerSales: unknown('La política no en diu res.'),
    internationalTransfers: f('no', 'official', ['sporttia-privacy-policy'], 'La política afirma que no estan previstes transferències a tercers països, cosa difícil de conciliar amb l’ús declarat de Stripe i de Google al web.', { mechanism: 'none' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No n’hi ha cap.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['sporttia-privacy-policy'], 'Només criteris genèrics: mentre es mantingui la relació comercial i el que exigeixin les obligacions legals.'),
    dataAfterDeletion: unknown('Cap document diu què es conserva després d’eliminar el compte, tot i que la facturació de les reserves està subjecta a terminis fiscals.'),
  },
  accountDeletion: {
    possible: f('yes', 'independent', ['sporttia-play-user-app'], 'L’aplicació web inclou una acció d’eliminació de compte que crida el punt final «DELETE /me» de l’API.'),
    selfService: f('yes', 'independent', ['sporttia-play-user-app'], 'Hi ha un botó «Eliminar cuenta» a la zona de perfil, amb un diàleg que avisa que l’acció és definitiva i irreversible. Ho hem verificat al codi de l’aplicació web, no en cap pàgina d’ajuda.'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Entra al teu perfil a l’aplicació o a play.sporttia.com.',
      'Tria «Eliminar cuenta» i confirma el diàleg, que adverteix que l’eliminació és definitiva.',
    ],
    obstacles: 'No hi ha cap pàgina d’ajuda que documenti el procés, ni terminis, ni què es conserva per obligació fiscal.',
    sources: ['sporttia-play-user-app', 'sporttia-play-data-safety'],
  },
  userRights: {
    dataExport: f('no', 'official', ['sporttia-privacy-policy'], 'La política no esmenta el dret de portabilitat i no hi ha cap eina d’exportació.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['sporttia-privacy-policy'], 'Els drets s’exerceixen per correu a info@sporttia.com adjuntant còpia del document d’identitat, una exigència que l’AEPD desaconsella per defecte. No hi ha delegat de protecció de dades designat.', {
      url: 'mailto:info@sporttia.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['sporttia-cookies'], 'El web té un panell de galetes ben construït, amb «Rechazar todas» i quatre categories; a l’aplicació no hi ha res a desactivar perquè no declara publicitat.'),
    telemetryOptOut: unknown('No hem trobat cap control de telemetria a l’aplicació.'),
    granularControls: f('partial', 'official', ['sporttia-cookies'], 'El consentiment granular existeix al web corporatiu, no dins de l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos.'),
  },
  security: {
    e2ee: na('L’aplicació no transporta comunicacions privades xifrades entre persones.'),
    transportEncryption: f('yes', 'official', ['sporttia-play-data-safety'], 'Google Play confirma el xifratge en trànsit; el domini i l’API apliquen HSTS amb precàrrega.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
    mfa: f('partial', 'independent', ['sporttia-play-user-app'], 'L’aplicació web inclou un flux de verificació en dos passos amb un codi de sis xifres. No hem pogut determinar el canal ni si és opcional o obligatori, i no hi ha ni TOTP ni claus de seguretat.', {
      methods: ['email', 'sms'],
    }),
    independentAudits: f('partial', 'official', ['sporttia-ens'], 'Sporttia declara la certificació de l’Esquema Nacional de Seguretat de nivell mitjà i publica el certificat, però el document està allotjat a Google Drive i no n’hem pogut verificar l’entitat certificadora, l’abast ni la vigència.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt ni cap canal de comunicació de vulnerabilitats.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Cas típic del programari municipal: qui vol reservar una pista pública no tria el proveïdor. Això fa més greu que la política sigui la genèrica del web i que no expliqui el repartiment de responsabilitats entre Social Cloud i l’ajuntament o el patronat. En canvi, l’esborrat de compte autoservei i la certificació ENS declarada són dos punts favorables. L’esborrat s’ha verificat llegint el codi de l’aplicació web, perquè no hi ha cap pàgina d’ajuda que el documenti.',
    openQuestions: [
      'Qui és el responsable del tractament de les reserves: Social Cloud o el centre esportiu? Cap document ho aclareix.',
      'Quina entitat ha emès el certificat ENS i quin abast i vigència té?',
      'Per què l’etiqueta de l’App Store declara ubicació exacta si ni la política ni la fitxa de Google Play l’esmenten?',
    ],
  },
}

/* ═══════════════════════════ Indeed ═══════════════════════════ */
const indeed: AppSeed = {
  slug: 'indeed',
  name: 'Indeed',
  company: 'indeed-ireland',
  categories: ['feina-i-ocupacio'],
  tagline: 'El currículum pot ser cercable per qualsevol ocupador i les converses es conserven deu anys',
  summary:
    'Indeed, del grup japonès Recruit, cobra els ocupadors per publicar ofertes i per cercar currículums. Això fa que el paràmetre més important de tot el servei sigui si el perfil és «cercable» o no: en el primer estat el poden veure els ocupadors del programa de cerca de currículums i qualsevol persona amb l’enllaç. La política és de les poques que publica terminis: les comunicacions i la missatgeria es conserven deu anys. També hi ha dues sortides diferents i no equivalents, tancar el compte i demanar-ne l’esborrat.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Irlanda',
  userBase: 'Un dels portals d’ocupació amb més trànsit del món',
  links: {
    website: 'https://es.indeed.com/',
    privacyPolicy: 'https://hrtechprivacy.com/es/brands/indeed',
    terms: 'https://es.indeed.com/legal',
    appStore: appStore('309735670'),
  },
  accountRequired: f('partial', 'official', ['indeed-privacy-policy'], 'Es poden consultar ofertes sense compte, però per inscriure-s’hi i desar cerques cal registrar-se.'),
  openSource: f('no', 'official', ['indeed-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Un currículum és un expedient sencer: trajectòria, formació, edat deduïble, sovint fotografia. A Indeed s’hi suma quines ofertes es miren i quantes vegades, cosa que revela insatisfacció laboral, canvis de sector o intenció de mudança abans que ho sàpiga ningú més. Les converses amb els ocupadors es conserven deu anys.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['indeed-privacy-policy', 'indeed-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['indeed-privacy-policy', 'indeed-app-store'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['indeed-app-store'] }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['indeed-app-store'] }),
    row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['indeed-privacy-policy'], note: 'Currículum, historial laboral i respostes a preguntes de cribratge, que passen a l’ocupador com a responsable independent.' }),
    row('nivell-formatiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['indeed-privacy-policy'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['indeed-app-store'] }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['indeed-privacy-policy', 'indeed-app-store'], note: 'Les comunicacions i la missatgeria amb Indeed es conserven deu anys.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['indeed-app-store'] }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['indeed-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['indeed-privacy-policy', 'indeed-app-store'], note: 'La política parla de codi postal.' }),
    row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['indeed-app-store'], note: 'L’etiqueta declara ubicació exacta com a dada no vinculada, tot i que la política afirma recollir-ne només d’aproximada.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'mesura-publicitaria'], sources: ['indeed-privacy-policy', 'indeed-app-store'], note: 'En instal·lar l’aplicació es poden compartir l’adreça IP i altres identificadors amb proveïdors d’atribució, per interès legítim.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['indeed-app-store'], note: 'Hi ha sincronització de perfil amb Glassdoor, del mateix grup.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['indeed-app-store'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['indeed-privacy-policy'], note: 'Models estadístics i d’intel·ligència artificial calculen l’encaix entre candidatura i oferta.' }),
    row('origen-etnic-o-nacionalitat', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['investigacio-i-estadistica'], sources: ['indeed-privacy-policy'], note: 'Dades demogràfiques només amb consentiment i només als mercats on està permès.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['indeed-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['indeed-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar entre aplicacions d’altres empreses.'),
    advertisingIdentifiers: f('partial', 'official', ['indeed-privacy-policy'], 'S’utilitzen identificadors per a l’atribució d’instal·lacions, per interès legítim.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['indeed-privacy-policy'], 'Socis publicitaris i proveïdors d’atribució, no enumerats nominalment.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['indeed-privacy-policy'], 'El màrqueting es basa en l’interès legítim i s’hi pot oposar; hi ha una pàgina d’opcions publicitàries.', {
      optOutUrl: 'https://hrtechprivacy.com/ad-choices',
    }),
    profiling: f('yes', 'official', ['indeed-privacy-policy'], 'Models estadístics i d’intel·ligència artificial per a l’aparellament, resums automàtics i puntuació d’encaix. Indeed declara que no pren decisions de contractació en nom de l’ocupador.'),
    aiTraining: f('yes', 'official', ['indeed-privacy-policy'], 'La millora del servei i de la intel·ligència artificial es fa sota interès legítim, amb dret d’oposició.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['indeed-privacy-policy'], 'Els ocupadors reben el currículum i les respostes de cribratge i passen a ser responsables independents; Indeed ja no en controla la redifusió.'),
    intraGroupSharing: f('yes', 'official', ['indeed-privacy-policy'], 'Grup Recruit Holdings: Glassdoor, SimplyHired, Resume.com, Workopolis i altres marques, amb sincronització de perfils amb Glassdoor.'),
    dataBrokerSales: unknown('La política no ho afirma ni ho nega de manera clara per a l’EEE.'),
    internationalTransfers: f('yes', 'official', ['indeed-privacy-policy'], 'Clàusules contractuals tipus de la Comissió Europea i altres garanties del capítol V del RGPD.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: f('yes', 'official', ['indeed-transparency-report', 'indeed-dsa-report'], 'Informe semestral de peticions d’autoritats i de particulars, i informe de transparència del Reglament de serveis digitals.', {
      url: 'https://www.indeed.com/legal/transparency-report-hub/h12025-indeed-transparency-report-copy',
    }),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['indeed-privacy-policy'], 'Hi ha alguns terminis concrets, però la resta es regeix pel criteri genèric de necessitat.'),
    dataAfterDeletion: f('partial', 'official', ['indeed-delete-data'], 'Tancar el compte no esborra res: les dades continuen als servidors fins que se’n demana la supressió pel formulari.'),
    periods: [
      { dataType: 'contingut-de-missatges', period: 'Deu anys per a les comunicacions i la missatgeria', sources: ['indeed-privacy-policy'] },
      { dataType: 'document-identificatiu-oficial', period: 'Esborrat un cop feta la verificació d’identitat', sources: ['indeed-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['indeed-close-account', 'indeed-delete-data']),
    selfService: f('partial', 'official', ['indeed-close-account', 'indeed-delete-data'], 'El tancament del compte és autoservei des de la configuració, però només treu l’accés: les dades es queden. Per esborrar-les cal el formulari de sol·licitud de dades personals, amb un termini aproximat d’un mes.'),
    directUrl: 'https://requests.hrtechprivacy.com/create',
    difficulty: 'medium',
    waitingPeriodDays: 30,
    requiresSupportContact: false,
    steps: [
      'Descarrega’t abans una còpia de les dades amb el formulari de sol·licitud, perquè el compte tancat no és recuperable.',
      'Per treure l’accés, entra a la configuració del compte i tria «Cerrar mi cuenta».',
      'Per esborrar les dades de debò, omple el formulari de requests.hrtechprivacy.com i tria l’opció d’eliminació de dades personals.',
      'Indeed indica un termini aproximat d’un mes per completar-ho.',
    ],
    obstacles:
      'La distinció entre tancar el compte i esborrar les dades no és òbvia i les dues opcions viuen en llocs diferents. A més, els currículums ja enviats queden en mans de cada ocupador, que és responsable independent i no es veu afectat per la supressió.',
    dataRetained: 'El que exigeixin les obligacions legals i el que ja hagin rebut els ocupadors. La política no ho concreta.',
    sources: ['indeed-close-account', 'indeed-delete-data'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['indeed-delete-data'], 'Hi ha un formulari únic per a l’accés, la portabilitat i la supressió. El format de lliurament no es concreta.', {
      url: 'https://requests.hrtechprivacy.com/create',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['indeed-privacy-policy'], 'Formulari de sol·licituds i adreça de privadesa. Indeed declara que respecta el senyal Global Privacy Control.', {
      url: 'mailto:privacy-dept@indeed.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['indeed-privacy-policy'], 'Pàgina d’opcions publicitàries i dret d’oposició al màrqueting basat en l’interès legítim.', {
      url: 'https://hrtechprivacy.com/ad-choices',
    }),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica d’ús.'),
    granularControls: f('yes', 'official', ['indeed-profile-privacy'], 'El control decisiu és la visibilitat del perfil: «Los empleadores pueden encontrarte» el fa cercable per als ocupadors del programa de cerca de currículums i visible per a qualsevol que en tingui l’enllaç.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown('Les fonts consultades es contradiuen sobre quin és l’estat per defecte de la visibilitat del perfil, i no ho hem pogut resoldre.'),
  },
  security: {
    e2ee: na('El servei ha de poder llegir el currículum i els missatges per fer d’intermediari.'),
    transportEncryption: f('yes', 'official', ['indeed-security-txt'], 'El servei i el fitxer security.txt es publiquen exclusivament sobre HTTPS.'),
    atRestEncryption: unknown('No hem trobat cap pàgina de seguretat ni cap centre de confiança públic d’Indeed.'),
    mfa: f('partial', 'official', ['indeed-2fa'], 'Hi ha verificació en dos passos amb codi per SMS, documentada per als comptes d’ocupador; no hem trobat documentació d’altres mètodes ni per als comptes de candidat.', {
      methods: ['sms'],
    }),
    independentAudits: unknown('No hem trobat cap certificació ni auditoria publicada.'),
    bugBounty: f('yes', 'official', ['indeed-bugcrowd', 'indeed-security-txt'], 'Programa públic de recompenses a Bugcrowd, amb quadre d’honor i contacte bugbounty@indeed.com.', {
      url: 'https://bugcrowd.com/indeed',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['indeed-security-txt'], 'Hi ha política de divulgació i fitxer security.txt, tot i que el camp «Expires» del fitxer va caducar l’octubre de 2025.'),
  },
  alternatives: [
    {
      app: 'infojobs',
      comparability: 'equivalent',
      rationale: 'Portal d’ocupació amb la mateixa funció al mercat espanyol i responsable establert a la UE.',
    },
    {
      app: 'linkedin',
      comparability: 'partial',
      rationale: 'Serveix per buscar feina, però és sobretot una xarxa professional pública.',
      tradeOffs: 'El perfil és visible per defecte i el tractament publicitari de Microsoft és més extens.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Dues coses mereixen atenció. La primera és la distinció entre tancar el compte i esborrar les dades, que Indeed explica en articles d’ajuda diferents i que molta gent confon. La segona és el desajust entre l’etiqueta de l’App Store, que declara ubicació exacta no vinculada, i la política, que afirma recollir només ubicació aproximada per codi postal. No hem pogut determinar amb seguretat quin és l’estat per defecte de la visibilitat del currículum, perquè la política i el centre d’ajuda diuen coses diferents.',
    openQuestions: [
      'El perfil és cercable per defecte o no? Les fonts oficials es contradiuen.',
      'Per què l’etiqueta declara ubicació exacta si la política diu que només se’n recull d’aproximada?',
      'Quin és el nom i el contacte del delegat de protecció de dades d’Indeed Ireland?',
    ],
  },
}

/* ═══════════════════════════ Zoom Workplace ═══════════════════════════ */
const zoomWorkplace: AppSeed = {
  slug: 'zoom-workplace',
  name: 'Zoom Workplace',
  company: 'zoom-communications',
  categories: ['videoconferencia-i-feina'],
  tagline: 'Sense establiment principal a la UE: l’AEPD hi és plenament competent, i el xifratge d’extrem a extrem existeix però apaga mitja aplicació',
  summary:
    'Zoom va sortir de la crisi de 2020 amb un acord amb la FTC per haver dit durant anys que xifrava d’extrem a extrem quan no ho feia, i amb una llista llarga de certificacions. El xifratge d’extrem a extrem real existeix des de finals de 2020, però activar-lo desactiva la gravació al núvol, la transcripció, les sales de treball i el xat privat. La clàusula de 2023 que permetia entrenar models amb el contingut dels clients es va rectificar i avui la política ho nega sense condicions.',
  platforms: ['ios', 'android', 'web', 'windows', 'macos', 'linux'],
  businessModel: 'freemium',
  jurisdiction: 'Estats Units',
  userBase: 'Centenars de milions de participants en reunions',
  links: {
    website: 'https://www.zoom.com/',
    privacyPolicy: 'https://www.zoom.com/es/trust/privacy/privacy-statement/',
    terms: 'https://www.zoom.com/es/trust/terms/',
    privacyCenter: 'https://trust.zoom.com/',
    appStore: appStore('546505307'),
  },
  accountRequired: f('partial', 'official', ['zoom-privacy-policy'], 'Es pot entrar en una reunió amb un enllaç sense compte, però per convocar-ne cal registrar-se.'),
  openSource: f('no', 'official', ['zoom-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'El contingut d’una reunió és tot el que s’hi diu i s’hi mostra, més les gravacions i les transcripcions. A l’etiqueta de l’App Store, Zoom declara que àudio, vídeo i missatges s’utilitzen per a «anàlisi de dades» i que queden vinculats a la identitat. Quan el compte és de feina o d’escola, qui decideix què s’hi grava no és la persona participant sinó l’administrador.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['zoom-privacy-policy', 'zoom-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['zoom-privacy-policy', 'zoom-app-store'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['zoom-app-store'] }),
    row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['zoom-app-store', 'zoom-privacy-policy'], note: 'L’etiqueta declara les dades d’àudio sota «Análisis de datos», vinculades a la persona.' }),
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['zoom-app-store'], note: 'Vídeo de la reunió, pantalla compartida i adjunts.' }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['zoom-app-store', 'zoom-privacy-policy'], note: 'Xat de la reunió, Team Chat i metadades de Zoom Mail i del calendari.' }),
    row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['zoom-privacy-policy'], note: 'Durada, participants i qualitat de la connexió es registren fins i tot amb xifratge d’extrem a extrem activat.' }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['zoom-app-store'], note: 'L’etiqueta declara ubicació exacta i aproximada sota «Funcionalidad de la app».' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['zoom-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['zoom-app-store', 'zoom-privacy-policy'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['zoom-privacy-policy'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['zoom-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['zoom-app-store'] }),
    row('galetes-i-identificadors-web', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['zoom-privacy-policy'], note: 'Les galetes i l’analítica del web es basen en el consentiment.' }),
    row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['zoom-app-store'], note: 'L’etiqueta no declara cap dada utilitzada per rastrejar.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['zoom-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['zoom-app-store'], 'No es declara cap identificador publicitari.'),
    thirdPartyTrackersPresent: f('partial', 'official', ['zoom-privacy-policy'], 'Hi ha analítica i màrqueting al web, basats en el consentiment; dins del client de reunions no consten.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['zoom-privacy-policy', 'zoom-app-store'], 'L’etiqueta declara correu, nom i identificador d’usuari per a màrqueting del desenvolupador; el contingut de les reunions no s’hi utilitza.'),
    profiling: f('partial', 'official', ['zoom-privacy-policy'], 'Hi ha analítica d’ús i funcions d’AI Companion, però la política no descriu perfilat publicitari sobre el contingut.'),
    aiTraining: f('no', 'official', ['zoom-privacy-policy'], 'La política vigent diu literalment que Zoom no utilitza àudio, vídeo, xat, pantalla compartida, adjunts ni altre contingut de comunicacions del client per entrenar models propis ni de tercers. És la redacció definitiva després de la polèmica de la clàusula 10.4 de 2023, que ja s’havia rectificat l’agost d’aquell any.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['zoom-privacy-policy'], 'Proveïdors de servei, i l’administrador del compte corporatiu, que té accés a la configuració i a les gravacions.'),
    intraGroupSharing: f('yes', 'official', ['zoom-privacy-policy'], 'Filials de Zoom, entre elles Workvivo Limited, que és a més el representant a la UE segons l’article 27 del RGPD.'),
    dataBrokerSales: f('no', 'official', ['zoom-privacy-policy'], 'La política no preveu la venda de dades personals.'),
    internationalTransfers: f('yes', 'official', ['zoom-privacy-policy', 'zoom-gdpr'], 'Clàusules contractuals tipus i participació al Marc de privadesa de dades UE-EUA. Els comptes de pagament poden triar residència de dades a la UE.', { mechanism: 'adequacy' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: f('yes', 'official', ['zoom-transparency-report'], 'Informe semestral de peticions de dades de forces de seguretat i governs, amb desglossament per jurisdicció i tipus.', {
      url: 'https://www.zoom.com/en/trust/transparency/',
    }),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['zoom-privacy-policy'], 'La política es queda en el criteri genèric de necessitat; els terminis concrets que circulen per a Team Chat, AI Companion o suport no els hem pogut confirmar en documentació oficial.'),
    dataAfterDeletion: f('partial', 'official', ['zoom-privacy-policy', 'zoom-delete-account'], 'Es conserva el que exigeixen les obligacions legals i de compliment; no se’n publiquen els terminis.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['zoom-delete-account']),
    selfService: f('partial', 'official', ['zoom-delete-account'], 'Qui és propietari o administrador del compte el pot tancar sol des del web; qui és membre d’un compte corporatiu depèn de l’administrador i no es pot donar de baixa pel seu compte.'),
    difficulty: 'medium',
    requiresSupportContact: false,
    steps: [
      'Cancel·la abans la subscripció de pagament: eliminar el compte no atura la facturació.',
      'Exporta les transcripcions i els resums d’AI Companion que vulguis conservar, perquè es perden.',
      'Inicia sessió a zoom.us i ves a Admin, després a Account Management i a Account Profile.',
      'Al final de la pàgina, tria «Terminate My Account» i confirma-ho.',
    ],
    obstacles:
      'Si el compte el gestiona una empresa o un centre educatiu, la baixa no depèn de la persona usuària. La supressió tampoc no afecta les gravacions que l’organització hagi desat pel seu compte.',
    dataRetained: 'El que exigeixen les obligacions legals i de compliment. Els terminis no es publiquen.',
    sources: ['zoom-delete-account', 'zoom-privacy-policy'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['zoom-privacy-policy'], 'Hi ha eina d’autoservei d’accés, correcció i supressió, i un formulari de privadesa gestionat amb OneTrust. El format de lliurament no es concreta.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['zoom-privacy-policy'], 'Adreça de privadesa i representant a la UE segons l’article 27 del RGPD.', {
      url: 'mailto:privacy@zoom.us',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['zoom-privacy-policy'], 'El màrqueting i les galetes del web depenen del consentiment i es poden retirar.'),
    telemetryOptOut: f('partial', 'official', ['zoom-privacy-policy'], 'Les dades de diagnòstic i de qualitat del servei es tracten per interès legítim i no hi ha cap interruptor per desactivar-les.'),
    granularControls: f('yes', 'official', ['zoom-trust-center'], 'El centre de confiança i el panell d’administració permeten controlar la gravació, l’AI Companion, la residència de dades, el xifratge de les gravacions al núvol i el xifratge d’extrem a extrem. Són controls d’administrador, no de participant.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi recent i independent de patrons foscos a la interfície.'),
  },
  security: {
    e2ee: f('partial', 'official', ['zoom-e2ee-blog', 'zoom-e2ee-rollout'], 'El xifratge d’extrem a extrem existeix des de finals d’octubre de 2020 i és disponible també per als comptes gratuïts prèvia verificació, però no està activat per defecte i, quan s’activa, desactiva la gravació al núvol, la transcripció en directe, les sales de treball, les enquestes i el xat privat. Per defecte el que hi ha és xifratge de transport AES-256 GCM, que no és d’extrem a extrem.', {
      scope: 'partial-optin',
    }),
    transportEncryption: f('yes', 'official', ['zoom-privacy-policy'], 'Xifratge AES-256 GCM per defecte en totes les reunions.'),
    atRestEncryption: f('yes', 'official', ['zoom-trust-center'], 'El centre de confiança documenta el xifratge de les gravacions al núvol i les certificacions que el cobreixen.'),
    mfa: f('yes', 'official', ['zoom-trust-center'], 'Verificació en dos passos amb aplicació d’autenticació o SMS, i inici de sessió únic SAML per a organitzacions.', {
      methods: ['totp', 'sms'],
    }),
    independentAudits: f('yes', 'official', ['zoom-trust-center'], 'SOC 2 de tipus II, ISO/IEC 27001, 27017, 27018 i 27701, HIPAA, HITRUST, FedRAMP, PCI DSS i CSA STAR. L’acord amb la FTC hi va afegir avaluacions independents de seguretat cada dos anys.'),
    bugBounty: f('yes', 'official', ['zoom-hackerone', 'zoom-bug-bounty-2024'], 'Programa públic a HackerOne, amb un programa privat associat; el 2024 hi van participar prop d’un miler d’investigadors.', {
      url: 'https://hackerone.com/zoom',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['zoom-vulnerability-reporting'], 'Hi ha pàgina de comunicació de vulnerabilitats, tot i que zoom.com no publica cap fitxer security.txt.'),
  },
  alternatives: [
    {
      app: 'signal',
      comparability: 'partial',
      rationale: 'Les trucades de grup de Signal són xifrades d’extrem a extrem per defecte i sense metadades d’assistència.',
      tradeOffs: 'No té gravació, ni sales de treball, ni administració corporativa, i el nombre de participants és molt menor.',
    },
    {
      app: 'microsoft-teams',
      comparability: 'equivalent',
      rationale: 'Cobreix la mateixa necessitat de reunions i coordinació d’equips en entorns corporatius.',
      tradeOffs: 'El tractament queda dins de l’ecosistema de Microsoft, amb més integració i més dades creuades.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La troballa jurídica més útil és de competència: Zoom no declara establiment principal a la Unió Europea, només un representant de l’article 27 a Irlanda, i l’autoritat neerlandesa ja ha dit que no n’és l’autoritat principal. Per tant no hi ha finestreta única i l’AEPD és plenament competent per a les reclamacions des d’Espanya. Sobre l’entrenament de models, la clàusula 10.4 de 2023 es va rectificar en pocs dies i la redacció actual és una negativa sense condicions, més forta que la de l’agost de 2023.',
    openQuestions: [
      'Quins són els terminis oficials de conservació de Team Chat, d’AI Companion i dels tiquets de suport?',
      'L’abast de les certificacions cobreix també la residència de dades a la UE?',
    ],
  },
}

/* ═══════════════════════════ JOB TODAY ═══════════════════════════ */
const jobToday: AppSeed = {
  slug: 'job-today',
  name: 'JOB TODAY',
  company: 'jobtoday',
  categories: ['feina-i-ocupacio'],
  tagline: 'La política enllaçada des de l’App Store espanyol encara es basa en la LOPD de 1999, derogada',
  summary:
    'JOB TODAY posa en contacte candidats i empreses d’hostaleria, comerç i serveis amb un xat directe i ofertes per proximitat. Hi conviuen dues polítiques de privadesa diferents: la versió espanyola, que és la que enllaça la fitxa de l’App Store, encara es fonamenta en la LOPD 15/1999 i el seu reglament, derogats des de 2018. És, a més, l’única aplicació d’aquest lot que declara rastreig entre aplicacions i ubicació exacta alhora.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Luxemburg',
  userBase: 'Declara més de 100 milions de candidats i 400.000 empreses a Espanya, el Regne Unit i els Estats Units',
  links: {
    website: 'https://jobtoday.com/es/',
    privacyPolicy: 'https://jobtoday.com/es/legal/privacy',
    terms: 'https://jobtoday.com/gb/legal/tos',
    appStore: appStore('981163277'),
  },
  accountRequired: f('yes', 'official', ['jobtoday-privacy-policy-gb'], 'Cal compte per veure ofertes personalitzades i per escriure a les empreses.'),
  openSource: f('no', 'official', ['jobtoday-privacy-policy-gb'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Un perfil de JOB TODAY porta nom, data de naixement, fotografia o vídeo, historial laboral i coordenades GPS. Les converses amb les empreses són el nucli del producte i es monitoritzen per prevenir abusos. Tot plegat, en una aplicació que declara a Apple que les dades d’interacció es poden fer servir per rastrejar la persona en aplicacions i webs d’altres empreses.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['jobtoday-privacy-policy-gb', 'jobtoday-app-store'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['jobtoday-privacy-policy-gb'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['jobtoday-privacy-policy-gb', 'jobtoday-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['jobtoday-app-store'] }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['jobtoday-privacy-policy-gb'] }),
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['jobtoday-privacy-policy-gb', 'jobtoday-app-store'], note: 'El perfil admet fotografia i vídeo de presentació, que veuen les empreses.' }),
    row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['jobtoday-privacy-policy-gb'] }),
    row('nivell-formatiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['jobtoday-privacy-policy-gb'] }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts', 'atencio-a-lusuari'], sources: ['jobtoday-privacy-policy-gb'], note: 'El xat amb les empreses es monitoritza per prevenir abús i brossa, i es conserva per a suport. Es pot esborrar una conversa concreta.' }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts', 'mesura-i-analisi-dus'], sources: ['jobtoday-privacy-policy-gb', 'jobtoday-app-store'], note: 'Coordenades GPS amb consentiment del sistema; si no, la ubicació s’infereix per adreça IP. L’etiqueta la declara per a tres finalitats diferents.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'recomanacions-algoritmiques'], sources: ['jobtoday-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['jobtoday-privacy-policy-gb', 'jobtoday-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['jobtoday-privacy-policy-gb'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['jobtoday-app-store'], note: 'És l’única categoria declarada com a utilitzada per rastrejar en aplicacions i webs d’altres empreses.' }),
    row('dades-de-pagament', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['jobtoday-privacy-policy-gb'], note: 'Les subscripcions es processen amb Stripe.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['jobtoday-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['jobtoday-app-store'], 'L’etiqueta declara la interacció amb el producte com a dada utilitzada per rastrejar la persona en aplicacions i webs d’altres empreses.'),
    advertisingIdentifiers: unknown('L’etiqueta no declara l’identificador publicitari, tot i que sí que declara rastreig.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['jobtoday-privacy-policy-gb'], 'Proveïdors nominats: Stripe, Google, Amazon i Intercom, més plataformes d’analítica.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['jobtoday-app-store', 'jobtoday-privacy-policy-gb'], 'La política parla de màrqueting amb consentiment quan cal, i l’etiqueta declara rastreig; no hi ha cap document que expliqui el destí publicitari concret.'),
    profiling: f('yes', 'official', ['jobtoday-privacy-policy-gb'], 'L’aparellament entre candidats i ofertes es fa amb mètodes algorítmics i no algorítmics.'),
    aiTraining: unknown('Cap de les dues polítiques en parla.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['jobtoday-privacy-policy-gb'], 'Les empreses que publiquen ofertes, i els proveïdors Stripe, Google, Amazon i Intercom. Eventualment, un comprador del negoci.'),
    intraGroupSharing: f('partial', 'official', ['jobtoday-privacy-policy-es'], 'Hi ha dues entitats implicades, JobToday S.A. a Luxemburg i JOB TODAY SPAIN, S.L. a Barcelona, cadascuna responsable en una de les dues polítiques; la relació entre totes dues no s’explica.'),
    dataBrokerSales: f('no', 'official', ['jobtoday-privacy-policy-gb'], 'La política declara expressament que no venen dades personals a tercers.'),
    internationalTransfers: f('yes', 'official', ['jobtoday-privacy-policy-gb'], 'Països amb decisió d’adequació o clàusules contractuals tipus.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['jobtoday-privacy-policy-gb'], 'Cap de les dues polítiques dona terminis concrets de conservació.'),
    dataAfterDeletion: unknown('No es publica què es conserva per obligació legal després d’eliminar el compte.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['jobtoday-delete-jobseeker', 'jobtoday-delete-employer']),
    selfService: f('yes', 'official', ['jobtoday-delete-jobseeker', 'jobtoday-delete-employer'], 'L’eliminació es fa des de la mateixa aplicació, amb articles d’ajuda separats per a candidats i per a empreses, i es completa en 48 hores.'),
    difficulty: 'easy',
    waitingPeriodDays: 2,
    requiresSupportContact: false,
    steps: [
      'Obre el teu perfil a l’aplicació i entra a la configuració.',
      'Tria l’opció d’eliminar el compte i confirma-ho.',
      'L’esborrat es completa en 48 hores i és irreversible: es perden el perfil, l’historial de candidatures i tots els xats.',
      'Si no hi pots accedir, escriu a support@jobtoday.com.',
    ],
    obstacles: 'L’aplicació proposa com a alternativa mantenir el compte sense subscripció activa, en lloc d’eliminar-lo.',
    dataRetained: 'No es concreta.',
    sources: ['jobtoday-delete-jobseeker', 'jobtoday-delete-employer'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['jobtoday-privacy-policy-gb'], 'La portabilitat es reconeix en un «format estructurat, d’ús comú i llegible per màquina», però no hi ha cap eina ni formulari d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['jobtoday-privacy-policy-gb'], 'És l’única aplicació d’aquest lot que publica el nom del delegat de protecció de dades.', {
      url: 'mailto:privacy@jobtoday.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: unknown('No hem trobat cap control de publicitat personalitzada dins de l’aplicació; l’únic fre disponible és la transparència del seguiment d’apps del sistema.'),
    telemetryOptOut: unknown('No hem trobat cap control de telemetria.'),
    granularControls: f('partial', 'official', ['jobtoday-delete-chat'], 'Es pot esborrar una conversa concreta amb una empresa, però no hem trobat controls de visibilitat del perfil.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown('No hem trobat cap anàlisi independent de patrons foscos.'),
  },
  security: {
    e2ee: f('no', 'official', ['jobtoday-privacy-policy-gb'], 'El xat es monitoritza per prevenir abús i brossa, cosa que exclou el xifratge d’extrem a extrem.'),
    transportEncryption: f('partial', 'official', ['jobtoday-privacy-policy-gb'], 'La política parla de «SSL o protocols criptogràfics equivalents», una redacció antiga i genèrica.'),
    atRestEncryption: unknown('La política només parla de «servidors segurs», sense cap compromís de xifratge en repòs.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos documentada.'),
    independentAudits: unknown('No consten certificacions ni auditories publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt ni cap política de divulgació.'),
  },
  alternatives: [
    {
      app: 'infojobs',
      comparability: 'equivalent',
      rationale: 'Cobreix la mateixa necessitat al mercat espanyol amb un responsable establert a la UE i una política vigent.',
    },
    {
      app: 'jobandtalent',
      comparability: 'partial',
      rationale: 'També s’adreça a perfils de serveis i logística, amb contractació directa.',
      tradeOffs: 'Actua com a empresa de treball temporal, de manera que la relació laboral hi és diferent.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La troballa central és documental i verificable: la política que la fitxa de l’App Store espanyol enllaça està datada el 13 de febrer de 2019 i es fonamenta en la LOPD 15/1999 i el Reial decret 1720/2007, tots dos desplaçats pel RGPD i la LOPDGDD des de 2018. La versió britànica, de maig de 2018, sí que és una política del RGPD, però tampoc no dona cap termini de conservació. En canvi, l’esborrat del compte és autoservei, amb article d’ajuda i termini de 48 hores, cosa que aquí és excepcional.',
    openQuestions: [
      'Quina és l’autoritat de control principal? Amb responsable a Luxemburg i filial responsable a Espanya, no hi ha designació explícita.',
      'Quant de temps es conserven els missatges del xat amb les empreses?',
      'Hi ha algun control de visibilitat del perfil davant de les empreses?',
    ],
  },
}

export const lot: SeedLot = {
  companies: [
    {
      slug: 'match-app',
      name: 'Matchapp',
      legalName: 'Match App, S.L.',
      description:
        'Empresa barcelonina que publica Matchapp, una aplicació per organitzar partits de futbol entre amics. Apareix amb tres denominacions segons la font: «just team up SL» a l’App Store, «NVDO Smart Tech SL» a Google Play i «Match App, S.L.» als documents legals, totes tres amb el mateix telèfon de contacte.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      primaryRevenueModel: 'advertising',
      website: 'https://matchapp.es/',
      productDomains: ['matchapp.es'],
      privacyContact: 'soporte@matchapp.es',
    },
    {
      slug: 'fanalysis-limited',
      name: 'Fanalysis',
      legalName: 'Fanalysis Limited',
      description:
        'Societat britànica (número 09072105) que gestiona una plataforma de valoracions de jugadors fetes per aficionats, amb acord de continguts amb Sky Sports. Va néixer el 2014 com a A Right Hoot Productions Limited i va canviar de nom el 2023.',
      headquartersCountry: 'GB',
      leadSupervisoryAuthority: 'Information Commissioner’s Office (Regne Unit)',
      ownership: 'private',
      foundedYear: 2014,
      primaryRevenueModel: 'freemium',
      website: 'https://www.fanalysis.com/',
      productDomains: ['fanalysis.com', 'fanalysis.co.uk'],
      privacyContact: 'hello@fanalysis.com',
    },
    {
      slug: 'social-cloud',
      name: 'Sporttia',
      legalName: 'Social Cloud, S.L.',
      description:
        'Empresa de Lebrija (Sevilla) que desenvolupa el programari de gestió d’instal·lacions esportives Sporttia, utilitzat per més de quatre-cents centres, molts d’ells municipals, amb aplicació per a la ciutadania.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://sporttia.com/',
      productDomains: ['sporttia.com'],
      privacyContact: 'info@sporttia.com',
    },
    {
      slug: 'livesport',
      name: 'Livesport',
      legalName: 'Livesport s.r.o.',
      description:
        'Empresa txeca de mitjans esportius, propietària de Flashscore, Livesport i Soccerway. Es finança amb publicitat programàtica i amb una subscripció sense anuncis.',
      headquartersCountry: 'CZ',
      euEstablishment: 'CZ',
      leadSupervisoryAuthority: 'Úřad pro ochranu osobních údajů (República Txeca)',
      ownership: 'private',
      foundedYear: 2006,
      primaryRevenueModel: 'advertising',
      website: 'https://www.livesport.eu/',
      productDomains: ['flashscore.com', 'flashscore.es', 'livesport.eu', 'soccerway.com'],
      privacyContact: 'dpo@livesport.eu',
    },
    {
      slug: 'runnerwellness',
      name: 'RunnerPro',
      legalName: 'Runnerwellness, S.L.',
      description:
        'Petita empresa de Roquetas de Mar (Almeria), constituïda el 2023, que ofereix plans d’entrenament de running per subscripció amb seguiment d’un entrenador i integració amb Apple Health, Garmin i Strava.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      foundedYear: 2023,
      primaryRevenueModel: 'subscription',
      website: 'https://runnerpro.app/',
      productDomains: ['runnerpro.app'],
      privacyContact: 'hola@runnerpro.app',
    },
    {
      slug: 'entain',
      name: 'Entain',
      legalName: 'Entain plc',
      description:
        'Grup britànic de joc en línia cotitzat a la borsa de Londres, propietari de bwin, Ladbrokes, Coral, Sportingbet i partypoker, entre altres marques.',
      headquartersCountry: 'GB',
      ownership: 'public',
      primaryRevenueModel: 'commerce',
      website: 'https://www.entaingroup.com/',
      productDomains: ['bwin.es', 'bwin.com', 'entaingroup.com'],
    },
    {
      slug: 'electraworks-ceuta',
      name: 'ElectraWorks Ceuta',
      legalName: 'ElectraWorks (Ceuta), S.A.',
      parent: 'entain',
      description:
        'Filial espanyola d’Entain amb seu a Ceuta, titular de les llicències de la Dirección General de Ordenación del Juego i responsable del tractament de les dades de bwin a Espanya. Fins al 2022 l’establiment principal era a Malta.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'subsidiary',
      primaryRevenueModel: 'commerce',
      website: 'https://sports.bwin.es/',
      privacyContact: 'privacy@bwin.es',
    },
    {
      slug: 'recruit-holdings',
      name: 'Recruit Holdings',
      legalName: 'Recruit Holdings Co., Ltd.',
      description:
        'Grup japonès cotitzat, propietari d’Indeed, Glassdoor, SimplyHired i Resume.com, entre altres marques de recursos humans.',
      headquartersCountry: 'JP',
      ownership: 'public',
      primaryRevenueModel: 'mixed',
      website: 'https://recruit-holdings.com/',
      productDomains: ['indeed.com', 'glassdoor.com', 'hrtechprivacy.com'],
    },
    {
      slug: 'indeed-ireland',
      name: 'Indeed',
      legalName: 'Indeed Ireland Operations Limited',
      parent: 'recruit-holdings',
      description:
        'Entitat irlandesa responsable del tractament de les dades d’Indeed a l’Espai Econòmic Europeu, el Regne Unit i Suïssa. El portal cobra els ocupadors per publicar ofertes i per cercar currículums.',
      headquartersCountry: 'IE',
      euEstablishment: 'IE',
      leadSupervisoryAuthority: 'Data Protection Commission (Irlanda)',
      ownership: 'subsidiary',
      primaryRevenueModel: 'advertising',
      website: 'https://es.indeed.com/',
      privacyContact: 'privacy-dept@indeed.com',
    },
    {
      slug: 'zoom-communications',
      name: 'Zoom',
      legalName: 'Zoom Communications, Inc.',
      description:
        'Empresa californiana de videoconferència i comunicació de feina, fundada el 2011. A la Unió Europea no declara cap establiment principal: només hi té el representant de l’article 27 del RGPD, la seva filial irlandesa Workvivo Limited.',
      headquartersCountry: 'US',
      ownership: 'public',
      foundedYear: 2011,
      primaryRevenueModel: 'subscription',
      website: 'https://www.zoom.com/',
      productDomains: ['zoom.us', 'zoom.com'],
      privacyContact: 'privacy@zoom.us',
    },
    {
      slug: 'jobtoday',
      name: 'JOB TODAY',
      legalName: 'JobToday S.A.',
      description:
        'Empresa fundada el 2015 amb domicili social a Luxemburg i operació a Barcelona a través de JOB TODAY SPAIN, S.L. Marketplace mòbil d’ocupació per a perfils d’hostaleria, comerç i serveis.',
      headquartersCountry: 'LU',
      euEstablishment: 'LU',
      ownership: 'private',
      foundedYear: 2015,
      primaryRevenueModel: 'freemium',
      website: 'https://jobtoday.com/es/',
      productDomains: ['jobtoday.com'],
      privacyContact: 'privacy@jobtoday.com',
    },
  ],
  sources: [
    /* ── Matchapp ── */
    s('matchapp-app-store', 'Matchapp — App Store (España)', 'https://apps.apple.com/es/app/id907431871', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: dades de contacte, identificadors i dades d’ús utilitzades per rastrejar, amb publicitat de tercers i màrqueting del desenvolupador.',
    }),
    s('matchapp-terms', 'Terms — Matchapp', 'https://matchapp.es/terms/', 'Match App, S.L.', 'terms', 'primary', {
      language: 'es',
      summary: 'Document que la fitxa de l’App Store declara com a política de privadesa. En realitat és un avís legal del web i la part de protecció de dades només cobreix el formulari de contacte.',
    }),
    s('matchapp-conditions', 'Términos y condiciones generales — Matchapp', 'https://matchapp.es/conditions/', 'Match App, S.L.', 'terms', 'primary', {
      language: 'es',
      summary: 'Condicions d’ús: la cancel·lació del compte s’ha de demanar per correu a soporte@matchapp.es i s’adverteix que no es garanteix la invulnerabilitat de l’aplicació.',
    }),
    s('matchapp-play-data-safety', 'Matchapp — Seguridad de los datos', 'https://play.google.com/store/apps/datasafety?id=com.justteamup.matchapp', 'Google Play', 'app-store', 'primary', {
      language: 'es',
      summary: 'Declaració a Google Play: nom, correu i identificadors per a la gestió del compte, xifratge en trànsit i «no es comparteixen dades amb tercers», cosa que contradiu l’etiqueta de l’App Store.',
    }),
    /* ── Fanalysis ── */
    s('fanalysis-privacy-policy', 'Política de Privacidad de Fanalysis', 'https://www.fanalysis.com/es/politica-de-privacidad', 'Fanalysis Limited', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de juny de 2026: llista nominal d’encarregats (OpenAI, AWS, AppsFlyer, Google, GetStream, Snowflake, OneSignal i Yoti), terminis per categoria i mecanismes de transferència detallats.',
    }),
    s('fanalysis-app-store', 'Fanalysis - Opinión de fans — App Store (España)', 'https://apps.apple.com/es/app/id6749045838', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors i dades d’ús utilitzats per rastrejar. No declara cap dada biomètrica.',
    }),
    s('fanalysis-faq', 'FAQ — App & Community', 'https://www.fanalysis.com/faq', 'Fanalysis Limited', 'support-doc', 'primary', {
      summary: 'Preguntes freqüents: l’eliminació del compte es demana per correu des de l’adreça de registre, amb verificació pel número de telèfon.',
    }),
    /* ── Sporttia ── */
    s('sporttia-privacy-policy', 'Política de Privacidad | Sporttia', 'https://sporttia.com/politica-de-privacidad', 'Social Cloud, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política genèrica del web corporatiu: no descriu reserves, pagaments, ubicació ni control d’accés, nega les transferències internacionals i no dona terminis.',
    }),
    s('sporttia-app-store', 'Sporttia - Reserva tu deporte — App Store (España)', 'https://apps.apple.com/es/app/id6744922343', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: cap dada utilitzada per rastrejar; contacte i identificador vinculats, i ubicació exacta i informació de pagament com a dades no vinculades.',
    }),
    s('sporttia-play-data-safety', 'Sporttia - Reserva tu deporte — Seguridad de los datos', 'https://play.google.com/store/apps/datasafety?id=com.sporttia.app', 'Google Play', 'app-store', 'primary', {
      language: 'es',
      summary: 'Declaració a Google Play: informació personal, financera i missatges; xifratge en trànsit i possibilitat de demanar l’eliminació de les dades. Declara missatges, que l’etiqueta d’Apple no recull.',
    }),
    s('sporttia-cookies', 'Política de Cookies | Sporttia', 'https://sporttia.com/cookies', 'Social Cloud, S.L.', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Panell de consentiment amb quatre categories i botó de rebuig; identifica galetes de Google AdSense, Google Ads i Stripe al web corporatiu.',
    }),
    s('sporttia-ens', 'Certificación ENS Nivel Medio | Sporttia', 'https://sporttia.com/certificacion-ens-nivel-medio', 'Social Cloud, S.L.', 'audit', 'primary', {
      language: 'es',
      summary: 'Pàgina que declara la certificació de l’Esquema Nacional de Seguretat de nivell mitjà. El certificat s’allotja a Google Drive i no n’hem pogut verificar l’entitat emissora, l’abast ni la vigència.',
    }),
    s('sporttia-integracions', 'Integraciones y sistemas compatibles | Sporttia', 'https://sporttia.com/integraciones', 'Social Cloud, S.L.', 'technical-doc', 'primary', {
      language: 'es',
      summary: 'Llista de passarel·les de pagament integrades: Redsys, Stripe, Paycomet, CECA, Sipay i ZityCard, a elecció de cada centre esportiu.',
    }),
    s('sporttia-play-user-app', 'Sporttia — aplicació web per a la ciutadania', 'https://play.sporttia.com/', 'Social Cloud, S.L.', 'technical-doc', 'primary', {
      language: 'es',
      summary: 'Aplicació web on hem verificat el botó «Eliminar cuenta» del perfil, amb un diàleg que avisa que l’acció és definitiva, i un flux de verificació en dos passos amb codi de sis xifres.',
    }),
    /* ── Flashscore ── */
    s('flashscore-privacy-policy', 'Política de privacidad — Livesport', 'https://www.livesport.eu/privacy-policy/es/', 'Livesport s.r.o.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de maig de 2025: bases legals per finalitat, terminis numèrics per categoria (un mes, quatre anys, cinc anys, tres anys d’inactivitat) i delegat de protecció de dades identificat.',
    }),
    s('flashscore-third-parties', 'Third parties — Flashscore', 'https://www.flashscore.com/third-parties', 'Livesport s.r.o.', 'privacy-center', 'primary', {
      summary: 'Llista pública i nominal de dinou socis publicitaris i d’analítica, entre ells Google, Criteo, Index Exchange, Magnite, Xandr, OpenX, PubMatic, InMobi, A9.com i AppsFlyer.',
    }),
    s('flashscore-app-store', 'Flashscore: Resultados en vivo — App Store (España)', 'https://apps.apple.com/es/app/id766443283', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors utilitzats per rastrejar; compres, contacte, contingut i identificadors vinculats; ubicació i dades d’ús no vinculades.',
    }),
    /* ── RunnerPro ── */
    s('runnerpro-privacy-policy', 'Política de privacidad — RunnerPro', 'https://runnerpro.app/policies/privacy-policy', 'Runnerwellness, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política d’agost de 2026: consentiment explícit de l’article 9.2.a per a les dades de salut d’Apple Health, Health Connect, Garmin i Strava; no identifica la raó social responsable ni cap delegat de protecció de dades.',
    }),
    s('runnerpro-app-store', 'RunnerPro: Entrenador Running — App Store (España)', 'https://apps.apple.com/es/app/id6474573887', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa mínima: cap dada utilitzada per rastrejar ni vinculada, només dades d’ús i diagnòstics no vinculats. L’enllaç de privadesa que declara la fitxa retorna un error.',
    }),
    /* ── bwin ── */
    s('bwin-privacy-policy', 'Aviso de privacidad del cliente — bwin', 'https://help.bwin.es/es/general-information/security/privacy-policy', 'ElectraWorks (Ceuta), S.A.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de setembre de 2025: verificació d’identitat amb Jumio, monitoratge de joc segur, compartició amb la DGOJ i amb les bases d’autoexclusió, i conservació de deu anys des del tancament del compte.',
    }),
    s('bwin-app-store', 'bwin Apuestas Deportivas — App Store (España)', 'https://apps.apple.com/es/app/id803817777', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: contingut de l’usuari utilitzat per rastrejar; informació financera, contacte, ubicació, cerques i identificadors vinculats a la persona.',
    }),
    s('bwin-aepd-2023', 'Resolución de terminación por pago voluntario, EXP202306268 (PS/00212/2023)', 'https://www.aepd.es/documento/ps-00212-2023.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      summary: 'L’AEPD es declara autoritat principal després del trasllat de l’establiment de Malta a Ceuta i sanciona ElectraWorks per infracció de l’article 13 del RGPD arran d’una petició de supressió resposta amb el termini de deu anys.',
    }),
    s('bwin-dgoj-2025', 'Consumo sanciona a 26 operadores de juego por infracciones graves', 'https://www.ordenacionjuego.es/en/node/3243', 'Dirección General de Ordenación del Juego', 'regulator', 'authority', {
      language: 'es',
      summary: 'Tanda de sancions de novembre de 2025; ElectraWorks Ceuta rep 512.000 euros per permetre l’accés al joc a persones que ho tenien prohibit i per sistemes tècnics no homologats.',
    }),
    s('bwin-moncloa-2025', 'Consumo sanciona a 26 operadores de juego con más de 3 millones de euros', 'https://www.lamoncloa.gob.es/serviciosdeprensa/notasprensa/derechos-sociales-consumo-agenda-2030/paginas/2025/251125-sancion-operadores-juego.aspx', 'La Moncloa', 'regulator', 'authority', {
      language: 'es',
      summary: 'Nota de premsa oficial del 25 de novembre de 2025 amb el detall de les sancions i els imports per operador.',
    }),
    s('bwin-entain-sustainability-2025', 'Sustainability at Entain — Annual Report 2025', 'https://www.entaingroup.com/annualreport2025/documents/Entain_Annual-Report_2025_Sustainability.pdf', 'Entain plc', 'transparency-report', 'primary', {
      summary: 'Apartat de sostenibilitat de l’informe anual, amb les mètriques de cobertura de la certificació ISO 27001 del grup. No és un informe de peticions d’autoritats.',
    }),
    /* ── Indeed ── */
    s('indeed-privacy-policy', 'Indeed Privacy Policy', 'https://hrtechprivacy.com/es/brands/indeed', 'Indeed / Recruit Holdings', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de setembre de 2026: Indeed Ireland Operations com a responsable per a l’EEE, bases legals per finalitat, aparellament amb models d’intel·ligència artificial i conservació de deu anys per a les comunicacions.',
    }),
    s('indeed-app-store', 'Indeed: Búsqueda de empleo — App Store (España)', 'https://apps.apple.com/es/app/id309735670', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: cap dada declarada per rastrejar; contacte, historial de cerca i de navegació, missatges i ubicació aproximada vinculats, i ubicació exacta com a dada no vinculada.',
    }),
    s('indeed-close-account', 'Closing an Account', 'https://www.indeed.com/help/job-seekers/articles/204488880-closing-an-account', 'Indeed', 'support-doc', 'primary', {
      summary: 'Tancar el compte treu l’accés a ofertes desades, historial i preferències, però les dades continuen als servidors d’Indeed.',
    }),
    s('indeed-delete-data', 'Requesting or Deleting Your Data', 'https://www.indeed.com/help/job-seekers/articles/10652026126605-requesting-or-deleting-your-data', 'Indeed', 'support-doc', 'primary', {
      summary: 'El formulari de sol·licitud de dades personals permet demanar-ne l’eliminació efectiva, amb un termini aproximat d’un mes.',
    }),
    s('indeed-profile-privacy', 'Profile Settings Menu: Managing Your Privacy', 'https://support.indeed.com/hc/en-us/articles/204524164-Profile-Settings-Menu-Managing-Your-Privacy', 'Indeed', 'support-doc', 'primary', {
      summary: 'Explica els dos estats de visibilitat del perfil i què implica que sigui cercable per als ocupadors.',
    }),
    s('indeed-security-txt', 'security.txt — Indeed', 'https://hrtechprivacy.com/.well-known/security.txt', 'Indeed', 'technical-doc', 'primary', {
      summary: 'Fitxer security.txt amb la política de divulgació, el programa de Bugcrowd i el contacte bugbounty@indeed.com. El camp «Expires» va caducar l’octubre de 2025.',
    }),
    s('indeed-bugcrowd', 'Indeed Bug Bounty Program', 'https://bugcrowd.com/indeed', 'Bugcrowd', 'technical-doc', 'primary', {
      summary: 'Programa públic de recompenses per vulnerabilitats d’Indeed.',
    }),
    s('indeed-2fa', 'What is two-factor authentication?', 'https://indeedinc.my.site.com/employerSupport1/s/article/What-is-two-factor-authentication', 'Indeed', 'support-doc', 'primary', {
      summary: 'Verificació en dos passos amb codi d’un sol ús per SMS, documentada per als comptes d’ocupador.',
    }),
    s('indeed-transparency-report', 'H1 2025 Indeed Transparency Report', 'https://www.indeed.com/legal/transparency-report-hub/h12025-indeed-transparency-report-copy', 'Indeed', 'transparency-report', 'primary', {
      summary: 'Informe semestral de peticions governamentals i de particulars.',
    }),
    s('indeed-dsa-report', 'Digital Services Act Transparency Report', 'https://www.indeed.com/legal/digital-services-act-transparency-report', 'Indeed', 'transparency-report', 'primary', {
      summary: 'Informe de transparència exigit pel Reglament de serveis digitals de la Unió Europea.',
    }),
    /* ── Zoom ── */
    s('zoom-privacy-policy', 'Declaración de privacidad de Zoom', 'https://www.zoom.com/es/trust/privacy/privacy-statement/', 'Zoom Communications, Inc.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de setembre de 2026: nega expressament l’ús de contingut de comunicacions dels clients per entrenar models propis o de tercers, i descriu les transferències amb clàusules tipus i el Marc de privadesa UE-EUA.',
    }),
    s('zoom-app-store', 'Zoom Workplace — App Store (España)', 'https://apps.apple.com/es/app/id546505307', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: cap dada declarada per rastrejar, però àudio, vídeo, missatges i ubicació exacta figuren com a dades vinculades a la persona, i el contingut apareix sota «Análisis de datos».',
    }),
    s('zoom-gdpr', 'European Union’s General Data Protection Regulation (GDPR)', 'https://www.zoom.com/en/trust/gdpr/', 'Zoom Communications, Inc.', 'privacy-center', 'primary', {
      summary: 'Pàgina de compliment del RGPD, amb el representant de l’article 27, l’addenda global de tractament i les avaluacions d’impacte de transferències.',
    }),
    s('zoom-trust-center', 'Zoom Trust Center', 'https://trust.zoom.com/', 'Zoom Communications, Inc.', 'technical-doc', 'primary', {
      summary: 'Centre de confiança amb les certificacions (SOC 2 de tipus II, ISO/IEC 27001, 27017, 27018 i 27701, HIPAA, FedRAMP, PCI DSS), els controls d’administrador i la residència de dades.',
    }),
    s('zoom-transparency-report', 'Zoom Transparency Report', 'https://www.zoom.com/en/trust/transparency/', 'Zoom Communications, Inc.', 'transparency-report', 'primary', {
      summary: 'Informe semestral de peticions de dades d’usuari fetes per forces de seguretat i governs.',
    }),
    s('zoom-e2ee-blog', 'End-to-End Encryption Update', 'https://www.zoom.com/en/blog/end-to-end-encryption-update/', 'Zoom Communications, Inc.', 'technical-doc', 'primary', {
      summary: 'Anunci de l’obertura del xifratge d’extrem a extrem també als comptes gratuïts, prèvia verificació.',
    }),
    s('zoom-e2ee-rollout', 'Zoom Rolling Out End-to-End Encryption Offering', 'https://www.zoom.com/en/blog/zoom-rolling-out-end-to-end-encryption-offering/', 'Zoom Communications, Inc.', 'technical-doc', 'primary', {
      summary: 'Desplegament d’octubre de 2020 i llista de funcions que queden desactivades quan s’activa el xifratge d’extrem a extrem.',
    }),
    s('zoom-hackerone', 'Zoom — Bug Bounty Program', 'https://hackerone.com/zoom', 'HackerOne', 'technical-doc', 'primary', {
      summary: 'Programa públic de recompenses per vulnerabilitats de Zoom.',
    }),
    s('zoom-bug-bounty-2024', 'Zoom’s security journey: our 2024 bug bounty year in review', 'https://www.zoom.com/en/blog/bug-bounty-program/', 'Zoom Communications, Inc.', 'technical-doc', 'primary', {
      summary: 'Balanç del programa de recompenses del 2024, amb prop d’un miler d’investigadors participants.',
    }),
    s('zoom-vulnerability-reporting', 'Reporting a Security Vulnerability to Zoom', 'https://www.zoom.com/en/trust/reporting-vulnerability/', 'Zoom Communications, Inc.', 'technical-doc', 'primary', {
      summary: 'Canal oficial de comunicació de vulnerabilitats.',
    }),
    s('zoom-delete-account', 'Zoom — terminating your account', 'https://www.zoom.com/es/trust/terms/', 'Zoom Communications, Inc.', 'terms', 'primary', {
      language: 'es',
      summary: 'Condicions del servei, que emmarquen la terminació del compte des del perfil d’administració i la seva relació amb la facturació.',
    }),
    s('zoom-ftc-2021', 'Zoom Video Communications, Inc., In the Matter of (192-3167)', 'https://www.ftc.gov/legal-library/browse/cases-proceedings/192-3167-zoom-video-communications-inc-matter', 'Federal Trade Commission', 'regulator', 'authority', {
      summary: 'Expedient i ordre final de gener de 2021 sobre les afirmacions enganyoses de xifratge d’extrem a extrem i el servidor web ZoomOpener a macOS.',
    }),
    s('zoom-ftc-blog-2020', 'Zooming in on Zoom’s unfair and deceptive security practices', 'https://www.ftc.gov/business-guidance/blog/2020/11/zooming-zooms-unfair-deceptive-security-practices-more-about-ftc-settlement', 'Federal Trade Commission', 'regulator', 'authority', {
      summary: 'Explicació de l’acord: Zoom afirmava xifrar d’extrem a extrem des de 2016 quan conservava les claus, i desava gravacions al núvol sense xifrar fins a dos mesos.',
    }),
    s('zoom-hamburg-2021', 'Hamburg DPA warns Zoom incompatible with GDPR', 'https://www.complianceweek.com/gdpr/hamburg-dpa-warns-zoom-incompatible-with-gdpr/30705.article', 'Compliance Week', 'press', 'secondary', {
      summary: 'Advertiment formal de l’autoritat d’Hamburg a la Cancelleria del Senat, l’agost de 2021, per l’ús de Zoom i les transferències als Estats Units després de Schrems II.',
    }),
    s('zoom-clausula-104-2023', 'Zoom knots itself a legal tangle over use of customer data for training AI models', 'https://techcrunch.com/2023/08/08/zoom-data-mining-for-ai-terms-gdpr-eprivacy/', 'TechCrunch', 'press', 'secondary', {
      summary: 'Anàlisi de la clàusula 10.4 dels termes de servei de 2023, que permetia entrenar models amb contingut de clients, i del seu conflicte amb el RGPD i l’ePrivacy.',
    }),
    /* ── JOB TODAY ── */
    s('jobtoday-privacy-policy-es', 'Política de privacidad — JOB TODAY', 'https://jobtoday.com/es/legal/privacy', 'JOB TODAY SPAIN, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Versió espanyola datada el 13 de febrer de 2019 i encara fonamentada en la LOPD 15/1999 i el Reial decret 1720/2007, tots dos derogats. És la que enllaça la fitxa de l’App Store espanyol.',
    }),
    s('jobtoday-privacy-policy-gb', 'Privacy Policy — JOB TODAY', 'https://jobtoday.com/gb/legal/privacy', 'JobToday S.A.', 'privacy-policy', 'primary', {
      summary: 'Versió global de maig de 2018, orientada al RGPD: bases legals, proveïdors nominats (Stripe, Google, Amazon i Intercom), coordenades GPS, aparellament algorítmic i delegat de protecció de dades amb nom. No dona terminis de conservació.',
    }),
    s('jobtoday-app-store', 'JOB TODAY: Ofertas de Empleo — App Store (España)', 'https://apps.apple.com/es/app/id981163277', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: la interacció amb el producte es declara com a dada utilitzada per rastrejar, i la ubicació exacta apareix vinculada a la persona en tres finalitats diferents.',
    }),
    s('jobtoday-delete-jobseeker', 'How can I deactivate my jobseeker account from the app?', 'https://help.jobtoday.com/en/articles/7946711', 'JOB TODAY', 'support-doc', 'primary', {
      summary: 'Passos per eliminar el compte de candidat des de l’aplicació, amb esborrat complet en 48 hores.',
    }),
    s('jobtoday-delete-employer', 'How can I deactivate my employer account?', 'https://help.jobtoday.com/en/articles/8011089', 'JOB TODAY', 'support-doc', 'primary', {
      summary: 'Passos per eliminar el compte d’empresa des de Perfil, Configuració i Eliminar compte.',
    }),
    s('jobtoday-delete-chat', 'How can I delete a chat with an employer?', 'https://help.jobtoday.com/en/articles/8058221', 'JOB TODAY', 'support-doc', 'primary', {
      summary: 'Es pot esborrar una conversa concreta amb una empresa des de la mateixa aplicació.',
    }),
  ],
  apps: [matchapp, fanalysis, sporttia, flashscore, runnerpro, bwin, indeed, zoomWorkplace, jobToday],
  incidents: [
    {
      slug: 'bwin-aepd-informacio-2023',
      title: 'L’AEPD sanciona ElectraWorks (Ceuta) per la informació donada davant d’una petició de supressió',
      type: 'regulatory-fine',
      severity: 'low',
      apps: ['bwin'],
      company: 'electraworks-ceuta',
      occurredAt: '2019-04-12',
      disclosedAt: '2023-06-07',
      description:
        'Una persona va demanar la supressió de les seves dades el 2017 i bwin es va limitar a donar-la de baixa de comunicacions comercials, responent el 2019 que les dades «podran ser esborrades sota sol·licitud un cop transcorregut el període mínim de garantia legal de deu anys estipulat als nostres requisits de llicència». El cas es va traslladar primer a l’autoritat maltesa; el 2022 Malta va comunicar que l’establiment principal ja era a Ceuta i l’AEPD es va declarar autoritat principal. L’expedient es va obrir per infracció de l’article 13 del RGPD, amb una proposta de 10.000 euros, i va acabar per pagament voluntari amb les reduccions per reconeixement de responsabilitat i pagament anticipat.',
      affectedPeople: 'Una persona reclamant, però la resposta reflecteix la política general de l’operador.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        fineAmountEur: 6000,
        legalBasis: 'Article 13 del RGPD',
        status: 'final',
      },
      sources: ['bwin-aepd-2023'],
    },
    {
      slug: 'bwin-dgoj-autoexclosos-2025',
      title: 'Sanció de 512.000 euros a ElectraWorks Ceuta per permetre jugar a persones amb el joc prohibit',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['bwin'],
      company: 'electraworks-ceuta',
      occurredAt: '2025-11-25',
      disclosedAt: '2025-11-25',
      description:
        'Dins d’una tanda de sancions a trenta-dos operadors, el Ministeri de Drets Socials, Consum i Agenda 2030 va multar ElectraWorks Ceuta amb 512.000 euros per tres infraccions greus: permetre l’accés al joc a persones que ho tenien prohibit, utilitzar sistemes tècnics no homologats o no autoritzats i incomplir els requisits tècnics dels reglaments de programari i comunicacions. La primera infracció implica una fallida en el contrast obligatori de la identitat de cada persona contra el Registro General de Interdicciones de Acceso al Juego.',
      affectedPeople: 'Persones inscrites al registre d’interdiccions o autoexcloses que van poder jugar igualment.',
      regulatory: {
        authority: 'Dirección General de Ordenación del Juego',
        fineAmountEur: 512000,
        legalBasis: 'Llei 13/2011, de regulació del joc',
        status: 'final',
      },
      sources: ['bwin-dgoj-2025', 'bwin-moncloa-2025'],
    },
    {
      slug: 'zoom-ftc-xifratge-2021',
      title: 'Acord amb la FTC per haver afirmat durant anys un xifratge d’extrem a extrem que no existia',
      type: 'regulatory-order',
      severity: 'high',
      apps: ['zoom-workplace'],
      company: 'zoom-communications',
      occurredAt: '2020-11-09',
      disclosedAt: '2021-01-19',
      description:
        'La Comissió Federal de Comerç dels Estats Units va concloure que des de 2016 Zoom afirmava oferir xifratge d’extrem a extrem de 256 bits quan en realitat feia servir TLS i conservava les claus criptogràfiques, de manera que podia accedir al contingut de les reunions; que desava gravacions al núvol sense xifrar fins a dos mesos; i que havia instal·lat a macOS un servidor web, ZoomOpener, que eludia les proteccions de Safari. L’ordre final, adoptada el gener de 2021 per tres vots contra dos, no va imposar cap sanció econòmica però obliga Zoom a un programa integral de seguretat, a avaluacions independents cada dos anys i a no interferir amb les proteccions de tercers.',
      affectedPeople: 'Totes les persones que van utilitzar Zoom confiant en l’afirmació de xifratge d’extrem a extrem entre 2016 i 2020.',
      regulatory: {
        authority: 'Federal Trade Commission (Estats Units)',
        legalBasis: 'Secció 5 de la Llei de la Comissió Federal de Comerç',
        status: 'final',
      },
      sources: ['zoom-ftc-2021', 'zoom-ftc-blog-2020'],
    },
    {
      slug: 'zoom-hamburg-transferencies-2021',
      title: 'L’autoritat d’Hamburg adverteix que l’ús de Zoom per l’administració vulnera el RGPD',
      type: 'regulatory-order',
      severity: 'medium',
      apps: ['zoom-workplace'],
      company: 'zoom-communications',
      occurredAt: '2021-08-16',
      disclosedAt: '2021-08-16',
      description:
        'L’autoritat de protecció de dades d’Hamburg va adreçar un advertiment formal a la Cancelleria del Senat de la ciutat perquè l’ús de Zoom implicava transferir dades als Estats Units sense una protecció suficient després de la sentència Schrems II. L’advertiment va contra l’organisme públic que feia servir el servei, no contra Zoom, i no comporta cap sanció econòmica, però és rellevant perquè mostra el problema de les transferències en un servei sense establiment principal a la Unió Europea.',
      affectedPeople: 'Personal i interlocutors de l’administració d’Hamburg que utilitzaven Zoom.',
      regulatory: {
        authority: 'Hamburgische Beauftragte für Datenschutz und Informationsfreiheit (Alemanya)',
        legalBasis: 'Capítol V del RGPD',
        status: 'final',
      },
      sources: ['zoom-hamburg-2021'],
    },
    {
      slug: 'zoom-clausula-entrenament-ia-2023',
      title: 'La clàusula 10.4 que permetia entrenar models amb el contingut de les reunions',
      type: 'misuse',
      severity: 'medium',
      apps: ['zoom-workplace'],
      company: 'zoom-communications',
      occurredAt: '2023-03-31',
      disclosedAt: '2023-08-06',
      description:
        'El març de 2023 Zoom va afegir als termes de servei una clàusula, la 10.4, que li donava una llicència perpètua, irrevocable i mundial per utilitzar el contingut dels clients, entre altres coses per a l’entrenament i les proves de models d’intel·ligència artificial, sense cap manera clara d’excloure-se’n. La clàusula va passar desapercebuda fins a l’agost, quan una anàlisi pública la va treure a la llum i va generar un debat sobre la base jurídica a la Unió Europea: el consentiment de qui convoca la reunió no pot cobrir el contingut de la resta de participants. Zoom va rectificar els termes en pocs dies i la política vigent nega ara, sense condicions, l’ús de contingut de comunicacions per entrenar models propis o de tercers.',
      affectedPeople: 'Clients de Zoom durant els mesos en què la clàusula va estar vigent.',
      sources: ['zoom-clausula-104-2023', 'zoom-privacy-policy'],
    },
  ],
  storeIds: {
    matchapp: 'com.justteamup.matchapp',
    fanalysis: 'co.uk.fanalysis',
    sporttia: 'com.sporttia.app',
    flashscore: 'eu.livesport.FlashScore-com',
    runnerpro: 'ios.runnerpro.cliente',
    bwin: 'com.bwin.sportsbook.es',
    indeed: 'com.indeed.JobSearch',
    'zoom-workplace': 'us.zoom.videomeetings',
    'job-today': 'com.jobtodayapp.store',
  },
}
