import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/**
 * Lot 37 de la segona onada: vuit utilitats i dos serveis de viatge. Una
 * autorització de viatge d'un ministeri britànic, una botiga xinesa amb
 * política manllevada, l'app d'una operadora, un client de wifi acadèmic de
 * codi obert, una VPN auditada, la botiga d'Epic Games, un comandament a
 * distància ple de publicitat, l'app d'una alarma domèstica, Bolt i Ryanair.
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'uk-home-office',
      name: 'Home Office',
      legalName: 'Home Office (Secretary of State for the Home Department)',
      description:
        'Ministeri de l’Interior del Regne Unit. A través de UK Visas and Immigration gestiona els visats, el control de fronteres i l’autorització electrònica de viatge (ETA), i publica l’aplicació UK ETA.',
      headquartersCountry: 'GB',
      leadSupervisoryAuthority: 'Information Commissioner’s Office (Regne Unit)',
      ownership: 'state',
      primaryRevenueModel: 'unknown',
      website: 'https://www.gov.uk/government/organisations/home-office',
      productDomains: ['gov.uk', 'homeoffice.gov.uk'],
    },
    {
      slug: 'uwe-international',
      name: 'UWE International',
      legalName: 'UWE INTERNATIONAL LIMITED',
      description:
        'Societat registrada amb el número 15851145 que explota la botiga en línia Yepexpress. La política de privadesa la identifica com a responsable del tractament i la sotmet al RGPD i a la normativa britànica, però no en publica ni el domicili social ni el país.',
      ownership: 'private',
      primaryRevenueModel: 'commerce',
      website: 'https://www.yepexpress.com/',
      productDomains: ['yepexpress.com'],
      privacyContact: 'service@yepexpress.com',
    },
    {
      slug: 'vodafone-espana',
      name: 'Vodafone España',
      legalName: 'Vodafone España, S.A.U.',
      description:
        'Operadora de telecomunicacions amb seu a l’avinguda d’Amèrica 115 de Madrid i CIF A-80907397. Actua com a corresponsable del tractament amb Vodafone Servicios, S.L. (B-87539284) i comparteix dades amb la resta d’entitats del grup Vodafone a Espanya, encapçalades per Vodafone Holdings Europe, S.L.U.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'subsidiary',
      primaryRevenueModel: 'subscription',
      website: 'https://www.vodafone.es/',
      productDomains: ['vodafone.es'],
      privacyContact: 'dpo-spain@vodafone.com',
    },
    {
      slug: 'surf-bv',
      name: 'SURF',
      legalName: 'SURF B.V.',
      description:
        'Cooperativa d’institucions d’ensenyament superior i recerca dels Països Baixos que hi opera la infraestructura digital comuna. Publica les aplicacions geteduroam per a connectar-se a la xarxa wifi acadèmica eduroam.',
      headquartersCountry: 'NL',
      euEstablishment: 'NL',
      leadSupervisoryAuthority: 'Autoriteit Persoonsgegevens (Països Baixos)',
      ownership: 'nonprofit',
      primaryRevenueModel: 'unknown',
      website: 'https://www.surf.nl/',
      productDomains: ['surf.nl', 'geteduroam.app', 'eduroam.nl'],
    },
    {
      slug: 'geant-association',
      name: 'GÉANT Association',
      legalName: 'GÉANT Association',
      description:
        'Associació europea de xarxes nacionals de recerca i educació, amb seu a Amsterdam. Coordina eduroam a escala internacional i és la responsable del tractament de la infraestructura europea d’autenticació, de la base de dades d’eduroam i de l’instal·lador geteduroam.',
      headquartersCountry: 'NL',
      euEstablishment: 'NL',
      leadSupervisoryAuthority: 'Autoriteit Persoonsgegevens (Països Baixos)',
      ownership: 'nonprofit',
      primaryRevenueModel: 'unknown',
      website: 'https://www.geant.org/',
      productDomains: ['geant.org', 'eduroam.org'],
      privacyContact: 'gdpr@geant.org',
    },
    {
      slug: 'epic-games-inc',
      name: 'Epic Games',
      legalName: 'Epic Games, Inc.',
      description:
        'Empresa nord-americana de Cary (Carolina del Nord) que desenvolupa Fortnite i Unreal Engine i explota la botiga Epic Games Store, distribuïda a iOS a la Unió Europea des del 2024 gràcies a la Llei de mercats digitals.',
      headquartersCountry: 'US',
      ownership: 'private',
      foundedYear: 1991,
      primaryRevenueModel: 'commerce',
      website: 'https://www.epicgames.com/',
      productDomains: ['epicgames.com', 'fortnite.com', 'unrealengine.com', 'fab.com'],
      privacyContact: 'privacy@support.epicgames.com',
    },
    {
      slug: 'epic-games-commerce',
      name: 'Epic Games Commerce',
      legalName: 'Epic Games Commerce GmbH',
      parent: 'epic-games-inc',
      description:
        'Societat suïssa amb seu a Root D4 responsable del tractament de les dades de les persones no residents als Estats Units que fan servir l’Epic Games Store, Fab i Unreal Engine.',
      headquartersCountry: 'CH',
      ownership: 'subsidiary',
      primaryRevenueModel: 'commerce',
      website: 'https://www.epicgames.com/',
      privacyContact: 'dpo@support.epicgames.com',
    },
    {
      slug: 'kraftwerk9',
      name: 'Kraftwerk 9',
      legalName: 'KRAFTWERK 9 LTD',
      description:
        'Estudi xipriota amb domicili a Nicòsia que publica aplicacions de comandament a distància i de reproducció per a televisors connectats, finançades amb publicitat i subscripcions.',
      headquartersCountry: 'CY',
      euEstablishment: 'CY',
      leadSupervisoryAuthority: 'Commissioner for Personal Data Protection (Xipre)',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://kraftwerk9.com/',
      productDomains: ['kraftwerk9.com'],
    },
    {
      slug: 'securitas-direct-espana',
      name: 'Securitas Direct España',
      legalName: 'Securitas Direct España, S.A.U.',
      description:
        'Filial espanyola del grup Verisure, amb CIF A-26106013 i domicili al carrer Priégola 2 de Pozuelo de Alarcón. Presta el servei d’alarmes connectades a central receptora amb la marca Verisure i publica l’aplicació My Verisure.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'subsidiary',
      primaryRevenueModel: 'subscription',
      website: 'https://www.verisure.es/',
      productDomains: ['verisure.es', 'securitasdirect.es'],
      privacyContact: 'dpo@verisure.es',
    },
    {
      slug: 'bolt-technology',
      name: 'Bolt',
      legalName: 'Bolt Technology OÜ',
      description:
        'Grup estonià de mobilitat que ofereix viatges amb conductor, cotxes compartits, patinets i repartiment. És el desenvolupador declarat de l’aplicació a l’App Store.',
      headquartersCountry: 'EE',
      euEstablishment: 'EE',
      leadSupervisoryAuthority: 'Andmekaitse Inspektsioon (Estònia)',
      ownership: 'private',
      foundedYear: 2013,
      primaryRevenueModel: 'commerce',
      website: 'https://bolt.eu/',
      productDomains: ['bolt.eu'],
      privacyContact: 'privacy@bolt.eu',
    },
    {
      slug: 'bolt-operations',
      name: 'Bolt Operations',
      legalName: 'Bolt Operations OÜ',
      parent: 'bolt-technology',
      description:
        'Societat del grup Bolt que l’avís de privadesa per a passatgers identifica com a responsable principal del tractament, amb un delegat de protecció de dades global. A cada mercat pot compartir la responsabilitat amb la filial local.',
      headquartersCountry: 'EE',
      euEstablishment: 'EE',
      leadSupervisoryAuthority: 'Andmekaitse Inspektsioon (Estònia)',
      ownership: 'subsidiary',
      primaryRevenueModel: 'commerce',
      website: 'https://bolt.eu/',
      privacyContact: 'privacy@bolt.eu',
    },
    {
      slug: 'ryanair',
      name: 'Ryanair',
      legalName: 'Ryanair Ltd.',
      description:
        'Aerolínia irlandesa de baix cost amb domicili a The Concourse Building, Airside Retail Park, Swords (Dublín). És el grup aeri més gran d’Europa i opera també amb les marques Buzz, Lauda, Malta Air i Ryanair UK.',
      headquartersCountry: 'IE',
      euEstablishment: 'IE',
      leadSupervisoryAuthority: 'Data Protection Commission (Irlanda)',
      ownership: 'public',
      foundedYear: 1984,
      primaryRevenueModel: 'commerce',
      website: 'https://www.ryanair.com/',
      productDomains: ['ryanair.com'],
    },
  ],

  sources: [
    /* ── UK ETA ── */
    s('uk-eta-app-store', 'UK ETA — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6444912481', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada pel Home Office. No declara cap dada de rastreig; vincula amb la identitat les dades de contacte, les fotos o vídeos i «dades sensibles», i deixa sense vincular l’identificador del dispositiu, l’ús i els diagnòstics.',
    }),
    s('uk-eta-privacy-notice', 'Electronic travel authorisation (ETA): privacy information notice', 'https://www.gov.uk/government/publications/electronic-travel-authorisation-eta-privacy-information-notice/electronic-travel-authorisation-privacy-information-notice', 'Home Office', 'privacy-policy', 'primary', {
      summary:
        'Avís de privadesa oficial de l’ETA. Hi consten la base jurídica d’interès públic, la decisió automatitzada d’atorgament, la impossibilitat de retirar una sol·licitud i els terminis de conservació (3 anys per als biomètrics facials, 15 anys per a les dades biogràfiques).',
    }),
    s('uk-eta-gov-guidance', 'Get an electronic travel authorisation (ETA) to visit the UK', 'https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta', 'GOV.UK', 'support-doc', 'primary', {
      summary: 'Guia oficial del tràmit: qui necessita l’ETA, què costa i com comprovar-ne l’estat un cop concedida.',
    }),

    /* ── Yepexpress ── */
    s('yepexpress-app-store', 'Yepexpress — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6630366971', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa del desenvolupador. Declara dades d’ús per rastrejar en apps i webs d’altres empreses i no declara cap dada vinculada amb la identitat, cosa que contradiu la política de privadesa.',
    }),
    s('yepexpress-privacy-policy', 'Yepexpress Privacy Policy', 'https://www.yepexpress.com/pages/privacy-policy', 'UWE INTERNATIONAL LIMITED', 'privacy-policy', 'primary', {
      summary:
        'Política de privadesa de la botiga. Descriu dades de registre, informació tècnica i compartició amb xarxes publicitàries i Google Analytics, i identifica el responsable només amb el nom i el número de societat.',
    }),

    /* ── Mi Vodafone ── */
    s('mi-vodafone-app-store', 'Mi Vodafone — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id455655421', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per Vodafone España. Declara dades d’ús i diagnòstics per rastrejar, vincula l’identificador d’usuari i la interacció amb el producte, i deixa sense vincular la ubicació exacta i aproximada.',
    }),
    s('vodafone-es-privacy-policy', 'Política de Privacidad y Cookies de Vodafone España', 'https://www.vodafone.es/c/conocenos/es/vodafone-espana/quienes-somos/legal-y-regulatorio/politica-de-privacidad-y-cookies/', 'Vodafone España', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política principal del grup a Espanya: corresponsabilitat, dades de trànsit i localització, anàlisi Big Data amb possibilitat d’exclusió, publicitat amb Meta i Google amb consentiment, transferències a Colòmbia, el Perú, el Marroc, Egipte i l’Índia i terminis de conservació de sis anys i dotze mesos.',
    }),
    s('vodafone-es-app-supplement', 'Suplemento de privacidad de las Apps de Vodafone', 'https://www.vodafone.es/c/conocenos/es/vodafone-espana/quienes-somos/legal-y-regulatorio/politica-de-privacidad-y-cookies/suplemento-privacidad-apps/', 'Vodafone España', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Suplement que explica quines dades recull qualsevol app de Vodafone, incloent-hi Mi Vodafone: identificadors del dispositiu, sistema operatiu, tipus de connexió, identificador de l’aplicació i informació d’ús.',
    }),

    /* ── geteduroam ── */
    s('geteduroam-app-store', 'geteduroam — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1504076137', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de SURF B.V.: «El desarrollador no recopila ningún dato en esta app».',
    }),
    s('eduroam-privacy-notice', 'eduroam Privacy Notice', 'https://www.eduroam.org/privacy/', 'GÉANT Association', 'privacy-policy', 'primary', {
      summary:
        'Avís de privadesa del servei eduroam. Detalla què registren els servidors intermediaris europeus (realm, adreça MAC i, si no s’anonimitza, el nom d’usuari), el disseny orientat a l’anonimat i la conservació de sis mesos de les dades de itinerància.',
    }),
    s('geteduroam-source', 'geteduroam — Codi font de l’aplicació d’Apple', 'https://github.com/geteduroam/apple-app', 'geteduroam', 'repository', 'primary', {
      summary: 'Repositori oficial de l’aplicació per a iOS i macOS, publicat amb llicència BSD de tres clàusules.',
    }),

    /* ── Proton VPN ── */
    s('proton-vpn-app-store', 'Proton VPN — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1437005085', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Proton AG. No declara cap dada de rastreig ni cap dada vinculada amb la identitat: només l’adreça electrònica i les dades d’errors, sense vincular.',
    }),
    s('proton-vpn-privacy-policy', 'Proton VPN Privacy Policy', 'https://protonvpn.com/privacy-policy', 'Proton AG', 'privacy-policy', 'primary', {
      summary:
        'Política específica del servei de VPN: no es registra el trànsit ni el contingut de les comunicacions, els servidors són a Suïssa, Alemanya i Noruega i el responsable és Proton AG, a Ginebra.',
    }),
    s('proton-vpn-no-logs', 'What is a no-logs VPN?', 'https://protonvpn.com/support/no-logs-vpn/', 'Proton AG', 'support-doc', 'primary', {
      summary:
        'Pàgina d’ajuda que enumera què no es registra (llocs visitats, contingut, adreces IP, durada de les sessions, ubicació), el xifratge de disc complet dels servidors i l’absència d’obligacions de registre a Suïssa.',
    }),
    s('proton-vpn-no-logs-audit', 'For 5th year running, Proton VPN passes external no-logs audit', 'https://protonvpn.com/blog/no-logs-audit', 'Proton AG', 'audit', 'primary', {
      summary:
        'Anunci i enllaços dels cinc informes anuals consecutius de Securitum sobre la infraestructura de servidors, amb la conclusió del 2026 citada literalment, i referència al programa de recompenses i a les auditories de les aplicacions.',
    }),
    s('proton-security-txt', 'Proton — security.txt', 'https://protonvpn.com/.well-known/security.txt', 'Proton AG', 'technical-doc', 'primary', {
      summary: 'Fitxer de divulgació de vulnerabilitats amb l’adreça security@proton.me i la clau PGP de contacte.',
    }),

    /* ── Epic Games ── */
    s('epic-games-app-store', 'Epic Games — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6480077263', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa d’Epic Games Inc. No declara cap dada de rastreig; vincula amb la identitat el correu, el nom, el telèfon, la ubicació aproximada, els identificadors, les dades d’àudio i la interacció amb el producte.',
    }),
    s('epic-privacy-policy', 'Epic Games Privacy Policy', 'https://www.epicgames.com/site/en-US/privacypolicy', 'Epic Games', 'privacy-policy', 'primary', {
      summary:
        'Política global d’Epic, actualitzada l’abril del 2026. Diu que no ven dades ni les tracta per a publicitat segmentada, enumera els destinataris (editors, plataformes, proveïdors de models de llenguatge) i identifica les entitats responsables fora dels Estats Units.',
    }),
    s('epic-security-txt', 'Epic Games — security.txt', 'https://www.epicgames.com/.well-known/security.txt', 'Epic Games', 'technical-doc', 'primary', {
      summary: 'Fitxer de divulgació que remet el programa de recompenses de vulnerabilitats a HackerOne i dona l’adreça security@epicgames.com.',
    }),
    s('epic-ftc-2022', 'Fortnite Video Game Maker Epic Games to Pay More Than Half a Billion Dollars over FTC Allegations of Privacy Violations and Unwanted Charges', 'https://www.ftc.gov/news-events/news/press-releases/2022/12/fortnite-video-game-maker-epic-games-pay-more-half-billion-dollars-over-ftc-allegations', 'Federal Trade Commission (Estats Units)', 'regulator', 'authority', {
      publishedAt: '2022-12-19',
      summary:
        'Nota de la FTC sobre els dos acords amb Epic Games: 275 milions de dòlars per vulnerar la COPPA i 245 milions per patrons enganyosos de cobrament, amb obligació de configuracions protectores per defecte i auditories independents.',
    }),

    /* ── Mando a distancia universal TV ── */
    s('mando-universal-app-store', 'Mando a distancia universal TV — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1439422220', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de KRAFTWERK 9 LTD. Declara ubicació, identificadors, dades d’ús i diagnòstics per rastrejar, i vincula amb la identitat la ubicació aproximada, l’identificador del dispositiu i les dades de publicitat per a publicitat de tercers.',
    }),
    s('kraftwerk9-privacy-policy', 'Kraftwerk 9 LTD Privacy Policy', 'https://kraftwerk9.com/privacy', 'Kraftwerk 9 LTD', 'privacy-policy', 'primary', {
      summary:
        'Política genèrica de l’empresa. Cita Appodeal com a xarxa publicitària i Google Analytics i Firebase com a analítica, no fixa cap termini de conservació, no admet el senyal Do Not Track i descriu transferències internacionals sense concretar-ne el mecanisme.',
    }),

    /* ── My Verisure ── */
    s('my-verisure-app-store', 'My Verisure — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1473822730', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Securitas Direct. No declara dades de rastreig, però vincula amb la identitat la ubicació exacta, els identificadors d’usuari i de dispositiu, l’ús i els diagnòstics.',
    }),
    s('my-verisure-privacy-policy', 'Condiciones de uso y política de privacidad de la APP MY VERISURE', 'https://customers.verisure.es/media_contents/app/myverisure/ios/terms_es_verisure.html', 'Securitas Direct España', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Condicions i política de l’aplicació. Detalla els dos tipus de compte i com s’eliminen, les dades del servei GUARDIAN, la compartició de la ubicació amb altres usuaris i el màrqueting digital amb Meta, TikTok, Snapchat i Google.',
    }),

    /* ── Bolt ── */
    s('bolt-app-store', 'Bolt — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id675033630', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de BOLT TECHNOLOGY OU. Declara els identificadors com a dada de rastreig i vincula amb la identitat la ubicació exacta, l’adreça, la informació de pagament, l’historial de cerca i les dades de publicitat.',
    }),
    s('bolt-privacy-riders', 'Global Privacy Notice for Passengers', 'https://bolt.eu/en/privacy/privacy-for-riders/', 'Bolt Operations OÜ', 'privacy-policy', 'primary', {
      publishedAt: '2025-04-11',
      summary:
        'Avís de privadesa per a passatgers. Inclou la verificació biomètrica amb consentiment, les dades que veu el conductor, els destinataris i, sobretot, una taula de terminis de conservació amb xifres concretes per a missatges, enregistraments d’àudio i atenció al client.',
    }),
    s('bolt-security-txt', 'Bolt — security.txt', 'https://bolt.eu/.well-known/security.txt', 'Bolt', 'technical-doc', 'primary', {
      summary: 'Fitxer de divulgació de vulnerabilitats que remet al programa de recompenses de Bolt i a l’adreça security@bolt.eu.',
    }),

    /* ── Ryanair ── */
    s('ryanair-app-store', 'Ryanair — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id504270602', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Ryanair Ltd. No declara cap dada de rastreig i vincula amb la identitat la ubicació exacta i aproximada, les dades de contacte, els identificadors i la interacció amb el producte.',
    }),
    s('ryanair-privacy-policy', 'Política de privacidad de Ryanair', 'https://www.ryanair.com/es/es/empresa/politica-de-privacidad', 'Ryanair', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2025-03-24',
      summary:
        'Política vigent des del 24 de març del 2025. El contingut de cada apartat es carrega amb JavaScript i no s’ha pogut llegir amb cap de les versions provades (espanyola, irlandesa i britànica); només en consten els títols de les seccions.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ UK ETA ═══════════════════════════ */
    {
      slug: 'uk-eta',
      name: 'UK ETA',
      company: 'uk-home-office',
      categories: ['administracio-publica', 'viatges-i-allotjament'],
      tagline: 'Passaport i cara al ministeri de l’Interior britànic, quinze anys de conservació i cap manera de fer-se enrere',
      summary:
        'L’aplicació del Home Office serveix per demanar l’autorització electrònica de viatge que ara necessiten els ciutadans de la Unió Europea per entrar al Regne Unit. Demana el passaport i una imatge facial, decideix de manera automatitzada i, un cop enviada la sol·licitud, el mateix avís de privadesa adverteix que potser ja no es pot retirar. A canvi, és dels pocs serveis d’aquest lot que publica terminis de conservació exactes: tres anys els biomètrics facials i quinze anys la resta.',
      platforms: ['ios', 'android'],
      businessModel: 'unknown',
      jurisdiction: 'Regne Unit',
      userBase: 'Obligatòria per a la majoria de visitants de la Unió Europea des del 2025',
      links: {
        website: 'https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta',
        privacyPolicy: 'https://www.gov.uk/government/publications/electronic-travel-authorisation-eta-privacy-information-notice',
        appStore: 'https://apps.apple.com/es/app/id6444912481',
      },
      accountRequired: f('yes', 'official', ['uk-eta-privacy-notice', 'uk-eta-gov-guidance'], 'No hi ha cap ús anònim: l’aplicació existeix per presentar una sol·licitud identificada davant del Home Office, que costa 20 lliures.'),
      openSource: f('no', 'official', ['uk-eta-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La imatge facial i el passaport, units a la nacionalitat i a l’adreça, formen un expedient d’immigració que es queda al ministeri de l’Interior britànic quinze anys després de l’última actuació, encara que el viatge duri un cap de setmana.',
      dataCollection: [
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal', 'prestacio-del-servei'], sources: ['uk-eta-privacy-notice', 'uk-eta-app-store'], note: 'Número de passaport i data de caducitat; l’etiqueta de l’App Store ho declara com a «datos sensibles».' }),
        row('dades-biometriques', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['uk-eta-privacy-notice', 'uk-eta-app-store'], note: 'Biometria facial tractada amb la base de l’article 9.2.g del RGPD britànic, interès públic essencial.' }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['uk-eta-app-store'], note: 'L’etiqueta declara fotos o vídeos de la persona usuària per al funcionament de l’app.' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['uk-eta-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['uk-eta-app-store'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['uk-eta-app-store'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['uk-eta-app-store'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal'], sources: ['uk-eta-privacy-notice'], note: 'També es demana al servei web «check your ETA».' }),
        row('origen-etnic-o-nacionalitat', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal'], sources: ['uk-eta-privacy-notice'], note: 'La nacionalitat és una dada imprescindible del tràmit i figura entre les que es tracten.' }),
        row('adreca-ip', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['uk-eta-privacy-notice'], note: 'Als registres d’accés del servei «check your ETA», esborrats al cap de 30 dies.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['uk-eta-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['uk-eta-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['uk-eta-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['uk-eta-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['uk-eta-app-store'], 'No hi ha cap categoria publicitària a l’etiqueta.'),
        thirdPartyTrackersPresent: unknown('L’avís de privadesa no esmenta cap proveïdor d’analítica ni cap rastrejador de tercers.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['uk-eta-privacy-notice', 'uk-eta-app-store'], 'És un tràmit administratiu sense finalitats comercials.'),
        profiling: f('partial', 'official', ['uk-eta-privacy-notice'], 'La decisió d’atorgar l’ETA és automatitzada; només els casos complexos o desfavorables els revisa una persona. Qui no vulgui una decisió automatitzada ha de demanar un visat de visitant.'),
        aiTraining: unknown('L’avís no diu res sobre l’ús de les dades per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: unknown('L’avís específic de l’ETA remet a l’avís general de fronteres, immigració i ciutadania, que no hem pogut revisar apartat per apartat.'),
        intraGroupSharing: na('És un organisme públic, no un grup empresarial.'),
        dataBrokerSales: f('no', 'editorial', [], 'Un ministeri no ven dades d’immigració; ho donem per fet, però l’avís no ho afirma expressament.'),
        internationalTransfers: unknown('L’avís de l’ETA no detalla transferències a altres països ni el mecanisme que s’hi aplicaria.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència específic del programa ETA.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['uk-eta-privacy-notice'], 'És dels pocs serveis del lot amb terminis numèrics explícits.'),
        dataAfterDeletion: f('yes', 'official', ['uk-eta-privacy-notice'], 'Les dades biogràfiques es conserven quinze anys després de l’última actuació de l’expedient, encara que l’autorització hagi caducat.'),
        periods: [
          { dataType: 'dades-biometriques', period: 'Normalment 3 anys, llevat que hi hagi motius per conservar la imatge facial més temps', sources: ['uk-eta-privacy-notice'] },
          { period: '15 anys després de l’última actuació per a les dades biogràfiques i personals, en línia amb els terminis dels visats', sources: ['uk-eta-privacy-notice'] },
          { period: '30 minuts des de l’última activitat per a les dades introduïdes al servei «check your ETA»', sources: ['uk-eta-privacy-notice'] },
          { dataType: 'adreca-ip', period: '30 dies als registres d’accés de «check your ETA»', sources: ['uk-eta-privacy-notice'] },
        ],
      },
      accountDeletion: {
        possible: f('no', 'official', ['uk-eta-privacy-notice'], 'No hi ha cap compte que es pugui tancar: la sol·licitud es tramita a l’instant i l’avís adverteix que pot no ser possible retirar-la un cop enviada.'),
        selfService: f('no', 'official', ['uk-eta-privacy-notice']),
        difficulty: 'impossible',
        requiresSupportContact: true,
        steps: [
          'L’aplicació no conserva cap dada al telèfon un cop la sol·licitud s’ha enviat correctament; es pot desinstal·lar.',
          'Per a qualsevol qüestió sobre l’expedient cal fer servir el xat d’assistència d’UK Visas and Immigration.',
        ],
        obstacles:
          'El tractament comença immediatament i l’avís diu que pot no ser possible retirar la sol·licitud. Les dades queden a l’expedient d’immigració durant quinze anys.',
        dataRetained: 'Dades biogràfiques i personals durant 15 anys i biometria facial durant 3 anys.',
        sources: ['uk-eta-privacy-notice', 'uk-eta-app-store'],
      },
      userRights: {
        dataExport: unknown('L’avís de l’ETA no descriu cap eina d’exportació; remet a l’avís general del Home Office.'),
        exportFormatQuality: 'unknown',
        rightsExercise: unknown('L’avís específic no hi dedica cap apartat i no hem pogut verificar el procediment concret.'),
      },
      controls: {
        adPersonalizationOptOut: na('El servei no fa publicitat.'),
        telemetryOptOut: unknown('L’etiqueta declara analítica d’ús, però l’avís no diu si es pot desactivar.'),
        granularControls: unknown(),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És un formulari de tràmit, no un servei de comunicacions.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: na('No hi ha cap compte permanent que calgui protegir amb un segon factor.'),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses associat al servei ETA.'),
        vulnerabilityDisclosure: unknown('No hem comprovat cap fitxer security.txt al domini del servei.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'L’avís de privadesa és curt i remet a l’avís general de fronteres, immigració i ciutadania per a la compartició i els drets, que no hem revisat en aquesta onada. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Amb qui comparteix el Home Office les dades de l’ETA: transportistes, aerolínies, altres governs?',
          'Quin procediment concret hi ha per exercir els drets d’accés i supressió sobre un expedient d’ETA?',
        ],
      },
    },

    /* ═══════════════════════════ Yepexpress ═══════════════════════════ */
    {
      slug: 'yepexpress',
      name: 'Yepexpress',
      company: 'uwe-international',
      categories: ['comerc-electronic'],
      tagline: 'Botiga que diu que no et rastreja mentre declara a Apple que fa servir les dades d’ús per rastrejar-te',
      summary:
        'Yepexpress és una botiga en línia de productes barats amb una política de privadesa que sembla reaprofitada d’un altre producte: parla de l’«Android ID» i d’altres programes instal·lats al dispositiu en una aplicació d’iOS, i afirma que no rastreja les persones usuàries mentre l’etiqueta de l’App Store declara dades d’ús per rastrejar en apps i webs d’altres empreses. Del responsable només se’n publica el nom i el número de societat.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Desconeguda; la política no publica el domicili del responsable',
      links: {
        website: 'https://www.yepexpress.com/',
        privacyPolicy: 'https://www.yepexpress.com/pages/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id6630366971',
      },
      accountRequired: f('partial', 'official', ['yepexpress-privacy-policy'], 'La política descriu un registre opcional amb nom, adreces, correu, telèfon, data de naixement i gènere.'),
      openSource: f('no', 'official', ['yepexpress-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Entre el registre i la informació tècnica del dispositiu, la botiga acumula prou dades per construir un perfil de consum, i la política reconeix que les comparteix amb xarxes publicitàries i cercadors.',
      dataCollection: [
        row('nom-i-cognoms', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['yepexpress-privacy-policy'], note: 'L’etiqueta de l’App Store no declara cap dada vinculada amb la identitat, cosa que no encaixa amb el registre que descriu la política.' }),
        row('adreca-postal', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['yepexpress-privacy-policy'], note: 'Adreça particular o de la feina, per al lliurament.' }),
        row('adreca-electronica', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['yepexpress-privacy-policy'] }),
        row('numero-de-telefon', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['yepexpress-privacy-policy'] }),
        row('data-de-naixement', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['yepexpress-privacy-policy'] }),
        row('genere', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['yepexpress-privacy-policy'] }),
        row('contrasenya', 'optional', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['yepexpress-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['yepexpress-privacy-policy'], note: 'La política també esmenta l’adreça MAC i identificadors anònims d’usuari.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['yepexpress-privacy-policy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['yepexpress-privacy-policy'], note: 'Tipus, nom i versió del sistema operatiu i configuració del dispositiu.' }),
        row('aplicacions-instal-lades', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['yepexpress-privacy-policy'], note: 'La política parla d’«Other Software» instal·lat al dispositiu i de la seva interacció amb el servei, una clàusula estranya en una botiga d’iOS.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'mesura-i-analisi-dus'], sources: ['yepexpress-app-store', 'yepexpress-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['yepexpress-app-store'], note: 'És l’única categoria que l’etiqueta declara com a dada de rastreig.' }),
        row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['yepexpress-privacy-policy'], note: 'La política esmenta les cerques i les pàgines visitades dins del servei.' }),
        row('xarxa-de-contactes', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['yepexpress-privacy-policy'], note: 'Només si s’activen les funcions de xarxes socials, que demanen accés a llistes d’amics o contactes.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['yepexpress-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['yepexpress-app-store'], 'L’etiqueta declara dades d’ús per rastrejar en apps i webs d’altres empreses, tot i que la política afirma que no es rastregen les persones usuàries.'),
        advertisingIdentifiers: unknown('La política parla de publicitat personalitzada i remet a l’exclusió de la Network Advertising Initiative, però no identifica l’identificador publicitari d’iOS.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['yepexpress-privacy-policy'], 'Cita Google Analytics, xarxes i plataformes publicitàries, proveïdors de continguts i cercadors.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['yepexpress-privacy-policy'], 'La política diu expressament que es fan servir dades per oferir publicitat dirigida i que empreses publicitàries de tercers poden recollir informació.'),
        profiling: f('partial', 'official', ['yepexpress-privacy-policy'], 'Personalitza continguts i recomanacions a partir de l’ús, però no descriu cap perfil comercial detallat.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['yepexpress-privacy-policy'], 'Cercadors, proveïdors de continguts, xarxes publicitàries i Google Analytics, a més de les autoritats quan la llei ho exigeix.'),
        intraGroupSharing: unknown('La política no descriu cap grup empresarial.'),
        dataBrokerSales: unknown('No hi ha cap declaració sobre venda de dades.'),
        internationalTransfers: f('yes', 'official', ['yepexpress-privacy-policy'], 'Reconeix emmagatzematge en diverses ubicacions del món i diu que per a les persones de l’Espai Econòmic Europeu demana consentiment explícit per a les transferències fora de la regió.', { mechanism: 'derogation' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No n’hi ha cap.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['yepexpress-privacy-policy'], 'Només enumera criteris, sense cap xifra.'),
        dataAfterDeletion: unknown('La política no explica què passa amb les dades quan algú deixa de fer servir el servei.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['yepexpress-privacy-policy'], 'Es reconeix el dret de supressió, però no es descriu cap procediment per tancar el compte.'),
        selfService: unknown('La política només dona una adreça de correu del delegat de protecció de dades.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Escriu a service@yepexpress.com identificant-te i demanant la supressió de les dades.',
          'Si has fet comandes, demana també que es notifiqui la supressió als tercers amb qui s’hagin compartit les dades; la política adverteix que no en garanteix el resultat.',
        ],
        obstacles:
          'L’única via documentada és el correu electrònic, i la política reconeix que no pot garantir que els tercers esborrin les dades compartides.',
        sources: ['yepexpress-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['yepexpress-privacy-policy'], 'Reconeix la portabilitat per a les persones de l’Espai Econòmic Europeu, però no ofereix cap eina d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['yepexpress-privacy-policy'], 'Només per correu electrònic al delegat de protecció de dades.', { url: 'mailto:service@yepexpress.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['yepexpress-privacy-policy'], 'Remet a l’eina d’exclusió de la Network Advertising Initiative, que no cobreix les apps mòbils.'),
        telemetryOptOut: unknown('No es descriu cap control sobre l’analítica.'),
        granularControls: f('no', 'official', ['yepexpress-privacy-policy'], 'No hi ha cap panell de preferències de privadesa descrit.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No n’hem documentat cap amb prou base.'),
      },
      security: {
        e2ee: na('És una botiga, no un servei de comunicacions.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('El domini no publica cap fitxer security.txt accessible.'),
        vulnerabilityDisclosure: unknown(),
      },
      alternatives: [
        { app: 'temu', comparability: 'equivalent', rationale: 'Mateix model de botiga xinesa de preus baixos, però amb una política molt més detallada i un responsable identificat a la Unió Europea.', tradeOffs: 'Temu té un historial de crítiques de reguladors i una recollida de dades més àmplia.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política de privadesa sembla una plantilla reaprofitada: descriu programari instal·lat al dispositiu, l’Android ID i regles per evitar recollir dades personals «sense voler», llenguatge propi d’un SDK publicitari i no d’una botiga. Ho fem constar perquè afecta la fiabilitat de tot el document. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'On està domiciliada UWE INTERNATIONAL LIMITED i quina autoritat de control li correspon?',
          'Per què l’etiqueta de l’App Store no declara cap dada vinculada amb la identitat si la política descriu un registre complet?',
        ],
      },
    },

    /* ═══════════════════════════ Mi Vodafone ═══════════════════════════ */
    {
      slug: 'mi-vodafone',
      name: 'Mi Vodafone',
      company: 'vodafone-espana',
      categories: ['telecomunicacions'],
      tagline: 'L’app de l’operadora és també el panell on es donen i es retiren els consentiments publicitaris',
      summary:
        'Mi Vodafone gestiona la factura i la tarifa, però el tractament rellevant és el de l’operadora: dades de trànsit i localització, comprovacions de solvència a ASNEF i Badexcug i categories de navegació que, amb consentiment, alimenten la publicitat. La política fixa terminis concrets, sis anys després de deixar de ser client i dotze mesos per al trànsit, i concentra tots els permisos a l’eina «Permisos y Preferencias», accessible des de la mateixa app.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.vodafone.es/c/mvfes/conocenos-mi-vodafone/',
        privacyPolicy: 'https://www.vodafone.es/c/conocenos/es/vodafone-espana/quienes-somos/legal-y-regulatorio/politica-de-privacidad-y-cookies/',
        appStore: 'https://apps.apple.com/es/app/id455655421',
      },
      accountRequired: f('yes', 'official', ['vodafone-es-privacy-policy'], 'L’aplicació és l’àrea privada de clients; sense contracte i sense credencials no serveix de res.'),
      openSource: f('no', 'official', ['mi-vodafone-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Qui truques, quan i des d’on, què navegues per categories i quina solvència tens: l’operadora veu una part de la vida quotidiana que cap app d’internet no arriba a veure, i la conserva sis anys després de marxar.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['vodafone-es-privacy-policy'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['vodafone-es-privacy-policy'], note: 'Es fa servir també per a les consultes a ASNEF (Equifax) i Badexcug (Experian).' }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['vodafone-es-privacy-policy'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['vodafone-es-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['vodafone-es-privacy-policy'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['vodafone-es-privacy-policy'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['vodafone-es-privacy-policy'], note: 'Targeta, compte i altra informació bancària per a la facturació.' }),
        row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['vodafone-es-privacy-policy'], note: 'Números marcats, durada i moment de cada trucada o missatge. Es conserven dotze mesos per la Llei 25/2007.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['vodafone-es-privacy-policy'], note: 'Ubicació per cel·la de xarxa associada a cada comunicació.' }),
        row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['mi-vodafone-app-store', 'vodafone-es-privacy-policy'], note: 'L’etiqueta declara la ubicació exacta com a dada no vinculada amb la identitat i l’associa a l’analítica.' }),
        row('historial-de-navegacio', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['vodafone-es-privacy-policy'], note: 'Només categories de llocs visitats i només amb consentiment; la política diu que no es guarda l’historial complet.' }),
        row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['vodafone-es-privacy-policy'], note: 'Perfils comercials amb consentiment exprés, també per a ofertes de tercers de sectors com el financer o l’energètic.' }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['vodafone-es-privacy-policy'], note: 'Per al servei de televisió: què es mira, quanta estona i si es pausa o es grava.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['mi-vodafone-app-store'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['vodafone-es-app-supplement'], note: 'Tipus de terminal, identificadors únics, sistema operatiu i tipus de connexió.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['mi-vodafone-app-store', 'vodafone-es-app-supplement'] }),
        row('galetes-i-identificadors-web', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['vodafone-es-privacy-policy'], note: 'Amb consentiment, es comparteix informació pseudonimitzada amb Meta i Google per a publicitat en línia.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['mi-vodafone-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['mi-vodafone-app-store'], 'L’etiqueta declara dades d’ús i diagnòstics per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: unknown('Ni l’etiqueta ni la política concreten l’ús de l’identificador publicitari del sistema.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['vodafone-es-privacy-policy'], 'La política reconeix acords amb Meta i Google per a publicitat en línia amb dades pseudonimitzades.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['vodafone-es-privacy-policy'], 'Publicitat basada en interessos amb consentiment exprés, al web propi i a webs i xarxes de tercers.'),
        profiling: f('yes', 'official', ['vodafone-es-privacy-policy'], 'Personalitza els missatges amb dades d’ús, localització, navegació, trànsit i facturació quan hi ha autorització expressa.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['vodafone-es-privacy-policy'], 'Agències de solvència i de recobrament, distribuïdors, anunciants com Meta i Google amb consentiment, serveis d’emergència i autoritats.'),
        intraGroupSharing: f('yes', 'official', ['vodafone-es-privacy-policy'], 'Les entitats del grup Vodafone a Espanya són corresponsables i comparteixen dades per a gestió interna i, amb consentiment, per a ofertes creuades.'),
        dataBrokerSales: f('no', 'official', ['vodafone-es-privacy-policy'], 'Els informes de Vodafone Analytics que es venen a tercers són, segons la política, anònims i agregats amb un mínim de quinze registres.'),
        internationalTransfers: f('yes', 'official', ['vodafone-es-privacy-policy'], 'Centres d’atenció a Colòmbia, el Perú i el Marroc i suport intern a Egipte i l’Índia, emparats en clàusules contractuals tipus.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem verificat cap informe de transparència propi de la filial espanyola.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['vodafone-es-privacy-policy'], 'Sis anys com a regla general i dotze mesos per al trànsit i la localització.'),
        dataAfterDeletion: f('yes', 'official', ['vodafone-es-privacy-policy'], 'Un cop deixes de ser client, la informació es conserva sis anys i després es bloqueja, s’anonimitza o s’esborra.'),
        periods: [
          { period: '6 anys després de deixar de ser client, com a regla general', sources: ['vodafone-es-privacy-policy'] },
          { dataType: 'metadades-de-comunicacio', period: '12 mesos des que es generen, en compliment de la Llei 25/2007', sources: ['vodafone-es-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('partial', 'official', ['vodafone-es-privacy-policy'], 'El compte de l’app va lligat al contracte; la política regula la baixa del servei i la conservació posterior, no una eliminació immediata del compte.'),
        selfService: unknown('No hem trobat cap opció documentada per eliminar el compte de Mi Vodafone des de l’aplicació.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Dona de baixa el servei o porta el número a una altra operadora pels canals habituals d’atenció al client.',
          'Entra a «Permisos y Preferencias», dins de Mi Vodafone, i retira els consentiments de publicitat, de perfilat i d’anàlisi Big Data.',
          'Si vols la supressió de les dades que ja no siguin necessàries, escriu al delegat de protecció de dades a dpo-spain@vodafone.com.',
        ],
        obstacles: 'Encara que es tanqui el contracte, la política preveu conservar la informació sis anys i permet seguir enviant comunicacions comercials si no s’hi ha renunciat.',
        dataRetained: 'Dades de client durant sis anys i dades de trànsit i localització durant dotze mesos.',
        sources: ['vodafone-es-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['vodafone-es-privacy-policy'], 'Es reconeix la portabilitat, però no es descriu cap eina d’autoservei per descarregar les dades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['vodafone-es-privacy-policy'], 'Delegat de protecció de dades propi i canals d’atenció al client.', { url: 'mailto:dpo-spain@vodafone.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['vodafone-es-privacy-policy'], 'L’eina «Permisos y Preferencias», accessible des de l’app i del web, permet donar i retirar cada consentiment.'),
        telemetryOptOut: f('partial', 'official', ['vodafone-es-privacy-policy'], 'Es pot demanar l’exclusió de les iniciatives de Big Data des de «Permisos y Preferencias» o en el moment de la contractació; no consta un control equivalent per a l’analítica de l’aplicació.'),
        granularControls: f('yes', 'official', ['vodafone-es-privacy-policy'], 'Els consentiments es gestionen un per un.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No n’hem documentat cap amb prou base.'),
      },
      security: {
        e2ee: na('L’operadora necessita veure les metadades per encaminar les comunicacions; l’app és una àrea de client.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown('No hem trobat documentació d’un segon factor per al compte de Mi Vodafone.'),
        independentAudits: unknown(),
        bugBounty: unknown('El domini vodafone.es no publica cap fitxer security.txt.'),
        vulnerabilityDisclosure: unknown('No hi ha cap fitxer security.txt a vodafone.es.'),
      },
      alternatives: [
        { app: 'mi-movistar', comparability: 'equivalent', rationale: 'Àrea de client de l’altra gran operadora espanyola, amb el mateix tipus de tractament regulat pel sector.', tradeOffs: 'Canviar d’operadora no redueix les dades de trànsit i localització que la llei obliga a conservar.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política és la del grup a Espanya, no una política específica de l’aplicació; el suplement d’apps hi afegeix poca cosa. Crida l’atenció que l’etiqueta de l’App Store declari la ubicació exacta com a dada d’analítica no vinculada. No hem pogut fer la cerca d’incidents ni verificar les sancions de l’AEPD contra l’operadora.',
        openQuestions: [
          'Quines sancions fermes de l’AEPD afecten Vodafone España i per quins fets?',
          'Per a què fa servir l’app la ubicació exacta si la declara com a dada d’analítica no vinculada?',
          'Es pot eliminar el compte de Mi Vodafone sense donar de baixa el contracte?',
        ],
      },
    },

    /* ═══════════════════════════ geteduroam ═══════════════════════════ */
    {
      slug: 'geteduroam',
      name: 'geteduroam',
      company: 'surf-bv',
      categories: ['utilitats', 'autenticacio-i-seguretat'],
      tagline: 'Codi obert, cap dada recollida per l’app i una xarxa dissenyada perquè ningú no sàpiga qui ets',
      summary:
        'geteduroam configura el perfil de la xarxa wifi acadèmica eduroam al telèfon. L’aplicació declara a Apple que no recull cap dada i el codi és públic amb llicència BSD. El tractament real el fa la infraestructura d’eduroam, coordinada per GÉANT: quan et connectes des d’un altre país, els servidors intermediaris europeus registren el domini de la teva institució i l’adreça MAC, i el nom d’usuari només si la institució no l’ha anonimitzat. Les dades d’itinerància es guarden sis mesos.',
      platforms: ['ios', 'android', 'macos', 'windows', 'linux'],
      businessModel: 'unknown',
      jurisdiction: 'Països Baixos',
      userBase: 'Estudiantat i personal d’universitats i centres de recerca',
      links: {
        website: 'https://www.geteduroam.app/',
        privacyPolicy: 'https://www.eduroam.org/privacy/',
        appStore: 'https://apps.apple.com/es/app/id1504076137',
      },
      accountRequired: f('partial', 'official', ['eduroam-privacy-notice'], 'No hi ha cap compte de geteduroam: cal el compte de la institució d’origen, que és qui autentica la persona.'),
      openSource: f('yes', 'official', ['geteduroam-source'], 'El codi de l’aplicació per a iOS i macOS és públic.', { licence: 'BSD-3-Clause' }),
      dataSummary:
        'El disseny d’eduroam separa qui ets de on ets: la institució d’origen sap qui s’autentica i la institució visitada només sap que algú d’aquell domini té permís per connectar-se.',
      dataCollection: [
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['eduroam-privacy-notice'], note: 'El «realm» identifica la institució i la federació; el nom d’usuari només arriba als servidors europeus si la institució no l’ha anonimitzat.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'unknown', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'prestacio-del-servei'], sources: ['eduroam-privacy-notice'], note: 'Adreça MAC registrada pels servidors intermediaris europeus quan et connectes des d’un altre país.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'investigacio-i-estadistica'], sources: ['eduroam-privacy-notice'], note: 'País i institució visitats, amb el resultat de l’autenticació, per a supervisió i estadístiques.' }),
        row('adreca-ip', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['eduroam-privacy-notice'], note: 'Als registres dels llocs web de suport, no a l’aplicació.' }),
        row('testimoni-d-autenticacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['geteduroam-app-store', 'eduroam-privacy-notice'], note: 'El perfil i les credencials es queden al dispositiu; el desenvolupador declara que l’app no recull cap dada.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['geteduroam-app-store'], 'El desenvolupador declara que l’aplicació no recull cap dada.'),
        advertisingIdentifiers: f('no', 'official', ['geteduroam-app-store']),
        thirdPartyTrackersPresent: f('no', 'official', ['geteduroam-app-store', 'geteduroam-source'], 'L’etiqueta no declara cap recollida i el codi és públic i verificable.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['eduroam-privacy-notice', 'geteduroam-app-store'], 'eduroam és un servei del sector públic acadèmic, sense publicitat.'),
        profiling: f('no', 'official', ['eduroam-privacy-notice'], 'L’avís diu que el servei està dissenyat per no haver de saber qui és la persona usuària.'),
        aiTraining: f('no', 'official', ['eduroam-privacy-notice'], 'L’avís només preveu supervisió, estadística i resolució d’incidents.'),
      },
      sharing: {
        thirdPartySharing: f('no', 'official', ['eduroam-privacy-notice'], 'Les dades només les tracten l’equip operatiu d’eduroam i els operadors nacionals de itinerància.'),
        intraGroupSharing: f('partial', 'official', ['eduroam-privacy-notice'], 'La informació de contacte de la base de dades es comparteix entre l’equip operatiu i els operadors nacionals per resoldre incidents.'),
        dataBrokerSales: f('no', 'official', ['eduroam-privacy-notice']),
        internationalTransfers: f('partial', 'official', ['eduroam-privacy-notice'], 'La itinerància internacional implica que les dades d’autenticació passin pels servidors intermediaris europeus, gestionats per GÉANT als Països Baixos.', { mechanism: 'none' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No n’hi ha cap de peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['eduroam-privacy-notice'], 'Sis mesos per a les dades de itinerància i vint-i-sis mesos per a l’estadística web anonimitzada.'),
        dataAfterDeletion: na('No hi ha cap compte del servei que es pugui tancar.'),
        periods: [
          { period: '6 mesos per a totes les dades relacionades amb la itinerància, llevat que la llei d’un país europeu n’imposi un altre termini', sources: ['eduroam-privacy-notice'] },
          { period: '26 mesos per a les dades analítiques anonimitzades dels llocs web', sources: ['eduroam-privacy-notice'] },
        ],
      },
      accountDeletion: {
        possible: na('geteduroam no crea cap compte propi: les credencials són les de la institució d’origen.'),
        selfService: na('El perfil de xarxa es pot eliminar des de la configuració del dispositiu, sense cap tràmit amb el servei.'),
        difficulty: 'easy',
        steps: [
          'Esborra el perfil de configuració d’eduroam a Ajustaments > General > VPN i gestió de dispositius.',
          'Per rectificar o eliminar les dades del compte acadèmic, adreça’t a la teva institució, que n’és la responsable.',
        ],
        dataRetained: 'Els registres de itinerància de GÉANT es conserven sis mesos encara que desinstal·lis l’aplicació.',
        sources: ['eduroam-privacy-notice'],
      },
      userRights: {
        dataExport: unknown('L’avís reconeix el dret d’accés, però no descriu cap eina d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['eduroam-privacy-notice'], 'GÉANT té delegat de protecció de dades i l’autoritat de control és l’Autoriteit Persoonsgegevens neerlandesa.', { url: 'mailto:gdpr@geant.org' }),
      },
      controls: {
        adPersonalizationOptOut: na('El servei no fa publicitat.'),
        telemetryOptOut: f('no', 'official', ['eduroam-privacy-notice'], 'Els registres de itinerància són necessaris per al servei i no es poden desactivar des del client; l’anonimització depèn de la institució d’origen.'),
        granularControls: f('no', 'official', ['geteduroam-app-store'], 'L’aplicació només configura el perfil de xarxa; no té panell de privadesa perquè no recull dades.'),
        defaultPosture: 'protective',
        darkPatterns: f('no', 'official', ['geteduroam-app-store', 'geteduroam-source'], 'No hi ha registre, ni publicitat, ni pantalles de consentiment: l’app fa una sola cosa.'),
      },
      security: {
        e2ee: na('És un configurador de xarxa wifi, no un servei de missatgeria.'),
        transportEncryption: unknown('L’avís no descriu els protocols concrets de l’autenticació.'),
        atRestEncryption: unknown(),
        mfa: na('L’autenticació la fa la institució d’origen amb el seu propi mètode.'),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses; el domini eduroam.org no serveix cap fitxer security.txt.'),
        vulnerabilityDisclosure: unknown(),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'Cal distingir dues capes: l’aplicació, de SURF, que declara no recollir cap dada, i el servei eduroam, la infraestructura europea del qual la gestiona GÉANT com a responsable. L’avís de privadesa d’eduroam.org porta data del 2018 i no s’ha pogut llegir directament pel bloqueig del servidor; el contingut s’ha obtingut a través d’un servei de lectura de text. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Quines institucions espanyoles anonimitzen el nom d’usuari («anonymous outer identity») i quines no?',
          'Hi ha un avís de privadesa específic de l’aplicació geteduroam, més enllà del d’eduroam.org?',
        ],
      },
    },

    /* ═══════════════════════════ Proton VPN ═══════════════════════════ */
    {
      slug: 'proton-vpn',
      name: 'Proton VPN',
      company: 'proton',
      categories: ['autenticacio-i-seguretat', 'utilitats'],
      tagline: 'La política de no registres és l’única d’aquest lot verificada cinc anys seguits per un auditor extern',
      summary:
        'Proton VPN no declara cap dada de rastreig ni cap dada vinculada amb la identitat: a l’App Store només hi consten l’adreça electrònica i les dades d’errors, sense vincular. La diferència amb la resta de VPN no és la promesa, sinó la comprovació: Securitum ha examinat cinc anys consecutius la infraestructura de servidors i Proton en publica els informes sencers, sense acords de confidencialitat. Les aplicacions són de codi obert i els servidors, a Suïssa, Alemanya i Noruega.',
      platforms: ['ios', 'android', 'windows', 'macos', 'linux'],
      businessModel: 'freemium',
      jurisdiction: 'Suïssa',
      links: {
        website: 'https://protonvpn.com/',
        privacyPolicy: 'https://protonvpn.com/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id1437005085',
      },
      accountRequired: f('yes', 'official', ['proton-vpn-app-store', 'proton-vpn-privacy-policy'], 'Cal un compte de Proton, identificat per una adreça electrònica, també al pla gratuït.'),
      openSource: f('yes', 'official', ['proton-vpn-no-logs', 'proton-vpn-no-logs-audit'], 'Totes les aplicacions són de codi obert i se’n publiquen les auditories de seguretat.'),
      dataSummary:
        'El que revela una VPN és tot el que navegues; aquí la qüestió és què se’n guarda, i tant la política com les auditories diuen que no se’n guarda res que permeti reconstruir l’activitat d’una persona.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['proton-vpn-app-store'], note: 'L’etiqueta la declara com a dada no vinculada amb la identitat, per al funcionament de l’app.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['proton-vpn-app-store'], note: 'Només dades d’errors, sense vincular.' }),
        row('historial-de-navegacio', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['proton-vpn-privacy-policy', 'proton-vpn-no-logs'], note: 'La política diu expressament que no es registren els llocs visitats ni el contingut de les comunicacions.' }),
        row('adreca-ip', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['proton-vpn-no-logs', 'proton-vpn-no-logs-audit'], note: 'La pàgina d’ajuda i les auditories confirmen que no es registren les adreces IP ni la durada de les sessions.' }),
        row('metadades-de-comunicacio', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['proton-vpn-no-logs-audit'], note: 'L’informe del 2026 conclou que no s’hi van trobar registres de consultes DNS, destinacions ni metadades de connexió identificables.' }),
        row('dades-de-pagament', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['proton-vpn-privacy-policy'], note: 'Només per als plans de pagament; la política no en detalla el tractament en aquesta pàgina.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['proton-vpn-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['proton-vpn-app-store', 'proton-vpn-no-logs'], 'El servei no mostra anuncis ni fa servir identificadors publicitaris.'),
        thirdPartyTrackersPresent: f('no', 'official', ['proton-vpn-app-store', 'proton-vpn-no-logs-audit'], 'Cap categoria de rastreig a l’etiqueta i codi obert auditat.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['proton-vpn-no-logs', 'proton-vpn-privacy-policy'], 'El model és de subscripció; no hi ha publicitat.'),
        profiling: f('no', 'official', ['proton-vpn-privacy-policy', 'proton-vpn-no-logs-audit'], 'Sense registres d’activitat no hi ha perfil possible.'),
        aiTraining: f('no', 'official', ['proton-vpn-privacy-policy'], 'La política no preveu cap ús del trànsit, que no es registra.'),
      },
      sharing: {
        thirdPartySharing: f('no', 'official', ['proton-vpn-privacy-policy'], 'La informació del compte es manté en servidors operats per Proton o les seves filials.'),
        intraGroupSharing: f('partial', 'official', ['proton-vpn-privacy-policy'], 'El compte és comú amb la resta de serveis de Proton i les dades es gestionen dins del grup.'),
        dataBrokerSales: f('no', 'official', ['proton-vpn-no-logs'], 'El servei declara que no ven dades.'),
        internationalTransfers: f('no', 'official', ['proton-vpn-privacy-policy'], 'Els servidors d’infraestructura són a Suïssa, Alemanya i Noruega.', { mechanism: 'adequacy' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: f('yes', 'official', ['proton-transparency', 'proton-vpn-no-logs-audit'], 'Proton publica un informe de transparència; la política de no registres s’ha posat a prova en més de quatre-cents procediments judicials sense poder-hi aportar registres.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['proton-vpn-no-logs', 'proton-vpn-privacy-policy'], 'No hi ha registres d’activitat que calgui conservar; de les dades del compte no se’n publica cap termini concret.'),
        dataAfterDeletion: unknown('La política de Proton VPN no detalla què es conserva després de tancar el compte.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['proton-delete-account']),
        selfService: f('yes', 'official', ['proton-delete-account'], 'El compte de Proton s’elimina des de la configuració del compte.'),
        directUrl: 'https://proton.me/support/delete-account',
        difficulty: 'easy',
        steps: [
          'Cancel·la la subscripció si en tens una de pagament.',
          'Entra a la configuració del compte de Proton i tria l’opció per eliminar-lo.',
        ],
        sources: ['proton-delete-account'],
      },
      userRights: {
        dataExport: unknown('La política de Proton VPN no descriu cap exportació específica del servei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: unknown('La pàgina del servei no detalla el procediment d’exercici de drets.'),
      },
      controls: {
        adPersonalizationOptOut: na('No hi ha publicitat que calgui desactivar.'),
        telemetryOptOut: unknown('L’etiqueta declara dades d’errors; la política no diu si es poden desactivar des de l’app.'),
        granularControls: unknown(),
        defaultPosture: 'protective',
        darkPatterns: f('no', 'official', ['proton-vpn-app-store', 'proton-vpn-no-logs'], 'No hi ha publicitat, ni venda de dades, ni pantalles de consentiment que empenyin en cap direcció.'),
      },
      security: {
        e2ee: na('Una VPN xifra el túnel fins al servidor de sortida; no és xifratge d’extrem a extrem entre persones.'),
        transportEncryption: f('yes', 'official', ['proton-vpn-privacy-policy', 'proton-vpn-no-logs'], 'Tot el trànsit passa pel túnel xifrat de la VPN.'),
        atRestEncryption: f('yes', 'official', ['proton-vpn-no-logs', 'proton-vpn-privacy-policy'], 'Els servidors funcionen amb xifratge de disc complet i la informació del compte es desa xifrada.'),
        mfa: unknown('Les pàgines consultades no detallen els mètodes de segon factor del compte de Proton.'),
        independentAudits: f('yes', 'independent', ['proton-vpn-no-logs-audit'], 'Cinc auditories anuals consecutives de Securitum sobre la infraestructura de servidors, publicades senceres, a més de les auditories de seguretat de les aplicacions.'),
        bugBounty: f('yes', 'official', ['proton-vpn-no-logs-audit', 'proton-security-txt'], 'Proton té un programa públic de recompenses per a les seves aplicacions.'),
        vulnerabilityDisclosure: f('yes', 'official', ['proton-security-txt'], undefined, { url: 'https://protonvpn.com/.well-known/security.txt' }),
      },
      alternatives: [
        { app: 'proton-mail', comparability: 'complementary', rationale: 'Mateix compte i mateixa jurisdicció suïssa, per a un problema diferent: el correu.', tradeOffs: 'No substitueix la VPN; concentra encara més serveis en un sol proveïdor.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'L’empresa i algunes fonts (política general, eliminació del compte, informe de transparència) ja existien al conjunt de dades per a Proton Mail; aquí s’hi afegeixen les fonts específiques de la VPN. No hem pogut fer la cerca d’incidents en aquesta onada.',
        openQuestions: [
          'Quins mètodes de segon factor admet el compte de Proton i quins són els predeterminats?',
          'Quines dades del compte es conserven després de l’eliminació i durant quant de temps?',
        ],
      },
    },

    /* ═══════════════════════════ Epic Games ═══════════════════════════ */
    {
      slug: 'epic-games',
      name: 'Epic Games',
      company: 'epic-games-inc',
      categories: ['utilitats'],
      tagline: 'Botiga alternativa que diu que no ven dades ni fa publicitat segmentada, amb una condemna de la FTC a l’esquena',
      summary:
        'La botiga d’Epic va arribar a l’iPhone a la Unió Europea gràcies a la Llei de mercats digitals. La política és inusualment restrictiva per a una empresa d’aquesta mida: afirma que no ven dades personals ni les tracta per a publicitat segmentada, i l’etiqueta de l’App Store no declara cap dada de rastreig. El contrapunt és el precedent: el 2022 la FTC li va imposar 520 milions de dòlars per vulnerar la llei de protecció de la infància i per patrons enganyosos de cobrament a Fortnite.',
      platforms: ['ios', 'android', 'windows', 'macos'],
      businessModel: 'commerce',
      jurisdiction: 'Estats Units; per a les persones no residents als Estats Units, entitats suïsses del grup',
      links: {
        website: 'https://store.epicgames.com/',
        privacyPolicy: 'https://www.epicgames.com/site/en-US/privacypolicy',
        appStore: 'https://apps.apple.com/es/app/id6480077263',
      },
      accountRequired: f('yes', 'official', ['epic-privacy-policy', 'epic-games-app-store'], 'Cal un compte d’Epic per comprar i per jugar als seus títols.'),
      openSource: f('no', 'official', ['epic-games-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El catàleg que compres i amb qui jugues dibuixen una afició i una xarxa social; Epic ho fa servir per al servei i per recomanar, però diu que no ho converteix en un perfil publicitari.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['epic-games-app-store'], note: 'L’etiqueta la declara també per a publicitat o màrqueting del desenvolupador, que en aquest cas vol dir comunicacions pròpies.' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['epic-games-app-store'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['epic-games-app-store', 'epic-privacy-policy'], note: 'La política diu que els números facilitats per seguretat no es comparteixen amb tercers ni amb filials per a màrqueting.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['epic-games-app-store', 'epic-privacy-policy'], note: 'El nom públic i les estadístiques de joc poden ser visibles per a altres persones.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['epic-games-app-store'] }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['epic-games-app-store'], note: 'El xat de veu és una de les funcions que la FTC va obligar a desactivar per defecte per a menors.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['epic-games-app-store'], note: 'Per al funcionament de l’app, per exemple per mostrar la moneda local.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'recomanacions-algoritmiques'], sources: ['epic-games-app-store', 'epic-privacy-policy'] }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['epic-games-app-store'], note: 'Contingut creat o compartit que pot ser públic.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['epic-privacy-policy'], note: 'Es comparteix amb els editors dels jocs comprats per completar la transacció.' }),
        row('xarxa-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['epic-privacy-policy'], note: 'Llistes d’amistats i joc creuat si vincules el compte amb el d’un desenvolupador o una plataforma.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['epic-games-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['epic-games-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['epic-games-app-store', 'epic-privacy-policy'], 'No hi ha cap categoria d’identificador publicitari i la política nega el tractament per a publicitat segmentada.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['epic-privacy-policy'], 'Reconeix tecnologies automàtiques de tercers quan alguna funció la presta un tercer, i cita socis de màrqueting i publicitat entre els proveïdors.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['epic-privacy-policy'], 'La política afirma: «Epic does not sell personal data it collects or process it for targeted advertising».'),
        profiling: f('partial', 'official', ['epic-privacy-policy'], 'Fa recomanacions de continguts, però diu que no elabora perfils automatitzats amb efectes jurídics o similars, i encara menys de menors de 18 anys.'),
        aiTraining: f('partial', 'official', ['epic-privacy-policy'], 'Cita proveïdors de grans models de llenguatge entre els destinataris, per habilitar funcions amb intel·ligència artificial; no diu que les dades serveixin per entrenar-los.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['epic-privacy-policy'], 'Editors dels jocs comprats, desenvolupadors amb qui vincules el compte, consoles i plataformes, xarxes socials, altres persones usuàries i autoritats.'),
        intraGroupSharing: f('yes', 'official', ['epic-privacy-policy'], 'Filials i societats del grup, amb entitats diferents segons el servei i el país.'),
        dataBrokerSales: f('no', 'official', ['epic-privacy-policy'], 'La política ho nega expressament.'),
        internationalTransfers: f('yes', 'official', ['epic-privacy-policy'], 'Tractament als Estats Units i a altres països on opera, amb clàusules contractuals tipus i decisions d’adequació.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['epic-privacy-policy'], 'Només criteris generals, sense cap termini numèric.'),
        dataAfterDeletion: unknown('La política remet als apartats de drets sense concretar què es conserva.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['epic-privacy-policy'], 'La política diu que es pot demanar la supressió de la informació.'),
        selfService: unknown('La pàgina d’ajuda sobre l’eliminació del compte no s’ha pogut llegir; no hem verificat si el procés és d’autoservei.'),
        difficulty: 'unknown',
        steps: [
          'Entra a la configuració del compte d’Epic i busca l’opció d’eliminació del compte.',
          'Si no la trobes, escriu a privacy@support.epicgames.com o a dpo@support.epicgames.com demanant la supressió.',
        ],
        obstacles: 'En eliminar el compte es perd l’accés als jocs comprats, que van lligats al compte i no a la persona.',
        sources: ['epic-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['epic-privacy-policy'], 'Reconeix la portabilitat i el dret a rebre una còpia de les dades per a les persones de l’Espai Econòmic Europeu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['epic-privacy-policy'], 'Adreces específiques de privadesa i de delegat de protecció de dades.', { url: 'mailto:dpo@support.epicgames.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['epic-privacy-policy'], 'Es poden canviar les preferències de màrqueting per correu i gestionar les galetes des del navegador o el dispositiu.'),
        telemetryOptOut: unknown('La política no descriu cap control específic sobre l’analítica de l’aplicació.'),
        granularControls: f('yes', 'official', ['epic-privacy-policy'], 'Comptes vinculats, preferències de màrqueting, revisió humana de decisions automatitzades i controls parentals.'),
        defaultPosture: 'mixed',
        darkPatterns: f('yes', 'regulator', ['epic-ftc-2022'], 'La FTC va documentar patrons enganyosos de cobrament a Fortnite; l’acord del 2022 obliga Epic a no cobrar amb aquestes tècniques i a posar configuracions protectores per defecte per a menors.'),
        darkPatternList: [
          { type: 'other', severity: 'high', description: 'Configuració de botons contradictòria que provocava compres no volgudes, fins i tot en despertar el joc o en previsualitzar un article.', sources: ['epic-ftc-2022'] },
          { type: 'hidden-exit', severity: 'high', description: 'Segons la FTC, Epic va enfosquir deliberadament les funcions de cancel·lació i de devolució perquè fossin més difícils de trobar.', sources: ['epic-ftc-2022'] },
          { type: 'preselected', severity: 'high', description: 'El xat de veu i de text estava activat per defecte per a la infància i l’adolescència; l’acord obliga a desactivar-lo si no hi ha consentiment.', sources: ['epic-ftc-2022'] },
        ],
      },
      security: {
        e2ee: na('És una botiga i un llançador de jocs, no un servei de comunicacions privades.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown('La política parla de mantenir la confidencialitat de les credencials, però no documenta els mètodes de segon factor.'),
        independentAudits: f('partial', 'regulator', ['epic-ftc-2022'], 'L’ordre de la FTC obliga Epic a mantenir un programa de privadesa amb auditories independents periòdiques; no se’n publiquen els informes.'),
        bugBounty: f('yes', 'official', ['epic-security-txt'], 'Programa de recompenses gestionat a HackerOne.'),
        vulnerabilityDisclosure: f('yes', 'official', ['epic-security-txt'], undefined, { url: 'https://www.epicgames.com/.well-known/security.txt' }),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La condemna de la FTC del 2022 és nord-americana i afecta Fortnite, no la botiga d’iOS, però marca la manera com l’empresa tracta els menors i els cobraments, i per això la registrem. No hem trobat cap resolució europea equivalent en les fonts consultades.',
        openQuestions: [
          'Es pot eliminar el compte d’Epic sense escriure a l’assistència?',
          'Quins proveïdors de models de llenguatge fa servir Epic i amb quines dades?',
        ],
      },
    },

    /* ═══════════════════════════ Mando a distancia universal TV ═══════════════════════════ */
    {
      slug: 'mando-universal-tv',
      name: 'Mando a distancia universal TV',
      company: 'kraftwerk9',
      categories: ['utilitats', 'llar-connectada'],
      tagline: 'Un comandament a distància que declara la ubicació entre les dades amb què et rastreja',
      summary:
        'Per fer de comandament d’un televisor n’hi hauria d’haver prou amb la xarxa local. Aquesta aplicació declara a Apple quatre categories de dades, ubicació inclosa, utilitzades per rastrejar en apps i webs d’altres empreses, i les vincula amb la identitat per a publicitat de tercers. La política confirma la xarxa publicitària Appodeal i l’analítica de Google i Firebase, no fixa cap termini de conservació i diu que no admet el senyal Do Not Track.',
      platforms: ['ios'],
      businessModel: 'freemium',
      jurisdiction: 'Xipre',
      links: {
        website: 'https://kraftwerk9.com/',
        privacyPolicy: 'https://kraftwerk9.com/privacy',
        appStore: 'https://apps.apple.com/es/app/id1439422220',
      },
      accountRequired: unknown('La política parla d’un compte amb correu i nom, però no hem pogut verificar si l’aplicació n’exigeix cap per funcionar.'),
      openSource: f('no', 'official', ['mando-universal-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Una ubicació aproximada lligada a l’identificador del dispositiu i a les dades de publicitat és exactament el que necessita una xarxa publicitària per seguir-te de app en app, i aquí no aporta res al servei.',
      dataCollection: [
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['mando-universal-app-store', 'kraftwerk9-privacy-policy'], note: 'Declarada per a publicitat de tercers i per a analítica, i inclosa entre les dades de rastreig.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['mando-universal-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['kraftwerk9-privacy-policy'], note: 'La política esmenta expressament els identificadors publicitaris i l’exclusió a través de la configuració del dispositiu.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['mando-universal-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte', 'mesura-publicitaria'], sources: ['mando-universal-app-store'], note: 'Les dades de rendiment es declaren també per a publicitat de tercers.' }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['kraftwerk9-privacy-policy'] }),
        row('adreca-electronica', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari', 'publicitat-personalitzada'], sources: ['kraftwerk9-privacy-policy'], note: 'La política preveu enviar butlletins i material promocional amb opció de donar-se de baixa.' }),
        row('nom-i-cognoms', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['kraftwerk9-privacy-policy'] }),
        row('historial-de-compres', 'optional', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['kraftwerk9-privacy-policy'], note: 'Les subscripcions es cobren a través de l’App Store, que no comparteix les dades de la targeta.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['mando-universal-app-store'], 'Ubicació, identificadors, dades d’ús i diagnòstics declarats per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['kraftwerk9-privacy-policy'], 'La política descriu l’ús d’identificadors publicitaris i remet a la configuració del dispositiu per limitar-los.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['kraftwerk9-privacy-policy'], 'Appodeal com a xarxa publicitària i Google Analytics i Firebase com a analítica.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['mando-universal-app-store', 'kraftwerk9-privacy-policy'], 'L’etiqueta té una categoria sencera de «publicidad de terceros».'),
        profiling: f('partial', 'official', ['kraftwerk9-privacy-policy'], 'Galetes publicitàries per mostrar anuncis rellevants segons els interessos; no es descriu cap perfil més elaborat.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['kraftwerk9-privacy-policy'], 'Proveïdors de serveis, xarxes publicitàries i autoritats quan la llei ho exigeix.'),
        intraGroupSharing: unknown('No es descriu cap grup empresarial.'),
        dataBrokerSales: unknown('La política no diu res sobre la venda de dades.'),
        internationalTransfers: f('yes', 'official', ['kraftwerk9-privacy-policy'], 'Reconeix transferències a països amb lleis de protecció diferents sense concretar cap garantia del RGPD.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No n’hi ha cap.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['kraftwerk9-privacy-policy'], 'Només diu que conserva les dades «el temps necessari».'),
        dataAfterDeletion: unknown('La política no ho explica.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['kraftwerk9-privacy-policy'], 'Reconeix el dret de supressió i diu que, «sempre que sigui possible», es pot fer des de la configuració del compte.'),
        selfService: unknown('No hem pogut verificar que l’aplicació tingui cap opció d’eliminació.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Cancel·la la subscripció des d’Ajustaments > Apple Account > Subscripcions, si en tens cap d’activa.',
          'Desactiva el seguiment publicitari a Ajustaments > Privadesa i seguretat > Seguiment i exclou-te d’Appodeal a appodeal.com/sdk_opt_out.',
          'Demana la supressió de les dades escrivint a l’assistència a través del formulari del web de Kraftwerk 9.',
        ],
        obstacles: 'La política no dona cap adreça electrònica directa de contacte per a privadesa ni cap termini de resposta.',
        sources: ['kraftwerk9-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['kraftwerk9-privacy-policy'], 'Reconeix la portabilitat per a les persones de l’Espai Econòmic Europeu, sense cap eina.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['kraftwerk9-privacy-policy'], 'Només a través del contacte general del web.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['kraftwerk9-privacy-policy'], 'Remet a la configuració publicitària del dispositiu i a l’exclusió d’Appodeal, no a cap control dins de l’app.'),
        telemetryOptOut: f('partial', 'official', ['kraftwerk9-privacy-policy'], 'Només a través de la configuració de Firebase del dispositiu.'),
        granularControls: f('no', 'official', ['kraftwerk9-privacy-policy'], 'No hi ha cap panell de preferències de privadesa.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No n’hem documentat cap amb prou base.'),
      },
      security: {
        e2ee: na('És un comandament a distància.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('El domini no publica cap fitxer security.txt.'),
        vulnerabilityDisclosure: f('no', 'official', ['kraftwerk9-privacy-policy'], 'No hi ha cap canal de divulgació de vulnerabilitats i el domini no serveix cap fitxer security.txt.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política és una plantilla genèrica de l’empresa, no de l’aplicació, i no esmenta ni el país del responsable ni l’autoritat de control; el domicili a Nicòsia surt de la fitxa del venedor a l’App Store. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Per què una aplicació de comandament a distància necessita la ubicació per a publicitat de tercers?',
          'L’aplicació demana consentiment de rastreig conforme al marc de transparència d’Apple abans de carregar Appodeal?',
        ],
      },
    },

    /* ═══════════════════════════ My Verisure ═══════════════════════════ */
    {
      slug: 'my-verisure',
      name: 'My Verisure',
      company: 'securitas-direct-espana',
      categories: ['llar-connectada', 'utilitats'],
      tagline: 'El compte de la persona titular no es pot esborrar des de l’app: va lligat al contracte d’alarma',
      summary:
        'My Verisure controla l’alarma de casa i, si es contracta GUARDIAN, la ubicació de les persones de la família. La política ho explica amb detall poc habitual: dos tipus de compte, ubicació compartida amb altres usuaris, dades de contactes d’emergència facilitades per la persona titular i màrqueting digital amb Meta, TikTok, Snapchat i Google. El compte de la persona titular no es pot eliminar des de l’aplicació perquè va lligat al contracte.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.verisure.es/',
        privacyPolicy: 'https://customers.verisure.es/media_contents/app/myverisure/ios/terms_es_verisure.html',
        appStore: 'https://apps.apple.com/es/app/id1473822730',
      },
      accountRequired: f('yes', 'official', ['my-verisure-privacy-policy'], 'L’app només funciona amb un contracte de Verisure i un compte de titular o de persona autoritzada.'),
      openSource: f('no', 'official', ['my-verisure-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Quan connectes i desconnectes l’alarma diu quan hi ha ningú a casa, i GUARDIAN hi afegeix on és cada membre de la família en temps real: és de les dades més delicades que pot tenir una aplicació domèstica.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['my-verisure-privacy-policy'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['my-verisure-privacy-policy'], note: 'DNI o NIF de la persona titular del contracte.' }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['my-verisure-privacy-policy'], note: 'Adreça completa i número d’instal·lació.' }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-publicitaria'], sources: ['my-verisure-privacy-policy'], note: 'Amb consentiment exprés, es facilita xifrat de manera irreversible a Meta, TikTok, Snapchat i Google per mesurar el màrqueting.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-publicitaria'], sources: ['my-verisure-privacy-policy'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['my-verisure-privacy-policy'], note: 'Dades de facturació i bancàries.' }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['my-verisure-privacy-policy'], note: 'La política inclou les imatges entre les dades identificatives i l’app permet fer foto peticions als dispositius de la instal·lació.' }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['my-verisure-app-store', 'my-verisure-privacy-policy'], note: 'Imprescindible per a GUARDIAN; altres persones usuàries hi poden accedir i, en una emergència confirmada, es facilita als serveis públics d’emergència.' }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['my-verisure-privacy-policy'], note: 'Només si es demana exportar l’agenda del dispositiu per designar el pla d’acció o d’emergència.' }),
        row('situacio-familiar', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['my-verisure-privacy-policy'], note: 'Vincle o afinitat de les persones de contacte del pla d’acció, facilitat per la persona titular.' }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['my-verisure-privacy-policy'], note: 'La política cita expressament les credencials i contrasenyes d’ús de l’aplicació entre les dades tractades.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['my-verisure-privacy-policy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['my-verisure-privacy-policy'], note: 'Marca, model, sistema operatiu i fins i tot el percentatge de bateria per al servei GUARDIAN.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['my-verisure-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'mesura-publicitaria'], sources: ['my-verisure-app-store', 'my-verisure-privacy-policy'], note: 'Les dades tècniques associades al dispositiu es comparteixen amb plataformes publicitàries per interès legítim, sense dades personals.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['my-verisure-app-store', 'my-verisure-privacy-policy'], note: 'S’hi fan models de propensió sobre l’ús dels serveis.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['my-verisure-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['my-verisure-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: f('partial', 'official', ['my-verisure-privacy-policy'], 'Es comparteixen dades tècniques associades al dispositiu amb Meta, TikTok, Snapchat i Google per a campanyes de màrqueting digital.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['my-verisure-privacy-policy'], 'Quatre plataformes publicitàries citades pel nom a la política.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['my-verisure-privacy-policy'], 'No hi ha publicitat dins de l’app; el que hi ha és màrqueting digital de Verisure a plataformes de tercers, amb dades tècniques per interès legítim i amb correu o telèfon xifrats si hi ha consentiment.'),
        profiling: f('yes', 'official', ['my-verisure-privacy-policy'], 'Models de propensió sobre l’ús dels serveis i definició del tipus d’oferta comercial segons el perfil.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['my-verisure-privacy-policy'], 'Amb caràcter general no es comuniquen dades a tercers; les excepcions són els serveis públics d’emergència, els encarregats del tractament i les plataformes publicitàries.'),
        intraGroupSharing: unknown('La política no descriu la compartició amb la resta del grup Verisure.'),
        dataBrokerSales: f('no', 'official', ['my-verisure-privacy-policy']),
        internationalTransfers: f('partial', 'official', ['my-verisure-privacy-policy'], 'No en preveu de manera habitual; si n’hi hagués, per exemple per al màrqueting digital, seria amb garanties equivalents a les de la Unió Europea.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No n’hi ha cap.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['my-verisure-privacy-policy'], 'Remet a polítiques internes de conservació que només es poden consultar escrivint al delegat de protecció de dades.'),
        dataAfterDeletion: f('yes', 'official', ['my-verisure-privacy-policy'], 'Després de la finalitat, les dades queden bloquejades durant el termini de prescripció de les accions derivades de la relació.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['my-verisure-privacy-policy'], 'El compte de la persona titular no es pot eliminar des de l’aplicació: queda lligat a l’extinció del contracte. Els comptes secundaris sí que els pot eliminar la persona titular.'),
        selfService: f('partial', 'official', ['my-verisure-privacy-policy'], 'Autoservei només per als usuaris secundaris, des de l’app o el web; per al titular cal trucar a atenció al client.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Si ets usuari secundari, demana a la persona titular que elimini el teu compte des de l’app o des del web d’usuari.',
          'Si ets la persona titular, contacta amb atenció al client pels canals habituals: l’eliminació del compte va lligada a l’extinció del contracte.',
          'Per a la supressió de les dades, escriu a dpo@verisure.es acreditant la identitat.',
        ],
        obstacles:
          'El compte principal no es pot tancar mentre hi hagi contracte d’alarma vigent, i la política no publica els terminis de conservació posteriors.',
        dataRetained: 'Dades bloquejades durant el termini de prescripció de les accions derivades del contracte.',
        sources: ['my-verisure-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['my-verisure-privacy-policy'], 'Es reconeix la portabilitat, però només per sol·licitud al delegat de protecció de dades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['my-verisure-privacy-policy'], 'Delegat de protecció de dades propi i via postal.', { url: 'mailto:dpo@verisure.es' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['my-verisure-privacy-policy'], 'Les comunicacions comercials es basen en el consentiment i s’hi pot renunciar en qualsevol moment; també es pot oposar a les enquestes.'),
        telemetryOptOut: f('no', 'official', ['my-verisure-privacy-policy'], 'L’analítica d’ús i els models de propensió es fan per interès legítim, sense cap control dins de l’app.'),
        granularControls: f('partial', 'official', ['my-verisure-privacy-policy'], 'Permisos per usuari secundari i activació voluntària de la geolocalització, però sense un panell general de privadesa.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No n’hem documentat cap amb prou base.'),
      },
      security: {
        e2ee: na('És una app de control d’alarma connectada a una central receptora, no un servei de comunicacions privades.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown('La política parla de credencials i contrasenyes, però no de segon factor.'),
        independentAudits: unknown(),
        bugBounty: unknown('El domini verisure.es no publica cap fitxer security.txt.'),
        vulnerabilityDisclosure: unknown('No hi ha cap fitxer security.txt a verisure.es.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política de l’app s’ha de llegir juntament amb la clàusula de privadesa de les condicions generals del servei d’alarma, que no hem revisat. Si la persona titular convida menors al servei GUARDIAN, és ella qui ha de garantir el consentiment. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Quins terminis concrets de conservació aplica Verisure a les dades de clients?',
          'Què passa amb les imatges de les foto peticions: quant de temps es conserven i qui hi té accés?',
        ],
      },
    },

    /* ═══════════════════════════ Bolt ═══════════════════════════ */
    {
      slug: 'bolt',
      name: 'Bolt',
      company: 'bolt-operations',
      categories: ['mobilitat-i-transport'],
      tagline: 'Verificació facial amb consentiment i una taula de terminis amb xifres, cosa rara en aquest sector',
      summary:
        'Bolt recull el recorregut sencer d’un viatge: on ets, on vas, com pagues i com et puntua el conductor. L’avís per a passatgers és dels més detallats del lot i inclou coses que altres amaguen: la verificació d’identitat amb reconeixement facial exigeix consentiment i es pot substituir per una revisió manual, els enregistraments d’àudio del viatge s’esborren al cap de 24 hores si no es denuncia res i el nom i el telèfon queden visibles per al conductor entre 24 i 48 hores després del trajecte.',
      platforms: ['ios', 'android'],
      businessModel: 'commerce',
      jurisdiction: 'Estònia',
      links: {
        website: 'https://bolt.eu/',
        privacyPolicy: 'https://bolt.eu/en/privacy/privacy-for-riders/',
        appStore: 'https://apps.apple.com/es/app/id675033630',
      },
      accountRequired: f('yes', 'official', ['bolt-privacy-riders'], 'Cal registrar-se amb nom, correu i telèfon per demanar un viatge.'),
      openSource: f('no', 'official', ['bolt-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'L’historial de viatges és un mapa de la vida quotidiana: on vius, on treballes, a quina hora tornes a casa i a qui vas a veure. Bolt l’enriqueix amb el calendari, si li dones permís, i amb la valoració que en fan els conductors.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bolt-app-store', 'bolt-privacy-riders'], note: 'Visible per al conductor durant el viatge i fins a 24-48 hores després.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['bolt-app-store', 'bolt-privacy-riders'], note: 'Es comparteix amb socis promocionals i de màrqueting per informar d’ofertes.' }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bolt-app-store', 'bolt-privacy-riders'], note: 'A molts països s’emmascara perquè el conductor no en vegi el número real.' }),
        row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['bolt-app-store', 'bolt-privacy-riders'], note: 'Adreça de casa o de la feina i ubicacions preferides, opcionals.' }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['bolt-privacy-riders'] }),
        row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['bolt-privacy-riders'], note: 'L’avís inclou l’edat i el gènere entre les dades demogràfiques que tracta.' }),
        row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'compliment-legal'], sources: ['bolt-privacy-riders'], note: 'Passaport, carnet de conduir o document d’identitat, si es demana verificar la identitat o l’edat.' }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['bolt-privacy-riders'], note: 'Reconeixement facial per comparar la selfie amb el document. Cal consentiment exprés i es pot triar la verificació manual.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bolt-app-store', 'bolt-privacy-riders'] }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['bolt-app-store', 'bolt-privacy-riders'], note: 'Es comparteix amb el conductor i amb Google per als mapes i les rutes.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bolt-app-store'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['bolt-app-store'], note: 'Destinacions cercades dins de l’app.' }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari', 'seguretat-i-prevencio-del-frau'], sources: ['bolt-privacy-riders'], note: 'Xat amb el conductor i amb atenció al client; les trucades es poden gravar amb avís previ.' }),
        row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['bolt-privacy-riders'], note: 'Enregistrament d’àudio del viatge, on la funció està disponible; es pot compartir amb el conductor o amb les forces de seguretat.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['bolt-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['bolt-app-store', 'bolt-privacy-riders'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['bolt-privacy-riders'], note: 'L’avís cita els identificadors publicitaris entre les dades del dispositiu.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['bolt-app-store', 'bolt-privacy-riders'], note: 'Inclou dades de publicitat, segons l’etiqueta de l’App Store.' }),
        row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['bolt-privacy-riders'], note: 'Imatges, vídeos o fitxers adjunts a una consulta d’atenció al client.' }),
        row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['bolt-privacy-riders'], note: 'L’avís preveu recollir dades sobre visites i accions en apps i webs de tercers per a publicitat personalitzada.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['bolt-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['bolt-app-store', 'bolt-privacy-riders'], 'L’etiqueta declara els identificadors com a dada de rastreig i l’avís reconeix la recollida de dades sobre l’activitat en apps i webs de tercers per a publicitat.'),
        advertisingIdentifiers: f('yes', 'official', ['bolt-privacy-riders'], 'Els identificadors publicitaris figuren entre les dades del dispositiu.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['bolt-privacy-riders'], 'Galetes, píxels, SDK i tecnologies de tercers, amb consentiment previ; l’avís cita Facebook i Google per a l’inici de sessió i la publicitat.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['bolt-privacy-riders'], 'Publicitat personalitzada i mesura de l’eficàcia dels anuncis, amb interès legítim per al màrqueting directe i consentiment per a les tecnologies de rastreig.'),
        profiling: f('partial', 'official', ['bolt-privacy-riders'], 'Personalitza el màrqueting segons l’ús de l’app i fa resums anuals de l’activitat; no descriu perfils publicitaris venuts a tercers.'),
        aiTraining: f('partial', 'official', ['bolt-privacy-riders'], 'La ubicació i l’ús serveixen per millorar els algorismes i els models d’aprenentatge automàtic, i hi ha proveïdors d’intel·ligència artificial entre els encarregats.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['bolt-privacy-riders'], 'Conductors, clients de Bolt Business, socis promocionals, asseguradores, Google per als mapes, proveïdors de verificació biomètrica i forces de seguretat.'),
        intraGroupSharing: f('yes', 'official', ['bolt-privacy-riders'], 'Les filials locals poden compartir les dades amb Bolt Operations OÜ com a responsable principal.'),
        dataBrokerSales: unknown('L’avís no parla de venda de dades, però sí de compartir dades limitades amb proveïdors de dades de tercers per a màrqueting.'),
        internationalTransfers: f('yes', 'official', ['bolt-privacy-riders'], 'Decisions d’adequació i clàusules contractuals tipus per a transferències als Estats Units, Singapur i Nigèria; els centres de dades del servei són a l’Espai Econòmic Europeu.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['bolt-privacy-riders'], 'L’avís té una taula amb terminis concrets per a cada tipus de dada.'),
        dataAfterDeletion: f('partial', 'official', ['bolt-privacy-riders'], 'Després de tancar el compte es poden conservar dades per obligacions legals, comptabilitat, resolució de disputes o prevenció del frau.'),
        periods: [
          { dataType: 'contingut-de-missatges', period: '90 dies per als xats amb atenció al client, o 6 mesos si hi ha incidència o disputa', sources: ['bolt-privacy-riders'] },
          { dataType: 'veu-i-audio', period: '24 hores al dispositiu; 7 dies si l’enregistrament es comparteix amb Bolt per a una investigació', sources: ['bolt-privacy-riders'] },
          { period: '3 anys per als tiquets, trucades i xats d’atenció al client', sources: ['bolt-privacy-riders'] },
          { period: '3 anys per a les valoracions i els comentaris dels conductors', sources: ['bolt-privacy-riders'] },
          { period: '12 mesos per al registre de reclamacions a disposició de l’autoritat que atorga la llicència', sources: ['bolt-privacy-riders'] },
          { period: 'Als 3 anys sense fer servir l’app, Bolt demana confirmació i, si no hi ha resposta, tanca el compte i esborra les dades', sources: ['bolt-privacy-riders'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['bolt-privacy-riders']),
        selfService: f('yes', 'official', ['bolt-privacy-riders'], 'L’avís diu que es pot demanar l’eliminació del compte en qualsevol moment des de la mateixa aplicació.'),
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Obre el menú principal de l’app i entra a la configuració del compte.',
          'Tria l’opció d’eliminar el compte; desinstal·lar l’aplicació no esborra cap dada.',
          'Si necessites que s’esborrin dades concretes, escriu a l’equip d’atenció al client o a privacy@bolt.eu.',
        ],
        dataRetained:
          'Dades necessàries per a obligacions legals, comptabilitat, disputes o prevenció del frau, i els terminis de la taula de conservació.',
        sources: ['bolt-privacy-riders'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['bolt-privacy-riders'], 'Dret d’accés i de portabilitat exercibles a través de l’equip d’atenció al client.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['bolt-privacy-riders'], 'Delegat de protecció de dades global i bústia de privadesa.', { url: 'mailto:privacy@bolt.eu' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['bolt-privacy-riders'], 'Enllaç de baixa als correus, resposta «STOP» als missatges i preferències de comunicació a la configuració del compte.'),
        telemetryOptOut: f('partial', 'official', ['bolt-privacy-riders'], 'Les galetes, els SDK i les tecnologies de tercers requereixen consentiment i hi ha analítiques que també el demanen, amb retirada des del perfil.'),
        granularControls: f('yes', 'official', ['bolt-privacy-riders'], 'Permisos separats per a la ubicació, el calendari, la foto de perfil, la verificació biomètrica i les comunicacions.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No n’hem documentat cap amb prou base.'),
      },
      security: {
        e2ee: na('El servei necessita veure el trajecte i el xat per prestar-lo i moderar-lo.'),
        transportEncryption: f('yes', 'official', ['bolt-privacy-riders'], 'L’avís diu que hi ha xifratge en trànsit i en repòs.'),
        atRestEncryption: f('yes', 'official', ['bolt-privacy-riders'], 'Xifratge en repòs i centres de dades dins de l’Espai Econòmic Europeu.'),
        mfa: unknown('L’avís no documenta cap segon factor per al compte de passatger.'),
        independentAudits: unknown(),
        bugBounty: f('yes', 'official', ['bolt-security-txt'], 'Programa públic de recompenses amb política de divulgació pròpia.'),
        vulnerabilityDisclosure: f('yes', 'official', ['bolt-security-txt'], 'Fitxer security.txt amb adreça de contacte i clau PGP, tot i que la data de caducitat declarada ja ha passat.', { url: 'https://bolt.eu/.well-known/security.txt' }),
      },
      alternatives: [
        { app: 'cabify', comparability: 'equivalent', rationale: 'Mateix servei de viatges amb conductor amb responsable establert a Espanya i autoritat de control espanyola.', tradeOffs: 'Cobertura més limitada fora de les grans ciutats.' },
        { app: 'uber', comparability: 'equivalent', rationale: 'Alternativa amb la mateixa funció i una política igualment detallada.', tradeOffs: 'Grup nord-americà, amb més transferències internacionals.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'L’avís consultat és el global per a passatgers, actualitzat l’11 d’abril del 2025; a Espanya el responsable pot ser la filial local, que figura en una llista separada que no hem revisat. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Quina societat de Bolt és responsable del tractament a Espanya?',
          'Quin proveïdor fa la verificació biomètrica i on es tracten les dades facials?',
        ],
      },
    },

    /* ═══════════════════════════ Ryanair ═══════════════════════════ */
    {
      slug: 'ryanair',
      name: 'Ryanair',
      company: 'ryanair',
      categories: ['viatges-i-allotjament'],
      tagline: 'Política vigent des del 2025 que no es pot llegir: el contingut de cada apartat no arriba a carregar-se',
      summary:
        'L’etiqueta de l’App Store de Ryanair és sòbria per a una aerolínia: no declara cap dada de rastreig i vincula amb la identitat la ubicació exacta, les dades de contacte i els identificadors. El problema és la verificació: la política de privadesa, vigent des del 24 de març del 2025, es carrega amb JavaScript i de cap de les versions provades, espanyola, irlandesa i britànica, n’hem pogut llegir el contingut. Per això gairebé tota la fitxa queda com a desconeguda.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Irlanda',
      userBase: 'Unes 214 milions de persones a l’any al conjunt del grup',
      links: {
        website: 'https://www.ryanair.com/',
        privacyPolicy: 'https://www.ryanair.com/es/es/empresa/politica-de-privacidad',
        appStore: 'https://apps.apple.com/es/app/id504270602',
      },
      accountRequired: f('partial', 'official', ['ryanair-app-store'], 'L’etiqueta declara un identificador d’usuari vinculat amb la identitat, coherent amb el compte myRyanair que l’aerolínia exigeix per a la majoria de reserves.'),
      openSource: f('no', 'official', ['ryanair-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Un historial de vols diu on vius, amb qui viatges i quan no ets a casa; l’etiqueta hi afegeix la ubicació exacta i una categoria genèrica d’«otros datos» que no sabem què conté.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ryanair-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ryanair-app-store'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ryanair-app-store'] }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ryanair-app-store'], note: 'Declarada per al funcionament de l’app, sense que l’etiqueta n’expliqui el motiu.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ryanair-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ryanair-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ryanair-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['ryanair-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['ryanair-app-store'], note: 'L’etiqueta el declara com a dada no vinculada amb la identitat, cosa difícil d’encaixar amb un compte de reserves.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['ryanair-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['ryanair-app-store'], 'No hi ha cap categoria publicitària a l’etiqueta.'),
        thirdPartyTrackersPresent: unknown('La política té un apartat de galetes i seguiment, però no se n’ha pogut llegir el contingut.'),
      },
      dataUses: {
        targetedAdvertising: unknown('No hem pogut llegir l’apartat corresponent de la política.'),
        profiling: unknown('No hem pogut llegir l’apartat corresponent de la política.'),
        aiTraining: unknown('No hem pogut llegir l’apartat corresponent de la política.'),
      },
      sharing: {
        thirdPartySharing: unknown('La política té un apartat «Cómo compartimos y transferimos tus datos personales» que no s’ha pogut llegir.'),
        intraGroupSharing: unknown('El grup inclou Buzz, Lauda, Malta Air i Ryanair UK, però no hem pogut verificar la compartició entre marques.'),
        dataBrokerSales: unknown(),
        internationalTransfers: unknown('No hem pogut llegir l’apartat corresponent de la política.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No n’hem trobat cap.'),
      },
      retention: {
        definedPeriods: unknown('La política té un apartat «Cuánto tiempo conservamos tus datos» del qual només se’n veu el títol.'),
        dataAfterDeletion: unknown(),
      },
      accountDeletion: {
        possible: unknown('No hem pogut verificar el procediment d’eliminació del compte myRyanair.'),
        selfService: unknown(),
        difficulty: 'unknown',
        obstacles: 'No hem pogut llegir la política ni localitzar cap pàgina d’ajuda que descrigui l’eliminació del compte.',
        sources: ['ryanair-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política té un apartat de drets, però no se’n pot llegir el contingut.'),
        exportFormatQuality: 'unknown',
        rightsExercise: unknown('La política declara tenir delegat de protecció de dades, però no n’hem pogut llegir les dades de contacte.'),
      },
      controls: {
        adPersonalizationOptOut: unknown(),
        telemetryOptOut: unknown(),
        granularControls: unknown(),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No n’hem documentat cap amb prou base.'),
      },
      security: {
        e2ee: na('És una app de reserva i facturació de vols.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('El domini ryanair.com no serveix cap fitxer security.txt: la petició redirigeix a la pàgina d’inici.'),
        vulnerabilityDisclosure: f('no', 'official', ['ryanair-app-store'], 'No hi ha cap fitxer security.txt ni cap canal de divulgació documentat al lloc web.'),
      },
      alternatives: [
        { app: 'skyscanner', comparability: 'partial', rationale: 'Permet comparar i reservar vols sense obrir compte a cada aerolínia.', tradeOffs: 'És un cercador amb model publicitari; la reserva acaba igualment a l’aerolínia.' },
        { app: 'vueling', comparability: 'equivalent', rationale: 'Companyia de baix cost amb rutes solapades a l’Estat espanyol.', tradeOffs: 'No hem comparat les dues polítiques de privadesa.' },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'Hem provat les versions espanyola, irlandesa i britànica de la política, la pàgina corporativa i el centre d’ajuda: totes retornen només els títols dels apartats, perquè el contingut es carrega amb JavaScript en obrir cada secció. Mantenim la fitxa amb el que declara l’etiqueta de l’App Store i deixem la resta com a desconegut. No hem pogut fer la cerca d’incidents.',
        openQuestions: [
          'Quins són els terminis de conservació i el procediment d’eliminació del compte myRyanair?',
          'Per a què fa servir l’app la ubicació exacta?',
          'Què inclou la categoria «otros datos» de l’etiqueta de l’App Store?',
          'Com es comparteixen les dades entre Ryanair, Buzz, Lauda, Malta Air i Ryanair UK?',
        ],
      },
    },
  ],

  incidents: [
    {
      slug: 'epic-games-ftc-coppa-2022',
      title: 'La FTC imposa 520 milions de dòlars a Epic Games per vulnerar la privadesa dels menors i per patrons enganyosos de cobrament',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['epic-games'],
      company: 'epic-games-inc',
      occurredAt: '2022-12-19',
      disclosedAt: '2022-12-19',
      description:
        'La Comissió Federal de Comerç dels Estats Units va tancar dos acords amb Epic Games. En el primer, 275 milions de dòlars de sanció per vulnerar la llei de protecció de la privadesa dels menors en línia: Fortnite recollia dades de criatures de menys de 13 anys sense avisar els pares ni obtenir-ne el consentiment, i tenia el xat de veu i de text activat per defecte. En el segon, 245 milions per retornar als consumidors els cobraments provocats per patrons enganyosos d’interfície. Els acords obliguen Epic a desactivar les comunicacions per defecte per a menors, a esborrar les dades recollides irregularment, a establir un programa de privadesa i a sotmetre’s a auditories independents periòdiques.',
      affectedPeople: 'Fortnite declarava més de 400 milions de persones usuàries a tot el món',
      regulatory: {
        authority: 'Federal Trade Commission (Estats Units)',
        legalBasis: 'Children’s Online Privacy Protection Act i secció 5 de la FTC Act',
        status: 'final',
      },
      sources: ['epic-ftc-2022'],
    },
  ],

  storeIds: {
    'uk-eta': 'uk.gov.HomeOffice.ho3',
    yepexpress: 'com.yepexpress.ios',
    'mi-vodafone': 'es.vodafone.mobile.mivodafone',
    geteduroam: 'app.eduroam.geteduroam',
    'proton-vpn': 'ch.protonmail.vpn',
    'epic-games': 'com.epicgames.ega',
    'mando-universal-tv': 'com.kraftwerk9.universal',
    'my-verisure': 'com.securitas-direct.verisure.south',
    bolt: 'ee.mtakso.client',
    ryanair: 'com.ryanair.cheapflights',
  },
}
