import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 10 de la segona onada: meteorologia (Windy.com, Windy.app, My Aurora
 * Forecast, My Earthquake Alerts, WetterOnline i tiempo.es), mobilitat i
 * repartiment (Uber i Uber Eats) i alimentació (QuéFalta i Too Good To Go).
 *
 * Les aplicacions del temps són el bloc on més varia la privadesa entre
 * serveis que fan el mateix: des d’una etiqueta sense cap dada vinculada fins
 * a centenars de socis publicitaris que reben la ubicació.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/* ═══════════════════════ Windy.com ═══════════════════════ */
const windyCom: AppSeed = {
  slug: 'windy-com',
  name: 'Windy.com',
  company: 'windyty',
  categories: ['meteorologia'],
  tagline: 'Mapes meteorològics detallats amb una etiqueta que no declara cap dada vinculada a la persona ni cap rastreig',
  summary:
    'Windy.com és un servei txec de mapes i previsions meteorològiques que es pot fer servir sense compte. L’etiqueta de l’App Store no declara cap dada vinculada a la identitat ni cap dada per rastrejar, i la política diu que no ven dades personals. El compte, opcional, serveix per sincronitzar preferències i per a la subscripció Premium.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'República Txeca',
  links: {
    website: 'https://www.windy.com/',
    privacyPolicy: 'https://account.windy.com/agreements/windy-privacy-policy',
    terms: 'https://account.windy.com/agreements/windy-terms-of-use',
    appStore: appStore('1161387262'),
  },
  accountRequired: f('no', 'official', ['windy-com-privacy-policy'], 'El registre és opcional; la política distingeix entre persones usuàries registrades i no registrades.'),
  openSource: f('no', 'official', ['windy-com-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'La ubicació serveix per mostrar el temps del lloc on ets i, segons l’etiqueta, no queda vinculada a la identitat. Amb compte, s’hi afegeixen l’adreça electrònica, el nom d’usuari, els llocs preferits i, si s’hi escriu, els missatges a la comunitat.',
  dataCollection: [
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['personalitzacio-de-continguts', 'prestacio-del-servei'], sources: ['windy-com-app-store', 'windy-com-privacy-policy'], note: 'Per GPS o per l’adreça IP, per mostrar el temps local.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['personalitzacio-de-continguts'], sources: ['windy-com-app-store'] }),
    row('adreca-electronica', 'optional', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['windy-com-privacy-policy'], note: 'Només amb compte; també es pot entrar amb Apple, Google o Facebook.' }),
    row('identificador-de-compte', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['windy-com-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['windy-com-app-store'] }),
    row('publicacions-i-comentaris', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['windy-com-app-store', 'windy-com-privacy-policy'], note: 'L’etiqueta declara «altre contingut de l’usuari»; la política diu que el contingut publicat a la comunitat es manté si s’elimina el compte.' }),
    row('interaccions-i-us', 'yes', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['windy-com-privacy-policy'], note: 'Google Analytics i Google BigQuery.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['windy-com-privacy-policy'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['windy-com-app-store', 'windy-com-privacy-policy'], note: 'Els informes d’errors es conserven un mes aproximadament.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['windy-com-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: unknown('Ni l’etiqueta ni la política esmenten l’identificador publicitari del dispositiu.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['windy-com-privacy-policy'], 'La política cita Google Analytics; no esmenta xarxes publicitàries.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['windy-com-privacy-policy', 'windy-com-app-store'], 'La política no preveu publicitat personalitzada de tercers i l’etiqueta no declara cap dada per a publicitat de tercers; sí que preveu correus de màrqueting propis amb baixa.'),
    profiling: unknown('La política no parla d’elaboració de perfils.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['windy-com-privacy-policy'], 'Amb proveïdors d’allotjament, d’analítica i de correu, i amb autoritats quan la llei ho exigeix.'),
    intraGroupSharing: unknown('La política no parla d’altres empreses del grup.'),
    dataBrokerSales: f('no', 'official', ['windy-com-privacy-policy'], 'La política diu que mai no vendrà dades personals a tercers.'),
    internationalTransfers: f('yes', 'official', ['windy-com-privacy-policy'], 'Allotjament a la República Txeca, Alemanya, els Estats Units i Taiwan.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['windy-com-privacy-policy'], 'Criteri general i alguns límits: no fa servir dades de més de quatre anys de persones no registrades ni dades de més d’un any després d’eliminar un compte.'),
    dataAfterDeletion: f('partial', 'official', ['windy-com-privacy-policy'], 'El perfil s’elimina, però el contingut publicat es manté si no se’n demana l’esborrat per separat.'),
    periods: [{ dataType: 'dades-de-diagnostic', period: 'Un mes aproximadament', sources: ['windy-com-privacy-policy'] }],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['windy-com-privacy-policy', 'windy-com-community-delete']),
    selfService: f('yes', 'official', ['windy-com-community-delete'], 'Amb la sessió iniciada, des de la pàgina de dades i privadesa del compte.'),
    directUrl: 'https://account.windy.com/data-and-privacy',
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Inicia la sessió a account.windy.com.',
      'Obre la secció de dades i privadesa (account.windy.com/data-and-privacy).',
      'Tria «Delete your account» i confirma.',
      'Si també vols esborrar el que has publicat a la comunitat, demana-ho a dataprotection@windy.com.',
    ],
    obstacles: 'La subscripció Premium comprada a l’App Store s’ha de cancel·lar a part.',
    dataRetained: 'Contingut publicat a la comunitat, si no se’n demana l’esborrat.',
    sources: ['windy-com-community-delete', 'windy-com-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['windy-com-privacy-policy'], 'La portabilitat es reconeix, però cal demanar-la per correu.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['windy-com-privacy-policy'], 'Canal propi de protecció de dades i reclamació davant l’autoritat txeca.', {
      url: 'mailto:dataprotection@windy.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: na('No hem trobat publicitat personalitzada de tercers a l’aplicació.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica.'),
    granularControls: unknown('No hem trobat documentació sobre controls de privadesa dins de l’aplicació.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos.'),
  },
  security: {
    e2ee: na('Servei d’informació meteorològica; no hi ha comunicació privada entre persones que calgui xifrar d’extrem a extrem.'),
    transportEncryption: unknown('La política parla de mesures tècniques adequades sense concretar-les.'),
    atRestEncryption: unknown('No hi ha informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No hem trobat documentació sobre la verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: f('yes', 'official', ['windy-com-security-txt'], 'Fitxer security.txt amb l’adreça security@windy.com.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    openQuestions: ['Windy.com ofereix verificació en dos passos per al compte?'],
  },
}

/* ═══════════════════════ Windy.app ═══════════════════════ */
const windyWeather: AppSeed = {
  slug: 'windy-weather',
  name: 'Windy.app',
  company: 'windy-weather-world',
  categories: ['meteorologia'],
  tagline: 'Previsions de vent que declaren la ubicació exacta com a dada per rastrejar i fan servir eines publicitàries de Meta i AppsFlyer',
  summary:
    'Windy.app, d’una empresa de Delaware sense entitat europea declarada, és una aplicació diferent de Windy.com malgrat el nom. L’etiqueta declara la ubicació exacta com a dada per rastrejar entre aplicacions, i la política cita Meta, AppsFlyer, Amplitude i eines que fan captures de la sessió. L’eliminació del compte es pot fer des de l’aplicació.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Estats Units (Delaware)',
  links: {
    website: 'https://windy.app/',
    privacyPolicy: 'https://windyapp.co/CustomMenuItems/26/en',
    terms: 'https://windyapp.co/CustomMenuItems/34/en',
    appStore: appStore('997079492'),
  },
  accountRequired: unknown('No hem pogut confirmar si les funcions bàsiques es poden fer servir sense compte.'),
  openSource: f('no', 'official', ['windy-weather-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Els spots de vent, surf o pesca que es consulten i la ubicació exacta dibuixen on es practica esport i en quins horaris. Que la ubicació exacta es declari per rastrejar vol dir que pot creuar-se amb dades d’altres empreses.',
  dataCollection: [
    row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['windy-weather-app-store', 'windy-weather-privacy-policy'], note: 'Declarada com a dada per rastrejar entre aplicacions i llocs d’altres empreses.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['windy-weather-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['windy-weather-app-store', 'windy-weather-privacy-policy'] }),
    row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['windy-weather-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['windy-weather-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'mesura-publicitaria'], sources: ['windy-weather-app-store', 'windy-weather-privacy-policy'] }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['windy-weather-app-store', 'windy-weather-privacy-policy'], note: 'UserX i Microsoft Clarity fan captures anonimitzades durant l’ús de l’aplicació.' }),
    row('nom-i-cognoms', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['windy-weather-privacy-policy'] }),
    row('adreca-electronica', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['windy-weather-privacy-policy'] }),
    row('dades-de-pagament', 'optional', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['windy-weather-privacy-policy'], note: 'Els pagaments web passen per Stripe.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['windy-weather-privacy-policy'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['windy-weather-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['windy-weather-app-store'], 'L’etiqueta declara la ubicació exacta com a dada utilitzada per rastrejar.'),
    advertisingIdentifiers: unknown('La política parla de Meta Pixel i AppsFlyer, però no diu expressament si fa servir l’IDFA.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['windy-weather-privacy-policy'], 'Google Analytics, Amplitude, UserX, Microsoft Clarity, Meta i AppsFlyer.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['windy-weather-privacy-policy'], 'La política preveu galetes publicitàries per fer els anuncis més rellevants segons els interessos i campanyes amb Meta.'),
    profiling: unknown('La política no descriu l’elaboració de perfils més enllà de la publicitat.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['windy-weather-privacy-policy'], 'Proveïdors d’analítica, publicitat (Meta, AppsFlyer) i pagament (Stripe).'),
    intraGroupSharing: unknown('No consta informació sobre empreses del grup.'),
    dataBrokerSales: f('no', 'official', ['windy-weather-privacy-policy'], 'Declara que no ven informació personal, en l’apartat per a residents de Califòrnia i Virgínia.'),
    internationalTransfers: f('yes', 'official', ['windy-weather-privacy-policy'], 'Les dades es guarden principalment als Estats Units i a Europa; la política no concreta el mecanisme de transferència.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['windy-weather-privacy-policy'], 'Només diu que conserva les dades el temps necessari per a la finalitat.'),
    dataAfterDeletion: f('partial', 'official', ['windy-weather-delete'], 'L’eliminació esborra els preferits, la configuració, els missatges del xat i el contingut compartit; no concreta què es conserva per obligació legal.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['windy-weather-delete', 'windy-weather-privacy-policy']),
    selfService: f('yes', 'official', ['windy-weather-delete'], 'Hi ha una opció «Delete Account» dins del perfil.'),
    directUrl: 'https://windy.app/how-to-delete-account',
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'A l’aplicació, toca la icona de perfil a la cantonada inferior dreta.',
      'Toca el teu nom de perfil (o inicia la sessió).',
      'A «Edit Profile», toca la icona de la cantonada superior dreta.',
      'Tria «Delete Account». Com a alternativa, escriu al suport amb l’assumpte «Request Account Deletion».',
    ],
    obstacles: 'La subscripció s’ha de cancel·lar a part a l’App Store.',
    sources: ['windy-weather-delete'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['windy-weather-privacy-policy'], 'Reconeix el dret a rebre una còpia en format llegible per màquina, per correu.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['windy-weather-privacy-policy'], 'Peticions a windy@windyapp.co; resposta en 15 dies hàbils.', {
      url: 'mailto:windy@windyapp.co',
      responseTimeDays: 21,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['windy-weather-privacy-policy'], 'Preferències de galetes al web; a l’iPhone depèn del permís de rastreig del sistema.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica dins de l’aplicació.'),
    granularControls: unknown('No hem trobat documentació sobre controls dins de l’aplicació.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos.'),
  },
  security: {
    e2ee: na('El xat entre persones usuàries és una funció secundària d’un servei meteorològic; no hem trobat cap promesa de xifratge d’extrem a extrem.'),
    transportEncryption: f('partial', 'official', ['windy-weather-privacy-policy'], 'Diu que xifra la informació sensible, sense concretar-ho.'),
    atRestEncryption: unknown('No hi ha informació concreta sobre el xifratge en repòs.'),
    mfa: unknown('No hem trobat documentació sobre la verificació en dos passos.'),
    independentAudits: unknown('No consten auditories publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hem trobat cap canal de notificació de vulnerabilitats; windy.app no té security.txt.'),
  },
  alternatives: [
    {
      app: 'windy-com',
      comparability: 'partial',
      rationale: 'Mapes de vent i onatge amb una etiqueta de l’App Store que no declara cap dada vinculada ni cap rastreig.',
      tradeOffs: 'Menys orientada a spots d’esports concrets.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes: 'L’etiqueta declara les dades d’analítica com a no vinculades, però la política cita eines com Meta i AppsFlyer que treballen amb identificadors. La contradicció aparent queda anotada sense resoldre.',
    openQuestions: ['Quina entitat fa de representant a la Unió Europea, com exigeix l’article 27 del RGPD?'],
  },
}

/* ═══════════════════ JRustonApps (Aurora i Earthquake) ═══════════════════ */
const jrustonTracking = (label: string) => ({
  crossAppTracking: f('yes', 'official', [label], 'L’etiqueta declara la ubicació exacta i aproximada, l’identificador del dispositiu, les dades d’ús i de publicitat i les de diagnòstic com a dades per rastrejar.'),
  advertisingIdentifiers: f('yes', 'official', ['jrustonapps-privacy-free-ios'], 'AdMob, Appodeal, Firebase i Crashlytics reben l’IDFA.'),
  thirdPartyTrackersPresent: f('yes', 'official', ['jrustonapps-privacy-free-ios'], 'AdMob, Appodeal, Google Analytics for Firebase, Crashlytics i l’SDK d’Opensignal.'),
})

const jrustonShared = {
  openSource: f('no', 'official', ['jrustonapps-privacy-free-ios'], undefined, { licence: 'Privativa' }),
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['jrustonapps-privacy-free-ios'], 'Anuncis d’AdMob i Appodeal que poden basar-se en els interessos i en el comportament fora de l’aplicació.'),
    profiling: f('yes', 'official', ['jrustonapps-privacy-free-ios'], 'La política admet la tècnica de retargeting conductual dels serveis publicitaris.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['jrustonapps-privacy-free-ios'], 'Xarxes publicitàries, Google i Opensignal; la ubicació aproximada es pot compartir per a publicitat geolocalitzada.'),
    intraGroupSharing: unknown('No consta cap grup empresarial.'),
    dataBrokerSales: unknown('La política no diu si ven dades; Opensignal declara que no en ven.'),
    internationalTransfers: f('yes', 'official', ['jrustonapps-privacy-free-ios'], 'AdMob, Appodeal, Firebase i Crashlytics tracten dades als Estats Units; no es concreta el mecanisme.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'medium' as const,
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['jrustonapps-privacy-free-ios'], 'Només criteris generals, sense terminis.'),
    dataAfterDeletion: f('partial', 'official', ['jrustonapps-privacy-free-ios'], 'L’identificador intern es perd en desinstal·lar l’aplicació; les dades que ja tenen els tercers segueixen les seves polítiques.'),
  },
  userRights: {
    dataExport: f('partial', 'official', ['jrustonapps-privacy-free-ios'], 'Reconeix la portabilitat, a petició.'),
    exportFormatQuality: 'unknown' as const,
    rightsExercise: f('yes', 'official', ['jrustonapps-privacy-free-ios'], 'Peticions per correu o pel formulari de contacte; resposta en un mes.', {
      url: 'https://www.jrustonapps.com/contact',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['jrustonapps-privacy-free-ios'], 'Remet al permís de rastreig del sistema; per aturar Opensignal cal retirar el permís d’ubicació.'),
    telemetryOptOut: unknown('No hem trobat cap control propi per desactivar l’analítica.'),
    granularControls: f('no', 'official', ['jrustonapps-privacy-free-ios'], 'La política remet només als permisos del sistema.'),
    defaultPosture: 'permissive' as const,
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos.'),
  },
  security: {
    e2ee: na('Aplicació d’alertes i previsions; no hi ha comunicació privada entre persones.'),
    transportEncryption: unknown('La política parla de mesures de seguretat adequades sense concretar-les.'),
    atRestEncryption: unknown('No hi ha informació sobre el xifratge en repòs.'),
    mfa: na('L’aplicació no té comptes d’usuari.'),
    independentAudits: unknown('No consten auditories publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hem trobat cap canal de notificació de vulnerabilitats; jrustonapps.com no té security.txt.'),
  },
}

const jrustonDeletion = {
  possible: na('L’aplicació no té comptes; les dades pròpies van lligades a un identificador que es perd en desinstal·lar-la.'),
  selfService: na('No hi ha compte per eliminar.'),
  difficulty: 'easy' as const,
  requiresSupportContact: false,
  steps: [
    'Desinstal·la l’aplicació: l’identificador únic que genera es perd i, si la reinstal·les, se’n crea un de nou.',
    'Per esborrar les dades que ja té l’editor, escriu-li des del formulari de jrustonapps.com/contact invocant el dret de supressió.',
    'Per limitar la publicitat, desactiva «Permetre que les apps sol·licitin rastrejar-te» a Configuració > Privacitat i seguretat > Rastreig.',
  ],
  obstacles: 'Les dades que ja han rebut AdMob, Appodeal, Google o Opensignal no s’esborren desinstal·lant l’aplicació.',
  sources: ['jrustonapps-privacy-free-ios'],
}

const myAurora: AppSeed = {
  slug: 'my-aurora-forecast',
  name: 'My Aurora Forecast',
  company: 'jrustonapps',
  categories: ['meteorologia'],
  tagline: 'Previsió d’aurores que declara la ubicació exacta com a dada per rastrejar i comparteix dades de xarxa amb Opensignal',
  summary:
    'Aplicació gratuïta d’un petit editor neerlandès que es finança amb publicitat d’AdMob i Appodeal. L’etiqueta declara la ubicació, l’identificador del dispositiu i les dades d’ús com a dades per rastrejar, i la política inclou l’SDK d’Opensignal, que recull dades de la xarxa mòbil i de la ubicació si es dona el permís. No cal compte.',
  platforms: ['ios', 'android'],
  businessModel: 'advertising',
  jurisdiction: 'Països Baixos',
  links: {
    website: 'https://www.jrustonapps.com/apps/my-aurora-forecast',
    privacyPolicy: 'https://www.jrustonapps.com/privacy?t=io-fr-14',
    appStore: appStore('1073082439'),
  },
  accountRequired: f('no', 'official', ['jrustonapps-privacy-free-ios'], 'La política identifica les persones usuàries amb un identificador generat en instal·lar l’aplicació, no amb un compte.'),
  openSource: jrustonShared.openSource,
  dataSummary:
    'La ubicació continuada, també en segon pla per a les alertes, mostra on viu i on viatja la persona. Es comparteix amb xarxes publicitàries i, amb Opensignal, s’hi afegeixen dades de la xarxa sense fils i de l’operador.',
  dataCollection: [
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['my-aurora-forecast-app-store', 'jrustonapps-privacy-free-ios'], note: 'Permís d’ubicació continuat per a les alertes; l’etiqueta la declara per rastrejar.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['my-aurora-forecast-app-store', 'jrustonapps-privacy-free-ios'], note: 'La política preveu compartir la ubicació aproximada per a publicitat geolocalitzada i prevenció del frau.' }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['jrustonapps-privacy-free-ios'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['my-aurora-forecast-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['my-aurora-forecast-app-store', 'jrustonapps-privacy-free-ios'], note: 'Identificador intern generat en instal·lar l’aplicació.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['my-aurora-forecast-app-store'], note: 'Inclou les dades de publicitat (anuncis vistos i tocats).' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['jrustonapps-privacy-free-ios'] }),
    row('xarxa-i-connectivitat', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['investigacio-i-estadistica'], sources: ['jrustonapps-privacy-free-ios'], note: 'Opensignal recull noms de xarxa, BSSID i rendiment de la connexió si es dona permís d’ubicació.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte', 'publicitat-personalitzada'], sources: ['my-aurora-forecast-app-store'] }),
  ],
  tracking: jrustonTracking('my-aurora-forecast-app-store'),
  dataUses: jrustonShared.dataUses,
  sharing: jrustonShared.sharing,
  transparency: jrustonShared.transparency,
  retention: jrustonShared.retention,
  accountDeletion: jrustonDeletion,
  userRights: jrustonShared.userRights,
  controls: jrustonShared.controls,
  security: jrustonShared.security,
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes: 'El web de l’editor té una política diferent per a les versions de pagament, sense publicitat. La que s’aplica a aquesta versió és la de les aplicacions gratuïtes d’iOS, la que enllaça l’App Store.',
    openQuestions: ['Opensignal rep dades de totes les persones usuàries amb permís d’ubicació o només d’una mostra?'],
  },
}

const myEarthquake: AppSeed = {
  slug: 'my-earthquake-alerts',
  name: 'My Earthquake Alerts',
  company: 'jrustonapps',
  categories: ['meteorologia'],
  tagline: 'Alertes de terratrèmols que declaren la ubicació com a dada per rastrejar i la comparteixen amb xarxes publicitàries',
  summary:
    'Del mateix editor que My Aurora Forecast i amb la mateixa política de privadesa per a les aplicacions gratuïtes. L’etiqueta declara la ubicació, l’identificador del dispositiu i les dades d’ús com a dades per rastrejar. Les alertes es basen en la ubicació continuada, que també s’ofereix a AdMob, Appodeal i Opensignal. No cal compte.',
  platforms: ['ios', 'android'],
  businessModel: 'advertising',
  jurisdiction: 'Països Baixos',
  links: {
    website: 'https://www.jrustonapps.com/apps/my-earthquake-alerts',
    privacyPolicy: 'https://www.jrustonapps.com/privacy?t=io-fr-14',
    appStore: appStore('975709372'),
  },
  accountRequired: f('no', 'official', ['jrustonapps-privacy-free-ios'], 'Sense registre; un identificador generat en instal·lar l’aplicació.'),
  openSource: jrustonShared.openSource,
  dataSummary:
    'Per rebre alertes de prop cal donar la ubicació de manera continuada. Aquesta ubicació, juntament amb l’identificador publicitari, arriba a xarxes de publicitat que la poden creuar amb dades d’altres aplicacions.',
  dataCollection: [
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['my-earthquake-alerts-app-store', 'jrustonapps-privacy-free-ios'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['my-earthquake-alerts-app-store', 'jrustonapps-privacy-free-ios'] }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['jrustonapps-privacy-free-ios'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['my-earthquake-alerts-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['my-earthquake-alerts-app-store'], note: 'Identificador intern generat en instal·lar l’aplicació.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['my-earthquake-alerts-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['jrustonapps-privacy-free-ios'] }),
    row('xarxa-i-connectivitat', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['investigacio-i-estadistica'], sources: ['jrustonapps-privacy-free-ios'], note: 'SDK d’Opensignal, si es dona permís d’ubicació.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['my-earthquake-alerts-app-store'] }),
  ],
  tracking: jrustonTracking('my-earthquake-alerts-app-store'),
  dataUses: jrustonShared.dataUses,
  sharing: jrustonShared.sharing,
  transparency: jrustonShared.transparency,
  retention: jrustonShared.retention,
  accountDeletion: jrustonDeletion,
  userRights: jrustonShared.userRights,
  controls: jrustonShared.controls,
  security: jrustonShared.security,
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    openQuestions: ['Les alertes funcionen amb el permís d’ubicació «Mentre s’utilitza» o exigeixen el permís continuat?'],
  },
}

/* ═══════════════════════ WetterOnline (Tiempo & Radar) ═══════════════════════ */
const wetteronline: AppSeed = {
  slug: 'wetteronline',
  name: 'Tiempo & Radar (WetterOnline)',
  company: 'wetteronline',
  categories: ['meteorologia'],
  tagline: 'Aplicació del temps amb més de dos-cents socis publicitaris i un procediment sancionador obert per l’ús de la ubicació',
  summary:
    'És la versió espanyola de l’aplicació alemanya WetterOnline. La versió gratuïta mostra publicitat i la política llista més de dos-cents socis que poden rebre l’adreça IP, l’identificador publicitari i dades del dispositiu. L’autoritat de protecció de dades de Rin del Nord-Westfàlia ha obert un procediment sancionador per haver fet servir durant anys la ubicació per a publicitat sense un consentiment vàlid.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Alemanya',
  links: {
    website: 'https://www.tiempoyradar.es/',
    privacyPolicy: 'https://www.tiempoyradar.es/apps/ios/privacy',
    terms: 'https://www.tiempoyradar.es/apps/ios/terms-of-use',
    appStore: appStore('545993260'),
  },
  accountRequired: f('no', 'official', ['wetteronline-privacy-app-es'], 'La política no preveu cap registre; la versió sense anuncis només guarda un identificador del dispositiu i la data de compra.'),
  openSource: f('no', 'official', ['wetteronline-privacy-app-es'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'La ubicació de la cel·la mòbil o del GPS i l’identificador publicitari, compartits amb centenars d’empreses de publicitat, permeten reconstruir desplaçaments. Segons netzpolitik.org, dades de localització vinculades a l’aplicació van aparèixer en conjunts de dades venuts per intermediaris.',
  dataCollection: [
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['wetteronline-app-store', 'wetteronline-privacy-app-es'], note: 'Si es dona permís, s’envien la cel·la mòbil i les coordenades GPS. L’etiqueta la declara només per al funcionament i no vinculada.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts', 'publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['wetteronline-app-store'] }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['wetteronline-privacy-app-es'], note: 'Els socis publicitaris, Google Analytics, Firebase i l’SDK de Facebook reben l’identificador publicitari.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['wetteronline-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['wetteronline-app-store'], note: 'L’etiqueta declara un «ID d’usuari» per rastrejar, tot i que no hi ha compte.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['wetteronline-app-store', 'wetteronline-privacy-app-es'] }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['wetteronline-privacy-app-es'] }),
    row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['wetteronline-privacy-app-es'], note: 'Sistema operatiu, versió, codi de dispositiu i idioma.' }),
    row('interessos-inferits', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'mesura-i-analisi-dus'], sources: ['wetteronline-privacy-app-es'], note: 'Firebase recull edat, gènere i interessos; Google Analytics hi afegeix dades sociodemogràfiques.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['wetteronline-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['wetteronline-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['wetteronline-app-store'], 'L’etiqueta declara identificadors, dades d’ús i de rendiment com a dades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['wetteronline-privacy-app-es']),
    thirdPartyTrackersPresent: f('yes', 'official', ['wetteronline-privacy-app-es'], 'Google Analytics, Firebase, SDK de Facebook, AppsFlyer, Batch i més de dos-cents socis publicitaris del marc IAB.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['wetteronline-privacy-app-es'], 'La versió gratuïta mostra publicitat basada en l’ús.'),
    profiling: f('yes', 'official', ['wetteronline-privacy-app-es'], 'Dades sociodemogràfiques i d’interessos a través de Firebase i de les funcions publicitàries de Google Analytics.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['wetteronline-privacy-app-es'], 'Llista de més de dos-cents socis publicitaris i proveïdors d’analítica.'),
    intraGroupSharing: unknown('No consta cap grup empresarial.'),
    dataBrokerSales: f('partial', 'press', ['wetteronline-netzpolitik-2026'], 'L’empresa no diu que vengui dades, però l’autoritat investiga la cessió de la ubicació a tercers per a publicitat, i dades de localització vinculades a l’aplicació van aparèixer en conjunts d’intermediaris.'),
    internationalTransfers: f('yes', 'official', ['wetteronline-privacy-app-es'], 'Google Analytics i AppsFlyer, als Estats Units. La política encara esmenta l’Escut de Privadesa, anul·lat el 2020.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['wetteronline-privacy-app-es'], 'La política de l’aplicació no fixa terminis de conservació.'),
    dataAfterDeletion: unknown('No hi ha compte; no consta què passa amb les dades que tenen els socis publicitaris.'),
  },
  accountDeletion: {
    possible: na('L’aplicació no té comptes d’usuari.'),
    selfService: na('No hi ha compte per eliminar.'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Al final de la declaració de privadesa dins de l’aplicació, desactiva «Enviar datos de uso anónimos» per aturar Google Analytics, Firebase, Facebook i AppsFlyer.',
      'Revoca els anuncis personalitzats des de la configuració de privadesa de l’aplicació.',
      'Per esborrar dades, escriu a datenschutz@wetteronline.de.',
    ],
    obstacles: 'Les dades cedides als socis publicitaris s’han de reclamar a cadascun d’ells.',
    sources: ['wetteronline-privacy-app-es'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['wetteronline-privacy-app-es'], 'Portabilitat reconeguda, a petició.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['wetteronline-privacy-app-es'], 'Adreça de protecció de dades i reclamació davant l’autoritat de Rin del Nord-Westfàlia.', {
      url: 'mailto:datenschutz@wetteronline.de',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['wetteronline-privacy-app-es'], 'Es pot revocar la publicitat personalitzada des de la configuració de privadesa de l’aplicació (plataforma de consentiment de l’IAB).'),
    telemetryOptOut: f('yes', 'official', ['wetteronline-privacy-app-es'], 'Opció «Enviar datos de uso anónimos» per aturar l’analítica i l’atribució publicitària.'),
    granularControls: f('partial', 'official', ['wetteronline-privacy-app-es'], 'Consentiment per soci publicitari i interruptor d’analítica.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'press', ['wetteronline-netzpolitik-2026'], 'Segons l’autoritat, durant anys l’empresa no va obtenir un consentiment vàlid per a l’ús publicitari de la ubicació.'),
  },
  security: {
    e2ee: na('Servei d’informació meteorològica; no hi ha comunicació privada entre persones.'),
    transportEncryption: unknown('No hem trobat documentació tècnica sobre el xifratge en trànsit de l’aplicació.'),
    atRestEncryption: unknown('No hi ha informació sobre el xifratge en repòs.'),
    mfa: na('L’aplicació no té comptes d’usuari.'),
    independentAudits: unknown('No consten auditories publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hem trobat cap canal de notificació de vulnerabilitats.'),
  },
  alternatives: [
    {
      app: 'windy-com',
      comparability: 'partial',
      rationale: 'Previsions i radar amb una etiqueta de l’App Store que no declara cap dada vinculada ni cap rastreig.',
      tradeOffs: 'Interfície més tècnica i menys pensada per a una consulta ràpida.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes: 'L’etiqueta de l’App Store declara la ubicació exacta com a no vinculada i només per al funcionament, mentre que l’autoritat alemanya investiga justament l’ús publicitari de la ubicació. Segons netzpolitik.org, l’empresa va deixar de recollir la ubicació precisa per a publicitat després de la intervenció de l’autoritat.',
    openQuestions: ['Quin serà l’import i el resultat del procediment sancionador de l’autoritat de Rin del Nord-Westfàlia?'],
  },
}

/* ═══════════════════════ tiempo.es (wetter.com) ═══════════════════════ */
const tiempoEs: AppSeed = {
  slug: 'tiempo-es-wetter',
  name: 'tiempo.es',
  company: 'wetter-com',
  categories: ['meteorologia'],
  tagline: 'Aplicació del temps amb la política de privadesa només en alemany i la ubicació exacta declarada per rastrejar',
  summary:
    'L’aplicació tiempo.es és de l’alemanya wetter.com, i l’App Store la vincula a una política redactada només en alemany. L’etiqueta declara la ubicació exacta i l’identificador del dispositiu com a dades per rastrejar. La publicitat personalitzada es comercialitza en corresponsabilitat amb Ströer, ProSiebenSat.1 i altres venedors d’espai, i hi ha una versió de pagament sense anuncis.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Alemanya',
  links: {
    website: 'https://www.app.tiempo.es/',
    privacyPolicy: 'https://www.wetter.com/internal/news/datenschutzhinweise_aid_614ae65187629322ad0dd008.html',
    appStore: appStore('1020581825'),
  },
  accountRequired: f('no', 'official', ['tiempo-es-wetter-privacy'], 'La política preveu un registre opcional (Contentpass) i una compra sense anuncis, però no un compte obligatori.'),
  openSource: f('no', 'official', ['tiempo-es-wetter-privacy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'La ubicació exacta serveix per a les previsions i les alertes, però la política també la fa servir per a publicitat basada en interessos i ubicació, també de tercers, si s’hi consent.',
  dataCollection: [
    row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['tiempo-es-wetter-app-store', 'tiempo-es-wetter-privacy'], note: 'La política preveu publicitat basada en la ubicació, també de tercers, amb consentiment.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['tiempo-es-wetter-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['tiempo-es-wetter-app-store', 'tiempo-es-wetter-privacy'] }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['tiempo-es-wetter-app-store'], note: 'Inclou les dades de publicitat.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['tiempo-es-wetter-privacy'], note: 'Els registres del servidor es conserven 30 dies.' }),
    row('interessos-inferits', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['tiempo-es-wetter-privacy'], note: 'La política parla de dades sociodemogràfiques per a publicitat.' }),
    row('historial-de-compres', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['tiempo-es-wetter-app-store'], note: 'La compra de la versió sense anuncis.' }),
    row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['tiempo-es-wetter-app-store'] }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari'], sources: ['tiempo-es-wetter-app-store', 'tiempo-es-wetter-privacy'], note: 'Consultes d’atenció al client, gestionades amb Zendesk.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['tiempo-es-wetter-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['tiempo-es-wetter-app-store'], 'L’etiqueta declara la ubicació exacta i aproximada, l’identificador del dispositiu i les dades de publicitat com a dades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['tiempo-es-wetter-privacy'], 'La política remet a la plataforma de consentiment per a la durada dels identificadors publicitaris.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['tiempo-es-wetter-privacy'], 'Socis del marc IAB i corresponsables publicitaris com Ströer, ProSiebenSat.1, Seven.One Media, Goldbach i YOC.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['tiempo-es-wetter-privacy'], 'Comercialització d’espais per a publicitat personalitzada en corresponsabilitat amb diversos venedors.'),
    profiling: f('yes', 'official', ['tiempo-es-wetter-privacy'], 'Publicitat basada en interessos i dades sociodemogràfiques, amb consentiment.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['tiempo-es-wetter-privacy'], 'Corresponsables publicitaris, socis de la plataforma de consentiment i proveïdors com AWS, Zendesk, Usercentrics, Pushwoosh i MoEngage.'),
    intraGroupSharing: unknown('No hem trobat informació sobre la compartició dins del grup.'),
    dataBrokerSales: unknown('No consta la venda de dades a intermediaris.'),
    internationalTransfers: f('yes', 'official', ['tiempo-es-wetter-privacy'], 'Destinataris als Estats Units i a Singapur, amb el marc de privadesa UE-EUA o clàusules contractuals tipus.', { mechanism: 'adequacy' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['tiempo-es-wetter-privacy'], 'Terminis concrets: registres 30 dies, consentiments 13 mesos, dades de contacte i de notificacions tres anys, dades contractuals deu anys.'),
    dataAfterDeletion: f('partial', 'official', ['tiempo-es-wetter-privacy'], 'Les dades de registre es conserven tres anys després de donar-se de baixa.'),
    periods: [
      { dataType: 'adreca-ip', period: '30 dies (fitxers de registre)', sources: ['tiempo-es-wetter-privacy'] },
      { period: 'Consentiments de galetes: 13 mesos', sources: ['tiempo-es-wetter-privacy'] },
    ],
  },
  accountDeletion: {
    possible: na('L’aplicació es fa servir sense compte propi.'),
    selfService: na('No hi ha compte per eliminar.'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Obre el gestor de privadesa de l’aplicació i retira els consentiments de publicitat i d’ubicació.',
      'Per exercir el dret de supressió, escriu a datenschutz@wetter.com.',
    ],
    obstacles: 'La política, en alemany, és l’única que enllaça l’App Store per a l’aplicació espanyola.',
    sources: ['tiempo-es-wetter-privacy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['tiempo-es-wetter-privacy'], 'Portabilitat reconeguda, a petició.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['tiempo-es-wetter-privacy'], 'Adreça de protecció de dades i delegat de protecció de dades extern.', {
      url: 'mailto:datenschutz@wetter.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['tiempo-es-wetter-privacy'], 'Gestor de consentiments (IAB) i oposició a l’ús publicitari; també es pot pagar per treure els anuncis.'),
    telemetryOptOut: f('partial', 'official', ['tiempo-es-wetter-privacy'], 'Les estadístiques basades en consentiment es poden rebutjar al gestor de privadesa.'),
    granularControls: f('yes', 'official', ['tiempo-es-wetter-privacy'], 'Consentiment per finalitat i per soci.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos.'),
  },
  security: {
    e2ee: na('Servei d’informació meteorològica; no hi ha comunicació privada entre persones.'),
    transportEncryption: unknown('No hem trobat documentació sobre el xifratge en trànsit.'),
    atRestEncryption: unknown('No hi ha informació sobre el xifratge en repòs.'),
    mfa: na('L’aplicació no té comptes propis.'),
    independentAudits: unknown('No consten auditories publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hem trobat cap canal de notificació de vulnerabilitats; wetter.com no té security.txt.'),
  },
  alternatives: [
    {
      app: 'windy-com',
      comparability: 'partial',
      rationale: 'Previsions i radar sense cap dada declarada per rastrejar a l’App Store.',
      tradeOffs: 'Interfície més tècnica.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes: 'L’App Store atribueix l’aplicació a wetter.com GmbH, però la política designa com a responsable wetter.com Group GmbH. La política enllaçada parla de «l’aplicació wetter.com» i no esmenta tiempo.es pel nom.',
    openQuestions: ['Hi ha una versió en castellà de la política de privadesa de l’aplicació tiempo.es?'],
  },
}

/* ═══════════════════════ Uber ═══════════════════════ */
const uberSharing = {
  thirdPartySharing: f('yes', 'official', ['uber-privacy-notice'], 'Amb conductors i establiments, socis de publicitat i màrqueting (com Criteo, Google i Rokt), asseguradores, autoritats i aplicacions connectades.'),
  intraGroupSharing: f('yes', 'official', ['uber-privacy-notice'], 'Uber Technologies i Uber B.V. són corresponsables, i el compte és compartit entre Uber i Uber Eats.'),
  dataBrokerSales: unknown('L’avís no esmenta la venda a intermediaris de dades per a la Unió Europea.'),
  internationalTransfers: f('yes', 'official', ['uber-privacy-notice'], 'Transferències als Estats Units amb el marc de privadesa UE-EUA i clàusules contractuals tipus.', { mechanism: 'adequacy' }),
}

const uberRights = {
  dataExport: f('yes', 'official', ['uber-privacy-notice'], 'Eina «Descarga tus datos» al centre de privadesa.', { url: 'https://myprivacy.uber.com/' }),
  exportFormatQuality: 'unknown' as const,
  rightsExercise: f('yes', 'official', ['uber-privacy-notice'], 'Centre de privadesa i delegat de protecció de dades a Uber B.V. (Amsterdam).', {
    url: 'https://www.uber.com/privacy-dpo',
    responseTimeDays: 30,
  }),
}

const uberSecurity = {
  e2ee: f('no', 'official', ['uber-privacy-notice'], 'Uber conserva el contingut dels xats i pot enregistrar trucades d’atenció al client.', { scope: 'none' }),
  transportEncryption: unknown('No hem trobat documentació pública recent sobre el xifratge en trànsit.'),
  atRestEncryption: unknown('No hem trobat documentació pública sobre el xifratge en repòs.'),
  mfa: f('yes', 'official', ['uber-2fa'], 'Verificació en dos passos opcional amb codi per SMS o aplicació d’autenticació.', { methods: ['sms', 'totp'] }),
  independentAudits: unknown('No hem trobat auditories de seguretat publicades per al servei de consum.'),
  bugBounty: f('yes', 'official', ['uber-hackerone'], 'Programa públic de recompenses a HackerOne des del 2016.', { url: 'https://hackerone.com/uber' }),
  vulnerabilityDisclosure: f('yes', 'official', ['uber-hackerone']),
}

const uberRetention = {
  definedPeriods: f('yes', 'official', ['uber-privacy-notice'], 'L’avís dona terminis per categoria: viatges i pagaments, el que arribi abans entre la vida del compte i set anys; documents d’identitat, un any; selfies de verificació, tres anys.'),
  dataAfterDeletion: f('partial', 'official', ['uber-privacy-notice', 'uber-delete-account'], 'Esborrat en 90 dies després de la sol·licitud, amb excepcions per frau, seguretat i obligacions legals.'),
  periods: [
    { dataType: 'ubicacio-precisa', period: 'Vida del compte o set anys, el que arribi abans', sources: ['uber-privacy-notice'] },
    { dataType: 'document-identificatiu-oficial', period: 'Un any', sources: ['uber-privacy-notice'] },
    { dataType: 'dades-biometriques', period: 'Tres anys (selfies de verificació)', sources: ['uber-privacy-notice'] },
  ],
}

const uberDeletion = (appName: string) => ({
  possible: f('yes', 'official', ['uber-delete-account']),
  selfService: f('yes', 'official', ['uber-delete-account'], 'Des de l’aplicació o el web, amb un codi de verificació.'),
  directUrl: 'https://help.uber.com/en/riders/article/delete-my-uber-account?nodeId=71c58af5-23fd-428a-b1d1-fc3c7dd70b4a',
  difficulty: 'easy' as const,
  waitingPeriodDays: 30,
  requiresSupportContact: false,
  steps: [
    `A l’aplicació ${appName}, obre el menú i ves a «Configuració» i després a «Configuració de privadesa».`,
    'Toca «Eliminar compte» i segueix els passos.',
    'Verifica la identitat amb el codi temporal que rebràs.',
    'El compte es desactiva de seguida i s’elimina definitivament al cap de 30 dies; si hi tornes a entrar abans, es recupera.',
  ],
  obstacles: 'El compte és únic per a Uber i Uber Eats: eliminar-lo esborra tots dos serveis. Els crèdits i promocions no utilitzats es perden.',
  dataRetained: 'Informació que la llei exigeix o permet conservar, com registres fiscals i de frau.',
  sources: ['uber-delete-account', 'uber-privacy-notice'],
})

const uber: AppSeed = {
  slug: 'uber',
  name: 'Uber',
  company: 'uber-bv',
  categories: ['mobilitat-i-transport'],
  tagline: 'Transport amb conductor que declara el nom, l’adreça, el telèfon i l’historial de compres com a dades per rastrejar',
  summary:
    'Uber recull la ubicació exacta durant tot el trajecte, l’historial de viatges, el pagament i, per verificar la identitat, documents i selfies amb reconeixement facial. L’etiqueta declara dades de contacte, compres i cerques com a dades per rastrejar, i l’avís de privadesa preveu compartir-ne amb intermediaris publicitaris. L’autoritat neerlandesa l’ha sancionat quatre vegades, la darrera amb 825 milions d’euros per desactivar automàticament els comptes de conductors.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Països Baixos (Uber B.V.), amb Uber Technologies com a corresponsable',
  links: {
    website: 'https://www.uber.com/es/es/',
    privacyPolicy: 'https://www.uber.com/legal/es/document/?name=privacy-notice&country=spain&lang=es',
    privacyCenter: 'https://myprivacy.uber.com/',
    appStore: appStore('368677368'),
  },
  accountRequired: f('yes', 'official', ['uber-privacy-notice'], 'Cal un compte amb telèfon o correu per demanar un viatge.'),
  openSource: f('no', 'official', ['uber-privacy-notice'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Els origens i destinacions dels viatges revelen el domicili, la feina, els centres mèdics o religiosos que es visiten i les rutines horàries. Uber també pot inferir el gènere a partir del nom i combina aquestes dades amb la publicitat de la seva pròpia xarxa.',
  dataCollection: [
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['uber-app-store', 'uber-privacy-notice'], note: 'Des que es demana el viatge fins que s’acaba; es comparteix amb el conductor.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['uber-app-store'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['uber-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['uber-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['uber-app-store'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['uber-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'recomanacions-algoritmiques'], sources: ['uber-app-store', 'uber-privacy-notice'], note: 'Historial de viatges i comandes.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['uber-app-store'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['uber-app-store', 'uber-privacy-notice'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['uber-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['uber-app-store'] }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['uber-privacy-notice'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['uber-app-store'] }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari', 'seguretat-i-prevencio-del-frau'], sources: ['uber-app-store', 'uber-privacy-notice'], note: 'Xats amb el conductor i amb atenció al client; les trucades d’atenció es poden enregistrar.' }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['uber-privacy-notice'], note: 'Quan Uber demana verificar la identitat.' }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['uber-privacy-notice', 'uber-app-store'], note: 'Selfies i reconeixement facial per verificar la identitat; l’etiqueta declara «dades sensibles».' }),
    row('genere', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['uber-privacy-notice'], note: 'L’avís preveu inferir el gènere a partir del nom.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['uber-privacy-notice'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['uber-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['uber-app-store'], 'L’etiqueta declara per rastrejar l’historial de compres, les dades de contacte, les cerques, els identificadors i les dades d’ús.'),
    advertisingIdentifiers: f('yes', 'official', ['uber-privacy-notice'], 'L’avís inclou els identificadors publicitaris entre les dades del dispositiu.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['uber-privacy-notice'], 'Intermediaris publicitaris com Criteo, Google i Rokt.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['uber-privacy-notice'], 'Personalització d’anuncis amb l’historial de viatges, comandes i cerques, dins i fora de l’aplicació.', {
      optOutUrl: 'https://myprivacy.uber.com/',
    }),
    profiling: f('yes', 'official', ['uber-privacy-notice'], 'Algoritmes d’emparellament, de preus dinàmics, de detecció del frau i de risc de conflicte entre persones usuàries.'),
    aiTraining: f('yes', 'official', ['uber-privacy-notice'], 'L’avís preveu fer servir dades per a recerca i desenvolupament de productes, inclòs l’entrenament de models d’aprenentatge automàtic.'),
  },
  sharing: uberSharing,
  transparency: {
    policyClarity: 'medium',
    transparencyReport: f('yes', 'official', ['uber-transparency-report'], 'Informe de transparència sobre les peticions governamentals de dades.'),
  },
  retention: uberRetention,
  accountDeletion: uberDeletion('Uber'),
  userRights: uberRights,
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['uber-privacy-notice'], 'Al menú «Anuncios y datos» es pot triar si l’historial de viatges, comandes i cerques personalitza els anuncis.', {
      url: 'https://myprivacy.uber.com/',
    }),
    telemetryOptOut: unknown('No hem trobat cap control per aturar l’analítica d’ús.'),
    granularControls: f('yes', 'official', ['uber-privacy-notice'], 'Centre de privadesa amb controls d’anuncis, de comunicacions i de galetes.'),
    defaultPosture: 'permissive',
    darkPatterns: unknown('No hem trobat cap anàlisi independent de patrons foscos a l’aplicació de consum.'),
  },
  security: uberSecurity,
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes: 'Les dues sancions més altes de l’autoritat neerlandesa afecten les dades dels conductors, no les de les persones passatgeres, però són del mateix responsable i de la mateixa plataforma. Les registrem com a incidents de l’empresa sense que pesin com una bretxa de les dades de qui demana viatges.',
    openQuestions: ['Quins intermediaris publicitaris reben dades de les persones usuàries a Espanya, més enllà dels exemples que dona l’avís?'],
  },
}

/* ═══════════════════════ Uber Eats ═══════════════════════ */
const uberEats: AppSeed = {
  slug: 'uber-eats',
  name: 'Uber Eats',
  company: 'uber-bv',
  categories: ['repartiment-a-domicili'],
  tagline: 'Repartiment a domicili que comparteix compte amb Uber i declara l’adreça i l’historial de comandes per a publicitat de tercers',
  summary:
    'Uber Eats fa servir el mateix compte, el mateix avís de privadesa i els mateixos controls que Uber. L’etiqueta declara per rastrejar l’historial de compres, les dades de contacte i les cerques, i afegeix l’adreça, la ubicació i les comandes a la publicitat de tercers. Eliminar el compte esborra alhora Uber i Uber Eats.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Països Baixos (Uber B.V.), amb Uber Technologies com a corresponsable',
  links: {
    website: 'https://www.ubereats.com/es',
    privacyPolicy: 'https://www.uber.com/legal/es/document/?name=privacy-notice&country=spain&lang=es',
    privacyCenter: 'https://myprivacy.uber.com/',
    appStore: appStore('1058959277'),
  },
  accountRequired: f('yes', 'official', ['uber-privacy-notice'], 'Cal un compte d’Uber per fer comandes.'),
  openSource: f('no', 'official', ['uber-privacy-notice'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Les comandes de menjar, de supermercat i de farmàcia revelen hàbits alimentaris, situacions de salut i horaris domèstics. L’adreça de lliurament i l’historial de comandes es fan servir per a publicitat, també de tercers segons l’etiqueta.',
  dataCollection: [
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['uber-eats-app-store'], note: 'L’adreça de lliurament es comparteix amb l’establiment i la persona repartidora.' }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['uber-eats-app-store', 'uber-privacy-notice'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['uber-eats-app-store'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['uber-eats-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['uber-eats-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['uber-eats-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'recomanacions-algoritmiques'], sources: ['uber-eats-app-store', 'uber-privacy-notice'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['uber-eats-app-store'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['uber-eats-app-store'] }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['uber-privacy-notice'], note: 'No es demanen com a tals, però les comandes de farmàcia i els productes comprats permeten inferir-les.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['uber-eats-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['uber-eats-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['uber-eats-app-store'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['atencio-a-lusuari', 'prestacio-del-servei'], sources: ['uber-eats-app-store'], note: 'Per exemple, fotos d’una comanda amb incidències.' }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['atencio-a-lusuari', 'prestacio-del-servei'], sources: ['uber-eats-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['uber-eats-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['uber-eats-app-store'], 'L’etiqueta declara per rastrejar l’historial de compres, les dades de contacte, les cerques, els identificadors i les dades d’ús.'),
    advertisingIdentifiers: f('yes', 'official', ['uber-privacy-notice']),
    thirdPartyTrackersPresent: f('yes', 'official', ['uber-privacy-notice'], 'Intermediaris publicitaris com Criteo, Google i Rokt.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['uber-eats-app-store', 'uber-privacy-notice'], 'L’etiqueta declara dades per a publicitat de tercers i l’avís preveu personalitzar anuncis amb les comandes.', {
      optOutUrl: 'https://myprivacy.uber.com/',
    }),
    profiling: f('yes', 'official', ['uber-privacy-notice'], 'Recomanacions i anuncis basats en les comandes i cerques; algoritmes de frau.'),
    aiTraining: f('yes', 'official', ['uber-privacy-notice'], 'Entrenament de models d’aprenentatge automàtic dins de la recerca i el desenvolupament de productes.'),
  },
  sharing: uberSharing,
  transparency: {
    policyClarity: 'medium',
    transparencyReport: f('yes', 'official', ['uber-transparency-report']),
  },
  retention: uberRetention,
  accountDeletion: uberDeletion('Uber Eats'),
  userRights: uberRights,
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['uber-privacy-notice'], 'Menú «Anuncios y datos» del centre de privadesa.', { url: 'https://myprivacy.uber.com/' }),
    telemetryOptOut: unknown('No hem trobat cap control per aturar l’analítica d’ús.'),
    granularControls: f('yes', 'official', ['uber-privacy-notice'], 'Controls d’anuncis, comunicacions i galetes compartits amb Uber.'),
    defaultPosture: 'permissive',
    darkPatterns: unknown('No hem trobat cap anàlisi independent de patrons foscos.'),
  },
  security: uberSecurity,
  alternatives: [
    {
      app: 'glovo',
      comparability: 'equivalent',
      rationale: 'Cobreix la mateixa necessitat de repartiment a domicili.',
      tradeOffs: 'No és més protectora: Glovo no ofereix eliminació autoservei del compte.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    openQuestions: ['Quines dades de les comandes arriben als anunciants de la xarxa publicitària d’Uber?'],
  },
}

/* ═══════════════════════ QuéFalta ═══════════════════════ */
const quefalta: AppSeed = {
  slug: 'quefalta',
  name: 'QuéFalta',
  company: 'ruben-ruiz-osma',
  categories: ['alimentacio-i-restauracio'],
  tagline: 'Llista de la compra compartida sense anuncis ni rastreig, amb esborrat immediat del compte',
  summary:
    'QuéFalta és una aplicació d’un desenvolupador independent espanyol per compartir la llista de la compra i comparar preus de supermercats. No té publicitat, l’etiqueta només declara les fotos i l’identificador d’usuari per al funcionament, i el compte s’esborra de manera immediata des de l’aplicació. Les dades es guarden a Supabase amb servidors a la Unió Europea.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'donations',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://quefalta.es/',
    privacyPolicy: 'https://quefalta.es/privacidad/',
    appStore: appStore('6777720373'),
  },
  accountRequired: f('yes', 'official', ['quefalta-privacy-policy', 'quefalta-app-store'], 'Cal iniciar la sessió amb Apple o Google.'),
  openSource: unknown('No hem trobat el codi publicat.'),
  dataSummary:
    'La llista de la compra i l’historial de compres revelen hàbits alimentaris i la composició de la llar. Els membres de cada grup veuen el nom, la foto i l’activitat de les llistes compartides.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['quefalta-privacy-policy'], note: 'Obtingut d’Apple o de Google; visible per als membres dels grups.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['quefalta-privacy-policy'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['quefalta-app-store', 'quefalta-privacy-policy'], note: 'Inclou el nom d’usuari (@).' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['quefalta-app-store', 'quefalta-privacy-policy'], note: 'Foto de perfil opcional.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['quefalta-privacy-policy'], note: 'Llistes, productes, compres finalitzades i favorits; no apareix a l’etiqueta de l’App Store.' }),
    row('xarxa-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['quefalta-privacy-policy'], note: 'Grups i relacions d’amistat dins de l’aplicació.' }),
    row('testimoni-d-autenticacio', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['quefalta-privacy-policy'], note: 'Testimoni de notificacions, enviat a Expo, Apple o Google només si s’activen.' }),
    row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['quefalta-privacy-policy'], note: 'La política diu que no hi ha publicitat.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['quefalta-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['quefalta-privacy-policy'], 'Sense publicitat ni ús publicitari de les dades.'),
    thirdPartyTrackersPresent: f('no', 'official', ['quefalta-privacy-policy'], 'La política no preveu analítica a l’aplicació; Google Analytics només es carrega al web si s’accepten les galetes.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['quefalta-privacy-policy'], 'La política diu que l’aplicació no té anuncis i que no fa servir les dades per a publicitat.'),
    profiling: f('no', 'official', ['quefalta-privacy-policy'], 'Les finalitats es limiten al servei, a les funcions opcionals i a la seguretat.'),
    aiTraining: unknown('La política no en parla.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['quefalta-privacy-policy'], 'Només encarregats del tractament: Supabase, Apple i Google per a l’inici de sessió i Expo per a les notificacions.'),
    intraGroupSharing: na('No hi ha cap grup empresarial.'),
    dataBrokerSales: f('no', 'official', ['quefalta-privacy-policy'], 'No ven ni cedeix dades a tercers.'),
    internationalTransfers: f('partial', 'official', ['quefalta-privacy-policy'], 'Base de dades a la Unió Europea; les notificacions passen per Expo, Apple o Google i poden implicar transferències.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: na('Desenvolupador individual sense peticions d’autoritats publicades; un informe de transparència no s’espera d’un servei d’aquesta mida.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['quefalta-privacy-policy'], 'Les dades es conserven mentre existeix el compte.'),
    dataAfterDeletion: f('yes', 'official', ['quefalta-delete-account'], 'Esborrat permanent i immediat; només es mantenen, desvinculats de la identitat, els productes afegits a llistes de grups compartits.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['quefalta-delete-account']),
    selfService: f('yes', 'official', ['quefalta-delete-account']),
    directUrl: 'https://quefalta.es/eliminar-cuenta/',
    difficulty: 'easy',
    waitingPeriodDays: 0,
    requiresSupportContact: false,
    steps: [
      'Obre QuéFalta i inicia la sessió.',
      'Ves a Perfil > Privacitat i seguretat.',
      'Toca «Eliminar cuenta» i confirma: l’esborrat és immediat i no es pot desfer.',
      'Sense accés a l’aplicació, escriu a contacto@quefalta.es des de l’adreça del compte amb l’assumpte «Eliminar cuenta»; hi ha un termini màxim de 30 dies.',
    ],
    dataRetained: 'Els productes afegits a llistes de grups compartits, desvinculats de la identitat.',
    sources: ['quefalta-delete-account'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['quefalta-privacy-policy'], 'Portabilitat reconeguda; cal demanar-la per correu.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['quefalta-privacy-policy'], 'Des de l’aplicació o per correu, amb reclamació davant l’AEPD.', {
      url: 'mailto:contacto@quefalta.es',
    }),
  },
  controls: {
    adPersonalizationOptOut: na('L’aplicació no té publicitat.'),
    telemetryOptOut: na('La política no preveu analítica a l’aplicació.'),
    granularControls: f('yes', 'official', ['quefalta-privacy-policy'], 'Foto, visibilitat per nom d’usuari i notificacions s’activen i es retiren des de l’aplicació.'),
    defaultPosture: 'protective',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos.'),
  },
  security: {
    e2ee: f('no', 'official', ['quefalta-privacy-policy'], 'Les llistes es guarden a Supabase per sincronitzar-les; no hi ha cap promesa de xifratge d’extrem a extrem.', { scope: 'none' }),
    transportEncryption: unknown('No hem trobat documentació tècnica sobre el xifratge.'),
    atRestEncryption: unknown('No hi ha informació sobre el xifratge en repòs.'),
    mfa: f('partial', 'official', ['quefalta-privacy-policy'], 'No hi ha contrasenya pròpia: la seguretat depèn del compte d’Apple o de Google amb què s’entra.'),
    independentAudits: unknown('No consten auditories publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hem trobat cap canal específic; hi ha una adreça de contacte general.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes: 'Aplicació publicada a mitjan 2026 per una sola persona. L’etiqueta de l’App Store no inclou les llistes ni l’historial de compres, que la política sí declara. El model de negoci és una suposició raonable a partir de l’apartat «Apoyar» del web.',
    openQuestions: ['Com es finança l’aplicació a llarg termini i què passaria amb les dades si canviés de mans?'],
  },
}

/* ═══════════════════════ Too Good To Go ═══════════════════════ */
const tooGoodToGo: AppSeed = {
  slug: 'too-good-to-go',
  name: 'Too Good To Go',
  company: 'too-good-to-go',
  categories: ['alimentacio-i-restauracio'],
  tagline: 'Excedents d’aliments amb certificació SOC 2 i esborrat des de l’aplicació, però amb l’historial de compres declarat per rastrejar',
  summary:
    'Too Good To Go, empresa danesa, connecta botigues amb excedents i persones que els compren. L’etiqueta declara l’historial de compres i els identificadors com a dades per rastrejar, i la política preveu publicitat dirigida a partir de l’ús i interessos legítims per al màrqueting. A canvi, l’aplicació permet descarregar les dades i eliminar el compte sense passar per atenció al client, i publica un centre de confiança amb auditories SOC 2 i PCI DSS.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Dinamarca',
  links: {
    website: 'https://www.toogoodtogo.com/es',
    privacyPolicy: 'https://www.toogoodtogo.com/es/legal/privacy',
    privacyCenter: 'https://trust.toogoodtogo.com/',
    appStore: appStore('1060683933'),
  },
  accountRequired: f('yes', 'official', ['too-good-to-go-privacy-policy'], 'Cal un compte per reservar un pack.'),
  openSource: f('no', 'official', ['too-good-to-go-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Les botigues on es recull i les hores de recollida dibuixen rutines i barris. Les preferències alimentàries opcionals i les consultes sobre al·lèrgies poden revelar dades de salut.',
  dataCollection: [
    row('ubicacio-precisa', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['too-good-to-go-privacy-policy'], note: 'Només si es dona permís; si no, la ubicació s’indica a mà.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['too-good-to-go-app-store', 'too-good-to-go-privacy-policy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['too-good-to-go-app-store'] }),
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['too-good-to-go-app-store', 'too-good-to-go-privacy-policy'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['too-good-to-go-app-store', 'too-good-to-go-privacy-policy'] }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['too-good-to-go-privacy-policy'], note: 'Només per a compres amb lliurament; es valida amb Google.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'personalitzacio-de-continguts', 'mesura-i-analisi-dus'], sources: ['too-good-to-go-app-store', 'too-good-to-go-privacy-policy'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['too-good-to-go-privacy-policy'], note: 'No guarda les dades de la targeta, només la resposta del proveïdor de pagament.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['too-good-to-go-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['too-good-to-go-app-store'] }),
    row('identificador-publicitari', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['too-good-to-go-privacy-policy'], note: 'La política esmenta l’IDFA i l’IDFV.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['too-good-to-go-app-store', 'too-good-to-go-privacy-policy'] }),
    row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['personalitzacio-de-continguts'], sources: ['too-good-to-go-privacy-policy'] }),
    row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['personalitzacio-de-continguts'], sources: ['too-good-to-go-privacy-policy'] }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['atencio-a-lusuari'], sources: ['too-good-to-go-privacy-policy'], note: 'Només si es comparteixen al·lèrgies o altres dades amb atenció al client.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['atencio-a-lusuari'], sources: ['too-good-to-go-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['too-good-to-go-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['too-good-to-go-app-store'], 'L’etiqueta declara l’historial de compres i els identificadors d’usuari i de dispositiu com a dades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['too-good-to-go-privacy-policy'], 'La política cita l’IDFA entre els identificadors que recull.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['too-good-to-go-privacy-policy'], 'Plataformes publicitàries de tercers si s’accepten les galetes de màrqueting, i proveïdors de mesura publicitària.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['too-good-to-go-privacy-policy'], 'Publicitat dirigida dins la plataforma i en altres llocs web, basada en l’interès legítim o en el consentiment segons el cas.'),
    profiling: f('yes', 'official', ['too-good-to-go-privacy-policy'], 'Personalització a partir de les interaccions, l’historial de cerques i compres i les preferències; decisions automatitzades per detectar el frau.'),
    aiTraining: unknown('La política no parla de l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['too-good-to-go-privacy-policy'], 'Proveïdors de pagament, allotjament, analítica i publicitat; Google per a la geolocalització; agències de premsa amb consentiment.'),
    intraGroupSharing: f('yes', 'official', ['too-good-to-go-privacy-policy'], 'Compartició dins de la família d’empreses Too Good To Go.'),
    dataBrokerSales: unknown('La política no ho diu per a la Unió Europea; l’apartat de Califòrnia declara «vendes» o «comparticions» per a publicitat.'),
    internationalTransfers: f('yes', 'official', ['too-good-to-go-privacy-policy'], 'Decisions d’adequació, clàusules contractuals tipus o normes corporatives vinculants.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['too-good-to-go-privacy-policy'], 'Només criteris: la relació amb la persona, les obligacions legals i els terminis de prescripció.'),
    dataAfterDeletion: f('partial', 'official', ['too-good-to-go-privacy-policy'], 'Es conserven els registres de transaccions que exigeix la llei.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['too-good-to-go-privacy-policy']),
    selfService: f('yes', 'official', ['too-good-to-go-privacy-policy'], 'L’aplicació permet eliminar les dades des de la configuració del compte, i també hi ha un formulari web.'),
    directUrl: 'https://space.toogoodtogo.com/privacy',
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'A l’aplicació, obre el perfil i ves a la configuració del compte.',
      'Tria l’opció d’eliminar el compte i confirma.',
      'Com a alternativa, introdueix la teva adreça a space.toogoodtogo.com/privacy per demanar-ne l’eliminació.',
      'Per a qualsevol altre dret, escriu a privacy@toogoodtogo.com.',
    ],
    dataRetained: 'Registres de transaccions durant els terminis legals.',
    sources: ['too-good-to-go-privacy-policy'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['too-good-to-go-privacy-policy'], 'Còpia de les dades des de l’aplicació o pel formulari web.', { url: 'https://space.toogoodtogo.com/privacy' }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['too-good-to-go-privacy-policy'], 'Adreça de privadesa, resposta en un mes i reclamació davant l’autoritat danesa.', {
      url: 'mailto:privacy@toogoodtogo.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['too-good-to-go-privacy-policy'], 'Galetes de màrqueting amb consentiment i baixa dels butlletins; per a l’aplicació remet a la configuració de rastreig del sistema.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica a l’aplicació.'),
    granularControls: f('partial', 'official', ['too-good-to-go-privacy-policy'], 'Descàrrega i eliminació de dades a l’aplicació, i preferències de comunicacions.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos.'),
  },
  security: {
    e2ee: na('Servei de compra; no hi ha comunicació privada entre persones usuàries.'),
    transportEncryption: f('partial', 'official', ['too-good-to-go-trust-center'], 'El centre de confiança parla de bones pràctiques de xifratge sense concretar-les.'),
    atRestEncryption: f('partial', 'official', ['too-good-to-go-trust-center'], 'Sense detalls publicats.'),
    mfa: unknown('No hem trobat documentació sobre la verificació en dos passos.'),
    independentAudits: f('yes', 'official', ['too-good-to-go-trust-center'], 'Informe SOC 2 Type 2, certificació PCI DSS 4.0.1 i proves de penetració, disponibles a petició.', {
      url: 'https://trust.toogoodtogo.com/',
    }),
    bugBounty: unknown('No hem trobat cap programa de recompenses públic.'),
    vulnerabilityDisclosure: f('yes', 'official', ['too-good-to-go-security-txt'], 'Fitxer security.txt amb l’adreça security@toogoodtogo.com.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    openQuestions: [
      'Un lloc de demandes col·lectives parla d’una bretxa a Too Good To Go Inc. (febrer del 2026) notificada a Indiana. No hem trobat cap comunicat oficial ni cap font fiable, i per això no la registrem com a incident. Va afectar persones usuàries europees?',
      'Quins són els passos exactes a l’aplicació per eliminar el compte?',
    ],
  },
}

export const lot: SeedLot = {
  companies: [
    {
      slug: 'windyty',
      name: 'Windyty',
      legalName: 'Windyty, SE',
      description: 'Empresa txeca que fa Windy.com, un servei de mapes i previsions meteorològiques.',
      headquartersCountry: 'CZ',
      euEstablishment: 'Strakonická 3363/2d, 150 00 Praga 5, República Txeca',
      leadSupervisoryAuthority: 'uoou-cz',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.windy.com/',
      productDomains: ['windy.com'],
      privacyContact: 'dataprotection@windy.com',
    },
    {
      slug: 'windy-weather-world',
      name: 'Windy Weather World',
      legalName: 'Windy Weather World Inc.',
      description: 'Empresa de Delaware que fa l’aplicació Windy.app, de previsions de vent per a esports.',
      headquartersCountry: 'US',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://windy.app/',
      productDomains: ['windy.app', 'windyapp.co'],
      privacyContact: 'windy@windyapp.co',
    },
    {
      slug: 'jrustonapps',
      name: 'jRustonApps',
      legalName: 'jRustonApps B.V.',
      description: 'Petit editor neerlandès d’aplicacions d’alertes naturals, com My Aurora Forecast i My Earthquake Alerts.',
      headquartersCountry: 'NL',
      euEstablishment: 'Keizersgracht 482, 1017 EG Amsterdam, Països Baixos',
      leadSupervisoryAuthority: 'ap-nl',
      ownership: 'private',
      primaryRevenueModel: 'advertising',
      website: 'https://www.jrustonapps.com/',
      productDomains: ['jrustonapps.com'],
      privacyContact: 'support@jrustonapps.com',
    },
    {
      slug: 'wetteronline',
      name: 'WetterOnline',
      legalName: 'WetterOnline Meteorologische Dienstleistungen GmbH',
      description: 'Empresa alemanya de serveis meteorològics; a Espanya distribueix l’aplicació com a Tiempo & Radar.',
      headquartersCountry: 'DE',
      euEstablishment: 'Karl-Legien-Straße 194a, 53117 Bonn, Alemanya',
      leadSupervisoryAuthority: 'ldi-nrw',
      ownership: 'private',
      primaryRevenueModel: 'advertising',
      website: 'https://www.wetteronline.de/',
      productDomains: ['wetteronline.de', 'tiempoyradar.es'],
      privacyContact: 'datenschutz@wetteronline.de',
    },
    {
      slug: 'wetter-com',
      name: 'wetter.com',
      legalName: 'wetter.com Group GmbH',
      description: 'Empresa alemanya de serveis meteorològics, editora de l’aplicació tiempo.es.',
      headquartersCountry: 'DE',
      euEstablishment: 'Friedrichstraße 70a, 10117 Berlín, Alemanya',
      ownership: 'private',
      primaryRevenueModel: 'advertising',
      website: 'https://www.wetter.com/',
      productDomains: ['wetter.com'],
      privacyContact: 'datenschutz@wetter.com',
    },
    {
      slug: 'uber',
      name: 'Uber Technologies',
      legalName: 'Uber Technologies, Inc.',
      description: 'Plataforma nord-americana de transport amb conductor i repartiment a domicili.',
      headquartersCountry: 'US',
      ownership: 'public',
      primaryRevenueModel: 'commerce',
      website: 'https://www.uber.com/',
      productDomains: ['uber.com', 'ubereats.com'],
    },
    {
      slug: 'uber-bv',
      name: 'Uber B.V.',
      legalName: 'Uber B.V.',
      parent: 'uber',
      description: 'Filial neerlandesa d’Uber, corresponsable del tractament de les dades de les persones usuàries europees.',
      headquartersCountry: 'NL',
      euEstablishment: 'Burgerweeshuispad 301, 1076 HR Amsterdam, Països Baixos',
      leadSupervisoryAuthority: 'ap-nl',
      ownership: 'subsidiary',
      primaryRevenueModel: 'commerce',
      website: 'https://www.uber.com/',
      productDomains: ['uber.com', 'ubereats.com'],
      privacyContact: 'https://www.uber.com/privacy-dpo',
    },
    {
      slug: 'too-good-to-go',
      name: 'Too Good To Go',
      legalName: 'Too Good To Go ApS',
      description: 'Empresa danesa que connecta botigues amb excedents d’aliments i persones que els compren.',
      headquartersCountry: 'DK',
      euEstablishment: 'Landskronagade 66, 2100 Copenhaguen, Dinamarca',
      leadSupervisoryAuthority: 'datatilsynet-dk',
      ownership: 'private',
      primaryRevenueModel: 'commerce',
      website: 'https://www.toogoodtogo.com/',
      productDomains: ['toogoodtogo.com', 'toogoodtogo.es'],
      privacyContact: 'privacy@toogoodtogo.com',
    },
    {
      slug: 'ruben-ruiz-osma',
      name: 'Rubén Ruiz Osma',
      description: 'Desenvolupador independent espanyol, responsable del tractament de QuéFalta.',
      headquartersCountry: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'donations',
      website: 'https://quefalta.es/',
      productDomains: ['quefalta.es'],
      privacyContact: 'contacto@quefalta.es',
    },
  ],
  sources: [
    /* Windy.com */
    s('windy-com-privacy-policy', 'Privacy Policy – Agreements – Windy.com', 'https://account.windy.com/agreements/windy-privacy-policy', 'Windyty, SE', 'privacy-policy', 'primary', {
      language: 'en',
      summary: 'Política de Windy.com: dades de compte i d’ús, Google Analytics, allotjament a la UE, els Estats Units i Taiwan, compromís de no vendre dades i límits de conservació.',
    }),
    s('windy-com-app-store', 'Windy.com Meteorología y radar — App Store (Privacidad de la app)', appStore('1161387262'), 'Apple / Windyty, SE', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: cap dada per rastrejar ni vinculada a la identitat; ubicació, identificadors, contingut i diagnòstic no vinculats.',
    }),
    s('windy-com-community-delete', 'No "Delete Account" button presented. @ Windy Community', 'https://community.windy.com/topic/42009/no-delete-account-button-presented', 'Windyty, SE', 'support-doc', 'primary', {
      language: 'en',
      summary: 'Resposta de l’equip de Windy amb la ruta per eliminar el compte des de la pàgina de dades i privadesa.',
    }),
    s('windy-com-security-txt', 'security.txt — windy.com', 'https://www.windy.com/.well-known/security.txt', 'Windyty, SE', 'technical-doc', 'primary', {
      language: 'en',
      summary: 'Fitxer de contacte per notificar vulnerabilitats (security@windy.com).',
    }),
    /* Windy.app */
    s('windy-weather-privacy-policy', 'Privacy Policy - Windy.app', 'https://windyapp.co/CustomMenuItems/26/en', 'Windy Weather World Inc.', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2025-04-22',
      summary: 'Política de Windy.app: dades de contacte, ubicació, analítica amb Amplitude, UserX i Microsoft Clarity, publicitat amb Meta i AppsFlyer, i drets per correu en 15 dies hàbils.',
    }),
    s('windy-weather-app-store', 'Windy: Pronóstico del tiempo — App Store (Privacidad de la app)', appStore('997079492'), 'Apple / Windy Weather World Inc.', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: la ubicació exacta es declara per rastrejar; les dades d’analítica, com a no vinculades.',
    }),
    s('windy-weather-delete', 'How to delete account — Windy.app', 'https://windy.app/how-to-delete-account', 'Windy Weather World Inc.', 'support-doc', 'primary', {
      language: 'en',
      summary: 'Passos per eliminar el compte des de l’aplicació i què s’esborra.',
    }),
    /* jRustonApps */
    s('jrustonapps-privacy-free-ios', 'Privacy Policy of jRustonApps Free iOS Mobile Applications', 'https://www.jrustonapps.com/privacy?t=io-fr-14', 'jRustonApps B.V.', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2026-06-17',
      summary: 'Política de les aplicacions gratuïtes d’iOS: publicitat amb AdMob i Appodeal, Firebase, Crashlytics, l’SDK d’Opensignal i ubicació continuada.',
    }),
    s('my-aurora-forecast-app-store', 'My Aurora Forecast — App Store (Privacidad de la app)', appStore('1073082439'), 'Apple / jRustonApps B.V.', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: ubicació, identificador del dispositiu, dades d’ús i diagnòstic declarats per rastrejar i per a publicitat de tercers.',
    }),
    s('my-earthquake-alerts-app-store', 'My Earthquake Alerts & Feed — App Store (Privacidad de la app)', appStore('975709372'), 'Apple / jRustonApps B.V.', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: les mateixes categories que My Aurora Forecast, declarades per rastrejar i per a publicitat de tercers.',
    }),
    /* WetterOnline */
    s('wetteronline-privacy-app-es', 'Privacidad - Tiempo & Radar', 'https://www.tiempoyradar.es/apps/ios/privacy', 'WetterOnline Meteorologische Dienstleistungen GmbH', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de l’aplicació a Espanya: ubicació per cel·la i GPS, publicitat amb més de dos-cents socis, Google Analytics, Firebase, SDK de Facebook, AppsFlyer i Batch, i drets a datenschutz@wetteronline.de.',
    }),
    s('wetteronline-app-store', 'Tiempo & Radar — App Store (Privacidad de la app)', appStore('545993260'), 'Apple / WetterOnline', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors, dades d’ús i de rendiment declarats per rastrejar; ubicació aproximada per a publicitat pròpia.',
    }),
    s('wetteronline-netzpolitik-2026', 'Wegen Handy-Standortdaten: Wetter Online droht Bußgeld', 'https://netzpolitik.org/2026/wegen-handy-standortdaten-wetter-online-droht-bussgeld/', 'netzpolitik.org', 'press', 'secondary', {
      language: 'de',
      publishedAt: '2026-04-07',
      summary: 'L’autoritat de Rin del Nord-Westfàlia ha obert un procediment sancionador contra WetterOnline per fer servir durant anys la ubicació per a publicitat sense un consentiment vàlid.',
    }),
    /* tiempo.es */
    s('tiempo-es-wetter-privacy', 'Datenschutzhinweise APPSTORES', 'https://www.wetter.com/internal/news/datenschutzhinweise_aid_614ae65187629322ad0dd008.html', 'wetter.com Group GmbH', 'privacy-policy', 'primary', {
      language: 'de',
      publishedAt: '2026-02-12',
      summary: 'Política en alemany enllaçada per l’aplicació tiempo.es: corresponsabilitat publicitària, marc IAB, transferències als Estats Units i Singapur i terminis de conservació concrets.',
    }),
    s('tiempo-es-wetter-app-store', 'tiempo.es - Radar de tiempo — App Store (Privacidad de la app)', appStore('1020581825'), 'Apple / wetter.com GmbH', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: ubicació exacta i aproximada, identificador del dispositiu i dades de publicitat declarats per rastrejar.',
    }),
    /* Uber */
    s('uber-privacy-notice', 'Aviso de privacidad de Uber', 'https://www.uber.com/legal/es/document/?name=privacy-notice&country=spain&lang=es', 'Uber', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-09-01',
      summary: 'Avís de privadesa per a Espanya: corresponsabilitat d’Uber Technologies i Uber B.V., ubicació durant el viatge, verificació facial, publicitat amb intermediaris, entrenament de models i terminis de conservació.',
    }),
    s('uber-app-store', 'Uber - Viajes en taxi y más — App Store (Privacidad de la app)', appStore('368677368'), 'Apple / Uber Technologies', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, contacte, cerques, identificadors i dades d’ús declarats per rastrejar; dades sensibles per al funcionament.',
    }),
    s('uber-eats-app-store', 'Uber Eats: Comida a domicilio — App Store (Privacidad de la app)', appStore('1058959277'), 'Apple / Uber Technologies', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: les mateixes dades per rastrejar que Uber, més adreça, ubicació i compres per a publicitat de tercers.',
    }),
    s('uber-delete-account', 'Delete my Uber account | Riders | Uber Help', 'https://help.uber.com/en/riders/article/delete-my-uber-account?nodeId=71c58af5-23fd-428a-b1d1-fc3c7dd70b4a', 'Uber', 'support-doc', 'primary', {
      language: 'en',
      summary: 'Passos per eliminar el compte, desactivació immediata, esborrat als 30 dies i efecte sobre Uber Eats.',
    }),
    s('uber-2fa', 'Turn on 2-Step verification | Riders | Uber Help', 'https://help.uber.com/riders/article/turn-on-2-step-verification?nodeId=b8bb9152-8c91-4f49-83c4-35cf2e1dcf72', 'Uber', 'support-doc', 'primary', {
      language: 'en',
      summary: 'Activació de la verificació en dos passos amb SMS o aplicació d’autenticació.',
    }),
    s('uber-hackerone', 'Uber - Bug Bounty Program | HackerOne', 'https://hackerone.com/uber', 'Uber / HackerOne', 'other', 'primary', {
      language: 'en',
      summary: 'Programa públic de recompenses per vulnerabilitats d’Uber.',
    }),
    s('uber-transparency-report', 'Updating Uber’s Transparency Report', 'https://uberpubpolicy.medium.com/updating-ubers-transparency-report-d2062ee5d39a', 'Uber', 'transparency-report', 'primary', {
      language: 'en',
      summary: 'Publicació d’Uber sobre l’actualització del seu informe de peticions governamentals de dades.',
    }),
    s('uber-ap-breach-2018', 'Dutch DPA: fine for data breach Uber', 'https://autoriteitpersoonsgegevens.nl/en/current/dutch-dpa-fine-for-data-breach-uber', 'Autoriteit Persoonsgegevens (Països Baixos)', 'regulator', 'authority', {
      language: 'en',
      publishedAt: '2018-11-27',
      summary: 'Sanció de 600.000 euros per no notificar a temps la bretxa del 2016, que va afectar 57 milions de persones, 174.000 als Països Baixos.',
    }),
    s('uber-cnil-breach-2018', 'CNIL Fines Uber for Data Security Failure Related to 2016 Data Breach', 'https://www.hunton.com/privacy-and-information-security-law/cnil-fines-uber-for-data-security-failure-related-to-2016-data-breach', 'Hunton Andrews Kurth', 'press', 'secondary', {
      language: 'en',
      summary: 'Resum de les sancions de la CNIL (400.000 euros) i de l’ICO (385.000 lliures) per la mateixa bretxa.',
    }),
    s('uber-ap-transfers-2024', 'Dutch DPA imposes a fine of 290 million euro on Uber because of transfers of drivers’ data to the US', 'https://www.autoriteitpersoonsgegevens.nl/en/current/dutch-dpa-imposes-a-fine-of-290-million-euro-on-uber-because-of-transfers-of-drivers-data-to-the-us', 'Autoriteit Persoonsgegevens (Països Baixos)', 'regulator', 'authority', {
      language: 'en',
      publishedAt: '2024-08-26',
      summary: 'Sanció de 290 milions d’euros per transferir dades de conductors europeus als Estats Units sense mecanisme de transferència durant més de dos anys.',
    }),
    s('uber-ap-automated-2026', 'Uber fined nearly 825 million euros for automated driver blocking', 'https://www.autoriteitpersoonsgegevens.nl/en/current/uber-fined-nearly-825-million-euros-for-automated-driver-blocking', 'Autoriteit Persoonsgegevens (Països Baixos)', 'regulator', 'authority', {
      language: 'en',
      publishedAt: '2026-08-21',
      summary: 'Sanció de 824.990.000 euros per desactivar comptes de conductors amb decisions totalment automatitzades entre el 2018 i el 2022.',
    }),
    s('uber-ppcland-automated-2026', 'Dutch regulator fines Uber 825 million euros over automated driver blocking', 'https://ppc.land/dutch-regulator-fines-uber-825-million-euros-over-automated-driver-blocking/', 'PPC Land', 'press', 'secondary', {
      language: 'en',
      summary: 'Detalls de la sanció del 2026: articles 22, 13 i 14 del RGPD, recurs d’Uber i historial de sancions anteriors.',
    }),
    /* QuéFalta */
    s('quefalta-privacy-policy', 'Política de privacidad — QuéFalta', 'https://quefalta.es/privacidad/', 'Rubén Ruiz Osma', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-06-28',
      summary: 'Política breu i concreta: sense anuncis, encarregats limitats (Supabase a la UE, Apple, Google i Expo), conservació mentre existeix el compte.',
    }),
    s('quefalta-delete-account', 'Eliminar tu cuenta — QuéFalta', 'https://quefalta.es/eliminar-cuenta/', 'Rubén Ruiz Osma', 'support-doc', 'primary', {
      language: 'es',
      publishedAt: '2026-07-08',
      summary: 'Passos per eliminar el compte des de l’aplicació, amb esborrat immediat, i què es conserva.',
    }),
    s('quefalta-app-store', 'QuéFalta — App Store (Privacidad de la app)', appStore('6777720373'), 'Apple / Rubén Ruiz Osma', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: només fotos i identificador d’usuari, vinculats, per al funcionament; cap dada per rastrejar.',
    }),
    /* Too Good To Go */
    s('too-good-to-go-privacy-policy', 'Política de privacidad — Too Good To Go', 'https://www.toogoodtogo.com/es/legal/privacy', 'Too Good To Go ApS', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2024-06-01',
      summary: 'Versió 2.1 (juny del 2024): dades recollides, publicitat dirigida, decisions automatitzades contra el frau, transferències i eines de drets dins de l’aplicació.',
    }),
    s('too-good-to-go-app-store', 'Too Good To Go: Salva Comida — App Store (Privacidad de la app)', appStore('1060683933'), 'Apple / Too Good To Go', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: historial de compres i identificadors declarats per rastrejar; contacte i ús per a màrqueting propi.',
    }),
    s('too-good-to-go-trust-center', 'Too Good To Go Trust Center', 'https://trust.toogoodtogo.com/', 'Too Good To Go', 'privacy-center', 'primary', {
      language: 'en',
      summary: 'Centre de confiança amb SOC 2 Type 2, PCI DSS 4.0.1 i informes de proves de penetració disponibles a petició.',
    }),
    s('too-good-to-go-security-txt', 'security.txt — toogoodtogo.com', 'https://www.toogoodtogo.com/.well-known/security.txt', 'Too Good To Go', 'technical-doc', 'primary', {
      language: 'en',
      summary: 'Fitxer de contacte per notificar vulnerabilitats (security@toogoodtogo.com).',
    }),
  ],
  apps: [windyCom, windyWeather, myAurora, myEarthquake, wetteronline, tiempoEs, uber, uberEats, quefalta, tooGoodToGo],
  incidents: [
    {
      slug: 'uber-filtracio-2016',
      title: 'Bretxa de dades d’Uber del 2016, amagada durant un any',
      type: 'breach',
      severity: 'high',
      apps: ['uber'],
      company: 'uber',
      occurredAt: '2016-10-13',
      disclosedAt: '2017-11-21',
      description:
        'Entre l’octubre i el novembre del 2016, uns atacants van obtenir el nom, l’adreça electrònica i el telèfon de 57 milions de persones usuàries i conductores d’arreu del món. Uber no ho va fer públic fins un any després. L’autoritat neerlandesa la va sancionar amb 600.000 euros per no notificar-la a temps, la CNIL francesa amb 400.000 euros i l’ICO britànica amb 385.000 lliures per falta de mesures de seguretat.',
      affectedPeople: '57 milions de persones al món, 174.000 als Països Baixos i 2,7 milions al Regne Unit.',
      regulatory: {
        authority: 'Autoriteit Persoonsgegevens (Països Baixos)',
        fineAmountEur: 600000,
        legalBasis: 'Obligació de notificar les bretxes de seguretat de la llei neerlandesa de protecció de dades',
      },
      sources: ['uber-ap-breach-2018', 'uber-cnil-breach-2018'],
    },
    {
      slug: 'uber-transferencies-eua-2024',
      title: 'Sanció de 290 milions d’euros a Uber per transferir dades de conductors als Estats Units',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['uber'],
      company: 'uber-bv',
      occurredAt: '2024-08-26',
      disclosedAt: '2024-08-26',
      description:
        'L’autoritat neerlandesa va concloure que Uber va guardar als Estats Units, durant més de dos anys i sense cap mecanisme de transferència, dades de conductors europeus: documents d’identitat, llicències, ubicació, fotos, pagaments i, en alguns casos, dades penals i mèdiques. Afecta les persones conductores, no les passatgeres. Uber ha recorregut la sanció.',
      affectedPeople: 'Persones conductores d’Uber a Europa.',
      regulatory: {
        authority: 'Autoriteit Persoonsgegevens (Països Baixos)',
        fineAmountEur: 290000000,
        legalBasis: 'Article 44 del RGPD',
        status: 'appealed',
      },
      sources: ['uber-ap-transfers-2024'],
    },
    {
      slug: 'uber-decisions-automatitzades-2026',
      title: 'Sanció de 825 milions d’euros a Uber per desactivar automàticament comptes de conductors',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['uber'],
      company: 'uber-bv',
      occurredAt: '2026-08-21',
      disclosedAt: '2026-08-21',
      description:
        'Entre el 2018 i el 2022, el programari d’Uber desactivava temporalment o definitivament els comptes de conductors per sospites de frau o valoracions baixes sense cap revisió humana, i no els n’informava prou. És la quarta sanció de l’autoritat neerlandesa a Uber i la segona més alta de la història del RGPD. Afecta les persones conductores. Uber l’ha recorreguda.',
      affectedPeople: 'Persones conductores d’Uber a Europa; la xifra no s’ha fet pública.',
      regulatory: {
        authority: 'Autoriteit Persoonsgegevens (Països Baixos)',
        fineAmountEur: 824990000,
        legalBasis: 'Articles 22, 13 i 14 del RGPD',
        status: 'appealed',
      },
      sources: ['uber-ap-automated-2026', 'uber-ppcland-automated-2026'],
    },
    {
      slug: 'wetteronline-ubicacio-publicitat-2026',
      title: 'Procediment sancionador contra WetterOnline per l’ús publicitari de la ubicació',
      type: 'regulatory-order',
      severity: 'high',
      apps: ['wetteronline'],
      company: 'wetteronline',
      occurredAt: '2026-04-07',
      disclosedAt: '2026-04-07',
      description:
        'L’autoritat de protecció de dades de Rin del Nord-Westfàlia ha obert un procediment sancionador contra WetterOnline per haver recollit durant anys la ubicació de les persones usuàries sense un consentiment vàlid i haver-la fet servir per a publicitat. Segons netzpolitik.org, la política ha arribat a llistar més de 800 socis publicitaris, i dades de localització vinculades a l’aplicació van aparèixer en conjunts venuts per intermediaris. L’empresa va deixar de recollir la ubicació precisa per a publicitat després de la intervenció.',
      affectedPeople: 'Persones usuàries de l’aplicació; l’empresa declara més de 22 milions d’usuaris.',
      regulatory: {
        authority: 'Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen',
        status: 'ongoing',
      },
      sources: ['wetteronline-netzpolitik-2026'],
    },
  ],
  storeIds: {
    'windy-com': 'com.windytv.ios',
    'windy-weather': 'co.windyapp.Windy',
    'my-aurora-forecast': 'com.jrustonapps.My-Aurora-Forecast',
    'my-earthquake-alerts': 'com.jrustonapps.My-Earthquake-Alerts',
    wetteronline: 'de.wetteronline.WetterApp',
    'tiempo-es-wetter': 'com.wetter.iosclient',
    uber: 'com.ubercab.UberClient',
    'uber-eats': 'com.ubercab.UberEats',
    quefalta: 'com.quefalta.app',
    'too-good-to-go': 'com.moonsted.TGTG',
  },
}
