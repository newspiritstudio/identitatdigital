import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 13 de la segona onada: comerç electrònic i botigues (idealo, Temu,
 * Zalando, Mi Carrefour, Alibaba.com, MediaMarkt, Action, SHEIN, IKEA i
 * Perfumerías Primor).
 *
 * Cada fitxa parteix de la política de privadesa vigent a Espanya, de
 * l’etiqueta de privadesa de l’App Store i de la pàgina d’eliminació del
 * compte. Els mercats amb venedors de fora de l’EEE (Temu, SHEIN i
 * Alibaba.com) i els programes de fidelització (Carrefour, IKEA, Action) són
 * on hi ha les diferències que importen.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/* ═══════════════════════════ idealo ═══════════════════════════ */
const idealo: AppSeed = {
  slug: 'idealo',
  name: 'idealo',
  company: 'idealo',
  categories: ['comerc-electronic'],
  tagline: 'Comparador de preus que es pot fer servir sense compte, però amb compres i identificadors declarats per rastrejar',
  summary:
    'idealo, filial d’Axel Springer, cobra dels comerços pels clics que hi redirigeix i per això registra quines ofertes consulta cada persona. La llista de desitjos i les alertes de preu funcionen sense compte, però l’etiqueta de l’App Store declara compres, identificadors i dades d’ús utilitzats per rastrejar. Amb consentiment, la política preveu perfils individuals vinculats entre dispositius i una llarga llista de socis publicitaris.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'advertising',
  jurisdiction: 'Alemanya',
  links: {
    website: 'https://www.idealo.es/',
    privacyPolicy: 'https://www.idealo.es/legal/proteccion-de-datos',
    appStore: appStore('454415640'),
  },
  accountRequired: f('no', 'official', ['idealo-privacy-policy'], 'La comparació, la llista de desitjos i les alertes de preu es poden fer servir a l’aplicació sense compte.'),
  openSource: f('no', 'official', ['idealo-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Les cerques i les ofertes consultades mostren què vol comprar una persona abans que ho compri: electrodomèstics, medicaments sense recepta, articles per a nadons. Combinades amb perfils entre dispositius i amb els socis publicitaris del grup Axel Springer, aquestes dades permeten preveure decisions de compra i canvis en la vida de la persona.',
  dataCollection: [
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['idealo-privacy-policy'], note: 'Només per al compte «Mi idealo», el butlletí o les ressenyes de botigues.' }),
    row('contrasenya', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['idealo-privacy-policy'] }),
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['personalitzacio-de-continguts'], sources: ['idealo-privacy-policy'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['idealo-app-store'], note: 'L’etiqueta declara les compres vinculades a la persona i utilitzades per rastrejar.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['idealo-app-store', 'idealo-privacy-policy'], note: 'Adjust, Google, Meta, Criteo, TikTok i altres socis, amb consentiment.' }),
    row('interaccions-i-us', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada', 'prestacio-del-servei'], sources: ['idealo-app-store', 'idealo-privacy-policy'], note: 'Els clics cap a les botigues es registren per facturar-los als comerços.' }),
    row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['idealo-app-store'] }),
    row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['idealo-privacy-policy'], note: 'Amb consentiment, perfils individuals que es poden vincular entre dispositius.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['idealo-privacy-policy'] }),
    row('galetes-i-identificadors-web', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['idealo-privacy-policy'], note: 'Media Impact, del grup Axel Springer, fa servir un identificador pseudònim propi per creuar perfils.' }),
    row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['idealo-privacy-policy'], note: 'Ressenyes de botigues; el número de client o de comanda es passa a la botiga valorada.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['idealo-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['idealo-app-store'], 'L’etiqueta declara compres, identificadors i dades d’ús utilitzats per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['idealo-privacy-policy'], 'Adjust transmet dades a Google Ads; Meta Custom Audiences, Criteo, TikTok i Microsoft Advertising, amb consentiment.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['idealo-privacy-policy'], 'La política enumera més d’una dotzena de socis d’analítica i publicitat.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['idealo-privacy-policy'], 'Remàrqueting i publicitat personalitzada en llocs de tercers, amb consentiment.'),
    profiling: f('yes', 'official', ['idealo-privacy-policy'], 'La política diu que crea perfils individuals i que pot vincular dades entre dispositius; nega decisions automatitzades de l’article 22 del RGPD.'),
    aiTraining: f('partial', 'official', ['idealo-privacy-policy'], 'Les dades d’ús poden servir per crear models de càlcul i algorismes amb aprenentatge automàtic, i les ressenyes es revisen amb aquestes eines.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['idealo-privacy-policy'], 'Socis publicitaris i d’analítica, i les botigues valorades, que reben el número de client o de comanda.'),
    intraGroupSharing: f('yes', 'official', ['idealo-privacy-policy'], 'Filials comparado i Ladenzeile, i socis publicitaris del grup Axel Springer.'),
    dataBrokerSales: unknown('La política no diu explícitament si ven dades personals.'),
    internationalTransfers: f('yes', 'official', ['idealo-privacy-policy'], 'Decisions d’adequació, el Marc de privadesa UE-EUA i clàusules contractuals tipus.', { mechanism: 'adequacy' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['idealo-privacy-policy'], 'Hi ha alguns terminis concrets: el compte s’esborra després de 13 mesos sense iniciar sessió, les ressenyes es conserven tres anys després d’esborrar-les i la correspondència comercial, sis anys.'),
    dataAfterDeletion: f('partial', 'official', ['idealo-privacy-policy'], 'Es conserven les ressenyes tres anys i la documentació comercial i fiscal durant els terminis legals.'),
    periods: [
      { dataType: 'identificador-de-compte', period: 'Fins que s’elimina el compte o després de 13 mesos sense iniciar sessió', sources: ['idealo-privacy-policy'] },
      { dataType: 'publicacions-i-comentaris', period: 'Mentre són visibles i tres anys després d’esborrar-les', sources: ['idealo-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['idealo-privacy-policy']),
    selfService: f('yes', 'official', ['idealo-privacy-policy'], 'El compte s’elimina des dels ajustos amb l’opció «Eliminar cuenta».'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Obre els ajustos del compte «Mi idealo».',
      'Tria l’opció «Eliminar cuenta» i confirma-ho.',
    ],
    obstacles: 'No hem trobat una pàgina d’ajuda amb el procés detallat ni terminis.',
    dataRetained: 'Ressenyes durant tres anys i documentació comercial durant els terminis legals.',
    sources: ['idealo-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['idealo-privacy-policy'], 'La portabilitat es reconeix i s’exerceix per correu, sense eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['idealo-privacy-policy'], 'Correu al delegat de protecció de dades o per carta a Berlín.', {
      url: 'mailto:privacy@idealo.es',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['idealo-privacy-policy'], 'La publicitat personalitzada i el seguiment depenen del consentiment, revocable al tauler de privadesa.'),
    telemetryOptOut: f('partial', 'official', ['idealo-privacy-policy'], 'L’analítica de tercers depèn del consentiment; la mesura bàsica del servei es fa per interès legítim.'),
    granularControls: f('yes', 'official', ['idealo-privacy-policy'], 'Tauler de consentiment amb els socis de seguiment un per un.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('L’aplicació no ofereix comunicacions privades entre persones.'),
    transportEncryption: unknown('No hem trobat cap documentació oficial sobre el xifratge en trànsit.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses públic.'),
    vulnerabilityDisclosure: f('yes', 'official', ['idealo-security-txt'], 'Fitxer security.txt amb el contacte security@idealo.de i clau PGP, vigent fins al juliol de 2027.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'La cerca d’incidents no s’ha pogut completar en aquesta onada. El conflicte judicial entre idealo i Google per competència no és un incident de privadesa.',
    openQuestions: [
      'Té idealo sancions o filtracions documentades?',
      'L’autoritat de control principal és la de Berlín? La política no ho diu.',
    ],
  },
}

/* ═══════════════════════════ Temu ═══════════════════════════ */
const temu: AppSeed = {
  slug: 'temu',
  name: 'Temu',
  company: 'whaleco-technology',
  categories: ['comerc-electronic'],
  tagline: 'Mercat de PDD amb perfilat per interès legítim, terminis «cas per cas» i demandes als EUA per accés il·legal a dades',
  summary:
    'Temu és el mercat internacional de PDD Holdings. La política europea fa servir l’interès legítim per a les recomanacions i els productes promocionats personalitzats per defecte, i no fixa cap termini concret de conservació. L’autoritat coreana la va sancionar el 2025 per transferir dades a la Xina sense informar-ne, i diversos estats dels EUA l’han demandat acusant l’aplicació de recollir dades de manera encoberta, acusacions que Temu nega.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: {
    website: 'https://www.temu.com/es/',
    privacyPolicy: 'https://www.temu.com/es/privacy-and-cookie-policy.html',
    appStore: appStore('1641486558'),
  },
  accountRequired: f('yes', 'official', ['temu-privacy-policy'], 'Cal un compte, amb correu, telèfon o inici de sessió de Google o Facebook, per comprar.'),
  openSource: f('no', 'official', ['temu-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Compres, cerques, llista de desitjos, cistella i obertura de correus serveixen per construir un perfil de consum detallat. S’hi afegeixen la ubicació, les converses amb el xatbot i els venedors, i de vegades el passaport o l’identificador fiscal per a la duana.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['temu-privacy-policy', 'temu-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['temu-privacy-policy', 'temu-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['temu-privacy-policy', 'temu-app-store'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['temu-privacy-policy'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['temu-privacy-policy', 'temu-app-store'] }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['temu-privacy-policy'], note: 'Número de passaport o identificador fiscal quan cal per a la duana.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['temu-privacy-policy', 'temu-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'mesura-i-analisi-dus'], sources: ['temu-privacy-policy', 'temu-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'elaboracio-de-perfils', 'mesura-i-analisi-dus'], sources: ['temu-privacy-policy', 'temu-app-store'], note: 'Navegació, llista de desitjos, cistella i obertura de correus.' }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['temu-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['temu-privacy-policy', 'temu-app-store'] }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari', 'millora-del-producte'], sources: ['temu-privacy-policy'], note: 'Converses amb atenció al client, el xatbot i els venedors; s’usen per millorar l’assistent virtual.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['temu-privacy-policy', 'temu-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['temu-privacy-policy', 'temu-app-store'] }),
    row('identificador-publicitari', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['temu-privacy-policy'], note: 'La política el recull «quan hi ha fonament jurídic», és a dir, amb consentiment.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'prestacio-del-servei'], sources: ['temu-privacy-policy'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['temu-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['temu-app-store'], 'L’etiqueta de l’App Store no declara dades utilitzades per rastrejar, tot i que la política preveu publicitat basada en interessos fora de la plataforma amb consentiment.'),
    advertisingIdentifiers: f('partial', 'official', ['temu-privacy-policy'], 'Identificadors publicitaris recollits només quan hi ha base legal, és a dir, amb consentiment.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['temu-privacy-policy'], 'Socis publicitaris i de màrqueting que reben dades a través de galetes i SDK.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['temu-privacy-policy'], 'Publicitat basada en interessos fora de la plataforma amb consentiment; productes promocionats personalitzats per defecte dins l’aplicació.'),
    profiling: f('yes', 'official', ['temu-privacy-policy'], 'Recomanacions personalitzades i perfilat de màrqueting per interès legítim, amb dret d’oposició.'),
    aiTraining: f('partial', 'official', ['temu-privacy-policy'], 'Les converses amb atenció al client i els venedors es poden fer servir per millorar les respostes de l’assistent virtual.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['temu-privacy-policy'], 'Venedors, proveïdors, processadors de pagament, socis publicitaris i de màrqueting, autoritats i investigadors acreditats.'),
    intraGroupSharing: f('yes', 'official', ['temu-privacy-policy'], 'Amb filials del grup per a suport organitzatiu, tècnic, legal i de despatx de comandes.'),
    dataBrokerSales: unknown('La política europea no diu explícitament si ven dades personals.'),
    internationalTransfers: f('yes', 'official', ['temu-privacy-policy', 'temu-pipc-2025'], 'Les dades s’emmagatzemen al Regne Unit i l’EEE, però filials de fora de l’EEE hi tenen accés sota clàusules contractuals tipus. La política no n’anomena els països; a Corea, la PIPC va constatar transferències a la Xina, Singapur i el Japó.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('Hi ha un centre de transparència de la Llei de serveis digitals, però no n’hem pogut consultar els informes.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['temu-privacy-policy'], 'La política diu que el termini es decideix «cas per cas» i no en dona cap de concret.'),
    dataAfterDeletion: f('partial', 'official', ['temu-privacy-policy'], 'Es conserven dades per obligacions legals, reclamacions en curs i investigacions de seguretat o d’ús indegut.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['temu-privacy-policy']),
    selfService: f('yes', 'independent', ['temu-delete-guide'], 'Es pot eliminar des de «Seguridad de la cuenta», amb verificació d’identitat i un període de desactivació previ.'),
    difficulty: 'medium',
    requiresSupportContact: false,
    steps: [
      'A l’aplicació, obre «Tú» i entra a la configuració.',
      'Tria «Seguridad de la cuenta» i després «Eliminar tu cuenta de Temu».',
      'Indica el motiu i verifica la identitat.',
      'No tornis a iniciar sessió durant el període de desactivació, perquè cancel·la la baixa.',
    ],
    obstacles: 'Cal passar per diverses pantalles i verificar la identitat, i tornar a entrar durant el període de desactivació anul·la la sol·licitud. BEUC va denunciar el 2024 que Temu dificultava tancar el compte.',
    dataRetained: 'Dades necessàries per a obligacions legals, reclamacions i investigacions de seguretat.',
    sources: ['temu-delete-guide', 'temu-privacy-policy', 'temu-beuc-2024'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['temu-privacy-policy'], 'Formulari de sol·licitud de dades per a l’accés i la portabilitat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['temu-privacy-policy'], 'El delegat de protecció de dades només es pot contactar per formulari web o per correu postal.'),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['temu-privacy-policy'], 'Pàgina de controls de personalització per al feed, les promocions i els productes promocionats, i preferències de galetes.'),
    telemetryOptOut: unknown('No hem trobat cap control documentat per desactivar l’analítica de l’aplicació.'),
    granularControls: f('yes', 'official', ['temu-privacy-policy'], 'Controls separats per a les recomanacions, les promocions, els productes promocionats i la publicitat fora de la plataforma.'),
    defaultPosture: 'permissive',
    darkPatterns: f('yes', 'independent', ['temu-beuc-2024'], 'BEUC i 17 associacions de consumidors van denunciar patrons foscos, com ara jocs, pressió per comprar i dificultats per tancar el compte.'),
    darkPatternList: [
      {
        type: 'hidden-exit',
        severity: 'medium',
        description: 'Segons BEUC, tancar el compte era més difícil del que calia; l’autoritat coreana va criticar que la baixa requerís set passos.',
        sources: ['temu-beuc-2024', 'temu-pipc-2025'],
      },
      {
        type: 'nagging',
        severity: 'medium',
        description: 'Jocs, comptes enrere i missatges de pressió per comprar denunciats per BEUC.',
        sources: ['temu-beuc-2024'],
      },
    ],
  },
  security: {
    e2ee: na('L’aplicació no ofereix comunicacions privades entre persones, més enllà dels xats amb venedors i atenció al client.'),
    transportEncryption: unknown('No hem trobat documentació oficial sobre el xifratge en trànsit.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: f('yes', 'press', ['temu-bug-bounty-2023'], 'Temu va anunciar la verificació en dos passos el 2023.'),
    independentAudits: f('partial', 'official', ['temu-privacy-policy'], 'La política declara el compliment de PCI DSS per als pagaments; no consten altres auditories publicades.'),
    bugBounty: f('yes', 'official', ['temu-hackerone'], 'Programa de recompenses a HackerOne des de finals de 2023.', {
      url: 'https://hackerone.com/temu',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['temu-hackerone'], 'Canal a HackerOne i centre de resposta de seguretat propi (tsrc.temu.com); no hi ha security.txt.'),
  },
  alternatives: [
    {
      app: 'wallapop',
      comparability: 'complementary',
      rationale: 'Per a molts objectes barats, la segona mà entre particulars a Espanya evita un mercat amb transferències de dades fora de l’EEE i terminis de conservació indefinits.',
      tradeOffs: 'L’oferta és limitada i depèn del que venen altres persones.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La multa de 200 milions d’euros de la Comissió Europea (maig de 2026) i l’acció de la xarxa CPC tracten de productes il·legals i pràctiques comercials, no de dades personals, i no les hem comptat com a incidents de privadesa. Les acusacions de programari espia de Grizzly Research (2023) venen d’un inversor en curt i no les hem fet servir com a fet. L’etiqueta de l’App Store no declara rastreig; la contradicció amb la publicitat fora de la plataforma que preveu la política queda oberta.',
    openQuestions: [
      'Quines filials de fora de l’EEE, i de quins països, accedeixen a les dades de les persones usuàries europees?',
      'En quin estat són les demandes d’Arkansas, Nebraska, Texas i Oklahoma?',
    ],
  },
}

/* ═══════════════════════════ Zalando ═══════════════════════════ */
const zalando: AppSeed = {
  slug: 'zalando',
  name: 'Zalando',
  company: 'zalando',
  categories: ['comerc-electronic'],
  tagline: 'Botiga de moda que declara rastreig amb compres, ubicació i navegació, i que admet entrenar IA amb dades de clients',
  summary:
    'Zalando declara a l’App Store set tipus de dades utilitzades per rastrejar, entre elles les compres, la ubicació i l’historial de navegació, i fa servir el perfil de compra per al seu negoci publicitari, Zalando Marketing Services. La política espanyola diu que pot fer servir les dades per entrenar sistemes d’aprenentatge automàtic i d’IA. En canvi, publica informes de transparència de la Llei de serveis digitals, fixa terminis concrets i permet eliminar el compte des del mateix compte.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Alemanya',
  links: {
    website: 'https://www.zalando.es/',
    privacyPolicy: 'https://www.zalando.es/zalando-proteccion-de-datos/',
    appStore: appStore('585629514'),
  },
  accountRequired: f('yes', 'official', ['zalando-privacy-notice'], 'Cal un compte de client per comprar.'),
  openSource: f('no', 'official', ['zalando-privacy-notice'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Les talles, les marques, l’estil, les devolucions i els hàbits de compra de roba donen informació sobre el cos, el pressupost i el gènere de la roba que tria una persona. Zalando hi afegeix ubicació, navegació i avaluacions de solvència per decidir quins mètodes de pagament ofereix.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['zalando-app-store', 'zalando-privacy-notice'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['zalando-app-store', 'zalando-privacy-notice'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['zalando-app-store'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['zalando-privacy-notice'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['zalando-app-store', 'zalando-privacy-notice'], note: 'Avaluació automatitzada del risc de frau i de solvència amb agències de crèdit per decidir els mètodes de pagament.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'recomanacions-algoritmiques', 'mesura-i-analisi-dus'], sources: ['zalando-app-store', 'zalando-privacy-notice'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts', 'mesura-i-analisi-dus'], sources: ['zalando-app-store'] }),
    row('historial-de-navegacio', 'yes', { linked: 'no', tracking: 'yes', shared: 'unknown', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['zalando-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'yes', shared: 'unknown', purposes: ['publicitat-personalitzada', 'prestacio-del-servei'], sources: ['zalando-app-store', 'zalando-privacy-notice'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['zalando-privacy-notice'], note: 'Dades d’interessos usades per Zalando Marketing Services; els anunciants reben informes agregats.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada', 'entrenament-de-models-dia'], sources: ['zalando-app-store', 'zalando-privacy-notice'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['zalando-app-store'] }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['zalando-privacy-notice', 'zalando-app-store'], note: 'Identificadors publicitaris d’Apple i Google.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['zalando-privacy-notice'] }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['zalando-privacy-notice'], note: 'Converses amb l’assistent de moda basat en IA, que fa servir proveïdors de fora de la UE.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['zalando-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['zalando-app-store'], 'L’etiqueta declara compres, ubicació, contacte, cerques, navegació, identificadors i ús utilitzats per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['zalando-privacy-notice'], 'Identificadors publicitaris de Google i d’Apple.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['zalando-privacy-notice'], 'Galetes i eines d’analítica i màrqueting de tercers, subjectes a consentiment.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['zalando-privacy-notice'], 'Publicitat personalitzada pròpia i de marques a través de Zalando Marketing Services, amb dades de perfil, interessos i compres.'),
    profiling: f('yes', 'official', ['zalando-privacy-notice'], 'Recomanacions, segmentació publicitària i avaluació automatitzada del risc de frau i de solvència.'),
    aiTraining: f('yes', 'official', ['zalando-privacy-policy-es'], 'La política diu que pot fer servir les dades per entrenar sistemes d’aprenentatge automàtic i d’IA.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['zalando-privacy-notice'], 'Transportistes, proveïdors de pagament, agències de crèdit, empreses de cobrament, proveïdors d’IA i socis del marketplace.'),
    intraGroupSharing: f('yes', 'official', ['zalando-privacy-notice'], 'Una trentena de societats del grup són responsables de diferents tractaments.'),
    dataBrokerSales: f('no', 'official', ['zalando-privacy-notice'], 'Zalando diu que no ven dades personals i que els anunciants només reben informes anònims i agregats.'),
    internationalTransfers: f('yes', 'official', ['zalando-privacy-notice'], 'Proveïdors d’IA i serveis de fora de la UE; per a alguns esmenta les clàusules contractuals tipus, per a la resta la redacció és genèrica.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: f('yes', 'official', ['zalando-transparency-hub'], 'Informes semestrals de la Llei de serveis digitals, amb avisos rebuts i ordres d’autoritats, a més d’auditories i informes de risc.', {
      url: 'https://corporate.zalando.com/en/investor-relations/corporate-governance/transparency-hub',
    }),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['zalando-privacy-notice'], 'El compte s’esborra a petició o després de cinc anys sense compres i tretze mesos sense cap altra activitat; les dades de comandes i pagaments queden bloquejades fins a deu anys.'),
    dataAfterDeletion: f('partial', 'official', ['zalando-privacy-notice'], 'Les dades que no es poden esborrar per obligació legal queden bloquejades fins a deu anys.'),
    periods: [
      { dataType: 'identificador-de-compte', period: 'Fins a l’eliminació, o cinc anys sense compres i tretze mesos sense activitat', sources: ['zalando-privacy-notice'] },
      { dataType: 'historial-de-compres', period: 'Bloquejat fins a deu anys per obligacions mercantils i fiscals', sources: ['zalando-privacy-notice'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['zalando-privacy-notice']),
    selfService: f('yes', 'official', ['zalando-privacy-notice'], 'Des del compte, a l’apartat per sol·licitar o eliminar dades.'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Entra al compte de Zalando i obre l’apartat «Solicitar o eliminar datos».',
      'Tria «Eliminar cuenta de cliente» i confirma-ho amb la contrasenya.',
      'Com a alternativa, escriu a privacidad@zalando.es.',
    ],
    obstacles: 'Si hi ha comandes recents, l’esborrat es pot endarrerir fins que venç el termini de devolució; l’autoritat de Berlín ho va considerar lícit.',
    dataRetained: 'Dades de comandes i pagaments, bloquejades fins a deu anys.',
    sources: ['zalando-privacy-notice', 'zalando-datatilsynet-2024'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['zalando-privacy-notice'], 'Sol·licitud de dades des del mateix compte.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['zalando-privacy-notice'], 'Des del compte o per correu al delegat de protecció de dades.', {
      url: 'mailto:privacidad@zalando.es',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['zalando-privacy-notice'], 'Configuració de galetes amb categories de màrqueting i un interruptor a l’aplicació per desactivar la personalització basada en el perfil.'),
    telemetryOptOut: f('partial', 'official', ['zalando-privacy-notice'], 'Les galetes analítiques es poden rebutjar; no consta un control per a tota la telemetria de l’aplicació.'),
    granularControls: f('yes', 'official', ['zalando-privacy-notice'], 'Consentiments per categories i preferències de recomanació a l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('L’aplicació no ofereix comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'official', ['zalando-privacy-notice'], 'La política descriu la transmissió xifrada de les dades.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat documentació oficial sobre verificació en dos passos per a clients.'),
    independentAudits: unknown('Les auditories publicades són les de la Llei de serveis digitals, no de seguretat.'),
    bugBounty: f('no', 'official', ['zalando-vdp'], 'El programa d’Intigriti és de divulgació, sense recompenses.'),
    vulnerabilityDisclosure: f('yes', 'official', ['zalando-vdp'], 'Programa de divulgació a Intigriti que inclou l’aplicació d’iOS.', {
      url: 'https://corporate.zalando.com/en/about-us/report-vulnerability',
    }),
  },
  alternatives: [
    {
      app: 'vinted',
      comparability: 'partial',
      rationale: 'La compravenda de roba de segona mà entre particulars no depèn d’un negoci publicitari basat en el perfil de compra.',
      tradeOffs: 'No és una botiga i l’oferta depèn del que venen altres persones.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Bona part de la fitxa es basa en la versió europea completa de la política (setembre de 2025), perquè la versió espanyola d’agost de 2026 només s’ha pogut llegir parcialment. La designació com a plataforma molt gran de la Llei de serveis digitals, que Zalando ha recorregut, no és un incident de privadesa. Un anunci de venda de 21 milions de registres en un fòrum (agost de 2025) no està verificat i no l’hem registrat.',
    openQuestions: [
      'Quines agències de crèdit consulta Zalando a Espanya?',
      'Amb quin mecanisme es transfereixen dades als proveïdors d’IA de fora de la UE?',
    ],
  },
}

/* ═══════════════════════════ Carrefour ═══════════════════════════ */
const carrefour: AppSeed = {
  slug: 'carrefour',
  name: 'Mi Carrefour',
  company: 'carrefour-espana',
  categories: ['alimentacio-i-restauracio'],
  tagline: 'Club de fidelització amb cessió de perfils de compra a socis i una sanció de 3,2 milions per bretxes de l’aplicació',
  summary:
    'Mi Carrefour és l’aplicació del Club Carrefour, que lliga cada compra de supermercat a una persona. Amb consentiment, el perfil (llar, fills, secció censal, segments de consum) es pot compartir amb entitats adscrites, amb la financera del grup i amb socis analítics a través de «data clean rooms», i la IA fa servir els patrons de compra per generar cupons. El 2025 l’AEPD va multar Carrefour amb 3,2 milions d’euros per cinc bretxes, quatre de les quals a l’aplicació, i per no avisar les persones afectades.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.carrefour.es/',
    privacyPolicy: 'https://www.carrefour.es/politica-de-privacidad/mas-info/',
    terms: 'https://www.carrefour.es/clubcarrefour/bases_legales/',
    appStore: appStore('605788142'),
  },
  accountRequired: f('yes', 'official', ['carrefour-club-terms'], 'L’aplicació funciona amb el compte del Club Carrefour.'),
  openSource: f('no', 'official', ['carrefour-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'La compra del supermercat revela dieta, salut, nombre de persones a casa, edat dels fills, consum d’alcohol i capacitat econòmica. El Club hi afegeix DNI, data de naixement, secció censal i coordenades de l’adreça, i segments de consum que es poden cedir a tercers amb consentiment.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['carrefour-app-store', 'carrefour-privacy-policy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'investigacio-i-estadistica'], sources: ['carrefour-app-store', 'carrefour-privacy-policy'], note: 'Amb consentiment, el correu convertit en hash es comparteix amb socis analítics a través de «data clean rooms».' }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['carrefour-app-store', 'carrefour-privacy-policy'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['carrefour-app-store', 'carrefour-club-terms'], note: 'Amb secció censal i coordenades, que es poden compartir amb entitats adscrites amb consentiment.' }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['carrefour-privacy-policy', 'carrefour-club-terms'], note: 'DNI o NIE.' }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['carrefour-club-terms'] }),
    row('situacio-familiar', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['carrefour-club-terms'], note: 'Nombre de persones de la llar i any de naixement dels fills.' }),
    row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['carrefour-privacy-policy'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['carrefour-app-store', 'carrefour-privacy-policy', 'carrefour-club-terms'], note: 'Base dels cupons generats amb IA i dels segments de consum.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['carrefour-club-terms', 'carrefour-privacy-policy'], note: 'Segments d’hàbits i de valor del client; amb la financera del grup, propensió a contractar productes financers.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['carrefour-privacy-policy', 'carrefour-club-terms'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['carrefour-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['carrefour-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['carrefour-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['carrefour-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['carrefour-app-store'], 'L’etiqueta declara compres, contacte, cerques, identificadors i ús utilitzats per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['carrefour-app-store'], 'Identificadors declarats per rastrejar.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['carrefour-privacy-policy'], 'Galetes de tercers i píxels de seguiment als correus, amb consentiment.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['carrefour-privacy-policy'], 'Publicitat personalitzada dins i fora de Carrefour i publicitat d’entitats adscrites al Club, amb consentiment.'),
    profiling: f('yes', 'official', ['carrefour-privacy-policy', 'carrefour-club-terms'], 'Segmentació per interès legítim i perfilat compartit amb Servicios Financieros Carrefour segons la propensió a contractar la targeta PASS.'),
    aiTraining: f('partial', 'official', ['carrefour-privacy-policy'], 'Eines d’IA analitzen els patrons de compra per generar cupons, per interès legítim; la política no parla d’entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['carrefour-privacy-policy', 'carrefour-club-terms'], 'Proveïdors, venedors del marketplace, un servei de puntuació de frau compartit entre comerços i, amb consentiment, entitats adscrites al Club i socis publicitaris i analítics.'),
    intraGroupSharing: f('yes', 'official', ['carrefour-privacy-policy'], 'Amb les societats del grup a Espanya i amb Servicios Financieros Carrefour.'),
    dataBrokerSales: unknown('La política no parla de venda, però preveu cessions de perfils a entitats adscrites amb consentiment.'),
    internationalTransfers: f('partial', 'official', ['carrefour-privacy-policy'], 'La política només diu que les transferències estan emparades en algun mecanisme previst per la normativa.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['carrefour-privacy-policy', 'carrefour-club-terms'], 'Només criteris genèrics: terminis legals, garanties i prescripció, sense anys concrets.'),
    dataAfterDeletion: f('partial', 'official', ['carrefour-club-terms'], 'Després de la baixa del Club, les dades queden bloquejades durant les obligacions legals i després s’esborren.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['carrefour-club-terms', 'carrefour-privacy-policy']),
    selfService: unknown('Hi ha una pàgina «Eliminar cuenta y datos App Mi Carrefour», però no n’hem pogut llegir el contingut; les bases del Club parlen de baixa per escrit.'),
    directUrl: 'https://www.carrefour.es/clubcarrefour/app-mi-carrefour/cuenta/',
    difficulty: 'unknown',
    steps: [
      'Consulta la pàgina «Eliminar cuenta y datos App Mi Carrefour» enllaçada al peu del web.',
      'Com a alternativa, demana la supressió a derechosprotecciondedatos@carrefour.com o per correu postal a l’Apartado 1002, 28108 Alcobendas.',
    ],
    obstacles: 'No hem pogut verificar si hi ha un botó d’eliminació dins de l’aplicació.',
    dataRetained: 'Dades bloquejades durant els terminis legals de prescripció.',
    sources: ['carrefour-club-terms', 'carrefour-rights'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['carrefour-rights'], 'La portabilitat es demana pels canals de drets.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['carrefour-rights'], 'Des del compte, per correu, per carta o amb formulari.', {
      url: 'mailto:derechosprotecciondedatos@carrefour.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['carrefour-privacy-policy'], 'La publicitat personalitzada i les cessions depenen del consentiment, que es pot retirar.'),
    telemetryOptOut: unknown('No hem trobat cap control documentat per desactivar l’analítica de l’aplicació.'),
    granularControls: f('partial', 'official', ['carrefour-privacy-policy'], 'Consentiments separats per a publicitat, cessions i analítica avançada; la segmentació i els cupons amb IA es basen en l’interès legítim.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi independent de patrons foscos a l’aplicació.'),
  },
  security: {
    e2ee: na('L’aplicació no ofereix comunicacions privades entre persones.'),
    transportEncryption: unknown('No hem trobat documentació oficial sobre el xifratge en trànsit.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos. Les bretxes de 2023 van ser per reutilització de contrasenyes.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: f('no', 'official', ['carrefour-disclosure'], 'La política de divulgació diu expressament que no hi ha programa de recompenses.'),
    vulnerabilityDisclosure: f('yes', 'official', ['carrefour-disclosure'], 'Política de divulgació del grup i fitxer security.txt amb contacte per correu i clau PGP.', {
      url: 'https://www.carrefour.com/disclosure',
    }),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'carrefour.es bloqueja la lectura automatitzada; la política i les bases del Club s’han llegit en captures de l’Internet Archive de 2025 i 2026. Les sancions de la CNIL de 2020 afecten Carrefour France i Carrefour Banque, no l’entitat espanyola, però mostren problemes semblants en programes de fidelització del grup.',
    openQuestions: [
      'Es pot eliminar el compte des de l’aplicació, i amb quins passos?',
      'Es va recórrer la sanció PS/00128/2024?',
      'Hi ha sancions anteriors de l’AEPD a Centros Comerciales Carrefour que no hem localitzat?',
    ],
  },
}

/* ═══════════════════════════ ALIBABA.COM ═══════════════════════════ */
const alibaba: AppSeed = {
  slug: 'alibaba',
  name: 'Alibaba.com',
  company: 'alibaba-com-singapore',
  categories: ['comerc-electronic'],
  tagline: 'Mercat majorista entre empreses amb dades a Alemanya, accés remot des de la Xina i xats gestionats per DingTalk',
  summary:
    'Alibaba.com és la plataforma de compra majorista del grup Alibaba, pensada per a empreses. El responsable per a qui es registra fora de la Xina continental és una societat de Singapur, i la política designa el Garante italià com a autoritat principal a la UE. Les dades de les persones usuàries europees s’emmagatzemen a Alemanya, però entitats del grup a la Xina i Singapur hi tenen accés remot. Els xats els gestiona DingTalk, que en conserva una còpia. L’etiqueta de l’App Store declara compres, contacte i identificadors utilitzats per rastrejar.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Singapur; autoritat principal a la UE: Itàlia',
  links: {
    website: 'https://www.alibaba.com/',
    privacyPolicy: 'https://rule.alibaba.com/rule/detail/2034.htm',
    appStore: appStore('503451073'),
  },
  accountRequired: f('partial', 'official', ['alibaba-privacy-policy'], 'El catàleg es pot consultar sense compte; per contactar amb proveïdors, demanar pressupostos o comprar cal registrar-se.'),
  openSource: f('no', 'official', ['alibaba-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Com que és una plataforma per a empreses, a més del compte demana documents de la societat i, per verificar-la, el document d’identitat i factures de la persona representant. Les converses de negociació amb proveïdors, l’historial de compres i la ubicació descriuen l’activitat comercial d’un petit negoci i de qui el porta.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['alibaba-app-store', 'alibaba-privacy-policy'], note: 'L’etiqueta declara les dades de contacte per a publicitat de tercers i per rastrejar.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['alibaba-app-store', 'alibaba-privacy-policy'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['alibaba-app-store', 'alibaba-privacy-policy'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['alibaba-app-store', 'alibaba-privacy-policy'], note: 'Es comparteix amb logística i duanes.' }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['alibaba-privacy-policy'], note: 'Per verificar l’empresa (KYC i prevenció del blanqueig): document d’identitat i factures de la persona representant.' }),
    row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['alibaba-privacy-policy'], note: 'Dades de l’empresa i del càrrec de la persona que obre el compte.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['alibaba-app-store', 'alibaba-privacy-policy'], note: 'Números de targeta i de compte i extractes; els proveïdors de pagament i de risc de crèdit en reben.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'recomanacions-algoritmiques', 'mesura-i-analisi-dus'], sources: ['alibaba-app-store', 'alibaba-privacy-policy'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'recomanacions-algoritmiques', 'mesura-i-analisi-dus'], sources: ['alibaba-app-store', 'alibaba-privacy-policy'], note: 'Per defecte, els productes vistos es comparteixen amb els venedors perquè puguin contactar el comprador; es pot desactivar a «Buyer Privacy Settings».' }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['alibaba-privacy-policy'], note: 'La missatgeria la presta DingTalk, que recull els xats i en comparteix una còpia amb Alibaba.com.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['alibaba-privacy-policy'], note: 'Accés a fotos, vídeos, càmera i micròfon amb permís.' }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['alibaba-privacy-policy'] }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['alibaba-app-store', 'alibaba-privacy-policy'], note: 'Amb consentiment.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['alibaba-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['alibaba-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['alibaba-app-store'] }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['alibaba-privacy-policy', 'alibaba-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'millora-del-producte'], sources: ['alibaba-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['alibaba-privacy-policy'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['alibaba-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['alibaba-app-store'], 'L’etiqueta declara compres, dades de contacte i identificadors utilitzats per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['alibaba-privacy-policy', 'alibaba-app-store'], 'La política esmenta els identificadors publicitaris del dispositiu.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['alibaba-privacy-policy'], 'Comparteix dades amb Google, Twitter, Facebook i Instagram, que poden combinar-les per fer publicitat segmentada.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['alibaba-privacy-policy'], 'Màrqueting i publicitat personalitzats, per consentiment o interès legítim.'),
    profiling: f('yes', 'official', ['alibaba-privacy-policy'], 'Recomanacions personalitzades i avaluació del frau i del risc de crèdit amb mètodes de puntuació.'),
    aiTraining: f('partial', 'official', ['alibaba-privacy-policy'], 'La recerca i el desenvolupament, per interès legítim, inclouen «anonymized data for machine learning purposes». No diu res de dades no anonimitzades.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['alibaba-privacy-policy'], 'Venedors, xarxes publicitàries, pagaments, risc de crèdit, logística, duanes, núvol, SDK, verificació, ressenyes i autoritats.'),
    intraGroupSharing: f('yes', 'official', ['alibaba-privacy-policy'], 'Amb empreses del grup Alibaba, entre elles DingTalk per als xats i Alibaba Cloud per a les videoconferències.'),
    dataBrokerSales: unknown('La política no diu explícitament si ven dades personals.'),
    internationalTransfers: f('yes', 'official', ['alibaba-privacy-policy'], 'Les dades de la UE s’emmagatzemen a Alemanya, però entitats del grup a la Xina continental i Singapur hi tenen «limited remote access». Invoca decisions d’adequació, clàusules contractuals tipus i les excepcions de l’article 49.1.b i c del RGPD per a les dades de transacció i de pagament.', { mechanism: 'derogation' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència d’Alibaba.com.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['alibaba-privacy-policy'], 'Només diu que conserva les dades mentre hi hagi una necessitat legítima de negoci o ho exigeixi la llei fiscal i comptable.'),
    dataAfterDeletion: f('partial', 'official', ['alibaba-delete-account', 'alibaba-privacy-policy'], 'L’ajuda diu que les dades generades a la plataforma s’eliminen permanentment, però la política manté la conservació per obligacions fiscals i comptables.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['alibaba-delete-account']),
    selfService: f('yes', 'official', ['alibaba-delete-account'], 'Es pot eliminar des de l’aplicació i des del web.'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'A l’aplicació, obre «My Alibaba» i ves a «Settings».',
      'Toca «Delete account» i segueix les instruccions.',
      'Des del web: My Alibaba > Account Settings > Account Security > «Delete Account».',
      'Abans, tanca les comandes i les disputes obertes, perquè en bloquegen l’eliminació.',
    ],
    obstacles: 'No es pot eliminar el compte amb comandes o disputes obertes. L’ajuda distingeix entre desactivar el compte, que és reversible i només es pot fer des del web, i eliminar-lo.',
    dataRetained: 'La política preveu conservar les dades que exigeixen les lleis fiscals i comptables, sense terminis concrets.',
    sources: ['alibaba-delete-account', 'alibaba-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['alibaba-privacy-policy'], 'La portabilitat es reconeix i s’exerceix amb el formulari del compte o per correu, sense eina de descàrrega directa.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['alibaba-privacy-policy'], 'Formulari dins del compte i correu del delegat de protecció de dades.', {
      url: 'mailto:DataProtection@service.alibaba.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['alibaba-privacy-policy'], 'Part de la publicitat es basa en el consentiment i part en l’interès legítim, on cal exercir l’oposició.'),
    telemetryOptOut: unknown('No hem trobat cap control documentat per desactivar l’analítica a l’aplicació.'),
    granularControls: f('partial', 'official', ['alibaba-privacy-policy'], '«Buyer Privacy Settings» permet deixar de compartir els productes vistos amb els venedors; la ubicació precisa, la càmera i el micròfon depenen dels permisos del dispositiu.'),
    defaultPosture: 'permissive',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: f('no', 'official', ['alibaba-privacy-policy'], 'DingTalk recull el contingut dels xats i en comparteix una còpia amb Alibaba.com, cosa incompatible amb un xifratge d’extrem a extrem.'),
    transportEncryption: unknown('No hem trobat cap documentació oficial sobre el xifratge en trànsit.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat documentació sobre la verificació en dos passos del compte d’Alibaba.com.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades per a Alibaba.com.'),
    bugBounty: f('partial', 'official', ['alibaba-asrc'], 'El centre de resposta de seguretat del grup (ASRC) té un programa de recompenses, però no hem pogut confirmar si inclou Alibaba.com.', {
      url: 'https://security.alibaba.com/',
    }),
    vulnerabilityDisclosure: f('partial', 'official', ['alibaba-asrc'], 'Es poden notificar vulnerabilitats a l’ASRC del grup; alibaba.com no publica security.txt.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: false,
    editorialNotes:
      'No hem trobat sancions ni filtracions d’Alibaba.com, però la cerca va quedar a mitges. L’extracció massiva de dades de Taobao (2019-2020) i les queixes de noyb de 2025 per transferències a la Xina afecten Taobao i AliExpress, no aquesta aplicació, i no les hem registrat com a incidents. L’App Store enllaça una política antiga.',
    openQuestions: [
      'Quines entitats de la Xina accedeixen a les dades europees i amb quin mecanisme de transferència?',
      'El programa de recompenses de l’ASRC inclou Alibaba.com?',
      'L’aplicació ofereix verificació en dos passos?',
    ],
  },
}

/* ═══════════════════════════ MEDIAMARKT ═══════════════════════════ */
const mediamarkt: AppSeed = {
  slug: 'mediamarkt',
  name: 'MediaMarkt',
  company: 'mediamarkt-saturn-espana',
  categories: ['comerc-electronic'],
  tagline: 'Botiga d’electrònica que perfila per interès legítim les compres a botiga i a l’app, amb rastreig declarat i eliminació del compte en autoservei',
  summary:
    'A Espanya el responsable és Media Markt Saturn, S.A.U., del grup Ceconomy, tot i que l’aplicació la publica MMS E-Commerce GmbH. El programa miMediaMarkt combina, per interès legítim, les compres a botiga i en línia, els clics a la web i l’aplicació, les obertures de butlletins i les trucades a atenció al client. La prevenció del frau passa per Forter, al Regne Unit, i la persona usuària no s’hi pot oposar. L’etiqueta de l’App Store declara sis categories de dades utilitzades per rastrejar. El compte es pot eliminar des del perfil.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.mediamarkt.es/',
    privacyPolicy: 'https://www.mediamarkt.es/es/legal/politica-de-privacidad',
    appStore: appStore('1438532508'),
  },
  accountRequired: f('partial', 'official', ['mediamarkt-privacy-policy'], 'El catàleg es pot consultar sense compte; per comprar amb historial, fer servir miMediaMarkt o gestionar comandes cal registrar-se.'),
  openSource: f('no', 'official', ['mediamarkt-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Les compres d’electrònica i electrodomèstics, amb data, hora, botiga i mètode de pagament, es combinen amb la navegació per l’aplicació i les trucades a atenció al client. La política hi afegeix el DNI, les dades bancàries per al finançament, els ingressos i les converses amb un assistent d’IA a botiga.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['mediamarkt-app-store', 'mediamarkt-privacy-policy'], note: 'L’etiqueta declara les dades de contacte utilitzades per rastrejar.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['mediamarkt-app-store', 'mediamarkt-privacy-policy'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['mediamarkt-app-store', 'mediamarkt-privacy-policy'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['mediamarkt-privacy-policy'] }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['mediamarkt-privacy-policy'], note: 'La política esmenta el DNI o NIE entre les dades identificatives.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['mediamarkt-app-store', 'mediamarkt-privacy-policy'], note: 'Les dades de la compra i de la sessió es comparteixen amb Forter per prevenir el frau.' }),
    row('nivell-d-ingressos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['mediamarkt-privacy-policy'], note: 'La política inclou «ingresos y rentas» entre les dades econòmiques.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils', 'publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['mediamarkt-app-store', 'mediamarkt-mimediamarkt-policy'], note: 'miMediaMarkt combina les compres a botiga física i en línia.' }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['mediamarkt-app-store', 'mediamarkt-mimediamarkt-policy'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['mediamarkt-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'mesura-i-analisi-dus'], sources: ['mediamarkt-app-store', 'mediamarkt-mimediamarkt-policy'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['mediamarkt-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['mediamarkt-app-store'] }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari', 'elaboracio-de-perfils'], sources: ['mediamarkt-privacy-policy'], note: 'Converses amb l’assistent virtual d’IA per WhatsApp Business a botiga, amb consentiment; es conserven tretze mesos.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['mediamarkt-app-store'], note: 'L’etiqueta declara la ubicació com a dada no vinculada.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['mediamarkt-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['mediamarkt-app-store'], 'L’etiqueta declara compres, contacte, historial de cerca i de navegació, identificadors i dades d’ús utilitzats per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['mediamarkt-app-store'], 'Identificadors declarats per rastrejar.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['mediamarkt-privacy-policy'], 'Galetes publicitàries en corresponsabilitat amb les dues societats de MediaMarktSaturn Platform Services, i proveïdors d’analítica.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['mediamarkt-privacy-policy'], 'Màrqueting propi per interès legítim a clients i, amb consentiment, publicitat personalitzada i de tercers.'),
    profiling: f('yes', 'official', ['mediamarkt-mimediamarkt-policy', 'mediamarkt-privacy-policy'], 'El perfil de miMediaMarkt es basa en l’interès legítim i combina botiga, web, aplicació, butlletins i atenció telefònica; a més, hi ha perfilat amb fonts de tercers amb consentiment.'),
    aiTraining: unknown('La política descriu un assistent d’IA per WhatsApp, però no diu si les dades serveixen per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['mediamarkt-privacy-policy'], 'Forter (prevenció del frau), proveïdors de pagament, logística, tecnologia i publicitat.'),
    intraGroupSharing: f('yes', 'official', ['mediamarkt-privacy-policy', 'mediamarkt-mimediamarkt-policy'], 'Amb empreses del grup per interès legítim; MediaMarktSaturn Retail Group GmbH i Platform Services España hi tenen accés.'),
    dataBrokerSales: unknown('La política no diu si ven dades personals.'),
    internationalTransfers: f('yes', 'official', ['mediamarkt-privacy-policy', 'mediamarkt-mimediamarkt-policy'], 'Clàusules contractuals tipus o decisions d’adequació, com la del Regne Unit per a Forter. La política de miMediaMarkt reconeix el risc d’accés d’autoritats de països tercers.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['mediamarkt-privacy-policy'], 'Només hi ha un termini concret: tretze mesos per a les converses amb l’assistent d’IA. La resta es conserva el temps necessari més els terminis de prescripció.'),
    dataAfterDeletion: f('partial', 'official', ['mediamarkt-mimediamarkt-policy'], 'Les dades es bloquegen durant el termini de prescripció i després se suprimeixen.'),
    periods: [
      { dataType: 'contingut-de-missatges', period: 'Tretze mesos, converses amb l’assistent d’IA', sources: ['mediamarkt-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['mediamarkt-delete-account']),
    selfService: f('yes', 'official', ['mediamarkt-delete-account'], 'Botó «Eliminar Cuenta» a les dades personals del compte.'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Inicia sessió i obre «Mi Cuenta».',
      'Ves a «Datos Personales».',
      'Toca «Eliminar Cuenta» i confirma-ho.',
    ],
    obstacles: 'L’ajuda no indica cap termini ni quines dades es conserven.',
    dataRetained: 'La política preveu bloquejar les dades durant els terminis de prescripció legal.',
    sources: ['mediamarkt-delete-account', 'mediamarkt-mimediamarkt-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['mediamarkt-privacy-policy'], 'La portabilitat es reconeix, però cal demanar-la per escrit o per correu.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['mediamarkt-privacy-policy'], 'Per escrit o per correu al delegat de protecció de dades; inclou el dret a intervenció humana davant decisions automatitzades.', {
      url: 'mailto:dpo@mediamarkt.es',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['mediamarkt-privacy-policy', 'mediamarkt-mimediamarkt-policy'], 'La publicitat de tercers requereix consentiment, però el màrqueting propi a clients i el perfilat de miMediaMarkt es basen en l’interès legítim i cal oposar-s’hi.'),
    telemetryOptOut: f('partial', 'official', ['mediamarkt-privacy-policy'], 'L’analítica depèn del consentiment de galetes al web; a l’aplicació no hem trobat un control equivalent.'),
    granularControls: f('partial', 'official', ['mediamarkt-privacy-policy'], 'Galetes per categories i consentiments separats per a butlletí, perfilat i màrqueting de tercers; la prevenció del frau amb Forter no admet oposició.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('L’aplicació no ofereix comunicacions privades entre persones.'),
    transportEncryption: unknown('No hem trobat cap documentació oficial sobre el xifratge en trànsit.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: f('no', 'official', ['mediamarkt-security'], 'El programa de divulgació a HackerOne no declara recompenses.'),
    vulnerabilityDisclosure: f('yes', 'official', ['mediamarkt-security', 'mediamarkt-security-txt'], 'Programa de divulgació de vulnerabilitats a HackerOne i fitxer security.txt que remet a vdp.mediamarktsaturn.com.'),
  },
  alternatives: [
    {
      app: 'wallapop',
      comparability: 'complementary',
      rationale: 'Comprar electrònica de segona mà entre particulars evita crear un compte en un programa de fidelització que perfila les compres per interès legítim.',
      tradeOffs: 'Sense garantia de botiga ni servei tècnic, i l’oferta depèn del que venen altres persones.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Hem revisat tots els procediments sancionadors de l’AEPD que surten amb «media markt». Els paquets lliurats a una altra persona (PS/00280/2022, AI/00110/2024, PS/00473/2024) van acabar amb multa al transportista o arxivats, i no els comptem com a incidents de MediaMarkt. La sentència del TJUE C-687/21 (2024), sobre MediaMarktSaturn a Alemanya, no l’hem registrada perquè no n’hem pogut verificar els fets. L’atac de ransomware Hive de 2021 va afectar sobretot els Països Baixos i Alemanya, sense robatori confirmat de dades de clients. JD.com té pendent la compra de Ceconomy.',
    openQuestions: [
      'Què es conserva després d’eliminar el compte, i durant quant de temps?',
      'L’atac de 2021 va afectar dades de clients d’Espanya?',
      'Si JD.com compra Ceconomy, canviaran les transferències de dades?',
    ],
  },
}

/* ═══════════════════════════ Action ═══════════════════════════ */
const action: AppSeed = {
  slug: 'action',
  name: 'Action',
  company: 'action',
  categories: ['comerc-electronic'],
  tagline: 'Catàleg i targeta de client que vincula les compres a botiga amb el compte, amb publicitat per correu xifrat a les xarxes només amb consentiment',
  summary:
    'L’aplicació d’Action es pot fer servir sense compte per consultar ofertes i botigues, però la targeta digital de Mi Action lliga cada compra a botiga amb una persona identificada. La declaració de privadesa és detallada i fixa terminis concrets per a gairebé cada tractament. L’etiqueta de l’App Store declara identificadors utilitzats per rastrejar, i la política preveu compartir el correu xifrat amb Meta, Google, TikTok i Pinterest si s’hi dona consentiment.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Països Baixos',
  links: {
    website: 'https://www.action.com/es-es/',
    privacyPolicy: 'https://www.action.com/es-es/declaracion-de-privacidad/',
    appStore: appStore('1531860284'),
  },
  accountRequired: f('no', 'official', ['action-privacy-statement'], 'L’aplicació es pot fer servir amb o sense compte Mi Action; el compte només cal per a la targeta de client, els favorits i els tiquets digitals.'),
  openSource: f('no', 'official', ['action-privacy-statement'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Amb la targeta de client escanejada a caixa, l’historial de compres a botiga queda lligat al nom, la data de naixement i el correu. Sumat a la ubicació per trobar la botiga més propera i al que es mira i es desa a l’aplicació, descriu els hàbits de consum domèstic d’una llar.',
  dataCollection: [
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['action-privacy-statement', 'action-app-store'], note: 'Només amb compte Mi Action o en comandes grans i de la botiga en línia.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['action-privacy-statement', 'action-app-store'], note: 'Amb consentiment, se’n comparteix una versió xifrada (hash) amb Facebook, Instagram, TikTok, Pinterest i Google per mostrar anuncis.' }),
    row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['compliment-legal', 'publicitat-personalitzada'], sources: ['action-privacy-statement'], note: 'Obligatòria per obrir un compte Mi Action (verificació d’edat) i usada per a promocions d’aniversari.' }),
    row('contrasenya', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['action-privacy-statement'] }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts', 'investigacio-i-estadistica'], sources: ['action-privacy-statement'], note: 'Les compres a botiga es vinculen al compte quan s’escaneja la targeta de client.' }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['action-privacy-statement'], note: 'Amb permís del dispositiu, per al localitzador de botigues.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['action-app-store', 'action-privacy-statement'], note: 'L’etiqueta la declara per a analítica; la política esmenta la ubicació d’inici de sessió deduïda de l’adreça IP.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['action-app-store', 'action-privacy-statement'], note: 'L’analítica, la personalització i el màrqueting depenen del consentiment a la configuració de l’aplicació.' }),
    row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['action-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['action-app-store', 'action-privacy-statement'], note: 'L’etiqueta declara «identificadors» utilitzats per rastrejar.' }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['action-privacy-statement'], note: 'Les tracta el proveïdor de pagaments Adyen en les compres de la botiga en línia.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['action-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['action-app-store'], 'L’etiqueta de l’App Store declara identificadors utilitzats per rastrejar entre aplicacions i webs d’altres empreses.'),
    advertisingIdentifiers: f('yes', 'official', ['action-privacy-statement', 'action-app-store'], 'La política descriu l’ús d’identificadors per part de socis publicitaris i dels productes publicitaris de Google, amb consentiment.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['action-privacy-statement'], 'Eines de Google i tecnologies de mesura de conversions amb Meta i Google, subjectes al consentiment.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['action-privacy-statement'], 'Amb consentiment, Action i els seus socis publicitaris fan servir les interaccions per personalitzar anuncis, i el correu xifrat per mostrar anuncis a les xarxes socials.'),
    profiling: f('partial', 'official', ['action-privacy-statement'], 'El butlletí es personalitza amb l’historial de compres i les interaccions; les anàlisis del compte Mi Action es declaren agregades.'),
    aiTraining: unknown('La declaració de privadesa no esmenta l’ús de dades per entrenar models d’IA.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['action-privacy-statement'], 'Proveïdors de màrqueting, tecnologia, pagament (Adyen), lliurament i atenció al client, i plataformes publicitàries amb consentiment.'),
    intraGroupSharing: f('yes', 'official', ['action-privacy-statement'], 'Amb altres empreses del grup Action que donen suport a les operacions.'),
    dataBrokerSales: f('no', 'official', ['action-privacy-statement'], 'La política diu que no ven dades personals a tercers per als seus propis fins de màrqueting.'),
    internationalTransfers: f('yes', 'official', ['action-privacy-statement'], 'Alguns proveïdors són fora de l’EEE; s’empren decisions d’adequació, clàusules contractuals tipus i el Marc de privadesa UE-EUA.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['action-privacy-statement'], 'Terminis concrets per a gairebé cada tractament: set anys per a pagaments i comandes, tres mesos per a les trucades gravades, un any per al butlletí i les notificacions inactives, i dos anys d’inactivitat per al compte.'),
    dataAfterDeletion: f('partial', 'official', ['action-privacy-statement'], 'En eliminar el compte s’esborren la targeta de client i les dades vinculades, però les dades de compres i pagaments es conserven set anys per obligació fiscal.'),
    periods: [
      { dataType: 'historial-de-compres', period: 'Set anys les dades de compres i pagaments, per obligació fiscal i comptable', sources: ['action-privacy-statement'] },
      { dataType: 'veu-i-audio', period: 'Tres mesos les gravacions de trucades a atenció al client', sources: ['action-privacy-statement'] },
      { dataType: 'adreca-electronica', period: 'Mentre duri la subscripció al butlletí o fins a un any després de l’última interacció', sources: ['action-privacy-statement'] },
      { dataType: 'identificador-de-compte', period: 'Mentre el compte sigui actiu; després de dos anys sense ús i sense resposta a l’avís, es desactiva i s’esborra', sources: ['action-privacy-statement'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['action-privacy-statement', 'action-my-action-faq']),
    selfService: f('yes', 'official', ['action-my-action-faq'], 'L’opció «Eliminar mi cuenta» és a «Mis datos» del compte Mi Action, a l’aplicació i al web.'),
    difficulty: 'easy',
    requiresSupportContact: false,
    steps: [
      'Inicia la sessió a Mi Action, a l’aplicació o a action.com.',
      'Obre «Mis datos» al menú del compte.',
      'Tria «Eliminar mi cuenta» i confirma-ho.',
      'Com a alternativa, envia la sol·licitud pel formulari de contacte d’atenció al client.',
      'Espera la confirmació: l’eliminació de les dades pot trigar fins a 30 dies laborables.',
    ],
    obstacles: 'Es perden els segells i la targeta d’estalvi acumulats. Els tiquets digitals no es poden esborrar un per un.',
    dataRetained: 'Dades de compres i pagaments durant set anys per obligació fiscal.',
    sources: ['action-my-action-faq', 'action-privacy-statement'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['action-privacy-statement'], 'El dret de portabilitat es reconeix, però s’exerceix per sol·licitud a atenció al client, sense eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['action-privacy-statement'], 'Drets per correu a atenció al client o al delegat de protecció de dades, amb resposta en un mes.', {
      url: 'mailto:privacy@action.nl',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['action-privacy-statement'], 'La publicitat personalitzada i la compartició del correu xifrat depenen del consentiment, que es retira a la configuració de l’aplicació o al centre de preferències de Mi Action.'),
    telemetryOptOut: f('yes', 'official', ['action-privacy-statement'], 'Les tecnologies d’analítica i rendiment de l’aplicació són opcionals i es gestionen a la configuració.'),
    granularControls: f('yes', 'official', ['action-privacy-statement'], 'Consentiments separats per a analítica, personalització, màrqueting i publicitat a les xarxes socials.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('L’aplicació no ofereix comunicacions privades entre persones.'),
    transportEncryption: unknown('La política parla de «sistemes segurs» sense detallar el xifratge en trànsit.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos per al compte Mi Action; l’accés és amb correu i contrasenya.'),
    independentAudits: unknown('No consten auditories o certificacions de seguretat publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses públic.'),
    vulnerabilityDisclosure: unknown('No hem trobat cap política de divulgació de vulnerabilitats ni fitxer security.txt a action.com.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La declaració de privadesa (actualitzada el juliol de 2026) concreta els terminis. No hem trobat cap sanció ni filtració documentada.',
    openQuestions: [
      'Hi ha un canal de notificació de vulnerabilitats per a action.com?',
      'L’eliminació del compte també esborra l’historial de compres vinculat a la targeta, a banda del que exigeix la llei fiscal?',
    ],
  },
}

/* ═══════════════════════════ SHEIN ═══════════════════════════ */
const shein: AppSeed = {
  slug: 'shein',
  name: 'SHEIN',
  company: 'shein-infinite-styles',
  categories: ['comerc-electronic'],
  tagline: 'Moda ultraràpida amb rastreig declarat, transferències a la Xina i una sanció de 150 milions per galetes',
  summary:
    'SHEIN és un mercat en línia que ven directament i també connecta amb venedors de fora de la UE, als quals passa les dades d’enviament. La política admet transferències a la Xina, Singapur, les Filipines i altres països, i l’ús de xats d’atenció al client desidentificats per entrenar models de qualitat, també amb ChatGPT. La CNIL la va sancionar el 2025 amb 150 milions d’euros per instal·lar galetes publicitàries sense consentiment i no respectar-ne el rebuig.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
  links: {
    website: 'https://es.shein.com/',
    privacyPolicy: 'https://es.shein.com/Privacy-Security-Policy-a-282.html',
    privacyCenter: 'https://roe.shein.com/Privacy-Center-a-1045.html',
    appStore: appStore('878577184'),
  },
  accountRequired: f('yes', 'official', ['shein-privacy-notice'], 'Cal registrar-se amb nom i correu o telèfon per comprar.'),
  openSource: f('no', 'official', ['shein-privacy-notice'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'SHEIN recull la talla, la forma del cos, l’estil, les compres i les preferències de roba de maternitat, que la mateixa política reconeix com a possible dada de salut. Amb els perfils infantils (edat aproximada i gènere) i l’adreça d’enviament, que es comparteix amb venedors de tot el món, permet saber força coses de la composició d’una llar.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['shein-privacy-notice', 'shein-app-store'], note: 'Es comparteix amb els venedors externs quan envien directament.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['shein-privacy-notice', 'shein-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['shein-privacy-notice', 'shein-app-store'], note: 'Màrqueting per SMS i WhatsApp només amb consentiment.' }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['shein-privacy-notice', 'shein-app-store'], note: 'Per a lliurament i duanes, també amb transportistes i venedors de fora de l’EEE.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['shein-privacy-notice', 'shein-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'investigacio-i-estadistica', 'mesura-i-analisi-dus'], sources: ['shein-privacy-notice', 'shein-app-store'] }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['shein-privacy-notice'], note: 'Productes vistos, comprats o afegits a la llista de desitjos.' }),
    row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['shein-app-store'] }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['shein-privacy-notice'], note: 'La preferència per roba de maternitat es tracta com a categoria especial amb consentiment explícit; també la talla i la forma del cos, si s’indiquen.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['shein-privacy-notice'], note: 'Fotos a les ressenyes, públiques, i imatge facial per a la verificació d’edat, que fa un tercer.' }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari', 'entrenament-de-models-dia'], sources: ['shein-privacy-notice'], note: 'Els xats d’atenció al client, desidentificats, s’usen per entrenar models de qualitat i els revisen persones a la Xina i les Filipines.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['shein-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['shein-app-store', 'shein-privacy-notice'], note: 'L’etiqueta declara «identificadors» utilitzats per rastrejar.' }),
    row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['shein-privacy-notice'], note: 'Inclou si el dispositiu té activada l’autenticació biomètrica (sí o no), no la dada biomètrica.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['shein-privacy-notice'], note: 'Ubicació per IP per dirigir a la botiga local i estimar els terminis de lliurament.' }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['shein-privacy-notice', 'shein-cnil-2025'], note: 'Galetes de Google Ads, Microsoft Advertising i Meta.' }),
    row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['recomanacions-algoritmiques'], sources: ['shein-privacy-notice'], note: 'Als perfils infantils es demanen l’edat aproximada i el gènere de l’infant.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['shein-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['shein-app-store'], 'L’etiqueta de l’App Store declara identificadors utilitzats per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['shein-privacy-notice', 'shein-app-store'], 'Remàrqueting amb Google Ads, Microsoft Advertising i Facebook.'),
    thirdPartyTrackersPresent: f('yes', 'regulator', ['shein-cnil-2025', 'shein-privacy-notice'], 'La CNIL va constatar galetes publicitàries de tercers instal·lades en arribar al web, abans de cap consentiment.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['shein-privacy-notice'], 'Publicitat basada en interessos i remàrqueting a altres webs, amb consentiment a través del bàner de galetes.'),
    profiling: f('yes', 'official', ['shein-privacy-notice'], 'Sistema de recomanació amb l’activitat i les compres, i decisions automatitzades per restringir devolucions o suspendre comptes amb un índex de devolucions alt.'),
    aiTraining: f('partial', 'official', ['shein-privacy-notice'], 'Els xats d’atenció al client, desidentificats, s’usen per entrenar models interns de qualitat i s’analitzen amb proveïdors externs com ChatGPT. Es pot exercir l’oposició.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['shein-privacy-notice'], 'Venedors externs del mercat (com a responsables independents), logística, pagaments, màrqueting i publicitat, prevenció del frau i proveïdors d’IA.'),
    intraGroupSharing: f('yes', 'official', ['shein-privacy-notice'], 'Amb les empreses del grup SHEIN, també per a la continuïtat de la personalització.'),
    dataBrokerSales: unknown('La política europea no diu explícitament si ven dades personals.'),
    internationalTransfers: f('yes', 'official', ['shein-privacy-notice'], 'Transferències o accessos des de la Xina, Colòmbia, Egipte, el Marroc, Indonèsia, les Filipines, Singapur i els Estats Units.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats en matèria de dades.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['shein-privacy-notice'], 'La taula de tractaments dona criteris per a cada dada, majoritàriament «mentre el compte sigui actiu més un temps raonable», amb pocs terminis concrets.'),
    dataAfterDeletion: f('partial', 'official', ['shein-privacy-notice'], 'Es conserven les dades de pagament per obligació fiscal i les necessàries per a disputes o investigacions reguladores.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['shein-delete-account']),
    selfService: f('yes', 'official', ['shein-delete-account'], 'A la UE, el Regne Unit i els Estats Units es pot eliminar des de l’aplicació. Fora d’aquestes zones cal demanar-ho a atenció al client.'),
    difficulty: 'medium',
    requiresSupportContact: false,
    steps: [
      'A l’aplicació, obre «Yo» i entra a la configuració.',
      'Tria «Seguridad de la cuenta» i després «Eliminar cuenta».',
      'Llegeix les condicions, marca la casella i confirma la sol·licitud.',
    ],
    obstacles: 'Abans cal no tenir comandes pendents ni saldo al moneder de SHEIN ni processos oberts; la resta de dades es perden sense possibilitat de recuperar-les.',
    dataRetained: 'Dades de pagament i facturació durant els terminis fiscals, i les necessàries per a disputes o investigacions.',
    sources: ['shein-delete-account', 'shein-privacy-notice'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['shein-privacy-notice'], 'La portabilitat es lliura en format de full de càlcul Excel, a petició al centre de privadesa.', {
      url: 'https://roe.shein.com/Privacy-Center-a-1045.html',
    }),
    exportFormatQuality: 'mixed',
    rightsExercise: f('yes', 'official', ['shein-privacy-notice'], 'Centre de privadesa i delegat de protecció de dades a Dublín, amb resposta en un mes ampliable a tres.', {
      url: 'mailto:privacy@sheingroup.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['shein-privacy-notice'], 'Gestor de galetes amb opció de rebutjar les de publicitat i xarxes socials; màrqueting directe per canal a «Preferencias de contacto».'),
    telemetryOptOut: f('partial', 'official', ['shein-privacy-notice'], 'Les galetes de rendiment es poden rebutjar al web; a l’aplicació no hem vist un control equivalent documentat.'),
    granularControls: f('partial', 'official', ['shein-privacy-notice'], 'Controls separats per a galetes, canals de màrqueting i ús dels xats per a IA (per oposició).'),
    defaultPosture: 'mixed',
    darkPatterns: f('yes', 'regulator', ['shein-cnil-2025'], 'La CNIL va constatar que el botó «rebutjar-ho tot» no impedia instal·lar noves galetes publicitàries.'),
    darkPatternList: [
      {
        type: 'unbalanced-consent',
        severity: 'high',
        description: 'Galetes publicitàries instal·lades en arribar al web i que continuaven instal·lant-se després de rebutjar-les o retirar el consentiment, segons la CNIL (2023-2025).',
        sources: ['shein-cnil-2025'],
      },
    ],
  },
  security: {
    e2ee: na('L’aplicació no ofereix comunicacions privades entre persones.'),
    transportEncryption: unknown('La política parla de mesures «estàndard del sector» sense concretar el xifratge.'),
    atRestEncryption: f('no', 'regulator', ['shein-nyag-2022'], 'El 2018 hi havia dades de targetes exposades en text pla i contrasenyes mal protegides, segons la fiscalia de Nova York. No sabem l’estat actual.'),
    mfa: unknown('No hem trobat documentació oficial sobre verificació en dos passos.'),
    independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
    bugBounty: f('yes', 'official', ['shein-hackerone'], 'Programa de recompenses a HackerOne i centre de resposta de seguretat propi.', {
      url: 'https://hackerone.com/shein',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['shein-hackerone'], 'Canal de notificació a través de HackerOne i security.shein.com.'),
  },
  alternatives: [
    {
      app: 'vinted',
      comparability: 'partial',
      rationale: 'Per a roba, la compravenda de segona mà entre particulars evita dependre d’un mercat que transfereix dades a venedors i empreses de fora de l’EEE.',
      tradeOffs: 'No és una botiga: l’oferta depèn del que venen altres persones i també recull dades.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'L’estat de la sanció de la CNIL cal revisar-lo: SHEIN va anunciar recurs davant del Conseil d’État. Les investigacions de la Comissió Europea i de la xarxa CPC sobre SHEIN tracten sobretot de productes il·legals i pràctiques comercials, no de dades personals, i no les hem comptat com a incidents de privadesa.',
    openQuestions: [
      'Quin és l’estat del recurs contra la sanció de la CNIL?',
      'Quines dades de l’aplicació arriben efectivament a les empreses del grup a la Xina?',
    ],
  },
}

/* ═══════════════════════════ IKEA ═══════════════════════════ */
const ikea: AppSeed = {
  slug: 'ikea',
  name: 'IKEA',
  company: 'ikea-iberica',
  categories: ['comerc-electronic'],
  tagline: 'Botiga de mobles amb rastreig declarat, publicitat basada en l’historial de compres i terminis de conservació de fins a deu anys',
  summary:
    'L’aplicació la publica Inter IKEA Systems, però a Espanya el responsable de les dades és IKEA Ibérica, del grup Ingka. L’etiqueta de l’App Store declara identificadors, dades d’ús i diagnòstics utilitzats per rastrejar, i la política preveu publicitat personalitzada amb l’historial de compres i audiències personalitzades a les xarxes. La política és concreta en terminis, però alguns són llargs: deu anys per a les consultes d’atenció al client. L’AEPD la va sancionar el 2019 per instal·lar galetes sense consentiment.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.ikea.com/es/es/',
    privacyPolicy: 'https://www.ikea.com/es/es/customer-service/privacy-policy/',
    appStore: appStore('1452164827'),
  },
  accountRequired: f('partial', 'official', ['ikea-app-privacy-policy'], 'Es pot navegar pel catàleg sense compte; per comprar, desar llistes o fer servir IKEA Family cal registrar-se.'),
  openSource: f('no', 'official', ['ikea-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'L’historial de compres de mobles i articles per a la llar, l’adreça de lliurament, els plànols i dissenys de l’habitatge i l’escaneig de l’entorn per a la realitat augmentada permeten deduir com és la casa d’una persona, qui hi viu i quan s’hi ha mudat.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['ikea-app-store', 'ikea-privacy-policy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['ikea-app-store', 'ikea-privacy-policy'], note: 'Es fa servir per a audiències personalitzades a les xarxes socials.' }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['ikea-app-store'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['ikea-app-store', 'ikea-privacy-policy'], note: 'Es comparteix amb els proveïdors de logística per al lliurament.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['ikea-app-store', 'ikea-privacy-policy'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'personalitzacio-de-continguts', 'mesura-i-analisi-dus'], sources: ['ikea-app-store', 'ikea-privacy-policy'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['ikea-app-store'], note: 'L’etiqueta declara les dades d’ús per a publicitat de tercers i per rastrejar.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['ikea-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['ikea-app-store', 'ikea-app-privacy-policy'] }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['ikea-app-store'], note: 'L’etiqueta declara «dades de publicitat» per a publicitat de tercers.' }),
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['ikea-app-store', 'ikea-privacy-policy'], note: 'Amb consentiment, per a serveis basats en la ubicació.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['ikea-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['ikea-app-store'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ikea-app-store'], note: 'L’etiqueta declara també l’escaneig de l’entorn, propi de les funcions de realitat augmentada.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['ikea-privacy-policy'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['ikea-app-store'], note: 'L’etiqueta declara diagnòstics utilitzats per rastrejar.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['ikea-app-store'], 'L’etiqueta declara identificadors, dades d’ús i diagnòstics utilitzats per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['ikea-app-store'], 'Dades de publicitat i identificador d’usuari declarats per a publicitat de tercers.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['ikea-privacy-policy'], 'Google Analytics, píxels als correus i audiències personalitzades.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['ikea-privacy-policy'], 'Publicitat personalitzada amb l’historial de compres i de navegació, basada en l’interès legítim, amb dret d’oposició.'),
    profiling: f('yes', 'official', ['ikea-privacy-policy'], 'Segmentació per a publicitat i comunicacions; la política diu que no pren decisions automatitzades amb efectes sobre la persona.'),
    aiTraining: unknown('La política esmenta assistents virtuals i anàlisi automatitzada de xats i trucades, però no diu si les dades serveixen per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['ikea-privacy-policy'], 'Proveïdors de pagament, logística, programari, màrqueting, analítica i IA.'),
    intraGroupSharing: f('yes', 'official', ['ikea-privacy-policy'], 'Amb empreses del grup Ingka (IKEA IT AB, IKEA Services B.V. i altres); Inter IKEA Systems només en rep dades pseudonimitzades.'),
    dataBrokerSales: f('no', 'official', ['ikea-privacy-policy'], 'La política diu que no cedeix les dades a tercers amb finalitats comercials.'),
    internationalTransfers: f('yes', 'official', ['ikea-privacy-policy'], 'Decisions d’adequació o clàusules contractuals tipus; WhatsApp implica transferències al grup Meta.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['ikea-privacy-policy', 'ikea-app-privacy-policy'], 'Terminis concrets per categoria: sis anys per a compres, deu per a dades fiscals i consultes d’atenció al client, trenta dies per a la videovigilància i fins a cinc anys per a l’analítica de l’aplicació.'),
    dataAfterDeletion: f('partial', 'official', ['ikea-privacy-policy'], 'Després de la baixa es conserven les dades fiscals i l’historial d’atenció al client durant deu anys.'),
    periods: [
      { dataType: 'historial-de-compres', period: 'Sis anys', sources: ['ikea-privacy-policy'] },
      { dataType: 'dades-de-pagament', period: 'Deu anys, per obligació fiscal', sources: ['ikea-privacy-policy'] },
      { dataType: 'interaccions-i-us', period: 'Fins a cinc anys l’analítica de l’aplicació', sources: ['ikea-app-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['ikea-delete-account']),
    selfService: f('partial', 'official', ['ikea-delete-account'], 'La pàgina d’ajuda diu que es pot cancel·lar la subscripció a IKEA Family des del perfil, però per eliminar el perfil i les dades remet al formulari de drets ARSOPOL.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Per donar-te de baixa d’IKEA Family, entra al perfil i cancel·la la subscripció.',
      'Per eliminar el compte i les dades, omple el formulari de drets ARSOPOL i demana el dret de supressió.',
      'Com a alternativa, escriu a tusdatos@ikea.com.',
      'Guarda la confirmació de la sol·licitud.',
    ],
    obstacles: 'La pàgina d’ajuda barreja la cancel·lació de la subscripció amb l’eliminació de les dades, que requereix una sol·licitud formal. No s’indica cap termini de tramitació.',
    dataRetained: 'Dades fiscals i consultes d’atenció al client durant deu anys.',
    sources: ['ikea-delete-account', 'ikea-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['ikea-privacy-policy'], 'La portabilitat es reconeix i s’exerceix amb el formulari de drets, sense eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['ikea-privacy-policy'], 'Formulari de drets ARSOPOL i delegat de protecció de dades.', {
      url: 'mailto:tusdatos@ikea.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['ikea-privacy-policy'], 'La publicitat personalitzada es basa en l’interès legítim: cal exercir l’oposició en lloc de donar consentiment. Les galetes es gestionen al web.'),
    telemetryOptOut: unknown('No hem trobat cap control documentat per desactivar l’analítica dins de l’aplicació.'),
    granularControls: f('partial', 'official', ['ikea-app-privacy-policy'], 'Permís d’ubicació revocable i gestor de galetes; la resta de tractaments s’han de gestionar per oposició.'),
    defaultPosture: 'permissive',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('L’aplicació no ofereix comunicacions privades entre persones.'),
    transportEncryption: unknown('No hem trobat cap documentació oficial sobre el xifratge en trànsit.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos per al compte de client.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: f('partial', 'official', ['ikea-bug-bounty'], 'Programa a HackerOne que inclou les aplicacions mòbils; només les vulnerabilitats crítiques i altes resoltes «poden» rebre recompensa.', {
      url: 'https://bugs.ikea.com/',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['ikea-bug-bounty', 'ikea-security-txt'], 'Fitxer security.txt amb contacte i clau PGP, i divulgació pública trenta dies després de la correcció. El security.txt tenia data de caducitat del 20 de setembre de 2026.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La condemna penal d’IKEA France per espiar treballadors i clients no és una sanció del RGPD ni afecta l’aplicació, però l’hem inclosa com a context sobre el grup. Hi ha dues sancions menors a IKEA Romania (2021 i 2022) i una bretxa interna a IKEA Canada (2022) que no hem registrat com a incidents perquè no afecten el tractament a Espanya.',
    openQuestions: [
      'Hi ha un botó d’autoservei per eliminar el compte a l’aplicació, o sempre cal el formulari de drets?',
      'Es va recórrer la sanció de l’AEPD de 2019?',
    ],
  },
}

/* ═══════════════════════════ Primor ═══════════════════════════ */
const primor: AppSeed = {
  slug: 'primor',
  name: 'Perfumerías Primor',
  company: 'primor',
  categories: ['comerc-electronic'],
  tagline: 'Perfumeria amb perfilat publicitari declarat, sense terminis concrets i amb baixa que tramita una persona',
  summary:
    'Primor és una cadena familiar malaguenya amb quatre societats corresponsables del tractament. La política reconeix que elabora un perfil a partir de la navegació i les compres per personalitzar la publicitat a altres webs i xarxes, i que transfereix dades a proveïdors dels Estats Units. L’etiqueta de l’App Store declara identificadors utilitzats per rastrejar però cap dada vinculada a la persona, cosa que no encaixa amb els comptes i perfils de compra que descriu la política.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.primor.eu/es_es/',
    privacyPolicy: 'https://www.primor.eu/es_es/politicas-de-privacidad',
    appStore: appStore('1104772567'),
  },
  accountRequired: f('partial', 'official', ['primor-privacy-policy'], 'Cal un compte per gestionar comandes i el perfil; el catàleg es pot consultar sense.'),
  openSource: f('no', 'official', ['primor-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Les compres de perfumeria, cosmètica i cura personal revelen gustos, edat aproximada, gènere i, de vegades, tractaments dermatològics. La política hi afegeix data de naixement, geolocalització i dades acadèmiques i professionals.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['primor-privacy-policy'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['primor-privacy-policy'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['primor-privacy-policy'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['primor-privacy-policy'], note: 'La política parla de «datos sobre gustos y preferencias» i d’un perfil per personalitzar la publicitat.' }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['primor-privacy-policy'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['publicitat-personalitzada', 'prestacio-del-servei'], sources: ['primor-app-store', 'primor-privacy-policy'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'prestacio-del-servei'], sources: ['primor-app-store'], note: 'L’etiqueta declara «identificadors» utilitzats per rastrejar.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['primor-app-store', 'primor-privacy-policy'], note: 'Google Analytics amb Google Signals.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['primor-privacy-policy'] }),
    row('ocupacio-i-carrec', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['primor-privacy-policy'], note: 'La política esmenta dades acadèmiques i professionals, sobretot en la selecció de personal.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['primor-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['primor-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['primor-app-store', 'primor-privacy-policy'], 'Identificador del dispositiu declarat per a publicitat i màrqueting.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['primor-privacy-policy'], 'Google Analytics amb Google Signals i galetes publicitàries.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['primor-privacy-policy'], 'Publicitat personalitzada a webs, aplicacions i xarxes socials, per consentiment o interès legítim.'),
    profiling: f('yes', 'official', ['primor-privacy-policy'], 'La política diu que elabora un perfil de les persones usuàries amb la navegació, l’historial de compres i les galetes.'),
    aiTraining: unknown('La política no esmenta l’ús de dades per entrenar models d’IA.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['primor-privacy-policy'], 'Entitats financeres i de pagament, proveïdors tecnològics, logística, màrqueting i publicitat.'),
    intraGroupSharing: f('yes', 'official', ['primor-privacy-policy'], 'Corresponsabilitat entre Rosa Crema, Primor Can, Persian Melon i Sentimental Journey (Portugal).'),
    dataBrokerSales: unknown('La política no diu si ven dades personals.'),
    internationalTransfers: f('yes', 'official', ['primor-privacy-policy'], 'Transferències a proveïdors dels Estats Units, com Google.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['primor-privacy-policy'], 'Només criteris genèrics («mentre mantinguis el compte actiu», terminis de prescripció); l’únic termini concret és un any per als currículums.'),
    dataAfterDeletion: f('partial', 'official', ['primor-privacy-policy', 'primor-delete-account'], 'Les dades queden bloquejades durant els terminis legals i després s’eliminen.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['primor-delete-account']),
    selfService: f('no', 'official', ['primor-delete-account'], 'Es fa una sol·licitud des del centre d’ajuda i una persona tramita el cas.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Obre l’article «Eliminar mi cuenta» del centre d’ajuda de Primor.',
      'Envia la sol·licitud d’eliminació des del botó de l’article.',
      'Espera que una persona de l’equip tramiti el cas i te’n confirmi l’eliminació.',
      'Com a alternativa, escriu a data@primor.eu exercint el dret de supressió.',
    ],
    obstacles: 'No hi ha botó d’eliminació immediata ni termini de tramitació indicat. Es perden l’historial de comandes i els saldos o cupons.',
    dataRetained: 'Les dades exigides per llei, com les factures, durant els terminis legals.',
    sources: ['primor-delete-account', 'primor-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['primor-privacy-policy'], 'La portabilitat es reconeix, però cal demanar-la per correu o tiquet.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['primor-privacy-policy'], 'Per correu a data@primor.eu, per tiquet al centre d’ajuda o des del perfil.', {
      url: 'mailto:data@primor.eu',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['primor-privacy-policy'], 'Configuració de galetes i opcions del dispositiu; part de la publicitat es basa en l’interès legítim.'),
    telemetryOptOut: f('partial', 'official', ['primor-privacy-policy'], 'L’analítica depèn del consentiment de galetes al web; a l’aplicació no hem trobat un control equivalent.'),
    granularControls: f('partial', 'official', ['primor-privacy-policy'], 'Galetes per categories i baixa del butlletí.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('L’aplicació no ofereix comunicacions privades entre persones.'),
    transportEncryption: unknown('No hem trobat cap documentació oficial sobre el xifratge en trànsit.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap opció de verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hem trobat cap canal de notificació de vulnerabilitats; primor.eu no publica security.txt.'),
  },
  review: {
    researchStatus: 'initial',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'L’etiqueta de l’App Store declara que cap dada es vincula a la persona, però la política descriu comptes, historial de compres i perfils. No hem trobat sancions ni filtracions. La seguretat queda tota per documentar.',
    openQuestions: [
      'Per què l’etiqueta de l’App Store no declara cap dada vinculada a la persona si l’aplicació té comptes?',
      'Quant temps triga la tramitació d’una sol·licitud d’eliminació?',
    ],
  },
}

export const lot: SeedLot = {
  companies: [
  {
    slug: 'idealo',
    name: 'idealo',
    legalName: 'idealo internet GmbH',
    description: 'Comparador de preus amb seu a Berlín, participat majoritàriament per Axel Springer. Cobra dels comerços pels clics que hi redirigeix i per publicitat.',
    headquartersCountry: 'DE',
    euEstablishment: 'DE',
    ownership: 'subsidiary',
    parentGroup: 'Axel Springer',
    foundedYear: 2000,
    primaryRevenueModel: 'advertising',
    website: 'https://www.idealo.es/',
    productDomains: ['idealo.de', 'idealo.es', 'idealo.fr', 'idealo.it', 'idealo.at', 'idealo.co.uk'],
    privacyContact: 'privacy@idealo.es',
  },
  {
    slug: 'pdd-holdings',
    name: 'PDD Holdings',
    legalName: 'PDD Holdings Inc.',
    description: 'Grup de comerç electrònic d’origen xinès, propietari de Pinduoduo i de Temu, cotitzat al Nasdaq.',
    ownership: 'public',
    primaryRevenueModel: 'commerce',
    website: 'https://www.pddholdings.com/',
    productDomains: ['temu.com'],
  },
  {
    slug: 'whaleco-technology',
    name: 'Whaleco Technology',
    legalName: 'Whaleco Technology Limited',
    parent: 'pdd-holdings',
    description: 'Filial irlandesa de PDD Holdings, responsable del tractament de les dades de Temu a la UE, l’EEE i Suïssa. L’aplicació la publica Whaleco Inc., als Estats Units.',
    headquartersCountry: 'IE',
    euEstablishment: 'IE',
    leadSupervisoryAuthority: 'dpc-ie',
    ownership: 'subsidiary',
    primaryRevenueModel: 'commerce',
    website: 'https://www.temu.com/es/',
  },
  {
    slug: 'zalando',
    name: 'Zalando',
    legalName: 'Zalando SE',
    description: 'Botiga de moda en línia amb seu a Berlín, amb marketplace de marques i un negoci publicitari propi (Zalando Marketing Services).',
    headquartersCountry: 'DE',
    euEstablishment: 'DE',
    leadSupervisoryAuthority: 'berlin',
    ownership: 'public',
    primaryRevenueModel: 'commerce',
    website: 'https://www.zalando.es/',
    productDomains: ['zalando.es', 'zalando.de', 'zalando.com', 'zalando-lounge.es', 'zalando-prive.es'],
    privacyContact: 'privacidad@zalando.es',
  },
  {
    slug: 'carrefour-group',
    name: 'Carrefour',
    legalName: 'Carrefour SA',
    description: 'Grup francès de distribució alimentària, present a Espanya amb hipermercats, supermercats i botiga en línia.',
    headquartersCountry: 'FR',
    ownership: 'public',
    primaryRevenueModel: 'commerce',
    website: 'https://www.carrefour.com/',
    productDomains: ['carrefour.com', 'carrefour.es', 'carrefour.fr'],
  },
  {
    slug: 'carrefour-espana',
    name: 'Carrefour España',
    legalName: 'Centros Comerciales Carrefour, S.A.',
    parent: 'carrefour-group',
    description: 'Filial espanyola de Carrefour, responsable del tractament de les dades del Club Carrefour, la botiga en línia i l’aplicació Mi Carrefour.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'aepd',
    ownership: 'subsidiary',
    foundedYear: 1976,
    primaryRevenueModel: 'commerce',
    website: 'https://www.carrefour.es/',
    privacyContact: 'es_oficina_privacidad@carrefour.com',
  },
  {
    slug: 'alibaba-group',
    name: 'Alibaba Group',
    legalName: 'Alibaba Group Holding Limited',
    description: 'Grup xinès de comerç electrònic, pagaments i computació al núvol, propietari de Taobao, Tmall, AliExpress, Alibaba.com, DingTalk i Alibaba Cloud. Cotitza a Nova York i Hong Kong.',
    headquartersCountry: 'CN',
    ownership: 'public',
    primaryRevenueModel: 'mixed',
    website: 'https://www.alibabagroup.com/',
    productDomains: ['alibaba.com', 'aliexpress.com', 'taobao.com', 'tmall.com', 'dingtalk.com', 'alibabacloud.com'],
  },
  {
    slug: 'alibaba-com-singapore',
    name: 'Alibaba.com Singapore E-Commerce',
    legalName: 'Alibaba.com Singapore E-Commerce Private Limited',
    parent: 'alibaba-group',
    description: 'Filial de Singapur responsable de les dades de qui es registra a Alibaba.com fora de la Xina continental. L’aplicació la publica una altra societat singapuresa del grup, Alibaba.com Global Supplier Services.',
    headquartersCountry: 'SG',
    leadSupervisoryAuthority: 'garante-it',
    ownership: 'subsidiary',
    primaryRevenueModel: 'commerce',
    website: 'https://www.alibaba.com/',
    productDomains: ['alibaba.com'],
    privacyContact: 'DataProtection@service.alibaba.com',
  },
  {
    slug: 'ceconomy',
    name: 'Ceconomy',
    legalName: 'Ceconomy AG',
    description: 'Grup alemany de distribució d’electrònica, amb seu a Düsseldorf, propietari de MediaMarkt i Saturn. Es va separar de Metro el 2017 i cotitza a Frankfurt.',
    headquartersCountry: 'DE',
    euEstablishment: 'DE',
    ownership: 'public',
    primaryRevenueModel: 'commerce',
    website: 'https://www.ceconomy.de/',
    productDomains: ['mediamarkt.es', 'mediamarkt.de', 'saturn.de'],
  },
  {
    slug: 'mediamarkt-saturn-espana',
    name: 'MediaMarkt España',
    legalName: 'Media Markt Saturn, S.A.U.',
    parent: 'ceconomy',
    description: 'Filial espanyola del grup Ceconomy, amb seu al Prat de Llobregat. És la responsable de les dades de la web i l’aplicació de MediaMarkt a Espanya, que publica MMS E-Commerce GmbH.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'aepd',
    ownership: 'subsidiary',
    primaryRevenueModel: 'commerce',
    website: 'https://www.mediamarkt.es/',
    productDomains: ['mediamarkt.es'],
    privacyContact: 'dpo@mediamarkt.es',
  },
  {
    slug: 'action',
    name: 'Action',
    legalName: 'Action Service & Distributie B.V.',
    description: 'Cadena neerlandesa de botigues de descompte amb presència a una quinzena de països europeus. L’aplicació i el compte Mi Action vinculen les compres a botiga amb una targeta de client digital.',
    headquartersCountry: 'NL',
    euEstablishment: 'NL',
    leadSupervisoryAuthority: 'ap-nl',
    ownership: 'private',
    primaryRevenueModel: 'commerce',
    website: 'https://www.action.com/',
    productDomains: ['action.com'],
    privacyContact: 'privacy@action.nl',
  },
  {
    slug: 'shein-group',
    name: 'SHEIN',
    legalName: 'Roadget Business Pte. Ltd.',
    description: 'Grup de moda ultraràpida i mercat en línia amb seu a Singapur i producció principalment a la Xina. Publica l’aplicació a l’App Store.',
    headquartersCountry: 'SG',
    euEstablishment: 'IE',
    leadSupervisoryAuthority: 'dpc-ie',
    ownership: 'private',
    primaryRevenueModel: 'commerce',
    website: 'https://www.shein.com/',
    productDomains: ['shein.com', 'romwe.com'],
  },
  {
    slug: 'shein-infinite-styles',
    name: 'Infinite Styles Services',
    legalName: 'Infinite Styles Services Co., Limited',
    parent: 'shein-group',
    description: 'Filial irlandesa de SHEIN, responsable del tractament de les dades de la web i l’aplicació a l’Espai Econòmic Europeu.',
    headquartersCountry: 'IE',
    euEstablishment: 'IE',
    leadSupervisoryAuthority: 'dpc-ie',
    ownership: 'subsidiary',
    primaryRevenueModel: 'commerce',
    website: 'https://es.shein.com/',
    privacyContact: 'privacy@sheingroup.com',
  },
  {
    slug: 'ingka-group',
    name: 'Ingka Group',
    legalName: 'Ingka Holding B.V.',
    description: 'Principal franquiciat d’IKEA, que explota la majoria de botigues de la marca al món, entre elles les d’Espanya.',
    headquartersCountry: 'NL',
    ownership: 'private',
    primaryRevenueModel: 'commerce',
    website: 'https://www.ingka.com/',
    productDomains: ['ikea.com'],
  },
  {
    slug: 'ikea-iberica',
    name: 'IKEA Ibérica',
    legalName: 'IKEA Ibérica, S.A.U.',
    parent: 'ingka-group',
    description: 'Filial espanyola del grup Ingka, responsable del tractament de les dades de la web, l’aplicació i IKEA Family a Espanya. L’aplicació la publica Inter IKEA Systems B.V., el franquiciador de la marca.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'aepd',
    ownership: 'subsidiary',
    primaryRevenueModel: 'commerce',
    website: 'https://www.ikea.com/es/es/',
    privacyContact: 'tusdatos@ikea.com',
  },
  {
    slug: 'primor',
    name: 'Perfumerías Primor',
    legalName: 'Rosa Crema, S.L.',
    description: 'Cadena familiar de perfumeria i cosmètica fundada a Màlaga el 1953. Quatre societats del grup (Rosa Crema, Primor Can, Persian Melon i Sentimental Journey, a Portugal) són corresponsables del tractament.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'aepd',
    ownership: 'private',
    foundedYear: 1953,
    primaryRevenueModel: 'commerce',
    website: 'https://www.primor.eu/',
    productDomains: ['primor.eu'],
    privacyContact: 'data@primor.eu',
  },
  ],
  sources: [
    s('idealo-privacy-policy', 'Protección de datos - idealo internet GmbH', 'https://www.idealo.es/legal/proteccion-de-datos', 'idealo internet GmbH', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de gener de 2026: compte opcional, perfils publicitaris entre dispositius amb consentiment, llista de socis de seguiment, aprenentatge automàtic i terminis de conservació.',
    }),
    s('idealo-app-store', 'idealo - App de compras online — App Store (España)', 'https://apps.apple.com/es/app/id454415640', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, identificadors i dades d’ús utilitzats per rastrejar; compres i identificadors vinculats a la persona.',
    }),
    s('idealo-security-txt', 'security.txt — idealo.es', 'https://www.idealo.es/.well-known/security.txt', 'idealo internet GmbH', 'technical-doc', 'primary', {
      summary: 'Contacte de seguretat security@idealo.de amb clau PGP, vigent fins al juliol de 2027.',
    }),
    s('temu-privacy-policy', 'Temu | España | Política de privacidad', 'https://www.temu.com/es/privacy-and-cookie-policy.html', 'Whaleco Technology Limited', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política per a la UE de maig de 2026: responsable irlandès, bases legals per finalitat, perfilat per interès legítim, accés de filials de fora de l’EEE i conservació decidida cas per cas.',
    }),
    s('temu-app-store', 'Temu: Compra como millonario — App Store (España)', 'https://apps.apple.com/es/app/id1641486558', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, informació financera, ubicació, contacte, contingut, cerques, identificadors, ús i diagnòstics vinculats a la persona; no declara rastreig.',
    }),
    s('temu-delete-guide', 'How to delete your Temu account', 'https://nordvpn.com/blog/how-to-delete-temu-account/', 'NordVPN', 'press', 'secondary', {
      summary: 'Guia pas a pas per eliminar el compte des de «Seguretat del compte», amb verificació d’identitat i període de desactivació.',
    }),
    s('temu-hackerone', 'Temu — Bug Bounty Program', 'https://hackerone.com/temu', 'HackerOne', 'technical-doc', 'primary', {
      summary: 'Programa de recompenses de Temu a HackerOne.',
    }),
    s('temu-bug-bounty-2023', 'Temu Bolsters Cybersecurity Measures with New Bug Bounty Initiative and 2FA', 'https://www.globalsecuritymag.com/Temu-Bolsters-Cybersecurity-Measures-with-New-Bug-Bounty-Initiative-and-2FA.html', 'Global Security Mag', 'press', 'secondary', {
      summary: 'Temu anuncia un programa de recompenses a HackerOne i la verificació en dos passos.',
    }),
    s('temu-beuc-2024', 'Taming Temu', 'https://www.beuc.eu/enforcement/taming-temu', 'BEUC', 'ngo', 'independent', {
      summary: 'Queixa de BEUC i 17 associacions de consumidors (maig de 2024) contra Temu per patrons foscos, manca de traçabilitat dels venedors i dificultats per tancar el compte.',
    }),
    s('temu-pipc-2025', 'China’s Temu fined for transfer of Korean users’ personal info', 'https://www.koreatimes.co.kr/business/companies/20250515/chinas-temu-fined-for-transfer-of-south-korean-users-personal-info', 'The Korea Times', 'press', 'secondary', {
      publishedAt: '2025-05-15',
      summary: 'L’autoritat coreana de protecció de dades sanciona Temu per transferir dades a la Xina i altres països sense informar-ne, no tenir representant local i dificultar la baixa.',
    }),
    s('temu-arkansas-2024', 'Attorney General Griffin sues Chinese e-commerce company Temu for deceiving Arkansans, illegally accessing their personal information', 'https://arkansasag.gov/news-release/attorney-general-griffin-sues-chinese-e-commerce-company-temu-for-deceiving-arkansans-illegally-accessing-their-personal-information/', 'Arkansas Attorney General', 'regulator', 'authority', {
      publishedAt: '2024-06-25',
      summary: 'Demanda de l’estat d’Arkansas contra PDD Holdings i Whaleco per accés il·legal a dades personals i pràctiques enganyoses; és una acusació, no una resolució.',
    }),

    s('temu-nebraska-2025', 'Attorney General Hilgers Files Lawsuit Against Temu for Siphoning Nebraskans’ Phone Data', 'https://ago.nebraska.gov/attorney-general-hilgers-files-lawsuit-against-temu-siphoning-nebraskans-phone-data', 'Nebraska Attorney General', 'regulator', 'authority', {
      summary: 'Demanda de l’estat de Nebraska (juny de 2025) que acusa l’aplicació de Temu de recollir dades del telèfon de manera encoberta; és una acusació pendent de judici.',
    }),
    s('zalando-privacy-policy-es', 'Protección de datos | Zalando', 'https://www.zalando.es/zalando-proteccion-de-datos/', 'Zalando SE', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política vigent a Espanya (agost de 2026): contacte del delegat, bases legals i ús de dades per entrenar sistemes d’aprenentatge automàtic i d’IA.',
    }),
    s('zalando-privacy-notice', 'Zalando Privacy Notice (As at: 09/2025)', 'https://mosaic02.ztat.net/cnt/contentful-apps/uploads/6264a7fa-33a0-42b3-8021-da7a5fd85469.pdf', 'Zalando SE', 'privacy-policy', 'primary', {
      summary: 'Text complet de la política europea per a clients: entitats responsables, publicitat de Zalando Marketing Services, solvència, proveïdors d’IA, terminis de conservació i drets.',
    }),
    s('zalando-app-store', 'Zalando: Tienda De Moda Online — App Store (España)', 'https://apps.apple.com/es/app/id585629514', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, ubicació, contacte, cerques, navegació, identificadors i ús utilitzats per rastrejar.',
    }),
    s('zalando-transparency-hub', 'Transparency Hub | Zalando Corporate', 'https://corporate.zalando.com/en/investor-relations/corporate-governance/transparency-hub', 'Zalando SE', 'transparency-report', 'primary', {
      summary: 'Informes de transparència de la Llei de serveis digitals des de 2023, auditories externes i informes d’avaluació de riscos.',
    }),
    s('zalando-vdp', 'Report a vulnerability | Zalando Corporate', 'https://corporate.zalando.com/en/about-us/report-vulnerability', 'Zalando SE', 'technical-doc', 'primary', {
      summary: 'Programa de divulgació de vulnerabilitats a Intigriti, sense recompenses, que inclou els dominis i les aplicacions de Zalando.',
    }),
    s('zalando-datatilsynet-2024', 'Final decision regarding complaint against Zalando SE (Art. 60)', 'https://www.edpb.europa.eu/system/files/2025-05/dk-2024-05-decision-public_redacted_1.pdf', 'Datatilsynet (Dinamarca)', 'regulator', 'authority', {
      publishedAt: '2024-05-21',
      summary: 'Arxiu d’una queixa sobre l’esborrat d’un compte: l’autoritat de Berlín va considerar lícit endarrerir-lo fins que vencés el termini de devolució.',
    }),
    s('carrefour-privacy-policy', 'Política de Privacidad de Compra Online | Carrefour', 'https://www.carrefour.es/politica-de-privacidad/mas-info/', 'Centros Comerciales Carrefour', 'privacy-policy', 'primary', {
      language: 'es',
      archiveUrl: 'https://web.archive.org/web/20260916021621/https://www.carrefour.es/politica-de-privacidad/mas-info/',
      summary: 'Responsables, dades, publicitat personalitzada amb consentiment, cupons generats amb IA, cotractament amb Servicios Financieros Carrefour i analítica amb «data clean rooms».',
    }),
    s('carrefour-club-terms', 'Bases legales El Club Carrefour', 'https://www.carrefour.es/clubcarrefour/bases_legales/', 'Centros Comerciales Carrefour', 'terms', 'primary', {
      language: 'es',
      summary: 'Dades del Club que es poden cedir a entitats adscrites amb consentiment (llar, fills, secció censal, segments), conservació i baixa.',
    }),
    s('carrefour-rights', 'Puntos de Atención — GDPR El Club Carrefour', 'https://www.carrefour.es/gdpr/mas-info/club/puntos-de-atencion.aspx', 'Centros Comerciales Carrefour', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Canals per exercir els drets de protecció de dades: compte, correu electrònic, correu postal i formulari.',
    }),
    s('carrefour-app-store', 'Mi Carrefour: Cupones y Ahorro — App Store (España)', 'https://apps.apple.com/es/app/id605788142', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, contacte, cerques, identificadors i ús utilitzats per rastrejar.',
    }),
    s('carrefour-disclosure', 'Vulnerability Disclosure Policy | Carrefour', 'https://www.carrefour.com/disclosure', 'Carrefour SA', 'technical-doc', 'primary', {
      summary: 'Política de divulgació de vulnerabilitats del grup, per correu i sense programa de recompenses.',
    }),
    s('carrefour-aepd-2025', 'Resolución de procedimiento sancionador PS/00128/2024', 'https://www.aepd.es/documento/ps-00128-2024.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      publishedAt: '2025-03-14',
      summary: 'Multa de 3,2 milions d’euros a Centros Comerciales Carrefour per cinc bretxes de 2023 per reutilització de credencials i per no comunicar-les a les persones afectades.',
    }),
    s('carrefour-sfc-aepd-2025', 'Resolución de procedimiento sancionador PS/00288/2025', 'https://www.aepd.es/documento/ps-00288-2025.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      publishedAt: '2025-09-17',
      summary: 'Multa d’1,5 milions d’euros a Servicios Financieros Carrefour per una bretxa de desembre de 2023, amb reconeixement de responsabilitat i pagament voluntari.',
    }),
    s('carrefour-cnil-2020', 'Délibération SAN-2020-008 du 18 novembre 2020 (Carrefour France)', 'https://www.legifrance.gouv.fr/cnil/id/CNILTEXT000042563756', 'CNIL', 'regulator', 'authority', {
      language: 'fr',
      publishedAt: '2020-11-18',
      summary: 'Multa de 2,25 milions d’euros a Carrefour France per conservació excessiva de dades del programa de fidelitat, galetes sense consentiment i obstacles als drets.',
    }),
    s('alibaba-privacy-policy', 'Alibaba.com Privacy Policy', 'https://rule.alibaba.com/rule/detail/2034.htm', 'Alibaba.com', 'privacy-policy', 'primary', {
      summary: 'Política actualitzada el 12 d’agost de 2026: responsable a Singapur, Garante italià com a autoritat principal, bases legals per a la UE, xats gestionats per DingTalk, emmagatzematge a Alemanya amb accés remot des de la Xina i Singapur, i conservació sense terminis concrets.',
    }),
    s('alibaba-app-store', 'App de comercio B2B Alibaba — App Store (España)', 'https://apps.apple.com/es/app/id503451073', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, dades de contacte i identificadors utilitzats per rastrejar; contacte per a publicitat de tercers; ubicació, historial de cerca, ús i contingut vinculats a la persona.',
    }),
    s('alibaba-delete-account', 'How can I delete my buyer account on Alibaba.com?', 'https://helpcenter.alibaba.com/s/buyer/knowledge?questionId=25ec868afeda4f209bb0dd8c8477625asgvpc278077001&categoryId=9207664&pageId=128&category=9207664&knowledge=20153842&language=en', 'Alibaba.com', 'support-doc', 'primary', {
      summary: 'Diferència entre desactivar i eliminar el compte, passos al web i a l’aplicació, i condició de no tenir comandes ni disputes obertes.',
    }),
    s('alibaba-asrc', 'Alibaba Security Response Center (ASRC)', 'https://security.alibaba.com/', 'Alibaba Group', 'other', 'primary', {
      summary: 'Centre de resposta de seguretat del grup Alibaba, amb canal de notificació de vulnerabilitats i programa de recompenses.',
    }),
    s('mediamarkt-privacy-policy', 'Política de privacidad | MediaMarkt', 'https://www.mediamarkt.es/es/legal/politica-de-privacidad', 'Media Markt Saturn, S.A.U.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política del 8 d’abril de 2026: responsable, finalitats i bases legals, prevenció del frau amb Forter, galetes en corresponsabilitat amb Platform Services, assistent d’IA per WhatsApp i conservació de tretze mesos de les seves converses.',
    }),
    s('mediamarkt-mimediamarkt-policy', 'Política de privacidad miMediaMarkt', 'https://www.mediamarkt.es/es/legal/politica-de-privacidad-mimediamarkt', 'Media Markt Saturn, S.A.U.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Programa de fidelitat: perfilat per interès legítim amb compres a botiga i en línia, clics a la web i l’aplicació, butlletins i trucades; accés del grup i bloqueig de les dades fins a la prescripció.',
    }),
    s('mediamarkt-app-store', 'MediaMarkt Comprar Online — App Store (España)', 'https://apps.apple.com/es/app/id1438532508', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, contacte, historial de cerca i de navegació, identificadors i ús utilitzats per rastrejar; ubicació i diagnòstics no vinculats.',
    }),
    s('mediamarkt-delete-account', '¿Cómo puedo desactivar mi cuenta? | MediaMarkt', 'https://te-ayudamos.mediamarkt.es/app/answers/detail/a_id/17136', 'MediaMarkt', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Passos per eliminar el compte des de «Mi Cuenta > Datos Personales».',
    }),
    s('mediamarkt-security', 'Seguridad informática | MediaMarkt', 'https://www.mediamarkt.es/es/legal/seguridad-informatica', 'MediaMarkt', 'technical-doc', 'primary', {
      language: 'es',
      summary: 'Programa de divulgació de vulnerabilitats amb HackerOne, sense recompenses declarades.',
    }),
    s('mediamarkt-security-txt', 'security.txt de mediamarkt.es', 'https://www.mediamarkt.es/.well-known/security.txt', 'MediaMarkt', 'technical-doc', 'primary', {
      summary: 'Fitxer security.txt que remet al programa de divulgació de vulnerabilitats del grup.',
    }),
    s('mediamarkt-aepd-2016', 'Resolución R/01794/2016, procedimiento PS/00037/2016', 'https://www.aepd.es/documento/ps-00037-2016.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      summary: 'Multa de 2.000 euros a la societat de la botiga MediaMarkt de Santander per posar a la venda un mòbil retornat amb fotos i dades de la persona usuària.',
    }),
    s('mediamarkt-hive-2021', 'MediaMarkt hit by Hive ransomware, initial $240 million ransom', 'https://www.bleepingcomputer.com/news/security/mediamarkt-hit-by-hive-ransomware-initial-240-million-ransom/', 'BleepingComputer', 'press', 'independent', {
      publishedAt: '2021-11-08',
      summary: 'Atac de ransomware Hive contra MediaMarkt: servidors xifrats, botigues afectades als Països Baixos i Alemanya i rescat inicial de 240 milions de dòlars.',
    }),
    s('action-privacy-statement', 'Declaración de privacidad | Action ES', 'https://www.action.com/es-es/declaracion-de-privacidad/', 'Action', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de juliol de 2026: dades de l’aplicació, Mi Action i la targeta de client, publicitat amb correu xifrat a les xarxes amb consentiment, terminis concrets per tractament i contacte del delegat de protecció de dades.',
    }),
    s('action-app-store', 'Action — App Store (España)', 'https://apps.apple.com/es/app/id1531860284', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors utilitzats per rastrejar; correu, nom, ubicació aproximada i ús vinculats a la persona.',
    }),
    s('action-my-action-faq', 'Mi Action — Preguntas frecuentes | Action ES', 'https://www.action.com/es-es/servicio-de-atencion-al-cliente/preguntas-frecuentes/mi-action/', 'Action', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Com eliminar el compte des de «Mis datos», termini de fins a 30 dies laborables, pèrdua de segells i conservació dels tiquets digitals dos anys.',
    }),
    s('shein-privacy-notice', 'SHEIN Privacy Notice (EEA)', 'https://es.shein.com/Privacy-Security-Policy-a-282.html', 'SHEIN', 'privacy-policy', 'primary', {
      summary: 'Avís de privadesa vigent des del 28 de juliol de 2026: responsable irlandès, taula de tractaments, ús de xats desidentificats per entrenar models, compartició amb venedors i transferències a la Xina i altres països.',
    }),
    s('shein-app-store', 'SHEIN - Compras Online — App Store (España)', 'https://apps.apple.com/es/app/id878577184', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors utilitzats per rastrejar; contacte, compres, pagament i identificadors vinculats a la persona.',
    }),
    s('shein-delete-account', 'Delete or Cancel SHEIN Account', 'https://euqs.shein.com/Delete-or-Cancel-Account-a-1054.html', 'SHEIN', 'support-doc', 'primary', {
      summary: 'A la UE, el Regne Unit i els EUA el compte s’elimina des de «Seguretat del compte»; fora d’aquestes zones cal demanar-ho a atenció al client.',
    }),
    s('shein-hackerone', 'SHEIN — Bug Bounty Program', 'https://hackerone.com/shein', 'HackerOne', 'technical-doc', 'primary', {
      summary: 'Programa de recompenses de SHEIN a HackerOne, complementat pel centre de resposta de seguretat security.shein.com.',
    }),
    s('shein-cnil-2025', 'Cookies placed without consent: SHEIN fined 150 million euros by the CNIL', 'https://www.cnil.fr/en/cookies-placed-without-consent-shein-fined-150-million-euros-cnil', 'CNIL', 'regulator', 'authority', {
      publishedAt: '2025-09-03',
      summary: 'La CNIL sanciona Infinite Styles Services amb 150 milions d’euros per galetes publicitàries instal·lades sense consentiment, bàners incomplets i un rebuig que no es respectava.',
    }),
    s('shein-nyag-2022', 'Attorney General James Secures $1.9 Million from E-Commerce Company Zoetop', 'https://ag.ny.gov/press-release/2022/attorney-general-james-secures-19-million-e-commerce-shein-and-romwe-owner-zoetop', 'Office of the New York State Attorney General', 'regulator', 'authority', {
      publishedAt: '2022-10-12',
      summary: 'Acord d’1,9 milions de dòlars amb Zoetop per la filtració de 2018 de 39 milions de comptes de SHEIN, amb targetes exposades en text pla i informació falsa sobre l’abast.',
    }),
    s('ikea-privacy-policy', 'Política de privacidad | IKEA España', 'https://www.ikea.com/es/es/customer-service/privacy-policy/', 'IKEA Ibérica', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política d’agost de 2026: responsable IKEA Ibérica, finalitats, publicitat personalitzada per interès legítim, compartició amb el grup Ingka, terminis per categoria i formulari de drets.',
    }),
    s('ikea-app-privacy-policy', 'Política de privacidad de App | IKEA España', 'https://www.ikea.com/es/es/customer-service/privacy-policy/politica-privacidad-app-pubf3bf9b1b/', 'IKEA Ibérica', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política específica de l’aplicació: ubicació, identificadors del dispositiu, analítica conservada fins a cinc anys i dades de les eines de disseny.',
    }),
    s('ikea-app-store', 'IKEA — App Store (España)', 'https://apps.apple.com/es/app/id1452164827', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors, dades d’ús i diagnòstics utilitzats per rastrejar; compres, contacte i dades de publicitat vinculats a la persona.',
    }),
    s('ikea-delete-account', '¿Cómo cancelo mi cuenta de IKEA Family?', 'https://www.ikea.com/es/es/customer-service/knowledge/articles/5a56a890-0077-4e7d-940a-bb2d5428fcf5.html', 'IKEA Ibérica', 'support-doc', 'primary', {
      language: 'es',
      summary: 'La cancel·lació d’IKEA Family es fa des del perfil; per eliminar el perfil i les dades cal el formulari de drets ARSOPOL.',
    }),
    s('ikea-bug-bounty', 'IKEA Vulnerability Disclosure Program', 'https://bugs.ikea.com/', 'IKEA', 'technical-doc', 'primary', {
      summary: 'Programa a HackerOne que cobreix els dominis i les aplicacions d’IKEA, amb recompenses discrecionals per a vulnerabilitats crítiques i altes.',
    }),
    s('ikea-security-txt', 'security.txt — ikea.com', 'https://www.ikea.com/.well-known/security.txt', 'IKEA', 'technical-doc', 'primary', {
      summary: 'Contacte de seguretat (bugs.ikea.com) i clau PGP; data de caducitat del 20 de setembre de 2026.',
    }),
    s('ikea-aepd-2019', 'Procedimiento sancionador PS/00127/2019 (IKEA Ibérica)', 'https://www.aepd.es/documento/ps-00127-2019.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      publishedAt: '2019-12-04',
      summary: 'Multa de 10.000 euros a IKEA Ibérica per instal·lar galetes d’analítica sense consentiment ni informació adequada (article 22.2 de la LSSI).',
    }),
    s('ikea-france-2021', 'Ikea condamné à une amende d’un million d’euros pour espionnage sur ses employés', 'https://www.france24.com/fr/france/20210615-france-ikea-condamn%C3%A9-%C3%A0-une-amende-d-un-million-d-euros-pour-espionnage-sur-ses-employ%C3%A9s', 'France 24', 'press', 'secondary', {
      language: 'fr',
      publishedAt: '2021-06-15',
      summary: 'El tribunal penal de Versalles condemna IKEA France a un milió d’euros de multa per haver espiat treballadors, candidats i clients entre 2009 i 2012.',
    }),
    s('primor-privacy-policy', 'Políticas de privacidad | Primor', 'https://www.primor.eu/es_es/politicas-de-privacidad', 'Perfumerías Primor', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Corresponsabilitat de quatre societats, perfilat per a publicitat personalitzada, transferències als EUA amb clàusules tipus i drets per correu a data@primor.eu.',
    }),
    s('primor-app-store', 'Perfumerías Primor — App Store (España)', 'https://apps.apple.com/es/app/id1104772567', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors utilitzats per rastrejar; cap dada declarada com a vinculada a la persona.',
    }),
    s('primor-delete-account', 'Eliminar mi cuenta — Centro de Ayuda Primor', 'https://ayuda.primor.eu/es/articulo/quiero-eliminar-mi-cuenta', 'Perfumerías Primor', 'support-doc', 'primary', {
      language: 'es',
      summary: 'L’eliminació es demana des del centre d’ajuda i la tramita una persona; es perden comandes, saldos i cupons.',
    }),
  ],
  apps: [idealo, temu, zalando, carrefour, alibaba, mediamarkt, action, shein, ikea, primor],
  incidents: [
    {
      slug: 'temu-pipc-corea-2025',
      title: 'L’autoritat coreana sanciona Temu per transferir dades a l’estranger sense informar-ne',
      type: 'regulatory-fine',
      severity: 'medium',
      apps: ['temu'],
      company: 'whaleco-technology',
      occurredAt: '2025-05-14',
      disclosedAt: '2025-05-15',
      description:
        'La Comissió de Protecció d’Informació Personal de Corea del Sud va concloure que Temu transferia dades de persones usuàries coreanes a la Xina, Singapur i el Japó sense informar-ne adequadament, que no tenia representant local i que donar-se de baixa requeria set passos. Va imposar una multa d’uns 1.360 milions de wons (prop de 870.000 euros) i ordres correctores.',
      affectedPeople: 'Persones usuàries de Temu a Corea del Sud.',
      regulatory: {
        authority: 'Personal Information Protection Commission (Corea del Sud)',
        status: 'final',
      },
      sources: ['temu-pipc-2025'],
    },
    {
      slug: 'temu-arkansas-demanda-2024',
      title: 'Arkansas demanda Temu per accés il·legal a dades personals',
      type: 'other',
      severity: 'medium',
      apps: ['temu'],
      company: 'pdd-holdings',
      occurredAt: '2024-06-25',
      disclosedAt: '2024-06-25',
      description:
        'La fiscalia d’Arkansas va demandar PDD Holdings i Whaleco acusant l’aplicació de Temu de recollir dades del dispositiu més enllà del necessari i de saltar-se la configuració de privadesa. Nebraska (2025), Texas i Oklahoma (2026) han presentat demandes semblants. Són acusacions pendents de judici i Temu les nega.',
      affectedPeople: 'Persones usuàries de Temu a Arkansas.',
      regulatory: {
        authority: 'Fiscalia general d’Arkansas (Estats Units)',
        status: 'ongoing',
      },
      sources: ['temu-arkansas-2024', 'temu-nebraska-2025'],
    },
    {
      slug: 'carrefour-aepd-bretxes-2025',
      title: 'L’AEPD sanciona Carrefour amb 3,2 milions per cinc bretxes de l’aplicació i el web',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['carrefour'],
      company: 'carrefour-espana',
      occurredAt: '2025-03-14',
      description:
        'Entre gener i juny de 2023, atacs de reutilització de credencials van donar accés a comptes de clients: quatre bretxes a l’aplicació i una al web, que l’empresa xifra en 118.895 persones afectades. L’AEPD va imposar 2 milions per l’article 5.1.f, 1 milió per l’article 32 i 200.000 euros per no comunicar les bretxes a les persones afectades, i va ordenar fer-ho.',
      affectedPeople: '118.895 persones clientes, segons l’empresa.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        fineAmountEur: 3200000,
        legalBasis: 'Articles 5.1.f, 32 i 34 del RGPD',
      },
      sources: ['carrefour-aepd-2025'],
    },
    {
      slug: 'carrefour-sfc-aepd-2025',
      title: 'Multa d’1,5 milions a Servicios Financieros Carrefour per una bretxa amb dades del Club',
      type: 'regulatory-fine',
      severity: 'medium',
      company: 'carrefour-group',
      occurredAt: '2025-09-17',
      description:
        'El desembre de 2023, atacants van accedir amb credencials compromeses als sistemes de Servicios Financieros Carrefour, emissora de la targeta PASS, i en van extreure dades com el DNI, dades de pagament i el número de soci del Club Carrefour. L’AEPD va proposar 2,5 milions i la multa va quedar en 1,5 milions per reconeixement de responsabilitat i pagament voluntari.',
      affectedPeople: 'Clientes de la targeta PASS de Carrefour.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        fineAmountEur: 1500000,
        status: 'final',
      },
      sources: ['carrefour-sfc-aepd-2025'],
    },
    {
      slug: 'carrefour-cnil-fidelitat-2020',
      title: 'La CNIL sanciona Carrefour France per la gestió de dades del programa de fidelitat',
      type: 'regulatory-fine',
      severity: 'medium',
      company: 'carrefour-group',
      occurredAt: '2020-11-18',
      description:
        'La CNIL va multar Carrefour France amb 2,25 milions d’euros per conservar massa temps les dades dels clients del programa de fidelitat, informar-los de manera poc clara, instal·lar galetes sense consentiment, posar obstacles a l’exercici dels drets i no notificar un ciberatac. El mateix dia va multar Carrefour Banque amb 800.000 euros.',
      affectedPeople: 'Clientes de Carrefour a França.',
      regulatory: {
        authority: 'Commission nationale de l’informatique et des libertés (França)',
        fineAmountEur: 2250000,
      },
      sources: ['carrefour-cnil-2020'],
    },
    {
      slug: 'mediamarkt-aepd-mobil-2016',
      title: 'L’AEPD sanciona una botiga de MediaMarkt per vendre un mòbil retornat amb les fotos de la clienta',
      type: 'regulatory-fine',
      severity: 'low',
      apps: [],
      company: 'ceconomy',
      occurredAt: '2015-02-26',
      description:
        'Una família va retornar un mòbil avariat a la botiga MediaMarkt de Santander amb la garantia que es destruiria. Mesos després el terminal era en un expositor, a l’abast del públic, amb unes 500 fotos de la filla, amics i família. L’AEPD va sancionar la societat de la botiga amb 2.000 euros per no protegir les dades.',
      affectedPeople: 'Una persona clienta i la seva família.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        fineAmountEur: 2000,
        legalBasis: 'Article 9 de la LOPD (seguretat de les dades)',
      },
      sources: ['mediamarkt-aepd-2016'],
    },
    {
      slug: 'mediamarkt-ransomware-hive-2021',
      title: 'Atac de ransomware Hive contra MediaMarkt',
      type: 'other',
      severity: 'medium',
      apps: [],
      company: 'ceconomy',
      occurredAt: '2021-11-07',
      disclosedAt: '2021-11-08',
      description:
        'El grup de ransomware Hive va xifrar servidors de MediaMarkt i va deixar botigues sense sistemes, sobretot als Països Baixos i Alemanya. El rescat inicial era de 240 milions de dòlars. No hi ha confirmació pública de robatori de dades de clients ni d’afectació a Espanya.',
      sources: ['mediamarkt-hive-2021'],
    },
    {
      slug: 'shein-cnil-galetes-2025',
      title: 'La CNIL sanciona SHEIN amb 150 milions d’euros per galetes sense consentiment',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['shein'],
      company: 'shein-infinite-styles',
      occurredAt: '2025-09-01',
      disclosedAt: '2025-09-03',
      description:
        'Després d’una inspecció d’agost de 2023, la CNIL va constatar que shein.com instal·lava galetes publicitàries en arribar al web, abans de cap consentiment; que els bàners no n’explicaven les finalitats ni els tercers; i que rebutjar-les o retirar el consentiment no impedia que se n’instal·lessin de noves. SHEIN va anunciar un recurs davant del Conseil d’État.',
      affectedPeople: 'Persones que visitaven shein.com des de França, una mitjana de 12 milions al mes.',
      regulatory: {
        authority: 'Commission nationale de l’informatique et des libertés (França)',
        fineAmountEur: 150000000,
        legalBasis: 'Article 82 de la Loi Informatique et Libertés',
        status: 'appealed',
      },
      sources: ['shein-cnil-2025'],
    },
    {
      slug: 'shein-zoetop-filtracio-2018',
      title: 'Filtració de 39 milions de comptes de SHEIN i sanció de la fiscalia de Nova York',
      type: 'breach',
      severity: 'high',
      apps: ['shein'],
      company: 'shein-group',
      occurredAt: '2018-06-01',
      description:
        'El 2018, un atac va robar dades de 39 milions de comptes de SHEIN i 7 milions de ROMWE. La fiscalia de Nova York va concloure que Zoetop, aleshores propietària de les marques, protegia malament les contrasenyes, tenia dades de targetes exposades en text pla i va declarar falsament que només hi havia 6,4 milions de persones afectades. L’octubre de 2022 va pagar 1,9 milions de dòlars.',
      affectedPeople: '39 milions de comptes de SHEIN i 7 milions de ROMWE a tot el món.',
      regulatory: {
        authority: 'Fiscalia general de l’estat de Nova York',
        status: 'final',
      },
      sources: ['shein-nyag-2022'],
    },
    {
      slug: 'ikea-aepd-galetes-2019',
      title: 'L’AEPD sanciona IKEA Ibérica per galetes sense consentiment',
      type: 'regulatory-fine',
      severity: 'low',
      apps: ['ikea'],
      company: 'ikea-iberica',
      occurredAt: '2019-12-04',
      disclosedAt: '2019-12-04',
      description:
        'L’AEPD va constatar que la web d’IKEA a Espanya instal·lava galetes de Google Analytics abans del consentiment, no n’explicava les finalitats i no permetia rebutjar-les. Va imposar una multa de 10.000 euros per infracció lleu de la LSSI.',
      affectedPeople: 'Persones que visitaven ikea.com/es.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        fineAmountEur: 10000,
        legalBasis: 'Article 22.2 de la LSSI',
        status: 'final',
      },
      sources: ['ikea-aepd-2019'],
    },
    {
      slug: 'ikea-franca-espionatge-2021',
      title: 'Condemna penal a IKEA France per espiar treballadors i clients',
      type: 'misuse',
      severity: 'medium',
      apps: ['ikea'],
      company: 'ingka-group',
      occurredAt: '2021-06-15',
      disclosedAt: '2021-06-15',
      description:
        'El tribunal penal de Versalles va condemnar IKEA France a un milió d’euros de multa per haver recollit il·legalment informació personal de centenars de treballadors, candidats i clients en litigi entre 2009 i 2012, en part amb policies que consultaven fitxers policials a canvi de diners. No és una sanció del RGPD ni afecta l’aplicació, però mostra un ús abusiu de dades personals dins del grup.',
      affectedPeople: 'Centenars de treballadors, candidats i clients d’IKEA a França.',
      regulatory: {
        authority: 'Tribunal correctionnel de Versailles (França)',
        fineAmountEur: 1000000,
        status: 'final',
      },
      sources: ['ikea-france-2021'],
    },
  ],
  storeIds: {
    idealo: 'de.idealo.Idealo',
    temu: 'com.einnovation.temu',
    zalando: 'de.zalando.iphone',
    carrefour: 'es.carrefour.crfmobile',
    alibaba: 'com.alibaba.sourcing',
    mediamarkt: 'es.mediamarkt.app.ios',
    action: 'com.action.consumerapp',
    shein: 'zzkko.com.ZZKKO',
    ikea: 'com.ingka.ikea.app',
    primor: 'com.spiralapps.Primor',
  },
}
