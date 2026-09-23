import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 07 de la segona onada: esport i apostes (DAZN i DAZN Bet), documents
 * (Adobe Acrobat Reader i Adobe Scan), aplicacions del grup Codeway (Learna AI
 * i Cleanup), telecomunicacions i televisió de Telefónica (Movistar Plus+ i Mi
 * Movistar) i microdrames de SKYWORK AI (DramaWave i DramaReels).
 *
 * El fil que uneix el lot són les parelles: dues aplicacions de cada grup, amb
 * la mateixa política però etiquetes de privadesa i sortides molt diferents.
 * La font principal de cada fitxa és la política vigent a Espanya o a la UE,
 * l’etiqueta de l’App Store i la documentació d’ajuda sobre el tancament del
 * compte.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/* ───────────────────────────── Empreses ───────────────────────────── */

const companies: SeedLot['companies'] = [
  {
    slug: 'dazn',
    name: 'DAZN',
    legalName: 'DAZN Limited',
    description:
      'Plataforma britànica de retransmissió esportiva per subscripció, present a més de 200 mercats. A Espanya té filial pròpia, DAZN Spain, S.L., i des del 2023 explota també la marca d’apostes DAZN Bet.',
    headquartersCountry: 'GB',
    euEstablishment: 'ES',
    ownership: 'private',
    foundedYear: 2016,
    primaryRevenueModel: 'subscription',
    website: 'https://www.dazn.com/',
    productDomains: ['dazn.com'],
    privacyContact: 'DPO@dazn.com',
  },
  {
    slug: 'dzbt-deportes',
    name: 'DAZN Bet España',
    legalName: 'DZBT Deportes, S.A.U.',
    description:
      'Societat titular de la llicència de joc en línia que explota daznbet.es amb la marca DAZN Bet. Té el domicili a Ceuta, com bona part dels operadors de joc que operen a Espanya.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'AEPD',
    ownership: 'private',
    primaryRevenueModel: 'commerce',
    website: 'https://www.daznbet.es/',
    productDomains: ['daznbet.es'],
  },
  {
    slug: 'adobe',
    name: 'Adobe',
    legalName: 'Adobe Inc.',
    description:
      'Empresa nord-americana de programari creatiu i de documents, cotitzada al Nasdaq. Des del pas al núvol, la major part dels ingressos són subscripcions de Creative Cloud i Document Cloud.',
    headquartersCountry: 'US',
    ownership: 'public',
    foundedYear: 1982,
    primaryRevenueModel: 'subscription',
    website: 'https://www.adobe.com/',
    productDomains: ['adobe.com', 'acrobat.adobe.com'],
    privacyContact: 'DPO@adobe.com',
  },
  {
    slug: 'adobe-ireland',
    name: 'Adobe Ireland',
    legalName: 'Adobe Systems Software Ireland Limited',
    parent: 'adobe',
    description:
      'Entitat responsable del tractament per a les persones usuàries de fora d’Amèrica del Nord i el Japó, segons la política de privadesa d’Adobe.',
    headquartersCountry: 'IE',
    euEstablishment: 'IE',
    leadSupervisoryAuthority: 'DPC (Irlanda)',
    ownership: 'subsidiary',
    primaryRevenueModel: 'subscription',
    website: 'https://www.adobe.com/es/',
    privacyContact: 'DPO@adobe.com',
  },
  {
    slug: 'telefonica',
    name: 'Telefónica',
    legalName: 'Telefónica, S.A.',
    description:
      'Grup espanyol de telecomunicacions, cotitzat a la borsa de Madrid, que opera a Espanya amb les marques Movistar i O2 i és accionista de la plataforma publicitària europea Utiq.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'AEPD',
    ownership: 'public',
    foundedYear: 1924,
    primaryRevenueModel: 'subscription',
    website: 'https://www.telefonica.com/',
    productDomains: ['telefonica.com', 'movistar.es'],
  },
  {
    slug: 'telefonica-espana',
    name: 'Telefónica de España',
    legalName: 'Telefónica de España, S.A.U.',
    parent: 'telefonica',
    description:
      'Filial de xarxa fixa del grup Telefónica i corresponsable, amb Telefónica Móviles España, del tractament de dades dels clients Movistar.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'AEPD',
    ownership: 'subsidiary',
    primaryRevenueModel: 'subscription',
    website: 'https://www.movistar.es/',
    productDomains: ['movistar.es'],
    privacyContact: 'DPO_movistar@telefonica.com',
  },
  {
    slug: 'telefonica-moviles-espana',
    name: 'Telefónica Móviles España',
    legalName: 'Telefónica Móviles España, S.A.U.',
    parent: 'telefonica',
    description:
      'Filial de telefonia mòbil del grup Telefónica, titular de les marques Movistar i O2 a Espanya i corresponsable del tractament de dades dels clients Movistar.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'AEPD',
    ownership: 'subsidiary',
    primaryRevenueModel: 'subscription',
    website: 'https://www.movistar.es/',
    productDomains: ['movistar.es', 'o2online.es'],
    privacyContact: 'DPO_movistar@telefonica.com',
  },
  {
    slug: 'telefonica-audiovisual-digital',
    name: 'Telefónica Audiovisual Digital',
    legalName: 'Telefónica Audiovisual Digital, S.L.U.',
    parent: 'telefonica',
    description:
      'Filial audiovisual del grup Telefónica que presta el servei Movistar Plus+ i està inscrita al Registre Estatal de Prestadors de Serveis de Comunicació Audiovisual.',
    headquartersCountry: 'ES',
    euEstablishment: 'ES',
    leadSupervisoryAuthority: 'AEPD',
    ownership: 'subsidiary',
    primaryRevenueModel: 'subscription',
    website: 'https://www.movistarplus.es/',
    productDomains: ['movistarplus.es'],
    privacyContact: 'DPO_movistar@telefonica.com',
  },
  {
    slug: 'codeway',
    name: 'Codeway',
    legalName: 'Codeway Dijital Hizmetler Anonim Şirketi',
    description:
      'Estudi turc d’aplicacions mòbils de consum amb seu a Istanbul. Publica desenes d’aplicacions d’utilitats i d’IA sota diverses marques i societats del grup.',
    headquartersCountry: 'TR',
    ownership: 'private',
    primaryRevenueModel: 'subscription',
    website: 'https://www.codeway.co/',
    productDomains: ['codeway.co', 'cleanup.photos'],
    privacyContact: 'cleanup@codeway.co',
  },
  {
    slug: 'deep-flow-software-services',
    name: 'Deep Flow Software Services',
    legalName: 'Deep Flow Software Services - FZCO',
    description:
      'Societat de zona franca de Dubai que figura com a responsable del tractament de Learna AI. Publica les aplicacions al mateix compte de desenvolupador de l’App Store que Cleanup, de Codeway, i atén les sol·licituds des d’una adreça del domini codeway.co.',
    headquartersCountry: 'AE',
    ownership: 'private',
    primaryRevenueModel: 'subscription',
    website: 'https://learna-ai.co/',
    productDomains: ['ai-learning-app.com', 'learna-ai.co'],
    privacyContact: 'learna@codeway.co',
  },
  {
    slug: 'skywork-ai',
    name: 'SKYWORK AI',
    legalName: 'SKYWORK AI PTE. LTD.',
    description:
      'Empresa de Singapur que publica aplicacions de microdrames verticals i de generació de vídeo amb IA. Té representant a la UE a Alemanya i sotmet la política de privadesa a la llei i a l’arbitratge de Singapur.',
    headquartersCountry: 'SG',
    ownership: 'private',
    primaryRevenueModel: 'freemium',
    website: 'https://mydramawave.com/',
    productDomains: ['mydramawave.com', 'free-reels.com'],
    privacyContact: 'dramawavesupport@mydramawave.com',
  },
]

/* ───────────────────────────── Fonts ───────────────────────────── */

const sources: SeedLot['sources'] = [
  s(
    'dazn-privacy-notice',
    'DAZN Privacy Policy and Cookie Notice',
    'https://help.dazn.com/hc/es-es/articles/16394152093597',
    'DAZN',
    'privacy-policy',
    'primary',
    {
      language: 'en',
      archiveUrl:
        'https://web.archive.org/web/20241205101030/https://help.dazn.com/hc/en-es/articles/16394152093597-Privacy-Policy-and-Cookie-Notice',
      summary:
        'Avís global de privadesa de DAZN: identifica DAZN Limited com a responsable, i DAZN Spain, S.L. per als clients del canal d’Amazon Prime Video. Detalla les categories de dades, les finalitats publicitàries, els mecanismes de transferència internacional i un termini general de conservació de set anys. Consultada la còpia arxivada perquè el centre d’ajuda no es deixa llegir sense navegador.',
    },
  ),
  s('dazn-app-store', 'DAZN: Deportes en Directo — Privacidad de la app', appStore('1129523589'), 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary: 'Etiqueta de privadesa declarada per DAZN Limited: identificadors i dades de publicitat utilitzats per rastrejar.',
  }),
  s(
    'dazn-responsible-disclosure',
    'Global Responsible Disclosure for Security Vulnerabilities Policy',
    'https://www.dazn.com/es-ES/help/articles/responsible-disclosure',
    'DAZN',
    'technical-doc',
    'primary',
    {
      language: 'en',
      summary:
        'Política de divulgació responsable del grup DAZN. Estableix un canal per comunicar vulnerabilitats i diu explícitament que no s’ofereixen recompenses econòmiques.',
    },
  ),
  s('dazn-security-txt', 'DAZN security.txt', 'https://www.dazn.com/.well-known/security.txt', 'DAZN', 'technical-doc', 'primary', {
    language: 'en',
    summary: 'Fitxer security.txt amb el contacte security@dazn.com i l’enllaç a la política de divulgació responsable.',
  }),
  s(
    'dazn-bet-app-store',
    'DAZN Bet: Apuestas Deportivas — Privacidad de la app',
    appStore('1672207635'),
    'Apple',
    'app-store',
    'primary',
    {
      language: 'es',
      summary:
        'Etiqueta de privadesa de DAZN Bet: adreça física, dades de pagament, fotos i missatges vinculats al compte, i identificador d’usuari utilitzat per rastrejar. La fitxa de la botiga publica l’aplicació sota el nom de desenvolupador «dzbt-es-stage».',
    },
  ),
  s(
    'dazn-bet-help-operator',
    'Centro de ayuda DAZN Bet',
    'https://ayuda.daznbet.es/hc/es',
    'DZBT Deportes',
    'support-doc',
    'primary',
    {
      language: 'es',
      summary: 'Centre d’ajuda de DAZN Bet. Identifica DZBT Deportes, S.A.U., amb domicili a Ceuta, com a operadora de daznbet.es.',
    },
  ),
  s(
    'dazn-bet-help-close-account',
    '¿Cómo puedo cerrar mi cuenta?',
    'https://ayuda.daznbet.es/hc/es/articles/6675455591197',
    'DZBT Deportes',
    'support-doc',
    'primary',
    {
      language: 'es',
      summary: 'Article d’ajuda sobre el tancament del compte: només es pot fer contactant amb atenció al client pel xat.',
    },
  ),
  s(
    'dazn-bet-help-self-exclusion',
    '¿Qué es una autoexclusión?',
    'https://ayuda.daznbet.es/hc/es/articles/6694692764445',
    'DZBT Deportes',
    'support-doc',
    'primary',
    {
      language: 'es',
      summary:
        'Explica l’autoexclusió de sis mesos a cinc anys, irrevocable mentre dura, i la supressió de les llistes de màrqueting. Es complementa amb l’exclusió estatal del RGIAJ.',
    },
  ),
  s(
    'dazn-bet-help-verification',
    '¿Cómo verifico mi cuenta?',
    'https://ayuda.daznbet.es/hc/es/articles/6848715381661',
    'DZBT Deportes',
    'support-doc',
    'primary',
    {
      language: 'es',
      summary:
        'Procés de verificació documental: cal fotografiar l’anvers i el revers del DNI o NIE amb la càmera del mòbil quan es diposita més de 150 € o es demana la primera retirada.',
    },
  ),
  s(
    'dazn-bet-help-marketing',
    'No quiero recibir información promocional',
    'https://ayuda.daznbet.es/hc/es/articles/9743978399773',
    'DZBT Deportes',
    'support-doc',
    'primary',
    {
      language: 'es',
      summary: 'Indica on són les preferències de comunicació del compte per deixar de rebre correus i SMS promocionals.',
    },
  ),
  s('adobe-privacy-policy', 'Adobe Privacy Policy', 'https://www.adobe.com/privacy/policy.html', 'Adobe', 'privacy-policy', 'primary', {
    language: 'en',
    summary:
      'Política global d’Adobe. Identifica Adobe Systems Software Ireland Limited com a responsable fora d’Amèrica del Nord i el Japó, descriu les dades recollides, les transferències als EUA i a l’Índia, la conservació de deu anys de les dades de transacció i el canal DPO@adobe.com.',
  }),
  s('adobe-privacy-choices', 'Adobe Privacy Choices', 'https://www.adobe.com/privacy/opt-out.html', 'Adobe', 'privacy-center', 'primary', {
    language: 'en',
    summary:
      'Pàgina de preferències: exclusió de la publicitat basada en interessos, exclusió de l’anàlisi automatitzada del contingut per aprenentatge automàtic i configuració de les dades d’ús de les aplicacions d’escriptori.',
  }),
  s(
    'adobe-transparency-center',
    'Adobe Transparency Center',
    'https://www.adobe.com/trust/transparency.html',
    'Adobe',
    'transparency-report',
    'primary',
    {
      language: 'en',
      summary: 'Centre de transparència d’Adobe, amb els informes sobre peticions governamentals i les directrius per a les autoritats.',
    },
  ),
  s('adobe-security-txt', 'Adobe security.txt', 'https://www.adobe.com/.well-known/security.txt', 'Adobe', 'technical-doc', 'primary', {
    language: 'en',
    summary:
      'Fitxer security.txt signat amb PGP que remet el programa públic d’Adobe a Intigriti i el contacte psirt@adobe.com per comunicar vulnerabilitats.',
  }),
  s(
    'adobe-acrobat-app-store',
    'Adobe Acrobat Reader Firma PDF — Privacidad de la app',
    appStore('469337564'),
    'Apple',
    'app-store',
    'primary',
    {
      language: 'es',
      summary: 'Etiqueta de privadesa d’Acrobat Reader: contactes, contingut, historial de cerca i identificadors utilitzats per rastrejar.',
    },
  ),
  s('adobe-scan-app-store', 'Adobe Scan: Escáner PDF y OCR — Privacidad de la app', appStore('1199564834'), 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary:
      'Etiqueta de privadesa d’Adobe Scan: identificadors vinculats al compte per a publicitat de tercers i per a publicitat pròpia, i dades de rastreig.',
  }),
  s('adobe-hibp-breach', 'Adobe — Have I Been Pwned', 'https://haveibeenpwned.com/PwnedWebsites#Adobe', 'Have I Been Pwned', 'other', 'independent', {
    language: 'en',
    summary: 'Fitxa de la filtració d’Adobe del 2013 amb el recompte de 152.445.165 comptes i les categories de dades exposades.',
  }),
  s(
    'learna-privacy-policy',
    'DEEP FLOW SOFTWARE SERVICES – FZCO Privacy Policy «LEARNA»',
    'https://static.ai-learning-app.com/privacy-policy-en.html',
    'Deep Flow Software Services',
    'privacy-policy',
    'primary',
    {
      language: 'en',
      publishedAt: '2026-02-24',
      summary:
        'Política de Learna AI. Identifica Deep Flow Software Services - FZCO (Dubai) com a responsable, enumera les dades (incloses les indicacions, les imatges i els enregistraments de veu que s’envien a l’aplicació), la compartició de dades de màrqueting amb Google, Apple, Facebook SDK, Adjust i Firebase, i té un apartat específic per a l’EEE.',
    },
  ),
  s('learna-app-store', 'Learna AI: Aprender Inglés — Privacidad de la app', appStore('6478287397'), 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary: 'Etiqueta de privadesa de Learna AI: dades de publicitat utilitzades per rastrejar i la resta declarada com a no vinculada a la identitat.',
  }),
  s('cleanup-privacy-policy', 'Cleanup Privacy Policy', 'https://cleanup.photos/privacy', 'Codeway', 'privacy-policy', 'primary', {
    language: 'en',
    publishedAt: '2025-05-05',
    summary:
      'Política de Cleanup. Codeway Dijital Hizmetler A.Ş. hi consta com a responsable, afirma que les fotos, els vídeos i la llista de contactes no s’emmagatzemen als seus servidors i detalla la compartició de dades de màrqueting amb Google, Apple, Facebook SDK, Adjust i Firebase.',
  }),
  s('cleanup-app-store', 'Cleanup: Limpiador de fotos — Privacidad de la app', appStore('1510944943'), 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary:
      'Etiqueta de privadesa de Cleanup: historial de compres, identificadors i interacció amb el producte declarats com a dades utilitzades per rastrejar.',
  }),
  s(
    'movistar-privacy-policy',
    'Política de privacidad de clientes — Movistar',
    'https://www.movistar.es/atencion-cliente/centro-de-privacidad/politica-de-privacidad-clientes',
    'Telefónica',
    'privacy-policy',
    'primary',
    {
      language: 'es',
      summary:
        'Política de clients Movistar. Declara com a corresponsables Telefónica de España i Telefónica Móviles España, defineix els perfils comercials (bàsic, enriquit, avançat i de la llar), els terminis de conservació (10 anys després de la baixa, 12 mesos per a les dades d’ús) i els canals per exercir els drets.',
    },
  ),
  s(
    'movistar-privacy-additional',
    'Información adicional de privacidad — Movistar',
    'https://www.movistar.es/atencion-cliente/centro-de-privacidad/informacion-adicional',
    'Telefónica',
    'privacy-center',
    'primary',
    {
      language: 'es',
      summary:
        'Annex de la política: categories de destinataris, empreses del grup, llista de transferències internacionals amb el país i la garantia aplicable, i explicació del servei publicitari Utiq.',
    },
  ),
  s('movistarplus-privacy-centre', 'Centro de privacidad — Movistar Plus+', 'https://www.movistarplus.es/legal/centro-de-privacidad', 'Telefónica Audiovisual Digital', 'privacy-center', 'primary', {
    language: 'es',
    summary: 'Centre de privadesa enllaçat des de Movistar Plus+, que reprodueix la política de clients Movistar amb els mateixos corresponsables.',
  }),
  s('movistarplus-legal-notice', 'Aviso legal — Movistar Plus+', 'https://www.movistarplus.es/legal/aviso-legal', 'Telefónica Audiovisual Digital', 'terms', 'primary', {
    language: 'es',
    summary: 'Avís legal que identifica Telefónica Audiovisual Digital, S.L.U. com a prestadora del servei Movistar Plus+.',
  }),
  s('movistar-plus-app-store', 'Movistar Plus — Privacidad de la app', appStore('540674767'), 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary: 'Etiqueta de privadesa de Movistar Plus+: cap dada declarada com a utilitzada per rastrejar i identificador de dispositiu no vinculat per a publicitat de tercers.',
  }),
  s('mi-movistar-app-store', 'Mi Movistar — Privacidad de la app', appStore('1246644017'), 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary: 'Etiqueta de privadesa de Mi Movistar: nom, telèfon i identificadors vinculats al compte, identificadors utilitzats per rastrejar i ubicació exacta no vinculada.',
  }),
  s('aepd-ps-00303-2024', 'Resolución del procedimiento sancionador PS/00303/2024', 'https://www.aepd.es/documento/ps-00303-2024.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
    language: 'es',
    summary:
      'L’AEPD multa Telefónica Móviles España amb 200.000 € per infracció de l’article 6.1 del RGPD: va lliurar un duplicat de targeta SIM a un tercer sense verificar-ne la identitat, cosa que va permetre un frau bancari.',
  }),
  s('aepd-ps-00417-2024', 'Resolución del procedimiento sancionador PS/00417/2024', 'https://www.aepd.es/documento/ps-00417-2024.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
    language: 'es',
    summary:
      'L’AEPD multa Telefónica Móviles España amb 300.000 € per infracció de l’article 6.1 del RGPD en un canvi de titularitat d’una línia mòbil fet sense el consentiment del titular.',
  }),
  s('dramawave-privacy-policy', 'DramaWave Privacy Policy (For Users in EEA, UK and Switzerland)', 'https://mydramawave.com/rules/privacy.html', 'SKYWORK AI', 'privacy-policy', 'primary', {
    language: 'en',
    publishedAt: '2026-06-25',
    summary:
      'Versió per a l’EEE de la política de DramaWave. Detalla les bases jurídiques per finalitat, el tractament de dades facials per a les funcions d’IA amb consentiment explícit, l’accés al porta-retalls i al calendari, el xifratge en repòs i en trànsit, l’eliminació del compte des de l’aplicació i el representant a la UE.',
  }),
  s('dramawave-app-store', 'DramaWave - Dramas & Reels — Privacidad de la app', appStore('6670430706'), 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary: 'Etiqueta de privadesa de DramaWave: identificador de dispositiu utilitzat per rastrejar i correu i nom vinculats al compte.',
  }),
  s('dramareels-privacy-policy', 'FreeReels Privacy Policy', 'https://free-reels.com/rules/privacy.html', 'SKYWORK AI', 'privacy-policy', 'primary', {
    language: 'en',
    publishedAt: '2026-07-21',
    summary:
      'Política de l’aplicació que a l’App Store es diu DramaReels i al document es diu FreeReels. Mateixa plantilla que DramaWave, sense les funcions d’IA facial, amb accés al porta-retalls i al calendari, eliminació del compte des de l’aplicació i contacte en una adreça de Gmail.',
  }),
  s('dramareels-app-store', 'DramaReels: Dramas y Series — Privacidad de la app', appStore('6738081517'), 'Apple', 'app-store', 'primary', {
    language: 'es',
    summary: 'Etiqueta de privadesa de DramaReels: identificador de dispositiu utilitzat per rastrejar, i ubicació aproximada i dades de contacte vinculades al compte.',
  }),
]

/* ═══════════════════════════ DAZN ═══════════════════════════ */
const dazn: AppSeed = {
  slug: 'dazn',
  name: 'DAZN',
  company: 'dazn',
  categories: ['video-i-streaming', 'esports-i-resultats'],
  tagline: 'Televisió esportiva de pagament que declara identificadors i dades de publicitat utilitzats per rastrejar',
  summary:
    'DAZN es paga amb subscripcions, però l’etiqueta de l’App Store declara identificador d’usuari, identificador de dispositiu i dades de publicitat com a dades utilitzades per rastrejar, i el consentiment de galetes es demana amb el marc de l’IAB i 197 socis publicitaris. L’avís de privadesa fixa un termini general de conservació de set anys i identifica DAZN Limited, al Regne Unit, com a responsable, amb DAZN Spain, S.L. per als clients del canal d’Amazon Prime Video. Qui mira futbol hi deixa un registre detallat de competicions, horaris i dispositius.',
  platforms: ['ios', 'android', 'web', 'other'],
  businessModel: 'subscription',
  jurisdiction: 'Regne Unit i Espanya',
  userBase: 'Present a més de 200 mercats; DAZN no publica el nombre de subscripcions a Espanya',
  links: {
    website: 'https://www.dazn.com/es-ES/welcome',
    privacyPolicy: 'https://help.dazn.com/hc/es-es/articles/16394152093597',
    appStore: appStore('1129523589'),
  },
  accountRequired: f('yes', 'official', ['dazn-privacy-notice'], 'Cal registrar-se i subscriure’s per veure qualsevol retransmissió.'),
  openSource: f('no', 'official', ['dazn-app-store'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'L’historial de reproducció d’una plataforma esportiva diu de quin equip ets, a quina hora ets a casa i amb quants dispositius comparteixes el compte. Combinat amb les dades de publicitat que DAZN declara utilitzar per rastrejar, permet arribar-te amb anuncis fora de la plataforma.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['dazn-app-store', 'dazn-privacy-notice'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['dazn-app-store'], note: 'Declarada també per a publicitat i màrqueting del desenvolupador.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['dazn-privacy-notice'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['dazn-app-store'] }),
    row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'mesura-i-analisi-dus'], sources: ['dazn-privacy-notice'], note: 'L’avís de privadesa parla de dades de visualització per personalitzar el servei i informar els titulars de drets.' }),
    row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts', 'mesura-i-analisi-dus'], sources: ['dazn-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'mesura-publicitaria'], sources: ['dazn-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['dazn-app-store'] }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['dazn-app-store'], note: 'L’App Store ho declara com a «datos de publicidad» utilitzats per rastrejar.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['dazn-app-store'], note: 'Serveix per aplicar els drets de retransmissió per territori.' }),
    row('ubicacio-precisa', 'optional', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], level: 'official', sources: ['dazn-privacy-notice'], note: 'El diàleg de consentiment de galetes inclou la funció especial d’ubicació geogràfica precisa per a 56 socis.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'compliment-legal'], sources: ['dazn-privacy-notice'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['dazn-privacy-notice'], note: 'Consentiment gestionat amb el marc de transparència de l’IAB: 197 socis declarats.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['dazn-app-store'] }),
    row('contingut-de-missatges', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['dazn-app-store'], note: 'L’etiqueta no declara contingut de comunicacions privades.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['dazn-app-store'], 'L’App Store declara identificadors i dades de publicitat com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['dazn-app-store']),
    thirdPartyTrackersPresent: f('yes', 'official', ['dazn-privacy-notice'], 'El diàleg de consentiment enumera 197 socis del marc de transparència de l’IAB, amb vinculació de dispositius i combinació de dades de fonts externes.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['dazn-privacy-notice', 'dazn-app-store'], 'L’avís preveu publicitat adaptada a la plataforma i fora, amb els socis publicitaris.'),
    profiling: f('yes', 'official', ['dazn-privacy-notice'], 'L’avís descriu l’ús de dades per entendre millor les persones usuàries i oferir una experiència de contingut i publicitat personalitzada.'),
    aiTraining: unknown('L’avís de privadesa no diu si les dades s’utilitzen per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['dazn-privacy-notice'], 'Proveïdors de detecció de frau, socis publicitaris, titulars de drets i proveïdors de dades demogràfiques i d’interessos.'),
    intraGroupSharing: f('yes', 'official', ['dazn-privacy-notice'], 'L’avís és global i parla de transferències entre les entitats del grup DAZN.'),
    dataBrokerSales: unknown('L’avís no parla de venda de dades a intermediaris, però sí de combinar dades pròpies amb informació demogràfica i d’interessos obtinguda de tercers.'),
    internationalTransfers: f('yes', 'official', ['dazn-privacy-notice'], 'Decisions d’adequació, clàusules tipus i, per als Estats Units, el marc de transferència acordat.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No consta cap informe públic sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['dazn-privacy-notice'], 'S’indica un termini general de set anys des del fet que activa la conservació, però no un desglossament per categoria de dada.'),
    dataAfterDeletion: f('partial', 'official', ['dazn-privacy-notice'], 'Les dades es conserven mentre calgui per complir obligacions legals, auditories i polítiques internes.'),
    periods: [{ period: 'Set anys des del fet que activa la conservació, per a la major part de la informació', sources: ['dazn-privacy-notice'] }],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['dazn-privacy-notice'], 'L’avís reconeix el dret de supressió quan el tractament ja no és necessari.'),
    selfService: unknown('No hem trobat cap article d’ajuda públic que descrigui un botó d’eliminació del compte; el centre d’ajuda no es deixa llegir sense navegador.'),
    difficulty: 'unknown',
    steps: [
      'Cancel·la la subscripció des de La meva compta abans de demanar la supressió, perquè la baixa de pagament i la supressió del compte són coses diferents.',
      'Escriu a DPO@dazn.com invocant el dret de supressió de l’article 17 del RGPD.',
      'Guarda la confirmació; si no hi ha resposta en un mes, pots reclamar a l’Agència Espanyola de Protecció de Dades.',
    ],
    dataRetained: 'Dades de facturació i registres que DAZN conservi pels terminis legals, dins del marc general de set anys.',
    sources: ['dazn-privacy-notice'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['dazn-privacy-notice'], 'Es reconeix el dret a obtenir una còpia i a la portabilitat, però no hi ha una eina d’autoservei documentada.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['dazn-privacy-notice'], 'Canal del delegat de protecció de dades a DPO@dazn.com i llista de representants a la UE.', {
      url: 'mailto:DPO@dazn.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['dazn-privacy-notice'], 'El diàleg de galetes permet triar «Només galetes essencials» i oposar-se a les finalitats d’interès legítim, però s’ha de fer soci a soci per a 197 proveïdors.'),
    telemetryOptOut: unknown('No consta cap control per desactivar l’analítica d’ús dins de l’aplicació.'),
    granularControls: f('partial', 'official', ['dazn-privacy-notice'], 'Els controls existeixen dins del gestor de consentiment, no en un panell de privadesa del compte.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', [], 'Interpretació pròpia: el diàleg de galetes ofereix un botó «Acceptar» destacat i amaga la tria fina darrere de «Administrar preferències», amb 197 socis i finalitats d’interès legítim actives per defecte.'),
    darkPatternList: [
      {
        type: 'unbalanced-consent',
        severity: 'medium',
        description:
          'Acceptar-ho tot és un sol clic; refusar les finalitats d’interès legítim obliga a entrar a «Administrar preferències» i a revisar-les una per una.',
        sources: ['dazn-privacy-notice'],
      },
    ],
  },
  security: {
    e2ee: na('És un servei de difusió de vídeo: no transporta comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'editorial', [], 'Interpretació pròpia a partir de la navegació: el web i l’API de DAZN només responen per HTTPS.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat documentació pública sobre verificació en dos passos als comptes de DAZN.'),
    independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
    bugBounty: f('no', 'official', ['dazn-responsible-disclosure'], 'La política de divulgació responsable diu expressament que DAZN no ofereix recompenses econòmiques per les vulnerabilitats comunicades.'),
    vulnerabilityDisclosure: f('yes', 'official', ['dazn-responsible-disclosure', 'dazn-security-txt'], 'Política pública de divulgació responsable i fitxer security.txt amb el contacte security@dazn.com.', {
      url: 'https://www.dazn.com/es-ES/help/articles/responsible-disclosure',
    }),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El centre d’ajuda de DAZN està darrere d’una protecció que impedeix llegir els articles amb eines automàtiques; l’avís de privadesa s’ha consultat a la còpia arxivada del desembre del 2024, i el diàleg de galetes s’ha comprovat en directe. La troballa útil és el contrast entre un servei que es paga amb subscripció i una etiqueta de l’App Store que declara dades de publicitat per rastrejar.',
    openQuestions: [
      'DAZN permet eliminar el compte des de la configuració o cal passar pel delegat de protecció de dades?',
      'Ofereix verificació en dos passos per als comptes?',
    ],
  },
}

/* ═══════════════════════════ DAZN Bet ═══════════════════════════ */
const daznBet: AppSeed = {
  slug: 'dazn-bet',
  name: 'DAZN Bet',
  company: 'dzbt-deportes',
  categories: ['apostes'],
  tagline: 'Casa d’apostes que exigeix DNI i selfie del document i només deixa tancar el compte pel xat',
  summary:
    'DAZN Bet és la marca d’apostes associada a DAZN i l’explota a Espanya DZBT Deportes, S.A.U., amb domicili a Ceuta. El registre obliga a identificar-se amb el DNI o el NIE i, en passar dels 150 € dipositats o en demanar la primera retirada, a fotografiar el document per les dues cares. L’etiqueta de l’App Store declara adreça física, dades de pagament, fotos i missatges vinculats al compte. Per tancar el compte, en canvi, no hi ha cap botó: cal demanar-ho pel xat d’atenció al client.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.daznbet.es/',
    privacyPolicy: 'https://www.daznbet.es/es/page/politica-de-privacidad',
    appStore: appStore('1672207635'),
  },
  accountRequired: f('yes', 'official', ['dazn-bet-help-verification', 'dazn-bet-help-operator'], 'El joc en línia a Espanya exigeix registre i verificació d’identitat amb DNI o NIE davant de l’operadora DZBT Deportes, S.A.U.'),
  openSource: f('no', 'official', ['dazn-bet-app-store'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Un historial d’apostes és una de les dades més sensibles que es poden acumular: diu quant es juga, amb quina freqüència, a quines hores i amb quins diners. Aquí va lligat al document d’identitat, a la imatge del DNI i als moviments de pagament, i el sector té obligacions específiques de conservació i de comunicació amb el regulador.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['dazn-bet-app-store', 'dazn-bet-help-verification'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['dazn-bet-help-verification'], note: 'Cal fotografiar l’anvers i el revers del DNI o NIE amb la càmera del mòbil.' }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['dazn-bet-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['dazn-bet-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['dazn-bet-app-store'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['dazn-bet-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['dazn-bet-app-store'], note: 'Inclou dipòsits, retirades i l’historial de joc, que l’operador ha de poder acreditar davant del regulador.' }),
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['dazn-bet-app-store', 'dazn-bet-help-verification'] }),
    row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['dazn-bet-app-store'], note: 'L’etiqueta declara correus o missatges de text i les converses d’atenció al client.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal'], sources: ['dazn-bet-app-store'], note: 'El joc en línia només es pot oferir a persones que hi juguin des d’Espanya.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['dazn-bet-app-store'], note: 'L’identificador d’usuari és l’única dada declarada com a utilitzada per rastrejar.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['dazn-bet-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['dazn-bet-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['dazn-bet-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['dazn-bet-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['dazn-bet-app-store'], 'L’etiqueta declara l’identificador d’usuari com a dada utilitzada per rastrejar.'),
    advertisingIdentifiers: unknown('L’etiqueta no declara l’identificador publicitari del dispositiu.'),
    thirdPartyTrackersPresent: unknown('No hem pogut llegir la política de privadesa ni la de galetes: el web es carrega íntegrament amb JavaScript i no serveix el text als lectors automàtics.'),
  },
  dataUses: {
    targetedAdvertising: unknown('El Reial decret 958/2020 limita la publicitat del joc, però no hem pogut llegir la política per saber quin ús publicitari es fa de les dades.'),
    profiling: unknown('No hem pogut llegir la política; el sector sí que té obligacions de detecció de joc problemàtic.'),
    aiTraining: unknown('Sense font.'),
  },
  sharing: {
    thirdPartySharing: unknown('Sense accés a la política, no podem documentar amb qui es comparteixen les dades més enllà dels proveïdors de verificació i pagament.'),
    intraGroupSharing: unknown('No consta la relació societària entre DZBT Deportes i el grup DAZN.'),
    dataBrokerSales: unknown('Sense font.'),
    internationalTransfers: unknown('Sense font.'),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: unknown('No hem pogut llegir els terminis de conservació; la normativa de joc n’imposa de propis.'),
    dataAfterDeletion: unknown('Sense font.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['dazn-bet-help-close-account'], 'El centre d’ajuda confirma que es pot tancar el compte en qualsevol moment.'),
    selfService: f('no', 'official', ['dazn-bet-help-close-account'], 'No hi ha cap opció de tancament dins del compte: cal contactar amb atenció al client pel xat.'),
    directUrl: 'https://ayuda.daznbet.es/hc/es/articles/6675455591197',
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Obre el xat d’atenció al client de DAZN Bet i demana el tancament del compte.',
      'Si el motiu és el joc problemàtic, demana l’autoexclusió, de sis mesos a cinc anys, que no es pot revocar mentre dura.',
      'Per a una exclusió que abasti tots els operadors amb llicència a Espanya, inscriu-te al Registre General d’Interdiccions d’Accés al Joc de la Direcció General d’Ordenació del Joc.',
      'Per esborrar les dades personals, i no només tancar el compte, exerceix el dret de supressió davant de DZBT Deportes, S.A.U.',
    ],
    obstacles:
      'Tancar el compte depèn d’un agent del xat, i la reobertura també. La normativa de joc obliga a conservar part de la informació encara que el compte es tanqui.',
    dataRetained: 'La normativa de joc i la de prevenció del blanqueig imposen terminis de conservació propis que no hem pogut documentar.',
    sources: ['dazn-bet-help-close-account', 'dazn-bet-help-self-exclusion'],
  },
  userRights: {
    dataExport: unknown('No consta cap eina d’exportació; el centre d’ajuda sí que ofereix un resum anual d’activitat de joc.'),
    exportFormatQuality: 'unknown',
    rightsExercise: unknown('No hem pogut llegir la política per identificar el canal de protecció de dades ni el delegat.'),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['dazn-bet-help-marketing'], 'Les preferències de comunicació del compte permeten deixar de rebre correus i SMS promocionals, però no equivalen a una oposició al perfilat.'),
    telemetryOptOut: unknown('Sense font.'),
    granularControls: f('partial', 'official', ['dazn-bet-help-self-exclusion', 'dazn-bet-help-marketing'], 'Hi ha eines de joc segur ben documentades (límits de dipòsit, de pèrdua i d’aposta, pauses i autoexclusió), però no un panell de privadesa.'),
    defaultPosture: 'unknown',
    darkPatterns: f('yes', 'editorial', ['dazn-bet-help-close-account'], 'Interpretació pròpia: la sortida existeix però passa obligatòriament per una conversa amb un agent que pot oferir alternatives per retenir-te, i l’article de tancament del compte ja proposa suggeriments i eines abans de la baixa.'),
    darkPatternList: [
      {
        type: 'hidden-exit',
        severity: 'high',
        description: 'No hi ha cap botó per tancar el compte: només es pot demanar pel xat d’atenció al client.',
        sources: ['dazn-bet-help-close-account'],
      },
    ],
  },
  security: {
    e2ee: na('No transporta comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'editorial', [], 'Interpretació pròpia a partir de la navegació: el web només respon per HTTPS.'),
    atRestEncryption: unknown('Sense font.'),
    mfa: unknown('No hem trobat documentació sobre verificació en dos passos.'),
    independentAudits: unknown('Sense font pública; la llicència de joc sí que comporta homologació tècnica davant del regulador.'),
    bugBounty: unknown('No hi ha fitxer security.txt ni programa públic conegut.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt a daznbet.es ni cap política publicada.'),
  },
  review: {
    researchStatus: 'initial',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política de privadesa de daznbet.es és una aplicació d’una sola pàgina que no serveix el text a cap lector automàtic, i el centre d’ajuda està protegit contra l’accés automatitzat; la fitxa s’ha construït amb l’etiqueta de l’App Store i amb els articles d’ajuda recuperats. Val la pena deixar constància que l’aplicació es publica a l’App Store sota el nom de desenvolupador «dzbt-es-stage», que sembla un compte d’entorn de proves.',
    openQuestions: [
      'Quins terminis de conservació aplica DZBT Deportes i quines dades cedeix a la Direcció General d’Ordenació del Joc?',
      'Quina és la relació societària entre DZBT Deportes, S.A.U. i el grup DAZN?',
      'Hi ha verificació en dos passos per als comptes?',
    ],
  },
}

/* ═══════════════════════ Adobe Acrobat Reader ═══════════════════════ */
const acrobatReader: AppSeed = {
  slug: 'adobe-acrobat-reader',
  name: 'Adobe Acrobat Reader',
  company: 'adobe-ireland',
  categories: ['ofimatica-i-productivitat'],
  tagline: 'Lector de PDF que demana contactes i historial de cerca i declara identificadors utilitzats per rastrejar',
  summary:
    'Acrobat Reader és la manera més comuna d’obrir un PDF al mòbil, i cada document que s’hi obre pot ser una nòmina, un informe mèdic o un contracte. L’etiqueta de l’App Store declara contactes, contingut, historial de cerca i historial de compres vinculats al compte, i identificador d’usuari i de dispositiu utilitzats per rastrejar. Adobe analitza el contingut emmagatzemat al núvol amb aprenentatge automàtic per millorar els serveis, amb una exclusió que s’ha d’activar a mà.',
  platforms: ['ios', 'android', 'web', 'windows', 'macos'],
  businessModel: 'freemium',
  jurisdiction: 'Irlanda',
  userBase: 'Centenars de milions d’instal·lacions; és el lector de PDF de referència',
  links: {
    website: 'https://www.adobe.com/es/acrobat/mobile/acrobat-reader.html',
    privacyPolicy: 'https://www.adobe.com/privacy/policy.html',
    privacyCenter: 'https://www.adobe.com/privacy/opt-out.html',
    appStore: appStore('469337564'),
  },
  accountRequired: f('partial', 'official', ['adobe-acrobat-app-store'], 'Es poden obrir documents locals sense compte, però signar, emmagatzemar al núvol o fer servir les funcions de conversió demana un Adobe ID.'),
  openSource: f('no', 'official', ['adobe-acrobat-app-store'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'El que revela aquesta aplicació no és tant el perfil publicitari com el contingut: els documents que obres, signes i emmagatzemes. Sumat a l’historial de cerca dins dels documents i a la llista de contactes amb qui els comparteixes, dibuixa la vida administrativa i laboral d’una persona.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['adobe-acrobat-app-store'], note: 'L’etiqueta el declara també per a publicitat i màrqueting del desenvolupador.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['adobe-acrobat-app-store'] }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['adobe-acrobat-app-store'], note: 'Declarada per al funcionament de l’aplicació, presumiblement per compartir documents i demanar signatures.' }),
    row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['adobe-acrobat-app-store', 'adobe-privacy-policy'], note: 'Els documents desats al núvol d’Adobe s’analitzen amb tècniques automatitzades per detectar contingut il·lícit i per millorar els serveis.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['adobe-acrobat-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['adobe-acrobat-app-store'] }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['adobe-privacy-policy'], note: 'Només si es contracta una subscripció.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['adobe-acrobat-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['adobe-acrobat-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['adobe-acrobat-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['adobe-acrobat-app-store'] }),
    row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['adobe-privacy-policy'] }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['adobe-privacy-policy'], note: 'La política global preveu identificadors biomètrics, com els patrons facials, en funcions concretes d’Adobe; no consta que Acrobat Reader en faci servir.' }),
    row('contingut-de-missatges', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['adobe-acrobat-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['adobe-acrobat-app-store'], 'L’identificador d’usuari i el de dispositiu es declaren com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['adobe-acrobat-app-store']),
    thirdPartyTrackersPresent: f('yes', 'official', ['adobe-privacy-policy'], 'La política preveu compartir informació amb socis publicitaris i xarxes socials per a publicitat dirigida.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['adobe-privacy-policy', 'adobe-privacy-choices'], 'Adobe fa publicitat basada en interessos i remet l’exclusió a les iniciatives sectorials DAA i EDAA.', {
      optOutUrl: 'https://www.adobe.com/privacy/opt-out.html',
    }),
    profiling: f('yes', 'official', ['adobe-privacy-policy'], 'La política descriu l’ús de dades d’ús i demogràfiques per personalitzar el producte i les comunicacions.'),
    aiTraining: f('partial', 'official', ['adobe-privacy-policy', 'adobe-privacy-choices'], 'Adobe analitza el contingut allotjat amb aprenentatge automàtic per millorar els serveis i ofereix una exclusió explícita, que s’ha d’activar compte per compte.', {
      optOutUrl: 'https://www.adobe.com/privacy/opt-out.html',
    }),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['adobe-privacy-policy'], 'Filials, distribuïdors, socis publicitaris, processadors de pagament i proveïdors d’atenció al client.'),
    intraGroupSharing: f('yes', 'official', ['adobe-privacy-policy'], 'Compartició entre les entitats del grup Adobe.'),
    dataBrokerSales: unknown('La política no descriu la venda de dades a intermediaris, però sí la compartició amb plataformes socials per a publicitat dirigida.'),
    internationalTransfers: f('yes', 'official', ['adobe-privacy-policy'], 'Transferències als Estats Units i a l’Índia principalment, emparades en el marc de privadesa de dades UE-EUA i en garanties contractuals.', {
      mechanism: 'adequacy',
    }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: f('yes', 'official', ['adobe-transparency-center'], 'Adobe publica informes sobre peticions governamentals i les directrius per a les autoritats al seu centre de transparència.', {
      url: 'https://www.adobe.com/trust/transparency.html',
    }),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['adobe-privacy-policy'], 'Les dades es conserven mentre el compte és actiu; la informació de transaccions comercials, fins a deu anys des de l’última interacció.'),
    dataAfterDeletion: f('partial', 'official', ['adobe-privacy-policy'], 'La informació de facturació i transaccions sobreviu al tancament del compte durant el termini de deu anys.'),
    periods: [{ dataType: 'historial-de-compres', period: 'Deu anys des de l’última interacció comercial', sources: ['adobe-privacy-policy'] }],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['adobe-privacy-policy'], 'La política reconeix el dret de supressió i la desactivació de l’Adobe ID a través del formulari de privadesa.'),
    selfService: unknown('Les pàgines d’ajuda d’Adobe sobre l’eliminació del compte bloquegen l’accés automatitzat i no hem pogut verificar el camí exacte dins del compte.'),
    difficulty: 'unknown',
    steps: [
      'Cancel·la abans qualsevol subscripció activa: Adobe no tanca comptes amb pagaments pendents.',
      'Descarrega els documents desats al núvol d’Adobe, perquè s’esborren amb el compte.',
      'Envia la sol·licitud de supressió amb el formulari de consultes de privadesa d’Adobe o escriu a DPO@adobe.com.',
    ],
    dataRetained: 'Informació de transaccions comercials durant deu anys des de l’última interacció.',
    sources: ['adobe-privacy-policy'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['adobe-privacy-policy'], 'El formulari de consultes de privadesa permet demanar l’accés i la portabilitat de les dades.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['adobe-privacy-policy'], 'Formulari de privadesa i delegat de protecció de dades a DPO@adobe.com.', {
      url: 'mailto:DPO@adobe.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['adobe-privacy-choices'], 'L’exclusió de la publicitat basada en interessos es delega a les eines sectorials (DAA, EDAA, AppChoices), no a un interruptor del compte.', {
      url: 'https://www.adobe.com/privacy/opt-out.html',
    }),
    telemetryOptOut: f('yes', 'official', ['adobe-privacy-choices'], 'Les dades d’ús de les aplicacions d’escriptori es poden desactivar a les preferències de cada aplicació.'),
    granularControls: f('partial', 'official', ['adobe-privacy-choices'], 'Hi ha controls per a publicitat, anàlisi de contingut i dades d’ús, però estan repartits i s’han de repetir aplicació per aplicació.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', ['adobe-privacy-choices'], 'Interpretació pròpia: l’anàlisi automatitzada del contingut i la publicitat basada en interessos estan actives per defecte i l’exclusió s’ha de repetir per a cada aplicació i servei.'),
    darkPatternList: [
      {
        type: 'preselected',
        severity: 'medium',
        description: 'L’anàlisi del contingut amb aprenentatge automàtic està activada per defecte i cal desactivar-la manualment des de la pàgina de preferències.',
        sources: ['adobe-privacy-choices'],
      },
    ],
  },
  security: {
    e2ee: f('no', 'official', ['adobe-privacy-policy'], 'Adobe analitza el contingut allotjat al núvol per detectar material il·lícit, cosa que exclou el xifratge d’extrem a extrem.'),
    transportEncryption: f('yes', 'editorial', [], 'Interpretació pròpia a partir de la navegació: els serveis d’Adobe només responen per HTTPS.'),
    atRestEncryption: unknown('No hem pogut verificar en una pàgina pública llegible el xifratge en repòs del Document Cloud.'),
    mfa: unknown('No hem pogut llegir la pàgina d’ajuda sobre la seguretat del compte per documentar la verificació en dos passos.'),
    independentAudits: unknown('El centre de confiança parla de controls i certificacions del sector, però la pàgina consultada no en concreta cap.'),
    bugBounty: f('yes', 'official', ['adobe-security-txt'], 'El fitxer security.txt remet al programa públic d’Adobe a la plataforma Intigriti.', {
      url: 'https://app.intigriti.com/programs/adobe/adobepublic/detail',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['adobe-security-txt'], 'Contacte psirt@adobe.com i política publicada, signats amb PGP al fitxer security.txt.'),
  },
  alternatives: [
    { app: 'adobe-scan', comparability: 'complementary', rationale: 'És l’escàner del mateix ecosistema: si ja hi tens l’Adobe ID, les dades no es multipliquen.', tradeOffs: 'Comparteix responsable, política i etiqueta de rastreig.' },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Les pàgines d’ajuda d’Adobe (helpx.adobe.com) responen amb un bloqueig d’accés als lectors automàtics, i això limita el que podem verificar sobre l’eliminació del compte i la verificació en dos passos. La política global i la pàgina de preferències, en canvi, són llegibles i donen el gruix de la fitxa.',
    openQuestions: [
      'Hi ha un camí d’autoservei dins del compte d’Adobe per eliminar-lo, i quant triga a fer-se efectiu?',
      'Quins mètodes de verificació en dos passos admet l’Adobe ID?',
    ],
  },
}

/* ═══════════════════════════ Adobe Scan ═══════════════════════════ */
const adobeScan: AppSeed = {
  slug: 'adobe-scan',
  name: 'Adobe Scan',
  company: 'adobe-ireland',
  categories: ['ofimatica-i-productivitat', 'utilitats'],
  tagline: 'Escàner de documents que converteix el DNI o la factura en text al núvol i declara identificadors per a publicitat de tercers',
  summary:
    'Adobe Scan fotografia documents i els converteix en PDF amb reconeixement de text. A diferència d’escàners que treballen al dispositiu, el processament passa pel núvol d’Adobe i el contingut queda sota la mateixa política que analitza el material emmagatzemat amb aprenentatge automàtic. L’etiqueta de l’App Store és més agressiva que la d’Acrobat Reader en un punt concret: declara identificadors vinculats al compte per a publicitat de tercers.',
  platforms: ['ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Irlanda',
  links: {
    website: 'https://www.adobe.com/es/acrobat/mobile/scanner-app.html',
    privacyPolicy: 'https://www.adobe.com/privacy/policy.html',
    privacyCenter: 'https://www.adobe.com/privacy/opt-out.html',
    appStore: appStore('1199564834'),
  },
  accountRequired: f('yes', 'official', ['adobe-scan-app-store'], 'L’aplicació desa els escanejos al núvol d’Adobe i demana iniciar sessió amb un Adobe ID.'),
  openSource: f('no', 'official', ['adobe-scan-app-store'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'La gent escaneja allò que ha de tramitar: documents d’identitat, receptes, nòmines, contractes de lloguer. Amb reconeixement de text al núvol, aquest contingut deixa de ser una imatge al mòbil i es converteix en text indexable en servidors d’un tercer.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['adobe-scan-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['adobe-scan-app-store'] }),
    row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['adobe-scan-app-store', 'adobe-privacy-policy'], note: 'Els escanejos es desen al Document Cloud i queden sotmesos a l’anàlisi automatitzada del contingut descrita a la política.' }),
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['adobe-scan-app-store'], note: 'L’etiqueta ho declara com a «otro contenido del usuario»: la captura de la càmera és la matèria primera de l’aplicació.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['adobe-scan-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['adobe-scan-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['adobe-scan-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['adobe-scan-app-store'], note: 'Declarat explícitament per a publicitat de tercers, cosa que no passa a Acrobat Reader.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['adobe-scan-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['adobe-scan-app-store'] }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], level: 'editorial', sources: [], note: 'Interpretació pròpia: Adobe no demana el document d’identitat, però escanejar-lo és un dels usos habituals de l’aplicació i el text reconegut acaba al núvol.' }),
    row('llista-de-contactes', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['adobe-scan-app-store'], note: 'A diferència d’Acrobat Reader, l’etiqueta d’Adobe Scan no declara contactes.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['adobe-scan-app-store'], 'Identificador d’usuari i de dispositiu declarats com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['adobe-scan-app-store']),
    thirdPartyTrackersPresent: f('yes', 'official', ['adobe-scan-app-store'], 'L’etiqueta declara identificadors vinculats al compte per a «publicidad de terceros».'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['adobe-scan-app-store', 'adobe-privacy-choices'], 'Publicitat de tercers declarada a l’etiqueta i publicitat basada en interessos descrita a la política.', {
      optOutUrl: 'https://www.adobe.com/privacy/opt-out.html',
    }),
    profiling: f('yes', 'official', ['adobe-privacy-policy'], 'Personalització del producte i de les comunicacions a partir de les dades d’ús.'),
    aiTraining: f('partial', 'official', ['adobe-privacy-policy', 'adobe-privacy-choices'], 'L’anàlisi del contingut amb aprenentatge automàtic per millorar els serveis s’aplica també als documents escanejats, amb exclusió disponible.', {
      optOutUrl: 'https://www.adobe.com/privacy/opt-out.html',
    }),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['adobe-privacy-policy', 'adobe-scan-app-store'], 'Socis publicitaris, proveïdors tecnològics i plataformes socials.'),
    intraGroupSharing: f('yes', 'official', ['adobe-privacy-policy']),
    dataBrokerSales: unknown('Sense evidència de venda de dades a intermediaris.'),
    internationalTransfers: f('yes', 'official', ['adobe-privacy-policy'], 'Transferències als Estats Units i a l’Índia sota el marc de privadesa de dades UE-EUA i garanties contractuals.', {
      mechanism: 'adequacy',
    }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: f('yes', 'official', ['adobe-transparency-center'], 'Mateix centre de transparència que la resta de productes d’Adobe.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['adobe-privacy-policy'], 'Conservació mentre el compte és actiu i deu anys per a la informació de transaccions comercials; els escanejos es conserven fins que la persona els esborra.'),
    dataAfterDeletion: f('partial', 'official', ['adobe-privacy-policy'], 'La informació comercial sobreviu al tancament del compte durant els terminis legals.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['adobe-privacy-policy'], 'El compte és el mateix Adobe ID d’Acrobat Reader i se li apliquen les mateixes vies de supressió.'),
    selfService: unknown('No hem pogut verificar el camí exacte d’eliminació dins del compte perquè les pàgines d’ajuda d’Adobe bloquegen l’accés automatitzat.'),
    difficulty: 'unknown',
    steps: [
      'Descarrega o exporta els escanejos que vulguis conservar: s’esborren amb el compte.',
      'Cancel·la les subscripcions actives d’Adobe.',
      'Demana la supressió amb el formulari de consultes de privadesa d’Adobe o a DPO@adobe.com.',
    ],
    sources: ['adobe-privacy-policy'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['adobe-privacy-policy'], 'Accés i portabilitat a través del formulari de privadesa.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['adobe-privacy-policy'], 'Formulari de privadesa i DPO@adobe.com.', { url: 'mailto:DPO@adobe.com', responseTimeDays: 30 }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['adobe-privacy-choices'], 'Exclusió delegada a les eines sectorials DAA i EDAA.'),
    telemetryOptOut: unknown('La pàgina de preferències documenta la desactivació de les dades d’ús a les aplicacions d’escriptori, no a les mòbils.'),
    granularControls: f('partial', 'official', ['adobe-privacy-choices'], 'Els controls són els generals del compte d’Adobe, no específics de l’escàner.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', ['adobe-scan-app-store'], 'Interpretació pròpia: una aplicació per digitalitzar documents personals declara identificadors per a publicitat de tercers, un ús que la persona no espera en aquest context.'),
  },
  security: {
    e2ee: f('no', 'official', ['adobe-privacy-policy'], 'El reconeixement de text i l’anàlisi del contingut al núvol exclouen el xifratge d’extrem a extrem.'),
    transportEncryption: f('yes', 'editorial', [], 'Interpretació pròpia a partir de la navegació: els serveis d’Adobe només responen per HTTPS.'),
    atRestEncryption: unknown('Sense font pública llegible.'),
    mfa: unknown('Sense font pública llegible.'),
    independentAudits: unknown('Sense font pública concreta.'),
    bugBounty: f('yes', 'official', ['adobe-security-txt'], 'Programa públic d’Adobe a Intigriti.'),
    vulnerabilityDisclosure: f('yes', 'official', ['adobe-security-txt'], 'Contacte psirt@adobe.com al fitxer security.txt.'),
  },
  alternatives: [
    { app: 'adobe-acrobat-reader', comparability: 'complementary', rationale: 'Acrobat Reader també escaneja i evita instal·lar una segona aplicació amb la seva pròpia etiqueta de rastreig.', tradeOffs: 'El reconeixement de text i l’organització de documents són més limitats.' },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La comparació entre les dues etiquetes d’Adobe és la troballa de la fitxa: mateixa política i mateix responsable, però Adobe Scan declara identificadors vinculats al compte per a publicitat de tercers i Acrobat Reader no.',
    openQuestions: ['Adobe Scan processa el reconeixement de text al dispositiu o sempre al núvol?'],
  },
}

/* ═══════════════════════════ Learna AI ═══════════════════════════ */
const learnaAi: AppSeed = {
  slug: 'learna-ai',
  name: 'Learna AI',
  company: 'deep-flow-software-services',
  categories: ['educacio', 'assistents-d-ia'],
  tagline: 'Tutor d’anglès amb IA responsabilitat d’una societat de zona franca de Dubai, amb la veu i les converses com a matèria primera',
  summary:
    'Learna AI fa practicar anglès conversant amb un model de llenguatge, i per fer-ho recull les indicacions escrites, les imatges i els enregistraments de veu que s’hi envien. El responsable del tractament no és cap societat europea sinó Deep Flow Software Services - FZCO, de Dubai, tot i que les sol·licituds s’atenen des d’una adreça del domini de l’estudi turc Codeway. L’etiqueta de l’App Store declara dades de publicitat utilitzades per rastrejar i, alhora, no vincula res al compte.',
  platforms: ['ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Emirats Àrabs Units',
  links: {
    website: 'https://learna-ai.co/',
    privacyPolicy: 'https://static.ai-learning-app.com/privacy-policy-en.html',
    appStore: appStore('6478287397'),
  },
  accountRequired: f('partial', 'official', ['learna-privacy-policy'], 'La política parla del perfil o de la informació de xarxes socials «si tries crear un compte»: el compte no és imprescindible per començar.'),
  openSource: f('no', 'official', ['learna-app-store'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Practicar un idioma amb una IA vol dir enviar-li la pròpia veu i el que s’explica en veu alta. Les indicacions i els enregistraments són contingut personal, i la política els enumera sense donar terminis de conservació concrets ni dir on es processen.',
  dataCollection: [
    row('nom-i-cognoms', 'optional', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['learna-privacy-policy', 'learna-app-store'] }),
    row('adreca-electronica', 'optional', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['learna-privacy-policy', 'learna-app-store'] }),
    row('numero-de-telefon', 'optional', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari'], sources: ['learna-privacy-policy'], note: 'Només si contactes amb l’empresa.' }),
    row('veu-i-audio', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['learna-privacy-policy', 'learna-app-store'], note: 'La política enumera els enregistraments de veu entre les dades tractades.' }),
    row('fotografies-i-videos', 'optional', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['learna-privacy-policy', 'learna-app-store'] }),
    row('contingut-de-missatges', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['learna-privacy-policy'], note: 'Les indicacions, els missatges i el text que s’envien al tutor.' }),
    row('historial-de-compres', 'optional', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['learna-privacy-policy'] }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['learna-privacy-policy'] }),
    row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['learna-privacy-policy', 'learna-app-store'], note: 'IDFA, IDFV i identificador de Firebase, compartits amb Google, Apple, Facebook SDK i Adjust.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['learna-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['learna-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['learna-app-store'] }),
    row('dades-de-salut', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['learna-privacy-policy'], note: 'La política afirma que no es tracten categories especials de dades i demana que no se n’enviïn.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['learna-app-store'], 'L’etiqueta declara les dades de publicitat com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['learna-privacy-policy'], 'IDFA, IDFV i identificador publicitari de Google, amb permís de la persona usuària.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['learna-privacy-policy'], 'Google, Apple, Facebook SDK, Adjust i Firebase Analytics van incrustats al servei.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['learna-privacy-policy'], 'Les dades de màrqueting es comparteixen amb els proveïdors esmentats per fer publicitat, també personalitzada, i el consentiment es pot retirar.'),
    profiling: f('partial', 'official', ['learna-privacy-policy'], 'La personalització descrita és de l’experiència d’aprenentatge i de les campanyes de màrqueting; no es descriu un perfilat amb efectes jurídics.'),
    aiTraining: unknown('La política no diu si les converses, les imatges i els enregistraments de veu s’utilitzen per entrenar o afinar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['learna-privacy-policy'], 'Proveïdors de serveis, socis comercials i autoritats, i dades de màrqueting a Google, Apple, Facebook SDK, Adjust i Firebase.'),
    intraGroupSharing: unknown('La política no descriu la relació amb altres societats del grup ni què comparteixen entre elles.'),
    dataBrokerSales: unknown('Sense evidència de venda a intermediaris; la secció per a Califòrnia adverteix que l’ús d’eines publicitàries es pot considerar una «venda» o «compartició».'),
    internationalTransfers: f('yes', 'official', ['learna-privacy-policy'], 'La secció per a l’EEE preveu clàusules contractuals tipus, decisions d’adequació i avaluacions d’impacte de la transferència.', {
      mechanism: 'sccs',
    }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['learna-privacy-policy'], 'La política parla de conservar les dades el temps necessari i d’esborrar-les o anonimitzar-les quan la finalitat desapareix, sense terminis concrets per categoria.'),
    dataAfterDeletion: unknown('No es descriu què es conserva després d’esborrar el compte.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['learna-privacy-policy'], 'La secció per a l’EEE reconeix el dret de supressió de l’article 17 del RGPD.'),
    selfService: unknown('La política no descriu cap camí d’eliminació dins de l’aplicació; remet al contacte per correu.'),
    difficulty: 'medium',
    steps: [
      'Cancel·la la subscripció des dels ajustos de l’App Store: la baixa del pagament no esborra les dades.',
      'Escriu a learna@codeway.co demanant la supressió de les dades a l’empara de l’article 17 del RGPD.',
      'Si no hi ha resposta en un mes, pots dirigir-te a l’Agència Espanyola de Protecció de Dades, encara que el responsable estigui domiciliat fora de la UE.',
    ],
    obstacles: 'El responsable del tractament és una societat dels Emirats Àrabs Units i la política no designa cap representant a la UE.',
    sources: ['learna-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['learna-privacy-policy'], 'La secció per a l’EEE reconeix la portabilitat, però no hi ha cap eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['learna-privacy-policy'], 'Els drets s’exerceixen escrivint a learna@codeway.co o per correu postal a Dubai; no consta cap delegat de protecció de dades ni representant a la UE.', {
      url: 'mailto:learna@codeway.co',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['learna-privacy-policy'], 'El consentiment per a la publicitat personalitzada es pot retirar, però la via és escriure a l’empresa o canviar els permisos del sistema.'),
    telemetryOptOut: unknown('No consta cap control per desactivar l’analítica dins de l’aplicació.'),
    granularControls: f('no', 'official', ['learna-privacy-policy'], 'No hi ha cap panell de privadesa amb controls per finalitat.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', ['learna-privacy-policy'], 'Interpretació pròpia: la política està redactada sobre la llei turca de protecció de dades amb un afegit per a l’EEE, cosa que obliga a llegir-ne vint pàgines per saber quins drets s’apliquen aquí.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description:
          'El cos de la política respon a la llei turca i remet a una secció final per a les persones de l’EEE, amb dues explicacions paral·leles del mateix tractament.',
        sources: ['learna-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: f('no', 'official', ['learna-privacy-policy'], 'El contingut s’envia a servidors i a proveïdors de models per generar les respostes.'),
    transportEncryption: f('yes', 'official', ['learna-privacy-policy'], 'La política descriu l’ús de mètodes criptogràfics i de canals xifrats per a la informació sensible.'),
    atRestEncryption: f('partial', 'official', ['learna-privacy-policy'], 'La política diu que les dades s’emmagatzemen amb mètodes criptogràfics, sense concretar-ne l’abast.'),
    mfa: unknown('No consta verificació en dos passos.'),
    independentAudits: unknown('No consten auditories independents.'),
    bugBounty: unknown('No hi ha fitxer security.txt ni programa conegut.'),
    vulnerabilityDisclosure: unknown('No hi ha cap canal públic documentat per comunicar vulnerabilitats.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Val la pena remarcar la distància entre qui apareix a la botiga i qui respon legalment: l’App Store mostra «DEEP FLOW SOFTWARE SERVICES», la política nomena Deep Flow Software Services - FZCO de Dubai i el correu de contacte és del domini codeway.co, l’estudi turc que publica Cleanup amb el mateix compte de desenvolupador.',
    openQuestions: [
      'Les converses i els enregistraments de veu s’utilitzen per entrenar o afinar models?',
      'Qui és el representant a la UE previst a l’article 27 del RGPD?',
    ],
  },
}

/* ═══════════════════════════ Cleanup ═══════════════════════════ */
const cleanup: AppSeed = {
  slug: 'cleanup',
  name: 'Cleanup',
  company: 'codeway',
  categories: ['utilitats'],
  tagline: 'Netejador de fotos que promet no pujar cap imatge i, alhora, declara compres i interacció utilitzades per rastrejar',
  summary:
    'Cleanup busca fotos duplicades i vídeos pesants per alliberar espai. La política de Codeway és explícita en un punt que importa molt en aquesta categoria: ni les fotos, ni els vídeos, ni la llista de contactes s’emmagatzemen als seus servidors, perquè el processament es fa al dispositiu. El contrapès és l’etiqueta de l’App Store, on l’historial de compres, els identificadors i la interacció amb el producte figuren com a dades utilitzades per rastrejar.',
  platforms: ['ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Turquia',
  links: {
    website: 'https://cleanup.photos/',
    privacyPolicy: 'https://cleanup.photos/privacy',
    appStore: appStore('1510944943'),
  },
  accountRequired: f('partial', 'official', ['cleanup-privacy-policy'], 'L’aplicació funciona sense registre; la política només tracta el correu si es contacta amb l’empresa o es crea un compte.'),
  openSource: f('no', 'official', ['cleanup-app-store'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Una aplicació que llegeix tota la galeria i la llista de contactes té accés a allò més íntim del telèfon. Aquí la garantia no és tècnica ni verificable per fora, sinó una afirmació de la política: que aquest contingut no surt del dispositiu.',
  dataCollection: [
    row('fotografies-i-videos', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['cleanup-privacy-policy'], note: 'La política afirma que el processament es fa al dispositiu o al núvol propi de la persona i que no se’n desa cap còpia als servidors de Codeway.' }),
    row('llista-de-contactes', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['cleanup-privacy-policy'], note: 'El permís es pot denegar; la política diu que la llista no s’emmagatzema.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari', 'publicitat-personalitzada'], sources: ['cleanup-app-store', 'cleanup-privacy-policy'] }),
    row('historial-de-compres', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['cleanup-app-store'], note: 'Declarat com a dada utilitzada per rastrejar.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['cleanup-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['cleanup-app-store'] }),
    row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['cleanup-privacy-policy'], note: 'Compartit amb Google, Apple, Facebook SDK, Adjust i Firebase per a màrqueting i publicitat personalitzada.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['cleanup-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['cleanup-privacy-policy'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['cleanup-privacy-policy'], note: 'Zona general deduïda de l’adreça IP.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['cleanup-app-store'] }),
    row('fitxers-i-documents', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['cleanup-privacy-policy'], note: 'Materials i fitxers als quals s’accedeix per netejar l’emmagatzematge, sense pujada als servidors.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['cleanup-app-store'], 'Historial de compres, identificadors i interacció amb el producte declarats com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['cleanup-privacy-policy']),
    thirdPartyTrackersPresent: f('yes', 'official', ['cleanup-privacy-policy'], 'Google, Apple, Facebook SDK, Adjust i Firebase Analytics incrustats a l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['cleanup-privacy-policy'], 'Les dades de màrqueting es comparteixen per fer publicitat, també personalitzada, amb consentiment retirable.'),
    profiling: f('partial', 'official', ['cleanup-privacy-policy'], 'El perfilat descrit és de màrqueting i millora de l’experiència, no de decisions amb efectes jurídics.'),
    aiTraining: unknown('La política no parla d’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['cleanup-privacy-policy'], 'Proveïdors de serveis i socis de màrqueting i analítica; el contingut de la galeria, segons la política, no s’hi inclou.'),
    intraGroupSharing: unknown('No es descriu la compartició amb altres societats del grup.'),
    dataBrokerSales: unknown('Sense evidència de venda a intermediaris.'),
    internationalTransfers: f('yes', 'official', ['cleanup-privacy-policy'], 'Transferències fora de l’EEE amb decisions d’adequació, clàusules tipus i mesures complementàries, segons la secció europea.', {
      mechanism: 'sccs',
    }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['cleanup-privacy-policy'], 'La política fixa criteris generals i remet a l’esborrat o l’anonimització quan la finalitat s’exhaureix, sense terminis per categoria.'),
    dataAfterDeletion: unknown('No es descriu què es conserva quan es deixa de fer servir l’aplicació.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['cleanup-privacy-policy'], 'La secció europea reconeix el dret de supressió de l’article 17 del RGPD.'),
    selfService: f('partial', 'editorial', ['cleanup-privacy-policy'], 'Interpretació pròpia: com que l’aplicació es pot fer servir sense compte, desinstal·lar-la atura el gruix del tractament, però les dades ja enviades als proveïdors de màrqueting només s’esborren per petició.'),
    difficulty: 'medium',
    steps: [
      'Cancel·la la subscripció des dels ajustos de l’App Store.',
      'Retira els permisos de fotos i contactes des dels ajustos del sistema.',
      'Escriu a cleanup@codeway.co demanant la supressió de les dades a l’empara de l’article 17 del RGPD.',
    ],
    sources: ['cleanup-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['cleanup-privacy-policy'], 'Es reconeix la portabilitat a la secció europea, sense eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['cleanup-privacy-policy'], 'Sol·licituds a cleanup@codeway.co o per correu postal a Istanbul; no consta cap representant a la UE.', {
      url: 'mailto:cleanup@codeway.co',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['cleanup-privacy-policy'], 'El consentiment publicitari es pot retirar des dels ajustos de privadesa del sistema o escrivint a l’empresa.'),
    telemetryOptOut: unknown('No consta cap interruptor per desactivar l’analítica.'),
    granularControls: f('partial', 'official', ['cleanup-privacy-policy'], 'Els controls efectius són els permisos del sistema operatiu: fotos, contactes i seguiment publicitari.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem examinat el flux de subscripció dins de l’aplicació.'),
  },
  security: {
    e2ee: na('El contingut de la galeria no es transmet als servidors, segons la política.'),
    transportEncryption: f('yes', 'official', ['cleanup-privacy-policy'], 'La política descriu canals xifrats i mesures criptogràfiques per a les dades que sí que es transmeten.'),
    atRestEncryption: f('partial', 'official', ['cleanup-privacy-policy'], 'S’esmenta l’emmagatzematge amb mètodes criptogràfics, sense detall.'),
    mfa: na('L’aplicació no requereix compte propi.'),
    independentAudits: unknown('No consten auditories independents.'),
    bugBounty: unknown('No hi ha fitxer security.txt ni programa conegut.'),
    vulnerabilityDisclosure: unknown('No hi ha cap canal públic documentat.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El compromís de no pujar fotos ni contactes és el punt fort de la fitxa i queda escrit a la política, que és el que podem verificar; no l’hem comprovat amb una anàlisi de trànsit. L’etiqueta de l’App Store, en canvi, declara un rastreig ampli basat en compres i interacció.',
    openQuestions: [
      'Una anàlisi del trànsit de l’aplicació confirmaria que cap imatge no surt del dispositiu?',
      'Quina relació societària hi ha entre Codeway i Deep Flow Software Services - FZCO, que comparteixen compte de desenvolupador a l’App Store?',
    ],
  },
}

/* ═══════════════════════════ Movistar Plus+ ═══════════════════════════ */
const movistarPlus: AppSeed = {
  slug: 'movistar-plus',
  name: 'Movistar Plus+',
  company: 'telefonica-audiovisual-digital',
  categories: ['video-i-streaming'],
  tagline: 'L’única fitxa del lot sense cap dada declarada com a utilitzada per rastrejar, però amb el que mires alimentant el perfil comercial de Movistar',
  summary:
    'Movistar Plus+ el presta Telefónica Audiovisual Digital, i les dades de qui el mira es tracten dins de la política de clients de Movistar, amb Telefónica de España i Telefónica Móviles España com a corresponsables. L’etiqueta de l’App Store és la més continguda del lot: cap dada declarada com a utilitzada per rastrejar. A canvi, la política preveu recomanacions de Movistar i de socis a la televisió basades en el perfil bàsic, emparades en l’interès legítim i amb oposició possible.',
  platforms: ['ios', 'android', 'web', 'other'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.movistarplus.es/',
    privacyPolicy: 'https://www.movistar.es/atencion-cliente/centro-de-privacidad/politica-de-privacidad-clientes',
    privacyCenter: 'https://www.movistarplus.es/legal/centro-de-privacidad',
    terms: 'https://www.movistarplus.es/legal/aviso-legal',
    appStore: appStore('540674767'),
  },
  accountRequired: f('yes', 'official', ['movistarplus-privacy-centre', 'movistarplus-legal-notice'], 'Cal ser client de Movistar o subscriure’s a Movistar Plus+ per veure el catàleg; el prestador del servei és Telefónica Audiovisual Digital, S.L.U.'),
  openSource: f('no', 'official', ['movistar-plus-app-store'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'El que una família mira a la televisió revela horaris, idees polítiques, afeccions esportives i qui hi ha a casa a cada hora. La política de Movistar tracta aquestes dades com una peça més del perfil comercial del client, i el detall de l’explotació per a recomanacions de socis depèn de consentiments concrets.',
  dataCollection: [
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['movistar-plus-app-store'] }),
    row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'elaboracio-de-perfils', 'compartir-dins-del-grup'], sources: ['movistar-privacy-policy'], note: 'La política preveu recomanacions de Movistar i de socis a la televisió a partir del perfil bàsic.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['movistar-plus-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['movistar-plus-app-store'], note: 'Declarat com a no vinculat a la identitat i utilitzat per a «publicidad de terceros».' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['movistar-plus-app-store'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['movistar-privacy-policy'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['movistar-privacy-policy'], note: 'Els perfils bàsic, enriquit, avançat i de la llar es construeixen amb dades calculades o estimades.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'compliment-legal'], sources: ['movistar-privacy-policy'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['movistar-privacy-policy'], note: 'Les galetes acceptades a les webs i aplicacions Movistar alimenten el perfil bàsic.' }),
    row('ubicacio-precisa', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['movistar-plus-app-store'], note: 'A diferència de Mi Movistar, l’etiqueta d’aquesta aplicació no declara ubicació.' }),
    row('contingut-de-missatges', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['movistar-plus-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['movistar-plus-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('partial', 'official', ['movistar-plus-app-store'], 'Es declara un identificador de dispositiu no vinculat a la identitat per a publicitat de tercers.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['movistar-privacy-additional'], 'L’annex descriu el servei publicitari Utiq, de Telefónica i altres operadores europees, que amb consentiment permet a tercers personalitzar publicitat.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['movistar-privacy-policy', 'movistar-privacy-additional'], 'Recomanacions de Movistar i de socis, espais publicitaris a la televisió de Movistar Plus+ i, amb consentiment, el servei Utiq.'),
    profiling: f('yes', 'official', ['movistar-privacy-policy'], 'Perfil bàsic per interès legítim amb dret d’oposició; perfils enriquit, avançat i de la llar només amb consentiment.'),
    aiTraining: unknown('La política no diu si les dades s’utilitzen per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['movistar-privacy-additional'], 'Llista de categories de proveïdors (atenció al client, publicitat, informàtica, seguretat, recobrament) i, en cas d’impagament, comunicació a ASNEF i BADEXCUG.'),
    intraGroupSharing: f('yes', 'official', ['movistar-privacy-policy'], 'Cessió de dades identificatives i del perfil bàsic a altres empreses del grup Telefónica que presten serveis Movistar.'),
    dataBrokerSales: f('no', 'official', ['movistar-privacy-policy'], 'La política no preveu la venda de dades; la compartició publicitària va lligada a consentiments concrets i al servei Utiq.'),
    internationalTransfers: f('yes', 'official', ['movistar-privacy-additional'], 'Clàusules tipus per als serveis prestats des de Colòmbia, el Pakistan i l’Índia, i decisió d’adequació per a Israel.', {
      mechanism: 'sccs',
    }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem localitzat un informe públic de Telefónica sobre peticions d’autoritats referit a aquest servei.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['movistar-privacy-policy'], 'La política fixa terminis màxims per tipus de dada: 10 anys per a les dades del client i de facturació, i 12 mesos per a les dades generades per l’ús i per a les calculades.'),
    dataAfterDeletion: f('yes', 'official', ['movistar-privacy-policy'], 'Les dades identificatives i de facturació es conserven fins a deu anys després de la baixa, segons la legislació de consum, mercantil i fiscal.'),
    periods: [
      { period: 'Fins a 10 anys després de la baixa per a les dades facilitades pel client', sources: ['movistar-privacy-policy'] },
      { period: '12 mesos per a les dades generades per l’ús dels serveis i per a les calculades', sources: ['movistar-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['movistar-privacy-policy'], 'El compte va lligat al contracte: es pot demanar la baixa del servei i exercir el dret de supressió, però la política reconeix que part de la informació es conserva per obligació legal durant deu anys.'),
    selfService: f('no', 'official', ['movistar-privacy-policy'], 'La supressió s’ha de demanar pels canals d’exercici de drets; no hi ha cap botó d’eliminació dins de l’aplicació.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Demana la baixa de la subscripció a Movistar Plus+ per l’àrea de client o per telèfon.',
      'Exerceix el dret de supressió escrivint a TE_datos@telefonica.com, identificant-te i indicant les línies afectades.',
      'Si la resposta no et satisfà, escriu al delegat de protecció de dades a DPO_movistar@telefonica.com o reclama a l’Agència Espanyola de Protecció de Dades.',
    ],
    obstacles: 'La normativa de telecomunicacions i la fiscal obliguen a conservar facturació i dades de trànsit, de manera que la supressió mai és completa mentre corren els terminis.',
    dataRetained: 'Dades identificatives i de facturació fins a deu anys després de la baixa.',
    sources: ['movistar-privacy-policy'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['movistar-privacy-policy'], 'La portabilitat es reconeix expressament i s’exerceix pels mateixos canals que la resta de drets.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['movistar-privacy-policy'], 'Correu a TE_datos@telefonica.com, correu postal a l’apartat de correus 46.155 de Madrid, l’àrea privada o l’aplicació Mi Movistar, amb resposta en un mes ampliable a tres.', {
      url: 'mailto:TE_datos@telefonica.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['movistar-privacy-policy'], 'El centre de privadesa de Movistar permet oposar-se al perfil bàsic i retirar els consentiments dels perfils enriquit, avançat i de la llar.', {
      url: 'https://www.movistar.es/particulares/centro-de-privacidad',
    }),
    telemetryOptOut: f('partial', 'official', ['movistar-privacy-policy'], 'Les galetes de les webs i aplicacions Movistar es poden rebutjar, però les dades de consum del servei són necessàries per prestar-lo.'),
    granularControls: f('yes', 'official', ['movistar-privacy-policy'], 'El centre de privadesa separa els consentiments per tipus de perfil i per destinatari (Movistar o socis).'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['movistar-privacy-policy'], 'Interpretació pròpia: el perfil comercial bàsic s’aplica per interès legítim i queda actiu si no t’hi oposes, tot i que la política n’explica el funcionament amb claredat poc habitual.'),
  },
  security: {
    e2ee: na('És un servei de difusió de vídeo, no de comunicacions privades.'),
    transportEncryption: f('yes', 'editorial', [], 'Interpretació pròpia a partir de la navegació: els serveis de Movistar Plus+ només responen per HTTPS.'),
    atRestEncryption: unknown('La política parla de mesures de seguretat rigoroses sense concretar el xifratge en repòs.'),
    mfa: unknown('No consta verificació en dos passos per al compte de Movistar Plus+.'),
    independentAudits: unknown('No consten auditories de seguretat publicades.'),
    bugBounty: unknown('No hi ha fitxer security.txt a movistar.es ni a telefonica.com i no hem trobat cap programa públic.'),
    vulnerabilityDisclosure: unknown('No hem localitzat cap política pública de divulgació de vulnerabilitats accessible.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política de clients de Movistar és de les més detallades que hem llegit en aquesta onada: defineix quatre nivells de perfil, diu quina base jurídica té cadascun i dona terminis de conservació concrets. Això permet documentar la fitxa amb precisió, però també mostra fins a quin punt el consum televisiu alimenta el perfil comercial.',
    openQuestions: [
      'Telefónica publica un informe de transparència sobre peticions d’autoritats?',
      'Quina és la via exacta per eliminar el compte de Movistar Plus+ quan no s’és client de telefonia?',
    ],
  },
}

/* ═══════════════════════════ Mi Movistar ═══════════════════════════ */
const miMovistar: AppSeed = {
  slug: 'mi-movistar',
  name: 'Mi Movistar',
  company: 'telefonica-espana',
  categories: ['telecomunicacions', 'utilitats'],
  tagline: 'L’aplicació d’autogestió de l’operadora, amb patró biomètric opcional i dues sancions de l’AEPD per identificacions defectuoses',
  summary:
    'Mi Movistar és el taulell de l’operadora: factures, consum, contractació i suport. El tractament el fan com a corresponsables Telefónica de España i Telefónica Móviles España, amb terminis de conservació llargs i comunicació a fitxers de solvència en cas d’impagament. La política ofereix verificació avançada amb patró biomètric, sempre amb consentiment, i l’AEPD ha multat Telefónica Móviles España dues vegades per lliurar duplicats de SIM i canvis de titularitat sense comprovar bé qui ho demanava.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya',
  userBase: 'Aplicació d’autogestió de la principal operadora espanyola, amb desenes de milions de línies',
  links: {
    website: 'https://www.movistar.es/atencion-cliente/app-mi-movistar',
    privacyPolicy: 'https://www.movistar.es/atencion-cliente/centro-de-privacidad/politica-de-privacidad-clientes',
    privacyCenter: 'https://www.movistar.es/particulares/centro-de-privacidad',
    appStore: appStore('1246644017'),
  },
  accountRequired: f('yes', 'official', ['movistar-privacy-policy'], 'Només hi poden entrar els clients identificats de Movistar.'),
  openSource: f('no', 'official', ['mi-movistar-app-store'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'L’operadora ja sap amb qui parles, quan i des d’on, perquè li cal per prestar el servei i perquè la llei l’obliga a conservar-ho. L’aplicació hi afegeix la dimensió comercial: consum, facturació, productes de la llar i, si s’hi consent, un patró biomètric per autenticar-te.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['mi-movistar-app-store'], note: 'L’etiqueta el declara també per a publicitat i màrqueting del desenvolupador.' }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['mi-movistar-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mi-movistar-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['mi-movistar-app-store'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['movistar-privacy-policy'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['movistar-privacy-policy'], note: 'Històric de productes, serveis i equipament contractat.' }),
    row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['movistar-privacy-policy'], note: 'Nombre de trucades, minuts i volum de dades; la Llei 25/2007 n’imposa la conservació per a requeriments judicials.' }),
    row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['mi-movistar-app-store'], note: 'L’etiqueta la declara com a no vinculada a la identitat, per a analítica i funcionament de l’aplicació.' }),
    row('llista-de-contactes', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['mi-movistar-app-store'] }),
    row('fotografies-i-videos', 'optional', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['mi-movistar-app-store'] }),
    row('veu-i-audio', 'optional', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mi-movistar-app-store'] }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['movistar-privacy-policy'], note: 'La verificació avançada genera un patró biomètric a partir de la foto del DNI i d’un selfie o de la veu, i només s’utilitza amb consentiment exprés.' }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'compliment-legal'], sources: ['movistar-privacy-policy'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['movistar-privacy-policy'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['mi-movistar-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['mi-movistar-app-store'] }),
    row('nivell-d-ingressos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'compliment-legal'], sources: ['movistar-privacy-policy'], note: 'La comprovació de solvència pot comportar l’exigència d’una garantia de pagament i la consulta o comunicació a ASNEF i BADEXCUG.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['mi-movistar-app-store'], 'Identificador d’usuari i de dispositiu declarats com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['mi-movistar-app-store']),
    thirdPartyTrackersPresent: f('yes', 'official', ['movistar-privacy-additional'], 'L’annex descriu el servei publicitari Utiq i la col·laboració amb socis d’Open Gateway.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['movistar-privacy-policy'], 'Recomanacions de Movistar i de socis per qualsevol mitjà, basades en els perfils comercials.'),
    profiling: f('yes', 'official', ['movistar-privacy-policy'], 'Quatre nivells de perfil, del bàsic per interès legítim als perfils avançat i de la llar que requereixen consentiment i incorporen dades de trànsit, navegació i localització.'),
    aiTraining: unknown('La política no parla d’entrenament de models amb dades de clients.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['movistar-privacy-policy', 'movistar-privacy-additional'], 'Proveïdors per categories, empreses de recobrament i, en cas d’impagament, els sistemes d’informació creditícia ASNEF (Equifax) i BADEXCUG (Experian).'),
    intraGroupSharing: f('yes', 'official', ['movistar-privacy-policy'], 'Cessió de dades identificatives i del perfil bàsic a les empreses del grup Telefónica que presten serveis Movistar.'),
    dataBrokerSales: f('no', 'official', ['movistar-privacy-policy'], 'No es preveu la venda de dades; les comunicacions a tercers van lligades a bases jurídiques concretes.'),
    internationalTransfers: f('yes', 'official', ['movistar-privacy-additional'], 'Atenció telefònica des de Colòmbia i el Pakistan i serveis des de l’Índia amb clàusules tipus; facturació des d’Israel a l’empara de la decisió d’adequació.', {
      mechanism: 'sccs',
    }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem localitzat cap informe públic de Telefónica sobre peticions d’autoritats accessible en el moment de la revisió.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['movistar-privacy-policy'], 'Deu anys per a les dades del client i de facturació i dotze mesos per a les dades d’ús i les calculades, amb l’excepció de les obligacions de la Llei 25/2007.'),
    dataAfterDeletion: f('yes', 'official', ['movistar-privacy-policy'], 'Després de la baixa es conserven les dades identificatives i de facturació fins a deu anys, i es poden tractar dades del perfil bàsic durant dos anys per fer ofertes a exclients.'),
    periods: [
      { period: 'Fins a 10 anys després de la baixa per a dades del client i de facturació', sources: ['movistar-privacy-policy'] },
      { dataType: 'metadades-de-comunicacio', period: '12 mesos, amb les obligacions de conservació de la Llei 25/2007', sources: ['movistar-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['movistar-privacy-policy'], 'Es pot demanar la supressió, però les obligacions legals de conservació la limiten durant anys.'),
    selfService: f('no', 'official', ['movistar-privacy-policy'], 'No hi ha eliminació del compte dins de l’aplicació: cal donar de baixa el contracte i exercir el dret de supressió.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Dona de baixa els serveis contractats o porta el número a una altra operadora.',
      'Escriu a TE_datos@telefonica.com identificant-te i indicant els números afectats per exercir la supressió.',
      'Per aturar només les ofertes comercials, oposa-t’hi des del centre de privadesa o trucant gratuïtament al 224407.',
      'Si la resposta no et satisfà, contacta amb DPO_movistar@telefonica.com o reclama a l’AEPD.',
    ],
    obstacles:
      'Els terminis legals de conservació de facturació i de dades de trànsit fan que la supressió sigui parcial, i durant dos anys Movistar pot seguir tractant el perfil bàsic per fer ofertes a exclients tret que t’hi oposis.',
    dataRetained: 'Dades identificatives i de facturació fins a deu anys; dades de trànsit segons la Llei 25/2007.',
    sources: ['movistar-privacy-policy'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['movistar-privacy-policy'], 'Dret de portabilitat reconegut, amb lliurament en format estructurat i d’ús comú si es facilita una adreça electrònica vàlida.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['movistar-privacy-policy'], 'Correu electrònic, correu postal, àrea privada o la mateixa aplicació Mi Movistar; resposta en un mes, ampliable a tres, i mediació d’Autocontrol abans d’anar a l’AEPD.', {
      url: 'mailto:TE_datos@telefonica.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['movistar-privacy-policy'], 'Oposició al perfil bàsic i retirada dels consentiments des del centre de privadesa o per telèfon al 224407.', {
      url: 'https://www.movistar.es/particulares/centro-de-privacidad',
    }),
    telemetryOptOut: f('partial', 'official', ['movistar-privacy-policy'], 'Les galetes es poden rebutjar, però les dades de consum i facturació són inherents al servei.'),
    granularControls: f('yes', 'official', ['movistar-privacy-policy'], 'Consentiments separats per nivell de perfil, per destinatari i per a la biometria.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['movistar-privacy-policy'], 'Interpretació pròpia: el perfil comercial bàsic i les recomanacions es basen en l’interès legítim i estan actius per defecte; cal buscar el centre de privadesa per aturar-los.'),
  },
  security: {
    e2ee: na('L’aplicació és de gestió del contracte, no de missatgeria.'),
    transportEncryption: f('yes', 'editorial', [], 'Interpretació pròpia a partir de la navegació: l’àrea de client només respon per HTTPS.'),
    atRestEncryption: unknown('La política parla de mesures rigoroses sense concretar el xifratge en repòs.'),
    mfa: f('partial', 'official', ['movistar-privacy-policy'], 'La verificació avançada amb patró biomètric s’ofereix com a reforç de la identitat digital, amb consentiment, però no consta una verificació en dos passos general del compte.', {
      methods: ['sms'],
    }),
    independentAudits: unknown('No consten auditories de seguretat publicades.'),
    bugBounty: unknown('No hi ha fitxer security.txt a movistar.es ni a telefonica.com i no hem trobat cap programa públic.'),
    vulnerabilityDisclosure: unknown('No hem localitzat cap política pública de divulgació de vulnerabilitats accessible.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Les dues sancions de l’AEPD que recull la fitxa no són per publicitat sinó per identificació: un duplicat de SIM i un canvi de titularitat concedits a qui no era el titular, amb frau bancari al darrere. En una aplicació que aspira a ser la teva identitat digital, aquest és l’indicador que importa.',
    openQuestions: [
      'Hi ha verificació en dos passos general per entrar a Mi Movistar, més enllà de la verificació avançada biomètrica?',
      'Telefónica té un canal públic per comunicar vulnerabilitats?',
    ],
  },
}

/* ═══════════════════════════ DramaWave ═══════════════════════════ */
const dramaWave: AppSeed = {
  slug: 'dramawave',
  name: 'DramaWave',
  company: 'skywork-ai',
  categories: ['video-i-streaming'],
  tagline: 'Microdrames verticals amb funcions d’IA facial, lectura del porta-retalls i eliminació del compte des de l’aplicació',
  summary:
    'DramaWave encadena capítols verticals de pocs minuts que es desbloquegen amb monedes, i hi afegeix funcions d’IA que substitueixen cares a partir d’una fotografia. La política per a l’EEE reconeix que això implica tractar dades facials, que són categoria especial, i ho condiciona al consentiment explícit. També declara dues coses poc habituals: que llegeix el porta-retalls i que accedeix al calendari. A canvi, és de les poques fitxes del lot on el compte s’esborra amb dos tocs.',
  platforms: ['ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Singapur',
  links: {
    website: 'https://mydramawave.com/',
    privacyPolicy: 'https://mydramawave.com/rules/privacy.html',
    appStore: appStore('6670430706'),
  },
  accountRequired: f('partial', 'official', ['dramawave-privacy-policy'], 'Es pot mirar contingut com a visitant, però sense compte les dades queden lligades a un identificador del dispositiu i les funcions són limitades.'),
  openSource: f('no', 'official', ['dramawave-app-store'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'L’historial de visualització d’una aplicació de microdrames és molt expressiu: diu què t’enganxa, a quines hores i quant hi gastes. Si a més hi puges una cara per a les funcions d’IA, hi afegeixes dades biomètriques; i el porta-retalls pot contenir qualsevol cosa que hagis copiat abans, des d’una adreça fins a una contrasenya.',
  dataCollection: [
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['dramawave-privacy-policy', 'dramawave-app-store'] }),
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['dramawave-app-store'], note: 'Àlies, avatar i perfil públic.' }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'publicitat-personalitzada'], sources: ['dramawave-privacy-policy'], note: 'La política admet que l’edat també es fa servir per segmentar anuncis i personalitzar l’experiència.' }),
    row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['dramawave-privacy-policy'] }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['dramawave-privacy-policy'], note: 'Les funcions d’IA processen geometria facial, punts de referència i vectors de la cara; la política ho condiciona al consentiment explícit i diu que no s’utilitzen per entrenar models ni per identificar ningú entre serveis sense un consentiment separat.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['dramawave-privacy-policy'] }),
    row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'mesura-i-analisi-dus'], sources: ['dramawave-privacy-policy'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['dramawave-privacy-policy'], note: 'Per retirar monedes o béns virtuals pot caldre un document d’identitat oficial per prevenció del blanqueig.' }),
    row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['dramawave-privacy-policy'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['dramawave-privacy-policy', 'dramawave-app-store'], note: 'La política enumera IMEI, IDFA i altres identificadors.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-publicitaria'], sources: ['dramawave-privacy-policy'], note: 'Els servidors publicitaris de tercers reben automàticament l’adreça IP.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['dramawave-privacy-policy', 'dramawave-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['dramawave-app-store'] }),
    row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['dramawave-privacy-policy'], note: 'El contingut del porta-retalls es recull amb permís quan es copia o s’enganxa a la plataforma, i es fa servir per a màrqueting i personalització.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['dramawave-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['dramawave-app-store'], 'L’identificador de dispositiu es declara com a dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['dramawave-privacy-policy'], 'IDFA i identificadors equivalents recollits automàticament.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['dramawave-privacy-policy'], 'La política permet que servidors i xarxes publicitàries de tercers serveixin anuncis dins de la plataforma amb galetes, JavaScript i balises web.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['dramawave-privacy-policy'], 'Compartició amb anunciants i empreses de mesura per mostrar publicitat personalitzada.'),
    profiling: f('yes', 'official', ['dramawave-privacy-policy'], 'Recomanacions personalitzades i publicitat a partir de l’historial, l’edat, el gènere i la ubicació aproximada.'),
    aiTraining: f('no', 'official', ['dramawave-privacy-policy'], 'La política diu que, sense un consentiment separat, no s’utilitzen les imatges pujades ni les dades facials per entrenar models ni per construir bases de reconeixement facial.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['dramawave-privacy-policy'], 'Proveïdors de núvol, de pagament, de generació i moderació de contingut, anunciants i empreses de mesura.'),
    intraGroupSharing: f('yes', 'official', ['dramawave-privacy-policy'], 'Les dades poden anar a entitats afiliades del grup en altres jurisdiccions.'),
    dataBrokerSales: unknown('La política no parla de venda de dades a intermediaris.'),
    internationalTransfers: f('yes', 'official', ['dramawave-privacy-policy'], 'Transferències a jurisdiccions on hi ha entitats afiliades, amb «garanties necessàries i apropiades» descrites de manera genèrica i sense esmentar clàusules tipus.', {
      mechanism: 'unknown',
    }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['dramawave-privacy-policy'], 'La política només diu que es conserven les dades mentre calgui per a les necessitats del negoci i la llei, sense terminis concrets.'),
    dataAfterDeletion: f('partial', 'official', ['dramawave-privacy-policy'], 'S’esborren o s’anonimitzen les dades quan s’exhaureix la finalitat o el termini legal; en cas de cessament del servei, s’avisa amb trenta dies.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['dramawave-privacy-policy']),
    selfService: f('yes', 'official', ['dramawave-privacy-policy'], 'Es pot eliminar el compte des de la mateixa aplicació, a Perfil, Configuració i Eliminar el compte.'),
    difficulty: 'easy',
    steps: [
      'Obre Perfil i entra a Configuració.',
      'Tria Eliminar el compte i confirma: després de la sol·licitud ja no podràs fer servir DramaWave.',
      'Si has fet servir les funcions d’IA, demana també la supressió de les imatges pujades, de les dades facials i del contingut generat, amb les eines del servei o escrivint a dramawavesupport@mydramawave.com.',
    ],
    dataRetained: 'Les dades que la llei obligui a conservar, per exemple per a obligacions fiscals i de prevenció del blanqueig.',
    sources: ['dramawave-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['dramawave-privacy-policy'], 'Es pot demanar una còpia de les dades escrivint a l’empresa; no hi ha exportació automàtica.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['dramawave-privacy-policy'], 'Contacte directe amb l’empresa a Singapur i representant a la UE designat a Alemanya (activeMind.legal), amb dret a impugnar decisions automatitzades com el bloqueig del compte.', {
      url: 'mailto:dramawavesupport@mydramawave.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['dramawave-privacy-policy'], 'Es pot retirar el consentiment i la política remet a les polítiques dels servidors publicitaris de tercers per excloure’n algunes activitats.'),
    telemetryOptOut: unknown('No consta cap control per desactivar l’analítica d’ús.'),
    granularControls: f('partial', 'official', ['dramawave-privacy-policy'], 'Hi ha permisos separats per al porta-retalls, el calendari i les funcions d’IA, revocables des del sistema, però no un panell de privadesa complet.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['dramawave-privacy-policy'], 'Interpretació pròpia: la lectura del porta-retalls «per a màrqueting i promocions» és un tractament que cap persona espera d’una aplicació de sèries, encara que es demani permís.'),
    darkPatternList: [
      {
        type: 'other',
        severity: 'medium',
        description:
          'La política preveu recollir el contingut del porta-retalls quan es copia o s’enganxa dins de la plataforma, i desar-lo a l’aplicació per a finalitats de màrqueting.',
        sources: ['dramawave-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'official', ['dramawave-privacy-policy'], 'Xifratge en trànsit amb TLS 1.2 entre dispositius i servidors i entre servidors.'),
    atRestEncryption: f('yes', 'official', ['dramawave-privacy-policy'], 'Xifratge en repòs de totes les dades d’usuari, incloses les bases de dades i les còpies de seguretat.'),
    mfa: unknown('La política descriu autenticació multifactor per als accessos interns, no per als comptes de les persones usuàries.'),
    independentAudits: f('partial', 'official', ['dramawave-privacy-policy'], 'S’esmenten proves periòdiques de vulnerabilitats i revisió de codi, però no auditories externes publicades.'),
    bugBounty: unknown('No hi ha fitxer security.txt ni programa públic conegut.'),
    vulnerabilityDisclosure: unknown('No hi ha cap canal públic específic per comunicar vulnerabilitats.'),
  },
  alternatives: [
    { app: 'dramareels', comparability: 'equivalent', rationale: 'És l’altra aplicació de microdrames del mateix grup, amb la mateixa plantilla de política però sense funcions d’IA facial.', tradeOffs: 'El contacte de protecció de dades és una adreça de Gmail i la marca del document no coincideix amb la de la botiga.' },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política per a l’EEE és sorprenentment completa per a una aplicació d’aquesta mena: taula de bases jurídiques, tractament de dades facials amb consentiment explícit, xifratge descrit i representant a la UE. Els punts febles són la manca de terminis de conservació, unes garanties de transferència internacional genèriques i la submissió a la llei i a l’arbitratge de Singapur.',
    openQuestions: [
      'Quin mecanisme empara concretament les transferències fora de l’EEE?',
      'Quant de temps es conserven l’historial de visualització i les dades facials?',
    ],
  },
}

/* ═══════════════════════════ DramaReels ═══════════════════════════ */
const dramaReels: AppSeed = {
  slug: 'dramareels',
  name: 'DramaReels',
  company: 'skywork-ai',
  categories: ['video-i-streaming'],
  tagline: 'La mateixa plantilla que DramaWave, amb una altra marca al document legal i una adreça de Gmail com a contacte de privadesa',
  summary:
    'DramaReels és l’altra aplicació de microdrames de SKYWORK AI. La política que enllaça des de l’App Store parla en tot moment de «FreeReels», el nom del domini on s’allotja, i el contacte per exercir drets és una adreça de Gmail. El contingut és el mateix que a DramaWave —historial de visualització, compres de monedes, porta-retalls i calendari— però sense les funcions d’IA facial, i l’eliminació del compte també es fa des de l’aplicació.',
  platforms: ['ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Singapur',
  links: {
    website: 'https://free-reels.com/',
    privacyPolicy: 'https://free-reels.com/rules/privacy.html',
    appStore: appStore('6738081517'),
  },
  accountRequired: f('partial', 'official', ['dramareels-privacy-policy'], 'Es pot mirar contingut sense registre, amb les dades lligades a un identificador del dispositiu.'),
  openSource: f('no', 'official', ['dramareels-app-store'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Com a DramaWave, el valor no és el catàleg sinó el consum: quins capítols mires, quan pares i quantes monedes compres per continuar. Això és el que sosté el model de pagament per capítol i el que alimenta la publicitat.',
  dataCollection: [
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['dramareels-privacy-policy', 'dramareels-app-store'] }),
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['dramareels-app-store'], note: 'Àlies i avatar del perfil.' }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'publicitat-personalitzada'], sources: ['dramareels-privacy-policy'] }),
    row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['dramareels-privacy-policy'] }),
    row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'mesura-i-analisi-dus'], sources: ['dramareels-privacy-policy'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['dramareels-privacy-policy'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'seguretat-i-prevencio-del-frau'], sources: ['dramareels-privacy-policy', 'dramareels-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-publicitaria'], sources: ['dramareels-privacy-policy'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['dramareels-app-store'], note: 'A diferència de DramaWave, aquí l’etiqueta la declara vinculada al compte.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['dramareels-app-store'] }),
    row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['dramareels-privacy-policy'], note: 'Contingut del porta-retalls recollit amb permís i desat a l’aplicació per a màrqueting i personalització.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['dramareels-app-store'] }),
    row('dades-biometriques', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['dramareels-privacy-policy'], note: 'Aquesta política no inclou l’apartat de funcions d’IA facial que sí que té DramaWave.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['dramareels-app-store'], 'L’identificador de dispositiu es declara com a dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['dramareels-privacy-policy']),
    thirdPartyTrackersPresent: f('yes', 'official', ['dramareels-privacy-policy'], 'Servidors i xarxes publicitàries de tercers poden servir anuncis dins de l’aplicació i reben automàticament l’adreça IP.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['dramareels-privacy-policy'], 'Compartició amb anunciants i empreses de mesura per a publicitat personalitzada.'),
    profiling: f('yes', 'official', ['dramareels-privacy-policy'], 'Recomanacions i publicitat basades en l’historial i en les dades del perfil.'),
    aiTraining: unknown('Aquesta política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['dramareels-privacy-policy'], 'Proveïdors de núvol i de pagament, anunciants i empreses de mesura.'),
    intraGroupSharing: f('yes', 'official', ['dramareels-privacy-policy'], 'Transferència a entitats afiliades en altres jurisdiccions.'),
    dataBrokerSales: f('partial', 'official', ['dramareels-privacy-policy'], 'La secció per a Califòrnia admet que l’ús d’eines publicitàries es pot considerar una «venda» o «compartició» de dades segons aquella llei.'),
    internationalTransfers: f('yes', 'official', ['dramareels-privacy-policy'], 'Transferències a les jurisdiccions de les entitats afiliades amb garanties descrites de manera genèrica.', {
      mechanism: 'unknown',
    }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['dramareels-privacy-policy'], 'Només criteris generals, sense terminis per categoria de dada.'),
    dataAfterDeletion: f('partial', 'official', ['dramareels-privacy-policy'], 'Les dades s’esborren o s’anonimitzen quan s’exhaureix la finalitat o el termini legal.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['dramareels-privacy-policy']),
    selfService: f('yes', 'official', ['dramareels-privacy-policy'], 'L’eliminació del compte es fa des de Perfil, Configuració i Eliminar el compte dins de l’aplicació.'),
    difficulty: 'easy',
    steps: [
      'Obre Perfil i entra a Configuració.',
      'Tria Eliminar el compte i confirma; les monedes i el contingut desbloquejat es perden.',
      'Per a qualsevol dubte o per exercir la resta de drets, escriu a contact.freereels@gmail.com o al representant a la UE indicant «FreeReels».',
    ],
    sources: ['dramareels-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['dramareels-privacy-policy'], 'Es pot demanar una còpia de les dades per correu, sense eina automàtica.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['dramareels-privacy-policy'], 'El canal per exercir drets és una adreça de Gmail, amb un representant a la UE a Alemanya com a alternativa. Que el responsable atengui els drets des d’un correu gratuït no inspira confiança en la traçabilitat de les sol·licituds.', {
      url: 'mailto:contact.freereels@gmail.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['dramareels-privacy-policy'], 'Retirada del consentiment i remissió a les polítiques dels servidors publicitaris de tercers.'),
    telemetryOptOut: unknown('No consta cap control per desactivar l’analítica.'),
    granularControls: f('partial', 'official', ['dramareels-privacy-policy'], 'Permisos separats per al porta-retalls i el calendari, revocables des del sistema.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['dramareels-privacy-policy'], 'Interpretació pròpia: la política que regeix l’aplicació DramaReels parla sempre de «FreeReels», i això dificulta que una persona identifiqui quin document s’aplica al servei que té instal·lat.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description: 'El nom de l’aplicació a l’App Store (DramaReels) no coincideix amb el nom del servei a la política de privadesa (FreeReels).',
        sources: ['dramareels-privacy-policy', 'dramareels-app-store'],
      },
    ],
  },
  security: {
    e2ee: na('No transporta comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'official', ['dramareels-privacy-policy'], 'Xifratge en trànsit amb TLS 1.2.'),
    atRestEncryption: f('yes', 'official', ['dramareels-privacy-policy'], 'Xifratge en repòs de les dades d’usuari, incloses les còpies de seguretat.'),
    mfa: unknown('L’autenticació multifactor que descriu la política és per als accessos interns.'),
    independentAudits: f('partial', 'official', ['dramareels-privacy-policy'], 'Proves periòdiques de vulnerabilitats i revisió de codi, sense auditories externes publicades.'),
    bugBounty: unknown('No hi ha fitxer security.txt ni programa públic conegut.'),
    vulnerabilityDisclosure: unknown('No hi ha cap canal públic específic.'),
  },
  alternatives: [
    { app: 'dramawave', comparability: 'equivalent', rationale: 'Mateix grup i mateix model de negoci, amb una política per a l’EEE més detallada i un contacte corporatiu en lloc d’una adreça de Gmail.', tradeOffs: 'Hi afegeix funcions d’IA que tracten dades facials.' },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Les dues aplicacions de SKYWORK AI comparteixen plantilla, però la de DramaReels està menys cuidada: marca diferent, contacte a Gmail i cap menció a l’entrenament de models. És un bon exemple de com una mateixa empresa pot oferir nivells de diligència diferents segons l’aplicació.',
    openQuestions: [
      'Per què la política parla de FreeReels i l’aplicació es diu DramaReels a l’App Store?',
      'Quin mecanisme empara les transferències internacionals?',
    ],
  },
}

/* ───────────────────────────── Lot ───────────────────────────── */

export const lot: SeedLot = {
  companies,
  sources,
  apps: [dazn, daznBet, acrobatReader, adobeScan, learnaAi, cleanup, movistarPlus, miMovistar, dramaWave, dramaReels],
  incidents: [
    {
      slug: 'adobe-filtracio-2013',
      title: 'Filtració de 152 milions de comptes d’Adobe',
      type: 'breach',
      severity: 'critical',
      apps: ['adobe-acrobat-reader', 'adobe-scan'],
      company: 'adobe',
      occurredAt: '2013-10-04',
      description:
        'L’octubre del 2013, un atac contra Adobe va exposar adreces electròniques, noms d’usuari, contrasenyes i, sobretot, les pistes de contrasenya en text clar de més de 152 milions de comptes. Les contrasenyes estaven xifrades amb un algorisme de blocs mal utilitzat i amb la mateixa clau, cosa que va permetre deduir-ne moltes a partir de les pistes. És una de les filtracions més grans i més estudiades de la història d’internet, i encara avui alimenta atacs de reutilització de credencials.',
      affectedPeople: '152.445.165 comptes segons el recompte de Have I Been Pwned',
      sources: ['adobe-hibp-breach'],
    },
    {
      slug: 'mi-movistar-aepd-duplicat-sim-2024',
      title: 'Sanció de l’AEPD a Telefónica Móviles España per un duplicat de SIM lliurat a un tercer',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['mi-movistar'],
      company: 'telefonica-moviles-espana',
      occurredAt: '2023-01-01',
      description:
        'L’AEPD va multar Telefónica Móviles España amb 200.000 euros per infracció de l’article 6.1 del RGPD. El gener del 2023, un punt de venda va lliurar un duplicat de la targeta SIM d’un client d’O2 a una persona que en suplantava la identitat, sense comprovar-ne la documentació. Amb aquella SIM, els autors van interceptar els codis de verificació bancària i van fer operacions fraudulentes al compte del client.',
      regulatory: {
        authority: 'AEPD',
        fineAmountEur: 200000,
        legalBasis: 'Article 6.1 del RGPD, tipificat a l’article 83.5',
        status: 'final',
      },
      sources: ['aepd-ps-00303-2024'],
    },
    {
      slug: 'mi-movistar-aepd-canvi-titularitat-2024',
      title: 'Sanció de l’AEPD a Telefónica Móviles España per un canvi de titularitat sense consentiment',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['mi-movistar'],
      company: 'telefonica-moviles-espana',
      occurredAt: '2023-03-15',
      description:
        'L’AEPD va imposar una multa de 300.000 euros a Telefónica Móviles España per infracció de l’article 6.1 del RGPD. El març del 2023, la línia mòbil d’un client d’O2 va deixar de funcionar perquè se n’havia canviat la titularitat sense el seu consentiment; un tercer que en va suplantar la identitat va fer càrrecs no autoritzats al seu compte bancari. La resolució recorda que verificar qui demana un canvi de titularitat forma part de la licitud del tractament.',
      regulatory: {
        authority: 'AEPD',
        fineAmountEur: 300000,
        legalBasis: 'Article 6.1 del RGPD, tipificat a l’article 83.5.a)',
        status: 'final',
      },
      sources: ['aepd-ps-00417-2024'],
    },
  ],
  storeIds: {
    dazn: 'com.dazn.theApp',
    'dazn-bet': 'com.daznbetes.app',
    'adobe-acrobat-reader': 'com.adobe.Adobe-Reader',
    'adobe-scan': 'com.adobe.scan.ios',
    'learna-ai': 'com.codeway.aitutor',
    cleanup: 'com.codeway.cleanerplus',
    'movistar-plus': 'com.prisatv.yomvi',
    'mi-movistar': 'com.movistar.mimovistarios',
    dramawave: 'com.dramabuzz.app',
    dramareels: 'com.freereels.app',
  },
}
