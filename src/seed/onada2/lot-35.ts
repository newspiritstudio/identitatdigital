import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 35 de la segona onada: set aplicacions de meteorologia i tres de salut i
 * forma física (La Meva Salut, Vítaly i Technogym).
 *
 * El contrast dins del lot és el que el fa útil. A la mateixa categoria hi
 * conviuen una agència estatal que diu que no recull cap dada (AEMET), un
 * desenvolupador europeu que publica un termini d’esborrat de 180 dies
 * (Alarma de Lluvia) i tres serveis comercials amb etiquetes de rastreig i
 * polítiques que encara invoquen l’Escut de Privadesa, anul·lat el 2020.
 * La Meva Salut és l’altre extrem: un servei públic amb dades de salut on el
 * «compte» és una identitat digital que no es pot donar de baixa des de
 * l’aplicació i on la història clínica té terminis legals de conservació propis.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/** Cap de les fitxes d’aquest lot ha pogut completar la cerca d’incidents. */
const capCercaIncidents =
  'La cerca d’incidents no s’ha pogut completar: s’havia esgotat el pressupost de cerques web de la sessió. Cal repetir-la abans de donar per bo que no n’hi ha cap.'

/* ═══════════════════════ Weather Radar & Forecast ═══════════════════════ */
const weatherRadarForecast: AppSeed = {
  slug: 'weather-radar-forecast',
  name: 'Weather Radar & Forecast',
  company: 'einmob',
  categories: ['meteorologia'],
  tagline: 'La política declara ubicació i identificador de dispositiu que l’etiqueta de l’App Store no esmenta, i no diu qui és el responsable',
  summary:
    'Aplicació gratuïta amb publicitat d’un editor registrat a Hong Kong que a la botiga nord-americana es diu «Hi Weather». La política de privadesa ocupa poques línies, no identifica cap responsable del tractament ni cap adreça, no té data i no descriu cap procediment de supressió. Declara que recull ubicació i identificador del dispositiu i que els pot compartir amb anunciants; l’etiqueta de l’App Store, en canvi, només declara dades d’ús.',
  platforms: ['ios'],
  businessModel: 'advertising',
  jurisdiction: 'Hong Kong',
  links: {
    website: 'https://topweathercolor.com/',
    privacyPolicy: 'https://topweathercolor.com/privacyPolicy.html',
    appStore: appStore('6468010213'),
  },
  accountRequired: f('no', 'official', ['weather-radar-forecast-privacy'], 'La política diu literalment que els seus productes no exigeixen registre.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  dataSummary:
    'Una aplicació del temps que demana la ciutat i l’identificador del dispositiu i els pot cedir a anunciants no necessita saber qui ets per fer-te un perfil: la combinació de ciutat, model de terminal i hores d’obertura ja identifica una rutina.',
  dataCollection: [
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['weather-radar-forecast-app-store', 'weather-radar-forecast-privacy'], note: 'És l’única categoria que declara l’etiqueta de l’App Store, i la declara com a dada per rastrejar.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['weather-radar-forecast-privacy'], note: 'La política diu que només fa servir la ciutat, no la ubicació precisa. L’etiqueta de l’App Store no declara cap dada d’ubicació.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['weather-radar-forecast-privacy'], note: 'La política l’enumera entre les dades recollides; l’etiqueta de l’App Store no el declara.' }),
    row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['weather-radar-forecast-privacy'], note: 'Model, versió del sistema operatiu i idioma del dispositiu.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['weather-radar-forecast-privacy'], note: 'Registres de fallada.' }),
    row('identificador-publicitari', 'unknown', { note: 'La política parla d’anunciants tercers però no anomena cap SDK ni l’identificador publicitari d’iOS.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['weather-radar-forecast-app-store'], 'L’etiqueta declara les dades d’ús com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: unknown('La política no anomena l’identificador publicitari ni cap xarxa concreta.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['weather-radar-forecast-privacy'], 'La política preveu compartir les dades amb anunciants tercers, però no en dona cap nom.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['weather-radar-forecast-privacy', 'weather-radar-forecast-app-store'], 'La política parla d’enviar informació personalitzada i de compartir dades amb anunciants; la fitxa de l’App Store avisa que l’aplicació conté publicitat.'),
    profiling: unknown('La política no descriu cap elaboració de perfils, però tampoc l’exclou.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['weather-radar-forecast-privacy'], 'La política diu que pot compartir les dades amb anunciants tercers, sense anomenar-ne cap.'),
    intraGroupSharing: unknown('La política no descriu cap grup empresarial ni cap societat vinculada.'),
    dataBrokerSales: unknown('La política no diu si ven dades; tampoc no ho nega.'),
    internationalTransfers: unknown('La política no esmenta on es tracten les dades ni cap mecanisme de transferència. L’editor consta registrat a Hong Kong.'),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: unknown('La política no fixa cap termini de conservació.'),
    dataAfterDeletion: unknown('La política no descriu què passa amb les dades quan es desinstal·la l’aplicació.'),
  },
  accountDeletion: {
    possible: na('No hi ha compte: la política diu que el servei no exigeix registre. El que es pot demanar és la supressió de les dades associades al dispositiu.'),
    selfService: f('no', 'official', ['weather-radar-forecast-privacy', 'weather-radar-forecast-app-store'], 'La política només remet a un equip d’atenció al client sense donar-ne cap adreça, i la fitxa de l’App Store no ofereix l’enllaç de gestió de les opcions de privadesa.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Desinstal·la l’aplicació: deixa d’enviar dades des del dispositiu.',
      'Desactiva «Permetre que les apps sol·licitin rastrejar-te» a Configuració > Privacitat i seguretat > Rastreig per limitar l’ús de l’identificador publicitari.',
      'Per demanar la supressió de les dades ja recollides, escriu a l’adreça de contacte que consta al bloc de comerciant de la fitxa de l’App Store, perquè la política no en dona cap.',
    ],
    obstacles: 'La política no identifica el responsable del tractament, no té data i no dona cap adreça de contacte. Sense responsable identificat, exercir els drets del RGPD és molt difícil.',
    sources: ['weather-radar-forecast-privacy', 'weather-radar-forecast-app-store'],
  },
  userRights: {
    dataExport: unknown('La política no esmenta el dret de portabilitat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('no', 'official', ['weather-radar-forecast-privacy'], 'La política no enumera els drets del RGPD, no identifica cap responsable i no dona cap adreça per exercir-los.'),
  },
  controls: {
    adPersonalizationOptOut: unknown('La política no descriu cap manera de desactivar la publicitat personalitzada dins de l’aplicació.'),
    telemetryOptOut: unknown('La política no ofereix cap control sobre els registres de fallada ni sobre l’analítica.'),
    granularControls: unknown('No hem trobat cap panell de privadesa a l’aplicació.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a l’aplicació.'),
  },
  security: {
    e2ee: na('Servei d’informació meteorològica; no hi ha comunicació privada entre persones.'),
    transportEncryption: unknown('La política no diu res sobre el xifratge de les comunicacions.'),
    atRestEncryption: unknown('La política no diu res sobre el xifratge en repòs.'),
    mfa: na('No hi ha compte que calgui protegir.'),
    independentAudits: unknown('No consta cap auditoria.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hi ha cap canal publicat per notificar vulnerabilitats.'),
  },
  alternatives: [
    {
      app: 'aemet',
      comparability: 'equivalent',
      rationale: 'L’agència meteorològica estatal cobreix Espanya amb radar i avisos, i declara a l’App Store que no recull cap dada.',
      tradeOffs: 'Només cobreix el territori espanyol i la seva política de privadesa és molt escarida.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'La mateixa aplicació es diu «Weather Radar & Forecast» a la botiga espanyola i «Hi Weather» a la nord-americana. El copyright de la fitxa és de «Top Weather Inc.», una entitat diferent de la raó social declarada com a comerciant, i l’adreça de contacte del bloc de comerciant és una bústia que correspon a una altra aplicació del mateix editor. La contradicció principal és entre la política, que declara ubicació i identificador de dispositiu, i l’etiqueta de l’App Store, que no els declara.',
    openQuestions: [
      capCercaIncidents,
      'Quina relació hi ha entre EINMOB LIMITED i «Top Weather Inc.»?',
      'Quins SDK publicitaris incorpora realment l’aplicació? La política no en dona cap nom.',
    ],
  },
}

/* ═══════════════════════ Alarma de Lluvia ═══════════════════════ */
const alarmaDeLluvia: AppSeed = {
  slug: 'alarma-de-lluvia',
  name: 'Alarma de Lluvia - Radar Meteo',
  company: 'aviles-software',
  categories: ['meteorologia'],
  tagline: 'Una política de privadesa de deu línies, però amb responsables identificats, dades a la UE i esborrat automàtic als 180 dies',
  summary:
    'Rain Alarm avisa quan s’acosta la pluja a partir del radar, i per fer-ho necessita la ubicació fins i tot amb l’aplicació tancada. La política és curtíssima, però és de les poques d’aquest lot que diu coses concretes i comprovables: dos corresponsables identificats amb número d’IVA, dades pseudonimitzades i desades a la Unió Europea, i supressió automàtica 180 dies després de l’últim ús. La publicitat la serveix Google, i es pot treure amb una compra única.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Alemanya i Itàlia',
  links: {
    website: 'https://rain-alarm.com/',
    privacyPolicy: 'https://www.avilessoftware.com/privacy/rainalarm.pdf',
    appStore: appStore('397676100'),
  },
  accountRequired: f('no', 'official', ['alarma-de-lluvia-privacy'], 'La política no descriu cap compte; l’aplicació funciona amb la ubicació i un testimoni de notificacions.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  dataSummary:
    'Per avisar de la pluja abans que arribi, l’aplicació ha de saber on ets encara que no l’obris. Aquesta ubicació continuada és la dada més sensible del conjunt; que es desi pseudonimitzada a la UE i s’esborri als 180 dies en redueix molt l’abast.',
  dataCollection: [
    row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['alarma-de-lluvia-app-store', 'alarma-de-lluvia-privacy'], note: 'L’etiqueta la declara sota «Funcionalidad de la app» i no vinculada a la identitat. La fitxa avisa que l’aplicació pot fer servir la ubicació encara que no estigui oberta.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['alarma-de-lluvia-app-store'], note: 'L’etiqueta la declara sota «Publicidad de terceros», no vinculada a la identitat.' }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['alarma-de-lluvia-privacy', 'alarma-de-lluvia-app-store'], note: 'La política diu que el responsable d’aquesta dada és Google i que es pot triar publicitat no personalitzada des de la configuració de l’aplicació.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['alarma-de-lluvia-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['alarma-de-lluvia-app-store'], note: 'És l’única categoria que l’etiqueta declara vinculada a la identitat, juntament amb les dades de publicitat.' }),
    row('testimoni-d-autenticacio', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['alarma-de-lluvia-privacy'], note: 'Testimoni de notificacions push, necessari per enviar l’avís de pluja.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['alarma-de-lluvia-app-store'], 'L’etiqueta declara les dades d’ús com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['alarma-de-lluvia-privacy'], 'La política diu que es fa servir l’identificador de publicitat i que el responsable d’aquest tractament és Google.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['alarma-de-lluvia-privacy'], 'La publicitat la serveix Google; no s’anomena cap altra xarxa.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['alarma-de-lluvia-privacy'], 'Hi ha publicitat personalitzada per defecte, però la política indica que a la configuració de l’aplicació es pot triar publicitat no personalitzada o comprar l’opció de treure els anuncis.'),
    profiling: unknown('La política no descriu cap elaboració de perfils pròpia; el perfilat publicitari, si n’hi ha, seria de Google.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['alarma-de-lluvia-privacy'], 'L’únic tercer que anomena la política és Google, com a responsable de l’identificador de publicitat.'),
    intraGroupSharing: f('yes', 'official', ['alarma-de-lluvia-privacy'], 'Hi ha dos corresponsables declarats: Michael Diener - Software e.K. i Carlos Avilés - Software.'),
    dataBrokerSales: unknown('La política no esmenta cap venda de dades.'),
    internationalTransfers: f('no', 'official', ['alarma-de-lluvia-privacy'], 'La política diu que les dades es desen a la Unió Europea. No parla de cap transferència fora de l’Espai Econòmic Europeu, tot i que la publicitat de Google en podria implicar.', { mechanism: 'none' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['alarma-de-lluvia-privacy'], 'La política fixa un termini únic i concret: 180 dies des de l’últim ús.'),
    dataAfterDeletion: f('partial', 'official', ['alarma-de-lluvia-privacy'], 'Si es deixa de fer servir l’aplicació, les dades s’esborren automàticament als 180 dies. La política no diu què passa amb les dades que ja ha rebut Google.'),
    periods: [
      { dataType: 'ubicacio-precisa', period: '180 dies des de l’últim ús, amb supressió automàtica', sources: ['alarma-de-lluvia-privacy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['alarma-de-lluvia-privacy'], 'No hi ha compte. Les dades associades al dispositiu s’esborren soles i també es poden reclamar per correu.'),
    selfService: f('partial', 'official', ['alarma-de-lluvia-privacy'], 'No hi ha cap botó d’esborrat, però la supressió automàtica als 180 dies no exigeix cap gestió.'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Desinstal·la l’aplicació o deixa de fer-la servir: les dades s’esborren automàticament 180 dies després de l’últim ús.',
      'Si vols que s’esborrin abans, escriu a rainalarm@avilessoftware.com invocant el dret de supressió de l’article 17 del RGPD.',
      'Per deixar de veure publicitat personalitzada sense desinstal·lar res, canvia l’opció corresponent a la configuració de l’aplicació o compra «Rain Alarm Pro+».',
    ],
    dataRetained: 'Res passats els 180 dies, segons la política. Les dades que ja hagi rebut Google es regeixen per la política de Google.',
    sources: ['alarma-de-lluvia-privacy'],
  },
  userRights: {
    dataExport: unknown('La política no esmenta el dret de portabilitat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['alarma-de-lluvia-privacy'], 'Hi ha una adreça específica per a qüestions de privadesa, però la política no enumera els drets del RGPD ni els terminis de resposta.', {
      url: 'mailto:rainalarm@avilessoftware.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['alarma-de-lluvia-privacy'], 'La configuració de l’aplicació permet triar entre publicitat personalitzada i no personalitzada, i una compra única treu els anuncis.'),
    telemetryOptOut: unknown('La política no descriu cap analítica pròpia ni cap manera de desactivar-la.'),
    granularControls: f('partial', 'official', ['alarma-de-lluvia-privacy'], 'El control sobre la publicitat és clar; no n’hi ha cap sobre la ubicació més enllà dels permisos del sistema operatiu.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a l’aplicació.'),
  },
  security: {
    e2ee: na('Servei d’informació meteorològica; no hi ha comunicació privada entre persones.'),
    transportEncryption: unknown('La política no descriu el xifratge de les comunicacions.'),
    atRestEncryption: f('partial', 'official', ['alarma-de-lluvia-privacy'], 'La política no parla de xifratge, però sí que diu que les dades es desen pseudonimitzades i dins de la Unió Europea.'),
    mfa: na('No hi ha compte que calgui protegir.'),
    independentAudits: unknown('No consta cap auditoria.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hem trobat cap canal publicat per notificar vulnerabilitats.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'El producte és d’origen italià (Michael Diener - Software, Merano) i el publica a iOS un desenvolupador independent establert a Berlín, amb corresponsabilitat declarada entre tots dos. És l’única política d’aquest lot que fixa un termini de conservació concret i que diu explícitament on es desen les dades. La contradicció pendent és que l’etiqueta de l’App Store declara dades de publicitat vinculades a la identitat mentre la política afirma que les dades són pseudonimitzades.',
    openQuestions: [
      capCercaIncidents,
      'Per què l’etiqueta declara dades de publicitat vinculades a la identitat si la política diu que les dades són pseudonimitzades?',
      'La publicitat de Google implica transferències fora de l’Espai Econòmic Europeu que la política no esmenta?',
    ],
  },
}

/* ═══════════════════════ Weather Live Radar - NOAA ═══════════════════════ */
const weatherLiveRadarNoaa: AppSeed = {
  slug: 'weather-live-radar-noaa',
  name: 'Weather Live Radar - NOAA',
  company: 'lighten-apps',
  categories: ['meteorologia'],
  tagline: 'Rastreig declarat en tres categories, subscripció de 9,99 € setmanals i una política que encara invoca l’Escut de Privadesa',
  summary:
    'Aplicació publicada el juliol del 2026 per un editor israelià. L’etiqueta de l’App Store declara identificadors, dades d’ús i diagnòstics com a dades utilitzades per rastrejar, i totes vinculades a la identitat. La política és una plantilla: no identifica cap societat, deixa buides les taules de socis publicitaris i de grup empresarial, invoca l’Escut de Privadesa (anul·lat el 2020) com a mecanisme de transferència i es contradiu sobre l’edat mínima. El preu setmanal equival a uns 519 euros l’any.',
  platforms: ['ios'],
  businessModel: 'subscription',
  jurisdiction: 'Israel',
  links: {
    privacyPolicy: 'https://liveweatheradar.com/privacy',
    terms: 'https://liveweatheradar.com/terms',
    appStore: appStore('6781655348'),
  },
  accountRequired: unknown('La política parla de crear compte i d’iniciar sessió amb Google o Facebook, però també diu que no hi ha cap obligació de facilitar informació. No hem pogut confirmar què fa l’aplicació.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  dataSummary:
    'L’etiqueta declara identificador d’usuari i de dispositiu vinculats a la identitat i utilitzats per rastrejar. En una aplicació del temps, això vol dir que el patró d’obertures i les ubicacions consultades es poden creuar amb l’activitat en altres aplicacions.',
  dataCollection: [
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['weather-live-radar-noaa-app-store'], note: 'L’etiqueta el declara sota «Análisis de datos», vinculat a la identitat i utilitzat per rastrejar.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['weather-live-radar-noaa-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['weather-live-radar-noaa-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['weather-live-radar-noaa-app-store'], note: 'Dades d’error, declarades vinculades a la identitat.' }),
    row('ubicacio-precisa', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['weather-live-radar-noaa-privacy'], note: 'La política parla d’ubicació precisa o aproximada; l’etiqueta de l’App Store no declara cap dada d’ubicació.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['weather-live-radar-noaa-privacy'], note: 'La política esmenta nom i adreça electrònica; l’etiqueta no declara dades de contacte.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['weather-live-radar-noaa-privacy'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['weather-live-radar-noaa-privacy'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['weather-live-radar-noaa-privacy'], note: 'Els pagaments passen per l’App Store; la política diu que no hi té accés.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['weather-live-radar-noaa-app-store'], 'L’etiqueta declara identificadors, dades d’ús i diagnòstics com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: unknown('La política no anomena l’identificador publicitari, tot i que l’etiqueta declara rastreig entre aplicacions.'),
    thirdPartyTrackersPresent: f('partial', 'official', ['weather-live-radar-noaa-privacy'], 'L’únic tercer anomenat és OneSignal, per a les notificacions. La política diu que pot fer servir anunciants tercers, però la taula de socis és buida.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['weather-live-radar-noaa-privacy', 'weather-live-radar-noaa-app-store'], 'La política preveu anunciants tercers i tecnologia de seguiment de tercers, però la fitxa de l’App Store no avisa que l’aplicació contingui publicitat.'),
    profiling: unknown('La política no descriu cap elaboració de perfils.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['weather-live-radar-noaa-privacy'], 'Proveïdors i contractistes per a suport, pagaments, anàlisi de dades, correu, allotjament, atenció al client i màrqueting, i també en cas de fusió o adquisició.'),
    intraGroupSharing: unknown('La política té una secció de grup empresarial, però la deixa buida.'),
    dataBrokerSales: unknown('La política no esmenta cap venda de dades.'),
    internationalTransfers: f('yes', 'official', ['weather-live-radar-noaa-privacy'], 'La política diu que les dades es poden tractar a qualsevol país on l’editor tingui instal·lacions i invoca com a salvaguarda l’Escut de Privadesa, un mecanisme anul·lat pel Tribunal de Justícia de la Unió Europea el 2020.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['weather-live-radar-noaa-privacy'], 'La política diu que no conservarà les dades més d’un any després de deixar de fer servir l’aplicació, però la frase està mal escrita i no distingeix per categoria de dada.'),
    dataAfterDeletion: f('partial', 'official', ['weather-live-radar-noaa-privacy'], 'Transcorregut un any sense fer servir l’aplicació, la política diu que les dades s’esborren.'),
  },
  accountDeletion: {
    possible: f('partial', 'official', ['weather-live-radar-noaa-privacy'], 'La política reconeix el dret de supressió i dona una adreça de contacte, però no descriu cap procediment ni cap termini.'),
    selfService: f('no', 'official', ['weather-live-radar-noaa-privacy', 'weather-live-radar-noaa-app-store'], 'L’enllaç «gestiona les teves opcions de privadesa» de la fitxa de l’App Store porta a la mateixa política, no a cap formulari.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Cancel·la primer la subscripció des de Configuració > El teu nom > Subscripcions, perquè esborrar dades no atura el cobrament.',
      'Escriu a support@liveweatheradar.com invocant el dret de supressió de l’article 17 del RGPD.',
      'Desinstal·la l’aplicació. Segons la política, les dades s’esborren un any després de deixar de fer-la servir.',
    ],
    obstacles: 'La política no identifica cap societat responsable, cosa que dificulta saber davant de qui es reclama i a quina autoritat.',
    dataRetained: 'Fins a un any després de l’últim ús, segons la política.',
    sources: ['weather-live-radar-noaa-privacy', 'weather-live-radar-noaa-app-store'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['weather-live-radar-noaa-privacy'], 'La política enumera el dret de portabilitat, però no ofereix cap eina.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['weather-live-radar-noaa-privacy'], 'Els drets s’exerceixen escrivint a l’adreça de suport; no hi ha terminis ni responsable identificat.', {
      url: 'mailto:support@liveweatheradar.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: unknown('La política no descriu cap control sobre la publicitat dins de l’aplicació.'),
    telemetryOptOut: unknown('No hem trobat cap manera de desactivar l’analítica.'),
    granularControls: unknown('No hem trobat cap panell de privadesa a l’aplicació.'),
    defaultPosture: 'unknown',
    darkPatterns: f('partial', 'editorial', [], 'No hem analitzat la interfície, però el preu de 9,99 € setmanals, presentat al costat d’un pagament anual de 79,99 €, és una estructura que empeny a l’opció més cara si no es fa el càlcul anual. Ho marquem com a indici, no com a comprovació.'),
  },
  security: {
    e2ee: na('Servei d’informació meteorològica; no hi ha comunicació privada entre persones.'),
    transportEncryption: unknown('La política parla de mesures tècniques i organitzatives adequades, sense concretar-ne cap.'),
    atRestEncryption: unknown('La política no diu res sobre el xifratge en repòs.'),
    mfa: unknown('No hem pogut confirmar si l’aplicació té comptes ni si admet doble factor.'),
    independentAudits: unknown('No consta cap auditoria.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hem trobat cap canal publicat per notificar vulnerabilitats.'),
  },
  alternatives: [
    {
      app: 'aemet',
      comparability: 'equivalent',
      rationale: 'Radar i avisos oficials per a Espanya, gratuïts i sense cap dada declarada a l’etiqueta de l’App Store.',
      tradeOffs: 'No cobreix altres països ni ofereix les capes de mapa d’una aplicació comercial.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'El nom evoca l’agència meteorològica federal nord-americana, però no hem trobat cap indici de relació oficial amb la NOAA. La política és clarament una plantilla: taules de socis i de grup buides, l’errata «longer than year» al termini de conservació i una contradicció interna sobre l’edat mínima (13 anys al cos, 18 al resum). El domini liveweatheradar.com només serveix les pàgines legals; la pàgina d’inici és buida.',
    openQuestions: [
      capCercaIncidents,
      'Quins SDK publicitaris i analítics incorpora realment l’aplicació, si l’etiqueta declara rastreig i la política no n’anomena cap?',
      'L’aplicació exigeix compte? La política ho dona a entendre però la fitxa de l’App Store no declara dades de contacte.',
    ],
  },
}

/* ═══════════════════════ Eltiempo.es ═══════════════════════ */
const eltiempoEs: AppSeed = {
  slug: 'eltiempo-es',
  name: 'Eltiempo.es: Tiempo 14 días',
  company: 'el-tiempo-previsto',
  categories: ['meteorologia'],
  tagline: 'Política de privadesa revisada per últim cop el maig del 2018 i una desena de socis publicitaris que reben ubicació i identificadors',
  summary:
    'Eltiempo.es és el servei meteorològic espanyol del grup canadenc Pelmorex, propietari també de The Weather Network. L’etiqueta de l’App Store declara ubicació, identificadors i dades d’ús com a dades utilitzades per rastrejar, però cap vinculada a la identitat. La política de privadesa porta la data de la revisió del 25 de maig de 2018, el dia que va començar a aplicar-se el RGPD, i des de llavors no s’ha tornat a actualitzar.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Espanya, amb responsable al Canadà',
  userBase: 'El grup declara més de 65 milions de persones usuàries mensuals a totes les seves marques',
  links: {
    website: 'https://www.eltiempo.es/',
    privacyPolicy: 'https://www.eltiempo.es/legal/politica-privacidad.html',
    appStore: appStore('599661193'),
  },
  accountRequired: f('no', 'official', ['eltiempo-es-app-store'], 'L’etiqueta no declara cap dada de contacte ni cap dada vinculada a la identitat. La política preveu comptes opcionals per a alguns serveis del web.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  dataSummary:
    'La consulta del temps diu on ets i on tens previst anar. Aquí aquesta informació va acompanyada de l’identificador publicitari del mòbil i arriba a una desena de plataformes de compravenda d’anuncis, que la poden creuar amb el que fas en altres llocs.',
  dataCollection: [
    row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['eltiempo-es-app-store', 'eltiempo-es-privacy'], note: 'L’etiqueta la declara per rastrejar i no vinculada a la identitat. La fitxa avisa que l’aplicació pot fer servir la ubicació encara que no estigui oberta.' }),
    row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['eltiempo-es-privacy', 'eltiempo-es-app-store'], note: 'La política l’anomena explícitament «ID de publicitat mòbil».' }),
    row('adreca-ip', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['eltiempo-es-privacy'] }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['eltiempo-es-app-store', 'eltiempo-es-privacy'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['eltiempo-es-cookies'], note: 'La política de galetes llista, entre altres, DoubleClick for Publishers, AdSense, AdExchange, Amazon, Criteo, Index Exchange, OpenX, Tapad i AppNexus, i un píxel de The Procter & Gamble Company.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['eltiempo-es-app-store'] }),
    row('adreca-electronica', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['eltiempo-es-privacy'], note: 'Només per als comptes opcionals que descriu la política; l’etiqueta de l’aplicació no declara dades de contacte.' }),
    row('data-de-naixement', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['eltiempo-es-privacy'], note: 'La política esmenta edat i gènere com a dades opcionals del perfil.' }),
    row('genere', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['eltiempo-es-privacy'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['eltiempo-es-app-store'], 'L’etiqueta declara ubicació, identificadors i dades d’ús com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['eltiempo-es-privacy'], 'La política enumera l’identificador de publicitat mòbil entre les dades que recull.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['eltiempo-es-privacy', 'eltiempo-es-cookies'], 'La política anomena Google Analytics, Index Exchange i Rubicon; la de galetes hi afegeix una desena de plataformes més.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['eltiempo-es-privacy', 'eltiempo-es-cookies'], 'El servei es finança amb publicitat programàtica; al web hi ha una alternativa de pagament sense anuncis amb contentpass, i a l’aplicació una compra per treure els anuncis.'),
    profiling: f('partial', 'official', ['eltiempo-es-privacy'], 'La política declara que no pren decisions automatitzades amb efectes jurídics en el sentit de l’article 22.1 del RGPD, però la publicitat programàtica que descriu implica segmentació.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['eltiempo-es-privacy', 'eltiempo-es-cookies'], 'Socis de mitjans i de demanda publicitària, analítica i un píxel de seguiment de tercers.'),
    intraGroupSharing: f('yes', 'official', ['eltiempo-es-privacy'], 'Les dades es comparteixen amb el grup Pelmorex al Canadà.'),
    dataBrokerSales: unknown('La política no esmenta cap venda de dades. El grup comercialitza solucions de màrqueting basades en dades d’audiència, però no hem trobat cap font que documenti la venda de dades d’ubicació.'),
    internationalTransfers: f('yes', 'official', ['eltiempo-es-privacy', 'eltiempo-es-cookies'], 'Transferència al Canadà emparada en la decisió d’adequació de la Comissió Europea. La política de galetes admet, a més, tercers en països sense un nivell de protecció equivalent, sense concretar-ne el mecanisme.', { mechanism: 'adequacy' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència del grup.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['eltiempo-es-privacy'], 'La política no fixa cap termini: diu que conserva les dades tot el temps que les necessiti i que després les bloqueja.'),
    dataAfterDeletion: unknown('La política no descriu què es conserva després d’una sol·licitud de supressió.'),
  },
  accountDeletion: {
    possible: f('partial', 'official', ['eltiempo-es-privacy'], 'La política reconeix el dret de supressió i dona una adreça de correu, però no descriu cap procediment d’eliminació de compte.'),
    selfService: f('no', 'official', ['eltiempo-es-privacy'], 'No hi ha cap eina d’autoservei documentada.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Desinstal·la l’aplicació per deixar d’enviar ubicació i identificador publicitari.',
      'Desactiva «Permetre que les apps sol·licitin rastrejar-te» a Configuració > Privacitat i seguretat > Rastreig.',
      'Escriu a infoprivacy@pelmorex.com invocant el dret de supressió de l’article 17 del RGPD; pots adreçar-te també al representant a Espanya, a Príncipe de Vergara 108, Madrid.',
    ],
    obstacles: 'La política no s’ha revisat des del 25 de maig de 2018 i no descriu terminis de resposta ni procediment de baixa.',
    sources: ['eltiempo-es-privacy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['eltiempo-es-privacy'], 'La política reconeix els drets del RGPD, inclosa la portabilitat, però no ofereix cap eina d’exportació.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['eltiempo-es-privacy'], 'Hi ha una adreça de privadesa i un representant a Espanya, però no es designa cap delegat de protecció de dades ni s’indica cap autoritat de control concreta.', {
      url: 'mailto:infoprivacy@pelmorex.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['eltiempo-es-cookies', 'eltiempo-es-app-store'], 'Al web hi ha un centre de privadesa amb la llista de socis; a l’aplicació, la via principal per treure la publicitat és la compra de 3,99 euros.'),
    telemetryOptOut: unknown('No hem trobat cap manera de desactivar l’analítica dins de l’aplicació.'),
    granularControls: f('partial', 'official', ['eltiempo-es-cookies'], 'El centre de privadesa del web permet triar per finalitat i per soci; no consta un equivalent dins de l’aplicació.'),
    defaultPosture: 'permissive',
    darkPatterns: unknown('No hem analitzat el diàleg de consentiment de l’aplicació.'),
  },
  security: {
    e2ee: na('Servei d’informació meteorològica; no hi ha comunicació privada entre persones.'),
    transportEncryption: f('partial', 'official', ['eltiempo-es-privacy'], 'La política parla de proteccions tecnològiques com el xifratge, però no concreta res i s’eximeix expressament de garantir-les.'),
    atRestEncryption: unknown('La política no distingeix el xifratge en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre doble factor per als comptes opcionals.'),
    independentAudits: unknown('L’empresa declara l’adhesió al Trustworthy Accountability Group, que és una iniciativa contra el frau publicitari, no una auditoria de privadesa. No hem trobat cap auditoria de seguretat.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt a eltiempo.es ni a pelmorex.com.'),
  },
  alternatives: [
    {
      app: 'aemet',
      comparability: 'equivalent',
      rationale: 'Previsions i avisos oficials per a Espanya, sense publicitat i sense cap dada declarada a l’etiqueta de l’App Store.',
      tradeOffs: 'La interfície és més austera i no ofereix previsió a catorze dies.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'La troballa d’aquesta fitxa és la data: una política revisada per últim cop el dia en què va començar a aplicar-se el RGPD i que vuit anys després continua vigent per a una aplicació amb rastreig publicitari declarat. La fitxa de l’App Store també fa constar que Pelmorex Corp. no s’ha identificat com a comerciant, cosa que, segons el mateix avís d’Apple, deixa fora els drets de consum de l’Espai Econòmic Europeu. Els casos coneguts de venda de dades d’ubicació d’aplicacions del temps afecten altres empreses: no hem trobat cap font que impliqui Pelmorex.',
    openQuestions: [
      capCercaIncidents,
      'Quina plataforma de consentiment fa servir l’aplicació i està inscrita al marc de transparència de l’IAB?',
      'Quina és la relació societària exacta entre Pelmorex Corp. i El Tiempo Previsto, S.L.U., i qui és el responsable del tractament a efectes de l’AEPD?',
    ],
  },
}

/* ═══════════════════════ Shadowmap ═══════════════════════ */
const shadowmap: AppSeed = {
  slug: 'shadowmap',
  name: 'Shadowmap: Sol y Sombra',
  company: 'shadowmap-technologies',
  categories: ['meteorologia'],
  tagline: 'Cap dada declarada per rastrejar i un model de subscripció sense publicitat, però l’esborrat del compte només per correu',
  summary:
    'Shadowmap simula on toca el sol i on hi ha ombra a qualsevol punt del món i a qualsevol hora. És una empresa petita de Viena que es finança amb subscripcions i llicències professionals, no amb publicitat: l’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar i la política diu explícitament que no ven dades. El punt feble és el de sempre en els serveis petits: la política no anomena cap encarregat, no fixa terminis i l’esborrat del compte s’ha de demanar per correu.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Àustria',
  links: {
    website: 'https://shadowmap.org/',
    privacyPolicy: 'https://shadowmap.org/privacy-policy',
    appStore: appStore('1566789060'),
  },
  accountRequired: f('partial', 'official', ['shadowmap-privacy', 'shadowmap-app-store'], 'Hi ha un nivell gratuït; el compte amb adreça electrònica i contrasenya cal per a les subscripcions Explorer, Home i Studio.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  dataSummary:
    'Les consultes de Shadowmap són adreces concretes: la casa que es vol comprar, el pis que es vol llogar, el terrat on es volen posar plaques. El conjunt de llocs consultats és una llista d’interessos immobiliaris molt precisa, encara que l’empresa no la vinculi amb publicitat.',
  dataCollection: [
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['shadowmap-privacy', 'shadowmap-app-store'], note: 'L’etiqueta declara les dades de contacte vinculades a la identitat.' }),
    row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['shadowmap-privacy'] }),
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['shadowmap-privacy'], note: 'Opcional al perfil i obligatori a les dades de facturació.' }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['shadowmap-privacy'], note: 'Dades de facturació.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['shadowmap-app-store', 'shadowmap-privacy'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['shadowmap-app-store'] }),
    row('ubicacio-aproximada', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['shadowmap-app-store', 'shadowmap-privacy'], note: 'Amb consentiment; l’etiqueta la declara no vinculada a la identitat.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['shadowmap-app-store', 'shadowmap-privacy'], note: 'La política parla de dades de comportament pseudonimitzades i recollides amb consentiment.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['shadowmap-privacy'], note: 'Registres de servidor amb IP, agent d’usuari, sistema operatiu i pàgines visitades.' }),
    row('historial-de-cerca', 'yes', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['shadowmap-privacy'], note: 'La política inclou les cerques entre les dades dels registres.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['shadowmap-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['shadowmap-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['shadowmap-app-store', 'shadowmap-privacy'], 'No hi ha publicitat i l’etiqueta no declara cap dada publicitària.'),
    thirdPartyTrackersPresent: unknown('La política parla de proveïdors i consultors però no n’anomena cap, de manera que no sabem quines eines d’analítica hi ha.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['shadowmap-app-store', 'shadowmap-privacy'], 'El model és de subscripció; ni l’etiqueta ni la política declaren cap finalitat publicitària.'),
    profiling: f('no', 'official', ['shadowmap-privacy'], 'La política no descriu cap elaboració de perfils; les dades de comportament es declaren pseudonimitzades i subjectes a consentiment.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['shadowmap-privacy'], 'La política preveu compartir amb proveïdors i consultors, però no n’anomena cap.'),
    intraGroupSharing: na('No hem trobat cap grup empresarial: l’empresa és una societat austríaca independent.'),
    dataBrokerSales: f('no', 'official', ['shadowmap-privacy'], 'La política diu expressament que no ven dades a tercers.'),
    internationalTransfers: f('partial', 'official', ['shadowmap-privacy'], 'La política invoca clàusules contractuals tipus i normes corporatives vinculants, però també l’Escut de Privadesa, anul·lat pel Tribunal de Justícia de la Unió Europea el 2020. És un senyal que el text no s’ha revisat.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['shadowmap-privacy'], 'La política només diu que conserva les dades mentre calgui, sense cap termini.'),
    dataAfterDeletion: unknown('La política no descriu què es conserva després d’esborrar el compte.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['shadowmap-privacy'], 'La política diu que es pot esborrar la informació del compte en qualsevol moment.'),
    selfService: f('no', 'official', ['shadowmap-privacy'], 'L’únic camí que descriu la política és enviar un correu electrònic.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Cancel·la la subscripció des de Configuració > El teu nom > Subscripcions si la vas contractar dins de l’aplicació.',
      'Escriu a aloha@shadowmap.org demanant l’eliminació del compte i de les dades associades.',
      'Desinstal·la l’aplicació.',
    ],
    obstacles: 'La política no dona cap termini de resposta ni indica si hi ha un botó equivalent dins de l’aplicació.',
    sources: ['shadowmap-privacy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['shadowmap-privacy'], 'La secció per a l’Espai Econòmic Europeu reconeix la portabilitat, però no hi ha cap eina d’exportació.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['shadowmap-privacy', 'shadowmap-imprint'], 'La política té una secció específica per a l’Espai Econòmic Europeu amb tots els drets i una adreça de contacte, tot i que no designa cap delegat de protecció de dades. L’avís legal identifica la societat amb registre mercantil i número d’IVA, de manera que el responsable és plenament identificable.', {
      url: 'mailto:aloha@shadowmap.org',
    }),
  },
  controls: {
    adPersonalizationOptOut: na('El servei no mostra publicitat.'),
    telemetryOptOut: f('partial', 'official', ['shadowmap-privacy'], 'La política diu que les dades de comportament es recullen amb consentiment, però no descriu on es retira.'),
    granularControls: unknown('No hem trobat cap panell de privadesa documentat.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a l’aplicació.'),
  },
  security: {
    e2ee: na('Servei de visualització de mapes; no hi ha comunicació privada entre persones.'),
    transportEncryption: unknown('La política parla de salvaguardes tècniques i operatives, sense concretar-ne cap.'),
    atRestEncryption: unknown('La política no diu res sobre el xifratge en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre doble factor.'),
    independentAudits: unknown('No consta cap auditoria.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt a shadowmap.org.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'L’avís legal identifica la societat amb número de registre mercantil al Handelsgericht de Viena i número d’IVA, cosa que fa que el responsable sigui perfectament identificable, a diferència de les altres aplicacions petites d’aquest lot. Com que l’aplicació permet crear compte, la directriu 5.1.1(v) de revisió de l’App Store exigeix que l’esborrat es pugui fer des de dins; la política només ofereix el correu i no hem pogut comprovar si el botó hi és.',
    openQuestions: [
      capCercaIncidents,
      'L’aplicació té un botó d’eliminació del compte dins de la interfície, com exigeix la directriu 5.1.1(v) de l’App Store?',
      'Quins encarregats del tractament fa servir (analítica, pagaments, allotjament)? La política no n’anomena cap.',
    ],
  },
}

/* ═══════════════════════ PredictWind ═══════════════════════ */
const predictwind: AppSeed = {
  slug: 'predictwind',
  name: 'PredictWind — Marine Forecasts',
  company: 'predictwind',
  categories: ['meteorologia'],
  tagline: 'Comparteix nom, embarcació i coordenades GPS amb altres persones usuàries, i cobra 49 dòlars per una còpia de les teves dades',
  summary:
    'PredictWind és el servei de previsió meteorològica marina que fan servir navegants i regatistes, amb seguiment del vaixell i missatgeria per satèl·lit. L’etiqueta de l’App Store és la més extensa d’aquest lot: sis categories declarades com a dades per rastrejar i vuit vinculades a la identitat. La política és detallada i enumera una vintena de proveïdors, però encara invoca l’Escut de Privadesa i, sobretot, anuncia una taxa administrativa de 49 dòlars per lliurar una còpia de les dades, cosa que xoca amb la gratuïtat que exigeix l’article 12.5 del RGPD.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Nova Zelanda',
  links: {
    website: 'https://www.predictwind.com/',
    privacyPolicy: 'https://www.predictwind.com/about-us/privacy-policy/',
    appStore: appStore('477048487'),
  },
  accountRequired: f('yes', 'official', ['predictwind-privacy', 'predictwind-app-store'], 'Cal compte per accedir a les previsions i als plans de subscripció.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  dataSummary:
    'La posició GPS d’una embarcació, amb el nom del vaixell i de la persona, és una dada d’una sensibilitat particular: diu on és algú enmig del mar i qui hi ha a bord. La política preveu, a més, que aquestes dades es puguin mostrar a altres persones usuàries segons la configuració.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['predictwind-privacy', 'predictwind-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['predictwind-privacy'] }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['predictwind-app-store', 'predictwind-privacy'], note: 'La política parla de «tracking data» amb nom, embarcació i coordenades GPS, i preveu mostrar-les a altres persones usuàries segons la configuració.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['predictwind-app-store', 'predictwind-privacy'], note: 'Els pagaments per web passen per Stripe i PayPal.' }),
    row('identificador-publicitari', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['predictwind-privacy'], note: 'La política diu que a iOS l’aplicació pot accedir a l’IDFA i compartir-lo amb proveïdors tercers per a atribució publicitària.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['predictwind-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['predictwind-app-store'] }),
    row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['predictwind-app-store', 'predictwind-privacy'], note: 'La política parla de «publication data» i adverteix que el contingut publicat es manté encara que es desactivi el compte.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['predictwind-app-store', 'predictwind-privacy'], note: 'La política anomena Google Analytics, Mixpanel, Segment i FullStory, aquest últim d’enregistrament de sessions.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['predictwind-privacy'], note: 'Inclou la geolocalització deduïda de l’adreça IP.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['predictwind-app-store'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['predictwind-privacy'], note: 'La política de galetes inclou una categoria de galetes publicitàries que es comparteixen amb tercers com Adwords i Bing.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['predictwind-app-store', 'predictwind-privacy'], 'L’etiqueta declara sis categories utilitzades per rastrejar, i la política reconeix l’accés a l’IDFA i la compartició amb proveïdors d’atribució.'),
    advertisingIdentifiers: f('yes', 'official', ['predictwind-privacy'], 'La política esmenta expressament l’identificador per a anunciants d’iOS.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['predictwind-privacy'], 'La política enumera, entre altres, Google Analytics, Google Tag Manager, Firebase, Mixpanel, Segment, FullStory, Intercom i etiquetes de Facebook i Twitter.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['predictwind-privacy'], 'El model és de subscripció, però la política declara galetes publicitàries compartides amb Adwords i Bing i l’ús de l’IDFA per a atribució.'),
    profiling: unknown('La política no descriu cap elaboració de perfils amb efectes sobre la persona.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['predictwind-privacy'], 'La política llista nominalment una vintena de proveïdors d’analítica, suport, correu, pagaments i publicitat, i preveu mostrar ubicació, nom i embarcació a altres persones usuàries segons la configuració.'),
    intraGroupSharing: unknown('La política no descriu cap grup empresarial.'),
    dataBrokerSales: unknown('La política no esmenta cap venda de dades.'),
    internationalTransfers: f('yes', 'official', ['predictwind-privacy'], 'Nova Zelanda té decisió d’adequació de la Comissió Europea, però l’allotjament és a AWS i DigitalOcean als Estats Units i Austràlia, i la política empara aquestes transferències en l’Escut de Privadesa, invalidat el 2020.', { mechanism: 'adequacy' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['predictwind-privacy'], 'Les dades comptables es conserven un mínim de set anys per llei neozelandesa; la resta, mentre el compte és actiu «i un període raonable després», sense concretar.'),
    dataAfterDeletion: f('partial', 'official', ['predictwind-privacy'], 'La política adverteix que el contingut publicat es manté encara que es desactivi el compte.'),
    periods: [
      { dataType: 'historial-de-compres', period: 'Mínim 7 anys, per obligació comptable de la legislació de Nova Zelanda', sources: ['predictwind-privacy'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['predictwind-privacy', 'predictwind-cancel-help'], 'La política reconeix el dret de supressió i s’exerceix per escrit, però el centre d’ajuda només documenta com es cancel·la la subscripció, no com s’elimina el compte.'),
    selfService: f('no', 'official', ['predictwind-cancel-help'], 'El centre d’ajuda no té cap article sobre l’eliminació del compte; només explica la cancel·lació de les subscripcions.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Cancel·la la subscripció: si la vas contractar al web, des del teu compte a predictwind.com; si la vas contractar dins de l’aplicació, a Configuració > El teu nom > Subscripcions.',
      'Desactiva el seguiment de l’embarcació perquè deixi de transmetre les coordenades.',
      'Escriu a privacy@predictwind.com o a support@predictwind.com invocant el dret de supressió de l’article 17 del RGPD.',
      'Si no hi ha resposta, adreça’t al representant a la Unió Europea, a Marsella, que la mateixa política identifica.',
    ],
    obstacles: 'La política anuncia una taxa administrativa de 49 dòlars per lliurar una còpia de les dades. L’article 12.5 del RGPD exigeix que la primera còpia sigui gratuïta i només permet cobrar davant de peticions manifestament infundades o excessives.',
    dataRetained: 'Dades comptables durant un mínim de set anys i contingut publicat, que segons la política es manté encara que es desactivi el compte.',
    sources: ['predictwind-privacy', 'predictwind-cancel-help'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['predictwind-privacy'], 'La política reconeix l’accés i la portabilitat, però hi associa una taxa de 49 dòlars i no ofereix cap eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['predictwind-privacy'], 'És l’única fitxa d’aquest lot amb delegat de protecció de dades designat i representant a la Unió Europea identificat amb nom i adreça. La taxa de 49 dòlars per a la còpia de les dades en rebaixa el valor pràctic.', {
      url: 'mailto:privacy@predictwind.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['predictwind-privacy'], 'La política de galetes distingeix les publicitàries de la resta, però no descriu cap control equivalent dins de l’aplicació.'),
    telemetryOptOut: f('no', 'official', ['predictwind-privacy'], 'La política no ofereix cap manera de desactivar l’analítica ni l’enregistrament de sessions de FullStory.'),
    granularControls: f('partial', 'official', ['predictwind-privacy'], 'Hi ha configuració sobre què es mostra a altres persones usuàries, però no un panell de privadesa per finalitat.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a l’aplicació.'),
  },
  security: {
    e2ee: unknown('El servei inclou missatgeria per satèl·lit, però la política no diu si el contingut va xifrat d’extrem a extrem.'),
    transportEncryption: f('yes', 'official', ['predictwind-privacy'], 'La política diu que les dades sensibles i les de targeta es transmeten xifrades.'),
    atRestEncryption: f('partial', 'official', ['predictwind-privacy'], 'La política descriu controls d’accés lògics i físics als centres de dades i diu que no desa les dades de targeta als seus servidors, però no parla de xifratge en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre doble factor.'),
    independentAudits: unknown('No consta cap auditoria ni certificació.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt a predictwind.com.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'És alhora la política més detallada i la més problemàtica del lot: enumera els proveïdors amb nom, designa delegat de protecció de dades i representant a la Unió Europea, i tot seguit cobra per exercir el dret d’accés i empara les transferències als Estats Units en un mecanisme anul·lat el 2020. La taxa de 49 dòlars és l’element que cal vigilar: si s’aplica a una persona resident a la Unió Europea, contradiu l’article 12.5 del RGPD.',
    openQuestions: [
      capCercaIncidents,
      'La taxa de 49 dòlars per una còpia de les dades s’aplica també a les sol·licituds emparades en el RGPD?',
      'La missatgeria per satèl·lit va xifrada d’extrem a extrem?',
      'Quina és la data de l’última revisió de la política? No consta enlloc.',
    ],
  },
}

/* ═══════════════════════ AEMET ═══════════════════════ */
const aemet: AppSeed = {
  slug: 'aemet',
  name: 'Aemet: tiempo y radar España',
  company: 'aemet',
  categories: ['meteorologia', 'administracio-publica'],
  tagline: 'L’única aplicació del lot que declara que no recull cap dada, amb una política de quatre paràgrafs que no diu com exercir els drets',
  summary:
    'L’aplicació oficial de l’agència meteorològica estatal declara a l’App Store que no recull cap dada, i la política diu que la ubicació es gestiona dins del dispositiu i no s’envia a l’AEMET. És, de llarg, el perfil de dades més net d’aquest lot. La contrapartida és documental: la política té quatre paràgrafs, no identifica el responsable ni el delegat de protecció de dades, no diu com s’exerceixen els drets i no concreta quant de temps es conserven els registres d’accés, que sí que inclouen l’adreça IP.',
  platforms: ['ios', 'android', 'web', 'macos'],
  businessModel: 'unknown',
  jurisdiction: 'Espanya; agència estatal adscrita al Ministeri per a la Transició Ecològica i el Repte Demogràfic',
  links: {
    website: 'https://www.aemet.es/es/app/eltiempodeAEMET',
    privacyPolicy: 'https://www.aemet.es/es/app/eltiempodeAEMET/politica_privacidad_app',
    terms: 'https://www.aemet.es/es/nota_legal',
    appStore: appStore('784646178'),
  },
  accountRequired: f('no', 'official', ['aemet-app-store', 'aemet-privacy-app'], 'Ni la fitxa de l’App Store ni la política descriuen cap registre ni cap compte.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació. Les dades meteorològiques sí que es publiquen com a dades obertes reutilitzables.'),
  dataSummary:
    'Si la política diu la veritat, el que queda del costat de l’AEMET és un registre d’accés amb l’adreça IP. És poc, però no és res: l’adreça IP és una dada personal i la política no diu ni durant quant de temps es conserva ni amb quina base jurídica.',
  dataCollection: [
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['aemet-privacy-app', 'aemet-app-store'], note: 'La política diu que la ubicació només la gestiona l’aplicació dins del dispositiu i que no s’envia a l’AEMET. La fitxa de l’App Store, però, avisa que l’aplicació pot fer servir la ubicació encara que no estigui oberta.' }),
    row('adreca-ip', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['aemet-privacy-app'], note: 'La política reconeix que els registres d’accés contenen l’adreça IP i que serveixen per fer estadístiques d’ús i assegurar el servei. L’etiqueta de l’App Store, en canvi, diu que no es recull cap dada.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['investigacio-i-estadistica'], sources: ['aemet-privacy-app'], note: 'Estadístiques d’ús a partir dels registres d’accés.' }),
    row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['aemet-app-store'], note: 'L’etiqueta declara que no es recull cap dada i la fitxa no indica que l’aplicació contingui publicitat.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['aemet-app-store'], 'L’etiqueta de l’App Store declara que no es recull cap dada, i per tant tampoc cap dada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['aemet-app-store', 'aemet-privacy-app'], 'Ni l’etiqueta ni la política esmenten cap identificador publicitari.'),
    thirdPartyTrackersPresent: unknown('La política no esmenta cap component de tercers, però no ho hem pogut comprovar amb una anàlisi independent de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['aemet-privacy-app', 'aemet-app-store'], 'No hi ha publicitat: és un servei públic finançat amb pressupost.'),
    profiling: f('no', 'official', ['aemet-privacy-app'], 'La política diu que actualment no es recullen dades personals identificatives i no preveu cap perfilat.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: unknown('La política no esmenta cap encarregat del tractament ni cap cessió, però tampoc no els exclou expressament.'),
    intraGroupSharing: na('És una agència estatal; no forma part de cap grup empresarial.'),
    dataBrokerSales: f('no', 'official', ['aemet-privacy-app', 'aemet-nota-legal'], 'No hi ha cap finalitat comercial: la nota legal regula la reutilització lliure de les dades meteorològiques com a dades obertes, amb l’única condició de citar-ne la font.'),
    internationalTransfers: unknown('La política no esmenta on s’allotja el servei ni cap transferència internacional.'),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: f('partial', 'official', ['aemet-transparencia', 'aemet-accessibilitat-ios'], 'Hi ha un portal de transparència institucional amb informació organitzativa, econòmica i de sol·licituds d’accés a la informació pública, i una declaració d’accessibilitat de la versió per a iOS, però cap informe sobre peticions de dades de persones usuàries.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['aemet-privacy-app'], 'La política descriu els registres d’accés com a «temporals», sense cap termini.'),
    dataAfterDeletion: na('No hi ha compte ni dades personals identificatives que calgui suprimir, segons la política.'),
  },
  accountDeletion: {
    possible: na('No hi ha compte: la política diu que actualment no es recullen dades personals identificatives.'),
    selfService: na('Sense compte no hi ha res a donar de baixa; n’hi ha prou de desinstal·lar l’aplicació.'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Desinstal·la l’aplicació: les preferències de municipis, platges i avisos es guarden al dispositiu.',
      'Si vols demanar la supressió dels registres d’accés associats a la teva adreça IP, adreça’t a l’atenció ciutadana de l’AEMET, perquè la política no identifica cap delegat de protecció de dades.',
    ],
    dataRetained: 'Registres d’accés amb adreça IP, durant un termini que la política només qualifica de temporal.',
    sources: ['aemet-privacy-app', 'aemet-app-store'],
  },
  userRights: {
    dataExport: unknown('La política no esmenta el dret de portabilitat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('no', 'official', ['aemet-privacy-app'], 'La política cita el RGPD i la Llei orgànica 3/2018, però no enumera els drets, no explica com s’exerceixen, no identifica el responsable amb dades de contacte ni designa cap delegat de protecció de dades.'),
  },
  controls: {
    adPersonalizationOptOut: na('El servei no mostra publicitat.'),
    telemetryOptOut: f('no', 'official', ['aemet-privacy-app'], 'Els registres d’accés amb adreça IP es generen sempre; la política no ofereix cap manera d’evitar-los.'),
    granularControls: f('partial', 'official', ['aemet-privacy-app'], 'El permís d’ubicació és opcional i la resta de preferències es configuren a l’aplicació, però no hi ha cap panell de privadesa.'),
    defaultPosture: 'protective',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a l’aplicació.'),
  },
  security: {
    e2ee: na('Servei d’informació meteorològica; no hi ha comunicació privada entre persones.'),
    transportEncryption: unknown('La política només parla d’un compromís de compliment de la legislació, sense cap mesura tècnica. L’enllaç de política de privadesa de la fitxa de l’App Store, a més, apunta per HTTP a la nota legal.'),
    atRestEncryption: unknown('La política no diu res sobre el xifratge en repòs.'),
    mfa: na('No hi ha compte que calgui protegir.'),
    independentAudits: unknown('No hem trobat cap declaració de conformitat amb l’Esquema Nacional de Seguretat ni cap auditoria publicada.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses; no és habitual a l’Administració, però no ho hem pogut confirmar amb una font.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt a aemet.es. L’únic canal formal publicat és el formulari d’incidències de la seu electrònica, pensat per a queixes, no per a seguretat.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'L’enllaç «Política de privacidad» de la fitxa de l’App Store apunta a la nota legal —un document del novembre del 2016 sobre reutilització de dades obertes— i ho fa per HTTP. La política de privadesa específica de l’aplicació existeix, però només s’enllaça des d’aemet.es. La declaració d’accessibilitat de la versió iOS diu «parcialment conforme» i es refereix a la versió 2.9, revisada el novembre del 2022, quan la publicada és la 3.1.7.',
    openQuestions: [
      capCercaIncidents,
      'Quant de temps es conserven els registres d’accés amb adreça IP i amb quina base jurídica?',
      'Qui és el delegat de protecció de dades competent i com s’exerceixen els drets davant de l’AEMET?',
      'Per què la fitxa de l’App Store avisa que l’aplicació pot fer servir la ubicació encara que no estigui oberta, si la política diu que la ubicació no surt del dispositiu?',
    ],
  },
}

/* ═══════════════════════ La Meva Salut ═══════════════════════ */
const laMevaSalut: AppSeed = {
  slug: 'la-meva-salut',
  name: 'La Meva Salut',
  company: 'departament-de-salut',
  categories: ['salut-i-assistencia-sanitaria', 'administracio-publica'],
  tagline: 'Dades de salut declarades com a sensibles a l’App Store, i un «compte» que és una identitat digital que no es pot donar de baixa des de l’aplicació',
  summary:
    'La Meva Salut és la porta d’entrada a la història clínica compartida de Catalunya: informes, medicació, vacunes, resultats de proves i cites. La política és exemplar en la part jurídica —responsable identificat, bases jurídiques citades article per article, cap transferència fora de la Unió Europea i terminis legals explícits— i és de les poques d’aquest lot que diu exactament què es conserva i durant quant de temps. El que no ofereix és una sortida: l’accés es fa amb idCAT Mòbil, certificat o Cl@ve, i la història clínica té terminis de conservació propis que no depenen de la voluntat de la persona.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'unknown',
  jurisdiction: 'Catalunya; servei públic del Departament de Salut de la Generalitat',
  links: {
    website: 'https://lamevasalut.gencat.cat/',
    privacyPolicy: 'https://lamevasalut.gencat.cat/web/cps/privadesa-i-seguretat',
    terms: 'https://lamevasalut.gencat.cat/web/cps/avis-legal',
    appStore: appStore('1358288989'),
  },
  accountRequired: f('yes', 'official', ['la-meva-salut-catsalut', 'la-meva-salut-privacitat'], 'Cal identificació digital amb idCAT Mòbil, certificat digital o DNI electrònic, tenir la targeta sanitària individual i 16 anys o més. Per als comptes antics encara funciona la contrasenya, però no se’n creen de noves.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  dataSummary:
    'És el conjunt de dades més sensible de tot el lot: diagnòstics, medicació, vacunes, resultats de proves i visites. A diferència de la resta, aquestes dades no les genera l’aplicació sinó el sistema sanitari, i la persona no en pot demanar l’esborrat: la llei obliga a conservar la història clínica.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['la-meva-salut-privacitat', 'la-meva-salut-app-store'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['la-meva-salut-privacitat', 'la-meva-salut-catsalut'], note: 'La targeta sanitària individual i la identificació digital són la clau d’accés.' }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal', 'investigacio-i-estadistica'], sources: ['la-meva-salut-privacitat', 'la-meva-salut-app-store'], note: 'Dades de la història clínica compartida de Catalunya. L’etiqueta de l’App Store les declara vinculades a la identitat i inclou una categoria de «datos sensibles».' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['la-meva-salut-app-store', 'la-meva-salut-privacitat'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['la-meva-salut-app-store'], note: 'També és el segon factor d’idCAT Mòbil.' }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['la-meva-salut-app-store'] }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['la-meva-salut-app-store', 'la-meva-salut-privacitat'], note: 'L’etiqueta declara «correos o mensajes de texto»: és la consulta escrita amb els professionals del centre.' }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['la-meva-salut-app-store', 'la-meva-salut-privacitat'], note: 'La política descriu un registre d’accessos que anota quan s’ha entrat i què s’ha consultat; és una garantia, perquè permet saber qui ha mirat la història clínica.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['la-meva-salut-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['la-meva-salut-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['la-meva-salut-app-store'], note: 'Dades d’error i de rendiment, declarades vinculades a la identitat.' }),
    row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['la-meva-salut-app-store'], note: 'L’etiqueta no declara cap dada utilitzada per rastrejar.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['la-meva-salut-app-store'], 'L’etiqueta de l’App Store no té secció de dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['la-meva-salut-app-store', 'la-meva-salut-privacitat'], 'Ni l’etiqueta ni la política esmenten cap identificador publicitari.'),
    thirdPartyTrackersPresent: f('partial', 'official', ['la-meva-salut-avis-legal'], 'L’avís de galetes del lloc web descriu galetes analítiques de tercers; la política de l’aplicació no esmenta cap component de tercers.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['la-meva-salut-privacitat'], 'Cap de les finalitats de la política és publicitària: és un servei públic sanitari.'),
    profiling: f('no', 'official', ['la-meva-salut-privacitat'], 'La política no preveu cap elaboració de perfils ni cap decisió automatitzada.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models amb les dades de la història clínica.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['la-meva-salut-privacitat'], 'Els destinataris són professionals assistencials acreditats amb vinculació assistencial i altres professionals i autoritats acreditades; no hi ha cessions comercials.'),
    intraGroupSharing: f('yes', 'official', ['la-meva-salut-privacitat', 'la-meva-salut-catsalut'], 'Les dades circulen dins del sistema sanitari públic català a través de la història clínica compartida.'),
    dataBrokerSales: f('no', 'official', ['la-meva-salut-privacitat'], 'No hi ha cap cessió comercial prevista. La política preveu usos d’arxiu, investigació i estadística amb minimització o anonimització.'),
    internationalTransfers: f('no', 'official', ['la-meva-salut-privacitat'], 'La política diu textualment que les dades no es transfereixen a cap país de fora de la Unió Europea.', { mechanism: 'none' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe sobre peticions d’accés a les dades per part d’autoritats.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['la-meva-salut-privacitat'], 'La política fixa terminis concrets, derivats de la normativa sanitària: la història clínica es conserva com a mínim 5 anys i fins a 15 anys des de l’alta de cada procés assistencial, i el registre d’accessos un mínim de 2 anys.'),
    dataAfterDeletion: f('yes', 'official', ['la-meva-salut-privacitat'], 'La història clínica s’ha de conservar per obligació legal encara que es deixi de fer servir el servei; donar de baixa la identitat digital no l’esborra.'),
    periods: [
      { dataType: 'dades-de-salut', period: 'Com a mínim 5 anys i fins a 15 anys des de l’alta de cada procés assistencial', sources: ['la-meva-salut-privacitat'] },
      { dataType: 'historial-de-navegacio', period: 'Registre d’accessos: mínim 2 anys', sources: ['la-meva-salut-privacitat'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['la-meva-salut-privacitat', 'la-meva-salut-catsalut'], 'No hi ha un compte propi de l’aplicació que es pugui eliminar: l’accés és amb idCAT Mòbil, certificat o Cl@ve, i la història clínica té terminis legals de conservació.'),
    selfService: f('no', 'official', ['la-meva-salut-catsalut', 'la-meva-salut-privacitat'], 'Ni l’aplicació ni la fitxa del servei descriuen cap opció de baixa; la fitxa remet a trucar al 061 Salut Respon.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Desinstal·la l’aplicació: deixa de consultar la història clínica des del mòbil, però no esborra res del sistema.',
      'Per donar de baixa la identitat digital, adreça’t al Consorci AOC, que és qui emet l’idCAT Mòbil, o revoca el certificat digital.',
      'Per limitar qui pot consultar la teva història clínica compartida, demana-ho al teu centre d’atenció primària o per escrit al Departament de Salut.',
      'Per exercir els drets del RGPD, escriu a protecciodedades.salut@gencat.cat o al delegat de protecció de dades, a dpd@ticsalutsocial.cat.',
    ],
    obstacles: 'No existeix cap camí d’autoservei. La supressió de la història clínica no és possible mentre corren els terminis legals de conservació, i això s’ha d’entendre com una garantia sanitària, no com un obstacle comercial.',
    dataRetained: 'La història clínica, entre 5 i 15 anys des de l’alta de cada procés assistencial, i el registre d’accessos, un mínim de 2 anys.',
    sources: ['la-meva-salut-privacitat', 'la-meva-salut-catsalut'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['la-meva-salut-privacitat'], 'La política preveu la descàrrega de la informació en PDF i en format estructurat des del mateix servei.'),
    exportFormatQuality: 'mixed',
    rightsExercise: f('yes', 'official', ['la-meva-salut-privacitat'], 'Hi ha formulari electrònic, adreça postal, correu de protecció de dades i delegat de protecció de dades identificat. L’autoritat de control és l’Autoritat Catalana de Protecció de Dades.', {
      url: 'mailto:protecciodedades.salut@gencat.cat',
    }),
  },
  controls: {
    adPersonalizationOptOut: na('El servei no mostra publicitat.'),
    telemetryOptOut: unknown('L’etiqueta de l’App Store declara dades d’ús i de diagnòstic vinculades a la identitat, però la política no diu si es poden desactivar.'),
    granularControls: f('partial', 'official', ['la-meva-salut-privacitat'], 'El registre d’accessos permet veure qui ha consultat la història clínica, però la política no descriu controls per finalitat.'),
    defaultPosture: 'protective',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a l’aplicació.'),
  },
  security: {
    e2ee: na('No és un servei de comunicació entre particulars; la consulta amb els professionals es fa dins del sistema sanitari.'),
    transportEncryption: f('yes', 'official', ['la-meva-salut-privacitat'], 'La política diu que tota la informació sensible es xifra amb TLS 1.2 i que el certificat de servidor l’emet CatCert. Citar només TLS 1.2 és una redacció antiga: la versió recomanada avui és la 1.3.'),
    atRestEncryption: unknown('La política no diu res sobre el xifratge de les dades en repòs.'),
    mfa: f('yes', 'official', ['la-meva-salut-catsalut', 'la-meva-salut-privacitat'], 'L’accés habitual és amb idCAT Mòbil, que envia una contrasenya d’un sol ús al telèfon registrat, i també s’admeten el certificat digital i el DNI electrònic.', {
      methods: ['sms'],
    }),
    independentAudits: unknown('No hem trobat cap declaració de conformitat amb l’Esquema Nacional de Seguretat ni cap auditoria publicada del servei.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt a lamevasalut.gencat.cat ni als altres dominis de la Generalitat que hem comprovat.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'La política designa com a responsable el Departament de Salut, mentre que la fitxa del servei el presenta com un servei gestionat pel CatSalut: és una incoherència entre dues fonts oficials que convé aclarir, perquè determina davant de qui s’exerceixen els drets. El registre d’accessos mereix una menció positiva: poder saber qui ha consultat la teva història clínica és una garantia que gairebé cap servei privat ofereix.',
    openQuestions: [
      capCercaIncidents,
      'Qui és formalment el responsable del tractament, el Departament de Salut o el CatSalut?',
      'Quin nivell de l’Esquema Nacional de Seguretat té categoritzat el servei i hi ha declaració de conformitat?',
      'Quin és el tràmit exacte per donar de baixa l’idCAT Mòbil?',
    ],
  },
}

/* ═══════════════════════ Vítaly ═══════════════════════ */
const vitaly: AppSeed = {
  slug: 'vitaly',
  name: 'Vítaly',
  company: 'vitaly-health-services',
  categories: ['salut-i-assistencia-sanitaria'],
  tagline: 'Aplicació de vigilància de la salut laboral que no declara cap dada de salut a l’App Store i que diu alhora que no fa transferències fora de la UE i que Microsoft en pot fer perfils publicitaris',
  summary:
    'Vítaly és l’aplicació del servei de prevenció aliè que va néixer de la unió de Preving i Cualtis: hi consultes el reconeixement mèdic, les analítiques i la telemedicina que et fa l’empresa on treballes. La política identifica bé el responsable, les bases jurídiques i els terminis legals, però conté dues contradiccions rellevants: l’etiqueta de l’App Store no declara cap dada de salut i, en el mateix apartat, la política nega les transferències fora de la Unió Europea i tot seguit diu que Microsoft Ireland pot tractar les dades com a responsable independent per crear perfils de publicitat personalitzada.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'unknown',
  jurisdiction: 'Espanya',
  userBase: 'El grup declara més de 2,5 milions de persones protegides i més de 150.000 empreses clients',
  links: {
    website: 'https://vitaly.es/',
    privacyPolicy: 'https://privacidad.vitaly.es/app-vitaly/',
    appStore: appStore('6470290292'),
  },
  accountRequired: f('yes', 'official', ['vitaly-privacy-app'], 'Cal donar el consentiment i identificar-se: la política diu que sense consentiment no es pot accedir a l’aplicació.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  dataSummary:
    'Reconeixements mèdics, analítiques, telemedicina i salut mental lligats a la feina. És una combinació poc habitual: dades de salut i dades laborals al mateix lloc, en un servei que la persona no tria, sinó que li ve donat per l’empresa on treballa.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['vitaly-app-store', 'vitaly-privacy-app'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['vitaly-privacy-app'], note: 'Número de document i signatura.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['vitaly-app-store', 'vitaly-privacy-app'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['vitaly-app-store'] }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['vitaly-privacy-app'], note: 'La política llista expressament les dades de salut, però l’etiqueta de l’App Store no declara cap categoria de salut i forma física.' }),
    row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['vitaly-privacy-app'], note: 'Detalls de l’ocupació. A l’empresa ocupadora només se li comuniquen les conclusions d’aptitud psicofísica, no les dades clíniques.' }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['vitaly-app-store'], note: 'L’etiqueta declara «correos o mensajes de texto» vinculats a la identitat: és la comunicació amb els professionals sanitaris.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['vitaly-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['vitaly-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['vitaly-app-store', 'vitaly-privacy-app'], note: 'La política parla de registres de tocs, navegació i activitat a la pantalla.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['vitaly-app-store'] }),
    row('ubicacio-aproximada', 'unknown', { note: 'La fitxa de Google Play declara que l’aplicació pot compartir la ubicació amb tercers; ni l’etiqueta de l’App Store ni la política ho esmenten.', sources: ['vitaly-play-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['vitaly-app-store'], 'L’etiqueta de l’App Store no té secció de dades utilitzades per rastrejar.'),
    advertisingIdentifiers: unknown('L’etiqueta no declara cap identificador publicitari, però la política esmenta perfils publicitaris de Microsoft Ireland.'),
    thirdPartyTrackersPresent: f('partial', 'official', ['vitaly-privacy-app'], 'La política diu que Microsoft Ireland Operations Ltd. pot tractar dades com a responsable independent per crear perfils de publicitat personalitzada.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['vitaly-privacy-app'], 'El servei no mostra publicitat, però la política declara que Microsoft Ireland pot crear perfils per a publicitat personalitzada com a responsable independent.'),
    profiling: f('partial', 'official', ['vitaly-privacy-app'], 'La política diu que no es prenen decisions automatitzades ni s’elaboren perfils i, en el mateix document, que Microsoft Ireland en pot crear amb finalitat publicitària. És una contradicció interna.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['vitaly-privacy-app'], 'A l’empresa ocupadora només se li comuniquen les conclusions d’aptitud. La política afirma que no se cediran dades de salut a cap tercer.'),
    intraGroupSharing: f('yes', 'official', ['vitaly-privacy-app'], 'Comunicacions internes dins del grup Vítaly.'),
    dataBrokerSales: f('no', 'official', ['vitaly-privacy-app'], 'La política declara que no se cediran dades de salut a cap tercer.'),
    internationalTransfers: f('partial', 'official', ['vitaly-privacy-app'], 'La política diu que no es fan transferències fora de la Unió Europea i, tot seguit, que les dades poden ser transferides als Estats Units en el marc del Data Privacy Framework a través de Microsoft Ireland. Les dues afirmacions són incompatibles.', { mechanism: 'adequacy' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['vitaly-cancelacio'], 'La política de cancel·lació fixa un mínim de 5 anys, amparat en l’article 23 de la Llei 31/1995 de prevenció de riscos laborals i l’article 17.1 de la Llei 41/2002, ampliable per la normativa sanitària.'),
    dataAfterDeletion: f('yes', 'official', ['vitaly-cancelacio'], 'La documentació de vigilància de la salut s’ha de conservar encara que la persona demani la supressió, mentre corren els terminis legals.'),
    periods: [
      { dataType: 'dades-de-salut', period: 'Mínim 5 anys (Llei 31/1995 i Llei 41/2002), ampliable per la normativa sanitària específica', sources: ['vitaly-cancelacio'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['vitaly-drets', 'vitaly-cancelacio'], 'La supressió s’ha de demanar formalment i xoca amb els terminis legals de conservació de la documentació de vigilància de la salut.'),
    selfService: f('no', 'official', ['vitaly-drets'], 'No hi ha cap opció d’eliminació dins de l’aplicació: cal omplir un formulari en format .docx, adjuntar-hi còpia del document d’identitat i enviar-lo per correu electrònic o postal.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    waitingPeriodDays: 30,
    steps: [
      'Descarrega el model d’exercici de drets de privacidad.vitaly.es.',
      'Omple’l, adjunta-hi una còpia del DNI o del passaport i envia’l a privacidad@vitaly.es o per correu postal a l’adreça de Badajoz amb la referència «Ejercicio derechos».',
      'Espera la resposta, que segons la mateixa pàgina arriba en un màxim d’un mes.',
      'Si Vítaly actua com a encarregat per compte de la teva empresa, et derivarà al responsable: has de repetir la sol·licitud davant de l’empresa ocupadora.',
    ],
    obstacles:
      'La sol·licitud exigeix un formulari en format .docx i una còpia del document d’identitat, cosa que és un obstacle en si mateixa. A més, en molts casos Vítaly actua com a encarregat del tractament i deriva la petició a l’empresa ocupadora, que és qui decideix.',
    dataRetained: 'La documentació de vigilància de la salut, durant un mínim de cinc anys.',
    sources: ['vitaly-drets', 'vitaly-cancelacio'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['vitaly-drets'], 'La portabilitat es reconeix, però només per la via del formulari manual: no hi ha cap eina d’autoservei d’exportació.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['vitaly-drets'], 'Hi ha una pàgina específica amb el procediment, el formulari, l’adreça postal, el correu de privadesa i el termini d’un mes, i s’hi indica la reclamació davant de l’AEPD.', {
      url: 'mailto:privacidad@vitaly.es',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: unknown('La política no descriu cap manera d’oposar-se als perfils publicitaris que atribueix a Microsoft Ireland.'),
    telemetryOptOut: f('no', 'official', ['vitaly-privacy-app'], 'La política declara que es registren els tocs, la navegació i l’activitat a la pantalla, sense oferir cap manera de desactivar-ho.'),
    granularControls: unknown('No hem trobat cap panell de privadesa a l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a l’aplicació.'),
  },
  security: {
    e2ee: unknown('El servei inclou telemedicina i missatgeria amb professionals sanitaris, però no hem trobat cap promesa de xifratge d’extrem a extrem.'),
    transportEncryption: f('yes', 'official', ['vitaly-play-store'], 'La fitxa de Google Play declara que les dades van xifrades en trànsit.'),
    atRestEncryption: unknown('No hem trobat cap informació sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre doble factor.'),
    independentAudits: f('yes', 'official', ['vitaly-certificacions'], 'L’empresa publica la certificació ISO/IEC 27001:2022 i la conformitat amb l’Esquema Nacional de Seguretat de nivell mitjà (Reial decret 311/2022). La política de l’aplicació encara cita la versió 27001:2013.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: f('partial', 'official', ['vitaly-certificacions'], 'Hi ha un sistema de gestió de la seguretat de la informació documentat públicament, amb un procediment de gestió de vulneracions, però no un canal obert per notificar vulnerabilitats des de fora. No hi ha fitxer security.txt a vitaly.es.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El cercador de resolucions de l’AEPD no retorna cap resultat per als termes «preving», «preving investments», «cualtis» ni «vitaly». La fitxa té dues discrepàncies documentades: el venedor a l’App Store és Preving Investments, S.L., mentre que el responsable del tractament declarat és Vítaly Health Services, S.L.U.; i l’etiqueta de l’App Store no declara cap dada de salut tot i que la política sí que les enumera. Cal recordar que l’ús d’aquesta aplicació no és una tria lliure: la relació ve donada per l’empresa on es treballa.',
    openQuestions: [
      'Com es concilia «no es fan transferències fora de la Unió Europea» amb el paràgraf que preveu el tractament per Microsoft Ireland i la transferència als Estats Units?',
      'Per què l’etiqueta de l’App Store no declara cap dada de salut si la política les enumera expressament?',
      'Quina relació societària hi ha entre Preving Investments, S.L. i Vítaly Health Services, S.L.U.?',
      'La cerca d’incidents s’ha limitat al cercador oficial de resolucions de l’AEPD; no s’ha pogut completar amb cerques generals.',
    ],
  },
}

/* ═══════════════════════ Technogym ═══════════════════════ */
const technogym: AppSeed = {
  slug: 'technogym',
  name: 'Technogym - app gym y casa',
  company: 'technogym',
  categories: ['benestar-i-activitat-fisica'],
  tagline: 'Declara rastreig per identificadors a l’App Store i «no es comparteixen dades amb tercers» a Google Play, i conserva les dades deu anys després d’eliminar el compte',
  summary:
    'L’aplicació de la marca italiana de maquinària de gimnàs connecta els aparells, els entrenaments i el compte Mywellness. L’etiqueta de l’App Store declara ubicació exacta, dades de forma física, fotos i identificadors vinculats a la identitat, i els identificadors també com a dades per rastrejar; la fitxa de Google Play, en canvi, diu que no es comparteixen dades amb tercers. La política és clara en un punt important: encara que el compte s’elimini immediatament, les dades de compres i d’ús es conserven deu anys abans d’anonimitzar-les.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Itàlia',
  links: {
    website: 'https://www.technogym.com/es-ES/',
    privacyPolicy: 'https://www.technogym.com/es-ES/politica-de-privacidad-de-technogym/',
    terms: 'https://www.technogym.com/es-ES/terms-of-use/',
    appStore: appStore('976506047'),
  },
  accountRequired: f('partial', 'official', ['technogym-privacy'], 'Als aparells d’un gimnàs s’hi pot entrenar sense compte de Technogym, i llavors el responsable és el gimnàs. Per fer servir l’aplicació i sincronitzar els entrenaments cal compte, i llavors Technogym passa a ser responsable independent de les mateixes dades.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  dataSummary:
    'Un registre d’entrenaments diu quan fas exercici, a quina intensitat i, amb la ubicació exacta, on. Afegit a les fotos del perfil i a l’historial de compres, dibuixa una rutina setmanal molt precisa que, segons l’etiqueta, es fa servir també per a màrqueting i personalització.',
  dataCollection: [
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['technogym-app-store', 'technogym-privacy'], note: 'L’etiqueta declara «Salud y forma física (Forma física)» vinculada a la identitat.' }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['technogym-app-store'], note: 'L’etiqueta la declara sota «Funcionalidad de la app» i vinculada a la identitat.' }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['technogym-app-store', 'technogym-privacy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['technogym-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['technogym-app-store'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['technogym-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['technogym-app-store'], note: 'L’etiqueta el declara sota quatre finalitats, inclosa «Publicidad o marketing del desarrollador», i els identificadors són l’única categoria declarada com a dada per rastrejar.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['technogym-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['technogym-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['technogym-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['technogym-privacy'], note: 'La política diu que les dades de compres i d’ús es conserven deu anys després d’eliminar el compte.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['technogym-app-store'], 'L’etiqueta declara els identificadors com a dades utilitzades per rastrejar en aplicacions i llocs web d’altres empreses.'),
    advertisingIdentifiers: f('partial', 'official', ['technogym-app-store'], 'L’etiqueta declara l’identificador d’usuari sota la finalitat de publicitat o màrqueting del desenvolupador, però no esmenta l’identificador publicitari del sistema.'),
    thirdPartyTrackersPresent: unknown('La política no anomena cap eina d’analítica ni cap xarxa publicitària concreta.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['technogym-app-store', 'technogym-privacy'], 'L’etiqueta declara una finalitat de publicitat o màrqueting del desenvolupador, i la política preveu perfils comercials revocables des de la configuració del perfil.'),
    profiling: f('yes', 'official', ['technogym-privacy'], 'La política parla de perfils comercials i explica com revocar-ne el consentiment des dels ajustos del perfil o des dels correus.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models, tot i que el producte inclou un entrenador amb intel·ligència artificial.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['technogym-privacy', 'technogym-play-store'], 'La política preveu corresponsables locals —sucursals i distribuïdors— per a venda, manteniment i màrqueting. La fitxa de Google Play, en canvi, declara que no es comparteixen dades amb tercers, cosa que xoca amb el rastreig per identificadors declarat a l’App Store.'),
    intraGroupSharing: f('yes', 'official', ['technogym-privacy'], 'Sucursals i distribuïdors locals actuen com a corresponsables del tractament.'),
    dataBrokerSales: unknown('La política no esmenta cap venda de dades.'),
    internationalTransfers: f('partial', 'official', ['technogym-privacy'], 'La política diu que adopta mesures específiques per legitimar les transferències a tercers països, però no concreta ni el mecanisme ni els països.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència; el lloc corporatiu publica informes financers i de sostenibilitat, però cap sobre peticions de dades.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['technogym-privacy'], 'La política fixa deu anys per a les dades de compres i d’ús i cinc anys d’inactivitat abans de l’anonimització del compte.'),
    dataAfterDeletion: f('yes', 'official', ['technogym-privacy'], 'Textualment: el compte s’elimina immediatament, però les dades de compres i d’ús es conserven deu anys. Un cop anonimitzades, ja no es poden recuperar.'),
    periods: [
      { dataType: 'historial-de-compres', period: '10 anys des de l’eliminació del compte', sources: ['technogym-privacy'] },
      { dataType: 'interaccions-i-us', period: '10 anys des de l’eliminació del compte; anonimització després de 5 anys d’inactivitat, amb dos recordatoris trimestrals previs', sources: ['technogym-privacy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['technogym-privacy'], 'La política diu que es pot demanar l’eliminació del compte en qualsevol moment i que s’elimina immediatament.'),
    selfService: unknown('No hem pogut verificar si hi ha un botó d’eliminació dins de l’aplicació: les pàgines de suport es generen amb JavaScript i no exposen cap article sobre l’eliminació del compte.'),
    difficulty: 'medium',
    steps: [
      'Demana l’eliminació del compte de Technogym des del teu perfil o escrivint al delegat de protecció de dades, a dpo@technogym.com.',
      'Si entrenes en un gimnàs, contacta a part amb la instal·lació: eliminar el compte de Technogym no esborra les dades que té el gimnàs, que n’és responsable per separat.',
      'Si vols conservar-ne una còpia, demana la portabilitat abans, perquè un cop anonimitzades les dades ja no es poden recuperar.',
    ],
    obstacles: 'La conservació de deu anys de les dades de compres i d’ús convé llegir-la abans: el compte desapareix però el registre d’activitat no.',
    dataRetained: 'Dades de compres i d’ús durant deu anys, fins a l’anonimització.',
    sources: ['technogym-privacy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['technogym-privacy'], 'La política diu que per a alguns serveis hi ha sistemes de portabilitat automatitzats dins del compte, però no concreta per a quins ni on es troben.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['technogym-privacy'], 'Hi ha delegat de protecció de dades designat, amb correu electrònic i adreça postal a Cesena.', {
      url: 'mailto:dpo@technogym.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['technogym-privacy'], 'El consentiment per a perfils comercials es pot revocar des dels ajustos del perfil, des de l’enllaç de baixa dels correus o escrivint al delegat de protecció de dades.'),
    telemetryOptOut: unknown('La política no descriu cap manera de desactivar l’analítica d’ús.'),
    granularControls: f('partial', 'official', ['technogym-privacy'], 'Hi ha controls sobre el màrqueting, però no un panell de privadesa per finalitat.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a l’aplicació.'),
  },
  security: {
    e2ee: na('No és un servei de comunicació privada entre persones.'),
    transportEncryption: f('yes', 'official', ['technogym-play-store'], 'La fitxa de Google Play declara que les dades van xifrades en trànsit.'),
    atRestEncryption: unknown('No hem trobat cap informació sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre doble factor.'),
    independentAudits: unknown('No hem trobat cap certificació de seguretat publicada.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses. El canal ètic del web corporatiu és de denúncies internes, no de seguretat.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt a technogym.com ni a mywellness.com.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El cercador de resolucions del Garante per la protezione dei dati personali no retorna cap provisió atribuïble a Technogym. La URL que la fitxa de l’App Store publica com a política de privadesa no funciona: la política accessible en castellà és una altra. La distinció més útil de la política és la de rols: al gimnàs, Technogym és encarregat i el responsable és la instal·lació; si es connecta el compte, Technogym passa a ser responsable independent de les mateixes dades.',
    openQuestions: [
      'Quina és la data de l’última revisió de la política? No consta al document.',
      'L’aplicació permet eliminar el compte des de dins, com exigeix la directriu 5.1.1(v) de l’App Store?',
      'Quin mecanisme empara les transferències a tercers països i cap a quins països?',
      'L’entrenador amb intel·ligència artificial fa servir les dades d’entrenament per entrenar models?',
      'La cerca d’incidents s’ha limitat al cercador oficial del Garante; no s’ha pogut completar amb cerques generals.',
    ],
  },
}

export const lot: SeedLot = {
  companies: [
    {
      slug: 'einmob',
      name: 'EINMOB LIMITED',
      legalName: 'EINMOB LIMITED',
      description:
        'Editor d’aplicacions d’utilitats registrat a Hong Kong, amb una desena d’aplicacions gratuïtes finançades amb publicitat (temps, escàner de documents, neteja, traductor). A l’App Store consta com a comerciant amb número DUNS 655895520.',
      headquartersCountry: 'HK',
      ownership: 'private',
      primaryRevenueModel: 'advertising',
      website: 'https://topweathercolor.com/',
      productDomains: ['topweathercolor.com'],
    },
    {
      slug: 'aviles-software',
      name: 'Carlos Avilés - Software',
      legalName: 'Carlos Avilés - Software',
      description:
        'Desenvolupador independent establert a Berlín que publica Rain Alarm a iOS. La política declara una corresponsabilitat amb Michael Diener - Software e.K., de Merano (Itàlia), que opera el web del producte i la versió d’Android.',
      headquartersCountry: 'DE',
      euEstablishment: 'Borsigstr. 16, 10115 Berlín, Alemanya',
      leadSupervisoryAuthority: 'Berliner Beauftragte für Datenschutz und Informationsfreiheit',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.avilessoftware.com/',
      productDomains: ['rain-alarm.com', 'avilessoftware.com'],
      privacyContact: 'rainalarm@avilessoftware.com',
    },
    {
      slug: 'lighten-apps',
      name: 'Lighten Apps',
      legalName: 'lighten apps ltd',
      description:
        'Editor israelià d’una desena d’aplicacions d’utilitats i subscripció (temps, comandament de televisor, canviador de veu, generador d’imatges). A l’App Store consta com a comerciant amb número DUNS 626473696.',
      headquartersCountry: 'IL',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      productDomains: ['liveweatheradar.com'],
      privacyContact: 'support@liveweatheradar.com',
    },
    {
      slug: 'pelmorex',
      name: 'Pelmorex Corp.',
      legalName: 'Pelmorex Corp.',
      description:
        'Grup meteorològic canadenc fundat el 1989 i propietari de The Weather Network, MétéoMédia i eltiempo.es. Combina publicitat programàtica, solucions de dades d’audiència i el sistema públic canadenc d’alertes.',
      headquartersCountry: 'CA',
      ownership: 'private',
      foundedYear: 1989,
      primaryRevenueModel: 'advertising',
      website: 'https://www.pelmorex.com/',
      productDomains: ['theweathernetwork.com', 'meteomedia.com', 'eltiempo.es'],
      privacyContact: 'infoprivacy@pelmorex.com',
    },
    {
      slug: 'el-tiempo-previsto',
      name: 'El Tiempo Previsto',
      legalName: 'El Tiempo Previsto, S.L.U.',
      parent: 'pelmorex',
      description:
        'Filial espanyola del grup Pelmorex, titular del web eltiempo.es i de l’aplicació. La política designa com a responsable Pelmorex Corp., amb representant a Madrid.',
      headquartersCountry: 'ES',
      euEstablishment: 'Príncipe de Vergara 108, planta 4, 28002 Madrid',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'subsidiary',
      primaryRevenueModel: 'advertising',
      website: 'https://www.eltiempo.es/',
      productDomains: ['eltiempo.es'],
      privacyContact: 'infoprivacy@pelmorex.com',
    },
    {
      slug: 'shadowmap-technologies',
      name: 'Shadowmap Technologies',
      legalName: 'Shadowmap Technologies GmbH',
      description:
        'Empresa vienesa que desenvolupa Shadowmap, un simulador interactiu d’ombra solar per a particulars, arquitectura i portals immobiliaris. Registre mercantil FN 569219m al Handelsgericht de Viena.',
      headquartersCountry: 'AT',
      euEstablishment: 'Zollergasse 18-20/2/17, 1070 Viena, Àustria',
      leadSupervisoryAuthority: 'Datenschutzbehörde (Àustria)',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://shadowmap.org/',
      productDomains: ['shadowmap.org'],
      privacyContact: 'aloha@shadowmap.org',
    },
    {
      slug: 'predictwind',
      name: 'PredictWind',
      legalName: 'PredictWind Limited',
      description:
        'Empresa neozelandesa de previsió meteorològica marina, seguiment d’embarcacions i comunicacions per satèl·lit, molt estesa entre navegants i regatistes. Té representant a la Unió Europea a Marsella i delegat de protecció de dades designat.',
      headquartersCountry: 'NZ',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://www.predictwind.com/',
      productDomains: ['predictwind.com', 'predictcurrent.com'],
      privacyContact: 'privacy@predictwind.com',
    },
    {
      slug: 'aemet',
      name: 'AEMET',
      legalName: 'Agencia Estatal de Meteorología',
      description:
        'Agència estatal espanyola de meteorologia, adscrita al Ministeri per a la Transició Ecològica i el Repte Demogràfic. Publica les previsions, els avisos i el radar, i ofereix les dades com a dades obertes reutilitzables.',
      headquartersCountry: 'ES',
      euEstablishment: 'C/ Leonardo Prieto Castro, 8, 28071 Madrid',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'state',
      primaryRevenueModel: 'unknown',
      website: 'https://www.aemet.es/',
      productDomains: ['aemet.es', 'aemet.gob.es'],
    },
    {
      slug: 'departament-de-salut',
      name: 'Departament de Salut',
      legalName: 'Departament de Salut de la Generalitat de Catalunya',
      description:
        'Departament del Govern de la Generalitat de Catalunya responsable del sistema sanitari públic català i, segons la política del servei, del tractament de dades de La Meva Salut. El servei el gestiona el Servei Català de la Salut (CatSalut).',
      headquartersCountry: 'ES',
      euEstablishment: 'Travessera de les Corts, 131-159, Pavelló Ave Maria, 08028 Barcelona',
      leadSupervisoryAuthority: 'Autoritat Catalana de Protecció de Dades',
      ownership: 'state',
      primaryRevenueModel: 'unknown',
      website: 'https://salutweb.gencat.cat/',
      productDomains: ['lamevasalut.gencat.cat', 'catsalut.gencat.cat', 'salutweb.gencat.cat'],
      privacyContact: 'protecciodedades.salut@gencat.cat',
    },
    {
      slug: 'vitaly-health-services',
      name: 'Vítaly Health Services',
      legalName: 'Vítaly Health Services, S.L.U.',
      description:
        'Servei de prevenció aliè espanyol nascut de la integració de Preving i Cualtis, amb capital de fons d’inversió (Corpfin Capital i Artá Capital). Presta vigilància de la salut a empreses; a l’App Store, l’aplicació figura a nom de Preving Investments, S.L.',
      headquartersCountry: 'ES',
      euEstablishment: 'Avda. de la Innovación, 2, Edifici Vitaly, 06006 Badajoz',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      foundedYear: 1998,
      primaryRevenueModel: 'subscription',
      website: 'https://vitaly.es/',
      productDomains: ['vitaly.es', 'preving.com'],
      privacyContact: 'privacidad@vitaly.es',
    },
    {
      slug: 'technogym',
      name: 'Technogym',
      legalName: 'Technogym S.p.A.',
      description:
        'Fabricant italià de maquinària de gimnàs fundat el 1983 i cotitzat a la Borsa Italiana. Al voltant dels aparells hi ha un ecosistema digital de subscripció: Technogym App, Mywellness, MyRun i Skillathletic. A Espanya hi subministra Technogym Trading, S.A., amb NIF A62301338.',
      headquartersCountry: 'IT',
      euEstablishment: 'Via Calcinaro 2861, 47521 Cesena (FC), Itàlia',
      leadSupervisoryAuthority: 'Garante per la protezione dei dati personali (Itàlia)',
      ownership: 'public',
      foundedYear: 1983,
      primaryRevenueModel: 'mixed',
      website: 'https://www.technogym.com/',
      productDomains: ['technogym.com', 'mywellness.com', 'skillathletic.com'],
      privacyContact: 'dpo@technogym.com',
    },
  ],
  sources: [
    /* Weather Radar & Forecast */
    s('weather-radar-forecast-app-store', 'Weather Radar & Forecast en App Store (Privacidad de la app)', appStore('6468010213'), 'Apple / EINMOB LIMITED', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: només dades d’ús, declarades per rastrejar i no vinculades a la identitat. Inclou el bloc de comerciant amb la raó social, l’adreça a Hong Kong i el contacte.',
    }),
    s('weather-radar-forecast-privacy', 'Privacy Policy', 'https://topweathercolor.com/privacyPolicy.html', 'topweathercolor.com', 'privacy-policy', 'primary', {
      language: 'en',
      summary: 'Política breu, sense data ni responsable identificat: declara model de dispositiu, idioma, identificador de dispositiu, ubicació de ciutat i registres de fallada, i la possible compartició amb anunciants tercers.',
    }),
    /* Alarma de Lluvia */
    s('alarma-de-lluvia-app-store', 'Alarma de Lluvia - Radar Meteo en App Store (Privacidad de la app)', appStore('397676100'), 'Apple / Carlos Aviles Software', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: dades d’ús per rastrejar; dades d’ús i de publicitat vinculades a la identitat; ubicació exacta i aproximada i identificador de dispositiu no vinculats. Avisa que l’aplicació pot fer servir la ubicació encara que no estigui oberta.',
    }),
    s('alarma-de-lluvia-privacy', 'PRIVACY POLICY — RAIN ALARM', 'https://www.avilessoftware.com/privacy/rainalarm.pdf', 'Carlos Avilés - Software', 'privacy-policy', 'primary', {
      language: 'en',
      summary: 'Política de deu línies: identificador de publicitat amb Google com a responsable, ubicació i testimonis de notificacions, dos corresponsables identificats amb número d’IVA, dades pseudonimitzades desades a la UE i supressió automàtica als 180 dies de l’últim ús.',
    }),
    /* Weather Live Radar - NOAA */
    s('weather-live-radar-noaa-app-store', 'Weather Live Radar - NOAA en App Store (Privacidad de la app)', appStore('6781655348'), 'Apple / lighten', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors, dades d’ús i diagnòstics declarats com a dades per rastrejar i tots vinculats a la identitat. Inclou el bloc de comerciant amb l’adreça a Israel i les subscripcions de 9,99 € setmanals i 79,99 €.',
    }),
    s('weather-live-radar-noaa-privacy', 'Weather Live Radar - NOAA - Privacy Policy', 'https://liveweatheradar.com/privacy', 'Weather Live Radar - NOAA', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2024-12-01',
      summary: 'Política de plantilla sense societat responsable identificada: taules de socis publicitaris i de grup buides, OneSignal com a únic tercer anomenat, conservació d’un any i invocació de l’Escut de Privadesa com a mecanisme de transferència.',
    }),
    /* Eltiempo.es */
    s('eltiempo-es-app-store', 'Eltiempo.es: Tiempo 14 días en App Store (Privacidad de la app)', appStore('599661193'), 'Apple / Pelmorex Corp.', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: ubicació, identificadors i dades d’ús declarats per rastrejar i cap dada vinculada a la identitat. La fitxa fa constar que Pelmorex Corp. no s’ha identificat com a comerciant.',
    }),
    s('eltiempo-es-privacy', 'Política de privacidad — eltiempo.es', 'https://www.eltiempo.es/legal/politica-privacidad.html', 'El Tiempo Previsto, S.L.U. / Pelmorex Corp.', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2018-05-25',
      summary: 'Política revisada per últim cop el 25 de maig de 2018: responsable Pelmorex Corp. al Canadà amb representant a Madrid, identificador de publicitat mòbil, socis publicitaris i transferència al Canadà per decisió d’adequació.',
    }),
    s('eltiempo-es-cookies', 'El Tiempo - Política de cookies', 'https://www.eltiempo.es/legal/politica-cookies.html', 'El Tiempo Previsto, S.L.U.', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Llista de galetes i de socis publicitaris (DoubleClick for Publishers, AdSense, AdExchange, Amazon, Criteo, Index Exchange, OpenX, Tapad, AppNexus) i un píxel de seguiment de The Procter & Gamble Company.',
    }),
    /* Shadowmap */
    s('shadowmap-app-store', 'Shadowmap: Sol y Sombra en App Store (Privacidad de la app)', appStore('1566789060'), 'Apple / Shadowmap Technologies GmbH', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: cap dada utilitzada per rastrejar; compres, dades de contacte i identificadors vinculats a la identitat; ubicació, dades d’ús i diagnòstics no vinculats.',
    }),
    s('shadowmap-privacy', 'Shadowmap | Privacy Policy', 'https://shadowmap.org/privacy-policy', 'Shadowmap Technologies GmbH', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2024-04-12',
      summary: 'Política amb responsable austríac identificat, bases jurídiques enumerades, compromís de no vendre dades i esborrat del compte només per correu. Invoca encara l’Escut de Privadesa com a mecanisme de transferència.',
    }),
    s('shadowmap-imprint', 'Imprint — Shadowmap', 'https://shadowmap.org/imprint', 'Shadowmap Technologies GmbH', 'other', 'primary', {
      language: 'en',
      summary: 'Avís legal amb la raó social, el registre mercantil FN 569219m al Handelsgericht de Viena, el número d’IVA i l’administrador de la societat.',
    }),
    /* PredictWind */
    s('predictwind-app-store', 'PredictWind — Marine Forecasts en App Store (Privacidad de la app)', appStore('477048487'), 'Apple / PredictWind Limited', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: sis categories declarades com a dades per rastrejar i vuit vinculades a la identitat, incloses ubicació, contingut de la persona usuària i historial de cerca.',
    }),
    s('predictwind-privacy', 'Privacy and cookies policy PredictWind', 'https://www.predictwind.com/about-us/privacy-policy/', 'PredictWind Limited', 'privacy-policy', 'primary', {
      language: 'en',
      summary: 'Política detallada: llista nominal d’una vintena de proveïdors, ús de l’IDFA per a atribució, dades de seguiment amb nom, embarcació i coordenades GPS, taxa administrativa de 49 dòlars per a la còpia de les dades, representant a la UE i delegat de protecció de dades designats.',
    }),
    s('predictwind-cancel-help', 'How do I cancel PredictWind services', 'https://help.predictwind.com/en/articles/9688840-how-do-i-cancel-predictwind-services', 'PredictWind Limited', 'support-doc', 'primary', {
      language: 'en',
      summary: 'Article d’ajuda sobre la cancel·lació de les subscripcions, per web o per l’App Store. No hi ha cap article equivalent sobre l’eliminació del compte.',
    }),
    /* AEMET */
    s('aemet-app-store', 'Aemet: tiempo y radar España en App Store (Privacidad de la app)', appStore('784646178'), 'Apple / AEMET', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: «No se recopilan datos». La fitxa avisa, en canvi, que l’aplicació pot fer servir la ubicació encara que no estigui oberta, i l’enllaç de política de privadesa apunta per HTTP a la nota legal.',
    }),
    s('aemet-privacy-app', 'Política de privacidad de la aplicación oficial «Aemet: tiempo y radar España»', 'https://www.aemet.es/es/app/eltiempodeAEMET/politica_privacidad_app', 'AEMET', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de quatre paràgrafs: diu que no es recullen dades personals identificatives, que la ubicació es gestiona dins del dispositiu i no s’envia a l’AEMET, i que els registres d’accés només contenen l’adreça IP i són temporals.',
    }),
    s('aemet-nota-legal', 'Nota legal — AEMET', 'https://www.aemet.es/es/nota_legal', 'AEMET', 'terms', 'primary', {
      language: 'es',
      publishedAt: '2016-11-01',
      summary: 'Condicions d’ús i de reutilització de les dades obertes de l’AEMET, actualitzades el novembre del 2016. És el document al qual enllaça, per HTTP, el camp «Política de privacidad» de la fitxa de l’App Store.',
    }),
    s('aemet-transparencia', 'Transparencia — AEMET', 'https://www.aemet.es/es/conocenos/transparencia', 'AEMET', 'transparency-report', 'primary', {
      language: 'es',
      summary: 'Portal de transparència institucional amb informació organitzativa, econòmica i de sol·licituds d’accés a la informació pública. No inclou cap informe sobre peticions de dades de persones usuàries.',
    }),
    s('aemet-accessibilitat-ios', 'Declaración de accesibilidad de la versión para iOS', 'https://www.aemet.es/es/app/eltiempodeAEMET/declaracion-accesibilidad-iOS', 'AEMET', 'support-doc', 'primary', {
      language: 'es',
      publishedAt: '2022-11-22',
      summary: 'Declaració «parcialment conforme» amb el Reial decret 1112/2018, referida a la versió 2.9 de l’aplicació i revisada el novembre del 2022.',
    }),
    /* La Meva Salut */
    s('la-meva-salut-app-store', 'La Meva Salut en App Store (Privacidad de la app)', appStore('1358288989'), 'Apple / Generalitat de Catalunya', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: cap dada utilitzada per rastrejar, però salut, contacte, contingut de missatges, historial de navegació, identificadors, ús i diagnòstics vinculats a la identitat, i una categoria de «datos sensibles».',
    }),
    s('la-meva-salut-privacitat', 'Privadesa i seguretat — La Meva Salut', 'https://lamevasalut.gencat.cat/web/cps/privadesa-i-seguretat', 'Departament de Salut', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Política amb responsable identificat, bases jurídiques dels articles 6.1.c), 6.1.e) i 9.2 del RGPD, registre d’accessos, xifratge TLS 1.2 amb certificat de CatCert, terminis legals de conservació de la història clínica i cap transferència fora de la Unió Europea.',
    }),
    s('la-meva-salut-avis-legal', 'Avís legal — La Meva Salut', 'https://lamevasalut.gencat.cat/web/cps/avis-legal', 'Departament de Salut', 'terms', 'primary', {
      language: 'ca',
      summary: 'Avís legal i informació de galetes del servei, amb galetes tècniques i analítiques de tercers.',
    }),
    s('la-meva-salut-catsalut', 'La Meva Salut — CatSalut', 'https://catsalut.gencat.cat/ca/serveis-sanitaris/la-meva-salut/', 'Servei Català de la Salut', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Fitxa del servei: requisits d’accés (targeta sanitària individual, 16 anys), identificació amb idCAT Mòbil, certificat digital o DNI electrònic, i canal d’atenció del 061 Salut Respon.',
    }),
    /* Vítaly */
    s('vitaly-app-store', 'Vítaly en App Store (Privacidad de la app)', appStore('6470290292'), 'Apple / PREVING INVESTMENTS S.L.', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: cap dada utilitzada per rastrejar, però contacte, contingut de missatges, identificadors, ús i diagnòstics vinculats a la identitat. No declara cap categoria de salut i forma física.',
    }),
    s('vitaly-privacy-app', 'App Vítaly — Política de privacidad', 'https://privacidad.vitaly.es/app-vitaly/', 'Vítaly Health Services, S.L.U.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de l’aplicació: responsable identificat amb CIF, bases jurídiques del consentiment i del contracte, dades de salut i d’ocupació, registres d’interacció amb l’aplicació, i el paràgraf contradictori sobre Microsoft Ireland i les transferències als Estats Units.',
    }),
    s('vitaly-drets', 'Acceder a mis derechos de Protección de Datos', 'https://privacidad.vitaly.es/acceder-a-mis-derechos-de-proteccion-de-datos/', 'Vítaly Health Services, S.L.U.', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Procediment per exercir els drets: formulari en .docx, còpia del document d’identitat, enviament per correu electrònic o postal, resposta en un mes i derivació a l’empresa ocupadora quan Vítaly actua com a encarregat.',
    }),
    s('vitaly-cancelacio', 'Política de cancelación y bloqueo de Datos', 'https://privacidad.vitaly.es/politica-de-cancelacion-y-bloqueo-de-datos/', 'Vítaly Health Services, S.L.U.', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Terminis de conservació: mínim de 5 anys per a la documentació de vigilància de la salut, segons l’article 23 de la Llei 31/1995 i l’article 17.1 de la Llei 41/2002.',
    }),
    s('vitaly-certificacions', 'Certificaciones en Seguridad de la Información', 'https://privacidad.vitaly.es/certificaciones/', 'Vítaly Health Services, S.L.U.', 'audit', 'primary', {
      language: 'es',
      summary: 'Certificació ISO/IEC 27001:2022 i conformitat amb l’Esquema Nacional de Seguretat de nivell mitjà (Reial decret 311/2022), amb el sistema de gestió de la seguretat documentat.',
    }),
    s('vitaly-play-store', 'Vítaly — Google Play (Seguridad de los datos)', 'https://play.google.com/store/apps/details?id=com.vitaly.tps&hl=es&gl=ES', 'Google / Vítaly', 'app-store', 'primary', {
      language: 'es',
      summary: 'Secció de seguretat de les dades de Google Play: xifratge en trànsit, possibilitat de demanar l’eliminació de les dades i declaració que l’aplicació pot compartir la ubicació amb tercers.',
    }),
    /* Technogym */
    s('technogym-app-store', 'Technogym - app gym y casa en App Store (Privacidad de la app)', appStore('976506047'), 'Apple / Technogym S.p.A.', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors declarats com a dades per rastrejar; forma física, ubicació exacta, contacte, fotos, identificadors i ús vinculats a la identitat, amb una finalitat explícita de publicitat o màrqueting del desenvolupador.',
    }),
    s('technogym-privacy', 'Política de privacidad de Technogym', 'https://www.technogym.com/es-ES/politica-de-privacidad-de-technogym/', 'Technogym S.p.A.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política del grup: responsable a Cesena, corresponsables locals, distinció entre el rol d’encarregat al gimnàs i el de responsable amb compte connectat, perfils comercials revocables, conservació de 10 anys després d’eliminar el compte i anonimització als 5 anys d’inactivitat.',
    }),
    s('technogym-play-store', 'Technogym — Google Play (Seguridad de los datos)', 'https://play.google.com/store/apps/details?id=com.technogym.tgapp&hl=es&gl=ES', 'Google / Technogym S.p.A.', 'app-store', 'primary', {
      language: 'es',
      summary: 'Secció de seguretat de les dades de Google Play: xifratge en trànsit i declaració que no es comparteixen dades amb tercers, contradictòria amb el rastreig per identificadors declarat a l’App Store.',
    }),
  ],
  apps: [
    weatherRadarForecast,
    alarmaDeLluvia,
    weatherLiveRadarNoaa,
    eltiempoEs,
    shadowmap,
    predictwind,
    aemet,
    laMevaSalut,
    vitaly,
    technogym,
  ],
  incidents: [],
  storeIds: {
    vitaly: 'com.vitaly.tps',
    technogym: 'com.technogym.tgapp',
    'weather-radar-forecast': 'com.TopWeather.app',
    'alarma-de-lluvia': 'com.avilessoftware.RainAlarm',
    'weather-live-radar-noaa': 'com.bb.weatherliveradarnoaa',
    'eltiempo-es': 'es.eltiempo.weatherapphd',
    shadowmap: 'org.shadowmap.Shadowmap',
    predictwind: 'com.predictwind.app',
    aemet: 'AEMET',
    'la-meva-salut': 'cat.gencat.mobi.lamevasalut',
  },
}
