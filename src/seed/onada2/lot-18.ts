import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 18 de la segona onada: educació (Praktika, Wuolah i Kahoot!) i
 * entreteniment (BlinkDrama, Ticketmaster, Splash, ReelShort, Disney+,
 * NetShort i HBO Max).
 *
 * El lot posa de costat dos extrems. D’una banda, Kahoot! documenta
 * subencarregats, certificacions i un informe de transparència, i declara que
 * no fa publicitat ni entrena models amb les dades de les aules. De l’altra,
 * les aplicacions de microdrames verticals —BlinkDrama, ReelShort i
 * NetShort— són societats de Hong Kong, els Estats Units i Singapur sense
 * representant a la Unió Europea identificat, amb polítiques breus i sense
 * cap manera d’eliminar el compte que no sigui escriure un correu.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/* ═══════════════════════════ Praktika ═══════════════════════════ */

const praktika: AppSeed = {
  slug: 'praktika',
  name: 'Praktika – Habla inglés ahora',
  company: 'praktika-ai',
  categories: ['educacio', 'assistents-d-ia'],
  tagline:
    'Les gravacions de veu i les transcripcions de les classes serveixen per afinar els models, i la base legal que s’hi invoca és l’interès legítim',
  summary:
    'Praktika és un tutor d’idiomes amb avatars amb qui es parla en veu alta. La política diu explícitament que analitza les gravacions i les transcripcions de les converses amb el tutor per afinar els seus models d’intel·ligència artificial, i ho fa emparant-se en l’interès legítim, no en el consentiment, sense cap opció d’exclusió descrita. L’empresa responsable és una societat de Delaware sense representant a la Unió Europea identificat, i l’apartat de la política dedicat a Califòrnia declara que no recull informació biomètrica tot i tractar la veu.',
  platforms: ['ios', 'android'],
  businessModel: 'subscription',
  jurisdiction: 'Estats Units (Delaware)',
  userBase: 'Desenes de milions de descàrregues declarades per l’empresa; no hi ha xifres auditades',
  links: {
    website: 'https://praktika.ai/',
    privacyPolicy: 'https://praktika.ai/privacy',
    appStore: appStore('1624701477'),
  },
  accountRequired: f('yes', 'official', ['praktika-privacy-policy'], 'Cal crear un perfil amb correu electrònic, llengua materna, nivell i objectius d’aprenentatge.'),
  openSource: f('no', 'official', ['praktika-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'En una classe de conversa es grava la teva veu parlant de la feina, la família o els plans. Aquestes gravacions i les seves transcripcions es desen i es fan servir per entrenar el model que després parla amb totes les persones usuàries.',
  dataCollection: [
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['praktika-privacy-policy', 'praktika-app-store'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['praktika-privacy-policy', 'praktika-app-store'] }),
    row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['praktika-privacy-policy'], note: 'Forma part del perfil que es demana en el registre.' }),
    row('llengua', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['praktika-privacy-policy'], note: 'Llengua materna, nivell declarat i objectius d’aprenentatge.' }),
    row('veu-i-audio', 'yes', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['praktika-privacy-policy', 'praktika-app-store'], note: 'L’etiqueta de l’App Store declara les dades d’àudio com a «no vinculades» amb la persona, cosa difícil de quadrar amb un servei de compte i progrés personalitzat.' }),
    row('contingut-de-missatges', 'yes', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['praktika-privacy-policy'], note: 'Transcripcions de les converses amb el tutor.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['praktika-privacy-policy'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['praktika-app-store'] }),
    row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['praktika-privacy-policy', 'praktika-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['praktika-privacy-policy'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['praktika-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['praktika-app-store'] }),
    row('dades-de-pagament', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['praktika-privacy-policy'], note: 'La subscripció es cobra per l’App Store o Google Play; l’empresa en rep l’estat, no les dades de la targeta.' }),
    row('dades-biometriques', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', sources: ['praktika-privacy-policy'], note: 'La política tracta gravacions de veu però l’apartat de Califòrnia declara que no recull informació biomètrica. La contradicció no queda resolta.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['praktika-app-store', 'praktika-privacy-policy'], 'L’etiqueta de l’App Store declara identificadors i dades d’ús utilitzats per rastrejar, i la política té un apartat de publicitat conductual.'),
    advertisingIdentifiers: f('yes', 'official', ['praktika-app-store']),
    thirdPartyTrackersPresent: f('yes', 'official', ['praktika-privacy-policy'], 'La política anomena Google Ads, Meta, AdRoll, AppNexus i TikTok com a socis de publicitat i remàrqueting.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['praktika-privacy-policy'], 'Apartat «Behavioral Advertising», amb remàrqueting a les plataformes publicitàries esmentades.'),
    profiling: f('yes', 'official', ['praktika-privacy-policy'], 'El perfilat es descriu en el context de la publicitat conductual i de la personalització de les classes.'),
    aiTraining: f('yes', 'official', ['praktika-privacy-policy'], 'La política diu que analitza les gravacions i les transcripcions de les converses amb el tutor per afinar els models, i que ho fa perquè és necessari per als seus interessos legítims. No descriu cap manera d’oposar-s’hi dins de l’aplicació.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['praktika-privacy-policy'], 'Proveïdors tecnològics, plataformes de pagament i socis publicitaris.'),
    intraGroupSharing: unknown('No consta cap estructura de grup ni cap filial a la política.'),
    dataBrokerSales: unknown('La política no esmenta la venda de dades a intermediaris.'),
    internationalTransfers: f('yes', 'official', ['praktika-privacy-policy'], 'Taula de transferències amb clàusules contractuals tipus i, per a receptors certificats, el Marc de Privadesa de Dades UE-EUA.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['praktika-privacy-policy'], 'La política només diu que conserva les dades «el temps necessari per a les finalitats descrites». No fixa cap termini, tampoc per a les gravacions de veu.'),
    dataAfterDeletion: unknown('No consta què passa amb les gravacions i les transcripcions ja incorporades a l’ajust dels models després d’eliminar el compte.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['praktika-delete-account']),
    selfService: f('yes', 'official', ['praktika-delete-account'], 'Hi ha un botó «Delete Account» dins del perfil.'),
    difficulty: 'easy',
    steps: [
      'Obre l’aplicació i entra a la pestanya de perfil.',
      'Tria «Delete Account» i confirma: l’acció és permanent i es perd tot el progrés.',
      'Cancel·la a banda la subscripció des de l’App Store o Google Play, perquè eliminar el compte no atura el cobrament.',
    ],
    obstacles:
      'Desinstal·lar l’aplicació no elimina el compte i eliminar el compte no cancel·la la subscripció: són tres accions separades i la documentació ho adverteix expressament.',
    dataRetained: 'No consta cap termini d’esborrament efectiu als servidors.',
    sources: ['praktika-delete-account', 'praktika-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['praktika-privacy-policy'], 'Es reconeix la portabilitat en format estructurat, però només per petició per correu; no hi ha cap eina d’autoservei.', {
      url: 'mailto:support@praktika.ai',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['praktika-privacy-policy'], 'L’únic canal és el correu d’atenció general; no hi ha delegat de protecció de dades ni representant a la Unió Europea identificats.', {
      url: 'mailto:support@praktika.ai',
    }),
  },
  controls: {
    adPersonalizationOptOut: unknown('La política remet als controls del dispositiu, però no descriu cap interruptor propi dins de l’aplicació.'),
    telemetryOptOut: unknown('No consta cap control per desactivar l’analítica.'),
    granularControls: unknown('No consta cap panell de privadesa amb controls per finalitat.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', [], 'Interpretació pròpia: fer servir la veu de les classes per afinar models sota interès legítim, sense cap casella ni cap manera visible d’oposar-s’hi, trasllada a la persona usuària la càrrega d’exercir un dret d’oposició que no s’explica enlloc de la interfície.'),
  },
  security: {
    e2ee: na('El servei ha de processar la veu i les transcripcions per generar la resposta del tutor, de manera que el xifratge d’extrem a extrem no hi és aplicable.'),
    transportEncryption: f('yes', 'official', ['praktika-data-help']),
    atRestEncryption: f('partial', 'official', ['praktika-data-help'], 'El centre d’ajuda diu que la informació personal «està xifrada i emmagatzemada de manera segura», sense detallar cap mecanisme.'),
    mfa: unknown('No consta cap opció de verificació en dos passos.'),
    independentAudits: unknown('No consten certificacions ISO 27001 o SOC 2 ni auditories publicades.'),
    bugBounty: unknown('No consta cap programa de recompenses.'),
    vulnerabilityDisclosure: f('no', 'editorial', [], 'Comprovació pròpia del 22 de setembre de 2026: https://praktika.ai/.well-known/security.txt retorna un error 404 i no hi ha cap pàgina de divulgació de vulnerabilitats.'),
  },
  alternatives: [
    {
      app: 'duolingo',
      comparability: 'partial',
      rationale:
        'Cobreix el mateix objectiu d’aprendre un idioma amb exercicis diaris i, en el nucli del producte, no depèn de gravar la veu de cada conversa.',
      tradeOffs: 'La pràctica de conversa lliure amb un tutor és molt més limitada.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Tres afirmacions públiques de l’empresa no encaixen entre elles: el centre d’ajuda diu que mai no comparteix dades amb tercers tret de proveïdors mínims, la política enumera cinc plataformes publicitàries, i la fitxa de Google Play declara que no comparteix dades amb altres empreses. La fitxa recull la versió de la política, que és el document vinculant, i deixa constància de la contradicció.',
    openQuestions: [
      'Quant de temps es conserven les gravacions de veu i les transcripcions?',
      'Quins proveïdors processen l’àudio i la síntesi de veu? La política no publica cap llista de subencarregats.',
      'Com s’exerceix, a la pràctica, l’oposició a l’ús de la veu per afinar els models?',
    ],
  },
}

/* ═══════════════════════════ Wuolah ═══════════════════════════ */

const wuolah: AppSeed = {
  slug: 'wuolah',
  name: 'Wuolah: Apuntes & Educación',
  company: 'wuolads',
  categories: ['educacio'],
  tagline:
    'Apunts gratuïts finançats amb publicitat inserida als PDF, amb una política de privadesa de set mil caràcters que cita malament el RGPD i deixa el delegat de protecció de dades sense enllaç',
  summary:
    'Wuolah és una plataforma sevillana on l’estudiantat puja i baixa apunts universitaris; el model es basa a incrustar publicitat dins dels PDF i cobrar per descarregar-los nets. La política de privadesa vigent és molt breu, es refereix al «Reglamento UE 2016/671» (el RGPD és el 2016/679), conserva un marcador d’edició sense netejar i remet a les dades del delegat de protecció de dades amb un «aquí» que no enllaça enlloc. No hi consta cap termini de conservació, cap transferència internacional ni el dret a reclamar davant l’Agència Espanyola de Protecció de Dades.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Espanya',
  userBase: 'Centenars de milers d’estudiants universitaris a Espanya',
  links: {
    website: 'https://wuolah.com/',
    privacyPolicy: 'https://wuolah.com/privacy',
    appStore: appStore('1240782595'),
  },
  accountRequired: f('yes', 'official', ['wuolah-privacy-policy'], 'Cal registrar-se per baixar i pujar documents; el registre es pot fer amb Facebook o Google per omplir el formulari.'),
  openSource: f('no', 'official', ['wuolah-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Els apunts que baixes diuen quina carrera fas, a quina universitat, quines assignatures se’t resisteixen i en quin moment del curs estudies. La política declara com a finalitat «la determinación de tus gustos y preferencias» i promocions personalitzades amb terceres empreses, sense anomenar-ne cap.',
  dataCollection: [
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['wuolah-privacy-policy', 'wuolah-app-store'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['wuolah-privacy-policy'] }),
    row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['wuolah-app-store'], note: 'Els apunts que es pugen i es baixen. L’etiqueta de l’App Store els declara com a contingut de la persona usuària vinculat a la seva identitat.' }),
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['wuolah-app-store'], note: 'Els apunts es pugen sovint com a fotografies de fulls.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['wuolah-privacy-policy'], note: 'La política declara com a finalitat estadística «la determinación de tus gustos y preferencias».' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['wuolah-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['wuolah-app-store'] }),
    row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['wuolah-app-store'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['wuolah-cookies'], note: 'La política de galetes admet galetes de socis publicitaris però no n’identifica cap.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['wuolah-app-store'] }),
    row('nivell-formatiu', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', sources: ['wuolah-privacy-policy'], note: 'El servei s’organitza per universitat, grau i assignatura, però la política no detalla quines dades acadèmiques desa del perfil.' }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['wuolah-privacy-policy'], note: 'Només per a qui contracta un pla de descàrregues sense publicitat.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['wuolah-app-store'], 'L’etiqueta de l’App Store declara identificadors i dades d’ús utilitzats per rastrejar en aplicacions i llocs web d’altres empreses.'),
    advertisingIdentifiers: f('yes', 'official', ['wuolah-app-store']),
    thirdPartyTrackersPresent: f('yes', 'official', ['wuolah-cookies', 'wuolah-app-store'], 'La política de galetes reconeix que «nuestros socios pueden usar cookies» per mesurar els anuncis, sense dir quins són.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['wuolah-privacy-policy'], 'Entre les finalitats hi ha «facilitarte promociones personalizadas con terceras empresas» i publicitat de productes de tercers ajustada als interessos.'),
    profiling: f('yes', 'official', ['wuolah-privacy-policy'], 'La política declara la determinació de gustos i preferències com a finalitat estadística.'),
    aiTraining: unknown('La política no diu res sobre l’ús dels apunts per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['wuolah-privacy-policy'], 'Es parla de «proveedores de servicios» i «empresas colaboradoras» sense identificar-ne cap.'),
    intraGroupSharing: unknown('No consta cap estructura de grup.'),
    dataBrokerSales: unknown('La política no esmenta la venda de dades.'),
    internationalTransfers: unknown('La política no conté cap apartat de transferències internacionals, malgrat que declara publicitat de tercers i analítica.'),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['wuolah-privacy-policy'], 'La política només invoca el principi de limitació del termini; no en fixa cap.'),
    dataAfterDeletion: unknown('No consta què passa amb els documents ja pujats quan s’elimina el compte.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['wuolah-privacy-policy', 'wuolah-suport-baixa']),
    selfService: f('yes', 'official', ['wuolah-suport-baixa'], 'El compte oficial de suport indica que l’opció és dins de la configuració del perfil. No hi ha cap article d’ajuda vigent que ho documenti.'),
    difficulty: 'medium',
    steps: [
      'Entra al teu perfil des de l’aplicació o des del web.',
      'Obre la configuració del compte i tria «Eliminar cuenta».',
      'Si l’opció no apareix o no funciona, escriu a info@wuolah.com invocant el dret de supressió de l’article 17 del RGPD.',
    ],
    obstacles:
      'La documentació pública de la baixa es redueix a un missatge del compte de suport del 2018. La política afegeix que «obtener copias puede generar costes administrativos», una advertència poc habitual en l’exercici de drets.',
    dataRetained: 'No consta. En particular, no es diu si els apunts pujats es retiren o es queden publicats.',
    sources: ['wuolah-suport-baixa', 'wuolah-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['wuolah-privacy-policy'], 'Es reconeix la portabilitat, però només per correu i amb l’advertiment de possibles costos administratius per a còpies addicionals.', {
      url: 'mailto:info@wuolah.com',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['wuolah-privacy-policy'], 'La política diu que es poden consultar les dades del delegat de protecció de dades «aquí», però el text no porta cap enllaç, de manera que el canal especialitzat no és accessible. Tampoc no s’informa del dret a reclamar davant de l’AEPD.', {
      url: 'mailto:info@wuolah.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: unknown('No consta cap control per desactivar la publicitat personalitzada més enllà del panell de galetes del web.'),
    telemetryOptOut: unknown('No consta cap control per desactivar l’analítica dins de l’aplicació.'),
    granularControls: unknown('No consta cap panell de privadesa amb controls per finalitat.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', [], 'Interpretació pròpia: el producte gratuït consisteix a lliurar un document deliberadament degradat amb anuncis incrustats, i la manera de recuperar-lo net és pagar. És una pressió comercial legítima, però converteix la publicitat en una part inseparable del material d’estudi.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description:
          'La política remet a les dades del delegat de protecció de dades amb un «aquí» que no enllaça enlloc, cita el RGPD amb un número de reglament equivocat i conserva un marcador d’edició sense netejar.',
        sources: ['wuolah-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: na('El servei distribueix documents públics entre persones usuàries; el xifratge d’extrem a extrem no hi és aplicable.'),
    transportEncryption: f('yes', 'official', ['wuolah-play-data-safety']),
    atRestEncryption: unknown('No consta informació sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No consta cap opció de verificació en dos passos.'),
    independentAudits: unknown('No consten certificacions ni auditories publicades.'),
    bugBounty: unknown('No consta cap programa de recompenses.'),
    vulnerabilityDisclosure: f('no', 'editorial', [], 'Comprovació pròpia del 22 de setembre de 2026: https://wuolah.com/.well-known/security.txt retorna un error 403 i no hi ha cap pàgina de contacte de seguretat.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'No hem localitzat cap resolució sancionadora de l’AEPD contra Wuolads, S.L. El conflicte públic documentat amb universitats (la Universitat de Saragossa va exigir retirar material docent) és de propietat intel·lectual, no de protecció de dades, i per això no s’ha registrat com a incident de privadesa.',
    openQuestions: [
      'Qui és el delegat de protecció de dades i com s’hi contacta?',
      'Quines xarxes publicitàries hi ha darrere dels anuncis inserits als PDF i de les galetes de socis?',
      'Els apunts pujats es retiren quan s’elimina el compte?',
    ],
  },
}

/* ═══════════════════════════ Kahoot! ═══════════════════════════ */

const kahoot: AppSeed = {
  slug: 'kahoot',
  name: 'Kahoot!',
  company: 'kahoot-as',
  categories: ['educacio'],
  tagline:
    'Declara per escrit que no hi ha publicitat de tercers ni entrenament de models amb les dades de la plataforma, i publica subencarregats, certificacions i informe de transparència',
  summary:
    'La política de Kahoot! diu que el servei no inclou cap publicitat de tercers ni publicitat dirigida, i que no fa servir les dades personals recollides a la plataforma per entrenar ni afinar grans models de llenguatge. L’etiqueta de l’App Store ho confirma indirectament, perquè no declara cap dada utilitzada per rastrejar. Sí que declara l’historial de cerca i de navegació vinculats a la persona amb finalitats d’analítica, el punt més discutible d’una fitxa ben documentada.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Noruega',
  userBase: 'Centenars de milions de participants anuals, sobretot en entorns escolars',
  links: {
    website: 'https://kahoot.com/',
    privacyPolicy: 'https://trust.kahoot.com/privacy-policy/',
    privacyCenter: 'https://trust.kahoot.com/',
    appStore: appStore('1131203560'),
  },
  accountRequired: f('partial', 'official', ['kahoot-privacy-policy'], 'Cal compte per crear i allotjar qüestionaris, però per participar-hi n’hi ha prou amb un sobrenom, sense compte ni adreça electrònica.'),
  openSource: f('no', 'official', ['kahoot-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Un qüestionari d’aula revela què sap i què no sap cada alumne, i a quina velocitat respon. Kahoot! permet jugar amb sobrenom i manté les dades de rendiment desvinculades tret que el centre activi l’identificador de jugador.',
  dataCollection: [
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['kahoot-privacy-policy', 'kahoot-app-store'], note: 'Als comptes de menors només es fa servir per recordar la contrasenya i es converteix immediatament i permanentment en un resum criptogràfic.' }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['kahoot-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['kahoot-app-store'], note: 'Per a l’alumnat, el sobrenom pot ser l’única identificació si el centre no activa l’identificador de jugador.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['kahoot-app-store', 'kahoot-privacy-policy'], note: 'Inclou l’activitat de joc: respostes, encerts i temps de reacció.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['kahoot-app-store'], note: 'L’etiqueta de l’App Store el declara vinculat a la persona amb finalitats d’analítica.' }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['kahoot-app-store'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['kahoot-app-store'], note: 'Imatges afegides als qüestionaris creats.' }),
    row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['kahoot-app-store'] }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['kahoot-privacy-policy'], note: 'Només per a les subscripcions de pagament.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['kahoot-app-store'] }),
    row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['kahoot-privacy-policy', 'kahoot-app-store'], note: 'La política descarta la publicitat de tercers i l’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['kahoot-privacy-policy', 'kahoot-app-store'], 'La política diu que el servei, l’aplicació i el web no inclouen cap publicitat de tercers ni publicitat dirigida, i l’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['kahoot-app-store']),
    thirdPartyTrackersPresent: f('no', 'official', ['kahoot-privacy-policy']),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['kahoot-privacy-policy'], 'Compromís escrit a la política: cap publicitat de tercers ni dirigida.'),
    profiling: f('partial', 'official', ['kahoot-privacy-policy'], 'Hi ha personalització del producte i recomanacions de contingut, però no perfilat publicitari.'),
    aiTraining: f('no', 'official', ['kahoot-privacy-policy'], 'La política afirma que Kahoot! no fa servir les dades personals recollides a la plataforma per entrenar ni afinar grans models de llenguatge.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['kahoot-subprocessors'], 'Només encarregats del tractament, amb llista pública: Amazon Web Services, Aiven, Google Cloud, OVH, Hetzner, Cloudflare, Zendesk i SendGrid.'),
    intraGroupSharing: f('yes', 'official', ['kahoot-privacy-policy', 'kahoot-adquisicio'], 'Les filials de Kahoot! AS actuen com a corresponsables. Des del gener de 2024 el grup és propietat d’un consorci d’inversió liderat per Goldman Sachs Asset Management.'),
    dataBrokerSales: f('no', 'official', ['kahoot-privacy-policy'], 'La política descarta la publicitat dirigida i no preveu cap cessió comercial de dades.'),
    internationalTransfers: f('yes', 'official', ['kahoot-privacy-policy', 'kahoot-security-measures'], 'Marc de Privadesa de Dades UE-EUA, clàusules contractuals tipus o decisions d’adequació segons el receptor.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: f('yes', 'official', ['kahoot-transparency'], 'Publica un informe de transparència general i els informes anuals del Reglament de Serveis Digitals. No hem trobat, en canvi, un informe específic de requeriments governamentals d’accés a dades.', {
      url: 'https://trust.kahoot.com/transparency/',
    }),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['kahoot-privacy-policy'], 'S’expliquen els criteris (durada de la relació i terminis legals), però no hi ha terminis numèrics per categoria.'),
    dataAfterDeletion: f('partial', 'official', ['kahoot-delete-account'], 'Es conserven els kahoots públics que s’han jugat més de cinc-centes vegades i el contingut públic dels perfils verificats, tret que s’esborrin manualment abans de donar-se de baixa.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['kahoot-delete-account']),
    selfService: f('yes', 'official', ['kahoot-delete-account'], 'Opció dins de la configuració del perfil, amb un període de gràcia d’uns cinc dies per cancel·lar l’esborrat.'),
    directUrl: 'https://support.kahoot.com/hc/en-us/articles/115001597287-How-to-delete-my-account',
    difficulty: 'easy',
    waitingPeriodDays: 5,
    steps: [
      'Esborra manualment els kahoots públics que no vulguis que quedin al catàleg.',
      'Obre l’avatar, entra a «Profile settings» i tria «Delete account».',
      'Indica el motiu i confirma l’eliminació.',
      'Durant uns cinc dies naturals pots revertir-ho des de «Having trouble logging in?» i la pestanya «Cancel deletion».',
      'Cancel·la a banda la subscripció de pagament, si en tens.',
    ],
    obstacles:
      'Els comptes gestionats per una organització o un centre educatiu poden no tenir disponible l’opció d’eliminació.',
    dataRetained: 'Kahoots públics amb més de cinc-centes partides i contingut públic de creadors verificats.',
    sources: ['kahoot-delete-account', 'kahoot-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['kahoot-privacy-policy'], 'Els drets d’accés i portabilitat es reconeixen i s’exerceixen escrivint a l’adreça de privadesa; no hi ha una eina d’exportació d’autoservei documentada.', {
      url: 'mailto:privacy@kahoot.com',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['kahoot-privacy-policy'], 'Canal de privadesa explícit a la política.', {
      url: 'mailto:privacy@kahoot.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: na('No hi ha publicitat personalitzada al servei.'),
    telemetryOptOut: unknown('No consta cap control per desactivar l’analítica d’ús.'),
    granularControls: f('partial', 'official', ['kahoot-privacy-policy'], 'El centre educatiu decideix si activa l’identificador de jugador, que és el que lliga el rendiment amb una persona concreta; la persona participant no té aquest control.'),
    defaultPosture: 'protective',
    darkPatterns: unknown('No hem identificat patrons enganyosos documentats.'),
  },
  security: {
    e2ee: na('El contingut dels qüestionaris és compartit dins d’una aula; el xifratge d’extrem a extrem no hi és aplicable.'),
    transportEncryption: f('yes', 'official', ['kahoot-security-measures'], 'TLS 1.2 o superior.'),
    atRestEncryption: f('yes', 'official', ['kahoot-security-measures'], 'AES-256 o equivalent.'),
    mfa: f('partial', 'official', ['kahoot-security-measures'], 'La verificació en dos passos s’ofereix on està disponible, però no és general per a tots els plans.'),
    independentAudits: f('yes', 'official', ['kahoot-trust-center', 'kahoot-security-measures'], 'Certificacions ISO/IEC 27001:2022 i SOC 2 Type 2, i proves de penetració contínues per un tercer independent amb informe anual.'),
    bugBounty: f('partial', 'official', ['kahoot-disclosure-policy'], 'Hi ha una política de divulgació responsable amb reconeixement públic, però no consta cap recompensa econòmica.', {
      url: 'https://kahoot.com/disclosure-policy.txt',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['kahoot-security-txt', 'kahoot-disclosure-policy'], 'Fitxer security.txt vigent amb adreça de contacte i clau PGP.'),
  },
  alternatives: [
    {
      app: 'google-classroom',
      comparability: 'complementary',
      rationale:
        'Cobreix la gestió de l’aula i el lliurament de tasques, no el qüestionari en directe; en centres que ja el fan servir pot evitar afegir un proveïdor més.',
      tradeOffs: 'El responsable passa a ser Google i el model de dades del centre és molt més ampli.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Kahoot! AS va deixar de cotitzar a la borsa d’Oslo el 23 de gener de 2024 després de l’adquisició per un consorci liderat per Goldman Sachs Asset Management, amb General Atlantic i KIRKBI. El canvi de propietat no ha alterat, de moment, els compromisos escrits sobre publicitat i entrenament de models. No hem localitzat cap sanció ni cap bretxa notificada.',
    openQuestions: [
      'Per què l’etiqueta de l’App Store declara historial de cerca i de navegació vinculats a la persona si la política no els esmenta?',
      'Quins terminis concrets de conservació s’apliquen a les dades de rendiment de l’alumnat?',
    ],
  },
}

/* ═══════════════════════════ BlinkDrama ═══════════════════════════ */

const blinkdrama: AppSeed = {
  slug: 'blinkdrama',
  name: 'BlinkDrama - Dramas y series',
  company: 'atlas-ventures-culture-technology',
  categories: ['video-i-streaming'],
  tagline:
    'Microdrames verticals d’una societat de Hong Kong, sense representant a la Unió Europea i amb la baixa només per correu electrònic',
  summary:
    'BlinkDrama serveix sèries verticals d’un minut que es paguen amb monedes virtuals. El responsable és Atlas Ventures Culture & Technology Limited, amb domicili a Sheung Wan (Hong Kong), i la política no identifica cap representant a la Unió Europea ni enumera les bases legals del RGPD. L’etiqueta de l’App Store declara l’identificador de dispositiu com a dada utilitzada per rastrejar, i la política no anomena cap dels socis publicitaris que hi ha darrere.',
  platforms: ['ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Hong Kong',
  userBase: 'Desconegut',
  links: {
    website: 'https://www.blinkdrama.life/',
    privacyPolicy: 'https://www.blinkdrama.life/Privacy-Policy.html',
    appStore: appStore('6768593043'),
  },
  accountRequired: f('partial', 'official', ['blinkdrama-privacy-policy'], 'Es pot mirar contingut sense compte, però cal registrar-se per conservar les monedes comprades i el progrés.'),
  openSource: f('no', 'official', ['blinkdrama-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'El catàleg de microdrames és molt segmentat (infidelitats, embarassos, venjances, milionaris), de manera que l’historial de visualització i les cerques revelen força coses sobre la situació personal de qui mira.',
  dataCollection: [
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['blinkdrama-privacy-policy'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['blinkdrama-privacy-policy'] }),
    row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['blinkdrama-privacy-policy'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['blinkdrama-app-store', 'blinkdrama-privacy-policy'], note: 'És l’única dada que l’etiqueta de l’App Store declara com a utilitzada per rastrejar, i alhora la declara vinculada a la persona per a publicitat de tercers.' }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['blinkdrama-privacy-policy'], note: 'La política esmenta GAID i IDFA.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['blinkdrama-privacy-policy'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['blinkdrama-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'recomanacions-algoritmiques'], sources: ['blinkdrama-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'recomanacions-algoritmiques'], sources: ['blinkdrama-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['blinkdrama-privacy-policy'], note: 'Compres de monedes virtuals i registres de transaccions.' }),
    row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal'], sources: ['blinkdrama-privacy-policy'], note: 'La política classifica l’edat, el gènere i l’adreça com a «Specified Protected Data».' }),
    row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['blinkdrama-privacy-policy'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['blinkdrama-privacy-policy'], note: 'La política esmenta galetes i empremtes de navegador.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['blinkdrama-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['blinkdrama-app-store'], 'L’etiqueta de l’App Store declara l’identificador de dispositiu com a dada utilitzada per rastrejar en aplicacions i llocs web d’altres empreses.'),
    advertisingIdentifiers: f('yes', 'official', ['blinkdrama-privacy-policy', 'blinkdrama-app-store']),
    thirdPartyTrackersPresent: f('yes', 'official', ['blinkdrama-app-store'], 'La categoria «publicitat de tercers» de l’etiqueta ho confirma, però la política no anomena cap soci concret.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['blinkdrama-app-store', 'blinkdrama-privacy-policy'], 'La política diu que sense consentiment no facilitarà dades identificables a servidors publicitaris de tercers, però l’etiqueta de l’App Store declara l’identificador de dispositiu vinculat a la persona per a publicitat de tercers.'),
    profiling: f('partial', 'official', ['blinkdrama-app-store'], 'Personalització del contingut a partir de l’historial de cerca, la ubicació aproximada i l’activitat.'),
    aiTraining: unknown('La política no diu res sobre l’ús de dades per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['blinkdrama-privacy-policy'], 'Es parla de «third-party partners» i «business partners» sense identificar-ne cap.'),
    intraGroupSharing: unknown('No consta l’estructura del grup Atlas Ventures.'),
    dataBrokerSales: unknown('La política no esmenta la venda de dades.'),
    internationalTransfers: f('yes', 'official', ['blinkdrama-privacy-policy'], 'La política reconeix transferències als Estats Units i a altres països, però no indica cap mecanisme de garantia del capítol V del RGPD.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['blinkdrama-privacy-policy'], 'Només la fórmula genèrica del «temps necessari» i dels «propòsits comercials legítims».'),
    dataAfterDeletion: f('partial', 'official', ['blinkdrama-privacy-policy'], 'La política diu que després d’eliminar el compte es poden conservar dades agregades i anonimitzades.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['blinkdrama-privacy-policy']),
    selfService: f('no', 'official', ['blinkdrama-privacy-policy'], 'L’única via documentada és escriure a service@blinkdrama.life; la política no descriu cap opció dins de l’aplicació.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Escriu a service@blinkdrama.life demanant l’eliminació del compte i de les dades associades.',
      'Invoca l’article 17 del RGPD i demana confirmació escrita de l’esborrat.',
      'Cancel·la a banda qualsevol subscripció activa des de l’App Store.',
    ],
    obstacles:
      'No hi ha cap formulari ni cap botó de baixa, ni cap termini compromès de resposta. Tampoc no hi ha representant a la Unió Europea a qui adreçar-se si el correu no obté resposta.',
    dataRetained: 'Dades agregades i anonimitzades, segons la política.',
    sources: ['blinkdrama-privacy-policy'],
  },
  userRights: {
    dataExport: unknown('La política esmenta drets d’accés i revisió, però no descriu cap mecanisme de portabilitat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['blinkdrama-privacy-policy'], 'Els drets es reconeixen de manera genèrica «segons la normativa aplicable» i l’únic canal és una adreça de correu de suport.', {
      url: 'mailto:service@blinkdrama.life',
    }),
  },
  controls: {
    adPersonalizationOptOut: unknown('No consta cap control per desactivar la publicitat personalitzada dins de l’aplicació.'),
    telemetryOptOut: unknown('No consta cap control per desactivar l’analítica.'),
    granularControls: unknown('No consta cap panell de privadesa.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', [], 'Interpretació pròpia: el format de monedes virtuals i episodis desbloquejables empeny a comprar en el moment de màxima tensió narrativa, i la baixa només per correu allarga la relació amb qui vol marxar.'),
    darkPatternList: [
      {
        type: 'hidden-exit',
        severity: 'high',
        description:
          'No hi ha cap opció d’eliminació del compte dins de l’aplicació ni del web: cal escriure a una adreça de suport, sense termini compromès.',
        sources: ['blinkdrama-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: na('És un servei de difusió de vídeo; el xifratge d’extrem a extrem no hi és aplicable.'),
    transportEncryption: unknown('La política només parla de «mesures tècniques i organitzatives raonables», sense concretar.'),
    atRestEncryption: unknown('No consta informació sobre el xifratge en repòs.'),
    mfa: unknown('No consta cap opció de verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions.'),
    bugBounty: unknown('No consta cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No consta cap canal de divulgació de vulnerabilitats.'),
  },
  review: {
    researchStatus: 'initial',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política, actualitzada el 18 de març de 2026, és l’única documentació pública del servei: no hi ha centre d’ajuda, ni pàgina de seguretat, ni informació corporativa més enllà del domicili a Hong Kong. No hem trobat cap incident ni cap actuació d’autoritats.',
    openQuestions: [
      'Qui és el representant a la Unió Europea previst a l’article 27 del RGPD?',
      'Quins SDK de publicitat i d’atribució incorpora l’aplicació?',
      'Quines són les bases legals de cada tractament? La política no les enumera.',
    ],
  },
}

/* ═══════════════════════════ Ticketmaster ═══════════════════════════ */

const ticketmaster: AppSeed = {
  slug: 'ticketmaster',
  name: 'Ticketmaster',
  company: 'ticketmaster-spain',
  categories: ['comerc-electronic'],
  tagline:
    'L’etiqueta de l’App Store declara «dades sensibles» compartides amb anunciants de tercers, i la baixa del compte no és autoservei: cal escriure al canal de privadesa i esperar fins a 90 dies',
  summary:
    'Ticketmaster concentra la venda d’entrades d’una part molt gran dels concerts a Espanya, i el seu historial de compres revela gustos musicals, esportius i polítics. L’etiqueta de l’App Store declara, a més de l’adreça postal i el telèfon, una categoria de «dades sensibles» utilitzada per a publicitat de tercers i per a màrqueting propi. El compte no es pot eliminar des de l’aplicació: cal escriure al canal de privadesa i el termini compromès és de fins a 90 dies. La filtració de 2024 i la multa de l’ICO del 2020 fan que sigui una de les fitxes amb més precedents d’aquesta onada.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Espanya, amb Live Nation Entertainment com a matriu als Estats Units',
  userBase: 'Centenars de milions de comptes a escala mundial',
  links: {
    website: 'https://www.ticketmaster.es/',
    privacyPolicy: 'https://privacy.ticketmaster.es/es/privacy-policy',
    privacyCenter: 'https://privacy.ticketmaster.com/',
    appStore: appStore('500003565'),
  },
  accountRequired: f('yes', 'official', ['ticketmaster-privacy-policy'], 'Cal compte per comprar i per accedir a les entrades digitals.'),
  openSource: f('no', 'official', ['ticketmaster-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Un historial d’entrades mostra a qui vas a veure, amb qui hi vas, quant t’hi gastes i en quina ciutat. Permet inferir gustos, afinitats i, quan hi ha esdeveniments religiosos, sindicals o polítics, categories especials de dades. La mateixa etiqueta de l’App Store reconeix el tractament de «dades sensibles».',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['ticketmaster-privacy-policy', 'ticketmaster-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['ticketmaster-app-store'], note: 'L’etiqueta de l’App Store la declara com a dada utilitzada per rastrejar.' }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['ticketmaster-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['ticketmaster-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada', 'recomanacions-algoritmiques'], sources: ['ticketmaster-app-store', 'ticketmaster-privacy-policy'], note: 'Declarat com a dada utilitzada per rastrejar i compartit amb promotors i recintes.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['ticketmaster-app-store', 'ticketmaster-privacy-policy'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['ticketmaster-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['ticketmaster-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['ticketmaster-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['ticketmaster-privacy-policy'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['ticketmaster-privacy-policy'] }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['ticketmaster-privacy-policy'], note: 'La política preveu tractar dades de salut «en circumstàncies limitades», per exemple per a places d’accessibilitat.' }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['ticketmaster-privacy-policy'], note: 'La política preveu el tractament de dades biomètriques en circumstàncies limitades, sense concretar quines.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['ticketmaster-privacy-policy'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['ticketmaster-app-store'], 'L’etiqueta de l’App Store declara l’historial de compres i l’adreça electrònica com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['ticketmaster-privacy-policy'], 'La política descriu galetes, balises web i identificadors per a publicitat.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['ticketmaster-app-store', 'ticketmaster-privacy-policy']),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['ticketmaster-privacy-policy'], 'Publicitat personalitzada amb consentiment, amb opció de desactivar la personalització des del portal de privadesa.', {
      optOutUrl: 'https://privacy.ticketmaster.com/',
    }),
    profiling: f('yes', 'official', ['ticketmaster-privacy-policy'], 'La política descriu l’elaboració de perfils combinant el que sap de la persona amb l’ús dels serveis. El perfilat de prevenció del frau es manté encara que es desactivi la publicitat personalitzada.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['ticketmaster-privacy-policy'], 'Promotors, recintes, artistes, discogràfiques i socis dels esdeveniments, a més de proveïdors tecnològics.'),
    intraGroupSharing: f('yes', 'official', ['ticketmaster-privacy-policy'], 'Compartició dins del grup Live Nation Entertainment.'),
    dataBrokerSales: unknown('La política no descriu la venda de dades a intermediaris fora del mecanisme «Do Not Sell or Share» previst per als Estats Units.'),
    internationalTransfers: f('yes', 'official', ['ticketmaster-privacy-policy'], 'Clàusules contractuals tipus de la Comissió Europea. La comunicació corporativa parla també de normes corporatives vinculants, però no les hem trobat esmentades a la política vigent.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['ticketmaster-privacy-policy'], 'Hi ha dos terminis concrets (fins a 90 dies per completar l’eliminació i esborrat dels comptes inactius durant 7 anys), però la resta de categories es remeten a obligacions legals genèriques.'),
    dataAfterDeletion: f('partial', 'official', ['ticketmaster-privacy-policy'], 'Es conserva el que exigeixen les obligacions fiscals i comptables i el que cal per a la prevenció del frau, sense una llista tancada.'),
    periods: [
      { period: 'Eliminació del compte: fins a 90 dies des de la sol·licitud', sources: ['ticketmaster-privacy-policy'] },
      { period: 'Comptes inactius: esborrat als 7 anys', sources: ['ticketmaster-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['ticketmaster-privacy-policy', 'ticketmaster-suport-baixa']),
    selfService: f('no', 'official', ['ticketmaster-suport-baixa'], 'El canal oficial de suport indica que cal escriure a privacy@ticketmaster.es, que obre un cas amb l’equip de privadesa. No hi ha cap botó d’eliminació dins del compte.'),
    difficulty: 'hard',
    waitingPeriodDays: 90,
    requiresSupportContact: true,
    steps: [
      'Comprova que no tens comandes ni entrades actives: amb comandes en curs no es tramita l’eliminació.',
      'Escriu a privacy@ticketmaster.es demanant la supressió del compte, o fes servir el formulari de drets del portal de privadesa.',
      'Guarda la confirmació: el termini compromès per completar l’eliminació és de fins a 90 dies.',
    ],
    obstacles:
      'Mentre hi hagi comandes actives, com ara entrades per a esdeveniments futurs, no es pot eliminar el compte, i el termini de 90 dies és llarg per a una operació que hauria de ser immediata.',
    dataRetained: 'Dades exigides per obligacions legals i per a la prevenció del frau; no se’n publica una llista tancada.',
    sources: ['ticketmaster-privacy-policy', 'ticketmaster-suport-baixa'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['ticketmaster-rights-portal'], 'Formulari web de drets (accés, supressió, rectificació i portabilitat) gestionat amb OneTrust.', {
      url: 'https://privacyportal.onetrust.com/webform/ba6f9c5b-dda5-43bd-bac4-4e06afccd928/a912475c-660e-40a7-b320-844ea439062a',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['ticketmaster-privacy-policy', 'ticketmaster-rights-portal'], 'Portal de drets i adreça de privadesa específica per a Espanya.', {
      url: 'mailto:privacy@ticketmaster.es',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['ticketmaster-privacy-policy'], 'Es pot desactivar la personalització publicitària, però el perfilat per a la prevenció del frau continua.', {
      url: 'https://privacy.ticketmaster.com/',
    }),
    telemetryOptOut: unknown('No consta cap control per desactivar l’analítica d’ús.'),
    granularControls: f('partial', 'official', ['ticketmaster-privacy-policy'], 'Hi ha un portal de preferències de privadesa i un panell de galetes, però no un control per finalitat dins de l’aplicació.'),
    defaultPosture: 'permissive',
    darkPatterns: f('yes', 'editorial', ['ticketmaster-suport-baixa'], 'Interpretació pròpia a partir del canal oficial de suport: no hi ha cap sortida dins del producte i la supressió s’ha de demanar com un dret, amb un termini de fins a 90 dies.'),
    darkPatternList: [
      {
        type: 'hidden-exit',
        severity: 'high',
        description:
          'L’eliminació del compte no és autoservei: cal escriure al canal de privadesa i no es tramita si hi ha comandes actives.',
        sources: ['ticketmaster-suport-baixa', 'ticketmaster-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: na('És una plataforma de venda d’entrades; el xifratge d’extrem a extrem no hi és aplicable.'),
    transportEncryption: f('yes', 'official', ['ticketmaster-privacy-policy']),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
    mfa: f('partial', 'official', ['ticketmaster-2fa'], 'Codi d’un sol ús per SMS per a determinades accions, amb caducitat de 20 minuts; no és una segona clau permanent del compte.', {
      methods: ['sms'],
    }),
    independentAudits: unknown('No consten certificacions vigents publicades. L’ICO va concloure el 2020 que l’empresa no complia part dels requisits PCI DSS.'),
    bugBounty: unknown('No hem trobat cap programa públic de recompenses de Live Nation ni de Ticketmaster.'),
    vulnerabilityDisclosure: f('no', 'editorial', [], 'Comprovació pròpia del 23 de setembre de 2026: ticketmaster.com/.well-known/security.txt retorna un error 404 i les rutes equivalents de ticketmaster.es i livenationentertainment.com no serveixen cap fitxer vàlid.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política identifica Ticketmaster Spain, S.A.U. com a responsable a Espanya amb una adreça del Passeig de Sant Joan, mentre que les condicions d’ús de ticketmaster.es donen el carrer Pallars 193 i el CIF A60905486. La discrepància és rellevant perquè l’adreça del responsable és el punt de contacte per exercir drets.',
    openQuestions: [
      'Quines són, exactament, les «dades sensibles» que l’etiqueta de l’App Store declara compartides amb anunciants de tercers?',
      'Quin va ser el resultat final del recurs de Ticketmaster contra la multa de l’ICO?',
      'Alguna autoritat europea ha obert expedient per la filtració de 2024?',
    ],
  },
}

/* ═══════════════════════════ Splash ═══════════════════════════ */

const splash: AppSeed = {
  slug: 'splash-impostor',
  name: 'Splash: El Juego del Impostor',
  company: 'cranberry-apps',
  categories: ['utilitats'],
  tagline:
    'Un joc de festa que no vincula cap dada amb la persona, però que declara compres, ús i diagnòstics com a dades utilitzades per rastrejar',
  summary:
    'Splash és un joc d’impostor per jugar en grup amb un sol telèfon, d’un estudi berlinès de dues persones. L’etiqueta de l’App Store no declara cap dada vinculada amb la identitat (ni correu, ni identificadors d’usuari), però sí tres categories utilitzades per rastrejar: historial de compres, interacció amb el producte i dades d’errors. La política de privadesa documenta amb detall el lloc web i els seus proveïdors, però no diu quins SDK d’analítica o d’atribució incorpora l’aplicació.',
  platforms: ['ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Alemanya',
  userBase: 'Desconegut; els agregadors de mercat parlen de milions de descàrregues',
  links: {
    website: 'https://cranberry.app/',
    privacyPolicy: 'https://cranberry.app/privacy',
    terms: 'https://cranberry.app/terms',
    appStore: appStore('6744290388'),
  },
  accountRequired: f('no', 'official', ['splash-app-store'], 'L’etiqueta de l’App Store no declara cap dada de contacte ni cap identificador d’usuari, coherent amb un joc que es juga en local amb un sol dispositiu. La política només descriu comptes en el context dels concursos del web.'),
  openSource: f('no', 'official', ['splash-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Els noms dels jugadors no surten a l’etiqueta de privadesa. El que sí que es recull és el patró de compres i d’ús: quantes partides, quan i si has pagat.',
  dataCollection: [
    row('historial-de-compres', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'mesura-publicitaria'], sources: ['splash-app-store'], note: 'És una de les tres categories que l’etiqueta declara com a utilitzades per rastrejar.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['splash-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['splash-app-store'] }),
    row('nom-i-cognoms', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', sources: ['splash-privacy-policy'], note: 'El joc demana els noms dels participants per repartir els rols, però ni la política ni l’etiqueta de l’App Store diuen què se’n fa. Tot indica que es queden al dispositiu.' }),
    row('adreca-electronica', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['splash-privacy-policy'], note: 'Només per al butlletí i els concursos del web, no per jugar.' }),
    row('identificador-publicitari', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', sources: ['splash-app-store'], note: 'L’etiqueta declara rastreig, cosa que implica identificadors, però no els enumera ni la política identifica cap SDK publicitari.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['splash-app-store'], 'L’etiqueta declara compres, dades d’ús i diagnòstics com a dades que poden servir per rastrejar en aplicacions i llocs web d’altres empreses.'),
    advertisingIdentifiers: unknown('Ni la política ni l’etiqueta especifiquen quins identificadors s’utilitzen per al rastreig declarat.'),
    thirdPartyTrackersPresent: f('partial', 'editorial', [], 'Interpretació pròpia: que l’etiqueta declari rastreig implica la presència d’alguna eina d’atribució o d’analítica de tercers, però la política no en documenta cap per a l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: unknown('La política no descriu publicitat dins de l’aplicació.'),
    profiling: unknown('No consta cap elaboració de perfils.'),
    aiTraining: unknown('La política no esmenta l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['splash-privacy-policy'], 'La política enumera proveïdors del lloc web (Google Analytics, Framer, Cloudflare, Brevo), però no els de l’aplicació.'),
    intraGroupSharing: unknown('No consta cap estructura de grup.'),
    dataBrokerSales: unknown('La política no esmenta la venda de dades.'),
    internationalTransfers: f('yes', 'official', ['splash-privacy-policy'], 'Clàusules contractuals tipus o decisions d’adequació per als proveïdors amb seu als Estats Units.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['splash-privacy-policy'], 'Hi ha terminis concrets per al web (registres 14 dies, dades de concursos 90 dies, identitat dels guanyadors 10 anys per dret mercantil alemany), però cap per a l’aplicació.'),
    dataAfterDeletion: unknown('No consta.'),
  },
  accountDeletion: {
    possible: f('partial', 'official', ['splash-privacy-policy'], 'Com que el joc no requereix compte, la supressió s’exerceix com a dret davant del responsable; no hi ha cap procés d’autoservei i la ruta /delete-account del web no existeix.'),
    selfService: f('no', 'official', ['splash-privacy-policy'], 'No hi ha cap procediment d’eliminació documentat.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Si només has jugat, desinstal·la l’aplicació: no hi ha cap compte associat.',
      'Si t’has apuntat al butlletí o a un concurs, escriu a info@cranberry.app o al delegat de protecció de dades a datenschutz@heydata.eu.',
      'Invoca l’article 17 del RGPD i demana confirmació escrita.',
    ],
    obstacles: 'No hi ha cap pàgina d’eliminació de dades; l’adreça https://cranberry.app/delete-account retorna un error 404.',
    dataRetained: 'Identitat dels guanyadors de concursos, durant 10 anys, per obligació mercantil alemanya.',
    sources: ['splash-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['splash-privacy-policy'], 'La portabilitat es reconeix a la política, però només per petició per correu.', {
      url: 'mailto:info@cranberry.app',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['splash-privacy-policy'], 'La política enumera tots els drets del RGPD, identifica un delegat de protecció de dades extern i informa del dret a reclamar davant l’autoritat de control.', {
      url: 'mailto:datenschutz@heydata.eu',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: unknown('No consta cap control dins de l’aplicació.'),
    telemetryOptOut: unknown('No consta cap control per desactivar l’analítica de l’aplicació.'),
    granularControls: unknown('No consta cap panell de privadesa a l’aplicació; al web hi ha gestor de consentiment de galetes.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem identificat patrons enganyosos documentats.'),
  },
  security: {
    e2ee: na('És un joc local en grup; el xifratge d’extrem a extrem no hi és aplicable.'),
    transportEncryption: unknown('La política no documenta les mesures tècniques del servei.'),
    atRestEncryption: unknown('No consta informació sobre el xifratge en repòs.'),
    mfa: na('El joc no té comptes d’usuari, de manera que no hi ha cap autenticació a reforçar.'),
    independentAudits: unknown('No consten auditories ni certificacions.'),
    bugBounty: unknown('No consta cap programa de recompenses.'),
    vulnerabilityDisclosure: f('no', 'editorial', [], 'Comprovació pròpia del 23 de setembre de 2026: https://cranberry.app/.well-known/security.txt retorna un error 404.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La taxonomia d’aquesta base de coneixement no té categoria per als jocs; s’ha classificat com a utilitat perquè el context de privadesa (desenvolupador petit amb SDK de tercers i permisos que la funció no justifica) és el que millor descriu el cas. L’estudi té una estructura de compliment alemanya sòlida, amb delegat de protecció de dades extern, però la política no cobreix l’aplicació que li dona tot el trànsit.',
    openQuestions: [
      'Quins SDK d’analítica o d’atribució incorpora l’aplicació i justifiquen el rastreig declarat?',
      'Els noms dels jugadors surten del dispositiu?',
      'Splash Plus és una subscripció recurrent o una compra única?',
    ],
  },
}

/* ═══════════════════════════ ReelShort ═══════════════════════════ */

const reelshort: AppSeed = {
  slug: 'reelshort',
  name: 'ReelShort',
  company: 'crazy-maple-studio',
  categories: ['video-i-streaming'],
  tagline:
    'L’etiqueta de l’App Store és molt sòbria, però la política enumera identificadors de maquinari i una desena de xarxes publicitàries, i fixa una conservació mínima de cinc anys',
  summary:
    'ReelShort és l’aplicació de microdrames més gran del mercat occidental, editada per Crazy Maple Studio, una societat de Sunnyvale de la qual el grup pequinès COL Group té una participació del 49 %. L’etiqueta de l’App Store només declara l’identificador de dispositiu com a dada de rastreig, però la política, molt més àmplia, parla d’IDFA, GAID, adreça MAC i IMEI, enumera una desena de xarxes publicitàries i de mesura, i diu que conserva la informació un mínim de cinc anys per a finalitats legals. Per donar-se de baixa cal escriure al correu de suport.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Estats Units (Califòrnia)',
  userBase: 'Més de cent milions de descàrregues acumulades a escala mundial',
  links: {
    website: 'https://www.reelshort.com/',
    privacyPolicy: 'https://www.reelshort.com/privacy-agreement.html',
    terms: 'https://www.reelshort.com/user-agreement.html',
    appStore: appStore('1636235979'),
  },
  accountRequired: f('partial', 'official', ['reelshort-privacy-policy'], 'Es pot començar a mirar sense compte, però cal registrar-se per conservar les monedes i el progrés entre dispositius.'),
  openSource: f('no', 'official', ['reelshort-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'El catàleg de microdrames s’organitza per temes molt concrets. L’historial de visualització i de compres dins d’aquest catàleg, combinat amb identificadors persistents del maquinari, permet construir un perfil comercial difícil de restablir canviant l’identificador publicitari.',
  dataCollection: [
    row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['reelshort-privacy-policy'] }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['reelshort-privacy-policy'] }),
    row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal'], sources: ['reelshort-privacy-policy'] }),
    row('genere', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['reelshort-privacy-policy'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['reelshort-app-store', 'reelshort-privacy-policy'], note: 'La política enumera IDFA, GAID, adreça MAC i IMEI, identificadors que no es poden restablir com el publicitari.' }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['reelshort-privacy-policy'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['reelshort-privacy-policy'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['reelshort-privacy-policy'] }),
    row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['recomanacions-algoritmiques', 'elaboracio-de-perfils'], sources: ['reelshort-privacy-policy'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['reelshort-privacy-policy'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['reelshort-app-store', 'reelshort-privacy-policy'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['reelshort-privacy-policy'], note: 'La política parla d’inferències que reflecteixen «preferències, característiques i predisposicions».' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['reelshort-app-store'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['reelshort-privacy-policy'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['reelshort-app-store', 'reelshort-privacy-policy'], 'L’etiqueta de l’App Store declara l’identificador de dispositiu com a dada de rastreig i la política permet que els socis publicitaris recullin identificadors per servir anuncis més rellevants.'),
    advertisingIdentifiers: f('yes', 'official', ['reelshort-privacy-policy']),
    thirdPartyTrackersPresent: f('yes', 'official', ['reelshort-privacy-policy'], 'La política anomena Google Analytics, Adjust, GameAnalytics i diverses xarxes de publicitat i de vídeo recompensat.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['reelshort-privacy-policy'], 'Publicitat basada en interessos amb cookies, SDK i píxels; l’exclusió es fa al dispositiu, no dins de l’aplicació.'),
    profiling: f('yes', 'official', ['reelshort-privacy-policy'], 'La política descriu la creació de perfils inferits.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['reelshort-privacy-policy'], 'Socis d’analítica i de publicitat, passarel·les de pagament, proveïdors d’atenció al client i empreses del grup.'),
    intraGroupSharing: f('yes', 'official', ['reelshort-privacy-policy'], 'La política preveu la compartició amb filials i societats afiliades.'),
    dataBrokerSales: f('no', 'official', ['reelshort-privacy-policy'], 'La política afirma que no ven informació personal, tot i que permet que els socis publicitaris recullin identificadors.'),
    internationalTransfers: f('yes', 'official', ['reelshort-privacy-policy'], 'Transferències als Estats Units i a qualsevol altre país on operi l’empresa, amb clàusules contractuals tipus o acords de transferència internacional.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['reelshort-privacy-policy'], 'La política fixa una conservació mínima de cinc anys per a finalitats legals i de compliment, però no dona terminis per categoria.'),
    dataAfterDeletion: f('partial', 'official', ['reelshort-privacy-policy'], 'La conservació mínima de cinc anys s’aplica encara que es desactivi el compte.'),
    periods: [
      { period: 'Mínim de 5 anys per a finalitats legals i de compliment', sources: ['reelshort-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['reelshort-privacy-policy']),
    selfService: f('no', 'official', ['reelshort-privacy-policy'], 'La política indica que la desactivació del compte i l’esborrat del correu associat es demanen escrivint al suport; no descriu cap botó dins de l’aplicació.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Escriu a reelshort.support@crazymaplestudio.com demanant la desactivació del compte i l’esborrat de les dades.',
      'Prepara’t per verificar la identitat: la política diu que pot ser necessari abans de tramitar la petició.',
      'Cancel·la a banda la subscripció des de l’App Store: demanar la baixa no atura el cobrament.',
    ],
    obstacles:
      'La baixa i la cancel·lació del pagament són tràmits separats, i la conservació mínima de cinc anys segueix després de la sol·licitud.',
    dataRetained: 'Registres conservats un mínim de cinc anys per a finalitats legals i de compliment.',
    sources: ['reelshort-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['reelshort-privacy-policy'], 'Les persones de l’Espai Econòmic Europeu poden demanar accés i portabilitat en format estructurat, però només per correu.', {
      url: 'mailto:reelshort.support@crazymaplestudio.com',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['reelshort-privacy-policy'], 'Hi ha un apartat específic per a l’Espai Econòmic Europeu, el Regne Unit i Suïssa, però l’únic canal és el correu de suport i no s’identifica cap representant a la Unió Europea ni cap delegat de protecció de dades.', {
      url: 'mailto:reelshort.support@crazymaplestudio.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['reelshort-privacy-policy'], 'L’exclusió es fa restablint l’identificador publicitari del dispositiu; la política adverteix que se seguiran veient anuncis, només que menys personalitzats.'),
    telemetryOptOut: unknown('No consta cap control per desactivar l’analítica.'),
    granularControls: unknown('No consta cap panell de privadesa dins de l’aplicació.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', [], 'Interpretació pròpia: el tall de l’episodi en el moment culminant, les monedes que caduquen i les ofertes amb compte enrere són el motor comercial del format, i per donar-se de baixa cal escriure un correu electrònic.'),
    darkPatternList: [
      {
        type: 'hidden-exit',
        severity: 'high',
        description:
          'No hi ha cap opció d’eliminació del compte dins de l’aplicació: cal escriure al correu de suport i passar una verificació d’identitat.',
        sources: ['reelshort-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: na('És un servei de difusió de vídeo; el xifratge d’extrem a extrem no hi és aplicable.'),
    transportEncryption: unknown('La política no documenta les mesures tècniques concretes.'),
    atRestEncryption: unknown('No consta informació sobre el xifratge en repòs.'),
    mfa: unknown('No consta cap opció de verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No consta cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No consta cap canal de divulgació de vulnerabilitats.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La llista de socis publicitaris de la política té aspecte de plantilla de videojoc (hi apareixen xarxes com MoPub o AdColony, algunes ja desaparegudes), cosa que indica que el document no s’ha adaptat del tot al producte. Cal seguir la discrepància amb l’etiqueta de l’App Store, molt més sòbria. No hem pogut confirmar amb fonts fiables cap demanda ni cap actuació reguladora contra el servei.',
    openQuestions: [
      'Per què l’etiqueta de l’App Store no declara les dades de contacte ni l’historial de visualització que descriu la política?',
      'Qui és el representant a la Unió Europea previst a l’article 27 del RGPD?',
      'La participació del 49 % de COL Group implica accés a dades des de la Xina?',
    ],
  },
}

/* ═══════════════════════════ NetShort ═══════════════════════════ */

const netshort: AppSeed = {
  slug: 'netshort',
  name: 'NetShort',
  company: 'netstory',
  categories: ['video-i-streaming'],
  tagline:
    'L’etiqueta de l’App Store declara com a dades de rastreig fins i tot els diagnòstics i una categoria «altres dades», i la baixa és només per correu',
  summary:
    'NetShort és l’aplicació de microdrames de NETSTORY PTE. LTD., una societat de Singapur constituïda el juny de 2024. L’etiqueta de l’App Store és àmplia en l’apartat de rastreig: identificadors, dades d’ús, diagnòstics i una categoria «altres dades» declarades com a utilitzables per rastrejar en aplicacions i llocs web d’altres empreses. La política, de setembre de 2024, enumera les bases legals per a l’Espai Econòmic Europeu però no identifica cap representant a la Unió Europea.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Singapur',
  userBase: 'Més de cinquanta milions de descàrregues internacionals declarades a finals de 2024',
  links: {
    website: 'https://netshort.com/',
    privacyPolicy: 'https://netshort.com/agreement/2',
    appStore: appStore('6504849169'),
  },
  accountRequired: f('partial', 'official', ['netshort-privacy-policy'], 'Es pot mirar contingut sense compte, però cal registrar-se (o entrar amb Facebook, Apple o Google) per conservar les monedes i el progrés.'),
  openSource: f('no', 'official', ['netshort-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'L’historial de reproducció d’un catàleg tan segmentat i els registres de consum de monedes permeten deduir gustos i disposició a pagar. La política reconeix que en fa inferències per crear un perfil.',
  dataCollection: [
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['netshort-privacy-policy'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['netshort-app-store', 'netshort-privacy-policy'], note: 'L’etiqueta declara l’identificador d’usuari com a dada utilitzada per rastrejar.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['netshort-app-store', 'netshort-privacy-policy'] }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['netshort-privacy-policy'], note: 'La política esmenta GAID i IDFA compartits amb socis publicitaris.' }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['netshort-privacy-policy'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['personalitzacio-de-continguts'], sources: ['netshort-privacy-policy'], note: 'Ciutat i país deduïts de l’adreça IP.' }),
    row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['recomanacions-algoritmiques', 'elaboracio-de-perfils'], sources: ['netshort-privacy-policy'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['netshort-privacy-policy'], note: 'Inclou els registres de consum de monedes.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['netshort-app-store', 'netshort-privacy-policy'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['elaboracio-de-perfils', 'recomanacions-algoritmiques'], sources: ['netshort-privacy-policy'] }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['netshort-privacy-policy'], note: 'La política esmenta interaccions d’àudio i vídeo en el xat i l’atenció al client.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['netshort-app-store'], note: 'Els diagnòstics figuren entre les dades declarades com a utilitzables per rastrejar, cosa poc habitual.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['netshort-privacy-policy'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['netshort-app-store'], 'L’etiqueta declara identificadors, dades d’ús, diagnòstics i «altres dades» com a utilitzables per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['netshort-privacy-policy', 'netshort-app-store']),
    thirdPartyTrackersPresent: f('yes', 'official', ['netshort-privacy-policy'], 'La política anomena Google Analytics i el SDK de Sensors Data, a més de socis publicitaris genèrics.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['netshort-privacy-policy'], 'La política permet que socis publicitaris i d’analítica recullin informació per servir anuncis més rellevants i mesurar-ne les campanyes.'),
    profiling: f('yes', 'official', ['netshort-privacy-policy'], 'Inferències per crear un perfil de preferències, característiques, predisposicions i comportament.'),
    aiTraining: unknown('La política no esmenta l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['netshort-privacy-policy'], 'Socis d’analítica i publicitat, proveïdors d’identificació social i passarel·les de pagament.'),
    intraGroupSharing: unknown('La política no descriu cap estructura de grup.'),
    dataBrokerSales: f('no', 'official', ['netshort-privacy-policy'], 'La política declara que no hi ha venda de dades en el sentit de la normativa de Califòrnia.'),
    internationalTransfers: f('yes', 'official', ['netshort-privacy-policy'], 'La política reconeix transferències a altres països, amb els Estats Units esmentats expressament, i al·lega «garanties adequades» sense detallar-les.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No consta cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['netshort-privacy-policy'], 'Els criteris són genèrics: les dades publicitàries s’esborren passat «un període determinat» que no s’especifica.'),
    dataAfterDeletion: f('partial', 'official', ['netshort-privacy-policy'], 'En acabar la relació les dades s’eliminen o s’anonimitzen, tret del que exigeixi la llei; les còpies de seguretat poden trigar més.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['netshort-privacy-policy']),
    selfService: f('no', 'official', ['netshort-privacy-policy'], 'La política diu que la desactivació del compte i l’esborrat del correu es demanen pels canals de contacte; no descriu cap opció dins de l’aplicació.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Fes servir el canal de contacte que indica la política (el servei d’atenció dins de l’aplicació o l’adreça de correu de suport) per demanar la desactivació del compte.',
      'Invoca l’article 17 del RGPD i demana confirmació escrita de l’esborrat.',
      'Cancel·la a banda qualsevol subscripció activa des de l’App Store.',
    ],
    obstacles:
      'No hi ha cap formulari de drets ni cap termini compromès, i no s’identifica cap representant a la Unió Europea a qui reclamar.',
    dataRetained: 'El que exigeixin les obligacions legals, de seguretat i de prevenció del frau.',
    sources: ['netshort-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['netshort-privacy-policy'], 'La portabilitat es reconeix per a l’Espai Econòmic Europeu, però només per petició als canals de contacte.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['netshort-privacy-policy'], 'Hi ha un apartat de drets per a l’Espai Econòmic Europeu, el Regne Unit i Suïssa, amb menció del dret a reclamar davant l’autoritat de control, però sense delegat de protecció de dades ni representant identificats.'),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['netshort-privacy-policy'], 'L’exclusió es fa des de la configuració del dispositiu o restablint l’identificador publicitari.'),
    telemetryOptOut: unknown('No consta cap control per desactivar l’analítica.'),
    granularControls: unknown('No consta cap panell de privadesa dins de l’aplicació.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', [], 'Interpretació pròpia: com la resta d’aplicacions de microdrames, el producte combina el tall en el clímax amb monedes i ofertes amb compte enrere, mentre que la sortida requereix escriure al servei d’atenció.'),
    darkPatternList: [
      {
        type: 'hidden-exit',
        severity: 'high',
        description:
          'L’eliminació del compte només es pot demanar pels canals de contacte, sense formulari ni termini compromès.',
        sources: ['netshort-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: na('És un servei de difusió de vídeo; el xifratge d’extrem a extrem no hi és aplicable.'),
    transportEncryption: unknown('La política no documenta les mesures tècniques concretes.'),
    atRestEncryption: unknown('No consta informació sobre el xifratge en repòs.'),
    mfa: unknown('No consta cap opció de verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No consta cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No consta cap canal de divulgació de vulnerabilitats.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'NETSTORY PTE. LTD. es va constituir a Singapur l’11 de juny de 2024, poques setmanes abans del llançament de l’aplicació. La política no aclareix si hi ha una matriu operativa a la Xina, un punt que apareix repetidament en la cobertura del sector però que no hem pogut documentar amb cap font primària. No hem trobat cap incident ni cap actuació d’autoritats.',
    openQuestions: [
      'Qui controla NETSTORY PTE. LTD. i des d’on s’operen els sistemes?',
      'Qui és el representant a la Unió Europea previst a l’article 27 del RGPD?',
      'Per què els diagnòstics i una categoria «altres dades» es declaren com a dades de rastreig?',
    ],
  },
}

/* ═══════════════════════════ Disney+ ═══════════════════════════ */

const disneyPlus: AppSeed = {
  slug: 'disney-plus',
  name: 'Disney+',
  company: 'disney-benelux',
  categories: ['video-i-streaming'],
  tagline:
    'Baixa autoservei ben documentada, però només del compte Disney+: el compte MyDisney que hi ha a sota només es pot eliminar contactant amb atenció al client',
  summary:
    'Per a les persones subscriptores de la Unió Europea que no resideixen al Regne Unit, la política identifica com a corresponsables The Walt Disney Company Limited, a Londres, i The Walt Disney Company (Benelux) B.V., a Amsterdam. Amb l’arribada del pla amb anuncis, l’etiqueta de l’App Store declara les dades de publicitat com a dades utilitzades per rastrejar i la política admet compartir amb tercers identificadors i correus convertits en resum criptogràfic. L’eliminació del compte és autoservei i està ben explicada, però només esborra el perfil de Disney+: el compte MyDisney, que és el que dona accés a la resta de serveis del grup, exigeix contactar amb atenció al client.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Països Baixos i Regne Unit, en corresponsabilitat, per a les persones subscriptores de la Unió Europea',
  userBase: 'Més de cent cinquanta milions de subscripcions a escala mundial',
  links: {
    website: 'https://www.disneyplus.com/',
    privacyPolicy: 'https://privacy.thewaltdisneycompany.com/es/politica-de-privacidad/',
    privacyCenter: 'https://privacy.thewaltdisneycompany.com/es/politica-de-privacidad/portal-de-derechos-de-los-sujetos-de-datos/',
    appStore: appStore('1446075923'),
  },
  accountRequired: f('yes', 'official', ['disney-privacy-policy'], 'Cal un compte MyDisney per contractar la subscripció i per mirar contingut.'),
  openSource: f('no', 'official', ['disney-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Els perfils infantils, les hores de reproducció i les sèries que es repeteixen mostren qui viu a la llar. Amb el pla amb anuncis, aquesta informació té valor publicitari, també en els perfils de menors, que reben publicitat adequada a la seva edat.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['disney-privacy-policy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['disney-plus-app-store', 'disney-privacy-policy'], note: 'La política admet compartir amb tercers «ciertos identificadores o direcciones de correo electrónico con hash» per servir i mesurar publicitat.' }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['compliment-legal'], sources: ['disney-privacy-policy'], note: 'El registre demana data de naixement i sexe.' }),
    row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['disney-privacy-policy'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['disney-plus-app-store', 'disney-privacy-policy'] }),
    row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['disney-privacy-policy'], note: 'Dades de transacció per a la facturació.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-publicitaria', 'publicitat-personalitzada'], sources: ['disney-plus-app-store', 'disney-privacy-policy'] }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['disney-plus-app-store'], note: 'Les dades de publicitat són l’única categoria que l’etiqueta declara com a utilitzada per rastrejar.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['disney-plus-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques', 'personalitzacio-de-continguts'], sources: ['disney-plus-app-store'] }),
    row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['recomanacions-algoritmiques', 'elaboracio-de-perfils'], sources: ['disney-privacy-policy'], note: 'La política parla d’«información acerca del uso, visualización y del dispositivo».' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'publicitat-personalitzada'], sources: ['disney-plus-app-store', 'disney-privacy-policy'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['disney-plus-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['disney-privacy-policy'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['disney-privacy-policy'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['disney-plus-app-store'] }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['atencio-a-lusuari'], sources: ['disney-privacy-policy'], note: 'La política inclou els enregistraments de les trucades d’atenció al client.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['disney-plus-app-store'], 'L’etiqueta de l’App Store declara les dades de publicitat com a dades que poden servir per rastrejar en aplicacions i llocs web d’altres empreses.'),
    advertisingIdentifiers: f('yes', 'official', ['disney-plus-app-store', 'disney-privacy-policy']),
    thirdPartyTrackersPresent: f('yes', 'official', ['disney-privacy-policy'], 'La política descriu socis publicitaris que reben identificadors i correus convertits en resum criptogràfic.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['disney-privacy-policy', 'disney-publicitat'], 'Publicitat basada en l’activitat als serveis del grup i a llocs de tercers. La pàgina per a famílies precisa que els perfils de persones menors de 18 anys reben publicitat adequada a la seva edat quan es fa servir el pla amb anuncis.'),
    profiling: f('yes', 'official', ['disney-uk-eu-rights'], 'La pàgina de drets per al Regne Unit i la Unió Europea reconeix com a interès legítim la creació de «segments i models agregats» i la cerca d’audiències similars en plataformes en línia.'),
    aiTraining: unknown('La política no diu res sobre l’entrenament de models amb dades de persones subscriptores.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['disney-privacy-policy'], 'Proveïdors autoritzats, socis de marca compartida, socis publicitaris i socis de viatge i restauració.'),
    intraGroupSharing: f('yes', 'official', ['disney-privacy-policy'], 'Compartició amb les empreses de la Família de Companyies de Walt Disney.'),
    dataBrokerSales: unknown('La política preveu el mecanisme «Do Not Sell or Share» dels Estats Units, però no descriu cap venda de dades a intermediaris a Europa.'),
    internationalTransfers: f('yes', 'official', ['disney-uk-eu-rights'], 'Clàusules contractuals tipus aprovades per la Comissió Europea o per l’autoritat britànica.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['disney-privacy-policy'], 'La política només diu que conserva la informació «durante el período de tiempo necesario». No hi ha cap termini concret per categoria.'),
    dataAfterDeletion: f('partial', 'official', ['disney-plus-delete'], 'L’eliminació afecta només Disney+ (perfils, llistes, configuració de privadesa i preferències de màrqueting); el compte MyDisney i els serveis associats es mantenen.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['disney-plus-delete']),
    selfService: f('partial', 'official', ['disney-plus-delete'], 'L’eliminació de Disney+ és autoservei des del navegador, amb codi de verificació per correu. L’eliminació del compte MyDisney, en canvi, obliga a contactar amb atenció al client.'),
    directUrl: 'https://help.disneyplus.com/es/article/disneyplus-delete-account',
    difficulty: 'medium',
    steps: [
      'Cancel·la primer la subscripció: no es pot eliminar el compte amb una subscripció activa.',
      'Entra a DisneyPlus.com des d’un navegador i obre el menú del perfil.',
      'Ves a «Cuenta», després a «Otras configuraciones» i tria «Eliminar la cuenta».',
      'Revisa la informació, introdueix el codi de verificació de sis dígits que rebràs per correu i confirma.',
      'Si vols eliminar també el compte MyDisney, has de contactar amb atenció al client: no hi ha opció d’autoservei.',
    ],
    obstacles:
      'La baixa esborra Disney+ però no MyDisney, que és el compte que enllaça la resta de serveis del grup. Si la subscripció la factura Disney, l’eliminació no es tramita fins que s’acaba el període de facturació.',
    dataRetained: 'El compte MyDisney i les dades associades a la resta de serveis del grup.',
    sources: ['disney-plus-delete', 'disney-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['disney-rights-portal'], 'El dret de portabilitat es reconeix, però per a Europa, l’Orient Mitjà i l’Àfrica no hi ha cap eina d’autoservei de descàrrega: s’ha de demanar per correu.', {
      url: 'mailto:EMEA.dataprotection@disney.com',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['disney-rights-portal'], 'El portal de drets de Disney només ofereix formularis d’autoservei per als Estats Units, Hulu, el Brasil i el Japó. Per a Europa, l’única via és escriure a l’adreça de protecció de dades de la regió.', {
      url: 'mailto:EMEA.dataprotection@disney.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['disney-privacy-policy'], 'Els controls documentats per a Europa són el gestor de preferències de galetes del web i la possibilitat de limitar la mesura de Nielsen des de la pàgina de compte. No hem trobat cap interruptor de publicitat personalitzada dins del compte.'),
    telemetryOptOut: f('partial', 'official', ['disney-privacy-policy'], 'Es pot limitar la mesura d’audiència de Nielsen des de la pàgina de compte de Disney+.'),
    granularControls: f('partial', 'official', ['disney-privacy-policy'], 'Els controls existeixen però estan repartits entre el panell de galetes, la configuració del compte i el canal de drets, i no hi ha un panell únic dins de l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['disney-plus-delete'], 'Interpretació pròpia: l’eliminació de Disney+ està ben explicada, però deixa viu el compte MyDisney sense dir-ho al pas on la persona creu que està acabant la relació. Per esborrar-lo cal contactar amb atenció al client.'),
    darkPatternList: [
      {
        type: 'hidden-exit',
        severity: 'medium',
        description:
          'La baixa autoservei només afecta Disney+. L’eliminació del compte MyDisney, que és el que enllaça la resta de serveis del grup, exigeix contactar amb atenció al client.',
        sources: ['disney-plus-delete'],
      },
    ],
  },
  security: {
    e2ee: na('És un servei de difusió de vídeo; el xifratge d’extrem a extrem no hi és aplicable.'),
    transportEncryption: f('yes', 'official', ['disney-privacy-policy'], 'La política descriu mesures tècniques, administratives i físiques, sense concretar-les.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
    mfa: f('no', 'official', ['disney-plus-account-security'], 'L’article oficial de seguretat del compte no ofereix cap verificació en dos passos activable: només descriu un codi d’un sol ús quan Disney detecta activitat sospitosa i una contrasenya de sis caràcters com a mínim.', {
      methods: ['email'],
    }),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: f('no', 'official', ['disney-hackerone'], 'El programa de The Walt Disney Company a HackerOne està obert però no ofereix recompenses econòmiques.'),
    vulnerabilityDisclosure: f('yes', 'official', ['disney-hackerone'], 'Programa públic de divulgació a HackerOne, amb Disney+ i els dominis de Disney Streaming expressament dins de l’abast.', {
      url: 'https://hackerone.com/disney',
    }),
  },
  alternatives: [
    {
      app: 'movistar-plus',
      comparability: 'partial',
      rationale:
        'Plataforma de televisió i cinema amb responsable establert a Espanya i, per tant, sota la supervisió directa de l’Agència Espanyola de Protecció de Dades.',
      tradeOffs: 'No té el catàleg de Disney, Pixar, Marvel ni Star Wars i sol anar lligada a un contracte de telecomunicacions.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Cap dels precedents registrats és una sanció europea: la consulta del registre públic de sancions del RGPD no retorna cap resolució contra Disney. Els tres casos que s’hi recullen vénen dels Estats Units i són rellevants per raons diferents: el de la Comissió Federal de Comerç perquè tracta de l’etiquetatge del contingut infantil, el de la fiscalia de Califòrnia perquè descriu uns controls d’exclusió que només funcionaven en un dispositiu, i el de la filtració del Slack intern perquè mostra fins on arriba un sol accés comprometut.',
    openQuestions: [
      'Per què el portal de drets de Disney ofereix formularis d’autoservei als Estats Units, al Brasil i al Japó però no a Europa?',
      'Quins terminis de conservació s’apliquen a l’historial de visualització?',
      'Quines dades es conserven al compte MyDisney després d’eliminar Disney+?',
    ],
  },
}

/* ═══════════════════════════ HBO Max ═══════════════════════════ */

const hboMax: AppSeed = {
  slug: 'hbo-max',
  name: 'HBO Max',
  company: 'hbo-nordic',
  categories: ['video-i-streaming'],
  tagline:
    'La política admet tractar, en casos limitats, salut, origen ètnic, creences, vida sexual o afiliació política, i registra clics, tecles premudes i desplaçament de pantalla',
  summary:
    'A Espanya, HBO Max el controlen conjuntament HBO Nordic AB, amb domicili a Estocolm, i WarnerMedia Direct LLC, a Nova York; per saber-ho cal anar a una llista d’afiliades separada de la política. El document del grup inclou entre les dades tractades, en casos limitats, categories especials de l’article 9 del RGPD (salut física o mental, origen racial o ètnic, creences religioses o filosòfiques, vida o orientació sexual i afiliació política) i, dins de la informació d’ús, els clics, els moviments del ratolí, les tecles premudes i el desplaçament de pantalla. L’eliminació del compte, en canvi, és autoservei i està ben documentada.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Suècia i Estats Units, en responsabilitat conjunta, per a les persones subscriptores d’Espanya',
  userBase: 'Més de cent milions de subscripcions a escala mundial',
  links: {
    website: 'https://www.hbomax.com/',
    privacyPolicy: 'https://www.hbomax.com/privacy/es-emea',
    privacyCenter: 'https://www.wbdprivacy.com/policycenter/affiliates/',
    appStore: appStore('1666653815'),
  },
  accountRequired: f('yes', 'official', ['hbo-max-privacy-policy'], 'Cal un compte per contractar la subscripció i per mirar contingut.'),
  openSource: f('no', 'official', ['hbo-max-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'El que es mira i el que es busca en un catàleg de ficció adulta és una dada de comportament delicada. S’hi afegeix el detall de la interacció: títols, gèneres, llistes, cerques, clics, tecles i desplaçament. La política reconeix, a més, que en casos limitats tracta categories especials de dades.',
  dataCollection: [
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['hbo-max-app-store', 'hbo-max-privacy-policy'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['hbo-max-app-store'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['hbo-max-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['hbo-max-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['hbo-max-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'publicitat-personalitzada'], sources: ['hbo-max-app-store', 'hbo-max-privacy-policy'] }),
    row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['hbo-max-privacy-policy'], note: 'La política esmenta ubicació precisa per a serveis i ofertes concretes.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['hbo-max-app-store', 'hbo-max-privacy-policy'] }),
    row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'group', purposes: ['recomanacions-algoritmiques', 'elaboracio-de-perfils'], sources: ['hbo-max-privacy-policy'], note: 'Títol i gènere del que es reprodueix, llistes de visualització i cerques.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['hbo-max-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['hbo-max-app-store', 'hbo-max-privacy-policy'], note: 'La política concreta que registra clics, moviments del ratolí, tecles premudes i desplaçament de pantalla.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['hbo-max-privacy-policy'], note: 'La política diu que rep preferències, interessos i dades inferides de socis de publicitat i màrqueting, anunciants, editors i proveïdors de dades.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['hbo-max-app-store'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['hbo-max-privacy-policy'] }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['hbo-max-privacy-policy'], note: 'La política inclou la salut física o mental entre la informació demogràfica que pot tractar en casos limitats, sense dir quins.' }),
    row('orientacio-sexual', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['hbo-max-privacy-policy'], note: 'La política esmenta la vida i l’orientació sexual entre la informació demogràfica que pot tractar en casos limitats.' }),
    row('conviccions-i-opinions', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['hbo-max-privacy-policy'], note: 'Creences religioses o filosòfiques i afiliació política.' }),
    row('origen-etnic-o-nacionalitat', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['hbo-max-privacy-policy'] }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['atencio-a-lusuari'], sources: ['hbo-max-privacy-policy'], note: 'La política inclou foto, vídeo i àudio entre les dades que es poden recollir.' }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['hbo-max-privacy-policy'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['hbo-max-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar, tot i que sí que declara dades vinculades amb la persona i compartides per a publicitat de tercers.'),
    advertisingIdentifiers: f('yes', 'official', ['hbo-max-app-store'], 'L’identificador de dispositiu i el d’usuari es declaren vinculats amb la persona i utilitzats per a publicitat de tercers.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['hbo-max-privacy-policy', 'hbo-max-app-store']),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['hbo-max-legal-bases', 'hbo-max-privacy-policy'], 'La taula de bases de legitimació situa la publicitat dirigida dins dels serveis en el consentiment, però la publicitat dirigida en productes i serveis de tercers (incloent-hi la cerca d’audiències similars) en l’interès legítim.', {
      optOutUrl: 'https://www.wbdprivacy.com/opt-out/',
    }),
    profiling: f('yes', 'official', ['hbo-max-privacy-policy'], 'Recomanacions, personalització i publicitat segmentada a partir de dades pròpies i de dades inferides rebudes de tercers.'),
    aiTraining: unknown('La política no esmenta l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['hbo-max-privacy-policy'], 'Proveïdors, patrocinadors, empreses de publicitat i màrqueting i «socis comercials i tercers… per a les seves pròpies finalitats».'),
    intraGroupSharing: f('yes', 'official', ['hbo-max-privacy-policy', 'hbo-max-controllers'], 'La mateixa política serveix per a tota la família d’empreses de Warner Bros. Discovery, amb una llista pública d’afiliades que en poden rebre la informació.'),
    dataBrokerSales: unknown('La política no descriu la venda de dades a intermediaris a Europa.'),
    internationalTransfers: f('yes', 'official', ['hbo-max-privacy-policy'], 'Transferències als Estats Units amb clàusules contractuals tipus i, en determinades ocasions, altres mecanismes legals.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['hbo-max-privacy-policy'], 'La política dedica una sola frase a la conservació: es conserva la informació «durante el tiempo estrictamente necesario». No hi ha cap termini per categoria.'),
    dataAfterDeletion: f('partial', 'official', ['hbo-max-privacy-policy'], 'La política adverteix que no podrà esborrar la informació quan hi hagi una obligació legal de conservar-la o quan calgui per continuar prestant un servei que la persona vulgui mantenir.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['hbo-max-delete-account']),
    selfService: f('yes', 'official', ['hbo-max-delete-account'], 'Hi ha opció dins de l’aplicació i un formulari al web, amb confirmació per correu.'),
    directUrl: 'https://www.hbomax.com/account-delete',
    difficulty: 'medium',
    waitingPeriodDays: 35,
    steps: [
      'Cancel·la primer la subscripció: no es pot eliminar el compte amb una subscripció activa.',
      'A mòbil o tauleta: obre l’aplicació, ves al perfil, entra a «Aviso legal y de privacidad» i tria «Eliminar mi cuenta».',
      'A l’ordinador: ves a hbomax.com/account-delete i omple el formulari.',
      'Obre el correu amb l’assumpte «Your request to delete your account» i prem «Delete My Account» abans de set dies.',
      'L’esborrat triga entre quatre i cinc setmanes; rebràs un correu quan s’hagi completat.',
    ],
    obstacles:
      'La finestra de confirmació és de set dies i el procés d’esborrat s’allarga entre quatre i cinc setmanes, un termini llarg per a una acció que la persona ja ha confirmat dues vegades.',
    dataRetained: 'Informació subjecta a obligacions legals de conservació, sense una llista tancada.',
    sources: ['hbo-max-delete-account', 'hbo-max-privacy-policy'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['hbo-max-rights-portal', 'hbo-max-privacy-policy'], 'Dret de portabilitat en format digital, exercible des del portal de sol·licituds, tot i que no hi ha descàrrega automàtica.', {
      url: 'https://privacyportal.onetrust.com/webform/1b21e05d-c206-4e0b-970e-2d73a23e42e8/36c439a3-050f-4b3b-a24a-94bcd12a6ab8',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['hbo-max-privacy-policy', 'hbo-max-rights-portal'], 'Formulari de drets individuals i adreça de l’oficina de privadesa i del delegat de protecció de dades, que té domicili a Nova York; la política no identifica cap representant establert a la Unió Europea.', {
      url: 'mailto:wbdprivacy@wbd.com',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['hbo-max-ad-choices', 'hbo-max-privacy-policy'], 'El portal Ad Choices permet excloure’s de la publicitat dirigida, però el grup adverteix que continuarà recollint i utilitzant les dades per a recerca, analítica i operacions internes. Dins del compte, l’únic control documentat per a Europa és el de preferències de galetes.', {
      url: 'https://www.wbdprivacy.com/opt-out/',
    }),
    telemetryOptOut: unknown('No consta cap control per desactivar l’analítica d’ús.'),
    granularControls: f('partial', 'official', ['hbo-max-privacy-policy'], 'Els controls es reparteixen entre el portal Ad Choices, el panell de galetes i els programes d’autoregulació publicitària; no hi ha un panell únic de privadesa dins de l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem identificat patrons enganyosos documentats amb prou evidència.'),
  },
  security: {
    e2ee: na('És un servei de difusió de vídeo; el xifratge d’extrem a extrem no hi és aplicable.'),
    transportEncryption: unknown('La política no documenta les mesures tècniques concretes.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
    mfa: f('no', 'official', ['hbo-max-account-security'], 'L’article oficial de seguretat del compte recomana contrasenyes llargues i revisar els dispositius, però no ofereix cap verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: f('no', 'official', ['hbo-max-vdp'], 'Warner Bros. Discovery té un formulari de comunicació de vulnerabilitats, però no un programa de recompenses amb abast publicat.'),
    vulnerabilityDisclosure: f('yes', 'official', ['hbo-max-vdp'], 'Formulari corporatiu de comunicació responsable de vulnerabilitats.', {
      url: 'https://wbd.com/report-security-vulnerability',
    }),
  },
  alternatives: [
    {
      app: 'movistar-plus',
      comparability: 'partial',
      rationale:
        'Servei de televisió i cinema amb responsable establert a Espanya, sota la supervisió directa de l’Agència Espanyola de Protecció de Dades.',
      tradeOffs: 'No té les produccions originals d’HBO ni el catàleg de Warner, i sol anar lligat a un contracte de telecomunicacions.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La identificació del responsable no és a la política sinó en una llista d’afiliades separada, on es pot comprovar que per a Espanya el servei el controlen conjuntament una societat sueca i una de nord-americana. La consulta del registre públic de sancions del RGPD no retorna cap resolució contra Warner Bros. Discovery ni contra HBO. Els dos precedents registrats vénen dels Estats Units i cap dels dos és una filtració de dades de persones subscriptores.',
    openQuestions: [
      'Qui és el representant a la Unió Europea previst a l’article 27 del RGPD per a WarnerMedia Direct LLC?',
      'En quins casos, exactament, el grup tracta informació sobre salut, orientació sexual o afiliació política de les persones subscriptores?',
      'Per què el registre d’interacció arriba al detall de les tecles premudes i del desplaçament de pantalla?',
    ],
  },
}

export const lot: SeedLot = {
  companies: [
    {
      slug: 'praktika-ai',
      name: 'Praktika.ai',
      legalName: 'Praktika.ai Company',
      description:
        'Empresa de programari educatiu fundada el 2022 que ofereix tutors d’idiomes conversacionals amb avatars generats per intel·ligència artificial.',
      headquartersCountry: 'US',
      ownership: 'private',
      foundedYear: 2022,
      primaryRevenueModel: 'subscription',
      website: 'https://praktika.ai/',
      productDomains: ['praktika.ai'],
      privacyContact: 'support@praktika.ai',
    },
    {
      slug: 'wuolads',
      name: 'Wuolah',
      legalName: 'Wuolads, S.L.',
      description:
        'Empresa sevillana que gestiona la plataforma d’apunts universitaris Wuolah, finançada amb publicitat inserida als documents que es descarreguen.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'advertising',
      website: 'https://wuolah.com/',
      productDomains: ['wuolah.com', 'wuolads.com'],
      privacyContact: 'info@wuolah.com',
    },
    {
      slug: 'kahoot-as',
      name: 'Kahoot!',
      legalName: 'Kahoot! AS',
      description:
        'Empresa noruega de plataformes d’aprenentatge basades en el joc. Va deixar de cotitzar a la borsa d’Oslo el gener de 2024, després de l’adquisició per un consorci liderat per Goldman Sachs Asset Management amb General Atlantic i KIRKBI.',
      headquartersCountry: 'NO',
      euEstablishment: 'NO',
      leadSupervisoryAuthority: 'datatilsynet-no',
      ownership: 'private',
      foundedYear: 2012,
      primaryRevenueModel: 'freemium',
      website: 'https://kahoot.com/',
      productDomains: ['kahoot.com', 'kahoot.it'],
      privacyContact: 'privacy@kahoot.com',
    },
    {
      slug: 'atlas-ventures-culture-technology',
      name: 'Atlas Ventures Culture & Technology',
      legalName: 'Atlas Ventures Culture & Technology Limited',
      description:
        'Societat amb domicili a Sheung Wan (Hong Kong) que edita l’aplicació de microdrames verticals BlinkDrama. No publica informació corporativa més enllà de la política de privadesa.',
      headquartersCountry: 'HK',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.blinkdrama.life/',
      productDomains: ['blinkdrama.life'],
      privacyContact: 'service@blinkdrama.life',
    },
    {
      slug: 'live-nation-entertainment',
      name: 'Live Nation Entertainment',
      legalName: 'Live Nation Entertainment, Inc.',
      description:
        'Grup nord-americà de promoció d’espectacles i venda d’entrades, resultat de la fusió de Live Nation i Ticketmaster el 2010. Cotitza a la Borsa de Nova York.',
      headquartersCountry: 'US',
      ownership: 'public',
      foundedYear: 2010,
      primaryRevenueModel: 'commerce',
      website: 'https://www.livenationentertainment.com/',
      productDomains: ['ticketmaster.com', 'livenation.com'],
    },
    {
      slug: 'ticketmaster-spain',
      name: 'Ticketmaster Spain',
      legalName: 'Ticketmaster Spain, S.A.U.',
      parent: 'live-nation-entertainment',
      description:
        'Filial espanyola de Ticketmaster, responsable del tractament per a les persones usuàries de ticketmaster.es. Amb CIF A60905486 i domicili social a Barcelona.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      primaryRevenueModel: 'commerce',
      website: 'https://www.ticketmaster.es/',
      productDomains: ['ticketmaster.es'],
      privacyContact: 'privacy@ticketmaster.es',
    },
    {
      slug: 'cranberry-apps',
      name: 'Cranberry Apps',
      legalName: 'Cranberry Apps GmbH',
      description:
        'Estudi berlinès de jocs socials per a mòbil, amb delegat de protecció de dades extern contractat a heyData GmbH.',
      headquartersCountry: 'DE',
      euEstablishment: 'DE',
      leadSupervisoryAuthority: 'berlin',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://cranberry.app/',
      productDomains: ['cranberry.app'],
      privacyContact: 'datenschutz@heydata.eu',
    },
    {
      slug: 'crazy-maple-studio',
      name: 'Crazy Maple Studio',
      legalName: 'Crazy Maple Studio, Inc.',
      description:
        'Empresa de Sunnyvale (Califòrnia) que edita ReelShort i diverses aplicacions de ficció interactiva. El grup editorial pequinès COL Group hi manté una participació del 49 %.',
      headquartersCountry: 'US',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://crazymaplestudios.com/',
      productDomains: ['reelshort.com', 'crazymaplestudios.com'],
      privacyContact: 'reelshort.support@crazymaplestudio.com',
    },
    {
      slug: 'netstory',
      name: 'NETSTORY',
      legalName: 'NETSTORY PTE. LTD.',
      description:
        'Societat de Singapur constituïda el juny de 2024 que edita l’aplicació de microdrames verticals NetShort.',
      headquartersCountry: 'SG',
      ownership: 'private',
      foundedYear: 2024,
      primaryRevenueModel: 'freemium',
      website: 'https://netshort.com/',
      productDomains: ['netshort.com'],
    },
    {
      slug: 'walt-disney-company',
      name: 'The Walt Disney Company',
      legalName: 'The Walt Disney Company',
      description:
        'Grup nord-americà de mitjans i entreteniment que agrupa els estudis Disney, Pixar, Marvel, Lucasfilm i 20th Century, els parcs temàtics i els serveis de streaming Disney+, Hulu i ESPN. Cotitza a la Borsa de Nova York.',
      headquartersCountry: 'US',
      ownership: 'public',
      foundedYear: 1923,
      primaryRevenueModel: 'mixed',
      website: 'https://www.thewaltdisneycompany.com/',
      productDomains: ['disneyplus.com', 'disney.com', 'bamgrid.com'],
    },
    {
      slug: 'disney-benelux',
      name: 'The Walt Disney Company (Benelux)',
      legalName: 'The Walt Disney Company (Benelux) B.V.',
      parent: 'walt-disney-company',
      description:
        'Societat neerlandesa que, juntament amb The Walt Disney Company Limited (Londres), és corresponsable del tractament de les dades de les persones subscriptores de Disney+ de la Unió Europea que no resideixen al Regne Unit. Domicili a Asterweg 15S, Amsterdam.',
      headquartersCountry: 'NL',
      euEstablishment: 'NL',
      leadSupervisoryAuthority: 'ap-nl',
      ownership: 'subsidiary',
      primaryRevenueModel: 'subscription',
      website: 'https://www.disneyplus.com/',
      productDomains: ['disneyplus.com'],
      privacyContact: 'EMEA.dataprotection@disney.com',
    },
    {
      slug: 'warner-bros-discovery',
      name: 'Warner Bros. Discovery',
      legalName: 'Warner Bros. Discovery, Inc.',
      description:
        'Grup nord-americà de mitjans nascut el 2022 de la fusió de WarnerMedia i Discovery. Inclou HBO, Warner Bros., CNN, Discovery i el servei de streaming HBO Max. Cotitza als Estats Units.',
      headquartersCountry: 'US',
      ownership: 'public',
      foundedYear: 2022,
      primaryRevenueModel: 'mixed',
      website: 'https://wbd.com/',
      productDomains: ['hbomax.com', 'max.com', 'wbd.com'],
      privacyContact: 'wbdprivacy@wbd.com',
    },
    {
      slug: 'hbo-nordic',
      name: 'HBO Nordic',
      legalName: 'HBO Nordic AB',
      parent: 'warner-bros-discovery',
      description:
        'Societat sueca que, segons la llista pública de responsables de Warner Bros. Discovery, controla HBO Max a Espanya, Portugal, Dinamarca, Finlàndia, Noruega i Suècia conjuntament amb WarnerMedia Direct LLC, de Nova York.',
      headquartersCountry: 'SE',
      euEstablishment: 'SE',
      leadSupervisoryAuthority: 'imy-se',
      ownership: 'subsidiary',
      primaryRevenueModel: 'subscription',
      website: 'https://www.hbomax.com/',
      productDomains: ['hbomax.com'],
      privacyContact: 'wbdprivacy@wbd.com',
    },
  ],
  sources: [
    s('praktika-privacy-policy', 'Privacy Policy', 'https://praktika.ai/privacy', 'Praktika.ai', 'privacy-policy', 'primary', {
      publishedAt: '2026-08-10',
      summary:
        'Política vigent del servei. Identifica el responsable a Delaware, enumera les bases legals, els socis publicitaris i les transferències, i declara que les gravacions i les transcripcions de les converses amb el tutor s’analitzen per afinar els models sota interès legítim.',
    }),
    s('praktika-app-store', 'Praktika – Habla inglés ahora a l’App Store', appStore('1624701477'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa declarada per l’empresa: identificadors i dades d’ús utilitzats per rastrejar, i dades d’àudio declarades com a no vinculades amb la persona.',
    }),
    s('praktika-delete-account', 'How can I delete my account?', 'https://intercom.help/praktika-ai/en/articles/12009647-how-can-i-delete-my-account', 'Praktika.ai', 'support-doc', 'primary', {
      summary: 'Article d’ajuda que descriu el botó d’eliminació dins del perfil i adverteix que l’acció és irreversible i que no cancel·la la subscripció.',
    }),
    s('praktika-data-help', 'How does Praktika handle my personal data and information?', 'https://intercom.help/praktika-ai/en/articles/12009097-how-does-praktika-handle-my-personal-data-and-information', 'Praktika.ai', 'support-doc', 'primary', {
      summary: 'Article d’ajuda sobre el tractament de dades. Afirma que la informació és xifrada i que no es comparteix amb tercers, cosa que contradiu l’apartat publicitari de la política.',
    }),
    s('wuolah-privacy-policy', 'Política de privacidad', 'https://wuolah.com/privacy', 'Wuolads, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política vigent. Identifica el responsable a Sevilla i les finalitats, entre elles la publicitat de tercers i la determinació de gustos i preferències. No conté terminis de conservació ni transferències internacionals.',
    }),
    s('wuolah-cookies', 'Política de cookies', 'https://wuolah.com/cookies', 'Wuolads, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Reconeix galetes publicitàries i de socis per mesurar els anuncis mostrats, sense identificar cap xarxa concreta.',
    }),
    s('wuolah-app-store', 'Wuolah: Apuntes & Educación a l’App Store', appStore('1240782595'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors i dades d’ús utilitzats per rastrejar, i contingut de la persona usuària (fotos i vídeos) vinculat amb la seva identitat.',
    }),
    s('wuolah-play-data-safety', 'Seguretat de les dades de Wuolah a Google Play', 'https://play.google.com/store/apps/datasafety?id=com.wuolah.wuolahapp', 'Google', 'app-store', 'primary', {
      summary: 'Declaració de seguretat de dades de Google Play: xifratge en trànsit, mecanisme de sol·licitud d’esborrat i compartició d’identificadors i interaccions amb tercers per a analítica.',
    }),
    s('wuolah-suport-baixa', 'Wuolah explica com eliminar el compte', 'https://x.com/Wuolah/status/1014147006556725248', 'Wuolah', 'support-doc', 'secondary', {
      language: 'es',
      publishedAt: '2018-07-03',
      summary: 'Missatge del compte oficial de suport que indica que l’opció d’eliminar el compte és a la configuració del perfil. És l’única documentació pública del procediment.',
    }),
    s('kahoot-privacy-policy', 'Privacy Notice', 'https://trust.kahoot.com/privacy-policy/', 'Kahoot! AS', 'privacy-policy', 'primary', {
      publishedAt: '2026-09-01',
      summary:
        'Política vigent. Declara que el servei no inclou publicitat de tercers ni dirigida i que no s’utilitzen les dades de la plataforma per entrenar grans models de llenguatge; descriu el joc amb sobrenom i el tractament reforçat dels comptes de menors.',
    }),
    s('kahoot-trust-center', 'Kahoot! Trust Center', 'https://trust.kahoot.com/', 'Kahoot! AS', 'privacy-center', 'primary', {
      summary: 'Centre de confiança amb les certificacions ISO/IEC 27001:2022 i SOC 2 Type 2, la documentació de compliment i els enllaços als informes de transparència.',
    }),
    s('kahoot-security-measures', 'Security Measures', 'https://trust.kahoot.com/security-measures/', 'Kahoot! AS', 'technical-doc', 'primary', {
      summary: 'Detall de les mesures: xifratge AES-256 en repòs, TLS 1.2 o superior en trànsit, verificació en dos passos on està disponible i proves de penetració contínues per un tercer.',
    }),
    s('kahoot-subprocessors', 'Sub-processors', 'https://trust.kahoot.com/sub-processors/', 'Kahoot! AS', 'technical-doc', 'primary', {
      summary: 'Llista pública d’encarregats del tractament i de la seva ubicació.',
    }),
    s('kahoot-delete-account', 'How to delete my account', 'https://support.kahoot.com/hc/en-us/articles/115001597287-How-to-delete-my-account', 'Kahoot! AS', 'support-doc', 'primary', {
      summary: 'Passos de la baixa, període de gràcia d’uns cinc dies per revertir-la i contingut públic que es conserva si no s’esborra abans.',
    }),
    s('kahoot-transparency', 'Transparency', 'https://trust.kahoot.com/transparency/', 'Kahoot! AS', 'transparency-report', 'primary', {
      summary: 'Informe de transparència general i informes anuals del Reglament de Serveis Digitals.',
    }),
    s('kahoot-security-txt', 'security.txt de Kahoot!', 'https://kahoot.com/.well-known/security.txt', 'Kahoot! AS', 'technical-doc', 'primary', {
      summary: 'Fitxer vigent amb adreça de contacte de seguretat, data de caducitat i clau PGP.',
    }),
    s('kahoot-disclosure-policy', 'Responsible Disclosure Policy', 'https://kahoot.com/disclosure-policy.txt', 'Kahoot! AS', 'technical-doc', 'primary', {
      summary: 'Política de divulgació responsable amb les expectatives mútues i el reconeixement públic de qui informa, sense recompensa econòmica.',
    }),
    s('kahoot-app-store', 'Kahoot! a l’App Store', appStore('1131203560'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa sense cap dada utilitzada per rastrejar, però amb historial de cerca i de navegació declarats vinculats a la persona per a analítica.',
    }),
    s('kahoot-adquisicio', 'Kahoot! delisted from Oslo Børs following successful acquisition led by Goldman Sachs Asset Management', 'https://kahoot.com/press/2024/01/23/kahoot-delisted-from-oslo-bors-following-successful-acquisition-led-by-goldman-sachs-asset-management/', 'Kahoot! AS', 'press', 'primary', {
      publishedAt: '2024-01-23',
      summary: 'Nota oficial sobre l’exclusió de cotització i el canvi de propietat de l’empresa.',
    }),
    s('blinkdrama-privacy-policy', 'BlinkDrama Privacy Policy', 'https://www.blinkdrama.life/Privacy-Policy.html', 'Atlas Ventures Culture & Technology Limited', 'privacy-policy', 'primary', {
      publishedAt: '2026-03-18',
      summary: 'Única documentació pública del servei: identifica el responsable a Hong Kong, les categories de dades i l’adreça de contacte per donar-se de baixa. No enumera bases legals ni representant a la Unió Europea.',
    }),
    s('blinkdrama-app-store', 'BlinkDrama - Dramas y series a l’App Store', appStore('6768593043'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificador de dispositiu declarat com a dada de rastreig i vinculat a la persona per a publicitat de tercers.',
    }),
    s('ticketmaster-privacy-policy', 'Política de Privacidad', 'https://privacy.ticketmaster.es/es/privacy-policy', 'Ticketmaster Spain, S.A.U.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política vigent per a Espanya. Identifica el responsable, Live Nation com a matriu i el representant irlandès, i fixa els terminis d’eliminació del compte (fins a 90 dies) i d’esborrat dels comptes inactius als 7 anys.',
    }),
    s('ticketmaster-app-store', 'Ticketmaster a l’App Store', appStore('500003565'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: historial de compres i adreça electrònica declarats com a dades de rastreig, i una categoria de «dades sensibles» vinculada a la persona per a publicitat de tercers.',
    }),
    s('ticketmaster-suport-baixa', 'Ticketmaster España explica com eliminar el compte', 'https://x.com/TicketmasterES/status/2011841100969840990', 'Ticketmaster Spain, S.A.U.', 'support-doc', 'secondary', {
      language: 'es',
      summary: 'Resposta del canal oficial de suport que indica que la baixa es demana a privacy@ticketmaster.es i que no es tramita amb comandes actives.',
    }),
    s('ticketmaster-rights-portal', 'Ticketmaster Privacy Request Form', 'https://privacyportal.onetrust.com/webform/ba6f9c5b-dda5-43bd-bac4-4e06afccd928/a912475c-660e-40a7-b320-844ea439062a', 'Ticketmaster', 'support-doc', 'primary', {
      summary: 'Formulari de drets del RGPD gestionat amb OneTrust: accés, supressió, rectificació i portabilitat.',
    }),
    s('ticketmaster-2fa', 'Important information about Two-Factor Authentication', 'https://help.ticketmaster.com/hc/en-us/articles/29329747130641-Important-information-about-Two-Factor-Authentication', 'Ticketmaster', 'support-doc', 'primary', {
      summary: 'Explica el codi d’un sol ús per SMS i la seva caducitat de 20 minuts.',
    }),
    s('ticketmaster-8k-2024', 'Live Nation Entertainment, Inc. Form 8-K', 'https://www.sec.gov/Archives/edgar/data/1335258/000133525824000081/lyv-20240520.htm', 'U.S. Securities and Exchange Commission', 'regulator', 'authority', {
      publishedAt: '2024-05-31',
      summary: 'Comunicació obligatòria a la SEC en què Live Nation confirma l’activitat no autoritzada en una base de dades al núvol de tercers i la posada a la venda de les dades el 27 de maig de 2024.',
    }),
    s('ticketmaster-breach-premsa', 'Live Nation confirms Ticketmaster breach tied to Snowflake', 'https://therecord.media/live-nation-confirms-ticketmaster-breach-snowflake', 'The Record', 'press', 'secondary', {
      publishedAt: '2024-06-01',
      summary: 'Cobertura de la filtració amb el detall de les credencials robades d’un compte de Snowflake sense verificació en dos passos i el volum reclamat per l’atacant.',
    }),
    s('ticketmaster-ico-analisi', 'Analysis of Information Commissioner’s £1.25 million fine for Ticketmaster personal data breach', 'https://www.twobirds.com/en/insights/2020/uk/analysis-of-information-commissioners-1-25-million-fine-for-ticketmaster-personal-data-breach', 'Bird & Bird', 'press', 'independent', {
      publishedAt: '2020-11-20',
      summary: 'Anàlisi jurídica de la resolució sancionadora de l’ICO: infracció dels articles 5.1.f i 32 del RGPD, incompliment de requisits PCI DSS i nou setmanes de retard en la reacció.',
    }),
    s('ticketmaster-doj-songkick', 'Ticketmaster Pays $10 Million Criminal Fine for Intrusions into Competitor’s Computer Systems', 'https://www.justice.gov/usao-edny/pr/ticketmaster-pays-10-million-criminal-fine-intrusions-competitor-s-computer-systems-0', 'United States Department of Justice', 'regulator', 'authority', {
      publishedAt: '2020-12-30',
      summary: 'Nota de la fiscalia federal sobre l’acord de suspensió del procediment i la multa penal de 10 milions de dòlars per accedir amb credencials robades als sistemes de Songkick.',
    }),
    s('splash-privacy-policy', 'Privacy Policy', 'https://cranberry.app/privacy', 'Cranberry Apps GmbH', 'privacy-policy', 'primary', {
      summary:
        'Política vigent de l’estudi. Identifica el responsable a Berlín i un delegat de protecció de dades extern, enumera els drets del RGPD i els proveïdors del lloc web, però no documenta els SDK de l’aplicació.',
    }),
    s('splash-app-store', 'Splash: El Juego del Impostor a l’App Store', appStore('6744290388'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: cap dada vinculada amb la persona, però compres, dades d’ús i diagnòstics declarats com a utilitzables per rastrejar.',
    }),
    s('reelshort-privacy-policy', 'Privacy Policy of ReelShort', 'https://www.reelshort.com/privacy-agreement.html', 'Crazy Maple Studio, Inc.', 'privacy-policy', 'primary', {
      publishedAt: '2025-10-20',
      summary:
        'Política vigent. Identifica el responsable a Sunnyvale, enumera identificadors de maquinari, socis d’analítica i publicitat, transferències amb clàusules contractuals tipus i una conservació mínima de cinc anys.',
    }),
    s('reelshort-app-store', 'ReelShort a l’App Store', appStore('1636235979'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: només l’identificador de dispositiu declarat com a dada de rastreig, molt per sota del que descriu la política.',
    }),
    s('netshort-privacy-policy', 'Privacy Policy', 'https://netshort.com/agreement/2', 'NETSTORY PTE. LTD.', 'privacy-policy', 'primary', {
      publishedAt: '2024-09-11',
      summary:
        'Política vigent. Identifica el responsable a Singapur, enumera les bases legals per a l’Espai Econòmic Europeu, els SDK d’analítica i els drets, sense representant a la Unió Europea ni terminis concrets.',
    }),
    s('netshort-app-store', 'NetShort a l’App Store', appStore('6504849169'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors, dades d’ús, diagnòstics i una categoria «altres dades» declarats com a utilitzables per rastrejar.',
    }),
    s('disney-privacy-policy', 'Nuestra política de privacidad', 'https://privacy.thewaltdisneycompany.com/es/politica-de-privacidad/', 'The Walt Disney Company', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2025-09-30',
      summary:
        'Política vigent del grup. Identifica els responsables per regió, enumera les dades de registre, de transacció i d’ús, i admet compartir amb tercers identificadors i correus convertits en resum criptogràfic per servir i mesurar publicitat.',
    }),
    s('disney-uk-eu-rights', 'UK & EU Privacy Rights', 'https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/privacy-notice/', 'The Walt Disney Company', 'privacy-policy', 'primary', {
      summary:
        'Apartat específic per al Regne Unit i la Unió Europea: bases legals, interessos legítims declarats (incloent-hi els segments i models agregats i la cerca d’audiències similars) i mecanismes de transferència internacional.',
    }),
    s('disney-rights-portal', 'Portal de derechos de los sujetos de datos', 'https://privacy.thewaltdisneycompany.com/es/politica-de-privacidad/portal-de-derechos-de-los-sujetos-de-datos/', 'The Walt Disney Company', 'privacy-center', 'primary', {
      language: 'es',
      summary:
        'Portal de sol·licituds de drets. Els formularis d’autoservei cobreixen els Estats Units, Hulu, el Brasil i el Japó; per a Europa, l’Orient Mitjà i l’Àfrica remet a una adreça de correu.',
    }),
    s('disney-publicitat', 'Publicidad en Disney+', 'https://privacy.thewaltdisneycompany.com/es/para-padres/publicidad-en-disney/', 'The Walt Disney Company', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Pàgina per a famílies que explica que els perfils de persones menors de 18 anys reben publicitat adequada a la seva edat quan es fa servir el pla amb anuncis.',
    }),
    s('disney-plus-delete', 'Cómo eliminar mi cuenta de Disney+', 'https://help.disneyplus.com/es/article/disneyplus-delete-account', 'Disney+', 'support-doc', 'primary', {
      language: 'es',
      publishedAt: '2026-02-25',
      summary: 'Passos de la baixa autoservei, amb el codi de verificació de sis dígits i l’advertiment que l’eliminació no afecta el compte MyDisney.',
    }),
    s('disney-plus-account-security', 'Disney+ account security', 'https://help.disneyplus.com/article/disneyplus-account-security', 'Disney+', 'support-doc', 'primary', {
      publishedAt: '2026-05-06',
      summary: 'Article oficial de seguretat del compte: contrasenya mínima de sis caràcters i codi d’un sol ús quan es detecta activitat sospitosa, sense cap verificació en dos passos activable.',
    }),
    s('disney-hackerone', 'The Walt Disney Company – HackerOne', 'https://hackerone.com/disney', 'HackerOne', 'technical-doc', 'primary', {
      summary: 'Programa de divulgació de vulnerabilitats obert, sense recompenses econòmiques, amb Disney+ i els dominis de Disney Streaming dins de l’abast.',
    }),
    s('disney-plus-app-store', 'Disney+ a l’App Store', appStore('1446075923'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: les dades de publicitat es declaren com a dades utilitzades per rastrejar, i no hi ha cap categoria declarada com a no vinculada amb la persona.',
    }),
    s('disney-ftc-coppa-2025', 'Disney to Pay $10 Million to Settle FTC Allegations the Company Enabled the Unlawful Collection of Children’s Personal Data', 'https://www.ftc.gov/news-events/news/press-releases/2025/09/disney-pay-10-million-settle-ftc-allegations-company-enabled-unlawful-collection-childrens-personal', 'Federal Trade Commission', 'regulator', 'authority', {
      publishedAt: '2025-09-02',
      summary: 'Demanda i acord de la Comissió Federal de Comerç per etiquetar com a no dirigits a menors vídeos de YouTube que sí que ho eren.',
    }),
    s('disney-ftc-ordre-2025', 'Court Approves Order Requiring Disney to Pay $10 Million to Settle FTC Allegations the Firm Enabled Unlawful Collection of Children’s Personal Data', 'https://www.ftc.gov/news-events/news/press-releases/2025/12/court-approves-order-requiring-disney-pay-10-million-settle-ftc-allegations-firm-enabled-unlawful', 'Federal Trade Commission', 'regulator', 'authority', {
      publishedAt: '2025-12-31',
      summary: 'Aprovació judicial de l’ordre i de la sanció de deu milions de dòlars.',
    }),
    s('disney-ccpa-california-2026', 'California Won’t Let It Go: Attorney General Bonta Announces $2.75 Million Settlement with Disney', 'https://oag.ca.gov/news/press-releases/california-wont-let-it-go-attorney-general-bonta-announces-275-million', 'California Attorney General', 'regulator', 'authority', {
      publishedAt: '2026-02-11',
      summary: 'Acord de 2,75 milions de dòlars per incompliment de la llei de privadesa de Califòrnia: els controls d’exclusió només s’aplicaven a un dispositiu i el formulari web no arribava als tercers de publicitat incrustats.',
    }),
    s('disney-doj-nullbulge-2025', 'Santa Clarita Man Agrees to Plead Guilty to Hacking a Disney Employee’s Computer and Downloading Confidential Data', 'https://www.justice.gov/usao-cdca/pr/santa-clarita-man-agrees-plead-guilty-hacking-disney-employees-computer-downloading', 'United States Department of Justice', 'regulator', 'authority', {
      publishedAt: '2025-05-01',
      summary: 'Acord de conformitat pel robatori d’1,1 TB de converses internes de Slack de Disney i per la publicació de dades bancàries, mèdiques i personals de la persona afectada.',
    }),
    s('hbo-max-privacy-policy', 'Política de Privacidad de HBO Max (EMEA)', 'https://www.hbomax.com/privacy/es-emea', 'Warner Bros. Discovery', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2025-07-09',
      summary:
        'Política vigent per a Espanya. Enumera les dades recollides (incloent-hi categories especials en casos limitats i el registre de clics, tecles i desplaçament), la compartició amb socis comercials per a les seves pròpies finalitats i les transferències als Estats Units.',
    }),
    s('hbo-max-legal-bases', 'Tabla de bases de legitimación de HBO Max (EMEA)', 'https://www.hbomax.com/privacy/legal-bases/es-emea', 'Warner Bros. Discovery', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Taula que assigna una base legal a cada finalitat: la publicitat dirigida dins dels serveis va per consentiment i la dirigida en serveis de tercers per interès legítim.',
    }),
    s('hbo-max-controllers', 'Lista de responsables del tratamiento de Warner Bros. Discovery', 'https://www.wbdprivacy.com/policycenter/affiliates/', 'Warner Bros. Discovery', 'privacy-center', 'primary', {
      summary: 'Llista pública que identifica, per a cada servei i país, l’entitat responsable. Per a HBO Max a Espanya: HBO Nordic AB i WarnerMedia Direct LLC.',
    }),
    s('hbo-max-rights-portal', 'Individual Rights Request Portal', 'https://privacyportal.onetrust.com/webform/1b21e05d-c206-4e0b-970e-2d73a23e42e8/36c439a3-050f-4b3b-a24a-94bcd12a6ab8', 'Warner Bros. Discovery', 'support-doc', 'primary', {
      summary: 'Formulari de sol·licituds de drets del grup: accés, rectificació, supressió, limitació, portabilitat i oposició.',
    }),
    s('hbo-max-ad-choices', 'Ad Choices de Warner Bros. Discovery', 'https://www.wbdprivacy.com/opt-out/', 'Warner Bros. Discovery', 'privacy-center', 'primary', {
      summary: 'Portal d’exclusió de la publicitat dirigida, amb l’advertiment que la recollida de dades continua per a recerca, analítica i operacions internes.',
    }),
    s('hbo-max-delete-account', 'Cómo eliminar mi cuenta de HBO Max', 'https://help.hbomax.com/es-es/Answer/Detail/000002542', 'Warner Bros. Discovery', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Passos de la baixa des de l’aplicació i des del web, amb la confirmació per correu en set dies i un esborrat que triga entre quatre i cinc setmanes.',
    }),
    s('hbo-max-account-security', 'Seguridad de la cuenta de HBO Max', 'https://help.hbomax.com/es-es/Answer/Detail/000002509', 'Warner Bros. Discovery', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Recomanacions oficials de seguretat del compte, sense cap menció a la verificació en dos passos.',
    }),
    s('hbo-max-vdp', 'Report a Security Vulnerability', 'https://wbd.com/report-security-vulnerability', 'Warner Bros. Discovery', 'technical-doc', 'primary', {
      summary: 'Formulari corporatiu de comunicació responsable de vulnerabilitats, sense programa de recompenses ni abast publicat.',
    }),
    s('hbo-max-app-store', 'HBO Max a l’App Store', appStore('1666653815'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: cap dada declarada com a utilitzada per rastrejar, però una llista molt llarga de dades vinculades amb la persona i compartides per a publicitat de tercers.',
    }),
    s('hbo-vppa-mcdaniel-demanda', 'McDaniel et al. v. Home Box Office, Inc. (demanda)', 'https://www.classaction.org/media/mcdaniel-et-al-v-home-box-office-inc.pdf', 'ClassAction.org', 'other', 'secondary', {
      publishedAt: '2022-03-08',
      summary: 'Demanda col·lectiva davant el tribunal federal del Districte Sud de Nova York per la transmissió a Meta, mitjançant el píxel de Facebook, dels títols i episodis vistos a HBO Max.',
    }),
    s('hbo-vppa-mcdaniel-docket', 'McDaniel v. Home Box Office, Inc. – docket', 'https://www.courtlistener.com/docket/63143140/mcdaniel-v-home-box-office-inc/', 'CourtListener', 'other', 'secondary', {
      summary: 'Registre judicial del cas, que recull que HBO va aconseguir derivar-lo a arbitratge.',
    }),
    s('hbo-doj-mesri-2017', 'Charges Against Iranian National for Conducting Cyber Attack and $6 Million Extortion Scheme Against HBO', 'https://www.justice.gov/usao-sdny/pr/acting-manhattan-us-attorney-announces-charges-against-iranian-national-conducting', 'United States Department of Justice', 'regulator', 'authority', {
      publishedAt: '2017-11-21',
      summary: 'Acusació per l’accés no autoritzat als sistemes de Home Box Office, el robatori de guions i episodis inèdits i l’extorsió de sis milions de dòlars en bitcoin.',
    }),
  ],
  apps: [praktika, wuolah, kahoot, blinkdrama, ticketmaster, splash, reelshort, disneyPlus, netshort, hboMax],
  incidents: [
    {
      slug: 'ticketmaster-filtracio-snowflake-2024',
      title: 'Filtració massiva de dades de clients de Ticketmaster a través d’una base de dades al núvol de tercers',
      type: 'breach',
      severity: 'critical',
      apps: ['ticketmaster'],
      company: 'live-nation-entertainment',
      occurredAt: '2024-05-20',
      disclosedAt: '2024-05-31',
      description:
        'Live Nation va comunicar a la Comissió de Valors dels Estats Units que el 20 de maig de 2024 havia detectat activitat no autoritzada en una base de dades allotjada en un entorn al núvol de tercers que contenia sobretot dades de Ticketmaster, i que el 27 de maig un actor criminal va posar les dades a la venda a la web fosca. L’accés es va fer amb credencials robades d’un compte de Snowflake sense verificació en dos passos. L’atacant, que es fa dir ShinyHunters, va oferir 1,3 TB amb dades de 560 milions de clients (noms, adreces, correus, telèfons, detalls de comandes i part de la informació de les targetes) per mig milió de dòlars; la xifra és l’al·legació de qui va posar les dades a la venda i l’empresa no l’ha confirmada.',
      affectedPeople: 'Fins a centenars de milions de clients de Ticketmaster arreu del món, segons l’al·legació de l’atacant.',
      sources: ['ticketmaster-8k-2024', 'ticketmaster-breach-premsa'],
    },
    {
      slug: 'ticketmaster-ico-multa-2020',
      title: 'Multa de l’ICO britànic a Ticketmaster per la filtració del xat de pagament',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['ticketmaster'],
      company: 'live-nation-entertainment',
      occurredAt: '2018-06-23',
      disclosedAt: '2020-11-13',
      description:
        'L’autoritat britànica de protecció de dades va imposar 1,25 milions de lliures a Ticketmaster UK Limited per infringir els articles 5.1.f i 32 del RGPD. Un component de xat de l’empresa Inbenta inserit a la pàgina de pagament va permetre robar dades de fins a 9,4 milions de clients de l’Espai Econòmic Europeu, amb dades de targeta d’unes 60.000 persones. L’ICO va concloure que l’empresa no complia part dels requisits PCI DSS ni les seves pròpies polítiques internes i que va trigar nou setmanes a vigilar el trànsit després de rebre els primers avisos de frau. Ticketmaster va recórrer la resolució i el tribunal va suspendre el recurs; no hem pogut documentar-ne el resultat final.',
      affectedPeople: 'Fins a 9,4 milions de clients de l’Espai Econòmic Europeu; dades de targeta d’unes 60.000 persones.',
      regulatory: {
        authority: 'Information Commissioner’s Office (Regne Unit)',
        fineAmountEur: 1250000,
        legalBasis: 'Articles 5.1.f i 32 del RGPD',
        status: 'appealed',
      },
      sources: ['ticketmaster-ico-analisi'],
    },
    {
      slug: 'ticketmaster-songkick-2020',
      title: 'Multa penal de 10 milions de dòlars per accedir als sistemes d’un competidor',
      type: 'misuse',
      severity: 'high',
      apps: ['ticketmaster'],
      company: 'live-nation-entertainment',
      occurredAt: '2015-12-31',
      disclosedAt: '2020-12-30',
      description:
        'Ticketmaster va acceptar pagar 10 milions de dòlars de multa penal en un acord de suspensió del procediment amb la fiscalia federal del Districte Est de Nova York. Entre l’agost de 2013 i el desembre de 2015, empleats de l’empresa van fer servir contrasenyes robades per accedir repetidament als sistemes del competidor Songkick, fins i tot en una reunió interna on es van utilitzar les credencials robades. L’acord va obligar l’empresa a mantenir un programa de compliment i a informar-ne anualment durant tres anys. No és un cas de dades personals de clients, però mostra com es tractava la informació confidencial de tercers.',
      affectedPeople: 'Sistemes i dades comercials de l’empresa competidora Songkick.',
      regulatory: {
        authority: 'United States Department of Justice',
        legalBasis: 'Computer Fraud and Abuse Act',
        status: 'final',
      },
      sources: ['ticketmaster-doj-songkick'],
    },
    {
      slug: 'disney-ftc-coppa-youtube-2025',
      title: 'Sanció de deu milions de dòlars a Disney per etiquetar com a no infantils vídeos dirigits a menors',
      type: 'regulatory-fine',
      severity: 'high',
      apps: ['disney-plus'],
      company: 'walt-disney-company',
      occurredAt: '2025-09-02',
      disclosedAt: '2025-09-02',
      description:
        'La Comissió Federal de Comerç dels Estats Units va demandar Disney Worldwide Services i Disney Entertainment Operations per etiquetar a YouTube com a «no fets per a criatures», a escala de canal, vídeos que sí que ho eren (Els Increïbles, Coco, Toy Story, Frozen o Mickey Mouse), cosa que va permetre recollir dades de menors sense avís ni consentiment parental. La pràctica va continuar després que el mateix YouTube reclassifiqués més de tres-cents vídeos a mitjan 2020. L’acord fixa una sanció civil de deu milions de dòlars i obliga a implantar un programa de revisió dels vídeos, tret que YouTube desplegui tecnologies de verificació d’edat. El tribunal el va aprovar el desembre de 2025. No afecta l’aplicació Disney+, però tracta del mateix problema de fons: com es classifica el contingut infantil i què se’n deriva per a la publicitat.',
      affectedPeople: 'Menors que van veure vídeos de canals de Disney a YouTube als Estats Units.',
      regulatory: {
        authority: 'Federal Trade Commission',
        legalBasis: 'Children’s Online Privacy Protection Act',
        status: 'final',
      },
      sources: ['disney-ftc-coppa-2025', 'disney-ftc-ordre-2025'],
    },
    {
      slug: 'disney-ccpa-california-2026',
      title: 'Acord de 2,75 milions de dòlars amb la fiscalia de Califòrnia per uns controls d’exclusió que només funcionaven en un dispositiu',
      type: 'regulatory-order',
      severity: 'medium',
      apps: ['disney-plus'],
      company: 'walt-disney-company',
      occurredAt: '2026-02-11',
      disclosedAt: '2026-02-11',
      description:
        'La fiscalia general de Califòrnia va acordar amb Disney una sanció civil de 2.750.000 dòlars per incomplir la llei de privadesa de l’estat. Segons la resolució, els selectors d’exclusió de la venda i la compartició de dades només s’aplicaven al dispositiu o al servei on es feien servir i no al compte; el formulari web no arribava als tercers de publicitat incrustats; i les senyals automàtiques de control global de privadesa es limitaven a un sol dispositiu encara que la persona estigués identificada. L’acord obliga a implantar mecanismes d’exclusió que aturin realment la compartició.',
      affectedPeople: 'Persones usuàries dels serveis de Disney a Califòrnia.',
      regulatory: {
        authority: 'California Attorney General',
        fineAmountEur: 2750000,
        legalBasis: 'California Consumer Privacy Act',
        status: 'final',
      },
      sources: ['disney-ccpa-california-2026'],
    },
    {
      slug: 'disney-filtracio-slack-2024',
      title: 'Robatori i publicació d’1,1 TB de converses internes de Slack de Disney',
      type: 'breach',
      severity: 'high',
      company: 'walt-disney-company',
      occurredAt: '2024-05-01',
      disclosedAt: '2024-07-12',
      description:
        'Segons l’acord de conformitat anunciat per la fiscalia federal del Districte Central de Califòrnia el maig de 2025, Ryan Mitchell Kramer va publicar a GitHub un programa que deia generar imatges amb intel·ligència artificial i que en realitat contenia programari maliciós. Entre l’abril i el maig de 2024 una persona treballadora de Disney el va descarregar i això va donar a l’atacant accés al seu gestor de credencials. El maig de 2024 va descarregar aproximadament 1,1 TB de dades confidencials de milers de canals de Slack de l’empresa. El juliol, fent-se passar per un grup activista rus inexistent anomenat NullBulge, va publicar els fitxers i, a més, la informació bancària, mèdica i personal de la persona afectada. Almenys dues persones més van descarregar el fitxer maliciós.',
      affectedPeople: 'Milers de canals de treball interns de Disney i, de manera directa, la persona treballadora afectada.',
      sources: ['disney-doj-nullbulge-2025'],
    },
    {
      slug: 'hbo-max-vppa-mcdaniel-2022',
      title: 'Demanda col·lectiva contra HBO Max per compartir l’historial de visionat amb Meta',
      type: 'other',
      severity: 'medium',
      apps: ['hbo-max'],
      company: 'warner-bros-discovery',
      occurredAt: '2022-03-08',
      disclosedAt: '2022-03-08',
      description:
        'Una demanda col·lectiva presentada davant el tribunal federal del Districte Sud de Nova York va acusar Home Box Office d’infringir la Video Privacy Protection Act: els píxels de Facebook instal·lats a HBO Max transmetien a Meta els títols, les adreces i els episodis que es miraven, juntament amb l’identificador de Facebook de la persona a través de les galetes de sessió i de la funció de concordança avançada automàtica, sense consentiment. HBO va aconseguir que el cas es derivés a arbitratge i va quedar apartada del plet, de manera que no hi ha cap pronunciament sobre el fons ni cap acord econòmic documentat.',
      affectedPeople: 'Persones subscriptores de HBO Max als Estats Units amb sessió oberta a Facebook.',
      regulatory: {
        authority: 'U.S. District Court for the Southern District of New York',
        legalBasis: 'Video Privacy Protection Act',
        status: 'ongoing',
      },
      sources: ['hbo-vppa-mcdaniel-demanda', 'hbo-vppa-mcdaniel-docket'],
    },
    {
      slug: 'hbo-extorsio-2017',
      title: 'Intrusió i extorsió de sis milions de dòlars contra HBO',
      type: 'breach',
      severity: 'medium',
      company: 'warner-bros-discovery',
      occurredAt: '2017-05-01',
      disclosedAt: '2017-11-21',
      description:
        'La fiscalia federal de Manhattan va acusar Behzad Mesri, ciutadà iranià, d’accedir sense autorització als sistemes de Home Box Office, robar-ne dades propietàries (guions i episodis inèdits, inclosos de Joc de Trons) i extorsionar la companyia demanant sis milions de dòlars en bitcoin. És un cas de propietat intel·lectual i de seguretat corporativa: no consta que s’hi veiessin afectades dades de persones subscriptores.',
      affectedPeople: 'Dades corporatives i de producció de HBO; no consten dades de persones subscriptores.',
      regulatory: {
        authority: 'United States Department of Justice',
        legalBasis: 'Computer Fraud and Abuse Act',
        status: 'ongoing',
      },
      sources: ['hbo-doj-mesri-2017'],
    },
  ],
  storeIds: {
    praktika: 'ai.praktika.app',
    wuolah: 'com.wuolah.wuolahapp',
    kahoot: 'no.mobitroll.kahoot.controller',
    blinkdrama: 'com.blink.drama.ios',
    ticketmaster: 'com.ticketmaster.ios.TicketmasterApp',
    'splash-impostor': 'app.cranberry.splash',
    reelshort: 'com.newleaf.app.ios.vic',
    'disney-plus': 'com.disney.disneyplus',
    netshort: 'com.netshort.abroad',
    'hbo-max': 'com.wbd.stream',
  },
}
