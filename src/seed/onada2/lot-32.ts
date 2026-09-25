import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/**
 * Lot 32 de la segona onada: la franja de la categoria «Referencia» de l’App
 * Store espanyol. Tres traductors amb intel·ligència artificial de societats
 * asiàtiques poc documentades, un missatger que diu no recollir res, l’aplicació
 * de la Bíblia de YouVersion, dos identificadors i inventaris d’objectes de
 * col·lecció, una guia del cel nocturn, un generador de retrats «ancestrals» i un
 * automatitzador de tocs.
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'secret-phone',
      name: 'Secret Phone',
      legalName: 'Secret Phone, Inc.',
      description:
        'Empresa constituïda als Estats Units que publica el missatger Zangi. La llicència es regeix pel dret de Delaware, però atribueix la jurisdicció exclusiva als tribunals de la República d’Armènia, on hi ha l’equip de producte.',
      headquartersCountry: 'US',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://zangi.com/',
      productDomains: ['zangi.com', 'business.zangi.com'],
    },
    {
      slug: 'digitalsail-hk',
      name: 'DigitalSail (HK)',
      legalName: 'DigitalSail (HK) Limited',
      description:
        'Societat registrada a Hong Kong que publica el teclat traductor Live Translator, distribuït a Espanya com a «Traductor AI - Voz y Texto». La política de privadesa és allotjada en un subdomini gratuït de Firebase i el contacte és un compte de correu personal.',
      headquartersCountry: 'HK',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://redbrid-7be14.web.app/policy.html',
    },
    {
      slug: 'youversion',
      name: 'YouVersion',
      legalName: 'YouVersion, Inc.',
      description:
        'Entitat sense ànim de lucre d’Edmond (Oklahoma), vinculada a la congregació Life.Church, que publica l’aplicació de la Bíblia i el web bible.com. No ven publicitat i es finança amb donacions.',
      headquartersCountry: 'US',
      ownership: 'nonprofit',
      primaryRevenueModel: 'donations',
      website: 'https://www.youversion.com/',
      productDomains: ['bible.com', 'youversion.com'],
    },
    {
      slug: 'vortemol',
      name: 'Vortemol',
      legalName: 'Vortemol Limited',
      description:
        'Societat xipriota amb domicili a Nicòsia, responsable del tractament de les dades de l’aplicació CoinIn. En ser establerta a la Unió Europea, li correspon l’autoritat de protecció de dades de Xipre.',
      headquartersCountry: 'CY',
      euEstablishment: 'CY',
      leadSupervisoryAuthority: 'cpdp-cy',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://coininapp.com/',
      productDomains: ['coininapp.com'],
      privacyContact: 'support@coininapp.com',
    },
    {
      slug: 'collectr',
      name: 'Collectr',
      legalName: 'Collectr Inc.',
      description:
        'Empresa canadenca que fa una aplicació d’inventari i valoració de col·leccions de cartes col·leccionables. Tracta i desa les dades al Canadà i diu que es regeix per la legislació canadenca i quebequesa de privadesa.',
      headquartersCountry: 'CA',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.getcollectr.com/',
      productDomains: ['getcollectr.com'],
      privacyContact: 'contact@getcollectr.com',
    },
    {
      slug: 'applabs',
      name: 'APPLABS',
      legalName: 'APPLABS LIMITED',
      description:
        'Estudi d’aplicacions que publica InstantTranslator. El contacte de privadesa és un correu del domini hkapplabs.com i la política és allotjada en un subdomini gratuït de Firebase.',
      headquartersCountry: 'HK',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://instanttranslator-6e103.web.app/privacy_policy.txt',
      productDomains: ['hkapplabs.com'],
    },
    {
      slug: 'three-tiger-network',
      name: 'Three Tiger Network Technology',
      legalName: 'THREE TIGER NETWORK TECHNOLOGY LIMITED',
      description:
        'Desenvolupadora de l’aplicació AI Translator: Voice&Text&Photo. El domini que consta a l’App Store, aitranslatorvoice.com, ja no allotja ni el producte ni la política de privadesa: serveix ressenyes de casinos en línia.',
      ownership: 'unknown',
      primaryRevenueModel: 'freemium',
      productDomains: ['aitranslatorvoice.com'],
    },
    {
      slug: 'fifth-star-labs',
      name: 'Fifth Star Labs',
      legalName: 'Fifth Star Labs LLC',
      description:
        'Estudi nord-americà independent que fa Sky Guide, una guia del cel nocturn per a iPhone, iPad i Apple Watch. No crea comptes d’usuari i es finança amb la compra i la subscripció de l’aplicació.',
      headquartersCountry: 'US',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.fifthstarlabs.com/',
      productDomains: ['fifthstarlabs.com'],
    },
    {
      slug: 'joylink-network-tech',
      name: 'Joylink Network Tech',
      legalName: 'JOYLINK NETWORK TECH LIMITED',
      description:
        'Desenvolupadora de HeritageAI, una aplicació de retrats «ancestrals» generats amb intel·ligència artificial. La infraestructura pròpia de processament, anomenada PapilioAI, és allotjada en servidors de Singapur i la generació d’imatges es delega a Replicate.',
      ownership: 'unknown',
      primaryRevenueModel: 'freemium',
      website: 'https://tagv.papilioaiimg.com/',
      productDomains: ['papilioaiimg.com'],
    },
    {
      slug: 'fm-apps',
      name: 'FM APPS',
      description:
        'Nom comercial que apareix a la política de privadesa de l’aplicació Auto Clicker, publicada a l’App Store a nom de la persona física Florence Mitchell. El web és una pàgina gratuïta de Netlify.',
      ownership: 'unknown',
      primaryRevenueModel: 'advertising',
      website: 'https://florencemitchell.netlify.app/',
      productDomains: ['florencemitchell.netlify.app'],
    },
  ],

  sources: [
    /* ── Zangi ── */
    s('zangi-app-store', 'Zangi - Private Messenger — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id549493839', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa i descripció de la fitxa. El desenvolupador declara «No se recopilan datos», i la descripció promet registre sense número de telèfon, xifratge d’extrem a extrem AES-GCM de 256 bits i emmagatzematge només al dispositiu.',
    }),
    s('zangi-privacy-policy', 'Zangi Messenger Privacy Policy', 'https://zangi.com/privacy-policy', 'Secret Phone, Inc.', 'privacy-policy', 'primary', {
      summary:
        'Document únic que barreja la política del web, la llicència d’ús de l’aplicació i la política DMCA. Detalla quines dades opcionals recull el perfil, que la còpia de l’agenda no surt del dispositiu, quins identificadors tècnics es desen als servidors, com s’elimina el compte i la llista exacta de dades que es lliuren a les autoritats.',
    }),
    s('zangi-about', 'Zangi — The New Era Messenger (About us)', 'https://zangi.com/about', 'Secret Phone, Inc.', 'other', 'primary', {
      summary:
        'Pàgina corporativa amb el posicionament del producte: «No data collection. No mobile number subjection. No surveillance vulnerability. No Ads», i un protocol de transport propi anomenat Zangi SCP.',
    }),

    /* ── Traductor AI (DigitalSail) ── */
    s('traductor-ai-digitalsail-app-store', 'Traductor AI - Voz y Texto — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6740606431', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: declara identificadors usats per rastrejar, identificadors i identificador de dispositiu vinculats a la identitat per personalitzar el producte, i dades d’ús i de diagnòstic no vinculades.',
    }),
    s('traductor-ai-digitalsail-privacy-policy', 'Privacy Policy for Live Translator', 'https://redbrid-7be14.web.app/policy.html', 'DigitalSail (HK) Limited', 'privacy-policy', 'primary', {
      summary:
        'Política d’una sola pàgina allotjada a un subdomini gratuït de Firebase. Reconeix que el teclat recull el text que s’hi escriu, que cal accés complet al teclat i que es fan servir serveis d’IA de tercers. No hi ha responsable identificat, ni terminis, ni base jurídica; el contacte és un compte de Gmail personal.',
    }),

    /* ── Santa Biblia (YouVersion) ── */
    s('santa-biblia-app-store', 'Santa Biblia — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id282935706', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa. No declara cap dada usada per rastrejar. Vincula a la identitat el correu (per a màrqueting propi), l’historial de cerca, el nom, el contingut de la persona usuària i l’identificador d’usuari; deixa sense vincular l’identificador del dispositiu, les dades d’ús, la informació de pagament i els errors.',
    }),
    s('santa-biblia-privacy-policy', 'YouVersion Privacy Policy', 'https://www.bible.com/privacy', 'YouVersion, Inc.', 'privacy-policy', 'primary', {
      summary:
        'Política de YouVersion, Inc. (Edmond, Oklahoma). Declara que no fa servir galetes ni tecnologies similars per a publicitat basada en interessos, esmenta Stripe i PayPal per als pagaments i Facebook i Google per a l’atribució, fixa terminis curts per a les galetes i per a l’adreça IP i la ubicació, i explica que el compte s’elimina des de la configuració de l’aplicació o de bible.com.',
    }),

    /* ── CoinIn ── */
    s('coinin-app-store', 'CoinIn: Coin Scan Identifier — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1672111368', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: declara identificadors i diagnòstics usats per rastrejar, i vincula a la identitat compres, contingut de la persona usuària, historial de cerca, identificadors, dades d’ús i diagnòstics.',
    }),
    s('coinin-privacy-policy', 'CoinIn Privacy Policy', 'https://legal.coininapp.com/privacy-policy.html', 'Vortemol Limited', 'privacy-policy', 'primary', {
      summary:
        'Política vigent des del 3 de febrer del 2023. Identifica Vortemol Limited (Nicòsia) com a responsable, enumera les dades automàtiques (IDFA, AAID, identificador de maquinari, identificador de Facebook, IP, geolocalització), anomena els destinataris —Facebook, Apple, AppsFlyer, Amplitude, Firebase, IronSource i Appodeal—, detalla les bases jurídiques per a l’EEE i les clàusules tipus per a les transferències.',
    }),

    /* ── Collectr ── */
    s('collectr-app-store', 'Collectr - TCG Collector App — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1603892248', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa. No declara rastreig, però vincula a la identitat la ubicació exacta i l’aproximada per a «personalización del producto», a més del nom i el correu.',
    }),
    s('collectr-privacy-policy', 'Collectr — Privacy Policy', 'https://www.getcollectr.com/privacy-policy', 'Collectr Inc.', 'privacy-policy', 'primary', {
      summary:
        'Política amb data de febrer del 2026 que cobreix conjuntament el web i l’aplicació. Descriu galetes de segmentació, gravació de sessions, Google Analytics i SDK de tercers, la data de naixement per a les funcions socials, l’emmagatzematge al Canadà, la llista de drets i que no s’atenen els senyals «Do Not Track».',
    }),

    /* ── InstantTranslator ── */
    s('instant-translator-app-store', 'InstantTranslator:Traductor IA — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6636468891', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: declara identificadors usats per rastrejar i, sense vincular-los a la identitat, l’identificador del dispositiu i les dades de publicitat per a publicitat de tercers.',
    }),
    s('instant-translator-privacy-policy', 'InstantTranslator Privacy Policy', 'https://instanttranslator-6e103.web.app/privacy_policy.txt', 'APPLABS LIMITED', 'privacy-policy', 'primary', {
      summary:
        'Política que afirma que no es recullen ni es desen els textos traduïts, explica que la traducció fora de línia es fa al dispositiu amb Google ML Kit, reconeix la recollida de l’identificador publicitari i de dades de rendiment dels anuncis per a les plataformes publicitàries, i hi afegeix una clàusula que condiciona les devolucions a cedir l’historial de compres i de devolucions a Apple.',
    }),

    /* ── AI Translator (Three Tiger) ── */
    s('ai-translator-three-tiger-app-store', 'AI Translator:Voice&Text&Photo — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6462119099', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: declara identificadors usats per rastrejar i l’identificador del dispositiu, sense vincular, per a anàlisi de dades. L’enllaç a la política de privadesa de la fitxa apunta a aitranslatorvoice.com/privacyPolicy.html.',
    }),
    s('ai-translator-three-tiger-website', 'aitranslatorvoice.com', 'https://www.aitranslatorvoice.com/', 'THREE TIGER NETWORK TECHNOLOGY LIMITED', 'other', 'primary', {
      summary:
        'Domini que la fitxa de l’App Store dona com a web del desenvolupador. El 22 de setembre del 2026 serveix ressenyes de casinos en línia («SkyCrown Casino Review 2026») i l’adreça de la política de privadesa que enllaça l’App Store respon amb un error 404.',
    }),

    /* ── Sky Guide ── */
    s('sky-guide-app-store', 'Sky Guide — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id576588894', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa mínima: cap dada de rastreig i cap dada vinculada a la identitat. Només declara dades d’ús i de diagnòstic per a anàlisi, i la ubicació aproximada per al funcionament de l’aplicació.',
    }),
    s('sky-guide-privacy-policy', 'Privacy Policy — Fifth Star Labs', 'https://www.fifthstarlabs.com/privacy/', 'Fifth Star Labs LLC', 'privacy-policy', 'primary', {
      summary:
        'Política actualitzada el 24 de maig del 2018. Diu que l’estudi no genera ni desa comptes d’usuari, que la ubicació només surt del dispositiu si s’activen les notificacions i, abans de sortir-ne, es desdibuixa a un radi de 5 km i s’envia amb un testimoni anònim, i que mai no es recullen dades de la càmera del mode de realitat augmentada.',
    }),

    /* ── HeritageAI ── */
    s('heritageai-app-store', 'HeritageAI: Ancestry & Origins — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6761894538', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: declara identificadors usats per rastrejar i l’identificador del dispositiu, sense vincular, per a publicitat de tercers. No hi consten les fotografies que l’aplicació puja per generar els retrats.',
    }),
    s('heritageai-privacy-policy', 'HeritageAI: Ancestry & Origins — Privacy Policy', 'https://tagv.papilioaiimg.com/privacyPolicy.html', 'JOYLINK NETWORK TECH LIMITED', 'privacy-policy', 'primary', {
      summary:
        'Política actualitzada l’11 d’agost del 2026. Explica que la detecció de cares es fa al dispositiu amb el marc Vision d’Apple, que la imatge triada s’envia a la passarel·la PapilioAI (servidors a Singapur) i a Replicate, que s’esborra en 24 hores, que no s’entrenen models ni es fan perfils biomètrics, i que el consentiment es pot retirar a Configuració → Privacy Choices. Inclou una taula de divulgació que diu que cap dada s’usa per rastrejar.',
    }),

    /* ── Auto Clicker ── */
    s('auto-clicker-app-store', 'Auto Clicker: Tap Automation — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6758081018', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: declara dades d’ús usades per rastrejar i vincula a la identitat les dades d’ús i les dades de publicitat per a publicitat de tercers i per a anàlisi. Classificació per edats 17+.',
    }),
    s('auto-clicker-privacy-policy', 'Privacy Policy — FM APPS', 'https://florencemitchell.netlify.app/privacy-policy.html', 'FM APPS', 'privacy-policy', 'primary', {
      summary:
        'Política genèrica amb data d’efecte del 21 de gener del 2026, allotjada en una pàgina gratuïta de Netlify. Conserva fragments d’altres aplicacions («providing Hannah», «Translate All») i enumera com a proveïdors AdMob, Google Analytics for Firebase, Firebase Crashlytics, Facebook i OneSignal. No té responsable identificat, ni terminis, ni base jurídica, ni procediment d’eliminació.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ Zangi ═══════════════════════════ */
    {
      slug: 'zangi',
      name: 'Zangi',
      company: 'secret-phone',
      categories: ['missatgeria'],
      tagline: 'Diu a l’App Store que no recull cap dada, però enumera les que lliura a la policia',
      summary:
        'Zangi permet registrar-se sense número de telèfon i manté la còpia de l’agenda dins del dispositiu, cosa que el distingeix de la majoria de missatgers. L’etiqueta de l’App Store, però, declara «no es recullen dades», mentre que la mateixa política admet que els servidors desen l’identificador del dispositiu, el testimoni de notificacions, el model i el sistema operatiu, i detalla la llista exacta de dades que es lliuren a les autoritats: data d’alta i de baixa, nom i biografia del perfil, estat i transaccions de la subscripció i identificadors del terminal.',
      platforms: ['ios', 'android', 'windows', 'macos', 'linux'],
      businessModel: 'freemium',
      jurisdiction: 'Estats Units (Delaware), amb jurisdicció exclusiva dels tribunals d’Armènia',
      userBase: 'Sense xifres públiques verificables.',
      links: {
        website: 'https://zangi.com/',
        privacyPolicy: 'https://zangi.com/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id549493839',
      },
      accountRequired: f('yes', 'official', ['zangi-privacy-policy', 'zangi-app-store'], 'Cal un compte, però es crea amb un número virtual de Zangi, sense SIM ni telèfon real.'),
      openSource: unknown('No consta cap repositori públic del client ni del protocol Zangi SCP.'),
      dataSummary:
        'El que queda al servidor no és el contingut de les converses, sinó el mapa del compte: quan es va crear, amb quin aparell, quin nom hi vas posar i quan el vas esborrar. És prou per situar una persona en el temps i en un dispositiu concret, i la política diu explícitament que es lliura davant d’una ordre judicial.',
      dataCollection: [
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['zangi-privacy-policy'], note: 'Número virtual de Zangi, assignat en el registre.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['zangi-privacy-policy'], note: 'Identificador del terminal i testimoni de notificacions, desats als servidors.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['zangi-privacy-policy'], note: 'Tipus i model del terminal, sistema operatiu, versió de l’aplicació i codi de país.' }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['zangi-privacy-policy'], note: 'El perfil es pot deixar en blanc; si s’omple, el veuen les persones que tenen el teu número de Zangi.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['zangi-privacy-policy'], note: 'Fotografia i biografia del perfil.' }),
        row('llista-de-contactes', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['zangi-privacy-policy'], note: 'La còpia de l’agenda es fa al mateix dispositiu per poder enviar invitacions i, segons la política, no s’envia als servidors ni a tercers.' }),
        row('contingut-de-missatges', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['zangi-app-store', 'zangi-privacy-policy'], note: 'L’empresa diu que les converses es xifren d’extrem a extrem i no es desen als servidors. No hi ha auditoria que ho comprovi.' }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['zangi-privacy-policy'], note: 'Només per als comptes antics registrats amb telèfon o correu; els comptes amb número virtual no en tenen.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['zangi-privacy-policy'], note: 'Igual que el telèfon: només per als comptes antics.' }),
        row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['zangi-privacy-policy'], note: 'Estat de la subscripció Premium, identificador de la transacció i data de renovació.' }),
        row('adreca-ip', 'unknown', { note: 'La política no diu si es registra l’adreça IP de les connexions.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['zangi-app-store']),
        advertisingIdentifiers: f('no', 'official', ['zangi-app-store', 'zangi-about'], 'L’etiqueta no declara cap identificador publicitari i el web diu «No Ads».'),
        thirdPartyTrackersPresent: unknown('El web corporatiu demana consentiment per a galetes d’anàlisi i de màrqueting, però no hi ha cap inventari dels SDK de l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['zangi-about', 'zangi-app-store'], 'L’aplicació no mostra publicitat; el model és la subscripció Premium.'),
        profiling: unknown(),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['zangi-privacy-policy'], 'La política no descriu cap proveïdor extern, però sí una cessió detallada a autoritats policials i judicials amb una ordre o citació.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: unknown(),
        internationalTransfers: unknown('La política no diu on són els servidors ni quin mecanisme empara les transferències des de la Unió Europea.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No consta cap informe periòdic de peticions d’autoritats, tot i que la política n’explica el procediment.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['zangi-privacy-policy'], 'El document no fixa cap termini de conservació per a cap categoria de dades.'),
        dataAfterDeletion: f('partial', 'official', ['zangi-privacy-policy'], 'La data d’eliminació del compte queda registrada i figura entre les dades que es poden lliurar a les autoritats.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['zangi-privacy-policy']),
        selfService: f('yes', 'official', ['zangi-privacy-policy'], 'Hi ha una opció dins de l’aplicació.'),
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Obre Zangi i ves a Configuració → Privadesa.',
          'Tria «Delete account» i confirma-ho.',
          'Si havies donat permís d’agenda, retira’l també a la configuració del sistema perquè no es torni a sincronitzar.',
        ],
        dataRetained: 'La data d’alta i la de baixa del compte queden al sistema i es poden lliurar a les autoritats.',
        sources: ['zangi-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('No hi ha cap eina ni procediment d’exportació descrit.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['zangi-privacy-policy'], 'La política només reconeix un dret d’accés emparat en la llei britànica de protecció de dades del 1998, derogada, i diu que hi haurà una petita taxa. No hi ha delegat de protecció de dades ni formulari del RGPD.'),
      },
      controls: {
        adPersonalizationOptOut: na('L’aplicació no mostra publicitat.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['zangi-privacy-policy'], 'Es pot decidir si s’omple el perfil i si es dona accés a l’agenda, i tots dos es poden revertir.'),
        defaultPosture: 'protective',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: f('yes', 'official', ['zangi-app-store'], 'L’empresa diu que aplica xifratge d’extrem a extrem AES-GCM de 256 bits. El client és privatiu i no hi ha cap auditoria pública que ho confirmi.', { scope: 'all-default' }),
        transportEncryption: unknown('L’empresa descriu un protocol de transport propi, Zangi SCP, sense especificacions públiques.'),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown('No consta cap auditoria externa del xifratge ni del protocol.'),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt ni cap política de divulgació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'signal',
          comparability: 'equivalent',
          rationale:
            'Signal ofereix el mateix xifratge d’extrem a extrem amb protocol i clients de codi obert auditats, i publica les poques dades que pot lliurar davant d’una citació judicial.',
          tradeOffs: 'Signal demana un número de telèfon per registrar-se; Zangi no.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La contradicció central és documental: l’etiqueta de l’App Store diu «no es recullen dades» i la política del mateix servei enumera identificadors desats als servidors i una llista concreta de dades cedibles a les autoritats. Les promeses de xifratge no es poden verificar perquè el client és privatiu i no hi ha auditoria.',
        openQuestions: [
          'On són allotjats els servidors de Zangi i sota quin mecanisme es transfereixen les dades des de la Unió Europea?',
          'Hi ha hagut alguna auditoria externa del protocol Zangi SCP o del xifratge de les converses?',
          'Queda algun registre de connexió (adreça IP, metadades de trucada) i durant quant de temps?',
        ],
      },
    },

    /* ═══════════════════════════ Traductor AI (DigitalSail) ═══════════════════════════ */
    {
      slug: 'traductor-ai-digitalsail',
      name: 'Traductor AI - Voz y Texto',
      company: 'digitalsail-hk',
      categories: ['traduccio-i-referencia'],
      tagline: 'Un teclat amb accés complet que reconeix que llegeix el que escrius i el passa a serveis d’IA de tercers',
      summary:
        'És un teclat de sistema que tradueix el que escrius dins de qualsevol altra aplicació. Per funcionar demana «accés complet», i la política ho admet sense embuts: recull el text que hi introdueixes i el processa amb serveis d’intel·ligència artificial de tercers que no anomena. Aquesta política és allotjada en un subdomini gratuït de Firebase, no identifica cap responsable del tractament, no fixa cap termini i dona com a contacte un compte de Gmail personal.',
      platforms: ['ios'],
      businessModel: 'freemium',
      jurisdiction: 'Hong Kong',
      links: {
        website: 'https://redbrid-7be14.web.app/terms.html',
        privacyPolicy: 'https://redbrid-7be14.web.app/policy.html',
        appStore: 'https://apps.apple.com/es/app/id6740606431',
      },
      accountRequired: unknown('Ni la fitxa de l’App Store ni la política esmenten cap registre.'),
      openSource: f('no', 'official', ['traductor-ai-digitalsail-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Un teclat amb accés complet veu tot el que s’hi escriu a qualsevol aplicació: missatges privats, cerques, notes. La política promet no desar contrasenyes ni dades de pagament, però no diu quina empresa processa la resta ni durant quant de temps.',
      dataCollection: [
        row('contingut-de-missatges', 'yes', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['traductor-ai-digitalsail-privacy-policy'], note: 'Text introduït pel teclat dins de qualsevol aplicació. La política diu que no es desen contrasenyes ni dades de pagament, però no diu què passa amb la resta.' }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['traductor-ai-digitalsail-app-store'], note: 'L’etiqueta declara identificadors usats per rastrejar entre aplicacions i webs d’altres empreses.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['traductor-ai-digitalsail-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['traductor-ai-digitalsail-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['traductor-ai-digitalsail-app-store'] }),
        row('fitxers-i-documents', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['traductor-ai-digitalsail-privacy-policy'], note: 'La política diu que l’aplicació accedeix al porta-retalls i al sistema de fitxers per a funcions bàsiques.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['traductor-ai-digitalsail-app-store']),
        advertisingIdentifiers: f('yes', 'official', ['traductor-ai-digitalsail-app-store']),
        thirdPartyTrackersPresent: unknown('La política parla de «serveis d’IA de tercers» sense anomenar-ne cap ni esmentar cap xarxa publicitària, tot i que l’etiqueta declara rastreig.'),
      },
      dataUses: {
        targetedAdvertising: unknown('L’etiqueta declara identificadors per rastrejar, però la política no esmenta cap ús publicitari.'),
        profiling: unknown(),
        aiTraining: unknown('La política diu que es fan servir serveis d’IA de tercers i que les traduccions serveixen per millorar la qualitat, però no aclareix si s’entrenen models amb el text.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['traductor-ai-digitalsail-privacy-policy'], 'Serveis d’intel·ligència artificial de tercers, no identificats.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: f('no', 'official', ['traductor-ai-digitalsail-privacy-policy'], 'La política diu que no es venen ni es transfereixen dades a tercers sense consentiment.'),
        internationalTransfers: unknown('No hi ha cap referència a on es processen les dades ni a cap mecanisme de transferència.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['traductor-ai-digitalsail-privacy-policy'], 'La política no fixa cap termini.'),
        dataAfterDeletion: unknown(),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['traductor-ai-digitalsail-privacy-policy'], 'La política reconeix el dret de supressió, però no hi ha cap compte descrit ni cap procediment: cal escriure al correu del desenvolupador.'),
        selfService: f('no', 'official', ['traductor-ai-digitalsail-privacy-policy'], 'L’únic camí és el correu electrònic.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Retira l’accés complet del teclat a Configuració → General → Teclat del sistema operatiu.',
          'Escriu a l’adreça de contacte de la política demanant la supressió de les teves dades.',
          'Desinstal·la l’aplicació.',
        ],
        sources: ['traductor-ai-digitalsail-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['traductor-ai-digitalsail-privacy-policy'], 'Es reconeix el dret d’accés; no hi ha cap eina d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['traductor-ai-digitalsail-privacy-policy'], 'Els drets s’exerceixen per correu a un compte de Gmail personal, sense termini ni responsable identificat.'),
      },
      controls: {
        adPersonalizationOptOut: unknown('La política només remet a desactivar permisos o desinstal·lar l’aplicació.'),
        telemetryOptOut: f('no', 'official', ['traductor-ai-digitalsail-privacy-policy'], 'L’única manera d’aturar la recollida que proposa la política és canviar els permisos o desinstal·lar l’aplicació.'),
        granularControls: unknown(),
        defaultPosture: 'permissive',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('No és un servei de comunicació entre persones: el text va del teclat al servei de traducció.'),
        transportEncryption: f('yes', 'official', ['traductor-ai-digitalsail-privacy-policy'], 'La política diu que les dades es xifren en trànsit.'),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown('La política parla d’«auditories de seguretat periòdiques» sense cap detall ni cap certificació.'),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown(),
      },
      alternatives: [
        {
          app: 'traductor-de-deepl',
          comparability: 'partial',
          rationale:
            'DeepL és una empresa europea subjecta al RGPD amb un responsable identificat i terminis publicats, i tradueix text, veu i documents.',
          tradeOffs: 'No substitueix un teclat de sistema: cal enganxar el text a l’aplicació.',
        },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política és d’una sola pàgina i no compleix els mínims informatius del RGPD: no identifica el responsable, no fixa bases jurídiques ni terminis, no anomena els destinataris i no diu on es processa el text. Tot allò que no hi consta queda com a desconegut.',
        openQuestions: [
          'Quins serveis d’IA de tercers processen el text del teclat i en quin país?',
          'Es conserva el text traduït i durant quant de temps?',
          'Qui és el responsable del tractament i té representant a la Unió Europea?',
        ],
      },
    },

    /* ═══════════════════════════ Santa Biblia (YouVersion) ═══════════════════════════ */
    {
      slug: 'santa-biblia',
      name: 'Santa Biblia (YouVersion)',
      company: 'youversion',
      categories: ['llibres-i-lectura', 'comunitats-i-forums'],
      tagline: 'Una entitat sense ànim de lucre que renuncia a la publicitat segmentada sobre dades de conviccions religioses',
      summary:
        'El que registra aquesta aplicació —què subratlles, quins plans de lectura segueixes, quines notes escrius— és informació sobre conviccions religioses, una categoria especial del RGPD. YouVersion és de les poques aplicacions massives d’aquesta onada que diu explícitament que no fa servir galetes ni tecnologies similars per a publicitat basada en interessos i que no mostra anuncis, i l’etiqueta de l’App Store ho acompanya: no declara cap dada usada per rastrejar. A canvi, el correu queda vinculat al màrqueting propi i les dades es processen als Estats Units.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'donations',
      jurisdiction: 'Estats Units',
      userBase: 'L’aplicació diu haver-se instal·lat en més de 500 milions de dispositius.',
      links: {
        website: 'https://www.bible.com/',
        privacyPolicy: 'https://www.bible.com/privacy',
        appStore: 'https://apps.apple.com/es/app/id282935706',
      },
      accountRequired: f('no', 'official', ['santa-biblia-app-store'], 'Es pot llegir sense compte; el compte cal per als plans, els amics, les notes i la sincronització.'),
      openSource: f('no', 'official', ['santa-biblia-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les marques, les notes i els plans de lectura dibuixen amb precisió la pràctica religiosa d’una persona, i l’historial de cerca hi afegeix els dubtes que no explicaria a ningú. És una de les dades més sensibles que pot recollir una aplicació de lectura.',
      dataCollection: [
        row('conviccions-i-opinions', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['santa-biblia-privacy-policy'], note: 'Subratllats, notes, marcadors, oracions i plans de lectura. Són dades de categoria especial segons el RGPD.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['santa-biblia-app-store', 'santa-biblia-privacy-policy'], note: 'L’etiqueta la declara també per al màrqueting del mateix desenvolupador.' }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['santa-biblia-app-store', 'santa-biblia-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['santa-biblia-app-store'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['santa-biblia-app-store'] }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['santa-biblia-app-store', 'santa-biblia-privacy-policy'], note: 'Contingut compartit amb amics i a les converses de la comunitat.' }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['santa-biblia-privacy-policy'], note: 'Només si es dona permís per buscar-hi amics.' }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['santa-biblia-privacy-policy'] }),
        row('ubicacio-aproximada', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['santa-biblia-privacy-policy'], note: 'La política diu que, si s’activa, la ubicació es desa al dispositiu i que les coordenades i l’adreça IP es conserven uns set dies.' }),
        row('adreca-ip', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['santa-biblia-privacy-policy'], note: 'Conservació d’uns set dies segons la política.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['santa-biblia-app-store'], note: 'L’etiqueta el declara per al màrqueting del mateix desenvolupador, sense vincular-lo a la identitat.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['santa-biblia-app-store', 'santa-biblia-privacy-policy'], note: 'La política anomena Facebook i Google com a proveïdors d’atribució de les campanyes.' }),
        row('dades-de-pagament', 'optional', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['santa-biblia-app-store', 'santa-biblia-privacy-policy'], note: 'Donacions processades per Stripe i PayPal.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['santa-biblia-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['santa-biblia-app-store'], 'L’etiqueta no declara cap dada usada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['santa-biblia-privacy-policy'], 'La política diu que no es fan servir galetes ni tecnologies similars per a publicitat basada en interessos.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['santa-biblia-privacy-policy'], 'Hi ha proveïdors d’atribució de campanyes de Facebook i Google, i eines d’anàlisi, però no xarxes de publicitat segmentada.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['santa-biblia-privacy-policy'], 'La política diu que no es publiquen anuncis a les plataformes ni es fa publicitat basada en interessos.'),
        profiling: unknown('La política parla d’optimització del servei, sense descriure cap elaboració de perfils.'),
        aiTraining: unknown('S’esmenten funcions d’IA del dispositiu, com Apple Intelligence, però no si el contingut s’utilitza per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['santa-biblia-privacy-policy'], 'Passarel·les de pagament (Stripe, PayPal), proveïdors d’atribució (Facebook, Google), allotjament i proveïdors de traduccions bíbliques.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: unknown(),
        internationalTransfers: f('yes', 'official', ['santa-biblia-privacy-policy'], 'Les dades es transfereixen i es processen als Estats Units amb proteccions contractuals; la política no invoca cap decisió d’adequació concreta.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['santa-biblia-privacy-policy'], 'Hi ha terminis concrets per a les galetes (21 dies) i per a l’adreça IP i les coordenades (uns 7 dies), però el contingut del compte es conserva fins que s’elimina o el compte queda inactiu.'),
        dataAfterDeletion: f('partial', 'official', ['santa-biblia-privacy-policy'], 'Les dades agregades i desidentificades es conserven indefinidament, i les còpies en memòria cau poden durar fins a 30 dies.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['santa-biblia-privacy-policy']),
        selfService: f('yes', 'official', ['santa-biblia-privacy-policy'], 'Des de la configuració de l’aplicació o del web.'),
        directUrl: 'https://www.bible.com/settings',
        difficulty: 'easy',
        waitingPeriodDays: 14,
        requiresSupportContact: false,
        steps: [
          'Entra a la configuració del compte, des de l’aplicació o des de bible.com/settings.',
          'Tria l’opció d’eliminar el compte i confirma-la.',
          'Compta uns 14 dies fins que s’executa l’eliminació; les còpies en memòria cau poden durar fins a 30 dies.',
        ],
        dataRetained: 'Dades agregades i desidentificades, que l’entitat conserva indefinidament.',
        sources: ['santa-biblia-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['santa-biblia-privacy-policy'], 'Es pot demanar una còpia de les dades facilitades, però la política avisa que part del contingut propi de YouVersion pot no ser exportable fora de l’aplicació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['santa-biblia-privacy-policy'], 'La política enumera les bases jurídiques per a l’EEE —consentiment, contracte i interès legítim— i el procediment per exercir els drets.'),
      },
      controls: {
        adPersonalizationOptOut: na('No hi ha publicitat segmentada de la qual es pugui sortir.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['santa-biblia-privacy-policy'], 'Hi ha configuració de visibilitat del contingut i del perfil, però no un panell de privadesa complet.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: f('no', 'official', ['santa-biblia-privacy-policy'], 'El contingut se sincronitza als servidors de l’entitat, que hi té accés.'),
        transportEncryption: f('yes', 'official', ['santa-biblia-privacy-policy']),
        atRestEncryption: f('yes', 'official', ['santa-biblia-privacy-policy']),
        mfa: unknown('La política no esmenta cap verificació en dos passos.'),
        independentAudits: f('partial', 'official', ['santa-biblia-privacy-policy'], 'La política diu que la infraestructura de núvol té la certificació ISO 27017; no hi ha cap auditoria pública de l’aplicació.'),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'El web bible.com bloqueja les peticions automàtiques; la política s’ha llegit amb una eina de recuperació de pàgines i les afirmacions s’han limitat al que hi consta literalment. La qüestió oberta més rellevant és si les dades de conviccions religioses, que són de categoria especial, es tracten amb un consentiment explícit per a les persones de la Unió Europea.',
        openQuestions: [
          'Quin consentiment explícit es recull per al tractament de dades de categoria especial a la Unió Europea?',
          'YouVersion té representant a la Unió Europea als efectes de l’article 27 del RGPD?',
          'L’aplicació ofereix verificació en dos passos?',
        ],
      },
    },

    /* ═══════════════════════════ CoinIn ═══════════════════════════ */
    {
      slug: 'coinin',
      name: 'CoinIn',
      company: 'vortemol',
      categories: ['traduccio-i-referencia'],
      tagline: 'Identifica monedes amb la càmera i reparteix l’identificador publicitari entre set xarxes d’anuncis i d’analítica',
      summary:
        'CoinIn fotografia una moneda i te’n diu el valor. Per fer-ho recull l’IDFA, l’identificador de maquinari, l’identificador de Facebook, l’adreça IP i, opcionalment, la geolocalització «per entendre millor d’on és la moneda». La política enumera els destinataris sense embuts: Facebook, Apple, AppsFlyer, Amplitude, Firebase, IronSource i Appodeal. És una de les poques aplicacions d’aquest lot amb una política completa i verificable, però el que hi explica és un repartiment ampli de dades amb la indústria publicitària.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Xipre',
      links: {
        website: 'https://coininapp.com/',
        privacyPolicy: 'https://legal.coininapp.com/privacy-policy.html',
        appStore: 'https://apps.apple.com/es/app/id1672111368',
      },
      accountRequired: f('partial', 'official', ['coinin-privacy-policy'], 'Es comença sense registre, tot i que la política parla d’un compte i d’una funció d’eliminació dins de la configuració.'),
      openSource: f('no', 'official', ['coinin-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Una col·lecció de monedes és patrimoni. Si s’hi suma la geolocalització de les troballes i un identificador estable compartit amb xarxes publicitàries, el perfil que en resulta diu què tens, quant val i on ets.',
      dataCollection: [
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['coinin-app-store', 'coinin-privacy-policy'], note: 'Fotografies de les monedes, fetes amb la càmera.' }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['coinin-privacy-policy'], note: 'La política diu que es demana per «entendre millor la localitat de la moneda» i que la base jurídica és el consentiment.' }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['coinin-app-store', 'coinin-privacy-policy'], note: 'IDFA a iOS i AAID a Android, compartits amb Facebook Custom Audience, IronSource i Appodeal.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['coinin-app-store', 'coinin-privacy-policy'], note: 'Identificador de maquinari i identificador de Facebook.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['coinin-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['coinin-privacy-policy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['coinin-privacy-policy'], note: 'Idioma, zona horària, tipus i model, configuració, sistema operatiu, proveïdor d’Internet i operador mòbil.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['coinin-app-store', 'coinin-privacy-policy'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['coinin-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['coinin-app-store', 'coinin-privacy-policy'], note: 'La política inclou un consentiment per compartir dades de consum amb Apple.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['coinin-privacy-policy'], note: 'Només si s’escriu al servei d’atenció.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['coinin-app-store', 'coinin-privacy-policy'], note: 'Firebase Performance Monitoring i Firebase Crash Reporting.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['coinin-app-store', 'coinin-privacy-policy']),
        advertisingIdentifiers: f('yes', 'official', ['coinin-privacy-policy'], 'IDFA i AAID, recollits expressament.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['coinin-privacy-policy'], 'Facebook, AppsFlyer, Amplitude, Firebase, IronSource i Appodeal.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['coinin-privacy-policy'], 'Públics personalitzats de Facebook a partir de l’IDFA i anuncis servits per Appodeal.'),
        profiling: f('yes', 'official', ['coinin-privacy-policy'], 'La política diu que s’ajusta el contingut a les preferències i que es generen recomanacions de col·lecció.'),
        aiTraining: unknown('No s’esmenta cap ús de les fotografies per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['coinin-privacy-policy'], 'Amazon Web Services com a allotjament, i Facebook, AppsFlyer, Amplitude, Firebase, IronSource i Appodeal com a analítica i publicitat.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: unknown('La política no esmenta cap venda de dades, però tampoc no la descarta expressament.'),
        internationalTransfers: f('yes', 'official', ['coinin-privacy-policy'], 'Transferències fora de l’EEE emparades en clàusules contractuals tipus o en decisions d’adequació.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['coinin-privacy-policy'], 'La política només diu «el temps raonablement necessari», sense cap termini concret.'),
        dataAfterDeletion: f('partial', 'official', ['coinin-privacy-policy'], 'Es conserven les dades que calguin per complir obligacions legals i resoldre disputes.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['coinin-privacy-policy']),
        selfService: f('yes', 'official', ['coinin-privacy-policy'], 'La política diu que hi ha una funció d’eliminació a la configuració de l’aplicació; també s’accepta la petició per correu.'),
        difficulty: 'medium',
        requiresSupportContact: false,
        steps: [
          'Obre la configuració de l’aplicació i busca-hi l’opció d’eliminar el compte.',
          'Si no la trobes, escriu a support@coininapp.com demanant la supressió.',
          'Cancel·la la subscripció des de la configuració d’Apple o de Google: no s’anul·la sola.',
        ],
        sources: ['coinin-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['coinin-privacy-policy'], 'Es pot demanar una còpia i, per a l’EEE, la portabilitat en format llegible per una màquina.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['coinin-privacy-policy'], 'Els drets s’exerceixen per correu; la política informa del dret a reclamar davant de l’autoritat de control.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['coinin-privacy-policy'], 'La política remet als portals sectorials de baixa publicitària (NAI, DAA, Your Online Choices) i als controls de Facebook i d’Appodeal, no a un interruptor dins de l’aplicació.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['coinin-privacy-policy'], 'Es pot retirar el permís de geolocalització i desactivar les notificacions des del sistema operatiu.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('No hi ha comunicació entre persones: les fotografies es processen al servei.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      alternatives: [
        {
          app: 'coinsnap',
          comparability: 'equivalent',
          rationale: 'Fa la mateixa feina d’identificar monedes amb la càmera del telèfon.',
          tradeOffs: 'Cal comprovar-ne per separat la política: pertànyer a la mateixa categoria no vol dir recollir menys.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política és del febrer del 2023 i encara esmenta «Facebook Analytics», un servei discontinuat, cosa que indica que fa temps que no s’actualitza. Tot i així, és de les poques del lot que identifica el responsable, les bases jurídiques i els destinataris amb noms i cognoms.',
        openQuestions: [
          'Hi ha realment una opció d’eliminar el compte dins de l’aplicació, com diu la política?',
          'Quant de temps es conserven les fotografies de les monedes i la geolocalització associada?',
        ],
      },
    },

    /* ═══════════════════════════ Collectr ═══════════════════════════ */
    {
      slug: 'collectr',
      name: 'Collectr',
      company: 'collectr',
      categories: ['utilitats', 'comunitats-i-forums'],
      tagline: 'Un inventari de cartes col·leccionables que declara la ubicació exacta vinculada a la identitat',
      summary:
        'Collectr valora col·leccions de cartes de Pokémon, Magic o Yu-Gi-Oh a partir d’una base de dades de preus en temps real. L’etiqueta de l’App Store no declara cap dada de rastreig, però sí una cosa poc habitual en una aplicació d’inventari: la ubicació exacta, vinculada a la identitat, per a «personalització del producte». La política, canadenca, cobreix alhora el web i l’aplicació i descriu galetes de segmentació, gravació de sessions i publicitat de tercers sense dir quina part correspon a cadascun.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Canadà',
      links: {
        website: 'https://www.getcollectr.com/',
        privacyPolicy: 'https://www.getcollectr.com/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id1603892248',
      },
      accountRequired: f('yes', 'official', ['collectr-app-store', 'collectr-privacy-policy'], 'Cal un compte amb nom i correu per desar i sincronitzar la col·lecció.'),
      openSource: f('no', 'official', ['collectr-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Un inventari valorat de cartes és una llista d’objectes cars amb el seu preu al costat. Vincular-hi la ubicació exacta de qui el manté converteix l’aplicació en un mapa de col·leccions i de patrimoni.',
      dataCollection: [
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['collectr-app-store'], note: 'L’etiqueta la declara per a personalització del producte. La política no explica per a què cal en una aplicació d’inventari.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['collectr-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['collectr-app-store', 'collectr-privacy-policy'], note: 'La política diu que el correu es pot compartir amb filials i empreses associades.' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['collectr-app-store', 'collectr-privacy-policy'] }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal'], sources: ['collectr-privacy-policy'], note: 'Es demana per fer servir les funcions socials.' }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['collectr-privacy-policy'] }),
        row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['collectr-privacy-policy'], note: 'Quan es compra alguna cosa a la botiga.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['collectr-app-store', 'collectr-privacy-policy'], note: 'Vitrines i publicacions de la part social.' }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['collectr-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['collectr-privacy-policy'], note: 'Recollida amb galetes, balises, Google Analytics i SDK de tercers.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['collectr-privacy-policy'], note: 'La política descriu galetes de segmentació i gravació de sessions al web.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['collectr-app-store', 'collectr-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['collectr-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['collectr-app-store'], 'L’etiqueta no declara cap dada usada per rastrejar entre aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['collectr-app-store'], 'L’etiqueta no declara cap identificador publicitari.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['collectr-privacy-policy'], 'Google Analytics, balises, gravació de sessions i SDK de tercers, segons la política conjunta del web i l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['collectr-privacy-policy'], 'La política es reserva mostrar anuncis segmentats de tercers i compartir informació amb xarxes i servidors publicitaris; l’etiqueta de l’aplicació, en canvi, no declara cap dada publicitària. El text no distingeix el web de l’aplicació.'),
        profiling: unknown(),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['collectr-privacy-policy'], 'Proveïdors de serveis, socis de publicitat i d’analítica i, si hi ha una operació societària, el comprador.'),
        intraGroupSharing: f('yes', 'official', ['collectr-privacy-policy'], 'La política diu que es pot compartir informació com el correu amb filials i empreses del grup.'),
        dataBrokerSales: unknown(),
        internationalTransfers: f('yes', 'official', ['collectr-privacy-policy'], 'Les dades es desen al Canadà, però els proveïdors les poden processar fora, inclosos els Estats Units, amb obligacions contractuals. No s’invoca cap mecanisme del RGPD.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['collectr-privacy-policy'], 'La política diu «el temps necessari», sense terminis.'),
        dataAfterDeletion: unknown('La política no descriu què passa quan s’elimina un compte.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['collectr-privacy-policy'], 'La política reconeix el dret de supressió i dona una adreça de contacte, però no descriu cap procediment d’eliminació del compte.'),
        selfService: unknown('No hem pogut verificar si hi ha una opció d’eliminar el compte dins de l’aplicació. El web respon amb un error 403 a les consultes automàtiques.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Escriu a contact@getcollectr.com demanant la supressió del compte i de les dades.',
          'Retira el permís d’ubicació a la configuració del sistema: l’aplicació el declara com a ubicació exacta vinculada a la teva identitat.',
        ],
        sources: ['collectr-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['collectr-privacy-policy'], 'La política reconeix la portabilitat, sense cap eina descrita.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['collectr-privacy-policy'], 'La política enumera els drets del RGPD, esmenta un delegat de protecció de dades i informa del dret a reclamar davant d’una autoritat de control.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['collectr-privacy-policy'], 'Només es remet a la configuració de galetes del navegador i a les eines de baixa de Google Analytics.'),
        telemetryOptOut: f('no', 'official', ['collectr-privacy-policy'], 'La política diu que no s’atenen els senyals automàtics de no-rastreig i no ofereix cap interruptor d’analítica.'),
        granularControls: unknown(),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('No és un servei de comunicació: la col·lecció se sincronitza al servidor.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('El domini no serveix cap fitxer security.txt.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La discrepància a vigilar és entre la política —que parla de publicitat segmentada, gravació de sessions i xarxes publicitàries— i l’etiqueta de l’App Store, que no declara cap dada publicitària ni de rastreig. La política cobreix el web i l’aplicació sense separar-los, i això fa que no es pugui saber què s’aplica a cadascun.',
        openQuestions: [
          'Per a què necessita una aplicació d’inventari la ubicació exacta vinculada a la identitat?',
          'Hi ha una opció d’eliminar el compte dins de l’aplicació?',
          'Quines parts de la política de publicitat segmentada s’apliquen realment a l’aplicació mòbil?',
        ],
      },
    },

    /* ═══════════════════════════ InstantTranslator ═══════════════════════════ */
    {
      slug: 'instant-translator',
      name: 'InstantTranslator',
      company: 'applabs',
      categories: ['traduccio-i-referencia'],
      tagline: 'Diu que no desa cap text traduït, però viu de l’identificador publicitari',
      summary:
        'De les tres aplicacions de traducció amb IA d’aquest lot, és la que explica millor què fa: afirma que no recull ni desa els textos traduïts, i detalla que la traducció fora de línia es fa al dispositiu amb Google ML Kit. El que sí que recull és l’identificador publicitari i les dades de rendiment dels anuncis per a les plataformes de publicitat, i l’etiqueta de l’App Store confirma que els identificadors s’utilitzen per rastrejar entre aplicacions. Què passa amb el text quan la traducció es fa al núvol, en canvi, no consta enlloc.',
      platforms: ['ios'],
      businessModel: 'freemium',
      jurisdiction: 'Hong Kong',
      links: {
        website: 'https://instanttranslator-6e103.web.app/term_of_use.txt',
        privacyPolicy: 'https://instanttranslator-6e103.web.app/privacy_policy.txt',
        appStore: 'https://apps.apple.com/es/app/id6636468891',
      },
      accountRequired: unknown('Ni la política ni la fitxa de l’App Store esmenten cap registre.'),
      openSource: f('no', 'official', ['instant-translator-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El que travessa un traductor és allò que una persona no entén i vol entendre: correus de la feina, cartes de metges, converses privades. L’aplicació diu que no en desa res; el que sí que desa i comparteix és l’identificador que permet seguir-la entre aplicacions.',
      dataCollection: [
        row('contingut-de-missatges', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['instant-translator-privacy-policy'], note: 'La política afirma que no es recull, no es monitora i no es desa el contingut ni les preferències de cerca. No diu què passa amb el text quan la traducció es fa al núvol.' }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'seguretat-i-prevencio-del-frau'], sources: ['instant-translator-app-store', 'instant-translator-privacy-policy'], note: 'La política diu que es recull per complir els requisits de les plataformes publicitàries i evitar el frau amb els anuncis.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['instant-translator-app-store', 'instant-translator-privacy-policy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['instant-translator-privacy-policy'], note: 'Tipus i model del dispositiu i versió del sistema operatiu.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['instant-translator-app-store', 'instant-translator-privacy-policy'], note: 'Dades de rendiment i d’interacció amb els anuncis.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['instant-translator-privacy-policy'], note: 'El SDK de Google ML Kit envia mètriques tècniques i d’ús de l’API a Google.' }),
        row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'compliment-legal'], sources: ['instant-translator-privacy-policy'], note: 'Si demanes una devolució, la política condiciona tramitar-la a cedir l’historial de comandes, de despesa i de devolucions anteriors a Apple i a les passarel·les de pagament.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['instant-translator-app-store']),
        advertisingIdentifiers: f('yes', 'official', ['instant-translator-privacy-policy']),
        thirdPartyTrackersPresent: f('yes', 'official', ['instant-translator-privacy-policy'], 'Plataformes de publicitat de tercers, que la política no anomena, i el SDK de Google ML Kit.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['instant-translator-app-store', 'instant-translator-privacy-policy'], 'L’etiqueta declara publicitat de tercers i la política reconeix que les dades serveixen per lliurar anuncis rellevants.'),
        profiling: unknown(),
        aiTraining: f('no', 'official', ['instant-translator-privacy-policy'], 'La política diu que el text traduït no es desa; amb el ML Kit, la traducció fora de línia es fa al dispositiu i el text no s’envia a Google.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['instant-translator-privacy-policy'], 'Plataformes publicitàries i Google, a través del SDK de ML Kit.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: unknown(),
        internationalTransfers: unknown('La política invoca el RGPD però no diu on es processen les dades ni amb quin mecanisme es transfereixen.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['instant-translator-privacy-policy'], 'No hi ha cap termini de conservació.'),
        dataAfterDeletion: unknown(),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['instant-translator-privacy-policy'], 'La política reconeix el dret de supressió, subjecte a obligacions legals, però no descriu cap compte ni cap procediment.'),
        selfService: f('no', 'official', ['instant-translator-privacy-policy'], 'Només per correu al desenvolupador.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Desactiva el seguiment publicitari de l’aplicació a Configuració → Privadesa i seguretat → Seguiment del sistema operatiu.',
          'Escriu a l’adreça de contacte de la política per demanar la supressió de les dades.',
          'Desinstal·la l’aplicació; els models d’idioma descarregats s’esborren amb ella.',
        ],
        sources: ['instant-translator-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['instant-translator-privacy-policy'], 'Es reconeix el dret a demanar una còpia, sense cap eina.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['instant-translator-privacy-policy'], 'Els drets s’exerceixen per correu; no hi ha delegat de protecció de dades, termini de resposta ni representant a la Unió Europea.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['instant-translator-privacy-policy'], 'La política remet a les polítiques de les plataformes publicitàries; el control efectiu és el permís de seguiment del sistema operatiu.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['instant-translator-privacy-policy'], 'Els models de traducció fora de línia es poden esborrar des de l’aplicació quan la funció ho permet.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('No hi ha comunicació entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown(),
      },
      alternatives: [
        {
          app: 'traductor-de-deepl',
          comparability: 'equivalent',
          rationale: 'Tradueix text, veu, fotografies i documents, i el responsable és una empresa europea amb política de privadesa completa.',
          tradeOffs: 'Les funcions il·limitades són de pagament.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La clàusula de devolucions és inhabitual: condiciona tramitar el reemborsament a autoritzar la cessió de l’historial de compres, de despesa i de devolucions anteriors. És un consentiment que no és lliure, perquè la política el declara «precondició» per atendre la sol·licitud.',
        openQuestions: [
          'Quin proveïdor fa la traducció al núvol dels més de 100 idiomes i on es processa el text?',
          'Quines plataformes publicitàries hi ha integrades?',
          'APPLABS LIMITED té representant a la Unió Europea?',
        ],
      },
    },

    /* ═══════════════════════════ AI Translator (Three Tiger) ═══════════════════════════ */
    {
      slug: 'ai-translator-three-tiger',
      name: 'AI Translator: Voice&Text&Photo',
      company: 'three-tiger-network',
      categories: ['traduccio-i-referencia'],
      tagline: 'La política de privadesa que enllaça l’App Store no existeix i el domini del desenvolupador ven casinos',
      summary:
        'Aquesta aplicació de traducció per veu, text i fotografia continua al top gratuït de l’App Store espanyol, però el vincle a la política de privadesa que hi consta respon amb un error 404 i el domini del desenvolupador, aitranslatorvoice.com, ara serveix ressenyes de casinos en línia. Sense política no hi ha manera de saber qui és el responsable, on van els textos ni quant de temps es conserven, tot i que l’etiqueta declara identificadors usats per rastrejar. L’aplicació no rep cap actualització des de l’octubre del 2025.',
      platforms: ['ios'],
      businessModel: 'freemium',
      serviceStatus: 'active',
      links: {
        appStore: 'https://apps.apple.com/es/app/id6462119099',
      },
      accountRequired: unknown('No hi ha cap document del servei que ho digui.'),
      openSource: f('no', 'official', ['ai-translator-three-tiger-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El que se sap d’aquesta aplicació és el que declara l’etiqueta de l’App Store i prou: identificadors per rastrejar-te entre aplicacions i l’identificador del dispositiu per a analítica. La resta —qui tracta els textos traduïts, on i durant quant de temps— no està documentada enlloc.',
      dataCollection: [
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['ai-translator-three-tiger-app-store'], note: 'L’etiqueta declara identificadors usats per rastrejar entre aplicacions i webs d’altres empreses.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['ai-translator-three-tiger-app-store'] }),
        row('contingut-de-missatges', 'unknown', { note: 'L’aplicació tradueix veu, text i fotografies, però no hi ha cap document que digui si el contingut s’envia a un servidor ni si s’hi conserva.' }),
        row('veu-i-audio', 'unknown', { note: 'La traducció de veu implica capturar àudio; no consta si es processa al dispositiu o al núvol.' }),
        row('fotografies-i-videos', 'unknown', { note: 'La traducció de fotografies implica enviar-hi imatges; no hi ha documentació.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['ai-translator-three-tiger-app-store']),
        advertisingIdentifiers: f('yes', 'official', ['ai-translator-three-tiger-app-store'], 'L’etiqueta declara identificadors per rastrejar; sense política no se sap amb qui es comparteixen.'),
        thirdPartyTrackersPresent: unknown('No hi ha cap inventari de components de tercers.'),
      },
      dataUses: {
        targetedAdvertising: unknown('L’etiqueta declara rastreig, però no hi ha cap document que expliqui l’ús publicitari.'),
        profiling: unknown(),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: unknown(),
        intraGroupSharing: unknown(),
        dataBrokerSales: unknown(),
        internationalTransfers: unknown(),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: unknown('No hi ha cap política de privadesa accessible.'),
        dataAfterDeletion: unknown(),
      },
      accountDeletion: {
        possible: unknown('Sense política ni pàgina d’ajuda, no hi ha cap procediment documentat.'),
        selfService: unknown(),
        difficulty: 'unknown',
        steps: [
          'Desactiva el seguiment publicitari de l’aplicació a la configuració de privadesa del sistema operatiu.',
          'Desinstal·la l’aplicació: no hi ha cap canal documentat per demanar la supressió de les dades.',
        ],
        sources: ['ai-translator-three-tiger-website'],
      },
      userRights: {
        dataExport: unknown(),
        exportFormatQuality: 'unknown',
        rightsExercise: unknown('No hi ha cap adreça de contacte de privadesa accessible: el domini del desenvolupador ja no allotja el producte.'),
      },
      controls: {
        adPersonalizationOptOut: unknown('L’únic control comprovable és el permís de seguiment del sistema operatiu.'),
        telemetryOptOut: unknown(),
        granularControls: unknown(),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('No hi ha comunicació entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown(),
      },
      alternatives: [
        {
          app: 'traductor-de-deepl',
          comparability: 'equivalent',
          rationale: 'Fa la mateixa feina de traduir veu, text i imatges, amb un responsable europeu identificat i una política vigent.',
        },
        {
          app: 'google-translate',
          comparability: 'equivalent',
          rationale: 'Tradueix veu, text i fotografies, i almenys es pot saber qui tracta les dades i com exercir-hi els drets.',
          tradeOffs: 'Les dades passen a formar part de l’ecosistema de Google.',
        },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'No es tracta d’una política difícil de llegir: no n’hi ha. L’adreça que enllaça la fitxa de l’App Store retorna un 404 i el domini del desenvolupador s’ha reconvertit en un web de ressenyes de casinos. Tota la fitxa queda, per tant, en desconegut, llevat del que declara l’etiqueta de l’App Store.',
        openQuestions: [
          'Qui és el responsable del tractament i en quin país està establert?',
          'Els textos, l’àudio i les fotografies que es tradueixen s’envien a un servidor?',
          'El domini aitranslatorvoice.com s’ha venut o s’ha perdut? Hi ha cap política de privadesa vigent en algun altre lloc?',
        ],
      },
    },

    /* ═══════════════════════════ Sky Guide ═══════════════════════════ */
    {
      slug: 'sky-guide',
      name: 'Sky Guide',
      company: 'fifth-star-labs',
      categories: ['educacio', 'utilitats'],
      tagline: 'Sense comptes i amb la ubicació desdibuixada a cinc quilòmetres abans de sortir del telèfon',
      summary:
        'Sky Guide identifica estrelles, planetes i satèl·lits apuntant el telèfon al cel. L’estudi no crea comptes d’usuari —ho diu la política, i per això no pot atendre ni exportacions ni eliminacions— i la ubicació, que és imprescindible per calcular el cel, es queda al dispositiu llevat que s’activin les notificacions de pas de satèl·lits: llavors s’envia desdibuixada a un radi de cinc quilòmetres i acompanyada d’un testimoni anònim. L’etiqueta de l’App Store ho confirma: cap dada vinculada a la identitat i cap dada de rastreig.',
      platforms: ['ios', 'macos'],
      businessModel: 'freemium',
      jurisdiction: 'Estats Units',
      links: {
        website: 'https://www.fifthstarlabs.com/',
        privacyPolicy: 'https://www.fifthstarlabs.com/privacy/',
        appStore: 'https://apps.apple.com/es/app/id576588894',
      },
      accountRequired: f('no', 'official', ['sky-guide-privacy-policy'], 'La política diu explícitament que l’estudi no genera ni desa comptes d’usuari.'),
      openSource: f('no', 'official', ['sky-guide-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La ubicació d’una persona que mira el cel és una dada de casa seva. Aquí es fa servir al dispositiu i, quan ha de sortir-ne, s’engreixa fins a un radi de cinc quilòmetres i es desvincula del compte, perquè no n’hi ha.',
      dataCollection: [
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sky-guide-app-store', 'sky-guide-privacy-policy'], note: 'Només surt del dispositiu si s’activen les notificacions, desdibuixada a un radi de 5 km i amb un testimoni anònim.' }),
        row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sky-guide-privacy-policy'], note: 'La ubicació precisa es fa servir al dispositiu per calcular el cel; la política diu que no es transmet a l’estudi.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['sky-guide-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['sky-guide-app-store'] }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['atencio-a-lusuari'], sources: ['sky-guide-privacy-policy'], note: 'Només si escrius a l’estudi o t’apuntes al butlletí.' }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['atencio-a-lusuari'], sources: ['sky-guide-privacy-policy'] }),
        row('informacio-del-dispositiu', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['atencio-a-lusuari'], sources: ['sky-guide-privacy-policy'], note: 'Si fas servir «Send Feedback», el correu porta el maquinari i les versions; es poden esborrar abans d’enviar-lo.' }),
        row('fotografies-i-videos', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['sky-guide-privacy-policy'], note: 'La política diu que el mode de realitat augmentada demana la càmera però que mai no se’n recullen dades.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['sky-guide-app-store']),
        advertisingIdentifiers: f('no', 'official', ['sky-guide-app-store'], 'L’etiqueta no declara cap identificador publicitari.'),
        thirdPartyTrackersPresent: unknown('La política no inventaria els components de tercers de l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['sky-guide-privacy-policy'], 'La política diu que l’objectiu de les dades és fer millors productes, no monetitzar-les, i que les notificacions mai no es fan servir per a màrqueting.'),
        profiling: f('no', 'official', ['sky-guide-privacy-policy'], 'La política diu que no es combina informació no personal per identificar ningú.'),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('no', 'official', ['sky-guide-privacy-policy'], 'Només per requeriment legal o en cas de fusió o venda de l’empresa.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: f('no', 'official', ['sky-guide-privacy-policy'], 'La política diu que la informació personal no es comparteix amb tercers fora dels casos legals i societaris.'),
        internationalTransfers: unknown('La política no diu on són els servidors ni quin mecanisme empara les transferències des de la Unió Europea.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['sky-guide-privacy-policy'], 'La política diu «el temps necessari», sense cap termini concret.'),
        dataAfterDeletion: na('No hi ha comptes: l’estudi diu que no en genera ni en desa cap.'),
      },
      accountDeletion: {
        possible: na('L’aplicació no crea cap compte. La política adverteix que, per això mateix, l’estudi no pot eliminar-ne cap ni facilitar-ne les dades.'),
        selfService: na('No hi ha compte propi.'),
        difficulty: 'unknown',
        requiresSupportContact: false,
        steps: [
          'Retira el permís d’ubicació i desactiva les notificacions a la configuració del sistema operatiu si no vols que en surti res.',
          'Si t’has apuntat al butlletí, dona’t de baixa amb l’enllaç del peu del correu.',
          'Desinstal·la l’aplicació: les dades del cel i les preferències són al dispositiu.',
        ],
        dataRetained: 'La ubicació desdibuixada associada al testimoni anònim de notificacions, si s’havien activat.',
        sources: ['sky-guide-privacy-policy'],
      },
      userRights: {
        dataExport: na('Sense comptes no hi ha cap conjunt de dades personals a exportar; la política ho diu expressament.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['sky-guide-privacy-policy'], 'La política, del 2018, no esmenta el RGPD ni cap termini de resposta; per exercir qualsevol dret remet al formulari de contacte.'),
      },
      controls: {
        adPersonalizationOptOut: na('L’aplicació no mostra publicitat.'),
        telemetryOptOut: f('partial', 'official', ['sky-guide-privacy-policy'], 'Les dades de maquinari del formulari de comentaris es poden esborrar abans d’enviar-lo; l’analítica d’ús no té interruptor descrit.'),
        granularControls: f('partial', 'official', ['sky-guide-privacy-policy'], 'El fet d’activar o no les notificacions és el que decideix si la ubicació surt del dispositiu.'),
        defaultPosture: 'protective',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('No hi ha missatgeria ni contingut sincronitzat: el càlcul del cel es fa al dispositiu.'),
        transportEncryption: f('yes', 'official', ['sky-guide-privacy-policy'], 'La política diu que es fa servir TLS tant per a la informació personal com per a les bases de dades astronòmiques externes.'),
        atRestEncryption: unknown(),
        mfa: na('No hi ha comptes ni contrasenyes.'),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política és del maig del 2018 i no s’ha actualitzat des de llavors: no esmenta el RGPD, ni terminis, ni un representant a la Unió Europea. Tot i això, el disseny del producte —sense comptes i amb la ubicació desdibuixada abans de sortir del telèfon— és de minimització real, i l’etiqueta de l’App Store el corrobora.',
        openQuestions: [
          'On són allotjats els servidors de notificacions i quin mecanisme empara les transferències des de la Unió Europea?',
          'Quin servei d’analítica fa servir l’aplicació per a les dades d’ús i de diagnòstic que declara l’etiqueta?',
        ],
      },
    },

    /* ═══════════════════════════ HeritageAI ═══════════════════════════ */
    {
      slug: 'heritageai',
      name: 'HeritageAI',
      company: 'joylink-network-tech',
      categories: ['edicio-de-foto-i-video'],
      tagline: 'La política diu que cap dada no serveix per rastrejar-te; l’etiqueta de l’App Store diu el contrari',
      summary:
        'HeritageAI demana una fotografia de la teva cara i en genera retrats «ancestrals» i històries d’avantpassats inventades. La política és inusualment detallada: la detecció de cara es fa al dispositiu, la imatge s’envia a una passarel·la pròpia amb servidors a Singapur i a Replicate, s’esborra en 24 hores i no s’entrenen models. Però aquesta mateixa política inclou una taula que assegura que cap dada no s’usa per rastrejar, mentre que l’etiqueta de l’App Store declara identificadors usats per rastrejar-te i l’identificador del dispositiu per a publicitat de tercers.',
      platforms: ['ios'],
      businessModel: 'freemium',
      links: {
        website: 'https://tagv.papilioaiimg.com/',
        privacyPolicy: 'https://tagv.papilioaiimg.com/privacyPolicy.html',
        appStore: 'https://apps.apple.com/es/app/id6761894538',
      },
      accountRequired: unknown('Ni la política ni la fitxa de l’App Store esmenten cap registre.'),
      openSource: f('no', 'official', ['heritageai-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Una fotografia de la cara enviada a un servei d’IA és la dada més identificativa que hi ha. L’empresa promet que no en fa plantilles biomètriques, que la processa un tercer i que l’esborra en 24 hores; tot allò que es desa al telèfon, en canvi, hi queda fins que s’esborra a mà.',
      dataCollection: [
        row('fotografies-i-videos', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['heritageai-privacy-policy'], note: 'La imatge triada s’envia a la passarel·la PapilioAI (servidors a Singapur) i a Replicate, i la política diu que s’esborra automàticament en 24 hores.' }),
        row('dades-biometriques', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['heritageai-privacy-policy'], note: 'La política diu que la detecció de cara es fa al dispositiu amb el marc Vision d’Apple, que només localitza un rectangle, i que no es creen plantilles ni identificadors biomètrics.' }),
        row('origen-etnic-o-nacionalitat', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['heritageai-privacy-policy'], note: 'La política insisteix que els resultats són ficció i que l’aplicació no determina l’ascendència, l’origen ètnic ni cap dada genètica.' }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['heritageai-app-store'], note: 'L’etiqueta declara identificadors usats per rastrejar; la política no n’esmenta cap.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['heritageai-app-store'], note: 'Declarat per a publicitat de tercers.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['heritageai-privacy-policy'], note: 'Model, versió del sistema operatiu i versió de l’aplicació.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['heritageai-privacy-policy'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['heritageai-app-store'], 'L’etiqueta declara identificadors usats per rastrejar, en contradicció amb la taula de divulgació de la política.'),
        advertisingIdentifiers: f('yes', 'official', ['heritageai-app-store']),
        thirdPartyTrackersPresent: unknown('La política no anomena cap xarxa publicitària ni cap SDK d’analítica.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['heritageai-app-store'], 'L’etiqueta declara l’identificador del dispositiu per a publicitat de tercers; la política diu que les imatges no s’usen per a perfils publicitaris, però no parla dels identificadors.'),
        profiling: unknown(),
        aiTraining: f('no', 'official', ['heritageai-privacy-policy'], 'La política diu expressament que ni l’empresa ni els proveïdors poden fer servir les imatges per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['heritageai-privacy-policy'], 'La passarel·la pròpia PapilioAI i Replicate, com a proveïdor de generació d’imatges.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: f('no', 'official', ['heritageai-privacy-policy'], 'La política diu que no es venen, lloguen ni intercanvien dades personals ni dades de la cara.'),
        internationalTransfers: f('yes', 'official', ['heritageai-privacy-policy'], 'La infraestructura de processament és a Singapur i Replicate processa les imatges als seus sistemes. La política no invoca cap mecanisme del RGPD.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['heritageai-privacy-policy'], 'Les fotografies d’origen s’esborren automàticament en 24 hores des que acaba la generació; els resultats desats al dispositiu hi queden fins que s’esborren.'),
        dataAfterDeletion: f('partial', 'official', ['heritageai-privacy-policy'], 'La supressió es fa «en un termini raonable» i, quan escaigui, en 30 dies, amb les excepcions legals de conservació.'),
        periods: [
          { dataType: 'fotografies-i-videos', period: '24 hores als servidors de processament', sources: ['heritageai-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('partial', 'official', ['heritageai-privacy-policy'], 'No hi ha cap compte descrit; es pot demanar la supressió de la informació associada al processament d’imatges escrivint al desenvolupador.'),
        selfService: f('partial', 'official', ['heritageai-privacy-policy'], 'El consentiment per al processament d’imatges es pot retirar des de Configuració → Privacy Choices, però la supressió de dades s’ha de demanar per correu.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        waitingPeriodDays: 30,
        steps: [
          'Retira el consentiment de processament d’imatges a Configuració → Privacy Choices, dins de l’aplicació.',
          'Esborra l’historial local i els resultats que hagis desat a la fototeca.',
          'Escriu a l’adreça de contacte de la política per demanar la supressió de les dades associades; el termini declarat és de 30 dies.',
        ],
        sources: ['heritageai-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['heritageai-privacy-policy'], 'Es reconeix el dret d’accés, sense cap eina d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['heritageai-privacy-policy'], 'Els drets s’exerceixen per correu; no hi ha delegat de protecció de dades ni representant a la Unió Europea.'),
      },
      controls: {
        adPersonalizationOptOut: unknown('La política no esmenta cap control publicitari, tot i que l’etiqueta declara publicitat de tercers.'),
        telemetryOptOut: unknown(),
        granularControls: f('yes', 'official', ['heritageai-privacy-policy'], 'Hi ha un avís previ a cada processament d’imatge i un apartat de Privacy Choices per retirar el consentiment.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: f('no', 'official', ['heritageai-privacy-policy'], 'Les imatges es desxifren per processar-les a la passarel·la i a Replicate.'),
        transportEncryption: f('yes', 'official', ['heritageai-privacy-policy'], 'La política parla de transmissió segura de les dades.'),
        atRestEncryption: unknown(),
        mfa: na('No hi ha comptes ni contrasenyes descrits.'),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown(),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política és de les més completes del lot pel que fa al tractament de les imatges, però contradiu l’etiqueta de l’App Store en un punt central: la taula d’«App Privacy Disclosure» afirma que cap dada no s’usa per rastrejar, mentre que la fitxa d’Apple declara identificadors usats per rastrejar i l’identificador del dispositiu per a publicitat de tercers. La contradicció és del mateix desenvolupador, que omple totes dues coses.',
        openQuestions: [
          'Quina xarxa publicitària hi ha integrada, si la política no n’esmenta cap?',
          'Qui és JOYLINK NETWORK TECH LIMITED i en quin país està establerta?',
          'Quant de temps conserva Replicate les imatges enviades?',
        ],
      },
    },

    /* ═══════════════════════════ Auto Clicker ═══════════════════════════ */
    {
      slug: 'auto-clicker',
      name: 'Auto Clicker: Tap Automation',
      company: 'fm-apps',
      categories: ['utilitats'],
      tagline: 'Una política copiada d’altres aplicacions per a una utilitat que declara dades d’ús per rastrejar-te',
      summary:
        'L’aplicació automatitza tocs repetits i hi afegeix un esborrador de fons amb IA i un reproductor d’IPTV, funcions sense relació entre elles. L’etiqueta de l’App Store declara dades d’ús utilitzades per rastrejar i dades d’ús i de publicitat vinculades a la identitat per a publicitat de tercers. La política de privadesa és un text genèric allotjat en una pàgina gratuïta de Netlify que encara conté fragments d’altres aplicacions («providing Hannah», «Translate All»), no identifica cap responsable i no fixa cap termini ni cap procediment de supressió.',
      platforms: ['ios'],
      businessModel: 'advertising',
      links: {
        website: 'https://florencemitchell.netlify.app/',
        privacyPolicy: 'https://florencemitchell.netlify.app/privacy-policy.html',
        appStore: 'https://apps.apple.com/es/app/id6758081018',
      },
      accountRequired: unknown('Ni la política ni la fitxa de l’App Store esmenten cap registre.'),
      openSource: f('no', 'official', ['auto-clicker-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El valor de l’aplicació per a qui la publica no és l’automatització de tocs, sinó el flux d’ús i de publicitat que en surt: és l’única categoria que declara vinculada a la identitat i, alhora, utilitzada per rastrejar.',
      dataCollection: [
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['auto-clicker-app-store'], note: 'És l’única categoria que l’etiqueta declara alhora vinculada a la identitat i usada per rastrejar.' }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['auto-clicker-app-store', 'auto-clicker-privacy-policy'], note: 'L’etiqueta declara «datos de publicidad» vinculats a la identitat i la política enumera AdMob com a proveïdor.' }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['auto-clicker-privacy-policy'], note: 'Registres d’error recollits per components de tercers.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['auto-clicker-privacy-policy'], note: 'Nom del dispositiu, versió del sistema operatiu i configuració de l’aplicació.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['auto-clicker-app-store', 'auto-clicker-privacy-policy'], note: 'Firebase Crashlytics.' }),
        row('historial-de-compres', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['auto-clicker-privacy-policy'], note: 'Subscripcions de renovació automàtica cobrades per Apple.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['auto-clicker-app-store'], 'L’etiqueta declara dades d’ús usades per rastrejar entre aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['auto-clicker-app-store', 'auto-clicker-privacy-policy']),
        thirdPartyTrackersPresent: f('yes', 'official', ['auto-clicker-privacy-policy'], 'AdMob, Google Analytics for Firebase, Firebase Crashlytics, Facebook i OneSignal.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['auto-clicker-app-store', 'auto-clicker-privacy-policy'], 'L’etiqueta declara publicitat de tercers amb dades vinculades a la identitat.'),
        profiling: unknown(),
        aiTraining: unknown('La política no diu res de les imatges que es processen amb l’esborrador de fons d’IA.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['auto-clicker-privacy-policy'], 'AdMob, Google Analytics for Firebase, Firebase Crashlytics, Facebook i OneSignal.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: unknown(),
        internationalTransfers: unknown('La política no diu on es processen les dades ni amb quin mecanisme es transfereixen.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['auto-clicker-privacy-policy'], 'La política diu només que la informació «es retindrà», sense cap termini.'),
        dataAfterDeletion: unknown(),
      },
      accountDeletion: {
        possible: unknown('La política no descriu cap compte ni cap procediment de supressió; tampoc no dona cap adreça de contacte concreta.'),
        selfService: unknown(),
        difficulty: 'unknown',
        steps: [
          'Desactiva el seguiment publicitari de l’aplicació a la configuració de privadesa del sistema operatiu.',
          'Cancel·la la subscripció des de la configuració d’Apple si n’hi tens cap activa.',
          'Desinstal·la l’aplicació: no hi ha cap canal documentat per demanar la supressió de les dades.',
        ],
        sources: ['auto-clicker-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política no esmenta cap dret d’accés ni de portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: unknown('La política convida a escriure «sense dubtar-ho», però no dona cap adreça de correu ni cap formulari.'),
      },
      controls: {
        adPersonalizationOptOut: unknown('La política no descriu cap control; només remet a les polítiques dels proveïdors.'),
        telemetryOptOut: unknown(),
        granularControls: unknown(),
        defaultPosture: 'permissive',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('No hi ha comunicació entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown(),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política conté restes evidents d’altres aplicacions («FM APPS developed the All app», «providing Hannah», «Translate All»), cosa que indica que és una plantilla reutilitzada i no un document redactat per a aquest producte. També fixa el límit d’edat als 13 anys mentre l’App Store classifica l’aplicació com a 17+. El gruix de la fitxa queda en desconegut perquè no hi ha cap font que ho documenti.',
        openQuestions: [
          'Qui és el responsable del tractament: una persona física o una societat?',
          'Les imatges que passen per l’esborrador de fons amb IA s’envien a algun servidor?',
          'Per què una utilitat d’automatització de tocs incorpora un reproductor d’IPTV?',
        ],
      },
    },
  ],

  incidents: [],

  storeIds: {
    zangi: 'com.interactive.zangi',
    'traductor-ai-digitalsail': 'com.redbridge.translate.ai',
    'santa-biblia': 'tv.lifechurch.bible',
    coinin: 'com.coininapp',
    collectr: 'com.collectrinc.collectr',
    'instant-translator': 'com.applabs.tools.instant.translator',
    'ai-translator-three-tiger': 'com.FiveTranslate.Fir.app',
    'sky-guide': 'com.fifthstarlabs.skyguide',
    heritageai: 'com.papilio.ai.photo.img.studio',
    'auto-clicker': 'com.florence.tapfusion',
  },
}
