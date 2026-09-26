import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed, FactSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 34 de la segona onada: deu aplicacions de salut i forma física del top
 * gratuït de l'App Store espanyol. Hi conviuen quatre models molt diferents:
 * les aplicacions d'entrenament (Symmetry, Hevy, Fitia), les cadenes de
 * gimnasos i el programari que les fa anar (Synergym, Basic-Fit, WodBuster,
 * Wellhub), un escàner de productes que cobra per subscripció i diu que no
 * ven res (Yuka) i dos casos on les dades són de salut en sentit estricte:
 * l'asseguradora Adeslas i el calendari menstrual Flo.
 *
 * El contrast útil del lot és entre Flo, que documenta cada encarregat del
 * tractament i té certificació ISO 27001 i 27701 després d'una actuació de la
 * Federal Trade Commission, i mitja dotzena de fitxes on la política de
 * privadesa publicada no cobreix ni de lluny el que declara l'etiqueta de
 * l'App Store: WodBuster encara cita una llei derogada el 2018 i la política
 * que enllaça Synergym és una pàgina que no es pot llegir sense JavaScript.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/** Desconegut, però amb constància del document que s'ha intentat llegir. */
const unknownFrom = (sources: string[], detail: string): FactSeed => ({
  status: 'unknown',
  level: 'unknown',
  sources,
  detail,
})

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/* ═══════════════════════════ Symmetry ═══════════════════════════ */
const symmetry: AppSeed = {
  slug: 'symmetry',
  name: 'Symmetry: Rutinas Gimnasio IA',
  company: 'symmetry-club',
  categories: ['benestar-i-activitat-fisica'],
  tagline: 'Rutines generades amb intel·ligència artificial a partir de les teves dades físiques, amb una conservació mínima de cinc anys',
  summary:
    'Symmetry genera rutines de gimnàs amb intel·ligència artificial a partir de les mesures corporals, els objectius i l’historial d’entrenaments. La política de l’aplicació diu que les dades de salut no es venen mai a tercers, però fixa que es conservaran «por un período mínimo de cinco años» per depurar responsabilitats, un termini que xoca amb la promesa de suprimir-les quan ho demanis. El responsable és una societat de Delaware i el document no esmenta cap transferència internacional ni cap mecanisme per emparar-la.',
  platforms: ['ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Estats Units; la política invoca el RGPD i l’Agència Espanyola de Protecció de Dades',
  links: {
    website: 'https://symmetry.club/',
    privacyPolicy: 'https://symmetry.club/es/app/politica-de-privacidad',
    appStore: appStore('6474446718'),
  },
  accountRequired: f('yes', 'official', ['symmetry-politica-app'], 'La política diu que, si no facilites les dades del registre o ho fas de manera incompleta, «no será posible proceder al uso de la Aplicación».'),
  openSource: f('no', 'official', ['symmetry-politica-web'], 'La societat declara que té els drets d’explotació i propietat intel·lectual del programari.', { licence: 'Privativa' }),
  dataSummary:
    'L’historial d’exercicis, les mesures corporals i els objectius físics mostren l’estat de forma d’una persona i com evoluciona mes a mes. L’aplicació hi afegeix fotografies de progrés, que són de les dades més identificatives que es poden pujar a un servei d’entrenament.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['symmetry-app-store', 'symmetry-politica-app'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['symmetry-app-store', 'symmetry-politica-app'], note: 'La política diu que el correu també es pot fer servir per a butlletins i comunicacions comercials, sempre amb consentiment previ.' }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['symmetry-app-store', 'symmetry-politica-app'], note: 'Historial d’exercicis, rutines, mètriques de rendiment, mesures corporals i objectius. La política diu que no es venen mai i que només es comparteixen amb els proveïdors imprescindibles, sota acords d’encàrrec.' }),
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['symmetry-app-store'], note: 'L’etiqueta de l’App Store declara fotografies o vídeos vinculats amb la identitat; la política no els esmenta.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['symmetry-app-store'], note: 'L’etiqueta declara que les dades vinculades es fan servir per a anàlisi i personalització del producte.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['personalitzacio-de-continguts'], sources: ['symmetry-politica-app'], note: 'La política reconeix «recomendaciones de entrenamiento generadas por IA basadas en tus datos físicos».' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['compliment-legal'], sources: ['symmetry-politica-app'], note: 'La política invoca la LSSI per retenir fins a dotze mesos la informació imprescindible per identificar l’origen de les dades allotjades.' }),
    row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['symmetry-app-store'], note: 'L’etiqueta no declara cap dada utilitzada per rastrejar-te ni cap dada de publicitat.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['symmetry-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar-te a través d’aplicacions i llocs d’altres empreses.'),
    advertisingIdentifiers: f('no', 'official', ['symmetry-app-store']),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi tècnica del trànsit de l’aplicació ni cap llista de components de tercers.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['symmetry-politica-app'], 'La política només preveu comunicacions comercials pròpies amb consentiment exprés, no publicitat segmentada amb dades de tercers.'),
    profiling: f('partial', 'official', ['symmetry-politica-app'], 'No hi ha perfilat comercial, però sí una personalització automàtica: les rutines i les recomanacions les genera un model d’intel·ligència artificial a partir de les dades físiques.'),
    aiTraining: unknownFrom(['symmetry-politica-app'], 'La política diu que la intel·ligència artificial genera les rutines, però no diu si les dades de les persones usuàries s’aprofiten per entrenar o afinar cap model, ni quin proveïdor hi ha al darrere.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['symmetry-politica-app'], 'Només proveïdors de serveis amb acord d’encàrrec del tractament; la política afirma que les dades de salut «nunca se venden a terceros» i que la resta no es comunica a ningú aliè, tret d’obligació legal.'),
    intraGroupSharing: na('No hem trobat constància que Symmetry Club LLC formi part de cap grup empresarial.'),
    dataBrokerSales: f('no', 'official', ['symmetry-politica-app'], 'La política nega expressament la venda de dades de salut a tercers.'),
    internationalTransfers: f('yes', 'editorial', ['symmetry-politica-app'], 'El responsable del tractament és una societat domiciliada a Delaware, de manera que les dades surten de l’Espai Econòmic Europeu; la política no esmenta cap transferència internacional ni cap mecanisme que l’empari.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència ni cap referència a peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['symmetry-politica-app'], 'Hi ha terminis, però allarguen la conservació: les dades es conserven mentre facis servir l’aplicació i «con el objetivo de depurar las posibles responsabilidades derivadas del tratamiento, los datos se conservarán por un período mínimo de cinco años».'),
    dataAfterDeletion: f('partial', 'official', ['symmetry-politica-app'], 'El mínim de cinc anys i els dotze mesos de dades de connexió de la LSSI sobreviuen a la sol·licitud de supressió.'),
    periods: [
      { period: 'Mínim de cinc anys per depurar responsabilitats del tractament', sources: ['symmetry-politica-app'] },
      { dataType: 'adreca-ip', period: '12 mesos (dades de connexió, per la LSSI)', sources: ['symmetry-politica-app'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['symmetry-politica-app'], 'La política reconeix el dret de supressió i el d’adreçar-se a l’Agència Espanyola de Protecció de Dades, però no descriu cap procediment concret per eliminar el compte.'),
    selfService: unknownFrom(['symmetry-politica-app'], 'No hem trobat cap pàgina d’ajuda ni cap instrucció pública que digui si el compte es pot eliminar des de la mateixa aplicació.'),
    difficulty: 'unknown',
    requiresSupportContact: true,
    steps: [
      'Escriu a soporte@symmetry.club des de l’adreça amb què et vas registrar i demana la supressió del compte invocant l’article 17 del RGPD.',
      'Guarda la resposta com a prova; la política no fixa cap termini de resposta.',
      'Si no t’atenen, reclama davant de l’Agència Espanyola de Protecció de Dades, com preveu la mateixa política.',
    ],
    obstacles:
      'La política no descriu com se suprimeix el compte i, al mateix temps, fixa una conservació mínima de cinc anys: encara que suprimeixis el compte, el document no aclareix quines dades desapareixen i quines es queden bloquejades.',
    dataRetained: 'Les dades afectades pel mínim de cinc anys i les dades de connexió retingudes per la LSSI.',
    sources: ['symmetry-politica-app'],
  },
  userRights: {
    dataExport: unknown('La política no esmenta cap eina d’exportació ni el dret de portabilitat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['symmetry-politica-app'], 'Hi ha una adreça de contacte i es reconeix el dret a revocar el consentiment i a reclamar davant de l’AEPD, però no hi ha delegat de protecció de dades ni formulari.', {
      url: 'mailto:soporte@symmetry.club',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['symmetry-politica-app'], 'Les comunicacions comercials requereixen consentiment exprés previ i es poden aturar en qualsevol moment.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica d’ús.'),
    granularControls: unknown('No hem trobat cap panell de privadesa documentat dins de l’aplicació.'),
    defaultPosture: 'unknown',
    darkPatterns: f('partial', 'editorial', ['symmetry-politica-app', 'symmetry-politica-web'], 'No hi ha patrons de retenció evidents, però la documentació legal és de plantilla: la política del web encara anomena «Symmetry Club OÜ», una societat estònia diferent del responsable declarat, i barreja clàusules d’allotjament web que no tenen res a veure amb una aplicació d’entrenament.'),
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: unknown('No hi ha documentació pública sobre les mesures tècniques concretes; la política només hi remet de manera genèrica.'),
    atRestEncryption: unknown('No consta cap informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre verificació en dos passos.'),
    independentAudits: unknown('No consten auditories independents ni certificacions publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses ni cap canal de divulgació responsable.'),
    vulnerabilityDisclosure: f('no', 'official', ['symmetry-app-store'], 'El domini symmetry.club no serveix cap fitxer .well-known/security.txt: la petició retorna la pàgina genèrica de l’aplicació web.'),
  },
  alternatives: [
    {
      app: 'hevy',
      comparability: 'equivalent',
      rationale: 'Hevy fa el mateix registre d’entrenaments sense generar-los amb intel·ligència artificial i publica una política de privadesa molt més detallada, amb terminis per categoria.',
      tradeOffs: 'A canvi, el perfil de Hevy és públic per defecte i cal entrar a la configuració per fer-lo privat.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política de l’aplicació no és a l’HTML: el web és una aplicació de pàgina única i el text només s’obté del paquet de JavaScript que serveix el mateix domini. El punt principal és la conservació mínima de cinc anys, presentada com una garantia tot i que limita el dret de supressió.',
    openQuestions: [
      'Es pot eliminar el compte des de la mateixa aplicació, com exigeix l’App Store des del 2022?',
      'Quin proveïdor de models d’intel·ligència artificial genera les rutines i on es tracten les dades?',
    ],
  },
}

/* ═══════════════════════════ Synergym ═══════════════════════════ */
const synergymApp: AppSeed = {
  slug: 'synergym',
  name: 'Synergym',
  company: 'synergym',
  categories: ['benestar-i-activitat-fisica'],
  tagline: 'La política de privadesa que enllaça la fitxa de l’App Store és una pàgina d’ajuda que no es pot llegir sense JavaScript',
  summary:
    'L’aplicació de la cadena de gimnasos Synergym, adquirida pel grup VivaGym, està construïda sobre la plataforma neerlandesa Virtuagym, i la política de privadesa que enllaça la fitxa de l’App Store és la del programari, no la del gimnàs. Aquesta pàgina és una fitxa d’un centre d’ajuda que només es renderitza amb JavaScript: no l’hem poguda llegir ni al web ni a l’arxiu d’internet, de manera que la principal font documental del servei no es pot consultar. L’etiqueta de l’App Store, en canvi, declara ubicació exacta i dades de salut vinculades amb la identitat.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya; autoritat de control: Agencia Española de Protección de Datos',
  links: {
    website: 'https://synergym.es/',
    privacyPolicy: 'https://www.virtuagym.com/virtuagym-privacy',
    appStore: appStore('6746641387'),
  },
  accountRequired: f('yes', 'official', ['synergym-app-store'], 'L’aplicació és per a persones abonades i l’etiqueta declara dades de contacte i identificador d’usuari per a la funcionalitat bàsica.'),
  openSource: f('no', 'editorial', [], 'No hem trobat cap repositori públic; la plataforma Virtuagym és programari privatiu comercialitzat per subscripció als clubs.', { licence: 'Privativa' }),
  dataSummary:
    'Registres d’entrada al club, reserves de classes, entrenaments i mesures corporals permeten reconstruir l’horari setmanal d’una persona i el seu estat de forma. L’etiqueta de l’App Store hi afegeix la ubicació exacta i el contingut que puges, i ho declara tot vinculat amb la identitat.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['synergym-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['synergym-app-store'] }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['synergym-app-store'], note: 'L’etiqueta declara «salud y forma física» tant per a la funcionalitat com per a l’anàlisi de dades.' }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['synergym-app-store'], note: 'L’etiqueta declara ubicació exacta vinculada amb la identitat per a la funcionalitat de l’aplicació. Sense política llegible no sabem per a què.' }),
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['synergym-app-store'], note: 'Contingut de l’usuari: fotos, vídeos i altres continguts.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['synergym-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['synergym-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['synergym-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['synergym-app-store'], note: 'Dades d’errors i de rendiment, declarades vinculades amb la identitat i també per a l’anàlisi.' }),
    row('dades-de-pagament', 'unknown', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', level: 'unknown', note: 'La quota es domicilia en inscriure’s al club, però no hem pogut llegir cap document que en descrigui el tractament.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['synergym-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar-te.'),
    advertisingIdentifiers: f('no', 'official', ['synergym-app-store'], 'L’etiqueta no declara cap dada de publicitat.'),
    thirdPartyTrackersPresent: unknown('No hem trobat cap anàlisi tècnica del trànsit de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: unknownFrom(['synergym-virtuagym-privacy'], 'L’única política enllaçada des de l’App Store no es pot llegir; l’etiqueta no declara finalitats publicitàries.'),
    profiling: unknownFrom(['synergym-virtuagym-privacy'], 'No hi ha cap document llegible que digui si hi ha elaboració de perfils.'),
    aiTraining: unknownFrom(['synergym-virtuagym-privacy'], 'No hi ha cap document llegible que digui si les dades s’utilitzen per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'editorial', ['synergym-app-store'], 'Com a mínim hi ha una relació entre el club i la plataforma Virtuagym, que és qui publica la política enllaçada des de la fitxa de l’App Store; no hem pogut determinar qui és responsable i qui encarregat.'),
    intraGroupSharing: unknownFrom(['synergym-virtuagym-privacy'], 'Synergym forma part del grup VivaGym des del 2026, però no hi ha cap document llegible sobre la compartició dins del grup.'),
    dataBrokerSales: unknown('No hi ha cap document llegible sobre cessions comercials.'),
    internationalTransfers: unknownFrom(['synergym-virtuagym-privacy'], 'La plataforma és neerlandesa, per tant dins de l’Espai Econòmic Europeu, però no hem pogut comprovar quins subencarregats hi intervenen.'),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: unknownFrom(['synergym-virtuagym-privacy'], 'No hi ha cap termini de conservació llegible.'),
    dataAfterDeletion: unknown('No hi ha cap document llegible sobre què es conserva després d’una baixa.'),
  },
  accountDeletion: {
    possible: unknown('No hem trobat cap procediment documentat per eliminar el compte de l’aplicació. La pàgina de baixa del web synergym.es està protegida per un tallafoc que en bloqueja la lectura automatitzada.'),
    selfService: unknown('No consta si la baixa del compte es pot fer des de l’aplicació.'),
    difficulty: 'unknown',
    obstacles:
      'Donar-se de baixa de la quota i eliminar les dades del programari de gestió són dues coses diferents, i no hem trobat documentació pública de la segona.',
    sources: ['synergym-app-store'],
  },
  userRights: {
    dataExport: unknown('No hi ha cap eina d’exportació documentada.'),
    exportFormatQuality: 'unknown',
    rightsExercise: unknown('No hem trobat cap bústia de protecció de dades publicada per a l’aplicació ni cap delegat identificat.'),
  },
  controls: {
    adPersonalizationOptOut: unknown('No hi ha documentació sobre controls publicitaris.'),
    telemetryOptOut: unknown('L’etiqueta declara analítica, però no hem trobat cap control per desactivar-la.'),
    granularControls: unknown('No hem trobat cap panell de privadesa documentat.'),
    defaultPosture: 'unknown',
    darkPatterns: f('partial', 'editorial', ['synergym-virtuagym-privacy'], 'Enllaçar com a política de privadesa una pàgina que només es renderitza amb JavaScript i que no queda arxivada equival a no publicar-ne cap: la persona abonada no pot saber què es fa amb les seves dades.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description:
          'La política enllaçada des de l’App Store és la del proveïdor de programari, no la del gimnàs que et cobra la quota, i la pàgina no es pot llegir sense JavaScript.',
        sources: ['synergym-virtuagym-privacy', 'synergym-app-store'],
      },
    ],
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: unknown('No hi ha documentació pública sobre les mesures tècniques.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades per a l’aplicació.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: f('no', 'official', ['synergym-app-store'], 'El domini virtuagym.com no serveix cap fitxer .well-known/security.txt i no hem trobat cap política de divulgació publicada.'),
  },
  alternatives: [
    {
      app: 'vivagym',
      comparability: 'equivalent',
      rationale: 'És una cadena del mateix grup amb una política de privadesa espanyola llegible, amb terminis concrets i una bústia de protecció de dades identificada.',
      tradeOffs: 'La xarxa de clubs i els preus són diferents; canviar de gimnàs per la política de privadesa només té sentit si ja t’estàs plantejant el canvi.',
    },
  ],
  review: {
    researchStatus: 'initial',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Hem intentat llegir la política enllaçada des de l’App Store per quatre camins: el domini original, les dues redireccions que encadena i l’arxiu d’internet en captures del 2022, el 2025 i el 2026. Totes retornen la mateixa pàgina buida d’un centre d’ajuda fet amb Salesforce. Per aquest motiu, la fitxa queda com a inicial.',
    openQuestions: [
      'Qui és el responsable del tractament de les dades de l’aplicació: Synergym Holding, el grup VivaGym o Virtuagym?',
      'Per a què serveix la ubicació exacta que declara l’etiqueta de l’App Store?',
      'Quin efecte ha tingut l’adquisició pel grup VivaGym sobre la base de dades afectada per la filtració del 2024?',
    ],
  },
}

/* ═══════════════════════════ Basic-Fit ═══════════════════════════ */
const basicFit: AppSeed = {
  slug: 'basic-fit',
  name: 'Basic-Fit',
  company: 'basic-fit',
  categories: ['benestar-i-activitat-fisica'],
  tagline: 'Una cadena que publica terminis concrets i que conserva les dades dos anys després de la baixa de la quota',
  summary:
    'Basic-Fit té una política detallada: una taula de terminis categoria per categoria, la promesa que les dades de les persones abonades no surten de la Unió Europea tret de Google Analytics, i la negativa explícita a prendre decisions automatitzades. En canvi, les dades generals es conserven dos anys després de la baixa, i per eliminar el compte no hi ha cap botó: cal escriure a una adreça de correu.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Països Baixos; l’aplicació opera a Espanya amb la política de l’entitat neerlandesa',
  userBase: 'Present als Països Baixos, Bèlgica, Luxemburg, França, Espanya, Alemanya i Àustria',
  links: {
    website: 'https://www.basic-fit.com/es-es/fitness/basic-fit-app',
    privacyPolicy: 'https://www.basic-fit.com/es-es/acerca-de/declaracion-de-privacidad',
    appStore: appStore('1588263601'),
  },
  accountRequired: f('yes', 'official', ['basic-fit-declaracion-privacidad'], 'L’aplicació és per a persones abonades: el compte My Basic-Fit es crea en contractar la quota.'),
  openSource: f('no', 'editorial', [], 'No hem trobat cap repositori públic del codi.', { licence: 'Privativa' }),
  dataSummary:
    'El registre dels torns d’entrada al club mostra a quina hora surts de casa, quants dies a la setmana i amb quina regularitat. Si fas servir el Body Analyzer, s’hi afegeix la composició corporal (greix, múscul, aigua i os), que és una dada de salut en sentit estricte.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['basic-fit-declaracion-privacidad', 'basic-fit-app-store'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['basic-fit-declaracion-privacidad', 'basic-fit-app-store'], note: 'La política adverteix que, en cas d’impagament, les agències de cobrament passen a ser responsables independents del tractament.' }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['basic-fit-declaracion-privacidad', 'basic-fit-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['basic-fit-declaracion-privacidad', 'basic-fit-app-store'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['basic-fit-declaracion-privacidad'] }),
    row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['basic-fit-declaracion-privacidad'], note: 'La política l’enumera entre les dades de l’abonament.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['basic-fit-declaracion-privacidad'], note: 'Compte bancari i dades de la targeta per a la quota; es conserven segons la normativa fiscal de cada país.' }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['basic-fit-declaracion-privacidad', 'basic-fit-app-store'], note: 'Alçada, pes, índex de massa corporal, objectius i, si fas servir el Body Analyzer, composició corporal. La base jurídica és el consentiment; les dades de l’app Salut d’Apple es queden al dispositiu i no entren als sistemes de Basic-Fit.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['basic-fit-declaracion-privacidad', 'basic-fit-app-store'], note: 'Fotografia de perfil i videovigilància del club, amb finalitats limitades de seguretat i sense càmeres a vestidors ni lavabos.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['basic-fit-declaracion-privacidad', 'basic-fit-app-store'], note: 'Inclou els registres dels torns d’entrada al club i l’historial de pagaments.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['basic-fit-declaracion-privacidad', 'basic-fit-app-store'], note: 'Es fa servir per lligar el codi QR d’accés a un sol telèfon i evitar que se’n comparteixi; també arriba a Google Analytics.' }),
    row('ubicacio-aproximada', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['basic-fit-declaracion-privacidad'], note: 'Només per al cercador de clubs; la política diu que Basic-Fit no l’emmagatzema.' }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['basic-fit-declaracion-privacidad'], note: 'Xat amb l’entrenador dins del programa d’entrenament: es conserva dos mesos després d’acabar-lo.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte', 'mesura-i-analisi-dus'], sources: ['basic-fit-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['basic-fit-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar-te a través d’altres empreses.'),
    advertisingIdentifiers: f('no', 'official', ['basic-fit-app-store'], 'L’etiqueta no declara identificadors publicitaris, tot i que sí que declara que les dades vinculades es fan servir per a «publicidad o marketing».'),
    thirdPartyTrackersPresent: f('yes', 'official', ['basic-fit-declaracion-privacidad'], 'La política anomena Google Analytics, que rep identificadors de dispositiu i els tracta als Estats Units, i esmenta els components de les xarxes socials.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['basic-fit-declaracion-privacidad', 'basic-fit-app-store'], 'La segmentació es fa amb dades agregades i anonimitzades per país, regió, club habitual i tipus d’abonament, no amb perfils individuals; la publicitat de tercers requereix consentiment. L’etiqueta de l’App Store, en canvi, declara «publicidad o marketing» entre els usos de les dades vinculades.'),
    profiling: f('no', 'official', ['basic-fit-declaracion-privacidad'], 'La política diu textualment que Basic-Fit no fa perfilat que porti a decisions automatitzades.'),
    aiTraining: f('no', 'official', ['basic-fit-declaracion-privacidad'], 'La política no preveu cap ús de les dades per entrenar models; tampoc no esmenta la intel·ligència artificial.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['basic-fit-declaracion-privacidad'], 'Google Analytics, agències de cobrament (com a responsables independents), entrenadors personals i monitors de classes col·lectives, i les plataformes on Basic-Fit té presència.'),
    intraGroupSharing: f('yes', 'official', ['basic-fit-declaracion-privacidad'], 'La responsable única és Basic-Fit International B.V., que gestiona els clubs dels set països on opera.'),
    dataBrokerSales: f('no', 'official', ['basic-fit-declaracion-privacidad'], 'La política no preveu cap venda de dades; la publicitat de tercers només és possible amb consentiment.'),
    internationalTransfers: f('partial', 'official', ['basic-fit-declaracion-privacidad'], 'La política afirma que les dades de les persones abonades no es tracten ni s’emmagatzemen fora de la Unió Europea, amb l’excepció de Google Analytics, emparada en clàusules contractuals tipus.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['basic-fit-declaracion-privacidad'], 'La política publica una taula de terminis per categoria, cosa infreqüent en aquest sector.'),
    dataAfterDeletion: f('yes', 'official', ['basic-fit-declaracion-privacidad'], 'Les dades generals es conserven dos anys després de la baixa i les fiscals, el que marqui la llei de cada país.'),
    periods: [
      { period: 'Dades generals de la persona abonada: 2 anys des de la baixa', sources: ['basic-fit-declaracion-privacidad'] },
      { period: 'Accés a My Basic-Fit: 1 any des de la baixa', sources: ['basic-fit-declaracion-privacidad'] },
      { dataType: 'dades-de-salut', period: '2 mesos després d’esborrar-les a l’aplicació', sources: ['basic-fit-declaracion-privacidad'] },
      { dataType: 'fotografies-i-videos', period: '28 dies (imatges de videovigilància per frau)', sources: ['basic-fit-declaracion-privacidad'] },
      { dataType: 'contingut-de-missatges', period: '2 mesos després del programa d’entrenament', sources: ['basic-fit-declaracion-privacidad'] },
      { dataType: 'veu-i-audio', period: '1 mes com a màxim (trucades per l’intercomunicador del club)', sources: ['basic-fit-declaracion-privacidad'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['basic-fit-declaracion-privacidad'], 'El dret de supressió s’exerceix escrivint al departament de privadesa; les dades s’esborren automàticament dos anys després de la baixa de l’abonament.'),
    selfService: f('partial', 'official', ['basic-fit-declaracion-privacidad'], 'Des de l’aplicació i de My Basic-Fit es poden esborrar les dades de salut, la foto de perfil i els objectius, i canviar les preferències de màrqueting, però no eliminar el compte sencer.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Dona de baixa l’abonament pel procediment del teu contracte; l’accés a My Basic-Fit es manté un any més.',
      'Des de l’aplicació o de My Basic-Fit, esborra manualment les dades de salut, la fotografia de perfil i els objectius que hi hagis introduït.',
      'Escriu a requestprivacy@basic-fit.com demanant la supressió de les dades personals; la política es compromet a respondre en quatre setmanes.',
      'Si la resposta no et convenç, adreça’t al delegat de protecció de dades a privacy@basic-fit.com.',
    ],
    obstacles:
      'No hi ha cap botó per eliminar el compte. Encara que no demanis res, les dades generals es conserven dos anys des de la baixa, i les de pagament, el que marqui la normativa fiscal.',
    dataRetained: 'Dades generals durant dos anys des de la baixa, dades fiscals segons la llei nacional i la llista de persones expulsades durant dos anys.',
    sources: ['basic-fit-declaracion-privacidad'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['basic-fit-declaracion-privacidad'], 'Els drets d’accés i portabilitat es reconeixen i s’exerceixen per correu electrònic; no hi ha cap eina d’autoservei per descarregar les dades.', {
      url: 'mailto:requestprivacy@basic-fit.com',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['basic-fit-declaracion-privacidad'], 'Hi ha una adreça específica de peticions i un delegat de protecció de dades, amb un compromís de resposta de quatre setmanes.', {
      url: 'mailto:privacy@basic-fit.com',
      responseTimeDays: 28,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['basic-fit-declaracion-privacidad'], 'Les preferències de màrqueting es canvien en qualsevol moment des de My Basic-Fit, des de l’aplicació o amb l’enllaç de baixa dels correus.'),
    telemetryOptOut: unknown('La política no descriu cap manera de desactivar l’analítica de l’aplicació.'),
    granularControls: f('partial', 'official', ['basic-fit-declaracion-privacidad'], 'Es poden esborrar dades concretes (salut, foto i objectius) i gestionar el consentiment publicitari, però no hi ha un panell de privadesa per finalitat.'),
    defaultPosture: 'mixed',
    darkPatterns: f('no', 'editorial', ['basic-fit-declaracion-privacidad'], 'No hem trobat patrons enganyosos a la documentació; l’objecció és que no hi ha cap botó per eliminar el compte.'),
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades més enllà del xat amb l’entrenador.'),
    transportEncryption: unknown('La política no detalla les mesures tècniques de xifratge en trànsit.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre verificació en dos passos a My Basic-Fit.'),
    independentAudits: unknown('No consten auditories ni certificacions de seguretat publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: f('no', 'official', ['basic-fit-app-store'], 'El domini basic-fit.com no serveix cap fitxer .well-known/security.txt i no hem trobat cap política de divulgació publicada.'),
  },
  alternatives: [
    {
      app: 'vivagym',
      comparability: 'equivalent',
      rationale: 'Cadena de quota baixa comparable amb una política espanyola que també publica terminis concrets i identifica les societats del grup.',
      tradeOffs: 'La baixa de VivaGym depèn d’un dia límit mensual que varia segons el club.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La taula de terminis de Basic-Fit diu quant de temps es conserva cada categoria i per què. La contradicció principal és que l’etiqueta de l’App Store declara «publicidad o marketing» com a ús de dades vinculades mentre la política insisteix que la segmentació és agregada.',
    openQuestions: [
      'Quines dades vinculades es fan servir exactament per a «publicidad o marketing», segons l’etiqueta de l’App Store?',
      'Hi ha alguna sanció o requeriment de l’Autoriteit Persoonsgegevens neerlandesa o de l’AEPD contra la cadena?',
    ],
  },
}

/* ═══════════════════════════ Hevy ═══════════════════════════ */
const hevy: AppSeed = {
  slug: 'hevy',
  name: 'Hevy',
  company: 'hevy-studios',
  categories: ['benestar-i-activitat-fisica', 'xarxes-socials'],
  tagline: 'Registre d’entrenaments amb el perfil públic per defecte, visible per a qualsevol persona usuària fins que ho canvies a la configuració',
  summary:
    'Hevy és un registre d’entrenaments fet a Girona amb una capa social: seguidors, rutines compartides i un tauler d’activitat. La política diu que «quan es crea un compte, el perfil és públic per defecte» i, si actives la compartició del gimnàs, l’aplicació pot suggerir el teu perfil a qui entreni al mateix lloc. Té dues polítiques diferents alhora: la que enllaça l’App Store, allotjada a iubenda, parla de retargeting conductual, i la del web, més extensa, detalla terminis per categoria i anomena OpenAI i Anthropic entre els proveïdors.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Espanya; autoritat de control: Agencia Española de Protección de Datos',
  links: {
    website: 'https://www.hevyapp.com',
    privacyPolicy: 'https://www.hevyapp.com/privacy/',
    appStore: appStore('1458862350'),
  },
  accountRequired: f('yes', 'official', ['hevy-privacy-policy'], 'Cal crear un compte amb nom d’usuari i adreça electrònica per registrar entrenaments i sincronitzar-los.'),
  openSource: f('no', 'editorial', [], 'No hem trobat cap repositori públic del codi de l’aplicació.', { licence: 'Privativa' }),
  dataSummary:
    'Un historial d’entrenaments registra dies, hores, durada i progressió de força. Amb el pes, l’alçada i les mesures corporals, i amb el perfil públic per defecte, aquesta informació és visible per a altres persones sense que calgui cap filtració.',
  dataCollection: [
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['hevy-privacy-policy', 'hevy-app-store'], note: 'L’etiqueta de l’App Store declara l’identificador d’usuari com a dada NO vinculada amb la identitat, cosa difícil de quadrar amb un perfil públic amb nom d’usuari.' }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['hevy-privacy-policy', 'hevy-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['hevy-privacy-policy', 'hevy-app-store'] }),
    row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['hevy-iubenda-privacy'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['hevy-iubenda-privacy'] }),
    row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['hevy-iubenda-privacy'] }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['hevy-privacy-policy'], note: 'Registres d’entrenament, alçada, pes, mesures corporals i freqüència cardíaca importada de rellotges connectats. L’etiqueta de l’App Store declara «datos sensibles» com a NO vinculats amb la identitat.' }),
    row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['hevy-privacy-policy'], note: 'Els entrenaments amb visibilitat «Everyone» els veu qualsevol persona usuària de Hevy.' }),
    row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['hevy-app-store', 'hevy-privacy-policy'], note: 'L’etiqueta declara la categoria «Contactos» vinculada amb la identitat; la política explica que, amb el gimnàs compartit i el perfil públic, l’aplicació pot suggerir el teu perfil a altres persones del mateix gimnàs.' }),
    row('ubicacio-aproximada', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['recomanacions-algoritmiques'], sources: ['hevy-privacy-policy'], note: 'Només si dones consentiment per compartir el gimnàs on entrenes.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['hevy-app-store', 'hevy-iubenda-privacy'], note: 'La subscripció es cobra per l’App Store o Google Play; Hevy no desa el número complet de la targeta.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'mesura-publicitaria'], sources: ['hevy-app-store', 'hevy-iubenda-privacy'], note: 'Amplitude i Adjust reben dades d’ús; la política d’iubenda parla de retargeting conductual.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['hevy-iubenda-privacy'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['hevy-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('partial', 'official', ['hevy-iubenda-privacy', 'hevy-app-store'], 'La política enllaçada des de l’App Store descriu retargeting conductual amb Adjust i remet a AppChoices per desactivar-lo, però l’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar-te. Les dues afirmacions són difícils de conciliar.'),
    advertisingIdentifiers: f('partial', 'official', ['hevy-iubenda-privacy'], 'El retargeting conductual que descriu la política requereix identificadors publicitaris, tot i que l’etiqueta de l’App Store no els declara.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['hevy-iubenda-privacy'], 'Amplitude i Google Ireland per a l’analítica, Adjust per a l’atribució publicitària.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['hevy-iubenda-privacy'], 'La política d’iubenda inclou «behavioral retargeting» amb anuncis adaptats als interessos i al comportament, amb sortida des de la configuració del dispositiu.'),
    profiling: f('partial', 'official', ['hevy-privacy-policy'], 'Hi ha recomanacions socials (suggerir perfils de persones del mateix gimnàs) i segmentació publicitària, però no consta cap perfilat amb efectes jurídics.'),
    aiTraining: f('partial', 'official', ['hevy-privacy-policy'], 'La política anomena OpenAI i Anthropic entre els tercers als quals s’accedeix, però no detalla quines dades hi arriben ni si serveixen per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['hevy-privacy-policy', 'hevy-iubenda-privacy'], 'OpenAI, Anthropic, Apple, Strava, Google Analytics, Amplitude, Adjust i proveïdors d’allotjament.'),
    intraGroupSharing: na('Hevy Studios, S.L. és una societat única, sense grup empresarial conegut.'),
    dataBrokerSales: f('no', 'official', ['hevy-privacy-policy'], 'La política no preveu cap venda de dades a intermediaris.'),
    internationalTransfers: f('yes', 'official', ['hevy-privacy-policy'], 'Transferències als Estats Units i a Irlanda emparades en clàusules contractuals tipus i, quan el destinatari hi està certificat, en el marc de privadesa de dades UE-EUA.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['hevy-privacy-policy'], 'Hi ha terminis per a algunes categories, però les dades de compte i d’entrenament es conserven indefinidament mentre el compte estigui obert.'),
    dataAfterDeletion: f('partial', 'official', ['hevy-privacy-policy'], 'Les mesures corporals s’esborren en trenta dies des de la sol·licitud; la resta segueix el termini general.'),
    periods: [
      { dataType: 'dades-de-salut', period: '30 dies des de la sol·licitud (mesures corporals)', sources: ['hevy-privacy-policy'] },
      { period: 'Dades de compte i d’entrenament: mentre el compte estigui obert', sources: ['hevy-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['hevy-privacy-policy'], 'El dret de supressió es reconeix i s’exerceix escrivint al contacte de protecció de dades.'),
    selfService: f('no', 'official', ['hevy-privacy-policy'], 'La política només descriu la via del correu electrònic amb la referència «Data Protection Rights»; no documenta cap botó d’eliminació dins de l’aplicació.'),
    difficulty: 'medium',
    waitingPeriodDays: 30,
    requiresSupportContact: true,
    steps: [
      'Abans de res, exporta els entrenaments si els vols conservar: la política reconeix el dret de portabilitat en format estructurat i llegible per màquina.',
      'Escriu al contacte de protecció de dades de Hevy indicant «Data Protection Rights» i demanant la supressió del compte.',
      'Espera la resposta: la política es compromet a resoldre en el termini d’un mes.',
      'Si només vols treure el perfil de la vista pública, a la configuració pots fer-lo privat i canviar la visibilitat de cada entrenament, sense donar-te de baixa.',
    ],
    obstacles:
      'La supressió passa per un correu electrònic i no per la configuració, i les mesures corporals encara triguen trenta dies més a desaparèixer.',
    dataRetained: 'Les mesures corporals fins a trenta dies després de la sol·licitud.',
    sources: ['hevy-privacy-policy'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['hevy-privacy-policy'], 'La política reconeix el dret a rebre les dades en un format estructurat, d’ús comú i llegible per màquina, i a transmetre-les a un altre responsable.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['hevy-privacy-policy'], 'Hi ha un contacte de protecció de dades identificat i un compromís de resposta d’un mes.', {
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['hevy-iubenda-privacy'], 'La sortida del retargeting es fa des de la configuració del dispositiu o des de recursos externs com AppChoices, no des d’un control dins de l’aplicació.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica d’Amplitude.'),
    granularControls: f('yes', 'official', ['hevy-privacy-policy'], 'La visibilitat es pot ajustar a dos nivells: perfil públic o privat, i visibilitat per a cada entrenament.'),
    defaultPosture: 'permissive',
    darkPatterns: f('yes', 'editorial', ['hevy-privacy-policy'], 'Un perfil públic per defecte en una aplicació que desa pes, mesures corporals i horaris d’entrenament inverteix la regla de protecció de dades des del disseny i per defecte de l’article 25 del RGPD: la configuració més protectora hauria de ser la de sortida.'),
    darkPatternList: [
      {
        type: 'preselected',
        severity: 'high',
        description:
          'Els perfils es creen públics i els entrenaments marcats com a «Everyone» els veu qualsevol persona usuària de Hevy fins que entres a la configuració a canviar-ho.',
        sources: ['hevy-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: unknown('La política parla de mesures tècniques i organitzatives adequades, sense detallar-les.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: f('no', 'official', ['hevy-app-store'], 'El domini hevyapp.com no serveix cap fitxer .well-known/security.txt i no hem trobat cap política de divulgació publicada.'),
  },
  alternatives: [
    {
      app: 'symmetry',
      comparability: 'partial',
      rationale: 'Cobreix el mateix ús, el seguiment d’entrenaments de gimnàs, sense component social: no hi ha perfil públic ni suggeriments de persones del mateix gimnàs.',
      tradeOffs: 'La política de Symmetry és molt més pobra i fixa una conservació mínima de cinc anys.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Hevy té dues polítiques en circulació alhora: la que enllaça l’App Store, generada amb iubenda, i la del seu web, més detallada. No diuen el mateix, i la primera és la que la gent veu abans d’instal·lar. El punt principal de la fitxa, però, és el perfil públic per defecte, que la política declara explícitament.',
    openQuestions: [
      'Quines dades arriben a OpenAI i a Anthropic, i per a quina funció de l’aplicació?',
      'Per què l’etiqueta de l’App Store declara l’identificador d’usuari i les dades sensibles com a NO vinculades amb la identitat?',
    ],
  },
}

/* ═══════════════════════════ Yuka ═══════════════════════════ */
const yuka: AppSeed = {
  slug: 'yuka',
  name: 'Yuka',
  company: 'yuca',
  categories: ['benestar-i-activitat-fisica', 'alimentacio-i-restauracio'],
  tagline: 'Una etiqueta de privadesa que només declara interacció i errors, i un botó d’eliminació que esborra tot el compte',
  summary:
    'Yuka escaneja el codi de barres d’aliments i cosmètics i en dona una nota. El model de negoci és una subscripció premium i la companyia publica els comptes anuals per demostrar que no cobra de cap marca. L’etiqueta de l’App Store només declara interacció amb el producte i dades d’errors, i cap dada utilitzada per rastrejar-te. Cal registrar-s’hi, i la política reconeix que les noves funcions d’intel·ligència artificial poden enviar dades a OpenAI o a Google Cloud AI.',
  platforms: ['ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'França; autoritat de control: Commission nationale de l’informatique et des libertés',
  userBase: 'Desenes de milions de comptes a França, Espanya i altres mercats',
  links: {
    website: 'https://yuka.io/es',
    privacyPolicy: 'https://help.yuka.io/l/es/article/jcejovibd3',
    appStore: appStore('1092799236'),
  },
  accountRequired: f('yes', 'official', ['yuka-registre'], 'Cal registrar-s’hi per dos motius que la companyia explica: assegurar la qualitat de les contribucions a la base de dades i lligar l’historial d’escanejos a un compte.'),
  openSource: f('no', 'editorial', [], 'L’aplicació és privativa, tot i que la base de dades d’aliments que fa servir prové en bona part de projectes col·laboratius.', { licence: 'Privativa' }),
  dataSummary:
    'L’historial d’escanejos diu què menges, què t’apliques a la pell i amb quina freqüència; creuat amb les alertes personalitzades, revela restriccions alimentàries, al·lèrgies i, indirectament, condicions de salut. La política afirma que aquestes dades no es tracten com a categories especials i que no es venen.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['yuka-politica-privacidad'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['yuka-politica-privacidad'], note: 'Mailchimp, Mandrill i Brevo per als correus del servei i el butlletí.' }),
    row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['yuka-politica-privacidad'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['yuka-politica-privacidad', 'yuka-registre'], note: 'L’historial d’escanejos queda lligat al compte perquè el puguis recuperar.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['yuka-app-store', 'yuka-politica-privacidad'], note: 'Google Analytics i Firebase Analytics.' }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['yuka-politica-privacidad'], note: 'Els pagaments de la subscripció els processen Apple Pay, Google Pay i Stripe.' }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['yuka-politica-privacidad'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['yuka-politica-privacidad'] }),
    row('ubicacio-aproximada', 'optional', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['yuka-politica-privacidad'], note: 'La política enumera dades d’ubicació entre les recollides, sense concretar-ne la finalitat.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['yuka-app-store'] }),
    row('dades-de-salut', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['yuka-politica-privacidad'], note: 'La política afirma que no tracta dades personals sensibles; les preferències alimentàries, però, permeten inferir intoleràncies i conviccions.' }),
    row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['yuka-app-store', 'yuka-politica-privacidad'], note: 'L’etiqueta no declara cap dada de publicitat i la política nega la publicitat segmentada.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['yuka-app-store', 'yuka-politica-privacidad'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar-te i la política afirma que no ha venut ni compartit dades amb finalitats comercials en els darrers dotze mesos.'),
    advertisingIdentifiers: f('no', 'official', ['yuka-app-store']),
    thirdPartyTrackersPresent: f('partial', 'official', ['yuka-politica-privacidad'], 'Hi ha analítica de Google Analytics i Firebase, però no components publicitaris.'),
  },
  dataUses: {
    targetedAdvertising: f('no', 'official', ['yuka-politica-privacidad', 'yuka-financament'], 'La política nega la publicitat segmentada amb les dades recollides i el finançament ve de la subscripció premium, no de les marques.'),
    profiling: f('partial', 'official', ['yuka-politica-privacidad'], 'Hi ha personalització (alertes segons les preferències alimentàries), però no elaboració de perfils amb finalitats comercials.'),
    aiTraining: f('partial', 'official', ['yuka-politica-privacidad'], 'La política reconeix funcions basades en intel·ligència artificial amb proveïdors com OpenAI o Google Cloud AI i diu que s’hi poden compartir dades amb aquesta finalitat; no aclareix si serveixen per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['yuka-politica-privacidad'], 'Google Analytics i Firebase per a l’analítica, Mailchimp, Mandrill i Brevo per al correu, Google Cloud, Firebase, Algolia i DigitalOcean per a la infraestructura, Apple Pay, Google Pay i Stripe per als pagaments, i OpenAI o Google Cloud AI per a les funcions d’intel·ligència artificial.'),
    intraGroupSharing: na('Yuca SAS és una societat única, sense grup empresarial conegut.'),
    dataBrokerSales: f('no', 'official', ['yuka-dades-usuari', 'yuka-politica-privacidad'], 'La companyia diu textualment que, per raons ètiques, Yuka no ven ni explota cap dada personal.'),
    internationalTransfers: f('yes', 'official', ['yuka-politica-privacidad'], 'Servidors als Estats Units, als Països Baixos i a França, amb clàusules contractuals tipus de la Unió Europea per a les transferències.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: f('partial', 'official', ['yuka-financament'], 'No hi ha un informe de transparència sobre peticions d’autoritats, però la companyia publica els seus comptes anuals per acreditar la independència econòmica.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['yuka-politica-privacidad'], 'La política diu que les dades es conserven només el temps necessari per a les finalitats o per obligació legal, sense terminis concrets per categoria.'),
    dataAfterDeletion: f('partial', 'official', ['yuka-politica-privacidad', 'yuka-eliminar-compte'], 'En eliminar el compte s’esborren totes les dades associades, però la política reconeix que se’n poden mantenir còpies de seguretat per a la prevenció del frau i el compliment legal.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['yuka-eliminar-compte'], 'Segons la pàgina d’ajuda, en suprimir el compte s’esborren també totes les dades associades.'),
    selfService: f('yes', 'official', ['yuka-eliminar-compte'], 'L’eliminació es fa des de la configuració de l’aplicació al mòbil, o amb l’enllaç directe que dona la mateixa pàgina d’ajuda.'),
    directUrl: 'https://app.yuka.io/deleteAccount',
    difficulty: 'easy',
    steps: [
      'Obre l’aplicació al mòbil i entra a la configuració del compte.',
      'Tria l’opció d’eliminar el compte, o obre https://app.yuka.io/deleteAccount des del mateix telèfon.',
      'Confirma: en suprimir el compte s’esborra tota la informació associada, inclòs l’historial d’escanejos.',
      'Si vols exercir algun altre dret, escriu a equipo@yuka.io des de l’adreça del compte o fes servir el formulari de contacte.',
    ],
    dataRetained: 'Còpies de seguretat per a la prevenció del frau i el compliment de les obligacions legals.',
    sources: ['yuka-eliminar-compte', 'yuka-gestionar-dades', 'yuka-politica-privacidad'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['yuka-gestionar-dades'], 'El dret d’accés s’exerceix per correu o amb un formulari, però no hi ha cap eina d’autoservei per descarregar l’historial.', {
      url: 'https://yuka.io/contact/user/form/',
    }),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['yuka-gestionar-dades', 'yuka-politica-privacidad'], 'Hi ha dues vies documentades (correu a equipo@yuka.io i formulari) i un delegat de protecció de dades identificat.', {
      url: 'mailto:dpo@yuka.io',
    }),
  },
  controls: {
    adPersonalizationOptOut: na('No hi ha publicitat al servei: la política nega la publicitat segmentada i el finançament ve de la subscripció.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica de Google Analytics i Firebase.'),
    granularControls: f('partial', 'official', ['yuka-gestionar-dades'], 'La configuració permet canviar el nom, el correu i la contrasenya i eliminar el compte, però no hi ha controls per finalitat.'),
    defaultPosture: 'protective',
    darkPatterns: f('no', 'editorial', ['yuka-eliminar-compte', 'yuka-financament'], 'No hem trobat patrons enganyosos: la sortida és un botó, el model de negoci està explicat i els comptes són públics.'),
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: unknown('La política no detalla les mesures tècniques de xifratge.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre verificació en dos passos.'),
    independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: f('no', 'official', ['yuka-app-store'], 'El domini yuka.io no serveix cap fitxer .well-known/security.txt i no hem trobat cap política de divulgació publicada.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Yuka és una aplicació de salut amb una etiqueta de privadesa de dues línies i una eliminació del compte d’un clic. El punt que caldrà revisar és el de la intel·ligència artificial, que la política ha incorporat recentment i encara descriu de manera vaga.',
    openQuestions: [
      'Quines dades concretes s’envien a OpenAI o a Google Cloud AI i per a quina funció de l’aplicació?',
      'Per a què es fan servir les dades d’ubicació que enumera la política?',
    ],
  },
}

/* ═══════════════════════════ Adeslas ═══════════════════════════ */
const adeslas: AppSeed = {
  slug: 'adeslas',
  name: 'Adeslas',
  company: 'segurcaixa-adeslas',
  categories: ['salut-i-assistencia-sanitaria'],
  tagline: 'Declara historial de navegació per rastrejar-te, i cap dada vinculada amb la identitat',
  summary:
    'L’aplicació de l’asseguradora gestiona pòlisses, autoritzacions, reembossaments i orientació mèdica a distància, i demana accés a la càmera, al micròfon i als sensors corporals del telèfon. L’etiqueta de l’App Store, en canvi, no declara cap dada vinculada amb la identitat, tot i que el servei s’identifica amb la pòlissa, i sí que declara historial de navegació utilitzat per rastrejar-te. La política corporativa és extensa i reconeix el tractament de dades de salut i biomètriques, el perfilat actuarial per fixar la prima i la cessió a sistemes sectorials del sector assegurador.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya; autoritat de control: Agencia Española de Protección de Datos',
  userBase: 'Milions de persones assegurades a Espanya',
  links: {
    website: 'https://www.segurcaixaadeslas.es/',
    privacyPolicy: 'https://www.segurcaixaadeslas.es/proteccion-de-datos',
    terms: 'https://www.segurcaixaadeslas.es/aviso-legal',
    appStore: appStore('1218328989'),
  },
  accountRequired: f('yes', 'official', ['adeslas-aviso-legal'], 'Per accedir a l’àrea privada cal ser client de SegurCaixa Adeslas i registrar-se prèviament amb el formulari corresponent.'),
  openSource: f('no', 'editorial', [], 'No hem trobat cap repositori públic; l’aplicació la desenvolupa un proveïdor per a l’asseguradora.', { licence: 'Privativa' }),
  dataSummary:
    'Una pòlissa de salut genera el registre mèdic d’una persona: quines proves demana, a quins especialistes va, quines autoritzacions li aproven i quines li deneguen. La política hi afegeix dades biomètriques, models estadístics que fixen la prima i la comunicació d’aquestes dades a altres asseguradores quan hi ha un sinistre.',
  dataCollection: [
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['adeslas-proteccion-de-datos'] }),
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['adeslas-proteccion-de-datos'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['adeslas-proteccion-de-datos'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['adeslas-proteccion-de-datos'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['adeslas-proteccion-de-datos'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['adeslas-proteccion-de-datos'] }),
    row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['adeslas-proteccion-de-datos'] }),
    row('origen-etnic-o-nacionalitat', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['adeslas-proteccion-de-datos'], note: 'La política enumera la nacionalitat entre les dades identificatives i de contacte.' }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau', 'investigacio-i-estadistica'], sources: ['adeslas-proteccion-de-datos'], note: 'Es comuniquen a centres i professionals sanitaris, a entitats reasseguradores i, en cas de sinistre de danys personals, a les altres asseguradores implicades.' }),
    row('dades-biometriques', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['adeslas-proteccion-de-datos'], note: 'La política inclou dades biomètriques entre les categories tractades per a la gestió de les relacions contractuals.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['adeslas-proteccion-de-datos'] }),
    row('nivell-d-ingressos', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['elaboracio-de-perfils'], sources: ['adeslas-proteccion-de-datos'], note: 'Dades laborals, professionals i socioeconòmiques, utilitzades també per als models estadístics que fixen la prima.' }),
    row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['adeslas-proteccion-de-datos'], note: 'L’aplicació demana accés al micròfon per al servei d’orientació mèdica a distància.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['adeslas-proteccion-de-datos'], note: 'Accés a la càmera per a la videoconsulta i per enviar imatges al professional.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['adeslas-proteccion-de-datos'], note: 'La política descriu l’elaboració d’un perfil comercial per ajustar les comunicacions, emparat en l’interès legítim i amb dret d’oposició.' }),
    row('historial-de-navegacio', 'yes', { linked: 'no', tracking: 'yes', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['adeslas-app-store'], note: 'És l’única categoria que l’etiqueta de l’App Store declara com a utilitzada per rastrejar-te.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['adeslas-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['adeslas-app-store'], 'L’etiqueta de l’App Store declara l’historial de navegació sota «Datos usados para rastrearte», és a dir, per seguir-te a través d’aplicacions i llocs d’altres empreses.'),
    advertisingIdentifiers: unknown('L’etiqueta no declara identificadors publicitaris i la política no els esmenta.'),
    thirdPartyTrackersPresent: f('partial', 'official', ['adeslas-proteccion-de-datos', 'adeslas-app-store'], 'La política inclou «datos de navegación» entre les categories tractades per a diverses finalitats, inclosa la prospecció comercial.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['adeslas-proteccion-de-datos'], 'La política empara en l’interès legítim les accions comercials sobre clients, amb segmentació i elaboració d’un perfil comercial per ajustar les comunicacions; s’hi pot oposar de manera gratuïta.'),
    profiling: f('yes', 'official', ['adeslas-proteccion-de-datos'], 'N’hi ha de dos tipus: el perfilat actuarial per determinar la prima en la subscripció del contracte i el perfilat comercial per segmentar les campanyes.'),
    aiTraining: unknownFrom(['adeslas-proteccion-de-datos'], 'La política parla de models estadístics i de fórmules algorítmiques, però no diu res sobre l’entrenament de models d’intel·ligència artificial.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['adeslas-proteccion-de-datos'], 'Administracions i tribunals, el Consorcio de Compensación de Seguros, entitats asseguradores i reasseguradores, centres i professionals sanitaris, pèrits i entitats financeres; en les pòlisses d’automòbil, els sistemes sectorials gestionats per TIREA.'),
    intraGroupSharing: f('yes', 'official', ['adeslas-proteccion-de-datos'], 'La política preveu comunicar a la matriu del grup la informació mínima imprescindible per complir les obligacions mercantils i d’assegurances, i la cessió a Mutua Madrileña Automovilista.'),
    dataBrokerSales: f('no', 'official', ['adeslas-proteccion-de-datos'], 'La política diu que no es fan cessions a tercers fora dels supòsits que enumera, tots amb base de legitimació.'),
    internationalTransfers: f('yes', 'official', ['adeslas-proteccion-de-datos'], 'Quan hi ha proveïdors fora de l’Espai Econòmic Europeu o en països sense decisió d’adequació, la política diu que se’ls exigeixen les garanties adequades del RGPD, sense concretar quin mecanisme.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['adeslas-proteccion-de-datos'], 'Hi ha criteris i algun termini concret (divuit mesos per a les comunicacions comercials a clients potencials), però la regla general és el bloqueig fins que prescriguin les responsabilitats.'),
    dataAfterDeletion: f('partial', 'official', ['adeslas-proteccion-de-datos'], 'Donar de baixa els serveis digitals suprimeix les dades que hi consten, però les de la pòlissa passen a bloqueig i queden a disposició d’administracions i tribunals.'),
    periods: [
      { dataType: 'adreca-electronica', period: '18 mesos (comunicacions comercials a clients potencials amb consentiment)', sources: ['adeslas-proteccion-de-datos'] },
      { period: 'Dades dels serveis digitals: mentre duri la relació contractual o fins que en demanis la baixa', sources: ['adeslas-proteccion-de-datos'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['adeslas-proteccion-de-datos'], 'Es pot demanar la baixa dels serveis digitals, i llavors es tanca l’accés i se’n suprimeixen les dades; les de la pòlissa no s’esborren, es bloquegen pels terminis de prescripció.'),
    selfService: unknownFrom(['adeslas-proteccion-de-datos'], 'La política no descriu si la baixa dels serveis digitals es pot fer des de l’aplicació o si cal demanar-la per un altre canal.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Revoca els consentiments que hagis donat per als serveis de prevenció i foment de la salut: la política diu que llavors se’n suprimeixen les dades.',
      'Demana la baixa dels serveis digitals; en desaparèixer la condició que hi dona accés, s’impedeix l’accés i se suprimeixen les dades que hi consten.',
      'Per a qualsevol altre dret, escriu al delegat de protecció de dades a dpd@segurcaixaadeslas.es o per correu postal a la seu social amb la referència «Delegado de Protección de Datos».',
      'Recorda que cancel·lar la pòlissa no esborra l’expedient: les dades passen a bloqueig pels terminis de prescripció.',
    ],
    obstacles:
      'Com a asseguradora, conserva bona part de les dades per obligació legal i sectorial, i les que s’han comunicat a sistemes com els de TIREA s’han de reclamar directament a aquestes entitats.',
    dataRetained: 'Les dades de la pòlissa i dels sinistres, bloquejades a disposició d’administracions, jutges i tribunals durant el termini de prescripció.',
    sources: ['adeslas-proteccion-de-datos'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['adeslas-proteccion-de-datos'], 'Els drets d’accés i portabilitat es reconeixen i s’exerceixen davant del delegat de protecció de dades; no hi ha cap eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['adeslas-proteccion-de-datos'], 'Hi ha un delegat de protecció de dades amb adreça electrònica i postal, i la política ofereix consultar l’anàlisi de ponderació de l’interès legítim de cada tractament.', {
      url: 'mailto:dpd@segurcaixaadeslas.es',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['adeslas-proteccion-de-datos'], 'La política diu que l’oposició als tractaments basats en l’interès legítim, inclosa la prospecció comercial, es pot fer de manera senzilla i gratuïta.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica de l’aplicació.'),
    granularControls: f('partial', 'official', ['adeslas-proteccion-de-datos'], 'Els permisos del telèfon (memòria, càmera, micròfon i sensors corporals) es poden denegar un per un, però només hi ha oposició per finalitat, no un panell de privadesa.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', ['adeslas-app-store', 'adeslas-proteccion-de-datos'], 'Declarar a l’App Store que no hi ha cap dada vinculada amb la identitat en una aplicació on entres amb la pòlissa i consultes autoritzacions mèdiques fa que l’etiqueta no serveixi per entendre quines dades es tracten.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description:
          'L’etiqueta de l’App Store no declara cap dada vinculada amb la identitat, mentre la política corporativa reconeix el tractament de dades de salut, biomètriques i financeres de la persona assegurada.',
        sources: ['adeslas-app-store', 'adeslas-proteccion-de-datos'],
      },
    ],
  },
  security: {
    e2ee: na('El servei no ofereix xifratge d’extrem a extrem; la videoconsulta passa pels sistemes de l’asseguradora i dels seus proveïdors.'),
    transportEncryption: unknown('La política no detalla les mesures tècniques de xifratge en trànsit.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre verificació en dos passos a l’Àrea Cliente.'),
    independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hem pogut comprovar si hi ha un fitxer security.txt: el domini està darrere d’un tallafoc que respon amb un error a qualsevol petició automatitzada.'),
  },
  alternatives: [
    {
      app: 'asisa',
      comparability: 'partial',
      rationale: 'És una altra asseguradora de salut espanyola amb una aplicació equivalent; el tractament de fons és comparable perquè el marca la normativa d’assegurances.',
      tradeOffs: 'En triar asseguradora pesen més la cobertura i el quadre mèdic que la política de privadesa.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Els dominis de SegurCaixa Adeslas estan protegits per un tallafoc que bloqueja qualsevol lectura automatitzada; la política s’ha llegit a través de l’arxiu d’internet, i la fitxa ho fa constar a cada font. El punt principal és el contrast entre una política corporativa llarga i completa i una etiqueta d’App Store que gairebé no declara res.',
    openQuestions: [
      'Quin és l’historial de navegació que l’etiqueta de l’App Store declara com a utilitzat per rastrejar, i a quina empresa arriba?',
      'Per a què es tracten les dades biomètriques que enumera la política?',
      'Hi ha alguna sanció de l’AEPD contra SegurCaixa Adeslas relacionada amb aquesta aplicació?',
    ],
  },
}

/* ═══════════════════════════ Flo ═══════════════════════════ */
const flo: AppSeed = {
  slug: 'flo',
  name: 'Flo',
  company: 'flo-health',
  categories: ['salut-i-assistencia-sanitaria', 'benestar-i-activitat-fisica'],
  tagline: 'Calendari menstrual que va arribar a un acord amb la Federal Trade Commission per haver compartit dades del cicle amb Facebook i Google',
  summary:
    'Flo és un calendari menstrual amb prediccions de cicle, mode embaràs i xats de comunitat. El 2021 la Federal Trade Commission nord-americana el va acusar d’haver compartit informació de salut amb Facebook, Google, AppsFlyer i Flurry mentre prometia el contrari, i l’acord que en va sortir obliga a demanar consentiment abans de revelar-la i a exigir la destrucció de les dades ja cedides. Avui la política enumera cada encarregat del tractament amb nom i finalitat, la companyia té certificació ISO/IEC 27001 i 27701, i ofereix un mode anònim que desvincula les dades de cicle de la identitat. També té un programa de recompenses actiu i un fitxer security.txt.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'freemium',
  jurisdiction: 'Regne Unit; establiment principal a la Unió Europea a Lituània, mitjançant Flo Health LTU UAB',
  userBase: 'Més de cent milions de persones usuàries acumulades, segons la denúncia de la Federal Trade Commission',
  links: {
    website: 'https://flo.health/',
    privacyPolicy: 'https://flo.health/privacy-policy',
    privacyCenter: 'https://flo.health/privacy-portal',
    appStore: appStore('1038369065'),
  },
  accountRequired: f('yes', 'official', ['flo-privacy-policy'], 'Cal registrar-s’hi amb nom, correu, mes i any de naixement; el mode anònim permet fer-ho sense lligar-hi identificadors personals.'),
  openSource: f('no', 'editorial', [], 'No hem trobat cap repositori públic del codi de l’aplicació.', { licence: 'Privativa' }),
  dataSummary:
    'Un calendari menstrual és una de les bases de dades més sensibles que una persona pot portar al telèfon: dates de regla, símptomes, vida sexual, intents d’embaràs, salut mental i son. La política les tracta com a categoria especial de l’article 9 i hi aplica el consentiment. En el cas de la Federal Trade Commission, el problema van ser els components publicitaris integrats a l’aplicació, més que la recollida.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['flo-privacy-policy', 'flo-app-store'], note: 'És opcional: pots posar un nom preferit o cap, sense que afecti el servei.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['flo-privacy-policy', 'flo-app-store'] }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-publicitaria'], sources: ['flo-privacy-policy'], note: 'Es recull el mes i l’any; el grup d’edat és una de les dades que, amb consentiment, arriben a AppsFlyer.' }),
    row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['flo-privacy-policy'], note: 'La política diu que el sexe o el gènere es poden inferir de l’ús que fas del servei.' }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts', 'recomanacions-algoritmiques'], sources: ['flo-privacy-policy', 'flo-app-store'], note: 'Pes, alçada, IMC, temperatura, detalls del cicle, símptomes de menstruació, embaràs, perimenopausa i menopausa. La base jurídica és el consentiment explícit i la política diu que no es comparteixen amb tercers amb finalitats de màrqueting.' }),
    row('orientacio-sexual', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['flo-privacy-policy'], note: 'La política inclou expressament detalls sobre la vida sexual entre les dades que hi pots registrar.' }),
    row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['flo-privacy-policy'], note: 'Els Secret Chats i els grups guiats són àrees comunitàries: el que hi escrius ho veu la comunitat de Flo.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['flo-app-store'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-publicitaria'], sources: ['flo-privacy-policy', 'flo-app-store'], note: 'La política diu que no es recull la ubicació exacta: s’infereix del país i de l’adreça IP, que també s’envia a AppsFlyer, Firebase i TikTok Ad Manager amb consentiment.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['flo-privacy-policy', 'flo-app-store'], note: 'Android ID, identificador publicitari de Google i IDFA d’Apple, amb consentiment i sense cap dada de salut al costat.' }),
    row('identificador-publicitari', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['flo-privacy-policy'], note: 'Només si acceptes el permís de seguiment d’Apple o l’equivalent d’Android.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['flo-privacy-policy', 'flo-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['flo-app-store', 'flo-privacy-policy'], note: 'L’estat de la subscripció és una de les dades que s’envien a les plataformes de màrqueting.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte', 'seguretat-i-prevencio-del-frau'], sources: ['flo-app-store', 'flo-privacy-policy'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['flo-app-store', 'flo-privacy-policy'], 'L’etiqueta declara compres, ubicació, identificadors i dades d’ús com a utilitzats per rastrejar-te. La política ho emmarca com a màrqueting amb consentiment revocable i insisteix que no s’hi inclou cap dada de salut.'),
    advertisingIdentifiers: f('yes', 'official', ['flo-privacy-policy'], 'IDFA a iOS i identificador publicitari de Google a Android, compartits amb AppsFlyer, Firebase i TikTok Ad Manager si dones consentiment.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['flo-privacy-policy'], 'AppsFlyer i els seus socis (Pinterest, Google Ads, Apple Search Ads i Meta Audience, entre d’altres), Firebase amb els serveis de Google enllaçats, i TikTok Ad Manager.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['flo-privacy-policy'], 'Hi ha promoció de Flo amb identificadors tècnics, grup d’edat i estat de la subscripció, sempre amb consentiment i sense dades de salut; la política diu que no ven ni lloga dades personals.', {
      optOutUrl: 'https://flo.health/privacy-portal',
    }),
    profiling: f('yes', 'official', ['flo-privacy-policy'], 'Models d’aprenentatge automàtic per predir el cicle i l’ovulació, per recomanar continguts i per preveure la retenció de clientela; l’encarregat és Tecton, que tracta dates de cicle, objectius i símptomes.'),
    aiTraining: f('partial', 'official', ['flo-privacy-policy'], 'La política descriu models d’aprenentatge automàtic entrenats amb dades de cicle per fer prediccions, i permet, amb consentiment, agregar i anonimitzar dades per a recerca; no parla de models generatius de tercers.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['flo-privacy-policy'], 'La política publica la taula completa d’encarregats: Amazon Web Services, Cloudflare, Auth0, Elastic, Vercel, SendGrid, Trustpilot, SurveyMonkey, Looker, Databricks, Google Analytics 4, Zendesk, Tecton, Apple, Google, Stripe, PayPal i AppsFlyer.'),
    intraGroupSharing: f('yes', 'official', ['flo-privacy-policy'], 'Flo Health Cyprus Ltd, Flo Health LTU UAB (l’establiment principal a la Unió Europea) i Flo Health NL B.V. actuen com a encarregades del tractament.'),
    dataBrokerSales: f('no', 'official', ['flo-privacy-policy'], 'La política diu que no ven ni lloga dades personals per diners i que les dades d’Apple HealthKit i Google Health Connect no es venen a plataformes publicitàries ni a intermediaris.'),
    internationalTransfers: f('yes', 'official', ['flo-privacy-policy'], 'Les dades es transfereixen als Estats Units amb clàusules contractuals tipus i avaluacions de risc; la filial nord-americana Flo Health, Inc. està autocertificada al marc de privadesa de dades UE-EUA.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats, tot i que la política descriu els supòsits en què respon a requeriments judicials.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['flo-privacy-policy'], 'Hi ha terminis explícits: tres anys d’inactivitat abans de l’esborrament automàtic i fins a noranta dies per netejar les còpies de seguretat.'),
    dataAfterDeletion: f('partial', 'official', ['flo-privacy-policy'], 'En iniciar la supressió els identificadors es desvinculen immediatament de la informació de l’aplicació; alguna dada pot quedar temporalment a les còpies de seguretat fins a noranta dies, i se’n poden conservar per obligació legal o per defensar reclamacions.'),
    periods: [
      { period: 'Tres anys d’inactivitat i llavors esborrament automàtic', sources: ['flo-privacy-policy'] },
      { period: 'Fins a 90 dies per esborrar les dades de les còpies de seguretat', sources: ['flo-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['flo-privacy-policy'], 'La política diu que pots demanar la supressió en qualsevol moment i que el procés és irreversible.'),
    selfService: f('yes', 'official', ['flo-privacy-policy'], 'La supressió del compte es pot demanar directament des de la configuració de l’aplicació, sense passar per atenció al client.'),
    difficulty: 'easy',
    waitingPeriodDays: 90,
    steps: [
      'Si vols conservar l’historial, demana primer una còpia de les dades: Flo les lliura en fitxers .json i, a iOS amb Premium, l’aplicació genera un informe descarregable.',
      'Entra a la configuració de l’aplicació i demana la supressió del compte.',
      'La petició es resol en el termini d’un mes; per netejar les còpies de seguretat poden caldre fins a noranta dies.',
      'Recorda que suprimir el compte també retira el consentiment per tractar les dades de salut, i que el procés no es pot desfer.',
    ],
    dataRetained: 'Dades conservades per obligació legal, per a la defensa de reclamacions o per a l’arxiu amb finalitats de recerca, un cop desvinculades dels identificadors.',
    sources: ['flo-privacy-policy'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['flo-privacy-policy'], 'Dret d’accés i de portabilitat amb lliurament en fitxers .json; a iOS, les persones subscrites poden descarregar un informe des de la mateixa aplicació.', {
      url: 'https://flo.health/privacy-portal',
    }),
    exportFormatQuality: 'open',
    rightsExercise: f('yes', 'official', ['flo-privacy-policy'], 'Hi ha tres vies: la configuració de l’aplicació, un assistent conversacional al web i el correu del delegat de protecció de dades, amb resposta en un mes.', {
      url: 'mailto:dpo@flo.health',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['flo-privacy-policy'], 'El consentiment per compartir dades amb AppsFlyer, Firebase i TikTok Ad Manager es pot retirar des de les preferències de l’aplicació o del dispositiu en qualsevol moment.'),
    telemetryOptOut: f('partial', 'official', ['flo-privacy-policy'], 'El màrqueting i les notificacions es poden desactivar, però l’ús d’AppsFlyer per enllaçar el registre del web amb l’aplicació no admet oposició.'),
    granularControls: f('yes', 'official', ['flo-privacy-policy'], 'Hi ha consentiments separats per finalitat, un portal de privadesa i el mode anònim com a control estructural.'),
    defaultPosture: 'mixed',
    darkPatterns: f('no', 'editorial', ['flo-privacy-policy'], 'La política adverteix de les limitacions del mode anònim i explica quins consentiments es poden retirar i quins no.'),
  },
  security: {
    e2ee: f('no', 'official', ['flo-privacy-policy'], 'No hi ha xifratge d’extrem a extrem: les dades es xifren en trànsit i en repòs, però Flo hi té accés per prestar el servei. El mode anònim les desvincula de la identitat en lloc de fer-les il·legibles.'),
    transportEncryption: f('yes', 'official', ['flo-privacy-policy'], 'La política afirma que les dades personals es xifren tant en trànsit com en repòs.'),
    atRestEncryption: f('yes', 'official', ['flo-privacy-policy']),
    mfa: unknown('La política recomana protegir el dispositiu amb codi o Face ID, però no documenta cap verificació en dos passos del compte.'),
    independentAudits: f('yes', 'official', ['flo-privacy-policy'], 'Certificacions independents ISO/IEC 27001 de seguretat de la informació i ISO/IEC 27701 de privadesa, escanejos de vulnerabilitats i proves de penetració periòdiques, i avaluacions d’impacte.'),
    bugBounty: f('yes', 'official', ['flo-security-txt'], 'El fitxer security.txt del domini remet a un programa gestionat amb HackerOne i adverteix que totes les comunicacions hi han de passar per optar a recompensa.', {
      url: 'https://flo.health/responsible-vulnerability-disclosure-program',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['flo-security-txt'], 'Hi ha fitxer .well-known/security.txt amb adreça de contacte, política, idioma preferit i data de caducitat.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Aquesta fitxa es relaciona amb la de Wellhub: la política de Flo explica que, si t’hi subscrius amb Wellhub, Flo confirma a Wellhub si has estat activa a l’aplicació. És una dada sobre el funcionament de Wellhub que consta al document d’una altra companyia.',
    openQuestions: [
      'Quin és l’estat final de la demanda col·lectiva Frasco contra Flo Health i els altres demandats a Califòrnia? No hem pogut verificar-ne els termes amb una font fiable.',
      'Alguna autoritat europea (ICO, CNIL o la inspecció lituana) ha obert una investigació sobre el mateix tractament que va motivar l’acord amb la Federal Trade Commission?',
    ],
  },
}

/* ═══════════════════════════ Fitia ═══════════════════════════ */
const fitia: AppSeed = {
  slug: 'fitia',
  name: 'Fitia',
  company: 'fitia',
  categories: ['benestar-i-activitat-fisica', 'alimentacio-i-restauracio'],
  tagline: 'Al·lèrgies, intoleràncies i condicions de salut recollides amb un consentiment que la política dedueix del fet d’escriure-les',
  summary:
    'Fitia compta calories i genera plans de menjars a partir del pes, l’alçada, el nivell d’activitat, les al·lèrgies i les condicions de salut que hi declares. La política resol la base jurídica d’aquestes dades dient que el consentiment és exprés perquè les has facilitades «voluntariamente». Per a dades de salut, el RGPD demana un consentiment explícit i informat, que no es pot deduir de l’ús. L’etiqueta de l’App Store declara l’identificador del dispositiu com a utilitzat per rastrejar-te i per a publicitat de tercers, i la política anomena Google, OpenAI i Anthropic entre els proveïdors de models.',
  platforms: ['ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Perú i Estats Units; la política no identifica cap responsable ni representant a la Unió Europea',
  links: {
    website: 'https://fitia.app/',
    privacyPolicy: 'https://fitia.app/es/politica-privacidad/',
    appStore: appStore('1448277011'),
  },
  accountRequired: f('yes', 'official', ['fitia-politica-privacidad'], 'El registre es pot fer amb correu o amb els comptes de Google, Facebook o Apple; sense compte no hi ha pla nutricional.'),
  openSource: f('no', 'editorial', [], 'No hem trobat cap repositori públic del codi.', { licence: 'Privativa' }),
  dataSummary:
    'Un diari d’ingesta registra amb molt detall quantes vegades menges al dia, a quina hora, què evites i com et varia el pes. Fitia hi suma al·lèrgies, intoleràncies i condicions de salut declarades, i fotografies dels plats.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fitia-politica-privacidad', 'fitia-app-store'], note: 'L’etiqueta de l’App Store declara les dades de contacte com a NO vinculades amb la identitat, tot i que el compte és nominal.' }),
    row('adreca-electronica', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fitia-politica-privacidad', 'fitia-app-store'] }),
    row('data-de-naixement', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['fitia-politica-privacidad'], note: 'La política parla d’edat, sexe, alçada i pes com a dades del perfil.' }),
    row('genere', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['fitia-politica-privacidad'] }),
    row('dades-de-salut', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['fitia-politica-privacidad'], note: 'Nivell d’activitat, mesures antropomètriques, condicions de salut, al·lèrgies, intoleràncies alimentàries i historial de pes.' }),
    row('fotografies-i-videos', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['fitia-app-store', 'fitia-politica-privacidad'], note: 'Fotografies de perfil i dels plats; l’etiqueta les declara per a anàlisi i personalització.' }),
    row('publicacions-i-comentaris', 'optional', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['fitia-politica-privacidad'], note: 'Fitia Social inclou missatges i publicacions, que es poden emmagatzemar a servidors dels Estats Units.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['fitia-app-store'], note: 'És l’única categoria que l’etiqueta declara vinculada amb la identitat, i la declara per a publicitat de tercers i per rastrejar-te.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['fitia-app-store', 'fitia-politica-privacidad'] }),
    row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['fitia-politica-privacidad'], note: 'La política enumera adreça IP, nom del dispositiu, versió del sistema operatiu i marques de temps.' }),
    row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['fitia-politica-privacidad'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['fitia-app-store'], 'L’etiqueta de l’App Store declara els identificadors sota «Datos utilizados para rastrearte».'),
    advertisingIdentifiers: f('yes', 'official', ['fitia-app-store'], 'L’identificador del dispositiu es declara vinculat amb la identitat i destinat a publicitat de tercers.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['fitia-app-store', 'fitia-politica-privacidad'], 'L’etiqueta declara publicitat de tercers i analítica; la política anomena Firebase de Google i Cloudflare entre els proveïdors.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['fitia-app-store'], 'L’etiqueta de l’App Store declara expressament la finalitat «publicidad de terceros» per a l’identificador del dispositiu, tot i que la política no descriu cap xarxa publicitària.'),
    profiling: f('yes', 'official', ['fitia-politica-privacidad'], 'L’aplicació genera plans de menjars i recomanacions personalitzades a partir de les dades antropomètriques, les condicions de salut i els hàbits alimentaris.'),
    aiTraining: f('partial', 'official', ['fitia-politica-privacidad'], 'La política diu que els proveïdors de models (Google LLC, OpenAI L.L.C. i Anthropic PBC) manifesten que no fan servir aquestes dades per entrenar els seus models generals, i tot seguit adverteix que Fitia no en controla les pràctiques.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['fitia-politica-privacidad'], 'Firebase, Facebook, Apple i Google per a l’autenticació; Google LLC, OpenAI i Anthropic per als models; Cloudflare per a la distribució de continguts; Apple i Google per a les notificacions i els pagaments.'),
    intraGroupSharing: unknownFrom(['fitia-politica-privacidad'], 'La política identifica «Fitia, Inc.» com a responsable mentre la fitxa de l’App Store atribueix l’aplicació a Nutrition Technologies SAC; no hi ha cap explicació pública de la relació entre les dues societats.'),
    dataBrokerSales: unknownFrom(['fitia-politica-privacidad'], 'La política no diu si es venen dades a intermediaris; tampoc no ho nega.'),
    internationalTransfers: f('yes', 'official', ['fitia-politica-privacidad'], 'Les dades de Fitia Social es poden emmagatzemar i tractar a servidors dels Estats Units, amb consentiment exprés com a única cobertura esmentada.', { mechanism: 'derogation' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['fitia-politica-privacidad'], 'La política no fixa cap termini de conservació per a cap categoria de dades.'),
    dataAfterDeletion: f('partial', 'official', ['fitia-politica-privacidad'], 'La política diu que, un cop eliminat el compte, les dades no es poden recuperar, però no aclareix què es conserva ni durant quant de temps.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['fitia-politica-privacidad'], 'La política descriu l’eliminació del compte com a irreversible i en dona dues vies.'),
    selfService: f('yes', 'official', ['fitia-politica-privacidad'], 'Hi ha una opció «Eliminar Cuenta» a la configuració de l’aplicació.'),
    difficulty: 'easy',
    steps: [
      'Obre la configuració de l’aplicació i tria «Eliminar Cuenta».',
      'Com a alternativa, escriu a soporte@fitia.app indicant el correu amb què et vas registrar i quines dades vols suprimir.',
      'Tingues en compte que la política adverteix que les dades eliminades no es poden recuperar.',
    ],
    obstacles:
      'La política no diu en quant de temps s’executa l’eliminació ni què passa amb les còpies de seguretat i amb les dades que hagin arribat als proveïdors de models.',
    sources: ['fitia-politica-privacidad'],
  },
  userRights: {
    dataExport: unknown('La política no esmenta cap eina d’exportació ni el dret de portabilitat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['fitia-politica-privacidad'], 'Hi ha una adreça de suport per demanar accés i supressió, però no hi ha cap delegat de protecció de dades ni cap referència a l’autoritat de control europea.', {
      url: 'mailto:soporte@fitia.app',
    }),
  },
  controls: {
    adPersonalizationOptOut: unknownFrom(['fitia-politica-privacidad'], 'L’etiqueta de l’App Store declara publicitat de tercers, però la política no descriu cap manera de desactivar-la ni anomena cap xarxa publicitària.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica.'),
    granularControls: f('no', 'official', ['fitia-politica-privacidad'], 'No hi ha cap panell de privadesa per finalitat: l’únic control descrit és eliminar el compte.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', ['fitia-politica-privacidad', 'fitia-app-store'], 'La política considera consentiment exprés el fet d’haver facilitat les dades «voluntariamente», és a dir, equipara l’ús del servei al consentiment. Per a al·lèrgies i condicions de salut, el RGPD demana un consentiment explícit i separat.'),
    darkPatternList: [
      {
        type: 'unbalanced-consent',
        severity: 'medium',
        description:
          'La base jurídica per a les dades de salut es dedueix del fet d’haver-les escrit a l’aplicació, sense un consentiment explícit i separat.',
        sources: ['fitia-politica-privacidad'],
      },
    ],
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades més enllà del component social.'),
    transportEncryption: unknown('La política no detalla les mesures tècniques de xifratge.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hem pogut comprovar si hi ha fitxer security.txt: el domini respon amb un error de limitació de peticions a les consultes automatitzades.'),
  },
  alternatives: [
    {
      app: 'yuka',
      comparability: 'complementary',
      rationale: 'Cobreix l’altra meitat del problema (saber què portes al carro) amb una etiqueta de privadesa mínima, sense publicitat i amb eliminació de compte d’un clic.',
      tradeOffs: 'Yuka no compta calories ni genera plans de menjars: no substitueix un diari d’ingesta.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La fitxa de l’App Store atribueix l’aplicació a Nutrition Technologies SAC i la política, a Fitia, Inc.; no hem trobat cap document que expliqui la relació. Aquesta indefinició, sumada a l’absència de terminis i de representant a la Unió Europea, és el que fa baixar la nota de transparència.',
    openQuestions: [
      'Quina societat és responsable del tractament per a les persones usuàries de la Unió Europea i qui hi és el representant?',
      'Quina xarxa publicitària rep l’identificador del dispositiu que declara l’etiqueta de l’App Store?',
    ],
  },
}

/* ═══════════════════════════ WodBuster ═══════════════════════════ */
const wodbuster: AppSeed = {
  slug: 'wodbuster',
  name: 'WodBuster',
  company: 'wodbuster',
  categories: ['benestar-i-activitat-fisica'],
  tagline: 'L’avís legal encara invoca la LOPD del 1999 i el reglament del 2007, derogats el 2018',
  summary:
    'WodBuster és el programari amb què centenars de boxes de CrossFit gestionen reserves de classes, marques personals i rànquings. La política de privadesa publicada només parla del web: el formulari de contacte, la sol·licitud de demostració i les galetes. De les dades que l’etiqueta de l’App Store declara (salut i forma física, adreça postal, telèfon, fotografies i historial de compres) no en diu res, i l’apartat de protecció de dades de l’avís legal encara cita la Llei Orgànica 15/1999 i el Reial decret 1720/2007, derogats quan va entrar en vigor el RGPD.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya; autoritat de control: Agencia Española de Protección de Datos',
  links: {
    website: 'https://wodbuster.com',
    privacyPolicy: 'https://wodbuster.com/politicadeprivacidad.aspx',
    terms: 'https://wodbuster.com/avisolegal-politicaprivacidad.aspx',
    appStore: appStore('1195360759'),
  },
  accountRequired: f('yes', 'official', ['wodbuster-app-store'], 'L’aplicació és per a persones sòcies d’un box: el compte el dona d’alta el centre i serveix per reservar classes i registrar marques.'),
  openSource: f('no', 'official', ['wodbuster-aviso-legal'], 'L’avís legal reserva tots els drets de propietat intel·lectual del programari.', { licence: 'Privativa' }),
  dataSummary:
    'Les reserves de classe diuen a quina hora entrenes cada dia de la setmana, i les marques personals (pes aixecat, temps, repeticions) són un historial de rendiment físic que sovint es publica en rànquings visibles per la resta del box.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['wodbuster-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['wodbuster-app-store', 'wodbuster-politica-privacidad'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['wodbuster-app-store', 'wodbuster-politica-privacidad'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['wodbuster-app-store'], note: 'L’etiqueta de l’App Store declara l’adreça física vinculada amb la identitat; cap document públic no n’explica la finalitat.' }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['wodbuster-app-store'], note: 'Salut i forma física: marques personals, resultats dels entrenaments i progressió.' }),
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['wodbuster-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['wodbuster-app-store'], note: 'Bons de classes i quotes contractades a través del box.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['wodbuster-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['wodbuster-app-store'] }),
    row('historial-de-navegacio', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['wodbuster-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['wodbuster-app-store'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'none', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['wodbuster-politica-privacidad'], note: 'L’únic tractament que la política descriu amb detall, juntament amb el formulari de contacte.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['wodbuster-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar-te.'),
    advertisingIdentifiers: f('no', 'official', ['wodbuster-app-store'], 'L’etiqueta no declara dades de publicitat.'),
    thirdPartyTrackersPresent: unknown('La política remet a una política de galetes per als detalls, però no anomena cap proveïdor.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['wodbuster-politica-privacidad'], 'La política preveu accions de màrqueting i missatges promocionals segons les preferències de comunicació, amb consentiment o interès legítim; no descriu publicitat segmentada amb dades de tercers.'),
    profiling: f('no', 'official', ['wodbuster-politica-privacidad'], 'La política reconeix el dret a no ser objecte de decisions automatitzades, inclosa l’elaboració de perfils, i no en descriu cap.'),
    aiTraining: unknownFrom(['wodbuster-politica-privacidad'], 'Cap document públic no diu res sobre l’ús de les dades per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('partial', 'official', ['wodbuster-politica-privacidad'], 'La política diu que no se cedeixen dades a tercers tret d’obligació legal, però autoritza expressament la subcontractació de serveis amb acords d’encàrrec del tractament, sense anomenar cap proveïdor.'),
    intraGroupSharing: na('WODBUSTER, S.L.U. és una societat unipersonal, sense grup empresarial conegut.'),
    dataBrokerSales: f('no', 'official', ['wodbuster-politica-privacidad'], 'La política nega qualsevol cessió a tercers fora del compliment d’obligacions legals.'),
    internationalTransfers: f('no', 'official', ['wodbuster-politica-privacidad'], 'La política afirma textualment que no es fan transferències internacionals de dades a tercers països.', { mechanism: 'none' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['wodbuster-politica-privacidad'], 'La política només diu que les dades es conserven el temps necessari per a les finalitats i mentre no demanis la supressió, sense cap termini.'),
    dataAfterDeletion: unknownFrom(['wodbuster-politica-privacidad'], 'Cap document no descriu què es conserva després d’una baixa, ni què passa amb les dades que el box té al sistema.'),
  },
  accountDeletion: {
    possible: f('partial', 'official', ['wodbuster-politica-privacidad'], 'El dret de supressió es reconeix i s’exerceix per correu electrònic amb còpia del document d’identitat, amb un mes de termini màxim; no hi ha cap procediment específic per al compte de l’aplicació.'),
    selfService: unknownFrom(['wodbuster-politica-privacidad'], 'Cap document públic no diu si el compte es pot eliminar des de l’aplicació ni si cal que ho faci el box.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    waitingPeriodDays: 30,
    steps: [
      'Pregunta primer al teu box: és ell qui gestiona l’alta i les dades de la persona sòcia dins del sistema.',
      'Escriu al correu de contacte de WODBUSTER, S.L.U. exercint el dret de supressió i adjuntant-hi còpia del document d’identitat, com demana la política.',
      'El termini màxim per resoldre és d’un mes des de la recepció de la sol·licitud.',
      'Si no t’atenen, reclama davant de l’Agència Espanyola de Protecció de Dades.',
    ],
    obstacles:
      'Exigir una còpia del document d’identitat per a qualsevol petició és una mesura desproporcionada quan l’adreça electrònica del compte ja identifica la persona. A més, la política no aclareix qui és responsable de les dades esportives: el box o WodBuster.',
    sources: ['wodbuster-politica-privacidad'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['wodbuster-politica-privacidad'], 'El dret de portabilitat es reconeix i s’exerceix per correu, sense cap eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['wodbuster-politica-privacidad'], 'Hi ha una adreça de contacte i un termini d’un mes, però no hi ha delegat de protecció de dades i cal adjuntar còpia del document d’identitat.', {
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['wodbuster-politica-privacidad'], 'La política permet revocar el consentiment de les comunicacions comercials, però no descriu cap control dins de l’aplicació.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica.'),
    granularControls: f('no', 'official', ['wodbuster-politica-privacidad'], 'No hi ha cap panell de privadesa documentat.'),
    defaultPosture: 'unknown',
    darkPatterns: f('partial', 'editorial', ['wodbuster-aviso-legal', 'wodbuster-politica-privacidad'], 'No hi ha patrons de retenció, però la documentació no descriu el servei: l’avís legal encara cita la LOPD del 1999 i el seu reglament del 2007, i la política de privadesa parla del web mentre l’aplicació tracta dades de salut i l’adreça postal.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description:
          'La política de privadesa publicada cobreix el formulari de contacte i les galetes del web, no les dades de la persona sòcia que l’aplicació declara a l’App Store.',
        sources: ['wodbuster-politica-privacidad', 'wodbuster-app-store'],
      },
    ],
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: unknown('La política parla de mesures tècniques i organitzatives adequades, sense detallar-les.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: f('partial', 'official', ['wodbuster-politica-privacidad'], 'No hi ha fitxer security.txt, però la política demana que, si detectes una incidència o tens indicis que la teva informació està en risc, els avisis per poder investigar-ho.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El domini de WodBuster bloqueja la lectura automatitzada; tots dos documents legals s’han llegit a través de l’arxiu d’internet i les fonts en donen la còpia arxivada. El punt principal és la distància entre el que declara l’etiqueta de l’App Store i el que cobreix la política publicada.',
    openQuestions: [
      'Qui és el responsable del tractament de les dades esportives: el box on entrenes o WODBUSTER, S.L.U. com a encarregat?',
      'Per què l’etiqueta de l’App Store declara l’adreça postal entre les dades vinculades amb la identitat?',
    ],
  },
}

/* ═══════════════════════════ Wellhub ═══════════════════════════ */
const wellhub: AppSeed = {
  slug: 'wellhub',
  name: 'Wellhub',
  company: 'wellhub',
  categories: ['benestar-i-activitat-fisica', 'feina-i-ocupacio'],
  tagline: 'L’empresa que et paga la subscripció rep el teu nom, el correu, el pla i el cost, i les aplicacions sòcies li confirmen si has estat activa',
  summary:
    'Wellhub, abans Gympass, és una plataforma de benestar corporatiu: l’empresa on treballes et paga l’accés a gimnasos i a aplicacions de salut. Això afegeix un tercer a la relació. Segons la política, al patrocinador se li comuniquen el nom, els cognoms, l’adreça electrònica, la subscripció i el cost del pla, i també informació d’activitat si es detecten problemes o abusos. La política de Flo, una de les aplicacions sòcies, ho confirma: en donar-t’hi d’alta amb Wellhub, Flo confirma a Wellhub si has estat activa. L’etiqueta de l’App Store declara vuit categories utilitzades per rastrejar-te.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Estats Units; segons la política, l’autoritat de control principal a la Unió Europea és l’autoritat neerlandesa de protecció de dades',
  userBase: 'Present a una quinzena de països, amb milers d’empreses clientes',
  links: {
    website: 'https://wellhub.com/es-es/',
    privacyPolicy: 'https://wellhub.com/es-es/privacy/',
    appStore: appStore('703761434'),
  },
  accountRequired: f('yes', 'official', ['wellhub-politica-privacidad'], 'Cal registrar-s’hi i acreditar l’elegibilitat: la política tracta informació sobre si tens dret a l’avantatge a través de l’empresa o del patrocinador.'),
  openSource: f('no', 'editorial', [], 'No hem trobat cap repositori públic del codi.', { licence: 'Privativa' }),
  dataSummary:
    'Quines activitats fas, a quins gimnasos vas i quines aplicacions de salut obres és informació d’estil de vida, encara que el servei el pagui l’empresa. La política limita el que arriba al patrocinador a dades administratives, però hi afegeix una excepció d’activitat «si es detecten problemes o abusos» que no defineix.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['wellhub-politica-privacidad', 'wellhub-app-store'], note: 'És una de les dades que la política diu que es comuniquen al patrocinador.' }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['wellhub-politica-privacidad', 'wellhub-app-store'], note: 'També es comunica al patrocinador, juntament amb la subscripció i el cost del pla.' }),
    row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['wellhub-politica-privacidad'], note: 'Informació d’elegibilitat: la relació laboral o de col·laboració que et dona dret a l’avantatge.' }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['wellhub-app-store', 'wellhub-politica-privacidad'], note: 'Dades de salut i forma física, també importades d’Apple HealthKit.' }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['wellhub-app-store', 'wellhub-politica-privacidad'], note: 'L’etiqueta declara ubicació exacta vinculada amb la identitat i ubicació aproximada no vinculada, totes dues també per a màrqueting.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['wellhub-app-store', 'wellhub-politica-privacidad'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['wellhub-app-store'] }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['wellhub-app-store'] }),
    row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['wellhub-app-store'], note: 'Contingut de l’usuari, declarat també entre les dades utilitzades per rastrejar-te.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['wellhub-app-store', 'wellhub-politica-privacidad'], note: 'La política de Flo confirma que, en registrar-t’hi amb Wellhub, Flo li comunica si has estat activa a l’aplicació.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['wellhub-app-store', 'wellhub-politica-privacidad'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['wellhub-politica-privacidad'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['wellhub-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['wellhub-app-store'], 'L’etiqueta declara vuit categories sota «Datos usados para rastrearte»: compres, ubicació, dades de contacte, contingut de l’usuari, historial de cerca, identificadors, dades d’ús i diagnòstics.'),
    advertisingIdentifiers: f('yes', 'official', ['wellhub-app-store', 'wellhub-politica-privacidad'], 'L’etiqueta declara identificadors per rastrejar i la política enumera galetes, adreça IP i dades del dispositiu.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['wellhub-politica-privacidad'], 'La política esmenta xarxes socials i proveïdors d’analítica entre els destinataris, sense anomenar-los un per un.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['wellhub-app-store', 'wellhub-politica-privacidad'], 'L’etiqueta de l’App Store declara «publicidad o marketing» entre les finalitats de gairebé totes les categories vinculades amb la identitat, inclosa la ubicació exacta.'),
    profiling: f('partial', 'official', ['wellhub-politica-privacidad'], 'La política descriu la personalització de continguts i recomanacions, i el seguiment de l’activitat per detectar problemes o abusos.'),
    aiTraining: unknownFrom(['wellhub-politica-privacidad'], 'La política no esmenta l’entrenament de models d’intel·ligència artificial.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['wellhub-politica-privacidad', 'flo-privacy-policy'], 'Gimnasos, estudis i entrenadors, l’empresa o el patrocinador que paga la subscripció, els socis indirectes, els proveïdors de serveis, les xarxes socials i els proveïdors d’analítica. La política de Flo, aplicació sòcia, confirma que li retorna a Wellhub si has estat activa.'),
    intraGroupSharing: f('yes', 'official', ['wellhub-politica-privacidad'], 'La política identifica entitats diferents segons el país: Wellhub US, LLC com a entitat general, GPBR Participações Ltda. per al Brasil i Gympass SAS per a l’Argentina.'),
    dataBrokerSales: unknownFrom(['wellhub-politica-privacidad'], 'La política no diu si es venen dades a intermediaris; tampoc no ho nega expressament.'),
    internationalTransfers: f('yes', 'official', ['wellhub-politica-privacidad'], 'Les transferències es fan a escala global emparades en les clàusules contractuals tipus de la Unió Europea.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['wellhub-politica-privacidad'], 'La política només diu que les dades es conserven «únicamente durante el tiempo necesario» i pels terminis fiscals i reguladors, sense cap xifra.'),
    dataAfterDeletion: unknownFrom(['wellhub-politica-privacidad'], 'La política no descriu què es conserva després de tancar el compte.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['wellhub-politica-privacidad'], 'La política diu que pots tancar el compte des de la configuració de la plataforma o contactant amb el centre d’ajuda.'),
    selfService: f('partial', 'official', ['wellhub-politica-privacidad'], 'Hi ha l’opció de tancar el compte des de la configuració, però la política no en descriu els passos ni distingeix entre tancar-lo i suprimir les dades.'),
    difficulty: 'medium',
    steps: [
      'Tanca la subscripció des de la configuració de la plataforma o demana-ho al centre d’ajuda de Wellhub.',
      'Revisa per separat les aplicacions sòcies a què t’hagis donat d’alta amb Wellhub: cadascuna té el seu compte i el seu procediment de supressió.',
      'Per exercir el dret de supressió sobre les dades ja tractades, adreça’t al contacte de protecció de dades a través del centre d’ajuda.',
    ],
    obstacles:
      'Hi intervenen tres parts: tu, Wellhub i l’empresa que paga. Tancar el compte no afecta les dades que ja s’han comunicat al patrocinador ni els comptes que t’hagis creat a les aplicacions sòcies.',
    sources: ['wellhub-politica-privacidad'],
  },
  userRights: {
    dataExport: unknownFrom(['wellhub-politica-privacidad'], 'La política no descriu cap eina d’exportació ni el procediment concret per exercir la portabilitat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['wellhub-politica-privacidad'], 'Els drets s’exerceixen a través del centre d’ajuda; la política no dona cap adreça directa del delegat de protecció de dades ni cap termini de resposta.'),
  },
  controls: {
    adPersonalizationOptOut: unknownFrom(['wellhub-politica-privacidad'], 'La política no descriu cap control per desactivar la publicitat i el màrqueting que declara l’etiqueta de l’App Store.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica.'),
    granularControls: f('no', 'official', ['wellhub-politica-privacidad'], 'No hi ha cap panell de privadesa per finalitat documentat.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', ['wellhub-politica-privacidad', 'flo-privacy-policy'], 'La compartició amb el patrocinador es presenta com a administrativa, però l’excepció d’«información de actividad» quan es detecten problemes o abusos no està definida, i les aplicacions sòcies retornen a Wellhub si has estat activa. L’empresa que et paga la nòmina pot rebre informació per més d’una via.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description:
          'La política limita el que rep l’empresa a dades administratives, però hi afegeix informació d’activitat en cas de problemes o abusos, sense definir què compta com a tal ni qui ho decideix.',
        sources: ['wellhub-politica-privacidad'],
      },
    ],
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: unknown('La política no detalla les mesures tècniques de xifratge.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
    mfa: unknown('No hem trobat cap documentació sobre verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions de seguretat publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hem pogut comprovar si hi ha fitxer security.txt: el domini respon amb un error a les peticions automatitzades.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La política en espanyol que publica Wellhub porta data del 19 de desembre del 2023 i no s’ha actualitzat amb el canvi de marca. La descripció més clara de com circulen les dades és a la política de Flo, que explica la integració des del costat de l’aplicació sòcia.',
    openQuestions: [
      'Què compta exactament com a «problema o abús» perquè l’empresa rebi informació d’activitat individual?',
      'Quina entitat és responsable del tractament per a Espanya, i per què la política assenyala l’autoritat neerlandesa com a autoritat principal?',
      'Quines altres aplicacions sòcies retornen senyals d’activitat a Wellhub, com fa Flo?',
    ],
  },
}

export const lot: SeedLot = {
  companies: [
    {
      slug: 'symmetry-club',
      name: 'Symmetry Club',
      legalName: 'Symmetry Club LLC',
      description:
        'Societat de responsabilitat limitada constituïda a Delaware que publica l’aplicació d’entrenament Symmetry, amb rutines generades amb intel·ligència artificial. La seva documentació legal, però, està redactada segons la normativa espanyola i, en algun paràgraf, encara anomena una societat estònia anterior.',
      headquartersCountry: 'US',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://symmetry.club/',
      productDomains: ['symmetry.club'],
      privacyContact: 'soporte@symmetry.club',
    },
    {
      slug: 'basic-fit',
      name: 'Basic-Fit',
      legalName: 'Basic-Fit International B.V.',
      description:
        'Cadena neerlandesa de gimnasos de quota baixa, part del grup Basic-Fit cotitzat a Euronext Amsterdam. La societat de Hoofddorp és la responsable del tractament de les persones abonades dels set països on opera, Espanya inclosa.',
      headquartersCountry: 'NL',
      euEstablishment: 'Hoofddorp',
      leadSupervisoryAuthority: 'ap-nl',
      ownership: 'public',
      primaryRevenueModel: 'subscription',
      website: 'https://www.basic-fit.com/',
      productDomains: ['basic-fit.com'],
      privacyContact: 'privacy@basic-fit.com',
    },
    {
      slug: 'hevy-studios',
      name: 'Hevy Studios',
      legalName: 'Hevy Studios, S.L.',
      description:
        'Estudi gironí que desenvolupa Hevy, un registre d’entrenaments de gimnàs amb component social. És una de les poques aplicacions d’aquest sector amb responsable del tractament establert a Catalunya.',
      headquartersCountry: 'ES',
      euEstablishment: 'Calonge i Sant Antoni (Girona)',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.hevyapp.com/',
      productDomains: ['hevyapp.com'],
    },
    {
      slug: 'yuca',
      name: 'Yuca',
      legalName: 'Yuca SAS',
      description:
        'Societat francesa que publica Yuka, l’aplicació que puntua aliments i cosmètics escanejant-ne el codi de barres. Es finança amb una subscripció premium i publica els comptes anuals per acreditar que no cobra de cap marca.',
      headquartersCountry: 'FR',
      euEstablishment: 'París',
      leadSupervisoryAuthority: 'cnil',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://yuka.io/',
      productDomains: ['yuka.io', 'app.yuka.io', 'help.yuka.io'],
      privacyContact: 'dpo@yuka.io',
    },
    {
      slug: 'segurcaixa-adeslas',
      name: 'SegurCaixa Adeslas',
      legalName: 'SegurCaixa Adeslas, S.A. de Seguros y Reaseguros',
      description:
        'Asseguradora espanyola de salut, dental, decessos, llar i automòbil, inscrita al registre d’entitats asseguradores de la Direcció General d’Assegurances amb la clau C-0124. La marca comercial de salut és Adeslas.',
      headquartersCountry: 'ES',
      euEstablishment: 'Madrid',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://www.segurcaixaadeslas.es/',
      productDomains: ['segurcaixaadeslas.es', 'adeslas.es', 'saludybienestar.segurcaixaadeslas.es'],
      privacyContact: 'dpd@segurcaixaadeslas.es',
    },
    {
      slug: 'flo-health',
      name: 'Flo Health',
      legalName: 'Flo Health UK Limited',
      description:
        'Companyia britànica de salut femenina, responsable del tractament de l’aplicació Flo. El grup inclou Flo Health LTU UAB, l’establiment principal a la Unió Europea, Flo Health Cyprus Ltd, Flo Health NL B.V. i la filial nord-americana Flo Health, Inc., autocertificada al marc de privadesa de dades UE-EUA. Té certificació ISO/IEC 27001 i ISO/IEC 27701.',
      headquartersCountry: 'GB',
      euEstablishment: 'Vílnius (Flo Health LTU UAB)',
      leadSupervisoryAuthority: 'ico-gb',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://flo.health/',
      productDomains: ['flo.health'],
      privacyContact: 'dpo@flo.health',
    },
    {
      slug: 'fitia',
      name: 'Fitia',
      legalName: 'Fitia, Inc.',
      description:
        'Responsable declarat a la política de privadesa del comptador de calories Fitia, d’origen peruà. La fitxa de l’App Store, en canvi, atribueix l’aplicació a Nutrition Technologies SAC, i no hi ha cap document públic que expliqui la relació entre les dues societats ni que identifiqui un representant a la Unió Europea.',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://fitia.app/',
      productDomains: ['fitia.app'],
      privacyContact: 'soporte@fitia.app',
    },
    {
      slug: 'wodbuster',
      name: 'WodBuster',
      legalName: 'WODBUSTER, S.L.U.',
      description:
        'Societat unipersonal madrilenya que comercialitza el programari de gestió de boxes de CrossFit WodBuster: reserva de classes, marques personals i rànquings. Els centres el contracten per subscripció i les persones sòcies hi accedeixen amb l’aplicació.',
      headquartersCountry: 'ES',
      euEstablishment: 'Madrid',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://wodbuster.com/',
      productDomains: ['wodbuster.com'],
    },
    {
      slug: 'wellhub',
      name: 'Wellhub',
      legalName: 'Wellhub US, LLC',
      description:
        'Plataforma de benestar corporatiu fundada al Brasil com a Gympass i rebatejada Wellhub el 2024. Les empreses hi paguen l’accés dels seus equips a gimnasos i a aplicacions de salut. Segons la seva política, l’autoritat de control principal a la Unió Europea és l’autoritat neerlandesa; el grup inclou GPBR Participações Ltda. per al Brasil i Gympass SAS per a l’Argentina.',
      headquartersCountry: 'US',
      leadSupervisoryAuthority: 'ap-nl',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://wellhub.com/',
      productDomains: ['wellhub.com', 'gympass.com'],
    },
  ],
  sources: [
    s('symmetry-politica-app', 'Política de privacidad de la aplicación', 'https://symmetry.club/es/app/politica-de-privacidad', 'Symmetry Club LLC', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-03-18',
      summary: 'Política de l’aplicació. Identifica el responsable a Delaware, descriu el tractament de dades de salut i de les rutines generades amb intel·ligència artificial i fixa la conservació mínima de cinc anys. El web és una aplicació de pàgina única: el text només s’obté del paquet de JavaScript que serveix el mateix domini.',
    }),
    s('symmetry-politica-web', 'Política de privacidad', 'https://symmetry.club/es/politica-privacidad', 'Symmetry Club LLC', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2025-05-07',
      summary: 'Política del lloc web, anterior a la de l’aplicació. La fem servir per documentar la propietat del programari i les incoherències de redacció, com la menció a una societat estònia diferent del responsable declarat.',
    }),
    s('symmetry-app-store', 'Symmetry: Rutinas Gimnasio IA a l’App Store', 'https://apps.apple.com/es/app/id6474446718', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa declarada per la desenvolupadora: salut i forma física, dades de contacte i fotografies vinculades amb la identitat, i cap dada utilitzada per rastrejar.',
    }),
    s('synergym-app-store', 'Synergym a l’App Store', 'https://apps.apple.com/es/app/id6746641387', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de l’aplicació. És l’única font llegible del servei: declara ubicació exacta, dades de salut, contingut de l’usuari i identificadors vinculats amb la identitat.',
    }),
    s('synergym-virtuagym-privacy', 'Virtuagym Privacy Statement', 'https://www.virtuagym.com/virtuagym-privacy', 'Virtuagym', 'privacy-policy', 'primary', {
      language: 'en',
      summary: 'Política que enllaça la fitxa de l’App Store. Encadena dues redireccions fins a una pàgina d’un centre d’ajuda fet amb Salesforce que només es renderitza amb JavaScript: no l’hem poguda llegir ni al web ni a l’arxiu d’internet en captures del 2022, el 2025 i el 2026.',
    }),
    s('basic-fit-declaracion-privacidad', 'Declaración de privacidad', 'https://www.basic-fit.com/es-es/acerca-de/declaracion-de-privacidad', 'Basic-Fit International B.V.', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-02-01',
      summary: 'Política espanyola de la cadena. En fem servir la taula de terminis de conservació per categoria, la limitació de les transferències internacionals a Google Analytics i la negativa a fer perfilat amb decisions automatitzades.',
    }),
    s('basic-fit-app-store', 'Basic-Fit a l’App Store', 'https://apps.apple.com/es/app/id1588263601', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: dades de contacte, salut, identificadors i fotografies vinculades amb la identitat, amb «publicidad o marketing» entre les finalitats declarades.',
    }),
    s('hevy-privacy-policy', 'Privacy Policy', 'https://www.hevyapp.com/privacy/', 'Hevy Studios, S.L.', 'privacy-policy', 'primary', {
      language: 'en',
      summary: 'Política publicada al web de Hevy, més detallada que la que enllaça l’App Store. D’aquí surten el perfil públic per defecte, els terminis per categoria i la llista de tercers, que inclou OpenAI i Anthropic.',
    }),
    s('hevy-iubenda-privacy', 'Privacy Policy of Hevy', 'https://www.iubenda.com/privacy-policy/75379905', 'Hevy Studios, S.L. (iubenda)', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2026-06-04',
      summary: 'Política enllaçada des de la fitxa de l’App Store. Anomena Amplitude, Google Ireland i Adjust i descriu retargeting conductual, cosa que la política del web no diu.',
    }),
    s('hevy-app-store', 'Hevy Rutinas Gym Entrenamiento a l’App Store', 'https://apps.apple.com/es/app/id1458862350', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: dades de contacte, contactes i historial de compres vinculats amb la identitat; identificador d’usuari i dades sensibles declarats com a no vinculats.',
    }),
    s('yuka-politica-privacidad', 'Política de privacidad de Yuka', 'https://help.yuka.io/l/es/article/jcejovibd3', 'Yuca SAS', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-03-07',
      summary: 'Política vigent. En fem servir la llista de tercers, els servidors als Estats Units, els Països Baixos i França amb clàusules contractuals tipus, l’afirmació que no s’han venut dades en dotze mesos i la incorporació de funcions amb OpenAI o Google Cloud AI.',
    }),
    s('yuka-dades-usuari', '¿Yuka explota los datos del usuario?', 'https://help.yuka.io/l/es/article/s4zmrecec0-datos-del-usuario', 'Yuca SAS', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Pàgina d’ajuda on la companyia afirma que, per raons ètiques, no ven ni explota cap dada personal.',
    }),
    s('yuka-financament', '¿Cómo se financia la aplicación?', 'https://help.yuka.io/l/es/article/zrgtb8f2ka-aplicacion-financiacion', 'Yuca SAS', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Explicació del model de negoci: subscripció premium i publicació dels comptes anuals, sense publicitat ni acords amb marques.',
    }),
    s('yuka-registre', '¿Por qué hay que registrarse para utilizar Yuka?', 'https://help.yuka.io/l/es/article/knm8htuqdh-por-que-registrarse', 'Yuca SAS', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Motius del registre obligatori: assegurar la qualitat de les contribucions a la base de dades i lligar l’historial d’escanejos al compte.',
    }),
    s('yuka-eliminar-compte', '¿Cómo eliminar mi cuenta y toda mi información?', 'https://help.yuka.io/l/es/article/cjm0zng8ed-suprimir-cuenta', 'Yuca SAS', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Procediment d’eliminació del compte des del mòbil, amb enllaç directe, i confirmació que s’esborren totes les dades associades.',
    }),
    s('yuka-gestionar-dades', '¿Cómo gestionar mis datos personales?', 'https://help.yuka.io/l/es/article/9r7u8bcws1-c-mo-gestionar-mis-datos-personales', 'Yuca SAS', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Vies per exercir els drets: correu a l’equip, formulari de contacte i eliminació del compte des de la configuració de l’aplicació.',
    }),
    s('yuka-app-store', 'Yuka - Análisis de productos a l’App Store', 'https://apps.apple.com/es/app/id1092799236', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa mínima: interacció amb el producte i dades d’errors vinculades, dades de rendiment no vinculades i cap dada utilitzada per rastrejar.',
    }),
    s('adeslas-proteccion-de-datos', 'Protección de datos', 'https://www.segurcaixaadeslas.es/proteccion-de-datos', 'SegurCaixa Adeslas, S.A. de Seguros y Reaseguros', 'privacy-policy', 'primary', {
      language: 'es',
      archiveUrl: 'http://web.archive.org/web/20260709013847/https://www.segurcaixaadeslas.es/proteccion-de-datos',
      summary: 'Política corporativa de l’asseguradora. Documenta el tractament de dades de salut i biomètriques, el perfilat actuarial per fixar la prima, les cessions al sector assegurador i els permisos que demana l’aplicació. El domini bloqueja la lectura automatitzada: s’ha llegit a través de l’arxiu d’internet.',
    }),
    s('adeslas-aviso-legal', 'Aviso Legal', 'https://www.segurcaixaadeslas.es/aviso-legal', 'SegurCaixa Adeslas, S.A. de Seguros y Reaseguros', 'terms', 'primary', {
      language: 'es',
      archiveUrl: 'http://web.archive.org/web/20260709013847/https://www.segurcaixaadeslas.es/aviso-legal',
      summary: 'Identificació de la societat, NIF, domicili social i clau de registre a la Direcció General d’Assegurances, i condició de client per accedir a l’àrea privada.',
    }),
    s('adeslas-app-store', 'Adeslas a l’App Store', 'https://apps.apple.com/es/app/id1218328989', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: historial de navegació declarat com a utilitzat per rastrejar-te i cap dada vinculada amb la identitat, en una aplicació d’asseguradora de salut.',
    }),
    s('flo-privacy-policy', 'Privacy Policy', 'https://flo.health/privacy-policy', 'Flo Health UK Limited', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2026-08-31',
      summary: 'Política vigent. Inclou la taula completa d’encarregats del tractament amb nom i finalitat, el detall del que es comparteix amb AppsFlyer, Firebase i TikTok Ad Manager, el funcionament i les limitacions del mode anònim, els terminis de conservació i la integració amb Wellhub.',
    }),
    s('flo-security-txt', 'security.txt de flo.health', 'https://flo.health/.well-known/security.txt', 'Flo Health UK Limited', 'technical-doc', 'primary', {
      language: 'en',
      summary: 'Fitxer de contacte de seguretat amb adreça, idioma preferit, data de caducitat i remissió al programa de divulgació responsable gestionat amb HackerOne.',
    }),
    s('flo-app-store', 'Mi calendario menstrual Flo a l’App Store', 'https://apps.apple.com/es/app/id1038369065', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: compres, ubicació, identificadors i dades d’ús declarats com a utilitzats per rastrejar, i dades de salut i sensibles vinculades amb la identitat.',
    }),
    s('flo-ftc-2021-press', 'Developer of Popular Women’s Fertility-Tracking App Settles FTC Allegations that It Misled Consumers About the Disclosure of their Health Data', 'https://www.ftc.gov/news-events/news/press-releases/2021/01/developer-popular-womens-fertility-tracking-app-settles-ftc-allegations-it-misled-consumers-about', 'Federal Trade Commission', 'regulator', 'authority', {
      language: 'en',
      publishedAt: '2021-01-13',
      summary: 'Nota de premsa de l’acord de la Federal Trade Commission amb Flo Health: detalla quines companyies van rebre la informació de salut i quines obligacions imposa l’acord.',
    }),
    s('fitia-politica-privacidad', 'Política de privacidad', 'https://fitia.app/es/politica-privacidad/', 'Fitia, Inc.', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política vigent. En fem servir la llista de dades de salut i dietètiques, la base jurídica deduïda del fet de facilitar-les voluntàriament, els proveïdors de models (Google, OpenAI i Anthropic) i el procediment d’eliminació del compte.',
    }),
    s('fitia-app-store', 'Fitia: Contador de Calorías a l’App Store', 'https://apps.apple.com/es/app/id1448277011', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: identificadors declarats com a utilitzats per rastrejar i vinculats amb la identitat per a publicitat de tercers, amb la resta de categories declarades com a no vinculades.',
    }),
    s('wodbuster-politica-privacidad', 'Política de privacidad', 'https://wodbuster.com/politicadeprivacidad.aspx', 'WODBUSTER, S.L.U.', 'privacy-policy', 'primary', {
      language: 'es',
      archiveUrl: 'http://web.archive.org/web/20251016005050/https://wodbuster.com/politicadeprivacidad.aspx',
      summary: 'Política de privadesa del lloc web. Identifica la societat, el NIF i el domicili, nega les transferències internacionals i les cessions, i descriu només el formulari de contacte i les galetes. El domini bloqueja la lectura automatitzada: s’ha llegit a través de l’arxiu d’internet.',
    }),
    s('wodbuster-aviso-legal', 'Aviso legal y política de privacidad', 'https://wodbuster.com/avisolegal-politicaprivacidad.aspx', 'WODBUSTER, S.L.U.', 'terms', 'primary', {
      language: 'es',
      archiveUrl: 'http://web.archive.org/web/20260112184921/https://wodbuster.com/avisolegal-politicaprivacidad.aspx',
      summary: 'Avís legal. L’apartat de protecció de dades encara invoca la Llei Orgànica 15/1999 i el Reial decret 1720/2007, derogats el 2018 amb l’aplicació del RGPD.',
    }),
    s('wodbuster-app-store', 'WodBuster a l’App Store', 'https://apps.apple.com/es/app/id1195360759', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: salut i forma física, adreça postal, telèfon, fotografies, historial de compres i identificadors vinculats amb la identitat, cap de les quals apareix a la política publicada.',
    }),
    s('wellhub-politica-privacidad', 'Política de Privacidad', 'https://wellhub.com/es-es/privacy/', 'Wellhub US, LLC', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2023-12-19',
      summary: 'Política en espanyol de la plataforma. Concreta què es comunica al patrocinador (nom, cognoms, correu, subscripció i cost del pla, més informació d’activitat si es detecten problemes o abusos), les entitats responsables per país i les clàusules contractuals tipus.',
    }),
    s('wellhub-app-store', 'Wellhub (Gympass) a l’App Store', 'https://apps.apple.com/es/app/id703761434', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa amb vuit categories declarades com a utilitzades per rastrejar-te, inclosos la ubicació, el contingut de l’usuari i l’historial de cerca.',
    }),
  ],
  apps: [symmetry, synergymApp, basicFit, hevy, yuka, adeslas, flo, fitia, wodbuster, wellhub],
  incidents: [
    {
      slug: 'flo-ftc-dades-de-salut-2021',
      title: 'Flo comparteix dades del cicle menstrual amb Facebook i Google i arriba a un acord amb la Federal Trade Commission',
      type: 'regulatory-order',
      severity: 'high',
      apps: ['flo'],
      company: 'flo-health',
      occurredAt: '2019-02-01',
      disclosedAt: '2021-01-13',
      description:
        'La Federal Trade Commission nord-americana va acusar Flo Health d’haver promès que les dades de salut es mantindrien privades mentre les compartia amb els serveis d’analítica de Facebook i de Google, amb Fabric, amb AppsFlyer i amb Flurry. La pràctica es va aturar després que un article de premsa la revelés el febrer del 2019. La denúncia també al·legava l’incompliment dels marcs Privacy Shield entre la Unió Europea i els Estats Units i entre Suïssa i els Estats Units. L’acord no comporta multa, però obliga la companyia a obtenir revisions independents de les seves pràctiques de privadesa, a demanar consentiment abans de revelar informació de salut, a avisar les persones afectades de la compartició anterior i a exigir als tercers que destrueixin les dades rebudes.',
      affectedPeople: 'Més de cent milions de persones usuàries de l’aplicació, segons la denúncia',
      regulatory: {
        authority: 'Federal Trade Commission',
        legalBasis: 'Section 5 de la Federal Trade Commission Act i marcs Privacy Shield',
        status: 'final',
      },
      sources: ['flo-ftc-2021-press'],
    },
  ],
  storeIds: {
    symmetry: 'com.application.symmetry',
    synergym: 'eu.virtuagym.synergym',
    'basic-fit': 'com.basicfit.bfa',
    hevy: 'com.hevyapp.hevy',
    yuka: 'yuca.scanner',
    adeslas: 'com.qaracter.asybapp',
    flo: 'org.iggymedia.periodtracker',
    fitia: 'com.ulisesolave.Fitia',
    wodbuster: 'WodBuster.WodBuster',
    wellhub: 'com.gympass.gympass',
  },
}
