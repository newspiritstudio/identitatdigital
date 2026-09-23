import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 03 de la segona onada: serveis del grup Amazon (Kindle, Audible,
 * Goodreads, Amazon Music, Prime Video, Twitch, Alexa i Amazon Photos).
 *
 * Kindle, Music, Prime Video, Alexa i Photos funcionen amb el compte d’Amazon i
 * es regeixen per l’avís de privadesa d’Amazon.es, que ja és al dataset. Audible,
 * Goodreads i Twitch tenen entitat i política pròpies, i per això s’hi afegeixen
 * com a empreses filials. La diferència que més pesa entre aquestes fitxes és
 * com s’hi pot sortir: als serveis que depenen del compte d’Amazon no hi ha cap
 * baixa per servei, només el tancament de tot el compte.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

const AMAZON_LINKS = {
  privacyPolicy: 'https://www.amazon.es/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ',
  privacyCenter: 'https://www.amazon.es/hz/privacy-central',
}

/* ── Blocs compartits pels serveis que funcionen amb el compte d’Amazon ── */

const amazonSharing = {
  thirdPartySharing: f('partial', 'official', ['amazon-privacy-notice'], 'Amb proveïdors que tracten dades per compte d’Amazon, amb terceres empreses quan intervenen en una operació i amb empreses de publicitat, a les quals Amazon diu que dona un identificador publicitari i no el nom.'),
  intraGroupSharing: f('yes', 'official', ['amazon-privacy-notice', 'amazon-cross-service-consent'], 'Les dades es comparteixen amb Amazon.com, Inc. i les seves filials. Des del 6 de març de 2024, creuar-les entre la botiga, Alexa, els serveis d’entreteniment i els dispositius per recomanar i personalitzar anuncis requereix consentiment.'),
  dataBrokerSales: f('no', 'official', ['amazon-privacy-notice'], 'Amazon declara que no ven la informació personal de la clientela a tercers.'),
  internationalTransfers: f('yes', 'official', ['amazon-privacy-notice'], 'Transferències fora de l’Espai Econòmic Europeu sota decisions d’adequació (Data Privacy Framework) o clàusules contractuals tipus.', { mechanism: 'adequacy' }),
}

const amazonTransparency = {
  policyClarity: 'medium',
  transparencyReport: f('yes', 'official', ['amazon-law-enforcement-requests'], 'Amazon publica un informe semestral de peticions governamentals d’informació; no hem verificat si el desglossa per servei.', {
    url: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GYSDRGWQ2C2CRYEF',
  }),
}

const amazonRetention = {
  definedPeriods: f('partial', 'official', ['amazon-privacy-notice'], 'L’avís fixa alguns terminis (dades de comandes 10 anys pel Codi de Comerç de Luxemburg, galetes 13 mesos), però la resta es conserva «el temps necessari» mentre el compte és actiu.'),
  dataAfterDeletion: f('partial', 'official', ['amazon-privacy-notice'], 'En tancar el compte s’eliminen les dades, excepte les necessàries per a obligacions legals, reclamacions, frau i seguretat. Amazon diu que no les fa servir per a màrqueting.'),
}

const amazonDeletion = (service: string, lost: string) => ({
  possible: f('yes', 'official', ['amazon-close-account', 'amazon-privacy-notice']),
  selfService: f('partial', 'official', ['amazon-close-account'], `No hi ha manera d’eliminar només ${service}: cal tancar tot el compte d’Amazon amb el formulari en línia i confirmar-ho en cinc dies.`),
  directUrl: 'https://www.amazon.es/privacy/data-deletion',
  difficulty: 'medium' as const,
  waitingPeriodDays: 5,
  requiresSupportContact: false,
  steps: [
    'Ves a la pàgina «Cerrar mi cuenta de Amazon» i inicia la sessió amb el compte que vols tancar.',
    'Revisa la llista de productes i serveis associats al compte.',
    'Tria un motiu al desplegable i marca la casella «Sí, quiero cerrar permanentemente mi cuenta de Amazon y eliminar mis datos».',
    'Prem «Cerrar mi cuenta».',
    'Respon en cinc dies la confirmació que rebràs per correu electrònic o SMS.',
  ],
  obstacles: `El tancament és global: afecta totes les botigues d’Amazon del món que fan servir les mateixes credencials i és irreversible. ${lost}`,
  dataRetained: 'Dades de les comandes (nom, producte, data, adreça, forma de pagament, preu i IVA) durant 10 anys, i informació d’identificació limitada per atendre obligacions i reclamacions.',
  sources: ['amazon-close-account', 'amazon-privacy-notice'],
})

const amazonRights = {
  dataExport: f('yes', 'official', ['amazon-privacy-notice'], 'Amb «Solicita tu información personal» es pot descarregar una còpia en un format llegible per màquina.', {
    url: 'https://www.amazon.es/hz/privacy-central/data-requests/preview.html',
  }),
  exportFormatQuality: 'mixed' as const,
  rightsExercise: f('yes', 'official', ['amazon-privacy-notice'], 'Formularis del compte, atenció al client («Consultas sobre privacidad de datos») i el delegat de protecció de dades a eu-privacy@amazon.es.', {
    url: 'mailto:eu-privacy@amazon.es',
    responseTimeDays: 30,
  }),
}

const amazonSecurity = (appStoreId: string) => ({
  transportEncryption: f('yes', 'official', ['amazon-privacy-notice'], 'L’avís diu que la informació es protegeix durant la transmissió amb programari i protocols de xifratge.'),
  atRestEncryption: unknown('L’avís parla de mesures físiques, electròniques i procedimentals, però no concreta el xifratge en repòs.'),
  mfa: f('yes', 'official', ['amazon-2sv'], 'Verificació en dos passos del compte d’Amazon amb codi per SMS o aplicació d’autenticació.', { methods: ['sms', 'totp'] }),
  independentAudits: f('partial', 'official', ['amazon-privacy-notice'], 'Només declara el compliment de PCI DSS per a les dades de targeta; no hem trobat auditories publicades específiques del servei.'),
  bugBounty: f('yes', 'official', ['amazon-vrp-hackerone'], `L’aplicació d’iOS (identificador ${appStoreId}) és dins de l’abast del programa de recompenses d’Amazon a HackerOne.`, {
    url: 'https://hackerone.com/amazonvrp',
  }),
  vulnerabilityDisclosure: f('yes', 'official', ['amazon-security-txt'], 'Fitxer security.txt que adreça les notificacions al programa d’Amazon a HackerOne.'),
})

const amazonAdOptOut = f('yes', 'official', ['amazon-ad-preferences', 'amazon-cross-service-consent'], 'Es poden retirar el consentiment a les galetes publicitàries, les preferències de publicitat i el consentiment per creuar dades entre serveis.', {
  url: 'https://www.amazon.es/adprefs',
})

const amazonReview = (openQuestions: string[], editorialNotes?: string) => ({
  researchStatus: 'documented' as const,
  lastReviewedAt: WAVE2_DATE,
  incidentsReviewed: true,
  editorialNotes,
  openQuestions,
})

const apps: AppSeed[] = [
  /* ═══════════════════════════ Amazon Kindle ═══════════════════════════ */
  {
    slug: 'amazon-kindle',
    name: 'Amazon Kindle',
    company: 'amazon-europe-core',
    categories: ['llibres-i-lectura'],
    tagline: 'Lectura lligada al compte d’Amazon: els llibres comprats es perden si el tanques',
    summary:
      'Kindle registra què llegeixes, fins on arribes, què subratlles i què cerques, i ho associa al compte d’Amazon. Els llibres són llicències lligades a aquell compte: des del febrer de 2025 ja no es poden descarregar per desar-los a l’ordinador, i tancar el compte vol dir perdre’ls tots.',
    platforms: ['ios', 'android', 'web', 'other'],
    businessModel: 'commerce',
    jurisdiction: 'Luxemburg, per a persones usuàries de la Unió Europea',
    links: { website: 'https://www.amazon.es/kindle', ...AMAZON_LINKS, appStore: appStore('302584613') },
    accountRequired: f('yes', 'official', ['amazon-close-account', 'amazon-kindle-app-store'], 'Les compres i la biblioteca van associades al compte d’Amazon.'),
    openSource: f('no', 'official', ['amazon-privacy-notice'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'L’historial de lectura és molt revelador: temes polítics, religiosos, de salut o de sexualitat, i també el ritme i les hores en què es llegeix. Els subratllats i les notes afegeixen el que la persona ha trobat important de cada llibre.',
    dataCollection: [
      row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['amazon-kindle-app-store', 'amazon-privacy-notice'] }),
      row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['amazon-privacy-notice', 'audible-privacy-policy'], note: 'Hàbits de lectura: pàgines, durada i sincronització entre dispositius. Audible reconeix que rep el comportament de lectura a Kindle per a WhisperSync for Voice.' }),
      row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-kindle-app-store'], note: 'L’etiqueta declara contingut de l’usuari: subratllats, notes i ressenyes.' }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['amazon-kindle-app-store'] }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', sources: ['amazon-kindle-app-store'], note: 'L’etiqueta declara «Ubicación» sense precisar-ne el grau.' }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-kindle-app-store'] }),
      row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-kindle-app-store'] }),
      row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['amazon-kindle-app-store', 'amazon-privacy-notice'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['amazon-kindle-app-store'] }),
      row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['amazon-kindle-app-store'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['amazon-privacy-notice'] }),
    ],
    tracking: {
      crossAppTracking: f('no', 'official', ['amazon-kindle-app-store'], 'L’etiqueta de l’App Store no declara dades utilitzades per rastrejar entre aplicacions de tercers.'),
      advertisingIdentifiers: f('partial', 'official', ['amazon-privacy-notice'], 'L’avís general preveu compartir identificadors publicitaris amb empreses de publicitat per als anuncis d’Amazon; l’etiqueta de l’aplicació no ho declara com a rastreig.'),
      thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent dels rastrejadors de l’aplicació.'),
    },
    dataUses: {
      targetedAdvertising: f('partial', 'official', ['amazon-cross-service-consent'], 'L’activitat a Kindle només serveix per personalitzar anuncis en altres serveis d’Amazon si s’hi dona consentiment.', {
        optOutUrl: 'https://www.amazon.es/adprefs',
      }),
      profiling: f('yes', 'official', ['amazon-privacy-notice'], 'L’historial de compres i d’ús de continguts serveix per recomanar productes i continguts.'),
      aiTraining: unknown('L’avís parla de millorar els serveis, però no concreta si l’historial de lectura entrena models.'),
    },
    sharing: amazonSharing,
    transparency: amazonTransparency,
    retention: amazonRetention,
    accountDeletion: {
      ...amazonDeletion('Kindle', 'Es perd l’accés a tots els llibres electrònics comprats, que són llicències lligades al compte. Des del 26 de febrer de 2025 ja no es poden descarregar per USB per guardar-ne una còpia abans.'),
      sources: ['amazon-close-account', 'amazon-privacy-notice', 'amazon-kindle-usb-2025'],
    },
    userRights: amazonRights,
    controls: {
      adPersonalizationOptOut: amazonAdOptOut,
      telemetryOptOut: unknown('No hem trobat documentació oficial d’un control per desactivar la telemetria de lectura.'),
      granularControls: f('partial', 'official', ['amazon-privacy-notice'], 'Es poden gestionar recomanacions i l’historial de navegació, i els continguts des de «Gestionar tu contenido y dispositivos».'),
      defaultPosture: 'mixed',
      darkPatterns: unknown('No hem documentat patrons foscos específics de l’aplicació.'),
    },
    security: {
      e2ee: na('Una aplicació de lectura no transporta comunicacions privades entre persones.'),
      ...amazonSecurity('302584613'),
    },
    alternatives: [
      {
        app: 'kobo',
        comparability: 'partial',
        rationale: 'Botiga i lector de llibres electrònics que admet fitxers EPUB, cosa que permet llegir llibres que no depenen d’un sol compte.',
        tradeOffs: 'Els llibres comprats a Kobo també porten sovint protecció anticòpia i el servei també recull dades de lectura.',
      },
    ],
    review: amazonReview(
      ['Quines dades de lectura concretes (pàgines, temps, subratllats) es conserven i durant quant de temps?'],
      'La retirada de «Descargar y transferir vía USB» el 26 de febrer de 2025 (font de premsa especialitzada) reforça la dependència del compte: ja no hi ha manera oficial de guardar una còpia pròpia dels llibres comprats.',
    ),
  },

  /* ═══════════════════════════ Audible ═══════════════════════════ */
  {
    slug: 'audible',
    name: 'Audible',
    company: 'audible-gmbh',
    categories: ['llibres-i-lectura', 'musica-i-audio'],
    tagline: 'Audiollibres amb registre detallat d’escolta i publicitat basada en interessos',
    summary:
      'Audible registra quan escoltes, quant de temps i on t’atures, i també el comportament de lectura a Kindle per sincronitzar-lo amb l’audiollibre. La política europea reconeix l’ús de les dades per a anuncis basats en interessos i la corresponsabilitat amb altres empreses del grup Amazon.',
    platforms: ['ios', 'android', 'web'],
    businessModel: 'subscription',
    jurisdiction: 'Alemanya (Audible GmbH, Berlín) per a audible.es',
    links: {
      website: 'https://www.audible.es/',
      privacyPolicy: 'https://www.audible.es/legal/privacy-policy',
      appStore: appStore('379693831'),
    },
    accountRequired: f('yes', 'official', ['audible-privacy-policy'], 'Cal un compte per subscriure’s i escoltar els títols.'),
    openSource: f('no', 'official', ['audible-privacy-policy'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'Els títols escoltats i les hores d’escolta permeten deduir interessos, creences i rutines. Combinats amb el compte d’Amazon, completen el perfil de consum cultural.',
    dataCollection: [
      row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['audible-privacy-policy'], note: 'Hores d’inici i de final, durada de l’escolta i comportament de lectura a Kindle.' }),
      row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['audible-app-store', 'audible-privacy-policy'] }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', sources: ['audible-app-store', 'audible-privacy-policy'], note: 'La política parla de la ubicació del dispositiu; l’etiqueta no en precisa el grau.' }),
      row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['audible-privacy-policy'] }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['audible-app-store', 'audible-privacy-policy'] }),
      row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['audible-privacy-policy'] }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['audible-app-store'] }),
      row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', sources: ['audible-app-store'], note: 'Contingut de l’usuari: valoracions i ressenyes.' }),
      row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['audible-app-store'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['audible-app-store'] }),
      row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['audible-app-store'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['audible-privacy-policy'] }),
    ],
    tracking: {
      crossAppTracking: f('no', 'official', ['audible-app-store'], 'L’etiqueta de l’App Store no declara dades utilitzades per rastrejar.'),
      advertisingIdentifiers: f('partial', 'official', ['audible-privacy-policy'], 'La política preveu donar a empreses de publicitat un identificador publicitari per als anuncis d’Amazon.'),
      thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent dels rastrejadors de l’aplicació.'),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['audible-privacy-policy'], 'La política diu que tracta la informació personal per mostrar anuncis basats en interessos.', {
        optOutUrl: 'https://www.amazon.es/adprefs',
      }),
      profiling: f('yes', 'official', ['audible-privacy-policy'], 'Recomanacions a partir de l’historial de compres i d’escolta.'),
      aiTraining: unknown('La política no concreta si l’historial d’escolta entrena models.'),
    },
    sharing: {
      thirdPartySharing: f('partial', 'official', ['audible-privacy-policy'], 'Amb proveïdors de serveis i empreses de publicitat, a les quals diu que no dona dades que identifiquin directament.'),
      intraGroupSharing: f('yes', 'official', ['audible-privacy-policy', 'amazon-cross-service-consent'], 'Corresponsabilitat amb altres empreses del grup Amazon per a determinats tractaments; creuar dades entre serveis per a anuncis requereix consentiment.'),
      dataBrokerSales: f('no', 'official', ['audible-privacy-policy'], 'Audible declara que vendre informació personal no forma part del seu negoci.'),
      internationalTransfers: f('yes', 'official', ['audible-privacy-policy'], 'Audible Inc. i altres societats del grup als Estats Units estan adherides al Data Privacy Framework.', { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: unknown('No hem pogut confirmar si l’informe de peticions governamentals d’Amazon inclou Audible.'),
    },
    retention: {
      definedPeriods: f('no', 'official', ['audible-privacy-policy'], 'Només diu que conserva les dades el temps necessari o el que exigeix la llei, sense terminis concrets.'),
      dataAfterDeletion: unknown('La política no explica què es conserva després de tancar el compte.'),
    },
    accountDeletion: {
      possible: f('yes', 'official', ['audible-privacy-policy'], 'La política reconeix el dret de supressió i remet a atenció al client d’Audible per exercir-lo.'),
      selfService: unknown('No hem pogut llegir la pàgina d’ajuda d’Audible sobre el tancament del compte; la política remet a atenció al client.'),
      difficulty: 'unknown',
      requiresSupportContact: true,
      obstacles: 'Cancel·lar la subscripció no elimina el compte. Tancar-lo fa perdre l’accés als títols comprats.',
      sources: ['audible-privacy-policy'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['audible-privacy-policy'], 'L’opció «Solicitar mis datos» porta al formulari de sol·licitud de dades d’Amazon.', {
        url: 'https://www.amazon.es/hz/privacy-central/data-requests/preview.html',
      }),
      exportFormatQuality: 'mixed',
      rightsExercise: f('yes', 'official', ['audible-privacy-policy'], 'Atenció al client d’Audible i eu-privacy@amazon.es.', {
        url: 'mailto:eu-privacy@amazon.es',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['audible-privacy-policy'], 'Es pot rebutjar la publicitat basada en interessos a les preferències de galetes i de publicitat.'),
      telemetryOptOut: unknown(),
      granularControls: f('partial', 'official', ['audible-privacy-policy'], 'Preferències de notificacions, de galetes i de publicitat; no hi ha un panell de privadesa per finalitat.'),
      defaultPosture: 'mixed',
      darkPatterns: unknown('No hem documentat patrons foscos específics d’Audible.'),
    },
    security: {
      e2ee: na('Un servei d’audiollibres no transporta comunicacions privades entre persones.'),
      transportEncryption: f('yes', 'official', ['audible-privacy-policy'], 'La política diu que protegeix la transmissió amb protocols de xifratge.'),
      atRestEncryption: unknown(),
      mfa: f('yes', 'official', ['audible-help-2sv'], 'L’ajuda d’Audible té un article sobre com activar la verificació en dos passos del compte d’Audible i d’Amazon.'),
      independentAudits: f('partial', 'official', ['audible-privacy-policy'], 'Només declara el compliment de PCI DSS per a les dades de targeta.'),
      bugBounty: f('yes', 'official', ['audible-hackerone'], 'Programa propi a HackerOne, obert i amb recompenses.', { url: 'https://hackerone.com/audible' }),
      vulnerabilityDisclosure: f('yes', 'official', ['audible-hackerone']),
    },
    alternatives: [
      {
        app: 'storytel',
        comparability: 'equivalent',
        rationale: 'Servei de subscripció d’audiollibres amb catàleg en castellà i català, fora de l’ecosistema publicitari d’Amazon.',
        tradeOffs: 'També registra l’historial d’escolta; no l’hem avaluat com a més protector sense la seva fitxa.',
      },
    ],
    review: {
      researchStatus: 'documented',
      lastReviewedAt: WAVE2_DATE,
      incidentsReviewed: true,
      openQuestions: [
        'Quins són els passos reals per tancar un compte d’audible.es i si equival a tancar el compte d’Amazon?',
        'L’informe de peticions governamentals d’Amazon inclou Audible?',
      ],
    },
  },

  /* ═══════════════════════════ Goodreads ═══════════════════════════ */
  {
    slug: 'goodreads',
    name: 'Goodreads',
    company: 'goodreads-llc',
    categories: ['llibres-i-lectura', 'comunitats-i-forums'],
    tagline: 'Xarxa social de lectura que pot creuar les dades amb el compte d’Amazon',
    summary:
      'Goodreads és una xarxa pública de lectura: les ressenyes i els prestatges es veuen per defecte. La política, breu i dels Estats Units, avisa que la informació es pot correlacionar amb la que té Amazon si hi tens compte, i remet a l’avís de privadesa d’Amazon per a gairebé tota la resta. Eliminar el compte, en canvi, és senzill i es fa des de l’aplicació.',
    platforms: ['ios', 'android', 'web'],
    businessModel: 'advertising',
    jurisdiction: 'Estats Units (Goodreads LLC)',
    links: {
      website: 'https://www.goodreads.com/',
      privacyPolicy: 'https://www.goodreads.com/about/privacy',
      appStore: appStore('355833469'),
    },
    accountRequired: f('yes', 'official', ['goodreads-privacy-policy'], 'Es pot consultar el web sense compte, però prestatges, ressenyes i amistats el requereixen.'),
    openSource: f('no', 'official', ['goodreads-privacy-policy'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'Els llibres que algú llegeix, valora i vol llegir revelen ideologia, religió, salut o orientació sexual, i aquí són públics per defecte. L’etiqueta de l’App Store declara fins i tot dades sensibles i la llista de contactes.',
    dataCollection: [
      row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['goodreads-privacy-policy', 'goodreads-app-store'], note: 'Les ressenyes i els comentaris són públics i en poden quedar còpies en memòries cau.' }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['goodreads-privacy-policy'], note: 'Prestatges, valoracions i gèneres preferits.' }),
      row('conviccions-i-opinions', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', sources: ['goodreads-app-store'], note: 'L’etiqueta declara «Datos sensibles»; els llibres llegits poden revelar conviccions.' }),
      row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['goodreads-app-store', 'goodreads-privacy-policy'], note: 'Per convidar persones i trobar amistats.' }),
      row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['goodreads-privacy-policy'] }),
      row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['goodreads-privacy-policy'], note: 'Missatges privats entre membres; la política adverteix que en poden quedar còpies.' }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['goodreads-privacy-policy', 'goodreads-app-store'] }),
      row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['goodreads-privacy-policy'], note: 'Es pot amagar el cognom al perfil.' }),
      row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', sources: ['goodreads-app-store'] }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', sources: ['goodreads-app-store'] }),
      row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', sources: ['goodreads-app-store'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['goodreads-app-store'] }),
      row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['goodreads-app-store'] }),
    ],
    tracking: {
      crossAppTracking: f('no', 'official', ['goodreads-app-store'], 'L’etiqueta de l’App Store no declara dades utilitzades per rastrejar.'),
      advertisingIdentifiers: unknown('La política remet a l’avís d’anuncis basats en interessos d’Amazon sense detallar-ho.'),
      thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent dels rastrejadors de l’aplicació.'),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['goodreads-privacy-policy'], 'La política diu que fa servir la informació personal per mostrar anuncis basats en interessos.'),
      profiling: f('yes', 'official', ['goodreads-privacy-policy'], 'Les dades de Goodreads es poden correlacionar amb les d’Amazon per millorar els serveis de totes dues.'),
      aiTraining: unknown('La política no en diu res.'),
    },
    sharing: {
      thirdPartySharing: unknown('La política remet a l’avís d’Amazon i no enumera destinataris propis.'),
      intraGroupSharing: f('yes', 'official', ['goodreads-privacy-policy'], 'La informació es pot correlacionar amb la que té Amazon.com i fer-se servir per Goodreads i Amazon.'),
      dataBrokerSales: unknown('La política de Goodreads no ho diu expressament; remet a l’avís d’Amazon.'),
      internationalTransfers: f('yes', 'official', ['goodreads-privacy-policy'], 'L’entitat responsable és als Estats Units; la política no n’indica el mecanisme de transferència.', { mechanism: 'unknown' }),
    },
    transparency: {
      policyClarity: 'low',
      transparencyReport: unknown(),
    },
    retention: {
      definedPeriods: f('no', 'official', ['goodreads-privacy-policy'], 'La política no fixa cap termini de conservació.'),
      dataAfterDeletion: f('partial', 'official', ['goodreads-privacy-policy', 'goodreads-delete-account'], 'Els prestatges i les amistats s’eliminen, però en poden quedar còpies en memòries cau i el perfil d’autor no desapareix.'),
    },
    accountDeletion: {
      possible: f('yes', 'official', ['goodreads-delete-account']),
      selfService: f('yes', 'official', ['goodreads-delete-account'], 'Es pot fer des de l’aplicació, el web mòbil o l’escriptori.'),
      difficulty: 'easy',
      requiresSupportContact: false,
      steps: [
        'A l’aplicació d’iOS, obre el menú «More» i toca «Settings».',
        'Toca «Account Settings» i després «Account».',
        'Toca «Delete my account».',
        'Confirma-ho a la pàgina que apareix.',
      ],
      obstacles: 'L’eliminació és irreversible. Si vols conservar la biblioteca, cal exportar-la abans.',
      dataRetained: 'El perfil d’autor i els registres i ressenyes dels llibres propis, si ets autor; còpies de contingut públic en memòries cau o en mans d’altres persones.',
      sources: ['goodreads-delete-account', 'goodreads-privacy-policy'],
    },
    userRights: {
      dataExport: f('partial', 'official', ['goodreads-privacy-policy'], 'La política remet a la pestanya de configuració per sol·licitar l’accés a les dades «en la mesura que ho exigeixi la llei».'),
      exportFormatQuality: 'unknown',
      rightsExercise: f('partial', 'official', ['goodreads-privacy-policy'], 'Configuració del compte o formulari de contacte; no s’identifica cap representant a la UE.'),
    },
    controls: {
      adPersonalizationOptOut: unknown('La política remet a l’avís d’anuncis basats en interessos d’Amazon sense un control propi.'),
      telemetryOptOut: unknown(),
      granularControls: f('partial', 'official', ['goodreads-privacy-policy'], 'Es pot decidir quines accions surten al feed, si es mostra l’adreça electrònica o el cognom, i les notificacions.'),
      defaultPosture: 'permissive',
      darkPatterns: unknown(),
    },
    security: {
      e2ee: f('no', 'editorial', ['goodreads-privacy-policy'], 'Interpretació pròpia: la política diu que pren mesures «raonables» perquè els missatges siguin privats, sense cap menció al xifratge d’extrem a extrem.', { scope: 'none' }),
      transportEncryption: unknown(),
      atRestEncryption: unknown(),
      mfa: unknown('No hem trobat documentació oficial sobre la verificació en dos passos a Goodreads.'),
      independentAudits: unknown(),
      bugBounty: unknown('Goodreads té una pàgina a HackerOne, però sense programa de recompenses públic visible.'),
      vulnerabilityDisclosure: unknown(),
    },
    review: {
      researchStatus: 'initial',
      lastReviewedAt: WAVE2_DATE,
      incidentsReviewed: true,
      editorialNotes: 'No hem trobat sancions ni filtracions documentades de Goodreads.',
      openQuestions: [
        'Goodreads té entitat responsable o representant a la UE?',
        'Ofereix verificació en dos passos o un canal de notificació de vulnerabilitats propi?',
      ],
    },
  },

  /* ═══════════════════════════ Amazon Music ═══════════════════════════ */
  {
    slug: 'amazon-music',
    name: 'Amazon Music',
    company: 'amazon-europe-core',
    categories: ['musica-i-audio'],
    tagline: 'Música i pòdcasts dins del perfil únic del compte d’Amazon',
    summary:
      'Amazon Music forma part del grup de serveis d’entreteniment que Amazon pot creuar amb la botiga i amb Alexa si hi dones consentiment. Per a Music i Prime Video, l’autoritat de referència a la UE és la bavaresa i no la luxemburguesa. Com a la resta de serveis del compte, no hi ha baixa per servei: només el tancament de tot el compte.',
    platforms: ['ios', 'android', 'web', 'windows', 'macos', 'other'],
    businessModel: 'freemium',
    jurisdiction: 'Unió Europea; reclamacions a l’autoritat de Baviera (Alemanya)',
    links: { website: 'https://music.amazon.es/', ...AMAZON_LINKS, appStore: appStore('510855668') },
    accountRequired: f('yes', 'official', ['amazon-close-account', 'amazon-music-app-store']),
    openSource: f('no', 'official', ['amazon-privacy-notice'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'L’historial d’escolta de música i pòdcasts revela estat d’ànim, ideologia i hàbits diaris. Dins del compte d’Amazon es pot combinar amb compres i interaccions amb Alexa.',
    dataCollection: [
      row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['amazon-privacy-notice', 'amazon-cross-service-consent'], note: 'Historial de reproduccions de música i pòdcasts.' }),
      row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-music-app-store'] }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', sources: ['amazon-music-app-store'], note: 'L’etiqueta declara «Ubicación» sense precisar-ne el grau.' }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-music-app-store'] }),
      row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', sources: ['amazon-music-app-store'], note: 'Contingut de l’usuari, com ara llistes de reproducció.' }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['amazon-music-app-store'] }),
      row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['amazon-music-app-store'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['amazon-music-app-store'] }),
      row('xarxa-i-connectivitat', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-privacy-notice'], note: 'Dades de xarxa per a la qualitat de la reproducció, inclòs el proveïdor d’internet.' }),
      row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['amazon-music-app-store'] }),
      row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-alexa-privacy-faq'], note: 'Quan es demana música a Alexa, la gravació de la petició es fa servir per reproduir-la.' }),
    ],
    tracking: {
      crossAppTracking: f('no', 'official', ['amazon-music-app-store'], 'L’etiqueta de l’App Store no declara dades utilitzades per rastrejar.'),
      advertisingIdentifiers: f('partial', 'official', ['amazon-privacy-notice'], 'L’avís general preveu compartir identificadors publicitaris amb empreses de publicitat per als anuncis d’Amazon.'),
      thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent dels rastrejadors de l’aplicació.'),
    },
    dataUses: {
      targetedAdvertising: f('partial', 'official', ['amazon-cross-service-consent'], 'L’historial de reproducció només personalitza anuncis en altres serveis d’Amazon amb consentiment.', {
        optOutUrl: 'https://www.amazon.es/adprefs',
      }),
      profiling: f('yes', 'official', ['amazon-privacy-notice'], 'Recomanacions a partir de l’historial d’ús de continguts.'),
      aiTraining: unknown('L’avís no concreta si l’historial d’escolta entrena models.'),
    },
    sharing: amazonSharing,
    transparency: amazonTransparency,
    retention: amazonRetention,
    accountDeletion: amazonDeletion('Amazon Music', 'Es perd la música comprada i les llistes, juntament amb la resta de continguts digitals del compte.'),
    userRights: amazonRights,
    controls: {
      adPersonalizationOptOut: amazonAdOptOut,
      telemetryOptOut: unknown(),
      granularControls: f('partial', 'official', ['amazon-cross-service-consent'], 'Es pot refusar el creuament de dades entre serveis sense perdre el servei contractat.'),
      defaultPosture: 'mixed',
      darkPatterns: unknown(),
    },
    security: {
      e2ee: na('Un servei de música no transporta comunicacions privades entre persones.'),
      ...amazonSecurity('510855668'),
    },
    review: amazonReview(['Quant de temps es conserva l’historial de reproduccions mentre el compte és actiu?']),
  },

  /* ═══════════════════════════ Amazon Prime Video ═══════════════════════════ */
  {
    slug: 'amazon-prime-video',
    name: 'Amazon Prime Video',
    company: 'amazon-europe-core',
    categories: ['video-i-streaming'],
    tagline: 'Anuncis per defecte dins d’una subscripció de pagament, llevat que paguis més',
    summary:
      'Des del 9 d’abril de 2024 Prime Video mostra anuncis a Espanya a qui no paga un suplement mensual, i el web declara 103 empreses que hi fan servir galetes per mostrar i mesurar anuncis personalitzats. L’historial de visualització es pot creuar amb la botiga i la resta de serveis d’Amazon si hi dones consentiment. Als Estats Units, la FTC va obtenir el 2025 un acord rècord per les pràctiques d’alta i baixa de Prime.',
    platforms: ['ios', 'android', 'web', 'windows', 'macos', 'other'],
    businessModel: 'subscription',
    jurisdiction: 'Unió Europea (Amazon Digital UK i Amazon Digital Spain com a proveïdors); reclamacions a l’autoritat de Baviera',
    links: {
      website: 'https://www.primevideo.com/',
      ...AMAZON_LINKS,
      terms: 'https://www.primevideo.com/help?nodeId=202064890',
      appStore: appStore('545519333'),
    },
    accountRequired: f('yes', 'official', ['amazon-prime-video-provider', 'amazon-close-account'], 'Cal una subscripció Prime o Prime Video vinculada al compte d’Amazon.'),
    openSource: f('no', 'official', ['amazon-privacy-notice'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'Què es mira, quan i durant quant de temps permet inferir gustos, ideologia, situació familiar i horaris. Amb consentiment, Amazon ho fa servir per recomanar i personalitzar anuncis en tots els seus serveis.',
    dataCollection: [
      row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['amazon-privacy-notice', 'amazon-cross-service-consent'], note: 'Inclou durada i nombre de reproduccions i descàrregues simultànies.' }),
      row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-prime-video-app-store'] }),
      row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-prime-video-app-store'], note: 'L’etiqueta declara «Información financiera».' }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['amazon-prime-video-app-store'], note: 'L’etiqueta declara «Ubicación» sense precisar-ne el grau; el catàleg depèn del país.' }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-prime-video-app-store'] }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['amazon-prime-video-app-store'] }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['amazon-cross-service-consent'], note: 'Al web, amb consentiment, 103 terceres empreses fan servir galetes per mostrar i mesurar anuncis personalitzats.' }),
      row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['amazon-prime-video-app-store'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['amazon-prime-video-app-store'] }),
      row('xarxa-i-connectivitat', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-privacy-notice'] }),
      row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['amazon-prime-video-app-store'] }),
    ],
    tracking: {
      crossAppTracking: f('no', 'official', ['amazon-prime-video-app-store'], 'L’etiqueta de l’aplicació d’iOS no declara rastreig; al web, en canvi, hi ha galetes publicitàries de 103 terceres empreses si s’accepten.'),
      advertisingIdentifiers: f('partial', 'official', ['amazon-privacy-notice'], 'L’avís general preveu compartir identificadors publicitaris amb empreses de publicitat.'),
      thirdPartyTrackersPresent: f('yes', 'official', ['amazon-cross-service-consent'], 'El bàner de galetes de primevideo.com declara 103 terceres empreses amb galetes publicitàries.'),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['amazon-cross-service-consent', 'amazon-prime-video-ads-2024'], 'El servei inclou anuncis per defecte; la personalització amb dades d’altres serveis d’Amazon requereix consentiment.', {
        optOutUrl: 'https://www.amazon.es/adprefs',
      }),
      profiling: f('yes', 'official', ['amazon-privacy-notice'], 'Recomanacions a partir de l’historial de visualització.'),
      aiTraining: unknown('L’avís no concreta si l’historial de visualització entrena models.'),
    },
    sharing: amazonSharing,
    transparency: amazonTransparency,
    retention: amazonRetention,
    accountDeletion: amazonDeletion('Prime Video', 'Es perden les pel·lícules i sèries comprades o llogades, i la resta de continguts digitals.'),
    userRights: amazonRights,
    controls: {
      adPersonalizationOptOut: amazonAdOptOut,
      telemetryOptOut: unknown(),
      granularControls: f('partial', 'official', ['amazon-cross-service-consent'], 'Es pot refusar el creuament de dades entre serveis i les galetes publicitàries; per no veure anuncis cal pagar.'),
      defaultPosture: 'permissive',
      darkPatterns: f('yes', 'regulator', ['amazon-prime-video-ftc-2025'], 'La FTC va acusar Amazon d’inscriure persones a Prime sense consentiment i de dificultar-ne la baixa; l’acord obliga a oferir un botó clar per rebutjar Prime i una baixa senzilla. El cas és dels Estats Units.'),
      darkPatternList: [
        {
          type: 'hidden-exit',
          severity: 'high',
          description: 'Procés de cancel·lació de Prime dissenyat per dificultar la baixa, segons la FTC, que el 2025 va obtenir 1.000 milions de dòlars de sanció i 1.500 milions en reemborsaments.',
          sources: ['amazon-prime-video-ftc-2025'],
        },
      ],
    },
    security: {
      e2ee: na('Un servei de vídeo a la carta no transporta comunicacions privades entre persones.'),
      ...amazonSecurity('545519333'),
    },
    review: amazonReview(
      ['Quines dades es fan servir exactament per personalitzar els anuncis dins de Prime Video si no es dona el consentiment entre serveis?'],
      'L’acord amb la FTC és dels Estats Units i no s’aplica directament a Espanya, però documenta el disseny del procés de baixa de la subscripció que dona accés a Prime Video.',
    ),
  },

  /* ═══════════════════════════ Twitch ═══════════════════════════ */
  {
    slug: 'twitch',
    name: 'Twitch',
    company: 'twitch-interactive',
    categories: ['video-i-streaming', 'comunitats-i-forums'],
    tagline: 'Directes amb rastreig publicitari, responsable als Estats Units i una filtració el 2021',
    summary:
      'Twitch és l’única aplicació del lot que declara a l’App Store dades utilitzades per rastrejar. El responsable del tractament és Twitch Interactive, Inc., a San Francisco, amb un representant a Alemanya; la política permet combinar les dades amb les de la clientela d’Amazon i fer-les servir per desenvolupar IA generativa. El 2021 una filtració de 125 GB va exposar el codi font i els pagaments a creadors, i Turquia la va sancionar el 2024.',
    platforms: ['ios', 'android', 'web', 'other'],
    businessModel: 'advertising',
    jurisdiction: 'Estats Units (Twitch Interactive, Inc.), amb representant a la UE a Múnic',
    links: {
      website: 'https://www.twitch.tv/',
      privacyPolicy: 'https://www.twitch.tv/p/es-es/legal/privacy-notice/',
      privacyCenter: 'https://www.twitch.tv/p/es-es/legal/privacy-choices/',
      appStore: appStore('460177396'),
    },
    accountRequired: f('partial', 'official', ['twitch-privacy-notice'], 'Es poden veure emissions sense compte; xatejar, seguir canals o emetre el requereix.'),
    openSource: f('no', 'official', ['twitch-privacy-notice'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'Els canals que se segueixen, els xats i les subscripcions dibuixen interessos i relacions; per a qui emet, s’hi afegeixen la veu, la imatge i les dades de pagament. Els xats són públics per naturalesa i els poden recollir tercers.',
    dataCollection: [
      row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['twitch-privacy-notice'] }),
      row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['twitch-privacy-notice'], note: 'Xats públics i xiuxiuejos privats.' }),
      row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['twitch-privacy-notice'], note: 'Emissions, clips i imatge de qui emet.' }),
      row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['twitch-privacy-notice'] }),
      row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['twitch-privacy-notice'] }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['twitch-privacy-notice'], note: 'Es pot compartir amb socis publicitaris perquè la comparin amb les seves dades.' }),
      row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['twitch-privacy-notice', 'twitch-2fa'], note: 'En activar la verificació en dos passos es crea automàticament un compte d’Authy lligat al número.' }),
      row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['compliment-legal'], sources: ['twitch-privacy-notice'] }),
      row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['twitch-privacy-notice', 'twitch-app-store'] }),
      row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['twitch-privacy-notice', 'twitch-app-store'] }),
      row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['twitch-privacy-notice', 'twitch-app-store'], note: 'Identificador de dispositiu reinicialitzable compartit amb socis publicitaris.' }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['twitch-privacy-notice'], note: 'Els anunciants que serveixen anuncis directament al dispositiu la reben automàticament.' }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['twitch-privacy-notice'] }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', sources: ['twitch-app-store'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['twitch-privacy-notice', 'twitch-app-store'] }),
      row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['twitch-app-store'] }),
    ],
    tracking: {
      crossAppTracking: f('yes', 'official', ['twitch-app-store', 'twitch-privacy-notice'], 'L’etiqueta declara identificadors utilitzats per rastrejar, i la política preveu anuncis fora de Twitch amb socis publicitaris.'),
      advertisingIdentifiers: f('yes', 'official', ['twitch-privacy-notice'], 'La política preveu compartir identificadors d’anuncis mòbils amb xarxes publicitàries.'),
      thirdPartyTrackersPresent: f('yes', 'official', ['twitch-privacy-notice', 'twitch-privacy-choices'], 'Serveis d’analítica i xarxes publicitàries de tercers, i mesura de Nielsen.'),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['twitch-privacy-notice'], 'Anuncis personalitzats dins i fora de Twitch; la política no respon als senyals «Do Not Track».'),
      profiling: f('yes', 'official', ['twitch-privacy-notice'], 'Recomanacions de contingut i combinació amb dades de la clientela d’Amazon.'),
      aiTraining: f('yes', 'official', ['twitch-privacy-notice'], 'La política preveu fer servir les dades per desenvolupar o implementar models i serveis d’IA generativa.'),
    },
    sharing: {
      thirdPartySharing: f('yes', 'official', ['twitch-privacy-notice'], 'Proveïdors, socis publicitaris i d’analítica, desenvolupadors d’extensions i serveis connectats com Discord, Steam o Riot.'),
      intraGroupSharing: f('yes', 'official', ['twitch-privacy-notice'], 'Les dades de Twitch es poden combinar amb les de la clientela d’Amazon, i totes dues les poden fer servir per als seus productes.'),
      dataBrokerSales: f('no', 'official', ['twitch-privacy-notice'], 'Twitch declara que no ven la informació personal de les persones usuàries.'),
      internationalTransfers: f('yes', 'official', ['twitch-privacy-notice'], 'Les dades es poden tractar als Estats Units i en altres països; la política no n’indica el mecanisme.', { mechanism: 'unknown' }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('yes', 'official', ['twitch-transparency'], 'Informes de seguretat, de peticions governamentals i policials, i els exigits per la Llei de serveis digitals.', {
        url: 'https://safety.twitch.tv/s/article/Twitch-Transparency-Reporting?language=en_US',
      }),
    },
    retention: {
      definedPeriods: f('partial', 'official', ['twitch-privacy-notice', 'twitch-delete-account'], 'L’únic termini concret és el de l’eliminació (90 dies); la resta es conserva el temps necessari.'),
      dataAfterDeletion: f('partial', 'official', ['twitch-delete-account'], 'Llevat d’obligacions legals o reclamacions, no conserva el contingut, el contacte ni el nom d’usuari; pot conservar dades limitades per motius legals i de seguretat.'),
    },
    accountDeletion: {
      possible: f('yes', 'official', ['twitch-delete-account', 'twitch-privacy-choices']),
      selfService: f('yes', 'official', ['twitch-delete-account'], 'Des de la pàgina «Delete Account»; indicar el motiu és opcional.'),
      directUrl: 'https://www.twitch.tv/user/delete-account',
      difficulty: 'easy',
      waitingPeriodDays: 90,
      requiresSupportContact: false,
      steps: [
        'Inicia la sessió i ves a twitch.tv/user/delete-account.',
        'Comprova que és el compte correcte i, si vols, indica’n el motiu.',
        'Prem «Delete Account».',
        'No tornis a iniciar la sessió durant els 90 dies de tramitació, perquè s’aturaria l’eliminació.',
      ],
      obstacles: 'Els comptes de Partner o d’Afiliat s’han de desvincular primer amb atenció al client. Desactivar el compte no és el mateix que eliminar-lo.',
      dataRetained: 'Dades limitades per obligacions legals, reclamacions o seguretat.',
      sources: ['twitch-delete-account', 'twitch-privacy-choices'],
    },
    userRights: {
      dataExport: f('partial', 'official', ['twitch-privacy-notice', 'twitch-privacy-choices'], 'L’accés i la portabilitat es demanen a atenció al client («Preguntas sobre privacidad»); els vídeos es poden descarregar des de l’Estudi de vídeo.'),
      exportFormatQuality: 'unknown',
      rightsExercise: f('yes', 'official', ['twitch-privacy-notice'], 'Formulari de suport, privacy@twitch.tv (també DPO) i representant a la UE, Twitch Interactive Germany GmbH.', {
        url: 'mailto:privacy@twitch.tv',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('partial', 'official', ['twitch-privacy-choices'], 'Preferències de galetes, configuració de seguiment del dispositiu i pàgines d’exclusió de la indústria publicitària; no hi ha un interruptor propi per a tots els anuncis personalitzats.'),
      telemetryOptOut: unknown(),
      granularControls: f('partial', 'official', ['twitch-privacy-choices'], 'Bloqueig de xiuxiuejos de desconeguts, regals, connexions amb serveis de tercers i extensions.'),
      defaultPosture: 'permissive',
      darkPatterns: unknown('No hem documentat patrons foscos específics de Twitch.'),
    },
    security: {
      e2ee: f('no', 'editorial', ['twitch-privacy-notice'], 'Interpretació pròpia: la política inclou els xats i les comunicacions entre les dades que Twitch recull i modera, cosa incompatible amb un xifratge d’extrem a extrem.', { scope: 'none' }),
      transportEncryption: unknown('La política no ho concreta.'),
      atRestEncryption: f('partial', 'official', ['twitch-breach-2021-update'], 'Twitch va explicar el 2021 que les contrasenyes es desen amb hash bcrypt; no hi ha informació sobre la resta de dades.'),
      mfa: f('yes', 'official', ['twitch-2fa'], 'Verificació en dos passos per SMS o aplicació TOTP, obligatòria per a Afiliats i Partners. Activar-la crea un compte d’Authy lligat al telèfon.', {
        methods: ['sms', 'totp'],
      }),
      independentAudits: unknown(),
      bugBounty: unknown('No hem pogut verificar un programa de recompenses oficial vigent.'),
      vulnerabilityDisclosure: f('yes', 'official', ['twitch-security'], 'Formulari de divulgació responsable a la pàgina de seguretat.'),
    },
    review: {
      researchStatus: 'documented',
      lastReviewedAt: WAVE2_DATE,
      incidentsReviewed: true,
      editorialNotes: 'La política espanyola indica una data de modificació ambigua («08/12/2026»); l’hem llegida el 22 de setembre de 2026.',
      openQuestions: [
        'Quin mecanisme de transferència internacional fa servir Twitch per a les dades de persones de la UE?',
        'Té Twitch un programa de recompenses oficial actiu?',
      ],
    },
  },

  /* ═══════════════════════════ Amazon Alexa ═══════════════════════════ */
  {
    slug: 'amazon-alexa',
    name: 'Amazon Alexa',
    company: 'amazon-europe-core',
    categories: ['llar-connectada', 'assistents-d-ia'],
    tagline: 'Gravacions de veu al núvol, revisades per persones i sense opció de processament local',
    summary:
      'Tot el que es diu a Alexa després de la paraula d’activació es grava i s’envia al núvol d’Amazon, on es transcriu i pot servir per entrenar models amb revisió humana d’una mostra. Des del març de 2025 els Echo ja no permeten processar la veu al dispositiu. Als Estats Units, Amazon va pagar 25 milions de dòlars el 2023 per haver conservat indefinidament les gravacions d’infants.',
    platforms: ['ios', 'android', 'other'],
    businessModel: 'commerce',
    jurisdiction: 'Luxemburg, per a persones usuàries de la Unió Europea',
    links: {
      website: 'https://www.amazon.es/alexa',
      ...AMAZON_LINKS,
      privacyCenter: 'https://www.amazon.es/configuraciondeprivacidaddealexa',
      appStore: appStore('944011620'),
    },
    accountRequired: f('yes', 'official', ['amazon-alexa-privacy-faq'], 'Les gravacions i la configuració s’associen al compte d’Amazon.'),
    openSource: f('no', 'official', ['amazon-privacy-notice'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'Les peticions de veu, els dispositius de la llar, els contactes importats i les rutines descriuen la vida domèstica amb molt detall: horaris, qui hi viu, què es compra i com sona cada veu. L’etiqueta declara fins i tot dades de salut i dades sensibles.',
    dataCollection: [
      row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'millora-del-producte', 'entrenament-de-models-dia'], sources: ['amazon-alexa-privacy-faq'], note: 'Inclou una fracció de segon anterior a la paraula d’activació i les activacions falses.' }),
      row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['personalitzacio-de-continguts'], sources: ['amazon-alexa-privacy-faq'], note: 'ID de veu (model acústic al núvol) i ID visual (a l’Echo Show, desat al dispositiu), amb consentiment.' }),
      row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-alexa-privacy-faq', 'amazon-alexa-app-store'], note: 'Importació per a Alexa Comunicaciones, que es pot desactivar.' }),
      row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['amazon-alexa-privacy-faq'], note: 'Els missatges d’Alexa Comunicaciones es processen al núvol per convertir veu i text.' }),
      row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['amazon-alexa-privacy-faq', 'amazon-alexa-app-store'], note: 'Es comparteix amb les skills a les quals s’hi dona permís.' }),
      row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', sources: ['amazon-alexa-app-store'], note: 'L’etiqueta declara «Salud y forma física».' }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-alexa-privacy-faq'], note: 'Tipus i estat dels dispositius de la llar connectada.' }),
      row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-alexa-app-store'] }),
      row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-alexa-app-store'] }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', sources: ['amazon-alexa-app-store', 'amazon-alexa-privacy-faq'] }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-alexa-app-store'] }),
      row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', sources: ['amazon-alexa-app-store'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['amazon-alexa-app-store'] }),
      row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['amazon-alexa-app-store'] }),
    ],
    tracking: {
      crossAppTracking: f('no', 'official', ['amazon-alexa-app-store'], 'L’etiqueta de l’App Store no declara dades utilitzades per rastrejar.'),
      advertisingIdentifiers: f('partial', 'official', ['amazon-privacy-notice'], 'L’avís general preveu compartir identificadors publicitaris amb empreses de publicitat.'),
      thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent dels rastrejadors de l’aplicació.'),
    },
    dataUses: {
      targetedAdvertising: f('partial', 'official', ['amazon-cross-service-consent'], 'Les interaccions amb Alexa personalitzen anuncis en altres serveis d’Amazon només amb consentiment.', {
        optOutUrl: 'https://www.amazon.es/adprefs',
      }),
      profiling: f('yes', 'official', ['amazon-alexa-privacy-faq'], 'Alexa s’adapta a la manera de parlar, el vocabulari i les preferències de cada persona.'),
      aiTraining: f('yes', 'official', ['amazon-alexa-privacy-faq'], 'Les interaccions entrenen els models d’aprenentatge automàtic d’Amazon, amb revisió humana d’una petita mostra; es pot gestionar a la configuració de privadesa. Els sistemes entrenats es conserven encara que s’esborrin les dades.'),
    },
    sharing: {
      ...amazonSharing,
      thirdPartySharing: f('yes', 'official', ['amazon-alexa-privacy-faq'], 'Les skills de tercers reben el contingut de la petició (no la gravació) i, amb permís, la ubicació; cada desenvolupador aplica la seva política.'),
    },
    transparency: amazonTransparency,
    retention: {
      definedPeriods: f('yes', 'official', ['amazon-alexa-privacy-faq'], 'Es pot triar esborrar les gravacions als 3 o 18 mesos o no desar-les; les transcripcions es conserven 30 dies en aquest darrer cas, i l’ID de veu s’esborra si no es reconeix en 18 mesos.'),
      dataAfterDeletion: f('partial', 'official', ['amazon-alexa-privacy-faq'], 'Esborrar les gravacions no elimina els registres d’accions, les dades en poder de les skills ni els models ja entrenats.'),
      periods: [
        { dataType: 'veu-i-audio', period: '3 mesos, 18 mesos o sense desar, segons la configuració triada', sources: ['amazon-alexa-privacy-faq'] },
        { dataType: 'dades-biometriques', period: 'L’ID de veu i l’ID visual s’esborren si no reconeixen la persona en 18 mesos', sources: ['amazon-alexa-privacy-faq'] },
      ],
    },
    accountDeletion: amazonDeletion('Alexa', 'Es perden també les compres digitals i l’accés als dispositius Echo associats.'),
    userRights: amazonRights,
    controls: {
      adPersonalizationOptOut: amazonAdOptOut,
      telemetryOptOut: f('partial', 'official', ['amazon-alexa-privacy-faq'], 'Es pot gestionar l’ús de les gravacions per millorar els serveis, però no evitar que s’enviïn al núvol.'),
      granularControls: f('yes', 'official', ['amazon-alexa-privacy-faq'], 'Revisar i esborrar gravacions, triar-ne la conservació, desactivar la importació de contactes, eliminar l’ID de veu i apagar el micròfon amb un botó físic.'),
      defaultPosture: 'mixed',
      darkPatterns: unknown('No hem documentat patrons foscos específics de l’aplicació.'),
    },
    security: {
      e2ee: f('no', 'official', ['amazon-alexa-privacy-faq'], 'Les gravacions i els missatges d’Alexa Comunicaciones es processen i es transcriuen al núvol d’Amazon.', { scope: 'none' }),
      ...amazonSecurity('944011620'),
    },
    review: amazonReview(
      ['Quina proporció d’interaccions revisen persones i es pot desactivar del tot aquesta revisió a la UE?'],
      'La retirada de l’opció «No enviar grabaciones de voz» el 28 de març de 2025 afectava uns quants models d’Echo en anglès als Estats Units; l’hem recollit com a incident perquè canvia el que és possible, no perquè hi hagi constància que s’apliqués a Espanya.',
    ),
  },

  /* ═══════════════════════════ Amazon Photos ═══════════════════════════ */
  {
    slug: 'amazon-photos',
    name: 'Amazon Photos',
    company: 'amazon-europe-core',
    categories: ['emmagatzematge-al-nuvol', 'edicio-de-foto-i-video'],
    tagline: 'Còpia de fotos al núvol amb reconeixement de cares i objectes',
    summary:
      'Amazon Photos analitza les fotos i els vídeos amb reconeixement d’imatges per etiquetar-los per objectes, accions i ambients, i per agrupar-los per persones. Les etiquetes es conserven fins que es desactiva la funció o es tanca el compte. Com que el servei va lligat al compte d’Amazon, no es pot donar de baixa per separat.',
    platforms: ['ios', 'android', 'web', 'windows', 'macos', 'other'],
    businessModel: 'freemium',
    jurisdiction: 'Luxemburg, per a persones usuàries de la Unió Europea',
    links: { website: 'https://www.amazon.es/photos', ...AMAZON_LINKS, appStore: appStore('621574163') },
    accountRequired: f('yes', 'official', ['amazon-photos-image-recognition', 'amazon-close-account']),
    openSource: f('no', 'official', ['amazon-privacy-notice'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'Una fototeca completa conté cares de familiars i amistats, llocs, dates, documents fotografiats i situacions íntimes. El reconeixement de persones converteix aquestes imatges en dades biomètriques organitzades.',
    dataCollection: [
      row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-photos-app-store', 'amazon-privacy-notice'] }),
      row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['amazon-photos-image-recognition'], note: 'La funció «Agrupar personas» agrupa les fotos per cares; es pot desactivar i pot no estar disponible a tots els països.' }),
      row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-privacy-notice'], note: 'L’avís esmenta les metadades de les imatges (noms de fitxer, dates, hores i ubicació).' }),
      row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-privacy-notice'] }),
      row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-photos-app-store'] }),
      row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-photos-app-store'] }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-photos-app-store'] }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', sources: ['amazon-photos-app-store'] }),
      row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', sources: ['amazon-photos-app-store'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['amazon-photos-app-store'] }),
      row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['amazon-photos-app-store'] }),
    ],
    tracking: {
      crossAppTracking: f('no', 'official', ['amazon-photos-app-store'], 'L’etiqueta de l’App Store no declara dades utilitzades per rastrejar.'),
      advertisingIdentifiers: f('partial', 'official', ['amazon-privacy-notice'], 'L’avís general preveu compartir identificadors publicitaris amb empreses de publicitat.'),
      thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi independent dels rastrejadors de l’aplicació.'),
    },
    dataUses: {
      targetedAdvertising: f('partial', 'official', ['amazon-cross-service-consent'], 'L’ús d’Amazon Photos és dins dels serveis de dispositius que només personalitzen anuncis amb consentiment.', {
        optOutUrl: 'https://www.amazon.es/adprefs',
      }),
      profiling: f('partial', 'official', ['amazon-photos-image-recognition'], 'Les fotos s’etiqueten automàticament per persones, objectes, accions i ambients; a més, amb l’icona «Lente» es poden cercar productes a partir d’una foto.'),
      aiTraining: unknown('No hem trobat cap afirmació oficial sobre si les fotos s’utilitzen per entrenar models.'),
    },
    sharing: amazonSharing,
    transparency: amazonTransparency,
    retention: {
      ...amazonRetention,
      periods: [
        { dataType: 'dades-biometriques', period: 'Fins que es desactiva la funció d’etiquetatge o es tanca el compte', sources: ['amazon-photos-image-recognition'] },
      ],
    },
    accountDeletion: amazonDeletion('Amazon Photos', 'Cal descarregar abans totes les fotos i vídeos, perquè es perden amb la resta de continguts del compte.'),
    userRights: amazonRights,
    controls: {
      adPersonalizationOptOut: amazonAdOptOut,
      telemetryOptOut: unknown(),
      granularControls: f('partial', 'official', ['amazon-photos-image-recognition'], 'Es poden activar i desactivar per separat «Etiquetar fotos» i «Agrupar personas».'),
      defaultPosture: 'unknown',
      darkPatterns: unknown(),
    },
    security: {
      e2ee: f('no', 'editorial', ['amazon-photos-image-recognition'], 'Interpretació pròpia: el reconeixement d’imatges s’aplica a les fotos emmagatzemades, cosa que requereix que Amazon hi pugui accedir.', { scope: 'none' }),
      ...amazonSecurity('621574163'),
    },
    review: amazonReview([
      'L’agrupació per cares ve activada per defecte a Espanya o cal activar-la?',
      'Les fotos o les etiquetes serveixen per entrenar models d’Amazon?',
    ]),
  },
]

export const lot: SeedLot = {
  companies: [
    {
      slug: 'audible-gmbh',
      name: 'Audible',
      legalName: 'Audible GmbH',
      parent: 'amazon',
      description:
        'Filial d’Amazon responsable de les dades del servei d’audiollibres a Alemanya, França, Itàlia i Espanya. Per a alguns tractaments n’és corresponsable amb altres empreses del grup.',
      headquartersCountry: 'DE',
      euEstablishment: 'DE',
      ownership: 'subsidiary',
      primaryRevenueModel: 'subscription',
      website: 'https://www.audible.es/',
      productDomains: ['audible.es', 'audible.de', 'audible.fr', 'audible.it', 'audible.co.uk', 'audible.com'],
      privacyContact: 'eu-privacy@amazon.es',
    },
    {
      slug: 'goodreads-llc',
      name: 'Goodreads',
      legalName: 'Goodreads LLC',
      parent: 'amazon',
      description:
        'Xarxa social de lectura dels Estats Units, filial d’Amazon des del 2013. La seva política remet a l’avís de privadesa d’Amazon i no identifica cap entitat a la UE.',
      headquartersCountry: 'US',
      ownership: 'subsidiary',
      primaryRevenueModel: 'advertising',
      website: 'https://www.goodreads.com/',
      productDomains: ['goodreads.com'],
    },
    {
      slug: 'twitch-interactive',
      name: 'Twitch',
      legalName: 'Twitch Interactive, Inc.',
      parent: 'amazon',
      description:
        'Plataforma d’emissions en directe amb seu a San Francisco, filial d’Amazon. És la responsable del tractament per a tot el món i té Twitch Interactive Germany GmbH, a Múnic, com a representant a la UE.',
      headquartersCountry: 'US',
      euEstablishment: 'DE',
      ownership: 'subsidiary',
      primaryRevenueModel: 'advertising',
      website: 'https://www.twitch.tv/',
      productDomains: ['twitch.tv'],
      privacyContact: 'privacy@twitch.tv',
    },
  ],
  sources: [
    /* ── Etiquetes de l’App Store ── */
    s('amazon-kindle-app-store', 'Amazon Kindle — App Store (Privacidad de la app)', appStore('302584613'), 'Apple / AMZN Mobile LLC', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, ubicació, contacte, contingut, cerques, identificadors, ús, diagnòstics i altres dades, totes vinculades a la identitat; cap dada declarada per rastrejar.',
    }),
    s('audible-app-store', 'Audible: Audiolibros y podcast — App Store (Privacidad de la app)', appStore('379693831'), 'Apple / Audible, Inc.', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, ubicació, contacte, contingut, cerques, identificadors, ús i diagnòstics vinculats a la identitat; cap dada per rastrejar.',
    }),
    s('goodreads-app-store', 'Goodreads: Book Tracker & More — App Store (Privacidad de la app)', appStore('355833469'), 'Apple / Goodreads', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, contacte, contactes, contingut, cerques, identificadors, ús, dades sensibles, diagnòstics i altres, vinculats a la identitat; cap dada per rastrejar.',
    }),
    s('amazon-music-app-store', 'Amazon Music — App Store (Privacidad de la app)', appStore('510855668'), 'Apple / AMZN Mobile LLC', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, ubicació, contacte, contingut, cerques, identificadors, ús, diagnòstics i altres dades vinculades; cap dada per rastrejar.',
    }),
    s('amazon-prime-video-app-store', 'Amazon Prime Video — App Store (Privacidad de la app)', appStore('545519333'), 'Apple / AMZN Mobile LLC', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, informació financera, ubicació, contacte, contingut, cerques, identificadors, ús, diagnòstics i altres, vinculats; cap dada per rastrejar.',
    }),
    s('twitch-app-store', 'Twitch: emisiones en directo — App Store (Privacidad de la app)', appStore('460177396'), 'Apple / Twitch Interactive, Inc.', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors utilitzats per rastrejar, i compres, contacte, contingut, cerques, identificadors, ús, diagnòstics i altres dades vinculades a la identitat.',
    }),
    s('amazon-alexa-app-store', 'Amazon Alexa — App Store (Privacidad de la app)', appStore('944011620'), 'Apple / AMZN Mobile LLC', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: salut i forma física, compres, informació financera, ubicació, contacte, contactes, contingut, cerques, identificadors, ús, dades sensibles, diagnòstics i altres, tot vinculat; cap dada per rastrejar.',
    }),
    s('amazon-photos-app-store', 'Amazon Photos — App Store (Privacidad de la app)', appStore('621574163'), 'Apple / AMZN Mobile LLC', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, informació financera, contacte, contingut, cerques, identificadors, ús, diagnòstics i altres dades vinculades; cap dada per rastrejar.',
    }),

    /* ── Amazon (serveis del compte) ── */
    s('amazon-cross-service-consent', 'Acerca del uso de información personal en Amazon Services', 'https://www.primevideo.com/help?nodeId=TTMAnFoZYT0qLhmEdG', 'Amazon', 'privacy-center', 'primary', {
      language: 'es',
      excerpt: 'A partir del 6 de marzo de 2024, la legislación de la UE exige tu consentimiento para el uso de tu información personal en los servicios de Amazon.',
      summary: 'Explica el consentiment per creuar dades entre la botiga, Alexa, els serveis d’entreteniment (Video, Music, Audible, Kindle, Twitch) i els dispositius (Photos inclòs) per recomanar i personalitzar anuncis. El bàner de galetes declara 103 terceres empreses.',
    }),
    s('amazon-prime-video-provider', 'Información sobre el proveedor de servicios Amazon Prime Video y términos y políticas aplicables', 'https://www.primevideo.com/help?nodeId=202064890', 'Amazon', 'terms', 'primary', {
      language: 'es',
      summary: 'Identifica els proveïdors de Prime Video a la UE (Amazon Digital UK, Amazon Digital Germany i, com a venedor registrat a Espanya, Amazon Digital Spain) i les polítiques aplicables.',
    }),
    s('amazon-2sv', '¿Qué es la verificación en dos pasos?', 'https://www.amazon.es/gp/help/customer/display.html?nodeId=G3PWZPU52FKN7PW4', 'Amazon', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Com activar la verificació en dos passos del compte d’Amazon amb codi per SMS o aplicació d’autenticació.',
    }),
    s('amazon-law-enforcement-requests', 'Solicitudes de información para la aplicación de la ley', 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GYSDRGWQ2C2CRYEF', 'Amazon', 'transparency-report', 'primary', {
      language: 'es',
      summary: 'Principis d’Amazon davant peticions governamentals i enllaços als informes semestrals (el darrer, del primer semestre de 2026).',
    }),
    s('amazon-security-txt', 'security.txt — amazon.com', 'https://www.amazon.com/.well-known/security.txt', 'Amazon', 'technical-doc', 'primary', {
      summary: 'Fitxer security.txt que dirigeix les notificacions de vulnerabilitats al programa d’Amazon a HackerOne.',
    }),
    s('amazon-vrp-hackerone', 'Amazon Vulnerability Research Program', 'https://hackerone.com/amazonvrp', 'HackerOne / Amazon', 'other', 'primary', {
      summary: 'Programa de recompenses d’Amazon. L’abast consultat inclou amb recompensa les aplicacions d’iOS de Kindle, Music, Prime Video, Alexa i Photos, a més de les botigues i els dispositius.',
    }),
    s('amazon-alexa-privacy-faq', 'Alexa, dispositivos Echo y tu privacidad', 'https://www.amazon.es/gp/help/customer/display.html?nodeId=GVP69FUJ48X9DK8V', 'Amazon', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Preguntes freqüents de privadesa d’Alexa: enviament de gravacions al núvol, opcions de conservació (3 o 18 mesos o sense desar), revisió humana per entrenar models, ID de veu i visual, contactes i skills.',
    }),
    s('amazon-photos-image-recognition', 'Obtener más información sobre el reconocimiento de imágenes en Amazon Photos', 'https://www.amazon.es/gp/help/customer/display.html?nodeId=G3BC9SVPPEVSB9T8', 'Amazon', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Descriu les funcions «Etiquetar fotos» i «Agrupar personas», la conservació de les etiquetes i com desactivar-les.',
    }),
    s('amazon-alexa-ftc-2023', 'FTC and DOJ Charge Amazon with Violating Children’s Privacy Law by Keeping Kids’ Alexa Voice Recordings Forever and Undermining Parents’ Deletion Requests', 'https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-doj-charge-amazon-violating-childrens-privacy-law-keeping-kids-alexa-voice-recordings-forever', 'Federal Trade Commission (EUA)', 'regulator', 'authority', {
      publishedAt: '2023-05-31',
      summary: 'Acord de 25 milions de dòlars per haver conservat indefinidament gravacions d’infants i dades de geolocalització i haver dificultat les peticions d’esborrament dels pares.',
    }),
    s('amazon-alexa-techcrunch-2025', 'Amazon’s Echo is ending its ‘Do Not Send Voice Recordings’ feature, starting March 28', 'https://techcrunch.com/2025/03/15/amazons-echo-will-send-all-voice-recordings-to-the-cloud-starting-march-28/', 'TechCrunch', 'press', 'secondary', {
      publishedAt: '2025-03-15',
      summary: 'Informa de la retirada de l’opció de processament local de la veu en alguns Echo, amb motiu de l’arribada d’Alexa+.',
    }),
    s('amazon-kindle-usb-2025', 'Download & Transfer for Kindle eBooks Going Away on February 26', 'https://blog.the-ebook-reader.com/2025/02/12/download-transfer-for-kindle-ebooks-going-away-on-february-26/', 'The eBook Reader', 'press', 'secondary', {
      publishedAt: '2025-02-12',
      summary: 'Informa que Amazon retira l’opció de descarregar els llibres comprats per transferir-los per USB.',
    }),
    s('amazon-prime-video-ads-2024', 'Amazon Prime Video ya tiene anuncios en España: la única forma de evitarlos será pagando más mensualmente', 'https://www.elespanol.com/elandroidelibre/aplicaciones/20240228/amazon-prime-video-anuncios-espana-unica-forma-evitarlos-pagando/836166435_0.html', 'El Español', 'press', 'secondary', {
      language: 'es',
      publishedAt: '2024-02-28',
      summary: 'Anuncis a Prime Video a Espanya des del 9 d’abril de 2024, llevat que es paguin 1,99 euros més al mes.',
    }),
    s('amazon-prime-video-ftc-2025', 'FTC Secures Historic $2.5 Billion Settlement Against Amazon', 'https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-secures-historic-25-billion-settlement-against-amazon', 'Federal Trade Commission (EUA)', 'regulator', 'authority', {
      publishedAt: '2025-09-25',
      summary: 'Acord per haver inscrit persones a Prime sense consentiment i haver dificultat la baixa: 1.000 milions de dòlars de sanció, 1.500 milions de reemborsament i canvis obligatoris en l’alta i la baixa.',
    }),

    /* ── Audible ── */
    s('audible-privacy-policy', 'Audible UE — Política de Privacidad', 'https://www.audible.es/legal/privacy-policy', 'Audible GmbH', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2024-11-20',
      summary: 'Política europea d’Audible: responsable Audible GmbH, dades d’escolta i de lectura a Kindle, anuncis basats en interessos, compartició amb el grup Amazon, Data Privacy Framework i drets.',
    }),
    s('audible-hackerone', 'Audible — Bug Bounty Program', 'https://hackerone.com/audible', 'HackerOne / Audible', 'other', 'primary', {
      summary: 'Programa de recompenses propi d’Audible a HackerOne, obert a enviaments.',
    }),
    s('audible-help-2sv', 'Audible Ayuda — Gestionar la verificación en dos pasos', 'https://ayuda.audible.es/s/global-search/verificaci%C3%B3n%20en%20dos%20pasos?language=es', 'Audible', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Article d’ajuda sobre com activar i desactivar la verificació en dos passos del compte d’Audible i d’Amazon (consultat a través del cercador de l’ajuda).',
    }),

    /* ── Goodreads ── */
    s('goodreads-privacy-policy', 'Goodreads Privacy Policy', 'https://www.goodreads.com/about/privacy', 'Goodreads LLC', 'privacy-policy', 'primary', {
      publishedAt: '2023-06-27',
      summary: 'Política breu que remet a l’avís de privadesa d’Amazon, avisa que les dades es poden correlacionar amb les d’Amazon i reconeix els anuncis basats en interessos.',
    }),
    s('goodreads-delete-account', 'Delete your Goodreads account', 'https://help.goodreads.com/s/article/000001119', 'Goodreads', 'support-doc', 'primary', {
      summary: 'Passos per eliminar el compte des de l’aplicació o el web, i què no s’elimina (perfil d’autor).',
    }),

    /* ── Twitch ── */
    s('twitch-privacy-notice', 'Aviso de privacidad de Twitch.tv', 'https://www.twitch.tv/p/es-es/legal/privacy-notice/', 'Twitch Interactive, Inc.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de Twitch: responsable als Estats Units, representant a Alemanya, combinació amb dades d’Amazon, publicitat dins i fora de Twitch, IA generativa i transferències internacionals.',
    }),
    s('twitch-privacy-choices', 'Opciones de privacidad de Twitch', 'https://www.twitch.tv/p/es-es/legal/privacy-choices/', 'Twitch Interactive, Inc.', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Controls de privadesa: desactivació i eliminació del compte, connexions, xiuxiuejos, galetes, exclusió publicitària i Nielsen.',
    }),
    s('twitch-delete-account', 'Delete My Twitch Account', 'https://help.twitch.tv/s/article/delete-twitch-account?language=en_US', 'Twitch', 'support-doc', 'primary', {
      summary: 'Diferència entre desactivar i eliminar, termini de 90 dies, què es conserva i passos per eliminar el compte.',
    }),
    s('twitch-2fa', 'Setting up Two-Factor Authentication (2FA)', 'https://help.twitch.tv/s/article/two-factor-authentication?language=en_US', 'Twitch', 'support-doc', 'primary', {
      summary: 'Verificació en dos passos per SMS o TOTP; activar-la crea un compte d’Authy lligat al número de telèfon.',
    }),
    s('twitch-security', 'Twitch.tv — Security', 'https://www.twitch.tv/p/en/security/', 'Twitch', 'support-doc', 'primary', {
      summary: 'Pàgina de seguretat amb consells, verificació en dos passos i formulari de divulgació responsable de vulnerabilitats.',
    }),
    s('twitch-transparency', 'Twitch Transparency Reporting', 'https://safety.twitch.tv/s/article/Twitch-Transparency-Reporting?language=en_US', 'Twitch', 'transparency-report', 'primary', {
      summary: 'Índex dels informes de transparència: seguretat, peticions governamentals i policials, DSA, contingut terrorista i anuncis.',
    }),
    s('twitch-breach-2021-update', 'Updates on the Twitch Security Incident', 'https://blog.twitch.tv/en/2021/10/15/updates-on-the-twitch-security-incident/', 'Twitch', 'other', 'primary', {
      publishedAt: '2021-10-15',
      summary: 'Comunicat de Twitch: la filtració es va deure a un canvi de configuració d’un servidor; no es van exposar contrasenyes (desades amb bcrypt) ni targetes completes, i es van restablir les claus d’emissió.',
    }),
    s('twitch-breach-techcrunch-2021', 'Twitch confirms hack after source code and creator payout data leaks online', 'https://techcrunch.com/2021/10/06/hacker-leaks-twitch-source-code-and-creator-payout-data/', 'TechCrunch', 'press', 'secondary', {
      publishedAt: '2021-10-06',
      summary: 'Cobertura de la filtració de 125 GB amb el codi font i tres anys de pagaments a creadors.',
    }),
    s('twitch-kvkk-2024', 'Turkey sanctions Twitch for user data breach', 'https://dig.watch/updates/turkey-sanctions-twitch-for-user-data-breach', 'Digital Watch Observatory', 'press', 'secondary', {
      publishedAt: '2024-11-18',
      summary: 'L’autoritat turca de protecció de dades (KVKK) va imposar a Twitch 2 milions de lires per la filtració, que va afectar 35.274 persones a Turquia.',
    }),
  ],
  apps,
  incidents: [
    {
      slug: 'amazon-alexa-ftc-coppa-2023',
      title: 'Amazon paga 25 milions de dòlars per conservar gravacions d’infants a Alexa',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['amazon-alexa'],
      company: 'amazon',
      occurredAt: '2023-05-31',
      disclosedAt: '2023-05-31',
      description:
        'La FTC i el Departament de Justícia dels Estats Units van acusar Amazon de conservar per defecte i indefinidament les gravacions de veu d’infants i dades de geolocalització, de fer-les servir per als seus propis fins i de dificultar que els pares n’exercissin l’esborrament. L’acord inclou una sanció civil de 25 milions de dòlars i l’obligació d’esborrar aquestes dades.',
      affectedPeople: 'Infants usuaris d’Alexa als Estats Units i les seves famílies.',
      regulatory: {
        authority: 'Federal Trade Commission i Departament de Justícia (EUA)',
        legalBasis: 'Children’s Online Privacy Protection Act (COPPA) i FTC Act',
        status: 'final',
      },
      sources: ['amazon-alexa-ftc-2023'],
    },
    {
      slug: 'amazon-alexa-processament-local-2025',
      title: 'Els Echo deixen de permetre processar la veu al dispositiu',
      type: 'other',
      severity: 'medium',
      apps: ['amazon-alexa'],
      company: 'amazon',
      occurredAt: '2025-03-28',
      disclosedAt: '2025-03-15',
      description:
        'Amazon va retirar l’opció «No enviar grabaciones de voz» dels pocs models d’Echo que la tenien, de manera que totes les peticions passen a enviar-se al núvol. L’empresa ho va justificar per les funcions d’IA generativa d’Alexa+; qui tenia l’opció activada passava a una configuració que esborra les gravacions després de processar-les.',
      affectedPeople: 'Persones usuàries d’Echo Dot de 4a generació, Echo Show 10 i Echo Show 15 amb l’opció activada.',
      sources: ['amazon-alexa-techcrunch-2025'],
    },
    {
      slug: 'amazon-prime-ftc-2025',
      title: 'Acord de 2.500 milions de dòlars per les pràctiques d’alta i baixa d’Amazon Prime',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['amazon-prime-video'],
      company: 'amazon',
      occurredAt: '2025-09-25',
      disclosedAt: '2025-09-25',
      description:
        'La FTC va acusar Amazon d’inscriure milions de persones a Prime sense consentiment i de dificultar-ne conscientment la baixa amb patrons foscos. L’acord imposa 1.000 milions de dòlars de sanció civil, 1.500 milions de reemborsaments i l’obligació d’oferir un botó clar per rebutjar Prime i una baixa senzilla. És un cas dels Estats Units.',
      affectedPeople: 'Persones subscriptores de Prime als Estats Units.',
      regulatory: {
        authority: 'Federal Trade Commission (EUA)',
        legalBasis: 'FTC Act i Restore Online Shoppers’ Confidence Act',
        status: 'final',
      },
      sources: ['amazon-prime-video-ftc-2025'],
    },
    {
      slug: 'twitch-filtracio-2021',
      title: 'Filtració de 125 GB del codi font i dels pagaments a creadors de Twitch',
      type: 'breach',
      severity: 'high',
      apps: ['twitch'],
      company: 'twitch-interactive',
      occurredAt: '2021-10-04',
      disclosedAt: '2021-10-06',
      description:
        'Un canvi de configuració d’un servidor va permetre accedir a un repositori intern. Es van publicar el codi font de Twitch i tres anys d’informes de pagaments a creadors. Twitch va afirmar que no es van exposar contrasenyes, desades amb bcrypt, ni números de targeta complets, i va restablir totes les claus d’emissió.',
      affectedPeople: 'Creadors amb pagaments inclosos a la filtració; segons Twitch, una petita fracció de les persones usuàries.',
      sources: ['twitch-breach-2021-update', 'twitch-breach-techcrunch-2021'],
    },
    {
      slug: 'twitch-kvkk-2024',
      title: 'Turquia sanciona Twitch amb 2 milions de lires per la filtració de 2021',
      type: 'regulatory-fine',
      severity: 'medium',
      apps: ['twitch'],
      company: 'twitch-interactive',
      occurredAt: '2024-11-16',
      disclosedAt: '2024-11-16',
      description:
        'L’autoritat turca de protecció de dades va concloure que Twitch no tenia mesures de seguretat adequades ni prou avaluació de riscos abans de la filtració, i que no la va notificar a temps: 1,75 milions de lires per la seguretat i 250.000 per la manca de notificació.',
      affectedPeople: '35.274 persones a Turquia.',
      regulatory: {
        authority: 'Kişisel Verileri Koruma Kurumu (Turquia)',
        legalBasis: 'Llei turca de protecció de dades personals (KVKK)',
      },
      sources: ['twitch-kvkk-2024'],
    },
  ],
  storeIds: {
    'amazon-kindle': 'com.amazon.Lassen',
    audible: 'com.audible.iphone',
    goodreads: 'com.goodreads.Goodreads',
    'amazon-music': 'com.amazon.mp3.AmazonCloudPlayer',
    'amazon-prime-video': 'com.amazon.aiv.AIVApp',
    twitch: 'tv.twitch',
    'amazon-alexa': 'com.amazon.echo',
    'amazon-photos': 'com.amazon.CloudDrivePhotos',
  },
}
