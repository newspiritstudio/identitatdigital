import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 04 de la segona onada: serveis públics de Madrid (Cita Sanitaria,
 * Tarjeta Sanitaria, Tarjeta Transporte, EMT Madrid i BiciMAD) i cinc
 * aplicacions de Meta (Meta AI, Threads, Edits, WhatsApp Business i
 * Messenger).
 *
 * Les fitxes de Madrid es basen en les clàusules de protecció de dades de cada
 * organisme, que sovint són breus i no parlen de l’aplicació en concret. Les de
 * Meta reutilitzen la política de privadesa del grup i hi afegeixen l’etiqueta
 * de l’App Store i les pàgines d’ajuda pròpies de cada aplicació.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

const noLabelNote =
  'L’etiqueta de l’App Store declara que el desenvolupador no recull cap dada. Com que el servei envia necessàriament dades identificatives als servidors de l’administració, aquesta declaració és incompleta.'

const metaLabelNote =
  'L’etiqueta de l’App Store no declara cap dada «utilitzada per rastrejar-te», però sí dades vinculades a la identitat que es fan servir per a publicitat de tercers.'

/* ─────────────── Blocs compartits de Meta ─────────────── */

const metaSharing = {
  thirdPartySharing: f('yes', 'official', ['meta-privacy-policy'], 'Anunciants, socis de mesura, proveïdors de serveis i autoritats, segons la política comuna de Meta.'),
  intraGroupSharing: f('yes', 'official', ['meta-privacy-policy'], 'La informació circula entre els productes de Meta, sobretot si els comptes estan units al Centre de comptes.'),
  dataBrokerSales: f('partial', 'official', ['meta-privacy-policy'], 'Meta diu que no ven dades personals, però en rep de socis comercials i les incorpora al perfil.'),
  internationalTransfers: f('yes', 'regulator', ['meta-privacy-policy', 'dpc-meta-transfers-2023'], 'Transferències als Estats Units, sancionades el 2023 abans del marc d’adequació actual.', { mechanism: 'adequacy' }),
}

const metaTransparency = {
  transparencyReport: f('yes', 'official', ['meta-transparency-center'], 'Informe conjunt del grup Meta sobre peticions governamentals i aplicació de normes.', {
    url: 'https://transparency.meta.com/',
  }),
}

const metaRights = {
  dataExport: f('yes', 'official', ['fb-download-info'], 'Exportació des del Centre de comptes de Meta.', {
    url: 'https://accountscenter.meta.com/info_and_permissions/dyi/',
  }),
  exportFormatQuality: 'mixed' as const,
  rightsExercise: f('yes', 'official', ['meta-privacy-center'], 'Formulari de drets del grup Meta i contacte amb el delegat de protecció de dades de Meta Platforms Ireland.', {
    url: 'https://www.facebook.com/help/contact/540977946302970',
    responseTimeDays: 30,
  }),
}

const metaSecurityBase = {
  transportEncryption: f('yes', 'official', ['meta-privacy-policy']),
  atRestEncryption: f('yes', 'official', ['meta-privacy-policy']),
  mfa: f('yes', 'official', ['meta-privacy-center'], 'Verificació en dos passos del Centre de comptes amb aplicació d’autenticació, SMS, claus de seguretat i claus d’accés.', {
    methods: ['totp', 'sms', 'hardware-key', 'passkey'],
  }),
  independentAudits: unknown('No hem trobat auditories de seguretat independents publicades sobre aquesta aplicació.'),
  bugBounty: f('yes', 'official', ['meta-transparency-center'], 'Coberta pel programa de recompenses de Meta.', { url: 'https://www.facebook.com/whitehat' }),
  vulnerabilityDisclosure: f('yes', 'official', ['meta-transparency-center']),
}

/* ─────────────── Blocs compartits de Madrid ─────────────── */

const madridNoTracking = (source: string) => ({
  crossAppTracking: f('no', 'official', [source], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
  advertisingIdentifiers: f('no', 'official', [source], 'L’etiqueta no declara l’identificador publicitari.'),
  thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent dels kits de tercers que porta l’aplicació.'),
})

const publicNoAds = (source: string) => ({
  targetedAdvertising: f('no', 'official', [source], 'La clàusula de protecció de dades no preveu cap finalitat publicitària.'),
  aiTraining: unknown('La informació publicada no en diu res.'),
})

const noAdsControl = na('El servei no mostra publicitat.')

const unknownPublicSecurity = {
  independentAudits: unknown('No hem trobat auditories ni certificacions publicades específicament sobre aquesta aplicació.'),
  bugBounty: unknown('No hem trobat cap programa de recompenses per vulnerabilitats.'),
  vulnerabilityDisclosure: unknown('No hem trobat cap canal públic de notificació de vulnerabilitats ni fitxer security.txt.'),
}

/* ═══════════════════════ Cita Sanitaria Madrid ═══════════════════════ */
const citaSanitaria: AppSeed = {
  slug: 'cita-sanitaria-madrid',
  name: 'Cita Sanitaria Madrid',
  company: 'comunidad-de-madrid',
  categories: ['salut-i-assistencia-sanitaria', 'administracio-publica'],
  tagline: 'Cita prèvia del Servei Madrileny de Salut amb el codi de la targeta, la data de naixement i el DNI',
  summary:
    'L’aplicació permet demanar, canviar i anul·lar cites d’atenció primària i de primera consulta hospitalària del Servei Madrileny de Salut. No té compte propi: la persona s’identifica cada vegada amb el codi de la targeta sanitària, la data de naixement i el DNI o NIE. L’etiqueta de l’App Store diu que no recull cap dada, però no hem trobat cap clàusula de protecció de dades pròpia de l’aplicació, i les cites revelen per si mateixes el vincle amb serveis sanitaris concrets.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'public-service',
  jurisdiction: 'Espanya (Comunitat de Madrid)',
  links: {
    website: 'https://www.comunidad.madrid/salud/cita-sanitaria',
    privacyPolicy: 'https://www.comunidad.madrid/gobierno/informacion-juridica-legislacion/proteccion-datos',
    appStore: appStore('798785132'),
  },
  accountRequired: f('no', 'official', ['cita-sanitaria-madrid-servei', 'cita-sanitaria-madrid-tsv-2023'], 'No hi ha registre: cada cita es demana amb el codi de la targeta sanitària, la data de naixement i el DNI o NIE. Per als menors de 16 anys s’introdueix el DNI de la persona adulta responsable.'),
  openSource: unknown('No hem trobat el codi publicat.'),
  publicService: {
    isPublicService: true,
    administrationLevel: 'regional',
    legalBasis: unknown('No hem trobat cap clàusula de protecció de dades pròpia de l’aplicació ni del servei de cita prèvia que citi la norma que empara el tractament.'),
    processingRegistry: f('partial', 'official', ['comunidad-madrid-rat', 'comunidad-madrid-proteccion-datos'], 'La Comunitat publica el registre d’activitats de tractament amb un cercador per conselleries, però no hi hem localitzat de manera identificable l’activitat de la cita sanitària.', {
      url: 'https://www.comunidad.madrid/proteccion-datos/registro-actividades-tratamiento-rat',
    }),
    dpia: unknown('No hem trobat publicada cap avaluació d’impacte relativa a la protecció de dades d’aquest servei.'),
    ensConformity: unknown('No hem trobat cap declaració ni certificació de conformitat amb l’Esquema Nacional de Seguretat d’aquest sistema.'),
    dpo: f('yes', 'official', ['comunidad-madrid-dpd'], 'Comitè Delegat de Protecció de Dades de la Conselleria de Sanitat, amb adreça de contacte publicada al portal de la Comunitat.', {
      contact: 'protecciondedatos.sanidad@madrid.org',
    }),
    offlineAlternative: f('yes', 'official', ['cita-sanitaria-madrid-servei'], 'La cita es pot demanar també per web, pel telèfon del centre de salut, als quioscos digitals dels centres i presencialment; a l’atenció hospitalària hi ha el Centre de Gestió de Cites.'),
    accessibilityStatement: f('no', 'official', ['comunidad-madrid-accessibilitat'], 'La declaració d’accessibilitat del portal de la Comunitat es declara «no conforme» amb el Reial decret 1112/2018 (abril del 2024, revisada el maig del 2025) i no cobreix les aplicacions mòbils; no n’hem trobat cap de pròpia de l’aplicació.', {
      url: 'https://www.comunidad.madrid/atencion-ciudadano/declaracion-accesibilidad',
    }),
    mandatoryRetention: unknown('No hem trobat documentat quina norma obliga a conservar les cites ni durant quant de temps; l’aplicació no té compte que es pugui eliminar.'),
  },
  dataSummary:
    'El codi de la targeta, el DNI i la data de naixement identifiquen la persona sense ambigüitat. Les cites diuen amb quin servei sanitari es relaciona i quan, i en el cas dels menors vinculen la criatura amb la persona adulta que la cita.',
  dataCollection: [
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['cita-sanitaria-madrid-servei'], note: 'DNI o NIE; no s’accepta el passaport.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['cita-sanitaria-madrid-servei'], note: 'Codi de la targeta sanitària (CIPA), que fa de clau d’accés a la història del pacient.' }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['cita-sanitaria-madrid-servei'] }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['cita-sanitaria-madrid-servei'], level: 'editorial', note: 'Interpretació pròpia: l’especialitat i el tipus de cita són informació de salut encara que no es demani cap diagnòstic.' }),
    row('interaccions-i-us', 'unknown', { sources: ['cita-sanitaria-madrid-app-store'], note: 'L’etiqueta no declara dades d’ús ni de diagnòstic.' }),
  ],
  tracking: madridNoTracking('cita-sanitaria-madrid-app-store'),
  dataUses: {
    ...publicNoAds('comunidad-madrid-proteccion-datos'),
    profiling: unknown('No hem trobat una clàusula de protecció de dades específica de l’aplicació.'),
  },
  sharing: {
    thirdPartySharing: unknown('No hem trobat una clàusula específica. La de la carpeta de salut del mateix sistema diu que les dades no se cedeixen llevat d’obligació legal, però no consta que s’apliqui a aquesta aplicació.'),
    intraGroupSharing: unknown('Les cites s’integren amb la Tarjeta Sanitaria Virtual, però no consta amb quins altres òrgans de la Comunitat es comparteixen les dades.'),
    dataBrokerSales: unknown(),
    internationalTransfers: unknown('No hem trobat informació sobre transferències ni sobre els proveïdors tecnològics.'),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’accés a aquestes dades.'),
  },
  retention: {
    definedPeriods: unknown('No hem trobat terminis de conservació de les cites.'),
    dataAfterDeletion: na('No hi ha compte que es pugui eliminar; les cites formen part del sistema d’informació sanitària.'),
  },
  accountDeletion: {
    possible: na('L’aplicació no té comptes: no hi ha res a eliminar a part de desinstal·lar-la.'),
    selfService: na('No hi ha compte propi.'),
    difficulty: 'unknown',
    requiresSupportContact: false,
    dataRetained: 'Les cites queden registrades als sistemes del Servei Madrileny de Salut; la supressió s’ha de demanar per la via general de drets de la Comunitat de Madrid.',
    sources: ['cita-sanitaria-madrid-servei', 'comunidad-madrid-proteccion-datos'],
  },
  userRights: {
    dataExport: unknown('No hi ha una exportació pròpia de l’aplicació.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['comunidad-madrid-proteccion-datos'], 'Drets per registre electrònic o presencial i formulari general de la Comunitat de Madrid; cada conselleria té delegat de protecció de dades.', {
      url: 'https://www.comunidad.madrid/proteccion-datos/proteccion-datos-mis-derechos-su-ejercicio',
    }),
  },
  controls: {
    adPersonalizationOptOut: noAdsControl,
    telemetryOptOut: unknown(),
    granularControls: unknown(),
    defaultPosture: 'unknown',
    darkPatterns: unknown('No n’hem detectat, però no hem fet una revisió de l’aplicació.'),
  },
  security: {
    e2ee: na('No transporta comunicacions entre persones.'),
    transportEncryption: unknown('No hem trobat documentació tècnica pública.'),
    atRestEncryption: unknown(),
    mfa: f('no', 'official', ['cita-sanitaria-madrid-servei'], 'L’accés es fa només amb dades que coneixen moltes persones de l’entorn (codi de la targeta, data de naixement i DNI), sense cap segon factor.'),
    ...unknownPublicSecurity,
  },
  review: {
    researchStatus: 'initial',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Hem cercat incidents de seguretat de Cita Sanitaria i de la Tarjeta Sanitaria Virtual sense trobar-ne cap de documentat. La debilitat principal és l’autenticació: qualsevol persona que conegui aquestes tres dades pot veure i anul·lar les cites d’una altra.',
    openQuestions: [
      'Quina clàusula de protecció de dades s’aplica exactament a l’aplicació i quins encarregats del tractament hi intervenen?',
      'Com és compatible l’etiqueta «no es recullen dades» amb l’enviament del DNI i del codi de la targeta als servidors?',
    ],
  },
}

/* ═══════════════════════ Tarjeta Sanitaria ═══════════════════════ */
const tarjetaSanitaria: AppSeed = {
  slug: 'tarjeta-sanitaria',
  name: 'Tarjeta Sanitaria',
  company: 'comunidad-de-madrid',
  categories: ['salut-i-assistencia-sanitaria', 'administracio-publica'],
  tagline: 'Targeta sanitària virtual i carpeta de salut de Madrid, amb informes clínics al mòbil',
  summary:
    'La Tarjeta Sanitaria Virtual substitueix la targeta física als centres de salut i a les farmàcies i dona accés a «Mi Carpeta de Salud»: informes clínics, analítiques, medicació, cites i baixes laborals. Es tracten dades de salut per obligació legal, sense cessions llevat de les previstes per llei. El 2025 la Comunitat va eliminar el codi per SMS a l’accés a les dades personals i el va substituir per una validació automàtica del número a través de Telefónica.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'public-service',
  jurisdiction: 'Espanya (Comunitat de Madrid)',
  userBase: 'Uns 2,5 milions de persones tenien la targeta virtual activa el 2023, segons la Comunitat',
  links: {
    website: 'https://www.comunidad.madrid/salud/tarjeta-sanitaria-virtual',
    privacyPolicy: 'https://www.carpetavirtual.sanidadmadrid.org/cavi/mvc/info/protecciondatos',
    appStore: appStore('1517046103'),
  },
  accountRequired: f('yes', 'official', ['tarjeta-sanitaria-servei'], 'Cal activar-la amb Cl@ve Permanent, el sistema IDentifica, certificat digital o DNI electrònic, o bé amb un codi QR que lliuren als centres de salut.'),
  openSource: unknown('No hem trobat el codi publicat.'),
  publicService: {
    isPublicService: true,
    administrationLevel: 'regional',
    legalBasis: f('partial', 'official', ['tarjeta-sanitaria-carpeta-proteccion-datos'], 'La clàusula enumera el RGPD, la Llei orgànica 3/2018 i les lleis 41/2002, 14/1986, 39/2015, 19/2013 i 10/2019, però no concreta ni l’article habilitant ni la lletra de l’article 6.1 del RGPD que empara el tractament.', {
      norm: 'Llei 41/2002 i Llei 14/1986, citades sense article',
    }),
    processingRegistry: f('partial', 'official', ['comunidad-madrid-rat', 'comunidad-madrid-proteccion-datos'], 'El registre d’activitats de tractament de la Comunitat inclou les conselleries i les entitats adscrites, però no hi hem localitzat de manera identificable l’activitat de la targeta sanitària virtual ni de la carpeta de salut.', {
      url: 'https://www.comunidad.madrid/proteccion-datos/registro-actividades-tratamiento-rat',
    }),
    dpia: unknown('No hem trobat publicada cap avaluació d’impacte, tot i que el servei tracta dades de salut a gran escala.'),
    ensConformity: unknown('No hem trobat cap declaració ni certificació de conformitat amb l’Esquema Nacional de Seguretat de la carpeta de salut ni de la targeta virtual.'),
    dpo: f('yes', 'official', ['tarjeta-sanitaria-carpeta-proteccion-datos', 'comunidad-madrid-dpd'], 'La clàusula identifica el Comitè Delegat de Protecció de Dades de la Conselleria de Sanitat amb adreça postal, i el portal de la Comunitat en publica el correu.', {
      contact: 'protecciondedatos.sanidad@madrid.org',
    }),
    offlineAlternative: f('partial', 'official', ['tarjeta-sanitaria-servei'], 'L’activació es pot fer presencialment als centres de salut, als hospitals del Servei Madrileny de Salut i a les oficines de registre, però no hem trobat confirmat un accés equivalent a la carpeta de salut sense l’aplicació.'),
    accessibilityStatement: f('no', 'official', ['comunidad-madrid-accessibilitat'], 'La declaració del portal de la Comunitat es declara «no conforme» amb el Reial decret 1112/2018 i no cobreix les aplicacions mòbils; ni l’aplicació ni la carpeta virtual en tenen una de pròpia.', {
      url: 'https://www.comunidad.madrid/atencion-ciudadano/declaracion-accesibilidad',
    }),
    mandatoryRetention: f('yes', 'official', ['tarjeta-sanitaria-carpeta-proteccion-datos', 'boe-llei-41-2002'], 'La clàusula diu que les dades es conserven «durante los años necesarios para cumplir con la normativa vigente». La documentació clínica que mostra la carpeta de salut està sotmesa a l’article 17 de la Llei 41/2002, que obliga els centres a conservar-la com a mínim cinc anys des de l’alta de cada procés assistencial, de manera que el termini no el decideix el servei.', {
      norm: 'Llei 41/2002, article 17',
    }),
  },
  dataSummary:
    'L’aplicació porta al mòbil la història clínica de la persona: diagnòstics en informes, resultats d’analítiques, medicació, cites i baixes laborals. Qualsevol accés indegut al dispositiu o al compte exposa categories especials de dades de l’article 9 del RGPD.',
  dataCollection: [
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['tarjeta-sanitaria-carpeta-proteccion-datos'], note: 'Informes clínics, analítiques, medicació i baixes laborals extrets dels sistemes del Servei Madrileny de Salut.' }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['tarjeta-sanitaria-servei'], note: 'Per a l’activació amb Cl@ve, IDentifica o certificat digital.' }),
    row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['tarjeta-sanitaria-servei'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['tarjeta-sanitaria-servei', 'tarjeta-sanitaria-open-gateway-2025'], note: 'Es fa servir per a codis de verificació i, des del 2025, per a una validació automàtica amb l’operador de telefonia.' }),
    row('ubicacio-aproximada', 'optional', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tarjeta-sanitaria-carpeta-proteccion-datos'], note: 'La clàusula esmenta Google Maps per a les funcions de localització de centres.' }),
    row('situacio-familiar', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['tarjeta-sanitaria-servei'], note: 'L’accés delegat a comptes d’altres persones vincula membres de la família.' }),
  ],
  tracking: madridNoTracking('tarjeta-sanitaria-app-store'),
  dataUses: {
    ...publicNoAds('tarjeta-sanitaria-carpeta-proteccion-datos'),
    profiling: f('no', 'official', ['tarjeta-sanitaria-carpeta-proteccion-datos'], 'La finalitat declarada és donar accés a la informació clínica i facilitar tràmits sanitaris.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['tarjeta-sanitaria-carpeta-proteccion-datos', 'tarjeta-sanitaria-open-gateway-2025'], 'Les dades no se cedeixen llevat d’obligació legal. Hi intervenen proveïdors com Google Maps i, per a la validació del número, Telefónica.'),
    intraGroupSharing: unknown('No consta amb quins altres òrgans de la Comunitat es creuen les dades de l’aplicació més enllà del sistema sanitari.'),
    dataBrokerSales: f('no', 'official', ['tarjeta-sanitaria-carpeta-proteccion-datos'], 'Sense cessions llevat de les previstes per llei.'),
    internationalTransfers: unknown('La clàusula no en parla; l’ús de Google Maps podria implicar-ne.'),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe sobre accessos o peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['tarjeta-sanitaria-carpeta-proteccion-datos'], 'Es remet als terminis que fixa la normativa sanitària i als de prescripció, sense xifres concretes.'),
    dataAfterDeletion: f('partial', 'official', ['tarjeta-sanitaria-carpeta-proteccion-datos'], 'La informació clínica pertany a la història clínica, que la llei obliga a conservar; desactivar l’aplicació no l’esborra.'),
  },
  accountDeletion: {
    possible: unknown('No hem trobat cap procediment documentat per desactivar la targeta virtual o desvincular el dispositiu.'),
    selfService: unknown(),
    difficulty: 'unknown',
    dataRetained: 'La història clínica es conserva als sistemes del Servei Madrileny de Salut durant els terminis legals.',
    sources: ['tarjeta-sanitaria-servei', 'tarjeta-sanitaria-carpeta-proteccion-datos'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['tarjeta-sanitaria-servei'], 'Els informes i analítiques es poden consultar a la carpeta de salut; no hem trobat una exportació completa en format estructurat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['tarjeta-sanitaria-carpeta-proteccion-datos'], 'Per escrit a la Direcció General Assistencial amb còpia del DNI; comitè delegat de protecció de dades de la Conselleria de Sanitat.', {
      url: 'https://www.carpetavirtual.sanidadmadrid.org/cavi/mvc/info/protecciondatos',
    }),
  },
  controls: {
    adPersonalizationOptOut: noAdsControl,
    telemetryOptOut: unknown(),
    granularControls: f('partial', 'official', ['tarjeta-sanitaria-servei'], 'Es pot gestionar l’accés delegat d’altres persones al compte.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown('No n’hem detectat, però no hem fet una revisió de l’aplicació.'),
  },
  security: {
    e2ee: na('No transporta comunicacions entre persones.'),
    transportEncryption: unknown('No hem trobat documentació tècnica pública.'),
    atRestEncryption: unknown(),
    mfa: f('partial', 'official', ['tarjeta-sanitaria-servei', 'tarjeta-sanitaria-open-gateway-2025'], 'L’activació exigeix identitat digital forta. El 2025 es va treure el codi per SMS per accedir a les dades personals i es va substituir per una validació automàtica del número amb Telefónica; l’SMS es manté per delegar l’accés.', {
      methods: ['sms'],
    }),
    ...unknownPublicSecurity,
  },
  review: {
    researchStatus: 'initial',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'L’etiqueta de l’App Store declara que no es recull cap dada, cosa difícil de conciliar amb una aplicació que mostra la història clínica. La clàusula de protecció de dades que citem és la de «Mi Carpeta de Salud», el servei que l’aplicació integra. No hem trobat incidents documentats.',
    openQuestions: [
      'Quines dades rep Telefónica en la validació automàtica del número i amb quina base jurídica?',
      'Com es desactiva la targeta virtual i es desvincula un dispositiu perdut?',
    ],
  },
}

/* ═══════════════════════ Tarjeta Transporte ═══════════════════════ */
const tarjetaTransporte: AppSeed = {
  slug: 'tarjeta-transporte',
  name: 'Tarjeta Transporte',
  company: 'crtm',
  categories: ['mobilitat-i-transport'],
  tagline: 'Recàrrega de l’abonament de Madrid per NFC, del mateix consorci que va patir una filtració el 2023',
  summary:
    'L’aplicació del Consorci Regional de Transports de Madrid serveix per consultar el saldo i carregar títols a la Tarjeta Transporte Público acostant-la a l’iPhone. Segons el consorci, només recull el model del telèfon i la versió del sistema. El principal incident documentat afecta els sistemes del consorci: el novembre de 2023 un atac va extreure noms, adreces, correus i telèfons dels titulars de la targeta i informació de vendes de títols.',
  platforms: ['ios'],
  businessModel: 'public-service',
  jurisdiction: 'Espanya (Comunitat de Madrid)',
  links: {
    website: 'https://www.crtm.es/app-tarjeta-transporte',
    privacyPolicy: 'https://www.crtm.es/proteccion-de-datos',
    appStore: appStore('1619770175'),
  },
  accountRequired: unknown('La documentació no parla de cap registre; per carregar cal donar d’alta una targeta bancària a l’aplicació.'),
  openSource: unknown('No hem trobat el codi publicat.'),
  publicService: {
    isPublicService: true,
    administrationLevel: 'regional',
    legalBasis: f('partial', 'official', ['crtm-proteccion-datos'], 'La clàusula invoca el Reglament general de protecció de dades com a marc, però no cita cap norma amb rang ni article que empari el tractament de les dades de la targeta de transport.'),
    processingRegistry: f('partial', 'official', ['crtm-proteccion-datos', 'comunidad-madrid-rat'], 'La clàusula remet al registre d’activitats de tractament de la Comunitat, que inclou la Conselleria de Vivienda, Transportes e Infraestructuras i els organismes adscrits, entre els quals el consorci; no hi hem localitzat de manera identificable l’activitat de l’aplicació.', {
      url: 'https://www.comunidad.madrid/proteccion-datos/registro-actividades-tratamiento-rat',
    }),
    dpia: unknown('No hem trobat publicada cap avaluació d’impacte, tampoc després de l’atac del 2023.'),
    ensConformity: unknown('No hem trobat cap declaració ni certificació de conformitat amb l’Esquema Nacional de Seguretat dels sistemes del consorci.'),
    dpo: f('yes', 'official', ['crtm-proteccion-datos', 'comunidad-madrid-dpd'], 'El consorci publica el correu del seu delegat de protecció de dades, que també consta a la llista de delegats de la Comunitat.', {
      contact: 'crtm_protecciondatos@madrid.org',
    }),
    offlineAlternative: f('yes', 'official', ['tarjeta-transporte-crtm-app'], 'El consorci diu que l’aplicació carrega títols «en las mismas condiciones que cualquier otra red de distribución (Metro, estancos, etc.)»: la recàrrega presencial continua disponible.'),
    accessibilityStatement: f('no', 'official', ['crtm-accessibilitat'], 'El consorci publica la declaració d’accessibilitat del portal web (preparada el maig del 2025 i revisada el setembre del 2025), que es declara «no conforme» amb el Reial decret 1112/2018 i que no esmenta l’aplicació mòbil.', {
      url: 'https://www.crtm.es/accesibilidad',
    }),
    mandatoryRetention: unknown('La clàusula no fixa terminis de conservació i no hem trobat cap norma que obligui a conservar les dades de la targeta de transport.'),
  },
  dataSummary:
    'L’aplicació en si revela poc, però la targeta de transport personal està vinculada a nom, adreça i telèfon als sistemes del consorci, i les recàrregues diuen quin títol es fa servir i amb quina freqüència.',
  dataCollection: [
    row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['tarjeta-transporte-crtm-app'], note: 'El consorci diu que només recull el model de telèfon i la versió del sistema operatiu.' }),
    row('dades-de-pagament', 'yes', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tarjeta-transporte-instruccions-ios', 'tarjeta-transporte-faq-ios'], note: 'Cal registrar una targeta Visa o Mastercard, que es pot esborrar després de cada compra. No consta quina passarel·la de pagament s’utilitza.' }),
    row('historial-de-compres', 'yes', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['tarjeta-transporte-ciberataque-2023'], note: 'Les vendes de títols es registren als sistemes del consorci; van ser part de la informació extreta el 2023.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['tarjeta-transporte-crtm-app'], note: 'Número de la targeta de transport llegit per NFC.' }),
  ],
  tracking: madridNoTracking('tarjeta-transporte-app-store'),
  dataUses: {
    ...publicNoAds('crtm-proteccion-datos'),
    profiling: unknown('La informació del consorci no en parla.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['crtm-proteccion-datos'], 'Sense cessions llevat d’obligació legal (jutjats, fiscalia, Defensor del Poble). El pagament passa necessàriament per entitats bancàries.'),
    intraGroupSharing: unknown(),
    dataBrokerSales: f('no', 'official', ['crtm-proteccion-datos']),
    internationalTransfers: f('no', 'official', ['crtm-proteccion-datos'], 'El consorci declara que no fa transferències internacionals.', { mechanism: 'none' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown(),
  },
  retention: {
    definedPeriods: unknown('La pàgina de protecció de dades remet al registre d’activitats de tractament de la Conselleria sense terminis concrets.'),
    dataAfterDeletion: unknown(),
  },
  accountDeletion: {
    possible: na('L’aplicació no té compte propi documentat; les targetes bancàries s’esborren lliscant cap a l’esquerra.'),
    selfService: na('No hi ha compte propi documentat.'),
    difficulty: 'unknown',
    steps: [
      'Obre l’aplicació i ves a la llista de targetes bancàries registrades.',
      'Llisca cap a l’esquerra sobre la targeta i confirma’n l’eliminació.',
    ],
    dataRetained: 'Les dades de la targeta de transport personal i de les vendes queden als sistemes del consorci.',
    sources: ['tarjeta-transporte-instruccions-ios', 'tarjeta-transporte-faq-ios'],
  },
  userRights: {
    dataExport: unknown(),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['crtm-proteccion-datos'], 'Per correu al delegat de protecció de dades, per registre electrònic o presencialment.', {
      url: 'mailto:crtm_protecciondatos@madrid.org',
    }),
  },
  controls: {
    adPersonalizationOptOut: noAdsControl,
    telemetryOptOut: unknown(),
    granularControls: f('partial', 'official', ['tarjeta-transporte-faq-ios'], 'No cal deixar la targeta bancària desada un cop feta la recàrrega.'),
    defaultPosture: 'unknown',
    darkPatterns: unknown(),
  },
  security: {
    e2ee: na('No transporta comunicacions entre persones.'),
    transportEncryption: unknown(),
    atRestEncryption: unknown(),
    mfa: na('No hi ha inici de sessió documentat; la verificació dels pagaments la fa cada banc.'),
    ...unknownPublicSecurity,
  },
  review: {
    researchStatus: 'initial',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'L’incident de 2023 afecta la base de dades de titulars de la targeta, no l’aplicació. L’associem a la fitxa perquè és el mateix responsable i les mateixes dades que l’aplicació fa servir.',
    openQuestions: [
      'Quina passarel·la de pagament desa les targetes bancàries i qui n’és el responsable?',
      'Quantes persones van quedar afectades per l’atac de 2023?',
    ],
  },
}

/* ═══════════════════════ EMT Madrid ═══════════════════════ */
const emtMadrid: AppSeed = {
  slug: 'emt-madrid',
  name: 'EMT Madrid',
  company: 'emt-madrid',
  categories: ['mobilitat-i-transport'],
  tagline: 'Temps d’arribada dels autobusos de Madrid, amb compte mPass opcional i conservació de sis anys',
  summary:
    'L’aplicació d’EMT dona informació de línies, parades i temps d’arribada, i amb un compte mPass permet rebre avisos de les línies que es fan servir. La política és curta i concreta: dades identificatives, geolocalització i dades de reclamacions, sense transferències fora de l’Espai Econòmic Europeu. Les dades d’ús s’anonimitzen i es conserven sis anys més després de deixar de ser persona usuària.',
  platforms: ['ios', 'android'],
  businessModel: 'public-service',
  jurisdiction: 'Espanya (Ajuntament de Madrid)',
  links: {
    website: 'https://www.emtmadrid.es/',
    privacyPolicy: 'https://www.emtmadrid.es/PoliticaPrivacidadEMTBus',
    appStore: appStore('332237215'),
  },
  accountRequired: f('partial', 'official', ['emt-madrid-privacy-policy'], 'La consulta de línies i parades és lliure; els avisos personalitzats requereixen un compte mPass.'),
  openSource: unknown('No hem trobat el codi publicat.'),
  publicService: {
    isPublicService: true,
    administrationLevel: 'local',
    legalBasis: f('partial', 'official', ['emt-madrid-privacy-policy'], 'La política legitima el tractament en el consentiment de la persona i, per a l’anonimització de les dades d’ús, en l’interès legítim d’EMT; no cita cap norma que empari la prestació del servei públic.'),
    processingRegistry: unknown('No hem trobat publicat el registre d’activitats de tractament d’EMT ni cap entrada identificable d’aquesta aplicació al de l’Ajuntament de Madrid.'),
    dpia: unknown('No hem trobat publicada cap avaluació d’impacte relativa a la protecció de dades.'),
    ensConformity: unknown('EMT és una societat mercantil municipal; no hem trobat cap declaració de conformitat amb l’Esquema Nacional de Seguretat dels seus sistemes.'),
    dpo: f('yes', 'official', ['emt-madrid-privacy-policy'], 'La política identifica el delegat de protecció de dades d’EMT amb correu electrònic i adreça postal.', {
      contact: 'dpd@emtmadrid.es',
    }),
    offlineAlternative: f('yes', 'editorial', ['emt-madrid-privacy-policy'], 'Interpretació pròpia: l’aplicació és informativa i la política diu que la consulta de línies i parades no necessita compte; el servei d’autobús es pot fer servir sense instal·lar-la, amb la informació de les marquesines i el telèfon d’atenció.'),
    accessibilityStatement: unknown('No hem trobat cap declaració d’accessibilitat del Reial decret 1112/2018 al web d’EMT: el peu de pàgina només enllaça l’avís legal, la privadesa i una pàgina de responsabilitat social sobre l’accessibilitat dels vehicles.'),
    mandatoryRetention: f('no', 'official', ['emt-madrid-privacy-policy'], 'La política només preveu conservar les dades mentre duri la condició de persona usuària més un màxim de sis anys per a possibles responsabilitats; no invoca cap obligació legal de conservació que impedeixi esborrar el compte.'),
  },
  dataSummary:
    'Les parades i línies preferides i els avisos d’arribada mostren els desplaçaments habituals: on viu i on treballa la persona i a quina hora es mou.',
  dataCollection: [
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['emt-madrid-privacy-policy', 'emt-madrid-app-store'] }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['emt-madrid-privacy-policy', 'emt-madrid-app-store'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['emt-madrid-privacy-policy', 'emt-madrid-app-store'] }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['atencio-a-lusuari'], sources: ['emt-madrid-privacy-policy'], note: 'La política esmenta el DNI entre les dades identificatives.' }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['emt-madrid-app-store'] }),
    row('ubicacio-aproximada', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['emt-madrid-privacy-policy', 'emt-madrid-app-store'], note: 'Només si s’hi dona permís; la base jurídica declarada és el consentiment.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['emt-madrid-privacy-policy'], note: 'EMT diu que anonimitza les dades d’ús per millorar el servei.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['emt-madrid-app-store'] }),
  ],
  tracking: madridNoTracking('emt-madrid-app-store'),
  dataUses: {
    ...publicNoAds('emt-madrid-privacy-policy'),
    profiling: f('partial', 'official', ['emt-madrid-mpass-privacy'], 'El compte mPass preveu un perfil de mobilitat per adaptar serveis i avisos, només amb consentiment exprés.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['emt-madrid-privacy-policy'], 'Només proveïdors tecnològics que actuen per compte d’EMT i comunicacions per obligació legal.'),
    intraGroupSharing: f('partial', 'official', ['emt-madrid-mpass-privacy'], 'El compte mPass és comú a diversos serveis municipals de mobilitat (BiciMAD, aparcaments) i els seus operadors reben les dades quan la persona s’hi dona d’alta.'),
    dataBrokerSales: f('no', 'official', ['emt-madrid-privacy-policy']),
    internationalTransfers: f('no', 'official', ['emt-madrid-privacy-policy'], 'Sense transferències fora de l’Espai Econòmic Europeu.', { mechanism: 'none' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown(),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['emt-madrid-privacy-policy'], 'Mentre es manté la condició de persona usuària i fins a sis anys més.'),
    dataAfterDeletion: f('partial', 'official', ['emt-madrid-mpass-privacy'], 'Després de la baixa les dades queden bloquejades fins a sis anys pel termini de prescripció d’accions legals.'),
    periods: [
      { period: 'Durada de la relació més un màxim de sis anys', sources: ['emt-madrid-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['emt-madrid-privacy-policy', 'emt-madrid-mpass-privacy'], 'Es pot exercir el dret de supressió i tramitar la baixa del compte mPass.'),
    selfService: unknown('No hem pogut verificar si la baixa del compte mPass es pot fer des de l’aplicació d’EMT o cal escriure a protecció de dades.'),
    difficulty: 'unknown',
    steps: [
      'Escriu a proteccion.datos@emtmadrid.es demanant la supressió de les dades i la baixa del compte mPass.',
      'Com a alternativa, envia una carta a EMT, Calle Cerro de la Plata 4, 28007 Madrid.',
    ],
    dataRetained: 'Les dades del compte i dels pagaments queden bloquejades fins a sis anys.',
    sources: ['emt-madrid-privacy-policy', 'emt-madrid-mpass-privacy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['emt-madrid-privacy-policy'], 'Es reconeixen l’accés i la portabilitat, però per sol·licitud, no amb una eina.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['emt-madrid-privacy-policy'], 'Per correu a proteccion.datos@emtmadrid.es o per carta; delegat de protecció de dades a dpd@emtmadrid.es.', {
      url: 'mailto:proteccion.datos@emtmadrid.es',
    }),
  },
  controls: {
    adPersonalizationOptOut: noAdsControl,
    telemetryOptOut: unknown(),
    granularControls: f('partial', 'official', ['emt-madrid-privacy-policy', 'emt-madrid-mpass-privacy'], 'La geolocalització es basa en el permís del dispositiu, i el màrqueting i el perfil de mobilitat de mPass requereixen consentiment separat.'),
    defaultPosture: 'protective',
    darkPatterns: unknown(),
  },
  security: {
    e2ee: na('No transporta comunicacions entre persones.'),
    transportEncryption: unknown(),
    atRestEncryption: unknown(),
    mfa: unknown('La política de mPass esmenta verificacions per SMS, però no hem trobat si hi ha verificació en dos passos a l’inici de sessió.'),
    ...unknownPublicSecurity,
  },
  review: {
    researchStatus: 'initial',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'L’atac de 2019 a les estacions de BiciMAD es registra a la fitxa de BiciMAD, que és el servei afectat.',
    openQuestions: ['Es pot donar de baixa el compte mPass des de l’aplicació d’EMT?'],
  },
}

/* ═══════════════════════ BiciMAD ═══════════════════════ */
const bicimad: AppSeed = {
  slug: 'bicimad',
  name: 'BiciMAD',
  company: 'ayuntamiento-de-madrid',
  categories: ['mobilitat-i-transport'],
  tagline: 'Bicicleta pública de Madrid amb GPS que no es pot desconnectar i mapatge de cada trajecte',
  summary:
    'BiciMAD és un servei de l’Ajuntament de Madrid que gestiona EMT com a encarregada del tractament. El registre demana DNI, data de naixement, adreça i dades bancàries a través del compte mPass. La política diu que el GPS de la bicicleta no es pot desconnectar i que serveix per fer un mapatge dels trajectes de cada persona. El 2019 un atac a diverses estacions va exposar noms i saldos de persones usuàries.',
  platforms: ['ios', 'android'],
  businessModel: 'public-service',
  jurisdiction: 'Espanya (Ajuntament de Madrid)',
  links: {
    website: 'https://www.bicimad.com/',
    privacyPolicy: 'https://www.emtmadrid.es/PoliticaPrivacidadBiciMAD',
    terms: 'https://www.bicimad.com/sites/default/files/2023-03/T%C3%A9rminos%20y%20condiciones%20bicimad.pdf',
    appStore: appStore('1263402487'),
  },
  accountRequired: f('yes', 'official', ['bicimad-privacy-policy'], 'Cal registrar-se amb dades identificatives i donar-se d’alta a mPass, obligatori per als pagaments.'),
  openSource: unknown('No hem trobat el codi publicat.'),
  publicService: {
    isPublicService: true,
    administrationLevel: 'local',
    legalBasis: f('partial', 'official', ['bicimad-privacy-policy'], 'La política legitima el tractament en la relació contractual o precontractual (article 6.1.b del RGPD), però no cita cap norma del servei públic de bicicleta ni l’ordenança que l’empara.', {
      norm: 'RGPD, article 6.1.b',
    }),
    processingRegistry: unknown('No hem localitzat al registre d’activitats de tractament de l’Ajuntament de Madrid cap entrada identificable del servei BiciMAD.'),
    dpia: unknown('No hem trobat publicada cap avaluació d’impacte, tot i que el GPS de la bicicleta fa un mapatge dels trajectes de cada persona.'),
    ensConformity: unknown('No hem trobat cap declaració ni certificació de conformitat amb l’Esquema Nacional de Seguretat d’aquest servei.'),
    dpo: f('yes', 'official', ['bicimad-privacy-policy'], 'La política identifica l’Oficina de Protecció de Dades de l’Ajuntament de Madrid amb correu electrònic i adreça postal.', {
      contact: 'oficprotecciondatos@madrid.es',
    }),
    offlineAlternative: f('yes', 'official', ['bicimad-servei'], 'El servei es pot fer servir sense l’aplicació: amb la targeta vinculada passada per la base o pel candau de la bicicleta.'),
    accessibilityStatement: unknown('El web de BiciMAD no enllaça cap declaració d’accessibilitat i no n’hem trobat cap que cobreixi l’aplicació.'),
    mandatoryRetention: f('no', 'official', ['bicimad-privacy-policy'], 'La política preveu conservar les dades durant la relació contractual i mantenir-les bloquejades un màxim de sis anys per a possibles responsabilitats; no invoca cap obligació legal de conservació que impedeixi donar de baixa el compte.'),
  },
  dataSummary:
    'El mapatge dels trajectes, lligat al DNI i al compte bancari, mostra rutines diàries amb molta precisió: d’on surt i on arriba cada persona i a quina hora. En els comptes de menors, a més, queda vinculat qui en té la tutela.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bicimad-privacy-policy', 'bicimad-app-store'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bicimad-privacy-policy'], note: 'DNI o NIF.' }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bicimad-privacy-policy'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['bicimad-privacy-policy', 'bicimad-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bicimad-privacy-policy', 'bicimad-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bicimad-privacy-policy', 'bicimad-app-store'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['bicimad-privacy-policy'], note: 'Dades bancàries gestionades per EMT a través de mPass i comunicades a bancs per cobrar.' }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['bicimad-privacy-policy'], note: 'El GPS de la bicicleta registra els trajectes i no es pot desconnectar.' }),
    row('ubicacio-aproximada', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bicimad-privacy-policy', 'bicimad-app-store'], note: 'La ubicació del mòbil per mostrar bicicletes properes.' }),
    row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bicimad-privacy-policy'], note: 'Número de la targeta de transport públic si s’hi vincula.' }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['atencio-a-lusuari'], sources: ['bicimad-privacy-policy'], note: 'Només en reclamacions per accidents o lesions.' }),
    row('situacio-familiar', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bicimad-privacy-policy'], note: 'Tutela dels comptes de menors per part de progenitors.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['bicimad-app-store'] }),
  ],
  tracking: madridNoTracking('bicimad-app-store'),
  dataUses: {
    ...publicNoAds('bicimad-privacy-policy'),
    profiling: f('partial', 'official', ['bicimad-privacy-policy'], 'No hi ha perfilat publicitari, però sí mapatge individual dels trajectes i estadístiques agregades anònimes per a dades obertes.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['bicimad-privacy-policy'], 'EMT i les seves subcontractades com a encarregades, bancs per als cobraments, i forces de seguretat i jutjats quan ho exigeix la llei.'),
    intraGroupSharing: f('yes', 'official', ['bicimad-privacy-policy', 'emt-madrid-mpass-privacy'], 'L’Ajuntament és el responsable i EMT, empresa municipal, hi accedeix com a encarregada i gestiona el compte mPass.'),
    dataBrokerSales: f('no', 'official', ['bicimad-privacy-policy']),
    internationalTransfers: f('no', 'official', ['bicimad-privacy-policy'], 'Sense transferències fora de l’Espai Econòmic Europeu.', { mechanism: 'none' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown(),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['bicimad-privacy-policy'], 'Durant la relació contractual i, després, bloquejades fins a sis anys; no hi ha un termini específic per als trajectes.'),
    dataAfterDeletion: f('partial', 'official', ['bicimad-privacy-policy'], 'Les dades es conserven bloquejades fins a sis anys després de la baixa.'),
    periods: [{ period: 'Bloqueig fins a sis anys després de finalitzar la relació', sources: ['bicimad-privacy-policy'] }],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['bicimad-terms']),
    selfService: f('yes', 'official', ['bicimad-terms'], 'Les condicions diuen que la baixa es fa a l’àrea d’usuari de l’aplicació.'),
    difficulty: 'medium',
    requiresSupportContact: false,
    steps: [
      'Obre l’aplicació de BiciMAD i entra a l’àrea d’usuari.',
      'Tria l’opció de baixa del sistema i confirma-la.',
      'Per esborrar també el compte mPass o exercir la supressió, escriu a protecció de dades d’EMT o a la seu electrònica de l’Ajuntament.',
    ],
    obstacles: 'La baixa no retorna el saldo ni els abonaments prepagats que no s’hagin fet servir.',
    dataRetained: 'Dades del compte, trajectes i pagaments bloquejats fins a sis anys.',
    sources: ['bicimad-terms', 'bicimad-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['bicimad-privacy-policy'], 'La portabilitat es reconeix, però per sol·licitud.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['bicimad-privacy-policy'], 'Presencialment o a la seu electrònica de l’Ajuntament; delegat de protecció de dades a oficprotecciondatos@madrid.es.', {
      url: 'https://sede.madrid.es/',
    }),
  },
  controls: {
    adPersonalizationOptOut: noAdsControl,
    telemetryOptOut: f('no', 'official', ['bicimad-privacy-policy'], 'La geolocalització de la bicicleta no es pot desconnectar.'),
    granularControls: f('partial', 'official', ['bicimad-privacy-policy'], 'La ubicació del mòbil depèn del permís del dispositiu; la de la bicicleta no.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown(),
  },
  security: {
    e2ee: na('No transporta comunicacions entre persones.'),
    transportEncryption: unknown(),
    atRestEncryption: unknown(),
    mfa: unknown('No hem trobat si el compte mPass admet verificació en dos passos.'),
    ...unknownPublicSecurity,
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'L’aplicació la publica EMT, però el responsable del tractament és l’Ajuntament de Madrid; per això la fitxa penja de l’Ajuntament. La política és clara sobre el mapatge de trajectes, cosa poc habitual.',
    openQuestions: ['Quant de temps es conserven els trajectes individuals i quan s’anonimitzen?'],
  },
}

/* ═══════════════════════════ Meta AI ═══════════════════════════ */
const metaAi: AppSeed = {
  slug: 'meta-ai',
  name: 'Meta AI',
  company: 'meta-platforms-ireland',
  categories: ['assistents-d-ia'],
  tagline: 'Assistent d’IA que recorda coses de tu, fa servir el teu perfil de Meta i pot revisar les converses amb persones',
  summary:
    'L’aplicació Meta AI, també companya de les ulleres de Meta, està pensada per «conèixer-te»: recorda detalls, fa servir el perfil i els interessos d’Instagram i Facebook si els comptes estan units i té un feed «Discover» per publicar converses. Les condicions europees avisen que Meta pot revisar les converses de manera automàtica o humana, que les comparteix amb cercadors associats i que esborrar-les no sempre esborra la còpia de Meta. El 2025 es van documentar publicacions de converses privades fetes sense adonar-se’n i una fallada que exposava les d’altres persones.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: {
    website: 'https://www.meta.ai/',
    privacyPolicy: 'https://www.facebook.com/privacy/policy/',
    terms: 'https://www.facebook.com/legal/eu-ai-terms',
    privacyCenter: 'https://www.facebook.com/privacy/genai/',
    appStore: appStore('1558240027'),
  },
  accountRequired: f('yes', 'official', ['meta-ai-app-launch-2025', 'meta-ai-discover-techcrunch-2025'], 'S’hi entra amb un compte de Meta, Facebook o Instagram; si s’entra amb Instagram, el perfil condiciona la visibilitat del que es publica.'),
  openSource: f('partial', 'official', ['meta-ai-app-launch-2025'], 'Funciona amb Llama 4, un model amb pesos publicats sota llicència pròpia de Meta; l’aplicació i el servei són privatius.', {
    licence: 'Privativa (models Llama amb llicència comunitària de Meta)',
  }),
  dataSummary:
    'Les preguntes a un assistent sovint revelen preocupacions de salut, relacions, feina o finances. Meta hi afegeix la memòria de l’assistent, el perfil i els interessos dels altres productes del grup i la ubicació.',
  dataCollection: [
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia', 'moderacio-de-continguts'], sources: ['meta-ai-eu-terms', 'meta-ai-app-store'], note: 'Les indicacions i respostes; es poden revisar per persones i compartir amb cercadors associats.' }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['meta-ai-eu-terms', 'meta-ai-app-store'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['meta-ai-eu-terms', 'meta-ai-app-store'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts', 'elaboracio-de-perfils'], sources: ['meta-ai-help-chat', 'meta-ai-app-launch-2025'], note: 'Interessos deduïts de l’activitat als productes de Meta, inclosos els anuncis que es miren.' }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['meta-ai-help-chat', 'meta-ai-app-store'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts'], sources: ['meta-ai-help-chat'], note: 'L’edat i el gènere del perfil es fan servir per personalitzar les respostes.' }),
    row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts'], sources: ['meta-ai-help-chat'] }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['meta-ai-app-store'], note: 'L’etiqueta declara dades de salut i forma física, i també «dades sensibles».' }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'prestacio-del-servei'], sources: ['meta-ai-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['meta-ai-app-store'] }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['meta-ai-app-store'] }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['meta-ai-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['meta-ai-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'millora-del-producte'], sources: ['meta-ai-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['meta-ai-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['meta-ai-app-store'], metaLabelNote),
    advertisingIdentifiers: f('partial', 'official', ['meta-ai-app-store'], 'L’etiqueta declara identificadors de dispositiu i dades de publicitat per a publicitat de tercers.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['meta-ai-help-chat', 'meta-ai-ads-personalization-2025'], 'Des del 16 de desembre de 2025 Meta fa servir les interaccions amb la IA per personalitzar continguts i anuncis «a la majoria de regions»; l’ajuda diu que depèn de la regió i no hem pogut confirmar si s’aplica a l’Espai Econòmic Europeu. Meta diu que no fa servir temes sensibles per als anuncis.'),
    profiling: f('yes', 'official', ['meta-ai-help-chat', 'meta-ai-app-launch-2025'], 'Personalització basada en la memòria de l’assistent, el perfil, els interessos i l’activitat a tots els productes del Centre de comptes.'),
    aiTraining: f('yes', 'regulator', ['meta-ai-eu-terms', 'dpc-meta-ai-2025'], 'Meta fa servir les interaccions amb les IA per millorar la IA de Meta. Es pot presentar una objecció.', {
      optOutUrl: 'https://www.facebook.com/privacy/genai',
    }),
  },
  sharing: {
    ...metaSharing,
    thirdPartySharing: f('yes', 'official', ['meta-ai-eu-terms', 'meta-ai-help-chat'], 'Meta comparteix els missatges enviats a la IA i informació general com la regió amb socis seleccionats, com cercadors, quan la IA no pot respondre sola; també hi pot haver proveïdors externs que revisen contingut.'),
  },
  transparency: { policyClarity: 'low', ...metaTransparency },
  retention: {
    definedPeriods: f('no', 'official', ['meta-ai-eu-terms'], 'Les condicions no fixen terminis per a les converses.'),
    dataAfterDeletion: f('partial', 'official', ['meta-ai-eu-terms'], 'Les condicions avisen que esborrar missatges, fils o fins i tot el compte pot no esborrar la còpia de Meta, i remeten al Centre de privadesa.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['meta-ai-eu-terms', 'fb-delete-account', 'ig-delete-account']),
    selfService: f('partial', 'official', ['meta-ai-eu-terms', 'fb-delete-account'], 'Si s’entra amb Facebook o Instagram, el compte és el d’aquests serveis i s’elimina des del Centre de comptes; les condicions avisen que esborrar converses no garanteix esborrar la còpia de Meta.'),
    difficulty: 'medium',
    waitingPeriodDays: 30,
    requiresSupportContact: false,
    steps: [
      'Esborra les converses des de l’historial de l’aplicació, sabent que això no garanteix que Meta n’esborri la còpia.',
      'Per eliminar el compte, entra al Centre de comptes, a Dades personals i després a Propietat i control del compte.',
      'Tria «Desactivació o eliminació», selecciona el compte i tria «Eliminar el compte».',
      'No tornis a iniciar sessió durant els 30 dies de període de gràcia.',
    ],
    obstacles: 'Si el compte és el de Facebook o Instagram, eliminar-lo per sortir de Meta AI implica perdre també aquests serveis.',
    dataRetained: 'Les condicions reconeixen que Meta pot conservar la seva còpia de les interaccions encara que s’esborrin les converses o el compte.',
    sources: ['meta-ai-eu-terms', 'fb-delete-account'],
  },
  userRights: metaRights,
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['meta-privacy-center'], 'Es poden limitar alguns usos als ajustos d’anuncis del Centre de comptes, però no desactivar la personalització del tot sense pagar la subscripció dels serveis de Meta.'),
    telemetryOptOut: f('no', 'official', ['meta-privacy-policy']),
    granularControls: f('partial', 'official', ['meta-ai-app-launch-2025', 'meta-ai-eu-terms'], 'Hi ha memòria editable i objecció a l’entrenament, però els controls són repartits entre l’aplicació, el Centre de comptes i el Centre de privadesa.'),
    defaultPosture: 'permissive',
    darkPatterns: f('yes', 'press', ['meta-ai-discover-techcrunch-2025'], 'El botó de compartir publicava converses al feed «Discover» sense deixar clar on ni amb quina visibilitat.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'high',
        description:
          'El 2025 moltes persones van publicar converses privades amb l’assistent, amb dades de salut o legals, perquè l’aplicació no indicava clarament que el botó de compartir les feia públiques.',
        sources: ['meta-ai-discover-techcrunch-2025'],
      },
    ],
  },
  security: {
    ...metaSecurityBase,
    e2ee: f('no', 'official', ['meta-ai-eu-terms'], 'Meta pot llegir i revisar les converses. El «Private Processing» que esmenten les condicions s’aplica a xats concrets, com els de WhatsApp, no a l’aplicació en general.', { scope: 'none' }),
  },
  alternatives: [
    {
      app: 'claude',
      comparability: 'partial',
      rationale:
        'Assistent conversacional que no forma part d’un grup publicitari ni es connecta amb perfils de xarxes socials per personalitzar respostes.',
      tradeOffs: 'No fa de companya de les ulleres de Meta i també tracta les converses als seus servidors.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'L’etiqueta de l’App Store és gairebé idèntica a la de Messenger i Threads: Meta declara el mateix catàleg de dades per a totes les aplicacions, cosa que en redueix el valor informatiu. Les condicions europees són la font més útil perquè reconeixen la revisió humana i la conservació de còpies.',
    openQuestions: [
      'S’aplica a l’Espai Econòmic Europeu l’ús de les converses amb la IA per personalitzar anuncis anunciat per al desembre de 2025?',
      'Durant quant de temps conserva Meta les converses i la memòria de l’assistent?',
    ],
  },
}

/* ═══════════════════════════ Threads ═══════════════════════════ */
const threads: AppSeed = {
  slug: 'threads',
  name: 'Threads',
  company: 'meta-platforms-ireland',
  categories: ['xarxes-socials'],
  tagline: 'Xarxa de text d’Instagram que comparteix perfil, política i publicitat amb la resta de Meta',
  summary:
    'Threads és la xarxa de missatges curts de Meta i funciona amb la política de privadesa comuna del grup, més una política complementària. El nom, la foto i la presentació són sempre públics, fins i tot amb el perfil privat. La interoperabilitat amb el fedivers que preveu la política encara no està activa a Europa. Eliminar el perfil triga 30 dies i el procés pot allargar-se fins a 90 dies, amb còpies de seguretat conservades més temps.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: {
    website: 'https://www.threads.com/',
    privacyPolicy: 'https://help.instagram.com/515230437301944',
    privacyCenter: 'https://accountscenter.instagram.com/',
    appStore: appStore('6446901002'),
  },
  accountRequired: f('yes', 'official', ['threads-supplemental-privacy', 'threads-delete-account'], 'Cal un perfil de Threads, que es crea a partir del compte d’Instagram.'),
  openSource: f('no', 'official', ['meta-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Threads recull el que es publica, què es mira i durant quant de temps, a qui se segueix i quins hashtags es fan servir, i ho pot unir amb l’activitat d’Instagram i Facebook al Centre de comptes. En una xarxa de conversa, les publicacions sovint expressen opinions sobre política, religió o salut.',
  dataCollection: [
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['threads-supplemental-privacy'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['threads-supplemental-privacy'], note: 'El nom i el nom d’usuari són públics fins i tot amb el perfil privat.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['threads-supplemental-privacy'] }),
    row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia', 'recomanacions-algoritmiques'], sources: ['threads-supplemental-privacy', 'dpc-meta-ai-2025'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['threads-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'recomanacions-algoritmiques', 'elaboracio-de-perfils'], sources: ['threads-supplemental-privacy', 'threads-app-store'], note: 'Inclou quins continguts es miren, com s’hi interactua i la durada de l’activitat.' }),
    row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['threads-supplemental-privacy'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['meta-privacy-policy'] }),
    row('conviccions-i-opinions', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['threads-supplemental-privacy'], level: 'editorial', note: 'No es demanen, però les publicacions en una xarxa de conversa les revelen sovint.' }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['threads-app-store'] }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['threads-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['threads-app-store'] }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['threads-app-store'] }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['threads-app-store'], note: 'L’etiqueta declara salut i forma física i «dades sensibles», comunes a totes les aplicacions de Meta.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['threads-app-store'] }),
    row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['threads-supplemental-privacy'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['threads-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['threads-app-store'], metaLabelNote),
    advertisingIdentifiers: f('partial', 'official', ['threads-app-store'], 'L’etiqueta declara identificadors i dades de publicitat per a publicitat de tercers.'),
    thirdPartyTrackersPresent: unknown(),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['threads-supplemental-privacy', 'meta-privacy-policy'], 'La política preveu personalitzar els anuncis «si te los mostramos», amb la infraestructura publicitària comuna de Meta.'),
    profiling: f('yes', 'official', ['threads-supplemental-privacy', 'meta-privacy-policy']),
    aiTraining: f('yes', 'regulator', ['dpc-meta-ai-2025'], 'El contingut públic dels adults europeus als productes de Meta es fa servir per entrenar models des del maig de 2025, amb dret d’oposició.', {
      optOutUrl: 'https://www.facebook.com/privacy/genai',
    }),
  },
  sharing: {
    ...metaSharing,
    thirdPartySharing: f('yes', 'official', ['threads-supplemental-privacy', 'meta-privacy-policy'], 'A més de la compartició comuna de Meta, la política preveu enviar publicacions i perfils a servidors del fedivers; a Europa aquesta interoperabilitat encara no està activa.'),
    intraGroupSharing: f('yes', 'official', ['threads-supplemental-privacy'], 'Threads es pot afegir al Centre de comptes i el contingut públic pot aparèixer a Facebook.'),
  },
  transparency: { policyClarity: 'medium', ...metaTransparency },
  retention: {
    definedPeriods: f('partial', 'official', ['threads-supplemental-privacy', 'threads-delete-account'], 'Criteri general «el temps necessari», amb terminis concrets només per a l’eliminació del perfil.'),
    dataAfterDeletion: f('partial', 'official', ['threads-delete-account'], 'L’eliminació es fa efectiva al cap de 30 dies i pot trigar fins a 90; Meta pot guardar còpies de seguretat més temps i conservar informació per qüestions legals.'),
    periods: [
      { period: '30 dies abans que l’eliminació sigui definitiva', sources: ['threads-delete-account'] },
      { period: 'Fins a 90 dies per completar l’eliminació, amb còpies de seguretat conservades més temps', sources: ['threads-delete-account'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['threads-delete-account']),
    selfService: f('yes', 'official', ['threads-delete-account'], 'Es fa des de l’aplicació i no elimina el compte d’Instagram ni el de Facebook.'),
    directUrl: 'https://help.instagram.com/313703828012423',
    difficulty: 'medium',
    waitingPeriodDays: 30,
    requiresSupportContact: false,
    steps: [
      'Obre Threads i toca el perfil a la part inferior dreta.',
      'Toca el menú de la part superior dreta i entra al Centre de comptes.',
      'Ves a Dades personals, Propietat i control del compte i Desactivació o eliminació.',
      'Tria el compte, toca «Eliminar compte», indica el motiu i continua.',
    ],
    obstacles:
      'La desactivació temporal s’ofereix com a alternativa i tornar a iniciar sessió dins dels 30 dies anul·la l’eliminació. Després cal esperar 90 dies per tornar a registrar-se amb el mateix compte d’Instagram.',
    dataRetained: 'Còpies de seguretat i informació conservada per qüestions legals o de prevenció de danys.',
    sources: ['threads-delete-account'],
  },
  userRights: metaRights,
  controls: {
    adPersonalizationOptOut: f('partial', 'regulator', ['meta-privacy-center', 'dpc-meta-ads-2023'], 'Es poden limitar algunes categories, però la personalització només es desactiva del tot amb la subscripció sense anuncis.'),
    telemetryOptOut: f('no', 'official', ['meta-privacy-policy']),
    granularControls: f('partial', 'official', ['threads-supplemental-privacy'], 'Perfil públic o privat i bloqueig de comptes; el nom, la foto i la presentació són sempre públics.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'official', ['threads-delete-account'], 'La desactivació temporal es presenta com a alternativa a l’eliminació.'),
    darkPatternList: [
      {
        type: 'hidden-exit',
        severity: 'medium',
        description: 'L’eliminació està quatre nivells per sota dins del Centre de comptes i tornar a entrar dins dels 30 dies l’anul·la.',
        sources: ['threads-delete-account'],
      },
    ],
  },
  security: {
    ...metaSecurityBase,
    e2ee: f('no', 'official', ['meta-privacy-policy'], 'No hem trobat que els missatges de Threads tinguin xifratge d’extrem a extrem.', { scope: 'none' }),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política complementària descriu la interoperabilitat amb el fedivers, però alhora diu que encara no s’aplica a Europa. No hem trobat sancions pròpies de Threads; els incidents del grup Meta són a les fitxes d’Instagram i Facebook.',
    openQuestions: ['Els missatges directes de Threads tenen o tindran xifratge d’extrem a extrem?'],
  },
}

/* ═══════════════════════════ Edits ═══════════════════════════ */
const edits: AppSeed = {
  slug: 'edits',
  name: 'Edits',
  company: 'meta-platforms-ireland',
  categories: ['edicio-de-foto-i-video'],
  tagline: 'Editor de vídeo d’Instagram: per esborrar-ne les dades d’ús cal eliminar el compte d’Instagram',
  summary:
    'Edits és l’editor de vídeo d’Instagram per crear reels. S’hi entra amb el compte d’Instagram i fa servir el perfil, els seguidors i el contingut amb què s’interactua. Segons l’ajuda de Meta, els vídeos es poden esborrar, però la resta d’informació sobre l’ús de l’eina només s’elimina eliminant el compte d’Instagram sencer. L’etiqueta de l’App Store declara dades per a publicitat de tercers.',
  platforms: ['ios', 'android'],
  businessModel: 'advertising',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: {
    website: 'https://help.instagram.com/1345978640113441',
    privacyPolicy: 'https://privacycenter.instagram.com/policy',
    appStore: appStore('6738967378'),
  },
  accountRequired: f('yes', 'official', ['edits-about'], 'S’hi entra amb el compte d’Instagram.'),
  openSource: f('no', 'official', ['meta-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Els vídeos en brut, els esborranys i els àudios sovint contenen rostres, veus i llocs que no s’acaben publicant. Edits els vincula al compte d’Instagram i a les estadístiques dels reels.',
  dataCollection: [
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['edits-app-store', 'edits-about'] }),
    row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['edits-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['edits-about'], note: 'L’identificador, el nom d’usuari i la foto del compte d’Instagram.' }),
    row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['edits-about'], note: 'Seguidors d’Instagram per a les estadístiques dels reels.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['edits-about', 'edits-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['edits-app-store'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['edits-app-store'] }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['edits-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'prestacio-del-servei'], sources: ['edits-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['edits-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['edits-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['edits-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['edits-app-store'], metaLabelNote),
    advertisingIdentifiers: f('partial', 'official', ['edits-app-store'], 'L’etiqueta declara identificadors d’usuari i de dispositiu per a publicitat de tercers.'),
    thirdPartyTrackersPresent: unknown(),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['edits-app-store', 'meta-privacy-policy'], 'Tot i que l’aplicació no mostra anuncis, l’etiqueta declara dades per a publicitat de tercers i per a màrqueting propi.'),
    profiling: f('yes', 'official', ['meta-privacy-policy', 'edits-about']),
    aiTraining: unknown('No hem trobat si els vídeos i esborranys d’Edits es fan servir per entrenar models.'),
  },
  sharing: metaSharing,
  transparency: { policyClarity: 'low', ...metaTransparency },
  retention: {
    definedPeriods: f('no', 'official', ['meta-privacy-policy'], 'No hi ha terminis propis per a Edits.'),
    dataAfterDeletion: f('partial', 'official', ['edits-delete'], 'Els vídeos es poden esborrar, però les dades sobre l’ús de l’eina es conserven mentre existeixi el compte d’Instagram.'),
  },
  accountDeletion: {
    possible: f('partial', 'official', ['edits-delete'], 'Edits no té compte propi: per eliminar la informació d’ús cal eliminar el compte d’Instagram.'),
    selfService: f('yes', 'official', ['edits-delete', 'ig-delete-account']),
    difficulty: 'hard',
    waitingPeriodDays: 30,
    requiresSupportContact: false,
    steps: [
      'Esborra els vídeos i esborranys des de la mateixa aplicació Edits.',
      'Per esborrar la resta d’informació, obre Instagram, ves al perfil i toca el menú.',
      'Entra al Centre de comptes, a Dades personals i a Propietat i control del compte.',
      'Tria «Desactivació o eliminació», selecciona el compte d’Instagram i elimina’l.',
    ],
    obstacles: 'No es pot deixar Edits sense perdre Instagram: la informació d’ús de l’eina va lligada al compte d’Instagram.',
    dataRetained: 'Mentre existeixi el compte d’Instagram, les dades d’ús d’Edits es conserven.',
    sources: ['edits-delete', 'ig-delete-account'],
  },
  userRights: metaRights,
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['meta-privacy-center'], 'Els ajustos d’anuncis són els del Centre de comptes de Meta.'),
    telemetryOptOut: f('no', 'official', ['meta-privacy-policy']),
    granularControls: unknown('No hem trobat controls de privadesa propis de l’aplicació.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', ['edits-delete'], 'Interpretació pròpia: lligar l’esborrat de les dades d’ús a l’eliminació del compte d’Instagram és una barrera de sortida desproporcionada.'),
    darkPatternList: [
      {
        type: 'hidden-exit',
        severity: 'medium',
        description: 'Per esborrar les dades d’ús d’Edits cal eliminar el compte d’Instagram sencer.',
        sources: ['edits-delete'],
      },
    ],
  },
  security: {
    ...metaSecurityBase,
    e2ee: na('És una eina d’edició, no un servei de comunicació.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'No hem trobat incidents propis d’Edits. L’aplicació ha incorporat un assistent d’IA que encara no està disponible per a tothom.',
    openQuestions: ['Els vídeos que no es publiquen s’envien als servidors de Meta o es queden al dispositiu?'],
  },
}

/* ═══════════════════════ WhatsApp Business ═══════════════════════ */
const whatsappBusiness: AppSeed = {
  slug: 'whatsapp-business',
  name: 'WhatsApp Business',
  company: 'whatsapp-ireland',
  categories: ['missatgeria'],
  tagline: 'WhatsApp per a negocis: xifrat d’extrem a extrem, però amb dades de l’empresa compartides amb Meta',
  summary:
    'WhatsApp Business és la versió per a petites empreses: perfil comercial, catàleg, respostes automàtiques i etiquetes de clients. Els missatges es xifren d’extrem a extrem com a WhatsApp, però les condicions per a empreses permeten compartir la informació del compte, l’ús i el diagnòstic amb la resta de Meta i transferir-la als Estats Units. L’etiqueta de l’App Store declara ubicació, identificador i dades d’ús per a publicitat de tercers, i des del 2026 hi ha anuncis a la pestanya de novetats també a Europa.',
  platforms: ['ios', 'android', 'web', 'windows', 'macos'],
  businessModel: 'freemium',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: {
    website: 'https://business.whatsapp.com/',
    privacyPolicy: 'https://www.whatsapp.com/legal/privacy-policy-eea',
    terms: 'https://www.whatsapp.com/legal/business-terms/',
    appStore: appStore('1386412985'),
  },
  accountRequired: f('yes', 'official', ['wa-privacy-policy-eea', 'whatsapp-business-terms'], 'Cal un número de telèfon i les dades de registre de l’empresa.'),
  openSource: f('no', 'official', ['wa-security'], 'Client privatiu; el protocol de xifratge està documentat.', { licence: 'Privativa' }),
  dataSummary:
    'L’empresa hi desa els telèfons dels seus clients, les etiquetes i el catàleg. El contingut va xifrat, però Meta sap amb quins clients parla cada negoci, amb quina freqüència i des d’on, i hi pot afegir informació d’altres fonts del grup.',
  dataCollection: [
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['wa-privacy-policy-eea', 'whatsapp-business-app-store'] }),
    row('llista-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['whatsapp-business-terms', 'whatsapp-business-app-store'], note: 'Els telèfons dels clients que l’empresa aporta; WhatsApp hi actua com a encarregat del tractament.' }),
    row('contingut-de-missatges', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['wa-security'], note: 'Xifrat d’extrem a extrem entre el negoci i el client.' }),
    row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['wa-privacy-policy-eea', 'whatsapp-business-terms'], note: 'WhatsApp ofereix a l’empresa mètriques agregades de missatges enviats, lliurats i llegits.' }),
    row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['whatsapp-business-terms'], note: 'Dades de registre i del perfil de l’empresa.' }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['whatsapp-business-app-store'] }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['whatsapp-business-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['whatsapp-business-app-store'] }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['whatsapp-business-app-store'] }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['whatsapp-business-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'prestacio-del-servei'], sources: ['whatsapp-business-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['whatsapp-business-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['whatsapp-business-app-store', 'whatsapp-business-terms'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['whatsapp-business-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['whatsapp-business-app-store'], metaLabelNote),
    advertisingIdentifiers: f('partial', 'official', ['whatsapp-business-app-store'], 'L’etiqueta declara l’identificador d’usuari i dades de publicitat per a publicitat de tercers, i l’identificador de dispositiu per a màrqueting propi.'),
    thirdPartyTrackersPresent: unknown(),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'press', ['whatsapp-business-ads-eu-2026', 'whatsapp-business-app-store'], 'Des del març de 2026 hi ha canals promocionats i anuncis als estats de la pestanya de novetats també a Europa; els xats continuen sense anuncis.'),
    profiling: f('partial', 'official', ['whatsapp-business-terms'], 'Meta fa servir la informació del compte i d’ús per personalitzar i comercialitzar els seus serveis i els de la resta del grup.'),
    aiTraining: f('partial', 'official', ['wa-privacy-policy-eea'], 'Els missatges xifrats no es poden fer servir; les interaccions amb Meta AI dins de l’aplicació sí que surten del xifratge.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['wa-privacy-policy-eea', 'whatsapp-business-terms'], 'Proveïdors de serveis, proveïdors que l’empresa triï per gestionar les comunicacions, i autoritats.'),
    intraGroupSharing: f('yes', 'official', ['whatsapp-business-terms'], 'Les condicions permeten compartir la informació del compte, d’ús, de diagnòstic i de suport amb les altres empreses de Meta per desenvolupar i comercialitzar els seus productes.'),
    dataBrokerSales: f('no', 'official', ['wa-privacy-policy-eea']),
    internationalTransfers: f('yes', 'official', ['whatsapp-business-terms'], 'L’empresa accepta la transferència de la informació als Estats Units i a altres països.', { mechanism: 'adequacy' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: f('yes', 'official', ['meta-transparency-center'], 'Informe conjunt de Meta.', { url: 'https://transparency.meta.com/' }),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['wa-manage-info'], 'Terminis concrets per a l’eliminació, no per a totes les categories.'),
    dataAfterDeletion: f('partial', 'official', ['wa-manage-info'], 'Fins a 90 dies per esborrar la informació dels sistemes; els missatges es conserven als dispositius dels clients.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['wa-delete-account']),
    selfService: f('yes', 'official', ['wa-delete-account'], 'El procés de WhatsApp es fa des de la configuració del compte; no hem trobat una pàgina específica per a WhatsApp Business.'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Obre l’aplicació i ves a Configuració.',
      'Entra a Compte i tria «Elimina el meu compte».',
      'Introdueix el número de telèfon amb el prefix del país i confirma.',
    ],
    dataRetained: 'Els missatges enviats es conserven als dispositius dels clients; els registres poden trigar fins a 90 dies a desaparèixer.',
    sources: ['wa-delete-account', 'wa-manage-info'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['wa-manage-info'], 'Informe del compte des de l’aplicació.'),
    exportFormatQuality: 'mixed',
    rightsExercise: f('yes', 'official', ['wa-manage-info'], undefined, { url: 'https://www.whatsapp.com/contact/', responseTimeDays: 30 }),
  },
  controls: {
    adPersonalizationOptOut: unknown('No hem pogut verificar quins controls d’anuncis ofereix la pestanya de novetats a Europa.'),
    telemetryOptOut: f('no', 'official', ['wa-privacy-policy-eea']),
    granularControls: f('partial', 'official', ['wa-privacy-policy-eea'], 'Controls de visibilitat del perfil i dels estats, no de recollida de dades.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown(),
  },
  security: {
    e2ee: f('yes', 'official', ['wa-security'], 'Missatges i trucades xifrats d’extrem a extrem per defecte. Quan l’empresa fa servir un proveïdor o l’allotjament de Meta per gestionar els missatges, el client s’hauria de considerar fora de l’extrem a extrem.', {
      scope: 'metadata-excluded',
      protocol: 'Signal Protocol',
    }),
    transportEncryption: f('yes', 'official', ['wa-security']),
    atRestEncryption: f('yes', 'official', ['wa-backups-whitepaper'], 'Còpies de seguretat xifrades opcionals.'),
    mfa: f('yes', 'official', ['wa-security'], 'Verificació en dos passos amb PIN de sis dígits.', { methods: ['app-push'] }),
    independentAudits: unknown('No hi ha auditories publicades de la implementació.'),
    bugBounty: f('yes', 'official', ['wa-security'], 'Cobert pel programa de recompenses de Meta.', { url: 'https://www.facebook.com/whitehat' }),
    vulnerabilityDisclosure: f('yes', 'official', ['wa-security']),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'L’etiqueta de l’App Store de WhatsApp Business declara dades per a publicitat de tercers, cosa que no apareix a la política de WhatsApp. La sanció de 2021 per manca de transparència és a la fitxa de WhatsApp.',
    openQuestions: [
      'Quines dades de WhatsApp Business es fan servir per als anuncis de la pestanya de novetats a Europa?',
      'La font sobre els anuncis a Europa és periodística: cal confirmar-la amb un comunicat oficial.',
    ],
  },
}

/* ═══════════════════════════ Messenger ═══════════════════════════ */
const messenger: AppSeed = {
  slug: 'messenger',
  name: 'Messenger',
  company: 'meta-platforms-ireland',
  categories: ['missatgeria'],
  tagline: 'Missatgeria de Meta xifrada per defecte des del 2023, però amb l’etiqueta de dades de tot el grup',
  summary:
    'Des de desembre de 2023 els xats personals i les trucades de Messenger van xifrats d’extrem a extrem per defecte, amb el protocol Labyrinth de Meta. L’aplicació continua lligada a la infraestructura de Meta, i l’etiqueta de l’App Store declara pràcticament tots els tipus de dades per a publicitat de tercers. A l’Espai Econòmic Europeu, per la Llei de mercats digitals, es pot fer servir amb un compte de Messenger separat de Facebook.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: {
    website: 'https://www.messenger.com/',
    privacyPolicy: 'https://www.facebook.com/privacy/policy/',
    privacyCenter: 'https://www.facebook.com/privacy/center/',
    appStore: appStore('454638411'),
  },
  accountRequired: f('yes', 'official', ['messenger-without-facebook'], 'Cal un compte de Facebook, que es pot desactivar mantenint Messenger; a l’Espai Econòmic Europeu també es pot crear un compte de Messenger separat.'),
  openSource: f('no', 'official', ['meta-privacy-policy'], 'Client privatiu; el protocol Labyrinth està descrit en documents tècnics.', { licence: 'Privativa' }),
  dataSummary:
    'El contingut dels xats personals està xifrat, però Meta veu amb qui parla cada persona, quan i des d’on, i pot unir-ho al perfil de Facebook i d’Instagram. Els xats de grups de comunitat i les converses amb empreses no sempre tenen el mateix xifratge.',
  dataCollection: [
    row('contingut-de-missatges', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['messenger-e2ee-2023'], note: 'Els xats personals van xifrats d’extrem a extrem per defecte des del desplegament de 2023-2024.' }),
    row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['meta-privacy-policy'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['messenger-app-store'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['messenger-app-store'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['messenger-without-facebook'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['messenger-app-store'] }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'recomanacions-algoritmiques'], sources: ['messenger-app-store'] }),
    row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['messenger-without-facebook'], note: 'Els amics de Facebook, si es fa servir el compte de Facebook.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['messenger-app-store'] }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['messenger-app-store'] }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'prestacio-del-servei'], sources: ['messenger-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['messenger-app-store'] }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['messenger-app-store'] }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['messenger-app-store'] }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['messenger-app-store'], note: 'Declarades a l’etiqueta, comuna a les aplicacions de Meta.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['messenger-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['publicitat-personalitzada', 'millora-del-producte'], sources: ['messenger-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['messenger-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['messenger-app-store'], metaLabelNote),
    advertisingIdentifiers: f('partial', 'official', ['messenger-app-store'], 'L’etiqueta declara identificadors i dades de publicitat per a publicitat de tercers.'),
    thirdPartyTrackersPresent: unknown(),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['meta-privacy-policy', 'messenger-app-store'], 'Messenger forma part de la infraestructura publicitària de Meta i l’etiqueta declara dades per a publicitat de tercers; el contingut xifrat no s’hi pot fer servir.'),
    profiling: f('yes', 'official', ['meta-privacy-policy']),
    aiTraining: f('partial', 'official', ['meta-ai-eu-terms', 'messenger-e2ee-2023'], 'Els xats xifrats no són accessibles per a Meta; les converses amb Meta AI dins de Messenger sí que es fan servir per millorar la IA.'),
  },
  sharing: metaSharing,
  transparency: { policyClarity: 'low', ...metaTransparency },
  retention: {
    definedPeriods: f('partial', 'official', ['meta-privacy-policy']),
    dataAfterDeletion: f('partial', 'official', ['fb-delete-account'], 'Fins a 90 dies per esborrar la informació dels sistemes; els missatges enviats es conserven a les bústies de les altres persones.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['fb-delete-account', 'messenger-without-facebook']),
    selfService: f('yes', 'official', ['fb-delete-account'], 'Si es fa servir el compte de Facebook, cal eliminar-lo des del Centre de comptes; desactivar Facebook no elimina Messenger.'),
    directUrl: 'https://www.facebook.com/help/delete_account',
    difficulty: 'medium',
    waitingPeriodDays: 30,
    requiresSupportContact: false,
    steps: [
      'Entra al Centre de comptes des de la configuració de Messenger o de Facebook.',
      'Obre Dades personals i després Propietat i control del compte.',
      'Tria «Desactivació o eliminació», selecciona el perfil i tria «Eliminar el compte».',
      'No tornis a iniciar sessió durant 30 dies.',
    ],
    obstacles: 'Messenger va lligat al compte de Facebook: desactivar Facebook manté Messenger actiu, i eliminar Messenger implica eliminar també Facebook, llevat dels comptes de Messenger separats de l’Espai Econòmic Europeu.',
    dataRetained: 'Els missatges enviats resten a les bústies de les persones destinatàries.',
    sources: ['fb-delete-account', 'messenger-without-facebook'],
  },
  userRights: metaRights,
  controls: {
    adPersonalizationOptOut: f('partial', 'regulator', ['meta-privacy-center', 'dpc-meta-ads-2023'], 'Els ajustos d’anuncis són els del Centre de comptes; la personalització només es desactiva del tot amb la subscripció.'),
    telemetryOptOut: f('no', 'official', ['meta-privacy-policy']),
    granularControls: f('partial', 'official', ['messenger-without-facebook'], 'Es pot fer servir Messenger amb Facebook desactivat o, a l’Espai Econòmic Europeu, amb un compte separat.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown(),
  },
  security: {
    ...metaSecurityBase,
    e2ee: f('yes', 'official', ['messenger-e2ee-2023'], 'Xats personals i trucades xifrats d’extrem a extrem per defecte des de desembre de 2023, amb l’historial desat amb «Secure Storage» i un PIN de recuperació.', {
      scope: 'partial-default',
      protocol: 'Labyrinth, basat en el Signal Protocol',
    }),
  },
  alternatives: [
    {
      app: 'signal',
      comparability: 'equivalent',
      rationale: 'Missatgeria i trucades xifrades d’extrem a extrem sense perfil publicitari ni compte de xarxa social al darrere.',
      tradeOffs: 'Cal que els contactes també el facin servir; no hi ha la integració amb amics de Facebook.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El xifratge per defecte millora molt la protecció del contingut, però l’etiqueta de l’App Store és la comuna de Meta i declara gairebé totes les categories de dades per a publicitat. Els incidents del grup vinculats a Facebook són a la fitxa de Facebook.',
    openQuestions: ['Quins xats (comunitats, empreses, Meta AI) queden fora del xifratge d’extrem a extrem per defecte?'],
  },
}

export const lot: SeedLot = {
  companies: [
    {
      slug: 'comunidad-de-madrid',
      name: 'Comunidad de Madrid',
      legalName: 'Comunidad de Madrid',
      description:
        'Administració autonòmica de Madrid. La Conselleria de Sanitat i el Servei Madrileny de Salut són responsables de les aplicacions sanitàries, i Madrid Digital n’és l’agència tecnològica.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'state',
      primaryRevenueModel: 'unknown',
      website: 'https://www.comunidad.madrid/',
      productDomains: ['comunidad.madrid', 'madrid.org', 'sanidadmadrid.org'],
      privacyContact: 'https://www.comunidad.madrid/proteccion-datos/datos-contacto-delegados-proteccion-datos-dpd',
    },
    {
      slug: 'crtm',
      name: 'Consorcio Regional de Transportes de Madrid',
      legalName: 'Consorcio Regional de Transportes Públicos Regulares de Madrid',
      parent: 'comunidad-de-madrid',
      description: 'Organisme que coordina el transport públic de la regió de Madrid i gestiona la Tarjeta Transporte Público.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'state',
      foundedYear: 1985,
      primaryRevenueModel: 'unknown',
      website: 'https://www.crtm.es/',
      productDomains: ['crtm.es'],
      privacyContact: 'mailto:crtm_protecciondatos@madrid.org',
    },
    {
      slug: 'ayuntamiento-de-madrid',
      name: 'Ayuntamiento de Madrid',
      legalName: 'Ayuntamiento de Madrid',
      description: 'Administració municipal de Madrid, titular del servei BiciMAD i propietària d’EMT.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'state',
      primaryRevenueModel: 'unknown',
      website: 'https://www.madrid.es/',
      productDomains: ['madrid.es', 'bicimad.com'],
      privacyContact: 'mailto:oficprotecciondatos@madrid.es',
    },
    {
      slug: 'emt-madrid',
      name: 'EMT Madrid',
      legalName: 'Empresa Municipal de Transportes de Madrid, S.A.',
      parent: 'ayuntamiento-de-madrid',
      description: 'Empresa municipal d’autobusos de Madrid, gestora de BiciMAD i de la plataforma d’identitat i pagaments mPass.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'state',
      foundedYear: 1947,
      primaryRevenueModel: 'commerce',
      website: 'https://www.emtmadrid.es/',
      productDomains: ['emtmadrid.es'],
      privacyContact: 'mailto:dpd@emtmadrid.es',
    },
  ],
  sources: [
    /* App Store */
    s('cita-sanitaria-madrid-app-store', 'Cita Sanitaria Madrid — App Store (Privacidad de la app)', appStore('798785132'), 'Apple / Comunidad de Madrid', 'app-store', 'primary', {
      language: 'es',
      summary: `Etiqueta de privadesa: «No se recopilan datos». ${noLabelNote}`,
    }),
    s('tarjeta-sanitaria-app-store', 'Tarjeta Sanitaria — App Store (Privacidad de la app)', appStore('1517046103'), 'Apple / Comunidad de Madrid', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara que no es recull cap dada, tot i que l’aplicació mostra informació clínica.',
    }),
    s('tarjeta-transporte-app-store', 'Tarjeta Transporte — App Store (Privacidad de la app)', appStore('1619770175'), 'Apple / Comunidad de Madrid', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara que no es recull cap dada.',
    }),
    s('emt-madrid-app-store', 'EMT Madrid — App Store (Privacidad de la app)', appStore('332237215'), 'Apple / EMT Madrid', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: ubicació aproximada i dades de contacte vinculades per a analítica i funcionalitat; diagnòstic no vinculat; cap dada per rastrejar.',
    }),
    s('bicimad-app-store', 'bicimad — App Store (Privacidad de la app)', appStore('1263402487'), 'Apple / EMT Madrid', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: ubicació aproximada i dades de contacte vinculades per a analítica i funcionalitat; diagnòstic no vinculat; cap dada per rastrejar.',
    }),
    s('meta-ai-app-store', 'Meta AI — App Store (Privacidad de la app)', appStore('1558240027'), 'Apple / Meta Platforms', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: quinze categories de dades vinculades, incloses salut, dades sensibles, contactes i escaneig de l’entorn, per a publicitat de tercers, màrqueting, analítica i personalització; cap dada per rastrejar.',
    }),
    s('threads-app-store', 'Threads — App Store (Privacidad de la app)', appStore('6446901002'), 'Apple / Instagram', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: el catàleg comú de Meta de dades vinculades per a publicitat de tercers, analítica i personalització; cap dada per rastrejar.',
    }),
    s('edits-app-store', 'Edits: Creador de vídeo — App Store (Privacidad de la app)', appStore('6738967378'), 'Apple / Instagram', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: ubicació aproximada, contacte, contactes, fotos, àudio, cerques, identificadors i ús vinculats, també per a publicitat de tercers; cap dada per rastrejar.',
    }),
    s('whatsapp-business-app-store', 'WhatsApp Business — App Store (Privacidad de la app)', appStore('1386412985'), 'Apple / WhatsApp', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: dades vinculades per a funcionalitat i analítica, i ubicació aproximada, identificador d’usuari i dades d’ús per a publicitat de tercers; cap dada per rastrejar.',
    }),
    s('messenger-app-store', 'Messenger — App Store (Privacidad de la app)', appStore('454638411'), 'Apple / Meta Platforms', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: el catàleg comú de Meta de dades vinculades per a publicitat de tercers, analítica i personalització; cap dada per rastrejar.',
    }),

    /* Comunidad de Madrid */
    s('comunidad-madrid-proteccion-datos', 'Protección de datos — Comunidad de Madrid', 'https://www.comunidad.madrid/gobierno/informacion-juridica-legislacion/proteccion-datos', 'Comunidad de Madrid', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Portal general de protecció de dades de la Comunitat: exercici de drets, registre d’activitats de tractament i delegats de protecció de dades.',
    }),
    s('cita-sanitaria-madrid-servei', 'Cita Sanitaria', 'https://www.comunidad.madrid/salud/cita-sanitaria', 'Comunidad de Madrid', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Descripció del servei de cita prèvia: dades necessàries (codi de la targeta, data de naixement i DNI o NIE) i canals disponibles.',
    }),
    s('cita-sanitaria-madrid-tsv-2023', 'La Comunidad de Madrid integra en la Tarjeta Sanitaria Virtual una nueva aplicación para solicitar citas médicas', 'https://www.comunidad.madrid/noticias/2023/10/24/comunidad-madrid-integra-tarjeta-sanitaria-virtual-nueva-aplicacion-solicitar-citas-medicas-manera-agil-e-intuitiva', 'Comunidad de Madrid', 'press', 'primary', {
      language: 'es',
      publishedAt: '2023-10-24',
      summary: 'Nota oficial sobre la integració de la cita prèvia a la Tarjeta Sanitaria Virtual, activa per a 2,5 milions de persones en la primera fase.',
    }),
    s('tarjeta-sanitaria-servei', 'Tarjeta Sanitaria Virtual', 'https://www.comunidad.madrid/salud/tarjeta-sanitaria-virtual', 'Comunidad de Madrid', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Com s’activa la targeta virtual (Cl@ve, IDentifica, certificat o QR al centre), requisits de contrasenya, accés delegat i funcions de la carpeta de salut.',
    }),
    s('tarjeta-sanitaria-carpeta-proteccion-datos', 'Protección de Datos — Mi Carpeta de Salud', 'https://www.carpetavirtual.sanidadmadrid.org/cavi/mvc/info/protecciondatos', 'Servicio Madrileño de Salud', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Clàusula de la carpeta de salut: responsable, base jurídica en l’obligació legal i els poders públics, sense cessions llevat d’obligació legal, conservació segons la normativa sanitària i ús de Google Maps.',
    }),
    s('tarjeta-sanitaria-open-gateway-2025', 'La Comunidad de Madrid permitirá al usuario acceder a sus datos personales de la Tarjeta Sanitaria Virtual sin introducir un código de doble verificación', 'https://www.comunidad.madrid/noticias/2025/03/03/comunidad-madrid-permitira-usuario-acceder-datos-personales-tarjeta-sanitaria-virtual-introducir-codigo-doble-verificacion', 'Comunidad de Madrid', 'press', 'primary', {
      language: 'es',
      publishedAt: '2025-03-03',
      summary: 'Nota oficial: se suprimeix el codi per SMS i la validació es fa automàticament amb les API Open Gateway de Telefónica.',
    }),

    s('comunidad-madrid-rat', 'Registro de actividades de tratamiento (RAT) — Comunidad de Madrid', 'https://www.comunidad.madrid/proteccion-datos/registro-actividades-tratamiento-rat', 'Comunidad de Madrid', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Registre d’activitats de tractament amb cercador per conselleries, apartat per a altres organismes públics i tractaments en què la Comunitat actua com a encarregada.',
    }),
    s('comunidad-madrid-dpd', 'Datos de contacto de los delegados de protección de datos (DPD)', 'https://www.comunidad.madrid/proteccion-datos/datos-contacto-delegados-proteccion-datos-dpd', 'Comunidad de Madrid', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Llista de delegats de protecció de dades per conselleria i organisme, amb les adreces electròniques de Sanitat i del Consorci Regional de Transports.',
    }),
    s('comunidad-madrid-accessibilitat', 'Declaración de accesibilidad — Comunidad de Madrid', 'https://www.comunidad.madrid/atencion-ciudadano/declaracion-accesibilidad', 'Comunidad de Madrid', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Declaració del Reial decret 1112/2018 del portal comunidad.madrid: es declara «no conforme», preparada l’abril del 2024 i revisada el maig del 2025, sense esmentar les aplicacions mòbils.',
    }),
    s('boe-llei-41-2002', 'Ley 41/2002, básica reguladora de la autonomía del paciente y de derechos y obligaciones en materia de información y documentación clínica', 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-22188', 'Boletín Oficial del Estado', 'legislation', 'authority', {
      language: 'es',
      summary: 'Text consolidat; l’article 17 obliga els centres sanitaris a conservar la documentació clínica com a mínim cinc anys des de l’alta de cada procés assistencial.',
    }),

    /* CRTM */
    s('crtm-proteccion-datos', 'Protección de datos — Consorcio Regional de Transportes de Madrid', 'https://www.crtm.es/proteccion-de-datos', 'Consorcio Regional de Transportes de Madrid', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Responsable, delegat de protecció de dades, absència de cessions llevat d’obligació legal i de transferències internacionals.',
    }),
    s('tarjeta-transporte-crtm-app', 'App Tarjeta Transporte', 'https://www.crtm.es/app-tarjeta-transporte', 'Consorcio Regional de Transportes de Madrid', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Presentació de l’aplicació: recàrrega de títols per NFC i afirmació que només recull el model de telèfon i la versió del sistema.',
    }),
    s('tarjeta-transporte-faq-ios', 'Preguntas frecuentes de la app Tarjeta Transporte (iOS)', 'https://www.crtm.es/billetes-y-tarifas/apps-crtm/tarjeta-transporte/preguntas-frecuentes-de-la-app-tarjeta-transporte-ios/', 'Consorcio Regional de Transportes de Madrid', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Preguntes freqüents: cal registrar una targeta bancària per carregar, però no cal deixar-la desada.',
    }),
    s('tarjeta-transporte-instruccions-ios', 'Instrucciones de uso de la app Tarjeta Transporte (iOS)', 'https://www.crtm.es/billetes-y-tarifas/apps-crtm/tarjeta-transporte/instrucciones-de-uso-de-la-app-tarjeta-transporte-ios/?idPestana=0&lang=es', 'Consorcio Regional de Transportes de Madrid', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Instruccions: alta de targetes Visa o Mastercard amb un càrrec de verificació de zero euros i esborrat lliscant cap a l’esquerra.',
    }),
    s('crtm-accessibilitat', 'Accesibilidad — Consorcio Regional de Transportes de Madrid', 'https://www.crtm.es/accesibilidad', 'Consorcio Regional de Transportes de Madrid', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Declaració d’accessibilitat del Reial decret 1112/2018 del portal crtm.es: «no conforme», preparada el maig del 2025 i revisada el setembre del 2025.',
    }),
    s('tarjeta-transporte-ciberataque-2023', 'Un ciberataque puso en jaque datos personales de los titulares de Tarjetas de Transporte Público de Madrid', 'https://www.eldiario.es/madrid/somos/ciberataque-puso-jaque-datos-personales-titulares-tarjetas-transporte-publico-madrid_1_10957558.html', 'elDiario.es', 'press', 'secondary', {
      language: 'es',
      publishedAt: '2024-02-26',
      summary: 'El consorci reconeix l’extracció de noms, adreces, correus, telèfons i vendes de títols el 22 de novembre de 2023, i la comunicació a la policia i a l’AEPD.',
    }),

    /* EMT i BiciMAD */
    s('emt-madrid-privacy-policy', 'Política de privacidad EMTBus', 'https://www.emtmadrid.es/PoliticaPrivacidadEMTBus', 'EMT Madrid', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de l’aplicació d’EMT: dades identificatives i de geolocalització, consentiment, anonimització de l’ús, sense transferències fora de l’EEE i conservació de fins a sis anys més.',
    }),
    s('emt-madrid-mpass-privacy', 'Política de privacidad Mobility 360 (MPASS)', 'https://www.emtmadrid.es/privacidad/Mobility360', 'EMT Madrid', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política del compte únic mPass: dades identificatives i bancàries, màrqueting i perfil de mobilitat amb consentiment, bloqueig de sis anys després de la baixa.',
    }),
    s('bicimad-privacy-policy', 'Política de privacidad BiciMAD', 'https://www.emtmadrid.es/PoliticaPrivacidadBiciMAD', 'Ayuntamiento de Madrid / EMT Madrid', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'L’Ajuntament és responsable i EMT encarregada; GPS de la bicicleta no desconnectable per mapar trajectes; DNI i dades bancàries; bloqueig de sis anys.',
    }),
    s('bicimad-terms', 'Términos y condiciones asociados al servicio BiciMAD', 'https://www.bicimad.com/sites/default/files/2023-03/T%C3%A9rminos%20y%20condiciones%20bicimad.pdf', 'Ayuntamiento de Madrid / EMT Madrid', 'terms', 'primary', {
      language: 'es',
      summary: 'Condicions del servei; l’apartat 3.7 diu que la baixa es fa a l’àrea d’usuari de l’aplicació i no retorna saldos.',
    }),
    s('bicimad-servei', 'bicimad — Cómo funciona', 'https://www.bicimad.com/', 'Ayuntamiento de Madrid / EMT Madrid', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Pàgina del servei: explica que, sense aplicació, la bicicleta es desbloqueja passant la targeta vinculada per la base o pel candau.',
    }),
    s('bicimad-ciberataque-2019', 'La EMT denuncia a la Policía un ataque informático en 19 estaciones de Bicimad para acceder a datos de usuarios', 'https://www.telemadrid.es/noticias/madrid/EMT-Policia-informatico-estaciones-Bicimad-0-2185581436--20191213120128.html', 'Telemadrid', 'press', 'secondary', {
      language: 'es',
      publishedAt: '2019-12-13',
      summary: 'Atac a 19 estacions de BiciMAD que va exposar noms, cognoms i saldos d’algunes persones usuàries, sense afectar operacions bancàries.',
    }),

    /* Meta */
    s('meta-ai-eu-terms', 'EU Meta AIs Terms of Service', 'https://www.facebook.com/legal/eu-ai-terms', 'Meta Platforms Ireland', 'terms', 'primary', {
      summary: 'Condicions europees de les IA de Meta: revisió automàtica o humana de les converses, compartició amb cercadors associats i avís que esborrar-les pot no esborrar la còpia de Meta.',
    }),
    s('meta-ai-help-chat', 'Start a chat with Meta AI', 'https://www.meta.com/help/artificial-intelligence/', 'Meta Platforms', 'support-doc', 'primary', {
      summary: 'Ajuda de l’aplicació: ús de la ubicació, l’edat, el gènere i els interessos per personalitzar, compartició amb socis i objecció a l’entrenament.',
    }),
    s('meta-ai-app-launch-2025', 'Introducing the Meta AI App: A New Way to Access Your AI Assistant', 'https://about.fb.com/news/2025/04/introducing-meta-ai-app-new-way-access-ai-assistant/', 'Meta Platforms', 'press', 'primary', {
      publishedAt: '2025-04-29',
      summary: 'Presentació de l’aplicació: memòria, personalització amb dades de Facebook i Instagram, feed «Discover» i funció de companya de les ulleres.',
    }),
    s('meta-ai-ads-personalization-2025', 'Improving Your Recommendations on Our Apps With AI at Meta', 'https://about.fb.com/news/2025/10/improving-your-recommendations-apps-ai-meta/', 'Meta Platforms', 'press', 'primary', {
      publishedAt: '2025-10-01',
      summary: 'Anunci que des del 16 de desembre de 2025 les interaccions amb la IA serviran per personalitzar continguts i anuncis a la majoria de regions, excloent-ne temes sensibles.',
    }),
    s('meta-ai-discover-techcrunch-2025', 'The Meta AI app is a privacy disaster', 'https://techcrunch.com/2025/06/12/the-meta-ai-app-is-a-privacy-disaster/', 'TechCrunch', 'press', 'secondary', {
      publishedAt: '2025-06-12',
      summary: 'Persones usuàries publicaven converses privades al feed «Discover» sense saber-ho, perquè l’aplicació no indicava la visibilitat.',
    }),
    s('meta-ai-bug-techcrunch-2025', 'Meta fixes bug that could leak users’ AI prompts and generated content', 'https://techcrunch.com/2025/07/15/meta-fixes-bug-that-could-leak-users-ai-prompts-and-generated-content/', 'TechCrunch', 'press', 'secondary', {
      publishedAt: '2025-07-15',
      summary: 'Una fallada permetia veure les indicacions i respostes privades d’altres persones; es va notificar el desembre de 2024 i es va corregir el gener de 2025.',
    }),
    s('threads-supplemental-privacy', 'Política de privacidad de Threads complementaria', 'https://help.instagram.com/515230437301944', 'Meta Platforms Ireland', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-01-21',
      summary: 'Política complementària de Threads: dades de perfil i activitat, informació sempre pública, fedivers encara no actiu i bases jurídiques.',
    }),
    s('threads-delete-account', 'Eliminar tu cuenta de Threads', 'https://help.instagram.com/313703828012423', 'Meta Platforms', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Passos per eliminar el perfil, període de 30 dies, fins a 90 dies per completar-ho i conservació de còpies de seguretat.',
    }),
    s('edits-about', 'Información sobre Edits', 'https://help.instagram.com/1345978640113441', 'Meta Platforms', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Què és Edits i quines dades del compte d’Instagram fa servir.',
    }),
    s('edits-delete', 'Cómo eliminar Edits', 'https://help.instagram.com/1236964017529717', 'Meta Platforms', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Els vídeos es poden esborrar, però la resta d’informació d’ús només s’elimina eliminant el compte d’Instagram.',
    }),
    s('whatsapp-business-terms', 'WhatsApp Business Terms of Service', 'https://www.whatsapp.com/legal/business-terms/', 'WhatsApp', 'terms', 'primary', {
      summary: 'Condicions per a empreses: WhatsApp com a encarregat per a les dades de clients, compartició de la informació del compte i d’ús amb Meta i transferències als Estats Units.',
    }),
    s('whatsapp-business-ads-eu-2026', 'WhatsApp ads reach Europe', 'https://itdaily.com/news/software/whatsapp-ads-europe/', 'ITdaily', 'press', 'secondary', {
      publishedAt: '2026-03-02',
      summary: 'Els canals promocionats i els anuncis als estats arriben a la pestanya de novetats de WhatsApp a Europa.',
    }),
    s('messenger-e2ee-2023', 'Launching Default End-to-End Encryption on Messenger', 'https://about.fb.com/news/2023/12/default-end-to-end-encryption-on-messenger/', 'Meta Platforms', 'technical-doc', 'primary', {
      publishedAt: '2023-12-06',
      summary: 'Anunci del xifratge d’extrem a extrem per defecte als xats personals i trucades de Messenger, amb el protocol Labyrinth i «Secure Storage».',
    }),
    s('messenger-without-facebook', 'Opciones para usar Messenger sin una cuenta de Facebook', 'https://www.facebook.com/help/messenger-app/117818065545664', 'Meta Platforms', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Cal un compte de Facebook per fer servir Messenger, que es pot desactivar; a l’EEE es pot crear un compte de Messenger separat.',
    }),
  ],
  apps: [citaSanitaria, tarjetaSanitaria, tarjetaTransporte, emtMadrid, bicimad, metaAi, threads, edits, whatsappBusiness, messenger],
  incidents: [
    {
      slug: 'tarjeta-transporte-crtm-ciberataque-2023',
      title: 'Extracció de dades dels titulars de la Tarjeta Transporte Público de Madrid',
      type: 'breach',
      severity: 'high',
      apps: ['tarjeta-transporte'],
      company: 'crtm',
      occurredAt: '2023-11-22',
      disclosedAt: '2024-02-26',
      description:
        'Un atac informàtic extern, que el consorci va neutralitzar el mateix dia, va extreure de les bases de dades de titulars de la Tarjeta Transporte Público noms, cognoms, adreces, correus electrònics, telèfons, codis postals i informació de vendes de títols. El consorci ho va denunciar a la policia i ho va comunicar a l’Agència Espanyola de Protecció de Dades, però ho va fer públic tres mesos després i va advertir del risc de pesca i suplantació.',
      affectedPeople: 'Titulars de tota mena de títols de transport autonòmic de Madrid; no se n’ha publicat la xifra.',
      sources: ['tarjeta-transporte-ciberataque-2023'],
    },
    {
      slug: 'bicimad-ciberataque-estacions-2019',
      title: 'Atac a 19 estacions de BiciMAD amb accés a dades de persones usuàries',
      type: 'breach',
      severity: 'medium',
      apps: ['bicimad'],
      company: 'emt-madrid',
      occurredAt: '2019-12-09',
      disclosedAt: '2019-12-13',
      description:
        'EMT va denunciar un atac a sis estacions de BiciMAD un dilluns i a tretze més el dijous següent, que va permetre accedir a noms, cognoms i saldos de la targeta d’algunes persones usuàries. No es van veure afectades les operacions bancàries. EMT va apagar les comunicacions del sistema, cosa que va interrompre el servei.',
      affectedPeople: 'Algunes persones usuàries de BiciMAD; no se n’ha publicat la xifra.',
      sources: ['bicimad-ciberataque-2019'],
    },
    {
      slug: 'meta-ai-fallada-indicacions-2025',
      title: 'Fallada de Meta AI que permetia veure les converses privades d’altres persones',
      type: 'vulnerability',
      severity: 'medium',
      apps: ['meta-ai'],
      company: 'meta-platforms',
      occurredAt: '2024-12-26',
      disclosedAt: '2025-07-15',
      description:
        'Un investigador va descobrir que, en editar una indicació a Meta AI, els servidors li assignaven un número que es podia canviar per obtenir les indicacions i respostes d’altres persones sense comprovar-ne l’autorització. Meta ho va corregir el 24 de gener de 2025, va pagar 10.000 dòlars de recompensa i va dir que no havia trobat indicis d’explotació maliciosa.',
      affectedPeople: 'Potencialment, qualsevol persona usuària de Meta AI amb sessió iniciada.',
      sources: ['meta-ai-bug-techcrunch-2025'],
    },
    {
      slug: 'meta-ai-discover-publicacio-converses-2025',
      title: 'Converses privades publicades al feed «Discover» de Meta AI',
      type: 'other',
      severity: 'medium',
      apps: ['meta-ai'],
      company: 'meta-platforms',
      occurredAt: '2025-06-12',
      disclosedAt: '2025-06-12',
      description:
        'Poc després del llançament de l’aplicació es va documentar que moltes persones publicaven converses amb l’assistent (amb dades de salut, legals o personals, textos, àudios i imatges) al feed públic «Discover» sense ser-ne conscients, perquè l’aplicació no deixava clar on es publicaven ni amb quina visibilitat.',
      affectedPeople: 'Persones usuàries de l’aplicació Meta AI que van fer servir el botó de compartir.',
      sources: ['meta-ai-discover-techcrunch-2025'],
    },
  ],
  storeIds: {
    'cita-sanitaria-madrid': 'org.madrid.CitaSanitaria',
    bicimad: 'com.emtmadrid.BiciMad',
    'tarjeta-sanitaria': 'org.madrid.ztav.tarjetaSanitariaVirtual',
    'tarjeta-transporte': 'com.crtm.recarga',
    'emt-madrid': 'es.emtmadrid.EMTMadrid',
    'meta-ai': 'com.facebook.stellaapp',
    threads: 'com.burbn.barcelona',
    edits: 'com.burbn.basel',
    'whatsapp-business': 'net.whatsapp.WhatsAppSMB',
    messenger: 'com.facebook.Messenger',
  },
}
