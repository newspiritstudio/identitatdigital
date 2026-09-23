import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 09 de la segona onada: cinc parelles d'aplicacions que comparteixen
 * responsable. Notícies de la BBC (BBC News i BBC World Service), identitat
 * digital i ajuts públics amb la Fábrica Nacional de Moneda y Timbre
 * (Certificado digital FNMT i Bono Cultural Joven), portals immobiliaris del
 * grup idealista (idealista i yaencontre), gimnasos construïts sobre la
 * mateixa plataforma MyVitale (VivaGym i ForusApp) i el maquinari connectat
 * de Xiaomi (Mi Fitness i Xiaomi Home).
 *
 * El contrast útil del lot és entre dues maneres d'entendre una aplicació
 * pública: la FNMT declara a l'App Store que no recull cap dada mentre tracta
 * el DNI i la identitat de mig país, i Xiaomi declara desenes de categories
 * per a dues aplicacions que viuen dins de casa.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/* ═══════════════════════ Certificado digital FNMT ═══════════════════════ */
const certificadoDigitalFnmt: AppSeed = {
  slug: 'certificado-digital-fnmt',
  name: 'Certificado digital FNMT',
  company: 'fnmt-rcm',
  categories: ['administracio-publica', 'autenticacio-i-seguretat'],
  tagline: 'L’aplicació que custodia la identitat digital de mig país declara a l’App Store que no recull cap dada',
  summary:
    'L’aplicació de la Fábrica Nacional de Moneda y Timbre serveix per sol·licitar, descarregar i fer servir el certificat de persona física, la clau amb què milions de persones signen davant de l’administració. L’etiqueta de l’App Store diu «No se recopilan datos», però el tràmit tracta el DNI, el domicili, el telèfon i, si s’acredita la identitat per vídeo, la imatge de la cara i del document. La política que enllaça la fitxa de l’App Store és la genèrica de l’organisme, no una política de l’aplicació.',
  platforms: ['ios', 'android'],
  businessModel: 'public-service',
  jurisdiction: 'Espanya; autoritat de control: Agencia Española de Protección de Datos',
  userBase: 'Milions de certificats de ciutadà en vigor a Espanya',
  links: {
    website: 'https://www.sede.fnmt.gob.es/certificados/persona-fisica/certificado-con-dispositivo-movil',
    privacyPolicy: 'https://www.fnmt.es/politica-privacidad',
    appStore: appStore('6449721772'),
  },
  accountRequired: f('no', 'official', ['fnmt-rcm-certificado-movil'], 'No hi ha compte d’usuari: el vincle és el codi de sol·licitud i l’acreditació de la identitat. Només es pot tenir un certificat de ciutadà actiu alhora.'),
  openSource: unknown('No hem trobat cap repositori públic del codi de l’aplicació.'),
  publicService: {
    isPublicService: true,
    administrationLevel: 'state',
    legalBasis: f('yes', 'official', ['fnmt-rcm-rat', 'fnmt-rcm-politica-certificado-movil'], 'El registre d’activitats descriu el tractament «Gestión de la PKI» com a execució del contracte i compliment d’una obligació legal, amb l’article 6.1.c) del RGPD i la Llei 6/2020 citats expressament. La política del certificat mòbil remet a aquest mateix tractament, el número 13 del registre.', {
      norm: 'Reglament (UE) 2016/679, article 6.1.c), i Llei 6/2020, d’11 de novembre, de serveis electrònics de confiança',
    }),
    processingRegistry: f('yes', 'official', ['fnmt-rcm-rat', 'fnmt-rcm-politica-certificado-movil'], 'El registre publicat, amb data de juny del 2026, conté el tractament número 13, «Gestión de la PKI», que és exactament el del certificat de ciutadà: finalitats, categories de dades, encarregats, comunicacions i termini de supressió.', {
      url: 'https://www.fnmt.es/documents/10179/10671624/RAT.pdf/1e61cdb7-bc0b-339b-e82e-edbd3c32830c',
    }),
    dpia: unknown('No hem trobat publicada cap avaluació d’impacte relativa a la gestió de la PKI ni a la vídeo-identificació, que és on hi hauria tractament biomètric.'),
    ensConformity: f('yes', 'official', ['fnmt-rcm-declaracion-conformidad-ens'], 'La seu electrònica publica una declaració de conformitat amb l’Esquema Nacional de Seguretat i hi enllaça el segell amb el certificat de conformitat del 2025. La declaració, però, encara s’empara en l’article 41 del Reial decret 3/2010, derogat pel Reial decret 311/2022, i no diu en quina categoria està classificat el sistema.'),
    dpo: f('yes', 'official', ['fnmt-rcm-politica-privacidad'], 'La política de l’organisme identifica el delegat de protecció de dades amb adreça postal i correu electrònic publicats.', {
      contact: 'dpd@fnmt.es',
    }),
    offlineAlternative: f('yes', 'official', ['fnmt-rcm-certificado-software', 'fnmt-rcm-anular'], 'El mateix certificat s’obté sense l’aplicació: es demana pel navegador, s’acredita la identitat presencialment en una oficina d’acreditació i es descarrega com a certificat programari. L’anul·lació també es pot demanar per telèfon o presencialment.'),
    accessibilityStatement: f('partial', 'official', ['fnmt-rcm-accesibilidad'], 'La seu es declara «parcialmente conforme» amb el Reial decret 1112/2018: imatges amb text alternatiu incorrecte, formularis amb CAPTCHA poc accessibles i documents PDF que perden l’accessibilitat en signar-los. És una autoavaluació de l’organisme, preparada el 24 d’abril del 2023 i revisada l’1 de juliol del 2026, i cobreix el web de la seu, no l’aplicació mòbil.', {
      url: 'https://www.sede.fnmt.gob.es/accesibilidad',
    }),
    mandatoryRetention: f('yes', 'official', ['fnmt-rcm-ley-6-2020', 'fnmt-rcm-rat'], 'La llei obliga el prestador qualificat a conservar la informació relativa al servei prestat durant quinze anys des de l’extinció del certificat, i el registre d’activitats fixa el mateix termini de supressió. Per això revocar el certificat no esborra el rastre: no marxar del tot no és una decisió de la FNMT.', {
      norm: 'Llei 6/2020, article 9.3.a), en relació amb l’article 24.2.h) del Reglament (UE) 910/2014',
    }),
  },
  dataSummary:
    'Per emetre un certificat cal provar qui ets davant d’un prestador qualificat: número de DNI, nom, domicili, telèfon i correu, més la clau pública del certificat i el seu número de sèrie. Si l’acreditació es fa per vídeo, s’hi afegeixen la imatge de la cara i la del document. Un cop emès, el certificat és la traça que identifica la persona a cada tràmit administratiu que signa.',
  dataCollection: [
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['fnmt-rcm-politica-certificado-movil', 'fnmt-rcm-certificado-movil'], note: 'DNI espanyol en vigor, llegit per NFC amb el PIN del DNIe o mostrat en la vídeo-identificació.' }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['fnmt-rcm-politica-certificado-movil'], note: 'Consta al mateix certificat i, per tant, el veu qualsevol destinatari d’un document signat.' }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['fnmt-rcm-politica-certificado-movil'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['fnmt-rcm-politica-certificado-movil'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['fnmt-rcm-politica-certificado-movil'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['fnmt-rcm-politica-certificado-movil'], note: 'La política parla de l’edat com a dada tractada per comprovar la capacitat d’obrar.' }),
    row('testimoni-d-autenticacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['fnmt-rcm-politica-certificado-movil'], note: 'Clau pública d’autenticació, clau privada de signatura i número de sèrie del certificat.' }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', level: 'official', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['fnmt-rcm-certificado-movil'], note: 'Només si s’escull la vídeo-identificació de pagament: la seu descriu el servei, però la política no en detalla el tractament biomètric ni el termini de conservació del vídeo.' }),
    row('identificador-de-dispositiu', 'unknown', { linked: 'unknown', tracking: 'no', shared: 'unknown', level: 'unknown', sources: ['certificado-digital-fnmt-app-store'], note: 'L’etiqueta de l’App Store no declara cap dada; no hi ha documentació tècnica de la telemetria de l’aplicació.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['certificado-digital-fnmt-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['certificado-digital-fnmt-app-store'], 'L’etiqueta declara «No se recopilan datos».'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi tècnica del trànsit de l’aplicació que confirmi o desmenteixi l’etiqueta.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['fnmt-rcm-politica-privacidad'], 'Cap finalitat publicitària: el tractament s’empara en l’execució del contracte de certificació i en la Llei 6/2020 de serveis electrònics de confiança.'),
    profiling: f('no', 'official', ['fnmt-rcm-politica-certificado-movil'], 'La política no preveu elaboració de perfils ni decisions automatitzades sobre la persona sol·licitant.'),
    aiTraining: unknown('La política no diu res sobre l’ús de les dades per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['fnmt-rcm-politica-certificado-movil'], 'Administracions públiques, forces i cossos de seguretat, òrgans judicials i qualsevol tercer que verifiqui la validesa del certificat.'),
    intraGroupSharing: na('La FNMT-RCM és una entitat pública empresarial única, sense grup empresarial.'),
    dataBrokerSales: f('no', 'official', ['fnmt-rcm-politica-privacidad'], 'La política no preveu cap cessió comercial de dades.'),
    internationalTransfers: unknown('La política no esmenta transferències internacionals; tampoc no diu expressament que no n’hi hagi.'),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('El portal de transparència de la FNMT és el de la Llei 19/2013 i no publica dades sobre peticions d’accés a informació personal.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['fnmt-rcm-rat', 'fnmt-rcm-politica-certificado-movil'], 'El registre d’activitats de tractament recull els criteris de conservació per tractament, però la política de l’app no dona terminis concrets per a la vídeo-identificació.'),
    dataAfterDeletion: f('partial', 'official', ['fnmt-rcm-anular'], 'Revocar el certificat no esborra el registre de certificació: la normativa de serveis de confiança obliga a conservar-lo per poder verificar signatures antigues.'),
  },
  accountDeletion: {
    possible: f('partial', 'official', ['fnmt-rcm-anular'], 'El que es pot fer és revocar el certificat; no hi ha «compte» que eliminar, i les dades del registre de certificació es conserven.'),
    selfService: f('yes', 'official', ['fnmt-rcm-anular'], 'Es pot anul·lar en línia amb el mateix certificat, sense parlar amb ningú.'),
    directUrl: 'https://www.sede.fnmt.gob.es/certificados/persona-fisica/anular',
    difficulty: 'medium',
    steps: [
      'Entra a la seu electrònica de la FNMT, a l’apartat «Anular» del certificat de persona física.',
      'Si encara tens el certificat operatiu, fes la sol·licitud d’anul·lació en línia identificant-t’hi amb el mateix certificat.',
      'Si l’has perdut o te l’han robat, truca al servei d’anul·lació telefònica, disponible tot el dia, amb el codi de sol·licitud a mà.',
      'Si tampoc tens el codi, demana l’anul·lació presencialment a una oficina d’acreditació.',
      'Recorda que sol·licitar un certificat nou revoca automàticament l’anterior.',
    ],
    obstacles:
      'L’anul·lació només la pot demanar la persona titular i només mentre el certificat és vigent. Si s’ha perdut el certificat i el codi de sol·licitud, l’única via és presencial.',
    dataRetained: 'Les dades del registre de certificació, per obligació de la normativa de serveis electrònics de confiança.',
    sources: ['fnmt-rcm-anular', 'fnmt-rcm-politica-certificado-movil'],
  },
  userRights: {
    dataExport: unknown('No hi ha cap eina d’autoservei per descarregar les dades; la portabilitat s’ha de demanar pel registre electrònic.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['fnmt-rcm-politica-privacidad'], 'Els drets s’exerceixen pel Registre Electrónico Común triant la FNMT-RCM com a organisme destinatari, o escrivint al delegat de protecció de dades.', {
      url: 'mailto:dpd@fnmt.es',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: na('No hi ha publicitat al servei.'),
    telemetryOptOut: unknown('No hem trobat cap panell de configuració de telemetria ni cap documentació que digui si n’hi ha.'),
    granularControls: f('no', 'official', ['fnmt-rcm-politica-certificado-movil'], 'El tractament és el mínim necessari per emetre el certificat i no admet opcions: no hi ha res a configurar perquè no hi ha finalitats accessòries.'),
    defaultPosture: 'protective',
    darkPatterns: f('no', 'editorial', [], 'No hem trobat patrons enganyosos: el servei no reté la persona usuària ni li ofereix opcions confuses. El retret és l’oposat, la manca de documentació.'),
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades; el que protegeix és la clau del certificat.'),
    transportEncryption: f('yes', 'official', ['fnmt-rcm-certificaciones'], 'Prestador qualificat de serveis de confiança sota el Reglament eIDAS, amb certificació ETSI.'),
    atRestEncryption: unknown('No consta documentació pública específica sobre el xifratge en repòs de les dades de sol·licitud.'),
    mfa: f('partial', 'official', ['fnmt-rcm-certificado-movil'], 'No hi ha compte amb contrasenya: l’acreditació es fa amb el DNIe per NFC i el seu PIN, per vídeo-identificació o presencialment, i la instal·lació del certificat demana codi de desbloqueig i contrasenya de la còpia.'),
    independentAudits: f('yes', 'official', ['fnmt-rcm-certificaciones', 'fnmt-rcm-declaracion-conformidad-ens'], 'ISO/IEC 27001 amb certificació d’AENOR i auditories de conformitat eIDAS com a prestador qualificat. La conformitat amb l’Esquema Nacional de Seguretat no consta a la pàgina de certificacions, sinó a la declaració publicada a la seu electrònica.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses ni cap canal propi de divulgació responsable.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt als dominis fnmt.es ni sede.fnmt.gob.es, i no hem trobat cap política publicada de divulgació de vulnerabilitats.'),
  },
  alternatives: [
    {
      app: 'clave',
      comparability: 'partial',
      rationale:
        'Cl@ve permet identificar-se davant de moltes administracions sense instal·lar cap certificat al dispositiu.',
      tradeOffs:
        'No serveix per signar documents fora de la seu electrònica ni per acreditar-se davant de tercers privats, i no cobreix tots els tràmits que accepten el certificat de la FNMT.',
    },
    {
      app: 'autofirma',
      comparability: 'complementary',
      rationale:
        'AutoFirma signa documents amb el mateix certificat des de l’ordinador, sense dependre de l’aplicació mòbil.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El desajust entre l’etiqueta «No se recopilan datos» i un servei que tracta el DNI i, opcionalment, la imatge de la cara és la troballa d’aquesta fitxa. L’etiqueta es refereix al que recull el desenvolupador a través de l’aplicació, no al tractament del servei, però una persona que la llegeix no pot saber-ho. Tampoc no hem trobat cap política de privadesa específica de l’aplicació: la que enllaça l’App Store és la general de l’organisme.',
    openQuestions: [
      'Quin és el termini de conservació del vídeo i de les imatges capturades en la vídeo-identificació?',
      'On es custodia realment la clau privada de signatura en la modalitat mòbil: al dispositiu o en un mòdul de la FNMT?',
      'L’aplicació envia telemetria a algun proveïdor tercer?',
    ],
  },
}

/* ═══════════════════════ Bono Cultural Joven ═══════════════════════ */
const bonoCulturalJoven: AppSeed = {
  slug: 'bono-cultural-joven',
  name: 'Bono Cultural Joven',
  company: 'ministerio-de-cultura',
  categories: ['administracio-publica'],
  tagline: 'Una ajuda pública amb tres encarregats del tractament i una política de privadesa que encara cita la convocatòria anterior',
  summary:
    'El Bono Cultural Joven és l’ajuda de 400 euros per a qui compleix divuit anys. L’aplicació serveix per consultar la sol·licitud i el saldo; l’alta es fa pel web amb un codi que gestiona la FNMT. El responsable del tractament és el Ministeri de Cultura, i la FNMT, Correos i Tragsatec hi actuen com a encarregats. L’App Store declara que no es recull cap dada, i l’enllaç de política que hi consta apunta encara a la convocatòria del 2025.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'public-service',
  jurisdiction: 'Espanya; autoritat de control: Agencia Española de Protección de Datos',
  userBase: 'Adreçada a tota la població que compleix 18 anys l’any de la convocatòria',
  links: {
    website: 'https://bonoculturajoven.gob.es/',
    privacyPolicy: 'https://bonoculturajoven.gob.es/politica-privacidad.html',
    appStore: appStore('6781970565'),
  },
  accountRequired: f('yes', 'official', ['bono-cultural-joven-politica-privacidad'], 'Cal haver presentat la sol·licitud de l’ajuda i identificar-se; l’aplicació només mostra l’estat i el saldo de qui ja hi és beneficiari.'),
  openSource: unknown('No hem trobat cap repositori públic del codi.'),
  publicService: {
    isPublicService: true,
    administrationLevel: 'state',
    legalBasis: f('yes', 'official', ['bono-cultural-joven-real-decreto', 'bono-cultural-joven-rat-cultura'], 'L’article 15.4.a) del reial decret de la convocatòria cita els articles 6.1.a), 6.1.c), 6.1.e) i 9.2.g) del RGPD i l’obligació legal que deriva de la disposició addicional centèsima quarta de la Llei 31/2022; el consentiment només empara l’enviament de comunicacions per aplicacions de missatgeria. El detall és que la política publicada al web encara invoca el reial decret de la convocatòria anterior.', {
      norm: 'Reial decret 401/2026, article 15.4.a); Reglament (UE) 2016/679, articles 6.1.c) i 6.1.e)',
    }),
    processingRegistry: f('yes', 'official', ['bono-cultural-joven-rat-cultura'], 'El registre d’activitats del Ministeri de Cultura, actualitzat el setembre del 2026, té una fitxa pròpia del tractament «Bono Cultural Joven» amb les categories de dades, els destinataris, el termini de conservació i la llista nominal de transferències internacionals.', {
      url: 'https://www.cultura.gob.es/servicios-a-la-ciudadania/proteccion-datos/pagina-master-rat1/actividad-13.html',
    }),
    dpia: unknown('Ni el reial decret ni la política ni la fitxa del registre esmenten cap avaluació d’impacte, i no n’hem trobat cap de publicada.'),
    ensConformity: f('partial', 'official', ['bono-cultural-joven-rat-cultura', 'bono-cultural-joven-real-decreto'], 'La fitxa del registre i l’article 15.4.e) del reial decret diuen que s’apliquen les mesures de l’annex II del Reial decret 311/2022 i la política de seguretat del Ministeri aprovada per l’Ordre CLT/832/2024. Invocar la norma no és declarar-s’hi conforme: no hem trobat cap declaració ni certificació de conformitat de la plataforma del bo ni la categoria del sistema.'),
    dpo: f('yes', 'official', ['bono-cultural-joven-real-decreto', 'bono-cultural-joven-politica-privacidad'], 'El reial decret identifica el delegat de protecció de dades amb el càrrec, l’adreça postal i el correu electrònic; per a l’exercici de drets, el registre remet també al delegat de la FNMT-RCM com a encarregada.', {
      contact: 'dpd@cultura.gob.es',
    }),
    offlineAlternative: f('no', 'official', ['bono-cultural-joven-real-decreto'], 'L’article 10.3 obliga a presentar la sol·licitud per mitjans electrònics, a través de l’aplicació informàtica específica del programa. L’aplicació mòbil no és imprescindible, perquè el tràmit es pot fer des del web, però fora del canal electrònic no hi ha cap via presencial ni postal per demanar l’ajuda.'),
    accessibilityStatement: f('partial', 'official', ['bono-cultural-joven-accesibilidad'], 'El web es declara «parcialmente conforme» amb el Reial decret 1112/2018 per enllaços amb text no significatiu, del tipus «aquí» o «pinche aquí» (requisit 9.2.4.4 de la UNE-EN 301549:2022). La declaració es va preparar el 16 de juliol del 2024 a partir d’un informe de l’Observatorio de Accesibilidad Web i cobreix el lloc web, no l’aplicació mòbil.', {
      url: 'https://bonoculturajoven.gob.es/accesibilidad.html',
    }),
    mandatoryRetention: f('yes', 'official', ['bono-cultural-joven-rat-cultura', 'bono-cultural-joven-ley-38-2003', 'bono-cultural-joven-real-decreto'], 'El registre conserva les dades mentre se’n puguin derivar responsabilitats, amb els terminis de la normativa de subvencions i la d’arxius: el dret de l’Administració a reconèixer o liquidar el reintegrament prescriu als quatre anys. Mentre l’expedient de la subvenció sigui viu, la supressió cedeix davant l’obligació legal de conservar-lo.', {
      norm: 'Llei 38/2003, article 39.1, i Reial decret 401/2026, article 15.4.h)',
    }),
  },
  dataSummary:
    'La sol·licitud creua la identitat de la persona jove amb la data de naixement, la residència i la comprovació de requisits, i el consum del bo deixa el rastre de les compres culturals fetes amb la targeta que emet Correos. És un cas on la dada sensible no és la identitat sinó el que s’hi compra: llibres, entrades i subscripcions diuen molt de les aficions i les idees d’una persona.',
  dataCollection: [
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['bono-cultural-joven-politica-privacidad'], note: 'DNI o NIE per comprovar els requisits de l’ajuda.' }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bono-cultural-joven-politica-privacidad'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['bono-cultural-joven-real-decreto'], note: 'És el requisit central: complir divuit anys durant l’any de la convocatòria.' }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['bono-cultural-joven-real-decreto'], note: 'Residència legal a Espanya, requisit de l’ajuda, i adreça d’enviament de la targeta.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['bono-cultural-joven-politica-privacidad'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bono-cultural-joven-politica-privacidad'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['bono-cultural-joven-real-decreto'], note: 'El consum del bo s’ha de justificar per categories culturals; Correos emet i gestiona els mitjans de pagament.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bono-cultural-joven-politica-privacidad'], note: 'Correos actua com a encarregat per als mitjans de pagament i l’emissió de la targeta.' }),
    row('nivell-d-ingressos', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['bono-cultural-joven-real-decreto'], note: 'L’ajuda no està condicionada a la renda de la persona beneficiària.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['bono-cultural-joven-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['bono-cultural-joven-app-store'], 'L’etiqueta declara «No se recopilan datos».'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi del trànsit de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['bono-cultural-joven-politica-privacidad'], 'Cap finalitat publicitària: el tractament s’empara en l’obligació legal i en la missió d’interès públic.'),
    profiling: f('no', 'official', ['bono-cultural-joven-politica-privacidad'], 'La política no preveu elaboració de perfils.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['bono-cultural-joven-politica-privacidad'], 'Administracions públiques competents i entitats obligades per la normativa europea, tributària i de prevenció del blanqueig de capitals; FNMT-RCM, Correos i Tragsatec hi actuen com a encarregats del tractament.'),
    intraGroupSharing: na('El responsable és un ministeri; no hi ha grup empresarial.'),
    dataBrokerSales: f('no', 'official', ['bono-cultural-joven-politica-privacidad'], 'La política no preveu cap cessió comercial.'),
    internationalTransfers: f('yes', 'official', ['bono-cultural-joven-rat-cultura', 'bono-cultural-joven-politica-privacidad'], 'La política no en diu res, però el registre d’activitats del ministeri les llista nominalment: AWS, Zendesk, Snowflake, Braze, Dynatrace i Meta als Estats Units, a l’empara del marc de privadesa de dades, i Majorel/Teleperformance a Colòmbia amb clàusules contractuals tipus.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència de la convocatòria.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['bono-cultural-joven-politica-privacidad'], 'Es conserven mentre calgui per executar el programa i pels terminis de la normativa de subvencions, sense xifres concretes per categoria de dada.'),
    dataAfterDeletion: unknown('La política no descriu què passa amb les dades quan una persona renuncia a l’ajuda o demana la supressió.'),
  },
  accountDeletion: {
    possible: f('partial', 'official', ['bono-cultural-joven-politica-privacidad'], 'La supressió s’ha de demanar al responsable, i queda limitada pel deure de conservar l’expedient de la subvenció.'),
    selfService: f('no', 'official', ['bono-cultural-joven-politica-privacidad'], 'No hi ha cap opció d’eliminació dins de l’aplicació ni del web de la convocatòria.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Redacta una sol·licitud de supressió adreçada a la Dirección General de Derechos Culturales del Ministeri de Cultura.',
      'Presenta-la per la seu electrònica del Ministeri, per correu postal o per registre presencial.',
      'Com a alternativa, escriu al delegat de protecció de dades del Ministeri o al de la FNMT-RCM.',
      'Guarda el justificant de registre: és la prova de la data d’inici del termini de resposta.',
    ],
    obstacles:
      'L’ajuda és una subvenció pública: mentre l’expedient sigui viu o estigui subjecte a control financer, el dret de supressió cedeix davant l’obligació legal de conservar-lo.',
    dataRetained: 'L’expedient de la subvenció i la justificació de la despesa, pels terminis de la normativa de subvencions.',
    sources: ['bono-cultural-joven-politica-privacidad'],
  },
  userRights: {
    dataExport: unknown('No hi ha eina d’autoservei de descàrrega; la portabilitat s’ha de demanar per la seu electrònica.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['bono-cultural-joven-politica-privacidad'], 'Per la seu electrònica del Ministeri de Cultura, per correu postal o escrivint al delegat de protecció de dades.', {
      url: 'mailto:dpd@cultura.gob.es',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: na('No hi ha publicitat al servei.'),
    telemetryOptOut: unknown('No hem trobat documentació sobre analítica dins de l’aplicació.'),
    granularControls: f('no', 'official', ['bono-cultural-joven-politica-privacidad'], 'El tractament és obligatori per rebre l’ajuda i no admet opcions.'),
    defaultPosture: 'protective',
    darkPatterns: f('no', 'editorial', [], 'No hem trobat patrons enganyosos. Sí que hi ha un descuit: la fitxa de l’App Store enllaça la política de la convocatòria anterior.'),
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades.'),
    transportEncryption: unknown('No hem trobat documentació tècnica publicada sobre el xifratge del servei.'),
    atRestEncryption: unknown('No consta informació pública.'),
    mfa: unknown('No hem trobat documentació sobre com s’autentica la persona beneficiària dins de l’aplicació.'),
    independentAudits: unknown('No consten auditories específiques d’aquesta plataforma; la FNMT, com a encarregada, té ISO 27001 i adequació a l’ENS, però no hem trobat que s’apliqui expressament a aquest servei.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hi ha security.txt al domini bonoculturajoven.gob.es i no hem trobat cap canal publicat.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política vigent de la convocatòria encara cita el Real Decreto 191/2023 com a norma aplicable, mentre que la convocatòria actual es regeix pel Real Decreto 401/2026. Que una política de privadesa d’un programa públic no s’actualitzi amb la seva pròpia norma és un indici de manteniment feble, encara que el contingut substantiu no canviï gaire. La cerca d’incidents no ha donat cap resolució de l’AEPD: el frau documentat per la premsa és sobre l’ús de l’ajuda, no sobre les dades.',
    openQuestions: [
      'Quin repartiment exacte de responsabilitats hi ha entre el Ministeri, la FNMT, Correos i Tragsatec?',
      'Quant de temps es conserva el detall de les compres fetes amb el bo?',
    ],
  },
}

/* ═══════════════════════ BBC: World News & Stories ═══════════════════════ */
const bbc: AppSeed = {
  slug: 'bbc',
  name: 'BBC: World News & Stories',
  company: 'bbc-studios',
  categories: ['noticies-i-mitjans'],
  tagline: 'Fora del Regne Unit, l’aplicació de la BBC es regeix per la política comercial de BBC Studios, amb subhastes publicitàries en temps real i dades comprades a intermediaris',
  summary:
    'La BBC té dues polítiques de privadesa: una per a qui és al Regne Unit i una altra, la de la seva filial comercial BBC Studios, per a la resta. A Espanya s’aplica la segona, que descriu publicitat personalitzada, subhastes programàtiques en temps real i l’ús de dades de segmentació comprades a intermediaris com Experian. L’etiqueta de l’App Store ho confirma: declara rastreig amb ubicació, historial de navegació i identificadors.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Regne Unit; autoritat de control: Information Commissioner’s Office',
  userBase: 'Servei internacional de notícies amb audiència de centenars de milions de persones',
  links: {
    website: 'https://www.bbc.com/news',
    privacyPolicy: 'https://www.bbc.com/pages/privacy-policy',
    appStore: appStore('364147881'),
  },
  accountRequired: f('no', 'official', ['bbc-studios-privacy-policy'], 'Es pot llegir sense compte, però la política diu que llavors s’assigna un identificador únic al dispositiu. Cal compte per a butlletins i subscripcions de pagament.'),
  openSource: f('partial', 'official', ['bbc-security-disclosure'], 'La BBC manté repositoris públics a GitHub, però l’aplicació de notícies no és de codi obert.', { licence: 'Privativa' }),
  dataSummary:
    'Quines notícies llegeixes, quanta estona t’hi estàs i amb quina freqüència tornes és, per a un mitjà, una radiografia ideològica. La política ho anomena «informació inferida» i l’afegeix a un perfil publicitari que combina dades pròpies, correu electrònic xifrat amb funció resum per creuar plataformes i segments comprats a intermediaris de dades.',
  dataCollection: [
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bbc-studios-privacy-policy'], note: 'Només amb compte BBC.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['bbc-studios-privacy-policy'], note: 'La política descriu l’ús del correu xifrat amb funció resum per identificar la mateixa persona en plataformes de tercers.' }),
    row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['bbc-studios-privacy-policy'], note: 'L’edat serveix per construir cohorts publicitàries.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['bbc-app-store'] }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'recomanacions-algoritmiques'], sources: ['bbc-app-store', 'bbc-studios-privacy-policy'], note: 'Què llegeixes, quanta estona i amb quina freqüència: la política ho anomena «informació inferida».' }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['bbc-app-store', 'bbc-studios-privacy-policy'], note: 'L’identificador publicitari mòbil s’envia a les subhastes programàtiques en temps real.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['bbc-app-store', 'bbc-studios-privacy-policy'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['bbc-studios-privacy-policy'], note: 'La política llista l’adreça IP entre les dades que es comparteixen a la subhasta.' }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['bbc-studios-privacy-policy'], note: 'Al Regne Unit i a l’EEE, amb consentiment.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['bbc-studios-privacy-policy'], note: 'El perfil publicitari combina dades pròpies amb segments comprats a intermediaris de dades, com les dades Mosaic d’Experian.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'recomanacions-algoritmiques'], sources: ['bbc-app-store', 'bbc-studios-privacy-policy'] }),
    row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['bbc-app-store'], note: 'L’etiqueta el declara com a dada no vinculada amb la identitat.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['bbc-app-store'] }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bbc-studios-privacy-policy'], note: 'Subscripcions de pagament de BBC.com; Stripe hi actua com a responsable independent.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['bbc-app-store', 'bbc-studios-privacy-policy'], 'L’etiqueta declara ubicació, historial de navegació, identificadors i dades d’ús com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['bbc-studios-privacy-policy'], 'L’identificador publicitari mòbil es comparteix a les subhastes en temps real.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['bbc-studios-privacy-policy'], 'Els socis de la subhasta actuen sovint com a responsables independents del tractament, segons la mateixa política.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['bbc-studios-privacy-policy'], 'Publicitat premium amb dades pròpies, subhastes programàtiques en temps real i publicitat en serveis de tercers.', {
      optOutUrl: 'https://www.bbc.com/account',
    }),
    profiling: f('yes', 'official', ['bbc-studios-privacy-policy'], 'La política descriu un perfil d’anunci amb demografia i interessos, ampliat amb segments comprats a intermediaris de dades.'),
    aiTraining: f('partial', 'official', ['bbc-studios-privacy-policy'], 'Les dades d’ús entrenen els models agregats de recomanació, i la política diu que fa servir aprenentatge automàtic i grans models de llenguatge sobre les seves dades. No consta cap cessió a tercers per entrenar models generalistes.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['bbc-studios-privacy-policy'], 'Socis publicitaris de la subhasta, proveïdors, Stripe per als pagaments, contingut incrustat de xarxes socials i autoritats quan la llei ho exigeix.'),
    intraGroupSharing: f('yes', 'official', ['bbc-studios-privacy-policy'], 'Amb el servei públic de la BBC, UKTV i BritBox International, per a recerca, anàlisi, màrqueting i servei d’anuncis.'),
    dataBrokerSales: f('partial', 'official', ['bbc-studios-privacy-policy'], 'No consta que vengui dades, però sí que en compra: la política cita expressament intermediaris de dades com Experian per a la segmentació.'),
    internationalTransfers: f('yes', 'official', ['bbc-studios-privacy-policy'], 'Proveïdors i plataformes publicitàries fora del Regne Unit i de l’EEE, principalment als Estats Units.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència de la BBC sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['bbc-studios-privacy-policy'], 'El termini més clar és el del compte: s’elimina després de 18 mesos d’inactivitat, amb avisos previs, si no hi ha subscripció activa.'),
    dataAfterDeletion: f('partial', 'official', ['bbc-account-delete'], 'La informació del compte s’esborra immediatament, però es conserva un registre d’ús desvinculat i tot allò que s’hagi publicat o comentat.'),
    periods: [{ dataType: 'identificador-de-compte', period: '18 mesos d’inactivitat', sources: ['bbc-studios-privacy-policy'] }],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['bbc-account-delete']),
    selfService: f('yes', 'official', ['bbc-account-delete'], 'Des dels ajustos del compte BBC, reintroduint la contrasenya. És irreversible.'),
    directUrl: 'https://account.bbc.com/account',
    difficulty: 'easy',
    steps: [
      'Inicia la sessió amb el teu compte BBC.',
      'Obre «Your account» des de la barra de navegació de qualsevol web de la BBC.',
      'Entra a «Settings».',
      'A l’apartat «Delete your account», tria «I want to delete my account» i torna a escriure la contrasenya.',
      'Confirma amb «Delete account».',
    ],
    obstacles:
      'L’eliminació és definitiva i no es pot desfer. Els comptes de menors de 13 anys que han perdut la contrasenya no es poden eliminar ni recuperar.',
    dataRetained: 'Un registre d’ús que la BBC diu que ja no es pot vincular amb la persona, i el contingut publicat o comentat.',
    sources: ['bbc-account-delete', 'bbc-studios-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['bbc-data-request'], 'Amb compte BBC es pot demanar la informació des dels ajustos, però la pàgina adverteix que no inclou tot; per a serveis de BBC Studios cal anar pel canal de protecció de dades.', {
      url: 'https://www.bbc.co.uk/usingthebbc/privacy/what-info-do-you-have-about-me/',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['bbc-studios-privacy-policy'], 'Delegat de protecció de dades de BBC Studios, amb un compromís de resposta de cinc dies hàbils i un procediment intern de recurs.', {
      url: 'mailto:dataprotection@bbc.com',
      responseTimeDays: 5,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['bbc-studios-privacy-policy'], 'Es pot desactivar l’ús del correu xifrat per a publicitat personalitzada des del compte BBC i gestionar les galetes, però la publicitat programàtica depèn de l’identificador del sistema operatiu.', {
      url: 'https://www.bbc.com/account',
    }),
    telemetryOptOut: f('partial', 'official', ['bbc-studios-privacy-policy'], 'Hi ha configuració de galetes i de privadesa, i es respecta el senyal Global Privacy Control a escala de navegador o dispositiu, però no s’aplica necessàriament a les dades associades al compte.'),
    granularControls: f('yes', 'official', ['bbc-studios-privacy-policy'], 'Configuració de galetes, de personalització i de comunicacions dins del compte.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['bbc-studios-privacy-policy'], 'La política admet que no respon al senyal «Do Not Track» i que el Global Privacy Control no arriba al perfil del compte: dos controls que la persona creu que l’emparen i que, en part, no ho fan.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description:
          'Una persona a Espanya que busca «la política de privadesa de la BBC» troba primer la del servei públic britànic, que no li aplica; la que la regeix és la de la filial comercial, amb publicitat programàtica.',
        sources: ['bbc-privacy-policy-uk', 'bbc-studios-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: na('L’aplicació distribueix continguts públics i no transporta comunicacions privades.'),
    transportEncryption: unknown('No hem trobat documentació tècnica específica; la política només parla de salvaguardes organitzatives i tecnològiques adequades.'),
    atRestEncryption: unknown('No consta informació pública específica.'),
    mfa: unknown('No hem trobat cap pàgina d’ajuda de la BBC que documenti l’autenticació en dos passos del compte.'),
    independentAudits: unknown('No consten certificacions ni auditories de seguretat publicades.'),
    bugBounty: f('yes', 'official', ['bbc-security-disclosure'], 'Programa de recompenses amb àmbit definit: dominis amb security.txt a l’arrel i repositoris de github.com/bbc amb fitxer SECURITY.md.', {
      url: 'https://www.bbc.com/backstage/security-disclosure-policy/',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['bbc-security-disclosure'], 'Política publicada i fitxer security.txt vàlid a bbc.com i bbc.co.uk, amb contacte a security@bbc.co.uk.'),
  },
  alternatives: [
    {
      app: 'bbc-world-service',
      comparability: 'partial',
      rationale:
        'L’aplicació del World Service ofereix el mateix periodisme de la BBC en castellà amb una etiqueta de privadesa molt menys invasiva: cap ubicació ni historial de navegació vinculats amb la identitat.',
      tradeOffs:
        'Té menys contingut en anglès i menys funcions de personalització, i la publicitat dels llocs del World Service també la gestiona BBC Studios.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El desdoblament de polítiques segons on ets és el punt central: la versió britànica, de servei públic, no és la que s’aplica a Espanya. La política de BBC Studios té el mèrit de descriure obertament la compra de segments a intermediaris de dades, cosa que poques polítiques fan; el problema no és la redacció sinó el tractament que descriu. Els dos incidents documentats del grup afecten dades d’empleats i de pensionistes, no de persones usuàries de l’aplicació.',
    openQuestions: [
      'La BBC té representant a la Unió Europea segons l’article 27 del RGPD? Cap de les dues polítiques en nomena cap.',
      'El compte BBC admet verificació en dos passos?',
    ],
  },
}

/* ═══════════════════════ BBC World Service ═══════════════════════ */
const bbcWorldService: AppSeed = {
  slug: 'bbc-world-service',
  name: 'BBC World Service',
  company: 'bbc',
  categories: ['noticies-i-mitjans'],
  tagline: 'La mateixa casa amb una etiqueta molt més sòbria: rastreig limitat a dades d’ús i cap ubicació vinculada amb la identitat',
  summary:
    'L’aplicació dels serveis en altres llengües de la BBC, inclòs BBC Mundo, es regeix per l’avís de privadesa del servei públic, no per la política comercial de BBC Studios. Invoca la missió d’interès públic i les exempcions periodístiques, i la seva etiqueta de l’App Store és molt menys invasiva que la de l’aplicació de notícies en anglès. Ara bé, la publicitat que es mostra fora del Regne Unit la segueix gestionant BBC Studios com a responsable independent.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Regne Unit; autoritat de control: Information Commissioner’s Office',
  userBase: 'Serveis del World Service en desenes de llengües',
  links: {
    website: 'https://www.bbc.com/mundo',
    privacyPolicy: 'https://www.bbc.com/mundo/institucional-36400009',
    appStore: appStore('6761256736'),
  },
  accountRequired: f('no', 'official', ['bbc-world-service-aviso-privacidad'], 'L’avís diu que moltes pàgines del World Service es poden fer servir sense iniciar la sessió.'),
  openSource: f('partial', 'official', ['bbc-security-disclosure'], 'La BBC publica codi a GitHub, però aquesta aplicació no és de codi obert.', { licence: 'Privativa' }),
  dataSummary:
    'Per a un servei informatiu internacional, la dada delicada no és el nom sinó el que llegeixes: en quina llengua, sobre quin país i amb quina insistència. L’avís reconeix que recull identificadors de dispositiu i de publicitat, però l’etiqueta de l’App Store els declara majoritàriament com a dades no vinculades amb la identitat.',
  dataCollection: [
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bbc-world-service-app-store', 'bbc-world-service-aviso-privacidad'], note: 'Butlletins i contacte amb la redacció.' }),
    row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bbc-world-service-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'mesura-publicitaria'], sources: ['bbc-world-service-app-store'], note: 'És l’única categoria que l’etiqueta declara com a dada utilitzada per rastrejar.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['bbc-world-service-app-store', 'bbc-world-service-aviso-privacidad'] }),
    row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['bbc-world-service-aviso-privacidad'], note: 'L’avís esmenta identificadors de publicitat; l’etiqueta els situa entre les dades no vinculades amb la identitat.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['bbc-world-service-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['bbc-world-service-aviso-privacidad'] }),
    row('llengua', 'yes', { linked: 'unknown', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts'], sources: ['bbc-world-service-aviso-privacidad'], note: 'Idioma i regió: en un servei internacional, diu força sobre qui ets i on ets.' }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['bbc-world-service-aviso-privacidad'], note: 'Missatges, fotos, vídeos i àudio que s’envien a la redacció o a les enquestes.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['bbc-world-service-app-store'] }),
    row('conviccions-i-opinions', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', level: 'official', purposes: ['moderacio-de-continguts', 'prestacio-del-servei'], sources: ['bbc-world-service-aviso-privacidad'], note: 'L’avís invoca les exempcions periodístiques i de llibertat d’expressió també per a categories especials de dades quan hi ha finalitat editorial.' }),
  ],
  tracking: {
    crossAppTracking: f('partial', 'official', ['bbc-world-service-app-store'], 'L’etiqueta declara només dades d’ús com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['bbc-world-service-aviso-privacidad'], 'L’avís esmenta identificadors de dispositiu i de publicitat entre les dades recollides automàticament.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['bbc-world-service-aviso-privacidad', 'bbc-world-service-app-store'], 'Socis publicitaris i proveïdors de mesura d’audiència; l’etiqueta declara publicitat de tercers com a dada no vinculada.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['bbc-world-service-aviso-privacidad'], 'Els serveis del World Service poden incloure publicitat fora del Regne Unit: contextual i, quan la llei ho permet, personalitzada limitada, gestionada per BBC Studios com a responsable independent.'),
    profiling: unknown('L’avís del servei públic no descriu elaboració de perfils; remet a la política de BBC Studios per a la part publicitària.'),
    aiTraining: unknown('L’avís no esmenta l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['bbc-world-service-aviso-privacidad'], 'Proveïdors de tecnologia, allotjament i núvol, xarxes de distribució, analítica i mesura d’audiència, socis publicitaris, plataformes socials, reguladors i auditors.'),
    intraGroupSharing: f('yes', 'official', ['bbc-world-service-aviso-privacidad'], 'Amb la resta del grup BBC, inclosa BBC Studios per a la publicitat.'),
    dataBrokerSales: unknown('L’avís no parla de compra ni de venda de dades a intermediaris; la política de BBC Studios, que regeix la publicitat, sí que descriu la compra de segments.'),
    internationalTransfers: f('yes', 'official', ['bbc-world-service-aviso-privacidad'], 'Reconeix el tractament fora del país de residència amb salvaguardes contractuals genèriques, sense citar ni les clàusules tipus ni el marc de transferències amb els Estats Units.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència de la BBC.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['bbc-world-service-aviso-privacidad'], 'L’avís només dona criteris (finalitats, obligacions legals, seguretat i auditoria, fins editorials i d’arxiu), sense cap termini concret.'),
    dataAfterDeletion: f('partial', 'official', ['bbc-account-delete'], 'El compte BBC és compartit: s’esborra immediatament, però queda el registre d’ús desvinculat i el contingut publicat.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['bbc-account-delete']),
    selfService: f('yes', 'official', ['bbc-account-delete'], 'Pel mateix camí que la resta de serveis de la BBC, des dels ajustos del compte.'),
    directUrl: 'https://account.bbc.com/account',
    difficulty: 'easy',
    steps: [
      'Inicia la sessió amb el teu compte BBC.',
      'Obre «Your account» i entra a «Settings».',
      'A «Delete your account», tria «I want to delete my account» i torna a escriure la contrasenya.',
      'Confirma amb «Delete account»; l’operació no es pot desfer.',
    ],
    dataRetained: 'Registre d’ús desvinculat i contingut publicat o comentat.',
    sources: ['bbc-account-delete'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['bbc-data-request', 'bbc-world-service-aviso-privacidad'], 'L’avís reconeix la portabilitat i la BBC permet demanar la informació des dels ajustos del compte, amb excepcions.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['bbc-world-service-aviso-privacidad'], 'Delegat de protecció de dades de la BBC, amb adreça postal a Broadcasting House i reclamació davant l’autoritat local o l’ICO.', {
      url: 'mailto:dataprotection.officer@bbc.co.uk',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['bbc-world-service-aviso-privacidad', 'bbc-studios-privacy-policy'], 'Els controls publicitaris viuen a la política de BBC Studios i al compte BBC, no a l’avís del World Service.'),
    telemetryOptOut: f('partial', 'official', ['bbc-world-service-aviso-privacidad'], 'Consentiment per a galetes i analítica quan la llei ho exigeix, sense un panell propi documentat dins de l’aplicació.'),
    granularControls: f('partial', 'official', ['bbc-world-service-aviso-privacidad'], 'Configuració de butlletins i de consentiment; la resta depèn del compte BBC.'),
    defaultPosture: 'mixed',
    darkPatterns: f('no', 'editorial', [], 'No hem trobat patrons enganyosos en aquesta aplicació. La confusió, si n’hi ha, és de mapa: saber quina de les tres polítiques de la BBC t’aplica.'),
  },
  security: {
    e2ee: na('L’aplicació distribueix continguts públics.'),
    transportEncryption: unknown('L’avís només parla de mesures adequades, sense detall tècnic.'),
    atRestEncryption: unknown('No consta informació pública.'),
    mfa: unknown('No hem trobat documentació sobre verificació en dos passos del compte BBC.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: f('yes', 'official', ['bbc-security-disclosure'], 'El mateix programa de recompenses del grup BBC.'),
    vulnerabilityDisclosure: f('yes', 'official', ['bbc-security-disclosure'], 'security.txt vàlid a bbc.com i bbc.co.uk amb contacte a security@bbc.co.uk.'),
  },
  alternatives: [
    {
      app: 'bbc',
      comparability: 'partial',
      rationale:
        'L’aplicació de notícies en anglès té molt més contingut i personalització, si el que pesa és l’oferta informativa.',
      tradeOffs:
        'Ho paga amb una etiqueta de privadesa molt més invasiva: rastreig amb ubicació, historial de navegació i identificadors publicitaris.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La comparació amb la fitxa de l’aplicació de notícies és el valor d’aquesta: la mateixa organització, el mateix periodisme i dues declaracions de privadesa molt diferents segons quina societat del grup publiqui l’aplicació. L’avís del World Service és l’únic dels documents de la BBC redactat en castellà.',
    openQuestions: [
      'Quin mecanisme concret empara les transferències internacionals d’aquest servei? L’avís no cita ni clàusules tipus ni el marc amb els Estats Units.',
      'Quins terminis de conservació s’apliquen als missatges que s’envien a la redacció?',
    ],
  },
}

/* ═══════════════════════ VivaGym MyApp ═══════════════════════ */
const vivagym: AppSeed = {
  slug: 'vivagym',
  name: 'VivaGym MyApp',
  company: 'el-gym-iberia',
  categories: ['benestar-i-activitat-fisica'],
  tagline: 'Dades antropomètriques i registres d’entrada al gimnàs, amb el consentiment com a única base legal i una aplicació feta per una tercera empresa',
  summary:
    'L’aplicació dels gimnasos VivaGym la desenvolupa Intelligent System Vitale, la plataforma MyVitale, però la responsable del tractament és la societat del grup titular del club. La política declara dades antropomètriques per a dietes i entrenaments, dades bancàries i registres d’entrada i sortida pels torns d’accés, i fa descansar gairebé tot el tractament en el consentiment de la inscripció. L’etiqueta de l’App Store no declara cap dada per rastrejar.',
  platforms: ['ios', 'android'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya; autoritat de control: Agencia Española de Protección de Datos',
  userBase: 'Clubs de les marques VivaGym i Altafit a Espanya i Portugal',
  links: {
    website: 'https://www.vivagym.com/',
    privacyPolicy: 'https://www.vivagym.com/es-es/privacidad-y-proteccion-de-datos/',
    appStore: appStore('6448747670'),
  },
  accountRequired: f('yes', 'official', ['vivagym-politica-privacidad'], 'L’aplicació és per a persones abonades: l’alta es fa en inscriure’s al club.'),
  openSource: unknown('No hem trobat cap repositori públic del codi.'),
  dataSummary:
    'Un gimnàs sap quan entres i quan surts, cada dia. Si a més hi afegeixes pes, mesures i entrenaments per rebre dietes i plans personalitzats, el registre resultant és un diari de salut i de rutines, amb les dades bancàries de la quota al costat.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['vivagym-politica-privacidad', 'vivagym-app-store'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['vivagym-politica-privacidad'], note: 'DNI a la inscripció.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['vivagym-politica-privacidad', 'vivagym-app-store'], note: 'També per a la segmentació d’audiències en plataformes de màrqueting, segons la política.' }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['vivagym-politica-privacidad'], note: 'Amb consentiment, nom i telèfon es faciliten als entrenadors personals col·laboradors.' }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['vivagym-politica-privacidad'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['vivagym-politica-privacidad'] }),
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['vivagym-politica-privacidad'], note: 'Fotografia del perfil i videovigilància a l’entrada i als torns, amb 30 dies de conservació.' }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['vivagym-politica-privacidad', 'vivagym-app-store'], note: 'Dades antropomètriques per a dietes i entrenaments personalitzats; l’etiqueta de l’App Store declara «salud y forma física» vinculada amb la identitat.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['vivagym-politica-privacidad'], note: 'Compte bancari o targeta per a la quota.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['vivagym-app-store'], note: 'Inclou els registres d’entrada i sortida dels torns d’accés al club.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['vivagym-politica-privacidad'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['vivagym-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['vivagym-app-store'] }),
    row('dades-biometriques', 'unknown', { linked: 'unknown', tracking: 'no', shared: 'unknown', level: 'unknown', note: 'La política no esmenta empremta ni reconeixement facial per accedir al club; parla de torns amb videovigilància. No hem pogut comprovar-ho al club.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['vivagym-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['vivagym-app-store'], 'L’etiqueta no declara dades de publicitat.'),
    thirdPartyTrackersPresent: f('partial', 'official', ['vivagym-politica-privacidad'], 'La política esmenta plataformes de màrqueting per a la segmentació d’audiències, sense anomenar-les.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['vivagym-politica-privacidad'], 'Comunicacions comercials amb consentiment revocable i segmentació d’audiències en plataformes de màrqueting, que la política diu que es fa sense perfilat individual.'),
    profiling: f('partial', 'official', ['vivagym-politica-privacidad'], 'La política nega el perfilat individual per a màrqueting, però sí que hi ha personalització de dietes i entrenaments a partir de les dades antropomètriques.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['vivagym-politica-privacidad'], 'Entrenadors personals col·laboradors (nom i telèfon, amb consentiment), proveïdor de còpies de seguretat a la Unió Europea, plataforma de recursos humans i plataformes de màrqueting.'),
    intraGroupSharing: f('yes', 'official', ['vivagym-politica-privacidad'], 'La política identifica vuit societats del grup i diu que la responsable és la titular del club on t’inscrius.'),
    dataBrokerSales: f('no', 'official', ['vivagym-politica-privacidad'], 'La política diu que no se cedeixen dades fora dels casos que hi enumera.'),
    internationalTransfers: f('no', 'official', ['vivagym-politica-privacidad'], 'No se’n declara cap; el proveïdor de còpies de seguretat és a la Unió Europea.', { mechanism: 'none' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['vivagym-politica-privacidad'], 'Mentre hi hagi interès mutu i després bloqueig i destrucció, amb quatre anys per obligacions fiscals i sis per les comptables; la videovigilància, 30 dies.'),
    dataAfterDeletion: f('partial', 'official', ['vivagym-politica-privacidad'], 'Les dades passen a bloqueig i es conserven pels terminis fiscals i comptables.'),
    periods: [
      { dataType: 'fotografies-i-videos', period: '30 dies (videovigilància)', sources: ['vivagym-politica-privacidad'] },
      { dataType: 'dades-de-pagament', period: 'Fins a sis anys per obligacions comptables', sources: ['vivagym-politica-privacidad'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['vivagym-politica-privacidad', 'vivagym-baja'], 'Es pot donar de baixa la quota en línia, però no hem trobat cap procediment documentat per eliminar el compte i les dades de l’aplicació: cal exercir el dret de supressió.'),
    selfService: f('partial', 'official', ['vivagym-baja'], 'La baixa de la quota es tramita des de l’àrea de clients del web, sense trucar ni anar al club.'),
    directUrl: 'https://www.vivagym.com/es-es/contrato-y-desistimiento/',
    difficulty: 'medium',
    steps: [
      'Entra a l’àrea de clients del web de VivaGym amb les teves credencials.',
      'Tramita la sol·licitud de baixa abans del dia 15 o del dia 20 del mes, segons el club, perquè tingui efecte el mes en curs.',
      'Espera el correu de confirmació: la baixa no és ferma fins que arriba.',
      'Per esborrar també les dades, escriu al canal de protecció de dades del grup invocant el dret de supressió.',
    ],
    obstacles:
      'La baixa de la quota i l’esborrat de les dades són dos tràmits diferents, i només el primer està documentat. El dia límit del mes varia segons el club.',
    dataRetained: 'Dades de facturació durant quatre anys pels terminis fiscals i sis pels comptables.',
    sources: ['vivagym-baja', 'vivagym-politica-privacidad'],
  },
  userRights: {
    dataExport: unknown('No hi ha cap eina d’autoservei de descàrrega documentada; la portabilitat s’ha de demanar al canal de protecció de dades.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['vivagym-politica-privacidad'], 'La política reconeix tots els drets i indica una bústia de protecció de dades i una adreça postal a Màlaga, però no nomena cap delegat ni ofereix formulari.'),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['vivagym-politica-privacidad'], 'El consentiment publicitari es dona a l’alta amb una casella i es pot revocar en qualsevol moment.'),
    telemetryOptOut: unknown('No hem trobat cap control d’analítica ni de diagnòstics dins de l’aplicació.'),
    granularControls: unknown('No hem trobat documentació sobre un panell de privadesa dins de l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['vivagym-baja'], 'La baixa és autoservei, però està condicionada a un dia límit del mes que varia segons el club i no és ferma fins a rebre un correu de confirmació: una finestra estreta que fa fàcil pagar un mes de més.'),
    darkPatternList: [
      {
        type: 'other',
        severity: 'medium',
        description:
          'La cancel·lació només té efecte si es tramita abans del dia 15 o del 20 del mes segons el club, i cal esperar una confirmació per correu perquè sigui vàlida.',
        sources: ['vivagym-baja'],
      },
    ],
  },
  security: {
    e2ee: na('L’aplicació no transporta comunicacions privades xifrables d’extrem a extrem.'),
    transportEncryption: unknown('No hem trobat documentació tècnica publicada.'),
    atRestEncryption: unknown('No consta informació pública.'),
    mfa: unknown('No hem trobat documentació sobre verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: f('no', 'official', ['vivagym-politica-privacidad'], 'No hi ha fitxer security.txt al domini i l’únic procediment publicat és el de resposta interna davant violacions de seguretat, amb notificació a l’Agència en 72 hores.'),
  },
  alternatives: [
    {
      app: 'basic-fit',
      comparability: 'equivalent',
      rationale: 'Cadena de gimnasos del mateix segment amb aplicació pròpia, útil per comparar declaracions.',
    },
    {
      app: 'strava',
      comparability: 'complementary',
      rationale:
        'Si el que vols és registrar l’activitat física sense lligar-la al club, una aplicació d’entrenament independent no necessita les teves dades bancàries ni els teus registres d’accés.',
      tradeOffs: 'No substitueix la gestió de l’abonament ni la reserva de classes.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Cal distingir tres entitats: qui desenvolupa l’aplicació (Intelligent System Vitale, la plataforma MyVitale), qui n’és responsable del tractament (la societat del grup titular del club) i quina política enllaça l’App Store (una pàgina de selecció d’idioma). La política fa descansar el tractament en el consentiment, i no en l’execució del contracte, cosa poc habitual en un servei d’abonament. El grup va comprar Synergym el 2026, que arrossega una filtració documentada anterior a l’adquisició; no és atribuïble a aquesta aplicació, però queda registrada com a incident del grup. La sanció de l’AEPD a un gimnàs per exigir l’empremta dactilar és d’una altra cadena i no s’ha d’atribuir a VivaGym.',
    openQuestions: [
      'Hi ha procediment d’eliminació del compte i de les dades dins de l’aplicació?',
      'El contracte d’encarregat del tractament entre VivaGym i MyVitale no és públic.',
      'Els torns d’accés dels clubs fan servir alguna dada biomètrica?',
    ],
  },
}

/* ═══════════════════════ ForusApp ═══════════════════════ */
const forusapp: AppSeed = {
  slug: 'forusapp',
  name: 'ForusApp',
  company: 'forus-deporte-y-ocio',
  categories: ['benestar-i-activitat-fisica', 'esports-i-resultats'],
  tagline: 'Dades de salut i geolocalització en una aplicació que enllaça la política de l’empresa desenvolupadora en lloc de la del responsable',
  summary:
    'Forus gestiona instal·lacions esportives, moltes de titularitat municipal. La seva política de privadesa és de les poques d’aquest lot que diu obertament que l’aplicació la desenvolupa una tercera empresa amb contracte d’encarregat del tractament. La incoherència és a l’App Store, que enllaça la política de l’empresa desenvolupadora, MyVitale, on aquesta es presenta com a responsable i admet elaboració de perfils. La baixa de l’abonament, a diferència de la de VivaGym, s’ha de fer presencialment.',
  platforms: ['ios', 'android'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya; autoritat de control: Agencia Española de Protección de Datos',
  userBase: 'Instal·lacions esportives gestionades pel grup Forus a Espanya',
  links: {
    website: 'https://forus.es/',
    privacyPolicy: 'https://forus.es/politica-de-privacidad',
    terms: 'https://forus.es/terminos-condiciones',
    appStore: appStore('1357089462'),
  },
  accountRequired: f('yes', 'official', ['forusapp-politica-privacidad'], 'L’aplicació és per a persones abonades a un centre Forus.'),
  openSource: unknown('No hem trobat cap repositori públic del codi.'),
  dataSummary:
    'Al nom, el DNI i el compte bancari s’hi sumen els interessos esportius, la geolocalització de l’aplicació i, amb consentiment exprés, dades de salut per als serveis de fisioteràpia i estètica. Com que moltes instal·lacions són municipals, l’ús del servei també diu on vius.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['forusapp-politica-privacidad', 'forusapp-app-store'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['forusapp-politica-privacidad'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['forusapp-politica-privacidad', 'forusapp-app-store'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['forusapp-politica-privacidad'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['forusapp-politica-privacidad'] }),
    row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['forusapp-politica-privacidad'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['forusapp-politica-privacidad'] }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['forusapp-politica-privacidad', 'forusapp-app-store'], note: 'Amb consentiment exprés, informat i previ, per als serveis de fisioteràpia i estètica; l’etiqueta declara «salud y forma física» per a personalització.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts', 'prestacio-del-servei'], sources: ['forusapp-politica-privacidad'], note: 'La política parla d’interessos esportius.' }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['forusapp-politica-privacidad'], note: 'Geolocalització de l’aplicació amb consentiment revocable; la política diu que no se cedeix a tercers llevat de requeriment legal.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['forusapp-app-store'], note: 'L’etiqueta declara fotos o vídeos vinculats amb la identitat.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['forusapp-politica-privacidad'], note: 'Registres de servidor amb IP, navegador i sistema operatiu.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['forusapp-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['forusapp-app-store'] }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['forusapp-app-store'], note: 'L’aplicació inclou xat, segons la fitxa de l’App Store.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['forusapp-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['forusapp-app-store'], 'L’etiqueta no declara dades de publicitat.'),
    thirdPartyTrackersPresent: unknown('La política parla de proveïdors com a encarregats, sense anomenar cap eina d’analítica.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['forusapp-politica-privacidad'], 'Comunicacions comercials basades en el consentiment o en l’interès legítim, amb baixa indicada a cada comunicació. No consta publicitat de tercers.'),
    profiling: f('partial', 'official', ['forusapp-politica-privacidad', 'forusapp-myvitale-privacidad'], 'La política de Forus reconeix el dret d’oposar-se a l’elaboració de perfils automatitzats, i la de l’empresa desenvolupadora enumera l’elaboració de perfils entre les seves finalitats.'),
    aiTraining: unknown('Cap de les dues polítiques esmenta l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['forusapp-politica-privacidad'], 'Proveïdors com a encarregats del tractament, entre ells l’empresa desenvolupadora de l’aplicació, i autoritats i jutjats.'),
    intraGroupSharing: f('yes', 'official', ['forusapp-politica-privacidad'], 'Societats del grup Forus per a finalitats administratives.'),
    dataBrokerSales: f('no', 'official', ['forusapp-politica-privacidad'], 'La política no preveu cap cessió comercial de dades.'),
    internationalTransfers: f('no', 'official', ['forusapp-politica-privacidad'], 'La política afirma que totes les entitats del grup són a l’Espai Econòmic Europeu i que no hi ha transferències internacionals.', { mechanism: 'none' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['forusapp-politica-privacidad'], 'Criteri general de necessitat, amb un termini concret: les dades de màrqueting s’esborren automàticament als cinc anys d’inactivitat.'),
    dataAfterDeletion: unknown('La política no descriu què es conserva després d’una baixa.'),
    periods: [{ dataType: 'adreca-electronica', period: 'Cinc anys d’inactivitat per a finalitats de màrqueting', sources: ['forusapp-politica-privacidad'] }],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['forusapp-politica-privacidad'], 'La supressió s’ha de demanar al delegat de protecció de dades; no hem trobat cap eliminació de compte dins de l’aplicació.'),
    selfService: f('no', 'official', ['forusapp-terminos'], 'Les condicions de contractació exigeixen comunicar la baixa presencialment a la recepció del centre, omplint un imprès.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Passa per la recepció del teu centre Forus entre el dia 1 i el dia 25 del mes i omple l’imprès de baixa; a partir del dia 26 no s’admet fins al mes següent.',
      'Comprova que estàs al corrent de pagament: la baixa no s’admet si hi ha rebuts pendents.',
      'Per esborrar les dades, escriu al delegat de protecció de dades del grup invocant el dret de supressió.',
      'Guarda còpia de l’imprès i del correu com a prova.',
    ],
    obstacles:
      'Obligar a anar físicament al centre per donar-se de baixa d’un servei que es contracta i es gestiona des d’una aplicació és una fricció desproporcionada, i la finestra acaba el dia 25. A més, es perd la matrícula.',
    dataRetained: 'La política no ho concreta més enllà dels terminis fiscals i comptables habituals.',
    sources: ['forusapp-terminos', 'forusapp-politica-privacidad'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['forusapp-politica-privacidad'], 'La portabilitat es reconeix a la política i s’exerceix per correu electrònic; no hi ha eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['forusapp-politica-privacidad'], 'Bústia del delegat de protecció de dades del grup i adreça postal, amb reclamació davant l’Agència Espanyola de Protecció de Dades.', {
      url: 'mailto:dpo@forus.es',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['forusapp-politica-privacidad'], 'Baixa de les comunicacions comercials indicada a cada comunicació i al canal del delegat de protecció de dades.'),
    telemetryOptOut: unknown('No hem trobat cap control d’analítica dins de l’aplicació.'),
    granularControls: f('partial', 'official', ['forusapp-politica-privacidad'], 'La geolocalització és revocable i el consentiment per a dades de salut és separat i exprés; no hi ha panell general de privadesa documentat.'),
    defaultPosture: 'mixed',
    darkPatterns: f('yes', 'editorial', ['forusapp-terminos'], 'Contractar i gestionar-ho tot des de l’aplicació però haver d’anar presencialment a recepció per donar-se de baixa, dins d’una finestra que acaba el dia 25, és un camí de sortida deliberadament més costós que el d’entrada.'),
    darkPatternList: [
      {
        type: 'hidden-exit',
        severity: 'high',
        description:
          'La baixa de l’abonament només s’admet presencialment a la recepció del centre, amb imprès i entre el dia 1 i el 25 del mes.',
        sources: ['forusapp-terminos'],
      },
    ],
  },
  security: {
    e2ee: na('L’aplicació no ofereix comunicacions xifrables d’extrem a extrem.'),
    transportEncryption: unknown('No hem trobat documentació tècnica publicada.'),
    atRestEncryption: unknown('No consta informació pública.'),
    mfa: unknown('No hem trobat documentació sobre verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt ni als dominis de Forus ni als de l’empresa desenvolupadora, i no hem trobat cap canal publicat.'),
  },
  alternatives: [
    {
      app: 'vivagym',
      comparability: 'equivalent',
      rationale:
        'Feta per la mateixa empresa desenvolupadora, permet la baixa de la quota en línia en lloc de presencialment.',
      tradeOffs: 'La seva política fa descansar gairebé tot el tractament en el consentiment i no en l’execució del contracte.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La incoherència documental és la troballa: la política de Forus declara correctament que MyVitale és encarregat del tractament, però la fitxa de l’App Store enllaça la política de MyVitale, on aquesta empresa es presenta com a responsable, sense delegat de protecció de dades, sense llista de categories de dades i admetent l’elaboració de perfils. Qui llegeix l’enllaç de l’App Store, doncs, llegeix el document equivocat. La cerca d’incidents no ha donat cap sanció ni filtració contra Forus ni contra l’empresa desenvolupadora.',
    openQuestions: [
      'Quina de les dues polítiques s’aplica realment a les dades que es tracten dins de l’aplicació?',
      'Els centres municipals que gestiona Forus tenen l’ajuntament com a corresponsable del tractament?',
    ],
  },
}

/* ═══════════════════════ idealista ═══════════════════════ */
const idealista: AppSeed = {
  slug: 'idealista',
  name: 'idealista',
  company: 'idealista',
  categories: ['habitatge'],
  tagline: 'Els filtres de cerca es comparteixen amb l’anunciant, i el perfil d’inquilí inclou els ingressos declarats',
  summary:
    'idealista és el portal immobiliari de referència a Espanya i una de les polítiques de privadesa més detallades d’aquest lot: hi caben la signatura electrònica amb dades biomètriques del traç, la gravació i transcripció automàtica de trucades i la qualificació del perfil d’inquilí amb dades econòmiques. Quan contactes un anunciant, la política diu que també rep els filtres de cerca que has aplicat. L’etiqueta de l’App Store no declara cap dada desvinculada de la identitat.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Espanya; autoritat de control: Agencia Española de Protección de Datos',
  userBase: 'Més de 23 milions de destinataris actius mensuals declarats entre idealista.com, .it i .pt',
  links: {
    website: 'https://www.idealista.com/',
    privacyPolicy: 'https://www.idealista.com/ayuda/articulos/politica-de-privacidad/',
    appStore: appStore('465958311'),
  },
  accountRequired: f('no', 'official', ['idealista-politica-privacidad'], 'Es pot cercar i desar cerques sense registrar-se; la política distingeix expressament entre «usuari» i «usuari registrat». Per contactar un anunciant cal donar dades de contacte.'),
  openSource: f('no', 'official', ['idealista-politica-privacidad'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Buscar pis és explicar en veu alta quant pots pagar, amb qui vius, on vols viure i quan et mudes. idealista ho recull tot: pressupost, zona, preferències de convivència, ingressos declarats per qualificar el perfil d’inquilí i, si signes un contracte a la plataforma, el traç, la pressió i la velocitat de la teva signatura.',
  dataCollection: [
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['idealista-politica-privacidad'] }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['idealista-politica-privacidad'], note: 'DNI, NIE o passaport per verificar anunciants i per als contractes de lloguer.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['idealista-politica-privacidad', 'idealista-app-store'], note: 'A l’anunciant se li pot donar un àlies tokenitzat; a Google, Meta, TikTok i LinkedIn s’hi envia xifrat amb funció resum per crear audiències.' }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['idealista-politica-privacidad'] }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['atencio-a-lusuari', 'seguretat-i-prevencio-del-frau'], sources: ['idealista-politica-privacidad'], note: 'Les trucades es graven per interès legítim i es transcriuen i resumeixen amb eines d’intel·ligència artificial; es conserven un any.' }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['idealista-politica-privacidad'], note: 'El traç, la pressió i la velocitat de la signatura manuscrita electrònica dels contractes.' }),
    row('nivell-d-ingressos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['idealista-politica-privacidad'], note: 'Els ingressos declarats en qualificar el perfil d’inquilí es comparteixen, amb consentiment, amb els anunciants que tries.' }),
    row('situacio-familiar', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['idealista-politica-privacidad'], note: 'La política parla de preferències de convivència dins de les característiques personals.' }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['idealista-politica-privacidad'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['idealista-app-store', 'idealista-politica-privacidad'], note: 'Els filtres de cerca desats es comuniquen a l’anunciant amb qui contactes, segons la mateixa política.' }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['idealista-app-store'] }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['idealista-app-store'], note: 'L’etiqueta la declara sota funcionalitat de l’aplicació, vinculada amb la identitat.' }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['idealista-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['idealista-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['idealista-politica-privacidad'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['idealista-politica-privacidad'], note: 'La política diu obertament que idealista pot elaborar perfils sobre la base del teu comportament.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['idealista-app-store'], note: 'Fotografies dels anuncis i del perfil; la política esmenta el difuminat automàtic d’imatges.' }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['idealista-politica-privacidad'], note: 'La missatgeria interna es modera amb aprenentatge automàtic i revisió humana; el xat amb intel·ligència artificial conserva les converses i crea un «perfil de context».' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['idealista-app-store'], 'L’etiqueta declara historial de cerca, historial de navegació, identificadors i dades d’ús com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['idealista-app-store'], 'Dades de publicitat i identificadors vinculats amb la identitat.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['idealista-politica-privacidad'], 'Col·laboració amb Google Ads, Meta, TikTok i LinkedIn per crear audiències i mesurar conversions.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['idealista-politica-privacidad'], 'Publicitat pròpia i creació d’audiències en plataformes de tercers, subjecta al consentiment de galetes.', {
      optOutUrl: 'https://www.idealista.com/info/politica-cookies',
    }),
    profiling: f('yes', 'official', ['idealista-politica-privacidad'], 'Elaboració de perfils per comportament emparada en l’interès legítim, per a recomanacions i comunicacions promocionals. La política afirma que no hi ha decisions automatitzades amb efectes jurídics.'),
    aiTraining: f('partial', 'official', ['idealista-politica-privacidad'], 'Es fa servir intel·ligència artificial per transcriure i resumir trucades, per moderar la missatgeria i per al xat, però la política no diu que les dades serveixin per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['idealista-politica-privacidad'], 'Anunciants particulars i professionals, agències, col·laboradors d’energia i reformes, portals agregadors i entitats de taxació, que reben dades dels anuncis per interès legítim propi.'),
    intraGroupSharing: f('yes', 'official', ['idealista-politica-privacidad'], 'Amb Inmovilla, Avaibook, idealista/seguros, idealista/hipotecas i la Base de Datos de Morosidad Inmobiliaria, entre altres societats del grup.'),
    dataBrokerSales: unknown('La política no descriu cap venda de dades a intermediaris; tampoc no detalla si es consulten fitxers de morositat a través de la societat del grup que en gestiona un.'),
    internationalTransfers: f('yes', 'official', ['idealista-transferencias'], 'Només dos proveïdors fora de l’Espai Econòmic Europeu: un al Regne Unit, emparat per la decisió d’adequació, i un a Colòmbia, amb clàusules contractuals tipus.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: f('partial', 'official', ['idealista-informe-dsa'], 'Publica l’informe de transparència que exigeix el Reglament de Serveis Digitals, sobre moderació de continguts i nombre de destinataris actius. No és un informe de peticions d’autoritats sobre dades personals.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['idealista-politica-privacidad'], 'La política dona terminis concrets per finalitat, cosa poc habitual: un any les gravacions de trucades, dos anys de bloqueig per a anunciants particulars, quatre per a prevenció del frau, cinc per als contractes de lloguer i fins a sis de bloqueig legal.'),
    dataAfterDeletion: f('yes', 'official', ['idealista-politica-privacidad'], 'Després de suprimir el compte, el correu i el telèfon dels anunciants particulars queden bloquejats dos anys, i altres dades fins a sis per prescripció legal.'),
    periods: [
      { dataType: 'veu-i-audio', period: 'Un any (gravacions de trucades)', sources: ['idealista-politica-privacidad'] },
      { dataType: 'adreca-electronica', period: 'Dos anys de bloqueig després de suprimir el compte (anunciants particulars)', sources: ['idealista-politica-privacidad'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['idealista-baixa']),
    selfService: f('yes', 'official', ['idealista-baixa'], 'Hi ha una pàgina de baixa dins del compte; l’ajuda adverteix que l’acció no es pot desfer i que es perd tota la informació.'),
    directUrl: 'https://www.idealista.com/eliminar-usuario',
    difficulty: 'easy',
    steps: [
      'Inicia la sessió amb el teu compte d’idealista.',
      'Ves a la pàgina de baixa d’usuari des de l’àrea privada o des de l’article d’ajuda «com donar-se de baixa».',
      'Confirma la baixa: no és reversible i es perd tota la informació del compte.',
      'Si també vols limitar el bloqueig posterior de les dades, escriu al canal de privadesa o al delegat de protecció de dades.',
    ],
    obstacles:
      'La baixa és senzilla, però no esborra les dades immediatament: passen a bloqueig durant dos a sis anys segons la finalitat.',
    dataRetained: 'Correu i telèfon bloquejats dos anys per a anunciants particulars, quatre anys per a prevenció del frau i clients professionals, cinc per a contractes de lloguer i fins a sis de bloqueig legal.',
    sources: ['idealista-baixa', 'idealista-politica-privacidad'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['idealista-politica-privacidad'], 'La portabilitat es reconeix, però s’ha d’exercir per correu: l’àrea privada només permet donar-se de baixa i configurar comunicacions.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['idealista-politica-privacidad'], 'Canal de privadesa i delegada de protecció de dades, gratuïts, amb reclamació davant l’Agència Espanyola de Protecció de Dades.', {
      url: 'mailto:dpo@idealista.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['idealista-politica-privacidad'], 'Gestor de consentiment propi amb control per finalitat i per proveïdor, i possibilitat d’oposar-se al tractament per interès legítim dels socis.', {
      url: 'https://www.idealista.com/info/politica-cookies',
    }),
    telemetryOptOut: f('partial', 'official', ['idealista-politica-privacidad'], 'Les galetes analítiques es poden refusar des del gestor de consentiment; no hi ha un control separat per a la telemetria de l’aplicació.'),
    granularControls: f('yes', 'official', ['idealista-politica-privacidad'], 'Consentiment per finalitat i per soci, baixa d’alertes i de comunicacions comercials des dels ajustos.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['idealista-politica-privacidad'], 'No hem trobat obstacles a la baixa, però sí una asimetria d’informació: que en contactar un anunciant també li arribin els filtres de cerca aplicats és a la política i no a la pantalla de contacte.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description:
          'La cessió dels filtres de cerca a l’anunciant amb qui contactes consta a la política de privadesa, però no al formulari de contacte, on la persona creu que només envia un missatge.',
        sources: ['idealista-politica-privacidad'],
      },
    ],
  },
  security: {
    e2ee: na('La missatgeria interna es modera i, per tant, no pot ser xifrada d’extrem a extrem.'),
    transportEncryption: f('partial', 'official', ['idealista-politica-privacidad'], 'La política parla de xifratge, pseudonimització i tokenització de correus, sense detall tècnic publicat.'),
    atRestEncryption: f('partial', 'official', ['idealista-politica-privacidad'], 'Esment genèric de xifratge i pseudonimització, sense especificació.'),
    mfa: f('yes', 'official', ['idealista-politica-privacidad'], 'Verificació en dos passos per SMS quan es detecta un dispositiu inusual.', { methods: ['sms'] }),
    independentAudits: unknown('No hem trobat certificacions ni auditories de seguretat publicades.'),
    bugBounty: f('no', 'official', ['idealista-vulnerabilitats'], 'Hi ha canal de comunicació de vulnerabilitats amb regles clares, però la pàgina no ofereix cap recompensa: és un programa de divulgació, no un bug bounty.'),
    vulnerabilityDisclosure: f('yes', 'official', ['idealista-vulnerabilitats'], 'Política publicada amb adreça de contacte i regles d’actuació. No hi ha fitxer security.txt al domini.'),
  },
  alternatives: [
    {
      app: 'fotocasa',
      comparability: 'equivalent',
      rationale: 'L’altre gran portal immobiliari espanyol, útil per comparar declaracions sobre el mateix servei.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política d’idealista és de les més completes que hem llegit en aquesta onada: dona terminis concrets per finalitat, anomena les societats del grup que reben dades i publica la llista de transferències internacionals. Això no la fa poc invasiva, però sí auditable. Els dominis bloquegen l’accés automatitzat, i el text s’ha hagut de llegir a través d’una còpia datada de l’Internet Archive; les etiquetes de l’App Store sí que s’han llegit en directe. La cerca d’incidents no ha donat cap sanció ni filtració documentada.',
    openQuestions: [
      'La qualificació del perfil d’inquilí comporta alguna consulta a la base de dades de morositat immobiliària del grup?',
      'Quant de temps es conserven les converses del xat amb intel·ligència artificial i el «perfil de context» que en resulta?',
    ],
  },
}

/* ═══════════════════════ yaencontre ═══════════════════════ */
const yaencontre: AppSeed = {
  slug: 'yaencontre',
  name: 'yaencontre',
  company: 'idealista',
  categories: ['habitatge'],
  tagline: 'Mateix responsable que idealista i una política clonada més curta, però sense procediment de baixa documentat',
  summary:
    'yaencontre és un portal immobiliari del grup idealista: el responsable del tractament és la mateixa societat, i la política de privadesa és una versió reduïda de la d’idealista. Hi falten les clàusules de veu, biometria i verificació d’anunciants, però es manté intacta la part de perfilat i de creació d’audiències a Google, Meta, TikTok i LinkedIn. A diferència d’idealista, no hem trobat cap pàgina d’autoservei per eliminar el compte.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Espanya; autoritat de control: Agencia Española de Protección de Datos',
  links: {
    website: 'https://www.yaencontre.com/',
    privacyPolicy: 'https://www.yaencontre.com/politica-privacidad',
    appStore: appStore('860523137'),
  },
  accountRequired: f('no', 'official', ['yaencontre-politica-privacidad'], 'Mateixa estructura que idealista: es pot cercar sense registre, i cal donar dades per contactar un anunciant.'),
  openSource: f('no', 'official', ['yaencontre-politica-privacidad'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'El que revela és el mateix que a qualsevol portal d’habitatge: pressupost, zona, tipus de casa i moment vital. La diferència és que aquí el rastre queda sota el mateix responsable que el portal líder del sector, sense que la marca ho faci evident.',
  dataCollection: [
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['yaencontre-politica-privacidad'] }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['yaencontre-politica-privacidad', 'yaencontre-app-store'], note: 'A l’anunciant se li dona tokenitzat; a les plataformes publicitàries, xifrat amb funció resum.' }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['yaencontre-politica-privacidad'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['yaencontre-app-store'] }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['yaencontre-app-store'] }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['yaencontre-app-store'], note: 'L’etiqueta la declara tant sota analítica com sota funcionalitat de l’aplicació.' }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['yaencontre-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['yaencontre-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['yaencontre-politica-privacidad'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['yaencontre-politica-privacidad'], note: 'La clàusula de perfilat és idèntica a la d’idealista.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['yaencontre-app-store'] }),
    row('fotografies-i-videos', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['yaencontre-app-store'], note: 'És l’única categoria que l’etiqueta declara com a dada no vinculada amb la identitat.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['yaencontre-app-store'] }),
    row('dades-biometriques', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['yaencontre-politica-privacidad'], note: 'A diferència d’idealista, aquesta política no inclou signatura electrònica amb dades biomètriques ni gravació de trucades.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['yaencontre-app-store'], 'L’etiqueta declara historial de cerca, historial de navegació, identificadors i dades d’ús com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['yaencontre-app-store'], 'Dades de publicitat sota funcionalitat de l’aplicació, vinculades amb la identitat.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['yaencontre-politica-privacidad'], 'Google Ads, Meta, TikTok i LinkedIn per a audiències i conversions millorades, amb Google Consent Mode.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['yaencontre-politica-privacidad'], 'Mateixa clàusula que idealista, subjecta al consentiment de galetes.', {
      optOutUrl: 'https://www.yaencontre.com/politica-cookies',
    }),
    profiling: f('yes', 'official', ['yaencontre-politica-privacidad'], 'Elaboració de perfils per comportament per a recomanacions i promocions, sense decisions automatitzades amb efectes jurídics.'),
    aiTraining: unknown('La política no esmenta ni intel·ligència artificial ni entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['yaencontre-politica-privacidad'], 'Anunciants, amb el correu tokenitzat, i tercers del sector immobiliari, energètic i assegurador amb consentiment.'),
    intraGroupSharing: f('yes', 'official', ['yaencontre-politica-privacidad'], 'Amb Inmovilla, Avaibook, idealista/seguros, idealista/hipotecas i la base de dades de morositat immobiliària del grup, amb consentiment.'),
    dataBrokerSales: unknown('La política no descriu venda de dades a intermediaris.'),
    internationalTransfers: f('yes', 'official', ['yaencontre-politica-privacidad', 'idealista-transferencias'], 'La política remet a la llista de transferències d’idealista: un proveïdor al Regne Unit i un a Colòmbia.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('L’informe de transparència del Reglament de Serveis Digitals del grup cobreix idealista.com, .it i .pt, però no hem trobat cap informe per a yaencontre.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['yaencontre-politica-privacidad'], 'Fins a quatre anys per prevenció del frau i bloqueig de fins a sis anys per prescripció legal; menys detall per finalitat que a idealista.'),
    dataAfterDeletion: f('partial', 'official', ['yaencontre-politica-privacidad'], 'Les dades passen a bloqueig pels terminis de prescripció legal.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['yaencontre-politica-privacidad'], 'El dret de supressió es reconeix i s’exerceix pel canal de privadesa.'),
    selfService: unknown('No hem trobat cap pàgina d’autoservei ni article d’ajuda sobre com eliminar el compte al domini de yaencontre, a diferència d’idealista.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Escriu al canal de privadesa de yaencontre o al seu delegat de protecció de dades demanant la supressió del compte.',
      'Identifica’t amb les dades del compte perquè puguin verificar qui ets.',
      'Guarda la resposta: el termini legal de resposta és d’un mes.',
    ],
    obstacles:
      'La manca d’una opció de baixa dins del servei obliga a exercir formalment un dret que al portal germà es resol amb un clic.',
    dataRetained: 'Bloqueig de fins a sis anys per prescripció legal i quatre per prevenció del frau.',
    sources: ['yaencontre-politica-privacidad'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['yaencontre-politica-privacidad'], 'La portabilitat es reconeix i s’exerceix per correu; no hi ha eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['yaencontre-politica-privacidad'], 'Canal de privadesa propi i delegat de protecció de dades de yaencontre.', {
      url: 'mailto:dpo@yaencontre.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['yaencontre-politica-cookies'], 'Gestor de consentiment amb control per finalitat i per soci, i oposició a l’interès legítim dels socis.'),
    telemetryOptOut: f('partial', 'official', ['yaencontre-politica-cookies'], 'Les galetes analítiques es poden refusar; no hi ha control separat de la telemetria de l’aplicació.'),
    granularControls: f('partial', 'official', ['yaencontre-politica-cookies'], 'Consentiment granular de galetes; la resta de controls no estan documentats.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['yaencontre-politica-privacidad'], 'La marca no diu enlloc visible que el responsable del tractament és la societat d’idealista: qui evita un portal i fa servir l’altre acaba al mateix lloc.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description:
          'La identitat del responsable, Idealista S.A.U., només apareix dins de la política de privadesa; la marca i l’aplicació es presenten com un portal independent.',
        sources: ['yaencontre-politica-privacidad'],
      },
    ],
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades xifrables d’extrem a extrem.'),
    transportEncryption: f('partial', 'official', ['yaencontre-politica-privacidad'], 'Esments genèrics de mesures tècniques, sense detall publicat.'),
    atRestEncryption: unknown('No consta informació pública.'),
    mfa: unknown('La política de yaencontre no inclou la clàusula de verificació en dos passos que sí té idealista.'),
    independentAudits: unknown('No hem trobat certificacions ni auditories publicades.'),
    bugBounty: unknown('El canal de vulnerabilitats d’idealista parla de les seves webs i aplicacions, sense dir expressament si cobreix yaencontre.'),
    vulnerabilityDisclosure: unknown('No hem pogut comprovar si hi ha security.txt: el domini bloqueja l’accés automatitzat.'),
  },
  alternatives: [
    {
      app: 'idealista',
      comparability: 'equivalent',
      rationale:
        'El portal germà, del mateix responsable, té molt més inventari, baixa autoservei documentada i una política amb més terminis concrets.',
      tradeOffs: 'També recull més dades: veu, biometria de la signatura i ingressos declarats.',
    },
    {
      app: 'fotocasa',
      comparability: 'equivalent',
      rationale: 'Portal d’un grup diferent, si el que es busca és no concentrar el rastre en un sol responsable.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La troballa d’aquesta fitxa és de concentració: dues marques que a l’aparador semblen competidores comparteixen responsable del tractament, política i destinataris. La política de yaencontre porta data d’abril del 2025, un any més antiga que la d’idealista. El domini bloqueja l’accés automatitzat i el text s’ha llegit a través d’una còpia datada de l’Internet Archive.',
    openQuestions: [
      'Hi ha alguna via de baixa autoservei a yaencontre que no estigui documentada públicament?',
      'El canal de vulnerabilitats d’idealista cobreix també els dominis i les aplicacions de yaencontre?',
    ],
  },
}

/* ═══════════════════════ Mi Fitness ═══════════════════════ */
const miFitness: AppSeed = {
  slug: 'mi-fitness',
  name: 'Mi Fitness',
  company: 'xiaomi-netherlands',
  categories: ['benestar-i-activitat-fisica'],
  tagline: 'Son, freqüència cardíaca, oxigen en sang i cicle menstrual, amb l’opció poc coneguda de desactivar la sincronització al núvol',
  summary:
    'Mi Fitness és l’aplicació que recull el que mesuren les polseres i els rellotges de Xiaomi. El llibre blanc de privadesa de l’Internet de les coses de l’empresa és molt més detallat que la política de l’aplicació: descriu les dades de son, freqüència cardíaca, saturació d’oxigen, estrès i cicle menstrual, diu que el cicle només es mostra al dispositiu i documenta que la sincronització al núvol es pot desactivar. Per a l’Espai Econòmic Europeu, el responsable és la filial neerlandesa.',
  platforms: ['ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Països Baixos, amb corresponsabilitat de la matriu xinesa',
  userBase: 'Centenars de milions de dispositius vestibles Xiaomi venuts arreu del món',
  links: {
    website: 'https://www.mi.com/global/',
    privacyPolicy: 'https://privacy.mi.com/all/es_ES',
    appStore: appStore('1493500777'),
  },
  accountRequired: unknown('No hem trobat documentació oficial que digui si es pot fer servir l’aplicació sense compte Xiaomi; la sincronització al núvol i l’aparellament de dispositius sí que el necessiten.'),
  openSource: f('no', 'official', ['xiaomi-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'És un registre continu del cos: quantes hores dorms i com, quines pulsacions tens en repòs, quin nivell d’estrès, quanta saturació d’oxigen i, si l’actives, en quin punt del cicle menstrual ets. Amb GPS s’hi afegeix el recorregut dels entrenaments, que diu on vius i per on et mous cada dia.',
  dataCollection: [
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['xiaomi-iot-whitepaper', 'mi-fitness-app-store'], note: 'Freqüència cardíaca, fases i durada del son, saturació d’oxigen, nivell d’estrès, passos, calories i pressió arterial introduïda a mà.' }),
    row('dades-biometriques', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['xiaomi-iot-whitepaper'], note: 'Les mesures fisiològiques contínues del sensor òptic del dispositiu.' }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mi-fitness-app-store', 'xiaomi-privacy-policy'], note: 'Recorregut dels entrenaments amb GPS; l’etiqueta declara ubicació exacta vinculada amb la identitat.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mi-fitness-app-store'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['xiaomi-iot-whitepaper'], note: 'El perfil demana sexe, data de naixement, alçada i pes per calcular les mètriques.' }),
    row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['xiaomi-iot-whitepaper'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mi-fitness-app-store'], note: 'Dades de contacte del compte Xiaomi.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mi-fitness-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mi-fitness-app-store'] }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['mi-fitness-app-store'], note: 'L’etiqueta declara informació de pagament vinculada amb la identitat.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['mi-fitness-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['mi-fitness-app-store'] }),
    row('orientacio-sexual', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['xiaomi-iot-whitepaper'], note: 'No es demana, però el seguiment del cicle menstrual és una dada de salut reproductiva que el llibre blanc diu que només es mostra al dispositiu i s’esborra en desaparellar-lo.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['mi-fitness-app-store'], 'L’etiqueta de l’aplicació no declara cap dada utilitzada per rastrejar, a diferència de la de Xiaomi Home.'),
    advertisingIdentifiers: unknown('Ni l’etiqueta ni el llibre blanc esmenten l’identificador publicitari en aquesta aplicació.'),
    thirdPartyTrackersPresent: unknown('No hem pogut llegir la política específica de l’aplicació, que és una pàgina generada amb JavaScript, i el llibre blanc no llista components de tercers.'),
  },
  dataUses: {
    targetedAdvertising: unknown('La política general de Xiaomi preveu serveis publicitaris al sistema operatiu, però no hem trobat cap evidència que s’apliquin a les dades d’aquesta aplicació.'),
    profiling: f('partial', 'official', ['xiaomi-iot-whitepaper'], 'Hi ha personalització: consells i plans d’entrenament calculats a partir de les mesures del cos. No consta elaboració de perfils per a finalitats comercials.'),
    aiTraining: unknown('Cap document de Xiaomi que hàgim pogut llegir diu si les dades de salut s’utilitzen per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: unknown('El llibre blanc no llista destinataris tercers per a aquesta aplicació i no hem pogut llegir-ne la política específica.'),
    intraGroupSharing: f('yes', 'official', ['xiaomi-privacy-policy'], 'La política general descriu el tractament dins del grup Xiaomi, amb corresponsabilitat entre la filial neerlandesa i la matriu xinesa.'),
    dataBrokerSales: unknown('No hem trobat cap declaració específica sobre venda de dades.'),
    internationalTransfers: f('yes', 'official', ['xiaomi-privacy-policy'], 'Per a l’Espai Econòmic Europeu, el Regne Unit i Suïssa, el tractament és als Països Baixos, amb clàusules contractuals tipus i mesures suplementàries per a l’accés remot limitat des de la Xina continental. El llibre blanc no concreta on són els servidors d’aquesta aplicació.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: f('yes', 'official', ['xiaomi-transparency-report'], 'Xiaomi publica informes anuals sobre sol·licituds governamentals d’informació, amb edicions del 2022, el 2023 i el 2024.'),
  },
  retention: {
    definedPeriods: unknown('El llibre blanc no dona terminis concrets de conservació de les dades de salut al núvol.'),
    dataAfterDeletion: f('partial', 'official', ['xiaomi-account-delete'], 'Eliminar el compte Xiaomi esborra de manera irreversible les dades associades, inclosos els continguts del núvol; la política no detalla què es conserva per obligació legal.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['xiaomi-account-delete']),
    selfService: f('yes', 'official', ['xiaomi-account-delete'], 'Des del centre d’ajuda del compte Xiaomi; l’avís diu que l’acció no es pot desfer.'),
    directUrl: 'https://account.xiaomi.com/helpcenter/service/cancelAccount',
    difficulty: 'medium',
    steps: [
      'Sincronitza o exporta abans el que vulguis conservar: l’esborrat inclou les dades del núvol.',
      'Entra al centre d’ajuda del compte Xiaomi i obre el servei de cancel·lació del compte.',
      'Identifica’t amb el compte i confirma la sol·licitud.',
      'Si només vols deixar de pujar dades de salut sense tancar el compte, desactiva la sincronització al núvol des de l’aplicació.',
    ],
    obstacles:
      'Eliminar el compte Xiaomi afecta tot l’ecosistema alhora: fotos, contactes i dades d’altres aplicacions. No hem trobat cap eliminació selectiva de les dades de salut.',
    dataRetained: 'Desconegut: la documentació només diu que es conserva el que exigeixi la llei.',
    sources: ['xiaomi-account-delete'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['xiaomi-privacy-policy'], 'Els drets, inclosa la portabilitat, s’exerceixen per un formulari únic; no hem trobat cap descàrrega d’autoservei.', {
      url: 'https://privacy.mi.com/support',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['xiaomi-privacy-policy', 'xiaomi-home-privacy-policy'], 'Portal únic de sol·licituds i delegat de protecció de dades del grup.', {
      url: 'https://privacy.mi.com/support',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['xiaomi-privacy-policy'], 'Els serveis publicitaris del sistema operatiu es poden desactivar des dels ajustos de privadesa del telèfon.'),
    telemetryOptOut: f('partial', 'official', ['xiaomi-iot-whitepaper'], 'El llibre blanc documenta que es pot desactivar la sincronització al núvol i mantenir les dades només al dispositiu, però no un control separat de diagnòstics.'),
    granularControls: f('partial', 'official', ['xiaomi-iot-whitepaper'], 'Sincronització al núvol desactivable i esborrat de les dades de cicle menstrual en desaparellar el dispositiu o restaurar-lo de fàbrica.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['xiaomi-iot-whitepaper'], 'El control més protector, mantenir les dades de salut només al dispositiu, només està documentat en un llibre blanc tècnic en anglès, no a la política de l’aplicació ni a cap pantalla destacada.'),
  },
  security: {
    e2ee: f('no', 'official', ['xiaomi-iot-whitepaper'], 'Les dades de salut es xifren en trànsit i en repòs, però amb claus del prestador: no hi ha xifratge d’extrem a extrem.'),
    transportEncryption: f('yes', 'official', ['xiaomi-iot-whitepaper'], 'HTTPS amb el núvol i Bluetooth de baixa energia amb el dispositiu.'),
    atRestEncryption: f('yes', 'official', ['xiaomi-iot-whitepaper'], 'AES-128 per a les dades de salut i AES-256 per als registres d’informes d’incidències.'),
    mfa: unknown('No hem trobat documentació oficial sobre la verificació en dos passos del compte Xiaomi.'),
    independentAudits: f('yes', 'official', ['xiaomi-compliance'], 'ISO/IEC 27001 i ISO/IEC 27701 per a diverses societats del grup, SOC 2 i una atestació de privadesa de TÜV Rheinland.'),
    bugBounty: f('yes', 'official', ['xiaomi-misrc'], 'Centre de seguretat propi amb programa de recompenses i un programa a HackerOne.'),
    vulnerabilityDisclosure: f('partial', 'official', ['xiaomi-misrc'], 'Hi ha procediment i adreça de contacte publicats, però no fitxer security.txt als dominis principals.'),
  },
  alternatives: [
    {
      app: 'strava',
      comparability: 'partial',
      rationale:
        'Per registrar l’activitat esportiva sense dependre del núvol del fabricant del dispositiu.',
      tradeOffs: 'No substitueix la gestió del rellotge ni les mesures contínues de son i freqüència cardíaca.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política específica de l’aplicació és una pàgina generada amb JavaScript que no hem pogut llegir; tot el detall tècnic prové del llibre blanc de privadesa de l’Internet de les coses de Xiaomi, que és una font oficial però no substitueix una política. Cal no confondre aquesta aplicació amb «Xiaomi Health», l’aplicació xinesa, que declara expressament que desa les dades dins de la Xina. Els incidents documentats del grup afecten altres productes, no aquesta aplicació, però la reclamació de noyb del 2025 sobre transferències a la Xina sí que és del grup i és pertinent.',
    openQuestions: [
      'On són els servidors que reben les dades de salut de Mi Fitness per a una persona de la Unió Europea?',
      'Quant de temps es conserven les mesures del cos al núvol?',
      'Es poden esborrar només les dades de salut sense eliminar el compte Xiaomi?',
    ],
  },
}

/* ═══════════════════════ Xiaomi Home ═══════════════════════ */
const xiaomiHome: AppSeed = {
  slug: 'xiaomi-home',
  name: 'Xiaomi Home',
  company: 'xiaomi-netherlands',
  categories: ['llar-connectada'],
  tagline: 'L’única fitxa del lot que declara «dades sensibles» a l’App Store, amb una política d’aplicació que no esmenta ni el vídeo ni els mapes de la casa',
  summary:
    'Xiaomi Home controla càmeres, aspiradores robot, sensors i bombetes. La seva etiqueta de l’App Store declara identificadors com a dada utilitzada per rastrejar i inclou una categoria de dades sensibles. La política enllaçada des de l’App Store no esmenta el vídeo de les càmeres ni els mapes de la casa que generen les aspiradores: això només es documenta al llibre blanc tècnic, que també explica que hi ha un mode local per no pujar el mapa al núvol. La mateixa política declara centres de dades a Pequín, els Estats Units, Rússia, Singapur i Alemanya.',
  platforms: ['ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Països Baixos, amb corresponsabilitat de la matriu xinesa',
  userBase: 'Centenars de milions de dispositius connectats a l’ecosistema Xiaomi',
  links: {
    website: 'https://www.mi.com/global/',
    privacyPolicy: 'https://cnbj1.fds.api.xiaomi.com/html/en/mihome_privacy_policy.html',
    privacyCenter: 'https://privacy.mi.com/all/es_ES',
    appStore: appStore('957323480'),
  },
  accountRequired: f('yes', 'official', ['xiaomi-home-privacy-policy'], 'La política descriu la creació del compte Xiaomi com a pas de configuració, i els dispositius queden vinculats al compte.'),
  openSource: f('no', 'official', ['xiaomi-home-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Una aplicació de llar connectada sap quan hi ha algú a casa, a quina hora s’encenen els llums i quan es neteja el terra. Si hi ha càmeres, sap com és la casa per dins; si hi ha aspiradora robot, en té el plànol amb les parets i les zones. És el conjunt de dades que millor descriu la intimitat domèstica, i el que més costa d’esborrar quan el maquinari és a casa.',
  dataCollection: [
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['xiaomi-home-privacy-policy', 'xiaomi-home-app-store'], note: 'La política llista IMEI, IMSI, adreça MAC i identificador del dispositiu; l’etiqueta declara identificadors com a dada utilitzada per rastrejar.' }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['xiaomi-home-privacy-policy', 'xiaomi-home-app-store'], note: 'Coordenades, regió i codi de ciutat, per vincular dispositius i automatitzacions.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['xiaomi-home-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['xiaomi-home-privacy-policy'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['xiaomi-home-privacy-policy'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['xiaomi-home-privacy-policy'] }),
    row('xarxa-i-connectivitat', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['xiaomi-home-privacy-policy'], note: 'Estat de la xarxa i registres del dispositiu.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['xiaomi-iot-whitepaper'], note: 'El vídeo de les càmeres només es documenta al llibre blanc, no a la política de l’aplicació: transmissió xifrada del flux en directe i AES-128 al núvol en els models amb xip de seguretat.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['xiaomi-home-app-store', 'xiaomi-home-privacy-policy'], note: 'Els esdeveniments que reporta cada dispositiu descriuen les rutines de la casa.' }),
    row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['xiaomi-iot-whitepaper'], note: 'El mapa de la casa que genera l’aspiradora robot es puja xifrat després de cada neteja, tret que s’activi el mode local.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['xiaomi-home-app-store'] }),
    row('veu-i-audio', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', level: 'unknown', note: 'Ni la política de l’aplicació ni el llibre blanc descriuen el tractament de les dades de veu a Xiaomi Home.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['xiaomi-home-app-store'], 'L’etiqueta declara identificadors com a dada utilitzada per rastrejar.'),
    advertisingIdentifiers: unknown('La política de l’aplicació no esmenta l’identificador publicitari del dispositiu.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap llista de components de tercers integrats a l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['xiaomi-home-privacy-policy', 'xiaomi-privacy-policy'], 'El màrqueting directe requereix consentiment exprés previ i la política diu que no transferirà dades a socis comercials per a màrqueting directe. Els serveis publicitaris del sistema operatiu es gestionen a banda.', {
      optOutUrl: 'https://privacy.mi.com/all/es_ES',
    }),
    profiling: unknown('La política no descriu elaboració de perfils.'),
    aiTraining: unknown('La política no esmenta l’entrenament de models amb dades de persones usuàries.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['xiaomi-home-privacy-policy'], 'Proveïdors i socis per prestar el servei, i autoritats quan la llei ho exigeix; la política nega la cessió per a màrqueting directe de tercers.'),
    intraGroupSharing: f('yes', 'official', ['xiaomi-privacy-policy'], 'La política general declara corresponsabilitat entre la filial neerlandesa i Xiaomi Communications a la Xina.'),
    dataBrokerSales: f('no', 'official', ['xiaomi-home-privacy-policy'], 'La política diu que no transferirà dades personals a socis comercials per al seu ús en màrqueting directe.'),
    internationalTransfers: f('yes', 'official', ['xiaomi-home-privacy-policy'], 'La política de l’aplicació declara centres de dades a Pequín, els Estats Units, Rússia, Singapur i Alemanya, amb clàusules contractuals tipus de la Unió Europea o altres garanties del RGPD.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: f('yes', 'official', ['xiaomi-transparency-report'], 'Informes anuals de sol·licituds governamentals d’informació, amb edicions del 2022 al 2024.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['xiaomi-home-privacy-policy'], 'La política no dona terminis concrets per categoria de dada.'),
    dataAfterDeletion: f('partial', 'official', ['xiaomi-account-delete'], 'L’eliminació del compte Xiaomi esborra de manera irreversible les dades associades, inclòs el que hi ha al núvol.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['xiaomi-account-delete']),
    selfService: f('yes', 'official', ['xiaomi-account-delete'], 'Des del centre d’ajuda del compte Xiaomi, sense passar per atenció al client.'),
    directUrl: 'https://account.xiaomi.com/helpcenter/service/cancelAccount',
    difficulty: 'medium',
    steps: [
      'Desvincula abans els dispositius que vulguis continuar fent servir o revendre.',
      'Entra al centre d’ajuda del compte Xiaomi i obre el servei de cancel·lació del compte.',
      'Identifica’t i confirma: l’acció no es pot desfer i esborra també les dades del núvol.',
      'Si tens una aspiradora robot, activa el mode local abans si vols que el mapa de la casa no torni a pujar-se.',
    ],
    obstacles:
      'Tancar el compte inutilitza l’ús connectat de tot el maquinari de la casa alhora: el cost de sortida no és digital, és de maquinari.',
    dataRetained: 'Desconegut: la documentació no concreta què es conserva.',
    sources: ['xiaomi-account-delete', 'xiaomi-home-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['xiaomi-privacy-policy'], 'Els drets s’exerceixen per un portal únic de sol·licituds; no hem trobat cap eina de descàrrega automàtica.', {
      url: 'https://privacy.mi.com/support',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['xiaomi-home-privacy-policy'], 'Portal de sol·licituds i delegat de protecció de dades del grup, amb una adreça separada per retirar el consentiment.', {
      url: 'https://privacy.mi.com/support',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['xiaomi-privacy-policy'], 'Els serveis publicitaris es desactiven des dels ajustos de privadesa del sistema operatiu.'),
    telemetryOptOut: unknown('No hem trobat cap control documentat per aturar els registres d’esdeveniments dels dispositius.'),
    granularControls: f('partial', 'official', ['xiaomi-iot-whitepaper'], 'El mode local de les aspiradores manté el mapa de la casa al dispositiu, i les imatges de la càmera de navegació es processen localment i es descarten.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', ['xiaomi-home-privacy-policy', 'xiaomi-iot-whitepaper'], 'La política que enllaça l’App Store no esmenta ni el vídeo de les càmeres ni els mapes de la casa, i situa el punt de contacte a Singapur en lloc de l’entitat responsable a la Unió Europea. Qui només llegeix aquell document no sap què s’està tractant ni davant de qui reclamar.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'high',
        description:
          'La política enllaçada des de l’App Store no descriu les categories de dades més delicades del servei (vídeo domèstic i plànols de l’habitatge) i no identifica el responsable establert a la Unió Europea.',
        sources: ['xiaomi-home-privacy-policy', 'xiaomi-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: f('partial', 'official', ['xiaomi-iot-whitepaper'], 'Xiaomi afirma que la transmissió del flux en directe de les càmeres és xifrada d’extrem a extrem, però no hem trobat documentació que expliqui com s’activa ni cap verificació independent.'),
    transportEncryption: f('yes', 'official', ['xiaomi-iot-whitepaper'], 'Comunicacions xifrades entre l’aplicació, el dispositiu i el núvol.'),
    atRestEncryption: f('yes', 'official', ['xiaomi-iot-whitepaper'], 'AES-128 per als mapes de les aspiradores i per al vídeo desat al núvol en els models amb xip de seguretat.'),
    mfa: unknown('No hem trobat documentació oficial sobre verificació en dos passos del compte Xiaomi.'),
    independentAudits: f('yes', 'official', ['xiaomi-compliance'], 'ISO/IEC 27001 i 27701, SOC 2, PCI DSS i certificacions BSI Kitemark per a càmeres de seguretat i sistemes mesh.'),
    bugBounty: f('yes', 'official', ['xiaomi-misrc'], 'Centre de resposta de seguretat propi amb recompenses i programa a HackerOne.'),
    vulnerabilityDisclosure: f('partial', 'official', ['xiaomi-misrc'], 'Procediment i contacte publicats, però sense fitxer security.txt als dominis principals.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El desajust documental és greu perquè afecta les dades més sensibles de la casa: el vídeo i el plànol de l’habitatge no surten a la política de l’aplicació i només consten en un llibre blanc tècnic en anglès. L’incident del 2020, en què càmeres Xiaomi van mostrar fotogrames de cases alienes en altaveus amb pantalla de Google, és directament rellevant per a aquesta fitxa. La reclamació de noyb del 2025 per les transferències a la Xina és encara oberta.',
    openQuestions: [
      'Com s’activa i com es comprova el xifratge d’extrem a extrem de les càmeres des de l’aplicació?',
      'Quina autoritat de control és la principal per a Xiaomi a la Unió Europea?',
      'Xiaomi Home tracta dades de veu, i amb quines garanties?',
    ],
  },
}

export const lot: SeedLot = {
  companies: [
    {
      slug: 'fnmt-rcm',
      name: 'FNMT-RCM',
      legalName: 'Fábrica Nacional de Moneda y Timbre – Real Casa de la Moneda, E.P.E., M.P.',
      description:
        'Entitat pública empresarial espanyola. A més d’encunyar moneda, és el prestador qualificat de serveis electrònics de confiança que emet el certificat digital de persona física, i actua com a encarregat del tractament per a altres administracions.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'Madrid',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'state',
      foundedYear: 1893,
      primaryRevenueModel: 'unknown',
      website: 'https://www.fnmt.es/',
      productDomains: ['fnmt.es', 'sede.fnmt.gob.es', 'cert.fnmt.es'],
      privacyContact: 'dpd@fnmt.es',
    },
    {
      slug: 'ministerio-de-cultura',
      name: 'Ministerio de Cultura',
      legalName: 'Ministerio de Cultura del Gobierno de España',
      description:
        'Departament del Govern espanyol responsable de la política cultural. A través de la Dirección General de Derechos Culturales és el responsable del tractament de les dades del Bono Cultural Joven.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'Madrid',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'state',
      primaryRevenueModel: 'unknown',
      website: 'https://www.cultura.gob.es/',
      productDomains: ['cultura.gob.es', 'bonoculturajoven.gob.es'],
      privacyContact: 'dpd@cultura.gob.es',
    },
    {
      slug: 'bbc',
      name: 'BBC',
      legalName: 'British Broadcasting Corporation',
      description:
        'Radiodifusora pública britànica, creada per carta reial i finançada amb el cànon de televisió. És la responsable del tractament dels llocs i aplicacions del World Service en altres llengües.',
      headquartersCountry: 'Regne Unit',
      leadSupervisoryAuthority: 'Information Commissioner’s Office',
      ownership: 'state',
      foundedYear: 1922,
      primaryRevenueModel: 'mixed',
      website: 'https://www.bbc.co.uk/',
      productDomains: ['bbc.co.uk', 'bbc.com'],
      privacyContact: 'dataprotection.officer@bbc.co.uk',
    },
    {
      slug: 'bbc-studios',
      name: 'BBC Studios',
      legalName: 'BBC Studios Distribution Limited',
      parent: 'bbc',
      description:
        'Filial comercial de la BBC. La seva política de privadesa, i no la del servei públic britànic, és la que regeix l’aplicació internacional de notícies i la publicitat dels llocs del World Service.',
      headquartersCountry: 'Regne Unit',
      leadSupervisoryAuthority: 'Information Commissioner’s Office',
      ownership: 'subsidiary',
      primaryRevenueModel: 'mixed',
      website: 'https://www.bbcstudios.com/',
      productDomains: ['bbc.com', 'bbcstudios.com'],
      privacyContact: 'dataprotection@bbc.com',
    },
    {
      slug: 'idealista',
      name: 'idealista',
      legalName: 'Idealista, S.A.U.',
      description:
        'Portal immobiliari espanyol, responsable del tractament també de yaencontre, rentalia, rentger i certicalia. El grup inclou Inmovilla, Avaibook, idealista/seguros, idealista/hipotecas i una base de dades de morositat immobiliària. El desembre del 2024, Cinven en va adquirir la majoria; EQT hi manté una participació.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'Madrid',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      foundedYear: 2000,
      primaryRevenueModel: 'advertising',
      website: 'https://www.idealista.com/',
      productDomains: ['idealista.com', 'yaencontre.com', 'rentalia.com', 'rentger.com', 'certicalia.com'],
      privacyContact: 'dpo@idealista.com',
    },
    {
      slug: 'vivagym-group',
      name: 'VivaGym Group',
      legalName: 'VivaGym Group, S.L.',
      description:
        'Grup espanyol de gimnasos de quota baixa, participat per Providence Equity Partners, propietari de les marques VivaGym, Altafit i, des del 2026, Synergym.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'Màlaga',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://www.vivagym.com/',
      productDomains: ['vivagym.com', 'vivagym.es', 'altafit.es'],
    },
    {
      slug: 'el-gym-iberia',
      name: 'El Gym Iberia',
      legalName: 'El Gym Iberia, S.L.U.',
      parent: 'vivagym-group',
      description:
        'Societat titular de la marca comercial VivaGym i responsable del tractament de les dades de les persones abonades dels seus clubs.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'Màlaga',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'subsidiary',
      primaryRevenueModel: 'subscription',
      website: 'https://www.vivagym.com/',
      productDomains: ['vivagym.com'],
    },
    {
      slug: 'synergym',
      name: 'Synergym',
      parent: 'vivagym-group',
      description:
        'Cadena de gimnasos adquirida pel grup VivaGym l’abril del 2026, amb una filtració de dades anterior a l’adquisició.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'Màlaga',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'subsidiary',
      primaryRevenueModel: 'subscription',
      website: 'https://synergym.es/',
      productDomains: ['synergym.es'],
    },
    {
      slug: 'forus-deporte-y-ocio',
      name: 'Forus',
      legalName: 'Forus Deporte y Ocio, S.L.',
      description:
        'Grup espanyol de gestió d’instal·lacions esportives, moltes de titularitat municipal. És el responsable del tractament de ForusApp, que desenvolupa una tercera empresa com a encarregada.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'Madrid',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://forus.es/',
      productDomains: ['forus.es'],
      privacyContact: 'dpo@forus.es',
    },
    {
      slug: 'intelligent-system-vitale',
      name: 'MyVitale',
      legalName: 'Intelligent System Vitale, S.L.',
      description:
        'Empresa navarresa que desenvolupa la plataforma MyVitale, sobre la qual es construeixen les aplicacions de diverses cadenes de gimnasos espanyoles. Actua com a encarregada del tractament, tot i que la seva pròpia política es presenta com a responsable.',
      headquartersCountry: 'Espanya',
      euEstablishment: 'Villava (Navarra)',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://www.myvitale.com/',
      productDomains: ['myvitale.com'],
    },
    {
      slug: 'xiaomi',
      name: 'Xiaomi',
      legalName: 'Xiaomi Corporation',
      description:
        'Fabricant xinès de telèfons, dispositius vestibles i aparells connectats, amb un ecosistema domèstic molt extens. Cotitza a la borsa de Hong Kong.',
      headquartersCountry: 'Xina',
      ownership: 'public',
      foundedYear: 2010,
      primaryRevenueModel: 'hardware',
      website: 'https://www.mi.com/global/',
      productDomains: ['mi.com', 'xiaomi.com'],
      privacyContact: 'dpo@xiaomi.com',
    },
    {
      slug: 'xiaomi-netherlands',
      name: 'Xiaomi Technology Netherlands',
      legalName: 'Xiaomi Technology Netherlands B.V.',
      parent: 'xiaomi',
      description:
        'Entitat responsable del tractament per a l’Espai Econòmic Europeu, el Regne Unit i Suïssa, en corresponsabilitat amb Xiaomi Communications a la Xina.',
      headquartersCountry: 'Països Baixos',
      euEstablishment: 'La Haia',
      ownership: 'subsidiary',
      primaryRevenueModel: 'hardware',
      website: 'https://www.mi.com/global/',
      productDomains: ['mi.com'],
      privacyContact: 'dpo@xiaomi.com',
    },
  ],
  sources: [
    s('bbc-studios-privacy-policy', 'BBC Studios Privacy Policy', 'https://www.bbc.com/pages/privacy-policy', 'BBC Studios', 'privacy-policy', 'primary', {
      summary: 'Política aplicable fora del Regne Unit a BBC.com i a l’aplicació en anglès: publicitat personalitzada, subhastes en temps real, compra de segments a intermediaris de dades i transferències als Estats Units.',
    }),
    s('bbc-privacy-policy-uk', 'BBC Privacy Policy (UK)', 'https://www.bbc.co.uk/usingthebbc/privacy-policy/', 'BBC', 'privacy-policy', 'primary', {
      summary: 'Política del servei públic per a qui és al Regne Unit; la fem servir per documentar el desdoblament de règims i el funcionament del compte BBC.',
    }),
    s('bbc-world-service-aviso-privacidad', 'Aviso de Privacidad del Servicio Público de la BBC para los sitios de idiomas del World Service', 'https://www.bbc.com/mundo/institucional-36400009', 'BBC', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Avís en castellà aplicable als serveis del World Service: base d’interès públic, exempcions periodístiques i publicitat fora del Regne Unit gestionada per BBC Studios.',
    }),
    s('bbc-account-delete', 'How to delete your BBC account', 'https://www.bbc.co.uk/usingthebbc/account/how-to-delete-your-account/', 'BBC', 'support-doc', 'primary', {
      summary: 'Passos reals per eliminar el compte BBC i advertiment que l’operació és irreversible.',
    }),
    s('bbc-data-request', 'What information do you have about me?', 'https://www.bbc.co.uk/usingthebbc/privacy/what-info-do-you-have-about-me/', 'BBC', 'support-doc', 'primary', {
      summary: 'Com demanar les dades que té la BBC i quines limitacions té la sol·licitud des dels ajustos del compte.',
    }),
    s('bbc-security-disclosure', 'BBC Security Disclosure Policy', 'https://www.bbc.com/backstage/security-disclosure-policy/', 'BBC', 'technical-doc', 'primary', {
      summary: 'Política de divulgació de vulnerabilitats i programa de recompenses, amb l’àmbit definit i la llista d’exclusions.',
    }),
    s('bbc-zellis-moveit-press', 'Zellis data breach: BBC, British Airways and Boots staff data compromised', 'https://securityaffairs.com/147119/data-breach/zellis-data-breach-bbc-ba.html', 'Security Affairs', 'press', 'secondary', {
      summary: 'Cobertura de la filtració del proveïdor de nòmines Zellis arran de la vulnerabilitat de MOVEit, que va afectar dades del personal de la BBC.',
    }),
    s('bbc-pension-press', 'Cybercriminals raid BBC pension database', 'https://www.theregister.com/2024/05/30/cybercriminals_raid_bbc_pension_database/', 'The Register', 'press', 'secondary', {
      summary: 'Cobertura de la còpia no autoritzada de fitxers del pla de pensions de la BBC, amb dades de més de 25.000 persones.',
    }),
    s('bbc-app-store', 'BBC: World News & Stories a l’App Store (Espanya)', 'https://apps.apple.com/es/app/id364147881', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara ubicació, historial de navegació, identificadors i dades d’ús com a dades utilitzades per rastrejar.',
    }),
    s('bbc-world-service-app-store', 'BBC World Service a l’App Store (Espanya)', 'https://apps.apple.com/es/app/id6761256736', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: el rastreig es limita a dades d’ús i la majoria de categories es declaren no vinculades amb la identitat.',
    }),
    s('idealista-politica-privacidad', 'Política de privacidad de idealista', 'https://www.idealista.com/ayuda/articulos/politica-de-privacidad/', 'idealista', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política actualitzada l’abril del 2026: categories de dades, bases legals, perfilat, cessió de filtres de cerca als anunciants i terminis de conservació concrets per finalitat.',
    }),
    s('idealista-transferencias', 'Transferencias internacionales de datos — idealista', 'https://www.idealista.com/ayuda/articulos/transferencias-internacionales-de-datos/', 'idealista', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Llista pública dels proveïdors fora de l’Espai Econòmic Europeu i del mecanisme que empara cada transferència.',
    }),
    s('idealista-baixa', 'Cómo darse de baja de idealista', 'https://www.idealista.com/ayuda/articulos/how-to-unsubscribe-from-idealista/', 'idealista', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Article d’ajuda sobre la baixa del compte: és autoservei i no es pot desfer.',
    }),
    s('idealista-vulnerabilitats', 'Reporte de vulnerabilidades de seguridad — idealista', 'https://www.idealista.com/ayuda/articulos/reporte-de-vulnerabilidades-de-seguridad/', 'idealista', 'technical-doc', 'primary', {
      language: 'es',
      summary: 'Canal i regles per comunicar vulnerabilitats. No ofereix recompensa econòmica.',
    }),
    s('idealista-informe-dsa', 'Información de idealista en cumplimiento del Reglamento de Servicios Digitales', 'https://www.idealista.com/ayuda/articulos/informacion-de-idealista-en-cumplimiento-del-reglamento-de-servicios-digitales/', 'idealista', 'transparency-report', 'primary', {
      language: 'es',
      summary: 'Informe de transparència del Reglament de Serveis Digitals, amb el nombre de destinataris actius mensuals i les dades de moderació.',
    }),
    s('idealista-app-store', 'idealista a l’App Store (Espanya)', 'https://apps.apple.com/es/app/id465958311', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: rastreig amb historial de cerca i de navegació, identificadors i dades d’ús, i cap categoria desvinculada de la identitat.',
    }),
    s('yaencontre-politica-privacidad', 'Política de privacidad de yaencontre', 'https://www.yaencontre.com/politica-privacidad', 'yaencontre', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Versió reduïda de la política d’idealista, amb el mateix responsable del tractament i les mateixes clàusules de perfilat i d’audiències publicitàries.',
    }),
    s('yaencontre-politica-cookies', 'Política de cookies de yaencontre', 'https://www.yaencontre.com/politica-cookies', 'yaencontre', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Gestor de consentiment amb control per finalitat i per soci i oposició al tractament per interès legítim.',
    }),
    s('yaencontre-app-store', 'yaencontre a l’App Store (Espanya)', 'https://apps.apple.com/es/app/id860523137', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: rastreig amb historials i identificadors, ubicació exacta vinculada amb la identitat i una sola categoria desvinculada.',
    }),
    s('vivagym-politica-privacidad', 'Privacidad y protección de datos — VivaGym', 'https://www.vivagym.com/es-es/privacidad-y-proteccion-de-datos/', 'VivaGym', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política del grup VivaGym: dades antropomètriques, videovigilància amb 30 dies de conservació, consentiment com a base legal principal i llista de les societats responsables.',
    }),
    s('vivagym-baja', 'Contrato y desistimiento — VivaGym', 'https://www.vivagym.com/es-es/contrato-y-desistimiento/', 'VivaGym', 'terms', 'primary', {
      language: 'es',
      summary: 'Condicions de la baixa de la quota: tramitació en línia i data límit del mes segons el club.',
    }),
    s('vivagym-app-store', 'VivaGym MyApp a l’App Store (Espanya)', 'https://apps.apple.com/es/app/id6448747670', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: cap dada per rastrejar, i salut i forma física entre les dades vinculades amb la identitat.',
    }),
    s('vivagym-synergym-press', 'Brecha de datos en Synergym: a la venta los datos de más de 770.000 clientes', 'https://www.escudodigital.com/ciberseguridad/synergym-gimnasios-brecha-datos.html', 'Escudo Digital', 'press', 'secondary', {
      language: 'es',
      summary: 'Cobertura de la filtració de dades de clients de Synergym, cadena que el grup VivaGym va adquirir el 2026.',
    }),
    s('forusapp-politica-privacidad', 'Política de privacidad — Forus', 'https://forus.es/politica-de-privacidad', 'Forus', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de Forus: dades de salut amb consentiment exprés, geolocalització revocable, absència de transferències internacionals i reconeixement que l’aplicació la desenvolupa una encarregada del tractament.',
    }),
    s('forusapp-terminos', 'Términos y condiciones — Forus', 'https://forus.es/terminos-condiciones', 'Forus', 'terms', 'primary', {
      language: 'es',
      summary: 'Condicions de contractació: la baixa de l’abonament s’ha de comunicar presencialment a la recepció del centre entre el dia 1 i el 25 del mes.',
    }),
    s('forusapp-myvitale-privacidad', 'Privacidad de MyVitale', 'https://www.myvitale.com/es/privacidad-de-myvitale/', 'MyVitale', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de l’empresa desenvolupadora, enllaçada des de la fitxa de l’App Store, on es presenta com a responsable i enumera l’elaboració de perfils entre les seves finalitats.',
    }),
    s('forusapp-app-store', 'ForusApp a l’App Store (Espanya)', 'https://apps.apple.com/es/app/id1357089462', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: cap dada per rastrejar, i salut i forma física declarada per a personalització.',
    }),
    s('xiaomi-privacy-policy', 'Política de privacidad de Xiaomi', 'https://privacy.mi.com/all/es_ES', 'Xiaomi', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política general del grup: entitat responsable per a l’Espai Econòmic Europeu, règim de transferències per regió, portal de drets i desactivació dels serveis publicitaris.',
    }),
    s('xiaomi-home-privacy-policy', 'Xiaomi Home App Privacy Policy', 'https://cnbj1.fds.api.xiaomi.com/html/en/mihome_privacy_policy.html', 'Xiaomi', 'privacy-policy', 'primary', {
      summary: 'Política específica de Xiaomi Home enllaçada des de l’App Store: identificadors recollits, centres de dades a cinc països i punt de contacte a Singapur.',
    }),
    s('xiaomi-iot-whitepaper', 'Xiaomi IoT Privacy White Paper (Global)', 'https://trust.mi.com/docs/iot-privacy-white-paper-global', 'Xiaomi', 'technical-doc', 'primary', {
      summary: 'Document tècnic que descriu per tipus de dispositiu quines dades es recullen, com es xifren i quins modes locals existeixen: rellotges, aspiradores i càmeres.',
    }),
    s('xiaomi-compliance', 'Xiaomi Trust Center — Compliance', 'https://trust.mi.com/compliance', 'Xiaomi', 'audit', 'primary', {
      summary: 'Llista de certificacions del grup: ISO/IEC 27001 i 27701, SOC 2, PCI DSS i marques BSI Kitemark per a càmeres i sistemes mesh.',
    }),
    s('xiaomi-transparency-report', 'Xiaomi Transparency Report', 'https://trust.mi.com/transparency', 'Xiaomi', 'transparency-report', 'primary', {
      summary: 'Informes anuals sobre sol·licituds governamentals d’informació d’usuaris, amb edicions del 2022 al 2024.',
    }),
    s('xiaomi-misrc', 'Xiaomi Security Center (MiSRC)', 'https://www.mi.com/global/misrc', 'Xiaomi', 'technical-doc', 'primary', {
      summary: 'Centre de resposta de seguretat amb programa de recompenses propi i programa a HackerOne.',
    }),
    s('xiaomi-account-delete', 'How do I delete my Mi Account?', 'https://static.account.xiaomi.com/html/faq/en_US/faqDelAccount.html', 'Xiaomi', 'support-doc', 'primary', {
      summary: 'Pregunta freqüent oficial sobre l’eliminació del compte Xiaomi: esborra de manera irreversible les dades associades, incloses les del núvol.',
    }),
    s('xiaomi-forbes-mi-browser-2020', 'Exclusive: Warning Over Chinese Mobile Giant Xiaomi Recording Millions Of People’s Private Web And Phone Use', 'https://www.forbes.com/sites/thomasbrewster/2020/04/30/exclusive-warning-over-chinese-mobile-giant-xiaomi-recording-millions-of-peoples-private-web-and-phone-use/', 'Forbes', 'press', 'secondary', {
      summary: 'Investigació que va documentar que els navegadors de Xiaomi enviaven les adreces visitades, fins i tot en mode incògnit, a servidors a Singapur i Rússia.',
    }),
    s('xiaomi-home-nest-hub-2020', 'Xiaomi camera security bug shows other homes on Nest Hub', 'https://9to5google.com/2020/01/16/xiaomi-camera-security-bug-shows-other-homes-on-nest-hub/', '9to5Google', 'press', 'secondary', {
      summary: 'Cobertura de l’incident en què càmeres Xiaomi van mostrar fotogrames de cases alienes en altaveus amb pantalla de Google, i de la suspensió de la integració.',
    }),
    s('xiaomi-nksc-lituania-2021', 'Assessment of cybersecurity of mobile devices supporting 5G technology sold in Lithuania', 'https://www.nksc.lt/doc/en/analysis/2021-08-23_5G-CN-analysis_env3.pdf', 'Nacionalinis kibernetinio saugumo centras', 'regulator', 'authority', {
      summary: 'Informe del centre nacional de ciberseguretat de Lituània sobre capacitats de censura desactivades però reactivables remotament i enviament de dades d’ús a un servidor a Singapur.',
    }),
    s('xiaomi-noyb-2025', 'TikTok, AliExpress, SHEIN & Co surrender Europeans’ data to authoritarian China', 'https://noyb.eu/en/tiktok-aliexpress-shein-co-surrender-europeans-data-authoritarian-china', 'noyb', 'ngo', 'independent', {
      summary: 'Reclamacions presentades el gener del 2025 per transferències de dades europees a la Xina; la relativa a Xiaomi es va presentar davant l’autoritat grega.',
    }),
    s('mi-fitness-app-store', 'Mi Fitness a l’App Store (Espanya)', 'https://apps.apple.com/es/app/id1493500777', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: salut i forma física, ubicació exacta, informació de pagament i identificadors vinculats amb la identitat, sense cap dada declarada per rastrejar.',
    }),
    s('xiaomi-home-app-store', 'Xiaomi Home a l’App Store (Espanya)', 'https://apps.apple.com/es/app/id957323480', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors declarats com a dada utilitzada per rastrejar i una categoria de dades sensibles entre les vinculades amb la identitat.',
    }),
    s('fnmt-rcm-politica-privacidad', 'Política de privacidad — FNMT-RCM', 'https://www.fnmt.es/politica-privacidad', 'FNMT-RCM', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política general de l’organisme: bases legals per tractament, contacte del delegat de protecció de dades i via d’exercici de drets pel registre electrònic.',
    }),
    s('fnmt-rcm-politica-certificado-movil', 'Política de privacidad del certificado en dispositivo móvil', 'https://www.sede.fnmt.gob.es/certificados/persona-fisica/certificado-con-android/politica-de-privacidad', 'FNMT-RCM', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política específica del certificat mòbil: llista les dades tractades, la base legal de la Llei 6/2020 i els destinataris de les cessions.',
    }),
    s('fnmt-rcm-certificado-movil', 'Obtener certificado con dispositivo móvil', 'https://www.sede.fnmt.gob.es/certificados/persona-fisica/certificado-con-dispositivo-movil', 'FNMT-RCM', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Pàgina de la seu que descriu les tres vies d’acreditació de la identitat, inclosa la vídeo-identificació de pagament, i la instal·lació del certificat al telèfon.',
    }),
    s('fnmt-rcm-anular', 'Anular el certificado de persona física', 'https://www.sede.fnmt.gob.es/certificados/persona-fisica/anular', 'FNMT-RCM', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Passos reals per revocar el certificat: en línia amb el certificat, per telèfon amb el codi de sol·licitud o presencialment.',
    }),
    s('fnmt-rcm-certificaciones', 'Calidad y certificaciones — CERES', 'https://www.cert.fnmt.es/que-es-ceres/calidad', 'FNMT-RCM', 'audit', 'primary', {
      language: 'es',
      summary: 'Certificacions del prestador: ISO/IEC 27001, adequació a l’Esquema Nacional de Seguridad i conformitat ETSI com a prestador qualificat eIDAS.',
    }),
    s('fnmt-rcm-rat', 'Registro de Actividades de Tratamiento de la FNMT-RCM', 'https://www.fnmt.es/documents/10179/10671624/RAT.pdf/1e61cdb7-bc0b-339b-e82e-edbd3c32830c', 'FNMT-RCM', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Inventari públic dels tractaments de l’organisme, amb finalitats, bases legals i criteris de conservació.',
    }),
    s('fnmt-rcm-declaracion-conformidad-ens', 'Declaración de conformidad con el Esquema Nacional de Seguridad — Sede electrónica de la FNMT-RCM', 'https://www.sede.fnmt.gob.es/sobre-sede/declaracion-de-conformidad', 'FNMT-RCM', 'technical-doc', 'primary', {
      language: 'es',
      summary: 'Declaració de conformitat amb l’Esquema Nacional de Seguretat dels serveis i sistemes de la seu. Es fonamenta encara en l’article 41 del Reial decret 3/2010 i no publica la categoria del sistema; el segell de la pàgina de normativa enllaça el certificat de conformitat del 2025.',
    }),
    s('fnmt-rcm-accesibilidad', 'Declaración de Accesibilidad — Sede electrónica de la FNMT-RCM', 'https://www.sede.fnmt.gob.es/accesibilidad', 'FNMT-RCM', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Declaració d’accessibilitat de la seu: «parcialmente conforme» amb el Reial decret 1112/2018, per autoavaluació, preparada l’abril del 2023 i revisada el juliol del 2026.',
    }),
    s('fnmt-rcm-certificado-software', 'Obtener certificado software — persona física', 'https://www.sede.fnmt.gob.es/certificados/persona-fisica/obtener-certificado-software', 'FNMT-RCM', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Via alternativa a l’aplicació: sol·licitud pel navegador, acreditació presencial de la identitat en una oficina d’acreditació i descàrrega del certificat programari.',
    }),
    s('fnmt-rcm-ley-6-2020', 'Ley 6/2020, de 11 de noviembre, reguladora de determinados aspectos de los servicios electrónicos de confianza', 'https://www.boe.es/buscar/act.php?id=BOE-A-2020-14046', 'Boletín Oficial del Estado', 'legislation', 'authority', {
      language: 'es',
      summary: 'Norma que empara el servei de certificació i que fixa, a l’article 9.3.a), la conservació obligatòria de la informació del servei durant quinze anys des de l’extinció del certificat.',
    }),
    s('certificado-digital-fnmt-app-store', 'Certificado digital FNMT a l’App Store (Espanya)', 'https://apps.apple.com/es/app/id6449721772', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de l’aplicació: el desenvolupador declara «No se recopilan datos».',
    }),
    s('bono-cultural-joven-app-store', 'Bono Cultural Joven 2026 a l’App Store (Espanya)', 'https://apps.apple.com/es/app/id6781970565', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de l’aplicació: «No se recopilan datos». L’enllaç de política que hi consta apunta encara a la convocatòria del 2025.',
    }),
    s('bono-cultural-joven-politica-privacidad', 'Política de privacidad — Bono Cultural Joven', 'https://bonoculturajoven.gob.es/politica-privacidad.html', 'Ministerio de Cultura', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Identifica el Ministeri de Cultura com a responsable i la FNMT-RCM, Correos i Tragsatec com a encarregats; bases legals d’obligació legal i interès públic.',
    }),
    s('bono-cultural-joven-real-decreto', 'Real Decreto 401/2026 por el que se regula la concesión del Bono Cultural Joven', 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-10885', 'Boletín Oficial del Estado', 'legislation', 'authority', {
      language: 'es',
      summary: 'Norma de la convocatòria vigent: requisits de l’ajuda, categories de despesa i tractament de dades, amb informe previ de l’AEPD.',
    }),
    s('bono-cultural-joven-rat-cultura', 'Registro de Actividades de Tratamiento del Ministerio de Cultura — actividad «Bono Cultural Joven»', 'https://www.cultura.gob.es/servicios-a-la-ciudadania/proteccion-datos/pagina-master-rat1/actividad-13.html', 'Ministerio de Cultura', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Fitxa del registre d’activitats dedicada al bo: bases jurídiques, categories de dades, destinataris, mesures de seguretat de l’annex II del Reial decret 311/2022, termini de conservació i llista nominal de transferències internacionals.',
    }),
    s('bono-cultural-joven-accesibilidad', 'Declaración de Accesibilidad — Bono Cultural Joven', 'https://bonoculturajoven.gob.es/accesibilidad.html', 'Ministerio de Cultura', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Declaració d’accessibilitat del web del bo: «parcialmente conforme» amb el Reial decret 1112/2018 per enllaços amb text no significatiu, preparada el juliol del 2024 amb un informe de l’Observatorio de Accesibilidad Web.',
    }),
    s('bono-cultural-joven-ley-38-2003', 'Ley 38/2003, de 17 de noviembre, General de Subvenciones', 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-20977', 'Boletín Oficial del Estado', 'legislation', 'authority', {
      language: 'es',
      summary: 'Norma general de subvencions; l’article 39.1 fixa en quatre anys la prescripció del dret de l’Administració a reconèixer o liquidar el reintegrament, que és el que manté viu l’expedient.',
    }),
  ],
  apps: [
    bbc,
    bbcWorldService,
    certificadoDigitalFnmt,
    bonoCulturalJoven,
    idealista,
    yaencontre,
    vivagym,
    forusapp,
    miFitness,
    xiaomiHome,
  ],
  incidents: [
    {
      slug: 'bbc-zellis-moveit-2023',
      title: 'Filtració de dades del personal de la BBC a través del proveïdor de nòmines Zellis',
      type: 'breach',
      severity: 'high',
      company: 'bbc',
      occurredAt: '2023-05-31',
      disclosedAt: '2023-06-05',
      description:
        'L’explotació d’una vulnerabilitat de dia zero del programa de transferència de fitxers MOVEit va comprometre Zellis, el proveïdor de nòmines de diverses grans organitzacions britàniques. Entre les afectades hi havia la BBC: es van veure compromesos números d’identificació d’empleat, dates de naixement, adreces particulars i números de seguretat social britànica. La BBC va afirmar que no creia que s’haguessin sostret dades bancàries. Zellis ho va notificar a l’autoritat britànica, a la irlandesa i als centres nacionals de ciberseguretat dels dos països. Afecta dades laborals, no de les persones usuàries de les aplicacions.',
      affectedPeople: 'Personal de la BBC i d’altres organitzacions clientes de Zellis.',
      sources: ['bbc-zellis-moveit-press'],
    },
    {
      slug: 'bbc-pla-de-pensions-2024',
      title: 'Còpia no autoritzada de fitxers del pla de pensions de la BBC',
      type: 'breach',
      severity: 'high',
      company: 'bbc',
      occurredAt: '2024-05-21',
      disclosedAt: '2024-05-29',
      description:
        'Es van copiar fitxers d’un servei d’emmagatzematge en línia del pla de pensions de la BBC amb noms, números de seguretat social britànica, dates de naixement i adreces particulars de més de 25.000 persones membres. La BBC va descartar la filtració de dades bancàries, telèfons, contrasenyes i adreces electròniques, i ho va notificar a l’autoritat de protecció de dades i al regulador de pensions. Com l’incident anterior, afecta personal i beneficiaris, no les persones usuàries de les aplicacions.',
      affectedPeople: 'Més de 25.000 persones membres del pla de pensions.',
      sources: ['bbc-pension-press'],
    },
    {
      slug: 'vivagym-synergym-filtracio-2024',
      title: 'Filtració de dades de clients de Synergym, cadena adquirida després pel grup VivaGym',
      type: 'breach',
      severity: 'high',
      company: 'synergym',
      occurredAt: '2024-01-01',
      disclosedAt: '2026-06-26',
      description:
        'Es van posar a la venda en un fòrum clandestí més de 770.000 registres de clients de Synergym amb nom, document d’identitat, adreça, data de naixement, telèfon, adreça electrònica i número de compte bancari. L’empresa va situar l’incident el 2024, va dir que l’havia mitigat i que l’havia notificat a l’Agència Espanyola de Protecció de Dades i a les persones afectades. Synergym va ser adquirida pel grup VivaGym l’abril del 2026, de manera que l’incident és anterior a l’adquisició i no és atribuïble a l’aplicació VivaGym MyApp.',
      affectedPeople: 'Més de 770.000 registres de clients de Synergym.',
      sources: ['vivagym-synergym-press'],
    },
    {
      slug: 'xiaomi-mi-browser-historial-2020',
      title: 'Els navegadors de Xiaomi enviaven l’historial de navegació, també en mode incògnit',
      type: 'misuse',
      severity: 'high',
      company: 'xiaomi',
      occurredAt: '2020-04-30',
      disclosedAt: '2020-04-30',
      description:
        'Un investigador de seguretat va documentar que Mi Browser, Mi Browser Pro i Mint Browser enviaven les adreces visitades, les cerques i els elements del canal de notícies a servidors a Singapur i Rússia, associats a un identificador que permetia reidentificar la persona, i que ho feien també amb el mode incògnit actiu. Xiaomi ho va negar inicialment i després va afegir una opció per desactivar-ho en mode incògnit. No afecta directament les aplicacions d’aquest lot, però és el precedent més citat sobre les pràctiques de telemetria del grup.',
      affectedPeople: 'Persones usuàries dels navegadors de Xiaomi.',
      sources: ['xiaomi-forbes-mi-browser-2020'],
    },
    {
      slug: 'xiaomi-home-cameres-nest-hub-2020',
      title: 'Càmeres de Xiaomi mostraven imatges de cases alienes en altaveus amb pantalla de Google',
      type: 'breach',
      severity: 'critical',
      apps: ['xiaomi-home'],
      company: 'xiaomi',
      occurredAt: '2020-01-01',
      disclosedAt: '2020-01-03',
      description:
        'En emetre la imatge d’una càmera domèstica de Xiaomi cap a un altaveu amb pantalla de Google, diverses persones van rebre fotogrames fixos de cases desconegudes, incloses imatges de gent dormint i d’un nadó al bressol. Google va desactivar la integració de Xiaomi amb el seu assistent fins a la correcció. Xiaomi ho va atribuir a una actualització de la memòria cau feta amb mala connectivitat i va xifrar en poc més d’un miler les persones potencialment afectades; la integració es va restablir el 16 de gener.',
      affectedPeople: 'Fins a un miler de persones usuàries de càmeres Xiaomi.',
      sources: ['xiaomi-home-nest-hub-2020'],
    },
    {
      slug: 'xiaomi-lituania-censura-2021',
      title: 'Lituània documenta capacitats de censura i enviament de dades a Singapur en telèfons Xiaomi',
      type: 'misuse',
      severity: 'medium',
      company: 'xiaomi',
      occurredAt: '2021-08-23',
      disclosedAt: '2021-09-22',
      description:
        'El centre nacional de ciberseguretat de Lituània va publicar una anàlisi tècnica d’un model de Xiaomi en què va trobar una llista de termes susceptibles de ser filtrats, desactivada per a la regió europea però reactivable remotament, i la transmissió xifrada de dades d’ús a un servidor a Singapur durant la inicialització d’aplicacions de fàbrica. Xiaomi va negar que censurés continguts. Les recomanacions de l’informe eren d’abast nacional i no van derivar en cap sanció de protecció de dades.',
      affectedPeople: 'Persones usuàries dels models analitzats.',
      regulatory: {
        authority: 'Nacionalinis kibernetinio saugumo centras (Lituània)',
        status: 'final',
      },
      sources: ['xiaomi-nksc-lituania-2021'],
    },
    {
      slug: 'xiaomi-noyb-transferencies-xina-2025',
      title: 'Reclamació de noyb contra Xiaomi per les transferències de dades a la Xina',
      type: 'other',
      severity: 'medium',
      company: 'xiaomi-netherlands',
      occurredAt: '2025-01-16',
      disclosedAt: '2025-01-16',
      description:
        'L’organització noyb va presentar sis reclamacions en cinc estats contra empreses amb matriu xinesa per transferir dades personals de persones europees a la Xina sense un nivell de protecció equivalent. La relativa a Xiaomi es va presentar davant l’autoritat grega i demana la suspensió immediata de les transferències. No ens consta cap resolució publicada.',
      affectedPeople: 'Persones usuàries europees dels serveis de Xiaomi.',
      regulatory: {
        authority: 'Hellenic Data Protection Authority (Grècia)',
        legalBasis: 'Articles 44 i 46 del RGPD',
        status: 'ongoing',
      },
      sources: ['xiaomi-noyb-2025'],
    },
  ],
  storeIds: {
    bbc: 'uk.co.bbc.news',
    'bbc-world-service': 'uk.co.bbc.worldservice',
    'certificado-digital-fnmt': 'es.fnmtrcm.ceres.certificadoDigitalFNMT',
    'bono-cultural-joven': 'com.fnmt.bono.cultural26',
    idealista: 'com.idealista.idealistaios',
    yaencontre: 'com.yaencontre.vivienda',
    vivagym: 'com.myvitale.vggroup',
    forusapp: 'com.myvitale.forus',
    'mi-fitness': 'com.xiaomi.miwatch.pro',
    'xiaomi-home': 'com.xiaomi.mihome',
  },
}
