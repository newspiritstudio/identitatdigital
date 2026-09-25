import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

/**
 * Lot 19 de la segona onada: entreteniment i estil de vida.
 *
 * Deu fitxes que van del microdrama vertical a la llar connectada. El fil que
 * les uneix és la distància entre el que diu l'etiqueta de privadesa de
 * l'App Store i el que diu la política del servei: a DramaBox, a Booksy i a
 * Webel l'etiqueta declara menys del que admet la política; a Tapo i a
 * SmartThings, al revés, cap dada consta vinculada a la identitat tot i que el
 * servei funciona amb compte.
 */
const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)
export const lot: SeedLot = {
  companies: [
    {
      slug: 'filmaffinity',
      name: 'Filmaffinity',
      legalName: 'Filmaffinity, S.L.',
      description:
        'Empresa independent de Madrid, creada el 2002 pel crític Pablo Kurt Verdú i Daniel Nicolás, que en són els únics accionistes. Gestiona el web de votació i recomanació de pel·lícules i sèries FilmAffinity i es finança amb publicitat.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      foundedYear: 2002,
      primaryRevenueModel: 'advertising',
      website: 'https://www.filmaffinity.com/',
      productDomains: ['filmaffinity.com'],
    },
    {
      slug: 'webelapp-technologies',
      name: 'Webel',
      legalName: 'Webelapp Technologies, S.L.',
      description:
        'Empresa emergent de Madrid, fundada el 2018, que gestiona Webel, un mercat de serveis a domicili (neteja, reparacions, bellesa, classes, cura de persones i mascotes) que cobra una comissió per cada reserva. Opera a Espanya i al Regne Unit.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      foundedYear: 2018,
      primaryRevenueModel: 'commerce',
      website: 'https://appwebel.com/',
      productDomains: ['appwebel.com', 'webel.es'],
      privacyContact: 'contact@appwebel.com',
    },
    {
      slug: 'dianzhong-technology',
      name: 'Dianzhong Technology',
      legalName: 'Dianzhong Technology Co., Ltd.',
      description:
        'Empresa de Pequín especialitzada en literatura digital i microdrames verticals. És la matriu de StoryMatrix, que explota DramaBox fora de la Xina, i n’aporta la tecnologia i el catàleg.',
      headquartersCountry: 'CN',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
    },
    {
      slug: 'storymatrix',
      name: 'StoryMatrix',
      legalName: 'StoryMatrix Pte. Ltd.',
      parent: 'dianzhong-technology',
      description:
        'Societat de Singapur creada el gener del 2022 per publicar internacionalment els microdrames verticals de Dianzhong Technology. El seu producte principal és DramaBox, que es finança amb monedes de pagament, subscripcions i publicitat.',
      headquartersCountry: 'SG',
      ownership: 'subsidiary',
      foundedYear: 2022,
      primaryRevenueModel: 'mixed',
      website: 'https://www.dramaboxdb.com/',
      productDomains: ['dramaboxdb.com', 'dramabox.com'],
      privacyContact: 'DPO@dramabox.com',
    },
    {
      slug: 'tp-link-systems',
      name: 'TP-Link Systems',
      legalName: 'TP-Link Systems Inc.',
      description:
        'Fabricant d’equips de xarxa i de dispositius domèstics connectats sota les marques TP-Link, Tapo, Kasa i Deco. La política de Tapo l’identifica com a responsable als Estats Units i atribueix la resta del món a TP-LINK CORPORATION PTE. LTD., de Singapur, amb TP-Link Deutschland GmbH, de Düsseldorf, com a representant a la Unió Europea.',
      headquartersCountry: 'US',
      euEstablishment: 'DE',
      ownership: 'private',
      primaryRevenueModel: 'hardware',
      website: 'https://www.tp-link.com/',
      productDomains: ['tp-link.com', 'tapo.com', 'tplinkcloud.com'],
      privacyContact: 'privacy@tp-link.com',
    },
    {
      slug: 'samsung-electronics',
      name: 'Samsung Electronics',
      legalName: 'Samsung Electronics Co., Ltd.',
      description:
        'Fabricant sud-coreà d’electrònica de consum, telefonia i electrodomèstics. SmartThings és la seva plataforma de llar connectada, que també controla dispositius d’altres marques.',
      headquartersCountry: 'KR',
      ownership: 'public',
      foundedYear: 1969,
      primaryRevenueModel: 'hardware',
      website: 'https://www.samsung.com/',
      productDomains: ['samsung.com', 'smartthings.com', 'samsungiotcloud.com'],
    },
    {
      slug: 'lg-electronics',
      name: 'LG Electronics',
      legalName: 'LG Electronics Inc.',
      description:
        'Fabricant sud-coreà d’electrodomèstics, televisors i equips de climatització. LG ThinQ és l’aplicació que connecta i controla els seus aparells.',
      headquartersCountry: 'KR',
      ownership: 'public',
      foundedYear: 1958,
      primaryRevenueModel: 'hardware',
      website: 'https://www.lg.com/',
      productDomains: ['lg.com', 'lgaccount.com', 'lgthinq.com'],
    },
    {
      slug: 'lg-electronics-espana',
      name: 'LG Electronics España',
      legalName: 'LG Electronics España, S.A.U.',
      parent: 'lg-electronics',
      description:
        'Filial espanyola de LG, amb domicili al carrer Chile 1 de Las Rozas (Madrid), que figura com a responsable del tractament per a les persones usuàries espanyoles del compte LG i de ThinQ, i com a corresponsable amb LG Electronics Deutschland GmbH per al perfilat.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      primaryRevenueModel: 'hardware',
      website: 'https://www.lg.com/es/',
      privacyContact: 'lgees.legal@lge.com',
    },
    {
      slug: 'booksy-international',
      name: 'Booksy',
      legalName: 'Booksy International sp. z o.o.',
      description:
        'Grup d’origen polonès que explota Booksy, una plataforma de reserva de cites per a perruqueries, barberies, centres d’estètica i altres serveis de bellesa i benestar. Cobra una quota als negocis professionals i una comissió per les reserves captades.',
      headquartersCountry: 'PL',
      euEstablishment: 'PL',
      ownership: 'private',
      foundedYear: 2013,
      primaryRevenueModel: 'subscription',
      website: 'https://booksy.com/',
      productDomains: ['booksy.com', 'booksy.net'],
    },
    {
      slug: 'booksy-iberia',
      name: 'Booksy Iberia',
      legalName: 'Booksy Iberia, S.L.U.',
      parent: 'booksy-international',
      description:
        'Societat espanyola del grup Booksy, amb domicili al passeig de la Castellana 216 de Madrid, que figura com a responsable del tractament de les dades de les persones usuàries de Booksy a Espanya.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      primaryRevenueModel: 'subscription',
      website: 'https://booksy.com/es-es/',
      privacyContact: 'lopd@booksy.com',
    },
    {
      slug: 'mtch-technology-services',
      name: 'MTCH Technology Services',
      legalName: 'MTCH Technology Services Limited',
      parent: 'match-group',
      description:
        'Societat irlandesa del grup Match Group, amb domicili a 1 Hatch Street Upper, Dublín, que és la responsable del tractament de les dades de les persones usuàries de Hinge a l’Espai Econòmic Europeu.',
      headquartersCountry: 'IE',
      euEstablishment: 'IE',
      leadSupervisoryAuthority: 'dpc-ie',
      ownership: 'subsidiary',
      primaryRevenueModel: 'freemium',
      website: 'https://hinge.co/',
      productDomains: ['hinge.co'],
    },
    {
      slug: 'sony-group',
      name: 'Sony Group',
      legalName: 'Sony Group Corporation',
      description:
        'Conglomerat japonès d’electrònica, videojocs, música i cinema. La divisió de videojocs, Sony Interactive Entertainment, explota PlayStation Network.',
      headquartersCountry: 'JP',
      ownership: 'public',
      foundedYear: 1946,
      primaryRevenueModel: 'mixed',
      website: 'https://www.sony.com/',
    },
    {
      slug: 'sony-interactive-entertainment-europe',
      name: 'Sony Interactive Entertainment Europe',
      legalName: 'Sony Interactive Entertainment Europe Limited',
      parent: 'sony-group',
      description:
        'Societat britànica (registre 03277793, amb domicili a Londres) responsable del tractament de les dades de les persones usuàries de PlayStation Network a Europa, inclosa Espanya. L’aplicació per a iOS la publica PlayStation Mobile Inc.',
      headquartersCountry: 'GB',
      ownership: 'subsidiary',
      primaryRevenueModel: 'mixed',
      website: 'https://www.playstation.com/',
      productDomains: ['playstation.com', 'sonyentertainmentnetwork.com'],
      privacyContact: 'siee.dpo@sony.com',
    },
    {
      slug: 'hacoo-tech',
      name: 'Hacoo Tech',
      legalName: 'Hacoo Tech Limited',
      description:
        'Societat que explota Hacoo, una botiga en línia de productes molt barats amb components socials de recomanació i de compra en grup. La documentació pública no en concreta el país de constitució; el «centre de confiança» del web hi dona una adreça de Dublín.',
      ownership: 'private',
      primaryRevenueModel: 'commerce',
      website: 'https://www.hacoo.app/',
      productDomains: ['hacoo.app', 'hacoo.com'],
    },
  ],
  sources: [
    /* ── FilmAffinity ── */
    s('filmaffinity-app-store', 'filmaffinity — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6759088601', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de l’app, publicada el setembre del 2026. Només declara el correu i l’identificador d’usuari per al funcionament i «altre contingut de l’usuari» per a altres finalitats, tot vinculat a la identitat. No declara rastreig.',
    }),
    s('filmaffinity-privacy-policy', 'Política de Privacidad y condiciones de uso de Filmaffinity', 'https://www.filmaffinity.com/es/private.php', 'Filmaffinity S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      archiveUrl: 'https://web.archive.org/web/20260818173031/https://www.filmaffinity.com/es/private.php',
      summary: 'Política única per al web i l’app, revisada el maig del 2018 i ampliada amb avisos del 2019 i del 2025. Diu que les dades no es cedeixen ni es venen, enumera les dades de registre i què veuen les «ànimes bessones», i encara es remet a la LOPD del 1999. No detalla bases jurídiques, terminis ni transferències. El web la bloqueja amb un repte de Cloudflare; l’hem llegida a l’Internet Archive (còpia de l’agost del 2026).',
    }),
    s('filmaffinity-cookies-policy', 'Cookies de Filmaffinity', 'https://www.filmaffinity.com/es/cookies_info.php', 'Filmaffinity S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      archiveUrl: 'https://web.archive.org/web/20241215123242/https://www.filmaffinity.com/es/cookies_info.php',
      summary: 'Política de galetes del web (còpia de desembre del 2024 a l’Internet Archive). Esmenta galetes publicitàries d’una agència, Google Analytics, Comscore i connectors socials de Facebook, Twitter i YouTube.',
    }),
    s('filmaffinity-faq', 'Preguntas más frecuentes — Filmaffinity', 'https://www.filmaffinity.com/es/faq.php', 'Filmaffinity S.L.', 'support-doc', 'primary', {
      language: 'es',
      archiveUrl: 'https://web.archive.org/web/20260719014447/https://www.filmaffinity.com/es/faq.php',
      summary: 'Preguntes freqüents: nivells de privadesa del perfil, funcionament de les «ànimes bessones» i baixa autoservei des de «Datos personales», amb esborrat complet unes dues setmanes després.',
    }),

    /* ── Webel ── */
    s('webel-app-store', 'Webel - Servicios a domicilio — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1470056152', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara «altres dades d’ús» com a dades per rastrejar, la interacció amb el producte vinculada a la identitat i diagnòstics no vinculats. No declara dades de contacte, ubicació ni pagament.',
    }),
    s('webel-privacy-policy', 'Política de privacidad — Webel', 'https://legal.appwebel.com/11135bf692b080058410fa6f63febd28', 'Webelapp Technologies S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política publicada a Notion, editada per última vegada el juny del 2025. Detalla les dades de registre i de dispositiu, la geolocalització opcional, el seguiment de clics, els pagaments amb MangoPay i Stripe, la compartició amb professionals, filials i proveïdors antifrau, l’allotjament a AWS Irlanda i l’exercici de drets amb còpia del DNI.',
    }),
    s('webel-terms', 'Términos y condiciones — Webel', 'https://legal.appwebel.com/11135bf692b08083a746d1fed2d73685', 'Webelapp Technologies S.L.', 'terms', 'primary', {
      language: 'es',
      summary: 'Condicions generals actualitzades el setembre del 2026. Regulen el registre, la missatgeria amb filtres automatitzats, la moderació i la baixa, que es demana des de l’app pel formulari de contacte o per correu.',
    }),
    s('webel-cookie-policy', 'Política de cookies — Webel', 'https://legal.appwebel.com/11135bf692b080178f8dfb0de3bd28b5', 'Webelapp Technologies S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de galetes del web: galetes pròpies i de tercers, analítiques (Google Analytics) i de publicitat comportamental. Diu que continuar navegant equival a consentir-les.',
    }),

    /* ── DramaBox ── */
    s('dramabox-app-store', 'DramaBox - Series en Línea — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6445905219', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara identificadors i dades d’ús com a dades per rastrejar, i vincula a la identitat l’identificador de dispositiu per a publicitat de tercers, l’historial de cerca i de navegació per a personalització i l’historial de compres. També hi consten els preus de les compres dins de l’aplicació.',
    }),
    s('dramabox-privacy-policy', 'DramaBox Privacy Policy', 'https://support.dramaboxdb.com/privacy.html', 'StoryMatrix Pte. Ltd.', 'privacy-policy', 'primary', {
      language: 'en',
      summary: 'Política vigent des del 18 de juliol del 2026. Identifica StoryMatrix Pte. Ltd. a Singapur, nomena un representant a la UE amb l’adreça DPO@dramabox.com, enumera els SDK de tercers (AdMob, AppsFlyer, AppLovin Max, Sensors Data, Facebook, Firebase, Sobot), reconeix el perfilat algorítmic i la millora dels algoritmes, i descriu la baixa des de Perfil → Configuració.',
    }),
    s('dramabox-nowsecure', 'DramaBox – Stream Drama Shorts (iOS) — Mobile App Risk Checker', 'https://www.nowsecure.com/marc-app/dramabox-stream-drama-shorts-ios/', 'NowSecure', 'audit', 'independent', {
      language: 'en',
      summary: 'Anàlisi automatitzada del binari de l’aplicació per a iOS. Detecta l’ús de l’identificador publicitari (ADID) i de l’IDFV, el permís de rastreig, l’accés a càmera, micròfon i fototeca, connexions a servidors dels Estats Units, Irlanda, la Xina i Singapur, i l’absència del manifest de privadesa d’iOS i de les declaracions d’API, de dades recollides i de rastreig.',
    }),
    s('dramabox-wikipedia', 'DramaBox — Wikipedia', 'https://en.wikipedia.org/wiki/DramaBox', 'Wikipedia', 'other', 'secondary', {
      language: 'en',
      summary: 'Fitxa enciclopèdica amb les dades de propietat (StoryMatrix, filial de Dianzhong Technology, de Pequín), la data de llançament (abril del 2023), les xifres de descàrregues i d’usuaris i els ingressos. La fem servir només per a dades corporatives i de mida, no per a afirmacions de privadesa.',
    }),

    /* ── TP-Link Tapo ── */
    s('tp-link-tapo-app-store', 'TP-Link Tapo — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1472718009', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: no declara cap dada per rastrejar ni cap dada vinculada a la identitat. Tot el que recull —compres, dades de contacte, contingut de la persona usuària, identificadors, dades d’ús, diagnòstics i «altres dades»— hi consta com a no vinculat.',
    }),
    s('tp-link-tapo-privacy-policy', 'Tapo App Privacy Policy', 'https://privacy.tp-link.com/app/tapo/privacy', 'TP-Link Systems Inc.', 'privacy-policy', 'primary', {
      language: 'en',
      summary: 'Política específica de l’aplicació Tapo, actualitzada el 13 de desembre del 2024. Identifica el responsable segons el territori, nomena TP-Link Deutschland GmbH com a representant a la Unió Europea, descriu on es guarden els vídeos (locals a la càmera, i al núvol d’AWS només amb TapoCare), diu que el reconeixement facial es fa al dispositiu HomeBase i que les cares desconegudes s’esborren als 90 dies, enumera els tercers integrats i fixa una conservació general de set anys.',
    }),
    s('tp-link-privacy-policy-es', 'Política de privacidad de TP-Link (España)', 'https://privacy.tp-link.com/web/official/privacy-policy?region=ES', 'TP-Link España S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política general del web de TP-Link per a Espanya, del 2 d’agost del 2024. Identifica TP-Link España S.L. a Madrid, detalla les bases jurídiques i els drets, remet la baixa del TP-Link ID al portal account-delete.tplinkcloud.com i adverteix expressament que no cobreix els productes com els dispositius Tapo, que tenen política pròpia.',
    }),

    /* ── SmartThings ── */
    s('smartthings-app-store', 'SmartThings — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1222822904', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: no declara cap dada per rastrejar ni cap dada vinculada a la identitat. La ubicació, les dades de contacte, els identificadors, les dades d’ús i els diagnòstics hi consten com a no vinculats. La fitxa avisa que l’aplicació pot fer servir la ubicació encara que no estigui oberta.',
    }),
    s('smartthings-privacy-notice', 'SmartThings Privacy Notice', 'https://eula.samsungiotcloud.com/legal/us/en/pps.html', 'Samsung Electronics Co., Ltd.', 'privacy-policy', 'primary', {
      language: 'en',
      summary: 'Avís de privadesa específic de SmartThings, en la versió que enllaça la fitxa espanyola de l’App Store, amb data d’efecte del 21 de setembre del 2026. Descriu la recollida de la configuració de la llar, la ubicació per GPS, Bluetooth i wifi, les dades dels sensors, les rutines, les ordres de veu i el contingut d’àudio i vídeo dels dispositius connectats, i les dades de salut de la funció Family Care.',
    }),
    s('samsung-privacy-policy-es', 'Política de privacidad de Samsung (España)', 'https://www.samsung.com/es/info/privacy/', 'Samsung Electronics Co., Ltd.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política general de Samsung per a Espanya, actualitzada l’1 de febrer del 2024. Situa la responsabilitat a Samsung Electronics Co., Ltd., de Corea del Sud, amb Samsung Electronics (UK) Limited com a punt de contacte europeu, descriu les transferències a Corea, els Estats Units, el Regne Unit, la Xina, Singapur i l’Índia amb clàusules contractuals tipus, i remet l’exercici de drets al portal samsung.com/request-desk.',
    }),

    /* ── LG ThinQ ── */
    s('lg-thinq-app-store', 'LG ThinQ — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id993504342', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara identificadors com a dades per rastrejar i vincula a la identitat la ubicació, les dades de contacte, el contingut de la persona usuària, els identificadors, les dades d’ús i els diagnòstics. L’enllaç a la política de privadesa que hi dona el desenvolupador porta a la versió dels Estats Units en anglès.',
    }),
    s('lg-privacy-policy-es', 'Política de privacidad de LG Electronics España', 'https://www.lg.com/es/privacy/', 'LG Electronics España, S.A.U.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política espanyola actualitzada el 29 d’abril del 2026. Identifica LG Electronics España, S.A.U. com a responsable i LG Electronics Deutschland GmbH com a corresponsable per al perfilat, distingeix les dades del compte LG de les de l’aplicació ThinQ (dades dels aparells, hàbits d’ús, veu i configuració de les estances de la casa), detalla les bases jurídiques, les transferències a Corea del Sud i als Estats Units, i diu que en eliminar el compte la informació es conserva tres mesos abans de destruir-se.',
    }),

    /* ── Booksy ── */
    s('booksy-app-store', 'Booksy para clientes — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id723961236', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara identificadors com a dades per rastrejar i vincula a la identitat les compres, la ubicació, les dades de contacte, la llista de contactes, el contingut de la persona usuària i l’historial de cerca. Les dades d’ús hi consten com a no vinculades.',
    }),
    s('booksy-privacy-policy', 'Política de privacidad de Booksy', 'https://booksy.com/es-es/p/privacy', 'Booksy Iberia, S.L.U.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política espanyola actualitzada el 15 de juny del 2026. Identifica Booksy Iberia, S.L.U. com a responsable, amb telèfon, adreça postal i l’adreça lopd@booksy.com, publica una taula de finalitats amb la base jurídica i el termini de conservació de cadascuna, descriu el perfilat a partir de l’activitat, la geolocalització, el sexe i les fotos consultades, i afirma que les dades no se cedeixen fora de l’Espai Econòmic Europeu. També detalla els passos per eliminar el compte des de l’aplicació d’iOS.',
    }),

    /* ── Hinge ── */
    s('hinge-app-store', 'Hinge: App de Citas y Ligar — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id595287172', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara identificadors com a dades per rastrejar i vincula a la identitat les compres, la ubicació, les dades de contacte, el contingut de la persona usuària, els identificadors, les dades d’ús i, expressament, «dades sensibles». Els diagnòstics hi consten com a no vinculats.',
    }),
    s('hinge-privacy-policy', 'Hinge Privacy Policy (EEA)', 'https://hinge.co/privacy', 'MTCH Technology Services Limited', 'privacy-policy', 'primary', {
      language: 'en',
      summary: 'Política per a l’Espai Econòmic Europeu vigent des del 24 de novembre del 2025. Identifica MTCH Technology Services Limited, de Dublín, com a responsable; reconeix el tractament de dades d’orientació sexual, salut, origen ètnic i conviccions, i de geometria facial per a la verificació amb selfie; descriu la compartició amb la resta d’empreses de Match Group; i publica una taula de terminis de conservació després de tancar el compte.',
    }),
    s('hinge-delete-account', 'How do I delete my account? — Hinge Help Center', 'https://help.hinge.co/hc/en-us/articles/115004020968-How-do-I-delete-my-account', 'Match Group', 'support-doc', 'primary', {
      language: 'en',
      summary: 'Passos reals per tancar el compte des de l’aplicació i avís que desinstal·lar-la no l’elimina. També explica que cal cancel·lar per separat la subscripció de l’App Store i que, si es va contractar per Stripe, esborrar el compte la cancel·la immediatament i es perden els dies pagats.',
    }),
    s('hinge-privacy-requests', 'How can I make a Privacy Request? — Hinge Help Center', 'https://help.hinge.co/hc/en-us/articles/360004792234-How-can-I-make-a-Privacy-Request', 'Match Group', 'support-doc', 'primary', {
      language: 'en',
      summary: 'Descriu l’eina d’exportació de dades dins de l’aplicació («Download My Data»), que triga fins a 30 dies i deixa el fitxer disponible només 48 hores, i què cal fer si ja s’ha tancat el compte o si s’ha estat expulsat.',
    }),
    s('hinge-profiling', 'Automated Decision-Making and Profiling at Hinge', 'https://help.hinge.co/hc/en-us/articles/360010956733-Automated-Decision-Making-and-Profiling-at-Hinge', 'Match Group', 'support-doc', 'primary', {
      language: 'en',
      summary: 'Document que explica el perfilat: l’algoritme de recomanació fa servir l’edat, el gènere, la ubicació, les preferències, els «m’agrada» i els intercanvis de telèfon; el mateix sistema serveix per fer ofertes personalitzades i per suspendre comptes en les tasques de moderació.',
    }),

    /* ── PlayStation ── */
    s('playstation-app-store', 'PlayStation App — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id410896080', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: no declara cap dada utilitzada per rastrejar. Vincula a la identitat l’historial de compres, la informació financera, l’adreça, el correu i el telèfon, els missatges, les fotos i l’àudio, els identificadors d’usuari i de dispositiu, la interacció amb el producte i els diagnòstics.',
    }),
    s('playstation-privacy-policy', 'Política de privacidad de PlayStation (versión 9.3)', 'https://www.playstation.com/es-es/legal/privacy-policy/', 'Sony Interactive Entertainment Europe Limited', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política europea vigent des del març del 2026. Identifica Sony Interactive Entertainment Europe Limited com a responsable, dona l’adreça del delegat de protecció de dades, enumera les bases jurídiques, descriu la personalització d’anuncis i recomanacions, la compartició amb editors de jocs i socis publicitaris, i les transferències als Estats Units, el Regne Unit i el Japó amb clàusules contractuals tipus.',
    }),
    s('playstation-close-account', 'Cerrar tu cuenta de PlayStation Network', 'https://www.playstation.com/es-es/support/account/close-account-for-psn/', 'Sony Interactive Entertainment Europe Limited', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Pàgina d’ajuda que descriu la baixa autoservei des de l’aplicació PlayStation, el període de suspensió de 30 dies durant el qual es pot revertir i l’esborrat permanent de tot el contingut associat, inclosos els comptes de menors si ets l’administrador de la família.',
    }),
    s('playstation-2sv', 'Verificación en dos pasos y claves de acceso en PSN', 'https://www.playstation.com/es-es/support/account/2sv-psn-login/', 'Sony Interactive Entertainment Europe Limited', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Documentació del segon factor de PlayStation Network: aplicació d’autenticació, SMS i claus d’accés. És opcional i es pot activar o desactivar des de la configuració del compte.',
    }),
    s('playstation-psn-breach-2011', '2011 PlayStation Network outage — Wikipedia', 'https://en.wikipedia.org/wiki/2011_PlayStation_Network_outage', 'Wikipedia', 'other', 'secondary', {
      language: 'en',
      summary: 'Recull documentat de la intrusió d’abril del 2011 a PlayStation Network: 77 milions de comptes afectats, dades de contacte, dates de naixement i informació de targetes, i la multa de 250.000 lliures que l’autoritat britànica de protecció de dades va imposar a Sony el gener del 2013. La fem servir perquè no hem pogut recuperar la resolució original al web de l’ICO.',
    }),

    /* ── Hacoo ── */
    s('hacoo-app-store', 'Hacoo - Discovering &Inspiring — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1399907836', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara identificadors com a dades per rastrejar, identificadors i diagnòstics vinculats a la identitat i la ubicació aproximada sense vincular. La pàgina avisa que Hacoo Tech Limited no s’ha identificat com a comerciant de l’aplicació, cosa que afecta la protecció de les persones consumidores de l’Espai Econòmic Europeu.',
    }),
    s('hacoo-privacy-policy', 'Hacoo Privacy Policy', 'https://act.hacoo.app/privacy-policy02', 'Hacoo Tech Limited', 'privacy-policy', 'primary', {
      language: 'en',
      summary: 'Política actualitzada el 8 de juliol del 2025. Enumera dades de registre, de dispositiu (IP, MAC, Android ID) i d’ubicació, esmenta les bases jurídiques del RGPD, admet la publicitat de tercers i la compartició amb filials i xarxes publicitàries, i remet l’exclusió publicitària a networkadvertising.org. No dona adreça postal, ni representant a la UE, ni terminis de conservació, ni procediment de baixa.',
    }),
    s('hacoo-trust-center', 'Hacoo Trust Center', 'https://www.hacoo.app/en-US/trust-center', 'Hacoo Tech Limited', 'support-doc', 'primary', {
      language: 'en',
      summary: 'Pàgina de confiança i seguretat centrada en la moderació de continguts fraudulents, amb xifres de publicacions i comptes retirats el 2025 i una adreça a Dublín. No hi consten certificacions, auditories ni canal de vulnerabilitats.',
    }),
  ],
  apps: [
    {
      slug: 'filmaffinity',
      name: 'FilmAffinity',
      company: 'filmaffinity',
      categories: ['comunitats-i-forums', 'video-i-streaming'],
      tagline: 'Un diari de pel·lícules que es compromet a no cedir dades, amb una política de privadesa que no s’ha posat al dia',
      summary:
        'FilmAffinity recomana pel·lícules i sèries a partir de les votacions de les «ànimes bessones», les persones amb gustos més semblants. Afirma que les dades no surten mai dels seus servidors ni es cedeixen, i l’etiqueta de l’App Store no declara rastreig. El web, en canvi, fa servir galetes publicitàries, Google Analytics i Comscore. La política encara cita la llei espanyola del 1999 i no concreta bases jurídiques, terminis ni transferències. La baixa és autoservei i esborra el compte en unes dues setmanes.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'advertising',
      jurisdiction: 'Espanya (UE)',
      userBase: 'Més d’1,14 milions de persones registrades, segons el mateix servei.',
      links: {
        website: 'https://www.filmaffinity.com/',
        privacyPolicy: 'https://www.filmaffinity.com/es/private.php',
        appStore: 'https://apps.apple.com/es/app/id6759088601',
      },
      accountRequired: f('partial', 'official', ['filmaffinity-privacy-policy'], 'La base de dades es pot consultar sense compte; cal registrar-se per votar, fer llistes i rebre recomanacions.'),
      openSource: f('no', 'official', ['filmaffinity-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les votacions acumulades durant anys formen un historial detallat del que ha vist una persona i dels seus gustos, que pot deixar entreveure opinions polítiques o religioses. Les ànimes bessones veuen el nom, la ciutat, el país i les puntuacions, i les crítiques són sempre públiques.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['filmaffinity-app-store', 'filmaffinity-privacy-policy'], note: 'La política diu que el correu i l’edat no es mostren a ningú.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['filmaffinity-app-store'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['filmaffinity-privacy-policy'], note: 'Només l’any de naixement.' }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['filmaffinity-privacy-policy'], note: 'El nom és visible per a les ànimes bessones; les crítiques es poden signar amb un sobrenom.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['filmaffinity-privacy-policy'], note: 'Ciutat i país declarats per la persona usuària, visibles per a les ànimes bessones. No es tracta de geolocalització del dispositiu.' }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['filmaffinity-privacy-policy', 'filmaffinity-faq'], note: 'Les votacions de pel·lícules i sèries; les veuen les ànimes bessones i els amics.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['filmaffinity-app-store', 'filmaffinity-faq'], note: 'Crítiques i llistes. Les crítiques són permanents i públiques.' }),
        row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['filmaffinity-app-store'], note: 'Missatges interns entre persones usuàries, segons la descripció de l’app. L’etiqueta ho declara com a «altre contingut de l’usuari».' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['recomanacions-algoritmiques'], sources: ['filmaffinity-faq'], note: 'L’afinitat amb la resta de persones registrades es calcula comparant totes les puntuacions.', level: 'official' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['filmaffinity-cookies-policy'], note: 'Al web: galetes d’una agència de publicitat, Google Analytics, Comscore i connectors socials. L’etiqueta de l’app no declara rastreig.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['filmaffinity-app-store'], 'L’etiqueta de l’app no declara dades per rastrejar. Al web, en canvi, hi ha galetes publicitàries de tercers.'),
        advertisingIdentifiers: unknown('L’etiqueta no declara l’identificador del dispositiu; no hem pogut comprovar si l’app el llegeix.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['filmaffinity-cookies-policy'], 'Al web hi ha Google Analytics, Comscore, una agència de publicitat i connectors socials. No sabem quins SDK inclou l’app.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['filmaffinity-cookies-policy', 'filmaffinity-app-store'], 'La política de galetes del web descriu galetes publicitàries que adapten els anuncis; l’etiqueta de l’app no declara dades per a publicitat.'),
        profiling: f('yes', 'official', ['filmaffinity-faq', 'filmaffinity-privacy-policy'], 'Les recomanacions surten de comparar les puntuacions amb les de totes les persones registrades. També hi ha processos automatitzats que detecten comptes clònics i votacions anòmales.'),
        aiTraining: unknown('La política no en parla. L’avís del novembre del 2025 només diu que es fan servir eines per detectar crítiques escrites amb IA.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['filmaffinity-privacy-policy', 'filmaffinity-cookies-policy'], 'Diu que no cedeix ni ven dades personals, però al web hi ha galetes de tercers d’analítica, mesura d’audiències i publicitat.'),
        intraGroupSharing: na('Filmaffinity S.L. és una empresa independent sense grup empresarial.'),
        dataBrokerSales: f('no', 'official', ['filmaffinity-privacy-policy'], 'La política afirma que no ven ni cedeix dades personals sense autorització expressa.'),
        internationalTransfers: unknown('La política no parla de transferències internacionals, tot i que el web fa servir serveis nord-americans com Google Analytics.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: f('no', 'editorial', ['filmaffinity-privacy-policy'], 'No hem trobat cap informe de transparència ni cap referència a peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['filmaffinity-faq'], 'Només es concreta que el compte s’esborra unes dues setmanes després de la baixa. No hi ha terminis per a la resta de dades.'),
        dataAfterDeletion: f('no', 'official', ['filmaffinity-faq'], 'Segons les preguntes freqüents, no es conserva cap dada dels comptes donats de baixa.'),
        periods: [{ dataType: 'identificador-de-compte', period: 'Esborrat complet unes dues setmanes després de la baixa', sources: ['filmaffinity-faq'] }],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['filmaffinity-faq', 'filmaffinity-privacy-policy']),
        selfService: f('yes', 'official', ['filmaffinity-faq'], 'Des del perfil, a «Datos personales». No hem pogut comprovar si l’app té la mateixa opció.'),
        directUrl: 'https://www.filmaffinity.com/es/faq.php',
        difficulty: 'easy',
        waitingPeriodDays: 14,
        requiresSupportContact: false,
        steps: [
          'Si vols conservar les teves votacions, crítiques i llistes, descarrega-les abans des del perfil.',
          'Inicia sessió al web de FilmAffinity i obre el perfil.',
          'Ves a «Datos personales» i tria l’opció de donar-te de baixa.',
          'L’esborrat és irreversible i es completa unes dues setmanes després de la sol·licitud.',
        ],
        dataRetained: 'Segons FilmAffinity, cap: s’esborra tota la informació del compte.',
        sources: ['filmaffinity-faq', 'filmaffinity-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['filmaffinity-privacy-policy'], 'Des del perfil es poden descarregar les votacions, les crítiques i les llistes.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['filmaffinity-privacy-policy'], 'La política reconeix els drets, amb la terminologia de la LOPD del 1999, però no indica cap adreça ni cap canal específic; només hi ha el formulari de contacte general.', { url: 'https://www.filmaffinity.com/es/contact_us.php' }),
      },
      controls: {
        adPersonalizationOptOut: unknown('El web enllaça una «Configuración de privacidad», però no n’hem pogut veure el contingut.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['filmaffinity-faq'], 'Les llistes poden ser privades o només per als amics, i es pot triar si es vol ser trobat pel correu. Les votacions sempre són visibles per a les ànimes bessones i les crítiques sempre són públiques.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('La versió del 2024 de la política de galetes deia que navegar equivalia a acceptar-les; no sabem si el web actual ho manté.'),
      },
      security: {
        e2ee: unknown('L’app permet enviar missatges interns, però no consta si van xifrats d’extrem a extrem.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hem trobat security.txt; el web bloqueja les peticions automatitzades.'),
      },
      alternatives: [
        {
          app: 'letterboxd',
          comparability: 'partial',
          rationale: 'També serveix per portar un diari de pel·lícules, puntuar-les i seguir les crítiques d’altres persones.',
          tradeOffs: 'No té el sistema d’ànimes bessones ni la base de dades en castellà, i l’empresa és fora de la UE.',
        },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hi ha cap categoria de crítica o catàleg audiovisual: fem servir comunitats i vídeo, tot i que FilmAffinity no reprodueix contingut. L’app per a iOS es va publicar el setembre del 2026 i pesa només 3 MB; no sabem si és un embolcall del web. El web bloqueja les peticions automatitzades amb Cloudflare i hem llegit la política, la política de galetes i les preguntes freqüents a l’Internet Archive. No hem trobat cap resolució de l’AEPD ni cap filtració registrada a Have I Been Pwned.',
        openQuestions: [
          'Quins SDK de tercers inclou l’app i si hi mostra publicitat?',
          'L’app permet eliminar el compte o cal anar al web?',
          'Què inclou la «Configuración de privacidad» actual del web i quina és la política de galetes vigent el 2026?',
        ],
      },
    },
    {
      slug: 'webel',
      name: 'Webel',
      company: 'webelapp-technologies',
      categories: ['comerc-electronic', 'feina-i-ocupacio'],
      tagline: 'Un mercat de serveis a domicili que guarda l’adreça de casa i demana el DNI per exercir drets',
      summary:
        'Webel posa en contacte persones que necessiten serveis a domicili, com neteja, reparacions, bellesa o cura d’infants, amb professionals autònoms. Per funcionar necessita l’adreça on es fa el servei i, si ho permets, la ubicació en temps real. La política preveu comunicacions comercials de tercers com Facebook i Google, compartició amb proveïdors antifrau i filials, i un seguiment complet dels clics. L’etiqueta de l’App Store declara molt menys del que descriu la política, i per exercir drets cal enviar un escrit signat amb còpia del DNI.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya (UE)',
      userBase: 'Més de 2 milions de persones usuàries i uns 350.000 professionals, segons l’empresa.',
      links: {
        website: 'https://appwebel.com/',
        privacyPolicy: 'https://legal.appwebel.com/11135bf692b080058410fa6f63febd28',
        terms: 'https://legal.appwebel.com/11135bf692b08083a746d1fed2d73685',
        appStore: 'https://apps.apple.com/es/app/id1470056152',
      },
      accountRequired: f('yes', 'official', ['webel-privacy-policy', 'webel-terms'], 'Cal crear un compte amb nom, cognoms i correu per reservar.'),
      openSource: f('no', 'official', ['webel-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les reserves revelen on viu una persona, quan és a casa i quins serveis hi contracta, com la cura d’infants o de persones grans. Els professionals veuen l’adreça i entren al domicili, i la plataforma hi afegeix l’historial de navegació, la ubicació i les dades de pagament.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['webel-privacy-policy'], note: 'Es comparteix amb el professional contractat. L’etiqueta de l’App Store no ho declara.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['webel-privacy-policy'], note: 'També per a comunicacions comercials si s’hi dona el consentiment.' }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['webel-privacy-policy', 'webel-terms'] }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['webel-privacy-policy', 'webel-terms'] }),
        row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['webel-privacy-policy', 'webel-terms'], note: 'Voluntari al perfil, però obligatori en còpia per exercir els drets de protecció de dades.' }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['webel-privacy-policy'], note: 'L’adreça on es fa el servei. La política preveu fer-la servir per entregar mostres o fullets promocionals.' }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['webel-privacy-policy'], note: 'Ubicació en temps real, només si es dona permís.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['webel-privacy-policy'], note: 'La foto de perfil és obligatòria per als professionals.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['webel-privacy-policy'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['webel-privacy-policy'], note: 'Les processen MangoPay i Stripe.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['webel-privacy-policy'], note: 'Valoracions dels serveis.' }),
        row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['webel-terms', 'webel-privacy-policy'], note: 'La missatgeria amb professionals passa per filtres automatitzats; els missatges al suport es conserven per gestionar incidències.' }),
        row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['webel-privacy-policy'], note: 'La política parla del «clickstream» complet d’URL amb data i hora, de l’historial de navegació i de la font d’arribada.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['webel-app-store'], note: 'L’etiqueta declara «altres dades d’ús» per rastrejar.' }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['webel-privacy-policy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['webel-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['webel-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['webel-app-store'], 'L’etiqueta declara «altres dades d’ús» com a dades per rastrejar.'),
        advertisingIdentifiers: unknown('L’etiqueta no declara l’identificador del dispositiu. Els enllaços de baixada del web passen per Adjust, una eina de mesura de campanyes, però no hem pogut confirmar quin identificador fa servir l’app.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['webel-privacy-policy', 'webel-cookie-policy'], 'La política parla de tecnologia de tercers integrada per recollir dades i preferències, i la de galetes, de Google Analytics i de galetes de publicitat comportamental.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['webel-privacy-policy'], 'Personalitza la publicitat segons les preferències i preveu que es rebin comunicacions comercials de tercers com Facebook i Google.'),
        profiling: f('yes', 'official', ['webel-privacy-policy'], 'Fa servir sistemes de CRM per recollir preferències i analitzar el comportament de les persones usuàries.'),
        aiTraining: unknown('La política no en parla.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['webel-privacy-policy'], 'Professionals contractats, MangoPay i Stripe, centres d’atenció telefònica, proveïdors antifrau, plataformes d’enviament massiu de correus i, amb consentiment, socis comercials.'),
        intraGroupSharing: f('yes', 'official', ['webel-privacy-policy'], 'Les filials del grup poden accedir a les dades des de qualsevol territori per prestar el servei.'),
        dataBrokerSales: f('no', 'official', ['webel-privacy-policy'], 'La política diu que cap comunicació de dades inclourà vendre-les o llogar-les amb finalitats comercials.'),
        internationalTransfers: f('yes', 'official', ['webel-privacy-policy'], 'Les dades s’allotgen a AWS a Irlanda, però alguns proveïdors poden ser fora de l’EEE. La política no concreta el mecanisme de garantia.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: f('no', 'editorial', ['webel-privacy-policy'], 'No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['webel-privacy-policy'], 'Els terminis es lliguen a la durada del contracte, al termini de prescripció de les accions legals o a la retirada del consentiment, sense xifres concretes.'),
        dataAfterDeletion: f('partial', 'official', ['webel-privacy-policy'], 'Després de la supressió, les dades queden bloquejades a disposició de les autoritats, i es conserven dades anonimitzades per impedir que es torni a registrar qui hagi incomplert les normes.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['webel-terms', 'webel-privacy-policy']),
        selfService: f('partial', 'official', ['webel-terms'], 'Les condicions diuen que la baixa es fa «a través de l’aplicació», comunicant-ho pel formulari de contacte o per correu. No hem pogut comprovar si hi ha un botó per eliminar el compte.'),
        difficulty: 'medium',
        steps: [
          'Des de l’app, obre el formulari de contacte, o escriu a contact@appwebel.com des de l’adreça del compte.',
          'Demana la baixa del compte i, si vols que se suprimeixin les dades, exerceix també el dret de supressió.',
        ],
        obstacles: 'La baixa es gestiona per missatge. Per exercir els drets de protecció de dades, la política demana un escrit signat amb el domicili i una còpia del DNI.',
        dataRetained: 'Dades bloquejades durant el termini de prescripció de les accions legals i dades anonimitzades per impedir un nou registre en cas d’incompliment.',
        sources: ['webel-terms', 'webel-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['webel-privacy-policy'], 'Reconeix el dret a la portabilitat en format estructurat, però només per sol·licitud.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['webel-privacy-policy'], 'Per correu o a les oficines de Madrid, amb escrit signat i còpia del DNI.', { url: 'mailto:contact@appwebel.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['webel-privacy-policy'], 'Es pot cancel·lar la subscripció als correus i desactivar les notificacions; la publicitat de Facebook i Google depèn de la configuració d’aquestes plataformes.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['webel-privacy-policy'], 'La geolocalització i les comunicacions comercials depenen del consentiment, però els avisos push comercials i els operatius només es poden desactivar junts des del sistema.'),
        defaultPosture: 'permissive',
        darkPatterns: f('yes', 'official', ['webel-cookie-policy', 'webel-privacy-policy'], 'La política de galetes diu que continuar navegant equival a consentir-les, i la de privadesa presenta el fet de facilitar dades com un consentiment exprés al tractament per part de l’empresa i les filials.'),
        darkPatternList: [
          {
            type: 'unbalanced-consent',
            severity: 'medium',
            description: 'El web considera que seguir navegant és acceptar les galetes, incloses les de publicitat comportamental.',
            sources: ['webel-cookie-policy'],
          },
        ],
      },
      security: {
        e2ee: f('no', 'editorial', ['webel-terms'], 'Els missatges passen per sistemes automatitzats que en detecten el contingut, de manera que el servidor els pot llegir.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown('La política només parla de mesures de seguretat en termes generals.'),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hem trobat security.txt ni cap canal per comunicar vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hi ha cap categoria de serveis a domicili: la classifiquem com a comerç electrònic (reserves i pagament) i feina (els professionals s’hi anuncien). La política conté restes de redacció, com un comentari entre parèntesis que admet que la data de naixement, el mòbil i el DNI no s’havien esmentat abans. L’etiqueta de l’App Store no declara el nom, el correu, l’adreça, la ubicació ni el pagament, que la política sí que descriu. No hem trobat cap resolució de l’AEPD ni cap filtració registrada a Have I Been Pwned.',
        openQuestions: [
          'L’app té un botó per eliminar el compte o cal demanar-ho per correu?',
          'Quins proveïdors antifrau i quins SDK publicitaris fa servir l’app, i per a què es fan servir les dades d’ús que declara per rastrejar?',
        ],
      },
    },
    {
      slug: 'dramabox',
      name: 'DramaBox',
      company: 'storymatrix',
      categories: ['video-i-streaming'],
      tagline: 'Microdrames verticals amb identificadors publicitaris, perfilat algorítmic i una cadena de propietat que va de Singapur a Pequín',
      summary:
        'DramaBox serveix sèries verticals d’un o dos minuts que es desbloquegen amb monedes o amb una subscripció. L’etiqueta de l’App Store declara identificadors i dades d’ús per rastrejar, i la política reconeix els SDK d’AdMob, AppsFlyer i AppLovin Max i el perfilat algorítmic que decideix què et mostra. La societat responsable és de Singapur, però la matriu és xinesa, i una anàlisi independent del binari per a iOS hi troba a faltar el manifest de privadesa que Apple exigeix.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Singapur, amb representant a la UE',
      userBase: 'Més de 100 milions de descàrregues acumulades l’agost del 2025.',
      links: {
        website: 'https://www.dramaboxdb.com/',
        privacyPolicy: 'https://support.dramaboxdb.com/privacy.html',
        appStore: 'https://apps.apple.com/es/app/id6445905219',
      },
      accountRequired: f('partial', 'official', ['dramabox-privacy-policy'], 'Es pot mirar contingut sense registre, però cal un compte amb correu, telèfon o xarxa social per conservar les monedes, la subscripció i l’historial.'),
      openSource: f('no', 'official', ['dramabox-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'L’historial de visualització d’un catàleg organitzat per temes molt marcats —infidelitats, embarassos, venjances, milionaris— és una radiografia d’interessos íntims. DramaBox el creua amb l’identificador publicitari i amb la llista d’aplicacions instal·lades per alimentar recomanacions i campanyes.',
      dataCollection: [
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['dramabox-privacy-policy'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['dramabox-privacy-policy'], note: 'Amb el codi de verificació per SMS, que envia un proveïdor extern.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['dramabox-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['dramabox-app-store', 'dramabox-privacy-policy'], note: 'L’etiqueta el declara sota «publicitat de tercers»; l’anàlisi del binari hi troba l’IDFV.' }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['dramabox-privacy-policy', 'dramabox-nowsecure'], level: 'independent', note: 'L’IDFA consta a la política i l’anàlisi de NowSecure hi detecta l’ús de l’identificador publicitari i el permís de rastreig.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'compliment-legal'], sources: ['dramabox-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['publicitat-personalitzada'], sources: ['dramabox-nowsecure'], level: 'independent', note: 'L’anàlisi del binari hi detecta la recollida del codi postal. La política només parla de la ubicació derivada de l’adreça IP.' }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['recomanacions-algoritmiques', 'personalitzacio-de-continguts', 'elaboracio-de-perfils'], sources: ['dramabox-privacy-policy', 'dramabox-app-store'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'recomanacions-algoritmiques'], sources: ['dramabox-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['dramabox-app-store'], note: 'Monedes, episodis desbloquejats i subscripcions.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte', 'mesura-publicitaria'], sources: ['dramabox-app-store'] }),
        row('aplicacions-instal-lades', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['dramabox-privacy-policy'], note: 'La política diu que es llegeix amb consentiment.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['dramabox-privacy-policy'], note: 'Galetes i balises web, compartides amb els socis publicitaris.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['dramabox-app-store'] }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['elaboracio-de-perfils', 'recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['dramabox-privacy-policy'], note: 'La política parla d’«anàlisi algorítmica i creació de perfils d’usuari».' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['dramabox-app-store', 'dramabox-privacy-policy'], 'L’etiqueta declara identificadors i dades d’ús com a dades per rastrejar, i la política enumera socis publicitaris que reben identificadors i galetes.'),
        advertisingIdentifiers: f('yes', 'official', ['dramabox-privacy-policy', 'dramabox-nowsecure'], 'La política cita l’IDFA i l’anàlisi del binari hi detecta l’identificador publicitari i el permís de rastreig d’iOS.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['dramabox-privacy-policy'], 'AdMob, AppsFlyer, AppLovin Max, Sensors Data, Facebook, Firebase i Sobot.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['dramabox-privacy-policy'], 'La política inclou el màrqueting i la publicitat dirigida entre les finalitats i descriu la compartició d’identificadors amb els socis publicitaris.'),
        profiling: f('yes', 'official', ['dramabox-privacy-policy'], 'Reconeix l’anàlisi algorítmica i la creació de perfils per recomanar contingut a partir de l’historial de visualització i de les interaccions.'),
        aiTraining: f('partial', 'official', ['dramabox-privacy-policy'], 'La política diu que la informació serveix per entrenar i millorar els seus algoritmes, però no concreta si alimenta models d’intel·ligència artificial generativa.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['dramabox-privacy-policy'], 'Proveïdors d’analítica, d’SMS i d’atenció al client, xarxes socials en cas de registre federat, proveïdors d’SDK i autoritats.'),
        intraGroupSharing: f('unknown', 'unknown', ['dramabox-wikipedia'], 'StoryMatrix és una filial de Dianzhong Technology, amb seu a Pequín, però la política no diu quines dades arriben a la matriu ni amb quina garantia.'),
        dataBrokerSales: unknown('La política no parla de venda de dades a intermediaris; només adverteix que la compartició amb socis publicitaris es considera «venda» a efectes de la llei de Califòrnia.'),
        internationalTransfers: f('yes', 'official', ['dramabox-privacy-policy'], 'Els servidors principals són a Singapur. Per a l’Espai Econòmic Europeu s’invoquen decisions d’adequació, clàusules contractuals tipus i normes corporatives vinculants, sense dir quina s’aplica a cada cas.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['dramabox-privacy-policy'], 'La política diu que conserva les dades «fins a la terminació del compte» i el temps necessari per a les finalitats descrites, sense cap termini concret.'),
        dataAfterDeletion: f('partial', 'official', ['dramabox-privacy-policy'], 'Es preveu conservar informació quan calgui per complir obligacions legals, fer complir acords o resoldre disputes, sense dir quines dades ni durant quant de temps.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['dramabox-privacy-policy']),
        selfService: f('yes', 'official', ['dramabox-privacy-policy'], 'La política indica un camí dins de l’aplicació: Perfil → Configuració → Eliminació del compte.'),
        difficulty: 'medium',
        requiresSupportContact: false,
        steps: [
          'Cancel·la abans la subscripció des dels ajustos de l’App Store, perquè eliminar el compte no atura la renovació automàtica.',
          'Obre l’aplicació i ves a Perfil i després a Configuració.',
          'Tria «Eliminació del compte» i confirma la sol·licitud.',
          'Si no trobes l’opció, escriu a DPO@dramabox.com invocant el dret de supressió de l’article 17 del RGPD.',
        ],
        obstacles:
          'Les monedes comprades i els episodis desbloquejats es perden amb el compte, i la política no diu en quant de temps es completa l’esborrat.',
        dataRetained: 'Informació necessària per a obligacions legals, per fer complir els acords o per resoldre disputes.',
        sources: ['dramabox-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['dramabox-privacy-policy'], 'Es reconeix el dret de portabilitat, però no hi ha cap eina d’autoservei: cal demanar-ho al canal de protecció de dades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['dramabox-privacy-policy'], 'Representant a la Unió Europea amb adreça de contacte pròpia.', { url: 'mailto:DPO@dramabox.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['dramabox-privacy-policy'], 'Depèn sobretot del permís de rastreig d’iOS i de la configuració de cada xarxa publicitària; l’aplicació no ofereix un interruptor propi documentat.'),
        telemetryOptOut: unknown('La política no descriu cap manera de desactivar l’analítica d’ús.'),
        granularControls: unknown('No hem trobat documentació d’un panell de privadesa amb controls per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'independent', ['dramabox-nowsecure'], 'L’anàlisi independent del binari constata que l’aplicació no declara el manifest de privadesa d’iOS ni els tipus de dades recollides, de manera que el que el sistema mostra a la persona usuària no reflecteix el que fa l’aplicació.'),
        darkPatternList: [
          {
            type: 'confusing-language',
            severity: 'medium',
            description:
              'Falten el manifest de privadesa d’iOS, la declaració d’API accedides, la de dades recollides i la de rastreig, que són justament els avisos que el sistema ensenya abans d’instal·lar.',
            sources: ['dramabox-nowsecure'],
          },
        ],
      },
      security: {
        e2ee: na('El servei distribueix contingut audiovisual i no transporta comunicacions privades.'),
        transportEncryption: f('yes', 'official', ['dramabox-privacy-policy'], 'La política diu que xifra la transmissió.'),
        atRestEncryption: f('partial', 'official', ['dramabox-privacy-policy'], 'Parla d’emmagatzematge segur classificat per nivells i de control d’accés, però no confirma que les dades estiguin xifrades en repòs.'),
        mfa: unknown('No consta cap segon factor per al compte de DramaBox.'),
        independentAudits: unknown('No consten auditories de seguretat encarregades per l’empresa. L’anàlisi de NowSecure és automatitzada i no la va encarregar StoryMatrix.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hem trobat security.txt ni cap canal per comunicar vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La cadena de propietat és rellevant: la responsable del tractament és de Singapur, però la matriu, Dianzhong Technology, és de Pequín, i la política no diu quines dades hi arriben. Les crítiques públiques de l’aplicació es concentren en el model de monedes i en les subscripcions setmanals cares, però no hem trobat cap resolució d’autoritat que ho hagi examinat, i per això no ho recollim com a patró fosc documentat. No hem trobat cap sanció del RGPD ni cap filtració registrada.',
        openQuestions: [
          'Quines dades es transfereixen a la matriu xinesa i sota quina garantia?',
          'En quant de temps s’esborra el compte després de demanar-ne l’eliminació?',
          'Ha corregit l’aplicació el manifest de privadesa d’iOS que hi troba a faltar l’anàlisi independent?',
        ],
      },
    },
    {
      slug: 'tp-link-tapo',
      name: 'TP-Link Tapo',
      company: 'tp-link-systems',
      categories: ['llar-connectada'],
      tagline: 'Càmeres i endolls connectats que guarden el vídeo a la càmera per defecte i una etiqueta d’App Store sense cap dada vinculada a la identitat',
      summary:
        'Tapo controla càmeres, endolls, bombetes i sensors de TP-Link. L’etiqueta de l’App Store és de les poques del lot que no declara ni rastreig ni cap dada vinculada a la identitat. La política pròpia de l’aplicació explica que els vídeos es guarden a la targeta de la càmera i que només pugen al núvol d’Amazon si es contracta TapoCare, i que el reconeixement de cares es fa dins del HomeBase, sense sortir de casa. A canvi, fixa una conservació general de set anys i la responsabilitat es reparteix entre societats dels Estats Units i de Singapur.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Singapur per a les persones usuàries de fora dels Estats Units, amb representant a Alemanya',
      userBase: 'No n’hem verificat cap xifra oficial.',
      links: {
        website: 'https://www.tapo.com/',
        privacyPolicy: 'https://privacy.tp-link.com/app/tapo/privacy',
        appStore: 'https://apps.apple.com/es/app/id1472718009',
      },
      accountRequired: f('yes', 'official', ['tp-link-tapo-privacy-policy'], 'Cal un TP-Link ID amb correu i contrasenya per vincular els dispositius.'),
      openSource: f('no', 'official', ['tp-link-tapo-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Una càmera i uns quants endolls connectats expliquen quan hi ha algú a casa, a quina hora es lleva, quan marxa i qui hi entra. Tapo hi afegeix la configuració de la xarxa wifi, l’IMEI del telèfon i, si s’activa la geolocalització per a les accions automàtiques, la posició exacta del mòbil.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['tp-link-tapo-privacy-policy'], note: 'És el TP-Link ID. L’etiqueta de l’App Store declara les dades de contacte com a no vinculades a la identitat, cosa difícil de conciliar amb un compte.' }),
        row('numero-de-telefon', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['tp-link-tapo-privacy-policy'] }),
        row('fotografies-i-videos', 'yes', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tp-link-tapo-privacy-policy'], note: 'Les gravacions es guarden a la càmera; només pugen a Amazon Web Services si es contracta TapoCare.' }),
        row('veu-i-audio', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['tp-link-tapo-privacy-policy'], note: 'Les trucades de veu en directe entre la càmera i l’aplicació.' }),
        row('dades-biometriques', 'optional', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['tp-link-tapo-privacy-policy'], note: 'El reconeixement de cares es processa al dispositiu HomeBase i les cares desconegudes s’esborren automàticament al cap de 90 dies.' }),
        row('ubicacio-precisa', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['tp-link-tapo-privacy-policy'], note: 'Latitud i longitud per a les accions automàtiques per geolocalització.' }),
        row('xarxa-i-connectivitat', 'yes', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['tp-link-tapo-privacy-policy'], note: 'Adreça MAC, adreça IP, credencials i configuració de la xarxa wifi de casa.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['tp-link-tapo-app-store', 'tp-link-tapo-privacy-policy'], note: 'La política esmenta fins i tot l’IMEI del telèfon.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['tp-link-tapo-app-store', 'tp-link-tapo-privacy-policy'] }),
        row('historial-de-compres', 'optional', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tp-link-tapo-app-store'], note: 'Subscripcions TapoCare, cobrades per l’App Store, Google Play, Stripe o PayPal.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['tp-link-tapo-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['tp-link-tapo-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar-te.'),
        advertisingIdentifiers: f('no', 'official', ['tp-link-tapo-app-store'], 'No consta cap identificador publicitari a l’etiqueta.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['tp-link-tapo-privacy-policy'], 'Hi ha serveis de tercers integrats —Amazon Web Services, Google Firebase, Google Assistant, Alexa, Stripe i PayPal—, però amb finalitats de servei i no publicitàries.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['tp-link-tapo-privacy-policy'], 'El màrqueting hi consta com a finalitat sotmesa a consentiment, però la política no descriu publicitat comportamental dins de l’aplicació.'),
        profiling: unknown('La política de l’aplicació no descriu cap elaboració de perfils.'),
        aiTraining: unknown('La política no diu si les gravacions o les deteccions serveixen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['tp-link-tapo-privacy-policy'], 'Amazon Web Services per a l’emmagatzematge al núvol, Google Firebase, els assistents de veu de Google i Amazon si es vinculen, les passarel·les de pagament i OhmConnect per a les estadístiques d’energia.'),
        intraGroupSharing: f('yes', 'official', ['tp-link-tapo-privacy-policy'], 'La responsabilitat es reparteix entre TP-Link Systems Inc., als Estats Units, i TP-LINK CORPORATION PTE. LTD., a Singapur, amb representant a Alemanya.'),
        dataBrokerSales: f('no', 'official', ['tp-link-tapo-privacy-policy'], 'La política afirma que no facilitarà dades personals a tercers sense consentiment clar.'),
        internationalTransfers: f('yes', 'official', ['tp-link-tapo-privacy-policy'], 'Servidors potencialment a Singapur i als Estats Units. S’invoca la decisió d’adequació quan n’hi ha i, si no, les garanties de l’article 46.2 del RGPD, sense concretar quina.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['tp-link-tapo-privacy-policy'], 'Hi ha dos terminis concrets —set anys des del final de la relació amb caràcter general i 90 dies per a les cares desconegudes del reconeixement facial—, però no per a la resta de categories.'),
        dataAfterDeletion: f('partial', 'official', ['tp-link-privacy-policy-es'], 'La política avisa que eliminar el compte no afecta les dades que hagin recollit els socis per activar els productes.'),
        periods: [
          { dataType: 'dades-biometriques', period: '90 dies per a les cares no reconegudes, al dispositiu HomeBase', sources: ['tp-link-tapo-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['tp-link-tapo-privacy-policy', 'tp-link-privacy-policy-es']),
        selfService: f('yes', 'official', ['tp-link-privacy-policy-es'], 'Hi ha un portal específic d’eliminació de comptes, account-delete.tplinkcloud.com, al marge de l’aplicació.'),
        directUrl: 'https://account-delete.tplinkcloud.com/',
        difficulty: 'medium',
        requiresSupportContact: false,
        steps: [
          'Descarrega les gravacions que vulguis conservar: esborrar el compte no les recupera.',
          'Cancel·la la subscripció de TapoCare allà on la paguis (App Store, Google Play, Stripe o PayPal).',
          'Entra a https://account-delete.tplinkcloud.com/ amb el teu TP-Link ID.',
          'Verifica la identitat i confirma l’eliminació. També pots demanar-la a privacy@tp-link.com.',
        ],
        obstacles:
          'El portal d’eliminació és fora de l’aplicació i de la pàgina del compte, i la política no diu en quant de temps s’executa. A més, avisa que no afecta les dades que hagin recollit els socis per activar els productes.',
        dataRetained: 'Dades que la llei obligui a conservar i dades en mans dels socis que activen els productes.',
        sources: ['tp-link-tapo-privacy-policy', 'tp-link-privacy-policy-es'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['tp-link-privacy-policy-es'], 'El dret de portabilitat es reconeix i s’exerceix per correu; no hi ha eina d’autoservei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['tp-link-privacy-policy-es', 'tp-link-tapo-privacy-policy'], 'Adreces de privadesa específiques, dret de recurs si es denega la sol·licitud i menció expressa de l’Agència Espanyola de Protecció de Dades.', {
          url: 'mailto:privacy@tp-link.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['tp-link-privacy-policy-es'], 'El màrqueting depèn del consentiment i hi ha enllaços de baixa als correus, però no un control dins de l’aplicació.'),
        telemetryOptOut: unknown('La política no descriu cap manera de desactivar l’enviament d’estadístiques d’ús.'),
        granularControls: f('partial', 'official', ['tp-link-tapo-privacy-policy'], 'Es pot decidir si s’activa l’emmagatzematge al núvol, la geolocalització i la vinculació amb els assistents de veu, i el reconeixement facial es queda al dispositiu.'),
        defaultPosture: 'protective',
        darkPatterns: unknown('No hem revisat el flux d’alta ni el de consentiment dins de l’aplicació.'),
      },
      security: {
        e2ee: f('no', 'official', ['tp-link-tapo-privacy-policy'], 'La política parla de xifratge i de SSL, però no reivindica cap xifratge d’extrem a extrem per al vídeo emmagatzemat al núvol.'),
        transportEncryption: f('yes', 'official', ['tp-link-tapo-privacy-policy'], 'Xifratge i tecnologia SSL segons la política.'),
        atRestEncryption: unknown('No es concreta si les gravacions desades a Amazon Web Services estan xifrades en repòs ni amb quines claus.'),
        mfa: f('yes', 'official', ['tp-link-privacy-policy-es'], 'La política esmenta la verificació en dos passos com a opció disponible per al TP-Link ID.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('No hem pogut verificar si TP-Link manté un programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hem pogut verificar el canal oficial de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'És un cas de bones decisions de disseny mal explicades: guardar el vídeo a la càmera i fer el reconeixement de cares al HomeBase són opcions que deixen les imatges a casa, però la política no ho presenta com una garantia ni diu res del xifratge de les gravacions que sí que pugen al núvol. El contrast més cridaner és que l’etiqueta de l’App Store declara el correu i les dades de contacte com a no vinculades a la identitat quan el servei funciona amb un compte. La política general del web adverteix expressament que no cobreix els productes Tapo, de manera que cal llegir dos documents diferents. No hem pogut completar la cerca d’incidents.',
        openQuestions: [
          'Les gravacions desades a TapoCare estan xifrades en repòs i qui en té les claus?',
          'En quant de temps s’executa l’eliminació del compte des del portal?',
          'Hi ha un canal públic de comunicació de vulnerabilitats per als dispositius Tapo?',
        ],
      },
    },
    {
      slug: 'smartthings',
      name: 'SmartThings',
      company: 'samsung-electronics',
      categories: ['llar-connectada'],
      tagline: 'El plànol de casa teva a Corea del Sud, amb una etiqueta d’App Store que no vincula res a la identitat',
      summary:
        'SmartThings connecta electrodomèstics, sensors, llums i càmeres, també de marques que no són Samsung. L’avís de privadesa reconeix que recull la configuració de la llar, la ubicació per GPS, Bluetooth i wifi, les dades dels sensors, les rutines, les ordres de veu i, amb la funció Family Care, dades de son i de medicació. L’etiqueta de l’App Store, en canvi, no declara cap dada vinculada a la identitat. El responsable és la matriu coreana i l’avís que enllaça la fitxa espanyola és la versió dels Estats Units.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Corea del Sud, amb punt de contacte europeu al Regne Unit',
      userBase: 'No n’hem verificat cap xifra oficial.',
      links: {
        website: 'https://www.samsung.com/es/smartthings/app/',
        privacyPolicy: 'https://www.samsung.com/es/info/privacy/',
        appStore: 'https://apps.apple.com/es/app/id1222822904',
      },
      accountRequired: f('yes', 'official', ['smartthings-privacy-notice'], 'Cal un compte Samsung per vincular els dispositius i les rutines.'),
      openSource: f('no', 'official', ['smartthings-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La configuració d’una llar connectada és un plànol de l’habitatge amb horaris: quines estances hi ha, quan s’hi encén el llum, quan s’obre la porta, quan s’engega el forn i quan no hi ha ningú. Amb les rutines i els sensors de presència, SmartThings sap quan la casa és buida.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['samsung-privacy-policy-es', 'smartthings-app-store'], note: 'Ve del compte Samsung. L’etiqueta declara les dades de contacte com a no vinculades a la identitat.' }),
        row('adreca-electronica', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['samsung-privacy-policy-es'] }),
        row('adreca-postal', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['smartthings-privacy-notice'], note: 'La ubicació de la llar és necessària per a les rutines i la meteorologia.' }),
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['smartthings-privacy-notice', 'smartthings-app-store'], note: 'Per GPS, Bluetooth i wifi. La fitxa de l’App Store avisa que l’aplicació pot fer servir la ubicació encara que no estigui oberta.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'millora-del-producte'], sources: ['smartthings-privacy-notice'], note: 'Historial d’ús dels aparells, informació dels sensors i rutines configurades.' }),
        row('veu-i-audio', 'optional', { linked: 'unknown', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['smartthings-privacy-notice', 'samsung-privacy-policy-es'], note: 'Ordres de veu i contingut d’àudio dels dispositius connectats.' }),
        row('fotografies-i-videos', 'optional', { linked: 'unknown', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['smartthings-privacy-notice'], note: 'Contingut de les càmeres i altres dispositius de gravació vinculats.' }),
        row('dades-de-salut', 'optional', { linked: 'unknown', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['smartthings-privacy-notice'], note: 'La funció Family Care tracta informació de son i horaris de medicació.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['smartthings-app-store', 'samsung-privacy-policy-es'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['samsung-privacy-policy-es'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['smartthings-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['smartthings-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar-te.'),
        advertisingIdentifiers: f('no', 'official', ['smartthings-app-store'], 'No consta cap identificador publicitari a l’etiqueta.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['samsung-privacy-policy-es'], 'La política general de Samsung esmenta serveis d’analítica com Google Analytics, però no en publica la llista per a SmartThings.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['smartthings-privacy-notice'], 'Cal un consentiment separat perquè les dades del compte Samsung millorin la publicitat personalitzada en altres serveis de la marca; no és el funcionament per defecte.'),
        profiling: f('partial', 'official', ['smartthings-privacy-notice'], 'L’avís parla d’informació generada o inferida a partir de l’ús del servei i de personalització, sense descriure decisions automatitzades.'),
        aiTraining: unknown('L’avís no diu si les ordres de veu o les dades dels sensors serveixen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['smartthings-privacy-notice', 'samsung-privacy-policy-es'], 'Filials, socis comercials, proveïdors de servei i autoritats.'),
        intraGroupSharing: f('yes', 'official', ['smartthings-privacy-notice'], 'Samsung Electronics Co., Ltd. i les seves filials.'),
        dataBrokerSales: unknown('Els documents no parlen de venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['samsung-privacy-policy-es'], 'Transferències a Corea del Sud, els Estats Units, el Regne Unit, la Xina, Singapur i l’Índia, emparades en clàusules contractuals tipus.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència de SmartThings sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['smartthings-privacy-notice', 'samsung-privacy-policy-es'], 'Els dos documents es limiten a dir que no conserven la informació més enllà del que calgui, sense cap termini.'),
        dataAfterDeletion: unknown('Els documents consultats no expliquen què es conserva després de tancar el compte Samsung.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['smartthings-privacy-notice', 'samsung-privacy-policy-es'], 'Es reconeix el dret de supressió i l’avís de SmartThings preveu sol·licitar l’eliminació de les dades.'),
        selfService: unknown('No hem pogut verificar si el compte Samsung es pot tancar sense passar pel portal de sol·licituds.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Exporta o anota les rutines i les automatitzacions que vulguis conservar: es perden amb el compte.',
          'Entra al portal de sol·licituds de Samsung, a samsung.com/request-desk, amb el compte que vols tancar.',
          'Demana la supressió de les dades i el tancament del compte Samsung.',
          'Si no reps resposta en un mes, pots reclamar davant de l’Agència Espanyola de Protecció de Dades.',
        ],
        obstacles:
          'El compte Samsung és el mateix que fa servir el telèfon, el televisor i els electrodomèstics: tancar-lo per deixar SmartThings té conseqüències molt més àmplies.',
        sources: ['samsung-privacy-policy-es', 'smartthings-privacy-notice'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['samsung-privacy-policy-es'], 'El dret de portabilitat es reconeix i s’exerceix pel portal de sol·licituds; no n’hem verificat cap eina d’autoservei.', {
          url: 'https://www.samsung.com/request-desk',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['samsung-privacy-policy-es'], 'Portal de sol·licituds de la persona interessada i telèfon d’atenció.', {
          url: 'https://www.samsung.com/request-desk',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['smartthings-privacy-notice'], 'La publicitat personalitzada amb les dades del compte Samsung requereix un consentiment separat que es pot no donar o retirar.'),
        telemetryOptOut: unknown('No hem verificat si es pot desactivar l’enviament de dades d’ús dels dispositius.'),
        granularControls: unknown('No hem pogut revisar el panell de privadesa de l’aplicació.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem revisat el flux de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('El servei controla dispositius domèstics i no transporta comunicacions privades entre persones.'),
        transportEncryption: unknown('Els documents consultats no detallen els protocols de transport.'),
        atRestEncryption: unknown('No consta informació pública específica sobre el xifratge en repòs.'),
        mfa: unknown('No hem verificat quins segons factors admet el compte Samsung.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('No hem pogut verificar el programa de recompenses de Samsung ni si cobreix SmartThings.'),
        vulnerabilityDisclosure: unknown('No hem pogut verificar el canal oficial de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La troballa documentada és que la fitxa espanyola de l’App Store enllaça la versió dels Estats Units de l’avís de privadesa de SmartThings, i no una d’europea: qui el llegeix des d’Espanya no troba ni les bases jurídiques ni els terminis del RGPD. La fitxa queda en estat inicial per això i perquè no hem pogut verificar ni el procediment real de tancament del compte Samsung ni els controls de privadesa de l’aplicació. Cal notar el contrast entre una etiqueta que no vincula res a la identitat i un avís que reconeix dades de son i de medicació de la funció Family Care.',
        openQuestions: [
          'Hi ha una versió europea de l’avís de privadesa de SmartThings i per què no és la que enllaça l’App Store espanyol?',
          'Es pot tancar el compte Samsung sense passar pel portal de sol·licituds i quins terminis hi ha?',
          'Quins segons factors admet el compte Samsung i quin programa de vulnerabilitats cobreix SmartThings?',
        ],
      },
    },
    {
      slug: 'lg-thinq',
      name: 'LG ThinQ',
      company: 'lg-electronics-espana',
      categories: ['llar-connectada'],
      tagline: 'L’única aplicació de llar connectada del lot que declara rastreig, amb una política espanyola detallada i un enllaç de l’App Store a la versió dels Estats Units',
      summary:
        'ThinQ connecta els electrodomèstics de LG: rentadora, forn, aire condicionat, televisor i aspiradora. És l’única de les tres aplicacions de llar connectada d’aquest lot que declara identificadors utilitzats per rastrejar, i vincula a la identitat la ubicació, el contingut i les dades d’ús. La política espanyola és detallada i situa la responsabilitat a LG Electronics España, amb la filial alemanya com a corresponsable per al perfilat, però l’enllaç que dona l’App Store porta a la versió nord-americana.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Espanya (UE), amb transferències a Corea del Sud',
      userBase: 'No n’hem verificat cap xifra oficial.',
      links: {
        website: 'https://www.lg.com/es/',
        privacyPolicy: 'https://www.lg.com/es/privacy/',
        appStore: 'https://apps.apple.com/es/app/id993504342',
      },
      accountRequired: f('yes', 'official', ['lg-privacy-policy-es'], 'Cal un compte LG per registrar els aparells i controlar-los des del mòbil.'),
      openSource: f('no', 'official', ['lg-thinq-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Els electrodomèstics expliquen la vida domèstica amb molta precisió: a quina hora es posa la rentadora, quantes vegades s’obre la nevera, quan s’engega l’aire condicionat i quan la casa és buida. LG ho combina amb la configuració de les estances declarada a l’aplicació i amb la informació de veu.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['lg-privacy-policy-es', 'lg-thinq-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['lg-privacy-policy-es'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['lg-privacy-policy-es'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['lg-privacy-policy-es'], note: 'Necessària per a la garantia i el servei tècnic.' }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['lg-privacy-policy-es'] }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['lg-thinq-app-store'], note: 'L’etiqueta declara la ubicació vinculada a la identitat i la fitxa avisa que l’aplicació la pot fer servir amb l’aplicació tancada.' }),
        row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['lg-privacy-policy-es'], note: 'La política inclou expressament la informació de veu entre el que recull ThinQ.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte', 'elaboracio-de-perfils'], sources: ['lg-privacy-policy-es', 'lg-thinq-app-store'], note: 'Dades dels aparells, hàbits d’ús i configuració de les estances de la casa creades per la persona usuària.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['lg-thinq-app-store', 'lg-privacy-policy-es'], note: 'L’etiqueta declara identificadors com a dades utilitzades per rastrejar-te.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['lg-thinq-app-store'], note: 'L’etiqueta declara contingut de la persona usuària vinculat a la identitat.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['lg-privacy-policy-es'], note: 'El perfilat per a recomanacions personalitzades es fa amb consentiment i LG España i LG Deutschland hi són corresponsables.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['lg-thinq-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['lg-thinq-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['lg-thinq-app-store'], 'Identificadors declarats sota «dades utilitzades per rastrejar-te».'),
        thirdPartyTrackersPresent: f('yes', 'official', ['lg-privacy-policy-es'], 'La política preveu la compartició amb socis publicitaris i plataformes de xarxes socials.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['lg-privacy-policy-es'], 'Comunicacions comercials i publicitat personalitzada per diversos canals, sempre sotmeses a consentiment.'),
        profiling: f('yes', 'official', ['lg-privacy-policy-es'], 'Perfilat per a recomanacions personalitzades amb consentiment, amb LG España i LG Electronics Deutschland GmbH com a corresponsables.'),
        aiTraining: unknown('La política no diu si les dades dels aparells o la veu serveixen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['lg-privacy-policy-es'], 'Proveïdors informàtics, d’atenció al client i de logística, distribuïdors autoritzats, socis publicitaris, plataformes socials i autoritats.'),
        intraGroupSharing: f('yes', 'official', ['lg-privacy-policy-es'], 'Amb les entitats i filials del grup LG, incloses la matriu coreana i la filial alemanya.'),
        dataBrokerSales: unknown('La política no parla de venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['lg-privacy-policy-es'], 'Transferències a Corea del Sud i als Estats Units, emparades en la decisió d’adequació de Corea i en clàusules contractuals tipus.', { mechanism: 'adequacy' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència de LG sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['lg-privacy-policy-es'], 'Hi ha un termini concret per a l’eliminació del compte —tres mesos—, però la resta es fixa com «el temps necessari» o el que exigeixi la llei.'),
        dataAfterDeletion: f('yes', 'official', ['lg-privacy-policy-es'], 'En eliminar completament el compte LG, la informació es conserva tres mesos i després es destrueix, llevat del que exigeixi la llei.'),
        periods: [
          { dataType: 'identificador-de-compte', period: '3 mesos després d’eliminar el compte LG, i després es destrueix', sources: ['lg-privacy-policy-es'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['lg-privacy-policy-es']),
        selfService: unknown('La política parla d’eliminar completament el compte LG, però no hem pogut verificar si hi ha un botó dins de l’aplicació o cal passar pel portal de privadesa.'),
        difficulty: 'unknown',
        waitingPeriodDays: 90,
        requiresSupportContact: false,
        steps: [
          'Desvincula els electrodomèstics de l’aplicació ThinQ abans de tancar el compte.',
          'Entra a privacy.lg.com o escriu a lgees.legal@lge.com per demanar l’eliminació completa del compte LG.',
          'La informació es conserva tres mesos i després es destrueix, llevat del que la llei obligui a guardar.',
        ],
        obstacles:
          'El compte LG dona accés a tots els aparells de la marca, també al televisor, de manera que tancar-lo afecta molt més que ThinQ.',
        dataRetained: 'Dades que la llei obligui a conservar, més els tres mesos de retenció generals.',
        sources: ['lg-privacy-policy-es'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['lg-privacy-policy-es'], 'El dret de portabilitat es reconeix i s’exerceix per sol·licitud; no n’hem verificat cap eina d’autoservei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['lg-privacy-policy-es'], 'Portal de privadesa i adreça de contacte de la filial espanyola.', {
          url: 'https://privacy.lg.com/',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['lg-privacy-policy-es'], 'Tant el màrqueting com el perfilat per a recomanacions es basen en el consentiment i es poden retirar.'),
        telemetryOptOut: unknown('La política no descriu cap manera de desactivar la recollida de dades d’ús dels aparells.'),
        granularControls: f('partial', 'official', ['lg-privacy-policy-es'], 'Els consentiments de màrqueting i de perfilat són separats dels tractaments necessaris per al servei.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem revisat el flux de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('El servei controla electrodomèstics i no transporta comunicacions privades entre persones.'),
        transportEncryption: unknown('La política no detalla els protocols de transport.'),
        atRestEncryption: unknown('La política només parla de mesures tècniques en termes generals.'),
        mfa: unknown('No hem verificat quins segons factors admet el compte LG.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('No hem pogut verificar si LG manté un programa de recompenses que cobreixi ThinQ.'),
        vulnerabilityDisclosure: unknown('No hem pogut verificar el canal oficial de comunicació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'smartthings',
          comparability: 'partial',
          rationale: 'És l’altra gran plataforma de llar connectada d’un fabricant coreà i, a diferència de ThinQ, no declara cap dada utilitzada per rastrejar a l’App Store.',
          tradeOffs: 'Només controla els aparells compatibles, el responsable és la matriu coreana i l’avís de privadesa que enllaça l’App Store espanyol és el dels Estats Units.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'Val la pena comparar les tres aplicacions de llar connectada d’aquest lot: Tapo i SmartThings no declaren cap dada per rastrejar i ThinQ sí, tot i que la política espanyola de LG és la més detallada de les tres i és l’única que dona un termini concret de destrucció després de tancar el compte. L’enllaç de política de privadesa que el desenvolupador dona a la fitxa espanyola de l’App Store porta a la versió dels Estats Units en anglès, cosa que hem verificat al codi de la pàgina. No hem pogut completar la cerca d’incidents.',
        openQuestions: [
          'Es pot eliminar el compte LG des de l’aplicació ThinQ o cal passar pel portal de privadesa?',
          'Per què l’App Store espanyol enllaça la política dels Estats Units si LG Electronics España és la responsable?',
          'Quin tractament rep la informació de veu que recull ThinQ i quant de temps es conserva?',
        ],
      },
    },
    {
      slug: 'booksy',
      name: 'Booksy',
      company: 'booksy-iberia',
      categories: ['benestar-i-activitat-fisica', 'comerc-electronic'],
      tagline: 'Reserves de perruqueria amb una política espanyola exemplar en el paper i una etiqueta d’App Store que declara rastreig i accés als contactes',
      summary:
        'Booksy serveix per reservar hora a perruqueries, barberies i centres d’estètica. La política espanyola és de les més ben fetes del lot: identifica Booksy Iberia com a responsable, publica una taula amb la finalitat, la base jurídica i el termini de conservació de cada tractament, i afirma que les dades no se cedeixen fora de l’Espai Econòmic Europeu. L’etiqueta de l’App Store, en canvi, declara identificadors utilitzats per rastrejar i l’accés a la llista de contactes, cosa que la política no explica. La baixa és autoservei des de l’aplicació.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya (UE)',
      userBase: 'No n’hem verificat cap xifra oficial de comptes a Espanya.',
      links: {
        website: 'https://booksy.com/es-es/',
        privacyPolicy: 'https://booksy.com/es-es/p/privacy',
        terms: 'https://booksy.com/es-es/p/terms',
        appStore: 'https://apps.apple.com/es/app/id723961236',
      },
      accountRequired: f('yes', 'official', ['booksy-privacy-policy'], 'Cal donar nom, cognom, correu i telèfon per reservar.'),
      openSource: f('no', 'official', ['booksy-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'L’historial de reserves diu quan vas a la perruqueria, a quin barri, amb qui i quant hi gastes. Sumat al sexe, a la data de naixement i a la geolocalització —que la política reconeix que fa servir per agrupar perfils—, dibuixa una rutina personal molt regular i fàcil de predir.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['booksy-privacy-policy', 'booksy-app-store'], note: 'El negoci reservat rep les dades de la persona que hi va.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['booksy-privacy-policy'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['booksy-privacy-policy'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['booksy-privacy-policy'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['booksy-privacy-policy'] }),
        row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['elaboracio-de-perfils'], sources: ['booksy-privacy-policy'], note: 'La política l’inclou expressament entre els criteris amb què agrupa perfils.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['booksy-privacy-policy', 'booksy-app-store'], note: 'Foto de perfil; els negocis hi pengen el catàleg de treballs.' }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['booksy-app-store'], note: 'L’etiqueta de l’App Store declara l’accés als contactes vinculat a la identitat. La política no n’explica la finalitat.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['booksy-privacy-policy', 'booksy-app-store'], note: 'Serveix per trobar negocis propers i, segons la política, també per agrupar perfils.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['booksy-app-store', 'booksy-privacy-policy'], note: 'Les reserves i els pagaments fets a través de l’aplicació.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['booksy-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['booksy-privacy-policy'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['booksy-app-store'], note: 'L’etiqueta declara identificadors com a dades utilitzades per rastrejar-te.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte', 'elaboracio-de-perfils'], sources: ['booksy-app-store', 'booksy-privacy-policy'], note: 'La política esmenta les hores d’ús i l’última activitat registrada com a criteris de perfilat.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['booksy-privacy-policy'], note: 'Galetes pròpies i de tercers, amb Google Analytics i Facebook citats a la política.' }),
        row('dades-de-salut', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['booksy-privacy-policy'], note: 'La política afirma que no tracta categories especials de dades, tot i que alguns serveis reservables (depilació, estètica) hi poden fregar.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['booksy-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar-te en aplicacions i webs d’altres empreses, cosa que la política no explica.'),
        advertisingIdentifiers: f('yes', 'official', ['booksy-app-store'], 'Identificadors declarats sota «dades utilitzades per rastrejar-te».'),
        thirdPartyTrackersPresent: f('yes', 'official', ['booksy-privacy-policy'], 'La política de galetes esmenta Google Analytics i Facebook.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['booksy-privacy-policy'], 'Hi ha màrqueting directe i indirecte basat en l’interès legítim, però la política afirma que Booksy «no utilitza pràctiques invasives de creació de perfils i seguiment» amb finalitats publicitàries. L’etiqueta de l’App Store declara rastreig, i això no encaixa.'),
        profiling: f('yes', 'official', ['booksy-privacy-policy'], 'Perfilat i agrupació a partir de l’activitat al web i a l’aplicació, la geolocalització, el sexe, les hores d’ús, l’última activitat i l’anàlisi de les fotos consultades, sota interès legítim.'),
        aiTraining: unknown('La política no parla d’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['booksy-privacy-policy'], 'Els negocis reservats, proveïdors de comptabilitat, informàtica, màrqueting, anàlisi, serveis jurídics i recobrament, i autoritats.'),
        intraGroupSharing: f('yes', 'official', ['booksy-privacy-policy'], 'Amb les empreses del grup de capital de Booksy, sense concretar quines.'),
        dataBrokerSales: unknown('La política no parla de venda de dades ni la descarta expressament.'),
        internationalTransfers: f('no', 'official', ['booksy-privacy-policy'], 'La política afirma que les dades no se cediran a entitats amb seu fora de l’Espai Econòmic Europeu.', { mechanism: 'none' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['booksy-privacy-policy'], 'La política publica una taula amb el termini de cada finalitat, però els terminis s’expressen per esdeveniment (fi del contracte, revocació, prescripció d’accions) i no en xifres.'),
        dataAfterDeletion: f('partial', 'official', ['booksy-privacy-policy'], 'Es conserven les dades necessàries per defensar-se de reclamacions fins que prescriguin i les que exigeixen les obligacions legals.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['booksy-privacy-policy']),
        selfService: f('yes', 'official', ['booksy-privacy-policy'], 'La política descriu el camí dins de l’aplicació d’iOS; per al web, remet a una sol·licitud per correu.'),
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Obre l’aplicació de Booksy i ves a la pestanya «Perfil».',
          'Entra a «Configuración» i després a «App de Booksy».',
          'Tria «Eliminar cuenta» i confirma amb «Sí, enviar solicitud».',
          'Si ho fas des del web, envia la sol·licitud a lopd@booksy.com.',
        ],
        obstacles:
          'Des del web no hi ha botó: cal escriure un correu. Les cites ja fetes i les dades de facturació es conserven fins que prescriguin les possibles reclamacions.',
        dataRetained: 'Dades necessàries per a obligacions legals i comptables i per a la defensa de reclamacions.',
        sources: ['booksy-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['booksy-privacy-policy'], 'El dret de portabilitat es reconeix i s’exerceix per correu o telèfon; no hi ha cap eina d’autoservei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['booksy-privacy-policy'], 'Canal específic de protecció de dades amb adreça electrònica, telèfon gratuït, formulari i adreça postal a Madrid, i menció expressa del dret a reclamar davant de l’Agència Espanyola de Protecció de Dades.', {
          url: 'mailto:lopd@booksy.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['booksy-privacy-policy'], 'Els consentiments de màrqueting i comunicació es gestionen a l’apartat «La teva privadesa» del perfil, però el perfilat es fa per interès legítim i només s’hi pot fer oposició.'),
        telemetryOptOut: f('no', 'official', ['booksy-privacy-policy'], 'Les galetes analítiques només es poden bloquejar des del navegador; no hi ha cap control dins de l’aplicació.'),
        granularControls: f('partial', 'official', ['booksy-privacy-policy'], 'Hi ha consentiments separats per a les comunicacions, però no un panell que permeti aturar el perfilat.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'official', ['booksy-privacy-policy'], 'La política diu que en fer servir el sistema s’accepten les galetes, un plantejament que el RGPD i la normativa de comunicacions electròniques no admeten per a les galetes no necessàries.'),
        darkPatternList: [
          {
            type: 'unbalanced-consent',
            severity: 'medium',
            description: 'El consentiment de galetes es dona per atorgat pel simple ús del servei, i l’única sortida que s’ofereix és configurar el navegador.',
            sources: ['booksy-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: f('no', 'editorial', ['booksy-privacy-policy'], 'La plataforma transporta missatges entre clients i negocis i la política no en reivindica cap xifratge d’extrem a extrem.'),
        transportEncryption: f('yes', 'official', ['booksy-privacy-policy'], 'La política diu que les sessions de registre i d’autorització van xifrades.'),
        atRestEncryption: f('partial', 'official', ['booksy-privacy-policy'], 'Només es concreta que les contrasenyes es guarden amb algoritmes de xifratge unidireccional; de la resta de dades no en diu res.'),
        mfa: unknown('No consta cap segon factor per al compte de client.'),
        independentAudits: unknown('El centre de confiança del web no publica certificacions ni auditories llegibles.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hem trobat security.txt ni cap canal públic per comunicar vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'No hi ha cap categoria de bellesa o de reserva de cites: la classifiquem com a benestar (el servei que es reserva) i comerç electrònic (el pagament i la comissió). La fitxa és útil precisament pel contrast entre una política espanyola detallada, amb taula de bases jurídiques i terminis, i una etiqueta de l’App Store que declara rastreig publicitari i accés als contactes sense que la política ho expliqui. No hem pogut completar la cerca d’incidents.',
        openQuestions: [
          'Per què l’aplicació demana la llista de contactes i amb qui es comparteix?',
          'Com es concilia l’afirmació que no fa seguiment invasiu amb els identificadors declarats per rastrejar a l’App Store?',
          'Hi ha cap actuació de l’AEPD o cap filtració documentada que afecti Booksy?',
        ],
      },
    },
    {
      slug: 'hinge',
      name: 'Hinge',
      company: 'mtch-technology-services',
      categories: ['cites'],
      tagline: 'Cites amb dades sensibles declarades a l’App Store, geometria facial i una taula de conservació que arriba als deu anys',
      summary:
        'Hinge és l’aplicació de cites de Match Group pensada per «esborrar-se»: el perfil demana respostes obertes i l’algoritme decideix a qui et mostra. La política europea reconeix que el perfil pot contenir orientació sexual, salut, origen ètnic i creences, i que la verificació amb selfie tracta geometria facial. A canvi, és de les poques del lot que publica una taula de terminis concrets de conservació després de tancar el compte, i l’eliminació és autoservei des de l’aplicació.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Irlanda (UE)',
      userBase: 'No n’hem verificat cap xifra oficial de comptes a Espanya.',
      links: {
        website: 'https://hinge.co/',
        privacyPolicy: 'https://hinge.co/privacy',
        appStore: 'https://apps.apple.com/es/app/id595287172',
      },
      accountRequired: f('yes', 'official', ['hinge-privacy-policy'], 'Cal registrar-se amb telèfon o correu i crear un perfil per veure res.'),
      openSource: f('no', 'official', ['hinge-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Un perfil de Hinge és una declaració voluntària de qui t’atrau, què creus i com vius, i l’aplicació hi suma la ubicació, les converses i el rastre de qui t’agrada i qui descartes. És l’expedient més sensible que es pot entregar a una empresa privada, i l’etiqueta de l’App Store ho reconeix amb la categoria «dades sensibles».',
      dataCollection: [
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['hinge-privacy-policy', 'hinge-app-store'] }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['hinge-privacy-policy'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['hinge-privacy-policy', 'hinge-profiling'], note: 'L’edat alimenta l’algoritme de recomanació.' }),
        row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['hinge-profiling'] }),
        row('orientacio-sexual', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['hinge-privacy-policy'], note: 'La política adverteix que en completar el perfil es poden aportar dades d’orientació sexual i de vida sexual, categories especials de l’article 9 del RGPD.' }),
        row('conviccions-i-opinions', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['hinge-privacy-policy'], note: 'Creences religioses i afiliació política declarades al perfil.' }),
        row('origen-etnic-o-nacionalitat', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['hinge-privacy-policy'] }),
        row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['hinge-privacy-policy'], note: 'La política la inclou entre les dades sensibles que es poden aportar al perfil.' }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['hinge-privacy-policy'], note: 'Geometria facial de la verificació amb selfie, que segons la política s’esborra al cap de 30 dies llevat d’obligació legal.' }),
        row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['hinge-privacy-policy'] }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['hinge-privacy-policy', 'hinge-app-store'] }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['hinge-privacy-policy'] }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['hinge-privacy-policy', 'hinge-app-store'], note: 'Amb consentiment; és un dels criteris de l’algoritme de recomanació.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['hinge-app-store'], note: 'Subscripcions Hinge+ i HingeX.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['elaboracio-de-perfils', 'recomanacions-algoritmiques', 'mesura-i-analisi-dus'], sources: ['hinge-profiling', 'hinge-app-store'], note: 'Qui t’agrada, qui descartes i amb qui intercanvies el telèfon alimenten directament l’algoritme.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['hinge-app-store', 'hinge-privacy-policy'] }),
        row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'compartir-dins-del-grup'], sources: ['hinge-privacy-policy'], note: 'La política preveu recomanacions creuades i visibilitat a altres plataformes de Match Group.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['hinge-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['hinge-app-store', 'hinge-privacy-policy'], 'L’etiqueta declara identificadors per rastrejar i la política descriu la compartició amb socis publicitaris i la creació d’audiències semblants.'),
        advertisingIdentifiers: f('yes', 'official', ['hinge-app-store'], 'Identificadors declarats sota «dades utilitzades per rastrejar-te».'),
        thirdPartyTrackersPresent: f('yes', 'official', ['hinge-privacy-policy'], 'Proveïdors d’allotjament, analítica, atenció al client i publicitat.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['hinge-privacy-policy'], 'Comparteix informació amb socis publicitaris per millorar la rellevància dels anuncis i transforma les dades en identificadors per construir audiències semblants. L’exclusió es fa des de «Your Privacy Choices».'),
        profiling: f('yes', 'official', ['hinge-profiling'], 'L’algoritme de recomanació és perfilat declarat, i el mateix sistema automatitzat pot suspendre o tancar comptes en tasques de moderació.'),
        aiTraining: f('partial', 'official', ['hinge-privacy-policy'], 'La política parla d’aprenentatge automàtic per desenvolupar i millorar funcions, però no concreta si les dades alimenten models generatius.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['hinge-privacy-policy'], 'Proveïdors de servei, socis publicitaris i autoritats.'),
        intraGroupSharing: f('yes', 'official', ['hinge-privacy-policy'], 'Amb la resta d’empreses de Match Group, per seguretat, operacions compartides, recomanacions creuades i visibilitat a altres plataformes del grup.'),
        dataBrokerSales: unknown('La política no parla de venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['hinge-privacy-policy'], 'Transferències fora de l’Espai Econòmic Europeu emparades en clàusules contractuals tipus, amb còpia disponible a petició.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència específic de Hinge sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['hinge-privacy-policy'], 'La política publica una taula de terminis per a després de tancar el compte, cosa poc habitual.'),
        dataAfterDeletion: f('yes', 'official', ['hinge-privacy-policy'], 'Es conserven dades transaccionals durant deu anys per obligacions fiscals, els consentiments i les converses amb atenció al client durant cinc, l’historial de comptes i subscripcions durant tres, els registres de trànsit un any i la geometria facial trenta dies. Hi ha a més una finestra de seguretat de tres mesos a dos anys per a investigacions.'),
        periods: [
          { dataType: 'dades-biometriques', period: '30 dies després de la verificació, llevat d’obligació legal', sources: ['hinge-privacy-policy'] },
          { dataType: 'historial-de-compres', period: '10 anys, per obligacions fiscals', sources: ['hinge-privacy-policy'] },
          { dataType: 'adreca-ip', period: '1 any per als registres de trànsit', sources: ['hinge-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['hinge-delete-account']),
        selfService: f('yes', 'official', ['hinge-delete-account'], 'Botó «Delete Account» al final dels ajustos del compte, dins de l’aplicació.'),
        directUrl: 'https://help.hinge.co/hc/en-us/articles/115004020968-How-do-I-delete-my-account',
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Si tens una subscripció Hinge+ o HingeX contractada per l’App Store, cancel·la-la abans des dels ajustos d’Apple: esborrar el compte no l’atura.',
          'Descarrega’t les dades abans, si les vols: un cop tancat el compte ja no pots fer servir l’eina de l’aplicació.',
          'Obre l’aplicació i toca la icona de la teva foto, a la dreta de la barra de navegació.',
          'Entra als ajustos del compte amb la icona de l’engranatge.',
          'Baixa fins al final i toca «Delete Account», i confirma.',
        ],
        obstacles:
          'Desinstal·lar l’aplicació no tanca el compte. Si la subscripció es va pagar per Stripe, esborrar el compte la cancel·la a l’instant i es perden els dies ja pagats.',
        dataRetained: 'Dades transaccionals deu anys, historial de comptes tres anys, consentiments i atenció al client cinc anys, i una finestra de seguretat de fins a dos anys.',
        sources: ['hinge-delete-account', 'hinge-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['hinge-privacy-requests'], 'Eina «Download My Data» dins de l’aplicació. L’exportació pot trigar fins a 30 dies i el fitxer només està disponible 48 hores; si es deixa passar, cal tornar a demanar-la.', {
          url: 'https://help.hinge.co/hc/en-us/articles/360004792234-How-can-I-make-a-Privacy-Request',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['hinge-privacy-policy', 'hinge-privacy-requests'], 'Delegat de protecció de dades a Dublín i formulari de sol·licituds de privadesa al centre d’ajuda.', {
          url: 'https://help.hinge.co/hc/en-us/articles/19577664626195-How-do-I-contact-Hinge-s-Data-Protection-Officer',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['hinge-privacy-policy'], 'Apartat «Your Privacy Choices» als ajustos i al peu del web per excloure’s de la publicitat dirigida.'),
        telemetryOptOut: unknown('La política no descriu cap manera de desactivar l’analítica d’ús.'),
        granularControls: f('partial', 'official', ['hinge-privacy-policy', 'hinge-profiling'], 'Es pot retirar el consentiment de la ubicació i filtrar qui et veu des dels ajustos de descobriment, però el perfilat de l’algoritme no es pot desactivar: la mateixa empresa diu que sense ell el servei no funcionaria.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem revisat el flux d’alta ni el de cancel·lació de la subscripció dins de l’aplicació.'),
      },
      security: {
        e2ee: f('no', 'official', ['hinge-privacy-policy'], 'Els xats es conserven i es moderen, de manera que el servidor hi té accés.'),
        transportEncryption: unknown('La política no detalla els protocols de transport.'),
        atRestEncryption: unknown('No consta informació pública específica sobre el xifratge en repòs.'),
        mfa: unknown('L’accés habitual és amb un codi d’un sol ús al telèfon; no consta un segon factor addicional.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('No hem pogut verificar si Match Group manté un programa de recompenses que cobreixi Hinge.'),
        vulnerabilityDisclosure: unknown('No hem trobat security.txt ni cap canal públic per comunicar vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'tinder',
          comparability: 'equivalent',
          rationale: 'És l’aplicació de cites més utilitzada i pertany al mateix grup, de manera que el marc de tractament és molt semblant.',
          tradeOffs: 'Ser del mateix grup vol dir que canviar-hi no treu les dades de Match Group, i Tinder no publica una taula de terminis tan detallada.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'Hinge mereix dues anotacions oposades. En positiu, la taula de terminis de conservació i el document públic sobre perfilat i decisions automatitzades són de les millors pràctiques de tot el lot. En negatiu, l’etiqueta de l’App Store és l’única del lot que declara «dades sensibles» vinculades a la identitat, i el perfil convida a aportar-ne de l’article 9 del RGPD sense que es pugui fer servir el servei sense perfilat. No hem pogut completar la cerca d’incidents; les actuacions conegudes contra Match Group s’han documentat a la fitxa de Tinder de la primera onada.',
        openQuestions: [
          'Quina base jurídica concreta empara el tractament de les dades d’orientació sexual del perfil, més enllà del consentiment implícit en publicar-les?',
          'Quin proveïdor fa la verificació amb selfie i on es tracta la geometria facial?',
          'Cobreix cap programa de recompenses de Match Group l’aplicació de Hinge?',
        ],
      },
    },
    {
      slug: 'playstation-app',
      name: 'PlayStation App',
      company: 'sony-interactive-entertainment-europe',
      categories: ['comunitats-i-forums', 'comerc-electronic'],
      tagline: 'El comandament a distància del compte de PlayStation: sense rastreig declarat, però amb missatges, veu i pagaments lligats a la identitat',
      summary:
        'L’aplicació de PlayStation gestiona el compte de PlayStation Network des del mòbil: xat amb amics, missatges de veu, compres a la botiga i control remot de la consola. L’etiqueta de l’App Store no declara cap dada per rastrejar, cosa poc habitual en aquest lot, però sí que vincula a la identitat els missatges, l’àudio, les fotos i les dades financeres. La baixa és autoservei des de la mateixa aplicació, amb trenta dies per fer-se enrere, i el compte admet claus d’accés. El grup arrossega una de les filtracions més grans de la història de la xarxa.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Regne Unit, per a les persones usuàries europees',
      userBase: 'Complement de PlayStation Network, una de les xarxes de joc més grans del món; no n’hem verificat cap xifra oficial de comptes actius.',
      links: {
        website: 'https://www.playstation.com/',
        privacyPolicy: 'https://www.playstation.com/es-es/legal/privacy-policy/',
        appStore: 'https://apps.apple.com/es/app/id410896080',
      },
      accountRequired: f('yes', 'official', ['playstation-privacy-policy'], 'L’aplicació és un complement del compte de PlayStation Network: sense compte no fa res.'),
      openSource: f('no', 'official', ['playstation-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El compte de PlayStation Network acumula anys d’historial de joc, trofeus, compres i converses amb amics. Creuat amb les dades de facturació i amb els missatges de veu, descriu amb qui et relaciones, a quines hores, quant gastes i què t’agrada.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['playstation-app-store', 'playstation-privacy-policy'], note: 'L’etiqueta el classifica com a dada no vinculada a la identitat, tot i que el compte en demana el nom real per a la facturació.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['playstation-app-store', 'playstation-privacy-policy'], note: 'És l’identificador d’inici de sessió.' }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['playstation-app-store', 'playstation-2sv'], note: 'Per rebre els codis del segon factor per SMS.' }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['playstation-app-store', 'playstation-privacy-policy'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal'], sources: ['playstation-privacy-policy'], note: 'Determina el règim de comptes de menors i el control parental.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['playstation-app-store', 'playstation-privacy-policy'], note: 'Es comparteix amb entitats financeres i proveïdors antifrau.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['playstation-app-store', 'playstation-privacy-policy'], note: 'Els editors de jocs en reben informació segons la política.' }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['playstation-app-store'], note: 'L’etiqueta declara «correus electrònics o missatges de text» vinculats a la identitat.' }),
        row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['playstation-app-store'], note: 'Els missatges de veu i el xat de grup. La moderació de la veu a les partides és una funció documentada de la consola.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['playstation-app-store'], note: 'Captures i clips compartits des de la consola.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['playstation-app-store'], note: 'L’identificador en línia és públic per als altres jugadors.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['playstation-app-store', 'playstation-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'millora-del-producte'], sources: ['playstation-app-store', 'playstation-privacy-policy'], note: 'Inclou l’historial de joc i els trofeus, que la política esmenta expressament.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['playstation-privacy-policy'], note: 'La política inclou dades d’ubicació entre les que recull; determinen la botiga i els continguts disponibles.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['playstation-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['playstation-app-store'] }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['elaboracio-de-perfils', 'recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['playstation-privacy-policy'], note: 'La política reconeix que combina informació per personalitzar recomanacions de compra i anuncis, també en plataformes de tercers.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['playstation-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar-te. La política, en canvi, preveu anuncis personalitzats en plataformes de tercers a partir de dades pròpies.'),
        advertisingIdentifiers: unknown('L’etiqueta no declara l’identificador publicitari i la política no concreta si l’aplicació el llegeix.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['playstation-privacy-policy'], 'La política esmenta socis publicitaris i promocionals i la gestió de galetes, però no publica la llista de proveïdors incrustats a l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['playstation-privacy-policy'], 'Es fa amb consentiment i es pot revocar des dels controls de «contingut i màrqueting personalitzats» del compte.', {
          optOutUrl: 'https://www.playstation.com/es-es/legal/privacy-policy/',
        }),
        profiling: f('yes', 'official', ['playstation-privacy-policy'], 'La política diu que combina la informació per personalitzar l’experiència, les recomanacions de compra i els anuncis.'),
        aiTraining: unknown('La política no diu si les dades s’utilitzen per entrenar models d’intel·ligència artificial.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['playstation-privacy-policy'], 'Editors de jocs, entitats financeres, proveïdors antifrau, socis publicitaris, altres jugadors i autoritats.'),
        intraGroupSharing: f('yes', 'official', ['playstation-privacy-policy'], 'Amb altres societats del grup Sony, segons la política quan cal per garantir la seguretat dels serveis.'),
        dataBrokerSales: f('partial', 'official', ['playstation-privacy-policy'], 'La política afirma que no accepta ni acceptarà diners a canvi de compartir adreces IP, però no descarta expressament altres cessions remunerades.'),
        internationalTransfers: f('yes', 'official', ['playstation-privacy-policy'], 'Transferències als Estats Units, el Regne Unit i el Japó amb clàusules contractuals tipus, i un avís explícit que els tribunals i els cossos de seguretat d’aquests països hi poden tenir accés.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència de PlayStation Network sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['playstation-privacy-policy'], 'La política diu que conserva les dades «el temps que sigui necessari» per a les finalitats descrites, sense terminis per categoria.'),
        dataAfterDeletion: f('partial', 'official', ['playstation-privacy-policy', 'playstation-close-account'], 'Tancar el compte esborra permanentment el contingut associat, però la política preveu conservar informació per motius legals, comptables, de còpia de seguretat, antifrau i de comunitat.'),
        periods: [
          { dataType: 'identificador-de-compte', period: 'Suspensió reversible de 30 dies abans de l’esborrat definitiu', sources: ['playstation-close-account'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['playstation-close-account']),
        selfService: f('yes', 'official', ['playstation-close-account'], 'Des de la mateixa aplicació de PlayStation, a Ajustos, amb l’opció «Tanca el teu compte».'),
        directUrl: 'https://www.playstation.com/es-es/support/account/close-account-for-psn/',
        difficulty: 'easy',
        waitingPeriodDays: 30,
        requiresSupportContact: false,
        steps: [
          'Gasta el saldo del moneder i cancel·la les subscripcions actives abans de començar: tancar el compte t’hi fa perdre l’accés.',
          'Obre l’aplicació de PlayStation i inicia la sessió amb el compte que vols tancar.',
          'Ves a Ajustos, a la part inferior, i tria «Tanca el teu compte».',
          'Segueix les instruccions i confirma la sol·licitud.',
          'El compte queda suspès 30 dies; si canvies d’opinió, has de demanar-ne la reactivació a atenció al client abans que s’acabi el termini.',
        ],
        obstacles:
          'Es perd l’accés a tots els jocs i continguts comprats i al saldo del moneder. Si ets l’administrador d’una família, tancar el teu compte tanca també els comptes dels menors associats.',
        dataRetained: 'Informació necessària per a obligacions legals i comptables, còpies de seguretat, prevenció del frau i gestió de la comunitat.',
        sources: ['playstation-close-account', 'playstation-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['playstation-privacy-policy'], 'El dret d’accés i de portabilitat s’exerceix pel formulari de sol·licituds de la persona interessada.', {
          url: 'https://www.playstation.com/data-subject-request',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['playstation-privacy-policy'], 'Formulari específic i delegat de protecció de dades amb adreça pròpia.', {
          url: 'https://www.playstation.com/data-subject-request',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['playstation-privacy-policy'], 'Hi ha interruptors separats per a «contingut i màrqueting personalitzats», comunicacions personalitzades i gestió de galetes als ajustos del compte.'),
        telemetryOptOut: f('partial', 'official', ['playstation-privacy-policy'], 'La configuració permet triar entre una recollida de dades limitada i una de completa, però no desactivar-la del tot.'),
        granularControls: f('yes', 'official', ['playstation-privacy-policy'], 'Els ajustos de privadesa cobreixen el contingut compartit, la visibilitat del perfil, les xarxes socials i el màrqueting per separat.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem revisat el flux de consentiment de l’aplicació ni el de la consola.'),
      },
      security: {
        e2ee: f('no', 'editorial', ['playstation-privacy-policy'], 'Els missatges i la veu es moderen i es conserven segons la política, de manera que el servidor hi té accés.'),
        transportEncryption: unknown('La política parla de mesures de seguretat en general i no detalla els protocols de transport.'),
        atRestEncryption: unknown('No consta informació pública específica sobre el xifratge en repòs.'),
        mfa: f('yes', 'official', ['playstation-2sv'], 'Verificació en dos passos amb aplicació d’autenticació o SMS, i claus d’accés com a alternativa a la contrasenya. És opcional.', {
          methods: ['totp', 'sms', 'passkey'],
        }),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('Sony manté un programa de recompenses de PlayStation a HackerOne, però no n’hem pogut llegir la pàgina per documentar-ne l’abast i les condicions.'),
        vulnerabilityDisclosure: unknown('No hem pogut verificar el canal oficial de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hi ha cap categoria de videojocs a la taxonomia: classifiquem l’aplicació com a comunitat (el xat, els amics i els trofeus) i comerç electrònic (la botiga de PlayStation). El contrast més interessant és que l’etiqueta de l’App Store no declara cap dada per rastrejar mentre la política sí que preveu anuncis personalitzats en plataformes de tercers. Cal recordar que el responsable és una societat britànica: després del Brexit, les dades de les persones usuàries espanyoles surten de la Unió a l’empara de la decisió d’adequació del Regne Unit, i la mateixa política remet les queixes al regulador local o a l’autoritat britànica.',
        openQuestions: [
          'Quin abast té el programa de recompenses de PlayStation a HackerOne i cobreix l’aplicació mòbil?',
          'Publica Sony Interactive Entertainment algun informe de peticions d’autoritats?',
          'Quant de temps es conserven els missatges i els fragments de veu moderats?',
        ],
      },
    },
    {
      slug: 'hacoo',
      name: 'Hacoo',
      company: 'hacoo-tech',
      categories: ['comerc-electronic'],
      tagline: 'Una botiga de preus molt baixos amb una política de privadesa que no diu qui és el responsable ni des d’on tracta les dades',
      summary:
        'Hacoo ven productes molt barats amb mecàniques socials de descompte i recomanació. La seva política de privadesa és curta i genèrica: no dona adreça postal, ni representant a la Unió Europea, ni terminis de conservació, ni cap procediment per eliminar el compte, i remet l’exclusió de la publicitat a una pàgina del sector publicitari nord-americà. L’App Store hi afegeix un avís poc habitual: l’empresa no s’ha identificat com a comerciant, cosa que redueix la protecció de les persones consumidores europees.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'No declarada a la política',
      userBase: 'Desconegut: l’empresa no en publica xifres.',
      links: {
        website: 'https://www.hacoo.app/',
        privacyPolicy: 'https://act.hacoo.app/privacy-policy02',
        appStore: 'https://apps.apple.com/es/app/id1399907836',
      },
      accountRequired: f('yes', 'official', ['hacoo-privacy-policy'], 'Per comprar cal registrar-se amb nom, correu, telèfon i data de naixement, o bé amb una xarxa social.'),
      openSource: f('no', 'official', ['hacoo-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'L’historial de compres i de navegació d’una botiga generalista descriu la talla, la llar, les aficions i la capacitat de despesa de qui hi compra. Hacoo hi suma identificadors persistents del dispositiu —IP, adreça MAC, Android ID— i la ubicació aproximada, i els declara com a dades per rastrejar.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['hacoo-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['hacoo-privacy-policy'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['hacoo-privacy-policy'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['hacoo-privacy-policy'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['hacoo-privacy-policy'], note: 'Necessària per enviar les comandes; la política no diu amb quins transportistes es comparteix.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['hacoo-privacy-policy'], note: 'La política parla d’informació de pagament per a les transaccions, sense identificar la passarel·la.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['hacoo-app-store', 'hacoo-privacy-policy'], note: 'L’etiqueta declara identificadors com a dades per rastrejar; la política diu que genera identificadors interns anònims que es poden combinar amb altres dades.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['hacoo-app-store', 'hacoo-privacy-policy'], note: 'La política esmenta l’adreça MAC i l’Android ID.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['hacoo-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['hacoo-app-store', 'hacoo-privacy-policy'], note: 'L’etiqueta la declara com a dada no vinculada a la identitat.' }),
        row('historial-de-navegacio', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['personalitzacio-de-continguts', 'mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['hacoo-privacy-policy'] }),
        row('historial-de-cerca', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['hacoo-privacy-policy'] }),
        row('historial-de-compres', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['hacoo-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['hacoo-privacy-policy'], note: 'La política cita Google Analytics i xarxes publicitàries entre els proveïdors.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['hacoo-app-store'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['hacoo-privacy-policy'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['hacoo-app-store'], 'L’etiqueta de l’App Store declara identificadors com a dades utilitzades per rastrejar-te.'),
        advertisingIdentifiers: f('yes', 'official', ['hacoo-app-store', 'hacoo-privacy-policy'], 'Identificadors declarats per al rastreig, i adreça MAC i Android ID a la política.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['hacoo-privacy-policy'], 'Google Analytics i xarxes publicitàries que, segons la política, poden recollir informació per a publicitat personalitzada.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['hacoo-privacy-policy'], 'La publicitat dirigida hi consta com a finalitat i la política remet l’exclusió a networkadvertising.org, una pàgina del sector publicitari nord-americà, en lloc d’oferir un control propi.'),
        profiling: f('partial', 'official', ['hacoo-privacy-policy'], 'Diu que genera identificadors interns anònims que pot combinar amb altres dades i que personalitza el servei, però no descriu cap decisió automatitzada.'),
        aiTraining: unknown('La política no en parla.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['hacoo-privacy-policy'], 'Proveïdors com Google Analytics i xarxes publicitàries, autoritats i, en cas de fusió o adquisició, el comprador.'),
        intraGroupSharing: f('yes', 'official', ['hacoo-privacy-policy'], 'La política preveu la compartició amb empreses filials, sense anomenar-ne cap.'),
        dataBrokerSales: unknown('La política no diu si ven dades ni ho descarta.'),
        internationalTransfers: f('yes', 'official', ['hacoo-privacy-policy'], 'Admet que les dades es poden tractar arreu del món i fora de l’Espai Econòmic Europeu, i ho fa dependre del consentiment de la persona usuària sense esmentar clàusules contractuals tipus.', { mechanism: 'derogation' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['hacoo-privacy-policy'], 'Només diu que conserva les dades «mentre sigui necessari» per al servei, per a l’anàlisi interna o per complir la llei.'),
        dataAfterDeletion: unknown('La política no descriu què passa amb les dades quan es tanca el compte.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['hacoo-privacy-policy'], 'Es reconeix el dret de supressió, però no hi ha cap procediment de baixa documentat.'),
        selfService: unknown('No hem trobat cap opció d’eliminació del compte documentada ni a la política ni al centre de confiança.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Escriu al delegat de protecció de dades des de l’adreça electrònica del compte, amb l’adreça que consta a la política de privadesa.',
          'Invoca el dret de supressió de l’article 17 del RGPD i demana també una còpia de les teves dades.',
          'Si no reps resposta en un mes, pots reclamar davant de l’Agència Espanyola de Protecció de Dades.',
        ],
        obstacles:
          'La política no dona cap adreça postal, ni un responsable identificat, ni un representant a la Unió Europea, de manera que no queda clar davant de qui s’exerceix el dret ni quina autoritat hi és competent.',
        sources: ['hacoo-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['hacoo-privacy-policy'], 'Reconeix el dret de portabilitat per a les persones de l’Espai Econòmic Europeu, però no hi ha cap eina d’autoservei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['hacoo-privacy-policy'], 'La política diu que cal contactar amb el delegat de protecció de dades, sense donar cap termini de resposta ni identificar l’entitat responsable.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['hacoo-privacy-policy'], 'L’única sortida que s’ofereix és la pàgina d’exclusió de la Network Advertising Initiative, que no cobreix les aplicacions mòbils.'),
        telemetryOptOut: unknown('La política no descriu cap manera de desactivar l’analítica.'),
        granularControls: unknown('No hem trobat documentació d’un panell de privadesa.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem pogut revisar el flux de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('És una botiga en línia; no transporta comunicacions privades.'),
        transportEncryption: f('partial', 'official', ['hacoo-privacy-policy'], 'La política diu que aplica xifratge i tallafoc, sense concretar quin protocol.'),
        atRestEncryption: unknown('La política parla de mesures físiques, tècniques i administratives en termes generals.'),
        mfa: unknown('No consta cap segon factor per al compte.'),
        independentAudits: unknown('No hem trobat auditories ni certificacions.'),
        bugBounty: f('unknown', 'unknown', ['hacoo-trust-center'], 'El «centre de confiança» del web només parla de moderació d’anuncis enganyosos i de comptes retirats; no hi consta cap programa de recompenses ni cap canal de seguretat.'),
        vulnerabilityDisclosure: unknown('No hem trobat security.txt ni cap canal per comunicar vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'temu',
          comparability: 'partial',
          rationale: 'Ofereix el mateix tipus de catàleg de preu molt baix i, a diferència de Hacoo, identifica l’entitat responsable del tractament a la Unió Europea i publica un procediment d’eliminació del compte.',
          tradeOffs: 'Fa publicitat personalitzada, forma part d’un grup xinès i ha estat objecte d’actuacions de les autoritats europees de consum.',
        },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La fitxa queda incompleta per manca de documentació, no per manca de recerca: la política de privadesa és de les més primes del lot i no identifica el responsable del tractament amb el detall que exigeix l’article 13 del RGPD. L’avís de l’App Store que Hacoo Tech Limited no s’ha identificat com a comerciant és una dada verificable i poc habitual. El domini de l’aplicació (hacoo.app) i el de la botiga web de la marca (hacoo.com) conviuen amb webs de tercers que en reprodueixen el nom, i això complica la comprovació. No hem pogut completar la cerca d’incidents.',
        openQuestions: [
          'Quina és l’entitat responsable del tractament, en quin país està constituïda i té representant a la Unió Europea?',
          'Es pot eliminar el compte des de l’aplicació?',
          'Quina passarel·la de pagament i quins transportistes reben les dades de les comandes?',
          'Hi ha cap actuació d’una autoritat de protecció de dades o de consum contra Hacoo?',
        ],
      },
    },
  ],
  incidents: [
    {
      slug: 'playstation-psn-intrusio-2011',
      title: 'Intrusió a PlayStation Network del 2011 i multa de l’autoritat britànica',
      type: 'breach',
      severity: 'critical',
      apps: ['playstation-app'],
      company: 'sony-interactive-entertainment-europe',
      occurredAt: '2011-04-17',
      disclosedAt: '2011-04-26',
      description:
        'Una intrusió als sistemes de PlayStation Network entre el 17 i el 19 d’abril del 2011 va comprometre les dades d’uns 77 milions de comptes: noms d’usuari i contrasenyes, adreces postals i electròniques, dates de naixement i informació de targetes de pagament. Sony va aturar el servei durant 24 dies. El gener del 2013, l’autoritat britànica de protecció de dades va multar la societat responsable amb 250.000 lliures per no haver aplicat mesures de seguretat adequades per a una organització que tracta dades de targetes.',
      affectedPeople: 'Uns 77 milions de comptes de PlayStation Network a tot el món',
      regulatory: {
        authority: 'Information Commissioner’s Office (Regne Unit)',
        legalBasis: 'Data Protection Act 1998',
      },
      sources: ['playstation-psn-breach-2011'],
    },
  ],
  storeIds: {
    filmaffinity: 'com.filmaffinity',
    webel: 'es.miotek.Webel',
    dramabox: 'com.storymatrix.drama',
    hacoo: 'com.sara.ios',
    'playstation-app': 'com.playstation.eu.playstationadhoc',
    booksy: 'com.sensi.BooksyCUST',
    hinge: 'co.hinge.mobile.ios',
    'tp-link-tapo': 'com.tplink.tapo',
    smartthings: 'com.samsung.oneconnect4ios',
    'lg-thinq': 'com.lgeha.nuts',
  },
}
