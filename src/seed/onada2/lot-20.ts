import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/**
 * Lot 20 de la segona onada: els pagaments i la banca (Revolut, BBVA, PayPal,
 * Trade Republic, Bizum Pay, Tricount) i les targetes de fidelització de les
 * benzineres (Waylet i Moeve Gow), més dues aplicacions d’estil de vida molt
 * diferents entre elles: Bumble i el traductor de miols PetMira.
 */
export const lot: SeedLot = {
  companies: [
    /* ── Pawnese ── */
    {
      slug: 'pawnese',
      name: 'Pawnese',
      legalName: 'PAWNESE HK LIMITED',
      description:
        'Desenvolupadora de PetMira amb seu a la Regió Administrativa Especial de Hong Kong. La seva política de privadesa situa el tractament a Hong Kong i sotmet els conflictes als tribunals de Canton, i no declara cap establiment a la Unió Europea ni cap representant a efectes del RGPD.',
      headquartersCountry: 'HK',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://legal.pawnese.com/pet/en/privacy-policy.html',
      productDomains: ['petmira.ai', 'pawnese.com'],
      privacyContact: 'support@petmira.ai',
    },

    /* ── Bumble ── */
    {
      slug: 'bumble-inc',
      name: 'Bumble Inc.',
      legalName: 'Bumble Inc.',
      description:
        'Grup nord-americà cotitzat que explota les aplicacions de cites Bumble i Badoo. El desenvolupador que figura a l’App Store espanyol és Bumble Holding Limited.',
      headquartersCountry: 'US',
      ownership: 'public',
      primaryRevenueModel: 'freemium',
      website: 'https://bumble.com/',
      productDomains: ['bumble.com', 'badoo.com'],
    },
    {
      slug: 'badoo-trading',
      name: 'Badoo Trading Limited',
      legalName: 'Badoo Trading Limited',
      parent: 'bumble-inc',
      description:
        'Societat britànica que la política de privadesa de Bumble declara com a responsable del tractament juntament amb Bumble Trading LLC. Bumble Trading Limited és qui dona suport per exercir els drets del RGPD; la política no declara cap establiment principal a la Unió Europea.',
      headquartersCountry: 'GB',
      ownership: 'subsidiary',
      primaryRevenueModel: 'freemium',
      website: 'https://bumble.com/',
      productDomains: ['bumble.com'],
      privacyContact: 'DPO@bumble.com',
    },

    /* ── Moeve (abans Cepsa) ── */
    {
      slug: 'moeve',
      name: 'Moeve',
      legalName: 'Compañía Española de Petróleos, S.A.U.',
      description:
        'Companyia energètica espanyola, fins al 2024 coneguda com a Cepsa. Opera estacions de servei, refineries i comercialització d’energia, i és el desenvolupador que consta a l’App Store de l’aplicació Moeve Gow.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      foundedYear: 1929,
      primaryRevenueModel: 'commerce',
      website: 'https://www.moeve.es/',
      productDomains: ['moeve.es', 'cepsa.es', 'moeveglobal.com'],
    },
    {
      slug: 'moeve-comercial',
      name: 'Moeve Comercial Petróleo',
      legalName: 'Cepsa Comercial Petróleo, S.A.U.',
      parent: 'moeve',
      description:
        'Societat amb NIF A-80298896 i domicili al passeig de la Castellana, 259 A, de Madrid, que consta com a responsable del tractament a la política de privadesa de l’aplicació Moeve Gow.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      primaryRevenueModel: 'commerce',
      website: 'https://www.moeve.es/',
      productDomains: ['moeve.es'],
      privacyContact: 'dpo@cepsa.com',
    },

    /* ── Revolut ── */
    {
      slug: 'revolut',
      name: 'Revolut',
      legalName: 'Revolut Ltd',
      description:
        'Grup financer amb seu a Londres que ofereix comptes, targetes, canvi de divisa, inversió i criptoactius. L’avís de privadesa que hem pogut llegir identifica Revolut Bank UK Ltd, Revolut Ltd i Revolut Trading Ltd; la versió aplicable a l’Espai Econòmic Europeu no s’ha deixat consultar.',
      headquartersCountry: 'GB',
      ownership: 'private',
      foundedYear: 2015,
      primaryRevenueModel: 'mixed',
      website: 'https://www.revolut.com/',
      productDomains: ['revolut.com'],
      privacyContact: 'dpo@revolut.com',
    },

    /* ── Bizum ── */
    {
      slug: 'bizum',
      name: 'Bizum',
      legalName: 'Bizum, S.L.',
      description:
        'Societat amb CIF B-87599478 i domicili al carrer Francisco Sancha, 12, de Madrid, creada per la banca espanyola per operar el servei de pagaments immediats entre particulars. Les entitats adherides són els bancs que donen accés al servei.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      foundedYear: 2016,
      primaryRevenueModel: 'commerce',
      website: 'https://bizum.com/',
      productDomains: ['bizum.com', 'bizum.es', 'bizumpay.com'],
      privacyContact: 'contacto@bizum.es',
    },

    /* ── Trade Republic ── */
    {
      slug: 'trade-republic-bank',
      name: 'Trade Republic Bank',
      legalName: 'Trade Republic Bank GmbH',
      description:
        'Banc alemany amb llicència del BaFin i domicili a Brunnenstr. 19-21, de Berlín, que ofereix intermediació borsària, plans d’inversió i compte remunerat a través d’una aplicació mòbil.',
      headquartersCountry: 'DE',
      euEstablishment: 'DE',
      leadSupervisoryAuthority: 'berlin',
      ownership: 'private',
      foundedYear: 2015,
      primaryRevenueModel: 'commerce',
      website: 'https://traderepublic.com/',
      productDomains: ['traderepublic.com'],
      privacyContact: 'dataprotection@traderepublic.com',
    },

    /* ── bunq ── */
    {
      slug: 'bunq',
      name: 'bunq',
      legalName: 'bunq B.V.',
      description:
        'Banc neerlandès amb domicili a Basisweg 32, d’Amsterdam, i número 54992060 a la cambra de comerç. Des del 2022 és propietari de Tricount, i consta com a responsable del tractament de l’aplicació.',
      headquartersCountry: 'NL',
      euEstablishment: 'NL',
      leadSupervisoryAuthority: 'ap-nl',
      ownership: 'private',
      foundedYear: 2012,
      primaryRevenueModel: 'subscription',
      website: 'https://www.bunq.com/',
      productDomains: ['bunq.com', 'tricount.com'],
      privacyContact: 'privacy@tricount.com',
    },

    /* ── BBVA ── */
    {
      slug: 'bbva',
      name: 'BBVA',
      legalName: 'Banco Bilbao Vizcaya Argentaria, S.A.',
      description:
        'Grup bancari espanyol cotitzat amb NIF A-48265169 i seu a Madrid. La resolució sancionadora de l’AEPD del 2020 el descriu com una de les entitats líders del país, amb més de 10 milions de clients.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'public',
      foundedYear: 1857,
      primaryRevenueModel: 'mixed',
      website: 'https://www.bbva.es/',
      productDomains: ['bbva.es', 'bbva.com'],
    },

    /* ── Repsol ── */
    {
      slug: 'repsol',
      name: 'Repsol',
      legalName: 'Repsol, S.A.',
      description:
        'Companyia energètica espanyola cotitzada, amb domicili al carrer Méndez Álvaro, 44, de Madrid. La seva política de privadesa és comuna a Repsol, S.A. i a les societats del grup, i és la que s’aplica a l’aplicació de pagament i fidelització Waylet.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'public',
      foundedYear: 1987,
      primaryRevenueModel: 'commerce',
      website: 'https://www.repsol.es/',
      productDomains: ['repsol.es', 'repsol.com', 'waylet.es'],
      privacyContact: 'rgpd.crc@repsol.com',
    },

    /* ── PayPal ── */
    {
      slug: 'paypal',
      name: 'PayPal Holdings',
      legalName: 'PayPal Holdings, Inc.',
      description:
        'Grup nord-americà cotitzat de serveis de pagament en línia. Inclou PayPal, Venmo, Braintree, Xoom, Hyperwallet i Fastlane, que la declaració de privadesa tracta com un sol conjunt de serveis.',
      headquartersCountry: 'US',
      ownership: 'public',
      foundedYear: 1998,
      primaryRevenueModel: 'commerce',
      website: 'https://www.paypal.com/',
      productDomains: ['paypal.com', 'venmo.com', 'xoom.com', 'braintreepayments.com'],
    },
    {
      slug: 'paypal-europe',
      name: 'PayPal (Europe)',
      legalName: 'PayPal (Europe) S.à r.l. et Cie, S.C.A.',
      parent: 'paypal',
      description:
        'Entitat de crèdit luxemburguesa que la declaració de privadesa identifica com a responsable del tractament per a les persones usuàries de la Unió Europea i de l’Espai Econòmic Europeu. La seva autoritat de control principal és la Commission Nationale pour la Protection des Données.',
      headquartersCountry: 'LU',
      euEstablishment: 'LU',
      leadSupervisoryAuthority: 'cnpd-lu',
      ownership: 'subsidiary',
      primaryRevenueModel: 'commerce',
      website: 'https://www.paypal.com/es/',
      productDomains: ['paypal.com'],
    },
  ],

  sources: [
    /* ── PetMira ── */
    s('petmira-privacy-policy', 'PetMira Privacy Policy', 'https://legal.pawnese.com/pet/en/privacy-policy.html', 'PAWNESE HK LIMITED', 'privacy-policy', 'primary', {
      summary:
        'Política de PetMira: àudio del micròfon per traduir els miols, crides a serveis d’IA de tercers, SDK d’analítica i publicitat (Sensors Analytics, ByteDance, AppsFlyer, Firebase i Tencent), transferències transfrontereres i cap procediment d’eliminació de compte.',
    }),
    s('petmira-app-store', 'PetMira - Traductor Felino en el App Store', 'https://apps.apple.com/es/app/id6776477513', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de PetMira: identificadors utilitzats per rastrejar-te, i identificadors i diagnòstics no vinculats amb la identitat. No declara cap dada vinculada.',
    }),

    /* ── Bumble ── */
    s('bumble-privacy-policy', 'Política de privacidad de Bumble', 'https://bumble.com/es/privacy', 'Bumble', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de Bumble: responsabilitat conjunta de Badoo Trading Limited i Bumble Trading LLC, dades sensibles voluntàries, proveïdors de moderació i verificació (Cinder, Zendesk, Veriff i OpenAI) i terminis de conservació per categoria després d’eliminar el compte.',
    }),
    s('bumble-app-store', 'Bumble: Chat. Ligar. Citas en el App Store', 'https://apps.apple.com/es/app/id930441707', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Bumble: ubicació, dades de contacte, identificadors i dades d’ús utilitzats per rastrejar-te, i onze categories vinculades amb la identitat, incloses les dades sensibles i les de salut.',
    }),

    /* ── Moeve Gow ── */
    s('moeve-gow-privacy-policy', 'Política de privacidad de la app Moeve Gow', 'https://www.moeve.es/xmartplace/politica_privacidad.html', 'Cepsa Comercial Petróleo, S.A.U.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de l’aplicació: responsable Cepsa Comercial Petróleo amb NIF A-80298896, perfilat intern per interès legítim i extern amb consentiment, geolocalització amb doble base jurídica i exercici de drets a derechos.arco@cepsa.com.',
    }),
    s('moeve-gow-app-store', 'Moeve / Cepsa Gow en el App Store', 'https://apps.apple.com/es/app/id1570649924', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Moeve Gow: dades d’ús utilitzades per rastrejar-te i sis categories recollides sense vincular amb la identitat, entre elles la informació financera i la ubicació. No declara cap dada vinculada.',
    }),

    /* ── Revolut ── */
    s('revolut-privacy-hub', 'Revolut Privacy Policy', 'https://www.revolut.com/privacy-policy/', 'Revolut', 'privacy-policy', 'primary', {
      summary:
        'Pàgina de privadesa de Revolut: enumera els avisos per tipus de client, declara el disseny orientat a la privadesa, els controls «Security & privacy» de l’aplicació i el contacte dpo@revolut.com.',
    }),
    s('revolut-app-store', 'Revolut — Más que un banco en el App Store', 'https://apps.apple.com/es/app/id932493382', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Revolut: identificadors utilitzats per rastrejar-te; compres, dades de contacte, identificadors, dades d’ús i diagnòstics vinculats amb la identitat.',
    }),

    /* ── Bizum ── */
    s('bizum-pay-privacy-policy', 'Política de privacidad de la app Bizum Pay', 'https://bizumpay.com/politica-de-privacidad-app-bizum-pay/', 'Bizum, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de l’aplicació Bizum Pay: responsable Bizum, S.L. amb CIF B-87599478, bases jurídiques per finalitat, cap cessió a tercers fora de l’obligació legal, tractament dins de l’EEE i drets a contacto@bizum.es.',
    }),
    s('bizum-privacy-policy', 'Política de privacidad de Bizum', 'https://bizum.com/es/politica-de-privacidad/', 'Bizum, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política general del servei Bizum: àlies format pel nom i les inicials per confirmar el destinatari, cessió de dades a les entitats adherides per prestar el servei i terminis de conservació de dos a cinc anys.',
    }),
    s('bizum-pay-app-store', 'Bizum Pay en el App Store', 'https://apps.apple.com/es/app/id6761751498', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Bizum Pay: només dades d’ús i diagnòstics, i totes dues sense vincular amb la identitat. No declara cap dada utilitzada per rastrejar.',
    }),

    /* ── Trade Republic ── */
    s('trade-republic-privacy-notice', 'Aviso de privacidad de la aplicación Trade Republic', 'https://assets.traderepublic.com/assets/files/app_privacy_policy_es.pdf', 'Trade Republic Bank GmbH', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Avís de privadesa de 64 pàgines, bilingüe i datat el 22 de setembre de 2026: responsable Trade Republic Bank GmbH, SDK de tercers (Firebase, Adjust, Braze, Adyen, Sentry i GrowthBook), publicitat a xarxes socials amb dades xifrades, conservació de deu anys després de tancar el compte i decisions automatitzades limitades.',
    }),
    s('trade-republic-app-store', 'Trade Republic: Broker & Banco en el App Store', 'https://apps.apple.com/es/app/id1410703839', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Trade Republic: dades de contacte, identificadors i dades d’ús utilitzats per rastrejar-te, i informació financera, ubicació i contingut vinculats amb la identitat.',
    }),

    /* ── Tricount ── */
    s('tricount-privacy-policy', 'tricount Privacy Policy', 'https://tricount.com/documents/privacy-policy', 'bunq B.V.', 'privacy-policy', 'primary', {
      summary:
        'Política de Tricount: responsable bunq B.V., finalitats publicitàries amb interès legítim i consentiment, anunci que la versió 8 no contindrà publicitat, transferències amb clàusules contractuals tipus i supressió que no esborra les despeses compartides.',
    }),
    s('tricount-app-store', 'tricount - Gastos compartidos en el App Store', 'https://apps.apple.com/es/app/id349866256', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Tricount: identificadors utilitzats per rastrejar-te; dades de contacte, identificadors i diagnòstics vinculats amb la identitat, i contingut de l’usuari no vinculat.',
    }),

    /* ── BBVA ── */
    s('bbva-app-store', 'BBVA España | Banca Online en el App Store', 'https://apps.apple.com/es/app/id325813155', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de BBVA: informació financera, dades de contacte i identificadors vinculats amb la identitat; ubicació, contactes, contingut, ús i diagnòstics sense vincular. No declara cap dada utilitzada per rastrejar.',
    }),
    s('bbva-aepd-2020', 'Resolución del procedimiento sancionador PS/00070/2019 (BBVA)', 'https://www.aepd.es/documento/ps-00070-2019.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      publishedAt: '2020-11-18',
      summary:
        'Resolució de 146 pàgines que imposa a BBVA dos milions d’euros per infracció dels articles 13 i 14 del RGPD i tres milions més per infracció de l’article 6, i li requereix adequar en sis mesos la informació als clients i el procediment de consentiment, inclosa la pantalla de l’aplicació amb la cessió a tercers activada per defecte.',
    }),

    /* ── Waylet ── */
    s('waylet-app-store', 'Waylet. Pagos con el móvil en el App Store', 'https://apps.apple.com/es/app/id494847823', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Waylet: historial de navegació utilitzat per rastrejar-te, dades de contacte vinculades amb la identitat i sis categories més sense vincular.',
    }),
    s('waylet-repsol-privacy-policy', 'Política de privacidad de Repsol', 'https://www.repsol.com/es/pie-de-pagina/politica-de-privacidad/index.cshtml', 'Repsol, S.A.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política comuna de Repsol i les societats del grup: dades identificatives, transaccionals, de geolocalització, biomètriques i de navegació; perfils simples basats en els consums; transferències internacionals amb normes corporatives vinculants o clàusules tipus, i drets a rgpd.crc@repsol.com.',
    }),

    /* ── PayPal ── */
    s('paypal-privacy-statement', 'Declaración de privacidad de PayPal', 'https://www.paypal.com/es/legalhub/privacy-full', 'PayPal (Europe) S.à r.l. et Cie, S.C.A.', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-07-06',
      summary:
        'Declaració de privadesa de PayPal: responsable per a la Unió Europea PayPal (Europe) S.à r.l. et Cie, S.C.A. amb la CNPD luxemburguesa com a autoritat principal, catorze categories de dades incloses les inferides i les biomètriques, decisions automatitzades de risc i solvència, conservació de deu anys després de la relació i renúncia expressa a atendre el senyal «Do Not Track».',
    }),
    s('paypal-app-store', 'PayPal en el App Store', 'https://apps.apple.com/es/app/id283646709', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de PayPal: dades d’ús utilitzades per rastrejar-te i onze categories vinculades amb la identitat, entre elles l’historial de cerca, l’historial de navegació i els contactes.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ PetMira ═══════════════════════════ */
    {
      slug: 'petmira',
      name: 'PetMira',
      company: 'pawnese',
      categories: ['assistents-d-ia', 'utilitats'],
      tagline: 'Un traductor de miols que envia l’àudio del micròfon a serveis d’IA de tercers',
      summary:
        'PetMira grava el que fa el gat i en tradueix les vocalitzacions amb models d’intel·ligència artificial que no són seus: la política reconeix que l’aplicació crida interfícies de tercers, entre elles les de Google. L’etiqueta de l’App Store declara identificadors utilitzats per rastrejar-te, i la política enumera SDK d’analítica i de publicitat de Sensors Analytics, ByteDance, AppsFlyer, Firebase i Tencent. El responsable és una societat de Hong Kong que no declara cap establiment europeu.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Hong Kong',
      userBase: 'Aplicació d’estil de vida present al top gratuït de l’App Store espanyol',
      links: {
        privacyPolicy: 'https://legal.pawnese.com/pet/en/privacy-policy.html',
        appStore: 'https://apps.apple.com/es/app/id6776477513',
      },
      accountRequired: unknown(
        'La política no descriu cap registre i l’etiqueta de l’App Store no declara cap dada vinculada amb la identitat, però no hem pogut confirmar si l’aplicació funciona sense compte.',
      ),
      openSource: f('no', 'official', ['petmira-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El que recull no és només informació del gat. L’àudio del micròfon i les fotografies de la casa viatgen a serveis d’intel·ligència artificial de tercers per ser interpretats, i els identificadors del dispositiu van a plataformes d’atribució publicitària. Del bestiar en surt un perfil publicitari de la persona que el cuida.',
      dataCollection: [
        row('veu-i-audio', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['petmira-privacy-policy'], note: 'La política declara que l’àudio del micròfon s’utilitza per traduir les vocalitzacions i que l’aplicació crida interfícies de serveis d’IA de tercers per fer-ho.' }),
        row('fotografies-i-videos', 'optional', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['petmira-privacy-policy'], note: 'Imatges de la càmera i de l’àlbum, per a l’anàlisi d’estat de l’animal.' }),
        row('contingut-de-missatges', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['petmira-privacy-policy'], note: 'Registres de diàleg amb l’assistent i historial de traduccions. No són missatges entre persones, però sí el contingut que la persona escriu a l’aplicació.' }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['petmira-privacy-policy', 'petmira-app-store'], note: 'La política esmenta l’IDFA i l’IDFV compartits amb AppsFlyer, ByteDance i Tencent per a serveis publicitaris.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['petmira-app-store', 'petmira-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['petmira-app-store', 'petmira-privacy-policy'], note: 'Registres de l’assistent i dades de caiguda de l’aplicació.' }),
        row('historial-de-compres', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['petmira-privacy-policy'], note: 'La política diu que de la subscripció només se’n tracta l’estat i la validesa.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['petmira-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['petmira-privacy-policy'], 'La política cita expressament l’IDFA i l’IDFV entre la informació del dispositiu que es comparteix amb proveïdors publicitaris.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['petmira-privacy-policy'], 'SDK de Sensors Analytics, ByteDance, AppsFlyer, Firebase i Tencent integrats a l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['petmira-privacy-policy'], 'La política declara que els identificadors del dispositiu es comparteixen amb tercers «for advertising services».'),
        profiling: unknown('La política no descriu cap elaboració de perfils més enllà de la compartició amb plataformes publicitàries.'),
        aiTraining: unknown('La política diu que l’aplicació crida models de tercers, però no si les gravacions i els diàlegs s’utilitzen per entrenar-los.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['petmira-privacy-policy'], 'Serveis d’IA de tercers per a la traducció i el diàleg, i SDK d’analítica i publicitat.'),
        intraGroupSharing: unknown('La política no descriu cap estructura de grup.'),
        dataBrokerSales: unknown('No consta cap venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['petmira-privacy-policy'], 'La política adverteix que, fora de la Xina continental i de Hong Kong, l’ús de l’aplicació pot implicar transferències transfrontereres, sense identificar cap mecanisme del RGPD.', {
          mechanism: 'unknown',
        }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem localitzat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['petmira-privacy-policy'], 'La política diu que el període d’emmagatzematge el determina la persona usuària, que pot esborrar l’aplicació o les dades locals quan vulgui: no fixa cap termini propi.'),
        dataAfterDeletion: unknown('La política no diu què passa amb les dades que ja han arribat als proveïdors d’IA, d’analítica i de publicitat.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['petmira-privacy-policy'], 'No hi ha cap procediment d’eliminació de compte: la política només ofereix esborrar manualment els perfils de mascota, els registres de traducció i els de diàleg, o desinstal·lar l’aplicació.'),
        selfService: f('partial', 'official', ['petmira-privacy-policy'], 'L’esborrat és manual i local, element per element.'),
        difficulty: 'hard',
        steps: [
          'Esborra des de l’aplicació els perfils de mascota, els registres de traducció i els de diàleg que vulguis eliminar.',
          'Desinstal·la l’aplicació per eliminar les dades locals.',
          'Escriu a support@petmira.ai per demanar la supressió de les dades que quedin als servidors, invocant l’article 17 del RGPD.',
        ],
        obstacles:
          'Sense compte identificable i sense responsable establert a la Unió Europea, exercir el dret de supressió depèn de la bona voluntat d’una adreça de correu.',
        sources: ['petmira-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política no esmenta cap dret de portabilitat ni cap manera d’exportar les dades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['petmira-privacy-policy'], 'La política enumera accés, rectificació, supressió i retirada del consentiment, amb un únic canal de contacte per correu electrònic.', {
          url: 'mailto:support@petmira.ai',
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('La política no descriu cap control per desactivar la publicitat personalitzada.'),
        telemetryOptOut: unknown('La política no descriu cap control sobre els SDK d’analítica.'),
        granularControls: unknown('No hem localitzat cap panell de privadesa dins de l’aplicació.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem revisat els fluxos de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades entre persones usuàries, i l’àudio s’ha de poder desxifrar per processar-lo.'),
        transportEncryption: unknown('La política no documenta el xifratge del canal.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('La política no descriu cap sistema d’autenticació.'),
        independentAudits: unknown('No consten auditories independents.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni cap fitxer security.txt.'),
        vulnerabilityDisclosure: unknown('No hem trobat cap canal de divulgació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'El contrast entre la promesa i la lletra petita és el que fa útil aquesta fitxa: una aplicació que es presenta com un joc per a gats envia àudio de l’habitatge a proveïdors d’intel·ligència artificial i identificadors publicitaris a plataformes d’atribució, sota una política que no cita ni una sola vegada el RGPD.',
        openQuestions: [
          'L’aplicació funciona sense compte o en crea un d’implícit lligat al dispositiu?',
          'Quin és el proveïdor exacte del model que tradueix les vocalitzacions i quant de temps en conserva els àudios?',
          'Hi ha representant a la Unió Europea segons l’article 27 del RGPD?',
        ],
      },
    },

    /* ═══════════════════════════ Bumble ═══════════════════════════ */
    {
      slug: 'bumble',
      name: 'Bumble',
      company: 'badoo-trading',
      categories: ['cites'],
      tagline: 'Dades sensibles vinculades amb la identitat i ubicació utilitzada per rastrejar-te',
      summary:
        'Bumble declara a l’App Store onze categories de dades vinculades amb la identitat, incloses les sensibles i les de salut i forma física, i quatre utilitzades per rastrejar-te fora de l’aplicació, entre elles la ubicació. La política és de les poques del sector que dona terminis de conservació per categoria després d’eliminar el compte, i identifica els proveïdors de moderació, verificació i intel·ligència artificial. La responsabilitat és de dues societats, britànica i nord-americana, sense establiment principal declarat a la Unió Europea.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Regne Unit i Estats Units',
      userBase: 'Una de les aplicacions de cites més descarregades a Espanya',
      links: {
        website: 'https://bumble.com/',
        privacyPolicy: 'https://bumble.com/es/privacy',
        appStore: 'https://apps.apple.com/es/app/id930441707',
      },
      accountRequired: f('yes', 'official', ['bumble-privacy-policy'], 'La política diu que cal facilitar nom, adreça electrònica i data de naixement per registrar-se.'),
      openSource: f('no', 'official', ['bumble-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Una aplicació de cites treballa per definició amb dades que el RGPD protegeix especialment: orientació sexual, creences, origen ètnic i salut. Bumble hi afegeix la geolocalització contínua, el reconeixement facial de la verificació i el contingut de les converses, i declara que part d’aquest conjunt s’utilitza per rastrejar-te en aplicacions i webs d’altres empreses.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bumble-privacy-policy', 'bumble-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['bumble-privacy-policy', 'bumble-app-store'], note: 'L’etiqueta declara les dades de contacte entre les utilitzades per rastrejar.' }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['bumble-privacy-policy'], note: 'La política diu que l’edat es comparteix amb proveïdors de màrqueting per segmentar anuncis.' }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['bumble-privacy-policy'] }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['bumble-privacy-policy', 'bumble-app-store'], note: 'La política declara la ubicació GPS com a dada obligatòria, i l’etiqueta declara la ubicació entre les dades utilitzades per rastrejar-te.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['bumble-privacy-policy'], note: 'La política diu que la ubicació aproximada es comparteix amb proveïdors de màrqueting.' }),
        row('orientacio-sexual', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bumble-privacy-policy', 'bumble-app-store'], note: 'Dada de categoria especial que la política tracta com a voluntària; l’etiqueta declara «datos sensibles» vinculats amb la identitat.' }),
        row('conviccions-i-opinions', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bumble-privacy-policy'], note: 'Creences religioses declarades al perfil.' }),
        row('origen-etnic-o-nacionalitat', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bumble-privacy-policy'] }),
        row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bumble-app-store'], note: 'L’etiqueta declara la categoria «salud y forma física» vinculada amb la identitat.' }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['bumble-privacy-policy'], note: 'Reconeixement facial de la verificació de perfil, tractat per Veriff.' }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['bumble-privacy-policy', 'bumble-app-store'] }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['bumble-privacy-policy'], note: 'La moderació passa per Cinder i, en algunes funcions, per OpenAI amb una conservació màxima de trenta dies.' }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bumble-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bumble-app-store', 'bumble-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bumble-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['bumble-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['bumble-app-store', 'bumble-privacy-policy'], note: 'La política diu que les dades de navegació es comparteixen amb proveïdors de màrqueting.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['recomanacions-algoritmiques', 'elaboracio-de-perfils'], sources: ['bumble-privacy-policy'], note: 'La política descriu algorismes que prediuen la compatibilitat entre persones.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['bumble-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['bumble-app-store'], 'L’etiqueta declara ubicació, dades de contacte, identificadors i dades d’ús utilitzats per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['bumble-app-store'], 'Identificadors declarats sota la secció de dades utilitzades per rastrejar.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['bumble-privacy-policy', 'bumble-app-store'], 'La política declara la compartició de gènere, edat, ubicació aproximada i dades de navegació amb proveïdors de serveis de màrqueting.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['bumble-privacy-policy'], 'Publicitat segmentada a partir de gènere, edat, ubicació aproximada i navegació, subjecta al consentiment segons la política.'),
        profiling: f('yes', 'official', ['bumble-privacy-policy'], 'Algorismes de predicció de compatibilitat que ordenen qui veus i qui et veu.'),
        aiTraining: f('partial', 'official', ['bumble-privacy-policy'], 'La política declara l’ús d’OpenAI per a la moderació amb una conservació de trenta dies, però no diu si el contingut s’utilitza per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['bumble-privacy-policy'], 'Proveïdors identificats pel nom: Cinder i Zendesk per a moderació i suport, Veriff per a la verificació d’identitat, OpenAI i Google Cloud per a infraestructura, i proveïdors de màrqueting.'),
        intraGroupSharing: f('yes', 'official', ['bumble-privacy-policy'], 'Badoo Trading Limited i Bumble Trading LLC actuen com a responsables conjunts, i Bumble Trading Limited dona suport per exercir els drets.'),
        dataBrokerSales: unknown('La política no declara cap venda de dades a intermediaris.'),
        internationalTransfers: f('partial', 'official', ['bumble-privacy-policy'], 'Els responsables són societats del Regne Unit i dels Estats Units i la infraestructura és de Google Cloud, però la política no detalla el mecanisme de transferència aplicat.', {
          mechanism: 'unknown',
        }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem localitzat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['bumble-privacy-policy'], 'La política dona terminis per categoria: vint-i-vuit dies per a les dades de perfil, noranta dies per als documents de verificació, sis anys per a les dades bàsiques i la correspondència de suport, i de noranta dies a quinze anys per als expedients de moderació segons la gravetat.'),
        dataAfterDeletion: f('yes', 'official', ['bumble-privacy-policy'], 'Eliminar el compte esborra el perfil al cap de vint-i-vuit dies, però les dades bàsiques es conserven sis anys i els casos de moderació greus, fins a quinze anys.'),
        periods: [
          { period: 'Dades de perfil: 28 dies després d’eliminar el compte', sources: ['bumble-privacy-policy'] },
          { dataType: 'dades-biometriques', period: 'Documents i comprovacions de verificació: 90 dies', sources: ['bumble-privacy-policy'] },
          { period: 'Expedients de moderació: de 90 dies a 15 anys segons la gravetat', sources: ['bumble-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['bumble-privacy-policy'], 'La política dedica un apartat a què passa quan elimines el compte i fixa els terminis de supressió de cada categoria.'),
        selfService: unknown('El centre d’ajuda de Bumble no s’ha deixat consultar i no hem pogut verificar els passos exactes dins de l’aplicació.'),
        difficulty: 'unknown',
        obstacles:
          'La conservació de sis anys de les dades bàsiques i de fins a quinze anys dels expedients de moderació vol dir que eliminar el compte no equival a desaparèixer del servei.',
        dataRetained: 'Dades bàsiques del compte durant sis anys, correspondència de suport durant sis anys i expedients de moderació fins a quinze anys.',
        sources: ['bumble-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['bumble-privacy-policy'], 'La política reconeix el dret de portabilitat entre els vuit drets que enumera.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['bumble-privacy-policy'], 'Contacte amb el delegat de protecció de dades a DPO@bumble.com i formulari de contacte.', {
          url: 'mailto:DPO@bumble.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['bumble-privacy-policy'], 'La política supedita la publicitat segmentada al consentiment, però no descriu on es retira dins de l’aplicació.'),
        telemetryOptOut: unknown('La política no descriu cap control per desactivar l’analítica d’ús.'),
        granularControls: f('partial', 'official', ['bumble-privacy-policy'], 'Les dades sensibles del perfil són voluntàries i es poden no declarar, però no hi ha un panell únic de privadesa documentat.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem revisat els fluxos de consentiment ni el camí de sortida amb prou detall per afirmar-ho.'),
      },
      security: {
        e2ee: unknown('La política no esmenta cap xifratge d’extrem a extrem dels missatges, i la moderació per Cinder i OpenAI implica que el contingut és accessible al servei.'),
        transportEncryption: unknown('No hem localitzat documentació tècnica sobre el xifratge del canal.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('No hem pogut consultar el centre d’ajuda per confirmar quins segons factors admet el compte.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('No hem pogut confirmar l’existència d’un programa de recompenses actiu.'),
        vulnerabilityDisclosure: unknown('No hem localitzat cap política pública de divulgació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'tinder',
          comparability: 'equivalent',
          rationale: 'L’altra gran aplicació de cites del mercat espanyol, amb una base d’usuaris comparable.',
          tradeOffs: 'Tinder és del grup Match i arrossega les seves pròpies pràctiques de perfilat; canviar-hi no redueix per si sol l’exposició de dades sensibles.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Bumble fa bé una cosa que gairebé ningú fa: publicar terminis de conservació per categoria i anomenar els proveïdors. Fa malament una altra: declarar la ubicació entre les dades utilitzades per rastrejar en un servei on la ubicació és, literalment, la condició per funcionar.',
        openQuestions: [
          'Quins són els passos exactes per eliminar el compte des de l’aplicació?',
          'Quin és l’establiment principal a la Unió Europea i, per tant, l’autoritat de control competent?',
          'Els missatges estan xifrats en trànsit i en repòs amb claus que el servei no pugui llegir?',
        ],
      },
    },

    /* ═══════════════════════════ Moeve Gow ═══════════════════════════ */
    {
      slug: 'moeve-gow',
      name: 'Moeve Gow',
      company: 'moeve-comercial',
      categories: ['mobilitat-i-transport', 'comerc-electronic'],
      tagline: 'Paga el carburant i acumula punts, però l’etiqueta no declara cap dada vinculada amb tu',
      summary:
        'Moeve Gow permet pagar a les estacions de servei de la marca i acumular descomptes. L’etiqueta de l’App Store no declara cap dada vinculada amb la identitat, tot i que el servei exigeix un compte i un mitjà de pagament: la informació financera, la ubicació i els identificadors hi consten com a dades no vinculades. La política, en canvi, descriu perfilat comercial per interès legítim i perfilat amb tercers amb consentiment.',
      platforms: ['ios', 'android'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      userBase: 'Aplicació de pagament i fidelització de la xarxa d’estacions de servei de Moeve, abans Cepsa',
      links: {
        website: 'https://www.moeve.es/',
        privacyPolicy: 'https://www.moeve.es/xmartplace/politica_privacidad.html',
        appStore: 'https://apps.apple.com/es/app/id1570649924',
      },
      accountRequired: f('yes', 'official', ['moeve-gow-privacy-policy'], 'La política descriu el registre d’usuaris com a tractament necessari per a l’execució contractual i les mesures precontractuals.'),
      openSource: f('no', 'official', ['moeve-gow-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les dades d’una aplicació de benzinera diuen on ets i quan, cada quant omples el dipòsit i quant gastes. Moeve les creua amb el mitjà de pagament i amb els patrons de consum per «optimitzar l’oferta comercial», i demana consentiment a part per a l’elaboració de perfils amb dades de tercers.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['moeve-gow-privacy-policy', 'moeve-gow-app-store'], note: 'L’etiqueta declara les dades de contacte com a no vinculades amb la identitat, cosa difícil de conciliar amb un compte de fidelització.' }),
        row('adreca-electronica', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['moeve-gow-privacy-policy'] }),
        row('dades-de-pagament', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['moeve-gow-privacy-policy', 'moeve-gow-app-store'], note: 'La política identifica Ingenico com a proveïdor de pagaments, amb contacte propi de protecció de dades.' }),
        row('historial-de-compres', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['moeve-gow-privacy-policy'], note: 'Els patrons de consum són la matèria primera del perfilat comercial declarat.' }),
        row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['moeve-gow-privacy-policy', 'moeve-gow-app-store'], note: 'La política distingeix la geolocalització per prestar el servei, emparada en la relació contractual, de la geolocalització amb finalitat comercial, que exigeix consentiment.' }),
        row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['moeve-gow-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['moeve-gow-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['moeve-gow-app-store'], note: 'Única categoria declarada com a utilitzada per rastrejar-te en aplicacions i webs d’altres empreses.' }),
        row('historial-de-navegacio', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['moeve-gow-privacy-policy'], note: 'La política esmenta les dades de navegació i l’ús de Google Analytics, amb transferència als Estats Units subjecta a consentiment exprés.' }),
        row('interessos-inferits', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['moeve-gow-privacy-policy'], note: 'Tècniques de segmentació sobre els patrons de consum, emparades en l’interès legítim per al perfilat intern.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['moeve-gow-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['moeve-gow-app-store'], 'L’etiqueta declara dades d’ús utilitzades per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['moeve-gow-app-store'], 'L’etiqueta no declara cap identificador publicitari.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['moeve-gow-privacy-policy'], 'La política declara Google Analytics amb consentiment exprés per a la transferència als Estats Units.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['moeve-gow-privacy-policy'], 'Comunicacions comercials de productes similars per interès legítim, i de productes no similars o de tercers amb consentiment.'),
        profiling: f('yes', 'official', ['moeve-gow-privacy-policy'], 'Perfilat intern per interès legítim a partir dels patrons de consum, i perfilat amb dades externes amb consentiment.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['moeve-gow-privacy-policy'], 'Proveïdors com a encarregats del tractament, el grup Ingenico per als pagaments i autoritats judicials quan escau.'),
        intraGroupSharing: f('yes', 'official', ['moeve-gow-privacy-policy'], 'Comunicacions a les societats del grup Cepsa per a la gestió administrativa.'),
        dataBrokerSales: unknown('La política no declara cap venda de dades a intermediaris.'),
        internationalTransfers: f('partial', 'official', ['moeve-gow-privacy-policy'], 'La política diu que en general no es preveuen transferències internacionals, però admet que poden produir-se amb clàusules contractuals tipus, i les de Google Analytics als Estats Units exigeixen consentiment exprés.', {
          mechanism: 'sccs',
        }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem localitzat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['moeve-gow-privacy-policy'], 'La política lliga la conservació a la vigència del registre i a la finalitat de cada tractament, sense terminis per categoria.'),
        dataAfterDeletion: f('yes', 'official', ['moeve-gow-privacy-policy'], 'Un cop acabat el tractament, les dades es conserven degudament bloquejades durant els terminis de prescripció.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['moeve-gow-privacy-policy'], 'La política reconeix el dret de supressió, però no documenta cap procediment de baixa dins de l’aplicació.'),
        selfService: unknown('No hem trobat cap pàgina d’ajuda que descrigui la baixa autoservei del compte.'),
        difficulty: 'unknown',
        steps: [
          'Escriu a derechos.arco@cepsa.com demanant la supressió del compte i de les dades associades.',
          'Si el que vols és només deixar de rebre comunicacions comercials, la política ofereix la mateixa adreça per oposar-t’hi.',
          'Si no obtens resposta dins de termini, reclama davant de l’AEPD.',
        ],
        dataRetained: 'Dades bloquejades durant els terminis de prescripció legal.',
        sources: ['moeve-gow-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['moeve-gow-privacy-policy'], 'Els drets del RGPD s’exerceixen per correu electrònic; la política no descriu cap exportació autoservei.', {
          url: 'mailto:derechos.arco@cepsa.com',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['moeve-gow-privacy-policy'], 'Canal de drets a derechos.arco@cepsa.com i delegat de protecció de dades a dpo@cepsa.com.', {
          url: 'mailto:derechos.arco@cepsa.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['moeve-gow-privacy-policy'], 'Es pot oposar a les comunicacions comercials i retirar el consentiment del perfilat extern, però per correu electrònic.'),
        telemetryOptOut: f('partial', 'official', ['moeve-gow-privacy-policy'], 'La transferència de dades a Google Analytics depèn del consentiment exprés, que es pot no donar.'),
        granularControls: f('partial', 'official', ['moeve-gow-privacy-policy'], 'Hi ha consentiments separables per finalitat (geolocalització comercial, comunicacions, perfilat extern), però no un panell únic documentat.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem revisat els fluxos de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('No hem localitzat documentació tècnica sobre el xifratge del canal.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('La política no descriu el sistema d’autenticació de l’aplicació.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni cap fitxer security.txt.'),
        vulnerabilityDisclosure: unknown('No hem localitzat cap canal públic de divulgació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'waylet',
          comparability: 'equivalent',
          rationale: 'L’aplicació equivalent de Repsol, amb la mateixa funció de pagament i fidelització a les estacions de servei.',
          tradeOffs: 'Waylet declara l’historial de navegació com a dada utilitzada per rastrejar-te, cosa que Moeve Gow no fa.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La incoherència val la pena mirar-la de prop: una aplicació que exigeix registre i mitjà de pagament declara a Apple que cap de les dades que recull està vinculada amb la identitat. O l’etiqueta és incompleta, o el compte de fidelització funciona d’una manera que la política no explica.',
        openQuestions: [
          'Com es concilia una etiqueta sense dades vinculades amb un programa de fidelització nominatiu?',
          'Hi ha una manera de donar-se de baixa del compte des de la mateixa aplicació?',
        ],
      },
    },

    /* ═══════════════════════════ Revolut ═══════════════════════════ */
    {
      slug: 'revolut',
      name: 'Revolut',
      company: 'revolut',
      categories: ['banca-i-finances'],
      tagline: 'Controls de privadesa dins de l’aplicació i un avís per a l’EEE que no es deixa llegir',
      summary:
        'Revolut presenta la privadesa com un argument de producte: la seva pàgina legal diu que les dades personals són de la persona usuària i descriu controls de seguretat i privadesa dins de l’aplicació. L’etiqueta de l’App Store és moderada per a una entitat financera, però hi consten identificadors utilitzats per rastrejar-te fora del servei. L’avís de privadesa aplicable a l’Espai Econòmic Europeu no s’ha deixat consultar amb eines automàtiques, i això deixa sense documentar la conservació, les transferències i el perfilat.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Regne Unit, amb entitat bancària europea a Lituània',
      userBase: 'Una de les aplicacions financeres més descarregades a Espanya',
      links: {
        website: 'https://www.revolut.com/',
        privacyPolicy: 'https://www.revolut.com/privacy-policy/',
        appStore: 'https://apps.apple.com/es/app/id932493382',
      },
      accountRequired: f('yes', 'official', ['revolut-privacy-hub'], 'Tot el servei es presta sobre un compte de client; la pàgina legal distingeix els avisos per tipus de client i per edat.'),
      openSource: f('no', 'official', ['revolut-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Un compte de Revolut concentra els moviments quotidians, els canvis de divisa, els viatges i, si s’hi contracta, la inversió i els criptoactius. L’etiqueta declara compres, contacte, identificadors, ús i diagnòstics vinculats amb la identitat: el mapa complet de la despesa d’una persona, amb identificadors que segons Apple s’utilitzen també per rastrejar-la fora de l’aplicació.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['revolut-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['revolut-app-store'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['revolut-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['revolut-app-store'], note: 'L’etiqueta declara la categoria «compras» vinculada amb la identitat.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['revolut-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['revolut-app-store'], note: 'Els identificadors són l’única categoria declarada com a utilitzada per rastrejar.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['revolut-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['revolut-app-store'], note: 'Declarada tant com a dada vinculada com a no vinculada.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['revolut-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('partial', 'official', ['revolut-app-store'], 'Hi ha identificadors sota la secció de rastreig, però l’etiqueta no especifica quins.'),
        thirdPartyTrackersPresent: unknown('No hem pogut llegir l’avís de privadesa aplicable a l’EEE, que és on constarien els proveïdors publicitaris.'),
      },
      dataUses: {
        targetedAdvertising: unknown('L’avís de privadesa per a clients particulars no s’ha deixat consultar.'),
        profiling: unknown('La normativa de pagaments obliga a l’anàlisi antifrau, però no hem pogut documentar l’abast del perfilat amb una font oficial.'),
        aiTraining: unknown('No consta informació pública consultable.'),
      },
      sharing: {
        thirdPartySharing: unknown('No hem pogut llegir l’avís de privadesa complet.'),
        intraGroupSharing: f('partial', 'official', ['revolut-privacy-hub'], 'La pàgina legal identifica diverses societats del grup (Revolut Bank UK Ltd, Revolut Ltd i Revolut Trading Ltd) com a responsables segons el producte, però no en detalla els fluxos.'),
        dataBrokerSales: unknown('No consta informació pública consultable.'),
        internationalTransfers: unknown('L’avís de privadesa aplicable a l’EEE no s’ha deixat consultar.'),
      },
      transparency: {
        policyClarity: 'unknown',
        transparencyReport: unknown('No hem localitzat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: unknown('No hem pogut llegir l’apartat de conservació de l’avís aplicable.'),
        dataAfterDeletion: unknown('No hem pogut documentar què es conserva després de tancar el compte.'),
      },
      accountDeletion: {
        possible: unknown('El centre d’ajuda de Revolut no s’ha deixat consultar amb eines automàtiques.'),
        selfService: unknown('No hem pogut verificar si el tancament del compte es fa íntegrament des de l’aplicació.'),
        difficulty: 'unknown',
        obstacles:
          'Com a tota entitat financera, la normativa de prevenció del blanqueig obliga a conservar la documentació de la relació encara que es tanqui el compte.',
      },
      userRights: {
        dataExport: unknown('No hem pogut documentar el procediment d’exportació de dades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['revolut-privacy-hub'], 'La pàgina legal dona un canal directe: «If you want to exercise your rights over your personal data, you can contact us any time at dpo@revolut.com».', {
          url: 'mailto:dpo@revolut.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('No hem pogut documentar quins controls publicitaris ofereix l’aplicació.'),
        telemetryOptOut: unknown('No consta informació pública consultable.'),
        granularControls: f('partial', 'official', ['revolut-privacy-hub'], 'La pàgina legal remet a les seccions «Security & privacy» i «Notification settings» de l’aplicació per ajustar les preferències de dades, sense detallar-ne l’abast.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem revisat els fluxos de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('No hem localitzat documentació tècnica pública sobre el xifratge del canal.'),
        atRestEncryption: unknown('No consta informació pública consultable.'),
        mfa: f('partial', 'official', ['revolut-privacy-hub'], 'La pàgina legal descriu sistemes de seguretat que vigilen els comptes contínuament i controls dins de l’aplicació, però no detalla els segons factors admesos; la normativa europea de pagaments exigeix autenticació reforçada.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('No hem pogut confirmar si el programa de recompenses és públic ni quin abast té.'),
        vulnerabilityDisclosure: unknown('No hem localitzat cap política pública de divulgació de vulnerabilitats consultable.'),
      },
      alternatives: [
        {
          app: 'openbank',
          comparability: 'partial',
          rationale: 'Banc digital establert a Espanya, amb una política de privadesa que explica la lògica del perfilat amb un detall poc habitual.',
          tradeOffs: 'Openbank declara identificadors utilitzats per rastrejar-te i publicitat de tercers a la seva etiqueta de l’App Store.',
        },
        {
          app: 'bbva',
          comparability: 'partial',
          rationale: 'Banca tradicional espanyola per a qui vulgui una entitat amb oficines i supervisió de l’AEPD com a autoritat principal.',
        },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La fitxa queda deliberadament incompleta. La pàgina que Revolut enllaça des de l’App Store és un índex d’avisos, i els avisos concrets —el de clients particulars, que és el que s’aplica aquí— bloquegen les consultes automatitzades. Una política de privadesa que no es pot llegir sense un navegador interactiu és, en si mateixa, una decisió de transparència.',
        openQuestions: [
          'Quina entitat del grup és la responsable del tractament per a la clientela de l’Espai Econòmic Europeu i quina n’és l’autoritat de control principal?',
          'Quant de temps es conserven les dades després de tancar el compte?',
          'Quins tercers reben els identificadors que l’etiqueta declara com a utilitzats per rastrejar?',
        ],
      },
    },

    /* ═══════════════════════════ Bizum Pay ═══════════════════════════ */
    {
      slug: 'bizum-pay',
      name: 'Bizum Pay',
      company: 'bizum',
      categories: ['banca-i-finances'],
      tagline: 'L’etiqueta més continguda del lot: ni rastreig ni cap dada vinculada amb la identitat',
      summary:
        'L’aplicació pròpia de Bizum declara a l’App Store només dues categories de dades, ús i diagnòstics, i totes dues sense vincular amb la identitat. És l’etiqueta més continguda de tot el lot, i contrasta amb la de la resta d’aplicacions financeres. La política diu que no hi ha cessions a tercers fora de l’obligació legal, tot i que el servei funciona precisament perquè les entitats adherides, és a dir els bancs, hi participen.',
      platforms: ['ios', 'android'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      userBase: 'Aplicació pròpia del servei de pagaments immediats de la banca espanyola',
      links: {
        website: 'https://bizum.com/',
        privacyPolicy: 'https://bizumpay.com/politica-de-privacidad-app-bizum-pay/',
        appStore: 'https://apps.apple.com/es/app/id6761751498',
      },
      accountRequired: f('yes', 'official', ['bizum-privacy-policy'], 'L’alta al servei es fa a través d’una entitat adherida: sense banc no hi ha Bizum.'),
      openSource: f('no', 'official', ['bizum-pay-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Bizum sap qui paga a qui, quan i quant, encara que els diners els moguin els bancs. La política de l’aplicació enumera dades identificatives, de contacte, d’ús, tècniques i del dispositiu, i dades relacionades amb les operacions; la política general del servei afegeix l’àlies format pel nom i les inicials que es mostra abans de confirmar cada enviament.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bizum-pay-privacy-policy', 'bizum-privacy-policy'], note: 'La política general explica que es mostra un àlies amb el nom i les inicials dels cognoms perquè qui paga confirmi el destinatari.' }),
        row('numero-de-telefon', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bizum-pay-privacy-policy'], note: 'El telèfon és l’identificador del servei; la política el declara entre les dades de contacte.' }),
        row('adreca-electronica', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['atencio-a-lusuari', 'publicitat-personalitzada'], sources: ['bizum-pay-privacy-policy'], note: 'Les comunicacions comercials es basen en el consentiment, segons l’article 6.1.a del RGPD.' }),
        row('historial-de-compres', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['bizum-pay-privacy-policy'], note: 'La política parla de «datos relacionados con operaciones».' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['bizum-pay-privacy-policy'], note: 'Dades tècniques i del dispositiu, per a seguretat i prevenció del frau.' }),
        row('ubicacio-aproximada', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bizum-pay-privacy-policy'], note: 'La geolocalització s’empara en el consentiment «previo, expreso y revocable».' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['bizum-pay-app-store', 'bizum-pay-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['bizum-pay-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['bizum-pay-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['bizum-pay-app-store'], 'L’etiqueta no declara cap identificador publicitari.'),
        thirdPartyTrackersPresent: unknown('La política no esmenta SDK de tercers i no hem fet una anàlisi del trànsit de l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['bizum-pay-privacy-policy'], 'Hi ha comunicacions comercials del mateix Bizum basades en el consentiment; la política no descriu publicitat de tercers.'),
        profiling: unknown('La política no esmenta cap elaboració de perfils.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['bizum-pay-privacy-policy', 'bizum-privacy-policy'], 'La política de l’aplicació diu que «no se cederán datos a terceros salvo obligación legal»; la política general del servei sí que preveu la cessió a les entitats adherides per poder prestar-lo.'),
        intraGroupSharing: unknown('La política no descriu cap estructura de grup ni cessions internes.'),
        dataBrokerSales: f('no', 'official', ['bizum-pay-privacy-policy'], 'La política exclou expressament les cessions fora de l’obligació legal.'),
        internationalTransfers: f('partial', 'official', ['bizum-pay-privacy-policy'], 'El tractament es fa dins de l’Espai Econòmic Europeu o a països amb nivell de protecció adequat, i si escau amb clàusules contractuals tipus aprovades per la Comissió Europea.', {
          mechanism: 'sccs',
        }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem localitzat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['bizum-pay-privacy-policy', 'bizum-privacy-policy'], 'La política de l’aplicació lliga la conservació a la relació d’usuari i al bloqueig posterior; la general dona terminis de cinc anys amb caràcter general, quatre per a les dades tributàries i dos per a les cessions publicades.'),
        dataAfterDeletion: f('yes', 'official', ['bizum-pay-privacy-policy'], 'Acabada la relació, les dades es conserven degudament bloquejades durant els terminis necessaris per complir les obligacions legals.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['bizum-pay-privacy-policy'], 'La política reconeix el dret de supressió i la retirada del consentiment, però no documenta cap procediment de baixa dins de l’aplicació.'),
        selfService: unknown('No hem trobat cap pàgina d’ajuda que descrigui la baixa autoservei.'),
        difficulty: 'unknown',
        steps: [
          'Dona de baixa el servei Bizum des de l’aplicació del teu banc, que és l’entitat adherida que t’hi va donar accés.',
          'Escriu a contacto@bizum.es per exercir el dret de supressió sobre les dades que tracta Bizum, S.L.',
          'Si no obtens resposta dins de termini, reclama davant de l’AEPD.',
        ],
        dataRetained: 'Dades bloquejades durant els terminis legals de conservació, amb un màxim general de cinc anys segons la política del servei.',
        sources: ['bizum-pay-privacy-policy', 'bizum-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['bizum-pay-privacy-policy'], 'La política reconeix el dret de portabilitat, però només per la via del correu electrònic.', {
          url: 'mailto:contacto@bizum.es',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['bizum-pay-privacy-policy'], 'Accés, rectificació, supressió, oposició, limitació i portabilitat a contacto@bizum.es, amb reclamació posterior davant de l’AEPD.', {
          url: 'mailto:contacto@bizum.es',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['bizum-pay-privacy-policy'], 'Les comunicacions comercials es basen en el consentiment i la política diu que es pot retirar en qualsevol moment.'),
        telemetryOptOut: unknown('La política no descriu cap control sobre l’analítica d’ús.'),
        granularControls: f('partial', 'official', ['bizum-pay-privacy-policy'], 'Hi ha consentiments separables per a les comunicacions comercials i per a la geolocalització, però no un panell únic documentat.'),
        defaultPosture: 'protective',
        darkPatterns: unknown('No hem revisat els fluxos de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('La política no documenta el xifratge del canal.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('La política no descriu el sistema d’autenticació; l’operativa de pagament la valida l’entitat adherida.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni cap fitxer security.txt.'),
        vulnerabilityDisclosure: unknown('No hem localitzat cap canal públic de divulgació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'paypal',
          comparability: 'partial',
          rationale: 'Alternativa per enviar diners entre particulars sense passar pel compte bancari de l’altra persona.',
          tradeOffs: 'PayPal declara onze categories de dades vinculades amb la identitat i conserva la informació deu anys després d’acabar la relació.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La lliçó d’aquesta fitxa és per comparació: si una aplicació de pagaments pot funcionar declarant només dades d’ús i diagnòstics no vinculats, les etiquetes molt més carregades de la resta del sector no descriuen una necessitat tècnica, sinó una tria. El punt feble és la contradicció entre la política de l’aplicació, que nega les cessions, i la del servei, que preveu la cessió a les entitats adherides.',
        openQuestions: [
          'Quin és el repartiment de responsabilitats entre Bizum, S.L. i l’entitat adherida sobre les dades de cada operació?',
          'Hi ha una manera de donar-se de baixa de Bizum Pay sense passar per l’aplicació del banc?',
        ],
      },
    },

    /* ═══════════════════════════ Trade Republic ═══════════════════════════ */
    {
      slug: 'trade-republic',
      name: 'Trade Republic',
      company: 'trade-republic-bank',
      categories: ['banca-i-finances'],
      tagline: 'Un banc que declara contacte, identificadors i ús com a dades per rastrejar-te',
      summary:
        'L’avís de privadesa de Trade Republic és un document de seixanta-quatre pàgines, bilingüe i actualitzat, que anomena els sis proveïdors integrats a l’aplicació i explica quina base jurídica s’aplica a cadascun. Aquesta transparència conviu amb una etiqueta de l’App Store que declara dades de contacte, identificadors i dades d’ús utilitzats per rastrejar-te fora del servei, cosa poc habitual en una entitat de crèdit. Les dades es conserven deu anys després de tancar el compte per obligació legal alemanya.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Alemanya',
      userBase: 'Intermediari borsari mòbil amb presència a diversos països europeus',
      links: {
        website: 'https://traderepublic.com/',
        privacyPolicy: 'https://assets.traderepublic.com/assets/files/app_privacy_policy_es.pdf',
        appStore: 'https://apps.apple.com/es/app/id1410703839',
      },
      accountRequired: f('yes', 'official', ['trade-republic-privacy-notice'], 'L’avís descriu l’obertura del compte bancari i l’execució d’ordres com a tractaments necessaris per al contracte.'),
      openSource: f('no', 'official', ['trade-republic-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La cartera d’inversió diu molt més que el saldo: diu quant estalvies, quant risc acceptes i quan et fa por el mercat. Trade Republic hi suma la verificació d’identitat amb selfie, la ubicació i el contingut que la persona escriu a l’aplicació, i un conjunt de senyals d’ús que viatgen a Adjust i que poden alimentar publicitat personalitzada fora del servei.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['trade-republic-privacy-notice', 'trade-republic-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['trade-republic-privacy-notice', 'trade-republic-app-store'], note: 'L’avís explica que les adreces xifrades es fan servir per casar audiències a les xarxes socials.' }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['trade-republic-privacy-notice'], note: 'Comprovacions d’identitat i edat exigides per la llei alemanya de blanqueig de capitals.' }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'compliment-legal'], sources: ['trade-republic-privacy-notice'], note: 'L’avís cita l’autenticació per selfie entre els pocs casos de decisió automatitzada.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['trade-republic-privacy-notice', 'trade-republic-app-store'], note: 'Adyen consta entre els proveïdors integrats a l’aplicació.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['trade-republic-app-store'], note: 'Ordres de compra i de venda, i moviments del compte.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['trade-republic-app-store'] }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari'], sources: ['trade-republic-app-store'], note: 'L’etiqueta declara «contenido del usuario» vinculat amb la identitat; l’avís descriu Braze com a eina de comunicació amb la clientela.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['trade-republic-privacy-notice', 'trade-republic-app-store'], note: 'Adjust atribueix les instal·lacions i reenvia dades als socis publicitaris; l’avís precisa que no hi circula el nom ni el correu en clar.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['trade-republic-privacy-notice', 'trade-republic-app-store'], note: 'L’avís reconeix que les dades d’ús recollides per Adjust poden servir per mostrar anuncis personalitzats en línia.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['trade-republic-privacy-notice', 'trade-republic-app-store'], note: 'Sentry s’allotja als servidors del mateix banc i, segons l’avís, no comparteix dades amb el proveïdor.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['trade-republic-app-store'], 'L’etiqueta declara dades de contacte, identificadors i dades d’ús utilitzats per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['trade-republic-privacy-notice'], 'L’avís descriu el casament d’identificadors publicitaris i adreces xifrades amb les dades de les xarxes socials per segmentar campanyes.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['trade-republic-privacy-notice'], 'Sis proveïdors integrats a l’aplicació: Google Firebase, Adjust, Braze, Adyen, Sentry i GrowthBook.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['trade-republic-privacy-notice'], 'Xarxes de display, entre elles Google Display Network, publicitat a xarxes socials amb audiències casades i personalització a partir de les dades d’ús d’Adjust segons les preferències del perfil o el consentiment.'),
        profiling: f('partial', 'official', ['trade-republic-privacy-notice'], 'Les decisions automatitzades es limiten al compliment legal, la lluita contra el blanqueig i el finançament del terrorisme i l’autenticació per selfie, amb dret a la intervenció humana.'),
        aiTraining: unknown('L’avís no esmenta l’entrenament de models d’intel·ligència artificial.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['trade-republic-privacy-notice'], 'Proveïdors anomenats un per un, amb la seva adreça i la finalitat: Firebase, Adjust, Braze, Adyen, Sentry i GrowthBook, a més de Visa per a les targetes.'),
        intraGroupSharing: f('partial', 'official', ['trade-republic-privacy-notice'], 'L’avís preveu supòsits de corresponsabilitat i sucursals locals, i descriu la corresponsabilitat amb Meta pels perfils d’empresa a Instagram i Facebook.'),
        dataBrokerSales: unknown('L’avís no declara cap venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['trade-republic-privacy-notice'], 'Proveïdors amb seu als Estats Units, com Braze i Sentry, amb garanties contractuals per a les transferències fora de l’Espai Econòmic Europeu.', {
          mechanism: 'sccs',
        }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem localitzat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['trade-republic-privacy-notice'], 'L’avís dedica un capítol sencer als terminis, derivats de la normativa bancària, fiscal i de blanqueig: deu anys com a regla general segons l’article 147 de l’ordenança tributària alemanya i la llei de blanqueig.'),
        dataAfterDeletion: f('yes', 'official', ['trade-republic-privacy-notice'], 'Les dades del compte es conserven deu anys després del tancament, i el mateix termini s’aplica als comptes Junior.'),
        periods: [
          { period: 'Deu anys després de tancar el compte, per obligació bancària i fiscal alemanya', sources: ['trade-republic-privacy-notice'] },
        ],
      },
      accountDeletion: {
        possible: f('partial', 'official', ['trade-republic-privacy-notice'], 'Es pot exercir el dret de supressió de l’article 17, però l’avís adverteix que s’hi apliquen les limitacions de l’article 17.3 i les obligacions de conservació de deu anys.'),
        selfService: unknown('L’avís no descriu el procediment de tancament dins de l’aplicació i no hem pogut consultar el centre d’ajuda.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Ven o traspassa les posicions i buida el saldo del compte.',
          'Demana el tancament del compte al servei d’atenció al client de l’aplicació.',
          'Escriu a dataprotection@traderepublic.com per exercir el dret de supressió sobre el que no estigui subjecte a conservació legal.',
          'Tingues present que la documentació de la relació es conservarà deu anys i que pots reclamar davant de l’autoritat de protecció de dades alemanya.',
        ],
        obstacles:
          'El termini de deu anys no és una decisió del banc, sinó de la llei alemanya; però significa que tancar el compte no esborra l’historial d’inversió.',
        dataRetained: 'Nom, dades de contacte i documentació de les operacions durant deu anys.',
        sources: ['trade-republic-privacy-notice'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['trade-republic-privacy-notice'], 'L’avís reconeix el dret de portabilitat de l’article 20 del RGPD dins del marc legal aplicable.', {
          url: 'mailto:dataprotection@traderepublic.com',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['trade-republic-privacy-notice'], 'Equip de protecció de dades a dataprotection@traderepublic.com, contacte confidencial amb el delegat per carta i dret de reclamació segons l’article 77 del RGPD i l’article 19 de la llei federal alemanya.', {
          url: 'mailto:dataprotection@traderepublic.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['trade-republic-privacy-notice'], 'Es pot rebutjar la personalització basada en dades pròpies des del perfil de l’aplicació, però l’avís adverteix que això no reduirà el nombre d’anuncis ni afectarà els que personalitzi la xarxa publicitària amb dades seves.'),
        telemetryOptOut: f('yes', 'official', ['trade-republic-privacy-notice'], 'L’aplicació té un avís de seguiment separat i un panell de perfil on es decideix el rastreig; l’avís garanteix que la decisió es respecta a tots els dispositius.'),
        granularControls: f('yes', 'official', ['trade-republic-privacy-notice'], 'Preferències de seguiment per finalitat dins del perfil, amb consentiment revocable en qualsevol moment sense efectes retroactius.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'editorial', [], 'Advertir que oposar-se a la personalització «no tindrà necessàriament cap efecte sobre la quantitat d’anuncis» és una manera de desincentivar l’exercici del dret just en el moment d’exercir-lo, encara que el que diu sigui literalment cert.'),
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('L’avís no documenta el xifratge del canal.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: f('partial', 'official', ['trade-republic-privacy-notice'], 'L’avís descriu l’autenticació per selfie com a mitjà automatitzat de verificació; la normativa europea de pagaments exigeix autenticació reforçada, però no hem trobat el detall dels segons factors admesos.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni cap fitxer security.txt.'),
        vulnerabilityDisclosure: unknown('No hem localitzat cap canal públic de divulgació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'revolut',
          comparability: 'partial',
          rationale: 'Ofereix també inversió dins d’una aplicació financera, amb una etiqueta de l’App Store més continguda.',
          tradeOffs: 'L’avís de privadesa de Revolut aplicable a l’EEE no és consultable amb eines automàtiques.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'És un bon exemple que transparència i sobrietat no són el mateix. L’avís de Trade Republic explica millor que el de qualsevol altra entitat d’aquest lot què fa cada proveïdor, i precisament per això es pot afirmar amb font oficial que les dades d’ús d’un banc acaben alimentant publicitat personalitzada fora de l’aplicació.',
        openQuestions: [
          'Quines dades exactes rep cada soci publicitari a través d’Adjust?',
          'Quin és el procediment real de tancament del compte dins de l’aplicació?',
        ],
      },
    },

    /* ═══════════════════════════ Tricount ═══════════════════════════ */
    {
      slug: 'tricount',
      name: 'Tricount',
      company: 'bunq',
      categories: ['banca-i-finances', 'utilitats'],
      tagline: 'Esborrar el teu compte no esborra les despeses: només anonimitza qui les va fer',
      summary:
        'Tricount és una llibreta de despeses compartides que des del 2022 pertany al banc neerlandès bunq. La política ho diu sense embuts: si demanes la supressió, les dades dels tricounts (les despeses) no s’esborren, perquè són compartides amb altres persones; el que es fa és anonimitzar el teu identificador. També anuncia que la versió 8 de l’aplicació no contindrà cap publicitat ni recollirà dades amb aquesta finalitat, mentre que l’etiqueta actual declara identificadors utilitzats per rastrejar-te.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Països Baixos',
      userBase: 'Aplicació de despeses compartides amb presència a tot Europa',
      links: {
        website: 'https://www.tricount.com/',
        privacyPolicy: 'https://tricount.com/documents/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id349866256',
      },
      accountRequired: f('partial', 'official', ['tricount-privacy-policy'], 'La política descriu comptes d’usuari i la seva supressió, però el repartiment de despeses es pot compartir amb persones que hi participen per enllaç.'),
      openSource: f('no', 'official', ['tricount-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Un tricount és un retrat del grup: qui va a sopar amb qui, qui paga el lloguer de la casa de vacances i qui deu diners a qui. La política hi afegeix la recollida automàtica d’adreça IP, tipus de dispositiu, identificadors únics i navegador, i, mentre hi hagi publicitat, finalitats publicitàries basades en l’interès legítim i el consentiment.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['tricount-privacy-policy', 'tricount-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['tricount-privacy-policy', 'tricount-app-store'], note: 'La política preveu l’enviament de correus que promocionen serveis de Tricount i de bunq per interès legítim.' }),
        row('historial-de-compres', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['tricount-privacy-policy', 'tricount-app-store'], note: 'Les despeses apuntades són el contingut de l’usuari que l’etiqueta declara com a no vinculat amb la identitat.' }),
        row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['tricount-privacy-policy'], note: 'Qui participa a cada repartiment i qui deu diners a qui: dades de terceres persones que potser no han obert mai l’aplicació.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['tricount-privacy-policy'], note: 'La política declara la recollida automàtica d’adreça IP, tipus de dispositiu, identificadors únics i navegador.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['tricount-app-store', 'tricount-privacy-policy'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['tricount-privacy-policy'], note: 'La política preveu afegir els pagaments amb targeta de bunq com a despeses d’un tricount.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['tricount-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['tricount-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['tricount-app-store'], 'Identificadors declarats sota la secció de dades utilitzades per rastrejar.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['tricount-privacy-policy'], 'La política declara finalitats de publicitat i publicitat personalitzada amb proveïdors, però no els anomena.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['tricount-privacy-policy'], 'Hi ha publicitat i publicitat personalitzada amb recollida de consentiment, però la mateixa política anuncia que «Version 8 of the tricount will contain no general or personalized advertising content».'),
        profiling: unknown('La política no descriu cap elaboració de perfils més enllà de les finalitats publicitàries.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['tricount-privacy-policy'], 'Proveïdors i socis que tracten dades per compte de Tricount, autoritats i reguladors, assessors i possibles compradors o inversors en cas d’operació corporativa.'),
        intraGroupSharing: f('yes', 'official', ['tricount-privacy-policy'], 'bunq B.V. és el responsable del tractament i propietari de l’aplicació, i la política preveu comunicacions dins del grup.'),
        dataBrokerSales: unknown('La política no declara cap venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['tricount-privacy-policy'], 'Transferències a països diferents del de residència, protegides amb un acord basat en les clàusules contractuals tipus de la Comissió Europea, que es facilita a petició.', {
          mechanism: 'sccs',
        }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem localitzat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['tricount-privacy-policy'], 'La política no dona cap termini: conserva les dades «for as long as we have a legitimate business need» i després les esborra o les anonimitza.'),
        dataAfterDeletion: f('yes', 'official', ['tricount-privacy-policy'], 'Les despeses dels tricounts no s’esborren quan demanes la supressió, perquè són compartides; el que es fa és anonimitzar els identificadors de la persona que ho demana.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['tricount-privacy-policy'], 'Es pot demanar la supressió en qualsevol moment, però amb l’excepció explícita de les dades dels repartiments.'),
        selfService: f('no', 'official', ['tricount-privacy-policy'], 'La supressió es demana per correu a privacy@tricount.com; la política no descriu cap botó dins de l’aplicació.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Escriu a privacy@tricount.com demanant la supressió de les teves dades personals.',
          'Tingues present que les despeses dels tricounts no s’esborraran: el que es fa és anonimitzar el teu identificador dins de cada repartiment.',
          'Si el grup encara és actiu, demana a la resta de participants que esborrin el tricount abans si voleu que desaparegui sencer.',
        ],
        obstacles:
          'És un cas de manual de dada compartida: el que has apuntat també és història dels altres, i el servei ho resol anonimitzant en lloc d’esborrar.',
        dataRetained: 'Les despeses, els imports i els deutes de cada tricount, amb els identificadors de la persona anonimitzats.',
        sources: ['tricount-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['tricount-privacy-policy'], 'La política reconeix el dret de portabilitat entre els drets exercibles.', {
          url: 'mailto:privacy@tricount.com',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['tricount-privacy-policy'], 'Accés, correcció, supressió, oposició, limitació, portabilitat i reclamació, per la via de privacy@tricount.com.', {
          url: 'mailto:privacy@tricount.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['tricount-privacy-policy'], 'La publicitat personalitzada es basa en el consentiment, i la política conserva la documentació d’aquest consentiment; però la publicitat no personalitzada s’empara en l’interès legítim.'),
        telemetryOptOut: unknown('La política no descriu cap control sobre la recollida automàtica de dades del dispositiu.'),
        granularControls: unknown('No hem localitzat cap panell de privadesa dins de l’aplicació.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem revisat els fluxos de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('La política no documenta el xifratge del canal.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('La política no descriu el sistema d’autenticació del compte.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses propi de Tricount.'),
        vulnerabilityDisclosure: unknown('No hem localitzat cap canal públic de divulgació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Tricount és una de les poques polítiques que afronta de cara el problema de la dada compartida i diu clarament què no esborrarà. Que ho digui no fa que el resultat sigui millor, però permet decidir amb coneixement de causa abans d’apuntar-hi mig any de despeses del pis.',
        openQuestions: [
          'Quins proveïdors publicitaris hi ha integrats mentre no arribi la versió 8 sense publicitat?',
          'Quin tracte reben les persones que participen en un tricount sense tenir-hi compte?',
        ],
      },
    },

    /* ═══════════════════════════ BBVA ═══════════════════════════ */
    {
      slug: 'bbva',
      name: 'BBVA España',
      company: 'bbva',
      categories: ['banca-i-finances'],
      tagline: 'Etiqueta sense rastreig i una sanció de cinc milions per com demanava el consentiment',
      summary:
        'L’etiqueta de l’App Store de BBVA no declara cap dada utilitzada per rastrejar-te, i deixa com a no vinculades amb la identitat la ubicació, els contactes i el contingut. El precedent que la fa rellevant és una resolució de l’AEPD del 2020: cinc milions d’euros per informar malament i per demanar el consentiment amb una pantalla dins de la mateixa aplicació que portava la cessió de dades a tercers activada per defecte. BBVA va publicar una política nova el juliol del 2020.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      userBase: 'Més de 10 milions de clients a Espanya, segons la resolució de l’AEPD',
      links: {
        website: 'https://www.bbva.es/',
        appStore: 'https://apps.apple.com/es/app/id325813155',
      },
      accountRequired: f('yes', 'official', ['bbva-app-store'], 'L’aplicació és el canal de banca en línia d’una entitat de crèdit: sense contracte bancari no hi ha servei.'),
      openSource: f('no', 'official', ['bbva-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La resolució de l’AEPD descriu un tractament que barreja la informació de la relació bancària amb finalitats comercials, i retreu que la informació que es donava als clients no permetia saber quines dades es tractaven ni per a què. L’etiqueta actual és sòbria: informació financera, contacte i identificadors vinculats amb la identitat, i la resta sense vincular.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['bbva-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['bbva-app-store'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['bbva-app-store', 'bbva-aepd-2020'], note: 'La reclamació que va obrir l’expedient de l’AEPD era per un SMS promocional a una persona inscrita a la Llista Robinson.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['bbva-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bbva-app-store'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['bbva-app-store'], note: 'Declarada com a dada no vinculada amb la identitat.' }),
        row('llista-de-contactes', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bbva-app-store'], note: 'El permís el demanen funcions com Bizum; l’etiqueta la declara com a no vinculada.' }),
        row('contingut-de-missatges', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['atencio-a-lusuari'], sources: ['bbva-app-store'], note: 'L’etiqueta declara «contenido del usuario» sense vincular amb la identitat.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['bbva-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['bbva-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['bbva-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['bbva-app-store'], 'L’etiqueta no declara cap identificador publicitari.'),
        thirdPartyTrackersPresent: unknown('No hem pogut consultar la política de privadesa del banc, que és on constarien els proveïdors.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'regulator', ['bbva-aepd-2020'], 'La resolució documenta l’enviament de comunicacions comercials i l’obtenció de consentiment per al tractament amb finalitats comercials a través de l’aplicació.'),
        profiling: unknown('No hem pogut consultar la política vigent, i la resolució se centra en la informació i el consentiment, no en el perfilat.'),
        aiTraining: unknown('No consta informació pública consultable.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'regulator', ['bbva-aepd-2020'], 'La resolució descriu una pantalla de l’aplicació on l’opció de cessió de dades a tercers apareixia activada per defecte.'),
        intraGroupSharing: unknown('No hem pogut consultar la política vigent.'),
        dataBrokerSales: unknown('No consta informació pública consultable.'),
        internationalTransfers: unknown('No hem pogut consultar la política vigent.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem localitzat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: unknown('La política de privadesa de bbva.es no s’ha deixat consultar amb eines automàtiques.'),
        dataAfterDeletion: f('partial', 'editorial', [], 'Com a tota la banca espanyola, la Llei 10/2010 de prevenció del blanqueig obliga a conservar la documentació de la relació durant deu anys; no hem pogut confirmar-ho amb la política del banc.'),
      },
      accountDeletion: {
        possible: f('partial', 'editorial', [], 'No hi ha un compte d’aplicació separable del contracte bancari: cal cancel·lar els productes i exercir després el dret de supressió, limitat per les obligacions legals de conservació.'),
        selfService: unknown('No hem pogut consultar la documentació del banc sobre el procediment de baixa.'),
        difficulty: 'hard',
        obstacles:
          'Com a la resta d’entitats, el dret de supressió xoca amb les obligacions legals de conservació i acaba en un bloqueig, no en un esborrat.',
      },
      userRights: {
        dataExport: unknown('No hem pogut consultar la política de privadesa del banc.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'regulator', ['bbva-aepd-2020'], 'La resolució acredita que el banc va reconèixer per escrit el dret d’oposició d’un reclamant, i li requereix adequar en sis mesos la informació als clients i el procediment de consentiment.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'regulator', ['bbva-aepd-2020'], 'La resolució descriu caselles d’oposició al tractament comercial dins de l’aplicació, però retreu que el tractament fos per defecte i que la informació no permetés entendre’n l’abast.'),
        telemetryOptOut: unknown('No consta informació pública consultable.'),
        granularControls: unknown('No hem pogut consultar la política ni el centre de privadesa del banc.'),
        defaultPosture: 'mixed',
        darkPatterns: f('yes', 'regulator', ['bbva-aepd-2020'], 'L’AEPD va sancionar el procediment de consentiment de l’aplicació: una finestra emergent que remetia a una altra pàgina on la cessió de dades a tercers apareixia activada per defecte.'),
        darkPatternList: [
          {
            type: 'preselected',
            severity: 'high',
            description:
              'La pantalla de consentiment de l’aplicació portava activada per defecte l’opció de cessió de dades a tercers, i l’abast només es podia conèixer seguint un enllaç a una altra pàgina.',
            sources: ['bbva-aepd-2020'],
          },
          {
            type: 'nagging',
            severity: 'medium',
            description:
              'La resolució recull que es va tornar a demanar el consentiment a una persona que ja havia exercit per escrit el dret d’oposició al tractament comercial.',
            sources: ['bbva-aepd-2020'],
          },
        ],
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('No hem localitzat documentació tècnica pública consultable.'),
        atRestEncryption: unknown('No consta informació pública consultable.'),
        mfa: f('partial', 'editorial', [], 'La normativa europea de serveis de pagament exigeix autenticació reforçada per a les operacions, però no hem pogut documentar amb una font del banc quins segons factors admet l’aplicació.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('No hem pogut confirmar l’existència d’un programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hem localitzat cap política pública de divulgació de vulnerabilitats consultable.'),
      },
      alternatives: [
        {
          app: 'santander',
          comparability: 'equivalent',
          rationale: 'Banca mòbil espanyola equivalent, amb una etiqueta de l’App Store que tampoc no declara rastreig.',
        },
        {
          app: 'openbank',
          comparability: 'partial',
          rationale: 'Banc digital que explica la lògica del perfilat creditici amb un detall poc habitual.',
          tradeOffs: 'Declara identificadors utilitzats per rastrejar-te i publicitat de tercers.',
        },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La fitxa es recolza sobretot en una resolució de l’AEPD perquè bbva.es bloqueja les consultes automatitzades: no hem pogut llegir ni la política de privadesa vigent ni les pàgines d’ajuda. Queda pendent completar-la amb les fonts pròpies del banc.',
        openQuestions: [
          'Com és la política de privadesa publicada el juliol del 2020, que l’AEPD va exigir revisar?',
          'Quins controls de privadesa ofereix avui l’aplicació i on són?',
          'Quins terminis de conservació aplica el banc per categoria de dada?',
        ],
      },
    },

    /* ═══════════════════════════ Waylet ═══════════════════════════ */
    {
      slug: 'waylet',
      name: 'Waylet',
      company: 'repsol',
      categories: ['mobilitat-i-transport', 'comerc-electronic'],
      tagline: 'Una aplicació per pagar la benzina que declara l’historial de navegació com a dada de rastreig',
      summary:
        'Waylet serveix per pagar a les estacions de servei de Repsol i acumular saldo. L’etiqueta de l’App Store declara una sola categoria utilitzada per rastrejar-te fora de l’aplicació, i és sorprenent: l’historial de navegació. La política aplicable és la comuna de Repsol i el grup, que descriu «perfiles sencillos del cliente en base a los consumos realizados» emparats en l’interès legítim, i inclou dades biomètriques i de geolocalització entre les categories tractades.',
      platforms: ['ios', 'android'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      userBase: 'Aplicació de pagament i fidelització de la xarxa d’estacions de servei de Repsol',
      links: {
        website: 'https://waylet.es/',
        privacyPolicy: 'https://www.repsol.com/es/pie-de-pagina/politica-de-privacidad/index.cshtml',
        appStore: 'https://apps.apple.com/es/app/id494847823',
      },
      accountRequired: f('yes', 'official', ['waylet-repsol-privacy-policy'], 'El servei es basa en un compte de client amb mitjà de pagament associat, i la política descriu el tractament de dades identificatives i transaccionals per a l’execució del contracte.'),
      openSource: f('no', 'official', ['waylet-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El repostatge és una dada de mobilitat: diu per on passes i amb quina freqüència. Repsol la creua amb el mitjà de pagament, amb la geolocalització i amb els perfils de consum, i l’aplicació declara a més l’historial de navegació entre les dades que serveixen per rastrejar-te en aplicacions i webs d’altres empreses.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['waylet-app-store', 'waylet-repsol-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['waylet-app-store', 'waylet-repsol-privacy-policy'], note: 'És l’única categoria que l’etiqueta declara vinculada amb la identitat.' }),
        row('dades-de-pagament', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['waylet-repsol-privacy-policy'], note: 'La política de Repsol inclou les dades transaccionals i els mitjans de pagament entre les categories tractades.' }),
        row('historial-de-compres', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['waylet-repsol-privacy-policy'], note: 'Els consums són la base dels «perfiles sencillos del cliente» que descriu la política.' }),
        row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['waylet-app-store', 'waylet-repsol-privacy-policy'], note: 'La política tracta la geolocalització amb consentiment en els casos específics que hi preveu.' }),
        row('historial-de-navegacio', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['waylet-app-store'], note: 'Única categoria declarada com a utilitzada per rastrejar-te en aplicacions i webs d’altres empreses.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['waylet-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['waylet-app-store'] }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['waylet-repsol-privacy-policy'], note: 'La política de Repsol enumera dades biomètriques entre les categories tractades, sense concretar en quins serveis.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['waylet-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['waylet-app-store'], 'L’etiqueta declara l’historial de navegació entre les dades utilitzades per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['waylet-app-store'], 'L’etiqueta no declara cap identificador publicitari.'),
        thirdPartyTrackersPresent: unknown('La política de Repsol no anomena els proveïdors publicitaris integrats a l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['waylet-repsol-privacy-policy'], 'Comunicacions comercials basades en el consentiment i oferta adaptada als perfils de consum.'),
        profiling: f('yes', 'official', ['waylet-repsol-privacy-policy'], 'La política declara «perfiles sencillos del cliente en base a los consumos realizados», emparats en l’interès legítim.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['waylet-repsol-privacy-policy'], 'Proveïdors de serveis sota deure de confidencialitat i autoritats competents.'),
        intraGroupSharing: f('yes', 'official', ['waylet-repsol-privacy-policy'], 'Comunicacions a les societats del grup Repsol amb activitat comercial.'),
        dataBrokerSales: unknown('La política no declara cap venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['waylet-repsol-privacy-policy'], 'Transferències protegides amb decisions d’adequació, normes corporatives vinculants o clàusules contractuals tipus.', {
          mechanism: 'bcrs',
        }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem localitzat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['waylet-repsol-privacy-policy'], 'La política lliga la conservació a la durada de la relació comercial, sense terminis per categoria.'),
        dataAfterDeletion: f('yes', 'official', ['waylet-repsol-privacy-policy'], 'Acabada la relació, les dades queden bloquejades durant els terminis de prescripció.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['waylet-repsol-privacy-policy'], 'La política reconeix els drets de supressió i oposició, però no documenta cap procediment de baixa del compte dins de l’aplicació.'),
        selfService: unknown('No hem pogut consultar cap pàgina d’ajuda de Waylet que descrigui la baixa autoservei.'),
        difficulty: 'unknown',
        steps: [
          'Gasta o transfereix el saldo acumulat abans de demanar la baixa.',
          'Escriu a rgpd.crc@repsol.com demanant la supressió del compte i de les dades associades.',
          'Per a qüestions específiques de Waylet, la política indica un delegat de protecció de dades propi a dpd@waylet.es.',
          'Si no obtens resposta dins de termini, reclama davant de l’AEPD.',
        ],
        dataRetained: 'Dades bloquejades durant els terminis de prescripció legal.',
        sources: ['waylet-repsol-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['waylet-repsol-privacy-policy'], 'La política reconeix el dret de portabilitat, però només per la via del correu electrònic.', {
          url: 'mailto:rgpd.crc@repsol.com',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['waylet-repsol-privacy-policy'], 'Accés, rectificació, supressió, oposició i portabilitat a rgpd.crc@repsol.com, amb un delegat específic per a Waylet a dpd@waylet.es.', {
          url: 'mailto:rgpd.crc@repsol.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['waylet-repsol-privacy-policy'], 'Es poden retirar els consentiments comercials i oposar-se al perfilat basat en l’interès legítim, però per correu electrònic.'),
        telemetryOptOut: unknown('La política no descriu cap control sobre l’analítica d’ús.'),
        granularControls: f('partial', 'official', ['waylet-repsol-privacy-policy'], 'Hi ha consentiments separables per finalitat, però no un panell únic documentat dins de l’aplicació.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem revisat els fluxos de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('La política no documenta el xifratge del canal.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('No hem trobat documentació sobre els factors d’autenticació de l’aplicació.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni cap fitxer security.txt.'),
        vulnerabilityDisclosure: unknown('No hem localitzat cap canal públic de divulgació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'moeve-gow',
          comparability: 'equivalent',
          rationale: 'La mateixa funció a la xarxa d’estacions de servei de Moeve, amb una etiqueta que no declara l’historial de navegació.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Val la pena aturar-se a la categoria declarada: l’historial de navegació és una de les dades més reveladores que existeixen, i és l’única que aquesta aplicació reconeix utilitzar per rastrejar. Una aplicació per pagar la benzina no hauria de saber quines pàgines visites.',
        openQuestions: [
          'Quin historial de navegació recull exactament l’aplicació i quins tercers el reben?',
          'En quins serveis de Repsol s’apliquen les dades biomètriques que enumera la política?',
          'Hi ha una manera de donar-se de baixa de Waylet des de la mateixa aplicació?',
        ],
      },
    },

    /* ═══════════════════════════ PayPal ═══════════════════════════ */
    {
      slug: 'paypal',
      name: 'PayPal',
      company: 'paypal-europe',
      categories: ['banca-i-finances', 'comerc-electronic'],
      tagline: 'Deu anys de conservació, decisions automatitzades de solvència i cap respecte pel senyal «Do Not Track»',
      summary:
        'La declaració de privadesa de PayPal és exhaustiva i, en bona part, ho és per obligació: el mateix document explica que la llei luxemburguesa a què està subjecte exigeix més transparència que la resta de normatives europees. Hi consten catorze categories de dades, entre elles les inferides (gènere, ingressos, hàbits de compra i solvència), decisions automatitzades que poden denegar el servei, conservació de deu anys després d’acabar la relació i una frase poc habitual: no atén la configuració «Do Not Track» del navegador.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Luxemburg, per a l’Espai Econòmic Europeu',
      userBase: 'Un dels serveis de pagament en línia més utilitzats del món',
      links: {
        website: 'https://www.paypal.com/es/',
        privacyPolicy: 'https://www.paypal.com/es/legalhub/privacy-full',
        appStore: 'https://apps.apple.com/es/app/id283646709',
      },
      accountRequired: f('partial', 'official', ['paypal-privacy-statement'], 'La declaració preveu expressament l’ús dels serveis sense compte, i adverteix que si després en crees un, la informació de la transacció s’hi pot vincular.'),
      openSource: f('no', 'official', ['paypal-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'PayPal veu la compra abans que el venedor: què compres, a qui, per quant i des d’on. Hi suma els contactes que importes, l’historial de cerca i de navegació que declara l’etiqueta, dades biomètriques d’autenticació i, sobretot, dades inferides: gènere, ingressos, hàbits de compra i solvència que ningú no ha declarat, sinó que el sistema dedueix.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['paypal-privacy-statement', 'paypal-app-store'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['paypal-privacy-statement'], note: 'La declaració inclou la identificació emesa pel govern i la signatura entre els identificadors personals.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['paypal-privacy-statement', 'paypal-app-store'], note: 'Números de compte, IBAN, dades de targeta i fins i tot el CVV consten entre els registres financers.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['paypal-privacy-statement', 'paypal-app-store'], note: 'Saldos, historial i detalls de transacció, contingut del carretó i béns o serveis considerats als llocs dels socis i venedors.' }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['paypal-privacy-statement', 'paypal-app-store'], note: 'La declaració reconeix que compartir els contactes facilita trobar a qui enviar diners, i que sense fer-ho el servei continua funcionant.' }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['paypal-privacy-statement', 'paypal-app-store'], note: 'GPS amb consentiment per a comptes de serveis financers, i geolocalització per IP en la resta de casos.' }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['paypal-privacy-statement'], note: 'Identificació per veu, foto o escaneig facial amb consentiment, per verificar la identitat en operacions sensibles.' }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari'], sources: ['paypal-privacy-statement'], note: 'La declaració inclou les gravacions de les trucades amb l’atenció al client.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['paypal-app-store'] }),
        row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['paypal-app-store', 'paypal-privacy-statement'], note: 'La declaració esmenta els llocs visitats abans d’arribar als seus, recollits amb galetes.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['paypal-privacy-statement', 'paypal-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['paypal-app-store'], note: 'Única categoria declarada com a utilitzada per rastrejar-te en aplicacions i webs d’altres empreses.' }),
        row('nivell-d-ingressos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'seguretat-i-prevencio-del-frau'], sources: ['paypal-privacy-statement'], note: 'Els ingressos consten tant entre els registres financers com entre les dades inferides.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['paypal-privacy-statement'], note: 'La declaració enumera com a dades inferides el gènere, els ingressos, els hàbits de navegació i compra, la solvència i l’avaluació de frau i risc.' }),
        row('origen-etnic-o-nacionalitat', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['paypal-privacy-statement'], note: 'La declaració inclou nacionalitat, ciutadania, discapacitat i situació militar entre les «características de las clasificaciones protegidas».' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['paypal-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['paypal-app-store'], 'L’etiqueta declara dades d’ús utilitzades per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('partial', 'official', ['paypal-privacy-statement'], 'La declaració parla de galetes i altres tecnologies de seguiment per oferir publicitat basada en interessos, però no identifica els identificadors concrets de l’aplicació.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['paypal-privacy-statement'], 'La declaració reconeix que comparteix informació amb plataformes de publicitat «siguiendo sus indicaciones» i que utilitza tercers per mostrar anuncis i mesurar-ne les interaccions.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['paypal-privacy-statement'], 'Publicitat adaptada als interessos dins i fora dels seus serveis, amb plataformes publicitàries i socis de màrqueting.'),
        profiling: f('yes', 'official', ['paypal-privacy-statement'], 'Decisions automatitzades amb tècniques d’elaboració de perfils per avaluar risc, frau i solvència, que poden denegar serveis nous, aturar els que s’utilitzen o imposar-hi límits; es pot demanar revisió humana.'),
        aiTraining: unknown('La declaració no esmenta l’entrenament de models d’intel·ligència artificial.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['paypal-privacy-statement'], 'Altres titulars de comptes, socis i venedors i els seus proveïdors, plataformes de publicitat, proveïdors de seguretat i serveis de Google com reCAPTCHA i l’emplenament automàtic d’adreces.'),
        intraGroupSharing: f('yes', 'official', ['paypal-privacy-statement'], 'La declaració tracta com un sol conjunt els serveis del grup PayPal, inclosos Braintree, Xoom, Hyperwallet i Fastlane.'),
        dataBrokerSales: unknown('La declaració no descriu cap venda de dades a intermediaris, però sí la comunicació a agències de crèdit fora del seu abast.'),
        internationalTransfers: f('yes', 'official', ['paypal-privacy-statement'], 'Tractament als Estats Units i a altres països, només quan el destinatari és en un país amb decisió d’adequació o amb les garanties equivalents que descriu la declaració.', {
          mechanism: 'sccs',
        }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: f('partial', 'official', ['paypal-privacy-statement'], 'No hi ha un informe de transparència a l’ús, però la declaració remet a una «Lista de proveedores externos» amb les parts que reben dades, una publicació que la mateixa empresa atribueix a l’exigència de transparència de la llei luxemburguesa.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['paypal-privacy-statement'], 'La informació de la relació es conserva mentre dura, «más un período de 10 años», i les dades biomètriques com a màxim tres anys després de tancar el compte.'),
        dataAfterDeletion: f('yes', 'official', ['paypal-privacy-statement'], 'Tancar el compte o demanar la supressió no impedeix conservar part de la informació durant aquests terminis, per obligació legal i per defensa davant de reclamacions.'),
        periods: [
          { period: 'Durada de la relació més deu anys', sources: ['paypal-privacy-statement'] },
          { dataType: 'dades-biometriques', period: 'Com a màxim tres anys després de tancar el compte', sources: ['paypal-privacy-statement'] },
        ],
      },
      accountDeletion: {
        possible: f('partial', 'official', ['paypal-privacy-statement'], 'Es pot tancar el compte des del portal de gestió del perfil, però la declaració adverteix que part de la informació es conserva igualment.'),
        selfService: f('yes', 'official', ['paypal-privacy-statement'], 'La declaració indica iniciar sessió al compte o al portal de gestió del perfil i enviar la sol·licitud per exercir els drets, inclòs el tancament.'),
        difficulty: 'medium',
        steps: [
          'Liquida el saldo i espera que no quedin transaccions ni disputes obertes.',
          'Inicia sessió al compte de PayPal o al portal de gestió del perfil i demana el tancament.',
          'Des del mateix lloc pots esborrar abans la informació que hi hagis afegit, com les adreces que no siguin la principal.',
          'Tingues present que les dades de la relació es conservaran deu anys, i les biomètriques fins a tres anys.',
        ],
        obstacles:
          'El tancament no atura la conservació: el termini de deu anys s’aplica igualment, i la declaració diu expressament que no s’atén la configuració «Do Not Track» del navegador.',
        dataRetained: 'Informació de la relació durant deu anys i dades biomètriques fins a tres anys després del tancament.',
        sources: ['paypal-privacy-statement'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['paypal-privacy-statement'], 'Els drets, inclosa la portabilitat, s’exerceixen iniciant sessió al compte o al portal de gestió del perfil i enviant la sol·licitud.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['paypal-privacy-statement'], 'Sol·licituds des del compte, i dret de reclamació davant de la Commission Nationale pour la Protection des Données de Luxemburg, que és l’autoritat de control principal.', {
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['paypal-privacy-statement'], 'Algunes funcions publicitàries s’ofereixen amb exclusió voluntària o exigeixen consentiment revocable, però la declaració adverteix que no atén el senyal «Do Not Track» perquè molts serveis no funcionen sense dades de seguiment.'),
        telemetryOptOut: f('no', 'official', ['paypal-privacy-statement'], '«Como muchos de nuestros servicios no funcionan sin los datos de seguimiento, no atendemos la configuración de DNT».'),
        granularControls: f('partial', 'official', ['paypal-privacy-statement'], 'El perfil es pot marcar com a privat i es poden esborrar dades afegides, però no hi ha un panell únic de consentiments per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'editorial', [], 'Declarar obertament que no s’atén el senyal «Do Not Track» és honest, però converteix una preferència que la persona ja ha expressat al navegador en una decisió unilateral del servei.'),
        darkPatternList: [
          {
            type: 'confusing-language',
            severity: 'medium',
            description:
              'La declaració descriu la sincronització de contactes i la personalització com a «funciones que pueden ser de su interés», quan comporten la cessió de dades de terceres persones que no han acceptat res.',
            sources: ['paypal-privacy-statement'],
          },
        ],
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: f('partial', 'official', ['paypal-privacy-statement'], 'La declaració enumera tallafocs, xifratge de dades i controls d’accés físic als centres de dades, sense detall tècnic del protocol.'),
        atRestEncryption: f('partial', 'official', ['paypal-privacy-statement'], 'La declaració esmenta el xifratge de dades entre les mesures de seguretat, sense concretar-ne l’abast.'),
        mfa: f('yes', 'official', ['paypal-app-store'], 'La fitxa de l’App Store descriu l’inici de sessió amb clau d’accés (passkey), resistent al pesciolisme.', {
          methods: ['passkey', 'sms', 'app-push'],
        }),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('No hem pogut confirmar l’abast ni les condicions del programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hem pogut consultar la pàgina de notificació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'bizum-pay',
          comparability: 'partial',
          rationale: 'Per enviar diners entre particulars a Espanya, amb una etiqueta de privadesa molt més continguda.',
          tradeOffs: 'Bizum no serveix per pagar compres internacionals ni ofereix protecció al comprador.',
        },
        {
          app: 'revolut',
          comparability: 'partial',
          rationale: 'Alternativa per a pagaments i enviaments internacionals amb controls de privadesa dins de l’aplicació.',
          tradeOffs: 'L’avís de privadesa aplicable a l’EEE no és consultable amb eines automàtiques.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'És la política més detallada del lot, i el detall no juga a favor seu: permet llegir negre sobre blanc que el servei dedueix la solvència i els ingressos, que hi ha decisions automatitzades que poden deixar una persona sense servei i que la preferència de no ser rastrejat expressada al navegador no es respecta.',
        openQuestions: [
          'Quines plataformes publicitàries concretes reben dades i amb quines finalitats?',
          'Quin és l’abast del programa de recompenses de seguretat i on es notifiquen les vulnerabilitats?',
        ],
      },
    },
  ],
  incidents: [
    {
      slug: 'bbva-aepd-informacio-consentiment-2020',
      title: 'Sanció de cinc milions d’euros a BBVA per la informació als clients i el consentiment de l’aplicació',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['bbva'],
      company: 'bbva',
      occurredAt: '2020-11-18',
      disclosedAt: '2020-11-18',
      description:
        'L’AEPD va resoldre l’expedient PS/00070/2019 amb dues sancions: dos milions d’euros per infracció dels articles 13 i 14 del RGPD, perquè la informació que el banc donava a la clientela no permetia saber quines dades es tractaven ni amb quina finalitat, i tres milions més per infracció de l’article 6, per la manera d’obtenir el consentiment. Una de les reclamacions descrivia que l’aplicació de BBVA mostrava una finestra emergent que remetia a una altra pàgina on la cessió de dades a tercers apareixia activada per defecte, i una altra, l’enviament d’un SMS promocional a una persona inscrita a la Llista Robinson. La resolució requeria adequar en sis mesos la informació i el procediment de consentiment; el banc havia publicat una política de privadesa nova el juliol del 2020.',
      affectedPeople: 'La clientela de BBVA a Espanya, que la mateixa resolució xifra en més de 10 milions de persones.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        fineAmountEur: 5000000,
        legalBasis: 'Articles 6, 13 i 14 del RGPD',
        status: 'final',
      },
      sources: ['bbva-aepd-2020'],
    },
  ],
  storeIds: {
    petmira: 'com.pawnese.petmira',
    bumble: 'com.moxco.bumble',
    'moeve-gow': 'com.cepsa.xmartplace',
    revolut: 'com.revolut.revolut',
    'bizum-pay': 'es.bizum.wallet',
    'trade-republic': 'de.traderepublic.app',
    tricount: 'com.tribab.tricount.test',
    bbva: 'com.bbva.BBVAMovil',
    waylet: 'com.repsol.copiloto',
    paypal: 'com.yourcompany.PPClient',
  },
}
