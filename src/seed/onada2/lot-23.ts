import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

/**
 * Lot 23 de la segona onada: llibres, audiollibres i lectura.
 *
 * Deu aplicacions de la categoria «Libros» del top gratuït de l'App Store.
 * El contrast és net: al costat conservador hi ha lectors que no recullen res
 * (ReadEra) i subscripcions europees amb terminis escrits (Storytel, Nextory);
 * a l'altre, catàlegs de novel·la per capítols amb desenes de xarxes
 * publicitàries (Galatea) o societats a les Illes Verges Britàniques i a Hong
 * Kong que sotmeten la relació a lleis de fora de la Unió (AnyStories, NovelO).
 * Enmig, dos casos on l'etiqueta de l'App Store i el document legal diuen coses
 * diferents: ePrex, una app de pregària sense publicitat que declara rastreig,
 * i Kobo, amb una política que no s'ha tocat des del 2018.
 */
const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

export const lot: SeedLot = {
  companies: [
    {
      slug: 'real-academia-espanola',
      name: 'Real Academia Española',
      legalName: 'Real Academia Española',
      description:
        'Institució fundada a Madrid el 1713 per iniciativa del VIII marquès de Villena, amb seu al carrer Felipe IV, 4, i un centre d’estudis al carrer Serrano 187-189 cedit per l’Estat. La formen 46 acadèmics de número vitalicis i encapçala l’Associació d’Acadèmies de la Llengua Espanyola. Publica el Diccionario de la lengua española, que a l’aplicació es distribueix sense publicitat gràcies al patrocini de la Fundació «la Caixa». No hem pogut documentar-ne la naturalesa jurídica exacta ni el detall del finançament.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'unknown',
      foundedYear: 1713,
      primaryRevenueModel: 'donations',
      website: 'https://www.rae.es/',
      productDomains: ['rae.es', 'dle.rae.es', 'asale.org'],
      privacyContact: 'dpo@rae.es',
    },
    {
      slug: 'de-marque',
      name: 'De Marque',
      legalName: 'De Marque inc.',
      description:
        'Empresa quebequesa fundada el 1990 per Marc Boutet, amb seu al 400 boul. Jean-Lesage de la ciutat de Quebec i oficines a Montreal, Barcelona i París. Distribueix llibres electrònics i audiollibres per a editorials i biblioteques amb la plataforma Cantook, de la qual eBiblio és una versió de marca blanca. La seva filial espanyola, Distribuidora Digital de Libros S.A.U. (NIF A-65310138, abans Libranda i adquirida el 2018), és l’encarregada del tractament del servei eBiblio.',
      headquartersCountry: 'CA',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      foundedYear: 1990,
      primaryRevenueModel: 'mixed',
      website: 'https://www.demarque.com/',
      productDomains: ['demarque.com', 'cantook.com', 'cantook.net', 'libranda.com', 'ebiblio.es'],
      privacyContact: 'data@demarque.com',
    },
    {
      slug: 'inkitt',
      name: 'Inkitt',
      legalName: 'Inkitt GmbH',
      description:
        'Editorial digital de Berlín, fundada el 2013 per Ali Albazaz, que publica novel·la popular escrita per autors amateurs i la converteix en sèries per capítols dins les seves pròpies aplicacions. El seu producte principal és Galatea; també explota CandyJar, que comparteix el mateix compte d’usuari. Inscrita al registre mercantil de l’Amtsgericht Charlottenburg amb el número HRB 163320.',
      headquartersCountry: 'DE',
      euEstablishment: 'DE',
      leadSupervisoryAuthority: 'berlin',
      ownership: 'private',
      foundedYear: 2013,
      primaryRevenueModel: 'mixed',
      website: 'https://galatea.com/',
      productDomains: ['galatea.com', 'inkitt.com'],
      privacyContact: 'privacy@inkitt.com',
    },
    {
      slug: 'read-asap',
      name: 'READ ASAP',
      legalName: 'READ ASAP LTD',
      description:
        'Societat constituïda a les Illes Verges Britàniques (número 1993604, amb domicili a Vistra Corporate Services Centre, Road Town, Tortola) que explota l’aplicació de novel·les AnyStories. La mateixa política de privadesa hi afegeix HONGKONG ZHONGHE CO., LIMITED com a entitat afiliada i quatre societats més de Hong Kong i el Regne Unit com a «partners». Diu que els serveis es presten des d’oficines de Singapur i que els servidors són als Estats Units.',
      headquartersCountry: 'VG',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://www.anystories.app/',
      productDomains: ['anystories.app', 'novelago.vip'],
      privacyContact: 'support@anystories.app',
    },
    {
      slug: 'nextory',
      name: 'Nextory',
      legalName: 'Nextory AB',
      description:
        'Servei suec de subscripció d’audiollibres i llibres electrònics, fundat el 2011 a Estocolm. Opera a una vintena de països europeus. La política aplicable a Espanya identifica el responsable amb el número de registre suec 556708-4149 però hi dona una adreça a Barcelona, i remet les reclamacions a l’Agencia Española de Protección de Datos.',
      headquartersCountry: 'SE',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'imy-se',
      ownership: 'private',
      foundedYear: 2011,
      primaryRevenueModel: 'subscription',
      website: 'https://nextory.com/',
      productDomains: ['nextory.com', 'nextory.se'],
      privacyContact: 'ayuda@nextory.es',
    },
    {
      slug: 'storytel',
      name: 'Storytel',
      legalName: 'Storytel Sweden AB',
      description:
        'Filial operativa del grup suec Storytel, cotitzat a Estocolm, que ofereix audiollibres i llibres electrònics per subscripció i també edita llibres propis. La política identifica Storytel Sweden AB (registre 556696-2865) com a responsable únic del tractament, amb domicili a Tegnérgatan 37 d’Estocolm.',
      headquartersCountry: 'SE',
      euEstablishment: 'SE',
      leadSupervisoryAuthority: 'imy-se',
      ownership: 'public',
      primaryRevenueModel: 'subscription',
      website: 'https://www.storytel.com/',
      productDomains: ['storytel.com'],
      privacyContact: 'privacy@storytel.com',
    },
    {
      slug: 'readera',
      name: 'ReadEra',
      legalName: 'READERA EOOD',
      description:
        'Societat unipersonal búlgara que publica ReadEra, un lector de llibres i documents per a Android i iOS amb més de 40 milions de baixades, sense publicitat ni registre. Les polítiques de privadesa del web atribueixen el desenvolupament a «Readera LLC», un nom que no coincideix amb el de l’editor que consta a l’App Store.',
      headquartersCountry: 'BG',
      euEstablishment: 'BG',
      leadSupervisoryAuthority: 'cpdp-bg',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://readera.org/',
      productDomains: ['readera.org'],
      privacyContact: 'support@readera.org',
    },
    {
      slug: 'rakuten',
      name: 'Rakuten Group',
      legalName: 'Rakuten Group, Inc.',
      description:
        'Grup japonès de comerç electrònic, serveis financers i telecomunicacions amb seu a Tòquio. Les transferències internacionals dins del grup es fan a l’empara de les seves normes corporatives vinculants, aprovades amb l’autoritat de protecció de dades de Luxemburg com a autoritat principal.',
      headquartersCountry: 'JP',
      ownership: 'public',
      foundedYear: 1997,
      primaryRevenueModel: 'mixed',
      website: 'https://global.rakuten.com/corp/',
      productDomains: ['rakuten.com', 'rakuten.co.jp'],
    },
    {
      slug: 'rakuten-kobo',
      name: 'Rakuten Kobo',
      legalName: 'Rakuten Kobo Inc.',
      parent: 'rakuten',
      description:
        'Empresa canadenca de Toronto, comprada per Rakuten el 2012, que ven llibres electrònics i audiollibres i fabrica els lectors Kobo. La política de privadesa designa Kobo Europe S.A., de Luxemburg, com a responsable per a les persones residents a Europa.',
      headquartersCountry: 'CA',
      euEstablishment: 'LU',
      leadSupervisoryAuthority: 'cnpd-lu',
      ownership: 'subsidiary',
      foundedYear: 2009,
      primaryRevenueModel: 'commerce',
      website: 'https://www.kobo.com/',
      productDomains: ['kobo.com', 'kobobooks.com'],
    },
    {
      slug: 'kynix-group',
      name: 'Kynix Group',
      legalName: 'Kynix Group Limited',
      description:
        'Societat de Tuen Mun (Hong Kong) que publica NovelO, una aplicació de novel·la romàntica per capítols amb subscripcions setmanals i anuals. La fitxa de l’App Store hi dona un telèfon de contacte de la Xina continental.',
      headquartersCountry: 'HK',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://novelooo.com/',
      productDomains: ['novelooo.com'],
      privacyContact: 'o@novelooo.com',
    },
    {
      slug: 'fundacio-summa-humanitate',
      name: 'Fundación Summa Humanitate',
      legalName: 'Fundación Summa Humanitate',
      description:
        'Fundació sense ànim de lucre amb domicili al carrer Villa de Marín 24 de Madrid, inscrita amb el número 1373 al Registre de Fundacions del Ministeri d’Educació i amb CIF G84657295. És la titular del web de l’aplicació catòlica de pregària ePrex, que manté una trentena de persones voluntàries i que es finança amb donacions.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'nonprofit',
      primaryRevenueModel: 'donations',
      website: 'https://eprex.app/',
      productDomains: ['eprex.app', 'saints.es'],
      privacyContact: 'dpd@humanitate.org',
    },
  ],
  sources: [
    /* ── RAE ── */
    s('rae-app-store', 'Diccionario de la lengua española — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1011116985', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’app, amb la declaració «No se recopilan datos: el desarrollador no recopila ningún dato en esta app». La fitxa no enllaça cap política de privadesa ni cap web del desenvolupador. Hi consta la Real Academia Española com a comerciant identificat segons el dret de la Unió, amb adreça a Felipe IV, 4, de Madrid i el correu rae_app@rae.es.',
    }),
    s('rae-privacy-policy', 'Política de privacidad y protección de los datos personales', 'https://www.rae.es/politica-de-privacidad-y-proteccion-de-los-datos-personales', 'Real Academia Española', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de privadesa de la RAE, sense data de revisió ni número de versió. Adverteix que només cobreix els tractaments «en el marco de su página web www.rae.es». Identifica la RAE com a responsable, dona dpo@rae.es com a delegat de protecció de dades i enumera les finalitats dels formularis del web, entre les quals l’històric de consultes lingüístiques i la recollida de mostres per al projecte d’intel·ligència artificial LEIA, amb gravacions identificades per un ID. Afirma que no es fan transferències internacionals ni cap comunicació de dades a tercers, i lliga la conservació al bloqueig durant els terminis de prescripció. El domini bloqueja les peticions automatitzades; l’hem llegida a través d’un servei de lectura.',
    }),
    s('rae-legal-notice', 'Aviso legal', 'https://www.rae.es/aviso-legal', 'Real Academia Española', 'terms', 'primary', {
      language: 'es',
      archiveUrl: 'https://web.archive.org/web/20260101061835/https://www.rae.es/aviso-legal',
      summary:
        'Avís legal del web, contrastat amb una còpia de l’Internet Archive de l’1 de gener del 2026. Només fa declaracions genèriques de seguretat: mesures tècniques i organitzatives apropiades i una «infraestructura firewall de estricto cumplimiento».',
    }),
    s('rae-security-txt', 'security.txt de rae.es', 'https://rae.es/.well-known/security.txt', 'Real Academia Española', 'technical-doc', 'primary', {
      language: 'es',
      summary:
        'Fitxer normalitzat de contacte de seguretat, servit també a dle.rae.es. Només conté tres línies: contacte a seguridad@rae.es, caducitat el 31 de desembre del 2050 i castellà i anglès com a llengües preferides. No hi ha política ni reconeixements associats.',
    }),
    s('rae-institution', 'La RAE — La institución', 'https://www.rae.es/la-institucion/la-rae', 'Real Academia Española', 'other', 'primary', {
      language: 'es',
      summary:
        'Pàgina institucional: fundació a Madrid el 1713 per iniciativa de Juan Manuel Fernández Pacheco, VIII marquès de Villena, 46 acadèmics de número i pertinença a l’Associació d’Acadèmies de la Llengua Espanyola.',
    }),
    s('rae-consultes', 'El «Diccionario de la lengua española» supera los mil millones de consultas en un año', 'https://www.rae.es/noticia/el-diccionario-de-la-lengua-espanola-supera-los-mil-millones-de-consultas-en-un-ano', 'Real Academia Española', 'other', 'primary', {
      language: 'es',
      publishedAt: '2021-02-19',
      summary:
        'Nota de premsa de la RAE: el diccionari en línia va superar els mil milions de consultes entre el febrer del 2020 i el gener del 2021, un 45 % més que el període anterior. La xifra és del servei web, no de l’aplicació.',
    }),
    s('rae-transparency', 'Transparencia y buen gobierno — Fundación pro-RAE', 'https://www.rae.es/fundacion/transparencia-y-buen-gobierno', 'Real Academia Española', 'other', 'primary', {
      language: 'es',
      summary:
        'Portal de transparència institucional i econòmica de la Fundación pro-RAE: comptes, bon govern i patronat. No és un informe de transparència sobre peticions d’autoritats ni sobre dades personals.',
    }),

    /* ── eBiblio ── */
    s('ebiblio-app-store', 'eBiblio — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1541822581', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’app. No declara cap dada per rastrejar ni cap dada vinculada amb la identitat; només tres categories no vinculades: l’identificador d’usuari per al funcionament de l’app i les dades d’ús i els diagnòstics per a analítica. El proveïdor és De Marque inc., amb adreça al 400 boul. Jean-Lesage de Quebec, i la web del desenvolupador que hi consta és libranda.com.',
    }),
    s('ebiblio-privacy-policy', 'Aplicación móvil — Política de privacidad de eBiblio', 'https://guiadeuso.ebiblio.es/confluence/ebiblio-user/es/preguntas-frecuentes/condiciones-generales/aplicacion-movil/aplicacion-movil-politica-de-privacidad', 'Ministerio de Cultura', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2025-07-14',
      summary:
        'Política enllaçada des de l’App Store, actualitzada el 14 de juliol del 2025. Identifica com a responsable la Dirección General del Libro, del Cómic y de la Lectura del Ministerio de Cultura, amb l’article 6.1.e del RGPD com a base jurídica i l’article 14.3 de la Llei 10/2007 com a competència habilitant. Dades tractades: nom, identificador de la biblioteca i adreça electrònica, més validacions de suspensió i de categoria d’edat. Declara expressament que no hi ha decisions automatitzades ni perfilat i que no hi ha cessions ni transferències internacionals llevat de Google Analytics, emparat en el Marc de Privadesa UE-EUA. L’encarregat del tractament és Distribuidora Digital de Libros S.A.U.',
    }),
    s('ebiblio-cantook-privacy', 'Cantook — Politique de confidentialité', 'https://confluence.demarque.com/confluence/cantook/fr/general-conditions/cantook-privacy-policy', 'De Marque', 'privacy-policy', 'primary', {
      language: 'fr',
      publishedAt: '2024-03-27',
      summary:
        'Política de Cantook, la plataforma de De Marque de la qual eBiblio és una versió de marca blanca. Diu que la biblioteca transmet a De Marque el número d’usuari i, si escau, l’edat, i que l’empresa recull la llista de préstecs en curs, l’històric de préstecs, les reserves, la llista de desitjos i també els marcadors, els subratllats i les notes. Esmenta galetes estadístiques i Google Analytics, afirma que no ven ni lloga les dades, i situa els servidors en un centre de dades del Quebec amb l’aplicació allotjada a Google Cloud Platform. Contactes: aide@demarque.com i data@demarque.com.',
    }),
    s('ebiblio-cifres', 'eBiblio en cifras 2025', 'https://ebiblio.es/en-cifras-2025.html', 'Ministerio de Cultura', 'other', 'primary', {
      language: 'es',
      summary:
        'Estadístiques oficials del servei el 2025: 239.502 usuaris únics amb alguna transacció, 4.797.993 préstecs i una col·lecció de 59.222 títols amb 700.736 llicències. Són xifres del servei sencer, web i aplicacions, no de l’app d’iOS.',
    }),
    s('de-marque-about', 'À propos — De Marque', 'https://corpo.demarque.com/a-propos', 'De Marque', 'other', 'primary', {
      language: 'fr',
      summary:
        'Pàgina corporativa: fundació el 1990 a Quebec per Marc Boutet, president i cofundador, i oficines a Quebec, Montreal, Barcelona i París.',
    }),
    s('de-marque-libranda', 'De Marque Adds Libranda to Its Distribution Business', 'https://www.publishersweekly.com/pw/by-topic/industry-news/publisher-news/article/76797-de-marque-adds-libranda-to-its-distribution-business.html', 'Publishers Weekly', 'press', 'secondary', {
      language: 'en',
      publishedAt: '2018-04-09',
      summary:
        'Informació sobre la compra de la distribuïdora espanyola Libranda per part de De Marque el 2018. Libranda és el nom comercial anterior de Distribuidora Digital de Libros S.A.U., l’encarregada del tractament d’eBiblio.',
    }),
    /* ── Galatea ── */
    s('galatea-app-store', 'GALATEA: Novels & Audiobooks — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1380362212', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’app. Declara compres, identificadors i dades d’ús com a dades per rastrejar; vincula a la identitat l’historial de compres, l’identificador d’usuari i de dispositiu, la interacció amb el producte, l’adreça electrònica i les dades d’errors; deixa sense vincular l’historial de cerca, les dades de publicitat i les de rendiment.',
    }),
    s('galatea-privacy-policy', 'Privacy Policy | Galatea', 'https://galatea.com/privacy', 'Inkitt GmbH', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2025-10-10',
      summary:
        'Política única per al web i l’app, datada el 10 d’octubre del 2025. Identifica Inkitt GmbH com a responsable i FreshCompliance GmbH com a delegat de protecció de dades, enumera una vintena de proveïdors (Google Analytics, Firebase, AdMob, AppLovin, Taboola, Adjust, Branch, Meta, RevenueCat, Klarna, Stripe, PayPal, Zendesk, Cloudflare…), diu que el compte serveix també per a l’altra app del grup, CandyJar, i que les transferències als Estats Units es cobreixen amb clàusules contractuals tipus. No descriu cap procediment per eliminar el compte dins l’app.',
    }),
    s('galatea-imprint', 'Imprint | Galatea', 'https://galatea.com/imprint', 'Inkitt GmbH', 'other', 'primary', {
      language: 'en',
      summary:
        'Avís legal preceptiu segons l’article 5 de la DDG alemanya: Inkitt GmbH, Saarbrücker Strasse 36, Berlín, registre mercantil HRB 163320 de l’Amtsgericht Charlottenburg, NIF-IVA DE298265721, representada per Ali Albazaz.',
    }),

    /* ── AnyStories ── */
    s('anystories-app-store', 'AnyStories - Novelas y Libros — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1500217654', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’app. Declara els identificadors com a dades per rastrejar i posa tota la resta (compres, adreça electrònica, historial de cerca, identificador d’usuari i de dispositiu, interacció amb el producte i diagnòstics) a l’apartat de dades no vinculades amb la identitat, tot i que la política descriu un compte amb correu i contrasenya.',
    }),
    s('anystories-privacy-policy', 'AnyStories Privacy Policy', 'https://www.anystories.app/protocol.html?packageName=write.read.story.webnovel.book.anystories&appName=AnyStories&os=ios&lang=en&keys=privacy-policy', 'READ ASAP LTD', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2026-08-05',
      summary:
        'Política actualitzada el 5 d’agost del 2026. Identifica READ ASAP LTD (Illes Verges Britàniques) i HONGKONG ZHONGHE CO., LIMITED com a entitats responsables i quatre societats més com a col·laboradores. Sotmet la relació a la llei de Hong Kong, diu que els servidors són als Estats Units i que el contingut públic és el valor per defecte, admet la publicitat personalitzada amb tercers als quals cedeix l’adreça IP, l’identificador publicitari, la versió del dispositiu, el codi de país i el tipus de xarxa, i estableix que la baixa és per correu amb sis mesos de desactivació previs a l’esborrat.',
    }),

    /* ── Nextory ── */
    s('nextory-app-store', 'Nextory: e-books y audiolibros — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id993578896', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’app. No declara cap dada per rastrejar. Vincula a la identitat l’adreça electrònica (també per a publicitat de tercers), el nom, l’identificador d’usuari i de dispositiu, el contingut de l’usuari i la interacció amb el producte; deixa sense vincular el rendiment i els diagnòstics.',
    }),
    s('nextory-privacy-policy', 'Política de privacidad de Nextory', 'https://nextory.com/es/privacy-policy', 'Nextory AB', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2021-05-31',
      summary:
        'Política espanyola, actualitzada el 31 de maig del 2021. Dona el número de registre suec 556708-4149 i una adreça a Travessera de Gràcia 11 de Barcelona, amb ayuda@nextory.es com a contacte. Taula de finalitats i bases jurídiques: contracte per al servei, interès legítim per a la publicitat i les recomanacions, obligació legal per a la comptabilitat. Terminis: la subscripció més 36 mesos, 12 mesos per als registres incomplets i 6 anys per a les obligacions fiscals. Remet les reclamacions a l’AEPD.',
    }),
    s('nextory-delete-account', '¿Cómo elimino mi cuenta? — Nextory', 'https://support.nextory.se/hc/es-es/articles/15527405871762', 'Nextory AB', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Article d’ajuda que descriu la baixa: primer cal cancel·lar la subscripció activa i esperar-ne la confirmació; després, des de l’app mòbil, a «detalles de la cuenta», hi ha el botó per eliminar el compte.',
    }),
    s('nextory-cancel-subscription', '¿Cómo cancelo mi suscripción? — Nextory', 'https://support.nextory.se/hc/es-es/articles/206474909', 'Nextory AB', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Passos per cancel·lar la subscripció des de «Mis páginas», amb confirmació per correu. Adverteix que cal fer-ho com a mínim un dia abans de la renovació i que les altes contractades a través de Movistar es cancel·len a l’operadora.',
    }),

    /* ── Storytel ── */
    s('storytel-app-store', 'Storytel: Audiolibros y Ebooks — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id348177651', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’app. Declara identificadors i dades d’ús com a dades per rastrejar. Vincula a la identitat el correu, el nom, l’identificador d’usuari i la interacció amb el producte, per a publicitat, analítica, personalització i funcionament; deixa sense vincular l’identificador de dispositiu i els diagnòstics.',
    }),
    s('storytel-privacy-policy', 'Storytel Privacy Policy', 'https://www.storytel.com/sg/en/documents/privacy-policy', 'Storytel Sweden AB', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2022-11-03',
      summary:
        'Política global en PDF, modificada per última vegada el 3 de novembre del 2022, que és la que enllaça la fitxa de l’App Store. Designa Storytel Sweden AB (registre 556696-2865) com a responsable, detalla les categories de dades i les bases jurídiques en taules, i fixa terminis numèrics: 24 mesos després de la fi de la subscripció, 24 mesos des de l’última consulta al servei d’atenció, 12 mesos per al màrqueting i 7 anys per a les obligacions fiscals. Per a les transferències fora de l’EEE invoca decisions d’adequació i clàusules contractuals tipus. Contacte: privacy@storytel.com, amb delegat de protecció de dades designat.',
    }),
    s('storytel-delete-account', '¿Cómo procedo si quiero que eliminen información sobre mí? — Storytel', 'https://support.storytel.com/hc/es-es/articles/360010376360', 'Storytel Sweden AB', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Article d’ajuda que repeteix els terminis de conservació i descriu la baixa: primer cancel·lar la subscripció i després, des de l’app, Perfil > Configuració > Compte > Eliminar compte. Si no es pot completar, es pot demanar a privacy@storytel.com.',
    }),
    s('storytel-privacy-settings', '¿Cómo cambio mi información registrada y la configuración de privacidad? — Storytel', 'https://support.storytel.com/hc/es-es/articles/360010376300', 'Storytel Sweden AB', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Descriu els controls de l’app: Configuració > Privadesa permet fer el perfil privat (les ressenyes deixen de veure’s al perfil, però continuen visibles a la fitxa del llibre) i canviar les preferències de màrqueting directe i basat en interessos.',
    }),
    s('storytel-dpo-contact', '¿A quién puedo contactar si tengo más preguntas sobre integridad y datos personales? — Storytel', 'https://support.storytel.com/hc/es-es/articles/360010487399', 'Storytel Sweden AB', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Indica el canal per exercir drets i per adreçar-se al delegat de protecció de dades, afegint «Para DPO» a l’assumpte del correu.',
    }),
    s('storytel-security-txt', 'security.txt de storytel.com', 'https://www.storytel.com/.well-known/security.txt', 'Storytel Sweden AB', 'technical-doc', 'primary', {
      language: 'en',
      summary:
        'Fitxer normalitzat de contacte de seguretat: remet a security.storytel.com per comunicar vulnerabilitats, amb l’anglès com a llengua preferida. La data de caducitat que hi consta, el 29 d’agost del 2025, ja ha passat.',
    }),

    /* ── Kobo ── */
    s('kobo-app-store', 'Kobo Books — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id301259483', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’app. No declara cap dada per rastrejar. Vincula a la identitat l’identificador d’usuari, l’adreça electrònica, el contingut de l’usuari i la interacció amb el producte, per a analítica, personalització i funcionament; deixa sense vincular l’historial de cerca i els diagnòstics. Avisa que Rakuten Kobo Inc. no s’ha identificat com a comerciant i que els drets de consum de l’EEE no s’apliquen als contractes amb aquest proveïdor.',
    }),
    s('kobo-privacy-policy', 'Política de privacidad de Kobo', 'https://es.kobo.com/privacypolicy', 'Rakuten Kobo Inc.', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2018-03-01',
      archiveUrl: 'https://web.archive.org/web/20260304165524/https://es.kobo.com/privacypolicy',
      summary:
        'Política amb data d’última actualització d’1 de març del 2018, amb una política de galetes annexa del setembre del 2017. Designa Kobo Europe S.A. com a responsable per a Europa, invoca les normes corporatives vinculants de Rakuten aprovades amb l’autoritat luxemburguesa i la decisió d’adequació del Canadà, i llista Google Analytics, Optimizely, Facebook, Google AdWords, Criteo, Bing i Crashlytics entre les galetes de tercers. Diu que les dades es conserven fins que es tanca el compte i que després es poden anonimitzar i conservar amb finalitats estadístiques. El web bloqueja les peticions automatitzades amb Cloudflare; l’hem llegida a l’Internet Archive (còpia del març del 2026).',
    }),
    s('kobo-deactivate-account', 'Deactivate and reactivate your Kobo account', 'https://help.kobo.com/hc/en-us/articles/360044668774-Deactivate-and-reactivate-your-Kobo-account', 'Rakuten Kobo Inc.', 'support-doc', 'primary', {
      language: 'en',
      summary:
        'Passos per tancar el compte des de Kobo.com («My Account» > «Account Settings» > «Account Status» > «Deactivate Account») i per tornar-lo a obrir més endavant iniciant sessió amb les mateixes credencials: «you won’t lose any items you purchased».',
    }),
    s('kobo-privacy-settings', 'Adjust your privacy settings on Kobo.com', 'https://help.kobo.com/hc/en-us/articles/13058637908631-Adjust-your-privacy-settings-on-Kobo-com', 'Rakuten Kobo Inc.', 'support-doc', 'primary', {
      language: 'en',
      summary:
        'Admet que «Kobo tracks your data, activity, and preferences». Per a Europa remet el control a kobo.com/privacy; per a la resta del món, a un interruptor de l’aparell o de l’app («Help Improve our App») que s’ha de desactivar dispositiu per dispositiu i que es reinicia si es tanca la sessió.',
    }),
    s('kobo-dormancy', 'Why has my Rakuten Kobo account been deleted?', 'https://help.kobo.com/hc/en-us/articles/22323901880087-Why-has-my-Rakuten-Kobo-account-been-deleted', 'Rakuten Kobo Inc.', 'support-doc', 'primary', {
      language: 'en',
      summary:
        'Descriu el «Dormancy Protocol»: els comptes sense activitat durant més de tres anys es poden esborrar, amb avís previ, excepte els que tinguin contingut comprat o crèdits. Reconeix que la primera aplicació retroactiva va esborrar comptes antics sense avisar.',
    }),
    s('kobo-account-security', 'Improve your Kobo account’s security', 'https://help.kobo.com/hc/en-us/articles/360034697573-Improve-your-Kobo-account-s-security', 'Rakuten Kobo Inc.', 'support-doc', 'primary', {
      language: 'en',
      summary:
        'Consells de contrasenya i avisos de filtració. Hi consta l’afirmació «There are no known data breaches on Rakuten Kobo» i la descripció dels correus d’activitat sospitosa. No esmenta cap doble factor d’autenticació.',
    }),

    /* ── ReadEra ── */
    s('readera-app-store', 'ReadEra – book reader pdf epub — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1669188337', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’app, amb la declaració «El desarrollador no recopila ningún dato en esta app»: cap dada per rastrejar, cap de vinculada i cap de no vinculada. Editor: READERA EOOD.',
    }),
    s('readera-privacy-ios', 'Privacy Policy ReadEra for iOS', 'https://readera.org/privacy-ios', 'READERA EOOD', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Política específica de la versió per a iOS: «The application does not collect personal information», no demana cap registre, no recull ni transmet informació dels fitxers de la persona usuària, no recull ni tan sols estadístiques tècniques anònimes i no transfereix dades a tercers. Atribueix el desenvolupament a «Readera LLC».',
    }),
    s('readera-privacy-android', 'Privacy Policy ReadEra for Android', 'https://readera.org/privacy', 'READERA EOOD', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Política de la versió per a Android. A diferència de la d’iOS, recull estadístiques tècniques anònimes (errors, rendiment i ús de funcions), desactivables des de la configuració, i tampoc no les cedeix a tercers.',
    }),
    s('readera-premium', 'ReadEra Premium', 'https://readera.org/premium', 'READERA EOOD', 'support-doc', 'primary', {
      language: 'en',
      summary:
        'Descripció de la versió de pagament. La sincronització de llibres, progrés de lectura, marcadors i cites es fa contra el Google Drive de la mateixa persona usuària, no contra servidors de ReadEra.',
    }),
    s('readera-website', 'ReadEra — Reading books is easy!', 'https://readera.org/', 'READERA EOOD', 'other', 'primary', {
      language: 'en',
      summary:
        'Pàgina principal del producte: més de 40 milions de baixades i el compromís de llegir «for free, without ads and without registration», amb suport per a EPUB, MOBI, AZW3, FB2, PDF, DjVu, DOC, DOCX, RTF, ODT, TXT, CBR i CBZ.',
    }),

    /* ── ePrex ── */
    s('eprex-app-store', 'ePrex: Liturgia Horas - Saints — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id954001499', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’app. Declara dades de contacte, contingut de l’usuari, identificadors, dades d’ús i diagnòstics com a dades utilitzades per rastrejar, i les mateixes categories vinculades a la identitat per a analítica, personalització, funcionament i «otros fines». Enllaça com a política de privadesa la pàgina general de saints.es.',
    }),
    s('eprex-privacy-policy', 'Política de privacidad — Saints', 'https://saints.es/privacidad/', 'Fundación Summa Humanitate', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Document que l’App Store dona com a política de privadesa de l’app. Està escrit per a les donacions i les consultes del web: identifica la Fundación Summa Humanitate (CIF G84657295, Madrid), parla de nom, cognoms, DNI, dades bancàries i mètodes de pagament, de comunicacions a administracions públiques i entitats financeres, i dona dpd@humanitate.org com a contacte. No descriu cap tractament de l’aplicació ePrex ni cap rastreig.',
    }),
    s('eprex-legal-notice', 'Aviso legal — Saints', 'https://saints.es/aviso-legal', 'Fundación Summa Humanitate', 'terms', 'primary', {
      language: 'es',
      summary:
        'Avís legal amb les dades identificatives del titular: Fundación Summa Humanitate, CIF G84657295, carrer Villa de Marín 24 de Madrid, inscrita amb el número 1373 al Registre de Fundacions del Ministeri d’Educació. Esmenta l’app ePrex i les botigues on es distribueix.',
    }),
    s('eprex-website', 'ePrex — La app católica para tu vida de oración', 'https://eprex.app/', 'Fundación Summa Humanitate', 'other', 'primary', {
      language: 'es',
      summary:
        'Web del producte. Promet els recursos de pregària «gratis y sin publicidad» i funcionant sense connexió, i anuncia funcions de quaderns de notes, intencions i plans de pregària amb recordatoris.',
    }),
    s('eprex-aciprensa', 'ePrex cumple 10 años en español y alcanza los 5 millones de descargas', 'https://www.aciprensa.com/noticias/119571/eprex-cumple-10-anos-en-espanol-y-alcanza-los-5-millones-de-descargas', 'ACI Prensa', 'press', 'secondary', {
      language: 'es',
      summary:
        'Reportatge sobre el projecte: més de 5 milions de baixades, uns 50.000 usuaris nous cada mes, presència a més de 180 països i una trentena de persones voluntàries. Nascuda a Itàlia el 2012, en castellà des del 2015 i rellançada el 2020.',
    }),

    /* ── NovelO ── */
    s('novelo-app-store', 'NovelO - Read Books & Novels — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6801094167', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’app. Declara les dades d’ús com a dades per rastrejar i posa la resta (identificador de dispositiu, interacció amb el producte, dades de publicitat i diagnòstics) com a no vinculades amb la identitat. No hi consta cap dada vinculada, tot i que la política descriu un compte. Compres integrades: 22,99 € setmanals i 99,90 € anuals.',
    }),
    s('novelo-privacy-policy', 'NovelO Privacy Policy', 'https://novelooo.com/privacy.html', 'Kynix Group Limited', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2026-08-12',
      summary:
        'Política datada el 12 d’agost del 2026. Identifica Kynix Group Limited (Hong Kong), enumera nom d’usuari i contrasenya, estat VIP, llibres i progrés de lectura, transaccions d’Apple, model i sistema del dispositiu, adreça IP i identificadors publicitaris. Cita Adjust per mesurar instal·lacions i campanyes i l’avís d’App Tracking Transparency. Admet que les dades es poden processar i emmagatzemar en servidors fora del país. La baixa és a «Mine > About Us > Delete Account», és permanent i no cancel·la la subscripció d’Apple.',
    }),
  ],
  apps: [
    {
      slug: 'diccionario-rae',
      name: 'Diccionario de la lengua española (DLE)',
      company: 'real-academia-espanola',
      categories: ['traduccio-i-referencia', 'llibres-i-lectura'],
      tagline: 'Una app que no recull cap dada i que no té política de privadesa pròpia',
      summary:
        'El diccionari oficial de la Real Academia Española cap en 4,6 MB, funciona sense connexió, no demana registre i no mostra publicitat gràcies al patrocini de la Fundació «la Caixa». L’etiqueta de l’App Store és la més curta possible: «No se recopilan datos». En canvi, la fitxa no enllaça cap política de privadesa, i l’única que publica la RAE diu explícitament que només cobreix el web www.rae.es. La RAE sí que publica un security.txt en regla, cosa gens habitual en una institució d’aquesta mena.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'donations',
      jurisdiction: 'Espanya (UE)',
      userBase: 'El diccionari en línia va superar els mil milions de consultes entre el febrer del 2020 i el gener del 2021, segons la RAE; no hi ha xifres publicades de l’aplicació.',
      links: {
        website: 'https://www.rae.es/',
        privacyPolicy: 'https://www.rae.es/politica-de-privacidad-y-proteccion-de-los-datos-personales',
        terms: 'https://www.rae.es/aviso-legal',
        appStore: 'https://apps.apple.com/es/app/id1011116985',
      },
      accountRequired: f('no', 'official', ['rae-app-store'], 'L’etiqueta declara que no es recull cap dada i la fitxa no descriu cap registre ni inici de sessió.'),
      openSource: f('no', 'official', ['rae-app-store'], 'No hem trobat cap repositori públic del codi de l’aplicació.', { licence: 'Privativa' }),
      dataSummary:
        'El que es consulta en un diccionari pot ser tan revelador com un historial de cerca: paraules relacionades amb malalties, amb sexualitat o amb feines. Segons la declaració de l’App Store, a l’app aquestes consultes no surten del dispositiu. L’historial de consultes que sí que es conserva és el de la versió web, quan s’hi fa servir un compte.',
      dataCollection: [
        row('historial-de-cerca', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['rae-app-store', 'rae-consultes'], note: 'A l’app no es recull cap dada. La política del web, en canvi, diu que a rae.es es manté un històric de les consultes lingüístiques fetes per la persona usuària.' }),
        row('identificador-de-dispositiu', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['rae-app-store'] }),
        row('interaccions-i-us', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['rae-app-store'] }),
        row('dades-de-diagnostic', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['rae-app-store'] }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['rae-privacy-policy'], note: 'Només al web: formularis de contacte, consultes lingüístiques, butlletins i alta d’«amigos de la RAE». L’app no en demana cap.' }),
        row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['investigacio-i-estadistica'], sources: ['rae-privacy-policy'], note: 'La política esmenta gravacions per al projecte LEIA d’intel·ligència artificial, identificades amb un ID que permet rectificar-les o cancel·lar-les. No consta que es facin des de l’app.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['rae-app-store'], 'L’etiqueta de l’App Store declara que no es recull cap dada, de manera que no n’hi ha cap per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['rae-app-store'], 'Cap identificador declarat i cap publicitat a l’app.'),
        thirdPartyTrackersPresent: f('no', 'official', ['rae-app-store'], 'La declaració «no se recopilan datos» exclou la presència de components de tercers que enviïn dades. Al web sí que hi ha galetes, regulades en un document a part.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['rae-app-store'], 'L’app no mostra publicitat i no recull cap dada que s’hi pugui destinar; la descripció de la fitxa atribueix la gratuïtat al patrocini de la Fundació «la Caixa».'),
        profiling: f('no', 'official', ['rae-privacy-policy', 'rae-app-store'], 'L’app no recull dades i la política del web no descriu cap perfilat.'),
        aiTraining: f('partial', 'official', ['rae-privacy-policy'], 'La política del web declara la finalitat de «recopilación de información lingüística para la investigación, desarrollo, proyección y buen uso de la lengua española en el ámbito de la IA» dins el projecte LEIA, amb gravacions de veu. No consta que hi participi l’aplicació, que no recull cap dada.'),
      },
      sharing: {
        thirdPartySharing: f('no', 'official', ['rae-privacy-policy'], 'La política afirma que la RAE «no comunica los datos personales de los usuarios a tercero alguno».'),
        intraGroupSharing: f('no', 'official', ['rae-institution'], 'La RAE no forma part de cap grup empresarial: les altres acadèmies de l’ASALE són institucions independents amb personalitat pròpia.'),
        dataBrokerSales: f('no', 'official', ['rae-privacy-policy'], 'La política exclou qualsevol comunicació de dades a tercers.'),
        internationalTransfers: f('no', 'official', ['rae-privacy-policy'], 'La política afirma que «no efectúa transferencias de datos a terceros países u organizaciones internacionales». La política de galetes és un document a part que no hem pogut contrastar.', { mechanism: 'none' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: f('no', 'official', ['rae-transparency'], 'El que hi ha és un portal de transparència econòmica i de bon govern de la Fundación pro-RAE, no un informe sobre peticions d’autoritats ni sobre dades personals.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['rae-privacy-policy'], 'La política lliga la conservació a «el plazo necesario para el cumplimiento de las finalidades» i, després, al bloqueig durant els terminis de prescripció. No hi ha cap xifra.'),
        dataAfterDeletion: f('partial', 'official', ['rae-privacy-policy'], 'Les dades del web es conserven bloquejades durant els terminis de prescripció de les obligacions legals.'),
      },
      accountDeletion: {
        possible: na('L’aplicació no té comptes d’usuari: n’hi ha prou de desinstal·lar-la.'),
        selfService: na('No hi ha cap compte associat a l’app.'),
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Per deixar de fer servir l’app, desinstal·la-la: no hi ha cap compte ni cap dada al servidor.',
          'Si has fet servir formularis de rae.es, els butlletins o l’alta d’«amigos de la RAE», demana la supressió per escrit, amb còpia del DNI, a proteccion_de_datos@rae.es o a admon@rae.es.',
        ],
        obstacles: 'Per a les dades del web, la política exigeix aportar còpia del document d’identitat i no fixa cap termini de resposta.',
        sources: ['rae-app-store', 'rae-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política del web enumera els drets del RGPD però no descriu cap descàrrega ni el format de lliurament.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['rae-privacy-policy'], 'Per escrit amb còpia del DNI a l’adreça postal de la RAE, o per correu a admon@rae.es o proteccion_de_datos@rae.es; el delegat de protecció de dades és a dpo@rae.es i l’autoritat de reclamació, l’AEPD. No hi ha cap formulari ni cap termini.', { url: 'mailto:dpo@rae.es' }),
      },
      controls: {
        adPersonalizationOptOut: na('L’app no mostra publicitat.'),
        telemetryOptOut: na('L’app declara que no recull cap dada, de manera que no hi ha telemetria que calgui desactivar.'),
        granularControls: na('Sense compte ni recollida de dades, no hi ha preferències de privadesa a configurar dins l’app.'),
        defaultPosture: 'protective',
        darkPatterns: f('no', 'editorial', ['rae-app-store'], 'No hi ha registre, ni publicitat, ni consentiments a gestionar dins l’app, de manera que no hi ha lloc per a patrons foscos.'),
      },
      security: {
        e2ee: na('És una consulta de diccionari; no hi ha comunicacions privades entre persones que puguin anar xifrades d’extrem a extrem.'),
        transportEncryption: f('partial', 'official', ['rae-security-txt', 'rae-legal-notice'], 'Els dominis rae.es i dle.rae.es serveixen per HTTPS i redirigeixen les peticions no xifrades, però no n’hem pogut llegir les capçaleres perquè bloquegen les peticions automatitzades.'),
        atRestEncryption: unknown('Cap document no ho descriu.'),
        mfa: na('L’aplicació no té comptes d’usuari que calgui protegir amb un segon factor.'),
        independentAudits: unknown('No hem trobat cap auditoria ni certificació de seguretat.'),
        bugBounty: unknown('El security.txt no esmenta cap programa de recompenses.'),
        vulnerabilityDisclosure: f('yes', 'official', ['rae-security-txt'], 'Hi ha security.txt a rae.es i a dle.rae.es, amb seguridad@rae.es com a contacte, caducitat el 2050 i castellà i anglès com a llengües preferides.'),
      },
      alternatives: [
        {
          app: 'ebiblio',
          comparability: 'complementary',
          rationale: 'És un servei de referència en castellà que funciona sense ànim de lucre i sense publicitat.',
          tradeOffs: 'Fa una cosa completament diferent: presta llibres, no defineix paraules, i sí que tracta dades personals.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Tracta molt poques dades, i el security.txt en regla és un detall que institucions molt més grans no tenen. El problema és formal: distribuir una app sense cap política de privadesa enllaçada i amb una política corporativa que declara expressament que només cobreix el web deixa la persona usuària sense cap document de referència si algun dia la recollida canvia. La política tampoc no porta data de revisió, i no n’hi ha cap còpia a l’Internet Archive que permeti datar-la. El domini bloqueja les peticions automatitzades amb Cloudflare; l’hem llegida a través d’un servei de lectura i hem contrastat l’avís legal amb una còpia arxivada. No hem trobat cap sanció de l’AEPD ni cap filtració relacionada amb la RAE.',
        openQuestions: [
          'Per què la fitxa de l’App Store no enllaça cap política de privadesa ni cap web del desenvolupador?',
          'Hi ha alguna política específica de l’aplicació, i de quina data és la del web?',
          'El projecte LEIA recull mostres de veu a través de l’aplicació o només del web?',
        ],
      },
    },
    {
      slug: 'ebiblio',
      name: 'eBiblio',
      company: 'de-marque',
      categories: ['llibres-i-lectura', 'administracio-publica'],
      tagline: 'El préstec digital de les biblioteques públiques, amb dues polítiques de privadesa incompatibles per a la mateixa app',
      summary:
        'eBiblio és el servei de préstec de llibres electrònics, audiollibres, diaris i revistes de les biblioteques públiques espanyoles: gratuït, amb el carnet de la biblioteca i amb el Ministeri de Cultura com a responsable del tractament sota l’article 6.1.e del RGPD. La base jurídica és explícita i la política diu expressament que no es fan perfils. Però l’app és una versió de marca blanca de Cantook, de l’empresa quebequesa De Marque, i la política de Cantook admet coses que la del Ministeri no esmenta: l’històric de préstecs, els marcadors, els subratllats i les notes, i servidors al Quebec sobre Google Cloud.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Espanya (UE), amb tractament al Canadà',
      userBase: '239.502 usuaris únics amb alguna transacció i 4,8 milions de préstecs el 2025, en el conjunt del servei web i les apps.',
      links: {
        website: 'https://ebiblio.es/',
        privacyPolicy: 'https://guiadeuso.ebiblio.es/confluence/ebiblio-user/es/preguntas-frecuentes/condiciones-generales/aplicacion-movil/aplicacion-movil-politica-de-privacidad',
        appStore: 'https://apps.apple.com/es/app/id1541822581',
      },
      accountRequired: f('yes', 'official', ['ebiblio-privacy-policy', 'ebiblio-app-store'], 'Cal ser soci d’una biblioteca pública: l’alta al servei la fa la biblioteca, no la persona usuària des de l’app.'),
      openSource: f('no', 'official', ['ebiblio-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La legislació de biblioteques ha protegit tradicionalment amb molta cura què llegeix cada persona a la biblioteca pública. La política del Ministeri només reconeix el nom, l’identificador de soci i el correu; la de Cantook hi afegeix la llista de préstecs en curs, l’històric complet, les reserves, la llista de desitjos i fins i tot els subratllats i les notes que es fan dins els llibres.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['ebiblio-privacy-policy'], note: 'Procedent de la fitxa de soci de la biblioteca pública.' }),
        row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['ebiblio-privacy-policy', 'ebiblio-app-store', 'ebiblio-cantook-privacy'], note: 'Número de carnet de la biblioteca. La política del Ministeri el tracta com a dada identificativa, però l’etiqueta de l’App Store el declara com a dada NO vinculada amb la identitat.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['ebiblio-privacy-policy'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['ebiblio-privacy-policy', 'ebiblio-cantook-privacy'], note: 'No la data exacta, sinó la categoria per edat (adult o no), per aplicar les restriccions de préstec. La política de Cantook diu que la biblioteca transmet l’edat a De Marque.' }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['ebiblio-cantook-privacy'], note: 'Préstecs en curs, històric de préstecs, reserves i llista de desitjos, segons la política de Cantook. La política del Ministeri no els esmenta.' }),
        row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['ebiblio-cantook-privacy'], note: 'Marcadors, subratllats i notes fets dins els llibres, recollits per De Marque i desats als seus servidors del Quebec.' }),
        row('historial-de-cerca', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['ebiblio-cantook-privacy'], note: 'La política de Cantook diu que Google Analytics registra quines cerques s’han fet i quins continguts s’han consultat.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['ebiblio-app-store', 'ebiblio-cantook-privacy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['ebiblio-cantook-privacy', 'ebiblio-privacy-policy'], note: 'Galetes de procés, de seguretat i estadístiques, incloent-hi Google Analytics. És l’única transferència internacional que declara la política del Ministeri.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['ebiblio-cantook-privacy'], note: 'Navegador i aparell, recollits per Google Analytics.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['ebiblio-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['ebiblio-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar a través d’apps i llocs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['ebiblio-app-store'], 'Cap identificador publicitari declarat; el servei no té publicitat.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['ebiblio-cantook-privacy', 'ebiblio-privacy-policy'], 'Google Analytics, declarat tant per De Marque com pel Ministeri. No hi ha xarxes publicitàries.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['ebiblio-privacy-policy'], 'És un servei públic de préstec sense publicitat; la finalitat declarada és només permetre l’accés al préstec i les reserves.'),
        profiling: f('no', 'official', ['ebiblio-privacy-policy'], 'La política diu que «en ningún caso se realizarán tomas decisiones individuales automatizadas, incluida la elaboración de perfiles».'),
        aiTraining: unknown('Cap de les dues polítiques no en parla.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['ebiblio-privacy-policy'], 'La política diu que les dades no es cedeixen a tercers llevat dels casos previstos legalment, però el servei es presta a través d’un encarregat, Distribuidora Digital de Libros S.A.U., i de la seva matriu canadenca.'),
        intraGroupSharing: f('yes', 'official', ['ebiblio-cantook-privacy', 'de-marque-libranda', 'de-marque-about'], 'Les dades passen de l’encarregada espanyola a De Marque inc., que les desa en un centre de dades del Quebec. La política del Ministeri no ho declara.'),
        dataBrokerSales: f('no', 'official', ['ebiblio-cantook-privacy'], 'De Marque afirma que «ne vend pas, ne loue pas et n’exploite pas de manière commerciale» la informació recollida.'),
        internationalTransfers: f('yes', 'official', ['ebiblio-privacy-policy', 'ebiblio-cantook-privacy'], 'La política del Ministeri només declara la transferència als Estats Units derivada de Google Analytics, emparada en el Marc de Privadesa UE-EUA. La de Cantook hi afegeix el tractament al Canadà, que el Ministeri no esmenta i que es beneficiaria de la decisió d’adequació canadenca.', { mechanism: 'adequacy' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: f('no', 'official', ['ebiblio-cifres'], 'El que es publica és un informe estadístic anual d’ús del servei, no un informe sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['ebiblio-privacy-policy', 'ebiblio-cantook-privacy'], 'La política del Ministeri lliga la conservació a l’alta al servei i, després, al bloqueig «durante el tiempo establecido por la normativa aplicable»; la de Cantook diu només «tant et aussi longtemps qu’il est nécessaire». Cap de les dues no dona xifres.'),
        dataAfterDeletion: f('partial', 'official', ['ebiblio-privacy-policy'], 'Després de la baixa, les dades es conserven bloquejades durant els terminis de prescripció de les possibles responsabilitats i després es destrueixen.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['ebiblio-privacy-policy']),
        selfService: f('no', 'official', ['ebiblio-privacy-policy'], 'La baixa no es pot fer des de l’app ni des del web: «si desea solicitar la baja del servicio puede hacerlo dirigiéndose en cualquier momento a su biblioteca».'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Adreça’t a la biblioteca pública on ets soci, o a la xarxa de biblioteques de la teva comunitat autònoma, i demana la baixa del servei eBiblio.',
          'Si el que vols és exercir el dret de supressió davant el responsable, escriu al delegat de protecció de dades del Ministerio de Cultura a dpd@cultura.gob.es o presenta la sol·licitud a la seva seu electrònica.',
          'Per a les dades en mans de De Marque (històric de préstecs, marcadors, subratllats i notes), la política de Cantook remet a aide@demarque.com.',
        ],
        obstacles: 'No hi ha cap botó ni formulari dins l’app; la baixa depèn de cada xarxa autonòmica de biblioteques. Cap dels documents no fixa un termini de resposta.',
        dataRetained: 'Les dades es conserven bloquejades durant els terminis de prescripció de les responsabilitats derivades del servei.',
        sources: ['ebiblio-privacy-policy', 'ebiblio-cantook-privacy'],
      },
      userRights: {
        dataExport: unknown('Cap de les dues polítiques no descriu cap descàrrega de dades ni el dret de portabilitat de manera operativa.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['ebiblio-privacy-policy'], 'Articles 15 a 22 del RGPD davant el Ministerio de Cultura: seu electrònica, presencialment, per correu a dpd@cultura.gob.es o per escrit al delegat de protecció de dades, Plaza del Rey 1 de Madrid. Reclamació davant l’AEPD o l’autoritat autonòmica.', { url: 'mailto:dpd@cultura.gob.es' }),
      },
      controls: {
        adPersonalizationOptOut: na('El servei no mostra publicitat.'),
        telemetryOptOut: unknown('Cap dels documents no descriu com es rebutgen les galetes estadístiques i Google Analytics dins l’aplicació.'),
        granularControls: unknown('No hem pogut documentar cap panell de preferències de privadesa; les condicions d’ús de l’app no es podien llegir en el moment de la consulta.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem pogut examinar el flux d’alta, que depèn de cada xarxa de biblioteques.'),
      },
      security: {
        e2ee: na('És un servei de préstec i lectura; no hi ha comunicacions privades entre persones que puguin anar xifrades d’extrem a extrem.'),
        transportEncryption: f('yes', 'official', ['ebiblio-cantook-privacy'], 'La política de Cantook declara xifratge SSL amb autenticació de servidor, i ebiblio.es serveix la capçalera HSTS amb una vigència de dos anys.'),
        atRestEncryption: unknown('Cap document no ho descriu; només es parla d’un centre de dades segur al Quebec i d’allotjament a Google Cloud Platform.'),
        mfa: unknown('L’autenticació la fa cada xarxa de biblioteques, i cap document no esmenta cap segon factor.'),
        independentAudits: unknown('No hem trobat cap auditoria ni certificació.'),
        bugBounty: unknown(),
        vulnerabilityDisclosure: f('no', 'official', ['ebiblio-privacy-policy', 'ebiblio-cantook-privacy'], 'No hi ha security.txt a ebiblio.es, cultura.gob.es, demarque.com, cantook.com ni libranda.com, i cap dels documents no descriu cap canal per comunicar vulnerabilitats: només adreces genèriques de contacte.'),
      },
      alternatives: [
        {
          app: 'storytel',
          comparability: 'partial',
          rationale: 'Ofereix audiollibres i llibres electrònics amb una política molt més detallada i terminis de conservació numèrics.',
          tradeOffs: 'És de pagament, declara dades per rastrejar i el catàleg és comercial, no públic.',
        },
        {
          app: 'readera',
          comparability: 'complementary',
          rationale: 'Per llegir fitxers propis sense cap recollida de dades.',
          tradeOffs: 'No dona accés a cap catàleg ni pot obrir els préstecs protegits d’eBiblio.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'eBiblio fa moltes coses bé: base jurídica explícita, exclusió del perfilat, absència de publicitat i un informe anual d’ús. El problema és la desconnexió entre les tres capes del servei. La política que enllaça l’App Store és la del Ministeri i no esmenta ni De Marque, ni l’històric de préstecs, ni els subratllats i les notes, ni els servidors del Quebec: tot això només surt a la política de Cantook, en francès, que no és la que enllaça l’App Store. L’etiqueta de l’App Store, a més, declara l’identificador d’usuari com a dada no vinculada amb la identitat quan la política diu que és el número de carnet. Les condicions d’ús de l’aplicació no es podien llegir en el moment de la consulta. No hem trobat cap sanció ni cap filtració documentada relacionada amb eBiblio, De Marque, Cantook o Libranda.',
        openQuestions: [
          'Per què la política del Ministeri no declara el tractament al Canadà ni l’històric de lectura que sí que descriu la de Cantook?',
          'Qui és el delegat de protecció de dades de De Marque a la Unió Europea?',
          'Quan tornaran a estar disponibles les condicions d’ús de l’aplicació mòbil?',
          'Com es pot rebutjar Google Analytics des de l’aplicació?',
        ],
      },
    },
    {
      slug: 'galatea',
      name: 'Galatea',
      company: 'inkitt',
      categories: ['llibres-i-lectura'],
      tagline: 'Una editorial berlinesa que envia dades de lectura de novel·la romàntica a una vintena de xarxes de publicitat i atribució',
      summary:
        'Galatea serveix novel·la popular per capítols, amb àudio i efectes, dins una aplicació que es paga amb subscripció. La política d’Inkitt és detallada i està al dia, i inclou una llista llarga de proveïdors: Google Analytics, Firebase, AdMob, AppLovin, Taboola, Adjust, Branch, Meta i RevenueCat, entre d’altres, tots amb l’identificador publicitari i l’adreça IP. L’etiqueta de l’App Store ho confirma declarant compres, identificadors i dades d’ús per rastrejar. El compte serveix també per a una altra app del grup, i el document no diu enlloc com es dona de baixa.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Alemanya (UE)',
      links: {
        website: 'https://galatea.com/',
        privacyPolicy: 'https://galatea.com/privacy',
        appStore: 'https://apps.apple.com/es/app/id1380362212',
      },
      accountRequired: f('yes', 'official', ['galatea-privacy-policy'], 'El registre demana correu i contrasenya com a dades obligatòries, i opcionalment nom d’usuari i data de naixement; també es pot entrar amb un compte d’Apple o de Google.'),
      openSource: f('no', 'official', ['galatea-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El que es llegeix en una app de novel·la romàntica (gènere, ritme, hora del dia, fins a quin capítol s’arriba abans de pagar) és una dada íntima. Galatea mesura aquesta activitat amb identificadors publicitaris que Google, Meta, AppLovin, Taboola, Adjust i Branch comparteixen amb la resta del seu inventari, de manera que el perfil no es queda dins l’aplicació.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['galatea-privacy-policy', 'galatea-app-store'], note: 'Obligatòria per registrar-se. La política la inclou entre les dades que poden processar Google Analytics i Firebase.' }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['galatea-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['galatea-app-store', 'galatea-privacy-policy'], note: 'El mateix compte dona accés a CandyJar, l’altra aplicació d’Inkitt.' }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['compliment-legal'], sources: ['galatea-privacy-policy'], note: 'La política reconeix que l’oferta s’adreça també a joves i menors de 16 anys i que en aquest cas cal el consentiment dels pares.' }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['galatea-privacy-policy'], note: 'IDFA o GAID, tractat per AdMob, AppLovin, Adjust, Branch, Firebase i Google Analytics.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['galatea-app-store', 'galatea-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria', 'seguretat-i-prevencio-del-frau'], sources: ['galatea-privacy-policy'], note: 'Al web s’anonimitza després de la visita; a l’app la reben els proveïdors de publicitat i atribució.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['galatea-privacy-policy'], note: 'Deduïda de l’idioma del sistema i de la zona horària, no del GPS; AdMob també pot rebre informació de localització.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['galatea-privacy-policy'], note: 'Model, sistema operatiu, versió i xarxa.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-publicitaria'], sources: ['galatea-app-store', 'galatea-privacy-policy'], note: 'RevenueCat processa els rebuts, l’estat de la subscripció i els reemborsaments.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['galatea-privacy-policy'], note: 'Stripe, PayPal i Klarna per a les compres fetes fora de les botigues d’aplicacions.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte', 'mesura-publicitaria'], sources: ['galatea-app-store', 'galatea-privacy-policy'], note: 'Pantalles vistes, durada de la sessió, esdeveniments dins l’app i interaccions, tractats per Google Analytics i Firebase.' }),
        row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['galatea-app-store'], note: 'L’etiqueta el declara com a dada no vinculada amb la identitat.' }),
        row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['galatea-privacy-policy'], note: 'La política diu que Firebase s’utilitza també per «storing of chat messages».' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['galatea-app-store', 'galatea-privacy-policy'], note: 'Errors vinculats a la identitat segons l’etiqueta; rendiment, no.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['galatea-app-store', 'galatea-privacy-policy'], 'L’etiqueta declara compres, identificadors i dades d’ús com a dades utilitzades per rastrejar a través d’apps i llocs web d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['galatea-privacy-policy'], 'La política cita expressament l’identificador publicitari IDFA o GAID per a AdMob, AppLovin, Adjust, Branch, Firebase i Google Analytics.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['galatea-privacy-policy'], 'Google Analytics, Firebase, AdMob, Axon AI d’AppLovin, Taboola, Podscribe, Adjust, Branch, Meta, RevenueCat, Zendesk, Cloudflare, Iterable i OneTrust, entre d’altres.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['galatea-privacy-policy'], 'AdMob serveix publicitat dins l’app amb l’identificador publicitari, i Taboola, Meta i AppLovin hi afegeixen mesura de conversions i remàrqueting.'),
        profiling: f('partial', 'official', ['galatea-privacy-policy'], 'La política té un apartat sobre decisions automatitzades i perfilat al web i diu que l’avaluació de les dades d’ús de l’app es fa «exclusively on a statistical basis and is not personalized», però al mateix temps descriu publicitat basada en interessos.'),
        aiTraining: unknown('La política no parla d’entrenament de models amb les dades de les persones usuàries.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['galatea-privacy-policy'], 'Llista nominal de prop de vint destinataris, amb l’adreça de cada empresa i les categories de dades que reben.'),
        intraGroupSharing: f('yes', 'official', ['galatea-privacy-policy'], 'El compte de Galatea serveix per entrar a CandyJar, l’altra aplicació d’Inkitt, i a partir d’aquell moment s’hi apliquen els termes d’aquell servei.'),
        dataBrokerSales: unknown('La política no diu si ven dades; els proveïdors de publicitat que hi apareixen tenen models de negoci basats en dades de tercers.'),
        internationalTransfers: f('yes', 'official', ['galatea-privacy-policy'], 'Bona part dels proveïdors són als Estats Units. La política diu que s’hi han signat clàusules contractuals tipus i que cada proveïdor es revisa amb el delegat de protecció de dades.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència d’Inkitt.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['galatea-privacy-policy'], 'L’apartat de terminis només diu que les dades s’esborren o s’anonimitzen «as soon as it is no longer needed» i que els terminis legals de conservació poden allargar-ho. No hi ha cap xifra.'),
        dataAfterDeletion: unknown('La política no descriu què passa amb el compte ni amb el contingut després d’una baixa.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['galatea-privacy-policy'], 'Reconeix el dret de supressió de l’article 17 del RGPD i convida a adreçar-s’hi per correu.'),
        selfService: unknown('La política no descriu cap opció per eliminar el compte des de l’app ni des del web, i no l’hem poguda comprovar sense registrar-nos-hi.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Si tens una subscripció activa, cancel·la-la abans a l’App Store o al Google Play, perquè la baixa del compte no l’atura.',
          'Escriu a privacy@inkitt.com des de l’adreça del compte i demana la supressió a l’empara de l’article 17 del RGPD.',
          'Si no obtens resposta, adreça’t al delegat de protecció de dades d’Inkitt a dsb@freshcompliance.de.',
        ],
        obstacles: 'La política no publica cap camí d’autoservei ni cap termini de resposta.',
        sources: ['galatea-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['galatea-privacy-policy'], 'Reconeix la portabilitat de l’article 20 del RGPD i esmenta el lliurament de les dades en un fitxer comprimit, sempre per petició.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['galatea-privacy-policy', 'galatea-imprint'], 'Per correu a privacy@inkitt.com o al delegat de protecció de dades, FreshCompliance GmbH, a dsb@freshcompliance.de.', { url: 'mailto:privacy@inkitt.com' }),
      },
      controls: {
        adPersonalizationOptOut: unknown('El peu del web enllaça «Your Privacy Choices», però no n’hem pogut comprovar el contingut dins l’app.'),
        telemetryOptOut: unknown('La política no descriu cap interruptor per desactivar l’analítica dins l’app.'),
        granularControls: f('partial', 'official', ['galatea-privacy-policy'], 'Els permisos del sistema, com les notificacions, són opcionals i revocables, i el butlletí funciona amb doble confirmació; l’analítica i la publicitat, en canvi, no tenen cap control descrit.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem pogut examinar el flux d’alta ni el de la subscripció dins l’app.'),
      },
      security: {
        e2ee: na('L’app serveix un catàleg de lectura; no hi ha comunicacions privades entre persones que puguin anar xifrades d’extrem a extrem.'),
        transportEncryption: unknown('La política parla de mesures tècniques i organitzatives i de «strong encryption of data» per als proveïdors, però no detalla el transport.'),
        atRestEncryption: unknown(),
        mfa: unknown('La política no esmenta cap segon factor d’autenticació.'),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: f('partial', 'official', ['galatea-privacy-policy'], 'No hi ha cap canal específic per a investigadors, però la política demana avisar per l’adreça de contacte si se sospita d’un accés no autoritzat.'),
      },
      alternatives: [
        {
          app: 'wattpad',
          comparability: 'partial',
          rationale: 'També publica novel·la per capítols escrita per la comunitat, amb lectura gratuïta.',
          tradeOffs: 'És d’un grup coreà-canadenc i també es finança amb publicitat; no té l’àudio ni els efectes de Galatea.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Tècnicament, la política d’Inkitt és sòlida: està datada, identifica cada proveïdor amb adreça i categories de dades, i cita els articles del RGPD. Aquest detall permet veure l’abast del rastreig. L’apartat de menors diu que l’oferta «is also aimed at young people and children» i que no se’n fan perfils publicitaris, en una aplicació de romàntica que integra AdMob, AppLovin i Taboola. Cap domini d’Inkitt o de Galatea no consta a la llista de filtracions de Have I Been Pwned.',
        openQuestions: [
          'L’app té un botó per eliminar el compte o cal escriure a privacy@inkitt.com?',
          'Què inclou el panell «Your Privacy Choices» i quin efecte té sobre AdMob i Taboola?',
          'Hi ha alguna resolució d’una autoritat europea de protecció de dades sobre Inkitt?',
        ],
      },
    },
    {
      slug: 'anystories',
      name: 'AnyStories',
      company: 'read-asap',
      categories: ['llibres-i-lectura', 'comunitats-i-forums'],
      tagline: 'Novel·la per capítols des de les Illes Verges Britàniques, amb la llei de Hong Kong com a norma aplicable i el contingut públic per defecte',
      summary:
        'AnyStories ofereix milers de novel·les romàntiques i fantàstiques que es desbloquegen amb monedes. La política reconeix sis societats diferents entre responsables i col·laboradores, situades a les Illes Verges Britàniques, Hong Kong i el Regne Unit, sotmet la relació als tribunals de Hong Kong i barreja referències a la llei britànica, al RGPD i a «England and Wales» sense cap responsable ni representant a la Unió Europea. Diu també que el valor per defecte és fer públic el que s’hi publica i que la baixa només es pot demanar per correu, amb sis mesos de desactivació abans de l’esborrat.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Illes Verges Britàniques i Hong Kong (fora de la UE)',
      links: {
        website: 'https://www.anystories.app/',
        privacyPolicy: 'https://www.anystories.app/protocol.html?packageName=write.read.story.webnovel.book.anystories&appName=AnyStories&os=ios&lang=en&keys=privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id1500217654',
      },
      accountRequired: f('partial', 'official', ['anystories-privacy-policy'], 'Es pot navegar sense compte («If you’re just browsing our Site, we don’t collect any Personal Information about you»), però cal correu, nom d’usuari, data de naixement i contrasenya per llegir i publicar.'),
      openSource: f('no', 'official', ['anystories-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El catàleg és de romàntica, fantasia i temàtica LGBTIQ+, i el que s’hi llegeix i comenta pot revelar orientació sexual o interessos que la persona no faria públics. La política diu que el comportament per defecte és fer públic gairebé tot el que s’hi aporta i que amb els socis publicitaris es comparteixen l’adreça IP, l’identificador publicitari, la versió del dispositiu, el codi de país i el tipus de xarxa.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['anystories-privacy-policy', 'anystories-app-store'], note: 'Obligatòria per registrar-se. L’etiqueta de l’App Store la declara com a dada NO vinculada amb la identitat, cosa que contradiu la política.' }),
        row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'yes', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['anystories-app-store', 'anystories-privacy-policy'], note: 'Nom d’usuari, visible per a la resta de la comunitat.' }),
        row('contrasenya', 'yes', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['anystories-privacy-policy'] }),
        row('data-de-naixement', 'yes', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal'], sources: ['anystories-privacy-policy'], note: 'La política prohibeix el servei als menors de 13 anys.' }),
        row('nom-i-cognoms', 'optional', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['anystories-privacy-policy'], note: 'El nom real és voluntari i es mostra al perfil.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['anystories-privacy-policy'], note: 'Històries i comentaris. «Our default is almost always to make the information you provide through AnyStories public.» Després de la baixa queden publicats, anonimitzats.' }),
        row('identificador-publicitari', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['anystories-privacy-policy'], note: 'La política diu que amb els socis publicitaris es comparteixen «your IP, GAID, device version, country code, and network type».' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['anystories-app-store', 'anystories-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['anystories-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['anystories-privacy-policy'], note: 'Galetes, píxels i «clear gifs». La política admet que els anunciants hi posen galetes pròpies sobre les quals no té cap control.' }),
        row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['recomanacions-algoritmiques'], sources: ['anystories-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['anystories-app-store', 'anystories-privacy-policy'], note: 'Compres de monedes i de subscripcions.' }),
        row('dades-de-pagament', 'optional', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['anystories-privacy-policy'], note: 'La política diu que, si es paga amb un tercer, el número de targeta es dona directament a aquell proveïdor.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'mesura-i-analisi-dus'], sources: ['anystories-app-store', 'anystories-privacy-policy'], note: 'Pàgines visitades i esdeveniments; la política diu que se’n fan inferències «like what topics you may be interested in» per personalitzar també els anuncis.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['anystories-privacy-policy'], note: 'Tipus de navegador, sistema operatiu i versió del dispositiu.' }),
        row('xarxa-i-connectivitat', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['anystories-privacy-policy'], note: 'El tipus de xarxa es cedeix als socis publicitaris.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['anystories-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['anystories-app-store', 'anystories-privacy-policy'], 'L’etiqueta declara els identificadors com a dades per rastrejar; la política admet anuncis personalitzats basats en l’activitat «over time and across other websites and online services».'),
        advertisingIdentifiers: f('yes', 'official', ['anystories-privacy-policy'], 'La política cita el GAID entre les dades que es cedeixen als socis publicitaris; no anomena l’equivalent d’Apple.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['anystories-privacy-policy'], 'Socis publicitaris i d’analítica no identificats pel nom, amb galetes pròpies sobre les quals l’empresa diu no tenir «access to, or control over».'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['anystories-privacy-policy'], 'Anuncis personalitzats servits per tercers a partir de dades demogràfiques, d’ús i d’activitat, amb informes de rendiment per als anunciants.'),
        profiling: f('yes', 'official', ['anystories-privacy-policy'], 'Diu que fa inferències sobre els temes que poden interessar per personalitzar el contingut i els anuncis, i per «optimize the algorithm».'),
        aiTraining: unknown('La política no en parla, tot i que la fitxa de l’App Store anuncia llistes de lectura personalitzades amb intel·ligència artificial.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['anystories-privacy-policy'], 'Proveïdors de correu i de servidors, socis publicitaris i d’analítica, i cessions per obligació legal o en cas de fusió o venda.'),
        intraGroupSharing: f('yes', 'official', ['anystories-privacy-policy'], 'La política presenta READ ASAP LTD i HONGKONG ZHONGHE CO., LIMITED com a entitats afiliades que presten el servei, i n’afegeix quatre més com a col·laboradores.'),
        dataBrokerSales: f('no', 'official', ['anystories-privacy-policy'], 'Afirma «We do not sell any of your information to anyone» i que no lloga ni ven informació personal si no és anonimitzada.'),
        internationalTransfers: f('yes', 'official', ['anystories-privacy-policy'], 'Serveis prestats des de Singapur i servidors als Estats Units. No invoca cap mecanisme del RGPD: es basa en una autorització de la mateixa persona usuària i adverteix que les proteccions poden no ser equivalents.', { mechanism: 'derogation' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['anystories-privacy-policy'], 'L’únic termini concret és la desactivació de sis mesos abans de l’esborrat definitiu; per a la resta invoca interessos legítims, prevenció del frau i obligacions fiscals sense xifres.'),
        dataAfterDeletion: f('yes', 'official', ['anystories-privacy-policy'], 'Els comentaris i les aportacions públiques es queden al servei, anonimitzats, també després de l’esborrat definitiu.'),
        periods: [{ dataType: 'identificador-de-compte', period: 'Sis mesos de desactivació abans de l’esborrat definitiu', sources: ['anystories-privacy-policy'] }],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['anystories-privacy-policy']),
        selfService: f('partial', 'official', ['anystories-privacy-policy'], 'La política diu alhora que es té «the ability to delete your Account» i que per tancar-lo cal escriure a legal@AnyStories.app; no descriu cap botó concret.'),
        difficulty: 'hard',
        waitingPeriodDays: 180,
        requiresSupportContact: true,
        steps: [
          'Escriu a legal@AnyStories.app des de l’adreça del compte i demana el tancament i la supressió de les dades.',
          'El compte queda desactivat sis mesos: durant aquest temps es pot restaurar.',
          'Passats els sis mesos, l’empresa diu que esborra les dades personals, però els comentaris i les històries publicades es queden al servei anonimitzats.',
        ],
        obstacles: 'La baixa passa per un correu que s’avalua «case by case», i l’empresa es reserva conservar dades per prevenció del frau i obligacions legals.',
        dataRetained: 'Comentaris i aportacions públiques anonimitzades, i les dades que l’empresa consideri necessàries per a la detecció del frau i les obligacions fiscals i comptables.',
        sources: ['anystories-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política reconeix l’accés i la rectificació per correu, però no esmenta cap descàrrega ni la portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['anystories-privacy-policy'], 'Per correu a legal@AnyStories.app o a support@anystories.app, que és alhora l’adreça del «Data Protection Officer». No hi ha cap formulari ni cap termini de resposta, i el text no identifica cap autoritat de control.', { url: 'mailto:support@anystories.app' }),
      },
      controls: {
        adPersonalizationOptOut: f('no', 'official', ['anystories-privacy-policy'], 'La política no ofereix cap manera de desactivar la publicitat personalitzada: diu que qui no hi estigui d’acord no accepti la política i no faci servir el servei.'),
        telemetryOptOut: unknown('No descriu cap control sobre l’analítica.'),
        granularControls: f('partial', 'official', ['anystories-privacy-policy'], 'Es pot fer pública o privada part de la informació del perfil des de la configuració i cancel·lar les subscripcions al correu, però els correus de sistema i els avisos legals continuen arribant.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'official', ['anystories-privacy-policy'], 'El consentiment és de tot o res: «By accessing or using the AnyStories website and application, you are consenting that you unconditionally accept this Privacy Policy.» A més, el valor per defecte és publicar.'),
        darkPatternList: [
          {
            type: 'unbalanced-consent',
            severity: 'high',
            description: 'L’únic camí per no acceptar la publicitat personalitzada i les transferències internacionals és deixar de fer servir el servei; la política ho diu explícitament.',
            sources: ['anystories-privacy-policy'],
          },
          {
            type: 'hidden-exit',
            severity: 'medium',
            description: 'La baixa no es documenta com a opció de l’app: cal escriure a una adreça de correu i esperar sis mesos de desactivació.',
            sources: ['anystories-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: na('És un catàleg de lectura i comentaris públics; no hi ha comunicacions privades que puguin anar xifrades d’extrem a extrem.'),
        transportEncryption: f('yes', 'official', ['anystories-privacy-policy'], 'Diu que s’aplica xifratge a totes les transmissions: «we support encryption on all transmissions to protect Personal Information submitted on our Site».'),
        atRestEncryption: unknown('Només parla de mesures físiques, organitzatives, contractuals i tecnològiques en termes generals.'),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hem trobat cap canal per comunicar vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'wattpad',
          comparability: 'equivalent',
          rationale: 'Cobreix la mateixa necessitat (llegir i publicar novel·la per capítols amb una comunitat al voltant) amb una empresa sotmesa a la legislació canadenca i amb representació europea.',
          tradeOffs: 'També es finança amb publicitat i monedes, i el catàleg no és el mateix.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política barreja marcs legals: invoca la Data Protection Act britànica del 2018 i el RGPD «until such time as it might cease to apply in the HK», parla de clients residents fora d’«England and Wales» i alhora sotmet tot el contracte a la llei de Hong Kong. No hi ha responsable ni representant a la Unió Europea, i el «Data Protection Officer» és la mateixa bústia d’atenció general. La pàgina web de la política es carrega per JavaScript des d’una API de tercers (api.novelago.vip); l’hem llegida des d’aquesta API. Cap dels dominis del servei no consta a la llista de filtracions de Have I Been Pwned.',
        openQuestions: [
          'Quines xarxes publicitàries concretes integra l’app i com es demana el permís d’App Tracking Transparency?',
          'Per què l’etiqueta de l’App Store declara el correu i l’identificador d’usuari com a dades no vinculades amb la identitat si la política descriu un compte?',
          'Hi ha cap reclamació davant d’una autoritat europea contra READ ASAP LTD?',
        ],
      },
    },
    {
      slug: 'nextory',
      name: 'Nextory',
      company: 'nextory',
      categories: ['llibres-i-lectura', 'musica-i-audio'],
      tagline: 'Subscripció sueca d’audiollibres amb terminis escrits però amb una política espanyola que no s’ha actualitzat des del 2021',
      summary:
        'Nextory és una subscripció d’audiollibres i llibres electrònics amb versió espanyola pròpia. La política aplicable a Espanya és curta i llegible: té una taula de finalitats i bases jurídiques i xifres concretes de conservació (la subscripció més 36 mesos, 12 mesos per als registres incomplets i 6 anys per a les obligacions fiscals), però està datada el maig del 2021 i no diu res de transferències internacionals ni de mesures de seguretat. L’etiqueta de l’App Store no declara cap dada per rastrejar, però sí que declara el correu per a publicitat de tercers. La baixa és autoservei des de l’app, un cop cancel·lada la subscripció.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Suècia i Espanya (UE)',
      links: {
        website: 'https://nextory.com/es/',
        privacyPolicy: 'https://nextory.com/es/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id993578896',
      },
      accountRequired: f('yes', 'official', ['nextory-privacy-policy', 'nextory-cancel-subscription'], 'El servei és de subscripció i tot hi funciona amb un compte lligat a una adreça electrònica.'),
      openSource: f('no', 'official', ['nextory-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'L’historial de lectura i d’escolta d’anys de subscripció revela gustos, creences i a quines hores es llegeix o s’escolta. Nextory diu que el fa servir per recomanar i per millorar el servei a l’empara de l’interès legítim, i el conserva fins a 36 mesos després de donar-se de baixa.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['nextory-app-store', 'nextory-privacy-policy'], note: 'L’etiqueta la declara també sota «publicidad de terceros».' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['nextory-app-store', 'nextory-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['nextory-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['nextory-app-store'], note: 'L’etiqueta el declara sota «marketing del desarrollador».' }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['nextory-privacy-policy'], note: 'Historial de lectura i d’escolta, base de les recomanacions personalitzades, a l’empara de l’interès legítim.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['nextory-privacy-policy'], note: 'La política diu que no es guarda el número complet de la targeta.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['nextory-app-store', 'nextory-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['nextory-privacy-policy'], note: 'La política parla d’informació del dispositiu recollida amb galetes.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['nextory-app-store'], note: 'L’etiqueta declara «contenido del usuario» per a analítica i funcionament.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['nextory-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['nextory-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar a través d’apps i llocs d’altres empreses.'),
        advertisingIdentifiers: unknown('L’etiqueta no declara l’identificador publicitari i la política no l’esmenta.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['nextory-privacy-policy', 'nextory-app-store'], 'La política parla d’encarregats de màrqueting i telemàrqueting i de galetes, i l’etiqueta declara el correu per a publicitat de tercers, però no s’identifica cap proveïdor pel nom.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['nextory-privacy-policy', 'nextory-app-store'], 'La publicitat per correu, al web i a les xarxes socials es fa a l’empara de l’interès legítim, i l’etiqueta declara el correu per a publicitat de tercers.'),
        profiling: f('yes', 'official', ['nextory-privacy-policy'], 'Recomanacions personalitzades a partir de l’historial de lectura i escolta, amb l’interès legítim com a base jurídica.'),
        aiTraining: unknown('La política no en parla.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['nextory-privacy-policy'], 'Encarregats d’emmagatzematge, telemàrqueting i màrqueting, socis i llicenciataris de contingut, i autoritats quan la llei ho exigeix.'),
        intraGroupSharing: unknown('La política no descriu cap estructura de grup ni cap cessió a filials.'),
        dataBrokerSales: unknown('La política no diu si ven o cedeix dades a intermediaris.'),
        internationalTransfers: unknown('La política espanyola no té cap apartat de transferències internacionals ni esmenta cap mecanisme de garantia.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència de Nextory.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['nextory-privacy-policy'], 'Terminis numèrics: mentre la subscripció sigui activa i 36 mesos més, 12 mesos per als registres incomplets i 6 anys per a les obligacions fiscals.'),
        dataAfterDeletion: f('partial', 'official', ['nextory-privacy-policy'], 'Les dades de facturació es queden pels 6 anys de l’obligació fiscal, i la resta pot romandre fins als 36 mesos posteriors a la subscripció.'),
        periods: [
          { dataType: 'historial-de-visualitzacio', period: 'Mentre duri la subscripció i 36 mesos més', sources: ['nextory-privacy-policy'] },
          { dataType: 'dades-de-pagament', period: '6 anys per obligació fiscal', sources: ['nextory-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['nextory-delete-account']),
        selfService: f('yes', 'official', ['nextory-delete-account'], 'Hi ha un botó per eliminar el compte a l’app mòbil, dins els detalls del compte, un cop cancel·lada la subscripció.'),
        directUrl: 'https://support.nextory.se/hc/es-es/articles/15527405871762',
        difficulty: 'medium',
        requiresSupportContact: false,
        steps: [
          'Entra a «Mis páginas» del web, ves a «Suscripciones y pagos» i cancel·la la subscripció; espera el correu de confirmació.',
          'Obre l’app mòbil i ves als detalls del compte.',
          'Baixa fins al final i prem el botó per eliminar el compte.',
        ],
        obstacles: 'No es pot eliminar el compte sense cancel·lar abans la subscripció, i la cancel·lació s’ha de fer des del web (o a l’operadora, si es va contractar a través de Movistar).',
        dataRetained: 'Les dades de facturació, pels 6 anys de l’obligació fiscal.',
        sources: ['nextory-delete-account', 'nextory-cancel-subscription', 'nextory-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['nextory-privacy-policy'], 'La política reconeix la portabilitat entre els drets, però no descriu cap descàrrega automàtica.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['nextory-privacy-policy'], 'Per correu a ayuda@nextory.es, amb l’Agencia Española de Protección de Datos com a autoritat de reclamació.', { url: 'mailto:ayuda@nextory.es' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['nextory-privacy-policy'], 'La publicitat es basa en l’interès legítim, de manera que s’hi pot exercir el dret d’oposició, però la política no descriu cap interruptor dins l’app.'),
        telemetryOptOut: unknown(),
        granularControls: unknown('La política no descriu cap panell de preferències de privadesa.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem pogut examinar el flux d’alta ni el de cancel·lació des de dins.'),
      },
      security: {
        e2ee: na('És un servei de catàleg per subscripció; no hi ha comunicacions privades que puguin anar xifrades d’extrem a extrem.'),
        transportEncryption: unknown('La política no descriu les mesures tècniques de seguretat.'),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: f('no', 'official', ['nextory-privacy-policy'], 'No hi ha security.txt a nextory.com (la petició redirigeix i acaba en un error 404) ni cap canal descrit a la política per comunicar vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'storytel',
          comparability: 'equivalent',
          rationale: 'És l’altre gran servei suec d’audiollibres per subscripció, amb una política molt més detallada i terminis de conservació més curts.',
          tradeOffs: 'L’etiqueta de l’App Store de Storytel sí que declara dades per rastrejar, i el catàleg no és el mateix.',
        },
        {
          app: 'ebiblio',
          comparability: 'partial',
          rationale: 'Permet llegir llibres electrònics i escoltar audiollibres gratuïtament amb el carnet de la biblioteca pública.',
          tradeOffs: 'El catàleg és molt més limitat i els préstecs tenen cua i durada màxima.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política espanyola dona terminis numèrics, però té cinc anys i li falten apartats sencers: no hi ha transferències internacionals, ni mesures de seguretat, ni delegat de protecció de dades identificat com a tal. La barreja de domicilis també és confusa: hi consta el número de registre mercantil suec amb una adreça de Barcelona. L’etiqueta de l’App Store enllaça encara la versió sueca de la política. Cap domini de Nextory no consta a la llista de filtracions de Have I Been Pwned.',
        openQuestions: [
          'On s’allotgen les dades i amb quin mecanisme es cobreixen les transferències fora de l’EEE?',
          'Quins encarregats de màrqueting i de telemàrqueting fa servir Nextory?',
          'Hi ha alguna versió posterior al 2021 de la política espanyola?',
        ],
      },
    },
    {
      slug: 'storytel',
      name: 'Storytel',
      company: 'storytel',
      categories: ['llibres-i-lectura', 'musica-i-audio'],
      tagline: 'Una política amb terminis concrets, en una app que igualment declara identificadors i ús per rastrejar',
      summary:
        'Storytel és una subscripció sueca d’audiollibres i llibres electrònics. La seva política és la més treballada de la categoria: taules de categories de dades, finalitats i bases jurídiques, i terminis numèrics (24 mesos després de la subscripció, 12 per al màrqueting i 7 anys per a la comptabilitat). Té delegat de protecció de dades i un security.txt. Alhora, l’etiqueta de l’App Store declara identificadors i dades d’ús com a dades per rastrejar, i la política admet remàrqueting i publicitat basada en interessos amb proveïdors de màrqueting. La baixa és autoservei des de l’app, després de cancel·lar la subscripció.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Suècia (UE)',
      links: {
        website: 'https://www.storytel.com/',
        privacyPolicy: 'https://www.storytel.com/sg/en/documents/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id348177651',
      },
      accountRequired: f('partial', 'official', ['storytel-privacy-policy'], 'Hi ha un «preview mode» previ al registre en què ja es recullen preferències i els títols de la prestatgeria; per escoltar i llegir cal compte i subscripció.'),
      openSource: f('no', 'official', ['storytel-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La política enumera explícitament «your choices of titles», l’historial de cerca, el temps passat a l’app i les prestatgeries que es creen. Aquest historial, sumat al gènere, la composició familiar i les preferències que la persona vulgui donar, alimenta les recomanacions i també la publicitat personalitzada, i es conserva fins a dos anys després de deixar el servei.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['storytel-app-store', 'storytel-privacy-policy'], note: 'El nom o el sobrenom sempre és visible per a la resta de persones usuàries dins l’app.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['storytel-app-store', 'storytel-privacy-policy'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['storytel-privacy-policy'] }),
        row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['storytel-privacy-policy'], note: 'Adreça d’enviament si es compra maquinari, com el lector de Storytel.' }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['storytel-privacy-policy'], note: 'Voluntària, i obligatòria per verificar el descompte d’estudiant, juntament amb el nom de la universitat.' }),
        row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'recomanacions-algoritmiques'], sources: ['storytel-privacy-policy'], note: 'La política diu que el contingut suggerit es basa, entre altres coses, en l’idioma i el gènere.' }),
        row('situacio-familiar', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['storytel-privacy-policy'], note: 'La política parla de «family composition» entre les dades que es poden facilitar voluntàriament.' }),
        row('nivell-formatiu', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['storytel-privacy-policy'], note: 'Només per verificar la condició d’estudiant.' }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['storytel-privacy-policy'], note: 'Títols triats, temps passat a l’app, prestatgeries creades i historial d’escolta; la política l’inclou entre les dades que alimenten la publicitat personalitzada.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['recomanacions-algoritmiques'], sources: ['storytel-privacy-policy'] }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['storytel-privacy-policy'], note: 'Ressenyes i comentaris. Amb el perfil privat deixen de veure’s al perfil, però continuen visibles a la fitxa del llibre.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['storytel-privacy-policy'], note: 'Foto de perfil de les funcions socials.' }),
        row('identificador-publicitari', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['storytel-privacy-policy'], note: 'La política inclou l’«advertising ID» entre les dades tècniques de navegació.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['storytel-app-store', 'storytel-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['storytel-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal', 'prestacio-del-servei'], sources: ['storytel-privacy-policy'], note: 'Deduïda de la moneda de pagament o del país d’alta, no del GPS; serveix per aplicar els drets geogràfics del catàleg.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['storytel-privacy-policy'], note: 'Storytel diu que no tracta el número complet de la targeta, que queda en mans del proveïdor de pagament.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte', 'publicitat-personalitzada'], sources: ['storytel-app-store', 'storytel-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['storytel-privacy-policy'], note: 'Les galetes necessàries es basen en l’interès legítim i la resta, en el consentiment, gestionat amb un bàner.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['storytel-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['storytel-app-store'], 'L’etiqueta declara identificadors i dades d’ús com a dades utilitzades per rastrejar a través d’apps i llocs web d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['storytel-privacy-policy'], 'La política inclou l’«advertising ID» entre les dades tècniques que tracta.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['storytel-privacy-policy'], 'Proveïdors de màrqueting per a anuncis personalitzats i mesura de campanyes, plataformes de tercers com les xarxes socials i galetes analítiques, sense noms concrets a la política.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['storytel-privacy-policy'], 'Anuncis i ofertes personalitzats de Storytel i dels seus socis basats en preferències, historial d’escolta i comportament de navegació, amb el consentiment com a base jurídica i remàrqueting explícit.'),
        profiling: f('yes', 'official', ['storytel-privacy-policy'], 'Suggeriments de contingut i mur personalitzat a partir de l’idioma, el gènere, les preferències i l’historial de navegació i escolta.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models amb dades de les persones usuàries.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['storytel-privacy-policy'], 'Socis de negoci i proveïdors de contingut i de pagament, proveïdors informàtics, d’atenció al client i de seguretat, i proveïdors de màrqueting per a publicitat personalitzada.'),
        intraGroupSharing: f('yes', 'official', ['storytel-privacy-policy'], 'Les dades es poden compartir amb les empreses del grup Storytel per prestar el servei i per a les operacions diàries, i la responsabilitat es pot compartir amb una empresa del grup que faci màrqueting local.'),
        dataBrokerSales: unknown('La política no diu si ven dades; enumera els destinataris però no exclou expressament la venda.'),
        internationalTransfers: f('yes', 'official', ['storytel-privacy-policy'], 'Diu que procura tractar les dades dins la UE i l’EEE, però que hi pot haver tractament on hi hagi empreses del grup o proveïdors. Per a fora de l’EEE invoca decisions d’adequació de l’article 45 i clàusules contractuals tipus de l’article 46.2.c del RGPD.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència de Storytel.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['storytel-privacy-policy', 'storytel-delete-account'], 'Terminis numèrics per a cada finalitat: 24 mesos després de la subscripció, 24 mesos des de l’última consulta al servei d’atenció, 12 mesos per al màrqueting i 7 anys per a la fiscalitat.'),
        dataAfterDeletion: f('partial', 'official', ['storytel-privacy-policy'], 'Les dades administratives es queden els 7 anys de l’obligació fiscal, i les dades agregades i anonimitzades es poden conservar indefinidament.'),
        periods: [
          { dataType: 'historial-de-visualitzacio', period: '24 mesos després de la fi de la subscripció', sources: ['storytel-privacy-policy'] },
          { dataType: 'adreca-electronica', period: '12 mesos després de la fi de la subscripció, per a màrqueting', sources: ['storytel-privacy-policy'] },
          { dataType: 'dades-de-pagament', period: '7 anys per a obligacions fiscals i comptables', sources: ['storytel-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['storytel-delete-account']),
        selfService: f('yes', 'official', ['storytel-delete-account'], 'Des de l’app: Perfil > Configuració > Compte > Eliminar compte, sempre que abans s’hagi cancel·lat la subscripció.'),
        directUrl: 'https://support.storytel.com/hc/es-es/articles/360010376360',
        difficulty: 'medium',
        requiresSupportContact: false,
        steps: [
          'Cancel·la la subscripció: al web, des de la pàgina del compte, o a l’App Store si la vas contractar des de l’app.',
          'Inicia sessió a l’app amb el compte que vols eliminar.',
          'Ves a Perfil > Configuració > Compte > Eliminar compte.',
          'Si l’esborrat no es pot completar, envia la sol·licitud a privacy@storytel.com.',
        ],
        obstacles: 'No es pot eliminar el compte amb una subscripció activa, i el dret de supressió es pot limitar si hi ha una incidència oberta o un pagament pendent.',
        dataRetained: 'Les dades administratives i de facturació, durant els 7 anys de l’obligació fiscal, i les dades agregades ja no identificables.',
        sources: ['storytel-delete-account', 'storytel-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['storytel-privacy-policy'], 'Reconeix la portabilitat i el lliurament de les dades «in an electronically readable format», per petició a privacy@storytel.com.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['storytel-dpo-contact', 'storytel-privacy-policy'], 'Per correu a privacy@storytel.com, afegint «Para DPO» a l’assumpte per arribar al delegat de protecció de dades; l’autoritat de reclamació de referència és la sueca IMY o la del país de residència.', { url: 'mailto:privacy@storytel.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['storytel-privacy-settings', 'storytel-privacy-policy'], 'A Configuració > Privadesa hi ha les preferències de màrqueting directe i de màrqueting basat en interessos, i el consentiment de les galetes es gestiona amb el bàner del web.'),
        telemetryOptOut: unknown('No hem trobat cap interruptor per desactivar l’analítica d’ús dins l’app.'),
        granularControls: f('yes', 'official', ['storytel-privacy-settings'], 'Es pot fer el perfil privat, editar el nom, canviar la contrasenya i separar les preferències de màrqueting directe de les de màrqueting personalitzat.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'official', ['storytel-privacy-settings'], 'El perfil privat amaga les ressenyes del perfil, però les deixa visibles a la fitxa de cada llibre, de manera que el control no fa el que el nom fa esperar.'),
        darkPatternList: [
          {
            type: 'confusing-language',
            severity: 'low',
            description: 'L’opció de «perfil privat» no fa privades les ressenyes: continuen publicades a la pàgina de cada llibre.',
            sources: ['storytel-privacy-settings'],
          },
        ],
      },
      security: {
        e2ee: na('És un servei de catàleg per subscripció; no hi ha comunicacions privades entre persones que puguin anar xifrades d’extrem a extrem.'),
        transportEncryption: unknown('La política parla de mesures tècniques, administratives i físiques, però no detalla el xifratge del transport.'),
        atRestEncryption: unknown(),
        mfa: unknown('Ni la política ni els articles d’ajuda esmenten cap segon factor d’autenticació.'),
        independentAudits: unknown(),
        bugBounty: unknown('El security.txt remet a security.storytel.com, però no hem pogut confirmar si hi ha recompenses.'),
        vulnerabilityDisclosure: f('yes', 'official', ['storytel-security-txt'], 'Hi ha security.txt a storytel.com, amb security.storytel.com com a punt de contacte. La data de caducitat que hi consta, l’agost del 2025, ja ha passat.'),
      },
      alternatives: [
        {
          app: 'ebiblio',
          comparability: 'partial',
          rationale: 'Permet llegir i escoltar llibres gratuïtament amb el carnet de la biblioteca pública, sense publicitat.',
          tradeOffs: 'El catàleg és molt menor i els préstecs tenen llista d’espera i durada limitada.',
        },
        {
          app: 'nextory',
          comparability: 'equivalent',
          rationale: 'El mateix model de subscripció d’audiollibres, amb una etiqueta de l’App Store que no declara dades per rastrejar.',
          tradeOffs: 'La política de Nextory és molt més escarida i conserva les dades fins a 36 mesos després de la baixa.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política és completa i inclou una taula de bases jurídiques per finalitat, però la versió que enllaça l’App Store és la del mercat de Singapur, en anglès i modificada per última vegada el novembre del 2022; no n’hem trobat cap versió en castellà ni en català. El centre d’ajuda en castellà és més recent i coincideix amb els terminis. El security.txt existeix però ha caducat. Cap domini de Storytel no consta a la llista de filtracions de Have I Been Pwned.',
        openQuestions: [
          'Quins proveïdors de màrqueting i d’analítica fa servir Storytel, i quines dades els cedeix?',
          'Hi ha una versió en castellà de la política, i és la mateixa que la de Singapur?',
          'El compte admet algun segon factor d’autenticació?',
        ],
      },
    },
    {
      slug: 'kobo',
      name: 'Kobo Books',
      company: 'rakuten-kobo',
      categories: ['llibres-i-lectura', 'comerc-electronic'],
      tagline: 'Una botiga de llibres del grup Rakuten amb una política de privadesa que no s’ha actualitzat des del 2018',
      summary:
        'Kobo ven llibres electrònics i audiollibres i és l’alternativa principal a la botiga de Kindle. L’etiqueta de l’App Store no declara cap dada per rastrejar, i les transferències dins del grup es cobreixen amb les normes corporatives vinculants de Rakuten aprovades a Luxemburg. En canvi, la política porta la data d’1 de març del 2018 i la de galetes, del setembre del 2017: no parla de dades de lectura, ni de bases jurídiques per a l’analítica de l’aparell, ni de terminis més enllà de «fins que tanquis el compte». El centre d’ajuda sí que admet que «Kobo tracks your data, activity, and preferences» i explica que els comptes inactius durant tres anys es poden esborrar.',
      platforms: ['ios', 'android', 'web', 'windows', 'macos'],
      businessModel: 'commerce',
      jurisdiction: 'Canadà i Luxemburg (UE)',
      links: {
        website: 'https://www.kobo.com/',
        privacyPolicy: 'https://es.kobo.com/privacypolicy',
        appStore: 'https://apps.apple.com/es/app/id301259483',
      },
      accountRequired: f('yes', 'official', ['kobo-privacy-policy', 'kobo-deactivate-account'], 'Cal un compte de Kobo per comprar, sincronitzar la biblioteca i llegir als aparells; la política també diu que cal tenir com a mínim 16 anys.'),
      openSource: f('no', 'official', ['kobo-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Una biblioteca de Kobo és un historial de compra i de lectura acumulat durant anys, sincronitzat entre el lector, el mòbil i l’ordinador. La política del 2018 no descriu què es recull mentre es llegeix; el centre d’ajuda sí que reconeix el seguiment de l’activitat i ofereix un interruptor per desactivar-lo, dispositiu per dispositiu.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['kobo-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['kobo-app-store', 'kobo-privacy-policy'], note: 'La política diu que Rakuten Inc. emmagatzema l’adreça i la contrasenya xifrada perquè altres serveis del grup hi puguin accedir.' }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['kobo-privacy-policy'], note: 'Emmagatzemada xifrada per Rakuten Inc. com a part del sistema d’identificació del grup.' }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['kobo-privacy-policy'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['kobo-privacy-policy'], note: 'La política l’associa també a la verificació d’identitat, la solvència i la capacitat de pagament.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['kobo-privacy-policy'], note: 'Serveix també per aplicar els drets geogràfics i les limitacions d’ús del contingut.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['kobo-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['kobo-app-store', 'kobo-privacy-settings'], note: 'El centre d’ajuda reconeix que Kobo segueix les dades, l’activitat i les preferències, i ofereix desactivar-ho a «Help Improve our App».' }),
        row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['kobo-app-store'], note: 'L’etiqueta el declara com a dada no vinculada amb la identitat.' }),
        row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['kobo-app-store'], note: 'L’etiqueta declara «contenido del usuario» per al funcionament de l’app.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['kobo-privacy-policy'], note: 'La taula de la política de galetes inclou Google Analytics, Optimizely, Facebook, Google AdWords, Criteo, Bing i Crashlytics.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['kobo-app-store', 'kobo-privacy-policy'], note: 'Crashlytics consta entre les tecnologies de seguiment declarades.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['kobo-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar. Al web, en canvi, la política de galetes descriu galetes de focalització de Criteo, Facebook, Google AdWords i Bing.'),
        advertisingIdentifiers: unknown('Ni l’etiqueta ni la política esmenten l’identificador publicitari del dispositiu.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['kobo-privacy-policy'], 'La política de galetes llista Google Analytics, Optimizely, Facebook, Google AdWords, Criteo, Bing i Crashlytics, i adverteix que la taula no es manté actualitzada.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['kobo-privacy-policy'], 'La política descriu galetes «relacionadas con la focalización» per servir anuncis segons els interessos, i butlletins personalitzats del grup Rakuten amb consentiment; l’etiqueta de l’app no declara dades per a publicitat.'),
        profiling: f('partial', 'official', ['kobo-privacy-policy', 'kobo-privacy-settings'], 'La política parla d’ofertes personalitzades i d’anàlisis estadístiques, i el centre d’ajuda admet que es fa seguiment de l’activitat i les preferències per fer «Kobo services more useful to you». No descriu com es construeix el perfil.'),
        aiTraining: unknown('La política, del 2018, no en parla.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['kobo-privacy-policy'], 'Proveïdors de serveis i socis comercials de màrqueting, pagaments i analítica, socis minoristes del país de residència, autoritats i eventuals compradors del negoci.'),
        intraGroupSharing: f('yes', 'official', ['kobo-privacy-policy'], 'Kobo forma part del grup Rakuten i les dades del compte (correu i contrasenya xifrada) les emmagatzema Rakuten Inc., que permet que altres serveis del grup hi accedeixin.'),
        dataBrokerSales: unknown('La política no diu si ven o cedeix dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['kobo-privacy-policy'], 'Transferències al grup Rakuten als Estats Units, al Japó i al Canadà. Dins del grup s’apliquen les normes corporatives vinculants de Rakuten, aprovades amb l’autoritat luxemburguesa com a autoritat principal; per al Canadà s’invoca la decisió d’adequació 2002/2/CE.', { mechanism: 'bcrs' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència de Rakuten Kobo.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['kobo-privacy-policy', 'kobo-dormancy'], 'La política només diu que les dades es conserven fins que es tanca el compte. El centre d’ajuda hi afegeix un termini concret: els comptes sense activitat durant més de tres anys es poden esborrar.'),
        dataAfterDeletion: f('partial', 'official', ['kobo-privacy-policy'], 'Després de tancar el compte, Kobo diu que pot anonimitzar les dades, agregar-les i conservar-les així amb finalitats estadístiques.'),
        periods: [{ dataType: 'identificador-de-compte', period: 'Esborrat possible després de tres anys sense activitat, tret que hi hagi contingut comprat o crèdits', sources: ['kobo-dormancy'] }],
      },
      accountDeletion: {
        possible: f('partial', 'official', ['kobo-deactivate-account', 'kobo-privacy-policy'], 'El camí d’autoservei és una desactivació reversible, no un esborrat: «you won’t lose any items you purchased» i el compte es pot reobrir iniciant sessió. Per suprimir les dades cal exercir el dret per correu.'),
        selfService: f('yes', 'official', ['kobo-deactivate-account'], 'Des de Kobo.com, a «My Account» > «Account Settings» > «Account Status» > «Deactivate Account».'),
        directUrl: 'https://help.kobo.com/hc/en-us/articles/360044668774-Deactivate-and-reactivate-your-Kobo-account',
        difficulty: 'medium',
        requiresSupportContact: false,
        steps: [
          'Recorda que en tancar el compte deixaràs de poder sincronitzar la biblioteca entre aparells i de comprar a la botiga.',
          'Entra a Kobo.com amb el teu compte i obre «My Account» > «Account Settings».',
          'Baixa fins a «Account Status» i prem «Deactivate Account», i confirma-ho.',
          'Si el que vols és que s’esborrin les dades i no només tancar el compte, demana la supressió per correu a l’adreça de privadesa de la política.',
        ],
        obstacles: 'La desactivació és reversible: el compte es reobre iniciant-hi sessió, de manera que les dades no desapareixen. Els llibres comprats porten protecció anticòpia i no es poden traslladar lliurement a un altre servei.',
        dataRetained: 'Dades anonimitzades i agregades amb finalitats estadístiques; la política no concreta res més.',
        sources: ['kobo-deactivate-account', 'kobo-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['kobo-privacy-policy'], 'La política reconeix el dret a traslladar la informació personal, però no descriu cap descàrrega automàtica: cal demanar-ho per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['kobo-privacy-policy'], 'Per correu a l’adreça de privadesa que dona la política, advertint que potser caldrà aportar informació addicional. No hi ha formulari ni terminis, i no s’identifica cap delegat de protecció de dades.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['kobo-privacy-policy', 'kobo-privacy-settings'], 'Es poden cancel·lar els butlletins des de la configuració del compte i, a Europa, ajustar el seguiment a kobo.com/privacy; les galetes de focalització només es poden aturar esborrant-les al navegador.'),
        telemetryOptOut: f('yes', 'official', ['kobo-privacy-settings'], 'A l’app d’iOS, a Més > Configuració, l’interruptor «Help Improve our App» desactiva la compartició de dades d’ús. Al lector hi ha l’equivalent a «Estalvi d’energia i privadesa».'),
        granularControls: f('partial', 'official', ['kobo-privacy-settings'], 'L’interruptor de dades s’ha de desactivar en cada aparell per separat i es reinicia si es tanca la sessió o es restaura el lector.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'official', ['kobo-deactivate-account', 'kobo-privacy-settings'], 'L’única sortida d’autoservei és una desactivació que es desfà simplement tornant a iniciar sessió, i el control de les dades s’ha de repetir aparell per aparell i després de cada tancament de sessió.'),
        darkPatternList: [
          {
            type: 'hidden-exit',
            severity: 'medium',
            description: 'El botó que el centre d’ajuda presenta com a manera de tancar el compte només el desactiva: es reactiva iniciant-hi sessió i les dades es conserven.',
            sources: ['kobo-deactivate-account'],
          },
          {
            type: 'nagging',
            severity: 'low',
            description: 'La preferència de no compartir dades d’ús no se sincronitza: cal tornar-la a posar a cada aparell i cada vegada que es tanca la sessió.',
            sources: ['kobo-privacy-settings'],
          },
        ],
      },
      security: {
        e2ee: na('És una botiga i un lector de llibres; no hi ha comunicacions privades entre persones que puguin anar xifrades d’extrem a extrem.'),
        transportEncryption: unknown('La política parla de garanties administratives, tècniques i físiques, però no detalla el xifratge.'),
        atRestEncryption: f('partial', 'official', ['kobo-privacy-policy'], 'L’únic xifratge que la política concreta és el de la contrasenya emmagatzemada per Rakuten Inc.'),
        mfa: f('no', 'official', ['kobo-account-security'], 'L’article d’ajuda sobre seguretat del compte només parla de contrasenyes i d’avisos d’activitat sospitosa; no esmenta cap segon factor d’autenticació.'),
        independentAudits: unknown(),
        bugBounty: unknown('No hem pogut comprovar si el programa de recompenses de Rakuten cobreix Kobo; kobo.com bloqueja les peticions automatitzades i no n’hem pogut llegir el security.txt.'),
        vulnerabilityDisclosure: unknown('No hem pogut accedir a kobo.com/.well-known/security.txt ni hem trobat cap canal documentat.'),
      },
      alternatives: [
        {
          app: 'ebiblio',
          comparability: 'partial',
          rationale: 'Permet llegir llibres electrònics de franc amb el carnet de la biblioteca pública, sense comprar-los.',
          tradeOffs: 'El catàleg és més limitat, els préstecs caduquen i també fan servir protecció anticòpia.',
        },
        {
          app: 'readera',
          comparability: 'partial',
          rationale: 'Si els llibres ja es tenen en EPUB o PDF sense protecció, ReadEra els llegeix sense compte ni connexió.',
          tradeOffs: 'No té botiga ni sincronització pròpia i no pot obrir els llibres amb protecció anticòpia comprats a Kobo.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La documentació de Kobo és antiga: la política vigent és del març del 2018 i la de galetes, del setembre del 2017, i cap de les dues no descriu el tractament de les dades de lectura que el centre d’ajuda sí que reconeix. La botiga bloqueja les peticions automatitzades amb Cloudflare; hem llegit la política a l’Internet Archive (còpia del març del 2026 d’es.kobo.com) i els articles d’ajuda directament a help.kobo.com. L’article de seguretat del compte afirma que «There are no known data breaches on Rakuten Kobo», i cap domini de Kobo no consta a la llista de filtracions de Have I Been Pwned.',
        openQuestions: [
          'Quines dades de lectura recull el lector i l’app (progrés, temps de lectura, subratllats) i amb quina base jurídica?',
          'Què hi ha exactament a kobo.com/privacy per a les persones residents a la Unió Europea?',
          'El programa de recompenses de Rakuten a HackerOne cobreix els dominis de Kobo?',
          'Hi ha alguna versió posterior al 2018 de la política, o continua sent la vigent el 2026?',
        ],
      },
    },
    {
      slug: 'readera',
      name: 'ReadEra',
      company: 'readera',
      categories: ['llibres-i-lectura', 'utilitats'],
      tagline: 'Un lector de llibres que declara no recollir cap dada, ni tan sols estadístiques anònimes, a la versió d’iOS',
      summary:
        'ReadEra obre EPUB, PDF, MOBI, DjVu, Word i una dotzena de formats més i no demana registre ni connexió. L’etiqueta de l’App Store diu que el desenvolupador no recull cap dada, i la política d’iOS ho confirma: ni informació personal, ni informació sobre els fitxers, ni estadístiques tècniques anònimes. La versió d’Android, en canvi, sí que recull diagnòstics anònims, desactivables des de la configuració. La versió de pagament sincronitza contra el Google Drive de la mateixa persona, no contra servidors de l’empresa. El que falla és la identificació de l’empresa: l’editor de l’App Store és una societat búlgara i les polítiques parlen d’una «Readera LLC» que no s’identifica enlloc.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Bulgària (UE)',
      userBase: 'Més de 40 milions de baixades, segons el mateix servei.',
      links: {
        website: 'https://readera.org/',
        privacyPolicy: 'https://readera.org/privacy-ios',
        appStore: 'https://apps.apple.com/es/app/id1669188337',
      },
      accountRequired: f('no', 'official', ['readera-privacy-ios', 'readera-website'], 'La política diu que l’app «does not require the user to provide any personal, financial, or other private information», i el web promet lectura «without registration».'),
      openSource: f('no', 'official', ['readera-app-store'], 'No hem trobat cap repositori públic del codi.', { licence: 'Privativa' }),
      dataSummary:
        'Els llibres es queden al dispositiu, no s’envia cap informació sobre quins fitxers s’obren i, a iOS, ni tan sols hi ha telemetria. La sincronització de la versió Premium passa pel Google Drive de la persona usuària, de manera que les dades les té Google i ReadEra no hi accedeix.',
      dataCollection: [
        row('fitxers-i-documents', 'no', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['readera-privacy-ios'], note: 'La política és explícita: «user files or any information about the files are not collected or transmitted by the application».' }),
        row('dades-de-diagnostic', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['readera-privacy-ios', 'readera-app-store'], note: 'A iOS no se’n recull cap; a Android sí (errors, rendiment i ús de funcions), i es poden desactivar des de la configuració.' }),
        row('identificador-de-dispositiu', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['readera-app-store'], note: 'L’etiqueta declara que no es recull cap dada.' }),
        row('interaccions-i-us', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['readera-privacy-ios', 'readera-app-store'], note: 'A la versió d’Android sí que es recullen estadístiques anònimes d’ús de les funcions.' }),
        row('historial-de-compres', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['readera-premium'], note: 'La compra de ReadEra Premium la tramita la botiga d’aplicacions; la política no en parla.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['readera-app-store', 'readera-privacy-ios'], 'L’etiqueta declara que no es recull cap dada i la política afirma que no se’n transfereix cap a tercers.'),
        advertisingIdentifiers: f('no', 'official', ['readera-app-store', 'readera-website'], 'No hi ha publicitat a l’app i l’etiqueta no declara cap identificador.'),
        thirdPartyTrackersPresent: f('no', 'official', ['readera-privacy-ios', 'readera-website'], 'La política diu que l’app no transfereix dades a tercers i el web promet lectura sense anuncis.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['readera-website', 'readera-app-store'], 'L’app no mostra publicitat i no recull cap dada que s’hi pugui destinar.'),
        profiling: f('no', 'official', ['readera-privacy-ios'], 'Sense recollida de dades no hi ha perfilat possible.'),
        aiTraining: f('no', 'official', ['readera-privacy-ios'], 'Els fitxers no surten del dispositiu, de manera que no poden servir per entrenar cap model.'),
      },
      sharing: {
        thirdPartySharing: f('no', 'official', ['readera-privacy-ios'], '«The application does not transfer data to third parties.»'),
        intraGroupSharing: na('READERA EOOD és una societat unipersonal sense grup empresarial conegut.'),
        dataBrokerSales: f('no', 'official', ['readera-privacy-ios'], 'No hi ha cap dada recollida que es pugui vendre.'),
        internationalTransfers: f('no', 'official', ['readera-privacy-ios'], 'L’app treballa amb fitxers locals i no envia dades enlloc. La sincronització de la versió Premium va al Google Drive de la mateixa persona usuària.', { mechanism: 'none' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència; en un servei sense comptes ni dades al servidor, tampoc hi hauria peticions a què respondre.'),
      },
      retention: {
        definedPeriods: na('L’app no guarda cap dada als servidors de l’empresa, de manera que no hi ha cap termini de conservació a definir.'),
        dataAfterDeletion: na('No hi ha compte ni dades al servidor que puguin quedar després d’una baixa.'),
      },
      accountDeletion: {
        possible: na('No hi ha cap compte que es pugui eliminar: n’hi ha prou de desinstal·lar l’app.'),
        selfService: na('No hi ha cap compte.'),
        difficulty: 'easy',
        requiresSupportContact: false,
        steps: [
          'Desinstal·la l’app: els llibres i les anotacions són al dispositiu.',
          'Si has fet servir ReadEra Premium amb sincronització, esborra també la carpeta corresponent del teu Google Drive.',
        ],
        dataRetained: 'Cap al costat de ReadEra. Les còpies sincronitzades són al Google Drive de la mateixa persona usuària.',
        sources: ['readera-privacy-ios', 'readera-premium'],
      },
      userRights: {
        dataExport: na('No hi ha cap dada al servidor que es pugui exportar; els llibres i les anotacions ja són fitxers del dispositiu.'),
        exportFormatQuality: 'open',
        rightsExercise: f('partial', 'official', ['readera-privacy-ios'], 'L’únic canal és el correu support@readera.org. La política no descriu els drets del RGPD ni identifica cap responsable amb domicili.', { url: 'mailto:support@readera.org' }),
      },
      controls: {
        adPersonalizationOptOut: na('L’app no mostra publicitat.'),
        telemetryOptOut: f('yes', 'official', ['readera-privacy-android', 'readera-privacy-ios'], 'A iOS no hi ha telemetria; a Android, les estadístiques anònimes es poden desactivar des de la configuració de l’app.'),
        granularControls: f('partial', 'official', ['readera-privacy-android'], 'L’únic control de privadesa documentat és l’interruptor de les estadístiques anònimes de la versió d’Android.'),
        defaultPosture: 'protective',
        darkPatterns: f('no', 'editorial', ['readera-website', 'readera-app-store'], 'No hem detectat cap patró fosc: no hi ha registre, ni publicitat, ni consentiments a gestionar. No hem pogut examinar el flux de compra de la versió Premium.'),
      },
      security: {
        e2ee: na('L’app no transmet contingut: els fitxers no surten del dispositiu.'),
        transportEncryption: na('L’app funciona sense connexió i no envia dades a cap servidor propi.'),
        atRestEncryption: unknown('La política no diu si els fitxers i les anotacions del dispositiu es xifren més enllà del que ja fa el sistema operatiu.'),
        mfa: na('No hi ha compte que protegir amb un segon factor.'),
        independentAudits: unknown('No hem trobat cap auditoria independent del codi.'),
        bugBounty: unknown(),
        vulnerabilityDisclosure: f('partial', 'official', ['readera-privacy-ios'], 'No hi ha security.txt ni cap procediment publicat; l’únic canal és l’adreça general support@readera.org.'),
      },
      alternatives: [
        {
          app: 'adobe-acrobat-reader',
          comparability: 'partial',
          rationale: 'També obre PDF i documents al dispositiu.',
          tradeOffs: 'Empeny cap al núvol i cap al compte d’Adobe, i recull molta més informació.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'L’única contradicció és documental: l’editor que consta a l’App Store és READERA EOOD, una societat búlgara, però totes dues polítiques atribueixen el desenvolupament a «Readera LLC», sense país ni domicili, i cap document no identifica un responsable del tractament amb adreça postal ni esmenta els drets del RGPD. Com que l’app no recull dades, l’impacte pràctic és baix, però una empresa establerta a la Unió Europea està obligada a donar aquesta informació. Cap domini de ReadEra no consta a la llista de filtracions de Have I Been Pwned.',
        openQuestions: [
          'Quina relació hi ha entre READERA EOOD i «Readera LLC», i qui és el responsable del tractament?',
          'La versió Premium d’iOS també sincronitza amb Google Drive, o fa servir iCloud?',
          'L’app d’iOS fa alguna petició de xarxa en obrir-se, tot i el que diu la política?',
        ],
      },
    },
    {
      slug: 'eprex',
      name: 'ePrex',
      company: 'fundacio-summa-humanitate',
      categories: ['llibres-i-lectura'],
      tagline: 'Una app de pregària gratuïta i sense anuncis que a l’App Store declara rastreig, amb una política que no parla de l’app',
      summary:
        'ePrex reuneix la litúrgia de les hores, l’evangeli del dia, el rosari i altres oracions, funciona sense connexió i la mantenen una trentena de persones voluntàries. El web promet que tot és «gratis y sin publicidad». L’etiqueta de l’App Store, en canvi, declara dades de contacte, contingut de l’usuari, identificadors, dades d’ús i diagnòstics com a dades utilitzades per rastrejar a través d’apps i llocs d’altres empreses. I la política que la fitxa enllaça és la del web de donacions de la fundació: parla de DNI i dades bancàries i no esmenta enlloc el tractament de l’aplicació.',
      platforms: ['ios', 'android'],
      businessModel: 'donations',
      jurisdiction: 'Espanya (UE)',
      userBase: 'Més de 5 milions de baixades i uns 50.000 usuaris nous cada mes, en més de 180 països, segons el projecte.',
      links: {
        website: 'https://eprex.app/',
        privacyPolicy: 'https://saints.es/privacidad/',
        terms: 'https://saints.es/aviso-legal',
        appStore: 'https://apps.apple.com/es/app/id954001499',
      },
      accountRequired: unknown('Ni la fitxa de l’App Store ni el web diuen si cal registrar-se; l’etiqueta declara l’adreça electrònica, i les funcions de notes i plans de pregària fan pensar en un compte o una sincronització.'),
      openSource: f('no', 'official', ['eprex-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El que una persona resa, a quina hora i quines intencions apunta al quadern de l’app són conviccions religioses, una categoria especial de dades segons el RGPD. L’etiqueta de l’App Store declara el contingut de l’usuari i les dades d’ús entre les que es fan servir per rastrejar, i no hi ha cap document que expliqui per a què.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['eprex-app-store'], note: 'L’etiqueta la declara vinculada a la identitat i entre les dades utilitzades per rastrejar. La política enllaçada no l’esmenta en relació amb l’app.' }),
        row('conviccions-i-opinions', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['eprex-app-store', 'eprex-website'], note: 'El simple ús de l’app revela la pertinença religiosa, i el web anuncia quaderns de notes i intencions de pregària. Cap document no diu com es tracten.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['eprex-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['eprex-app-store'] }),
        row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['eprex-app-store', 'eprex-website'], note: 'L’etiqueta declara «contenido del usuario»: notes, intencions i probablement els subratllats de les lectures.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['eprex-app-store'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['eprex-privacy-policy'], note: 'Només per a les donacions: la política parla de dades bancàries i mètodes de pagament, comunicats a bancs i entitats financeres.' }),
        row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['eprex-privacy-policy'], note: 'La política de la fundació demana nom, cognoms i DNI per a la gestió de les donacions.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['eprex-app-store'], 'L’etiqueta declara dades de contacte, contingut de l’usuari, identificadors, dades d’ús i diagnòstics com a dades utilitzades per rastrejar-te a través d’apps i llocs web d’altres empreses.'),
        advertisingIdentifiers: unknown('L’etiqueta declara «identificadores» sense concretar si inclouen l’identificador publicitari.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['eprex-app-store', 'eprex-website'], 'La declaració de rastreig implica la presència de components de tercers, però ni el web ni la política n’identifiquen cap, i el web insisteix que no hi ha publicitat.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['eprex-website', 'eprex-aciprensa'], 'Tant el web del projecte com el reportatge d’ACI Prensa afirmen que l’app és gratuïta i sense publicitat. Queda sense explicar per què l’etiqueta declara rastreig.'),
        profiling: unknown('Cap document no descriu cap perfilat, però l’etiqueta declara dades per a «personalización del producto».'),
        aiTraining: unknown('No hi ha cap document que en parli.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['eprex-app-store', 'eprex-privacy-policy'], 'L’etiqueta implica compartició amb tercers per al rastreig; la política només documenta comunicacions a administracions públiques i a entitats financeres, i només per a les donacions.'),
        intraGroupSharing: na('La Fundación Summa Humanitate no forma part de cap grup empresarial.'),
        dataBrokerSales: unknown('Cap document no ho tracta.'),
        internationalTransfers: unknown('La política no té cap apartat de transferències internacionals.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència; en una fundació d’aquesta mida tampoc no és habitual.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['eprex-privacy-policy'], 'La política lliga els terminis a la vigència de la relació de donació, a la prescripció de les responsabilitats contractuals i a la revocació del consentiment. No diu res de les dades de l’app.'),
        dataAfterDeletion: unknown('No hi ha cap document que expliqui què passa amb les dades de l’aplicació.'),
      },
      accountDeletion: {
        possible: unknown('No hem pogut confirmar si l’app té compte ni, per tant, si es pot eliminar.'),
        selfService: unknown('No hi ha cap document que ho descrigui.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Escriu a dpd@humanitate.org, l’adreça del delegat de protecció de dades de la fundació, i demana la supressió de les teves dades.',
          'Indica-hi que et refereixes a l’aplicació ePrex, perquè la política publicada està escrita per a les donacions del web.',
          'La política es compromet a respondre en el termini d’un mes.',
        ],
        obstacles: 'No hi ha cap document que descrigui el tractament de l’app ni cap camí de baixa dins l’aplicació.',
        sources: ['eprex-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['eprex-privacy-policy'], 'La política reconeix la portabilitat entre els drets, però no ofereix cap descàrrega i no es refereix a les dades de l’app.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['eprex-privacy-policy', 'eprex-legal-notice'], 'Per correu a dpd@humanitate.org o per escrit al carrer Villa de Marín 24 de Madrid, amb resposta en un mes.', { url: 'mailto:dpd@humanitate.org' }),
      },
      controls: {
        adPersonalizationOptOut: na('L’app no mostra publicitat, segons el web del projecte i la premsa.'),
        telemetryOptOut: unknown('No hi ha cap document que descrigui un interruptor per desactivar l’analítica.'),
        granularControls: unknown('No hi ha cap document sobre la configuració de privadesa de l’app.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem pogut examinar el flux d’alta ni el de donació dins l’app.'),
      },
      security: {
        e2ee: na('És una app de lectura i pregària; no hi ha comunicacions privades entre persones que puguin anar xifrades d’extrem a extrem.'),
        transportEncryption: unknown('Cap document no descriu les mesures tècniques.'),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hem trobat cap canal per comunicar vulnerabilitats.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'El projecte no té afany comercial (és gratuït, sense anuncis, mantingut per voluntariat i finançat amb donacions), però la documentació legal és deficient. La política que l’App Store dona com a política de privadesa de l’app és la del web de donacions i no esmenta l’aplicació en cap moment. A més, l’etiqueta declara rastreig de contingut de l’usuari i de dades de contacte en una app que, de fet, tracta conviccions religioses. També hi ha una incoherència d’editor: la fitxa de l’App Store surt a nom de «Saints App (FUNDACION EDUCATIO IMPRIMIS)» i l’avís legal del web identifica la Fundación Summa Humanitate. No hi consta cap domini del projecte a la llista de filtracions de Have I Been Pwned.',
        openQuestions: [
          'Quins components de tercers fa servir l’app i per què l’etiqueta declara rastreig si no hi ha publicitat?',
          'Cal registrar-se per fer servir les notes, les intencions i els plans de pregària, i on es desen?',
          'Quina relació hi ha entre la Fundación Summa Humanitate, la Fundación Educatio Imprimis i la Fundación CARI FILII?',
          'Hi ha alguna política de privadesa específica de l’aplicació que no hàgim sabut trobar?',
        ],
      },
    },
    {
      slug: 'novelo',
      name: 'NovelO',
      company: 'kynix-group',
      categories: ['llibres-i-lectura'],
      tagline: 'Novel·la per capítols des de Hong Kong, amb una subscripció de 22,99 € a la setmana i una política de nou paràgrafs',
      summary:
        'NovelO és una aplicació de novel·la romàntica per capítols publicada per una societat de Hong Kong. La política és curta però detalla què es recull: nom d’usuari i contrasenya, estat VIP, llibres i progrés de lectura, transaccions d’Apple, model del dispositiu, adreça IP i identificadors publicitaris, amb Adjust per mesurar campanyes. L’etiqueta de l’App Store, en canvi, no declara cap dada vinculada a la identitat, tot i que la política descriu un compte. La baixa és autoservei des del menú de l’app, però la política avisa que no cancel·la la subscripció d’Apple, que és de 22,99 € setmanals o 99,90 € anuals.',
      platforms: ['ios'],
      businessModel: 'subscription',
      jurisdiction: 'Hong Kong (fora de la UE)',
      links: {
        website: 'https://novelooo.com/',
        privacyPolicy: 'https://novelooo.com/privacy.html',
        terms: 'https://novelooo.com/service.html',
        appStore: 'https://apps.apple.com/es/app/id6801094167',
      },
      accountRequired: f('yes', 'official', ['novelo-privacy-policy'], 'La política descriu un compte amb nom d’usuari i contrasenya i la sincronització entre dispositius.'),
      openSource: f('no', 'official', ['novelo-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La combinació de progrés de lectura, estat VIP i identificadors publicitaris permet saber quines històries enganxen una persona i fins on llegeix abans de pagar. La política admet que aquestes dades es poden transferir i emmagatzemar en servidors fora del país de residència, i no invoca cap mecanisme del RGPD.',
      dataCollection: [
        row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['novelo-privacy-policy', 'novelo-app-store'], note: 'La política parla d’un nom d’usuari; l’etiqueta no declara cap dada vinculada a la identitat.' }),
        row('contrasenya', 'yes', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['novelo-privacy-policy'] }),
        row('historial-de-visualitzacio', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['novelo-privacy-policy'], note: 'Llibres i progrés de lectura, sincronitzats entre dispositius.' }),
        row('historial-de-compres', 'yes', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['novelo-privacy-policy'], note: 'Informació de transaccions d’Apple i estat VIP.' }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['novelo-privacy-policy'], note: 'Adjust els fa servir per mesurar instal·lacions i el rendiment de les campanyes; la política esmenta l’avís d’App Tracking Transparency.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria', 'seguretat-i-prevencio-del-frau'], sources: ['novelo-app-store', 'novelo-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['novelo-privacy-policy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['novelo-privacy-policy'], note: 'Model i sistema operatiu.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'mesura-publicitaria'], sources: ['novelo-app-store', 'novelo-privacy-policy'], note: 'Pàgines visitades, esdeveniments d’interacció i rendiment. L’etiqueta declara les dades d’ús com a dades per rastrejar.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['novelo-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['novelo-app-store', 'novelo-privacy-policy'], 'L’etiqueta declara les dades d’ús com a dades utilitzades per rastrejar, i la política reconeix que es demana el permís d’App Tracking Transparency quan Apple ho exigeix.'),
        advertisingIdentifiers: f('yes', 'official', ['novelo-privacy-policy'], 'La política enumera els identificadors publicitaris entre les dades del dispositiu que recull i les vincula a la mesura de campanyes amb Adjust.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['novelo-privacy-policy'], 'Adjust per a l’atribució de campanyes, més proveïdors d’allotjament, emmagatzematge i seguretat no identificats pel nom.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['novelo-privacy-policy'], 'La política només descriu la mesura de campanyes amb Adjust, no la personalització d’anuncis dins l’app; tanmateix, l’etiqueta declara «datos de publicidad».'),
        profiling: unknown('La política no descriu cap perfilat, tot i que la fitxa de l’App Store parla d’una biblioteca personalitzada.'),
        aiTraining: unknown('La política no en parla.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['novelo-privacy-policy'], 'Apple per als pagaments i les compres integrades, Adjust per a l’atribució i proveïdors d’allotjament, emmagatzematge i seguretat.'),
        intraGroupSharing: unknown('La política no descriu cap estructura de grup.'),
        dataBrokerSales: unknown('La política no diu si ven o cedeix dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['novelo-privacy-policy'], 'Diu que les dades es poden transferir, tractar i emmagatzemar en servidors fora del país de residència, sense invocar cap mecanisme de garantia del RGPD ni identificar els països.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['novelo-privacy-policy'], 'Diu que les dades es conserven mentre el compte sigui actiu i que després la conservació queda «limitada per registres, frau i obligacions legals», sense cap xifra.'),
        dataAfterDeletion: f('partial', 'official', ['novelo-privacy-policy'], 'Reconeix que després d’eliminar el compte es conserven dades per a registres, prevenció del frau i obligacions legals.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['novelo-privacy-policy']),
        selfService: f('yes', 'official', ['novelo-privacy-policy'], 'Hi ha un camí dins l’app: «Mine» > «About Us» > «Delete Account».'),
        difficulty: 'medium',
        requiresSupportContact: false,
        steps: [
          'Cancel·la abans la subscripció des dels Ajustos de l’iPhone: eliminar el compte no l’atura i es continuaria cobrant.',
          'A l’app, ves a «Mine» > «About Us» > «Delete Account».',
          'Confirma-ho: la política diu que l’esborrat és permanent.',
        ],
        obstacles: 'La subscripció costa 22,99 € a la setmana i no es cancel·la amb la baixa del compte; la política avisa que cal fer-ho a Apple per separat.',
        dataRetained: 'Les dades que l’empresa consideri necessàries per a registres, prevenció del frau i obligacions legals.',
        sources: ['novelo-privacy-policy', 'novelo-app-store'],
      },
      userRights: {
        dataExport: unknown('La política no esmenta cap descàrrega ni la portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['novelo-privacy-policy'], 'L’únic canal és el correu o@novelooo.com, i els drets es reconeixen «segons la jurisdicció», sense identificar cap autoritat de control ni cap termini.', { url: 'mailto:o@novelooo.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['novelo-privacy-policy'], 'L’únic control documentat és l’avís d’App Tracking Transparency d’Apple, que la política diu que es mostra quan Apple ho exigeix.'),
        telemetryOptOut: unknown('No hi ha cap interruptor descrit per desactivar l’analítica.'),
        granularControls: unknown('La política no descriu cap panell de preferències.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem pogut examinar el flux de subscripció des de dins, tot i que el preu setmanal i la conversió a monedes són els habituals d’aquest gènere d’aplicacions.'),
      },
      security: {
        e2ee: na('És un catàleg de lectura; no hi ha comunicacions privades entre persones que puguin anar xifrades d’extrem a extrem.'),
        transportEncryption: unknown('La política no descriu les mesures tècniques de seguretat.'),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown('No hem trobat cap canal per comunicar vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'wattpad',
          comparability: 'partial',
          rationale: 'Cobreix la mateixa necessitat de llegir novel·la per capítols, amb lectura gratuïta i una empresa amb representació a la Unió Europea.',
          tradeOffs: 'També es finança amb publicitat i el catàleg és diferent.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'L’app és nova (la fitxa de l’App Store es va publicar el 2026) i la política, datada l’agost del 2026, és breu però clara sobre què es recull. En canvi, no indica la base jurídica, els terminis, el mecanisme de transferència ni l’autoritat de control, i no hi consta cap representant a la Unió Europea per a una empresa de Hong Kong que s’adreça al mercat espanyol. L’etiqueta contradiu la política: la política descriu un compte i l’etiqueta no declara cap dada vinculada a la identitat. Cap domini del servei no consta a la llista de filtracions de Have I Been Pwned.',
        openQuestions: [
          'Quin és el preu real per capítol i com es converteixen les monedes?',
          'Per què l’etiqueta de l’App Store no declara cap dada vinculada a la identitat si la política descriu un compte?',
          'Qui és el representant de Kynix Group Limited a la Unió Europea, si n’hi ha cap?',
        ],
      },
    },
  ],
  incidents: [],
  storeIds: {
    'diccionario-rae': 'es.rae.dile',
    ebiblio: 'com.demarque.ebiblio',
    galatea: 'org.reactjs.native.Inkitt.App.Colt',
    anystories: 'write.read.story.webnovel.book.anystories',
    nextory: 'com.nextory.nextoryapp',
    storytel: 'com.storytel.iphone',
    kobo: 'com.shortcovers.shortcovers',
    readera: 'org.readera.book-reader',
    eprex: 'com.eprex.lo.es.ios',
    novelo: 'com.kynixgroup.novelo',
  },
}
