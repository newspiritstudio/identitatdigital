import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/**
 * Lot 38 de la segona onada: deu serveis de viatge i de mobilitat del top
 * gratuït espanyol. Hi ha dues plataformes d’allotjament (Booking i Airbnb),
 * tres agències i companyies aèries (Trip.com, eDreams i Vueling), tres
 * serveis de mobilitat compartida (Cabify, BlaBlaCar i Tribbu), l’operadora
 * ferroviària pública (Renfe) i una botiga d’eSIM (Holafly).
 *
 * El fil comú és que un itinerari és una dada especialment reveladora: diu on
 * ets, amb qui viatges, quan no ets a casa i quina capacitat econòmica tens.
 * La segona troballa transversal és la desigualtat documental: els grups
 * internacionals publiquen polítiques llargues i centres de privadesa, mentre
 * que alguns serveis espanyols amb milions de descàrregues gairebé no
 * publiquen res que es pugui llegir sense executar JavaScript.
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'booking-com-bv',
      name: 'Booking.com',
      legalName: 'Booking.com B.V.',
      description:
        'Agència de viatges en línia amb seu a Amsterdam, filial del grup nord-americà Booking Holdings, al qual també pertanyen Agoda, OpenTable i Kayak. És plataforma molt gran en línia als efectes del Reglament de serveis digitals i la societat neerlandesa actua com a representant del grup a la Unió Europea.',
      headquartersCountry: 'NL',
      euEstablishment: 'NL',
      leadSupervisoryAuthority: 'Autoriteit Persoonsgegevens',
      ownership: 'subsidiary',
      foundedYear: 1996,
      primaryRevenueModel: 'commerce',
      website: 'https://www.booking.com/',
      productDomains: ['booking.com'],
      privacyContact: 'dataprotectionoffice@booking.com',
    },
    {
      slug: 'airbnb-ireland',
      name: 'Airbnb',
      legalName: 'Airbnb Ireland UC',
      description:
        'Societat irlandesa del grup Airbnb, Inc. que actua com a responsable del tractament per a les persones usuàries de fora dels Estats Units. Els pagaments els gestiona Airbnb Payments Luxembourg S.A. A l’App Store, l’editora que hi consta és la matriu nord-americana.',
      headquartersCountry: 'US',
      euEstablishment: 'IE',
      leadSupervisoryAuthority: 'Data Protection Commission',
      ownership: 'subsidiary',
      foundedYear: 2008,
      primaryRevenueModel: 'commerce',
      website: 'https://www.airbnb.es/',
      productDomains: ['airbnb.com', 'airbnb.es'],
      privacyContact: 'DPO@airbnb.com',
    },
    {
      slug: 'holafly-limited',
      name: 'Holafly',
      legalName: 'Holafly Limited',
      description:
        'Venedora de targetes eSIM per a viatges. Malgrat l’origen i la marca espanyols, el responsable del tractament és una societat irlandesa amb domicili a Dublín i número d’empresa 745325, i l’autoritat de control de referència és la irlandesa.',
      headquartersCountry: 'IE',
      euEstablishment: 'IE',
      leadSupervisoryAuthority: 'Data Protection Commission',
      ownership: 'private',
      primaryRevenueModel: 'commerce',
      website: 'https://esim.holafly.com/',
      productDomains: ['holafly.com'],
      privacyContact: 'dpo@holafly.com',
    },
    {
      slug: 'trip-com-travel-singapore',
      name: 'Trip.com',
      legalName: 'Trip.com Travel Singapore Pte. Ltd.',
      description:
        'Societat singapuresa responsable del tractament de la plataforma Trip.com. Forma part de Trip.com Group Limited, cotitzat al Nasdaq i a la borsa de Hong Kong, amb seu administrativa a Xangai i propietari també de Ctrip, Qunar i Skyscanner. El representant a la Unió Europea segons l’article 27 del RGPD és Travix Netherland BV.',
      headquartersCountry: 'SG',
      euEstablishment: 'NL',
      ownership: 'subsidiary',
      foundedYear: 1999,
      primaryRevenueModel: 'commerce',
      website: 'https://es.trip.com/',
      productDomains: ['trip.com', 'ctrip.com'],
      privacyContact: 'es_dataprotection@trip.com',
    },
    {
      slug: 'vacaciones-edreams',
      name: 'eDreams',
      legalName: 'Vacaciones eDreams, S.L.U.',
      description:
        'Agència de viatges en línia espanyola, amb NIF B61965778 i seu a Madrid, integrada al grup luxemburguès cotitzat eDreams ODIGEO, que també explota Opodo, GO Voyages i Travellink. La fitxa de comerciant de l’App Store identifica, en canvi, eDreams International Network, S.L., amb domicili a Barcelona.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'subsidiary',
      foundedYear: 1999,
      primaryRevenueModel: 'commerce',
      website: 'https://www.edreams.es/',
      productDomains: ['edreams.es', 'edreams.com', 'opodo.es'],
    },
    {
      slug: 'cabify-espana',
      name: 'Cabify',
      legalName: 'Cabify España, S.L.',
      description:
        'Plataforma espanyola de vehicles amb conductor i d’enviaments, nascuda a Madrid el 2011 i present sobretot a Espanya i a l’Amèrica Llatina. La política de privadesa espanyola identifica una vintena llarga de societats del grup que poden accedir a les dades de les persones usuàries.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      foundedYear: 2011,
      primaryRevenueModel: 'commerce',
      website: 'https://cabify.com/',
      productDomains: ['cabify.com'],
      privacyContact: 'dpo@cabify.com',
    },
    {
      slug: 'comuto',
      name: 'BlaBlaCar',
      legalName: 'Comuto SA',
      description:
        'Societat francesa que explota la plataforma de cotxe compartit de llarga distància BlaBlaCar i, des de la compra d’Ouibus i d’altres operadors, també la venda de bitllets d’autobús i de tren. A l’App Store hi consta com a editora amb el nom «Comuto».',
      headquartersCountry: 'FR',
      euEstablishment: 'FR',
      leadSupervisoryAuthority: 'Commission nationale de l’informatique et des libertés',
      ownership: 'private',
      foundedYear: 2006,
      primaryRevenueModel: 'mixed',
      website: 'https://www.blablacar.es/',
      productDomains: ['blablacar.com', 'blablacar.es', 'blablacar.fr'],
    },
    {
      slug: 'hoop-solutions',
      name: 'Tribbu',
      legalName: 'Hoop Solutions, S.L.',
      description:
        'Empresa madrilenya que explota Tribbu, abans Hoop Carpool: una aplicació de cotxe compartit per a trajectes quotidians pensada per a universitats, polígons i grans empreses, que sovint la contracten per gestionar-ne l’aparcament. El domini històric hoopcarpool.com continua allotjant la política de privadesa.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://www.tribbuapp.com/',
      productDomains: ['tribbuapp.com', 'hoopcarpool.com'],
      privacyContact: 'dataprotection@hoopcarpool.com',
    },
    {
      slug: 'renfe-viajeros',
      name: 'Renfe Viajeros',
      legalName: 'Renfe Viajeros, S.M.E., S.A.',
      description:
        'Societat mercantil estatal del grup Renfe que presta els serveis de transport de viatgers per ferrocarril a Espanya: Cercanías, Rodalies, Mitja Distància, AVE i Avlo. És l’entitat responsable del tractament de les dades de l’aplicació i del web de venda de bitllets.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'state',
      foundedYear: 2013,
      primaryRevenueModel: 'commerce',
      website: 'https://www.renfe.com/',
      productDomains: ['renfe.com', 'renfe.es'],
      privacyContact: 'dpd@renfe.es',
    },
    {
      slug: 'vueling-airlines',
      name: 'Vueling',
      legalName: 'Vueling Airlines, S.A.',
      description:
        'Companyia aèria de baix cost amb base principal a Barcelona i seu corporativa a Viladecans. Forma part del grup International Airlines Group, al qual també pertanyen Iberia i British Airways, i el seu programa de fidelització acumula Avios, la moneda compartida del grup.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'subsidiary',
      foundedYear: 2004,
      primaryRevenueModel: 'commerce',
      website: 'https://www.vueling.com/',
      productDomains: ['vueling.com', 'vuelingclub.com'],
    },
  ],
  sources: [
    /* ───────────────────────── Booking.com ───────────────────────── */
    s('booking-privacy-policy', 'Política de privacidad para viajeros', 'https://www.booking.com/content/privacy.es.html', 'Booking.com B.V.', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-08-01',
      summary:
        'Política vigent per a les persones viatgeres. En traiem la taula de finalitats de la A a la J, les bases jurídiques, el perfil resumit que rep l’allotjament, l’entrenament de models d’IA, la compartició amb Booking Holdings i els dos únics terminis de conservació concrets.',
    }),
    s('booking-dsar-form', 'Solicitudes del interesado para clientes de Booking.com', 'https://www.booking.com/content/dsar.es.html', 'Booking.com B.V.', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Formulari d’exercici de drets. És l’única via documentada per eliminar el compte, per demanar-ne una còpia i per oposar-se a la compartició amb les empreses del grup.',
    }),
    s('booking-bcr-summary', 'Booking.com Binding Corporate Rules — Summary', 'https://q-xx.bstatic.com/static/docs/bcr-summary/BCR_summary_v1.pdf', 'Booking.com B.V.', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Resum públic de les normes corporatives vinculants del grup. Acredita el mecanisme de transferència internacional dins de Booking Holdings.',
    }),
    s('booking-dsa', 'Booking.com: Reglamento de Servicios Digitales', 'https://www.booking.com/content/dsa.es.html', 'Booking.com B.V.', 'transparency-report', 'primary', {
      language: 'es',
      summary:
        'Pàgina de compliment del Reglament de serveis digitals. Confirma la condició de plataforma molt gran en línia i enllaça els informes de transparència, l’avaluació de riscos i l’auditoria independent.',
    }),
    s('booking-app-store', 'Booking.com: hoteles y más — Privacidad de la app', 'https://apps.apple.com/es/app/id367003839', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per l’editora. Només hi consten identificadors, i com a dada no vinculada amb la identitat, cosa que contrasta amb tot el que descriu la política.',
    }),
    s('booking-security-txt', 'security.txt de booking.com', 'https://www.booking.com/.well-known/security.txt', 'Booking.com B.V.', 'technical-doc', 'primary', {
      language: 'en',
      summary:
        'Fitxer de contacte de seguretat. Remet al programa de recompenses a HackerOne, però el camp Expires marca el 31 de desembre de 2025 i per tant és caducat.',
    }),
    s('booking-ap-fine-2021', 'Booking.com fined for delay in reporting data breach', 'https://www.autoriteitpersoonsgegevens.nl/en/current/bookingcom-fined-for-delay-in-reporting-data-breach', 'Autoriteit Persoonsgegevens', 'regulator', 'authority', {
      language: 'en',
      publishedAt: '2021-03-31',
      summary:
        'Nota oficial de l’autoritat neerlandesa sobre la sanció de 475.000 euros per notificar amb vint-i-dos dies de retard una bretxa que va afectar 4.109 persones. Hi consta que l’empresa no la va recórrer.',
    }),

    /* ───────────────────────── Airbnb ───────────────────────── */
    s('airbnb-privacy-policy', 'Política de privacidad de Airbnb', 'https://www.airbnb.es/help/article/3175', 'Airbnb, Inc.', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-02-05',
      summary:
        'Document principal de privadesa. En traiem les categories de dades, la verificació biomètrica, l’anàlisi de les comunicacions, les obligacions fiscals de la DAC 7 i la compartició amb amfitrions, asseguradores i autoritats.',
    }),
    s('airbnb-eu-supplement', 'Suplemento de privacidad para fuera de Estados Unidos', 'https://www.airbnb.es/help/article/2860', 'Airbnb Ireland UC', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Suplement aplicable a les persones residents a la Unió Europea. És l’únic document que conté les bases jurídiques del RGPD, el mecanisme de transferència internacional i els límits del dret de supressió.',
    }),
    s('airbnb-cookies-policy', 'Política de cookies de Airbnb', 'https://www.airbnb.es/help/article/2866', 'Airbnb, Inc.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Descriu les galetes, els píxels i els SDK de tercers, cita Google i Facebook com a socis publicitaris i remet als controls de seguiment d’iOS i d’Android.',
    }),
    s('airbnb-delete-account', '¿Cómo puedo desactivar o eliminar mi cuenta?', 'https://www.airbnb.es/help/article/240', 'Airbnb, Inc.', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Article d’ajuda amb els passos reals per desactivar el compte de manera reversible o eliminar-lo definitivament des de la configuració, i amb els requisits previs.',
    }),
    s('airbnb-inactive-accounts', 'Política de Airbnb sobre las cuentas inactivas', 'https://www.airbnb.es/help/article/3846', 'Airbnb, Inc.', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Fixa l’eliminació automàtica del compte als quatre anys d’inactivitat, o a l’any si no s’ha utilitzat mai, amb avisos trenta dies i quaranta-vuit hores abans.',
    }),
    s('airbnb-privacy-settings', 'Configuración de privacidad de Airbnb', 'https://www.airbnb.es/help/article/2273', 'Airbnb, Inc.', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Descriu el panell de privadesa: descàrrega de dades, preferències de comunicacions comercials, configuració de galetes i eliminació del compte.',
    }),
    s('airbnb-ai-preferences', 'Preferencias de IA', 'https://www.airbnb.es/help/article/4097', 'Airbnb, Inc.', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Explica com excloure les dades del desenvolupament de models d’intel·ligència artificial des de la configuració del compte.',
    }),
    s('airbnb-account-security', 'Ayuda a mantener tu cuenta segura', 'https://www.airbnb.es/help/article/501', 'Airbnb, Inc.', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Descriu la verificació addicional per codi quan s’inicia sessió des d’un dispositiu o lloc nou i les alertes d’intent d’accés. No hi ha segona passa sempre activa ni claus d’accés.',
    }),
    s('airbnb-security-txt', 'security.txt d’Airbnb', 'https://www.airbnb.com/.well-known/security.txt', 'Airbnb, Inc.', 'technical-doc', 'primary', {
      language: 'en',
      summary:
        'Fitxer complet amb contacte, política, canònic i caducitat el juny del 2027. Remet al programa públic de recompenses a HackerOne.',
    }),
    s('airbnb-transparency-reports', 'Airbnb Law Enforcement Transparency Reports', 'https://news.airbnb.com/transparency/', 'Airbnb Newsroom', 'transparency-report', 'primary', {
      language: 'en',
      summary:
        'Sèrie d’informes anuals, del 2016 ençà, sobre les peticions de dades rebudes de les forces de seguretat i la resposta que hi dona la companyia.',
    }),
    s('airbnb-app-store', 'Airbnb — Privacidad de la app', 'https://apps.apple.com/es/app/id401626263', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per Airbnb, Inc. Declara onze categories, totes vinculades amb la identitat, i cap dada sota «Datos utilizados para rastrearte».',
    }),

    /* ───────────────────────── Holafly ───────────────────────── */
    s('holafly-privacy-policy', 'Política de privacidad', 'https://esim.holafly.com/es/politica-de-privacidad/', 'Holafly Limited', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-07-22',
      summary:
        'Política vigent. En traiem el responsable irlandès i el número d’empresa, les bases jurídiques, els perfils de màrqueting, la publicitat programàtica, el tractament dels identificadors de xarxa pels operadors i el termini fiscal de set anys.',
    }),
    s('holafly-app-store', 'Holafly eSIM: datos ilimitados — Privacidad de la app', 'https://apps.apple.com/es/app/id1629600786', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa i fitxa de comerciant. Confirma que l’empresa responsable és HOLAFLY LIMITED, amb domicili a Dublín, i que l’enllaç a la política que hi consta no funciona.',
    }),

    /* ───────────────────────── Trip.com ───────────────────────── */
    s('trip-com-privacy-policy', 'Aviso de privacidad de Trip.com', 'https://es.trip.com/contents/service-guideline/privacy-policy.html?locale=es-ES', 'Trip.com Travel Singapore Pte. Ltd.', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2025-09-16',
      summary:
        'Política aplicable a Espanya. En traiem el responsable singapurès, el representant a la Unió Europea, les categories de dades incloses les de l’article 9, els socis publicitaris, les certificacions autodeclarades i una secció de transferències que no anomena cap país.',
    }),
    s('trip-com-personalization', 'Contenido personalizado generado con IA', 'https://www.trip.com/pages/personalization-settings', 'Trip.com', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Pàgina de configuració per desactivar les recomanacions personalitzades generades amb intel·ligència artificial i la compartició de perfils amb socis d’IA de tercers.',
    }),
    s('trip-com-account-cancellation', 'Account Cancellation Page', 'https://www.trip.com/m/passport/cancelaccount', 'Trip.com', 'support-doc', 'primary', {
      language: 'en',
      summary:
        'Pàgina dedicada a la cancel·lació del compte. Existeix i és pública, però el contingut es renderitza per JavaScript i no n’hem pogut verificar els passos ni els terminis.',
    }),
    s('trip-com-src', 'Trip.com Security Response Center', 'https://src.trip.com/', 'Trip.com Group', 'technical-doc', 'primary', {
      language: 'en',
      summary:
        'Centre de resposta de seguretat del grup, enllaçat des del peu del web. És el canal públic per comunicar vulnerabilitats i complementa el programa a HackerOne.',
    }),
    s('trip-com-app-store', 'Trip.com: Vuelo, Tren y Hotel — Privacidad de la app', 'https://apps.apple.com/es/app/id681752345', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per l’editora. Declara dotze categories, totes vinculades amb la identitat o utilitzades per rastrejar, i cap dada desvinculada.',
    }),
    s('trip-com-ctrip-breach-2014', 'Ctrip Concedes Credit Card Breach at a Very Inopportune Moment', 'https://skift.com/2014/03/24/ctrip-concedes-credit-card-breach-at-a-very-inopportune-moment/', 'Skift', 'press', 'secondary', {
      language: 'en',
      publishedAt: '2014-03-24',
      summary:
        'Cobertura de l’exposició de dades de targeta de crèdit a Ctrip, reconeguda per la mateixa empresa, amb el nombre de comptes notificats.',
    }),

    /* ───────────────────────── eDreams ───────────────────────── */
    s('edreams-privacy-policy', 'Aviso de privacidad', 'https://www.edreams.es/politica-de-privacidad/', 'Vacaciones eDreams, S.L.U.', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2023-06-01',
      summary:
        'Política vigent per a Espanya, sense revisar des del juny del 2023 i servida per JavaScript des d’un fitxer JSON. En traiem el responsable i el NIF, els terminis de conservació detallats, les oposicions per tractament i la invocació de l’excepció de l’article 49 per als sistemes globals de distribució.',
    }),
    s('edreams-app-store', 'eDreams: Vuelos y hoteles — Privacidad de la app', 'https://apps.apple.com/es/app/id551367321', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per l’editora. Declara cinc categories sota «Datos usados para rastrearte», el conjunt més ampli del lot.',
    }),
    s('edreams-agcm-2026', 'Sanzione di 9 milioni di euro a eDreams per pratiche commerciali scorrette', 'https://www.agcm.it/media-e-comunicazione/dettaglio?id=3ed1d129-c368-404f-99bf-a3e1c8c7beea', 'Autorità Garante della Concorrenza e del Mercato', 'regulator', 'authority', {
      language: 'other',
      publishedAt: '2026-02-04',
      summary:
        'Comunicat oficial de l’expedient PS12853. Acredita els patrons foscos i les tècniques de pressió per induir la subscripció Prime i l’obstaculització del dret de desistiment.',
    }),

    /* ───────────────────────── Cabify ───────────────────────── */
    s('cabify-privacy-policy', 'Política de Privacidad', 'https://cabify.com/es/privacy', 'Cabify España, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política aplicable a Espanya. En traiem el responsable del tractament, les categories de dades, les bases jurídiques, el perfilat per a promocions, la llista d’entitats del grup, les transferències internacionals i la regla d’esborrat dels comptes inactius.',
    }),
    s('cabify-app-store', 'Cabify, viaja como te mereces — Privacidad de la app', 'https://apps.apple.com/es/app/id476087442', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per l’editora. És la font de la matriu de dades i de la declaració que la ubicació, els identificadors, les dades d’ús i els diagnòstics es fan servir per rastrejar.',
    }),
    s('cabify-security-txt', 'security.txt de cabify.com', 'https://cabify.com/.well-known/security.txt', 'Cabify', 'technical-doc', 'primary', {
      language: 'en',
      summary:
        'Fitxer de contacte de seguretat signat amb PGP. Dona una adreça de recepció de vulnerabilitats, una clau de xifratge i l’enllaç a la política del programa de recompenses.',
    }),
    s('cabify-bounty-policy', 'BB Program Policy', 'https://cabify.com/.well-known/bounty.txt', 'Cabify', 'technical-doc', 'primary', {
      language: 'en',
      summary:
        'Política del programa públic de recompenses per vulnerabilitats: matriu de risc, abast i criteris de recompensa. Confirma que el programa és obert i que no cal invitació.',
    }),
    s('cabify-play-data-safety', 'Cabify — Seguridad de los datos', 'https://play.google.com/store/apps/details?id=com.cabify.rider', 'Google', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Secció «Seguridad de los datos» de Google Play. Declara que l’aplicació comparteix dades personals, d’activitat i de rendiment amb tercers, que les xifra en trànsit i que es pot demanar l’eliminació de les dades.',
    }),

    /* ───────────────────────── BlaBlaCar ───────────────────────── */
    s('blablacar-app-store', 'BlaBlaCar: Viaja por menos — Privacidad de la app', 'https://apps.apple.com/es/app/id341329033', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per Comuto. És la font més detallada que hem pogut llegir d’aquest servei: hi consten publicitat de tercers, dades sensibles i dades de salut sota la finalitat de funcionament de l’aplicació.',
    }),
    s('blablacar-play-data-safety', 'BlaBlaCar — Seguridad de los datos', 'https://play.google.com/store/apps/details?id=com.comuto', 'Google', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Secció «Seguridad de los datos» de Google Play. Hi diu que no es comparteixen dades amb tercers, que es xifren en trànsit i que se’n pot demanar l’eliminació. Contradiu l’etiqueta de l’App Store, que sí que declara publicitat de tercers.',
    }),
    s('blablacar-security-txt', 'SECURITY.TXT for BlaBlaCar', 'https://www.blablacar.es/.well-known/security.txt', 'BlaBlaCar', 'technical-doc', 'primary', {
      language: 'en',
      summary:
        'Fitxer de contacte de seguretat del domini espanyol. Remet el report de vulnerabilitats al programa públic de recompenses de BlaBlaCar a YesWeHack.',
    }),

    /* ───────────────────────── Tribbu ───────────────────────── */
    s('tribbu-privacy-policy', 'Política de privacidad', 'https://www.hoopcarpool.com/privacidad', 'Hoop Solutions, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2025-06-19',
      summary:
        'Política vigent del servei, allotjada encara al domini antic. En traiem el responsable i el domicili, les dades del vehicle, la restricció de la geolocalització al primer pla, la cessió a universitats i empreses, els proveïdors d’analítica i els terminis de conservació.',
    }),
    s('tribbu-app-store', 'TRIBBU - Compartir coche — Privacidad de la app', 'https://apps.apple.com/es/app/id1323765310', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per Hoop Solutions. Hi consta que els identificadors es fan servir per rastrejar, cosa que la política no explica.',
    }),
    s('tribbu-play-data-safety', 'Tribbu — Seguridad de los datos', 'https://play.google.com/store/apps/details?id=com.tribbu.app', 'Google', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Secció «Seguridad de los datos» de Google Play. Declara set tipus de dades recollides, inclosos els missatges, sense compartició amb tercers i amb xifratge en trànsit.',
    }),

    /* ───────────────────────── Renfe ───────────────────────── */
    s('renfe-privacy-policy', 'Política de privacidad App Renfe', 'https://www.renfe.com/es/es/ayuda/informacion-legal-viajeros/privacidad-cookies/privacidad-apps/politica-de-privacidad-app-renfe', 'Renfe Viajeros, S.M.E., S.A.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política específica de l’aplicació. En traiem el responsable i el NIF, el contacte del delegat de protecció de dades, les finalitats amb la base jurídica de cadascuna, la cessió a Renfe-Operadora i el canal d’exercici de drets.',
    }),
    s('renfe-app-store', 'Renfe — Privacidad de la app', 'https://apps.apple.com/es/app/id1544224672', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per Renfe Viajeros. No hi ha cap categoria sota «Datos utilizados para rastrearte» i la ubicació es declara com a dada no vinculada amb la identitat.',
    }),
    s('renfe-play-data-safety', 'Renfe — Seguridad de los datos', 'https://play.google.com/store/apps/details?id=com.renfeviajeros.ticket', 'Google', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Secció «Seguridad de los datos» de Google Play. Declara que no es comparteixen dades amb tercers, que es xifren en trànsit i que se’n pot demanar l’eliminació.',
    }),

    /* ───────────────────────── Vueling ───────────────────────── */
    s('vueling-privacy-policy', 'Política de privacidad', 'https://www.vueling.com/es/legal/politica-de-privacidad', 'Vueling Airlines, S.A.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Única pàgina de privadesa publicada al web de la companyia. Conté el compromís general, el responsable i l’adreça postal del delegat de protecció de dades, i remet a una «Política de Privacidad» completa que no hem trobat publicada a cap URL.',
    }),
    s('vueling-app-store', 'Vueling Airlines-Cheap Flights — Privacidad de la app', 'https://apps.apple.com/es/app/id445818820', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per Vueling. És la font de la matriu de dades i de la declaració que les compres i les dades de contacte es fan servir per rastrejar.',
    }),
    s('vueling-website-terms', 'Condiciones de uso del sitio web', 'https://www.vueling.com/es/atencion-al-cliente/condiciones-de-uso-del-sitio-web', 'Vueling Airlines, S.A.', 'terms', 'primary', {
      language: 'es',
      summary:
        'Condicions generals d’ús del web. Identifiquen Vueling Airlines, S.A. com a titular i remeten la resta d’informació a la política de privadesa.',
    }),
  ],
  apps: [
    /* ═══════════════════════════ Cabify ═══════════════════════════ */
    {
      slug: 'cabify',
      name: 'Cabify',
      company: 'cabify-espana',
      categories: ['mobilitat-i-transport'],
      tagline: 'Baixa autoservei i esborrat automàtic als cinc anys, però ubicació precisa declarada com a dada de seguiment',
      summary:
        'Cabify és dels pocs serveis d’aquest lot que diu explícitament què passa amb un compte que s’abandona: als seixanta mesos d’inactivitat s’elimina sol. A canvi, l’etiqueta de l’App Store declara la ubicació entre les dades que es fan servir per rastrejar, i la política reconeix que s’elabora un perfil a partir de l’historial de viatges i dels imports gastats per decidir quines promocions es mostren.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      userBase: 'Present a Espanya i a diversos països de l’Amèrica Llatina',
      links: {
        website: 'https://cabify.com/',
        privacyPolicy: 'https://cabify.com/es/privacy',
        appStore: 'https://apps.apple.com/es/app/id476087442',
      },
      accountRequired: f('yes', 'official', ['cabify-privacy-policy'], 'Cal registrar-se amb nom, correu, telèfon i mitjà de pagament per demanar un viatge.'),
      openSource: f('no', 'editorial', [], 'Aplicació privativa: no consta cap publicació del codi font.', { licence: 'Privativa' }),
      dataSummary:
        'L’historial de viatges és un diari de moviments: on vius, on treballes, a quina hora tornes a casa i a quins domicilis vas de nit. Sumat als imports gastats, que la política diu que serveixen per perfilar, dibuixa també un nivell de renda.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['cabify-privacy-policy', 'cabify-app-store'], note: 'Es comparteix amb la persona conductora que fa el servei.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['cabify-privacy-policy', 'cabify-app-store'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['cabify-privacy-policy', 'cabify-app-store'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['cabify-privacy-policy'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['cabify-privacy-policy'], note: 'Els punts de recollida i de destinació equivalen a adreces concretes.' }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['cabify-privacy-policy', 'cabify-app-store'], note: 'La política diu que s’accedeix «a los sistemas de geoposicionamiento de tu dispositivo móvil» per seguir el viatge en temps real.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['cabify-privacy-policy', 'cabify-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['cabify-privacy-policy'], note: 'La política parla del «histórico de viajes» i dels «importes incurridos» com a base del perfil.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['cabify-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['cabify-app-store', 'cabify-play-data-safety'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['cabify-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['cabify-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['cabify-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['cabify-app-store'] }),
        row('xarxa-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['cabify-privacy-policy'], note: 'En els enviaments es demanen les dades de la persona destinatària, que la política assumeix comunicades amb el seu consentiment.' }),
        row('dades-biometriques', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['cabify-privacy-policy'], note: 'La política no preveu cap tractament biomètric de les persones usuàries.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['cabify-app-store'], 'L’etiqueta declara ubicació, identificadors, dades d’ús i diagnòstics sota «Datos utilizados para rastrearte».'),
        advertisingIdentifiers: f('yes', 'official', ['cabify-app-store'], 'Els identificadors de dispositiu i d’usuari es declaren com a dades de seguiment.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['cabify-play-data-safety'], 'Google Play declara compartició de dades personals, d’activitat i de rendiment amb tercers.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['cabify-privacy-policy'], 'La política diu que es mostren «noticias y promociones basadas en tu perfil» i que la personalització dels anuncis es pot desactivar.'),
        profiling: f('yes', 'official', ['cabify-privacy-policy'], 'Es reconeix la creació d’un perfil a partir de l’historial de viatges i dels imports gastats.'),
        aiTraining: unknown('La política no diu si les dades s’utilitzen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['cabify-privacy-policy', 'cabify-play-data-safety'], 'Persones conductores i les seves empreses, proveïdors de pagament i de prevenció del frau, i autoritats públiques.'),
        intraGroupSharing: f('yes', 'official', ['cabify-privacy-policy'], 'La política enumera una vintena llarga d’entitats del grup Cabify que poden accedir a les dades.'),
        dataBrokerSales: unknown('No consta cap venda de dades a intermediaris ni cap desmentiment explícit.'),
        internationalTransfers: f('yes', 'official', ['cabify-privacy-policy'], 'Part de les entitats del grup són fora de l’Espai Econòmic Europeu, sobretot a l’Amèrica Llatina.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['cabify-privacy-policy'], 'Els terminis s’expressen sobretot per finalitat («hasta que elimines tu cuenta»), però n’hi ha un de concret: els comptes sense activitat durant més de seixanta mesos s’eliminen automàticament.'),
        dataAfterDeletion: unknown('La política no detalla quines dades sobreviuen a l’eliminació del compte més enllà de les obligacions fiscals implícites.'),
        periods: [
          { period: 'Els comptes inactius durant més de 60 mesos s’eliminen automàticament.', sources: ['cabify-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['cabify-privacy-policy', 'cabify-play-data-safety']),
        selfService: f('yes', 'official', ['cabify-privacy-policy'], 'La política indica que el compte s’elimina des de l’apartat «Mi cuenta» del menú de l’aplicació o del web.'),
        difficulty: 'easy',
        steps: [
          'Obre l’aplicació i desplega el menú lateral.',
          'Entra a «Mi cuenta».',
          'Tria l’opció d’eliminar el compte i confirma-ho.',
          'Si l’opció no apareix, escriu a dpo@cabify.com invocant el dret de supressió de l’article 17 del RGPD.',
        ],
        dataRetained: 'La política no concreta què es conserva; cal comptar amb les dades de facturació dels viatges ja fets.',
        sources: ['cabify-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['cabify-privacy-policy'], 'El dret de portabilitat es reconeix, però s’exerceix pel centre d’ajuda i cal adjuntar una còpia del document d’identitat: no hi ha descàrrega autoservei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['cabify-privacy-policy'], 'Canal explícit al delegat de protecció de dades.', {
          url: 'mailto:dpo@cabify.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['cabify-privacy-policy'], 'La política diu que es pot «desactivar la personalización de los anuncios» i retirar el consentiment comercial.'),
        telemetryOptOut: unknown('No consta cap control per desactivar l’analítica d’ús.'),
        granularControls: f('partial', 'official', ['cabify-privacy-policy'], 'Hi ha control sobre les comunicacions comercials i la personalització, però no un panell de privadesa per finalitat.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem documentat cap patró fosc concret en el camí de sortida ni en el consentiment.'),
      },
      security: {
        e2ee: na('El servei no transporta comunicacions privades; el contacte amb la persona conductora passa pel servidor.'),
        transportEncryption: f('yes', 'official', ['cabify-play-data-safety'], 'Google Play declara que les dades es xifren en trànsit.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: unknown('No hem trobat documentació sobre la verificació en dos passos del compte de passatger.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: f('yes', 'official', ['cabify-security-txt', 'cabify-bounty-policy'], 'Programa públic de recompenses amb política pròpia, matriu de risc i clau PGP per xifrar els informes.', {
          url: 'https://cabify.com/.well-known/bounty.txt',
        }),
        vulnerabilityDisclosure: f('yes', 'official', ['cabify-security-txt'], 'security.txt signat amb PGP i amb data de caducitat vigent.'),
      },
      alternatives: [
        {
          app: 'renfe',
          comparability: 'partial',
          rationale:
            'Per a desplaçaments interurbans, el tren declara molt menys seguiment: l’etiqueta de Renfe no inclou cap dada sota «Datos utilizados para rastrearte».',
          tradeOffs: 'No serveix per a trajectes urbans porta a porta ni per a horaris nocturns.',
        },
        {
          app: 'blablacar',
          comparability: 'partial',
          rationale: 'Cobreix el desplaçament de llarga distància compartint cotxe, amb un cost menor.',
          tradeOffs: 'L’etiqueta de l’App Store de BlaBlaCar declara més publicitat de tercers que la de Cabify.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La regla dels seixanta mesos d’inactivitat és poc habitual i val la pena destacar-la: fixa un límit real a la conservació sense que la persona hagi de fer res. En canvi, la política no quantifica cap altre termini.',
        openQuestions: [
          'Quines dades sobreviuen exactament a l’eliminació del compte i durant quant de temps?',
          'Ofereix Cabify verificació en dos passos per als comptes de passatger?',
        ],
      },
    },

    /* ═══════════════════════════ BlaBlaCar ═══════════════════════════ */
    {
      slug: 'blablacar',
      name: 'BlaBlaCar',
      company: 'comuto',
      categories: ['mobilitat-i-transport', 'viatges-i-allotjament'],
      tagline: 'Les dues botigues declaren coses oposades i la política de privadesa bloqueja la lectura automatitzada',
      summary:
        'BlaBlaCar és el cas més contradictori del lot. L’etiqueta de l’App Store declara publicitat de tercers, ubicació i fins i tot dades sensibles i de salut, mentre que la fitxa de Google Play afirma que no es comparteix cap dada amb tercers. La política de privadesa, que hauria de resoldre la contradicció, està darrere d’un mur antirobots que impedeix llegir-la sense navegador.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'França',
      userBase: 'Desenes de milions de persones usuàries a Europa i a l’Amèrica Llatina',
      links: {
        website: 'https://www.blablacar.es/',
        privacyPolicy: 'https://www.blablacar.com/about-us/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id341329033',
      },
      accountRequired: f('yes', 'official', ['blablacar-app-store'], 'L’etiqueta declara la recollida de correu electrònic i d’identificador d’usuari per al funcionament de l’aplicació: no es pot reservar una plaça sense compte.'),
      openSource: f('no', 'editorial', [], 'Aplicació privativa: no consta cap publicació del codi font del servei.', { licence: 'Privativa' }),
      dataSummary:
        'Un trajecte compartit revela l’origen, la destinació, l’hora i amb qui viatges. Afegit al perfil públic amb foto i a les valoracions, el servei conserva una xarxa de relacions i un historial de desplaçaments que poques aplicacions de transport tenen.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['blablacar-app-store'], note: 'L’etiqueta la situa també sota la finalitat de publicitat o màrqueting de l’editora.' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['blablacar-app-store'], note: 'El nom i la foto són visibles per a la resta de persones del trajecte.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['blablacar-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['blablacar-app-store'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['blablacar-app-store'], note: 'És una de les dues categories declarades sota «Datos utilizados para rastrearte».' }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['blablacar-app-store'], note: 'Declarada només sota la finalitat de funcionament de l’aplicació.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['blablacar-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['blablacar-app-store'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['blablacar-app-store'] }),
        row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['blablacar-app-store'], note: 'Les valoracions i els missatges entre persones usuàries són contingut d’usuari declarat.' }),
        row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['blablacar-app-store'], note: 'L’etiqueta declara dades de salut i de forma física sota la finalitat de funcionament de l’aplicació, sense explicar-ne el motiu.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['blablacar-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['blablacar-app-store'], 'L’etiqueta declara ubicació i identificadors sota «Datos utilizados para rastrearte».'),
        advertisingIdentifiers: f('yes', 'official', ['blablacar-app-store'], 'Identificador d’usuari i de dispositiu, declarats també per a publicitat de tercers.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['blablacar-app-store'], 'Hi ha una finalitat «Publicidad de terceros» amb ubicació, identificadors i dades d’ús. Google Play, en canvi, diu que no es comparteix res amb tercers.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['blablacar-app-store'], 'L’etiqueta declara les finalitats de publicitat de tercers i de publicitat o màrqueting de l’editora.'),
        profiling: f('partial', 'official', ['blablacar-app-store'], 'Hi ha una finalitat de «Personalización del producto» amb identificadors i dades d’ús, però sense cap descripció del perfilat.'),
        aiTraining: unknown('No hem pogut llegir la política de privadesa, que és on constaria.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['blablacar-app-store'], 'La finalitat de publicitat de tercers implica compartició. La fitxa de Google Play ho contradiu.'),
        intraGroupSharing: unknown('No hem pogut llegir la política, que és on constarien les societats del grup Comuto.'),
        dataBrokerSales: unknown('No hi ha informació pública llegible sobre la venda de dades.'),
        internationalTransfers: unknown('No hem pogut llegir la política, que és on constaria el mecanisme de transferència.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència publicat.'),
      },
      retention: {
        definedPeriods: unknown('Els terminis constarien a la política, que no s’ha pogut consultar.'),
        dataAfterDeletion: unknown('No hem pogut verificar què es conserva després de la baixa.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['blablacar-play-data-safety'], 'Google Play declara que es pot demanar l’eliminació de les dades.'),
        selfService: unknown('No hem pogut verificar si hi ha un botó d’eliminació dins de l’aplicació.'),
        difficulty: 'unknown',
        obstacles:
          'La documentació de privadesa del servei no és llegible sense navegador: tant la política com el centre d’ajuda es carreguen per JavaScript i el domini rebutja les peticions automatitzades.',
        sources: ['blablacar-play-data-safety'],
      },
      userRights: {
        dataExport: unknown('No hem pogut verificar si hi ha una eina de descàrrega de dades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: unknown('No hem pogut localitzar el canal d’exercici de drets ni el contacte del delegat de protecció de dades.'),
      },
      controls: {
        adPersonalizationOptOut: unknown('No hem pogut verificar quins controls de publicitat ofereix l’aplicació.'),
        telemetryOptOut: unknown('No consta cap control documentat sobre l’analítica.'),
        granularControls: unknown('No hem pogut revisar el panell de privadesa del compte.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem documentat cap patró fosc concret.'),
      },
      security: {
        e2ee: na('La missatgeria entre persones usuàries passa pel servidor i el servei l’ha de poder moderar.'),
        transportEncryption: f('yes', 'official', ['blablacar-play-data-safety'], 'Google Play declara que les dades es xifren en trànsit.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: unknown('No hem trobat documentació sobre la verificació en dos passos.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: f('yes', 'official', ['blablacar-security-txt'], 'El security.txt remet a un programa públic de recompenses allotjat a YesWeHack.', {
          url: 'https://yeswehack.com/programs/bug-bounty-program-blablacar',
        }),
        vulnerabilityDisclosure: f('yes', 'official', ['blablacar-security-txt'], 'Fitxer security.txt amb contacte i reconeixement públic dels informes.'),
      },
      alternatives: [
        {
          app: 'renfe',
          comparability: 'partial',
          rationale:
            'Per a la mateixa distància, el tren públic declara menys seguiment i no aplica publicitat de tercers a l’aplicació.',
          tradeOffs: 'És més car i no arriba a les destinacions sense estació.',
        },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La contradicció entre les dues botigues és la troballa d’aquesta fitxa: la mateixa empresa declara a Apple una finalitat de publicitat de tercers i a Google que no comparteix dades amb ningú. Almenys una de les dues declaracions és incorrecta.',
        openQuestions: [
          'El domini www.blablacar.com rebutja les peticions automatitzades i el centre d’ajuda es carrega per JavaScript: cal revisar la política de privadesa i els passos de baixa amb un navegador real.',
          'Per què l’etiqueta de l’App Store declara dades de salut i de forma física?',
        ],
      },
    },

    /* ═══════════════════════════ Tribbu ═══════════════════════════ */
    {
      slug: 'tribbu',
      name: 'Tribbu',
      company: 'hoop-solutions',
      categories: ['mobilitat-i-transport'],
      tagline: 'Geolocalització limitada al primer pla, però cessió del trajecte a la universitat o a l’empresa que paga el servei',
      summary:
        'Tribbu comparteix cotxe per als trajectes de cada dia entre casa i la universitat o la feina. La política és clara en un punt poc habitual: la ubicació només es llegeix «cuando la aplicación está abierta en primer plano». La contrapartida és qui hi ha a l’altra banda: la plataforma la contracten universitats i empreses, que reben informació de qui comparteix cotxe per concedir beneficis d’aparcament.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Espanya',
      userBase: 'Comunitats universitàries i centres de treball a Espanya',
      links: {
        website: 'https://www.tribbuapp.com/',
        privacyPolicy: 'https://www.hoopcarpool.com/privacidad',
        appStore: 'https://apps.apple.com/es/app/id1323765310',
      },
      accountRequired: f('yes', 'official', ['tribbu-privacy-policy'], 'El registre demana nom, correu, telèfon, fotografia i data de naixement; per conduir, també la matrícula i el distintiu ambiental.'),
      openSource: f('no', 'editorial', [], 'Aplicació privativa: no consta cap publicació del codi font.', { licence: 'Privativa' }),
      dataSummary:
        'Un trajecte diari repetit és la dada més estable que existeix: diu on vius, on estudies o treballes i a quina hora hi ets. Aquí, a més, la vinculació amb la universitat o l’empresa converteix aquesta rutina en informació que un tercer coneix.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tribbu-privacy-policy', 'tribbu-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tribbu-privacy-policy', 'tribbu-app-store'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tribbu-privacy-policy', 'tribbu-app-store'] }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tribbu-privacy-policy'], note: 'La fotografia de perfil és visible per a la resta de la comunitat.' }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['tribbu-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['tribbu-privacy-policy', 'tribbu-app-store'], note: 'La política limita la lectura de la ubicació al moment en què l’aplicació és oberta en primer pla per triar el trajecte.' }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tribbu-privacy-policy', 'tribbu-app-store'], note: 'Els punts de recollida equivalen a adreces del domicili o del centre de treball.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tribbu-privacy-policy'] }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['tribbu-privacy-policy', 'tribbu-play-data-safety'], note: 'Google Play declara la recollida de missatges; la política parla de les comunicacions entre membres de la comunitat.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tribbu-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['tribbu-app-store'], note: 'És l’única categoria declarada sota «Datos utilizados para rastrearte».' }),
        row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['tribbu-privacy-policy'], note: 'La política esmenta l’historial de navegació recollit amb galetes i eines d’analítica.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['tribbu-privacy-policy', 'tribbu-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['tribbu-app-store'] }),
        row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tribbu-privacy-policy'], note: 'La pertinença a una universitat o a una empresa és el que dona accés a la comunitat i als beneficis d’aparcament.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['tribbu-app-store'], 'L’etiqueta declara els identificadors sota «Datos utilizados para rastrearte», cosa que la política no explica.'),
        advertisingIdentifiers: f('yes', 'official', ['tribbu-app-store'], 'Identificador d’usuari i de dispositiu declarats com a dades vinculades i de seguiment.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['tribbu-privacy-policy'], 'La política cita proveïdors d’analítica de Google, Meta i Microsoft Clarity.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['tribbu-privacy-policy'], 'Hi ha comunicacions comercials basades en consentiment i eines de Meta i Google, però la política no descriu publicitat conductual pròpia.'),
        profiling: unknown('La política no descriu cap elaboració de perfils més enllà de l’analítica d’ús.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['tribbu-privacy-policy'], 'Membres del trajecte, universitats i empreses ocupadores, processadors de pagament, proveïdors d’analítica i autoritats.'),
        intraGroupSharing: na('Hoop Solutions, S.L. no forma part de cap grup empresarial conegut.'),
        dataBrokerSales: unknown('No consta cap venda de dades a intermediaris.'),
        internationalTransfers: unknown('La política no detalla el mecanisme de transferència, tot i que cita proveïdors nord-americans.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['tribbu-privacy-policy'], 'És la política més concreta del lot en aquest punt: dona terminis per a cada situació.'),
        dataAfterDeletion: f('yes', 'official', ['tribbu-privacy-policy'], 'Les dades es conserven seixanta dies després del tancament del compte i les comptables, el que exigeixi la normativa fiscal.'),
        periods: [
          { period: '5 anys des de l’últim ús de la plataforma.', sources: ['tribbu-privacy-policy'] },
          { period: '60 dies després del tancament del compte.', sources: ['tribbu-privacy-policy'] },
          { period: 'Entre 2 i 10 anys per als comptes suspesos.', sources: ['tribbu-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['tribbu-privacy-policy', 'tribbu-play-data-safety']),
        selfService: unknown('La política reconeix el dret de supressió però no diu si hi ha un botó dins de l’aplicació.'),
        difficulty: 'medium',
        steps: [
          'Escriu a dataprotection@hoopcarpool.com demanant la supressió del compte i de les dades.',
          'Si l’aplicació ofereix l’opció al perfil, fes-la servir i guarda’n la confirmació.',
          'Compta que les dades es conserven seixanta dies més després del tancament.',
        ],
        dataRetained:
          'Seixanta dies de dades generals després del tancament i les dades comptables i de facturació durant els terminis fiscals.',
        sources: ['tribbu-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['tribbu-privacy-policy'], 'El dret de portabilitat es reconeix i s’exerceix pel canal de protecció de dades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['tribbu-privacy-policy'], 'Adreça de protecció de dades explícita a la política.', {
          url: 'mailto:dataprotection@hoopcarpool.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['tribbu-privacy-policy'], 'Es pot cancel·lar la subscripció a les comunicacions comercials des de cada missatge o escrivint a l’empresa.'),
        telemetryOptOut: unknown('No consta cap control per desactivar l’analítica dins de l’aplicació.'),
        granularControls: unknown('No hem pogut revisar el panell de privadesa del compte.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem documentat cap patró fosc concret.'),
      },
      security: {
        e2ee: na('Els missatges entre membres passen pel servidor del servei.'),
        transportEncryption: f('yes', 'official', ['tribbu-play-data-safety'], 'Google Play declara que les dades es xifren en trànsit.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: unknown('No hem trobat documentació sobre la verificació en dos passos.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni cap fitxer security.txt als dominis del servei.'),
        vulnerabilityDisclosure: unknown('No hi ha cap canal públic documentat per comunicar vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'blablacar',
          comparability: 'partial',
          rationale: 'És l’alternativa habitual per compartir cotxe, tot i que està pensada per a la llarga distància.',
          tradeOffs: 'Declara molta més publicitat de tercers i no té la vinculació amb el centre d’estudis o de treball.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política és de les poques del lot que dona terminis de conservació numerats. El punt feble és la distància entre el document i l’etiqueta de l’App Store: la política no explica per a què es fan servir els identificadors com a dada de seguiment.',
        openQuestions: [
          'Quina informació concreta reben les universitats i les empreses que contracten el servei?',
          'Hi ha un botó d’eliminació del compte dins de l’aplicació?',
        ],
      },
    },

    /* ═══════════════════════════ Renfe ═══════════════════════════ */
    {
      slug: 'renfe',
      name: 'Renfe',
      company: 'renfe-viajeros',
      categories: ['mobilitat-i-transport', 'administracio-publica'],
      tagline: 'Cap dada declarada per rastrejar, però tampoc cap termini de conservació concret',
      summary:
        'L’aplicació de l’operadora ferroviària pública és, en declaracions de botiga, la més continguda del lot: no hi ha cap categoria sota «Datos utilizados para rastrearte» i la ubicació es declara com a dada no vinculada amb la identitat. La política de l’aplicació identifica el responsable, el delegat de protecció de dades i la base jurídica de cada finalitat, però no fixa cap termini de conservació concret ni explica com es dona de baixa un compte «Mi Renfe».',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      userBase: 'Milions de bitllets venuts cada any a Espanya',
      links: {
        website: 'https://www.renfe.com/',
        privacyPolicy:
          'https://www.renfe.com/es/es/ayuda/informacion-legal-viajeros/privacidad-cookies/privacidad-apps/politica-de-privacidad-app-renfe',
        appStore: 'https://apps.apple.com/es/app/id1544224672',
      },
      accountRequired: f('partial', 'official', ['renfe-privacy-policy'], 'Es pot comprar com a convidat, però el compte «Mi Renfe» és necessari per gestionar els bitllets, els canvis i el programa de fidelització.'),
      openSource: f('no', 'editorial', [], 'Aplicació privativa: no consta cap publicació del codi font.', { licence: 'Privativa' }),
      dataSummary:
        'Un historial de bitllets de tren és un mapa de la vida d’una persona a escala estatal: on va, amb quina freqüència, amb qui i quan no és a casa. Que sigui una empresa pública qui el custodia no el fa menys revelador.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['renfe-privacy-policy', 'renfe-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['renfe-privacy-policy', 'renfe-app-store'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['renfe-privacy-policy', 'renfe-app-store'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['renfe-app-store'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['renfe-privacy-policy'], note: 'Els bitllets nominatius d’alta velocitat associen el document d’identitat a la plaça.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['renfe-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['renfe-privacy-policy'], note: 'La política parla de preferències de viatge i de viatges ja fets.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['renfe-privacy-policy', 'renfe-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['renfe-privacy-policy', 'renfe-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['renfe-privacy-policy'] }),
        row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['renfe-app-store'], note: 'L’etiqueta la declara com a dada no vinculada amb la identitat, per al funcionament de l’aplicació i per a l’analítica.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['renfe-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['renfe-app-store'] }),
        row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['personalitzacio-de-continguts'], sources: ['renfe-privacy-policy'], note: 'La política esmenta l’avaluació de característiques de la persona usuària que puguin afectar la compra.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['renfe-app-store'], 'L’etiqueta de privadesa no inclou cap categoria sota «Datos utilizados para rastrearte».'),
        advertisingIdentifiers: f('no', 'official', ['renfe-app-store'], 'No es declara cap identificador publicitari.'),
        thirdPartyTrackersPresent: f('no', 'official', ['renfe-play-data-safety'], 'Google Play declara que no es comparteixen dades amb tercers.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['renfe-privacy-policy'], 'Hi ha comunicacions comercials per push, SMS i correu basades en el consentiment, i la política preveu personalitzar l’experiència, però no publicitat conductual de tercers.'),
        profiling: f('partial', 'official', ['renfe-privacy-policy'], 'La política esmenta l’avaluació de característiques de la persona usuària que puguin afectar la compra, sense descriure’n l’abast.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['renfe-privacy-policy'], 'Cessions a autoritats per obligació legal i als proveïdors del servei de trasllat a l’estació, amb consentiment.'),
        intraGroupSharing: f('yes', 'official', ['renfe-privacy-policy'], 'Comunicació a Renfe-Operadora, la matriu del grup, per als serveis complementaris.'),
        dataBrokerSales: f('no', 'official', ['renfe-play-data-safety'], 'La declaració de Google Play afirma que no es comparteixen dades amb tercers.'),
        internationalTransfers: unknown('La política de l’aplicació no esmenta cap transferència internacional.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('Renfe publica informació al portal de transparència com a empresa pública, però no un informe de peticions d’autoritats sobre dades de clients.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['renfe-privacy-policy'], 'La política es limita a dir «durante el tiempo estrictamente necesario para llevar a cabo las finalidades descritas o hasta que solicite la supresión», sense cap xifra.'),
        dataAfterDeletion: unknown('La política no descriu què es conserva després d’una sol·licitud de supressió.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['renfe-privacy-policy', 'renfe-play-data-safety'], 'El dret de supressió es reconeix i Google Play declara que se’n pot demanar l’eliminació.'),
        selfService: unknown('No hem pogut verificar si l’àrea «Mi Renfe» inclou una opció de baixa del compte.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Escriu a derechos.viajeros@renfe.es demanant la supressió del compte i de les dades, amb còpia del document d’identitat.',
          'Si no reps resposta, adreça’t al delegat de protecció de dades a dpd@renfe.es.',
          'Com a últim recurs, reclama davant de l’Agència Espanyola de Protecció de Dades.',
        ],
        dataRetained: 'Els bitllets i la facturació es conserven pels terminis fiscals i de reclamació, tot i que la política no els concreta.',
        sources: ['renfe-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['renfe-privacy-policy'], 'El dret de portabilitat es reconeix, però s’exerceix per correu electrònic i no hi ha cap eina de descàrrega.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['renfe-privacy-policy'], 'Adreça específica per a l’exercici de drets i contacte del delegat de protecció de dades.', {
          url: 'mailto:derechos.viajeros@renfe.es',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['renfe-privacy-policy'], 'Les comunicacions comercials, incloses les de WhatsApp Business, es basen en un consentiment revocable.'),
        telemetryOptOut: unknown('No consta cap control per desactivar l’analítica dins de l’aplicació.'),
        granularControls: f('partial', 'official', ['renfe-privacy-policy'], 'Hi ha consentiments separats per canal de comunicació, però no un panell de privadesa per finalitat.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem documentat cap patró fosc concret.'),
      },
      security: {
        e2ee: na('El servei no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: f('yes', 'official', ['renfe-play-data-safety'], 'Google Play declara que les dades es xifren en trànsit.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: unknown('No hem trobat documentació sobre la verificació en dos passos del compte «Mi Renfe».'),
        independentAudits: unknown('No consta cap auditoria publicada, ni tampoc la certificació de l’Esquema Nacional de Seguretat.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses públic.'),
        vulnerabilityDisclosure: unknown('El fitxer /.well-known/security.txt de renfe.com respon, però sense contingut: no hi ha cap canal documentat.'),
      },
      alternatives: [
        {
          app: 'cabify',
          comparability: 'complementary',
          rationale: 'Cobreix el tram urbà que el tren no fa, amb el cost de molt més seguiment declarat.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'És un bon exemple del patró que el briefing avisa per a l’administració pública: la base jurídica està ben identificada per a cada finalitat, però falten els terminis de conservació, el canal de vulnerabilitats i qualsevol informe de transparència. Hem preferit deixar-ho com a desconegut abans que llegir-ho com una absència provada.',
        openQuestions: [
          'Inclou l’àrea «Mi Renfe» una opció d’eliminació del compte sense escriure cap correu?',
          'Quins terminis de conservació concrets aplica Renfe a l’historial de bitllets?',
        ],
      },
    },

    /* ═══════════════════════════ Vueling ═══════════════════════════ */
    {
      slug: 'vueling',
      name: 'Vueling',
      company: 'vueling-airlines',
      categories: ['viatges-i-allotjament', 'mobilitat-i-transport'],
      tagline: 'La política de privadesa completa que la companyia diu tenir no és accessible a cap URL pública',
      summary:
        'Vueling publica una pàgina de compromís amb la privadesa que remet a «nuestra Política de Privacidad» completa, però l’enllaç no porta enlloc: al web només hi ha aquesta pàgina d’una pantalla, amb el responsable i l’adreça postal del delegat de protecció de dades. L’etiqueta de l’App Store, en canvi, declara que les compres i les dades de contacte es fan servir per rastrejar, i és pràcticament l’única font verificable del tractament.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      userBase: 'Desenes de milions de passatgers anuals, sobretot a Espanya i Europa',
      links: {
        website: 'https://www.vueling.com/',
        privacyPolicy: 'https://www.vueling.com/es/legal/politica-de-privacidad',
        terms: 'https://www.vueling.com/es/atencion-al-cliente/condiciones-de-uso-del-sitio-web',
        appStore: 'https://apps.apple.com/es/app/id445818820',
      },
      accountRequired: f('partial', 'official', ['vueling-app-store'], 'Es pot comprar sense compte, però l’etiqueta declara identificador d’usuari i el programa Vueling Club requereix registre.'),
      openSource: f('no', 'editorial', [], 'Aplicació privativa: no consta cap publicació del codi font.', { licence: 'Privativa' }),
      dataSummary:
        'Una reserva de vol conté el nom legal, el document d’identitat, la data del viatge, els acompanyants i sovint dades d’assistència especial. És un dels conjunts de dades més sensibles del sector i, alhora, el que aquí està pitjor documentat.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['vueling-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['vueling-app-store'], note: 'Declarada sota publicitat o màrqueting de l’editora i, com a dada de contacte, també sota seguiment.' }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['vueling-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['vueling-app-store'], note: 'Les compres són una de les dues categories declarades sota «Datos utilizados para rastrearte».' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['vueling-app-store'] }),
        row('llista-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['vueling-app-store'], note: 'L’etiqueta declara «Contactos» com a dada vinculada per al funcionament de l’aplicació, sense explicar-ne el motiu.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['vueling-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['vueling-app-store'] }),
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['vueling-app-store'], note: 'Declarada com a dada no vinculada amb la identitat.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['vueling-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['vueling-app-store'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal', 'prestacio-del-servei'], sources: ['vueling-website-terms'], note: 'El servei de facturació exigeix la documentació de viatge; l’etiqueta no la desglossa.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['vueling-app-store'], 'L’etiqueta declara compres i dades de contacte sota «Datos utilizados para rastrearte».'),
        advertisingIdentifiers: f('partial', 'official', ['vueling-app-store'], 'Es declaren identificadors d’usuari i de dispositiu, però el seguiment s’atribueix a les compres i al contacte, no a l’identificador publicitari.'),
        thirdPartyTrackersPresent: unknown('Sense una política llegible no es pot confirmar quins tercers hi ha a l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['vueling-app-store'], 'Hi ha una finalitat declarada de publicitat o màrqueting de l’editora amb correu i telèfon.'),
        profiling: f('partial', 'official', ['vueling-app-store'], 'Hi ha una finalitat de personalització del producte, sense cap descripció documental del perfilat.'),
        aiTraining: unknown('No hi ha cap document públic que en parli.'),
      },
      sharing: {
        thirdPartySharing: unknown('Sense política llegible no podem documentar les cessions, ni tan sols les obligatòries de dades de passatgers a les autoritats frontereres.'),
        intraGroupSharing: unknown('No hem trobat cap document que descrigui la compartició amb la resta del grup International Airlines Group ni amb el programa Avios.'),
        dataBrokerSales: unknown('No hi ha informació pública sobre la venda de dades.'),
        internationalTransfers: unknown('No hi ha cap document públic que indiqui el mecanisme de transferència.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: unknown('Cap document públic de la companyia fixa terminis de conservació.'),
        dataAfterDeletion: unknown('No hi ha documentació sobre què es conserva després de la baixa.'),
      },
      accountDeletion: {
        possible: unknown('No hem trobat cap document que expliqui com es dona de baixa un compte de Vueling Club.'),
        selfService: unknown('No hem pogut verificar si hi ha una opció de baixa a l’àrea de client.'),
        difficulty: 'unknown',
        obstacles:
          'La pàgina de privadesa remet a una política completa que no hem localitzat a cap URL del web, i el centre d’ajuda no publica cap article sobre l’eliminació del compte.',
      },
      userRights: {
        dataExport: unknown('No hi ha cap eina ni cap procediment documentat de portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['vueling-privacy-policy'], 'L’únic canal publicat és una adreça postal al delegat de protecció de dades a Viladecans; no hi ha formulari ni correu electrònic.', {
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('No hi ha cap control documentat sobre la personalització publicitària.'),
        telemetryOptOut: unknown('No consta cap control sobre l’analítica.'),
        granularControls: unknown('No hem pogut revisar el panell de preferències del compte.'),
        defaultPosture: 'unknown',
        darkPatterns: f('partial', 'editorial', [], 'Remetre a una política de privadesa completa que no és accessible a cap adreça pública deixa la persona usuària sense la informació que l’article 13 del RGPD exigeix facilitar. Ho anotem com a indici, no com a patró de disseny verificat.'),
      },
      security: {
        e2ee: na('El servei no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('No hem trobat cap declaració pública sobre el xifratge en trànsit; l’aplicació no és a Google Play amb un identificador localitzable.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: unknown('No hem trobat documentació sobre la verificació en dos passos.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses públic.'),
        vulnerabilityDisclosure: unknown('El domini vueling.com no publica cap fitxer /.well-known/security.txt.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La troballa principal és documental: una companyia aèria amb desenes de milions de passatgers anuals no publica, en cap idioma del seu web, la política de privadesa que ella mateixa diu tenir. Tot el que hem pogut afirmar surt de l’etiqueta de l’App Store.',
        openQuestions: [
          'On és publicada la «Política de Privacidad» completa a què remet la pàgina de compromís?',
          'Per què l’etiqueta de l’App Store declara l’accés als contactes del telèfon com a dada vinculada?',
          'Quin tractament rep la informació de passatgers compartida amb la resta del grup International Airlines Group i amb el programa Avios?',
        ],
      },
    },

    /* ═══════════════════════════ Booking.com ═══════════════════════════ */
    {
      slug: 'booking',
      name: 'Booking.com',
      company: 'booking-com-bv',
      categories: ['viatges-i-allotjament'],
      tagline: 'L’etiqueta de l’App Store només declara un identificador; la política descriu un perfil de viatger que s’envia a cada allotjament',
      summary:
        'Booking.com és el cas més clar de distància entre el que es declara a la botiga i el que diu el document legal. A Apple hi consta un únic identificador no vinculat amb la identitat; a la política hi ha pagaments, acompanyants, gravacions de trucades, entrenament de models d’IA i un resum de conducta que s’envia a l’allotjament abans de l’arribada. No hi ha cap manera d’eliminar el compte sense passar pel formulari de drets.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Països Baixos',
      userBase: 'Plataforma molt gran en línia segons la DSA, amb molt més de 45 milions de destinataris mensuals a la Unió Europea',
      links: {
        website: 'https://www.booking.com/',
        privacyPolicy: 'https://www.booking.com/content/privacy.es.html',
        privacyCenter: 'https://www.booking.com/content/dsar.es.html',
        appStore: 'https://apps.apple.com/es/app/id367003839',
      },
      accountRequired: f('partial', 'official', ['booking-privacy-policy'], 'Es pot reservar com a convidat, però el compte és necessari per gestionar les reserves i per als programes de fidelització.'),
      openSource: f('no', 'editorial', [], 'Aplicació privativa: no consta cap publicació del codi font.', { licence: 'Privativa' }),
      dataSummary:
        'Una reserva d’allotjament diu on dorms, amb qui, quantes nits i quan la teva casa és buida. Booking hi afegeix la data de naixement, si viatges per feina i un historial de cancel·lacions i d’opinions que converteix la persona viatgera en un perfil reputacional.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['booking-privacy-policy'], note: 'Es comunica a l’allotjament o al proveïdor de transport reservat.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['booking-privacy-policy'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['booking-privacy-policy'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['booking-privacy-policy'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['booking-privacy-policy'], note: 'També es demanen els noms i les dates de naixement de les persones acompanyants.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['booking-privacy-policy'], note: 'Les passarel·les citades a la política són Adyen i Stripe.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts', 'recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['booking-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['booking-privacy-policy'], note: 'La política parla de la «ubicación actual» per mostrar resultats propers.' }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['atencio-a-lusuari', 'entrenament-de-models-dia'], sources: ['booking-privacy-policy'], note: 'Gravacions i transcripcions de les trucades d’atenció al client, conservades trenta dies per defecte.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['booking-privacy-policy'], note: 'La política declara una finalitat de personalització, rànquing i optimització.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['booking-app-store'], note: 'És l’única categoria declarada a l’etiqueta de l’App Store, i hi consta com a no vinculada amb la identitat.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['booking-privacy-policy'], note: 'La política distingeix galetes funcionals, analítiques i de màrqueting, incloses les de xarxes socials.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['booking-privacy-policy'] }),
        row('ocupacio-i-carrec', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts'], sources: ['booking-privacy-policy'], note: 'Es demana si el viatge és per feina.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['booking-privacy-policy'], note: 'Les opinions publicades formen part del resum que rep l’allotjament.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['booking-app-store'], 'L’etiqueta declara els identificadors sota «Datos usados para rastrearte».'),
        advertisingIdentifiers: f('yes', 'official', ['booking-app-store'], 'L’identificador de dispositiu es declara per a publicitat i màrqueting de l’editora.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['booking-privacy-policy'], 'La política descriu galetes de màrqueting i de xarxes socials per mostrar anuncis en altres llocs web.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['booking-privacy-policy'], 'Finalitat F de la taula de la política: publicitat, màrqueting i promocions, amb contingut i anuncis personalitzats dins i fora de la plataforma.', {
          optOutUrl: 'https://www.booking.com/content/dsar.es.html',
        }),
        profiling: f('yes', 'official', ['booking-privacy-policy'], 'Finalitat E: personalització, rànquing i optimització. A més, l’allotjament rep un resum del viatger amb el nombre de reserves completades, el percentatge de cancel·lacions i si hi ha reports de mala conducta.'),
        aiTraining: f('yes', 'official', ['booking-privacy-policy'], 'Finalitat H de la taula: entrenament i optimització de models d’intel·ligència artificial. La política admet fins i tot conservar dades de menors per entrenar sistemes de moderació.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['booking-privacy-policy'], 'Proveïdors de viatge, col·laboradors estratègics, passarel·les de pagament i autoritats.'),
        intraGroupSharing: f('yes', 'official', ['booking-privacy-policy'], 'Amb la resta d’empreses de Booking Holdings, entre les quals la política cita Agoda i OpenTable, també per a ofertes personalitzades i màrqueting. S’hi pot oposar des del formulari de drets.'),
        dataBrokerSales: unknown('La política no esmenta cap venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['booking-privacy-policy', 'booking-bcr-summary'], 'Clàusules contractuals tipus per als encarregats i normes corporatives vinculants per a les transferències dins del grup, amb resum públic en PDF.', { mechanism: 'bcrs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: f('partial', 'official', ['booking-dsa'], 'Publica els informes que exigeix el Reglament de serveis digitals —articles 15, 24 i 42, avaluació de riscos i auditoria independent—, però cap informe sobre peticions de dades de les autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['booking-privacy-policy'], 'La regla general és oberta. Els dos únics terminis numèrics són els de les gravacions de trucades.'),
        dataAfterDeletion: f('partial', 'official', ['booking-privacy-policy'], 'Es conserven les dades necessàries per a la prevenció del frau, les obligacions comptables i fiscals i les reclamacions legals.'),
        periods: [
          { dataType: 'veu-i-audio', period: '30 dies per a les gravacions i transcripcions de trucades.', sources: ['booking-privacy-policy'] },
          { dataType: 'veu-i-audio', period: 'Fins a 12 mesos per a les trucades relacionades amb assegurances.', sources: ['booking-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['booking-dsar-form'], 'El formulari de drets inclou l’opció «Derecho al olvido — Quieres eliminar tus datos personales de nuestro sistema».'),
        selfService: f('no', 'official', ['booking-dsar-form'], 'No hem trobat cap botó d’eliminació dins del compte: el camí documentat és el formulari de drets amb verificació d’identitat.'),
        directUrl: 'https://www.booking.com/content/dsar.es.html',
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Obre el formulari de drets a booking.com/content/dsar.es.html.',
          'Tria «Derecho al olvido — Quieres eliminar tus datos personales de nuestro sistema».',
          'Omple nom, cognoms i adreça electrònica i continua amb la verificació d’identitat.',
          'Respon les preguntes de comprovació sobre reserves anteriors si te les demanen.',
        ],
        obstacles:
          'El formulari no indica cap termini de resposta i la verificació pot incloure preguntes sobre reserves passades. Convertir la baixa en un exercici formal de drets és, en si mateix, una fricció.',
        dataRetained: 'Dades comptables i fiscals i les necessàries per a la prevenció del frau i les reclamacions legals.',
        sources: ['booking-dsar-form', 'booking-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['booking-dsar-form'], 'El dret d’accés i de portabilitat s’exerceix pel mateix formulari; no hi ha descàrrega autoservei ni format anunciat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['booking-privacy-policy', 'booking-dsar-form'], 'Formulari dedicat i delegat de protecció de dades amb adreça pròpia.', {
          url: 'https://www.booking.com/content/dsar.es.html',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['booking-privacy-policy'], 'Hi ha un interruptor per desactivar les recomanacions personalitzades, però la mateixa política adverteix que «la opción solo quedará desactivada en el dispositivo actual»: cal repetir-ho a cada telèfon i navegador.'),
        telemetryOptOut: f('partial', 'official', ['booking-privacy-policy'], 'Les galetes analítiques es poden desactivar des de la configuració de galetes; no consta cap control equivalent per a la telemetria de l’aplicació.'),
        granularControls: f('yes', 'official', ['booking-privacy-policy', 'booking-dsar-form'], 'Configuració de galetes per categories, control de recomanacions i oposició específica a compartir dades amb Booking Holdings.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'editorial', ['booking-privacy-policy'], 'Que el control de recomanacions només valgui per al dispositiu on es fa servir obliga a repetir-lo indefinidament. No és un engany, però desplaça el cost de la privadesa a la persona usuària.'),
        darkPatternList: [
          {
            type: 'hidden-exit',
            severity: 'medium',
            description:
              'L’eliminació del compte no és una opció de la configuració: cal obrir un formulari d’exercici de drets i superar una verificació d’identitat.',
            sources: ['booking-dsar-form'],
          },
        ],
      },
      security: {
        e2ee: na('El servei no transporta comunicacions privades; els missatges amb l’allotjament passen pel servidor.'),
        transportEncryption: f('yes', 'official', ['booking-privacy-policy'], 'La política descriu xifratge, prevenció de fuites, gestió d’identitats i protocols de resposta a incidents.'),
        atRestEncryption: f('partial', 'official', ['booking-privacy-policy'], 'Es parla de xifratge de manera genèrica, sense distingir el trànsit del repòs.'),
        mfa: f('yes', 'official', ['booking-privacy-policy'], 'La política recomana protegir el compte amb contrasenya robusta i verificació en dos passos.'),
        independentAudits: f('partial', 'official', ['booking-dsa'], 'Hi ha auditories independents obligatòries pel Reglament de serveis digitals, però no consta cap certificació de seguretat pública com ISO 27001 o PCI DSS.'),
        bugBounty: f('yes', 'official', ['booking-security-txt'], 'Programa públic de recompenses a HackerOne, obert des del 2023.', {
          url: 'https://hackerone.com/bookingcom',
        }),
        vulnerabilityDisclosure: f('partial', 'official', ['booking-security-txt'], 'Hi ha fitxer security.txt amb contacte, però el camp Expires marca el 31 de desembre de 2025: està caducat i, per tant, no és conforme amb l’RFC 9116.'),
      },
      alternatives: [
        {
          app: 'airbnb',
          comparability: 'equivalent',
          rationale: 'Cobreix la mateixa necessitat i, a diferència de Booking, permet eliminar el compte i descarregar les dades sense formularis.',
          tradeOffs: 'Declara moltes més categories de dades vinculades amb la identitat, incloses les biomètriques de verificació.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La troballa central és el perfil resumit del viatger que la política diu que s’envia a l’allotjament: nombre de reserves completades, percentatge de cancel·lacions prèvies i absència de reports de mala conducta. És una puntuació reputacional que la persona no veu i que no apareix enlloc de l’etiqueta de l’App Store.',
        openQuestions: [
          'Hi ha cap opció d’eliminació del compte dins de l’àrea autenticada, o el formulari és l’únic camí?',
          'Per què l’etiqueta de l’App Store no declara cap dada vinculada amb la identitat si la política en descriu tantes?',
        ],
      },
    },

    /* ═══════════════════════════ Airbnb ═══════════════════════════ */
    {
      slug: 'airbnb',
      name: 'Airbnb',
      company: 'airbnb-ireland',
      categories: ['viatges-i-allotjament'],
      tagline: 'Baixa i exportació autoservei i esborrat dels comptes inactius als quatre anys, amb una etiqueta que ho declara gairebé tot vinculat a la identitat',
      summary:
        'Airbnb documenta bé el camí de sortida: es pot desactivar o eliminar el compte des de la configuració, descarregar les dades sense formularis i els comptes inactius s’esborren automàticament als quatre anys, amb dos avisos previs. A canvi, l’etiqueta de l’App Store declara onze categories de dades, totes vinculades amb la identitat, i el tractament inclou verificació biomètrica i anàlisi de les converses entre persones usuàries.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Irlanda',
      userBase: 'Centenars de milions de comptes a tot el món',
      links: {
        website: 'https://www.airbnb.es/',
        privacyPolicy: 'https://www.airbnb.es/help/article/3175',
        privacyCenter: 'https://www.airbnb.es/help/article/2860',
        appStore: 'https://apps.apple.com/es/app/id401626263',
      },
      accountRequired: f('yes', 'official', ['airbnb-privacy-policy'], 'No es pot reservar ni contactar amb un amfitrió sense compte verificat.'),
      openSource: f('no', 'editorial', [], 'Aplicació privativa, tot i que l’empresa publica biblioteques lliures sense relació amb el servei.', { licence: 'Privativa' }),
      dataSummary:
        'L’historial d’estades és un registre d’on has dormit, amb qui i quan no eres a casa. A sobre, la plataforma verifica la identitat amb reconeixement facial i analitza les converses per detectar indicis de delictes: és de les poques aplicacions de consum que combina biometria, missatgeria i pagaments.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['airbnb-privacy-policy', 'airbnb-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['airbnb-privacy-policy', 'airbnb-app-store'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['airbnb-app-store'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['airbnb-app-store'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'compliment-legal'], sources: ['airbnb-privacy-policy'], note: 'Es fa servir per a la verificació d’identitat i per a les obligacions fiscals de la DAC 7.' }),
        row('dades-biometriques', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['airbnb-privacy-policy'], note: 'Reconeixement facial per comparar la selfie amb el document d’identitat.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['airbnb-privacy-policy', 'airbnb-app-store'], note: 'L’etiqueta declara també «Información sobre crédito».' }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['airbnb-app-store'] }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['moderacio-de-continguts', 'seguretat-i-prevencio-del-frau'], sources: ['airbnb-privacy-policy', 'airbnb-app-store'], note: 'La política declara l’anàlisi de les comunicacions per detectar indicis d’explotació infantil.' }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['airbnb-app-store'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['airbnb-app-store'] }),
        row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['airbnb-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['airbnb-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['airbnb-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['airbnb-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['airbnb-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['airbnb-app-store'] }),
        row('nivell-d-ingressos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['airbnb-privacy-policy'], note: 'Per a les persones amfitriones, els ingressos es declaren a l’administració tributària en aplicació de la DAC 7.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['airbnb-app-store'], 'L’etiqueta no inclou cap categoria sota «Datos utilizados para rastrearte».'),
        advertisingIdentifiers: f('partial', 'official', ['airbnb-app-store'], 'Es declaren identificadors de dispositiu i dades de publicitat, però no per a seguiment entre aplicacions de tercers.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['airbnb-cookies-policy'], 'La política de galetes cita píxels i SDK de Google i de Facebook i remet a l’autoregulació de la Digital Advertising Alliance.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['airbnb-privacy-policy'], 'La política preveu mostrar, personalitzar, mesurar i millorar la publicitat pròpia.'),
        profiling: f('yes', 'official', ['airbnb-privacy-policy'], 'Recomanacions personalitzades, cribratge de seguretat i verificació d’antecedents, amb l’interès legítim com a base declarada al suplement europeu.'),
        aiTraining: f('yes', 'official', ['airbnb-privacy-policy', 'airbnb-ai-preferences'], 'S’utilitzen dades per desenvolupar models d’IA, però hi ha una preferència per excloure-se’n a Compte i després Privadesa.', {
          optOutUrl: 'https://www.airbnb.es/help/article/4097',
        }),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['airbnb-privacy-policy'], 'Amfitrions i viatgers entre si, processadors de pagament, asseguradores, proveïdors de verificació d’antecedents, administradors d’edificis i autoritats.'),
        intraGroupSharing: f('yes', 'official', ['airbnb-privacy-policy'], 'Amb les empreses afiliades del grup a escala global.'),
        dataBrokerSales: f('no', 'official', ['airbnb-privacy-policy'], 'La política ofereix un mecanisme d’oposició a la venda o compartició només per als residents als Estats Units, i no declara cap venda a la Unió Europea.'),
        internationalTransfers: f('yes', 'official', ['airbnb-eu-supplement'], 'El suplement europeu declara clàusules model de la Comissió Europea i decisions d’adequació. La política general no n’esmenta cap mecanisme.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: f('yes', 'official', ['airbnb-transparency-reports'], 'Informes anuals de resposta a les peticions de les forces de seguretat des del 2016.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['airbnb-privacy-policy', 'airbnb-inactive-accounts'], 'La regla general no dona xifres, però la política de comptes inactius sí: quatre anys sense activitat, o un any si el compte no s’ha fet servir mai.'),
        dataAfterDeletion: f('partial', 'official', ['airbnb-eu-supplement'], 'Es poden retenir dades per prevenció del frau, obligacions legals i fiscals; les ressenyes públiques poden continuar visibles i les còpies de seguretat es conserven temporalment.'),
        periods: [
          { period: '4 anys d’inactivitat abans de l’eliminació automàtica del compte, amb avisos 30 dies i 48 hores abans.', sources: ['airbnb-inactive-accounts'] },
          { period: '1 any si el compte no s’ha utilitzat mai des de la creació.', sources: ['airbnb-inactive-accounts'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['airbnb-delete-account']),
        selfService: f('yes', 'official', ['airbnb-delete-account'], 'Es pot desactivar el compte de manera reversible o eliminar-lo definitivament des de la configuració, sense escriure a ningú.'),
        directUrl: 'https://www.airbnb.es/account-delete/reasons',
        difficulty: 'easy',
        steps: [
          'Entra a Configuración de la cuenta i després a Privacidad.',
          'Tria «Elimina tu cuenta».',
          'Indica el país de residència i el motiu i confirma amb la verificació d’identitat.',
          'Si només vols una pausa, fes servir «Desactivar» a Inicio de sesión y seguridad: és reversible.',
        ],
        obstacles:
          'Cal resoldre abans les reserves programades, les incidències obertes amb atenció al client i les sol·licituds de dades pendents.',
        dataRetained:
          'Informació retinguda per prevenció del frau i seguretat, obligacions legals i fiscals, ressenyes públiques i còpies de seguretat temporals.',
        sources: ['airbnb-delete-account', 'airbnb-eu-supplement'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['airbnb-privacy-settings'], 'Descàrrega d’una còpia de les dades personals des de Compte i després Privadesa, sense formulari.', {
          url: 'https://www.airbnb.es/account-settings/privacy-and-sharing',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['airbnb-eu-supplement'], 'Delegat de protecció de dades propi i autoritat de control de referència a Irlanda.', {
          url: 'mailto:DPO@airbnb.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['airbnb-privacy-settings', 'airbnb-cookies-policy'], 'Es poden desactivar els consells i les ofertes comercials i configurar les galetes, però l’oposició a la venda o compartició de dades només s’ofereix als residents als Estats Units.'),
        telemetryOptOut: f('partial', 'official', ['airbnb-cookies-policy'], 'Les galetes analítiques es poden configurar; no consta cap control equivalent per a la telemetria de l’aplicació.'),
        granularControls: f('yes', 'official', ['airbnb-privacy-settings'], 'Un mateix panell reuneix la descàrrega de dades, les preferències d’IA, les notificacions comercials i l’eliminació del compte.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem documentat cap patró fosc concret en el camí de sortida, que és curt i està ben senyalitzat.'),
      },
      security: {
        e2ee: na('La missatgeria entre amfitrions i viatgers ha de poder ser moderada per la plataforma.'),
        transportEncryption: f('yes', 'official', ['airbnb-account-security'], 'La documentació de seguretat del compte descriu les connexions protegides i les alertes d’accés.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: f('partial', 'official', ['airbnb-account-security'], 'Hi ha verificació addicional per codi quan s’inicia sessió des d’un dispositiu o lloc nou, però no una segona passa configurable sempre activa ni claus d’accés.', {
          methods: ['sms', 'email'],
        }),
        independentAudits: unknown('No hem trobat cap certificació de seguretat pública ni cap auditoria independent publicada.'),
        bugBounty: f('yes', 'official', ['airbnb-security-txt'], 'Programa públic de recompenses a HackerOne obert des del 2015, amb política pròpia enllaçada des del security.txt.', {
          url: 'https://hackerone.com/airbnb',
        }),
        vulnerabilityDisclosure: f('yes', 'official', ['airbnb-security-txt'], 'Fitxer security.txt complet, amb política, canònic i data de caducitat vigent fins al juny del 2027.'),
      },
      alternatives: [
        {
          app: 'booking',
          comparability: 'equivalent',
          rationale: 'Cobreix la mateixa necessitat i no exigeix verificació biomètrica per reservar.',
          tradeOffs: 'No té baixa ni exportació autoservei: tot passa per un formulari d’exercici de drets.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política d’Airbnb està partida en dues capes i el contingut que obliga el RGPD —bases jurídiques, transferències, drets— és al suplement per a fora dels Estats Units, no al document principal. Qui llegeixi només la política general no trobarà cap mecanisme de transferència internacional.',
        openQuestions: [
          'En quin format i en quin termini es lliura la còpia de dades descarregada?',
          'On publica Airbnb els informes de transparència que exigeix el Reglament de serveis digitals?',
        ],
      },
    },

    /* ═══════════════════════════ Holafly ═══════════════════════════ */
    {
      slug: 'holafly',
      name: 'Holafly',
      company: 'holafly-limited',
      categories: ['telecomunicacions', 'viatges-i-allotjament'],
      tagline: 'Un operador de dades mòbils amb seu irlandesa, perfils de màrqueting i cap informe de transparència',
      summary:
        'Holafly ven targetes eSIM per a viatges i, per fer-ho, tracta identificadors de xarxa mòbil com l’IMSI, el MSISDN i l’adreça IP, que comparteix amb els operadors com a responsables independents. La política és recent i detallada i reconeix obertament l’elaboració de perfils de màrqueting i la publicitat programàtica. Malgrat tractar dades de connectivitat, no publica cap informe de transparència ni cap canal de seguretat.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Irlanda',
      userBase: 'Botiga d’eSIM amb cobertura a més de cent destinacions',
      links: {
        website: 'https://esim.holafly.com/',
        privacyPolicy: 'https://esim.holafly.com/es/politica-de-privacidad/',
        terms: 'https://esim.holafly.com/es/terminos-y-condiciones/',
        appStore: 'https://apps.apple.com/es/app/id1629600786',
      },
      accountRequired: f('yes', 'official', ['holafly-privacy-policy'], 'Cal un compte amb dades d’identificació i de contacte per comprar i activar una eSIM.'),
      openSource: f('no', 'editorial', [], 'Aplicació privativa: no consta cap publicació del codi font.', { licence: 'Privativa' }),
      dataSummary:
        'Una eSIM lliga la identitat de la persona als identificadors de la targeta i de la línia. Sumat al país de destinació, al pla de dades i a l’historial de connexions, el servei sap on ets i quan, encara que no vegi el contingut del que hi fas.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['holafly-privacy-policy', 'holafly-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['holafly-privacy-policy', 'holafly-app-store'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['holafly-privacy-policy', 'holafly-app-store'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['holafly-privacy-policy'], note: 'La política declara que les dades sensibles de la targeta les tracta la passarel·la i que Holafly no les emmagatzema.' }),
        row('xarxa-i-connectivitat', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['holafly-privacy-policy'], note: 'Els operadors de telecomunicacions tracten l’IMSI, el MSISDN i l’adreça IP com a responsables independents.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['holafly-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['holafly-app-store'], note: 'Declarada com a dada no vinculada amb la identitat.' }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'brokers', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['holafly-privacy-policy'], note: 'La política parla d’identificadors publicitaris, mapes de calor i cessió a proveïdors de publicitat programàtica.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['holafly-privacy-policy', 'holafly-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['holafly-app-store'], note: 'És l’única categoria declarada sota «Datos usados para rastrearte».' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'brokers', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['holafly-privacy-policy'], note: 'La política reconeix que es fan «perfiles de marketing» per oferir ofertes i anuncis segmentats.' }),
        row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['atencio-a-lusuari'], sources: ['holafly-privacy-policy'], note: 'La gravació de trucades d’atenció al client es basa en l’interès legítim.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['holafly-privacy-policy'], note: 'S’analitzen les ressenyes publicades a Trustpilot i a les botigues d’aplicacions.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['holafly-app-store'] }),
        row('contingut-de-missatges', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['holafly-privacy-policy'], note: 'La política no descriu cap accés al contingut del trànsit de dades de l’eSIM.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['holafly-app-store'], 'L’etiqueta declara les dades d’ús sota «Datos usados para rastrearte».'),
        advertisingIdentifiers: f('yes', 'official', ['holafly-privacy-policy'], 'La política enumera els identificadors publicitaris entre les dades d’activitat recollides.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['holafly-privacy-policy'], 'Cessió a proveïdors tercers de publicitat programàtica a través del banner de galetes i de les cadenes del marc de transparència i consentiment.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['holafly-privacy-policy'], 'Anuncis segmentats i ofertes d’eSIM adaptades a partir dels perfils de màrqueting.'),
        profiling: f('yes', 'official', ['holafly-privacy-policy'], 'La política diu literalment que es fan perfils de màrqueting a partir de les dades d’interessos en productes.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['holafly-privacy-policy'], 'Operadors de telecomunicacions com a responsables independents, passarel·les de pagament, encarregats tecnològics, publicitat programàtica, assessors i clients corporatius.'),
        intraGroupSharing: f('yes', 'official', ['holafly-privacy-policy'], 'Compartició amb empreses del grup Holafly per a serveis intragrup.'),
        dataBrokerSales: f('partial', 'official', ['holafly-privacy-policy'], 'No es declara cap venda, però la cessió a publicitat programàtica posa dades en mans d’un ecosistema d’intermediaris.'),
        internationalTransfers: f('yes', 'official', ['holafly-privacy-policy'], 'Es reconeixen destinataris fora de l’Espai Econòmic Europeu sense decisió d’adequació, amb clàusules contractuals tipus i ús excepcional de les excepcions de l’article 49.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència, cosa especialment rellevant en un servei que tracta identificadors de xarxa mòbil.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['holafly-privacy-policy'], 'Hi ha un termini clar per a les dades econòmiques i fiscals; la resta es lliga a la petició de supressió i al bloqueig per litigi.'),
        dataAfterDeletion: f('partial', 'official', ['holafly-privacy-policy'], 'Després de l’eliminació es conserven les dades econòmiques i fiscals, els registres d’activitat i els esdeveniments de seguretat.'),
        periods: [
          { period: '7 anys per a les dades econòmiques i fiscals.', sources: ['holafly-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['holafly-privacy-policy'], 'La política reconeix el dret a demanar l’eliminació del compte.'),
        selfService: f('no', 'official', ['holafly-privacy-policy'], 'El camí documentat és el formulari d’exercici de drets del peu de la política o el suport per correu i per missatgeria; no consta cap botó dins de l’aplicació.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Obre el formulari d’exercici de drets enllaçat al peu de la política de privadesa.',
          'Demana la supressió del compte i de les dades.',
          'Com a alternativa, escriu a dpo@holafly.com o a help@holafly.com.',
        ],
        obstacles:
          'La política preveu ampliar dos mesos el termini de resposta quan la sol·licitud comporta costos logístics o operatius desproporcionats.',
        dataRetained: 'Dades econòmiques i fiscals durant set anys, registres d’activitat i esdeveniments de seguretat.',
        sources: ['holafly-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['holafly-privacy-policy'], 'La portabilitat es reconeix quan la base és el contracte o el consentiment, però només s’exerceix per formulari.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['holafly-privacy-policy'], 'Delegat de protecció de dades amb adreça pròpia i formulari de drets.', {
          url: 'mailto:dpo@holafly.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['holafly-privacy-policy'], 'El consentiment publicitari es revoca des del banner de galetes; no hi ha cap control equivalent dins de l’aplicació.'),
        telemetryOptOut: unknown('No consta cap control per desactivar l’analítica de l’aplicació.'),
        granularControls: f('partial', 'official', ['holafly-privacy-policy'], 'La configuració del compte permet actualitzar dades i gestionar les comunicacions, però no hi ha un panell per finalitat.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'editorial', ['holafly-app-store'], 'L’enllaç a la política de privadesa que publica la fitxa de l’App Store porta a una adreça que retorna un error: la informació obligatòria no és a un clic, com hauria de ser.'),
      },
      security: {
        e2ee: na('El servei ven connectivitat; no transporta comunicacions pròpies entre persones usuàries.'),
        transportEncryption: f('yes', 'official', ['holafly-privacy-policy'], 'La política declara canals xifrats amb els operadors de xarxa mitjançant HTTPS, SFTP i SSH.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: unknown('No hem trobat documentació sobre la verificació en dos passos.'),
        independentAudits: unknown('Hi ha un centre de confiança allotjat a Vanta, però el contingut no es pot llegir sense executar JavaScript i no hem pogut verificar cap certificació.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: f('no', 'official', ['holafly-privacy-policy'], 'El domini del servei no publica cap fitxer security.txt i la política no dona cap canal per comunicar vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Contra el que fa pensar la marca, el responsable del tractament no és una societat espanyola sinó Holafly Limited, amb domicili a Dublín i número d’empresa 745325, i l’autoritat de referència és la irlandesa, no l’Agència Espanyola de Protecció de Dades. Tampoc hem localitzat cap avís legal, que la normativa espanyola de comerç electrònic exigeix.',
        openQuestions: [
          'Quines certificacions acredita realment el centre de confiança allotjat a Vanta?',
          'Per què l’enllaç a la política de privadesa que publica la fitxa de l’App Store retorna un error?',
        ],
      },
    },

    /* ═══════════════════════════ Trip.com ═══════════════════════════ */
    {
      slug: 'trip-com',
      name: 'Trip.com',
      company: 'trip-com-travel-singapore',
      categories: ['viatges-i-allotjament'],
      tagline: 'Cap dada declarada com a desvinculada de la identitat i cap país de destinació anomenat a les transferències',
      summary:
        'Trip.com declara a l’App Store dotze categories de dades, totes vinculades amb la identitat o utilitzades per rastrejar, sense cap categoria desvinculada: ubicació exacta, contactes, àudio, missatges i salut. La política, en canvi, no anomena cap país de destinació de les transferències internacionals, ni tan sols la Xina, tot i que el grup té la seu administrativa a Xangai i la política preveu compartir dades amb les filials.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Singapur',
      userBase: 'Agència en línia global del grup Trip.com, que també opera Ctrip, Qunar i Skyscanner',
      links: {
        website: 'https://es.trip.com/',
        privacyPolicy: 'https://es.trip.com/contents/service-guideline/privacy-policy.html?locale=es-ES',
        appStore: 'https://apps.apple.com/es/app/id681752345',
      },
      accountRequired: f('yes', 'official', ['trip-com-privacy-policy'], 'El registre amb correu o telèfon és necessari per reservar i per gestionar les reserves.'),
      openSource: f('no', 'editorial', [], 'Aplicació privativa: no consta cap publicació del codi font.', { licence: 'Privativa' }),
      dataSummary:
        'És el conjunt de dades més ampli del lot: passaport i fotografia del passaport, nacionalitat, número de document per als trens de la Xina continental, informació mèdica per a l’assistència d’emergència i documents sanitaris per justificar reemborsaments. Tot plegat és informació de l’article 9 del RGPD en mans d’un responsable establert fora de la Unió Europea.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['trip-com-privacy-policy', 'trip-com-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['trip-com-privacy-policy', 'trip-com-app-store'], note: 'La política declara que es comparteixen correus i telèfons xifrats amb Google, Facebook, TikTok i Bing per a publicitat.' }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'yes', shared: 'brokers', purposes: ['publicitat-personalitzada'], sources: ['trip-com-privacy-policy', 'trip-com-app-store'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['trip-com-privacy-policy'], note: 'Passaport i fotografia del passaport, nacionalitat, permís de conduir i, per als trens de la Xina continental, tipus i número de document.' }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['trip-com-privacy-policy', 'trip-com-app-store'], note: 'Informació mèdica per a l’assistència d’emergència i documentació sanitària per justificar reemborsaments.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['trip-com-privacy-policy', 'trip-com-app-store'] }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['trip-com-app-store'] }),
        row('llista-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['trip-com-app-store'], note: 'L’etiqueta declara l’accés als contactes com a dada vinculada, sense que la política ho expliqui.' }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['atencio-a-lusuari', 'seguretat-i-prevencio-del-frau'], sources: ['trip-com-privacy-policy', 'trip-com-app-store'] }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['atencio-a-lusuari'], sources: ['trip-com-privacy-policy'], note: 'Gravació de trucades i de xats amb atenció al client.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['trip-com-app-store'] }),
        row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['trip-com-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['trip-com-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'brokers', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['trip-com-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['trip-com-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['trip-com-app-store'] }),
        row('dades-biometriques', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['trip-com-privacy-policy'], note: 'La verificació biomètrica es fa al dispositiu: la política declara que no es recullen, tracten ni emmagatzemen dades biomètriques.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['trip-com-app-store'], 'L’etiqueta declara ubicació, dades de contacte i identificadors sota «Datos usados para rastrearte».'),
        advertisingIdentifiers: f('yes', 'official', ['trip-com-app-store'], 'Identificadors declarats tant per a publicitat de tercers com per a la de l’editora.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['trip-com-privacy-policy'], 'La política identifica Google, Facebook, TikTok i Bing com a socis publicitaris.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['trip-com-privacy-policy'], 'Es comparteixen correus i telèfons xifrats i identificadors d’usuari amb les plataformes publicitàries.'),
        profiling: f('yes', 'official', ['trip-com-privacy-policy'], 'La política reconeix el dret d’oposició al perfilat per a màrqueting directe, i per tant que es fa.'),
        aiTraining: f('partial', 'official', ['trip-com-personalization'], 'Hi ha recomanacions personalitzades generades amb intel·ligència artificial i perfils compartits amb socis d’IA de tercers, desactivables des d’una pàgina de configuració.', {
          optOutUrl: 'https://www.trip.com/pages/personalization-settings',
        }),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['trip-com-privacy-policy'], 'Hotels, aerolínies, creuers, ferrocarrils, autobusos, lloguer de cotxes, asseguradores, processadors de pagament, socis publicitaris, autoritats i agències antifrau.'),
        intraGroupSharing: f('yes', 'official', ['trip-com-privacy-policy'], 'Compartició amb les filials del grup, sense identificar-les ni dir on són establertes.'),
        dataBrokerSales: unknown('No consta cap venda de dades, tot i la compartició amb socis publicitaris.'),
        internationalTransfers: f('partial', 'official', ['trip-com-privacy-policy'], 'Es declaren decisions d’adequació i les clàusules contractuals tipus de la Decisió (UE) 2021/914, però la política no anomena cap país de destinació. Per a un grup amb seu administrativa a Xangai i filials xineses, l’article 13.1.f del RGPD demanaria identificar el tercer país.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe sobre peticions de dades de les autoritats, tot i que la política preveu compartir-ne amb governs, forces de seguretat i reguladors.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['trip-com-privacy-policy'], 'La política no dona cap termini numèric: es limita a dir que les dades es conserven mentre siguis usuari i el que permeti la llei.'),
        dataAfterDeletion: f('partial', 'official', ['trip-com-privacy-policy'], 'Es conserva el que exigeixi la llei o les reclamacions i, indefinidament, el registre de l’oposició al màrqueting.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['trip-com-account-cancellation'], 'Hi ha una pàgina dedicada a la cancel·lació del compte.'),
        selfService: f('partial', 'official', ['trip-com-account-cancellation'], 'La pàgina existeix i és pública, però el contingut es carrega per JavaScript i no n’hem pogut verificar els passos, els requisits ni els terminis.'),
        directUrl: 'https://www.trip.com/m/passport/cancelaccount',
        difficulty: 'unknown',
        dataRetained: 'El que exigeixi la llei o una reclamació, i el registre de l’oposició al màrqueting de manera indefinida.',
        sources: ['trip-com-account-cancellation', 'trip-com-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política no descriu cap eina ni cap procediment de portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['trip-com-privacy-policy'], 'Hi ha una bústia per a Espanya i un representant a la Unió Europea segons l’article 27 del RGPD, però cap delegat de protecció de dades anomenat.', {
          url: 'mailto:es_dataprotection@trip.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['trip-com-personalization'], 'Pàgina de configuració per desactivar el contingut personalitzat generat amb IA, amb la garantia declarada que no limita la resta de funcions.'),
        telemetryOptOut: unknown('No consta cap control sobre l’analítica.'),
        granularControls: f('partial', 'official', ['trip-com-personalization', 'trip-com-privacy-policy'], 'Hi ha configuració de personalització, de notificacions i de galetes, i l’autenticació biomètrica local és desactivable, però no un panell per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem documentat cap patró fosc concret.'),
      },
      security: {
        e2ee: na('El servei no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: f('yes', 'official', ['trip-com-privacy-policy'], 'La política declara xifratge SSL en trànsit, xifratge en repòs i emmascarament de dades.'),
        atRestEncryption: f('yes', 'official', ['trip-com-privacy-policy'], 'La política declara explícitament el xifratge de les dades emmagatzemades.'),
        mfa: f('partial', 'official', ['trip-com-privacy-policy'], 'Hi ha autenticació biomètrica local per als pagaments, però no consta una segona passa per a l’inici de sessió.'),
        independentAudits: f('partial', 'official', ['trip-com-privacy-policy'], 'La política declara les certificacions ISO 27001, PCI DSS i SOC 2 Tipus 2, però no en publica els certificats: és una autodeclaració.'),
        bugBounty: f('yes', 'official', ['trip-com-src'], 'El grup manté un centre de resposta de seguretat propi i un programa a HackerOne.', {
          url: 'https://src.trip.com/',
        }),
        vulnerabilityDisclosure: f('yes', 'official', ['trip-com-src'], 'El centre de resposta de seguretat és el canal públic per comunicar vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'booking',
          comparability: 'equivalent',
          rationale:
            'Cobreix la mateixa necessitat amb un responsable establert a la Unió Europea i normes corporatives vinculants per a les transferències.',
          tradeOffs: 'La baixa del compte només s’aconsegueix per un formulari d’exercici de drets.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Val la pena llegir junts dos fets: l’etiqueta de l’App Store no declara cap dada desvinculada de la identitat —tot el que recull ho lliga a la persona— i la política no diu a quin país van les dades. La combinació deixa la persona usuària sense saber ni què se separa del seu nom ni on acaba.',
        openQuestions: [
          'A quins tercers països es transfereixen realment les dades, i en particular a la Xina continental?',
          'Quins són els passos i els terminis reals de la pàgina de cancel·lació del compte?',
        ],
      },
    },

    /* ═══════════════════════════ eDreams ═══════════════════════════ */
    {
      slug: 'edreams',
      name: 'eDreams',
      company: 'vacaciones-edreams',
      categories: ['viatges-i-allotjament'],
      tagline: 'Els terminis de conservació més concrets del lot, una política sense revisar des del 2023 i una sanció de nou milions per patrons foscos',
      summary:
        'eDreams és alhora la millor i la pitjor documentació del lot. La política és la més precisa en terminis de conservació i en la llista de tractaments als quals et pots oposar, però no s’ha revisat des del juny del 2023, es carrega per JavaScript des d’un fitxer JSON i basa les transferències als sistemes globals de distribució en l’excepció contractual de l’article 49 en lloc de clàusules tipus. El febrer del 2026 l’autoritat italiana de la competència va multar el grup amb nou milions d’euros per patrons foscos a la subscripció Prime.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      userBase: 'Més de set milions de persones subscrites a Prime el febrer del 2025',
      links: {
        website: 'https://www.edreams.es/',
        privacyPolicy: 'https://www.edreams.es/politica-de-privacidad/',
        terms: 'https://www.edreams.es/prime/condiciones-generales-de-venta/',
        appStore: 'https://apps.apple.com/es/app/id551367321',
      },
      accountRequired: f('partial', 'official', ['edreams-privacy-policy'], 'Es pot comprar sense compte, però la subscripció Prime i la gestió de les reserves el requereixen.'),
      openSource: f('no', 'editorial', [], 'Aplicació privativa: no consta cap publicació del codi font.', { licence: 'Privativa' }),
      dataSummary:
        'Un cercador de vols acumula les rutes que has mirat i no has comprat, que diuen tant com les que has comprat. eDreams hi suma el document de viatge, el mitjà de pagament guardat per defecte si ets Prime i un historial de cerques que declara a Apple com a dada de seguiment.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['edreams-privacy-policy', 'edreams-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['edreams-privacy-policy', 'edreams-app-store'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['edreams-app-store'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['edreams-privacy-policy'], note: 'Les dades del passatger es transmeten a l’aerolínia i als sistemes globals de distribució.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['edreams-privacy-policy'], note: 'La política diu que si ets Prime les dades de pagament es desen automàticament per execució del contracte, i que si no ho ets cal consentiment.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'brokers', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['edreams-app-store'], note: 'Declarat sota «Datos usados para rastrearte» i també sota publicitat de tercers.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['edreams-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'brokers', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['edreams-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['edreams-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['edreams-app-store'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['edreams-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['edreams-app-store'] }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['edreams-privacy-policy'], note: 'La política parla de contingut basat en interessos i de publicitat dirigida al web, al correu, als dispositius connectats i a l’aplicació.' }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['edreams-privacy-policy'], note: 'La política afirma que les contrasenyes no s’emmagatzemen mai en un format no xifrat.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['edreams-app-store'], 'Cinc categories sota «Datos usados para rastrearte»: compres, historial de cerca, identificadors, dades d’ús i diagnòstics.'),
        advertisingIdentifiers: f('yes', 'official', ['edreams-app-store'], 'L’identificador de dispositiu es declara sota publicitat de tercers.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['edreams-privacy-policy'], 'La política descriu solucions de màrqueting i de gestió de clients que mostren anuncis personalitzats a internet.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['edreams-privacy-policy'], 'Publicitat dirigida al web, al correu electrònic, als dispositius connectats i dins de l’aplicació.', {
          optOutUrl:
            'https://edreamsodigeo-privacy.my.onetrust.com/webform/6c5da0dc-05a2-4059-a58b-a144b7de6001/43ec5229-ef14-4187-b376-8a103db962b4',
        }),
        profiling: f('yes', 'official', ['edreams-privacy-policy'], 'S’hi pot oposar expressament: la política llista el perfilat i les ofertes categoritzades i personalitzades entre els tractaments objectables.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['edreams-privacy-policy'], 'Aerolínies, hotels i lloguer de cotxes com a responsables independents, asseguradores de viatge, sistemes globals de distribució i de reserva, metacercadors, passarel·les, plataformes socials i agències de cobrament.'),
        intraGroupSharing: f('yes', 'official', ['edreams-privacy-policy'], 'Compartició dins del grup eDreams ODIGEO, amb un delegat de protecció de dades comú.'),
        dataBrokerSales: f('no', 'official', ['edreams-privacy-policy'], 'La política declara que no es venen ni es comparteixen dades en el sentit de la normativa californiana.'),
        internationalTransfers: f('partial', 'official', ['edreams-privacy-policy'], 'Els servidors són a la Unió Europea, però per als sistemes globals de distribució, els agregadors, les aerolínies, els hotels i el lloguer de vehicles fora de la Unió la política invoca expressament l’excepció contractual de l’article 49, no les clàusules contractuals tipus. El Comitè Europeu de Protecció de Dades considera que aquesta excepció ha de ser ocasional i no sistemàtica.', { mechanism: 'derogation' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['edreams-privacy-policy'], 'És la política amb els terminis més concrets de tot el lot, amb una xifra per a cada tipus de tractament.'),
        dataAfterDeletion: f('partial', 'official', ['edreams-privacy-policy'], 'La política adverteix que pot no ser possible esborrar-ho tot per raons contractuals, antifrau i legals, i que les còpies residuals de seguretat romanen fins a una setmana.'),
        periods: [
          { period: 'Màxim 5 anys des del final de l’últim viatge o de l’última acció al compte.', sources: ['edreams-privacy-policy'] },
          { period: '1 any per a les reserves no completades, per seguretat i antifrau.', sources: ['edreams-privacy-policy'] },
          { period: '10 anys per a les finalitats fiscals i comptables.', sources: ['edreams-privacy-policy'] },
          { period: '3 anys per a les interaccions de protecció de dades.', sources: ['edreams-privacy-policy'] },
          { period: '7 dies per al correu de recuperació d’una reserva abandonada.', sources: ['edreams-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['edreams-privacy-policy'], 'El dret de supressió s’exerceix pel formulari de privadesa del grup.'),
        selfService: f('no', 'official', ['edreams-privacy-policy'], 'No hem trobat cap opció d’eliminació dins del compte ni cap article d’ajuda que l’expliqui: el camí és el formulari OneTrust.'),
        directUrl:
          'https://edreamsodigeo-privacy.my.onetrust.com/webform/6c5da0dc-05a2-4059-a58b-a144b7de6001/43ec5229-ef14-4187-b376-8a103db962b4',
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Obre el formulari de privadesa d’eDreams ODIGEO allotjat a OneTrust.',
          'Tria la sol·licitud de supressió i identifica’t.',
          'Si tens una subscripció Prime activa, cancel·la-la abans per evitar renovacions posteriors.',
        ],
        obstacles:
          'La política no publica cap adreça del delegat de protecció de dades, tot i dir que n’hi ha un de comú per al grup: l’única via és el formulari.',
        dataRetained: 'Dades fiscals i comptables durant deu anys i còpies residuals de seguretat fins a una setmana.',
        sources: ['edreams-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['edreams-privacy-policy'], 'La portabilitat es reconeix en format estructurat i d’ús comú «cuando sea técnicamente factible», però només pel formulari.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['edreams-privacy-policy'], 'Hi ha un formulari de drets complet, però cap adreça de correu del delegat de protecció de dades.', {
          url: 'https://edreamsodigeo-privacy.my.onetrust.com/webform/6c5da0dc-05a2-4059-a58b-a144b7de6001/43ec5229-ef14-4187-b376-8a103db962b4',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['edreams-privacy-policy'], 'La política llista de manera molt granular els tractaments als quals et pots oposar i els consentiments que pots retirar, inclosos el perfilat i les ofertes personalitzades.'),
        telemetryOptOut: f('partial', 'official', ['edreams-privacy-policy'], 'Les galetes analítiques i publicitàries es configuren des del banner; no consta cap control per a la telemetria de l’aplicació.'),
        granularControls: f('yes', 'official', ['edreams-privacy-policy'], 'Configuració del compte, baixa a cada comunicació comercial i formulari amb oposicions detallades per tractament.'),
        defaultPosture: 'mixed',
        darkPatterns: f('yes', 'regulator', ['edreams-agcm-2026'], 'L’autoritat italiana de la competència va declarar acreditat l’ús de patrons foscos i de tècniques de pressió temporal i d’escassetat artificial per induir la subscripció a Prime, i l’obstaculització del dret de desistiment.'),
        darkPatternList: [
          {
            type: 'nagging',
            severity: 'high',
            description:
              'Estratègies manipulatives i de pressió temporal per induir la subscripció a Prime, amb informació ambigua sobre què inclou, segons la resolució de l’autoritat italiana.',
            sources: ['edreams-agcm-2026'],
          },
          {
            type: 'hidden-exit',
            severity: 'high',
            description:
              'Obstaculització del dret de desistiment mitjançant estratègies de retenció, sancionada amb tres milions d’euros addicionals.',
            sources: ['edreams-agcm-2026'],
          },
        ],
      },
      security: {
        e2ee: na('El servei no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('No hem trobat cap declaració pública sobre el xifratge en trànsit.'),
        atRestEncryption: f('partial', 'official', ['edreams-privacy-policy'], 'L’única afirmació és que les contrasenyes no s’emmagatzemen mai en un format no xifrat.'),
        mfa: unknown('No hem trobat documentació sobre la verificació en dos passos.'),
        independentAudits: unknown('No hem pogut verificar en cap pàgina oficial viva les certificacions PCI DSS i ISO 27001 que s’atribueixen al grup.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni cap política de divulgació responsable.'),
        vulnerabilityDisclosure: f('no', 'official', ['edreams-privacy-policy'], 'El domini edreams.es no publica cap fitxer security.txt i la política no dona cap canal de seguretat: la secció «Proteja sus datos» són consells a la persona usuària.'),
      },
      alternatives: [
        {
          app: 'vueling',
          comparability: 'partial',
          rationale:
            'Comprar directament a la companyia aèria evita l’intermediari, els seus perfils de màrqueting i la subscripció Prime.',
          tradeOffs: 'Vueling no publica cap política de privadesa completa i només cobreix la seva pròpia xarxa.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Tenim dues troballes que conviuen malament. La primera és positiva: cap altra política del lot dona terminis de conservació tan concrets ni llista tan bé a què et pots oposar. La segona és que el text no s’ha revisat des del juny del 2023 i que el web el serveix com un fitxer JSON per JavaScript, de manera que amb l’script desactivat la pàgina de la política queda pràcticament buida.',
        openQuestions: [
          'Per què les transferències als sistemes globals de distribució es basen en l’excepció de l’article 49 i no en clàusules contractuals tipus?',
          'Quina entitat és realment la responsable: la política diu Vacaciones eDreams S.L.U. i la fitxa de comerciant de l’App Store diu eDreams International Network, S.L.',
          'Hi ha cap expedient d’una autoritat de protecció de dades espanyola sobre la subscripció Prime?',
        ],
      },
    },
  ],
  incidents: [
    {
      slug: 'booking-notificacio-tardana-2019',
      title: 'Sanció de 475.000 euros a Booking.com per notificar tard una bretxa de dades',
      type: 'regulatory-fine',
      severity: 'medium',
      apps: ['booking'],
      company: 'booking-com-bv',
      occurredAt: '2018-12-01',
      disclosedAt: '2021-03-31',
      description:
        'El desembre del 2018 uns estafadors van obtenir per telèfon les credencials d’empleats de quaranta hotels dels Emirats Àrabs Units i van accedir, a través d’un sistema de Booking.com, a les dades de 4.109 persones: nom, adreça, telèfon i detalls de la reserva. En 283 casos van obtenir dades de targeta de crèdit i en 97 també el codi de seguretat. Després van intentar estafar les persones afectades fent-se passar per personal de Booking.com. L’empresa en va tenir coneixement el 13 de gener del 2019 i no ho va notificar a l’autoritat neerlandesa fins al 7 de febrer, vint-i-dos dies després del termini de setanta-dues hores.',
      affectedPeople: '4.109 persones, amb dades de targeta de 283 i codi de seguretat de 97.',
      regulatory: {
        authority: 'Autoriteit Persoonsgegevens (Països Baixos)',
        fineAmountEur: 475000,
        legalBasis: 'Article 33.1 del RGPD',
        status: 'final',
      },
      sources: ['booking-ap-fine-2021'],
    },
    {
      slug: 'edreams-agcm-prime-2026',
      title: 'Multa de nou milions d’euros a eDreams per patrons foscos a la subscripció Prime',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['edreams'],
      company: 'vacaciones-edreams',
      occurredAt: '2026-02-04',
      disclosedAt: '2026-02-04',
      description:
        'L’autoritat italiana de la competència i del mercat va sancionar Vacaciones eDreams, eDreams International Network i eDreams S.r.l. amb sis milions d’euros per fer servir patrons foscos, informació ambigua sobre què inclou la subscripció Prime i tècniques de pressió temporal i d’escassetat artificial per induir-hi les persones usuàries, i amb tres milions més, en solidari, per obstaculitzar l’exercici del dret de desistiment amb estratègies de retenció. No és una sanció de protecció de dades, sinó de dret de consum, però documenta el disseny de la interfície. El grup va anunciar que hi recorreria.',
      affectedPeople: 'Persones usuàries de la plataforma a Itàlia; la subscripció Prime superava els set milions de persones el febrer del 2025.',
      regulatory: {
        authority: 'Autorità Garante della Concorrenza e del Mercato (Itàlia)',
        fineAmountEur: 9000000,
        legalBasis: 'Articles 20 a 26 del Codi del Consum italià',
        status: 'appealed',
      },
      sources: ['edreams-agcm-2026'],
    },
    {
      slug: 'trip-com-ctrip-targetes-2014',
      title: 'Exposició de dades de targeta de crèdit a Ctrip, la marca xinesa del grup',
      type: 'breach',
      severity: 'medium',
      apps: ['trip-com'],
      occurredAt: '2014-03-22',
      disclosedAt: '2014-03-24',
      description:
        'Una funció de prova que havia d’estar desactivada desava localment fitxers amb dades de targeta de crèdit, inclòs el codi de seguretat, i els deixava exposats. Ctrip, la marca xinesa del mateix grup que opera Trip.com, va tancar la vulnerabilitat i va notificar les persones afectades. És un incident antic i d’abast reduït, però documenta com el grup gestiona les dades de pagament.',
      affectedPeople: '93 comptes notificats per la companyia.',
      regulatory: {
        status: 'final',
      },
      sources: ['trip-com-ctrip-breach-2014'],
    },
  ],
  storeIds: {
    booking: 'com.booking.BookingApp',
    holafly: 'com.holafly.Customers',
    airbnb: 'com.airbnb.app',
    'trip-com': 'com.ctrip.EBooking',
    edreams: 'com.edreams.flights',
    cabify: 'com.cabify.iosrider',
    blablacar: 'com.comuto.comuto',
    tribbu: 'com.hoopcarpool.HooP',
    renfe: 'com.renfeviajeros.ticket',
    vueling: 'com.vueling.Vueling',
  },
}
