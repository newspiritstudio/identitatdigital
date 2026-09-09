import type { IncidentSeed } from './types'

/**
 * Incidents documentats.
 *
 * Només hi entren fets acreditats per una resolució d'una autoritat de control,
 * un comunicat de la mateixa empresa o una cobertura periodística contrastada.
 * L'estat de la sanció importa tant com l'import: una multa anul·lada en
 * apel·lació no és una multa, i el sistema de puntuació no la pot tractar com
 * si ho fos.
 */
export const incidents: IncidentSeed[] = [
  /* ── Meta ── */
  {
    slug: 'meta-transferencies-eua-2023',
    title: 'Sanció de 1.200 milions d’euros a Meta per les transferències de dades als Estats Units',
    type: 'regulatory-fine',
    severity: 'critical',
    apps: ['facebook'],
    company: 'meta-platforms-ireland',
    occurredAt: '2023-05-22',
    disclosedAt: '2023-05-22',
    description:
      'L’autoritat irlandesa va concloure que Meta transferia dades de les persones usuàries europees de Facebook als Estats Units sense una base jurídica vàlida després de la sentència Schrems II. A més de la sanció, va ordenar suspendre les transferències i posar el tractament en conformitat. És la sanció més alta imposada mai en aplicació del RGPD.',
    affectedPeople: 'Totes les persones usuàries de Facebook a l’Espai Econòmic Europeu.',
    regulatory: {
      authority: 'Data Protection Commission (Irlanda)',
      fineAmountEur: 1200000000,
      legalBasis: 'Article 46.1 del RGPD',
      status: 'appealed',
    },
    sources: ['dpc-meta-transfers-2023'],
  },
  {
    slug: 'meta-publicitat-conductual-2023',
    title: 'Sancions a Facebook i Instagram per la base jurídica de la publicitat conductual',
    type: 'regulatory-fine',
    severity: 'high',
    apps: ['facebook', 'instagram'],
    company: 'meta-platforms-ireland',
    occurredAt: '2023-01-04',
    disclosedAt: '2023-01-04',
    description:
      'L’autoritat irlandesa, seguint una decisió vinculant del Comitè Europeu de Protecció de Dades, va declarar que Meta no podia emparar la publicitat conductual en l’execució del contracte: incloure-la a les condicions del servei no equival a obtenir-ne el consentiment. Va imposar 210 milions d’euros a Facebook i 180 milions a Instagram i va ordenar corregir el tractament en tres mesos.',
    affectedPeople: 'Totes les persones usuàries de Facebook i Instagram a la Unió Europea.',
    regulatory: {
      authority: 'Data Protection Commission (Irlanda)',
      fineAmountEur: 390000000,
      legalBasis: 'Articles 6.1.b i 5.1.a del RGPD',
      status: 'final',
    },
    sources: ['dpc-meta-ads-2023'],
  },
  {
    slug: 'facebook-scraping-533m-2021',
    title: 'Publicació de dades de 533 milions de comptes de Facebook',
    type: 'scraping',
    severity: 'critical',
    apps: ['facebook'],
    company: 'meta-platforms',
    occurredAt: '2019-09-01',
    disclosedAt: '2021-04-03',
    description:
      'Un conjunt de dades amb números de telèfon, adreces electròniques, noms i dades de perfil de 533 milions de comptes de 106 països es va publicar gratuïtament en un fòrum de delinqüència informàtica. Les dades es van obtenir explotant la funció d’importació de contactes abans del 2019. Meta va sostenir que no es tractava d’una intrusió als seus sistemes, però l’autoritat irlandesa va sancionar-la amb 265 milions d’euros el 2022 per no haver aplicat protecció de dades des del disseny.',
    affectedPeople: '533 milions de comptes, amb 11 milions al Regne Unit i 32 milions als Estats Units.',
    regulatory: {
      authority: 'Data Protection Commission (Irlanda)',
      fineAmountEur: 265000000,
      legalBasis: 'Articles 25.1 i 25.2 del RGPD',
      status: 'final',
    },
    sources: ['mit-facebook-leak-2021', 'dpc-facebook-scraping-2022'],
  },
  {
    slug: 'facebook-tokens-2018',
    title: 'Sanció de 251 milions d’euros per la bretxa de testimonis d’accés de 2018',
    type: 'breach',
    severity: 'critical',
    apps: ['facebook'],
    company: 'meta-platforms-ireland',
    occurredAt: '2018-09-01',
    disclosedAt: '2024-12-17',
    description:
      'Una vulnerabilitat a la funció «Veure com» va permetre obtenir testimonis d’accés de comptes de Facebook i, amb ells, accedir a perfils complets: nom, adreça electrònica, telèfon, ubicació, feina, data de naixement, religió, gènere, publicacions, grups i infants vinculats. Van resultar afectats uns 29 milions de comptes a tot el món, 3 milions dels quals a la Unió Europea. L’autoritat irlandesa va sancionar Meta el desembre de 2024 per fallades de notificació, documentació i protecció des del disseny.',
    affectedPeople: 'Uns 29 milions de comptes a escala mundial, 3 milions a la Unió Europea.',
    regulatory: {
      authority: 'Data Protection Commission (Irlanda)',
      fineAmountEur: 251000000,
      legalBasis: 'Articles 33.3, 33.5, 25.1 i 25.2 del RGPD',
      status: 'final',
    },
    sources: ['dpc-meta-251m-2024'],
  },
  {
    slug: 'instagram-menors-2022',
    title: 'Sanció de 405 milions d’euros a Instagram pel tractament de dades de menors',
    type: 'regulatory-fine',
    severity: 'high',
    apps: ['instagram'],
    company: 'meta-platforms-ireland',
    occurredAt: '2022-09-02',
    disclosedAt: '2022-09-15',
    description:
      'La investigació va constatar que els comptes de persones menors d’edat que optaven pel perfil d’empresa passaven a mostrar públicament el número de telèfon i l’adreça electrònica, i que els comptes de menors es creaven públics per defecte. La resolució considera que això vulnera els principis de protecció des del disseny i per defecte.',
    affectedPeople: 'Persones usuàries d’Instagram d’entre 13 i 17 anys a la Unió Europea.',
    regulatory: {
      authority: 'Data Protection Commission (Irlanda)',
      fineAmountEur: 405000000,
      legalBasis: 'Articles 5.1.a, 5.1.c, 6.1, 12.1, 24, 25.1 i 25.2 del RGPD',
      status: 'final',
    },
    sources: ['dpc-instagram-2022'],
  },
  {
    slug: 'whatsapp-transparencia-2021',
    title: 'Sanció de 225 milions d’euros a WhatsApp per manca de transparència',
    type: 'regulatory-fine',
    severity: 'high',
    apps: ['whatsapp'],
    company: 'whatsapp-ireland',
    occurredAt: '2021-09-02',
    disclosedAt: '2021-09-02',
    description:
      'L’autoritat irlandesa va concloure que WhatsApp no informava prou clarament sobre el tractament de dades, especialment sobre la compartició d’informació amb la resta d’empreses de Meta i sobre les dades de persones no usuàries recollides a través de l’agenda de contactes. La sanció es va elevar de la proposta inicial a 225 milions després d’una decisió vinculant del Comitè Europeu de Protecció de Dades.',
    affectedPeople: 'Persones usuàries i no usuàries de WhatsApp a la Unió Europea.',
    regulatory: {
      authority: 'Data Protection Commission (Irlanda)',
      fineAmountEur: 225000000,
      legalBasis: 'Articles 12, 13 i 14 del RGPD',
      status: 'final',
    },
    sources: ['dpc-whatsapp-2021'],
  },
  {
    slug: 'facebook-galetes-cnil-2021',
    title: 'Sanció de la CNIL a Facebook per la dificultat de rebutjar les galetes',
    type: 'regulatory-fine',
    severity: 'medium',
    apps: ['facebook'],
    company: 'meta-platforms-ireland',
    occurredAt: '2021-12-31',
    disclosedAt: '2022-01-06',
    description:
      'L’autoritat francesa va sancionar Facebook amb 60 milions d’euros perquè el seu avís de galetes permetia acceptar-les amb un sol clic però obligava a diversos passos per rebutjar-les. La resolució considera que aquesta asimetria condiciona la lliure elecció. La mateixa decisió va sancionar Google amb 150 milions per la mateixa pràctica.',
    affectedPeople: 'Persones usuàries a França.',
    regulatory: {
      authority: 'CNIL (França)',
      fineAmountEur: 60000000,
      legalBasis: 'Article 82 de la Llei francesa de protecció de dades',
      status: 'final',
    },
    sources: ['cnil-cookies-2021'],
  },
  {
    slug: 'meta-ai-contingut-public-2025',
    title: 'Ús de contingut públic europeu per entrenar els models d’intel·ligència artificial de Meta',
    type: 'misuse',
    severity: 'medium',
    apps: ['facebook', 'instagram'],
    company: 'meta-platforms-ireland',
    occurredAt: '2025-05-27',
    disclosedAt: '2025-05-21',
    description:
      'Meta va reprendre l’entrenament dels seus models amb publicacions i comentaris públics de persones adultes de la Unió Europea, després d’aturar-ho el 2024 a petició de l’autoritat irlandesa. El tractament s’empara en l’interès legítim, amb un formulari d’oposició que no exigeix justificació. L’autoritat va acordar mesures addicionals de transparència i va anunciar que en faria seguiment.',
    affectedPeople: 'Persones usuàries adultes de Facebook i Instagram a la Unió Europea.',
    regulatory: {
      authority: 'Data Protection Commission (Irlanda)',
      legalBasis: 'Article 6.1.f del RGPD',
      status: 'ongoing',
    },
    sources: ['dpc-meta-ai-2025'],
  },

  /* ── Alphabet ── */
  {
    slug: 'google-galetes-cnil-2021',
    title: 'Sanció de 150 milions d’euros a Google per la dificultat de rebutjar les galetes',
    type: 'regulatory-fine',
    severity: 'medium',
    apps: ['google-search', 'youtube'],
    company: 'google-ireland',
    occurredAt: '2021-12-31',
    disclosedAt: '2022-01-06',
    description:
      'L’autoritat francesa va constatar que google.fr i youtube.com oferien un botó únic per acceptar totes les galetes però requerien diversos clics per rebutjar-les, i va imposar la sanció més alta que havia dictat fins llavors per aquesta pràctica, amb una multa coercitiva per cada dia de retard en la correcció.',
    affectedPeople: 'Persones usuàries a França.',
    regulatory: {
      authority: 'CNIL (França)',
      fineAmountEur: 150000000,
      legalBasis: 'Article 82 de la Llei francesa de protecció de dades',
      status: 'final',
    },
    sources: ['cnil-cookies-2021'],
  },
  {
    slug: 'google-historial-ubicacions-2022',
    title: 'Acord de 391,5 milions de dòlars per l’historial d’ubicacions',
    type: 'misuse',
    severity: 'high',
    apps: ['google-maps', 'google-search'],
    company: 'google',
    occurredAt: '2018-08-13',
    disclosedAt: '2022-11-14',
    description:
      'Quaranta fiscalies generals dels Estats Units van tancar un acord amb Google després de constatar que la companyia continuava recollint i utilitzant la ubicació de les persones usuàries encara que aquestes haguessin desactivat l’historial d’ubicacions, perquè el paràmetre d’activitat web i d’aplicacions la seguia registrant. L’acord obliga Google a millorar la informació sobre aquests controls.',
    affectedPeople: 'Persones usuàries de serveis de Google als Estats Units.',
    regulatory: {
      authority: 'Fiscalies generals de 40 estats dels Estats Units',
      fineAmountEur: 380000000,
      legalBasis: 'Legislació estatal de protecció de la persona consumidora',
      status: 'final',
    },
    sources: ['ag-google-location-2022'],
  },

  /* ── TikTok ── */
  {
    slug: 'tiktok-menors-2023',
    title: 'Sanció de 345 milions d’euros a TikTok pels comptes de menors',
    type: 'regulatory-fine',
    severity: 'high',
    apps: ['tiktok'],
    company: 'tiktok-technology',
    occurredAt: '2023-09-01',
    disclosedAt: '2023-09-15',
    description:
      'La investigació va concloure que els comptes de menors es creaven públics per defecte, que la funció d’aparellament amb un adult no comprovava el vincle familiar i que les finestres emergents empenyien cap a les opcions més obertes. La resolució identifica explícitament l’ús de patrons enganyosos en el disseny.',
    affectedPeople: 'Persones usuàries menors d’edat de TikTok a la Unió Europea.',
    regulatory: {
      authority: 'Data Protection Commission (Irlanda)',
      fineAmountEur: 345000000,
      legalBasis: 'Articles 5.1.c, 5.1.f, 24.1, 25.1, 25.2, 12.1 i 13.1.e del RGPD',
      status: 'final',
    },
    sources: ['dpc-tiktok-2023'],
  },
  {
    slug: 'tiktok-transferencies-xina-2025',
    title: 'Sanció de 530 milions d’euros a TikTok per les transferències de dades a la Xina',
    type: 'regulatory-fine',
    severity: 'critical',
    apps: ['tiktok'],
    company: 'tiktok-technology',
    occurredAt: '2025-04-30',
    disclosedAt: '2025-05-02',
    description:
      'L’autoritat irlandesa va concloure que TikTok no havia verificat ni garantit que les dades europees accessibles remotament des de la Xina tinguessin una protecció equivalent a la del RGPD, i que la informació facilitada a les persones usuàries no era prou transparent. Durant la investigació, TikTok va reconèixer que havia declarat incorrectament que no emmagatzemava dades europees en servidors xinesos.',
    affectedPeople: 'Totes les persones usuàries de TikTok a l’Espai Econòmic Europeu.',
    regulatory: {
      authority: 'Data Protection Commission (Irlanda)',
      fineAmountEur: 530000000,
      legalBasis: 'Articles 46.1 i 13.1.f del RGPD',
      status: 'appealed',
    },
    sources: ['dpc-tiktok-2025', 'edpb-tiktok-2025'],
  },

  /* ── LinkedIn ── */
  {
    slug: 'linkedin-publicitat-2024',
    title: 'Sanció de 310 milions d’euros a LinkedIn per la publicitat dirigida',
    type: 'regulatory-fine',
    severity: 'high',
    apps: ['linkedin'],
    company: 'linkedin-ireland',
    occurredAt: '2024-10-22',
    disclosedAt: '2024-10-24',
    description:
      'L’autoritat irlandesa va concloure que LinkedIn no tenia una base jurídica vàlida per tractar dades de primera i tercera part amb finalitats d’anàlisi de comportament i publicitat dirigida. Ni el consentiment obtingut era vàlid, ni l’interès legítim invocat prevalia sobre els drets de les persones usuàries, ni el tractament era necessari per executar el contracte.',
    affectedPeople: 'Persones usuàries de LinkedIn a la Unió Europea.',
    regulatory: {
      authority: 'Data Protection Commission (Irlanda)',
      fineAmountEur: 310000000,
      legalBasis: 'Articles 6.1.a, 6.1.b, 6.1.f, 5.1.a, 13 i 14 del RGPD',
      status: 'final',
    },
    sources: ['dpc-linkedin-2024'],
  },

  /* ── Amazon ── */
  {
    slug: 'amazon-cnpd-746m-anullada',
    title: 'Sanció de 746 milions d’euros a Amazon, anul·lada en apel·lació',
    type: 'regulatory-fine',
    severity: 'high',
    apps: ['amazon'],
    company: 'amazon-europe-core',
    occurredAt: '2021-07-16',
    disclosedAt: '2021-07-30',
    description:
      'L’autoritat luxemburguesa va imposar a Amazon la que llavors era la sanció més alta del RGPD, per la publicitat basada en el comportament sense consentiment vàlid. El juliol de 2025 el tribunal d’apel·lació de Luxemburg va anul·lar la resolució per defectes de motivació i per no haver concretat prou les mesures correctores exigides. L’anul·lació és processal: no valida les pràctiques, però deixa la sanció sense efecte.',
    affectedPeople: 'Persones usuàries de les botigues europees d’Amazon.',
    regulatory: {
      authority: 'Commission nationale pour la protection des données (Luxemburg)',
      fineAmountEur: 746000000,
      legalBasis: 'Articles 6 i 7 del RGPD',
      status: 'overturned',
    },
    sources: ['cnpd-amazon-annulled'],
  },

  /* ── X ── */
  {
    slug: 'twitter-tuits-protegits-2020',
    title: 'Sanció a Twitter per una fallada que va fer públics tuits protegits',
    type: 'breach',
    severity: 'medium',
    apps: ['x'],
    company: 'x-corp',
    occurredAt: '2018-12-26',
    disclosedAt: '2020-12-15',
    description:
      'Una errada al client d’Android va desactivar la protecció dels tuits de comptes privats quan la persona usuària canviava l’adreça electrònica associada, cosa que va fer públiques publicacions destinades només a seguidors autoritzats. La sanció, la primera de l’autoritat irlandesa contra una gran plataforma, va ser per no notificar la bretxa dins de termini ni documentar-la degudament.',
    affectedPeople: 'Persones usuàries de Twitter amb comptes protegits a Android.',
    regulatory: {
      authority: 'Data Protection Commission (Irlanda)',
      fineAmountEur: 450000,
      legalBasis: 'Articles 33.1 i 33.5 del RGPD',
      status: 'final',
    },
    sources: ['edpb-twitter-2020'],
  },
  {
    slug: 'x-grok-entrenament-2024',
    title: 'Ús de publicacions europees per entrenar Grok sense base jurídica clara',
    type: 'misuse',
    severity: 'high',
    apps: ['x'],
    company: 'x-corp',
    occurredAt: '2024-05-07',
    disclosedAt: '2024-08-08',
    description:
      'X va començar a utilitzar les publicacions de les persones usuàries europees per entrenar el model Grok amb una casella activada per defecte i sense informació prèvia adequada. L’autoritat irlandesa va acudir als tribunals i X es va comprometre de manera permanent a no fer servir les dades recollides entre el 7 de maig i l’1 d’agost de 2024, cosa que va posar fi al procediment.',
    affectedPeople: 'Persones usuàries d’X a la Unió Europea.',
    regulatory: {
      authority: 'Data Protection Commission (Irlanda)',
      legalBasis: 'Articles 6.1.f i 12 a 14 del RGPD',
      status: 'final',
    },
    sources: ['dpc-grok-2024'],
  },

  /* ── Netflix ── */
  {
    slug: 'netflix-informacio-2024',
    title: 'Sanció de 4,75 milions d’euros a Netflix per informació insuficient',
    type: 'regulatory-fine',
    severity: 'medium',
    apps: ['netflix'],
    company: 'netflix',
    occurredAt: '2019-01-01',
    disclosedAt: '2024-12-18',
    description:
      'L’autoritat neerlandesa va constatar que entre 2018 i 2020 la declaració de privadesa de Netflix no explicava prou clarament quines dades es recollien, amb quina finalitat, a qui es cedien, durant quant de temps es conservaven ni com es transferien fora de l’Espai Econòmic Europeu, i que les respostes a les sol·licituds d’accés eren incompletes.',
    affectedPeople: 'Persones abonades a Netflix als Països Baixos i, per extensió, a la Unió Europea.',
    regulatory: {
      authority: 'Autoriteit Persoonsgegevens (Països Baixos)',
      fineAmountEur: 4750000,
      legalBasis: 'Articles 12, 13 i 15 del RGPD',
      status: 'final',
    },
    sources: ['ap-netflix-2024'],
  },

  /* ── Spotify ── */
  {
    slug: 'spotify-acces-2023',
    title: 'Sanció a Spotify per informació insuficient en respondre l’exercici del dret d’accés',
    type: 'regulatory-fine',
    severity: 'low',
    apps: ['spotify'],
    company: 'spotify',
    occurredAt: '2023-06-12',
    disclosedAt: '2023-06-12',
    description:
      'L’autoritat sueca va concloure que, tot i que Spotify facilitava les dades sol·licitades, no explicava prou clarament com les utilitzava, cosa que impedia a les persones usuàries valorar si el tractament era lícit. L’import es va reduir posteriorment en via judicial.',
    affectedPeople: 'Persones usuàries de Spotify que van exercir el dret d’accés.',
    regulatory: {
      authority: 'Integritetsskyddsmyndigheten (Suècia)',
      fineAmountEur: 5000000,
      legalBasis: 'Article 15 del RGPD',
      status: 'overturned',
    },
    sources: ['imy-spotify-2023'],
  },

  /* ── Snap ── */
  {
    slug: 'snap-my-ai-2024',
    title: 'Requeriment de l’ICO a Snap per l’avaluació de riscos de My AI',
    type: 'regulatory-order',
    severity: 'low',
    apps: ['snapchat'],
    company: 'snap',
    occurredAt: '2023-10-06',
    disclosedAt: '2024-05-21',
    description:
      'L’autoritat britànica va emetre un avís preliminar en considerar que Snap havia desplegat l’assistent conversacional My AI sense avaluar-ne adequadament els riscos per a la privadesa, especialment pel que fa a menors. Snap va revisar l’avaluació d’impacte i l’ICO va tancar la investigació sense sanció.',
    affectedPeople: 'Persones usuàries de Snapchat al Regne Unit, incloses menors d’edat.',
    regulatory: {
      authority: 'Information Commissioner’s Office (Regne Unit)',
      legalBasis: 'Article 35 del RGPD britànic',
      status: 'final',
    },
    sources: ['ico-snap-myai-2024'],
  },

  /* ── Reddit ── */
  {
    slug: 'reddit-phishing-2023',
    title: 'Intrusió a sistemes interns de Reddit mitjançant phishing',
    type: 'breach',
    severity: 'medium',
    apps: ['reddit'],
    company: 'reddit',
    occurredAt: '2023-02-05',
    disclosedAt: '2023-02-09',
    description:
      'Un atac dirigit contra la plantilla, amb un lloc que suplantava la intranet corporativa, va permetre accedir a documentació interna, codi font, sistemes interns i dades de contacte de treballadors actuals i antics, i informació limitada d’anunciants. Reddit va afirmar que no hi va haver accés a contrasenyes ni a dades de comptes de persones usuàries.',
    affectedPeople: 'Personal de Reddit i anunciants; segons l’empresa, cap compte de persona usuària.',
    sources: ['techcrunch-reddit-2023'],
  },

  /* ── Glovo ── */
  {
    slug: 'glovo-aepd-2024',
    title: 'Sanció de 550.000 euros a Glovo per infraccions en el tractament de dades',
    type: 'regulatory-fine',
    severity: 'medium',
    apps: ['glovo'],
    company: 'glovo',
    occurredAt: '2024-02-01',
    disclosedAt: '2024-02-02',
    description:
      'L’Agència Espanyola de Protecció de Dades va sancionar Glovo per infringir les obligacions d’informació, de protecció de dades des del disseny i per defecte i de seguretat del tractament en relació amb les dades de les persones repartidores. El cas mostra que una plataforma tracta dades de col·lectius diferents amb graus de protecció molt desiguals.',
    affectedPeople: 'Persones repartidores de Glovo a l’Estat espanyol.',
    regulatory: {
      authority: 'Agencia Española de Protección de Datos',
      fineAmountEur: 550000,
      legalBasis: 'Articles 13, 25 i 32 del RGPD',
      status: 'final',
    },
    sources: ['aepd-glovo-2024'],
  },

  /* ── Signal ── */
  {
    slug: 'signal-twilio-2022',
    title: 'Exposició de 1.900 números de telèfon de Signal per un atac al proveïdor d’SMS',
    type: 'breach',
    severity: 'low',
    apps: ['signal'],
    company: 'signal-foundation',
    occurredAt: '2022-08-04',
    disclosedAt: '2022-08-15',
    description:
      'Un atac de phishing contra el personal de Twilio, el proveïdor que envia els codis de verificació de Signal, va permetre accedir als números de telèfon i als codis d’uns 1.900 comptes, i registrar tres números en un dispositiu de l’atacant. El disseny del servei va limitar-ne l’abast: no hi havia històric de missatges, ni llistes de contactes, ni dades de perfil a exposar, perquè Signal no les desa als seus servidors.',
    affectedPeople: 'Uns 1.900 comptes de Signal.',
    sources: ['techcrunch-signal-twilio-2022'],
  },

  /* ── DuckDuckGo ── */
  {
    slug: 'duckduckgo-microsoft-2022',
    title: 'Excepció per als rastrejadors de Microsoft al navegador de DuckDuckGo',
    type: 'misuse',
    severity: 'low',
    apps: ['duckduckgo'],
    company: 'duckduckgo',
    occurredAt: '2022-05-23',
    disclosedAt: '2022-05-24',
    description:
      'Una anàlisi independent va revelar que el navegador de DuckDuckGo bloquejava els rastrejadors de Google i de Facebook però permetia carregar els de Microsoft en llocs de tercers, per una clàusula de l’acord de sindicació de cerca amb Bing. L’empresa ho va reconèixer públicament i mesos després va anunciar que ampliava el bloqueig també als dominis de Microsoft. És un cas útil perquè mostra que una promesa de privadesa pot tenir excepcions contractuals no visibles.',
    affectedPeople: 'Persones usuàries del navegador de DuckDuckGo.',
    sources: ['bleeping-ddg-microsoft-2022'],
  },
]
