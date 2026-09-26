import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/**
 * Lot 30 de la segona onada: tres diaris internacionals i un d’espanyol, una
 * ràdio catalana, dos assistents d’IA, dues aplicacions de l’Administració
 * General de l’Estat, un escàner de documents i Discord.
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'new-york-times-company',
      name: 'The New York Times Company',
      legalName: 'The New York Times Company',
      description:
        'Grup editorial nord-americà propietari de The New York Times, The Athletic, Wirecutter i els jocs del diari. Combina subscripcions digitals amb publicitat segmentada.',
      headquartersCountry: 'US',
      ownership: 'public',
      foundedYear: 1851,
      primaryRevenueModel: 'subscription',
      website: 'https://www.nytco.com/',
      productDomains: ['nytimes.com', 'nyt.com', 'theathletic.com'],
      privacyContact: 'privacy@nytimes.com',
    },
    {
      slug: 'unidad-editorial',
      name: 'Unidad Editorial',
      legalName: 'Unidad Editorial Información General, S.L.U.',
      description:
        'Societat del grup Unidad Editorial que edita El Mundo. La matriu, Unidad Editorial, S.A., també publica Marca i Expansión i gestiona un registre únic d’usuaris compartit entre les capçaleres.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      parentGroup: 'Unidad Editorial, S.A.',
      primaryRevenueModel: 'mixed',
      website: 'https://www.unidadeditorial.es/',
      productDomains: ['elmundo.es', 'marca.com', 'expansion.com', 'telva.com', 'orbyt.es'],
      privacyContact: 'lopd@unidadeditorial.es',
    },
    {
      slug: 'financial-times',
      name: 'Financial Times',
      legalName: 'The Financial Times Limited',
      description:
        'Diari econòmic britànic, propietat del grup japonès Nikkei des del 2015. Té un representant a la UE per al RGPD, Bird & Bird a Dublín.',
      headquartersCountry: 'GB',
      ownership: 'subsidiary',
      parentGroup: 'Nikkei',
      foundedYear: 1888,
      primaryRevenueModel: 'subscription',
      website: 'https://www.ft.com/',
      productDomains: ['ft.com'],
      privacyContact: 'privacy.officer@ft.com',
    },
    {
      slug: 'grup-godo',
      name: 'Grup Godó',
      legalName: 'Grupo Godó de Comunicación, S.A.',
      description:
        'Grup de comunicació de Barcelona propietari de La Vanguardia, Mundo Deportivo i RAC1. Comparteix perfils publicitaris entre les seves capçaleres.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'advertising',
      website: 'https://www.grupogodo.com/',
      productDomains: ['lavanguardia.com', 'mundodeportivo.com', 'rac1.cat'],
      privacyContact: 'dpo@grupogodo.com',
    },
    {
      slug: 'radiocat-xxi',
      name: 'Radiocat XXI',
      legalName: 'Radiocat XXI, S.L.',
      parent: 'grup-godo',
      description: 'Societat del Grup Godó titular de RAC1 i responsable del tractament de les dades dels seus oients.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      primaryRevenueModel: 'advertising',
      website: 'https://www.rac1.cat/',
      productDomains: ['rac1.cat'],
      privacyContact: 'protecciodedades@rac1.cat',
    },
    {
      slug: 'openai',
      name: 'OpenAI',
      legalName: 'OpenAI OpCo, LLC',
      description:
        'Empresa nord-americana que desenvolupa els models GPT i ChatGPT. Des del 2026 mostra anuncis a les persones usuàries dels plans gratuït i Go.',
      headquartersCountry: 'US',
      euEstablishment: 'IE',
      ownership: 'private',
      foundedYear: 2015,
      primaryRevenueModel: 'freemium',
      website: 'https://openai.com/',
      productDomains: ['openai.com', 'chatgpt.com', 'sora.com'],
      privacyContact: 'privacy@openai.com',
    },
    {
      slug: 'openai-ireland',
      name: 'OpenAI Ireland',
      legalName: 'OpenAI Ireland Limited',
      parent: 'openai',
      description:
        'Responsable del tractament de les dades de les persones usuàries de ChatGPT a l’Espai Econòmic Europeu i Suïssa. L’autoritat irlandesa en va reconèixer l’establiment principal el febrer del 2024.',
      headquartersCountry: 'IE',
      euEstablishment: 'IE',
      leadSupervisoryAuthority: 'dpc-ie',
      ownership: 'subsidiary',
      primaryRevenueModel: 'freemium',
      website: 'https://openai.com/',
    },
    {
      slug: 'anthropic',
      name: 'Anthropic',
      legalName: 'Anthropic PBC',
      description:
        'Empresa nord-americana constituïda com a societat de benefici públic que desenvolupa els models Claude.',
      headquartersCountry: 'US',
      euEstablishment: 'IE',
      ownership: 'private',
      foundedYear: 2021,
      primaryRevenueModel: 'freemium',
      website: 'https://www.anthropic.com/',
      productDomains: ['anthropic.com', 'claude.ai', 'claude.com'],
      privacyContact: 'privacy@anthropic.com',
    },
    {
      slug: 'anthropic-ireland',
      name: 'Anthropic Ireland',
      legalName: 'Anthropic Ireland, Limited',
      parent: 'anthropic',
      description: 'Responsable del tractament de les dades de les persones usuàries de Claude a l’Espai Econòmic Europeu, el Regne Unit i Suïssa.',
      headquartersCountry: 'IE',
      euEstablishment: 'IE',
      ownership: 'subsidiary',
      primaryRevenueModel: 'freemium',
      website: 'https://www.anthropic.com/',
    },
    {
      slug: 'agencia-tributaria',
      name: 'Agència Tributària',
      legalName: 'Agencia Estatal de Administración Tributaria',
      description:
        'Organisme de l’Administració General de l’Estat responsable de la gestió tributària. Distribueix l’aplicació Cl@ve, el sistema comú d’identificació i signatura amb l’Administració.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'state',
      primaryRevenueModel: 'unknown',
      website: 'https://sede.agenciatributaria.gob.es/',
      productDomains: ['agenciatributaria.gob.es', 'agenciatributaria.es'],
      privacyContact: 'dpd@correo.aeat.es',
    },
    {
      slug: 'tesoreria-general-seguridad-social',
      name: 'Tresoreria General de la Seguretat Social',
      legalName: 'Tesorería General de la Seguridad Social',
      description:
        'Servei comú de la Seguretat Social que gestiona l’afiliació, les cotitzacions i la recaptació. Publica l’aplicació Importass.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'state',
      primaryRevenueModel: 'unknown',
      website: 'https://www.seg-social.es/',
      productDomains: ['seg-social.es', 'seg-social.gob.es'],
      privacyContact: 'delegado.protecciondatos@seg-social.es',
    },
    {
      slug: 'intsig',
      name: 'INTSIG',
      legalName: 'INTSIG Information Co., Ltd.',
      description:
        'Empresa xinesa amb seu a Xangai que desenvolupa CamScanner i altres aplicacions de reconeixement de documents i targetes.',
      headquartersCountry: 'CN',
      ownership: 'private',
      foundedYear: 2006,
      primaryRevenueModel: 'freemium',
      website: 'https://www.camscanner.com/',
      productDomains: ['camscanner.com', 'intsig.com', 'intsig.net'],
      privacyContact: 'support@intsig.com',
    },
    {
      slug: 'discord',
      name: 'Discord',
      legalName: 'Discord Inc.',
      description:
        'Empresa nord-americana de xat de veu, vídeo i text organitzat en servidors. Es finança amb la subscripció Nitro i amb continguts patrocinats com les missions (Quests).',
      headquartersCountry: 'US',
      euEstablishment: 'NL',
      ownership: 'private',
      foundedYear: 2015,
      primaryRevenueModel: 'freemium',
      website: 'https://discord.com/',
      productDomains: ['discord.com', 'discord.gg', 'discordapp.com'],
      privacyContact: 'privacy@discord.com',
    },
    {
      slug: 'discord-netherlands',
      name: 'Discord Netherlands',
      legalName: 'Discord Netherlands BV',
      parent: 'discord',
      description: 'Responsable del tractament de les dades de les persones usuàries de Discord a l’Espai Econòmic Europeu.',
      headquartersCountry: 'NL',
      euEstablishment: 'NL',
      ownership: 'subsidiary',
      primaryRevenueModel: 'freemium',
      website: 'https://discord.com/',
    },
  ],

  sources: [
    /* ── The New York Times ── */
    s('new-york-times-app-store', 'The New York Times — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id284862083', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa declarada pel desenvolupador. Declara com a dades de rastreig la informació financera, la ubicació, el contacte, el contingut, l’historial de cerca i navegació, els identificadors i l’ús.',
    }),
    s('new-york-times-privacy-policy', 'The New York Times Company Privacy Policy', 'https://help.nytimes.com/hc/en-us/articles/10940941449492-The-New-York-Times-Company-Privacy-Policy-', 'The New York Times Company', 'privacy-policy', 'primary', {
      summary: 'Política de privadesa global. Descriu la publicitat segmentada amb Unified ID 2.0 i LiveRamp ATS a partir del correu i el telèfon, els SDK d’AppsFlyer, les transferències amb clàusules tipus i la supressió del compte a l’app i al web.',
    }),
    s('new-york-times-responsible-disclosure', 'The New York Times Responsible Disclosure', 'https://nytimes.responsibledisclosure.com/hc/en-us', 'The New York Times Company', 'technical-doc', 'primary', {
      summary: 'Canal de divulgació de vulnerabilitats gestionat per Synack. Admet informes de recerca de seguretat, però no hi ha recompensa econòmica.',
    }),

    /* ── El Mundo ── */
    s('el-mundo-app-store', 'El Mundo - Diario online — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id324300162', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara compres, identificadors i dades d’ús com a dades de rastreig, i vincula l’adreça, el correu, el nom i l’historial de compres a la identitat.',
    }),
    s('el-mundo-privacy-policy', 'Política de protección de datos personales — EL MUNDO', 'https://www.elmundo.es/registro/privacidad.html', 'Unidad Editorial Información General', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de privadesa del registre i les subscripcions. Explica el registre únic del grup, el perfil comercial basat en el consentiment, els destinataris, la conservació i l’exercici de drets per correu.',
    }),
    s('el-mundo-cookies-policy', 'Política de cookies — EL MUNDO', 'https://www.elmundo.es/cookies.html', 'Unidad Editorial Información General', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de galetes. Diu que es poden desactivar les galetes de preferències, d’anàlisi i de publicitat comportamental sense afectar el funcionament del web.',
    }),

    /* ── Financial Times ── */
    s('financial-times-app-store', 'Financial Times: Business News — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1200842933', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa. No declara dades de rastreig, però vincula la ubicació aproximada, l’identificador d’usuari i les dades publicitàries a la publicitat de tercers.',
    }),
    s('financial-times-privacy-policy', 'Financial Times — Privacy policy', 'https://help.ft.com/help/legal-privacy/privacy/', 'The Financial Times Ltd', 'privacy-policy', 'primary', {
      summary: 'Política revisada el 24 d’abril i actualitzada el 19 de maig del 2026. Inclou una taula de terminis de conservació, la inferència de gènere i edat, les «sales rooms» de dades per a publicitat, la compartició amb Nikkei i xarxes socials i el representant a la UE.',
    }),
    s('financial-times-security-txt', 'ft.com security.txt', 'https://www.ft.com/.well-known/security.txt', 'The Financial Times Ltd', 'technical-doc', 'primary', {
      summary: 'Fitxer security.txt amb un formulari per comunicar vulnerabilitats i l’adreça cyber.security@ft.com.',
    }),

    /* ── RAC1 ── */
    s('rac1-app-store', 'RAC1 Oficial — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id413261937', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara identificadors per rastrejar i dades d’ús i diagnòstic no vinculades a la identitat. L’app només està en català.',
    }),
    s('rac1-privacy-policy', 'Política de privacitat — RAC1', 'https://www.rac1.cat/politica-privacitat', 'Radiocat XXI', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Política de privadesa de RAC1. Detalla el marc TCF de l’IAB, els perfils publicitaris compartits amb el Grup Godó i amb tercers, els terminis per finalitat i l’Àrea de Privacitat.',
    }),

    /* ── ChatGPT ── */
    s('chatgpt-app-store', 'ChatGPT — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6448311069', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa. No declara rastreig, però sí dades d’ús i de publicitat per a publicitat de tercers, i dades de salut i forma física per a anàlisi i personalització.',
    }),
    s('chatgpt-privacy-policy', 'OpenAI — Europe privacy policy', 'https://openai.com/policies/eu-privacy-policy/', 'OpenAI', 'privacy-policy', 'primary', {
      summary: 'Política per a l’EEE, el Regne Unit i Suïssa, actualitzada el 24 d’agost del 2026. OpenAI Ireland n’és la responsable. Descriu la publicitat als plans gratuït i Go, l’entrenament amb el contingut, els terminis de 30 dies i les clàusules tipus.',
    }),
    s('chatgpt-delete-account', 'Deleting your ChatGPT account', 'https://help.openai.com/en/articles/6378407-how-to-delete-your-account', 'OpenAI', 'support-doc', 'primary', {
      summary: 'Passos per eliminar el compte al web, a l’app i pel portal de privadesa, i què passa amb les dades en 30 dies.',
    }),
    s('chatgpt-mfa', 'Managing multi-factor authentication (MFA)', 'https://help.openai.com/en/articles/7967234-enabling-or-disabling-multi-factor-authentication-mfa', 'OpenAI', 'support-doc', 'primary', {
      summary: 'Opcions de verificació en dos passos: aplicació d’autenticació, notificació, SMS o WhatsApp i claus d’accés.',
    }),
    s('openai-bug-bounty', 'OpenAI Bug Bounty — Bugcrowd', 'https://bugcrowd.com/engagements/openai', 'Bugcrowd', 'technical-doc', 'primary', {
      summary: 'Programa públic de recompenses de seguretat d’OpenAI a Bugcrowd.',
    }),
    s('openai-security-txt', 'openai.com security.txt', 'https://openai.com/.well-known/security.txt', 'OpenAI', 'technical-doc', 'primary', {
      summary: 'Fitxer security.txt signat amb PGP que remet al programa de Bugcrowd, a la política de divulgació coordinada i a disclosure@openai.com.',
    }),
    s('openai-trust-portal', 'OpenAI Trust Portal', 'https://trust.openai.com/', 'OpenAI', 'privacy-center', 'primary', {
      summary: 'Portal de confiança. Les certificacions SOC 2 Type 2 i ISO 27001 cobreixen l’API i els plans d’empresa i educació, no el ChatGPT de consum.',
    }),
    s('openai-government-requests-2025h2', 'OpenAI Report on Government Requests for User Data July - December 2025', 'https://cdn.openai.com/trust-and-transparency/report-2025h2-government-requests-for-user-data.pdf', 'OpenAI', 'transparency-report', 'primary', {
      summary: 'Informe semestral de peticions governamentals de dades. OpenAI en publica des del 2025.',
    }),
    s('openai-march-2023-outage', 'March 20 ChatGPT outage: Here’s what happened', 'https://openai.com/index/march-20-chatgpt-outage/', 'OpenAI', 'other', 'primary', {
      summary: 'Explicació oficial de l’error de la biblioteca redis-py que va exposar títols de converses i dades de pagament parcials d’alguns subscriptors Plus.',
    }),
    s('chatgpt-garante-fine-2024', 'Italy’s privacy watchdog fines OpenAI €15 million after probe into ChatGPT data collection', 'https://www.euronews.com/next/2024/12/20/italys-privacy-watchdog-fines-openai-15-million-after-probe-into-chatgpt-data-collection', 'Euronews', 'press', 'secondary', {
      summary: 'Notícia de la sanció de 15 milions de l’autoritat italiana per la base jurídica de l’entrenament, la transparència, la bretxa no notificada del 2023 i la manca de verificació d’edat.',
    }),
    s('chatgpt-garante-annulment-2026', 'Tribunale Roma annulla multa da 15 milioni di euro del Garante Privacy a OpenAI', 'https://www.ansa.it/canale_tecnologia/notizie/tecnologia/2026/03/20/tribunale-roma-annulla-multa-da-15-milioni-di-euro-del-garante-privacy-a-openai_6560fadd-4099-451e-99a0-7fcbc9a285c1.html', 'ANSA', 'press', 'secondary', {
      language: 'other',
      summary: 'El Tribunal de Roma va anul·lar la sanció el març del 2026 perquè, amb l’establiment irlandès reconegut, la competència era de l’autoritat irlandesa (finestreta única).',
    }),
    s('chatgpt-preservation-order-2025', 'OpenAI no longer has to preserve all of its ChatGPT data, with some exceptions', 'https://www.engadget.com/ai/openai-no-longer-has-to-preserve-all-of-its-chatgpt-data-with-some-exceptions-192422093.html', 'Engadget', 'press', 'secondary', {
      summary: 'Explica l’ordre judicial del litigi amb The New York Times que va obligar OpenAI a conservar converses esborrades entre el maig i el setembre del 2025, i les excepcions que continuen vigents.',
    }),

    /* ── Claude ── */
    s('claude-app-store', 'Claude by Anthropic — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6473753684', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa. No declara rastreig ni publicitat de tercers; vincula ubicació aproximada, contacte, identificadors i ús a la publicitat pròpia, l’anàlisi i el funcionament.',
    }),
    s('claude-privacy-policy', 'Anthropic Privacy Policy', 'https://www.anthropic.com/legal/privacy', 'Anthropic', 'privacy-policy', 'primary', {
      summary: 'Política vigent des del 10 de setembre del 2026. Anthropic Ireland és la responsable per a l’EEE. Descriu l’entrenament amb converses llevat que la persona s’hi oposi, la compartició amb filials, les clàusules tipus i els drets.',
    }),
    s('claude-retention', 'How long do you store my data?', 'https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data', 'Anthropic', 'support-doc', 'primary', {
      summary: 'Terminis de conservació: 30 dies per a converses esborrades, fins a 5 anys si s’accepta l’entrenament, 2 anys per a continguts marcats i 7 anys per a puntuacions de seguretat.',
    }),
    s('claude-consumer-terms-2025', 'Updates to Consumer Terms and Privacy Policy', 'https://www.anthropic.com/news/updates-to-our-consumer-terms', 'Anthropic', 'other', 'primary', {
      summary: 'Anunci de l’agost del 2025: els plans Free, Pro i Max passen a poder entrenar models amb les converses i a conservar-les fins a 5 anys si la persona no s’hi oposa.',
    }),
    s('claude-training-popup-2025', 'Anthropic users face a new choice – opt out or share your chats for AI training', 'https://techcrunch.com/2025/08/28/anthropic-users-face-a-new-choice-opt-out-or-share-your-data-for-ai-training/', 'TechCrunch', 'press', 'secondary', {
      summary: 'Descriu el missatge emergent amb un botó «Accept» destacat i un interruptor d’entrenament petit i activat per defecte.',
    }),
    s('claude-delete-account', 'Deleting Claude accounts', 'https://privacy.claude.com/en/articles/10023660-deleting-claude-accounts', 'Anthropic', 'support-doc', 'primary', {
      summary: 'Passos per eliminar el compte i condició d’esperar el final de la subscripció de pagament.',
    }),
    s('claude-export-data', 'Export your Claude data', 'https://privacy.claude.com/en/articles/9450526-export-your-claude-data', 'Anthropic', 'support-doc', 'primary', {
      summary: 'L’exportació de converses i dades del compte es fa des del web o l’escriptori; no es pot fer des de l’app mòbil.',
    }),
    s('anthropic-certifications', 'What Certifications has Anthropic obtained?', 'https://privacy.claude.com/en/articles/10015870-what-certifications-has-anthropic-obtained', 'Anthropic', 'support-doc', 'primary', {
      summary: 'Llista de certificacions: SOC 2 Type II, ISO 27001:2022 i ISO/IEC 42001:2023, entre d’altres.',
    }),
    s('anthropic-hackerone', 'Anthropic — Bug Bounty Program | HackerOne', 'https://hackerone.com/anthropic', 'HackerOne', 'technical-doc', 'primary', {
      summary: 'Programa de recompenses de seguretat d’Anthropic a HackerOne.',
    }),
    s('anthropic-security-txt', 'anthropic.com security.txt', 'https://www.anthropic.com/.well-known/security.txt', 'Anthropic', 'technical-doc', 'primary', {
      summary: 'Fitxer security.txt que remet a HackerOne i a la política de divulgació responsable.',
    }),
    s('anthropic-transparency-hub', 'Anthropic’s Transparency Hub', 'https://www.anthropic.com/transparency', 'Anthropic', 'transparency-report', 'primary', {
      summary: 'Centre de transparència amb dades periòdiques de peticions governamentals, comptes suspesos i apel·lacions.',
    }),

    /* ── Cl@ve ── */
    s('clave-app-store', 'Cl@ve — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id842624380', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: vincula dades de contacte i identificador d’usuari; l’identificador del dispositiu, l’ús i els errors no es vinculen. No declara rastreig. Disponible en català.',
    }),
    s('clave-privacy-policy', 'Política de privacidad APP Cl@ve', 'https://sede.agenciatributaria.gob.es/Sede/politicaprivacidadappclave.html', 'Agencia Estatal de Administración Tributaria', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de l’app actualitzada el 22 de juny del 2026. Detalla les dades tractades, l’ús opcional de Firebase Analytics, Crashlytics i Firebase Cloud Messaging, la conservació al dispositiu i les mesures de l’ENS.',
    }),
    s('clave-renunciar', 'Cómo renunciar al servicio Cl@ve', 'https://sede.agenciatributaria.gob.es/Sede/ayuda/consultas-informaticas/firma-digital-sistema-clave-pin-tecnica/modificar-datos-renunciar-servicio-clave/renunciar-servicio-clave.html', 'Agencia Estatal de Administración Tributaria', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Passos per renunciar a Cl@ve des de la seu electrònica o des de l’app, i condicions per tornar-s’hi a registrar.',
    }),
    s('aeat-medidas-seguridad', 'Agencia Tributaria: 3.8. Medidas de Seguridad', 'https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/procedimientos-no-tributarios/tratamiento-datos-personales/tratamiento-datos-personales/informacion-interesado-sobre-proteccion-datos/3-informacion-detallada/3_8-medidas-seguridad.html', 'Agencia Estatal de Administración Tributaria', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Descriu el sistema de gestió de la seguretat conforme a l’Esquema Nacional de Seguretat per als serveis i els centres de dades de l’Agència.',
    }),
    s('aeat-rat-clave', 'Agencia Tributaria: 5.13. Registro del Sistema de Identificación Cl@ve', 'https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/procedimientos-no-tributarios/tratamiento-datos-personales/tratamiento-datos-personales/informacion-interesado-sobre-proteccion-datos/5-registro-actividades-tratamiento/5_13-registro-sistema-identificacion-clave.html', 'Agencia Estatal de Administración Tributaria', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Fitxa del registre d’activitats de tractament per al registre de les persones a Cl@ve. L’Agència hi actua com a encarregada del tractament segons l’Ordre PRE/1838/2014 i la Resolució de 14 de desembre del 2015. Pàgina actualitzada el 23 d’octubre del 2025.',
    }),
    s('aeat-rat-apps-moviles', 'Agencia Tributaria: 5.24. Aplicaciones móviles de la AEAT', 'https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/procedimientos-no-tributarios/tratamiento-datos-personales/tratamiento-datos-personales/informacion-interesado-sobre-proteccion-datos/5-registro-actividades-tratamiento/5_24-aplicaciones-moviles-aeat.html', 'Agencia Estatal de Administración Tributaria', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Fitxa del registre d’activitats de tractament per a les aplicacions mòbils de l’Agència. Declara com a base jurídica el consentiment de l’article 6.1.a del RGPD i preveu l’anàlisi i la mineria de les dades. Pàgina actualitzada el 17 de gener del 2025.',
    }),
    s('aeat-declaracion-accesibilidad', 'Declaración de accesibilidad — Sede electrónica de la Agencia Tributaria', 'https://sede.agenciatributaria.gob.es/Sede/condiciones-uso-sede-electronica/accesibilidad/declaracion-accesibilidad.html', 'Agencia Estatal de Administración Tributaria', 'support-doc', 'primary', {
      language: 'es',
      summary: 'La seu electrònica es declara «parcialmente conforme» amb el Reial decret 1112/2018. Declaració del 23 de gener del 2025, revisada el 6 d’octubre del 2025. Només cobreix els webs dels dominis de l’Agència, no les aplicacions mòbils.',
    }),

    /* ── Importass ── */
    s('importass-app-store', 'Importass Seguridad Social — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6502392871', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa mínima: només declara l’identificador del dispositiu, vinculat a la identitat, per a «altres finalitats». No declara rastreig.',
    }),
    s('importass-app-page', 'app Importass Seguridad Social — Sede electrónica', 'https://sede.seg-social.gob.es/wps/portal/sede/sede/SSMovil/listadoAplicaciones/detalleAplicacionMobile/apptesoreria', 'Seguridad Social', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Fitxa oficial de l’app: tràmits disponibles i mètodes d’accés amb Cl@ve, certificat, SMS i biometria del dispositiu.',
    }),
    s('seg-social-proteccion-datos', 'Protección de datos — Sede electrónica de la Seguridad Social', 'https://sede.seg-social.gob.es/wps/portal/sede/sede/Inicio/informacionUtil/SS-Proteccion_de_datos/', 'Seguridad Social', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Informació general de protecció de dades de la Seguretat Social: responsables, delegat de protecció de dades, destinataris i exercici de drets. Hi enllaça els registres d’activitats de cada entitat. No hi ha una política específica de l’app.',
    }),
    s('tgss-registro-tratamiento', 'Actividades de tratamiento de datos de carácter personal de la Tesorería General de la Seguridad Social', 'https://sede.seg-social.gob.es/binarios/es/ASSI_TGSS', 'Tesorería General de la Seguridad Social', 'privacy-center', 'primary', {
      language: 'es',
      summary: 'Registre d’activitats de tractament de la TGSS, publicat el 8 de maig del 2024. Inclou «Afiliación e inscripción de empresas» i «Bases de cotización», les activitats que hi ha darrere de la vida laboral i les bases que mostra l’app, amb la base jurídica, els terminis de conservació i les mesures de l’annex II del Reial decret 311/2022.',
    }),
    s('seg-social-certificacion-ens', 'Certificación ENS e ISO de la Seguridad Social', 'https://www.seg-social.es/wps/portal/wss/internet/HerramientasWeb/0d32d60e-ab65-4cad-b27f-6f60027fe73a', 'Seguridad Social', 'audit', 'primary', {
      language: 'es',
      summary: 'Certificat de conformitat amb l’Esquema Nacional de Seguretat de categoria ALTA i certificat UNE-EN ISO/IEC 27001:2023. L’abast inclou expressament els sistemes que donen suport a la seu electrònica, TUSS i Importass. Documents publicats el 26 de gener del 2026.',
    }),
    s('seg-social-declaracion-accesibilidad', 'Accesibilidad — Sede electrónica de la Seguridad Social', 'https://sede.seg-social.gob.es/wps/portal/sede/sede/Inicio/Accesibilidad', 'Seguridad Social', 'support-doc', 'primary', {
      language: 'es',
      summary: 'La seu electrònica es declara «parcialmente conforme» amb el Reial decret 1112/2018 i enumera els incompliments de la UNE-EN 301549:2022. Declaració i revisió del 18 de maig del 2026. No s’hi esmenta l’app d’Importass.',
    }),
    s('importass-portal-web', 'Importass — Trámites y servicios', 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Categorias', 'Tesorería General de la Seguridad Social', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Portal web d’Importass amb els mateixos tràmits que l’app: vida laboral i informes, altes, baixes i modificacions, pagaments i deutes. Permet demanar que un informe s’enviï al domicili.',
    }),
    s('lgss-afiliacion', 'Real Decreto Legislativo 8/2015, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social', 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11724', 'Agencia Estatal Boletín Oficial del Estado', 'legislation', 'authority', {
      language: 'es',
      summary: 'L’article 15 estableix que l’afiliació a la Seguretat Social és obligatòria i «única para toda su vida y para todo el sistema», de manera que l’expedient d’afiliació no es pot suprimir a petició de la persona.',
    }),

    /* ── CamScanner ── */
    s('camscanner-app-store', 'CamScanner: Escanear Documentos — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id388627783', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara identificadors i dades d’ús per rastrejar, i l’identificador del dispositiu i les dades publicitàries per a publicitat de tercers.',
    }),
    s('camscanner-privacy-policy', 'CamScanner Privacy Policy', 'https://v3.camscanner.com/iOS/privacy', 'INTSIG Information Co., Ltd.', 'privacy-policy', 'primary', {
      summary: 'Política vigent des del 19 d’agost del 2026. Taula de finalitats amb base jurídica i conservació, emmagatzematge a Irlanda per a l’EEE, anuncis personalitzats amb l’IDFA, Firebase i certificacions ISO.',
    }),
    s('camscanner-kaspersky-2019', 'An advertising dropper in Google Play', 'https://securelist.com/dropper-in-google-play/92496/', 'Kaspersky (Securelist)', 'press', 'independent', {
      summary: 'Anàlisi de Kaspersky que va trobar un mòdul maliciós, Necro.n, dins d’una biblioteca publicitària de la versió Android de CamScanner el 2019.',
    }),

    /* ── Discord ── */
    s('discord-app-store', 'Discord — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id985746746', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara identificadors per rastrejar i vincula compres, cerques, contacte, contingut i ús a la identitat.',
    }),
    s('discord-privacy-policy', 'Discord Privacy Policy', 'https://discord.com/privacy', 'Discord Inc.', 'privacy-policy', 'primary', {
      summary: 'Política vigent des del 29 de setembre del 2025. Discord Netherlands BV és la responsable a l’EEE. Descriu l’escaneig de contingut, els continguts patrocinats, els controls de personalització i les transferències.',
    }),
    s('discord-delete-account', 'How to Delete your Discord Account', 'https://support.discord.com/hc/en-us/articles/212500837-How-do-I-permanently-delete-my-account', 'Discord', 'support-doc', 'primary', {
      summary: 'Passos per eliminar el compte, obligació de transferir els servidors propis i període de 15 dies abans de l’eliminació definitiva.',
    }),
    s('discord-data-request', 'Requesting a Copy of your Data', 'https://support.discord.com/hc/en-us/articles/360004027692-Requesting-a-Copy-of-your-Data', 'Discord', 'support-doc', 'primary', {
      summary: 'Sol·licitud de còpia de les dades des de Configuració > Dades i privadesa; pot trigar fins a 30 dies.',
    }),
    s('discord-retention', 'How long Discord keeps your information', 'https://support.discord.com/hc/en-us/articles/5431812448791-How-long-Discord-keeps-your-information', 'Discord', 'support-doc', 'primary', {
      summary: 'Terminis de conservació concrets: còpies de seguretat, correu i telèfon després de la baixa, comptes denunciats, consultes de suport i documents d’edat.',
    }),
    s('discord-mfa', 'Setting up Multi-Factor Authentication', 'https://support.discord.com/hc/en-us/articles/219576828-Setting-up-Multi-Factor-Authentication', 'Discord', 'support-doc', 'primary', {
      summary: 'Tipus de verificació en dos passos: claus de seguretat i claus d’accés, aplicació d’autenticació i SMS, amb codis de recuperació.',
    }),
    s('discord-security', 'Security Bug Bounty — Discord', 'https://discord.com/security', 'Discord', 'technical-doc', 'primary', {
      summary: 'Programa de recompenses de seguretat, privat a Bugcrowd des del maig del 2025.',
    }),
    s('discord-dave', 'Bringing DAVE to All Discord Platforms', 'https://discord.com/blog/bringing-dave-to-all-discord-platforms', 'Discord', 'technical-doc', 'primary', {
      summary: 'Desplegament del protocol DAVE, amb auditoria externa, que xifra d’extrem a extrem les trucades de veu i vídeo. Els missatges de text no estan xifrats d’extrem a extrem.',
    }),
    s('discord-transparency', 'Discord Safety & Transparency Reports', 'https://discord.com/safety-transparency-reports', 'Discord', 'transparency-report', 'primary', {
      summary: 'Informes de transparència sobre aplicació de normes, peticions legals i d’emergència, i informes de la DSA.',
    }),
    s('discord-5ca-breach-2025', 'Update on a Security Incident Involving Third-Party Customer Service', 'https://discord.com/press-releases/update-on-security-incident-involving-third-party-customer-service', 'Discord', 'other', 'primary', {
      summary: 'Comunicat de Discord sobre l’accés il·lícit al proveïdor d’atenció al client que va exposar unes 70.000 imatges de documents d’identitat.',
    }),
    s('discord-cnil-2022', 'The French SA fines DISCORD EUR 800.000', 'https://edpb.europa.eu/news/national-news/2023/french-sa-fines-discord-eur-800000_nl', 'European Data Protection Board', 'regulator', 'authority', {
      summary: 'Sanció de la CNIL per no definir terminis de conservació, per una política de contrasenyes feble i per no fer l’avaluació d’impacte.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ The New York Times ═══════════════════════════ */
    {
      slug: 'new-york-times',
      name: 'The New York Times',
      company: 'new-york-times-company',
      categories: ['noticies-i-mitjans'],
      tagline: 'Diari de subscripció que converteix el correu i el telèfon en identificadors publicitaris',
      summary:
        'L’etiqueta de l’App Store del New York Times declara més dades de rastreig que la majoria d’aplicacions de notícies: informació financera, ubicació, contacte, historial de cerca i de navegació. La política explica com ho fa: converteix el correu i el telèfon en identificadors publicitaris amb Unified ID 2.0 i LiveRamp. Pagar la subscripció no evita aquest tractament.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Estats Units',
      links: {
        website: 'https://www.nytimes.com/',
        privacyPolicy: 'https://help.nytimes.com/hc/en-us/articles/10940941449492-The-New-York-Times-Company-Privacy-Policy-',
        appStore: 'https://apps.apple.com/es/app/id284862083',
      },
      accountRequired: f('partial', 'editorial', [], 'És un model de mur de pagament: es poden veure alguns continguts sense registre, però la lectura habitual exigeix compte i subscripció.'),
      openSource: f('no', 'official', ['new-york-times-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El que llegeixes, cerques i jugues, sumat a la ubicació, a les dades de pagament i al correu convertit en identificador, permet fer un perfil d’interessos polítics i culturals que el diari pot vendre a anunciants dins i fora de les seves apps.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['new-york-times-app-store', 'new-york-times-privacy-policy'], note: 'Es converteix en identificador publicitari amb Unified ID 2.0 i LiveRamp ATS.' }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['new-york-times-app-store', 'new-york-times-privacy-policy'] }),
        row('nom-i-cognoms', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['new-york-times-app-store'], note: 'L’etiqueta el declara com a dada no vinculada, cosa estranya per a un compte de subscripció.' }),
        row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['new-york-times-app-store', 'new-york-times-privacy-policy'], note: 'Adreça de facturació o de lliurament en paper.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['new-york-times-app-store'], note: 'L’etiqueta inclou «informació financera» entre les dades de rastreig.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['new-york-times-app-store'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['new-york-times-app-store'] }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['new-york-times-privacy-policy'], note: 'Només amb consentiment o si s’activa el GPS; s’usa per a contingut, ofertes i publicitat.' }),
        row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['new-york-times-app-store', 'new-york-times-privacy-policy'], note: 'Inclou els articles llegits i el temps de lectura.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['new-york-times-app-store'] }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['new-york-times-app-store'], note: 'Comentaris, activitat als jocs i altres continguts de la persona usuària.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['new-york-times-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['new-york-times-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['new-york-times-privacy-policy'], note: 'Es comparteix amb socis de mesura com AppsFlyer si no es limita des del sistema operatiu.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['new-york-times-app-store'] }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['new-york-times-privacy-policy'], note: 'Segments d’interès associats a un identificador aleatori que es passa al servidor d’anuncis.' }),
        row('conviccions-i-opinions', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['investigacio-i-estadistica'], sources: ['new-york-times-privacy-policy'], note: 'Algunes enquestes pregunten per la tendència política o l’origen ètnic; la resposta és voluntària.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['new-york-times-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['new-york-times-app-store'], 'L’etiqueta declara vuit categories de dades que poden servir per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['new-york-times-privacy-policy'], 'Fa servir l’identificador publicitari del mòbil i també identificadors derivats del correu i el telèfon.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['new-york-times-privacy-policy'], 'Esmenta AppsFlyer, LiveRamp, Unified ID 2.0 i Comscore.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['new-york-times-privacy-policy']),
        profiling: f('yes', 'official', ['new-york-times-privacy-policy'], 'Crea segments d’interès i combina enquestes i ús amb aprenentatge automàtic propi o de tercers.'),
        aiTraining: f('partial', 'official', ['new-york-times-privacy-policy'], 'Els missatges directes es poden escanejar i fer servir per entrenar models de moderació, i les converses amb l’atenció al client poden servir per entrenar models d’IA.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['new-york-times-privacy-policy'], 'Comparteix correu, IP i dades del navegador amb tercers per a màrqueting i per crear audiències personalitzades o similars.'),
        intraGroupSharing: unknown('Wirecutter i The Athletic actuen com a responsables independents; la política no detalla la compartició entre capçaleres.'),
        dataBrokerSales: f('partial', 'official', ['new-york-times-privacy-policy'], 'La política reconeix «vendes o compartició» de dades en el sentit de la llei californiana i ofereix una opció per oposar-s’hi.'),
        internationalTransfers: f('yes', 'official', ['new-york-times-privacy-policy'], 'Les dades es transfereixen als Estats Units amb clàusules contractuals tipus o a proveïdors adherits al Data Privacy Framework.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['new-york-times-privacy-policy'], 'Només enumera criteris, sense terminis concrets.'),
        dataAfterDeletion: f('partial', 'official', ['new-york-times-privacy-policy'], 'La política adverteix que pot conservar dades després de tancar el compte.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['new-york-times-privacy-policy']),
        selfService: f('yes', 'official', ['new-york-times-privacy-policy'], 'Es pot eliminar el compte des de les apps natives i des de nytimes.com/account.'),
        directUrl: 'https://www.nytimes.com/account',
        difficulty: 'medium',
        requiresSupportContact: false,
        steps: [
          'Si tens una subscripció activa, cancel·la-la i espera que se n’acabin els avantatges.',
          'Entra a nytimes.com/account o a la configuració del compte de l’app i tria l’opció d’eliminar el compte.',
          'Si tens compte a The Athletic, elimina’l a part des de la seva app.',
        ],
        obstacles:
          'Cal esperar que venci la subscripció, i The Athletic pot haver creat un compte separat que no s’elimina amb el del diari.',
        dataRetained: 'La política permet conservar dades després del tancament per obligacions legals o per possibles reclamacions.',
        sources: ['new-york-times-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política reconeix el dret d’accés, però no descriu cap eina d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['new-york-times-privacy-policy'], undefined, { url: 'mailto:privacy@nytimes.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['new-york-times-privacy-policy'], 'Controls de galetes, senyal Global Privacy Control i opció per oposar-se a la publicitat segmentada i a la «venda o compartició».'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['new-york-times-privacy-policy'], 'Controls de galetes i de publicitat; l’app remet als controls de l’identificador publicitari del sistema.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de lectura de notícies sense comunicacions privades rellevants.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown('No hem trobat documentació d’un segon factor per als comptes de lectors.'),
        independentAudits: unknown(),
        bugBounty: f('no', 'official', ['new-york-times-responsible-disclosure'], 'El programa de divulgació no paga recompenses.'),
        vulnerabilityDisclosure: f('yes', 'official', ['new-york-times-responsible-disclosure'], undefined, { url: 'https://nytimes.responsibledisclosure.com/hc/en-us' }),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hem trobat sancions de protecció de dades ni filtracions que afectin lectors. La filtració de codi font del 2024 va afectar repositoris interns, no dades de persones usuàries, i no s’ha registrat com a incident.',
        openQuestions: [
          'Quins són els passos exactes per eliminar el compte dins de l’app iOS?',
          'Els controls de galetes del web s’apliquen també a l’app?',
        ],
      },
    },

    /* ═══════════════════════════ El Mundo ═══════════════════════════ */
    {
      slug: 'el-mundo',
      name: 'El Mundo',
      company: 'unidad-editorial',
      categories: ['noticies-i-mitjans'],
      tagline: 'Diari amb registre únic compartit entre les capçaleres del grup i perfil comercial per consentiment',
      summary:
        'El registre a El Mundo és el registre únic d’Unidad Editorial, compartit amb Marca, Expansión i la resta de capçaleres del grup. Si s’hi dona el consentiment, el grup en fa un perfil comercial per oferir productes de sectors tan diversos com les finances o les apostes. La política diu que no transfereix dades fora de la UE, però l’etiqueta de l’App Store declara compres, identificadors i ús per rastrejar.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'advertising',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.elmundo.es/',
        privacyPolicy: 'https://www.elmundo.es/registro/privacidad.html',
        appStore: 'https://apps.apple.com/es/app/id324300162',
      },
      accountRequired: f('partial', 'official', ['el-mundo-privacy-policy'], 'El registre i la subscripció només calen per al contingut Premium i altres serveis.'),
      openSource: f('no', 'official', ['el-mundo-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les compres, el registre i el comportament de lectura permeten al grup construir un perfil comercial que abasta totes les seves capçaleres i que es fa servir, amb consentiment, per a ofertes de tercers.',
      dataCollection: [
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['el-mundo-app-store', 'el-mundo-privacy-policy'] }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['el-mundo-app-store', 'el-mundo-privacy-policy'] }),
        row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils'], sources: ['el-mundo-app-store'], note: 'L’etiqueta la declara per a publicitat i màrqueting del desenvolupador.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['el-mundo-app-store'] }),
        row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['el-mundo-app-store'] }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['el-mundo-app-store'], note: 'L’etiqueta declara missatges de text de la persona usuària per al funcionament de l’app.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['el-mundo-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['el-mundo-app-store'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['el-mundo-cookies-policy'], note: 'Galetes d’anàlisi i de publicitat comportamental, desactivables des del panell de configuració.' }),
        row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['el-mundo-privacy-policy'], note: 'Perfil comercial que elabora Unidad Editorial, S.A. amb el consentiment de la persona registrada.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['el-mundo-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['el-mundo-app-store'], 'L’etiqueta declara compres, identificadors i dades d’ús per rastrejar.'),
        advertisingIdentifiers: unknown('L’etiqueta parla de dades publicitàries, però no concreta l’ús de l’identificador publicitari del sistema.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['el-mundo-cookies-policy'], 'Galetes de publicitat comportamental i reproductors de tercers com YouTube.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['el-mundo-cookies-policy', 'el-mundo-app-store']),
        profiling: f('yes', 'official', ['el-mundo-privacy-policy'], 'Perfil comercial amb consentiment per a accions personalitzades sobre productes propis i de tercers.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['el-mundo-privacy-policy'], 'Proveïdors tecnològics i agències de màrqueting com a encarregats; la política diu que no es comuniquen dades a altres tercers llevat d’obligació legal.'),
        intraGroupSharing: f('yes', 'official', ['el-mundo-privacy-policy'], 'Registre únic i perfil comercial gestionats per Unidad Editorial, S.A. per a totes les capçaleres.'),
        dataBrokerSales: f('no', 'official', ['el-mundo-privacy-policy']),
        internationalTransfers: f('no', 'official', ['el-mundo-privacy-policy'], 'La política diu que no preveu transferències internacionals, tot i que les galetes publicitàries de tercers poden implicar-ne.', { mechanism: 'none' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['el-mundo-privacy-policy'], 'Només criteris generals, sense terminis concrets.'),
        dataAfterDeletion: f('partial', 'official', ['el-mundo-privacy-policy'], 'Es conserven dades per a obligacions legals i possibles responsabilitats.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['el-mundo-privacy-policy']),
        selfService: unknown('No hem pogut verificar una opció de baja dins del compte; la política remet al correu lopd@unidadeditorial.es.'),
        difficulty: 'unknown',
        steps: [
          'Si tens El Mundo Premium, cancel·la la subscripció des de «Mis suscripciones», o des de l’App Store si la vas contractar allà.',
          'Escriu a lopd@unidadeditorial.es amb la referència «www.elmundo.es», el nom, els cognoms i l’adreça postal, i demana la supressió.',
        ],
        obstacles: 'La via documentada a la política és el correu electrònic, i cal identificar les capçaleres del grup a què es refereix la sol·licitud.',
        dataRetained: 'Dades necessàries per a obligacions legals derivades de la relació contractual.',
        sources: ['el-mundo-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['el-mundo-privacy-policy'], 'La portabilitat es reconeix, però cal demanar-la per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['el-mundo-privacy-policy'], 'Per correu i amb delegat de protecció de dades a dpo@unidadeditorial.es.', { url: 'mailto:lopd@unidadeditorial.es' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['el-mundo-cookies-policy', 'el-mundo-privacy-policy'], 'Panell de galetes al web i preferències de publicitat al compte.'),
        telemetryOptOut: f('partial', 'official', ['el-mundo-cookies-policy'], 'Al web es poden desactivar les galetes d’anàlisi; no consta un control equivalent a l’app.'),
        granularControls: f('partial', 'official', ['el-mundo-cookies-policy']),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de lectura de notícies.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hem trobat sancions de l’AEPD contra Unidad Editorial ni filtracions documentades. Premsa general inclou El Mundo entre els diaris amb el model «acceptar o pagar», però la política de galetes vigent diu que les galetes publicitàries es poden rebutjar sense afectar el web i no ho afirmem a la fitxa.',
        openQuestions: [
          'Hi ha una opció per eliminar el compte dins de l’àrea privada o de l’app?',
          'Com s’explica la declaració de «no transferències internacionals» amb galetes de Google?',
        ],
      },
    },

    /* ═══════════════════════════ Financial Times ═══════════════════════════ */
    {
      slug: 'financial-times',
      name: 'Financial Times',
      company: 'financial-times',
      categories: ['noticies-i-mitjans'],
      tagline: 'Diari econòmic que dedueix el gènere i l’edat i creua subscriptors amb xarxes socials',
      summary:
        'El Financial Times dedueix el gènere i la franja d’edat a partir del nom i el tractament, i grava a la web els moviments, els clics i el text que s’escriu. També comparteix subscriptors amb xarxes socials i serveis de creuament de dades per fer publicitat i audiències similars. D’altra banda, la política té una taula de terminis de conservació més concreta que la de molts diaris.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Regne Unit',
      links: {
        website: 'https://www.ft.com/',
        privacyPolicy: 'https://help.ft.com/help/legal-privacy/privacy/',
        appStore: 'https://apps.apple.com/es/app/id1200842933',
      },
      accountRequired: f('partial', 'editorial', [], 'Mur de pagament estricte: sense compte i subscripció només es veuen titulars i poca cosa més.'),
      openSource: f('no', 'official', ['financial-times-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Càrrec, empresa, cartera d’inversions i hàbits de lectura revelen el perfil professional i econòmic de qui llegeix, que interessa especialment a la publicitat financera.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['financial-times-app-store', 'financial-times-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['financial-times-app-store', 'financial-times-privacy-policy'], note: 'El correu, codificat, es fa servir a les «sales rooms» per creuar audiències amb anunciants.' }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['financial-times-app-store'] }),
        row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['financial-times-app-store', 'financial-times-privacy-policy'], note: 'Es comparteix amb distribuïdors per lliurar el diari en paper.' }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['financial-times-privacy-policy'] }),
        row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['financial-times-privacy-policy'], note: 'Es dedueix del tractament i el nom si no es dona; es pot demanar que no es faci escrivint a privacy.officer@ft.com.' }),
        row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['financial-times-privacy-policy'] }),
        row('origen-etnic-o-nacionalitat', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['investigacio-i-estadistica'], sources: ['financial-times-privacy-policy'], note: 'Només si es respon voluntàriament a enquestes de diversitat.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['financial-times-app-store', 'financial-times-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['financial-times-app-store'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['financial-times-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['financial-times-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['financial-times-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['financial-times-app-store', 'financial-times-privacy-policy'], note: 'Al web es graven el desplaçament, els clics i el text introduït, excepte les dades de pagament.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['financial-times-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['financial-times-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('partial', 'official', ['financial-times-app-store', 'financial-times-privacy-policy'], 'L’etiqueta no declara rastreig, però la política descriu creuaments amb correus codificats i audiències compartides amb xarxes socials.'),
        advertisingIdentifiers: unknown(),
        thirdPartyTrackersPresent: f('yes', 'official', ['financial-times-privacy-policy'], 'Galetes de socis publicitaris i eines d’anàlisi.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['financial-times-privacy-policy']),
        profiling: f('yes', 'official', ['financial-times-privacy-policy'], 'Dedueix gènere, edat i interessos a partir de les dades del compte i de l’ús.'),
        aiTraining: unknown('La política descriu l’ús d’IA per a recomanacions, publicitat i cerca, i la compartició amb proveïdors d’IA, però no si s’entrenen models amb les dades.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['financial-times-privacy-policy'], 'Proveïdors, anunciants, xarxes socials, clients institucionals i socis corporatius.'),
        intraGroupSharing: f('yes', 'official', ['financial-times-privacy-policy'], 'Amb la matriu Nikkei per a ofertes conjuntes i amb altres societats del grup.'),
        dataBrokerSales: unknown(),
        internationalTransfers: f('yes', 'official', ['financial-times-privacy-policy'], 'Les dades es poden tractar fora del Regne Unit i de l’EEE; la política només cita l’acord britànic de transferències com a exemple de garantia.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['financial-times-privacy-policy'], 'Taula amb terminis per categoria.'),
        dataAfterDeletion: f('partial', 'official', ['financial-times-privacy-policy'], 'Facturació, consultes, comunicacions i registres d’ús indegut es guarden 7 anys.'),
        periods: [
          { dataType: 'dades-de-pagament', period: '7 anys', sources: ['financial-times-privacy-policy'] },
          { dataType: 'interaccions-i-us', period: '36 mesos, després agregades', sources: ['financial-times-privacy-policy'] },
          { dataType: 'publicacions-i-comentaris', period: 'Mentre l’article sigui publicat', sources: ['financial-times-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['financial-times-privacy-policy'], 'La política reconeix el dret de supressió.'),
        selfService: unknown('La política remet al compte o a l’atenció al client; no hem pogut verificar si hi ha un botó d’eliminació.'),
        difficulty: 'unknown',
        steps: [
          'Entra al compte de ft.com o contacta amb Customer Care i demana la supressió de les dades.',
          'Si no respon, escriu al delegat de protecció de dades a privacy.officer@ft.com.',
        ],
        dataRetained: 'Facturació, historial d’atenció al client i comunicacions durant 7 anys.',
        sources: ['financial-times-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['financial-times-privacy-policy'], 'El dret d’accés es reconeix, sense eina d’exportació descrita.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['financial-times-privacy-policy'], 'Delegat de protecció de dades i representant a la UE a Dublín.', { url: 'mailto:privacy.officer@ft.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['financial-times-privacy-policy'], 'Des de «Manage Cookies» al peu de la web; també es pot demanar per correu no ser inclòs a les audiències de xarxes socials.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['financial-times-privacy-policy'], 'Galetes, preferències de màrqueting i personalització al compte; algunes oposicions només per correu.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de lectura de notícies.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses públic.'),
        vulnerabilityDisclosure: f('yes', 'official', ['financial-times-security-txt'], undefined, { url: 'https://www.ft.com/vulnerability-report' }),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes: 'No hem trobat sancions ni filtracions documentades. La discrepància principal és entre l’etiqueta, que no declara rastreig, i la compartició d’audiències amb xarxes socials que descriu la política.',
        openQuestions: [
          'L’app permet eliminar el compte directament, com exigeix Apple, o cal passar per l’atenció al client?',
          'Quin mecanisme de transferència fa servir per a les dades de persones de l’EEE?',
        ],
      },
    },

    /* ═══════════════════════════ RAC1 ═══════════════════════════ */
    {
      slug: 'rac1',
      name: 'RAC1',
      company: 'radiocat-xxi',
      categories: ['noticies-i-mitjans'],
      tagline: 'Ràdio en català que ven perfils publicitaris compartits amb La Vanguardia i Mundo Deportivo',
      summary:
        'RAC1 no demana compte per escoltar la ràdio, però amb consentiment crea perfils publicitaris que comparteix amb La Vanguardia, Mundo Deportivo i anunciants. Els pot cedir a empreses triades perquè en facin les seves pròpies campanyes. La política és detallada: explica cada finalitat, la base legal i el termini segons el marc de consentiment de l’IAB. Algun soci pot fer geolocalització precisa o identificar el dispositiu per l’empremta digital.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'advertising',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.rac1.cat/',
        privacyPolicy: 'https://www.rac1.cat/politica-privacitat',
        appStore: 'https://apps.apple.com/es/app/id413261937',
      },
      accountRequired: f('no', 'official', ['rac1-privacy-policy'], 'El registre és opcional; es pot escoltar i llegir sense identificar-se.'),
      openSource: f('no', 'official', ['rac1-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Els programes que escoltes, les notícies que llegeixes i la ubicació, si l’autoritzes, alimenten un perfil publicitari que el grup comparteix entre les seves capçaleres i pot cedir a tercers.',
      dataCollection: [
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['rac1-app-store', 'rac1-privacy-policy'] }),
        row('identificador-publicitari', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['rac1-privacy-policy'], note: 'Només si se n’autoritza l’ús.' }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'prestacio-del-servei'], sources: ['rac1-privacy-policy'], note: 'Es comparteix amb anunciants i amb el grup si s’accepta a l’Àrea de Privacitat.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['rac1-privacy-policy'] }),
        row('xarxa-i-connectivitat', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['rac1-privacy-policy'], note: 'Tipus de xarxa i operador de telefonia.' }),
        row('ubicacio-precisa', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['rac1-privacy-policy'], note: 'Latitud i longitud si s’autoritza; algun soci pot fer-ne geolocalització precisa.' }),
        row('historial-de-navegacio', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'mesura-i-analisi-dus'], sources: ['rac1-privacy-policy'], note: 'Els continguts visitats, identificats per l’URL.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['rac1-app-store'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['rac1-privacy-policy'] }),
        row('interessos-inferits', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['rac1-privacy-policy'], note: 'Perfils publicitaris amb consentiment, conservats fins a 12 mesos.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['rac1-privacy-policy'], note: 'Només si et registres; les dades del registre poden enriquir el perfil publicitari.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['rac1-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['rac1-app-store', 'rac1-privacy-policy'], 'L’etiqueta declara identificadors per rastrejar, i la política preveu fer servir els perfils en portals i apps de tercers.'),
        advertisingIdentifiers: f('yes', 'official', ['rac1-privacy-policy'], 'Amb autorització prèvia.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['rac1-privacy-policy'], 'Proveïdors adherits al TCF de l’IAB, serveis de Google i la xarxa de distribució d’Akamai.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['rac1-privacy-policy'], 'També a la publicitat d’àudio del directe i dels pòdcasts.'),
        profiling: f('yes', 'official', ['rac1-privacy-policy'], 'Perfils publicitaris i de continguts basats en el consentiment.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['rac1-privacy-policy'], 'Anunciants, agències i serveis de publicitat, amb consentiment.'),
        intraGroupSharing: f('yes', 'official', ['rac1-privacy-policy'], 'Amb La Vanguardia i Mundo Deportivo, amb un identificador únic per a les persones registrades.'),
        dataBrokerSales: f('partial', 'official', ['rac1-privacy-policy'], 'Amb consentiment, cedeix perfils publicitaris a empreses triades perquè els facin servir en les seves pròpies campanyes.'),
        internationalTransfers: f('yes', 'official', ['rac1-privacy-policy'], undefined, { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['rac1-privacy-policy'], 'Cada finalitat té un termini: 38 mesos per a estadístiques, fins a 12 mesos per a perfils i 90 dies per a la xarxa de distribució.'),
        dataAfterDeletion: unknown(),
        periods: [
          { dataType: 'interessos-inferits', period: 'Fins a 12 mesos', sources: ['rac1-privacy-policy'] },
          { dataType: 'interaccions-i-us', period: '38 mesos', sources: ['rac1-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['rac1-privacy-policy'], 'El dret de supressió s’exerceix per correu; el registre és opcional.'),
        selfService: unknown('La política permet gestionar les dades del registre des de la capçalera del web, però no concreta si hi ha un botó d’eliminació.'),
        difficulty: 'unknown',
        steps: [
          'Per a les dades de navegació, obre l’Àrea de Privacitat al peu de la pàgina i retira els consentiments.',
          'Per al registre, escriu a protecciodedades@rac1.cat i demana’n la supressió.',
        ],
        sources: ['rac1-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['rac1-privacy-policy'], 'Portabilitat per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['rac1-privacy-policy'], 'Delegat de protecció de dades del grup a dpo@grupogodo.com.', { url: 'mailto:protecciodedades@rac1.cat' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['rac1-privacy-policy'], 'Àrea de Privacitat amb control per finalitat i per proveïdor.'),
        telemetryOptOut: f('yes', 'official', ['rac1-privacy-policy'], 'Es pot oposar a les estadístiques des de l’Àrea de Privacitat.'),
        granularControls: f('yes', 'official', ['rac1-privacy-policy']),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de ràdio i notícies.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política és la del web i no distingeix l’app. La mesura d’audiència es fa per interès legítim, activa per defecte, i la resta de finalitats publicitàries amb consentiment. No hem trobat sancions ni filtracions.',
        openQuestions: ['L’app mostra la mateixa Àrea de Privacitat que el web?'],
      },
    },

    /* ═══════════════════════════ ChatGPT ═══════════════════════════ */
    {
      slug: 'chatgpt',
      name: 'ChatGPT',
      company: 'openai-ireland',
      categories: ['assistents-d-ia'],
      tagline: 'Assistent d’IA que entrena amb les converses i ara les fa servir per triar anuncis',
      summary:
        'Per defecte, ChatGPT pot entrenar models amb les converses, llevat que la persona s’hi oposi a la configuració. Als plans gratuït i Go hi ha anuncis: amb consentiment es trien a partir de converses anteriors, i sense consentiment, a partir del context de la conversa, la ubicació i l’hora. Els controls de privadesa són amplis i l’eliminació del compte és autoservei. OpenAI publica informes de peticions governamentals des del 2025.',
      platforms: ['ios', 'android', 'web', 'windows', 'macos'],
      businessModel: 'freemium',
      jurisdiction: 'Irlanda (EEE) i Estats Units',
      links: {
        website: 'https://chatgpt.com/',
        privacyPolicy: 'https://openai.com/policies/eu-privacy-policy/',
        privacyCenter: 'https://privacy.openai.com/',
        appStore: 'https://apps.apple.com/es/app/id6448311069',
      },
      accountRequired: f('partial', 'official', ['chatgpt-delete-account'], 'Es pot fer servir sense iniciar sessió, amb una sola conversa alhora; per desar-les cal compte.'),
      openSource: f('no', 'official', ['chatgpt-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les converses amb un assistent sovint tracten de salut, feina, relacions o dubtes legals. Amb la memòria activa, ChatGPT en guarda detalls entre converses, i als plans amb anuncis aquest context pot servir per triar publicitat.',
      dataCollection: [
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia', 'publicitat-personalitzada', 'moderacio-de-continguts'], sources: ['chatgpt-privacy-policy'], note: 'Les instruccions i els fitxers pujats. S’usen per entrenar models si no s’hi oposa la persona, i per triar anuncis si s’hi dona el consentiment.' }),
        row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['chatgpt-privacy-policy'] }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['chatgpt-privacy-policy'] }),
        row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['chatgpt-app-store', 'chatgpt-privacy-policy'] }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['chatgpt-app-store'], note: 'L’etiqueta declara dades de salut i forma física per a anàlisi i personalització.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['chatgpt-app-store', 'chatgpt-privacy-policy'] }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['chatgpt-app-store'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['chatgpt-app-store', 'chatgpt-delete-account'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['compliment-legal'], sources: ['chatgpt-privacy-policy'], note: 'Forma part de la informació del compte i serveix per estimar l’edat.' }),
        row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['chatgpt-privacy-policy'], note: 'Si es verifica l’edat o la identitat amb un proveïdor extern.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['chatgpt-app-store', 'chatgpt-privacy-policy'], note: 'Deduïda de la IP. També serveix per als anuncis genèrics.' }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['chatgpt-privacy-policy'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['chatgpt-app-store', 'chatgpt-privacy-policy'], note: 'Les cerques es poden compartir amb socis de cerca i de compres.' }),
        row('historial-de-navegacio', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['chatgpt-privacy-policy'], note: 'Només si es fa servir el navegador integrat.' }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['chatgpt-privacy-policy'], note: 'Si es connecta l’agenda, es puja per veure qui més fa servir el servei.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['chatgpt-privacy-policy'] }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['chatgpt-privacy-policy'], note: 'Historial i interessos publicitaris dels plans gratuït i Go.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada', 'millora-del-producte'], sources: ['chatgpt-app-store', 'chatgpt-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['chatgpt-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['chatgpt-app-store', 'chatgpt-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['chatgpt-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['chatgpt-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['chatgpt-app-store'], 'L’etiqueta no declara rastreig entre apps, tot i que declara dades per a publicitat de tercers dins del servei.'),
        advertisingIdentifiers: unknown('La política no esmenta l’identificador publicitari del sistema.'),
        thirdPartyTrackersPresent: unknown(),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['chatgpt-privacy-policy'], 'Als plans gratuït i Go. Amb consentiment, els anuncis es personalitzen amb converses anteriors i dades dels anunciants; sense consentiment, s’hi mostren anuncis genèrics per interès legítim.', {
          optOutUrl: 'https://chatgpt.com/#settings',
        }),
        profiling: f('yes', 'official', ['chatgpt-privacy-policy'], 'Memòria entre converses i interessos publicitaris.'),
        aiTraining: f('yes', 'official', ['chatgpt-privacy-policy'], 'El contingut es pot fer servir per entrenar els models llevat que la persona s’hi oposi als controls de dades. Els xats temporals no s’hi fan servir.', {
          optOutUrl: 'https://chatgpt.com/#settings/DataControls',
        }),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['chatgpt-privacy-policy'], 'Proveïdors, socis de cerca i compres, i informes agregats per als anunciants.'),
        intraGroupSharing: f('yes', 'official', ['chatgpt-privacy-policy']),
        dataBrokerSales: unknown('La política no parla de venda de dades.'),
        internationalTransfers: f('yes', 'official', ['chatgpt-privacy-policy'], 'Tractament als Estats Units amb decisions d’adequació o clàusules contractuals tipus.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: f('yes', 'official', ['openai-government-requests-2025h2'], 'Informes semestrals des del 2025.', {
          url: 'https://cdn.openai.com/trust-and-transparency/report-2025h2-government-requests-for-user-data.pdf',
        }),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['chatgpt-privacy-policy'], 'Esborrat en 30 dies de les dades eliminades i dels xats temporals, però sense terminis per a la resta.'),
        dataAfterDeletion: f('partial', 'official', ['chatgpt-privacy-policy', 'chatgpt-preservation-order-2025'], 'Les dades ja desidentificades per entrenar no s’esborren, i es conserven les de pagament, el registre de la sol·licitud i les retingudes per obligació legal. Entre maig i setembre del 2025 una ordre judicial va obligar a conservar converses esborrades.'),
        periods: [
          { dataType: 'contingut-de-missatges', period: '30 dies després d’esborrar-les o en xats temporals', sources: ['chatgpt-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['chatgpt-delete-account']),
        selfService: f('yes', 'official', ['chatgpt-delete-account'], 'Des de la configuració de l’app o el web, o des del portal de privadesa si no es pot iniciar sessió.'),
        directUrl: 'https://privacy.openai.com/',
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Si pagues la subscripció a l’App Store, cancel·la-la primer: eliminar el compte no la cancel·la.',
          'Obre Configuració > Compte.',
          'Al costat de «Delete account», tria «Delete».',
          'Escriu el correu o el telèfon del compte i «DELETE», i confirma «Permanently delete my account».',
        ],
        obstacles: 'L’eliminació és definitiva i no permet reactivar el compte. El mateix correu no es pot reutilitzar fins al cap de 30 dies.',
        dataRetained: 'Dades eliminades en 30 dies, llevat de les desidentificades per entrenar i de les que calgui conservar per seguretat o obligació legal.',
        sources: ['chatgpt-delete-account', 'chatgpt-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['chatgpt-privacy-policy'], 'Exportació de l’historial des dels controls de dades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['chatgpt-privacy-policy'], 'Portal de privadesa i dsar@openai.com; també es poden demanar correccions de dades inexactes generades pel model.', { url: 'https://privacy.openai.com/' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['chatgpt-privacy-policy'], 'Controls de publicitat a la configuració; la personalització requereix consentiment.'),
        telemetryOptOut: unknown(),
        granularControls: f('yes', 'official', ['chatgpt-privacy-policy'], 'Entrenament, memòria, xats temporals, publicitat i galetes per separat.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('L’assistent ha de processar el contingut al servidor per respondre; el xifratge d’extrem a extrem no és aplicable en aquest model.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown('Les garanties de xifratge publicades es refereixen als plans d’empresa.'),
        mfa: f('yes', 'official', ['chatgpt-mfa'], undefined, { methods: ['totp', 'app-push', 'sms', 'passkey'] }),
        independentAudits: f('partial', 'official', ['openai-trust-portal'], 'SOC 2 Type 2 i ISO 27001 per a l’API i els plans d’empresa, no per al ChatGPT de consum.'),
        bugBounty: f('yes', 'official', ['openai-bug-bounty'], undefined, { url: 'https://bugcrowd.com/engagements/openai' }),
        vulnerabilityDisclosure: f('yes', 'official', ['openai-security-txt']),
      },
      alternatives: [
        {
          app: 'claude',
          comparability: 'equivalent',
          rationale: 'Assistent d’IA general amb funcions similars que no mostra publicitat i no declara dades per a publicitat de tercers a l’etiqueta de l’App Store.',
          tradeOffs: 'També entrena amb les converses per defecte i, si no t’hi oposes, les conserva fins a cinc anys.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política europea s’ha llegit en una còpia de l’arxiu d’Internet del 2026, perquè el web d’OpenAI bloqueja la lectura automàtica. La sanció italiana es va anul·lar per un motiu de competència, no de fons, i així consta a l’incident.',
        openQuestions: [
          'Quin format té l’exportació de dades de ChatGPT?',
          'El ChatGPT de consum té alguna auditoria de seguretat independent pròpia?',
        ],
      },
    },

    /* ═══════════════════════════ Claude ═══════════════════════════ */
    {
      slug: 'claude',
      name: 'Claude',
      company: 'anthropic-ireland',
      categories: ['assistents-d-ia'],
      tagline: 'Assistent d’IA sense anuncis que conserva cinc anys les converses si no t’oposes a l’entrenament',
      summary:
        'Claude no mostra publicitat, però des de l’octubre del 2025 fa servir les converses per entrenar models llevat que la persona s’hi oposi. En aquest cas les conserva fins a cinc anys, en lloc de 30 dies. El missatge que ho demanava tenia l’interruptor activat per defecte. Els terminis de conservació estan detallats i l’empresa té certificacions de seguretat, però no documenta cap segon factor d’autenticació propi.',
      platforms: ['ios', 'android', 'web', 'windows', 'macos'],
      businessModel: 'freemium',
      jurisdiction: 'Irlanda (EEE) i Estats Units',
      links: {
        website: 'https://claude.ai/',
        privacyPolicy: 'https://www.anthropic.com/legal/privacy',
        privacyCenter: 'https://privacy.claude.com/',
        appStore: 'https://apps.apple.com/es/app/id6473753684',
      },
      accountRequired: f('yes', 'editorial', [], 'L’app no ofereix cap mode sense sessió: cal entrar amb el correu, Google o Apple.'),
      openSource: f('no', 'official', ['claude-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Com amb qualsevol assistent, les converses poden revelar salut, feina, finances i relacions. Si s’accepta l’entrenament, en queda una còpia desidentificada durant anys fora de l’abast de l’eliminació.',
      dataCollection: [
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia', 'moderacio-de-continguts'], sources: ['claude-privacy-policy', 'claude-app-store'], note: 'S’usa per entrenar models llevat que la persona s’hi oposi; les converses marcades per seguretat s’usen igualment.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['claude-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['claude-app-store', 'claude-privacy-policy'], note: 'L’etiqueta la declara també per a publicitat pròpia d’Anthropic.' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['claude-app-store'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['claude-app-store', 'claude-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['claude-app-store', 'claude-privacy-policy'], note: 'Deduïda de la IP.' }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['claude-privacy-policy'], note: 'Només si cal verificar l’edat o la identitat.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['claude-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['claude-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['claude-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['claude-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['claude-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['claude-app-store'] }),
        row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['claude-app-store'], note: 'L’etiqueta no declara dades per a publicitat de tercers ni per rastrejar.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['claude-app-store']),
        advertisingIdentifiers: f('no', 'official', ['claude-app-store']),
        thirdPartyTrackersPresent: unknown('La política remet a la de galetes per al web i no detalla SDK de tercers a l’app.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['claude-privacy-policy', 'claude-app-store'], 'No hi ha anuncis dins del servei, però Anthropic fa servir dades per anunciar els seus productes en altres llocs, i s’hi pot oposar.'),
        profiling: unknown(),
        aiTraining: f('yes', 'official', ['claude-privacy-policy', 'claude-consumer-terms-2025'], 'Entrena amb les converses llevat que la persona s’hi oposi; les marcades per revisió de seguretat s’usen igualment.', {
          optOutUrl: 'https://claude.ai/settings/data-privacy-controls',
        }),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['claude-privacy-policy'], 'Proveïdors, integracions autoritzades per la persona i l’organització si es fa servir un correu de feina.'),
        intraGroupSharing: f('yes', 'official', ['claude-privacy-policy']),
        dataBrokerSales: f('no', 'official', ['claude-privacy-policy'], 'Anthropic declara que no «ven» dades personals en el sentit legal.'),
        internationalTransfers: f('yes', 'official', ['claude-privacy-policy'], undefined, { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: f('yes', 'official', ['anthropic-transparency-hub'], 'Dades periòdiques de peticions governamentals i d’aplicació de normes.', { url: 'https://www.anthropic.com/transparency' }),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['claude-retention']),
        dataAfterDeletion: f('partial', 'official', ['claude-retention'], 'Les converses esborrades desapareixen dels servidors en 30 dies, però les ja incorporades a l’entrenament es conserven desidentificades fins a 5 anys.'),
        periods: [
          { dataType: 'contingut-de-missatges', period: '30 dies després d’esborrar-les; fins a 5 anys si s’accepta l’entrenament', sources: ['claude-retention'] },
          { dataType: 'contingut-de-missatges', period: 'Fins a 2 anys si es marquen per infracció; 7 anys les puntuacions de seguretat', sources: ['claude-retention'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['claude-delete-account']),
        selfService: f('yes', 'official', ['claude-delete-account']),
        directUrl: 'https://claude.ai/settings/account',
        difficulty: 'medium',
        requiresSupportContact: false,
        steps: [
          'Si tens un pla Pro o Max, cancel·la la subscripció a Facturació i espera que acabi el període pagat.',
          'Toca les teves inicials o el nom a la cantonada inferior esquerra i obre Configuració.',
          'A Compte, tria «Delete Account» i segueix les indicacions.',
        ],
        obstacles: 'Amb un pla de pagament no es pot eliminar el compte fins que venç el període en curs. En alguns casos cal contactar amb l’equip de suport.',
        dataRetained: 'Les converses fetes servir per entrenar es conserven desidentificades fins a 5 anys.',
        sources: ['claude-delete-account', 'claude-retention'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['claude-export-data'], 'Des de Configuració > Privadesa al web o a l’escriptori, no des de l’app mòbil.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['claude-privacy-policy'], 'Delegat de protecció de dades a dpo@anthropic.com.', { url: 'mailto:privacy@anthropic.com', responseTimeDays: 30 }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['claude-privacy-policy'], 'Només per a la publicitat que Anthropic fa dels seus productes.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['claude-consumer-terms-2025'], 'Interruptor d’entrenament que es pot canviar en qualsevol moment.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'press', ['claude-training-popup-2025'], 'El missatge de canvi de condicions destacava el botó d’acceptar i deixava petit l’interruptor d’entrenament, activat per defecte.'),
        darkPatternList: [
          {
            type: 'preselected',
            severity: 'medium',
            description: 'L’interruptor que autoritzava l’entrenament amb les converses apareixia activat per defecte, sota un botó «Accept» molt més visible.',
            sources: ['claude-training-popup-2025'],
          },
        ],
      },
      security: {
        e2ee: na('L’assistent ha de processar el contingut al servidor per respondre; el xifratge d’extrem a extrem no és aplicable en aquest model.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown('No hem trobat documentació oficial d’un segon factor als comptes de consum; l’accés és per enllaç al correu, Google o Apple.'),
        independentAudits: f('yes', 'official', ['anthropic-certifications'], 'SOC 2 Type II, ISO 27001:2022 i ISO/IEC 42001:2023.'),
        bugBounty: f('yes', 'official', ['anthropic-hackerone'], undefined, { url: 'https://hackerone.com/anthropic' }),
        vulnerabilityDisclosure: f('yes', 'official', ['anthropic-security-txt'], undefined, { url: 'https://www.anthropic.com/responsible-disclosure-policy' }),
      },
      alternatives: [
        {
          app: 'chatgpt',
          comparability: 'equivalent',
          rationale: 'Assistent d’IA general amb funcions similars i un segon factor d’autenticació documentat.',
          tradeOffs: 'Mostra publicitat als plans gratuït i Go i també entrena amb les converses per defecte.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'El gener del 2024 un contractista va enviar per error a un tercer noms de clients i saldos de crèdit de l’API; no afectava persones usuàries de Claude i no l’hem registrat com a incident. Nota d’independència: aquesta fitxa l’ha redactada un model d’Anthropic. S’ha aplicat el mateix criteri que a ChatGPT i caldria que la revisés una persona.',
        openQuestions: [
          'Claude ofereix cap segon factor propi per als comptes de consum?',
          'En quin format es lliura l’exportació de dades?',
        ],
      },
    },

    /* ═══════════════════════════ Cl@ve ═══════════════════════════ */
    {
      slug: 'clave',
      name: 'Cl@ve',
      company: 'agencia-tributaria',
      categories: ['administracio-publica', 'autenticacio-i-seguretat'],
      tagline: 'Identificació amb l’Administració que guarda poques dades i fa l’analítica només amb permís',
      summary:
        'L’app Cl@ve serveix per identificar-se i signar tràmits amb les administracions. Tracta dades molt sensibles, com el DNI o el NIE, el telèfon i el correu, però la política diu que només les fa servir per a aquest sistema. L’analítica de Firebase només s’activa si la persona ho autoritza. Es pot renunciar al servei des de la mateixa app, i l’app està disponible en català.',
      platforms: ['ios', 'android'],
      businessModel: 'public-service',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://sede.agenciatributaria.gob.es/',
        privacyPolicy: 'https://sede.agenciatributaria.gob.es/Sede/politicaprivacidadappclave.html',
        appStore: 'https://apps.apple.com/es/app/id842624380',
      },
      accountRequired: f('yes', 'official', ['clave-privacy-policy'], 'Cal estar registrat a Cl@ve i activar el dispositiu amb el DNI o el NIE i un codi per SMS.'),
      openSource: unknown('No hem trobat el codi publicat.'),
      publicService: {
        isPublicService: true,
        administrationLevel: 'state',
        legalBasis: f('partial', 'official', ['clave-privacy-policy', 'aeat-rat-clave', 'aeat-rat-apps-moviles'], 'La política diu que el tractament es basa en el consentiment i enumera les normes del servei (l’Ordre HAP/2142/2014, que crea el fitxer Cl@ve, l’Ordre PRE/1838/2014 i la Resolució de 14 de desembre del 2015) sense concretar-ne cap article. El registre d’activitats hi afegeix que l’Agència hi actua com a encarregada del tractament, i per a les aplicacions mòbils invoca l’article 6.1.a del RGPD.', {
          norm: 'Ordre PRE/1838/2014, de 8 d’octubre, que publica l’Acord del Consell de Ministres de 19 de setembre del 2014 pel qual s’aprova Cl@ve',
        }),
        processingRegistry: f('yes', 'official', ['aeat-rat-clave', 'aeat-rat-apps-moviles'], 'El registre d’activitats de tractament de l’Agència és públic i hi consten les activitats 5.13 «Registro del Sistema de Identificación Cl@ve», 5.24 «Aplicaciones móviles de la AEAT» i 5.97 «Autenticación del Sistema de Identificación Cl@ve PIN».', {
          url: 'https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/procedimientos-no-tributarios/tratamiento-datos-personales/tratamiento-datos-personales/informacion-interesado-sobre-proteccion-datos/5-registro-actividades-tratamiento.html',
        }),
        dpia: unknown('No hem trobat publicada cap avaluació d’impacte relativa a la protecció de dades del sistema Cl@ve ni de l’app.'),
        ensConformity: f('partial', 'official', ['clave-privacy-policy', 'aeat-medidas-seguridad'], 'La política de l’app diu que s’apliquen les mesures que exigeix el Reial decret 311/2022 i la informació de protecció de dades descriu un sistema de gestió de la seguretat conforme a l’ENS, però no hem trobat publicada cap declaració ni certificació de conformitat amb la categoria del sistema.'),
        dpo: f('yes', 'official', ['clave-privacy-policy'], 'La política identifica el delegat de protecció de dades de l’Agència amb adreça de contacte.', { contact: 'dpd@correo.aeat.es' }),
        offlineAlternative: f('yes', 'official', ['clave-privacy-policy', 'clave-renunciar'], 'Les gestions de Cl@ve es presten igual des de la seu electrònica de l’Agència o de la Seguretat Social sense l’app, i el registre a Cl@ve i la renúncia també es poden fer presencialment a les oficines de registre.'),
        accessibilityStatement: f('partial', 'official', ['aeat-declaracion-accesibilidad'], 'La seu electrònica es declara parcialment conforme amb el Reial decret 1112/2018, amb declaració del 23 de gener del 2025 revisada el 6 d’octubre del 2025, però només cobreix els webs: no hi ha declaració d’accessibilitat de l’app.', {
          url: 'https://sede.agenciatributaria.gob.es/Sede/condiciones-uso-sede-electronica/accesibilidad/declaracion-accesibilidad.html',
        }),
        mandatoryRetention: f('no', 'official', ['clave-renunciar', 'clave-privacy-policy'], 'Cap norma obliga a mantenir-se registrat a Cl@ve: s’hi pot renunciar des de l’app o des de la seu electrònica, i les dades desades al mòbil s’esborren amb «desactivar dispositivo».'),
      },
      dataSummary:
        'Les dades identifiquen la persona de manera inequívoca i donen accés a les seves gestions amb l’Administració: impostos, Seguretat Social, salut. El risc principal és la usurpació d’identitat, més que la publicitat.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['clave-privacy-policy'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['clave-privacy-policy'], note: 'DNI o NIE amb la data de validesa o el número de suport. Es desa al dispositiu fins que es desactiva.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['clave-privacy-policy', 'clave-app-store'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['clave-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['clave-app-store'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['clave-privacy-policy'], note: 'Sistema operatiu i model.' }),
        row('identificador-de-dispositiu', 'optional', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['clave-privacy-policy', 'clave-app-store'], note: 'Per a les notificacions de Firebase Cloud Messaging (Google), si s’activen.' }),
        row('interaccions-i-us', 'optional', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['clave-privacy-policy'], note: 'Firebase Analytics, només si s’autoritza en obrir l’app o a «Condiciones y políticas».' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['clave-privacy-policy'], note: 'Registres d’errors a Firebase Crashlytics.' }),
        row('dades-biometriques', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['clave-privacy-policy'], note: 'L’app exigeix un factor de desbloqueig del dispositiu, com l’empremta o la cara, però el gestiona el sistema operatiu.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['clave-app-store']),
        advertisingIdentifiers: f('no', 'official', ['clave-app-store', 'clave-privacy-policy'], 'L’app no demana permisos addicionals i l’etiqueta no declara rastreig.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['clave-privacy-policy'], 'Firebase Analytics, opcional, i Crashlytics, de Google.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['clave-privacy-policy'], 'Les dades s’utilitzen exclusivament per al sistema Cl@ve.'),
        profiling: unknown(),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['clave-privacy-policy'], 'No es cedeixen llevat d’obligació legal; Google intervé com a proveïdor de Firebase.'),
        intraGroupSharing: na('Organisme públic sense grup empresarial. Algunes gestions passen per la Gerència d’Informàtica de la Seguretat Social.'),
        dataBrokerSales: f('no', 'official', ['clave-privacy-policy']),
        internationalTransfers: unknown('La política no diu on tracta Google les dades de Firebase.'),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['clave-privacy-policy'], 'Al dispositiu, mentre el DNI o el NIE hi estigui actiu; per a la resta remet a la informació general de l’Agència.'),
        dataAfterDeletion: unknown('No consta què conserva l’Agència després de renunciar a Cl@ve.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['clave-renunciar']),
        selfService: f('yes', 'official', ['clave-renunciar'], 'Des de l’app o des de la seu electrònica amb certificat.'),
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Obre l’app i ves a Gestiones > Mis datos en Cl@ve.',
          'Tria «Renunciar a Cl@ve» i desbloqueja amb el factor del dispositiu.',
          'Accepta les condicions i desa el justificant en PDF.',
          'Per esborrar només les dades del mòbil, fes servir «Desactivar dispositivo».',
        ],
        obstacles: 'Per tornar-s’hi a registrar cal videoidentificació, certificat electrònic o anar-hi en persona.',
        sources: ['clave-renunciar', 'clave-privacy-policy'],
      },
      userRights: {
        dataExport: unknown(),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['clave-privacy-policy'], undefined, { url: 'mailto:dpd@correo.aeat.es' }),
      },
      controls: {
        adPersonalizationOptOut: na('L’app no mostra publicitat.'),
        telemetryOptOut: f('yes', 'official', ['clave-privacy-policy'], 'L’analítica és opcional i es pot canviar a «Condiciones y políticas».'),
        granularControls: f('partial', 'official', ['clave-privacy-policy']),
        defaultPosture: 'protective',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('No és un servei de comunicacions entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: f('yes', 'official', ['clave-privacy-policy'], 'L’activació exigeix un codi per SMS i l’ús, el factor de desbloqueig del dispositiu. L’app és en si mateixa un segon factor per a Cl@ve.', { methods: ['sms'] }),
        independentAudits: f('partial', 'official', ['aeat-medidas-seguridad', 'clave-privacy-policy'], 'Sistema de gestió de la seguretat conforme a l’Esquema Nacional de Seguretat.'),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hem trobat cap canal públic de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'El desembre del 2024 un grup de ransomware va afirmar que havia robat dades de l’Agència Tributària, i el febrer del 2026 va circular una altra suposada filtració. L’Agència ho va desmentir i no hi ha confirmació independent, de manera que no ho registrem com a incident.',
        openQuestions: ['Quines dades conserva l’Agència després de renunciar a Cl@ve, i durant quant de temps?'],
      },
    },

    /* ═══════════════════════════ Importass ═══════════════════════════ */
    {
      slug: 'importass-seguridad-social',
      name: 'Importass Seguridad Social',
      company: 'tesoreria-general-seguridad-social',
      categories: ['administracio-publica'],
      tagline: 'Vida laboral i cotitzacions al mòbil, sense una política de privadesa pròpia',
      summary:
        'Importass dona accés a la vida laboral, les bases de cotització, els deutes i els tràmits d’autònoms i de treballadores de la llar. Són dades que revelen la trajectòria laboral i els ingressos. L’etiqueta de l’App Store és mínima i l’enllaç de privadesa remet a la pàgina general de la Seguretat Social, sense res específic de l’app.',
      platforms: ['ios', 'android'],
      businessModel: 'public-service',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://sede.seg-social.gob.es/wps/portal/sede/sede/SSMovil/listadoAplicaciones/detalleAplicacionMobile/apptesoreria',
        privacyPolicy: 'https://sede.seg-social.gob.es/wps/portal/sede/sede/Inicio/informacionUtil/SS-Proteccion_de_datos/',
        appStore: 'https://apps.apple.com/es/app/id6502392871',
      },
      accountRequired: f('yes', 'official', ['importass-app-page'], 'Cal identificar-se amb Cl@ve, certificat electrònic o SMS al telèfon registrat a la Seguretat Social.'),
      openSource: unknown(),
      publicService: {
        isPublicService: true,
        administrationLevel: 'state',
        legalBasis: f('partial', 'official', ['tgss-registro-tratamiento'], 'El registre d’activitats invoca els articles 6.1.c i 6.1.e del RGPD amb la Llei general de la Seguretat Social i el Reglament general de cotització, sense concretar-ne cap article, i hi suma el consentiment de l’article 6.1.a en tractaments que són obligatoris, com l’afiliació.', {
          norm: 'Reial decret legislatiu 8/2015, text refós de la Llei general de la Seguretat Social',
        }),
        processingRegistry: f('yes', 'official', ['tgss-registro-tratamiento', 'seg-social-proteccion-datos'], 'La Seguretat Social publica el registre d’activitats de cada entitat. El de la TGSS, del 8 de maig del 2024, inclou «Afiliación e inscripción de empresas» i «Bases de cotización», que són les dades que mostra l’app.', {
          url: 'https://sede.seg-social.gob.es/binarios/es/ASSI_TGSS',
        }),
        dpia: unknown('No hem trobat publicada cap avaluació d’impacte relativa a la protecció de dades de l’app ni dels tractaments d’afiliació i cotització.'),
        ensConformity: f('yes', 'official', ['seg-social-certificacion-ens'], 'Certificat de conformitat amb l’Esquema Nacional de Seguretat de categoria alta, acompanyat de la ISO/IEC 27001:2023, i l’abast esmenta expressament els sistemes de la seu electrònica i d’Importass.', {
          category: 'high',
          url: 'https://www.seg-social.es/wps/portal/wss/internet/HerramientasWeb/0d32d60e-ab65-4cad-b27f-6f60027fe73a',
        }),
        dpo: f('yes', 'official', ['seg-social-proteccion-datos', 'tgss-registro-tratamiento'], 'El delegat de protecció de dades de la Seguretat Social consta amb adreça postal i electrònica, i es repeteix a cada fitxa del registre d’activitats de la TGSS.', {
          contact: 'delegado.protecciondatos@seg-social.es',
        }),
        offlineAlternative: f('partial', 'official', ['importass-portal-web', 'importass-app-page'], 'Els mateixos tràmits es fan des del portal web d’Importass i des de la seu electrònica sense instal·lar l’app, i els informes es poden demanar perquè arribin al domicili, però no hem trobat documentat un canal presencial o telefònic equivalent per a tots els tràmits de la TGSS.'),
        accessibilityStatement: f('partial', 'official', ['seg-social-declaracion-accesibilidad'], 'La seu electrònica es declara parcialment conforme amb el Reial decret 1112/2018, amb declaració i revisió del 18 de maig del 2026 i una llista llarga d’incompliments. No hi ha declaració d’accessibilitat de l’app.', {
          url: 'https://sede.seg-social.gob.es/wps/portal/sede/sede/Inicio/Accesibilidad',
        }),
        mandatoryRetention: f('yes', 'official', ['lgss-afiliacion', 'tgss-registro-tratamiento'], 'L’article 15 del text refós de la Llei general de la Seguretat Social estableix que l’afiliació és obligatòria i «única para toda su vida y para todo el sistema», i el registre d’activitats hi afegeix que les dades es conserven segons la normativa d’arxius i documentació. Per això l’expedient no es pot suprimir a petició de la persona.', {
          norm: 'Reial decret legislatiu 8/2015, article 15',
        }),
      },
      dataSummary:
        'La vida laboral, les bases de cotització i els deutes amb la Seguretat Social mostren on ha treballat una persona, quant ha cobrat i si passa dificultats econòmiques.',
      dataCollection: [
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['importass-app-page'], note: 'Identificació amb DNI o NIE i número de la Seguretat Social.' }),
        row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['importass-app-page'], note: 'Vida laboral i situació d’autònom o de treballadora de la llar.' }),
        row('nivell-d-ingressos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['importass-app-page'], note: 'Bases de cotització, rebuts i deutes.' }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['importass-app-page'], note: 'Per a l’accés per SMS.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['importass-app-store'], note: 'L’etiqueta el declara per a «altres finalitats» sense concretar.' }),
        row('dades-biometriques', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['importass-app-page'], note: 'L’accés biomètric es configura al dispositiu i el gestiona el sistema operatiu.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['importass-app-store']),
        advertisingIdentifiers: f('no', 'official', ['importass-app-store'], 'L’etiqueta no declara rastreig ni publicitat.'),
        thirdPartyTrackersPresent: unknown('No hi ha cap política específica que ho aclareixi.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['importass-app-store'], 'L’etiqueta no declara cap ús publicitari.'),
        profiling: unknown(),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['seg-social-proteccion-datos'], 'Altres administracions públiques per cessió reglada.'),
        intraGroupSharing: f('yes', 'official', ['seg-social-proteccion-datos'], 'Entitats de la Seguretat Social com l’INSS, l’ISM i la IGSS.'),
        dataBrokerSales: unknown(),
        internationalTransfers: unknown('La informació general esmenta tercers països «si escau», sense detall per a l’app.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['seg-social-proteccion-datos'], 'Remet als terminis de cada activitat de tractament.'),
        dataAfterDeletion: na('No hi ha un compte propi que es pugui eliminar.'),
      },
      accountDeletion: {
        possible: na('L’app no crea cap compte propi: s’hi entra amb Cl@ve, certificat o SMS, i les dades de la Seguretat Social es conserven per obligació legal.'),
        selfService: na('No hi ha compte propi.'),
        difficulty: 'unknown',
        obstacles: 'Per deixar de fer-la servir n’hi ha prou de desinstal·lar-la; la supressió de l’expedient de la Seguretat Social no es pot demanar perquè el tractament és obligatori.',
        sources: ['importass-app-page', 'seg-social-proteccion-datos'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['importass-app-page'], 'Permet descarregar informes de vida laboral, bases de cotització i certificats, però no una còpia completa de les dades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['seg-social-proteccion-datos'], 'Amb certificat o Cl@ve, o presencialment; delegat a delegado.protecciondatos@seg-social.es.', {
          url: 'mailto:delegado.protecciondatos@seg-social.es',
        }),
      },
      controls: {
        adPersonalizationOptOut: na('L’app no declara publicitat.'),
        telemetryOptOut: unknown(),
        granularControls: unknown(),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('No és un servei de comunicacions entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: f('yes', 'official', ['importass-app-page'], 'Accés amb Cl@ve Mòbil, Cl@ve Permanent, certificat o SMS, i biometria opcional.', { methods: ['sms', 'app-push'] }),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown(),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes: 'No hem trobat cap política de privadesa específica de l’app. Tampoc no hem trobat incidents documentats que afectin Importass.',
        openQuestions: [
          'Quins SDK de tercers inclou l’app?',
          'A què correspon l’identificador del dispositiu declarat per a «altres finalitats»?',
        ],
      },
    },

    /* ═══════════════════════════ CamScanner ═══════════════════════════ */
    {
      slug: 'camscanner',
      name: 'CamScanner',
      company: 'intsig',
      categories: ['ofimatica-i-productivitat'],
      tagline: 'Escàner de documents xinès amb publicitat de rastreig i un precedent de mòdul maliciós',
      summary:
        'Pels documents que escaneja, CamScanner veu contractes, nòmines i documents d’identitat, i en fa OCR si es sincronitzen. Tot i això, es finança en part amb publicitat: l’etiqueta declara identificadors i dades d’ús per rastrejar, i la política comparteix l’IDFA amb anunciants com Google. El 2019 la versió Android va distribuir un mòdul maliciós dins d’una biblioteca publicitària. Per a l’EEE, les dades es guarden a Irlanda.',
      platforms: ['ios', 'android', 'web', 'windows', 'macos'],
      businessModel: 'freemium',
      jurisdiction: 'Xina',
      links: {
        website: 'https://www.camscanner.com/',
        privacyPolicy: 'https://v3.camscanner.com/iOS/privacy',
        appStore: 'https://apps.apple.com/es/app/id388627783',
      },
      accountRequired: unknown('La política descriu el registre, però no aclareix si es pot escanejar sense compte.'),
      openSource: f('no', 'official', ['camscanner-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El contingut escanejat és el més sensible: documents d’identitat, contractes, informes mèdics, factures. Si se sincronitza amb el núvol, queda als servidors de l’empresa fins que s’esborra.',
      dataCollection: [
        row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['camscanner-privacy-policy'], note: 'Es pugen als servidors en fer OCR o sincronitzar, i s’hi conserven fins que s’esborren o s’elimina el compte.' }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['camscanner-app-store', 'camscanner-privacy-policy'] }),
        row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['camscanner-privacy-policy'], note: 'Preguntes a les funcions d’IA.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['camscanner-app-store', 'camscanner-privacy-policy'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['camscanner-app-store', 'camscanner-privacy-policy'] }),
        row('contrasenya', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['camscanner-privacy-policy'] }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['camscanner-app-store', 'camscanner-privacy-policy'], note: 'IDFA a iOS; es comparteix amb proveïdors de publicitat com Google.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['camscanner-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['camscanner-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['camscanner-privacy-policy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['camscanner-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['camscanner-privacy-policy'], note: 'Deduïda de la wifi i el Bluetooth.' }),
        row('ubicacio-precisa', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', sources: ['camscanner-privacy-policy'], note: 'Amb permís del dispositiu.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['camscanner-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['camscanner-app-store', 'camscanner-privacy-policy'], note: 'Firebase de Google.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['camscanner-app-store']),
        advertisingIdentifiers: f('yes', 'official', ['camscanner-privacy-policy']),
        thirdPartyTrackersPresent: f('yes', 'official', ['camscanner-privacy-policy'], 'Firebase i proveïdors de publicitat com Google.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['camscanner-privacy-policy']),
        profiling: unknown(),
        aiTraining: unknown('La política diu que el contingut pujat es tracta per a emmagatzematge, OCR i funcions d’IA, però no si s’entrenen models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['camscanner-privacy-policy'], 'Serveis de núvol que tria la persona, passarel·les de pagament, Firebase i anunciants.'),
        intraGroupSharing: f('yes', 'official', ['camscanner-privacy-policy']),
        dataBrokerSales: unknown(),
        internationalTransfers: f('yes', 'official', ['camscanner-privacy-policy'], 'Les dades de l’EEE es guarden a Irlanda, però es poden transferir fora amb clàusules tipus o decisions d’adequació.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['camscanner-privacy-policy'], 'Termini per finalitat; la majoria, fins que s’esborra la dada o el compte.'),
        dataAfterDeletion: f('partial', 'official', ['camscanner-privacy-policy'], 'Es conserven factures, dades fiscals i comunicacions per a disputes.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['camscanner-privacy-policy']),
        selfService: unknown('La política diu que cal contactar amb l’empresa; guies de tercers descriuen una opció dins de l’app que no hem pogut verificar.'),
        difficulty: 'unknown',
        steps: [
          'Esborra primer els documents sincronitzats que no vulguis deixar al núvol.',
          'Demana l’eliminació del compte al contacte que indica la política de privadesa.',
        ],
        sources: ['camscanner-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['camscanner-privacy-policy'], 'La portabilitat es reconeix, sense eina descrita.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['camscanner-privacy-policy'], 'Delegat de protecció de dades i termini d’un mes.', { responseTimeDays: 30 }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['camscanner-privacy-policy'], 'Remet als controls del sistema operatiu i a l’avís de galetes.'),
        telemetryOptOut: unknown(),
        granularControls: unknown(),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: unknown('No consta xifratge d’extrem a extrem dels documents sincronitzats.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown('La política esmenta el xifratge com a control de seguretat sense concretar-ne l’abast.'),
        mfa: unknown(),
        independentAudits: f('yes', 'official', ['camscanner-privacy-policy'], 'ISO/IEC 27001, 27701 i 20000.'),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La web camscanner.com/app/privacy es carrega amb JavaScript; hem fet servir la política enllaçada des de l’App Store. L’Índia va prohibir l’app el 2020 amb altres aplicacions xineses per motius de seguretat nacional; no és una sanció de protecció de dades i no l’hem registrada.',
        openQuestions: [
          'L’app iOS té una opció d’eliminar el compte a la configuració?',
          'Es pot fer servir sense compte i sense sincronitzar res al núvol?',
        ],
      },
    },

    /* ═══════════════════════════ Discord ═══════════════════════════ */
    {
      slug: 'discord',
      name: 'Discord',
      company: 'discord-netherlands',
      categories: ['missatgeria', 'comunitats-i-forums'],
      tagline: 'Veu i vídeo xifrats d’extrem a extrem, però text al servidor i documents d’identitat filtrats',
      summary:
        'Des del 2026, Discord xifra d’extrem a extrem totes les trucades de veu i vídeo amb el protocol DAVE, però els missatges de text continuen al servidor i s’escanegen. Els terminis de conservació són concrets. El 2025 un proveïdor d’atenció al client va perdre unes 70.000 imatges de documents d’identitat enviades per verificar l’edat. Els missatges es mantenen després d’eliminar el compte, anonimitzats.',
      platforms: ['ios', 'android', 'web', 'windows', 'macos', 'linux'],
      businessModel: 'freemium',
      jurisdiction: 'Països Baixos (EEE) i Estats Units',
      links: {
        website: 'https://discord.com/',
        privacyPolicy: 'https://discord.com/privacy',
        appStore: 'https://apps.apple.com/es/app/id985746746',
      },
      accountRequired: f('yes', 'official', ['discord-privacy-policy']),
      openSource: f('no', 'official', ['discord-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Els servidors on participa una persona, amb qui parla i què escriu mostren aficions, identitat i xarxa social. A més, la verificació d’edat ha portat Discord a tractar documents d’identitat.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['discord-app-store', 'discord-privacy-policy'], note: 'Es conserva 180 dies després de la baixa per seguretat.' }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['discord-app-store', 'discord-retention'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['compliment-legal'], sources: ['discord-privacy-policy'] }),
        row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['discord-privacy-policy', 'discord-retention'], note: 'Per verificar l’edat; si s’envia en una apel·lació, s’esborra 60 dies després de tancar el cas.' }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['discord-privacy-policy', 'discord-dave'], note: 'El text no té xifratge d’extrem a extrem i s’escaneja per detectar contingut il·legal.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['discord-app-store', 'discord-privacy-policy'] }),
        row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['discord-privacy-policy'] }),
        row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['discord-privacy-policy', 'discord-dave'], note: 'Els missatges de veu es desen; les trucades van xifrades d’extrem a extrem.' }),
        row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['discord-privacy-policy'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['discord-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['discord-app-store'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['discord-privacy-policy'], note: 'Les processen Stripe i PayPal.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['discord-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['discord-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['discord-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['discord-app-store', 'discord-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['discord-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['discord-app-store'], 'L’etiqueta declara identificadors per rastrejar.'),
        advertisingIdentifiers: unknown('Discord té una pàgina sobre la transparència del rastreig a iOS, però no hem pogut confirmar quin identificador fa servir.'),
        thirdPartyTrackersPresent: unknown(),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['discord-privacy-policy'], 'Els continguts patrocinats, com les missions, es personalitzen amb dades d’ús, i es comparteix informació limitada amb plataformes publicitàries.'),
        profiling: f('yes', 'official', ['discord-privacy-policy'], 'Personalització de recomanacions i continguts patrocinats.'),
        aiTraining: f('partial', 'official', ['discord-retention'], 'Les publicacions públiques es poden conservar de 180 dies a dos anys per entrenar models que detecten infraccions.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['discord-privacy-policy'], 'Proveïdors, plataformes publicitàries, desenvolupadors de bots i autoritats.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: f('no', 'official', ['discord-privacy-policy']),
        internationalTransfers: f('yes', 'official', ['discord-privacy-policy'], 'Data Privacy Framework i clàusules contractuals tipus.', { mechanism: 'adequacy' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: f('yes', 'official', ['discord-transparency'], undefined, { url: 'https://discord.com/safety-transparency-reports' }),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['discord-retention']),
        dataAfterDeletion: f('partial', 'official', ['discord-retention', 'discord-delete-account'], 'El compte s’anonimitza, però els missatges enviats continuen visibles. El correu i el telèfon es guarden 180 dies, dos anys si hi ha denúncies, i les consultes de suport, cinc anys.'),
        periods: [
          { dataType: 'adreca-electronica', period: '180 dies després de la baixa; fins a 2 anys si hi ha denúncies', sources: ['discord-retention'] },
          { dataType: 'document-identificatiu-oficial', period: '60 dies després de tancar l’apel·lació d’edat', sources: ['discord-retention'] },
          { dataType: 'publicacions-i-comentaris', period: 'De 180 dies a 2 anys per a publicacions públiques', sources: ['discord-retention'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['discord-delete-account']),
        selfService: f('yes', 'official', ['discord-delete-account']),
        difficulty: 'medium',
        waitingPeriodDays: 15,
        requiresSupportContact: false,
        steps: [
          'Si vols que desaparegui el que has escrit, esborra abans els missatges: després de la baixa continuen visibles.',
          'Transfereix o elimina tots els servidors dels quals siguis propietari.',
          'A l’app, toca l’avatar, obre la configuració i ves a Compte.',
          'Tria «Delete Account», escriu la contrasenya i el codi de verificació en dos passos si el tens, i confirma.',
          'No tornis a iniciar sessió durant 15 dies o l’eliminació s’anul·larà.',
        ],
        obstacles: 'Cal transferir els servidors propis i esperar 15 dies. Els missatges no s’esborren: només es desvinculen del compte.',
        dataRetained: 'Missatges anonimitzats, correu i telèfon 180 dies, dades de transaccions per obligacions fiscals i consultes de suport durant cinc anys.',
        sources: ['discord-delete-account', 'discord-retention'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['discord-data-request'], 'Des de Configuració > Dades i privadesa; pot trigar fins a 30 dies.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['discord-privacy-policy'], undefined, { url: 'mailto:privacy@discord.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['discord-privacy-policy'], 'Opció per limitar la personalització, que també afecta els continguts patrocinats.'),
        telemetryOptOut: f('yes', 'official', ['discord-privacy-policy'], 'Opció per limitar l’ús de dades per millorar el servei.'),
        granularControls: f('yes', 'official', ['discord-privacy-policy']),
        defaultPosture: 'permissive',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: f('partial', 'official', ['discord-dave'], 'Les trucades de veu i vídeo, en privat, en grup i als canals de veu, van xifrades d’extrem a extrem per defecte. El text i els canals Stage no.', {
          scope: 'partial-default',
          protocol: 'DAVE',
        }),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: f('yes', 'official', ['discord-mfa'], undefined, { methods: ['passkey', 'hardware-key', 'totp', 'sms'] }),
        independentAudits: f('partial', 'official', ['discord-dave'], 'El protocol DAVE ha tingut una auditoria externa; no consten auditories de la resta de la plataforma.'),
        bugBounty: f('partial', 'official', ['discord-security'], 'Programa de recompenses privat a Bugcrowd, només per invitació.', { url: 'https://discord.com/security' }),
        vulnerabilityDisclosure: f('yes', 'official', ['discord-security']),
      },
      alternatives: [
        {
          app: 'signal',
          comparability: 'partial',
          rationale: 'Cobreix els grups de xat i les trucades amb xifratge d’extrem a extrem també per al text i sense publicitat.',
          tradeOffs: 'No té servidors públics amb canals, rols i bots, que són el nucli de les comunitats de Discord.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Els atacants de 5CA van afirmar que tenien moltes més dades que les reconegudes per Discord. Seguim les xifres del comunicat oficial.',
        openQuestions: ['Quins SDK de tercers inclou l’app iOS i per a què fa servir l’identificador de rastreig declarat?'],
      },
    },
  ],

  incidents: [
    {
      slug: 'chatgpt-error-redis-2023',
      title: 'Un error de ChatGPT va exposar títols de converses i dades de pagament parcials',
      type: 'leak',
      severity: 'medium',
      apps: ['chatgpt'],
      company: 'openai',
      occurredAt: '2023-03-20',
      disclosedAt: '2023-03-24',
      description:
        'Un error en una biblioteca de codi obert, redis-py, va fer que algunes persones veiessin títols de l’historial d’altres. Durant una finestra de nou hores, part dels subscriptors Plus van poder veure el nom, el correu, l’adreça de facturació, els quatre últims dígits i la caducitat de la targeta d’altres persones. OpenAI va aturar el servei per corregir-ho.',
      affectedPeople: 'Un 1,2 % dels subscriptors de ChatGPT Plus actius durant la finestra de nou hores.',
      sources: ['openai-march-2023-outage'],
    },
    {
      slug: 'chatgpt-garante-2024',
      title: 'Sanció de 15 milions de l’autoritat italiana a OpenAI, anul·lada als tribunals',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['chatgpt'],
      company: 'openai',
      occurredAt: '2024-12-20',
      disclosedAt: '2024-12-20',
      description:
        'El Garante italià va sancionar OpenAI per no haver notificat la bretxa del març del 2023, per no justificar la base jurídica de l’entrenament, per les mancances de la política de privadesa i per no verificar l’edat. El març del 2026 el Tribunal de Roma va anul·lar la sanció perquè considerava competent l’autoritat irlandesa, en aplicació de la finestreta única. L’anul·lació no entra en el fons.',
      affectedPeople: 'Persones usuàries de ChatGPT a Itàlia.',
      regulatory: {
        authority: 'Garante per la protezione dei dati personali (Itàlia)',
        fineAmountEur: 15000000,
        legalBasis: 'Articles 5, 6, 12, 13, 24, 25 i 33 del RGPD',
        status: 'overturned',
      },
      sources: ['chatgpt-garante-fine-2024', 'chatgpt-garante-annulment-2026'],
    },
    {
      slug: 'discord-cnil-2022',
      title: 'Sanció de 800.000 euros de la CNIL a Discord',
      type: 'regulatory-fine',
      severity: 'medium',
      apps: ['discord'],
      company: 'discord',
      occurredAt: '2022-11-10',
      disclosedAt: '2022-11-17',
      description:
        'L’autoritat francesa va concloure que Discord no tenia una política escrita de conservació i guardava comptes inactius des de feia entre tres i sis anys. També va constatar que acceptava contrasenyes de sis caràcters sense mesures addicionals i que no havia fet l’avaluació d’impacte malgrat el volum de dades i la presència de menors.',
      affectedPeople: 'Persones usuàries de Discord a França.',
      regulatory: {
        authority: 'CNIL (França)',
        fineAmountEur: 800000,
        legalBasis: 'Articles 5.1.e, 13, 25.2, 32 i 35 del RGPD',
        status: 'final',
      },
      sources: ['discord-cnil-2022'],
    },
    {
      slug: 'discord-proveidor-suport-2025',
      title: 'Filtració de documents d’identitat a través del proveïdor d’atenció al client de Discord',
      type: 'breach',
      severity: 'high',
      apps: ['discord'],
      company: 'discord',
      occurredAt: '2025-10-03',
      disclosedAt: '2025-10-03',
      description:
        'Uns atacants van accedir al sistema d’un proveïdor extern d’atenció al client i es van endur unes 70.000 imatges de documents d’identitat. Eren documents que persones usuàries havien enviat per apel·lar la verificació d’edat. També s’hi van exposar noms, correus, converses amb el suport, els quatre últims dígits de targetes i adreces IP.',
      affectedPeople: 'Unes 70.000 persones, segons Discord.',
      sources: ['discord-5ca-breach-2025'],
    },
    {
      slug: 'camscanner-modul-malicios-2019',
      title: 'Mòdul maliciós a la versió Android de CamScanner',
      type: 'other',
      severity: 'high',
      apps: ['camscanner'],
      company: 'intsig',
      occurredAt: '2019-08-27',
      disclosedAt: '2019-08-27',
      description:
        'Kaspersky va trobar que les versions recents de CamScanner per a Android incloïen una biblioteca publicitària amb un mòdul maliciós, Necro.n. El mòdul podia descarregar i executar més codi per mostrar publicitat intrusiva o subscriure la persona a serveis de pagament. Google va retirar l’app i l’empresa va publicar una versió sense la biblioteca el 5 de setembre del 2019.',
      affectedPeople: 'Persones usuàries de les versions afectades per a Android, en una app amb més de 100 milions d’instal·lacions.',
      sources: ['camscanner-kaspersky-2019'],
    },
  ],

  storeIds: {
    'new-york-times': 'com.nytimes.NYTimes',
    'el-mundo': 'com.elmundo',
    'financial-times': 'com.ft.ft-app-ios',
    rac1: 'org.rac1',
    chatgpt: 'com.openai.chat',
    clave: 'es.aeat.pin24h',
    claude: 'com.anthropic.claude',
    'importass-seguridad-social': 'gov.es.segsocial.importass.ios',
    camscanner: 'com.intsig.CamScannerLite',
    discord: 'com.hammerandchisel.discord',
  },
}
