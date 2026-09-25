import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 06 de la segona onada: serveis electrònics de l’Administració General
 * de l’Estat (Mi Carpeta Ciudadana, Notifica i Autofirma), els identificadors
 * per foto de Next Vision (FoilSnap, CoinSnap i AntiqSnap), les dues
 * aplicacions de Shopify (Shop i Shopify) i les dues de la Real Federación
 * Andaluza de Fútbol.
 *
 * Tres grups amb un tret comú: l’etiqueta de privadesa de l’App Store no
 * coincideix amb el que diuen les polítiques. Les aplicacions públiques i
 * l’antiga aplicació de la RFAF declaren que no recullen cap dada; les de Next
 * Vision diuen a la pàgina d’ajuda que no compartiran mai la informació amb
 * ningú, mentre que la política i l’etiqueta declaren rastreig publicitari.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/* ═══════════════════════ Peces comunes: Administració ═══════════════════════ */

const govNoLabel =
  'L’etiqueta de l’App Store diu «No se recopilan datos», però la política del servei descriu dades de contacte, identificadors del dispositiu i dades que s’obtenen d’altres administracions.'

const govTracking = {
  crossAppTracking: f('no', 'official', ['aead-rat-sgad'], 'El registre d’activitats no preveu cap comunicació de dades a tercers ni cap finalitat publicitària.'),
  advertisingIdentifiers: unknown('No hem trobat cap declaració sobre l’identificador publicitari del dispositiu.'),
  thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
}

const govAds = {
  targetedAdvertising: f('no', 'official', ['aead-rat-sgad'], 'Cap de les finalitats inscrites al registre d’activitats és publicitària.'),
}

const govSecurityBase = {
  e2ee: na('No és un servei de comunicació entre persones.'),
  transportEncryption: f('yes', 'official', ['aead-rat-sgad'], 'El registre d’activitats remet a les mesures de l’annex II de l’Esquema Nacional de Seguretat (Reial decret 311/2022), que inclouen la protecció de les comunicacions.'),
  atRestEncryption: unknown('El registre remet a l’Esquema Nacional de Seguretat, però no hem trobat cap document que concreti el xifratge en repòs.'),
  independentAudits: unknown('No hem trobat publicada cap certificació de conformitat amb l’Esquema Nacional de Seguretat específica del servei.'),
  bugBounty: unknown('No hem trobat cap programa de recompenses; no és habitual als serveis de l’Administració, però no ho hem pogut confirmar amb una font.'),
  vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt als dominis del servei. La política només ofereix una adreça per comunicar bretxes de dades personals.'),
}

/* ═══════════════════════ Peces comunes: Next Vision ═══════════════════════ */

const nvLabelTracking =
  'L’etiqueta de l’App Store declara compres, identificadors i dades d’ús «utilitzats per rastrejar-te» entre aplicacions i llocs d’altres empreses.'

const nvRights = (policy: string) => ({
  dataExport: f('partial', 'official', [policy], 'La política reconeix el dret de portabilitat, però només per correu electrònic; no hi ha cap eina d’exportació.'),
  exportFormatQuality: 'unknown' as const,
  rightsExercise: f('partial', 'official', [policy], 'Els drets s’exerceixen per correu a l’adreça de suport; l’empresa pot demanar un document d’identitat i respon en un mes, prorrogable dos mesos més. No hi ha delegat de protecció de dades ni representant a la UE identificats.', {
    responseTimeDays: 30,
  }),
})

const nvSecurity = (policy: string) => ({
  e2ee: na('No és un servei de comunicació entre persones.'),
  transportEncryption: f('partial', 'official', [policy], 'La política parla genèricament de xifratge, tallafocs i autenticació de servidors, però adverteix que no pot garantir que les dades no s’interceptin en trànsit.'),
  atRestEncryption: unknown('La política esmenta el xifratge de manera genèrica, sense dir si s’aplica a les dades emmagatzemades.'),
  mfa: unknown('No hem trobat cap opció de verificació en dos passos; el compte opcional es lliga a l’identificador d’Apple o de Google.'),
  independentAudits: unknown('No consta cap auditoria ni certificació publicada.'),
  bugBounty: unknown('No hem trobat cap programa de recompenses.'),
  vulnerabilityDisclosure: unknown('No hem trobat cap canal de notificació de vulnerabilitats ni fitxer security.txt.'),
})

/* ═══════════════════════ Peces comunes: Shopify ═══════════════════════ */

const shopifyTransfers = f('yes', 'official', ['shopify-privacy-policy'], 'Les dades de l’Espai Econòmic Europeu es transfereixen a altres empreses del grup amb normes corporatives vinculants, i a tercers amb clàusules contractuals tipus. Per al Canadà, on té la seu, hi ha una decisió d’adequació.', { mechanism: 'bcrs' })

/* ═══════════════════════ Peces comunes: RFAF ═══════════════════════ */

const rfafRights = (policy: string) => ({
  dataExport: f('partial', 'official', [policy], 'La política reconeix la portabilitat, però cal demanar-la per correu amb una còpia del DNI.'),
  exportFormatQuality: 'unknown' as const,
  rightsExercise: f('yes', 'official', [policy], 'Els drets s’exerceixen per escrit a calidad@rfaf.es amb una còpia del DNI. Hi ha un delegat de protecció de dades extern (Protection Report, S.L.).', {
    url: 'mailto:calidad@rfaf.es',
  }),
})

const rfafSecurity = {
  e2ee: na('No és un servei de comunicació privada entre persones.'),
  transportEncryption: unknown('La política no diu res sobre les mesures de seguretat.'),
  atRestEncryption: unknown('La política no diu res sobre les mesures de seguretat.'),
  mfa: unknown('No hem trobat cap informació sobre la verificació en dos passos.'),
  independentAudits: unknown('No consta cap auditoria publicada.'),
  bugBounty: unknown('No hem trobat cap programa de recompenses.'),
  vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt a rfaf.es ni cap canal de notificació de vulnerabilitats.'),
}

/* ═══════════════════════ Mi Carpeta Ciudadana ═══════════════════════ */
const carpeta: AppSeed = {
  slug: 'mi-carpeta-ciudadana',
  name: 'Mi Carpeta Ciudadana',
  company: 'aead',
  categories: ['administracio-publica'],
  tagline: 'Reuneix dades de desenes d’administracions en una sola aplicació, però l’etiqueta de l’App Store diu que no en recull cap',
  summary:
    'Mi Carpeta Ciudadana mostra en un sol lloc dades que guarden altres administracions: partida de naixement, prestacions, béns immobles, títols, certificats de discapacitat, vehicles i expedients oberts. L’Agència Estatal d’Administració Digital diu que no les desa i que només les consulta quan les demanes, però sí que conserva preferències, un resum personal i els justificants generats. No hi ha publicitat ni transferències fora de la UE; el punt feble és la transparència, perquè l’etiqueta de l’App Store afirma que l’aplicació no recull cap dada.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'public-service',
  jurisdiction: 'Espanya; servei públic de l’Administració General de l’Estat',
  links: {
    website: 'https://carpetaciudadana.gob.es/',
    privacyPolicy: 'https://masinformacioncarpeta.carpetaciudadana.gob.es/infocc/en/politica-privacidad-carpeta-ciudadana',
    appStore: appStore('1555943725'),
  },
  accountRequired: f('yes', 'official', ['carpeta-ciudadana-app-store'], 'L’accés es fa amb les credencials de la plataforma Cl@ve; no hi ha un compte propi amb contrasenya.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  publicService: {
    isPublicService: true,
    administrationLevel: 'state',
    legalBasis: f('partial', 'official', ['carpeta-ciudadana-privacy', 'aead-rat-sgad'], 'La política invoca el consentiment (article 6.1.a del RGPD) per a la configuració de privadesa, els avisos i el resum personal, i el compliment d’una missió d’interès públic (article 6.1.e) per a la resta. De la normativa habilitant, però, només en dona el nom: Llei 39/2015, Llei 40/2015 i Reial decret 203/2021, sense cap article. El registre d’activitats encara va més curt i hi inscriu només el consentiment.', {
      norm: 'RGPD, article 6.1.a i 6.1.e; Llei 39/2015 i Llei 40/2015, citades sense article',
    }),
    processingRegistry: f('yes', 'official', ['aead-rat-sgad', 'carpeta-ciudadana-privacy'], 'El registre del ministeri conté dues fitxes identificables del servei: «Mi Carpeta Ciudadana», per a les dades de contacte i les preferències de la persona usuària, i «Mi Carpeta Ciudadana (encargado)», per a les dades que la Carpeta consulta a altres administracions.', {
      url: 'https://digital.gob.es/content/dam/portal-mtdfp/ministerio/proteccion-datos/RAT_SGAD.pdf',
    }),
    dpia: unknown('No hem trobat publicada cap avaluació d’impacte relativa a la protecció de dades, tot i que el servei reuneix dades de salut, laborals i patrimonials de desenes d’administracions.'),
    ensConformity: f('partial', 'official', ['carpeta-ciudadana-privacy', 'aead-rat-sgad'], 'Tant la política com el registre d’activitats declaren que les mesures aplicades són les de l’annex II del Reial decret 311/2022, però no hem trobat publicada ni la declaració de conformitat amb l’Esquema Nacional de Seguretat ni la categoria del sistema.'),
    dpo: f('yes', 'official', ['carpeta-ciudadana-privacy'], 'La política identifica el delegat de protecció de dades del Ministeri per a la Transformació Digital i de la Funció Pública, amb correu electrònic i adreça postal.', {
      contact: 'dpd@digital.gob.es',
    }),
    offlineAlternative: f('yes', 'official', ['boe-ley-39-2015', 'carpeta-ciudadana-privacy'], 'La Carpeta no té dades pròpies: només ensenya el que continua guardant cada administració d’origen, on es pot demanar pels canals de sempre. L’article 14.1 de la Llei 39/2015 garanteix a les persones físiques que puguin triar no relacionar-s’hi per mitjans electrònics.'),
    accessibilityStatement: f('partial', 'official', ['carpeta-ciudadana-accessibilitat'], 'L’aplicació mòbil té declaració d’accessibilitat pròpia i s’hi declara «parcialment conforme» amb el Reial decret 1112/2018, sobretot pels documents PDF que es descarreguen des de l’aplicació. És una autoavaluació de l’AEAD preparada el 12 de setembre de 2022, i aquella és també l’última revisió: fa més de tres anys que no es refà.', {
      url: 'https://masinformacioncarpeta.carpetaciudadana.gob.es/infocc/accesibilidad-app',
    }),
    mandatoryRetention: f('no', 'official', ['carpeta-ciudadana-privacy'], 'Cap norma obliga a conservar el que desa la Carpeta: el consentiment del resum personal es pot retirar i la política fixa terminis de supressió per inactivitat. Les dades que no es poden esborrar són les de les administracions d’origen, que la Carpeta no guarda.'),
  },
  dataSummary:
    'Per disseny, l’aplicació pot ensenyar gairebé tota la relació d’una persona amb l’Estat: identitat, família, feina i pensió, salut i discapacitat, patrimoni, vehicles i tràmits pendents. Que aquestes dades no es desin a la Carpeta redueix el risc, però l’accés al compte Cl@ve dona accés a tot el conjunt.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['carpeta-ciudadana-privacy', 'aead-rat-sgad'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['carpeta-ciudadana-privacy'], note: 'El DNI o NIE és la clau amb què es consulten les dades a la resta d’administracions.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['carpeta-ciudadana-privacy', 'aead-rat-sgad'], note: 'Per rebre avisos de cites i caducitats, si s’activen.' }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['carpeta-ciudadana-privacy'], note: 'Procedeix d’altres administracions i només es consulta quan es demana.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['carpeta-ciudadana-privacy'], note: 'Per enviar notificacions a l’aplicació.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['aead-rat-sgad'], note: 'Una foto de perfil opcional.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['aead-rat-sgad'], note: 'Serveis consultats i favorits.' }),
    row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['carpeta-ciudadana-app-store'], note: 'Els justificants generats queden a «Mis documentos»; es poden compartir amb un enllaç i esborrar en qualsevol moment.' }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['carpeta-ciudadana-privacy'], note: 'Certificats de discapacitat i situació de dependència. Es consulten a l’administració que els té i, segons la política, no es desen.' }),
    row('ocupacio-i-carrec', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['carpeta-ciudadana-privacy'], note: 'Vida laboral, prestacions i jubilació, consultades a demanda.' }),
    row('nivell-formatiu', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['carpeta-ciudadana-privacy'], note: 'Títols i beques, consultats a demanda.' }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['carpeta-ciudadana-privacy'], note: 'Les consultes a l’assistent conversacional s’esborren en tancar la sessió o després de 30 minuts d’inactivitat. La política no diu quina tecnologia hi ha al darrere.' }),
    row('dades-biometriques', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['carpeta-ciudadana-privacy'], note: 'L’accés amb cara o empremta el gestiona el sistema operatiu i les dades biomètriques no surten del mòbil.' }),
  ],
  tracking: govTracking,
  dataUses: {
    ...govAds,
    profiling: f('no', 'official', ['carpeta-ciudadana-privacy'], 'La política no preveu elaboració de perfils ni decisions automatitzades; el resum personal el configura la mateixa persona.'),
    aiTraining: unknown('La política descriu un assistent conversacional, però no diu si fa servir un model d’IA ni si les consultes serveixen per entrenar-lo.'),
  },
  sharing: {
    thirdPartySharing: f('no', 'official', ['aead-rat-sgad'], 'El registre d’activitats diu que no hi ha previstes comunicacions de dades. Les dades que es mostren les té l’administració d’origen, que és qui en respon.'),
    intraGroupSharing: f('partial', 'official', ['carpeta-ciudadana-privacy'], 'La Carpeta fa d’intermediària: consulta dades de moltes administracions, que en són les responsables, i l’AEAD n’és l’encarregada del tractament.'),
    dataBrokerSales: f('no', 'official', ['aead-rat-sgad'], 'No hi ha cap cessió prevista.'),
    internationalTransfers: f('no', 'official', ['carpeta-ciudadana-privacy', 'aead-rat-sgad'], 'La política diu que l’emmagatzematge i la resta del tractament són sempre dins de la Unió Europea.', { mechanism: 'none' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe sobre peticions d’accés a les dades per part d’altres autoritats.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['carpeta-ciudadana-privacy'], 'La política fixa terminis per a cada bloc de dades que conserva el servei.'),
    dataAfterDeletion: f('partial', 'official', ['carpeta-ciudadana-privacy'], 'Les preferències i els esdeveniments es conserven fins a dos anys des de l’últim accés; la política no explica què passa si es demana la supressió abans.'),
    periods: [
      { dataType: 'interaccions-i-us', period: 'Resum personal: s’esborra després de 3 mesos sense entrar a la Carpeta', sources: ['carpeta-ciudadana-privacy'] },
      { dataType: 'adreca-electronica', period: 'Configuració, preferències i propers esdeveniments: fins a 2 anys des de l’últim accés', sources: ['carpeta-ciudadana-privacy'] },
      { dataType: 'contingut-de-missatges', period: 'Assistent conversacional: en tancar la sessió o als 30 minuts d’inactivitat', sources: ['carpeta-ciudadana-privacy'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['carpeta-ciudadana-privacy'], 'No hi ha un compte propi que s’hagi d’eliminar: les dades de les altres administracions no es desen. El que conserva el servei s’esborra per inactivitat o retirant el consentiment.'),
    selfService: f('partial', 'official', ['carpeta-ciudadana-privacy', 'carpeta-ciudadana-app-store'], 'Es pot retirar el consentiment del resum personal i esborrar els justificants des de l’aplicació. Per a la resta, cal escriure a l’adreça de protecció de dades.'),
    difficulty: 'medium',
    steps: [
      'A «Mis documentos», esborra els justificants que hagis generat.',
      'A la configuració, desactiva el resum personal i els avisos per correu i al mòbil.',
      'Per suprimir la resta de dades que conserva el servei, escriu a protecciondatos.sgad@correo.gob.es.',
      'Si no hi tornes a entrar, el resum personal s’esborra als 3 mesos i les preferències als 2 anys.',
    ],
    obstacles: 'La política no descriu cap botó per esborrar-ho tot d’una vegada; cal combinar les opcions de l’aplicació amb una petició per correu.',
    dataRetained: 'Preferències i esdeveniments fins a dos anys des de l’últim accés. Les dades consultades continuen a l’administració d’origen.',
    sources: ['carpeta-ciudadana-privacy', 'carpeta-ciudadana-app-store'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['carpeta-ciudadana-privacy', 'carpeta-ciudadana-app-store'], 'La política reconeix la portabilitat. A la pràctica, l’aplicació genera justificants descarregables de les dades de cada administració.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['carpeta-ciudadana-privacy'], 'Drets per correu a la unitat de protecció de dades, amb un delegat de protecció de dades identificat. Les dades d’altres administracions s’hi han de demanar a elles.', {
      url: 'mailto:protecciondatos.sgad@correo.gob.es',
    }),
  },
  controls: {
    adPersonalizationOptOut: na('El servei no mostra publicitat.'),
    telemetryOptOut: unknown('No hem trobat si l’aplicació recull dades d’ús o de rendiment ni si es poden desactivar.'),
    granularControls: f('partial', 'official', ['carpeta-ciudadana-privacy', 'carpeta-ciudadana-app-store'], 'El resum personal, els avisos i el biomètric són opcionals i es configuren per separat.'),
    defaultPosture: 'protective',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a l’aplicació.'),
  },
  security: {
    ...govSecurityBase,
    mfa: f('yes', 'official', ['carpeta-ciudadana-app-store', 'notifica-dehu-portal'], 'L’accés passa per Cl@ve, que admet certificat electrònic, DNI electrònic, Cl@ve PIN i Cl@ve Mòbil, amb confirmació a l’aplicació.', {
      methods: ['app-push'],
    }),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      `${govNoLabel} La contradicció és de transparència, no necessàriament de pràctica: Apple només compta com a «recollides» les dades que surten del dispositiu i es conserven, i la Carpeta en conserva algunes (preferències, resum personal, justificants). A l’App Store l’aplicació encara figura a nom del Ministeri d’Afers Econòmics i Transformació Digital, però la responsable és l’AEAD.`,
    openQuestions: [
      'La cerca d’incidents no s’ha pogut completar: s’havia esgotat el pressupost de cerques web de la sessió.',
      'Quina tecnologia fa servir l’assistent conversacional i on es processen les consultes?',
    ],
  },
}

/* ═══════════════════════ Notifica (DEHú) ═══════════════════════ */
const notifica: AppSeed = {
  slug: 'notifica',
  name: 'Notifica App',
  company: 'aead',
  categories: ['administracio-publica'],
  tagline: 'La bústia de notificacions oficials de l’Estat al mòbil, amb dades mínimes i sense publicitat',
  summary:
    'Notifica és l’aplicació de la Direcció Electrònica Habilitada Única (DEHú), on es reben i es recullen les notificacions de les administracions adherides. L’AEAD només és responsable de les dades de contacte i del dispositiu; el contingut de cada notificació és de l’organisme que l’envia. La política no preveu perfils, decisions automatitzades ni transferències fora de la UE. L’etiqueta de l’App Store, però, diu que no es recull cap dada.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'public-service',
  jurisdiction: 'Espanya; servei públic de l’Administració General de l’Estat',
  links: {
    website: 'https://dehu.redsara.es/',
    privacyPolicy: 'https://dehu.redsara.es/es/privacity-app',
    appStore: appStore('6450259609'),
  },
  accountRequired: f('yes', 'official', ['notifica-app-store'], 'Cal identificar-se amb algun dels sistemes de Cl@ve.'),
  openSource: unknown('No hem trobat publicat el codi de l’aplicació.'),
  publicService: {
    isPublicService: true,
    administrationLevel: 'state',
    legalBasis: f('partial', 'official', ['notifica-privacy'], 'La política diu que els tractaments es basen en el compliment d’una obligació legal «de conformitat amb l’article 6.1 del RGPD», sense dir quina lletra, i enumera després la Llei 39/2015, la Llei 40/2015 i el Reial decret 203/2021 sense concretar-ne cap article.', {
      norm: 'RGPD, article 6.1 (sense lletra); Llei 39/2015 i Reial decret 203/2021, citades sense article',
    }),
    processingRegistry: f('yes', 'official', ['aead-rat-sgad', 'notifica-privacy'], 'La política enllaça el registre del ministeri, que hi té dues fitxes identificables: «Envío de avisos sobre comunicaciones y notificaciones al ciudadano», amb l’AEAD com a responsable del correu i el telèfon dels avisos, i «Acceso del ciudadano a las notificaciones y comunicaciones administrativas emitidas por las Administraciones Públicas (encargado)», que és la de la DEHú i on el responsable és cada administració usuària.', {
      url: 'https://digital.gob.es/content/dam/portal-mtdfp/ministerio/proteccion-datos/RAT_SGAD.pdf',
    }),
    dpia: unknown('No hem trobat publicada cap avaluació d’impacte, tot i que el mateix registre d’activitats admet que el contingut de les notificacions pot incloure dades de salut o sancions.'),
    ensConformity: f('partial', 'official', ['notifica-privacy', 'aead-rat-sgad'], 'La política i el registre d’activitats declaren que les mesures implantades són les de l’annex II del Reial decret 311/2022, però no hem trobat publicada ni la declaració de conformitat amb l’Esquema Nacional de Seguretat ni la categoria del sistema.'),
    dpo: f('yes', 'official', ['notifica-privacy'], 'La política identifica el delegat de protecció de dades amb correu i adreça postal, i el presenta com a via de reclamació prèvia i potestativa.', {
      contact: 'dpd@digital.gob.es',
    }),
    offlineAlternative: f('partial', 'official', ['boe-ley-39-2015', 'notifica-dehu-portal'], 'L’aplicació mai és obligatòria: el mateix servei és al portal web de la DEHú. La bústia electrònica, en canvi, només té alternativa en paper per a les persones físiques, que segons l’article 14.1 de la Llei 39/2015 poden triar el canal. L’article 14.2 obliga a relacionar-se electrònicament les persones jurídiques, les entitats sense personalitat i qui exerceix una professió col·legiada.'),
    accessibilityStatement: f('partial', 'official', ['notifica-accessibilitat'], 'L’aplicació DEHú-Notifica té declaració pròpia i s’hi declara «parcialment conforme» amb el Reial decret 1112/2018: ordre del focus, idioma del programari, etiquetes del formulari de contacte i documents descarregables. L’autoavaluació la va fer un tercer i la declaració es va preparar i revisar el 29 d’octubre de 2025.', {
      url: 'https://dehu.redsara.es/es/accesibility-app',
    }),
    mandatoryRetention: f('yes', 'official', ['boe-ley-39-2015', 'notifica-dehu-portal'], 'La bústia de la DEHú no es pot eliminar perquè no és un compte voluntari: l’article 43 de la Llei 39/2015 estableix que les notificacions electròniques es practiquen per compareixença a la Direcció Electrònica Habilitada única, l’article 14.2 obliga bona part dels destinataris a rebre-les per aquesta via, i les notificacions i els justificants de compareixença formen part de l’expedient administratiu que l’article 70.1 obliga a conservar l’organisme emissor. El que sí que s’esborra a petició són les dades de contacte i els dispositius dels avisos.'),
  },
  dataSummary:
    'Les notificacions poden contenir sancions, requeriments d’Hisenda, resolucions de prestacions o citacions judicials. El servei només hi fa d’intermediari, però un accés indegut al compte les exposaria totes.',
  dataCollection: [
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['notifica-dehu-portal'], note: 'Les notificacions s’adrecen al NIF de la persona.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['notifica-privacy', 'aead-rat-sgad'], note: 'Per rebre avisos de cortesia de noves notificacions.' }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['notifica-privacy', 'aead-rat-sgad'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['notifica-privacy', 'notifica-dehu-portal'], note: 'Per als avisos push; el portal mostra un historial de dispositius.' }),
    row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['aead-rat-sgad'], note: 'El contingut de les notificacions. L’AEAD n’és encarregada; la responsable és l’administració que notifica.' }),
    row('dades-biometriques', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['notifica-privacy'], note: 'L’accés biomètric opcional el gestiona el sistema operatiu dins del mòbil.' }),
  ],
  tracking: govTracking,
  dataUses: {
    ...govAds,
    profiling: f('no', 'official', ['notifica-privacy'], 'La política diu expressament que no es tracten dades per elaborar perfils ni hi ha decisions automatitzades.'),
    aiTraining: unknown('La política no en parla.'),
  },
  sharing: {
    thirdPartySharing: f('no', 'official', ['notifica-privacy', 'aead-rat-sgad'], 'Només hi té accés la persona titular; el personal del servei hi pot accedir per resoldre una incidència.'),
    intraGroupSharing: f('partial', 'official', ['aead-rat-sgad'], 'El contingut de les notificacions procedeix dels organismes emissors, que en són els responsables.'),
    dataBrokerSales: f('no', 'official', ['aead-rat-sgad'], 'No hi ha cap cessió prevista.'),
    internationalTransfers: f('no', 'official', ['notifica-privacy'], 'Tot el tractament es fa dins de la Unió Europea.', { mechanism: 'none' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència del servei.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['notifica-privacy'], 'Només diu que les dades es conserven el temps necessari per a la finalitat i per determinar responsabilitats.'),
    dataAfterDeletion: f('partial', 'official', ['notifica-dehu-portal'], 'Quan s’esborren les dades de contacte, s’eliminen definitivament els correus i el dispositiu per als avisos. Les notificacions continuen a la DEHú, que és obligatòria per a qui ha de rebre-les.'),
  },
  accountDeletion: {
    possible: f('partial', 'official', ['notifica-dehu-portal', 'notifica-privacy'], 'La bústia de la DEHú no es pot eliminar; sí que es poden esborrar les dades de contacte i els dispositius.'),
    selfService: f('yes', 'official', ['notifica-dehu-portal'], 'El portal té l’opció «Eliminar todos mis datos de contacto», que esborra els correus i el dispositiu per als avisos push.'),
    difficulty: 'easy',
    steps: [
      'Entra a dehu.redsara.es o a l’aplicació amb Cl@ve.',
      'Obre «Datos de contacto y avisos».',
      'Tria «Eliminar todos mis datos de contacto» i confirma-ho.',
      'Revisa l’«Historial de dispositivos» per treure els mòbils que ja no facis servir.',
    ],
    obstacles: 'Les notificacions no es poden esborrar: la bústia existeix per obligació legal i el contingut és de cada organisme emissor.',
    dataRetained: 'Les notificacions i els justificants de compareixença, sota la responsabilitat de l’administració que les ha emès.',
    sources: ['notifica-dehu-portal', 'notifica-privacy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['notifica-privacy'], 'La política reconeix la portabilitat; cada notificació es pot descarregar amb el seu justificant, però no hi ha una exportació completa.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['notifica-privacy'], 'Per a les dades de contacte, correu a la unitat de protecció de dades; per al contingut, davant de l’organisme emissor o a les oficines de registre. Es pot reclamar prèviament al delegat de protecció de dades.', {
      url: 'mailto:protecciondatos.sgad@correo.gob.es',
    }),
  },
  controls: {
    adPersonalizationOptOut: na('El servei no mostra publicitat.'),
    telemetryOptOut: unknown('El portal web fa servir una instància pròpia de Matomo configurada sense galetes; no hem pogut comprovar què mesura l’aplicació.'),
    granularControls: f('partial', 'official', ['notifica-dehu-portal'], 'Es pot triar entre avisos per correu i avisos push, i treure dispositius un per un.'),
    defaultPosture: 'protective',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos.'),
  },
  security: {
    ...govSecurityBase,
    mfa: f('yes', 'official', ['notifica-dehu-portal'], 'L’accés passa per Cl@ve i algunes notificacions exigeixen un nivell de seguretat reforçat (certificat, DNI electrònic o Cl@ve Mòbil).', {
      methods: ['app-push'],
    }),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      `${govNoLabel} La política de l’aplicació és a dehu.redsara.es/es/privacity-app, una pàgina que carrega amb JavaScript i que el tallafocs del servidor bloqueja sovint; l’hem llegida al codi del portal.`,
    openQuestions: [
      'La cerca d’incidents no s’ha pogut completar: s’havia esgotat el pressupost de cerques web de la sessió.',
      'Quant temps es conserven les notificacions ja compareixudes a la DEHú?',
    ],
  },
}

/* ═══════════════════════ Autofirma ═══════════════════════ */
const autofirma: AppSeed = {
  slug: 'autofirma',
  name: 'Autofirma App',
  company: 'aead',
  categories: ['administracio-publica', 'autenticacio-i-seguretat'],
  tagline: 'Signatura electrònica sense compte i amb codi publicat, però amb un enllaç de privadesa que porta a un altre ministeri',
  summary:
    'Autofirma permet signar tràmits web i documents PDF amb un certificat digital o amb el DNI electrònic per NFC. No cal cap compte i el codi de l’aplicació d’iOS és públic; les restes d’una integració antiga amb Google Analytics hi són comentades i no s’executen. La política pròpia és dins de l’aplicació, perquè l’enllaç de l’App Store porta a la pàgina de protecció de dades d’un ministeri que ja no en respon.',
  platforms: ['ios', 'android', 'windows', 'macos', 'linux'],
  businessModel: 'public-service',
  jurisdiction: 'Espanya; servei públic de l’Administració General de l’Estat',
  links: {
    website: 'https://administracionelectronica.gob.es/',
    privacyPolicy: 'https://github.com/ctt-gob-es/firma-ios/blob/master/Firma_iOS/Supporting%20Files/privacy_policy_ca.html',
    appStore: appStore('627410001'),
  },
  accountRequired: f('no', 'official', ['autofirma-app-store'], 'No cal registrar-se; només cal instal·lar un certificat PKCS#12 o fer servir el DNI electrònic.'),
  openSource: f('yes', 'official', ['autofirma-ios-repo'], 'El codi de l’aplicació d’iOS és públic al repositori del Centre de Transferència de Tecnologia. Aquest repositori no declara cap llicència, a diferència del client d’escriptori, que és GPL 2+ i EUPL 1.1.', {
    licence: 'Codi publicat sense llicència declarada (el client d’escriptori és GPL 2+ i EUPL 1.1)',
  }),
  publicService: {
    isPublicService: true,
    administrationLevel: 'state',
    legalBasis: f('partial', 'official', ['autofirma-privacy'], 'La política invoca el consentiment i el compliment d’una missió d’interès públic (article 6.1.e del RGPD), però cita malament el primer: parla de l’«article 6.4a) del RGPD», que no existeix; el consentiment és a l’article 6.1.a. De la normativa habilitant només en dona el nom, sense articles.', {
      norm: 'RGPD, article 6.1.e; el consentiment s’hi cita com a «article 6.4a», inexistent',
    }),
    processingRegistry: f('partial', 'official', ['autofirma-privacy', 'aead-rat-sgad'], 'La política enllaça el registre d’activitats del ministeri, però no s’hi troba cap fitxa amb el nom d’Autofirma. La més propera és «Identidad digital y firma electrónica», que descriu la identificació i la signatura per accedir als serveis de les administracions i que, curiosament, declara com a base jurídica l’article 89 del RGPD, el de les garanties per a l’arxiu en interès públic.', {
      url: 'https://digital.gob.es/content/dam/portal-mtdfp/ministerio/proteccion-datos/RAT_SGAD.pdf',
    }),
    dpia: unknown('No hem trobat publicada cap avaluació d’impacte de l’aplicació ni del servei de signatura trifàsica que hi ha al darrere.'),
    ensConformity: f('partial', 'official', ['autofirma-privacy'], 'La política declara que les mesures implantades són les de l’annex II del Reial decret 311/2022, però no hem trobat publicada ni la declaració de conformitat amb l’Esquema Nacional de Seguretat ni la categoria del sistema.'),
    dpo: f('yes', 'official', ['autofirma-privacy'], 'La política identifica el delegat de protecció de dades del ministeri amb correu i adreça postal, i dona una adreça específica de l’AEAD per a les bretxes de seguretat.', {
      contact: 'dpd@digital.gob.es',
    }),
    offlineAlternative: f('yes', 'official', ['boe-ley-39-2015', 'autofirma-privacy'], 'Signar amb aquesta aplicació no és mai l’única via: les persones físiques poden presentar el tràmit en paper a les oficines d’assistència en matèria de registres, perquè l’article 14.1 de la Llei 39/2015 els deixa triar el canal, i qui hagi de signar electrònicament ho pot fer amb altres clients de signatura, entre ells el mateix Autofirma d’escriptori.'),
    accessibilityStatement: f('no', 'official', ['autofirma-accessibilitat'], 'L’AEAD publica una declaració d’accessibilitat del portal firmaelectronica.gob.es —«parcialment conforme» amb el Reial decret 1112/2018, preparada el 2 d’abril de 2025—, però hi diu expressament que s’aplica només al lloc web. No n’hi ha cap per a l’aplicació mòbil, que el mateix reial decret també cobreix.', {
      url: 'https://firmaelectronica.gob.es/Home/Accesibilidad.html',
    }),
    mandatoryRetention: f('no', 'official', ['autofirma-privacy'], 'No hi ha cap compte ni cap dada conservada en servidors del servei que una norma obligui a mantenir: el certificat i l’historial de signatures es queden al dispositiu i desapareixen quan es desinstal·la l’aplicació.'),
  },
  dataSummary:
    'El certificat digital identifica la persona davant de qualsevol administració i els documents que se signen poden contenir dades fiscals, sanitàries o laborals. Tot això passa per l’aplicació, que ho guarda al dispositiu.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['autofirma-privacy'], note: 'Surt del certificat o del DNI electrònic i s’incorpora a la signatura que rep l’administració del tràmit.' }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['autofirma-privacy'], note: 'Número de DNI del certificat, o lectura del xip del DNI per NFC.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['autofirma-privacy'], note: 'Només si consta al certificat.' }),
    row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['autofirma-app-store'], note: 'Des de la versió 1.9 totes les signatures són trifàsiques, amb la participació d’un servidor. No hem pogut comprovar quina part del document hi viatja.' }),
    row('dades-de-diagnostic', 'no', { linked: 'no', tracking: 'no', shared: 'none', level: 'independent', sources: ['autofirma-ios-repo'], note: 'El codi de Google Analytics del repositori és comentat i no s’executa.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['autofirma-app-store', 'autofirma-ios-repo'], 'L’etiqueta no declara rastreig i el codi publicat no té cap eina de publicitat activa.'),
    advertisingIdentifiers: f('no', 'independent', ['autofirma-ios-repo'], 'No hem trobat cap ús de l’identificador publicitari al codi publicat.'),
    thirdPartyTrackersPresent: f('no', 'independent', ['autofirma-ios-repo'], 'La biblioteca de Google Analytics és al repositori, però la inicialització és comentada.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['autofirma-privacy'], 'L’única finalitat declarada és la signatura electrònica de documents.'),
    profiling: f('no', 'official', ['autofirma-privacy']),
    aiTraining: na('L’aplicació no fa servir ni entrena models d’IA.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['autofirma-privacy'], 'La política diu que només la persona usuària té accés a les dades. La signatura, però, s’envia a l’administració del tràmit, que és qui la rep.'),
    intraGroupSharing: na('No hi ha cap grup empresarial.'),
    dataBrokerSales: f('no', 'official', ['autofirma-privacy']),
    internationalTransfers: unknown('La política de l’aplicació no parla de transferències internacionals.'),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['autofirma-privacy'], 'Només diu que les dades es conserven el temps necessari i els terminis de la normativa d’arxius.'),
    dataAfterDeletion: unknown('La política parla d’esborrar «el compte», però l’aplicació no en té; no queda clar què es conserva fora del dispositiu.'),
  },
  accountDeletion: {
    possible: na('No hi ha cap compte. El certificat i l’historial es guarden al dispositiu.'),
    selfService: na('No hi ha cap compte.'),
    difficulty: 'easy',
    steps: [
      'Esborra dins de l’aplicació els certificats que hi hagis instal·lat.',
      'Desinstal·la l’aplicació per eliminar l’historial de signatures desat al dispositiu.',
    ],
    obstacles: 'Deduïm del codi publicat que l’historial es desa en local; la política no ho explica.',
    sources: ['autofirma-ios-repo'],
  },
  userRights: {
    dataExport: na('L’aplicació no conserva dades en servidors propis que es puguin exportar.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['autofirma-privacy'], 'Drets per correu a la unitat de protecció de dades de l’AEAD, amb delegat de protecció de dades identificat.', {
      url: 'mailto:protecciondatos.sgad@correo.gob.es',
    }),
  },
  controls: {
    adPersonalizationOptOut: na('No hi ha publicitat.'),
    telemetryOptOut: na('No hem trobat telemetria activa al codi publicat.'),
    granularControls: na('L’aplicació no recull dades que calgui controlar per finalitats.'),
    defaultPosture: 'protective',
    darkPatterns: f('no', 'editorial', [], 'Valoració editorial: l’aplicació no té compte, publicitat ni subscripció, que és on apareixen habitualment els patrons foscos.'),
  },
  security: {
    ...govSecurityBase,
    e2ee: na('No és un servei de comunicació entre persones.'),
    transportEncryption: unknown('No hem pogut verificar com es protegeix la comunicació amb el servidor de signatura trifàsica.'),
    atRestEncryption: unknown('No hem comprovat al codi com es protegeixen els certificats desats a l’aplicació.'),
    mfa: na('No hi ha compte; la signatura exigeix el certificat i la seva contrasenya o el PIN del DNI electrònic.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'L’enllaç de privadesa de l’App Store porta a mptfp.gob.es, que ara redirigeix al Ministeri de Política Territorial i Memòria Democràtica, sense res sobre Autofirma. La política vàlida és la que porta l’aplicació, i la llegim al repositori públic. La conclusió sobre Google Analytics es basa en el codi publicat; no hem analitzat el binari de l’App Store.',
    openQuestions: [
      'La cerca d’incidents no s’ha pogut completar: s’havia esgotat el pressupost de cerques web de la sessió.',
      'Quines dades del document s’envien al servidor en la signatura trifàsica i quant temps s’hi conserven?',
    ],
  },
}

/* ═══════════════════════ FoilSnap ═══════════════════════ */
const foilsnap: AppSeed = {
  slug: 'foilsnap',
  name: 'FoilSnap',
  company: 'next-vision',
  categories: ['traduccio-i-referencia'],
  tagline: 'Escàner de cartes col·leccionables que rastreja entre aplicacions i envia dades als Estats Units i a la Xina',
  summary:
    'FoilSnap identifica cartes de Pokémon, Magic o Yu-Gi-Oh! amb una foto i en calcula el preu. És de Next Vision Limited, de Hong Kong, que declara a l’App Store que fa servir compres, identificadors i dades d’ús per rastrejar entre aplicacions. La política diu que l’aplicació s’allotja als Estats Units, que les dades es transfereixen a empreses vinculades de Hangzhou i que recull identificadors com l’IMEI, l’IMSI o l’adreça MAC.',
  platforms: ['ios'],
  businessModel: 'freemium',
  jurisdiction: 'Hong Kong; sense representant a la UE identificat',
  links: {
    website: 'https://tcgcardworth.com/',
    privacyPolicy: 'https://app-service.tcgcardworth.com/static/EuropeanUnion/privacy_policy.html',
    appStore: appStore('6752642525'),
  },
  accountRequired: f('no', 'official', ['foilsnap-privacy-policy'], 'Crear un perfil és opcional.'),
  openSource: f('no', 'official', ['foilsnap-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Les fotos i el valor de la col·lecció diuen poc sobre la salut o les opinions, però combinats amb identificadors del mòbil i de la línia (IMEI, IMSI, número de telèfon) permeten reconèixer la persona entre serveis i vincular-hi hàbits de compra.',
  dataCollection: [
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['foilsnap-app-store', 'foilsnap-privacy-policy'], note: 'Les fotos de les cartes i les seves metadades.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-publicitaria', 'publicitat-personalitzada'], sources: ['foilsnap-app-store', 'foilsnap-privacy-policy'], note: 'Les compres, descàrregues i cancel·lacions s’envien a Adjust.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['foilsnap-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['foilsnap-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-publicitaria', 'publicitat-personalitzada'], sources: ['foilsnap-app-store', 'foilsnap-privacy-policy'], note: 'La política esmenta l’IMEI, l’IMSI i l’adreça MAC, a més de l’identificador del dispositiu.' }),
    row('numero-de-telefon', 'unknown', { linked: 'yes', tracking: 'unknown', shared: 'unknown', sources: ['foilsnap-privacy-policy'], note: 'La política diu que «requereix» el número de telèfon (MSISDN), però l’etiqueta de l’App Store no el declara.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['foilsnap-app-store', 'foilsnap-privacy-policy'] }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['foilsnap-privacy-policy'] }),
    row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['foilsnap-privacy-policy'] }),
    row('xarxa-i-connectivitat', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['foilsnap-privacy-policy'], note: 'Operadora i intensitat del senyal mòbil i wifi.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['foilsnap-app-store', 'foilsnap-privacy-policy'], note: 'Google Analytics, que pot combinar-les amb el compte de Google per a finalitats pròpies.' }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['foilsnap-app-store'], note: 'Consultes a atenció al client.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte', 'mesura-i-analisi-dus'], sources: ['foilsnap-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['foilsnap-app-store'], nvLabelTracking),
    advertisingIdentifiers: f('yes', 'official', ['foilsnap-app-store', 'foilsnap-privacy-policy'], 'L’etiqueta declara identificadors per rastrejar i la política remet a la configuració del mòbil per desactivar els anuncis basats en interessos.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['foilsnap-privacy-policy'], 'Google Analytics i Adjust, i «xarxes publicitàries» sense nom.', {
      trackers: [
        { name: 'Google Analytics', purpose: 'Analítica d’ús', sources: ['foilsnap-privacy-policy'] },
        { name: 'Adjust', purpose: 'Atribució de campanyes i mesura de compres', sources: ['foilsnap-privacy-policy'] },
      ],
    }),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['foilsnap-privacy-policy'], 'La política permet que xarxes publicitàries recullin informació per mostrar anuncis personalitzats a l’aplicació i fora, amb consentiment.'),
    profiling: f('partial', 'official', ['foilsnap-privacy-policy'], 'Personalització amb consentiment, i perfils que Google pot fer amb les dades d’Analytics per a finalitats pròpies.'),
    aiTraining: unknown('La política no diu si les fotos serveixen per entrenar el model de reconeixement.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['foilsnap-privacy-policy'], 'Proveïdors com Amazon Web Services, Google, Adjust i xarxes publicitàries; també possibles compradors de l’empresa.'),
    intraGroupSharing: f('yes', 'official', ['foilsnap-privacy-policy'], 'Amb empreses vinculades de Next Vision, entre elles a Hangzhou.'),
    dataBrokerSales: f('no', 'official', ['foilsnap-privacy-policy'], 'Declara que no ven informació personal a tercers per als seus propis usos comercials.'),
    internationalTransfers: f('yes', 'official', ['foilsnap-privacy-policy'], 'Allotjament als Estats Units i transferència a empreses vinculades de Hangzhou (Xina), amb clàusules contractuals tipus o mecanismes similars.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: f('no', 'official', ['foilsnap-privacy-policy'], 'Només diu que avisarà la persona afectada d’una petició d’autoritats si la llei ho permet.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['foilsnap-privacy-policy'], 'Només fixa els 13 mesos de les galetes de Google Analytics; per a la resta, criteris generals.'),
    dataAfterDeletion: unknown('La política no explica què es conserva després d’eliminar el perfil.'),
    periods: [{ dataType: 'galetes-i-identificadors-web', period: 'Galetes de Google Analytics: 13 mesos', sources: ['foilsnap-privacy-policy'] }],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['foilsnap-privacy-policy'], 'Es pot demanar la supressió per correu.'),
    selfService: unknown('No hem trobat pàgina d’ajuda de FoilSnap. Les altres aplicacions de Next Vision tenen una opció «Delete Account», però no l’hem pogut comprovar en aquesta.'),
    difficulty: 'unknown',
    steps: [
      'Escriu a support@foilsnap.com demanant la supressió de les dades (article 17 del RGPD).',
      'Cancel·la la subscripció des de la configuració de l’Apple ID: eliminar el perfil no l’atura.',
    ],
    sources: ['foilsnap-privacy-policy'],
  },
  userRights: nvRights('foilsnap-privacy-policy'),
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['foilsnap-privacy-policy'], 'Remet a l’eina de galetes de l’aplicació, a la configuració del mòbil i a la pàgina d’Adjust per excloure el dispositiu.', {
      url: 'https://www.adjust.com/forget-device/',
    }),
    telemetryOptOut: f('partial', 'official', ['foilsnap-privacy-policy'], 'Google Analytics es basa en el consentiment, però no hem vist com es gestiona dins de l’aplicació.'),
    granularControls: unknown('No hem pogut veure l’eina de gestió de galetes que esmenta la política.'),
    defaultPosture: 'permissive',
    darkPatterns: unknown('No hem pogut revisar el flux de subscripció ni el de consentiment de l’aplicació.'),
  },
  security: nvSecurity('foilsnap-privacy-policy'),
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'Política de la UE del 26 de gener de 2026, idèntica a la d’AntiqSnap llevat del nom. La llista d’identificadors de xarxa (IMEI, IMSI, MSISDN) és genèrica i iOS no els dona a les aplicacions; la reproduïm perquè és el que l’empresa diu que pot recollir.',
    openQuestions: [
      'La cerca d’incidents no s’ha pogut completar: s’havia esgotat el pressupost de cerques web de la sessió.',
      'Quina relació té Next Vision Limited amb les empreses vinculades de Hangzhou que rep les dades?',
      'Les fotos s’utilitzen per entrenar el model de reconeixement?',
    ],
  },
}

/* ═══════════════════════ CoinSnap ═══════════════════════ */
const coinsnap: AppSeed = {
  slug: 'coinsnap',
  name: 'CoinSnap',
  company: 'next-vision',
  categories: ['traduccio-i-referencia'],
  tagline: 'Identificador de monedes que promet no compartir mai les dades mentre declara rastreig publicitari',
  summary:
    'CoinSnap identifica monedes amb una foto i n’estima el valor. La pàgina d’ajuda diu que no compartirà «mai» la informació amb ningú, però l’etiqueta de l’App Store declara compres, identificadors i dades d’ús per rastrejar entre aplicacions, i la política permet l’SDK de Facebook, Adjust, Google Analytics i xarxes publicitàries. L’aplicació s’allotja als Estats Units i l’empresa té seu a Hong Kong.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Hong Kong; sense representant a la UE identificat',
  links: {
    website: 'https://coinidentifierai.com/',
    privacyPolicy: 'https://app-service.coinidentifierai.com/static/EuropeanUnion/privacy_policy.html',
    terms: 'https://app-service.coinidentifierai.com/static/user_agreement.html',
    appStore: appStore('1634551626'),
  },
  accountRequired: f('no', 'official', ['coinsnap-privacy-policy'], 'Crear un perfil és opcional.'),
  openSource: f('no', 'official', ['coinsnap-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Una col·lecció de monedes amb el valor estimat de cada peça és informació patrimonial. Unida a identificadors publicitaris que es comparteixen amb xarxes de publicitat, permet perfilar la persona com a compradora amb poder adquisitiu.',
  dataCollection: [
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['coinsnap-app-store', 'coinsnap-privacy-policy'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-publicitaria', 'publicitat-personalitzada'], sources: ['coinsnap-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['coinsnap-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['coinsnap-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-publicitaria', 'publicitat-personalitzada'], sources: ['coinsnap-app-store', 'coinsnap-privacy-policy'] }),
    row('identificador-publicitari', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['coinsnap-privacy-policy'], note: 'L’IDFA, amb el permís del sistema.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['coinsnap-app-store', 'coinsnap-privacy-policy'] }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['coinsnap-privacy-policy'], note: 'Recollida per Google Analytics.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['coinsnap-app-store', 'coinsnap-privacy-policy'] }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['coinsnap-app-store'], note: 'Consultes a atenció al client.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte', 'mesura-i-analisi-dus'], sources: ['coinsnap-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['coinsnap-app-store'], nvLabelTracking),
    advertisingIdentifiers: f('yes', 'official', ['coinsnap-privacy-policy'], 'La política diu que, amb permís, fa servir l’IDFA d’iOS i l’identificador publicitari d’Android.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['coinsnap-privacy-policy'], 'Google Analytics, l’SDK de Facebook i l’SDK d’Adjust.', {
      trackers: [
        { name: 'Google Analytics', purpose: 'Analítica d’ús', sources: ['coinsnap-privacy-policy'] },
        { name: 'Facebook SDK', purpose: 'Publicitat', sources: ['coinsnap-privacy-policy'] },
        { name: 'Adjust', purpose: 'Atribució de campanyes', sources: ['coinsnap-privacy-policy'] },
      ],
    }),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['coinsnap-privacy-policy'], 'Permet que xarxes publicitàries recullin dades per mostrar anuncis personalitzats a l’aplicació i fora; la versió consultada ho empara en l’interès legítim.'),
    profiling: f('yes', 'official', ['coinsnap-privacy-policy'], 'Anuncis adaptats als interessos, preferències i característiques de la persona.'),
    aiTraining: unknown('La política no diu si les fotos serveixen per entrenar el model de reconeixement.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['coinsnap-privacy-policy'], 'Amazon Web Services, Google, Facebook, Adjust i xarxes publicitàries; també possibles compradors de l’empresa.'),
    intraGroupSharing: f('yes', 'official', ['coinsnap-privacy-policy'], 'Amb empreses vinculades.'),
    dataBrokerSales: f('no', 'official', ['coinsnap-privacy-policy'], 'Declara que no ven informació personal a tercers per als seus propis usos comercials.'),
    internationalTransfers: f('yes', 'official', ['coinsnap-privacy-policy'], 'L’aplicació s’allotja als Estats Units; la versió consultada ho empara en l’interès legítim i admet que la protecció pot ser menor.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: f('no', 'official', ['coinsnap-privacy-policy'], 'Només diu que avisarà d’una petició d’autoritats si la llei ho permet.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['coinsnap-privacy-policy'], 'Les dades es conserven mentre siguin «necessàries i rellevants per al negoci».'),
    dataAfterDeletion: f('partial', 'official', ['coinsnap-faq', 'coinsnap-privacy-policy'], 'L’ajuda diu que en eliminar el compte s’esborren totes les dades; la política admet que en pot conservar per obligacions legals o litigis.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['coinsnap-faq']),
    selfService: f('yes', 'official', ['coinsnap-faq'], 'Hi ha una opció «Delete Account» dins de l’aplicació.'),
    difficulty: 'medium',
    steps: [
      'Obre la configuració de l’aplicació i toca «Privacy Policy».',
      'Toca la icona de la part superior dreta per obrir «Data Management».',
      'Tria «Delete Account» i confirma-ho.',
      'Cancel·la la subscripció des de la configuració de l’Apple ID: eliminar el compte no l’atura.',
    ],
    obstacles: 'L’opció és dins de la pantalla de la política de privadesa, darrere d’una icona sense text.',
    dataRetained: 'El que calgui per obligacions legals o litigis, segons la política.',
    sources: ['coinsnap-faq', 'coinsnap-privacy-policy'],
  },
  userRights: nvRights('coinsnap-privacy-policy'),
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['coinsnap-privacy-policy'], 'Remet a l’eina de galetes de l’aplicació i als controls del navegador i del mòbil.'),
    telemetryOptOut: unknown('No hem pogut comprovar si l’analítica es pot desactivar dins de l’aplicació.'),
    granularControls: unknown('No hem pogut veure l’eina de gestió de galetes que esmenta la política.'),
    defaultPosture: 'permissive',
    darkPatterns: f('yes', 'editorial', ['coinsnap-faq', 'coinsnap-privacy-policy'], 'Valoració editorial: la pàgina d’ajuda assegura que no es compartirà mai la informació amb ningú, cosa que contradiu la política i l’etiqueta. A més, la baixa és dins de la pantalla de la política.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description: 'L’ajuda diu «we will NEVER share your information with anyone», mentre que la política permet compartir dades amb xarxes publicitàries i l’etiqueta declara rastreig.',
        sources: ['coinsnap-faq', 'coinsnap-privacy-policy'],
      },
      {
        type: 'hidden-exit',
        severity: 'low',
        description: 'L’opció d’eliminar el compte és a «Data Management», dins de la pantalla de la política de privadesa i darrere d’una icona.',
        sources: ['coinsnap-faq'],
      },
    ],
  },
  security: nvSecurity('coinsnap-privacy-policy'),
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'La política per a la UE que enllaça l’App Store és darrere d’una verificació de Cloudflare i no l’hem poguda llegir. Fem servir la versió general del 10 de setembre de 2025, arxivada al juny de 2026, que no fa referència al RGPD. Les versions per a la UE de FoilSnap i AntiqSnap, de la mateixa empresa, afegeixen el consentiment i la transferència a Hangzhou; probablement la de CoinSnap també, però no ho hem pogut comprovar.',
    openQuestions: [
      'La cerca d’incidents no s’ha pogut completar: s’havia esgotat el pressupost de cerques web de la sessió.',
      'Què diu la versió vigent per a la UE de la política de CoinSnap?',
    ],
  },
}

/* ═══════════════════════ AntiqSnap ═══════════════════════ */
const antiqsnap: AppSeed = {
  ...foilsnap,
  slug: 'antiqsnap',
  name: 'AntiqSnap',
  tagline: 'Taxador d’antiguitats amb foto que rastreja entre aplicacions i envia dades als Estats Units i a la Xina',
  summary:
    'AntiqSnap identifica antiguitats amb una foto i n’estima el preu de mercat. És de Next Vision Limited, de Hong Kong, i comparteix política amb FoilSnap: allotjament als Estats Units, transferència a empreses vinculades de Hangzhou, Google Analytics, Adjust i xarxes publicitàries. L’etiqueta de l’App Store declara rastreig entre aplicacions, però la pàgina d’ajuda assegura que no compartirà mai la informació amb ningú.',
  links: {
    website: 'https://antiqueworthai.com/',
    privacyPolicy: 'https://app-service.antiqueworthai.com/static/EuropeanUnion/privacy_policy.html',
    terms: 'https://app-service.antiqueworthai.com/static/EuropeanUnion/user_agreement_20260126.html',
    appStore: appStore('6752929120'),
  },
  accountRequired: f('no', 'official', ['antiqsnap-privacy-policy'], 'Crear un perfil és opcional.'),
  openSource: f('no', 'official', ['antiqsnap-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Fotos d’objectes de casa amb el valor estimat de cadascun: és un inventari del patrimoni domèstic. Unit a identificadors del dispositiu que es fan servir per rastrejar, permet perfilar la persona com a propietària de béns de valor.',
  dataCollection: foilsnap.dataCollection.map((r) => ({
    ...r,
    sources: (r.sources ?? []).map((src) => src.replace('foilsnap-', 'antiqsnap-')),
    note: r.type === 'fotografies-i-videos' ? 'Les fotos dels objectes i les seves metadades.' : r.note,
  })),
  tracking: {
    crossAppTracking: f('yes', 'official', ['antiqsnap-app-store'], nvLabelTracking),
    advertisingIdentifiers: f('yes', 'official', ['antiqsnap-app-store', 'antiqsnap-privacy-policy'], 'L’etiqueta declara identificadors per rastrejar i la política remet a la configuració del mòbil per desactivar els anuncis basats en interessos.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['antiqsnap-privacy-policy'], 'Google Analytics i Adjust, i «xarxes publicitàries» sense nom.', {
      trackers: [
        { name: 'Google Analytics', purpose: 'Analítica d’ús', sources: ['antiqsnap-privacy-policy'] },
        { name: 'Adjust', purpose: 'Atribució de campanyes i mesura de compres', sources: ['antiqsnap-privacy-policy'] },
      ],
    }),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['antiqsnap-privacy-policy'], 'La política permet que xarxes publicitàries recullin informació per mostrar anuncis personalitzats a l’aplicació i fora, amb consentiment.'),
    profiling: f('partial', 'official', ['antiqsnap-privacy-policy'], 'Personalització amb consentiment, i perfils que Google pot fer amb les dades d’Analytics per a finalitats pròpies.'),
    aiTraining: unknown('La política no diu si les fotos serveixen per entrenar el model de reconeixement.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['antiqsnap-privacy-policy'], 'Proveïdors com Amazon Web Services, Google, Adjust i xarxes publicitàries; també possibles compradors de l’empresa.'),
    intraGroupSharing: f('yes', 'official', ['antiqsnap-privacy-policy'], 'Amb empreses vinculades de Next Vision, entre elles a Hangzhou.'),
    dataBrokerSales: f('no', 'official', ['antiqsnap-privacy-policy'], 'Declara que no ven informació personal a tercers per als seus propis usos comercials.'),
    internationalTransfers: f('yes', 'official', ['antiqsnap-privacy-policy'], 'Allotjament als Estats Units i transferència a empreses vinculades de Hangzhou (Xina), amb clàusules contractuals tipus o mecanismes similars.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: f('no', 'official', ['antiqsnap-privacy-policy'], 'Només diu que avisarà la persona afectada d’una petició d’autoritats si la llei ho permet.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['antiqsnap-privacy-policy'], 'Només fixa els 13 mesos de les galetes de Google Analytics; per a la resta, criteris generals.'),
    dataAfterDeletion: f('partial', 'official', ['antiqsnap-faq', 'antiqsnap-privacy-policy'], 'L’ajuda diu que en eliminar el compte s’esborren totes les dades; la política admet que en pot conservar per obligacions legals.'),
    periods: [{ dataType: 'galetes-i-identificadors-web', period: 'Galetes de Google Analytics: 13 mesos', sources: ['antiqsnap-privacy-policy'] }],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['antiqsnap-faq']),
    selfService: f('yes', 'official', ['antiqsnap-faq'], 'Hi ha una opció «Delete Account» dins de l’aplicació.'),
    difficulty: 'medium',
    steps: [
      'Obre la configuració de l’aplicació i toca «Privacy Policy».',
      'Toca la icona de la part superior dreta per obrir «Data Management».',
      'Tria «Delete Account» i confirma-ho.',
      'Cancel·la la subscripció des de la configuració de l’Apple ID: eliminar el compte no l’atura.',
    ],
    obstacles: 'L’opció és dins de la pantalla de la política de privadesa, darrere d’una icona sense text.',
    dataRetained: 'El que calgui per obligacions legals o litigis, segons la política.',
    sources: ['antiqsnap-faq', 'antiqsnap-privacy-policy'],
  },
  userRights: nvRights('antiqsnap-privacy-policy'),
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['antiqsnap-privacy-policy'], 'Remet a l’eina de galetes de l’aplicació, a la configuració del mòbil i a la pàgina d’Adjust per excloure el dispositiu.', {
      url: 'https://www.adjust.com/forget-device/',
    }),
    telemetryOptOut: f('partial', 'official', ['antiqsnap-privacy-policy'], 'Google Analytics es basa en el consentiment, però no hem vist com es gestiona dins de l’aplicació.'),
    granularControls: unknown('No hem pogut veure l’eina de gestió de galetes que esmenta la política.'),
    defaultPosture: 'permissive',
    darkPatterns: f('yes', 'editorial', ['antiqsnap-faq', 'antiqsnap-privacy-policy'], 'Valoració editorial: la pàgina d’ajuda assegura que no es compartirà mai la informació amb ningú, cosa que contradiu la política i l’etiqueta.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description: 'L’ajuda diu «we will NEVER share your information with anyone», mentre que la política permet compartir dades amb xarxes publicitàries i empreses vinculades de la Xina.',
        sources: ['antiqsnap-faq', 'antiqsnap-privacy-policy'],
      },
      {
        type: 'hidden-exit',
        severity: 'low',
        description: 'L’opció d’eliminar el compte és a «Data Management», dins de la pantalla de la política de privadesa i darrere d’una icona.',
        sources: ['antiqsnap-faq'],
      },
    ],
  },
  security: nvSecurity('antiqsnap-privacy-policy'),
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'Política de la UE del 26 de gener de 2026, idèntica a la de FoilSnap llevat del nom i del correu de contacte. La llista d’identificadors de xarxa (IMEI, IMSI, MSISDN) és genèrica i iOS no els dona a les aplicacions.',
    openQuestions: [
      'La cerca d’incidents no s’ha pogut completar: s’havia esgotat el pressupost de cerques web de la sessió.',
      'Les fotos s’utilitzen per entrenar el model de reconeixement?',
    ],
  },
}

/* ═══════════════════════ Shop ═══════════════════════ */
const shop: AppSeed = {
  slug: 'shop-app',
  name: 'Shop',
  company: 'shopify-international',
  categories: ['comerc-electronic'],
  tagline: 'Segueix les comandes de milers de botigues, llegeix el correu si el connectes i uneix l’activitat de compra en un sol perfil',
  summary:
    'Shop agrupa les comandes fetes a botigues de Shopify i, si s’hi connecta la bústia, extreu informació dels correus de confirmació. La política reconeix que sincronitza la navegació i les compres entre botigues per personalitzar l’experiència i que comparteix dades amb socis publicitaris, cosa que es pot desactivar al portal de privadesa. L’etiqueta declara ubicació precisa, correus i missatges vinculats a la identitat, però no rastreig entre aplicacions.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Irlanda (Shopify International Ltd.) per a l’Espai Econòmic Europeu; grup amb seu al Canadà',
  links: {
    website: 'https://shop.app/',
    privacyPolicy: 'https://www.shopify.com/legal/privacy/app-users',
    privacyCenter: 'https://privacy.shopify.com/en',
    appStore: appStore('1223471316'),
  },
  accountRequired: f('yes', 'official', ['shopify-consumer-privacy'], 'La política descriu el servei a partir d’un compte de Shop, on es desen les comandes i Shop Pay.'),
  openSource: f('no', 'official', ['shopify-consumer-privacy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'L’historial de compres de centenars de botigues independents, junt amb l’adreça d’enviament, la ubicació i els correus de confirmació, dibuixa hàbits de consum, poder adquisitiu i rutines. Es concentra en una sola empresa encara que la persona cregui que compra a botigues diferents.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['shop-app-store', 'shopify-consumer-privacy'], note: 'L’etiqueta el declara també per a publicitat o màrqueting del desenvolupador.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['shop-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['shop-app-store'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['shop-app-store', 'shopify-consumer-privacy'], note: 'Es comparteix amb les botigues.' }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['shop-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['shop-app-store', 'shopify-consumer-privacy'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['shop-app-store', 'shopify-consumer-privacy'], note: 'Shop Pay.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'recomanacions-algoritmiques'], sources: ['shop-app-store', 'shopify-consumer-privacy'], note: 'Unificat entre totes les botigues de Shopify on es compra.' }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['shop-app-store', 'shopify-consumer-privacy'], note: 'Informació dels correus de les bústies connectades. La política diu que no la fa servir per a publicitat ni màrqueting.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['shop-app-store'] }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts', 'recomanacions-algoritmiques'], sources: ['shopify-consumer-privacy'], note: 'La política parla de sincronitzar la navegació i les compres entre botigues.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['shop-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['shop-app-store', 'shopify-consumer-privacy'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['shopify-consumer-privacy'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['shop-app-store', 'shopify-consumer-privacy'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['shop-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['shop-app-store'], 'L’etiqueta no declara dades «utilitzades per rastrejar-te». La política, però, admet que dona informació a tercers per a publicitat dirigida.'),
    advertisingIdentifiers: unknown('No hem trobat cap declaració sobre l’identificador publicitari del dispositiu.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['shopify-consumer-privacy'], 'Màrqueting i publicitat personalitzada amb socis publicitaris, amb opció d’exclusió.', {
      optOutUrl: 'https://privacy.shopify.com/en',
    }),
    profiling: f('yes', 'official', ['shopify-consumer-privacy', 'shopify-privacy-policy'], 'Uneix l’activitat de compra de totes les botigues i fa servir aprenentatge automàtic per personalitzar el servei.'),
    aiTraining: f('partial', 'official', ['shopify-privacy-policy'], 'La política general diu que fa servir aprenentatge automàtic per desenvolupar i millorar els serveis, sense concretar si amb dades de Shop.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['shopify-consumer-privacy'], 'Botigues, proveïdors, socis de publicitat i màrqueting, autoritats i possibles compradors en una fusió.'),
    intraGroupSharing: f('yes', 'official', ['shopify-consumer-privacy', 'shopify-privacy-policy'], 'Les dades circulen entre Shop, les botigues de Shopify i les empreses del grup.'),
    dataBrokerSales: f('partial', 'official', ['shopify-consumer-privacy'], 'La política admet que donar dades a tercers per a publicitat es pot considerar «compartir» o «publicitat dirigida» segons algunes lleis.'),
    internationalTransfers: shopifyTransfers,
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència de Shopify.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['shopify-consumer-privacy'], 'Només diu que conserva les dades mentre hi hagi una necessitat de negoci.'),
    dataAfterDeletion: unknown('La política no explica què es conserva després d’eliminar el compte de Shop.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['shopify-consumer-privacy']),
    selfService: f('yes', 'official', ['shopify-consumer-privacy'], 'La política diu que es pot demanar l’eliminació del compte des de la configuració de l’aplicació.'),
    difficulty: 'easy',
    steps: [
      'A l’aplicació Shop, obre la configuració del compte.',
      'Tria l’opció d’eliminar el compte i confirma-ho.',
      'Desconnecta abans la bústia de correu, si l’havies connectada.',
      'Per a les dades que tenen les botigues, adreça’t a cadascuna o al portal privacy.shopify.com.',
    ],
    obstacles: 'Les comandes també les tenen les botigues, que en són responsables per separat.',
    sources: ['shopify-consumer-privacy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['shopify-consumer-privacy'], 'Accés i portabilitat a demanda des del portal de privadesa, sense exportació immediata.', {
      url: 'https://privacy.shopify.com/en',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['shopify-consumer-privacy', 'shopify-privacy-policy'], 'Portal de privadesa i delegat de protecció de dades a Dublín.', {
      url: 'https://privacy.shopify.com/en',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['shopify-consumer-privacy'], 'Exclusió de la compartició per a publicitat dirigida al portal de privadesa.', {
      url: 'https://privacy.shopify.com/en',
    }),
    telemetryOptOut: unknown('No hem trobat cap opció per desactivar l’analítica d’ús.'),
    granularControls: f('partial', 'official', ['shopify-consumer-privacy'], 'La connexió del correu és opcional i la publicitat dirigida es pot desactivar.'),
    defaultPosture: 'permissive',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos a Shop.'),
  },
  security: {
    e2ee: na('No és un servei de comunicació entre persones.'),
    transportEncryption: unknown('La política diu que cap transmissió és segura al 100 %, sense detallar les mesures.'),
    atRestEncryption: unknown('No hem trobat informació pública específica de Shop.'),
    mfa: unknown('No hem trobat documentació sobre la verificació en dos passos als comptes de Shop.'),
    independentAudits: f('partial', 'official', ['shopify-security'], 'Shopify té la certificació PCI DSS de nivell 1 i informes SOC 2 tipus II i SOC 3, que cobreixen la plataforma de pagament; no consta l’abast respecte a Shop.'),
    bugBounty: f('partial', 'official', ['shopify-security-txt'], 'Shopify té programa a HackerOne; no hem pogut comprovar si Shop entra a l’abast.', {
      url: 'https://hackerone.com/shopify',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['shopify-security-txt'], 'Fitxer security.txt amb adreça, clau de xifratge i política.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'L’etiqueta no declara rastreig, però la política de consumidors admet la compartició per a publicitat dirigida. Les dues coses poden ser compatibles (Apple només compta el rastreig entre empreses), però cal tenir-ho present.',
    openQuestions: [
      'La cerca d’incidents no s’ha pogut completar: s’havia esgotat el pressupost de cerques web de la sessió.',
      'Quines dades extreu exactament Shop dels correus i quant temps les conserva?',
    ],
  },
}

/* ═══════════════════════ Shopify ═══════════════════════ */
const shopify: AppSeed = {
  slug: 'shopify',
  name: 'Shopify',
  company: 'shopify-international',
  categories: ['comerc-electronic'],
  tagline: 'Gestió de botigues en línia que conserva les dades dos anys després de tancar-les',
  summary:
    'L’aplicació serveix per gestionar una botiga de Shopify: comandes, productes, pagaments i personal. Per verificar la identitat i complir la normativa contra el blanqueig, Shopify pot demanar documents d’identitat i una foto amb el document. En tancar la botiga, conserva la informació dos anys abans de començar a esborrar-la. La seguretat està ben documentada: PCI DSS de nivell 1, informes SOC 2, verificació en dos passos amb claus físiques i programa de recompenses.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Irlanda (Shopify International Ltd.) per a l’Espai Econòmic Europeu; grup amb seu al Canadà',
  links: {
    website: 'https://www.shopify.com/',
    privacyPolicy: 'https://www.shopify.com/legal/privacy/merchants',
    privacyCenter: 'https://privacy.shopify.com/en',
    appStore: appStore('371294472'),
  },
  accountRequired: f('yes', 'official', ['shopify-pause-help'], 'L’aplicació s’usa amb el compte de la botiga.'),
  openSource: f('no', 'official', ['shopify-merchant-privacy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Qui obre una botiga hi posa la identitat, els comptes bancaris i els documents oficials, i la plataforma veu en temps real els ingressos del negoci. A més, l’aplicació dona accés a les dades de tota la clientela de la botiga, que són les que es van filtrar el 2020.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['shopify-app-store', 'shopify-merchant-privacy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['shopify-app-store', 'shopify-merchant-privacy'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['shopify-app-store', 'shopify-merchant-privacy'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['shopify-app-store', 'shopify-merchant-privacy'] }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['shopify-merchant-privacy'], note: 'Per a la verificació d’identitat i les obligacions contra el blanqueig.' }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['shopify-merchant-privacy'], note: 'La política inclou dins de les dades biomètriques una foto de la persona sostenint el document d’identitat.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['shopify-app-store', 'shopify-merchant-privacy'], note: 'Targetes, comptes bancaris i, per a Shopify Capital, altres dades financeres.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['shopify-app-store'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['shopify-app-store'], note: 'Fotos de productes.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['shopify-app-store'] }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['shopify-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['shopify-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['shopify-app-store', 'shopify-merchant-privacy'], note: 'La política esmenta Sift per a la detecció del frau.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['shopify-merchant-privacy'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['shopify-app-store'], note: 'L’etiqueta inclou «dades de publicitat» per al màrqueting del desenvolupador.' }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari', 'mesura-i-analisi-dus'], sources: ['shopify-app-store'], note: 'Converses amb atenció al client.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['shopify-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['shopify-app-store'], 'L’etiqueta no declara dades «utilitzades per rastrejar-te».'),
    advertisingIdentifiers: unknown('No hem trobat cap declaració sobre l’identificador publicitari del dispositiu.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de rastrejadors de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['shopify-merchant-privacy', 'shopify-app-store'], 'Fa servir les dades per anunciar els seus propis productes i funcions; la política de comerciants no esmenta socis publicitaris.'),
    profiling: f('partial', 'official', ['shopify-privacy-policy'], 'Aprenentatge automàtic per millorar i personalitzar el servei, que la política diu que no produeix efectes significatius sense intervenció humana.'),
    aiTraining: unknown('La política de comerciants no diu si les dades de les botigues serveixen per entrenar els models de les eines d’IA de Shopify.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['shopify-merchant-privacy'], 'Proveïdors de pagament, Sift per al frau i les aplicacions de tercers que instal·li la botiga, sobre les quals Shopify diu que no té control.'),
    intraGroupSharing: f('yes', 'official', ['shopify-privacy-policy'], 'Entre les empreses del grup, sota normes corporatives vinculants.'),
    dataBrokerSales: f('no', 'official', ['shopify-merchant-privacy'], 'Només preveu cedir dades en una venda d’actius de l’empresa.'),
    internationalTransfers: shopifyTransfers,
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència de Shopify.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['shopify-merchant-privacy'], 'Fixa el termini posterior al tancament de la botiga, però no terminis per a cada tipus de dada.'),
    dataAfterDeletion: f('partial', 'official', ['shopify-merchant-privacy'], 'Si es demana la supressió, comença a esborrar o anonimitzar les dades al cap de 90 dies, excepte el que la llei obligui a conservar.'),
    periods: [
      { period: 'Botiga tancada o impagada: 2 anys abans de començar a esborrar o anonimitzar', sources: ['shopify-merchant-privacy'] },
      { period: 'Després d’una petició de supressió: comença al cap de 90 dies', sources: ['shopify-merchant-privacy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['shopify-merchant-privacy']),
    selfService: f('partial', 'official', ['shopify-pause-help', 'shopify-merchant-privacy'], 'La botiga es tanca des de l’administració, però les dades només comencen a esborrar-se al cap de dos anys, o de 90 dies si es demana expressament.'),
    difficulty: 'medium',
    waitingPeriodDays: 90,
    steps: [
      'Inicia sessió com a propietari i ves a Configuració > Pla.',
      'Tria «Cancel·la el pla» i torna-hi per veure totes les opcions: pausar o tancar la botiga.',
      'Cancel·la abans les aplicacions de tercers, que continuen actives i facturant.',
      'Demana la supressió de les dades al portal privacy.shopify.com: si no, es conserven dos anys.',
    ],
    obstacles: 'Tancar la botiga no n’esborra les dades: sense una petició expressa, Shopify les conserva dos anys.',
    dataRetained: 'Informació fiscal i la que la llei obligui a conservar.',
    sources: ['shopify-pause-help', 'shopify-merchant-privacy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['shopify-merchant-privacy'], 'Accés i correcció des de l’administració o amb una petició al portal de privadesa.', {
      url: 'https://privacy.shopify.com/en',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['shopify-merchant-privacy', 'shopify-privacy-policy'], 'Portal de privadesa i delegat de protecció de dades a Dublín.', {
      url: 'https://privacy.shopify.com/en',
    }),
  },
  controls: {
    adPersonalizationOptOut: unknown('No hem trobat com desactivar el màrqueting basat en dades d’ús dins de l’aplicació.'),
    telemetryOptOut: unknown('No hem trobat cap opció per desactivar l’analítica d’ús.'),
    granularControls: f('partial', 'official', ['shopify-2fa-help'], 'Controls de seguretat per a cada membre del personal; no hem trobat un panell de privadesa per finalitats.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['shopify-merchant-privacy', 'shopify-pause-help'], 'Valoració editorial: el flux de cancel·lació passa primer per l’oferta de pausar la botiga, i tancar-la no n’esborra les dades si no es demana a part.'),
    darkPatternList: [
      {
        type: 'hidden-exit',
        severity: 'low',
        description: 'Tancar la botiga no esborra les dades: cal una petició separada al portal de privadesa per no haver d’esperar dos anys.',
        sources: ['shopify-merchant-privacy'],
      },
    ],
  },
  security: {
    e2ee: na('No és un servei de comunicació entre persones.'),
    transportEncryption: unknown('La pàgina de seguretat no detalla el xifratge en trànsit.'),
    atRestEncryption: unknown('La pàgina de seguretat no detalla el xifratge en repòs.'),
    mfa: f('yes', 'official', ['shopify-2fa-help'], 'Verificació en dos passos amb SMS, aplicació d’autenticació, clau de seguretat, autenticador integrat, codis de recuperació i avisos a l’aplicació. És obligatòria per fer servir Shopify Payments.', {
      methods: ['passkey', 'hardware-key', 'totp', 'app-push', 'sms'],
    }),
    independentAudits: f('yes', 'official', ['shopify-security'], 'PCI DSS de nivell 1 i informes SOC 2 tipus II i SOC 3.'),
    bugBounty: f('yes', 'official', ['shopify-security-txt'], 'Programa de recompenses a HackerOne.', {
      url: 'https://hackerone.com/shopify',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['shopify-security-txt'], 'Fitxer security.txt amb adreça, clau de xifratge i política.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'La fitxa descriu les dades de qui gestiona la botiga. Les dades de la clientela de cada botiga les tracta Shopify per compte del comerç, i són les que es van veure afectades per l’incident del 2020.',
    openQuestions: [
      'La cerca d’incidents s’ha limitat a l’incident del 2020: s’havia esgotat el pressupost de cerques web de la sessió.',
      'Les dades de les botigues s’utilitzen per entrenar Sidekick i les altres eines d’IA de Shopify?',
    ],
  },
}

/* ═══════════════════════ Universo RFAF ═══════════════════════ */
const universoRfaf: AppSeed = {
  slug: 'universo-rfaf',
  name: 'Universo RFAF',
  company: 'rfaf',
  categories: ['esports-i-resultats'],
  tagline: 'La nova aplicació del futbol federat andalús amb dades de jugadors menors i una política genèrica pensada per al web',
  summary:
    'Universo RFAF és l’aplicació oficial de la Real Federación Andaluza de Fútbol per a jugadors, entrenadors, àrbitres i famílies: estadístiques personals, calendaris i pagaments. La política és la mateixa que la del web: fixa l’edat mínima en 14 anys, preveu perfils i publicitat personalitzada i esmenta l’identificador publicitari del mòbil. L’etiqueta de l’App Store declara nom, correu i telèfon vinculats a la identitat, però no rastreig, i qualifica l’aplicació per a totes les edats.',
  platforms: ['ios', 'android', 'web'],
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.universorfaf.es/',
    privacyPolicy: 'https://www.universorfaf.es/legal',
    appStore: appStore('6753349325'),
  },
  accountRequired: unknown('L’etiqueta declara un identificador d’usuari, però no hem pogut comprovar quines funcions requereixen compte.'),
  openSource: f('no', 'official', ['universo-rfaf-privacy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Les estadístiques de cada partit, el club i el calendari permeten saber on serà un jugador, sovint menor, cada cap de setmana. La política admet imatges i enregistraments dels esdeveniments amb dret a cedir-los a tercers per temps il·limitat.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['universo-rfaf-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['universo-rfaf-app-store'], note: 'La descripció de l’aplicació esmenta campanyes de correu amb MailRelay.' }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['universo-rfaf-app-store'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['universo-rfaf-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['universo-rfaf-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['universo-rfaf-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['universo-rfaf-app-store'] }),
    row('identificador-publicitari', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['universo-rfaf-privacy'], note: 'La política diu que fa servir l’identificador publicitari d’Android i d’iOS per servir anuncis, i que es pot associar a l’IMEI o l’adreça MAC. L’etiqueta no ho declara.' }),
    row('dades-de-pagament', 'unknown', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['universo-rfaf-app-store'], note: 'La descripció esmenta pagaments amb Redsys; l’etiqueta no declara dades financeres.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['universo-rfaf-privacy'], note: 'Imatges i enregistraments dels esdeveniments, que la RFAF es reserva el dret d’usar i cedir per temps il·limitat.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'elaboracio-de-perfils'], sources: ['universo-rfaf-app-store', 'universo-rfaf-privacy'], note: 'Google Analytics, segons la política.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['universo-rfaf-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['universo-rfaf-app-store'], 'L’etiqueta no declara dades «utilitzades per rastrejar-te», tot i que la política parla d’identificadors publicitaris i xarxes de publicitat.'),
    advertisingIdentifiers: f('yes', 'official', ['universo-rfaf-privacy'], 'La política diu que fa servir l’identificador publicitari d’Android i d’iOS per analitzar i servir anuncis.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['universo-rfaf-privacy'], 'Google Analytics i etiquetes de seguiment de campanyes.', {
      trackers: [{ name: 'Google Analytics', purpose: 'Analítica d’ús', sources: ['universo-rfaf-privacy'] }],
    }),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['universo-rfaf-privacy'], 'Publicitat personalitzada amb consentiment, comunicacions comercials amb patrocinadors i xarxes publicitàries de tercers.'),
    profiling: f('yes', 'official', ['universo-rfaf-privacy'], 'Perfils a partir de la navegació amb consentiment; on no es demana, la política l’empara en l’interès legítim.'),
    aiTraining: unknown('La política no en parla.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['universo-rfaf-privacy', 'universo-rfaf-app-store'], 'Proveïdors d’allotjament i analítica, xarxes publicitàries, Google, i segons la descripció Redsys i MailRelay.'),
    intraGroupSharing: unknown('La política no esmenta la Federación Española ni altres entitats federatives.'),
    dataBrokerSales: f('no', 'official', ['universo-rfaf-privacy'], 'Diu que les dades no se cedeixen a tercers per a finalitats pròpies.'),
    internationalTransfers: f('yes', 'official', ['universo-rfaf-privacy'], 'Google Analytics desa les dades als Estats Units; la política només diu que les transferències tenen «garanties suficients».', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['universo-rfaf-privacy'], 'Mentre s’usi el servei o fins que es retiri el consentiment; 5 anys si es detecten conductes contra els drets de la RFAF.'),
    dataAfterDeletion: unknown('La política no ho explica.'),
    periods: [{ period: 'Conductes que vulnerin els drets de la RFAF: 5 anys', sources: ['universo-rfaf-privacy'] }],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['universo-rfaf-privacy'], 'Es pot exercir el dret de supressió per correu.'),
    selfService: unknown('No hem pogut comprovar si l’aplicació té una opció d’eliminar el compte.'),
    difficulty: 'unknown',
    steps: [
      'Escriu a calidad@rfaf.es demanant la supressió de les dades i adjunta una còpia del DNI.',
      'Si no respon en un mes, pots reclamar a l’Agencia Española de Protección de Datos.',
    ],
    sources: ['universo-rfaf-privacy'],
  },
  userRights: rfafRights('universo-rfaf-privacy'),
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['universo-rfaf-privacy'], 'El perfilat i les comunicacions comercials depenen d’una casella opcional; per a les galetes, remet a la configuració del navegador.'),
    telemetryOptOut: unknown('No hem trobat cap opció dins de l’aplicació.'),
    granularControls: f('partial', 'official', ['universo-rfaf-privacy'], 'Caselles separades per al perfilat i per a les comunicacions comercials.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem pogut revisar el registre ni el pagament dins de l’aplicació.'),
  },
  security: rfafSecurity,
  review: {
    researchStatus: 'initial',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'La política és la genèrica de l’«Entorn RFAF» i no parla de l’aplicació, de les dades esportives ni dels menors, tot i que l’aplicació va adreçada a jugadors federats i la política fixa l’edat mínima en 14 anys. Les ressenyes de l’App Store es queixen d’un pagament de 25 euros per seguir un jugador, que no hem pogut verificar en cap document oficial.',
    openQuestions: [
      'La cerca d’incidents no s’ha pogut completar: s’havia esgotat el pressupost de cerques web de la sessió.',
      'Com es tracten les dades dels jugadors menors de 14 anys, que la política exclou?',
      'L’aplicació té una opció d’eliminar el compte?',
    ],
  },
}

/* ═══════════════════════ RFAF (antiga intranet) ═══════════════════════ */
const rfafApp: AppSeed = {
  slug: 'rfaf',
  name: 'RFAF',
  company: 'rfaf',
  categories: ['esports-i-resultats'],
  tagline: 'Accés mòbil a la intranet federativa que declara no recollir dades malgrat funcionar amb usuari i contrasenya',
  summary:
    'L’aplicació RFAF dona accés mòbil a la intranet de la federació andalusa amb l’usuari i la contrasenya de cada persona. L’etiqueta de l’App Store diu que no recull cap dada, cosa difícil de conciliar amb un servei que funciona amb credencials i dades federatives. La política enllaçada és la genèrica del web de la RFAF, que preveu perfils, publicitat personalitzada i Google Analytics.',
  platforms: ['ios', 'android'],
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.rfaf.es/',
    privacyPolicy: 'https://www.rfaf.es/pnfg/NNws_ShwNewDup?codigo=57343&cod_primaria=5002399&cod_secundaria=5002399',
    appStore: appStore('1475876998'),
  },
  accountRequired: f('yes', 'official', ['rfaf-app-store'], 'S’hi accedeix amb l’usuari i la clau de la intranet de la federació.'),
  openSource: f('no', 'official', ['rfaf-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'La intranet federativa conté llicències, clubs i dades de competició de jugadors, entrenadors i àrbitres, sovint menors. L’aplicació hi dona accés segons els permisos de cada persona.',
  dataCollection: [
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['rfaf-app-store'], note: 'L’usuari de la intranet, tot i que l’etiqueta diu que no es recull cap dada.' }),
    row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['rfaf-app-store'] }),
    row('identificador-publicitari', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['rfaf-privacy-policy'], note: 'La política genèrica diu que fa servir l’identificador publicitari d’Android i d’iOS; no sabem si s’aplica a aquesta aplicació.' }),
    row('interaccions-i-us', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['rfaf-privacy-policy'], note: 'La política preveu Google Analytics a l’«Entorn RFAF».' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['rfaf-app-store'], 'L’etiqueta diu que no es recull cap dada.'),
    advertisingIdentifiers: unknown('La política genèrica esmenta l’identificador publicitari, però l’etiqueta diu que no es recull res.'),
    thirdPartyTrackersPresent: unknown('La política genèrica esmenta Google Analytics; no sabem si l’aplicació l’integra.'),
  },
  dataUses: {
    targetedAdvertising: unknown('La política genèrica ho preveu per a l’«Entorn RFAF», però no hem pogut comprovar si s’aplica a aquesta aplicació.'),
    profiling: unknown('La política genèrica preveu perfils; no sabem si s’aplica a la intranet.'),
    aiTraining: unknown('La política no en parla.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['rfaf-privacy-policy'], 'Proveïdors d’allotjament i analítica i xarxes publicitàries, segons la política genèrica.'),
    intraGroupSharing: unknown('La política no esmenta la Federación Española ni altres entitats federatives.'),
    dataBrokerSales: f('no', 'official', ['rfaf-privacy-policy'], 'Diu que les dades no se cedeixen a tercers per a finalitats pròpies.'),
    internationalTransfers: f('partial', 'official', ['rfaf-privacy-policy'], 'Preveu transferències a proveïdors de fora de l’EEE, com Google, amb «garanties suficients».', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['rfaf-privacy-policy'], 'Mentre s’usi el servei o fins que es retiri el consentiment; 5 anys si es detecten conductes contra els drets de la RFAF.'),
    dataAfterDeletion: unknown('La política no ho explica.'),
  },
  accountDeletion: {
    possible: f('partial', 'official', ['rfaf-privacy-policy'], 'Es pot exercir el dret de supressió per correu, però el compte depèn de la llicència federativa.'),
    selfService: unknown('No hem trobat cap opció d’eliminar el compte a l’aplicació.'),
    difficulty: 'unknown',
    steps: [
      'Escriu a calidad@rfaf.es demanant la supressió de les dades i adjunta una còpia del DNI.',
      'Si no respon en un mes, pots reclamar a l’Agencia Española de Protección de Datos.',
    ],
    obstacles: 'Les dades de la intranet estan lligades a la llicència federativa; la política no explica què passa amb elles si es demana la supressió.',
    sources: ['rfaf-privacy-policy'],
  },
  userRights: rfafRights('rfaf-privacy-policy'),
  controls: {
    adPersonalizationOptOut: unknown('No sabem si l’aplicació mostra publicitat.'),
    telemetryOptOut: unknown('No hem trobat cap opció.'),
    granularControls: unknown('No hem pogut revisar l’aplicació per dins.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown('No hem pogut revisar l’aplicació per dins.'),
  },
  security: rfafSecurity,
  review: {
    researchStatus: 'initial',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'Les ressenyes recents de l’App Store diuen que l’aplicació no connecta i que obliga a passar a una versió nova, probablement Universo RFAF. Si es retira, caldrà marcar-la com a discontinuada.',
    openQuestions: [
      'La cerca d’incidents no s’ha pogut completar: s’havia esgotat el pressupost de cerques web de la sessió.',
      'L’aplicació continua activa o l’ha substituïda Universo RFAF?',
    ],
  },
}

export const lot: SeedLot = {
  companies: [
    {
      slug: 'aead',
      name: 'Agencia Estatal de Administración Digital',
      legalName: 'Agencia Estatal de Administración Digital (AEAD)',
      description:
        'Agència estatal adscrita al Ministeri per a la Transformació Digital i de la Funció Pública, hereva de la Secretaria General d’Administració Digital. Gestiona serveis comuns d’administració electrònica de l’Estat com Mi Carpeta Ciudadana, la DEHú o Autofirma.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'state',
      primaryRevenueModel: 'unknown',
      website: 'https://administracionelectronica.gob.es/',
      productDomains: ['carpetaciudadana.gob.es', 'dehu.redsara.es', 'administracionelectronica.gob.es'],
      privacyContact: 'protecciondatos.sgad@correo.gob.es',
    },
    {
      slug: 'next-vision',
      name: 'Next Vision',
      legalName: 'Next Vision Limited',
      description:
        'Empresa de Hong Kong que publica aplicacions d’identificació per foto amb subscripció (monedes, cartes col·leccionables, antiguitats). Segons les seves polítiques, les aplicacions s’allotgen als Estats Units i les dades es transfereixen a empreses vinculades de Hangzhou.',
      headquartersCountry: 'HK',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://coinidentifierai.com/',
      productDomains: ['coinidentifierai.com', 'tcgcardworth.com', 'antiqueworthai.com', 'foilsnap.com', 'antiqsnap.com', 'thevisionext.com'],
    },
    {
      slug: 'shopify-inc',
      name: 'Shopify',
      legalName: 'Shopify Inc.',
      description:
        'Empresa canadenca de programari de comerç electrònic que cotitza en borsa. Allotja milions de botigues en línia i les connecta amb la clientela a través de l’aplicació Shop i de Shop Pay.',
      headquartersCountry: 'CA',
      ownership: 'public',
      foundedYear: 2006,
      primaryRevenueModel: 'commerce',
      website: 'https://www.shopify.com/',
      productDomains: ['shopify.com', 'shop.app', 'myshopify.com'],
    },
    {
      slug: 'shopify-international',
      name: 'Shopify International',
      legalName: 'Shopify International Ltd.',
      parent: 'shopify-inc',
      description:
        'Filial irlandesa de Shopify, responsable del tractament de les dades de les persones usuàries de l’Espai Econòmic Europeu i el Regne Unit, amb delegat de protecció de dades a Dublín.',
      headquartersCountry: 'IE',
      euEstablishment: 'IE',
      ownership: 'subsidiary',
      primaryRevenueModel: 'commerce',
      website: 'https://www.shopify.com/',
      productDomains: ['shopify.com', 'shop.app'],
      privacyContact: 'https://privacy.shopify.com/en',
    },
    {
      slug: 'rfaf',
      name: 'Real Federación Andaluza de Fútbol',
      legalName: 'Real Federación Andaluza de Fútbol (CIF G41036047)',
      description:
        'Federació esportiva de futbol d’Andalusia, amb seu a Sevilla. Gestiona les llicències, les competicions i els àrbitres del futbol federat andalús, i una part important dels seus federats són menors.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'nonprofit',
      primaryRevenueModel: 'unknown',
      website: 'https://www.rfaf.es/',
      productDomains: ['rfaf.es', 'universorfaf.es'],
      privacyContact: 'calidad@rfaf.es',
    },
  ],
  sources: [
    /* ── Etiquetes de l’App Store ── */
    s('carpeta-ciudadana-app-store', 'Mi carpeta Ciudadana — App Store (Privacidad de la app)', appStore('1555943725'), 'Apple / AEAD', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta «No se recopilan datos» i descripció de les funcions: dades d’altres administracions, justificants compartibles, calendari, avisos i accés amb Cl@ve.',
    }),
    s('notifica-app-store', 'Notifica App — App Store (Privacidad de la app)', appStore('6450259609'), 'Apple / AEAD', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta «No se recopilan datos» i descripció de l’aplicació de la DEHú, amb accés a través de Cl@ve.',
    }),
    s('autofirma-app-store', 'Autofirma App — App Store (Privacidad de la app)', appStore('627410001'), 'Apple / AEAD', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta «No se recopilan datos», requisits (certificat PKCS#12 o DNI electrònic) i notes de versió, entre elles la signatura trifàsica des de la 1.9.',
    }),
    s('foilsnap-app-store', 'FoilSnap: Escáner cartas TCG — App Store (Privacidad de la app)', appStore('6752642525'), 'Apple / Next Vision Limited', 'app-store', 'primary', {
      language: 'es',
      summary: 'Declara compres, identificadors i dades d’ús per rastrejar, i fotos, historial de cerca, correu i diagnòstics vinculats a la identitat.',
    }),
    s('coinsnap-app-store', 'CoinSnap: Guía de valores — App Store (Privacidad de la app)', appStore('1634551626'), 'Apple / Next Vision Limited', 'app-store', 'primary', {
      language: 'es',
      summary: 'Declara compres, identificadors i dades d’ús per rastrejar, i fotos, historial de cerca, correu i diagnòstics vinculats a la identitat.',
    }),
    s('antiqsnap-app-store', 'AntiqSnap: Id. de antigüedades — App Store (Privacidad de la app)', appStore('6752929120'), 'Apple / Next Vision Limited', 'app-store', 'primary', {
      language: 'es',
      summary: 'Mateixa etiqueta que les altres aplicacions de Next Vision: rastreig amb compres, identificadors i dades d’ús.',
    }),
    s('shop-app-store', 'Shop: tus marcas favoritas — App Store (Privacidad de la app)', appStore('1223471316'), 'Apple / Shopify', 'app-store', 'primary', {
      language: 'es',
      summary: 'Sense dades de rastreig; declara vinculades a la identitat ubicació precisa, compres, pagament, correus i missatges, cerques i contacte, i el nom per a màrqueting propi.',
    }),
    s('shopify-app-store', 'Shopify: gestiona tu negocio — App Store (Privacidad de la app)', appStore('371294472'), 'Apple / Shopify', 'app-store', 'primary', {
      language: 'es',
      summary: 'Sense dades de rastreig; declara dades financeres, de contacte, contingut, historial de cerca i navegació, identificadors i dades de publicitat per a màrqueting propi.',
    }),
    s('universo-rfaf-app-store', 'Universo RFAF — App Store (Privacidad de la app)', appStore('6753349325'), 'Apple / RFAF', 'app-store', 'primary', {
      language: 'es',
      summary: 'Declara nom, correu, telèfon, adreça i identificador vinculats a la identitat, i ubicació aproximada, dades d’ús i diagnòstics no vinculats. La descripció esmenta Redsys i MailRelay.',
    }),
    s('rfaf-app-store', 'RFAF — App Store (Privacidad de la app)', appStore('1475876998'), 'Apple / RFAF', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta «No se recopilan datos» en una aplicació que funciona amb l’usuari i la clau de la intranet federativa.',
    }),

    /* ── Administració ── */
    s('carpeta-ciudadana-privacy', 'Política de privacidad de Mi Carpeta Ciudadana', 'https://masinformacioncarpeta.carpetaciudadana.gob.es/infocc/en/politica-privacidad-carpeta-ciudadana', 'Agencia Estatal de Administración Digital', 'privacy-policy', 'primary', {
      summary: 'Responsable (AEAD), categories de dades, bases legals, terminis de conservació per bloc, tractament dins de la UE i canal de drets. La pàgina enllaçada des de l’App Store carrega amb JavaScript; aquesta és la versió llegible.',
    }),
    s('aead-rat-sgad', 'Registro de actividades y categorías de tratamiento de datos personales (SGAD)', 'https://digital.gob.es/content/dam/portal-mtdfp/ministerio/proteccion-datos/RAT_SGAD.pdf', 'Ministerio para la Transformación Digital y de la Función Pública', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2024-09-24',
      summary: 'Fitxes de Mi Carpeta Ciudadana, dels avisos de notificacions i de la DEHú: finalitats, dades, cap cessió ni transferència prevista i mesures de l’Esquema Nacional de Seguretat.',
    }),
    s('notifica-privacy', 'Política de Privacidad de Notifica App', 'https://dehu.redsara.es/es/privacity-app', 'Agencia Estatal de Administración Digital', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'L’AEAD només respon de les dades de contacte i del dispositiu; sense perfils ni decisions automatitzades, tractament dins de la UE i biomètric gestionat pel mòbil. Llegida al codi del portal perquè la pàgina carrega amb JavaScript.',
    }),
    s('notifica-dehu-portal', 'DEHú — Datos de contacto y avisos', 'https://dehu.redsara.es/es/contact-and-notices', 'Agencia Estatal de Administración Digital', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Textos del portal de la DEHú: opció «Eliminar todos mis datos de contacto», historial de dispositius per als avisos push i sistemes d’accés de Cl@ve, amb nivell reforçat per a algunes notificacions.',
    }),
    s('autofirma-privacy', 'Política de privacitat d’Autofirma App', 'https://github.com/ctt-gob-es/firma-ios/blob/master/Firma_iOS/Supporting%20Files/privacy_policy_ca.html', 'Agencia Estatal de Administración Digital', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Política que porta l’aplicació: responsable (AEAD), dades del certificat o del DNI electrònic, finalitat única de signatura i canal de drets. L’enllaç de l’App Store porta a un altre ministeri.',
    }),
    s('autofirma-ios-repo', 'ctt-gob-es/firma-ios', 'https://github.com/ctt-gob-es/firma-ios', 'Centro de Transferencia de Tecnología', 'repository', 'primary', {
      language: 'es',
      summary: 'Codi de l’aplicació d’iOS. Inclou la biblioteca de Google Analytics, però la inicialització és comentada; l’historial es desa en local.',
    }),
    s('carpeta-ciudadana-accessibilitat', 'Accesibilidad App — Mi Carpeta Ciudadana', 'https://masinformacioncarpeta.carpetaciudadana.gob.es/infocc/accesibilidad-app', 'Agencia Estatal de Administración Digital', 'support-doc', 'primary', {
      language: 'es',
      publishedAt: '2022-09-12',
      summary: 'Declaració d’accessibilitat de l’aplicació mòbil: «parcialment conforme» amb el Reial decret 1112/2018, amb els PDF descarregats com a principal incompliment. Autoavaluació de l’AEAD, sense revisar des del 2022.',
    }),
    s('notifica-accessibilitat', 'Declaración de Accesibilidad de la Aplicación Dehú Notifica', 'https://dehu.redsara.es/es/accesibility-app', 'Agencia Estatal de Administración Digital', 'support-doc', 'primary', {
      language: 'es',
      publishedAt: '2025-10-29',
      summary: 'Declaració d’accessibilitat de l’aplicació DEHú-Notifica 1.5.11: «parcialment conforme» amb el Reial decret 1112/2018, amb incompliments de l’ordre del focus, l’idioma del programari i les etiquetes del formulari de contacte. Autoavaluació feta per un tercer. Llegida al codi del portal, que carrega amb JavaScript.',
    }),
    s('autofirma-accessibilitat', 'Accesibilidad — Portal Firma Electrónica', 'https://firmaelectronica.gob.es/Home/Accesibilidad.html', 'Agencia Estatal de Administración Digital', 'support-doc', 'primary', {
      language: 'es',
      publishedAt: '2025-04-02',
      summary: 'Declaració d’accessibilitat de l’AEAD limitada expressament al lloc web firmaelectronica.gob.es, «parcialment conforme» amb el Reial decret 1112/2018. No cobreix l’aplicació mòbil d’Autofirma.',
    }),
    s('boe-ley-39-2015', 'Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las Administraciones Públicas', 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565', 'Agencia Estatal Boletín Oficial del Estado', 'legislation', 'authority', {
      language: 'es',
      publishedAt: '2015-10-02',
      summary: 'Text consolidat. Article 14.1: les persones físiques trien si es relacionen amb l’Administració per mitjans electrònics; article 14.2: hi estan obligades les persones jurídiques, les entitats sense personalitat i qui exerceix una professió col·legiada. Article 43: notificacions electròniques per compareixença a la Direcció Electrònica Habilitada única. Article 70.1: l’expedient administratiu.',
    }),

    /* ── Next Vision ── */
    s('foilsnap-privacy-policy', 'FoilSnap Privacy Policy (European Union)', 'https://app-service.tcgcardworth.com/static/EuropeanUnion/privacy_policy.html', 'Next Vision Limited', 'privacy-policy', 'primary', {
      publishedAt: '2026-01-26',
      summary: 'Identificadors del dispositiu i de la línia, Google Analytics, Adjust, xarxes publicitàries, allotjament als Estats Units i transferència a empreses vinculades de Hangzhou.',
    }),
    s('antiqsnap-privacy-policy', 'AntiqSnap Privacy Policy (European Union)', 'https://app-service.antiqueworthai.com/static/EuropeanUnion/privacy_policy.html', 'Next Vision Limited', 'privacy-policy', 'primary', {
      publishedAt: '2026-01-26',
      summary: 'Text idèntic al de FoilSnap: Google Analytics, Adjust, xarxes publicitàries, allotjament als Estats Units i transferència a Hangzhou.',
    }),
    s('coinsnap-privacy-policy', 'CoinSnap Privacy Policy', 'https://app-service.coinidentifierai.com/static/privacy_policy.html', 'Next Vision Limited', 'privacy-policy', 'primary', {
      publishedAt: '2025-09-10',
      archiveUrl: 'http://web.archive.org/web/20260629022511/https://app-service.coinidentifierai.com/static/privacy_policy.html',
      summary: 'Versió general (no la de la UE, bloquejada per Cloudflare): IDFA amb permís, Google Analytics, SDK de Facebook i d’Adjust, publicitat per interès legítim i allotjament als Estats Units.',
    }),
    s('coinsnap-faq', 'CoinSnap FAQ', 'https://coinidentifierai.com/faq', 'Next Vision Limited', 'support-doc', 'primary', {
      summary: 'Passos per eliminar el compte dins de l’aplicació i l’afirmació que no es compartirà mai la informació amb ningú.',
    }),
    s('antiqsnap-faq', 'AntiqSnap FAQ', 'https://antiqueworthai.com/faq', 'Next Vision Limited', 'support-doc', 'primary', {
      summary: 'Passos per eliminar el compte dins de l’aplicació i la mateixa afirmació que no es compartirà mai la informació.',
    }),

    /* ── Shopify ── */
    s('shopify-privacy-policy', 'Shopify Privacy Policy', 'https://www.shopify.com/legal/privacy', 'Shopify', 'privacy-policy', 'primary', {
      publishedAt: '2026-07-07',
      summary: 'Shopify International Ltd. com a responsable per a l’EEE, delegat de protecció de dades a Dublín, normes corporatives vinculants i ús de l’aprenentatge automàtic.',
    }),
    s('shopify-consumer-privacy', 'Shopify Consumer Privacy Policy', 'https://www.shopify.com/legal/privacy/app-users', 'Shopify', 'privacy-policy', 'primary', {
      publishedAt: '2026-03-02',
      summary: 'Política de Shop: correus de les bústies connectades, sincronització de l’activitat entre botigues, publicitat dirigida amb exclusió i eliminació del compte des de l’aplicació.',
    }),
    s('shopify-merchant-privacy', 'Shopify Merchants Privacy Policy', 'https://www.shopify.com/legal/privacy/merchants', 'Shopify', 'privacy-policy', 'primary', {
      publishedAt: '2025-07-25',
      summary: 'Dades de comerciants, verificació amb document d’identitat i foto, Sift contra el frau, conservació de dos anys després de tancar la botiga i 90 dies després d’una petició de supressió.',
    }),
    s('shopify-security', 'Shopify Security', 'https://www.shopify.com/security', 'Shopify', 'privacy-center', 'primary', {
      summary: 'Certificació PCI DSS de nivell 1 i informes SOC 2 tipus II i SOC 3.',
    }),
    s('shopify-security-txt', 'shopify.com security.txt', 'https://www.shopify.com/.well-known/security.txt', 'Shopify', 'technical-doc', 'primary', {
      summary: 'Contacte de seguretat, clau de xifratge i programa de recompenses a HackerOne.',
    }),
    s('shopify-2fa-help', 'Two-step authentication — Shopify Help Center', 'https://help.shopify.com/en/manual/your-account/logging-in/secure-sign-in', 'Shopify', 'support-doc', 'primary', {
      summary: 'Mètodes de verificació en dos passos admesos i obligatorietat per fer servir Shopify Payments.',
    }),
    s('shopify-pause-help', 'Pausing or closing your store — Shopify Help Center', 'https://help.shopify.com/en/manual/your-account/manage-orgs-and-stores/manage-pricing-plan/pause-store', 'Shopify', 'support-doc', 'primary', {
      summary: 'Camí Configuració > Pla > Cancel·la el pla, opció de pausar la botiga i avís que les aplicacions de tercers continuen actives.',
    }),
    s('shopify-insider-breach-2020', 'Shopify says two ‘rogue’ staff stole customer data from merchants', 'https://techcrunch.com/2020/09/23/shopify-data-merchant-breach/', 'TechCrunch', 'press', 'secondary', {
      publishedAt: '2020-09-23',
      summary: 'Dos treballadors d’atenció al client van obtenir dades de clientela de menys de 200 botigues; Shopify els va acomiadar i ho va comunicar a l’FBI.',
    }),

    /* ── RFAF ── */
    s('rfaf-privacy-policy', 'Política de privacidad y cookies + DPO — RFAF', 'https://www.rfaf.es/pnfg/NNws_ShwNewDup?codigo=57343&cod_primaria=5002399&cod_secundaria=5002399', 'Real Federación Andaluza de Fútbol', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política genèrica de l’«Entorn RFAF»: edat mínima de 14 anys, perfils i publicitat personalitzada, Google Analytics, identificador publicitari i drets a calidad@rfaf.es.',
    }),
    s('universo-rfaf-privacy', 'Política de privacidad y cookies + DPO — Universo RFAF', 'https://www.universorfaf.es/legal', 'Real Federación Andaluza de Fútbol', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'El mateix text que la política del web de la RFAF, sense cap referència específica a l’aplicació ni a les dades esportives.',
    }),
  ],
  apps: [carpeta, notifica, autofirma, foilsnap, coinsnap, antiqsnap, shop, shopify, universoRfaf, rfafApp],
  incidents: [
    {
      slug: 'shopify-insider-2020',
      title: 'Dos treballadors de Shopify van robar dades de clientela de menys de 200 botigues',
      type: 'breach',
      severity: 'medium',
      apps: ['shopify'],
      company: 'shopify-inc',
      occurredAt: '2020-09-15',
      disclosedAt: '2020-09-23',
      description:
        'Shopify va detectar el setembre del 2020 que dos membres del seu equip d’atenció al client havien obtingut registres de transaccions de clientela de les botigues a través de l’API de comandes: noms, adreces, detalls de les comandes i els quatre últims dígits de les targetes. La data d’inici és la de la detecció. L’empresa els va acomiadar, va dir que no tenia proves que les dades s’haguessin fet servir i ho va comunicar a l’FBI.',
      affectedPeople: 'Clientela de menys de 200 botigues; en una sola botiga, 4.900 registres consultats.',
      sources: ['shopify-insider-breach-2020'],
    },
  ],
  storeIds: {
    'mi-carpeta-ciudadana': 'es.gob.carpeta',
    notifica: 'es.gob.dehu',
    autofirma: 'es.gob.afirma.Cliente--firma',
    foilsnap: 'com.tcgworth.identifier',
    coinsnap: 'com.coinidentifier.identifycoins',
    antiqsnap: 'com.antiqueworth.identifier',
    'shop-app': 'com.jadedlabs.arrive',
    shopify: 'com.jadedpixel.shopify',
    'universo-rfaf': 'com.universo.rfaf.universoRfafApp',
    rfaf: 'es.rfaf.apprfaf',
  },
}
