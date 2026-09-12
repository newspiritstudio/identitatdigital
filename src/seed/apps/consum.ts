import { f, na, row, unknown } from '../helpers'
import type { AppSeed } from '../types'

/** Serveis de consum: comerç, repartiment, cites i entreteniment de pagament. */
export const consumApps: AppSeed[] = [
  /* ═══════════════════════════ Amazon ═══════════════════════════ */
  {
    slug: 'amazon',
    name: 'Amazon',
    company: 'amazon-europe-core',
    categories: ['comerc-electronic'],
    tagline: 'Comerç electrònic amb una xarxa publicitària pròpia molt gran',
    summary:
      'L’historial de compres d’una persona és un dels conjunts de dades més reveladors que existeixen: què menja, què llegeix, quina medicació compra, quins regals fa i a qui. Amazon el conserva indefinidament i, des de fa anys, l’aprofita per a una xarxa publicitària que ja és la tercera del món.',
    platforms: ['web', 'ios', 'android', 'other'],
    businessModel: 'commerce',
    jurisdiction: 'Luxemburg, per a persones usuàries de la Unió Europea',
    userBase: 'Més de 300 milions de comptes de clientela activa',
    links: {
      website: 'https://www.amazon.es/',
      privacyPolicy: 'https://www.amazon.es/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ',
      terms: 'https://www.amazon.es/gp/help/customer/display.html?nodeId=508088',
      privacyCenter: 'https://www.amazon.es/hz/privacy-central',
    },
    accountRequired: f('yes', 'official', ['amazon-privacy-notice'], 'Es pot navegar pel catàleg sense compte, però qualsevol compra el requereix.'),
    openSource: f('no', 'official', ['amazon-privacy-notice'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'Amazon combina el que compres, el que mires sense comprar, el que cerques, el que hi llegeixes amb Kindle, el que hi mires amb Prime Video i el que hi dius amb Alexa. La integració d’aquests senyals dins d’un sol compte és el que fa que el perfil sigui tan detallat.',
    dataCollection: [
      row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-privacy-notice'] }),
      row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['amazon-privacy-notice'], note: 'Es comparteix amb les empreses de transport i, en el cas del marketplace, amb els venedors.' }),
      row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-privacy-notice'] }),
      row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'recomanacions-algoritmiques', 'elaboracio-de-perfils'], sources: ['amazon-privacy-notice'], note: 'Es conserva indefinidament i no es pot esborrar sense tancar el compte.' }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['amazon-privacy-notice'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['amazon-privacy-notice'], note: 'Inclou els productes que es miren sense comprar i el temps que s’hi dedica.' }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['amazon-ad-preferences'] }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-privacy-notice'] }),
      row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['amazon-privacy-notice'] }),
      row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['amazon-privacy-notice'], note: 'Interaccions amb Alexa, associades al mateix compte.' }),
      row('historial-de-visualitzacio', 'optional', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['amazon-privacy-notice'], note: 'Prime Video i Kindle formen part del mateix compte.' }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['amazon-privacy-notice'] }),
      row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['amazon-privacy-notice'] }),
      row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['amazon-privacy-notice'], note: 'La xarxa publicitària d’Amazon és present fora del seu propi web.' }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['amazon-privacy-notice'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['amazon-privacy-notice'] }),
      row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-privacy-notice'] }),
      row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['amazon-privacy-notice'], note: 'Deduïbles de la compra de productes de farmàcia, dietètica o material sanitari.' }),
    ],
    tracking: {
      crossAppTracking: f('yes', 'official', ['amazon-privacy-notice'], 'Amazon Advertising opera fora del domini d’Amazon i vincula l’activitat al compte de compra.'),
      advertisingIdentifiers: f('yes', 'official', ['amazon-privacy-notice']),
      thirdPartyTrackersPresent: f('yes', 'official', ['amazon-privacy-notice']),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['amazon-ad-preferences'], 'Es pot desactivar la personalització, però l’ús de l’historial de compres per a recomanacions dins de la botiga continua.', {
        optOutUrl: 'https://www.amazon.es/adprefs',
      }),
      profiling: f('yes', 'regulator', ['amazon-privacy-notice', 'cnpd-amazon-annulled'], 'El perfilat comercial va ser l’objecte de la sanció luxemburguesa de 746 milions d’euros, posteriorment anul·lada per motius processals.'),
      aiTraining: f('partial', 'official', ['amazon-privacy-notice'], 'Les gravacions d’Alexa i les ressenyes s’utilitzen per millorar els serveis. La política no detalla l’ús per a models generatius.'),
    },
    sharing: {
      thirdPartySharing: f('yes', 'official', ['amazon-privacy-notice'], 'Venedors del marketplace, transportistes i socis publicitaris.'),
      intraGroupSharing: f('yes', 'official', ['amazon-privacy-notice'], 'Un sol compte cobreix la botiga, Prime Video, Kindle, Alexa, Audible i Ring.'),
      dataBrokerSales: f('no', 'official', ['amazon-privacy-notice'], 'Amazon declara que no ven informació personal a tercers.'),
      internationalTransfers: f('yes', 'official', ['amazon-privacy-notice'], undefined, { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'low',
      transparencyReport: f('yes', 'official', ['amazon-privacy-notice'], undefined, {
        url: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GYSDRGWQ2C2CRYEF',
      }),
    },
    retention: {
      definedPeriods: f('no', 'official', ['amazon-privacy-notice'], 'La política no fixa terminis de conservació per a l’historial de compres, que a la pràctica és indefinit.'),
      dataAfterDeletion: f('partial', 'official', ['amazon-close-account'], 'Es conserven les dades exigides per la legislació fiscal i mercantil, i les ressenyes publicades no s’eliminen automàticament.'),
    },
    accountDeletion: {
      possible: f('yes', 'official', ['amazon-close-account']),
      selfService: f('partial', 'official', ['amazon-close-account'], 'Hi ha un formulari en línia, però Amazon envia una verificació que cal respondre en cinc dies i, en alguns casos, deriva a atenció al client.'),
      directUrl: 'https://www.amazon.es/privacyprefs/retrieveData',
      difficulty: 'medium',
      waitingPeriodDays: 5,
      requiresSupportContact: false,
      steps: [
        'Ves a la pàgina de sol·licitud de tancament del compte des de la secció de privadesa.',
        'Tria «Tanca el meu compte» i el motiu.',
        'Confirma que has entès que perdràs l’accés a les compres digitals.',
        'Respon dins de cinc dies el missatge de verificació que rebràs per correu o SMS.',
      ],
      obstacles:
        'Tancar el compte fa perdre l’accés a tots els llibres, pel·lícules i continguts digitals comprats, que estan lligats al compte i no al dispositiu. Aquesta pèrdua és, a la pràctica, el gran fre a l’exercici del dret de supressió.',
      dataRetained:
        'Registres de comandes exigits per la normativa fiscal. Les ressenyes i les llistes públiques poden persistir si no s’esborren abans.',
      sources: ['amazon-close-account'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['amazon-privacy-notice'], undefined, {
        url: 'https://www.amazon.es/hz/privacy-central/data-requests/preview.html',
      }),
      exportFormatQuality: 'mixed',
      rightsExercise: f('yes', 'official', ['amazon-privacy-notice'], undefined, {
        url: 'https://www.amazon.es/hz/privacy-central/data-requests/preview.html',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['amazon-ad-preferences'], undefined, { url: 'https://www.amazon.es/adprefs' }),
      telemetryOptOut: f('no', 'official', ['amazon-privacy-notice']),
      granularControls: f('partial', 'official', ['amazon-privacy-notice'], 'Es pot esborrar l’historial de navegació dins de la botiga i desactivar les recomanacions per producte, però no l’historial de compres.'),
      defaultPosture: 'permissive',
      darkPatterns: f('yes', 'regulator', ['amazon-close-account'], 'La Comissió Federal de Comerç dels Estats Units ha documentat el disseny del procés de cancel·lació de Prime, conegut internament com a projecte Ilíada per la seva llargada.'),
      darkPatternList: [
        {
          type: 'hidden-exit',
          severity: 'high',
          description:
            'El procés de cancel·lació de la subscripció Prime va ser dissenyat amb múltiples pantalles d’intercepció, cosa que va motivar una demanda de l’autoritat de consum nord-americana.',
          sources: ['amazon-close-account'],
        },
        {
          type: 'confirmshaming',
          severity: 'medium',
          description:
            'Els avisos de tancament del compte emfatitzen la pèrdua de contingut digital comprat abans de permetre continuar.',
          sources: ['amazon-close-account'],
        },
      ],
    },
    security: {
      e2ee: na('Una botiga en línia no transporta comunicacions privades entre persones usuàries.'),
      transportEncryption: f('yes', 'official', ['amazon-privacy-notice']),
      atRestEncryption: f('yes', 'official', ['amazon-privacy-notice']),
      mfa: f('yes', 'official', ['amazon-privacy-notice'], undefined, { methods: ['totp', 'sms', 'passkey'] }),
      independentAudits: f('yes', 'official', ['amazon-privacy-notice'], 'Certificacions ISO i informes SOC en el marc dels serveis del grup.', {
        url: 'https://aws.amazon.com/compliance/programs/',
      }),
      bugBounty: f('yes', 'official', ['amazon-privacy-notice'], undefined, { url: 'https://hackerone.com/amazonvrp' }),
      vulnerabilityDisclosure: f('yes', 'official', ['amazon-privacy-notice']),
    },
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'Cas important per a la metodologia: la sanció de 746 milions es va anul·lar en apel·lació i, per tant, no pot pesar com una sanció ferma. El motiu de l’anul·lació és processal i no valida les pràctiques, i això ha de quedar escrit a la fitxa perquè no s’interpreti com una absolució.',
      openQuestions: [
        'Quin és el termini real de conservació de l’historial de compres després de tancar el compte?',
      ],
    },
  },

  /* ═══════════════════════════ Glovo ═══════════════════════════ */
  {
    slug: 'glovo',
    name: 'Glovo',
    company: 'glovo',
    categories: ['repartiment-a-domicili'],
    tagline: 'Repartiment a domicili amb dades d’ubicació i sense baixa autoservei',
    summary:
      'Glovo és l’únic servei d’aquesta primera onada on no hem trobat cap manera d’eliminar el compte sense passar per atenció al client. La combinació d’adreça de domicili, comandes d’alimentació i farmàcia, i horaris habituals és molt reveladora, i la companyia arrossega una sanció de l’autoritat espanyola pel tractament de dades de les persones repartidores.',
    platforms: ['ios', 'android', 'web'],
    businessModel: 'commerce',
    jurisdiction: 'Espanya',
    userBase: 'Present a més de 20 països, amb desenes de milions de comptes',
    links: {
      website: 'https://glovoapp.com/',
      privacyPolicy: 'https://glovoapp.com/docs/es/legal/privacy/',
      terms: 'https://glovoapp.com/docs/es/legal/terms/',
    },
    accountRequired: f('yes', 'official', ['glovo-privacy-policy'], 'Cal registrar-se amb adreça electrònica o telèfon per fer qualsevol comanda.'),
    openSource: f('no', 'official', ['glovo-privacy-policy'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'Les comandes de menjar i de farmàcia revelen hàbits alimentaris, restriccions religioses, situacions de salut i rutines domèstiques. L’adreça exacta i les hores de lliurament completen un mapa molt precís de la vida quotidiana.',
    dataCollection: [
      row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['glovo-privacy-policy'] }),
      row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['glovo-privacy-policy'], note: 'Es comparteix amb la persona repartidora i amb l’establiment.' }),
      row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['glovo-privacy-policy'] }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['glovo-privacy-policy'] }),
      row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['glovo-privacy-policy'] }),
      row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['glovo-privacy-policy'] }),
      row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['elaboracio-de-perfils', 'recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['glovo-privacy-policy'] }),
      row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['glovo-privacy-policy'], note: 'Les comandes de farmàcia i parafarmàcia permeten inferir tractaments i condicions.' }),
      row('conviccions-i-opinions', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['glovo-privacy-policy'], note: 'No es demanen, però els hàbits alimentaris poden revelar conviccions religioses.' }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['glovo-privacy-policy'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['glovo-privacy-policy'] }),
      row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['glovo-privacy-policy'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['glovo-privacy-policy'] }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['glovo-privacy-policy'] }),
    ],
    tracking: {
      crossAppTracking: f('yes', 'official', ['glovo-privacy-policy'], 'La política preveu l’ús d’eines de publicitat i d’anàlisi de tercers.'),
      advertisingIdentifiers: f('yes', 'official', ['glovo-privacy-policy']),
      thirdPartyTrackersPresent: f('yes', 'official', ['glovo-privacy-policy']),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['glovo-privacy-policy'], undefined, {
        optOutUrl: 'https://glovoapp.com/docs/es/legal/privacy/',
      }),
      profiling: f('yes', 'official', ['glovo-privacy-policy'], 'La política reconeix explícitament l’elaboració de perfils i indica que s’hi pot oposar escrivint a gdpr@glovoapp.com.'),
      aiTraining: unknown('La política no detalla si les dades s’utilitzen per entrenar models.'),
    },
    sharing: {
      thirdPartySharing: f('yes', 'official', ['glovo-privacy-policy'], 'Establiments, persones repartidores, passarel·les de pagament i proveïdors tecnològics.'),
      intraGroupSharing: f('yes', 'official', ['glovo-privacy-policy'], 'Compartició amb Delivery Hero com a societat matriu.'),
      dataBrokerSales: unknown('No consta la venda de dades a intermediaris.'),
      internationalTransfers: f('yes', 'official', ['glovo-privacy-policy'], undefined, { mechanism: 'sccs' }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('no', 'official', ['glovo-privacy-policy'], 'No publica cap informe de transparència sobre peticions d’autoritats.'),
    },
    retention: {
      definedPeriods: f('partial', 'official', ['glovo-privacy-policy'], 'S’indiquen criteris generals i terminis de prescripció legal, però pocs terminis concrets per categoria.'),
      dataAfterDeletion: f('partial', 'official', ['glovo-privacy-policy'], 'Es conserven les dades de facturació durant els terminis fiscals obligatoris.'),
    },
    accountDeletion: {
      possible: f('yes', 'official', ['glovo-privacy-policy', 'glovo-delete-guide']),
      selfService: f('no', 'independent', ['glovo-delete-guide'], 'No hi ha cap opció d’eliminació dins de la configuració de l’aplicació. Cal obrir un cas a través del formulari d’atenció al client o escriure al canal de protecció de dades.'),
      difficulty: 'hard',
      requiresSupportContact: true,
      steps: [
        'Obre l’aplicació i entra a Perfil i després a Ajuda o Contacta amb nosaltres.',
        'Tria una categoria de consulta i redacta la sol·licitud d’eliminació del compte.',
        'Com a alternativa, escriu a gdpr@glovoapp.com invocant el dret de supressió de l’article 17 del RGPD.',
        'Espera la confirmació per correu electrònic i guarda-la com a prova.',
      ],
      obstacles:
        'L’absència d’un botó d’eliminació obliga a exercir formalment un dret que hauria de poder-se satisfer amb un clic. Sense resposta dins de termini, cal reclamar davant de l’Agència Espanyola de Protecció de Dades.',
      dataRetained: 'Dades de facturació i comandes durant els terminis de prescripció fiscal i mercantil.',
      sources: ['glovo-privacy-policy', 'glovo-delete-guide'],
    },
    userRights: {
      dataExport: f('partial', 'official', ['glovo-privacy-policy'], 'El dret de portabilitat es reconeix a la política, però no hi ha una eina d’autoservei.', {
        url: 'https://glovoapp.com/docs/es/legal/privacy/',
      }),
      exportFormatQuality: 'unknown',
      rightsExercise: f('yes', 'official', ['glovo-privacy-policy'], 'Canal de protecció de dades explícit a la política.', {
        url: 'mailto:gdpr@glovoapp.com',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('partial', 'official', ['glovo-privacy-policy'], 'L’oposició al perfilat s’ha de fer per correu electrònic, no amb un control dins de l’aplicació.', {
        url: 'mailto:gdpr@glovoapp.com',
      }),
      telemetryOptOut: f('no', 'official', ['glovo-privacy-policy']),
      granularControls: f('no', 'official', ['glovo-privacy-policy'], 'L’aplicació no ofereix un panell de privadesa amb controls per finalitat.'),
      defaultPosture: 'permissive',
      darkPatterns: f('yes', 'editorial', ['glovo-delete-guide'], 'L’absència d’eliminació autoservei és, en si mateixa, un patró de retenció: el camí de sortida existeix però està amagat darrere d’atenció al client.'),
      darkPatternList: [
        {
          type: 'hidden-exit',
          severity: 'high',
          description:
            'No hi ha cap opció per eliminar el compte dins de l’aplicació ni del web; cal contactar amb atenció al client o invocar el RGPD per correu electrònic.',
          sources: ['glovo-delete-guide'],
        },
      ],
    },
    security: {
      e2ee: na('El servei no transporta comunicacions privades més enllà del xat puntual amb la persona repartidora.'),
      transportEncryption: f('yes', 'official', ['glovo-security']),
      atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
      mfa: f('partial', 'official', ['glovo-security'], 'L’accés habitual es fa amb un codi d’un sol ús per SMS o correu, cosa que substitueix la contrasenya en lloc de reforçar-la.', {
        methods: ['sms', 'email'],
      }),
      independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
      bugBounty: f('partial', 'official', ['glovo-security'], 'Existeix una pàgina de seguretat amb un canal de comunicació, però no un programa de recompenses públic.', {
        url: 'https://glovoapp.com/en/security',
      }),
      vulnerabilityDisclosure: f('yes', 'official', ['glovo-security']),
    },
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'La troballa més útil d’aquesta fitxa és l’absència de baixa autoservei, verificada revisant la configuració de l’aplicació i la documentació pública. No consta resumida enlloc.',
      openQuestions: [
        'Quin és el temps mitjà real de resposta a una sol·licitud de supressió per correu electrònic?',
      ],
    },
  },

  /* ═══════════════════════════ Tinder ═══════════════════════════ */
  {
    slug: 'tinder',
    name: 'Tinder',
    company: 'match-group',
    categories: ['cites'],
    tagline: 'Cites en línia amb dades sensibles i compartició dins del grup Match',
    summary:
      'Tinder tracta categories especials de dades de l’article 9 del RGPD —orientació sexual i, en alguns perfils, salut o creences— i les combina amb ubicació precisa i fotografies. La pertinença al grup Match, que concentra bona part del mercat, significa que aquesta informació pot circular entre diverses aplicacions de cites de la mateixa empresa.',
    platforms: ['ios', 'android', 'web'],
    businessModel: 'freemium',
    jurisdiction: 'Irlanda, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Al voltant de 50 milions de persones usuàries mensuals',
    links: {
      website: 'https://tinder.com/',
      privacyPolicy: 'https://policies.tinder.com/privacy',
      terms: 'https://policies.tinder.com/terms',
    },
    accountRequired: f('yes', 'official', ['tinder-privacy-policy'], 'Cal un compte verificat amb telèfon i, sovint, fotografies.'),
    openSource: f('no', 'official', ['tinder-privacy-policy'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'És la fitxa amb més dades de categories especials del directori. L’orientació sexual és inherent al servei, la ubicació precisa és necessària per al seu funcionament i les converses queden desades sense xifratge d’extrem a extrem.',
    dataCollection: [
      row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['tinder-privacy-policy'] }),
      row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['tinder-privacy-policy'] }),
      row('orientacio-sexual', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['tinder-privacy-policy'], note: 'És una dada de l’article 9 del RGPD i és inherent al funcionament del servei.' }),
      row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['tinder-privacy-policy'] }),
      row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['tinder-privacy-policy'], note: 'La verificació facial compara un vídeo en directe amb les fotografies del perfil.' }),
      row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['tinder-privacy-policy'], note: 'Sense ubicació no hi ha servei, però es conserva històricament.' }),
      row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['tinder-privacy-policy'], note: 'Sense xifratge d’extrem a extrem; es processen per detectar comportaments abusius.' }),
      row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['tinder-privacy-policy'], note: 'Alguns camps opcionals del perfil poden revelar informació de salut.' }),
      row('conviccions-i-opinions', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['tinder-privacy-policy'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['tinder-privacy-policy'] }),
      row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tinder-privacy-policy'] }),
      row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['tinder-privacy-policy'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['tinder-privacy-policy'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['tinder-privacy-policy'] }),
    ],
    tracking: {
      crossAppTracking: f('yes', 'official', ['tinder-privacy-policy'], 'Ús d’eines publicitàries i d’anàlisi de tercers.'),
      advertisingIdentifiers: f('yes', 'official', ['tinder-privacy-policy']),
      thirdPartyTrackersPresent: f('yes', 'official', ['tinder-privacy-policy']),
    },
    dataUses: {
      targetedAdvertising: f('yes', 'official', ['tinder-privacy-policy'], 'El pla gratuït mostra publicitat basada en dades del perfil i del comportament.'),
      profiling: f('yes', 'official', ['tinder-privacy-policy'], 'L’algoritme de recomanació de perfils és un sistema de perfilat intensiu.'),
      aiTraining: f('partial', 'official', ['tinder-privacy-policy'], 'La política preveu l’ús de dades per desenvolupar i millorar els serveis, incloent-hi eines automatitzades de moderació i recomanació.'),
    },
    sharing: {
      thirdPartySharing: f('yes', 'official', ['tinder-privacy-policy']),
      intraGroupSharing: f('yes', 'official', ['tinder-privacy-policy'], 'Compartició amb les altres marques del grup Match, entre les quals Hinge, OkCupid i Meetic.'),
      dataBrokerSales: f('partial', 'official', ['tinder-privacy-policy'], 'La política preveu la compartició amb socis publicitaris, que en algunes jurisdiccions es considera venda.'),
      internationalTransfers: f('yes', 'official', ['tinder-privacy-policy'], undefined, { mechanism: 'adequacy' }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('no', 'official', ['tinder-privacy-policy'], 'No publica informe de transparència sobre peticions d’autoritats.'),
    },
    retention: {
      definedPeriods: f('partial', 'official', ['tinder-privacy-policy'], 'S’indica una conservació de fins a tres mesos després de l’eliminació per permetre la recuperació, i més enllà per a finalitats legals.'),
      dataAfterDeletion: f('partial', 'official', ['tinder-delete-account'], 'Es conserva informació relacionada amb denúncies de comportament abusiu de manera prolongada, cosa que la mateixa política justifica per protegir altres persones usuàries.'),
      periods: [
        { period: 'Fins a 3 mesos de conservació després de l’eliminació del compte', sources: ['tinder-privacy-policy'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['tinder-delete-account']),
      selfService: f('yes', 'official', ['tinder-delete-account']),
      directUrl: 'https://tinder.com/app/settings/account',
      difficulty: 'easy',
      waitingPeriodDays: 0,
      requiresSupportContact: false,
      steps: [
        'Obre el perfil i entra a Configuració.',
        'Baixa fins al final i tria «Elimina el compte».',
        'Tria «Eliminar el compte» en lloc de «Pausar el compte».',
        'Cancel·la abans la subscripció des de la botiga d’aplicacions, perquè eliminar el compte no la cancel·la.',
      ],
      obstacles:
        'L’aplicació ofereix primer la pausa. Cal saber que la subscripció de pagament és independent i que cal cancel·lar-la per separat a l’App Store o Google Play, o continuarà cobrant-se.',
      dataRetained:
        'Els missatges enviats resten a les converses de les altres persones. La informació vinculada a denúncies es conserva més temps.',
      sources: ['tinder-delete-account', 'tinder-privacy-policy'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['tinder-privacy-policy'], undefined, {
        url: 'https://account.gotinder.com/data',
      }),
      exportFormatQuality: 'open',
      rightsExercise: f('yes', 'official', ['tinder-privacy-policy'], undefined, {
        url: 'https://www.help.tinder.com/hc/en-us/requests/new',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('partial', 'official', ['tinder-privacy-policy'], 'Els controls publicitaris són limitats i depenen en bona part de la configuració del sistema operatiu.'),
      telemetryOptOut: f('no', 'official', ['tinder-privacy-policy']),
      granularControls: f('partial', 'official', ['tinder-privacy-policy'], 'Es pot controlar la visibilitat del perfil i la distància, però no la recollida de dades.'),
      defaultPosture: 'permissive',
      darkPatterns: f('yes', 'editorial', ['tinder-delete-account'], 'La pausa del compte es presenta abans que l’eliminació, i la subscripció continua activa si no es cancel·la per separat.'),
      darkPatternList: [
        {
          type: 'hidden-exit',
          severity: 'medium',
          description:
            'L’opció de pausar el compte es mostra de manera destacada abans de la d’eliminar-lo, i eliminar el compte no cancel·la la subscripció de pagament.',
          sources: ['tinder-delete-account'],
        },
      ],
    },
    security: {
      e2ee: f('no', 'official', ['tinder-privacy-policy'], 'Les converses no tenen xifratge d’extrem a extrem, en part perquè es processen per detectar assetjament.', {
        scope: 'none',
      }),
      transportEncryption: f('yes', 'official', ['tinder-privacy-policy']),
      atRestEncryption: f('yes', 'official', ['tinder-privacy-policy']),
      mfa: f('partial', 'official', ['tinder-privacy-policy'], 'L’accés es fa amb codi d’un sol ús per SMS o amb comptes vinculats; no hi ha segon factor addicional.', {
        methods: ['sms', 'email'],
      }),
      independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
      bugBounty: f('yes', 'official', ['tinder-privacy-policy'], undefined, { url: 'https://hackerone.com/tinder' }),
      vulnerabilityDisclosure: f('yes', 'official', ['tinder-privacy-policy']),
    },
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'És la fitxa on l’absència de xifratge d’extrem a extrem té més conseqüències potencials, perquè les converses contenen dades de l’article 9. La justificació de la moderació és real, però no elimina el risc.',
      openQuestions: [
        'Quina informació concreta es comparteix entre Tinder i la resta d’aplicacions del grup Match?',
      ],
    },
  },

  /* ═══════════════════════════ Netflix ═══════════════════════════ */
  {
    slug: 'netflix',
    name: 'Netflix',
    company: 'netflix',
    categories: ['video-i-streaming'],
    tagline: 'Vídeo per subscripció amb un pla amb publicitat des de 2022',
    summary:
      'Netflix va ser durant anys l’exemple del model sense publicitat: pagues i no ets el producte. La introducció del pla amb anuncis el 2022 va trencar aquesta simplicitat i va portar rastrejadors de tercers a un servei que no en tenia. La sanció neerlandesa de 2024 mostra que la informació sobre tot plegat no era prou clara.',
    platforms: ['web', 'ios', 'android', 'other'],
    businessModel: 'subscription',
    jurisdiction: 'Països Baixos, per a persones usuàries de l’Espai Econòmic Europeu',
    userBase: 'Més de 300 milions de subscripcions de pagament',
    links: {
      website: 'https://www.netflix.com/',
      privacyPolicy: 'https://help.netflix.com/legal/privacy',
      terms: 'https://help.netflix.com/legal/termsofuse',
      privacyCenter: 'https://www.netflix.com/account/privacy',
    },
    accountRequired: f('yes', 'official', ['netflix-privacy-statement'], 'El servei és de pagament i requereix compte i mitjà de pagament.'),
    openSource: f('no', 'official', ['netflix-privacy-statement'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'L’historial de visualització revela gustos, horaris, hàbits de son i, indirectament, orientació i conviccions. Netflix el conserva vinculat al perfil i, en el pla amb publicitat, l’aprofita per segmentar anuncis.',
    dataCollection: [
      row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['netflix-privacy-statement'] }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['netflix-privacy-statement'] }),
      row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['netflix-privacy-statement'] }),
      row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['netflix-privacy-statement'], note: 'Inclou què es mira, quan, durant quant de temps i on s’abandona.' }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['netflix-privacy-statement'] }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['netflix-privacy-statement'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['netflix-privacy-statement'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['netflix-privacy-statement'], note: 'Es fa servir per aplicar restriccions territorials i detectar comptes compartits.' }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['compliment-legal'], sources: ['netflix-privacy-statement'] }),
      row('identificador-publicitari', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['netflix-privacy-statement'], note: 'Només al pla amb publicitat.' }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['netflix-privacy-statement'] }),
      row('xarxa-i-connectivitat', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['netflix-privacy-statement'] }),
      row('contingut-de-missatges', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['netflix-privacy-statement'] }),
      row('llista-de-contactes', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['netflix-privacy-statement'] }),
      row('ubicacio-precisa', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['netflix-privacy-statement'] }),
    ],
    tracking: {
      crossAppTracking: f('partial', 'official', ['netflix-privacy-statement'], 'El pla amb publicitat incorpora socis de mesura que operen fora del servei; el pla sense anuncis, no.'),
      advertisingIdentifiers: f('partial', 'official', ['netflix-privacy-statement'], 'Només al pla amb publicitat.'),
      thirdPartyTrackersPresent: f('partial', 'official', ['netflix-privacy-statement']),
    },
    dataUses: {
      targetedAdvertising: f('partial', 'official', ['netflix-privacy-statement'], 'Només al pla amb anuncis. Els plans de pagament sense publicitat no en mostren.', {
        optOutUrl: 'https://www.netflix.com/account/privacy',
      }),
      profiling: f('yes', 'official', ['netflix-privacy-statement'], 'El sistema de recomanació construeix un perfil de gustos molt detallat, tot i que d’ús intern.'),
      aiTraining: unknown('La declaració de privadesa no detalla si les dades de visualització s’utilitzen per entrenar models.'),
    },
    sharing: {
      thirdPartySharing: f('partial', 'regulator', ['netflix-privacy-statement', 'ap-netflix-2024'], 'Socis publicitaris al pla amb anuncis i proveïdors de serveis. La sanció de 2024 va constatar que la informació sobre aquests destinataris era insuficient.'),
      intraGroupSharing: na('Netflix no forma part d’un grup amb altres serveis de consum.'),
      dataBrokerSales: f('no', 'official', ['netflix-privacy-statement']),
      internationalTransfers: f('yes', 'regulator', ['ap-netflix-2024'], 'La informació sobre les transferències fora de l’Espai Econòmic Europeu va ser un dels punts sancionats.', {
        mechanism: 'adequacy',
      }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('partial', 'official', ['netflix-privacy-statement'], 'Publica informació sobre peticions governamentals dins de l’informe de sostenibilitat, no en un informe específic.'),
    },
    retention: {
      definedPeriods: f('yes', 'official', ['netflix-deletion-retention'], 'Netflix publica una pàgina específica amb què elimina i quan, cosa poc habitual.'),
      dataAfterDeletion: f('partial', 'official', ['netflix-deletion-retention'], 'Un cop cancel·lat el compte, la informació es conserva 10 mesos per facilitar la reactivació, i després s’elimina. Les dades de facturació es conserven pels terminis legals.'),
      periods: [
        { period: '10 mesos de conservació després de la cancel·lació abans de l’eliminació automàtica', sources: ['netflix-deletion-retention'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['netflix-deletion-retention'], 'Es pot cancel·lar la subscripció i sol·licitar l’eliminació immediata sense esperar els 10 mesos.'),
      selfService: f('yes', 'official', ['netflix-cancel']),
      directUrl: 'https://www.netflix.com/cancelplan',
      difficulty: 'easy',
      waitingPeriodDays: 0,
      requiresSupportContact: false,
      steps: [
        'Entra al compte des del web i tria «Cancel·la la subscripció».',
        'Confirma la cancel·lació; el servei continua fins al final del període pagat.',
        'Per esborrar les dades sense esperar 10 mesos, demana-ho des de la pàgina de privadesa del compte.',
      ],
      obstacles:
        'La cancel·lació és senzilla, però l’eliminació de les dades no és automàtica: cal demanar-la expressament o esperar deu mesos.',
      dataRetained: 'Registres de facturació durant els terminis fiscals obligatoris.',
      sources: ['netflix-cancel', 'netflix-deletion-retention'],
    },
    userRights: {
      dataExport: f('yes', 'official', ['netflix-privacy-statement'], undefined, {
        url: 'https://www.netflix.com/account/getmyinfo',
      }),
      exportFormatQuality: 'open',
      rightsExercise: f('yes', 'regulator', ['netflix-privacy-statement', 'ap-netflix-2024'], 'El dret d’accés es va exercir amb resultats incomplets durant el període investigat per l’autoritat neerlandesa.', {
        url: 'https://www.netflix.com/account/privacy',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('partial', 'official', ['netflix-privacy-statement'], 'Es pot limitar la personalització dels anuncis al pla corresponent; canviar a un pla sense publicitat és l’única sortida completa.', {
        url: 'https://www.netflix.com/account/privacy',
      }),
      telemetryOptOut: f('no', 'official', ['netflix-privacy-statement']),
      granularControls: f('partial', 'official', ['netflix-privacy-statement'], 'Es pot ocultar l’historial de visualització títol a títol i gestionar perfils, però no aturar-ne la recollida.'),
      defaultPosture: 'mixed',
      darkPatterns: f('no', 'official', ['netflix-cancel'], 'El procés de cancel·lació és directe i sense pantalles d’intercepció, cosa que contrasta amb bona part del sector.'),
    },
    security: {
      e2ee: na('El servei distribueix contingut, no comunicacions privades entre persones usuàries.'),
      transportEncryption: f('yes', 'official', ['netflix-privacy-statement']),
      atRestEncryption: f('yes', 'official', ['netflix-privacy-statement']),
      mfa: f('partial', 'official', ['netflix-privacy-statement'], 'Netflix no ofereix verificació en dos passos clàssica; fa servir codis d’un sol ús per confirmar accessos sospitosos.', {
        methods: ['email', 'sms'],
      }),
      independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
      bugBounty: f('yes', 'official', ['netflix-privacy-statement'], undefined, { url: 'https://bugcrowd.com/netflix' }),
      vulnerabilityDisclosure: f('yes', 'official', ['netflix-privacy-statement']),
    },
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'L’absència de verificació en dos passos és una mancança rellevant per a un servei amb dades de pagament, i cal dir-ho encara que la resta de la fitxa sigui relativament favorable.',
    },
  },

  /* ═══════════════════════════ Spotify ═══════════════════════════ */
  {
    slug: 'spotify',
    name: 'Spotify',
    company: 'spotify',
    categories: ['musica-i-audio'],
    tagline: 'Música per subscripció amb inferència d’estat d’ànim',
    summary:
      'L’historial d’escolta de Spotify permet inferir estat d’ànim, rutines, moments del dia i fins i tot episodis vitals. La companyia ho ha explotat obertament amb campanyes basades en dades agregades. La sanció sueca de 2023, reduïda després en via judicial, no va ser per recollir massa dades sinó per no explicar prou bé què en feia.',
    platforms: ['ios', 'android', 'web', 'windows', 'macos', 'linux'],
    businessModel: 'freemium',
    jurisdiction: 'Suècia',
    userBase: 'Més de 675 milions de persones usuàries actives mensuals',
    links: {
      website: 'https://www.spotify.com/',
      privacyPolicy: 'https://www.spotify.com/legal/privacy-policy/',
      terms: 'https://www.spotify.com/legal/end-user-agreement/',
      privacyCenter: 'https://www.spotify.com/account/privacy/',
    },
    accountRequired: f('yes', 'official', ['spotify-privacy-policy'], 'Cal compte fins i tot per al pla gratuït.'),
    openSource: f('no', 'official', ['spotify-privacy-policy'], undefined, { licence: 'Privativa' }),
    dataSummary:
      'Spotify recull cada reproducció amb marca de temps, dispositiu i context. Aquesta granularitat és el que permet les recomanacions, i també el que fa que l’historial d’escolta sigui una dada més personal del que sembla.',
    dataCollection: [
      row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['spotify-privacy-policy'] }),
      row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['spotify-privacy-policy'] }),
      row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['spotify-privacy-policy'], note: 'Historial complet d’escolta amb marca de temps.' }),
      row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['spotify-privacy-policy'] }),
      row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['spotify-privacy-policy'] }),
      row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['recomanacions-algoritmiques'], sources: ['spotify-privacy-policy'] }),
      row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['spotify-privacy-policy'] }),
      row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['compliment-legal', 'publicitat-personalitzada'], sources: ['spotify-privacy-policy'] }),
      row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['spotify-privacy-policy'] }),
      row('informacio-del-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['spotify-privacy-policy'] }),
      row('adreca-ip', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['spotify-privacy-policy'] }),
      row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['spotify-privacy-policy'] }),
      row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['spotify-privacy-policy'] }),
      row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['spotify-privacy-policy'], note: 'Comandes de veu, si s’activen.' }),
      row('ubicacio-precisa', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['spotify-privacy-policy'] }),
      row('contingut-de-missatges', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['spotify-privacy-policy'] }),
    ],
    tracking: {
      crossAppTracking: f('partial', 'official', ['spotify-privacy-policy'], 'El pla gratuït incorpora socis publicitaris que operen fora del servei.'),
      advertisingIdentifiers: f('yes', 'official', ['spotify-privacy-policy']),
      thirdPartyTrackersPresent: f('yes', 'official', ['spotify-privacy-policy']),
    },
    dataUses: {
      targetedAdvertising: f('partial', 'official', ['spotify-privacy-settings'], 'Només al pla gratuït. El pla de pagament no mostra publicitat, però la recollida de dades d’escolta continua.', {
        optOutUrl: 'https://www.spotify.com/account/privacy/',
      }),
      profiling: f('yes', 'official', ['spotify-privacy-policy'], 'Es pot desactivar la personalització de la publicitat, però no la de les recomanacions, que és el nucli del servei.'),
      aiTraining: f('partial', 'official', ['spotify-privacy-policy'], 'La política preveu l’ús de dades per desenvolupar noves funcions, incloent-hi les basades en aprenentatge automàtic com el DJ.'),
    },
    sharing: {
      thirdPartySharing: f('yes', 'official', ['spotify-privacy-policy'], 'Anunciants, socis de mesura, discogràfiques amb dades agregades i aplicacions connectades.'),
      intraGroupSharing: na('Spotify no forma part d’un grup amb altres serveis de consum.'),
      dataBrokerSales: f('no', 'official', ['spotify-privacy-policy']),
      internationalTransfers: f('yes', 'official', ['spotify-privacy-policy'], undefined, { mechanism: 'sccs' }),
    },
    transparency: {
      policyClarity: 'medium',
      transparencyReport: f('yes', 'official', ['spotify-privacy-policy'], undefined, {
        url: 'https://www.spotify.com/legal/transparency-report/',
      }),
    },
    retention: {
      definedPeriods: f('partial', 'regulator', ['spotify-privacy-policy', 'imy-spotify-2023'], 'La política descriu criteris de conservació però amb pocs terminis numèrics, cosa relacionada amb la sanció sueca.'),
      dataAfterDeletion: f('partial', 'official', ['spotify-close-account'], 'El compte es pot recuperar durant 7 dies; després s’elimina, però es conserven dades de facturació i registres legals.'),
      periods: [
        { period: '7 dies de finestra de recuperació abans de l’eliminació definitiva', sources: ['spotify-close-account'] },
      ],
    },
    accountDeletion: {
      possible: f('yes', 'official', ['spotify-close-account']),
      selfService: f('yes', 'official', ['spotify-close-account'], 'Es fa des del web mitjançant un formulari guiat.'),
      directUrl: 'https://support.spotify.com/us/article/close-account/',
      difficulty: 'easy',
      waitingPeriodDays: 7,
      requiresSupportContact: false,
      steps: [
        'Cancel·la primer la subscripció de pagament si en tens.',
        'Entra al suport de Spotify i obre l’article de tancament del compte.',
        'Segueix el formulari «Tanca el compte» i confirma les dades.',
        'Confirma des de l’enllaç que rebràs per correu electrònic.',
      ],
      obstacles:
        'Cal cancel·lar la subscripció abans, i la confirmació arriba per correu electrònic amb un enllaç de validesa limitada.',
      dataRetained:
        'Les llistes de reproducció públiques poden continuar sent accessibles per a les persones que hi estaven subscrites. Es conserven dades de facturació.',
      sources: ['spotify-close-account'],
    },
    userRights: {
      dataExport: f('yes', 'regulator', ['spotify-privacy-settings', 'imy-spotify-2023'], 'Es pot demanar l’historial d’escolta complet, tot i que arriba en dos lliuraments i el segon pot trigar fins a 30 dies.', {
        url: 'https://www.spotify.com/account/privacy/',
      }),
      exportFormatQuality: 'open',
      rightsExercise: f('yes', 'regulator', ['imy-spotify-2023'], 'L’autoritat sueca va constatar que Spotify facilitava les dades però no explicava prou clarament com les feia servir.', {
        url: 'https://support.spotify.com/us/privacy/',
        responseTimeDays: 30,
      }),
    },
    controls: {
      adPersonalizationOptOut: f('yes', 'official', ['spotify-privacy-settings'], undefined, {
        url: 'https://www.spotify.com/account/privacy/',
      }),
      telemetryOptOut: f('no', 'official', ['spotify-privacy-policy']),
      granularControls: f('partial', 'official', ['spotify-privacy-settings'], 'Hi ha una sessió privada temporal i controls de personalització de la publicitat, però no es pot desactivar el registre de l’historial d’escolta.'),
      defaultPosture: 'mixed',
      darkPatterns: f('no', 'editorial', ['spotify-close-account'], 'El procés de tancament és clar, tot i que exigeix passar pel web i no per l’aplicació.'),
    },
    security: {
      e2ee: na('El servei distribueix contingut, no comunicacions privades entre persones usuàries.'),
      transportEncryption: f('yes', 'official', ['spotify-privacy-policy']),
      atRestEncryption: f('yes', 'official', ['spotify-privacy-policy']),
      mfa: f('partial', 'official', ['spotify-privacy-policy'], 'Spotify no ofereix verificació en dos passos per a comptes creats amb contrasenya; l’accés per enllaç màgic i els inicis de sessió amb comptes de tercers en són el substitut.', {
        methods: ['email'],
      }),
      independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
      bugBounty: f('yes', 'official', ['spotify-privacy-policy'], undefined, { url: 'https://hackerone.com/spotify' }),
      vulnerabilityDisclosure: f('yes', 'official', ['spotify-privacy-policy']),
    },
    review: {
      researchStatus: 'documented',
      lastReviewedAt: '2026-09-09',
      incidentsReviewed: true,
      editorialNotes:
        'L’import de la sanció sueca es va reduir substancialment en via judicial, de manera que l’incident queda registrat amb estat «anul·lada o reduïda». Comptar-la per l’import original inflaria la penalització.',
    },
  },
]
