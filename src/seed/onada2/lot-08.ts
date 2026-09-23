import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/**
 * Lot 08 de la segona onada: la banca en línia espanyola (Santander, Openbank,
 * CaixaBankNow i imagin), la televisió d’Orange i quatre aplicacions asiàtiques
 * de continguts curts i edició d’imatge (CapCut, Hypic, GoodNovel i GoodShort).
 */
export const lot: SeedLot = {
  companies: [
    /* ── MasOrange ── */
    {
      slug: 'masorange',
      name: 'MasOrange',
      legalName: 'MASORANGE, S.L.',
      description:
        'Grup de telecomunicacions nascut el 2024 de la fusió d’Orange España i MásMóvil. És el primer operador d’Espanya per nombre de línies i agrupa marques com Orange, Jazztel, Yoigo, Pepephone i Simyo.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'private',
      foundedYear: 2024,
      primaryRevenueModel: 'subscription',
      website: 'https://www.masorange.es/',
      productDomains: ['orange.es', 'jazztel.com', 'yoigo.com'],
    },
    {
      slug: 'orange-espagne',
      name: 'Orange Espagne',
      legalName: 'ORANGE ESPAGNE, S.A.U.',
      parent: 'masorange',
      description:
        'Entitat espanyola amb NIF A-82009812 que presta els serveis de telefonia i televisió de la marca Orange i que consta com a responsable del tractament a les seves polítiques de privadesa.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'subsidiary',
      foundedYear: 1998,
      primaryRevenueModel: 'subscription',
      website: 'https://www.orange.es/',
      productDomains: ['orange.es'],
      privacyContact: 'orangeproteccion.datos@es.orange.com',
    },

    /* ── Grup Santander ── */
    {
      slug: 'banco-santander',
      name: 'Banco Santander',
      legalName: 'Banco Santander, S.A.',
      description:
        'Grup bancari espanyol cotitzat, amb seu a Madrid i presència a Europa i Amèrica. És l’entitat responsable del tractament de les dades de la clientela de Santander España.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'public',
      foundedYear: 1857,
      primaryRevenueModel: 'mixed',
      website: 'https://www.bancosantander.es/',
      productDomains: ['bancosantander.es', 'santander.com', 'openbank.es'],
      privacyContact: 'privacidad@gruposantander.es',
    },
    {
      slug: 'open-bank-sa',
      name: 'Open Bank',
      legalName: 'Open Bank, S.A.',
      parent: 'banco-santander',
      description:
        'Banc digital del grup Santander, amb NIF A-28021079 i domicili a la plaça de Santa Bárbara, 2, de Madrid. Opera sense oficines i figura com a responsable del tractament independent del banc matriu.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'subsidiary',
      foundedYear: 1995,
      primaryRevenueModel: 'mixed',
      website: 'https://www.openbank.es/',
      productDomains: ['openbank.es'],
      privacyContact: 'privacy@openbank.es',
    },

    /* ── CaixaBank ── */
    {
      slug: 'caixabank',
      name: 'CaixaBank',
      legalName: 'CaixaBank, S.A.',
      description:
        'Grup bancari espanyol cotitzat, amb NIF A-08663619 i domicili social a València. Tracta les dades de la clientela en corresponsabilitat amb la resta de societats del grup (VidaCaixa, CaixaBank Payments & Consumer, Nuevo Micro Bank i altres).',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'Agencia Española de Protección de Datos',
      ownership: 'public',
      foundedYear: 2011,
      primaryRevenueModel: 'mixed',
      website: 'https://www.caixabank.es/',
      productDomains: ['caixabank.es', 'imaginbank.com', 'imagin.com'],
    },

    /* ── ByteDance ── */
    {
      slug: 'bytedance-pte',
      name: 'ByteDance Pte. Ltd.',
      legalName: 'ByteDance Pte. Ltd.',
      parent: 'bytedance',
      description:
        'Societat singapuresa del grup ByteDance, amb domicili a 1 Raffles Quay, South Tower. Consta com a responsable del tractament de CapCut i de Hypic, també per a les persones usuàries de l’Espai Econòmic Europeu, sense cap establiment europeu declarat.',
      headquartersCountry: 'SG',
      ownership: 'subsidiary',
      primaryRevenueModel: 'mixed',
      website: 'https://www.capcut.com/',
      productDomains: ['capcut.com', 'hypic.com'],
    },

    /* ── New Reading Technology ── */
    {
      slug: 'new-reading-technology',
      name: 'Singapore New Reading Technology',
      legalName: 'Singapore New Reading Technology Pte Ltd.',
      description:
        'Editorial digital amb seu a Singapur (8 Burn Road, Trivex) que explota GoodNovel, de novel·les per capítols de pagament, i GoodShort, de sèries verticals curtes. No declara cap establiment a la Unió Europea ni cap representant de l’article 27 del RGPD.',
      headquartersCountry: 'SG',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.goodnovel.com/',
      productDomains: ['goodnovel.com', 'goodshort.com'],
      privacyContact: 'contact@goodnovel.com',
    },
  ],

  sources: [
    /* ── Orange ── */
    s('orange-tv-app-store', 'Orange TV en el App Store', 'https://apps.apple.com/es/app/id690042828', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per Orange Espagne. Serveix per a la matriu de dades i per confirmar que l’aplicació declara identificadors utilitzats per rastrejar-te fora d’Orange.',
    }),
    s('orange-privacy-policy', 'Política de privacidad Mi Orange', 'https://www.orange.es/politicaproteccionmiorange', 'Orange Espagne, S.A.U.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de privadesa de les aplicacions d’Orange España. Identifica el responsable del tractament, el canal de l’oficina de protecció de dades i els criteris generals de conservació. És la política oficial llegible més propera a Orange TV, perquè l’enllaç concret que declara la fitxa de l’App Store no resol.',
    }),
    s('orange-aepd-duplicados-sim', 'Resolución de recurso de reposición EXP202213023 (ORANGE ESPAGNE, S.A.U.)', 'https://www.aepd.es/documento/reposicion-ps-00332-2023.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      summary:
        'Resolució de l’AEPD que confirma una sanció d’1,2 milions d’euros a Orange Espagne pel procediment d’emissió de duplicats de targetes SIM, per infracció dels articles 6 i 25 del RGPD.',
    }),

    /* ── Santander ── */
    s('santander-app-privacy-policy', 'Política de privacidad de la App Santander', 'https://www.bancosantander.es/politica-de-privacidad/app/', 'Banco Santander, S.A.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política específica de l’aplicació: permisos que demana (ubicació, contactes, càmera, biometria), finalitats, bases jurídiques, perfilat comercial i canal d’exercici de drets.',
    }),
    s('santander-app-store', 'Santander España en el App Store', 'https://apps.apple.com/es/app/id408043474', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per Banco Santander. No declara cap dada utilitzada per rastrejar-te fora de l’aplicació.',
    }),
    s('santander-hackerone', 'Banco Santander | Vulnerability Disclosure Policy', 'https://hackerone.com/bancosantander', 'HackerOne', 'technical-doc', 'primary', {
      summary:
        'Política de divulgació de vulnerabilitats del grup Santander publicada a HackerOne. Acredita que hi ha un canal formal per comunicar errors de seguretat.',
    }),
    s('santander-breach-2024-record', 'Cloud company Snowflake denies that reported breach originated with its products', 'https://therecord.media/snowflake-response-reported-breach-santander-ticketmaster', 'The Record (Recorded Future News)', 'press', 'secondary', {
      publishedAt: '2024-06-01',
      summary:
        'Cronologia de la filtració de 2024: Santander va reconèixer l’accés a una base de dades allotjada en un proveïdor extern amb dades de clientela d’Espanya, Xile i l’Uruguai i de tota la plantilla del grup.',
    }),
    s('santander-breach-2024-dive', 'Santander warns US employees bank account info stolen in third-party database hack', 'https://www.cybersecuritydive.com/news/santander-employees-database-hack/719394/', 'Cybersecurity Dive', 'press', 'secondary', {
      publishedAt: '2024-06-14',
      summary:
        'Detalla l’abast de la filtració i la vinculació amb la campanya d’accessos a comptes de Snowflake sense segon factor.',
    }),

    /* ── Openbank ── */
    s('openbank-privacy-policy', 'Política de Privacidad Openbank, edición 1.2023', 'https://www.openbank.es/assets/static/pdf/PieDePagina/Proteccion_Datos_191223.pdf', 'Open Bank, S.A.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Document de 50 pàgines amb el detall del perfilat creditici (fitxers ASNEF, BADEXCUG i CIRBE), les finalitats publicitàries, les transferències internacionals i els canals d’exercici de drets.',
    }),
    s('openbank-app-store', 'Openbank | Banca online en el App Store', 'https://apps.apple.com/es/app/id1217874244', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació d’Openbank, que declara identificadors utilitzats per rastrejar-te i publicitat de tercers.',
    }),

    /* ── CaixaBank ── */
    s('caixabank-privacy-policy', 'Política de privacidad de CaixaBank, S.A.', 'https://www.caixabank.es/particular/general/privacy-policy.html', 'CaixaBank, S.A.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política única del grup: categories de dades, bases jurídiques, perfilat comercial subjecte a consentiment, corresponsabilitat amb les societats del grup i consultes als fitxers de solvència.',
    }),
    s('caixabanknow-app-store', 'CaixaBankNow en el App Store', 'https://apps.apple.com/es/app/id318806094', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de CaixaBankNow. Declara informació financera, ubicació, dades de contacte, identificadors, dades d’ús i diagnòstics com a dades utilitzades per rastrejar-te.',
    }),
    s('imagin-app-store', 'imagin: Banco Móvil y Finanzas en el App Store', 'https://apps.apple.com/es/app/id1069665204', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa d’imagin. Declara ubicació, identificadors i dades d’ús com a dades utilitzades per rastrejar-te.',
    }),
    s('imagin-data-treatment', 'Tratamiento de datos — información legal de imaginBank', 'https://www.imaginbank.com/informacionlegal/tratamientodedatos_en.html', 'CaixaBank, S.A.', 'privacy-center', 'primary', {
      language: 'es',
      summary:
        'Pàgina legal d’imagin sobre el tractament de dades: remet a la política del grup CaixaBank, explica l’ús de galetes per a publicitat personalitzada i indica el camí dins de l’aplicació per exercir drets.',
    }),
    s('caixabank-aepd-fine-2021', 'Spanish Data Protection Authority (AEPD) imposes fine of 6.000.000 EUR on CAIXABANK, S.A.', 'https://edpb.europa.eu/news/national-news/2021/spanish-data-protection-authority-aepd-imposes-fine-6000000-eur-caixabank_et', 'European Data Protection Board', 'regulator', 'authority', {
      publishedAt: '2021-01-15',
      summary:
        'Nota del Comitè Europeu de Protecció de Dades sobre la sanció de 6 milions d’euros a CaixaBank per infracció dels articles 6, 13 i 14 del RGPD: bases jurídiques confuses i informació insuficient sobre les finalitats.',
    }),
    s('caixabank-audiencia-nacional-2025', 'La Audiencia Nacional reduce a 2 millones de euros la multa a CaixaBank por infracción del RGPD', 'https://baylos.com/en/blog/2025/la-audiencia-nacional-reduce-a-2-millones-de-euros-la-multa-a-caixabank-por-infraccion-del-rgpd', 'Baylos', 'press', 'secondary', {
      language: 'es',
      publishedAt: '2025-01-01',
      summary:
        'Informa que l’Audiència Nacional va rebaixar la sanció de 6 a 2 milions d’euros, mantenint la infracció declarada.',
    }),

    /* ── CapCut i Hypic ── */
    s('capcut-privacy-policy', 'CapCut Privacy Policy', 'https://www.capcut.com/clause/privacy-policy', 'ByteDance Pte. Ltd.', 'privacy-policy', 'primary', {
      summary:
        'Política global de CapCut amb l’apartat aplicable a l’Espai Econòmic Europeu: responsable a Singapur, dades de rostre i cos detectades a les imatges, publicitat personalitzada amb consentiment, clàusules contractuals tipus i formulari de drets.',
    }),
    s('capcut-terms', 'CapCut Terms of Service', 'https://www.capcut.com/clause/terms-of-service', 'ByteDance Pte. Ltd.', 'terms', 'primary', {
      summary:
        'Condicions del servei: llicència perpètua, mundial, transferible i sublicenciable sobre el contingut de les persones usuàries, i apartat 5 sobre eliminació de compte i pèrdua irreversible del contingut.',
    }),
    s('capcut-app-store', 'CapCut - Editor de vídeo en el App Store', 'https://apps.apple.com/es/app/id1500855883', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de CapCut: identificadors utilitzats per rastrejar-te, i contingut de la persona usuària, identificadors, dades d’ús i diagnòstics vinculats al compte.',
    }),
    s('capcut-terms-press-2025', 'CapCut desata la polémica con sus nuevos términos y condiciones', 'https://hipertextual.com/2025/06/capcut-polemica-nuevos-terminos-condiciones', 'Hipertextual', 'press', 'secondary', {
      language: 'es',
      publishedAt: '2025-06-20',
      summary:
        'Anàlisi de l’actualització de condicions del 12 de juny de 2025 i de l’abast de la llicència que CapCut es reserva sobre els vídeos, fins i tot els que no s’han publicat.',
    }),
    s('hypic-privacy-policy', 'Hypic Privacy Policy', 'https://m.hypic.com/clause/hypic-privacy-policy', 'ByteDance Pte. Ltd.', 'privacy-policy', 'primary', {
      summary:
        'Política de Hypic: responsable a Singapur, detecció de trets facials i corporals per a les funcions de retoc, esborrat immediat de les imatges un cop aplicada la funció, servidors als Estats Units i Singapur i clàusules contractuals tipus per a l’EEE.',
    }),
    s('hypic-app-store', 'Hypic - Photo Editor & AI Art en el App Store', 'https://apps.apple.com/es/app/id1644042837', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Hypic: identificadors utilitzats per rastrejar-te i fotografies o vídeos declarats com a dades no vinculades amb la identitat.',
    }),

    /* ── GoodNovel i GoodShort ── */
    s('goodnovel-privacy-policy', 'GoodNovel Privacy Policy', 'https://www.goodnovel.com/privacy', 'Singapore New Reading Technology Pte Ltd.', 'privacy-policy', 'primary', {
      summary:
        'Política de GoodNovel: responsable a Singapur, dades de lectura i de compra, publicitat personalitzada amb socis, compromís de no vendre dades, eliminació de compte per correu en quinze dies i edat mínima de dotze anys.',
    }),
    s('goodnovel-app-store', 'GoodNovel - leer novela libro en el App Store', 'https://apps.apple.com/es/app/id1503128132', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de GoodNovel: identificadors utilitzats per rastrejar-te i identificadors i diagnòstics declarats com a no vinculats amb la identitat.',
    }),
    s('goodshort-privacy-policy', 'GoodShort Privacy Policy', 'https://www.goodshort.com/other/static_file/privacy_policy.html', 'Singapore New Reading Technology Pte Ltd.', 'privacy-policy', 'primary', {
      summary:
        'Política de GoodShort, bessona de la de GoodNovel i amb el mateix correu de contacte: dades de visualització i de compra, transferències als Estats Units, eliminació en quinze dies i pèrdua del saldo de monedes.',
    }),
    s('goodshort-app-store', 'GoodShort - Dramas Cortos Hub en el App Store', 'https://apps.apple.com/es/app/id6448176203', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de GoodShort: identificadors utilitzats per rastrejar-te i vinculats amb la identitat, i diagnòstics no vinculats.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ Orange TV ═══════════════════════════ */
    {
      slug: 'orange-tv',
      name: 'Orange TV',
      company: 'orange-espagne',
      categories: ['video-i-streaming', 'telecomunicacions'],
      tagline: 'Televisió d’operadora que declara identificadors per rastrejar fora d’Orange',
      summary:
        'Orange TV només té sentit si ets client d’Orange: el compte de televisió és el compte de la línia. Això vol dir que el que mires s’acumula al costat de les dades de facturació i de consum de la teva operadora. L’etiqueta de l’App Store declara identificadors utilitzats per rastrejar-te en aplicacions i webs d’altres empreses, i publicitat de tercers, cosa poc habitual en una aplicació de televisió inclosa a la quota.',
      platforms: ['ios', 'android', 'web', 'other'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      userBase: 'Servei de televisió de MasOrange, el primer operador espanyol per nombre de línies',
      links: {
        website: 'https://www.orange.es/television',
        privacyPolicy: 'https://www.orange.es/politicaproteccionmiorange',
        appStore: 'https://apps.apple.com/es/app/id690042828',
      },
      accountRequired: f('yes', 'official', ['orange-tv-app-store'], 'L’aplicació és per a la clientela d’Orange i cal identificar-se amb les credencials de la línia.'),
      openSource: f('no', 'official', ['orange-tv-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'L’historial de visualització televisiva és un dels indicadors més fiables de conviccions polítiques, religioses i hàbits domèstics. Aquí no viatja sol: va lligat a un compte d’operadora que ja sap qui ets, on vius, quant pagues i quan ets a casa.',
      dataCollection: [
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['orange-tv-app-store', 'orange-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['orange-tv-app-store'], note: 'L’etiqueta declara «otros datos de contacto del usuario» vinculats a la identitat.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['orange-tv-app-store'], note: 'Declarat sota «publicidad de terceros».' }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['orange-tv-app-store'], note: 'L’etiqueta inclou identificadors a l’apartat de dades utilitzades per rastrejar-te.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['orange-tv-app-store'] }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts', 'recomanacions-algoritmiques'], sources: ['orange-tv-app-store'], note: 'L’etiqueta declara la personalització del producte a partir de les dades d’ús; en una aplicació de televisió, això és l’historial del que es mira.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['orange-tv-app-store'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['orange-privacy-policy'], note: 'El servei es factura amb la línia; la política general parla de dades de facturació i de consum.' }),
        row('ubicacio-aproximada', 'unknown', { sources: ['orange-privacy-policy'], note: 'La política general d’Orange preveu el tractament de dades d’ubicació amb consentiment, però no es pot confirmar si Orange TV les fa servir.' }),
        row('adreca-ip', 'unknown', { note: 'No hi ha cap document públic d’Orange TV que ho detalli.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['orange-tv-app-store'], 'L’etiqueta declara identificadors que poden fer-se servir per rastrejar-te en aplicacions i llocs web propietat d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['orange-tv-app-store']),
        thirdPartyTrackersPresent: f('yes', 'official', ['orange-tv-app-store'], 'L’etiqueta inclou una finalitat de «publicidad de terceros».'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['orange-tv-app-store'], 'L’etiqueta declara identificadors per a publicitat de tercers.'),
        profiling: f('partial', 'official', ['orange-tv-app-store', 'orange-privacy-policy'], 'L’etiqueta declara una finalitat de personalització del producte; la política general parla de descomptes i promocions personalitzats.'),
        aiTraining: unknown('Cap document públic d’Orange no diu si les dades de visualització s’utilitzen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['orange-tv-app-store'], 'Publicitat de tercers declarada a l’etiqueta de l’App Store.'),
        intraGroupSharing: f('partial', 'official', ['orange-privacy-policy'], 'La política d’Orange preveu el tractament dins de l’organització, però no publica la llista de societats de MasOrange que hi accedeixen.'),
        dataBrokerSales: unknown('No consta cap venda de dades a intermediaris.'),
        internationalTransfers: unknown('La política de Mi Orange no descriu transferències internacionals ni els mecanismes que hi aplicaria.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem localitzat cap informe de transparència d’Orange España sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['orange-privacy-policy'], 'La política indica que les dades es conserven durant la relació contractual i, després, durant els terminis de prescripció, sense concretar-ne cap per categoria.'),
        dataAfterDeletion: f('partial', 'official', ['orange-privacy-policy'], 'Un cop acabat el contracte, les dades es mantenen fins que prescriuen les possibles responsabilitats.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['orange-privacy-policy'], 'No hi ha un compte d’Orange TV independent: donar-se de baixa vol dir cancel·lar el servei de televisió o el contracte amb l’operadora, i exercir després el dret de supressió.'),
        selfService: unknown('No hem trobat cap opció documentada d’eliminació del compte dins de l’aplicació ni de l’àrea de client.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Cancel·la el servei de televisió o el contracte des de l’àrea de client d’Orange o per telèfon.',
          'Exerceix el dret de supressió escrivint a orangeproteccion.datos@es.orange.com amb la referència «Oficina DPO» i una còpia del document identificatiu.',
          'Guarda la confirmació; si no hi ha resposta dins de termini, es pot reclamar davant de l’AEPD.',
        ],
        obstacles:
          'L’aplicació no té un compte propi, de manera que la sortida passa sempre per la baixa contractual i pel canal escrit de protecció de dades.',
        sources: ['orange-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['orange-privacy-policy'], 'La política reconeix el dret de portabilitat, però només per la via del correu a l’oficina de protecció de dades.', {
          url: 'mailto:orangeproteccion.datos@es.orange.com',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['orange-privacy-policy'], 'Canal escrit amb el delegat de protecció de dades, amb còpia del document identificatiu.', {
          url: 'mailto:orangeproteccion.datos@es.orange.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('No hem localitzat cap panell de preferències publicitàries específic d’Orange TV.'),
        telemetryOptOut: unknown('L’aplicació no documenta cap opció per desactivar la telemetria.'),
        granularControls: unknown('No consta cap panell de privadesa per finalitat dins de l’aplicació.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem pogut revisar els fluxos de consentiment de l’aplicació amb prou detall.'),
      },
      security: {
        e2ee: na('El servei distribueix continguts audiovisuals; no transporta comunicacions privades entre persones.'),
        transportEncryption: unknown('Orange no publica documentació tècnica sobre el xifratge del servei de televisió.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('No consta si l’accés a Orange TV admet un segon factor.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni cap fitxer security.txt a orange.es.'),
        vulnerabilityDisclosure: unknown('No hi ha cap política pública de divulgació de vulnerabilitats localitzable a orange.es.'),
      },
      alternatives: [
        {
          app: 'movistar-plus',
          comparability: 'partial',
          rationale: 'Televisió d’operadora equivalent en catàleg i funcionament, amb la mateixa lògica de compte lligat a la línia.',
          tradeOffs: 'No és una millora de privadesa: només canvia l’operadora que acumula l’historial de visualització.',
        },
        {
          app: 'netflix',
          comparability: 'partial',
          rationale: 'Servei de vídeo sota demanda independent de l’operadora, amb un compte que es pot eliminar sense trencar cap contracte de telefonia.',
          tradeOffs: 'No inclou canals en directe ni esdeveniments esportius.',
        },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La fitxa es basa sobretot en l’etiqueta de l’App Store, perquè Orange no publica cap política de privadesa específica d’Orange TV: l’enllaç que declara la mateixa fitxa de l’App Store (orange.es/politicaproteccion.html) no resol.',
        openQuestions: [
          'Orange TV té una política de privadesa pròpia o es regeix per la de la línia?',
          'Amb quins tercers publicitaris comparteix els identificadors del televisor i de l’aplicació?',
          'Es pot desactivar la publicitat personalitzada des de l’àrea de client?',
        ],
      },
    },

    /* ═══════════════════════════ Santander España ═══════════════════════════ */
    {
      slug: 'santander',
      name: 'Santander España',
      company: 'banco-santander',
      categories: ['banca-i-finances'],
      tagline: 'Banca mòbil sense rastreig publicitari declarat, però amb perfilat comercial',
      summary:
        'L’etiqueta de l’App Store de Santander és de les més contingudes de la banca espanyola: no declara cap dada utilitzada per rastrejar-te fora de l’aplicació. El que sí que hi ha és perfilat comercial intern per oferir productes segmentats, i una filtració de 2024 en un proveïdor extern que va afectar la clientela d’Espanya, Xile i l’Uruguai i tota la plantilla del grup.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      userBase: 'Banc amb més de 170 milions de clients al món i uns 10 milions a Espanya',
      links: {
        website: 'https://www.bancosantander.es/',
        privacyPolicy: 'https://www.bancosantander.es/politica-de-privacidad/app/',
        appStore: 'https://apps.apple.com/es/app/id408043474',
      },
      accountRequired: f('yes', 'official', ['santander-app-privacy-policy'], 'L’aplicació només funciona amb les credencials d’un contracte bancari vigent.'),
      openSource: f('no', 'official', ['santander-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Un extracte bancari és una biografia: on menjes, on t’has tractat, a qui pagues cada mes i quant guanyes. Aquí hi conviuen amb la geolocalització que demana l’aplicació, l’agenda de contactes que necessita Bizum i el perfil comercial que el banc construeix per decidir què t’ofereix.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['santander-app-privacy-policy'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['santander-app-privacy-policy'], note: 'L’aplicació demana accés a la càmera per escanejar documents d’identitat.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['santander-app-privacy-policy'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau', 'elaboracio-de-perfils'], sources: ['santander-app-privacy-policy'], note: 'Els moviments del compte alimenten tant la vigilància antifrau com el perfil comercial.' }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['santander-app-privacy-policy'], note: 'La política esmenta dades biomètriques per a l’autenticació. No detalla si la comprovació es fa només al dispositiu amb Face ID o Touch ID.' }),
        row('llista-de-contactes', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['santander-app-privacy-policy', 'santander-app-store'], note: 'L’etiqueta la declara com a dada no vinculada amb la identitat; el permís el demanen funcions com Bizum.' }),
        row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['santander-app-store'], note: 'Declarada com a dada no vinculada, per a la funcionalitat de l’aplicació (cerca d’oficines i caixers).' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['santander-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['santander-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['santander-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['santander-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['santander-app-store'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['santander-app-privacy-policy'], note: 'La política esmenta el seguiment del comportament de navegació amb galetes.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['santander-app-privacy-policy'], note: 'El perfil comercial serveix per decidir quins productes es mostren a l’aplicació.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['santander-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['santander-app-store'], 'L’única finalitat publicitària declarada és la del mateix desenvolupador, amb l’identificador d’usuari.'),
        thirdPartyTrackersPresent: unknown('L’etiqueta no declara publicitat de tercers, però no hem fet una anàlisi de trànsit de l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['santander-app-store', 'santander-app-privacy-policy'], 'Hi ha publicitat del mateix banc basada en el perfil comercial, però no publicitat de tercers declarada.'),
        profiling: f('yes', 'official', ['santander-app-privacy-policy'], 'El banc informa de productes «de forma general y segmentada o personalizada» segons el perfil comercial de cada persona.'),
        aiTraining: unknown('La política no diu si les dades s’utilitzen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['santander-app-privacy-policy'], 'Proveïdors que tracten dades per compte del banc, amb contracte d’encarregat.'),
        intraGroupSharing: f('partial', 'official', ['santander-app-privacy-policy'], 'La política esmenta el grup Santander, però no en detalla les societats ni les finalitats concretes.'),
        dataBrokerSales: unknown('No consta cap venda de dades a intermediaris.'),
        internationalTransfers: unknown('La política de l’aplicació no descriu les transferències internacionals ni el mecanisme aplicat.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem localitzat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['santander-app-privacy-policy'], 'La política diu que les dades es conserven «mientras sean necesarias» i remet a la informació de cada servei, sense terminis per categoria.'),
        dataAfterDeletion: f('partial', 'official', ['santander-app-privacy-policy'], 'La normativa de prevenció del blanqueig obliga a conservar la documentació de la relació durant deu anys, de manera que tancar els productes no esborra l’expedient.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['santander-app-privacy-policy'], 'No hi ha un «compte» de l’aplicació separable del contracte bancari: cal cancel·lar els productes i exercir després el dret de supressió, limitat per les obligacions legals de conservació.'),
        selfService: f('no', 'official', ['santander-app-privacy-policy'], 'El dret de supressió s’exerceix per escrit a privacidad@gruposantander.es o a l’oficina del delegat de protecció de dades.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Cancel·la els comptes, les targetes i la resta de productes contractats a l’oficina o des de la banca en línia.',
          'Escriu a privacidad@gruposantander.es invocant el dret de supressió de l’article 17 del RGPD.',
          'Espera la resposta i tingues present que la documentació subjecta a la Llei 10/2010 de prevenció del blanqueig es conserva bloquejada durant deu anys.',
          'Si no obtens resposta dins de termini, reclama davant de l’AEPD.',
        ],
        obstacles:
          'Com a tota la banca, el dret de supressió xoca amb les obligacions legals de conservació: bona part de les dades quedaran bloquejades, no esborrades.',
        dataRetained: 'Documentació de la relació contractual i de les operacions durant els terminis fiscals i de prevenció del blanqueig de capitals.',
        sources: ['santander-app-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['santander-app-privacy-policy'], 'La política reconeix els drets del RGPD, inclosa la portabilitat, però per la via del correu al delegat de protecció de dades.', {
          url: 'mailto:privacidad@gruposantander.es',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['santander-app-privacy-policy'], 'Canal escrit del delegat de protecció de dades, amb reclamació posterior davant de l’AEPD.', {
          url: 'mailto:privacidad@gruposantander.es',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['santander-app-privacy-policy'], 'El tractament comercial «respetará las preferencias que el Usuario tenga configuradas», però la política no descriu on és aquest panell ni què abasta.'),
        telemetryOptOut: unknown('La política no esmenta cap opció per desactivar l’analítica d’ús.'),
        granularControls: f('partial', 'official', ['santander-app-privacy-policy'], 'Hi ha consentiments separables (geolocalització, notificacions, comunicacions comercials), però no un panell únic de privadesa per finalitat.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem revisat els fluxos de consentiment de l’aplicació amb prou detall per afirmar-ho.'),
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('El banc no publica documentació tècnica sobre el xifratge del canal de l’aplicació.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: f('yes', 'official', ['santander-app-privacy-policy'], 'L’aplicació admet autenticació biomètrica i la normativa de pagaments exigeix autenticació reforçada per a les operacions.', {
          methods: ['app-push', 'sms'],
        }),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('La pàgina de HackerOne es presenta com a política de divulgació; no hem pogut confirmar si paga recompenses.'),
        vulnerabilityDisclosure: f('yes', 'official', ['santander-hackerone'], 'El grup manté una política de divulgació de vulnerabilitats publicada a HackerOne.', {
          url: 'https://hackerone.com/bancosantander',
        }),
      },
      alternatives: [
        {
          app: 'bbva',
          comparability: 'equivalent',
          rationale: 'Banca mòbil espanyola equivalent en funcions.',
          tradeOffs: 'BBVA també arrossega una sanció de l’AEPD per bases jurídiques i informació insuficients.',
        },
        {
          app: 'bankinter',
          comparability: 'equivalent',
          rationale: 'Alternativa de banca mòbil amb una etiqueta de privadesa que convé comparar abans de decidir.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La troballa útil és el contrast entre l’etiqueta de l’App Store de Santander, que no declara cap rastreig, i la de CaixaBankNow o imagin, que sí que en declaren. Dins d’un mateix sector regulat, la decisió de rastrejar és una tria de l’entitat, no una necessitat tècnica.',
        openQuestions: [
          'On és exactament el panell de preferències comercials dins de l’aplicació?',
          'Les dades biomètriques d’autenticació surten del dispositiu?',
        ],
      },
    },

    /* ═══════════════════════════ Openbank ═══════════════════════════ */
    {
      slug: 'openbank',
      name: 'Openbank',
      company: 'open-bank-sa',
      categories: ['banca-i-finances'],
      tagline: 'Banc digital que documenta el perfilat creditici amb un detall poc habitual',
      summary:
        'La política d’Openbank és de les poques del sector que explica, pas a pas, quina lògica segueix el perfilat que decideix si et concedeix un préstec o una targeta: quines fonts internes i externes hi entren, quins fitxers de solvència es consulten i com demanar la intervenció d’una persona. A canvi, l’aplicació declara a l’App Store identificadors utilitzats per rastrejar-te i publicitat de tercers.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      userBase: 'Banc digital del grup Santander, present a diversos països europeus',
      links: {
        website: 'https://www.openbank.es/',
        privacyPolicy: 'https://www.openbank.es/assets/static/pdf/PieDePagina/Proteccion_Datos_191223.pdf',
        appStore: 'https://apps.apple.com/es/app/id1217874244',
      },
      accountRequired: f('yes', 'official', ['openbank-privacy-policy'], 'L’aplicació és el canal principal d’un banc sense oficines: sense contracte no hi ha servei.'),
      openSource: f('no', 'official', ['openbank-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'A la informació financera habitual s’hi suma el que Openbank obté de fora: els fitxers de solvència ASNEF i BADEXCUG, la Central d’Informació de Riscos del Banc d’Espanya i els agregadors de comptes d’altres entitats. El resultat és un retrat de la teva situació econòmica més complet que el que té qualsevol banc amb el qual només operis tu.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['openbank-privacy-policy', 'openbank-app-store'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['openbank-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['openbank-app-store'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['openbank-app-store'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['compliment-legal'], sources: ['openbank-privacy-policy'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['openbank-privacy-policy'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils', 'seguretat-i-prevencio-del-frau'], sources: ['openbank-privacy-policy'], note: 'Els moviments d’ingrés i de càrrec alimenten el perfilat de risc de morositat.' }),
        row('nivell-d-ingressos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'compliment-legal'], sources: ['openbank-privacy-policy'], note: 'La política descriu l’anàlisi de nòmines, pensions i transferències periòdiques com a part del perfilat creditici.' }),
        row('situacio-familiar', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils'], sources: ['openbank-privacy-policy'], note: 'La política esmenta dades sobre règim econòmic matrimonial i negocis de transcendència real per a determinats productes.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['compliment-legal'], sources: ['openbank-app-store'], note: 'L’etiqueta declara fotografies o vídeos per a la funcionalitat de l’aplicació: l’alta digital exigeix un vídeo identificatiu.' }),
        row('llista-de-contactes', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['openbank-app-store'], note: 'Declarada com a dada no vinculada amb la identitat.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['openbank-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['openbank-app-store'], note: 'Declarat sota «publicidad de terceros» i sota publicitat del desenvolupador.' }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['openbank-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['openbank-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['openbank-app-store'] }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['openbank-privacy-policy'], note: 'Openbank fa segmentacions d’audiència a xarxes socials amb eines com Facebook Custom Audiences.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['openbank-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['openbank-app-store']),
        thirdPartyTrackersPresent: f('yes', 'official', ['openbank-app-store', 'openbank-privacy-policy'], 'Publicitat de tercers declarada a l’etiqueta; la política reconeix l’ús d’eines de segmentació de les xarxes socials.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['openbank-privacy-policy'], 'Publicitat personalitzada a l’àrea privada del web i segmentacions d’audiència a xarxes socials, totes dues sobre la base de l’interès legítim, amb dret d’oposició.'),
        profiling: f('yes', 'official', ['openbank-privacy-policy'], 'Perfilat creditici automatitzat amb fonts internes i externes (ASNEF, BADEXCUG i CIRBE) que pot aprovar o denegar una targeta o un préstec; es pot demanar l’explicació de la lògica i la intervenció humana.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models d’intel·ligència artificial.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['openbank-privacy-policy'], 'Autoritats i supervisors, fitxers de solvència ASNEF i Experian, la plataforma antifrau d’Iberpay, agregadors financers com Tink i proveïdors tecnològics.'),
        intraGroupSharing: f('yes', 'official', ['openbank-privacy-policy'], 'Openbank forma part del grup Santander i la política preveu comunicacions a altres entitats del grup.'),
        dataBrokerSales: f('partial', 'official', ['openbank-privacy-policy'], 'No hi ha venda de dades, però sí comunicació als fitxers comuns de solvència patrimonial en cas d’impagament, que són en la pràctica intermediaris de dades creditícies.'),
        internationalTransfers: f('yes', 'official', ['openbank-privacy-policy'], 'Transferències a països sense decisió d’adequació en el marc de serveis de proveïdors, amb clàusules contractuals tipus o mecanismes de certificació.', {
          mechanism: 'sccs',
        }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem localitzat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['openbank-privacy-policy'], 'La política explica el règim de bloqueig posterior a la relació contractual i adverteix que algunes accions de consum són imprescriptibles, però no dona terminis concrets per categoria.'),
        dataAfterDeletion: f('yes', 'official', ['openbank-privacy-policy'], 'Un cop acabada la relació, les dades es mantenen bloquejades a disposició d’administracions, jutjats i ministeri fiscal fins que prescriuen les responsabilitats.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['openbank-privacy-policy'], 'Es pot exercir el dret de supressió, però la relació bancària obliga a cancel·lar abans els productes i deixa les dades bloquejades durant els terminis legals.'),
        selfService: f('partial', 'official', ['openbank-privacy-policy'], 'Els drets es poden exercir des del perfil de client, a la secció «Datos Personales», sense haver d’escriure cap correu.', {
          url: 'https://www.openbank.es/',
        }),
        difficulty: 'medium',
        steps: [
          'Cancel·la els productes contractats (comptes, targetes, inversions) des de l’aplicació o del web.',
          'Entra al perfil de client, a la secció «Datos Personales», i sol·licita la supressió; també es pot fer per correu a privacy@openbank.es.',
          'Guarda la confirmació i tingues present que les dades quedaran bloquejades durant els terminis legals de conservació.',
        ],
        obstacles:
          'El bloqueig no és una mala pràctica del banc, sinó una obligació legal; però convé saber que suprimir el compte no equival a esborrar l’historial.',
        dataRetained: 'Dades bloquejades durant els terminis de prescripció fiscal, mercantil i de prevenció del blanqueig.',
        sources: ['openbank-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['openbank-privacy-policy'], 'La política reconeix el dret de portabilitat «en un formato estructurado de uso común y legible» i el canalitza pel perfil de client, el correu, el telèfon o la sucursal.', {
          url: 'mailto:privacy@openbank.es',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['openbank-privacy-policy'], 'Cinc canals declarats: perfil de client, correu, correu postal, sucursal i telèfon.', {
          url: 'mailto:privacy@openbank.es',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['openbank-privacy-policy'], 'Es pot oposar a la publicitat personalitzada de l’àrea privada, però el banc adverteix que continuaran els avisos genèrics; per a les xarxes socials cal adreçar-se a la xarxa, no a Openbank.'),
        telemetryOptOut: unknown('La política no descriu cap control per desactivar l’analítica d’ús de l’aplicació.'),
        granularControls: f('partial', 'official', ['openbank-privacy-policy'], 'Hi ha consentiments i oposicions separables per finalitat, però es gestionen amb sol·licituds, no amb un panell d’interruptors.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'editorial', [], 'Fer que l’oposició a la publicitat a xarxes socials s’hagi de tramitar davant de la xarxa social, i no davant del banc que ha fet la segmentació, trasllada a la persona usuària una feina que hauria d’assumir el responsable.'),
        darkPatternList: [
          {
            type: 'confusing-language',
            severity: 'medium',
            description:
              'La política reconeix que Openbank i la xarxa social són corresponsables o responsables separats «según el caso», sense aclarir quan és una cosa o l’altra, i deriva l’oposició a la xarxa social.',
            sources: ['openbank-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('El banc no publica documentació tècnica sobre el xifratge del canal.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: f('yes', 'official', ['openbank-privacy-policy'], 'La normativa europea de serveis de pagament exigeix autenticació reforçada i l’aplicació la implementa amb clau de signatura i biometria.', {
          methods: ['app-push', 'sms'],
        }),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses propi d’Openbank ni cap fitxer security.txt a openbank.es.'),
        vulnerabilityDisclosure: f('partial', 'official', ['santander-hackerone'], 'Openbank no publica canal propi; el grup Santander, al qual pertany, manté una política de divulgació a HackerOne.'),
      },
      alternatives: [
        {
          app: 'revolut',
          comparability: 'partial',
          rationale: 'Alternativa digital per a les operacions del dia a dia, amb controls de privadesa dins de l’aplicació.',
          tradeOffs: 'És una entitat lituana amb un model de negoci més orientat a serveis de pagament que a la banca universal.',
        },
        {
          app: 'banco-sabadell',
          comparability: 'equivalent',
          rationale: 'Banca mòbil espanyola equivalent per a qui prefereixi una entitat amb oficines.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política d’Openbank és, en transparència, la millor de les quatre entitats d’aquest lot: explica la lògica del perfilat creditici, les fonts externes que hi entren i com demanar intervenció humana. La contradicció és que la mateixa aplicació declara identificadors per rastrejar fora del banc.',
        openQuestions: [
          'Quins tercers publicitaris reben els identificadors que declara l’etiqueta de l’App Store?',
          'Quin és el resultat pràctic d’oposar-se al perfilat comercial sense cancel·lar els productes?',
        ],
      },
    },

    /* ═══════════════════════════ CaixaBankNow ═══════════════════════════ */
    {
      slug: 'caixabanknow',
      name: 'CaixaBankNow',
      company: 'caixabank',
      categories: ['banca-i-finances'],
      tagline: 'L’única banca del lot que declara informació financera com a dada de rastreig',
      summary:
        'L’etiqueta de l’App Store de CaixaBankNow declara com a dades utilitzades per rastrejar-te, entre altres, la informació financera i la ubicació. És una declaració excepcional en el sector: cap de les altres tres aplicacions bancàries d’aquest lot no arriba tan lluny. L’entitat va rebre l’any 2021 la sanció més alta que havia imposat mai l’AEPD, precisament per la confusió de les bases jurídiques de la seva política de privadesa.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      userBase: 'Banc líder a Espanya per quota de mercat, amb uns 20 milions de clients',
      links: {
        website: 'https://www.caixabank.es/',
        privacyPolicy: 'https://www.caixabank.es/particular/general/privacy-policy.html',
        appStore: 'https://apps.apple.com/es/app/id318806094',
      },
      accountRequired: f('yes', 'official', ['caixabank-privacy-policy'], 'L’accés exigeix les credencials d’un contracte bancari vigent.'),
      openSource: f('no', 'official', ['caixabanknow-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'CaixaBank combina els moviments del compte amb dades socioeconòmiques i professionals, consultes als fitxers de solvència ASNEF, BADEXCUG i CIRBE, i models matemàtics que infereixen preferències. La corresponsabilitat amb VidaCaixa, CaixaBank Payments & Consumer i la resta del grup fa que aquest retrat circuli per assegurances, crèdit al consum i gestió d’actius.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['caixabank-privacy-policy', 'caixabanknow-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['caixabanknow-app-store'], note: 'L’etiqueta inclou les dades de contacte entre les utilitzades per rastrejar-te.' }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['compliment-legal'], sources: ['caixabank-privacy-policy'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['caixabanknow-app-store'], note: 'L’etiqueta declara «información financiera» tant per a la personalització del producte com entre les dades de rastreig.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils', 'seguretat-i-prevencio-del-frau'], sources: ['caixabank-privacy-policy'] }),
        row('nivell-d-ingressos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'compliment-legal'], sources: ['caixabank-privacy-policy'], note: 'La política parla de dades socioeconòmiques i de consultes a ASNEF, BADEXCUG i CIRBE.' }),
        row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'compliment-legal'], sources: ['caixabank-privacy-policy'], note: 'La política esmenta expressament dades professionals.' }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['caixabank-privacy-policy'], note: 'La política esmenta dades biomètriques «quan s’autoritzi».' }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau', 'personalitzacio-de-continguts'], sources: ['caixabanknow-app-store'], note: 'L’etiqueta declara ubicació exacta i aproximada vinculades a la identitat i també entre les dades de rastreig.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['caixabanknow-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['caixabanknow-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['caixabanknow-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['caixabanknow-app-store'], note: 'L’etiqueta declara «datos de publicidad» sota la finalitat de màrqueting del desenvolupador.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['caixabanknow-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['millora-del-producte'], sources: ['caixabanknow-app-store'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['caixabank-privacy-policy'], note: 'La política inclou les dades de navegació obtingudes amb galetes entre les categories tractades.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['caixabank-privacy-policy'], note: 'El perfil comercial es construeix amb fórmules matemàtiques aplicades al comportament de la clientela.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['caixabanknow-app-store'], 'L’etiqueta declara informació financera, ubicació, dades de contacte, identificadors, dades d’ús i diagnòstics com a dades que poden servir per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['caixabanknow-app-store']),
        thirdPartyTrackersPresent: f('yes', 'official', ['caixabanknow-app-store'], 'La declaració de rastreig entre aplicacions implica la presència de tecnologia de tercers.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['caixabank-privacy-policy', 'caixabanknow-app-store'], 'Comunicacions comercials del grup CaixaBank pels canals triats, amb consentiment, i dades de publicitat declarades a l’etiqueta.'),
        profiling: f('yes', 'official', ['caixabank-privacy-policy'], 'Perfil comercial amb consentiment; l’entitat afirma que mai no el fa servir per denegar un producte ni per fixar límits de crèdit. L’anàlisi de solvència es fa per separat, sobre la base de la relació contractual.'),
        aiTraining: unknown('La política parla de models matemàtics per a la solvència i el frau, però no de l’entrenament de models d’intel·ligència artificial generativa.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['caixabank-privacy-policy'], 'Fitxers de solvència ASNEF i BADEXCUG, la CIRBE del Banc d’Espanya, els serveis antifrau PAYGUARD d’Iberpay i FRAUDFENSE, i empreses col·laboradores amb consentiment.'),
        intraGroupSharing: f('yes', 'official', ['caixabank-privacy-policy'], 'Corresponsabilitat declarada amb CaixaBank Payments & Consumer, VidaCaixa, Nuevo Micro Bank, CaixaBank Asset Management, Banco BPI i altres societats del grup.'),
        dataBrokerSales: f('partial', 'official', ['caixabank-privacy-policy'], 'No hi ha venda de dades, però sí comunicació als fitxers comuns de solvència, que funcionen com a intermediaris de dades creditícies.'),
        internationalTransfers: unknown('La política només esmenta la consulta de llistes internacionals de sancions (OFAC i OFSI) i no descriu transferències internacionals ordinàries ni els seus mecanismes.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem localitzat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['caixabank-privacy-policy'], 'Hi ha terminis concrets per als serveis antifrau (30 dies per a operacions sospitoses i 12 mesos per al frau confirmat), però la resta remet a cada apartat sense taula general.'),
        dataAfterDeletion: f('partial', 'official', ['caixabank-privacy-policy'], 'Les obligacions de prevenció del blanqueig i les fiscals imposen la conservació de l’expedient contractual més enllà de la baixa.'),
        periods: [
          { dataType: 'historial-de-compres', period: '30 dies per a les operacions sospitoses i 12 mesos per al frau confirmat als serveis PAYGUARD i FRAUDFENSE', sources: ['caixabank-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('partial', 'official', ['caixabank-privacy-policy'], 'El dret de supressió es reconeix, però la relació bancària obliga a cancel·lar els productes i deixa conservacions legals obligatòries.'),
        selfService: f('partial', 'official', ['caixabank-privacy-policy'], 'Els drets s’exerceixen des de la banca digital, des d’una oficina o pel formulari de www.caixabank.com/ejerciciodederechos, però no hi ha cap botó d’eliminació directa.', {
          url: 'https://www.caixabank.com/ejerciciodederechos',
        }),
        difficulty: 'medium',
        steps: [
          'Cancel·la els productes contractats a l’oficina o des de la banca digital.',
          'Retira els consentiments comercials des de la banca digital; si es cancel·len tots els productes sense retirar-los, CaixaBank diu que els cancel·la automàticament.',
          'Exerceix el dret de supressió pel formulari de www.caixabank.com/ejerciciodederechos o per correu postal a l’apartat de correus 209 de València.',
          'Si no obtens resposta dins de termini, reclama davant de l’AEPD.',
        ],
        obstacles:
          'La corresponsabilitat amb una dotzena de societats del grup fa difícil saber a quantes entitats arriba realment una sol·licitud de supressió.',
        dataRetained: 'Expedient contractual i operacions durant els terminis fiscals i de prevenció del blanqueig de capitals.',
        sources: ['caixabank-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['caixabank-privacy-policy'], 'El dret de portabilitat consta entre els drets exercibles pels canals declarats.', {
          url: 'https://www.caixabank.com/ejerciciodederechos',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['caixabank-privacy-policy'], 'Quatre canals: oficina, banca digital, formulari web i correu postal, amb delegat de protecció de dades propi.', {
          url: 'https://www.caixabank.com/ejerciciodederechos',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['caixabank-privacy-policy'], 'El perfil comercial es basa en consentiment i es pot retirar en qualsevol moment des de la banca digital, una oficina o el formulari de drets.'),
        telemetryOptOut: unknown('La política no descriu cap control per desactivar l’analítica d’ús de l’aplicació.'),
        granularControls: f('partial', 'official', ['caixabank-privacy-policy'], 'Els consentiments són separables per finalitat i canal, però la gestió és dispersa entre la banca digital i el formulari de drets.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'regulator', ['caixabank-aepd-fine-2021'], 'L’AEPD va declarar que la política de CaixaBank feia servir terminologia imprecisa i barrejava interès legítim i consentiment per a tractaments similars, cosa que impedia entendre a què s’estava consentint.'),
        darkPatternList: [
          {
            type: 'confusing-language',
            severity: 'high',
            description:
              'La resolució de l’AEPD de 2021 va sancionar la imprecisió en la descripció de les finalitats i la confusió de bases jurídiques entre tractaments equivalents.',
            sources: ['caixabank-aepd-fine-2021'],
          },
        ],
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('L’entitat no publica documentació tècnica sobre el xifratge del canal.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: f('yes', 'official', ['caixabank-privacy-policy'], 'L’autenticació reforçada és obligatòria per normativa de pagaments i l’aplicació admet biometria.', {
          methods: ['app-push', 'sms'],
        }),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni cap fitxer security.txt a caixabank.es.'),
        vulnerabilityDisclosure: unknown('No hem localitzat cap política pública de divulgació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'bankinter',
          comparability: 'equivalent',
          rationale: 'Banca mòbil espanyola equivalent en funcions.',
        },
        {
          app: 'banco-sabadell',
          comparability: 'equivalent',
          rationale: 'Alternativa amb oficines i banca mòbil completa.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La dada que val la pena retenir és la declaració d’«información financiera» com a dada de rastreig a l’etiqueta de l’App Store. Que una entitat bancària ho declari no vol dir que enviï els teus moviments a una xarxa publicitària, però sí que reconeix que la informació financera pot acabar vinculada a identificadors de rastreig.',
        openQuestions: [
          'Què inclou exactament la «información financiera» declarada com a dada de rastreig?',
          'Quins tercers reben les dades de publicitat de l’aplicació?',
        ],
      },
    },

    /* ═══════════════════════════ imagin ═══════════════════════════ */
    {
      slug: 'imagin',
      name: 'imagin',
      company: 'caixabank',
      categories: ['banca-i-finances'],
      tagline: 'La marca jove de CaixaBank, amb una etiqueta de rastreig encara més àmplia',
      summary:
        'imagin és una marca de CaixaBank, no un banc independent: el responsable del tractament és la mateixa entitat i s’aplica la mateixa política de privadesa. La diferència és el to i el públic, més jove, i una etiqueta de l’App Store que declara ubicació, identificadors i dades d’ús com a dades utilitzades per rastrejar-te, a més d’historial de compres i contingut fotogràfic com a dades no vinculades.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya',
      userBase: 'Marca digital de CaixaBank orientada al públic jove',
      links: {
        website: 'https://imagin.com/',
        privacyPolicy: 'https://www.caixabank.es/particular/general/privacy-policy.html',
        privacyCenter: 'https://www.imaginbank.com/informacionlegal/tratamientodedatos_en.html',
        appStore: 'https://apps.apple.com/es/app/id1069665204',
      },
      accountRequired: f('yes', 'official', ['imagin-data-treatment'], 'Cal ser client d’imagin, és a dir, tenir un contracte amb CaixaBank sota aquesta marca.'),
      openSource: f('no', 'official', ['imagin-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'A les dades bancàries habituals, imagin hi suma una capa d’oci i continguts pensada per a un públic jove. La combinació de moviments del compte, ubicació i interessos culturals fa que el perfil comercial d’aquesta aplicació sigui més ric que el d’una banca convencional.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['caixabank-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['imagin-app-store'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['compliment-legal', 'prestacio-del-servei'], sources: ['caixabank-privacy-policy'], note: 'La marca s’adreça a un públic jove i la política inclou dades identificatives completes.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['imagin-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['imagin-app-store'], note: 'L’etiqueta el declara entre les dades no vinculades amb la identitat, cosa poc intuïtiva en una aplicació bancària.' }),
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['imagin-app-store'], note: 'L’etiqueta inclou la ubicació entre les dades utilitzades per rastrejar-te.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['imagin-app-store'] }),
        row('fotografies-i-videos', 'optional', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['imagin-app-store'], note: 'Contingut de la persona usuària declarat com a dada no vinculada.' }),
        row('llista-de-contactes', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['imagin-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['imagin-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['imagin-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['imagin-app-store', 'imagin-data-treatment'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['imagin-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['imagin-app-store'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['imagin-data-treatment'], note: 'La pàgina legal reconeix galetes pròpies i de tercers per mostrar publicitat personalitzada a partir d’un perfil de navegació.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['imagin-data-treatment', 'caixabank-privacy-policy'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['imagin-app-store'], 'L’etiqueta declara ubicació, identificadors i dades d’ús com a dades que poden servir per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['imagin-app-store']),
        thirdPartyTrackersPresent: f('yes', 'official', ['imagin-data-treatment'], 'La pàgina legal reconeix galetes de tercers per a publicitat personalitzada.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['imagin-data-treatment'], 'Publicitat personalitzada a partir d’un perfil elaborat amb la navegació.'),
        profiling: f('yes', 'official', ['caixabank-privacy-policy', 'imagin-data-treatment'], 'S’aplica el perfil comercial del grup CaixaBank, basat en consentiment.'),
        aiTraining: unknown('Ni la política del grup ni la pàgina legal d’imagin no esmenten l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['caixabank-privacy-policy'], 'Els mateixos destinataris que la resta del grup: fitxers de solvència, serveis antifrau i proveïdors tecnològics.'),
        intraGroupSharing: f('yes', 'official', ['caixabank-privacy-policy'], 'imagin és una marca de CaixaBank, S.A.: les dades es tracten en corresponsabilitat amb les societats del grup.'),
        dataBrokerSales: f('partial', 'official', ['caixabank-privacy-policy'], 'Sense venda de dades, però amb comunicació als fitxers comuns de solvència en cas d’impagament.'),
        internationalTransfers: unknown('La política del grup no descriu transferències internacionals ordinàries.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem localitzat cap informe de transparència del grup CaixaBank sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['caixabank-privacy-policy'], 'S’aplica el règim de conservació del grup, amb pocs terminis concrets per categoria.'),
        dataAfterDeletion: f('partial', 'official', ['caixabank-privacy-policy'], 'Les obligacions fiscals i de prevenció del blanqueig obliguen a conservar l’expedient després de la baixa.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['imagin-data-treatment', 'caixabank-privacy-policy'], 'Cal cancel·lar els productes i exercir el dret de supressió; les conservacions legals es mantenen.'),
        selfService: f('partial', 'official', ['imagin-data-treatment'], 'L’aplicació té un camí propi per exercir drets: Menú General, Configuració i «Ejercicio de derechos». No és un botó d’eliminació, sinó un formulari de sol·licitud.'),
        difficulty: 'medium',
        steps: [
          'Cancel·la els productes contractats des de l’aplicació o contactant amb CaixaBank.',
          'Obre el Menú General de l’aplicació, entra a Configuració i tria «Ejercicio de derechos».',
          'Presenta la sol·licitud de supressió; com a alternativa, fes servir el formulari de www.caixabank.com/ejerciciodederechos.',
          'Guarda la confirmació i reclama davant de l’AEPD si no hi ha resposta dins de termini.',
        ],
        obstacles:
          'El fet que imagin sigui una marca i no una entitat fa que la sol·licitud vagi a parar a CaixaBank i abasti tot el grup, cosa que no sempre és evident des de l’aplicació.',
        dataRetained: 'Expedient contractual i operacions durant els terminis legals de conservació.',
        sources: ['imagin-data-treatment', 'caixabank-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['caixabank-privacy-policy'], 'Dret de portabilitat reconegut pels canals del grup.', {
          url: 'https://www.caixabank.com/ejerciciodederechos',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['imagin-data-treatment'], 'Camí propi dins de l’aplicació, a més dels canals generals del grup.', {
          url: 'https://www.caixabank.com/ejerciciodederechos',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['imagin-data-treatment', 'caixabank-privacy-policy'], 'El consentiment comercial es pot retirar, i la publicitat basada en galetes es gestiona des del panell de galetes, però no hi ha un interruptor únic dins de l’aplicació.'),
        telemetryOptOut: unknown('No consta cap control per desactivar l’analítica d’ús.'),
        granularControls: f('partial', 'official', ['imagin-data-treatment'], 'Hi ha un apartat d’exercici de drets dins de l’aplicació, però no un panell de privadesa amb interruptors per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'editorial', [], 'Declarar l’historial de compres i la ubicació precisa com a dades «no vinculades amb la identitat» en una aplicació bancària, on tot l’ús passa per un compte identificat, costa de sostenir i confon qui llegeix l’etiqueta.'),
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('L’entitat no publica documentació tècnica sobre el xifratge del canal.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: f('yes', 'official', ['caixabank-privacy-policy'], 'Autenticació reforçada obligatòria per normativa de pagaments, amb suport de biometria.', {
          methods: ['app-push', 'sms'],
        }),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni cap fitxer security.txt a imagin.com.'),
        vulnerabilityDisclosure: unknown('No hem localitzat cap política pública de divulgació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'caixabanknow',
          comparability: 'equivalent',
          rationale: 'És la mateixa entitat i la mateixa política: canviar d’una a l’altra no canvia el responsable del tractament.',
          tradeOffs: 'CaixaBankNow declara una etiqueta de rastreig encara més àmplia.',
        },
        {
          app: 'revolut',
          comparability: 'partial',
          rationale: 'Alternativa digital per al dia a dia amb controls de privadesa dins de l’aplicació.',
          tradeOffs: 'No és un banc universal espanyol ni substitueix una nòmina domiciliada amb totes les garanties.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'imagin no té personalitat jurídica pròpia: el responsable és CaixaBank, S.A., i per tant li afecten la política, la corresponsabilitat de grup i la sanció de l’AEPD de 2021. La fitxa s’ha escrit sobre aquesta base i sobre l’etiqueta de l’App Store, que és pròpia de l’aplicació.',
        openQuestions: [
          'imagin té algun tractament diferenciat respecte de CaixaBankNow, més enllà de la marca?',
          'Per què l’etiqueta declara l’historial de compres com a dada no vinculada amb la identitat?',
        ],
      },
    },

    /* ═══════════════════════════ CapCut ═══════════════════════════ */
    {
      slug: 'capcut',
      name: 'CapCut',
      company: 'bytedance-pte',
      categories: ['edicio-de-foto-i-video'],
      tagline: 'Editor de vídeo amb llicència perpètua sobre el que hi crees',
      summary:
        'CapCut és l’editor de vídeo de ByteDance i, des de la revisió de condicions del juny de 2025, es reserva una llicència perpètua, mundial, transferible i sublicenciable sobre el contingut de les persones usuàries, fins i tot el que només s’ha desat a l’aplicació. El responsable del tractament és una societat de Singapur, sense cap establiment europeu, i la política reconeix que detecta la presència i la posició de cares i parts del cos a les imatges.',
      platforms: ['ios', 'android', 'web', 'windows', 'macos'],
      businessModel: 'freemium',
      jurisdiction: 'Singapur, amb clàusules contractuals tipus per a l’Espai Econòmic Europeu',
      userBase: 'Centenars de milions de descàrregues; una de les aplicacions d’edició més utilitzades del món',
      links: {
        website: 'https://www.capcut.com/',
        privacyPolicy: 'https://www.capcut.com/clause/privacy-policy',
        terms: 'https://www.capcut.com/clause/terms-of-service',
        appStore: 'https://apps.apple.com/es/app/id1500855883',
      },
      accountRequired: f('partial', 'official', ['capcut-privacy-policy'], 'Es pot editar sense compte, però el desament al núvol, l’exportació sense marca i les funcions d’IA demanen registre.'),
      openSource: f('no', 'official', ['capcut-terms'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El que puges a CapCut no és metratge anònim: són cares, veus i escenes de la teva vida. La política diu que en detecta la presència i la posició, la llicència de les condicions permet reutilitzar-ho indefinidament i el responsable és una societat singapuresa fora de l’abast directe d’una autoritat europea.',
      dataCollection: [
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['capcut-privacy-policy', 'capcut-app-store'], note: 'L’etiqueta declara contingut de la persona usuària vinculat a la identitat; les condicions hi apliquen una llicència perpètua.' }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['capcut-privacy-policy', 'capcut-app-store'], note: 'Les gravacions d’àudio formen part del contingut declarat a l’etiqueta.' }),
        row('dades-biometriques', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['capcut-privacy-policy'], note: 'La política diu que detecta «l’existència i la ubicació d’una cara i d’altres parts del cos». No declara que en generi plantilles identificatives, però és un tractament sobre trets físics.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['capcut-privacy-policy', 'capcut-app-store'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['capcut-privacy-policy'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['compliment-legal'], sources: ['capcut-privacy-policy'], note: 'Es demana per aplicar les restriccions d’edat.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['capcut-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['capcut-app-store', 'capcut-privacy-policy'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['capcut-privacy-policy', 'capcut-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['capcut-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['capcut-privacy-policy'], note: 'La política parla de dades d’ubicació derivades de l’adreça IP.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['millora-del-producte', 'seguretat-i-prevencio-del-frau'], sources: ['capcut-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'recomanacions-algoritmiques'], sources: ['capcut-app-store', 'capcut-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['capcut-app-store'] }),
        row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['capcut-privacy-policy'], note: 'La política esmenta l’accés al contingut del porta-retalls quan es fan servir funcions de compartició.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['capcut-privacy-policy'], note: 'Per a la subscripció CapCut Pro, mitjançant processadors de pagament.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['capcut-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['capcut-privacy-policy', 'capcut-app-store']),
        thirdPartyTrackersPresent: f('yes', 'official', ['capcut-privacy-policy'], 'La política esmenta socis publicitaris i proveïdors d’analítica.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['capcut-privacy-policy'], 'La política diu que CapCut o els seus socis demanen consentiment per mostrar publicitat personalitzada i que es pot retirar des de la configuració de l’aplicació.'),
        profiling: f('yes', 'official', ['capcut-privacy-policy'], 'Personalització de continguts i recomanacions a partir del comportament dins de l’aplicació.'),
        aiTraining: f('partial', 'official', ['capcut-privacy-policy'], 'La política diu que el tractament serveix per millorar «models d’aprenentatge automàtic i algorismes», però no detalla si el contingut de les persones usuàries entra en l’entrenament de models generatius ni com oposar-s’hi.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['capcut-privacy-policy'], 'Proveïdors de serveis, processadors de pagament i socis d’analítica i publicitat.'),
        intraGroupSharing: f('yes', 'official', ['capcut-privacy-policy'], 'Compartició amb les societats afiliades sota control comú, és a dir, el grup ByteDance.'),
        dataBrokerSales: unknown('La política no esmenta la venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['capcut-privacy-policy'], 'Emmagatzematge a Malàisia, Singapur i els Estats Units, amb clàusules contractuals tipus per a les transferències des de l’Espai Econòmic Europeu.', {
          mechanism: 'sccs',
        }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('CapCut no publica cap informe de transparència propi; el de TikTok no en cobreix el servei.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['capcut-privacy-policy'], 'La política només diu que es conserva la informació «el temps necessari», sense cap termini concret per categoria.'),
        dataAfterDeletion: f('partial', 'official', ['capcut-terms'], 'Les condicions adverteixen que, un cop eliminat el compte, no es pot recuperar cap contingut; la llicència que s’hi concedeix, en canvi, es descriu com a perpètua i irrevocable.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['capcut-terms']),
        selfService: f('yes', 'official', ['capcut-terms'], 'Les condicions remeten a la pàgina «Manage account» del servei o a un formulari web.'),
        directUrl: 'https://www.capcut.com/settings',
        difficulty: 'medium',
        steps: [
          'Obre el perfil de l’aplicació i entra a la configuració del compte.',
          'Ves a la gestió del compte i tria l’opció d’eliminar-lo (també hi ha la pàgina «Manage account» del web i un formulari de sol·licitud).',
          'Confirma la identitat i llegeix l’avís: els projectes i el contingut associat no es podran recuperar.',
          'Fes còpia de seguretat dels projectes que vulguis conservar abans de confirmar.',
        ],
        obstacles:
          'Eliminar el compte no revoca la llicència perpètua que les condicions atribueixen a CapCut sobre el contingut que hi hagis pujat.',
        dataRetained: 'Les condicions no detallen què es conserva després de l’eliminació.',
        sources: ['capcut-terms'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['capcut-privacy-policy'], 'Els drets d’accés i portabilitat s’exerceixen pel formulari de sol·licituds, no amb una eina de descàrrega directa.', {
          url: 'https://www.capcut.com/privacy-requests',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['capcut-privacy-policy'], 'Formulari de sol·licituds de la persona interessada per a accés, rectificació, supressió, portabilitat i oposició.', {
          url: 'https://www.capcut.com/privacy-requests',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['capcut-privacy-policy'], 'La publicitat personalitzada es basa en consentiment i es pot retirar des de la configuració de l’aplicació.'),
        telemetryOptOut: unknown('La política no descriu cap control per desactivar l’analítica d’ús.'),
        granularControls: f('partial', 'official', ['capcut-privacy-policy'], 'Hi ha configuració de privadesa i de publicitat dins de l’aplicació, però no un panell per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: f('yes', 'press', ['capcut-terms-press-2025', 'capcut-terms'], 'La revisió de condicions del juny de 2025 va ampliar la llicència sobre el contingut sense un avís destacat ni cap possibilitat real d’oposar-s’hi que no fos deixar de fer servir el servei.'),
        darkPatternList: [
          {
            type: 'unbalanced-consent',
            severity: 'high',
            description:
              'L’acceptació de les condicions comporta una llicència perpètua, transferible i sublicenciable sobre el contingut creat, també el que no s’ha publicat, sense cap opció de rebuig separada.',
            sources: ['capcut-terms', 'capcut-terms-press-2025'],
          },
        ],
      },
      security: {
        e2ee: na('El servei edita i allotja contingut; no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('La política parla de mesures tècniques genèriques, sense detallar el xifratge en trànsit.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: unknown('La documentació pública no confirma si el compte admet un segon factor.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades per a CapCut.'),
        bugBounty: unknown('No hem pogut confirmar si CapCut entra a l’abast del programa de recompenses del grup.'),
        vulnerabilityDisclosure: unknown('No hi ha cap fitxer security.txt a capcut.com ni cap política pública específica.'),
      },
      alternatives: [
        {
          app: 'inshot',
          comparability: 'equivalent',
          rationale: 'Editor de vídeo mòbil amb funcions comparables per al muntatge habitual.',
          tradeOffs: 'Cal revisar-ne igualment les condicions: tenir una alternativa no vol dir que sigui més protectora.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La troballa clau no és de privadesa en sentit estricte sinó de propietat: la llicència perpètua sobre el contingut, ampliada el juny de 2025. Val la pena llegir-la al costat de la política de privadesa, perquè la primera sobreviu a l’eliminació del compte que promet la segona.',
        openQuestions: [
          'El contingut de les persones usuàries s’utilitza per entrenar els models generatius de ByteDance?',
          'Quina és l’entitat responsable davant d’una autoritat europea, si el responsable declarat és a Singapur?',
          'Quant de temps es conserven els projectes al núvol després de l’eliminació del compte?',
        ],
      },
    },

    /* ═══════════════════════════ Hypic ═══════════════════════════ */
    {
      slug: 'hypic',
      name: 'Hypic',
      company: 'bytedance-pte',
      categories: ['edicio-de-foto-i-video'],
      tagline: 'Retoc facial amb IA que promet esborrar les imatges just després de processar-les',
      summary:
        'Hypic és l’editor fotogràfic de ByteDance, centrat en el retoc facial i els filtres generatius. La política reconeix que analitza trets facials i corporals de les fotografies, però afegeix un compromís poc habitual: les imatges s’esborren immediatament després d’aplicar la funció i les dades facials no es conserven ni es comparteixen amb tercers. L’etiqueta de l’App Store, en canvi, declara identificadors utilitzats per rastrejar-te.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Singapur, amb clàusules contractuals tipus per a l’Espai Econòmic Europeu',
      userBase: 'Aplicació de retoc fotogràfic del grup ByteDance, present als tops de la categoria a Espanya',
      links: {
        website: 'https://www.hypic.com/',
        privacyPolicy: 'https://m.hypic.com/clause/hypic-privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id1644042837',
      },
      accountRequired: f('partial', 'official', ['hypic-privacy-policy'], 'L’edició bàsica funciona sense compte; el desament al núvol i algunes funcions demanen registre.'),
      openSource: f('no', 'official', ['hypic-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Una aplicació de retoc facial treballa, per definició, amb la cara de qui la fa servir. Aquí el compromís explícit d’esborrar les imatges just després de processar-les redueix el risc, però la declaració de rastreig publicitari indica que l’aplicació continua sent una peça de l’ecosistema publicitari de ByteDance.',
      dataCollection: [
        row('fotografies-i-videos', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['hypic-privacy-policy', 'hypic-app-store'], note: 'L’etiqueta les declara com a dades no vinculades amb la identitat; la política diu que s’esborren immediatament després d’aplicar la funció.' }),
        row('dades-biometriques', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['hypic-privacy-policy'], note: 'La política reconeix l’anàlisi de trets facials i corporals per a les funcions de retoc, i afirma que aquestes dades no es conserven ni es comparteixen amb tercers.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['hypic-privacy-policy'] }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['compliment-legal'], sources: ['hypic-privacy-policy'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['hypic-app-store', 'hypic-privacy-policy'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['hypic-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['hypic-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['hypic-privacy-policy'], note: 'La política parla d’ubicació a escala de país, regió o ciutat.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['millora-del-producte'], sources: ['hypic-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'recomanacions-algoritmiques'], sources: ['hypic-privacy-policy'] }),
        row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['hypic-privacy-policy'], note: 'La política esmenta l’accés al porta-retalls en operacions de còpia i enganxada.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['hypic-privacy-policy'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['hypic-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['hypic-app-store']),
        thirdPartyTrackersPresent: f('yes', 'official', ['hypic-privacy-policy'], 'La política esmenta integracions amb plataformes de tercers (Facebook, TikTok, Apple) i proveïdors d’analítica.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['hypic-app-store', 'hypic-privacy-policy'], 'L’etiqueta declara identificadors per a publicitat de tercers i la política preveu comunicacions de màrqueting.'),
        profiling: f('partial', 'official', ['hypic-privacy-policy'], 'La política descriu personalització de continguts i recomanacions, sense detallar-ne la lògica.'),
        aiTraining: f('partial', 'official', ['hypic-privacy-policy'], 'La política diu que es fan servir models d’aprenentatge automàtic per millorar les funcions, però afirma alhora que les imatges s’esborren just després de processar-les. Les dues afirmacions no s’acaben de conciliar al text.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['hypic-privacy-policy'], 'Proveïdors d’allotjament, analítica i suport, i plataformes de tercers en les integracions.'),
        intraGroupSharing: f('yes', 'official', ['hypic-privacy-policy'], 'Compartició amb les entitats del grup ByteDance.'),
        dataBrokerSales: unknown('La política no esmenta la venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['hypic-privacy-policy'], 'Servidors als Estats Units i a Singapur, amb clàusules contractuals tipus per a les persones usuàries de l’Espai Econòmic Europeu.', {
          mechanism: 'sccs',
        }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('Hypic no publica cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['hypic-privacy-policy'], 'Hi ha un compromís concret per a les imatges (esborrat immediat després d’aplicar la funció), però la resta remet al criteri genèric del «temps necessari».'),
        dataAfterDeletion: unknown('La política no detalla què es conserva després d’eliminar el compte.'),
        periods: [
          { dataType: 'fotografies-i-videos', period: 'Esborrat immediat un cop aplicada la funció de retoc', sources: ['hypic-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['hypic-privacy-policy'], 'La política reconeix el dret de supressió i indica que es pot eliminar la informació des del compte o escrivint al canal de privadesa.'),
        selfService: f('partial', 'official', ['hypic-privacy-policy'], 'La política diu que es pot accedir, actualitzar i eliminar la informació des del compte, però no descriu cap camí concret dins de l’aplicació.'),
        difficulty: 'unknown',
        steps: [
          'Entra al perfil de l’aplicació i revisa la configuració del compte per localitzar l’opció d’eliminació.',
          'Si no hi és, escriu a privacy.hypic@bytedance.com invocant el dret de supressió de l’article 17 del RGPD.',
          'Guarda la confirmació com a prova.',
        ],
        obstacles:
          'La política no documenta els passos concrets ni el termini de processament, de manera que cal confiar en el canal de correu.',
        sources: ['hypic-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['hypic-privacy-policy'], 'El dret de portabilitat es reconeix per a l’Espai Econòmic Europeu, però no hi ha cap eina d’autoservei.', {
          url: 'mailto:privacy.hypic@bytedance.com',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['hypic-privacy-policy'], 'Canal de privadesa per correu electrònic, amb drets específics per a l’EEE.', {
          url: 'mailto:privacy.hypic@bytedance.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('La política no descriu cap control per desactivar la publicitat personalitzada dins de l’aplicació.'),
        telemetryOptOut: unknown('No consta cap control per desactivar l’analítica d’ús.'),
        granularControls: unknown('No consta cap panell de privadesa per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem revisat els fluxos de consentiment de l’aplicació amb prou detall.'),
      },
      security: {
        e2ee: na('El servei processa imatges; no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('La política parla de mesures genèriques, sense detallar el xifratge en trànsit.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('La documentació pública no confirma si el compte admet un segon factor.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses específic de Hypic.'),
        vulnerabilityDisclosure: unknown('No hi ha cap fitxer security.txt ni política pública específica.'),
      },
      alternatives: [
        {
          app: 'google-photos',
          comparability: 'partial',
          rationale: 'Ofereix edició i retoc assistit sense una aplicació addicional que accedeixi a la galeria.',
          tradeOffs: 'Implica confiar les fotografies a Google, amb un perfil publicitari propi molt més ampli.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'El compromís d’esborrar les imatges just després de processar-les és una bona pràctica i mereix ser citat, però conviu al mateix document amb l’afirmació que les dades serveixen per millorar models d’aprenentatge automàtic. La contradicció queda anotada com a pregunta oberta.',
        openQuestions: [
          'Com es concilia l’esborrat immediat de les imatges amb la millora de models d’aprenentatge automàtic?',
          'Les dades de trets facials es processen al dispositiu o al servidor?',
        ],
      },
    },

    /* ═══════════════════════════ GoodNovel ═══════════════════════════ */
    {
      slug: 'goodnovel',
      name: 'GoodNovel',
      company: 'new-reading-technology',
      categories: ['llibres-i-lectura'],
      tagline: 'Novel·les per capítols amb baixa per correu i sense representant a la UE',
      summary:
        'GoodNovel ven capítols solts de novel·la romàntica i de fantasia, un model que converteix el ritme de lectura en dada comercial. L’editora és a Singapur i no declara cap establiment ni representant a la Unió Europea. La baixa no és un botó: cal escriure a una adreça de correu i esperar fins a quinze dies.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Singapur',
      userBase: 'Plataforma de novel·la digital amb desenes de milions de descàrregues',
      links: {
        website: 'https://www.goodnovel.com/',
        privacyPolicy: 'https://www.goodnovel.com/privacy',
        terms: 'https://www.goodnovel.com/terms',
        appStore: 'https://apps.apple.com/es/app/id1503128132',
      },
      accountRequired: f('partial', 'official', ['goodnovel-privacy-policy'], 'Es pot llegir una part del catàleg sense compte, però comprar capítols o conservar el progrés en demana un.'),
      openSource: f('no', 'official', ['goodnovel-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El que llegeixes i, sobretot, on t’atures i quant estàs disposada a pagar per continuar, és informació molt fina sobre gustos, estats d’ànim i capacitat de despesa. GoodNovel la conserva lligada a un historial de compres i la fa servir per recomanar i per anunciar.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['goodnovel-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['goodnovel-privacy-policy'] }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['compliment-legal'], sources: ['goodnovel-privacy-policy'], note: 'La política fixa una edat mínima de dotze anys i consentiment parental fins als divuit.' }),
        row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['goodnovel-privacy-policy'], note: 'La política esmenta dades demogràfiques opcionals com l’edat i el gènere.' }),
        row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['goodnovel-privacy-policy'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['goodnovel-privacy-policy'], note: 'Les compres de capítols i monedes es processen amb passarel·les de pagament externes.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques', 'elaboracio-de-perfils'], sources: ['goodnovel-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'mesura-i-analisi-dus'], sources: ['goodnovel-privacy-policy'], note: 'La política parla de patrons de lectura i d’interacció com a base de les recomanacions.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['goodnovel-privacy-policy'], note: 'Inclou les novel·les publicades per la comunitat i els comentaris.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['goodnovel-app-store'], note: 'L’etiqueta el declara com a dada no vinculada amb la identitat, però alhora inclou identificadors entre les dades utilitzades per rastrejar-te.' }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['goodnovel-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['goodnovel-privacy-policy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['millora-del-producte'], sources: ['goodnovel-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['goodnovel-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['goodnovel-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['goodnovel-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['goodnovel-app-store']),
        thirdPartyTrackersPresent: f('yes', 'official', ['goodnovel-privacy-policy'], 'La política reconeix que rep dades de socis publicitaris sobre anuncis vistos i ús d’aplicacions.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['goodnovel-privacy-policy'], 'La política preveu publicitat personalitzada amb socis comercials i diu que es pot controlar, sense concretar on és aquest control.'),
        profiling: f('yes', 'official', ['goodnovel-privacy-policy'], 'Recomanacions de lectura basades en els patrons de lectura i de compra.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models amb el contingut ni amb el comportament de lectura.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['goodnovel-privacy-policy'], 'Proveïdors de serveis, socis publicitaris, passarel·les de pagament i autoritats quan ho exigeix la llei.'),
        intraGroupSharing: f('yes', 'official', ['goodnovel-privacy-policy'], 'La política preveu la compartició amb societats afiliades, entre les quals hi ha GoodShort.'),
        dataBrokerSales: f('no', 'official', ['goodnovel-privacy-policy'], 'La política afirma expressament: «We will never sell any of your data to anyone».'),
        internationalTransfers: f('partial', 'official', ['goodnovel-privacy-policy'], 'Reconeix transferències transfrontereres per a manteniment i anàlisi, però no esmenta clàusules contractuals tipus ni cap altre mecanisme de l’article 46 del RGPD.', {
          mechanism: 'unknown',
        }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No publica cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['goodnovel-privacy-policy'], 'La política només diu que les dades es conserven mentre siguin necessàries, sense cap termini per categoria.'),
        dataAfterDeletion: f('partial', 'official', ['goodnovel-privacy-policy'], 'Després de la baixa, l’editora es reserva conservar dades en format agregat i anonimitzat.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['goodnovel-privacy-policy']),
        selfService: f('partial', 'official', ['goodnovel-privacy-policy'], 'La política parla d’eines per veure, gestionar i eliminar les dades des del Personal Center, però la supressió definitiva del compte es demana per correu electrònic.'),
        difficulty: 'medium',
        waitingPeriodDays: 15,
        requiresSupportContact: true,
        steps: [
          'Revisa el Personal Center de l’aplicació per gestionar les dades del perfil.',
          'Escriu a contact@goodnovel.com demanant l’eliminació permanent del compte.',
          'La sol·licitud es processa en un termini de fins a quinze dies.',
          'Tingues present que perdràs l’historial de lectura, les compres i el saldo de monedes, i que no es poden recuperar.',
        ],
        obstacles:
          'No hi ha cap botó d’eliminació dins de l’aplicació, i el saldo de monedes no consumides es perd amb la baixa, cosa que funciona com a desincentiu econòmic.',
        dataRetained: 'Dades en format agregat i anonimitzat.',
        sources: ['goodnovel-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['goodnovel-privacy-policy'], 'La política parla de descarregar les dades pròpies des del Personal Center, però no en descriu el format ni l’abast.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['goodnovel-privacy-policy'], 'Canal de correu i Personal Center, amb resposta declarada en quinze dies laborables. No hi ha cap representant a la Unió Europea segons l’article 27 del RGPD.', {
          url: 'mailto:contact@goodnovel.com',
          responseTimeDays: 15,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['goodnovel-privacy-policy'], 'La política diu que es pot controlar l’ús de dades dels socis comercials per a publicitat personalitzada, però no indica on és aquest control.'),
        telemetryOptOut: unknown('No consta cap control per desactivar l’analítica d’ús.'),
        granularControls: unknown('No consta cap panell de privadesa per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'editorial', [], 'La combinació de baixa només per correu i pèrdua del saldo de monedes comprades converteix la sortida en una decisió amb cost, no en un simple canvi de configuració.'),
        darkPatternList: [
          {
            type: 'hidden-exit',
            severity: 'medium',
            description:
              'L’eliminació definitiva del compte no es pot fer des de l’aplicació: cal escriure a contact@goodnovel.com i esperar fins a quinze dies.',
            sources: ['goodnovel-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: na('El servei distribueix textos; no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('La política parla de mesures «raonables i apropiades», sense detallar el xifratge en trànsit.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('La documentació pública no confirma si el compte admet un segon factor.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni cap fitxer security.txt a goodnovel.com.'),
        vulnerabilityDisclosure: unknown('No hi ha cap política pública de divulgació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'storytel',
          comparability: 'partial',
          rationale: 'Subscripció europea de llibres i audiollibres, amb una relació contractual més clara que la compra de capítols solts.',
          tradeOffs: 'És de pagament mensual i el catàleg de novel·la de plataforma és diferent.',
        },
        {
          app: 'wattpad',
          comparability: 'equivalent',
          rationale: 'Plataforma de novel·la de comunitat amb un model comparable de lectura per capítols.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política de GoodNovel i la de GoodShort són pràcticament idèntiques i comparteixen adreça de contacte, cosa que confirma que les dues aplicacions són el mateix operador amb dos formats.',
        openQuestions: [
          'Quin mecanisme de l’article 46 del RGPD empara les transferències fora de l’Espai Econòmic Europeu?',
          'Hi ha cap representant a la Unió Europea segons l’article 27 del RGPD?',
          'On és exactament el control de publicitat personalitzada que esmenta la política?',
        ],
      },
    },

    /* ═══════════════════════════ GoodShort ═══════════════════════════ */
    {
      slug: 'goodshort',
      name: 'GoodShort',
      company: 'new-reading-technology',
      categories: ['video-i-streaming'],
      tagline: 'Sèries verticals de pagament per episodi amb la mateixa política que GoodNovel',
      summary:
        'GoodShort és la versió audiovisual de GoodNovel: microsèries verticals que es desbloquegen episodi a episodi amb monedes. La política de privadesa és bessona de la de GoodNovel i comparteix la mateixa adreça de contacte. El model de pagament fragmentat fa que el registre de visualització i de despesa sigui molt detallat, i la baixa implica perdre el saldo.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Singapur',
      userBase: 'Plataforma de drames curts verticals amb desenes de milions de descàrregues',
      links: {
        website: 'https://www.goodshort.com/',
        privacyPolicy: 'https://www.goodshort.com/other/static_file/privacy_policy.html',
        terms: 'https://www.goodshort.com/other/static_file/term_of_use.html',
        appStore: 'https://apps.apple.com/es/app/id6448176203',
      },
      accountRequired: f('partial', 'official', ['goodshort-privacy-policy'], 'Es pot mirar contingut gratuït sense compte, però desbloquejar episodis i conservar el saldo en demana un.'),
      openSource: f('no', 'official', ['goodshort-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El pagament per episodi genera un registre minut a minut del que es mira i del moment exacte en què es decideix pagar per continuar. És una mesura directa de l’enganxament, i queda lligada a l’historial de despesa.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['goodshort-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['goodshort-app-store', 'goodshort-privacy-policy'] }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['compliment-legal'], sources: ['goodshort-privacy-policy'], note: 'Edat mínima de dotze anys i consentiment parental fins als divuit.' }),
        row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['goodshort-privacy-policy'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['goodshort-privacy-policy'], note: 'La política esmenta processadors de pagament com PayPal.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques', 'elaboracio-de-perfils'], sources: ['goodshort-privacy-policy'] }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'mesura-i-analisi-dus'], sources: ['goodshort-privacy-policy'], note: 'La política parla de patrons, freqüència i durada del consum de contingut.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'recomanacions-algoritmiques'], sources: ['goodshort-privacy-policy'] }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['goodshort-privacy-policy'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['goodshort-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['goodshort-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['goodshort-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['goodshort-privacy-policy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['millora-del-producte'], sources: ['goodshort-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['goodshort-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['goodshort-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['goodshort-app-store']),
        thirdPartyTrackersPresent: f('yes', 'official', ['goodshort-privacy-policy'], 'La política reconeix socis publicitaris i tecnologies de seguiment.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['goodshort-privacy-policy'], 'Publicitat personalitzada amb socis comercials, amb una opció declarada d’acceptació o rebuig.'),
        profiling: f('yes', 'official', ['goodshort-privacy-policy'], 'Recomanacions a partir dels patrons de visualització i de compra.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['goodshort-privacy-policy'], 'Socis de serveis, processadors de pagament i autoritats quan ho exigeix la llei.'),
        intraGroupSharing: f('yes', 'official', ['goodshort-privacy-policy'], 'Compartició amb societats afiliades; la política comparteix adreça de contacte amb GoodNovel.'),
        dataBrokerSales: f('no', 'official', ['goodshort-privacy-policy'], 'La política afirma que no es venen dades.'),
        internationalTransfers: f('partial', 'official', ['goodshort-privacy-policy'], 'Transferències als Estats Units i a altres països per mantenir l’operació global, sense esmentar cap mecanisme de l’article 46 del RGPD.', {
          mechanism: 'unknown',
        }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No publica cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['goodshort-privacy-policy'], 'Només el criteri genèric del temps necessari per prestar el servei.'),
        dataAfterDeletion: f('partial', 'official', ['goodshort-privacy-policy'], 'Després de la baixa es poden conservar dades agregades i anonimitzades.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['goodshort-privacy-policy']),
        selfService: f('partial', 'official', ['goodshort-privacy-policy'], 'Es pot demanar des del Personal Center o a l’atenció al client, amb un termini de quinze dies.'),
        difficulty: 'medium',
        waitingPeriodDays: 15,
        steps: [
          'Entra al Personal Center de l’aplicació i sol·licita l’eliminació del compte.',
          'Si no hi trobes l’opció, escriu a contact@goodnovel.com, que és l’adreça declarada també per a GoodShort.',
          'La sol·licitud es completa en un termini de quinze dies.',
          'Tingues present que perdràs l’historial de visualització, els episodis desbloquejats i el saldo de monedes.',
        ],
        obstacles:
          'El compte no es pot reactivar i el saldo de monedes no consumides es perd, cosa que penalitza econòmicament la sortida.',
        dataRetained: 'Dades agregades i anonimitzades.',
        sources: ['goodshort-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['goodshort-privacy-policy'], 'El dret d’accés es canalitza pel Personal Center i per l’atenció al client, sense una eina d’exportació documentada.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['goodshort-privacy-policy'], 'Resposta declarada en quinze dies laborables. No consta cap representant a la Unió Europea segons l’article 27 del RGPD.', {
          url: 'mailto:contact@goodnovel.com',
          responseTimeDays: 15,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['goodshort-privacy-policy'], 'La política diu que es pot acceptar o rebutjar l’ús de dades dels socis per a publicitat personalitzada, sense indicar on és el control.'),
        telemetryOptOut: unknown('No consta cap control per desactivar l’analítica d’ús.'),
        granularControls: unknown('No consta cap panell de privadesa per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'editorial', [], 'El model de monedes prepagades fa que tancar el compte signifiqui renunciar a diners ja pagats: una barrera de sortida que no té res a veure amb cap requisit tècnic ni legal.'),
        darkPatternList: [
          {
            type: 'other',
            severity: 'medium',
            description:
              'La baixa comporta la pèrdua del saldo de monedes comprades i dels episodis desbloquejats, sense possibilitat de reactivació ni de reemborsament.',
            sources: ['goodshort-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: na('El servei distribueix vídeo; no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('La política parla de mesures «raonables i apropiades», sense detallar el xifratge en trànsit.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('La documentació pública no confirma si el compte admet un segon factor.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni cap fitxer security.txt a goodshort.com.'),
        vulnerabilityDisclosure: unknown('No hi ha cap política pública de divulgació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'goodnovel',
          comparability: 'complementary',
          rationale: 'És la mateixa editora en format text: canviar d’una a l’altra no canvia el responsable del tractament.',
        },
        {
          app: 'netflix',
          comparability: 'partial',
          rationale: 'Subscripció plana de vídeo, sense pagament per episodi ni saldo de monedes que es perdi en donar-se de baixa.',
          tradeOffs: 'No té catàleg de microsèries verticals i el preu mensual és més alt que unes quantes monedes soltes.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'GoodShort i GoodNovel comparteixen editora, política i adreça de contacte. La diferència de privadesa rellevant és que aquí la dada principal és l’historial de visualització i el moment exacte de la decisió de pagar.',
        openQuestions: [
          'Quin mecanisme empara les transferències als Estats Units?',
          'El saldo de monedes es pot reemborsar abans de tancar el compte?',
        ],
      },
    },
  ],

  incidents: [
    {
      slug: 'santander-filtracio-proveidor-2024',
      title: 'Filtració de dades de clientela i plantilla de Santander per un accés a una base de dades allotjada en un proveïdor extern',
      type: 'breach',
      severity: 'high',
      apps: ['santander'],
      company: 'banco-santander',
      occurredAt: '2024-05-14',
      disclosedAt: '2024-05-14',
      description:
        'Santander va comunicar l’accés no autoritzat a una base de dades allotjada en un proveïdor extern amb informació de clientela de Santander Espanya, Xile i l’Uruguai i de tota la plantilla actual i part de l’antiga del grup. El grup criminal ShinyHunters en va posar a la venda el contingut. L’episodi va formar part d’una campanya contra comptes de la plataforma de dades Snowflake accessibles amb credencials robades i sense segon factor. El banc va afirmar que la base de dades no contenia dades transaccionals ni credencials de banca en línia.',
      affectedPeople: 'Fins a 30 milions de persones segons els atacants; el banc no en va publicar la xifra',
      sources: ['santander-breach-2024-record', 'santander-breach-2024-dive'],
    },
    {
      slug: 'caixabank-aepd-bases-juridiques-2021',
      title: 'Sanció de l’AEPD a CaixaBank per bases jurídiques confuses i informació insuficient',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['caixabanknow', 'imagin'],
      company: 'caixabank',
      occurredAt: '2021-01-13',
      disclosedAt: '2021-01-15',
      description:
        'L’AEPD va imposar a CaixaBank una multa de 6 milions d’euros: 4 milions per infracció de l’article 6 del RGPD, per la confusió entre interès legítim i consentiment en tractaments equivalents, i 2 milions per infracció dels articles 13 i 14, per la imprecisió amb què la política de privadesa descrivia les finalitats. Era, en aquell moment, la sanció més alta imposada mai per l’autoritat espanyola. L’any 2025 l’Audiència Nacional va rebaixar-ne l’import a 2 milions d’euros, mantenint la infracció.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        fineAmountEur: 6000000,
        legalBasis: 'Articles 6, 13 i 14 del RGPD',
        status: 'appealed',
      },
      sources: ['caixabank-aepd-fine-2021', 'caixabank-audiencia-nacional-2025'],
    },
    {
      slug: 'orange-aepd-duplicats-sim-2024',
      title: 'Sanció d’1,2 milions d’euros a Orange Espagne pel procediment de duplicats de targetes SIM',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['orange-tv'],
      company: 'orange-espagne',
      occurredAt: '2024-10-22',
      disclosedAt: '2025-02-05',
      description:
        'L’AEPD va sancionar Orange Espagne amb 200.000 euros per infracció de l’article 6 del RGPD i 1.000.000 d’euros per infracció de l’article 25, protecció de dades des del disseny i per defecte, perquè el procediment d’emissió de duplicats de targetes SIM no garantia que la sol·licitud la fes el titular de la línia. La resolució ordenava a més notificar en sis mesos les mesures adoptades. Orange hi va interposar recurs de reposició, desestimat el 5 de febrer de 2025, i va anunciar recurs contenciós administratiu; l’execució de la multa va quedar suspesa cautelarment.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        fineAmountEur: 1200000,
        legalBasis: 'Articles 6 i 25 del RGPD (expedient EXP202213023)',
        status: 'appealed',
      },
      sources: ['orange-aepd-duplicados-sim'],
    },
  ],

  storeIds: {
    'orange-tv': 'com.orange.sp.tve',
    santander: 'com.isban.bancosantander.es.public',
    openbank: 'es.openbank.mobile',
    caixabanknow: 'com.thenetfirm.mobile.wapicon.WapIcon',
    imagin: 'es.lacaixa.mobile.imaginBank',
    capcut: 'com.lemon.lvoverseas',
    hypic: 'com.xt.retouchoversea',
    goodnovel: 'com.gnovel.originalstation',
    goodshort: 'com.newreading.goodreels',
  },
}
