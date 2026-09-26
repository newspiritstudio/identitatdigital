import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/**
 * Lot 33 de la segona onada: sis aplicacions de la categoria «Referència»
 * (costura, dos traductors, identificació d’ocells, cromos i test de conduir)
 * i quatre de «Salut i forma física» (Strava, un diari d’emocions sense ànim
 * de lucre, l’app d’una cadena de gimnasos i un calendari menstrual català).
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'strava',
      name: 'Strava',
      legalName: 'Strava, Inc.',
      description:
        'Empresa nord-americana de San Francisco que publica la xarxa social d’esport més utilitzada. Enregistra l’activitat amb GPS i la comparteix amb seguidors, classificacions i mapes agregats. Es finança amb la subscripció Strava Premium i amb continguts patrocinats.',
      headquartersCountry: 'US',
      euEstablishment: 'IE',
      ownership: 'private',
      foundedYear: 2009,
      primaryRevenueModel: 'freemium',
      website: 'https://www.strava.com/',
      productDomains: ['strava.com'],
      privacyContact: 'dpo@strava.com',
    },
    {
      slug: 'strava-ireland',
      name: 'Strava Ireland',
      legalName: 'Strava Ireland Limited',
      parent: 'strava',
      description:
        'Societat de Dublín que la política de privadesa designa com a responsable del tractament de les dades de les persones usuàries de l’Espai Econòmic Europeu.',
      headquartersCountry: 'IE',
      euEstablishment: 'IE',
      ownership: 'subsidiary',
      primaryRevenueModel: 'freemium',
      website: 'https://www.strava.com/',
      privacyContact: 'dpo@strava.com',
    },
    {
      slug: 'deepl',
      name: 'DeepL',
      legalName: 'DeepL SE',
      description:
        'Empresa alemanya de Colònia, hereva del diccionari Linguee, que desenvolupa un traductor automàtic neuronal propi. Es finança amb les subscripcions DeepL Pro i amb l’API per a empreses; la versió gratuïta li serveix per entrenar els models.',
      headquartersCountry: 'DE',
      euEstablishment: 'DE',
      leadSupervisoryAuthority: 'ldi-nrw',
      ownership: 'private',
      foundedYear: 2017,
      primaryRevenueModel: 'freemium',
      website: 'https://www.deepl.com/',
      productDomains: ['deepl.com', 'linguee.com', 'linguee.es'],
      privacyContact: 'privacy@deepl.com',
    },
    {
      slug: 'cornell-lab-ornithology',
      name: 'Cornell Lab of Ornithology',
      legalName: 'Cornell University',
      description:
        'Unitat de recerca ornitològica de la Universitat Cornell, a Ithaca (Nova York), sostinguda per socis i donacions. Manté eBird, la base de dades d’observacions d’ocells més gran del món, i les aplicacions Merlin i BirdNET associades.',
      headquartersCountry: 'US',
      ownership: 'nonprofit',
      foundedYear: 1915,
      primaryRevenueModel: 'donations',
      website: 'https://www.birds.cornell.edu/',
      productDomains: ['birds.cornell.edu', 'ebird.org', 'allaboutbirds.org', 'macaulaylibrary.org'],
      privacyContact: 'clomembership@cornell.edu',
    },
    {
      slug: 'how-we-feel-project',
      name: 'The How We Feel Project',
      legalName: 'The How We Feel Project, Inc.',
      description:
        'Organització sense ànim de lucre nord-americana fundada el 2020 per Ben Silbermann, cofundador de Pinterest, amb investigadors de Yale, Harvard i el MIT. Va néixer per recollir símptomes de covid i avui publica una aplicació gratuïta de registre d’emocions feta amb el Yale Center for Emotional Intelligence.',
      headquartersCountry: 'US',
      ownership: 'nonprofit',
      foundedYear: 2020,
      primaryRevenueModel: 'donations',
      website: 'https://howwefeel.org/',
      productDomains: ['howwefeel.org'],
      privacyContact: 'support@howwefeel.org',
    },
    {
      slug: 'upgyms',
      name: 'Upgyms',
      legalName: 'UPGYMS, S.L.',
      description:
        'Societat amb seu a Barcelona que explota la llicència de la marca Fitness Park a Espanya i figura com a responsable del tractament de les dades dels socis dels clubs espanyols.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://www.fitnesspark.es/',
      productDomains: ['fitnesspark.es'],
      privacyContact: 'info@fitnesspark.es',
    },
    {
      slug: 'cicla',
      name: 'Cicla',
      description:
        'Projecte català d’una aplicació gratuïta de seguiment del cicle menstrual, fet per un equip de dones i finançat amb donacions i micromecenatge. La política de privadesa i el web no publiquen cap raó social ni NIF.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'unknown',
      primaryRevenueModel: 'donations',
      website: 'https://cicla.es/',
      productDomains: ['cicla.es'],
      privacyContact: 'hola@cicla.es',
    },
    {
      slug: 'pixelcell',
      name: 'Pixelcell',
      legalName: 'PIXELCELL PTE. LIMITED',
      description:
        'Estudi d’aplicacions registrat a Singapur amb telèfon de contacte a Hong Kong. Publica aplicacions de consum amb assistents d’IA i subscripcions setmanals, com Sewpal.',
      headquartersCountry: 'SG',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.getsewpal.com/',
      productDomains: ['getsewpal.com', 'pixelcell.com'],
      privacyContact: 'support@pixelcell.com',
    },
    {
      slug: 'smart-technology-app',
      name: 'SmartTechnologyApp',
      legalName: 'SmartTechnologyApp PTE. LTD.',
      description:
        'Societat de Singapur que signa la política de privadesa d’un conjunt d’aplicacions d’utilitat publicades a l’App Store sota comptes de desenvolupador individuals, entre les quals Traductor Go.',
      headquartersCountry: 'SG',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://smart.southpolemob.com/',
      productDomains: ['southpolemob.com'],
    },
    {
      slug: 'mavelli',
      name: 'Mavelli',
      legalName: 'MAVELLI FZCO',
      description:
        'Empresa de zona franca de Dubai que publica HoloDex, una aplicació d’escaneig i valoració de cartes col·leccionables amb subscripcions setmanals, mensuals i anuals.',
      headquartersCountry: 'AE',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.getholodex.com/',
      productDomains: ['getholodex.com', 'mavelli.io'],
      privacyContact: 'contact@getholodex.com',
    },
    {
      slug: 'vavien-technology',
      name: 'Vavien Technology',
      legalName: 'Vavien Technology Limited',
      description:
        'Societat registrada a Dublín que publica aplicacions de test i formació a l’App Store. La política de privadesa de Test DGT 2026 està allotjada a Google Sites i la signa una persona física, Yiğit Yılmaz.',
      headquartersCountry: 'IE',
      euEstablishment: 'IE',
      leadSupervisoryAuthority: 'dpc-ie',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.vavientech.com/',
      privacyContact: 'info@vavientech.com',
    },
  ],

  sources: [
    /* ── Strava ── */
    s('strava-app-store', 'Strava: corre, camina, pedalea — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id426826309', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada pel desenvolupador. Declara compres i identificadors com a dades de rastreig, i vincula amb la persona salut i forma física, ubicació exacta i aproximada, contactes, contingut, historial de cerca, identificadors i ús.',
    }),
    s('strava-privacy-policy', 'Strava Privacy Policy', 'https://www.strava.com/legal/privacy', 'Strava, Inc.', 'privacy-policy', 'primary', {
      summary:
        'Política global. Designa Strava Ireland Limited com a responsable a l’EEE, descriu les bases jurídiques, el consentiment per a les dades de salut i les funcions d’IA, la publicitat amb galetes, les transferències als Estats Units amb clàusules contractuals tipus i el termini de 45 dies per esborrar el compte.',
    }),
    s('strava-delete-account', 'Delete Your Strava Account', 'https://support.strava.com/hc/en-us/articles/216918827-Delete-Your-Strava-Account', 'Strava, Inc.', 'support-doc', 'primary', {
      summary:
        'Passos per esborrar el compte des del web i des de l’app, amb confirmació per correu, descàrrega prèvia de l’arxiu de dades i advertiment que els segments, les rutes públiques i els clubs creats es queden a la plataforma.',
    }),
    s('strava-activity-privacy', 'Activity Privacy Controls', 'https://support.strava.com/hc/en-us/articles/216919377-Activity-Privacy-Controls', 'Strava, Inc.', 'support-doc', 'primary', {
      summary:
        'Descriu els tres nivells de visibilitat de cada activitat i explica que les activitats visibles per a tothom alimenten automàticament el mapa de calor global si no es desactiva «Millora del producte».',
    }),
    s('strava-security-txt', 'Strava security.txt', 'https://www.strava.com/.well-known/security.txt', 'Strava, Inc.', 'technical-doc', 'primary', {
      summary:
        'Fitxer de divulgació de vulnerabilitats amb adreça de contacte i clau PGP. Detalla que Strava té un programa de recompenses privat a HackerOne al qual s’accedeix després d’enviar un primer informe vàlid.',
    }),
    s('strava-heatmap-guardian-2018', 'Fitness tracking app Strava gives away location of secret US army bases', 'https://www.theguardian.com/world/2018/jan/28/fitness-tracking-app-gives-away-location-of-secret-us-army-bases', 'The Guardian', 'press', 'secondary', {
      publishedAt: '2018-01-28',
      summary:
        'Primera informació sobre el mapa de calor global de Strava, que dibuixava els recorreguts del personal militar dins de bases i llocs d’escolta no declarats.',
    }),
    s('strava-bodyguards-ap-2024', 'Fitness app Strava gives away location of Biden, Trump and other leaders, French newspaper says', 'https://apnews.com/article/biden-trump-macron-bodyguards-security-strava-0a48afca09c7aa74d703e72833dcaf72', 'Associated Press', 'press', 'secondary', {
      publishedAt: '2024-10-29',
      summary:
        'Resum de la investigació de Le Monde sobre escortes de Biden, Trump, Harris, Macron i Putin que publicaven a Strava carreres fetes als hotels on després s’allotjaven els dirigents.',
    }),

    /* ── DeepL ── */
    s('deepl-app-store', 'Traductor de DeepL — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1552407475', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per DeepL SE. No declara cap dada de rastreig ni cap dada vinculada amb la persona: només correu, interacció amb el producte i diagnòstics com a dades no vinculades.',
    }),
    s('deepl-privacy-policy', 'DeepL Privacy Policy', 'https://www.deepl.com/en/privacy', 'DeepL SE', 'privacy-policy', 'primary', {
      summary:
        'Política sota el RGPD i la llei alemanya. Distingeix la versió gratuïta, on els textos s’usen temporalment per entrenar les xarxes neuronals, de DeepL Pro, on no es guarden ni s’usen per millorar els models. Inclou terminis concrets i la supressió del compte des de la configuració.',
    }),
    s('deepl-infrastructure', 'DeepL infrastructure and data protection', 'https://support.deepl.com/hc/en-us/articles/26380849099932-DeepL-infrastructure-and-data-protection', 'DeepL SE', 'technical-doc', 'primary', {
      summary:
        'Article d’ajuda sobre la infraestructura: servidors propis a la UE, xifratge en trànsit i en repòs amb claus gestionades per DeepL, model de confiança zero i certificacions ISO 27001 i SOC 2 Type II.',
    }),
    s('deepl-trust-center', 'DeepL Trust Center', 'https://deepl.safebase.us/', 'DeepL SE', 'technical-doc', 'primary', {
      summary:
        'Portal de confiança on DeepL publica les certificacions vigents (ISO 27001, SOC 2 Type II) i on cal identificar-se amb un correu corporatiu per accedir als informes d’auditoria.',
    }),
    s('deepl-security-txt', 'DeepL security.txt', 'https://www.deepl.com/.well-known/security.txt', 'DeepL SE', 'technical-doc', 'primary', {
      summary:
        'Fitxer signat amb PGP que publica l’adreça security@deepl.com i enllaça la política de divulgació de vulnerabilitats.',
    }),

    /* ── Merlin Bird ID ── */
    s('merlin-app-store', 'Merlin Bird ID por Cornell Lab — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id773457673', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per Cornell University. No hi ha cap secció de dades de rastreig; només vincula amb la persona l’identificador de compte, i deixa sense vincular el correu, la ubicació aproximada i la interacció amb el producte.',
    }),
    s('cornell-lab-privacy', 'Privacy Statement — Cornell Lab of Ornithology', 'https://www.birds.cornell.edu/home/privacy/', 'Cornell Lab of Ornithology', 'privacy-policy', 'primary', {
      summary:
        'Declaració que complementa la de la Universitat Cornell. Explica que les observacions enviades des de Merlin amb compte del Cornell Lab entren a eBird i queden disponibles per a la resta de persones usuàries i per a la recerca, amb pseudonimització per a les finalitats d’interès públic, i que el laboratori no lloga ni ven dades però comparteix nom i adreça postal amb altres entitats sense ànim de lucre.',
    }),
    s('ebird-delete-account', 'Unsubscribe From Emails or Delete Your Account', 'https://support.ebird.org/en/support/solutions/articles/48001231608-unsubscribe-from-emails-or-delete-your-account', 'Cornell Lab of Ornithology', 'support-doc', 'primary', {
      summary:
        'Instruccions per demanar la supressió del compte del Cornell Lab des de la pàgina d’edició del compte. Adverteix que la supressió és irreversible i que afecta alhora les dades d’eBird i de Merlin, les llistes, els fitxers multimèdia i els cursos.',
    }),
    s('ebird-privacy-settings', 'Privacy in eBird and how to protect your data', 'https://ebird.org/news/privacy-in-ebird-and-how-to-protect-your-data', 'Cornell Lab of Ornithology', 'support-doc', 'primary', {
      summary:
        'Guia dels controls de privadesa d’eBird: sortir com a «Anonymous eBirder», amagar les llistes de les visites recents, de les alertes i del Top 100, i ocultar els comentaris.',
    }),
    s('ebird-sensitive-species', 'Sensitive Species in eBird', 'https://support.ebird.org/en/support/solutions/articles/48000803210-sensitive-species-in-ebird', 'Cornell Lab of Ornithology', 'support-doc', 'primary', {
      summary:
        'Política d’espècies sensibles: les observacions d’aquestes espècies s’oculten automàticament al públic perquè la ubicació no serveixi per molestar-les o capturar-les.',
    }),

    /* ── How We Feel ── */
    s('how-we-feel-app-store', 'How We Feel — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1562706384', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per The How We Feel Project, Inc. No declara cap dada de rastreig; vincula amb la persona el nom, l’identificador de compte i «altres dades», i deixa sense vincular el correu i els diagnòstics.',
    }),
    s('how-we-feel-privacy', 'How We Feel Privacy Policy', 'https://howwefeel.org/privacy', 'The How We Feel Project, Inc.', 'privacy-policy', 'primary', {
      summary:
        'Política del 14 de juliol del 2025. Diu que sense compte les dades es queden al dispositiu i l’organització no hi té accés, que no ven dades ni les fa servir per vendre anuncis, que la compartició amb investigadors és opcional i anonimitzada, i que la supressió del compte es fa des de la configuració o escrivint a support@howwefeel.org.',
    }),
    s('how-we-feel-processors', 'How We Feel — List of service providers', 'https://docs.google.com/document/d/1-22iXaSUoTe6TuqVuQH2fRtz8UvbZGy1EyMNS-yriAg', 'The How We Feel Project, Inc.', 'technical-doc', 'primary', {
      summary:
        'Document públic enllaçat des de la política amb la relació d’encarregats del tractament (allotjament, analítica, seguretat i suport).',
    }),

    /* ── Fitness Park ── */
    s('fitness-park-app-store', 'Fitness Park App — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1514794906', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per Fitness Park developpement. No declara dades de rastreig, però vincula amb la persona salut i forma física, ubicació exacta, correu, nom, fotos i vídeos, identificadors, ús i diagnòstics. L’enllaç de la política apunta a Virtuagym, el proveïdor del programari.',
    }),
    s('fitness-park-privacy', 'Datos Personales — Fitness Park España', 'https://www.fitnesspark.es/datos-personales', 'Upgyms, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de privadesa dels clubs espanyols. Identifica Upgyms, S.L. com a responsable, enumera les dades del soci (foto, dades bancàries, hores d’entrada i sortida del club), diu que no hi ha transferències fora de la UE tot i fer servir Google Analytics, situa les dades al programari d’Xplor Technologies i fixa un arxiu de quatre anys després del contracte.',
    }),

    /* ── Cicla ── */
    s('cicla-app-store', 'Cicla · Calendario menstrual — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1573281802', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per CICLA. No declara cap dada de rastreig ni cap dada vinculada amb la persona; declara com a no vinculades la salut i forma física, el correu, el nom i la interacció amb el producte.',
    }),
    s('cicla-privacy', 'Política de privacidad — Cicla', 'https://cicla.es/politica-de-privacidad', 'Cicla', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política en vigor des del 8 de març del 2021. Enumera les dades del cicle, els símptomes i el desig sexual, diu que no ven ni comparteix dades, situa la base de dades a Supabase amb seu a Singapur, cita Google Analytics i Mailchimp i descriu el botó «eliminar cuenta» del perfil.',
    }),
    s('cicla-terms', 'Términos y condiciones — Cicla', 'https://cicla.es/terminos-y-condiciones', 'Cicla', 'terms', 'primary', {
      language: 'es',
      summary:
        'Condicions d’ús del 8 de març del 2021. Confirmen que cal crear compte amb nom, sexe, data de naixement i correu, i inclouen l’exempció de responsabilitat mèdica i l’advertiment de no fer servir l’app com a mètode anticonceptiu.',
    }),
    s('cicla-compromisos', 'Nuestros compromisos — Cicla', 'https://cicla.es/nuestros-compromisos', 'Cicla', 'other', 'primary', {
      language: 'es',
      summary:
        'Pàgina institucional amb la missió del projecte, la xifra de més de 30.000 usuàries registrades i el compromís explícit de no vendre ni compartir dades.',
    }),

    /* ── Sewpal ── */
    s('sewpal-app-store', 'Sewpal - Patrones & Guía — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6754315885', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per PIXELCELL PTE. LIMITED. Declara com a dades de rastreig les compres, el contingut de la persona usuària, els identificadors i l’ús, i vincula aquestes mateixes categories amb la persona per a anàlisi, personalització i funcionament.',
    }),
    s('sewpal-privacy', 'SewPal Privacy Policy', 'https://app-service.getsewpal.com/static/privacy_policy.html', 'Pixelcell', 'privacy-policy', 'primary', {
      summary:
        'Política breu i genèrica. Reconeix tecnologies de seguiment de tercers i publicitat segmentada dins i fora de l’aplicació, diu que no atén el senyal «Do Not Track», transfereix les dades als Estats Units advertint que la protecció pot no ser equivalent i no fixa cap termini de conservació. No esmenta l’assistent d’IA que anuncia la fitxa de l’App Store.',
    }),

    /* ── Traductor Go ── */
    s('traductor-go-app-store', 'Traductor Go: Traducir de IA — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6736970537', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa del compte de desenvolupador Tung To Dinh. Declara dades d’ús i diagnòstics com a dades de rastreig, i enumera com a no vinculades els identificadors, l’ús i els diagnòstics, també per a publicitat de tercers.',
    }),
    s('traductor-go-privacy', 'Smart Technology Team Privacy Policy', 'https://smart.southpolemob.com/policy.html', 'SmartTechnologyApp', 'privacy-policy', 'primary', {
      summary:
        'Política comuna a diverses aplicacions del mateix estudi, escrita per a un escàner de documents i no per a un traductor. Enumera identificadors publicitaris, IP i ubicació a escala de ciutat, i la compartició amb Apple, Firebase, Facebook, Google i Microsoft. Admet transferències a qualsevol tercer país sense garanties equivalents.',
    }),

    /* ── HoloDex ── */
    s('holodex-app-store', 'HoloDex - TCG Scan & Collect — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6747442689', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per MAVELLI FZCO. Declara la ubicació, els identificadors i les dades d’ús com a dades de rastreig, i vincula amb la persona el correu, les fotos, l’historial de cerca, la ubicació exacta i els diagnòstics.',
    }),
    s('holodex-privacy', 'HoloDex Privacy Policy', 'https://www.getholodex.com/privacy', 'Mavelli', 'privacy-policy', 'primary', {
      summary:
        'Política de Mavelli FZCO. Descriu la col·lecció de cartes, les imatges capturades per escanejar i les fotos de l’anvers i el revers per a la valoració automàtica, l’ús de píxels i SDK per a atribució i mesura publicitària, els pagaments amb RevenueCat i Stripe i el tractament als Emirats Àrabs Units, els Estats Units i la Unió Europea.',
    }),

    /* ── Test DGT ── */
    s('test-dgt-app-store', 'Test DGT 2026 — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6756551956', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per Vavien Technology Limited, amb domicili a Dublín. No declara dades de rastreig ni dades vinculades; només dades d’ús i diagnòstics sense vincular.',
    }),
    s('test-dgt-privacy', 'Privacy Policy — YigitAppTech', 'https://sites.google.com/view/yigitapptech-privacy-policy/home', 'Vavien Technology', 'privacy-policy', 'primary', {
      summary:
        'Política allotjada a Google Sites i signada per una persona física, no per la societat irlandesa que consta com a desenvolupadora. Cita Google Play Services, AdMob i Google Analytics for Firebase, no fixa terminis de conservació i no descriu els drets del RGPD.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ Strava ═══════════════════════════ */
    {
      slug: 'strava',
      name: 'Strava',
      company: 'strava-ireland',
      categories: ['benestar-i-activitat-fisica', 'xarxes-socials'],
      tagline: 'Xarxa social d’esport en què els ajustos de privadesa s’han d’activar a mà',
      summary:
        'Strava és un registre d’entrenaments i una xarxa social on cada sortida inclou el traçat GPS, l’hora i el ritme. L’etiqueta de l’App Store declara ubicació exacta, salut, contactes i fotos vinculades amb la persona, i compres i identificadors per rastrejar. La política designa Strava Ireland com a responsable a Europa i demana consentiment per a les dades de salut i per a les funcions d’IA. Els incidents coneguts vénen del que l’app mostra per defecte: en dues ocasions, els traçats dels usuaris han revelat bases militars i els moviments d’escortes de caps d’estat.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Irlanda (responsable a la UE), Estats Units',
      links: {
        website: 'https://www.strava.com/',
        privacyPolicy: 'https://www.strava.com/legal/privacy',
        appStore: 'https://apps.apple.com/es/app/id426826309',
      },
      accountRequired: f('yes', 'official', ['strava-privacy-policy'], 'El servei és una xarxa social: tot passa dins d’un compte amb perfil.'),
      openSource: f('no', 'official', ['strava-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Juntes, aquestes dades revelen on vius, a quina hora surts de casa, quins recorreguts fas cada dia, amb qui entrenes i quina forma física tens. Formen un historial de moviments amb marca de temps lligat a un nom i a una freqüència cardíaca, una de les combinacions més delicades del directori.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['strava-app-store', 'strava-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['strava-app-store'], note: 'L’etiqueta la declara també per a publicitat i màrqueting del desenvolupador.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['strava-app-store'], note: 'L’etiqueta la posa entre les dades de rastreig i entre les de publicitat de tercers.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['strava-app-store'] }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['strava-app-store', 'strava-privacy-policy'], note: 'És el traçat GPS de cada activitat, amb hora d’inici i de final. L’etiqueta la declara per a anàlisi, funcionament i «altres fins».' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['strava-app-store'] }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['strava-app-store', 'strava-privacy-policy'], note: 'Freqüència cardíaca i mètriques de forma física; la política diu que les tracta amb consentiment.' }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['strava-app-store'], note: 'Per buscar coneguts a la plataforma; l’etiqueta la declara com a dada vinculada.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['strava-app-store'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['strava-app-store'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['strava-privacy-policy'], note: 'Només per a la subscripció; el cobrament el fa un processador.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-publicitaria'], sources: ['strava-app-store'], note: 'L’etiqueta posa les compres entre les dades que poden servir per rastrejar.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['strava-app-store'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['strava-privacy-policy'], note: 'Inclou les dades dels rellotges i sensors connectats.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['strava-app-store'] }),
        row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['strava-privacy-policy'], note: 'Seguidors, clubs i companys d’activitat.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['strava-app-store'], 'L’etiqueta declara compres i identificadors com a dades que poden servir per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['strava-app-store'], 'L’etiqueta inclou «datos de publicidad» i identificadors de dispositiu dins de la publicitat del desenvolupador i de tercers.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['strava-privacy-policy'], 'La política descriu galetes i tecnologies similars per a publicitat segmentada i xarxes d’anuncis, sense enumerar els socis.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['strava-privacy-policy'], 'Publicitat segmentada amb galetes i contingut patrocinat, amb enllaç d’exclusió.'),
        profiling: f('yes', 'official', ['strava-privacy-policy'], 'Anàlisi del rendiment i recomanacions personalitzades a partir de l’activitat.'),
        aiTraining: f('partial', 'official', ['strava-privacy-policy'], 'Les funcions d’IA fan servir sobretot dades agregades i desidentificades, però la política admet que poden tractar dades personals de salut i ubicació amb consentiment.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['strava-privacy-policy'], 'Proveïdors de serveis, socis d’integració, patrocinadors d’esdeveniments i xarxes publicitàries.'),
        intraGroupSharing: na('Strava no forma part de cap grup amb altres serveis de consum.'),
        dataBrokerSales: unknown('La política parla d’exclusió de la «venda o compartició» en el sentit de les lleis nord-americanes, però no descriu vendes a intermediaris de dades.'),
        internationalTransfers: f('yes', 'official', ['strava-privacy-policy'], 'Les dades de l’EEE es transfereixen als Estats Units amb clàusules contractuals tipus.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['strava-privacy-policy', 'strava-delete-account'], 'La regla general és «mentre calgui», però la política fixa un màxim de 45 dies per esborrar la informació personal dels sistemes un cop demanada la baixa.'),
        dataAfterDeletion: f('yes', 'official', ['strava-delete-account'], 'Els segments i les rutes públiques que hagis creat es queden a la plataforma, i els clubs que hagis fundat continuen sense propietari.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['strava-delete-account']),
        selfService: f('yes', 'official', ['strava-delete-account'], 'Es pot fer tant des del web com des de l’aplicació, sense passar per atenció al client.'),
        directUrl: 'https://www.strava.com/settings/account',
        difficulty: 'easy',
        waitingPeriodDays: 45,
        requiresSupportContact: false,
        steps: [
          'Si tens subscripció, cancel·la-la abans des de la configuració del compte o des de l’App Store.',
          'Entra a Configuració > El meu compte i tria «Delete your account».',
          'Demana l’arxiu amb totes les teves dades dins del mateix procés, si el vols conservar.',
          'Obre el correu de confirmació i segueix l’enllaç: la supressió és definitiva i l’equip no pot recuperar el compte.',
        ],
        obstacles:
          'Els segments, les rutes públiques i els clubs creats no s’esborren amb el compte, i la política es dona fins a 45 dies per treure les dades dels sistemes.',
        dataRetained: 'Segments i rutes públiques, clubs fundats i les dades que calgui conservar per obligació legal.',
        sources: ['strava-delete-account', 'strava-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['strava-delete-account', 'strava-privacy-policy'], 'Hi ha una exportació massiva de l’arxiu del compte, que es pot demanar també dins del procés de baixa.'),
        exportFormatQuality: 'open',
        rightsExercise: f('yes', 'official', ['strava-privacy-policy'], 'La política reconeix accés, rectificació, supressió i portabilitat, i publica el contacte del delegat de protecció de dades.', { url: 'mailto:dpo@strava.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['strava-privacy-policy'], 'Controls de galetes i enllaç per oposar-se a compartir informació personal amb finalitats publicitàries.'),
        telemetryOptOut: f('partial', 'official', ['strava-activity-privacy'], 'Desmarcar «Millora del producte» treu les activitats del mapa de calor global, però no atura la resta d’analítica.'),
        granularControls: f('yes', 'official', ['strava-activity-privacy'], 'Cada activitat es pot publicar per a tothom, només per a seguidors o només per a tu, i hi ha una preferència per defecte per a les noves.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'editorial', [], 'No hem documentat patrons enganyosos al consentiment, però el valor per defecte de les activitats és visible i alimenta el mapa de calor global si no es canvia.'),
        darkPatternList: [
          {
            type: 'preselected',
            severity: 'medium',
            description:
              'Les activitats amb visibilitat «tothom» contribueixen automàticament al mapa de calor global; per evitar-ho cal desactivar «Millora del producte» a Controls de privadesa.',
            sources: ['strava-activity-privacy'],
          },
        ],
      },
      security: {
        e2ee: na('El servei és una xarxa social pública per disseny; no hi ha comunicacions xifrades d’extrem a extrem.'),
        transportEncryption: unknown('No hem trobat una pàgina tècnica que ho documenti.'),
        atRestEncryption: unknown(),
        mfa: unknown('No hem pogut verificar un article d’ajuda vigent sobre el segon factor.'),
        independentAudits: unknown(),
        bugBounty: f('yes', 'official', ['strava-security-txt'], 'Programa privat a HackerOne: cal enviar primer un informe vàlid per correu per ser-hi admès.'),
        vulnerabilityDisclosure: f('yes', 'official', ['strava-security-txt'], undefined, { url: 'https://www.strava.com/.well-known/security.txt' }),
      },
      alternatives: [
        {
          app: 'wikiloc',
          comparability: 'partial',
          rationale:
            'Permet enregistrar i compartir rutes amb GPS sense la capa de xarxa social competitiva ni les classificacions per segments.',
          tradeOffs: 'No té la comunitat ni les mètriques d’entrenament de Strava.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hem trobat cap sanció del RGPD ni de l’AEPD contra Strava. Els dos incidents registrats no van ser bretxes de seguretat, sinó dades que la gent publicava amb la configuració per defecte creient que no revelaven res.',
        openQuestions: [
          'Strava ofereix segon factor d’autenticació i amb quins mètodes?',
          'Quins socis publicitaris concrets hi ha darrere de les galetes de la web i de l’app?',
        ],
      },
    },

    /* ═══════════════════════════ Traductor de DeepL ═══════════════════════════ */
    {
      slug: 'traductor-de-deepl',
      name: 'Traductor de DeepL',
      company: 'deepl',
      categories: ['traduccio-i-referencia'],
      tagline: 'A la versió gratuïta, el que tradueixes entrena el traductor; a la de pagament, no',
      summary:
        'DeepL és una de les poques aplicacions d’aquest directori que no declara cap dada de rastreig ni cap dada vinculada amb la persona a l’etiqueta de l’App Store. Segons la política, als serveis gratuïts els textos que hi enganxes es tracten temporalment per entrenar les xarxes neuronals, i la companyia demana explícitament que no hi tradueixis dades personals. Amb DeepL Pro, els textos no es guarden ni s’usen per millorar els models, i ho ha verificat una auditoria SOC 2 Type II. És una empresa alemanya sota el RGPD i la llei federal alemanya, amb servidors a la UE.',
      platforms: ['ios', 'android', 'web', 'windows', 'macos'],
      businessModel: 'freemium',
      jurisdiction: 'Alemanya',
      links: {
        website: 'https://www.deepl.com/',
        privacyPolicy: 'https://www.deepl.com/en/privacy',
        appStore: 'https://apps.apple.com/es/app/id1552407475',
      },
      accountRequired: f('no', 'official', ['deepl-privacy-policy'], 'Es pot traduir sense compte; el compte cal per a l’historial, els glossaris i les subscripcions Pro.'),
      openSource: f('no', 'official', ['deepl-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Els textos que es tradueixen poden ser contractes, correus o informes mèdics. DeepL no declara cap perfil publicitari; el que compta és si el text s’envia al servidor i s’hi conserva. Amb el pla gratuït s’hi conserva durant un temps limitat per entrenar els models.',
      dataCollection: [
        row('adreca-electronica', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['deepl-app-store', 'deepl-privacy-policy'], note: 'L’etiqueta la declara com a dada no vinculada amb la persona, cosa poc habitual en un servei amb compte.' }),
        row('contingut-de-missatges', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['deepl-privacy-policy'], note: 'Els textos i documents del servei gratuït es tracten durant un període limitat per entrenar i millorar les xarxes neuronals. A DeepL Pro no es guarden ni s’usen per millorar els models.' }),
        row('adreca-ip', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['deepl-privacy-policy'], note: 'Al servei gratuït es conserva un màxim de catorze dies.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['deepl-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['deepl-app-store'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['deepl-privacy-policy'], note: 'Els pagaments de DeepL Pro els tramita Stripe, amb prevenció del frau a càrrec de Riskified.' }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['deepl-privacy-policy'], note: 'Per a la facturació i l’atenció al client, gestionada amb Zendesk i Salesforce.' }),
        row('llengua', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['deepl-privacy-policy'], note: 'Els parells d’idiomes escollits són inherents al servei.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['deepl-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['deepl-app-store'], 'No hi ha cap categoria publicitària a l’etiqueta.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['deepl-privacy-policy'], 'Al web hi ha HubSpot per a màrqueting i eines d’enquesta com Qualtrics i UserTesting; l’etiqueta de l’app no declara res equivalent.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['deepl-app-store', 'deepl-privacy-policy'], 'Ni l’etiqueta ni la política descriuen publicitat segmentada dins del producte.'),
        profiling: f('no', 'official', ['deepl-privacy-policy'], 'La política no descriu elaboració de perfils de les persones usuàries.'),
        aiTraining: f('yes', 'official', ['deepl-privacy-policy'], 'Als serveis gratuïts, el contingut que s’hi puja i les traduccions es tracten durant un període limitat per entrenar i millorar les xarxes neuronals. A DeepL Pro, no.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['deepl-privacy-policy'], 'Només encarregats del tractament amb contracte: Stripe, Riskified, Zendesk, Salesforce i HubSpot.'),
        intraGroupSharing: f('yes', 'official', ['deepl-privacy-policy'], 'DeepL SE i DeepL AI GmbH actuen com a corresponsables.'),
        dataBrokerSales: f('no', 'official', ['deepl-privacy-policy'], 'La política no preveu cap cessió comercial de dades.'),
        internationalTransfers: f('partial', 'official', ['deepl-privacy-policy'], 'El nucli del servei és a la UE; algunes eines de màrqueting, pagament i enquestes impliquen transferències als Estats Units amb decisió d’adequació o clàusules contractuals tipus.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['deepl-privacy-policy'], 'La política dona terminis concrets: catorze dies per a les IP del servei gratuït, dos anys per als tiquets de suport i fins a cinc anys per a les enquestes.'),
        dataAfterDeletion: f('partial', 'official', ['deepl-privacy-policy'], 'Les dades del compte es conserven mentre duri el contracte més els terminis legals de conservació.'),
        periods: [
          { dataType: 'adreca-ip', period: '14 dies al servei gratuït', sources: ['deepl-privacy-policy'] },
          { dataType: 'contingut-de-missatges', period: 'esborrat immediat un cop feta la traducció a DeepL Pro', sources: ['deepl-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['deepl-privacy-policy']),
        selfService: f('yes', 'official', ['deepl-privacy-policy'], 'Es pot esborrar el compte des de la configuració, sense passar per atenció al client.'),
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Si tens DeepL Pro, cancel·la primer la subscripció des de la configuració del compte.',
          'Entra a la configuració del compte i tria l’opció d’esborrar-lo.',
          'Si prefereixes la via escrita, envia la petició a support@deepl.com.',
        ],
        dataRetained: 'Les dades que calgui conservar pels terminis legals alemanys de comptabilitat i facturació.',
        sources: ['deepl-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['deepl-privacy-policy'], 'La política reconeix la portabilitat, però no descriu cap eina automàtica d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['deepl-privacy-policy'], 'Contacte de privadesa i delegat de protecció de dades extern (dhpg IT-Services).', { url: 'mailto:privacy@deepl.com' }),
      },
      controls: {
        adPersonalizationOptOut: na('El producte no mostra publicitat.'),
        telemetryOptOut: unknown('No hem trobat un interruptor d’analítica dins de l’aplicació.'),
        granularControls: f('partial', 'official', ['deepl-privacy-policy'], 'El control principal és triar entre el pla gratuït i DeepL Pro: només el de pagament garanteix que els textos no s’usin per entrenar.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem documentat patrons enganyosos.'),
      },
      security: {
        e2ee: na('El traductor ha de processar el text en clar al servidor per poder traduir-lo.'),
        transportEncryption: f('yes', 'official', ['deepl-infrastructure'], 'Xifratge en trànsit documentat a la pàgina d’infraestructura.'),
        atRestEncryption: f('yes', 'official', ['deepl-infrastructure'], 'Xifratge en repòs amb claus gestionades per DeepL, no pel proveïdor de núvol.'),
        mfa: f('yes', 'official', ['deepl-trust-center'], 'La plataforma ofereix autenticació multifactor als plans empresarials.'),
        independentAudits: f('yes', 'official', ['deepl-trust-center', 'deepl-infrastructure'], 'ISO 27001 i SOC 2 Type II; l’informe SOC 2 va verificar que DeepL no emmagatzema les traduccions de Pro.'),
        bugBounty: unknown('La política de divulgació no diu si hi ha recompensa econòmica.'),
        vulnerabilityDisclosure: f('yes', 'official', ['deepl-security-txt'], 'security.txt signat amb PGP, amb adreça de contacte i política de divulgació.', { url: 'https://www.deepl.com/.well-known/security.txt' }),
      },
      alternatives: [
        {
          app: 'google-translate',
          comparability: 'equivalent',
          rationale: 'Cobreix més idiomes i té traducció per càmera i conversa.',
          tradeOffs: 'Forma part de l’ecosistema publicitari de Google, amb un perfil de compte molt més ampli.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hem trobat cap sanció del RGPD ni cap filtració documentada contra DeepL. La mateixa política demana explícitament no traduir dades personals amb la versió gratuïta.',
        openQuestions: [
          'Quant temps exactament es conserven els textos del servei gratuït abans d’esborrar-los?',
          'Hi ha recompensa econòmica al programa de divulgació de vulnerabilitats?',
        ],
      },
    },

    /* ═══════════════════════════ Merlin Bird ID ═══════════════════════════ */
    {
      slug: 'merlin-bird-id',
      name: 'Merlin Bird ID',
      company: 'cornell-lab-ornithology',
      categories: ['traduccio-i-referencia'],
      tagline: 'Identificador d’ocells d’una universitat sense ànim de lucre, que fa servir les observacions per a la recerca i no per a publicitat',
      summary:
        'Merlin identifica ocells per foto, per so i per descripció, i el publica el laboratori d’ornitologia de la Universitat Cornell. L’etiqueta de l’App Store no declara cap dada de rastreig i només vincula amb la persona l’identificador de compte. Si hi entres amb compte del Cornell Lab, les observacions que desis passen a eBird, una base de dades pública que consulten investigadors de tot el món, i queden visibles per a la resta de persones usuàries.',
      platforms: ['ios', 'android'],
      businessModel: 'donations',
      jurisdiction: 'Estats Units',
      userBase: 'Milions de descàrregues; eBird és la base d’observacions d’ocells més gran del món.',
      links: {
        website: 'https://merlin.allaboutbirds.org/',
        privacyPolicy: 'https://www.birds.cornell.edu/home/privacy/',
        appStore: 'https://apps.apple.com/es/app/id773457673',
      },
      accountRequired: f('partial', 'official', ['cornell-lab-privacy'], 'Es pot identificar sense compte; el compte del Cornell Lab cal per desar observacions i per lligar-les a eBird.'),
      openSource: f('no', 'official', ['merlin-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Cada observació d’ocell porta data, hora i coordenades, de manera que un historial d’observacions també és un historial de per on t’has mogut i a quina hora. Aquesta informació va a una base de dades científica oberta i no a un mercat publicitari.',
      dataCollection: [
        row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['merlin-app-store'], note: 'És l’única categoria que l’etiqueta declara vinculada amb la persona.' }),
        row('adreca-electronica', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['merlin-app-store', 'cornell-lab-privacy'], note: 'L’etiqueta la declara també per a publicitat o màrqueting del desenvolupador, que en aquest cas són les campanyes de socis i donacions del laboratori.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts', 'mesura-i-analisi-dus'], sources: ['merlin-app-store'], note: 'Cal per mostrar les espècies probables de la zona.' }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['investigacio-i-estadistica'], sources: ['cornell-lab-privacy'], note: 'Les observacions desades amb compte porten coordenades i entren a la base pública d’eBird. Les espècies sensibles queden ocultes automàticament.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['investigacio-i-estadistica', 'prestacio-del-servei'], sources: ['cornell-lab-privacy'], note: 'Les fotos i els enregistraments que es comparteixen passen a formar part del material de recerca, amb la llicència que s’hi atorga.' }),
        row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['investigacio-i-estadistica'], sources: ['cornell-lab-privacy'], note: 'Els enregistraments del Sound ID que es desen amb compte es tracten com a contingut enviat a eBird i a la Macaulay Library.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['merlin-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['cornell-lab-privacy'], note: 'La declaració diu que es recull automàticament en usar les apps i els webs del laboratori.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['cornell-lab-privacy'] }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['cornell-lab-privacy'], note: 'El nom es mostra amb les llistes d’eBird si no tries sortir com a «Anonymous eBirder».' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['merlin-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['merlin-app-store'], 'No apareix cap identificador publicitari a l’etiqueta.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['cornell-lab-privacy'], 'La declaració reconeix galetes i eines de seguiment per entendre l’ús i per fer màrqueting dels serveis del laboratori.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['cornell-lab-privacy'], 'El laboratori diu que no lloga ni ven dades personals; el màrqueting és propi i de captació de socis.'),
        profiling: f('partial', 'official', ['cornell-lab-privacy'], 'Per a la captació de donants fa segmentació i modelatge d’audiències amb dades pròpies i de tercers, i pot compartir nom i adreça postal (no el correu ni el telèfon) amb altres entitats sense ànim de lucre.'),
        aiTraining: unknown('La declaració no diu si les fotos i els enregistraments serveixen per entrenar els models d’identificació de Merlin.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['cornell-lab-privacy'], 'Les observacions són públiques a eBird per disseny, i el laboratori comparteix nom i adreça postal amb entitats sense ànim de lucre afins si no t’hi oposes.'),
        intraGroupSharing: f('yes', 'official', ['cornell-lab-privacy'], 'El compte és únic per a tots els projectes del Cornell Lab: eBird, Merlin, Bird Academy, FeederWatch i la resta.'),
        dataBrokerSales: f('no', 'official', ['cornell-lab-privacy'], 'La declaració diu explícitament que no es lloguen ni es venen dades personals.'),
        internationalTransfers: f('yes', 'official', ['cornell-lab-privacy'], 'Les dades es tracten als Estats Units; la declaració remet a les International Privacy Disclosures de la Universitat Cornell i no concreta el mecanisme de transferència.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: unknown('La declaració no fixa cap termini concret de conservació.'),
        dataAfterDeletion: unknown('L’article d’ajuda no aclareix si les observacions ja incorporades al conjunt científic d’eBird es conserven pseudonimitzades després de tancar el compte.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['ebird-delete-account']),
        selfService: f('yes', 'official', ['ebird-delete-account'], 'La petició es fa des de la pàgina d’edició del compte del Cornell Lab.'),
        directUrl: 'https://secure.birds.cornell.edu/cassso/account/edit',
        difficulty: 'medium',
        requiresSupportContact: false,
        steps: [
          'Entra a eBird amb el compte del Cornell Lab i obre «Cornell Lab Account» des del teu nom.',
          'Descarrega abans les teves dades d’eBird si les vols conservar: la supressió és irreversible.',
          'A la pàgina d’edició del compte, demana la supressió.',
        ],
        obstacles:
          'El compte és compartit per tots els projectes del laboratori: en esborrar-lo es perden alhora les llistes d’eBird, les observacions de Merlin, els fitxers multimèdia, els cursos de Bird Academy i les subscripcions a Birds of the World.',
        dataRetained: 'No està documentat què passa amb les observacions ja incorporades al conjunt científic públic.',
        sources: ['ebird-delete-account'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['ebird-delete-account'], 'eBird permet descarregar les pròpies observacions abans de tancar el compte.'),
        exportFormatQuality: 'open',
        rightsExercise: f('partial', 'official', ['cornell-lab-privacy'], 'La declaració reconeix els drets segons la llei aplicable, però adverteix que els pot limitar quan exercir-los comprometi els objectius de la recerca d’interès públic.'),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['cornell-lab-privacy'], 'Es pot demanar per telèfon o per correu que el nom i l’adreça postal no es comparteixin amb altres entitats, i donar-se de baixa dels correus amb l’enllaç de cada missatge.'),
        telemetryOptOut: unknown('No hem trobat un interruptor d’analítica dins de l’aplicació.'),
        granularControls: f('yes', 'official', ['ebird-privacy-settings', 'ebird-sensitive-species'], 'eBird permet sortir com a «Anonymous eBirder», amagar les llistes de les visites recents, de les alertes i del Top 100, i oculta automàticament les ubicacions de les espècies sensibles.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem documentat patrons enganyosos.'),
      },
      security: {
        e2ee: na('És una eina d’identificació i de ciència participativa, sense comunicacions privades.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown('No hem trobat documentació d’un segon factor per al compte del Cornell Lab.'),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses de la Universitat Cornell.'),
        vulnerabilityDisclosure: unknown('El domini birds.cornell.edu no publica cap fitxer security.txt accessible.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hem trobat sancions ni filtracions que afectin el Cornell Lab of Ornithology, eBird o Merlin. El punt delicat és que les observacions són públiques per disseny, cosa que no sempre és evident per a qui instal·la l’app només per identificar un ocell.',
        openQuestions: [
          'Les fotos i els enregistraments de Merlin serveixen per entrenar els models d’identificació?',
          'Què passa amb les observacions ja incorporades a eBird quan s’esborra el compte?',
          'Quin mecanisme empara la transferència de dades europees als Estats Units?',
        ],
      },
    },

    /* ═══════════════════════════ How We Feel ═══════════════════════════ */
    {
      slug: 'how-we-feel',
      name: 'How We Feel',
      company: 'how-we-feel-project',
      categories: ['benestar-i-activitat-fisica'],
      tagline: 'Diari d’emocions sense ànim de lucre que, si no obres compte, no envia res al servidor',
      summary:
        'How We Feel el publica una organització sense ànim de lucre fundada pel cofundador de Pinterest amb investigadors de Yale, Harvard i el MIT. Segons la política, sense compte tot el que hi anotes es queda al dispositiu i l’organització no hi té accés, un compromís que gairebé cap altra aplicació de benestar fa. Amb compte, recull els registres d’emocions, les notes, les fotos, les notes de veu i, si ho actives, la ubicació per al temps i les dades d’Apple Salut. No ven dades ni en fa publicitat, i la compartició amb investigadors és voluntària i anonimitzada.',
      platforms: ['ios', 'android'],
      businessModel: 'donations',
      jurisdiction: 'Estats Units',
      links: {
        website: 'https://howwefeel.org/',
        privacyPolicy: 'https://howwefeel.org/privacy',
        appStore: 'https://apps.apple.com/es/app/id1562706384',
      },
      accountRequired: f('no', 'official', ['how-we-feel-privacy'], 'Es pot fer servir sense compte, i llavors les dades no surten del dispositiu.'),
      openSource: f('no', 'official', ['how-we-feel-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Un registre diari d’emocions amb notes, fotos i àudio és un diari íntim; combinat amb el son, l’exercici i la ubicació, descriu l’estat mental d’una persona dia a dia. La política exclou la venda de dades. El risc que queda és que tot aquest material es concentra en un sol compte d’una entitat petita.',
      dataCollection: [
        row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['how-we-feel-app-store'] }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['how-we-feel-app-store', 'how-we-feel-privacy'], note: 'Si entres amb Apple o Google, el nom arriba del proveïdor d’identitat.' }),
        row('adreca-electronica', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['how-we-feel-app-store', 'how-we-feel-privacy'], note: 'Amb «Inicia sessió amb Apple» es pot amagar el correu real.' }),
        row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['how-we-feel-privacy'], note: 'Dades de son, exercici i salut introduïdes a mà o connectades des d’Apple Salut.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['how-we-feel-privacy'], note: 'Els registres d’emoció, les etiquetes, les entrades de diari i les reflexions.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['how-we-feel-privacy'], note: 'Fotos que es poden adjuntar a cada registre.' }),
        row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['how-we-feel-privacy'], note: 'Notes de veu adjuntes a un registre.' }),
        row('ubicacio-aproximada', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['how-we-feel-privacy'], note: 'Només si actives que es registri el temps que fa on ets.' }),
        row('xarxa-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['how-we-feel-privacy'], note: 'Amistats afegides amb un codi o un enllaç d’invitació, amb qui decideixes quant comparteixes.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['how-we-feel-privacy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['how-we-feel-privacy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['how-we-feel-app-store'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['how-we-feel-privacy'], note: 'Només al lloc web, per comptar visites.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['how-we-feel-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['how-we-feel-app-store', 'how-we-feel-privacy'], 'No hi ha categories publicitàries ni a l’etiqueta ni a la política.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['how-we-feel-privacy', 'how-we-feel-processors'], 'Hi ha proveïdors d’analítica i de suport, publicats en una llista oberta d’encarregats.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['how-we-feel-privacy'], 'La política diu textualment que no fa servir la informació per vendre anuncis ni per guanyar diners.'),
        profiling: f('no', 'official', ['how-we-feel-privacy'], 'La política no descriu cap elaboració de perfils comercial.'),
        aiTraining: unknown('Les funcions d’IA (Reflect i la revisió setmanal) són opcionals i tenen un avís complementari propi que no hem pogut analitzar a fons.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['how-we-feel-privacy'], 'Amb encarregats del tractament, amb les amistats que tu esculls i, si ho autoritzes, amb investigadors acadèmics amb les dades anonimitzades.'),
        intraGroupSharing: na('L’organització no forma part de cap grup empresarial.'),
        dataBrokerSales: f('no', 'official', ['how-we-feel-privacy'], 'La política afirma que no ven informació personal.'),
        internationalTransfers: f('yes', 'editorial', [], 'L’entitat és nord-americana i el tractament és als Estats Units; la política reconeix drets específics per a l’EEE però no descriu el mecanisme de transferència.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['how-we-feel-privacy'], 'La política diu que els terminis es decideixen cas per cas i que les dades del compte duren mentre duri el compte.'),
        dataAfterDeletion: f('partial', 'official', ['how-we-feel-privacy'], 'El contingut esborrat pot quedar temporalment a les còpies de seguretat, que s’esborren en un termini raonable.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['how-we-feel-privacy']),
        selfService: f('yes', 'official', ['how-we-feel-privacy'], 'Es tanca el compte i s’esborren les dades des de la configuració de l’aplicació.'),
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Obre la configuració del compte dins de l’aplicació i tria esborrar el compte.',
          'Si prefereixes la via escrita, escriu a support@howwefeel.org: l’organització es compromet a respondre en 30 dies.',
        ],
        dataRetained: 'Còpies temporals a les còpies de seguretat i les dades de recerca ja anonimitzades que hagis autoritzat a compartir.',
        sources: ['how-we-feel-privacy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['how-we-feel-privacy'], 'L’accés es demana per correu, amb resposta en 30 dies; no hi ha eina automàtica d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['how-we-feel-privacy'], 'Accés, rectificació, supressió, revocació del consentiment i oposició, per correu o des de la configuració.', { url: 'mailto:support@howwefeel.org' }),
      },
      controls: {
        adPersonalizationOptOut: na('El producte no mostra publicitat.'),
        telemetryOptOut: unknown('La política no descriu un interruptor específic d’analítica.'),
        granularControls: f('yes', 'official', ['how-we-feel-privacy'], 'Es pot usar sense compte, decidir quant es comparteix amb cada amistat, revocar el consentiment per a la recerca i desactivar les notificacions.'),
        defaultPosture: 'protective',
        darkPatterns: unknown('No hem documentat patrons enganyosos.'),
      },
      security: {
        e2ee: unknown('La política no diu si les entrades del diari es xifren d’extrem a extrem al servidor.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown('L’accés es fa amb Apple o Google; no hem trobat documentació d’un segon factor propi.'),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini howwefeel.org no publica cap fitxer security.txt vàlid.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hem trobat sancions ni filtracions. La política és clara, però la part de seguretat tècnica no està documentada enlloc: en un diari d’emocions és especialment rellevant saber si el contingut es xifra al servidor.',
        openQuestions: [
          'Com es xifren les entrades del diari, les fotos i les notes de veu al servidor?',
          'Què diu exactament l’avís complementari sobre les funcions d’IA?',
          'Hi ha representant a la UE segons l’article 27 del RGPD?',
        ],
      },
    },

    /* ═══════════════════════════ Fitness Park ═══════════════════════════ */
    {
      slug: 'fitness-park',
      name: 'Fitness Park',
      company: 'upgyms',
      categories: ['benestar-i-activitat-fisica'],
      tagline: 'App d’una cadena de gimnasos amb dues polítiques que no diuen el mateix',
      summary:
        'L’aplicació de Fitness Park la construeix Virtuagym, un proveïdor neerlandès de programari per a gimnasos, i la fitxa de l’App Store enllaça la política d’aquest proveïdor. A Espanya, però, qui respon de les dades és Upgyms, S.L., de Barcelona, amb una política pròpia que descriu la foto del soci, les dades bancàries i les hores d’entrada i sortida del club. La política espanyola afirma que no hi ha transferències fora de la Unió Europea tot i fer servir Google Analytics, i remet les reclamacions a la CNIL francesa en comptes de l’AEPD.',
      platforms: ['ios', 'android'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.fitnesspark.es/',
        privacyPolicy: 'https://www.fitnesspark.es/datos-personales',
        appStore: 'https://apps.apple.com/es/app/id1514794906',
      },
      accountRequired: f('yes', 'official', ['fitness-park-privacy'], 'L’aplicació és per als socis dels clubs: sense abonament no té funció.'),
      openSource: f('no', 'official', ['fitness-park-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les hores d’entrada i sortida del gimnàs són un registre de presència que indica quan ets fora de casa i quina rutina tens. Amb el pes, els entrenaments, la foto i les dades bancàries, formen un expedient de client que inclou dades de salut.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fitness-park-app-store', 'fitness-park-privacy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['fitness-park-app-store', 'fitness-park-privacy'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fitness-park-privacy'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fitness-park-privacy'] }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fitness-park-app-store', 'fitness-park-privacy'], note: 'La política inclou la fotografia entre les dades que es recullen en inscriure’s al club.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fitness-park-privacy'], note: 'Dades bancàries per a la domiciliació de la quota.' }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fitness-park-app-store', 'fitness-park-privacy'], note: 'L’etiqueta declara salut i forma física vinculades amb la persona; la política esmenta les suspensions de l’abonament per raons de salut.' }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['fitness-park-app-store'], note: 'L’etiqueta la declara per al funcionament de l’app, presumiblement per trobar el club més proper.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['fitness-park-app-store', 'fitness-park-privacy'], note: 'Inclou la data i l’hora d’entrada i sortida del club.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fitness-park-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fitness-park-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['fitness-park-privacy'], note: 'Es recull automàticament amb galetes al web.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['fitness-park-privacy'], note: 'El web fa servir Google Analytics i galetes de personalització de continguts i anuncis.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['fitness-park-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['fitness-park-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: unknown('L’etiqueta no esmenta identificadors publicitaris, però el web sí que fa servir galetes de personalització d’anuncis.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['fitness-park-privacy'], 'Google Analytics i galetes de partners declarades al bàner de consentiment.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['fitness-park-privacy'], 'El bàner de galetes ofereix personalitzar continguts i anuncis, i la política preveu «incloure’t en activitats promocionals».'),
        profiling: f('partial', 'official', ['fitness-park-privacy'], 'Elaboració d’estadístiques comercials i enviament d’informació personalitzada, però la política afirma que no hi ha decisions automatitzades.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['fitness-park-privacy'], 'Xplor Technologies com a propietari del programari de gestió, els proveïdors de cada club i «l’intercanvi de fitxers de clients i clients potencials amb els nostres socis».'),
        intraGroupSharing: f('yes', 'official', ['fitness-park-privacy'], 'Cada club de la xarxa, sigui franquiciat o sucursal, és destinatari de les dades del soci.'),
        dataBrokerSales: unknown('La política parla d’intercanvi de fitxers de clients amb socis sense concretar-ne la naturalesa ni la contrapartida.'),
        internationalTransfers: f('no', 'official', ['fitness-park-privacy'], 'La política afirma dues vegades que no hi ha transferències fora de la Unió Europea, tot i declarar l’ús de Google Analytics.', { mechanism: 'none' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['fitness-park-privacy'], 'Les dades es conserven mentre duri la relació contractual i s’arxiven quatre anys més.'),
        dataAfterDeletion: f('yes', 'official', ['fitness-park-privacy'], 'L’arxiu de quatre anys es manté per poder provar un dret o un contracte.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['fitness-park-privacy']),
        selfService: unknown('La política només descriu la via del correu electrònic; no hem pogut verificar una opció de baixa dins de l’aplicació.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Dona’t de baixa de l’abonament del club segons les condicions generals de venda.',
          'Escriu a info@fitnesspark.es indicant la teva referència de client i demanant la supressió de les dades.',
          'Compta amb una resposta d’entre un i tres mesos, segons la mateixa política.',
        ],
        obstacles:
          'La supressió es demana per correu i la política es dona fins a tres mesos per respondre, quan el RGPD fixa un mes prorrogable. A més, les dades s’arxiven quatre anys després del contracte.',
        dataRetained: 'Les dades de la relació contractual, arxivades durant quatre anys.',
        sources: ['fitness-park-privacy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['fitness-park-privacy'], 'La portabilitat es reconeix, però cal demanar-la per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['fitness-park-privacy'], 'Els drets s’exerceixen per correu, i la política remet la reclamació a la CNIL francesa tot i designar Upgyms, S.L. com a responsable a Espanya.', { url: 'mailto:info@fitnesspark.es' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['fitness-park-privacy'], 'El web té panell de configuració de galetes i permet rebutjar-les.'),
        telemetryOptOut: f('partial', 'official', ['fitness-park-privacy'], 'Es poden rebutjar les galetes d’anàlisi del web; no consta cap control equivalent a l’aplicació.'),
        granularControls: f('no', 'official', ['fitness-park-privacy'], 'Fora del panell de galetes, la política no descriu cap control de privadesa dins del producte.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem documentat patrons enganyosos al bàner de consentiment.'),
      },
      security: {
        e2ee: na('És una aplicació de gestió del club, sense comunicacions privades.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni de Fitness Park ni d’Upgyms.'),
        vulnerabilityDisclosure: f('no', 'official', ['fitness-park-privacy'], 'El domini no publica cap fitxer security.txt i la política no dona cap canal de seguretat.'),
      },
      alternatives: [
        {
          app: 'basic-fit',
          comparability: 'partial',
          rationale: 'Cadena equivalent al mercat espanyol, amb una app de funcions similars.',
          tradeOffs: 'L’app va lligada a l’abonament: triar-ne una altra vol dir canviar de gimnàs.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hem trobat sancions de l’AEPD ni de la CNIL contra Fitness Park ni contra Upgyms. La política espanyola té errors de fons que no hem corregit a la fitxa: remet a la CNIL, barreja el paper del grup francès i el de l’operador espanyol i nega transferències internacionals mentre declara Google Analytics.',
        openQuestions: [
          'Quin paper juga exactament Virtuagym, la política del qual enllaça la fitxa de l’App Store: encarregat del tractament o corresponsable?',
          'Es pot esborrar el compte des de l’aplicació sense escriure al club?',
          'Què són els «fitxers de clients i clients potencials» que s’intercanvien amb els socis?',
        ],
      },
    },

    /* ═══════════════════════════ Cicla ═══════════════════════════ */
    {
      slug: 'cicla',
      name: 'Cicla',
      company: 'cicla',
      categories: ['benestar-i-activitat-fisica'],
      tagline: 'Calendari menstrual que es compromet a no vendre dades, amb una política massa breu per a les dades que tracta',
      summary:
        'Cicla és un projecte català de seguiment del cicle menstrual fet per un equip de dones i sostingut amb donacions. Afirma a la política i a la pàgina de compromisos que no ven ni comparteix dades, i l’etiqueta de l’App Store no declara cap dada de rastreig ni cap dada vinculada amb la persona. Però la política és de 2021, no identifica cap responsable del tractament amb raó social ni NIF, no cita l’article 9 del RGPD per a unes dades que inclouen el desig sexual, i situa la base de dades a Supabase, una empresa amb seu a Singapur, sense esmentar cap mecanisme de transferència internacional.',
      platforms: ['ios', 'android'],
      businessModel: 'donations',
      jurisdiction: 'Espanya',
      userBase: 'Més de 30.000 usuàries registrades segons el mateix projecte.',
      links: {
        website: 'https://cicla.es/',
        privacyPolicy: 'https://cicla.es/politica-de-privacidad',
        terms: 'https://cicla.es/terminos-y-condiciones',
        appStore: 'https://apps.apple.com/es/app/id1573281802',
      },
      accountRequired: f('yes', 'official', ['cicla-terms', 'cicla-privacy'], 'Cal crear compte amb nom, sexe, data de naixement i correu.'),
      openSource: f('no', 'official', ['cicla-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les dades d’un calendari menstrual són dades de salut de categoria especial: diuen si hi ha embaràs, quan hi ha relacions sexuals i quin és l’estat físic i anímic dia a dia. Concentrades en un sol compte, són una de les informacions més sensibles que una persona pot confiar a una aplicació.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['cicla-app-store', 'cicla-privacy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['cicla-app-store', 'cicla-privacy'], note: 'Si t’apuntes al butlletí, el correu passa a Mailchimp.' }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['cicla-privacy'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['cicla-privacy', 'cicla-terms'] }),
        row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['cicla-terms'], note: 'Les condicions diuen que en crear el compte es pot demanar el sexe.' }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['cicla-app-store', 'cicla-privacy'], note: 'Dates i durada del cicle, símptomes, benestar i activitats relacionades. La política no invoca l’article 9 del RGPD.' }),
        row('orientacio-sexual', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['cicla-privacy'], note: 'La política inclou el desig sexual entre els símptomes registrats; no és orientació en sentit estricte, però és vida sexual de l’article 9 del RGPD.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['cicla-privacy'], note: 'Model de maquinari i versió del sistema operatiu, recollits amb Google Analytics.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['cicla-app-store', 'cicla-privacy'], note: 'Seccions visitades i patrons d’ús, recollits amb Google Analytics.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['cicla-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['cicla-app-store'], 'No apareix cap categoria publicitària a l’etiqueta.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['cicla-privacy'], 'La política declara l’ús de Google Analytics.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['cicla-privacy', 'cicla-compromisos'], 'El projecte afirma que no ven ni comparteix dades i l’aplicació no mostra publicitat.'),
        profiling: f('partial', 'official', ['cicla-privacy'], 'Les dades serveixen per fer prediccions i recomanacions personalitzades del cicle, no per a perfils comercials.'),
        aiTraining: unknown('La política no diu si les dades serveixen per entrenar els models de predicció.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['cicla-privacy'], 'La política diu que no comparteix dades amb ningú, però declara alhora Supabase com a base de dades, Mailchimp per al butlletí i Google Analytics per a l’analítica.'),
        intraGroupSharing: na('No forma part de cap grup.'),
        dataBrokerSales: f('no', 'official', ['cicla-privacy', 'cicla-compromisos'], 'Afirmació explícita i repetida de no vendre dades.'),
        internationalTransfers: f('partial', 'official', ['cicla-privacy'], 'La base de dades és a Supabase, amb seu social a Singapur, i la política no esmenta cap mecanisme de transferència internacional ni cap garantia adequada.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['cicla-privacy'], 'El criteri és «mentre el compte estigui actiu o mentre estiguis subscrita al butlletí», sense terminis en dies.'),
        dataAfterDeletion: unknown('La política no diu què es conserva després d’esborrar el compte.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['cicla-privacy']),
        selfService: f('yes', 'official', ['cicla-privacy'], 'Hi ha un botó «eliminar cuenta» dins del Perfil de l’aplicació.'),
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Obre el Perfil dins de l’aplicació i prem «eliminar cuenta».',
          'Si vols esborrar només una part de les dades o tenir-ne constància per escrit, escriu a hola@cicla.es.',
        ],
        obstacles:
          'La política es reserva el dret de rebutjar peticions que consideri infundades o repetitives, i no diu en quin termini s’esborren les dades de la base de dades ni de les còpies de seguretat.',
        sources: ['cicla-privacy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['cicla-privacy'], 'Es pot demanar per correu la descàrrega de la informació; no hi ha eina automàtica.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['cicla-privacy'], 'Tots els drets s’exerceixen escrivint a una sola adreça de correu; la política no identifica cap responsable del tractament amb raó social ni informa del dret a reclamar davant l’AEPD.', { url: 'mailto:hola@cicla.es' }),
      },
      controls: {
        adPersonalizationOptOut: na('El producte no mostra publicitat.'),
        telemetryOptOut: f('no', 'official', ['cicla-privacy'], 'La política no ofereix cap manera de desactivar Google Analytics dins de l’aplicació.'),
        granularControls: f('no', 'official', ['cicla-privacy'], 'La política no descriu cap control de privadesa dins del producte.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem documentat patrons enganyosos.'),
      },
      security: {
        e2ee: unknown('La política no diu si les dades del cicle es xifren d’extrem a extrem.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: f('no', 'official', ['cicla-privacy'], 'La política demana que els incidents de seguretat es comuniquin a hola@cicla.es, sense cap programa ni recompensa.'),
        vulnerabilityDisclosure: f('partial', 'official', ['cicla-privacy'], 'Hi ha una adreça de correu per denunciar incidents de seguretat, però no cap política de divulgació ni fitxer security.txt.'),
      },
      alternatives: [
        {
          app: 'flo',
          comparability: 'equivalent',
          rationale: 'Cobreix les mateixes funcions amb un producte molt més desenvolupat.',
          tradeOffs: 'És una empresa amb model publicitari i de subscripció, amb un historial regulador molt més carregat.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hem trobat sancions de l’AEPD ni filtracions relacionades amb Cicla. Els informes generals sobre apps de menstruació (Privacy International, la UOC) no s’hi refereixen i no els hem atribuït a aquesta fitxa. La valoració baixa de la claredat no posa en dubte la intenció del projecte; la política és massa curta per a dades de l’article 9 del RGPD i no identifica el responsable del tractament.',
        openQuestions: [
          'Quina és la raó social i el NIF del responsable del tractament?',
          'Quin mecanisme empara l’ús de Supabase, amb seu social a Singapur?',
          'Per què la política no invoca el consentiment explícit de l’article 9 per a les dades de salut?',
        ],
      },
    },

    /* ═══════════════════════════ Sewpal ═══════════════════════════ */
    {
      slug: 'sewpal',
      name: 'Sewpal',
      company: 'pixelcell',
      categories: ['traduccio-i-referencia'],
      tagline: 'Guia de costura amb assistent d’IA que declara les teves fotos entre les dades de rastreig',
      summary:
        'Sewpal ensenya a cosir, genera patrons a partir de fotos i porta un assistent d’IA. L’etiqueta de l’App Store declara com a dades de rastreig les compres, els identificadors, l’ús i el contingut de la persona usuària, que aquí vol dir les fotos que hi puges. La política, però, és un text genèric d’un estudi de Singapur que no esmenta ni l’assistent d’IA ni què se’n fa dels patrons generats, admet que no respecta el senyal «Do Not Track» i adverteix que les dades viatgen als Estats Units amb una protecció que pot no ser equivalent.',
      platforms: ['ios'],
      businessModel: 'freemium',
      jurisdiction: 'Singapur',
      links: {
        website: 'https://www.getsewpal.com/',
        privacyPolicy: 'https://app-service.getsewpal.com/static/privacy_policy.html',
        appStore: 'https://apps.apple.com/es/app/id6754315885',
      },
      accountRequired: f('yes', 'official', ['sewpal-privacy'], 'La política descriu un perfil amb correu, nom d’usuari i contrasenya.'),
      openSource: f('no', 'official', ['sewpal-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les fotos que puges per generar un patró són contingut teu i, segons l’etiqueta, poden servir per rastrejar-te en apps i webs d’altres empreses. La política, a més, adverteix que altres persones poden descarregar les imatges que comparteixis públicament.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['sewpal-privacy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['sewpal-app-store'] }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sewpal-privacy'] }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['sewpal-app-store', 'sewpal-privacy'], note: 'L’etiqueta les posa entre les dades de rastreig; la política adverteix que les imatges compartides públicament les poden descarregar altres persones.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-publicitaria'], sources: ['sewpal-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['sewpal-app-store', 'sewpal-privacy'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['sewpal-privacy'], note: 'Recollida amb Google Analytics.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['sewpal-app-store', 'sewpal-privacy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['sewpal-privacy'], note: 'La política reconeix galetes i tecnologia de seguiment de tercers per mostrar anuncis adaptats als interessos dins i fora de l’aplicació.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['sewpal-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['sewpal-app-store', 'sewpal-privacy'], 'L’etiqueta declara quatre categories de dades de rastreig i la política admet que no atén el senyal «Do Not Track».'),
        advertisingIdentifiers: f('yes', 'official', ['sewpal-app-store'], 'Identificadors de dispositiu i de compte declarats entre les dades de rastreig.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['sewpal-privacy'], 'Google Analytics i tecnologia de seguiment de tercers per a publicitat.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['sewpal-privacy'], 'La política permet que proveïdors mostrin anuncis adaptats als interessos dins de l’aplicació i «en altres llocs en línia».'),
        profiling: f('partial', 'official', ['sewpal-privacy'], 'La publicitat per interessos implica segmentació, però la política no descriu com es construeix el perfil.'),
        aiTraining: unknown('La fitxa de l’App Store anuncia un assistent d’IA i un generador de patrons a partir de fotos, però la política no esmenta l’IA ni què es fa amb les imatges enviades.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['sewpal-privacy'], 'Apple i Google per a pagaments i analítica, Amazon Web Services per a l’allotjament i xarxes publicitàries.'),
        intraGroupSharing: unknown('La política no descriu cap estructura de grup.'),
        dataBrokerSales: unknown('La política no ho aclareix; parla de proveïdors de publicitat sense dir si hi ha venda.'),
        internationalTransfers: f('yes', 'official', ['sewpal-privacy'], 'Les dades es transfereixen als Estats Units i la política adverteix que la transferència «pot no oferir un nivell de protecció similar», sense citar cap garantia adequada.', { mechanism: 'none' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['sewpal-privacy'], 'El criteri és «mentre sigui necessari i rellevant per al nostre negoci», sense cap termini.'),
        dataAfterDeletion: unknown('La política no diu què es conserva un cop esborrat el compte.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['sewpal-privacy'], 'La política reconeix el dret a demanar-ne la supressió.'),
        selfService: unknown('La política no descriu on és l’opció dins de l’aplicació; cal contrastar-ho amb l’ús real.'),
        difficulty: 'unknown',
        steps: [
          'Cancel·la la subscripció SewPal Premium des de l’App Store si en tens una activa.',
          'Escriu a support@pixelcell.com demanant la supressió del compte i de les dades.',
        ],
        obstacles:
          'La política adverteix que en esborrar les dades es pot perdre l’accés a parts de l’aplicació, i no fixa cap termini de resposta.',
        sources: ['sewpal-privacy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['sewpal-privacy'], 'La política enumera la portabilitat entre els drets, però no descriu cap eina.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['sewpal-privacy'], 'Tots els drets s’exerceixen per una sola adreça de correu de suport.', { url: 'mailto:support@pixelcell.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['sewpal-privacy'], 'Hi ha exclusió del màrqueting, però la política diu que no respecta el senyal «Do Not Track» del navegador.'),
        telemetryOptOut: f('no', 'official', ['sewpal-privacy'], 'No descriu cap manera de desactivar Google Analytics.'),
        granularControls: f('no', 'official', ['sewpal-privacy'], 'La política no descriu cap control de privadesa dins del producte.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem provat el flux de subscripció; la fitxa ofereix compres de 3,99 € i 34,99 €.'),
      },
      security: {
        e2ee: na('És una aplicació de contingut i patrons, sense comunicacions privades.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hem trobat incidents documentats. És una aplicació nova d’un estudi petit: la política és un text de plantilla que no descriu el producte publicat a l’App Store, i per això molts apartats queden com a desconeguts.',
        openQuestions: [
          'Què fa exactament l’assistent d’IA amb les fotos i amb les preguntes que se li fan?',
          'Hi ha opció d’esborrar el compte dins de l’aplicació?',
          'Quins socis publicitaris reben el contingut declarat com a dada de rastreig?',
        ],
      },
    },

    /* ═══════════════════════════ Traductor Go ═══════════════════════════ */
    {
      slug: 'traductor-go',
      name: 'Traductor Go',
      company: 'smart-technology-app',
      categories: ['traduccio-i-referencia'],
      tagline: 'Traductor amb política de privadesa d’una altra aplicació i publicitat de tercers',
      summary:
        'Traductor Go es presenta com un traductor amb IA per veu, càmera i pantalla. L’etiqueta de l’App Store el publica un compte de desenvolupador a nom d’una persona física, però la política que enllaça la signa una societat de Singapur i està escrita per a un escàner de documents: parla de la càmera i dels documents escanejats i no diu res dels textos que es tradueixen. Declara identificadors publicitaris, publicitat de tercers i la compartició amb Apple, Firebase, Facebook, Google i Microsoft, i admet transferències a qualsevol país tercer sense garanties equivalents.',
      platforms: ['ios'],
      businessModel: 'freemium',
      jurisdiction: 'Singapur',
      links: {
        website: 'https://smart.southpolemob.com/',
        privacyPolicy: 'https://smart.southpolemob.com/policy.html',
        appStore: 'https://apps.apple.com/es/app/id6736970537',
      },
      accountRequired: f('no', 'official', ['traductor-go-app-store'], 'L’etiqueta declara totes les dades com a no vinculades amb la persona, cosa que indica que no cal registre.'),
      openSource: f('no', 'official', ['traductor-go-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Els textos que es tradueixen solen ser privats, i la política no diu on van ni quant de temps es conserven. Sí que documenta la part publicitària: identificadors, ubicació a escala de ciutat i esdeveniments dins de l’aplicació que s’envien a cinc plataformes grans.',
      dataCollection: [
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['traductor-go-privacy'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['traductor-go-app-store', 'traductor-go-privacy'] }),
        row('adreca-ip', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['traductor-go-privacy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['traductor-go-privacy'], note: 'País, regió i ciutat, segons la política.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['traductor-go-privacy'], note: 'Tipus, sistema operatiu, model i memòria.' }),
        row('xarxa-i-connectivitat', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['traductor-go-privacy'], note: 'Operador de xarxa i durada de les sessions.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['traductor-go-app-store', 'traductor-go-privacy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte', 'publicitat-personalitzada'], sources: ['traductor-go-app-store'], note: 'L’etiqueta els declara alhora com a dada de rastreig i com a dada de publicitat de tercers.' }),
        row('contingut-de-missatges', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], level: 'unknown', note: 'La política no diu enlloc què passa amb els textos, la veu i les imatges que es tradueixen.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['traductor-go-privacy'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['traductor-go-app-store'], 'L’etiqueta declara dades d’ús i diagnòstics com a dades utilitzades per rastrejar.'),
        advertisingIdentifiers: f('yes', 'official', ['traductor-go-privacy'], 'La política enumera explícitament els identificadors publicitaris.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['traductor-go-privacy', 'traductor-go-app-store'], 'Firebase, Facebook, Google i Microsoft reben dades de dispositiu, ubicació i identificadors publicitaris.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['traductor-go-privacy'], 'La política descriu tecnologies automatitzades per mostrar anuncis segmentats segons les preferències i els interessos.'),
        profiling: f('partial', 'official', ['traductor-go-privacy'], 'La segmentació publicitària implica perfil, però la política no el descriu.'),
        aiTraining: unknown('L’aplicació es ven com a traductor amb IA i la política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['traductor-go-privacy'], 'Apple, Firebase (Google), Facebook, Google i Microsoft.'),
        intraGroupSharing: unknown('La política no descriu l’estructura del grup ni la relació amb el compte de desenvolupador que publica l’app.'),
        dataBrokerSales: unknown('La política no ho aclareix.'),
        internationalTransfers: f('yes', 'official', ['traductor-go-privacy'], 'La política diu que pot transferir dades personals a qualsevol tercer país sense garanties equivalents de protecció.', { mechanism: 'none' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['traductor-go-privacy'], 'El criteri és «mentre sigui necessari per prestar el servei funcional de l’app».'),
        dataAfterDeletion: unknown('La política admet que es poden conservar dades per obligacions legals, sense concretar quines.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['traductor-go-privacy'], 'La política permet demanar l’esborrat de la informació personal i el tancament del compte, tot i que l’aplicació sembla funcionar sense registre.'),
        selfService: f('no', 'official', ['traductor-go-privacy'], 'L’única via documentada és la petició per correu.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Cancel·la la subscripció des de l’App Store: les subscripcions van de 8,99 € setmanals a 99,99 €.',
          'Escriu a l’adreça de contacte que publica la política demanant l’esborrat de la informació personal.',
        ],
        obstacles:
          'La política publica l’adreça de contacte de manera ofuscada i no fixa cap termini de resposta.',
        sources: ['traductor-go-privacy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['traductor-go-privacy'], 'La política enumera l’accés i la portabilitat, sense descriure cap eina.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['traductor-go-privacy'], 'Els drets s’exerceixen per correu; la política no identifica cap responsable a la UE ni cap delegat de protecció de dades.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['traductor-go-privacy'], 'La política diu que es pot optar per no rebre publicitat personalitzada, però no explica com.'),
        telemetryOptOut: f('no', 'official', ['traductor-go-privacy'], 'No descriu cap manera de desactivar l’analítica.'),
        granularControls: f('no', 'official', ['traductor-go-privacy'], 'No hi ha cap control de privadesa documentat dins del producte.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem provat el flux de subscripció, però la fitxa ofereix set plans amb preus molt dispars.'),
      },
      security: {
        e2ee: na('El traductor ha de processar el text al servidor.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      alternatives: [
        {
          app: 'traductor-de-deepl',
          comparability: 'equivalent',
          rationale:
            'Empresa europea sota el RGPD, sense publicitat ni identificadors de rastreig i amb terminis de conservació publicats.',
          tradeOffs: 'Cobreix menys idiomes i, al pla gratuït, els textos s’usen per entrenar els models.',
        },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hem trobat incidents documentats. La fitxa queda com a inicial perquè la política enllaçada no correspon al producte: descriu un escàner de documents i no explica què passa amb el text que es tradueix.',
        openQuestions: [
          'On s’envien i quant es conserven els textos, la veu i les imatges traduïdes?',
          'Quina relació hi ha entre el compte de desenvolupador Tung To Dinh i SmartTechnologyApp PTE. LTD.?',
          'Hi ha responsable o representant a la Unió Europea?',
        ],
      },
    },

    /* ═══════════════════════════ HoloDex ═══════════════════════════ */
    {
      slug: 'holodex',
      name: 'HoloDex',
      company: 'mavelli',
      categories: ['utilitats'],
      tagline: 'Escàner de cromos que declara la ubicació i les fotos entre les dades de rastreig',
      summary:
        'HoloDex escaneja cartes col·leccionables de Pokémon, Magic o Lorcana, en valora l’estat amb IA i en fa el seguiment del preu. L’etiqueta de l’App Store declara la ubicació, els identificadors i les dades d’ús com a dades utilitzades per rastrejar, i vincula amb la persona el correu, les fotos, l’historial de cerca i la ubicació exacta. La política la signa una empresa de zona franca de Dubai i confirma l’ús de píxels i SDK per a atribució i mesura publicitària, amb tractament repartit entre els Emirats, els Estats Units i la Unió Europea.',
      platforms: ['ios'],
      businessModel: 'freemium',
      jurisdiction: 'Emirats Àrabs Units',
      links: {
        website: 'https://www.getholodex.com/',
        privacyPolicy: 'https://www.getholodex.com/privacy',
        appStore: 'https://apps.apple.com/es/app/id6747442689',
      },
      accountRequired: f('yes', 'official', ['holodex-privacy'], 'La col·lecció es lliga a un compte, amb registre propi o amb Apple i Google.'),
      openSource: f('no', 'official', ['holodex-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Una col·lecció escanejada és un inventari de béns amb valor de mercat, lligat a un correu i, segons l’etiqueta, a la ubicació exacta. Aquesta informació pot interessar tant als anunciants com a qualsevol que vulgui saber què guardes a casa.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['holodex-app-store', 'holodex-privacy'] }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['holodex-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-publicitaria'], sources: ['holodex-app-store', 'holodex-privacy'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['holodex-app-store', 'holodex-privacy'] }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['holodex-app-store'], note: 'L’etiqueta la declara vinculada amb la persona i posa la ubicació entre les dades de rastreig. La política no explica per a què la necessita un escàner de cartes.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['holodex-app-store'] }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['holodex-app-store', 'holodex-privacy'], note: 'Imatges de l’anvers i el revers de cada carta per a l’escaneig i la valoració automàtica.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['holodex-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['holodex-privacy'], note: 'Les subscripcions es gestionen amb RevenueCat i Stripe.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'mesura-publicitaria'], sources: ['holodex-app-store', 'holodex-privacy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['holodex-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['holodex-app-store'], 'L’etiqueta declara la ubicació, els identificadors i les dades d’ús com a dades utilitzades per rastrejar.'),
        advertisingIdentifiers: f('yes', 'official', ['holodex-privacy'], 'La política cita píxels, SDK i emmagatzematge local per a atribució i mesura publicitària.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['holodex-privacy'], 'SDK d’atribució i de mesura, a més dels proveïdors de pagament i d’autenticació.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['holodex-privacy'], 'La política descriu mesura de campanyes i comunicacions de màrqueting; no detalla publicitat dins de l’aplicació.'),
        profiling: unknown('La política no descriu l’elaboració de perfils.'),
        aiTraining: unknown('L’aplicació fa valoració automàtica de cartes amb IA, però la política no diu si les imatges enviades serveixen per entrenar el model.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['holodex-privacy'], 'Apple i Google per a autenticació i pagament, RevenueCat i Stripe per a subscripcions, i proveïdors d’analítica i atribució.'),
        intraGroupSharing: unknown('La política no descriu cap estructura de grup.'),
        dataBrokerSales: unknown('La política no ho aclareix.'),
        internationalTransfers: f('yes', 'official', ['holodex-privacy'], 'El tractament es reparteix entre els Emirats Àrabs Units, els Estats Units, la Unió Europea i altres llocs on opera l’empresa, sense concretar cap garantia adequada.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['holodex-privacy'], 'El criteri és «mentre sigui necessari», sense terminis.'),
        dataAfterDeletion: f('yes', 'official', ['holodex-privacy'], 'La política adverteix que algunes dades poden persistir a les còpies de seguretat.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['holodex-privacy']),
        selfService: f('partial', 'official', ['holodex-privacy'], 'La política diu que el compte es pot esborrar des de l’aplicació o escrivint al correu de contacte.'),
        difficulty: 'medium',
        requiresSupportContact: false,
        steps: [
          'Cancel·la la subscripció des de l’App Store: els plans van de 4,99 € setmanals a 49,99 €.',
          'Esborra el compte des de l’aplicació o escriu a contact@getholodex.com.',
        ],
        obstacles: 'Algunes dades poden quedar a les còpies de seguretat i la política no diu quant de temps.',
        dataRetained: 'Còpies de seguretat i les dades necessàries per complir obligacions legals.',
        sources: ['holodex-privacy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['holodex-privacy'], 'El dret d’accés es reconeix segons el lloc de residència, sense eina d’exportació documentada.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['holodex-privacy'], 'Els drets s’exerceixen per correu; la política no designa cap representant a la Unió Europea.', { url: 'mailto:contact@getholodex.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['holodex-privacy'], 'Es pot deixar de rebre comunicacions de màrqueting; la política no ofereix un control per a l’atribució publicitària.'),
        telemetryOptOut: f('no', 'official', ['holodex-privacy'], 'No descriu cap manera de desactivar l’analítica.'),
        granularControls: unknown('No hem pogut verificar quins controls de privadesa hi ha dins de l’aplicació.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem provat el flux de subscripció, però la fitxa ofereix set plans amb preus molt dispars.'),
      },
      security: {
        e2ee: na('És un gestor de col·leccions, sense comunicacions privades.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown('L’accés amb Apple o Google hereta el segon factor d’aquests comptes; l’app no en documenta cap de propi.'),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: f('no', 'official', ['holodex-privacy'], 'El domini no publica cap fitxer security.txt i la política no dona cap canal de seguretat.'),
      },
      alternatives: [
        {
          app: 'collectr',
          comparability: 'equivalent',
          rationale: 'Cobreix el mateix ús de catalogació i valoració de col·leccions de cartes.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hem trobat incidents documentats. El punt menys justificat és la ubicació: l’etiqueta la declara exacta, vinculada amb la persona i entre les dades de rastreig, i la política no explica quina funció d’un escàner de cartes la necessita.',
        openQuestions: [
          'Per a què fa servir HoloDex la ubicació exacta?',
          'Les imatges de les cartes serveixen per entrenar el model de valoració?',
          'Qui és el representant de Mavelli FZCO a la Unió Europea?',
        ],
      },
    },

    /* ═══════════════════════════ Test DGT 2026 ═══════════════════════════ */
    {
      slug: 'test-dgt',
      name: 'Test DGT 2026',
      company: 'vavien-technology',
      categories: ['educacio'],
      tagline: 'Tests del carnet amb una etiqueta de privadesa mínima i una política que no signa l’empresa que publica l’app',
      summary:
        'Test DGT 2026 simula l’examen teòric de conduir. L’etiqueta de l’App Store és sòbria: només dades d’ús i diagnòstics, sense vincular amb la persona i sense rastreig. Les fonts no coincideixen. El desenvolupador declarat és una societat amb domicili a Dublín, però la política de privadesa és un text allotjat a Google Sites signat per una persona física, que cita AdMob i Firebase, no fixa terminis de conservació i no descriu cap dret del RGPD.',
      platforms: ['ios'],
      businessModel: 'freemium',
      jurisdiction: 'Irlanda',
      links: {
        website: 'https://sites.google.com/view/yigitapptech-privacy-policy/home',
        privacyPolicy: 'https://sites.google.com/view/yigitapptech-privacy-policy/home',
        appStore: 'https://apps.apple.com/es/app/id6756551956',
      },
      accountRequired: f('no', 'official', ['test-dgt-app-store'], 'L’etiqueta no declara cap dada vinculada amb la persona, cosa que indica que no cal registre.'),
      openSource: f('no', 'official', ['test-dgt-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les dades d’aquesta aplicació diuen poca cosa: quins temes falles i quantes vegades ho intentes. El que falta és transparència, perquè la política no diu qui en respon ni quant de temps conserva les dades.',
      dataCollection: [
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['test-dgt-app-store', 'test-dgt-privacy'], note: 'Estadístiques d’ús recollides amb Google Analytics for Firebase.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['test-dgt-app-store', 'test-dgt-privacy'] }),
        row('adreca-ip', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['test-dgt-privacy'], note: 'La política diu que es recull en cas d’error, juntament amb el nom del dispositiu i la versió del sistema.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['test-dgt-privacy'] }),
        row('identificador-publicitari', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada'], level: 'unknown', note: 'La política cita AdMob, però l’etiqueta de l’App Store no declara cap dada publicitària ni de rastreig: les dues fonts no encaixen.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['test-dgt-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: unknown('L’etiqueta no declara identificadors publicitaris, però la política cita AdMob.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['test-dgt-privacy'], 'Google Play Services, AdMob i Google Analytics for Firebase.'),
      },
      dataUses: {
        targetedAdvertising: unknown('La política cita AdMob sense explicar si la publicitat és segmentada; l’etiqueta no declara res de publicitari.'),
        profiling: f('no', 'official', ['test-dgt-app-store'], 'L’etiqueta no declara cap dada vinculada amb la persona.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['test-dgt-privacy'], 'Serveis de Google: Play Services, AdMob i Analytics for Firebase.'),
        intraGroupSharing: unknown('La política no descriu cap estructura de grup ni la relació amb Vavien Technology Limited.'),
        dataBrokerSales: unknown('La política no ho aclareix.'),
        internationalTransfers: unknown('La política no esmenta transferències internacionals, tot i que els serveis de Google que cita n’impliquen.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['test-dgt-privacy'], 'La política no fixa cap termini de conservació.'),
        dataAfterDeletion: unknown('La política no en diu res.'),
      },
      accountDeletion: {
        possible: na('L’aplicació funciona sense compte segons l’etiqueta de l’App Store.'),
        selfService: na('No hi ha compte per esborrar.'),
        difficulty: 'unknown',
        steps: [
          'Cancel·la la subscripció Premium setmanal (3,99 €) des de l’App Store si en tens una activa.',
          'Desinstal·la l’aplicació: sense compte, no hi ha cap perfil pendent d’esborrar.',
          'Si vols que s’esborrin les dades tècniques associades, escriu a info@vavientech.com.',
        ],
        obstacles: 'La política no descriu cap procediment de supressió per a persones adultes, només per a menors de 13 anys.',
        sources: ['test-dgt-privacy', 'test-dgt-app-store'],
      },
      userRights: {
        dataExport: unknown('La política no descriu el dret d’accés ni cap eina d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('no', 'official', ['test-dgt-privacy'], 'La política no detalla cap dret del RGPD ni cap procediment per exercir-los; només publica una adreça de correu personal.'),
      },
      controls: {
        adPersonalizationOptOut: unknown('La política no descriu cap control de publicitat.'),
        telemetryOptOut: f('no', 'official', ['test-dgt-privacy'], 'No descriu cap manera de desactivar Firebase.'),
        granularControls: f('no', 'official', ['test-dgt-privacy'], 'No hi ha cap control de privadesa documentat.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem provat el flux de subscripció.'),
      },
      security: {
        e2ee: na('És una aplicació de tests sense comunicacions privades.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: na('L’aplicació no té comptes.'),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hem trobat cap canal de divulgació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hem trobat incidents documentats. La fitxa queda com a inicial perquè la política enllaçada no la signa l’empresa que consta com a desenvolupadora i no cobreix els mínims del RGPD: ni responsable identificat, ni terminis, ni drets. L’etiqueta de l’App Store, en canvi, no declara rastreig ni dades vinculades, i les dues fonts no es poden conciliar sense provar l’aplicació.',
        openQuestions: [
          'Quina relació hi ha entre Vavien Technology Limited i la persona que signa la política?',
          'L’aplicació mostra anuncis d’AdMob i, si ho fa, són segmentats?',
          'Qui és el responsable del tractament a efectes del RGPD?',
        ],
      },
    },
  ],

  incidents: [
    {
      slug: 'strava-mapa-de-calor-2018',
      title: 'El mapa de calor global de Strava va revelar bases militars i rutes de patrulla',
      type: 'leak',
      severity: 'high',
      apps: ['strava'],
      company: 'strava',
      occurredAt: '2017-11-01',
      disclosedAt: '2018-01-28',
      description:
        'El mapa de calor global que Strava va publicar el novembre del 2017 agregava milers de milions de punts GPS d’activitats visibles per a tothom. En zones sense població civil, com deserts de Síria o l’Afganistan, els únics traçats eren els del personal militar que corria dins de bases i llocs d’escolta no declarats, cosa que en revelava el perímetre i les rutes de patrulla. Strava no va patir cap intrusió: la informació era pública perquè els comptes tenien la configuració per defecte. L’empresa va acabar restringint la visibilitat de les dades del mapa.',
      affectedPeople: 'Personal militar i de seguretat de diversos països que feia servir l’aplicació amb la configuració per defecte.',
      sources: ['strava-heatmap-guardian-2018'],
    },
    {
      slug: 'strava-escortes-2024',
      title: 'Les carreres d’escortes a Strava van revelar moviments confidencials de caps d’estat',
      type: 'leak',
      severity: 'high',
      apps: ['strava'],
      company: 'strava',
      occurredAt: '2024-10-27',
      disclosedAt: '2024-10-27',
      description:
        'Una investigació de Le Monde va identificar agents del servei secret dels Estats Units i escortes de França i Rússia que publicaven les seves carreres a Strava amb el nom real. Els traçats començaven als hotels on després s’allotjaven Joe Biden, Donald Trump, Kamala Harris, Emmanuel Macron o Vladímir Putin, i permetien conèixer desplaçaments confidencials amb antelació, com un cap de setmana privat del president francès. La presidència francesa va restar-hi importància.',
      affectedPeople: 'Agents d’escorta de diversos estats i, indirectament, els dirigents que protegien.',
      sources: ['strava-bodyguards-ap-2024'],
    },
  ],

  storeIds: {
    strava: 'com.strava.stravaride',
    'traductor-de-deepl': 'com.linguee.DeepLMobileTranslator',
    'merlin-bird-id': 'edu.cornell.birds.merlin',
    'how-we-feel': 'org.howwefeel.HowWeFeel-Moodmeter',
    'fitness-park': 'eu.virtuagym.fitnessparkqsuperclub',
    cicla: 'com.cicla.ciclaapp',
    sewpal: 'com.sewpal.sewing',
    'traductor-go': 'com.ai.translate',
    holodex: 'com.getholodex.app',
    'test-dgt': 'com.yigit.dgt',
  },
}
