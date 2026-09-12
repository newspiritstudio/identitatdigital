import { f, na, row, unknown } from '../helpers'
import type { AppSeed } from '../types'

export const socialApps: AppSeed[] = [
  /* ═══════════════════════════ TikTok ═══════════════════════════ */
  {
    slug: 'tiktok',
    name: 'TikTok',
    company: 'tiktok-technology',
    categories: ['xarxes-socials', 'video-i-streaming'],
    tagline: 'Vídeo curt amb recomanació algorítmica i dues sancions milionàries',
    summary:
      'TikTok és el servei del directori amb l’historial regulador més ràpid: dues sancions de l’autoritat irlandesa en menys de dos anys, una pel tractament de dades de menors i l’altra per les transferències a la Xina. El seu sistema de recomanació aprèn del temps de permanència en cada vídeo, un senyal que la persona usuària no controla conscientment i que resulta extraordinàriament revelador.',
    platforms: ['ios', 'android', 'web'],
    businessModel: 'advertising',
    jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Més de 1.500 milions de persones usuàries mensuals',
    links: {
      website: 'https://www.tiktok.com/',
      privacyPolicy: 'https://www.tiktok.com/legal/page/eea/privacy-policy/en',
      terms: 'https://www.tiktok.com/legal/page/eea/terms-of-service/en',
      privacyCenter: 'https://www.tiktok.com/safety/en/privacy-and-security-on-tiktok/',
    },
    accountRequired: f('no', 'official', ['tiktok-privacy-eea'], 'Es pot veure contingut sense compte, però l’aplicació insisteix constantment a registrar-se i les funcions bàsiques queden bloquejades.'),
    openSource: f('no', 'official', ['tiktok-privacy-eea'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'TikTok recull el contingut publicat, les interaccions, el temps de visualització vídeo a vídeo, informació del dispositiu i de la xarxa, i, si s’autoritza, contactes i ubicació. La política europea reconeix explícitament l’accés remot a dades des de la Xina, que va ser el nucli de la sanció de 2025.',
    dataCollection: [
      row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['tiktok-privacy-eea'] }),
      row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tiktok-privacy-eea'] }),
      row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tiktok-privacy-eea'] }),
      row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['tiktok-privacy-eea'] }),
      row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['tiktok-privacy-eea'] }),
      row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['tiktok-privacy-eea'], note: 'Els filtres facials processen característiques del rostre; la política europea nega que se’n derivin identificadors biomètrics únics.' }),
      row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['tiktok-privacy-eea'], note: 'Inclou el temps exacte de permanència en cada vídeo, no només les interaccions explícites.' }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['tiktok-privacy-eea'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['tiktok-privacy-eea'] }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['tiktok-privacy-eea'] }),
      row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['tiktok-privacy-eea'] }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['tiktok-privacy-eea'] }),
      row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['tiktok-privacy-eea'] }),
      row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['tiktok-privacy-eea'] }),
      row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['tiktok-privacy-eea'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['tiktok-privacy-eea'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['tiktok-privacy-eea'] }),
      row('xarxa-i-connectivitat', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['tiktok-privacy-eea'] }),
      row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['moderacio-de-continguts', 'prestacio-del-servei'], sources: ['tiktok-privacy-eea'], note: 'Els missatges directes no estan xifrats d’extrem a extrem.' }),
      row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tiktok-privacy-eea'] }),
    ],
    tracking: {
      crossAppTracking: f('yes', 'official', ['tiktok-privacy-eea'], 'El píxel de TikTok i el kit per a aplicacions recullen activitat fora de la plataforma amb finalitats publicitàries.'),
      advertisingIdentifiers: f('yes', 'official', ['tiktok-privacy-eea']),
      thirdPartyTrackersPresent: f('yes', 'official', ['tiktok-privacy-eea']),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['tiktok-privacy-eea'], 'Des de 2023, a Europa es pot optar per una experiència sense publicitat personalitzada, amb resultats molt menys ajustats.', {
        optOutUrl: 'https://www.tiktok.com/setting/ads',
      }),
      profiling: f('yes', 'regulator', ['tiktok-privacy-eea', 'dpc-tiktok-2023']),
      aiTraining: f('partial', 'official', ['tiktok-privacy-eea'], 'La política preveu l’ús de contingut per desenvolupar i millorar tecnologies d’aprenentatge automàtic.'),
    },
    sharing: {
      thirdPartySharing: f('yes', 'official', ['tiktok-privacy-eea']),
      intraGroupSharing: f('yes', 'regulator', ['tiktok-privacy-eea', 'dpc-tiktok-2025'], 'Compartició amb entitats del grup ByteDance, incloent-hi personal a la Xina amb accés remot.'),
      dataBrokerSales: f('partial', 'official', ['tiktok-privacy-eea'], 'La política preveu la recepció de dades de socis publicitaris i d’agregadors.'),
      internationalTransfers: f('yes', 'regulator', ['dpc-tiktok-2025'], 'Transferències i accés remot des de la Xina, sancionats amb 530 milions d’euros el 2025. El Projecte Clover manté centres de dades a Europa.', {
        mechanism: 'sccs',
      }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('yes', 'official', ['tiktok-transparency'], undefined, { url: 'https://www.tiktok.com/transparency/en/' }),
    },
    retention: {
      definedPeriods: f('partial', 'official', ['tiktok-privacy-eea'], 'La política enumera criteris però pocs terminis numèrics.'),
      dataAfterDeletion: f('partial', 'official', ['tiktok-delete-account'], 'Després dels 30 dies de gràcia s’elimina el compte; part de la informació es conserva per obligacions legals i de seguretat.'),
      periods: [
        { period: '30 dies de desactivació abans de l’eliminació definitiva', sources: ['tiktok-delete-account'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['tiktok-delete-account']),
      selfService: f('yes', 'official', ['tiktok-delete-account']),
      directUrl: 'https://www.tiktok.com/setting/deactivate-or-delete-account',
      difficulty: 'easy',
      waitingPeriodDays: 30,
      requiresSupportContact: false,
      steps: [
        'Obre el perfil i entra a Configuració i privadesa.',
        'Ves a Compte i tria «Desactivar o eliminar el compte».',
        'Tria «Eliminar el compte permanentment».',
        'Verifica la identitat i confirma. El compte queda desactivat 30 dies.',
      ],
      obstacles:
        'Durant els 30 dies qualsevol inici de sessió reactiva el compte. Cal descarregar les dades abans, perquè després no s’hi pot accedir.',
      dataRetained:
        'Els missatges enviats resten a les bústies de les persones destinatàries i es conserven registres per a obligacions legals.',
      sources: ['tiktok-delete-account'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['tiktok-request-data'], 'Es pot demanar en format JSON o TXT des de la configuració.', {
        url: 'https://www.tiktok.com/setting/download-your-data',
      }),
      exportFormatQuality: 'open',
      rightsExercise: f('yes', 'official', ['tiktok-privacy-eea'], undefined, {
        url: 'https://www.tiktok.com/legal/report/privacy',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['tiktok-privacy-eea'], undefined, { url: 'https://www.tiktok.com/setting/ads' }),
      telemetryOptOut: f('no', 'official', ['tiktok-privacy-eea']),
      granularControls: f('partial', 'official', ['tiktok-privacy-eea'], 'Hi ha controls de privadesa del compte i de publicitat, però no de la recollida de senyals que alimenten la recomanació.'),
      defaultPosture: 'permissive',
      darkPatterns: f('yes', 'regulator', ['dpc-tiktok-2023'], 'L’autoritat irlandesa va constatar l’ús de patrons enganyosos en les finestres emergents que empenyien cap a les opcions més públiques.'),
      darkPatternList: [
        {
          type: 'preselected',
          severity: 'high',
          description: 'Els comptes de menors es creaven públics per defecte, amb comentaris i descàrregues obertes.',
          sources: ['dpc-tiktok-2023'],
        },
        {
          type: 'nagging',
          severity: 'medium',
          description: 'L’aplicació insisteix repetidament a registrar-se, a activar les notificacions i a donar accés als contactes.',
          sources: ['tiktok-privacy-eea'],
        },
      ],
    },
    security: {
      e2ee: f('no', 'official', ['tiktok-privacy-eea'], 'Els missatges directes no tenen xifratge d’extrem a extrem.', { scope: 'none' }),
      transportEncryption: f('yes', 'official', ['tiktok-privacy-eea']),
      atRestEncryption: f('yes', 'official', ['tiktok-transparency']),
      mfa: f('yes', 'official', ['tiktok-privacy-eea'], undefined, { methods: ['totp', 'sms', 'email'] }),
      independentAudits: f('partial', 'official', ['tiktok-transparency'], 'El Projecte Clover incorpora supervisió d’una empresa de ciberseguretat europea, però els informes complets no són públics.', {
        url: 'https://www.tiktok.com/transparency/en/',
      }),
      bugBounty: f('yes', 'official', ['tiktok-transparency'], undefined, { url: 'https://hackerone.com/tiktok' }),
      vulnerabilityDisclosure: f('yes', 'official', ['tiktok-transparency']),
    },
    review: {
      researchStatus: 'in-depth',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'Cal evitar tant l’alarmisme geopolític com la banalització. El fet documentat és que TikTok va declarar incorrectament davant d’una autoritat de control que no emmagatzemava dades europees a la Xina, i això afecta la fiabilitat de la resta de les seves declaracions.',
      openQuestions: [
        'Quin abast real té el Projecte Clover un cop desplegat i quins accessos remots persisteixen?',
      ],
    },
  },

  /* ═══════════════════════════ X ═══════════════════════════ */
  {
    slug: 'x',
    name: 'X',
    company: 'x-corp',
    categories: ['xarxes-socials'],
    tagline: 'Xarxa pública de missatges curts integrada amb una empresa d’intel·ligència artificial',
    summary:
      'X, abans Twitter, ha canviat de propietari, de nom i de polítiques en pocs anys, i des de 2025 forma part de xAI. Aquesta integració és el fet més rellevant de la fitxa: el contingut publicat alimenta l’entrenament del model Grok, amb una casella activada per defecte que ja va provocar la intervenció de l’autoritat irlandesa el 2024.',
    platforms: ['ios', 'android', 'web'],
    businessModel: 'freemium',
    jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Al voltant de 550 milions de persones usuàries mensuals',
    links: {
      website: 'https://x.com/',
      privacyPolicy: 'https://x.com/en/privacy',
      terms: 'https://x.com/en/tos',
      privacyCenter: 'https://x.com/settings/your_twitter_data',
    },
    accountRequired: f('yes', 'official', ['x-privacy-policy'], 'Des de 2023 la lectura sense compte està severament limitada.'),
    openSource: f('partial', 'official', ['x-privacy-policy'], 'Una part de l’algoritme de recomanació es va publicar el 2023, però no s’ha mantingut al dia i la resta del sistema és privativa.', {
      repositoryUrl: 'https://github.com/twitter/the-algorithm',
      licence: 'AGPL-3.0 per a la part publicada',
    }),
    dataSummary:
      'El contingut d’X és públic per naturalesa, i això canvia el marc: el problema no és tant qui el llegeix com què se’n fa. Les dades privades rellevants són els missatges directes, sense xifratge d’extrem a extrem per defecte, i el gràfic de qui segueix qui.',
    dataCollection: [
      row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['x-privacy-policy'] }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['x-privacy-policy'] }),
      row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['x-privacy-policy'] }),
      row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['x-privacy-policy', 'dpc-grok-2024'] }),
      row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['x-privacy-policy'], note: 'Els missatges directes xifrats existeixen però requereixen subscripció i tenen limitacions reconegudes.' }),
      row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['x-privacy-policy'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['x-privacy-policy'] }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['x-privacy-policy'] }),
      row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'yes', shared: 'none', purposes: ['recomanacions-algoritmiques'], sources: ['x-privacy-policy'] }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['x-privacy-policy'] }),
      row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'yes', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['x-privacy-policy'] }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['x-privacy-policy'] }),
      row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['x-privacy-policy'], note: 'Els botons de compartir i el píxel d’X recullen activitat en llocs de tercers.' }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['x-privacy-policy'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['x-privacy-policy'] }),
      row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['x-privacy-policy'] }),
      row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['x-privacy-policy'], note: 'La política preveu la recollida de dades biomètriques per a la verificació d’identitat de comptes de pagament.' }),
    ],
    tracking: {
      crossAppTracking: f('yes', 'official', ['x-privacy-policy']),
      advertisingIdentifiers: f('yes', 'official', ['x-privacy-policy']),
      thirdPartyTrackersPresent: f('yes', 'official', ['x-privacy-policy']),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['x-privacy-policy'], undefined, {
        optOutUrl: 'https://x.com/settings/ads_preferences',
      }),
      profiling: f('yes', 'official', ['x-privacy-policy']),
      aiTraining: f('yes', 'regulator', ['x-privacy-policy', 'dpc-grok-2024'], 'Les publicacions i les interaccions s’utilitzen per entrenar Grok. El 2024 l’autoritat irlandesa va haver d’acudir als tribunals perquè la casella venia activada per defecte i sense informació prèvia.', {
        optOutUrl: 'https://x.com/settings/grok_settings',
      }),
    },
    sharing: {
      thirdPartySharing: f('yes', 'official', ['x-privacy-policy'], 'Anunciants, socis de dades i, mitjançant l’API, tercers amb accés a contingut públic.'),
      intraGroupSharing: f('yes', 'official', ['x-privacy-policy'], 'Compartició amb xAI després de la fusió de 2025.'),
      dataBrokerSales: f('yes', 'official', ['x-privacy-policy'], 'X comercialitza l’accés massiu al contingut públic a través de l’API i d’acords de llicència.'),
      internationalTransfers: f('yes', 'official', ['x-privacy-policy'], undefined, { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('partial', 'official', ['x-transparency'], 'La publicació dels informes s’ha tornat irregular des del canvi de propietat.', {
        url: 'https://transparency.x.com/',
      }),
    },
    retention: {
      definedPeriods: f('partial', 'official', ['x-privacy-policy'], 'Es fixa un límit de 18 mesos per a les dades de registre, però pocs terminis més.'),
      dataAfterDeletion: f('partial', 'official', ['x-deactivate-account'], 'Els 30 dies de desactivació precedeixen l’eliminació. El contingut ja indexat i les còpies fetes per tercers no s’eliminen.'),
      periods: [
        { period: '30 dies de desactivació abans que comenci l’eliminació', sources: ['x-deactivate-account'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['x-deactivate-account'], 'No hi ha un botó d’eliminació directa: cal desactivar el compte i deixar passar 30 dies sense iniciar sessió.'),
      selfService: f('yes', 'official', ['x-deactivate-account']),
      directUrl: 'https://x.com/settings/deactivate',
      difficulty: 'medium',
      waitingPeriodDays: 30,
      requiresSupportContact: false,
      steps: [
        'Entra a Configuració i privadesa i obre El teu compte.',
        'Tria «Desactiva el teu compte».',
        'Llegeix les conseqüències i confirma amb la contrasenya.',
        'No iniciïs sessió durant 30 dies perquè l’eliminació es completi.',
      ],
      obstacles:
        'La paraula «eliminar» no apareix enlloc del procés: només «desactivar». Qualsevol inici de sessió, fins i tot accidental des d’una aplicació amb la sessió oberta, reactiva el compte i reinicia el compte enrere.',
      dataRetained:
        'Les publicacions replicades, citades o arxivades per tercers resten en línia. Es conserven registres per a obligacions legals.',
      sources: ['x-deactivate-account'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['x-your-data'], 'Arxiu descarregable amb publicacions, missatges i dades del compte.', {
        url: 'https://x.com/settings/download_your_data',
      }),
      exportFormatQuality: 'mixed',
      rightsExercise: f('yes', 'official', ['x-privacy-policy'], undefined, {
        url: 'https://privacy.x.com/',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['x-privacy-policy'], undefined, { url: 'https://x.com/settings/ads_preferences' }),
      telemetryOptOut: f('no', 'official', ['x-privacy-policy']),
      granularControls: f('partial', 'official', ['x-privacy-policy']),
      defaultPosture: 'permissive',
      darkPatterns: f('yes', 'regulator', ['dpc-grok-2024', 'x-deactivate-account'], 'La casella d’entrenament de Grok activada per defecte i l’absència de la paraula «eliminar» al procés de baixa.'),
      darkPatternList: [
        {
          type: 'preselected',
          severity: 'high',
          description:
            'L’opció de permetre l’ús de les publicacions per entrenar Grok es va activar per defecte, sense informació prèvia, per a totes les persones usuàries europees.',
          sources: ['dpc-grok-2024'],
        },
        {
          type: 'hidden-exit',
          severity: 'medium',
          description:
            'No existeix cap opció anomenada «eliminar el compte»: cal saber que la desactivació seguida de 30 dies d’inactivitat equival a l’eliminació.',
          sources: ['x-deactivate-account'],
        },
      ],
    },
    security: {
      e2ee: f('partial', 'official', ['x-privacy-policy'], 'Els missatges xifrats només estan disponibles per a comptes de pagament i la mateixa empresa n’ha advertit les limitacions, entre altres l’absència de protecció contra atacs d’intermediari.', {
        scope: 'partial-optin',
      }),
      transportEncryption: f('yes', 'official', ['x-privacy-policy']),
      atRestEncryption: f('yes', 'official', ['x-privacy-policy']),
      mfa: f('partial', 'official', ['x-privacy-policy'], 'Des de 2023 la verificació per SMS només està disponible per a comptes de pagament; l’aplicació d’autenticació i les claus de seguretat continuen sent gratuïtes.', {
        methods: ['totp', 'hardware-key', 'passkey'],
      }),
      independentAudits: unknown('No consten auditories de seguretat independents publicades després del canvi de propietat.'),
      bugBounty: f('yes', 'official', ['x-privacy-policy'], undefined, { url: 'https://hackerone.com/x' }),
      vulnerabilityDisclosure: f('partial', 'editorial', ['x-privacy-policy'], 'Existeix un canal, però la comunicació pública sobre incidents s’ha reduït molt.'),
    },
    alternatives: [
      {
        app: 'reddit',
        comparability: 'partial',
        rationale:
          'Cobreix la conversa pública i el seguiment de temes d’actualitat en comunitats obertes, amb identitat pseudònima i sense exigir telèfon ni nom real.',
        tradeOffs:
          'No hi ha el seguiment de comptes concrets ni la immediatesa d’una línia de temps, i el contingut publicat no es pot eliminar en tancar el compte.',
      },
    ],
    review: {
      researchStatus: 'in-depth',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'La volatilitat de les polítiques d’X és, en si mateixa, un factor de risc: el que és cert avui pot no ser-ho d’aquí a sis mesos. Aquesta fitxa necessita una revisió més freqüent que la resta.',
      openQuestions: [
        'Quin abast té la compartició de dades entre X i xAI després de la fusió?',
      ],
    },
  },

  /* ═══════════════════════════ LinkedIn ═══════════════════════════ */
  {
    slug: 'linkedin',
    name: 'LinkedIn',
    company: 'linkedin-ireland',
    categories: ['xarxes-professionals'],
    tagline: 'Xarxa professional amb perfilat sancionat amb 310 milions d’euros',
    summary:
      'LinkedIn conté informació que la majoria de xarxes socials no tenen: trajectòria laboral verificable, salari aproximat, sector, formació i xarxa de contactes professionals. La sanció de 2024 va concloure que la companyia no tenia una base jurídica vàlida per fer servir aquestes dades, ni les de tercers, per a l’anàlisi de comportament i la publicitat dirigida.',
    platforms: ['ios', 'android', 'web'],
    businessModel: 'freemium',
    jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Més de 1.000 milions de perfils registrats',
    links: {
      website: 'https://www.linkedin.com/',
      privacyPolicy: 'https://www.linkedin.com/legal/privacy-policy',
      terms: 'https://www.linkedin.com/legal/user-agreement',
      privacyCenter: 'https://www.linkedin.com/psettings/',
    },
    accountRequired: f('yes', 'official', ['linkedin-privacy-policy'], 'Els perfils públics són visibles sense compte, però qualsevol ús real el requereix.'),
    openSource: f('no', 'official', ['linkedin-privacy-policy'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'La informació professional és especialment sensible perquè afecta directament l’ocupabilitat. Una inferència errònia sobre disponibilitat, sector o nivell salarial pot tenir conseqüències materials immediates.',
    dataCollection: [
      row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['linkedin-privacy-policy'] }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['linkedin-privacy-policy'] }),
      row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['linkedin-privacy-policy'] }),
      row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['linkedin-privacy-policy'] }),
      row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['linkedin-privacy-policy'] }),
      row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['linkedin-privacy-policy'] }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['dpc-linkedin-2024'], note: 'Inclou inferències sobre disponibilitat per canviar de feina, sector i nivell d’ingressos.' }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'recomanacions-algoritmiques'], sources: ['linkedin-privacy-policy'] }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['linkedin-privacy-policy'] }),
      row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['dpc-linkedin-2024'], note: 'La sanció de 2024 va afectar precisament l’ús de dades de tercers per a publicitat.' }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['linkedin-privacy-policy'] }),
      row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['linkedin-privacy-policy'], note: 'Sense xifratge d’extrem a extrem.' }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['linkedin-privacy-policy'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['linkedin-privacy-policy'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['linkedin-privacy-policy'] }),
      row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['linkedin-privacy-policy'] }),
    ],
    tracking: {
      crossAppTracking: f('yes', 'regulator', ['dpc-linkedin-2024'], 'L’etiqueta d’inserció de LinkedIn recull activitat en llocs de tercers i la vincula al perfil professional.'),
      advertisingIdentifiers: f('yes', 'official', ['linkedin-privacy-policy']),
      thirdPartyTrackersPresent: f('yes', 'official', ['linkedin-privacy-policy']),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'regulator', ['dpc-linkedin-2024'], 'Sancionada amb 310 milions d’euros el 2024 per manca de base jurídica vàlida.', {
        optOutUrl: 'https://www.linkedin.com/psettings/advertising',
      }),
      profiling: f('yes', 'regulator', ['dpc-linkedin-2024']),
      aiTraining: f('yes', 'official', ['linkedin-manage-data'], 'LinkedIn fa servir contingut del perfil i publicacions per entrenar models d’intel·ligència artificial generativa, amb una opció per desactivar-ho que ve activada per defecte.', {
        optOutUrl: 'https://www.linkedin.com/mypreferences/d/settings/data-for-ai-improvement',
      }),
    },
    sharing: {
      thirdPartySharing: f('yes', 'regulator', ['dpc-linkedin-2024', 'linkedin-privacy-policy']),
      intraGroupSharing: f('yes', 'official', ['linkedin-privacy-policy'], 'Compartició amb Microsoft, tot i que la companyia manté que els sistemes són en bona part separats.'),
      dataBrokerSales: f('partial', 'regulator', ['dpc-linkedin-2024'], 'LinkedIn adquiria dades de tercers per enriquir els perfils publicitaris, pràctica que va formar part de la resolució sancionadora.'),
      internationalTransfers: f('yes', 'official', ['linkedin-privacy-policy'], undefined, { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('yes', 'official', ['linkedin-privacy-policy'], undefined, {
        url: 'https://about.linkedin.com/transparency',
      }),
    },
    retention: {
      definedPeriods: f('partial', 'official', ['linkedin-privacy-policy']),
      dataAfterDeletion: f('partial', 'official', ['linkedin-close-account'], 'Fins a 30 dies per esborrar-ho dels sistemes i fins a dos anys en còpies de seguretat. Els comentaris a publicacions d’altres persones poden romandre de manera anònima.'),
      periods: [
        { period: 'Fins a 30 dies per eliminar les dades dels sistemes actius', sources: ['linkedin-close-account'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['linkedin-close-account']),
      selfService: f('yes', 'official', ['linkedin-close-account']),
      directUrl: 'https://www.linkedin.com/psettings/account-management/close-submit',
      difficulty: 'easy',
      waitingPeriodDays: 0,
      requiresSupportContact: false,
      steps: [
        'Obre el menú Jo i entra a Configuració i privadesa.',
        'Ves a Preferències del compte i obre Gestió del compte.',
        'Tria «Tancar el compte», indica el motiu i confirma amb la contrasenya.',
      ],
      obstacles:
        'El procés adverteix que es perd l’accés a les recomanacions, als contactes i als missatges, i ofereix alternatives com pausar la visibilitat abans de deixar tancar el compte.',
      dataRetained:
        'Els comentaris i les recomanacions escrites a perfils d’altres persones poden quedar-hi de manera anònima. LinkedIn conserva còpies fins a dos anys.',
      sources: ['linkedin-close-account'],
    },
    userRights: {
      dataExport: f('partial', 'official', ['linkedin-download-data'], 'L’exportació existeix però la mateixa documentació reconeix que exclou dades com «Persones que potser coneixes» o «Qui ha vist el teu perfil», que són precisament les inferències més rellevants.', {
        url: 'https://www.linkedin.com/psettings/member-data',
      }),
      exportFormatQuality: 'open',
      rightsExercise: f('yes', 'official', ['linkedin-manage-data'], undefined, {
        url: 'https://www.linkedin.com/help/linkedin/ask/TSO-DPO',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['linkedin-manage-data'], undefined, {
        url: 'https://www.linkedin.com/psettings/advertising',
      }),
      telemetryOptOut: f('no', 'official', ['linkedin-privacy-policy']),
      granularControls: f('yes', 'official', ['linkedin-manage-data'], 'Els controls de visibilitat i de publicitat són detallats i estan raonablement ben agrupats.'),
      defaultPosture: 'permissive',
      darkPatterns: f('partial', 'regulator', ['dpc-linkedin-2024', 'linkedin-manage-data'], 'L’opció d’ús de dades per a intel·ligència artificial es va activar per defecte i es va comunicar a posteriori.'),
      darkPatternList: [
        {
          type: 'preselected',
          severity: 'high',
          description:
            'El paràmetre que autoritza l’ús de contingut per entrenar models generatius es va activar de manera predeterminada per als perfils existents.',
          sources: ['linkedin-manage-data'],
        },
      ],
    },
    security: {
      e2ee: f('no', 'official', ['linkedin-privacy-policy'], 'Els missatges de LinkedIn no tenen xifratge d’extrem a extrem.', { scope: 'none' }),
      transportEncryption: f('yes', 'official', ['linkedin-privacy-policy']),
      atRestEncryption: f('yes', 'official', ['linkedin-privacy-policy']),
      mfa: f('yes', 'official', ['linkedin-privacy-policy'], undefined, { methods: ['totp', 'sms'] }),
      independentAudits: f('yes', 'official', ['linkedin-privacy-policy'], 'Cobert per les certificacions ISO 27001 i els informes SOC de Microsoft.', {
        url: 'https://about.linkedin.com/transparency',
      }),
      bugBounty: f('yes', 'official', ['linkedin-privacy-policy'], undefined, { url: 'https://www.linkedin.com/help/linkedin/answer/a1339812' }),
      vulnerabilityDisclosure: f('yes', 'official', ['linkedin-privacy-policy']),
    },
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'L’exportació incompleta és un cas de manual per a la nostra metodologia: existeix el mecanisme, però no cobreix el més important. Per això l’indicador es marca com a parcial i no com a complet.',
    },
  },

  /* ═══════════════════════════ Snapchat ═══════════════════════════ */
  {
    slug: 'snapchat',
    name: 'Snapchat',
    company: 'snap',
    categories: ['missatgeria', 'xarxes-socials'],
    tagline: 'Missatgeria efímera amb ubicació compartida i publicitat',
    summary:
      'Snapchat es va construir sobre la promesa que els missatges desapareixen, i és una promesa parcialment certa: els Snaps s’esborren dels servidors quan es visualitzen. El que no desapareix són les metadades, els Memories desats, la ubicació compartida al Snap Map i el perfil publicitari. La distinció entre «efímer» i «privat» és el que aquesta fitxa ha de deixar clar.',
    platforms: ['ios', 'android', 'web'],
    businessModel: 'advertising',
    jurisdiction: 'Països Baixos, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Més de 850 milions de persones usuàries actives mensuals',
    links: {
      website: 'https://www.snapchat.com/',
      privacyPolicy: 'https://values.snap.com/privacy/privacy-policy',
      terms: 'https://snap.com/en-US/terms',
      privacyCenter: 'https://values.snap.com/privacy/privacy-by-product',
    },
    accountRequired: f('yes', 'official', ['snap-privacy-policy']),
    openSource: f('no', 'official', ['snap-privacy-policy'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'Els Snaps s’eliminen dels servidors després de ser vistos, però Snap conserva metadades de comunicació, contingut desat a Memories i, si s’activa el Snap Map, la ubicació precisa compartida amb la llista d’amistats.',
    dataCollection: [
      row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['snap-privacy-policy'] }),
      row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['snap-privacy-policy'] }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['snap-privacy-policy'] }),
      row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['snap-your-account'], note: 'Els Snaps s’esborren dels servidors quan es visualitzen; els Memories es conserven indefinidament.' }),
      row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['snap-your-account'], note: 'Els xats es conserven fins que es visualitzen o fins a 31 dies en els grups.' }),
      row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['snap-privacy-policy'], note: 'Snap conserva registres de qui parla amb qui encara que el contingut hagi desaparegut.' }),
      row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['snap-privacy-policy'], note: 'El Snap Map comparteix la ubicació en temps real amb les amistats si s’activa.' }),
      row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['snap-privacy-policy'] }),
      row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['snap-privacy-policy'], note: 'Els filtres de realitat augmentada processen el rostre; Snap declara que no en crea plantilles identificatives.' }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['snap-privacy-policy'] }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['snap-privacy-policy'] }),
      row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['snap-privacy-policy'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['snap-privacy-policy'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['snap-privacy-policy'] }),
      row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['snap-privacy-policy'], note: 'El píxel de Snap recull activitat en llocs de tercers.' }),
    ],
    tracking: {
      crossAppTracking: f('yes', 'official', ['snap-privacy-policy']),
      advertisingIdentifiers: f('yes', 'official', ['snap-privacy-policy']),
      thirdPartyTrackersPresent: f('yes', 'official', ['snap-privacy-policy']),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['snap-privacy-policy'], undefined, {
        optOutUrl: 'https://accounts.snapchat.com/accounts/welcome',
      }),
      profiling: f('yes', 'official', ['snap-privacy-policy']),
      aiTraining: f('yes', 'regulator', ['ico-snap-myai-2024', 'snap-privacy-policy'], 'Les converses amb l’assistent My AI es conserven i es fan servir per millorar el servei. L’ICO va requerir Snap perquè avalués els riscos abans de continuar.', {
        optOutUrl: 'https://help.snapchat.com/hc/en-us/articles/13964696211092',
      }),
    },
    sharing: {
      thirdPartySharing: f('yes', 'official', ['snap-privacy-policy']),
      intraGroupSharing: f('yes', 'official', ['snap-privacy-policy']),
      dataBrokerSales: f('partial', 'official', ['snap-privacy-policy'], 'Snap rep dades de socis de mesura i d’anunciants per associar les compres a la publicitat mostrada.'),
      internationalTransfers: f('yes', 'official', ['snap-privacy-policy'], undefined, { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'high',
      transparencyReport: f('yes', 'official', ['snap-transparency'], 'Snap publica una documentació de privadesa per producte que és de les més clares del directori.', {
        url: 'https://values.snap.com/privacy/transparency',
      }),
    },
    retention: {
      definedPeriods: f('yes', 'official', ['snap-your-account'], 'Snap publica terminis concrets per tipus de contingut, cosa que és excepcional en aquest sector.'),
      dataAfterDeletion: f('partial', 'official', ['snap-delete-account'], 'Després dels 30 dies de desactivació s’elimina el compte; es conserven registres per a obligacions legals.'),
      periods: [
        { dataType: 'fotografies-i-videos', period: 'Els Snaps s’esborren dels servidors un cop vistos; els no oberts, als 30 dies', sources: ['snap-your-account'] },
        { dataType: 'contingut-de-missatges', period: 'Els xats de grup no oberts s’esborren als 31 dies', sources: ['snap-your-account'] },
        { dataType: 'ubicacio-precisa', period: 'La ubicació del Snap Map s’esborra al cap de poques hores', sources: ['snap-privacy-policy'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['snap-delete-account']),
      selfService: f('yes', 'official', ['snap-delete-account']),
      directUrl: 'https://accounts.snapchat.com/accounts/delete_account',
      difficulty: 'easy',
      waitingPeriodDays: 30,
      requiresSupportContact: false,
      steps: [
        'Entra a accounts.snapchat.com amb el nom d’usuari i la contrasenya.',
        'Tria «Eliminar el meu compte».',
        'Torna a introduir les credencials i confirma.',
        'No iniciïs sessió durant 30 dies.',
      ],
      obstacles:
        'El compte queda desactivat 30 dies i qualsevol inici de sessió el reactiva. Cal descarregar les dades abans de començar.',
      dataRetained:
        'Els Snaps i els missatges que altres persones han desat es conserven als seus dispositius. Snap manté registres per a obligacions legals.',
      sources: ['snap-delete-account', 'snap-your-account'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['snap-your-account'], undefined, {
        url: 'https://accounts.snapchat.com/accounts/downloadmydata',
      }),
      exportFormatQuality: 'mixed',
      rightsExercise: f('yes', 'official', ['snap-privacy-policy'], undefined, {
        url: 'https://support.snapchat.com/en-GB/i-need-help',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['snap-privacy-policy'], undefined, {
        url: 'https://accounts.snapchat.com/accounts/welcome',
      }),
      telemetryOptOut: f('no', 'official', ['snap-privacy-policy']),
      granularControls: f('yes', 'official', ['snap-your-account'], 'Els controls per producte de Snap són detallats i el mode fantasma del Snap Map és accessible.'),
      defaultPosture: 'mixed',
      darkPatterns: f('partial', 'regulator', ['ico-snap-myai-2024'], 'L’assistent My AI es va afegir al llistat de xats sense possibilitat de treure’l per als comptes gratuïts.'),
      darkPatternList: [
        {
          type: 'nagging',
          severity: 'medium',
          description:
            'L’assistent My AI apareix fixat a la part superior de la llista de converses i només es pot eliminar amb subscripció de pagament.',
          sources: ['ico-snap-myai-2024'],
        },
      ],
    },
    security: {
      e2ee: f('partial', 'official', ['snap-privacy-policy'], 'Els Snaps d’imatge i vídeo entre persones usuàries van xifrats d’extrem a extrem; els missatges de text del xat, les històries i les converses amb My AI, no.', {
        scope: 'partial-default',
      }),
      transportEncryption: f('yes', 'official', ['snap-privacy-policy']),
      atRestEncryption: f('yes', 'official', ['snap-privacy-policy']),
      mfa: f('yes', 'official', ['snap-privacy-policy'], undefined, { methods: ['totp', 'sms'] }),
      independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
      bugBounty: f('yes', 'official', ['snap-transparency'], undefined, { url: 'https://hackerone.com/snapchat' }),
      vulnerabilityDisclosure: f('yes', 'official', ['snap-transparency']),
    },
    alternatives: [
      {
        app: 'signal',
        comparability: 'partial',
        rationale:
          'Cobreix la missatgeria privada amb missatges temporals configurables i xifratge complet, però no els filtres de realitat augmentada, les històries ni el component de xarxa social.',
        tradeOffs: 'Qui fa servir Snapchat per la part lúdica i visual no hi trobarà substitut.',
      },
    ],
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'Snap mereix reconeixement per la seva documentació de privadesa per producte, que és molt més clara i concreta que la de la majoria de plataformes. Això puja la claredat de la política i la confiança de l’anàlisi sense millorar-ne la puntuació de privadesa, que depèn de les pràctiques.',
    },
  },

  /* ═══════════════════════════ Reddit ═══════════════════════════ */
  {
    slug: 'reddit',
    name: 'Reddit',
    company: 'reddit',
    categories: ['comunitats-i-forums'],
    tagline: 'Comunitats temàtiques amb identitat pseudònima',
    summary:
      'Reddit és l’única plataforma social gran del directori que no exigeix nom real ni número de telèfon i que permet participar amb un pseudònim. Aquest disseny redueix molt el risc, però té una contrapartida important: el que es publica no s’esborra en tancar el compte, només es desvincula del nom d’usuari.',
    platforms: ['web', 'ios', 'android'],
    businessModel: 'freemium',
    jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Més de 100 milions de persones usuàries actives diàries',
    links: {
      website: 'https://www.reddit.com/',
      privacyPolicy: 'https://www.reddit.com/policies/privacy-policy',
      terms: 'https://redditinc.com/policies/user-agreement',
      privacyCenter: 'https://www.reddit.com/settings/privacy',
    },
    accountRequired: f('no', 'official', ['reddit-privacy-policy'], 'Bona part del contingut es pot llegir sense compte. Publicar i votar el requereix, però només cal un nom d’usuari i una contrasenya: ni adreça electrònica verificada ni telèfon.'),
    openSource: f('partial', 'official', ['reddit-privacy-policy'], 'Reddit va ser de codi obert fins al 2017 i encara manté part de les seves eines públiques, però la plataforma actual és privativa.', {
      repositoryUrl: 'https://github.com/reddit',
      licence: 'Privativa (històricament CPAL)',
    }),
    dataSummary:
      'Reddit recull sobretot activitat: què es publica, què es vota, a quines comunitats se subscriu. La subscripció a determinades comunitats pot revelar informació especialment sensible sobre salut, orientació sexual o conviccions, encara que el compte sigui pseudònim.',
    dataCollection: [
      row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['reddit-privacy-policy'], note: 'És un pseudònim triat lliurement, no una identitat verificada.' }),
      row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['reddit-privacy-policy'], note: 'És opcional, cosa poc habitual entre plataformes d’aquesta mida.' }),
      row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['reddit-privacy-policy'], note: 'Reddit llicencia el contingut públic a empreses d’intel·ligència artificial.' }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['reddit-privacy-policy'] }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['reddit-privacy-policy'], note: 'Les comunitats subscrites són el senyal d’interès principal.' }),
      row('conviccions-i-opinions', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['reddit-privacy-policy'], note: 'No es demanen, però les comunitats subscrites en són un indicador directe.' }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['reddit-privacy-policy'], note: 'És el punt feble del pseudonimat: Reddit sap des d’on es connecta cada compte.' }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['reddit-privacy-policy'] }),
      row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['reddit-privacy-policy'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['reddit-privacy-policy'] }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['reddit-privacy-policy'] }),
      row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['reddit-privacy-policy'] }),
      row('ubicacio-precisa', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['reddit-privacy-policy'] }),
      row('llista-de-contactes', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['reddit-privacy-policy'] }),
      row('numero-de-telefon', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['reddit-privacy-policy'] }),
    ],
    tracking: {
      crossAppTracking: f('yes', 'official', ['reddit-privacy-policy'], 'El píxel de Reddit recull activitat en llocs d’anunciants.'),
      advertisingIdentifiers: f('yes', 'official', ['reddit-privacy-policy']),
      thirdPartyTrackersPresent: f('yes', 'official', ['reddit-privacy-policy']),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['reddit-privacy-policy'], 'Es pot desactivar la personalització basada en activitat i en dades de socis.', {
        optOutUrl: 'https://www.reddit.com/settings/privacy',
      }),
      profiling: f('partial', 'official', ['reddit-privacy-policy'], 'El perfilat és real però parteix d’una identitat pseudònima, cosa que en limita l’abast fora de la plataforma.'),
      aiTraining: f('yes', 'official', ['reddit-privacy-policy'], 'Reddit ha signat acords de llicència de contingut públic amb empreses d’intel·ligència artificial. No hi ha mecanisme d’oposició per a les persones usuàries.'),
    },
    sharing: {
      thirdPartySharing: f('yes', 'official', ['reddit-privacy-policy']),
      intraGroupSharing: na('Reddit no forma part de cap grup amb altres serveis de consum.'),
      dataBrokerSales: f('yes', 'official', ['reddit-privacy-policy'], 'La llicència massiva de contingut a tercers per a entrenament de models és una forma de comercialització de dades generades per les persones usuàries.'),
      internationalTransfers: f('yes', 'official', ['reddit-privacy-policy'], undefined, { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'high',
      transparencyReport: f('yes', 'official', ['reddit-privacy-policy'], undefined, {
        url: 'https://redditinc.com/policies/transparency',
      }),
    },
    retention: {
      definedPeriods: f('partial', 'official', ['reddit-delete-data']),
      dataAfterDeletion: f('no', 'official', ['reddit-delete-account'], 'Les publicacions i els comentaris no s’eliminen: es desvinculen del nom d’usuari i queden visibles com a contingut d’un compte suprimit.'),
      periods: [
        { period: 'L’eliminació del compte comença dins dels 90 dies posteriors a la sol·licitud', sources: ['reddit-delete-account'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['reddit-delete-account']),
      selfService: f('yes', 'official', ['reddit-delete-account']),
      directUrl: 'https://www.reddit.com/settings/account',
      difficulty: 'medium',
      waitingPeriodDays: 0,
      requiresSupportContact: false,
      steps: [
        'Entra a la configuració del compte des del web.',
        'Baixa fins al final i tria «Elimina el compte».',
        'Escriu el nom d’usuari i la contrasenya per confirmar.',
        'Si vols que desapareguin les publicacions, esborra-les abans una per una.',
      ],
      obstacles:
        'L’obstacle real no és el procés, que és senzill, sinó el resultat: el contingut publicat es queda. Qui vulgui eliminar-lo ha de fer-ho manualment abans de tancar el compte, i un cop tancat ja no hi ha manera de recuperar-ne el control.',
      dataRetained:
        'Totes les publicacions i comentaris resten visibles de manera anònima. Reddit conserva l’adreça electrònica associada per evitar la reutilització del nom d’usuari.',
      sources: ['reddit-delete-account', 'reddit-delete-data'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['reddit-delete-data'], undefined, {
        url: 'https://www.reddit.com/settings/data-request',
      }),
      exportFormatQuality: 'open',
      rightsExercise: f('yes', 'official', ['reddit-delete-data'], undefined, {
        url: 'https://www.reddit.com/settings/data-request',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['reddit-privacy-policy'], undefined, {
        url: 'https://www.reddit.com/settings/privacy',
      }),
      telemetryOptOut: f('partial', 'official', ['reddit-privacy-policy']),
      granularControls: f('partial', 'official', ['reddit-privacy-policy']),
      defaultPosture: 'mixed',
      darkPatterns: f('partial', 'editorial', ['reddit-delete-account'], 'El procés d’eliminació no adverteix amb prou claredat, abans de confirmar, que el contingut publicat es conservarà.'),
      darkPatternList: [
        {
          type: 'confusing-language',
          severity: 'medium',
          description:
            'L’opció s’anomena «eliminar el compte», però no elimina el contingut associat, cosa que només s’explica a la documentació d’ajuda.',
          sources: ['reddit-delete-account'],
        },
      ],
    },
    security: {
      e2ee: f('no', 'official', ['reddit-privacy-policy'], 'Els xats i els missatges privats no estan xifrats d’extrem a extrem.', { scope: 'none' }),
      transportEncryption: f('yes', 'official', ['reddit-privacy-policy']),
      atRestEncryption: f('yes', 'official', ['reddit-privacy-policy']),
      mfa: f('yes', 'official', ['reddit-privacy-policy'], undefined, { methods: ['totp'] }),
      independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
      bugBounty: f('yes', 'official', ['techcrunch-reddit-2023'], undefined, { url: 'https://hackerone.com/reddit' }),
      vulnerabilityDisclosure: f('yes', 'official', ['techcrunch-reddit-2023'], 'Reddit va publicar un informe detallat de la intrusió de 2023 el mateix dia que la va detectar internament.'),
    },
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'Reddit obté una puntuació de privadesa relativament alta pel pseudonimat i la mínima recollida d’identificadors, però una de control més baixa per la impossibilitat d’eliminar el contingut. És el tipus de matís que una xifra global sola amagaria.',
    },
  },

  /* ═══════════════════════════ Pinterest ═══════════════════════════ */
  {
    slug: 'pinterest',
    name: 'Pinterest',
    company: 'pinterest',
    categories: ['descobriment-visual'],
    tagline: 'Descobriment visual i inferència d’intenció de compra',
    summary:
      'Pinterest sembla inofensiu perquè el que s’hi desa són imatges, però un tauler d’inspiració és una declaració d’intencions extraordinàriament precisa: reformes, embarassos, casaments, dietes, mudances. Aquesta anticipació és el que el fa valuós per als anunciants.',
    platforms: ['web', 'ios', 'android'],
    businessModel: 'advertising',
    jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Més de 550 milions de persones usuàries mensuals',
    links: {
      website: 'https://www.pinterest.com/',
      privacyPolicy: 'https://policy.pinterest.com/en/privacy-policy',
      terms: 'https://policy.pinterest.com/en/terms-of-service',
      privacyCenter: 'https://www.pinterest.com/settings/privacy',
    },
    accountRequired: f('partial', 'official', ['pinterest-privacy-policy'], 'Es pot veure contingut públic amb limitacions creixents, però desar res requereix compte.'),
    openSource: f('no', 'official', ['pinterest-privacy-policy'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'Pinterest recull el que es desa, el que es cerca i el que es mira, i ho combina amb activitat en llocs de tercers a través del seu píxel per construir un perfil comercial molt orientat a la conversió.',
    dataCollection: [
      row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['pinterest-privacy-policy'] }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['pinterest-privacy-policy'] }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['pinterest-privacy-policy'], note: 'Les imatges desades permeten inferir esdeveniments vitals amb mesos d’antelació.' }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['pinterest-privacy-policy'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['pinterest-privacy-policy'] }),
      row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['pinterest-privacy-policy'] }),
      row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['pinterest-privacy-policy'], note: 'L’etiqueta de Pinterest és present en molts comerços electrònics.' }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['pinterest-privacy-policy'] }),
      row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['pinterest-privacy-policy'] }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['pinterest-privacy-policy'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['pinterest-privacy-policy'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['pinterest-privacy-policy'] }),
      row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'yes', shared: 'none', purposes: ['recomanacions-algoritmiques'], sources: ['pinterest-privacy-policy'] }),
      row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria'], sources: ['pinterest-privacy-policy'], note: 'Rebut de comerços associats per mesurar l’efectivitat dels anuncis.' }),
    ],
    tracking: {
      crossAppTracking: f('yes', 'official', ['pinterest-privacy-policy']),
      advertisingIdentifiers: f('yes', 'official', ['pinterest-privacy-policy']),
      thirdPartyTrackersPresent: f('yes', 'official', ['pinterest-privacy-policy']),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['pinterest-privacy-settings'], undefined, {
        optOutUrl: 'https://www.pinterest.com/settings/privacy',
      }),
      profiling: f('yes', 'official', ['pinterest-privacy-policy']),
      aiTraining: f('partial', 'official', ['pinterest-privacy-policy'], 'La política preveu l’ús de contingut per desenvolupar tecnologia, amb un control per desactivar-ho a la configuració.', {
        optOutUrl: 'https://www.pinterest.com/settings/privacy',
      }),
    },
    sharing: {
      thirdPartySharing: f('yes', 'official', ['pinterest-privacy-policy']),
      intraGroupSharing: na('Pinterest no forma part de cap grup amb altres serveis de consum.'),
      dataBrokerSales: f('partial', 'official', ['pinterest-privacy-policy'], 'Pinterest rep dades d’anunciants i de socis de mesura per enriquir els perfils.'),
      internationalTransfers: f('yes', 'official', ['pinterest-privacy-policy'], undefined, { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('yes', 'official', ['pinterest-privacy-policy'], undefined, {
        url: 'https://policy.pinterest.com/en/transparency-report',
      }),
    },
    retention: {
      definedPeriods: f('partial', 'official', ['pinterest-personal-data']),
      dataAfterDeletion: f('yes', 'official', ['pinterest-delete-account'], 'Pinterest declara que el compte i les dades personals s’eliminen definitivament en set dies, un termini molt més curt que el de la majoria de plataformes.'),
      periods: [
        { period: '7 dies fins a l’eliminació definitiva del compte i les dades personals', sources: ['pinterest-delete-account'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['pinterest-delete-account']),
      selfService: f('yes', 'official', ['pinterest-delete-account']),
      directUrl: 'https://www.pinterest.com/settings/account-settings',
      difficulty: 'easy',
      waitingPeriodDays: 7,
      requiresSupportContact: false,
      steps: [
        'Obre la configuració del compte.',
        'Baixa fins a «Eliminació del compte» i tria «Elimina el compte».',
        'Confirma per correu electrònic el missatge que rebràs.',
      ],
      obstacles:
        'Es proposa primer la desactivació temporal, però l’eliminació és accessible i el termini és curt i explícit.',
      dataRetained:
        'Es conserven registres per a obligacions legals. Els pins que altres persones han desat als seus taulers continuen existint.',
      sources: ['pinterest-delete-account', 'pinterest-personal-data'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['pinterest-personal-data'], undefined, {
        url: 'https://www.pinterest.com/settings/privacy',
      }),
      exportFormatQuality: 'mixed',
      rightsExercise: f('yes', 'official', ['pinterest-personal-data'], undefined, {
        url: 'https://help.pinterest.com/en/article/review-personal-data-options',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['pinterest-privacy-settings'], undefined, {
        url: 'https://www.pinterest.com/settings/privacy',
      }),
      telemetryOptOut: f('no', 'official', ['pinterest-privacy-policy']),
      granularControls: f('yes', 'official', ['pinterest-privacy-settings'], 'Es pot desactivar la personalització a partir de l’activitat en llocs externs, de socis i de la informació del compte per separat.'),
      defaultPosture: 'permissive',
      darkPatterns: f('partial', 'editorial', ['pinterest-delete-account'], 'Es proposa la desactivació abans de l’eliminació, però sense enfosquir la segona opció.'),
    },
    security: {
      e2ee: na('Pinterest no és un servei de comunicació privada; els missatges directes són una funció secundària.'),
      transportEncryption: f('yes', 'official', ['pinterest-privacy-policy']),
      atRestEncryption: f('yes', 'official', ['pinterest-privacy-policy']),
      mfa: f('yes', 'official', ['pinterest-privacy-policy'], undefined, { methods: ['totp', 'sms'] }),
      independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
      bugBounty: f('yes', 'official', ['pinterest-privacy-policy'], undefined, { url: 'https://hackerone.com/pinterest' }),
      vulnerabilityDisclosure: f('yes', 'official', ['pinterest-privacy-policy']),
    },
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'Cap incident regulador registrat, però això no vol dir absència de problemes: vol dir que no n’hi ha de documentats. La casella de revisió d’incidents està marcada, de manera que l’indicador puntua com a favorable amb aquesta base.',
    },
  },
]
