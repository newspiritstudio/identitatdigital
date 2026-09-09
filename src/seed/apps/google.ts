import { f, na, row, unknown } from '../helpers'
import type { AppSeed } from '../types'

/**
 * Serveis de Google.
 *
 * Comparteixen política de privadesa, compte i controls, però no perfil de
 * dades: un cercador no recull el mateix que un navegador ni que un servei de
 * mapes. Per això són fitxes separades amb una part de l'evidència compartida.
 */

const GOOGLE_LINKS = {
  privacyPolicy: 'https://policies.google.com/privacy',
  privacyCenter: 'https://myaccount.google.com/data-and-privacy',
}

const googleRights = {
  dataExport: f('yes', 'official', ['google-takeout-help'], 'Google Takeout permet exportar cada servei per separat en formats oberts i estàndard. És, tècnicament, una de les millors exportacions del directori.', {
    url: 'https://takeout.google.com/',
  }),
  exportFormatQuality: 'open' as const,
  rightsExercise: f('yes', 'official', ['google-privacy-policy'], undefined, {
    url: 'https://support.google.com/policies/troubleshooter/9009584',
    responseTimeDays: 30,
  }),
}

const googleSecurity = {
  e2ee: f('no', 'official', ['google-privacy-policy'], 'Google pot accedir al contingut allotjat als seus serveis. Hi ha excepcions puntuals, com el xifratge del costat del client per a clients empresarials.'),
  transportEncryption: f('yes', 'official', ['google-safety-center']),
  atRestEncryption: f('yes', 'official', ['google-safety-center'], 'Xifratge en repòs amb claus gestionades per Google.'),
  mfa: f('yes', 'official', ['google-safety-center'], 'Verificació en dos passos amb claus d’accés, claus de seguretat físiques, aplicació d’autenticació, notificació i SMS.', {
    methods: ['passkey', 'hardware-key', 'totp', 'app-push', 'sms'],
  }),
  independentAudits: f('yes', 'official', ['google-safety-center'], 'Certificacions ISO 27001, ISO 27701 i informes SOC, auditats per tercers.', {
    url: 'https://safety.google/',
  }),
  bugBounty: f('yes', 'official', ['google-safety-center'], 'Programa de recompenses de llarga trajectòria i amb imports elevats.', {
    url: 'https://bughunters.google.com/',
  }),
  vulnerabilityDisclosure: f('yes', 'official', ['google-safety-center'], 'L’equip Project Zero publica una política de divulgació de 90 dies aplicada també als productes propis.'),
}

const googleDeletionSteps = [
  'Entra a myaccount.google.com i obre la secció Dades i privadesa.',
  'Baixa fins a «Més opcions» i tria «Suprimeix el teu compte de Google» o el servei concret.',
  'Descarrega les dades amb Takeout si les vols conservar.',
  'Revisa la llista de serveis afectats i confirma amb la contrasenya.',
]

export const googleApps: AppSeed[] = [
  /* ═══════════════════════ Cercador de Google ═══════════════════════ */
  {
    slug: 'google-search',
    name: 'Cercador de Google',
    company: 'google-ireland',
    categories: ['cercadors'],
    tagline: 'El cercador dominant, finançat amb publicitat basada en la intenció',
    summary:
      'El cercador de Google converteix cada consulta en un senyal comercial. Si s’hi navega amb sessió iniciada, les cerques queden associades al compte i alimenten la personalització i la publicitat; si no, s’associen a identificadors de navegador i de dispositiu. Es pot fer servir sense compte, cosa que el diferencia de la majoria de serveis del directori.',
    platforms: ['web', 'ios', 'android'],
    businessModel: 'advertising',
    jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Al voltant del 90 % de les cerques web mundials',
    links: { website: 'https://www.google.com/', ...GOOGLE_LINKS },
    accountRequired: f('no', 'official', ['google-privacy-policy'], 'Es pot cercar sense compte. Sense sessió iniciada, l’activitat es vincula igualment a galetes i identificadors de dispositiu.'),
    openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'Les consultes de cerca són una de les dades més reveladores que genera una persona: malalties, deutes, relacions, orientació, intencions de compra. Google les conserva vinculades al compte per defecte, tot i que ofereix esborrat automàtic configurable.',
    dataCollection: [
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['google-privacy-policy', 'google-my-activity'], note: 'Amb sessió iniciada queda a l’historial d’activitat, amb esborrat automàtic als 18 mesos per als comptes nous.' }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['google-privacy-policy'] }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['google-privacy-policy', 'cnil-cookies-2021'] }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-privacy-policy'] }),
      row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-privacy-policy', 'ag-google-location-2022'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'] }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['google-ad-center'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['google-privacy-policy'] }),
      row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'], note: 'Només si s’hi navega amb sessió iniciada.' }),
      row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['google-privacy-policy'], note: 'Cerques per veu.' }),
      row('contingut-de-missatges', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['google-privacy-policy'] }),
    ],
    tracking: {
      crossAppTracking: f('yes', 'official', ['google-privacy-policy'], 'Google Analytics i la xarxa publicitària de Google són presents a una part enorme del web i permeten seguir l’activitat entre llocs.'),
      advertisingIdentifiers: f('yes', 'official', ['google-privacy-policy']),
      thirdPartyTrackersPresent: f('partial', 'official', ['google-privacy-policy'], 'Els rastrejadors són majoritàriament del mateix grup, cosa que no els fa menys efectius.'),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['google-ad-center'], 'Es pot desactivar la personalització dels anuncis, tot i que se’n continuen mostrant de contextuals.', {
        optOutUrl: 'https://myadcenter.google.com/',
      }),
      profiling: f('yes', 'official', ['google-ad-center'], 'Google construeix categories d’interès i de demografia inferida visibles i editables al Centre d’anuncis.'),
      aiTraining: f('partial', 'official', ['google-privacy-policy'], 'Google declara que fa servir informació pública i, en alguns casos, dades del servei per millorar els seus models. No hi ha un control específic per al cercador.'),
    },
    sharing: {
      thirdPartySharing: f('partial', 'official', ['google-privacy-policy'], 'Anunciants reben mètriques agregades; els socis de mesura, dades pseudonimitzades.'),
      intraGroupSharing: f('yes', 'official', ['google-privacy-policy'], 'Política única per a tots els serveis de Google i un sol compte que els uneix.'),
      dataBrokerSales: f('no', 'official', ['google-privacy-policy'], 'Google no ven dades personals a tercers; el seu negoci és vendre accés a l’audiència, no les dades.'),
      internationalTransfers: f('yes', 'official', ['google-privacy-policy'], undefined, { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('yes', 'official', ['google-transparency-report'], undefined, { url: 'https://transparencyreport.google.com/' }),
    },
    retention: {
      definedPeriods: f('yes', 'official', ['google-my-activity'], 'L’esborrat automàtic de l’activitat web i d’aplicacions està fixat en 18 mesos per als comptes creats després de 2020, i es pot reduir a 3 mesos.'),
      dataAfterDeletion: f('partial', 'official', ['google-delete-account'], 'Es conserva informació per a obligacions legals i de seguretat; l’eliminació completa dels sistemes de còpia pot trigar mesos.'),
      periods: [
        { dataType: 'historial-de-cerca', period: '18 mesos per defecte als comptes nous, configurable a 3, 18 o 36 mesos', sources: ['google-my-activity'] },
        { dataType: 'adreca-ip', period: 'Anonimització parcial dels registres de cerca als 9 mesos', sources: ['google-privacy-policy'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['google-delete-account'], 'Es pot eliminar el compte sencer o només l’historial de cerca sense tocar el compte.'),
      selfService: f('yes', 'official', ['google-delete-account']),
      directUrl: 'https://myaccount.google.com/deleteservices',
      difficulty: 'easy',
      waitingPeriodDays: 0,
      requiresSupportContact: false,
      steps: googleDeletionSteps,
      obstacles:
        'Eliminar el compte de Google implica perdre Gmail, Drive, YouTube, Fotos, Android i les compres digitals alhora. Aquest acoblament és, en si mateix, un obstacle: no és fàcil marxar d’un servei sense marxar de tots.',
      dataRetained:
        'Registres de seguretat i informació requerida per obligacions legals o fiscals. El contingut compartit amb altres persones pot romandre visible.',
      sources: ['google-delete-account'],
    },
    userRights: googleRights,
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['google-ad-center'], 'El Centre d’anuncis permet desactivar la personalització i veure i editar les categories inferides.', {
        url: 'https://myadcenter.google.com/',
      }),
      telemetryOptOut: f('partial', 'official', ['google-my-activity'], 'Es pot pausar l’activitat web i d’aplicacions, però no aturar la recollida de dades tècniques i de seguretat.'),
      granularControls: f('yes', 'official', ['google-my-activity'], 'Els controls d’activitat de Google són detallats, revisables i amb esborrat automàtic configurable.'),
      defaultPosture: 'mixed',
      darkPatterns: f('yes', 'regulator', ['cnil-cookies-2021', 'ag-google-location-2022'], 'Sancionat per l’asimetria del rebuig de galetes i per la confusió entre l’historial d’ubicacions i l’activitat web.'),
      darkPatternList: [
        {
          type: 'unbalanced-consent',
          severity: 'high',
          description:
            'L’avís de galetes de google.fr permetia acceptar-les d’un clic i requeria diversos passos per rebutjar-les, cosa que va motivar una sanció de 150 milions d’euros.',
          sources: ['cnil-cookies-2021'],
        },
        {
          type: 'confusing-language',
          severity: 'high',
          description:
            'Desactivar l’historial d’ubicacions no aturava la recollida d’ubicació, que continuava per la via de l’activitat web i d’aplicacions.',
          sources: ['ag-google-location-2022'],
        },
      ],
    },
    security: {
      ...googleSecurity,
      e2ee: na('Un cercador no transporta contingut privat entre persones usuàries.'),
    },
    alternatives: [
      {
        app: 'duckduckgo',
        comparability: 'equivalent',
        rationale:
          'Cobreix la mateixa necessitat de cerca web general sense construir cap perfil ni desar l’historial vinculat a una persona. Els resultats provenen principalment de l’índex de Bing complementat amb índex propi.',
        tradeOffs:
          'La qualitat dels resultats en cerques locals i en llengües minoritzades sol ser inferior, i no hi ha integració amb altres serveis.',
      },
      {
        app: 'brave',
        comparability: 'partial',
        rationale:
          'Brave Search té índex propi i no perfila, però es distribueix sobretot dins del navegador Brave.',
        tradeOffs: 'La cobertura de l’índex encara és menor que la de Google en cerques molt específiques.',
      },
    ],
    review: {
      researchStatus: 'in-depth',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'Exemple útil de puntuació matisada: Google té controls i exportació excel·lents i seguretat de primer nivell, però el nucli del servei és la publicitat basada en el perfilat. La dimensió de control puja i la de privadesa baixa, i això és exactament el que ha de passar.',
      openQuestions: [
        'Quina proporció de persones usuàries modifica realment el termini d’esborrat automàtic?',
      ],
    },
  },

  /* ═══════════════════════════ Chrome ═══════════════════════════ */
  {
    slug: 'chrome',
    name: 'Google Chrome',
    company: 'google-ireland',
    categories: ['navegadors'],
    tagline: 'El navegador majoritari, desenvolupat per una empresa publicitària',
    summary:
      'Chrome és el navegador més utilitzat del món i el desenvolupa l’empresa que més ingressos obté de la publicitat digital. Aquest conflicte estructural explica per què el bloqueig de rastrejadors de tercers hi ha arribat molt més tard i de manera molt més tímida que en navegadors independents. La sincronització és opcional però, si s’activa, l’historial de navegació complet arriba als servidors de Google.',
    platforms: ['windows', 'macos', 'linux', 'android', 'ios'],
    businessModel: 'advertising',
    jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Al voltant del 65 % del mercat mundial de navegadors',
    links: {
      website: 'https://www.google.com/chrome/',
      privacyPolicy: 'https://www.google.com/chrome/privacy/',
      privacyCenter: 'https://myaccount.google.com/data-and-privacy',
    },
    accountRequired: f('no', 'official', ['chrome-privacy-notice'], 'Chrome funciona sense iniciar sessió. La sincronització i les funcions de compte són opcionals.'),
    openSource: f('partial', 'official', ['chrome-privacy-notice'], 'Chrome es basa en Chromium, que és de codi obert, però la versió distribuïda per Google hi afegeix components privatius de sincronització, actualització i reproducció de contingut protegit.', {
      repositoryUrl: 'https://chromium.googlesource.com/chromium/src',
      licence: 'BSD de 3 clàusules per a Chromium; Chrome és privatiu',
    }),
    dataSummary:
      'Sense sincronització, Chrome envia dades de diagnòstic i de navegació segura. Amb sincronització activada, envia historial, marcadors, contrasenyes, extensions i pestanyes obertes al compte de Google.',
    dataCollection: [
      row('historial-de-navegacio', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['chrome-privacy-notice'], note: 'Només s’envia a Google si s’activa la sincronització.' }),
      row('dades-de-diagnostic', 'optional', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['chrome-privacy-notice'], note: 'Es pot desactivar a la configuració.' }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['chrome-privacy-notice'] }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['chrome-privacy-notice'], note: 'Chrome continua acceptant galetes de tercers per defecte, a diferència de Firefox, Safari i Brave.' }),
      row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['chrome-privacy-notice'] }),
      row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['chrome-privacy-notice'], note: 'Les API de publicitat de Privacy Sandbox calculen temes d’interès dins del navegador.' }),
      row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['chrome-privacy-notice'] }),
      row('fitxers-i-documents', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['chrome-privacy-notice'] }),
      row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['chrome-privacy-notice'], note: 'Només amb permís explícit per a un lloc concret.' }),
    ],
    tracking: {
      crossAppTracking: f('partial', 'independent', ['chrome-privacy-notice'], 'Chrome no bloqueja les galetes de tercers per defecte, cosa que permet el rastreig entre llocs que altres navegadors ja impedeixen.'),
      advertisingIdentifiers: f('partial', 'official', ['chrome-privacy-notice'], 'Les API de Privacy Sandbox substitueixen l’identificador únic per senyals d’interès calculats localment, però continuen alimentant la publicitat.'),
      thirdPartyTrackersPresent: f('yes', 'independent', ['chrome-privacy-notice'], 'El navegador no en porta, però tampoc no els bloqueja per defecte.'),
    },
    dataUses: {
      targetedAdvertising: f('partial', 'official', ['chrome-privacy-notice'], 'El navegador en si no mostra publicitat, però habilita les API que la fan possible i les activa per defecte.', {
        optOutUrl: 'chrome://settings/adPrivacy',
      }),
      profiling: f('partial', 'official', ['chrome-privacy-notice'], 'Els temes d’interès es calculen al dispositiu i es comparteixen amb els llocs que ho sol·liciten.'),
      aiTraining: unknown('No consta si les dades de navegació sincronitzades s’utilitzen per entrenar models.'),
    },
    sharing: {
      thirdPartySharing: f('partial', 'official', ['chrome-privacy-notice'], 'Els senyals de Privacy Sandbox es comparteixen amb els llocs visitats.'),
      intraGroupSharing: f('yes', 'official', ['chrome-privacy-notice'], 'Les dades sincronitzades formen part del compte de Google.'),
      dataBrokerSales: f('no', 'official', ['google-privacy-policy']),
      internationalTransfers: f('yes', 'official', ['google-privacy-policy'], undefined, { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'high',
      transparencyReport: f('yes', 'official', ['google-transparency-report'], undefined, { url: 'https://transparencyreport.google.com/' }),
    },
    retention: {
      definedPeriods: f('partial', 'official', ['chrome-privacy-notice'], 'Els terminis depenen del compte de Google, no del navegador.'),
      dataAfterDeletion: f('partial', 'official', ['google-delete-account'], 'Les dades sincronitzades s’eliminen amb el compte; les dades locals es queden al dispositiu fins que s’esborren manualment.'),
    },
    accountDeletion: {
      possible: na('Chrome es pot fer servir sense compte; el que s’elimina és el compte de Google associat, no el navegador.'),
      selfService: na('No hi ha compte propi del navegador.'),
      difficulty: 'unknown',
      requiresSupportContact: false,
      dataRetained: 'Les dades de sincronització es poden esborrar des de chrome://settings/syncSetup sense eliminar el compte de Google.',
      sources: ['chrome-privacy-notice'],
    },
    userRights: googleRights,
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['chrome-privacy-notice'], 'La configuració de privadesa dels anuncis permet desactivar els temes, els anuncis suggerits pel lloc i la mesura.', {
        url: 'chrome://settings/adPrivacy',
      }),
      telemetryOptOut: f('yes', 'official', ['chrome-privacy-notice'], 'Es pot desactivar l’enviament d’estadístiques d’ús i informes d’error.'),
      granularControls: f('yes', 'official', ['chrome-privacy-notice'], 'Controls de galetes, permisos per lloc, navegació segura i sincronització selectiva.'),
      defaultPosture: 'permissive',
      darkPatterns: f('partial', 'editorial', ['chrome-privacy-notice'], 'Iniciar sessió a qualsevol servei de Google inicia sessió també al navegador, cosa que va generar confusió quan es va introduir i encara facilita activar la sincronització sense adonar-se’n.'),
    },
    security: {
      ...googleSecurity,
      e2ee: f('partial', 'official', ['chrome-privacy-notice'], 'Les dades de sincronització es poden xifrar amb una frase de contrasenya pròpia, però no és el comportament per defecte.', {
        scope: 'all-optin',
        protocol: 'Xifratge del costat del client amb frase de contrasenya',
      }),
      independentAudits: f('partial', 'independent', ['chrome-privacy-notice'], 'Chromium rep escrutini públic constant, però no hi ha auditories formals publicades de la versió de Google.', {
        url: 'https://bughunters.google.com/',
      }),
    },
    alternatives: [
      {
        app: 'firefox',
        comparability: 'equivalent',
        rationale:
          'Navegador complet amb suport d’extensions, sincronització xifrada d’extrem a extrem i protecció contra el rastreig activada per defecte. Cobreix la mateixa necessitat sense pertànyer a una empresa publicitària.',
        tradeOffs:
          'Algunes aplicacions web molt específiques es proven només amb motors basats en Chromium.',
      },
      {
        app: 'brave',
        comparability: 'equivalent',
        rationale:
          'Comparteix el motor Chromium, de manera que la compatibilitat és pràcticament idèntica, i hi afegeix bloqueig de rastrejadors i d’anuncis per defecte.',
        tradeOffs:
          'Incorpora funcions de criptomoneda i un sistema publicitari propi que cal desactivar si no interessen.',
      },
    ],
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'La fitxa serveix per il·lustrar que la privadesa d’un navegador no depèn només del que recull, sinó del que deixa fer als altres. Chrome recull relativament poc per si mateix i, alhora, és el navegador que menys protegeix contra el rastreig de tercers.',
      openQuestions: [
        'Quin efecte real ha tingut Privacy Sandbox sobre el volum de rastreig entre llocs?',
      ],
    },
  },

  /* ═══════════════════════════ Gmail ═══════════════════════════ */
  {
    slug: 'gmail',
    name: 'Gmail',
    company: 'google-ireland',
    categories: ['correu-electronic'],
    tagline: 'Correu electrònic gratuït sense xifratge d’extrem a extrem',
    summary:
      'Google va deixar d’escanejar el contingut dels correus amb finalitats publicitàries el 2017, i això és un canvi real que cal reconèixer. El que no ha canviat és que el contingut és accessible per a Google: no hi ha xifratge d’extrem a extrem per als comptes de consum, de manera que el proveïdor pot llegir els missatges i lliurar-los davant d’un requeriment legal.',
    platforms: ['web', 'ios', 'android'],
    businessModel: 'freemium',
    jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Més de 1.800 milions de comptes actius',
    links: {
      website: 'https://mail.google.com/',
      ...GOOGLE_LINKS,
    },
    accountRequired: f('yes', 'official', ['google-privacy-policy'], 'Cal un compte de Google, que sovint demana un número de telèfon per verificar-lo.'),
    openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'El contingut dels correus es processa per a funcions com el filtre de brossa, la cerca i les respostes suggerides, i és accessible per a Google. Les metadades de correu —qui escriu a qui i quan— són tan reveladores com el contingut i no estan protegides.',
    dataCollection: [
      row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau', 'millora-del-producte'], sources: ['google-privacy-policy'], note: 'Google no l’escaneja amb finalitats publicitàries des de 2017, però hi té accés tècnic.' }),
      row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['google-privacy-policy'] }),
      row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'], note: 'Els fitxers adjunts es desen sense xifrar del costat del client.' }),
      row('llista-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'] }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'] }),
      row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['google-privacy-policy'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['google-privacy-policy'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['millora-del-producte', 'mesura-i-analisi-dus'], sources: ['google-privacy-policy'] }),
      row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'], note: 'Google extreu automàticament comandes, reserves i vols dels correus per mostrar-los a altres serveis.' }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['google-privacy-policy'] }),
    ],
    tracking: {
      crossAppTracking: f('no', 'official', ['google-privacy-policy'], 'Gmail no segueix l’activitat fora del servei, tot i que bloqueja només parcialment els píxels de seguiment dels correus rebuts.'),
      advertisingIdentifiers: f('no', 'official', ['google-privacy-policy']),
      thirdPartyTrackersPresent: f('partial', 'independent', ['google-privacy-policy'], 'Gmail encamina les imatges dels correus pels seus servidors, cosa que amaga l’adreça IP però no impedeix que la persona remitent sàpiga que s’ha obert el correu.'),
    },
    dataUses: {
      targetedAdvertising: f('partial', 'official', ['google-privacy-policy'], 'Els anuncis de les pestanyes Promocions i Xarxes socials es basen en dades del compte de Google, no en el contingut dels correus.', {
        optOutUrl: 'https://myadcenter.google.com/',
      }),
      profiling: f('partial', 'official', ['google-privacy-policy'], 'La informació extreta dels correus alimenta funcions d’altres serveis de Google, com els recordatoris de viatge.'),
      aiTraining: f('partial', 'official', ['google-privacy-policy'], 'Les funcions d’intel·ligència artificial de Workspace declaren no fer servir el contingut per entrenar models generals, però la política de consum és menys explícita.'),
    },
    sharing: {
      thirdPartySharing: f('partial', 'official', ['google-privacy-policy'], 'Aplicacions de tercers només amb autorització explícita per OAuth.'),
      intraGroupSharing: f('yes', 'official', ['google-privacy-policy']),
      dataBrokerSales: f('no', 'official', ['google-privacy-policy']),
      internationalTransfers: f('yes', 'official', ['google-privacy-policy'], undefined, { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('yes', 'official', ['google-transparency-report'], undefined, { url: 'https://transparencyreport.google.com/' }),
    },
    retention: {
      definedPeriods: f('partial', 'official', ['google-privacy-policy'], 'Els correus es conserven fins que la persona els esborra; la paperera es buida als 30 dies.'),
      dataAfterDeletion: f('partial', 'official', ['google-delete-account'], 'Els correus enviats resten a les bústies de les persones destinatàries.'),
      periods: [
        { dataType: 'contingut-de-missatges', period: '30 dies a la paperera abans de l’eliminació definitiva', sources: ['google-privacy-policy'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['google-delete-account'], 'Es pot eliminar només Gmail conservant la resta del compte de Google.'),
      selfService: f('yes', 'official', ['google-delete-account']),
      directUrl: 'https://myaccount.google.com/deleteservices',
      difficulty: 'easy',
      waitingPeriodDays: 0,
      requiresSupportContact: false,
      steps: googleDeletionSteps,
      obstacles:
        'Cal indicar una adreça electrònica alternativa i verificar-la. L’adreça de Gmail eliminada no es pot tornar a fer servir mai més, ni per tu ni per ningú.',
      dataRetained: 'Els correus que has enviat continuen a les bústies de les persones destinatàries.',
      sources: ['google-delete-account'],
    },
    userRights: googleRights,
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['google-ad-center'], undefined, { url: 'https://myadcenter.google.com/' }),
      telemetryOptOut: f('partial', 'official', ['google-my-activity']),
      granularControls: f('partial', 'official', ['google-privacy-policy'], 'Es poden desactivar les funcions intel·ligents i la personalització entre serveis, però no la recollida bàsica.'),
      defaultPosture: 'mixed',
      darkPatterns: f('no', 'editorial', ['google-delete-account'], 'El procés d’eliminació de Gmail és clar i directe, i permet esborrar només aquest servei.'),
    },
    security: {
      ...googleSecurity,
      e2ee: f('no', 'official', ['google-privacy-policy'], 'No hi ha xifratge d’extrem a extrem als comptes de consum. Existeix xifratge del costat del client per a clients de Workspace amb determinades llicències.', {
        scope: 'none',
      }),
    },
    alternatives: [
      {
        app: 'proton-mail',
        comparability: 'equivalent',
        rationale:
          'Cobreix la mateixa necessitat de correu electrònic amb aplicacions per a totes les plataformes, i hi afegeix xifratge de coneixement zero perquè el proveïdor no pugui llegir els missatges emmagatzemats.',
        tradeOffs:
          'La cerca dins dels correus és més limitada per raons criptogràfiques, l’espai gratuït és molt menor i els correus intercanviats amb proveïdors no xifrats no queden protegits en trànsit d’extrem a extrem.',
      },
    ],
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'Important no repetir el tòpic que «Google llegeix els teus correus per posar-te anuncis». Va deixar de fer-ho el 2017 i cal dir-ho. El problema real és estructural i persisteix: sense xifratge d’extrem a extrem, la confidencialitat depèn de la bona voluntat i de la resistència legal del proveïdor.',
    },
  },

  /* ═══════════════════════════ YouTube ═══════════════════════════ */
  {
    slug: 'youtube',
    name: 'YouTube',
    company: 'google-ireland',
    categories: ['video-i-streaming'],
    tagline: 'Vídeo finançat amb publicitat i recomanació algorítmica intensiva',
    summary:
      'YouTube funciona amb el compte de Google i el seu sistema de recomanació és un dels més estudiats del món. L’historial de visualització i de cerca dins de la plataforma és una radiografia molt precisa d’interessos, creences i estat d’ànim, i alimenta directament la publicitat. Es pot mirar sense compte, però la personalització i part de les funcions requereixen iniciar sessió.',
    platforms: ['web', 'ios', 'android', 'other'],
    businessModel: 'freemium',
    jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Més de 2.500 milions de persones usuàries mensuals',
    links: {
      website: 'https://www.youtube.com/',
      ...GOOGLE_LINKS,
    },
    accountRequired: f('no', 'official', ['google-privacy-policy'], 'Es pot veure contingut sense compte, amb restriccions d’edat i sense historial ni subscripcions.'),
    openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'YouTube registra què es mira, quant de temps, en quin moment s’abandona un vídeo, què es cerca i què es comenta. Aquesta informació és especialment sensible perquè el consum audiovisual revela conviccions polítiques, religioses i estats de salut sense que calgui declarar-los.',
    dataCollection: [
      row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['google-my-activity'], note: 'Esborrat automàtic configurable a 3 o 36 mesos.' }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['google-my-activity'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['google-privacy-policy'] }),
      row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['google-privacy-policy'] }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['google-ad-center'] }),
      row('conviccions-i-opinions', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['google-privacy-policy'], note: 'No es declaren, però són inferibles amb molta precisió a partir de l’historial de visualització.' }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['cnil-cookies-2021'] }),
      row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['google-privacy-policy'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'] }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-privacy-policy'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'] }),
      row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'], note: 'Només amb YouTube Premium o compres al canal.' }),
    ],
    tracking: {
      crossAppTracking: f('yes', 'official', ['google-privacy-policy'], 'El reproductor incrustat de YouTube és present a molts llocs web i permet la recollida de dades fora de la plataforma. El mode de privadesa millorada existeix però no és el predeterminat.'),
      advertisingIdentifiers: f('yes', 'official', ['google-privacy-policy']),
      thirdPartyTrackersPresent: f('partial', 'official', ['google-privacy-policy']),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['google-ad-center'], 'Es pot desactivar la personalització; la subscripció Premium elimina la publicitat però no la recollida de dades.', {
        optOutUrl: 'https://myadcenter.google.com/',
      }),
      profiling: f('yes', 'official', ['google-privacy-policy'], 'El sistema de recomanació és, en si mateix, un sistema de perfilat de comportament.'),
      aiTraining: f('partial', 'official', ['google-privacy-policy'], 'Google ha reconegut públicament l’ús de contingut de YouTube per entrenar models generatius, sense un mecanisme d’oposició per a les persones usuàries.'),
    },
    sharing: {
      thirdPartySharing: f('partial', 'official', ['google-privacy-policy']),
      intraGroupSharing: f('yes', 'official', ['google-privacy-policy']),
      dataBrokerSales: f('no', 'official', ['google-privacy-policy']),
      internationalTransfers: f('yes', 'official', ['google-privacy-policy'], undefined, { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('yes', 'official', ['google-transparency-report'], undefined, { url: 'https://transparencyreport.google.com/' }),
    },
    retention: {
      definedPeriods: f('yes', 'official', ['google-my-activity'], 'L’historial de YouTube té esborrat automàtic configurable a 3 o 36 mesos.'),
      dataAfterDeletion: f('partial', 'official', ['google-delete-account'], 'Els comentaris i els vídeos publicats desapareixen amb el canal, però les còpies fetes per tercers no.'),
      periods: [
        { dataType: 'historial-de-visualitzacio', period: '36 mesos per defecte als comptes nous, configurable a 3 mesos', sources: ['google-my-activity'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['google-delete-account'], 'Es pot eliminar el canal de YouTube sense eliminar el compte de Google.'),
      selfService: f('yes', 'official', ['google-delete-account']),
      directUrl: 'https://myaccount.google.com/deleteservices',
      difficulty: 'easy',
      waitingPeriodDays: 0,
      requiresSupportContact: false,
      steps: googleDeletionSteps,
      obstacles: 'L’eliminació del canal és irreversible i pot trigar un temps a fer efecte a la cerca.',
      dataRetained: 'Les còpies i les citacions del contingut fetes per altres persones són fora de l’abast de l’eliminació.',
      sources: ['google-delete-account'],
    },
    userRights: googleRights,
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['google-ad-center'], undefined, { url: 'https://myadcenter.google.com/' }),
      telemetryOptOut: f('partial', 'official', ['google-my-activity'], 'Es pot pausar l’historial de visualització i de cerca, cosa que degrada les recomanacions.'),
      granularControls: f('yes', 'official', ['google-my-activity'], 'Historial pausable, esborrable i amb caducitat automàtica; es poden amagar canals concrets de les recomanacions.'),
      defaultPosture: 'mixed',
      darkPatterns: f('partial', 'regulator', ['cnil-cookies-2021'], 'L’avís de galetes va ser sancionat per la CNIL. La reproducció automàtica i les recomanacions infinites són decisions de disseny orientades a maximitzar el temps de permanència.'),
      darkPatternList: [
        {
          type: 'preselected',
          severity: 'medium',
          description: 'La reproducció automàtica del vídeo següent ve activada per defecte.',
          sources: ['google-privacy-policy'],
        },
      ],
    },
    security: {
      ...googleSecurity,
      e2ee: na('El contingut de YouTube és públic o semipúblic per naturalesa; no hi ha comunicació privada a protegir.'),
    },
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'L’historial de visualització és la dada més sensible d’aquesta fitxa i no encaixa en cap categoria de l’article 9 del RGPD, tot i que permet inferir-ne diverses. És un bon exemple de per què la sensibilitat editorial d’un tipus de dada no coincideix sempre amb la seva qualificació jurídica.',
    },
  },

  /* ═══════════════════════ Google Maps ═══════════════════════ */
  {
    slug: 'google-maps',
    name: 'Google Maps',
    company: 'google-ireland',
    categories: ['mapes-i-navegacio'],
    tagline: 'Mapes i navegació amb historial d’ubicació',
    summary:
      'Google Maps necessita la ubicació per funcionar, i això és legítim. La qüestió és què se’n fa després. La cronologia d’ubicacions, desactivada per defecte als comptes nous i emmagatzemada al dispositiu des de 2024, conserva un registre històric de per on has passat que constitueix una de les dades més sensibles que pot generar una persona.',
    platforms: ['web', 'ios', 'android'],
    businessModel: 'advertising',
    jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Més de 1.000 milions de persones usuàries mensuals',
    links: {
      website: 'https://www.google.com/maps',
      ...GOOGLE_LINKS,
    },
    accountRequired: f('no', 'official', ['google-privacy-policy'], 'Es pot consultar i navegar sense compte; les ressenyes, els llocs desats i la cronologia el requereixen.'),
    openSource: f('no', 'official', ['google-privacy-policy'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'La ubicació precisa i continuada permet deduir on vius, on treballes, quin metge visites, a quina església o seu política entres i amb qui coincideixes. És la categoria de dades amb més potencial de dany del directori.',
    dataCollection: [
      row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-privacy-policy', 'ag-google-location-2022'], note: 'Necessària per a la navegació. La cronologia històrica és opcional i, des de 2024, es desa al dispositiu.' }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'] }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['google-my-activity'], note: 'Les adreces cercades revelen destinacions i intencions.' }),
      row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'], note: 'Ressenyes i fotografies de llocs, públiques i associades al nom del perfil.' }),
      row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'] }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['google-ad-center'], note: 'Els llocs visitats permeten inferir categories comercials molt precises.' }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'] }),
      row('xarxa-i-connectivitat', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['google-privacy-policy'], note: 'Les xarxes sense fil properes s’utilitzen per afinar la ubicació.' }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['millora-del-producte'], sources: ['google-privacy-policy'] }),
    ],
    tracking: {
      crossAppTracking: f('partial', 'official', ['google-privacy-policy'], 'Les dades d’ubicació alimenten la mesura de visites a establiments físics dins de l’ecosistema publicitari de Google.'),
      advertisingIdentifiers: f('yes', 'official', ['google-privacy-policy']),
      thirdPartyTrackersPresent: f('no', 'official', ['google-privacy-policy']),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['google-ad-center'], 'Els anuncis de llocs propers i la mesura de visites a botigues es basen en la ubicació.', {
        optOutUrl: 'https://myadcenter.google.com/',
      }),
      profiling: f('yes', 'official', ['google-ad-center']),
      aiTraining: unknown('No consta si les dades de cronologia s’utilitzen per entrenar models.'),
    },
    sharing: {
      thirdPartySharing: f('partial', 'official', ['google-privacy-policy'], 'Les ressenyes són públiques; les dades agregades de trànsit es comparteixen amb administracions i socis.'),
      intraGroupSharing: f('yes', 'official', ['google-privacy-policy']),
      dataBrokerSales: f('no', 'official', ['google-privacy-policy']),
      internationalTransfers: f('yes', 'official', ['google-privacy-policy'], undefined, { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('yes', 'official', ['google-transparency-report'], undefined, { url: 'https://transparencyreport.google.com/' }),
    },
    retention: {
      definedPeriods: f('yes', 'official', ['google-my-activity'], 'La cronologia té esborrat automàtic per defecte i configurable; des de 2024 s’emmagatzema principalment al dispositiu.'),
      dataAfterDeletion: f('partial', 'official', ['google-delete-account'], 'Les ressenyes publicades es poden eliminar per separat; les còpies indexades poden trigar a desaparèixer.'),
      periods: [
        { dataType: 'ubicacio-precisa', period: 'Cronologia amb esborrat automàtic per defecte, configurable entre 3 i 36 mesos', sources: ['google-my-activity'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['google-delete-account'], 'La cronologia i l’activitat de Maps es poden esborrar sense tocar el compte.'),
      selfService: f('yes', 'official', ['google-delete-account']),
      directUrl: 'https://myactivity.google.com/product/maps',
      difficulty: 'easy',
      waitingPeriodDays: 0,
      requiresSupportContact: false,
      steps: googleDeletionSteps,
      obstacles:
        'Durant anys, desactivar l’historial d’ubicacions no aturava la recollida perquè continuava per la via de l’activitat web i d’aplicacions, cosa que va acabar en un acord de 391,5 milions de dòlars als Estats Units.',
      dataRetained: 'Ressenyes i fotografies publicades, si no s’eliminen expressament.',
      sources: ['google-delete-account', 'ag-google-location-2022'],
    },
    userRights: googleRights,
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['google-ad-center'], undefined, { url: 'https://myadcenter.google.com/' }),
      telemetryOptOut: f('partial', 'official', ['google-my-activity']),
      granularControls: f('yes', 'official', ['google-my-activity'], 'Es pot desactivar la cronologia, esborrar-la per trams i activar el mode d’incògnit dins de Maps.'),
      defaultPosture: 'mixed',
      darkPatterns: f('yes', 'regulator', ['ag-google-location-2022'], 'La separació entre «historial d’ubicacions» i «activitat web i d’aplicacions» va induir a error de manera sistemàtica sobre quines dades es deixaven de recollir.'),
      darkPatternList: [
        {
          type: 'confusing-language',
          severity: 'high',
          description:
            'Dos paràmetres amb noms diferents controlaven la mateixa dada, de manera que desactivar-ne un donava una falsa sensació de protecció.',
          sources: ['ag-google-location-2022'],
        },
      ],
    },
    security: {
      ...googleSecurity,
      e2ee: na('Un servei de mapes no transporta comunicacions privades entre persones usuàries.'),
    },
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'El trasllat de la cronologia al dispositiu, iniciat el 2024, és una millora substantiva i cal reconèixer-la. Convé revisar aquesta fitxa quan el desplegament s’hagi completat a totes les plataformes per comprovar què queda realment als servidors.',
      openQuestions: [
        'Un cop completat el trasllat de la cronologia al dispositiu, quina informació d’ubicació continua arribant als servidors de Google?',
      ],
    },
  },
]
