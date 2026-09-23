import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/**
 * Lot 36 de la segona onada: sis serveis meteorològics i marítims (Meteored,
 * Safety tips, Surf Forecast, Windfinder, meteoblue i Nautide), dues
 * aplicacions de l'Administració General de l'Estat (miDGT i MiDNI) i l'àrea
 * de client d'un operador de telecomunicacions (Mi DIGI).
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'alpred',
      name: 'Meteored',
      legalName: 'Alpred, S.L.',
      description:
        'Empresa murciana que explota el portal meteorològic tiempo.com i la marca internacional Meteored. Es finança amb publicitat programàtica i amb subscripcions sense anuncis.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      primaryRevenueModel: 'advertising',
      website: 'https://www.tiempo.com/',
      productDomains: ['tiempo.com', 'meteored.com', 'meteored.mx', 'meteored.com.ar'],
      privacyContact: 'dpd@meteored.com',
    },
    {
      slug: 'rc-solution',
      name: 'RC Solution',
      legalName: 'RC Solution Co., Ltd.',
      description:
        'Empresa japonesa de Shinjuku (Tòquio) especialitzada en sistemes d’avís d’emergència. Desenvolupa Safety tips, l’aplicació d’alertes per a visitants estrangers supervisada per l’Agència de Turisme del Japó.',
      headquartersCountry: 'JP',
      ownership: 'private',
      primaryRevenueModel: 'unknown',
      website: 'https://www.rcsc.co.jp/',
      productDomains: ['rcsc.co.jp'],
    },
    {
      slug: 'meteo365',
      name: 'Meteo365',
      legalName: 'Meteo365 Ltd.',
      description:
        'Empresa britànica amb seu a Cardiff que publica les previsions de Surf-Forecast i de Snow-Forecast. Combina publicitat i subscripcions de pagament.',
      headquartersCountry: 'GB',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.surf-forecast.com/',
      productDomains: ['surf-forecast.com', 'snow-forecast.com'],
    },
    {
      slug: 'windfinder',
      name: 'Windfinder',
      legalName: 'Windfinder.com GmbH & Co. KG',
      description:
        'Empresa alemanya de Kiel especialitzada en previsions de vent per a la navegació i els esports d’aigua. Es finança amb publicitat i amb les subscripcions Plus, Adfree i Supporter.',
      headquartersCountry: 'DE',
      euEstablishment: 'DE',
      leadSupervisoryAuthority: 'Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.windfinder.com/',
      productDomains: ['windfinder.com'],
      privacyContact: 'info@windfinder.com',
    },
    {
      slug: 'meteoblue',
      name: 'meteoblue',
      legalName: 'meteoblue AG',
      description:
        'Empresa suïssa de Basilea, nascuda de la Universitat de Basilea, que ven previsions d’alta resolució a empreses i manté una aplicació de consum amb publicitat i subscripcions.',
      headquartersCountry: 'CH',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.meteoblue.com/',
      productDomains: ['meteoblue.com'],
    },
    {
      slug: 'igoox',
      name: 'Igoox',
      legalName: 'Igoox, Ltd.',
      description:
        'Desenvolupador de Nautide, l’aplicació de marees, vent i onatge coneguda també com a Tabla de Mareas. Les seves condicions d’ús diuen que està registrada a Espanya amb el número EU-ESB21386255.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://nautide.com/',
      productDomains: ['nautide.com'],
    },
    {
      slug: 'direccion-general-de-trafico',
      name: 'Direcció General de Trànsit',
      legalName: 'Dirección General de Tráfico',
      description:
        'Organisme autònom del Ministeri de l’Interior que gestiona el registre de conductors i el de vehicles, les sancions de trànsit i el permís per punts. Publica l’aplicació miDGT.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'state',
      primaryRevenueModel: 'unknown',
      website: 'https://www.dgt.es/',
      productDomains: ['dgt.es', 'dgt.gob.es'],
      privacyContact: 'protecciondedatos@dgt.es',
    },
    {
      slug: 'direccion-general-de-la-policia',
      name: 'Direcció General de la Policia',
      legalName: 'Dirección General de la Policía',
      description:
        'Òrgan del Ministeri de l’Interior (NIF S2816015H) que expedeix el document nacional d’identitat i el passaport. La seva Divisió de Documentació és responsable del tractament de MiDNI.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'state',
      primaryRevenueModel: 'unknown',
      website: 'https://www.policia.es/',
      productDomains: ['policia.es', 'dnielectronico.es', 'midni.gob.es'],
    },
    {
      slug: 'digi-spain-telecom',
      name: 'DIGI',
      legalName: 'DIGI Spain Telecom, S.A.',
      description:
        'Operador de telecomunicacions amb seu a Alcobendas (NIF A-84919760), filial espanyola del grup DIGI. Ofereix mòbil, fibra i televisió, i gestiona l’àrea de client amb l’aplicació Mi DIGI.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'subsidiary',
      primaryRevenueModel: 'subscription',
      website: 'https://www.digimobil.es/',
      productDomains: ['digimobil.es'],
      privacyContact: 'pdatos@digimobil.es',
    },
  ],

  sources: [
    /* ── Meteored ── */
    s('meteored-privacy-policy', 'Política de Privacidad — Meteored', 'https://www.tiempo.com/privacy.html', 'Alpred, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política del grup Meteored: identifica Alpred, S.L. com a responsable, descriu la captura d’ubicació amb precisions que van dels 5 metres als 2 km, els identificadors publicitaris GAID i IDFA, la plataforma de consentiment conforme a l’estàndard d’IAB Spain, els socis publicitaris i les transferències als Estats Units.',
    }),
    s('meteored-app-store', 'Meteored - El Tiempo 14 Días — App Store (Privacidad de la app)', appStore('543364901'), 'Apple / Alpred, S.L.', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: ubicació exacta i aproximada, identificador de dispositiu, interacció amb el producte i dades de publicitat, totes marcades com a dades usades per rastrejar i no vinculades a la identitat.',
    }),

    /* ── Safety tips ── */
    s('safety-tips-app-store', 'Safety tips — App Store (Privacidad de la app)', appStore('858357174'), 'Apple / RC Solution Co.', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa i fitxa de l’aplicació: cap dada per rastrejar; ubicació aproximada, identificador d’usuari i de dispositiu i interacció amb el producte, no vinculats a la identitat, per a analítica i funcionament.',
    }),
    s('safety-tips-rcsc-privacy', '個人情報保護方針 — RC Solution Co., Ltd.', 'https://www.rcsc.co.jp/privacy', 'RC Solution Co., Ltd.', 'privacy-policy', 'primary', {
      language: 'other',
      summary:
        'Política corporativa de RC Solution, en japonès: dades de l’empresa a Nishi-Shinjuku (Tòquio), finalitats genèriques de tractament, ús de Google Firebase, Analytics i AdMob per a estadístiques i publicitat, i atenció de les sol·licituds de supressió. No té cap apartat específic de Safety tips.',
    }),

    /* ── Surf Forecast ── */
    s('surf-forecast-privacy-policy', 'Privacy Policy — Surf-Forecast.com', 'https://www.surf-forecast.com/pages/privacy_policy', 'Meteo365 Ltd.', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Política de Meteo365 Ltd. (Cardiff): dades facilitades i recollides automàticament, passarel·les de pagament, xarxes publicitàries com a destinataris, drets per a l’EEE i el Regne Unit i eliminació del compte des de la mateixa plataforma.',
    }),
    s('surf-forecast-app-store', 'Surf Forecast by Surf-Forecast — App Store (Privacidad de la app)', appStore('6450721636'), 'Apple / Meteo365 Ltd.', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: ubicació exacta, adreça electrònica i identificadors vinculats a la identitat per a publicitat de tercers, màrqueting, analítica i personalització; dades d’ús i diagnòstics declarats per rastrejar.',
    }),

    /* ── Windfinder ── */
    s('windfinder-privacy-policy', 'Privacy Policy — Windfinder', 'https://www.windfinder.com/contact/privacy_policy', 'Windfinder.com GmbH & Co. KG', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Política de Windfinder.com GmbH & Co. KG (Kiel): la ubicació només es determina a petició expressa i no es desa; detalla Google Analytics 4, AdSense i DoubleClick, Sentry, SnigelWeb, Firebase i els mapes d’OpenStreetMap i Thunderforest, el consentiment revocable i les transferències als Estats Units.',
    }),
    s('windfinder-app-store', 'Windfinder: Viento & Tiempo — App Store (Privacidad de la app)', appStore('336829635'), 'Apple / Windfinder', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: identificador de dispositiu i dades de publicitat usats per rastrejar; cap dada vinculada a la identitat.',
    }),
    s('windfinder-account-help', 'Windfinder Account — Help / FAQ', 'https://www.windfinder.com/help/usage/windfinder-account', 'Windfinder.com GmbH & Co. KG', 'support-doc', 'primary', {
      language: 'en',
      summary:
        'Ajuda oficial: el compte és opcional i serveix per sincronitzar llocs preferits i preferències; s’esborra des de la mateixa aplicació amb l’opció «Delete Account», que elimina permanentment la informació desada.',
    }),

    /* ── meteoblue ── */
    s('meteoblue-privacy-policy', 'Privacy Policy — meteoblue', 'https://content.meteoblue.com/en/about-us/legal/privacy', 'meteoblue AG', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Política de meteoblue AG (Basilea), revisada el maig del 2024: enumera dades de compte molt àmplies, l’ús de Google Analytics i AdSense, de Microsoft Clarity amb mapes de calor i repetició de sessió, i de la passarel·la Datatrans; no descriu cap procediment de baixa.',
    }),
    s('meteoblue-ad-providers', 'Ad providers — meteoblue', 'https://content.meteoblue.com/en/about-us/legal/ad-providers', 'meteoblue AG', 'privacy-center', 'primary', {
      language: 'en',
      summary:
        'Llista dels proveïdors de tecnologia publicitària que serveixen anuncis a meteoblue a través de Google Ad Manager, amb un enllaç a la política de cadascun i sense cap mecanisme conjunt de renúncia.',
    }),
    s('meteoblue-app-store', 'meteoblue tiempo y mapas — App Store (Privacidad de la app)', appStore('994459137'), 'Apple / meteoblue', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: identificador de dispositiu vinculat a la identitat i usat per rastrejar per a publicitat de tercers; ubicació exacta i aproximada, identificador d’usuari, interacció i errors, no vinculats.',
    }),

    /* ── Nautide ── */
    s('nautide-terms', 'Terms and Conditions — Nautide', 'https://nautide.com/privacy', 'Igoox, Ltd.', 'terms', 'primary', {
      language: 'en',
      summary:
        'Document que hi ha a l’adreça que l’App Store presenta com a política de privadesa: unes condicions d’ús del 2018 que identifiquen Igoox, Ltd. i diuen que l’aplicació es connecta «anònimament» al seu servidor, però que no parlen de dades personals, ni del RGPD, ni de drets, ni de supressió.',
    }),
    s('nautide-app-store', 'Nautide: Mareas, Viento, Olas+ — App Store (Privacidad de la app)', appStore('1413108902'), 'Apple / Igoox', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: identificador de dispositiu i dades de publicitat usats per rastrejar i destinats a publicitat de tercers, no vinculats a la identitat.',
    }),

    /* ── miDGT ── */
    s('midgt-app-store', 'miDGT — App Store (Privacidad de la app)', appStore('1463054197'), 'Apple / DGT-GI', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Fitxa i etiqueta de privadesa de miDGT: «No se recopilan datos». La descripció explica que l’aplicació mostra el permís de conducció digital i les dades de la DGT, i que s’hi entra amb Cl@ve. L’enllaç de política de privadesa que hi declara la DGT porta a una adreça que ja no existeix.',
    }),
    s('midgt-dgt-noticia', 'La app miDGT suma más funcionalidades y un acceso más fácil', 'https://www.dgt.es/comunicacion/noticias/app-midgt-mas-funcionalidades-acceso-mas-facil', 'Dirección General de Tráfico', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Comunicació oficial de la DGT sobre les funcions de miDGT: permís digital, vehicles, ITV, punts, avisos i pagament de sancions, identificació del conductor responsable i accés amb Cl@ve, certificat o un codi d’un sol ús per SMS.',
    }),
    s('midgt-dgt-proteccion-datos', 'Protección de datos — Dirección General de Tráfico', 'https://www.dgt.es/contenido/proteccion-de-datos/', 'Dirección General de Tráfico', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Informació general de protecció de dades de la DGT: registre d’activitats de tractament, exercici dels drets amb un formulari oficial i dades de contacte del delegat de protecció de dades (protecciondedatos@dgt.es, C/ Josefa Valcárcel 44, Madrid).',
    }),

    /* ── MiDNI ── */
    s('midni-app-store', 'MiDNI — App Store (Privacidad de la app)', appStore('6477598076'), 'Apple / Dirección General de la Policía', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: cap dada per rastrejar ni vinculada a la identitat; només dades de diagnòstic (errors, rendiment i altres) no vinculades, per a «otros fines».',
    }),
    s('midni-dnie-info', 'MiDNI — Portal del DNI electrónico', 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_2151', 'Dirección General de la Policía', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Pàgina oficial de MiDNI: responsable del tractament (Direcció General de la Policia, NIF S2816015H, Divisió de Documentació), registre previ amb el DNI electrònic, verificació del telèfon amb un SMS de validesa limitada, tractament en servidors propis sense tercers, mesures de nivell alt de l’Esquema Nacional de Seguretat i exercici dels drets davant del delegat de protecció de dades.',
    }),

    /* ── Mi DIGI ── */
    s('mi-digi-privacy-policy', 'Política de Privacidad — DIGI Spain Telecom', 'https://www.digimobil.es/legal/politica-de-privacidad', 'DIGI Spain Telecom, S.A.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de privadesa de DIGI Spain Telecom, S.A. (NIF A-84919760) aplicable al web i a les aplicacions mòbils: categories de dades, bases jurídiques, destinataris (proveïdors, altres operadors, entitats financeres, sistemes d’informació creditícia i administracions), absència general de transferències internacionals, bloqueig de les dades en acabar la relació i contacte del delegat de protecció de dades.',
    }),
    s('mi-digi-app-store', 'Mi DIGI — App Store (Privacidad de la app)', appStore('1520048638'), 'Apple / DIGI SPAIN TELECOM SL', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: les dades de diagnòstic d’errors es declaren com a dades usades per rastrejar; la interacció amb el producte queda vinculada a la identitat per a analítica i funcionament.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ Meteored ═══════════════════════════ */
    {
      slug: 'meteored',
      name: 'Meteored - El Tiempo 14 Días',
      company: 'alpred',
      categories: ['meteorologia'],
      tagline: 'La previsió del temps a canvi de la ubicació exacta, declarada com a dada per rastrejar-te',
      summary:
        'Meteored, l’aplicació de tiempo.com, és el servei meteorològic espanyol més descarregat. La seva etiqueta de l’App Store declara que la ubicació exacta i aproximada, l’identificador de dispositiu i les dades de publicitat es poden fer servir per rastrejar-te en apps i webs d’altres empreses. La política ho confirma: descriu la precisió del GPS, els identificadors publicitaris GAID i IDFA i una plataforma de consentiment conforme a l’estàndard d’IAB Spain amb els seus socis publicitaris.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'advertising',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.tiempo.com/',
        privacyPolicy: 'https://www.tiempo.com/privacy.html',
        appStore: appStore('543364901'),
      },
      accountRequired: f('no', 'editorial', ['meteored-app-store', 'meteored-privacy-policy'], 'L’etiqueta no declara cap dada vinculada a la identitat i la política només parla de compte per a funcions com les alertes i la comunitat: la previsió es consulta sense registre.'),
      openSource: unknown('No hem trobat el codi publicat.'),
      dataSummary:
        'La ubicació d’una aplicació del temps es consulta moltes vegades al dia i dibuixa on vius, on treballes i on vas de vacances. Aquí no es queda dins del servei: viatja cap als socis publicitaris junt amb l’identificador del dispositiu.',
      dataCollection: [
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'mesura-publicitaria'], sources: ['meteored-app-store', 'meteored-privacy-policy'], note: 'La política xifra la precisió entre 5 metres amb GPS i uns 2 km amb la xarxa mòbil.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['meteored-app-store', 'meteored-privacy-policy'] }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['meteored-privacy-policy'], note: 'GAID a Android i IDFA a iOS.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['meteored-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['meteored-app-store', 'meteored-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte', 'mesura-i-analisi-dus'], sources: ['meteored-app-store'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['meteored-privacy-policy'], note: 'Dades tècniques i sensors del terminal, com l’altímetre.' }),
        row('adreca-electronica', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['meteored-privacy-policy'], note: 'Per al compte, les alertes subscrites i els butlletins.' }),
        row('dades-de-pagament', 'optional', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['meteored-privacy-policy'], note: 'Les gestiona Stripe; la facturació es conserva fins a sis anys.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['meteored-app-store'], 'L’etiqueta declara ubicació, identificadors i dades de publicitat com a dades usades per rastrejar-te.'),
        advertisingIdentifiers: f('yes', 'official', ['meteored-privacy-policy', 'meteored-app-store'], 'GAID i IDFA, amb renúncia des de la configuració del sistema operatiu.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['meteored-privacy-policy'], 'Socis publicitaris i analítics gestionats amb una plataforma de consentiment conforme a l’estàndard d’IAB Spain.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['meteored-privacy-policy', 'meteored-app-store'], 'Publicitat personalitzada amb consentiment previ a través de la plataforma de consentiment.'),
        profiling: unknown('La política parla d’anàlisi d’audiència i de personalització, però no descriu cap perfil individual.'),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['meteored-privacy-policy'], 'Socis publicitaris i proveïdors: Cloudflare, Google Cloud i Stripe.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: unknown('La política no esmenta cap venda de dades ni la descarta expressament.'),
        internationalTransfers: f('yes', 'official', ['meteored-privacy-policy'], 'Transferències als Estats Units emparades en el marc de privadesa UE-EUA o en clàusules contractuals tipus.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['meteored-privacy-policy'], 'Concreta sis anys per a la facturació i un any per a les candidatures; per a la resta, «mentre duri la relació».'),
        dataAfterDeletion: f('partial', 'official', ['meteored-privacy-policy'], 'S’elimina el perfil i els accessos, però el contingut públic publicat es conserva anonimitzat i la facturació es manté sis anys.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['meteored-privacy-policy']),
        selfService: unknown('La política no documenta cap botó ni formulari de baixa dins de l’aplicació.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Escriu al delegat de protecció de dades (dpd@meteored.com) i demana la supressió del compte.',
          'Acredita la identitat si t’ho demanen.',
          'Comprova que les publicacions públiques que hagis fet queden anonimitzades, no esborrades.',
        ],
        obstacles: 'No hi ha cap camí d’autoservei documentat: la baixa passa per un correu.',
        dataRetained: 'Contingut públic anonimitzat i dades de facturació fins a sis anys.',
        sources: ['meteored-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['meteored-privacy-policy'], 'Reconeix el dret de portabilitat, però no documenta cap eina d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['meteored-privacy-policy'], undefined, { url: 'mailto:dpd@meteored.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['meteored-privacy-policy'], 'La plataforma de consentiment permet revocar el consentiment publicitari i el sistema operatiu, limitar l’identificador.'),
        telemetryOptOut: f('partial', 'official', ['meteored-privacy-policy'], 'L’analítica i la geolocalització es demanen per consentiment, dins del mateix diàleg que la publicitat.'),
        granularControls: f('partial', 'official', ['meteored-privacy-policy'], 'El control es fa per finalitats i socis de l’estàndard d’IAB, no per tipus de dada.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem pogut auditar el diàleg de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('Servei d’informació meteorològica: no hi ha comunicació privada entre persones que calgui xifrar d’extrem a extrem.'),
        transportEncryption: unknown('La política no descriu les mesures tècniques.'),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hi ha security.txt a tiempo.com ni a meteored.com, i la política no dona cap canal de seguretat.'),
      },
      alternatives: [
        { app: 'aemet', comparability: 'equivalent', rationale: 'L’agència estatal de meteorologia publica la seva pròpia aplicació amb les mateixes prediccions i avisos oficials, i no es finança amb publicitat.', tradeOffs: 'Menys funcions visuals i menys detall a escala d’hores que els serveis comercials.' },
        { app: 'windy-com', comparability: 'partial', rationale: 'Mapes i previsions detallades amb una etiqueta de l’App Store que no declara cap dada per rastrejar.', tradeOffs: 'Està pensat per a mapes i models, no per a la previsió local ràpida.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No consten filtracions dels dominis tiempo.com ni meteored.com a la base de dades de Have I Been Pwned. El cercador de resolucions de l’AEPD no s’ha pogut consultar des d’aquí.',
        openQuestions: [
          'Quins socis publicitaris concrets reben la ubicació i amb quina freqüència?',
          'Hi ha alguna manera d’esborrar el compte des de la mateixa aplicació?',
        ],
      },
    },

    /* ═══════════════════════════ Safety tips ═══════════════════════════ */
    {
      slug: 'safety-tips',
      name: 'Safety tips',
      company: 'rc-solution',
      categories: ['meteorologia'],
      tagline: 'Alertes de terratrèmol i tsunami al Japó sense rastreig, però amb una política que no parla de l’aplicació',
      summary:
        'Safety tips avisa de terratrèmols, tsunamis, erupcions, avisos meteorològics i cops de calor al Japó, i està pensada per a visitants estrangers sota la supervisió de l’Agència de Turisme del Japó. L’etiqueta de l’App Store no declara cap dada per rastrejar i cap dada vinculada a la identitat: només ubicació aproximada, identificadors i interacció, sense vincular. L’única política disponible és la corporativa de RC Solution, en japonès i sense cap apartat sobre l’aplicació.',
      platforms: ['ios', 'android'],
      businessModel: 'unknown',
      jurisdiction: 'Japó',
      links: {
        website: 'https://www.rcsc.co.jp/',
        privacyPolicy: 'https://www.rcsc.co.jp/privacy',
        appStore: appStore('858357174'),
      },
      accountRequired: f('no', 'editorial', ['safety-tips-app-store'], 'La fitxa descriu una aplicació gratuïta d’avisos que només demana triar zona i idioma, i l’etiqueta no declara cap dada vinculada a la identitat.'),
      openSource: unknown(),
      dataSummary:
        'L’aplicació necessita saber on ets per avisar-te del que et pot afectar. Ho fa amb ubicació aproximada i sense vincular-la a cap identitat, però la política del desenvolupador no explica què passa amb aquestes dades ni quant de temps es conserven.',
      dataCollection: [
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['safety-tips-app-store'], note: 'Serveix per filtrar els avisos de la zona seleccionada.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['safety-tips-app-store'], note: 'Necessari per enviar les notificacions d’emergència.' }),
        row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['safety-tips-app-store'], note: 'L’etiqueta el declara com a «ID d’usuari» no vinculat a la identitat.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['safety-tips-app-store', 'safety-tips-rcsc-privacy'], note: 'La política corporativa diu que fa servir Google Firebase i Analytics.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['safety-tips-app-store'], 'L’etiqueta no declara cap dada usada per rastrejar-te.'),
        advertisingIdentifiers: f('no', 'official', ['safety-tips-app-store']),
        thirdPartyTrackersPresent: f('partial', 'official', ['safety-tips-rcsc-privacy'], 'La política corporativa esmenta Firebase i Google Analytics per als productes de l’empresa, i AdMob per a la publicitat, sense dir quins fa servir aquesta aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['safety-tips-app-store'], 'L’etiqueta no declara cap finalitat publicitària.'),
        profiling: unknown(),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['safety-tips-rcsc-privacy'], 'La política només preveu cessions per obligació legal, per protegir la vida o en forma de dades estadístiques no identificables, i l’ús de serveis de Google.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: unknown(),
        internationalTransfers: unknown('L’aplicació és japonesa i la política no diu on es tracten les dades.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: unknown('La política corporativa no fixa cap termini.'),
        dataAfterDeletion: na('No hi ha cap compte que es pugui eliminar; n’hi ha prou de desinstal·lar l’aplicació.'),
      },
      accountDeletion: {
        possible: na('L’aplicació no crea cap compte.'),
        selfService: na('No hi ha compte.'),
        difficulty: 'unknown',
        obstacles: 'Per deixar de fer-la servir n’hi ha prou de desinstal·lar-la.',
        sources: ['safety-tips-app-store'],
      },
      userRights: {
        dataExport: unknown(),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['safety-tips-rcsc-privacy'], 'La política corporativa diu que atén les peticions de comunicació, rectificació, supressió i suspensió de l’ús a través del responsable de dades de l’empresa, sense procediment europeu.'),
      },
      controls: {
        adPersonalizationOptOut: na('L’aplicació no mostra publicitat, segons l’etiqueta de l’App Store.'),
        telemetryOptOut: unknown(),
        granularControls: unknown('Es poden triar zones i idioma, però no hem trobat controls de dades documentats.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('Servei d’avisos públics d’emergència: no hi ha comunicació privada entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: na('No hi ha compte que calgui protegir.'),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hi ha security.txt a rcsc.co.jp.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Cap filtració associada a rcsc.co.jp a Have I Been Pwned. La política només existeix en japonès i és corporativa: gairebé tot el que sabem de l’aplicació surt de l’etiqueta de l’App Store.',
        openQuestions: [
          'Quins serveis de Google fa servir exactament Safety tips i quina informació els envia?',
          'Quant de temps conserva RC Solution els registres d’ús de l’aplicació?',
        ],
      },
    },

    /* ═══════════════════════════ Surf Forecast ═══════════════════════════ */
    {
      slug: 'surf-forecast',
      name: 'Surf Forecast by Surf-Forecast',
      company: 'meteo365',
      categories: ['meteorologia'],
      tagline: 'Ubicació exacta i correu vinculats a la identitat, i xarxes publicitàries entre els destinataris',
      summary:
        'Surf Forecast dona previsions d’onatge per a més de set mil platges. L’etiqueta de l’App Store és de les més expansives del lot: ubicació exacta, adreça electrònica i identificadors queden vinculats a la identitat i serveixen per a publicitat de tercers, màrqueting, analítica, personalització i «altres finalitats». A canvi, el compte s’esborra des de la mateixa aplicació amb una opció explícita i irreversible.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Regne Unit',
      links: {
        website: 'https://www.surf-forecast.com/',
        privacyPolicy: 'https://www.surf-forecast.com/pages/privacy_policy',
        appStore: appStore('6450721636'),
      },
      accountRequired: f('no', 'official', ['surf-forecast-privacy-policy'], 'Les previsions es consulten sense registre; el compte serveix per desar llocs preferits i per a les subscripcions.'),
      openSource: unknown(),
      dataSummary:
        'Saber a quina platja i a quina hora vol anar algú és informació d’oci, però quan es lliga al correu electrònic i a la ubicació exacta esdevé un perfil de mobilitat amb nom i cognoms.',
      dataCollection: [
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['surf-forecast-app-store', 'surf-forecast-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['surf-forecast-app-store', 'surf-forecast-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['surf-forecast-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['surf-forecast-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['surf-forecast-app-store'], note: 'Declarada com a dada usada per rastrejar-te.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['surf-forecast-app-store'] }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['surf-forecast-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['surf-forecast-privacy-policy'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['surf-forecast-privacy-policy'], note: 'Les tracten Stripe, PayPal, Worldpay, Apple o Google.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['surf-forecast-app-store'], 'L’etiqueta declara la interacció amb el producte i els diagnòstics com a dades usades per rastrejar-te.'),
        advertisingIdentifiers: f('yes', 'official', ['surf-forecast-app-store'], 'L’identificador de dispositiu apareix vinculat a la identitat i associat a publicitat de tercers.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['surf-forecast-privacy-policy'], 'La política enumera xarxes publicitàries, eines d’analítica i de monitoratge de rendiment com a destinataris.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['surf-forecast-app-store', 'surf-forecast-privacy-policy'], 'Publicitat de tercers i màrqueting propi amb dades vinculades a la identitat.'),
        profiling: f('partial', 'official', ['surf-forecast-privacy-policy'], 'Diu que analitza tendències d’ús i l’eficàcia de les campanyes, sense descriure perfils individuals.'),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['surf-forecast-privacy-policy'], 'Xarxes publicitàries, processadors de pagament i proveïdors d’analítica.'),
        intraGroupSharing: unknown('No hem trobat cap descripció del tractament compartit amb Snow-Forecast.'),
        dataBrokerSales: unknown(),
        internationalTransfers: unknown('La política reconeix drets a l’EEE, el Regne Unit, el Canadà, diversos estats dels EUA i la Xina, però no explica amb quines garanties transfereix les dades.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['surf-forecast-privacy-policy'], 'Només el criteri general: mentre calgui per a les finalitats o mentre ho exigeixi la llei.'),
        dataAfterDeletion: f('partial', 'official', ['surf-forecast-privacy-policy'], 'En esborrar el compte se n’eliminen les dades associades, però les còpies de seguretat poden conservar-les temporalment.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['surf-forecast-privacy-policy']),
        selfService: f('yes', 'official', ['surf-forecast-privacy-policy'], 'Hi ha una opció explícita «Delete the account irreversibly».'),
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Entra al compte a l’aplicació o a surf-forecast.com.',
          'Ves a la configuració del compte i tria «Delete the account irreversibly».',
          'Si l’opció no apareix, escriu al correu de privadesa que dona la política.',
        ],
        dataRetained: 'Còpies de seguretat durant un temps limitat.',
        sources: ['surf-forecast-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['surf-forecast-privacy-policy'], 'Reconeix el dret de portabilitat per a l’EEE i el Regne Unit, sense eina d’autoservei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['surf-forecast-privacy-policy'], 'Per correu a l’adreça de privadesa o des del compte.'),
      },
      controls: {
        adPersonalizationOptOut: unknown('La política remet a un avís de galetes separat i no documenta cap control dins de l’aplicació.'),
        telemetryOptOut: unknown(),
        granularControls: unknown(),
        defaultPosture: 'permissive',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('Servei de previsió meteorològica: no hi ha comunicació privada entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hi ha security.txt a surf-forecast.com.'),
      },
      alternatives: [
        { app: 'windfinder', comparability: 'equivalent', rationale: 'Cobreix les mateixes condicions de vent i onatge, el compte és opcional i s’esborra des de la mateixa aplicació.', tradeOffs: 'Menys detall específic d’onatge per a platges de surf.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Cap filtració associada a surf-forecast.com ni a snow-forecast.com a Have I Been Pwned. L’etiqueta de l’App Store és molt més expansiva que la política, que amb prou feines parla de l’aplicació.',
        openQuestions: [
          'Quines xarxes publicitàries reben la ubicació exacta i el correu?',
          'Amb quines garanties transfereix Meteo365 les dades fora de l’EEE?',
        ],
      },
    },

    /* ═══════════════════════════ Windfinder ═══════════════════════════ */
    {
      slug: 'windfinder',
      name: 'Windfinder: Viento & Tiempo',
      company: 'windfinder',
      categories: ['meteorologia'],
      tagline: 'La ubicació no es desa i el compte s’esborra en un toc, però l’identificador de dispositiu serveix per rastrejar-te',
      summary:
        'Windfinder és la referència per a vela, surf i kite. La seva política diu una cosa poc habitual en aquest sector: la ubicació només es determina quan la persona ho demana i no es desa. El compte és opcional, només serveix per sincronitzar llocs preferits i s’elimina des de la mateixa aplicació amb un botó «Delete Account». El contrapès és la publicitat: l’etiqueta declara l’identificador de dispositiu i les dades de publicitat com a dades usades per rastrejar-te.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Alemanya',
      links: {
        website: 'https://www.windfinder.com/',
        privacyPolicy: 'https://www.windfinder.com/contact/privacy_policy',
        appStore: appStore('336829635'),
      },
      accountRequired: f('no', 'official', ['windfinder-account-help'], 'L’ajuda diu explícitament que crear un compte és opcional i que només serveix per sincronitzar els llocs preferits i les preferències.'),
      openSource: unknown(),
      dataSummary:
        'Aquí el rastre no és la ubicació, que segons la política no es desa, sinó l’identificador del dispositiu i les dades publicitàries que alimenten AdSense i la xarxa SnigelWeb.',
      dataCollection: [
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['windfinder-app-store', 'windfinder-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['windfinder-privacy-policy'], note: 'Una vintena llarga de galetes, entre analítiques, de consentiment i publicitàries.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['windfinder-app-store', 'windfinder-privacy-policy'], note: 'Google Analytics 4 amb perfils pseudònims i esborrat als dos mesos.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['windfinder-app-store', 'windfinder-privacy-policy'], note: 'Sentry per als errors i Firebase Crashlytics a l’aplicació.' }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['windfinder-privacy-policy'], note: 'A l’analítica s’escurça abans de desar-la.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['windfinder-privacy-policy', 'windfinder-account-help'], note: 'Només si es crea compte; també s’hi pot entrar amb Google.' }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['windfinder-privacy-policy'] }),
        row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['windfinder-privacy-policy'], note: 'La política diu que només es determina a petició expressa de la persona i que no es desa.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['windfinder-app-store'], 'L’etiqueta declara l’identificador de dispositiu i les dades de publicitat com a dades usades per rastrejar-te.'),
        advertisingIdentifiers: f('yes', 'official', ['windfinder-app-store', 'windfinder-privacy-policy'], 'Publicitat servida per Google AdSense, DoubleClick i SnigelWeb.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['windfinder-privacy-policy'], 'Google Analytics 4, AdSense, DoubleClick, Firebase, Sentry, SnigelWeb i els mapes d’OpenStreetMap i Thunderforest.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['windfinder-privacy-policy'], 'Anuncis basats en interessos amb galetes d’AdSense i DoubleClick, amb consentiment previ.'),
        profiling: f('partial', 'official', ['windfinder-privacy-policy'], 'Google Analytics elabora perfils pseudònims d’ús.'),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['windfinder-privacy-policy'], 'Proveïdors d’analítica, publicitat, errors i mapes.'),
        intraGroupSharing: na('Empresa independent, sense grup.'),
        dataBrokerSales: unknown(),
        internationalTransfers: f('yes', 'official', ['windfinder-privacy-policy'], 'Transferències als Estats Units emparades en el marc transatlàntic per als proveïdors certificats i en clàusules contractuals tipus per a la resta.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['windfinder-privacy-policy'], 'Concreta dos mesos per a l’analítica i set dies de retenció màxima per a SnigelWeb; per a la resta, el criteri general.'),
        dataAfterDeletion: f('yes', 'official', ['windfinder-account-help'], 'L’ajuda diu que en esborrar el compte s’elimina permanentment la informació desada.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['windfinder-account-help']),
        selfService: f('yes', 'official', ['windfinder-account-help'], 'Des de la mateixa aplicació, sense escriure a ningú.'),
        directUrl: 'https://www.windfinder.com/help/usage/windfinder-account',
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Obre l’aplicació i entra a l’apartat del compte.',
          'Prem «Delete Account».',
          'Recorda que les subscripcions Plus o Pro es cancel·len a l’App Store o a Google Play, no aquí.',
        ],
        sources: ['windfinder-account-help'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['windfinder-privacy-policy'], 'Reconeix el dret de portabilitat, però no documenta cap eina d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['windfinder-privacy-policy'], 'Per correu a info@windfinder.com; la política no nomena cap delegat de protecció de dades.', { url: 'mailto:info@windfinder.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['windfinder-privacy-policy'], 'El consentiment es pot revocar en qualsevol moment i hi ha l’enllaç «Manage Cookies» al peu.'),
        telemetryOptOut: f('partial', 'official', ['windfinder-privacy-policy'], 'L’analítica es basa en el consentiment, però no hi ha un interruptor específic documentat dins de l’aplicació.'),
        granularControls: f('partial', 'official', ['windfinder-privacy-policy']),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('Servei de previsió meteorològica: no hi ha comunicació privada entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown('L’ajuda descriu l’accés amb correu o amb Google, sense esmentar cap segon factor propi.'),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hi ha security.txt a windfinder.com.'),
      },
      alternatives: [
        { app: 'windy-com', comparability: 'equivalent', rationale: 'Mapes i previsions de vent equivalents, amb una etiqueta de l’App Store que no declara cap dada per rastrejar.', tradeOffs: 'Menys estacions de mesura reals a la costa.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Cap filtració associada a windfinder.com a Have I Been Pwned. La política és de les més detallades del lot: enumera proveïdors, terminis i galetes una per una.',
        openQuestions: ['Quines dades exactes envia l’aplicació a SnigelWeb i amb quin consentiment?'],
      },
    },

    /* ═══════════════════════════ meteoblue ═══════════════════════════ */
    {
      slug: 'meteoblue',
      name: 'meteoblue tiempo y mapas',
      company: 'meteoblue',
      categories: ['meteorologia'],
      tagline: 'Previsió suïssa amb repetició de sessió de Microsoft Clarity i cap procediment de baixa documentat',
      summary:
        'meteoblue va néixer a la Universitat de Basilea i ven previsions d’alta resolució. A l’App Store declara l’identificador de dispositiu com a dada vinculada a la identitat i usada per rastrejar, destinada a publicitat de tercers. La política, revisada el maig del 2024, reconeix l’ús de Microsoft Clarity amb mapes de calor i repetició de sessió, demana moltes dades opcionals al compte i no descriu cap manera d’eliminar-lo.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Suïssa',
      links: {
        website: 'https://www.meteoblue.com/',
        privacyPolicy: 'https://content.meteoblue.com/en/about-us/legal/privacy',
        privacyCenter: 'https://content.meteoblue.com/en/about-us/legal/ad-providers',
        appStore: appStore('994459137'),
      },
      accountRequired: f('no', 'official', ['meteoblue-privacy-policy'], 'Les previsions es consulten sense compte; el compte serveix per desar llocs, avisos i subscripcions.'),
      openSource: unknown(),
      dataSummary:
        'A la ubicació que necessita qualsevol previsió s’hi suma el registre de com et mous per la interfície: Microsoft Clarity permet reproduir les sessions, i l’identificador del dispositiu queda vinculat a la identitat per a publicitat.',
      dataCollection: [
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['meteoblue-app-store', 'meteoblue-ad-providers'] }),
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['meteoblue-app-store'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['meteoblue-app-store'] }),
        row('identificador-de-compte', 'optional', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['meteoblue-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['meteoblue-app-store', 'meteoblue-privacy-policy'], note: 'Google Analytics i Microsoft Clarity, amb mapes de calor i repetició de sessió.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['meteoblue-app-store'] }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['meteoblue-privacy-policy'] }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['meteoblue-privacy-policy'] }),
        row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['meteoblue-privacy-policy'] }),
        row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['meteoblue-privacy-policy'], note: 'La política l’enumera entre les dades de compte, juntament amb l’edat, l’ocupació i els interessos.' }),
        row('ocupacio-i-carrec', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['meteoblue-privacy-policy'] }),
        row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['meteoblue-privacy-policy'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['meteoblue-privacy-policy'], note: 'Les tracta la passarel·la suïssa Datatrans.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['meteoblue-app-store'], 'L’etiqueta declara l’identificador de dispositiu com a dada usada per rastrejar-te.'),
        advertisingIdentifiers: f('yes', 'official', ['meteoblue-app-store', 'meteoblue-ad-providers'], 'Els anuncis els serveix Google Ad Manager amb desenes de proveïdors associats.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['meteoblue-privacy-policy'], 'Google Analytics i AdSense, Microsoft Clarity i Microsoft Advertising.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['meteoblue-privacy-policy', 'meteoblue-app-store'], 'Google AdSense mostra anuncis segons el perfil i el comportament.'),
        profiling: f('partial', 'official', ['meteoblue-privacy-policy'], 'Perfil publicitari i mètriques de comportament amb repetició de sessió.'),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['meteoblue-privacy-policy', 'meteoblue-ad-providers'], 'Google, Microsoft, Datatrans i la llista de proveïdors publicitaris de Google Ad Manager.'),
        intraGroupSharing: na('Empresa independent, sense grup.'),
        dataBrokerSales: unknown(),
        internationalTransfers: f('partial', 'official', ['meteoblue-privacy-policy'], 'Empresa suïssa que fa servir serveis de Google i Microsoft; exigeix garanties contractuals als tercers fora de la UE, sense concretar-ne el mecanisme.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['meteoblue-privacy-policy'], 'Només el criteri general; reconeix que les còpies de seguretat no s’esborren immediatament.'),
        dataAfterDeletion: unknown('La política no descriu què passa en donar-se de baixa.'),
      },
      accountDeletion: {
        possible: unknown('La política reconeix drets però no documenta cap procediment de supressió del compte.'),
        selfService: unknown(),
        difficulty: 'unknown',
        requiresSupportContact: true,
        obstacles: 'L’única via documentada és el formulari de contacte general.',
        sources: ['meteoblue-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política no esmenta la portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['meteoblue-privacy-policy'], 'Reconeix l’accés i la rectificació «en la mesura tècnicament possible i raonable» i remet al formulari de contacte; el delegat de protecció de dades només es facilita a petició.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['meteoblue-ad-providers'], 'No hi ha cap renúncia conjunta: la pàgina de proveïdors remet a la política de cadascun.'),
        telemetryOptOut: f('partial', 'official', ['meteoblue-privacy-policy'], 'Es poden refusar galetes, però la política avisa que això limita molt les funcions.'),
        granularControls: f('partial', 'official', ['meteoblue-privacy-policy'], 'Hi ha preferències de privadesa dins del compte.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('Avisar que refusar galetes provoca «limitacions significatives» és un avís de frontera, però no l’hem pogut comprovar a la interfície.'),
      },
      security: {
        e2ee: na('Servei de previsió meteorològica: no hi ha comunicació privada entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hem pogut consultar cap security.txt a meteoblue.com.'),
      },
      alternatives: [
        { app: 'aemet', comparability: 'partial', rationale: 'Per a previsions a Espanya, el servei públic estatal cobreix la mateixa necessitat sense publicitat ni analítica de comportament.', tradeOffs: 'No té models d’alta resolució per a qualsevol coordenada del món.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Cap filtració associada a meteoblue.com a Have I Been Pwned. La política té data de revisió (15 de maig del 2024) però barreja el web, l’aplicació i els serveis professionals sense distingir-los.',
        openQuestions: [
          'Com s’elimina un compte de meteoblue i què se’n conserva?',
          'La repetició de sessió de Microsoft Clarity afecta també l’aplicació mòbil o només el web?',
        ],
      },
    },

    /* ═══════════════════════════ Nautide ═══════════════════════════ */
    {
      slug: 'nautide',
      name: 'Nautide: Mareas, Viento, Olas+',
      company: 'igoox',
      categories: ['meteorologia'],
      tagline: 'L’enllaç de «política de privadesa» porta a unes condicions d’ús que no parlen de dades personals',
      summary:
        'Nautide, l’aplicació oficial de Tabla de Mareas, dona marees, vent, onatge i activitat solunar de més de 25.000 estacions. L’adreça que l’App Store presenta com a política de privadesa conté un document de condicions d’ús del 2018 que no esmenta ni dades personals, ni el RGPD, ni cap dret. Mentrestant, l’etiqueta de l’App Store declara que l’identificador de dispositiu i les dades de publicitat es fan servir per rastrejar-te.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://nautide.com/',
        terms: 'https://nautide.com/privacy',
        appStore: appStore('1413108902'),
      },
      accountRequired: f('no', 'official', ['nautide-app-store', 'nautide-terms'], 'La fitxa descriu una descàrrega gratuïta amb subscripció opcional i l’etiqueta no declara cap dada vinculada a la identitat.'),
      openSource: unknown(),
      dataSummary:
        'Una taula de marees sembla inofensiva, però l’etiqueta diu que l’identificador del dispositiu i les dades publicitàries surten cap a tercers per rastrejar; sense política de privadesa, no hi ha manera de saber cap a qui.',
      dataCollection: [
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['nautide-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['nautide-app-store'], note: 'L’etiqueta ho declara com a «datos de publicidad» dins dels identificadors usats per rastrejar.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['nautide-app-store'] }),
        row('ubicacio-precisa', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', sources: ['nautide-app-store'], note: 'L’aplicació mostra l’estació més propera, però l’etiqueta no declara cap dada d’ubicació i no hi ha política que ho expliqui.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['nautide-app-store'], 'L’etiqueta declara l’identificador de dispositiu i les dades de publicitat com a dades usades per rastrejar-te.'),
        advertisingIdentifiers: f('yes', 'official', ['nautide-app-store']),
        thirdPartyTrackersPresent: f('partial', 'official', ['nautide-app-store'], 'L’etiqueta diu que hi ha publicitat de tercers, però no hi ha cap document que els identifiqui.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['nautide-app-store'], 'Publicitat de tercers com a única finalitat declarada.'),
        profiling: unknown(),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['nautide-app-store'], 'Publicitat de tercers; les condicions d’ús no descriuen cap destinatari.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: unknown(),
        internationalTransfers: unknown('No hi ha cap document que ho expliqui.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: unknown('No hi ha política de privadesa.'),
        dataAfterDeletion: unknown(),
      },
      accountDeletion: {
        possible: unknown('No hi ha compte documentat ni cap document que expliqui com esborrar les dades.'),
        selfService: unknown(),
        difficulty: 'unknown',
        obstacles: 'L’única via de contacte és el formulari de suport del web.',
        sources: ['nautide-terms'],
      },
      userRights: {
        dataExport: unknown(),
        exportFormatQuality: 'unknown',
        rightsExercise: unknown('Les condicions d’ús no esmenten cap dret de protecció de dades ni cap responsable de contacte.'),
      },
      controls: {
        adPersonalizationOptOut: unknown('Només la limitació del seguiment que ofereix el sistema operatiu.'),
        telemetryOptOut: unknown(),
        granularControls: unknown(),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('Servei d’informació meteorològica i marítima: no hi ha comunicació privada entre persones.'),
        transportEncryption: f('partial', 'official', ['nautide-terms'], 'Les condicions diuen que l’aplicació es connecta per SSL al servidor d’Igoox; no hi ha cap altra descripció tècnica.'),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hi ha security.txt a nautide.com.'),
      },
      alternatives: [
        { app: 'windfinder', comparability: 'partial', rationale: 'Cobreix vent, onatge i marees amb una política de privadesa detallada i un esborrat de compte d’autoservei.', tradeOffs: 'Les taules de marees i l’activitat solunar són menys completes.' },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Cap filtració associada a nautide.com a Have I Been Pwned. Hem comprovat que https://nautide.com/privacy i https://nautide.com/usage-terms serveixen el mateix document de condicions d’ús, sense cap apartat de privadesa: gairebé tota la fitxa depèn de l’etiqueta de l’App Store.',
        openQuestions: [
          'Existeix en algun lloc una política de privadesa de Nautide?',
          'Quina xarxa publicitària fa servir i quines dades li envia?',
          'L’aplicació demana la ubicació del dispositiu o només la localitat triada?',
        ],
      },
    },

    /* ═══════════════════════════ miDGT ═══════════════════════════ */
    {
      slug: 'midgt',
      name: 'miDGT',
      company: 'direccion-general-de-trafico',
      categories: ['administracio-publica', 'utilitats'],
      tagline: 'Declara a l’App Store que no recull cap dada mentre mostra el permís, els punts i les sancions',
      summary:
        'miDGT porta al mòbil el permís de conducció digital, amb validesa per circular per Espanya, i la documentació dels vehicles. També mostra els punts, la caducitat del permís, la ITV i les sancions, i permet pagar-les. A l’App Store hi consta «No se recopilan datos», una declaració difícil de conciliar amb un servei que consulta els registres de conductors i de vehicles, i l’enllaç a la política de privadesa que hi publica la DGT ja no existeix.',
      platforms: ['ios', 'android'],
      businessModel: 'unknown',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.dgt.es/',
        privacyPolicy: 'https://www.dgt.es/contenido/proteccion-de-datos/',
        appStore: appStore('1463054197'),
      },
      accountRequired: f('yes', 'official', ['midgt-dgt-noticia', 'midgt-app-store'], 'Cal identificar-se amb Cl@ve, amb certificat digital o amb un codi d’un sol ús enviat per SMS al telèfon que consta a la DGT.'),
      openSource: unknown('No hem trobat el codi publicat.'),
      dataSummary:
        'El permís, els punts, els vehicles i les sancions són l’historial administratiu de la vida al volant. Aquí no van a parar a cap anunciant, però el rastre queda als registres de la DGT i l’aplicació no explica què en desa al telèfon.',
      dataCollection: [
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['midgt-dgt-noticia'], note: 'Permís de conducció digital amb les seves dades i la data de caducitat.' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['midgt-dgt-noticia'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau', 'prestacio-del-servei'], sources: ['midgt-dgt-noticia'], note: 'Per a l’accés amb codi d’un sol ús per SMS.' }),
        row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['midgt-dgt-noticia'], note: 'Pagament de sancions des de l’aplicació. No hi ha cap tipus de dada específic per als vehicles, la ITV o els punts del permís: també es tracten aquí.' }),
        row('informacio-del-dispositiu', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', sources: ['midgt-app-store'], note: 'L’etiqueta declara que no es recull cap dada, i no hi ha cap política de l’aplicació que ho matisi.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['midgt-app-store'], 'L’etiqueta declara «No se recopilan datos».'),
        advertisingIdentifiers: f('no', 'official', ['midgt-app-store']),
        thirdPartyTrackersPresent: unknown('L’etiqueta no declara cap recollida, però no hi ha cap política de l’aplicació que confirmi si hi ha serveis de tercers com les notificacions push.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['midgt-app-store'], 'Servei públic sense publicitat.'),
        profiling: unknown(),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: unknown('El registre d’activitats de tractament de la DGT preveu cessions reglades, però no hi ha cap fitxa pública específica de l’aplicació.'),
        intraGroupSharing: na('Organisme públic sense grup empresarial.'),
        dataBrokerSales: f('no', 'official', ['midgt-app-store'], 'L’etiqueta no declara cap recollida ni cap ús comercial.'),
        internationalTransfers: unknown(),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('Les administracions públiques espanyoles no publiquen informes de transparència d’aquest tipus.'),
      },
      retention: {
        definedPeriods: unknown('La informació general de la DGT remet al registre d’activitats de tractament, sense terminis per a l’aplicació.'),
        dataAfterDeletion: unknown(),
      },
      accountDeletion: {
        possible: na('L’aplicació no crea cap compte propi: s’hi entra amb Cl@ve, certificat o SMS, i les dades del registre de conductors i de vehicles es tracten per obligació legal.'),
        selfService: na('No hi ha compte propi.'),
        difficulty: 'unknown',
        obstacles: 'Per deixar de fer-la servir n’hi ha prou de desinstal·lar-la; les dades dels registres de la DGT no es poden suprimir perquè el tractament és obligatori.',
        sources: ['midgt-dgt-noticia', 'midgt-dgt-proteccion-datos'],
      },
      userRights: {
        dataExport: unknown(),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['midgt-dgt-proteccion-datos'], 'Formulari oficial que es presenta presencialment, a la seu electrònica o per correu signat, i delegat de protecció de dades a protecciondedatos@dgt.es.', { url: 'mailto:protecciondedatos@dgt.es' }),
      },
      controls: {
        adPersonalizationOptOut: na('L’aplicació no mostra publicitat.'),
        telemetryOptOut: unknown(),
        granularControls: unknown(),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('No és un servei de comunicacions entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: f('yes', 'official', ['midgt-dgt-noticia'], 'L’accés exigeix Cl@ve, certificat digital o un codi d’un sol ús per SMS al telèfon registrat.', { methods: ['sms'] }),
        independentAudits: unknown('No hem trobat cap declaració de conformitat amb l’Esquema Nacional de Seguretat referida a l’aplicació.'),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hi ha security.txt a dgt.es.'),
      },
      alternatives: [
        { app: 'clave', comparability: 'complementary', rationale: 'És el sistema d’identificació amb què s’entra a miDGT i, de fet, té una política de privadesa pròpia que miDGT no té.', tradeOffs: 'No mostra el permís de conducció ni la documentació dels vehicles.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Hem comprovat que l’enllaç de política de privadesa que la DGT declara a l’App Store (www.dgt.es/es/proteccion-de-datos.shtml) respon amb un error 404. La informació general de protecció de dades de la DGT no esmenta l’aplicació. Cap filtració associada a dgt.es a Have I Been Pwned.',
        openQuestions: [
          'Per què l’etiqueta diu «No se recopilan datos» si l’aplicació consulta i mostra dades personals?',
          'Quina és la fitxa del registre d’activitats de tractament que empara miDGT?',
          'Quines dades queden desades al telèfon quan es genera el permís digital?',
        ],
      },
    },

    /* ═══════════════════════════ MiDNI ═══════════════════════════ */
    {
      slug: 'midni',
      name: 'MiDNI',
      company: 'direccion-general-de-la-policia',
      categories: ['administracio-publica', 'autenticacio-i-seguretat'],
      tagline: 'El DNI al mòbil, amb tractament en servidors propis de la policia i només diagnòstics a l’etiqueta',
      summary:
        'MiDNI permet portar el document nacional d’identitat al mòbil amb la mateixa validesa que la targeta física i mostrar només els atributs que calgui en cada cas. El registre previ exigeix un DNI electrònic amb certificats vigents i un lector, o bé anar a un punt d’actualització; el telèfon es verifica amb un SMS. La Direcció General de la Policia diu que tot el tractament es fa en servidors propis, sense tercers, amb mesures de nivell alt de l’Esquema Nacional de Seguretat.',
      platforms: ['ios', 'android'],
      businessModel: 'unknown',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.midni.gob.es/',
        privacyPolicy: 'https://www.dnielectronico.es/PortalDNIe/PRF1_Cons02.action?pag=REF_2151',
        appStore: appStore('6477598076'),
      },
      accountRequired: f('yes', 'official', ['midni-dnie-info'], 'Cal registrar-se prèviament amb el DNI electrònic i un lector, o presencialment en un punt d’actualització, i verificar el telèfon amb un SMS.'),
      openSource: unknown('No hem trobat el codi publicat.'),
      dataSummary:
        'És la identitat legal sencera dins del telèfon. El risc no és la publicitat sinó la usurpació: qui controli l’aplicació pot acreditar-se com una altra persona davant de tercers.',
      dataCollection: [
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['midni-dnie-info'], note: 'Les dades provenen del registre del DNI i es consulten als servidors de la Direcció General de la Policia.' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['midni-dnie-info'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau', 'prestacio-del-servei'], sources: ['midni-dnie-info'], note: 'Es verifica amb un SMS amb un codi de validesa temporal limitada.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['midni-app-store'], note: 'Errors, rendiment i «otros datos de diagnóstico», declarats per a «otros fines» sense concretar.' }),
        row('galetes-i-identificadors-web', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['midni-dnie-info'], note: 'La pàgina oficial diu que les galetes són de vigència limitada i que no recullen dades personals, ni geolocalització, ni fan seguiment.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['midni-app-store'], 'L’etiqueta no declara cap dada usada per rastrejar-te.'),
        advertisingIdentifiers: f('no', 'official', ['midni-app-store']),
        thirdPartyTrackersPresent: f('no', 'official', ['midni-dnie-info'], 'La pàgina oficial afirma que tots els tractaments s’executen en servidors propis, sense tercers externs.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['midni-app-store', 'midni-dnie-info'], 'Servei públic sense publicitat.'),
        profiling: unknown(),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('no', 'official', ['midni-dnie-info'], 'No es cedeixen dades a tercers llevat d’obligació legal.'),
        intraGroupSharing: na('Organisme públic sense grup empresarial.'),
        dataBrokerSales: f('no', 'official', ['midni-dnie-info']),
        internationalTransfers: unknown('La informació oficial no ho esmenta; diu que el tractament es fa en servidors propis.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència de la Direcció General de la Policia sobre aquest servei.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['midni-dnie-info'], 'Diu que les dades es conserven mentre es fa servir l’aplicació, conforme a la normativa de protecció de dades, sense terminis concrets.'),
        dataAfterDeletion: unknown('No consta què es conserva si es deixa de fer servir l’aplicació.'),
      },
      accountDeletion: {
        possible: unknown('La informació oficial no descriu cap procediment de baixa del registre de MiDNI.'),
        selfService: unknown(),
        difficulty: 'unknown',
        obstacles: 'L’ús és voluntari i no es pot exigir, però no hi ha cap camí documentat per revocar el registre més enllà de desinstal·lar l’aplicació.',
        sources: ['midni-dnie-info'],
      },
      userRights: {
        dataExport: unknown(),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['midni-dnie-info'], 'Accés, rectificació, limitació, supressió i oposició davant del delegat de protecció de dades de la Direcció General de la Policia.'),
      },
      controls: {
        adPersonalizationOptOut: na('L’aplicació no mostra publicitat.'),
        telemetryOptOut: unknown('L’etiqueta declara diagnòstics, però no hem trobat cap manera de desactivar-los.'),
        granularControls: f('partial', 'official', ['midni-dnie-info'], 'Es pot decidir quins atributs d’identitat es mostren a cada tercer.'),
        defaultPosture: 'protective',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('No és un servei de comunicacions entre persones.'),
        transportEncryption: unknown('La pàgina oficial parla de confidencialitat i integritat, sense detallar el xifratge.'),
        atRestEncryption: unknown(),
        mfa: f('yes', 'official', ['midni-dnie-info'], 'El registre exigeix el DNI electrònic o la identificació presencial, i l’activació verifica el telèfon amb un SMS.', { methods: ['sms'] }),
        independentAudits: f('partial', 'official', ['midni-dnie-info'], 'Declara mesures de nivell alt de l’Esquema Nacional de Seguretat; no és una auditoria independent publicada.'),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hi ha security.txt a policia.es ni a dnielectronico.es.'),
      },
      alternatives: [
        { app: 'clave', comparability: 'complementary', rationale: 'Cl@ve identifica davant de les administracions amb una política de privadesa pròpia i publicada; MiDNI, a més, acredita atributs del DNI davant de tercers privats.', tradeOffs: 'Cl@ve no substitueix el document d’identitat.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'El portal midni.gob.es és una aplicació web que no serveix text sense JavaScript, de manera que la font principal és la fitxa oficial del portal del DNI electrònic. Cap filtració associada a policia.es o dnielectronico.es a Have I Been Pwned.',
        openQuestions: [
          'Com es dona de baixa el registre de MiDNI i què se’n conserva?',
          'Quines són les «otras finalidades» a què destina les dades de diagnòstic?',
        ],
      },
    },

    /* ═══════════════════════════ Mi DIGI ═══════════════════════════ */
    {
      slug: 'mi-digi',
      name: 'Mi DIGI',
      company: 'digi-spain-telecom',
      categories: ['telecomunicacions'],
      tagline: 'L’única aplicació del lot que declara les dades d’error com a dades per rastrejar-te',
      summary:
        'Mi DIGI és l’àrea de client de l’operador: factures, consum, tarifes, fibra i televisió. La política de DIGI Spain Telecom és sòlida —bases jurídiques, destinataris i bloqueig de les dades en acabar la relació—, però l’etiqueta de l’App Store té una singularitat: declara les dades de diagnòstic d’errors com a dades usades per rastrejar-te, i la interacció amb el producte com a dada vinculada a la identitat.',
      platforms: ['ios', 'android'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.digimobil.es/',
        privacyPolicy: 'https://www.digimobil.es/legal/politica-de-privacidad',
        appStore: appStore('1520048638'),
      },
      accountRequired: f('yes', 'official', ['mi-digi-privacy-policy', 'mi-digi-app-store'], 'L’aplicació és l’àrea privada de clients de contracte o prepagament.'),
      openSource: unknown(),
      dataSummary:
        'L’àrea de client d’un operador conté el document d’identitat, les dades de pagament i el consum. La política hi afegeix una capa menys visible: DIGI pot calcular o estimar informació a partir de les dades disponibles i de les interaccions.',
      dataCollection: [
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['mi-digi-app-store', 'mi-digi-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['mi-digi-app-store'], note: 'L’etiqueta declara les dades d’error com a dades usades per rastrejar-te.' }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['mi-digi-privacy-policy'], note: 'Necessari per contractar.' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mi-digi-privacy-policy'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mi-digi-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['mi-digi-privacy-policy'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mi-digi-privacy-policy'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['mi-digi-privacy-policy'], note: 'Es comuniquen a entitats financeres i, en cas d’impagament, a sistemes d’informació creditícia.' }),
        row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['mi-digi-privacy-policy'], note: 'Dades de consum i de facturació dels serveis de comunicacions, regides també per les condicions generals del servei.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['mi-digi-privacy-policy'], note: 'Amb data i hora d’accés i registres tècnics.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['mi-digi-privacy-policy'] }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['elaboracio-de-perfils', 'personalitzacio-de-continguts'], sources: ['mi-digi-privacy-policy'], note: 'La política diu que DIGI pot calcular, generar o estimar informació analitzant i combinant les dades disponibles.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['mi-digi-app-store'], 'L’etiqueta declara les dades d’error com a dades que es poden fer servir per rastrejar-te en apps i webs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['mi-digi-app-store'], 'L’etiqueta no declara cap identificador publicitari.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['mi-digi-privacy-policy'], 'La política diu que el web i les aplicacions poden fer servir galetes i tecnologies similars, i remet a la política de galetes.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['mi-digi-privacy-policy'], 'Les comunicacions comercials i les recomanacions personalitzades es basen en el consentiment o en l’interès legítim, amb dret d’oposició; l’etiqueta no declara publicitat de tercers.'),
        profiling: f('yes', 'official', ['mi-digi-privacy-policy'], 'Reconeix que pot calcular, generar o estimar informació a partir de l’anàlisi i la combinació de les dades disponibles, tant de clients com de no clients.'),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['mi-digi-privacy-policy'], 'Proveïdors tecnològics i d’atenció, altres operadors, entitats financeres, sistemes d’informació creditícia i administracions públiques.'),
        intraGroupSharing: f('yes', 'official', ['mi-digi-privacy-policy'], 'Altres entitats del grup DIGI poden accedir a les dades com a encarregades del tractament.'),
        dataBrokerSales: unknown('La política no esmenta cap venda de dades.'),
        internationalTransfers: f('partial', 'official', ['mi-digi-privacy-policy'], 'Amb caràcter general no en preveu fora de l’EEE, però admet que alguns proveïdors poden estar en tercers països amb les garanties adequades.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['mi-digi-privacy-policy'], 'Criteris per finalitat i terminis addicionals per a frau, seguretat i reclamacions, però sense xifres concretes.'),
        dataAfterDeletion: f('partial', 'official', ['mi-digi-privacy-policy'], 'En acabar la relació, les dades queden bloquejades i a disposició de les autoritats durant els terminis legals.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['mi-digi-privacy-policy'], 'Es reconeix el dret de supressió, però les dades de la relació contractual es bloquegen i es conserven pels terminis legals; la política no descriu cap manera d’esborrar el compte des de l’aplicació.'),
        selfService: unknown('No hem trobat cap opció de baixa del compte dins de l’aplicació.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        obstacles: 'El compte va lligat al contracte: mentre hi ha servei contractat, esborrar-lo no és possible.',
        dataRetained: 'Dades contractuals i de facturació bloquejades durant els terminis de prescripció.',
        sources: ['mi-digi-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['mi-digi-privacy-policy'], 'Reconeix la portabilitat de les dades sense descriure cap eina d’autoservei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['mi-digi-privacy-policy'], 'Davant del delegat de protecció de dades, a pdatos@digimobil.es.', { url: 'mailto:pdatos@digimobil.es' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['mi-digi-privacy-policy'], 'Dret d’oposició a les comunicacions comercials i retirada del consentiment en qualsevol moment.'),
        telemetryOptOut: unknown('La política remet a la política de galetes; no hem trobat cap control equivalent per a l’aplicació.'),
        granularControls: f('partial', 'official', ['mi-digi-privacy-policy']),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('Àrea de client: no hi ha comunicació privada entre persones dins de l’aplicació.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown('La política no descriu com s’autentica l’accés a l’àrea privada.'),
        independentAudits: unknown('La política esmenta serveis d’auditoria entre els proveïdors, però no publica cap certificació.'),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hi ha security.txt a digimobil.es.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Cap filtració associada a digimobil.es a Have I Been Pwned, i el cercador de resolucions de l’AEPD no s’ha pogut consultar des d’aquí. La política és recent i està ben estructurada, però descriu el web i les aplicacions en bloc: res no és específic de Mi DIGI.',
        openQuestions: [
          'Per què l’etiqueta declara les dades d’error com a dades per rastrejar, i cap a quins tercers van?',
          'Quin proveïdor de diagnòstics fa servir l’aplicació?',
          'Es pot tancar el compte de Mi DIGI sense donar de baixa el servei?',
        ],
      },
    },
  ],

  incidents: [],

  storeIds: {
    meteored: 'ios.aplicacion.tiempo-com',
    'safety-tips': 'jp.co.rcsc.safetyTips.ios',
    'surf-forecast': 'com.snowfore.surfforecast.com',
    windfinder: 'net.windfinder.windfinderapp',
    meteoblue: 'com.meteoblue.meteoblue-weather',
    nautide: 'com.nautide.app',
    midgt: 'com.dgt.midgt',
    midni: 'es.gob.interior.policia.midni',
    'mi-digi': 'es.digimobil.MiCuentaDIGI',
  },
}
