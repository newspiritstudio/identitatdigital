import { CATALAN_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 42: quatre aplicacions de servei públic català. Tres són de la Generalitat
 * (METEOCAT, l’Agència Tributària de Catalunya i App Trànsit) i una de
 * l’Ajuntament de Barcelona (Barcelona a la butxaca).
 *
 * El fil comú és la distància entre l’etiqueta de l’App Store i el text legal.
 * Les tres polítiques de la Generalitat reutilitzen frases d’una plantilla
 * comuna («tràmits i ajudes», «alertes sobre el territori») que no descriuen
 * l’aplicació, i dues diuen que no recullen cap dada mentre l’etiqueta en
 * declara de vinculades a la identitat. App Trànsit encara es regeix per unes
 * condicions del 2017 que citen la LOPD del 1999.
 */

const { f, unknown, na, row } = evidenceAt(CATALAN_DATE)
const s = sourceAt(CATALAN_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/* ═══════════════════════ METEOCAT ═══════════════════════ */
const meteocat: AppSeed = {
  slug: 'meteocat',
  name: 'METEOCAT',
  company: 'servei-meteorologic-de-catalunya',
  categories: ['meteorologia'],
  tagline: 'Analítica de Firebase amb l’identificador de publicitat en una app pública del temps, i un enllaç de privadesa a l’App Store que no porta enlloc',
  summary:
    'L’aplicació del Servei Meteorològic de Catalunya dona la predicció municipal, el radar i els avisos de situació meteorològica de perill, sense compte ni publicitat. L’etiqueta de l’App Store només declara ubicació, identificador de dispositiu i diagnòstics no vinculats a la identitat. La política, però, diu que l’analítica es fa amb Firebase Analytics «mitjançant l’IDFA», l’identificador de publicitat d’iOS, i que la ubicació és «sempre aproximada, no precisa», mentre l’etiqueta declara la ubicació exacta. L’enllaç de privadesa que l’App Store mostra redirigeix a una adreça interna del servidor i no s’obre.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'public-service',
  jurisdiction: 'Catalunya; servei públic del Servei Meteorològic de Catalunya',
  links: {
    website: 'https://www.meteo.cat/wpweb/serveis/app-meteocat/',
    privacyPolicy: 'https://www.meteo.cat/wpweb/serveis/app-meteocat/politica-de-privacitat-de-lapp/',
    terms: 'https://www.meteo.cat/wpweb/serveis/app-meteocat/avis-legal-de-lapp/',
    appStore: appStore('6477286914'),
  },
  accountRequired: f('no', 'official', ['meteocat-app-pagina', 'meteocat-privacitat-app'], 'No hi ha registre: la política només tracta dades personals de qui activa les notificacions, identificades per l’identificador del dispositiu.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  publicService: {
    isPublicService: true,
    administrationLevel: 'regional',
    legalBasis: f(
      'partial',
      'official',
      ['meteocat-privacidad-app-es'],
      'Només la versió castellana de la política dona una base jurídica, i només per a les notificacions: el consentiment exprés de qui les activa. No en dona cap per a l’analítica amb Firebase ni per a l’emmagatzematge de la darrera ubicació. La versió catalana ni tan sols en cita cap.',
      { norm: 'Reglament (UE) 2016/679 i Llei orgànica 3/2018, citats de manera genèrica; consentiment per a les notificacions' },
    ),
    processingRegistry: f(
      'partial',
      'official',
      ['meteocat-registre-activitats', 'meteocat-privacitat-app'],
      'L’SMC publica un registre d’activitats de tractament en PDF, del novembre del 2021, amb disset activitats (accessos, videovigilància, recursos humans, xarxes d’observadors…). Cap no correspon a l’aplicació ni a les notificacions. L’enllaç «informació detallada del tractament» de la política apunta a un servidor de desenvolupament (devbloc.meteocat.gencat.cat) que no respon.',
      { url: 'https://static-m.meteo.cat/wordpressweb/wp-content/uploads/2021/11/11115244/Registre-dactivitats-de-tractament-METEOCAT-A3.pdf' },
    ),
    dpia: unknown('No hem trobat publicada cap avaluació d’impacte relativa a la protecció de dades de l’aplicació.'),
    ensConformity: unknown('No hem trobat cap declaració ni certificació de conformitat amb l’Esquema Nacional de Seguretat (Reial decret 311/2022) de l’SMC ni del servei.'),
    dpo: f(
      'yes',
      'official',
      ['meteocat-politica-privacitat', 'meteocat-privacidad-app-es', 'meteocat-registre-activitats'],
      'Hi ha delegat de protecció de dades, però els documents no coincideixen en l’adreça: la política general del web dona dpd.meteocat@gencat.cat, i la política castellana de l’app i el registre d’activitats donen protecciodades.meteocat@gencat.cat. El registre identifica el delegat com l’empresa PrivaDatum.',
      { contact: 'dpd.meteocat@gencat.cat' },
    ),
    offlineAlternative: f(
      'yes',
      'official',
      ['meteocat-app-pagina', 'meteocat-avis-legal-app'],
      'Tota la informació de l’aplicació —predicció, radar i avisos de perill— es publica al web meteo.cat, i l’avís legal mateix recomana informar-se també pels altres canals perquè les notificacions poden fallar.',
    ),
    accessibilityStatement: f(
      'partial',
      'official',
      ['meteocat-accessibilitat-ios'],
      'La declaració per a iOS diu «parcialment conforme» amb el Reial decret 1112/2018 i el Decret 216/2023 i avaluada amb la norma UNE-EN 301549:2022. Es va preparar el 21 de novembre del 2025 a partir d’una auditoria externa de TOTHOMweb.',
      { url: 'https://www.meteo.cat/wpweb/serveis/app-meteocat/declaracio-daccessibilitat-de-lapp-ios/' },
    ),
    mandatoryRetention: f(
      'no',
      'official',
      ['meteocat-privacitat-app'],
      'No hi ha cap expedient: la política fixa ella mateixa el termini (mentre l’app estigui instal·lada i després no més d’un any) i no invoca cap norma que obligui a conservar les dades.',
    ),
  },
  dataSummary:
    'Una app del temps no necessita saber qui ets, i aquesta no ho demana. El que sí recull és on ets —fins i tot en segon pla, per enviar els avisos de la zona— i un identificador del dispositiu. La política diu que la ubicació és aproximada i que l’analítica passa per Firebase amb l’identificador de publicitat, dues afirmacions que l’etiqueta de l’App Store no reflecteix.',
  dataCollection: [
    row('ubicacio-aproximada', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['meteocat-app-store', 'meteocat-privacitat-app'], note: 'Només amb permís. L’app funciona en segon pla per recollir els canvis d’ubicació i l’SMC en desa la darrera.' }),
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['meteocat-app-store', 'meteocat-privacitat-app'], note: 'L’etiqueta de l’App Store declara la ubicació exacta; la política diu que la ubicació «sempre serà aproximada, no precisa».' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['meteocat-app-store', 'meteocat-privacitat-app'], note: 'L’identificador de notificacions, lligat a les comarques, meteors i estacions que s’han triat per rebre avisos.' }),
    row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['meteocat-privacitat-app', 'meteocat-app-store'], note: 'La política diu textualment que l’analítica és «Firebase Analytics mitjançant el IDFA (Identificador de publicitat)». L’etiqueta no declara cap dada utilitzada per rastrejar.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['meteocat-privacitat-app'], note: 'Interacció amb l’aplicació recollida per Firebase Analytics, de Google. L’etiqueta de l’App Store no declara dades d’ús.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['meteocat-app-store'], note: 'Dades d’errors, no vinculades a la identitat.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['meteocat-app-store'], 'L’etiqueta de l’App Store no té secció de dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['meteocat-privacitat-app'], 'La política declara que Firebase Analytics funciona amb l’IDFA. En iOS, l’app només pot llegir-lo si demana permís de rastreig; no hem comprovat si ho fa.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['meteocat-privacitat-app'], 'Firebase Analytics, de Google, per a l’estadística d’ús.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['meteocat-privacitat-app', 'meteocat-app-store'], 'No hi ha publicitat. La política diu que les dades analítiques no s’usaran per a cap altre objectiu.'),
    profiling: f('no', 'official', ['meteocat-privacitat-app'], 'La política no preveu cap perfil; les preferències només serveixen per enviar els avisos triats.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['meteocat-privacitat-app', 'meteocat-privacidad-app-es'], 'La política diu que la ubicació, les preferències i l’identificador de notificacions no es cedeixen a tercers, però l’analítica la fa Google amb Firebase.'),
    intraGroupSharing: unknown('La versió catalana diu que la informació analítica «proporciona informació rellevant a la Generalitat», sense concretar a quin òrgan ni amb quina finalitat.'),
    dataBrokerSales: f('no', 'official', ['meteocat-privacidad-app-es'], 'La política diu que el responsable no preveu comunicar dades a tercers.'),
    internationalTransfers: unknown('La política no diu res de transferències internacionals; l’ús de Firebase Analytics en podria implicar cap als Estats Units.'),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre les dades de l’aplicació.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['meteocat-privacitat-app'], 'Les dades es conserven mentre l’app estigui instal·lada i després no més d’un any.'),
    dataAfterDeletion: f('partial', 'official', ['meteocat-privacitat-app'], 'Desinstal·lar l’app obre un termini màxim d’un any; la política no diu res de les dades que ja té Firebase.'),
    periods: [
      { dataType: 'ubicacio-aproximada', period: 'Mentre l’app estigui instal·lada i, després, no més d’un any', sources: ['meteocat-privacitat-app'] },
    ],
  },
  accountDeletion: {
    possible: na('No hi ha compte. El que es pot fer és desinstal·lar l’app o demanar la supressió de les dades associades al dispositiu.'),
    selfService: f('partial', 'official', ['meteocat-app-pagina', 'meteocat-privacitat-app'], 'Les notificacions es poden editar o eliminar des de l’apartat «Configura» i la ubicació es pot desactivar; la supressió de les dades ja desades s’ha de demanar per correu.'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'A l’apartat «Configura», elimina les notificacions d’avisos i d’estacions que tinguis actives.',
      'Retira el permís d’ubicació a Configuració > Privacitat i seguretat > Localització.',
      'Desinstal·la l’aplicació: segons la política, les dades es conserven com a màxim un any més.',
      'Per demanar-ne la supressió abans, escriu a protecciodades.meteocat@gencat.cat amb una còpia del DNI o signant el correu amb certificat.',
    ],
    dataRetained: 'Fins a un any després de desinstal·lar l’aplicació.',
    sources: ['meteocat-app-pagina', 'meteocat-privacitat-app', 'meteocat-privacidad-app-es'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['meteocat-privacidad-app-es', 'meteocat-politica-privacitat'], 'La portabilitat es reconeix, però només a petició per correu.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['meteocat-privacidad-app-es', 'meteocat-politica-privacitat'], 'Els drets s’exerceixen per escrit a l’adreça de protecció de dades, amb còpia del DNI o signatura electrònica reconeguda, i es pot reclamar a l’APDCAT. L’enllaç «com exercir aquests drets» de la versió catalana apunta al servidor de desenvolupament i no s’obre.', {
      url: 'mailto:protecciodades.meteocat@gencat.cat',
    }),
  },
  controls: {
    adPersonalizationOptOut: na('El servei no mostra publicitat.'),
    telemetryOptOut: unknown('La política no ofereix cap manera de desactivar Firebase Analytics dins de l’aplicació.'),
    granularControls: f('partial', 'official', ['meteocat-app-pagina'], 'Cada notificació es configura per comarca, meteor, nivell de perill o estació, i es pot editar o eliminar. No hi ha control sobre l’analítica.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem analitzat la interfície de l’aplicació.'),
  },
  security: {
    e2ee: na('Servei d’informació meteorològica; no hi ha comunicació privada entre persones.'),
    transportEncryption: unknown('La política no diu res sobre el xifratge de les comunicacions.'),
    atRestEncryption: unknown('La política no diu res sobre el xifratge en repòs.'),
    mfa: na('No hi ha compte que calgui protegir.'),
    independentAudits: unknown('L’única auditoria publicada és la d’accessibilitat; no n’hem trobat cap de seguretat.'),
    bugBounty: na('Administració pública: el bloc de servei públic substitueix aquest indicador per la conformitat amb l’ENS.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt a meteo.cat.'),
  },
  alternatives: [
    {
      app: 'aemet',
      comparability: 'equivalent',
      rationale: 'L’agència estatal també publica radar, predicció municipal i avisos per a Catalunya, i la seva etiqueta de l’App Store declara que no recull cap dada.',
      tradeOffs: 'No té la xarxa d’estacions automàtiques de l’SMC ni els avisos per comarca amb llindars propis.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: CATALAN_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política és una plantilla de la Generalitat mal adaptada: parla de preferències «sobre tràmits i ajudes» en una app del temps. L’enllaç de privadesa que declara la fitxa de l’App Store (meteo.cat/wpweb/politica-de-privacidad-de-la-app/) respon amb una redirecció a ajp://127.0.0.1:8009, una adreça interna del servidor, i no s’obre: ho hem comprovat el 25 de setembre del 2026. No hem trobat cap incident ni cap resolució de l’APDCAT sobre l’aplicació.',
    openQuestions: [
      'L’app demana el permís de rastreig d’iOS per llegir l’IDFA, tal com dona a entendre la política? Si no, la frase és incorrecta; si sí, l’etiqueta ho hauria de declarar.',
      'Quina és l’adreça vigent del delegat de protecció de dades: dpd.meteocat@gencat.cat o protecciodades.meteocat@gencat.cat?',
      'Per què el registre d’activitats del 2021 no inclou l’aplicació, publicada el 2024?',
    ],
  },
}

/* ═══════════════════════ Agència Tributària de Catalunya ═══════════════════════ */
const agenciaTributaria: AppSeed = {
  slug: 'agencia-tributaria-de-catalunya',
  name: 'Agència Tributària de Catalunya',
  company: 'agencia-tributaria-de-catalunya',
  categories: ['administracio-publica'],
  tagline: 'La política diu que l’app «no recull cap dada» i dues línies després enumera nom, adreça, telèfon, ubicació i targeta bancària',
  summary:
    'L’app de l’ATC permet pagar tributs i deutes amb targeta o Bizum, demanar cita i, amb idCAT Mòbil, consultar els deutes en via executiva, el padró de l’impost sobre les emissions de CO₂ dels vehicles o l’adreça de notificacions. La part jurídica és sòlida perquè es recolza en el registre d’activitats de l’ATC, que esmenta l’app expressament i cita la Llei general tributària i el Codi tributari de Catalunya. La política de l’app, en canvi, es contradiu: diu que no recull cap dada i alhora que emmagatzema nom, correu, adreça, telèfon, ubicació i dades bancàries, mentre l’etiqueta de l’App Store declara totes aquestes dades vinculades a la identitat.',
  platforms: ['ios', 'android'],
  businessModel: 'public-service',
  jurisdiction: 'Catalunya; servei públic de l’Agència Tributària de Catalunya',
  links: {
    website: 'https://atc.gencat.cat/ca/atencio/app/',
    privacyPolicy: 'https://atc.gencat.cat/ca/atencio/app/app-privacitat/',
    rightsRequest: 'https://atc.gencat.cat/ca/agencia/proteccio-dades/',
    appStore: appStore('6452755072'),
  },
  accountRequired: f('partial', 'official', ['atc-app-store', 'atc-app-pagina', 'atc-app-privacitat'], 'Sense identificar-se es poden pagar tributs amb la carta de pagament, demanar cita i consultar oficines. Per consultar dades i deutes o canviar l’adreça cal identificar-se, i ara per ara l’únic mètode admès és l’idCAT Mòbil.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  publicService: {
    isPublicService: true,
    administrationLevel: 'regional',
    legalBasis: f(
      'yes',
      'official',
      ['atc-rat-finalitats-tributaries'],
      'El registre de l’activitat amb finalitats tributàries inclou expressament l’accés «mitjançant l’app de l’ATC» a les dades tributàries i als expedients dels últims cinc anys, i la fonamenta en el compliment d’obligacions legals: la Llei 58/2003 general tributària, la Llei 17/2017 del Codi tributari de Catalunya i les lleis de creació de cada tribut. La política de l’app, per si sola, no cita cap base jurídica.',
      { norm: 'Llei 58/2003, general tributària; Llei 17/2017, del Codi tributari de Catalunya' },
    ),
    processingRegistry: f(
      'yes',
      'official',
      ['atc-rat-finalitats-tributaries', 'atc-proteccio-dades'],
      'L’ATC publica cada activitat en una pàgina pròpia amb responsable, delegat, finalitats, base jurídica, categories de dades, fonts, encarregats (entre ells el CTTI), actuacions automatitzades i terminis. L’app hi apareix citada.',
      { url: 'https://atc.gencat.cat/ca/agencia/proteccio-dades/finalitats-tributaries/' },
    ),
    dpia: unknown('No hem trobat publicada cap avaluació d’impacte relativa a la protecció de dades de l’app ni de l’activitat tributària.'),
    ensConformity: unknown(
      'No hem trobat cap declaració de conformitat amb l’Esquema Nacional de Seguretat. El registre d’activitats diu que les mesures es determinen amb el Marc de Ciberseguretat i Protecció de Dades del CESICAT, que no és l’ENS.',
    ),
    dpo: f('yes', 'official', ['atc-proteccio-dades', 'atc-rat-finalitats-tributaries'], 'L’ATC té delegat de protecció de dades amb adreça pròpia, on es poden presentar també les sol·licituds d’exercici de drets.', { contact: 'dpd@atc.cat' }),
    offlineAlternative: f(
      'yes',
      'official',
      ['atc-app-privacitat', 'atc-app-store', 'atc-proteccio-dades'],
      'Els tràmits de l’app funcionen amb la lògica de la seu electrònica de l’ATC, on es poden fer igualment, i es pot demanar cita presencial a les oficines.',
    ),
    accessibilityStatement: f(
      'partial',
      'official',
      ['atc-app-accessibilitat-ios'],
      'La declaració per a iOS, des de la versió 4.0.1, diu «parcialment conforme» amb el Reial decret 1112/2018 i enumera els incompliments. És una autoavaluació feta per Everycode, S.L. el 12 de desembre del 2025 i revisada el 15 de desembre del 2025.',
      { url: 'https://atc.gencat.cat/ca/atencio/app/declaracio-accessibilitat-ios/' },
    ),
    mandatoryRetention: f(
      'yes',
      'official',
      ['atc-rat-finalitats-tributaries', 'atc-proteccio-dades'],
      'Les dades tributàries tenen terminis fixats per la normativa d’avaluació documental: cinc anys per a l’impost de transmissions patrimonials, sis anys i mig per als impostos propis, cent anys per a successions i donacions, i temps indefinit per al joc i per a les dades en suport informàtic. L’ATC diu expressament que, d’acord amb la normativa tributària, no pot autoritzar els drets de supressió, oposició ni limitació sobre aquestes dades.',
    ),
  },
  dataSummary:
    'Les dades que passen per l’app són les de la teva relació amb Hisenda: deutes, impostos de vehicles, adreça de notificacions i mitjans de pagament. No les genera l’app sinó l’Administració, i no es poden esborrar: la llei obliga a conservar-les i a cedir-les a altres administracions tributàries i als tribunals quan ho demanin.',
  dataCollection: [
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['atc-app-store', 'atc-app-privacitat', 'atc-rat-finalitats-tributaries'], note: 'Només quan hi ha identificació digital. Les cessions a altres administracions tributàries, jutjats i tribunals són les previstes per llei.' }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['atc-rat-finalitats-tributaries', 'atc-app-privacitat'], note: 'El NIF que identifica l’idCAT Mòbil i la clau de totes les dades tributàries.' }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['atc-app-store', 'atc-app-privacitat'], note: 'L’adreça a efectes de notificacions, que es pot modificar des de l’app.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['atc-app-store', 'atc-app-privacitat'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['atc-app-store', 'atc-app-privacitat'] }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['atc-app-store', 'atc-app-privacitat', 'atc-rat-finalitats-tributaries'], note: 'Targeta, Bizum o càrrec en compte. La política diu que les dades de la targeta o del compte s’esborren en tancar l’app o la sessió; el registre anota el pagador, el justificant i l’NRC de la plataforma de pagaments.' }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['atc-app-store', 'atc-app-privacitat'], note: 'L’etiqueta la declara vinculada a la identitat. La política diu que només es recull amb permís i que serveix per a «l’enviament d’alertes sobre el territori», una funció que l’app no descriu enlloc; probablement serveix per al cercador d’oficines.' }),
    row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['atc-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['atc-app-store', 'atc-app-privacitat'], note: 'L’etiqueta declara la interacció amb el producte vinculada a la identitat; la política diu que l’analítica es fa amb identificadors anònims.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['atc-app-store', 'atc-app-privacitat'] }),
    row('testimoni-d-autenticacio', 'optional', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['atc-app-privacitat'], note: 'Identificador de notificacions push, si s’activen.' }),
    row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['atc-app-store'], note: 'L’etiqueta no declara cap dada utilitzada per rastrejar.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['atc-app-store'], 'L’etiqueta de l’App Store no té secció de dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['atc-app-store', 'atc-app-privacitat'], 'Ni l’etiqueta ni la política esmenten cap identificador publicitari; la política diu que només hi ha galetes tècniques.'),
    thirdPartyTrackersPresent: unknown('La política parla d’analítica i detecció d’errors amb identificadors anònims, però no diu amb quina eina. No ho hem pogut comprovar.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['atc-app-privacitat'], 'No hi ha publicitat i la política diu que les dades no s’utilitzen per a cap altra finalitat.'),
    profiling: f('partial', 'official', ['atc-rat-finalitats-tributaries', 'atc-proteccio-dades'], 'L’ATC fa actuacions administratives automatitzades aprovades per resolució (VEH/9/2020 i ECO/887/2024), que el registre enumera. En l’àmbit tributari no es pot exercir el dret a no ser objecte de decisions automatitzades.'),
    aiTraining: unknown('Ni la política ni el registre diuen res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['atc-rat-finalitats-tributaries', 'atc-proteccio-dades'], 'Cessions previstes per llei a l’Agència Estatal d’Administració Tributària, a la xarxa Tributs de Catalunya, a jutjats i tribunals i a la GAIP. Els encarregats (CTTI, servei 012 i ajuntaments en conveni) estan enumerats.'),
    intraGroupSharing: f('yes', 'official', ['atc-rat-finalitats-tributaries'], 'Xarxa Tributs de Catalunya i serveis de la Generalitat que actuen com a encarregats (CTTI, 012), segons el registre.'),
    dataBrokerSales: f('no', 'official', ['atc-proteccio-dades'], 'Les dades tributàries tenen caràcter reservat i no es poden cedir fora dels casos previstos per llei.'),
    internationalTransfers: f('no', 'official', ['atc-rat-finalitats-tributaries'], 'El registre diu que no hi ha prevista cap transferència internacional.', { mechanism: 'none' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de peticions d’accés a les dades.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['atc-rat-finalitats-tributaries', 'atc-app-privacitat'], 'Terminis per tipus d’expedient al registre i esborrat de les dades locals de l’app en tancar la sessió o desinstal·lar-la.'),
    dataAfterDeletion: f('yes', 'official', ['atc-rat-finalitats-tributaries', 'atc-app-privacitat'], 'El que desa el dispositiu s’esborra en tancar la sessió; les dades tributàries es conserven als sistemes de l’ATC segons els terminis legals, en molts casos indefinidament.'),
    periods: [
      { dataType: 'dades-de-pagament', period: 'A l’app, fins que es tanca l’app o la sessió o es desinstal·la', sources: ['atc-app-privacitat'] },
      { dataType: 'document-identificatiu-oficial', period: 'Dades tributàries en suport informàtic: temps indefinit', sources: ['atc-rat-finalitats-tributaries'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['atc-app-privacitat', 'atc-proteccio-dades'], 'No hi ha un compte propi de l’app: l’accés és amb idCAT Mòbil. Les dades tributàries no es poden suprimir.'),
    selfService: f('partial', 'official', ['atc-app-privacitat'], 'Tancar la sessió o desinstal·lar l’app n’esborra les dades locals; no hi ha res més a esborrar des de l’app.'),
    difficulty: 'medium',
    requiresSupportContact: false,
    steps: [
      'Tanca la sessió o desinstal·la l’app: segons la política, s’esborren el nom, el correu, l’adreça, el telèfon, la ubicació i les dades bancàries que s’hi havien desat.',
      'Si havies activat les notificacions per canal electrònic, dona-te’n de baixa a la seu electrònica de l’ATC.',
      'Per a l’accés o la rectificació de dades tributàries, fes servir el formulari de l’ATC o escriu al delegat de protecció de dades, dpd@atc.cat.',
    ],
    obstacles: 'La supressió de les dades tributàries no és possible perquè la Llei general tributària n’imposa la conservació: és una obligació legal, no una decisió de l’app.',
    dataRetained: 'Totes les dades tributàries, amb terminis que van dels cinc anys a la conservació indefinida.',
    sources: ['atc-app-privacitat', 'atc-proteccio-dades', 'atc-rat-finalitats-tributaries'],
  },
  userRights: {
    dataExport: f('no', 'official', ['atc-proteccio-dades'], 'L’ATC recorda que la portabilitat no s’aplica als tractaments fets en exercici de poders públics (article 20.3 del RGPD).'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['atc-proteccio-dades', 'atc-rat-finalitats-tributaries'], 'Formulari específic presentable a qualsevol oficina, per correu postal o per correu electrònic al delegat, i accés i rectificació directes des de l’app o «El meu espai» de la seu. Es pot reclamar a l’APDCAT.', {
      url: 'mailto:dpd@atc.cat',
    }),
  },
  controls: {
    adPersonalizationOptOut: na('El servei no mostra publicitat.'),
    telemetryOptOut: unknown('La política no descriu cap manera de desactivar l’analítica.'),
    granularControls: f('partial', 'official', ['atc-app-privacitat', 'atc-app-store'], 'La ubicació i la càmera (per escanejar el codi de barres) es demanen amb permís del sistema, i les notificacions són opcionals. No hi ha altres controls.'),
    defaultPosture: 'protective',
    darkPatterns: unknown('No hem analitzat la interfície de l’aplicació.'),
  },
  security: {
    e2ee: na('No és un servei de comunicació entre particulars.'),
    transportEncryption: f('partial', 'official', ['atc-app-privacitat'], 'La política diu que s’han adoptat mesures per garantir la seguretat i la confidencialitat de les comunicacions, sense concretar-ne cap.'),
    atRestEncryption: unknown('La política no diu res sobre el xifratge en repòs.'),
    mfa: f('yes', 'official', ['atc-app-privacitat', 'atc-identificacio-digital'], 'L’accés identificat és amb idCAT Mòbil, que envia una contrasenya d’un sol ús al telèfon mòbil registrat.', { methods: ['sms'] }),
    independentAudits: unknown('No hem trobat cap auditoria de seguretat publicada.'),
    bugBounty: na('Administració pública: el bloc de servei públic substitueix aquest indicador per la conformitat amb l’ENS.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt a atc.gencat.cat.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: CATALAN_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El contrast entre documents és el que defineix la fitxa. El registre d’activitats de l’ATC és dels més complets del bloc català: esmenta l’app, enumera encarregats, fonts, cessions i actuacions automatitzades amb la seva lògica. La política de l’app, en canvi, afirma que «no recull cap dada de l’usuari» i dues frases després que n’emmagatzema una llista llarga; i copia de la plantilla de la Generalitat la frase sobre «alertes sobre el territori», que no correspon a cap funció de l’ATC. La fitxa de l’App Store enllaça la política per http i en castellà. No hem trobat cap incident ni resolució de l’APDCAT sobre l’app; les notícies sobre una suposada filtració de dades fiscals del 2026 es referien a l’Agència Tributària estatal, que ho va desmentir.',
    openQuestions: [
      'Per a què fa servir exactament l’app la ubicació, si la política parla d’alertes que no existeixen?',
      'Quina eina d’analítica fa servir l’app, i per què l’etiqueta declara les dades d’ús vinculades a la identitat si la política diu que són anònimes?',
      'Quan s’afegiran altres mètodes d’identificació a més de l’idCAT Mòbil, tal com anuncia la fitxa de l’App Store?',
    ],
  },
}

/* ═══════════════════════ App Trànsit ═══════════════════════ */
const appTransit: AppSeed = {
  slug: 'app-transit',
  name: 'App Trànsit',
  company: 'servei-catala-de-transit',
  categories: ['mobilitat-i-transport', 'administracio-publica'],
  tagline: 'Pagar multes amb un codi QR i unes condicions del 2017 que encara citen la LOPD del 1999 i diuen que el mapa no recull cap dada',
  summary:
    'App Trànsit mostra el mapa continu del trànsit, les càmeres i les restriccions de mercaderies, i permet consultar expedients sancionadors, identificar el conductor, presentar al·legacions i pagar multes amb targeta llegint el codi QR de la notificació. La fitxa de l’App Store no enllaça cap política de privadesa. L’únic text legal és unes condicions d’ús actualitzades el 28 de febrer del 2017 que invoquen la Llei orgànica 15/1999 i el seu reglament, derogats des del 2018, i que asseguren que el mapa «no suposa la recollida de cap dada», mentre l’etiqueta de l’App Store declara ubicació, dades d’ús i diagnòstics.',
  platforms: ['ios', 'android'],
  businessModel: 'public-service',
  jurisdiction: 'Catalunya; servei públic del Servei Català de Trànsit',
  links: {
    website: 'https://transit.gencat.cat/',
    terms: 'https://transit.gencat.cat/ca/el_servei/condicions_d_us/app_transit/catala/',
    appStore: appStore('1137525216'),
  },
  accountRequired: f('no', 'official', ['app-transit-condicions-us'], 'No hi ha compte ni contrasenya: el mapa és obert i els tràmits sancionadors s’obren llegint el codi QR de la notificació de l’expedient.'),
  openSource: unknown('No hem trobat publicat el codi. Les condicions diuen que l’ha desenvolupat el CTTI i que és propietat de l’SCT.'),
  publicService: {
    isPublicService: true,
    administrationLevel: 'regional',
    legalBasis: f(
      'partial',
      'official',
      ['app-transit-condicions-us', 'sct-tractament-expedients-sancionadors'],
      'Les condicions de l’app citen la Llei orgànica 15/1999 i el Reial decret 1720/2007, derogats per l’entrada en aplicació del RGPD i per la Llei orgànica 3/2018. La fitxa del tractament «Expedients sancionadors» de l’SCT sí que està al dia: article 6.1.c) del RGPD, Llei 14/1997 de creació de l’SCT i text refós de la Llei de trànsit.',
      { norm: 'RGPD, article 6.1.c); Llei 14/1997; Reial decret legislatiu 6/2015' },
    ),
    processingRegistry: f(
      'partial',
      'official',
      ['sct-tractament-expedients-sancionadors'],
      'L’SCT publica un registre d’activitats i una fitxa per tractament. La dels expedients sancionadors, actualitzada el 16 de maig del 2023, cobreix els tràmits que es fan des de l’app, però cap fitxa no esmenta l’aplicació ni les dades d’ús i d’ubicació que declara l’etiqueta.',
      { url: 'https://transit.gencat.cat/ca/el_servei/proteccio_dades/informacio-detallada-dels-tractaments/expedients-sancionadors-transit/' },
    ),
    dpia: unknown('No hem trobat publicada cap avaluació d’impacte relativa a la protecció de dades de l’app.'),
    ensConformity: unknown('No hem trobat cap declaració de conformitat amb l’Esquema Nacional de Seguretat. Les condicions de l’app remeten encara a les mesures del Reial decret 1720/2007, derogat.'),
    dpo: f('yes', 'official', ['sct-tractament-expedients-sancionadors'], 'La fitxa del tractament dona el delegat de protecció de dades del Departament d’Interior. Les condicions de l’app no l’esmenten.', { contact: 'dpd.interior@gencat.cat' }),
    offlineAlternative: f(
      'yes',
      'official',
      ['app-transit-pagament-sancions'],
      'Les multes es poden pagar al web amb o sense certificat digital, a les oficines de CaixaBank, a les oficines de l’SCT amb cita prèvia o per telèfon al 012. L’app és un canal més, no l’únic.',
    ),
    accessibilityStatement: f(
      'partial',
      'official',
      ['app-transit-accessibilitat'],
      'Declaració «parcialment conforme» amb el Reial decret 1112/2018, feta el 23 de juny del 2021 a partir d’una auditoria de T-Systems i revisada per última vegada el 29 de març del 2022. S’aplica a la versió 1.2.0 per a iOS; l’App Store ja és a la 1.3.6.',
      { url: 'https://transit.gencat.cat/ca/menu_ajuda/accessibilitat/accessibilitat-app-transit/' },
    ),
    mandatoryRetention: f(
      'yes',
      'official',
      ['sct-tractament-expedients-sancionadors'],
      'Les dades dels expedients sancionadors es conserven d’un a cinc anys segons l’Ordre CMC/300/2008 (annex 2, codi 29), una taula d’avaluació documental que no depèn de la voluntat de la persona.',
    ),
  },
  dataSummary:
    'Consultar el trànsit no hauria de dir res de tu, i les condicions ho prometen. Però l’etiqueta declara la ubicació exacta per a analítica. On sí que hi ha dades delicades és a la part sancionadora: infraccions, matrícula, document d’identitat i targeta bancària, que es comuniquen als òrgans que executen la sanció.',
  dataCollection: [
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['app-transit-app-store', 'app-transit-condicions-us'], note: 'L’etiqueta la declara per a analítica i per a la funcionalitat de l’app. Les condicions diuen que el mapa no recull cap dada personal ni cap dada sobre el dispositiu.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['app-transit-app-store'], note: 'Declarades a l’etiqueta; les condicions no en parlen.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['app-transit-app-store'], note: 'Errors, rendiment i altres dades de diagnòstic.' }),
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['app-transit-condicions-us', 'app-transit-app-store', 'sct-tractament-expedients-sancionadors'], note: 'Només als tràmits sancionadors.' }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['app-transit-condicions-us', 'sct-tractament-expedients-sancionadors'], note: 'NIF, NIE o passaport, amb la matrícula i les infraccions comeses. Les dades de conductors i vehicles arriben també del registre de la DGT.' }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['app-transit-condicions-us', 'app-transit-app-store'] }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['app-transit-condicions-us', 'app-transit-app-store'], note: 'Obligatòria per rebre la confirmació dels tràmits.' }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['app-transit-condicions-us', 'app-transit-app-store'] }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['app-transit-condicions-us', 'app-transit-app-store'], note: 'El número de la targeta, només per pagar la sanció.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['app-transit-app-store'], note: 'L’etiqueta declara fotos i altre contingut de l’usuari; les condicions parlen dels escrits que es presenten en les al·legacions.' }),
    row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['app-transit-app-store'], note: 'L’etiqueta no declara cap dada utilitzada per rastrejar.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['app-transit-app-store'], 'L’etiqueta de l’App Store no té secció de dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['app-transit-app-store'], 'L’etiqueta no declara cap identificador publicitari i l’app no té publicitat.'),
    thirdPartyTrackersPresent: unknown('L’etiqueta declara analítica, però cap document diu amb quina eina es fa.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['app-transit-condicions-us'], 'Les condicions diuen que l’app és gratuïta i no té cap objectiu comercial.'),
    profiling: f('no', 'official', ['sct-tractament-expedients-sancionadors'], 'La finalitat del tractament és gestionar els expedients sancionadors; no se’n descriu cap altra.'),
    aiTraining: unknown('Cap document no en diu res.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['sct-tractament-expedients-sancionadors'], 'Les dades sancionadores es comuniquen als òrgans competents en trànsit, a l’òrgan que executa la sanció per via de constrenyiment i als jutjats i tribunals que ho demanin.'),
    intraGroupSharing: f('yes', 'official', ['sct-tractament-expedients-sancionadors', 'apdcat-ps-41-2020'], 'Els deutes de les sancions no pagades es traspassen a l’Agència Tributària de Catalunya per cobrar-los en via executiva.'),
    dataBrokerSales: f('no', 'official', ['app-transit-condicions-us'], 'Les condicions diuen que les dades no es cediran a tercers sense consentiment, fora dels casos legals.'),
    internationalTransfers: unknown('Ni les condicions ni la fitxa del tractament parlen de transferències internacionals.'),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe sobre les dades de l’aplicació.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['sct-tractament-expedients-sancionadors'], 'D’un a cinc anys per als expedients sancionadors, segons la taula d’avaluació documental. Les condicions de l’app no en fixen cap per a les dades d’ús i d’ubicació.'),
    dataAfterDeletion: f('partial', 'official', ['app-transit-condicions-us'], 'Les condicions diuen que al mòbil només queden el visor, la configuració i els recursos gràfics, i que la documentació presentada queda als sistemes de l’SCT.'),
    periods: [
      { dataType: 'document-identificatiu-oficial', period: 'D’un a cinc anys (Ordre CMC/300/2008, annex 2, codi 29)', sources: ['sct-tractament-expedients-sancionadors'] },
    ],
  },
  accountDeletion: {
    possible: na('No hi ha compte que es pugui esborrar: l’accés als expedients es fa amb el codi QR de cada notificació.'),
    selfService: f('partial', 'official', ['app-transit-condicions-us'], 'Desinstal·lar l’app n’elimina la configuració local; les dades dels expedients es conserven als sistemes de l’SCT.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Desinstal·la l’aplicació: segons les condicions, al mòbil només hi queden el visor i la configuració.',
      'Per exercir drets sobre les dades d’un expedient, envia una sol·licitud en paper al Servei Català de Trànsit (Diputació, 355, 08009 Barcelona) o per la petició genèrica de tràmits gencat amb certificat o idCAT Mòbil.',
      'Per a qualsevol dubte, escriu al delegat de protecció de dades del Departament d’Interior, dpd.interior@gencat.cat.',
    ],
    obstacles: 'Les condicions de l’app parlen encara dels drets «ARCO» de la LOPD del 1999 i només donen una adreça postal.',
    dataRetained: 'Les dades dels expedients sancionadors, d’un a cinc anys.',
    sources: ['app-transit-condicions-us', 'sct-tractament-expedients-sancionadors'],
  },
  userRights: {
    dataExport: unknown('Ni les condicions ni la fitxa del tractament esmenten la portabilitat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['sct-tractament-expedients-sancionadors', 'app-transit-condicions-us'], 'La fitxa del tractament explica com exercir els drets, en paper o electrònicament, i remet a l’APDCAT. Les condicions de l’app, en canvi, només enumeren accés, rectificació, cancel·lació i oposició i donen una adreça postal.', {
      url: 'https://transit.gencat.cat/ca/el_servei/proteccio_dades/informacio-detallada-dels-tractaments/expedients-sancionadors-transit/',
    }),
  },
  controls: {
    adPersonalizationOptOut: na('El servei no mostra publicitat.'),
    telemetryOptOut: unknown('No hem trobat cap manera de desactivar l’analítica declarada a l’etiqueta.'),
    granularControls: unknown('Les condicions no descriuen cap control de privadesa dins de l’app.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown('No hem analitzat la interfície. Les condicions diuen que, si no s’accepten, l’app no s’activa.'),
  },
  security: {
    e2ee: na('No és un servei de comunicació entre particulars.'),
    transportEncryption: unknown('Les condicions no diuen res sobre el xifratge de les comunicacions.'),
    atRestEncryption: unknown('Les condicions no diuen res sobre el xifratge en repòs.'),
    mfa: f('no', 'official', ['app-transit-condicions-us'], 'No hi ha cap identificació: qui llegeix el codi QR de la notificació pot consultar l’expedient, presentar al·legacions o pagar, i les condicions el consideren persona autoritzada per la persona interessada.'),
    independentAudits: unknown('L’única auditoria publicada és la d’accessibilitat, del 2021.'),
    bugBounty: na('Administració pública: el bloc de servei públic substitueix aquest indicador per la conformitat amb l’ENS.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt a transit.gencat.cat.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: CATALAN_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'És la fitxa amb el text legal més antic del bloc: unes condicions del 2017 que no s’han adaptat al RGPD i que la fitxa de l’App Store ni tan sols enllaça, perquè no declara cap política de privadesa. El model d’accés per codi QR és còmode però fràgil: la notificació en paper fa de credencial, i qualsevol persona que la tingui pot actuar en nom de la interessada. L’APDCAT va amonestar l’SCT el 2020 (PS 41/2020) per no haver comunicat a l’ATC l’adreça actualitzada d’una persona sancionada, cosa que va acabar en una notificació per edicte al BOE; afecta el tractament d’expedients sancionadors que l’app fa servir, no l’app en si.',
    openQuestions: [
      'Hi ha una política de privadesa de l’app adaptada al RGPD que no hem trobat?',
      'Amb quina eina es fa l’analítica que declara l’etiqueta, i per què es recull la ubicació exacta per a analítica si les condicions diuen que el mapa no recull cap dada?',
      'Es comunica la ubicació al 112 quan es fa la trucada d’emergència des de l’app?',
    ],
  },
}

/* ═══════════════════════ Barcelona a la butxaca ═══════════════════════ */
const barcelonaButxaca: AppSeed = {
  slug: 'barcelona-a-la-butxaca',
  name: 'Barcelona a la butxaca',
  company: 'ajuntament-de-barcelona',
  categories: ['administracio-publica', 'utilitats'],
  tagline: 'L’app de la ciutat declara un identificador d’usuari vinculat i l’accés a les apps instal·lades, però la política no descriu cap compte',
  summary:
    'L’app oficial de l’Ajuntament de Barcelona reuneix tràmits, agenda, equipaments a prop, el cercador de residus i la notificació d’incidències a la via pública. La política és curta però concreta: identifica el responsable, el delegat de protecció de dades, la finalitat i la legitimació, remet a la fitxa 0013 del registre d’activitats i declara analítica amb una llibreria de Google. L’etiqueta de l’App Store hi afegeix un identificador d’usuari i el nom vinculats a la identitat, que la política no explica, i la política reconeix que l’app consulta quines aplicacions hi ha instal·lades al dispositiu.',
  platforms: ['ios', 'android'],
  businessModel: 'public-service',
  jurisdiction: 'Barcelona; servei públic de l’Ajuntament de Barcelona',
  links: {
    website: 'https://www.barcelona.cat/bcnalabutxaca/ca',
    privacyPolicy: 'https://ajuntament.barcelona.cat/apps/ca/politica-privacitat-butxaca',
    appStore: appStore('1465234509'),
  },
  accountRequired: f('partial', 'official', ['butxaca-privacitat', 'butxaca-app-store'], 'La consulta és oberta. Per notificar una incidència cal donar nom, correu i telèfon, i l’etiqueta declara un identificador d’usuari vinculat a la identitat; la política no descriu cap compte ni cap inici de sessió.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  publicService: {
    isPublicService: true,
    administrationLevel: 'local',
    legalBasis: f(
      'yes',
      'official',
      ['butxaca-privacitat', 'bcn-registre-activitats-tractament'],
      'La política dona com a legitimació l’exercici de poders públics per a la gestió d’incidències, i el registre d’activitats concreta la norma: la Llei 7/1985, reguladora de les bases del règim local. No hi ha base jurídica declarada per a l’analítica ni per a la consulta d’apps instal·lades.',
      { norm: 'Missió d’interès públic i exercici de poders públics; Llei 7/1985, de bases del règim local' },
    ),
    processingRegistry: f(
      'yes',
      'official',
      ['bcn-registre-activitats-tractament', 'butxaca-privacitat'],
      'La política remet al tractament 0013, «Gestió de comunicacions dels ciutadans (IRIS)», que figura al registre d’activitats publicat per l’Ajuntament en PDF i full de càlcul amb finalitat, cessions, legitimació, tipologia de dades, termini i mesures de seguretat.',
      { url: 'https://ajuntament.barcelona.cat/seuelectronica/estatics/files/tractaments/relacio_tractaments.xlsx' },
    ),
    dpia: unknown('No hem trobat publicada cap avaluació d’impacte relativa a la protecció de dades de l’app.'),
    ensConformity: f(
      'partial',
      'official',
      ['bcn-registre-activitats-tractament'],
      'El registre diu que les mesures de seguretat del tractament 0013 «es corresponen amb les previstes a l’annex II» del Reial decret 311/2022. És una declaració d’aplicació de mesures, no una declaració ni una certificació de conformitat, i no indica la categoria del sistema.',
    ),
    dpo: f('yes', 'official', ['butxaca-privacitat'], 'Hi ha delegat de protecció de dades, contactable per formulari web o per correu postal a la via Laietana, 7. No es publica cap adreça electrònica directa.'),
    offlineAlternative: f(
      'yes',
      'official',
      ['butxaca-web'],
      'L’app és un recull de serveis que existeixen per altres canals: la mateixa web del servei remet a les oficines d’atenció per fer tot tipus de gestions i tràmits, i als telèfons d’utilitat de la ciutat.',
    ),
    accessibilityStatement: f(
      'partial',
      'official',
      ['butxaca-accessibilitat-ios'],
      'La declaració per a iOS diu «parcialment conforme» amb el Reial decret 1112/2018 i es va revisar el 3 de juliol del 2026.',
      { url: 'https://ajuntament.barcelona.cat/declaracio-accessibilitat/ca/barcelona-la-butxaca-ios' },
    ),
    mandatoryRetention: f(
      'no',
      'official',
      ['bcn-registre-activitats-tractament'],
      'El registre fixa cinc anys de conservació per a les comunicacions ciutadanes, però no cita cap norma que imposi aquest termini.',
    ),
  },
  dataSummary:
    'Una incidència a la via pública porta nom, correu, telèfon, una foto i la ubicació exacta d’un carrer: sovint el de casa. L’Ajuntament ho guarda cinc anys i ho passa a l’òrgan que ha de resoldre-la. La resta de l’app funciona sense identificar-te, tot i que declara analítica de navegació i un identificador de dispositiu.',
  dataCollection: [
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['butxaca-app-store', 'butxaca-privacitat'], note: 'Per mostrar els equipaments a prop i situar les incidències al mapa.' }),
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['butxaca-privacitat', 'butxaca-app-store'], note: 'Per notificar incidències. L’etiqueta el declara també per a la personalització del producte.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['butxaca-privacitat', 'butxaca-app-store'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['butxaca-privacitat', 'butxaca-app-store'] }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['butxaca-app-store', 'bcn-registre-activitats-tractament'], note: 'L’etiqueta declara «correus o missatges de text»: és el text de la incidència, que es comunica a l’òrgan competent per resoldre-la.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['butxaca-privacitat', 'butxaca-app-store'], note: 'Imatges adjuntes a les incidències, amb accés a la galeria del dispositiu.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['butxaca-app-store'], note: 'Declarat a l’etiqueta; la política no explica a què correspon.' }),
    row('aplicacions-instal-lades', 'yes', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['butxaca-privacitat'], note: 'La política diu que l’app accedeix a les aplicacions instal·lades per obrir directament les altres apps municipals. L’etiqueta de l’App Store no ho declara.' }),
    row('historial-de-navegacio', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['butxaca-app-store', 'butxaca-privacitat'] }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['butxaca-app-store', 'butxaca-privacitat'], note: 'Mètriques recollides amb una llibreria de Google, segons la política.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['butxaca-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['butxaca-app-store', 'butxaca-privacitat'] }),
    row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['butxaca-app-store'], note: 'L’etiqueta no declara cap dada utilitzada per rastrejar.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['butxaca-app-store'], 'L’etiqueta de l’App Store no té secció de dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['butxaca-app-store'], 'L’etiqueta no declara cap identificador publicitari i l’app no té publicitat.'),
    thirdPartyTrackersPresent: f('partial', 'official', ['butxaca-privacitat'], 'La política diu que les mètriques d’ús i de rendiment es recullen amb «una llibreria de Google», sense anomenar-la.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['butxaca-privacitat'], 'No hi ha publicitat ni cap finalitat comercial declarada.'),
    profiling: f('partial', 'official', ['butxaca-privacitat'], 'La política diu que l’analítica serveix per «identificar possibles patrons de comportament dels usuaris», tot i que la qualifica d’anònima.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['bcn-registre-activitats-tractament', 'butxaca-privacitat'], 'Les incidències es comuniquen a l’òrgan competent per resoldre-les, a entitats de dret públic i, per obligació legal, a jutjats, tribunals i cossos de seguretat. L’analítica passa per Google.'),
    intraGroupSharing: f('yes', 'official', ['bcn-registre-activitats-tractament'], 'La incidència s’adreça a l’òrgan municipal competent, que pot ser una altra entitat de l’Ajuntament.'),
    dataBrokerSales: f('no', 'official', ['bcn-registre-activitats-tractament'], 'Les úniques cessions previstes són a òrgans públics i les legalment obligatòries.'),
    internationalTransfers: f('partial', 'official', ['bcn-registre-activitats-tractament', 'butxaca-privacitat'], 'El registre diu que el tractament 0013 no fa transferències internacionals, però la política no aclareix on tracta Google les mètriques d’ús.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe sobre les dades de l’aplicació.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['bcn-registre-activitats-tractament'], 'Les comunicacions ciutadanes es conserven cinc anys. La política no fixa cap termini per a l’analítica ni per a l’identificador d’usuari.'),
    dataAfterDeletion: unknown('La política no descriu què passa amb les dades si es deixa de fer servir l’app.'),
    periods: [
      { dataType: 'contingut-de-missatges', period: 'Cinc anys (tractament 0013, gestió de comunicacions ciutadanes)', sources: ['bcn-registre-activitats-tractament'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['butxaca-privacitat'], 'La política reconeix el dret de supressió i dona els formularis per exercir-lo, però no descriu cap compte ni cap procediment de baixa de l’app.'),
    selfService: unknown('No hem trobat cap opció de baixa dins de l’app; la política no en descriu cap.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Desinstal·la l’aplicació per deixar d’enviar dades d’ús, de navegació i d’ubicació.',
      'Per demanar la supressió de les dades de les incidències que hagis notificat, fes servir els formularis d’exercici de drets que enllaça la política de privacitat de l’app.',
      'Si no et responen, pots contactar el delegat de protecció de dades pel formulari web o per correu postal a la via Laietana, 7, de Barcelona, i després reclamar a l’APDCAT.',
    ],
    obstacles: 'La política no explica l’identificador d’usuari que declara l’etiqueta ni si hi ha un compte que es pugui tancar.',
    dataRetained: 'Les incidències notificades, cinc anys segons el registre d’activitats.',
    sources: ['butxaca-privacitat', 'bcn-registre-activitats-tractament'],
  },
  userRights: {
    dataExport: unknown('La política no esmenta la portabilitat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['butxaca-privacitat'], 'Formularis de drets d’accés, rectificació, supressió, oposició i limitació, delegat de protecció de dades identificat i reclamació a l’APDCAT amb adreça.', {
      url: 'https://ajuntament.barcelona.cat/apps/ca/politica-privacitat-butxaca',
    }),
  },
  controls: {
    adPersonalizationOptOut: na('El servei no mostra publicitat.'),
    telemetryOptOut: unknown('La política no ofereix cap manera de desactivar l’analítica de Google.'),
    granularControls: f('partial', 'official', ['butxaca-privacitat'], 'La ubicació i la galeria d’imatges depenen dels permisos del sistema, i les dades personals només es demanen per notificar incidències. No hi ha control sobre l’analítica.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem analitzat la interfície de l’aplicació.'),
  },
  security: {
    e2ee: na('No és un servei de comunicació entre particulars.'),
    transportEncryption: f('yes', 'official', ['butxaca-privacitat'], 'La política diu que totes les dades que viatgen al servidor ho fan per HTTPS.'),
    atRestEncryption: unknown('La política no diu res sobre el xifratge en repòs.'),
    mfa: unknown('No hem pogut confirmar si hi ha cap inici de sessió ni, per tant, si té doble factor.'),
    independentAudits: unknown('No hem trobat cap auditoria de seguretat publicada.'),
    bugBounty: na('Administració pública: el bloc de servei públic substitueix aquest indicador per la conformitat amb l’ENS.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt a barcelona.cat ni a ajuntament.barcelona.cat.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: CATALAN_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'De les quatre fitxes del lot, és la política més ben lligada al registre d’activitats: dona el codi del tractament i s’hi pot comprovar la base legal, el termini i les mesures de seguretat. El que no quadra és l’etiqueta de l’App Store, que declara un identificador d’usuari i el nom vinculats per «personalitzar el producte», i la consulta d’aplicacions instal·lades, que la política reconeix però l’etiqueta no. No hem trobat cap incident ni resolució de l’APDCAT sobre l’app.',
    openQuestions: [
      'Què és l’identificador d’usuari que declara l’etiqueta, i hi ha algun inici de sessió dins de l’app?',
      'Quina llibreria de Google recull les mètriques i on es tracten?',
      'Quines dades de les apps instal·lades llegeix l’app i si surten del dispositiu?',
    ],
  },
}

export const lot: SeedLot = {
  companies: [
    {
      slug: 'servei-meteorologic-de-catalunya',
      name: 'Servei Meteorològic de Catalunya',
      legalName: 'Servei Meteorològic de Catalunya',
      parent: 'generalitat-de-catalunya',
      description:
        'Organisme de la Generalitat de Catalunya competent en meteorologia i climatologia, amb NIF Q0801167H. Gestiona la xarxa d’estacions automàtiques i de radars i publica l’aplicació METEOCAT.',
      headquartersCountry: 'ES',
      euEstablishment: 'Carrer del Dr. Roux, 80, 08017 Barcelona',
      leadSupervisoryAuthority: 'apdcat',
      ownership: 'state',
      website: 'https://www.meteo.cat/',
      productDomains: ['meteo.cat'],
      privacyContact: 'protecciodades.meteocat@gencat.cat',
    },
    {
      slug: 'agencia-tributaria-de-catalunya',
      name: 'Agència Tributària de Catalunya',
      legalName: 'Agència Tributària de Catalunya',
      parent: 'generalitat-de-catalunya',
      description:
        'Administració tributària de la Generalitat de Catalunya. Gestiona, liquida i recapta els tributs propis i els cedits per l’Estat, i recapta en via executiva deutes d’altres organismes, com les multes de trànsit.',
      headquartersCountry: 'ES',
      euEstablishment: 'Passeig de la Zona Franca, 46, 08038 Barcelona',
      leadSupervisoryAuthority: 'apdcat',
      ownership: 'state',
      website: 'https://atc.gencat.cat/',
      productDomains: ['atc.gencat.cat', 'atc.cat'],
      privacyContact: 'dpd@atc.cat',
    },
    {
      slug: 'servei-catala-de-transit',
      name: 'Servei Català de Trànsit',
      legalName: 'Servei Català de Trànsit',
      parent: 'generalitat-de-catalunya',
      description:
        'Organisme autònom de la Generalitat de Catalunya, creat per la Llei 14/1997, que gestiona el trànsit a les vies interurbanes i tramita els expedients sancionadors de trànsit. Depèn del Departament d’Interior.',
      headquartersCountry: 'ES',
      euEstablishment: 'Carrer de la Diputació, 355, 08009 Barcelona',
      leadSupervisoryAuthority: 'apdcat',
      ownership: 'state',
      foundedYear: 1997,
      website: 'https://transit.gencat.cat/',
      productDomains: ['transit.gencat.cat'],
      privacyContact: 'dpd.interior@gencat.cat',
    },
  ],
  sources: [
    /* METEOCAT */
    s('meteocat-app-store', 'METEOCAT en App Store (Privacidad de la app)', appStore('6477286914'), 'Apple / Generalitat de Catalunya', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: ubicació exacta i aproximada, identificador de dispositiu i dades d’errors, totes no vinculades a la identitat i cap per rastrejar. L’enllaç de política de privadesa de la fitxa no s’obre.',
    }),
    s('meteocat-privacitat-app', 'Política de privacitat de l’app', 'https://www.meteo.cat/wpweb/serveis/app-meteocat/politica-de-privacitat-de-lapp/', 'Servei Meteorològic de Catalunya', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Ubicació aproximada amb permís i en segon pla, analítica amb Firebase Analytics mitjançant l’IDFA, preferències i identificador de notificacions; conservació mentre l’app estigui instal·lada i un any més. Els enllaços al detall del tractament apunten a un servidor de desenvolupament.',
    }),
    s('meteocat-privacidad-app-es', 'Política de privacidad de la app', 'https://www.meteo.cat/wpweb/serveis/cataleg-de-serveis/serveis-oberts/app-meteocat-es/politica-de-privacidad-de-la-app/', 'Servei Meteorològic de Catalunya', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Versió castellana, amb la informació bàsica del RGPD que la catalana no té: responsable (SMC, Q0801167H), delegat, consentiment com a legitimació de les notificacions, cap cessió prevista i exercici de drets per correu amb DNI.',
    }),
    s('meteocat-avis-legal-app', 'Avís legal de l’app', 'https://www.meteo.cat/wpweb/serveis/app-meteocat/avis-legal-de-lapp/', 'Servei Meteorològic de Catalunya', 'terms', 'primary', {
      language: 'ca',
      summary: 'Condicions de les notificacions: l’SMC desa la darrera ubicació, no la cedeix i recomana informar-se per altres canals perquè les notificacions poden fallar.',
    }),
    s('meteocat-app-pagina', 'Aplicació Meteocat', 'https://www.meteo.cat/wpweb/serveis/app-meteocat/', 'Servei Meteorològic de Catalunya', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Descripció de l’app per apartats: el temps, pluja, avisos, configuració de notificacions per comarca, meteor, nivell o estació, i giny.',
    }),
    s('meteocat-politica-privacitat', 'Política de privacitat', 'https://www.meteo.cat/wpweb/politica-de-privacitat/', 'Servei Meteorològic de Catalunya', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Política general del web: drets, reclamació al delegat a dpd.meteocat@gencat.cat i enllaç al registre d’activitats de tractament.',
    }),
    s('meteocat-registre-activitats', 'Registre d’activitats com a responsable del tractament (general)', 'https://static-m.meteo.cat/wordpressweb/wp-content/uploads/2021/11/11115244/Registre-dactivitats-de-tractament-METEOCAT-A3.pdf', 'Servei Meteorològic de Catalunya', 'regulator', 'primary', {
      language: 'ca',
      publishedAt: '2021-11-11',
      summary: 'Disset activitats de tractament de l’SMC, amb PrivaDatum com a delegat de protecció de dades. Cap no correspon a l’aplicació.',
    }),
    s('meteocat-accessibilitat-ios', 'Declaració d’accessibilitat de l’app (iOS)', 'https://www.meteo.cat/wpweb/serveis/app-meteocat/declaracio-daccessibilitat-de-lapp-ios/', 'Servei Meteorològic de Catalunya', 'support-doc', 'primary', {
      language: 'ca',
      publishedAt: '2025-11-21',
      summary: 'Parcialment conforme amb el Reial decret 1112/2018; auditoria externa de TOTHOMweb del 21 de novembre del 2025.',
    }),
    /* Agència Tributària de Catalunya */
    s('atc-app-store', 'Agencia Tributaria Cataluña en App Store (Privacidad de la app)', appStore('6452755072'), 'Apple / Generalitat de Catalunya', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: informació de pagament, ubicació, nom, adreça, correu, telèfon, identificador d’usuari i interacció amb el producte vinculats a la identitat; errors no vinculats. La descripció detalla què es pot fer amb i sense idCAT Mòbil.',
    }),
    s('atc-app-privacitat', 'Política de privacitat de l’app de l’ATC', 'https://atc.gencat.cat/ca/atencio/app/app-privacitat/', 'Agència Tributària de Catalunya', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Diu que l’app no recull cap dada i alhora que emmagatzema nom, correu, adreça, telèfon, ubicació i dades bancàries, esborrades en tancar la sessió. Identificació amb idCAT Mòbil; només galetes tècniques.',
    }),
    s('atc-app-pagina', 'App de l’Agència Tributària de Catalunya', 'https://atc.gencat.cat/ca/atencio/app/', 'Agència Tributària de Catalunya', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Funcions de l’app amb identificació i sense, i enllaços a la política i a les declaracions d’accessibilitat.',
    }),
    s('atc-proteccio-dades', 'Protecció de dades', 'https://atc.gencat.cat/ca/agencia/proteccio-dades/', 'Agència Tributària de Catalunya', 'privacy-center', 'primary', {
      language: 'ca',
      summary: 'Drets i com exercir-los (formulari, oficines, correu al delegat), limitacions de la supressió i la portabilitat en l’àmbit tributari, i llista d’activitats de tractament.',
    }),
    s('atc-rat-finalitats-tributaries', 'Activitat de tractament de dades amb finalitats tributàries', 'https://atc.gencat.cat/ca/agencia/proteccio-dades/finalitats-tributaries/', 'Agència Tributària de Catalunya', 'regulator', 'primary', {
      language: 'ca',
      summary: 'Fitxa del registre: esmenta l’app, cita la Llei 58/2003 i la Llei 17/2017, enumera dades, fonts, cessions, encarregats, actuacions automatitzades i terminis, i descarta transferències internacionals.',
    }),
    s('atc-app-accessibilitat-ios', 'Declaració d’accessibilitat de l’app per a iOS', 'https://atc.gencat.cat/ca/atencio/app/declaracio-accessibilitat-ios/', 'Agència Tributària de Catalunya', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Parcialment conforme; autoavaluació d’Everycode, S.L. del 12 de desembre del 2025, revisada el 15 de desembre del 2025.',
    }),
    s('atc-identificacio-digital', 'Identificació digital', 'https://atc.gencat.cat/ca/utilitats/identificacio-digital/', 'Agència Tributària de Catalunya', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Descriu l’idCAT Mòbil com un sistema d’identificació basat en l’enviament de contrasenyes d’un sol ús al telèfon mòbil.',
    }),
    /* App Trànsit */
    s('app-transit-app-store', 'App Trànsit en App Store (Privacidad de la app)', appStore('1137525216'), 'Apple / Generalitat de Catalunya', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: informació de pagament, dades de contacte i contingut de l’usuari vinculats a la identitat; ubicació, dades d’ús, diagnòstics i altres dades no vinculats. La fitxa no enllaça cap política de privadesa.',
    }),
    s('app-transit-condicions-us', 'Condicions d’ús de l’app mòbil «Trànsit»', 'https://transit.gencat.cat/ca/el_servei/condicions_d_us/app_transit/catala/', 'Servei Català de Trànsit', 'terms', 'primary', {
      language: 'ca',
      publishedAt: '2017-02-28',
      summary: 'Condicions i política de privadesa del 2017: accés per codi QR, dades dels tràmits sancionadors, cita la LOPD 15/1999 i el Reial decret 1720/2007, i diu que el mapa no recull cap dada personal.',
    }),
    s('sct-tractament-expedients-sancionadors', 'Expedients sancionadors — informació detallada del tractament', 'https://transit.gencat.cat/ca/el_servei/proteccio_dades/informacio-detallada-dels-tractaments/expedients-sancionadors-transit/', 'Servei Català de Trànsit', 'regulator', 'primary', {
      language: 'ca',
      publishedAt: '2023-05-16',
      summary: 'Responsable, delegat de protecció de dades d’Interior, finalitat, comunicacions, conservació d’un a cinc anys, base jurídica (article 6.1.c del RGPD, Llei 14/1997 i RDL 6/2015), categories i procedència de les dades.',
    }),
    s('app-transit-pagament-sancions', 'Pagament de sancions', 'https://transit.gencat.cat/ca/gestions/multes-i-sancions/pagament-sancions/', 'Servei Català de Trànsit', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Vies de pagament de les multes: web amb o sense certificat, app, oficines de CaixaBank, oficines de l’SCT amb cita i telèfon 012.',
    }),
    s('app-transit-accessibilitat', 'Accessibilitat APP Trànsit', 'https://transit.gencat.cat/ca/menu_ajuda/accessibilitat/accessibilitat-app-transit/', 'Servei Català de Trànsit', 'support-doc', 'primary', {
      language: 'ca',
      publishedAt: '2022-03-29',
      summary: 'Parcialment conforme; auditoria de T-Systems del 23 de juny del 2021, revisada el 29 de març del 2022, per a les versions 1.2.2 d’Android i 1.2.0 d’iOS.',
    }),
    s('apdcat-ps-41-2020', 'Resolució del procediment sancionador núm. PS 41/2020, referent al Servei Català de Trànsit', 'https://seu.apdcat.cat/ca/documentPublic/download/3167', 'Autoritat Catalana de Protecció de Dades', 'regulator', 'authority', {
      language: 'ca',
      summary: 'L’APDCAT amonesta l’SCT per una infracció de l’article 5.1.c) del RGPD: no va comunicar a l’ATC l’adreça actualitzada d’una persona sancionada i la providència de constrenyiment es va acabar notificant per anunci al BOE.',
    }),
    /* Barcelona a la butxaca */
    s('butxaca-app-store', 'Barcelona a la butxaca en App Store (Privacidad de la app)', appStore('1465234509'), 'Apple / Ajuntament de Barcelona', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: nom, correu, telèfon, missatges, fotos i identificador d’usuari vinculats a la identitat; ubicació, historial de navegació, identificador de dispositiu, dades d’ús i diagnòstics no vinculats. Cap dada per rastrejar.',
    }),
    s('butxaca-privacitat', 'Condicions d’ús i política de privacitat de l’app Barcelona a la Butxaca', 'https://ajuntament.barcelona.cat/apps/ca/politica-privacitat-butxaca', 'Ajuntament de Barcelona', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Ubicació, dades personals per a incidències, galeria, accés a les apps instal·lades i mètriques amb una llibreria de Google; HTTPS; responsable, delegat, finalitat, legitimació i remissió al tractament 0013.',
    }),
    s('bcn-registre-activitats-tractament', 'Registre d’activitats de tractament de l’Ajuntament de Barcelona', 'https://ajuntament.barcelona.cat/seuelectronica/estatics/files/tractaments/relacio_tractaments.xlsx', 'Ajuntament de Barcelona', 'regulator', 'primary', {
      language: 'ca',
      summary: 'Tractament 13, «Gestió de comunicacions dels ciutadans (IRIS)»: cessions a l’òrgan competent i les legals, sense transferències internacionals, Llei 7/1985, conservació de cinc anys i mesures de l’annex II de l’ENS.',
    }),
    s('butxaca-accessibilitat-ios', 'Declaració d’accessibilitat per a l’aplicació Barcelona a la butxaca per a iOS', 'https://ajuntament.barcelona.cat/declaracio-accessibilitat/ca/barcelona-la-butxaca-ios', 'Ajuntament de Barcelona', 'support-doc', 'primary', {
      language: 'ca',
      publishedAt: '2026-07-03',
      summary: 'Parcialment conforme amb el Reial decret 1112/2018; revisada el 3 de juliol del 2026.',
    }),
    s('butxaca-web', 'Barcelona a la Butxaca', 'https://www.barcelona.cat/bcnalabutxaca/ca', 'Ajuntament de Barcelona', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Web del servei: funcions de l’app (tràmits, incidències, a prop meu, residus, oficines d’atenció i telèfons d’utilitat).',
    }),
  ],
  apps: [meteocat, agenciaTributaria, appTransit, barcelonaButxaca],
  incidents: [
    {
      slug: 'sct-apdcat-ps-41-2020',
      title: 'L’APDCAT amonesta el Servei Català de Trànsit per no comunicar l’adreça correcta d’una persona sancionada',
      type: 'regulatory-order',
      severity: 'low',
      apps: ['app-transit'],
      company: 'servei-catala-de-transit',
      occurredAt: '2018-09-19',
      description:
        'Una persona havia comunicat a l’SCT, l’abril del 2018, el seu canvi de domicili. El setembre d’aquell any l’SCT va traspassar el deute d’una multa a l’Agència Tributària de Catalunya sense l’adreça nova, i la providència de constrenyiment es va intentar notificar a l’adreça antiga i es va acabar publicant al BOE. L’APDCAT va resoldre que l’SCT havia vulnerat l’article 5.1.c) del RGPD i el va amonestar, sense imposar mesures correctores perquè era un fet únic i consumat. Afecta el tractament dels expedients sancionadors que gestiona l’app, no l’app en si.',
      affectedPeople: 'Una persona',
      regulatory: {
        authority: 'Autoritat Catalana de Protecció de Dades (APDCAT)',
        legalBasis: 'Article 5.1.c) del RGPD, infracció de l’article 83.5.a)',
        status: 'final',
      },
      sources: ['apdcat-ps-41-2020'],
    },
  ],
  storeIds: {
    meteocat: 'cat.gencat.mobi.meteocat',
    'agencia-tributaria-de-catalunya': 'cat.gencat.mobi.atc.apptributs',
    'app-transit': 'cat.gencat.mobi.transit',
    'barcelona-a-la-butxaca': 'cat.bcn.butxaca',
  },
}
