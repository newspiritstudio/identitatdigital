import { CATALAN_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(CATALAN_DATE)
const s = sourceAt(CATALAN_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/**
 * Lot 45 del bloc d'aplicacions catalanes: quatre serveis quotidians de
 * Barcelona i rodalia amb models de responsabilitat molt diferents.
 *
 * - BonpreuEsclat (compra en línia). L'app de fidelització «Bonpreu i Esclat»
 *   (cat.grupbonpreu.ios.bonpreuesclat) ja és al dataset (lot 12); aquí es
 *   documenta l'altra app del grup, la de la botiga en línia, que és la que té
 *   més valoracions a l'App Store.
 * - FC Barcelona Oficial: una associació esportiva sense ànim de lucre que és
 *   responsable del tractament també en nom de les seves societats.
 * - Aigües de Barcelona: empresa mixta de majoria privada (Agbar, del grup
 *   Veolia) que gestiona un servei públic i respon davant de l'APDCAT.
 * - Clickedu: plataforma escolar on el responsable és cada centre educatiu i
 *   Clickart, del grup Sanoma Learning, n'és l'encarregada del tractament.
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'futbol-club-barcelona',
      name: 'FC Barcelona',
      legalName: 'Futbol Club Barcelona',
      description:
        'Club esportiu de Barcelona constituït com a associació privada sense ànim de lucre, propietat dels seus socis i sòcies. És el responsable del tractament de les dades dels seus webs i aplicacions en nom propi i en representació de les seves entitats: Barça Licensing & Merchandising, Barça Produccions, la Fundació Barça i Barça Innovation Hub.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      supervisoryNote: 'La política de privadesa remet a l’AEPD, que és l’autoritat que ha sancionat el Club.',
      ownership: 'nonprofit',
      foundedYear: 1899,
      primaryRevenueModel: 'mixed',
      website: 'https://www.fcbarcelona.com/',
      productDomains: ['fcbarcelona.com', 'fcbarcelona.cat', 'fcbarcelona.es'],
      privacyContact: 'dpo@fcbarcelona.cat',
    },
    {
      slug: 'aigues-de-barcelona',
      name: 'Aigües de Barcelona',
      legalName: 'Aigües de Barcelona, Empresa Metropolitana de Gestió del Cicle Integral de l’Aigua, S.A.',
      description:
        'Empresa mixta que gestiona el servei metropolità del cicle integral de l’aigua de Barcelona i l’àrea metropolitana fins al 2047, per a uns tres milions de persones. Segons les dades publicades el 2019, Agbar en té el 70 %, l’Àrea Metropolitana de Barcelona el 15 % i Criteria Caixa l’altre 15 %. Agbar pertany al grup francès Veolia des que aquest va comprar Suez el 2022.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'apdcat',
      supervisoryNote:
        'La política de privadesa assenyala l’APDCAT com a autoritat competent perquè l’empresa gestiona un servei públic metropolità, i és l’APDCAT qui n’ha resolt els procediments sancionadors, aplicant-hi el règim de multes de les entitats privades.',
      ownership: 'subsidiary',
      parentGroup: 'Veolia (grup Agbar)',
      website: 'https://www.aiguesdebarcelona.cat/',
      productDomains: ['aiguesdebarcelona.cat'],
      privacyContact: 'dpo@aiguesdebarcelona.cat',
    },
    {
      slug: 'clickart',
      name: 'Clickedu (Clickart)',
      legalName: 'Clickart, Taller de Comunicació, S.L.',
      description:
        'Empresa catalana nascuda el 2000 com a agència de comunicació que desenvolupa Clickedu, una plataforma de gestió escolar en núvol que fan servir centenars d’escoles, sobretot privades i concertades. Des del 2019 forma part de Sanoma Learning, la branca educativa del grup finlandès Sanoma, que cotitza a la borsa de Hèlsinki. Als centres hi actua com a encarregada del tractament.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      supervisoryNote:
        'Com a empresa privada, respon davant de l’AEPD. Les dades de l’alumnat, però, les tracta per compte de cada centre educatiu, que n’és el responsable; en els centres públics catalans, l’autoritat competent és l’APDCAT.',
      ownership: 'subsidiary',
      parentGroup: 'Sanoma Learning (Sanoma Oyj)',
      foundedYear: 2000,
      primaryRevenueModel: 'subscription',
      website: 'https://clickedu.net/',
      productDomains: ['clickedu.net', 'clickedu.eu', 'clickartedu.com'],
      privacyContact: 'dpo@clickedu.net',
    },
  ],

  sources: [
    /* ── BonpreuEsclat (compra en línia) ── */
    s('bonpreu-online-privacy-policy', 'Política de privacitat — BonpreuEsclat online', 'https://www.compraonline.bonpreuesclat.cat/content/politica-de-privacitat', 'Bon Preu, S.A.U.', 'privacy-policy', 'primary', {
      language: 'ca',
      publishedAt: '2025-06-10',
      summary:
        'Política de la botiga en línia, actualitzada el 10 de juny de 2025: responsable Bon Preu, S.A.U., historial de compres per personalitzar ofertes, Google Maps i PayPal com a serveis de tercers, conservació sense terminis concrets i drets amb còpia del DNI.',
    }),
    s('bonpreu-online-app-store', 'BonpreuEsclat — App Store', appStore('1337694968'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per Bon Preu, SAU: cap dada per rastrejar, el correu vinculat a la identitat (també per a màrqueting) i la resta —historial de compres i de cerca, identificadors, adreça, nom, telèfon i dades d’ús— declarada com a no vinculada. Comerciant a l’App Store: Bonpreu Holding S.L.',
    }),
    s('bonpreu-online-faq', 'Preguntes freqüents — BonpreuEsclat online', 'https://www.compraonline.bonpreuesclat.cat/content/preguntes-frequents', 'Bon Preu, S.A.U.', 'support-doc', 'primary', {
      language: 'ca',
      summary:
        'Preguntes freqüents del servei: la resposta a «Com puc cancel·lar el meu compte?» remet a l’exercici de drets per correu, carta o telèfon; les comunicacions comercials es desactiven a «El meu compte»; el compte en línia queda associat a la targeta client.',
    }),
    s('bonpreu-online-terms', 'Condicions d’ús de la compra online', 'https://www.compraonline.bonpreuesclat.cat/content/condicions-dus', 'Bon Preu, S.A.U.', 'terms', 'primary', {
      language: 'ca',
      summary:
        'Condicions del servei: cal ser major d’edat i registrar-se; un únic usuari serveix per a totes les webs i apps del grup; al lliurament es pot demanar el document d’identitat.',
    }),
    s('bonpreu-online-cookies', 'Ús de cookies — BonpreuEsclat online', 'https://www.compraonline.bonpreuesclat.cat/content/us-de-cookies', 'Bon Preu, S.A.U.', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Política de galetes del web: galetes necessàries, funcionals, de rendiment, de personalització, publicitàries i de xarxes socials, sense llista de proveïdors en el text.',
    }),
    s('bonpreu-online-pagament', 'Pagament segur — BonpreuEsclat online', 'https://www.compraonline.bonpreuesclat.cat/content/pagament-segur', 'Bon Preu, S.A.U.', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Descripció del pagament: xifratge SSL i 3D Secure; targetes Visa i Mastercard i Apple Pay.',
    }),
    s('bonpreu-online-security-txt', 'security.txt de compraonline.bonpreuesclat.cat', 'https://www.compraonline.bonpreuesclat.cat/.well-known/security.txt', 'Bon Preu, S.A.U.', 'technical-doc', 'primary', {
      summary:
        'Fitxer security.txt amb un formulari de contacte. Diu que la botiga la proporciona un proveïdor extern i que les vulnerabilitats es gestionen dins del programa privat de recompenses d’aquest proveïdor, amb invitació prèvia.',
    }),

    /* ── FC Barcelona Oficial ── */
    s('fcb-privacy-policy', 'Política de privacitat del FC Barcelona', 'https://www.fcbarcelona.com/ca/politica-privacitat', 'Futbol Club Barcelona', 'privacy-policy', 'primary', {
      language: 'ca',
      publishedAt: '2023-05-04',
      summary:
        'Política única per a tots els tractaments del Club (socis, penyes, Culers, entrades, botiga, Barça One, Barça Games…), amb data de 4 de maig de 2023: corresponsabilitat amb les societats del Club, comunicacions a Riskified fora de l’EEE, segmentació publicitària de totes les comunicacions, audiències personalitzades a xarxes socials i Conversions millorades de Google.',
    }),
    s('fcb-legal-notice', 'Aviso legal — FC Barcelona', 'https://www.fcbarcelona.es/ficha/nota-legal', 'Futbol Club Barcelona', 'terms', 'primary', {
      language: 'es',
      summary:
        'Avís legal que l’App Store enllaça com a «política de privacitat» de l’app: identifica el Club (NIF G08266298), fixa l’edat mínima de 14 anys, dona el contacte del delegat de protecció de dades i esmenta galetes publicitàries pròpies i de tercers. Condicions modificades el 26 de juny de 2025.',
    }),
    s('fcb-app-store', 'FC Barcelona Oficial — App Store', appStore('343196080'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: dades d’ús i diagnòstics utilitzats per rastrejar; ubicació precisa, nom, correu, identificador d’usuari i dades d’ús vinculats a la identitat. Compres dins de l’app: Culers Premium i Barça TV+ (39,99 €).',
    }),
    s('fcb-delete-account', 'Cómo borrar o eliminar la cuenta de Culer', 'https://www.fcbarcelona.es/es/como-borrar-o-eliminar-la-cuenta-de-culer', 'Futbol Club Barcelona', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Pàgina oficial per eliminar el compte Culer: cal una petició escrita a la Comissió de Protecció de Dades, per carta o a proteccio.dades@fcbarcelona.cat.',
    }),
    s('fcb-cookies', 'Política de cookies — FC Barcelona', 'https://www.fcbarcelona.es/es/cookies', 'Futbol Club Barcelona', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Galetes tècniques, de personalització, d’anàlisi i de publicitat comportamental, pròpies i de tercers; la informació es comparteix amb tercers que actuen com a corresponsables.',
    }),
    s('fcb-aepd-ps-00450-2024', 'Resolución de procedimiento sancionador EXP202305134 (Fútbol Club Barcelona)', 'https://www.aepd.es/documento/ps-00450-2024.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      summary:
        'Resolució que imposa al FC Barcelona una multa de 500.000 euros per infringir l’article 35 del RGPD: la campanya d’actualització del cens de socis del 2023, feta pel web i per l’App Socis, feia servir comparació facial i, opcionalment, biometria de veu sense una avaluació d’impacte vàlida. Arxiva la infracció de l’article 9. La proposta inicial era de 6 milions d’euros.',
    }),
    s('fcb-xataka-biometria-2026', 'El Barça quiso modernizar el censo de sus socios con biometría: Protección de Datos le ha impuesto una multa', 'https://www.xataka.com/legislacion-y-derechos/barca-quiso-modernizar-censo-sus-socios-biometria-proteccion-datos-le-ha-impuesto-multa', 'Xataka', 'press', 'secondary', {
      language: 'es',
      publishedAt: '2026-03-04',
      summary: 'Crònica de la sanció: uns 143.000 socis afectats, campanya iniciada el 21 de març de 2023 i decisió del Club de recórrer la multa.',
    }),

    /* ── Aigües de Barcelona ── */
    s('aigues-bcn-privacy-policy', 'Política de privacidad de clientes y usuarios — Aigües de Barcelona', 'https://www.aiguesdebarcelona.cat/es/web/guest/politica-privacidad-area-clientes', 'Aigües de Barcelona', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de clients i usuaris: finalitats i bases jurídiques una per una, segmentació per detectar vulnerabilitat, perfil de consum amb telelectura només amb consentiment, comunicacions obligatòries a l’AMB, ajuntaments, serveis socials i ACA, subencarregats fora de la UE i reclamació davant de l’APDCAT.',
    }),
    s('aigues-bcn-app-store', 'Aigües de Barcelona — App Store', appStore('916476787'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: només identificadors (d’usuari i de dispositiu) i diagnòstics, vinculats a la identitat i per a la funcionalitat; cap dada per rastrejar. La descripció inclou pagament amb targeta o Bizum, canvi de dades bancàries i pujada de la cèdula d’habitabilitat.',
    }),
    s('aigues-bcn-area-clients-terms', 'Condiciones legales alta usuario Oficina en Red', 'https://www.aiguesdebarcelona.cat/documents/20126/980178/CondLegales-altaUR-es.pdf/60b8b50e-1cc7-3f63-ef1a-dd7e1b9e2355', 'Aigües de Barcelona', 'terms', 'primary', {
      language: 'es',
      summary: 'Condicions d’alta a l’Àrea de Clients (Oficina en Xarxa): avisos del servei, comunicacions promocionals i adaptació d’ofertes només si s’accepten, i contacte del delegat de protecció de dades.',
    }),
    s('aigues-bcn-cookies-area-clients', 'Política de cookies del Área de Clientes', 'https://www.aiguesdebarcelona.cat/es/politica-de-cookies-ofex', 'Aigües de Barcelona', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'L’Àrea de Clients web només declara galetes de tercers d’Incapsula, amb finalitat de seguretat i transferència als Estats Units.',
    }),
    s('aigues-bcn-apdcat-ps-0071-2025', 'Resolució del procediment sancionador PS-0071/2025, referent a Aigües de Barcelona', 'https://seu.apdcat.cat/ca/documentPublic/download/8116', 'Autoritat Catalana de Protecció de Dades', 'regulator', 'authority', {
      language: 'ca',
      publishedAt: '2025-12-09',
      summary:
        'L’APDCAT declara que Aigües de Barcelona va infringir el principi de confidencialitat (article 5.1.f del RGPD) en girar una factura al compte bancari d’un tercer. Sanció proposada de 10.000 euros, pagada per avançat amb reduccions: 6.000 euros.',
    }),
    s('aigues-bcn-apdcat-ps-49-2021', 'Resolució del procediment sancionador PS 49/2021, referent a Aigües de Barcelona', 'https://seu.apdcat.cat/ca/documentPublic/download/3377', 'Autoritat Catalana de Protecció de Dades', 'regulator', 'authority', {
      language: 'ca',
      publishedAt: '2022-02-09',
      summary:
        'Multa de 4.000 euros per vulnerar el principi d’exactitud: l’empresa va emetre 12 factures i rebuts domiciliats assignant els noms de cinc persones diferents al DNI de la persona denunciant. L’empresa en va pagar 2.400 per avançat.',
    }),
    s('aigues-bcn-iagua-accionariat-2019', 'El Supremo avala la sociedad mixta de Agbar y el Área Metropolitana de Barcelona', 'https://www.iagua.es/noticias/redaccion-iagua/supremo-avala-sociedad-mixta-agbar-y-area-metropolitana-barcelona', 'iAgua', 'press', 'secondary', {
      language: 'es',
      publishedAt: '2019-11-20',
      summary: 'El Tribunal Suprem confirma l’empresa mixta: 70 % d’Agbar, 15 % de l’AMB i 15 % de Criteria Caixa, gestora del cicle integral de l’aigua fins al 2047 per a tres milions de persones.',
    }),
    s('aigues-bcn-ara-veolia-2025', 'Veolia buries the Agbar brand', 'https://en.ara.cat/economy/veolia-buries-the-agbar-brand_1_5581507.html', 'Ara', 'press', 'secondary', {
      language: 'en',
      publishedAt: '2025-03-05',
      summary: 'Veolia, propietària d’Agbar des de la compra de Suez el 2022, unifica les marques del grup; Aigües de Barcelona conserva la seva per ser una societat compartida amb l’AMB i Criteria.',
    }),

    /* ── Clickedu ── */
    s('clickedu-privacy-policy', 'Política de privacidad — Clickedu', 'https://clickedu.net/politica-de-privacidad/', 'Clickart, Taller de Comunicació, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2018-12-01',
      summary:
        'Política modificada per última vegada el desembre de 2018 i pensada per als centres clients: contractació de la llicència, enquestes i comunicacions comercials; allotjament de les dades del centre, sense transferències fora de la UE; DPD a dpo.spain@sanoma.com i drets a dpo@clickedu.net. No parla de l’aplicació ni de les famílies.',
    }),
    s('clickedu-app-store', 'Clickedu — App Store', appStore('691984809'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: ubicació precisa, identificador del dispositiu i interacció amb el producte vinculats a la identitat per a «altres finalitats»; dades d’errors no vinculades; cap dada per rastrejar. L’enllaç de política de privadesa que declara (clickartedu.com/note.php?accio=politica) retornava un error 404 el 25 de setembre de 2026.',
    }),
    s('clickedu-faqs', 'Preguntas frecuentes — Clickedu', 'https://clickedu.net/plataforma/faqs/', 'Clickart, Taller de Comunicació, S.L.', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Preguntes freqüents per perfils: les credencials les dona el centre, els canvis de dades personals els valida el centre, les famílies poden pagar rebuts si l’escola activa una passarel·la, i les dades s’allotgen en servidors d’alta disponibilitat amb ISO 27001.',
    }),
    s('clickedu-qui-som', 'Quiénes somos — Clickedu', 'https://clickedu.net/quienes-somos/', 'Clickart, Taller de Comunicació, S.L.', 'other', 'primary', {
      language: 'es',
      summary: 'Història de l’empresa: Clickart neix el 2000, adopta AWS el 2015, s’integra a Sanoma Learning el 2019 i actualitza la ISO/IEC 27001:2022 dins la certificació multisite del grup el 2024.',
    }),
    s('clickedu-divulgacio-responsable', 'Declaración de divulgación responsable — Clickedu', 'https://clickedu.net/declaracion-divulgacion-responsable/', 'Clickart, Taller de Comunicació, S.L.', 'technical-doc', 'primary', {
      language: 'es',
      summary: 'Canal per notificar vulnerabilitats a security@clickedu.net, amb acusament de recepció en tres dies. També enllaçada des del security.txt de clickedu.net.',
    }),
    s('clickedu-seguretat-2025', 'Seguridad y privacidad en la gestión educativa digital', 'https://clickedu.net/seguridad-privacidad-en-la-gestion-educativa-digital/', 'Clickart, Taller de Comunicació, S.L.', 'support-doc', 'primary', {
      language: 'es',
      publishedAt: '2025-05-05',
      summary: 'Article corporatiu: servidors a Europa (AWS), autenticació en dos factors per a tot el personal escolar i certificacions ISO 9001 i ISO 27001.',
    }),
    s('clickedu-escolapios-bilbao-rgpd', 'RGPD Alumnos — Colegio Escolapios Bilbao', 'https://escolapiosbilbao.org/rgpd-alumnos/', 'Colegio Calasancio (Escolapios Bilbao)', 'privacy-policy', 'independent', {
      language: 'es',
      summary: 'Exemple d’informació d’un centre client: el responsable és el col·legi i Clickedu hi consta com a «encargado de tratamiento ubicado en Barcelona para el servicio de mantenimiento de la aplicación informática clickedu».',
    }),
    s('clickedu-aepd-responsable-centres', '¿Quién es el responsable del tratamiento de los datos en un centro educativo?', 'https://www.aepd.es/prensa-y-comunicacion/blog/quien-es-el-responsable-del-tratamiento-de-los-datos-en-un-centro', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      publishedAt: '2021-09-15',
      summary: 'L’AEPD explica que els proveïdors de serveis dels centres educatius tracten les dades per compte i seguint les instruccions del responsable, amb un contracte d’encàrrec, i que els drets s’exerceixen davant del centre.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ BonpreuEsclat (compra en línia) ═══════════════════════════ */
    {
      slug: 'bonpreuesclat-compra-online',
      name: 'BonpreuEsclat (compra en línia)',
      company: 'bon-preu',
      categories: ['alimentacio-i-restauracio', 'comerc-electronic'],
      tagline: 'Sense rastreig declarat, però l’etiqueta diu que el nom i l’adreça de lliurament no es vinculen a la identitat, i per esborrar el compte cal escriure amb el DNI',
      summary:
        'És l’app de la botiga en línia del grup Bon Preu, diferent de l’app de fidelització «Bonpreu i Esclat» que ja té fitxa pròpia, tot i que totes dues comparteixen el mateix compte client. No declara cap dada per rastrejar, però l’etiqueta de l’App Store és poc creïble: presenta el nom, el telèfon, l’adreça de lliurament i l’historial de compres com a dades no vinculades a la identitat en un servei que et porta la compra a casa. La política, en català, reconeix que l’historial de compres serveix per personalitzar ofertes. No hi ha cap botó per eliminar el compte: les preguntes freqüents remeten a una petició per correu electrònic, carta o telèfon, amb una còpia del DNI.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      brandColor: '#e30613',
      links: {
        website: 'https://www.compraonline.bonpreuesclat.cat/',
        privacyPolicy: 'https://www.compraonline.bonpreuesclat.cat/content/politica-de-privacitat',
        terms: 'https://www.compraonline.bonpreuesclat.cat/content/condicions-dus',
        appStore: appStore('1337694968'),
        deleteAccount: 'https://www.compraonline.bonpreuesclat.cat/content/preguntes-frequents',
        security: 'https://www.compraonline.bonpreuesclat.cat/.well-known/security.txt',
      },
      accountRequired: f('yes', 'official', ['bonpreu-online-terms'], 'Les condicions diuen que per fer la compra en línia cal ser major d’edat i estar registrat.'),
      openSource: f('no', 'official', ['bonpreu-online-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La cistella setmanal diu què menja una llar, quanta gent hi viu, si hi ha infants o persones grans i quin pressupost té. A més, l’adreça de lliurament i les franges horàries indiquen quan hi ha algú a casa. Bon Preu fa servir l’historial de compres per personalitzar les ofertes i les comunicacions comercials de productes similars li arriben per interès legítim, sense haver-hi consentit, per correu, SMS, carta o notificació.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['bonpreu-online-app-store', 'bonpreu-online-privacy-policy'], note: 'És l’única dada que l’etiqueta declara vinculada a la identitat, per a la funcionalitat i per a «publicitat o màrqueting del desenvolupador».' }),
        row('nom-i-cognoms', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bonpreu-online-app-store', 'bonpreu-online-privacy-policy'], note: 'L’etiqueta el declara no vinculat a la identitat, cosa difícil d’entendre en un compte client amb comandes a nom propi.' }),
        row('numero-de-telefon', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bonpreu-online-app-store', 'bonpreu-online-privacy-policy'] }),
        row('adreca-postal', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['bonpreu-online-app-store', 'bonpreu-online-privacy-policy'], note: 'L’adreça de lliurament. La política esmenta que alguns aspectes de la compra fan servir l’API de Google Maps.' }),
        row('historial-de-compres', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['bonpreu-online-app-store', 'bonpreu-online-privacy-policy'], note: 'La política diu que l’historial de compres serveix per personalitzar les ofertes i promocions; l’etiqueta, en canvi, el declara no vinculat a la identitat.' }),
        row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['bonpreu-online-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['bonpreu-online-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['bonpreu-online-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['bonpreu-online-app-store'], note: 'L’etiqueta hi inclou «dades de publicitat» per al màrqueting del desenvolupador.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['bonpreu-online-app-store'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['bonpreu-online-privacy-policy', 'bonpreu-online-pagament'], note: 'Cal indicar les dades bancàries per validar la compra; el pagament passa per 3D Secure i PayPal. L’etiqueta de l’App Store no declara cap dada financera.' }),
        row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['bonpreu-online-privacy-policy', 'bonpreu-online-terms'], note: 'La política demana una còpia del DNI per exercir qualsevol dret, i al lliurament poden demanar el document original per comprovar que qui rep la compra és el titular de la targeta.' }),
        row('data-de-naixement', 'unknown', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['bonpreu-online-privacy-policy'], note: 'La política enumera el DNI, la data de naixement i el gènere entre les dades identificadores que tracta per interès legítim, però no diu si l’app els demana.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['bonpreu-online-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar-te en apps i webs d’altres empreses.'),
        advertisingIdentifiers: unknown('L’etiqueta declara l’identificador del dispositiu per a analítica i personalització, però no concreta si inclou l’identificador publicitari.'),
        thirdPartyTrackersPresent: unknown('La política de galetes del web preveu galetes publicitàries i de xarxes socials de tercers, però ni aquesta ni la de privadesa enumeren els SDK integrats a l’app.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['bonpreu-online-privacy-policy', 'bonpreu-online-app-store', 'bonpreu-online-cookies'], 'Per interès legítim, sense demanar consentiment, envia ofertes de productes i serveis similars per correu, SMS, carta i notificacions de l’app. Amb consentiment, hi afegeix productes d’altres empreses i personalitza les comunicacions amb dades de fonts externes. Al web, la política de galetes preveu galetes publicitàries i de xarxes socials.'),
        profiling: f('yes', 'official', ['bonpreu-online-privacy-policy'], 'Fa servir l’historial de compres per personalitzar les ofertes i reconeix que pot elaborar perfils de comportament, amb dret a demanar intervenció humana si són íntegrament automatitzats.'),
        aiTraining: unknown('La política diu que el web fa servir eines d’intel·ligència artificial que processen les interaccions de manera anònima per optimitzar la navegació, però no aclareix si aquestes dades serveixen per entrenar models ni si passa el mateix a l’app.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['bonpreu-online-privacy-policy'], 'Com a regla general no comunica dades a tercers, però treballa amb encarregats del tractament i integra Google Maps i PayPal, als quals remet per a les seves pròpies polítiques.'),
        intraGroupSharing: f('yes', 'official', ['bonpreu-online-terms', 'bonpreu-online-faq'], 'Un únic usuari serveix per a totes les webs i apps del grup Bon Preu, i el compte en línia queda associat a la targeta client de fidelització.'),
        dataBrokerSales: unknown('La política no esmenta la venda de dades a intermediaris ni la descarta expressament.'),
        internationalTransfers: unknown('La política no té cap apartat sobre transferències internacionals, tot i que integra serveis de Google i PayPal.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['bonpreu-online-privacy-policy'], 'Només el criteri general del temps necessari per a la finalitat o mentre duri el consentiment, sense cap termini concret.'),
        dataAfterDeletion: f('partial', 'official', ['bonpreu-online-privacy-policy'], 'Un cop complerta la finalitat, les dades queden bloquejades durant els terminis legals.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['bonpreu-online-faq', 'bonpreu-online-privacy-policy'], 'Les preguntes freqüents responen «Com puc cancel·lar el meu compte?» amb l’exercici del dret de supressió.'),
        selfService: f('no', 'official', ['bonpreu-online-faq'], 'La resposta oficial a com cancel·lar el compte remet a una petició per correu electrònic, carta o telèfon; no descriu cap opció dins de l’app ni al web.'),
        directUrl: 'https://www.compraonline.bonpreuesclat.cat/content/preguntes-frequents',
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Escriu a seguretatlopd@bonpreu.cat, o per carta a Bon Preu, S.A.U., Ctra. C-17 km 73, les Masies de Voltregà, o truca al 900 500 005.',
          'Demana la supressió del compte i adjunta una còpia del DNI, que la política exigeix per acreditar la identitat.',
          'Recorda que el compte en línia és el mateix que el de la targeta client: esborrar-lo afecta també l’app de fidelització.',
        ],
        obstacles: 'Cal enviar una còpia del document d’identitat i no hi ha cap procediment d’autoservei.',
        dataRetained: 'Les dades queden bloquejades durant els terminis legals, que la política no concreta.',
        sources: ['bonpreu-online-faq', 'bonpreu-online-privacy-policy', 'bonpreu-online-terms'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['bonpreu-online-privacy-policy'], 'La política reconeix la portabilitat, però només per petició escrita i amb còpia del DNI.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['bonpreu-online-privacy-policy'], 'Hi ha delegat de protecció de dades (seguretatlopd@bonpreu.cat) i tres canals, però cal adjuntar una còpia del DNI a qualsevol petició. La política remet a l’AEPD per reclamar.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['bonpreu-online-faq', 'bonpreu-online-privacy-policy'], 'Les comunicacions comercials es desactiven des de «El meu compte» > «Comunicacions», però la personalització d’ofertes amb l’historial de compres es basa en l’interès legítim i no hi ha cap interruptor documentat.'),
        telemetryOptOut: unknown('No hem trobat cap opció per desactivar l’analítica de l’app.'),
        granularControls: unknown('Més enllà de l’interruptor de comunicacions comercials, no hem trobat controls de privadesa separats.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem trobat cap anàlisi independent dels formularis de registre i de consentiment.'),
      },
      security: {
        e2ee: na('És una botiga en línia sense comunicacions privades entre persones.'),
        transportEncryption: f('yes', 'official', ['bonpreu-online-pagament'], 'La botiga declara xifratge SSL per a les dades bancàries i les contrasenyes en trànsit.'),
        atRestEncryption: unknown('La política no concreta les mesures tècniques de seguretat.'),
        mfa: unknown('El pagament exigeix autenticació reforçada del banc (3D Secure), però no hem trobat cap segon factor per iniciar sessió al compte.'),
        independentAudits: unknown('No hem trobat auditories ni certificacions publicades.'),
        bugBounty: f('partial', 'official', ['bonpreu-online-security-txt'], 'El security.txt diu que la botiga la proporciona un proveïdor extern amb un programa privat de recompenses, al qual cal demanar invitació.'),
        vulnerabilityDisclosure: f('yes', 'official', ['bonpreu-online-security-txt'], 'La botiga en línia publica un security.txt amb un formulari de contacte i data de caducitat del 2027.'),
      },
      alternatives: [
        { app: 'bonpreu-i-esclat', comparability: 'complementary', rationale: 'L’app de fidelització del mateix grup, amb el mateix compte client, per consultar ofertes i tiquets sense fer la compra en línia.', tradeOffs: 'Tampoc no té cap opció d’autoservei per eliminar el compte.' },
        { app: 'mercadona', comparability: 'equivalent', rationale: 'Compra en línia de supermercat amb lliurament a domicili.', tradeOffs: 'Cobertura geogràfica diferent i sense programa de fidelització.' },
        { app: 'carrefour', comparability: 'equivalent', rationale: 'Supermercat amb compra en línia d’abast estatal.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'El grup té dues apps a l’App Store: «Bonpreu i Esclat» (fidelització, ja documentada al lot 12) i «BonpreuEsclat» (compra en línia, aquesta fitxa), amb més valoracions. Les dues les publica com a comerciant Bonpreu Holding S.L., mentre que la política identifica com a responsable Bon Preu, S.A.U.; l’etiqueta de privadesa la signa «Bon Preu SAU». L’etiqueta declara com a no vinculades a la identitat dades que no poden ser anònimes en un servei de lliurament a domicili (nom, adreça, historial de compres) i no declara cap dada de pagament. No hem trobat sancions de l’AEPD ni de l’APDCAT contra Bon Preu.',
        openQuestions: [
          'Com pot ser que el nom, l’adreça de lliurament i l’historial de compres no es vinculin a la identitat del client?',
          'Quin és el proveïdor extern de la botiga en línia i quines dades hi tracta?',
          'Quant de temps es conserva l’historial de compres un cop tancat el compte?',
        ],
      },
    },

    /* ═══════════════════════════ FC Barcelona Oficial ═══════════════════════════ */
    {
      slug: 'fc-barcelona-oficial',
      name: 'FC Barcelona Oficial',
      company: 'futbol-club-barcelona',
      categories: ['esports-i-resultats'],
      tagline: 'Dades d’ús amb què et rastregen, totes les comunicacions segmentades i una política única per a trenta tractaments diferents',
      summary:
        'L’app oficial del Barça declara a l’App Store que fa servir les dades d’ús i els diagnòstics per rastrejar-te en apps i webs d’altres empreses, i que vincula a la teva identitat la ubicació precisa, el nom, el correu i l’activitat. L’enllaç de privadesa que declara és l’avís legal del web; la política real, del 2023, cobreix d’una tirada socis, penyes, entrades, botiga i subscripcions, i diu que el Club no envia mai comunicacions sense segmentar: qui no vulgui ser perfilat ha de renunciar a rebre-les. Per esborrar el compte Culer cal escriure a la Comissió de Protecció de Dades. El 2026 l’AEPD va multar el Club amb 500.000 euros per la biometria del cens de socis.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Espanya',
      brandColor: '#a50044',
      links: {
        website: 'https://www.fcbarcelona.com/',
        privacyPolicy: 'https://www.fcbarcelona.com/ca/politica-privacitat',
        terms: 'https://www.fcbarcelona.es/ficha/nota-legal',
        appStore: appStore('343196080'),
        deleteAccount: 'https://www.fcbarcelona.es/es/como-borrar-o-eliminar-la-cuenta-de-culer',
      },
      accountRequired: f('partial', 'official', ['fcb-app-store', 'fcb-privacy-policy'], 'Les notícies i els resultats són oberts; el compte Culer, gratuït, o la subscripció Culers Premium desbloquegen continguts i avantatges. L’avís legal fixa l’edat mínima de 14 anys per donar dades personals.'),
      openSource: f('no', 'official', ['fcb-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Què mires, quan obres l’app i on ets el dia de partit dibuixen el perfil d’un aficionat valuós per al Club i per als seus patrocinadors. La política diu que el Barça segmenta totes les comunicacions segons el comportament a la web, les galetes i fins i tot els moviments del cursor, que busca els perfils dels seus usuaris a les xarxes socials per enviar-los publicitat del Club i dels patrocinadors, i que si t’hi registres amb Google o Facebook en pot obtenir la data de naixement, la ubicació i els «m’agrada».',
      dataCollection: [
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['fcb-app-store', 'fcb-privacy-policy'], note: 'L’etiqueta les declara vinculades a la identitat per a l’analítica i, alhora, utilitzades per rastrejar en apps i webs d’altres empreses.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['fcb-app-store'], note: 'Declarades com a no vinculades a la identitat però utilitzades per rastrejar.' }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['fcb-app-store'], note: 'L’etiqueta la declara vinculada a la identitat per a la funcionalitat de l’app; la política no explica per a què la necessita.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['fcb-app-store', 'fcb-privacy-policy'], note: 'En crear el compte Culer, el Club hi envia comunicacions comercials pròpies i dels patrocinadors com a part del contracte.' }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['fcb-app-store'] }),
        row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['fcb-app-store', 'fcb-privacy-policy'], note: 'És el «Compte Barça», un identificador únic per a tots els serveis del Club i de les seves societats.' }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['fcb-privacy-policy'], note: 'La política diu que l’obté del registre amb Google o Facebook, juntament amb la ubicació geogràfica.' }),
        row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'elaboracio-de-perfils'], sources: ['fcb-privacy-policy'], note: 'Amb el registre social i el consentiment, el Club tracta els «m’agrada» de les xarxes socials per personalitzar l’experiència.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['fcb-app-store'], 'L’etiqueta declara les dades d’ús i els diagnòstics com a dades que es poden fer servir per rastrejar-te en apps i webs d’altres empreses.'),
        advertisingIdentifiers: unknown('L’etiqueta no inclou identificadors entre les dades de rastreig i la política no esmenta l’identificador publicitari del dispositiu.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['fcb-app-store', 'fcb-privacy-policy', 'fcb-cookies'], 'Declarar dades per rastrejar implica compartir-les amb tercers. La política esmenta les Conversions millorades de Google i la de galetes, tercers corresponsables d’analítica i publicitat comportamental; cap de les dues no enumera els SDK de l’app.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['fcb-privacy-policy'], 'La política diu que fa publicitat segmentada amb el comportament a la web, les galetes, els moviments del cursor, l’obertura de butlletins i les enquestes, i que busca els perfils dels usuaris a les xarxes socials per enviar-los publicitat del Club i dels patrocinadors per interès legítim.'),
        profiling: f('yes', 'official', ['fcb-privacy-policy'], 'Reconeix decisions automatitzades per segmentar els usuaris: el Club fixa els paràmetres i la plataforma tecnològica genera les característiques de segmentació de cada persona. Diu que no envia cap comunicació sense segmentar.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['fcb-privacy-policy'], 'A més dels encarregats, comunica dades a Findirect (finançament de quotes), a les penyes, a bancs i passarel·les de pagament, a empreses de logística i a Riskified, que les tracta com a responsable per prevenir el frau.'),
        intraGroupSharing: f('yes', 'official', ['fcb-privacy-policy'], 'El Club és responsable en nom propi i de Barça Licensing & Merchandising, Barça Produccions, la Fundació Barça i Barça Innovation Hub, que poden tractar les dades de manera independent o com a corresponsables.'),
        dataBrokerSales: unknown('La política no esmenta la venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['fcb-privacy-policy'], 'Les dades de compra es comuniquen a Riskified fora de l’Espai Econòmic Europeu, i el Club reconeix proveïdors internacionals (butlletins, emmagatzematge) que poden tractar dades fora de la UE amb les garanties oportunes.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['fcb-privacy-policy'], 'Cada tractament té un criteri de conservació, però gairebé sempre és «mentre duri la relació i els terminis legals». Només hi ha xifres per a les gravacions de trucades (un any) i els currículums (un any).'),
        dataAfterDeletion: f('partial', 'official', ['fcb-privacy-policy'], 'El compte Culer es conserva fins que se’n demana la baixa i, després, durant els terminis legalment previstos.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['fcb-delete-account'], 'El Club té una pàgina específica per eliminar el compte Culer.'),
        selfService: f('no', 'official', ['fcb-delete-account'], 'La pàgina oficial diu que la supressió s’ha d’iniciar amb una comunicació escrita a la Comissió de Protecció de Dades; no hi ha cap botó a l’app.'),
        directUrl: 'https://www.fcbarcelona.es/es/como-borrar-o-eliminar-la-cuenta-de-culer',
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Si tens Culers Premium o Barça TV+ comprats dins de l’app, cancel·la primer la subscripció des dels ajustos del compte d’Apple.',
          'Escriu a proteccio.dades@fcbarcelona.cat, o per carta a la Comissió de Protecció de Dades, carrer d’Arístides Maillol s/n, 08028 Barcelona, i demana la supressió del compte.',
          'Si en dos mesos no et responen, el Club mateix indica que pots reclamar davant de l’AEPD.',
        ],
        dataRetained: 'Les dades es conserven durant els terminis legals posteriors a la baixa; si ets soci o penyista, aquestes relacions continuen i tenen els seus propis tractaments.',
        sources: ['fcb-delete-account', 'fcb-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['fcb-privacy-policy'], 'Reconeix la portabilitat en els casos que preveu la normativa, per petició escrita.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['fcb-privacy-policy', 'fcb-legal-notice'], 'Drets per correu electrònic a proteccio.dades@fcbarcelona.cat o per carta, i delegat de protecció de dades a dpo@fcbarcelona.cat.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['fcb-privacy-policy'], 'La política diu que qui no vulgui ser segmentat s’ha d’oposar a les comunicacions o donar-se de baixa comercial: no es pot rebre informació del Club sense perfilat. L’enviament comercial es pot rebutjar a cada correu.'),
        telemetryOptOut: unknown('No hem trobat cap opció per desactivar l’analítica de l’app.'),
        granularControls: f('partial', 'official', ['fcb-cookies', 'fcb-privacy-policy'], 'Al web es poden rebutjar les galetes per categories; a l’app, iOS permet refusar el rastreig. No hem trobat controls propis dins de l’app.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem trobat cap anàlisi independent de la interfície de l’app.'),
      },
      security: {
        e2ee: na('És una app de continguts i serveis per a aficionats, sense missatgeria privada.'),
        transportEncryption: unknown('No hem trobat cap document oficial sobre el xifratge en trànsit.'),
        atRestEncryption: unknown('La política només parla genèricament de mesures tècniques i organitzatives.'),
        mfa: unknown('No hem trobat documentació sobre la verificació en dos passos del compte Culer.'),
        independentAudits: unknown('No hem trobat auditories ni certificacions publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('fcbarcelona.com no publica cap security.txt.'),
      },
      alternatives: [
        { app: 'flashscore', comparability: 'partial', rationale: 'Resultats i estadístiques en directe dels partits del Barça sense compte.', tradeOffs: 'No té els continguts exclusius del Club i també es finança amb publicitat.' },
        { app: 'besoccer', comparability: 'partial', rationale: 'Notícies i resultats de futbol de tots els equips.', tradeOffs: 'Aplicació amb publicitat de tercers.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'L’App Store enllaça l’avís legal com a política de privadesa. La política real és un document únic per a tots els tractaments del Club, sense cap apartat per a l’app, i data del 2023. L’afirmació que el Club no envia comunicacions sense segmentar converteix el perfilat en condició per rebre informació. La sanció de l’AEPD del 2026 no afecta aquesta app sinó la campanya del cens de socis, feta pel web i per l’App Socis, però és el mateix responsable del tractament.',
        openQuestions: [
          'Per a què fa servir l’app la ubicació precisa vinculada a la identitat?',
          'Quins proveïdors reben les dades d’ús amb què l’app declara que et rastreja?',
          'Quines garanties empara la transferència de dades a Riskified i als proveïdors de fora de la UE?',
        ],
      },
    },

    /* ═══════════════════════════ Aigües de Barcelona ═══════════════════════════ */
    {
      slug: 'aigues-de-barcelona',
      name: 'Aigües de Barcelona',
      company: 'aigues-de-barcelona',
      categories: ['utilitats'],
      tagline: 'Una política detallada i sense rastreig, però l’etiqueta amaga el DNI, el compte bancari i el consum, i l’APDCAT ha sancionat dues vegades l’empresa per errors de facturació',
      summary:
        'L’app de l’àrea de clients d’Aigües de Barcelona serveix per consultar consums i factures, pagar, canviar el compte bancari i configurar avisos de fuites. L’etiqueta de l’App Store només declara identificadors i diagnòstics, però el servei tracta el DNI, les dades bancàries i el consum d’aigua de la llar. La política és de les més detallades del bloc: explica cada finalitat amb la seva base jurídica, demana consentiment per perfilar el consum amb la telelectura i reconeix una segmentació per detectar clients vulnerables. L’APDCAT ha sancionat l’empresa el 2022 i el 2025 per haver associat dades bancàries a la persona equivocada.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'public-service',
      jurisdiction: 'Espanya (Catalunya); servei metropolità gestionat per una empresa mixta',
      brandColor: '#0072ce',
      links: {
        website: 'https://www.aiguesdebarcelona.cat/',
        privacyPolicy: 'https://www.aiguesdebarcelona.cat/es/web/guest/politica-privacidad-area-clientes',
        terms: 'https://www.aiguesdebarcelona.cat/documents/20126/980178/CondLegales-altaUR-es.pdf/60b8b50e-1cc7-3f63-ef1a-dd7e1b9e2355',
        appStore: appStore('916476787'),
      },
      accountRequired: f('yes', 'official', ['aigues-bcn-privacy-policy', 'aigues-bcn-area-clients-terms'], 'L’Àrea de Clients només està disponible per a persones amb un contracte vigent i exigeix donar-s’hi d’alta i acceptar-ne les condicions.'),
      openSource: f('no', 'official', ['aigues-bcn-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El consum d’aigua hora a hora, que la telelectura permet conèixer en temps real, revela quanta gent viu en un pis, quan s’hi dutxa i quan està buit. Aigües de Barcelona el fa servir per detectar fuites i fraus, i per fer-ne un perfil comercial només si hi consents. A més, creua el comportament de pagament amb dades socioeconòmiques del districte censal per identificar clients en risc de vulnerabilitat.',
      dataCollection: [
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['aigues-bcn-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['aigues-bcn-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['aigues-bcn-app-store'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['aigues-bcn-privacy-policy'], note: 'El DNI o NIE identifica el titular del contracte. L’etiqueta de l’App Store no el declara.' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['aigues-bcn-privacy-policy'], note: 'Es comunica, entre d’altres, a l’AMB, als ajuntaments per cobrar taxes i a l’Agència Catalana de l’Aigua.' }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['aigues-bcn-privacy-policy'], note: 'L’adreça del punt de subministrament.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['aigues-bcn-privacy-policy', 'aigues-bcn-area-clients-terms'], note: 'Per als avisos del servei i, només amb consentiment, per a comunicacions promocionals.' }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['aigues-bcn-privacy-policy', 'aigues-bcn-app-store'], note: 'Per als avisos de fuites per SMS.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['aigues-bcn-privacy-policy', 'aigues-bcn-app-store'], note: 'Compte bancari de domiciliació i pagament de factures amb targeta o Bizum des de l’app. L’etiqueta no declara cap dada financera.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau', 'investigacio-i-estadistica', 'elaboracio-de-perfils'], sources: ['aigues-bcn-privacy-policy'], note: 'Factures i consum d’aigua, amb l’historial de lectures i la telelectura. El perfil comercial basat en el seguiment continu del consum només es fa amb consentiment.' }),
        row('nivell-d-ingressos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'compliment-legal'], sources: ['aigues-bcn-privacy-policy'], note: 'Segmentació per detectar vulnerabilitat a partir del comportament de pagament i de dades socioeconòmiques agregades del districte censal (INE, Idescat), per interès legítim.' }),
        row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['aigues-bcn-app-store'], note: 'La cèdula d’habitabilitat i altres documents que es poden pujar des de l’app.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['aigues-bcn-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar-te.'),
        advertisingIdentifiers: unknown('L’etiqueta declara l’identificador del dispositiu per a la funcionalitat, sense concretar si inclou l’identificador publicitari.'),
        thirdPartyTrackersPresent: unknown('L’Àrea de Clients web només declara galetes de seguretat d’Incapsula; no hem trobat la llista d’SDK de l’app.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['aigues-bcn-privacy-policy', 'aigues-bcn-area-clients-terms'], 'Només amb consentiment: comunicacions comercials sobre l’activitat de l’empresa i esdeveniments relacionats amb el servei.'),
        profiling: f('yes', 'official', ['aigues-bcn-privacy-policy'], 'Dos perfils: un de comercial, basat en el seguiment continu del consum amb la telelectura, que exigeix consentiment; i una segmentació per risc de vulnerabilitat i d’impagament, per interès legítim, a la qual et pots oposar.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['aigues-bcn-privacy-policy', 'aigues-bcn-iagua-accionariat-2019', 'aigues-bcn-ara-veolia-2025'], 'Per obligació legal, a l’Àrea Metropolitana de Barcelona com a titular del servei (i accionista minoritària de l’empresa, de la qual Agbar, del grup Veolia, té la majoria), als ajuntaments (taxes de clavegueram i residus), als serveis socials, a l’Agència Catalana de l’Aigua, a l’Incasòl, a les administracions tributàries, a jutjats i policia, i als altres organismes que preveu la llei.'),
        intraGroupSharing: unknown('La política no esmenta comunicacions a Agbar ni a Veolia.'),
        dataBrokerSales: f('no', 'official', ['aigues-bcn-privacy-policy'], 'La política diu que no comunica dades a tercers si no hi consents o no hi ha una obligació legal.'),
        internationalTransfers: f('yes', 'official', ['aigues-bcn-privacy-policy', 'aigues-bcn-cookies-area-clients'], 'Reconeix subencarregats fora de la UE, emparats en decisions d’adequació o en clàusules contractuals tipus. Les galetes de seguretat d’Incapsula de l’Àrea de Clients transfereixen dades als Estats Units.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['aigues-bcn-privacy-policy'], 'Criteris per finalitat (mentre duri el contracte, fins a resoldre la petició), però cap termini en anys.'),
        dataAfterDeletion: f('partial', 'official', ['aigues-bcn-privacy-policy'], 'Acabat el contracte, les dades queden bloquejades mentre hi pugui haver responsabilitats. Si has acceptat comunicacions comercials, es conserven fins que te’n donis de baixa, encara que ja no siguis client.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['aigues-bcn-privacy-policy'], 'La política reconeix el dret de supressió.'),
        selfService: unknown('No hem trobat cap opció documentada per eliminar l’usuari de l’Àrea de Clients des de l’app.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Escriu a atencioalclient@aiguesdebarcelona.cat, fes la petició a qualsevol oficina d’atenció al client, per carta al carrer del General Batet 1-7, 08028 Barcelona, o des de l’apartat «Contacta» del web.',
          'Demana la supressió de l’usuari de l’Àrea de Clients i, si ho vols, retira els consentiments comercials.',
          'Si hi ha dubtes sobre la teva identitat et poden demanar una còpia del DNI. Tenen un mes per respondre, prorrogable dos mesos més.',
        ],
        obstacles: 'Esborrar l’usuari de l’app no dona de baixa el contracte d’aigua: mentre sigui vigent, l’empresa conserva les dades necessàries per prestar el servei.',
        dataRetained: 'Les dades del contracte, bloquejades mentre hi pugui haver responsabilitats derivades del servei.',
        sources: ['aigues-bcn-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['aigues-bcn-privacy-policy'], 'Reconeix el dret de rebre les dades en format electrònic, però per petició.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['aigues-bcn-privacy-policy', 'aigues-bcn-area-clients-terms'], 'Quatre canals gratuïts, la còpia del DNI només en cas de dubte, delegat de protecció de dades (dpo@aiguesdebarcelona.cat) i reclamació davant de l’APDCAT.'),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['aigues-bcn-privacy-policy'], 'Les comunicacions promocionals i el perfil de consum depenen del consentiment, que es gestiona des de l’Àrea de Clients i es pot retirar en qualsevol moment.'),
        telemetryOptOut: unknown('No hem trobat cap opció per desactivar els diagnòstics de l’app.'),
        granularControls: f('yes', 'official', ['aigues-bcn-privacy-policy', 'aigues-bcn-app-store'], 'Des de l’Àrea de Clients es gestionen per separat els avisos (SMS o correu), les comunicacions promocionals, les enquestes i el seguiment del consum; a més, et pots oposar als tractaments basats en l’interès legítim.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem trobat cap anàlisi independent de la interfície.'),
      },
      security: {
        e2ee: na('És l’àrea de clients d’un servei de subministrament, sense comunicacions privades entre persones.'),
        transportEncryption: unknown('No hem trobat cap document oficial sobre el xifratge en trànsit.'),
        atRestEncryption: unknown('Les condicions només diuen que l’empresa ha implantat mesures de seguretat adequades.'),
        mfa: unknown('No hem trobat documentació sobre un segon factor per iniciar sessió.'),
        independentAudits: unknown('No hem trobat auditories ni certificacions publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('aiguesdebarcelona.cat no publica cap security.txt.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Aigües de Barcelona és una empresa mixta de majoria privada (Agbar, del grup Veolia, 70 %; AMB, 15 %; Criteria Caixa, 15 %, segons les dades del 2019) que gestiona un servei públic. Per això no hem activat el bloc de servei públic, pensat per a administracions, tot i que la política remet a l’APDCAT i que l’AMB rep dades dels clients com a titular del servei. L’etiqueta de l’App Store és molt incompleta respecte del que el servei tracta. Els dos expedients sancionadors de l’APDCAT (PS 49/2021 i PS-0071/2025) i un del 2016 amb la LOPD anterior repeteixen el mateix problema: dades bancàries associades a la persona equivocada.',
        openQuestions: [
          'Quins proveïdors de fora de la UE actuen com a subencarregats i amb quina garantia?',
          'Per què l’etiqueta de l’App Store no declara el DNI, el compte bancari ni el consum?',
          'Es pot eliminar l’usuari de l’Àrea de Clients sense demanar-ho per escrit?',
        ],
      },
    },

    /* ═══════════════════════════ Clickedu ═══════════════════════════ */
    {
      slug: 'clickedu',
      name: 'Clickedu',
      company: 'clickart',
      categories: ['educacio'],
      tagline: 'El responsable és l’escola; l’app declara ubicació precisa vinculada als alumnes i l’enllaç de privadesa de l’App Store porta a una pàgina que no existeix',
      summary:
        'Clickedu és la plataforma de gestió escolar de Clickart, del grup Sanoma Learning: notes, faltes, missatges, fotos i pagaments d’alumnat i famílies. El responsable del tratamiento és cada centre educatiu i Clickart n’és l’encarregada, de manera que els drets s’exerceixen davant de l’escola. L’etiqueta de l’App Store declara la ubicació precisa, l’identificador del dispositiu i la interacció amb l’app vinculats a la identitat per a «altres finalitats» no especificades. L’enllaç de privadesa que declara retorna un error 404, i la política del web és del 2018 i s’adreça als centres clients, no a les famílies. A favor: servidors a Europa, ISO 27001 i un canal públic per notificar vulnerabilitats.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'unknown',
      jurisdiction: 'Espanya; el responsable és cada centre educatiu i Clickart, Taller de Comunicació, S.L. hi actua com a encarregada del tractament',
      brandColor: '#e4032e',
      links: {
        website: 'https://clickedu.net/',
        privacyPolicy: 'https://clickedu.net/politica-de-privacidad/',
        appStore: appStore('691984809'),
        security: 'https://clickedu.net/declaracion-divulgacion-responsable/',
      },
      accountRequired: f('yes', 'official', ['clickedu-faqs', 'clickedu-app-store'], 'Les credencials les dona el centre educatiu; l’app només serveix per a clients de Clickedu (direcció, professorat, alumnat i famílies).'),
      openSource: f('no', 'official', ['clickedu-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'És l’expedient escolar d’un infant a la butxaca de la família: notes, faltes i retards, comportament, menjador, missatges amb el professorat, àlbums de fotos i rebuts. Són dades de menors que decideix i custodia l’escola. El que afegeix l’app, segons l’etiqueta, és la ubicació precisa i l’activitat dins de l’app vinculades a la persona usuària, per a una finalitat que ni l’etiqueta ni cap política expliquen.',
      dataCollection: [
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', sources: ['clickedu-app-store'], note: 'L’etiqueta la declara vinculada a la identitat per a «altres finalitats», sense concretar-les; cap document públic explica per a què la fa servir l’app.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', sources: ['clickedu-app-store'], note: 'Declarat per a «altres finalitats».' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', sources: ['clickedu-app-store'], note: 'Declarades per a «altres finalitats».' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['clickedu-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['clickedu-faqs'], note: 'Usuari i contrasenya proporcionats pel centre.' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['clickedu-app-store', 'clickedu-faqs'], note: 'La fitxa de l’alumne i les dades personals de la família; els canvis els valida el centre.' }),
        row('nivell-formatiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['clickedu-app-store'], note: 'Notes, deures, faltes, retards, comportament i menjador de l’alumnat, que el professorat registra des de l’app.' }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['clickedu-app-store'], note: 'Missatgeria interna entre el centre, el professorat i les famílies.' }),
        row('fotografies-i-videos', 'yes', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['clickedu-app-store'], note: 'Àlbums de fotos del centre, que solen mostrar menors.' }),
        row('fitxers-i-documents', 'yes', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['clickedu-app-store'], note: 'Carpeta de fitxers del centre.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['clickedu-faqs'], note: 'Les famílies poden pagar rebuts des de l’app si el centre hi ha activat una passarel·la de pagament.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['clickedu-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: unknown('L’etiqueta declara l’identificador del dispositiu per a «altres finalitats» sense concretar si inclou l’identificador publicitari.'),
        thirdPartyTrackersPresent: unknown('No hi ha cap política de l’app que enumeri SDK o proveïdors d’analítica.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['clickedu-app-store'], 'L’etiqueta no declara cap dada per a publicitat, ni pròpia ni de tercers.'),
        profiling: unknown('No hem trobat cap document que descrigui si es fan perfils individuals de l’alumnat.'),
        aiTraining: unknown('Cap document públic diu si les dades de l’alumnat serveixen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['clickedu-privacy-policy', 'clickedu-faqs'], 'La política preveu comunicacions per obligació legal i als proveïdors d’allotjament de la plataforma. Si el centre activa una passarel·la de pagament, les dades de pagament hi passen.'),
        intraGroupSharing: unknown('El delegat de protecció de dades és el del grup Sanoma a Espanya (dpo.spain@sanoma.com), però la política no descriu comunicacions de dades dins del grup.'),
        dataBrokerSales: f('no', 'official', ['clickedu-privacy-policy'], 'La política es compromet a no comunicar dades a tercers sense el consentiment exprés del titular.'),
        internationalTransfers: f('no', 'official', ['clickedu-privacy-policy', 'clickedu-seguretat-2025'], 'La política diu que no transfereix dades fora de la UE, i l’empresa afirma que tots els servidors, a Amazon Web Services, són a Europa.', { mechanism: 'none' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['clickedu-privacy-policy'], 'Les dades de la contractació es conserven mentre duri la relació i un màxim de cinc anys. Els terminis de les dades de l’alumnat els decideix cada centre i no consten enlloc.'),
        dataAfterDeletion: unknown('No hem trobat què fa Clickedu amb les dades d’un centre o d’un alumne quan s’acaba el contracte.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['clickedu-faqs', 'clickedu-escolapios-bilbao-rgpd', 'clickedu-aepd-responsable-centres'], 'El compte el crea i el gestiona el centre, que és el responsable del tractament; la supressió s’ha de demanar a l’escola, tenint en compte que part de l’expedient acadèmic s’ha de conservar per obligació legal.'),
        selfService: unknown('No hem trobat cap opció per eliminar el compte des de l’app.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Adreça’t a la secretaria o al delegat de protecció de dades del centre educatiu, que és el responsable del tractament.',
          'Si el centre no respon, pots reclamar davant de l’APDCAT (centres públics de Catalunya) o de l’AEPD (centres privats i concertats).',
          'Per a les dades que Clickart tracti com a responsable, escriu a dpo@clickedu.net.',
        ],
        sources: ['clickedu-faqs', 'clickedu-privacy-policy', 'clickedu-aepd-responsable-centres'],
      },
      userRights: {
        dataExport: unknown('No hem trobat cap eina ni cap procediment de portabilitat per a les famílies.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['clickedu-privacy-policy', 'clickedu-aepd-responsable-centres'], 'Clickart dona un contacte de drets (dpo@clickedu.net) i un de delegat (dpo.spain@sanoma.com), però per a les dades escolars els drets s’exerceixen davant de cada centre.'),
      },
      controls: {
        adPersonalizationOptOut: na('L’etiqueta no declara publicitat.'),
        telemetryOptOut: unknown('No hem trobat cap opció per desactivar la recollida de dades d’ús.'),
        granularControls: unknown('No hem trobat documentació sobre controls de privadesa per a les famílies ni sobre com desactivar la ubicació dins de l’app, més enllà del permís del sistema operatiu.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: unknown('La missatgeria interna entre centre i famílies no documenta cap xifratge d’extrem a extrem.'),
        transportEncryption: unknown('No hem trobat cap document tècnic sobre el xifratge en trànsit.'),
        atRestEncryption: f('partial', 'official', ['clickedu-privacy-policy'], 'La política es compromet genèricament a assegurar la seudonimització i el xifratge de les dades, sense detallar-ne l’abast.'),
        mfa: f('partial', 'official', ['clickedu-seguretat-2025'], 'L’empresa diu que la verificació en dos passos és obligatòria per a tot el personal escolar; no consta per a les famílies ni per a l’alumnat.'),
        independentAudits: f('yes', 'official', ['clickedu-qui-som', 'clickedu-faqs'], 'Certificació ISO/IEC 27001:2022, dins la certificació multisite de Sanoma Learning, i ISO 9001. No hem vist els certificats ni l’abast.'),
        bugBounty: unknown('La declaració de divulgació responsable no preveu recompenses.'),
        vulnerabilityDisclosure: f('yes', 'official', ['clickedu-divulgacio-responsable'], 'security.txt i declaració de divulgació responsable amb l’adreça security@clickedu.net i acusament de recepció en tres dies.'),
      },
      alternatives: [
        { app: 'google-classroom', comparability: 'partial', rationale: 'Plataforma d’aula de moltes escoles, amb un compte d’educació sense publicitat.', tradeOffs: 'No gestiona l’expedient, les faltes ni els rebuts, i l’elecció la fa el centre, no la família.' },
        { app: 'educamos-familias', comparability: 'equivalent', rationale: 'Plataforma de gestió escolar amb app per a famílies i el mateix model de responsable (el centre) i encarregada (l’empresa).', tradeOffs: 'Allotja les dades als Estats Units i l’etiqueta declara rastreig.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Com a Educamos, el responsable és el centre i l’empresa és l’encarregada: les famílies no trien l’app ni poden negociar-ne les condicions. El problema principal és la transparència: l’App Store enllaça una política inexistent (clickartedu.com retorna 404) i la del web, del 2018, és per als centres que contracten la llicència. Hi ha una discrepància d’adreces: l’App Store situa Clickart al carrer de la Llacuna de Barcelona i la política, a l’Hospitalet de Llobregat. No hem trobat sancions ni incidents públics relacionats amb Clickedu.',
        openQuestions: [
          'Per a què fa servir l’app la ubicació precisa vinculada a la identitat?',
          'Què vol dir «altres finalitats» a l’etiqueta de l’App Store?',
          'Quant de temps conserva Clickart les dades d’un centre o d’un alumne quan acaba el contracte?',
        ],
      },
    },
  ],

  incidents: [
    {
      slug: 'fcb-aepd-biometria-cens-socis-2026',
      title: 'Multa de 500.000 euros al FC Barcelona per la biometria del cens de socis sense avaluació d’impacte',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['fc-barcelona-oficial'],
      company: 'futbol-club-barcelona',
      occurredAt: '2023-03-21',
      disclosedAt: '2026-03-04',
      description:
        'El març del 2023 el FC Barcelona va obrir una campanya obligatòria d’actualització del cens de socis, pel web del Club i per l’App Socis (no per l’app oficial), que feia servir una comparació facial per verificar la identitat dels socis; també s’oferia gravar la veu per autenticar-se per telèfon. Arran de diverses reclamacions de socis, l’AEPD va obrir l’expedient EXP202305134 i va concloure que el Club no havia fet una avaluació d’impacte vàlida abans de tractar dades biomètriques d’uns 143.000 socis. Va imposar una multa de 500.000 euros per l’article 35 del RGPD i va arxivar la infracció de l’article 9. La proposta inicial superava els 6 milions d’euros. El Club va anunciar que recorreria la sanció.',
      affectedPeople: 'Uns 143.000 socis i sòcies del FC Barcelona.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        fineAmountEur: 500000,
        legalBasis: 'Article 35 del RGPD (avaluació d’impacte), tipificat a l’article 83.4.a',
        status: 'appealed',
      },
      sources: ['fcb-aepd-ps-00450-2024', 'fcb-xataka-biometria-2026'],
    },
    {
      slug: 'aigues-bcn-apdcat-confidencialitat-2025',
      title: 'L’APDCAT sanciona Aigües de Barcelona per girar una factura al compte bancari d’una altra persona',
      type: 'regulatory-fine',
      severity: 'low',
      apps: ['aigues-de-barcelona'],
      company: 'aigues-de-barcelona',
      occurredAt: '2024-03-03',
      disclosedAt: '2025-12-09',
      description:
        'Una clienta va rebre un avís d’impagament i va descobrir que Aigües de Barcelona li havia girat la factura a un compte bancari d’un tercer, que ella no havia facilitat mai, i que les seves dades s’havien comunicat a un banc amb què no tenia cap relació. L’APDCAT va concloure que l’empresa no tenia mesures, des del disseny i per defecte, per evitar que es vinculessin malament la referència del mandat de pagament i el número de contracte, i que havia vulnerat el principi de confidencialitat. La sanció proposada era de 10.000 euros; amb el reconeixement de responsabilitat i el pagament avançat, l’empresa en va pagar 6.000. La data d’ocurrència és la de la denúncia.',
      affectedPeople: 'La persona denunciant i el titular del compte bancari al qual es va girar la factura.',
      regulatory: {
        authority: 'Autoritat Catalana de Protecció de Dades',
        fineAmountEur: 6000,
        legalBasis: 'Article 5.1.f del RGPD (confidencialitat), tipificat a l’article 83.5.a',
        status: 'final',
      },
      sources: ['aigues-bcn-apdcat-ps-0071-2025'],
    },
    {
      slug: 'aigues-bcn-apdcat-exactitud-2022',
      title: 'L’APDCAT multa Aigües de Barcelona per assignar noms d’altres clients al DNI d’una persona',
      type: 'regulatory-fine',
      severity: 'low',
      apps: ['aigues-de-barcelona'],
      company: 'aigues-de-barcelona',
      occurredAt: '2021-02-01',
      disclosedAt: '2022-02-09',
      description:
        'Aigües de Barcelona va emetre 12 factures i els rebuts domiciliats corresponents assignant els noms i cognoms de cinc persones diferents al DNI de la persona denunciant, de manera que els rebuts es van cobrar al seu compte amb noms d’altres titulars. L’APDCAT va imposar una multa de 4.000 euros per vulnerar el principi d’exactitud; l’empresa en va pagar 2.400 per avançat.',
      affectedPeople: 'La persona denunciant i cinc clients més els noms dels quals es van vincular al seu DNI.',
      regulatory: {
        authority: 'Autoritat Catalana de Protecció de Dades',
        fineAmountEur: 4000,
        legalBasis: 'Article 5.1.d del RGPD (exactitud), tipificat a l’article 83.5.a',
        status: 'final',
      },
      sources: ['aigues-bcn-apdcat-ps-49-2021'],
    },
  ],

  storeIds: {
    'bonpreuesclat-compra-online': 'com.bonpreu.grocery.release',
    'fc-barcelona-oficial': 'cat.fcbarcelona.FCBMobile',
    'aigues-de-barcelona': 'es.synectic.ofex',
    clickedu: 'org.clickedu.Clickedu',
  },
}
