import { CATALAN_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(CATALAN_DATE)
const s = sourceAt(CATALAN_DATE)

/**
 * Lot 44 del bloc català: la premsa en català i els diaris de Barcelona.
 * Diari ARA, VilaWeb i el Paraulògic, El Nacional, La Vanguardia, El Periódico
 * i El Punt Avui. RAC1, que també hi entrava, ja és al lot 30.
 *
 * Els gestors de consentiment dels webs s'han llegit a la configuració pública
 * de Didomi (sdk.privacy-center.org) de cada domini. Descriuen el web, no
 * l'app, i així ho diuen les fitxes.
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'edicio-de-premsa-periodica-ara',
      name: 'Diari ARA',
      legalName: 'Edició de Premsa Periòdica Ara, SL',
      description:
        'Editora del diari ARA, amb seu a Barcelona. Comparteix la política de privadesa amb l’ARA Balears (Edicions Periòdiques Ara-Balears, SL) i l’ARA Andorra (ANISA).',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://www.ara.cat/',
      productDomains: ['ara.cat', 'arabalears.cat', 'ara.ad'],
      privacyContact: 'privacitat@ara.cat',
    },
    {
      slug: 'partal-maresma-i-associats',
      name: 'VilaWeb',
      legalName: 'Partal, Maresma i Associats, SL',
      description: 'Editora de VilaWeb, diari digital en català amb seu a Barcelona, i del joc de paraules Paraulògic.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://www.vilaweb.cat/',
      productDomains: ['vilaweb.cat'],
      privacyContact: 'administracio@partal.cat',
    },
    {
      slug: 'grup-les-noticies-de-catalunya',
      name: 'El Nacional',
      legalName: 'Grup Les Notícies de Catalunya, SL',
      description: 'Editora del diari digital ElNacional.cat i del Club El Nacional, amb seu a Barcelona.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'advertising',
      website: 'https://www.elnacional.cat/',
      productDomains: ['elnacional.cat'],
      privacyContact: 'lopd@elnacional.cat',
    },
    {
      slug: 'la-vanguardia-ediciones',
      name: 'La Vanguardia Ediciones',
      legalName: 'La Vanguardia Ediciones, SLU',
      parent: 'grup-godo',
      description:
        'Societat del Grup Godó que edita La Vanguardia i és titular de lavanguardia.com. Comparteix perfils publicitaris amb Mundo Deportivo i RAC1.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      primaryRevenueModel: 'mixed',
      website: 'https://www.lavanguardia.com/',
      productDomains: ['lavanguardia.com'],
      privacyContact: 'protecciondedatos@lavanguardia.es',
    },
    {
      slug: 'prensa-iberica-media',
      name: 'Prensa Ibérica',
      legalName: 'Prensa Ibérica Media, S.L.',
      description:
        'Grup editorial espanyol propietari d’El Periódico de Catalunya i d’una xarxa de diaris regionals. La matriu és responsable de les dades de totes les seves propietats digitals, amb la societat de cada capçalera com a corresponsable.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      supervisoryNote: 'El Periódico l’edita El Periódico de Catalunya, S.L.U., i a l’App Store figura Prensa Ibérica Digital, S.L.',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://www.prensaiberica.es/',
      productDomains: ['elperiodico.com', 'prensaiberica.es'],
      privacyContact: 'protecciondatos@prensaiberica.es',
    },
    {
      slug: 'hermes-comunicacions',
      name: 'El Punt Avui',
      legalName: 'Hermes Comunicacions, S.L.',
      description: 'Editora del diari El Punt Avui, amb seu a Girona.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      supervisoryNote: 'La política de privadesa diu S.L.; l’App Store la mostra com a Hermes Comunicacions SA.',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://www.elpuntavui.cat/',
      productDomains: ['elpuntavui.cat', 'elpunt.cat', 'avui.cat'],
      privacyContact: 'protecciodades@elpuntavui.cat',
    },
  ],

  sources: [
    /* ── Diari ARA ── */
    s('ara-app-store', 'Diari ARA — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id428237964', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: dades d’ús per rastrejar; dades de contacte, identificadors i dades d’ús vinculades a la identitat; diagnòstic no vinculat.',
    }),
    s('ara-privacy-policy', 'Política de privacitat — Diari ARA', 'https://www.ara.cat/privacitat.html', 'Edició de Premsa Periòdica Ara, SL', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Finalitats de registre, subscripció, botiga, contacte i butlletins. No esmenta publicitat, galetes ni perfils. Delegat de protecció de dades a privacitat@ara.cat.',
    }),
    s('ara-condicions', 'Condicions de contractació — Diari ARA', 'https://www.ara.cat/condicions_contractacio.html', 'Edició de Premsa Periòdica Ara, SL', 'terms', 'primary', {
      language: 'ca',
      summary: 'Registre gratuït amb 10 articles al mes; per esborrar el compte cal escriure a privacitat@ara.cat, i els subscriptors abans han de donar-se de baixa de la subscripció.',
    }),
    s('ara-didomi-config', 'Configuració del gestor de consentiment de www.ara.cat (Didomi)', 'https://sdk.privacy-center.org/d20cb746-9cdd-461f-a57b-cd41f54fad65/loader.js?target=www.ara.cat', 'Didomi', 'technical-doc', 'primary', {
      summary: 'Configuració pública del web: tots els proveïdors del TCF de l’IAB, serveis de Google i set proveïdors propis (VWO, Hotjar, Amplitude, HubSpot, Google Analytics, Chartbeat, Adwatch).',
    }),
    s('ara-paga-o-accepta', 'Script del bàner de galetes de l’ARA (gdpr_simple.js)', 'https://assets.ara.cat/didomi/gdpr_simple.js', 'Edició de Premsa Periòdica Ara, SL', 'technical-doc', 'primary', {
      language: 'ca',
      summary: 'Per als lectors anònims, substitueix el botó de rebutjar del bàner per «Subscriu-t’hi i refusa», que porta a la pàgina de subscripció.',
    }),

    /* ── VilaWeb i Paraulògic ── */
    s('vilaweb-app-store', 'VilaWeb — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id406620374', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: historial de navegació i dades d’ús no vinculades a la identitat. No declara dades per rastrejar.',
    }),
    s('paraulogic-app-store', 'Paraulògic Oficial — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6443832478', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: només dades d’ús no vinculades a la identitat. Enllaça la política de privadesa de VilaWeb.',
    }),
    s('vilaweb-privacy-policy', 'Política de privacitat — VilaWeb', 'https://www.vilaweb.cat/pagines/politica-de-privacitat/', 'Partal, Maresma i Associats, SL', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Tractaments per a subscripció, botiga, butlletins i comunicacions comercials. Encara esmenta el Privacy Shield com a garantia de transferència. Drets a administracio@partal.cat.',
    }),
    s('vilaweb-cookies-policy', 'Política de galetes — VilaWeb', 'https://www.vilaweb.cat/pagines/politica-de-galetes/', 'Partal, Maresma i Associats, SL', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Galetes de registre, publicitat, analítica i geolocalització. Terceres: Google Analytics, Chartbeat, iFlyChat, Outbrain, Pushwoosh, Comscore i Facebook.',
    }),
    s('vilaweb-didomi-config', 'Configuració del gestor de consentiment de www.vilaweb.cat (Didomi)', 'https://sdk.privacy-center.org/a9decc1d-35cd-46a5-ac9f-7c1bd17bf326/loader.js?target=www.vilaweb.cat', 'Didomi', 'technical-doc', 'primary', {
      summary: 'Configuració pública del web: tots els proveïdors del TCF de l’IAB, serveis de Google i tres proveïdors propis (Chartbeat, NetAffiliation i Google Analytics).',
    }),
    s('vilaweb-aepd-infiltrats-2026', 'L’Agència Espanyola de Protecció de Dades persegueix VilaWeb per haver informat sobre els policies infiltrats', 'https://www.vilaweb.cat/noticies/agencia-espanyola-proteccio-dades-multar-vilaweb-policies-infiltrats/', 'VilaWeb', 'press', 'secondary', {
      language: 'ca',
      publishedAt: '2026-07-29',
      summary: 'L’AEPD obre un procediment sancionador a VilaWeb, amb una multa mínima de 7.000 euros, per publicar el nom fictici i el real d’un policia infiltrat i imatges on se li veia la cara. VilaWeb anuncia que hi recorrerà.',
    }),

    /* ── El Nacional ── */
    s('el-nacional-app-store', 'El Nacional.cat — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1209833862', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: dades d’ús per rastrejar i dades d’ús no vinculades a la identitat.',
    }),
    s('el-nacional-privacy-policy', 'Política de privacitat — ElNacional.cat', 'https://www.elnacional.cat/ca/politica-de-privacitat.html', 'Grup Les Notícies de Catalunya, SL', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Butlletins, Club El Nacional, galetes publicitàries amb consentiment i coresponsabilitat amb Utiq, que dona identificadors de màrqueting lligats a la connexió de l’operador de telefonia.',
    }),
    s('el-nacional-cookies-policy', 'Política de cookies — ElNacional.cat', 'https://www.elnacional.cat/ca/politica-de-cookies.html', 'Grup Les Notícies de Catalunya, SL', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Publicitat programàtica de Google i d’onze intermediaris (Seedtag, Magnite, PubMatic, Amazon, Taboola, Xandr, Teads…). Classifica Google Analytics i Comscore com a estrictament necessàries.',
    }),
    s('el-nacional-didomi-config', 'Configuració del gestor de consentiment de www.elnacional.cat (Didomi)', 'https://sdk.privacy-center.org/8cc29f0d-b911-4a93-b5e3-c5612bcdb3f2/loader.js?target=www.elnacional.cat', 'Didomi', 'technical-doc', 'primary', {
      summary: 'Configuració pública del web: 209 proveïdors del TCF de l’IAB triats un per un i 92 proveïdors propis, entre els quals Utiq, Meta i LinkedIn.',
    }),
    s('el-nacional-club-terms', 'Termes i condicions d’ús — Club El Nacional', 'https://club.elnacional.cat/termes-i-condicions-dus/', 'Grup Les Notícies de Catalunya, SL', 'terms', 'primary', {
      language: 'ca',
      summary: 'No cal registre per llegir. Quota anual de 60 o 100 euros; la baixa del Club es fa des del perfil i és efectiva l’últim dia de l’any pagat.',
    }),

    /* ── La Vanguardia ── */
    s('la-vanguardia-app-store', 'La Vanguardia — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id364587804', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, dades de contacte, identificadors, dades d’ús i diagnòstic per rastrejar; ubicació i diagnòstic no vinculats.',
    }),
    s('la-vanguardia-privacy-policy', 'Política de privacidad — La Vanguardia', 'https://www.lavanguardia.com/politica-privacidad.html', 'La Vanguardia Ediciones, SLU', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'TCF de l’IAB, perfils publicitaris compartits amb Mundo Deportivo i RAC1 i cedits a tercers triats, geolocalització precisa amb autorització, terminis de 12 mesos i 90 dies, i gestió des del menú de l’app.',
    }),
    s('la-vanguardia-didomi-config', 'Configuració del gestor de consentiment de www.lavanguardia.com (Didomi)', 'https://sdk.privacy-center.org/3da070b4-2745-4eb6-8fc9-1fabe5f634e6/loader.js?target=www.lavanguardia.com', 'Didomi', 'technical-doc', 'primary', {
      language: 'es',
      summary: 'Configuració pública del web: tots els proveïdors del TCF de l’IAB i 87 proveïdors propis. L’avís diu que l’accés està subjecte a acceptar les galetes o a subscriure’s.',
    }),
    s('la-vanguardia-godo-didomix', 'Script del bàner de galetes del Grup Godó (godo-didomix)', 'https://rsc.lavanguardia.com/js/godo-didomix-v1001225.js', 'Grupo Godó', 'technical-doc', 'primary', {
      language: 'es',
      summary: 'Personalitza el bàner: el botó de rebutjar diu «Rechazar y suscribirse» i el d’acceptar, «Aceptar y continuar».',
    }),
    s('aepd-ps-00132-2023', 'Resolución de terminación del procedimiento por pago voluntario — EXP202300489 (PS/00132/2023)', 'https://www.aepd.es/documento/ps-00132-2023.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      publishedAt: '2023-07',
      summary: 'L’AEPD constata que lavanguardia.com instal·lava galetes no necessàries de Google abans del consentiment i fins i tot després de rebutjar-les, sense opció granular ni manera de retirar-lo. Sanció de 5.000 euros, reduïda a 4.000 per pagament voluntari el 3 de juliol del 2023.',
    }),

    /* ── El Periódico ── */
    s('el-periodico-app-store', 'El Periódico — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id407970190', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: només identificadors, usats per rastrejar i no vinculats a la identitat.',
    }),
    s('prensa-iberica-privacy-summary', 'Política resumida de Privacidad y Cookies PIMe — Prensa Ibérica', 'https://www.prensaiberica.es/politica-de-privacidad-resumida/', 'Prensa Ibérica Media, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Responsabilitat de la matriu amb la societat de cada capçalera, cessió a empreses del grup i a tercers amb consentiment, perfils compartits amb anunciants i terminis de tres anys d’inactivitat.',
    }),
    s('prensa-iberica-privacy-extended', 'Política de Privacidad extendida — Grupo Prensa Ibérica Media', 'https://www.prensaiberica.es/politica-de-privacidad-extendida/', 'Prensa Ibérica Media, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Categories de dades, finalitats, proveïdors als Estats Units, conservació (registre fins a la baixa; clients, tres anys després del contracte; bloqueig de tres anys) i drets.',
    }),
    s('el-periodico-didomi-config', 'Configuració del gestor de consentiment de www.elperiodico.com (Didomi)', 'https://sdk.privacy-center.org/85b004e1-73f5-4874-bf8a-eebcd1de6b43/loader.js?target=www.elperiodico.com', 'Didomi', 'technical-doc', 'primary', {
      summary: 'Configuració pública del web: tots els proveïdors del TCF de l’IAB i 85 proveïdors propis, entre els quals Utiq, Foursquare, Booking i Netflix.',
    }),

    /* ── El Punt Avui ── */
    s('el-punt-avui-app-store', 'El Punt Avui - Nacional - V2 — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1505758634', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: el desenvolupador declara que no recull cap dada. Última versió, la 2.0.4, del juny del 2022.',
    }),
    s('el-punt-avui-privacy-policy', 'Política de privacitat — El Punt Avui', 'https://www.elpuntavui.cat/epa/politica-de-privacitat.html', 'Hermes Comunicacions, S.L.', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Registre, subscripció, butlletins i perfil comercial per a publicitat pròpia i de tercers comercialitzada per l’editora. Diu que no ven dades. Drets a protecciodades@elpuntavui.cat.',
    }),
    s('el-punt-avui-condicions-venda', 'Condicions de venda — El Punt Avui', 'https://www.elpuntavui.cat/epa/condicions-de-venda.html', 'Hermes Comunicacions, S.L.', 'terms', 'primary', {
      language: 'ca',
      summary: 'Condicions de la subscripció digital, també per a les apps: renovació automàtica i desistiment de 14 dies per correu.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ Diari ARA ═══════════════════════════ */
    {
      slug: 'diari-ara',
      name: 'Diari ARA',
      company: 'edicio-de-premsa-periodica-ara',
      categories: ['noticies-i-mitjans'],
      tagline: 'Diari en català amb rastreig a l’app i una política de privadesa que no parla de publicitat',
      summary:
        'L’etiqueta de l’App Store declara dades d’ús per rastrejar i dades de contacte i identificadors vinculats a la persona. La política de privadesa, en canvi, només descriu el registre, la subscripció, la botiga i els butlletins, i no diu res de publicitat, galetes ni perfils. Al web, el bàner de galetes ofereix tots els proveïdors del marc de l’IAB, i els lectors anònims només poden rebutjar-les subscrivint-s’hi. Per esborrar el compte cal escriure un correu.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.ara.cat/',
        privacyPolicy: 'https://www.ara.cat/privacitat.html',
        terms: 'https://www.ara.cat/condicions_contractacio.html',
        appStore: 'https://apps.apple.com/es/app/id428237964',
      },
      accountRequired: f('partial', 'official', ['ara-condicions'], 'L’accés és gratuït, però alguns serveis demanen subscripció; el registre gratuït permet llegir 10 articles propis al mes.'),
      openSource: f('no', 'official', ['ara-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'L’app vincula al compte les dades d’ús (què es llegeix, quant de temps, quines seccions se segueixen) i declara que poden servir per rastrejar en apps i webs d’altres empreses.',
      dataCollection: [
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ara-app-store', 'ara-privacy-policy'], note: 'Per al registre, la subscripció i els butlletins.' }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ara-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ara-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['ara-app-store'], note: 'L’etiqueta declara les dades d’ús com a dades per rastrejar.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['ara-privacy-policy'], note: 'Les entitats bancàries reben les dades per gestionar cobraments.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['ara-didomi-config'], note: 'Al web, si s’accepta el bàner.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['ara-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['ara-app-store'], 'L’etiqueta declara dades d’ús per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: unknown('L’etiqueta no concreta si fa servir l’identificador publicitari del dispositiu.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['ara-didomi-config'], 'Al web: tots els proveïdors del TCF de l’IAB, Google i set proveïdors propis com Hotjar, Amplitude i HubSpot.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['ara-didomi-config'], 'El gestor de consentiment del web inclou les finalitats de publicitat personalitzada. La política no ho esmenta.'),
        profiling: f('yes', 'official', ['ara-didomi-config'], 'Perfils publicitaris i de continguts entre les finalitats del bàner.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['ara-app-store', 'ara-didomi-config'], 'Dades d’ús per rastrejar i proveïdors publicitaris al web amb consentiment.'),
        intraGroupSharing: unknown('La política és comuna amb l’ARA Balears i l’ARA Andorra, però no diu si hi comparteix dades.'),
        dataBrokerSales: unknown(),
        internationalTransfers: f('yes', 'official', ['ara-privacy-policy'], 'Alguns encarregats són fora de l’EEE; la política diu que ho cobreix per contracte.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['ara-privacy-policy'], 'Només criteris genèrics: mentre duri la relació i els terminis legals de prescripció.'),
        dataAfterDeletion: f('partial', 'official', ['ara-privacy-policy'], 'Es conserven durant els terminis de conservació i prescripció legals, sense concretar-los.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['ara-condicions']),
        selfService: f('no', 'official', ['ara-condicions'], 'Cal enviar la petició per correu a privacitat@ara.cat.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Si tens subscripció, dona-te’n de baixa primer des de l’àrea personal, al 932 751 110 o a subscripcions@ara.cat (o des de l’App Store si la vas contractar allà).',
          'Escriu a privacitat@ara.cat i demana la supressió del compte.',
        ],
        obstacles: 'Els subscriptors han de cancel·lar la subscripció abans que es gestioni la supressió.',
        sources: ['ara-condicions'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['ara-privacy-policy'], 'Reconeix el dret de portabilitat; s’exerceix per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['ara-privacy-policy'], 'Delegat de protecció de dades a privacitat@ara.cat o correu postal.', { url: 'mailto:privacitat@ara.cat' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['ara-paga-o-accepta'], 'Al web, qui no és subscriptor només pot refusar les galetes subscrivint-s’hi.'),
        telemetryOptOut: unknown(),
        granularControls: unknown('No hem pogut comprovar si l’app té un panell de consentiment.'),
        defaultPosture: 'permissive',
        darkPatterns: f('yes', 'official', ['ara-paga-o-accepta'], 'El bàner del web substitueix el botó de rebutjar per «Subscriu-t’hi i refusa».'),
        darkPatternList: [
          {
            type: 'unbalanced-consent',
            severity: 'medium',
            description: 'Paga o accepta: per a un lector anònim, l’única alternativa a acceptar les galetes és subscriure’s. No hem comprovat si l’app fa el mateix.',
            sources: ['ara-paga-o-accepta'],
          },
        ],
      },
      security: {
        e2ee: na('És una aplicació de lectura de notícies.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hem trobat cap fitxer security.txt al domini.'),
      },
      alternatives: [
        { app: 'vilaweb', comparability: 'equivalent', rationale: 'Diari en català; l’app no declara dades per rastrejar.' },
        { app: 'el-punt-avui', comparability: 'partial', rationale: 'Diari en català; l’app de quiosc declara que no recull dades, però fa anys que no s’actualitza.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La contradicció principal és entre l’etiqueta de l’App Store, que declara rastreig, i una política que no esmenta la publicitat. El paga o accepta i la llista de proveïdors són del web; no hem pogut veure el bàner de l’app. No hem trobat sancions ni filtracions.',
        openQuestions: ['Quins proveïdors publicitaris integra l’app i amb quina base legal?', 'L’app també condiciona el rebuig a la subscripció?'],
      },
    },

    /* ═══════════════════════════ VilaWeb ═══════════════════════════ */
    {
      slug: 'vilaweb',
      name: 'VilaWeb',
      company: 'partal-maresma-i-associats',
      categories: ['noticies-i-mitjans'],
      tagline: 'App de notícies que no declara rastreig, amb una política que encara cita el Privacy Shield',
      summary:
        'L’etiqueta de l’App Store només declara historial de navegació i dades d’ús, no vinculats a la identitat i sense rastreig. La política de privadesa se centra en la subscripció, la botiga i els butlletins, i encara cita el Privacy Shield, anul·lat pel Tribunal de Justícia de la UE el 2020. El web sí que té galetes de publicitat, analítica i geolocalització, i un bàner que ofereix tots els proveïdors del marc de l’IAB. Els drets s’exerceixen per correu.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.vilaweb.cat/',
        privacyPolicy: 'https://www.vilaweb.cat/pagines/politica-de-privacitat/',
        appStore: 'https://apps.apple.com/es/app/id406620374',
      },
      accountRequired: f('no', 'official', ['vilaweb-app-store'], 'L’etiqueta no declara dades de contacte ni identificadors vinculats a la persona.'),
      openSource: f('no', 'official', ['vilaweb-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary: 'Segons l’etiqueta, l’app recull les notícies que s’obren sense vincular-les a la identitat. Al web, les galetes de tercers fan seguiment si s’accepten.',
      dataCollection: [
        row('historial-de-navegacio', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['vilaweb-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['vilaweb-app-store'] }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['vilaweb-privacy-policy'], note: 'Subscripció, botiga i butlletins.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['vilaweb-privacy-policy'], note: 'Domiciliació bancària de la subscripció.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['vilaweb-cookies-policy', 'vilaweb-didomi-config'], note: 'Al web: Google Analytics, Chartbeat, Outbrain, Comscore, Facebook i els proveïdors del TCF, si s’accepten.' }),
        row('ubicacio-aproximada', 'unknown', { linked: 'no', tracking: 'unknown', shared: 'unknown', purposes: ['publicitat-personalitzada'], sources: ['vilaweb-cookies-policy'], note: 'La política de galetes del web preveu galetes de geolocalització.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['vilaweb-app-store'], 'L’etiqueta no declara dades per rastrejar.'),
        advertisingIdentifiers: unknown(),
        thirdPartyTrackersPresent: f('yes', 'official', ['vilaweb-cookies-policy', 'vilaweb-didomi-config'], 'Al web: Google Analytics, Chartbeat, Outbrain, Pushwoosh, Comscore, Facebook i els proveïdors del TCF de l’IAB.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['vilaweb-cookies-policy'], 'Galetes de publicitat segons els interessos al web; l’app no ho declara.'),
        profiling: f('partial', 'official', ['vilaweb-didomi-config'], 'Les finalitats de perfil publicitari del bàner s’apliquen al web.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['vilaweb-privacy-policy', 'vilaweb-cookies-policy'], 'No cedeix les dades de registre fora d’obligacions legals, bancs i proveïdors; les galetes de tercers del web sí que en comparteixen.'),
        intraGroupSharing: na('No forma part d’un grup empresarial.'),
        dataBrokerSales: unknown(),
        internationalTransfers: f('partial', 'official', ['vilaweb-privacy-policy'], 'No en preveu, però admet que alguns proveïdors poden ser fora de l’EEE i encara esmenta el Privacy Shield.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['vilaweb-privacy-policy'], 'Mentre duri la relació i els terminis legals; per als butlletins, fins que es retiri el consentiment.'),
        dataAfterDeletion: unknown(),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['vilaweb-privacy-policy'], 'Dret de supressió.'),
        selfService: f('no', 'official', ['vilaweb-privacy-policy'], 'Per escrit a l’adreça postal o per correu electrònic.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: ['Escriu a administracio@partal.cat indicant que vols exercir el dret de supressió i amb les dades que t’identifiquin.'],
        sources: ['vilaweb-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['vilaweb-privacy-policy'], 'Drets reconeguts per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['vilaweb-privacy-policy'], 'Per escrit al carrer de Ferlandina, 43, de Barcelona, o per correu electrònic.', { url: 'mailto:administracio@partal.cat' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['vilaweb-didomi-config', 'vilaweb-cookies-policy'], 'Al web, bàner de consentiment; la política de galetes remet sobretot a la configuració del navegador.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['vilaweb-didomi-config'], 'Al web, el gestor de consentiment permet triar per finalitat i proveïdor.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de lectura de notícies.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hem trobat cap fitxer security.txt al domini.'),
      },
      alternatives: [
        { app: 'diari-ara', comparability: 'equivalent', rationale: 'Diari en català amb més continguts propis, però l’app declara rastreig.' },
        { app: 'el-nacional', comparability: 'equivalent', rationale: 'Diari digital en català gratuït, amb molts més proveïdors publicitaris.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'L’etiqueta declara poques dades i cap per rastrejar. La política encara cita el Privacy Shield, anul·lat el 2020, i per això sembla que fa anys que no es revisa. El procediment de l’AEPD del 2026 és per un contingut periodístic, no per les dades dels lectors.',
        openQuestions: ['L’app mostra publicitat de tercers com el web?'],
      },
    },

    /* ═══════════════════════════ Paraulògic ═══════════════════════════ */
    {
      slug: 'paraulogic',
      name: 'Paraulògic Oficial',
      company: 'partal-maresma-i-associats',
      categories: ['traduccio-i-referencia'],
      tagline: 'Joc de paraules diari de VilaWeb que només declara dades d’ús anònimes',
      summary:
        'L’app del Paraulògic només declara dades d’ús no vinculades a la identitat, i cap dada per rastrejar. Enllaça la política de privadesa general de VilaWeb, que no parla del joc. La versió actual és del 2024.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'unknown',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.vilaweb.cat/paraulogic/',
        privacyPolicy: 'https://www.vilaweb.cat/pagines/politica-de-privacitat/',
        appStore: 'https://apps.apple.com/es/app/id6443832478',
      },
      accountRequired: f('no', 'official', ['paraulogic-app-store'], 'L’etiqueta no declara cap dada de contacte ni identificador.'),
      openSource: f('no', 'official', ['paraulogic-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary: 'Segons l’etiqueta, l’app només recull com es fa servir el joc, sense vincular-ho a la identitat.',
      dataCollection: [
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['paraulogic-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['paraulogic-app-store'], 'L’etiqueta no declara dades per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['paraulogic-app-store'], 'L’etiqueta no declara identificadors.'),
        thirdPartyTrackersPresent: unknown(),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['paraulogic-app-store'], 'L’etiqueta no declara dades per a publicitat.'),
        profiling: unknown(),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: unknown(),
        intraGroupSharing: na('No forma part d’un grup empresarial.'),
        dataBrokerSales: unknown(),
        internationalTransfers: f('partial', 'official', ['vilaweb-privacy-policy'], 'La política general admet proveïdors fora de l’EEE.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: unknown('La política de VilaWeb no parla del joc.'),
        dataAfterDeletion: unknown(),
      },
      accountDeletion: {
        possible: na('L’app no declara cap compte.'),
        selfService: na('L’app no declara cap compte.'),
        difficulty: 'unknown',
        sources: ['paraulogic-app-store'],
      },
      userRights: {
        dataExport: unknown(),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['vilaweb-privacy-policy'], 'Drets de la política general de VilaWeb.', { url: 'mailto:administracio@partal.cat' }),
      },
      controls: {
        adPersonalizationOptOut: na('L’etiqueta no declara publicitat.'),
        telemetryOptOut: unknown(),
        granularControls: unknown(),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És un joc de paraules.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: na('L’app no declara cap compte.'),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown(),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes: 'Només tenim l’etiqueta de l’App Store: la política enllaçada és la general de VilaWeb i no descriu el joc. No hi ha cap categoria de jocs al directori; l’hem posat a referència perquè el joc es basa en el diccionari normatiu.',
        openQuestions: ['On desa l’app el progrés i les estadístiques del jugador?', 'Porta algun SDK d’analítica de tercers?'],
      },
    },

    /* ═══════════════════════════ El Nacional ═══════════════════════════ */
    {
      slug: 'el-nacional',
      name: 'El Nacional.cat',
      company: 'grup-les-noticies-de-catalunya',
      categories: ['noticies-i-mitjans'],
      tagline: 'Diari gratuït que fa servir identificadors de l’operador de telefonia per seguir la navegació entre webs',
      summary:
        'ElNacional.cat es llegeix sense registre i es finança amb publicitat. L’etiqueta de l’App Store declara dades d’ús per rastrejar. Al web, el bàner ofereix 209 proveïdors del marc de l’IAB i 92 més de propis, i la política preveu Utiq: amb consentiment, l’operador de telefonia genera identificadors de màrqueting per seguir la navegació entre webs, compartits per tota la llar si la connexió és wifi. La política de galetes considera estrictament necessàries Google Analytics i Comscore.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'advertising',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.elnacional.cat/',
        privacyPolicy: 'https://www.elnacional.cat/ca/politica-de-privacitat.html',
        terms: 'https://club.elnacional.cat/termes-i-condicions-dus/',
        appStore: 'https://apps.apple.com/es/app/id1209833862',
      },
      accountRequired: f('no', 'official', ['el-nacional-club-terms'], 'No cal registrar-se per accedir als continguts; sí per comentar o entrar al Club.'),
      openSource: f('no', 'official', ['el-nacional-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La lectura serveix per elaborar perfils publicitaris. Al web, si s’accepta, s’hi afegeix un identificador lligat a la connexió de l’operadora que reconeix la persona en altres webs adherits.',
      dataCollection: [
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['el-nacional-app-store'] }),
        row('historial-de-navegacio', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['el-nacional-privacy-policy', 'el-nacional-cookies-policy'], note: 'Al web, amb consentiment; també a través d’Utiq.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['el-nacional-cookies-policy', 'el-nacional-didomi-config'] }),
        row('xarxa-i-connectivitat', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['el-nacional-privacy-policy'], note: 'Utiq i l’operador de telefonia generen identificadors de màrqueting a partir de la connexió, si hi dones el consentiment.' }),
        row('interessos-inferits', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['el-nacional-cookies-policy'] }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['el-nacional-privacy-policy'], note: 'Butlletins i Club El Nacional; la política preveu comunicar-les a empreses del grup.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['el-nacional-club-terms'], note: 'Quota del Club.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['el-nacional-app-store', 'el-nacional-privacy-policy'], 'L’etiqueta declara dades d’ús per rastrejar; la política preveu connectar visites entre webs amb Utiq.'),
        advertisingIdentifiers: unknown('L’etiqueta no concreta si fa servir l’identificador publicitari del dispositiu.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['el-nacional-cookies-policy', 'el-nacional-didomi-config'], 'Google Ad Manager, Seedtag, Magnite, PubMatic, Amazon, Taboola, Teads i centenars de proveïdors més al web.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['el-nacional-cookies-policy'], 'Publicitat comportamental amb consentiment.'),
        profiling: f('yes', 'official', ['el-nacional-cookies-policy', 'el-nacional-privacy-policy'], 'Perfils de navegació per a publicitat i continguts.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['el-nacional-privacy-policy'], 'Identificadors d’Utiq compartits amb plataformes publicitàries; galetes de tercers amb consentiment.'),
        intraGroupSharing: f('yes', 'official', ['el-nacional-privacy-policy'], 'Pot comunicar les dades a empreses del grup.'),
        dataBrokerSales: unknown(),
        internationalTransfers: unknown('La política no té cap apartat de transferències internacionals.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['el-nacional-privacy-policy'], 'El temps necessari per a la finalitat i les responsabilitats legals; si hi ha diverses finalitats, el termini més llarg.'),
        dataAfterDeletion: unknown(),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['el-nacional-privacy-policy'], 'Dret d’esborrament.'),
        selfService: f('partial', 'official', ['el-nacional-club-terms', 'el-nacional-privacy-policy'], 'La baixa del Club es fa des del perfil; l’esborrament de dades, per correu.'),
        difficulty: 'medium',
        steps: [
          'Si ets soci del Club, dona’t de baixa des del teu perfil a club.elnacional.cat (és efectiva l’últim dia de l’any pagat).',
          'Per esborrar les dades, escriu a lopd@elnacional.cat.',
          'Per retirar el consentiment d’Utiq a tots els webs adherits, fes servir el consenthub d’Utiq.',
        ],
        obstacles: 'Si es demana la baixa del Club a menys de tres dies del cobrament, no és efectiva fins a l’any següent.',
        sources: ['el-nacional-club-terms', 'el-nacional-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La llista de drets de la política no esmenta la portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['el-nacional-privacy-policy'], 'Per correu, telèfon o carta; resposta en un mes.', { url: 'mailto:lopd@elnacional.cat' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['el-nacional-cookies-policy', 'el-nacional-didomi-config'], 'Bàner de consentiment al web; la política remet sobretot al navegador.'),
        telemetryOptOut: f('no', 'official', ['el-nacional-cookies-policy'], 'Google Analytics i Comscore es consideren estrictament necessàries.'),
        granularControls: f('partial', 'official', ['el-nacional-didomi-config'], 'Al web, per finalitat i proveïdor.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'official', ['el-nacional-cookies-policy'], 'Classifica com a necessàries galetes d’analítica que requeririen consentiment.'),
        darkPatternList: [
          {
            type: 'other',
            severity: 'medium',
            description: 'La política de galetes presenta Google Analytics i Comscore com a estrictament necessàries, i per tant fora del consentiment.',
            sources: ['el-nacional-cookies-policy'],
          },
        ],
      },
      security: {
        e2ee: na('És una aplicació de lectura de notícies.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hem trobat cap fitxer security.txt al domini.'),
      },
      alternatives: [
        { app: 'vilaweb', comparability: 'equivalent', rationale: 'Diari digital en català; l’app no declara dades per rastrejar.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'El punt més rellevant és Utiq, un identificador de l’operador que no s’esborra en canviar de navegador i que, per wifi, es comparteix entre tots els membres de la llar que hi consenten. La llista de proveïdors és del web. No hem trobat sancions ni filtracions.',
        openQuestions: ['L’app integra Utiq o només el web?'],
      },
    },

    /* ═══════════════════════════ La Vanguardia ═══════════════════════════ */
    {
      slug: 'la-vanguardia',
      name: 'La Vanguardia',
      company: 'la-vanguardia-ediciones',
      categories: ['noticies-i-mitjans'],
      tagline: 'Perfils publicitaris compartits amb el Grup Godó i cedits a tercers; al web, paga o accepta',
      summary:
        'L’etiqueta de l’App Store declara compres, contacte, identificadors, dades d’ús i diagnòstic per rastrejar. Amb consentiment, La Vanguardia crea perfils publicitaris que comparteix amb Mundo Deportivo i RAC1 i pot cedir a empreses triades per a les seves campanyes. Algun soci pot fer geolocalització precisa o identificar el dispositiu per l’empremta digital. Al web, qui rebutja les galetes ha de subscriure’s. L’AEPD la va sancionar el 2023 per instal·lar galetes de Google abans del consentiment.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.lavanguardia.com/',
        privacyPolicy: 'https://www.lavanguardia.com/politica-privacidad.html',
        appStore: 'https://apps.apple.com/es/app/id364587804',
      },
      accountRequired: f('partial', 'official', ['la-vanguardia-privacy-policy', 'la-vanguardia-didomi-config'], 'El registre és opcional, però al web l’accés sense acceptar galetes exigeix subscripció.'),
      openSource: f('no', 'official', ['la-vanguardia-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Els continguts llegits, la ubicació (si s’autoritza) i les compres formen part d’un perfil publicitari que el grup comparteix entre La Vanguardia, Mundo Deportivo i RAC1 i que pot deixar fer servir a altres empreses.',
      dataCollection: [
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['la-vanguardia-app-store', 'la-vanguardia-privacy-policy'], note: 'Les dades del registre poden enriquir el perfil publicitari si hi consents.' }),
        row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['la-vanguardia-app-store', 'la-vanguardia-privacy-policy'], note: 'Identificador únic per reconèixer l’usuari registrat en tots els dispositius.' }),
        row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['la-vanguardia-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['la-vanguardia-app-store', 'la-vanguardia-privacy-policy'] }),
        row('identificador-publicitari', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['la-vanguardia-privacy-policy'], note: 'Si se n’ha autoritzat l’ús.' }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'prestacio-del-servei'], sources: ['la-vanguardia-privacy-policy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['la-vanguardia-privacy-policy'] }),
        row('xarxa-i-connectivitat', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['la-vanguardia-privacy-policy'], note: 'Tipus de xarxa i operador.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'unknown', shared: 'unknown', purposes: ['publicitat-personalitzada'], sources: ['la-vanguardia-app-store', 'la-vanguardia-privacy-policy'] }),
        row('ubicacio-precisa', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['la-vanguardia-privacy-policy'], note: 'Latitud i longitud si s’autoritza; algun soci pot fer geolocalització precisa.' }),
        row('historial-de-navegacio', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['la-vanguardia-privacy-policy'], note: 'Els continguts visitats, per URL, també a Mundo Deportivo i RAC1.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['la-vanguardia-app-store'] }),
        row('interessos-inferits', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada', 'cessio-a-tercers'], sources: ['la-vanguardia-privacy-policy'], note: 'Perfils conservats fins a 12 mesos i cedibles a empreses triades.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['la-vanguardia-privacy-policy', 'la-vanguardia-didomi-config'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['la-vanguardia-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['la-vanguardia-app-store', 'la-vanguardia-privacy-policy'], 'Cinc categories de dades declarades per rastrejar i perfils usats en portals i apps de tercers.'),
        advertisingIdentifiers: f('yes', 'official', ['la-vanguardia-privacy-policy'], 'Amb autorització.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['la-vanguardia-privacy-policy', 'la-vanguardia-didomi-config'], 'Tots els proveïdors del TCF de l’IAB i 87 de propis al web, amb Google, Akamai i Permutive.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['la-vanguardia-privacy-policy']),
        profiling: f('yes', 'official', ['la-vanguardia-privacy-policy'], 'Perfils publicitaris i de continguts entre les capçaleres del grup.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['la-vanguardia-privacy-policy'], 'Anunciants, agències i intermediaris publicitaris, amb consentiment.'),
        intraGroupSharing: f('yes', 'official', ['la-vanguardia-privacy-policy'], 'Mundo Deportivo i Radiocat XXI (RAC1).'),
        dataBrokerSales: f('partial', 'official', ['la-vanguardia-privacy-policy'], 'Amb consentiment, cedeix perfils publicitaris a empreses triades perquè en facin les seves pròpies campanyes.'),
        internationalTransfers: f('yes', 'official', ['la-vanguardia-privacy-policy'], 'Proveïdors fora de l’EEE amb clàusules tipus o el Data Privacy Framework.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['la-vanguardia-privacy-policy'], 'Fins a 12 mesos per als perfils i 90 dies per a la xarxa de distribució de continguts.'),
        dataAfterDeletion: unknown(),
        periods: [
          { dataType: 'interessos-inferits', period: 'Fins a 12 mesos', sources: ['la-vanguardia-privacy-policy'] },
          { dataType: 'historial-de-navegacio', period: '90 dies a la xarxa de distribució (CDN)', sources: ['la-vanguardia-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['la-vanguardia-privacy-policy'], 'Dret de supressió per correu.'),
        selfService: unknown('La política no descriu cap opció d’eliminació al perfil.'),
        difficulty: 'unknown',
        steps: [
          'Per a les dades de navegació, obre «Configuración de cookies» al menú de seccions de l’app i retira els consentiments.',
          'Per al registre, escriu a protecciondedatos@lavanguardia.es i demana’n la supressió.',
        ],
        sources: ['la-vanguardia-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['la-vanguardia-privacy-policy'], 'Portabilitat per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['la-vanguardia-privacy-policy'], 'Delegat de protecció de dades del grup a dpo@grupogodo.com.', { url: 'mailto:protecciondedatos@lavanguardia.es' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['la-vanguardia-privacy-policy', 'la-vanguardia-didomi-config'], 'Es pot configurar per finalitat i proveïdor, també des de l’app; però al web, rebutjar-ho tot porta a la subscripció.'),
        telemetryOptOut: f('yes', 'official', ['la-vanguardia-privacy-policy'], 'Les estadístiques es poden rebutjar a la configuració de galetes.'),
        granularControls: f('yes', 'official', ['la-vanguardia-privacy-policy']),
        defaultPosture: 'mixed',
        darkPatterns: f('yes', 'official', ['la-vanguardia-godo-didomix', 'la-vanguardia-didomi-config'], 'El botó de rebutjar del web és «Rechazar y suscribirse».'),
        darkPatternList: [
          {
            type: 'unbalanced-consent',
            severity: 'medium',
            description: 'Paga o accepta: l’avís diu que l’accés està subjecte a acceptar les galetes o a subscriure’s. No hem comprovat si l’app fa el mateix.',
            sources: ['la-vanguardia-godo-didomix', 'la-vanguardia-didomi-config'],
          },
        ],
      },
      security: {
        e2ee: na('És una aplicació de lectura de notícies.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hem trobat cap fitxer security.txt al domini.'),
      },
      alternatives: [
        { app: 'el-periodico', comparability: 'equivalent', rationale: 'Diari generalista de Barcelona en castellà i català; l’etiqueta de l’app declara menys dades, però el web té tants proveïdors com La Vanguardia.' },
        { app: 'diari-ara', comparability: 'partial', rationale: 'Diari generalista en català; també condiciona el rebuig al web a la subscripció.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política és la mateixa de RAC1 i molt detallada. L’enllaç de privadesa de l’App Store (politica-privacidad-app) dona error 404; hem fet servir la política general, que esmenta expressament l’app.',
        openQuestions: ['L’app aplica el mateix paga o accepta que el web?'],
      },
    },

    /* ═══════════════════════════ El Periódico ═══════════════════════════ */
    {
      slug: 'el-periodico',
      name: 'El Periódico',
      company: 'prensa-iberica-media',
      categories: ['noticies-i-mitjans'],
      tagline: 'Etiqueta mínima a l’App Store i centenars de proveïdors publicitaris al web',
      summary:
        'L’app només declara identificadors, usats per rastrejar. La política és la de tot el grup Prensa Ibérica: comparteix el perfil de lector amb empreses tecnològiques, anunciants i agències, i amb consentiment cedeix dades a empreses del grup i a tercers. Al web, el bàner ofereix tots els proveïdors del marc de l’IAB i 85 de propis, entre els quals Utiq. Fixa terminis concrets: les dades es conserven fins a tres anys d’inactivitat i tres més de bloqueig.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.elperiodico.com/',
        privacyPolicy: 'https://www.prensaiberica.es/politica-de-privacidad-resumida/',
        appStore: 'https://apps.apple.com/es/app/id407970190',
      },
      accountRequired: f('no', 'official', ['prensa-iberica-privacy-extended'], 'Per navegar no cal donar dades personals; alguns serveis demanen registre o subscripció.'),
      openSource: f('no', 'official', ['el-periodico-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary: 'Amb consentiment, el grup elabora un perfil a partir de la lectura i el comparteix amb anunciants i empreses tecnològiques per mostrar publicitat.',
      dataCollection: [
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['el-periodico-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['prensa-iberica-privacy-extended'] }),
        row('historial-de-navegacio', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['prensa-iberica-privacy-summary'], note: 'Amb consentiment.' }),
        row('interessos-inferits', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['prensa-iberica-privacy-summary'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['prensa-iberica-privacy-summary', 'el-periodico-didomi-config'] }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['prensa-iberica-privacy-summary'], note: 'Registre i butlletins; amb consentiment, cessió a empreses del grup i a tercers per a comunicacions comercials.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['prensa-iberica-privacy-extended'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['el-periodico-app-store'], 'L’etiqueta declara identificadors per rastrejar.'),
        advertisingIdentifiers: f('yes', 'official', ['el-periodico-app-store'], 'Identificadors declarats per rastrejar.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['el-periodico-didomi-config'], 'Tots els proveïdors del TCF de l’IAB i 85 de propis al web, amb Utiq i Foursquare.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['prensa-iberica-privacy-summary']),
        profiling: f('yes', 'official', ['prensa-iberica-privacy-summary'], 'Perfils amb els interessos i gustos de cada usuari.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['prensa-iberica-privacy-summary'], 'El perfil es comparteix amb empreses tecnològiques, anunciants i agències.'),
        intraGroupSharing: f('yes', 'official', ['prensa-iberica-privacy-summary'], 'Amb consentiment, per a comunicacions comercials.'),
        dataBrokerSales: f('no', 'official', ['prensa-iberica-privacy-extended'], 'La política diu que no ven ni lloga les dades.'),
        internationalTransfers: f('yes', 'official', ['prensa-iberica-privacy-extended'], 'Proveïdors als Estats Units.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['prensa-iberica-privacy-summary', 'prensa-iberica-privacy-extended'], 'Registre fins a la baixa o tres anys d’inactivitat; clients, tres anys després del contracte.'),
        dataAfterDeletion: f('partial', 'official', ['prensa-iberica-privacy-extended'], 'Després dels terminis, les dades queden bloquejades tres anys abans d’anonimitzar-les o destruir-les.'),
        periods: [
          { dataType: 'adreca-electronica', period: 'Fins a la baixa o tres anys d’inactivitat', sources: ['prensa-iberica-privacy-summary'] },
          { dataType: 'dades-de-pagament', period: 'Durada del contracte més tres anys', sources: ['prensa-iberica-privacy-summary'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['prensa-iberica-privacy-summary']),
        selfService: unknown('La política parla de «donar-se de baixa de l’àrea privada», però no explica com.'),
        difficulty: 'unknown',
        steps: ['Escriu a protecciondatos@prensaiberica.es amb un document que acrediti la teva identitat i demana la supressió.'],
        obstacles: 'Cal acreditar la identitat amb un document.',
        dataRetained: 'Dades bloquejades durant tres anys.',
        sources: ['prensa-iberica-privacy-summary', 'prensa-iberica-privacy-extended'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['prensa-iberica-privacy-extended'], 'Drets per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['prensa-iberica-privacy-summary'], 'Delegat de protecció de dades del grup.', { url: 'mailto:protecciondatos@prensaiberica.es' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['prensa-iberica-privacy-summary'], 'Enllaç «preferències de privadesa» als webs i a les apps.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['el-periodico-didomi-config'], 'Al web, per finalitat i proveïdor.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de lectura de notícies.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown(),
      },
      alternatives: [
        { app: 'la-vanguardia', comparability: 'equivalent', rationale: 'Diari generalista de Barcelona bilingüe, amb una política més detallada però perfils cedits a tercers.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'L’enllaç de privadesa de l’App Store porta a l’avís legal, i la política d’El Periódico es carrega des de la del grup. L’etiqueta declara molt menys del que descriuen la política i el bàner del web. No hem trobat sancions ni filtracions documentades.',
        openQuestions: ['L’app integra Utiq com el web?', 'Hi ha un botó per esborrar el compte a l’àrea privada?'],
      },
    },

    /* ═══════════════════════════ El Punt Avui ═══════════════════════════ */
    {
      slug: 'el-punt-avui',
      name: 'El Punt Avui',
      company: 'hermes-comunicacions',
      categories: ['noticies-i-mitjans'],
      tagline: 'App de quiosc que declara no recollir cap dada i fa anys que no s’actualitza',
      summary:
        'L’app d’El Punt Avui a l’App Store és un quiosc amb el diari en PDF i serveis locals. El desenvolupador declara que no recull cap dada, però la darrera versió és del juny del 2022. La política del web preveu un perfil comercial per a publicitat pròpia i de tercers amb consentiment, i diu que no ven dades. Els drets s’exerceixen per correu amb còpia del DNI.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.elpuntavui.cat/',
        privacyPolicy: 'https://www.elpuntavui.cat/epa/politica-de-privacitat.html',
        terms: 'https://www.elpuntavui.cat/epa/condicions-de-venda.html',
        appStore: 'https://apps.apple.com/es/app/id1505758634',
      },
      accountRequired: unknown('No hem pogut comprovar si el quiosc demana iniciar sessió per llegir el PDF.'),
      openSource: f('no', 'official', ['el-punt-avui-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary: 'Segons l’etiqueta, l’app no recull res; les dades de subscriptor i el perfil comercial són del web.',
      dataCollection: [
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['el-punt-avui-privacy-policy'], note: 'Registre, subscripció i butlletins al web.' }),
        row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['el-punt-avui-privacy-policy'], note: 'La política inclou el DNI entre les dades identificatives.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['el-punt-avui-condicions-venda'] }),
        row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['el-punt-avui-privacy-policy'], note: 'Perfil comercial amb consentiment per a comunicacions de productes propis i de tercers.' }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['el-punt-avui-privacy-policy'], note: 'Dades electròniques del web.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['el-punt-avui-app-store'], 'L’etiqueta declara que no recull dades.'),
        advertisingIdentifiers: f('no', 'official', ['el-punt-avui-app-store']),
        thirdPartyTrackersPresent: unknown('La política remet a una política de galetes que no hem pogut consultar.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['el-punt-avui-privacy-policy'], 'Comunicacions comercials segons un perfil propi, amb consentiment; per telèfon, correu postal i electrònic.'),
        profiling: f('yes', 'official', ['el-punt-avui-privacy-policy'], 'Perfil comercial, sense decisions automatitzades.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('no', 'official', ['el-punt-avui-privacy-policy'], 'Només proveïdors i obligacions legals, o amb consentiment.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: f('no', 'official', ['el-punt-avui-privacy-policy'], 'No ven ni lloga les dades.'),
        internationalTransfers: unknown('La política diu que n’informaria si en fes.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['el-punt-avui-privacy-policy'], 'El temps necessari per a la finalitat.'),
        dataAfterDeletion: f('partial', 'official', ['el-punt-avui-privacy-policy'], 'Es poden mantenir bloquejades en els casos que preveu la llei.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['el-punt-avui-privacy-policy'], 'Dret de supressió.'),
        selfService: f('partial', 'official', ['el-punt-avui-privacy-policy'], 'El consentiment es pot revocar des del «Panell d’usuari»; la supressió, per correu.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: ['Escriu a protecciodades@elpuntavui.cat amb un document d’identitat i demana la supressió.'],
        obstacles: 'Cal adjuntar un document acreditatiu de la identitat.',
        sources: ['el-punt-avui-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['el-punt-avui-privacy-policy'], 'Portabilitat en format estructurat i de lectura mecànica, per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['el-punt-avui-privacy-policy'], undefined, { url: 'mailto:protecciodades@elpuntavui.cat' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['el-punt-avui-privacy-policy'], 'El perfil comercial depèn del consentiment, revocable des del panell d’usuari.'),
        telemetryOptOut: unknown(),
        granularControls: unknown(),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de lectura de premsa.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown(),
      },
      alternatives: [
        { app: 'vilaweb', comparability: 'partial', rationale: 'Diari en català actualitzat; l’app no declara rastreig.' },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'L’etiqueta és una declaració del desenvolupador d’una app sense actualitzacions des del 2022; no l’hem pogut contrastar. La política és del web i no esmenta l’app. La societat surt com a S.L. a la política i com a SA a l’App Store.',
        openQuestions: ['Quins proveïdors publicitaris i d’analítica té el web?', 'El quiosc demana compte de subscriptor?'],
      },
    },
  ],

  incidents: [
    {
      slug: 'la-vanguardia-aepd-galetes-2023',
      title: 'L’AEPD sanciona La Vanguardia per instal·lar galetes de Google sense consentiment',
      type: 'regulatory-fine',
      severity: 'low',
      apps: ['la-vanguardia'],
      company: 'la-vanguardia-ediciones',
      occurredAt: '2023-06-23',
      disclosedAt: '2023-07-03',
      description:
        'Arran d’una denúncia del novembre del 2022, l’AEPD va comprovar que lavanguardia.com instal·lava galetes d’analítica i publicitat de Google en entrar-hi, abans de cap consentiment, i que les mantenia encara que es rebutgessin; tampoc no permetia gestionar-les per proveïdor ni retirar el consentiment. Proposava 5.000 euros de sanció; l’editora en va pagar 4.000 per pagament voluntari i va renunciar a recórrer.',
      affectedPeople: 'Visitants del web de La Vanguardia.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        fineAmountEur: 4000,
        legalBasis: 'Article 22.2 de la Llei 34/2002 (LSSI)',
        status: 'final',
      },
      sources: ['aepd-ps-00132-2023'],
    },
    {
      slug: 'vilaweb-aepd-policies-infiltrats-2026',
      title: 'L’AEPD obre un procediment sancionador a VilaWeb per informar sobre un policia infiltrat',
      type: 'regulatory-fine',
      severity: 'low',
      company: 'partal-maresma-i-associats',
      occurredAt: '2026-07-29',
      disclosedAt: '2026-07-29',
      description:
        'L’AEPD va obrir un procediment sancionador contra VilaWeb, amb una multa mínima de 7.000 euros, per haver publicat el nom fictici i el nom real d’un policia infiltrat en moviments socials de Girona i Salt, i fotografies on se li veia la cara. VilaWeb va anunciar que hi recorreria. No afecta les dades dels lectors.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        status: 'ongoing',
      },
      sources: ['vilaweb-aepd-infiltrats-2026'],
    },
  ],

  storeIds: {
    'diari-ara': 'cat.ara.main',
    vilaweb: 'cat.vilaweb.mag',
    paraulogic: 'cat.vilaweb.paraulogic',
    'el-nacional': 'cat.elnacional.elmeunacional',
    'la-vanguardia': 'es.lavanguardia',
    'el-periodico': 'com.zetadigital.elperiodico',
    'el-punt-avui': 'cat.epa.quiosc.epan',
  },
}
