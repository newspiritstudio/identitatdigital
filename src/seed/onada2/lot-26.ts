import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

/**
 * Lot 26 de la segona onada: música, ràdio i so.
 *
 * Deu fitxes de la categoria Música de l'App Store espanyol que van del
 * catàleg de creadors de SoundCloud a una utilitat que expulsa aigua de
 * l'altaveu. El fil que les uneix és el desnivell entre el que declara
 * l'etiqueta de privadesa i el que revela la política: myTuner Radio publica
 * una pàgina on reconeix que enviava la ubicació precisa a un corredor de
 * dades sancionat després per l'FTC; GuitarTuna, un afinador, declara la
 * ubicació com a dada de rastreig; i JBL Headphones, en canvi, no declara cap
 * dada vinculada a la identitat. Les tres aplicacions de desenvolupador
 * individual (Demus, Meulify i Clear Wave) publiquen polítiques de plantilla
 * que no esmenten ni el RGPD ni la Unió Europea.
 */
const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

export const lot: SeedLot = {
  companies: [
    {
      slug: 'soundcloud-global',
      name: 'SoundCloud',
      legalName: 'SoundCloud Global Limited & Co. KG',
      description:
        'Societat comanditària alemanya amb domicili a la Karl-Marx-Strasse 101 de Berlín, inscrita al registre d’Amtsgericht Charlottenburg amb el número HRA 55946 B. És l’entitat operativa de SoundCloud i la responsable del tractament per a tothom fora dels Estats Units; hi actua en corresponsabilitat, a l’empara de l’article 26 del RGPD, amb SoundCloud, Inc. de Nova York i amb Repost Network Inc., que opera com a SoundCloud Direct.',
      headquartersCountry: 'DE',
      euEstablishment: 'DE',
      ownership: 'private',
      foundedYear: 2007,
      primaryRevenueModel: 'mixed',
      website: 'https://soundcloud.com/',
      productDomains: ['soundcloud.com', 'm.soundcloud.com', 'help.soundcloud.com'],
      privacyContact: 'dataprotection@soundcloud.com',
    },
    {
      slug: 'fever-labs',
      name: 'Fever',
      legalName: 'Fever Labs, Inc.',
      description:
        'Empresa nord-americana de descobriment i venda d’experiències d’oci en directe, amb el gruix de l’operació a Madrid a través de Kzemos Technologies, S.L.U. Des del juny del 2025 consta al registre mercantil britànic com a titular de més del 75 % de les accions de DICE FM Holdings, en substitució del fons de SoftBank.',
      headquartersCountry: 'US',
      euEstablishment: 'ES',
      ownership: 'private',
      primaryRevenueModel: 'commerce',
      website: 'https://feverup.com/',
      productDomains: ['feverup.com'],
    },
    {
      slug: 'dice-fm-holdings',
      name: 'DICE',
      legalName: 'DICE FM Holdings Ltd',
      parent: 'fever-labs',
      description:
        'Societat britànica amb domicili al 100 de De Beauvoir Road de Londres, inscrita amb el número 08905651 i constituïda el febrer del 2014 com a DICE Trading Limited. Encapçala el Grup DICE, un agent de venda d’entrades per a concerts i esdeveniments en directe que opera a través de filials nacionals, entre elles DICE FM SPAIN, S.L.U. Des del 2025 forma part del grup Fever.',
      headquartersCountry: 'GB',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      foundedYear: 2014,
      primaryRevenueModel: 'commerce',
      website: 'https://dice.fm/',
      productDomains: ['dice.fm'],
      privacyContact: 'help@dice.fm',
    },
    {
      slug: 'appgeneration-software',
      name: 'Appgeneration Software',
      legalName: 'AppGeneration - Software Technologies, Lda',
      description:
        'Empresa portuguesa amb seu a l’avinguda da Boavista de Porto, especialitzada en aplicacions de ràdio per internet. El seu producte principal és myTuner Radio, que agrega milers d’emissores de tot el món i es finança amb publicitat i subscripcions.',
      headquartersCountry: 'PT',
      euEstablishment: 'PT',
      leadSupervisoryAuthority: 'cnpd-pt',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://mytuner-radio.com/',
      productDomains: ['mytuner-radio.com', 'mytuner.mobi'],
      privacyContact: 'help@mytuner.mobi',
    },
    {
      slug: 'yousician',
      name: 'Yousician',
      legalName: 'Yousician Ltd',
      description:
        'Empresa finlandesa de Hèlsinki dedicada a l’aprenentatge musical assistit per ordinador. A més de l’aplicació Yousician explota GuitarTuna, l’afinador de guitarra que va néixer a la companyia Ovelin —d’aquí el paquet «com.ovelin.guitartuna»— i que avui és un dels seus productes de captació.',
      headquartersCountry: 'FI',
      euEstablishment: 'FI',
      leadSupervisoryAuthority: 'tietosuoja-fi',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://yousician.com/',
      productDomains: ['yousician.com', 'guitartuna.com'],
      privacyContact: 'privacy@yousician.com',
    },
    {
      slug: 'audiomack',
      name: 'Audiomack',
      legalName: 'Audiomack, Inc.',
      description:
        'Plataforma nord-americana de distribució musical orientada a artistes emergents, sobretot de hip-hop i d’afrobeats. Permet pujar i escoltar música sense cost i es finança amb publicitat i subscripcions. La política de privadesa no designa cap representant a la Unió Europea.',
      headquartersCountry: 'US',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://audiomack.com/',
      productDomains: ['audiomack.com'],
      privacyContact: 'privacy@audiomack.com',
    },
    {
      slug: 'bandlab-singapore',
      name: 'BandLab',
      legalName: 'BandLab Singapore Pte Ltd',
      description:
        'Societat de Singapur, amb domicili al 56 de Neil Road, que explota BandLab: un estudi de gravació al núvol combinat amb una xarxa social de músics. Forma part del grup BandLab Technologies, que publica les seves polítiques al domini corporatiu i que també és propietari del programari d’escriptori Cakewalk.',
      headquartersCountry: 'SG',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.bandlab.com/',
      productDomains: ['bandlab.com', 'bandlabtechnologies.com'],
      privacyContact: 'privacy@bandlab.com',
    },
    {
      slug: 'harman-international',
      name: 'Harman International',
      legalName: 'Harman International Industries, Incorporated',
      parent: 'samsung-electronics',
      description:
        'Fabricant nord-americà d’equips d’àudio i d’electrònica per a l’automoció, propietari de les marques JBL, Harman Kardon, AKG, Infinity i Mark Levinson. Des del 2017 és una filial participada al cent per cent per Samsung Electronics, fet que la mateixa pàgina de privadesa reconeix.',
      headquartersCountry: 'US',
      ownership: 'subsidiary',
      primaryRevenueModel: 'hardware',
      website: 'https://www.harman.com/',
      productDomains: ['harman.com', 'jbl.com'],
      privacyContact: 'privacy@harman.com',
    },
    {
      slug: 'appchi',
      name: 'Appchi',
      legalName: 'Appchi LLC',
      description:
        'Editor d’aplicacions d’utilitat per a iOS que publica sota la marca Appchi Media Labs. La seva política de privadesa no indica ni el domicili social ni el país, i no esmenta el RGPD ni la Unió Europea.',
      ownership: 'unknown',
      primaryRevenueModel: 'subscription',
      website: 'https://appchi.org/',
      productDomains: ['appchi.org'],
      privacyContact: 'support@appchi.org',
    },
    {
      slug: 'simon-zvara',
      name: 'Simon Zvara',
      description:
        'Desenvolupador individual que publica a l’App Store el reproductor Demus. No hem trobat cap entitat jurídica associada ni cap domicili social; el web del producte és demusapp.com.',
      ownership: 'unknown',
      primaryRevenueModel: 'subscription',
      website: 'https://demusapp.com/',
      productDomains: ['demusapp.com'],
    },
    {
      slug: 'meulen-cirillo-veltri',
      name: 'Meulen Cirillo Veltri',
      description:
        'Desenvolupador individual que publica a l’App Store el reproductor Meulify. No hem trobat cap entitat jurídica associada; la política del producte s’allotja a meulify.top i cita Supabase, YouTube, ironSource i Unity Ads com a proveïdors.',
      ownership: 'unknown',
      primaryRevenueModel: 'advertising',
      website: 'https://meulify.top/',
      productDomains: ['meulify.top'],
    },
  ],
  sources: [
    s('soundcloud-privacy-policy', 'Política de privacidad de SoundCloud', 'https://soundcloud.com/pages/privacy', 'SoundCloud Global Limited & Co. KG', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-05-22',
      summary:
        'Política única global amb seccions específiques per a la Unió Europea. Identifica els corresponsables del tractament, cita els articles del RGPD que empara cada tractament, fixa una conservació de tres anys després de la cancel·lació i descriu els controls de publicitat i d’analítica.',
    }),
    s('soundcloud-terms', 'SoundCloud Terms of Use', 'https://soundcloud.com/terms-of-use', 'SoundCloud Global Limited & Co. KG', 'terms', 'primary', {
      language: 'en',
      summary:
        'Condicions d’ús. Contenen el compromís de no fer servir el contingut per entrenar models generatius que repliquin la veu, la música o la imatge d’una persona sense un consentiment afirmatiu previ.',
    }),
    s('soundcloud-app-store', 'SoundCloud a l’App Store: privadesa de l’app', 'https://apps.apple.com/es/app/id336353151', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: ubicació aproximada, identificador d’usuari, identificador de dispositiu i dades de publicitat consten com a dades utilitzades per rastrejar.',
    }),
    s('soundcloud-delete-account', 'How can I delete my account?', 'https://help.soundcloud.com/hc/en-us/articles/115003563188-How-can-I-delete-my-account', 'SoundCloud', 'support-doc', 'primary', {
      language: 'en',
      summary: 'Article d’ajuda amb els passos d’eliminació autoservei des del web i des de les aplicacions mòbils.',
    }),
    s('soundcloud-two-factor', 'Two-Factor Authentication', 'https://help.soundcloud.com/hc/en-us/articles/20707203094043-Two-Factor-Authentication', 'SoundCloud', 'support-doc', 'primary', {
      language: 'en',
      summary:
        'Descriu la verificació en dos passos amb aplicació TOTP, codis de recuperació i codis d’un sol ús per correu, i indica expressament que no s’ofereix per SMS.',
    }),
    s('soundcloud-ad-settings', 'Manage Advertising Settings', 'https://help.soundcloud.com/hc/en-us/articles/360004223094-Manage-Advertising-Settings', 'SoundCloud', 'support-doc', 'primary', {
      language: 'en',
      summary: 'Explica com desactivar la publicitat personalitzada i gestionar el consentiment dels socis publicitaris.',
    }),
    s('soundcloud-data-export', 'Understanding Your Listening History Request in Your Subject Access Request', 'https://help.soundcloud.com/hc/en-us/articles/54853915859611-Understanding-Your-Listening-History-Request-in-Your-Subject-Access-Request', 'SoundCloud', 'support-doc', 'primary', {
      language: 'en',
      summary: 'Detalla que l’informe de dades personals limita l’historial d’escolta als mil elements més recents i n’enumera les exclusions.',
    }),
    s('soundcloud-transparency-reports', 'SoundCloud Transparency Reports', 'https://soundcloud.com/transparency-reports', 'SoundCloud', 'transparency-report', 'primary', {
      language: 'en',
      summary: 'Recull els informes del Reglament de Serveis Digitals i del Reglament sobre continguts terroristes en línia.',
    }),
    s('soundcloud-security-txt', 'SoundCloud responsible disclosure policy i security.txt', 'https://soundcloud.com/.well-known/security.txt', 'SoundCloud', 'technical-doc', 'primary', {
      language: 'en',
      summary: 'Fitxer security.txt vigent fins al març del 2027, amb adreça de contacte i enllaç a la política de divulgació responsable.',
    }),
    s('soundcloud-breach-statement', 'Protecting our users and our service', 'https://soundcloud.com/playbook-articles/protecting-our-users-and-our-service', 'SoundCloud', 'support-doc', 'primary', {
      language: 'en',
      publishedAt: '2025-12-15',
      summary:
        'Comunicat oficial sobre l’incident de desembre del 2025, amb tres actualitzacions fins al febrer del 2026: accés no autoritzat a un tauler auxiliar, atacs de denegació de servei i intent d’extorsió.',
    }),
    s('soundcloud-hibp', 'SoundCloud a Have I Been Pwned', 'https://haveibeenpwned.com/Breach/SoundCloud', 'Have I Been Pwned', 'other', 'independent', {
      language: 'en',
      publishedAt: '2026-01-27',
      summary: 'Fitxa de la filtració: 29.815.722 comptes amb correu, nom, nom d’usuari, avatar i estadístiques de perfil.',
    }),
    s('dice-privacy-policy-spain', 'Spain Privacy Policy for DICE Users', 'https://dicefm.zendesk.com/hc/en-gb/articles/4417457241873-Spain-Privacy-Policy-for-DICE-Users', 'DICE', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-02-11',
      summary:
        'Política específica per a Espanya, redactada en castellà i referida al RGPD i a la LOPDGDD. Detalla les entitats del grup, el delegat de protecció de dades extern, la ubicació de les dades a Irlanda, els terminis de conservació i la compartició amb els socis dels esdeveniments.',
    }),
    s('dice-app-store', 'DICE a l’App Store: privadesa de l’app', 'https://apps.apple.com/es/app/id898358948', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: no declara cap dada utilitzada per rastrejar, però sí ubicació exacta, informació de pagament, adreça física i telèfon vinculats a la identitat.',
    }),
    s('dice-delete-account', 'How to delete your DICE account', 'https://dicefm.zendesk.com/hc/en-gb/articles/4409596582417-How-to-delete-your-DICE-account', 'DICE', 'support-doc', 'primary', {
      language: 'en',
      publishedAt: '2026-02-06',
      summary:
        'Passos d’eliminació des de l’aplicació, requisit de no tenir entrades per a esdeveniments futurs, desactivació prèvia i esborrat definitiu als quinze dies.',
    }),
    s('dice-security-txt', 'DICE security.txt', 'https://dice.fm/.well-known/security.txt', 'DICE', 'technical-doc', 'primary', {
      language: 'en',
      summary: 'Fitxer security.txt que declara un programa de recompenses a HackerOne i dona l’adreça security@dice.fm.',
    }),
    s('dice-fever-group-entities', 'Fever Group entities', 'https://support.dice.fm/article/1262-fever-group-entities', 'DICE', 'support-doc', 'primary', {
      language: 'en',
      publishedAt: '2025-06-30',
      summary: 'Llista de les societats del grup Fever, matriu de DICE, amb Kzemos Technologies, S.L.U. de Madrid com a entitat espanyola.',
    }),
    s('mytuner-privacy-policy', 'myTuner Radio Privacy Policy', 'https://mytuner-radio.com/privacy-policy/', 'AppGeneration - Software Technologies, Lda', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Política vigent de myTuner Radio. Identifica AppGeneration com a responsable, enumera els socis d’analítica i de publicitat, fixa una conservació de cinc anys i remet a la CNPD portuguesa per a les reclamacions.',
    }),
    s('mytuner-third-party-recipients', 'Third Party Data Recipients', 'https://mytuner-radio.com/third-party-data-recipients/', 'AppGeneration - Software Technologies, Lda', 'support-doc', 'primary', {
      language: 'en',
      summary:
        'Pàgina on myTuner detalla que comparteix ubicació precisa, senyals de wifi i Bluetooth i identificadors publicitaris amb X-Mode Social, també quan l’aplicació funciona en segon pla.',
    }),
    s('mytuner-app-store', 'myTuner Radio FM a l’App Store: privadesa de l’app', 'https://apps.apple.com/es/app/id520502858', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: declara ubicació i identificadors com a dades utilitzades per rastrejar.',
    }),
    s('mytuner-ftc-xmode-order', 'FTC Order Prohibits Data Broker X-Mode Social and Outlogic from Selling Sensitive Location Data', 'https://www.ftc.gov/news-events/news/press-releases/2024/01/ftc-order-prohibits-data-broker-x-mode-social-outlogic-selling-sensitive-location-data', 'Federal Trade Commission', 'regulator', 'authority', {
      language: 'en',
      publishedAt: '2024-01-09',
      summary:
        'Ordre de l’FTC del 9 de gener del 2024 que prohibeix a X-Mode Social i Outlogic vendre o compartir dades sensibles d’ubicació obtingudes a través del seu SDK incrustat en aplicacions de tercers.',
    }),
    s('yousician-privacy-notice', 'Yousician Privacy Notice', 'https://yousician.com/privacy-notice', 'Yousician Ltd', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Avís de privadesa comú a Yousician i GuitarTuna. Identifica Yousician Ltd de Hèlsinki com a responsable, admet publicitat personalitzada i transferències als Estats Units amb clàusules contractuals tipus, i fixa 30 dies de conservació després de la supressió.',
    }),
    s('guitartuna-app-store', 'GuitarTuna a l’App Store: privadesa de l’app', 'https://apps.apple.com/es/app/id527588389', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: ubicació, identificadors, dades d’ús i diagnòstics figuren com a dades utilitzades per rastrejar; la ubicació aproximada consta vinculada a la identitat per a publicitat de tercers.',
    }),
    s('audiomack-privacy-policy', 'Audiomack Privacy Policy', 'https://www.audiomack.com/about/privacy-policy', 'Audiomack, Inc.', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Política d’Audiomack. Declara que no ven dades personals, però reconeix la compartició amb LiveRamp i amb xarxes publicitàries, i descriu el botó d’eliminació del compte al tauler.',
    }),
    s('audiomack-app-store', 'Audiomack a l’App Store: privadesa de l’app', 'https://apps.apple.com/es/app/id921765888', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: compres, ubicació, dades de contacte, contingut de l’usuari, historial de cerca, identificadors, dades d’ús i diagnòstics s’utilitzen per rastrejar.',
    }),
    s('bandlab-privacy-policy', 'BandLab Privacy Policy', 'https://bandlabtechnologies.com/policies/bandlab-privacy-policy/', 'BandLab Technologies', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Política de BandLab, publicada al domini del grup. Designa un delegat de protecció de dades, descriu transferències a Singapur i als Estats Units i remet l’eliminació del compte al contacte amb aquest delegat.',
    }),
    s('bandlab-app-store', 'BandLab a l’App Store: privadesa de l’app', 'https://apps.apple.com/es/app/id968585775', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: declara identificadors com a dades de rastreig i vincula a la identitat el contingut creat per la persona usuària, incloent-hi l’àudio.',
    }),
    s('harman-privacy-policy', 'HARMAN Privacy Policy', 'https://www.harman.com/privacy-policy', 'Harman International Industries', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Pàgina de privadesa de Harman, on la companyia es presenta com a filial participada al cent per cent per Samsung i facilita el contacte privacy@harman.com.',
    }),
    s('jbl-headphones-app-store', 'JBL Headphones a l’App Store: privadesa de l’app', 'https://apps.apple.com/es/app/id1053136947', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: no declara cap dada utilitzada per rastrejar ni cap dada vinculada a la identitat; només dades d’ús, interacció amb el producte i diagnòstics sense vincular.',
    }),
    s('appchi-privacy-policy', 'Appchi Privacy Policy', 'https://appchi.org/privacy-policy', 'Appchi LLC', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Política breu de plantilla. No indica el domicili del responsable, no esmenta el RGPD ni la Unió Europea, no fixa terminis de conservació i no descriu cap dret de l’interessat.',
    }),
    s('clear-wave-app-store', 'Clear wave | Water Eject a l’App Store: privadesa de l’app', 'https://apps.apple.com/es/app/id1557211189', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: identificadors i diagnòstics s’utilitzen per rastrejar en aplicacions i webs d’altres empreses. També hi consten les subscripcions, que arriben als 69,99 euros.',
    }),
    s('demus-privacy-policy', 'Demus Privacy Policy', 'https://demusapp.com/privacy.html', 'Simon Zvara', 'privacy-policy', 'primary', {
      language: 'other',
      summary:
        'Política enllaçada des de l’App Store. És una plantilla genèrica que no identifica el responsable amb claredat, no cita cap tercer pel nom i no esmenta el RGPD ni la Unió Europea.',
    }),
    s('demus-app-store', 'Demus a l’App Store: privadesa de l’app', 'https://apps.apple.com/es/app/id6474685600', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: els diagnòstics s’utilitzen per rastrejar, i els identificadors i els diagnòstics consten vinculats a la identitat per a publicitat de tercers i analítica.',
    }),
    s('meulify-privacy-policy', 'Meulify Política de Privacidad', 'https://meulify.top/privacy.html', 'Meulen Cirillo Veltri', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política del reproductor Meulify. Cita Supabase, YouTube, ironSource i Unity Ads, descriu l’ús de l’historial d’escolta per entrenar el sistema de recomanacions i diu que el compte s’elimina des de la mateixa aplicació.',
    }),
    s('meulify-app-store', 'Meulify a l’App Store: privadesa de l’app', 'https://apps.apple.com/es/app/id6754177031', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: ubicació, identificadors, dades d’ús i «otros datos» s’utilitzen per rastrejar; el nom, l’historial de cerca i l’identificador d’usuari consten vinculats a la identitat.',
    }),
  ],
  apps: [
    /* ═══════════════════════════ SoundCloud ═══════════════════════════ */
    {
      slug: 'soundcloud',
      name: 'SoundCloud',
      company: 'soundcloud-global',
      categories: ['musica-i-audio', 'xarxes-socials'],
      tagline: 'La millor documentació de privadesa del lot i, alhora, la filtració de trenta milions de comptes',
      summary:
        'SoundCloud és l’únic servei d’aquest lot que ho té tot: política de privadesa amb els articles del RGPD citats un per un, informes de transparència del Reglament de Serveis Digitals, verificació en dos passos amb aplicació d’autenticació, security.txt, eliminació del compte autoservei i un compromís escrit a les condicions d’ús de no entrenar models generatius amb la veu o la música d’una persona sense consentiment afirmatiu. També és l’únic amb una filtració confirmada: el desembre del 2025 es van exposar les dades de prop de trenta milions de comptes.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Alemanya',
      userBase: 'Centenars de milions de comptes; la filtració del 2025 en va afectar 29,8 milions, que la companyia va xifrar en un 20 % del total',
      links: {
        website: 'https://soundcloud.com/',
        privacyPolicy: 'https://soundcloud.com/pages/privacy',
        terms: 'https://soundcloud.com/terms-of-use',
        appStore: 'https://apps.apple.com/es/app/id336353151',
      },
      accountRequired: f('partial', 'official', ['soundcloud-privacy-policy'], 'La política diu expressament que no cal compte per escoltar; el registre és necessari per pujar pistes, desar favorits i subscriure’s.'),
      openSource: f('no', 'official', ['soundcloud-privacy-policy'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Una plataforma que és alhora reproductor i xarxa social sap què escoltes, què publiques i amb qui parles. El detall més poc conegut és que les estadístiques d’escolta es comparteixen amb els titulars dels drets: els artistes veuen qui els escolta més i si els segueixes.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['soundcloud-privacy-policy', 'soundcloud-app-store'], note: 'També s’utilitza per enviar contrasenyes d’un sol ús de la verificació en dos passos.' }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['soundcloud-privacy-policy'], note: 'El nom real és opcional al perfil públic; el nom d’usuari pot ser un pseudònim.' }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['compliment-legal'], sources: ['soundcloud-privacy-policy'] }),
        row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['soundcloud-privacy-policy'], note: 'Codi postal al registre i adreça de facturació en subscriure’s.' }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['soundcloud-privacy-policy'] }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['soundcloud-app-store', 'soundcloud-privacy-policy'], note: 'Les pistes pujades, els podcasts i les metadades associades es publiquen al perfil.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['soundcloud-app-store'] }),
        row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['soundcloud-privacy-policy'] }),
        row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['soundcloud-privacy-policy'], note: 'La política reconeix l’anàlisi automàtica d’URL compartides per missatgeria privada per detectar enllaços maliciosos.' }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'cessio-a-tercers'], sources: ['soundcloud-privacy-policy'], note: 'Les estadístiques d’escolta es comparteixen amb els titulars dels drets de cada pista, que veuen qui els escolta més.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['soundcloud-app-store'] }),
        row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['soundcloud-privacy-policy'], note: 'Seguidors, reposts i, amb consentiment, la llista d’amistats de Facebook.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['soundcloud-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['soundcloud-privacy-policy', 'soundcloud-app-store'], note: 'IDFA a iOS i AAID a Android, subjectes a consentiment.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['soundcloud-app-store'] }),
        row('aplicacions-instal-lades', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['soundcloud-privacy-policy'], note: 'La secció d’informació del dispositiu esmenta expressament les aplicacions instal·lades.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['soundcloud-app-store', 'soundcloud-privacy-policy'], note: 'La política la basa en el consentiment i diu que es pot denegar des del sistema operatiu.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['soundcloud-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['soundcloud-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['soundcloud-app-store', 'soundcloud-privacy-policy'], note: 'La política admet que els contractes amb els proveïdors de contingut l’obliguen a mesurar l’ús de cada pista.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['soundcloud-app-store', 'soundcloud-privacy-policy'], note: 'SoundCloud diu que només rep la verificació del pagament, no les dades completes de la targeta.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['soundcloud-app-store'] }),
        row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['soundcloud-privacy-policy'], note: 'Verificació d’identitat i número d’identificació fiscal per al programa de monetització.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['soundcloud-app-store'], 'Ubicació aproximada, identificador d’usuari, identificador de dispositiu i dades de publicitat figuren com a dades utilitzades per rastrejar.'),
        advertisingIdentifiers: f('yes', 'official', ['soundcloud-privacy-policy'], 'La política descriu la recollida de l’IDFA i de l’AAID, subjecta al consentiment i al permís de seguiment d’iOS.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['soundcloud-privacy-policy'], 'Socis comercials amb SDK mòbils, widgets incrustats a webs de tercers i corresponsabilitat amb pàgines a Meta, LinkedIn, TikTok, Snap i Twitch.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['soundcloud-privacy-policy', 'soundcloud-ad-settings'], 'Publicitat basada en interessos a la versió gratuïta, amb un control per desactivar-ne la personalització.', {
          optOutUrl: 'https://help.soundcloud.com/hc/en-us/articles/360004223094-Manage-Advertising-Settings',
        }),
        profiling: f('yes', 'official', ['soundcloud-privacy-policy'], 'Recomanacions i publicitat personalitzada a partir de l’historial d’escolta i dels comptes vinculats.'),
        aiTraining: f('partial', 'official', ['soundcloud-terms', 'soundcloud-privacy-policy'], 'Les condicions d’ús prometen no entrenar models generatius que repliquin la veu, la música o la imatge d’una persona sense consentiment afirmatiu previ. La política, en canvi, reconeix l’ús de models de llenguatge de tercers a l’atenció al client.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['soundcloud-privacy-policy'], 'Proveïdors de serveis, socis publicitaris i, de manera singular, els titulars dels drets de cada pista, que reben estadístiques sobre qui els escolta.'),
        intraGroupSharing: f('yes', 'official', ['soundcloud-privacy-policy'], 'Corresponsabilitat a l’empara de l’article 26 del RGPD entre la societat alemanya, SoundCloud, Inc. i Repost Network Inc.'),
        dataBrokerSales: unknown('La política no esmenta la venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['soundcloud-privacy-policy'], 'Clàusules contractuals tipus aprovades per la Comissió Europea, consultables a petició.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: f('yes', 'official', ['soundcloud-transparency-reports'], 'Informes semestrals del Reglament de Serveis Digitals des del 2024 i informes anuals del Reglament sobre continguts terroristes en línia.', {
          url: 'https://soundcloud.com/transparency-reports',
        }),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['soundcloud-privacy-policy'], 'Durant la vigència del contracte i tres anys més des de l’any de la cancel·lació, per obligacions legals.'),
        dataAfterDeletion: f('partial', 'official', ['soundcloud-privacy-policy', 'soundcloud-delete-account'], 'Es conserven les còpies de seguretat i les dades necessàries per a obligacions fiscals i comercials, prevenció del frau i seguretat.'),
        periods: [
          { period: 'Vigència del contracte i tres anys més des de l’any de la cancel·lació', sources: ['soundcloud-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['soundcloud-delete-account']),
        selfService: f('yes', 'official', ['soundcloud-delete-account'], 'Botó d’eliminació tant a la configuració del compte al web com a la configuració de les aplicacions mòbils.'),
        directUrl: 'https://help.soundcloud.com/hc/en-us/articles/115003563188-How-can-I-delete-my-account',
        difficulty: 'easy',
        steps: [
          'Descarrega abans l’informe de dades personals si vols conservar l’historial: en eliminar el compte el perds.',
          'Al web, entra a la configuració del compte i prem el botó d’eliminació al peu de la pàgina.',
          'A l’aplicació, toca l’avatar a la pantalla Biblioteca, entra a Configuració, després a Compte i tria Eliminar compte.',
          'Confirma la sol·licitud: el compte entra en una cua d’eliminació i, si la sol·licitud caduca, queda congelat i cal obrir un tiquet.',
        ],
        dataRetained: 'Còpies de seguretat i dades exigides per obligacions fiscals, comercials i de seguretat.',
        sources: ['soundcloud-delete-account', 'soundcloud-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['soundcloud-data-export'], 'Hi ha un informe de dades personals a petició, però l’historial d’escolta es limita als mil elements més recents i en queden excloses les pistes esborrades o fetes privades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['soundcloud-privacy-policy'], 'Canal específic de protecció de dades i drets enumerats amb els articles del RGPD corresponents.', {
          url: 'mailto:dataprotection@soundcloud.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['soundcloud-ad-settings'], 'Pestanya de publicitat a la configuració i gestor de galetes amb llista de socis; l’ajuda adverteix que el nombre d’anuncis no baixa, només la rellevància.', {
          url: 'https://help.soundcloud.com/hc/en-us/articles/360004223094-Manage-Advertising-Settings',
        }),
        telemetryOptOut: f('yes', 'official', ['soundcloud-privacy-policy'], 'El gestor de galetes de la pestanya de privadesa permet desactivar l’analítica, i a mòbil hi ha commutadors d’analítica i d’informes d’errors.'),
        granularControls: f('yes', 'official', ['soundcloud-privacy-policy'], 'Pestanyes separades de privadesa, publicitat, notificacions i permisos, amb control de qui pot enviar missatges, quines pistes són privades i quines aplicacions tenen accés a l’API.'),
        defaultPosture: 'mixed',
        darkPatterns: f('no', 'official', ['soundcloud-delete-account', 'soundcloud-ad-settings'], 'No hem trobat barreres de sortida ni consentiments desequilibrats: la baixa és autoservei i els controls de publicitat i d’analítica són accessibles.'),
      },
      security: {
        e2ee: f('no', 'official', ['soundcloud-privacy-policy'], 'Els missatges privats s’analitzen automàticament per detectar URL malicioses, cosa que exclou el xifratge d’extrem a extrem.'),
        transportEncryption: f('yes', 'official', ['soundcloud-security-txt'], 'Tot el domini es serveix per HTTPS.'),
        atRestEncryption: unknown('La secció de seguretat de la informació no detalla el xifratge en repòs.'),
        mfa: f('yes', 'official', ['soundcloud-two-factor'], 'Aplicació d’autenticació TOTP amb codis de recuperació i codis d’un sol ús per correu com a reserva. L’article indica expressament que no s’ofereix verificació per SMS.', {
          methods: ['totp', 'email'],
        }),
        independentAudits: unknown('No consten auditories ni certificacions ISO 27001 o SOC 2 publicades.'),
        bugBounty: f('partial', 'official', ['soundcloud-security-txt'], 'El security.txt remet a una política de divulgació responsable pròpia; no consta cap programa de recompenses gestionat públicament.'),
        vulnerabilityDisclosure: f('yes', 'official', ['soundcloud-security-txt'], 'Fitxer security.txt vigent fins al març del 2027 amb contacte i política de divulgació.'),
      },
      alternatives: [
        {
          app: 'audiomack',
          comparability: 'partial',
          rationale: 'També permet pujar i escoltar música d’artistes emergents sense cost.',
          tradeOffs: 'El responsable és nord-americà, no designa representant a la Unió Europea i l’etiqueta de rastreig és més extensa.',
        },
      ],
      review: {
        researchStatus: 'in-depth',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'És la fitxa amb més documentació verificable del lot. Val la pena destacar dues coses poc conegudes: que les estadístiques d’escolta arriben als titulars dels drets amb el detall de qui els escolta més, i que el compromís de no entrenar models generatius amb la veu d’una persona és a les condicions d’ús, no a la política de privadesa.',
        openQuestions: [
          'Quina autoritat de control actua com a principal? La política no ho diu, tot i que l’establiment principal és a Berlín.',
          'Quant triga realment la cua d’eliminació de comptes? Cap font en publica el termini.',
          'Les dades en repòs estan xifrades? La secció de seguretat no ho concreta.',
        ],
      },
    },

    /* ═══════════════════════════ DICE ═══════════════════════════ */
    {
      slug: 'dice',
      name: 'DICE',
      company: 'dice-fm-holdings',
      categories: ['musica-i-audio', 'comerc-electronic'],
      tagline: 'Política específica per a Espanya, però la teva ubicació exacta i el teu DNI viatgen als promotors',
      summary:
        'DICE ven entrades de concerts com a agent dels promotors i recintes, i és de les poques aplicacions del lot amb una política de privadesa escrita expressament per a Espanya, en castellà, referida al RGPD i a la LOPDGDD i amb un delegat de protecció de dades extern identificat. L’etiqueta de l’App Store no declara cap dada de rastreig, però sí ubicació exacta, informació de pagament, adreça física i telèfon vinculats a la identitat. El document també reconeix la recollida del DNI, la sincronització opcional amb Spotify o Apple Music i que si et bloquegen el compte per frau poden negar-se a esborrar les dades identificatives.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Regne Unit, amb filial espanyola i dades allotjades a Irlanda',
      userBase: 'No n’hem verificat cap xifra oficial.',
      links: {
        website: 'https://dice.fm/',
        privacyPolicy: 'https://dicefm.zendesk.com/hc/en-gb/articles/4417457241873-Spain-Privacy-Policy-for-DICE-Users',
        appStore: 'https://apps.apple.com/es/app/id898358948',
      },
      accountRequired: f('yes', 'official', ['dice-privacy-policy-spain'], 'El compte es crea amb la primera compra a partir del telèfon i el correu; no hi ha contrasenya, s’entra amb un codi de quatre xifres.'),
      openSource: f('no', 'editorial', [], 'No hi ha cap repositori públic del servei.', { licence: 'Privativa' }),
      dataSummary:
        'L’historial d’entrades d’una persona és un mapa de gustos, d’afinitats i de moviments: on va, amb qui, a quina hora i quant s’hi gasta. DICE hi afegeix la ubicació exacta per recomanar, la biblioteca musical si l’hi connectes i, quan demanes una entrada d’accessibilitat, documentació mèdica que és categoria especial de dades.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'cessio-a-tercers'], sources: ['dice-privacy-policy-spain', 'dice-app-store'], note: 'Es comparteix amb el promotor de cada esdeveniment.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['dice-privacy-policy-spain', 'dice-app-store'], note: 'La política admet la compartició del correu, el país i l’edat amb xarxes socials i cercadors per mostrar anuncis més rellevants.' }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['dice-privacy-policy-spain', 'dice-app-store'], note: 'Qualsevol persona usuària que tingui el teu número pot veure que tens compte a DICE.' }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'compliment-legal'], sources: ['dice-privacy-policy-spain'], note: 'La política enumera el DNI entre les dades de contacte i el fa servir per verificar la identitat a l’entrada del recinte.' }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'elaboracio-de-perfils'], sources: ['dice-privacy-policy-spain'], note: 'Es recull per interès legítim, per comprovar l’edat mínima dels esdeveniments.' }),
        row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['elaboracio-de-perfils'], sources: ['dice-privacy-policy-spain'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'cessio-a-tercers'], sources: ['dice-privacy-policy-spain', 'dice-app-store'], note: 'La política admet cedir adreces postals als promotors, per interès legítim, perquè entenguin la seva audiència.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['dice-privacy-policy-spain', 'dice-app-store'], note: 'Stripe hi actua com a encarregat i, en certs casos, com a responsable propi.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['dice-privacy-policy-spain', 'dice-app-store'] }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'personalitzacio-de-continguts'], sources: ['dice-app-store', 'dice-privacy-policy-spain'], note: 'Amb permís del dispositiu; l’etiqueta la declara vinculada a la identitat per a personalització i funcionalitat.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['dice-privacy-policy-spain'], note: 'Derivada de l’adreça IP, sense necessitat de permís.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'recomanacions-algoritmiques'], sources: ['dice-privacy-policy-spain'], note: 'La funció Descobriment elabora un perfil de tendències individuals i demogràfiques.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'recomanacions-algoritmiques'], sources: ['dice-app-store'] }),
        row('historial-de-visualitzacio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['dice-privacy-policy-spain'], note: 'Si hi connectes Spotify o Apple Music, DICE conserva informació sobre els teus interessos musicals.' }),
        row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['dice-privacy-policy-spain'], note: 'Per a entrades d’accessibilitat: certificats de discapacitat, informes mèdics i targetes d’acompanyament, tractats amb consentiment explícit com a categoria especial.' }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['dice-privacy-policy-spain'], note: 'DICE es reserva el dret de fer i publicar fotografies i gravacions dels esdeveniments, per interès legítim.' }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['dice-privacy-policy-spain'], note: 'Amb consentiment, per a la funció de transferència limitada d’entrades.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['dice-privacy-policy-spain'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['dice-privacy-policy-spain'], note: 'Galetes de segmentació i de màrqueting de Google, Meta i TikTok, incloent-hi l’API de conversions de Facebook; caduquen habitualment als sis mesos.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['dice-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['dice-app-store', 'dice-privacy-policy-spain'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['dice-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['dice-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['dice-app-store'], 'L’etiqueta no declara dades de publicitat ni identificador publicitari.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['dice-privacy-policy-spain'], 'Al web hi ha galetes de segmentació i de màrqueting de Google, Meta i TikTok, i l’API de conversions de Facebook; la política admet que classifica Google Analytics i les galetes d’atribució com a estrictament necessàries.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['dice-privacy-policy-spain'], 'La política admet compartir correu, país i edat amb xarxes socials i cercadors per mostrar anuncis més rellevants a la persona usuària i a públics similars.'),
        profiling: f('yes', 'official', ['dice-privacy-policy-spain'], 'L’elaboració de perfils es declara expressament i es basa en l’interès legítim, amb una avaluació d’interès legítim prèvia.'),
        aiTraining: f('no', 'official', ['dice-privacy-policy-spain'], 'La política no preveu l’entrenament de models amb dades personals; només l’ús de funcions d’intel·ligència artificial per analitzar i agilitar l’atenció al client, sota interès legítim.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['dice-privacy-policy-spain'], 'Socis dels esdeveniments —que són responsables autònoms i, segons la política, «posseeixen les teves dades»—, Stripe, proveïdors de núvol, analítica i missatgeria, i Google, Meta i TikTok per a les galetes.'),
        intraGroupSharing: f('yes', 'official', ['dice-privacy-policy-spain', 'dice-fever-group-entities'], 'Les dades circulen dins del Grup DICE, que des del 2025 forma part del grup Fever.'),
        dataBrokerSales: f('no', 'official', ['dice-privacy-policy-spain'], 'La política afirma expressament que no lloguen ni venen dades personals sense consentiment explícit.'),
        internationalTransfers: f('yes', 'official', ['dice-privacy-policy-spain'], 'Les dades s’allotgen actualment a centres de dades a Irlanda; per a les transferències fora de l’Espai Econòmic Europeu s’apliquen decisions d’adequació o clàusules contractuals tipus.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència de DICE.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['dice-privacy-policy-spain'], 'La política fixa terminis concrets per a diverses categories, cosa poc habitual.'),
        dataAfterDeletion: f('partial', 'official', ['dice-privacy-policy-spain'], 'Si el compte es bloqueja per frau o revenda comercial, es conserva un conjunt mínim de dades identificatives durant més temps i es pot denegar la supressió.'),
        periods: [
          { period: 'Dades dels acompanyants titulars d’entrada: un màxim de 30 dies després de l’esdeveniment', sources: ['dice-privacy-policy-spain'] },
          { period: 'Historial de compres: es pot demanar la supressió passats sis anys', sources: ['dice-privacy-policy-spain'] },
          { period: 'Galetes persistents: caducitat habitual de sis mesos', sources: ['dice-privacy-policy-spain'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['dice-delete-account']),
        selfService: f('yes', 'official', ['dice-delete-account'], 'Opció dins de l’aplicació; no hi ha cap via documentada des del web.'),
        directUrl: 'https://dicefm.zendesk.com/hc/en-gb/articles/4409596582417-How-to-delete-your-DICE-account',
        difficulty: 'medium',
        waitingPeriodDays: 15,
        steps: [
          'Comprova que no tens entrades per a esdeveniments futurs: si en tens, la sol·licitud es rebutja. Transfereix-les, torna-les per la llista d’espera o espera que passi l’esdeveniment.',
          'Obre l’aplicació i toca la icona de perfil, a baix a la dreta.',
          'Entra a la configuració amb la icona de dalt a la dreta i tria «Delete account», al final de la pantalla.',
          'El compte es desactiva immediatament i les dades s’eliminen de manera definitiva al cap de quinze dies; dins d’aquesta finestra pots demanar la reactivació a l’equip de suport.',
        ],
        obstacles:
          'Tenir una entrada per a un concert futur bloqueja la baixa, de manera que el dret de supressió queda condicionat al calendari d’esdeveniments. La política també preveu conservar dades identificatives contra la voluntat de la persona quan el compte s’ha bloquejat per frau o revenda.',
        dataRetained: 'Si només desactives el compte es mantenen l’identificador d’usuari i l’historial d’entrades.',
        sources: ['dice-delete-account', 'dice-privacy-policy-spain'],
      },
      userRights: {
        dataExport: f('no', 'official', ['dice-privacy-policy-spain'], 'La política reconeix que no hi ha cap eina de descàrrega i que, fins que no se’n desenvolupi una, la portabilitat s’exerceix escrivint a help@dice.fm.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['dice-privacy-policy-spain'], 'Delegat de protecció de dades extern identificat, termini de trenta dies per a les sol·licituds d’accés i remissió expressa a l’AEPD per a les reclamacions.', {
          url: 'mailto:help@dice.fm',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['dice-privacy-policy-spain'], 'Al web hi ha bàner de galetes per categories, però no consta cap commutador de publicitat personalitzada dins de l’aplicació: el canvi s’ha de demanar per correu.'),
        telemetryOptOut: f('no', 'official', ['dice-privacy-policy-spain'], 'L’analítica dins de l’aplicació es basa en l’interès legítim i no hi ha cap control documentat per desactivar-la.'),
        granularControls: f('partial', 'official', ['dice-privacy-policy-spain'], 'Hi ha un centre de comunicacions dins de l’aplicació que permet donar-se de baixa dels correus de DICE i dels promotors, però no un panell de privadesa per finalitat.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'editorial', ['dice-privacy-policy-spain'], 'Classificar Google Analytics i les galetes d’atribució d’afiliats com a «estrictament necessàries» les exclou del consentiment, tot i que serveixen per mesurar i atribuir, no per fer funcionar el servei.'),
        darkPatternList: [
          {
            type: 'preselected',
            severity: 'medium',
            description:
              'La política inclou Google Analytics i les galetes de seguiment d’atribució dins de les galetes estrictament necessàries, que no es poden rebutjar al bàner de consentiment.',
            sources: ['dice-privacy-policy-spain'],
          },
        ],
      },
      security: {
        e2ee: na('El servei no transporta comunicacions privades entre persones usuàries.'),
        transportEncryption: f('yes', 'official', ['dice-security-txt'], 'Tot el domini es serveix per HTTPS.'),
        atRestEncryption: f('partial', 'official', ['dice-privacy-policy-spain'], 'La política només concreta que el correu i el telèfon es comparteixen xifrats amb els promotors per a les galetes de màrqueting; no descriu el xifratge general en repòs.'),
        mfa: f('no', 'official', ['dice-privacy-policy-spain'], 'No hi ha contrasenya ni segon factor: s’entra amb un codi de quatre xifres enviat per correu, SMS o trucada, que és un factor únic de possessió.'),
        independentAudits: unknown('No consten auditories ni certificacions publicades.'),
        bugBounty: f('partial', 'official', ['dice-security-txt'], 'El security.txt declara un programa de recompenses a HackerOne, però no hem trobat cap programa públic: sembla privat o no publicat.'),
        vulnerabilityDisclosure: f('yes', 'official', ['dice-security-txt'], 'Fitxer security.txt amb adreça de contacte, vigent fins al gener del 2027.'),
      },
      alternatives: [
        {
          app: 'ticketmaster',
          comparability: 'equivalent',
          rationale: 'És l’altra plataforma d’entrades amb presència comparable a Espanya i catàleg de grans recintes.',
          tradeOffs: 'Forma part d’un grup molt més gran, amb un historial d’incidents de seguretat i de qüestionaments regulatoris més llarg.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Publicar una política específica per a Espanya, en castellà i actualitzada el febrer del 2026, és una bona pràctica poc freqüent. El contrapunt és el contingut: recollida del DNI, cessió d’adreces postals als promotors per interès legítim, absència d’eina de portabilitat i possibilitat de denegar la supressió a qui hagin bloquejat per frau. El document legal es publica en un centre d’ajuda de Zendesk, que bloqueja els lectors automatitzats.',
        openQuestions: [
          'El canvi de matriu cap al grup Fever modifica els fluxos de dades entre DICE i Kzemos Technologies a Madrid?',
          'Per què el DNI figura entre les dades de contacte de recollida ordinària i no només a la verificació a la porta del recinte?',
          'El programa de recompenses que declara el security.txt existeix realment i està obert?',
        ],
      },
    },

    /* ═══════════════════════════ myTuner Radio ═══════════════════════════ */
    {
      slug: 'mytuner-radio',
      name: 'myTuner Radio',
      company: 'appgeneration-software',
      categories: ['musica-i-audio'],
      tagline: 'Una ràdio gratuïta que va documentar l’enviament de la teva ubicació precisa a un corredor de dades',
      summary:
        'myTuner Radio agrega emissores de ràdio de tot el món i no demana cap compte per escoltar-les. El que la fa singular no és el catàleg sinó una pàgina pròpia, «Third Party Data Recipients», on la companyia portuguesa detalla que comparteix ubicació precisa, senyals de wifi i Bluetooth i identificadors publicitaris amb X-Mode Social, també quan l’aplicació està en segon pla. L’FTC va prohibir a aquesta empresa, el gener del 2024, vendre dades sensibles d’ubicació. La política enumera a més Outlogic, UXCam, Firebase i diversos proveïdors d’anàlisi de xarxa.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Portugal',
      userBase: 'No n’hem verificat cap xifra oficial.',
      links: {
        website: 'https://mytuner-radio.com/',
        privacyPolicy: 'https://mytuner-radio.com/privacy-policy/',
        appStore: 'https://apps.apple.com/es/app/id520502858',
      },
      accountRequired: f('no', 'official', ['mytuner-privacy-policy'], 'Es pot escoltar la ràdio sense compte; el registre amb Google, Apple o Facebook només serveix per sincronitzar favorits.'),
      openSource: f('no', 'editorial', [], 'No hi ha cap repositori públic del client ni del servei.', { licence: 'Privativa' }),
      dataSummary:
        'La combinació d’ubicació precisa recollida en segon pla i identificador publicitari és la matèria primera del mercat de dades de localització: no descriu què escoltes, sinó on ets a cada hora del dia. Les emissores que segueixes hi afegeixen una capa de llengua, territori i, sovint, orientació política o religiosa.',
      dataCollection: [
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['mytuner-privacy-policy', 'mytuner-app-store'], note: 'Només si es crea un compte amb Google, Apple o Facebook.' }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['mytuner-privacy-policy'] }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'brokers', purposes: ['publicitat-personalitzada', 'cessio-a-tercers', 'mesura-i-analisi-dus'], sources: ['mytuner-privacy-policy', 'mytuner-third-party-recipients', 'mytuner-app-store'], note: 'La pàgina de destinataris admet la recollida quan l’aplicació funciona en segon pla.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['mytuner-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'brokers', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['mytuner-privacy-policy', 'mytuner-third-party-recipients'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['mytuner-app-store', 'mytuner-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['mytuner-privacy-policy'] }),
        row('xarxa-i-connectivitat', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'cessio-a-tercers'], sources: ['mytuner-privacy-policy', 'mytuner-third-party-recipients'], note: 'Senyals de wifi i Bluetooth i mesures de rendiment de la xarxa, compartides amb socis d’anàlisi de connectivitat.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['mytuner-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['mytuner-privacy-policy', 'mytuner-app-store'] }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['mytuner-privacy-policy'], note: 'Les emissores escoltades i els favorits, sota la categoria d’estadístiques d’ús de la política.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['mytuner-app-store'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['mytuner-privacy-policy'], note: 'Les subscripcions es cobren a través de l’App Store.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['mytuner-app-store', 'mytuner-third-party-recipients'], 'L’etiqueta declara ubicació i identificadors com a dades utilitzades per rastrejar en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['mytuner-privacy-policy', 'mytuner-third-party-recipients']),
        thirdPartyTrackersPresent: f('yes', 'official', ['mytuner-privacy-policy'], 'La política cita Outlogic, Low Lag Labs, Wavebrook Analytics, Case on it, UXCam i Google Analytics/Firebase.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['mytuner-privacy-policy'], 'La personalització de la publicitat és una de les finalitats declarades; la subscripció Radio Pro elimina els anuncis.'),
        profiling: f('yes', 'official', ['mytuner-privacy-policy', 'mytuner-third-party-recipients'], 'L’ubicació precisa es cedeix per a publicitat personalitzada i anàlisi de patrons de mobilitat.'),
        aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['mytuner-privacy-policy'], 'Llista nominal de socis d’analítica, de publicitat i de mesura de qualitat de xarxa.'),
        intraGroupSharing: unknown('No consta cap grup empresarial per sobre d’AppGeneration.'),
        dataBrokerSales: f('yes', 'official', ['mytuner-third-party-recipients', 'mytuner-privacy-policy'], 'La pàgina de destinataris descriu la cessió d’ubicació precisa a X-Mode Social, un corredor de dades de localització; la política cita el seu successor, Outlogic.'),
        internationalTransfers: f('yes', 'official', ['mytuner-privacy-policy'], 'Els socis publicitaris i d’analítica són majoritàriament nord-americans.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['mytuner-privacy-policy'], 'Cinc anys per defecte, i eliminació automàtica dels comptes inactius al cap de tres anys.'),
        dataAfterDeletion: unknown('La política no detalla què es conserva després de la supressió.'),
        periods: [
          { period: 'Cinc anys des de la recollida, llevat que se’n demani la supressió', sources: ['mytuner-privacy-policy'] },
          { period: 'Els comptes inactius s’eliminen automàticament al cap de tres anys', sources: ['mytuner-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['mytuner-privacy-policy']),
        selfService: f('no', 'official', ['mytuner-privacy-policy'], 'Cal escriure a help@mytuner.mobi indicant l’identificador d’accés; no hi ha cap botó d’eliminació.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Escriu a help@mytuner.mobi des de l’adreça amb què vas registrar-te.',
          'Indica l’identificador d’accés (Google, Apple o Facebook) associat al compte.',
          'Demana expressament la supressió de les dades a l’empara de l’article 17 del RGPD.',
          'Guarda la confirmació; si no arriba dins d’un mes, pots reclamar davant de la CNPD portuguesa o de l’AEPD.',
        ],
        obstacles:
          'Com que escoltar la ràdio no requereix compte, la baixa no atura la recollida d’ubicació i d’identificadors: per a això cal revocar els permisos al sistema operatiu i activar «Demana a les apps que no facin seguiment».',
        sources: ['mytuner-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['mytuner-privacy-policy'], 'La política reconeix el dret de portabilitat, però no hi ha cap eina d’autoservei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['mytuner-privacy-policy'], 'Canal per correu electrònic i menció explícita del dret a reclamar davant de la CNPD.', {
          url: 'mailto:help@mytuner.mobi',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['mytuner-third-party-recipients'], 'La pàgina de destinataris remet a la política d’X-Mode i a la configuració del sistema operatiu, no a cap control dins de l’aplicació.'),
        telemetryOptOut: unknown('No hem trobat cap manera de desactivar l’analítica sense pagar la subscripció.'),
        granularControls: f('no', 'official', ['mytuner-privacy-policy'], 'No hi ha cap panell de privadesa amb controls per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: f('yes', 'editorial', ['mytuner-third-party-recipients'], 'La informació més rellevant —la cessió d’ubicació precisa a un corredor de dades— no és a la política sinó a una pàgina separada que cal buscar, i que consta actualitzada el juny del 2020.'),
        darkPatternList: [
          {
            type: 'confusing-language',
            severity: 'high',
            description:
              'La cessió d’ubicació precisa a un corredor de dades s’explica en una pàgina apart, desactualitzada des del 2020, mentre que la política principal parla només de «socis especials».',
            sources: ['mytuner-third-party-recipients', 'mytuner-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: na('L’aplicació reprodueix emissions públiques; no hi ha comunicacions privades a xifrar.'),
        transportEncryption: unknown('No hem trobat cap documentació tècnica sobre el transport.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('L’accés es fa amb identitats de tercers; la política no descriu cap segon factor propi.'),
        independentAudits: unknown('No consten auditories publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni security.txt.'),
        vulnerabilityDisclosure: unknown('No hi ha cap canal específic de comunicació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'radio-cope',
          comparability: 'partial',
          rationale: 'Aplicació d’un sol grup radiofònic: molt menys catàleg, però una cadena de cessions més curta i un responsable espanyol sotmès a l’AEPD.',
          tradeOffs: 'Perds l’agregació internacional d’emissores.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La pàgina «Third Party Data Recipients» és una font primària poc habitual: molt poques aplicacions documenten per escrit la cessió d’ubicació precisa a un corredor. Que consti actualitzada el 2020 i que la política actual citi Outlogic —el nom posterior d’X-Mode— indica que la pràctica no s’ha aturat.',
        openQuestions: [
          'La cessió a Outlogic continua vigent per a les persones usuàries de la Unió Europea o s’ha limitat als Estats Units?',
          'Quin mecanisme empara les transferències internacionals? La política no en cita cap.',
        ],
      },
    },

    /* ═══════════════════════════ GuitarTuna ═══════════════════════════ */
    {
      slug: 'guitartuna',
      name: 'GuitarTuna',
      company: 'yousician',
      categories: ['musica-i-audio', 'educacio'],
      tagline: 'Un afinador de guitarra que declara la ubicació com a dada de rastreig',
      summary:
        'GuitarTuna afina l’instrument escoltant-lo pel micròfon: una funció que no necessita saber on ets. L’etiqueta de l’App Store, però, declara la ubicació, els identificadors, les dades d’ús i els diagnòstics com a dades utilitzades per rastrejar-te en aplicacions i webs d’altres empreses, i vincula la ubicació aproximada a la identitat per a publicitat de tercers. L’avís de privadesa és el comú de Yousician, una empresa finlandesa que sí que designa un canal de drets i fixa un termini de conservació.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Finlàndia',
      userBase: 'No n’hem verificat cap xifra oficial.',
      links: {
        website: 'https://yousician.com/guitartuna',
        privacyPolicy: 'https://yousician.com/privacy-notice',
        appStore: 'https://apps.apple.com/es/app/id527588389',
      },
      accountRequired: f('partial', 'official', ['yousician-privacy-notice'], 'L’afinador bàsic funciona sense registre, però els cursos i la sincronització del progrés demanen compte.'),
      openSource: f('no', 'editorial', [], 'No hi ha cap repositori públic.', { licence: 'Privativa' }),
      dataSummary:
        'El que revela GuitarTuna no és musical: és la combinació d’ubicació aproximada, identificador de dispositiu i historial de compres cedida a xarxes de publicitat. L’instrument que afines i les hores que hi dediques hi afegeixen un senyal d’afició i de nivell adquisitiu que encaixa bé amb la venda de subscripcions.',
      dataCollection: [
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['yousician-privacy-notice'] }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['yousician-privacy-notice'] }),
        row('contrasenya', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['yousician-privacy-notice'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['guitartuna-app-store'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['guitartuna-app-store'], note: 'L’etiqueta la declara vinculada a la identitat per a publicitat de tercers, tot i que afinar no requereix ubicació.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['guitartuna-app-store', 'yousician-privacy-notice'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['yousician-privacy-notice'], note: 'L’avís cita socis que utilitzen identificadors publicitaris, galetes, API i SDK.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['guitartuna-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['guitartuna-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['guitartuna-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['yousician-privacy-notice'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['yousician-privacy-notice'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['yousician-privacy-notice'] }),
        row('veu-i-audio', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['guitartuna-app-store'], note: 'L’afinador processa el so del micròfon; l’etiqueta de l’App Store no declara àudio recollit, cosa que apunta a un tractament local.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['guitartuna-app-store'], 'Ubicació, identificadors, dades d’ús i diagnòstics figuren com a dades utilitzades per rastrejar.'),
        advertisingIdentifiers: f('yes', 'official', ['yousician-privacy-notice', 'guitartuna-app-store']),
        thirdPartyTrackersPresent: f('yes', 'official', ['yousician-privacy-notice'], 'L’avís reconeix socis que integren SDK, API i galetes publicitàries.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['yousician-privacy-notice'], 'La publicitat personalitzada figura entre les finalitats, amb l’interès legítim com a base declarada.'),
        profiling: f('yes', 'official', ['guitartuna-app-store', 'yousician-privacy-notice'], 'L’etiqueta declara personalització del producte a partir de la ubicació aproximada i de l’identificador d’usuari.'),
        aiTraining: unknown('L’avís no diu res sobre l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['yousician-privacy-notice'], 'Proveïdors de serveis, socis publicitaris i autoritats públiques.'),
        intraGroupSharing: f('yes', 'official', ['yousician-privacy-notice'], 'Compartició amb les filials del grup Yousician.'),
        dataBrokerSales: unknown('L’avís no esmenta la venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['yousician-privacy-notice'], 'Servidors i filials als Estats Units, emparats per clàusules contractuals tipus.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['yousician-privacy-notice'], 'Les dades es conserven mentre el compte és actiu i fins a 30 dies després de la supressió; els comptes inactius es revisen als cinc anys.'),
        dataAfterDeletion: f('partial', 'official', ['yousician-privacy-notice'], 'Hi ha una finestra de 30 dies després de la supressió abans de l’esborrat efectiu.'),
        periods: [
          { period: '30 dies després de la supressió del compte', sources: ['yousician-privacy-notice'] },
          { period: 'Revisió dels comptes inactius als cinc anys', sources: ['yousician-privacy-notice'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['yousician-privacy-notice']),
        selfService: f('partial', 'official', ['yousician-privacy-notice'], 'L’avís remet a la configuració de privadesa de l’aplicació i, alternativament, a escriure a support@yousician.com.'),
        difficulty: 'medium',
        steps: [
          'Obre l’aplicació i entra a la configuració de privadesa del compte.',
          'Tria l’opció de suprimir el compte i les dades associades.',
          'Si l’opció no hi és a la teva versió, escriu a support@yousician.com o a privacy@yousician.com demanant la supressió.',
          'Recorda cancel·lar la subscripció des de l’App Store: eliminar el compte no atura el cobrament.',
        ],
        dataRetained: 'Les dades es mantenen fins a 30 dies després de la sol·licitud.',
        sources: ['yousician-privacy-notice'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['yousician-privacy-notice'], 'El dret d’accés es reconeix, però no hi ha cap eina d’exportació autoservei documentada.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['yousician-privacy-notice'], 'Adreça específica de privadesa, dins d’un establiment de la Unió Europea.', {
          url: 'mailto:privacy@yousician.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['yousician-privacy-notice'], 'L’avís esmenta la retirada del consentiment, però la publicitat personalitzada es basa en l’interès legítim i no hi ha un commutador dins de l’aplicació.'),
        telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica.'),
        granularControls: f('partial', 'official', ['yousician-privacy-notice'], 'Hi ha una secció de privadesa dins de l’aplicació, però no consta que permeti triar finalitat per finalitat.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'editorial', ['guitartuna-app-store'], 'Recollir ubicació en una aplicació que només ha d’escoltar una corda és una asimetria entre la funció i les dades, encara que estigui declarada.'),
      },
      security: {
        e2ee: na('No hi ha comunicacions privades entre persones usuàries.'),
        transportEncryption: unknown('No hem trobat documentació tècnica pública.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('L’avís no descriu cap segon factor d’autenticació.'),
        independentAudits: unknown('No consten auditories publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hi ha cap canal públic de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'L’avís de privadesa és comú a tot Yousician i no distingeix GuitarTuna de la plataforma d’aprenentatge, cosa que obliga a llegir l’etiqueta de l’App Store per saber què fa realment l’afinador.',
        openQuestions: [
          'Per a què serveix la ubicació en una aplicació d’afinació? L’avís no ho explica.',
          'L’opció de suprimir el compte dins de l’aplicació és present a totes les versions?',
        ],
      },
    },

    /* ═══════════════════════════ Audiomack ═══════════════════════════ */
    {
      slug: 'audiomack',
      name: 'Audiomack',
      company: 'audiomack',
      categories: ['musica-i-audio', 'xarxes-socials'],
      tagline: '«No venem les teves dades», i alhora l’etiqueta declara vuit categories utilitzades per rastrejar-te',
      summary:
        'Audiomack distribueix música d’artistes emergents sense cost i viu de la publicitat. La política afirma amb èmfasi que la companyia no ven dades personals, però reconeix la compartició amb LiveRamp —una plataforma d’identitat publicitària— de correu xifrat, adreça IP i dades del navegador, i l’etiqueta de l’App Store declara compres, ubicació, dades de contacte, contingut de la persona usuària, historial de cerca, identificadors, dades d’ús i diagnòstics com a dades utilitzades per rastrejar. Com a contrapartida, l’eliminació del compte és un botó al tauler.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Estats Units',
      userBase: 'No n’hem verificat cap xifra oficial.',
      links: {
        website: 'https://audiomack.com/',
        privacyPolicy: 'https://www.audiomack.com/about/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id921765888',
      },
      accountRequired: f('yes', 'official', ['audiomack-privacy-policy'], 'El registre demana correu, nom, edat i gènere.'),
      openSource: f('no', 'editorial', [], 'No hi ha cap repositori públic del servei.', { licence: 'Privativa' }),
      dataSummary:
        'L’historial d’escolta d’una plataforma dominada per un gènere musical concret és un senyal demogràfic i cultural fort. Afegir-hi l’edat i el gènere declarats al registre, la geolocalització i un identificador publicitari resolt per LiveRamp permet reconèixer la mateixa persona en altres webs.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['audiomack-privacy-policy', 'audiomack-app-store'], note: 'La política descriu la compartició d’un correu xifrat amb LiveRamp.' }),
        row('nom-i-cognoms', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['audiomack-privacy-policy', 'audiomack-app-store'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['audiomack-privacy-policy'], note: 'El registre demana l’edat.' }),
        row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['audiomack-privacy-policy'] }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['audiomack-app-store', 'audiomack-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['audiomack-app-store'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['audiomack-app-store', 'audiomack-privacy-policy'] }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'mesura-i-analisi-dus'], sources: ['audiomack-privacy-policy'], note: 'L’activitat d’escolta també alimenta les estadístiques que veuen els artistes.' }),
        row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['audiomack-app-store', 'audiomack-privacy-policy'] }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['audiomack-privacy-policy'], note: 'Foto de perfil i portades pujades pels artistes.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-publicitaria'], sources: ['audiomack-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['audiomack-app-store', 'audiomack-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['audiomack-privacy-policy'], note: 'Es comparteix amb LiveRamp juntament amb dades del navegador.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['audiomack-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['audiomack-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['audiomack-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['audiomack-app-store'], 'Vuit categories declarades com a dades utilitzades per rastrejar en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['audiomack-app-store', 'audiomack-privacy-policy']),
        thirdPartyTrackersPresent: f('yes', 'official', ['audiomack-privacy-policy'], 'Xarxes publicitàries, proveïdors d’analítica i LiveRamp com a soci d’identitat.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['audiomack-privacy-policy'], 'La publicitat és el model de negoci de la versió gratuïta; la subscripció Premium la retira.'),
        profiling: f('yes', 'official', ['audiomack-privacy-policy'], 'Personalització i estadístiques per a creadors a partir de l’activitat d’escolta.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['audiomack-privacy-policy'], 'Socis d’analítica, xarxes publicitàries i LiveRamp.'),
        intraGroupSharing: na('Audiomack, Inc. no forma part de cap grup empresarial més ampli que ens consti.'),
        dataBrokerSales: f('partial', 'official', ['audiomack-privacy-policy'], 'La política nega la venda de dades personals, però la compartició amb LiveRamp de correu xifrat i adreça IP és funcionalment una cessió a la cadena publicitària.'),
        internationalTransfers: f('yes', 'official', ['audiomack-privacy-policy'], 'Les dades es tracten als Estats Units; la política no cita cap mecanisme del RGPD.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['audiomack-privacy-policy'], 'La política no fixa cap termini concret de conservació.'),
        dataAfterDeletion: unknown('La política no detalla què es conserva després d’eliminar el compte.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['audiomack-privacy-policy']),
        selfService: f('yes', 'official', ['audiomack-privacy-policy'], 'Hi ha un botó «Delete account» al tauler del compte; també s’accepta la sol·licitud per correu.'),
        difficulty: 'easy',
        steps: [
          'Entra al compte des del web o l’aplicació i obre el tauler de configuració.',
          'Tria l’opció «Delete account» i confirma-la.',
          'Si no la trobes, escriu a privacy@audiomack.com o obre un tiquet de suport demanant la supressió.',
          'Recorda que la música que hagis publicat i els comentaris poden continuar visibles si altres persones els han republicat.',
        ],
        sources: ['audiomack-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('No hem trobat cap eina d’exportació ni cap descripció del format.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['audiomack-privacy-policy'], 'Hi ha una adreça de privadesa i el compromís de respondre «sense dilació indeguda», però no es designa cap representant a la Unió Europea ni s’esmenta el RGPD amb detall.', {
          url: 'mailto:privacy@audiomack.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['audiomack-privacy-policy'], 'La política reconeix el dret a retirar el consentiment, però la via pràctica per aturar la publicitat és pagar la subscripció.'),
        telemetryOptOut: unknown('No hem trobat cap control d’analítica.'),
        granularControls: f('no', 'official', ['audiomack-privacy-policy'], 'No hi ha cap panell de privadesa amb controls per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'editorial', ['audiomack-privacy-policy', 'audiomack-app-store'], 'L’afirmació rotunda «no venem les teves dades, punt» conviu amb la compartició amb un soci d’identitat publicitària i amb una etiqueta de rastreig molt extensa.'),
        darkPatternList: [
          {
            type: 'confusing-language',
            severity: 'medium',
            description:
              'La negativa categòrica a vendre dades contrasta amb la cessió a LiveRamp de correu xifrat, adreça IP i dades del navegador per a finalitats publicitàries.',
            sources: ['audiomack-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: na('No hi ha comunicacions privades xifrades entre persones usuàries.'),
        transportEncryption: unknown('No hem trobat documentació tècnica pública.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('No hem trobat documentació sobre la verificació en dos passos.'),
        independentAudits: unknown('No consten auditories publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hi ha cap canal públic de comunicació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'soundcloud',
          comparability: 'equivalent',
          rationale: 'També distribueix música d’artistes emergents amb pujada lliure, però amb un responsable establert a la Unió Europea i sotmès a una autoritat de control europea.',
          tradeOffs: 'El catàleg d’afrobeats i de hip-hop africà, l’especialitat d’Audiomack, hi és menys present.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'L’interès de la fitxa és la distància entre una afirmació de màrqueting —«no venem les teves dades, punt»— i el que descriu la mateixa política dues seccions més avall.',
        openQuestions: [
          'Qui és el representant d’Audiomack a la Unió Europea, si n’hi ha cap?',
          'Quin és el termini real de conservació després d’eliminar el compte?',
        ],
      },
    },

    /* ═══════════════════════════ BandLab ═══════════════════════════ */
    {
      slug: 'bandlab',
      name: 'BandLab',
      company: 'bandlab-singapore',
      categories: ['musica-i-audio', 'xarxes-socials'],
      tagline: 'Un estudi de gravació al núvol on la baixa passa obligatòriament pel delegat de protecció de dades',
      summary:
        'BandLab combina un estudi multipista al navegador i al mòbil amb una xarxa social de músics. Tot el que graves puja als seus servidors: l’etiqueta de l’App Store confirma que el contingut de la persona usuària —fotos, vídeos i àudio— queda vinculat a la identitat. La política designa un delegat de protecció de dades amb nom i cognoms, però no ofereix cap camí d’autoservei per tancar el compte: cal escriure-li. Les dades viatgen a Singapur i als Estats Units i la política no cita cap mecanisme concret de transferència.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Singapur',
      userBase: 'No n’hem verificat cap xifra oficial.',
      links: {
        website: 'https://www.bandlab.com/',
        privacyPolicy: 'https://bandlabtechnologies.com/policies/bandlab-privacy-policy/',
        appStore: 'https://apps.apple.com/es/app/id968585775',
      },
      accountRequired: f('yes', 'official', ['bandlab-privacy-policy'], 'Cal registrar-se amb nom, correu i contrasenya o amb una identitat de xarxa social.'),
      openSource: f('no', 'editorial', [], 'No hi ha cap repositori públic del servei.', { licence: 'Privativa' }),
      dataSummary:
        'Un projecte musical inacabat és material molt personal: la veu, l’assaig, la lletra a mig fer. BandLab en guarda l’àudio vinculat a la identitat, i hi suma data de naixement, gènere, ubicació de perfil i la xarxa de qui col·labora amb qui, que dibuixa un mapa social del món amateur de la música.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bandlab-privacy-policy', 'bandlab-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['bandlab-privacy-policy', 'bandlab-app-store'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bandlab-app-store'] }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['bandlab-privacy-policy'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['compliment-legal', 'personalitzacio-de-continguts'], sources: ['bandlab-privacy-policy'] }),
        row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts'], sources: ['bandlab-privacy-policy'] }),
        row('ubicacio-aproximada', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts'], sources: ['bandlab-privacy-policy'], note: 'Camp de localització del perfil públic.' }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bandlab-app-store', 'bandlab-privacy-policy'], note: 'Les pistes gravades es guarden al núvol i, si el projecte és públic, es difonen.' }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bandlab-app-store'] }),
        row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['bandlab-privacy-policy'] }),
        row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['bandlab-privacy-policy'], note: 'Seguidors, col·laboracions i el servei Fan Reach.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['bandlab-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['bandlab-app-store', 'bandlab-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['bandlab-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['bandlab-privacy-policy'], note: 'La política cita Google Analytics.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['bandlab-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['bandlab-app-store'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bandlab-privacy-policy'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['bandlab-app-store'], 'L’etiqueta declara els identificadors com a dades utilitzades per rastrejar en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['bandlab-app-store', 'bandlab-privacy-policy']),
        thirdPartyTrackersPresent: f('yes', 'official', ['bandlab-privacy-policy'], 'La política cita eines d’analítica de tercers, entre elles Google Analytics, i anunciants.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['bandlab-privacy-policy'], 'La publicitat figura entre les finalitats del tractament.'),
        profiling: f('yes', 'official', ['bandlab-privacy-policy'], 'Personalització del contingut i recomanacions a partir de l’activitat.'),
        aiTraining: unknown('BandLab ofereix eines generatives, però la política no diu si el contingut pujat serveix per entrenar models. És el buit més rellevant de la fitxa.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['bandlab-privacy-policy'], 'Proveïdors de serveis, anunciants, plataformes d’analítica i difusió pública del contingut.'),
        intraGroupSharing: f('yes', 'official', ['bandlab-privacy-policy'], 'Compartició amb les entitats relacionades del grup BandLab Technologies.'),
        dataBrokerSales: unknown('La política no esmenta la venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['bandlab-privacy-policy'], 'Servidors a Singapur i als Estats Units; la política parla de garanties «d’acord amb la normativa aplicable» sense concretar-ne cap.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['bandlab-privacy-policy'], 'La política només diu que les dades es conserven mentre sigui «raonable» suposar que calen; no hi ha cap termini.'),
        dataAfterDeletion: f('partial', 'official', ['bandlab-privacy-policy'], 'Reconeix que el contingut eliminat pot romandre en pàgines a la memòria cau o arxivades.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['bandlab-privacy-policy']),
        selfService: f('no', 'official', ['bandlab-privacy-policy'], 'La política remet a contactar amb el delegat de protecció de dades; no descriu cap botó d’eliminació.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Descarrega abans els projectes que vulguis conservar: en tancar el compte perds l’accés a l’estudi.',
          'Escriu a privacy@bandlab.com des de l’adreça del compte i demana la supressió a l’empara de l’article 17 del RGPD.',
          'Indica el nom d’usuari i confirma que vols eliminar també el contingut publicat.',
          'Guarda la confirmació; el contingut ja republicat o desat en memòria cau pot continuar accessible.',
        ],
        obstacles:
          'Que una plataforma amb milions de comptes gratuïts derivi cada baixa a una bústia de correu converteix un tràmit ordinari en l’exercici formal d’un dret.',
        dataRetained: 'Contingut a la memòria cau o arxivat per tercers, segons reconeix la mateixa política.',
        sources: ['bandlab-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['bandlab-privacy-policy'], 'El dret de portabilitat es reconeix per a les persones de l’Espai Econòmic Europeu i del Regne Unit, però s’exerceix per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['bandlab-privacy-policy'], 'Delegat de protecció de dades designat amb nom i adreça de contacte.', {
          url: 'mailto:privacy@bandlab.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('No hem trobat cap control per desactivar la publicitat personalitzada.'),
        telemetryOptOut: unknown('No hem trobat cap control d’analítica.'),
        granularControls: f('partial', 'official', ['bandlab-privacy-policy'], 'Es pot triar si un projecte és públic o privat, però no hi ha controls per finalitat de tractament.'),
        defaultPosture: 'mixed',
        darkPatterns: f('yes', 'editorial', ['bandlab-privacy-policy'], 'L’absència de baixa autoservei en un servei de consum massiu és, en si mateixa, una barrera de sortida.'),
        darkPatternList: [
          {
            type: 'hidden-exit',
            severity: 'high',
            description:
              'Eliminar el compte exigeix escriure al delegat de protecció de dades; la política no descriu cap opció dins de l’aplicació ni del web.',
            sources: ['bandlab-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: f('no', 'official', ['bandlab-privacy-policy'], 'L’edició col·laborativa al núvol requereix que el servei pugui llegir les pistes.'),
        transportEncryption: unknown('No hem trobat documentació tècnica pública.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('La política no descriu cap segon factor d’autenticació.'),
        independentAudits: unknown('No consten auditories publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hi ha cap canal públic de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política es publica al domini corporatiu del grup i no al del producte, cosa que dificulta trobar-la. La pregunta sobre l’entrenament de models amb l’àudio pujat queda oberta i és rellevant perquè el servei incorpora eines generatives.',
        openQuestions: [
          'El contingut d’àudio pujat s’utilitza per entrenar les funcions generatives de BandLab?',
          'Quin mecanisme empara les transferències a Singapur i als Estats Units?',
        ],
      },
    },

    /* ═══════════════════════════ JBL Headphones ═══════════════════════════ */
    {
      slug: 'jbl-headphones',
      name: 'JBL Headphones',
      company: 'harman-international',
      categories: ['utilitats', 'musica-i-audio'],
      tagline: 'Una etiqueta de privadesa sorprenentment buida per a una aplicació d’un grup de Samsung',
      summary:
        'JBL Headphones configura els auriculars de la marca: equalització, cancel·lació de soroll i actualitzacions de microprogramari. L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar ni cap dada vinculada a la identitat; només dades d’ús, interacció amb el producte i diagnòstics sense vincular. És una posició poc habitual en una aplicació de fabricant. El contrapès és documental: la política de privadesa aplicable és la corporativa de Harman —filial de Samsung Electronics des del 2017— i no una política específica del producte, de manera que costa saber què hi diu exactament sobre aquesta aplicació.',
      platforms: ['ios', 'android'],
      businessModel: 'unknown',
      jurisdiction: 'Estats Units, dins del grup Samsung',
      userBase: 'No n’hem verificat cap xifra oficial.',
      links: {
        website: 'https://www.jbl.com/',
        privacyPolicy: 'https://www.harman.com/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id1053136947',
      },
      accountRequired: unknown('No hem pogut verificar amb una font oficial si cal compte per a les funcions bàsiques de configuració dels auriculars.'),
      openSource: f('no', 'editorial', [], 'No hi ha cap repositori públic.', { licence: 'Privativa' }),
      dataSummary:
        'Tal com està declarada, l’aplicació revela sobretot quin model d’auriculars tens i com el fas servir. El risc no és el perfil publicitari sinó l’encaix dins d’un grup, Samsung, que ja té molta informació del mateix dispositiu per altres vies.',
      dataCollection: [
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['jbl-headphones-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['jbl-headphones-app-store'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['jbl-headphones-app-store'], note: 'Model i estat dels auriculars, necessaris per a la configuració i el microprogramari.' }),
        row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['jbl-headphones-app-store'], note: 'L’etiqueta no declara cap dada utilitzada per rastrejar.' }),
        row('ubicacio-precisa', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', level: 'unknown', note: 'L’aplicació demana permisos de Bluetooth, que a iOS poden implicar ubicació aproximada, però l’etiqueta no en declara cap recollida.' }),
        row('adreca-electronica', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', level: 'unknown', note: 'No hem pogut verificar si el registre és opcional o necessari.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['jbl-headphones-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar-te en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['jbl-headphones-app-store']),
        thirdPartyTrackersPresent: unknown('L’etiqueta no en declara, però no hem trobat cap anàlisi tècnica que ho confirmi.'),
      },
      dataUses: {
        targetedAdvertising: unknown('La política corporativa de Harman és genèrica i no detalla el tractament d’aquesta aplicació.'),
        profiling: unknown('No consta informació específica del producte.'),
        aiTraining: unknown('No consta informació pública.'),
      },
      sharing: {
        thirdPartySharing: unknown('La pàgina de privadesa de Harman no detalla els destinataris.'),
        intraGroupSharing: f('partial', 'official', ['harman-privacy-policy'], 'Harman es presenta com a filial participada al cent per cent per Samsung; la pàgina no detalla, però, quins fluxos de dades hi ha entre les dues companyies.'),
        dataBrokerSales: unknown('No consta informació pública.'),
        internationalTransfers: unknown('La pàgina de privadesa consultada no descriu el mecanisme de transferència.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència de Harman.'),
      },
      retention: {
        definedPeriods: unknown('La pàgina consultada no fixa cap termini.'),
        dataAfterDeletion: unknown('No consta informació pública.'),
      },
      accountDeletion: {
        possible: unknown('No hem trobat cap pàgina d’ajuda que descrigui la supressió del compte de l’aplicació.'),
        selfService: unknown('No consta informació pública.'),
        difficulty: 'unknown',
        obstacles:
          'La pàgina pública de privadesa de Harman és una introducció que remet a un avís complet que no hem pogut recuperar; les URL alternatives que hem provat retornen error.',
      },
      userRights: {
        dataExport: unknown('No hem trobat cap eina ni cap descripció del procediment.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['harman-privacy-policy'], 'Hi ha una adreça de privadesa corporativa, però no un formulari específic per a l’aplicació ni una autoritat de control europea identificada.', {
          url: 'mailto:privacy@harman.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('No consta cap control dins de l’aplicació.'),
        telemetryOptOut: unknown('No hem pogut verificar si l’analítica es pot desactivar.'),
        granularControls: unknown('No consta informació pública.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem pogut examinar el flux de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('L’aplicació configura un dispositiu Bluetooth; no transporta comunicacions privades.'),
        transportEncryption: unknown('No hem trobat documentació tècnica pública.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('No consta informació pública.'),
        independentAudits: unknown('No consten auditories publicades d’aquesta aplicació.'),
        bugBounty: unknown('No hem pogut confirmar si el programa de recompenses de Samsung cobreix les aplicacions de Harman.'),
        vulnerabilityDisclosure: unknown('No hem trobat cap security.txt ni canal específic de Harman.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'L’única font primària sòlida és l’etiqueta de l’App Store, que declara molt poc. La pàgina de privadesa de Harman és una portada que remet a un avís complet que no hem pogut recuperar en cap de les URL provades. Cal tornar-hi abans de convertir els «unknown» en afirmacions.',
        openQuestions: [
          'Quina és la URL vigent de l’avís de privadesa complet de Harman i quina entitat europea hi figura com a responsable?',
          'Cal compte per configurar els auriculars o només per a funcions accessòries?',
          'El programa de recompenses de Samsung cobreix les aplicacions de les marques de Harman?',
        ],
      },
    },

    /* ═══════════════════════════ Clear wave ═══════════════════════════ */
    {
      slug: 'clear-wave',
      name: 'Clear wave | Water Eject',
      company: 'appchi',
      categories: ['utilitats', 'musica-i-audio'],
      tagline: 'Expulsar aigua de l’altaveu per 69,99 euros l’any, amb rastreig declarat i una política que ignora el RGPD',
      summary:
        'Clear wave emet tons per expulsar l’aigua de l’altaveu i mesura decibels. És una funció que un telèfon pot fer sense connexió i sense compte, però l’etiqueta de l’App Store declara identificadors i diagnòstics com a dades utilitzades per rastrejar-te en aplicacions i webs d’altres empreses. La política de privadesa d’Appchi és una plantilla de mig full que no indica el domicili del responsable, no esmenta ni el RGPD ni la Unió Europea, no fixa terminis de conservació i no descriu cap dret de l’interessat. Al damunt, les subscripcions arriben als 69,99 euros.',
      platforms: ['ios'],
      businessModel: 'subscription',
      jurisdiction: 'No declarada a la política',
      userBase: 'No n’hem verificat cap xifra oficial.',
      links: {
        website: 'https://appchi.org/',
        privacyPolicy: 'https://appchi.org/privacy-policy',
        terms: 'https://appchi.org/terms-of-use',
        appStore: 'https://apps.apple.com/es/app/id1557211189',
      },
      accountRequired: f('no', 'editorial', [], 'Ni la política ni la fitxa de l’App Store descriuen cap registre: la funció és local i es monetitza amb subscripcions de l’App Store.'),
      openSource: f('no', 'editorial', [], 'No hi ha cap repositori públic.', { licence: 'Privativa' }),
      dataSummary:
        'La utilitat en si no revela gaire, però l’identificador que se’n treu sí: serveix per reconèixer el mateix telèfon en altres aplicacions i webs. És el patró clàssic d’una utilitat trivial que val més com a punt de recollida d’identificadors i com a canal de subscripcions que com a eina.',
      dataCollection: [
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['clear-wave-app-store'], note: 'L’etiqueta el declara utilitzat per rastrejar i per al màrqueting del desenvolupador.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['clear-wave-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['appchi-privacy-policy'], note: 'La política esmenta el registre de l’adreça IP, el nom del dispositiu i la versió del sistema operatiu.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['appchi-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['appchi-privacy-policy'], note: 'La política reconeix galetes de tercers.' }),
        row('veu-i-audio', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', level: 'unknown', note: 'El mesurador de decibels necessita el micròfon, però ni l’etiqueta ni la política declaren cap recollida d’àudio.' }),
        row('dades-de-pagament', 'optional', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['clear-wave-app-store'], note: 'Les subscripcions es gestionen a través de l’App Store.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['clear-wave-app-store'], 'Identificadors i diagnòstics declarats com a dades utilitzades per rastrejar.'),
        advertisingIdentifiers: f('yes', 'official', ['clear-wave-app-store']),
        thirdPartyTrackersPresent: f('yes', 'official', ['appchi-privacy-policy'], 'La política reconeix l’ús de productes de tercers per recollir dades de registre i galetes de tercers, sense citar-ne cap pel nom.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['clear-wave-app-store'], 'L’etiqueta declara l’identificador del dispositiu per a «màrqueting del desenvolupador»; no consta publicitat de tercers dins de l’aplicació.'),
        profiling: unknown('La política no descriu cap perfilat.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['appchi-privacy-policy'], 'Empreses terceres que «faciliten el servei», sense identificar-les.'),
        intraGroupSharing: unknown('No consta cap grup empresarial.'),
        dataBrokerSales: unknown('La política no esmenta la venda de dades.'),
        internationalTransfers: unknown('La política no descriu on es tracten les dades ni amb quin mecanisme.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['appchi-privacy-policy'], 'La política no fixa cap termini de conservació.'),
        dataAfterDeletion: unknown('La política no descriu cap procediment de supressió.'),
      },
      accountDeletion: {
        possible: na('No hi ha compte que eliminar: l’aplicació funciona sense registre i la subscripció es gestiona des de l’App Store.'),
        selfService: na('No hi ha compte.'),
        difficulty: 'unknown',
        steps: [
          'Per aturar el cobrament, obre Ajustos, toca el teu nom, entra a Subscripcions i cancel·la Clear wave.',
          'Per aturar el rastreig, desactiva el seguiment a Ajustos, Privadesa i seguretat, Seguiment.',
          'Per demanar la supressió de les dades de registre, escriu a support@appchi.org: la política no preveu cap altre canal.',
        ],
        obstacles:
          'La política no reconeix cap dret de supressió ni cap termini de resposta, de manera que una sol·licitud a l’empara del RGPD depèn de la bona voluntat del desenvolupador.',
        sources: ['appchi-privacy-policy'],
      },
      userRights: {
        dataExport: f('no', 'official', ['appchi-privacy-policy'], 'La política no preveu cap dret d’accés ni de portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('no', 'official', ['appchi-privacy-policy'], 'No s’esmenta el RGPD, no es designa cap representant a la Unió Europea i no hi ha cap canal de drets més enllà de l’adreça de suport.'),
      },
      controls: {
        adPersonalizationOptOut: f('no', 'official', ['appchi-privacy-policy'], 'No hi ha cap control dins de l’aplicació; només queda el commutador de seguiment d’iOS.'),
        telemetryOptOut: f('no', 'official', ['appchi-privacy-policy']),
        granularControls: f('no', 'official', ['appchi-privacy-policy']),
        defaultPosture: 'permissive',
        darkPatterns: f('yes', 'editorial', ['clear-wave-app-store'], 'Una funció que el sistema operatiu pot fer sola es monetitza amb subscripcions setmanals de 9,99 euros i anuals de 49,99, un patró de preu dissenyat perquè la comparació resulti difícil.'),
        darkPatternList: [
          {
            type: 'other',
            severity: 'medium',
            description:
              'Escala de subscripcions de 9,99 euros setmanals a 69,99 de per vida per a una utilitat que emet tons, amb un preu setmanal que en un any multiplica per deu el preu anual.',
            sources: ['clear-wave-app-store'],
          },
        ],
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions.'),
        transportEncryption: unknown('No hem trobat documentació tècnica pública.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: na('No hi ha compte ni autenticació.'),
        independentAudits: unknown('No consten auditories publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hi ha cap canal públic de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La fitxa és breu perquè el servei és breu, però el que s’hi documenta és rellevant: una política de plantilla que ignora el RGPD en una aplicació que ocupa posicions altes del top gratuït espanyol.',
        openQuestions: [
          'On està establert Appchi LLC i qui hi figura com a responsable del tractament?',
          'Quins proveïdors de tercers recullen les dades de registre? La política no en cita cap.',
        ],
      },
    },

    /* ═══════════════════════════ Demus ═══════════════════════════ */
    {
      slug: 'demus',
      name: 'Demus',
      company: 'simon-zvara',
      categories: ['musica-i-audio'],
      tagline: 'Un reproductor de desenvolupador individual amb rastreig declarat i una política que no esmenta el RGPD',
      summary:
        'Demus és un reproductor de música publicat per un desenvolupador individual, amb llistes, sincronització entre dispositius i estadístiques anuals. L’etiqueta de l’App Store declara que els diagnòstics s’utilitzen per rastrejar-te en aplicacions i webs d’altres empreses i que els identificadors i els diagnòstics queden vinculats a la identitat per a publicitat de tercers i analítica. La política enllaçada des de la fitxa és una plantilla que no identifica clarament el responsable, no cita cap proveïdor i no esmenta ni el RGPD ni la Unió Europea.',
      platforms: ['ios'],
      businessModel: 'subscription',
      jurisdiction: 'No declarada',
      userBase: 'No n’hem verificat cap xifra oficial.',
      links: {
        website: 'https://demusapp.com/',
        privacyPolicy: 'https://demusapp.com/privacy.html',
        appStore: 'https://apps.apple.com/es/app/id6474685600',
      },
      accountRequired: unknown('La descripció esmenta sincronització entre dispositius, cosa que suggereix un compte, però no ho hem pogut verificar amb cap font oficial.'),
      openSource: f('no', 'editorial', [], 'No hi ha cap repositori públic.', { licence: 'Privativa' }),
      dataSummary:
        'Un reproductor sap què escoltes, quan i quantes vegades. Declarat com està, el senyal que surt de Demus és sobretot publicitari: un identificador vinculat a la identitat i cedit a xarxes de tercers, sense cap document que expliqui a qui ni per quant temps.',
      dataCollection: [
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['demus-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['demus-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte', 'mesura-i-analisi-dus'], sources: ['demus-app-store'] }),
        row('historial-de-visualitzacio', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', level: 'unknown', note: 'L’aplicació ofereix estadístiques anuals d’escolta, però cap font declara com es tracta aquest historial.' }),
        row('dades-de-pagament', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['demus-app-store'], note: 'Compres dins de l’aplicació gestionades per l’App Store.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['demus-app-store'], 'Els diagnòstics figuren com a dades utilitzades per rastrejar en aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['demus-app-store'], 'L’etiqueta declara identificadors vinculats a la identitat per a publicitat de tercers.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['demus-app-store'], 'La categoria «publicitat de tercers» implica SDK publicitaris, tot i que la política no en cita cap.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['demus-app-store']),
        profiling: unknown('Cap font descriu l’elaboració de perfils.'),
        aiTraining: unknown('Cap font esmenta l’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['demus-app-store'], 'La categoria de publicitat de tercers de l’etiqueta implica compartició, però la política no identifica els destinataris.'),
        intraGroupSharing: na('No consta cap grup empresarial: el desenvolupador és una persona física.'),
        dataBrokerSales: unknown('Cap font ho esmenta.'),
        internationalTransfers: unknown('La política no descriu on es tracten les dades.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['demus-privacy-policy'], 'La política no fixa cap termini.'),
        dataAfterDeletion: unknown('La política no descriu cap procediment de supressió.'),
      },
      accountDeletion: {
        possible: unknown('No hem trobat cap pàgina ni cap secció de la política que descrigui com eliminar el compte.'),
        selfService: unknown('No consta informació pública.'),
        difficulty: 'unknown',
        obstacles:
          'La política enllaçada des de l’App Store no preveu cap canal de drets ni cap adreça de contacte de protecció de dades.',
      },
      userRights: {
        dataExport: unknown('Cap font descriu l’exportació de dades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('no', 'official', ['demus-privacy-policy'], 'La política no esmenta el RGPD, no designa cap representant a la Unió Europea i no ofereix cap canal específic de drets.'),
      },
      controls: {
        adPersonalizationOptOut: unknown('Cap font descriu controls de publicitat.'),
        telemetryOptOut: unknown('Cap font descriu controls d’analítica.'),
        granularControls: unknown('Cap font descriu un panell de privadesa.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem pogut examinar el flux de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades.'),
        transportEncryption: unknown('No hem trobat documentació tècnica pública.'),
        atRestEncryption: unknown('No consta informació pública.'),
        mfa: unknown('No consta informació pública.'),
        independentAudits: unknown('No consten auditories publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hi ha cap canal públic de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'L’única font sòlida és l’etiqueta de l’App Store. La política del producte no es deixa llegir amb claredat i no aporta informació verificable sobre responsable, destinataris ni terminis, de manera que la majoria d’apartats queden com a desconeguts.',
        openQuestions: [
          'Qui és el responsable del tractament i en quin país està establert?',
          'D’on surt la música que reprodueix l’aplicació i quines dades s’envien a aquesta font?',
          'Quins SDK publicitaris incorpora? L’etiqueta declara publicitat de tercers però la política no cita cap proveïdor.',
        ],
      },
    },

    /* ═══════════════════════════ Meulify ═══════════════════════════ */
    {
      slug: 'meulify',
      name: 'Meulify',
      company: 'meulen-cirillo-veltri',
      categories: ['musica-i-audio'],
      tagline: 'Reprodueix des de YouTube, desa l’historial a Supabase i l’envia a dues xarxes publicitàries',
      summary:
        'Meulify és un reproductor de desenvolupador individual que combina reproducció en línia, ràdio, podcasts i importació de fitxers locals. La seva política, tot i ser breu, és insòlitament concreta: cita Supabase com a rerefons, YouTube com a origen de la reproducció i ironSource i Unity Ads com a xarxes publicitàries, i reconeix que l’historial d’escolta s’utilitza per entrenar el sistema de recomanacions. També diu que el compte s’elimina des de la mateixa aplicació. El que hi falta és qualsevol referència al RGPD, al responsable del tractament o als terminis.',
      platforms: ['ios'],
      businessModel: 'advertising',
      jurisdiction: 'No declarada',
      userBase: 'No n’hem verificat cap xifra oficial.',
      links: {
        website: 'https://meulify.top/',
        privacyPolicy: 'https://meulify.top/privacy.html',
        appStore: 'https://apps.apple.com/es/app/id6754177031',
      },
      accountRequired: f('yes', 'official', ['meulify-privacy-policy'], 'La política descriu l’autenticació de persones usuàries i un identificador d’usuari propi.'),
      openSource: f('no', 'editorial', [], 'No hi ha cap repositori públic.', { licence: 'Privativa' }),
      dataSummary:
        'L’historial d’escolta i de cerca amb marca de temps, desat a un rerefons de tercers i lligat a un identificador d’usuari, és un diari d’hàbits: hores de son, rutines de desplaçament i estat d’ànim. Que la reproducció passi per YouTube hi afegeix un segon destinatari amb els seus propis identificadors.',
      dataCollection: [
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['meulify-privacy-policy', 'meulify-app-store'], note: 'Identificador UUID desat a Supabase.' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['meulify-app-store'], note: 'Nom d’usuari, segons la política.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['meulify-app-store'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'personalitzacio-de-continguts'], sources: ['meulify-privacy-policy', 'meulify-app-store'] }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['recomanacions-algoritmiques'], sources: ['meulify-privacy-policy'], note: 'Cançons escoltades amb marca de temps; la política diu que serveixen per entrenar el sistema de recomanacions.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['meulify-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['meulify-app-store', 'meulify-privacy-policy'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['meulify-privacy-policy'], note: 'Cedit a ironSource i a Unity Ads si s’accepten anuncis.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['meulify-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['meulify-app-store'] }),
        row('fitxers-i-documents', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['meulify-privacy-policy'], note: 'L’aplicació permet importar fitxers MP3 locals; la política no descriu que es pugin al servidor.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['meulify-app-store'], 'Ubicació, identificadors, dades d’ús i «otros datos» declarats com a dades utilitzades per rastrejar.'),
        advertisingIdentifiers: f('yes', 'official', ['meulify-privacy-policy', 'meulify-app-store']),
        thirdPartyTrackersPresent: f('yes', 'official', ['meulify-privacy-policy'], 'La política cita ironSource i Unity Ads com a xarxes publicitàries, i YouTube per a la reproducció.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['meulify-privacy-policy'], 'Anuncis personalitzats si la persona usuària opta per veure’n.'),
        profiling: f('yes', 'official', ['meulify-privacy-policy'], 'L’historial d’escolta alimenta el sistema de recomanacions.'),
        aiTraining: f('partial', 'official', ['meulify-privacy-policy'], 'La política diu que les dades serveixen per «entrenar» el sistema de recomanacions; no consta cap model generatiu.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['meulify-privacy-policy'], 'Supabase com a rerefons, YouTube per a la reproducció i ironSource i Unity Ads per a la publicitat.'),
        intraGroupSharing: na('No consta cap grup empresarial: el desenvolupador és una persona física.'),
        dataBrokerSales: unknown('La política no esmenta la venda de dades.'),
        internationalTransfers: f('partial', 'official', ['meulify-privacy-policy'], 'Els proveïdors citats són nord-americans, però la política no descriu cap mecanisme de transferència.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['meulify-privacy-policy'], 'Les dades es conserven mentre el compte és actiu i se suprimeixen en eliminar-lo, però no hi ha cap termini concret.'),
        dataAfterDeletion: f('partial', 'official', ['meulify-privacy-policy'], 'La política afirma que les dades se suprimeixen amb el compte, sense detallar què passa amb les còpies dels socis publicitaris.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['meulify-privacy-policy']),
        selfService: f('yes', 'official', ['meulify-privacy-policy'], 'La política diu literalment que la persona usuària pot eliminar el compte de manera autònoma des de la mateixa aplicació.'),
        difficulty: 'easy',
        steps: [
          'Obre l’aplicació i entra al perfil o a la configuració del compte.',
          'Tria l’opció d’eliminar el compte i confirma-la.',
          'Si has activat els anuncis, revoca també el seguiment a Ajustos, Privadesa i seguretat, Seguiment: les dades ja cedides a ironSource i a Unity Ads no depenen del compte.',
        ],
        dataRetained: 'La política no descriu què conserven els proveïdors publicitaris després de la baixa.',
        sources: ['meulify-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política no preveu cap exportació de dades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('no', 'official', ['meulify-privacy-policy'], 'No s’esmenta el RGPD ni cap dret d’accés, rectificació o oposició, i no es designa cap representant a la Unió Europea.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['meulify-privacy-policy'], 'La política presenta els anuncis com a opcionals: si no s’hi opta, no s’envien dades a les xarxes publicitàries.'),
        telemetryOptOut: unknown('La política no descriu cap control d’analítica.'),
        granularControls: unknown('No hem pogut verificar quins controls ofereix l’aplicació.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem pogut examinar el flux de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions privades.'),
        transportEncryption: unknown('No hem trobat documentació tècnica pública.'),
        atRestEncryption: unknown('La política no descriu la configuració de Supabase.'),
        mfa: unknown('La política no descriu cap segon factor d’autenticació.'),
        independentAudits: unknown('No consten auditories publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hi ha cap canal públic de comunicació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'spotify',
          comparability: 'equivalent',
          rationale: 'Reproductor amb llicències pròpies, responsable identificat a la Unió Europea i eina d’exportació de dades autoservei.',
          tradeOffs: 'No permet importar fitxers locals amb la mateixa facilitat i el servei gratuït també és publicitari.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'És una política curiosa: tècnicament més transparent que moltes de grans empreses —cita els proveïdors pel nom— i alhora jurídicament buida, perquè no identifica el responsable ni esmenta cap dret. Que la reproducció passi per YouTube planteja també dubtes sobre les condicions d’ús d’aquell servei.',
        openQuestions: [
          'Qui és el responsable del tractament i en quin país està establert?',
          'Amb quina base jurídica reprodueix contingut de YouTube i quines dades hi envia?',
        ],
      },
    },
  ],
  incidents: [
    {
      slug: 'soundcloud-2025-account-data-breach',
      title: 'Filtració de dades de 29,8 milions de comptes de SoundCloud',
      type: 'breach',
      severity: 'high',
      apps: ['soundcloud'],
      company: 'soundcloud-global',
      occurredAt: '2025-12-15',
      disclosedAt: '2026-01-27',
      description:
        'El 15 de desembre del 2025 SoundCloud va detectar activitat no autoritzada en un tauler de control d’un servei auxiliar i, tot seguit, va patir atacs de denegació de servei que van tombar temporalment la disponibilitat del web. La companyia va comunicar que les dades afectades eren adreces de correu i informació ja visible als perfils públics, d’aproximadament un 20 % dels comptes, i que no s’havien compromès dades financeres ni contrasenyes. El gener del 2026 el grup atacant va passar a l’extorsió i va publicar les dades. Have I Been Pwned va registrar la filtració el 27 de gener del 2026 amb 29.815.722 comptes, amb correu, nom, nom d’usuari, avatar i estadístiques de perfil. SoundCloud va tancar la investigació el febrer del 2026 confirmant que no s’havien sostret dades sensibles.',
      affectedPeople: '29.815.722 comptes, aproximadament un 20 % del total segons la companyia',
      sources: ['soundcloud-breach-statement', 'soundcloud-hibp'],
    },
    {
      slug: 'mytuner-xmode-location-broker',
      title: 'myTuner Radio va documentar la cessió d’ubicació precisa a X-Mode Social, corredor de dades sancionat després per l’FTC',
      type: 'misuse',
      severity: 'high',
      apps: ['mytuner-radio'],
      company: 'appgeneration-software',
      occurredAt: '2020-06-23',
      disclosedAt: '2024-01-09',
      description:
        'La pàgina «Third Party Data Recipients» de myTuner Radio, amb data del 23 de juny del 2020, detalla que l’aplicació comparteix amb X-Mode Social la ubicació precisa per GPS, els senyals relatius de wifi i Bluetooth, l’identificador publicitari i les característiques del dispositiu, també quan l’aplicació funciona en segon pla. El 9 de gener del 2024 la Federal Trade Commission va aprovar una ordre que prohibeix a X-Mode Social i a la seva successora Outlogic vendre o compartir dades sensibles d’ubicació, recollides en bona part mitjançant SDK incrustats en aplicacions de tercers, perquè permetien rastrejar visites a clíniques, llocs de culte i centres d’acollida sense consentiment informat. La política vigent de myTuner continua citant Outlogic entre els seus socis d’anàlisi d’ubicació.',
      regulatory: {
        authority: 'Federal Trade Commission',
        status: 'final',
      },
      sources: ['mytuner-third-party-recipients', 'mytuner-ftc-xmode-order', 'mytuner-privacy-policy'],
    },
  ],
  storeIds: {
    soundcloud: 'com.soundcloud.TouchApp',
    dice: 'fm.dice.Dice',
    'mytuner-radio': 'mobi.digitalminds.itunerfree',
    guitartuna: 'com.ovelin.guitartuna',
    audiomack: 'com.audiomack.iphone',
    bandlab: 'com.bandlab.bandlab.iphone',
    'jbl-headphones': 'com.jbl.Headphones',
    'clear-wave': 'com.soundmoji.app',
    demus: 'com.demusapp.app',
    meulify: 'top.meulify.app',
  },
}
