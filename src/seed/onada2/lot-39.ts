import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/**
 * Lot 39 de la segona onada: sis aplicacions de Microsoft del top gratuït de
 * l’App Store espanyol. Totes comparteixen la mateixa declaració de privadesa
 * i el mateix compte, però el tractament canvia radicalment segons si s’hi
 * entra amb un compte personal o amb un compte d’empresa o de centre educatiu:
 * amb el segon, Microsoft actua com a encarregat i qui mana és l’organització.
 */
export const lot: SeedLot = {
  companies: [],
  sources: [
    s('microsoft-privacy-statement', 'Microsoft Privacy Statement', 'https://www.microsoft.com/en-us/privacy/privacystatement', 'Microsoft', 'privacy-policy', 'primary', {
      summary:
        'Declaració de privadesa única per a tots els productes de consum de Microsoft: categories de dades, publicitat, entrenament de models d’IA, cessions, transferències i drets. Identifica Microsoft Ireland Operations Limited com a responsable per a l’Espai Econòmic Europeu.',
    }),
    s('microsoft-close-account', 'How to close your Microsoft account', 'https://support.microsoft.com/account-billing/how-to-close-your-microsoft-account-c1b2d13f-4de6-6e1b-4a31-d9d668849979', 'Microsoft', 'support-doc', 'primary', {
      excerpt: 'Select whether you want a 30 or 60 day reopen window, and then select a reason from the dropdown menu.',
      summary: 'Procediment autoservei de tancament del compte de Microsoft, amb finestra de reobertura de 30 o 60 dies a elecció de la persona.',
    }),
    s('microsoft-privacy-dashboard', 'Microsoft privacy dashboard', 'https://account.microsoft.com/privacy/', 'Microsoft', 'privacy-center', 'primary', {
      summary: 'Panell on es pot consultar, descarregar i esborrar l’historial de navegació, de cerca, d’ubicació i d’activitat de Copilot associat al compte.',
    }),
    s('microsoft-ad-settings', 'Microsoft — Personalized ad settings', 'https://account.microsoft.com/privacy/ad-settings', 'Microsoft', 'privacy-center', 'primary', {
      summary: 'Control per desactivar la publicitat personalitzada de Microsoft i la compartició de dades amb tercers amb finalitat publicitària.',
    }),
    s('microsoft-msrc-bounty', 'Microsoft Bug Bounty Program', 'https://www.microsoft.com/en-us/msrc/bounty', 'Microsoft Security Response Center', 'technical-doc', 'primary', {
      excerpt: 'Up to $250,000 USD in bug bounty awards.',
      summary: 'Programa de recompenses de Microsoft, amb premis de fins a 250.000 dòlars i regles d’enquadrament per a la recerca de vulnerabilitats.',
    }),
    s('microsoft-msrc-cvd', 'Microsoft Coordinated Vulnerability Disclosure', 'https://www.microsoft.com/en-us/msrc/cvd', 'Microsoft Security Response Center', 'technical-doc', 'primary', {
      summary: 'Política de divulgació coordinada de vulnerabilitats i canal privat de notificació del MSRC.',
    }),
    s('microsoft-law-enforcement-report', 'Microsoft Law Enforcement Requests Report', 'https://www.microsoft.com/en-us/corporate-responsibility/law-enforcement-requests-report', 'Microsoft', 'transparency-report', 'primary', {
      summary: 'Informe semestral de peticions d’autoritats, amb el desglossament entre divulgació de contingut i de dades no de contingut, i les peticions rebutjades.',
    }),
    s('microsoft-eu-data-boundary', 'What is the EU Data Boundary?', 'https://learn.microsoft.com/en-us/privacy/eudb/eu-data-boundary-learn', 'Microsoft', 'technical-doc', 'primary', {
      summary:
        'Compromís de Microsoft d’emmagatzemar i tractar les dades de client i les dades personals pseudonimitzades dels serveis empresarials dins de la UE i l’AELC, amb les excepcions documentades.',
    }),
    s('microsoft-trust-center-data-management', 'Microsoft Trust Center — Data management', 'https://www.microsoft.com/en-us/trust-center/privacy/data-management', 'Microsoft', 'privacy-center', 'primary', {
      excerpt: 'We do not share your data with advertiser-supported services, nor do we mine it for marketing or advertising.',
      summary:
        'Compromisos de Microsoft sobre les dades de client dels serveis empresarials: propietat, no explotació publicitària, supressió en 90 dies més 90 després de la baixa i esborrat de suports segons la norma NIST 800-88.',
    }),
    s('microsoft-iso-27001', 'ISO/IEC 27001:2022 Information Security Management Standards', 'https://learn.microsoft.com/en-us/compliance/regulatory/offering-iso-27001', 'Microsoft', 'audit', 'primary', {
      summary: 'Certificació ISO/IEC 27001 dels serveis al núvol de Microsoft, auditada per un tercer acreditat, amb els certificats publicats al Service Trust Portal.',
    }),
    s('microsoft-365-privacy-controls', 'Overview of privacy controls for Microsoft 365 Apps for enterprise', 'https://learn.microsoft.com/en-us/microsoft-365-apps/privacy/overview-privacy-controls', 'Microsoft', 'technical-doc', 'primary', {
      excerpt: 'Even if you choose Neither, required service data will be sent from the user’s device to Microsoft.',
      summary:
        'Nivells de dades de diagnòstic (obligatòries, opcionals o cap) i experiències connectades de les aplicacions d’Office, amb la precisió que les dades de servei necessàries s’envien igualment.',
    }),
    s('microsoft-edge-privacy-whitepaper', 'Microsoft Edge Privacy Whitepaper', 'https://learn.microsoft.com/en-us/legal/microsoft-edge/privacy', 'Microsoft', 'technical-doc', 'primary', {
      excerpt: 'Optional diagnostic data is stored on Microsoft servers for up to 2 years.',
      summary:
        'Document tècnic que detalla què recull Edge: diagnòstic obligatori i opcional, suggeriments de la barra d’adreces, sincronització, prevenció de seguiment, SmartScreen i personalització publicitària, amb els controls corresponents.',
    }),
    s('microsoft-teams-data-location', 'Location of data in Microsoft Teams', 'https://learn.microsoft.com/en-us/microsoftteams/location-of-data-in-teams', 'Microsoft', 'technical-doc', 'primary', {
      summary: 'Regió geogràfica on resideixen les dades de Teams segons el país de l’organització, i on consultar-la al centre d’administració.',
    }),
    s('microsoft-copilot-privacy', 'Microsoft Copilot Chat Privacy and Protections', 'https://learn.microsoft.com/en-us/copilot/privacy-and-protections', 'Microsoft', 'technical-doc', 'primary', {
      excerpt: 'Copilot Chat does not use your data to train foundation models.',
      summary:
        'Protecció de dades empresarials de Copilot: les indicacions i les respostes no entrenen els models de base, es registren per a auditoria, i les consultes generades cap a Bing queden fora del perímetre de dades de la UE.',
    }),
    s('microsoft-authenticator-method', 'Microsoft Authenticator authentication method', 'https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-authenticator-app', 'Microsoft', 'technical-doc', 'primary', {
      excerpt: 'Passkeys in the Authenticator app are device-bound to ensure that they never leave the device they were created on.',
      summary:
        'Funcionament de Microsoft Authenticator: claus d’accés lligades al dispositiu i desades al Secure Enclave, notificacions amb coincidència de número, codis OATH i inici de sessió sense contrasenya.',
    }),
    s('microsoft-storm-0558', 'Analysis of Storm-0558 techniques for unauthorized email access', 'https://www.microsoft.com/en-us/security/blog/2023/07/14/analysis-of-storm-0558-techniques-for-unauthorized-email-access/', 'Microsoft Threat Intelligence', 'technical-doc', 'primary', {
      summary:
        'Anàlisi oficial de l’accés no autoritzat al correu de vora 25 organitzacions mitjançant testimonis falsificats amb una clau de signatura de comptes de Microsoft.',
    }),
    s('microsoft-teams-app-store', 'Microsoft Teams — App Store', 'https://apps.apple.com/es/app/id1113153706', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de Teams: cap dada declarada per a seguiment, però ubicació exacta, contactes i contingut vinculats a la identitat.',
    }),
    s('microsoft-authenticator-app-store', 'Microsoft Authenticator — App Store', 'https://apps.apple.com/es/app/id983156458', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de Microsoft Authenticator: cap dada per a seguiment, i ubicació exacta vinculada a la identitat.',
    }),
    s('outlook-app-store', 'Microsoft Outlook — App Store', 'https://apps.apple.com/es/app/id951937596', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa d’Outlook: dades d’ús declarades per a seguiment entre aplicacions i llocs de tercers, publicitat de tercers, i contingut dels correus emprat per a analítica i personalització.',
    }),
    s('microsoft-copilot-app-store', 'Microsoft Copilot — App Store', 'https://apps.apple.com/es/app/id541164041', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de Microsoft Copilot: identificadors declarats per a seguiment i publicitat de tercers amb la interacció amb el producte.',
    }),
    s('microsoft-word-app-store', 'Microsoft Word — App Store', 'https://apps.apple.com/es/app/id586447913', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de Word: cap dada per a seguiment; ubicació aproximada, contactes, contingut i identificadors vinculats a la identitat.',
    }),
    s('microsoft-edge-app-store', 'Microsoft Edge — App Store', 'https://apps.apple.com/es/app/id1288723196', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa d’Edge: contingut de la persona usuària declarat per a seguiment, i historial de navegació vinculat a la identitat.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ Microsoft Teams ═══════════════════════════ */
    {
      slug: 'microsoft-teams',
      name: 'Microsoft Teams',
      company: 'microsoft',
      categories: ['videoconferencia-i-feina', 'missatgeria'],
      tagline: 'Cap dada per a seguiment, però qui controla la conversa és l’organització, no tu',
      summary:
        'Teams no declara cap dada per a rastrejar-te entre aplicacions de tercers i les dades de client dels plans empresarials queden fora de qualsevol explotació publicitària. El preu és un altre: quan hi entres amb el compte de la feina o del centre educatiu, Microsoft actua com a encarregat i és l’organització qui decideix què es conserva, qui hi accedeix i quan es revisa. Els xats, les reunions i els fitxers queden retinguts i auditables segons les polítiques que fixa l’administrador, no tu.',
      platforms: ['ios', 'android', 'web', 'windows', 'macos', 'linux'],
      businessModel: 'freemium',
      jurisdiction: 'Irlanda',
      userBase: 'Més de 300 milions de persones usuàries actives mensuals declarades per Microsoft',
      links: {
        website: 'https://www.microsoft.com/microsoft-teams/',
        privacyPolicy: 'https://www.microsoft.com/en-us/privacy/privacystatement',
        privacyCenter: 'https://account.microsoft.com/privacy/',
        appStore: 'https://apps.apple.com/es/app/id1113153706',
      },
      accountRequired: f('yes', 'official', ['microsoft-privacy-statement'], 'Cal un compte de Microsoft personal o un compte d’empresa o de centre educatiu de Microsoft Entra ID.'),
      openSource: f('no', 'official', ['microsoft-privacy-statement'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'L’etiqueta de l’App Store declara ubicació exacta, contactes, fotografies, àudio i altres continguts vinculats a la identitat. En conjunt dibuixen amb qui parles, quan i des d’on: la graella de reunions d’una persona és un mapa complet de la seva jornada i de la seva xarxa professional. En els comptes corporatius, tot això és accessible per a l’organització a través de les eines de retenció i de descoberta electrònica.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-teams-app-store', 'microsoft-privacy-statement'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-teams-app-store'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['microsoft-teams-app-store'] }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-teams-app-store'], note: 'L’aplicació demana accés a l’agenda del telèfon per trobar-hi contactes; no és imprescindible per fer servir el servei.' }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['microsoft-teams-app-store', 'microsoft-trust-center-data-management'], note: 'Als plans empresarials són dades de client: l’organització en fixa la retenció i hi pot accedir amb eines de descoberta electrònica.' }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-teams-app-store'], note: 'Àudio de les trucades i de les reunions, i enregistraments i transcripcions quan s’activen.' }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-teams-app-store'] }),
        row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-teams-app-store'], note: 'Els fitxers d’un equip es desen a SharePoint i a OneDrive de l’organització.' }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-teams-app-store'], note: 'L’etiqueta la declara com a funcionalitat de l’aplicació; s’associa a funcions com compartir la ubicació o les trucades d’emergència.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['microsoft-teams-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-teams-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['microsoft-teams-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['microsoft-teams-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte', 'seguretat-i-prevencio-del-frau'], sources: ['microsoft-teams-app-store', 'microsoft-365-privacy-controls'], note: 'El nivell obligatori no es pot desactivar; l’opcional depèn de la configuració de la persona o de l’administrador.' }),
        row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['microsoft-privacy-statement'], note: 'Durada, participants i hora de les trucades i reunions.' }),
        row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['microsoft-teams-app-store'], note: 'L’etiqueta no declara cap dada utilitzada per rastrejar-te.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['microsoft-teams-app-store'], 'L’etiqueta de l’App Store no declara cap categoria de dades utilitzada per rastrejar-te en aplicacions i llocs web d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['microsoft-teams-app-store'], 'No es declaren dades de publicitat ni identificadors publicitaris.'),
        thirdPartyTrackersPresent: unknown('Microsoft no publica la llista de components de tercers integrats a l’aplicació mòbil de Teams.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['microsoft-trust-center-data-management', 'microsoft-teams-app-store'], 'Microsoft es compromet a no explotar les dades de client dels serveis empresarials per a màrqueting ni publicitat, i l’etiqueta no declara dades publicitàries.'),
        profiling: f('partial', 'official', ['microsoft-privacy-statement', 'microsoft-365-privacy-controls'], 'No hi ha perfilat publicitari, però les dades de diagnòstic opcionals es poden fer servir agregades per entrenar funcions com les accions recomanades o les prediccions de text.'),
        aiTraining: f('partial', 'official', ['microsoft-copilot-privacy', 'microsoft-privacy-statement'], 'Les indicacions i respostes de Copilot dins de Teams no entrenen els models de base als plans amb protecció de dades empresarials; la declaració general de Microsoft sí que preveu l’ús de dades personals per desenvolupar i entrenar models d’IA en els serveis de consum.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['microsoft-privacy-statement'], 'Proveïdors i agents que treballen per compte de Microsoft, i tercers quan ho exigeix la llei.'),
        intraGroupSharing: f('yes', 'official', ['microsoft-privacy-statement'], 'Compartició amb filials i societats controlades pel grup Microsoft.'),
        dataBrokerSales: f('no', 'official', ['microsoft-trust-center-data-management'], 'Microsoft declara que no comparteix les dades de client amb serveis finançats amb publicitat.'),
        internationalTransfers: f('partial', 'official', ['microsoft-eu-data-boundary', 'microsoft-teams-data-location', 'microsoft-privacy-statement'], 'Les dades de client i les dades personals pseudonimitzades de les organitzacions europees es guarden i es tracten dins del perímetre de dades de la UE, amb excepcions documentades; per a la resta regeixen les clàusules contractuals tipus.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: f('yes', 'official', ['microsoft-law-enforcement-report'], 'Informe semestral de peticions d’autoritats, amb desglossament de divulgacions de contingut i de dades no de contingut.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['microsoft-trust-center-data-management', 'microsoft-privacy-statement'], 'Hi ha terminis concrets per a la baixa del servei empresarial, però la retenció ordinària dels xats i les reunions la fixa cada organització.'),
        dataAfterDeletion: f('partial', 'official', ['microsoft-trust-center-data-management'], 'En acabar la subscripció, les dades queden 90 dies disponibles per extreure-les i s’esborren en els 90 dies següents.'),
        periods: [
          { period: '90 dies per recuperar les dades després de la baixa i 90 dies més fins a l’esborrat definitiu.', sources: ['microsoft-trust-center-data-management'] },
        ],
      },
      accountDeletion: {
        possible: f('partial', 'official', ['microsoft-close-account'], 'El compte personal de Microsoft es pot tancar un mateix; el compte d’empresa o de centre educatiu només el pot eliminar l’administrador de l’organització.'),
        selfService: f('partial', 'official', ['microsoft-close-account'], 'Autoservei complet per al compte personal, i cap control propi si l’accés és amb un compte corporatiu.'),
        directUrl: 'https://account.microsoft.com/closeaccount',
        difficulty: 'medium',
        waitingPeriodDays: 60,
        steps: [
          'Inicia la sessió amb el compte de Microsoft que vols tancar i obre la pàgina de tancament del compte.',
          'Verifica la identitat si el sistema t’ho demana.',
          'Comprova que el compte que apareix és el correcte i selecciona «Següent».',
          'Marca les caselles que confirmen que has revisat cada punt: subscripcions actives, saldos pendents i fitxers que cal desar en un altre lloc.',
          'Tria la finestra de reobertura de 30 o de 60 dies.',
          'Selecciona un motiu del desplegable i prem «Marcar el compte per tancar-lo».',
        ],
        obstacles:
          'Si hi entres amb un compte de la feina o del centre educatiu, no hi ha cap camí de sortida al teu abast: el compte és de l’organització i la sol·licitud ha d’anar al seu administrador o al seu delegat de protecció de dades.',
        dataRetained: 'Els xats, els fitxers i les reunions d’un compte corporatiu es conserven segons la política de retenció de l’organització, encara que la persona hi deixi de treballar.',
        sources: ['microsoft-close-account', 'microsoft-trust-center-data-management'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['microsoft-privacy-dashboard', 'microsoft-privacy-statement'], 'El panell de privadesa permet descarregar les dades associades al compte personal; en els comptes corporatius l’exportació la canalitza l’organització.', {
          url: 'https://account.microsoft.com/privacy/',
        }),
        exportFormatQuality: 'mixed',
        rightsExercise: f('yes', 'official', ['microsoft-privacy-statement'], 'Microsoft Ireland Operations Limited és el responsable per a l’Espai Econòmic Europeu i publica un canal de privadesa i el contacte del delegat de protecció de dades.', {
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: na('Teams no mostra publicitat ni personalitza anuncis amb les dades del servei.'),
        telemetryOptOut: f('partial', 'official', ['microsoft-365-privacy-controls'], 'Les dades de diagnòstic opcionals es poden desactivar, però les obligatòries i les dades de servei necessàries s’envien sempre; en un compte corporatiu qui tria és l’administrador.'),
        granularControls: f('partial', 'official', ['microsoft-365-privacy-controls', 'microsoft-privacy-dashboard'], 'Hi ha controls per nivell de diagnòstic i experiències connectades, però la majoria són a mans de l’administrador de l’organització.'),
        defaultPosture: 'mixed',
        darkPatterns: f('no', 'editorial', [], 'No hem detectat patrons enganyosos rellevants en la configuració de privadesa de l’aplicació mòbil.'),
      },
      security: {
        e2ee: f('partial', 'official', ['microsoft-privacy-statement'], 'El xifratge d’extrem a extrem existeix només per a les trucades individuals i s’ha d’activar expressament; els xats, els canals i les reunions no el tenen.', { scope: 'partial-optin' }),
        transportEncryption: f('yes', 'official', ['microsoft-trust-center-data-management']),
        atRestEncryption: f('yes', 'official', ['microsoft-trust-center-data-management']),
        mfa: f('yes', 'official', ['microsoft-authenticator-method'], 'Verificació en dos passos amb claus d’accés, notificacions amb coincidència de número, codis OATH i claus de seguretat.', {
          methods: ['passkey', 'app-push', 'totp', 'hardware-key', 'sms', 'email'],
        }),
        independentAudits: f('yes', 'official', ['microsoft-iso-27001'], 'Certificació ISO/IEC 27001 auditada per un tercer acreditat, amb els certificats publicats al Service Trust Portal.'),
        bugBounty: f('yes', 'official', ['microsoft-msrc-bounty'], 'Programa de recompenses amb premis de fins a 250.000 dòlars.'),
        vulnerabilityDisclosure: f('yes', 'official', ['microsoft-msrc-cvd'], 'Política de divulgació coordinada i canal privat de notificació del MSRC.'),
      },
      alternatives: [
        {
          app: 'signal',
          comparability: 'partial',
          rationale: 'Per als xats i les trucades de grup, Signal ofereix xifratge d’extrem a extrem per defecte i recull metadades mínimes.',
          tradeOffs: 'No substitueix les reunions grans, els canals, els fitxers compartits ni la integració amb el calendari corporatiu.',
        },
        {
          app: 'google-meet',
          comparability: 'partial',
          rationale: 'Cobreix la part de videoconferència amb un model equivalent de compte corporatiu.',
          tradeOffs: 'El tractament passa a un altre grup amb un negoci publicitari més central i no aporta cap millora de privadesa substancial.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La lectura clau de Teams és que l’absència de seguiment publicitari no equival a control: en un compte corporatiu, la persona usuària no decideix la retenció, ni l’accés, ni la baixa. La fitxa ho separa del cas del compte personal per no confondre els dos règims.',
        openQuestions: [
          'Quins components de tercers incorpora exactament l’aplicació mòbil de Teams?',
          'Per què el xifratge d’extrem a extrem continua limitat a les trucades individuals i no s’estén als xats?',
        ],
      },
    },

    /* ═══════════════════ Microsoft Authenticator ═══════════════════ */
    {
      slug: 'microsoft-authenticator',
      name: 'Microsoft Authenticator',
      company: 'microsoft',
      categories: ['autenticacio-i-seguretat', 'utilitats'],
      tagline: 'Una aplicació de seguretat que declara ubicació exacta vinculada a la teva identitat',
      summary:
        'Authenticator guarda les claus d’accés al Secure Enclave del telèfon i no les deixa sortir del dispositiu, cosa que el converteix en un segon factor resistent a la suplantació. Al mateix temps és l’única aplicació d’aquest lot que declara ubicació exacta vinculada a la identitat, perquè les notificacions d’inici de sessió mostren des d’on s’intenta entrar. Aquesta dada, acumulada, és un registre precís d’on ets cada vegada que t’autentiques.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Irlanda',
      userBase: 'Més de cent milions de descàrregues declarades a les botigues d’aplicacions',
      links: {
        website: 'https://www.microsoft.com/security/mobile-authenticator-app',
        privacyPolicy: 'https://www.microsoft.com/en-us/privacy/privacystatement',
        appStore: 'https://apps.apple.com/es/app/id983156458',
      },
      accountRequired: f('partial', 'official', ['microsoft-authenticator-method'], 'Per als codis OATH de serveis de tercers no cal cap compte; per a les claus d’accés, l’inici de sessió sense contrasenya i la còpia de seguretat al núvol, sí.'),
      openSource: f('no', 'official', ['microsoft-privacy-statement'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Un registre d’autenticacions és, de facto, un registre de presència: diu a quina hora comences a treballar, quan viatges i des de quin dispositiu entres a cada servei. Que l’etiqueta declari ubicació exacta vinculada a la identitat converteix aquest registre en una traça geogràfica.',
      dataCollection: [
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-authenticator-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['microsoft-authenticator-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['microsoft-authenticator-app-store'] }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['microsoft-authenticator-app-store'], note: 'L’etiqueta la declara com a funcionalitat de l’aplicació. Les sol·licituds d’inici de sessió mostren la ubicació de l’intent per detectar accessos anòmals.' }),
        row('testimoni-d-autenticacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['microsoft-authenticator-method'], note: 'Les claus d’accés es creen al Secure Enclave d’iOS i no surten del dispositiu on s’han generat.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['microsoft-authenticator-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['microsoft-authenticator-app-store'], note: 'L’etiqueta declara dades de diagnòstic vinculades i, a més, dades d’error no vinculades a la identitat.' }),
        row('contrasenya', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-authenticator-app-store'], note: 'L’aplicació pot fer de gestor de contrasenyes i desar-les al compte de Microsoft.' }),
        row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['microsoft-authenticator-app-store'], note: 'L’etiqueta no declara cap dada utilitzada per rastrejar-te.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['microsoft-authenticator-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar-te en aplicacions i llocs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['microsoft-authenticator-app-store']),
        thirdPartyTrackersPresent: unknown('Microsoft no publica quins components de tercers incorpora l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['microsoft-authenticator-app-store'], 'L’etiqueta no declara cap dada de publicitat ni finalitat publicitària.'),
        profiling: f('partial', 'official', ['microsoft-privacy-statement'], 'Els senyals d’inici de sessió, inclosa la ubicació, alimenten la detecció de riscos i d’accessos anòmals, que és una forma d’avaluació automatitzada amb finalitat de seguretat.'),
        aiTraining: unknown('No hem trobat cap declaració específica sobre l’ús de les dades d’Authenticator per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['microsoft-authenticator-method', 'microsoft-privacy-statement'], 'L’atestació de les claus d’accés fa servir els serveis d’Apple i de Google per verificar la legitimitat de l’aplicació; la resta de cessions són a proveïdors que actuen per compte de Microsoft.'),
        intraGroupSharing: f('yes', 'official', ['microsoft-privacy-statement'], 'Compartició amb les filials del grup Microsoft.'),
        dataBrokerSales: f('no', 'official', ['microsoft-trust-center-data-management'], 'Microsoft declara que no comparteix dades amb serveis finançats amb publicitat.'),
        internationalTransfers: f('yes', 'official', ['microsoft-privacy-statement'], 'Transferències als Estats Units emparades en clàusules contractuals tipus i en el marc de privadesa de dades UE-EUA.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: f('yes', 'official', ['microsoft-law-enforcement-report'], 'Cobert per l’informe semestral de peticions d’autoritats del grup.'),
      },
      retention: {
        definedPeriods: unknown('No hem trobat terminis concrets de conservació dels registres d’autenticació de l’aplicació de consum.'),
        dataAfterDeletion: f('partial', 'official', ['microsoft-close-account'], 'En tancar el compte de Microsoft, les dades associades s’esborren un cop passada la finestra de reobertura de 30 o 60 dies.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['microsoft-close-account'], 'Es pot desinstal·lar l’aplicació i tancar el compte de Microsoft; per als comptes corporatius, el registre del mètode el retira l’administrador.'),
        selfService: f('yes', 'official', ['microsoft-close-account']),
        directUrl: 'https://account.microsoft.com/closeaccount',
        difficulty: 'medium',
        waitingPeriodDays: 60,
        steps: [
          'Abans de res, registra un altre mètode de verificació als serveis on facis servir Authenticator: sense ell pots quedar-te fora del compte.',
          'Elimina cada compte de la llista de l’aplicació lliscant-lo i confirmant la supressió.',
          'Desactiva la còpia de seguretat al núvol des de Configuració de l’aplicació si l’havies activat.',
          'Si també vols tancar el compte de Microsoft, obre la pàgina de tancament del compte, verifica la identitat, marca les caselles de comprovació i tria la finestra de reobertura de 30 o de 60 dies.',
        ],
        obstacles:
          'Desinstal·lar l’aplicació sense haver registrat un altre segon factor pot deixar-te sense accés als comptes que en depenen. És un risc pràctic, no un patró enganyós.',
        dataRetained: 'Els registres d’inici de sessió de l’organització es conserven segons les polítiques de Microsoft Entra ID de cada empresa.',
        sources: ['microsoft-close-account', 'microsoft-authenticator-method'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['microsoft-privacy-dashboard'], 'Les dades associades al compte personal es poden descarregar des del panell de privadesa.', {
          url: 'https://account.microsoft.com/privacy/',
        }),
        exportFormatQuality: 'mixed',
        rightsExercise: f('yes', 'official', ['microsoft-privacy-statement'], 'Canal de privadesa del grup, amb Microsoft Ireland Operations Limited com a responsable per a l’Espai Econòmic Europeu.', {
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: na('L’aplicació no mostra publicitat.'),
        telemetryOptOut: unknown('No hem trobat cap control dins de l’aplicació per desactivar l’enviament de dades d’ús i de diagnòstic.'),
        granularControls: f('partial', 'official', ['microsoft-authenticator-method'], 'Es poden gestionar els comptes registrats i la còpia de seguretat, però no el detall del tractament de la telemetria.'),
        defaultPosture: 'mixed',
        darkPatterns: f('no', 'editorial', [], 'No hem detectat patrons enganyosos en la configuració de l’aplicació.'),
      },
      security: {
        e2ee: na('L’aplicació no transporta comunicacions entre persones; el que protegeix són credencials, i ho fa amb claus lligades al dispositiu.'),
        transportEncryption: f('yes', 'official', ['microsoft-trust-center-data-management']),
        atRestEncryption: f('yes', 'official', ['microsoft-authenticator-method'], 'Les claus d’accés es generen i es guarden al Secure Enclave d’iOS o a l’element segur d’Android i no en surten.'),
        mfa: f('yes', 'official', ['microsoft-authenticator-method'], 'L’aplicació és, ella mateixa, el segon factor: claus d’accés resistents a la suplantació, notificacions amb coincidència de número i codis OATH.', {
          methods: ['passkey', 'app-push', 'totp'],
        }),
        independentAudits: f('yes', 'official', ['microsoft-authenticator-method', 'microsoft-iso-27001'], 'Criptografia validada segons la norma FIPS 140 a iOS i a Android, i certificació ISO/IEC 27001 dels serveis que hi ha al darrere.'),
        bugBounty: f('yes', 'official', ['microsoft-msrc-bounty'], 'Cobert pels programes de recompenses de Microsoft.'),
        vulnerabilityDisclosure: f('yes', 'official', ['microsoft-msrc-cvd']),
      },
      alternatives: [
        {
          app: 'google-authenticator',
          comparability: 'equivalent',
          rationale: 'Genera els mateixos codis OATH estàndard per a qualsevol servei compatible.',
          tradeOffs: 'El tractament passa a un altre grup amb un negoci publicitari central, i no resol la qüestió de la telemetria.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La troballa que val la pena destacar és la ubicació exacta vinculada a la identitat en una aplicació de seguretat. Té una justificació raonable —mostrar des d’on prové un intent d’inici de sessió—, però convé saber-la, perquè acumulada és una traça geogràfica associada a cada autenticació.',
        openQuestions: [
          'Quant de temps conserva Microsoft la ubicació associada a cada sol·licitud d’inici de sessió en comptes personals?',
          'Hi ha cap manera de desactivar la telemetria opcional des de l’aplicació?',
        ],
      },
    },

    /* ═══════════════════════════ Microsoft Outlook ═══════════════════════════ */
    {
      slug: 'outlook',
      name: 'Microsoft Outlook',
      company: 'microsoft',
      categories: ['correu-electronic', 'ofimatica-i-productivitat'],
      tagline: 'L’única aplicació del lot que declara seguiment entre aplicacions de tercers i publicitat amb el contingut del correu',
      summary:
        'Outlook és el cas més delicat del lot. L’etiqueta de l’App Store declara dades d’ús utilitzades per rastrejar-te en aplicacions i llocs d’altres empreses, publicitat de tercers amb dades d’ús i de publicitat, i —el punt més rellevant— correus, missatges i historial de cerca emprats per a analítica i per a la personalització del producte. És a dir: la safata d’entrada no és només un magatzem, és una font de senyals.',
      platforms: ['ios', 'android', 'web', 'windows', 'macos'],
      businessModel: 'freemium',
      jurisdiction: 'Irlanda',
      userBase: 'Centenars de milions de bústies entre Outlook.com i Microsoft 365',
      links: {
        website: 'https://www.microsoft.com/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook',
        privacyPolicy: 'https://www.microsoft.com/en-us/privacy/privacystatement',
        privacyCenter: 'https://account.microsoft.com/privacy/',
        appStore: 'https://apps.apple.com/es/app/id951937596',
      },
      accountRequired: f('yes', 'official', ['microsoft-privacy-statement'], 'Cal un compte de correu; l’aplicació admet comptes de Microsoft i de tercers, com Gmail o IMAP.'),
      openSource: f('no', 'official', ['microsoft-privacy-statement'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El correu ho conté tot: bancs, metges, advocats, relacions personals, compres i desplaçaments. Quan a això s’hi afegeixen els contactes, el calendari i l’historial de cerca dins de la bústia, el conjunt supera de llarg el que revela qualsevol xarxa social. El detall que ho agreuja és que l’etiqueta declara aquest contingut com a matèria primera d’analítica i de personalització, no només d’emmagatzematge.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['outlook-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['outlook-app-store'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['outlook-app-store'] }),
        row('llista-de-contactes', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['outlook-app-store'], note: 'L’etiqueta declara els contactes també per a la personalització del producte, no només per fer funcionar el correu.' }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['outlook-app-store'], note: 'Els correus i els missatges de text figuren a l’etiqueta sota «Análisis de datos» i «Personalización del producto».' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['outlook-app-store'], note: 'Les cerques dins de la bústia s’utilitzen per a analítica i per personalitzar el producte.' }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['outlook-app-store'], note: 'Fitxers adjunts i imatges enviats o rebuts.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['outlook-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['outlook-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['outlook-app-store'], note: 'L’etiqueta declara «Datos de publicidad» vinculats a la identitat, tant per a publicitat de tercers com per al màrqueting de Microsoft.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['outlook-app-store'], note: 'És l’única categoria que l’etiqueta declara com a utilitzada per rastrejar-te en aplicacions i llocs web d’altres empreses.' }),
        row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['outlook-app-store'], note: 'L’etiqueta la declara com a dada no vinculada a la identitat, per a la funcionalitat de l’aplicació.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte', 'seguretat-i-prevencio-del-frau'], sources: ['outlook-app-store', 'microsoft-365-privacy-controls'] }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['microsoft-ad-settings', 'outlook-app-store'], note: 'El panell de publicitat de Microsoft mostra i permet editar les categories d’interès associades al compte.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['outlook-app-store'], 'L’etiqueta declara dades d’ús utilitzades per rastrejar-te en aplicacions i llocs web propietat d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['outlook-app-store'], 'Dades de publicitat vinculades a la identitat, per a publicitat de tercers i per al màrqueting del mateix desenvolupador.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['outlook-app-store', 'microsoft-privacy-statement'], 'La declaració de Microsoft cita Xandr, Facebook, Media.net i Outbrain entre els socis publicitaris del grup.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['outlook-app-store', 'microsoft-ad-settings'], 'La versió gratuïta d’Outlook.com mostra publicitat i l’etiqueta declara la finalitat «Publicidad de terceros». Es pot desactivar la personalització des del panell de publicitat.', {
          optOutUrl: 'https://account.microsoft.com/privacy/ad-settings',
        }),
        profiling: f('yes', 'official', ['microsoft-ad-settings', 'outlook-app-store'], 'Microsoft manté un perfil d’interessos editable des del panell de publicitat del compte.'),
        aiTraining: f('partial', 'official', ['microsoft-privacy-statement', 'microsoft-copilot-privacy'], 'La declaració general preveu l’ús de dades per desenvolupar i entrenar models d’IA en els serveis de consum; als comptes amb protecció de dades empresarials, les indicacions i respostes de Copilot no entrenen els models de base.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['microsoft-privacy-statement'], 'Proveïdors que actuen per compte de Microsoft i socis publicitaris com Xandr, Facebook, Media.net i Outbrain.'),
        intraGroupSharing: f('yes', 'official', ['microsoft-privacy-statement'], 'Compartició amb filials i societats controlades pel grup.'),
        dataBrokerSales: f('no', 'official', ['microsoft-trust-center-data-management'], 'Microsoft declara que no comparteix les dades de client amb serveis finançats amb publicitat, un compromís que s’aplica als serveis empresarials.'),
        internationalTransfers: f('partial', 'official', ['microsoft-eu-data-boundary', 'microsoft-privacy-statement'], 'Els comptes empresarials europeus queden dins del perímetre de dades de la UE amb excepcions documentades; els comptes personals es regeixen per les clàusules contractuals tipus i el marc UE-EUA.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: f('yes', 'official', ['microsoft-law-enforcement-report'], 'A l’informe semestral, Microsoft desglossa les peticions de contingut —que en el cas del correu vol dir els missatges— de les de dades no de contingut.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['microsoft-privacy-statement', 'microsoft-trust-center-data-management'], 'Terminis concrets per a la baixa dels serveis empresarials, però criteris generals per al correu dels comptes personals.'),
        dataAfterDeletion: f('partial', 'official', ['microsoft-close-account'], 'El correu i el contingut s’esborren un cop passada la finestra de reobertura de 30 o 60 dies triada en tancar el compte.'),
        periods: [
          { period: 'Finestra de reobertura de 30 o 60 dies abans de l’esborrat definitiu del contingut del compte personal.', sources: ['microsoft-close-account'] },
        ],
      },
      accountDeletion: {
        possible: f('partial', 'official', ['microsoft-close-account'], 'El compte personal es tanca un mateix; una bústia corporativa només la pot eliminar l’administrador de l’organització.'),
        selfService: f('partial', 'official', ['microsoft-close-account'], 'Autoservei per al compte de Microsoft; cap control propi sobre una bústia de la feina.'),
        directUrl: 'https://account.microsoft.com/closeaccount',
        difficulty: 'medium',
        waitingPeriodDays: 60,
        steps: [
          'Descarrega abans el correu que vulguis conservar: en tancar el compte perds la bústia.',
          'Cancel·la les subscripcions actives i gasta els saldos pendents associats al compte.',
          'Inicia la sessió i obre la pàgina de tancament del compte de Microsoft.',
          'Verifica la identitat, comprova que el compte és el correcte i selecciona «Següent».',
          'Marca les caselles que confirmen que has revisat cada punt de la llista.',
          'Tria la finestra de reobertura de 30 o de 60 dies, selecciona un motiu i prem «Marcar el compte per tancar-lo».',
        ],
        obstacles:
          'Tancar el compte de Microsoft no només esborra el correu: també desactiva Xbox, OneDrive, Skype i les llicències d’Office associades. La pàgina ho adverteix amb una llista de caselles que cal marcar una a una.',
        dataRetained: 'Les dades de facturació de les subscripcions es conserven pels terminis fiscals obligatoris.',
        sources: ['microsoft-close-account'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['microsoft-privacy-dashboard', 'microsoft-privacy-statement'], 'El panell de privadesa permet descarregar les dades del compte; el correu també es pot exportar en fitxers PST des del client d’escriptori.', {
          url: 'https://account.microsoft.com/privacy/',
        }),
        exportFormatQuality: 'mixed',
        rightsExercise: f('yes', 'official', ['microsoft-privacy-statement'], 'Canal de privadesa del grup i contacte del delegat de protecció de dades a Irlanda.', {
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['microsoft-ad-settings'], 'El panell de publicitat permet desactivar els anuncis personalitzats i la compartició de dades amb tercers amb finalitat publicitària, i Microsoft declara que respecta el senyal Global Privacy Control.', {
          url: 'https://account.microsoft.com/privacy/ad-settings',
        }),
        telemetryOptOut: f('partial', 'official', ['microsoft-365-privacy-controls'], 'Les dades de diagnòstic opcionals es poden desactivar, però les obligatòries i les dades de servei necessàries s’envien sempre.'),
        granularControls: f('partial', 'official', ['microsoft-privacy-dashboard', 'microsoft-ad-settings'], 'Hi ha panells per a la publicitat i per a l’historial del compte, però no un control per finalitat sobre l’ús del contingut del correu en analítica i personalització.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'editorial', ['outlook-app-store'], 'La personalització publicitària i el seguiment per dades d’ús estan actius per defecte i el control viu en un panell web del compte, lluny de la configuració de l’aplicació de correu.'),
        darkPatternList: [
          {
            type: 'preselected',
            severity: 'medium',
            description:
              'El seguiment amb dades d’ús i la publicitat personalitzada funcionen per defecte; cal anar al panell web de publicitat del compte de Microsoft per desactivar-los.',
            sources: ['outlook-app-store', 'microsoft-ad-settings'],
          },
        ],
      },
      security: {
        e2ee: f('no', 'official', ['microsoft-privacy-statement'], 'El correu es desa desxifrat al servidor perquè el servei el pugui indexar i cercar; no hi ha xifratge d’extrem a extrem per defecte.', { scope: 'none' }),
        transportEncryption: f('yes', 'official', ['microsoft-trust-center-data-management']),
        atRestEncryption: f('yes', 'official', ['microsoft-trust-center-data-management']),
        mfa: f('yes', 'official', ['microsoft-authenticator-method'], 'Verificació en dos passos amb claus d’accés, notificacions, codis OATH i claus de seguretat.', {
          methods: ['passkey', 'app-push', 'totp', 'hardware-key', 'sms', 'email'],
        }),
        independentAudits: f('yes', 'official', ['microsoft-iso-27001']),
        bugBounty: f('yes', 'official', ['microsoft-msrc-bounty']),
        vulnerabilityDisclosure: f('yes', 'official', ['microsoft-msrc-cvd']),
      },
      alternatives: [
        {
          app: 'proton-mail',
          comparability: 'partial',
          rationale: 'Correu amb xifratge de la bústia al servidor, sense publicitat i sota jurisdicció suïssa.',
          tradeOffs: 'La cerca dins del correu és més limitada i el pla gratuït ofereix molt menys espai.',
        },
        {
          app: 'gmail',
          comparability: 'equivalent',
          rationale: 'Cobreix les mateixes funcions de correu i calendari amb una aplicació mòbil comparable.',
          tradeOffs: 'El tractament passa a un grup amb un negoci publicitari encara més central; no és una millora de privadesa.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La dada que no consta resumida enlloc és que l’etiqueta d’Outlook declara el contingut dels correus i l’historial de cerca sota les finalitats d’analítica i de personalització del producte, i les dades d’ús com a dades de seguiment entre aplicacions de tercers. És l’única aplicació del lot que ho fa.',
        openQuestions: [
          'Quin tractament concret rep el contingut dels correus sota la finalitat «Análisis de datos» declarada a l’App Store?',
          'El seguiment amb dades d’ús també s’aplica quan l’aplicació només gestiona comptes de tercers com Gmail o IMAP?',
        ],
      },
    },

    /* ═══════════════════════════ Microsoft Copilot ═══════════════════════════ */
    {
      slug: 'microsoft-copilot',
      name: 'Microsoft Copilot',
      company: 'microsoft',
      categories: ['assistents-d-ia', 'ofimatica-i-productivitat'],
      tagline: 'L’antiga aplicació d’Office convertida en assistent d’IA, amb identificadors declarats per a seguiment',
      summary:
        'Aquesta fitxa correspon a l’aplicació amb identificador de paquet com.microsoft.officemobile, que era la de Microsoft Office i ara es publica com a Microsoft Copilot. Declara identificadors utilitzats per rastrejar-te en aplicacions i llocs de tercers i publicitat de tercers amb la interacció amb el producte, cosa que la separa de Word i de Teams. A canvi, quan s’hi entra amb un compte empresarial, Microsoft es compromet a no fer servir les indicacions ni les respostes per entrenar els models de base.',
      platforms: ['ios', 'android', 'web', 'windows'],
      businessModel: 'freemium',
      jurisdiction: 'Irlanda',
      userBase: 'Desenes de milions de descàrregues, heretades de l’aplicació de Microsoft Office',
      links: {
        website: 'https://copilot.microsoft.com/',
        privacyPolicy: 'https://www.microsoft.com/en-us/privacy/privacystatement',
        privacyCenter: 'https://account.microsoft.com/privacy/',
        appStore: 'https://apps.apple.com/es/app/id541164041',
      },
      accountRequired: f('yes', 'official', ['microsoft-privacy-statement'], 'Cal un compte de Microsoft personal o un compte d’empresa o de centre educatiu per accedir a les funcions d’IA i als documents.'),
      openSource: f('no', 'official', ['microsoft-privacy-statement'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El que escrius a un assistent és sovint més íntim que el que publiques enlloc: dubtes de salut, conflictes laborals, esborranys de cartes. Si a això s’hi suma que l’etiqueta declara identificadors per a seguiment i publicitat de tercers, el mateix compte que guarda les converses és el que alimenta la personalització publicitària del grup.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-copilot-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-copilot-app-store'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-copilot-app-store'] }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-copilot-app-store'] }),
        row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-copilot-app-store', 'microsoft-copilot-privacy'], note: 'Els fitxers que s’hi pengen es desen a OneDrive dins del perímetre de protecció de dades empresarials.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['microsoft-copilot-privacy'], note: 'Copilot genera consultes de poques paraules cap a Bing per fonamentar les respostes; no inclouen identificadors de persona ni d’organització, però queden fora del perímetre de dades de la UE.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-copilot-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['microsoft-copilot-app-store'], note: 'L’identificador del dispositiu apareix també com a dada no vinculada, per a publicitat de tercers i per al màrqueting del desenvolupador.' }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['microsoft-copilot-app-store'], note: 'Els identificadors són la categoria que l’etiqueta declara com a utilitzada per rastrejar-te.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['microsoft-copilot-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['microsoft-copilot-app-store'], note: 'La interacció amb el producte figura sota la finalitat «Publicidad de terceros».' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['microsoft-copilot-app-store', 'microsoft-365-privacy-controls'] }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['microsoft-copilot-privacy'], note: 'Les indicacions i les respostes es registren a Exchange per a auditoria i descoberta electrònica als comptes empresarials.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['microsoft-copilot-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar-te en aplicacions i llocs web d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['microsoft-copilot-app-store'], 'Identificador del dispositiu emprat per a publicitat de tercers i per al màrqueting del mateix desenvolupador.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['microsoft-copilot-app-store', 'microsoft-privacy-statement'], 'L’etiqueta declara publicitat de tercers; la declaració de Microsoft cita Xandr, Facebook, Media.net i Outbrain com a socis publicitaris del grup.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['microsoft-copilot-app-store', 'microsoft-ad-settings'], 'La finalitat «Publicidad de terceros» consta a l’etiqueta; la personalització es desactiva des del panell de publicitat del compte.', {
          optOutUrl: 'https://account.microsoft.com/privacy/ad-settings',
        }),
        profiling: f('yes', 'official', ['microsoft-ad-settings'], 'Microsoft manté un perfil d’interessos editable des del panell de publicitat.'),
        aiTraining: f('partial', 'official', ['microsoft-copilot-privacy', 'microsoft-privacy-statement'], 'Amb protecció de dades empresarials, les indicacions i respostes no entrenen els models de base. La declaració general de Microsoft sí que preveu l’ús de dades personals per desenvolupar i entrenar models d’IA en els serveis de consum.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['microsoft-privacy-statement', 'microsoft-copilot-privacy'], 'Proveïdors que actuen per compte de Microsoft, socis publicitaris i el servei de cerca de Bing, que actua com a responsable independent per a les consultes generades.'),
        intraGroupSharing: f('yes', 'official', ['microsoft-privacy-statement']),
        dataBrokerSales: f('no', 'official', ['microsoft-trust-center-data-management']),
        internationalTransfers: f('partial', 'official', ['microsoft-copilot-privacy', 'microsoft-eu-data-boundary'], 'El trànsit dels comptes europeus es manté dins del perímetre de dades de la UE, però les consultes generades cap a Bing en queden expressament fora.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: f('yes', 'official', ['microsoft-law-enforcement-report']),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['microsoft-copilot-privacy', 'microsoft-trust-center-data-management'], 'Les indicacions i respostes segueixen les polítiques de retenció que fixa cada organització; per als comptes personals només hi ha criteris generals.'),
        dataAfterDeletion: f('partial', 'official', ['microsoft-close-account']),
        periods: [
          { period: 'Les citacions de les consultes web generades es poden consultar dins de la conversa durant 24 hores.', sources: ['microsoft-copilot-privacy'] },
        ],
      },
      accountDeletion: {
        possible: f('partial', 'official', ['microsoft-close-account'], 'El compte personal es pot tancar; amb un compte corporatiu, la supressió depèn de l’organització.'),
        selfService: f('partial', 'official', ['microsoft-close-account']),
        directUrl: 'https://account.microsoft.com/closeaccount',
        difficulty: 'medium',
        waitingPeriodDays: 60,
        steps: [
          'Esborra l’historial d’activitat de Copilot des del panell de privadesa del compte de Microsoft.',
          'Si també vols tancar el compte, inicia la sessió i obre la pàgina de tancament del compte.',
          'Verifica la identitat i comprova que el compte que apareix és el correcte.',
          'Marca les caselles de la llista de comprovació i tria la finestra de reobertura de 30 o de 60 dies.',
          'Selecciona un motiu i prem «Marcar el compte per tancar-lo».',
        ],
        obstacles: 'Als comptes d’empresa o de centre educatiu, les indicacions i les respostes queden registrades a Exchange per a auditoria i la persona no les pot eliminar del registre.',
        dataRetained: 'Els registres d’auditoria de l’organització, segons les seves polítiques de retenció.',
        sources: ['microsoft-close-account', 'microsoft-copilot-privacy', 'microsoft-privacy-dashboard'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['microsoft-privacy-dashboard'], 'El panell de privadesa mostra i permet descarregar l’activitat de Copilot associada al compte.', {
          url: 'https://account.microsoft.com/privacy/',
        }),
        exportFormatQuality: 'mixed',
        rightsExercise: f('yes', 'official', ['microsoft-privacy-statement'], undefined, { responseTimeDays: 30 }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['microsoft-ad-settings'], 'Desactivació de la publicitat personalitzada i de la compartició amb tercers des del panell de publicitat del compte.', {
          url: 'https://account.microsoft.com/privacy/ad-settings',
        }),
        telemetryOptOut: f('partial', 'official', ['microsoft-365-privacy-controls'], 'Es pot triar el nivell de dades de diagnòstic, però les dades de servei necessàries s’envien igualment.'),
        granularControls: f('partial', 'official', ['microsoft-privacy-dashboard', 'microsoft-copilot-privacy'], 'L’historial d’activitat de Copilot es pot consultar i esborrar; l’accés a contingut de l’organització el configura l’administrador.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'editorial', ['microsoft-copilot-app-store'], 'L’aplicació hereta la base instal·lada de l’antiga aplicació d’Office i ha passat a ser un assistent d’IA amb seguiment per identificadors, sense que el canvi de naturalesa del producte es tradueixi en una nova decisió informada.'),
        darkPatternList: [
          {
            type: 'other',
            severity: 'medium',
            description:
              'El mateix paquet que la gent va instal·lar com a aplicació de Microsoft Office es publica ara com a assistent d’IA amb identificadors declarats per a seguiment i publicitat de tercers.',
            sources: ['microsoft-copilot-app-store'],
          },
        ],
      },
      security: {
        e2ee: f('no', 'official', ['microsoft-copilot-privacy'], 'Les indicacions i les respostes es processen i es registren als servidors del servei; no hi ha xifratge d’extrem a extrem.', { scope: 'none' }),
        transportEncryption: f('yes', 'official', ['microsoft-trust-center-data-management']),
        atRestEncryption: f('yes', 'official', ['microsoft-trust-center-data-management']),
        mfa: f('yes', 'official', ['microsoft-authenticator-method'], undefined, { methods: ['passkey', 'app-push', 'totp', 'hardware-key', 'sms', 'email'] }),
        independentAudits: f('yes', 'official', ['microsoft-iso-27001']),
        bugBounty: f('yes', 'official', ['microsoft-msrc-bounty']),
        vulnerabilityDisclosure: f('yes', 'official', ['microsoft-msrc-cvd']),
      },
      alternatives: [
        {
          app: 'claude',
          comparability: 'equivalent',
          rationale: 'Assistent conversacional comparable, sense negoci publicitari associat al compte.',
          tradeOffs: 'No s’integra amb els documents ni amb el correu corporatiu de Microsoft 365.',
        },
        {
          app: 'chatgpt',
          comparability: 'equivalent',
          rationale: 'Cobreix les mateixes funcions d’assistent generalista amb aplicació mòbil.',
          tradeOffs: 'Cal revisar-hi la configuració d’ús de les converses per a l’entrenament de models.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Convé deixar constància que l’identificador de paquet d’aquesta fitxa, com.microsoft.officemobile, és el de l’antiga aplicació de Microsoft Office: la fitxa documenta el producte tal com es publica avui, Microsoft Copilot. La documentació pública de Copilot està molt orientada al client empresarial i costa trobar-ne l’equivalent per al compte personal.',
        openQuestions: [
          'Les converses de Copilot amb un compte personal de Microsoft s’utilitzen per entrenar models, i hi ha cap control per evitar-ho?',
          'Quins socis publicitaris reben exactament els identificadors declarats a l’etiqueta d’aquesta aplicació?',
        ],
      },
    },

    /* ═══════════════════════════ Microsoft Word ═══════════════════════════ */
    {
      slug: 'microsoft-word',
      name: 'Microsoft Word',
      company: 'microsoft',
      categories: ['ofimatica-i-productivitat'],
      tagline: 'Sense seguiment declarat, però amb telemetria que no es pot apagar del tot',
      summary:
        'Word és l’aplicació més continguda del lot: l’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar-te ni cap finalitat publicitària. El que sí que hi ha és telemetria estructural. Encara que es triï el nivell «cap» de dades de diagnòstic, Microsoft documenta que les dades de servei necessàries s’envien igualment des del dispositiu, i les experiències connectades que analitzen el contingut processen el text del document al núvol.',
      platforms: ['ios', 'android', 'web', 'windows', 'macos'],
      businessModel: 'freemium',
      jurisdiction: 'Irlanda',
      userBase: 'Centenars de milions de persones usuàries de Microsoft 365',
      links: {
        website: 'https://www.microsoft.com/microsoft-365/word',
        privacyPolicy: 'https://www.microsoft.com/en-us/privacy/privacystatement',
        privacyCenter: 'https://account.microsoft.com/privacy/',
        appStore: 'https://apps.apple.com/es/app/id586447913',
      },
      accountRequired: f('yes', 'official', ['microsoft-privacy-statement'], 'Cal iniciar la sessió amb un compte de Microsoft per editar documents a l’aplicació mòbil.'),
      openSource: f('no', 'official', ['microsoft-privacy-statement'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Els documents d’una persona són esborranys de cartes de comiat, informes mèdics, contractes i currículums. La qüestió aquí no és la publicitat, que no hi és, sinó quina part d’aquest text viatja al núvol: les experiències connectades que analitzen el contingut, com el traductor o l’editor, hi envien el text seleccionat per poder funcionar.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-word-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-word-app-store'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-word-app-store'] }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-word-app-store'], note: 'Per compartir documents i convidar-hi persones.' }),
        row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-word-app-store', 'microsoft-365-privacy-controls'], note: 'Les experiències connectades que analitzen el contingut, com el traductor, envien el text seleccionat al servei.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-word-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['microsoft-word-app-store'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['microsoft-word-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['microsoft-word-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte', 'seguretat-i-prevencio-del-frau'], sources: ['microsoft-word-app-store', 'microsoft-365-privacy-controls'], note: 'Les dades de servei necessàries s’envien encara que es triï el nivell «cap» de diagnòstic.' }),
        row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['microsoft-word-app-store'], note: 'L’etiqueta no declara cap dada per a seguiment ni cap finalitat publicitària.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['microsoft-word-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar-te en aplicacions i llocs d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['microsoft-word-app-store']),
        thirdPartyTrackersPresent: unknown('Microsoft no publica la llista de components de tercers de l’aplicació mòbil.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['microsoft-word-app-store', 'microsoft-trust-center-data-management'], 'Cap finalitat publicitària declarada, i compromís explícit de no explotar les dades de client per a màrqueting.'),
        profiling: f('partial', 'official', ['microsoft-365-privacy-controls'], 'Les dades de diagnòstic opcionals es poden fer servir agregades per entrenar funcions d’aprenentatge automàtic com les accions recomanades o les prediccions de text.'),
        aiTraining: f('partial', 'official', ['microsoft-365-privacy-controls', 'microsoft-copilot-privacy'], 'El diagnòstic opcional alimenta funcions basades en aprenentatge automàtic; el contingut dels documents no entrena els models de base quan s’hi aplica la protecció de dades empresarials.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['microsoft-privacy-statement'], 'Proveïdors i agents que actuen per compte de Microsoft.'),
        intraGroupSharing: f('yes', 'official', ['microsoft-privacy-statement']),
        dataBrokerSales: f('no', 'official', ['microsoft-trust-center-data-management']),
        internationalTransfers: f('partial', 'official', ['microsoft-eu-data-boundary', 'microsoft-privacy-statement'], 'Les organitzacions europees queden cobertes pel perímetre de dades de la UE, amb excepcions documentades; per a la resta regeixen les clàusules contractuals tipus.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: f('yes', 'official', ['microsoft-law-enforcement-report']),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['microsoft-trust-center-data-management'], 'Terminis concrets per a la baixa de la subscripció empresarial; criteris generals per a la resta.'),
        dataAfterDeletion: f('partial', 'official', ['microsoft-trust-center-data-management'], '90 dies per extreure les dades i 90 dies més fins a l’esborrat definitiu.'),
        periods: [
          { period: '90 dies per recuperar les dades després de la baixa i 90 dies més fins a l’esborrat definitiu.', sources: ['microsoft-trust-center-data-management'] },
        ],
      },
      accountDeletion: {
        possible: f('partial', 'official', ['microsoft-close-account'], 'Es tanca el compte de Microsoft, no l’aplicació per separat; amb un compte corporatiu depèn de l’organització.'),
        selfService: f('partial', 'official', ['microsoft-close-account']),
        directUrl: 'https://account.microsoft.com/closeaccount',
        difficulty: 'medium',
        waitingPeriodDays: 60,
        steps: [
          'Descarrega els documents que tinguis a OneDrive abans de començar: en tancar el compte els perds.',
          'Cancel·la la subscripció de Microsoft 365 si en tens una d’activa.',
          'Inicia la sessió i obre la pàgina de tancament del compte de Microsoft.',
          'Verifica la identitat, marca les caselles de comprovació i tria la finestra de reobertura de 30 o de 60 dies.',
          'Selecciona un motiu i prem «Marcar el compte per tancar-lo».',
        ],
        obstacles: 'No hi ha manera d’eliminar només les dades de Word: el compte de Microsoft és únic per a tots els serveis del grup.',
        dataRetained: 'Les dades de facturació de la subscripció, pels terminis fiscals obligatoris.',
        sources: ['microsoft-close-account', 'microsoft-trust-center-data-management'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['microsoft-privacy-dashboard'], 'Descàrrega de les dades del compte des del panell de privadesa; els documents s’exporten en formats oberts OOXML.', {
          url: 'https://account.microsoft.com/privacy/',
        }),
        exportFormatQuality: 'open',
        rightsExercise: f('yes', 'official', ['microsoft-privacy-statement'], undefined, { responseTimeDays: 30 }),
      },
      controls: {
        adPersonalizationOptOut: na('L’aplicació no mostra publicitat personalitzada ni declara finalitats publicitàries.'),
        telemetryOptOut: f('partial', 'official', ['microsoft-365-privacy-controls'], 'Es pot triar entre diagnòstic obligatori, opcional o cap, però Microsoft documenta expressament que les dades de servei necessàries s’envien igualment.'),
        granularControls: f('yes', 'official', ['microsoft-365-privacy-controls'], 'Hi ha controls separats per al nivell de diagnòstic, per a les experiències connectades que analitzen contingut, per a les que descarreguen contingut i per a les opcionals.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'editorial', ['microsoft-365-privacy-controls'], 'El nivell de diagnòstic ve preseleccionat a «opcional» si l’administrador no el canvia, i l’opció «cap» no impedeix del tot l’enviament de dades des del dispositiu.'),
        darkPatternList: [
          {
            type: 'preselected',
            severity: 'low',
            description:
              'Les dades de diagnòstic opcionals s’envien per defecte llevat que es canviï la configuració, i triar «cap» no atura les dades de servei necessàries.',
            sources: ['microsoft-365-privacy-controls'],
          },
        ],
      },
      security: {
        e2ee: na('Un editor de documents col·laboratiu no transporta comunicacions privades entre persones.'),
        transportEncryption: f('yes', 'official', ['microsoft-trust-center-data-management']),
        atRestEncryption: f('yes', 'official', ['microsoft-trust-center-data-management']),
        mfa: f('yes', 'official', ['microsoft-authenticator-method'], undefined, { methods: ['passkey', 'app-push', 'totp', 'hardware-key', 'sms', 'email'] }),
        independentAudits: f('yes', 'official', ['microsoft-iso-27001']),
        bugBounty: f('yes', 'official', ['microsoft-msrc-bounty']),
        vulnerabilityDisclosure: f('yes', 'official', ['microsoft-msrc-cvd']),
      },
      alternatives: [
        {
          app: 'google-docs',
          comparability: 'equivalent',
          rationale: 'Editor de text col·laboratiu amb les mateixes funcions bàsiques i aplicació mòbil.',
          tradeOffs: 'El tractament passa a un grup amb un negoci publicitari més central i el format natiu no és OOXML.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'La frase que val la pena rescatar de la documentació de Microsoft és que, encara que es triï el nivell «cap» de dades de diagnòstic, les dades de servei necessàries continuen sortint del dispositiu. És un límit estructural del producte, no una lletra petita anecdòtica.',
        openQuestions: [
          'Quines dades de servei necessàries envia exactament l’aplicació d’iOS quan el diagnòstic està desactivat?',
        ],
      },
    },

    /* ═══════════════════════════ Microsoft Edge ═══════════════════════════ */
    {
      slug: 'microsoft-edge',
      name: 'Microsoft Edge',
      company: 'microsoft',
      categories: ['navegadors', 'utilitats'],
      tagline: 'Prevenció de seguiment activada per defecte, però en el nivell intermedi i amb contingut declarat per a seguiment',
      summary:
        'Edge porta prevenció de seguiment activada de sèrie, però en el nivell «equilibrat», que bloqueja els rastrejadors de tercers de llocs que no has visitat i deixa passar la resta. L’etiqueta de l’App Store declara, a més, contingut de la persona usuària com a dada utilitzada per rastrejar-la entre aplicacions i llocs d’altres empreses. Els controls existeixen i estan ben documentats; el que no és protector és la configuració que ve de fàbrica.',
      platforms: ['ios', 'android', 'windows', 'macos', 'linux'],
      businessModel: 'advertising',
      jurisdiction: 'Irlanda',
      userBase: 'Centenars de milions de persones usuàries, amb quota molt superior a l’escriptori que al mòbil',
      links: {
        website: 'https://www.microsoft.com/edge',
        privacyPolicy: 'https://www.microsoft.com/en-us/privacy/privacystatement',
        privacyCenter: 'https://account.microsoft.com/privacy/',
        appStore: 'https://apps.apple.com/es/app/id1288723196',
      },
      accountRequired: f('no', 'official', ['microsoft-edge-privacy-whitepaper'], 'Es pot navegar sense iniciar la sessió; el compte només cal per sincronitzar dades entre dispositius.'),
      openSource: f('partial', 'official', ['microsoft-edge-privacy-whitepaper'], 'Es basa en el projecte lliure Chromium, però les capes pròpies de Microsoft són privatives.', { licence: 'Privativa sobre base Chromium' }),
      dataSummary:
        'L’historial de navegació és el document més revelador que genera una persona: hi consten les consultes de salut, les cerques de feina, les creences i les compres. Edge el vincula a la identitat quan s’inicia la sessió, i, si s’activa la personalització, l’envia a Microsoft per adaptar-hi els anuncis, les notícies i la cerca durant 180 dies.',
      dataCollection: [
        row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['microsoft-edge-app-store', 'microsoft-edge-privacy-whitepaper'], note: 'Amb la personalització activada, l’activitat de navegació s’envia a Microsoft i es conserva fins a 180 dies per personalitzar Bing, Microsoft News, els anuncis i els resultats de cerca.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['microsoft-edge-privacy-whitepaper'], note: 'Els caràcters escrits a la barra d’adreces s’envien per defecte al cercador predeterminat; amb Bing s’hi afegeix un identificador de navegador reinicialitzable.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['microsoft-edge-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte', 'seguretat-i-prevencio-del-frau'], sources: ['microsoft-edge-app-store', 'microsoft-edge-privacy-whitepaper'], note: 'El diagnòstic opcional inclou els llocs visitats i es guarda fins a dos anys als servidors de Microsoft.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['microsoft-edge-app-store'], note: 'L’etiqueta les declara com a dades no vinculades a la identitat.' }),
        row('contrasenya', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['microsoft-edge-privacy-whitepaper'], note: 'El monitor de contrasenyes les compara xifrades amb llistes de credencials filtrades i no les conserva al servidor un cop feta la comprovació.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-edge-privacy-whitepaper'], note: 'La sincronització inclou la informació de pagament desada al navegador.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['microsoft-edge-privacy-whitepaper'], note: 'La prevenció de seguiment ve al nivell «equilibrat», que no bloqueja tots els rastrejadors.' }),
        row('fitxers-i-documents', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['microsoft-edge-app-store'], note: 'El contingut de la persona usuària és la categoria que l’etiqueta declara com a utilitzada per rastrejar-la en aplicacions i llocs d’altres empreses.' }),
        row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['microsoft-edge-privacy-whitepaper'], note: 'Només si s’inicia la sessió per sincronitzar.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['microsoft-edge-app-store'], 'L’etiqueta declara contingut de la persona usuària com a dada utilitzada per rastrejar-la en aplicacions i llocs web propietat d’altres empreses.'),
        advertisingIdentifiers: f('partial', 'official', ['microsoft-edge-privacy-whitepaper'], 'No s’hi declara l’identificador publicitari del sistema, però amb Bing com a cercador s’hi afegeix un identificador de navegador reinicialitzable.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['microsoft-edge-privacy-whitepaper'], 'El navegador bloqueja una part dels rastrejadors de tercers segons el nivell de prevenció de seguiment, que per defecte és l’intermedi.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['microsoft-edge-privacy-whitepaper', 'microsoft-ad-settings'], 'Amb la personalització activada, l’activitat de navegació personalitza els anuncis, Bing i Microsoft News. Es desactiva des de la configuració del navegador o des del panell de publicitat del compte.', {
          optOutUrl: 'https://account.microsoft.com/privacy/ad-settings',
        }),
        profiling: f('yes', 'official', ['microsoft-edge-privacy-whitepaper', 'microsoft-ad-settings'], 'L’historial de navegació alimenta un perfil d’interessos editable des del panell de publicitat.'),
        aiTraining: unknown('No hem trobat cap declaració específica sobre l’ús de les dades de navegació d’Edge per entrenar models d’IA.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['microsoft-privacy-statement', 'microsoft-edge-privacy-whitepaper'], 'Els caràcters escrits a la barra d’adreces s’envien al cercador predeterminat, i la declaració del grup cita Xandr, Facebook, Media.net i Outbrain com a socis publicitaris.'),
        intraGroupSharing: f('yes', 'official', ['microsoft-edge-privacy-whitepaper'], 'L’activitat de navegació es comparteix amb Bing i amb Microsoft News dins del grup.'),
        dataBrokerSales: f('no', 'official', ['microsoft-ad-settings'], 'Microsoft ofereix un control per deixar de compartir dades amb tercers amb finalitat publicitària i declara que respecta el senyal Global Privacy Control.'),
        internationalTransfers: f('yes', 'official', ['microsoft-privacy-statement'], 'Transferències als Estats Units emparades en clàusules contractuals tipus i en el marc de privadesa de dades UE-EUA.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: f('yes', 'official', ['microsoft-law-enforcement-report'], 'Informe semestral de peticions d’autoritats del grup.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['microsoft-edge-privacy-whitepaper'], 'El document tècnic dona terminis concrets: dos anys per al diagnòstic opcional i 180 dies per a l’activitat de navegació emprada en la personalització.'),
        dataAfterDeletion: f('partial', 'official', ['microsoft-privacy-dashboard'], 'L’historial associat al compte es pot esborrar des del panell de privadesa; les dades locals es queden al dispositiu fins que se’n buida la memòria cau.'),
        periods: [
          { dataType: 'dades-de-diagnostic', period: 'Fins a 2 anys als servidors de Microsoft abans de l’agregació.', sources: ['microsoft-edge-privacy-whitepaper'] },
          { dataType: 'historial-de-navegacio', period: '180 dies quan s’envia a Microsoft per a la personalització.', sources: ['microsoft-edge-privacy-whitepaper'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['microsoft-close-account', 'microsoft-edge-privacy-whitepaper'], 'Es pot fer servir el navegador sense compte; si se n’ha iniciat la sessió, es tanca el compte de Microsoft.'),
        selfService: f('yes', 'official', ['microsoft-close-account']),
        directUrl: 'https://account.microsoft.com/closeaccount',
        difficulty: 'easy',
        waitingPeriodDays: 60,
        steps: [
          'Desactiva la sincronització des de Configuració, Perfils, Sincronització.',
          'Esborra l’historial de navegació, de cerca i d’ubicació associat al compte des del panell de privadesa de Microsoft.',
          'Tanca la sessió al navegador i desinstal·la l’aplicació.',
          'Si vols eliminar també el compte, obre la pàgina de tancament del compte de Microsoft, marca les caselles i tria la finestra de reobertura de 30 o de 60 dies.',
        ],
        obstacles: 'Cap obstacle rellevant: el navegador funciona sense compte i l’historial associat es pot esborrar des d’un panell públic.',
        dataRetained: 'Les dades de diagnòstic opcionals ja recollides es conserven fins a dos anys abans d’agregar-se.',
        sources: ['microsoft-close-account', 'microsoft-edge-privacy-whitepaper', 'microsoft-privacy-dashboard'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['microsoft-privacy-dashboard'], 'El panell de privadesa permet veure i descarregar l’historial de navegació, de cerca i d’ubicació associat al compte.', {
          url: 'https://account.microsoft.com/privacy/',
        }),
        exportFormatQuality: 'mixed',
        rightsExercise: f('yes', 'official', ['microsoft-privacy-statement'], undefined, { responseTimeDays: 30 }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['microsoft-edge-privacy-whitepaper', 'microsoft-ad-settings'], 'Interruptor a Configuració, Privadesa, cerca i serveis, Personalització i publicitat, i panell de publicitat del compte.', {
          url: 'https://account.microsoft.com/privacy/ad-settings',
        }),
        telemetryOptOut: f('yes', 'official', ['microsoft-edge-privacy-whitepaper'], 'Interruptor explícit per deixar d’enviar dades de diagnòstic opcionals; només es recullen amb permís de la persona.'),
        granularControls: f('yes', 'official', ['microsoft-edge-privacy-whitepaper'], 'Controls separats per a la prevenció de seguiment, els suggeriments de la barra d’adreces, la sincronització, SmartScreen, les contrasenyes i la personalització.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'editorial', ['microsoft-edge-privacy-whitepaper'], 'La prevenció de seguiment ve al nivell intermedi i no a l’estricte, i els caràcters escrits a la barra d’adreces s’envien per defecte al cercador. Cap de les dues decisions s’explica en el primer arrencament.'),
        darkPatternList: [
          {
            type: 'preselected',
            severity: 'medium',
            description:
              'La prevenció de seguiment arriba configurada al nivell «equilibrat» i els suggeriments de la barra d’adreces envien el que escrius al cercador predeterminat sense que calgui activar-ho.',
            sources: ['microsoft-edge-privacy-whitepaper'],
          },
        ],
      },
      security: {
        e2ee: na('Un navegador no transporta comunicacions privades pròpies; la seguretat del transport la posa cada lloc web.'),
        transportEncryption: f('yes', 'official', ['microsoft-edge-privacy-whitepaper'], 'L’activitat que s’envia a Microsoft viatja per HTTPS i les dades sincronitzades es xifren als servidors.'),
        atRestEncryption: f('yes', 'official', ['microsoft-edge-privacy-whitepaper'], 'Les dades de sincronització es xifren al servidor i les credencials desades es xifren al dispositiu.'),
        mfa: f('yes', 'official', ['microsoft-authenticator-method'], 'El compte de Microsoft que sincronitza el navegador admet claus d’accés i verificació en dos passos.', {
          methods: ['passkey', 'app-push', 'totp', 'hardware-key', 'sms', 'email'],
        }),
        independentAudits: f('yes', 'official', ['microsoft-iso-27001'], 'Els serveis al núvol que hi ha al darrere estan certificats segons la norma ISO/IEC 27001.'),
        bugBounty: f('yes', 'official', ['microsoft-msrc-bounty'], 'Cobert pels programes de recompenses de Microsoft.'),
        vulnerabilityDisclosure: f('yes', 'official', ['microsoft-msrc-cvd']),
      },
      alternatives: [
        {
          app: 'firefox',
          comparability: 'equivalent',
          rationale: 'Navegador de codi obert amb protecció millorada contra el seguiment activada per defecte i sense negoci publicitari propi lligat a l’historial.',
          tradeOffs: 'Menys integració amb l’ecosistema de Microsoft i amb la sincronització del compte corporatiu.',
        },
        {
          app: 'brave',
          comparability: 'equivalent',
          rationale: 'Bloqueig de rastrejadors i d’anuncis actiu de sèrie, sobre la mateixa base Chromium que Edge.',
          tradeOffs: 'Incorpora funcions pròpies de publicitat i de criptomonedes que convé revisar.',
        },
        {
          app: 'duckduckgo',
          comparability: 'partial',
          rationale: 'Navegador orientat a la privadesa amb bloqueig de rastrejadors i cerca sense perfilat.',
          tradeOffs: 'Menys extensions i funcions d’escriptori que Edge.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'El document tècnic de privadesa d’Edge és dels més detallats que hem vist en aquesta onada i mereix reconeixement: dona terminis concrets i la ruta exacta de cada control. Això fa encara més visible el contrast amb la configuració de fàbrica, que deixa la prevenció de seguiment en el nivell intermedi.',
        openQuestions: [
          'Quin contingut de la persona usuària declara exactament l’etiqueta de l’App Store com a dada utilitzada per rastrejar-la?',
        ],
      },
    },
  ],

  incidents: [
    {
      slug: 'outlook-storm-0558',
      title: 'Accés no autoritzat al correu de vora 25 organitzacions amb testimonis falsificats (Storm-0558)',
      type: 'breach',
      severity: 'high',
      apps: ['outlook'],
      company: 'microsoft',
      occurredAt: '2023-05-15',
      disclosedAt: '2023-07-11',
      description:
        'Un actor d’origen xinès identificat per Microsoft com a Storm-0558 va falsificar testimonis d’autenticació amb una clau de signatura de comptes de Microsoft obtinguda indegudament. Un error de validació al codi de Microsoft va permetre que aquella clau signés testimonis vàlids tant per a comptes personals com per a comptes de Microsoft Entra ID. Amb aquests testimonis, l’actor va accedir al correu a través d’Outlook Web Access i d’Outlook.com i en va extreure missatges, adjunts i informació de carpetes amb scripts contra l’API del servei. Microsoft ho va detectar el 16 de juny del 2023 arran de l’avís d’un client, va revocar totes les claus de signatura actives i va donar per bloquejada l’activitat el 29 de juny.',
      affectedPeople: 'Aproximadament 25 organitzacions, entre elles organismes públics, i comptes personals relacionats',
      sources: ['microsoft-storm-0558'],
    },
  ],

  storeIds: {
    'microsoft-teams': 'com.microsoft.skype.teams',
    'microsoft-authenticator': 'com.microsoft.azureauthenticator',
    outlook: 'com.microsoft.Office.Outlook',
    'microsoft-copilot': 'com.microsoft.officemobile',
    'microsoft-word': 'com.microsoft.Office.Word',
    'microsoft-edge': 'com.microsoft.msedge',
  },
}
