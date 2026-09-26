import { f, na, row, unknown } from '../helpers'
import type { AppSeed } from '../types'

export const metaApps: AppSeed[] = [
  /* ═══════════════════════════ WhatsApp ═══════════════════════════ */
  {
    slug: 'whatsapp',
    name: 'WhatsApp',
    company: 'whatsapp-ireland',
    categories: ['missatgeria'],
    tagline: 'Missatgeria xifrada d’extrem a extrem dins del grup Meta',
    summary:
      'WhatsApp és el servei de missatgeria més utilitzat als Països Catalans i xifra d’extrem a extrem els missatges, les trucades i, opcionalment, les còpies de seguretat. El contingut està molt ben protegit, però el servei exigeix un número de telèfon, llegeix l’agenda de contactes sencera i genera un volum considerable de metadades accessibles per a Meta, que les comparteix amb la resta del grup.',
    platforms: ['ios', 'android', 'web', 'windows', 'macos'],
    businessModel: 'freemium',
    jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Més de 2.000 milions de persones usuàries mensuals a escala mundial',
    links: {
      website: 'https://www.whatsapp.com/',
      privacyPolicy: 'https://www.whatsapp.com/legal/privacy-policy-eea',
      terms: 'https://www.whatsapp.com/legal/terms-of-service-eea',
      privacyCenter: 'https://www.whatsapp.com/privacy',
    },
    accountRequired: f('yes', 'official', ['wa-privacy-policy-eea'], 'Cal un número de telèfon verificat per SMS o trucada. No hi ha cap manera de fer servir el servei sense número.'),
    openSource: f('no', 'official', ['wa-security'], 'El client i el servidor són privatius. El protocol de xifratge (Signal Protocol) sí que és obert i està documentat, però la implementació no es pot auditar públicament.', {
      licence: 'Privativa',
    }),
    dataSummary:
      'WhatsApp no pot llegir el contingut dels missatges, però sí que sap qui parla amb qui, des de quin dispositiu, amb quina freqüència i des de quina adreça IP. També puja l’agenda de contactes, cosa que li dona informació de persones que no són usuàries del servei.',
    dataCollection: [
      row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['wa-privacy-policy-eea'], note: 'És l’identificador principal del compte i el punt d’unió amb la resta del grup Meta.' }),
      row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['wa-privacy-policy-eea'] }),
      row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['wa-privacy-policy-eea'], note: 'El nom de perfil és lliure i no es verifica.' }),
      row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['wa-privacy-policy-eea'], note: 'Si s’autoritza, WhatsApp puja periòdicament els números de l’agenda, incloent-hi els de persones que no fan servir el servei.' }),
      row('contingut-de-missatges', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['wa-security'], note: 'Xifrat d’extrem a extrem: els servidors el transporten però no el poden llegir ni el conserven un cop lliurat.' }),
      row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['wa-privacy-policy-eea'], note: 'Qui es comunica amb qui, quan i durant quant de temps. És la informació que el xifratge no protegeix.' }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'prestacio-del-servei'], sources: ['wa-privacy-policy-eea'], note: 'Permet inferir la ubicació aproximada encara que no s’hagi compartit la ubicació.' }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'millora-del-producte'], sources: ['wa-privacy-policy-eea'] }),
      row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['wa-privacy-policy-eea'] }),
      row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['wa-privacy-policy-eea'], note: 'Només si es comparteix la ubicació en un xat, i llavors va xifrada d’extrem a extrem.' }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte', 'mesura-i-analisi-dus'], sources: ['wa-privacy-policy-eea'] }),
      row('dades-de-pagament', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['wa-privacy-policy-eea'], note: 'El servei és gratuït a Europa i no demana mitjà de pagament.' }),
      row('historial-de-navegacio', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['wa-privacy-policy-eea'] }),
    ],
    tracking: {
      crossAppTracking: f('no', 'official', ['wa-privacy-policy-eea'], 'WhatsApp no incorpora rastrejadors publicitaris de tercers ni segueix l’activitat de la persona usuària fora de l’aplicació.'),
      advertisingIdentifiers: f('no', 'official', ['wa-privacy-policy-eea'], 'No fa servir l’identificador publicitari del dispositiu.'),
      thirdPartyTrackersPresent: f('no', 'official', ['wa-privacy-policy-eea']),
    },
    dataUses: {
      targetedAdvertising: f('no', 'official', ['wa-privacy-policy-eea'], 'A l’Espai Econòmic Europeu WhatsApp no mostra publicitat dins de les converses. La política sí que preveu compartir informació amb Meta per a finalitats de producte i seguretat.'),
      profiling: f('partial', 'official', ['wa-privacy-policy-eea'], 'No hi ha perfilat publicitari del contingut, però sí anàlisi de patrons d’ús i de metadades per a seguretat, integritat i millora del producte.'),
      aiTraining: f('partial', 'official', ['wa-privacy-policy-eea'], 'Els missatges xifrats no es poden fer servir per entrenar models. Les interaccions amb Meta AI dins de WhatsApp sí que surten del xifratge i queden subjectes a les condicions de Meta AI.'),
    },
    sharing: {
      thirdPartySharing: f('partial', 'official', ['wa-privacy-policy-eea'], 'Proveïdors de serveis i, en compliment de requeriments legals, autoritats. No hi ha cessió comercial a anunciants.'),
      intraGroupSharing: f('yes', 'regulator', ['wa-privacy-policy-eea', 'dpc-whatsapp-2021'], 'WhatsApp comparteix informació de compte, dispositiu i ús amb la resta d’empreses de Meta. La manca de claredat sobre aquesta compartició va ser el nucli de la sanció de 225 milions d’euros de 2021.'),
      dataBrokerSales: f('no', 'official', ['wa-privacy-policy-eea']),
      internationalTransfers: f('yes', 'official', ['wa-privacy-policy-eea'], 'Transferències als Estats Units i a altres països on opera el grup.', { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('yes', 'official', ['meta-transparency-center'], 'Queda cobert per l’informe conjunt de Meta, no per un informe propi de WhatsApp.', {
        url: 'https://transparency.meta.com/',
      }),
    },
    retention: {
      definedPeriods: f('partial', 'official', ['wa-manage-info'], 'Es publiquen terminis concrets per a l’eliminació del compte, però no per a totes les categories de dades.'),
      dataAfterDeletion: f('partial', 'official', ['wa-manage-info'], 'Es conserven còpies de la informació en registres i còpies de seguretat fins a 90 dies, i indefinidament la informació que altres persones han compartit sobre tu. Els missatges als dispositius dels altres participants no s’esborren.'),
      periods: [
        { dataType: 'contingut-de-missatges', period: 'No es conserva un cop lliurat; fins a 30 dies si no s’ha pogut lliurar', sources: ['wa-privacy-policy-eea'] },
        { period: 'Fins a 90 dies per esborrar la informació dels sistemes després de sol·licitar l’eliminació', sources: ['wa-manage-info'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['wa-delete-account']),
      selfService: f('yes', 'official', ['wa-delete-account'], 'Es fa íntegrament des de l’aplicació, sense contactar amb ningú.'),
      difficulty: 'easy',
      waitingPeriodDays: 0,
      requiresSupportContact: false,
      steps: [
        'Obre WhatsApp i ves a Configuració.',
        'Entra a Compte i tria «Elimina el meu compte».',
        'Introdueix el número de telèfon amb el prefix del país.',
        'Tria el motiu i confirma l’eliminació.',
      ],
      obstacles:
        'Eliminar el compte és senzill, però desinstal·lar l’aplicació sense fer aquest pas no elimina res: el compte continua actiu i la informació es conserva.',
      dataRetained:
        'Els missatges que has enviat es conserven als dispositius de les persones destinatàries. La informació dels registres pot trigar fins a 90 dies a desaparèixer i la informació que altres han compartit sobre tu no s’elimina.',
      sources: ['wa-delete-account', 'wa-manage-info'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['wa-manage-info'], 'Es pot demanar un informe del compte des de la mateixa aplicació.', {
        url: 'https://faq.whatsapp.com/227626810186044',
      }),
      exportFormatQuality: 'mixed',
      rightsExercise: f('yes', 'official', ['wa-manage-info'], 'Formulari de drets del grup Meta.', {
        url: 'https://www.whatsapp.com/contact/',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: na('WhatsApp no mostra publicitat personalitzada dins de les converses a l’Espai Econòmic Europeu.'),
      telemetryOptOut: f('no', 'official', ['wa-privacy-policy-eea'], 'No hi ha cap opció per desactivar la recollida de dades d’ús i de diagnòstic.'),
      granularControls: f('partial', 'official', ['wa-privacy-policy-eea'], 'Hi ha controls detallats de visibilitat (última hora de connexió, foto, estats, confirmacions de lectura), però no de recollida de dades.'),
      defaultPosture: 'mixed',
      darkPatterns: f('partial', 'editorial', ['wa-privacy-policy-eea'], 'La sol·licitud d’accés a l’agenda es presenta com a imprescindible per fer servir l’aplicació, tot i que es pot fer servir sense.'),
      darkPatternList: [
        {
          type: 'confusing-language',
          severity: 'medium',
          description:
            'L’aplicació presenta l’accés complet a l’agenda com un requisit per començar, tot i que és possible iniciar converses introduint números manualment.',
          sources: ['wa-privacy-policy-eea'],
        },
      ],
    },
    security: {
      e2ee: f('yes', 'official', ['wa-security', 'wa-backups-whitepaper'], 'Missatges, trucades, videotrucades i estats van xifrats d’extrem a extrem per defecte des de 2016. Les còpies de seguretat al núvol es poden xifrar, però cal activar-ho.', {
        scope: 'metadata-excluded',
        protocol: 'Signal Protocol',
      }),
      transportEncryption: f('yes', 'official', ['wa-security']),
      atRestEncryption: f('yes', 'official', ['wa-backups-whitepaper'], 'Les còpies de seguretat xifrades d’extrem a extrem són opcionals i requereixen una contrasenya o clau de 64 dígits.'),
      mfa: f('yes', 'official', ['wa-security'], 'Verificació en dos passos amb un PIN de sis dígits i, més recentment, claus d’accés.', {
        methods: ['passkey', 'app-push'],
      }),
      independentAudits: f('partial', 'independent', ['wa-security'], 'El protocol Signal ha estat àmpliament analitzat per la comunitat acadèmica, però no hi ha auditories publicades de la implementació de WhatsApp.', {
        url: 'https://www.whatsapp.com/security/advisories',
      }),
      bugBounty: f('yes', 'official', ['wa-security'], 'Cobert pel programa de recompenses de Meta.', {
        url: 'https://www.facebook.com/whitehat',
      }),
      vulnerabilityDisclosure: f('yes', 'official', ['wa-security'], 'WhatsApp publica avisos de seguretat amb identificadors CVE.'),
    },
    alternatives: [
      {
        app: 'signal',
        comparability: 'equivalent',
        rationale:
          'Cobreix la mateixa necessitat (missatgeria, trucades i grups xifrats d’extrem a extrem) amb el mateix protocol criptogràfic, però sense agenda al servidor, sense metadades explotables i sense pertànyer a un grup publicitari.',
        tradeOffs:
          'La base d’usuaris és molt més petita, cosa que a la pràctica obliga a mantenir els dos serveis o a convèncer l’entorn.',
      },
      {
        app: 'telegram',
        comparability: 'partial',
        rationale:
          'Cobreix la missatgeria i hi afegeix canals i grups massius, però els xats normals no estan xifrats d’extrem a extrem: només els xats secrets, que cal iniciar expressament i no funcionen en grup.',
        tradeOffs: 'Protegeix menys el contingut que WhatsApp.',
      },
    ],
    review: {
      researchStatus: 'in-depth',
      lastReviewedAt: '2026-09-22',
      incidentsReviewed: true,
      editorialNotes:
        'La puntuació separa contingut i metadades. Si només es mirés el xifratge, WhatsApp sortiria com un dels serveis més protectors del directori; el que penalitza la seva puntuació de privadesa és la compartició dins del grup, l’agenda i la impossibilitat de fer servir el servei sense número de telèfon.',
      openQuestions: [
        'Quina informació concreta de WhatsApp arriba als sistemes publicitaris de Meta i quina es queda dins del servei?',
        'Quin percentatge de comptes té activades les còpies de seguretat xifrades?',
      ],
    },
  },

  /* ═══════════════════════════ Instagram ═══════════════════════════ */
  {
    slug: 'instagram',
    name: 'Instagram',
    company: 'meta-platforms-ireland',
    categories: ['xarxes-socials', 'descobriment-visual'],
    tagline: 'Xarxa social visual amb publicitat basada en perfilat',
    summary:
      'Instagram funciona amb la mateixa política de privadesa i la mateixa infraestructura publicitària que Facebook. Tot el que s’hi fa (què es mira i durant quant de temps, què s’hi cerca, amb qui s’interactua) alimenta un perfil publicitari compartit amb la resta del grup Meta. És, juntament amb Facebook, la plataforma amb més resolucions sancionadores acumulades del directori.',
    platforms: ['ios', 'android', 'web'],
    businessModel: 'advertising',
    jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Més de 2.000 milions de comptes actius mensuals',
    links: {
      website: 'https://www.instagram.com/',
      privacyPolicy: 'https://www.facebook.com/privacy/policy/',
      terms: 'https://help.instagram.com/581066165581870',
      privacyCenter: 'https://accountscenter.instagram.com/',
    },
    accountRequired: f('yes', 'official', ['meta-privacy-policy'], 'Es pot veure contingut públic sense compte de manera molt limitada, però qualsevol altre ús requereix registre amb adreça electrònica o número de telèfon.'),
    openSource: f('no', 'official', ['meta-privacy-policy'], 'Codi íntegrament privatiu.', { licence: 'Privativa' }),
    dataSummary:
      'Instagram recull continguts, interaccions, temps de visualització, cerques, contactes, ubicació i activitat fora de la plataforma a través del píxel de Meta present a milers de llocs web i aplicacions. Combinar l’activitat dins i fora de la plataforma permet un perfil publicitari molt detallat.',
    dataCollection: [
      row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['meta-privacy-policy'] }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['meta-privacy-policy', 'dpc-meta-ai-2025'] }),
      row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['meta-privacy-policy', 'dpc-meta-ai-2025'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'recomanacions-algoritmiques', 'elaboracio-de-perfils'], sources: ['meta-privacy-policy'], note: 'Inclou el temps que es passa mirant cada publicació, no només els «m’agrada».' }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['meta-privacy-policy'] }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['meta-privacy-policy'] }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'prestacio-del-servei'], sources: ['meta-privacy-policy'] }),
      row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['meta-privacy-policy'] }),
      row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['meta-privacy-policy'] }),
      row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['meta-privacy-policy'], note: 'Activitat en llocs i aplicacions de tercers recollida amb el píxel de Meta.' }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['meta-privacy-policy'] }),
      row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['meta-privacy-policy'], note: 'Només si es fan compres dins de la plataforma o se subscriu el pla sense publicitat.' }),
      row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['meta-privacy-policy'] }),
    ],
    tracking: {
      crossAppTracking: f('yes', 'regulator', ['meta-privacy-policy', 'dpc-meta-ads-2023'], 'El píxel de Meta i el kit de desenvolupament per a aplicacions recullen activitat en llocs i aplicacions de tercers i la vinculen al compte.'),
      advertisingIdentifiers: f('yes', 'official', ['meta-privacy-policy']),
      thirdPartyTrackersPresent: f('yes', 'official', ['meta-privacy-policy']),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'regulator', ['meta-privacy-policy', 'dpc-meta-ads-2023'], 'És el model de negoci del servei. L’autoritat irlandesa va declarar el 2023 que Meta no podia emparar-la en l’execució del contracte.', {
        optOutUrl: 'https://accountscenter.instagram.com/ad_preferences/',
      }),
      profiling: f('yes', 'regulator', ['meta-privacy-policy', 'dpc-meta-ads-2023'], 'Perfilat extensiu amb categories d’interès inferides a partir del comportament dins i fora de la plataforma.'),
      aiTraining: f('yes', 'regulator', ['dpc-meta-ai-2025'], 'Des del maig de 2025 Meta fa servir el contingut públic de comptes d’adults europeus per entrenar els seus models, empara el tractament en l’interès legítim i ofereix un formulari d’oposició.', {
        optOutUrl: 'https://www.facebook.com/privacy/genai',
      }),
    },
    sharing: {
      thirdPartySharing: f('yes', 'official', ['meta-privacy-policy'], 'Anunciants, socis de mesura, proveïdors i autoritats.'),
      intraGroupSharing: f('yes', 'official', ['meta-privacy-policy'], 'Compartició sistemàtica amb Facebook, Messenger, Threads i WhatsApp a través del Centre de comptes.'),
      dataBrokerSales: f('partial', 'official', ['meta-privacy-policy'], 'Meta afirma que no ven dades personals, però rep informació de socis publicitaris i de comerços que la incorpora al perfil.'),
      internationalTransfers: f('yes', 'regulator', ['meta-privacy-policy', 'dpc-meta-transfers-2023'], 'Transferències als Estats Units, sancionades el 2023 abans de l’adopció del marc d’adequació actual.', {
        mechanism: 'adequacy',
      }),
    },
    transparency: {
      policyClarity: 'low',
      transparencyReport: f('yes', 'official', ['meta-transparency-center'], undefined, { url: 'https://transparency.meta.com/' }),
    },
    retention: {
      definedPeriods: f('partial', 'official', ['meta-privacy-policy'], 'La política parla de conservar les dades «el temps necessari» sense terminis concrets per a la majoria de categories.'),
      dataAfterDeletion: f('partial', 'official', ['ig-delete-account'], 'Un cop passat el període de gràcia de 30 dies, pot trigar fins a 90 dies a esborrar-ho tot dels sistemes de còpia de seguretat. Els missatges enviats a altres persones no s’eliminen.'),
      periods: [
        { period: '30 dies de període de gràcia abans de començar l’eliminació', sources: ['ig-delete-account'] },
        { period: 'Fins a 90 dies addicionals per esborrar-ho dels sistemes', sources: ['ig-delete-account'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['ig-delete-account']),
      selfService: f('yes', 'official', ['ig-delete-account'], 'Es fa des del Centre de comptes, tot i que el camí és llarg i la desactivació temporal es presenta primer.'),
      directUrl: 'https://www.instagram.com/accounts/remove/request/permanent/',
      difficulty: 'medium',
      waitingPeriodDays: 30,
      requiresSupportContact: false,
      steps: [
        'Entra al Centre de comptes des de la configuració d’Instagram.',
        'Ves a Dades personals i després a Propietat i control del compte.',
        'Tria «Desactivació o eliminació» i selecciona el compte.',
        'Tria «Eliminar el compte» en lloc de «Desactivar-lo».',
        'Confirma amb la contrasenya i no tornis a iniciar sessió durant 30 dies.',
      ],
      obstacles:
        'La desactivació temporal apareix sempre com a primera opció i amb un llenguatge més amable. Si s’inicia sessió durant els 30 dies següents, l’eliminació s’anul·la sense avisar-ne les conseqüències.',
      dataRetained:
        'Els missatges directes enviats es conserven a les bústies de les persones destinatàries. Meta manté informació que altres persones han compartit sobre tu i registres necessaris per a obligacions legals.',
      sources: ['ig-delete-account'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['fb-download-info'], 'Exportació unificada des del Centre de comptes de Meta.', {
        url: 'https://accountscenter.instagram.com/info_and_permissions/dyi/',
      }),
      exportFormatQuality: 'mixed',
      rightsExercise: f('yes', 'official', ['meta-privacy-center'], undefined, {
        url: 'https://www.facebook.com/help/contact/540977946302970',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('partial', 'regulator', ['meta-privacy-center', 'dpc-meta-ads-2023'], 'Es poden limitar algunes categories i l’ús de dades de socis, però no desactivar la publicitat personalitzada sense pagar la subscripció sense anuncis.', {
        url: 'https://accountscenter.instagram.com/ad_preferences/',
      }),
      telemetryOptOut: f('no', 'official', ['meta-privacy-policy']),
      granularControls: f('partial', 'official', ['meta-privacy-center'], 'Hi ha molts controls, però repartits entre la configuració d’Instagram, el Centre de comptes i el Centre de privadesa de Meta.'),
      defaultPosture: 'permissive',
      darkPatterns: f('yes', 'regulator', ['dpc-tiktok-2023', 'dpc-instagram-2022'], 'La resolució de 2022 va constatar que els comptes de menors es creaven públics per defecte i que el pas a perfil d’empresa exposava el telèfon i l’adreça electrònica sense advertir-ho prou.'),
      darkPatternList: [
        {
          type: 'hidden-exit',
          severity: 'high',
          description:
            'L’eliminació del compte està tres nivells per sota dins del Centre de comptes i sempre apareix precedida de la desactivació temporal.',
          sources: ['ig-delete-account'],
        },
        {
          type: 'preselected',
          severity: 'high',
          description:
            'Els comptes de persones menors d’edat es creaven públics per defecte, cosa que va motivar una sanció de 405 milions d’euros.',
          sources: ['dpc-instagram-2022'],
        },
      ],
    },
    security: {
      e2ee: f('partial', 'official', ['meta-privacy-policy'], 'Els missatges directes tenen xifratge d’extrem a extrem per defecte des del desplegament de 2023-2024, però no cobreix el contingut publicat ni les històries.', {
        scope: 'partial-default',
        protocol: 'Labyrinth, derivat del Signal Protocol',
      }),
      transportEncryption: f('yes', 'official', ['meta-privacy-policy']),
      atRestEncryption: f('yes', 'official', ['meta-privacy-policy']),
      mfa: f('yes', 'official', ['google-safety-center'], 'Verificació en dos passos amb aplicació d’autenticació, SMS i claus de seguretat.', {
        methods: ['totp', 'sms', 'hardware-key', 'app-push'],
      }),
      independentAudits: unknown('No hi ha auditories de seguretat independents publicades específicament sobre Instagram.'),
      bugBounty: f('yes', 'official', ['meta-transparency-center'], undefined, { url: 'https://www.facebook.com/whitehat' }),
      vulnerabilityDisclosure: f('yes', 'official', ['meta-transparency-center']),
    },
    alternatives: [
      {
        app: 'pinterest',
        comparability: 'partial',
        rationale:
          'Cobreix el descobriment visual i el desat d’imatges, però no la part de xarxa social amb persones conegudes ni la missatgeria.',
        tradeOffs: 'També viu de la publicitat i infereix intenció de compra, de manera que el guany en privadesa és limitat.',
      },
    ],
    review: {
      researchStatus: 'in-depth',
      lastReviewedAt: '2026-09-22',
      incidentsReviewed: true,
      editorialNotes:
        'Instagram i Facebook comparteixen política, infraestructura i sancions. Es mantenen com a fitxes separades perquè el perfil de dades no és idèntic: Instagram recull més senyals visuals i de temps d’atenció, i Facebook més dades de xarxa social i d’esdeveniments.',
      openQuestions: [
        'Quin abast té el xifratge d’extrem a extrem dels missatges directes i quines excepcions manté?',
      ],
    },
  },

  /* ═══════════════════════════ Facebook ═══════════════════════════ */
  {
    slug: 'facebook',
    name: 'Facebook',
    company: 'meta-platforms-ireland',
    categories: ['xarxes-socials'],
    tagline: 'La xarxa social amb més sancions de protecció de dades acumulades',
    summary:
      'Facebook és el servei amb l’historial regulador més extens del directori: transferències internacionals, base jurídica de la publicitat, recol·lecció massiva de dades públiques, bretxa de testimonis d’accés i galetes. La fitxa permet veure quins d’aquests problemes s’han corregit i quins no en una plataforma que acumula dades des de fa vint anys.',
    platforms: ['ios', 'android', 'web'],
    businessModel: 'advertising',
    jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Més de 3.000 milions de persones usuàries actives mensuals',
    links: {
      website: 'https://www.facebook.com/',
      privacyPolicy: 'https://www.facebook.com/privacy/policy/',
      terms: 'https://www.facebook.com/legal/terms',
      privacyCenter: 'https://www.facebook.com/privacy/center/',
    },
    accountRequired: f('yes', 'official', ['meta-privacy-policy'], 'El contingut públic és accessible parcialment sense compte, però qualsevol interacció requereix registre amb nom real segons les condicions del servei.'),
    openSource: f('no', 'official', ['meta-privacy-policy'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'Facebook combina el que la persona publica, el que fa dins de la plataforma, el que fa fora a través del píxel de Meta i el que altres persones comparteixen sobre ella. Aquesta darrera categoria permet que existeixin perfils d’ombra de persones que no tenen compte.',
    dataCollection: [
      row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['meta-privacy-policy'], note: 'Les condicions exigeixen el nom que es fa servir a la vida quotidiana.' }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['meta-privacy-policy', 'mit-facebook-leak-2021'] }),
      row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['meta-privacy-policy', 'dpc-meta-ai-2025'] }),
      row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['dpc-meta-ai-2025'] }),
      row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['meta-privacy-policy', 'dpc-facebook-scraping-2022'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['meta-privacy-policy'] }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['meta-privacy-policy'] }),
      row('conviccions-i-opinions', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['meta-privacy-policy'], note: 'Els camps de religió i opinió política del perfil són opcionals, però les inferències a partir del comportament no ho són.' }),
      row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['meta-privacy-policy'] }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['meta-privacy-policy', 'cnil-cookies-2021'] }),
      row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['meta-privacy-policy'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['meta-privacy-policy'] }),
      row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada'], sources: ['meta-privacy-policy'], note: 'Informació de compra rebuda de comerços associats a través de les eines de negoci de Meta.' }),
      row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['meta-privacy-policy'] }),
    ],
    tracking: {
      crossAppTracking: f('yes', 'regulator', ['meta-privacy-policy', 'dpc-meta-ads-2023'], 'El píxel de Meta és present a una part molt gran del web comercial i envia informació d’activitat encara que no s’hi hagi iniciat sessió.'),
      advertisingIdentifiers: f('yes', 'official', ['meta-privacy-policy']),
      thirdPartyTrackersPresent: f('yes', 'official', ['meta-privacy-policy']),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'regulator', ['dpc-meta-ads-2023'], 'Sancionada el 2023 per no tenir una base jurídica vàlida. Meta va passar a l’interès legítim i, després, al model de subscripció o consentiment.', {
        optOutUrl: 'https://accountscenter.facebook.com/ad_preferences/',
      }),
      profiling: f('yes', 'regulator', ['dpc-meta-ads-2023', 'meta-privacy-policy']),
      aiTraining: f('yes', 'regulator', ['dpc-meta-ai-2025'], 'Contingut públic d’adults europeus des del maig de 2025, amb formulari d’oposició sense necessitat de justificació.', {
        optOutUrl: 'https://www.facebook.com/privacy/genai',
      }),
    },
    sharing: {
      thirdPartySharing: f('yes', 'official', ['meta-privacy-policy']),
      intraGroupSharing: f('yes', 'official', ['meta-privacy-policy']),
      dataBrokerSales: f('partial', 'official', ['meta-privacy-policy'], 'Meta no ven dades, però n’adquireix i en rep de socis comercials per enriquir els perfils.'),
      internationalTransfers: f('yes', 'regulator', ['dpc-meta-transfers-2023'], 'Objecte de la sanció més alta del RGPD el 2023.', { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'low',
      transparencyReport: f('yes', 'official', ['meta-transparency-center'], undefined, { url: 'https://transparency.meta.com/' }),
    },
    retention: {
      definedPeriods: f('partial', 'official', ['meta-privacy-policy']),
      dataAfterDeletion: f('partial', 'official', ['fb-delete-account'], 'Fins a 90 dies per esborrar-ho tot dels sistemes, i conservació indefinida del que altres persones han publicat sobre tu i dels missatges que has enviat.'),
      periods: [
        { period: '30 dies de període de gràcia abans d’iniciar l’eliminació', sources: ['fb-delete-account'] },
        { period: 'Fins a 90 dies des de l’inici del procés per esborrar totes les publicacions', sources: ['fb-delete-account'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['fb-delete-account']),
      selfService: f('yes', 'official', ['fb-delete-account']),
      directUrl: 'https://www.facebook.com/help/delete_account',
      difficulty: 'medium',
      waitingPeriodDays: 30,
      requiresSupportContact: false,
      steps: [
        'Entra a la configuració i al Centre de comptes.',
        'Obre Dades personals i després Propietat i control del compte.',
        'Tria «Desactivació o eliminació» i selecciona el perfil.',
        'Tria «Eliminar el compte», descarrega la informació si la vols conservar i confirma.',
      ],
      obstacles:
        'El procés mostra primer la desactivació, adverteix de la pèrdua de serveis vinculats i qualsevol inici de sessió dins dels 30 dies cancel·la l’eliminació.',
      dataRetained:
        'Els missatges enviats resten a les bústies de les persones destinatàries. Es conserven registres per a obligacions legals i informació publicada per altres persones.',
      sources: ['fb-delete-account'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['fb-download-info'], 'Es pot triar el format HTML o JSON i el període.', {
        url: 'https://www.facebook.com/dyi',
      }),
      exportFormatQuality: 'mixed',
      rightsExercise: f('yes', 'official', ['meta-privacy-center'], undefined, {
        url: 'https://www.facebook.com/help/contact/540977946302970',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('partial', 'regulator', ['meta-privacy-center', 'dpc-meta-ads-2023'], 'Es poden limitar categories i dades de socis, però la publicitat personalitzada només es desactiva del tot pagant la subscripció.', {
        url: 'https://accountscenter.facebook.com/ad_preferences/',
      }),
      telemetryOptOut: f('no', 'official', ['meta-privacy-policy']),
      granularControls: f('partial', 'official', ['meta-privacy-center'], 'Existeix l’eina d’activitat fora de Facebook, que permet desvincular l’historial de tercers del compte, però està poc visible.'),
      defaultPosture: 'permissive',
      darkPatterns: f('yes', 'regulator', ['cnil-cookies-2021'], 'La CNIL va sancionar l’asimetria entre acceptar i rebutjar galetes.'),
      darkPatternList: [
        {
          type: 'unbalanced-consent',
          severity: 'high',
          description:
            'L’avís de galetes permetia acceptar-les amb un sol clic i obligava a diversos passos per rebutjar-les, cosa que va motivar una sanció de 60 milions d’euros.',
          sources: ['cnil-cookies-2021'],
        },
        {
          type: 'hidden-exit',
          severity: 'medium',
          description:
            'L’eliminació del compte requereix travessar diverses pantalles que ofereixen alternatives menys definitives.',
          sources: ['fb-delete-account'],
        },
      ],
    },
    security: {
      e2ee: f('partial', 'official', ['meta-privacy-policy'], 'Messenger té xifratge d’extrem a extrem per defecte des de finals de 2023; la resta de la plataforma no.', {
        scope: 'partial-default',
        protocol: 'Labyrinth',
      }),
      transportEncryption: f('yes', 'official', ['meta-privacy-policy']),
      atRestEncryption: f('yes', 'official', ['meta-privacy-policy']),
      mfa: f('yes', 'official', ['meta-privacy-center'], undefined, { methods: ['totp', 'sms', 'hardware-key', 'app-push'] }),
      independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
      bugBounty: f('yes', 'official', ['meta-transparency-center'], undefined, { url: 'https://www.facebook.com/whitehat' }),
      vulnerabilityDisclosure: f('yes', 'official', ['meta-transparency-center']),
    },
    review: {
      researchStatus: 'in-depth',
      lastReviewedAt: '2026-09-22',
      incidentsReviewed: true,
      editorialNotes:
        'Cinc incidents registrats, quatre dels quals amb sanció ferma. Per casos com aquest l’historial d’incidents té pes propi dins de la dimensió de seguretat: el que diuen les polítiques no coincideix amb el que mostren les actuacions dels reguladors.',
      openQuestions: [
        'Quantes persones sense compte de Facebook tenen dades recollides pel píxel de Meta?',
      ],
    },
  },
]
