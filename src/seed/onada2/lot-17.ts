import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/**
 * Lot 17 de la segona onada: deu aplicacions de la categoria «Educació» de
 * l'App Store espanyol. El lot barreja tres móns molt diferents: plataformes
 * de centre educatiu on qui mana sobre les dades és l'escola o la universitat
 * (Moodle, Canvas, AeolCloud), serveis de consum amb publicitat i perfilat
 * (Duolingo, Knowunity, TodoTest) i una generació d'aplicacions d'IA molt
 * recents amb polítiques de privadesa genèriques o incompletes (Astra AI,
 * Kiwi AI, YayTalk). La major part de les persones usuàries són menors d'edat.
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'moodle-pty',
      name: 'Moodle',
      legalName: 'Moodle Pty Ltd',
      description:
        'Empresa australiana que desenvolupa Moodle LMS, la plataforma d’aprenentatge de codi obert més estesa als centres educatius. El programari s’instal·la i s’opera al servidor de cada institució, de manera que Moodle Pty Ltd no sol ser la responsable del tractament de les dades de l’alumnat.',
      headquartersCountry: 'AU',
      leadSupervisoryAuthority: 'none',
      supervisoryNote: 'Cap autoritat principal a la UE: no consta establiment únic al territori europeu',
      ownership: 'private',
      foundedYear: 2001,
      primaryRevenueModel: 'mixed',
      website: 'https://moodle.com/',
      productDomains: ['moodle.com', 'moodle.org', 'moodlecloud.com'],
      privacyContact: 'mailto:dpo@moodle.com',
    },
    {
      slug: 'duolingo',
      name: 'Duolingo',
      legalName: 'Duolingo, Inc.',
      description:
        'Empresa cotitzada dels Estats Units que explota l’aplicació d’aprenentatge d’idiomes més descarregada del món. El model és freemium amb publicitat: la versió gratuïta mostra anuncis de xarxes publicitàries de tercers i la subscripció Super els elimina.',
      headquartersCountry: 'US',
      leadSupervisoryAuthority: 'none',
      supervisoryNote: 'Cap: Duolingo, Inc. actua com a responsable des dels Estats Units, emparada en el Marc de Privadesa de Dades UE-EUA',
      ownership: 'public',
      foundedYear: 2011,
      primaryRevenueModel: 'freemium',
      website: 'https://www.duolingo.com/',
      productDomains: ['duolingo.com', 'englishtest.duolingo.com'],
      privacyContact: 'mailto:privacy@duolingo.com',
    },
    {
      slug: 'knowunity',
      name: 'Knowunity',
      legalName: 'Knowunity GmbH',
      description:
        'Empresa alemanya amb seu a Berlín que explota una xarxa d’apunts compartits per estudiants de secundària amb un assistent d’IA integrat («SchoolGPT»). Els ingressos vénen de subscripcions i de la captació publicitària a xarxes socials.',
      headquartersCountry: 'DE',
      euEstablishment: 'DE',
      leadSupervisoryAuthority: 'berlin',
      ownership: 'private',
      foundedYear: 2020,
      primaryRevenueModel: 'freemium',
      website: 'https://knowunity.es/',
      productDomains: ['knowunity.com', 'knowunity.de', 'knowunity.es'],
      privacyContact: 'mailto:support-es@knowunity.com',
    },
    {
      slug: 'astra-ai',
      name: 'Astra AI',
      legalName: 'Astra AI d.o.o.',
      description:
        'Empresa eslovena amb seu a Ljubljana que publica un tutor escolar d’intel·ligència artificial per a matemàtiques, física i química. Té delegat de protecció de dades designat i declara tractar les dades només dins de la Unió Europea.',
      headquartersCountry: 'SI',
      euEstablishment: 'SI',
      leadSupervisoryAuthority: 'ip-si',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://astra.si/ai/',
      productDomains: ['astra.si', 'astra-ai.es'],
      privacyContact: 'mailto:info@astra.si',
    },
    {
      slug: 'autoinet-interactivo',
      name: 'Autoinet Interactivo',
      legalName: 'Autoinet Interactivo, S.L.',
      description:
        'Empresa barcelonina (NIF B62472055) que explota TodoTest, una plataforma de tests per als exàmens teòrics de la DGT i per a la formació professional del transport, adreçada tant a particulars com a autoescoles.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://www.todotest.com/',
      productDomains: ['todotest.com'],
      privacyContact: 'mailto:infos@todotest.com',
    },
    {
      slug: 'blackboard-studio',
      name: 'Blackboard Studio',
      legalName: 'Blackboard Studio S.r.l.',
      description:
        'Estudi italià amb seu a Milà que publica Kiwi AI (abans Kiwinote), una aplicació que converteix gravacions de classe, PDF i vídeos en apunts automàtics. No té cap relació amb Blackboard Inc., l’empresa nord-americana de programari educatiu avui integrada a Anthology.',
      headquartersCountry: 'IT',
      euEstablishment: 'IT',
      leadSupervisoryAuthority: 'garante-it',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://kiwi.app/',
      productDomains: ['kiwi.app', 'kiwinote.ai'],
      privacyContact: 'mailto:help@kiwinote.ai',
    },
    {
      slug: 'aeol-service',
      name: 'AEOL Service',
      legalName: 'AEOL Service, S.L.',
      description:
        'Empresa valenciana amb seu a Silla (NIF B97688261) que fabrica programari de gestió i material didàctic per a autoescoles. AeolCloud és el client per a l’alumnat de les autoescoles que tenen contractat Visual AEOL Cloud.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://aeolservice.es/',
      productDomains: ['aeolservice.es'],
    },
    {
      slug: 'instructure',
      name: 'Instructure',
      legalName: 'Instructure, Inc.',
      description:
        'Empresa nord-americana de Salt Lake City que desenvolupa Canvas LMS, la plataforma d’aprenentatge dominant a la universitat dels Estats Units i molt present a Europa. Opera com a encarregada del tractament per compte de cada centre educatiu, que és qui decideix sobre les dades.',
      headquartersCountry: 'US',
      leadSupervisoryAuthority: 'none',
      supervisoryNote: 'Cap: Instructure, Inc. tracta les dades europees emparada en el Marc de Privadesa de Dades UE-EUA; Instructure Global Ltd. dona cobertura al Regne Unit',
      ownership: 'private',
      foundedYear: 2008,
      primaryRevenueModel: 'subscription',
      website: 'https://www.instructure.com/',
      productDomains: ['instructure.com', 'canvaslms.com', 'masteryconnect.com'],
      privacyContact: 'mailto:privacy@instructure.com',
    },
    {
      slug: 'idealabs-pte',
      name: 'IdeaLabs',
      legalName: 'IdeaLabs Pte. Ltd.',
      description:
        'Estudi de Singapur que publica una família d’aplicacions d’IA de consum (generació de vídeo i de fotografia, tutors conversacionals) sota una mateixa política de privadesa genèrica. YayTalk n’és la versió de conversa en anglès.',
      headquartersCountry: 'SG',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://idealabs.mobi/',
      productDomains: ['idealabs.mobi'],
      privacyContact: 'mailto:service@support.idealabs.mobi',
    },
    {
      slug: 'preply',
      name: 'Preply',
      legalName: 'Preply, Inc.',
      description:
        'Mercat de classes particulars per videoconferència amb desenes de milers de professores i professors autònoms. La societat responsable és nord-americana; a la Unió Europea hi actua mitjançant un representant de l’article 27 del RGPD amb domicili a Barcelona, Preply Europe Services SL.',
      headquartersCountry: 'US',
      leadSupervisoryAuthority: 'none',
      supervisoryNote: 'Cap autoritat principal: Preply, Inc. és responsable des dels Estats Units i designa un representant a la UE a Barcelona',
      ownership: 'private',
      foundedYear: 2012,
      primaryRevenueModel: 'commerce',
      website: 'https://preply.com/es/',
      productDomains: ['preply.com'],
      privacyContact: 'mailto:dpo@preply.com',
    },
  ],

  sources: [
    /* ── Moodle ── */
    s('moodle-app-store-privacy', 'Moodle — Privacidad de la app', 'https://apps.apple.com/es/app/id633359593', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per Moodle Pty Ltd: «No se recopilan datos». La fem servir per contrastar què recull l’aplicació client, en contraposició al que recull el servidor del centre educatiu.',
    }),
    s('moodle-privacy-notice', 'Moodle Privacy Notice', 'https://moodle.com/privacy-notice/', 'Moodle Pty Ltd', 'privacy-policy', 'primary', {
      summary:
        'Avís de privadesa corporatiu de Moodle Pty Ltd. Aclareix que, quan Moodle tracta dades per compte d’un altre responsable, cal adreçar-se a aquest, i dona el contacte del delegat de protecció de dades.',
    }),
    s('moodle-org-privacy', 'Privacy notice — moodle.org', 'https://moodle.org/admin/tool/policy/view.php?policyid=1', 'Moodle Pty Ltd', 'privacy-policy', 'primary', {
      summary:
        'Política enllaçada des de la fitxa de l’App Store. Només cobreix els comptes creats a moodle.org i remet a l’avís corporatiu per a la resta.',
    }),
    s('moodle-security', 'Moodle security announcements', 'https://moodle.org/security/', 'Moodle Pty Ltd', 'technical-doc', 'primary', {
      summary:
        'Llistat públic d’avisos de seguretat (MSA) amb gravetat, versions afectades i versions corregides, i formulari per comunicar vulnerabilitats.',
    }),
    s('moodle-app-repository', 'moodlehq/moodleapp', 'https://github.com/moodlehq/moodleapp', 'Moodle Pty Ltd', 'repository', 'primary', {
      summary: 'Codi font complet de l’aplicació mòbil oficial, publicat amb llicència Apache 2.0.',
    }),

    /* ── Duolingo ── */
    s('duolingo-app-store-privacy', 'Duolingo — Privacidad de la app', 'https://apps.apple.com/es/app/id570060128', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Duolingo. Declara vuit famílies de dades utilitzades per rastrejar la persona a través d’aplicacions i webs d’altres empreses, inclosos contingut d’usuari i diagnòstics.',
    }),
    s('duolingo-privacy-policy', 'Duolingo Privacy Policy', 'https://www.duolingo.com/privacy', 'Duolingo, Inc.', 'privacy-policy', 'primary', {
      publishedAt: '2026-05-26',
      summary:
        'Política vigent des del 26 de maig de 2026. Detalla el perfil públic per defecte, la sincronització de contactes amb resum criptogràfic, les funcions d’IA amb OpenAI i Google, la gravació de sessions amb FullStory i la publicitat personalitzada.',
    }),
    s('duolingo-scraping-press', 'Scraped data of 2.6 million Duolingo users released on hacking forum', 'https://www.bleepingcomputer.com/news/security/scraped-data-of-26-million-duolingo-users-released-on-hacking-forum/', 'BleepingComputer', 'press', 'secondary', {
      publishedAt: '2023-08-23',
      summary:
        'Crònica de la publicació en un fòrum de 2,6 milions de fitxes d’usuari de Duolingo, obtingudes d’una API oberta que confirmava si una adreça electrònica tenia compte.',
    }),

    /* ── Knowunity ── */
    s('knowunity-app-store-privacy', 'Knowunity — Privacidad de la app', 'https://apps.apple.com/es/app/id1484296272', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Knowunity GmbH: dades d’ús utilitzades per rastrejar, i identificadors, compres i contactes vinculats a la identitat amb finalitat publicitària.',
    }),
    s('knowunity-privacy-policy', 'Knowunity Política de Privacidad', 'https://knowunity.es/legal/privacy', 'Knowunity GmbH', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política molt detallada, amb taula de galetes, llista nominal d’encarregats i base jurídica per a cada tractament. Inclou l’apartat sobre SchoolGPT i els quatre proveïdors de models d’IA.',
    }),
    s('knowunity-imprint', 'Aviso Legal — Knowunity', 'https://knowunity.es/legal/imprint', 'Knowunity GmbH', 'terms', 'primary', {
      language: 'es',
      summary: 'Identificació de l’empresa responsable: Knowunity GmbH, Rosenstraße 16, Berlín, amb registre mercantil i NIF-IVA.',
    }),

    /* ── Astra AI ── */
    s('astra-ai-app-store-privacy', 'Astra AI — Privacidad de la app', 'https://apps.apple.com/es/app/id6751030141', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa d’Astra AI d.o.o. Declara dades de contacte, identificadors i dades d’ús per rastrejar la persona, i el nom per a publicitat de tercers.',
    }),
    s('astra-ai-privacy-policy', 'Privacy Policy — Astra.si', 'https://astra.si/en/privacy-policy/', 'Astra AI d.o.o.', 'privacy-policy', 'primary', {
      summary:
        'Política de privadesa i galetes del lloc astra.si/ai/. Identifica el responsable i el delegat, llista les dades escolars recollides, nega transferències a tercers països i nega l’elaboració de perfils.',
    }),

    /* ── TodoTest ── */
    s('todotest-app-store-privacy', 'TodoTest — Privacidad de la app', 'https://apps.apple.com/es/app/id488225258', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa d’Autoinet Interactivo. Només declara identificadors, no vinculats a la identitat, i el seu ús per a publicitat de tercers i per rastrejar.',
    }),
    s('todotest-privacy-policy', 'Política de privacidad — Todotest', 'https://www.todotest.com/politica_privacidad.asp', 'Autoinet Interactivo, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política redactada sobre el RGPD i la LOPDGDD, amb finalitats, bases jurídiques i terminis. Reconeix l’elaboració de perfils a partir de compres i interessos, amb consentiment.',
    }),

    /* ── Kiwi AI ── */
    s('kiwi-ai-app-store-privacy', 'Kiwi AI — Privacidad de la app', 'https://apps.apple.com/es/app/id6737851059', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Blackboard Studio S.r.l. Declara dades d’àudio i fotografies vinculades a la identitat, i identificadors i dades d’ús per rastrejar.',
    }),
    s('kiwi-ai-privacy-policy', 'Privacy Policy of Kiwi AI', 'https://www.iubenda.com/privacy-policy/20071187', 'Blackboard Studio S.r.l.', 'privacy-policy', 'primary', {
      publishedAt: '2026-03-05',
      summary:
        'Política generada amb la plantilla d’Iubenda. Identifica el responsable a Milà i tres encarregats (PostHog, Stripe, Apple), però no descriu ni les gravacions d’àudio ni el tractament amb models de llenguatge.',
    }),

    /* ── AeolCloud ── */
    s('aeolcloud-app-store-privacy', 'AeolCloud — Privacidad de la app', 'https://apps.apple.com/es/app/id1057632699', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa d’AeolService: «No se recopilan datos». L’enllaç a la política de privadesa del desenvolupador porta a un avís legal.',
    }),
    s('aeolcloud-legal-notice', 'Aviso Legal — Aeol Service', 'https://aeolservice.es/aviso-legal', 'AEOL Service, S.L.', 'terms', 'primary', {
      language: 'es',
      summary:
        'Avís legal del lloc corporatiu, amb la identificació de l’empresa. És el document que l’App Store presenta com a política de privadesa de l’aplicació, tot i que no descriu cap tractament de dades.',
    }),

    /* ── Canvas ── */
    s('canvas-lms-app-store-privacy', 'Canvas by Instructure — Privacidad de la app', 'https://apps.apple.com/es/app/id480883488', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa d’Instructure. És l’única del lot que no declara cap dada utilitzada per rastrejar la persona a través d’altres empreses.',
    }),
    s('canvas-lms-privacy-notice', 'Instructure Product Privacy Notice', 'https://www.instructure.com/policies/privacy', 'Instructure, Inc.', 'privacy-policy', 'primary', {
      summary:
        'Avís de privadesa dels productes. Estableix que el centre educatiu decideix l’ús de les dades, que Instructure no fa publicitat a l’alumnat ni perfilat, i detalla el Marc de Privadesa de Dades UE-EUA.',
    }),
    s('canvas-lms-trust-center', 'Compliance — Instructure Trust Center', 'https://www.instructure.com/trust-center/compliance', 'Instructure, Inc.', 'audit', 'primary', {
      summary:
        'Pàgina de compliment del centre de confiança: auditories SOC 2 Type 2, ISO 27001, NIST 800-53 i Cyber Essentials Plus, amb avaluació anual de proveïdors.',
    }),
    s('canvas-lms-vulnerability-disclosure', 'Vulnerability Disclosure Program — Instructure', 'https://www.instructure.com/trust-center/vulnerability-disclosure', 'Instructure, Inc.', 'technical-doc', 'primary', {
      summary:
        'Política de divulgació responsable i formulari d’enviament. El programa de recompenses és privat a Bugcrowd i cal demanar l’alta a security@instructure.com.',
    }),
    s('canvas-lms-repository', 'instructure/canvas-lms', 'https://github.com/instructure/canvas-lms', 'Instructure, Inc.', 'repository', 'primary', {
      summary: 'Codi font de Canvas LMS amb llicència AGPL-3.0. Les aplicacions mòbils tenen repositori propi sense fitxer de llicència.',
    }),
    s('canvas-lms-breach-krebs', 'Canvas Breach Disrupts Schools & Colleges Nationwide', 'https://krebsonsecurity.com/2026/05/canvas-breach-disrupts-schools-colleges-nationwide/', 'Krebs on Security', 'press', 'independent', {
      publishedAt: '2026-05-13',
      summary:
        'Cronologia de la intrusió de maig de 2026 a Canvas: dades exfiltrades, contradiccions en la comunicació d’Instructure i pagament als extorsionadors.',
    }),

    /* ── YayTalk ── */
    s('yaytalk-app-store-privacy', 'YayTalk — Privacidad de la app', 'https://apps.apple.com/es/app/id6743074605', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa d’IdeaLabs. Declara compres, identificadors i dades d’ús per rastrejar, i dades d’àudio vinculades a la identitat.',
    }),
    s('yaytalk-privacy-policy', 'IdeaLabs Privacy Policy', 'https://idealabs.mobi/privacy-policy', 'IdeaLabs Pte. Ltd.', 'privacy-policy', 'primary', {
      publishedAt: '2025-07-28',
      summary:
        'Política comuna a totes les aplicacions de l’estudi. Parla d’aplicacions de vídeo i fotografia amb IA, i esmenta OpenAI i un proveïdor extern per als missatges de veu; reconeix publicitat conductual i entrenament d’IA amb el contingut aportat.',
    }),

    /* ── Preply ── */
    s('preply-app-store-privacy', 'Preply — Privacidad de la app', 'https://apps.apple.com/es/app/id1352790442', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de Preply Inc. Declara compres, dades de contacte, identificadors i dades d’ús utilitzats per rastrejar la persona a través d’altres empreses.',
    }),
    s('preply-privacy-policy', 'Preply Privacy Policy', 'https://termsofuse.preply.com/terms_of_use/en_PrivacyPolicy.pdf', 'Preply, Inc.', 'privacy-policy', 'primary', {
      publishedAt: '2026-06-01',
      summary:
        'Política en PDF de 22 pàgines. Identifica el responsable, el delegat i el representant a la UE; detalla l’ús de gravacions de classe per a entrenament d’IA, la verificació biomètrica del professorat i els terminis de conservació.',
    }),
    s('preply-delete-profile', 'How to delete your profile — Preply Help Center', 'https://help.preply.com/en/articles/4179308-how-to-delete-your-profile', 'Preply, Inc.', 'support-doc', 'primary', {
      summary:
        'Passos reals per eliminar el perfil d’estudiant: botó vermell «Delete account» al final de la configuració i confirmació escrivint l’adreça electrònica.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ Moodle ═══════════════════════════ */
    {
      slug: 'moodle',
      name: 'Moodle',
      company: 'moodle-pty',
      categories: ['educacio'],
      tagline: 'L’aplicació no recull res: qui decideix sobre les dades és el teu centre educatiu',
      summary:
        'Moodle és un client mòbil que es connecta al servidor Moodle del teu institut, universitat o empresa. Per això l’etiqueta de l’App Store diu que la desenvolupadora no recull cap dada: tot el que hi escrius, lliures o consultes queda al servidor del centre, que és el responsable del tractament i qui fixa els terminis i els drets. El programari és lliure i el codi de l’aplicació és públic, cosa que permet auditar què envia i cap on.',
      platforms: ['ios', 'android', 'web', 'windows', 'macos', 'linux'],
      businessModel: 'freemium',
      jurisdiction: 'La del centre educatiu que opera el servidor; Moodle Pty Ltd és australiana',
      userBase: 'Present a centenars de milers de llocs registrats arreu del món',
      links: {
        website: 'https://moodle.com/',
        privacyPolicy: 'https://moodle.com/privacy-notice/',
        appStore: 'https://apps.apple.com/es/app/id633359593',
      },
      accountRequired: f('yes', 'official', ['moodle-org-privacy'], 'Cal un compte al lloc Moodle de la institució: l’aplicació no té servei propi al qual registrar-se.'),
      openSource: f('yes', 'official', ['moodle-app-repository'], 'El codi de l’aplicació mòbil és públic amb llicència Apache 2.0 i el de Moodle LMS, amb GPL.', {
        licence: 'Apache-2.0',
        url: 'https://github.com/moodlehq/moodleapp',
      }),
      dataSummary:
        'El conjunt de dades d’un Moodle de centre és un retrat acadèmic complet: quan es connecta cada persona, quant triga a lliurar, què escriu als fòrums, quines notes treu i quines converses manté amb el professorat. La diferència respecte de les altres fitxes del lot és que aquest retrat no surt del centre cap a una empresa de publicitat.',
      dataCollection: [
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['moodle-org-privacy'], note: 'El compte el gestiona la institució que opera el servidor.' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['moodle-org-privacy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['moodle-org-privacy'] }),
        row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['moodle-org-privacy'], note: 'Les aportacions a fòrums i activitats queden associades al compte.' }),
        row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['moodle-org-privacy'], note: 'Els lliuraments de tasques es guarden al servidor del centre.' }),
        row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['moodle-org-privacy'], note: 'La missatgeria interna amb professorat i companyes és opcional però habitual.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['moodle-org-privacy'], note: 'El registre d’activitat de Moodle desa cada accés a cada recurs.' }),
        row('nivell-formatiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['moodle-org-privacy'], note: 'Qualificacions i progrés acadèmic són el nucli de la plataforma.' }),
        row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['moodle-app-store-privacy'], note: 'L’etiqueta de l’App Store declara que la desenvolupadora no recull cap dada.' }),
        row('interessos-inferits', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['moodle-app-store-privacy'] }),
        row('dades-de-diagnostic', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['moodle-app-store-privacy'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['moodle-app-store-privacy'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar la persona.'),
        advertisingIdentifiers: f('no', 'official', ['moodle-app-store-privacy']),
        thirdPartyTrackersPresent: f('no', 'official', ['moodle-app-store-privacy'], 'La desenvolupadora declara que no recull cap dada des de l’aplicació. Cada centre hi pot afegir connectors amb tractaments propis.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['moodle-app-store-privacy', 'moodle-privacy-notice'], 'No hi ha publicitat ni al producte ni al model de negoci, basat en serveis i certificacions.'),
        profiling: f('no', 'official', ['moodle-app-store-privacy'], 'L’aplicació no elabora perfils comercials; l’analítica d’aprenentatge que faci el centre depèn del centre.'),
        aiTraining: unknown('L’avís corporatiu no diu res sobre l’ús de dades de les instàncies per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['moodle-privacy-notice'], 'Moodle Pty Ltd declara que només comparteix dades amb proveïdors vinculats per contracte d’encarregat. En una instal·lació pròpia, la compartició la decideix el centre.'),
        intraGroupSharing: unknown('No consta cap estructura de grup amb la qual es comparteixin dades.'),
        dataBrokerSales: f('no', 'official', ['moodle-privacy-notice'], 'L’avís no preveu cap cessió comercial de dades.'),
        internationalTransfers: f('partial', 'official', ['moodle-privacy-notice'], 'Moodle Pty Ltd és australiana i empara les transferències fora de l’EEE en clàusules contractuals tipus. Si el servidor és del centre, les dades poden no sortir de la UE.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['moodle-org-privacy', 'moodle-privacy-notice'], 'Per als comptes de moodle.org, les dades es conserven mentre el compte és actiu. A les instal·lacions de centre, els terminis els fixa la política de retenció que configura la institució.'),
        dataAfterDeletion: unknown('Depèn de la configuració de cada instal·lació; no hi ha una regla única publicada.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['moodle-privacy-notice'], 'Si les dades les tracta el centre, cal adreçar-s’hi directament; per a les dades que tracta Moodle Pty Ltd, la petició va al delegat de protecció de dades.'),
        selfService: unknown('Moodle LMS inclou una eina de sol·licitud de supressió, però activar-la i acceptar la petició depèn de cada administració del lloc.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Identifica qui és el responsable: si el Moodle és del teu centre, la petició va al centre, no a Moodle Pty Ltd.',
          'Al lloc Moodle, comprova si l’administració ha activat l’eina de privadesa, que permet demanar l’exportació o la supressió des del mateix perfil.',
          'Si no hi és, adreça la sol·licitud de supressió al delegat de protecció de dades del centre educatiu.',
          'Per a les dades que tracta Moodle Pty Ltd (moodle.org, MoodleCloud, formació), escriu a dpo@moodle.com.',
        ],
        obstacles:
          'La responsabilitat repartida és garantia i alhora entrebanc: cal saber a quina de les dues organitzacions et toca reclamar, i la política del centre no sempre és fàcil de trobar.',
        sources: ['moodle-privacy-notice', 'moodle-org-privacy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['moodle-privacy-notice'], 'El dret de portabilitat es reconeix i Moodle LMS inclou una eina d’exportació de dades personals, però l’ha d’habilitar l’administració del lloc.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['moodle-privacy-notice'], 'Delegat de protecció de dades designat, amb compromís de resposta en trenta dies.', {
          url: 'mailto:dpo@moodle.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: na('No hi ha publicitat dins del servei.'),
        telemetryOptOut: unknown('No consta si l’aplicació envia telemetria pròpia ni si es pot desactivar.'),
        granularControls: f('partial', 'official', ['moodle-privacy-notice'], 'Moodle LMS ofereix eines de privadesa i de consentiment de polítiques, però qui les configura és el centre.'),
        defaultPosture: 'protective',
        darkPatterns: f('no', 'editorial', [], 'No hem detectat patrons enganyosos: l’aplicació no té captació publicitària ni embut de subscripció, perquè el client no és qui paga.'),
      },
      security: {
        e2ee: na('La plataforma ha de poder llegir els continguts per mostrar-los al professorat i avaluar-los.'),
        transportEncryption: unknown('Depèn de la configuració del servidor del centre; no hi ha una declaració pública aplicable a totes les instal·lacions.'),
        atRestEncryption: unknown('Depèn de qui allotja la instància.'),
        mfa: f('partial', 'official', ['moodle-app-repository'], 'Moodle LMS admet factors d’autenticació addicionals i inici de sessió delegat, però activar-los és decisió del centre.'),
        independentAudits: unknown('No consten auditories independents publicades del nucli.'),
        bugBounty: unknown('No hem trobat cap programa públic de recompenses.'),
        vulnerabilityDisclosure: f('yes', 'official', ['moodle-security'], 'Procés públic d’avisos de seguretat amb identificador, gravetat i versions corregides, i formulari de comunicació de vulnerabilitats.', {
          url: 'https://moodle.org/security/',
        }),
      },
      alternatives: [
        {
          app: 'canvas-lms',
          comparability: 'equivalent',
          rationale: 'Canvas cobreix la mateixa necessitat d’aula virtual i també deixa el control de les dades al centre.',
          tradeOffs: 'Canvas és un servei allotjat per una empresa nord-americana, amb una intrusió greu documentada el 2026; Moodle es pot autoallotjar.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La lectura útil d’aquesta fitxa és que el risc no és a l’aplicació sinó al servidor: qui vulgui saber què se’n fa de les seves dades ha de demanar la política de privadesa del seu centre, no la de Moodle Pty Ltd.',
        openQuestions: [
          'Quantes instal·lacions de Moodle als centres espanyols tenen activada l’eina de privadesa que permet demanar exportació i supressió des del perfil?',
          'L’aplicació envia alguna telemetria pròpia al fabricant, més enllà del trànsit amb el servidor del centre?',
        ],
      },
    },

    /* ═══════════════════════════ Duolingo ═══════════════════════════ */
    {
      slug: 'duolingo',
      name: 'Duolingo',
      company: 'duolingo',
      categories: ['educacio'],
      tagline: 'Perfil públic per defecte, publicitat personalitzada i gravació de sessions dins l’aplicació',
      summary:
        'Duolingo és l’aplicació educativa més descarregada i també la que més superfície de dades exposa d’aquest lot: el perfil és públic per defecte i indexable des d’internet, la política declara vuit famílies de dades utilitzades per rastrejar la persona a través d’altres empreses, i l’activitat dins l’aplicació es grava amb eines de reproducció de sessió. Les funcions de conversa amb IA envien text i àudio a OpenAI i a Google, i Duolingo en desa transcripcions per entrenar els seus propis models. A la Unió Europea la publicitat personalitzada està desactivada per defecte.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Estats Units; Duolingo, Inc. és la responsable del tractament també a la UE',
      userBase: 'Més de cent milions de persones usuàries actives al mes (Duolingo, 2026)',
      links: {
        website: 'https://www.duolingo.com/',
        privacyPolicy: 'https://www.duolingo.com/privacy',
        appStore: 'https://apps.apple.com/es/app/id570060128',
      },
      accountRequired: f('yes', 'official', ['duolingo-privacy-policy'], 'Cal registrar-se amb nom d’usuari, edat i adreça electrònica, o bé amb un compte de Google o de Facebook.'),
      openSource: f('no', 'official', ['duolingo-privacy-policy'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La combinació de ratxa diària, hores de connexió, llengua que s’aprèn, contactes del telèfon i adreça IP dibuixa una rutina personal molt precisa. El perfil públic hi afegeix una capa poc habitual: el nom, la biografia i la xarxa de seguidors són visibles a tot internet si no es canvia la configuració.',
      dataCollection: [
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['duolingo-privacy-policy', 'duolingo-app-store-privacy'] }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['duolingo-privacy-policy'], note: 'El nom forma part del perfil públic, visible per defecte a tot internet.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['duolingo-privacy-policy'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['duolingo-privacy-policy'], note: 'A alguns països es demana durant el registre i permet que altres persones et trobin.' }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['compliment-legal'], sources: ['duolingo-privacy-policy'], note: 'L’edat determina si el compte rep el tractament reforçat per a menors.' }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['recomanacions-algoritmiques'], sources: ['duolingo-privacy-policy'], note: 'La sincronització de contactes desa només un resum criptogràfic dels telèfons, no els números.' }),
        row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia', 'millora-del-producte'], sources: ['duolingo-privacy-policy'], note: 'L’àudio va a Google, Apple o Amazon per reconèixer la parla; es pot excloure de la millora del producte a la configuració.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['duolingo-app-store-privacy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['duolingo-privacy-policy', 'duolingo-app-store-privacy'], note: 'FullStory i Session Replay graven clics, desplaçaments i respostes; es poden desactivar amb el commutador «Tracking».' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['duolingo-app-store-privacy'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['duolingo-app-store-privacy'], note: 'El cobrament passa per Stripe o per la botiga d’aplicacions.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['duolingo-app-store-privacy', 'duolingo-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'seguretat-i-prevencio-del-frau'], sources: ['duolingo-privacy-policy'], note: 'Es conserva un màxim de trenta dies, llevat de comptes amb mitjà de pagament.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['duolingo-app-store-privacy'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['duolingo-privacy-policy'], note: 'Unity, Meta, LiftOff, Pangle, Moloco i Google figuren com a xarxes publicitàries.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['duolingo-privacy-policy'], note: 'La política reconeix galetes de segmentació de Google, Meta i Amazon.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['duolingo-app-store-privacy'] }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['duolingo-app-store-privacy'], note: 'Fotografia de perfil i adjunts a l’atenció a l’usuari.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['duolingo-app-store-privacy', 'duolingo-privacy-policy'], 'L’etiqueta declara compres, ubicació, contacte, contingut d’usuari, identificadors, ús, diagnòstics i «altres dades» com a dades utilitzades per rastrejar.'),
        advertisingIdentifiers: f('yes', 'official', ['duolingo-privacy-policy']),
        thirdPartyTrackersPresent: f('yes', 'official', ['duolingo-privacy-policy'], 'Xarxes publicitàries (Unity, Meta, LiftOff, Pangle, Moloco, Google), analítica (Google Analytics, Crashlytics) i reproducció de sessió (FullStory).'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['duolingo-privacy-policy'], 'A la Unió Europea i el Regne Unit la publicitat personalitzada està desactivada per defecte i cal activar-la expressament.', {
          optOutUrl: 'https://www.duolingo.com/settings/account',
        }),
        profiling: f('yes', 'official', ['duolingo-privacy-policy'], 'Les xarxes publicitàries elaboren perfils d’interessos a partir de l’ús del servei i d’altres llocs.'),
        aiTraining: f('yes', 'official', ['duolingo-privacy-policy'], 'Duolingo desa gravacions i transcripcions de les funcions de conversa i les fa servir per entrenar models propis; les dades anonimitzades es poden reutilitzar sense límit.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['duolingo-privacy-policy'], 'Allotjament (AWS), reconeixement de veu (Google, Apple, AWS), models d’IA (OpenAI, Google), suport (Zendesk), pagaments (Stripe) i moderació de continguts.'),
        intraGroupSharing: na('Duolingo, Inc. no forma part de cap grup amb altres serveis de consum.'),
        dataBrokerSales: f('no', 'official', ['duolingo-privacy-policy'], 'La política no preveu la venda de dades a intermediaris, però sí la compartició amb xarxes publicitàries.'),
        internationalTransfers: f('yes', 'official', ['duolingo-privacy-policy'], 'Totes les dades es tracten als Estats Units a l’empara del Marc de Privadesa de Dades UE-EUA.', { mechanism: 'adequacy' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe periòdic sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['duolingo-privacy-policy'], 'Només hi ha un termini concret: l’adreça IP es conserva un màxim de trenta dies. La resta es guarda «fins que s’elimina el compte».'),
        dataAfterDeletion: f('partial', 'official', ['duolingo-privacy-policy'], 'Es poden conservar dades per defensar interessos legítims o complir obligacions legals, i les dades anonimitzades s’hi queden indefinidament.'),
        periods: [
          { dataType: 'adreca-ip', period: 'Trenta dies, excepte en comptes amb mitjà de pagament associat', sources: ['duolingo-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['duolingo-privacy-policy']),
        selfService: f('yes', 'official', ['duolingo-privacy-policy'], 'La supressió del compte i l’accés a les dades es fan des del Duolingo Data Vault, sense passar per atenció al client.'),
        directUrl: 'https://drive-thru.duolingo.com/',
        difficulty: 'easy',
        steps: [
          'Entra al Duolingo Data Vault (drive-thru.duolingo.com) amb el compte que vols eliminar.',
          'Tria si vols descarregar una còpia de les dades abans de suprimir-les.',
          'Demana l’eliminació del compte i confirma-la.',
          'Si tens una subscripció Super activa, cancel·la-la abans a l’App Store o a Google Play: eliminar el compte no atura el cobrament.',
        ],
        dataRetained:
          'Dades necessàries per complir obligacions legals o defensar reclamacions, i dades anonimitzades sense termini.',
        sources: ['duolingo-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['duolingo-privacy-policy'], 'El Data Vault permet exportar les dades aportades en un format transferible electrònicament.', {
          url: 'https://drive-thru.duolingo.com/',
        }),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['duolingo-privacy-policy'], 'Delegat de protecció de dades amb adreça pròpia.', {
          url: 'mailto:privacy@duolingo.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['duolingo-privacy-policy'], 'Hi ha un control dins de la configuració; a la UE ja ve desactivat i cal optar-hi expressament.', {
          url: 'https://www.duolingo.com/settings/account',
        }),
        telemetryOptOut: f('partial', 'official', ['duolingo-privacy-policy'], 'El commutador «Tracking» de la configuració atura FullStory i Session Replay, i hi ha un control separat per no cedir l’àudio per a la millora del producte. L’analítica bàsica no es pot desactivar.'),
        granularControls: f('yes', 'official', ['duolingo-privacy-policy'], 'Perfil públic o privat, sincronització de contactes, àudio, publicitat personalitzada i notificacions tenen controls separats.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'editorial', ['duolingo-privacy-policy'], 'El perfil públic per defecte és la decisió més discutible: la política admet que qualsevol web o robot d’extracció pot llegir-ne el contingut, i cal saber-ho per canviar-ho.'),
        darkPatternList: [
          {
            type: 'preselected',
            severity: 'medium',
            description:
              'El perfil és públic i visible a tot internet per defecte; convertir-lo en privat exigeix entrar a la configuració del compte.',
            sources: ['duolingo-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: na('El servei no transporta comunicacions privades entre persones.'),
        transportEncryption: unknown('La política no descriu les mesures tècniques de protecció.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: unknown('No hem trobat documentació oficial sobre verificació en dos passos per als comptes.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades del servei de consum.'),
        bugBounty: unknown('Les referències a un programa privat a HackerOne no estan confirmades per cap document de Duolingo.'),
        vulnerabilityDisclosure: f('partial', 'official', ['duolingo-privacy-policy'], 'No hi ha ni security.txt ni pàgina de seguretat; l’únic canal documentat és l’adreça de privadesa.'),
      },
      alternatives: [
        {
          app: 'knowunity',
          comparability: 'complementary',
          rationale: 'Cobreix estudi escolar amb IA en lloc d’idiomes, amb responsable establert a la Unió Europea.',
          tradeOffs: 'Knowunity també fa publicitat personalitzada i té una xarxa de tercers més llarga.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política és de les més clares que hem llegit en tota l’onada: diu els noms de les xarxes publicitàries, explica el resum criptogràfic dels contactes i reconeix la gravació de sessions. Claredat no és el mateix que contenció: el que declara és molt.',
        openQuestions: [
          'Duolingo ofereix verificació en dos passos als comptes normals? No hem trobat documentació oficial.',
          'Quin percentatge de comptes europeus ha activat la publicitat personalitzada, que hi arriba desactivada?',
        ],
      },
    },
    /* ═══════════════════════════ Knowunity ═══════════════════════════ */
    {
      slug: 'knowunity',
      name: 'Knowunity',
      company: 'knowunity',
      categories: ['educacio', 'assistents-d-ia'],
      tagline: 'Apunts compartits entre adolescents amb píxels de Meta, TikTok, Snap i LinkedIn a dins',
      summary:
        'Knowunity és una xarxa d’apunts escolars amb un assistent d’IA, «SchoolGPT», dirigida a alumnat de secundària. La política de privadesa és de les més detallades del lot: diu el nom de cada encarregat i la base jurídica de cada tractament. Això fa visible el contrast: al costat del compromís contractual que cap proveïdor d’IA entreni models amb els textos de l’alumnat, hi ha píxels i SDK de Meta, TikTok, Snap, LinkedIn i Google per mesurar la captació publicitària.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Alemanya; Knowunity GmbH és la responsable del tractament',
      userBase: 'Més de vint milions de comptes declarats a Europa (Knowunity, 2026)',
      links: {
        website: 'https://knowunity.es/',
        privacyPolicy: 'https://knowunity.es/legal/privacy',
        appStore: 'https://apps.apple.com/es/app/id1484296272',
      },
      accountRequired: f('yes', 'official', ['knowunity-privacy-policy'], 'Cal registrar-se amb adreça electrònica o amb un compte de Google o d’Apple; sense tractament de dades personals l’aplicació no funciona.'),
      openSource: f('no', 'official', ['knowunity-privacy-policy'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El conjunt revela el curs, les assignatures que costen, què es pregunta a l’assistent d’IA a mitja nit i quins apunts es descarreguen abans d’un examen. Com que l’ús majoritari és d’adolescents, aquestes inferències recauen sobre persones menors d’edat, i una part es mesura amb píxels d’empreses publicitàries.',
      dataCollection: [
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['knowunity-privacy-policy', 'knowunity-app-store-privacy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['knowunity-privacy-policy'] }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['knowunity-app-store-privacy'], note: 'Arriba del proveïdor d’inici de sessió únic si es fa servir Google o Apple.' }),
        row('nivell-formatiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['personalitzacio-de-continguts'], sources: ['knowunity-privacy-policy'], note: 'Curs, tipus de centre i assignatures determinen els continguts que es mostren.' }),
        row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['knowunity-privacy-policy'], note: 'Els apunts pujats i les seves metadades es revisen amb IA per detectar continguts il·lícits.' }),
        row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['knowunity-privacy-policy'] }),
        row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['knowunity-privacy-policy'], note: 'Els xats de grup es revisen automàticament amb models d’IA.' }),
        row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['knowunity-app-store-privacy'], note: 'L’etiqueta el situa entre les dades no vinculades, amb finalitat de publicitat de tercers.' }),
        row('historial-de-navegacio', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['knowunity-app-store-privacy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['knowunity-app-store-privacy', 'knowunity-privacy-policy'], note: 'És l’única família que l’etiqueta declara com a utilitzada per rastrejar a través d’altres empreses.' }),
        row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['knowunity-privacy-policy'], note: 'RevenueCat sincronitza l’estat de la subscripció; el pagament el fa la botiga o Paddle.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['knowunity-privacy-policy'], note: 'Els registres del servidor es conserven un màxim de catorze dies.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['knowunity-privacy-policy'] }),
        row('identificador-publicitari', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['knowunity-privacy-policy'], note: 'La política diu que es demana consentiment abans de fer-lo servir per a publicitat personalitzada.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['knowunity-privacy-policy'], note: 'La taula de la política llista galetes pròpies, de Cloudflare, Stripe i hCaptcha, i emmagatzematge local permanent amb identificador de dispositiu.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['knowunity-app-store-privacy'] }),
        row('dades-de-salut', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['knowunity-privacy-policy'], note: 'La política demana expressament que no s’enviïn dades sensibles a SchoolGPT.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['knowunity-app-store-privacy', 'knowunity-privacy-policy'], 'Les dades d’ús es declaren com a utilitzades per rastrejar, i la política reconeix píxels i SDK de Meta, TikTok, Snap, LinkedIn i Google.'),
        advertisingIdentifiers: f('yes', 'official', ['knowunity-privacy-policy'], 'Identificador publicitari del dispositiu, amb consentiment previ segons la política.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['knowunity-privacy-policy'], 'Firebase, Microsoft, Meta Ads, Google Ads, LinkedIn Insight Tag, Snap Pixel, TikTok, Iterable, Freshworks, hCaptcha, Cloudflare i Elastic Cloud.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['knowunity-app-store-privacy', 'knowunity-privacy-policy'], 'L’etiqueta declara identificadors i dades d’ús per a «publicitat o màrqueting del desenvolupador», i la política descriu públics personalitzats i similars a Meta.'),
        profiling: f('partial', 'official', ['knowunity-privacy-policy'], 'La política admet l’elaboració de perfils per a màrqueting i personalització amb consentiment o interès legítim, però nega decisions automatitzades de l’article 22.'),
        aiTraining: f('no', 'official', ['knowunity-privacy-policy'], 'Knowunity declara haver pactat contractualment amb OpenAI, Anthropic, Google i Mistral que no entrenin models amb les entrades de les persones usuàries, i que el tractament es faci a servidors de la UE o l’EEE.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['knowunity-privacy-policy'], 'Proveïdors de models d’IA, allotjament (AWS, Google Cloud, Microsoft), pagaments (Paddle, PayPal, RevenueCat), suport (Freshworks) i xarxes publicitàries.'),
        intraGroupSharing: na('No consta cap grup empresarial amb el qual es comparteixin dades.'),
        dataBrokerSales: f('no', 'official', ['knowunity-privacy-policy'], 'La política no preveu cap venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['knowunity-privacy-policy'], 'Transferències als Estats Units emparades en el Marc de Privadesa de Dades UE-EUA i, quan cal, en clàusules contractuals tipus. Per als models d’IA es pacta tractament dins de l’EEE.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['knowunity-privacy-policy'], 'Hi ha terminis concrets per als registres del servidor i per a les candidatures de feina, però no per als continguts ni per a les converses amb SchoolGPT.'),
        dataAfterDeletion: f('partial', 'official', ['knowunity-privacy-policy'], 'En eliminar el compte se suprimeixen les dades, llevat de les subjectes a obligacions legals de conservació mercantil o fiscal.'),
        periods: [
          { dataType: 'adreca-ip', period: 'Catorze dies als registres del servidor, i després supressió o anonimització', sources: ['knowunity-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['knowunity-privacy-policy']),
        selfService: f('yes', 'official', ['knowunity-privacy-policy'], 'La política afirma dues vegades que es pot eliminar el compte en qualsevol moment, tot i que no en descriu el camí exacte dins de l’aplicació.'),
        difficulty: 'medium',
        obstacles:
          'La política garanteix el dret, però no hi ha cap pàgina d’ajuda pública amb els passos concrets; si no es troba l’opció, cal escriure al delegat de protecció de dades.',
        dataRetained: 'Dades amb obligació legal de conservació mercantil o fiscal.',
        sources: ['knowunity-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['knowunity-privacy-policy'], 'Es reconeix el dret de portabilitat en format estructurat i de lectura mecànica, exercible pel canal de protecció de dades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['knowunity-privacy-policy', 'knowunity-imprint'], 'Delegat de protecció de dades designat i adreça de suport en castellà.', {
          url: 'mailto:support-es@knowunity.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['knowunity-privacy-policy'], 'La publicitat personalitzada depèn d’un consentiment retirable, i la política remet a la configuració del sistema operatiu per limitar l’identificador publicitari.'),
        telemetryOptOut: f('partial', 'official', ['knowunity-privacy-policy'], 'L’eina de gestió del consentiment permet rebutjar l’analítica no essencial, però els registres del servidor s’emparen en l’interès legítim.'),
        granularControls: f('yes', 'official', ['knowunity-privacy-policy'], 'Consentiment separat per a analítica, màrqueting, inici de sessió únic i accés de les famílies.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem pogut revisar les pantalles de consentiment dins de l’aplicació.'),
      },
      security: {
        e2ee: na('El servei ha de poder llegir els continguts per moderar-los i indexar-los.'),
        transportEncryption: unknown('La política descriu la infraestructura però no detalla les mesures criptogràfiques.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: unknown('No hem trobat documentació sobre verificació en dos passos.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni canal de seguretat.'),
        vulnerabilityDisclosure: unknown('No hi ha ni security.txt ni pàgina de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'El compromís contractual que cap proveïdor d’IA entreni models amb les entrades de l’alumnat és el més explícit que hem llegit en tota l’onada, i convé reconèixer-ho. Ara bé, conviu amb una densitat de píxels publicitaris poc habitual en un servei que sap que les seves persones usuàries són adolescents.',
        openQuestions: [
          'On és exactament l’opció d’eliminar el compte dins de l’aplicació? La política hi remet però no la descriu.',
          'Com es verifica l’edat i el consentiment parental de l’alumnat menor de setze anys?',
        ],
      },
    },

    /* ═══════════════════════════ Astra AI ═══════════════════════════ */
    {
      slug: 'astra-ai',
      name: 'Astra AI',
      company: 'astra-ai',
      categories: ['educacio', 'assistents-d-ia'],
      tagline: 'La política nega el rastreig que la mateixa aplicació declara a l’App Store',
      summary:
        'Astra AI és un tutor escolar d’IA amb responsable establert a Eslovènia i delegat de protecció de dades designat, cosa que el situa clarament sota el RGPD. El problema és la contradicció: la seva política afirma que no hi ha elaboració de perfils i que les dades no surten de la Unió Europea, mentre que l’etiqueta de l’App Store declara dades de contacte, identificadors i dades d’ús utilitzades per rastrejar la persona a través d’altres empreses, i el nom cedit per a publicitat de tercers. A més, la política descriu el lloc web, no l’aplicació, i no esmenta enlloc el tractament de les fotografies dels exercicis ni els models d’IA que els resolen.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Eslovènia; Astra AI d.o.o. és la responsable del tractament',
      userBase: 'Més de tretze mil valoracions a l’App Store espanyol (Apple, 2026)',
      links: {
        website: 'https://astra.si/ai/',
        privacyPolicy: 'https://astra.si/en/privacy-policy/',
        appStore: 'https://apps.apple.com/es/app/id6751030141',
      },
      accountRequired: f('yes', 'official', ['astra-ai-privacy-policy'], 'La política indica que facilitar dades personals és condició per utilitzar els serveis i que el registre és necessari per a la subscripció.'),
      openSource: f('no', 'official', ['astra-ai-privacy-policy'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La política reconeix que es recullen el programa educatiu, el curs, l’any de secundària i les notes. És a dir: rendiment acadèmic identificat d’una persona menor d’edat. L’etiqueta hi afegeix fotografies dels exercicis i ubicació aproximada.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['astra-ai-privacy-policy', 'astra-ai-app-store-privacy'], note: 'L’etiqueta declara el nom com a dada cedida per a publicitat de tercers.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['astra-ai-privacy-policy', 'astra-ai-app-store-privacy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['astra-ai-app-store-privacy'] }),
        row('nivell-formatiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['astra-ai-privacy-policy'], note: 'La política llista expressament programa educatiu, classe, any de secundària i qualificacions.' }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['astra-ai-app-store-privacy'], note: 'La funció «Snap and Solve» fotografia els exercicis; la política no descriu aquest tractament.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['astra-ai-app-store-privacy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['astra-ai-app-store-privacy'] }),
        row('adreca-ip', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['astra-ai-privacy-policy'], note: 'La política la considera dada anònima de registre; el RGPD la tracta com a dada personal.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['astra-ai-app-store-privacy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['astra-ai-privacy-policy'], note: 'Google Analytics 4 i PostHog, amb dades que la política admet que es poden desar fora de la UE.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['astra-ai-app-store-privacy'], 'L’etiqueta declara dades de contacte, identificadors i dades d’ús com a utilitzades per rastrejar a través d’altres empreses, malgrat que la política no ho esmenta.'),
        advertisingIdentifiers: f('partial', 'official', ['astra-ai-app-store-privacy'], 'L’etiqueta reconeix publicitat de tercers, cosa que implica identificadors, però no declara la família «Datos de publicidad».'),
        thirdPartyTrackersPresent: f('yes', 'official', ['astra-ai-privacy-policy', 'astra-ai-app-store-privacy'], 'Google Analytics 4 i PostHog consten a la política; l’etiqueta hi afegeix publicitat de tercers.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['astra-ai-app-store-privacy'], 'L’etiqueta declara el nom recollit amb finalitat de «publicidad de terceros» i dades de contacte per a màrqueting del desenvolupador.'),
        profiling: f('partial', 'official', ['astra-ai-privacy-policy', 'astra-ai-app-store-privacy'], 'La política nega expressament l’elaboració de perfils, però l’etiqueta declara personalització del producte i publicitat de tercers. Deixem la contradicció documentada.'),
        aiTraining: unknown('La política no esmenta cap tractament amb models d’IA, tot i que és la funció central de l’aplicació.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['astra-ai-privacy-policy'], 'Comptabilitat, facturació, subencarregats i eines d’analítica. La política no en dona la llista nominal.'),
        intraGroupSharing: unknown('No consta cap estructura de grup.'),
        dataBrokerSales: f('no', 'official', ['astra-ai-privacy-policy'], 'La política afirma expressament que no hi ha venda de dades personals.'),
        internationalTransfers: f('partial', 'official', ['astra-ai-privacy-policy'], 'La política diu que no hi ha transferències a tercers països i, tot seguit, admet que les dades d’analítica poden desar-se fora de la UE.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hi ha cap informe de transparència publicat.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['astra-ai-privacy-policy'], 'La política no fixa cap termini de conservació per a cap categoria de dades.'),
        dataAfterDeletion: unknown('No es descriu què es conserva després d’atendre una petició de supressió.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['astra-ai-privacy-policy'], 'La política reconeix el dret de supressió i dona una adreça per exercir-lo.'),
        selfService: unknown('La política només descriu la via del correu electrònic; no hem pogut comprovar si hi ha una opció dins de l’aplicació.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Escriu a info@astra.si demanant la supressió completa de les teves dades, invocant l’article 17 del RGPD.',
          'Si t’ho demanen, aporta la informació necessària per acreditar la teva identitat.',
          'La política es compromet a resoldre en un termini de deu dies.',
        ],
        obstacles:
          'No hi ha cap botó documentat: el camí de sortida passa per escriure un correu i esperar. Per a una aplicació amb usuàries adolescents, és un obstacle real.',
        sources: ['astra-ai-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['astra-ai-privacy-policy'], 'El dret de portabilitat es reconeix, però no hi ha cap eina d’autoservei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['astra-ai-privacy-policy'], 'Delegat de protecció de dades designat amb adreça pròpia, i compromís de resposta en deu dies.', {
          url: 'mailto:info@astra.si',
          responseTimeDays: 10,
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('La política només parla de donar-se de baixa dels correus comercials, no de la publicitat dins de l’aplicació.'),
        telemetryOptOut: unknown('No es descriu cap manera de desactivar Google Analytics o PostHog dins de l’aplicació.'),
        granularControls: f('no', 'official', ['astra-ai-privacy-policy'], 'La política no descriu cap panell de privadesa amb controls per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem pogut revisar les pantalles de consentiment ni l’embut de subscripció dins de l’aplicació.'),
      },
      security: {
        e2ee: na('El servei ha de processar els exercicis per resoldre’ls.'),
        transportEncryption: f('partial', 'official', ['astra-ai-privacy-policy'], 'La política esmenta l’ús de tallafocs i xifratge de dades, sense concretar protocols.'),
        atRestEncryption: f('partial', 'official', ['astra-ai-privacy-policy'], 'S’esmenta xifratge de dades entre les mesures tècniques, sense detall.'),
        mfa: unknown('No consta cap informació sobre verificació en dos passos.'),
        independentAudits: unknown('No consten auditories independents.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hi ha ni security.txt ni canal públic de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La discrepància entre la política i l’etiqueta de l’App Store és la troballa d’aquesta fitxa. Totes dues són declaracions de la mateixa empresa, i no poden ser certes alhora: o hi ha publicitat de tercers i rastreig, o no n’hi ha.',
        openQuestions: [
          'Quins models d’IA processen les fotografies dels exercicis i on? La política no ho diu.',
          'Hi ha una opció d’eliminar el compte dins de l’aplicació, o l’única via és el correu electrònic?',
        ],
      },
    },

    /* ═══════════════════════════ TodoTest ═══════════════════════════ */
    {
      slug: 'todotest',
      name: 'TodoTest',
      company: 'autoinet-interactivo',
      categories: ['educacio'],
      tagline: 'Tests de la DGT amb publicitat de tercers i una política que parla només del web',
      summary:
        'TodoTest prepara els exàmens teòrics de la DGT i les competències professionals del transport. L’empresa responsable és espanyola i la política de privadesa està redactada sobre el RGPD i la LOPDGDD, amb bases jurídiques i terminis per a cada finalitat. Té dues mancances: descriu només els formularis del web, no el que fa l’aplicació, i reconeix l’elaboració de perfils a partir de les compres i els interessos. L’etiqueta de l’App Store, en canvi, només declara identificadors, no vinculats a la identitat, per a publicitat de tercers.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Espanya',
      userBase: 'Més de trenta-quatre mil valoracions a l’App Store espanyol (Apple, 2026)',
      links: {
        website: 'https://www.todotest.com/',
        privacyPolicy: 'https://www.todotest.com/politica_privacidad.asp',
        appStore: 'https://apps.apple.com/es/app/id488225258',
      },
      accountRequired: f('partial', 'official', ['todotest-privacy-policy'], 'La política diu que visitar el web no obliga a donar dades, però l’àrea privada i el seguiment de resultats requereixen registre amb correu i contrasenya.'),
      openSource: f('no', 'official', ['todotest-privacy-policy'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Qui es prepara el carnet deixa constància de quan estudia, quantes vegades suspèn els simulacres i quins permisos professionals persegueix, que és una dada laboral. La política hi suma compres i interessos per elaborar perfils comercials.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['todotest-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['todotest-privacy-policy'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['todotest-privacy-policy'] }),
        row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['todotest-privacy-policy'], note: 'Necessària per a les comandes de la botiga en línia.' }),
        row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['todotest-app-store-privacy'], note: 'L’etiqueta situa l’identificador d’usuari entre les dades no vinculades a la identitat.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['todotest-app-store-privacy'], note: 'És l’única dada que l’etiqueta declara com a utilitzada per rastrejar.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['elaboracio-de-perfils'], sources: ['todotest-privacy-policy'], note: 'La política reconeix l’ús de les compres per elaborar perfils, amb consentiment.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['elaboracio-de-perfils'], sources: ['todotest-privacy-policy'] }),
        row('ocupacio-i-carrec', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['todotest-privacy-policy'], note: 'Els permisos professionals i la borsa de treball revelen situació laboral.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['todotest-privacy-policy'] }),
        row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['todotest-privacy-policy'], note: 'El web ofereix la gestió del certificat mèdic per conduir; la política no en descriu el tractament específic.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['todotest-app-store-privacy'], 'L’etiqueta declara identificadors utilitzats per rastrejar a través d’aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['todotest-app-store-privacy'], 'Identificador de dispositiu declarat amb finalitat de publicitat de tercers.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['todotest-app-store-privacy', 'todotest-privacy-policy'], 'Publicitat de tercers a l’etiqueta i galetes de tercers al web.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['todotest-app-store-privacy'], 'La finalitat «publicidad de terceros» consta expressament a l’etiqueta de l’App Store.'),
        profiling: f('yes', 'official', ['todotest-privacy-policy'], 'La política té un apartat dedicat: es recullen dades d’anàlisi de compres, interessos i preferències per oferir productes, amb el consentiment com a base.'),
        aiTraining: unknown('La política no esmenta cap ús de les dades per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['todotest-privacy-policy'], 'La política diu que no hi ha cessions llevat d’obligació legal o encarregats, però preveu una llista de «tercers autoritzats» amb consentiment exprés, amb l’enllaç sense omplir al text publicat.'),
        intraGroupSharing: unknown('No consta cap estructura de grup.'),
        dataBrokerSales: unknown('No hi ha informació sobre venda de dades a intermediaris.'),
        internationalTransfers: f('partial', 'official', ['todotest-privacy-policy'], 'Els servidors són a la Unió Europea; si cal sortir-ne, s’invoquen decisions d’adequació, clàusules tipus o normes corporatives vinculants.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hi ha cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['todotest-privacy-policy'], 'La política fixa terminis per finalitat: mínim de tres anys per a la majoria de tractaments, un any per a les candidatures i cinc dies per al carretó de compra abandonat.'),
        dataAfterDeletion: f('partial', 'official', ['todotest-privacy-policy'], 'Les dades de compra es conserven durant els terminis fiscals obligatoris.'),
        periods: [
          { dataType: 'historial-de-compres', period: 'Durada de la relació contractual més els terminis fiscals obligatoris', sources: ['todotest-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['todotest-privacy-policy'], 'La política reconeix el dret de supressió i el de donar-se de baixa del registre.'),
        selfService: unknown('La política només dona l’adreça de contacte; no hem pogut verificar si hi ha una opció de baixa dins de l’aplicació.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Escriu a infos@todotest.com demanant la baixa del registre i la supressió de les dades.',
          'Indica que exerceixes el dret de supressió de l’article 17 del RGPD i conserva la confirmació.',
          'Si no responen dins de termini, pots reclamar davant de l’Agència Espanyola de Protecció de Dades.',
        ],
        dataRetained: 'Dades de facturació durant els terminis fiscals i mercantils.',
        sources: ['todotest-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['todotest-privacy-policy'], 'El dret de portabilitat es reconeix, però no hi ha eina d’autoservei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['todotest-privacy-policy'], 'Canal de drets per correu electrònic i menció expressa de la via de reclamació davant l’AEPD.', {
          url: 'mailto:infos@todotest.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['todotest-privacy-policy'], 'El perfilat depèn d’una casella de consentiment retirable, però no hi ha un control dins de l’aplicació.'),
        telemetryOptOut: f('partial', 'official', ['todotest-privacy-policy'], 'La política remet a esborrar les galetes del navegador; no descriu cap control equivalent a l’aplicació.'),
        granularControls: f('no', 'official', ['todotest-privacy-policy'], 'No hi ha cap panell de privadesa amb controls per finalitat.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem pogut revisar les pantalles de consentiment dins de l’aplicació.'),
      },
      security: {
        e2ee: na('El servei no transporta comunicacions privades entre persones.'),
        transportEncryption: unknown('La política no descriu les mesures tècniques de protecció.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: f('no', 'official', ['todotest-privacy-policy'], 'L’accés a l’àrea privada es descriu només amb adreça electrònica i contrasenya.'),
        independentAudits: unknown('No consten auditories independents.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hi ha cap canal públic de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política és un document de plantilla aplicat al web: hi ha finalitats que no encaixen amb l’aplicació (sortejos, currículums, testimonis) i una referència a una llista de tercers autoritzats que al text publicat continua sent un marcador de posició sense enllaç.',
        openQuestions: [
          'Quins són els «tercers autorizados» als quals la política permet cedir dades amb consentiment exprés?',
          'Com es tracten les dades del servei de certificat mèdic, que són dades de salut?',
        ],
      },
    },
    /* ═══════════════════════════ Kiwi AI ═══════════════════════════ */
    {
      slug: 'kiwi-ai',
      name: 'Kiwi AI',
      company: 'blackboard-studio',
      categories: ['educacio', 'assistents-d-ia'],
      tagline: 'Grava classes senceres, però la política de privadesa no esmenta l’àudio enlloc',
      summary:
        'Kiwi AI converteix gravacions de classe, PDF i vídeos en apunts, fitxes i qüestionaris. L’etiqueta de l’App Store declara que recull dades d’àudio i fotografies vinculades a la identitat. La política de privadesa, generada amb una plantilla, no esmenta ni una sola vegada les gravacions, ni la transcripció, ni els models de llenguatge que generen els apunts: només parla d’analítica amb PostHog, pagaments amb Stripe i inici de sessió amb Google o Apple. Qui gravi una classe amb aquesta aplicació no té cap document que li digui on va aquell àudio.',
      platforms: ['ios', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Itàlia; Blackboard Studio S.r.l. és la responsable del tractament',
      userBase: 'Més de mil valoracions a l’App Store espanyol (Apple, 2026)',
      links: {
        website: 'https://kiwi.app/',
        privacyPolicy: 'https://www.iubenda.com/privacy-policy/20071187',
        appStore: 'https://apps.apple.com/es/app/id6737851059',
      },
      accountRequired: f('yes', 'official', ['kiwi-ai-privacy-policy'], 'Cal crear un compte amb nom, cognoms, adreça electrònica i contrasenya, o bé amb Google o Apple.'),
      openSource: f('no', 'official', ['kiwi-ai-privacy-policy'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Una gravació de classe no conté només la veu de qui la fa: conté la del professorat i la de tota la resta de l’aula, que no han consentit res. A això s’hi sumen els apunts, les cerques dins dels apunts i l’historial de navegació que recull PostHog.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['kiwi-ai-privacy-policy', 'kiwi-ai-app-store-privacy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['kiwi-ai-privacy-policy'] }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['kiwi-ai-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['kiwi-ai-app-store-privacy'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['kiwi-ai-app-store-privacy'] }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['kiwi-ai-app-store-privacy'], note: 'L’etiqueta declara dades d’àudio vinculades a la identitat. La política no descriu aquest tractament.' }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['kiwi-ai-app-store-privacy'] }),
        row('fitxers-i-documents', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['kiwi-ai-app-store-privacy'], note: 'Els PDF i els apunts generats consten com a «otro contenido del usuario».' }),
        row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['kiwi-ai-privacy-policy'], note: 'PostHog registra pàgines vistes, clics i historial de navegació.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['kiwi-ai-privacy-policy', 'kiwi-ai-app-store-privacy'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['kiwi-ai-privacy-policy'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['kiwi-ai-privacy-policy'], note: 'Stripe, Apple Pay i les compres integrades de l’App Store.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['kiwi-ai-app-store-privacy'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['kiwi-ai-app-store-privacy'], 'L’etiqueta declara identificadors i dades d’ús com a utilitzats per rastrejar la persona a través d’altres empreses; la política no ho esmenta.'),
        advertisingIdentifiers: f('partial', 'official', ['kiwi-ai-app-store-privacy'], 'L’etiqueta declara «datos de publicidad» entre les dades no vinculades, tot i que no hi ha publicitat visible dins del producte.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['kiwi-ai-privacy-policy'], 'PostHog, amb tractament als Estats Units, i galetes de Stripe.'),
      },
      dataUses: {
        targetedAdvertising: unknown('Ni la política ni l’etiqueta declaren publicitat personalitzada, però l’etiqueta sí que declara «datos de publicidad».'),
        profiling: unknown('La política no esmenta l’elaboració de perfils.'),
        aiTraining: unknown('La política no diu res sobre el tractament amb models d’IA ni sobre l’ús dels continguts per entrenar-los, tot i que és la funció central del producte.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['kiwi-ai-privacy-policy'], 'PostHog per a analítica, Stripe i Apple per a pagaments, Google i Apple per a l’inici de sessió.'),
        intraGroupSharing: unknown('No consta cap estructura de grup.'),
        dataBrokerSales: unknown('La política no esmenta cessions comercials.'),
        internationalTransfers: f('yes', 'official', ['kiwi-ai-privacy-policy'], 'Tots els encarregats declarats tracten les dades als Estats Units. La política no indica quin mecanisme de transferència s’aplica.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hi ha cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['kiwi-ai-privacy-policy'], 'La política només diu que les dades es conserven «mentre calgui per a la finalitat», sense cap termini concret.'),
        dataAfterDeletion: unknown('No es descriu què passa amb les gravacions i els apunts en eliminar el compte.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['kiwi-ai-privacy-policy'], 'La política reconeix el dret de supressió davant del responsable.'),
        selfService: unknown('No hem pogut verificar si hi ha una opció d’eliminació dins de l’aplicació.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Escriu a help@kiwinote.ai demanant la supressió del compte i de tot el contingut associat.',
          'Invoca l’article 17 del RGPD i demana confirmació per escrit.',
        ],
        obstacles: 'No hi ha cap pàgina d’ajuda pública amb els passos ni cap adreça de baixa directa.',
        sources: ['kiwi-ai-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['kiwi-ai-privacy-policy'], 'El dret de portabilitat es reconeix al text sobre el RGPD, sense eina d’autoservei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['kiwi-ai-privacy-policy'], 'L’únic canal és l’adreça del propietari; no hi ha delegat de protecció de dades designat.', {
          url: 'mailto:help@kiwinote.ai',
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('No hi ha cap control documentat.'),
        telemetryOptOut: f('partial', 'official', ['kiwi-ai-privacy-policy'], 'La política de galetes permet gestionar les preferències de seguiment al web; no consta un control equivalent a l’aplicació.'),
        granularControls: f('no', 'official', ['kiwi-ai-privacy-policy'], 'No hi ha cap panell de privadesa amb controls per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem pogut revisar les pantalles de consentiment ni l’embut de subscripció.'),
      },
      security: {
        e2ee: na('El servei ha de transcriure i resumir el contingut als seus servidors.'),
        transportEncryption: unknown('La política només parla de «mesures de seguretat adequades», sense detall.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: unknown('No consta cap informació sobre verificació en dos passos.'),
        independentAudits: unknown('No consten auditories independents.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hi ha cap canal públic de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'El buit documental és la troballa: una aplicació la funció essencial de la qual és gravar l’aula té una política que no esmenta ni l’àudio ni la IA. Deixem gairebé tots els indicadors com a desconeguts perquè no hi ha cap document on basar-los, no perquè no els haguem buscat.',
        openQuestions: [
          'A quins proveïdors s’envien les gravacions per transcriure-les i resumir-les?',
          'Quant de temps es conserven les gravacions als servidors i què passa en eliminar el compte?',
          'Com es tracta el consentiment de les altres persones que apareixen a la gravació d’una classe?',
        ],
      },
    },

    /* ═══════════════════════════ AeolCloud ═══════════════════════════ */
    {
      slug: 'aeolcloud',
      name: 'AeolCloud',
      company: 'aeol-service',
      categories: ['educacio'],
      tagline: 'L’App Store enllaça un avís legal com si fos la política de privadesa',
      summary:
        'AeolCloud és el client d’alumnat de Visual AEOL Cloud, el programari amb què moltes autoescoles espanyoles gestionen els tests teòrics. Cal un número de llicència que dona l’autoescola, i els resultats se sincronitzen amb el centre, que és qui els analitza. L’etiqueta de l’App Store declara que no es recull cap dada, i l’enllaç a la política de privadesa del desenvolupador porta a un avís legal que no descriu cap tractament: no hi ha, doncs, cap document públic que expliqui què fa el servei amb les dades de l’alumnat.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      userBase: 'Més de vint mil valoracions a l’App Store espanyol (Apple, 2026)',
      links: {
        website: 'https://aeolservice.es/',
        appStore: 'https://apps.apple.com/es/app/id1057632699',
      },
      accountRequired: f('yes', 'official', ['aeolcloud-app-store-privacy'], 'La fitxa de l’App Store explica que cal que l’autoescola et doni d’alta i et faciliti un número de llicència per registrar-te.'),
      openSource: f('no', 'official', ['aeolcloud-legal-notice'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La sincronització amb l’autoescola converteix cada test en informació de rendiment identificada: quantes preguntes es fallen, en quins temes i a quina hora s’estudia. Qui hi accedeix i durant quant de temps no consta enlloc.',
      dataCollection: [
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['aeolcloud-app-store-privacy'], note: 'El número de llicència el dona l’autoescola i lliga el compte amb el centre.' }),
        row('nivell-formatiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['aeolcloud-app-store-privacy'], note: 'Els resultats dels tests se sincronitzen amb l’autoescola perquè en faci el seguiment.' }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['aeolcloud-app-store-privacy'], note: 'L’historial de versions incorpora autenticació per empremta o cara; a iOS això es resol al dispositiu i no arriba al servei.' }),
        row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['aeolcloud-app-store-privacy'], note: 'L’etiqueta declara que no es recull cap dada.' }),
        row('interessos-inferits', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['aeolcloud-app-store-privacy'] }),
        row('dades-de-diagnostic', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['aeolcloud-app-store-privacy'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['aeolcloud-app-store-privacy'], 'L’etiqueta declara «no se recopilan datos».'),
        advertisingIdentifiers: f('no', 'official', ['aeolcloud-app-store-privacy']),
        thirdPartyTrackersPresent: f('no', 'official', ['aeolcloud-app-store-privacy'], 'Segons la declaració de la desenvolupadora; no hem pogut verificar-ho amb anàlisi de trànsit.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['aeolcloud-app-store-privacy'], 'El model és de subscripció pagada per l’autoescola; no hi ha publicitat declarada.'),
        profiling: unknown('El seguiment de resultats per part de l’autoescola és una anàlisi de rendiment, però no consta documentada enlloc.'),
        aiTraining: unknown('No hi ha cap document que hi faci referència.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['aeolcloud-app-store-privacy'], 'La descripció oficial diu que els tests se sincronitzen amb l’autoescola, que és un tercer respecte de l’alumnat.'),
        intraGroupSharing: unknown('No consta cap estructura de grup.'),
        dataBrokerSales: unknown('No hi ha cap document públic sobre cessions.'),
        internationalTransfers: unknown('No hi ha cap document públic sobre la ubicació de les dades.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hi ha cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['aeolcloud-legal-notice'], 'L’únic document que l’App Store ofereix com a política de privadesa és un avís legal que no fixa cap termini.'),
        dataAfterDeletion: unknown('No hi ha cap document que ho descrigui.'),
      },
      accountDeletion: {
        possible: unknown('No hi ha cap document públic que descrigui com donar de baixa el compte.'),
        selfService: unknown('El compte depèn de l’alta que fa l’autoescola, de manera que probablement no sigui autoservei, però no ho hem pogut verificar.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        obstacles:
          'L’App Store presenta un avís legal com a política de privadesa. Sense política, no hi ha ni canal de drets documentat ni terminis, i cal adreçar-se a l’autoescola o a l’empresa pel formulari del lloc corporatiu.',
        sources: ['aeolcloud-legal-notice', 'aeolcloud-app-store-privacy'],
      },
      userRights: {
        dataExport: unknown('No hi ha cap document públic sobre portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: unknown('No hi ha cap adreça de protecció de dades ni delegat publicats.'),
      },
      controls: {
        adPersonalizationOptOut: na('No hi ha publicitat dins del servei segons l’etiqueta de l’App Store.'),
        telemetryOptOut: unknown('No hi ha cap document que descrigui telemetria ni controls.'),
        granularControls: unknown('No hi ha cap documentació de configuració de privadesa.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem pogut revisar l’aplicació per dins.'),
      },
      security: {
        e2ee: na('El servei ha de sincronitzar els resultats amb l’autoescola.'),
        transportEncryption: unknown('No hi ha documentació tècnica pública.'),
        atRestEncryption: unknown('No hi ha documentació tècnica pública.'),
        mfa: f('partial', 'official', ['aeolcloud-app-store-privacy'], 'L’historial de versions publicat a l’App Store documenta l’autenticació biomètrica com a mètode d’accés a l’aplicació, no com a segon factor.'),
        independentAudits: unknown('No consten auditories independents.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hi ha cap canal públic de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Aquesta fitxa té molts desconeguts perquè no hi ha res a llegir: l’únic document que l’empresa ofereix com a política de privadesa és un avís legal sobre propietat intel·lectual i responsabilitat per enllaços. Publicar una política de privadesa real seria la millora més barata i més gran que podria fer aquest servei.',
        openQuestions: [
          'Existeix alguna política de privadesa d’AeolCloud que no hàgim sabut trobar?',
          'Qui és el responsable del tractament dels resultats dels tests: l’autoescola o AEOL Service?',
          'Quant de temps es conserven els resultats després que l’alumnat obtingui el permís?',
        ],
      },
    },
    /* ═══════════════════════════ Canvas ═══════════════════════════ */
    {
      slug: 'canvas-lms',
      name: 'Canvas by Instructure',
      company: 'instructure',
      categories: ['educacio'],
      tagline: 'Cap rastreig publicitari i, tot i així, la filtració educativa més gran documentada',
      summary:
        'Canvas és l’aula virtual d’universitats i instituts de mig món, i la seva fitxa mostra les dues cares del model institucional. D’una banda, és l’única aplicació d’aquest lot que no declara cap dada utilitzada per rastrejar, l’avís diu expressament que no es fa publicitat a l’alumnat ni perfilat, el codi de Canvas LMS és lliure i hi ha certificacions ISO 27001 i SOC 2. De l’altra, el maig de 2026 una intrusió va exposar dades de prop de nou mil institucions, incloses universitats europees, i l’empresa va acabar pagant els extorsionadors. Concentrar les dades acadèmiques de mig món en un sol proveïdor és, en si mateix, el risc.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Estats Units, amb el centre educatiu com a responsable del tractament a la UE',
      userBase: 'Desenes de milions d’estudiants i docents; el 41 % de l’educació superior dels Estats Units',
      links: {
        website: 'https://www.instructure.com/canvas',
        privacyPolicy: 'https://www.instructure.com/policies/privacy',
        appStore: 'https://apps.apple.com/es/app/id480883488',
      },
      accountRequired: f('yes', 'official', ['canvas-lms-privacy-notice'], 'El compte el crea el centre educatiu o s’hi associa; l’aplicació no té servei propi.'),
      openSource: f('partial', 'official', ['canvas-lms-repository'], 'El codi de Canvas LMS és públic amb llicència AGPL-3.0. El repositori de les aplicacions iOS és visible però no porta fitxer de llicència, i el servei allotjat és propietari.', {
        licence: 'AGPL-3.0',
        url: 'https://github.com/instructure/canvas-lms',
      }),
      dataSummary:
        'Canvas conté els lliuraments, les qualificacions, les converses amb el professorat i el registre de quan entra cadascú a cada recurs. Són dades acadèmiques de menors i de joves adults que, centralitzades, resulten un objectiu atractiu: la intrusió de 2026 ho va demostrar.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['canvas-lms-privacy-notice', 'canvas-lms-app-store-privacy'], note: 'Es comparteix amb el centre educatiu, que és el responsable del tractament.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['canvas-lms-app-store-privacy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['canvas-lms-app-store-privacy'], note: 'Inclou el número d’expedient que aporta la institució.' }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['canvas-lms-app-store-privacy'], note: 'La missatgeria interna amb el professorat va ser una de les dades exfiltrades el 2026.' }),
        row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['canvas-lms-privacy-notice'], note: 'Treballs, exàmens i lliuraments de classe.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['canvas-lms-app-store-privacy'], note: 'Canvas Studio permet lliurar vídeo.' }),
        row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['canvas-lms-app-store-privacy'] }),
        row('nivell-formatiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['canvas-lms-privacy-notice'], note: 'Qualificacions i dades de rendiment acadèmic.' }),
        row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['canvas-lms-privacy-notice'], note: 'L’avís esmenta gènere o pronoms preferits entre les dades de perfil.' }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['canvas-lms-privacy-notice'], note: 'Només en alguns productes (Portfolium, Mastery Connect, Elevate).' }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['canvas-lms-privacy-notice'], note: 'Només amb consentiment i revocable des del sistema operatiu.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['canvas-lms-app-store-privacy'], note: 'L’etiqueta les situa entre les dades no vinculades a la identitat.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte', 'seguretat-i-prevencio-del-frau'], sources: ['canvas-lms-app-store-privacy'] }),
        row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['canvas-lms-app-store-privacy', 'canvas-lms-privacy-notice'], note: 'L’avís afirma expressament que no es fa publicitat a l’alumnat.' }),
        row('interessos-inferits', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['canvas-lms-privacy-notice'], note: 'L’avís declara que no s’elaboren perfils ni es prenen decisions automatitzades.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['canvas-lms-app-store-privacy'], 'L’etiqueta no declara cap dada utilitzada per rastrejar la persona a través d’aplicacions o webs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['canvas-lms-app-store-privacy']),
        thirdPartyTrackersPresent: f('partial', 'official', ['canvas-lms-privacy-notice'], 'Hi ha encarregats i integracions (API de Google i de YouTube), però l’avís prohibeix que facin servir les dades per a publicitat pròpia.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['canvas-lms-privacy-notice'], 'L’avís diu literalment que no es fa publicitat a l’alumnat ni elaboració de perfils.'),
        profiling: f('no', 'official', ['canvas-lms-privacy-notice'], 'S’exclouen tant el perfilat com les decisions automatitzades.'),
        aiTraining: unknown('L’avís esmenta assistents d’IA de suport i remet a una pàgina sobre l’ús d’eines d’IA, però no diu si les dades de l’alumnat entrenen models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['canvas-lms-privacy-notice'], 'Amb el centre educatiu i el seu professorat, amb les famílies quan escau, i amb encarregats tecnològics que no poden fer-ne un ús propi. L’avís nega la venda i el lloguer de dades.'),
        intraGroupSharing: f('yes', 'official', ['canvas-lms-privacy-notice'], 'Instructure integra Parchment i altres productes dins del mateix grup.'),
        dataBrokerSales: f('no', 'official', ['canvas-lms-privacy-notice'], 'L’avís declara expressament que no es venen ni es lloguen dades personals a tercers.'),
        internationalTransfers: f('yes', 'official', ['canvas-lms-privacy-notice'], 'Instructure i Parchment estan certificades al Marc de Privadesa de Dades UE-EUA, amb TRUSTe com a mecanisme de resolució de conflictes.', { mechanism: 'adequacy' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe periòdic sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['canvas-lms-privacy-notice'], 'L’avís no fixa terminis: els decideix cada institució, i avisa que hi ha dades als arxius que potser no es poden esborrar.'),
        dataAfterDeletion: f('partial', 'official', ['canvas-lms-privacy-notice'], 'Instructure adverteix que pot no poder esborrar la informació que resideix als seus arxius.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['canvas-lms-privacy-notice'], 'La decisió és del centre educatiu. Instructure atén sol·licituds de modificació o supressió per correu, en trenta dies i amb excepcions.'),
        selfService: f('no', 'official', ['canvas-lms-privacy-notice'], 'No hi ha cap botó d’eliminació: només es pot editar el perfil i demanar la supressió per correu o per tiquet de suport.'),
        difficulty: 'hard',
        waitingPeriodDays: 30,
        requiresSupportContact: true,
        steps: [
          'Adreça primer la sol·licitud al teu centre educatiu, que és qui decideix sobre les teves dades acadèmiques.',
          'Per a les dades que tracta Instructure, escriu a privacy@instructure.com o obre un tiquet des del producte.',
          'Compta amb trenta dies de resposta i amb excepcions: l’avís adverteix que pot no poder esborrar el que hi ha als arxius.',
        ],
        obstacles:
          'Com a la resta de plataformes de centre, no ets tu qui decideix: les dades acadèmiques tenen terminis de conservació que fixa la institució i, sovint, la normativa educativa.',
        dataRetained: 'Informació arxivada que l’avís reconeix que pot no ser eliminable.',
        sources: ['canvas-lms-privacy-notice'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['canvas-lms-privacy-notice'], 'Els drets de les persones de la UE es reconeixen a l’addenda europea i s’exerceixen per correu; no hi ha eina d’autoservei d’exportació completa.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['canvas-lms-privacy-notice'], 'Delegat de protecció de dades amb adreça pròpia i compromís de resposta en trenta dies.', {
          url: 'mailto:privacy@instructure.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: na('No hi ha publicitat dins del servei.'),
        telemetryOptOut: f('no', 'official', ['canvas-lms-privacy-notice'], 'L’avís descriu registres de seguretat i analítica de producte sense cap control per a la persona usuària; Instructure se’n declara responsable.'),
        granularControls: f('partial', 'official', ['canvas-lms-privacy-notice'], 'Es poden desactivar les notificacions i revocar la ubicació precisa des del sistema operatiu, però la resta de la configuració la decideix el centre.'),
        defaultPosture: 'mixed',
        darkPatterns: f('no', 'editorial', [], 'No hi ha embut comercial ni pantalles de consentiment enganyoses: la persona usuària no és la clienta del servei.'),
      },
      security: {
        e2ee: na('La plataforma ha de poder llegir els continguts per avaluar-los.'),
        transportEncryption: unknown('El centre de confiança descriu controls d’accés i infraestructura, però no publica el detall criptogràfic fora dels documents sota petició.'),
        atRestEncryption: unknown('El detall és als documents de diligència deguda, que no són públics.'),
        mfa: f('partial', 'official', ['canvas-lms-trust-center'], 'L’accés del personal d’Instructure exigeix reautenticació amb Okta; per a l’alumnat, l’autenticació la decideix el centre.'),
        independentAudits: f('yes', 'official', ['canvas-lms-trust-center'], 'Auditories SOC 2 Type 2, certificació ISO 27001, NIST 800-53 i Cyber Essentials Plus, amb avaluació anual dels proveïdors.'),
        bugBounty: f('partial', 'official', ['canvas-lms-vulnerability-disclosure'], 'Hi ha programa de recompenses a Bugcrowd, però és privat: cal demanar l’alta escrivint a security@instructure.com.', {
          url: 'https://www.instructure.com/trust-center/vulnerability-disclosure',
        }),
        vulnerabilityDisclosure: f('yes', 'official', ['canvas-lms-vulnerability-disclosure'], 'Política de divulgació responsable pública amb formulari d’enviament.'),
      },
      alternatives: [
        {
          app: 'moodle',
          comparability: 'equivalent',
          rationale: 'Mateixa funció d’aula virtual, amb codi lliure i possibilitat d’allotjar-la al servidor del mateix centre.',
          tradeOffs: 'Moodle exigeix que la institució assumeixi l’operació i la seguretat, cosa que no sempre millora el resultat.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'És l’aplicació del lot amb millors garanties documentals i, alhora, la que arrossega l’incident més greu. Val la pena llegir-la com un avís: les certificacions i l’absència de publicitat no substitueixen el risc de concentració.',
        openQuestions: [
          'Quines institucions espanyoles van quedar afectades per la intrusió de maig de 2026 i què van comunicar a l’alumnat?',
          'Les dades de l’alumnat s’utilitzen per entrenar les funcions d’IA del producte?',
        ],
      },
    },

    /* ═══════════════════════════ YayTalk ═══════════════════════════ */
    {
      slug: 'yaytalk',
      name: 'YayTalk',
      company: 'idealabs-pte',
      categories: ['educacio', 'assistents-d-ia'],
      tagline: 'Una política comuna a tot l’estudi que parla d’avatars i no del tutor d’anglès',
      summary:
        'YayTalk ofereix converses en anglès amb un tutor d’intel·ligència artificial. La política de privadesa no és seva: és la que l’estudi de Singapur IdeaLabs aplica a totes les seves aplicacions, i parla sobretot de generació de vídeos i de fotografies amb IA, amb apartats sobre dades facials que aquí no vénen a tomb. El que sí que diu i afecta qui hi parli: la veu es processa amb OpenAI i amb un proveïdor extern, hi ha publicitat conductual amb AppsFlyer, Facebook i Firebase, i el contingut aportat es fa servir per entrenar els models de l’estudi.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Singapur; IdeaLabs Pte. Ltd. es declara responsable del tractament als efectes del RGPD',
      userBase: 'Poc més de tres-centes valoracions a l’App Store espanyol (Apple, 2026)',
      links: {
        website: 'https://idealabs.mobi/',
        privacyPolicy: 'https://idealabs.mobi/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id6743074605',
      },
      accountRequired: f('yes', 'official', ['yaytalk-app-store-privacy'], 'L’etiqueta declara nom i adreça electrònica recollits per a la funcionalitat de l’aplicació.'),
      openSource: f('no', 'official', ['yaytalk-privacy-policy'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Practicar un idioma en veu alta és explicar-se: qui parla amb un tutor d’IA hi aboca feina, viatges, família i preocupacions. Aquesta conversa passa per OpenAI i per un proveïdor de veu no identificat, i la política admet que el contingut aportat serveix per entrenar models.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['yaytalk-app-store-privacy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['yaytalk-app-store-privacy', 'yaytalk-privacy-policy'] }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['yaytalk-app-store-privacy', 'yaytalk-privacy-policy'], note: 'La política remet a un proveïdor extern per als missatges de veu i a OpenAI per al contingut generat.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-publicitaria'], sources: ['yaytalk-app-store-privacy'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['yaytalk-app-store-privacy', 'yaytalk-privacy-policy'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['yaytalk-privacy-policy'], note: 'La política descriu l’ús de l’identificador publicitari d’iOS quan s’autoritza el seguiment.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['yaytalk-app-store-privacy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['yaytalk-app-store-privacy', 'yaytalk-privacy-policy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['yaytalk-privacy-policy'], note: 'Model, sistema operatiu, memòria, bateria i volum d’àudio.' }),
        row('aplicacions-instal-lades', 'optional', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['yaytalk-privacy-policy'], note: 'La política admet que alguns serveis integrats registren la llista d’aplicacions o processos del dispositiu.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['yaytalk-privacy-policy'], note: 'País, regió i ciutat deduïts de l’adreça IP o de la targeta SIM, i punts d’interès propers.' }),
        row('adreca-ip', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['yaytalk-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['yaytalk-app-store-privacy'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['yaytalk-app-store-privacy', 'yaytalk-privacy-policy'], 'L’etiqueta declara compres, identificadors i dades d’ús per rastrejar, i la política descriu el seguiment publicitari amb permís de l’App Tracking Transparency.'),
        advertisingIdentifiers: f('yes', 'official', ['yaytalk-privacy-policy']),
        thirdPartyTrackersPresent: f('yes', 'official', ['yaytalk-privacy-policy'], 'Facebook, Firebase i AppsFlyer com a eines de publicitat i atribució; OpenAI, Replicate, Stability.ai i AWS com a infraestructura.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['yaytalk-privacy-policy'], 'La política té un apartat dedicat a la publicitat conductual i admet que comparteix informació amb xarxes publicitàries.'),
        profiling: f('yes', 'official', ['yaytalk-privacy-policy'], 'Reconeix el perfilat automatitzat per part de les eines integrades, per predir preferències, interessos, comportament i ubicació.'),
        aiTraining: f('yes', 'official', ['yaytalk-privacy-policy'], 'La política afirma que el contingut aportat es fa servir per entrenar la IA que genera els resultats, i que la resta de proveïdors només el tracten per lliurar la funció.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['yaytalk-privacy-policy'], 'Llista nominal: Facebook, Firebase, AppsFlyer, Replicate, Stability.ai, OpenAI i AWS.'),
        intraGroupSharing: unknown('No consta cap estructura de grup més enllà de la família d’aplicacions del mateix estudi.'),
        dataBrokerSales: f('no', 'official', ['yaytalk-privacy-policy'], 'La política afirma que no es lloguen ni es venen dades personals a tercers, però sí que se’n comparteixen amb xarxes publicitàries.'),
        internationalTransfers: f('partial', 'official', ['yaytalk-privacy-policy'], 'El responsable és a Singapur i els encarregats declarats són nord-americans; la política no identifica cap mecanisme de transferència del capítol V del RGPD.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hi ha cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['yaytalk-privacy-policy'], 'Els terminis concrets que dona (dos dies per a les imatges aportades, quinze per als vídeos generats) corresponen a les altres aplicacions de l’estudi, no al tutor de conversa.'),
        dataAfterDeletion: f('partial', 'official', ['yaytalk-privacy-policy'], 'Es poden conservar dades per complir obligacions fiscals i comptables, per seguretat i per a còpies de seguretat.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['yaytalk-privacy-policy']),
        selfService: f('yes', 'official', ['yaytalk-privacy-policy'], 'La política indica que el compte s’elimina des de la configuració de l’aplicació i avisa que l’acció és irreversible.'),
        difficulty: 'easy',
        steps: [
          'Obre la configuració de l’aplicació i tria l’opció d’eliminar el compte.',
          'Confirma l’acció: la política adverteix que és irreversible.',
          'Cancel·la la subscripció per separat a l’App Store: eliminar el compte no l’atura.',
        ],
        dataRetained: 'Dades necessàries per a obligacions fiscals i comptables, seguretat i còpies de seguretat.',
        sources: ['yaytalk-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['yaytalk-privacy-policy'], 'Es reconeix el dret d’accés i de portabilitat, exercible per correu electrònic.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['yaytalk-privacy-policy'], 'Única adreça de contacte i termini de resposta de fins a tres mesos en casos complexos. No hi ha delegat de protecció de dades ni representant a la UE designats.', {
          url: 'mailto:service@support.idealabs.mobi',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['yaytalk-privacy-policy'], 'La política remet a la configuració d’iOS per limitar el seguiment publicitari; no descriu cap control dins de l’aplicació.'),
        telemetryOptOut: f('no', 'official', ['yaytalk-privacy-policy'], 'L’analítica s’activa quan s’autoritza el seguiment i no hi ha cap commutador propi.'),
        granularControls: f('no', 'official', ['yaytalk-privacy-policy'], 'No hi ha cap panell de privadesa amb controls per finalitat.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem pogut revisar les pantalles de consentiment ni l’embut de subscripció.'),
      },
      security: {
        e2ee: na('El servei ha de processar la conversa per respondre-hi.'),
        transportEncryption: f('partial', 'official', ['yaytalk-privacy-policy'], 'La política diu que segueix estàndards del sector durant la transmissió, sense concretar protocols.'),
        atRestEncryption: f('partial', 'official', ['yaytalk-privacy-policy'], 'Esmenta xifratge i seudonimització «en alguns casos», sense concretar quins.'),
        mfa: unknown('No consta cap informació sobre verificació en dos passos.'),
        independentAudits: unknown('No consten auditories independents.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hi ha cap canal públic de comunicació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La política de plantilla compartida entre aplicacions diferents és un problema documental de fons: qui la llegeix no pot saber quines frases l’afecten. Hi mantenim els indicadors que el text sosté i deixem com a desconegut tot el que només es podria endevinar.',
        openQuestions: [
          'Qui és el proveïdor extern que processa els missatges de veu? La política l’esmenta sense anomenar-lo.',
          'Les converses del tutor d’anglès entren dins de l’entrenament de models que la política descriu per al contingut de vídeo i fotografia?',
          'Hi ha representant a la Unió Europea designat segons l’article 27 del RGPD?',
        ],
      },
    },

    /* ═══════════════════════════ Preply ═══════════════════════════ */
    {
      slug: 'preply',
      name: 'Preply',
      company: 'preply',
      categories: ['educacio'],
      tagline: 'Classes per videoconferència amb gravacions que alimenten l’entrenament d’IA durant dos anys',
      summary:
        'Preply connecta alumnat amb professorat particular per videoconferència. La política és de les més completes del lot i també de les que declaren més tractaments: gravacions de veu i de classe analitzades amb eines d’IA i conservades dos anys a la Unió Europea amb finalitat d’entrenament, verificació biomètrica de la identitat del professorat, obligacions fiscals DAC7 per a qui hi ensenya, i publicitat amb dades utilitzades per rastrejar a través d’altres empreses. L’eliminació del compte, en canvi, és senzilla i autoservei.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Estats Units, amb representant a la Unió Europea a Barcelona',
      userBase: 'Més de cent mil professores i professors registrats (Preply, 2026)',
      links: {
        website: 'https://preply.com/es/',
        privacyPolicy: 'https://termsofuse.preply.com/terms_of_use/en_PrivacyPolicy.pdf',
        appStore: 'https://apps.apple.com/es/app/id1352790442',
      },
      accountRequired: f('yes', 'official', ['preply-privacy-policy'], 'El web es pot consultar sense compte, però l’aplicació mòbil exigeix registrar-s’hi primer.'),
      openSource: f('no', 'official', ['preply-privacy-policy'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Una hora de classe particular gravada conté molt més que vocabulari: motius per aprendre l’idioma, feina, projectes de migració i vida personal. Preply desa aquestes gravacions i les transcripcions, les analitza amb eines d’IA i les conserva dos anys amb finalitat d’entrenament.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['preply-privacy-policy', 'preply-app-store-privacy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['preply-privacy-policy', 'preply-app-store-privacy'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['preply-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['preply-app-store-privacy'] }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['preply-privacy-policy', 'preply-app-store-privacy'], note: 'Gravacions de veu i de classe, transcripcions i indicacions escrites, tractades amb eines d’IA de tercers.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['preply-app-store-privacy'], note: 'Fotografia de perfil i vídeo de les classes i de les classes en grup.' }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['preply-privacy-policy'], note: 'Només per al professorat: verificació d’identitat amb consentiment exprés a través d’un proveïdor extern.' }),
        row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['preply-privacy-policy'], note: 'Per al professorat: número d’identificació fiscal i compte bancari per complir la directiva DAC7.' }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['preply-privacy-policy'], note: 'Any de naixement per al professorat i data completa per a les obligacions fiscals.' }),
        row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['preply-privacy-policy'], note: 'Dada del perfil del professorat.' }),
        row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['preply-privacy-policy'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'personalitzacio-de-continguts'], sources: ['preply-app-store-privacy'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['preply-app-store-privacy'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['preply-privacy-policy'], note: 'Les dades de targeta les tracten els proveïdors de pagament, no Preply.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['preply-app-store-privacy', 'preply-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['preply-privacy-policy'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['preply-app-store-privacy'] }),
        row('llengua', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['preply-privacy-policy'], note: 'Idioma de la interfície, zona horària i nivell mesurat a la prova de competència.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['preply-app-store-privacy'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['preply-app-store-privacy'], 'L’etiqueta declara compres, dades de contacte, identificadors i dades d’ús utilitzats per rastrejar a través d’aplicacions i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['preply-app-store-privacy']),
        thirdPartyTrackersPresent: f('yes', 'official', ['preply-privacy-policy', 'preply-app-store-privacy'], 'La política descriu categories d’encarregats d’analítica i de màrqueting; l’etiqueta confirma l’ús publicitari dels identificadors.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['preply-app-store-privacy', 'preply-privacy-policy'], 'L’etiqueta declara dades per a «publicidad o marketing del desarrollador» i la política preveu la promoció amb xarxes socials, mitjans i afiliats.'),
        profiling: f('partial', 'official', ['preply-privacy-policy'], 'Hi ha recomanacions personalitzades i decisions algorítmiques sobre els comptes del professorat, amb dret documentat a demanar intervenció humana.'),
        aiTraining: f('yes', 'official', ['preply-privacy-policy'], 'L’entrenament d’IA figura expressament entre els interessos legítims, i les dades tractades amb eines d’IA es conserven dos anys a la Unió Europea amb aquesta finalitat.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['preply-privacy-policy'], 'Proveïdors d’analítica, de pagaments, de verificació d’identitat i d’IA, tots sota contracte d’encàrrec o clàusules contractuals tipus. El perfil i les valoracions també són visibles per a altres persones usuàries.'),
        intraGroupSharing: f('partial', 'official', ['preply-privacy-policy'], 'Preply, Inc. opera amb societats vinculades a Espanya i al Regne Unit com a representants.'),
        dataBrokerSales: f('no', 'official', ['preply-privacy-policy'], 'La política afirma expressament que no ven dades personals ni dades de menors de setze anys.'),
        internationalTransfers: f('yes', 'official', ['preply-privacy-policy'], 'Servidors d’AWS a Irlanda, Alemanya i els Estats Units, amb clàusules contractuals tipus i certificació al Marc de Privadesa de Dades UE-EUA.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['preply-privacy-policy'], 'Terminis concrets: el compte caduca als dos anys sense activitat i les dades s’eliminen dels sistemes actius en noranta dies; les dades tractades amb eines d’IA es conserven dos anys a la UE.'),
        dataAfterDeletion: f('partial', 'official', ['preply-privacy-policy'], 'Adverteix que hi ha contingut que no es pot eliminar perquè està lligat a classes que altres persones han fet, i que es conserva el que exigeixen les obligacions fiscals i comptables.'),
        periods: [
          { dataType: 'veu-i-audio', period: 'Dos anys a la Unió Europea per a finalitats d’entrenament d’IA, i més temps fora de la UE', sources: ['preply-privacy-policy'] },
          { dataType: 'identificador-de-compte', period: 'Dos anys sense activitat i, després, supressió dels sistemes actius en noranta dies', sources: ['preply-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['preply-delete-profile', 'preply-privacy-policy']),
        selfService: f('yes', 'official', ['preply-delete-profile'], 'Botó «Delete account» al final de la configuració, amb confirmació escrivint l’adreça electrònica del registre.'),
        directUrl: 'https://preply.com/en/settings',
        difficulty: 'easy',
        steps: [
          'Entra a Preply i obre el menú de configuració del compte.',
          'Ves al final de la pàgina i prem el botó vermell «Delete account».',
          'Escriu l’adreça electrònica amb què et vas registrar per confirmar la supressió.',
          'Abans de fer-ho, demana el reemborsament del saldo no utilitzat: eliminar el perfil no cancel·la les classes ni retorna els diners.',
        ],
        obstacles:
          'El mateix centre d’ajuda avisa que la supressió no atura les classes ni retorna el saldo pendent, cosa que converteix un botó senzill en una decisió amb cost econòmic si no s’ordena bé.',
        dataRetained:
          'Contingut lligat a classes fetes amb altres persones i dades subjectes a obligacions fiscals i comptables.',
        sources: ['preply-delete-profile', 'preply-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['preply-privacy-policy'], 'Els drets d’accés i de portabilitat es reconeixen i s’exerceixen pel canal de protecció de dades.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['preply-privacy-policy'], 'Delegat de protecció de dades amb adreça pròpia i representant a la Unió Europea amb domicili a Barcelona.', {
          url: 'mailto:dpo@preply.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['preply-privacy-policy'], 'Les galetes no essencials es poden rebutjar i les comunicacions comercials es poden aturar, però no consta un control específic per a la publicitat dins de l’aplicació.'),
        telemetryOptOut: f('partial', 'official', ['preply-privacy-policy'], 'La política de galetes permet rebutjar l’analítica al web; l’analítica de l’aplicació no té control documentat.'),
        granularControls: f('yes', 'official', ['preply-privacy-policy'], 'L’anàlisi de les classes en vídeo, les ressenyes i els butlletins es basen en consentiments separats i revocables.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'editorial', ['preply-delete-profile'], 'La supressió és fàcil, però el fet que no reemborsi el saldo ni cancel·li les classes crea un cost de sortida que no s’explica fins que ja hi ets.'),
        darkPatternList: [
          {
            type: 'confusing-language',
            severity: 'low',
            description:
              'L’article d’ajuda sobre la supressió del perfil només adverteix al final que eliminar el compte no cancel·la les classes ni retorna el saldo no utilitzat.',
            sources: ['preply-delete-profile'],
          },
        ],
      },
      security: {
        e2ee: na('La plataforma processa i analitza les classes, de manera que no pot ser cega als continguts.'),
        transportEncryption: f('partial', 'official', ['preply-privacy-policy'], 'La política diu que les dades de pagament es tracten xifrades pels proveïdors; no detalla la resta de la infraestructura.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: unknown('No hem trobat documentació oficial sobre verificació en dos passos, malgrat que hi ha queixes públiques de professorat per pagaments desviats després d’una suplantació.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('No hi ha cap canal públic de comunicació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'duolingo',
          comparability: 'partial',
          rationale: 'Cobreix l’aprenentatge d’idiomes sense classes en directe, i per tant sense gravacions de veu ni de vídeo.',
          tradeOffs: 'Duolingo no dona conversa amb una persona i té un rastreig publicitari més ampli.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La conservació de dues anys de gravacions i transcripcions amb finalitat d’entrenament d’IA és la dada més rellevant d’aquesta fitxa, i està declarada amb claredat a la política. La mateixa política permet retirar el consentiment a l’anàlisi de les classes en vídeo.',
        openQuestions: [
          'Preply ofereix verificació en dos passos al professorat, que hi té ingressos associats?',
          'Quins proveïdors d’IA reben les gravacions i les transcripcions de les classes?',
        ],
      },
    },
  ],
  incidents: [
    {
      slug: 'duolingo-scraping-2023',
      title: 'Publicació de dades de 2,6 milions de comptes de Duolingo obtingudes d’una API oberta',
      type: 'scraping',
      severity: 'medium',
      apps: ['duolingo'],
      company: 'duolingo',
      occurredAt: '2023-01-01',
      disclosedAt: '2023-08-23',
      description:
        'Una API pública de Duolingo permetia comprovar si una adreça electrònica tenia compte i retornava les dades del perfil associat. Algú la va explotar per compondre un fitxer de 2,6 milions de registres que barrejava informació pública del perfil amb l’adreça electrònica, que no ho és. El conjunt es va posar a la venda el gener de 2023 per 1.500 dòlars i es va publicar en obert en un fòrum el mes d’agost. Duolingo va sostenir que no era ni una bretxa ni una intrusió perquè les dades del perfil ja eren públiques, i va limitar el ritme de peticions a l’API.',
      affectedPeople: 'Prop de 2,6 milions de comptes, amb l’adreça electrònica exposada.',
      sources: ['duolingo-scraping-press'],
    },
    {
      slug: 'canvas-lms-bretxa-2026',
      title: 'Exfiltració de dades acadèmiques de milers d’institucions que fan servir Canvas',
      type: 'breach',
      severity: 'critical',
      apps: ['canvas-lms'],
      company: 'instructure',
      occurredAt: '2026-04-25',
      disclosedAt: '2026-05-01',
      description:
        'El grup ShinyHunters va accedir a la infraestructura d’Instructure i va extreure prop de 3,65 terabytes de dades procedents de milers d’institucions educatives. Segons l’empresa, l’accés va quedar contingut el 2 de maig, però el 7 de maig els atacants van tornar a entrar i van deixar un missatge d’extorsió aprofitant una interrupció del servei que Instructure va presentar com a manteniment programat. L’11 de maig l’empresa va pagar els extorsionadors. Hi va haver institucions afectades al Regne Unit, als Països Baixos i a Suècia, i el cas va derivar en una investigació parlamentària als Estats Units i en diverses demandes col·lectives.',
      affectedPeople:
        'Al voltant de 8.800 institucions i centenars de milions de comptes d’alumnat i de professorat.',
      sources: ['canvas-lms-breach-krebs'],
    },
  ],
  storeIds: {
    moodle: 'com.moodle.moodlemobile',
    duolingo: 'com.duolingo.DuolingoMobile',
    knowunity: 'de.knowunity.app',
    'astra-ai': 'com.astra-ai.app',
    todotest: 'com.todotest.TodoTest',
    'kiwi-ai': 'studio.blackboard.Kiwinote',
    aeolcloud: 'aeol.aeolservice.AeolCloud',
    'canvas-lms': 'com.instructure.icanvas',
    yaytalk: 'com.ai.language.learning.tutor',
    preply: 'com.preply',
  },
}
