import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/**
 * Lot 22: edició de foto i vídeo, retransmissió en directe i lectura.
 *
 * El fil comú és el contingut que hi posem: fotografies, cares, vídeos i
 * lectures. Durant la documentació d’aquest lot, l’App Store d’Espanya va
 * respondre amb un error 429 a totes les peticions, de manera que l’etiqueta
 * de privadesa d’Apple no s’ha pogut consultar. La matriu de dades es basa en
 * les polítiques de privadesa i, quan n’hi ha, en la fitxa «Seguretat de los
 * datos» de Google Play, que el mateix desenvolupador declara.
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'appostrophe',
      name: 'Appostrophe',
      legalName: 'Appostrophe AB',
      description:
        'Empresa sueca que desenvolupa SCRL, una aplicació de collages i carrusels per a xarxes socials.',
      headquartersCountry: 'SE',
      euEstablishment: 'Appostrophe AB, Estocolm (Suècia), número d’organització 559065-5048',
      leadSupervisoryAuthority: 'imy-se',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://scrl.com',
      productDomains: ['scrl.com', 'scrl.app'],
      privacyContact: 'scrl@appostrophe.com',
    },
    {
      slug: 'planetart',
      name: 'PlanetArt',
      legalName: 'PlanetArt, LLC',
      description:
        'Grup nord-americà de productes fotogràfics personalitzats. Opera FreePrints, FreePrints Photobooks, Personal Creations i CaféPress.',
      headquartersCountry: 'US',
      euEstablishment: 'Sense establiment propi a la Unió Europea: ha designat representants a l’empara de l’article 27 del RGPD (ITG EU i GRCI Law) i allotja les dades europees a servidors d’AWS a Irlanda.',
      ownership: 'private',
      primaryRevenueModel: 'commerce',
      website: 'https://www.freeprintsapp.es',
      productDomains: ['freeprintsapp.es', 'freeprintsapp.com', 'cafepress.com'],
      privacyContact: 'privacyeu@pallcprivacy.com',
    },
    {
      slug: 'glam-labs',
      name: 'Glam Labs',
      legalName: 'Glam Labs, Inc.',
      description:
        'Empresa de San Francisco que desenvolupa Glam AI, una aplicació d’edició i generació d’imatges amb models entrenats a partir de la cara de cada persona.',
      headquartersCountry: 'US',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://getglam.app/',
      productDomains: ['getglam.app'],
    },
    {
      slug: 'picsart',
      name: 'Picsart',
      legalName: 'PicsArt, Inc.',
      description:
        'Empresa nord-americana d’edició d’imatge i generació amb intel·ligència artificial, amb una xarxa social pública de creacions integrada dins de l’aplicació.',
      headquartersCountry: 'US',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://picsart.com',
      productDomains: ['picsart.com'],
      privacyContact: 'privacy@picsart.com',
    },
    {
      slug: 'faceapp-technology',
      name: 'FaceApp Technology',
      legalName: 'FaceApp Technology Limited',
      description:
        'Societat xipriota responsable de FaceApp, l’editor de retrats amb filtres d’envelliment, canvi de gènere i somriure. El desenvolupament original prové de l’empresa russa Wireless Lab.',
      headquartersCountry: 'CY',
      euEstablishment: 'FaceApp Technology Limited, Limassol (Xipre)',
      leadSupervisoryAuthority: 'cpdp-cy',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.faceapp.com',
      productDomains: ['faceapp.com'],
      privacyContact: 'dpo@faceapp.com',
    },
    {
      slug: 'kick-streaming',
      name: 'Kick',
      legalName: 'Kick Streaming Pty Ltd',
      description:
        'Plataforma australiana de retransmissió en directe, coneguda pel repartiment del 95 % dels ingressos de subscripció amb qui crea i per una moderació més permissiva que la de la competència.',
      headquartersCountry: 'AU',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://kick.com',
      productDomains: ['kick.com'],
    },
    {
      slug: 'shantanu-pte',
      name: 'Shantanu',
      legalName: 'SHANTANU PTE. LTD.',
      description:
        'Societat singapuresa que publica InShot i la resta d’aplicacions d’edició del grup InShot Inc.',
      headquartersCountry: 'SG',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://inshot.cc',
      productDomains: ['inshot.cc', 'inshot.com'],
      privacyContact: 'contactus@inshot.com',
    },
    {
      slug: 'seiko-epson',
      name: 'Seiko Epson',
      legalName: 'Seiko Epson Corporation',
      description:
        'Fabricant japonès d’impressores, escàners i projectors. Publica les aplicacions mòbils que controlen els seus aparells.',
      headquartersCountry: 'JP',
      ownership: 'public',
      primaryRevenueModel: 'hardware',
      website: 'https://www.epson.com',
      productDomains: ['epson.com', 'epson.eu', 'epson.es'],
    },
    {
      slug: 'epson-europe',
      name: 'Epson Europe',
      legalName: 'Epson Europe B.V.',
      parent: 'seiko-epson',
      description:
        'Filial europea del grup Epson, amb seu a Amsterdam. És la responsable del tractament de les dades de les persones usuàries europees.',
      headquartersCountry: 'NL',
      euEstablishment: 'Epson Europe B.V., Amsterdam (Països Baixos)',
      leadSupervisoryAuthority: 'ap-nl',
      ownership: 'subsidiary',
      primaryRevenueModel: 'hardware',
      website: 'https://www.epson.eu',
      privacyContact: 'edpo@epson.eu',
    },
    {
      slug: 'marc-canet-dev',
      name: 'Marc Canet',
      description:
        'Desenvolupador independent de Mistbook, una aplicació de seguiment de lectures publicada a títol personal a l’App Store.',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://mistbook.app',
      productDomains: ['mistbook.app'],
    },
    {
      slug: 'wattpad-corp',
      name: 'Wattpad',
      legalName: 'Wattpad Corp.',
      description:
        'Empresa canadenca que opera la plataforma de lectura i escriptura social Wattpad, dins de la família de marques Wattpad i WEBTOON.',
      headquartersCountry: 'CA',
      euEstablishment: 'Sense establiment propi a la Unió Europea: ha designat un representant a l’article 27 (DataRep, Dublín).',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://www.wattpad.com',
      productDomains: ['wattpad.com'],
      privacyContact: 'privacy@wattpad.com',
    },
  ],

  sources: [
    s('scrl-privacy-policy', 'SCRL Privacy Policy', 'https://scrl.com/privacy-policy', 'Appostrophe AB', 'privacy-policy', 'primary', {
      summary:
        'Política de privadesa d’SCRL. Identifica Appostrophe AB com a responsable, enumera els SDK de publicitat i analítica, i fixa terminis de conservació concrets.',
    }),
    s('scrl-play-data-safety', 'SCRL – Seguridad de los datos (Google Play)', 'https://play.google.com/store/apps/datasafety?id=com.appostrophe.scrl', 'Google Play', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Declaració de seguretat de les dades que el mateix desenvolupador fa a Google Play. Hi diu que l’aplicació no recull cap dada i que les dades no es xifren.',
    }),
    s('freeprints-privacy-policy', 'FreePrints – Política de privacidad', 'https://www.freeprintsapp.es/privacidad', 'PlanetArt, LLC', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de privadesa de FreePrints per al mercat espanyol. Detalla la conservació de nou anys, les categories especials de dades i els canals per exercir els drets.',
    }),
    s('freeprints-play-data-safety', 'FreePrints – Seguridad de los datos (Google Play)', 'https://play.google.com/store/apps/datasafety?id=com.planetart.fpes', 'Google Play', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Declaració del desenvolupador a Google Play: fotografies, adreça postal, contactes i aplicacions instal·lades, amb finalitats de publicitat i personalització.',
    }),
    s('glam-ai-privacy-policy', 'Glam Privacy Policy', 'https://getglam.app/privacy', 'Glam Labs, Inc.', 'privacy-policy', 'primary', {
      summary:
        'Política de privadesa de Glam AI. Descriu el model personalitzat entrenat amb la cara de cada persona i la conservació indefinida de les fotografies d’origen.',
    }),
    s('picsart-privacy-policy', 'Picsart Privacy Policy', 'https://picsart.com/privacy-policy/', 'PicsArt, Inc.', 'privacy-policy', 'primary', {
      summary:
        'Política de privadesa de Picsart. Reconeix la publicitat basada en interessos com a model de finançament i fixa una conservació de fins a tres anys després de tancar el compte.',
    }),
    s('picsart-terms', 'Picsart Terms of Use', 'https://picsart.com/terms-and-conditions/', 'PicsArt, Inc.', 'terms', 'primary', {
      summary:
        'Condicions d’ús de Picsart. Contenen la llicència sobre el contingut de les persones usuàries i l’avís que el contingut publicat pot romandre al servei indefinidament.',
    }),
    s('picsart-play-data-safety', 'Picsart – Seguridad de los datos (Google Play)', 'https://play.google.com/store/apps/datasafety?id=com.picsart.studio', 'Google Play', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Declaració del desenvolupador a Google Play: fotografies, vídeos, àudio, contactes, historial de cerca i aplicacions instal·lades, amb finalitats publicitàries.',
    }),
    s('faceapp-privacy-policy', 'FaceApp Privacy Policy', 'https://www.faceapp.com/privacy', 'FaceApp Technology Limited', 'privacy-policy', 'primary', {
      summary:
        'Política de privadesa de FaceApp. Fixa en 24-48 hores la permanència a la memòria cau de les fotografies pujades i identifica la responsable a Xipre.',
    }),
    s('faceapp-play-data-safety', 'FaceApp – Seguridad de los datos (Google Play)', 'https://play.google.com/store/apps/datasafety?id=io.faceapp', 'Google Play', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Declaració del desenvolupador a Google Play: identificadors de dispositiu, ubicació aproximada i interaccions amb finalitats de publicitat o màrqueting.',
    }),
    s('kick-privacy-policy', 'Kick Privacy Policy', 'https://kick.com/privacy-policy', 'Kick Streaming Pty Ltd', 'privacy-policy', 'primary', {
      summary:
        'Política de privadesa de Kick. Descriu la verificació d’identitat per cobrar, la publicitat basada en interessos i les transferències internacionals.',
    }),
    s('kick-security-txt', 'Kick security.txt', 'https://kick.com/.well-known/security.txt', 'Kick Streaming Pty Ltd', 'technical-doc', 'primary', {
      summary:
        'Fitxer security.txt de Kick, que remet a un programa de divulgació de vulnerabilitats allotjat a Bugcrowd.',
    }),
    s('kick-play-data-safety', 'Kick – Seguridad de los datos (Google Play)', 'https://play.google.com/store/apps/datasafety?id=com.kick.mobile', 'Google Play', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Declaració del desenvolupador a Google Play: hi diu que l’aplicació no recull ni comparteix cap dada, cosa que contradiu la seva política de privadesa.',
    }),
    s('inshot-privacy-policy', 'InShot Privacy Policy', 'https://inshot.cc/privacy.html', 'InShot Inc.', 'privacy-policy', 'primary', {
      summary:
        'Política de privadesa d’InShot, vigent des del 24 d’agost de 2023. Enumera els SDK publicitaris i explica que l’àudio dels subtítols automàtics es puja al servidor.',
    }),
    s('inshot-play-data-safety', 'InShot – Seguridad de los datos (Google Play)', 'https://play.google.com/store/apps/datasafety?id=com.camerasideas.instashot', 'Google Play', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Declaració del desenvolupador a Google Play: fotografies i vídeos amb finalitat d’anàlisi, gravacions de veu i adreça electrònica.',
    }),
    s('epson-europe-privacy', 'Epson Privacy Statement', 'https://www.epson.eu/en_EU/privacy', 'Epson Europe B.V.', 'privacy-policy', 'primary', {
      summary:
        'Declaració de privadesa d’Epson Europe B.V. Identifica la responsable europea, el contacte del delegat de protecció de dades i els terminis de conservació de màrqueting i botiga.',
    }),
    s('mistbook-privacy-policy', 'Política de privadesa de Mistbook', 'https://mistbook.app/privacy', 'Mistbook', 'privacy-policy', 'primary', {
      summary:
        'Política de privadesa de Mistbook. Declara que no hi ha publicitat ni seguiment de tercers i que l’esborrat del compte es fa des de la mateixa aplicació.',
    }),
    s('wattpad-privacy-policy', 'Wattpad Privacy Policy', 'https://policies.wattpad.com/privacy', 'Wattpad Corp.', 'privacy-policy', 'primary', {
      summary:
        'Política de privadesa de Wattpad. Detalla la publicitat amb Google AdSense for Platforms, el representant a la UE i el termini de sis mesos abans de l’esborrat definitiu.',
    }),
    s('wattpad-terms', 'Wattpad Terms of Service', 'https://policies.wattpad.com/terms', 'Wattpad Corp.', 'terms', 'primary', {
      summary:
        'Condicions del servei de Wattpad: llicència no exclusiva sobre les obres publicades i anonimització dels comentaris, que no s’esborren, quan es tanca el compte.',
    }),
    s('wattpad-play-data-safety', 'Wattpad – Seguridad de los datos (Google Play)', 'https://play.google.com/store/apps/datasafety?id=wp.wattpad', 'Google Play', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Declaració del desenvolupador a Google Play: ubicació aproximada, missatges dins de l’aplicació, historial de cerca i identificadors, amb finalitats de publicitat i personalització.',
    }),
    s('wattpad-hibp-breach', 'Have I Been Pwned: Wattpad breach', 'https://haveibeenpwned.com/api/v3/breach/Wattpad', 'Have I Been Pwned', 'other', 'independent', {
      summary:
        'Fitxa de la filtració de Wattpad del juny de 2020 al registre de Have I Been Pwned, amb el recompte de comptes i les categories de dades exposades.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ SCRL ═══════════════════════════ */
    {
      slug: 'scrl-photo-collage',
      name: 'SCRL',
      company: 'appostrophe',
      categories: ['edicio-de-foto-i-video'],
      tagline: 'Declara a Google Play que no recull cap dada mentre la seva política enumera sis SDK de publicitat',
      summary:
        'SCRL és una aplicació sueca per muntar collages i carrusels per a Instagram. La seva política de privadesa és concreta: diu qui és responsable, quins SDK fa servir i quants anys conserva cada categoria de dades. En canvi, a la declaració que la mateixa empresa fa a Google Play afirma que l’aplicació no recull cap dada i que les dades no es xifren.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Suècia',
      links: {
        website: 'https://scrl.com',
        privacyPolicy: 'https://scrl.com/privacy-policy',
        terms: 'https://scrl.com/terms-of-service',
        appStore: 'https://apps.apple.com/es/app/id1289057196',
      },
      accountRequired: f('yes', 'official', ['scrl-privacy-policy'], 'Cal un compte amb adreça electrònica i codi d’un sol ús per desar els projectes i gestionar la subscripció.'),
      openSource: f('no', 'official', ['scrl-privacy-policy'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les imatges i els vídeos que s’hi pugen queden als servidors del proveïdor de núvol i, si es fan servir funcions d’intel·ligència artificial, hi romanen trenta dies. A això s’hi suma la connexió opcional amb Instagram, que lliga el compte d’SCRL amb un perfil públic de Meta.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['scrl-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['scrl-privacy-policy'], note: 'Nom visible i codis d’un sol ús per entrar.' }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['scrl-privacy-policy'], note: 'S’allotgen a AWS i Google Cloud; les imatges processades amb IA es conserven trenta dies per a revisió de qualitat i desenvolupament.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['scrl-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['scrl-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['scrl-privacy-policy'], note: 'País o regió deduïts de l’adreça IP; no hi ha GPS.' }),
        row('llengua', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['scrl-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'mesura-publicitaria'], sources: ['scrl-privacy-policy'], note: 'Firebase Analytics i Crashlytics, més les eines de mesura de TikTok, Meta, Google i Apple.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria', 'publicitat-personalitzada'], sources: ['scrl-privacy-policy'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['scrl-privacy-policy'], note: 'Estat de la subscripció a través d’Apple, Google o Paddle; les dades de la targeta no es conserven.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['scrl-privacy-policy'], note: 'Els textos d’indicació per a la IA i els carrusels programats cap a Instagram.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['scrl-privacy-policy'], 'Integra el píxel de Meta, TikTok Ads, Google Ads i Apple Search Ads per mesurar conversions.'),
        advertisingIdentifiers: f('yes', 'official', ['scrl-privacy-policy'], 'La política remet a la configuració de privadesa d’iOS i Android per limitar-ne l’ús.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['scrl-privacy-policy']),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['scrl-privacy-policy'], 'No mostra publicitat dins de l’aplicació, però fa servir les plataformes publicitàries de tercers per captar persones usuàries i mesurar-ne les conversions.'),
        profiling: unknown('La política no descriu cap elaboració de perfils més enllà de l’analítica d’ús.'),
        aiTraining: f('partial', 'official', ['scrl-privacy-policy'], 'Les imatges enviades a les funcions d’IA es conserven trenta dies «per a revisió de qualitat i desenvolupament», sense concretar si s’utilitzen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['scrl-privacy-policy'], 'Proveïdors de núvol (AWS i Google Cloud), analítica, passarel·les de pagament, eines d’atenció i plataformes publicitàries.'),
        intraGroupSharing: na('Appostrophe AB no forma part de cap grup empresarial amb altres serveis.'),
        dataBrokerSales: unknown('La política no esmenta cap venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['scrl-privacy-policy'], 'Els proveïdors de fora de la UE operen sota clàusules contractuals tipus.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No consta cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['scrl-privacy-policy'], 'La política dona terminis per categoria, cosa poc habitual en aplicacions d’aquesta mida.'),
        dataAfterDeletion: f('partial', 'official', ['scrl-privacy-policy'], 'Els registres de pagament es conserven set anys per obligació comptable.'),
        periods: [
          { dataType: 'fotografies-i-videos', period: '30 dies per a les imatges processades amb intel·ligència artificial', sources: ['scrl-privacy-policy'] },
          { dataType: 'historial-de-compres', period: '7 anys, per obligació legal', sources: ['scrl-privacy-policy'] },
          { dataType: 'interaccions-i-us', period: '3 anys', sources: ['scrl-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['scrl-privacy-policy']),
        selfService: f('yes', 'official', ['scrl-privacy-policy'], 'La política indica que el compte es pot esborrar des de la configuració de l’aplicació o escrivint a l’adreça de privadesa.'),
        difficulty: 'easy',
        steps: [
          'Obre SCRL i entra a la configuració del compte.',
          'Tria l’opció d’eliminar el compte i confirma-la.',
          'Si no la trobes, escriu a scrl@appostrophe.com demanant la supressió; la política es compromet a respondre en un mes.',
        ],
        dataRetained: 'Els registres de pagament, durant set anys, per obligació comptable sueca.',
        sources: ['scrl-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['scrl-privacy-policy'], 'El dret de portabilitat es reconeix, però s’exerceix per correu electrònic i no hi ha cap eina d’autoservei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['scrl-privacy-policy'], 'Canal únic de correu electrònic amb compromís de resposta en un mes i menció de l’autoritat sueca com a via de reclamació.', {
          url: 'mailto:scrl@appostrophe.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['scrl-privacy-policy'], 'Es pot limitar el seguiment publicitari des de la configuració del sistema operatiu i des de les preferències de privadesa de l’aplicació.'),
        telemetryOptOut: unknown('No consta cap manera de desactivar l’analítica de Firebase.'),
        granularControls: f('partial', 'official', ['scrl-privacy-policy'], 'Hi ha preferències de privadesa dins de l’aplicació, però la política no en detalla l’abast.'),
        defaultPosture: 'mixed',
        darkPatterns: f('no', 'official', ['scrl-privacy-policy'], 'No hem detectat obstacles per sortir-ne: la baixa és autoservei i els terminis són explícits.'),
      },
      security: {
        e2ee: na('El servei ha de processar les imatges als seus servidors per generar els carrusels i aplicar les funcions d’IA.'),
        transportEncryption: f('no', 'official', ['scrl-play-data-safety'], 'A la fitxa de seguretat de Google Play, el mateix desenvolupador declara que «les dades no es xifren». En un servei que allotja imatges, caldria contrastar-ho amb una prova de trànsit.'),
        atRestEncryption: unknown('La política no descriu el xifratge en repòs.'),
        mfa: f('partial', 'official', ['scrl-privacy-policy'], 'L’accés es fa amb un codi d’un sol ús enviat per correu, que substitueix la contrasenya en lloc de reforçar-la.', {
          methods: ['email'],
        }),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni fitxer security.txt.'),
        vulnerabilityDisclosure: unknown('No consta cap canal específic per comunicar vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'canva',
          comparability: 'partial',
          rationale: 'Cobreix el mateix ús de muntar composicions per a xarxes socials, amb una política de privadesa més detallada i canals per exercir els drets.',
          tradeOffs: 'És un servei molt més gran i recull més dades d’ús; la finalitat concreta dels carrusels d’Instagram hi està menys resolta.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política de privadesa i la declaració a Google Play es contradiuen. Hem mantingut les dues fonts: o bé la fitxa de Play està mal omplerta, o bé la política descriu tractaments que l’aplicació no fa.',
        openQuestions: [
          'L’etiqueta de privadesa de l’App Store no s’ha pogut consultar: Apple va respondre amb un error 429 durant tota la revisió.',
          'Les imatges enviades a les funcions d’IA s’utilitzen per entrenar models propis o només per a control de qualitat?',
        ],
      },
    },

    /* ═══════════════════════════ FreePrints ═══════════════════════════ */
    {
      slug: 'freeprints',
      name: 'FreePrints',
      company: 'planetart',
      categories: ['edicio-de-foto-i-video', 'comerc-electronic'],
      tagline: 'Fotos impreses gratis a canvi de nou anys de conservació i de publicitat entre dispositius',
      summary:
        'FreePrints regala la impressió de les fotografies i cobra només l’enviament. A canvi, PlanetArt conserva les fotografies, lligades a un nom, una adreça postal i un telèfon, durant nou anys des de la darrera interacció. La política admet, a més, que pot recollir categories especials de dades si la persona tria funcions de personalització relacionades amb la identitat de gènere o l’orientació sexual.',
      platforms: ['ios', 'android'],
      businessModel: 'commerce',
      jurisdiction: 'Estats Units, amb representants a la UE i servidors europeus a Irlanda',
      links: {
        website: 'https://www.freeprintsapp.es',
        privacyPolicy: 'https://www.freeprintsapp.es/privacidad',
        terms: 'https://www.freeprintsapp.es/condiciones_de_uso',
        privacyCenter: 'https://www.freeprintsapp.es/privacyrequest',
        appStore: 'https://apps.apple.com/es/app/id1235852662',
      },
      accountRequired: f('yes', 'official', ['freeprints-privacy-policy'], 'Cal un compte amb adreça de lliurament i dades de pagament per rebre les còpies.'),
      openSource: f('no', 'official', ['freeprints-privacy-policy'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Un àlbum familiar conté cares, menors, domicilis, celebracions i estats de salut. FreePrints el guarda a la seva base de dades juntament amb l’adreça postal i el calendari d’ocasions especials que la mateixa aplicació demana.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['freeprints-privacy-policy', 'freeprints-play-data-safety'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['freeprints-privacy-policy', 'freeprints-play-data-safety'], note: 'Es comparteix amb els proveïdors d’impressió i de transport.' }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['freeprints-privacy-policy', 'freeprints-play-data-safety'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['freeprints-privacy-policy'] }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['freeprints-privacy-policy', 'freeprints-play-data-safety'], note: 'S’emmagatzemen «a la nostra base de dades» i es conserven nou anys des de la darrera interacció.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['freeprints-privacy-policy'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['freeprints-privacy-policy', 'freeprints-play-data-safety'] }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['freeprints-privacy-policy', 'freeprints-play-data-safety'], note: 'Només si s’autoritza l’accés, per enviar regals o postals.' }),
        row('aplicacions-instal-lades', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['freeprints-play-data-safety'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['freeprints-privacy-policy'] }),
        row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['freeprints-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['freeprints-privacy-policy', 'freeprints-play-data-safety'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['freeprints-privacy-policy'], note: 'Les galetes duren fins a dos anys i nou mesos segons el tipus.' }),
        row('orientacio-sexual', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['freeprints-privacy-policy'], note: 'La política adverteix que pot recollir «informació de categories especials» si es trien funcions de personalització relatives a la identitat de gènere o l’orientació sexual.' }),
        row('situacio-familiar', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['freeprints-privacy-policy'], note: 'Les dates d’aniversaris i ocasions especials que es guarden al calendari de l’aplicació.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['freeprints-privacy-policy'], 'La política descriu el seguiment entre dispositius per vincular el comportament en diverses plataformes.'),
        advertisingIdentifiers: f('yes', 'official', ['freeprints-play-data-safety']),
        thirdPartyTrackersPresent: f('yes', 'official', ['freeprints-privacy-policy'], 'Comparteix dades amb xarxes publicitàries i plataformes socials.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['freeprints-privacy-policy'], 'Ofertes promocionals basades en interessos, amb baixa per enllaç al missatge o per correu a l’adreça de privadesa.', {
          optOutUrl: 'https://www.freeprintsapp.es/privacyrequest',
        }),
        profiling: f('yes', 'official', ['freeprints-privacy-policy'], 'Perfila els interessos a partir de l’historial de comandes i de la navegació per enviar ofertes.'),
        aiTraining: unknown('La política no esmenta l’ús de les fotografies per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['freeprints-privacy-policy'], 'Empreses de transport, passarel·les de pagament, plataformes socials, xarxes publicitàries i autoritats.'),
        intraGroupSharing: f('yes', 'official', ['freeprints-privacy-policy'], 'Les dades circulen cap a altres marques del grup, com Personal Creations i CaféPress, que les tracten als Estats Units.'),
        dataBrokerSales: unknown('La política no esmenta la venda de dades a intermediaris, però sí la cessió a xarxes publicitàries.'),
        internationalTransfers: f('yes', 'official', ['freeprints-privacy-policy'], 'Les dades europees s’allotgen a AWS a Irlanda, però altres marques del grup les tracten als Estats Units amb clàusules contractuals tipus.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No consta cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['freeprints-privacy-policy'], 'Nou anys des de la darrera interacció, un termini llarg i explícit.'),
        dataAfterDeletion: f('partial', 'official', ['freeprints-privacy-policy'], 'Les imatges poden romandre en còpies a la memòria cau; la política avisa que, un cop esborrades a petició, no es poden recuperar.'),
        periods: [
          { dataType: 'fotografies-i-videos', period: '9 anys des de la darrera interacció', sources: ['freeprints-privacy-policy'] },
          { dataType: 'galetes-i-identificadors-web', period: 'fins a 2 anys i 9 mesos', sources: ['freeprints-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['freeprints-privacy-policy']),
        selfService: f('no', 'official', ['freeprints-privacy-policy'], 'No hi ha cap botó d’eliminació dins de l’aplicació: cal fer servir el formulari «Administrar información personal» o escriure a l’equip de privadesa.'),
        directUrl: 'https://www.freeprintsapp.es/privacyrequest',
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Entra a https://www.freeprintsapp.es/privacyrequest i tria la sol·licitud d’eliminació de dades.',
          'Identifica’t amb l’adreça electrònica del compte i envia la sol·licitud.',
          'Com a alternativa, escriu a privacyeu@pallcprivacy.com invocant l’article 17 del RGPD.',
          'Descarrega abans les fotografies que vulguis conservar: la política avisa que l’esborrat és irreversible.',
        ],
        obstacles:
          'El camí de sortida passa per un formulari del web, no per l’aplicació on s’han pujat les fotografies.',
        dataRetained: 'Dades de facturació durant els terminis fiscals i còpies a la memòria cau durant un temps indeterminat.',
        sources: ['freeprints-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['freeprints-privacy-policy'], 'El dret de portabilitat es reconeix i s’exerceix pel mateix formulari, sense eina automàtica.', {
          url: 'https://www.freeprintsapp.es/privacyrequest',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['freeprints-privacy-policy'], 'Formulari específic i adreces de privadesa diferenciades per a la UE i el Regne Unit.', {
          url: 'https://www.freeprintsapp.es/privacyrequest',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['freeprints-privacy-policy'], 'La baixa de les comunicacions comercials es fa per enllaç o per correu; no hi ha un control dins de l’aplicació.'),
        telemetryOptOut: unknown('No consta cap manera de desactivar l’analítica.'),
        granularControls: f('partial', 'official', ['freeprints-privacy-policy'], 'Hi ha un gestor de galetes al web, però no un panell de privadesa per finalitat dins de l’aplicació.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'editorial', [], 'La gratuïtat de les còpies es compensa amb la recollida de l’arxiu fotogràfic i del domicili, que es conserven nou anys. A més, l’eliminació no es pot fer des de l’aplicació.'),
        darkPatternList: [
          {
            type: 'hidden-exit',
            severity: 'medium',
            description:
              'L’eliminació del compte no és accessible des de l’aplicació: cal anar a un formulari del web o escriure a una adreça de privadesa.',
            sources: ['freeprints-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: na('Les fotografies s’han de desxifrar per imprimir-les.'),
        transportEncryption: f('yes', 'official', ['freeprints-play-data-safety'], 'El desenvolupador declara a Google Play que les dades es xifren en trànsit.'),
        atRestEncryption: unknown('La política no descriu el xifratge en repòs.'),
        mfa: unknown('No consta que el compte admeti verificació en dos passos.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No consta cap canal específic de comunicació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'google-photos',
          comparability: 'complementary',
          rationale: 'Per desar i organitzar l’arxiu fotogràfic sense haver-lo de lliurar a un servei d’impressió que el conserva nou anys.',
          tradeOffs: 'No imprimeix a domicili amb el mateix model gratuït i afegeix les dades a l’ecosistema de Google.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'El termini de nou anys i l’avís sobre categories especials de dades són literals de la política espanyola. No hem trobat cap incident ni sanció associada a PlanetArt.',
        openQuestions: [
          'L’etiqueta de privadesa de l’App Store no s’ha pogut consultar: Apple va respondre amb un error 429 durant tota la revisió.',
          'Quines funcions de personalització activen la recollida de categories especials de dades?',
        ],
      },
    },

    /* ═══════════════════════════ Glam AI ═══════════════════════════ */
    {
      slug: 'glam-ai',
      name: 'Glam AI',
      company: 'glam-labs',
      categories: ['edicio-de-foto-i-video'],
      tagline: 'Conserva indefinidament les fotos de la teva cara i el model entrenat amb elles',
      summary:
        'Glam AI demana entre deu i vint selfies per entrenar un model personalitzat que després genera imatges de la persona. La política explica, cosa poc habitual, que tant les fotografies d’origen com els pesos del model (una representació matemàtica de la cara) es conserven per defecte als servidors, sense termini. L’empresa es compromet explícitament a no cedir ni vendre aquest material a xarxes d’IA de tercers.',
      platforms: ['ios'],
      businessModel: 'subscription',
      jurisdiction: 'Estats Units',
      links: {
        website: 'https://getglam.app/',
        privacyPolicy: 'https://getglam.app/privacy',
        appStore: 'https://apps.apple.com/es/app/id1545593132',
      },
      accountRequired: f('yes', 'official', ['glam-ai-privacy-policy'], 'Cal un compte amb adreça electrònica per generar i recuperar els models personalitzats.'),
      openSource: f('no', 'official', ['glam-ai-privacy-policy'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Glam AI conserva un conjunt de fotografies de la cara, prou nombrós i variat per entrenar un model, i el model resultant. Junts permeten generar imatges noves de la persona indefinidament, i no hi ha establiment ni responsable a la Unió Europea que respongui de la custòdia.',
      dataCollection: [
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['glam-ai-privacy-policy'], note: 'Entre deu i vint fotografies d’origen que es conserven per defecte als servidors de DigitalOcean.' }),
        row('dades-biometriques', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['entrenament-de-models-dia', 'prestacio-del-servei'], sources: ['glam-ai-privacy-policy'], note: 'Els punts facials es calculen al dispositiu amb Apple Vision, però els pesos del model personalitzat, derivats de la cara, es guarden al núvol de manera persistent i amb consentiment exprés.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['glam-ai-privacy-policy'] }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['glam-ai-privacy-policy'] }),
        row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['glam-ai-privacy-policy'], note: 'Se selecciona al perfil per ajustar la generació d’imatges.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['glam-ai-privacy-policy'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['glam-ai-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['glam-ai-privacy-policy'], note: 'Mètriques d’Amplitude a l’aplicació i de Google Analytics al web.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['glam-ai-privacy-policy'], note: 'Stripe, PayPal i l’App Store com a processadors.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['glam-ai-privacy-policy'] }),
      ],
      tracking: {
        crossAppTracking: unknown('La política esmenta galetes d’anunciants tercers al web, però no descriu seguiment entre aplicacions.'),
        advertisingIdentifiers: unknown('La política no esmenta l’identificador publicitari del dispositiu.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['glam-ai-privacy-policy'], 'Google Analytics, Amplitude i galetes d’anunciants tercers.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['glam-ai-privacy-policy'], 'La política reconeix galetes d’anunciants tercers, però no descriu publicitat personalitzada dins de l’aplicació.'),
        profiling: unknown('La política no descriu l’elaboració de perfils comercials.'),
        aiTraining: f('yes', 'official', ['glam-ai-privacy-policy'], 'Les fotografies s’utilitzen per entrenar i reentrenar un model personalitzat de la persona. L’empresa afirma que no comparteix ni ven les imatges ni les dades facials a xarxes d’IA externes com OpenAI o Midjourney.', {
          scope: 'all-optin',
        }),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['glam-ai-privacy-policy'], 'Proveïdors de còmput amb GPU (RunPod i Fal AI), emmagatzematge a DigitalOcean Spaces i processadors de pagament.'),
        intraGroupSharing: na('Glam Labs, Inc. no forma part de cap grup amb altres serveis.'),
        dataBrokerSales: f('no', 'official', ['glam-ai-privacy-policy'], 'La política declara que no ven ni lloga la informació, les fotografies ni les dades facials.'),
        internationalTransfers: f('yes', 'official', ['glam-ai-privacy-policy'], 'Les dades s’emmagatzemen als Estats Units. La política ho fonamenta en el consentiment de la persona usuària i no esmenta clàusules contractuals tipus.', {
          mechanism: 'derogation',
        }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No consta cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['glam-ai-privacy-policy'], 'La política dona terminis per categoria, però el principal és «indefinit».'),
        dataAfterDeletion: f('partial', 'official', ['glam-ai-privacy-policy'], 'Les metadades del compte s’esborren al cap de trenta dies; les fotografies i els pesos del model poden persistir a les còpies de seguretat.'),
        periods: [
          { dataType: 'fotografies-i-videos', period: 'indefinit per defecte', sources: ['glam-ai-privacy-policy'] },
          { dataType: 'dades-biometriques', period: 'indefinit per defecte (pesos del model personalitzat)', sources: ['glam-ai-privacy-policy'] },
          { dataType: 'identificador-de-compte', period: '30 dies després de l’eliminació del compte', sources: ['glam-ai-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['glam-ai-privacy-policy']),
        selfService: f('yes', 'official', ['glam-ai-privacy-policy'], 'Es pot eliminar el compte des de la configuració de l’aplicació o per correu electrònic.'),
        difficulty: 'medium',
        waitingPeriodDays: 30,
        steps: [
          'Obre la configuració de Glam i tria l’opció d’eliminar el compte.',
          'Confirma l’eliminació; les metadades del compte s’esborren al cap de trenta dies.',
          'Demana expressament, per correu, la supressió dels pesos del model personalitzat i de les fotografies d’origen.',
        ],
        obstacles:
          'La política admet que fotografies, pesos del model i imatges generades poden romandre temporalment a les còpies de seguretat, i sosté que en aquell estat ja no es poden associar a la persona.',
        dataRetained: 'Tiquets d’atenció durant un o dos anys, anonimitzats, i restes a les còpies de seguretat.',
        sources: ['glam-ai-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política no descriu cap eina ni procediment de portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['glam-ai-privacy-policy'], 'Els drets s’exerceixen per correu electrònic o a través d’un representant designat als Estats Units, no d’un representant a la Unió Europea.'),
      },
      controls: {
        adPersonalizationOptOut: unknown('No consta cap control de publicitat dins de l’aplicació.'),
        telemetryOptOut: unknown('No consta cap manera de desactivar l’analítica d’Amplitude.'),
        granularControls: f('partial', 'official', ['glam-ai-privacy-policy'], 'Hi ha control sobre el contingut generat i sobre l’eliminació del compte, però no sobre la conservació dels pesos del model, que és l’element més sensible.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'editorial', [], 'La conservació indefinida és l’opció per defecte i s’obté amb un consentiment integrat al mateix flux de creació de l’avatar.'),
        darkPatternList: [
          {
            type: 'preselected',
            severity: 'high',
            description:
              'La conservació persistent de les fotografies d’origen i dels pesos del model facial és el comportament per defecte del servei.',
            sources: ['glam-ai-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: na('El servei ha de processar les imatges als seus servidors amb GPU per entrenar el model.'),
        transportEncryption: unknown('La política no descriu el xifratge en trànsit.'),
        atRestEncryption: unknown('La política no descriu el xifratge en repòs dels pesos del model.'),
        mfa: unknown('No consta que el compte admeti verificació en dos passos.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No consta cap canal específic de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política és inusualment explícita i permet documentar amb font pròpia un tractament de dades biomètriques que altres aplicacions del mateix gènere no descriuen. Els problemes són de disseny: conservació indefinida per defecte i cap responsable a la Unió Europea.',
        openQuestions: [
          'L’etiqueta de privadesa de l’App Store no s’ha pogut consultar: Apple va respondre amb un error 429 durant tota la revisió.',
          'Quina base jurídica invoca Glam Labs per al tractament de dades biomètriques de persones residents a la Unió Europea?',
        ],
      },
    },

    /* ═══════════════════════════ Picsart ═══════════════════════════ */
    {
      slug: 'picsart',
      name: 'Picsart',
      company: 'picsart',
      categories: ['edicio-de-foto-i-video', 'xarxes-socials'],
      tagline: 'Editor gratuït finançat amb publicitat basada en interessos i tres anys de conservació després de la baixa',
      summary:
        'Picsart admet a la seva política que el servei es finança, en part, amb publicitat basada en interessos «sense la qual no podria oferir una experiència gratuïta». L’aplicació combina l’edició amb una xarxa social pública, cosa que fa que les creacions puguin quedar-se al servei encara que se’n tanqui el compte. Les condicions d’ús li atorguen una llicència mundial i sublicenciable sobre el contingut.',
      platforms: ['ios', 'android', 'web', 'windows'],
      businessModel: 'freemium',
      jurisdiction: 'Estats Units',
      userBase: 'Centenars de milions de descàrregues acumulades',
      links: {
        website: 'https://picsart.com',
        privacyPolicy: 'https://picsart.com/privacy-policy/',
        terms: 'https://picsart.com/terms-and-conditions/',
        appStore: 'https://apps.apple.com/es/app/id587366035',
      },
      accountRequired: f('yes', 'official', ['picsart-privacy-policy'], 'Cal registrar-se per desar projectes, publicar creacions i gestionar la subscripció.'),
      openSource: f('no', 'official', ['picsart-terms'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les fotografies, els vídeos i l’àudio que s’editen es combinen amb l’historial de cerca dins de l’aplicació, la llista de contactes i les aplicacions instal·lades. Amb aquestes dades es construeix el perfil d’interessos del model publicitari que la política reconeix.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['picsart-privacy-policy', 'picsart-play-data-safety'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['picsart-privacy-policy', 'picsart-play-data-safety'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['picsart-play-data-safety'] }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['picsart-privacy-policy'] }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['picsart-privacy-policy', 'picsart-play-data-safety'], note: 'Inclou la fotografia de perfil i les imatges amb cara que alimenten els efectes facials.' }),
        row('dades-biometriques', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['picsart-privacy-policy'], note: 'La política esmenta dades facials derivades dels efectes d’imatge; no en detalla la conservació.' }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['picsart-play-data-safety'] }),
        row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['picsart-play-data-safety'] }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['picsart-privacy-policy', 'picsart-play-data-safety'], note: 'Només amb permís, per trobar-hi coneguts.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['picsart-play-data-safety'] }),
        row('aplicacions-instal-lades', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['picsart-play-data-safety'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['picsart-play-data-safety'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['picsart-privacy-policy'], note: 'També serveix per deduir la ubicació aproximada.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['picsart-privacy-policy'] }),
        row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['picsart-privacy-policy'] }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts', 'compliment-legal'], sources: ['picsart-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['picsart-privacy-policy', 'picsart-play-data-safety'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['picsart-play-data-safety'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['picsart-privacy-policy'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['picsart-play-data-safety'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['picsart-privacy-policy'], 'La política remet a les eines de baixa sectorials de la Digital Advertising Alliance per a aplicacions mòbils, la qual cosa implica seguiment entre aplicacions.'),
        advertisingIdentifiers: f('yes', 'official', ['picsart-play-data-safety']),
        thirdPartyTrackersPresent: f('yes', 'official', ['picsart-privacy-policy'], 'Xarxes publicitàries per a la publicitat basada en interessos.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['picsart-privacy-policy'], 'La política diu: «l’ús de Picsart se sosté, en part, amb publicitat basada en interessos, sense la qual Picsart no podria oferir una experiència gratuïta o econòmica».', {
          optOutUrl: 'https://www.aboutads.info/appchoices',
        }),
        profiling: f('yes', 'official', ['picsart-privacy-policy'], 'Perfila interessos per personalitzar contingut i publicitat.'),
        aiTraining: unknown('Ni la política ni les condicions d’ús declaren si el contingut de les persones usuàries serveix per entrenar els models generatius de Picsart, tot i que el producte n’ofereix molts.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['picsart-privacy-policy'], 'Proveïdors de servei, xarxes publicitàries i autoritats quan la llei ho exigeix.'),
        intraGroupSharing: unknown('La política no detalla la circulació de dades entre societats del grup.'),
        dataBrokerSales: unknown('La política no esmenta la venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['picsart-privacy-policy'], 'Les transferències es fan a l’empara dels contractes tipus de la Comissió Europea.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No consta cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['picsart-privacy-policy'], 'Hi ha un termini concret per a la conservació posterior a la baixa, però no per categoria de dada.'),
        dataAfterDeletion: f('yes', 'official', ['picsart-privacy-policy', 'picsart-terms'], 'Certa informació es conserva fins a tres anys després de tancar el compte, i el contingut publicat pot romandre al servei de manera indefinida si altres persones l’han utilitzat.'),
        periods: [
          { period: 'fins a 3 anys després de tancar el compte, per a compliment legal i peticions d’autoritats', sources: ['picsart-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['picsart-privacy-policy']),
        selfService: f('partial', 'official', ['picsart-privacy-policy'], 'La política remet al perfil de l’aplicació per accedir i actualitzar les dades, i al portal privacy.picsart.com per a les sol·licituds formals de supressió de les persones residents a la UE.'),
        directUrl: 'https://privacy.picsart.com',
        difficulty: 'medium',
        steps: [
          'Entra al teu perfil des de l’aplicació de Picsart i revisa la configuració del compte.',
          'Per a una supressió formal, obre https://privacy.picsart.com i presenta la sol·licitud com a persona resident a la Unió Europea.',
          'Com a alternativa, escriu a privacy@picsart.com invocant l’article 17 del RGPD.',
          'Esborra abans les creacions públiques que no vulguis que quedin al servei.',
        ],
        obstacles:
          'Les condicions d’ús adverteixen que el contingut compartit públicament «pot romandre al servei a perpetuïtat» si altres persones l’han reutilitzat, i que passar-lo a privat o esborrar-lo pot no ser suficient.',
        dataRetained: 'Informació conservada fins a tres anys per a compliment legal i peticions d’autoritats.',
        sources: ['picsart-privacy-policy', 'picsart-terms'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['picsart-privacy-policy'], 'Les persones de la UE i el Regne Unit poden demanar una còpia en format llegible per màquina, però no hi ha cap eina d’exportació automàtica.', {
          url: 'https://privacy.picsart.com',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['picsart-privacy-policy'], 'Portal de privadesa específic i adreça del delegat de protecció de dades.', {
          url: 'https://privacy.picsart.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['picsart-privacy-policy'], 'La baixa de la publicitat basada en interessos es delega a eines sectorials externes (DAA AppChoices i NAI) i a la configuració del navegador, no a un control propi.', {
          url: 'https://www.aboutads.info/appchoices',
        }),
        telemetryOptOut: unknown('No consta cap manera de desactivar l’analítica d’ús.'),
        granularControls: f('partial', 'official', ['picsart-privacy-policy'], 'Hi ha un gestor de galetes al web i controls de visibilitat al perfil, però no un panell per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'editorial', ['picsart-terms'], 'Fer dependre la baixa de la publicitat d’eines sectorials de tercers i advertir que el contingut públic pot quedar-se «a perpetuïtat» són friccions afegides a la sortida.'),
        darkPatternList: [
          {
            type: 'confusing-language',
            severity: 'medium',
            description:
              'La baixa de la publicitat personalitzada s’explica remetent a tres mecanismes externs diferents en lloc d’un control dins de l’aplicació.',
            sources: ['picsart-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: na('El servei allotja i publica el contingut, de manera que l’ha de poder desxifrar.'),
        transportEncryption: f('yes', 'official', ['picsart-play-data-safety'], 'El desenvolupador declara a Google Play que les dades es xifren en trànsit.'),
        atRestEncryption: unknown('La política no descriu el xifratge en repòs.'),
        mfa: unknown('La política no esmenta la verificació en dos passos.'),
        independentAudits: unknown('No consten auditories independents ni certificacions publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni fitxer security.txt al domini.'),
        vulnerabilityDisclosure: unknown('No consta cap canal específic de comunicació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'canva',
          comparability: 'partial',
          rationale: 'Cobreix bona part de l’edició i el disseny sense la xarxa social pública on el contingut pot quedar-se indefinidament.',
          tradeOffs: 'Té menys eines d’edició fotogràfica avançada i també recull dades d’ús per personalitzar el servei.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política admet literalment que el model de negoci depèn de la publicitat basada en interessos. En canvi, no diu res sobre l’entrenament de models, tot i que el producte es ven com a «editor de fotos amb IA»; per això aquest punt consta com a desconegut i com a pregunta oberta.',
        openQuestions: [
          'L’etiqueta de privadesa de l’App Store no s’ha pogut consultar: Apple va respondre amb un error 429 durant tota la revisió.',
          'El contingut de les persones usuàries s’utilitza per entrenar els models generatius de Picsart?',
        ],
      },
    },

    /* ═══════════════════════════ FaceApp ═══════════════════════════ */
    {
      slug: 'faceapp',
      name: 'FaceApp',
      company: 'faceapp-technology',
      categories: ['edicio-de-foto-i-video'],
      tagline: 'Les cares pugen al núvol i hi queden entre 24 i 48 hores, amb un botó per esborrar-les abans',
      summary:
        'FaceApp processa els retrats als seus servidors: la fotografia que es vol transformar es puja a Google Cloud o AWS. La política ho reconeix i hi posa un límit (entre 24 i 48 hores de memòria cau) i un botó a la configuració per demanar-ne l’esborrat immediat. La resta de dades es fan servir per a publicitat i analítica, i el servei funciona sense compte.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Xipre',
      userBase: 'Més de 500 milions de descàrregues, segons la fitxa de l’App Store',
      links: {
        website: 'https://www.faceapp.com',
        privacyPolicy: 'https://www.faceapp.com/privacy',
        appStore: 'https://apps.apple.com/es/app/id1180884341',
      },
      accountRequired: f('no', 'official', ['faceapp-privacy-policy'], 'L’edició funciona sense registre; la política descriu un ús basat en identificadors de dispositiu.'),
      openSource: f('no', 'official', ['faceapp-privacy-policy'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Una cara, a diferència d’una contrasenya, no es pot canviar. FaceApp en tracta la imatge al núvol durant un termini curt, però el que persisteix són les dades publicitàries: identificadors de dispositiu, ubicació aproximada i interaccions compartides amb finalitats de màrqueting.',
      dataCollection: [
        row('fotografies-i-videos', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['faceapp-privacy-policy', 'faceapp-play-data-safety'], note: 'Només les que se seleccionen per editar. La política afirma que no accedeix a l’àlbum sencer encara que se li hagi donat permís.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['faceapp-play-data-safety'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['faceapp-play-data-safety'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['faceapp-privacy-policy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['faceapp-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['faceapp-play-data-safety'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['faceapp-play-data-safety'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['faceapp-play-data-safety'], note: 'Confirmació de la compra dins de l’aplicació.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['atencio-a-lusuari'], sources: ['faceapp-privacy-policy'], note: 'Només si s’escriu a l’assistència.' }),
        row('dades-biometriques', 'unknown', { note: 'La política no descriu cap extracció ni conservació de plantilles facials, tot i que el servei transforma cares al núvol.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['faceapp-play-data-safety'], 'Els identificadors de dispositiu es comparteixen amb finalitats de publicitat o màrqueting.'),
        advertisingIdentifiers: f('yes', 'official', ['faceapp-play-data-safety']),
        thirdPartyTrackersPresent: f('yes', 'official', ['faceapp-privacy-policy'], 'La política admet que hi ha SDK que permeten a tercers recollir informació directament des de l’aplicació, però no en diu els noms.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['faceapp-play-data-safety'], 'Identificadors, ubicació aproximada i interaccions es comparteixen per a publicitat o màrqueting.'),
        profiling: unknown('La política no descriu l’elaboració de perfils.'),
        aiTraining: unknown('La política no diu si les fotografies serveixen per entrenar els models de transformació facial.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['faceapp-privacy-policy'], 'Empreses afiliades, proveïdors de servei, plataformes socials i assessors professionals. La política assegura que les fotografies i els vídeos no es comparteixen amb tercers.'),
        intraGroupSharing: f('yes', 'official', ['faceapp-privacy-policy'], 'La política preveu la compartició amb empreses afiliades, sense enumerar-les.'),
        dataBrokerSales: f('no', 'official', ['faceapp-privacy-policy'], 'La política declara que no ven informació personal.'),
        internationalTransfers: f('yes', 'official', ['faceapp-privacy-policy'], 'Reconeix transferències internacionals protegides amb clàusules contractuals tipus, xifratge i pseudonimització.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No consta cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['faceapp-privacy-policy'], 'Hi ha un termini concret per a les fotografies, però la resta es conserva «el temps necessari».'),
        dataAfterDeletion: unknown('La política no detalla què queda després de demanar l’esborrat.'),
        periods: [
          { dataType: 'fotografies-i-videos', period: 'entre 24 i 48 hores a la memòria cau del núvol des de l’última edició', sources: ['faceapp-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['faceapp-privacy-policy'], 'No hi ha compte pròpiament dit, però la configuració inclou un botó per demanar l’eliminació de les dades al núvol.'),
        selfService: f('yes', 'official', ['faceapp-privacy-policy', 'faceapp-play-data-safety'], 'El botó «Request cloud data removal» és a la configuració de l’aplicació.'),
        difficulty: 'easy',
        steps: [
          'Obre la configuració de FaceApp.',
          'Prem «Request cloud data removal» per demanar l’esborrat immediat de les fotografies pujades.',
          'Per a la resta de dades, escriu a privacy@faceapp.com o al delegat de protecció de dades, dpo@faceapp.com.',
        ],
        dataRetained: 'La política no concreta quines dades es conserven després de la sol·licitud.',
        sources: ['faceapp-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['faceapp-privacy-policy'], 'Els drets d’accés i portabilitat s’exerceixen per correu electrònic; no hi ha eina d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['faceapp-privacy-policy'], 'Delegat de protecció de dades amb adreça pròpia i responsable establerta a Xipre, dins de la Unió Europea.', {
          url: 'mailto:dpo@faceapp.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('La política no descriu cap control de publicitat dins de l’aplicació.'),
        telemetryOptOut: unknown('No consta cap manera de desactivar l’analítica.'),
        granularControls: f('partial', 'official', ['faceapp-privacy-policy'], 'El control destacable és el botó d’esborrat de les dades al núvol; no n’hi ha per finalitat.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'editorial', ['faceapp-privacy-policy'], 'La política no anomena cap dels SDK de tercers que admet que recullen dades directament des de l’aplicació, cosa que impedeix saber amb qui es comparteixen les dades publicitàries.'),
        darkPatternList: [
          {
            type: 'confusing-language',
            severity: 'medium',
            description:
              'La política reconeix la presència d’SDK de tercers que recullen dades pel seu compte, però no en publica la llista.',
            sources: ['faceapp-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: na('La transformació de la imatge es fa al servidor, de manera que el proveïdor hi ha de tenir accés en clar.'),
        transportEncryption: f('yes', 'official', ['faceapp-play-data-safety'], 'El desenvolupador declara a Google Play que les dades es xifren en trànsit.'),
        atRestEncryption: f('partial', 'official', ['faceapp-privacy-policy'], 'La política esmenta el xifratge i la pseudonimització com a garanties de les transferències internacionals, sense concretar l’abast.'),
        mfa: na('El servei no té comptes amb contrasenya.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses; el domini no serveix cap fitxer security.txt.'),
        vulnerabilityDisclosure: unknown('No consta cap canal específic de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La reputació de FaceApp es va formar el 2019 més per la nacionalitat del seu equip fundador que per troballes tècniques. La fitxa s’ha fet amb la política vigent i amb la declaració del desenvolupador: la responsable és una societat xipriota, dins de la Unió Europea, i el tractament de les fotografies està acotat en el temps. No hem trobat cap sanció ferma de cap autoritat de protecció de dades.',
        openQuestions: [
          'L’etiqueta de privadesa de l’App Store no s’ha pogut consultar: Apple va respondre amb un error 429 durant tota la revisió.',
          'Quins són els SDK de tercers presents a l’aplicació, que la política reconeix però no enumera?',
        ],
      },
    },

    /* ═══════════════════════════ Kick ═══════════════════════════ */
    {
      slug: 'kick',
      name: 'Kick',
      company: 'kick-streaming',
      categories: ['video-i-streaming'],
      tagline: 'Declara a Google Play que no recull cap dada mentre la seva política descriu documents d’identitat i publicitat per interessos',
      summary:
        'Kick és la plataforma australiana de retransmissió en directe que competeix amb Twitch. La seva política descriu un tractament ampli: documents d’identitat i identificadors fiscals per cobrar, adreces electròniques xifrades cedides a anunciants i verificació d’edat delegada a un tercer. En canvi, la fitxa de seguretat de les dades que la mateixa empresa publica a Google Play afirma que l’aplicació no recull ni comparteix res. Les dues declaracions es contradiuen.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Austràlia',
      links: {
        website: 'https://kick.com',
        privacyPolicy: 'https://kick.com/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id6446202561',
      },
      accountRequired: f('partial', 'official', ['kick-privacy-policy'], 'Es pot mirar sense compte, però qualsevol interacció (xat, subscripció o retransmissió) en demana un.'),
      openSource: f('no', 'official', ['kick-privacy-policy'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Qui retransmet ha de lliurar document d’identitat i número fiscal a un verificador extern. De qui mira queden registrats el xat, les subscripcions i les hores de connexió, i la seva adreça electrònica, xifrada, arriba a les xarxes publicitàries per identificar-lo com a públic objectiu.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['kick-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['kick-privacy-policy'], note: 'La política admet que es comparteixen adreces electròniques xifrades o identificadors amb els anunciants.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['kick-privacy-policy'] }),
        row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['kick-privacy-policy'], note: 'Només per a qui cobra: documents oficials i identificadors fiscals, recollits a través de verificadors externs.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['kick-privacy-policy'], note: 'Stripe i PayPal com a processadors.' }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['kick-privacy-policy'], note: 'La comprovació d’edat es delega a K-ID; la política diu que Kick no tracta directament aquestes dades.' }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['kick-privacy-policy'], note: 'Els missatges del xat són públics per a la resta de la comunitat.' }),
        row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['kick-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['kick-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['kick-privacy-policy'], note: 'Deduïda de l’adreça IP.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['kick-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['kick-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['kick-privacy-policy'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['kick-privacy-policy'], note: 'Subscripcions a canals i compra de «KICKs».' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['kick-privacy-policy'], 'Comparteix adreces electròniques xifrades o identificadors amb xarxes publicitàries i plataformes socials per formar públics.'),
        advertisingIdentifiers: f('yes', 'official', ['kick-privacy-policy'], 'La política remet a les opcions de limitació del seguiment publicitari d’iOS i Android.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['kick-privacy-policy']),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['kick-privacy-policy'], 'Publicitat basada en interessos amb xarxes de tercers. La política es compromet a no fer-ne servir categories sensibles com la raça, la religió, l’orientació sexual o la salut.', {
          optOutUrl: 'https://kick.com/privacy-policy',
        }),
        profiling: f('yes', 'official', ['kick-privacy-policy'], 'Personalitza recomanacions a partir del comportament dins del servei.'),
        aiTraining: unknown('La política no diu si les retransmissions o el xat serveixen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['kick-privacy-policy'], 'Processadors de pagament, verificadors d’identitat, atenció al client, xarxes publicitàries i plataformes socials.'),
        intraGroupSharing: f('yes', 'official', ['kick-privacy-policy'], 'La política preveu la compartició amb altres entitats del grup Kick.'),
        dataBrokerSales: unknown('La política no esmenta la venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['kick-privacy-policy'], 'Transferències cap als Estats Units i altres països, amb clàusules contractuals tipus per a les persones de l’EEE.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No consta cap informe de transparència sobre peticions d’autoritats ni sobre moderació.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['kick-privacy-policy'], 'Els criteris s’expliquen per base jurídica (durada del contracte, termini de prescripció, retirada del consentiment), però sense terminis numèrics.'),
        dataAfterDeletion: f('partial', 'official', ['kick-privacy-policy'], 'Les llicències sobre el contingut publicat poden impedir l’esborrat complet de la informació pública.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['kick-privacy-policy'], 'La política reconeix el dret de supressió però adverteix que no sempre es podrà atendre.'),
        selfService: unknown('La política no descriu cap opció d’eliminació dins de l’aplicació i remet a l’assistència; no hem pogut verificar si existeix un botó de baixa.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Escriu a l’assistència de Kick o al delegat de protecció de dades demanant la supressió del compte.',
          'Invoca l’article 17 del RGPD i conserva la confirmació com a prova.',
          'Tingues present que els missatges del xat i el contingut públic poden quedar-se al servei.',
        ],
        obstacles:
          'La política admet expressament que «potser no podrem corregir, modificar o esborrar la informació en tots els casos» i que les llicències sobre el contingut publicat poden impedir-ho.',
        dataRetained: 'Contingut públic i missatges del xat subjectes a la llicència d’ús.',
        sources: ['kick-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['kick-privacy-policy'], 'El dret a rebre una còpia en format estructurat es reconeix, però no hi ha cap eina automàtica.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['kick-privacy-policy'], 'Hi ha delegat de protecció de dades i s’informa de les vies de reclamació davant les autoritats europees.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['kick-privacy-policy'], 'Hi ha selectors de preferències, però la política remet sobretot a les eines sectorials de la DAA i la NAI i a la configuració del sistema operatiu.'),
        telemetryOptOut: unknown('No consta cap manera de desactivar l’analítica.'),
        granularControls: f('partial', 'official', ['kick-privacy-policy'], 'Hi ha preferències de comunicacions i de publicitat, però no un panell per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: f('yes', 'editorial', ['kick-play-data-safety', 'kick-privacy-policy'], 'Declarar a la botiga d’aplicacions que no es recull cap dada, quan la política pròpia descriu documents d’identitat, adreces cedides a anunciants i seguiment publicitari, buida de contingut el resum de la botiga, que és el que es consulta abans d’instal·lar.'),
        darkPatternList: [
          {
            type: 'confusing-language',
            severity: 'high',
            description:
              'La fitxa «Seguridad de los datos» de Google Play declara que l’aplicació no recull ni comparteix cap dada, en contradicció directa amb la política de privadesa de Kick.',
            sources: ['kick-play-data-safety', 'kick-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: na('El servei distribueix vídeo públic i xat obert; no hi ha comunicacions privades xifrades d’extrem a extrem.'),
        transportEncryption: f('yes', 'official', ['kick-play-data-safety'], 'El desenvolupador declara a Google Play que les dades es xifren en trànsit.'),
        atRestEncryption: unknown('La política no descriu el xifratge en repòs dels documents d’identitat.'),
        mfa: unknown('La política no esmenta la verificació en dos passos.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: f('partial', 'official', ['kick-security-txt'], 'El fitxer security.txt remet a un programa de divulgació de vulnerabilitats a Bugcrowd, no a un programa de recompenses econòmiques. La data de caducitat declarada al fitxer ja havia passat en el moment de la revisió.', {
          url: 'https://bugcrowd.com/engagements/kick-vdp-pro',
        }),
        vulnerabilityDisclosure: f('yes', 'official', ['kick-security-txt'], 'Kick publica un fitxer security.txt amb el canal de contacte.'),
      },
      alternatives: [
        {
          app: 'twitch',
          comparability: 'equivalent',
          rationale: 'Mateix ús de retransmissió en directe, amb una política més detallada i un grup amb estructura de resposta a les autoritats europees.',
          tradeOffs: 'Pertany a Amazon, de manera que les dades s’incorporen a un ecosistema publicitari molt més gran.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La contradicció entre la política i la declaració a Google Play és el fet més rellevant i s’ha documentat amb les dues fonts. No hem trobat cap sanció ferma de cap autoritat de protecció de dades contra Kick.',
        openQuestions: [
          'L’etiqueta de privadesa de l’App Store no s’ha pogut consultar: Apple va respondre amb un error 429 durant tota la revisió.',
          'Existeix una opció d’eliminació del compte dins de l’aplicació o del web de Kick?',
        ],
      },
    },

    /* ═══════════════════════════ InShot ═══════════════════════════ */
    {
      slug: 'inshot',
      name: 'InShot',
      company: 'shantanu-pte',
      categories: ['edicio-de-foto-i-video'],
      tagline: 'Edició local i quatre SDK de publicitat, amb una política que no diu qui és la responsable',
      summary:
        'InShot edita al mateix telèfon: els esborranys es queden al dispositiu i només l’àudio dels subtítols automàtics puja al servidor. D’altra banda, la versió gratuïta incorpora AdMob i AppLovin, i la política, vigent des del 2023, no identifica la societat responsable del tractament, no fixa cap termini de conservació i no esmenta ni les transferències internacionals ni els drets del RGPD més enllà d’una adreça de contacte.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'No declarada a la política; l’editora de l’App Store és una societat de Singapur',
      links: {
        website: 'https://inshot.cc',
        privacyPolicy: 'https://inshot.cc/privacy.html',
        appStore: 'https://apps.apple.com/es/app/id997362197',
      },
      accountRequired: f('no', 'official', ['inshot-privacy-policy'], 'L’edició funciona sense compte; l’adreça electrònica només es demana per a l’atenció a l’usuari.'),
      openSource: f('no', 'official', ['inshot-privacy-policy'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El contingut que s’edita amb InShot no acostuma a sortir del telèfon, cosa que redueix molt l’exposició. Sí que en surten el perfil publicitari que AdMob i AppLovin construeixen a partir dels identificadors del dispositiu i l’àudio que es processa al servidor quan es generen subtítols automàtics.',
      dataCollection: [
        row('fotografies-i-videos', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['inshot-privacy-policy', 'inshot-play-data-safety'], note: 'Els esborranys es guarden localment fins que s’esborren; la fitxa de Google Play declara fotografies i vídeos amb finalitat d’anàlisi.' }),
        row('veu-i-audio', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['inshot-privacy-policy', 'inshot-play-data-safety'], note: 'L’àudio dels subtítols automàtics es puja al servidor i, segons la política, s’esborra un cop processat.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['atencio-a-lusuari'], sources: ['inshot-privacy-policy', 'inshot-play-data-safety'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['inshot-privacy-policy'], note: 'La política esmenta explícitament l’identificador d’Android.' }),
        row('aplicacions-instal-lades', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['inshot-privacy-policy'] }),
        row('xarxa-i-connectivitat', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['inshot-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['inshot-play-data-safety'], note: 'Firebase per a l’anàlisi.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['inshot-play-data-safety'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['inshot-privacy-policy'], note: 'AdMob i AppLovin.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['inshot-privacy-policy'], 'Els SDK d’AdMob i AppLovin fan publicitat i mesura entre aplicacions.'),
        advertisingIdentifiers: f('yes', 'official', ['inshot-privacy-policy']),
        thirdPartyTrackersPresent: f('yes', 'official', ['inshot-privacy-policy'], 'AdMob, AppLovin, Firebase i Giphy.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['inshot-privacy-policy'], 'La versió gratuïta es finança amb publicitat servida per AdMob i AppLovin.'),
        profiling: unknown('La política no descriu l’elaboració de perfils propis.'),
        aiTraining: unknown('La política no diu si l’àudio dels subtítols automàtics serveix per entrenar models de reconeixement de veu.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['inshot-privacy-policy'], 'Socis publicitaris i proveïdors de suport tècnic.'),
        intraGroupSharing: unknown('La política no descriu la circulació de dades dins del grup InShot.'),
        dataBrokerSales: unknown('La política no esmenta la venda de dades a intermediaris.'),
        internationalTransfers: unknown('La política no tracta les transferències internacionals, tot i que l’editora és una societat de Singapur.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No consta cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['inshot-privacy-policy'], 'La política no fixa cap termini de conservació, llevat que els esborranys es queden al dispositiu fins que s’esborren.'),
        dataAfterDeletion: unknown('La política no descriu què passa amb les dades després d’una sol·licitud d’esborrat.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['inshot-play-data-safety'], 'No hi ha compte pròpiament dit. El desenvolupador declara a Google Play que es pot demanar l’eliminació de les dades.'),
        selfService: f('no', 'official', ['inshot-privacy-policy'], 'La política no descriu cap procediment d’eliminació dins de l’aplicació: cal escriure a l’adreça de contacte.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Esborra els esborranys des de la mateixa aplicació: es guarden al dispositiu.',
          'Per a les dades del servidor, escriu a contactus@inshot.com demanant-ne la supressió.',
          'Restableix l’identificador publicitari del telèfon per tallar el perfil d’AdMob i AppLovin.',
        ],
        dataRetained: 'La política no ho concreta.',
        sources: ['inshot-privacy-policy', 'inshot-play-data-safety'],
      },
      userRights: {
        dataExport: unknown('La política no esmenta el dret de portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['inshot-privacy-policy'], 'Només hi ha una adreça de contacte general; la política no descriu els drets del RGPD ni els terminis de resposta.', {
          url: 'mailto:contactus@inshot.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('La política no descriu cap control de publicitat dins de l’aplicació; només la subscripció de pagament en treu els anuncis.'),
        telemetryOptOut: unknown('No consta cap manera de desactivar Firebase.'),
        granularControls: f('no', 'official', ['inshot-privacy-policy'], 'L’aplicació no ofereix cap panell de privadesa.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'editorial', ['inshot-privacy-policy'], 'Una política que no identifica la responsable del tractament impedeix saber a qui s’han d’adreçar les reclamacions i les sol·licituds de drets.'),
        darkPatternList: [
          {
            type: 'confusing-language',
            severity: 'medium',
            description:
              'La política no identifica la societat responsable del tractament ni el país on s’allotgen les dades.',
            sources: ['inshot-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: na('L’edició es fa al dispositiu; no hi ha comunicacions entre persones usuàries.'),
        transportEncryption: f('yes', 'official', ['inshot-play-data-safety'], 'El desenvolupador declara a Google Play que les dades es xifren en trànsit.'),
        atRestEncryption: unknown('La política no descriu el xifratge en repòs.'),
        mfa: na('El servei no té comptes amb contrasenya.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No consta cap canal específic de comunicació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'capcut',
          comparability: 'equivalent',
          rationale: 'Mateixes funcions d’edició de vídeo per a xarxes socials.',
          tradeOffs: 'Pertany al grup ByteDance i la seva recollida de dades és més àmplia; InShot, en canvi, edita en local.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política d’InShot està escrita pensant en Android i en la normativa xinesa d’aplicacions, no en el RGPD: parla de l’identificador d’Android, no anomena cap responsable i no esmenta les transferències internacionals. L’arquitectura local, però, fa que el contingut editat quedi poc exposat.',
        openQuestions: [
          'L’etiqueta de privadesa de l’App Store no s’ha pogut consultar: Apple va respondre amb un error 429 durant tota la revisió.',
          'Quina societat és la responsable del tractament i on s’allotgen les dades?',
        ],
      },
    },

    /* ═══════════════════════════ Epson Smart Panel ═══════════════════════════ */
    {
      slug: 'epson-smart-panel',
      name: 'Epson Smart Panel',
      company: 'epson-europe',
      categories: ['utilitats'],
      tagline: 'L’aplicació que controla la impressora no té cap política de privadesa pròpia localitzable',
      summary:
        'Epson Smart Panel configura i governa les impressores i els escàners d’Epson des del telèfon: hi passen els documents que s’imprimeixen i s’escanegen, i l’estat dels consumibles. No hem localitzat cap declaració de privadesa específica de l’aplicació, i l’única font pública aplicable és la declaració corporativa d’Epson Europe B.V., que parla de màrqueting i de la botiga en línia, no de l’aparell.',
      platforms: ['ios', 'android'],
      businessModel: 'unknown',
      jurisdiction: 'Països Baixos, per a les persones usuàries europees',
      links: {
        website: 'https://www.epson.eu',
        privacyPolicy: 'https://www.epson.eu/en_EU/privacy',
        appStore: 'https://apps.apple.com/es/app/id1477796092',
      },
      accountRequired: unknown('No hem pogut verificar si cal un compte d’Epson per a les funcions bàsiques de configuració i impressió.'),
      openSource: unknown('No consta cap component publicat amb llicència lliure.'),
      dataSummary:
        'Una aplicació d’impressió veu el que s’imprimeix i el que s’escaneja: contractes, receptes mèdiques, documents d’identitat. Sense una declaració de privadesa pròpia no es pot saber quina part d’aquest flux queda al telèfon, quina passa per la xarxa local i quina arriba als servidors d’Epson.',
      dataCollection: [
        row('fitxers-i-documents', 'unknown', { note: 'L’aplicació imprimeix i escaneja documents, però cap font pública descriu si en surt res del dispositiu ni de la xarxa local.' }),
        row('fotografies-i-videos', 'unknown', { note: 'La impressió de fotografies és una de les funcions principals; no hi ha documentació sobre el seu tractament.' }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['epson-europe-privacy'], note: 'Segons la declaració corporativa, quan es registra un producte o es fa servir la botiga en línia.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['epson-europe-privacy'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['epson-europe-privacy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['epson-europe-privacy'] }),
        row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['epson-europe-privacy'], note: 'Compres a la botiga d’Epson, no consum de l’aparell.' }),
        row('dades-de-diagnostic', 'unknown', { note: 'No hem trobat documentació sobre la telemetria que l’aplicació o la impressora envien al fabricant.' }),
      ],
      tracking: {
        crossAppTracking: unknown('Cap font pública ho descriu.'),
        advertisingIdentifiers: unknown('Cap font pública ho descriu.'),
        thirdPartyTrackersPresent: unknown('Cap font pública ho descriu.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['epson-europe-privacy'], 'La declaració corporativa descriu màrqueting directe i elaboració de perfils de client basats en l’interès legítim, però referits al web i a la botiga, no a l’aplicació.'),
        profiling: f('partial', 'official', ['epson-europe-privacy'], 'Anàlisi de mercat i perfils de client, segons la declaració corporativa.'),
        aiTraining: unknown('Cap font pública ho descriu.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['epson-europe-privacy'], 'Proveïdors que actuen seguint instruccions d’Epson.'),
        intraGroupSharing: f('yes', 'official', ['epson-europe-privacy'], 'Les dades circulen dins del grup Epson internacional.'),
        dataBrokerSales: unknown('La declaració no esmenta la venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['epson-europe-privacy'], 'Transferències fora de l’Espai Econòmic Europeu emparades en decisions d’adequació o clàusules contractuals tipus.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No consta cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['epson-europe-privacy'], 'La declaració corporativa fixa dos anys per a màrqueting i deu per a la botiga en línia, però no diu res dels documents que passen per l’aplicació.'),
        dataAfterDeletion: unknown('No hi ha documentació específica de l’aplicació.'),
        periods: [
          { period: '2 anys des del darrer contacte, per a les dades de màrqueting', sources: ['epson-europe-privacy'] },
          { period: '10 anys per a les dades de la botiga en línia', sources: ['epson-europe-privacy'] },
        ],
      },
      accountDeletion: {
        possible: f('partial', 'official', ['epson-europe-privacy'], 'El dret de supressió es reconeix a la declaració corporativa, que remet a un formulari de contacte.'),
        selfService: unknown('No hem pogut verificar si l’aplicació permet esborrar el compte d’Epson.'),
        difficulty: 'unknown',
        steps: [
          'Fes servir el formulari de contacte de privadesa d’Epson Europe per demanar la supressió.',
          'Com a alternativa, escriu al delegat de protecció de dades, edpo@epson.eu.',
        ],
        sources: ['epson-europe-privacy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['epson-europe-privacy'], 'El dret de portabilitat es reconeix, sense eina d’autoservei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['epson-europe-privacy'], 'Hi ha un delegat de protecció de dades europeu amb adreça pública.', {
          url: 'mailto:edpo@epson.eu',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['epson-europe-privacy'], 'Les preferències de màrqueting es gestionen des del compte d’Epson i des dels enllaços de baixa dels correus.'),
        telemetryOptOut: unknown('No hi ha documentació sobre la telemetria de l’aplicació ni sobre com desactivar-la.'),
        granularControls: unknown('No hi ha documentació sobre els controls de privadesa dins de l’aplicació.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('Sense documentació específica de l’aplicació no es pot valorar.'),
      },
      security: {
        e2ee: na('La impressió passa per la xarxa local o pel servei d’impressió remota; no és una comunicació entre persones.'),
        transportEncryption: unknown('No hi ha documentació pública sobre el xifratge del trànsit de l’aplicació.'),
        atRestEncryption: unknown('No hi ha documentació pública.'),
        mfa: unknown('No hem pogut verificar si el compte d’Epson admet verificació en dos passos.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hem localitzat cap canal públic de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Molts camps d’aquesta fitxa consten com a desconeguts. Una aplicació que manipula documents impresos i escanejats hauria de tenir una declaració de privadesa pròpia i accessible; no l’hem trobada, i l’única font aplicable parla de màrqueting i de la botiga en línia. Les pàgines de suport d’Epson van respondre amb errors 403 i 404 durant la revisió.',
        openQuestions: [
          'L’etiqueta de privadesa de l’App Store no s’ha pogut consultar: Apple va respondre amb un error 429 durant tota la revisió.',
          'Existeix una declaració de privadesa específica d’Epson Smart Panel? On es publica?',
          'Els documents que s’escanegen i s’imprimeixen passen en algun moment pels servidors d’Epson?',
        ],
      },
    },

    /* ═══════════════════════════ Mistbook ═══════════════════════════ */
    {
      slug: 'mistbook',
      name: 'Mistbook',
      company: 'marc-canet-dev',
      categories: ['llibres-i-lectura'],
      tagline: 'Seguiment de lectures sense publicitat ni seguiment de tercers, amb baixa des de la mateixa aplicació',
      summary:
        'Mistbook és una aplicació independent per portar el registre de les lectures: llibres, llistes, notes, valoracions i progrés. La política declara que no hi ha publicitat, ni perfilat, ni seguiment de tercers, que l’analítica és anònima i desactivable, i que el compte s’esborra des de la mateixa configuració. El punt feble és que la política no diu qui és la persona o societat responsable del tractament.',
      platforms: ['ios'],
      businessModel: 'freemium',
      jurisdiction: 'No declarada a la política',
      links: {
        website: 'https://mistbook.app',
        privacyPolicy: 'https://mistbook.app/privacy',
        appStore: 'https://apps.apple.com/es/app/id6787462448',
      },
      accountRequired: f('no', 'official', ['mistbook-privacy-policy'], 'Es pot fer servir en local; el compte, amb Apple o Google, només cal per sincronitzar entre dispositius.'),
      openSource: unknown('No consta cap repositori públic del codi.'),
      dataSummary:
        'Les lectures poden revelar conviccions, salut, sexualitat o moments vitals. Mistbook les desa localment i les sincronitza amb els seus servidors, sense publicitat ni cessió a tercers.',
      dataCollection: [
        row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['mistbook-privacy-policy'], note: 'La biblioteca, les llistes, les notes, les valoracions i el progrés de lectura: es desen al dispositiu i se sincronitzen amb els servidors de Mistbook.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['mistbook-privacy-policy'], note: 'Només si s’entra amb Apple o Google; l’inici de sessió amb Apple permet amagar-la.' }),
        row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['mistbook-privacy-policy'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['mistbook-privacy-policy'], note: 'Identificador d’instal·lació anònim i xifrat, per connectar amb el servidor.' }),
        row('interaccions-i-us', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['mistbook-privacy-policy'], note: 'Estadístiques anònimes i agregades que es poden desactivar des de la configuració.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['mistbook-privacy-policy'], note: 'Mistbook només rep la confirmació de la compra; el pagament el gestionen Apple i Google.' }),
        row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['mistbook-privacy-policy'], note: 'La política declara que no hi ha publicitat ni seguiment de tercers.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['mistbook-privacy-policy'], 'La política declara que no hi ha seguiment de tercers.'),
        advertisingIdentifiers: f('no', 'official', ['mistbook-privacy-policy']),
        thirdPartyTrackersPresent: f('no', 'official', ['mistbook-privacy-policy']),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['mistbook-privacy-policy'], 'No hi ha publicitat dins de l’aplicació.'),
        profiling: f('no', 'official', ['mistbook-privacy-policy'], 'La política descarta expressament el perfilat de comportament.'),
        aiTraining: unknown('La política no esmenta l’ús de les dades per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('no', 'official', ['mistbook-privacy-policy'], 'Més enllà de l’App Store i Google Play com a processadors del pagament, la política no declara cessions.'),
        intraGroupSharing: na('És una aplicació d’un desenvolupador independent, sense grup empresarial.'),
        dataBrokerSales: f('no', 'official', ['mistbook-privacy-policy']),
        internationalTransfers: unknown('La política no diu on són els servidors de sincronització.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No consta cap informe de transparència; és habitual en aplicacions independents.'),
      },
      retention: {
        definedPeriods: unknown('La política no fixa terminis de conservació.'),
        dataAfterDeletion: f('partial', 'official', ['mistbook-privacy-policy'], 'L’esborrat del compte inclou les dades del servidor, però la política no detalla les còpies de seguretat.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['mistbook-privacy-policy']),
        selfService: f('yes', 'official', ['mistbook-privacy-policy'], 'Configuració → Compte → «Eliminar compte», sense passar per atenció al client.'),
        difficulty: 'easy',
        steps: [
          'Obre Mistbook i ves a Configuració.',
          'Entra a Compte i tria «Eliminar compte».',
          'Si només vols esborrar les dades del telèfon, fes servir l’opció d’esborrat de dades locals de la configuració.',
        ],
        sources: ['mistbook-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política no descriu cap eina d’exportació de la biblioteca.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['mistbook-privacy-policy'], 'Hi ha una adreça d’assistència accessible des de la configuració, però la política no identifica la persona responsable ni els terminis de resposta.'),
      },
      controls: {
        adPersonalizationOptOut: na('No hi ha publicitat dins de l’aplicació.'),
        telemetryOptOut: f('yes', 'official', ['mistbook-privacy-policy'], 'L’analítica anònima es pot desactivar des de la configuració.'),
        granularControls: f('partial', 'official', ['mistbook-privacy-policy'], 'Hi ha control sobre l’analítica i sobre l’esborrat, que és el que importa en una aplicació sense publicitat.'),
        defaultPosture: 'protective',
        darkPatterns: f('no', 'official', ['mistbook-privacy-policy'], 'La baixa és autoservei i no hi ha publicitat ni consentiments encadenats.'),
      },
      security: {
        e2ee: unknown('La política parla de sincronització «segura», però no diu si el xifratge és d’extrem a extrem.'),
        transportEncryption: f('partial', 'official', ['mistbook-privacy-policy'], 'La política descriu la sincronització com a segura i l’identificador d’instal·lació com a xifrat, sense concretar el protocol.'),
        atRestEncryption: unknown('La política no descriu el xifratge en repòs.'),
        mfa: na('L’accés es delega a Apple o Google, que ja apliquen els seus propis factors d’autenticació.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No consta cap canal específic de comunicació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'goodreads',
          comparability: 'equivalent',
          rationale: 'Cobreix el mateix ús de portar el registre de lectures amb una comunitat molt més gran.',
          tradeOffs: 'Pertany al grup Amazon i converteix l’historial de lectures en una xarxa social pública connectada amb la botiga.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'És una aplicació petita que renuncia a la publicitat i posa la baixa a la vista. Li falta el tràmit formal: sense identificar la responsable del tractament ni el lloc dels servidors, el RGPD no queda cobert.',
        openQuestions: [
          'L’etiqueta de privadesa de l’App Store no s’ha pogut consultar: Apple va respondre amb un error 429 durant tota la revisió.',
          'Qui és la persona o societat responsable del tractament i on s’allotgen els servidors de sincronització?',
        ],
      },
    },

    /* ═══════════════════════════ Wattpad ═══════════════════════════ */
    {
      slug: 'wattpad',
      name: 'Wattpad',
      company: 'wattpad-corp',
      categories: ['llibres-i-lectura', 'comunitats-i-forums'],
      tagline: 'Comunitat d’escriptura amb públic adolescent, publicitat de Google i una filtració de 268 milions de comptes',
      summary:
        'Wattpad és una plataforma de lectura i escriptura social amb una base d’usuàries molt jove. El que s’hi llegeix i s’hi escriu alimenta la personalització i la publicitat, servida amb Google AdSense for Platforms, a qui la política reconeix que es cedeix l’adreça electrònica. El 2020 va patir una de les filtracions més grans documentades: 268 milions de comptes amb noms, adreces, gènere, dates de naixement i contrasenyes xifrades amb bcrypt.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'advertising',
      jurisdiction: 'Canadà, amb representant a la Unió Europea a Dublín',
      userBase: 'Comunitat global de milions de persones lectores i escriptores',
      links: {
        website: 'https://www.wattpad.com',
        privacyPolicy: 'https://policies.wattpad.com/privacy',
        terms: 'https://policies.wattpad.com/terms',
        appStore: 'https://apps.apple.com/es/app/id306310789',
      },
      accountRequired: f('partial', 'official', ['wattpad-privacy-policy'], 'Es pot llegir sense compte, però desar lectures, comentar o publicar en demana un amb data de naixement.'),
      openSource: f('no', 'official', ['wattpad-terms'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'L’historial de lectura d’una plataforma de ficció revela gèneres, temes i identitat i, en una comunitat adolescent, etapes de formació personal. Wattpad hi suma la data de naixement, el gènere declarat i la ubicació aproximada, i ho fa servir per personalitzar i per anunciar.',
      dataCollection: [
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['wattpad-privacy-policy', 'wattpad-play-data-safety'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['wattpad-privacy-policy'], note: 'La política reconeix que es comparteix amb Google AdSense for Platforms.' }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'personalitzacio-de-continguts'], sources: ['wattpad-privacy-policy'], note: 'Serveix per oferir contingut adequat a l’edat; el servei no admet menors de 13 anys.' }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['wattpad-privacy-policy'] }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['wattpad-privacy-policy', 'wattpad-play-data-safety'] }),
        row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['wattpad-privacy-policy'] }),
        row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['wattpad-terms', 'wattpad-play-data-safety'], note: 'Les obres i els comentaris són públics i queden sota una llicència no exclusiva de publicació.' }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['wattpad-play-data-safety'], note: 'La fitxa de Google Play declara «altres missatges dins de l’aplicació» amb finalitat de personalització.' }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['personalitzacio-de-continguts', 'recomanacions-algoritmiques'], sources: ['wattpad-privacy-policy'], note: 'Les pàgines visitades i les històries llegides.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['wattpad-play-data-safety'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts', 'seguretat-i-prevencio-del-frau'], sources: ['wattpad-privacy-policy', 'wattpad-play-data-safety'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['wattpad-privacy-policy'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['wattpad-play-data-safety'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['wattpad-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['wattpad-privacy-policy', 'wattpad-play-data-safety'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['wattpad-play-data-safety'], note: 'Monedes i capítols de pagament.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['wattpad-play-data-safety'], note: 'Imatges de perfil i portades de les obres.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['wattpad-privacy-policy'], 'La publicitat es serveix amb Google AdSense for Platforms, a qui es cedeix l’adreça electrònica.'),
        advertisingIdentifiers: f('yes', 'official', ['wattpad-play-data-safety']),
        thirdPartyTrackersPresent: f('yes', 'official', ['wattpad-privacy-policy']),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['wattpad-privacy-policy'], 'Publicitat segmentada servida per Google, amb consentiment per als correus comercials quan la llei ho exigeix.'),
        profiling: f('yes', 'official', ['wattpad-privacy-policy'], 'Personalitza el descobriment d’històries a partir del comportament de lectura.'),
        aiTraining: unknown('La política no diu si les obres publicades serveixen per entrenar models, una qüestió especialment rellevant en una plataforma de ficció original.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['wattpad-privacy-policy'], 'Empreses afiliades, proveïdors de correu i allotjament, Google AdSense for Platforms i autoritats quan la llei ho exigeix.'),
        intraGroupSharing: f('yes', 'official', ['wattpad-privacy-policy'], 'La política preveu la compartició amb les empreses afiliades del grup, sense enumerar-les.'),
        dataBrokerSales: f('no', 'official', ['wattpad-terms'], 'Les condicions declaren que mai no es vendrà el contingut de les persones usuàries a tercers sense permís exprés.'),
        internationalTransfers: f('yes', 'official', ['wattpad-privacy-policy'], 'Les dades es tracten al Canadà i als Estats Units; per al Canadà hi ha decisió d’adequació de la Comissió Europea.', {
          mechanism: 'adequacy',
        }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No consta cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['wattpad-privacy-policy'], 'Els comptes desactivats es poden recuperar durant sis mesos i després s’esborren definitivament.'),
        dataAfterDeletion: f('yes', 'official', ['wattpad-privacy-policy', 'wattpad-terms'], 'Els comentaris i les aportacions a la comunitat no s’esborren: s’anonimitzen i es queden a la plataforma.'),
        periods: [
          { period: '6 mesos de desactivació abans de l’esborrat definitiu', sources: ['wattpad-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['wattpad-privacy-policy']),
        selfService: f('partial', 'official', ['wattpad-privacy-policy'], 'La política remet a la configuració del perfil per gestionar el compte i a l’adreça de privadesa per a la sol·licitud formal de supressió; no hem pogut verificar el botó de baixa perquè el centre d’ajuda bloqueja l’accés automatitzat.'),
        difficulty: 'medium',
        waitingPeriodDays: 180,
        steps: [
          'Entra al teu perfil de Wattpad i revisa la configuració del compte.',
          'Sol·licita la supressió escrivint a privacy@wattpad.com, invocant l’article 17 del RGPD.',
          'Tingues present que el compte queda desactivat sis mesos abans de l’esborrat definitiu.',
          'Descarrega abans les teves obres: les condicions no garanteixen que es recuperin després.',
        ],
        obstacles:
          'Els comentaris i les aportacions a la comunitat es queden a la plataforma, anonimitzats, i no es poden esborrar.',
        dataRetained: 'Comentaris i missatges als taulers, anonimitzats però conservats.',
        sources: ['wattpad-privacy-policy', 'wattpad-terms'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['wattpad-privacy-policy'], 'Es pot demanar una còpia en format llegible per màquina escrivint a l’adreça de privadesa; no hi ha eina d’autoservei.', {
          url: 'mailto:privacy@wattpad.com',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['wattpad-privacy-policy'], 'Hi ha representant a la Unió Europea designat a l’article 27 (DataRep, Dublín) i una adreça de privadesa.', {
          url: 'mailto:wattpad@datarep.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('La política no descriu cap control per desactivar la publicitat personalitzada dins de l’aplicació.'),
        telemetryOptOut: unknown('No consta cap manera de desactivar l’analítica d’ús.'),
        granularControls: f('partial', 'official', ['wattpad-privacy-policy'], 'Hi ha preferències de correu i de visibilitat del perfil, però no un panell de privadesa per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'editorial', ['wattpad-privacy-policy'], 'Els sis mesos de desactivació abans de l’esborrat funcionen com una finestra de retenció: el compte continua existint mig any després de demanar-ne la baixa.'),
        darkPatternList: [
          {
            type: 'hidden-exit',
            severity: 'medium',
            description:
              'La supressió definitiva no és immediata: el compte queda desactivat sis mesos i els comentaris s’anonimitzen en lloc d’esborrar-se.',
            sources: ['wattpad-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: na('La plataforma és de publicació pública; els missatges privats no es presenten com a xifrats d’extrem a extrem.'),
        transportEncryption: f('yes', 'official', ['wattpad-play-data-safety'], 'El desenvolupador declara a Google Play que les dades es xifren en trànsit.'),
        atRestEncryption: f('partial', 'independent', ['wattpad-hibp-breach'], 'Les contrasenyes exposades a la filtració del 2020 estaven xifrades amb bcrypt, un algorisme adequat; la resta de camps eren en clar.'),
        mfa: unknown('La política no esmenta la verificació en dos passos.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses públic; el domini no serveix cap fitxer security.txt accessible.'),
        vulnerabilityDisclosure: unknown('No consta cap canal específic de comunicació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'storytel',
          comparability: 'partial',
          rationale: 'Per llegir ficció amb un model de subscripció que no depèn de la publicitat segmentada.',
          tradeOffs: 'No té comunitat d’escriptura ni obres originals publicades per persones usuàries, que és el nucli de Wattpad.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La filtració del 2020 continua sent el fet més rellevant de la fitxa i té valor pràctic: qui hi tingués compte abans del juliol d’aquell any hauria de canviar la contrasenya a tot arreu on la reutilitzés. La cessió de l’adreça electrònica a la plataforma publicitària de Google, en un servei amb públic adolescent, és l’altre punt rellevant.',
        openQuestions: [
          'L’etiqueta de privadesa de l’App Store no s’ha pogut consultar: Apple va respondre amb un error 429 durant tota la revisió.',
          'Les obres publicades a Wattpad s’utilitzen per entrenar models de llenguatge?',
          'Hi ha un botó d’eliminació del compte a la configuració? El centre d’ajuda bloqueja l’accés automatitzat.',
        ],
      },
    },
  ],

  incidents: [
    {
      slug: 'wattpad-filtracio-2020',
      title: 'Filtració de 268 milions de comptes de Wattpad',
      type: 'breach',
      severity: 'critical',
      apps: ['wattpad'],
      company: 'wattpad-corp',
      occurredAt: '2020-06-29',
      disclosedAt: '2020-07-19',
      description:
        'El juny del 2020, la base de dades de Wattpad va quedar exposada i es va posar a la venda abans de publicar-se en un fòrum de pirateria, des d’on es va difondre àmpliament. Es van exposar 268.765.495 registres amb noms i noms d’usuari, adreces electròniques, adreces IP, gènere, data de naixement, biografia, ubicació geogràfica, perfils de xarxes socials i contrasenyes xifrades amb bcrypt. Les contrasenyes estaven protegides amb un algorisme adequat, però la combinació de correu, data de naixement i gènere és suficient per a campanyes de suplantació dirigides, i afecta una comunitat amb molta presència adolescent.',
      affectedPeople: '268.765.495 comptes',
      sources: ['wattpad-hibp-breach'],
    },
  ],

  storeIds: {
    'scrl-photo-collage': 'com.dopedevelopment.Panels',
    freeprints: 'com.planetart.fpes',
    'glam-ai': 'com.mynalabs.saidit',
    picsart: 'com.picsart.studio',
    faceapp: 'io.faceapp.ios',
    kick: 'com.kick.mobile',
    inshot: 'com.camerasideas.InstaShot',
    'epson-smart-panel': 'com.epson.Epson-Smart',
    mistbook: 'mist.warm.bundle',
    wattpad: 'com.fivemobile.wattpad',
  },
}
