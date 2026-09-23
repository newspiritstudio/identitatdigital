import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/**
 * Lot 28 de la segona onada: deu aplicacions de la categoria «Navegació» de
 * l’App Store espanyol. Tres són de l’Administració (SMOU de Barcelona,
 * Île-de-France Mobilités i GVA SUMA-T), dues són de mobilitat compartida i
 * assegurances (WAIIS i MutuaMás), i la resta són avisadors, planificadors de
 * transport públic i aplicacions petites de mapes.
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'iteration-mobile',
      name: 'Iteration Mobile',
      legalName: 'Iteration Mobile, S.L.',
      description:
        'Empresa espanyola de Getafe que desenvolupa Radarbot, un avisador de radars i navegador amb més d’un centenar de socis publicitaris i un model premium per subscripció.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.radarbot.com/',
      productDomains: ['radarbot.com', 'iteration-mobile.com'],
      privacyContact: 'dpd@iteration-mobile.com',
    },
    {
      slug: 'via-transportation',
      name: 'Via Transportation',
      legalName: 'Via Transportation, Inc.',
      description:
        'Empresa nord-americana de programari de transport públic sota demanda. Va comprar Citymapper el 2023 i en figura com a matriu a la política de privadesa.',
      headquartersCountry: 'US',
      ownership: 'public',
      foundedYear: 2012,
      primaryRevenueModel: 'cloud',
      website: 'https://ridewithvia.com/',
      productDomains: ['ridewithvia.com', 'citymapper.com'],
    },
    {
      slug: 'citymapper',
      name: 'Citymapper',
      legalName: 'Citymapper Ltd.',
      parent: 'via-transportation',
      description:
        'Empresa britànica del planificador de transport públic Citymapper, registrada a Anglaterra amb el número 07370388. Ha designat Via Mobility DE GmbH, a Berlín, com a representant a la Unió Europea.',
      headquartersCountry: 'GB',
      euEstablishment: 'DE',
      ownership: 'subsidiary',
      foundedYear: 2011,
      primaryRevenueModel: 'mixed',
      website: 'https://citymapper.com/',
      productDomains: ['citymapper.com'],
      privacyContact: 'support@citymapper.com',
    },
    {
      slug: 'mutua-madrilena',
      name: 'Mutua Madrileña',
      legalName: 'Mutua Madrileña Automovilista, Sociedad de Seguros a Prima Fija',
      description:
        'Mútua asseguradora espanyola amb seu a Madrid. L’aplicació MutuaMás hi afegeix una capa de serveis de mobilitat: parquímetre, aparcaments, taxi, telepeatge i ITV.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://www.mutua.es/',
      productDomains: ['mutua.es', 'mutuamadrilena.es'],
    },
    {
      slug: 'barcelona-serveis-municipals',
      name: 'Barcelona de Serveis Municipals',
      legalName: 'Barcelona de Serveis Municipals, S.A.',
      description:
        'Empresa pública participada íntegrament per l’Ajuntament de Barcelona que gestiona el Bicing, l’estacionament regulat, els aparcaments i la grua municipal, i que és titular de l’aplicació SMOU.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Autoritat Catalana de Protecció de Dades',
      ownership: 'state',
      primaryRevenueModel: 'commerce',
      website: 'https://bsmsa.cat/',
      productDomains: ['bsmsa.cat', 'smou.cat', 'bicing.barcelona'],
      privacyContact: 'protecciodades@bsmsa.cat',
    },
    {
      slug: 'ile-de-france-mobilites',
      name: 'Île-de-France Mobilités',
      legalName: 'Île-de-France Mobilités',
      description:
        'Autoritat organitzadora del transport públic de la regió de París. És un establiment públic administratiu i edita l’aplicació oficial de la xarxa, hereva de Vianavigo.',
      headquartersCountry: 'FR',
      euEstablishment: 'FR',
      leadSupervisoryAuthority: 'Commission nationale de l’informatique et des libertés',
      ownership: 'state',
      primaryRevenueModel: 'unknown',
      website: 'https://www.iledefrance-mobilites.fr/',
      productDomains: ['iledefrance-mobilites.fr', 'vianavigo.com'],
    },
    {
      slug: 'waiis-solutions-iberia',
      name: 'WAIIS',
      legalName: 'WAIIS Solutions Iberia, S.L.',
      description:
        'Empresa de Barcelona que gestiona una aplicació de cotxe compartit per als desplaçaments diaris a la feina i que tramita per als seus usuaris els Certificats d’Estalvi Energètic.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      foundedYear: 2022,
      primaryRevenueModel: 'commerce',
      website: 'https://waiis.com/',
      productDomains: ['waiis.com', 'waiis.eco'],
      privacyContact: 'rgpd@waiis.com',
    },
    {
      slug: 'generalitat-valenciana',
      name: 'Generalitat Valenciana',
      legalName: 'Generalitat Valenciana',
      description:
        'Administració autonòmica de la Comunitat Valenciana. Publica l’aplicació GVA SUMA-T amb la informació de l’Autoritat de Transport Metropolità de València.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'state',
      primaryRevenueModel: 'unknown',
      website: 'https://www.gva.es/',
      productDomains: ['gva.es'],
    },
    {
      slug: 'alphalogy-studio',
      name: 'Alphalogy Studio',
      description:
        'Estudi vietnamita d’aplicacions mòbils, amb seu declarada a Ho Chi Minh. Publica a l’App Store a nom de la persona física Van Hoa Nguyen.',
      headquartersCountry: 'VN',
      ownership: 'private',
      primaryRevenueModel: 'advertising',
      website: 'https://www.alphalogy.net/',
      productDomains: ['alphalogy.net'],
      privacyContact: 'alphalogy.tk@gmail.com',
    },
    {
      slug: 'retry-apps',
      name: 'Retry Apps',
      legalName: 'Retry Apps Yazılım Limited Şirketi',
      description:
        'Estudi turc d’aplicacions mòbils amb seu a Istanbul. Les seves fitxes legals estan signades a títol personal pel fundador, Emre Cem Çelik.',
      headquartersCountry: 'TR',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://retryapps.co/',
      productDomains: ['retryapps.co'],
      privacyContact: 'hello@retryapps.co',
    },
    {
      slug: 'transit-now',
      name: 'Transit Now',
      legalName: 'Transit Now Ltd',
      description:
        'Empresa britànica de l’aplicació de transport públic Momego, abans anomenada Whiz. Les condicions d’ús alternen el seu nom amb el de BusExpert Ltd i se sotmeten a la llei del Regne Unit.',
      headquartersCountry: 'GB',
      ownership: 'private',
      primaryRevenueModel: 'advertising',
      website: 'https://travelwhiz.app/',
      productDomains: ['travelwhiz.app'],
    },
  ],

  sources: [
    s('radarbot-privacy-policy', 'Radarbot Privacy Policy', 'https://www.radarbot.com/politica-de-privacidad/', 'Iteration Mobile', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2026-02-01',
      summary:
        'Política vigent de Radarbot. Enumera un a un els proveïdors (AWS, Firebase, AdMob, Meta, AppsFlyer, RevenueCat, Braze, Intercom, Didomi) i descriu el Trust Score, les dades de mobilitat i el botó per eliminar el compte.',
    }),
    s('radarbot-app-store', 'Radarbot: Avisador de radares a l’App Store', 'https://apps.apple.com/es/app/id1099797635', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa declarada pel desenvolupador: identificadors per rastrejar, correu i nom vinculats, i ubicació precisa no vinculada.',
    }),
    s('citymapper-privacy-policy', 'Citymapper Privacy Policy', 'https://citymapper.com/privacy-policy', 'Citymapper', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2025-08-14',
      summary:
        'Política de Citymapper Ltd. Identifica Via Transportation com a matriu i Via Mobility DE GmbH com a representant a la UE, admet inferències sobre interessos i l’ús de dades agregades per entrenar models d’IA.',
    }),
    s('citymapper-app-store', 'Citymapper a l’App Store', 'https://apps.apple.com/es/app/id469463298', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: ubicació precisa, adreça postal, historial de cerca i identificador de compte vinculats a la identitat, i dades d’ús utilitzades per rastrejar.',
    }),
    s('mutuamas-privacy-policy', 'Política de privacidad de la app de Mutua Madrileña', 'https://www.mutua.es/recursos/webmovil/politica_de_privacidadApp.html', 'Mutua Madrileña', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de l’aplicació. Identifica la mútua com a responsable, admet la geolocalització i els estudis de màrqueting, esmenta la cessió a les empreses del Grup MM i fixa un límit de dos anys per al consentiment.',
    }),
    s('mutuamas-app-store', 'MutuaMás a l’App Store', 'https://apps.apple.com/es/app/id464032312', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: cap dada vinculada a la identitat, però identificadors utilitzats per rastrejar en apps i webs d’altres empreses.',
    }),
    s('smou-app-store', 'SMOU - Servicios de Movilidad a l’App Store', 'https://apps.apple.com/es/app/id1439898721', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de SMOU: ubicació precisa, matrícules, historial de compres i fotos vinculats a la identitat, i el correu declarat per a «publicitat o màrqueting del desenvolupador».',
    }),
    s('smou-terms', 'Condicions d’ús de smou', 'https://www.smou.cat/condicions-dus', 'Barcelona de Serveis Municipals', 'terms', 'primary', {
      language: 'ca',
      summary:
        'Condicions de l’aplicació. Detallen el registre amb verificació de correu, la targeta única per compte, la matrícula del vehicle, els comptes d’empresa i el tractament anònim de la localització.',
    }),
    s('bsm-privacy-policy', 'Avís legal i Privacitat de Barcelona de Serveis Municipals', 'https://bsmsa.cat/avis-legal-i-privacitat', 'Barcelona de Serveis Municipals', 'privacy-policy', 'primary', {
      language: 'ca',
      summary:
        'Política de privadesa de B:SM. Declara que no preveu transferències internacionals ni perfilats, remet el detall de finalitats al registre d’activitats de tractament i dona el contacte del delegat de protecció de dades.',
    }),
    s('ile-de-france-mobilites-app-store', 'Île-de-France Mobilités a l’App Store', 'https://apps.apple.com/es/app/id484527651', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació de transport de la regió de París: cap dada declarada per rastrejar i la ubicació precisa declarada com a no vinculada a la identitat.',
    }),
    s('waiis-privacy-policy', 'Política de privacidad de Waiis', 'https://waiis.com/politica-de-privacidad/', 'WAIIS Solutions Iberia', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-05-12',
      summary:
        'Política de WAIIS. Explica el seguiment de la ubicació durant el trajecte com a requisit legal dels Certificats d’Estalvi Energètic, llista els encarregats un a un i fixa terminis concrets de conservació.',
    }),
    s('waiis-app-store', 'WAIIS a l’App Store', 'https://apps.apple.com/es/app/id1636462490', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: contactes, fotos i identificadors vinculats a la identitat, i dades d’ús declarades per rastrejar.',
    }),
    s('gva-suma-t-app-store', 'GVA SUMA-T a l’App Store', 'https://apps.apple.com/es/app/id6670390270', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació de la Generalitat Valenciana: només declara la ubicació precisa, no vinculada a la identitat, i cap dada de rastreig.',
    }),
    s('compartir-ubicacion-gps-privacy-policy', 'Alphalogy Studio Privacy Policy', 'https://www.alphalogy.net/privacy', 'Alphalogy Studio', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Política genèrica d’estudi d’aplicacions, escrita en primera persona del singular. No esmenta el RGPD, no enumera drets ni terminis i només cita Google Play Services i Firebase Analytics.',
    }),
    s('compartir-ubicacion-gps-app-store', 'Compartir Ubicacion GPS a l’App Store', 'https://apps.apple.com/es/app/id6496686696', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: ubicació precisa per al funcionament, dades d’ús i de publicitat per a «publicitat de tercers», i dades d’ús declarades per rastrejar.',
    }),
    s('game-maps-irl-privacy-policy', 'Privacy Policy — Game Maps IRL', 'https://retryapps.co/game-maps-irl/privacy-policy', 'Retry Apps', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2025-03-11',
      summary:
        'Política de Game Maps IRL signada per Emre Cem Çelik. Llista Firebase, Expo, Mapbox, Mixpanel i RevenueCat, fixa 24 mesos per a les dades recollides automàticament i remet a desinstal·lar l’app per deixar de ser rastrejat.',
    }),
    s('game-maps-irl-app-store', 'Game Maps IRL a l’App Store', 'https://apps.apple.com/es/app/id6742728012', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: identificadors declarats per rastrejar i ubicació precisa, adreça postal, historial de cerca i compres vinculats a la identitat.',
    }),
    s('momego-privacy-policy', 'Momego Privacy Policy', 'https://travelwhiz.app/privacy.html', 'Transit Now', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2026-09-22',
      summary:
        'Política breu de Momego. Explica que la ubicació es tracta en cel·les H3 i només en memòria, que l’analítica és a OpenPanel autoallotjat i que no permet publicitat personalitzada, tot i integrar AppLovin i AdMob.',
    }),
    s('momego-terms', 'Momego Terms of Use', 'https://travelwhiz.app/terms.html', 'Transit Now', 'terms', 'primary', {
      language: 'en',
      publishedAt: '2020-06-29',
      summary:
        'Condicions d’ús de l’aplicació. Alternen els noms de Transit Now Ltd i BusExpert Ltd, se sotmeten a la llei del Regne Unit i enllacen una política de privadesa amb el domini mal escrit.',
    }),
    s('momego-app-store', 'Momego: Bus Metro Cercanías a l’App Store', 'https://apps.apple.com/es/app/id1281251210', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: cap dada vinculada a la identitat i cap dada de rastreig, però ubicació aproximada i dades de publicitat declarades per a «publicitat de tercers».',
    }),
  ],

  apps: [
    /* ═══════════════════════════ Radarbot ═══════════════════════════ */
    {
      slug: 'radarbot',
      name: 'Radarbot',
      company: 'iteration-mobile',
      categories: ['mapes-i-navegacio', 'mobilitat-i-transport'],
      tagline: 'Avisador de radars que finança el servei amb publicitat i puntua la fiabilitat de qui avisa',
      summary:
        'Radarbot té una de les polítiques de privadesa més detallades del lot: anomena un a un els catorze proveïdors que hi intervenen, des d’AdMob i Meta fins a Braze i Intercom, i distingeix la publicitat personalitzada (només amb consentiment) de la contextual. A canvi, recull la trajectòria de conducció —posicions, velocitat aproximada i rumb— i aplica un sistema de reputació, el Trust Score, que pot limitar funcions o suspendre el compte.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.radarbot.com/',
        privacyPolicy: 'https://www.radarbot.com/politica-de-privacidad/',
        terms: 'https://www.radarbot.com/terminos-y-condiciones-de-uso/',
        appStore: 'https://apps.apple.com/es/app/id1099797635',
      },
      accountRequired: f('no', 'official', ['radarbot-privacy-policy'], 'La política tracta el correu com una dada que l’usuari pot facilitar o no; el compte serveix per a la subscripció premium i la sincronització.'),
      openSource: f('no', 'official', ['radarbot-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La combinació de posicions GPS contínues, destinacions desades i velocitat aproximada dibuixa el mapa dels desplaçaments habituals de qui condueix. La política diu que aquestes dades es pseudonimitzen i que després s’anonimitzen, però mentre duren van lligades a un identificador d’instal·lació.',
      dataCollection: [
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['radarbot-app-store', 'radarbot-privacy-policy'], note: 'Es comparteix amb Braze per a les comunicacions i amb RevenueCat per a la facturació; la política diu que no se cedeix a tercers amb finalitat publicitària.' }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['radarbot-app-store', 'radarbot-privacy-policy'], note: 'Dins del perfil voluntari, amb àlies, nom i cognoms.' }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari'], sources: ['radarbot-privacy-policy'], note: 'Només si l’usuari el facilita per rebre SMS o WhatsApp a través de Braze.' }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['personalitzacio-de-continguts'], sources: ['radarbot-privacy-policy'], note: 'Camp voluntari del perfil.' }),
        row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['personalitzacio-de-continguts'], sources: ['radarbot-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['radarbot-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria', 'seguretat-i-prevencio-del-frau'], sources: ['radarbot-app-store', 'radarbot-privacy-policy'], note: 'L’etiqueta el declara per a la «publicitat de tercers»; la política hi afegeix Play Integrity i App Check per a la prevenció d’abusos.' }),
        row('identificador-publicitari', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['radarbot-privacy-policy'], note: 'L’IDFA d’iOS només es tracta si s’autoritza; sense consentiment la publicitat és contextual.' }),
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['radarbot-app-store', 'radarbot-privacy-policy'], note: 'Posicions GPS, velocitat aproximada, rumb i marques de temps lligades a un identificador de sessió o d’instal·lació, compartides amb proveïdors de mapes i trànsit.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['radarbot-privacy-policy'], note: 'Els socis publicitaris deriven el país o la ciutat a partir de l’adreça IP.' }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['radarbot-privacy-policy'] }),
        row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['radarbot-privacy-policy'], note: 'Les destinacions desades com «Casa» o «Feina» són, de fet, adreces postals.' }),
        row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['radarbot-privacy-policy'], note: 'Rutes, viatges i destinacions introduïdes o desades.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['radarbot-privacy-policy'], note: 'Els avisos que la comunitat reporta, amb les dades tècniques mínimes per validar-los.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['radarbot-app-store', 'radarbot-privacy-policy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['radarbot-privacy-policy'], note: 'Model, fabricant, versió del sistema i idioma.' }),
        row('xarxa-i-connectivitat', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['radarbot-privacy-policy'], note: 'Intensitat de senyal, latència, velocitat i tipus de xarxa; la política diu que es tracten de manera agregada i anònima.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['radarbot-privacy-policy'], note: 'RevenueCat processa els identificadors de transacció i l’estat de la subscripció premium.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['radarbot-app-store', 'radarbot-privacy-policy'], note: 'Crashlytics només s’activa amb consentiment.' }),
        row('interessos-inferits', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['radarbot-privacy-policy'], note: 'Només si s’ha consentit la publicitat personalitzada al panell de Didomi.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['radarbot-app-store', 'radarbot-privacy-policy'], 'L’etiqueta declara identificadors per rastrejar i la política reconeix que alguns socis publicitaris actuen com a responsables independents.'),
        advertisingIdentifiers: f('partial', 'official', ['radarbot-privacy-policy'], 'Fa servir el GAID i l’IDFA només quan la persona els autoritza; si no, mostra publicitat no personalitzada.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['radarbot-privacy-policy'], 'Google AdMob, Meta Platforms Ireland, AppsFlyer, Firebase, Braze, Intercom i RevenueCat.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['radarbot-privacy-policy'], 'Només amb consentiment explícit al panell de privadesa; sense consentiment, la publicitat és contextual.'),
        profiling: f('yes', 'official', ['radarbot-privacy-policy'], 'El Trust Score puntua la fiabilitat dels avisos i pot limitar funcions o suspendre el compte; la política admet que hi ha decisions automatitzades o semiautomatitzades revisables.'),
        aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['radarbot-privacy-policy'], 'Dades de mobilitat pseudonimitzades a proveïdors de mapes i trànsit, i identificadors tècnics a socis publicitaris i de mesura.'),
        intraGroupSharing: na('Iteration Mobile no forma part d’un grup empresarial amb altres serveis de consum.'),
        dataBrokerSales: f('no', 'official', ['radarbot-privacy-policy'], 'La política diu que no ven dades identificables ni cedeix perfils sensibles per a campanyes de tercers.'),
        internationalTransfers: f('yes', 'official', ['radarbot-privacy-policy'], 'Google, AWS, Braze, Intercom, AppsFlyer i RevenueCat poden tractar dades fora de l’Espai Econòmic Europeu, amb clàusules contractuals tipus o el Data Privacy Framework.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['radarbot-privacy-policy'], 'Descriu criteris per a cada categoria —dades de compte mentre hi hagi compte, mobilitat «per períodes limitats»— però no dona cap xifra.'),
        dataAfterDeletion: f('partial', 'official', ['radarbot-privacy-policy'], 'En casos de frau o abús, conserva identificadors tècnics i registres mínims; la resta s’elimina o s’anonimitza.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['radarbot-privacy-policy']),
        selfService: f('yes', 'official', ['radarbot-privacy-policy'], 'Hi ha un botó dins de l’aplicació, a «Perfil d’usuari > Eliminar compte».'),
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Obre el perfil d’usuari dins de l’aplicació.',
          'Tria «Eliminar compte».',
          'Si prefereixes fer-ho per escrit, escriu a dpd@iteration-mobile.com.',
          'Si tens una subscripció premium activa, cancel·la-la abans des de l’App Store.',
        ],
        dataRetained: 'Les dades associades s’eliminen o s’anonimitzen, llevat que hi hagi una obligació legal o una investigació de frau oberta.',
        sources: ['radarbot-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['radarbot-privacy-policy'], 'La portabilitat es reconeix, però cal demanar-la per correu al delegat de protecció de dades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['radarbot-privacy-policy'], 'Resposta en un màxim d’un mes, ampliable, i menció expressa del dret a reclamar a l’AEPD.', { url: 'mailto:dpd@iteration-mobile.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['radarbot-privacy-policy'], 'Panell de preferències gestionat amb Didomi, revocable en qualsevol moment des de la configuració de l’app.'),
        telemetryOptOut: f('partial', 'official', ['radarbot-privacy-policy'], 'Crashlytics i la contribució a la millora de mapes i trànsit es poden desactivar; la telemetria tècnica bàsica, no.'),
        granularControls: f('yes', 'official', ['radarbot-privacy-policy'], 'Permisos d’ubicació, contribució al mapa, comunicacions comercials i publicitat personalitzada per separat.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem examinat el flux de consentiment dins de l’aplicació.'),
      },
      security: {
        e2ee: na('És un servei de navegació i avisos, sense comunicacions privades entre persones.'),
        transportEncryption: f('yes', 'official', ['radarbot-privacy-policy'], 'La política declara xifratge de les comunicacions amb TLS.'),
        atRestEncryption: unknown('La política parla de controls d’accés i monitoratge, però no del xifratge en repòs.'),
        mfa: unknown('No hem trobat documentació d’un segon factor; l’accés es pot fer amb comptes de Google o Facebook.'),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini radarbot.com no publica cap fitxer security.txt i la política no descriu cap canal de notificació de vulnerabilitats.'),
      },
      alternatives: [
        { app: 'waze', comparability: 'partial', rationale: 'També avisa de radars i incidències amb aportacions de la comunitat, però és de Google i integra el compte en un ecosistema publicitari molt més gran.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política de febrer del 2026 és una de les més explícites que hem llegit en aquesta categoria: anomena els proveïdors, distingeix les bases jurídiques i descriu el Trust Score com a decisió semiautomatitzada. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Quant de temps es conserven exactament les dades de mobilitat abans d’anonimitzar-se?',
          'El Trust Score pot arribar a bloquejar un compte de pagament?',
        ],
      },
    },

    /* ═══════════════════════════ Citymapper ═══════════════════════════ */
    {
      slug: 'citymapper',
      name: 'Citymapper',
      company: 'citymapper',
      categories: ['mapes-i-navegacio', 'mobilitat-i-transport'],
      tagline: 'Planificador de transport públic que guarda l’adreça de casa i la fa servir per personalitzar publicitat',
      summary:
        'Citymapper necessita saber on ets i on vas per fer la seva feina, però l’etiqueta de l’App Store mostra que la ubicació precisa, l’adreça postal i l’historial de cerca també van a parar a la publicitat de tercers i a la «publicitat o màrqueting del desenvolupador». Des del 2023 forma part de Via Transportation, i les dades agregades poden servir per entrenar els seus models d’intel·ligència artificial.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Regne Unit',
      links: {
        website: 'https://citymapper.com/',
        privacyPolicy: 'https://citymapper.com/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id469463298',
      },
      accountRequired: f('no', 'official', ['citymapper-privacy-policy'], 'Es pot consultar el mapa i planificar trajectes sense compte; el registre desa adreces, preferències i subscripcions.'),
      openSource: f('no', 'official', ['citymapper-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les adreces desades de casa i de la feina, els trajectes repetits i la ubicació en temps real permeten deduir on vius, on treballes i a quina hora et mous. L’etiqueta declara que aquesta mateixa informació s’utilitza per a la publicitat de tercers.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['citymapper-app-store', 'citymapper-privacy-policy'], note: 'L’etiqueta la declara també sota «publicitat o màrqueting del desenvolupador».' }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['citymapper-app-store', 'citymapper-privacy-policy'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['citymapper-app-store', 'citymapper-privacy-policy'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['citymapper-app-store', 'citymapper-privacy-policy'], note: 'Les adreces desades de casa i de la feina. L’etiqueta les declara per a màrqueting, analítica i personalització.' }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['citymapper-app-store', 'citymapper-privacy-policy'], note: 'GPS i dades de Wi-Fi. L’etiqueta la declara també sota «publicitat o màrqueting del desenvolupador».' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['citymapper-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['citymapper-privacy-policy'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['citymapper-app-store'], note: 'Origen, destí i trajectes cercats.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['citymapper-app-store'], note: 'És l’única categoria que Apple declara com a utilitzada per rastrejar entre apps i webs d’altres empreses.' }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['citymapper-app-store', 'citymapper-privacy-policy'], note: 'Correspon a la categoria «Datos de publicidad» de l’etiqueta, vinculada a la identitat i declarada per a publicitat de tercers.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['citymapper-privacy-policy'], note: 'Identificadors de galeta i identificadors mòbils únics.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['citymapper-app-store'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['citymapper-app-store', 'citymapper-privacy-policy'], note: 'La política diu que no recull ni desa directament els números complets de targeta; l’etiqueta declara «informació de pagament» vinculada a la identitat.' }),
        row('contingut-de-missatges', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['citymapper-app-store'], note: 'Els missatges enviats a l’atenció a l’usuari, declarats com a dada no vinculada.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['citymapper-privacy-policy'], note: 'La política diu que comparteix informació del dispositiu i identificadors en línia amb els socis publicitaris.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'personalitzacio-de-continguts'], sources: ['citymapper-privacy-policy'], note: 'La política reconeix que genera inferències i prediccions sobre els interessos i les preferències.' }),
        row('xarxa-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['citymapper-privacy-policy'], note: 'Si s’entra amb un compte de tercers o una xarxa social, Citymapper en rep informació associada.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['citymapper-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['citymapper-app-store'], 'L’etiqueta declara les dades d’ús com a utilitzades per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['citymapper-privacy-policy', 'citymapper-app-store'], 'La política esmenta identificadors únics en línia i mòbils, i l’etiqueta inclou «dades de publicitat» vinculades a la identitat.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['citymapper-privacy-policy'], 'Xarxes publicitàries, xarxes socials i proveïdors de màrqueting, sense anomenar-los un a un.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['citymapper-privacy-policy', 'citymapper-app-store'], 'Comparteix informació del dispositiu i identificadors en línia amb socis publicitaris per col·locar anuncis.'),
        profiling: f('yes', 'official', ['citymapper-privacy-policy'], 'Genera inferències i prediccions sobre interessos i preferències a partir de la resta de dades.'),
        aiTraining: f('partial', 'official', ['citymapper-privacy-policy'], 'Pot agregar, anonimitzar o desidentificar dades personals per desenvolupar i entrenar funcions i models d’intel·ligència artificial.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['citymapper-privacy-policy'], 'Proveïdors de servei, operadors de transport i reserves, xarxes publicitàries i xarxes socials.'),
        intraGroupSharing: f('yes', 'official', ['citymapper-privacy-policy'], 'Comparteix informació amb Via Transportation, Inc., la matriu, i amb altres societats del grup.'),
        dataBrokerSales: unknown('La política no parla de venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['citymapper-privacy-policy'], 'Decisions d’adequació, clàusules contractuals tipus amb l’addenda britànica i el Data Privacy Framework amb els Estats Units.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['citymapper-privacy-policy'], 'Només criteris generals: «el temps necessari per complir les finalitats».'),
        dataAfterDeletion: f('partial', 'official', ['citymapper-privacy-policy'], 'Conserva certa informació, com les dades transaccionals, després de tancar el compte.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['citymapper-privacy-policy']),
        selfService: f('yes', 'official', ['citymapper-privacy-policy'], 'Les aplicacions incorporen una funció d’eliminació del compte.'),
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Obre la configuració del compte dins de l’aplicació.',
          'Fes servir la funció d’eliminació del compte.',
          'Si no hi arribes, escriu a support@citymapper.com amb l’assumpte «Data Subject Request».',
        ],
        dataRetained: 'Informació transaccional i la que calgui per obligacions legals, fiscals o comptables.',
        sources: ['citymapper-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['citymapper-privacy-policy'], 'Reconeix l’accés i la portabilitat, però cal demanar-los per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['citymapper-privacy-policy'], 'Per correu a l’equip de suport, amb verificació prèvia de la identitat.', { url: 'mailto:support@citymapper.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['citymapper-privacy-policy'], 'Hi ha una eina de preferències de galetes i es pot limitar l’identificador publicitari des del sistema operatiu, però la política no descriu un control específic dins de l’app.'),
        telemetryOptOut: unknown('La política no descriu cap manera de desactivar l’analítica.'),
        granularControls: f('partial', 'official', ['citymapper-privacy-policy'], 'Permisos del dispositiu, preferències de galetes i baixa de les comunicacions de màrqueting.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És un planificador de trajectes, sense comunicacions privades entre persones.'),
        transportEncryption: unknown('La política parla de mesures físiques, tècniques i organitzatives, però no esmenta el xifratge.'),
        atRestEncryption: unknown(),
        mfa: unknown('No hem trobat documentació d’un segon factor.'),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini citymapper.com no serveix cap fitxer security.txt vàlid.'),
      },
      alternatives: [
        { app: 'moovit', comparability: 'equivalent', rationale: 'Cobreix les mateixes ciutats amb transport públic en temps real.', tradeOffs: 'És d’Intel i també viu de la publicitat i de la venda de dades de mobilitat agregades.' },
        { app: 'momego', comparability: 'equivalent', rationale: 'Fa la mateixa feina amb una política molt més minimalista: la ubicació es tracta en memòria i no es vincula a la identitat.', tradeOffs: 'Cobreix menys serveis i no integra pagaments ni bicicletes compartides.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'El contrast rellevant és entre el text de la política, que presenta la publicitat com una finalitat secundària, i l’etiqueta de l’App Store, que declara la ubicació precisa i l’adreça postal sota «publicitat o màrqueting del desenvolupador». No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Quins són els socis publicitaris concrets?',
          'Després de la compra per Via Transportation, quines dades de mobilitat es comparteixen amb els clients públics del grup?',
        ],
      },
    },

    /* ═══════════════════════════ MutuaMás ═══════════════════════════ */
    {
      slug: 'mutuamas',
      name: 'MutuaMás',
      company: 'mutua-madrilena',
      categories: ['mobilitat-i-transport', 'banca-i-finances'],
      tagline: 'Una asseguradora converteix l’aparcament i el peatge en una superapp amb una política de privadesa de fa una dècada',
      summary:
        'MutuaMás paga el parquímetre, reserva aparcament, demana taxi i gestiona les pòlisses, però la política de privadesa que enllaça a l’App Store encara parla de drets «d’accés, rectificació, cancel·lació i oposició», la terminologia anterior al RGPD, i no identifica el delegat de protecció de dades. L’etiqueta de l’App Store no declara cap dada vinculada a la identitat, cosa difícil de quadrar amb una aplicació on es paga i es consulten assegurances.',
      platforms: ['ios', 'android'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.mutua.es/',
        privacyPolicy: 'https://www.mutua.es/recursos/webmovil/politica_de_privacidadApp.html',
        appStore: 'https://apps.apple.com/es/app/id464032312',
      },
      accountRequired: f('yes', 'editorial', [], 'Els serveis de pagament, els bonus i la consulta de pòlisses requereixen identificar-se; no hem trobat cap ús rellevant sense compte.'),
      openSource: f('no', 'official', ['mutuamas-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'On aparques, quan, a quina ciutat i amb quin vehicle, sumat a la posició global de les pòlisses contractades, permet a una asseguradora conèixer els hàbits de conducció dels seus clients. La política ho admet per a «estudis de màrqueting i adaptació dels productes».',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['mutuamas-app-store'], note: 'L’etiqueta la declara com a dada no vinculada a la identitat, cosa poc versemblant en una aplicació de client.' }),
        row('numero-de-telefon', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mutuamas-app-store'] }),
        row('adreca-postal', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mutuamas-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['mutuamas-app-store'], note: 'És l’única categoria que l’etiqueta declara com a utilitzada per rastrejar en apps i webs d’altres empreses.' }),
        row('ubicacio-precisa', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['mutuamas-privacy-policy'], note: 'La política declara la geolocalització del dispositiu per localitzar tallers, oficines i assistència en carretera; l’etiqueta de l’App Store no la declara.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['mutuamas-app-store', 'mutuamas-privacy-policy'], note: 'La política parla explícitament de «datos de hábito de uso de la aplicación».' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'unknown', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['mutuamas-privacy-policy'], note: 'Dispositiu, sistema operatiu i navegador.' }),
        row('historial-de-compres', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mutuamas-privacy-policy'], note: 'Dades dels contractes i posició global de les cobertures contractades.' }),
        row('dades-de-pagament', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['mutuamas-privacy-policy'], note: 'L’app cobra parquímetres, aparcaments i peatges; ni la política ni l’etiqueta detallen com es tracten les dades de la targeta.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['mutuamas-app-store'] }),
        row('interessos-inferits', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'group', purposes: ['elaboracio-de-perfils'], sources: ['mutuamas-privacy-policy'], note: 'La política declara «estudios de marketing, adaptación de los productos» a partir de les dades del client.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['mutuamas-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: unknown('L’etiqueta parla d’identificadors de dispositiu, però ni la política ni la fitxa concreten si es fa servir l’IDFA.'),
        thirdPartyTrackersPresent: unknown('La política no enumera cap proveïdor d’analítica ni de publicitat.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['mutuamas-privacy-policy'], 'Comunicacions sobre productes i serveis propis i adaptació de l’oferta, basades en el consentiment; no hi consta publicitat de tercers.'),
        profiling: f('partial', 'official', ['mutuamas-privacy-policy'], 'Estudis de màrqueting i adaptació dels productes a partir de les dades del client, sense més detall sobre la lògica.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: unknown('La política no identifica cap encarregat ni destinatari extern.'),
        intraGroupSharing: f('yes', 'official', ['mutuamas-privacy-policy'], 'Preveu la comunicació de dades a les empreses del Grup MM, sense anomenar-les.'),
        dataBrokerSales: unknown(),
        internationalTransfers: unknown('La política no esmenta les transferències internacionals.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['mutuamas-privacy-policy'], 'Fixa un màxim de dos anys per al tractament basat en el consentiment, però no diu res de la resta de dades.'),
        dataAfterDeletion: unknown('La política no explica què passa amb les dades quan es deixa de fer servir l’aplicació.'),
      },
      accountDeletion: {
        possible: unknown('La política només parla de desinstal·lar l’aplicació o desactivar-ne funcionalitats; no descriu cap eliminació del compte.'),
        selfService: unknown(),
        difficulty: 'unknown',
        steps: [
          'Desinstal·la l’aplicació o desactiva les funcionalitats que no vulguis, que és l’única via que descriu la política.',
          'Per suprimir les dades, escriu a la Unidad de Cumplimiento Normativo, calle Fortuny 18, 28010 Madrid, o truca al 900 102 711.',
        ],
        obstacles:
          'La política no dona cap adreça electrònica per exercir els drets ni identifica el delegat de protecció de dades: la via documentada és el correu postal o el telèfon.',
        sources: ['mutuamas-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política no esmenta ni la portabilitat ni cap eina d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['mutuamas-privacy-policy'], 'Només enumera accés, rectificació, cancel·lació i oposició, la terminologia anterior al RGPD, i els canalitza per correu postal o telèfon.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['mutuamas-privacy-policy'], 'Es pot revocar el consentiment de les comunicacions comercials, però la política no descriu on.'),
        telemetryOptOut: unknown(),
        granularControls: unknown('La política parla de «desactivar funcionalitats» sense concretar quines ni on.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de gestió de pòlisses i pagaments, sense comunicacions privades entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini mutua.es no publica cap fitxer security.txt.'),
      },
      alternatives: [
        { app: 'telpark', comparability: 'partial', rationale: 'Cobreix el pagament de l’estacionament regulat i dels aparcaments sense lligar-lo a una asseguradora.', tradeOffs: 'No gestiona pòlisses, taxi ni telepeatge.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política enllaçada des de l’App Store sembla anterior al RGPD: no té data, no identifica el delegat de protecció de dades i enumera els drets amb la terminologia de la LOPD del 1999. Pot existir una política més completa a l’àrea de clients que no hem pogut consultar. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Hi ha una política de privadesa actualitzada per a l’app, amb bases jurídiques i terminis?',
          'Les dades d’aparcament i de mobilitat s’utilitzen per tarificar les pòlisses?',
          'Com s’elimina el compte de MutuaMás sense donar de baixa l’assegurança?',
        ],
      },
    },

    /* ═══════════════════════════ SMOU ═══════════════════════════ */
    {
      slug: 'smou',
      name: 'SMOU',
      company: 'barcelona-serveis-municipals',
      categories: ['mobilitat-i-transport', 'administracio-publica'],
      tagline: 'L’app municipal de mobilitat declara el correu per a màrqueting i enllaça un avís legal genèric com a política de privadesa',
      summary:
        'SMOU concentra el Bicing, el parquímetre, els aparcaments, el taxi i la grua de Barcelona en una sola aplicació, amb la matrícula del vehicle i una targeta bancària per compte. L’enllaç de privadesa que declara a l’App Store és l’avís legal genèric de l’Ajuntament, no una política específica del servei, i l’etiqueta declara el correu electrònic per a «publicitat o màrqueting del desenvolupador», cosa poc habitual en un servei públic.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.smou.cat/',
        privacyPolicy: 'https://bsmsa.cat/avis-legal-i-privacitat',
        terms: 'https://www.smou.cat/condicions-dus',
        appStore: 'https://apps.apple.com/es/app/id1439898721',
      },
      accountRequired: f('partial', 'official', ['smou-terms'], 'Sense iniciar sessió es pot veure el mapa, les estacions de Bicing i la previsió de places; activar qualsevol servei de pagament exigeix registre i verificació del correu.'),
      openSource: f('no', 'official', ['smou-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La matrícula, els inicis i les aturades d’estacionament i els trajectes de Bicing indiquen on és el teu cotxe i a quina hora et mous per la ciutat. B:SM diu que la localització es tracta de manera anònima, però l’etiqueta de l’App Store declara la ubicació precisa vinculada a la identitat.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['smou-app-store', 'smou-terms'], note: 'És la clau del compte i cal verificar-la; l’etiqueta la declara també sota «publicitat o màrqueting del desenvolupador».' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['smou-app-store'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['smou-app-store'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['smou-app-store'], note: 'Necessària per a serveis com el distintiu de resident.' }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['smou-app-store', 'smou-terms'], note: 'Les condicions d’ús diuen que la localització es tracta «de forma anònima» per millorar els serveis; l’etiqueta la declara vinculada a la identitat.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['smou-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['smou-app-store', 'smou-terms'], note: 'Les condicions reconeixen la recollida automàtica de l’identificador del dispositiu, el sistema operatiu i el navegador.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['smou-app-store', 'smou-terms'], note: 'Els tiquets digitals de parquímetre, les recàrregues i els aparcaments, consultables per períodes i per vehicle.' }),
        row('dades-de-pagament', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['smou-app-store', 'smou-terms'], note: 'Una única targeta per compte, verificada amb un càrrec de comprovació; l’etiqueta la declara com a dada no vinculada a la identitat.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['smou-app-store'] }),
        row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['smou-app-store'], note: 'Les consultes i reclamacions enviades al servei d’atenció.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['smou-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['smou-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['smou-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: unknown('Ni les condicions ni la política de B:SM esmenten identificadors publicitaris.'),
        thirdPartyTrackersPresent: unknown('No hem trobat cap llista de proveïdors d’analítica integrats a l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['smou-app-store'], 'L’etiqueta declara el correu electrònic sota «publicitat o màrqueting del desenvolupador»; la política de B:SM no descriu aquesta finalitat.'),
        profiling: f('no', 'official', ['bsm-privacy-policy'], 'B:SM declara que no preveu la presa de decisions automatitzades ni l’elaboració de perfils.'),
        aiTraining: unknown('La documentació no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['bsm-privacy-policy', 'smou-terms'], 'Proveïdors que actuen com a encarregats i, quan hi ha obligació legal, tercers públics o privats; el detall es remet al registre d’activitats de tractament. Els serveis de mobilitat de tercers integrats a l’app es contracten directament amb el proveïdor.'),
        intraGroupSharing: f('partial', 'official', ['smou-terms'], 'Els serveis de parquímetre i aparcament els presta B:SM juntament amb Iniciatives Tecnològiques de Mobilitat (ITM).'),
        dataBrokerSales: f('no', 'official', ['bsm-privacy-policy'], 'La política només preveu comunicacions per obligació legal o a encarregats.'),
        internationalTransfers: f('no', 'official', ['bsm-privacy-policy'], 'B:SM declara que no preveu transferències internacionals de dades.', { mechanism: 'none' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('El detall de les finalitats es remet a un registre d’activitats de tractament que no hem pogut consultar.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['bsm-privacy-policy'], 'Només el criteri general del temps necessari per a la finalitat, amb el bloqueig posterior que preveu la LOPDGDD.'),
        dataAfterDeletion: f('partial', 'official', ['bsm-privacy-policy'], 'Un cop se’n demana la supressió, les dades queden bloquejades el temps que calgui per a les obligacions legals.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['bsm-privacy-policy'], 'El dret de supressió es reconeix i s’exerceix davant del delegat de protecció de dades.'),
        selfService: unknown('No hem pogut verificar si hi ha una opció d’eliminació del compte dins de l’app o a la zona d’usuari: les preguntes freqüents de smou.cat es carreguen amb JavaScript i no s’han deixat llegir.'),
        difficulty: 'unknown',
        steps: [
          'Comprova que no tinguis operacions obertes ni pendents de cobrament.',
          'Escriu a protecciodades@bsmsa.cat, o per carta a Barcelona de Serveis Municipals, carrer de Calàbria 66, 08015 Barcelona, a l’atenció del delegat de protecció de dades, i acredita la teva identitat.',
        ],
        dataRetained: 'Les dades queden bloquejades el temps necessari per a les obligacions legals, especialment les de facturació.',
        sources: ['bsm-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['bsm-privacy-policy'], 'La portabilitat es reconeix en format electrònic, però s’ha de demanar per escrit.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['bsm-privacy-policy'], 'Amb delegat de protecció de dades propi i reclamació davant de l’Autoritat Catalana de Protecció de Dades.', { url: 'mailto:protecciodades@bsmsa.cat' }),
      },
      controls: {
        adPersonalizationOptOut: unknown('L’etiqueta declara màrqueting amb el correu, però no hem trobat on es desactiva.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['smou-terms'], 'La localització es pot revocar des del sistema operatiu, tot i que les condicions adverteixen que llavors l’app queda incompleta.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de serveis municipals de mobilitat, sense comunicacions privades entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown('El registre verifica el correu electrònic, però no hem trobat cap segon factor per iniciar sessió.'),
        independentAudits: f('partial', 'official', ['bsm-privacy-policy'], 'B:SM publica un certificat de l’Esquema Nacional de Seguretat a la seva web; no hem pogut comprovar-ne l’abast ni si cobreix SMOU.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('Ni bsmsa.cat ni smou.cat publiquen un fitxer security.txt.'),
      },
      alternatives: [
        { app: 'telpark', comparability: 'partial', rationale: 'Permet pagar l’estacionament regulat de moltes ciutats sense passar per l’app municipal.', tradeOffs: 'No dona accés al Bicing ni als serveis propis de Barcelona.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'El responsable real del tractament és B:SM, tot i que l’App Store presenta l’Ajuntament de Barcelona com a desenvolupador i enllaça l’avís legal genèric del consistori. Les condicions d’ús diuen que la localització es tracta de manera anònima, però l’etiqueta declara ubicació precisa vinculada a la identitat: són dues afirmacions difícils de conciliar. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Per què l’etiqueta declara el correu per a màrqueting si B:SM no documenta aquesta finalitat?',
          'Quina activitat del registre de tractaments de B:SM empara SMOU i amb quina base jurídica?',
          'Hi ha una opció d’eliminar el compte dins de l’aplicació?',
        ],
      },
    },

    /* ═══════════════════════════ Île-de-France Mobilités ═══════════════════════════ */
    {
      slug: 'ile-de-france-mobilites',
      name: 'Île-de-France Mobilités',
      company: 'ile-de-france-mobilites',
      categories: ['mobilitat-i-transport', 'administracio-publica'],
      tagline: 'L’aplicació oficial del transport de París no declara cap dada de rastreig, però la seva política és inaccessible des d’Espanya',
      summary:
        'L’app de l’autoritat de transport de la regió de París ven títols, recarrega el passi Navigo i planifica trajectes. L’etiqueta de l’App Store és de les més contingudes del lot: cap dada utilitzada per rastrejar i la ubicació declarada com a no vinculada a la identitat. No hem pogut documentar-ne res més: el web d’Île-de-France Mobilités bloqueja les consultes automatitzades amb un error 403 i la política de confidencialitat no s’ha deixat llegir.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'unknown',
      jurisdiction: 'França',
      links: {
        website: 'https://www.iledefrance-mobilites.fr/',
        privacyPolicy: 'https://www.iledefrance-mobilites.fr/conditions-generales-application-vianavigo-regles-confidentialite',
        appStore: 'https://apps.apple.com/es/app/id484527651',
      },
      accountRequired: f('partial', 'editorial', [], 'La cerca d’itineraris i els horaris funcionen sense compte; comprar títols o recarregar el passi Navigo obliga a identificar-se.'),
      openSource: f('no', 'official', ['ile-de-france-mobilites-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Un títol de transport digital lliga la identitat als desplaçaments dins de la xarxa. L’etiqueta declara la ubicació com a no vinculada a la identitat, però sense la política no podem saber com es tracten les validacions ni quant de temps es conserven.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ile-de-france-mobilites-app-store'] }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['ile-de-france-mobilites-app-store'] }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ile-de-france-mobilites-app-store'], note: 'Probablement la fotografia del passi Navigo personalitzat, però no ho hem pogut verificar.' }),
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ile-de-france-mobilites-app-store'], note: 'Declarada com a dada no vinculada a la identitat, per al funcionament de l’app.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ile-de-france-mobilites-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ile-de-france-mobilites-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['ile-de-france-mobilites-app-store'] }),
        row('contingut-de-missatges', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['ile-de-france-mobilites-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['ile-de-france-mobilites-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['ile-de-france-mobilites-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['ile-de-france-mobilites-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: unknown('No hem pogut llegir la política de confidencialitat.'),
        thirdPartyTrackersPresent: unknown('No hem pogut llegir la política de confidencialitat.'),
      },
      dataUses: {
        targetedAdvertising: unknown('No hem pogut llegir la política de confidencialitat.'),
        profiling: unknown('No hem pogut llegir la política de confidencialitat.'),
        aiTraining: unknown('No hem pogut llegir la política de confidencialitat.'),
      },
      sharing: {
        thirdPartySharing: unknown('No hem pogut llegir la política de confidencialitat.'),
        intraGroupSharing: unknown('No hem pogut llegir la política de confidencialitat.'),
        dataBrokerSales: unknown('No hem pogut llegir la política de confidencialitat.'),
        internationalTransfers: unknown('No hem pogut llegir la política de confidencialitat.'),
      },
      transparency: {
        policyClarity: 'unknown',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: unknown('No hem pogut llegir la política de confidencialitat.'),
        dataAfterDeletion: unknown('No hem pogut llegir la política de confidencialitat.'),
      },
      accountDeletion: {
        possible: unknown('No hem pogut llegir la documentació del servei.'),
        selfService: unknown(),
        difficulty: 'unknown',
        obstacles: 'El web d’Île-de-France Mobilités respon amb un error 403 a les consultes automatitzades, també a la pàgina de la política de confidencialitat enllaçada des de l’App Store.',
      },
      userRights: {
        dataExport: unknown('No hem pogut llegir la política de confidencialitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: unknown('No hem pogut localitzar el contacte del delegat de protecció de dades.'),
      },
      controls: {
        adPersonalizationOptOut: unknown(),
        telemetryOptOut: unknown(),
        granularControls: unknown(),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació d’informació i de títols de transport, sense comunicacions privades entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('El fitxer security.txt del domini tampoc s’ha deixat consultar pel mateix bloqueig.'),
      },
      alternatives: [
        { app: 'citymapper', comparability: 'partial', rationale: 'Cobreix la xarxa de París per planificar trajectes, amb una política de privadesa pública i llegible.', tradeOffs: 'No ven títols de transport ni recarrega el passi Navigo, i el seu model inclou publicitat.' },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'Fitxa amb moltes llacunes deliberades. L’única font que hem pogut verificar és l’etiqueta de privadesa de l’App Store espanyol; la política de confidencialitat i la resta del web responen amb un error 403 des de la nostra connexió. Caldria tornar-hi des d’una connexió francesa. No hem pogut fer la cerca d’incidents ni consultar posicionaments de la CNIL.',
        openQuestions: [
          'Quina és la base jurídica del tractament: missió d’interès públic, contracte o consentiment?',
          'Quant de temps es conserven les dades de validació i de compra de títols?',
          'Hi ha una opció d’eliminar el compte Île-de-France Mobilités Connect?',
          'La CNIL s’ha pronunciat sobre el passi Navigo o sobre aquesta aplicació?',
        ],
      },
    },

    /* ═══════════════════════════ WAIIS ═══════════════════════════ */
    {
      slug: 'waiis',
      name: 'WAIIS',
      company: 'waiis-solutions-iberia',
      categories: ['mobilitat-i-transport'],
      tagline: 'Cotxe compartit que segueix la ubicació de tothom durant el trajecte perquè ho exigeix el programa de certificats d’estalvi',
      summary:
        'WAIIS organitza els desplaçaments diaris compartint cotxe i tramita per als seus usuaris els Certificats d’Estalvi Energètic. Per justificar-los davant del ministeri ha de seguir la ubicació exacta del conductor i dels passatgers durant tot el trajecte, vinculada al compte de cadascú: sense aquest permís no hi ha bo. És també la política més concreta del lot en terminis —seixanta dies per esborrar un compte tancat, cinc anys d’inactivitat— i en encarregats, que anomena un a un.',
      platforms: ['ios', 'android'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://waiis.com/',
        privacyPolicy: 'https://waiis.com/politica-de-privacidad/',
        appStore: 'https://apps.apple.com/es/app/id1636462490',
      },
      accountRequired: f('yes', 'official', ['waiis-privacy-policy'], 'Hi ha un únic tipus de compte, personal i intransferible, que serveix tant per conduir com per viatjar de passatger.'),
      openSource: f('no', 'official', ['waiis-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El seguiment del trajecte, la matrícula, el document identificatiu i les dades bancàries fan que WAIIS sàpiga qui va amb qui, per on i a quina hora, cada dia laborable. La política ho justifica en un requisit legal del programa de certificats d’estalvi energètic.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['waiis-privacy-policy', 'waiis-app-store'], note: 'Obligatori per registrar-se i necessari per tramitar els certificats d’estalvi amb el soci Delcae.' }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['waiis-privacy-policy', 'waiis-app-store'], note: 'Obligatori; es pot comunicar a l’empresa o institució que ofereix promocions a la comunitat.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['waiis-privacy-policy', 'waiis-app-store'], note: 'Voluntària; es tracta amb Customer.io i Intercom.' }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['waiis-privacy-policy', 'waiis-app-store'], note: 'Origen, destí i adreces favorites dels trajectes habituals; i, per retirar saldo, l’adreça completa amb ciutat, país i codi postal.' }),
        row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['waiis-privacy-policy'], note: 'DNI, NIE o passaport, amb verificació d’identitat (KYC) de Mangopay per retirar diners.' }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['waiis-privacy-policy'] }),
        row('origen-etnic-o-nacionalitat', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['waiis-privacy-policy'], note: 'El perfil té camps voluntaris de país de naixement i nacionalitat.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['waiis-privacy-policy', 'waiis-app-store'], note: 'Fotografia de perfil.' }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['waiis-app-store'], note: 'L’etiqueta declara els contactes vinculats a la identitat; la política no n’explica l’ús.' }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['waiis-privacy-policy', 'waiis-app-store'], note: 'Seguiment en temps real del conductor i dels passatgers mentre dura el trajecte, vinculat als comptes respectius. L’etiqueta la declara com a no vinculada a la identitat, cosa que no encaixa amb la política.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['waiis-app-store'] }),
        row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['waiis-privacy-policy'], note: 'Els missatges entre persones usuàries es gestionen amb CometChat i es poden conservar anonimitzats amb finalitats estadístiques.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['waiis-privacy-policy'], note: 'Número de targeta o IBAN, processats per Mangopay a Irlanda i Alemanya.' }),
        row('historial-de-compres', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['waiis-app-store'] }),
        row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['waiis-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['waiis-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['waiis-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['waiis-app-store', 'waiis-privacy-policy'], note: 'És l’única categoria que l’etiqueta declara com a utilitzada per rastrejar. La política identifica Segment, Amplitude i Microsoft Clarity, aquest últim amb servidors als Estats Units.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['waiis-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['waiis-app-store'], 'L’etiqueta declara les dades d’ús com a utilitzades per rastrejar en apps i webs d’altres empreses, tot i que la política no ho explica.'),
        advertisingIdentifiers: unknown('La política no esmenta cap identificador publicitari.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['waiis-privacy-policy'], 'Segment (Twilio), Amplitude i Microsoft Clarity, que enregistra sessions i patrons de navegació des de servidors dels Estats Units.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['waiis-privacy-policy'], 'La política no preveu publicitat i declara que les dades no es venen mai.'),
        profiling: f('no', 'official', ['waiis-privacy-policy'], 'Reconeix el dret a no ser sotmès a decisions automatitzades i no descriu cap perfilat propi.'),
        aiTraining: unknown('La política no en diu res, tot i que l’aplicació es presenta com a assistida per intel·ligència artificial.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['waiis-privacy-policy'], 'Google Cloud, Mangopay, Segment, Intercom, Customer.io, CometChat, Amplitude i Clarity com a encarregats, i Delcae per tramitar els certificats d’estalvi davant del ministeri.'),
        intraGroupSharing: na('WAIIS Solutions Iberia no forma part d’un grup amb altres serveis de consum.'),
        dataBrokerSales: f('no', 'official', ['waiis-privacy-policy'], 'La política diu expressament que les dades no es vendran mai.'),
        internationalTransfers: f('partial', 'official', ['waiis-privacy-policy'], 'Declara que evita les transferències i que allotja les dades a Google Cloud als Països Baixos, amb clàusules contractuals tipus per als accessos possibles des dels Estats Units; Microsoft Clarity, però, té els servidors als Estats Units.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['waiis-privacy-policy'], 'Cinc anys des de l’última activitat si no es tanca el compte, seixanta dies per esborrar-lo si es tanca, i almenys tres anys per a la documentació dels certificats d’estalvi.'),
        dataAfterDeletion: f('partial', 'official', ['waiis-privacy-policy'], 'Es conserven les dades de pagament pels terminis comptables i fiscals, i la informació dels perfils reportats o bloquejats per depurar responsabilitats.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['waiis-privacy-policy']),
        selfService: unknown('La política parla de «cerrar la cuenta de forma voluntaria», però no diu si es fa des de l’app o cal escriure.'),
        difficulty: 'medium',
        waitingPeriodDays: 60,
        steps: [
          'Tanca el compte des de l’aplicació o demana-ho a rgpd@waiis.com.',
          'Si tens saldo pendent, retira’l abans: la retirada exigeix una verificació d’identitat amb Mangopay.',
          'Les dades personals s’eliminen en un termini de seixanta dies des del tancament.',
        ],
        obstacles:
          'Si el perfil ha rebut queixes o valoracions negatives, WAIIS es reserva conservar la informació més temps. Els documents dels certificats d’estalvi es guarden almenys tres anys per a la verificació de les autoritats.',
        dataRetained:
          'Moviments financers pel termini de l’article 66 de la Llei General Tributària, documentació dels certificats d’estalvi i contingut anonimitzat amb finalitats estadístiques.',
        sources: ['waiis-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['waiis-privacy-policy'], 'La portabilitat es reconeix; cal demanar-la per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['waiis-privacy-policy'], 'Llista completa de drets, inclosa l’oposició al tractament dels certificats d’estalvi abans de tramitar-los.', { url: 'mailto:rgpd@waiis.com' }),
      },
      controls: {
        adPersonalizationOptOut: na('L’aplicació no mostra publicitat.'),
        telemetryOptOut: unknown('La política no descriu cap manera de desactivar Segment, Amplitude o Clarity.'),
        granularControls: f('partial', 'official', ['waiis-privacy-policy'], 'El seguiment de la ubicació l’inicia i l’atura manualment la persona usuària amb botons explícits, i s’atura sol si es passa el doble del temps previst del trajecte.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'official', ['waiis-privacy-policy'], 'Per activar el bo dels certificats d’estalvi és imprescindible donar permís d’ubicació exacta: qui el nega no pot accedir a l’incentiu econòmic.'),
        darkPatternList: [
          {
            type: 'unbalanced-consent',
            severity: 'medium',
            description:
              'L’accés a l’incentiu econòmic dels Certificats d’Estalvi Energètic està condicionat a autoritzar la ubicació exacta durant tot el trajecte. La política ho presenta com un requisit legal del ministeri, però el resultat és que la persona no pot triar.',
            sources: ['waiis-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: f('no', 'official', ['waiis-privacy-policy'], 'El xat intern es gestiona amb CometChat i els missatges es poden conservar anonimitzats, de manera que no són xifrats d’extrem a extrem.'),
        transportEncryption: unknown('La política parla d’«estàndards de seguretat d’última generació» sense concretar-los.'),
        atRestEncryption: unknown(),
        mfa: unknown('No hem trobat documentació d’un segon factor.'),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini waiis.com no publica cap fitxer security.txt.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política del 12 de maig del 2026 és notablement detallada per a una empresa d’aquesta mida: anomena tots els encarregats amb la seva ubicació, dona terminis concrets i explica quan comença i quan acaba el seguiment de la ubicació. La contradicció rellevant és que l’etiqueta de l’App Store declara la ubicació com a dada no vinculada a la identitat, mentre la política diu que es vincula al compte. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Per què l’etiqueta de l’App Store declara els contactes del telèfon si la política no els esmenta?',
          'Quina és la funció d’intel·ligència artificial que anuncia l’app i amb quines dades s’entrena?',
        ],
      },
    },

    /* ═══════════════════════════ GVA SUMA-T ═══════════════════════════ */
    {
      slug: 'gva-suma-t',
      name: 'GVA SUMA-T',
      company: 'generalitat-valenciana',
      categories: ['mobilitat-i-transport', 'administracio-publica'],
      tagline: 'L’app de transport valenciana només declara la ubicació, però l’enllaç de privadesa que publica a l’App Store no existeix',
      summary:
        'GVA SUMA-T mostra horaris i parades del transport metropolità de València i anuncia que en el futur vendrà títols digitals amb un moneder virtual. L’etiqueta de privadesa és mínima: només la ubicació precisa, declarada com a no vinculada a la identitat, i cap dada de rastreig. Però la política de privadesa que declara a l’App Store, una nota legal de gva.es, respon «recurso no encontrado»: l’aplicació no té cap document de privadesa consultable.',
      platforms: ['ios', 'android'],
      businessModel: 'unknown',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://sumat.gva.es/',
        appStore: 'https://apps.apple.com/es/app/id6670390270',
      },
      accountRequired: f('no', 'official', ['gva-suma-t-app-store'], 'L’etiqueta no declara cap dada de contacte ni identificador de compte; la descripció de l’app diu que la compra de títols arribarà en versions futures.'),
      openSource: f('no', 'official', ['gva-suma-t-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Amb la informació disponible, l’únic que revela l’aplicació és on ets quan consultes un horari. Si arriba el moneder virtual anunciat, la imatge canviarà del tot i caldrà tornar a revisar la fitxa.',
      dataCollection: [
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['gva-suma-t-app-store'], note: 'És l’única categoria que declara l’etiqueta de privadesa, per al funcionament de l’aplicació.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['gva-suma-t-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['gva-suma-t-app-store'], 'L’etiqueta no declara cap identificador.'),
        thirdPartyTrackersPresent: unknown('Sense política de privadesa no podem saber quins components de tercers integra.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['gva-suma-t-app-store'], 'L’etiqueta no declara cap finalitat publicitària.'),
        profiling: unknown('No hi ha cap document que ho descrigui.'),
        aiTraining: unknown('No hi ha cap document que ho descrigui.'),
      },
      sharing: {
        thirdPartySharing: unknown('No hi ha cap política de privadesa consultable.'),
        intraGroupSharing: unknown('No hi ha cap política de privadesa consultable.'),
        dataBrokerSales: unknown('No hi ha cap política de privadesa consultable.'),
        internationalTransfers: unknown('No hi ha cap política de privadesa consultable.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem localitzat l’activitat corresponent al registre d’activitats de tractament de la Generalitat Valenciana.'),
      },
      retention: {
        definedPeriods: unknown('No hi ha cap política de privadesa consultable.'),
        dataAfterDeletion: unknown('No hi ha cap política de privadesa consultable.'),
      },
      accountDeletion: {
        possible: na('L’aplicació, en la versió actual, no crea cap compte de persona usuària.'),
        selfService: na('No hi ha compte que eliminar.'),
        difficulty: 'unknown',
        obstacles: 'Quan s’activi el moneder virtual anunciat a la fitxa de l’App Store, caldrà revisar aquest apartat.',
      },
      userRights: {
        dataExport: unknown('No hi ha cap política de privadesa consultable.'),
        exportFormatQuality: 'unknown',
        rightsExercise: unknown('No hem pogut verificar el contacte del delegat de protecció de dades aplicable a aquesta aplicació.'),
      },
      controls: {
        adPersonalizationOptOut: na('L’aplicació no declara cap tractament publicitari.'),
        telemetryOptOut: unknown(),
        granularControls: unknown('El permís d’ubicació es pot revocar des del sistema operatiu, però no hem vist cap control dins de l’app.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació d’informació de transport, sense comunicacions privades entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: na('No hi ha comptes de persona usuària.'),
        independentAudits: unknown('No hem pogut verificar si l’aplicació està coberta per una declaració de conformitat amb l’Esquema Nacional de Seguretat.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini gva.es no publica cap fitxer security.txt.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La troballa principal és documental: l’enllaç de política de privadesa que la Generalitat Valenciana declara a l’App Store, www.gva.es/es/inicio/nota_legal, retorna «El recurso solicitado no ha sido encontrado». Tampoc hem trobat cap avís de privadesa a sumat.gva.es. La fitxa queda amb molts desconeguts per aquest motiu, no per manca de recerca. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Quina activitat del registre de tractaments de la Generalitat empara aquesta aplicació i amb quina base jurídica?',
          'Qui és el responsable concret: la conselleria d’Infraestructures o l’Autoritat de Transport Metropolità de València?',
          'Quines dades demanarà el moneder virtual quan s’activi la compra de títols?',
        ],
      },
    },

    /* ═══════════════════════════ Compartir Ubicacion GPS ═══════════════════════════ */
    {
      slug: 'compartir-ubicacion-gps',
      name: 'Compartir Ubicacion GPS',
      company: 'alphalogy-studio',
      categories: ['mapes-i-navegacio', 'utilitats'],
      tagline: 'Comparteix la teva ubicació en temps real amb una política escrita en primera persona que no esmenta el RGPD',
      summary:
        'L’aplicació serveix per compartir la posició en temps real amb amics i família, una de les dades més sensibles que hi ha. El desenvolupador publica a l’App Store com a persona física i la política enllaçada, d’un estudi vietnamita anomenat Alphalogy, és una plantilla genèrica: no esmenta el RGPD, no enumera cap dret, no dona cap termini de conservació i l’única manera de deixar de ser rastrejat que proposa és desinstal·lar l’app.',
      platforms: ['ios', 'android'],
      businessModel: 'advertising',
      jurisdiction: 'Vietnam',
      links: {
        website: 'https://van-hoa-nguyen.netlify.app/',
        privacyPolicy: 'https://www.alphalogy.net/privacy',
        appStore: 'https://apps.apple.com/es/app/id6496686696',
      },
      accountRequired: unknown('Ni la fitxa de l’App Store ni la política aclareixen si cal registrar-se per compartir la ubicació.'),
      openSource: f('no', 'official', ['compartir-ubicacion-gps-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La ubicació precisa i contínua és l’objecte mateix de l’aplicació. El problema no és que la reculli, sinó que no hi ha cap document que digui qui la guarda, on, quant de temps ni amb qui la comparteix.',
      dataCollection: [
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['compartir-ubicacion-gps-app-store', 'compartir-ubicacion-gps-privacy-policy'], note: 'L’etiqueta la declara per al funcionament de l’app i com a dada no vinculada a la identitat. La política admet que pot transmetre dades de localització anonimitzades a serveis externs.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['compartir-ubicacion-gps-app-store'], note: 'Declarada per a «publicitat de tercers» i utilitzada per rastrejar en apps i webs d’altres empreses.' }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['compartir-ubicacion-gps-app-store'], note: 'Correspon a la categoria «Datos de publicidad» de l’etiqueta, declarada per a publicitat de tercers.' }),
        row('adreca-ip', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['compartir-ubicacion-gps-privacy-policy'], note: 'La política esmenta l’adreça IP, el nom del dispositiu i la versió del sistema operatiu dins de les dades de registre.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['compartir-ubicacion-gps-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['compartir-ubicacion-gps-privacy-policy'], note: 'La política reconeix que hi ha codi de tercers que fa servir galetes.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['compartir-ubicacion-gps-app-store', 'compartir-ubicacion-gps-privacy-policy'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['compartir-ubicacion-gps-app-store'], 'L’etiqueta declara les dades d’ús com a utilitzades per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['compartir-ubicacion-gps-app-store'], 'L’etiqueta declara «dades de publicitat» amb la finalitat de publicitat de tercers.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['compartir-ubicacion-gps-privacy-policy'], 'La política només anomena Google Play Services i Firebase Analytics, però l’etiqueta declara publicitat de tercers.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['compartir-ubicacion-gps-app-store'], 'L’etiqueta declara dades d’ús i de publicitat per a la finalitat «publicitat de tercers».'),
        profiling: unknown('La política no en diu res.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['compartir-ubicacion-gps-privacy-policy'], 'Serveis externs de Google i, segons l’etiqueta, socis publicitaris que la política no identifica.'),
        intraGroupSharing: unknown('No hem pogut determinar si Alphalogy Studio forma part de cap grup.'),
        dataBrokerSales: unknown('La política no en diu res.'),
        internationalTransfers: unknown('La política no esmenta les transferències internacionals, tot i que el responsable declarat té la seu al Vietnam.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['compartir-ubicacion-gps-privacy-policy'], 'La política no fixa cap termini de conservació.'),
        dataAfterDeletion: unknown('La política no explica què passa amb les dades quan es deixa de fer servir l’aplicació.'),
      },
      accountDeletion: {
        possible: unknown('La política no descriu cap procediment d’eliminació de dades ni de compte.'),
        selfService: unknown(),
        difficulty: 'unknown',
        steps: [
          'L’única via que documenta la política és desinstal·lar l’aplicació per aturar la recollida de dades.',
          'Per demanar la supressió de dades, escriu a alphalogy.tk@gmail.com, tot i que la política no en garanteix cap termini.',
        ],
        obstacles: 'La política no reconeix cap dret de supressió i l’única adreça de contacte és un compte de correu genèric de Gmail.',
        sources: ['compartir-ubicacion-gps-privacy-policy'],
      },
      userRights: {
        dataExport: f('no', 'official', ['compartir-ubicacion-gps-privacy-policy'], 'La política no preveu cap exportació ni cap dret d’accés.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('no', 'official', ['compartir-ubicacion-gps-privacy-policy'], 'No enumera cap dret del RGPD ni cap autoritat de control; només dona una adreça de correu.'),
      },
      controls: {
        adPersonalizationOptOut: f('no', 'official', ['compartir-ubicacion-gps-privacy-policy'], 'La política diu que l’única manera d’aturar la recollida és desinstal·lar l’aplicació.'),
        telemetryOptOut: f('no', 'official', ['compartir-ubicacion-gps-privacy-policy'], 'No descriu cap control per desactivar l’analítica.'),
        granularControls: f('no', 'official', ['compartir-ubicacion-gps-privacy-policy'], 'Els únics controls són els permisos del sistema operatiu.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem examinat el flux de consentiment dins de l’aplicació.'),
      },
      security: {
        e2ee: f('no', 'editorial', [], 'La política descriu que la informació es processa i es manté als seus sistemes, de manera que la ubicació compartida no és xifrada d’extrem a extrem.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown('La política només parla de «mitjans comercialment acceptables» de protecció.'),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini alphalogy.net no publica cap fitxer security.txt.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política és una plantilla generada, redactada en primera persona del singular («the information that I request»), sense data ni versió. Hi ha un desajust notable entre el nom del venedor a l’App Store, Van Hoa Nguyen, i el responsable que declara la política, Alphalogy Studio: una aplicació que comparteix ubicació en temps real hauria d’identificar amb claredat qui respon de les dades. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Qui és el responsable del tractament als efectes del RGPD, la persona física o Alphalogy Studio?',
          'On s’emmagatzemen les ubicacions compartides i quant de temps?',
          'Quins són els socis publicitaris que declara l’etiqueta de l’App Store?',
        ],
      },
    },

    /* ═══════════════════════════ Game Maps IRL ═══════════════════════════ */
    {
      slug: 'game-maps-irl',
      name: 'Game Maps IRL',
      company: 'retry-apps',
      categories: ['mapes-i-navegacio'],
      tagline: 'Navegació amb estètica de videojoc i una política de plantilla que signa una persona física, no l’empresa',
      summary:
        'Game Maps IRL redibuixa el mapa del teu entorn amb l’estil dels mapes de videojocs coneguts i ofereix navegació a CarPlay. L’etiqueta de l’App Store és més exigent del que suggereix una app d’estètica: ubicació precisa, adreça postal, historial de cerca i identificadors vinculats a la identitat, amb identificadors declarats per rastrejar. La política és una plantilla generada, signada a títol personal pel fundador i no per l’empresa turca que figura com a venedora.',
      platforms: ['ios'],
      businessModel: 'freemium',
      jurisdiction: 'Turquia',
      links: {
        website: 'https://retryapps.co/',
        privacyPolicy: 'https://retryapps.co/game-maps-irl/privacy-policy',
        terms: 'https://retryapps.co/game-maps-irl/terms',
        appStore: 'https://apps.apple.com/es/app/id6742728012',
      },
      accountRequired: f('no', 'official', ['game-maps-irl-privacy-policy'], 'La política diu que el registre no és obligatori, tot i que algunes funcions poden requerir-lo.'),
      openSource: f('no', 'official', ['game-maps-irl-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La ubicació precisa i l’historial de cerca, vinculats a la identitat i lligats a identificadors que serveixen per rastrejar, donen a una aplicació decorativa la mateixa capacitat de seguiment que un navegador complet.',
      dataCollection: [
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['game-maps-irl-app-store', 'game-maps-irl-privacy-policy'], note: 'La política admet que transmet periòdicament dades de localització anonimitzades a serveis externs.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['game-maps-irl-app-store'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['game-maps-irl-app-store'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['game-maps-irl-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['game-maps-irl-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['game-maps-irl-app-store', 'game-maps-irl-privacy-policy'], note: 'La política esmenta l’identificador únic del dispositiu entre les dades recollides automàticament.' }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['game-maps-irl-privacy-policy'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['game-maps-irl-app-store', 'game-maps-irl-privacy-policy'], note: 'Les subscripcions es gestionen amb RevenueCat.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['game-maps-irl-app-store'], note: 'Apple ho declara com a «altre contingut de la persona usuària», sense concretar-ne la naturalesa.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['game-maps-irl-app-store', 'game-maps-irl-privacy-policy'], note: 'L’analítica es fa amb Firebase i Mixpanel.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['game-maps-irl-privacy-policy'], note: 'Tipus de dispositiu, sistema operatiu i navegador.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['game-maps-irl-app-store', 'game-maps-irl-privacy-policy'], note: 'Firebase Crashlytics.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['game-maps-irl-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: unknown('La política no esmenta cap identificador publicitari, tot i que l’etiqueta declara identificadors de rastreig.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['game-maps-irl-privacy-policy'], 'Google Play Services, Google Analytics for Firebase, Firebase Crashlytics, Expo, Mapbox, Mixpanel i RevenueCat.'),
      },
      dataUses: {
        targetedAdvertising: unknown('La política parla de «promocions de màrqueting» per correu, però no descriu publicitat segmentada dins de l’app.'),
        profiling: unknown('La política no en diu res.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['game-maps-irl-privacy-policy'], 'Set proveïdors anomenats, més les comunicacions per obligació legal o per protegir drets.'),
        intraGroupSharing: unknown('Retry Apps publica una desena d’aplicacions amb la mateixa plantilla legal; la política no diu si hi comparteix dades.'),
        dataBrokerSales: unknown('La política no en diu res.'),
        internationalTransfers: unknown('La política no esmenta les transferències internacionals, tot i que el responsable té la seu a Turquia i els proveïdors, als Estats Units.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['game-maps-irl-privacy-policy'], 'Les dades recollides automàticament es conserven fins a 24 mesos i després es poden guardar de manera agregada; les que facilita la persona usuària, mentre faci servir l’app «i un temps raonable després».'),
        dataAfterDeletion: unknown('La política no distingeix entre deixar de fer servir l’app i demanar la supressió.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['game-maps-irl-privacy-policy'], 'No hi ha cap mecanisme dins de l’app: cal escriure per correu i l’única resposta que es promet és «en un temps raonable».'),
        selfService: f('no', 'official', ['game-maps-irl-privacy-policy'], 'La política remet a desinstal·lar l’aplicació o a escriure al desenvolupador.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Escriu a hello@retryapps.co demanant la supressió de les dades que has facilitat.',
          'Desinstal·la l’aplicació per aturar la recollida automàtica.',
          'Cancel·la la subscripció des de l’App Store si en tens una d’activa.',
        ],
        obstacles: 'No hi ha cap termini compromès i la política adverteix que part de les dades poden ser necessàries perquè l’app funcioni.',
        dataRetained: 'Les dades recollides automàticament es poden conservar fins a 24 mesos i després, de manera agregada.',
        sources: ['game-maps-irl-privacy-policy'],
      },
      userRights: {
        dataExport: f('no', 'official', ['game-maps-irl-privacy-policy'], 'La política no preveu cap exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['game-maps-irl-privacy-policy'], 'Només ofereix una adreça de correu per demanar la supressió; no enumera els drets del RGPD ni cap autoritat de control.', { url: 'mailto:hello@retryapps.co' }),
      },
      controls: {
        adPersonalizationOptOut: unknown(),
        telemetryOptOut: f('no', 'official', ['game-maps-irl-privacy-policy'], 'L’única manera d’aturar la recollida que descriu la política és desinstal·lar l’aplicació.'),
        granularControls: f('no', 'official', ['game-maps-irl-privacy-policy'], 'Els únics controls són els permisos del sistema operatiu.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de visualització de mapes, sense comunicacions privades entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini retryapps.co no publica cap fitxer security.txt vàlid.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política és una plantilla del generador habitual d’aplicacions mòbils, datada l’11 de març del 2025 i idèntica per a la desena d’apps de l’estudi. Diu que el «proveïdor del servei» és Emre Cem Çelik a títol personal, mentre que l’App Store identifica com a venedora Retry Apps Yazılım Limited Şirketi: per a una persona usuària europea no queda clar davant de qui exerceix els drets. La pàgina de la política només es pot llegir amb JavaScript activat. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Qui és el responsable del tractament: l’empresa o la persona física que signa la política?',
          'Què són els identificadors que l’etiqueta declara per rastrejar, si la política no esmenta cap soci publicitari?',
        ],
      },
    },

    /* ═══════════════════════════ Momego ═══════════════════════════ */
    {
      slug: 'momego',
      name: 'Momego',
      company: 'transit-now',
      categories: ['mobilitat-i-transport', 'mapes-i-navegacio'],
      tagline: 'Transport públic amb la ubicació processada només en memòria i sense cap dada vinculada a la identitat',
      summary:
        'Momego és el cas contrari a la resta del lot: una política curta que explica decisions tècniques concretes de minimització. La ubicació es converteix en cel·les H3 i només viatja en memòria mentre dura el trajecte; l’analítica va a un OpenPanel autoallotjat; el correu de suport s’esborra trenta dies després de tancar la incidència. L’etiqueta de l’App Store ho confirma: cap dada vinculada a la identitat i cap dada de rastreig, tot i que integra AppLovin i AdMob per als anuncis.',
      platforms: ['ios', 'android'],
      businessModel: 'advertising',
      jurisdiction: 'Regne Unit',
      links: {
        website: 'https://travelwhiz.app/',
        privacyPolicy: 'https://travelwhiz.app/privacy.html',
        terms: 'https://travelwhiz.app/terms.html',
        appStore: 'https://apps.apple.com/es/app/id1281251210',
      },
      accountRequired: f('no', 'official', ['momego-privacy-policy'], 'La política no descriu cap registre: el correu només es recull si s’escriu al suport.'),
      openSource: f('no', 'official', ['momego-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'En un servei que sap a quina parada ets i cap a on vas, Momego ha triat no guardar-ho: la ubicació es generalitza en cel·les H3, es tracta en memòria i s’esborra en acabar el viatge. El que queda és l’analítica d’ús i els identificadors que reclamen les xarxes publicitàries.',
      dataCollection: [
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['momego-privacy-policy', 'momego-app-store'], note: 'La política diu que es fa servir la cel·la H3 durant el viatge i que no es desa un cop acabat; l’etiqueta la declara per a «publicitat de tercers».' }),
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['momego-app-store'], note: 'Declarada per al funcionament de l’app i com a dada no vinculada a la identitat.' }),
        row('adreca-electronica', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['momego-privacy-policy'], note: 'Només si s’obre una incidència de suport; s’esborra trenta dies després de tancar-la.' }),
        row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'prestacio-del-servei'], sources: ['momego-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['momego-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['momego-app-store'], note: 'Correspon a la categoria «Datos de publicidad» de l’etiqueta, declarada per a publicitat de tercers i no vinculada a la identitat.' }),
        row('adreca-ip', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['momego-privacy-policy'], note: 'La política adverteix que, encara que no s’hi faci publicitat personalitzada, els socis poden deduir la ubicació aproximada per l’adreça IP.' }),
        row('historial-de-compres', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['momego-app-store', 'momego-privacy-policy'], note: 'Les compres dins de l’app es gestionen amb RevenueCat.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['momego-app-store', 'momego-privacy-policy'], note: 'L’analítica va a un tauler d’OpenPanel autoallotjat pel mateix desenvolupador.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['momego-app-store', 'momego-privacy-policy'], note: 'Bugsnag rep el tipus de dispositiu i el país.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['momego-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: f('partial', 'official', ['momego-app-store', 'momego-privacy-policy'], 'L’etiqueta declara «dades de publicitat» per a publicitat de tercers, però no vinculades a la identitat, i la política diu que no permet publicitat personalitzada.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['momego-privacy-policy'], 'AppLovin i Google AdMob per als anuncis, Bugsnag per als errors, RevenueCat per a les compres i Firebase Cloud Messaging per a les notificacions.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['momego-privacy-policy'], 'La política diu expressament que no permet publicitat personalitzada, tot i que els socis poden deduir la ubicació aproximada per l’adreça IP.'),
        profiling: f('no', 'official', ['momego-privacy-policy'], 'No descriu cap perfilat: les dades de trajecte no es conserven.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['momego-privacy-policy'], 'AppLovin, AdMob, Bugsnag, RevenueCat i els serveis de notificacions de Google i Apple; l’analítica es queda a casa.'),
        intraGroupSharing: f('unknown', 'unknown', ['momego-terms'], 'Les condicions d’ús alternen els noms de Transit Now Ltd i BusExpert Ltd sense explicar la relació entre totes dues ni si es comparteixen dades.'),
        dataBrokerSales: unknown('La política no en diu res.'),
        internationalTransfers: unknown('La política no esmenta les transferències internacionals ni el RGPD.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['momego-privacy-policy'], 'Les dades del trajecte s’esborren en acabar el viatge i el correu de suport, trenta dies després de tancar la incidència; per a l’analítica i els informes d’error no dona termini.'),
        dataAfterDeletion: unknown('La política no descriu què queda perquè no descriu cap compte.'),
      },
      accountDeletion: {
        possible: na('L’aplicació no crea cap compte de persona usuària: la política només parla del correu de suport.'),
        selfService: na('No hi ha compte que eliminar.'),
        difficulty: 'unknown',
        dataRetained: 'El correu de suport s’esborra trenta dies després de tancar la incidència.',
        sources: ['momego-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política no esmenta el dret de portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('no', 'official', ['momego-privacy-policy'], 'La política no enumera cap dret del RGPD ni cap autoritat de control; només dona una adreça de contacte.'),
      },
      controls: {
        adPersonalizationOptOut: na('La política declara que no hi ha publicitat personalitzada.'),
        telemetryOptOut: unknown('La política no descriu cap manera de desactivar l’analítica d’OpenPanel.'),
        granularControls: unknown('Els permisos del sistema operatiu són els únics controls que hem pogut verificar.'),
        defaultPosture: 'protective',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació d’informació de transport, sense comunicacions privades entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: f('partial', 'official', ['momego-privacy-policy'], 'Les dades del viatge actiu es processen «en memòria, mai en disc», de manera que no hi ha res a xifrar en repòs mentre dura el trajecte.'),
        mfa: na('No hi ha comptes de persona usuària.'),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini travelwhiz.app no publica cap fitxer security.txt.'),
      },
      alternatives: [
        { app: 'citymapper', comparability: 'equivalent', rationale: 'Cobreix les mateixes ciutats amb més serveis integrats.', tradeOffs: 'Vincula la ubicació i l’adreça de casa a la identitat i les declara per a publicitat de tercers.' },
        { app: 'moovit', comparability: 'equivalent', rationale: 'Planificador de transport públic amb cobertura àmplia a Espanya.', tradeOffs: 'És d’Intel i el seu model es basa en l’explotació de dades de mobilitat.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política té data del 22 de setembre del 2026 i és el document més minimalista del lot en el bon sentit: parla de cel·les H3, de processament en memòria i d’analítica autoallotjada. La contrapartida és que no esmenta el RGPD, no identifica el responsable del tractament, no enumera drets i no diu res de transferències internacionals. Les condicions d’ús, del 2020, alternen els noms de Transit Now Ltd i BusExpert Ltd i enllacen la política amb el domini mal escrit. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Quina és la relació societària entre Transit Now Ltd i BusExpert Ltd?',
          'Quant de temps es conserven les dades d’OpenPanel i de Bugsnag?',
          'Com s’exerceixen els drets del RGPD davant d’aquesta empresa?',
        ],
      },
    },
  ],

  incidents: [],

  storeIds: {
    radarbot: 'com.iteration-mobile.radarbot-free-ww',
    citymapper: 'azdev.citymapper',
    mutuamas: 'es.mutua.mutuamadrilenaiphone',
    smou: 'cat.bcn.smoubcn',
    'ile-de-france-mobilites': 'com.vianavigo.iphone',
    waiis: 'eco.waiis.app',
    'gva-suma-t': 'es.gva.sumat',
    'compartir-ubicacion-gps': 'com.location.sharing.fwhere.mapswithme.android',
    'game-maps-irl': 'com.retryapps.game.maps.irl',
    momego: 'com.totaltransitapp.totaltransit',
  },
}
