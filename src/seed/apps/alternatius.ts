import { f, na, row, unknown } from '../helpers'
import type { AppSeed } from '../types'

/**
 * Serveis que sovint es presenten com a alternatives.
 *
 * Es documenten amb el mateix rigor i el mateix escepticisme que la resta: no
 * n'hi ha prou que una empresa digui que respecta la privadesa. Telegram és
 * aquí precisament perquè la seva reputació de servei privat no coincideix amb
 * el que fa per defecte.
 */
export const alternativeApps: AppSeed[] = [
  /* ═══════════════════════════ Telegram ═══════════════════════════ */
  {
    slug: 'telegram',
    name: 'Telegram',
    company: 'telegram',
    categories: ['missatgeria', 'comunitats-i-forums'],
    tagline: 'Missatgeria al núvol sense xifratge d’extrem a extrem per defecte',
    summary:
      'Telegram té fama de servei privat, però els xats normals, els grups i els canals no estan xifrats d’extrem a extrem. Es desen als servidors de Telegram, que hi té accés tècnic. El xifratge complet només existeix als xats secrets, que cal iniciar expressament, no funcionen en grup i no se sincronitzen entre dispositius.',
    platforms: ['ios', 'android', 'web', 'windows', 'macos', 'linux'],
    businessModel: 'freemium',
    jurisdiction: 'Illes Verges Britàniques, amb operació als Emirats Àrabs Units',
    userBase: 'Més de 1.000 milions de persones usuàries mensuals',
    links: {
      website: 'https://telegram.org/',
      privacyPolicy: 'https://telegram.org/privacy',
      terms: 'https://telegram.org/tos',
    },
    accountRequired: f('yes', 'official', ['telegram-privacy-policy'], 'Cal un número de telèfon. Existeixen números anònims de pagament comprats amb criptomoneda, però no és el camí habitual.'),
    openSource: f('partial', 'official', ['telegram-faq'], 'Els clients són de codi obert i publicats amb llicència GPL, però el codi del servidor és privatiu. Com que els xats no secrets es desxifren al servidor, no es pot verificar què passa amb els missatges.', {
      repositoryUrl: 'https://github.com/telegramdesktop/tdesktop',
      licence: 'GPL-3.0 per als clients; servidor privatiu',
    }),
    dataSummary:
      'Telegram declara poques dades (número, contactes, nom), però conserva al núvol tot el contingut dels xats no secrets i hi té accés.',
    dataCollection: [
      row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['telegram-privacy-policy'] }),
      row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['telegram-privacy-policy'] }),
      row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['telegram-privacy-policy', 'telegram-faq'], note: 'Els xats normals es desen xifrats al núvol, però amb claus que Telegram controla. Només els xats secrets tenen xifratge d’extrem a extrem.' }),
      row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['telegram-privacy-policy'] }),
      row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['telegram-privacy-policy'] }),
      row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['telegram-privacy-policy'] }),
      row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['telegram-privacy-policy'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['telegram-privacy-policy'], note: 'Es conserva fins a 12 mesos i es pot lliurar a autoritats en casos de terrorisme confirmats per ordre judicial.' }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['telegram-privacy-policy'] }),
      row('interaccions-i-us', 'unknown', { linked: 'unknown', tracking: 'no', shared: 'none', sources: ['telegram-privacy-policy'], note: 'La política no detalla quines dades d’ús del producte es recullen.', level: 'unknown' }),
      row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['telegram-privacy-policy'], note: 'Només si es fa servir la funció de persones properes o es comparteix la ubicació.' }),
      row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['telegram-privacy-policy'] }),
      row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['telegram-privacy-policy'] }),
      row('historial-de-navegacio', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['telegram-privacy-policy'] }),
    ],
    tracking: {
      crossAppTracking: f('no', 'official', ['telegram-privacy-policy']),
      advertisingIdentifiers: f('no', 'official', ['telegram-privacy-policy']),
      thirdPartyTrackersPresent: f('no', 'official', ['telegram-privacy-policy']),
    },
    dataUses: {
      targetedAdvertising: f('partial', 'official', ['telegram-privacy-policy'], 'La publicitat en canals públics grans es basa en el tema del canal, no en dades personals. Existeix un sistema opcional que sí que fa servir dades del compte, amb consentiment.'),
      profiling: f('no', 'official', ['telegram-privacy-policy'], 'Telegram declara que no elabora perfils publicitaris de les persones usuàries.'),
      aiTraining: unknown('La política no diu res sobre l’ús de contingut per entrenar models.'),
    },
    sharing: {
      thirdPartySharing: f('partial', 'official', ['telegram-privacy-policy'], 'Proveïdors de pagament i, en supòsits taxats, autoritats judicials.'),
      intraGroupSharing: na('Telegram no forma part d’un grup amb altres serveis de consum.'),
      dataBrokerSales: f('no', 'official', ['telegram-privacy-policy']),
      internationalTransfers: f('yes', 'official', ['telegram-privacy-policy'], 'Els centres de dades estan distribuïts en diverses jurisdiccions i la política no en detalla els mecanismes de garantia per a l’Espai Econòmic Europeu.', {
        mechanism: 'unknown',
      }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('partial', 'official', ['telegram-faq'], 'Telegram publica dades de peticions ateses a través d’un bot, no d’un informe estructurat.'),
    },
    retention: {
      definedPeriods: f('partial', 'official', ['telegram-privacy-policy'], 'Es fixa un límit de 12 mesos per a les adreces IP i els identificadors de dispositiu, però el contingut es conserva indefinidament al núvol.'),
      dataAfterDeletion: f('yes', 'official', ['telegram-account-deletion-api'], 'L’eliminació del compte esborra tots els missatges, grups i contactes de manera immediata i irreversible, incloent-hi els missatges enviats a altres persones.'),
      periods: [
        { dataType: 'adreca-ip', period: 'Fins a 12 mesos', sources: ['telegram-privacy-policy'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['telegram-delete-account']),
      selfService: f('yes', 'official', ['telegram-delete-account'], 'Es pot fer des de l’aplicació o des del web my.telegram.org.'),
      directUrl: 'https://my.telegram.org/auth?to=delete',
      difficulty: 'easy',
      waitingPeriodDays: 0,
      requiresSupportContact: false,
      steps: [
        'Entra a my.telegram.org amb el número de telèfon i el codi que rebràs a l’aplicació.',
        'Tria «Delete account».',
        'Escriu el motiu, si vols, i confirma.',
      ],
      obstacles:
        'L’eliminació és immediata i irreversible, sense període de gràcia. Cal exportar abans el que es vulgui conservar. Telegram també elimina automàticament els comptes inactius, amb un termini configurable.',
      dataRetained:
        'Segons la documentació, els missatges enviats també s’esborren dels dispositius de les altres persones, cosa poc habitual.',
      sources: ['telegram-delete-account', 'telegram-account-deletion-api'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['telegram-faq'], 'L’aplicació d’escriptori permet exportar tot l’historial en HTML o JSON.', {
        url: 'https://telegram.org/faq',
      }),
      exportFormatQuality: 'open',
      rightsExercise: f('partial', 'official', ['telegram-privacy-policy'], 'Hi ha una adreça de contacte per a protecció de dades, però no un procediment documentat.', {
        url: 'mailto:dpo@telegram.org',
      }),
    },
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['telegram-privacy-policy'], 'La publicitat basada en dades del compte és opcional i està desactivada per defecte a Europa.'),
      telemetryOptOut: na('Telegram no declara recollida de telemetria de producte.'),
      granularControls: f('yes', 'official', ['telegram-privacy-policy'], 'Controls detallats de visibilitat del número, de l’última connexió, de qui pot afegir-te a grups i temporitzadors d’autodestrucció.'),
      defaultPosture: 'mixed',
      darkPatterns: f('partial', 'editorial', ['telegram-faq'], 'La interfície presenta el servei com a segur sense advertir que els xats normals no tenen xifratge d’extrem a extrem, i el xat secret està amagat en un submenú.'),
      darkPatternList: [
        {
          type: 'confusing-language',
          severity: 'high',
          description:
            'La comunicació del servei associa Telegram amb la privadesa sense deixar clar que el xifratge d’extrem a extrem només s’aplica als xats secrets, que no són el comportament per defecte ni funcionen en grups.',
          sources: ['telegram-faq'],
        },
      ],
    },
    security: {
      e2ee: f('partial', 'official', ['telegram-faq'], 'Només als xats secrets individuals, que cal iniciar expressament i no se sincronitzen entre dispositius. Els xats normals, els grups i els canals es desxifren al servidor.', {
        scope: 'partial-optin',
        protocol: 'MTProto 2.0',
      }),
      transportEncryption: f('yes', 'official', ['telegram-faq']),
      atRestEncryption: f('yes', 'official', ['telegram-faq'], 'Telegram afirma que les claus i les dades es reparteixen entre jurisdiccions perquè cap sol·licitud d’un sol estat hi doni accés complet. Es tracta d’una garantia organitzativa, sense base criptogràfica.'),
      mfa: f('yes', 'official', ['telegram-faq'], 'Verificació en dos passos amb contrasenya addicional.', {
        methods: ['app-push'],
      }),
      independentAudits: f('partial', 'independent', ['telegram-faq'], 'MTProto ha estat analitzat per la comunitat acadèmica amb resultats desiguals, i el servidor no és auditable perquè el codi no és públic.'),
      bugBounty: f('yes', 'official', ['telegram-faq'], undefined, { url: 'https://core.telegram.org/bug-bounty' }),
      vulnerabilityDisclosure: f('partial', 'official', ['telegram-faq']),
    },
    alternatives: [
      {
        app: 'signal',
        comparability: 'partial',
        rationale:
          'Cobreix la missatgeria individual i de grup amb xifratge d’extrem a extrem sempre actiu, que Telegram no ofereix per defecte.',
        tradeOffs:
          'No té canals massius, ni bots, ni emmagatzematge al núvol il·limitat, que són els motius pels quals molta gent fa servir Telegram.',
      },
    ],
    review: {
      researchStatus: 'in-depth',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'La reputació de privadesa de Telegram no es correspon amb el seu comportament per defecte, i un resum superficial no ho detecta. La puntuació de privadesa és moderada perquè recull poques dades, però la de seguretat baixa pel xifratge parcial.',
      openQuestions: [
        'Quantes peticions d’autoritats ha atès Telegram des del canvi de política de 2024?',
      ],
    },
  },

  /* ═══════════════════════════ Signal ═══════════════════════════ */
  {
    slug: 'signal',
    name: 'Signal',
    company: 'signal-foundation',
    categories: ['missatgeria'],
    tagline: 'Missatgeria xifrada amb minimització de metadades',
    summary:
      'Signal està dissenyat per conservar el mínim de dades de qui l’utilitza. No té model publicitari, no desa l’agenda al servidor, amaga fins i tot qui envia cada missatge i publica tot el codi, del client i del servidor. Quan el 2022 van accedir a Twilio, el seu proveïdor d’SMS, gairebé no hi havia dades per robar.',
    platforms: ['ios', 'android', 'windows', 'macos', 'linux'],
    businessModel: 'donations',
    jurisdiction: 'Estats Units',
    userBase: 'Al voltant de 100 milions de persones usuàries',
    links: {
      website: 'https://signal.org/',
      privacyPolicy: 'https://signal.org/legal/',
      terms: 'https://signal.org/legal/',
    },
    accountRequired: f('yes', 'official', ['signal-privacy-policy'], 'Cal un número de telèfon, tot i que des de 2024 es pot amagar darrere d’un nom d’usuari.'),
    openSource: f('yes', 'official', ['signal-github'], 'Client i servidor són de codi obert i auditables. El protocol Signal és l’estàndard de facto del xifratge de missatgeria i l’han adoptat WhatsApp i Meta.', {
      repositoryUrl: 'https://github.com/signalapp',
      licence: 'AGPL-3.0 i GPL-3.0',
    }),
    dataSummary:
      'Signal declara conservar només el número de telèfon, la data de creació del compte i la data de darrera connexió. Aquesta llista s’ha pogut comprovar públicament diverses vegades a través de les respostes judicials que la fundació publica.',
    dataCollection: [
      row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['signal-privacy-policy'], note: 'És l’única dada identificativa que Signal desa. Des de 2024 es pot ocultar a la resta de persones usuàries amb un nom d’usuari.' }),
      row('contingut-de-missatges', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['signal-docs'], note: 'Xifrat d’extrem a extrem. Signal no hi té accés en cap moment.' }),
      row('metadades-de-comunicacio', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['signal-docs'], note: 'El remitent segellat amaga a Signal qui envia cada missatge.' }),
      row('llista-de-contactes', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['signal-docs'], note: 'El descobriment de contactes es fa amb enclavaments segurs i resums criptogràfics; l’agenda no arriba mai en clar al servidor.' }),
      row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['signal-privacy-policy'] }),
      row('fotografies-i-videos', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['signal-docs'] }),
      row('adreca-ip', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['signal-privacy-policy'], note: 'Necessària per encaminar el trànsit, però no es desa associada al compte. Les trucades es poden encaminar pel servidor per amagar-la.' }),
      row('informacio-del-dispositiu', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['signal-privacy-policy'] }),
      row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['signal-privacy-policy'] }),
      row('interaccions-i-us', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['signal-privacy-policy'] }),
      row('ubicacio-precisa', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['signal-privacy-policy'] }),
      row('galetes-i-identificadors-web', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['signal-privacy-policy'] }),
      row('dades-de-pagament', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['signal-privacy-policy'], note: 'Les donacions es processen per separat i no es vinculen al compte.' }),
      row('historial-de-navegacio', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['signal-privacy-policy'] }),
    ],
    tracking: {
      crossAppTracking: f('no', 'official', ['signal-privacy-policy']),
      advertisingIdentifiers: f('no', 'official', ['signal-privacy-policy']),
      thirdPartyTrackersPresent: f('no', 'independent', ['signal-github'], 'El codi és públic i s’ha verificat repetidament que no incorpora biblioteques de rastreig.'),
    },
    dataUses: {
      targetedAdvertising: na('Signal no té publicitat: es finança amb donacions.'),
      profiling: f('no', 'official', ['signal-privacy-policy'], 'No hi ha dades suficients al servidor per elaborar cap perfil.'),
      aiTraining: f('no', 'official', ['signal-privacy-policy'], 'El contingut és inaccessible per a Signal, de manera que no es pot fer servir per entrenar models.'),
    },
    sharing: {
      thirdPartySharing: f('no', 'official', ['signal-privacy-policy'], 'Les respostes a requeriments judicials publicades mostren que Signal només pot lliurar la data d’alta i la de darrera connexió.'),
      intraGroupSharing: na('Signal no forma part de cap grup empresarial.'),
      dataBrokerSales: f('no', 'official', ['signal-privacy-policy']),
      internationalTransfers: f('partial', 'official', ['signal-privacy-policy'], 'La infraestructura és als Estats Units, però el que s’hi transfereix és contingut xifrat que el proveïdor no pot llegir.', {
        mechanism: 'derogation',
      }),
    },
    transparency: {
      policyClarity: 'high',
      transparencyReport: f('yes', 'official', ['signal-privacy-policy'], 'Signal publica les respostes íntegres als requeriments judicials que rep.', {
        url: 'https://signal.org/bigbrother/',
      }),
    },
    retention: {
      definedPeriods: f('yes', 'official', ['signal-privacy-policy'], 'No hi ha res a retenir més enllà del número, la data d’alta i la de darrera connexió.'),
      dataAfterDeletion: f('yes', 'official', ['signal-delete-account'], 'L’eliminació és immediata i completa. Els comptes inactius s’eliminen automàticament als 120 dies.'),
      periods: [
        { period: 'Eliminació automàtica als 120 dies d’inactivitat', sources: ['signal-delete-account'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['signal-delete-account']),
      selfService: f('yes', 'official', ['signal-delete-account']),
      directUrl: 'https://support.signal.org/hc/en-us/articles/360007061192-Delete-Account',
      difficulty: 'easy',
      waitingPeriodDays: 0,
      requiresSupportContact: false,
      steps: [
        'Obre Signal i entra a Configuració.',
        'Ves a Compte i tria «Suprimeix el compte».',
        'Introdueix el número de telèfon i confirma.',
      ],
      obstacles:
        'Cap. Si has perdut l’accés al dispositiu, el compte s’elimina sol al cap de 120 dies d’inactivitat.',
      dataRetained:
        'Els missatges que has enviat resten als dispositius de les altres persones fins que els esborrin o expirin.',
      sources: ['signal-delete-account'],
    },
    userRights: {
      dataExport: f('partial', 'official', ['signal-docs'], 'L’aplicació d’escriptori permet fer còpies locals; no hi ha exportació des del servidor perquè no hi ha res desat.', {
        url: 'https://support.signal.org/',
      }),
      exportFormatQuality: 'mixed',
      rightsExercise: f('yes', 'official', ['signal-privacy-policy'], undefined, {
        url: 'https://support.signal.org/hc/en-us/requests/new',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: na('No hi ha publicitat.'),
      telemetryOptOut: f('yes', 'official', ['signal-privacy-policy'], 'La recollida opcional de dades d’ús està desactivada per defecte.'),
      granularControls: f('yes', 'official', ['signal-docs'], 'Missatges temporals, bloqueig de pantalla, ocultació del número, relé de trucades i bloqueig de registre.'),
      defaultPosture: 'protective',
      darkPatterns: f('no', 'independent', ['signal-github'], 'La interfície no empeny cap a cap opció menys protectora; les opcions més segures són les predeterminades.'),
    },
    security: {
      e2ee: f('yes', 'official', ['signal-docs'], 'Xifratge d’extrem a extrem sempre actiu per a missatges, trucades, grups i còpies de seguretat, amb secret cap endavant i el remitent segellat per protegir també les metadades.', {
        scope: 'all-default',
        protocol: 'Signal Protocol (Double Ratchet i X3DH)',
      }),
      transportEncryption: f('yes', 'official', ['signal-docs']),
      atRestEncryption: f('yes', 'official', ['signal-docs'], 'Les còpies de seguretat es xifren amb una clau que només té la persona usuària.'),
      mfa: f('yes', 'official', ['signal-docs'], 'PIN de registre que impedeix el segrest del compte per part de qui controli el número.', {
        methods: ['app-push'],
      }),
      independentAudits: f('yes', 'independent', ['signal-docs'], 'El protocol Signal ha estat objecte de múltiples anàlisis formals acadèmiques, i el codi complet és auditable per qualsevol persona.', {
        url: 'https://signal.org/docs/',
      }),
      bugBounty: f('partial', 'official', ['signal-github'], 'Hi ha un canal de comunicació de vulnerabilitats, però no un programa de recompenses formal i permanent.'),
      vulnerabilityDisclosure: f('yes', 'official', ['signal-github']),
    },
    review: {
      researchStatus: 'in-depth',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'L’incident de Twilio de 2022 puntua com a incident real, però la seva gravetat és baixa i el disseny del servei en va limitar l’abast. Queda registrat perquè mostra que un servei ben dissenyat no evita els atacs, però en redueix les conseqüències.',
    },
  },

  /* ═══════════════════════════ Proton Mail ═══════════════════════════ */
  {
    slug: 'proton-mail',
    name: 'Proton Mail',
    company: 'proton',
    categories: ['correu-electronic'],
    tagline: 'Correu xifrat de coneixement zero amb seu a Suïssa',
    summary:
      'Proton Mail xifra els missatges de manera que la mateixa empresa no els pot llegir. Es pot comprovar perquè el codi dels clients és obert i hi ha auditories publicades. Té dues limitacions: els correus intercanviats amb proveïdors no xifrats no queden protegits d’extrem a extrem, i les metadades de qui escriu a qui són visibles per necessitat del protocol.',
    platforms: ['web', 'ios', 'android', 'windows', 'macos', 'linux'],
    businessModel: 'freemium',
    jurisdiction: 'Suïssa',
    userBase: 'Més de 100 milions de comptes',
    links: {
      website: 'https://proton.me/mail',
      privacyPolicy: 'https://proton.me/legal/privacy',
      terms: 'https://proton.me/legal/terms',
      privacyCenter: 'https://proton.me/legal/transparency',
    },
    accountRequired: f('yes', 'official', ['proton-privacy-policy'], 'Cal un compte, però es pot crear sense donar cap dada personal ni número de telèfon en la majoria de casos.'),
    openSource: f('yes', 'official', ['proton-privacy-policy'], 'Tots els clients són de codi obert i auditats de manera independent. La infraestructura del servidor no ho és, però com que el xifratge es fa al client, el servidor no pot llegir el contingut.', {
      repositoryUrl: 'https://github.com/ProtonMail',
      licence: 'GPL-3.0',
    }),
    dataSummary:
      'Proton desa els correus xifrats amb claus derivades de la contrasenya, de manera que no els pot desxifrar. El que sí que veu són les metadades: adreces de remitent i destinatari, assumpte en alguns casos i marques de temps.',
    dataCollection: [
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['proton-privacy-policy'] }),
      row('contingut-de-missatges', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['proton-mail-privacy'], note: 'Xifrat de coneixement zero: Proton no pot desxifrar-lo ni lliurar-lo desxifrat.' }),
      row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['proton-privacy-policy'], note: 'Remitent, destinatari i marques de temps són inevitables per encaminar el correu.' }),
      row('adreca-ip', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['proton-privacy-policy'], note: 'Per defecte no es registra. Es pot activar voluntàriament o pot ser ordenat per una autoritat suïssa en casos concrets.' }),
      row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['proton-privacy-policy'], note: 'Només com a mètode de verificació alternatiu en la creació del compte.' }),
      row('fitxers-i-documents', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['proton-mail-privacy'], note: 'Els adjunts es xifren igual que el cos del missatge.' }),
      row('llista-de-contactes', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['proton-mail-privacy'], note: 'Els contactes es desen xifrats.' }),
      row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['proton-privacy-policy'], note: 'Els plans de pagament admeten efectiu i criptomoneda per no vincular la identitat bancària.' }),
      row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['proton-privacy-policy'] }),
      row('interaccions-i-us', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['proton-privacy-policy'] }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['proton-privacy-policy'], note: 'Només galetes tècniques de sessió.' }),
      row('informacio-del-dispositiu', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['proton-privacy-policy'] }),
    ],
    tracking: {
      crossAppTracking: f('no', 'official', ['proton-privacy-policy']),
      advertisingIdentifiers: f('no', 'official', ['proton-privacy-policy']),
      thirdPartyTrackersPresent: f('no', 'official', ['proton-privacy-policy'], 'Proton bloqueja per defecte els píxels de seguiment dels correus rebuts, cosa que protegeix contra el rastreig de qui envia.'),
    },
    dataUses: {
      targetedAdvertising: na('Proton no té publicitat: es finança amb subscripcions.'),
      profiling: f('no', 'official', ['proton-privacy-policy']),
      aiTraining: f('no', 'official', ['proton-privacy-policy'], 'El contingut és inaccessible per a l’empresa. L’assistent de redacció es pot executar localment al dispositiu.'),
    },
    sharing: {
      thirdPartySharing: f('no', 'official', ['proton-privacy-policy'], 'Només processadors de pagament per als plans de subscripció.'),
      intraGroupSharing: na('Proton no comparteix dades amb altres empreses; els seus serveis són tots propis i del mateix compte.'),
      dataBrokerSales: f('no', 'official', ['proton-privacy-policy']),
      internationalTransfers: f('no', 'official', ['proton-privacy-policy'], 'Els servidors són a Suïssa i Alemanya, dins d’un marc de protecció equivalent.', {
        mechanism: 'none',
      }),
    },
    transparency: {
      policyClarity: 'high',
      transparencyReport: f('yes', 'official', ['proton-transparency'], 'Proton publica el nombre i el tipus de requeriments rebuts i què hi va poder lliurar.', {
        url: 'https://proton.me/legal/transparency',
      }),
    },
    retention: {
      definedPeriods: f('yes', 'official', ['proton-privacy-policy'], 'La política fixa terminis concrets i curts per a les poques dades que es conserven.'),
      dataAfterDeletion: f('yes', 'official', ['proton-delete-account'], 'L’eliminació del compte esborra totes les dades dels sistemes de manera permanent, sense període de gràcia.'),
    },
    accountDeletion: {
      possible: f('yes', 'official', ['proton-delete-account']),
      selfService: f('yes', 'official', ['proton-delete-account']),
      directUrl: 'https://proton.me/support/delete-account',
      difficulty: 'easy',
      waitingPeriodDays: 0,
      requiresSupportContact: false,
      steps: [
        'Entra al compte des del web i obre la configuració.',
        'Ves a Compte i contrasenya i tria «Suprimeix el compte».',
        'Indica el motiu, confirma amb la contrasenya i valida.',
      ],
      obstacles:
        'L’eliminació és immediata i irreversible. Cal exportar abans els correus que es vulguin conservar i alliberar l’adreça de qualsevol servei que en depengui.',
      dataRetained: 'Els correus enviats resten a les bústies de les persones destinatàries.',
      sources: ['proton-delete-account'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['proton-privacy-policy'], 'Eina d’exportació d’Easy Switch i possibilitat de descarregar les bústies en format estàndard.', {
        url: 'https://proton.me/support/export-emails-import-export-app',
      }),
      exportFormatQuality: 'open',
      rightsExercise: f('yes', 'official', ['proton-privacy-policy'], undefined, {
        url: 'mailto:privacy@proton.me',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: na('No hi ha publicitat.'),
      telemetryOptOut: f('yes', 'official', ['proton-privacy-policy'], 'La telemetria és mínima i es pot desactivar completament a la configuració.'),
      granularControls: f('yes', 'official', ['proton-privacy-policy'], 'Bloqueig de píxels, adreces d’un sol ús amb Hide My Email, xifratge de contactes i registre d’autenticació.'),
      defaultPosture: 'protective',
      darkPatterns: f('no', 'editorial', ['proton-delete-account'], 'El camí de sortida és accessible i està documentat, sense pantalles d’intercepció.'),
    },
    security: {
      e2ee: f('yes', 'official', ['proton-mail-privacy'], 'Xifratge de coneixement zero per als correus emmagatzemats i xifratge d’extrem a extrem entre comptes de Proton o amb persones que facin servir OpenPGP. Amb altres proveïdors, la protecció es limita al transport.', {
        scope: 'metadata-excluded',
        protocol: 'OpenPGP',
      }),
      transportEncryption: f('yes', 'official', ['proton-mail-privacy']),
      atRestEncryption: f('yes', 'official', ['proton-mail-privacy'], 'Xifratge amb claus derivades de la contrasenya de la persona usuària, que Proton no coneix.'),
      mfa: f('yes', 'official', ['proton-privacy-policy'], undefined, { methods: ['totp', 'hardware-key', 'passkey'] }),
      independentAudits: f('yes', 'independent', ['proton-privacy-policy'], 'Auditories de seguretat publicades per empreses externes per a totes les aplicacions.', {
        url: 'https://proton.me/blog/security-audit',
      }),
      bugBounty: f('yes', 'official', ['proton-privacy-policy'], undefined, { url: 'https://proton.me/security/bug-bounty' }),
      vulnerabilityDisclosure: f('yes', 'official', ['proton-privacy-policy']),
    },
    review: {
      researchStatus: 'in-depth',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'Proton no protegeix les metadades ni els correus intercanviats amb proveïdors no xifrats, i la fitxa ho recull.',
    },
  },

  /* ═══════════════════════════ DuckDuckGo ═══════════════════════════ */
  {
    slug: 'duckduckgo',
    name: 'DuckDuckGo',
    company: 'duckduckgo',
    categories: ['cercadors', 'navegadors'],
    tagline: 'Cerca sense perfil, finançada amb publicitat contextual',
    summary:
      'DuckDuckGo es finança amb publicitat sense perfilar: els anuncis es basen només en la paraula cercada, sense dades de qui la cerca. El 2022 es va descobrir que el seu navegador permetia rastrejadors de Microsoft per un acord contractual; l’incident consta a la fitxa.',
    platforms: ['web', 'ios', 'android', 'windows', 'macos'],
    businessModel: 'advertising',
    jurisdiction: 'Estats Units',
    userBase: 'Al voltant de 3.000 milions de cerques mensuals',
    links: {
      website: 'https://duckduckgo.com/',
      privacyPolicy: 'https://duckduckgo.com/privacy',
      terms: 'https://duckduckgo.com/terms',
    },
    accountRequired: f('no', 'official', ['ddg-privacy-policy'], 'No hi ha comptes. La sincronització opcional del navegador funciona amb una clau, no amb una identitat.'),
    openSource: f('partial', 'official', ['ddg-privacy-policy'], 'Les extensions i les aplicacions són de codi obert; l’índex de cerca i part de la infraestructura, no.', {
      repositoryUrl: 'https://github.com/duckduckgo',
      licence: 'Apache-2.0',
    }),
    dataSummary:
      'DuckDuckGo declara no recollir ni compartir informació personal. La cerca es fa sense identificador persistent i els resultats locals es calculen a partir d’una ubicació aproximada que es descarta immediatament.',
    dataCollection: [
      row('historial-de-cerca', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['ddg-privacy-policy'], note: 'Les consultes es desen de manera agregada i no associades a cap persona ni dispositiu.' }),
      row('adreca-ip', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['ddg-anonymous-local'], note: 'Es fa servir per estimar el país i es descarta immediatament; no es registra.' }),
      row('ubicacio-aproximada', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['ddg-anonymous-local'], note: 'Els resultats locals es demanen a través d’un intermediari que impedeix associar la consulta a la ubicació.' }),
      row('galetes-i-identificadors-web', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['ddg-privacy-policy'], note: 'Només galetes de preferències que no identifiquen.' }),
      row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['ddg-privacy-policy'] }),
      row('adreca-electronica', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['ddg-privacy-policy'] }),
      row('informacio-del-dispositiu', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['ddg-privacy-policy'] }),
      row('interessos-inferits', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['ddg-privacy-policy'] }),
      row('interaccions-i-us', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['ddg-privacy-policy'] }),
      row('historial-de-navegacio', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['ddg-privacy-policy'] }),
      row('ubicacio-precisa', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['ddg-anonymous-local'] }),
    ],
    tracking: {
      crossAppTracking: f('no', 'independent', ['ddg-privacy-policy', 'bleeping-ddg-microsoft-2022'], 'El navegador bloqueja rastrejadors de tercers. El 2022 es va descobrir una excepció contractual per als de Microsoft, que la companyia va reconèixer i posteriorment va eliminar.'),
      advertisingIdentifiers: f('no', 'official', ['ddg-privacy-policy']),
      thirdPartyTrackersPresent: f('no', 'official', ['ddg-privacy-policy']),
    },
    dataUses: {
      targetedAdvertising: f('no', 'official', ['ddg-privacy-policy'], 'Els anuncis són contextuals: es basen únicament en la paraula cercada en aquell moment.'),
      profiling: f('no', 'official', ['ddg-privacy-policy']),
      aiTraining: f('no', 'official', ['ddg-privacy-policy'], 'Les converses amb l’assistent no es fan servir per entrenar models i s’eliminen als 30 dies.'),
    },
    sharing: {
      thirdPartySharing: f('partial', 'independent', ['bleeping-ddg-microsoft-2022'], 'Els resultats provenen en part de Bing, cosa que implica una relació contractual amb Microsoft, tot i que les consultes s’encaminen sense identificar la persona.'),
      intraGroupSharing: na('DuckDuckGo no forma part de cap grup empresarial.'),
      dataBrokerSales: f('no', 'official', ['ddg-privacy-policy']),
      internationalTransfers: f('partial', 'official', ['ddg-privacy-policy'], 'La infraestructura és als Estats Units, però no s’hi transfereixen dades personals identificables.', {
        mechanism: 'none',
      }),
    },
    transparency: {
      policyClarity: 'high',
      transparencyReport: f('partial', 'official', ['ddg-privacy-policy'], 'No publica un informe periòdic estructurat, però documenta cada funció i el seu tractament de dades.'),
    },
    retention: {
      definedPeriods: f('yes', 'official', ['ddg-privacy-policy'], 'No hi ha històric personal a retenir.'),
      dataAfterDeletion: na('No hi ha compte ni dades associades a eliminar.'),
    },
    accountDeletion: {
      possible: na('DuckDuckGo no crea comptes de persona usuària.'),
      selfService: na('No hi ha compte.'),
      difficulty: 'unknown',
      requiresSupportContact: false,
      dataRetained: 'Cap dada personal, perquè no se’n desa cap associada a una persona.',
      sources: ['ddg-privacy-policy'],
    },
    userRights: {
      dataExport: na('No hi ha dades personals emmagatzemades per exportar.'),
      exportFormatQuality: 'unknown',
      rightsExercise: f('yes', 'official', ['ddg-privacy-policy'], undefined, {
        url: 'mailto:privacy@duckduckgo.com',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: na('La publicitat no és personalitzada, de manera que no hi ha res a desactivar.'),
      telemetryOptOut: f('yes', 'official', ['ddg-privacy-policy'], 'Les mètriques anònimes es poden desactivar a la configuració de les aplicacions.'),
      granularControls: f('yes', 'official', ['ddg-privacy-policy'], 'Bloqueig de rastrejadors, protecció del correu electrònic, botó de neteja de dades i xifratge forçat.'),
      defaultPosture: 'protective',
      darkPatterns: f('no', 'independent', ['ddg-privacy-policy']),
    },
    security: {
      e2ee: na('Un cercador no transporta comunicacions privades entre persones usuàries.'),
      transportEncryption: f('yes', 'official', ['ddg-privacy-policy'], 'Força les connexions xifrades sempre que el lloc de destinació ho permet.'),
      atRestEncryption: f('yes', 'official', ['ddg-privacy-policy']),
      mfa: na('No hi ha comptes que calgui protegir amb un segon factor.'),
      independentAudits: unknown('No consten auditories de seguretat independents publicades del cercador.'),
      bugBounty: f('yes', 'official', ['ddg-privacy-policy'], undefined, { url: 'https://hackerone.com/duckduckgo' }),
      vulnerabilityDisclosure: f('yes', 'official', ['ddg-privacy-policy']),
    },
    alternatives: [
      {
        app: 'brave',
        comparability: 'equivalent',
        rationale:
          'Brave Search cobreix la mateixa necessitat de cerca general sense perfilat i amb un índex propi, cosa que redueix la dependència d’un tercer per als resultats.',
        tradeOffs:
          'L’índex propi encara té menys cobertura en consultes molt específiques i en llengües minoritzades.',
      },
    ],
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'L’episodi de Microsoft de 2022 mostra que una promesa de privadesa pot tenir excepcions contractuals que no es veuen. L’empresa ho va reconèixer i corregir, i per això l’incident té una gravetat baixa.',
    },
  },

  /* ═══════════════════════════ Firefox ═══════════════════════════ */
  {
    slug: 'firefox',
    name: 'Firefox',
    company: 'mozilla-corporation',
    categories: ['navegadors'],
    tagline: 'Navegador independent amb sincronització xifrada d’extrem a extrem',
    summary:
      'Firefox és l’únic navegador majoritari que no pertany a una empresa que també ven publicitat o dispositius. La protecció contra el rastreig ve activada per defecte i la sincronització està xifrada d’extrem a extrem. Pel que fa al finançament, la major part dels ingressos de Mozilla prové de l’acord perquè Google sigui el cercador predeterminat.',
    platforms: ['windows', 'macos', 'linux', 'android', 'ios'],
    businessModel: 'donations',
    jurisdiction: 'Estats Units, amb filial europea a Alemanya',
    userBase: 'Al voltant de 180 milions de persones usuàries mensuals',
    links: {
      website: 'https://www.mozilla.org/firefox/',
      privacyPolicy: 'https://www.mozilla.org/en-US/privacy/firefox/',
      terms: 'https://www.mozilla.org/about/legal/terms/firefox/',
    },
    accountRequired: f('no', 'official', ['firefox-privacy-notice'], 'El navegador funciona sense compte; només cal per sincronitzar entre dispositius.'),
    openSource: f('yes', 'official', ['mozilla-source'], 'Tot el codi és públic i auditable, i el desenvolupament es fa en obert.', {
      repositoryUrl: 'https://github.com/mozilla-firefox/firefox',
      licence: 'MPL-2.0',
    }),
    dataSummary:
      'Firefox recull dades tècniques i d’interacció per defecte, però es poden desactivar del tot, i Mozilla es compromet a esborrar les ja recollides quan algú ho fa. L’historial de navegació no surt del dispositiu si no s’activa la sincronització, i si s’activa va xifrat.',
    dataCollection: [
      row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte', 'mesura-i-analisi-dus'], sources: ['firefox-telemetry-settings'], note: 'Es pot desactivar completament, i llavors Mozilla esborra les dades ja recollides.' }),
      row('historial-de-navegacio', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['mozilla-accounts-privacy'], note: 'Només surt del dispositiu si s’activa la sincronització, i llavors va xifrat d’extrem a extrem.' }),
      row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['mozilla-accounts-privacy'], note: 'Només si es crea un compte de Mozilla per sincronitzar.' }),
      row('adreca-ip', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['firefox-privacy-notice'], note: 'Es fa servir per a actualitzacions i navegació segura, i es descarta ràpidament.' }),
      row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['firefox-privacy-notice'] }),
      row('interaccions-i-us', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['firefox-telemetry-settings'] }),
      row('historial-de-cerca', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['firefox-privacy-notice'], note: 'Les cerques van al motor triat, no a Mozilla.' }),
      row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['firefox-privacy-notice'] }),
      row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['firefox-privacy-notice'], note: 'Només amb permís explícit per a un lloc concret.' }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['firefox-privacy-notice'], note: 'Les galetes de tercers estan aïllades per lloc amb la protecció total contra galetes.' }),
      row('fitxers-i-documents', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['firefox-privacy-notice'] }),
    ],
    tracking: {
      crossAppTracking: f('no', 'official', ['firefox-privacy-notice'], 'La protecció millorada contra el rastreig bloqueja rastrejadors, criptomineria i empremtes digitals per defecte.'),
      advertisingIdentifiers: f('no', 'official', ['firefox-privacy-notice']),
      thirdPartyTrackersPresent: f('no', 'official', ['firefox-privacy-notice']),
    },
    dataUses: {
      targetedAdvertising: f('partial', 'official', ['firefox-privacy-notice'], 'Les tessel·les patrocinades de la pàgina d’inici i les mesures d’atribució de privadesa preservada són publicitat, tot i que sense perfil individual. Es poden desactivar.', {
        optOutUrl: 'about:preferences#privacy',
      }),
      profiling: f('no', 'official', ['firefox-privacy-notice']),
      aiTraining: f('no', 'official', ['firefox-privacy-notice'], 'Les funcions d’intel·ligència artificial del navegador s’executen localment i el contingut no s’envia a Mozilla.'),
    },
    sharing: {
      thirdPartySharing: f('partial', 'official', ['firefox-privacy-notice'], 'Socis de la pàgina d’inici i proveïdors d’infraestructura, amb dades agregades.'),
      intraGroupSharing: f('partial', 'official', ['mozilla-accounts-privacy'], 'Compartició entre Mozilla Corporation i la fundació matriu per a finalitats de producte.'),
      dataBrokerSales: f('no', 'official', ['firefox-privacy-notice']),
      internationalTransfers: f('yes', 'official', ['firefox-privacy-notice'], undefined, { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'high',
      transparencyReport: f('yes', 'official', ['firefox-privacy-notice'], undefined, {
        url: 'https://www.mozilla.org/about/policy/transparency/',
      }),
    },
    retention: {
      definedPeriods: f('yes', 'official', ['firefox-telemetry-settings'], 'Mozilla documenta els terminis de conservació de les dades tècniques i permet sol·licitar-ne l’esborrat.'),
      dataAfterDeletion: f('yes', 'official', ['firefox-telemetry-settings'], 'Desactivar la telemetria es tracta com una sol·licitud d’esborrat de les dades ja recollides.'),
    },
    accountDeletion: {
      possible: f('yes', 'official', ['mozilla-accounts-privacy'], 'El compte de Mozilla, si se n’ha creat un, es pot eliminar des de la configuració.'),
      selfService: f('yes', 'official', ['mozilla-accounts-privacy']),
      directUrl: 'https://accounts.firefox.com/settings',
      difficulty: 'easy',
      waitingPeriodDays: 0,
      requiresSupportContact: false,
      steps: [
        'Entra a accounts.firefox.com amb el compte de Mozilla.',
        'Ves a la configuració del compte.',
        'Tria «Suprimeix el compte» i confirma amb la contrasenya.',
      ],
      obstacles: 'Cap. El navegador continua funcionant sense compte.',
      dataRetained: 'Les dades locals resten al dispositiu fins que s’esborren des del mateix navegador.',
      sources: ['mozilla-accounts-privacy'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['mozilla-accounts-privacy'], 'Les dades locals es poden exportar des del mateix navegador; les del compte, sol·licitant-ho.', {
        url: 'https://www.mozilla.org/privacy/',
      }),
      exportFormatQuality: 'open',
      rightsExercise: f('yes', 'official', ['firefox-privacy-notice'], undefined, {
        url: 'mailto:compliance@mozilla.com',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['firefox-privacy-notice'], undefined, { url: 'about:preferences#privacy' }),
      telemetryOptOut: f('yes', 'official', ['firefox-telemetry-settings'], 'Desactivable amb una sola casella, amb esborrat retroactiu de les dades ja recollides.'),
      granularControls: f('yes', 'official', ['firefox-privacy-notice'], 'Nivells de protecció contra el rastreig, contenidors, permisos per lloc i esborrat automàtic en tancar.'),
      defaultPosture: 'protective',
      darkPatterns: f('no', 'independent', ['firefox-privacy-notice'], 'Els paràmetres de privadesa són accessibles i no hi ha pantalles que empenyin a desactivar-los.'),
    },
    security: {
      e2ee: f('yes', 'official', ['mozilla-accounts-privacy'], 'La sincronització està xifrada d’extrem a extrem amb una clau derivada de la contrasenya del compte, de manera que Mozilla no pot llegir l’historial ni les contrasenyes desades.', {
        scope: 'all-default',
        protocol: 'onepw amb scrypt i PBKDF2',
      }),
      transportEncryption: f('yes', 'official', ['firefox-privacy-notice']),
      atRestEncryption: f('yes', 'official', ['mozilla-accounts-privacy']),
      mfa: f('yes', 'official', ['mozilla-accounts-privacy'], undefined, { methods: ['totp'] }),
      independentAudits: f('yes', 'independent', ['mozilla-source'], 'El codi és auditable per qualsevol persona i Mozilla encarrega revisions externes de components crítics.', {
        url: 'https://blog.mozilla.org/security/',
      }),
      bugBounty: f('yes', 'official', ['mozilla-source'], 'Un dels programes de recompenses més antics del sector.', {
        url: 'https://www.mozilla.org/security/bug-bounty/',
      }),
      vulnerabilityDisclosure: f('yes', 'official', ['mozilla-source'], 'Avisos de seguretat publicats amb cada versió.'),
    },
    alternatives: [
      {
        app: 'brave',
        comparability: 'equivalent',
        rationale:
          'Navegador complet amb bloqueig de rastrejadors per defecte i sincronització xifrada, basat en Chromium, de manera que la compatibilitat amb aplicacions web és màxima.',
        tradeOffs:
          'Fer servir Chromium reforça el domini del motor de Google al web, cosa que Firefox contraresta.',
      },
    ],
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'La dependència econòmica de Google és un risc estructural, però no és una pràctica de tractament de dades i, per tant, no penalitza cap indicador. S’explica a la descripció i no compta a la puntuació.',
    },
  },

  /* ═══════════════════════════ Brave ═══════════════════════════ */
  {
    slug: 'brave',
    name: 'Brave',
    company: 'brave-software',
    categories: ['navegadors', 'cercadors'],
    tagline: 'Navegador basat en Chromium amb bloqueig de rastrejadors per defecte',
    summary:
      'Brave ofereix la compatibilitat de Chromium amb el bloqueig de rastrejadors i anuncis activat de sèrie, i incorpora un cercador amb índex propi. També inclou un sistema publicitari propi i funcions de criptomoneda que cal desactivar, cosa que complica la configuració inicial.',
    platforms: ['windows', 'macos', 'linux', 'android', 'ios'],
    businessModel: 'freemium',
    jurisdiction: 'Estats Units',
    userBase: 'Al voltant de 90 milions de persones usuàries mensuals',
    links: {
      website: 'https://brave.com/',
      privacyPolicy: 'https://brave.com/privacy/browser/',
      terms: 'https://brave.com/terms-of-use/',
    },
    accountRequired: f('no', 'official', ['brave-browser-privacy'], 'El navegador i el cercador funcionen sense compte.'),
    openSource: f('yes', 'official', ['brave-github'], 'Codi obert i públic, basat en Chromium amb modificacions documentades.', {
      repositoryUrl: 'https://github.com/brave/brave-browser',
      licence: 'MPL-2.0',
    }),
    dataSummary:
      'Brave declara que el navegador està dissenyat per no saber qui ets ni quins llocs visites. Les mètriques que envia són agregades i, en el cas del sistema publicitari, es processen amb tècniques que impedeixen associar-les a una persona.',
    dataCollection: [
      row('historial-de-navegacio', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['brave-browser-privacy'], note: 'No surt del dispositiu; la sincronització opcional va xifrada amb una clau que Brave no coneix.' }),
      row('historial-de-cerca', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['brave-search-privacy'], note: 'El cercador no desa consultes associades a persones ni dispositius.' }),
      row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['brave-browser-privacy'], note: 'Mètriques agregades i anònimes, desactivables.' }),
      row('adreca-ip', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['brave-browser-privacy'], note: 'Necessària per a les connexions; no es registra associada a l’activitat.' }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['brave-browser-privacy'], note: 'Les galetes de tercers estan bloquejades per defecte.' }),
      row('identificador-publicitari', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['brave-browser-privacy'] }),
      row('interessos-inferits', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['publicitat-personalitzada'], sources: ['brave-browser-privacy'], note: 'El sistema Brave Ads, desactivat per defecte, calcula els interessos localment sense enviar-los.' }),
      row('adreca-electronica', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['brave-browser-privacy'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['brave-browser-privacy'] }),
      row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['brave-browser-privacy'] }),
      row('interaccions-i-us', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['brave-browser-privacy'] }),
    ],
    tracking: {
      crossAppTracking: f('no', 'official', ['brave-browser-privacy'], 'L’escut de Brave bloqueja rastrejadors, anuncis i empremtes digitals per defecte.'),
      advertisingIdentifiers: f('no', 'official', ['brave-browser-privacy']),
      thirdPartyTrackersPresent: f('no', 'official', ['brave-browser-privacy']),
    },
    dataUses: {
      targetedAdvertising: f('partial', 'official', ['brave-browser-privacy'], 'Brave Ads existeix però ve desactivat i, quan s’activa, la selecció d’anuncis es fa al dispositiu sense enviar el perfil.', {
        optOutUrl: 'brave://settings/rewards',
      }),
      profiling: f('no', 'official', ['brave-browser-privacy'], 'Els senyals d’interès, si n’hi ha, no surten del dispositiu.'),
      aiTraining: f('partial', 'official', ['brave-browser-privacy'], 'L’assistent Leo té una modalitat que no conserva les converses; algunes consultes s’encaminen a proveïdors externs de manera anònima.'),
    },
    sharing: {
      thirdPartySharing: f('partial', 'official', ['brave-browser-privacy'], 'Proveïdors de models per a l’assistent i xarxes de distribució de contingut, sense identificació de la persona.'),
      intraGroupSharing: na('Brave no forma part de cap grup empresarial.'),
      dataBrokerSales: f('no', 'official', ['brave-browser-privacy']),
      internationalTransfers: f('partial', 'official', ['brave-browser-privacy'], 'La infraestructura és als Estats Units; les dades transferides no permeten identificar la persona.', {
        mechanism: 'none',
      }),
    },
    transparency: {
      policyClarity: 'high',
      transparencyReport: f('partial', 'official', ['brave-browser-privacy'], 'Documenta el tractament funció a funció amb molt detall, però no publica un informe periòdic de peticions d’autoritats.'),
    },
    retention: {
      definedPeriods: f('yes', 'official', ['brave-browser-privacy'], 'Els pocs registres que hi ha tenen terminis curts i documentats.'),
      dataAfterDeletion: na('No hi ha compte ni perfil de servidor a eliminar.'),
    },
    accountDeletion: {
      possible: na('Brave no crea comptes de persona usuària per fer servir el navegador o el cercador.'),
      selfService: na('No hi ha compte.'),
      difficulty: 'unknown',
      requiresSupportContact: false,
      dataRetained: 'Les dades locals resten al dispositiu i es poden esborrar des del mateix navegador.',
      sources: ['brave-browser-privacy'],
    },
    userRights: {
      dataExport: na('No hi ha dades personals emmagatzemades al servidor per exportar.'),
      exportFormatQuality: 'unknown',
      rightsExercise: f('yes', 'official', ['brave-browser-privacy'], undefined, {
        url: 'mailto:privacy@brave.com',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['brave-browser-privacy'], 'Brave Ads està desactivat per defecte i es pot mantenir així indefinidament.', {
        url: 'brave://settings/rewards',
      }),
      telemetryOptOut: f('yes', 'official', ['brave-browser-privacy']),
      granularControls: f('yes', 'official', ['brave-browser-privacy'], 'Escuts configurables per lloc, finestres privades amb Tor, bloqueig d’empremtes digitals i esborrat en tancar.'),
      defaultPosture: 'protective',
      darkPatterns: f('partial', 'editorial', ['brave-browser-privacy'], 'Les funcions de criptomoneda i el moneder apareixen a la interfície sense haver-los demanat.'),
      darkPatternList: [
        {
          type: 'other',
          severity: 'low',
          description:
            'El navegador mostra per defecte accessos al moneder de criptomonedes i al sistema de recompenses, funcions no relacionades amb la navegació que cal desactivar manualment.',
          sources: ['brave-browser-privacy'],
        },
      ],
    },
    security: {
      e2ee: f('yes', 'official', ['brave-browser-privacy'], 'La sincronització entre dispositius es xifra amb una frase de recuperació que només té la persona usuària; Brave no en guarda cap còpia.', {
        scope: 'all-default',
      }),
      transportEncryption: f('yes', 'official', ['brave-browser-privacy'], 'Força les connexions xifrades sempre que és possible.'),
      atRestEncryption: f('yes', 'official', ['brave-browser-privacy']),
      mfa: na('No hi ha comptes de persona usuària que calgui protegir amb un segon factor.'),
      independentAudits: f('partial', 'independent', ['brave-github'], 'El codi és auditable públicament i hi ha revisions externes de components concrets, però no cap auditoria completa publicada.'),
      bugBounty: f('yes', 'official', ['brave-github'], undefined, { url: 'https://hackerone.com/brave' }),
      vulnerabilityDisclosure: f('yes', 'official', ['brave-github']),
    },
    alternatives: [
      {
        app: 'firefox',
        comparability: 'equivalent',
        rationale:
          'Cobreix la mateixa necessitat amb un motor propi i independent, protecció contra el rastreig per defecte i sense funcions de criptomoneda.',
        tradeOffs:
          'Algunes aplicacions web es proven només amb motors basats en Chromium i poden funcionar pitjor.',
      },
    ],
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'Brave ha tingut episodis passats de reputació discutida, com la substitució d’enllaços d’afiliació el 2020, però queden fora de la finestra temporal de la primera onada i no s’han inclòs com a incidents registrats. Convé revisar-ho en la propera actualització.',
      openQuestions: [
        'Cal incorporar l’episodi de 2020 de substitució d’enllaços d’afiliació com a incident documentat?',
      ],
    },
  },
]
