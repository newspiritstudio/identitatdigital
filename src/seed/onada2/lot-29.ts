import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/**
 * Lot 29 de la segona onada: la categoria «Notícies» de l’App Store espanyol.
 * Una plataforma de butlletins, un agregador de pòdcasts, quatre emissores de
 * ràdio i un diari dels grans grups espanyols, una xarxa veïnal
 * nord-americana, un portal serbi i dues aplicacions de bans municipals.
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'substack-inc',
      name: 'Substack',
      legalName: 'Substack, Inc.',
      description:
        'Empresa nord-americana que allotja butlletins de pagament i la xarxa social Notes. Es finança amb una comissió sobre les subscripcions que cobren els autors, no amb publicitat.',
      headquartersCountry: 'US',
      ownership: 'private',
      foundedYear: 2017,
      primaryRevenueModel: 'commerce',
      website: 'https://substack.com/',
      productDomains: ['substack.com', 'substackcdn.com'],
      privacyContact: 'privacy@substack.com',
    },
    {
      slug: 'ivoox',
      name: 'iVoox',
      legalName: 'iVoox Global Podcasting Service, S.L.',
      description:
        'Empresa de Sant Cugat del Vallès (NIF B65387052) que gestiona la plataforma de pòdcasts i ràdio iVoox. Combina publicitat inserida en l’àudio amb plans de pagament per a oients i per a creadors.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://www.ivoox.com/',
      productDomains: ['ivoox.com'],
      privacyContact: 'legal@ivoox.com',
    },
    {
      slug: 'prisa',
      name: 'Grupo PRISA',
      legalName: 'Promotora de Informaciones, S.A.',
      description:
        'Grup de comunicació espanyol que encapçala EL PAÍS, la Cadena SER, AS i Los40. Les seves societats comparteixen un delegat de protecció de dades comú i creuen els perfils de navegació entre capçaleres.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'public',
      foundedYear: 1972,
      primaryRevenueModel: 'mixed',
      website: 'https://www.prisa.com/',
      productDomains: ['prisa.com', 'elpais.com', 'cadenaser.com', 'as.com', 'los40.com'],
      privacyContact: 'dpo@prisa.com',
    },
    {
      slug: 'ediciones-el-pais',
      name: 'Ediciones EL PAÍS',
      legalName: 'Ediciones El País, S.L.U.',
      parent: 'prisa',
      description:
        'Editora del diari EL PAÍS (NIF B-85635910), amb seu al carrer Miguel Yuste de Madrid. És responsable del tractament dels serveis del diari juntament amb PRISA Media.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      foundedYear: 1976,
      primaryRevenueModel: 'mixed',
      website: 'https://elpais.com/',
      productDomains: ['elpais.com'],
      privacyContact: 'dpo@prisa.com',
    },
    {
      slug: 'sociedad-espanola-de-radiodifusion',
      name: 'Sociedad Española de Radiodifusión',
      legalName: 'Sociedad Española de Radiodifusión, S.L.U.',
      parent: 'prisa',
      description:
        'Societat del Grup PRISA titular de la Cadena SER (NIF B-28016970). L’App Store encara publica l’aplicació sota el nom comercial Unión Radio.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      foundedYear: 1924,
      primaryRevenueModel: 'advertising',
      website: 'https://cadenaser.com/',
      productDomains: ['cadenaser.com'],
      privacyContact: 'dpo@prisa.com',
    },
    {
      slug: 'radio-popular-cope',
      name: 'COPE',
      legalName: 'Radio Popular, S.A. - COPE',
      description:
        'Cadena de ràdio espanyola de titularitat eclesial (NIF A28281368), participada per Ábside Media. Explota les marques COPE, Cadena 100, Rock FM i MegaStar FM amb un registre d’usuaris comú.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      foundedYear: 1959,
      primaryRevenueModel: 'advertising',
      website: 'https://www.cope.es/',
      productDomains: ['cope.es', 'cadena100.es', 'rockfm.fm', 'megastar.fm'],
      privacyContact: 'datospersonales@cope.es',
    },
    {
      slug: 'atresmedia',
      name: 'Atresmedia',
      legalName: 'Atresmedia Corporación de Medios de Comunicación, S.A.',
      description:
        'Grup audiovisual espanyol que agrupa Antena 3, laSexta, Atresplayer i les ràdios d’Uniprex. Té un delegat de protecció de dades comú per a tot el grup.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'public',
      foundedYear: 1988,
      primaryRevenueModel: 'advertising',
      website: 'https://www.atresmedia.com/',
      productDomains: ['atresmedia.com', 'antena3.com', 'lasexta.com', 'atresplayer.com', 'ondacero.es'],
      privacyContact: 'privacidad@atresmedia.com',
    },
    {
      slug: 'uniprex',
      name: 'Uniprex',
      legalName: 'Uniprex, S.A.U.',
      parent: 'atresmedia',
      description:
        'Societat d’Atresmedia titular d’Onda Cero, Europa FM i Melodía FM. És la responsable del tractament de les dades de les webs i aplicacions d’aquestes emissores.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      primaryRevenueModel: 'advertising',
      website: 'https://www.ondacero.es/',
      productDomains: ['ondacero.es', 'europafm.com', 'melodia-fm.com'],
      privacyContact: 'privacidad@atresmedia.com',
    },
    {
      slug: 'nextdoor',
      name: 'Nextdoor',
      legalName: 'Nextdoor Holdings, Inc.',
      description:
        'Empresa nord-americana que opera una xarxa social de barri on el compte va lligat a una adreça postal verificada. Es finança amb publicitat segmentada per barri i per llar.',
      headquartersCountry: 'US',
      euEstablishment: 'IE',
      ownership: 'public',
      foundedYear: 2008,
      primaryRevenueModel: 'advertising',
      website: 'https://nextdoor.com/',
      productDomains: ['nextdoor.com', 'nextdoor.es', 'nextdoor.co.uk'],
      privacyContact: 'privacy@nextdoor.com',
    },
    {
      slug: 'nextdoor-emea',
      name: 'Nextdoor EMEA',
      legalName: 'Nextdoor EMEA Limited',
      parent: 'nextdoor',
      description:
        'Societat irlandesa amb seu a Penrose Dock (Cork) que la política declara responsable del tractament de les dades de les persones usuàries de la Unió Europea i del Regne Unit.',
      headquartersCountry: 'IE',
      euEstablishment: 'IE',
      leadSupervisoryAuthority: 'dpc-ie',
      ownership: 'subsidiary',
      primaryRevenueModel: 'advertising',
      website: 'https://nextdoor.com/',
      privacyContact: 'dpo@nextdoor.com',
    },
    {
      slug: 'objektiv-doo',
      name: 'Objektiv',
      legalName: 'Elektronski portal Objektiv d.o.o. Beograd-Palilula',
      description:
        'Societat sèrbia que edita el portal informatiu i d’entreteniment objektiv.rs. L’impressum del portal identifica OWP INFO d.o.o. Beograd com a editora.',
      headquartersCountry: 'RS',
      ownership: 'private',
      primaryRevenueModel: 'advertising',
      website: 'https://objektiv.rs/',
      productDomains: ['objektiv.rs'],
    },
    {
      slug: 'eagora',
      name: 'eAgora',
      legalName: 'eAgora Algoritme del Canvi, S.L.',
      description:
        'Empresa de Reus (NIF B42908988) que ven als ajuntaments, associacions i centres educatius una plataforma de comunicació amb la ciutadania. L’aplicació és gratuïta per a qui la fa servir.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://www.eagora.app/',
      productDomains: ['eagora.app'],
      privacyContact: 'privacidad@eagora.app',
    },
    {
      slug: 'lemur-ideas',
      name: 'Lemur Ideas',
      legalName: 'Lemur Ideas, S.L.',
      description:
        'Empresa de Coca (Segòvia), NIF B40268666, que desenvolupa Bandomóvil, el ban municipal electrònic que contracten centenars d’ajuntaments petits.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://www.bandomovil.com/',
      productDomains: ['bandomovil.com'],
      privacyContact: 'info@bandomovil.com',
    },
  ],

  sources: [
    /* ── Substack ── */
    s('substack-app-store', 'Substack — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1581650857', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada pel desenvolupador. No declara cap dada de rastreig; vincula a la identitat l’identificador d’usuari, les dades d’ús, els diagnòstics, el correu, el nom i el contingut publicat.',
    }),
    s('substack-privacy-policy', 'Substack Privacy Policy', 'https://substack.com/privacy', 'Substack, Inc.', 'privacy-policy', 'primary', {
      summary:
        'Política global. Detalla les dades del compte i de pagament, la compartició del nom i el correu amb els autors a qui et subscrius, les galetes de tercers, el Data Privacy Framework per a les transferències, la supressió del compte des de la pàgina de compte i el representant a la UE de Bird & Bird.',
    }),

    /* ── iVoox ── */
    s('ivoox-app-store', 'iVoox: Podcast y Radio — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id542673545', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: declara identificadors i dades d’ús com a dades de rastreig, i vincula a la identitat el correu i l’identificador d’usuari per a publicitat del desenvolupador, l’historial de cerca, el nom i l’historial de compres.',
    }),
    s('ivoox-privacy-policy', 'Información legal — iVoox', 'https://legal.ivoox.com/', 'iVoox Global Podcasting Service', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de privadesa i pàgines legals d’iVoox. Identifica la responsable (NIF B65387052, Sant Cugat del Vallès), enumera els proveïdors publicitaris i d’analítica (AdsWizz/AudioEmotion, Google, Comscore, Batch), i fixa terminis de 26 mesos per a l’analítica i 24 per a la publicitat d’àudio.',
    }),

    /* ── RADIO COPE ── */
    s('radio-cope-app-store', 'RADIO COPE — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id591046636', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: declara la ubicació, els identificadors, les dades d’ús i els diagnòstics com a dades que poden servir per rastrejar en apps i webs d’altres empreses.',
    }),
    s('radio-cope-privacy-policy', 'Política de privacidad — COPE', 'https://www.cope.es/politica-privacidad.html', 'Radio Popular, S.A. - COPE', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de privadesa del registre comú de COPE, Cadena 100, Rock FM i MegaStar. Diu que la base legal és sempre el consentiment, que els drets s’exerceixen des del perfil d’usuari i que algunes dades de navegació surten de l’EEE.',
    }),
    s('radio-cope-aviso-legal', 'Aviso legal — COPE', 'https://www.cope.es/aviso-legal.html', 'Radio Popular, S.A. - COPE', 'terms', 'primary', {
      language: 'es',
      summary:
        'Avís legal amb les dades de la societat: Radio Popular, S.A., NIF A28281368, Alfonso XI 4 de Madrid, i el contacte datospersonales@cope.es. És l’enllaç que l’App Store dona com a política de privadesa.',
    }),

    /* ── Cadena SER ── */
    s('cadena-ser-app-store', 'Cadena SER Radio — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id401987596', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: identificadors i dades d’ús per rastrejar; la ubicació precisa es declara com a dada no vinculada a la identitat, recollida per personalitzar el producte.',
    }),
    s('cadena-ser-privacy-policy', 'Política de privacidad de los Servicios SER', 'https://cadenaser.com/politica-privacidad/', 'Sociedad Española de Radiodifusión', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política dels serveis SER. Declara corresponsables la SER i PRISA Media, admet inferir el perfil a partir de la navegació per altres webs de PRISA Media, fixa una conservació de 5 anys i remet l’exercici de drets al correu postal.',
    }),

    /* ── Nextdoor ── */
    s('nextdoor-app-store', 'Nextdoor: red del barrio — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id640360962', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: declara dades de contacte, identificadors i dades d’ús com a dades de rastreig, i vincula a la identitat l’adreça postal, els contactes, la ubicació precisa, la informació de pagament i dades sensibles.',
    }),
    s('nextdoor-privacy-policy', 'Nextdoor Privacy Policy (effective January 1, 2026)', 'https://help.nextdoor.com/s/article/Privacy-Policy-2026', 'Nextdoor', 'privacy-policy', 'primary', {
      summary:
        'Política global vigent des de l’1 de gener del 2026. Descriu la verificació de l’adreça amb registres públics i de tercers, la sincronització de contactes, la recollida de dades sobre persones que no són membres, la compartició de correus xifrats amb socis publicitaris i l’adhesió al Data Privacy Framework.',
    }),
    s('nextdoor-eu-notice', 'Nextdoor Privacy Notices — EU and UK', 'https://help.nextdoor.com/s/article/Privacy-Notices-EU-and-UK-2026', 'Nextdoor', 'privacy-policy', 'primary', {
      summary:
        'Avís específic per a la UE i el Regne Unit, vigent des de l’1 de juliol del 2026. Identifica Nextdoor EMEA Limited (Cork) com a responsable, basa la publicitat personalitzada en el consentiment revocable des dels ajustos i remet les reclamacions a la Data Protection Commission irlandesa.',
    }),
    s('nextdoor-download-data', 'Download your personal information from Nextdoor', 'https://help.nextdoor.com/s/article/How-to-download-your-personal-information', 'Nextdoor', 'support-doc', 'primary', {
      summary:
        'Guia d’exportació. Només funciona des del web, no des de l’aplicació: Settings → Account Settings → «Request my information». L’enllaç de baixada caduca al cap de 7 dies.',
    }),
    s('nextdoor-2fa', 'About «Account confirmation» on sign in & 2FA — Nextdoor', 'https://help.nextdoor.com/s/article/About-2-Step-Verification', 'Nextdoor', 'support-doc', 'primary', {
      summary:
        'Explica la verificació en dos passos: codi de sis xifres per correu o, si hi ha telèfon al compte, per SMS. No hi ha aplicació d’autenticació ni clau física.',
    }),
    s('nextdoor-security-txt', 'nextdoor.com security.txt', 'https://nextdoor.com/.well-known/security.txt', 'Nextdoor', 'technical-doc', 'primary', {
      summary:
        'Fitxer security.txt amb el contacte security@nextdoor.com i un programa de recompenses a HackerOne (nextdoor_bbp) que el mateix fitxer descriu com a privat i només visible per als investigadors convidats.',
    }),

    /* ── Onda Cero ── */
    s('onda-cero-app-store', 'Onda Cero: Radio FM y Podcast — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id437480425', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: declara identificadors i dades d’ús com a dades de rastreig i vincula a la identitat l’identificador del dispositiu i les dades publicitàries.',
    }),
    s('onda-cero-privacy-policy', 'Política de privacidad — Onda Cero (Uniprex)', 'https://statics.atresmedia.com/ondacero/assets/legal/politica-de-privacidad.html', 'Uniprex', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política d’Uniprex actualitzada el març del 2024. Declara corresponsables LiveRamp, ID5 i el servei Utiq per crear identificadors publicitaris a partir del correu xifrat, l’identificador de publicitat mòbil i l’adreça IP, i admet transferències fora de la UE amb compromisos contractuals.',
    }),

    /* ── EL PAÍS ── */
    s('el-pais-app-store', 'EL PAÍS — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id301049096', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: identificadors i dades d’ús per rastrejar; el correu es declara per a publicitat i màrqueting del desenvolupador, i el contingut de l’usuari (correus i missatges de text) per al funcionament de l’app.',
    }),
    s('el-pais-privacy-policy', 'Política de privacidad de los servicios EL PAÍS', 'https://elpais.com/info/politica-privacidad/', 'Ediciones El País', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política dels serveis del diari. Declara corresponsables Ediciones El País i PRISA Media, admet inferir el perfil a partir de la navegació per altres webs de PRISA Media, conserva les dades 5 anys després de deixar de ser usuari i tracta de manera indefinida les dades de les persones «noticiables».',
    }),
    s('el-pais-baja', 'Baja del perfil — Área de usuario de EL PAÍS', 'https://plus.elpais.com/perfil/baja/', 'Ediciones El País', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Pàgina de baixa de l’àrea privada d’EL PAÍS, enllaçada des del menú «Derechos y baja» del compte. Demana iniciar sessió abans de mostrar el formulari.',
    }),

    /* ── Objektiv ── */
    s('objektiv-app-store', 'Objektiv — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/objektiv/id1498466663', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: declara les dades d’ús com a dades de rastreig i no vincula res a la identitat. El venedor és Elektronski portal Objektiv d.o.o. Beograd-Palilula.',
    }),
    s('objektiv-privacy-policy', 'Politika privatnosti — Objektiv', 'https://objektiv.rs/politika-privatnosti/', 'Objektiv', 'privacy-policy', 'primary', {
      language: 'other',
      summary:
        'Política de privadesa del portal, en serbi. És un text genèric i breu: parla de formularis, galetes i accés de col·laboradors i autoritats, però no esmenta el RGPD, ni terminis, ni el dret de supressió, ni cap responsable identificat.',
    }),
    s('objektiv-impressum', 'Impresum — Objektiv', 'https://objektiv.rs/impressum/', 'Objektiv', 'other', 'primary', {
      language: 'other',
      summary: 'Impressum del portal: identifica OWP INFO d.o.o. Beograd com a editora i en dona la direcció editorial.',
    }),

    /* ── eAgora ── */
    s('eagora-app-store', 'eAgora — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id717604307', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: cap dada de rastreig i cap dada vinculada a la identitat. Declara com a no vinculades la ubicació exacta, el correu, les fotos i vídeos, les dades d’ús i els diagnòstics.',
    }),
    s('eagora-privacy-policy', 'Política de privacidad — eAgora', 'https://www.eagora.app/es/politica-de-privacidad/', 'eAgora Algoritme del Canvi', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de l’empresa (NIF B42908988, Reus). Diu que les dades es xifren i es guarden en servidors de la Unió Europea, principalment a Irlanda, que no se cedeixen a tercers sense consentiment i que els drets s’exerceixen a privacidad@eagora.app.',
    }),

    /* ── Bandomóvil ── */
    s('bandomovil-app-store', 'Bandomovil — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1049832681', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: cap dada de rastreig. Vincula a la identitat la ubicació exacta, el correu, el nom, el telèfon i l’identificador del dispositiu, tot per al funcionament de l’aplicació.',
    }),
    s('bandomovil-privacy-policy', 'Sus datos seguros — Bandomóvil', 'https://www.bandomovil.com/susdatosseguros.html', 'Lemur Ideas', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de Lemur Ideas, S.L. (NIF B40268666, Coca). Enumera les finalitats, diu que no envia dades a països que no consideri segurs, que fa auditories anuals i que els drets s’exerceixen a info@bandomovil.com.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ Substack ═══════════════════════════ */
    {
      slug: 'substack',
      name: 'Substack',
      company: 'substack-inc',
      categories: ['noticies-i-mitjans', 'comunitats-i-forums'],
      tagline: 'Sense publicitat ni rastreig declarat, però el teu nom i el teu correu van a mans de cada autor a qui et subscrius',
      summary:
        'Substack viu d’una comissió sobre les subscripcions, no de la publicitat, i l’etiqueta de l’App Store no declara cap dada de rastreig. El preu és un altre: quan et subscrius a un butlletí, el nom i l’adreça electrònica passen a l’autor, que els tracta pel seu compte i sovint els exporta a la seva pròpia llista de correu. La política reconeix, a més, que els sistemes no atenen el senyal Do Not Track.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Estats Units',
      links: {
        website: 'https://substack.com/',
        privacyPolicy: 'https://substack.com/privacy',
        appStore: 'https://apps.apple.com/es/app/id1581650857',
      },
      accountRequired: f('partial', 'official', ['substack-privacy-policy'], 'Es poden llegir publicacions obertes sense compte; per subscriure-s’hi, comentar o publicar, cal registre.'),
      openSource: f('no', 'official', ['substack-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La llista de butlletins a què et subscrius és un retrat bastant fidel de les teves idees polítiques, religioses i professionals, i cada autor en rep la seva part amb el teu nom i el teu correu.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['substack-app-store', 'substack-privacy-policy'], note: 'Es comparteix amb l’autor de cada publicació a què et subscrius.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['substack-app-store', 'substack-privacy-policy'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['substack-privacy-policy'] }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal'], sources: ['substack-privacy-policy'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['substack-privacy-policy'], note: 'Els cobraments els gestionen processadors externs.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['substack-app-store'] }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['substack-privacy-policy'] }),
        row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['substack-app-store', 'substack-privacy-policy'] }),
        row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['substack-privacy-policy'], note: 'La política inclou expressament el contingut dels missatges directes entre les dades recollides.' }),
        row('fotografies-i-videos', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['substack-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['substack-app-store'], note: 'Els autors veuen mètriques d’obertura i de clics dels seus butlletins.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['substack-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['substack-privacy-policy'], note: 'La política admet galetes de tercers com Google i Facebook al web.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['substack-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['substack-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['substack-app-store'], 'L’etiqueta no declara identificadors publicitaris.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['substack-privacy-policy'], 'Galetes de tercers com Google i Facebook al web; la política reconeix que no s’atén el senyal Do Not Track.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['substack-privacy-policy', 'substack-app-store'], 'El model és la comissió sobre les subscripcions; la política no descriu publicitat segmentada pròpia.'),
        profiling: unknown('La política parla de personalitzar recomanacions, però no detalla si elabora perfils.'),
        aiTraining: unknown('La política no diu si el contingut publicat s’utilitza per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['substack-privacy-policy'], 'Autors de les publicacions subscrites, processadors de pagament, allotjament, analítica i consorcis de seguretat infantil.'),
        intraGroupSharing: f('partial', 'official', ['substack-privacy-policy'], 'La política esmenta filials, tot i que el grup és petit.'),
        dataBrokerSales: f('no', 'official', ['substack-privacy-policy'], 'La política no preveu la venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['substack-privacy-policy'], 'Tractament als Estats Units a l’empara del marc de privadesa UE-EUA; representant a la UE de Bird & Bird als Països Baixos.', { mechanism: 'adequacy' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència periòdic.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['substack-privacy-policy'], 'Només el criteri general del «temps raonablement necessari», ampliable si hi ha litigi previsible.'),
        dataAfterDeletion: unknown('La política no concreta què queda després d’eliminar el compte.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['substack-privacy-policy']),
        selfService: f('yes', 'official', ['substack-privacy-policy'], 'La política diu que la supressió es pot fer des de la pàgina de compte.'),
        difficulty: 'medium',
        steps: [
          'Al web substack.com, entra a la configuració del compte (Settings).',
          'Cancel·la abans les subscripcions de pagament actives perquè no es renovin.',
          'A la mateixa pàgina de compte, demana l’eliminació del compte.',
          'Si tens publicacions pròpies, recorda que els autors conserven les llistes de subscriptors que hagin exportat.',
        ],
        obstacles: 'Les dades que cada autor hagi exportat de la seva llista de subscriptors queden fora del control de Substack.',
        sources: ['substack-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['substack-privacy-policy'], 'Es poden consultar i editar les dades del perfil, però la política no descriu cap eina d’exportació completa.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['substack-privacy-policy'], 'Resposta en un mes, ampliable a dos; representant a la UE de Bird & Bird.', { url: 'mailto:privacy@substack.com' }),
      },
      controls: {
        adPersonalizationOptOut: na('El servei no mostra publicitat segmentada pròpia.'),
        telemetryOptOut: unknown('La política no descriu cap manera de desactivar l’analítica dins de l’aplicació.'),
        granularControls: f('partial', 'official', ['substack-privacy-policy'], 'Es poden gestionar les subscripcions, les notificacions i la visibilitat del perfil.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una plataforma de publicació oberta; els missatges directes no es xifren d’extrem a extrem.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown('No hem trobat documentació pública sobre la verificació en dos passos.'),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses públic.'),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      alternatives: [
        { app: 'reddit', comparability: 'partial', rationale: 'També serveix per seguir comunitats d’interès, però amb publicitat segmentada i sense butlletins de pagament.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La troballa és el contrast entre una etiqueta neta de rastreig i una arquitectura on cada autor esdevé responsable de dades pel seu compte. No hem pogut consultar el centre d’ajuda, que bloqueja les peticions automatitzades.',
        openQuestions: [
          'Substack ofereix verificació en dos passos i, si és així, amb quins mètodes?',
          'Quant temps es conserven les dades després de la supressió del compte?',
          'Hi ha sancions o filtracions documentades? No hem pogut fer la cerca d’incidents.',
        ],
      },
    },

    /* ═══════════════════════════ iVoox ═══════════════════════════ */
    {
      slug: 'ivoox',
      name: 'iVoox',
      company: 'ivoox',
      categories: ['noticies-i-mitjans', 'musica-i-audio'],
      tagline: 'L’historial d’escolta de pòdcasts alimenta la publicitat d’àudio, amb el correu declarat per a màrqueting',
      summary:
        'iVoox és l’agregador de pòdcasts més usat a Espanya i es finança inserint publicitat dins de l’àudio. L’etiqueta de l’App Store declara el correu electrònic i l’identificador d’usuari entre les dades vinculades a la identitat per a «publicitat o màrqueting del desenvolupador», i identificadors i dades d’ús com a dades de rastreig. La política és de les poques que posa xifres: 26 mesos per a l’analítica i 24 per a la plataforma publicitària d’àudio.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.ivoox.com/',
        privacyPolicy: 'https://legal.ivoox.com/',
        appStore: 'https://apps.apple.com/es/app/id542673545',
      },
      accountRequired: f('partial', 'official', ['ivoox-privacy-policy'], 'Es pot escoltar sense compte; per subscriure’s a programes, desar i sincronitzar cal registrar-s’hi.'),
      openSource: f('no', 'official', ['ivoox-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Què escoltes i durant quanta estona dibuixa amb molta precisió les teves idees, la teva salut i les teves aficions; iVoox ho creua amb el correu per segmentar la publicitat inserida en l’àudio.',
      dataCollection: [
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['ivoox-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['ivoox-app-store', 'ivoox-privacy-policy'], note: 'L’etiqueta el declara per a publicitat i màrqueting del desenvolupador.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['ivoox-app-store'] }),
        row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['ivoox-app-store'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['ivoox-app-store'] }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['ivoox-privacy-policy'], note: 'La política parla de l’historial d’escolta i de les categories de contingut consumit.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['ivoox-privacy-policy'], note: 'La política esmenta expressament la segmentació i la personalització de la publicitat.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['ivoox-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['ivoox-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['ivoox-app-store'], note: 'L’etiqueta agrupa aquestes dades com a «datos publicitarios» per a publicitat de tercers.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['ivoox-privacy-policy'], note: 'Marca, model, sistema operatiu i resolució de pantalla.' }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['ivoox-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['ivoox-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['ivoox-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['ivoox-app-store'], 'L’etiqueta declara identificadors i dades d’ús com a dades que poden servir per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['ivoox-app-store'], 'Identificador de dispositiu i dades publicitàries per a publicitat de tercers.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['ivoox-privacy-policy'], 'AdsWizz/AudioEmotion, Google, Comscore i Batch.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['ivoox-privacy-policy', 'ivoox-app-store'], 'Segmentació i personalització de la publicitat, i prospecció comercial.'),
        profiling: f('yes', 'official', ['ivoox-privacy-policy'], 'Perfils a partir de l’historial d’escolta i de les categories de contingut.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['ivoox-privacy-policy'], 'Plataformes publicitàries (AdsWizz/AudioEmotion, Google), analítica (Google Analytics, Comscore), notificacions (Batch) i identificació social (Facebook Connect, Google Sign-In).'),
        intraGroupSharing: unknown('La política no descriu cap grup empresarial.'),
        dataBrokerSales: unknown('La política no ho aborda.'),
        internationalTransfers: unknown('La política no té cap apartat de transferències internacionals, tot i que els proveïdors citats són nord-americans.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['ivoox-privacy-policy'], 'Hi ha terminis per als proveïdors publicitaris i d’analítica, però no per al compte, que es conserva mentre no en demanis la supressió.'),
        dataAfterDeletion: unknown('La política no concreta què queda després de la supressió.'),
        periods: [
          { dataType: 'interaccions-i-us', period: '26 mesos (eina d’analítica)', sources: ['ivoox-privacy-policy'] },
          { dataType: 'identificador-publicitari', period: '24 mesos (AdsWizz/AudioEmotion)', sources: ['ivoox-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['ivoox-privacy-policy']),
        selfService: unknown('La política només documenta la sol·licitud per correu o per carta; no hem pogut verificar cap botó d’eliminació dins del compte.'),
        difficulty: 'medium',
        steps: [
          'Cancel·la abans els plans de pagament (Premium, Plus o Pro) que tinguis contractats.',
          'Escriu a legal@ivoox.com des de l’adreça del compte demanant la supressió de les dades, o envia la sol·licitud per carta al domicili de la societat a Sant Cugat del Vallès.',
        ],
        obstacles: 'La via documentada és el correu electrònic, sense formulari ni termini de resposta publicat.',
        sources: ['ivoox-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['ivoox-privacy-policy'], 'La portabilitat es reconeix, però cal demanar-la per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['ivoox-privacy-policy'], 'Per correu a legal@ivoox.com; la política no designa cap delegat de protecció de dades.', { url: 'mailto:legal@ivoox.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['ivoox-privacy-policy'], 'El consentiment publicitari es pot retirar, i els plans de pagament eliminen els anuncis; no consta un control granular dins de l’app.'),
        telemetryOptOut: unknown(),
        granularControls: unknown(),
        defaultPosture: 'permissive',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació d’escolta de pòdcasts i ràdio.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      alternatives: [
        { app: 'spotify', comparability: 'partial', rationale: 'També ofereix pòdcasts en català i castellà, amb una política més detallada, però amb un perfil publicitari molt més ampli.', tradeOffs: 'El catàleg de pòdcasts independents espanyols és més reduït.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La troballa és que l’etiqueta declara el correu i l’identificador d’usuari per a màrqueting del desenvolupador, cosa que lliga la identitat amb l’historial d’escolta. La política no té apartat de transferències internacionals tot i citar proveïdors nord-americans.',
        openQuestions: [
          'Hi ha una opció d’eliminació del compte dins de l’aplicació, com exigeix Apple?',
          'Quin mecanisme empara les transferències cap a Google, Comscore i AdsWizz?',
          'Hi ha sancions o filtracions documentades? No hem pogut fer la cerca d’incidents.',
        ],
      },
    },

    /* ═══════════════════════════ RADIO COPE ═══════════════════════════ */
    {
      slug: 'radio-cope',
      name: 'RADIO COPE',
      company: 'radio-popular-cope',
      categories: ['noticies-i-mitjans', 'musica-i-audio'],
      tagline: 'L’única ràdio del lot que declara la ubicació entre les dades que serveixen per rastrejar-te',
      summary:
        'L’aplicació de la COPE declara a l’App Store que la ubicació, els identificadors, les dades d’ús i els diagnòstics poden servir per rastrejar en apps i webs d’altres empreses: és l’única de les quatre emissores del lot que hi inclou la ubicació. La política de privadesa, en canvi, és breu, basa tot el tractament en el consentiment i promet que els drets s’exerceixen des del perfil d’usuari. L’enllaç que l’App Store dona com a política de privadesa apunta en realitat a l’avís legal.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'advertising',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.cope.es/',
        privacyPolicy: 'https://www.cope.es/politica-privacidad.html',
        appStore: 'https://apps.apple.com/es/app/id591046636',
      },
      accountRequired: f('partial', 'official', ['radio-cope-privacy-policy'], 'Escoltar la ràdio no demana compte; registrar-se serveix per comentar i rebre butlletins de totes les emissores del grup.'),
      openSource: f('no', 'official', ['radio-cope-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Escoltar una emissora d’ideari catòlic no és una dada neutra, i la COPE la lliga a la ubicació i als identificadors publicitaris que declara com a dades de rastreig.',
      dataCollection: [
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['radio-cope-privacy-policy'], note: 'Camp necessari del registre, compartit amb la resta de marques del grup COPE.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['radio-cope-privacy-policy'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['radio-cope-privacy-policy'], note: 'Camp opcional del registre.' }),
        row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['radio-cope-privacy-policy'], note: 'Camp opcional del registre.' }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['radio-cope-privacy-policy'], note: 'Camp opcional del registre.' }),
        row('ocupacio-i-carrec', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils'], sources: ['radio-cope-privacy-policy'], note: 'La professió és un camp opcional per enviar comunicacions d’interès.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['radio-cope-app-store'] }),
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['radio-cope-app-store'], note: 'L’etiqueta la declara com a dada no vinculada a la identitat, però inclou la ubicació entre les dades de rastreig.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['radio-cope-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['radio-cope-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['radio-cope-app-store'], note: 'L’etiqueta declara «datos publicitarios» vinculats a la identitat.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['radio-cope-app-store'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['radio-cope-privacy-policy'], note: 'La política remet al panell de configuració de galetes per retirar el consentiment.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['radio-cope-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['radio-cope-app-store'], 'Ubicació, identificadors, dades d’ús i diagnòstics declarats com a dades de rastreig.'),
        advertisingIdentifiers: f('yes', 'official', ['radio-cope-app-store'], 'Identificador de dispositiu i dades publicitàries vinculats a la identitat.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['radio-cope-privacy-policy'], 'Proveïdors de galetes i xarxes socials, alguns fora de l’Espai Econòmic Europeu.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['radio-cope-privacy-policy', 'radio-cope-app-store'], 'La política descriu l’anàlisi de les dades de navegació per oferir publicitat personalitzada.'),
        profiling: f('partial', 'official', ['radio-cope-privacy-policy'], 'Les preferències sobre la programació i la professió es recullen per enviar comunicacions d’interès.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['radio-cope-privacy-policy'], 'La política diu que no comunica dades a tercers, però admet que les dades de navegació van a proveïdors de galetes i a xarxes socials.'),
        intraGroupSharing: f('yes', 'official', ['radio-cope-privacy-policy'], 'Un sol registre val per a COPE, Cadena 100, Rock FM i MegaStar, amb el mateix responsable.'),
        dataBrokerSales: unknown('La política no ho aborda.'),
        internationalTransfers: f('yes', 'official', ['radio-cope-privacy-policy'], 'Reconeix que algunes dades de navegació surten de l’EEE perquè els proveïdors tenen la seu a tercers països, sense concretar cap garantia.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['radio-cope-privacy-policy'], 'Només el criteri del «temps mínim necessari», sense cap xifra.'),
        dataAfterDeletion: unknown('La política no concreta què es conserva després de la supressió.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['radio-cope-privacy-policy']),
        selfService: f('yes', 'official', ['radio-cope-privacy-policy'], 'La política diu que des del perfil d’usuari es poden eliminar dades concretes, interessos o el perfil sencer.'),
        difficulty: 'easy',
        steps: [
          'Entra al teu perfil a cope.es amb el compte registrat.',
          'A la gestió de subscripcions, elimina les dades o els interessos que vulguis, o bé el perfil complet.',
          'Si no ho aconsegueixes, escriu a datospersonales@cope.es demanant la supressió.',
        ],
        dataRetained: 'Les dades necessàries per atendre responsabilitats derivades del servei i altres exigències legals.',
        sources: ['radio-cope-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['radio-cope-privacy-policy'], 'La portabilitat es reconeix, però no hi ha cap eina descrita.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['radio-cope-privacy-policy', 'radio-cope-aviso-legal'], 'Des del perfil d’usuari o per correu a datospersonales@cope.es.', { url: 'mailto:datospersonales@cope.es' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['radio-cope-privacy-policy'], 'Panell de configuració de galetes al web, amb retirada del consentiment en qualsevol moment.'),
        telemetryOptOut: unknown('No consta cap control equivalent dins de l’aplicació.'),
        granularControls: f('partial', 'official', ['radio-cope-privacy-policy'], 'Al perfil es poden gestionar subscripcions i interessos de manera segmentada.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació d’escolta de ràdio i pòdcasts.'),
        transportEncryption: unknown(),
        atRestEncryption: f('partial', 'official', ['radio-cope-privacy-policy'], 'La política diu que s’aplica xifratge i accés restringit, sense concretar-ne l’abast.'),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      alternatives: [
        { app: 'rac1', comparability: 'partial', rationale: 'Ràdio generalista amb una aplicació equivalent; també ven perfils publicitaris, però no declara la ubicació com a dada de rastreig.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política de privadesa és curta i no encaixa del tot amb l’etiqueta de l’App Store: diu que no comunica dades a tercers mentre l’etiqueta declara identificadors i ubicació per a publicitat de tercers. L’enllaç de privadesa de l’App Store apunta a l’avís legal, no a la política.',
        openQuestions: [
          'Per a què fa servir exactament la ubicació precisa l’aplicació?',
          'Quines garanties empara les transferències fora de l’EEE que reconeix la política?',
          'Hi ha sancions o filtracions documentades? No hem pogut fer la cerca d’incidents.',
        ],
      },
    },

    /* ═══════════════════════════ Cadena SER ═══════════════════════════ */
    {
      slug: 'cadena-ser-radio',
      name: 'Cadena SER Radio',
      company: 'sociedad-espanola-de-radiodifusion',
      categories: ['noticies-i-mitjans', 'musica-i-audio'],
      tagline: 'El perfil es dedueix de la navegació per totes les webs de PRISA Media, no només de la SER',
      summary:
        'La política de la Cadena SER diu obertament que el perfil de la persona usuària es pot inferir a partir de la navegació per altres webs de PRISA Media, és a dir, d’EL PAÍS, AS o Los40. Dues societats hi consten com a responsables: la SER i PRISA Media, que comercialitza la publicitat. A l’App Store, l’aplicació declara identificadors i dades d’ús com a dades de rastreig i la ubicació precisa com a dada no vinculada a la identitat.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'advertising',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://cadenaser.com/',
        privacyPolicy: 'https://cadenaser.com/politica-privacidad/',
        appStore: 'https://apps.apple.com/es/app/id401987596',
      },
      accountRequired: f('no', 'official', ['cadena-ser-privacy-policy'], 'La política s’aplica a qui navega sense registre; els serveis que demanen compte tenen condicions pròpies.'),
      openSource: f('no', 'official', ['cadena-ser-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El codi d’usuari que la SER assigna a cada dispositiu permet unir el que escoltes amb el que llegeixes a la resta de mitjans del grup, i d’aquí en surt el perfil que es ven als anunciants.',
      dataCollection: [
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['cadena-ser-app-store', 'cadena-ser-privacy-policy'], note: 'La política diu que s’assigna un codi d’usuari per dispositiu o navegador, encara que no t’hi registris.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['cadena-ser-privacy-policy'] }),
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['cadena-ser-app-store'], note: 'L’etiqueta la declara com a dada no vinculada a la identitat per personalitzar el producte.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'group', purposes: ['personalitzacio-de-continguts', 'compliment-legal'], sources: ['cadena-ser-privacy-policy'], note: 'El territori de connexió serveix per verificar els drets d’emissió d’alguns continguts.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['cadena-ser-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['cadena-ser-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'elaboracio-de-perfils'], sources: ['cadena-ser-app-store', 'cadena-ser-privacy-policy'] }),
        row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['cadena-ser-privacy-policy'], note: 'Inclou la navegació per altres webs de PRISA Media.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['cadena-ser-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['cadena-ser-privacy-policy'], note: 'La política esmenta també imatges transparents inserides a webs i aplicacions.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['cadena-ser-privacy-policy'] }),
        row('xarxa-i-connectivitat', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['cadena-ser-privacy-policy'], note: 'La política cita dades sobre la xarxa mòbil.' }),
        row('llengua', 'yes', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['cadena-ser-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['cadena-ser-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['cadena-ser-app-store', 'cadena-ser-privacy-policy'], 'Identificadors i dades d’ús declarats per rastrejar, i perfil inferit a partir de la navegació per altres webs del grup.'),
        advertisingIdentifiers: f('yes', 'official', ['cadena-ser-app-store'], 'Identificador de dispositiu i dades publicitàries per a publicitat de tercers.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['cadena-ser-privacy-policy'], 'Proveïdors externs d’analítica amb galetes i balises transparents.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['cadena-ser-privacy-policy'], 'Informació editorial o comercial dissenyada per al perfil inferit, en serveis propis i de tercers.'),
        profiling: f('yes', 'official', ['cadena-ser-privacy-policy'], 'La política parla de definir tipologies, segmentacions i perfils d’usuari.'),
        aiTraining: unknown('La política només diu que les notícies queden a disposició de sistemes d’aprenentatge automàtic de tercers, no que la SER n’entreni cap.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['cadena-ser-privacy-policy'], 'La política diu que no cedeix dades sense base jurídica, però admet proveïdors externs de mesura amb galetes.'),
        intraGroupSharing: f('yes', 'official', ['cadena-ser-privacy-policy'], 'PRISA Media és corresponsable i el perfil es construeix amb la navegació per altres webs del grup.'),
        dataBrokerSales: unknown('La política no ho aborda.'),
        internationalTransfers: unknown('La política no té cap apartat de transferències internacionals.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['cadena-ser-privacy-policy'], 'Cinc anys des que es deixa de ser usuari, i cinc anys més de bloqueig si s’exerceix la supressió.'),
        dataAfterDeletion: f('partial', 'official', ['cadena-ser-privacy-policy'], 'Després de la supressió les dades queden bloquejades i a disposició de les autoritats durant 5 anys.'),
        periods: [
          { dataType: 'identificador-de-compte', period: '5 anys després de deixar de ser usuari', sources: ['cadena-ser-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['cadena-ser-privacy-policy'], 'El dret de supressió es reconeix; la política general no regula els serveis amb registre.'),
        selfService: unknown('La política remet al correu postal; no hem pogut verificar cap opció d’eliminació dins de l’app.'),
        difficulty: 'hard',
        steps: [
          'Envia una carta al domicili de Sociedad Española de Radiodifusión (Gran Vía 32, 28013 Madrid) acreditant la identitat i indicant el dret que vols exercir.',
          'Detalla quins serveis de la SER fas servir o has fet servir, perquè la política ho demana per poder atendre la sol·licitud.',
          'Si no obtens resposta, escriu al delegat de protecció de dades del grup a dpo@prisa.com.',
        ],
        obstacles: 'La política només documenta el correu postal com a via d’exercici de drets, una barrera notable per a un servei digital.',
        dataRetained: 'Dades bloquejades durant 5 anys a disposició de les autoritats.',
        sources: ['cadena-ser-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['cadena-ser-privacy-policy'], 'La portabilitat es reconeix, però cal demanar-la per correu postal.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['cadena-ser-privacy-policy'], 'Correu postal al domicili de les responsables; el delegat de protecció de dades del grup atén consultes a dpo@prisa.com.', { url: 'mailto:dpo@prisa.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['cadena-ser-privacy-policy'], 'La política remet a la política de galetes per gestionar el consentiment; no descriu cap control dins de l’app.'),
        telemetryOptOut: unknown(),
        granularControls: unknown(),
        defaultPosture: 'permissive',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació d’escolta de ràdio i pòdcasts.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses del grup.'),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      alternatives: [
        { app: 'rac1', comparability: 'partial', rationale: 'Ràdio generalista equivalent en català, amb una política pròpia i un grup editorial més petit.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política publicada només cobreix la navegació sense registre; els serveis amb compte remeten a condicions específiques que no hem pogut localitzar. L’App Store encara atribueix l’aplicació a «Union Radio», el nom comercial antic de la societat.',
        openQuestions: [
          'On és la política dels serveis SER amb registre?',
          'Hi ha alguna via digital per exercir els drets, més enllà del correu postal?',
          'Hi ha sancions o filtracions documentades? No hem pogut fer la cerca d’incidents.',
        ],
      },
    },

    /* ═══════════════════════════ Nextdoor ═══════════════════════════ */
    {
      slug: 'nextdoor',
      name: 'Nextdoor',
      company: 'nextdoor-emea',
      categories: ['comunitats-i-forums', 'xarxes-socials', 'noticies-i-mitjans'],
      tagline: 'Una xarxa social on el compte va lligat a una adreça postal verificada amb registres públics',
      summary:
        'Nextdoor només et deixa entrar si demostres que vius on dius: verifica l’adreça contra registres públics, dades de tercers, codis postals o geolocalització. Aquesta adreça és, alhora, la matèria primera del negoci publicitari, que segmenta per barri i per llar amb dades comprades a socis. La política admet també que es recullen dades de persones que no tenen compte, a partir de les agendes de contactes que hi sincronitzen els veïns.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'advertising',
      jurisdiction: 'Irlanda (per a l’Espai Econòmic Europeu)',
      links: {
        website: 'https://nextdoor.com/',
        privacyPolicy: 'https://help.nextdoor.com/s/article/Privacy-Policy-2026',
        appStore: 'https://apps.apple.com/es/app/id640360962',
      },
      accountRequired: f('yes', 'official', ['nextdoor-privacy-policy'], 'Cal registre i verificació de l’adreça per participar; sense compte només es veuen parts limitades del servei.'),
      openSource: f('no', 'official', ['nextdoor-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'L’adreça de casa, la llista de contactes i el que preguntes al barri componen un perfil de llar que Nextdoor pot creuar amb dades d’anunciants sobre compres i visites a botigues.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['nextdoor-app-store', 'nextdoor-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['nextdoor-app-store', 'nextdoor-privacy-policy'], note: 'El correu xifrat es comparteix amb socis publicitaris per crear audiències similars.' }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['nextdoor-app-store', 'nextdoor-privacy-policy'], note: 'Es verifica contra registres públics, cadastres, dades de canvi de domicili i proveïdors de dades.' }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'prestacio-del-servei'], sources: ['nextdoor-app-store', 'nextdoor-privacy-policy'], note: 'Es pot compartir amb operadores de telecomunicacions per confirmar la identitat.' }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['nextdoor-app-store', 'nextdoor-privacy-policy'], note: 'Si sincronitzes l’agenda, Nextdoor tracta dades de persones que no són membres.' }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal'], sources: ['nextdoor-privacy-policy'], note: 'Obligatòria en algunes jurisdiccions per verificar l’edat.' }),
        row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['elaboracio-de-perfils'], sources: ['nextdoor-privacy-policy'] }),
        row('origen-etnic-o-nacionalitat', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['investigacio-i-estadistica'], sources: ['nextdoor-privacy-policy', 'nextdoor-app-store'], note: 'L’etiqueta de l’App Store declara «datos sensibles» per a analítica; la política diu que només s’usen per detectar biaixos.' }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['nextdoor-app-store', 'nextdoor-privacy-policy'], note: 'Serveix per confirmar l’adreça i per etiquetar publicacions.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['nextdoor-app-store', 'nextdoor-privacy-policy'], note: 'Es dedueix de l’adreça IP quan no es concedeix la ubicació precisa.' }),
        row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['nextdoor-app-store', 'nextdoor-privacy-policy'], note: 'Les publicacions poden ser visibles per a empreses, administracions, visitants i cercadors.' }),
        row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['nextdoor-privacy-policy'] }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['nextdoor-app-store', 'nextdoor-privacy-policy'], note: 'Les metadades dels fitxers poden quedar accessibles a qui hi tingui accés.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'recomanacions-algoritmiques'], sources: ['nextdoor-app-store', 'nextdoor-privacy-policy'], note: 'Una cerca de «lampista» pot activar anuncis del sector.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['nextdoor-app-store', 'nextdoor-privacy-policy'], note: 'Els cobraments els tracta directament Stripe.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['nextdoor-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['nextdoor-app-store', 'nextdoor-privacy-policy'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['nextdoor-privacy-policy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'millora-del-producte'], sources: ['nextdoor-privacy-policy'], note: 'Inclou memòria, ús de processador, bateria i operadora.' }),
        row('xarxa-i-connectivitat', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['nextdoor-privacy-policy'] }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['nextdoor-privacy-policy'], note: 'Anunciants i socis poden aportar informació sobre compres anteriors o visites a botigues.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['nextdoor-app-store', 'nextdoor-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['nextdoor-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['nextdoor-app-store', 'nextdoor-privacy-policy'], 'L’etiqueta declara dades de contacte, identificadors i dades d’ús per rastrejar; la política descriu socis publicitaris que recullen dades al llarg del temps en altres serveis.'),
        advertisingIdentifiers: f('yes', 'official', ['nextdoor-privacy-policy'], 'Es comparteixen correus xifrats i identificadors publicitaris amb els socis.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['nextdoor-privacy-policy'], 'Xarxes publicitàries de tercers, amb la publicitat de Bing de Microsoft esmentada expressament.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['nextdoor-privacy-policy', 'nextdoor-eu-notice'], 'A la UE la publicitat personalitzada es basa en el consentiment i es pot revocar; sense consentiment continuen els anuncis no personalitzats.'),
        profiling: f('yes', 'official', ['nextdoor-privacy-policy'], 'Perfils de persona i de llar amb dades pròpies, de socis i de fonts públiques.'),
        aiTraining: f('partial', 'official', ['nextdoor-privacy-policy'], 'La política cita proveïdors d’intel·ligència artificial generativa entre els encarregats, però no diu que s’entrenin models amb el contingut.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['nextdoor-privacy-policy'], 'Anunciants, socis de reserva de serveis, proveïdors de verificació, operadores, Stripe, assessors professionals i autoritats.'),
        intraGroupSharing: f('yes', 'official', ['nextdoor-privacy-policy'], 'Entre Nextdoor Holdings, Nextdoor Inc. i les filials europees, canadenca i australiana.'),
        dataBrokerSales: f('partial', 'official', ['nextdoor-privacy-policy'], 'No descriu vendes, però sí la compra de dades a proveïdors i anunciants sobre membres i llars.'),
        internationalTransfers: f('yes', 'official', ['nextdoor-eu-notice', 'nextdoor-privacy-policy'], 'Transferències als Estats Units a l’empara del Data Privacy Framework o de clàusules contractuals tipus.', { mechanism: 'adequacy' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència periòdic.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['nextdoor-privacy-policy'], 'Només criteris generals: el temps necessari per prestar el servei o per complir obligacions legals.'),
        dataAfterDeletion: f('partial', 'official', ['nextdoor-privacy-policy'], 'Es poden conservar dades per complir obligacions legals, resoldre disputes o aplicar les condicions.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['nextdoor-privacy-policy', 'nextdoor-eu-notice']),
        selfService: f('yes', 'official', ['nextdoor-privacy-policy'], 'La política diu que el compte s’elimina des de la configuració del compte.'),
        difficulty: 'medium',
        directUrl: 'https://help.nextdoor.com/s/article/Privacy-Policy-2026',
        steps: [
          'Abans d’esborrar res, demana la còpia de les teves dades des del web (Settings → Account Settings → «Request my information»).',
          'A la mateixa pàgina de configuració del compte, tria l’opció d’eliminar el compte.',
          'Recorda que les publicacions que hagin estat indexades per cercadors poden quedar en memòria cau de tercers durant un temps.',
        ],
        obstacles: 'Les dades que altres veïns hagin compartit sobre tu, o que hagin pujat sincronitzant l’agenda, no desapareixen amb el teu compte.',
        dataRetained: 'Dades necessàries per a obligacions legals, disputes i aplicació de les condicions.',
        sources: ['nextdoor-privacy-policy', 'nextdoor-download-data'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['nextdoor-download-data'], 'Fitxer amb publicacions, comentaris, missatges directes, perfil i activitat; només des del web i amb un enllaç que caduca en 7 dies.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['nextdoor-eu-notice'], 'Nextdoor EMEA Limited (Cork) com a responsable, amb delegat de protecció de dades i reclamació a la Data Protection Commission irlandesa.', { url: 'mailto:dpo@nextdoor.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['nextdoor-eu-notice'], 'El consentiment per a la publicitat personalitzada es pot retirar des dels ajustos; llavors es veuen anuncis no personalitzats.'),
        telemetryOptOut: f('partial', 'official', ['nextdoor-privacy-policy'], 'El consentiment de galetes es gestiona des de la política de galetes; la política reconeix que no s’atén el senyal Do Not Track.'),
        granularControls: f('yes', 'official', ['nextdoor-privacy-policy'], 'Es pot triar la visibilitat de cada publicació (barri, barris propers, qualsevol o grups) i quanta informació del perfil es mostra.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: f('no', 'official', ['nextdoor-privacy-policy'], 'Els missatges directes es tracten als servidors de Nextdoor i es poden revisar per moderació i per requeriment legal.'),
        transportEncryption: f('yes', 'official', ['nextdoor-privacy-policy'], 'La política diu que s’usa HTTPS a totes les pàgines.'),
        atRestEncryption: unknown(),
        mfa: f('partial', 'official', ['nextdoor-2fa'], 'Verificació en dos passos per codi per correu o SMS; no hi ha aplicació d’autenticació ni clau física.', { methods: ['email', 'sms'] }),
        independentAudits: unknown(),
        bugBounty: f('partial', 'official', ['nextdoor-security-txt'], 'Programa a HackerOne que el mateix security.txt descriu com a privat i només accessible per invitació.'),
        vulnerabilityDisclosure: f('yes', 'official', ['nextdoor-security-txt'], undefined, { url: 'https://nextdoor.com/.well-known/security.txt' }),
      },
      alternatives: [
        { app: 'eagora', comparability: 'partial', rationale: 'Cobreix la informació del municipi sense demanar una adreça verificada ni vendre publicitat segmentada.', tradeOffs: 'No té conversa entre veïns ni mercat de segona mà.' },
        { app: 'wallapop', comparability: 'complementary', rationale: 'Per a la compravenda entre veïns, que és un dels usos habituals de Nextdoor.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política del 2026 i l’avís per a la UE i el Regne Unit són dels més detallats del lot. La troballa és la combinació d’adreça verificada, agendes sincronitzades i dades comprades a anunciants: el perfil resultant és de llar, no només de persona.',
        openQuestions: [
          'Quants dies es conserven les dades després d’eliminar el compte?',
          'Quin és el procediment exacte d’eliminació dins de l’aplicació mòbil?',
          'Hi ha sancions o filtracions documentades? No hem pogut fer la cerca d’incidents.',
        ],
      },
    },

    /* ═══════════════════════════ Onda Cero ═══════════════════════════ */
    {
      slug: 'onda-cero',
      name: 'Onda Cero',
      company: 'uniprex',
      categories: ['noticies-i-mitjans', 'musica-i-audio'],
      tagline: 'Tres corresponsables publicitaris —LiveRamp, ID5 i Utiq— que converteixen el correu i l’IP en identificadors persistents',
      summary:
        'La política d’Uniprex és de les poques que noms els seus socis publicitaris i n’assumeix la corresponsabilitat: LiveRamp i ID5 creen codis d’identificació a partir del correu xifrat, l’identificador publicitari i l’adreça IP, i el servei Utiq afegeix senyals que venen directament de l’operadora de telefonia. Tot es basa en el consentiment i es pot rebutjar al panell de configuració, però el disseny per defecte de l’ecosistema publicitari és clarament més permissiu que protector.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'advertising',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.ondacero.es/',
        privacyPolicy: 'https://statics.atresmedia.com/ondacero/assets/legal/politica-de-privacidad.html',
        appStore: 'https://apps.apple.com/es/app/id437480425',
      },
      accountRequired: f('no', 'official', ['onda-cero-privacy-policy'], 'Escoltar la ràdio no demana compte; el registre serveix per a concursos, promocions i votacions.'),
      openSource: f('no', 'official', ['onda-cero-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El correu electrònic que dones per participar en un concurs pot acabar convertit, xifrat, en un identificador publicitari que et segueix per tot l’ecosistema de LiveRamp i ID5.',
      dataCollection: [
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['onda-cero-privacy-policy'], note: 'Dades de registre de formularis, concursos i promocions.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['onda-cero-privacy-policy'], note: 'Es comparteix xifrat amb LiveRamp i ID5 per crear codis d’identificació publicitària.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['onda-cero-privacy-policy'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['onda-cero-app-store', 'onda-cero-privacy-policy'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['onda-cero-app-store', 'onda-cero-privacy-policy'], note: 'La política parla de l’identificador de publicitat mòbil compartit amb LiveRamp.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['onda-cero-privacy-policy'], note: 'Inclou el martechpass i l’adtechpass d’Utiq, que caduquen als 90 dies i les 24 hores.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['onda-cero-privacy-policy'], note: 'Navegador i sistema operatiu, compartits amb LiveRamp.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['onda-cero-app-store', 'onda-cero-privacy-policy'] }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['onda-cero-privacy-policy'], note: 'Utiq permet analitzar els interessos en webs de tercers que integren el servei.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['onda-cero-privacy-policy'], note: 'Suggeriments, consultes i comentaris dels oients, tractats per interès legítim.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['onda-cero-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['onda-cero-app-store', 'onda-cero-privacy-policy'], 'Identificadors i dades d’ús declarats per rastrejar; els codis de LiveRamp i ID5 estan pensats per reconèixer la persona en diversos dispositius i webs.'),
        advertisingIdentifiers: f('yes', 'official', ['onda-cero-privacy-policy'], 'Identificador de publicitat mòbil compartit amb els corresponsables publicitaris.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['onda-cero-privacy-policy'], 'LiveRamp, ID5 i Utiq, tots tres declarats corresponsables del tractament.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['onda-cero-privacy-policy']),
        profiling: f('yes', 'official', ['onda-cero-privacy-policy'], 'Els codis d’identitat permeten vincular informació demogràfica i d’interessos aportada per tercers.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['onda-cero-privacy-policy'], 'Corresponsables publicitaris (LiveRamp, ID5, Utiq) i encarregats d’atenció al client, pagaments, seguretat i comercialització publicitària.'),
        intraGroupSharing: f('yes', 'official', ['onda-cero-privacy-policy'], 'El responsable és la societat del grup Atresmedia que gestiona cada servei, amb un delegat de protecció de dades comú.'),
        dataBrokerSales: f('partial', 'official', ['onda-cero-privacy-policy'], 'No hi ha venda declarada, però els codis d’identitat es poden compartir amb socis publicitaris d’abast global.'),
        internationalTransfers: f('yes', 'official', ['onda-cero-privacy-policy'], 'Admet transferències fora de la UE amb «compromisos contractuals», sense concretar quin mecanisme.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['onda-cero-privacy-policy'], 'Hi ha terminis per a concursos i consultes, però no per a les dades de navegació ni per al registre general.'),
        dataAfterDeletion: f('partial', 'official', ['onda-cero-privacy-policy'], 'Les dades queden bloquejades durant el termini de prescripció de les accions derivades de la relació.'),
        periods: [
          { dataType: 'nom-i-cognoms', period: '6 mesos després d’acabar el concurs o la promoció, i després bloquejades', sources: ['onda-cero-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['onda-cero-privacy-policy'], 'El dret de supressió es reconeix i les dades basades en consentiment se suprimeixen immediatament en retirar-lo.'),
        selfService: unknown('La política només documenta el correu i la via postal; no hem pogut verificar cap opció dins de l’aplicació.'),
        difficulty: 'medium',
        steps: [
          'Escriu a privacidad@atresmedia.com acreditant la identitat i indicant que vols suprimir les dades associades a Onda Cero.',
          'Com a alternativa, envia la sol·licitud a l’Oficina de Protecció de Dades d’Atresmedia, Avda. Isla Graciosa 13, 28703 San Sebastián de los Reyes (Madrid).',
          'Al panell de configuració de galetes, retira també el consentiment de LiveRamp, ID5 i Utiq.',
          'Per esborrar del tot els identificadors d’Utiq, entra al seu consenthub i revoca-hi tots els consentiments.',
        ],
        dataRetained: 'Dades bloquejades durant el termini de prescripció o per atendre requeriments d’autoritats públiques.',
        sources: ['onda-cero-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['onda-cero-privacy-policy'], 'La política diu que la portabilitat es lliura en un format estructurat i de lectura mecànica.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['onda-cero-privacy-policy'], 'Canal centralitzat del grup Atresmedia amb delegat de protecció de dades.', { url: 'mailto:privacidad@atresmedia.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['onda-cero-privacy-policy'], 'Panell de configuració de galetes, amb oposició específica per a LiveRamp, ID5 i Utiq; Utiq està desactivat per defecte.'),
        telemetryOptOut: f('partial', 'official', ['onda-cero-privacy-policy'], 'La política diu que els indicadors de les aplicacions es poden configurar en qualsevol moment, sense detallar com.'),
        granularControls: f('yes', 'official', ['onda-cero-privacy-policy'], 'Consentiments separats per a cada corresponsable publicitari.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació d’escolta de ràdio i pòdcasts.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses del grup.'),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      alternatives: [
        { app: 'rac1', comparability: 'partial', rationale: 'Ràdio generalista equivalent en català, amb menys corresponsables publicitaris declarats.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política és molt explícita sobre la infraestructura publicitària, cosa que juga a favor seu en claredat i en contra en intrusivitat. Té data de març del 2024 i cobreix tot el grup Atresmedia, no només Onda Cero.',
        openQuestions: [
          'Quin mecanisme concret empara les transferències fora de la UE?',
          'Els identificadors de LiveRamp i ID5 també s’apliquen dins de l’aplicació mòbil o només al web?',
          'Hi ha sancions o filtracions documentades? No hem pogut fer la cerca d’incidents.',
        ],
      },
    },

    /* ═══════════════════════════ EL PAÍS ═══════════════════════════ */
    {
      slug: 'el-pais',
      name: 'EL PAÍS',
      company: 'ediciones-el-pais',
      categories: ['noticies-i-mitjans'],
      tagline: 'Perfil inferit amb la navegació per tot PRISA Media i cinc anys de conservació després de marxar',
      summary:
        'La política d’EL PAÍS declara dues responsables, l’editora i PRISA Media, i admet que el perfil de la persona lectora es pot inferir a partir de la navegació per altres webs del grup i de la geolocalització del terminal. Fixa un termini poc habitual de cinc anys de conservació després de deixar de ser usuari, i cinc anys més de bloqueig si exerceixes la supressió. A canvi, és dels pocs diaris que té una pàgina de baixa dins de l’àrea privada.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://elpais.com/',
        privacyPolicy: 'https://elpais.com/info/politica-privacidad/',
        appStore: 'https://apps.apple.com/es/app/id301049096',
      },
      accountRequired: f('partial', 'official', ['el-pais-privacy-policy'], 'Es pot llegir sense registre; la subscripció i els serveis personalitzats tenen condicions pròpies.'),
      openSource: f('no', 'official', ['el-pais-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El que llegeixes en un diari generalista revela posició política, salut, economia i creences, i aquí queda cosit a un codi d’usuari que es manté cinc anys després que deixis de llegir-lo.',
      dataCollection: [
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['el-pais-app-store'] }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['el-pais-app-store'], note: 'L’etiqueta el declara per a publicitat i màrqueting del desenvolupador.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['el-pais-app-store', 'el-pais-privacy-policy'], note: 'La política diu que s’assigna un codi d’usuari per dispositiu o navegador encara que no t’hi registris.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['el-pais-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['personalitzacio-de-continguts', 'elaboracio-de-perfils'], sources: ['el-pais-privacy-policy'], note: 'La política diu que el perfil també es dedueix de la localització geogràfica del terminal.' }),
        row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['el-pais-app-store'], note: 'L’etiqueta declara correus i missatges de text com a contingut de l’usuari per al funcionament de l’app.' }),
        row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['el-pais-privacy-policy'], note: 'Inclou la navegació per altres webs de PRISA Media.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['el-pais-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['el-pais-app-store', 'el-pais-privacy-policy'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['el-pais-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['el-pais-app-store'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['el-pais-privacy-policy'], note: 'La política esmenta també balises d’imatge transparents en webs i aplicacions.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['el-pais-privacy-policy'] }),
        row('xarxa-i-connectivitat', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['el-pais-privacy-policy'] }),
        row('llengua', 'yes', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['el-pais-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['el-pais-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['el-pais-app-store', 'el-pais-privacy-policy'], 'Identificadors i dades d’ús declarats per rastrejar, i perfil inferit amb la navegació per altres webs del grup.'),
        advertisingIdentifiers: f('yes', 'official', ['el-pais-app-store'], 'Identificador de dispositiu i dades publicitàries per a publicitat de tercers.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['el-pais-privacy-policy'], 'Proveïdors externs de mesura amb galetes i balises.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['el-pais-privacy-policy'], 'Informació editorial o comercial dissenyada per al perfil inferit, en serveis propis i de tercers.'),
        profiling: f('yes', 'official', ['el-pais-privacy-policy'], 'La política parla de definir tipologies, segmentacions i perfils d’usuari.'),
        aiTraining: f('partial', 'official', ['el-pais-privacy-policy'], 'La política diu que les notícies queden a disposició de cercadors, agregadors i sistemes d’aprenentatge automàtic de tercers; no declara entrenament propi.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['el-pais-privacy-policy'], 'No cedeix sense base jurídica, però fa servir proveïdors externs de mesura amb galetes.'),
        intraGroupSharing: f('yes', 'official', ['el-pais-privacy-policy'], 'PRISA Media és corresponsable i el perfil es construeix amb la navegació per altres webs del grup.'),
        dataBrokerSales: unknown('La política no ho aborda.'),
        internationalTransfers: unknown('La política no té cap apartat de transferències internacionals.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['el-pais-privacy-policy'], 'Cinc anys des que es deixa de ser usuari; les dades de persones «noticiables» es tracten de manera indefinida.'),
        dataAfterDeletion: f('partial', 'official', ['el-pais-privacy-policy'], 'Després de la supressió les dades queden bloquejades i a disposició de les autoritats durant 5 anys.'),
        periods: [
          { dataType: 'identificador-de-compte', period: '5 anys després de deixar de ser usuari', sources: ['el-pais-privacy-policy'] },
          { dataType: 'publicacions-i-comentaris', period: 'Indefinit per a les persones amb rellevància pública citades a les notícies', sources: ['el-pais-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['el-pais-privacy-policy', 'el-pais-baja']),
        selfService: f('yes', 'official', ['el-pais-baja'], 'L’àrea privada té una pàgina de baixa del perfil, al menú «Derechos y baja».'),
        difficulty: 'medium',
        directUrl: 'https://plus.elpais.com/perfil/baja/',
        steps: [
          'Si tens subscripció, cancel·la-la primer des de «Mi suscripción» (o des de l’App Store si la vas contractar allà).',
          'Entra a l’àrea d’usuari d’elpais.com i obre «Derechos y baja».',
          'Confirma la baixa del perfil a plus.elpais.com/perfil/baja.',
          'Si necessites una supressió més àmplia, escriu al delegat de protecció de dades del grup a dpo@prisa.com.',
        ],
        dataRetained: 'Dades bloquejades durant 5 anys a disposició de les autoritats competents.',
        sources: ['el-pais-privacy-policy', 'el-pais-baja'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['el-pais-privacy-policy'], 'La portabilitat es reconeix, però la via que documenta la política és el correu postal.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['el-pais-privacy-policy'], 'Correu postal al domicili de les responsables; el delegat de protecció de dades del grup atén consultes i reclamacions.', { url: 'mailto:dpo@prisa.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['el-pais-privacy-policy'], 'La política remet a la política de galetes; el consentiment específic es demana abans de les finalitats que el requereixen.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['el-pais-baja'], 'L’àrea d’usuari permet gestionar activitat, butlletins, dades i baixa.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de lectura de notícies.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses del grup.'),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      alternatives: [
        { app: 'el-mundo', comparability: 'equivalent', rationale: 'Diari generalista espanyol amb un model comparable de registre únic de grup.' },
        { app: 'new-york-times', comparability: 'partial', rationale: 'Diari de referència internacional amb una política més detallada, però amb publicitat basada en el correu i el telèfon.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política publicada exclou expressament els serveis que exigeixen registre, que remeten a condicions pròpies que no hem pogut localitzar. El termini de cinc anys i el tractament indefinit de les persones «noticiables» són les dues dades més rellevants.',
        openQuestions: [
          'On és la política específica dels serveis d’EL PAÍS amb registre i subscripció?',
          'Quines transferències internacionals impliquen les galetes publicitàries, que la política no esmenta?',
          'Hi ha sancions o filtracions documentades? No hem pogut fer la cerca d’incidents.',
        ],
      },
    },

    /* ═══════════════════════════ Objektiv ═══════════════════════════ */
    {
      slug: 'objektiv',
      name: 'Objektiv',
      company: 'objektiv-doo',
      categories: ['noticies-i-mitjans'],
      tagline: 'Portal serbi amb una política de privadesa genèrica que no esmenta el RGPD ni el dret de supressió',
      summary:
        'Objektiv és un portal informatiu de Belgrad que ha arribat al top de «Notícies» de l’App Store espanyol. L’etiqueta declara les dades d’ús com a dades de rastreig i no vincula res a la identitat, cosa coherent amb una app sense compte. La política de privadesa del portal, però, és un text breu i genèric: no esmenta el RGPD, ni terminis de conservació, ni el dret de supressió, ni identifica cap responsable del tractament amb NIF ni adreça.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'advertising',
      jurisdiction: 'Sèrbia',
      links: {
        website: 'https://objektiv.rs/',
        privacyPolicy: 'https://objektiv.rs/politika-privatnosti/',
        appStore: 'https://apps.apple.com/es/app/objektiv/id1498466663',
      },
      accountRequired: f('no', 'official', ['objektiv-app-store'], 'L’etiqueta no declara cap dada de contacte ni identificador d’usuari: l’aplicació es fa servir sense compte.'),
      openSource: f('no', 'official', ['objektiv-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Sense compte, el que queda és l’activitat de lectura i l’identificador publicitari, prou per situar-te en un segment d’anunciants tot i que el portal digui que no t’identifica.',
      dataCollection: [
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['objektiv-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['objektiv-app-store'], note: 'L’etiqueta declara «datos publicitarios» no vinculats a la identitat per a publicitat de tercers.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['objektiv-privacy-policy'], note: 'La política només diu que es poden esborrar o bloquejar des del navegador.' }),
        row('adreca-electronica', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['objektiv-privacy-policy'], note: 'Només si escrius al portal o omples un formulari al web.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['objektiv-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['objektiv-app-store'], 'L’etiqueta declara les dades d’ús com a dades que poden servir per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['objektiv-app-store'], 'Dades publicitàries per a publicitat de tercers.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['objektiv-app-store'], 'L’etiqueta declara publicitat de tercers i analítica, però la política no en dona cap nom.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['objektiv-app-store'], 'L’etiqueta declara dades publicitàries per a publicitat de tercers.'),
        profiling: unknown('La política diu que no fa servir els registres per identificar persones, però no descriu cap perfilat publicitari.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['objektiv-privacy-policy'], 'La política diu que hi poden accedir col·laboradors, autoritats i encarregats, i que es poden transmetre dades d’ús no identificables a tercers.'),
        intraGroupSharing: unknown('La política no descriu cap grup empresarial.'),
        dataBrokerSales: unknown('La política no ho aborda.'),
        internationalTransfers: unknown('La política no té cap apartat de transferències; l’editora és sèrbia, fora de l’Espai Econòmic Europeu.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['objektiv-privacy-policy'], 'La política no fixa cap termini.'),
        dataAfterDeletion: unknown('La política no aborda la supressió.'),
      },
      accountDeletion: {
        possible: na('L’aplicació no crea cap compte.'),
        selfService: na('L’aplicació no crea cap compte.'),
        difficulty: 'unknown',
        steps: [
          'Desinstal·la l’aplicació i restableix l’identificador de publicitat del sistema.',
          'Si alguna vegada has escrit al portal, demana la supressió per correu al contacte que publica la política.',
        ],
        sources: ['objektiv-privacy-policy', 'objektiv-app-store'],
      },
      userRights: {
        dataExport: unknown('La política no esmenta el dret d’accés ni de portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('no', 'official', ['objektiv-privacy-policy', 'objektiv-impressum'], 'La política no reconeix els drets del RGPD ni designa cap responsable ni delegat; només dona una adreça de correu genèrica, i l’impressum es limita a identificar l’editora i la direcció editorial.'),
      },
      controls: {
        adPersonalizationOptOut: unknown('La política només parla d’esborrar les galetes des del navegador.'),
        telemetryOptOut: unknown(),
        granularControls: f('no', 'official', ['objektiv-privacy-policy'], 'No hi ha cap panell de preferències descrit.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de lectura de notícies.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: na('L’aplicació no té comptes.'),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'L’App Store dona com a política de privadesa la pàgina de condicions d’ús; la política real és a objektiv.rs/politika-privatnosti. El venedor declarat (Elektronski portal Objektiv d.o.o.) i l’editora que consta a l’impressum (OWP INFO d.o.o.) no coincideixen.',
        openQuestions: [
          'Quina de les dues societats sèrbies és la responsable del tractament?',
          'Quines xarxes publicitàries integra l’aplicació?',
          'Hi ha una política adaptada al RGPD per a les persones usuàries de la Unió Europea?',
        ],
      },
    },

    /* ═══════════════════════════ eAgora ═══════════════════════════ */
    {
      slug: 'eagora',
      name: 'eAgora',
      company: 'eagora',
      categories: ['administracio-publica', 'noticies-i-mitjans', 'comunitats-i-forums'],
      tagline: 'L’app de bans municipals que declara totes les dades com a no vinculades a la identitat, la ubicació exacta inclosa',
      summary:
        'eAgora connecta la ciutadania amb el seu ajuntament, les associacions i els centres educatius: avisos, notícies i agenda de més de cinc-centes «àgores». L’etiqueta de l’App Store no declara cap dada de rastreig ni cap dada vinculada a la identitat, tot i recollir la ubicació exacta, el correu i fotografies. La política de privadesa és curta i orientada al web corporatiu, però concreta una cosa poc habitual: les dades es xifren i es guarden en servidors de la Unió Europea, sobretot a Irlanda.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.eagora.app/',
        privacyPolicy: 'https://www.eagora.app/es/politica-de-privacidad/',
        appStore: 'https://apps.apple.com/es/app/id717604307',
      },
      accountRequired: f('partial', 'official', ['eagora-privacy-policy'], 'Es pot consultar la informació del municipi; per registrar-se a una àgora i rebre avisos cal donar nom i correu.'),
      openSource: f('no', 'official', ['eagora-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Saber a quina àgora estàs subscrit és saber a quin poble vius, a quina escola van els teus fills i a quines associacions pertanys, encara que l’etiqueta digui que res no es vincula amb tu.',
      dataCollection: [
        row('nom-i-cognoms', 'optional', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['eagora-privacy-policy'], note: 'La política diu que als formularis de registre cal donar nom i correu.' }),
        row('adreca-electronica', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['eagora-app-store', 'eagora-privacy-policy'], note: 'L’etiqueta el declara com a dada no vinculada a la identitat, per al funcionament de l’app.' }),
        row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['eagora-app-store'], note: 'Declarada com a dada no vinculada a la identitat; probablement per proposar l’àgora del municipi.' }),
        row('fotografies-i-videos', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['eagora-app-store'], note: 'Les incidències que es comuniquen a l’ajuntament poden portar fotografia.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['eagora-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['eagora-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['eagora-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['eagora-app-store'], 'L’etiqueta no declara dades publicitàries.'),
        thirdPartyTrackersPresent: unknown('No hem pogut analitzar el trànsit de l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['eagora-app-store', 'eagora-privacy-policy'], 'Ni l’etiqueta ni la política descriuen publicitat segmentada; el servei el paguen els ajuntaments.'),
        profiling: f('no', 'official', ['eagora-privacy-policy'], 'La política no descriu cap elaboració de perfils.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['eagora-privacy-policy'], 'La política diu que no cedeix dades sense consentiment, tot i que els proveïdors hi accedeixen com a encarregats.'),
        intraGroupSharing: na('L’empresa no forma part de cap grup declarat.'),
        dataBrokerSales: f('no', 'official', ['eagora-privacy-policy'], 'La política no preveu cap cessió comercial.'),
        internationalTransfers: f('no', 'official', ['eagora-privacy-policy'], 'La política diu que les dades es guarden en servidors de la Unió Europea, principalment a Irlanda, amb còpies a Europa.', { mechanism: 'none' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('Les empreses proveïdores d’administracions locals no acostumen a publicar-ne.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['eagora-privacy-policy'], 'La política no fixa cap termini.'),
        dataAfterDeletion: unknown('La política no ho concreta.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['eagora-privacy-policy'], 'La política reconeix el dret de supressió.'),
        selfService: unknown('La política només documenta la sol·licitud per correu; no hem pogut verificar cap opció dins de l’aplicació.'),
        difficulty: 'medium',
        steps: [
          'Escriu a privacidad@eagora.app des de l’adreça del compte demanant la supressió.',
          'La política demana adjuntar còpia d’un document identificatiu per acreditar la identitat.',
        ],
        obstacles: 'Demanar el document d’identitat per exercir un dret és una pràctica que l’AEPD només admet quan hi ha dubtes raonables sobre qui fa la sol·licitud.',
        sources: ['eagora-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['eagora-privacy-policy'], 'La portabilitat es reconeix, però cal demanar-la per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['eagora-privacy-policy'], 'Per correu a privacidad@eagora.app, amb telèfon de contacte publicat.', { url: 'mailto:privacidad@eagora.app' }),
      },
      controls: {
        adPersonalizationOptOut: na('El servei no mostra publicitat.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['eagora-app-store'], 'A l’aplicació es tria a quines àgores i categories et subscrius.'),
        defaultPosture: 'protective',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És un canal de comunicació pública dels ajuntaments.'),
        transportEncryption: unknown(),
        atRestEncryption: f('yes', 'official', ['eagora-privacy-policy'], 'La política diu que la informació es xifra i es guarda en servidors de la Unió Europea.'),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      alternatives: [
        { app: 'bandomovil', comparability: 'equivalent', rationale: 'Mateixa funció de ban municipal electrònic, amb una etiqueta de privadesa que sí que vincula les dades a la identitat.' },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política publicada és la del web corporatiu i parla sobretot de formularis i butlletins, no del funcionament de l’aplicació. Declarar la ubicació exacta com a dada «no vinculada» és coherent amb un ús puntual, però mereixeria una explicació dins de l’app.',
        openQuestions: [
          'Quin paper juga l’ajuntament: és responsable o encarregat del tractament?',
          'Per a què s’utilitza la ubicació exacta i amb quina freqüència es demana?',
          'Hi ha una política específica per a l’aplicació mòbil?',
        ],
      },
    },

    /* ═══════════════════════════ Bandomóvil ═══════════════════════════ */
    {
      slug: 'bandomovil',
      name: 'Bandomóvil',
      company: 'lemur-ideas',
      categories: ['administracio-publica', 'noticies-i-mitjans'],
      tagline: 'El ban municipal al mòbil: nom, telèfon i ubicació exacta vinculats a la identitat, sense rastreig',
      summary:
        'Bandomóvil substitueix el ban del poble: ordenances, avisos i actes dels ajuntaments petits que el contracten. L’etiqueta de l’App Store no declara cap dada de rastreig, però sí que vincula a la identitat el nom, el correu, el telèfon, l’identificador del dispositiu i la ubicació exacta, tot per al funcionament de l’aplicació. La política de privadesa és breu i no diu quines dades recull exactament ni durant quant temps.',
      platforms: ['ios', 'android'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.bandomovil.com/',
        privacyPolicy: 'https://www.bandomovil.com/susdatosseguros.html',
        appStore: 'https://apps.apple.com/es/app/id1049832681',
      },
      accountRequired: f('partial', 'official', ['bandomovil-app-store'], 'Cal donar dades de contacte per subscriure’s als municipis i rebre’n els avisos.'),
      openSource: f('no', 'official', ['bandomovil-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La llista de municipis als quals et subscrius, amb el telèfon i la ubicació exacta al costat, diu on vius, on tens la segona residència i on van els teus pares.',
      dataCollection: [
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['bandomovil-app-store'] }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['bandomovil-app-store'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['bandomovil-app-store'], note: 'L’aplicació inclou una guia telefònica municipal i un mòdul de comunicacions ciutadanes.' }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['bandomovil-app-store'], note: 'Declarada vinculada a la identitat i associada al funcionament de l’app.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['bandomovil-app-store'], note: 'Necessari per enviar les notificacions push dels bans.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['bandomovil-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['bandomovil-app-store'], 'L’etiqueta no declara dades publicitàries.'),
        thirdPartyTrackersPresent: unknown('No hem pogut analitzar el trànsit de l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['bandomovil-app-store'], 'L’etiqueta no declara cap finalitat publicitària de tercers.'),
        profiling: unknown('La política no descriu cap perfilat, però tampoc no ho descarta expressament.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['bandomovil-privacy-policy'], 'Personal autoritzat, entitats necessàries per prestar el servei com els bancs, i autoritats per obligació legal.'),
        intraGroupSharing: na('L’empresa no forma part de cap grup declarat.'),
        dataBrokerSales: f('no', 'official', ['bandomovil-privacy-policy'], 'La política diu que només es comuniquen dades a altres tercers amb consentiment previ.'),
        internationalTransfers: f('partial', 'official', ['bandomovil-privacy-policy'], 'La política diu que no envia informació a cap país que no consideri segur, llevat d’autorització prèvia, però no detalla cap mecanisme.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('Les empreses proveïdores d’administracions locals no acostumen a publicar-ne.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['bandomovil-privacy-policy'], 'Només el criteri de la durada de la relació i els terminis legals obligatoris.'),
        dataAfterDeletion: f('partial', 'official', ['bandomovil-privacy-policy'], 'La política diu que un cop passats els terminis legals les dades s’eliminen de manera segura.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['bandomovil-privacy-policy'], 'La política reconeix el dret de supressió.'),
        selfService: unknown('No hem pogut verificar cap opció d’eliminació dins de l’aplicació.'),
        difficulty: 'medium',
        steps: [
          'Dona’t de baixa dels municipis als quals estiguis subscrit des de la mateixa aplicació.',
          'Escriu a info@bandomovil.com demanant la supressió de les dades personals.',
        ],
        obstacles: 'La política no publica cap formulari ni termini de resposta.',
        sources: ['bandomovil-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['bandomovil-privacy-policy'], 'La portabilitat es reconeix, però cal demanar-la per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['bandomovil-privacy-policy'], 'Per correu a info@bandomovil.com, amb reclamació davant l’AEPD.', { url: 'mailto:info@bandomovil.com' }),
      },
      controls: {
        adPersonalizationOptOut: na('El servei no mostra publicitat.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['bandomovil-app-store'], 'Es poden triar els municipis subscrits i filtrar les categories d’avisos.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És un canal de comunicació pública dels ajuntaments.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: f('partial', 'official', ['bandomovil-privacy-policy'], 'La política diu que l’empresa fa auditories anuals de la seva política de protecció de dades; no consta cap auditoria de seguretat externa.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt.'),
      },
      alternatives: [
        { app: 'eagora', comparability: 'equivalent', rationale: 'Mateixa funció de comunicació municipal, amb una etiqueta que no vincula cap dada a la identitat.' },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política és un text genèric que no enumera les dades recollides, en contrast amb una etiqueta de l’App Store que sí que ho fa i que hi vincula la ubicació exacta. Els ajuntaments que contracten el servei no hi apareixen com a responsables ni com a encarregats.',
        openQuestions: [
          'Per a què s’utilitza la ubicació exacta vinculada a la identitat?',
          'Quin és el repartiment de responsabilitats entre Lemur Ideas i els ajuntaments?',
          'L’aplicació permet eliminar el compte sense escriure un correu?',
        ],
      },
    },
  ],

  incidents: [],

  storeIds: {
    substack: 'com.substack.Substack',
    ivoox: 'com.ivoox.ivoox',
    'radio-cope': 'com.cope.Cope',
    'cadena-ser-radio': 'com.ericsson.cadenaser',
    nextdoor: 'com.nextdoor.nextdoor',
    'onda-cero': 'com.antena3.ondacero',
    'el-pais': 'com.prisacom.ElPais',
    objektiv: 'rs.objektiv.app',
    eagora: 'es.ebando.app',
    bandomovil: 'com.bandomovil.bandomovil',
  },
}
